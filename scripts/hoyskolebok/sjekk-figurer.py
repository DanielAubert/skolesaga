#!/usr/bin/env python3
"""sjekk-figurer.py [emne ...] — finner figurer som gir 404 i PRODUKSJON.

Bildene serveres fra Supabase Storage (bucket «media»), ikke fra `public/`:
`mediaUrl()` skriver om `/images/...` til Storage-URL-en. Derfor er «fila ligger
i repoet» IKKE et bevis på at figuren vises — og motsatt: mange live bøker har
figurene KUN i Storage (de er ryddet ut av repoet for å holde det lite).

Den eneste gyldige testen er et HTTP-kall mot Storage. Denne porten leser alle
`/images/textbook/<emne>/<fil>`-referanser i kapittelfilene og verifiserer at
hver av dem svarer 200. To figurer i mat111-uib lå i et arbeidstre og var aldri
lastet opp — de ga 404 for studentene i en live bok til dette skriptet fant dem.

Kjør:  python3 scripts/hoyskolebok/sjekk-figurer.py            # alle bøker
       python3 scripts/hoyskolebok/sjekk-figurer.py econ2220   # én bok
Krever `.env.local` med NEXT_PUBLIC_SUPABASE_URL.
"""
import concurrent.futures
import glob
import os
import re
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MØNSTER = r"/images/textbook/([a-z0-9._-]+)/([a-z0-9._-]+\.(?:svg|png|jpg|jpeg|webp))"


def storage_url():
    for linje in open(os.path.join(ROOT, ".env.local"), encoding="utf-8"):
        if linje.startswith("NEXT_PUBLIC_SUPABASE_URL"):
            return linje.split("=", 1)[1].strip().strip('"').strip("'")
    sys.exit("fant ikke NEXT_PUBLIC_SUPABASE_URL i .env.local")


def referanser(emner):
    ut = set()
    for p in glob.glob(os.path.join(ROOT, "src/lib/data/chapters", "*.json")):
        if os.path.basename(p).startswith("_"):
            continue
        for m in re.finditer(MØNSTER, open(p, encoding="utf-8").read()):
            if not emner or m.group(1) in emner:
                ut.add((m.group(1), m.group(2)))
    return sorted(ut)


def main():
    emner = set(sys.argv[1:])
    base = storage_url()
    ref = referanser(emner)
    if not ref:
        sys.exit("fant ingen figurreferanser" + (f" for {', '.join(emner)}" if emner else ""))

    def sjekk(par):
        mappe, fil = par
        u = f"{base}/storage/v1/object/public/media/images/textbook/{mappe}/{fil}"
        try:
            with urllib.request.urlopen(u, timeout=30) as r:
                if r.status == 200:
                    return None
                return f"{mappe}/{fil}: HTTP {r.status}"
        except Exception as e:
            return f"{mappe}/{fil}: {e}"

    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
        feil = [x for x in pool.map(sjekk, ref) if x]

    på_disk = sum(1 for m, f in ref if os.path.exists(os.path.join(ROOT, "public/images/textbook", m, f)))
    print(f"{len(ref)} figurreferanser kontrollert mot Storage "
          f"({på_disk} finnes også i repoet, {len(ref)-på_disk} er Storage-bare)")
    if feil:
        print(f"404 I PRODUKSJON ({len(feil)}):")
        for f in feil[:40]:
            print(" -", f)
        if len(feil) > 40:
            print(f"   … og {len(feil)-40} flere")
        print("\nLast opp med: python3 scripts/hoyskolebok/last-opp-figurer.py <arbeidstre> <emne>")
        sys.exit(1)
    print("FIGURPORT OK — alle refererte figurer svarer 200 fra Storage")


if __name__ == "__main__":
    main()
