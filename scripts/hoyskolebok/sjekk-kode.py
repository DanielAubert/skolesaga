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
3. **Ingen `$` inne i kodeblokker.** Et bart `$` gjør at $-balansesjekken i
   sjekk-latex.py rapporterer avkuttet formel, og rendreren kan spise resten.
4. **Ingen TAB som innrykk i Python-kilde.** TAB er lovlig inne i ```-blokker
   (kolonnejustering i programutskrift), men Python-kilden skal ha 4 mellomrom.
5. **Forbudte konstruksjoner i kode** (utenfor pensum / utenfor bokas stil):
   pandas, sympy, seaborn, dekoratorer, dataclass, walrus, match/case,
   returannotasjoner, `if __name__ == '__main__'`.
6. **Utskrift-plikt.** En ```python-blokk med `print(` i et FASIT-/teorifelt
   skal følges av en «**Utskrift:**»-blokk med den faktiske utskriften.
   Unntak: `task`/`problem`-felt (sporingsoppgaver skal ikke røpe svaret) og
   blokker merket `# ingen utskrift`.
7. **Dunder- og potensnavn i kodemarkering.** `__init__` og `x**2` MÅ stå i
   backticks eller i en kodeblokk. I løpende prosa mangler rendreren
   kodebeskyttelse: `_([^_]+)_` gjør `__init__` til `_<em>init</em>_`, og to
   `**` i samme streng blir `<strong>`.
8. **Gammel ODESolver-API bare der den er tillatt** (`f(u, t)` /
   `solve(time_points)`): kun i Del 7 og i eksamenskartet (Del 0).
9. **Quiz i staging:** nøyaktig 4 alternativer, ingen duplikater, og
   options[0] er unikt lengst i under 35 % av spørsmålene (LENGDE-TELL —
   begge retninger: også unikt KORTEST under 35 %).

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


def fences(s):
    """(tagg, kropp, start, slutt) for hver ```-blokk."""
    for m in re.finditer(r"```([A-Za-z0-9_-]*)\n([\s\S]*?)```", s):
        yield m.group(1), m.group(2), m.start(), m.end()


def selvkall(kropp):
    """Funksjonsnavn som kalles inne i sin EGEN kropp (innrykk-bevisst)."""
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
            if re.search(r"\b" + re.escape(navn) + r"\s*\(", neste):
                treff.append(navn)
                break
    return treff


def utenfor_kode(s):
    """Strengen med ```-blokker og `inline`-kode fjernet."""
    s = re.sub(r"```[\s\S]*?```", " ", s)
    return re.sub(r"`[^`\n]*`", " ", s)


def sjekk_kapitler(emne, avvik):
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
        for sti, s in strenger(d):
            fasitfelt = ("task" not in sti) and (not sti.endswith(".problem"))
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
                if "$" in kropp:
                    avvik.append(f"$ I KODEBLOKK i {navn}{sti} — knekker $-balansesjekken")
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
                avvik.append(f"DUNDER UTEN BACKTICKS i {navn}{sti}: «{m.group(0)}»"
                             f" — rendreren gjør __x__ til _<em>x</em>_")
            for m in re.finditer(r"\w\*\*\w", rå):
                avvik.append(f"POTENS UTEN BACKTICKS i {navn}{sti}: «{m.group(0)}»"
                             f" — to ** i samme streng blir <strong>")
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
    n_filer, n_blokker = sjekk_kapitler(emne, avvik)
    n_quiz, fordeling = sjekk_quiz(emne, avvik)
    print(f"{emne}: {n_filer} kapittelfiler | {n_blokker} python-kodeblokker | {n_quiz} staging-quiz"
          + (f" (options[0] unikt lengst {fordeling[0]}, unikt kortest {fordeling[1]})" if fordeling else ""))
    if avvik:
        print(f"AVVIK ({len(avvik)}):")
        for a in avvik[:60]:
            print(" -", a)
        if len(avvik) > 60:
            print(f"   … og {len(avvik)-60} flere")
        sys.exit(1)
    print("KODEPORT OK — all kode kompilerer, ingen rekursjon, utskrift dokumentert,"
          " kodemarkering intakt, quiz-lengder jevne")


if __name__ == "__main__":
    main()
