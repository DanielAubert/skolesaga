#!/usr/bin/env python3
"""figur-manifest.py [bok …] — inventar over alle figurer, for gjennomgang.

Samler alt en gjennomgang trenger på ett sted, slik at hverken menneske eller
agent må grave det fram på nytt per figur:

  - hvor figuren står (bok, kapittel, indeks, hvilken blokk den følger etter)
  - hva teksten lover (caption og alt-tekst, begge målformer)
  - hva figuren FAKTISK viser (tekstetikettene hentet ut av SVG-en)
  - om fila finnes på disk, og om nynorskutgaven har samme blokk

Det siste punktet er poenget: de fleste figurfeil er at bildeteksten sier noe
annet enn tegningen viser. Ved å sette etikettene ved siden av bildeteksten kan
avviket ses uten å åpne figuren.

Skriv til fil:  python3 scripts/figur-manifest.py > docs/figur-review/manifest.json
Ett fag:        python3 scripts/figur-manifest.py 1t
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CH = os.path.join(ROOT, "src/lib/data/chapters")
# Tekst i SVG: både <text>…</text> og <tspan>…</tspan>. Vi tar alt mellom > og <
# som ikke er markup, og fjerner dubletter med bevart rekkefølge.
SVG_TEKST = re.compile(r">([^<>]{1,60})<")


def svg_etiketter(sti):
    """Tekstetikettene i en SVG, i rekkefølge, uten dubletter."""
    if not os.path.exists(sti):
        return None
    with open(sti, encoding="utf-8", errors="replace") as f:
        raa = f.read()
    ord_ = [t.strip() for t in SVG_TEKST.findall(raa) if t.strip()]
    return list(dict.fromkeys(ord_))


def kort(blokk):
    """Én linje som beskriver en nabo-blokk, til plasseringskontroll."""
    if not isinstance(blokk, dict):
        return None
    t = blokk.get("type")
    tittel = blokk.get("title")
    if tittel:
        return f"{t}: {tittel}"
    if t == "exercise":
        oppg = (blokk.get("exercise") or {}).get("task", "")
        return f"exercise: {oppg[:70]}"
    tekst = blokk.get("content")
    if isinstance(tekst, str):
        return f"{t}: {tekst[:70]}"
    return t


def main():
    fag = set(sys.argv[1:])
    ut = []
    for p in sorted(glob.glob(os.path.join(CH, "*.json"))):
        if os.path.basename(p).startswith("_"):
            continue
        d = json.load(open(p, encoding="utf-8"))
        bok = d.get("courseId")
        if fag and bok not in fag:
            continue
        kapittel = d.get("id")
        innhold = d.get("content", []) or []

        nn_sti = os.path.join(CH, "nn", os.path.basename(p))
        nn = json.load(open(nn_sti, encoding="utf-8")) if os.path.exists(nn_sti) else None
        nn_blokker = {b.get("id"): b for b in (nn.get("content", []) if nn else []) if isinstance(b, dict)}

        for i, b in enumerate(innhold):
            if not isinstance(b, dict) or b.get("type") != "image":
                continue
            src = b.get("src", "")
            fil = os.path.join(ROOT, "public" + src) if src.startswith("/") else ""
            nnb = nn_blokker.get(b.get("id"))
            ut.append({
                "id": b.get("id"),
                "bok": bok,
                "kapittel": kapittel,
                "kapittelnummer": d.get("chapterNumber"),
                "kapitteltittel": d.get("title"),
                "indeks": i,
                "av_blokker": len(innhold),
                "src": src,
                "fil_finnes": bool(fil and os.path.exists(fil)),
                "caption": b.get("caption"),
                "alt": b.get("alt"),
                "nn_caption": (nnb or {}).get("caption"),
                "nn_alt": (nnb or {}).get("alt"),
                "nn_mangler": nnb is None,
                "svg_etiketter": svg_etiketter(fil) if fil else None,
                "star_etter": kort(innhold[i - 1]) if i > 0 else "(første blokk)",
                "star_foran": kort(innhold[i + 1]) if i + 1 < len(innhold) else "(siste blokk)",
            })

    json.dump(ut, sys.stdout, ensure_ascii=False, indent=1)
    print(file=sys.stderr)
    print(f"{len(ut)} figurer i {len(set(x['bok'] for x in ut))} bøker", file=sys.stderr)
    mangler = [x["id"] for x in ut if not x["fil_finnes"]]
    if mangler:
        print(f"ADVARSEL: {len(mangler)} figurer mangler fil på disk: {mangler[:5]}", file=sys.stderr)
    unn = [x["id"] for x in ut if x["nn_mangler"]]
    if unn:
        print(f"ADVARSEL: {len(unn)} figurer mangler i nynorskutgaven: {unn[:5]}", file=sys.stderr)


if __name__ == "__main__":
    main()
