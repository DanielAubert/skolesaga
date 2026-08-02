#!/usr/bin/env python3
"""
Genererer statustavla i docs/hoyskole-boker/README.md fra DISKEN.

Bruk: python3 scripts/hoyskolebok/skriv-statustavle.py [--torrkjor]

## Hvorfor denne finnes

Tavla var håndskrevet og hadde gått i utakt: den oppga 17 live bøker da 37 var
wiret. Nøyaktig samme feilmodus som arkivets INNHOLD.md, som kom i utakt med
disken tre ganger på én dag før den ble generert.

Status utledes av hva som faktisk finnes, i denne rekkefølgen:

  ⛔ nedlagt   `<emne>/IKKE-BYGG.md` finnes  → emnet undervises ikke lenger
  bok          `export const COURSE_<EMNE>` i textbook-courses-hoyskole.ts
  kontrakt     BYGGEKONTRAKT.md finnes      → byggeklar
  skjelett     SKJELETT.md finnes
  analyse      EKSAMENSANALYSE.md finnes
  (tom)        mappa finnes, men ingenting i den

⚠ Rekkefølgen betyr at en bok som ER wiret, men hvis emne er nedlagt, havner i
«nedlagt»-kolonnen. Det er med vilje: tma4110 er en live bok for et emne med
siste undervisning H2025, og den motsetningen skal være synlig i tavla, ikke
skjult av at boka finnes.

Institusjon og arketype leses fra BOKCONFIG.json der den finnes, ellers fra
skjelettets identitetsseksjon.
"""
import json, os, re, sys, glob

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
D = os.path.join(REPO, "docs/hoyskole-boker")
README = os.path.join(D, "README.md")
TS = os.path.join(REPO, "src/lib/data/textbook-courses-hoyskole.ts")

START = "| Emne | Arketype | Status |"


def les_wirede():
    ts = open(TS, encoding="utf-8").read()
    return {m.lower() for m in re.findall(r"^export const COURSE_(\w+)", ts, re.M)}


# Institusjonskoden ligger i BOKCONFIG som «uio»/«ntnu». Tavla skal vise
# institusjonens egen skrivemåte, ikke feltverdien.
INST = {"uio": "UiO", "ntnu": "NTNU", "bi": "BI", "nih": "NIH", "uib": "UiB",
        "uit": "UiT", "nmbu": "NMBU", "oslomet": "OsloMet", "usn": "USN",
        "hvl": "HVL", "nord": "Nord", "inn": "INN", "hiof": "HiØ",
        "himolde": "HiMolde", "hvo": "HVO", "ldh": "LDH", "vid": "VID"}

# Arketype og lesbart emnenavn er HÅNDKURERT og finnes bare i den gamle,
# håndskrevne tavla — skjelettene skriver arketypen i elleve ulike former, og
# bare i en tredjedel av dem. Den kunnskapen kastes ikke bare fordi status
# automatiseres: KURERT leses inn og brukes som fallback.
KURERT = os.path.join(os.path.dirname(__file__), "statustavle-kurert.json")


def _kurert():
    if os.path.exists(KURERT):
        return json.load(open(KURERT, encoding="utf-8"))
    return {}


def meta(emne, kurert):
    """(tittel, institusjon, arketype) — best tilgjengelige kilde."""
    tittel = institusjon = arketype = ""
    bc = os.path.join(D, emne, "BOKCONFIG.json")
    if os.path.exists(bc):
        try:
            c = json.load(open(bc, encoding="utf-8"))
            tittel = (c.get("title") or "").strip()
            institusjon = INST.get((c.get("institusjon") or "").lower(),
                                   c.get("institusjon") or "")
        except Exception:
            pass
    k = kurert.get(emne.replace("-", "").lower())
    if k:
        if not tittel or tittel.startswith("Bokskjelett"):
            tittel = k[0]
        arketype = k[1]
    if not tittel:
        sk = os.path.join(D, emne, "SKJELETT.md")
        if os.path.exists(sk):
            m = re.search(r"^#\s+(.+)$", open(sk, encoding="utf-8").read(4000), re.M)
            if m:
                tittel = m.group(1).strip()
    # Skjelettets H1 er et byggedokument-navn, ikke et emnenavn.
    tittel = re.sub(r"^Bokskjelett:\s*", "", tittel)
    tittel = re.sub(r"\s*[—–-]\s*eksamensrettet lærebok\s*$", "", tittel, flags=re.I)
    return tittel, institusjon, arketype


def status(emne, wirede):
    p = lambda f: os.path.exists(os.path.join(D, emne, f))
    n = emne.replace("-", "_").lower()
    if p("IKKE-BYGG.md"):
        return "⛔ nedlagt" + (" (live bok)" if n in wirede else "")
    if p("SISTE-UNDERVISNINGSAR.md"):
        return "⚠ siste år" + (" — **bok**" if n in wirede else "")
    if n in wirede:
        return "**bok** (live)"
    if p("AVKLAR-FORST.md"):
        return "⚠ avklar først"
    if p("BYGGEKONTRAKT.md"):
        return "skjelett + **kontrakt**"
    if p("SKJELETT.md"):
        return "skjelett"
    if p("EKSAMENSANALYSE.md"):
        return "analyse"
    return "—"


def main():
    torr = "--torrkjor" in sys.argv
    wirede = les_wirede()
    kurert = _kurert()
    emner = sorted(d for d in os.listdir(D) if os.path.isdir(os.path.join(D, d)))

    rader, tell = [], {}
    for e in emner:
        tittel, inst, ark = meta(e, kurert)
        s = status(e, wirede)
        tell[s] = tell.get(s, 0) + 1
        navn = tittel or e.upper()
        if inst and f"({inst})" not in navn:
            navn = f"{navn} ({inst})"
        rader.append(f"| {navn} | {ark or '—'} | {s} |")

    # Sorter slik at det som er lengst framme, kommer først.
    vekt = {"**bok** (live)": 0, "⚠ siste år — **bok**": 1, "⚠ siste år": 2,
            "skjelett + **kontrakt**": 3, "⚠ avklar først": 4, "skjelett": 5,
            "analyse": 6, "—": 7, "⛔ nedlagt (live bok)": 8, "⛔ nedlagt": 9}
    rader.sort(key=lambda r: (vekt.get(r.rsplit("| ", 1)[-1].rstrip(" |"), 99), r))

    sammendrag = " · ".join(
        f"**{v}** {k}" for k, v in sorted(tell.items(), key=lambda x: vekt.get(x[0], 99)))
    ny = [START, "|---|---|---|"] + rader

    linjer = open(README, encoding="utf-8").read().split("\n")
    i = next((k for k, l in enumerate(linjer) if l.startswith(START)), None)
    assert i is not None, "fant ikke statustavla i README"
    j = i
    while j < len(linjer) and linjer[j].startswith("|"):
        j += 1

    ut = linjer[:i] + ny + linjer[j:]
    # oppdater sammendragslinja rett over tabellen
    for k in range(max(0, i - 8), i):
        if ut[k].startswith("Generert fra disken"):
            ut[k] = f"Generert fra disken: {sammendrag}."
            break
    else:
        ut = ut[:i] + [f"Generert fra disken: {sammendrag}.", ""] + ut[i:]

    print(f"{len(emner)} emner")
    for k, v in sorted(tell.items(), key=lambda x: vekt.get(x[0], 99)):
        print(f"   {k:26} {v}")
    if torr:
        print("\nTØRRKJØRING — README er ikke endret")
        return
    open(README, "w", encoding="utf-8").write("\n".join(ut))
    print(f"\nREADME oppdatert ({len(rader)} rader)")


if __name__ == "__main__":
    main()
