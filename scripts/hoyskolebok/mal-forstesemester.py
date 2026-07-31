#!/usr/bin/env python3
"""Måler hvor mange av UiOs 1.-semesteremner vi har kildegrunnlag for å bygge bok til.

Leser studieløpene fra docs/hoyskole-boker/uio-forstesemester.json (hentet fra
UiOs programsider) og måler hvert emne mot HELE eksamensarkivet — både den nye
høstingen i _nedlastet-<dato>/ (som har INDEKS.csv/TERMINER.csv) og de eldre
institusjonsmappene (som ikke har indeks og må måles på filnavn).

Skriver resultatet tilbake i JSON-fila under nøkkelen "maaling" og skriver et
sammendrag til stdout.

    python3 scripts/hoyskolebok/mal-forstesemester.py            # mål og skriv
    python3 scripts/hoyskolebok/mal-forstesemester.py --torrkjor # bare vis

Tre feller dette scriptet er bygget for å unngå (alle tre traff en tidligere
måling):

1. TOMME MAPPER. UiO/BIOS1110/ finnes med undermappene eksamen/, fasit/ osv.,
   men uten en eneste fil. En måling som spør «finnes mappa?» teller den som
   kilde. Vi teller bare FILER.
2. SYMLENKE-DUPLIKATER. _sortering/ er 14 000+ symlenker inn i de andre
   mappene. Talt som selvstendig kilde dobler den alt. Vi hopper over den og
   alle symlenker.
3. TERMIN, IKKE FIL. Bokmål/nynorsk/engelsk av samme eksamen er tre filer av
   én termin. Grunnlaget måles i terminer.
"""
from __future__ import annotations

import argparse
import collections
import csv
import datetime
import json
import os
import re
import sys

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
JSON_STI = os.path.join(REPO, "docs/hoyskole-boker/uio-forstesemester.json")
ARKIV = os.path.expanduser("~/Desktop/Eksamner")
KAPITLER = os.path.join(REPO, "src/lib/data/chapters")
BOKDOCS = os.path.join(REPO, "docs/hoyskole-boker")

DOKUMENT = (".pdf", ".doc", ".docx", ".html", ".htm", ".txt", ".ps", ".rtf", ".odt")
# _sortering er symlenker inn i de andre mappene — tas med dobbelttelles alt.
HOPP_OVER = {"_sortering", "_kvalitetskontroll-skript", "_KALIBRERING-besvarelser"}

# Grensene for hva vi kaller byggegrunnlag, målt i eksamensterminer.
SOLID = 5
TYNN = 2


def emner_fra_studielop(data: dict) -> tuple[dict, dict, dict]:
    """Unike emnekoder i 1. semester, hvor mange løp hver dekker, og løp→emner.

    Valgfrie slots uten emnekode ("fritt emne") og 0-poengsemner holdes utenfor:
    de kan ikke dekkes av én bok.
    """
    lop_emner: dict[int, list[str]] = {}
    antall_lop: collections.Counter = collections.Counter()
    navn: dict[str, str] = {}
    for i, p in enumerate(data["programmer"]):
        koder = []
        for e in p.get("forste_semester", []):
            if not e.get("kode") or e.get("studiepoeng") == 0:
                continue
            k = e["kode"].upper()
            koder.append(k)
            antall_lop[k] += 1
            navn.setdefault(k, e.get("navn", ""))
        lop_emner[i] = koder
    return antall_lop, navn, lop_emner


def finn_nedlastet() -> str | None:
    """Nyeste _nedlastet-<dato>-mappe, den eneste med ferdig indeks."""
    kandidater = sorted(
        d for d in os.listdir(ARKIV)
        if d.startswith("_nedlastet-") and os.path.isdir(os.path.join(ARKIV, d))
    )
    return os.path.join(ARKIV, kandidater[-1]) if kandidater else None


def les_indeks(mappe: str, koder: set[str]) -> tuple[collections.Counter, collections.Counter]:
    """Filer og terminer per emnekode fra den indekserte høstingen."""
    filer: collections.Counter = collections.Counter()
    terminer: collections.Counter = collections.Counter()
    indeks = os.path.join(mappe, "INDEKS.csv")
    termcsv = os.path.join(mappe, "TERMINER.csv")
    if os.path.exists(indeks):
        with open(indeks, encoding="utf-8") as f:
            for r in csv.DictReader(f):
                k = (r.get("emnekode") or "").upper().strip()
                if k in koder:
                    filer[k] += 1
    if os.path.exists(termcsv):
        with open(termcsv, encoding="utf-8") as f:
            for r in csv.DictReader(f):
                k = (r.get("emnekode") or "").upper().strip()
                if k in koder:
                    terminer[k] += 1
    return filer, terminer


def kode_i_sti(sti: str, kode: str) -> bool:
    """Treff på emnekode med grensekontroll, så MAT1100 ikke matcher MAT11005."""
    for m in re.finditer(re.escape(kode), sti):
        etter = sti[m.end()] if m.end() < len(sti) else " "
        foran = sti[m.start() - 1] if m.start() > 0 else " "
        if not etter.isdigit() and not etter.isalpha() and not foran.isdigit():
            return True
    return False


def skann_uindeksert(koder: set[str], hopp: str | None) -> tuple[collections.Counter, dict]:
    """Filer og anslåtte terminer fra arkivmappene uten indeks.

    Terminanslaget leses av filnavnet (årstall + evt. semestermarkør). Det er
    grovere enn TERMINER.csv, men brukes bare der indeksen ikke rekker.
    """
    filer: collections.Counter = collections.Counter()
    terminer: dict[str, set] = collections.defaultdict(set)
    hopp_navn = set(HOPP_OVER)
    if hopp:
        hopp_navn.add(os.path.basename(hopp))
    # Felle 4: DELTE EKSAMENER. Samme eksamen kan gjelde to emnekoder og bære
    # begge i filnavnet — `psy1250_psyc1220-2019h.pdf` er eksamen for både
    # PSY1250 og PSYC1220. Krediteres bare den ene (f.eks. ved å stoppe på
    # første treff), faller det andre emnet fra 13 filer til 2 og bytter nivå.
    # Verre: itererer man over et set, avgjør Pythons tilfeldige hash-orden
    # HVEM som taper, og tallene endrer seg mellom kjøringer av samme arkiv.
    # Vi krediterer derfor alle emnekoder som står i stien.
    sortert = sorted(koder)
    for topp in sorted(os.listdir(ARKIV)):
        if topp in hopp_navn or not os.path.isdir(os.path.join(ARKIV, topp)):
            continue
        for dp, _, fns in os.walk(os.path.join(ARKIV, topp), followlinks=False):
            for fn in fns:
                if fn.startswith(".") or not fn.lower().endswith(DOKUMENT):
                    continue
                full = os.path.join(dp, fn)
                if os.path.islink(full):  # felle 2: symlenke-duplikat
                    continue
                stor = full.upper()
                for kode in sortert:
                    if kode not in stor or not kode_i_sti(stor, kode):
                        continue
                    filer[kode] += 1
                    ar = re.search(r"(?:^|[^0-9])((?:19|20)\d\d)", fn)
                    sesong = re.search(r"(VÅR|HØST|VAAR|HOST|AUTUMN|SPRING)", fn.upper())
                    if ar:
                        terminer[kode].add((ar.group(1), sesong.group(1) if sesong else "?"))
    return filer, terminer


def bokstatus(kode: str) -> str:
    """"bok" = utgitt med kapittelinnhold, "skjelett" = byggeklar, ellers "".

    Skjelettmappa alene er ikke bok — flere emner har EKSAMENSANALYSE.md og
    SKJELETT.md uten at én linje kapittelinnhold er skrevet.
    """
    lav = kode.lower()
    if os.path.isdir(KAPITLER):
        for f in os.listdir(KAPITLER):
            if f.startswith(lav + "-") and f.endswith(".json"):
                return "bok"
    return "skjelett" if os.path.isdir(os.path.join(BOKDOCS, lav)) else ""


def niva(status: str, terminer: int, filer: int) -> str:
    if status == "bok":
        return "bok"
    if terminer >= SOLID:
        return "solid"
    if terminer >= TYNN:
        return "tynn"
    return "sværttynn" if filer else "ingen"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--torrkjor", action="store_true", help="ikke skriv til JSON")
    args = ap.parse_args()

    if not os.path.isdir(ARKIV):
        print(f"FEIL: finner ikke arkivet på {ARKIV}", file=sys.stderr)
        return 1

    with open(JSON_STI, encoding="utf-8") as f:
        data = json.load(f)
    antall_lop, navn, lop_emner = emner_fra_studielop(data)
    koder = set(antall_lop)

    nedlastet = finn_nedlastet()
    idx_filer, idx_term = les_indeks(nedlastet, koder) if nedlastet else (collections.Counter(), collections.Counter())
    gml_filer, gml_term = skann_uindeksert(koder, nedlastet)

    maaling = {}
    for kode in sorted(koder):
        # Indeksen og filnavnskanningen ser på hver sin del av arkivet; vi tar
        # den høyeste framfor summen, siden de overlapper der begge har lest.
        terminer = max(idx_term.get(kode, 0), len(gml_term.get(kode, ())))
        filer = max(idx_filer.get(kode, 0), gml_filer.get(kode, 0))
        status = bokstatus(kode)
        maaling[kode] = {
            "navn": navn[kode],
            "lop": antall_lop[kode],
            "status": status,
            "terminer": terminer,
            "filer": filer,
            "niva": niva(status, terminer, filer),
        }

    n = len(maaling)
    tell = collections.Counter(v["niva"] for v in maaling.values())
    grunnlag = tell["bok"] + tell["solid"]
    med_tynt = grunnlag + tell["tynn"]

    def lopdekning(dekket: set[str]) -> tuple[int, int, int]:
        tot = alle = noen = 0
        for koder_i_lop in lop_emner.values():
            if not koder_i_lop:
                continue
            tot += 1
            traff = sum(1 for k in koder_i_lop if k in dekket)
            alle += traff == len(koder_i_lop)
            noen += traff > 0
        return tot, alle, noen

    print(f"{n} unike 1.-semesteremner i {len(data['programmer'])} studieløp\n")
    for nv, merkelapp in [
        ("bok", "Ferdig bok"),
        ("solid", f"Solid grunnlag (≥{SOLID} terminer)"),
        ("tynn", f"Tynt grunnlag ({TYNN}–{SOLID - 1} terminer)"),
        ("sværttynn", "Svært tynt (0–1 termin)"),
        ("ingen", "Ingen kilder"),
    ]:
        print(f"  {merkelapp:34} {tell[nv]:3}  {tell[nv] / n * 100:5.1f} %")
    print(f"\n  BYGGEGRUNNLAG (bok + solid)        {grunnlag:3}  {grunnlag / n * 100:5.1f} %")
    print(f"  + tynt grunnlag                    {med_tynt:3}  {med_tynt / n * 100:5.1f} %")

    print()
    for merkelapp, dekket in [
        ("bok i dag", {k for k, v in maaling.items() if v["niva"] == "bok"}),
        ("bok + solid", {k for k, v in maaling.items() if v["niva"] in ("bok", "solid")}),
        ("+ tynt", {k for k, v in maaling.items() if v["niva"] in ("bok", "solid", "tynn")}),
    ]:
        tot, alle, noen = lopdekning(dekket)
        print(f"  {merkelapp:12} av {tot} løp: alle emner {alle} ({alle / tot * 100:.0f} %), "
              f"minst ett {noen} ({noen / tot * 100:.0f} %)")

    byggbare = sorted(
        (k for k, v in maaling.items() if v["niva"] == "solid"),
        key=lambda k: (-maaling[k]["lop"], -maaling[k]["terminer"]),
    )
    print(f"\nSolid grunnlag uten bok ({len(byggbare)}), sortert på studieløp:")
    for k in byggbare:
        v = maaling[k]
        merke = " [skjelett klart]" if v["status"] == "skjelett" else ""
        print(f"  {k:14} løp={v['lop']:2} terminer={v['terminer']:3}{merke}  {v['navn'][:44]}")

    if not args.torrkjor:
        data.pop("kan_skrives", None)
        data.pop("ingen_kilder", None)
        data["maaling"] = {
            "_om": "Kildegrunnlag per emne, målt av scripts/hoyskolebok/mal-forstesemester.py. "
                   "niva: bok = utgitt, solid = ≥5 eksamensterminer, tynn = 2–4, "
                   "sværttynn = enkeltfiler uten datering, ingen = ingen filer.",
            "_arkiv": ARKIV,
            "_dato": datetime.date.today().isoformat(),
            "emner": maaling,
        }
        with open(JSON_STI, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print(f"\nSkrevet til {os.path.relpath(JSON_STI, REPO)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
