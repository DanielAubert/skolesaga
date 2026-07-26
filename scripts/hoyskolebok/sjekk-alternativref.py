#!/usr/bin/env python3
"""sjekk-alternativref.py [emne …] — peker quiz-forklaringene på riktig alternativ?

Quiz-alternativene STOKKES ved kjøretid:

    src/app/bok/[courseId]/[chapterId]/quiz/quiz-client.tsx
        const shuffledOptions = shuffleArray(q.options);

En forklaring som sier «alternativ to glemmer kjernefaktoren» peker derfor på et
tilfeldig alternativ for leseren. Feilen er usynlig i data og i build — den
oppstår først i nettleseren, og bare for noen av leserne.

Funnet 26. juli 2026: 369 slike i IN1020 Del 3–5 og 114 i seks LIVE bøker, verst
econ1100 med 103. Referansene er nesten alltid på norsk med tallord
(«alternativ to», «det tredje alternativet»), ikke med siffer — derfor fanget
ingen tidligere grep dem.

Fiksen er å sitere alternativets TEKST i stedet for plasseringen:
    før:  «Alternativ to glemmer kjernefaktoren»
    etter: «Svaret uten kjernefaktoren glemmer at …»

Kjør:  python3 scripts/hoyskolebok/sjekk-alternativref.py econ1100
       python3 scripts/hoyskolebok/sjekk-alternativref.py          # alle
Exit 1 ved treff.
"""
import glob
import os
import re
import sys

_CWD = os.path.join(os.getcwd(), "src/lib/data")
ROOT = (os.getcwd() if os.path.isdir(_CWD)
        else os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
DATA = os.path.join(ROOT, "src/lib/data")

MONSTRE = [
    (r"[Aa]lternativ\s*(?:nr\.?\s*)?[1-9]\b", "alternativ + siffer"),
    (r"[Aa]lternativ\s*(?:én|en|to|tre|fire|fem)\b", "alternativ + tallord"),
    (r"[Dd]et\s+(?:første|andre|tredje|fjerde|femte)\s+alternativet", "det N-te alternativet"),
    (r"[Dd]e\s+(?:to|tre)\s+(?:første|siste)\s+alternativ", "de N første/siste"),
    (r"[Ss]iste\s+alternativ", "siste alternativ"),
    (r"[Øø]verste\s+alternativ|[Nn]ederste\s+alternativ", "øverste/nederste"),
]


def kilder(emne=None):
    """Alle filer som kan inneholde quiz-forklaringer, per emne.

    To kilder, fordi quizene lever to steder i løpet av en bokproduksjon:
      · `quiz-staging/<id>.quiz.json` — der byggeagentene skriver dem
      · `quiz-data-<emne>.ts`         — der de havner etter wiring (fase 5)

    Leste porten bare den andre, meldte den «OK» for enhver bok som ennå ikke
    var wiret — altså gjennom HELE byggefasen, som er nettopp når feilen
    innføres og er billigst å rette. Blindsonen ble oppdaget 26. juli 2026 av en
    byggeagent som la merke til at porten ikke kunne ha lest noe.
    """
    ut = {}
    for p in sorted(glob.glob(os.path.join(DATA, "quiz-data-*.ts"))):
        ut.setdefault(os.path.basename(p)[len("quiz-data-"):-3], []).append(p)
    for p in sorted(glob.glob(os.path.join(DATA, "quiz-staging", "*.quiz.json"))):
        # <emne>-<del>-<kap>.quiz.json → emnet er alt før første tallsegment
        navn = os.path.basename(p)[: -len(".quiz.json")]
        m = re.match(r"^([a-z]+[a-z0-9-]*?)-\d", navn)
        if m:
            ut.setdefault(m.group(1), []).append(p)
    return ut


def main():
    valgte = set(sys.argv[1:])
    alle = kilder()

    # En port som stille finner ingenting gir falsk trygghet. Nevner brukeren et
    # emne vi ikke har én eneste fil for, er det en feil — ikke et grønt svar.
    if valgte:
        tomme = sorted(valgte - set(alle))
        if tomme:
            print(f"ALTERNATIVPORT KAN IKKE MÅLE: fant ingen quiz-filer for "
                  f"{', '.join(tomme)}.")
            print(f"Lette i {DATA}/quiz-data-<emne>.ts og "
                  f"{DATA}/quiz-staging/<emne>-*.quiz.json.")
            print("Er du i riktig arbeidstre? Er emnenavnet riktig skrevet?")
            sys.exit(1)

    tot = 0
    for emne in sorted(alle):
        if valgte and emne not in valgte:
            continue
        s = "\n".join(open(p, encoding="utf-8", errors="replace").read()
                      for p in alle[emne])
        funn = []
        for rx, navn in MONSTRE:
            for m in re.finditer(rx, s):
                i = m.start()
                utdrag = " ".join(s[max(0, i - 70):i + 70].split())
                funn.append((navn, utdrag))
        if funn:
            tot += len(funn)
            print(f"\n{emne}: {len(funn)} posisjonsreferanser")
            vist = {}
            for navn, utdrag in funn:
                vist.setdefault(navn, []).append(utdrag)
            for navn, liste in vist.items():
                print(f"  {navn} ({len(liste)}):")
                for u in liste[:2]:
                    print(f"      …{u[:130]}…")

    print()
    if tot:
        print(f"ALTERNATIVPORT AVVIK: {tot} forklaringer peker på plassering, ikke innhold.")
        print("Alternativene stokkes ved kjøretid — siter alternativets tekst i stedet.")
        sys.exit(1)
    print("ALTERNATIVPORT OK — ingen forklaring peker på et alternativs plassering")


if __name__ == "__main__":
    main()
