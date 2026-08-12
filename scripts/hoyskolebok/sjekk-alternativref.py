#!/usr/bin/env python3
"""sjekk-alternativref.py [emne …] — peker quiz-forklaringene på riktig alternativ?

Quiz-alternativene STOKKES ved kjøretid:

    src/app/[courseId]/[chapterId]/quiz/quiz-client.tsx
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

# ⚠ SUBSTANTIVET MÅ VARIERES, ikke bare «alternativ».
# Fram til 10. august 2026 sto ordet «alternativ» hardkodet i hvert mønster.
# EXFAC03-HARK Del 7 hadde 15 forklaringer som sa «den siste distraktoren» og
# «de to neste» — nøyaktig samme feil, like galt etter stokking, usynlig for
# porten. Ordet forfatteren velger er tilfeldig; plasseringsreferansen er feilen.
#
# «svar» er BEVISST utelatt: «det første svaret» viser like ofte til et
# resonnementssteg som til et alternativ, og ga falske positive ved prøvekjøring.
SUBST = r"(?:alternativ|distraktor|svaralternativ)"
MONSTRE = [
    (rf"[Aa]lternativ\s*(?:nr\.?\s*)?[1-9]\b", "alternativ + siffer"),
    (rf"[Aa]lternativ\s*(?:én|en|to|tre|fire|fem)\b", "alternativ + tallord"),
    # ⚠ «det/den andre» = nummer to (posisjon). «DE andre» = de øvrige, og det
    # er stabilt under stokking. [Dd]e[tn] holder dem fra hverandre; et forsøk
    # med [Dd]en? fanget 40+ falske «De andre alternativene».
    (rf"[Dd]e[tn]\s+(?:første|andre|tredje|fjerde|femte)\s+{SUBST}\w*", "det N-te alternativet"),
    (rf"[Dd]e\s+(?:to|tre)\s+(?:første|siste|neste|foregående)\s+{SUBST}\w*", "de N første/siste/neste"),
    (rf"[Dd]e\s+(?:to|tre)\s+neste\b", "de N neste"),
    # ⚠ \b FORAN ORDET, ellers treffer mønsteret INNI et annet ord. JUROFF1500
    # hadde «var det eneste alternativet like risikabelt» — «eneste» slutter på
    # «neste», og porten leste det som en plassering. Det er motsatt av en
    # plasseringsreferanse: «det eneste alternativet» er nettopp det saken
    # gjelder (handlingsalternativet), og setningen betyr det samme uansett
    # stokking. Samme felle: «det reneste alternativet» (econ1210).
    # En port som melder et avvik ingen har lov til å rette, blir ikke lest.
    (rf"\b[Ss]iste\s+{SUBST}\w*", "siste alternativ"),
    (rf"\b[Nn]este\s+{SUBST}\w*|\b[Ff]oregående\s+{SUBST}\w*", "neste/foregående"),
    (rf"\b[Øø]verste\s+{SUBST}\w*|\b[Nn]ederste\s+{SUBST}\w*", "øverste/nederste"),
]

# ── BOKSTAVFORMEN ───────────────────────────────────────────────────────────
# Fram til 12. august 2026 fanget porten bare ORDFORMEN («alternativ to», «det
# siste alternativet»). IN1900 hadde 155 forklaringer på bokstavform —
# «Alternativ b) er forvekslet med fordelingen», «og d) glemmer at
# flervalgsskallet finnes» — nøyaktig samme feil: bokstaven peker på en
# plassering, og plasseringen er tilfeldig etter stokking. En hel bok sto rød
# uten at porten kunne se det.
#
# ⚠ MÅ KJØRE PÅ LATEX-STRIPPET TEKST. Et første forsøk mot rå tekst meldte 458
# treff i 61 filer; 446 av dem var matematikk — `f(a)`, `8a/(27Rb)`, `p(a)` —
# der «a)» er en parentes i en formel, ikke et alternativ. Porten ville ha
# druknet ekte funn i falske, og blitt slått av. Etter stripping: 12.
MATTE = re.compile(r"\$[^$]*\$|\\\([^)]*\\\)|\\\[[^]]*\\]"
                   # Kode teller også som støy: `adder(a, b)` og
                   # `self.assertEqual(a, b)` ga treff i it/it-2 der «b)» bare er
                   # slutten på en parameterliste.
                   r"|`[^`]*`|\w+\([^)]*\)")
BOKSTAVMONSTRE = [
    (r"[Aa]lternativ(?:et|ene)?\s+[a-e]\)", "alternativ + bokstav"),
    # Bar bokstav teller bare der den står som et setningsledd og etterfølges av
    # et ord — «a) definerer negativ frihet». Uten den innrammingen treffer
    # mønsteret enhver parentes.
    (r"(?:^|[.,;:!?]\s+|\b(?:og|mens|men|eller)\s+)[a-e]\)\s*[a-zæøå]", "bar bokstav"),
]

# ⚠ EN REKKE AV BOKSTAVER ER OPPGAVELEDD, IKKE ALTERNATIVER.
# «Skriv underspørsmålene ut som a), b), c) på hver sin linje» (JUROFF1500) og
# «en besvarelse kan treffe a), b) og d)» (PSY1010) handler om EKSAMENSOPPGAVENS
# deloppgaver. De er stabile under stokking og skal stå. Kjennetegnet er at
# bokstavene opptrer i rekke; en ekte alternativreferanse står alene i setningen.
REKKE_ETTER = re.compile(r"\A[a-e]\)[,;]?\s*(?:og\s+|eller\s+)?[a-e]\)")
REKKE_FOR = re.compile(r"[a-e]\)[,;]?\s*(?:og\s+|eller\s+)?\Z")
# «uklare parameternavn (som a, b, c)» — enkeltbokstaver med komma, ikke parentes.
LISTE_FOR = re.compile(r"\b[a-e],\s*(?:[a-e],\s*)*\Z")


def _er_rekke(tekst, i, j):
    """Står bokstaven i en oppregning av oppgaveledd framfor alene i setningen?"""
    # ⚠ Utsnittene FØR må slutte på i, ikke i+2. Et første forsøk tok med
    # bokstaven selv, så «a) definerer negativ frihet» matchet seg selv som en
    # rekke — og alle seks ekte funnene i STV1100 ble tause. En vokter som
    # skjuler det den skal fange er verre enn ingen vokter.
    return bool(REKKE_ETTER.search(tekst[j - 2:j + 14])
                or REKKE_FOR.search(tekst[max(0, i - 14):i])
                or LISTE_FOR.search(tekst[max(0, i - 14):i]))


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
    # Tredje kilde: bøker som IKKE har quiz-filer, men har flervalg inne i
    # kapitlene. De var «ukjente emner» for porten, som meldte KAN IKKE MÅLE og
    # exit 1 — for 186 bøker. Det leste alle som støy, og blindsonen sto åpen.
    # Filene leses av kapittelforklaringer(); her registreres bare at emnet finnes.
    for p in glob.glob(os.path.join(DATA, "chapters", "*.json")):
        navn = os.path.basename(p)[:-5]
        if navn.startswith("_"):
            continue
        m = re.match(r"^(.+?)-\d+(?:-|$)", navn)
        if m:
            ut.setdefault(m.group(1), [])
    return ut


def kapittelforklaringer(emne):
    """Løsningstekstene i KAPITTELINNBAKTE flervalg — `type: multiple-choice`
    med `questions: [{options, solution}]`.

    Porten leste bare `quiz-data-*.ts` og `quiz-staging/`, og var derfor blind for
    dette formatet — som er det VGS- og ungdomsskolebøkene faktisk bruker. Den
    meldte «KAN IKKE MÅLE: fant ingen quiz-filer» for 186 bøker, og det ble lest
    som støy framfor som en blindsone.

    Blindsonen ble konkret 30. juli 2026: fasitbalanseringen stokket om
    alternativrekkefølgen i 67 690 slike spørsmål, og seks løsningstekster som sa
    «det siste alternativet …» pekte etterpå på feil svar. Filteret i
    balanseringsskriptet fanget «riktig svar: X)» og «alternativ 2», men ikke
    «det siste alternativet». Porten kunne ikke fange det heller — den så dem ikke.

    NB: disse alternativene stokkes IKKE ved kjøretid (`SequentialQuizExercise`
    viser dem i array-rekkefølge). En posisjonsreferanse er derfor ikke gal i seg
    selv — den blir gal så snart noen endrer rekkefølgen. Det er grunn nok til å
    forby den: rekkefølgen ER blitt endret, korpusvidt, én gang.
    """
    import json as _json
    ut = []
    for p in sorted(glob.glob(os.path.join(DATA, "chapters", f"{emne}-*.json"))
                    + glob.glob(os.path.join(DATA, "chapters", "nn", f"{emne}-*.json"))):
        try:
            d = _json.load(open(p, encoding="utf-8"))
        except Exception:
            continue
        for blk in _flervalgsblokker(d):
            for q in blk.get("questions") or []:
                for k, v in q.items():
                    if k != "task" and k != "question" and isinstance(v, str):
                        ut.append((os.path.basename(p), v))
    return ut


def _flervalgsblokker(o, ut=None):
    ut = ut if ut is not None else []
    if isinstance(o, dict):
        if o.get("type") == "multiple-choice" and isinstance(o.get("questions"), list):
            ut.append(o)
        for v in o.values():
            _flervalgsblokker(v, ut)
    elif isinstance(o, list):
        for x in o:
            _flervalgsblokker(x, ut)
    return ut


def forklaringer(s):
    """Gir (feltnavn, strenginnhold) for hver `explanation`-verdi i teksten.

    Porten leste tidligere HELE filteksten. Da kan den ikke skille en forklaring
    fra et ALTERNATIV, og et alternativ har full rett til å nevne plassering:
    in1020 har distraktoren «Kryss av det første alternativet som stemmer, og gå
    videre» i et spørsmål om arbeidsmåte på eksamen. Det er eksamensstrategi, det
    betyr det samme uansett stokking, og det SKAL stå.

    En port som melder ett evig avvik ingen har lov til å rette, blir en port
    ingen leser. Derfor scopes skanningen til `explanation` — det eneste feltet
    der en posisjonsreferanse faktisk er gal.

    ⚠ Alle TRE strengformene må dekkes. Første forsøk leste bare `"..."`, og var
    da blind for 101 av 174 quiz-filer — 18 717 forklaringer, altså 42 % av
    korpuset. De eldre VGS-bøkene (`quiz-data-1p.ts` m.fl.) bruker enkeltfnutter.
    En scoping som gjør porten blind er verre enn den falske positiven den skulle
    fjerne, så kravet er nulltap: like mange uttrukne som deklarerte
    `explanation`-felt i hver enkelt fil. Regresjonstesten står i
    `test_forklaringer()` nederst.
    """
    for m in re.finditer(r'(?:"explanation"|\bexplanation)\s*:\s*'
                         r'(?:"((?:[^"\\]|\\.)*)"'
                         r"|'((?:[^'\\]|\\.)*)'"
                         r'|`((?:[^`\\]|\\.)*)`)', s):
        yield "explanation", next(g for g in m.groups() if g is not None)


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
        kilder_tekst = list(forklaringer(s))
        kilder_tekst += [(f, t) for f, t in kapittelforklaringer(emne)]
        for felt, tekst in kilder_tekst:
            renset = MATTE.sub(" ", tekst)
            for kilde, monstre in ((tekst, MONSTRE), (renset, BOKSTAVMONSTRE)):
                for rx, navn in monstre:
                    for m in re.finditer(rx, kilde):
                        if navn == "bar bokstav":
                            b = re.search(r"[a-e]\)", m.group(0))
                            if _er_rekke(kilde, m.start() + b.start(),
                                         m.start() + b.end()):
                                continue
                        i = m.start()
                        utdrag = " ".join(kilde[max(0, i - 70):i + 70].split())
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
