#!/usr/bin/env python3
"""sjekk-kode.py <emne> — kodeport for en høyskolebok i et KODEFAG.

Supplerer sjekk-latex.py (LaTeX/kontrolltegn) og sjekk-bok.py (struktur/kvoter)
med det som er spesielt for bøker der innholdet ER kode. Skrevet for in1900
(første kodefag på plattformen), men generisk på emnekode — gjenbruk for
IN1000/IN1010/TDT4110/TDT4102 osv.

Sjekker (alle deterministiske, exit 1 ved avvik):

1. **Hver ```python-blokk kompilerer.** `compile()` på blokken slik den står.
   Blokker som med vilje IKKE er kjørbare (fragmenter, pseudokode, plantede
   syntaksfeil i «finn feilen»-oppgaver) skal ha fence-tagg ```text og
   kontrolleres ikke — men da er de heller ikke eksempelkode.
2. **Ingen rekursjon.** En funksjon som kaller seg selv inne i sin egen kropp
   (innrykk-bevisst, så «definér f, bruk f etterpå» ikke gir falsk treff).
   Rekursjon er utenfor pensum i in1900 og markeres uønsket i fasit.
3. **Ingen TAB som innrykk i Python-kilde.** TAB er lovlig inne i ```-blokker
   (kolonnejustering i programutskrift), men Python-kilden skal ha 4 mellomrom.
4. **Forbudte konstruksjoner i kode** (utenfor pensum / utenfor bokas stil):
   pandas, sympy, seaborn, dekoratorer, dataclass, walrus, match/case,
   returannotasjoner, `if __name__ == '__main__'`.
5. **Utskrift-plikt.** En ```python-blokk med `print(` i et FASIT-/teorifelt
   skal følges av en «**Utskrift:**»-blokk med den faktiske utskriften.
   Unntak: `task`/`problem`-felt (sporingsoppgaver skal ikke røpe svaret) og
   blokker merket `# ingen utskrift`.
6. **Gammel ODESolver-API bare der den er tillatt** (`f(u, t)` /
   `solve(time_points)`): kun i Del 7 og i eksamenskartet (Del 0).
7. **Quiz i staging:** nøyaktig 4 alternativer, ingen duplikater, og
   options[0] er unikt lengst i under 35 % av spørsmålene (LENGDE-TELL —
   begge retninger: også unikt KORTEST under 35 %).

RÅDGIVENDE merknader (feiler ALDRI porten): dunder-navn (`__init__`) og
potensuttrykk (`x**2`) som står i løpende prosa uten backticks. Etter
renderer-fiksen 25. juli 2026 (```-gjerder og inline-kode parkeres før matte og
markdown) er dette en stilsak, ikke en rendringsfeil — men kode skal se ut som
kode, jf. BYGGEKONTRAKT §K8.4.

Kjør:  python3 scripts/hoyskolebok/sjekk-kode.py in1900
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CH = os.path.join(ROOT, "src/lib/data/chapters")
STAGING = os.path.join(ROOT, "src/lib/data/quiz-staging")

FORBUDT_KODE = [
    (r"\bimport\s+pandas\b|\bpandas\b", "pandas (utenfor pensum)"),
    (r"\bimport\s+sympy\b|\bsympy\b", "sympy (utenfor pensum)"),
    (r"\bseaborn\b", "seaborn (utenfor pensum)"),
    (r"^\s*@(property|staticmethod|classmethod|dataclass)", "dekorator (utenfor pensum)"),
    (r"\bdataclass\b", "dataclass (utenfor pensum)"),
    (r":=", "walrus-operator (utenfor pensum)"),
    (r"^\s*match\s+.+:\s*$", "match/case (utenfor pensum)"),
    (r"\)\s*->", "returannotasjon/typehint (ikke bokas stil)"),
    (r"__name__\s*==", "if __name__ == '__main__' (sensor gir ingen uttelling for main-program)"),
]

GAMMEL_API = [
    (r"solve\(\s*time_points", "solve(time_points) — gammel ODESolver-API"),
    (r"def\s+f\(\s*u\s*,\s*t\s*\)", "f(u, t) — gammel ODESolver-API"),
]


def strenger(obj, sti=""):
    """Alle (sti, streng) i et JSON-dokument."""
    if isinstance(obj, str):
        yield sti, obj
    elif isinstance(obj, dict):
        for k, v in obj.items():
            yield from strenger(v, f"{sti}.{k}")
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from strenger(v, f"{sti}[{i}]")


OPPGAVEBOKS = re.compile(r"^\s*(prøve|prove|kald bank|oppgavesett|øvingseksamen)\b", re.I)


def strenger_ctx(obj, sti="", i_oppgaveboks=False):
    """Som strenger(), men flagger strenger som står inne i en OPPGAVEBOKS.

    En sporingsoppgave i et prøvekapittel bor i en `collapsible` med tittel
    «Prøve 1.A …», ikke i et `exercise.task`-felt. Utskriften SKAL da ikke stå
    ved siden av koden — den hører i den separate «Fasit …»-boksen. Uten dette
    flagget ville utskrift-plikten (punkt 5) tvunget fasiten inn i selve
    oppgaven og ødelagt prøven. Fasit-bokser beholder plikten.
    """
    if isinstance(obj, str):
        yield sti, obj, i_oppgaveboks
    elif isinstance(obj, dict):
        nå = i_oppgaveboks or (obj.get("type") == "collapsible"
                               and bool(OPPGAVEBOKS.match(str(obj.get("title", "")))))
        for k, v in obj.items():
            yield from strenger_ctx(v, f"{sti}.{k}", nå)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from strenger_ctx(v, f"{sti}[{i}]", i_oppgaveboks)


def fences(s):
    """(tagg, kropp, start, slutt) for hver ```-blokk."""
    for m in re.finditer(r"```([A-Za-z0-9_-]*)\n([\s\S]*?)```", s):
        yield m.group(1), m.group(2), m.start(), m.end()


def selvkall(kropp):
    """Funksjonsnavn som kalles inne i sin EGEN kropp (innrykk-bevisst).

    `super().__init__(...)` inne i en subklasses `__init__` er IKKE rekursjon —
    det er basisklassens konstruktør (BYGGEKONTRAKT §K5, subklasse-malen), og
    står i hver arv-oppgave i Del 5 og Del 7. Negativ lookbehind på `super().`
    holder den utenfor.
    """
    treff = []
    linjer = kropp.split("\n")
    for i, linje in enumerate(linjer):
        m = re.match(r"(\s*)def\s+(\w+)\s*\(", linje)
        if not m:
            continue
        innrykk, navn = len(m.group(1)), m.group(2)
        for neste in linjer[i + 1:]:
            if not neste.strip():
                continue
            if len(neste) - len(neste.lstrip()) <= innrykk:
                break
            if re.search(r"(?<!super\(\)\.)\b" + re.escape(navn) + r"\s*\(", neste):
                treff.append(navn)
                break
    return treff


def utenfor_kode(s):
    """Strengen med ```-blokker og `inline`-kode fjernet."""
    s = re.sub(r"```[\s\S]*?```", " ", s)
    return re.sub(r"`[^`\n]*`", " ", s)


def sjekk_kapitler(emne, avvik, merknader):
    filer = sorted(glob.glob(os.path.join(CH, emne + "-*.json")))
    if not filer:
        sys.exit(f"fant ingen kapittelfiler for {emne}")
    n_blokker = 0
    for p in filer:
        navn = os.path.basename(p)
        try:
            d = json.load(open(p, encoding="utf-8"))
        except Exception as e:
            avvik.append(f"UGYLDIG JSON i {navn}: {e}")
            continue
        del7 = re.match(rf"{emne}-(7|0)-", navn) is not None
        for sti, s, i_oppgaveboks in strenger_ctx(d):
            fasitfelt = (("task" not in sti) and (not sti.endswith(".problem"))
                         and not i_oppgaveboks)
            for tagg, kropp, _, slutt in fences(s):
                if tagg != "python":
                    continue
                n_blokker += 1
                try:
                    compile(kropp, navn, "exec")
                except SyntaxError as e:
                    avvik.append(f"KOMPILERER IKKE i {navn}{sti}: linje {e.lineno}: {e.msg}"
                                 f" — bruk ```text hvis blokken ikke skal være kjørbar")
                for f in selvkall(kropp):
                    avvik.append(f"REKURSJON i {navn}{sti}: funksjonen «{f}» kaller seg selv"
                                 f" — rekursjon er utenfor pensum, bruk løkke")
                for linje in kropp.split("\n"):
                    if linje[: len(linje) - len(linje.lstrip())].count("\t"):
                        avvik.append(f"TAB SOM INNRYKK i {navn}{sti} — Python-kilde skal ha 4 mellomrom")
                        break
                for rx, hva in FORBUDT_KODE:
                    if re.search(rx, kropp, re.M):
                        avvik.append(f"FORBUDT KONSTRUKSJON i {navn}{sti}: {hva}")
                if "print(" in kropp and fasitfelt and "# ingen utskrift" not in kropp:
                    etter = s[slutt: slutt + 400]
                    if "**Utskrift:**" not in etter:
                        avvik.append(f"MANGLER UTSKRIFT i {navn}{sti}: kodeblokk med print() uten"
                                     f" «**Utskrift:**»-blokk rett etter (lim inn den KJØRTE utskriften)")
            rå = utenfor_kode(s)
            for m in re.finditer(r"__\w+__", rå):
                merknader.append(f"dunder uten backticks i {navn}{sti}: «{m.group(0)}»"
                                 f" — skriv `{m.group(0)}` (stil, ikke rendringsfeil)")
            for m in re.finditer(r"\w\*\*\w", rå):
                merknader.append(f"potens uten backticks i {navn}{sti}: «{m.group(0)}»"
                                 f" — skriv `{m.group(0)}` (stil, ikke rendringsfeil)")
            if not del7:
                for rx, hva in GAMMEL_API:
                    if re.search(rx, s):
                        avvik.append(f"GAMMEL API UTENFOR DEL 7 i {navn}{sti}: {hva}")
    return len(filer), n_blokker


def sjekk_quiz(emne, avvik):
    filer = sorted(glob.glob(os.path.join(STAGING, emne + "-*.quiz.json")))
    if not filer:
        return 0, None
    tot = lengst = kortest = 0
    for p in filer:
        navn = os.path.basename(p)
        try:
            spm = json.load(open(p, encoding="utf-8"))
        except Exception as e:
            avvik.append(f"UGYLDIG QUIZ-JSON i {navn}: {e}")
            continue
        for i, q in enumerate(spm):
            o = q.get("options") or []
            if len(o) != 4:
                avvik.append(f"QUIZ {navn}[{i}]: {len(o)} alternativer (skal være 4)")
                continue
            if len(set(map(str, o))) != 4:
                avvik.append(f"QUIZ {navn}[{i}]: duplikate alternativer")
            L = [len(str(x)) for x in o]
            tot += 1
            if L[0] == max(L) and L.count(max(L)) == 1:
                lengst += 1
            if L[0] == min(L) and L.count(min(L)) == 1:
                kortest += 1
    if tot:
        for hva, n in (("lengst", lengst), ("kortest", kortest)):
            if n / tot > 0.35:
                avvik.append(f"LENGDE-TELL: options[0] er unikt {hva} i {n}/{tot}"
                             f" ({100*n/tot:.0f} %) — taket er 35 %")
    return tot, (lengst, kortest)


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    emne = sys.argv[1]
    avvik = []
    merknader = []
    n_filer, n_blokker = sjekk_kapitler(emne, avvik, merknader)
    n_quiz, fordeling = sjekk_quiz(emne, avvik)
    print(f"{emne}: {n_filer} kapittelfiler | {n_blokker} python-kodeblokker | {n_quiz} staging-quiz"
          + (f" (options[0] unikt lengst {fordeling[0]}, unikt kortest {fordeling[1]})" if fordeling else ""))
    if merknader:
        print(f"MERKNADER — kodemarkering (RÅDGIVENDE, feiler ikke porten; {len(merknader)}):")
        for m in merknader[:20]:
            print(" ·", m)
    if avvik:
        print(f"AVVIK ({len(avvik)}):")
        for a in avvik[:60]:
            print(" -", a)
        if len(avvik) > 60:
            print(f"   … og {len(avvik)-60} flere")
        sys.exit(1)
    print("KODEPORT OK — all kode kompilerer, ingen rekursjon, utskrift dokumentert,"
          " quiz-lengder jevne")


if __name__ == "__main__":
    main()
