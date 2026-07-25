#!/usr/bin/env python3
"""Last opp EN bok sine figurer til Supabase Storage (bucket «media»).

Målrettet variant av scripts/upload-media-storage.ts: laster bare opp
public/images/textbook/<emne>/ i stedet for å skanne hele public/ (2,4 GB).
Verifiserer hver fil med HTTP 200 etterpå.

Bruk: python3 last-opp-figurer.py <arbeidstre> <emne>
"""
import os
import sys
import urllib.request

TRE, EMNE = sys.argv[1], sys.argv[2]
HOVED = "/Users/danielandreasaubert/eksamenssett/Skolesaga"

env = {}
for linje in open(f"{HOVED}/.env.local", encoding="utf-8"):
    if "=" in linje and not linje.startswith("#"):
        k, v = linje.split("=", 1)
        env[k.strip()] = v.strip().strip('"').strip("'")

URL = env["NEXT_PUBLIC_SUPABASE_URL"]
KEY = env["SUPABASE_SERVICE_ROLE_KEY"]
KAT = f"{TRE}/public/images/textbook/{EMNE}"
if not os.path.isdir(KAT):
    sys.exit(f"finner ikke {KAT}")

filer = sorted(f for f in os.listdir(KAT) if f.endswith(".svg"))
print(f"{EMNE}: {len(filer)} SVG-er i {KAT}\n")

lastet = feilet = 0
for f in filer:
    sti = f"images/textbook/{EMNE}/{f}"
    data = open(os.path.join(KAT, f), "rb").read()
    req = urllib.request.Request(
        f"{URL}/storage/v1/object/media/{sti}",
        data=data, method="POST",
        headers={"Authorization": f"Bearer {KEY}", "apikey": KEY,
                 "Content-Type": "image/svg+xml", "x-upsert": "true"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            if r.status in (200, 201):
                lastet += 1
            else:
                feilet += 1
                print(f"  ? {f}: HTTP {r.status}")
    except Exception as e:
        feilet += 1
        print(f"  ✗ {f}: {e}")

print(f"\nlastet opp: {lastet} | feilet: {feilet}\n")

# verifiser
ok = mangler = 0
for f in filer:
    u = f"{URL}/storage/v1/object/public/media/images/textbook/{EMNE}/{f}"
    try:
        with urllib.request.urlopen(u, timeout=30) as r:
            if r.status == 200 and r.headers.get("content-type", "").startswith("image/svg"):
                ok += 1
            else:
                mangler += 1
                print(f"  ✗ verifisering {f}: {r.status} {r.headers.get('content-type')}")
    except Exception as e:
        mangler += 1
        print(f"  ✗ verifisering {f}: {e}")
print(f"VERIFISERT 200 + image/svg+xml: {ok}/{len(filer)}" + (f" — {mangler} MANGLER" if mangler else " ✓"))
