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
# ⚠ VAKTEN MÅ KRYSSE ÉN LINJE. Fram til 30. juli 2026 sto den som
# `(?![^\n]{0,60}\bb\))`, og `[^\n]` kan ikke krysse linjeskift. En flerdels-
# fasit skrevet slik:
#
#     ### Fasit
#     **a)** konfidensialitet
#     **b)** integritet
#
# ble derfor lest som ETT enkeltsvar på «a» — og en del med bare slike fasiter
# så ut som 100 % a). Det ga falske utslag i tfy4115 1-prove (3) og 4-prove (2).
#
# Løsningen er ikke `[\s\S]{0,60}`: da hopper porten over ekte enkeltsvar som
# tilfeldigvis har en «b)» i neste avsnitt, og blir blind i stedet for støyende.
# Vakten kjenner i stedet igjen FORTSETTELSE av samme liste — «, b)» på samme
# linje, eller «b)» først på neste linje, eventuelt med **, - eller «1.» foran.
# Testet mot sju tilfeller: fire flerdels-varianter hoppes, tre ekte enkeltsvar
# telles.
# ⚠ TO uavhengige vern mot samme artefakt, og begge trengs.
#
# Artefaktet: en fasit-OVERSKRIFT på egen linje fulgt av en deloppgaveliste,
#     «### Fasit\n\n**a) Symbolsk.** …\n**b)** …»
# blir lest som ett enkeltsvar «a». I tfy4115 var samtlige 17 «fasiter» porten
# fant av denne typen — seks prøvekapitler, alle «a», altså falsk 100 % i hver
# del, mens boka i virkeligheten har 98 bokstavfasiter med verste bokstav på 23 %.
#
# Vern 1 — nøkkelordet og bokstaven MÅ stå på samme linje ([ \t], ikke \s).
#   Da matcher overskrift-tilfellet ikke i det hele tatt.
# Vern 2 — lookaheaden krysser ETT linjeskift for å finne en «b)».
#   Fanger `Riktig svar: a)` der b) står på neste linje, altså en liste skrevet på
#   én linje med nøkkelordet. Vern 1 alene ville telt den.
#
# Hvert vern har en restsituasjon det andre dekker, så de står sammen.
# ⚠ Vern 3 — SKILLETEGNET ER PÅKREVD når nøkkelordet er et bart «svar».
# Fysikk- og mattebøkene merker deloppgaver i gjennomregnede løsninger slik:
#     «**Svar b):** 100 m»
# Det er en DELOPPGAVE-ETIKETT, ikke en fasitnøkkel — boka har ingen flervalg i
# det hele tatt. Med `[:=]?` valgfritt ble fys1 lest som «b) 71 %» av 49 slike
# etiketter, og fys1001, mat1100 og fysikk2 på samme vis. En ekte fasitnøkkel
# skriver kolonet FØR bokstaven: «Riktig svar: b) O(n)» (it, 14 av 22 — et EKTE
# funn). Skillet er altså nettopp skilletegnets plass.
# «riktig svar» og «rett svar» er entydige nok til å beholde valgfritt skilletegn.
FASIT = re.compile(r"(?:(?:riktig|rett) svar[ \t]*[:=]?|(?:fasit|svar)[ \t]*[:=])[ \t]*"
                   r"\*{0,2}([a-e])\)"
                   r"(?![^\n]{0,60}\bb\)"
                   r"|[^\n]{0,60}\n\s*(?:\*\*|[-*]\s+|\d+\.\s*)?\*{0,2}b\))", re.I)
FASITREKKE = re.compile(r"\b\d+([a-e])\b(?:\s*[·,]\s*\d+[a-e]\b){2,}", re.I)
REKKELEDD = re.compile(r"\b\d+([a-e])\b")
# Tredje konvensjon: «**Oppgave 9** (2 p): **b) 7.**» — IN1000. Fasiten står
# etter et oppgavenummer og poeng, uten ordet «fasit» eller «riktig svar».
# Uten denne var porten grønn-blind for hele boka og meldte «0 fasitlinjer».
FASIT_OPPGAVE = re.compile(
    r"\*\*Oppgave\s+\d+[^*]{0,30}\*\*[^\n]{0,20}?\*\*([a-e])\)", re.I)
# Fjerde konvensjon: «**Svar: D.**» med STOR bokstav — realfagsbøkene med SEKS
# alternativer A–F (tfy4115, in1000, elektro-data-vg1). Porten så bare små
# bokstaver og var derfor helt blind for dem.
# NB: nøkkelordet må matche uansett store/små, men BOKSTAVEN må være stor —
# derfor kan re.I ikke brukes på hele mønsteret (den ville gjort [A-F] til
# [a-fA-F] og dratt inn deloppgave-a) igjen). Variantene skrives ut i stedet.
FASIT_STOR = re.compile(r"(?:[Rr]iktig svar|[Rr]ett svar|[Ss]var)[ \t]*[:=][ \t]*"
                        r"\*{0,2}([A-F])[.)]")


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
            for t in FASIT_STOR.finditer(s):
                per_del[delen][t.group(1).lower()] += 1
    return per_del


def strukturerte(emne):
    """Fasitfordeling i STRUKTURERTE flervalg — der fasiten er `isCorrect: true`.

    Dette er den store blindsonen porten hadde. Den lette bare etter TEKST-
    mønstre («Riktig svar: c)») og var derfor helt blind for oppgaveblokkene med

        type: "multiple-choice", questions: [{ options: [{text, isCorrect}] }]

    som er formatet i VGS- og ungdomsskolebøkene. Målt 30. juli 2026: 44 099 slike
    fasiter i korpuset, med b) på 35 % mot 25 % tilfeldig, og 19 bøker over 45 % —
    verst sosiologi med **b) 76 %**. `SequentialQuizExercise` stokker IKKE
    alternativene, så en elev som alltid krysser andre alternativ får 76 % der.

    Nettopp det porten finnes for, i tre års verdi av innhold, usett.
    """
    per_del = collections.defaultdict(collections.Counter)
    for p in sorted(glob.glob(os.path.join(CH, f"{emne}-*.json"))):
        try:
            d = json.load(open(p, encoding="utf-8"))
        except Exception:
            continue
        m = re.match(rf"{re.escape(emne)}-(\d+)", d.get("id", ""))
        delen = m.group(1) if m else "?"
        for blokk in flervalgsblokker(d):
            for q in blokk.get("questions") or []:
                opts = q.get("options") or []
                # Ett enkelt placeholder-alternativ er DØD data: rendreren tar
                # questions-grenen og viser aldri blokkens eget options-array.
                # 13 818 slike finnes; de skal ikke telles.
                if len(opts) < 2:
                    continue
                for i, o in enumerate(opts):
                    if isinstance(o, dict) and o.get("isCorrect"):
                        per_del[delen][chr(97 + i)] += 1
    return per_del


def flervalgsblokker(o, ut=None):
    ut = ut if ut is not None else []
    if isinstance(o, dict):
        if o.get("type") == "multiple-choice" and isinstance(o.get("questions"), list):
            ut.append(o)
        for v in o.values():
            flervalgsblokker(v, ut)
    elif isinstance(o, list):
        for x in o:
            flervalgsblokker(x, ut)
    return ut


def har_prover(emne):
    return bool(glob.glob(os.path.join(CH, f"{emne}-*prove*.json")))


ALTLINJE = re.compile(r"^\s*(?:[-*]\s*)?\*{0,2}[A-Ea-e]\)\s*\S", re.M)


def alternativlinjer(emne):
    """Antall linjer som SER UT som et svaralternativ, uansett fasitformat.

    Brukes til å skille «flervalg finnes, men porten kjenner ikke fasitformatet»
    (farlig) fra «boka har ingen statiske flervalg» (ikke aktuelt å måle).
    Teller alternativene, ikke fasitene, nettopp fordi fasitformatet er det som
    kan være ukjent.
    """
    n = 0
    for p in glob.glob(os.path.join(CH, f"{emne}-*.json")):
        n += len(ALTLINJE.findall(open(p, encoding="utf-8", errors="replace").read()))
        # ⚠ Alternativene ligger ofte IKKE som markdown-linjer, men i et
        # `options`-array i oppgaveblokken — slik gjør elektro-data-vg1, it,
        # psy1010 og fysikk2, alle med ekte skjev fasit. En linjebasert telling
        # ser 0 for dem, og «0 alternativer → ikke aktuelt å måle» ville da vært
        # falsk grønt for nettopp de bøkene porten finnes for.
        try:
            d = json.load(open(p, encoding="utf-8"))
        except Exception:
            continue
        n += antall_options(d)
    return n


def antall_options(o):
    """Antall alternativer i `options`-arrayer, uansett hvor dypt de ligger."""
    if isinstance(o, dict):
        t = 0
        for k, v in o.items():
            if k == "options" and isinstance(v, list):
                t += len(v)
            else:
                t += antall_options(v)
        return t
    if isinstance(o, list):
        return sum(antall_options(x) for x in o)
    return 0


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    avvik = 0
    umalt = []
    for emne in sys.argv[1:]:
        # Finnes boka i det hele tatt i dette treet? Uten dette vernet melder
        # porten «ingen statiske flervalg → grønt» for et emne som ikke er der —
        # f.eks. en bok som ennå bare finnes i et arbeidstre. Falsk grønt for en
        # bok som ikke eksisterer er verre enn ingen måling.
        if not glob.glob(os.path.join(CH, f"{emne}-*.json")):
            print(f"KAN IKKE MÅLE: {emne} — fant ingen kapittelfiler i {CH}.")
            print("Er du i riktig arbeidstre? Er emnenavnet riktig skrevet?")
            sys.exit(1)
        per_del = mål(emne)
        # Slå de strukturerte fasitene inn i samme fordeling. Uten dette meldte
        # porten «ingen statiske flervalg» for bøker med tusenvis av dem.
        for delen, c in strukturerte(emne).items():
            per_del[delen].update(c)
        tot = collections.Counter()
        for c in per_del.values():
            tot.update(c)
        n = sum(tot.values())
        if n < MINIMUM:
            # En port som stille finner ingenting gir falsk trygghet. MEN det
            # finnes to helt ulike grunner til å finne ingenting, og porten
            # blandet dem:
            #
            #   (a) boka har flervalg, men i et format porten ikke kjenner
            #       → FARLIG. Fordelingen kan være skjev uten at noen ser det.
            #   (b) boka har ingen statiske flervalg i det hele tatt
            #       → ikke aktuelt å måle. Ingen skjevhet kan finnes.
            #
            # MA1301 er tilfelle (b): NTNUs tallteori-eksamen har aldri hatt
            # flervalgsdel, så prøvekapitlene er bevisoppgaver med gjennomregnede
            # løsninger i collapsibles. Boka har 0 alternativlinjer i det hele
            # tatt. Å melde exit 1 på det gjør porten til noe man overstyrer, og
            # da beskytter den ikke tilfelle (a) heller.
            #
            # Skillet måles på om det finnes ALTERNATIVLINJER å fordele — ikke på
            # om porten kjente igjen fasitlinjene.
            alt = alternativlinjer(emne)
            if har_prover(emne) and alt >= MINIMUM:
                print(f"{emne}: fant bare {n} fasitlinjer, men {alt} alternativlinjer"
                      "  ← flervalg FINNES i et format porten ikke kjenner. "
                      "Kontroller manuelt.")
                umalt.append(emne)
            else:
                print(f"{emne}: {n} fasitlinjer og {alt} alternativlinjer — "
                      "boka har ingen statiske flervalg, så fordelingen er ikke "
                      "aktuell å måle (quizen dekkes av sjekk-alternativref og "
                      "stokkes ved kjøretid).")
            continue
        print(f"\n{emne}: {n} flervalgsfasiter")
        print(f"  {'del':5s} {'a':>4s} {'b':>4s} {'c':>4s} {'d':>4s} {'e':>4s}"
              f" {'f':>4s}  verste")
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
                  f" {c['f']:4d}  {verst}) {andel:.0f} %{flagg}")
            if flagg:
                avvik += 1
        verst, antall = tot.most_common(1)[0]
        andel = 100 * antall / n
        tilf = 100 / 6 if tot['f'] else 25.0
        print(f"  {'SUM':5s} {tot['a']:4d} {tot['b']:4d} {tot['c']:4d} {tot['d']:4d} {tot['e']:4d}"
              f" {tot['f']:4d}  {verst}) {andel:.0f} %   (tilfeldig = {tilf:.0f} %)")
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
