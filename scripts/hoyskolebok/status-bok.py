#!/usr/bin/env python3
"""status-bok.py <emne> — måler byggefremdrift mot skjelettet ved å lese DISK.

Gjenopptaksverktøy: etter et avbrudd (kvotestopp, ECONNRESET, død agent) viser
dette nøyaktig hvilke kapitler som finnes, hvilke som mangler, og om innholdet
er gyldig JSON. Ingen gjetting — alt leses fra filene på disk.

Kjør:  python3 scripts/hoyskolebok/status-bok.py fys1001
       python3 scripts/hoyskolebok/status-bok.py fys1001 --mangler   (bare id-ene som gjenstår)
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def skjelett_ids(emne):
    """Kapittel-id-ene skjelettet lover, i rekkefølge, gruppert per del."""
    p = os.path.join(ROOT, "docs", "hoyskole-boker", emne, "SKJELETT.md")
    if not os.path.exists(p):
        sys.exit(f"fant ikke {p}")
    txt = open(p, encoding="utf-8").read()
    ids, deler, del_na = [], {}, "?"
    for linje in txt.split("\n"):
        m = re.match(r"###\s*Del\s*(\d+)", linje)
        if m:
            del_na = f"Del {m.group(1)}"
        m = re.search(r"\*\*id:\*\*\s*`(" + re.escape(emne) + r"-[a-z0-9-]+)`", linje)
        if m and m.group(1) not in ids:
            ids.append(m.group(1))
            deler.setdefault(del_na, []).append(m.group(1))
    return ids, deler


def maal(cid):
    return os.path.join(ROOT, "src", "lib", "data", "chapters", cid + ".json")


def les(cid):
    """(finnes, gyldig, antall definisjoner, antall oppgaver, antall blokker)"""
    p = maal(cid)
    if not os.path.exists(p):
        return (False, False, 0, 0, 0)
    try:
        d = json.load(open(p, encoding="utf-8"))
    except Exception:
        return (True, False, 0, 0, 0)
    ndef = nex = 0

    def gå(bs):
        nonlocal ndef, nex
        for b in bs:
            t = b.get("type")
            if t == "definition" and b.get("title"):
                ndef += 1
            elif t == "exercise":
                nex += 1
            elif t == "collapsible" and isinstance(b.get("content"), list):
                gå(b["content"])

    gå(d.get("content", []))
    return (True, True, ndef, nex, len(d.get("content", [])))


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    emne = sys.argv[1]
    bare_mangler = "--mangler" in sys.argv
    ids, deler = skjelett_ids(emne)
    mangler, ugyldige, sum_def, sum_ex = [], [], 0, 0

    if not bare_mangler:
        print(f"\n{emne.upper()} — {len(ids)} kapitler i skjelettet\n" + "=" * 64)
    for delnavn, delids in deler.items():
        rader = []
        for cid in delids:
            finnes, gyldig, nd, ne, nb = les(cid)
            sum_def += nd
            sum_ex += ne
            if not finnes:
                mangler.append(cid)
                rader.append(f"    ☐ {cid}")
            elif not gyldig:
                ugyldige.append(cid)
                rader.append(f"    ✗ {cid}  UGYLDIG JSON")
            else:
                rader.append(f"    ✓ {cid}  {nb:3} blokker · {nd:3} def · {ne:2} oppg")
        if not bare_mangler:
            ferdig = sum(1 for c in delids if os.path.exists(maal(c)))
            print(f"\n  {delnavn}  ({ferdig}/{len(delids)})")
            print("\n".join(rader))

    if bare_mangler:
        print(" ".join(mangler))
        return
    ferdig = len(ids) - len(mangler)
    print("\n" + "=" * 64)
    print(f"  FERDIG: {ferdig}/{len(ids)} kapitler · {sum_def} flashcard-definisjoner · {sum_ex} oppgaver")
    if ugyldige:
        print(f"  ⚠ UGYLDIG JSON ({len(ugyldige)}): {' '.join(ugyldige)}")
    if mangler:
        print(f"  GJENSTÅR ({len(mangler)}): {' '.join(mangler[:12])}{' …' if len(mangler) > 12 else ''}")
    else:
        print("  Alle kapitler på disk → neste steg: wiring (wire-bok.py), så sjekk-bok.py")
    print()


if __name__ == "__main__":
    main()
