#!/usr/bin/env python3
"""Løser merge-konfliktene som oppstår når to bøker wires inn parallelt.

Bruk: python3 scripts/hoyskolebok/los-bokmerge.py [--torrkjor]

Wiringen rører alltid de samme fem filene, så to bøker bygget samtidig
kolliderer alltid. Konfliktene er av tre slag, og bare det første kan løses
med et naivt «behold begge»:

1. ÉN LINJE FRA HVER SIDE  (institusjoner.ts, quiz-data.ts, og COURSE-linja i
   textbook-courses.ts) → behold begge.

2. HELE LISTA PÅ HVER SIDE  (_registry.json, importlinja i
   textbook-courses.ts) → må FLETTES. En konkatenering gir ugyldig JSON /
   dupliserte importer.

3. TO KURSOBJEKTER  (textbook-courses-hoyskole.ts) → ⚠ gits hunk lar
   avslutningen «}, ], };» ligge i den FELLES HALEN etter konflikten, så den
   lukker BEGGE blokkene. «Behold begge» etterlater det første objektet
   ULUKKET — det ga TS1005 første gang. Halen må settes inn MELLOM blokkene.

Kjør `npx tsc --noEmit` etterpå. Skriptet gjør det ikke for deg, men det er
der feilen dukker opp hvis en ny konfliktform oppstår.
"""
import json, os, re, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
KONF = re.compile(r'<<<<<<< [^\n]*\n(.*?)\n?=======\n(.*?)\n?>>>>>>> [^\n]*\n', re.S)
HALE = re.compile(r'(\s*\},\n\s*\],\n\};\n)')

LINJE = ["src/app/trinn/hoyere/institusjoner.ts", "src/lib/data/quiz-data.ts"]
KURS = "src/lib/data/textbook-courses-hoyskole.ts"
REG = "src/lib/data/chapters/_registry.json"
TS = "src/lib/data/textbook-courses.ts"


def les(f):
    return open(os.path.join(ROOT, f), encoding="utf-8").read()


def skriv(f, t, torr):
    if not torr:
        open(os.path.join(ROOT, f), "w", encoding="utf-8").write(t)


def main():
    torr = "--torrkjor" in sys.argv
    for f in LINJE:
        t = les(f)
        n = len(KONF.findall(t))
        if n:
            skriv(f, KONF.sub(lambda m: m.group(1) + "\n" + m.group(2) + "\n", t), torr)
        print(f"  {f}: {n} konflikt(er) → begge beholdt")

    t = les(KURS)
    m = KONF.search(t)
    if m:
        h = HALE.match(t[m.end():])
        if not h:
            sys.exit(f"{KURS}: fant ikke den felles halen — løs for hånd")
        skriv(KURS, t[:m.start()] + m.group(1) + h.group(1) + "\n"
              + m.group(2) + t[m.end():], torr)
        print(f"  {KURS}: hale satt inn MELLOM blokkene")
    else:
        print(f"  {KURS}: ingen konflikt")

    t = les(REG)
    m = KONF.search(t)
    if m:
        a, b = json.loads(m.group(1)), json.loads(m.group(2))
        s = dict(a)
        s["chapterIds"] = sorted(set(a["chapterIds"]) | set(b["chapterIds"]))
        skriv(REG, KONF.sub(json.dumps(s, ensure_ascii=False) + "\n", t), torr)
        print(f"  {REG}: {len(a['chapterIds'])} ∪ {len(b['chapterIds'])} "
              f"→ {len(s['chapterIds'])} unike")
    else:
        print(f"  {REG}: ingen konflikt")

    t = les(TS)
    n = len(KONF.findall(t))
    if n:
        def los(x):
            a, b = x.group(1), x.group(2)
            if a.lstrip().startswith("import"):
                navn = re.findall(r"COURSE_[A-Z0-9_]+", a) + \
                       re.findall(r"COURSE_[A-Z0-9_]+", b)
                sett, ut = set(), []
                for k in navn:
                    if k not in sett:
                        sett.add(k)
                        ut.append(k)
                sti = re.search(r"from\s+'([^']+)'", a).group(1)
                return "import { " + ", ".join(ut) + " } from '" + sti + "';\n"
            return a + "\n" + b + "\n"
        skriv(TS, KONF.sub(los, t), torr)
    print(f"  {TS}: {n} konflikt(er) → importliste flettet, COURSE-linjer beholdt")

    rest = [f for f in LINJE + [KURS, REG, TS] if "<<<<<<<" in les(f)]
    print("\n" + ("TØRRKJØRING — ingenting skrevet" if torr else
                  ("⚠ KONFLIKTMARKØRER IGJEN: " + ", ".join(rest) if rest
                   else "alle konflikter løst — kjør nå npx tsc --noEmit")))


main()
