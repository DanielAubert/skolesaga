# Bruker æøå-dommene på tekst: bare tegn endres, aldri ord, og bare utenfor matte, kode, tagger, lenker og slugs.
# Invarianten norm(ny) == norm(gammel) håndheves for hver enkelt erstatning.
#   regler = Regler(typedommer, forekomstdommer)
#   ny = regler.rett(kilde, sti, tekst)      -> (ny_tekst, [endringer])
import re, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tekst import SKRIPT, KODEBLOKK, MATTE, TAGG, URL, FOLD, norm

ORDTEGN = 'A-Za-zÆØÅæøåÉéÜüÖöÄä'
NABO = re.compile(f'[{ORDTEGN}]+')


def maskerte_spenn(s):
    spenn = []
    for rx in (SKRIPT, KODEBLOKK, MATTE, TAGG, URL, re.compile(r'&[a-z]+;')):
        spenn += [(m.start(), m.end()) for m in rx.finditer(s)]
    return sorted(spenn)


def i_spenn(i, spenn):
    return any(a <= i < b for a, b in spenn)


def tilpass(ny, gammel):
    if gammel.isupper() and len(gammel) > 1:
        return ny.upper()
    if gammel[:1].isupper():
        return ny[:1].upper() + ny[1:]
    return ny


def naboer(s, a, b):
    """Forrige og neste ord rundt s[a:b], med tagger tatt bort."""
    for_ = NABO.findall(TAGG.sub(' ', s[max(0, a - 120):a]))
    etter = NABO.findall(TAGG.sub(' ', s[b:b + 120]))
    return (for_[-1] if for_ else ''), (etter[0] if etter else '')


class Regler:
    def __init__(self, alltid, forekomster, unntak=(), blokk=()):
        # alltid: {ordform_lower: rettes_til_lower}; forekomster: {(kilde, sti, ord): [(forrige, neste, rettes_til)]}
        self.alltid = alltid
        self.blokk = set(blokk)  # (kilde, sti, ordform) som ikke skal røres; ('*','*',ord) = ordformen aldri
        self.unntak = set(unntak)  # ordformer der invarianten er fraveket etter kontroll for hånd
        self.brudd = []  # erstatninger som ville brutt invarianten: hoppes over og meldes
        self.forekomster = forekomster
        self.ord = set(alltid) | {o.lower() for (_, _, o) in forekomster}
        # Ord inntil kodetegn (anførsel, =, (, [, _, punktum foran bokstav) eller i slugs (bindestrek) røres aldri.
        self.rx = re.compile(r'(?<![\w\\/.\-\'"\[=_#@$])([' + ORDTEGN + r']+)(?![\w\-\'"\]=_(\[]|\.\w)')

    def rett(self, kilde, sti, s):
        treff = [m for m in self.rx.finditer(s) if m.group(0).lower() in self.ord]
        if not treff:
            return s, []
        spenn = maskerte_spenn(s)
        endr = []
        ut = []
        pos = 0
        for m in treff:
            g = m.group(0)
            if i_spenn(m.start(), spenn):
                continue
            ny = None
            if (kilde, sti, g) in self.blokk or ('*', '*', g) in self.blokk or (kilde, '', g) in self.blokk:
                continue
            if g.lower() in self.alltid:
                ny = tilpass(self.alltid[g.lower()], g)
            else:
                f, e = naboer(s, m.start(), m.end())
                for (pf, pe, til) in self.forekomster.get((kilde, sti, g), []):
                    if pf == f and pe == e:
                        ny = tilpass(til, g)
                        break
            if not ny or ny == g:
                continue
            if g.lower() not in self.unntak and norm(ny) != norm(g) and norm(ny.replace('æ', 'e')) != norm(g.replace('æ', 'e')) \
                    and ny.translate(FOLD).lower() != g.translate(FOLD).lower():
                self.brudd.append((kilde, sti, g, ny))
                continue
            ut.append(s[pos:m.start()])
            ut.append(ny)
            pos = m.end()
            endr.append((g, ny, re.sub(r'\s+', ' ', s[max(0, m.start() - 40):m.end() + 40])))
        ut.append(s[pos:])
        return ''.join(ut), endr
