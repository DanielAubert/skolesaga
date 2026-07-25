#!/usr/bin/env python3
"""sjekk-prosaregel.py <emne> <treff-regex> <unntak-regex>

Prosa-kontroll for termer som IKKE kan grep-sjekkes til null, fordi boka SKAL
omtale dem — men bare i en bestemt ramme. Eksempel: IN1000 skal advare mot
rekursjon og nevne arv som utenfor pensum, men aldri undervise dem.

Regelen: hvert treff på <treff-regex> skal stå i en setning som også treffer
<unntak-regex>. Setningsvinduet er +/- 200 tegn rundt treffet.

Bruk python-versjonen, ALDRI `grep -o` med «.{0,N}»-kontekst: kapittelfilene er
kompakt JSON på én linje, og et slikt mønster foran en alternasjon blir
kvadratisk — det tok 17 GB RAM på byggemaskinen 25. juli 2026 og måtte drepes.
Dette skriptet leser JSON-strukturen i stedet, bruker ingenting, og viser
hvilket felt treffet står i.

Eksempler:
  python3 scripts/hoyskolebok/sjekk-prosaregel.py in1000 \
      "rekursj" "utenfor pensum|ikke pensum|uønsket"
  python3 scripts/hoyskolebok/sjekk-prosaregel.py in1000 \
      "polymorfi|super\\(\\)|\\barv(en|es|ing)?\\b" \
      "utenfor pensum|ikke pensum|testes ikke|IN1010"

Exit 1 hvis noe treff mangler rammen.
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CH = os.path.join(ROOT, "src/lib/data/chapters")
VINDU = 200


def strenger(o, sti=""):
    if isinstance(o, str):
        yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items():
            yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o):
            yield from strenger(v, f"{sti}[{i}]")


def main():
    if len(sys.argv) < 4:
        sys.exit(__doc__)
    emne, treff_rx, unntak_rx = sys.argv[1], sys.argv[2], sys.argv[3]
    treff = re.compile(treff_rx, re.I)
    unntak = re.compile(unntak_rx, re.I)

    filer = sorted(glob.glob(os.path.join(CH, emne + "-*.json")))
    if not filer:
        sys.exit(f"fant ingen kapittelfiler for {emne}")

    n_treff, avvik = 0, []
    for p in filer:
        navn = os.path.basename(p)
        try:
            d = json.load(open(p, encoding="utf-8"))
        except Exception as e:
            avvik.append(f"UGYLDIG JSON i {navn}: {e}")
            continue
        for sti, s in strenger(d):
            for m in treff.finditer(s):
                n_treff += 1
                i = m.start()
                vindu = s[max(0, i - VINDU): i + VINDU]
                if not unntak.search(vindu):
                    avvik.append(f"{navn}{sti}: «{m.group(0)}» uten ramme — …{vindu}…")

    print(f"{emne}: {len(filer)} filer | {n_treff} treff på /{treff_rx}/")
    if avvik:
        print(f"AVVIK ({len(avvik)}):")
        for a in avvik[:30]:
            print(" -", a)
        if len(avvik) > 30:
            print(f"   … og {len(avvik)-30} flere")
        sys.exit(1)
    print("PROSAREGEL OK — alle treff står i påkrevd ramme")


if __name__ == "__main__":
    main()
