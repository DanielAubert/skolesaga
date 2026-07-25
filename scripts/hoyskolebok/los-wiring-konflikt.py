#!/usr/bin/env python3
"""los-wiring-konflikt.py <emne> <COURSE_KONSTANT> — løs de faste merge-konfliktene.

Når bok B landes på en branch som alt har bok A, konflikter alltid de samme fem
delte wiring-filene. Konfliktene er ADDITIVE: begge bøker skal beholdes. Men
«behold begge hunks» er FEIL i kursfila: de to kursobjektene slutter med
identiske linjer, som git leser som felles kontekst, så hunkene interleaver og
resultatet blir en hybrid av de to bøkene.

Riktig oppskrift, som dette skriptet utfører:
  textbook-courses-hoyskole.ts  HEAD-versjonen + hele `export const <KONST>`-blokka
                                hentet verbatim fra bokbranchen
  textbook-courses.ts           HEAD + konstanten i importlista og i kursarrayet
  quiz-data.ts                  HEAD + import-linje og spread-linje
  institusjoner.ts              HEAD + emnets linje under riktig institusjon
  _registry.json                union av BEGGE nøkler (chapterIds OG aliases)

Kjør MIDT I en konfliktende merge, fra hovedtreet:
    git merge bok/<emne>            # -> CONFLICT i fem filer
    python3 scripts/hoyskolebok/los-wiring-konflikt.py <emne> COURSE_<EMNE>
    npx tsc --noEmit && npm run build
"""
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KURSFIL = "src/lib/data/textbook-courses-hoyskole.ts"
INDEKSFIL = "src/lib/data/textbook-courses.ts"
QUIZFIL = "src/lib/data/quiz-data.ts"
INSTFIL = "src/app/bok/trinn/hoyere/institusjoner.ts"
REGFIL = "src/lib/data/chapters/_registry.json"


def vis(rev, fil):
    r = subprocess.run(["git", "show", f"{rev}:{fil}"], capture_output=True, text=True, cwd=ROOT)
    if r.returncode:
        sys.exit(f"fant ikke {fil} i {rev}: {r.stderr.strip()}")
    return r.stdout


def skriv(fil, innhold):
    open(os.path.join(ROOT, fil), "w", encoding="utf-8").write(innhold)


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    emne, konst = sys.argv[1], sys.argv[2]
    gren = subprocess.run(["git", "rev-parse", "--verify", "MERGE_HEAD"],
                          capture_output=True, text=True, cwd=ROOT)
    if gren.returncode:
        sys.exit("ingen merge er i gang (MERGE_HEAD mangler) — kjør dette MIDT i mergen")
    deres = "MERGE_HEAD"

    # 1) kursfila: HEAD + hele kursblokka verbatim
    head, theirs = vis("HEAD", KURSFIL), vis(deres, KURSFIL)
    start = f"export const {konst}: TextbookCourse = {{"
    if start not in theirs:
        sys.exit(f"{konst} finnes ikke i {deres}:{KURSFIL}")
    i = theirs.index(start)
    j = theirs.index("\n};\n", i) + len("\n};\n")
    blokk = theirs[i:j]
    if blokk.count("export const") != 1:
        sys.exit("klarte ikke å isolere kursblokka (fant flere export const i utsnittet)")
    if start in head:
        print(f"  {KURSFIL}: {konst} finnes alt i HEAD — hopper over")
        ny_kurs = head
    else:
        ny_kurs = head.rstrip("\n") + "\n\n" + blokk
    skriv(KURSFIL, ny_kurs)
    print(f"  {KURSFIL}: {head.count('export const COURSE_')} kurs + {konst} "
          f"-> {ny_kurs.count('export const COURSE_')}")

    # 2) indeksfila: importliste + kursarray
    s = vis("HEAD", INDEKSFIL)
    if konst not in s:
        s = s.replace(" } from './textbook-courses-hoyskole';",
                      f", {konst} }} from './textbook-courses-hoyskole';", 1)
        # Innsetting i KURSARRAYET må ankres inne i selve arrayet. Konstantnavn som
        # `COURSE_NATURFAG_10,` finnes også i importlistene lenger opp i fila, og en
        # naiv replace() traff 10.-klasse-importen i stedet (tsc: «Module
        # './textbook-courses-10' has no exported member COURSE_ECON2310»).
        start = s.index("export const TEXTBOOK_COURSES: TextbookCourse[] = [")
        slutt = s.index("\n];", start)
        hoyskole = [k.strip() for k in
                    s[s.index("import {", s.index("from './textbook-courses-hoyskole'") - 400):]
                    .split("}")[0].lstrip("import {").split(",")]
        i_siste = max((s.rfind(f"  {k},\n", start, slutt) for k in hoyskole if k), default=-1)
        if i_siste == -1:
            sys.exit(f"fant ingen høyskole-konstant inne i TEXTBOOK_COURSES i {INDEKSFIL}")
        linjeslutt = s.index("\n", i_siste) + 1
        s = s[:linjeslutt] + f"  {konst},\n" + s[linjeslutt:]
        assert s.count(konst) == 2, f"forventet 2 forekomster av {konst}, fikk {s.count(konst)}"
    skriv(INDEKSFIL, s)
    print(f"  {INDEKSFIL}: import + array OK")

    # 3) quiz-data.ts: import + spread
    s = vis("HEAD", QUIZFIL)
    var = "quizData_" + emne.replace("-", "")
    if var not in s:
        imports = [l for l in s.split("\n") if l.startswith("import quizData_")]
        s = s.replace(imports[-1], imports[-1] + f"\nimport {var} from './quiz-data-{emne}';", 1)
        spread = [l for l in s.split("\n") if l.strip().startswith("...quizData_")]
        s = s.replace(spread[-1], spread[-1] + f"\n  ...{var},", 1)
        assert s.count(var) == 2
    skriv(QUIZFIL, s)
    print(f"  {QUIZFIL}: import + spread OK")

    # 4) institusjoner.ts: emnets linje
    s, theirs = vis("HEAD", INSTFIL), vis(deres, INSTFIL)
    linjer = [l for l in theirs.split("\n") if f"courseId: '{emne}'" in l]
    if not linjer:
        print(f"  {INSTFIL}: ingen linje for {emne} i bokbranchen — hopper over")
    elif f"courseId: '{emne}'" in s:
        print(f"  {INSTFIL}: {emne} finnes alt i HEAD — hopper over")
    else:
        # legg linja rett etter den siste linja i SAMME institusjonsblokk som i bokbranchen
        idx = theirs.index(linjer[0])
        forrige = theirs.rfind("      { courseId:", 0, idx)
        anker = theirs[forrige:theirs.index("\n", forrige)] if forrige != -1 else None
        if anker and anker in s:
            s = s.replace(anker, anker + "\n" + linjer[0], 1)
        else:
            # fall tilbake: legg den først i blokka etter «subjects: [»
            s = s.replace("    subjects: [\n", "    subjects: [\n" + linjer[0] + "\n", 1)
        skriv(INSTFIL, s)
        print(f"  {INSTFIL}: {emne} lagt inn")

    # 5) _registry.json: union av BEGGE nøkler
    a, b = json.loads(vis("HEAD", REGFIL)), json.loads(vis(deres, REGFIL))
    u = dict(a)
    u["chapterIds"] = sorted(set(a["chapterIds"]) | set(b["chapterIds"]))
    u["aliases"] = {**a.get("aliases", {}), **b.get("aliases", {})}
    skriv(REGFIL, json.dumps(u, ensure_ascii=False) + "\n")
    print(f"  {REGFIL}: chapterIds {len(a['chapterIds'])} ∪ {len(b['chapterIds'])} "
          f"= {len(u['chapterIds'])} | aliases {len(u['aliases'])}")

    igjen = subprocess.run(["git", "diff", "--name-only", "--diff-filter=U"],
                           capture_output=True, text=True, cwd=ROOT).stdout.split()
    igjen = [f for f in igjen if f not in {KURSFIL, INDEKSFIL, QUIZFIL, INSTFIL, REGFIL}]
    if igjen:
        print("\nGJENSTÅENDE KONFLIKTER (må løses manuelt):")
        for f in igjen:
            print(" -", f)
        sys.exit(1)
    print("\nAlle fem wiring-konfliktene løst. Kjør: git add -A src/ && npx tsc --noEmit && npm run build")


if __name__ == "__main__":
    main()
