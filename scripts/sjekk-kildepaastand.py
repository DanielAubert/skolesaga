#!/usr/bin/env python3
"""sjekk-kildepaastand.py [emne …] — kontrollerer bøkenes kildepåstander mot arkivet.

Bøkene påstår i EKSAMENSANALYSE.md og i kildegrunnlaget hva arkivet inneholder:
«16 eksamenssett med offisielle sensorveiledninger», «76 PDF-er, kun
løsningsforslag», og så videre. Disse påstandene vises til studenter på
/bok/<emne>/kildegrunnlag. Ingen hadde kontrollert dem mot arkivet før
25. juli 2026 — da viste ECON1100 seg å ha 14 sensorveiledninger, ikke 16.

Skriptet gjør to ting:

  1. SANNFERDIGHET — teller faktiske filer per emne og sammenligner med tallene
     analysen påstår.
  2. JURIDISK RISIKO — flagger emner som bygger på materiale din egen sortering
     har merket som ikke fritt: opphavsrettsbeskyttede løsningsforslag,
     CC-BY-NC (forbyr kommersiell bruk), private institusjoner med svakere
     §14-grunnlag, og studentbesvarelser som krever samtykke.

Sannheten om juridisk status ligger i `_sortering/manifest.csv`, som er generert
av arkivets egen `sorter.py` med begrunnelse per fil. Skriptet leser den — det
gjetter ikke ut fra filnavn.

Ingen innhold fra PDF-ene leses. Kun stier, kategorier og tellinger.

Kjør:  python3 scripts/sjekk-kildepaastand.py            # alle bygde bøker
       python3 scripts/sjekk-kildepaastand.py econ1100   # ett emne
"""
import csv
import collections
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARKIV = os.path.expanduser("~/Desktop/Eksamner")
MANIFEST = os.path.join(ARKIV, "_sortering/manifest.csv")

# Kategoriene fra sorter.py, med juridisk betydning.
FRITT = {"PUB-OPPGAVE", "PUB-SENSORVEIL"}
RISIKO = {
    "INTERNT-LF": "opphavsrettsbeskyttet løsningsforslag — kan brukes som fasitkilde, ALDRI gjengis",
    "INTERNT-CC-NC": "CC BY-NC-SA — forbyr kommersiell bruk, og Skolesaga er kommersiell",
    "SJEKK-MANUELT": "privat institusjon (svakere §14) eller studentbesvarelse (krever samtykke)",
    "KOMBINERT-RENS": "oppgave og løsning i samme PDF — løsningsdelen må fjernes før publisering",
}


def les_manifest():
    """{emnekode: Counter(kategori)} — emnekoden utledes av stien."""
    per_emne = collections.defaultdict(collections.Counter)
    if not os.path.exists(MANIFEST):
        sys.exit(f"fant ikke {MANIFEST} — er arkivet montert?")
    with open(MANIFEST, encoding="utf-8", errors="replace") as f:
        for rad in csv.reader(f, delimiter=";"):
            if len(rad) < 2 or rad[1] == "kategori":
                continue
            sti, kat = rad[0], rad[1]
            deler = sti.split("/")
            # institusjon/EMNEKODE/... eller institusjon/undermappe/EMNEKODE/...
            for d in deler[1:3]:
                # Emnekoder har 2-4 siffer (EXPHIL03, MAT111, TMA4110), og noen har
                # bindestrek eller mellomrom. Krav om 3+ siffer bommet på EXPHIL03.
                if re.match(r"^[A-Za-zØÆÅ]{2,}[-_ ]?\d{2,}", d):
                    per_emne[d.upper().replace("-", "").replace("_", "")][kat] += 1
                    break
    return per_emne


def bygde_boker():
    """Emner som faktisk har kapittelfiler på disk."""
    ut = set()
    for p in glob.glob(os.path.join(ROOT, "docs/hoyskole-boker/*/")):
        emne = os.path.basename(p.rstrip("/"))
        if glob.glob(os.path.join(ROOT, "src/lib/data/chapters", f"{emne}-*.json")):
            ut.add(emne)
    return sorted(ut)


def paastander(emne):
    """Tallpåstander om sensorveiledninger i analysen, med kontekst."""
    p = os.path.join(ROOT, "docs/hoyskole-boker", emne, "EKSAMENSANALYSE.md")
    if not os.path.exists(p):
        return []
    s = open(p, encoding="utf-8", errors="replace").read()
    ut = []
    for m in re.finditer(r"[^.\n]{0,90}\bsensorveiledning\w*[^.\n]{0,90}", s, re.I):
        t = re.sub(r"\s+", " ", m.group(0)).strip()
        tall = re.findall(r"\b(\d{1,3})\b", t)
        ut.append((t[:120], tall))
    return ut[:4]


def nokkel(emne):
    return emne.replace("-uib", "").replace("-", "").upper()


def main():
    valgte = set(sys.argv[1:])
    per_emne = les_manifest()
    boker = [b for b in bygde_boker() if not valgte or b in valgte]

    print(f"{len(boker)} bygde bøker kontrollert mot {MANIFEST}\n")
    print(f"{'emne':14s} {'oppg':>5s} {'sensv':>6s} {'int-LF':>7s} {'risiko':>7s}  påstand i analysen")
    print("-" * 110)

    risikofunn = []
    for b in boker:
        k = nokkel(b)
        c = per_emne.get(k, collections.Counter())
        oppg = c.get("PUB-OPPGAVE", 0)
        sv = c.get("PUB-SENSORVEIL", 0)
        lf = c.get("INTERNT-LF", 0)
        ris = sum(c.get(r, 0) for r in RISIKO if r != "INTERNT-LF")
        p = paastander(b)
        note = ""
        if p:
            tall = [t for _, tl in p for t in tl if 1 <= int(t) <= 200]
            note = f"nevner {sorted(set(tall), key=int, reverse=True)[:3]}" if tall else "omtaler uten tall"
        flagg = ""
        if not c:
            flagg = "  ← IKKE FUNNET i manifestet"
        elif sv == 0 and any(int(t) > 1 for _, tl in p for t in tl if t.isdigit()) and "ingen" not in " ".join(x for x, _ in p).lower():
            flagg = "  ← analysen nevner tall, arkivet har 0 sensorveiledninger"
        if ris:
            for r, hvorfor in RISIKO.items():
                if r != "INTERNT-LF" and c.get(r):
                    risikofunn.append((b, r, c[r], hvorfor))
        print(f"{b:14s} {oppg:5d} {sv:6d} {lf:7d} {ris:7d}  {note}{flagg}")

    print("\n" + "=" * 110)
    if risikofunn:
        print("JURIDISK RISIKO — bøker som berører materiale som ikke er fritt:")
        for b, r, n, hvorfor in risikofunn:
            print(f"  {b}: {n} filer i {r}\n      {hvorfor}")
    else:
        print("JURIDISK RISIKO: ingen av de bygde bøkene berører CC-NC, private")
        print("institusjoner eller studentbesvarelser. Grunnlaget er åndsverkloven §14,")
        print("som unntar både eksamensoppgaver og sensorveiledninger fra offentlige")
        print("institusjoner. Se ~/Desktop/Eksamner/juridisk-eksamensoppgaver-opphavsrett.md")
    print("\nMerk: INTERNT-LF (løsningsforslag) er opphavsrettsbeskyttet og skal aldri")
    print("gjengis — men det er lovlig å bruke som fasitkilde for egne, nyskrevne")
    print("løsninger. Kolonnen viser hvor mange slike filer emnet har.")


if __name__ == "__main__":
    main()
