#!/usr/bin/env python3
"""sjekk-fasitfordeling.py <emne> [emne …] — er fasiten forutsigbar?

En elev som mekanisk krysser samme bokstav hver gang skal ikke få uttelling.
IN1020 hadde **alternativ a) riktig i 68,5 % av flervalgsoppgavene** — 100 % i
Del 3 — mens boka selv gjentar «ikke stopp ved det første riktige». For fag med
negativ poenggiving er det verre enn dårlig trening: boka lærer bort en strategi
som straffes på ekte eksamen.

Samme familie som `quiz-lengdesjekk.mjs`, som fanger at fasiten er lengst.
Denne fanger at fasiten står på samme plass.

GJELDER IKKE quiz-filene. Der krever kontrakten at `options[0]` alltid er
riktig, fordi runtime stokker alternativene. Denne porten ser bare på flervalg
i oppgaver og prøvekapitler, som IKKE stokkes.

Kjør:  python3 scripts/hoyskolebok/sjekk-fasitfordeling.py in1020
Exit 1 hvis en bokstav ligger over terskelen (standard 45 %).
"""
import collections
import glob
import json
import os
import re
import sys

# Skriptet kjøres ofte fra et arbeidstre (.claude/worktrees/bok-<emne>), der
# kapitlene ligger i treet — ikke der skriptfila ligger. Utledes stien fra
# __file__ alene, leser porten HOVEDTREET og melder grønt for en bok den aldri
# så. Derfor: bruk arbeidskatalogen når den har et kapittelbibliotek.
_CWD = os.path.join(os.getcwd(), "src/lib/data/chapters")
ROOT = (os.getcwd() if os.path.isdir(_CWD)
        else os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
CH = os.path.join(ROOT, "src/lib/data/chapters")
TERSKEL = 45.0          # prosent; tilfeldig nivå er 25 % ved fire alternativer
MINIMUM = 8             # færre enn dette gir for lite grunnlag til å dømme
MIN_PER_DEL = 12        # 5 av 11 er tilfeldig variasjon, ikke et mønster
GROVT = 60.0            # så skjevt at utvalgsstørrelsen ikke redder det

# To konvensjoner finnes i bøkene:
#   «Riktig svar: c)»            — IN1900, IN1020
#   «1b · 2d · 3a · 4c»          — ECON1100 (oppgavenummer + bokstav, samlet)
# Den andre må ha minst tre par på rad for å skilles fra deloppgave-referanser
# som «1a og 1b fanger hver bare ett ledd».
# Flerdels-fasiter som «Fasit: a) konfidensialitet, b) integritet, c) …»
# er IKKE enkeltsvar — de begynner per konstruksjon på a) og ga meg et
# artefakt der in1020 Del 3 så ut som 100 % a) i 11 av 11.
# Krev derfor at det IKKE følger et nytt «, b)» like etter.
FASIT = re.compile(r"(?:riktig svar|rett svar|fasit|svar)\s*[:=]?\s*\*{0,2}([a-e])\)"
                   r"(?![^\n]{0,60}\bb\))", re.I)
FASITREKKE = re.compile(r"\b\d+([a-e])\b(?:\s*[·,]\s*\d+[a-e]\b){2,}", re.I)
REKKELEDD = re.compile(r"\b\d+([a-e])\b")
# Tredje konvensjon: «**Oppgave 9** (2 p): **b) 7.**» — IN1000. Fasiten står
# etter et oppgavenummer og poeng, uten ordet «fasit» eller «riktig svar».
# Uten denne var porten grønn-blind for hele boka og meldte «0 fasitlinjer».
FASIT_OPPGAVE = re.compile(
    r"\*\*Oppgave\s+\d+[^*]{0,30}\*\*[^\n]{0,20}?\*\*([a-e])\)", re.I)


def strenger(n):
    if isinstance(n, str):
        yield n
    elif isinstance(n, dict):
        for v in n.values():
            yield from strenger(v)
    elif isinstance(n, list):
        for v in n:
            yield from strenger(v)


def mål(emne):
    per_del = collections.defaultdict(collections.Counter)
    for p in sorted(glob.glob(os.path.join(CH, f"{emne}-*.json"))):
        try:
            d = json.load(open(p, encoding="utf-8"))
        except Exception:
            continue
        m = re.match(rf"{re.escape(emne)}-(\d+)", d.get("id", ""))
        delen = m.group(1) if m else "?"
        for s in strenger(d):
            for t in FASIT.finditer(s):
                per_del[delen][t.group(1).lower()] += 1
            for t in FASITREKKE.finditer(s):
                for b in REKKELEDD.finditer(t.group(0)):
                    per_del[delen][b.group(1).lower()] += 1
            for t in FASIT_OPPGAVE.finditer(s):
                per_del[delen][t.group(1).lower()] += 1
    return per_del


def har_prover(emne):
    return bool(glob.glob(os.path.join(CH, f"{emne}-*prove*.json")))


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    avvik = 0
    umalt = []
    for emne in sys.argv[1:]:
        per_del = mål(emne)
        tot = collections.Counter()
        for c in per_del.values():
            tot.update(c)
        n = sum(tot.values())
        if n < MINIMUM:
            # En port som stille finner ingenting gir falsk trygghet.
            print(f"{emne}: fant bare {n} fasitlinjer" +
                  ("  ← boka HAR prøvekapitler, så formatet er trolig ukjent "
                   "for porten. Kontroller manuelt." if har_prover(emne) else ""))
            if har_prover(emne):
                umalt.append(emne)
            continue
        print(f"\n{emne}: {n} flervalgsfasiter")
        print(f"  {'del':5s} {'a':>4s} {'b':>4s} {'c':>4s} {'d':>4s} {'e':>4s}  verste")
        for delen in sorted(per_del):
            c = per_del[delen]
            m = sum(c.values())
            if not m:
                continue
            verst, antall = c.most_common(1)[0]
            andel = 100 * antall / m
            # Krev enten nok data (MIN_PER_DEL) eller en så grov skjevhet
            # at små tall ikke unnskylder den (11 av 11 = 100 %).
            grovt = andel >= GROVT and m >= MINIMUM
            tydelig = andel > TERSKEL and m >= MIN_PER_DEL
            flagg = "  ← OVER TERSKEL" if (grovt or tydelig) else ""
            print(f"  {delen:5s} {c['a']:4d} {c['b']:4d} {c['c']:4d} {c['d']:4d} {c['e']:4d}"
                  f"  {verst}) {andel:.0f} %{flagg}")
            if flagg:
                avvik += 1
        verst, antall = tot.most_common(1)[0]
        andel = 100 * antall / n
        print(f"  {'SUM':5s} {tot['a']:4d} {tot['b']:4d} {tot['c']:4d} {tot['d']:4d} {tot['e']:4d}"
              f"  {verst}) {andel:.0f} %   (tilfeldig = 25 %)")
        if andel > TERSKEL:
            avvik += 1

    print()
    if umalt:
        # Skill «målt og for skjevt» fra «klarte ikke måle». Å blande dem gjør
        # porten misvisende: IN1000 har reelt bare 7 bokstavfasiter, og en
        # AVVIK-melding om «over 45 %» ville sendt redaktøren på villspor.
        print(f"KAN IKKE MÅLE: {', '.join(umalt)} — for få gjenkjente fasitlinjer.")
        print("Boka bruker trolig et format porten ikke kjenner. Tell manuelt,")
        print("og legg formatet inn her hvis det er en ny konvensjon.")
    if avvik:
        print(f"FASITPORT AVVIK: {avvik} deler/bøker over {TERSKEL:.0f} %.")
        print("Bytt om alternativer — og husk å oppdatere fasitlinje, prosareferanser")
        print("til bokstaver, hint og distraktorbegrunnelser i samme slengen.")
        sys.exit(1)
    if umalt:
        sys.exit(1)
    print(f"FASITPORT OK — ingen bokstav over {TERSKEL:.0f} % i noen del")


if __name__ == "__main__":
    main()
