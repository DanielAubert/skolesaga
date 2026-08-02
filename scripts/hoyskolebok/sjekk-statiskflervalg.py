#!/usr/bin/env python3
"""
LENGDE-TELL for STATISKE flervalg i prøve-/oppgavekapitler.

Bruk: python3 scripts/hoyskolebok/sjekk-statiskflervalg.py <emne> [--alle] [--vis]
      python3 scripts/hoyskolebok/sjekk-statiskflervalg.py --alle-boker

## Hvorfor denne finnes

`quiz-lengdesjekk.mjs` måler `quiz-data-<emne>.ts` — den interaktive quizen.
Prøvekapitlene har i tillegg flervalg som ren MARKDOWN inne i collapsibles, og
dem har ingen port noensinne sett. Da inter1000 ble målt manuelt 2. august var
fasiten strengt lengste alternativ i 70 % av `4-prove`, 71 % i `2-prove` og
66 % i `1-prove` — mot sjansenivået på 25 %.

Det er samme feil som econ1210 hadde i den interaktive quizen (77 %), og den er
verre her: den interaktive quizen stokker alternativene ved kjøretid, mens et
statisk flervalg i markdown står som det står. En student som ikke kan stoffet,
kan score langt over sjansenivå ved å telle tegn.

## Hva den måler

Fasitens LENGDERANG blant alternativene, i begge retninger:
  · andel der fasiten er strengt lengste alternativ  (mål 25 %, tak 35 %)
  · andel der fasiten er strengt korteste alternativ (samme grenser)
Begge er signaler. En bok som har rettet «alltid lengst» ved å gjøre fasiten
kortest, har ikke rettet noe.

Exit 1 når en fil er over taket. `--alle` rapporterer uten å feile.
"""
import json, re, sys, os, glob, collections

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
CH = os.path.join(REPO, "src/lib/data/chapters")

TAK = 0.35          # over dette feiler porten
MAL = 0.25          # sjansenivå ved fire alternativer
MIN_N = 8           # under dette er tallet for støyete til å dømme etter

# Et «strengt lengste» alternativ som er ÉN tegn lengre enn det nest lengste er
# ikke et signal en student kan lese. Porten måler derfor to ting, og feiler
# bare på den andre:
#   · strengt lengst    — statistikken, nyttig som trend
#   · SYNLIG lengst     — minst MARGIN_TEGN OG MARGIN_ANDEL lengre enn nest
#                         lengste, altså faktisk mulig å se uten å telle
# Første utkast feilet bare på «strengt lengst», og ville sendt en redaktør inn
# i inter1000-3-prove for å rette seks oppgaver med margin 1, 1, 3, 4, 5 og 5
# tegn — der ingenting var galt.
MARGIN_TEGN = 12
MARGIN_ANDEL = 0.20

# Spørsmål: «**7.** Hva er …» eller «**Oppgave 7.** …», fulgt av a)–e)-linjer.
SPM = re.compile(r"^\*{0,2}(?:Oppgave\s+)?(\d{1,2})[.)]\*{0,2}\s", re.M)
ALT = re.compile(r"^\s*[-*]?\s*\*{0,2}([a-eA-E])\)\*{0,2}\s*(.+?)\s*$", re.M)
# Fasiten skrives i TO former, og porten må kjenne begge. Første utkast kjente
# bare den utfyllende, og meldte da «0 funn» for psyc1202 — en bok med 916
# alternativlinjer. Se selvtesten nederst: den nekter å rapportere rent når en
# fil har alternativer men ingen gjenkjent fasit.
#
#   utfyllende:  «**Oppgave 7.** Riktig svar: b). Definisjonen har tre ledd …»
#   kompakt:     «**Del A:** 1b · 2d · 3a · 4c · 5b · 6a»
FASIT = re.compile(
    r"\*{0,2}(?:Oppgave|Spørsmål)?\s*(\d{1,2})[.)]\*{0,2}\s*"
    r"(?:[^\n]{0,40}?)(?:Riktig|Rett|Korrekt)?\s*[Ss]var(?:et)?\s*(?:er)?\s*[:—-]?\s*"
    r"\*{0,2}([a-eA-E])\)")
# Fjerde form: «**Oppgave 1 — riktig: c.**» — bokstaven UTEN sluttparentes.
# mat1100-3-prove hadde ni flervalg som aldri ble målt av denne grunn.
# Nøkkelordet må stå umiddelbart foran, ellers ville en hvilken som helst
# bokstav etter et oppgavenummer blitt lest som fasit.
FASIT_BAR = re.compile(
    r"\*{0,2}(?:Oppgave|Spørsmål)\s*(\d{1,2})\s*[—–:-]\s*"
    r"(?:riktig|rett|korrekt)(?:\s+svar)?\s*[:：]\s*\*{0,2}([a-eA-E])\b", re.I)
# Kompaktlista: minst tre «<tall><bokstav>» på rad, skilt av ·/,/;/mellomrom.
# Kravet om tre på rad hindrer at løpende prosa som «i 3a og 4b» treffer.
#
# ⚠ TRE skrivemåter, ikke to. Første versjon krevde tall og bokstav inntil
# hverandre («1b · 2d») og så derfor ikke «**1 c** · **2 a** · **3 d**» — med
# mellomrom og fete markører. fil1001-3-prove hadde 12 flervalg som ALDRI ble
# målt, og porten sa ingenting, fordi filer uten parede spørsmål bare forsvant
# fra rapporten. Begge feilene er rettet: formen er med, og uparede filer
# rapporteres nå eksplisitt.
KOMPAKT_LISTE = re.compile(
    r"(?:\*{0,2}\b\d{1,2}\s?[a-eA-E]\b\*{0,2}[\s·,;]+){2,}"
    r"\*{0,2}\b\d{1,2}\s?[a-eA-E]\b")
KOMPAKT_PAR = re.compile(r"\b(\d{1,2})\s?([a-eA-E])\b")


def _strenger(o):
    """Alle strengfelt i dokumentet, i dokumentrekkefølge."""
    if isinstance(o, dict):
        for v in o.values():
            yield from _strenger(v)
    elif isinstance(o, list):
        for v in o:
            yield from _strenger(v)
    elif isinstance(o, str):
        yield o


def _oppgaver(tekst):
    """{nr: {bokstav: alternativtekst}} for spørsmål med >= 3 alternativer."""
    ut = {}
    treff = list(SPM.finditer(tekst))
    for i, m in enumerate(treff):
        slutt = treff[i + 1].start() if i + 1 < len(treff) else len(tekst)
        blokk = tekst[m.end():slutt]
        # Klipp ved neste overskrift eller «**Del B …**». Uten dette sluker
        # siste flervalg i et sett skriveoppgavene som kommer etter — de er
        # også merket a) b) c), og siden alternativene lagres i en dict,
        # OVERSKREV de det ekte flervalgets alternativer. ling1100-5-prove
        # målte da spørsmål 10 mot Del B-oppgavene. Funnet av en agent som
        # nektet å godta et tall porten ga uten å skjønne hvor det kom fra.
        kutt = re.search(r"\n#{2,4}\s|\n\*\*Del\s[A-Z]\b", blokk)
        if kutt:
            blokk = blokk[:kutt.start()]
        alt = {b.lower(): t for b, t in ALT.findall(blokk)}
        if len(alt) >= 3 and set(alt) == set("abcde"[:len(alt)]):
            ut[m.group(1)] = alt
    return ut


def _fasiter(tekst):
    ut = {n: b.lower() for n, b in FASIT.findall(tekst)}
    for n, b in FASIT_BAR.findall(tekst):
        ut.setdefault(n, b.lower())
    for m in KOMPAKT_LISTE.finditer(tekst):
        for nr, bok in KOMPAKT_PAR.findall(m.group(0)):
            ut.setdefault(nr, bok.lower())
    return ut


def _par(sti):
    """[(prøvenr, spørsmålsnr, alternativer, fasitbokstav), …]

    ⚠ Første versjon samlet ALLE oppgaver i én dict per fil, nøklet på
    spørsmålsnummer. Et prøvekapittel har fire prøver som HVER teller fra 1,
    så prøve 4 overskrev prøve 1, 2 og 3 — porten målte 20 av 34 flervalg i
    sgo1001 og rapporterte tallet som om det dekket hele fila. Blindsonen ble
    funnet av en byggeagent, ikke av porten selv.

    Oppgavene og fasiten ligger i HVER SIN blokk (oppgaver i én collapsible-del,
    fasit i neste). Vi går derfor gjennom strengene i dokumentrekkefølge og
    parer hvert fasitsett med den nærmeste FORANSTÅENDE oppgaveblokka som ennå
    ikke er paret.
    """
    d = json.load(open(sti, encoding="utf-8"))
    ventende, ut, prove = [], [], 0
    for s in _strenger(d):
        o = _oppgaver(s)
        if o:
            prove += 1
            ventende.append((prove, o))
        f = _fasiter(s)
        if f and ventende:
            # nærmeste uparede oppgaveblokk som deler spørsmålsnumre
            for k in range(len(ventende) - 1, -1, -1):
                pnr, oppg = ventende[k]
                if set(f) & set(oppg):
                    for nr, alt in oppg.items():
                        if nr in f and f[nr] in alt:
                            ut.append((pnr, nr, alt, f[nr]))
                    ventende.pop(k)
                    break
    return ut


def mal_fil(sti):
    """-> (n, lengst, kortest, synlig, [avvikseksempler])"""
    n = lengst = kortest = synlig = 0
    eks = []
    for pnr, nr, alt, f in _par(sti):
        nr = f"{pnr}.{nr}"
        n += 1
        lengder = {k: len(v) for k, v in alt.items()}
        fl = lengder[f]
        andre = [v for k, v in lengder.items() if k != f]
        if fl > max(andre):
            lengst += 1
            margin = fl - max(andre)
            if margin >= MARGIN_TEGN and margin >= MARGIN_ANDEL * max(andre):
                synlig += 1
                eks.append((nr, f, fl, max(andre), "lengst"))
        elif fl < min(andre):
            kortest += 1
            margin = min(andre) - fl
            if margin >= MARGIN_TEGN and margin >= MARGIN_ANDEL * fl:
                synlig += 1
                eks.append((nr, f, fl, min(andre), "kortest"))
    return n, lengst, kortest, synlig, eks


def ukoblet(sti):
    """Alternativlinjer i fila som INGEN fasit kunne kobles til.

    Selvtest mot den farligste feilmodusen: en parser som ikke kjenner fagets
    fasitform melder «0 funn» og ser ut som en ren bok. psyc1202 hadde 916
    alternativlinjer og ga 0 treff i første utkast, fordi boka skriver fasiten
    kompakt («1b · 2d · 3a») i stedet for utfyllende.
    """
    d = json.load(open(sti, encoding="utf-8"))
    # Tell alle oppgaveblokker i fila, ikke bare den siste — samme blindsone
    # som _par() ble skrevet om for.
    totalt = sum(len(_oppgaver(s)) for s in _strenger(d))
    return totalt - len(_par(sti)), totalt


def rapporter(emne, vis=False):
    filer = sorted(glob.glob(f"{CH}/{emne}-*.json"))
    rader, sum_n = [], 0
    verste = 0.0
    forbigatt = []          # filer med for få målbare spørsmål
    uparede = []            # filer der noe ikke lot seg pare
    for f in filer:
        n, lengst, kortest, synlig, eks = mal_fil(f)
        løs, tot = ukoblet(f)
        if løs:
            uparede.append((os.path.basename(f)[:-5], løs, tot))
        if n < MIN_N:
            # ⚠ Disse ble tidligere hoppet over UTEN et ord i rapporten, så
            # en fil med 6 målbare flervalg så ut som en fil uten flervalg.
            # tdt4120-5-prove hadde 32 alternativlinjer og forsvant helt.
            if n:
                forbigatt.append((os.path.basename(f)[:-5], n))
            continue
        sum_n += n
        pl, pk, ps = lengst / n, kortest / n, synlig / n
        rader.append((os.path.basename(f)[:-5], n, pl, pk, ps, eks))
        verste = max(verste, ps)   # porten feiler på SYNLIG skjevhet
    if not rader:
        # Ingen målbare oppgaver — men FINNES det alternativer vi ikke klarte
        # å koble? Da er stillheten en parserfeil, ikke en ren bok.
        løs = sum(ukoblet(f)[0] for f in filer)
        if løs >= MIN_N:
            print(f"\n{emne}: ⚠ {løs} flervalgsoppgaver UTEN gjenkjent fasit — "
                  f"porten kjenner ikke fasitformen i denne boka. IKKE tolk "
                  f"dette som at boka er ren.")
        return None, 0.0
    print(f"\n{emne}: {sum_n} statiske flervalg i {len(rader)} filer")
    if forbigatt:
        print(f"   ⚠ IKKE MÅLT — under {MIN_N} målbare flervalg, for få til å "
              f"dømme etter, men de FINNES:")
        for cid, n in forbigatt:
            print(f"       {cid:26} {n} flervalg")
    if uparede:
        print(f"   ⚠ IKKE PARET — flervalg uten gjenkjent fasit:")
        for cid, løs, tot in uparede:
            print(f"       {cid:26} {løs} av {tot}")
    for cid, n, pl, pk, ps, eks in sorted(rader, key=lambda r: -r[4]):
        flagg = "  ⚠" if ps > TAK else ""
        print(f"   {cid:26} n={n:3}  lengst {pl:5.0%}  kortest {pk:5.0%}"
              f"  SYNLIG {ps:5.0%}{flagg}")
        if vis and eks:
            for nr, b, fl, nest, retning in eks[:4]:
                print(f"       oppg {nr}: fasit {b}) {fl} tegn mot {nest} "
                      f"— {abs(fl - nest)} tegns margin, {retning}")
    return rader, verste


if __name__ == "__main__":
    args = sys.argv[1:]
    vis = "--vis" in args
    args = [a for a in args if not a.startswith("--") or a == "--alle-boker"]

    if "--alle-boker" in args:
        emner = sorted({os.path.basename(p).rsplit("-", 2)[0]
                        for p in glob.glob(f"{CH}/*-prove.json")})
        vondt = []
        for e in emner:
            rader, verste = rapporter(e)
            if verste > TAK:
                vondt.append((e, verste))
        print(f"\n{'=' * 62}\n{len(vondt)} av {len(emner)} bøker over taket "
              f"({TAK:.0%}), verste først:")
        for e, v in sorted(vondt, key=lambda x: -x[1]):
            print(f"   {e:22} {v:.0%}")
        sys.exit(0)

    emne = args[0]
    rader, verste = rapporter(emne, vis)
    if rader is None:
        print(f"{emne}: ingen statiske flervalg funnet (>= {MIN_N} per fil)")
        sys.exit(0)
    if verste > TAK and "--alle" not in sys.argv:
        print(f"\nAVVIK: verste fil ligger på {verste:.0%}, taket er {TAK:.0%} "
              f"(sjansenivå {MAL:.0%}).")
        print("Fyll ut distraktorene — ikke bare trim fasiten. En fasit som blir "
              "korteste alternativ er like avslørende som en som er lengst.")
        sys.exit(1)
    print(f"\nOK — verste fil {verste:.0%}, under taket {TAK:.0%}")
