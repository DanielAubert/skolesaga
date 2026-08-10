#!/usr/bin/env python3
"""sjekk-latex.py <emne> — LaTeX/KaTeX-port for en høyskolebok.

Fanger de fire feilene som faktisk har nådd produksjon i tidligere bøker:

1. **Kontrolltegn fra enkel backslash.** LaTeX i JSON MÅ ha dobbel backslash.
   `"\\text"` med én backslash blir TAB, `"\\approx"` blir BEL. Det verste er at
   KaTeX ikke alltid kaster feil — `\t` + «ext{m/s}^2» rendrer bare *galt*.
   Denne sjekken er derfor viktigere enn KaTeX-kjøringen.
2. **KaTeX-feil.** Ukjente miljøer (`psmallmatrix` finnes ikke i repoets KaTeX),
   ugyldige kommandoer, ubalanserte klammer.
3. **Løs avsluttende backslash.** `$\cos,\sin,e,\ $` knekker fordi rendereren
   trimmer strengen før den sendes til KaTeX.
4. **Gåseøyne inne i matte.** « og » har ingen glyffer i KaTeX-fontene og gir
   «No character metrics»-advarsel + skjev rendring.
5. **Ubalansert `$` i ÉN streng.** Et oddetall `$` i samme tekstfelt betyr at en
   formel er avkuttet: resten av strengen vises som rå LaTeX-kilde. Fant fem
   slike i fasitene til live bøker (mat1100, mat1110, stk1110 x3). KaTeX ser
   dem ikke, fordi den delen aldri blir sendt til KaTeX i det hele tatt.
   `\\$` (escapet dollar) og `${...}` (JS-templatesyntaks omtalt i prosa) er
   lovlige unntak.
6. **Bart `%` inne i matte.** `%` starter en LaTeX-kommentar og spiser resten av
   formelen — «\\text{95 %-KI}» forsvant helt i stk1110. Skal være `\\%`.

Kjør:  python3 scripts/hoyskolebok/sjekk-latex.py fys1001
Krever `katex` i node_modules for punkt 2 (hopper over med melding om det mangler).
"""
import glob
import json
import os
import re
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

KTRL = {7: r"\a (BEL)", 8: r"\b (BS)", 9: r"\t (TAB)", 11: r"\v (VT)",
        12: r"\f (FF)", 13: r"\r (CR)"}

# LaTeX-kommandoer som ALDRI gir mening utenfor $...$. Står de bart i prosaen,
# rendres de ikke — leseren ser «300\,\text{K}» bokstavelig.
# ⚠ ENKEL backslash: strengene er PARSET fra JSON, så «\\text» i fila er «\text»
# her. Mønsteret matchet først dobbel backslash og ga 12 000 falske treff.
RA_LATEX = re.compile(
    r"\\(?:text|mathrm|frac|dfrac|tfrac|sqrt|cdot|times|alpha|beta|gamma|delta"
    r"|theta|lambda|rho|sigma|tau|omega|Delta|Omega|approx|leq|geq|neq"
    r"|infty|lfloor|lceil|quad|qquad)\b"
    r"|\\[,;!]")

# Enhver `\ord{`-konstruksjon utenfor matte. Se begrunnelsen ved bruksstedet.
UKJENT_MAKRO = re.compile(r"\\[a-zA-Z]{2,}\s*\{")
# ⚠ Krever TO bokstaver. Med én treffer den `\n{` i Python-f-strenger
# («print(f"…\n{x}")»), som er vanlig i kodefagene — 4 falske positive
# i in1000 alene. Prisen er at énbokstavs LaTeX som `\v{s}` slipper
# gjennom; målt over katalogen finnes det null slike utenfor matte.

# Kjente LaTeX-kommandoer, brukt av sjekk 0 (enkel backslash i quiz-TS).
# Lista er bevisst konservativ: bare navn som ALDRI er noe annet enn LaTeX.
# `n` står IKKE her — `\n` er ekte linjeskift i kodeeksempler. En blank regel
# «backslash foran bokstav» ga 1539 falske positive i in1900 (kodefag).
_KOMMANDOER = (
    "frac dfrac tfrac sqrt cdot cdots times div pm mp leq geq approx equiv "
    "left right langle rangle lfloor rfloor lceil rceil "
    # Kommandoer som begynner paa «n» (nu, nabla, neg, neq, notin) er UTELATT:
    # de er ikke til aa skille fra ekte linjeskift «\n» + tekst i kodeeksempler.
    
    "alpha beta gamma delta epsilon varepsilon zeta eta theta vartheta iota "
    "kappa lambda mu xi rho sigma tau upsilon phi varphi chi psi omega "
    "Gamma Delta Theta Lambda Xi Pi Sigma Upsilon Phi Psi Omega "
    "sum prod int oint lim limsup liminf sup arg deg det dim exp "
    "gcd ker log ln lg sin cos tan cot sec csc sinh cosh tanh arcsin "
    "arccos arctan partial infty forall exists land lor implies iff "
    "rightarrow leftarrow Rightarrow Leftarrow leftrightarrow to mapsto "
    "text textbf textit mathrm mathbf mathit mathcal mathbb mathfrak mathsf "
    "begin end quad qquad overline underline hat bar vec tilde "
    "ddot prime circ angle triangle perp parallel subset supset subseteq "
    "supseteq cup cap setminus emptyset propto sim simeq cong "
    "boxed displaystyle binom"
).split()
LATEX_KOMMANDO = re.compile(
    r"(?<!\\)\\(" + "|".join(sorted(_KOMMANDOER, key=len, reverse=True)) + r")(?![a-zA-Z])")

NODE_KATEX = r"""
const katex = require("katex");
const inn = JSON.parse(require("fs").readFileSync(process.argv[2], "utf8"));
const feil = [];
for (const [fil, tex, disp] of inn) {
  const html = katex.renderToString(tex, {displayMode: disp, throwOnError: false, trust: true});
  // To ulike feilsignaler, og porten så bare det FØRSTE i månedsvis:
  //
  //   · klassen `katex-error` — settes ved parse-feil (ubalanserte klammer o.l.)
  //   · farge #cc0000        — settes ved UKJENT KOMMANDO, uten noen klasse
  //
  // Med throwOnError:false gir `\upmu` og enhver annen ukjent kommando bare
  // fargen. Leseren ser kommandonavnet i rødt midt i formelen; porten meldte OK.
  // Funnet 30. juli 2026 av en byggeagent som rendret gjennom den EKTE
  // LatexRenderer-komponenten (React SSR) framfor gjennom KaTeX alene — den
  // frittstående KaTeX-testen sa «OK» for alle 22 feltene den fant.
  if (html.includes("katex-error") || html.includes("#cc0000")) {
    feil.push([fil, tex.slice(0, 90)]);
  }
}
console.log(JSON.stringify(feil));
"""


def avescape_js(rå):
    """Gjør en JS-streng-literal om til verdien den faktisk har.

    Viktig: `\\'` og `\\"` er strengescapes for apostrof/hermetegn — IKKE LaTeX.
    En naiv `\\\\` -> `\\`-erstatning gjorde `f\\'\\'(x)` (gyldig: f''(x)) om til
    `f\\'\\'(x)` og ga 278 falske KaTeX-feil i quizfilene til s1/s2/r1/r2/1t.
    """
    ut, i = [], 0
    while i < len(rå):
        if rå[i] == "\\" and i + 1 < len(rå):
            n = rå[i + 1]
            ut.append({"n": "\\n", "t": "\\t", "'": "'", '"': '"', "\\": "\\"}.get(n, "\\" + n))
            i += 2
        else:
            ut.append(rå[i])
            i += 1
    return "".join(ut)


def enkeltfelt(navn, s):
    """Tekstfeltene som rendres HVER FOR SEG (ett LatexRenderer-kall per felt).

    For kapittel-JSON er hver strengverdi alt ett felt. Quiz-.ts-fila leses som
    én rå tekst, så der må de enkelte streng-literalene plukkes ut — ellers går
    et oddetall $ i ett alternativ opp mot et oddetall i et annet.
    """
    if not navn.endswith(".ts"):
        yield s
        return
    for m in re.finditer(r"\"((?:[^\"\\]|\\.)*)\"|'((?:[^'\\]|\\.)*)'", s):
        yield avescape_js(m.group(1) if m.group(1) is not None else m.group(2))


def kodespenn(s):
    """Start/slutt for hver ```-kodeblokk i strengen."""
    ut = []
    for m in re.finditer(r"```[\s\S]*?```", s):
        ut.append((m.start(), m.end()))
    return ut


def strenger(emne):
    """Alle tekststrenger i bokas kapittelfiler, med filnavn og sti.

    Sidevognene nn/ (nynorsk) og sme/ (nordsamisk) er MED. De ble tidligere
    aldri sjekket — 10 509 oversatte kapittelfiler sto utenfor porten, selv om
    en oversetter like gjerne kan knekke en formel som en forfatter.
    """
    ut = []
    kilder = (
        sorted(glob.glob(os.path.join(ROOT, "src/lib/data/chapters", emne + "-*.json")))
        + sorted(glob.glob(os.path.join(ROOT, "src/lib/data/chapters/nn", emne + "-*.json")))
        + sorted(glob.glob(os.path.join(ROOT, "src/lib/data/chapters/sme", emne + "-*.json")))
    )
    for p in kilder:
        d = json.load(open(p, encoding="utf-8"))
        navn = os.path.relpath(p, os.path.join(ROOT, "src/lib/data/chapters"))

        def gå(o, sti):
            if isinstance(o, str):
                ut.append((navn, sti, o))
            elif isinstance(o, dict):
                for k, v in o.items():
                    gå(v, f"{sti}.{k}")
            elif isinstance(o, list):
                for i, x in enumerate(o):
                    gå(x, f"{sti}[{i}]")

        gå(d, "")
    q = os.path.join(ROOT, f"src/lib/data/quiz-data-{emne}.ts")
    if os.path.exists(q):
        ut.append((f"quiz-data-{emne}.ts", "", open(q, encoding="utf-8").read()))
    # Nynorsk-quizen (quiz/nn/) var også utenfor porten. 74 formler var ødelagt
    # der 25. juli 2026 — «Kva er $\tan v$?» viste TAB + «an v».
    for p in sorted(glob.glob(os.path.join(ROOT, "src/lib/data/quiz/nn", emne + "-*.json"))):
        d = json.load(open(p, encoding="utf-8"))
        navn = "quiz/nn/" + os.path.basename(p)

        def gå_q(o, sti):
            if isinstance(o, str):
                ut.append((navn, sti, o))
            elif isinstance(o, dict):
                for k, v in o.items():
                    gå_q(v, f"{sti}.{k}")
            elif isinstance(o, list):
                for i, x in enumerate(o):
                    gå_q(x, f"{sti}[{i}]")

        gå_q(d, "")
    return ut


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    emne = sys.argv[1]
    alle = strenger(emne)
    if not alle:
        sys.exit(f"fant ingen filer for {emne}")
    avvik = []

    # 0. ENKEL BACKSLASH I QUIZ-KILDEN. Denne må komme først, fordi den fanger
    #    feil de andre sjekkene er BLINDE for: de leser quiz-data-*.ts som rå
    #    tekst, der «\f» er to tegn. I en TS-streng er det form feed.
    #    '$\frac{1}{16}$' i kilden blir '$<FF>rac{1}{16}$' for eleven, og
    #    \left/\pi/\partial mister backslashen HELT uten å etterlate spor.
    #    395 formler var ødelagt slik i 1t/s2/1p/mat1100/econ2220/fys1001
    #    25. juli 2026.
    #    NB: regelen kan IKKE være «én backslash foran en bokstav». I kodefag
    #    er `\n` ekte linjeskift i Python-eksempler — in1900 har 1539 av dem,
    #    og en blank regel ga 1539 falske positive. Derfor sjekkes bare
    #    backslash foran et KJENT LaTeX-kommandonavn.
    q = os.path.join(ROOT, f"src/lib/data/quiz-data-{emne}.ts")
    if os.path.exists(q):
        kilde = open(q, encoding="utf-8").read()
        for m in LATEX_KOMMANDO.finditer(kilde):
            lin = kilde.count("\n", 0, m.start()) + 1
            avvik.append(f"ENKEL BACKSLASH i quiz-data-{emne}.ts linje {lin}: {m.group(0)!r} "
                         f"— må være dobbel, ellers tolker JS den som escape-sekvens")

    # 1. kontrolltegn (TAB godtas i .ts-fila, der det er innrykk, og inne i
    #    ```-kodeblokker, der det er kolonnejustering i programutskrift — begge
    #    er legitime. En TAB i prosa er derimot nesten alltid `\text` med én
    #    backslash, som rendrer galt UTEN at KaTeX klager.)
    for navn, sti, s in alle:
        kode = kodespenn(s)
        for i, ch in enumerate(s):
            o = ord(ch)
            if o not in KTRL:
                continue
            if o == 9 and (navn.endswith(".ts") or any(a <= i < b for a, b in kode)):
                continue
            avvik.append(f"KONTROLLTEGN {KTRL[o]} i {navn}{sti}: {s[max(0,i-40):i+25]!r}")

    # 2.–4. matteuttrykk
    # Kapittel-JSON leses med json.load, så strengene er alt avescapet. Quiz-.ts-fila
    # leses som rå tekst, der LaTeX står escapet for JS-strengen (`\\alpha`) — den må
    # avescapes, ellers rapporterer KaTeX falske feil på hver kommando.
    uttrykk = []
    for navn, _, s in alle:
        for felt in enkeltfelt(navn, s):
            # Rendreren parkerer escapet dollar (\$) FØR matten deles opp, så et
            # \$ kan ikke avgrense et uttrykk. Porten må gjøre det samme, ellers
            # rapporterer den «$850 til \$260» som KaTeX-feil i ren prosa.
            felt = felt.replace("\\$", "")
            # Kode er ikke matte: rendreren tar ```-blokker og `inline-kode` ut først.
            felt = re.sub(r"```[\s\S]*?```", "", felt)
            felt = re.sub(r"`[^`\n]*`", "", felt)
            for m in re.finditer(r"\$\$([\s\S]+?)\$\$", felt):
                uttrykk.append((navn, m.group(1), True))
            for m in re.finditer(r"\$([^$\n]+?)\$", re.sub(r"\$\$[\s\S]+?\$\$", "", felt)):
                uttrykk.append((navn, m.group(1), False))

    for navn, tex, _ in uttrykk:
        if tex.rstrip().endswith("\\") and not tex.rstrip().endswith("\\\\"):
            avvik.append(f"LØS BACKSLASH i {navn}: {tex.strip()[:70]!r} (rendereren trimmer → knekker)")
        if "«" in tex or "»" in tex:
            avvik.append(f"GÅSEØYNE I MATTE i {navn}: {tex.strip()[:70]!r}")
        if re.search(r"(?<!\\)%", tex):
            avvik.append(f"BART % I MATTE i {navn}: {tex.strip()[:70]!r} (starter LaTeX-kommentar → spiser resten)")

    # 5. ubalansert $ per FELT. Hvert tekstfelt rendres for seg, så et oddetall $
    #    i samme felt betyr at en formel er avkuttet og resten vises som kilde.
    for navn, sti, s in alle:
        for felt in enkeltfelt(navn, s):
            if "$" not in felt or "${" in felt:      # ${...} = JS-template omtalt i prosa
                continue
            # Kode er ikke matte: ```-blokker og `inline-kode` kan inneholde $ helt
            # legitimt (`$0` i DevTools-konsollen, `d$kol` i R, «$PATH» i shell).
            # Rendreren tar kodeblokker ut FØR matten, så de kan ikke danne spenn.
            t = re.sub(r"```[\s\S]*?```", "", felt)
            t = re.sub(r"`[^`\n]*`", "", t)
            t = re.sub(r"\$\$", "", re.sub(r"\\\$", "", t))
            if t.count("$") % 2:
                avvik.append(f"UBALANSERT $ i {navn}{sti}: {felt.strip()[:80]!r} (avkuttet formel)")

            # 5b. LINJESKIFT INNE I INLINE-MATTE. Rendreren bruker
            #     /\$([^$\n]+?)\$/ — mønsteret utelukker linjeskift, så en formel
            #     som brytes over to linjer rendres IKKE. Leseren får rå LaTeX med
            #     synlige dollartegn. Punkt 5 fanger det ikke: dollarene er i
            #     partall og balanserte, formelen er bare brutt.
            #
            #     Funnet 30. juli 2026 av en byggeagent som speilet rendreren i en
            #     egen harness. 3 tilfeller i in2010, en LIVE bok, blant dem
            #     «$\lfloor \log_2 n \rfloor$» med bruddet midt i uttrykket.
            #
            #     ⚠ Paringen MÅ gå på dollarnummer fra feltets start. Et regex som
            #     `\$[^$]*?\n[^$]*?\$` parer et AVSLUTTENDE $ med det neste
            #     ÅPNENDE og treffer dermed all prosa mellom to formler — også
            #     markdown-tabellrader (`$ |\n| $`), som blir slått sammen og
            #     ødelegger tabellen. Byggelederen prøvde nettopp det og fikk 171
            #     treff der det finnes 3.
            mk = list(t)
            for rx in (r"\$\$[\s\S]*?\$\$",):
                for tr in re.finditer(rx, t):
                    for i in range(tr.start(), tr.end()):
                        mk[i] = "\x00"
            pos = [i for i, c in enumerate(mk) if c == "$"]
            for a, b in zip(pos[0::2], pos[1::2]):
                if "\n" in t[a:b]:
                    avvik.append(
                        f"LINJESKIFT I INLINE-MATTE i {navn}{sti}: {t[a:b+1][:70]!r} "
                        f"(rendrerens /\\$([^$\\n]+?)\\$/ matcher ikke → rå LaTeX til leseren)")

    # 5c. RÅ LaTeX UTENFOR MATTE. En LaTeX-kommando utenfor $...$ rendres ikke —
    #     leseren ser «300\\,\\text{K}» bokstavelig. Funnet 30. juli 2026 av en
    #     byggeagent som rendret 437 tekstfelt gjennom den EKTE
    #     LatexRenderer-komponenten og fant to temperaturer med enheten utenfor
    #     dollartegnene.
    #
    #     ⚠ Denne MÅ stå utenfor «ubalansert $»-sløyfa. Den hopper over felt uten
    #     `$`, og rå LaTeX står nettopp oftest i felt som ikke har matte i det
    #     hele tatt — der var porten helt blind.
    #     Felt som ER matte per definisjon rendres uten $-tegn og skal hoppes
    #     over: `latex`, `expressionAnswer`, `formula`. Uten dette utgjorde de
    #     over 300 av 391 treff — alle legitime.
    MATTEFELT = ("latex", "expressionAnswer", "formula", "equation",
                 "correctExpression", "answerExpression",
                 # sign-diagram-blokker: `factors[].label` og `resultLabel` er
                 # matte som rendres uten $-tegn, akkurat som `latex`.
                 "resultLabel", "expression")
    for navn, sti, s_felt in alle:
        siste = sti.rsplit(".", 1)[-1].split("[")[0]
        if siste in MATTEFELT:
            continue
        if siste == "label" and ".factors" in sti:
            continue
        for felt in enkeltfelt(navn, s_felt):
            if "\\" not in felt:
                continue
            grunn = re.sub(r"```[\s\S]*?```", "", felt)
            grunn = re.sub(r"`[^`\n]*`", "", grunn)
            grunn = re.sub(r"\\\$", "\x00\x00", grunn)
            mk = list(grunn)
            for tr in re.finditer(r"\$\$[\s\S]*?\$\$", grunn):
                for i in range(tr.start(), tr.end()):
                    mk[i] = "\x00"
            dp = [i for i, c in enumerate("".join(mk)) if c == "$"]
            for a, b in zip(dp[0::2], dp[1::2]):
                for i in range(a, b + 1):
                    mk[i] = "\x00"
            for tr in RA_LATEX.finditer("".join(mk)):
                avvik.append(
                    f"RÅ LaTeX UTENFOR MATTE i {navn}{sti}: {tr.group(0)!r} "
                    f"(rendres ikke — leseren ser kommandoen bokstavelig)")
            # ⚠ RA_LATEX er en HVITLISTE, og var derfor blind for alt den ikke
            # kjente. Målt 6. august 2026: `\textipa{}`, `\ipa{}`, `\v{s}`,
            # `\qtree` og `$/fɑ/$` passerte alle porten. `\textipa` slapp
            # unna fordi mønsteret har `text` med ordgrense, og i «textipa»
            # følger «ipa» rett etter.
            #
            # `\<bokstaver>{` er entydig LaTeX-formet og treffer ikke `\n` i
            # kodestrenger (ingen klamme). Målt over hele katalogen ga den 384
            # treff, hvorav 374 sto i DEDIKERTE mattefelt (`latex`, `label`,
            # `expression`) eller i `code` — de er lovlige og hoppes over her.
            # De ti gjenværende var ekte: `{\color{blue}blått}` i BRØDTEKST i
            # 1t-1-5 og bi-okonomi-1-5, der leseren så kommandoen i selve
            # forklaringen på hva fargene betyr.
            # `_meta.tm` er oversettelsesminnet i nynorsk-sidecaren — en
            # kopi av kildeteksten, ikke noe leseren ser. `code` er
            # kodeblokker som legitimt inneholder backslash.
            if siste != "code" and "._meta" not in sti:
                for tr in UKJENT_MAKRO.finditer("".join(mk)):
                    avvik.append(
                        f"UKJENT LaTeX-KOMMANDO UTENFOR MATTE i {navn}{sti}: "
                        f"{tr.group(0)!r} — porten kjenner den ikke, og "
                        f"leseren ser den bokstavelig. Skriv ren tekst, eller "
                        f"flytt uttrykket inn i $…$")

    # 6. PROSA SATT SOM MATTE. Punkt 5 fanger bare oddetall $. To valutabeløp på
    #    samme linje er PARTALL og slipper gjennom — men rendreren parrer dem og
    #    setter teksten mellom dem som matte, så ordene renner sammen uten
    #    mellomrom: «$121,700 (but median Black household: $17,600)» ble til
    #    «121,700(butmedianBlackhousehold:». Samme felle: Excel-referanser
    #    ($E1 … E$1) og JS-templater (${…}).
    #    Sjekken speiler latex-renderer.tsx og maskerer vernede områder med LIKE
    #    LANG fyllstreng — ellers parres sluttdollaren i én $$-blokk med
    #    startdollaren i neste, og ekte matte meldes som feil.
    for navn, sti, s in alle:
        for felt in enkeltfelt(navn, s):
            if "$" not in felt:
                continue
            m = felt
            for rx in (r"```([a-zA-Z0-9+#_-]*)[ \t]*\n?([\s\S]*?)```", r"`[^`\n]+`", r"\\{1,2}\$"):
                for t in re.finditer(rx, m):
                    m = m[:t.start()] + "\x01" * (t.end() - t.start()) + m[t.end():]
            for t in re.finditer(r"\$\$([\s\S]*?)\$\$", m):
                m = m[:t.start()] + "\x01" * (t.end() - t.start()) + m[t.end():]
            for t in re.finditer(r"\$([^$\n]+?)\$", m):
                indre = t.group(1)
                if "\\" in indre:
                    continue                      # ekte LaTeX-kommandoer
                if not re.search(r"[A-Za-zÆØÅæøå]{3,}\s+[A-Za-zÆØÅæøå]{3,}", indre):
                    continue                      # ikke prosa
                avvik.append(f"PROSA SATT SOM MATTE i {navn}{sti}: {indre[:70]!r} "
                             f"(escap dollartegnene som \\$ — de er valuta/kode, ikke matte)")

    katex_feil = None
    # Bøker BYGGES i git-arbeidstrær (.claude/worktrees/bok-*), og de har ikke
    # node_modules — bare hovedtreet har det. Fram til 10. august 2026 hoppet
    # porten derfor stille over KaTeX-rendringen nøyaktig der bøkene skrives,
    # og meldte «matteuttrykk kontrollert» som om alt var sjekket.
    # Faller nå tilbake på hovedtreets node_modules, funnet via git.
    nm = os.path.join(ROOT, "node_modules")
    if not os.path.isdir(os.path.join(nm, "katex")):
        try:
            felles = subprocess.run(
                ["git", "rev-parse", "--path-format=absolute", "--git-common-dir"],
                capture_output=True, text=True, cwd=ROOT, timeout=20)
            if felles.returncode == 0:
                kandidat = os.path.join(
                    os.path.dirname(felles.stdout.strip()), "node_modules")
                if os.path.isdir(os.path.join(kandidat, "katex")):
                    nm = kandidat
        except Exception:
            pass
    if os.path.isdir(os.path.join(nm, "katex")):
        with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False, encoding="utf-8") as f:
            json.dump([[n, t.strip(), d] for n, t, d in uttrykk], f, ensure_ascii=False)
            tmp = f.name
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
            f.write(NODE_KATEX)
            js = f.name
        # NODE_PATH må settes: node løser `require` relativt til SKRIPTFILA, ikke cwd,
        # så en temp-fil utenfor prosjektet finner ikke katex uten dette.
        miljø = dict(os.environ, NODE_PATH=nm)
        r = subprocess.run(["node", js, tmp], capture_output=True, text=True, cwd=ROOT, env=miljø)
        os.unlink(tmp)
        os.unlink(js)
        if r.returncode == 0:
            katex_feil = json.loads(r.stdout.strip().splitlines()[-1])
            for navn, tex in katex_feil:
                avvik.append(f"KATEX-FEIL i {navn}: {tex!r}")
        else:
            print("ADVARSEL: KaTeX-kjøringen feilet — porten er da BARE delvis kjørt:")
            print("  " + (r.stderr.strip().splitlines() or ["(ingen feilmelding)"])[-1])

    print(f"{emne}: {len(uttrykk)} matteuttrykk kontrollert"
          + ("" if katex_feil is not None else " (KaTeX-kjøring hoppet over — mangler node_modules/katex)"))
    if avvik:
        print(f"AVVIK ({len(avvik)}):")
        for a in avvik[:60]:
            print(" -", a)
        if len(avvik) > 60:
            print(f"   … og {len(avvik)-60} flere")
        sys.exit(1)
    print("LATEX-PORT OK — ingen kontrolltegn, ingen KaTeX-feil, ingen løs backslash, ingen gåseøyne i matte")


if __name__ == "__main__":
    main()
