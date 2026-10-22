"""Felles bibliotek for auditverktøyet (Skolesaga-kapitler). Python 3.9-kompatibelt, bare standardbiblioteket.

Kjernen er `felt(blokk)`: de feltene eleven faktisk ser, slik content-block-renderer.tsx / textbook-exercise-item.tsx
viser dem. Alle porter, utdraget og hukommelsens hasher bygger på den, så de er enige om hva «innholdet» er.
`_meta` (nynorsk oversettelsesminne) hoppes alltid over.
"""
import glob
import hashlib
import json
import os
import re

AUDIT = os.path.dirname(os.path.abspath(__file__))
ROOT = os.environ.get('SKOLESAGA_ROOT') or os.path.normpath(os.path.join(AUDIT, '..', '..'))
CH = os.path.join(ROOT, 'src', 'lib', 'data', 'chapters')
PUBLIC = os.path.join(ROOT, 'public')

# ---------------------------------------------------------------- kapitler

def kap_sti(cid, sprak='bm'):
    return os.path.join(CH, ('nn/' if sprak.startswith('nn') else '') + cid + '.json')


def les_kap(cid, sprak='bm'):
    p = kap_sti(cid, sprak)
    if not os.path.exists(p):
        return None
    with open(p, encoding='utf-8') as f:
        return json.load(f)


def finn_ider(args, narrativ=False):
    """args: kapittel-id-er eller prefikser («1t», «2p-», «1t-3»). Returnerer sorterte id-er (uten -narrativ med mindre
    narrativ=True, da kommer <id>-narrativ i tillegg)."""
    alle = sorted(os.path.basename(p)[:-5] for p in glob.glob(os.path.join(CH, '*.json')))
    alle = [a for a in alle if not a.startswith('_')]
    ut = []
    for a in args:
        if a in alle:  # eksplisitt id, også <id>-narrativ (22.10.2026: ga tomt utdrag før)
            ut.append(a)
            continue
        pre = a if ('-' in a) else a + '-'
        ut += [x for x in alle if x.startswith(pre) and not x.endswith('-narrativ')]
    ut = sorted(set(ut), key=naturlig)
    if narrativ:
        ut += [x + '-narrativ' for x in ut if x + '-narrativ' in alle]
    return ut


def naturlig(s):
    return [int(t) if t.isdigit() else t for t in re.split(r'(\d+)', s)]


def bok(cid):
    return cid.split('-')[0]

# ---------------------------------------------------------------- blokker og elevsynlige felt

REP_TITLER = re.compile(r'repetisjon|ekstraoppg|repetisjonsoppg', re.I)


def blokker(kap):
    """Flat liste av (blokk, ctx) i leserekkefølge. ctx: {'rep': bool (i repetisjons-/ekstraboks), 'forelder': id}.
    Collapsible gir seg selv (tittel/knapp) + barna som egne blokker. Kapittelhodet er pseudoblokka '_kapittel'."""
    ut = [({'id': '_kapittel', 'type': '_kapittel', 'title': kap.get('title'), 'description': kap.get('description'),
            'keyTerms': kap.get('keyTerms'), 'competenceGoals': kap.get('competenceGoals')}, {'rep': False, 'forelder': None})]

    def gå(lst, rep, forelder):
        for b in lst or []:
            if not isinstance(b, dict):
                continue
            ut.append((b, {'rep': rep, 'forelder': forelder}))
            if b.get('type') == 'collapsible' and isinstance(b.get('content'), list):
                gå(b['content'], rep or bool(REP_TITLER.search(str(b.get('title', '')))), b.get('id'))
    gå(kap.get('content'), False, None)
    gå(kap.get('exercises'), False, None)
    return ut


def er_repetisjon(b, ctx):
    e = b.get('exercise') if isinstance(b.get('exercise'), dict) else {}
    return bool(ctx.get('rep') or e.get('hideInlineSolution'))


class Felt(object):
    __slots__ = ('sti', 'tekst', 'art', 'rolle')

    def __init__(self, sti, tekst, art, rolle):
        self.sti, self.tekst, self.art, self.rolle = sti, tekst, art, rolle

    def __repr__(self):
        return 'Felt(%s,%s,%s)' % (self.sti, self.art, self.rolle)


# art: md (markdown+KaTeX), latex (rein formel), kode (GeoGebra/Python/Asymptote), ren (vanlig tekst, ikke rendret som
#      matte), bilde (sti), fasit (svar-/kontrollverdi eleven ikke ser direkte, men som sjekker svaret)
# rolle: tittel, teori, oppgave, losning, skjult-losning, fasit, hint, alternativ, figurtekst, alt, kode, bilde, begrep

def _s(v):
    return v if isinstance(v, str) else None


def felt(b):
    t = b.get('type')
    F = []

    def add(sti, v, art, rolle):
        if isinstance(v, str) and v.strip():
            F.append(Felt(sti, v, art, rolle))
        elif isinstance(v, (int, float)) and not isinstance(v, bool) and art == 'fasit':
            F.append(Felt(sti, str(v), art, rolle))
        elif isinstance(v, list) and art == 'fasit':
            F.append(Felt(sti, json.dumps(v, ensure_ascii=False), art, rolle))

    if t == '_kapittel':
        add('title', b.get('title'), 'md', 'tittel')
        add('description', b.get('description'), 'md', 'teori')
        for i, k in enumerate(b.get('keyTerms') or []):
            if isinstance(k, dict):
                add('keyTerms[%d].term' % i, k.get('term'), 'md', 'begrep')
                add('keyTerms[%d].definition' % i, k.get('definition'), 'md', 'begrep')
        return F
    if t == 'exercise':
        e = b.get('exercise')
        add('title', b.get('title'), 'md', 'tittel')
        if not isinstance(e, dict):
            for k in ('task', 'problem'):
                add(k, b.get(k), 'md', 'oppgave')
            add('solution', _s(b.get('solution')), 'md', 'losning')
            return F
        p = 'exercise.'
        add(p + 'task', e.get('task'), 'md', 'oppgave')
        add(p + 'image', e.get('image'), 'bilde', 'bilde')
        subs = e.get('subTasks') or []
        har_sub_los = any(isinstance(s, dict) and s.get('solution') for s in subs)
        skjult = bool(e.get('hideInlineSolution'))
        for i, s in enumerate(subs):
            if not isinstance(s, dict):
                continue
            q = p + 'subTasks[%d].' % i
            add(q + 'task', s.get('task'), 'md', 'oppgave')
            add(q + 'solution', s.get('solution'), 'md', 'skjult-losning' if skjult else 'losning')
            add(q + 'answer', s.get('answer'), 'fasit', 'fasit')
            add(q + 'expressionAnswer', s.get('expressionAnswer'), 'fasit', 'fasit')
            for j, o in enumerate(s.get('multipleChoiceOptions') or []):
                add(q + 'multipleChoiceOptions[%d]' % j, o, 'md', 'alternativ')
        for i, o in enumerate(e.get('options') or []):
            q = p + 'options[%d].' % i
            if isinstance(o, str):
                add(q[:-1], o, 'md', 'alternativ')
            elif isinstance(o, dict):
                add(q + 'text', o.get('text'), 'md', 'alternativ')
                if o.get('isCorrect') is not None:
                    add(q + 'isCorrect', str(bool(o.get('isCorrect'))).lower(), 'fasit', 'fasit')
                add(q + 'feedback', o.get('feedback'), 'md', 'losning')
        for j, o in enumerate(e.get('multipleChoiceOptions') or []):
            add(p + 'multipleChoiceOptions[%d]' % j, o, 'md', 'alternativ')
        for qi, qq in enumerate(e.get('questions') or []):  # quiz med delspørsmål (22.10.2026)
            if not isinstance(qq, dict):
                continue
            qp = p + 'questions[%d].' % qi
            add(qp + 'task', qq.get('task') or qq.get('question'), 'md', 'oppgave')
            for j, o in enumerate(qq.get('options') or []):
                if isinstance(o, dict):
                    add(qp + 'options[%d].text' % j, o.get('text'), 'md', 'alternativ')
                    if o.get('isCorrect') is not None:
                        add(qp + 'options[%d].isCorrect' % j, str(bool(o.get('isCorrect'))).lower(), 'fasit', 'fasit')
                elif isinstance(o, str):
                    add(qp + 'options[%d]' % j, o, 'md', 'alternativ')
            for k in ('solution', 'explanation'):
                add(qp + k, qq.get(k), 'md', 'losning')
        for i, h in enumerate(e.get('hints') or []):
            add(p + 'hints[%d]' % i, h if isinstance(h, str) else None, 'md', 'hint')
        sol = e.get('solution')
        if isinstance(sol, dict):
            add(p + 'solution.answer', sol.get('answer'), 'md', 'losning')
            add(p + 'solution.explanation', sol.get('explanation'), 'md', 'losning')
        else:
            add(p + 'solution', sol, 'md', 'skjult-losning' if (skjult or har_sub_los) else 'losning')
        add(p + 'explanation', e.get('explanation'), 'md', 'losning')
        for i, s in enumerate(e.get('solutionSteps') or []):
            add(p + 'solutionSteps[%d]' % i, s, 'md', 'losning')
        add(p + 'answer', e.get('answer'), 'fasit', 'fasit')
        add(p + 'correctAnswer', e.get('correctAnswer'), 'fasit', 'fasit')
        add(p + 'difficulty', e.get('difficulty'), 'fasit', 'fasit')
        for i, c in enumerate(e.get('initialCommands') or []):
            add(p + 'initialCommands[%d]' % i, c, 'kode', 'kode')
        add(p + 'initialCode', e.get('initialCode'), 'kode', 'kode')
        return F
    if t == 'example':
        add('title', b.get('title'), 'md', 'tittel')
        add('problem', b.get('problem') or (b.get('content') if not b.get('problem') else None), 'md', 'oppgave')
        add('solution', b.get('solution'), 'md', 'losning')
        for i, s in enumerate(b.get('steps') or []):
            add('steps[%d]' % i, s, 'md', 'losning')
        for i, sb in enumerate(b.get('solutionContent') or []):
            if isinstance(sb, dict):
                for f in felt(sb):
                    F.append(Felt('solutionContent[%d].' % i + f.sti, f.tekst, f.art, 'losning' if f.rolle == 'teori' else f.rolle))
        return F
    if t == 'image':
        add('src', b.get('src'), 'bilde', 'bilde')
        add('alt', b.get('alt'), 'ren', 'alt')
        add('caption', b.get('caption'), 'md', 'figurtekst')
        return F
    if t == 'collapsible':
        add('title', b.get('title'), 'md', 'tittel')
        add('buttonText', b.get('buttonText'), 'ren', 'tittel')
        return F
    if t == 'geogebra':
        add('title', b.get('title'), 'md', 'tittel')
        add('description', b.get('description'), 'md', 'teori')
        for i, c in enumerate(b.get('commands') or []):
            add('commands[%d]' % i, c, 'kode', 'kode')
        return F
    if t == 'formula':
        add('title', b.get('title'), 'md', 'tittel')
        add('latex', b.get('latex'), 'latex', 'teori')
        if not b.get('latex'):
            add('content', b.get('content'), 'latex', 'teori')
        add('description', b.get('description'), 'md', 'teori')
        return F
    if t == 'sign-diagram':
        add('title', b.get('title'), 'md', 'tittel')
        for i, c in enumerate(b.get('criticalPoints') or []):
            add('criticalPoints[%d]' % i, c, 'latex', 'teori')
        for i, fa in enumerate(b.get('factors') or []):
            if isinstance(fa, dict):
                add('factors[%d].label' % i, fa.get('label'), 'latex', 'teori')
                add('factors[%d].signs' % i, fa.get('signs'), 'ren', 'teori')
        add('resultLabel', b.get('resultLabel'), 'latex', 'teori')
        return F
    if t == 'asymptote':
        add('title', b.get('title'), 'md', 'tittel')
        add('svgPath', b.get('svgPath'), 'bilde', 'bilde')
        add('caption', b.get('caption'), 'md', 'figurtekst')
        if b.get('showCode'):
            add('code', b.get('code'), 'kode', 'kode')
        return F
    if t == 'illustration':
        add('caption', b.get('caption'), 'md', 'figurtekst')
        return F
    if t in ('video', 'audio'):
        add('title', b.get('title'), 'md', 'tittel')
        add('description', b.get('description'), 'md', 'teori')
        if t == 'audio':
            add('src', b.get('src'), 'bilde', 'bilde')
        return F
    if t == 'dynamic-plot':
        add('title', b.get('title'), 'md', 'tittel')
        add('description', b.get('description'), 'md', 'teori')
        for i, fn in enumerate(b.get('functions') or []):
            if isinstance(fn, dict):
                add('functions[%d].expression' % i, fn.get('expression'), 'kode', 'kode')
                add('functions[%d].label' % i, fn.get('label'), 'md', 'teori')
        return F
    # text, definition, theorem, proof, note, warning, tip og ukjente typer
    add('title', b.get('title'), 'md', 'tittel')
    c = b.get('content')
    if isinstance(c, str):
        add('content', c, 'md', 'teori')
    elif isinstance(c, dict):  # quiz-/eldre exercise-format
        for k, v in c.items():
            if isinstance(v, str):
                add('content.' + k, v, 'md', 'losning' if 'solution' in k else 'oppgave')
    for k in ('proof', 'problem', 'solution', 'hint', 'description'):
        add(k, b.get(k), 'md', 'losning' if k in ('proof', 'solution') else 'teori')
    return F


def blokk_hash(b):
    """Hash av elevsynlig innhold (inkl. fasitfelt og bildestier), 16 hex-tegn."""
    data = [(f.sti, f.art, f.tekst) for f in felt(b)] + [b.get('type')]
    return hashlib.sha256(json.dumps(data, ensure_ascii=False).encode('utf-8')).hexdigest()[:16]

# ---------------------------------------------------------------- segmentering slik LatexRenderer gjør det

DOLLAR_PARK = '\u0001D\u0001'


def segmenter(tekst, art='md'):
    """Del et felt i segmenter [(slag, innhold)] med slag ∈ tekst|inline|display|kode, slik LatexRenderer gjør det:
    ```kode``` og `kode` først, så parkeres \\$ (escapet dollar), så $$…$$ (kan spenne linjer), så $…$ (ikke over linjeskift).
    Det som er igjen av $ etter dette, ser eleven som et dollartegn."""
    if art == 'latex':
        return [('display', tekst)]
    if art in ('kode', 'bilde', 'fasit'):
        return [('kode', tekst)]
    if art == 'ren':
        return [('tekst', tekst)]
    out = []
    # 1) kodeblokker og inline-kode
    rx = re.compile(r'```[a-zA-Z0-9+#_-]*[ \t]*\n?[\s\S]*?```|`[^`\n]+`')
    pos = 0
    biter = []
    for m in rx.finditer(tekst):
        biter.append(('rest', tekst[pos:m.start()]))
        biter.append(('kode', m.group(0)))
        pos = m.end()
    biter.append(('rest', tekst[pos:]))
    for slag, s in biter:
        if slag == 'kode':
            out.append(('kode', s))
            continue
        s = re.sub(r'\\{1,2}\$', DOLLAR_PARK, s)
        # 2) $$…$$
        p2 = 0
        for m in re.finditer(r'\$\$([\s\S]*?)\$\$', s):
            _inline(s[p2:m.start()], out)
            out.append(('display', m.group(1)))
            p2 = m.end()
        _inline(s[p2:], out)
    return [(a, b.replace(DOLLAR_PARK, '\\$')) for a, b in out if b != '']


def _inline(s, out):
    p = 0
    for m in re.finditer(r'\$([^$\n]+?)\$', s):
        out.append(('tekst', s[p:m.start()]))
        out.append(('inline', m.group(1)))
        p = m.end()
    out.append(('tekst', s[p:]))


def utenfor_matte(tekst, art='md'):
    return ''.join(s for slag, s in segmenter(tekst, art) if slag == 'tekst')


def matte(tekst, art='md'):
    return [(slag, s) for slag, s in segmenter(tekst, art) if slag in ('inline', 'display')]

# ---------------------------------------------------------------- tall

def tall_i(s):
    """Tall (som sifferstrenger) i en tekst, normalisert for bm↔nn-sammenlikning: {,}→, tusenskille fjernet, alt-tekst i
    markdown-bilder fjernet."""
    t = s.replace('\\,', '').replace('{,}', ',').replace('\u00a0', ' ').replace('\u2009', ' ').replace('\\ ', ' ')
    t = re.sub(r'(?<=\d) (?=\d{3}\b)', '', t)
    t = re.sub(r'!\[[^\]]*\]', '', t)
    t = re.sub(r'\]\([^)]*\)', ']', t)
    return sorted(re.findall(r'\d+', t))


def tokens(n_tegn):
    return int(round(n_tegn / 4.0))


def skriv_json(sti, data):
    """Skriv JSON trygt (ny fil ved siden av, så os.replace)."""
    tmp = sti + '.tmp%d' % os.getpid()
    with open(tmp, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
    os.replace(tmp, sti)
