#!/usr/bin/env python3
"""Kvalitetsport for SKJELETT.md (v3-format). Bruk: sjekk-skjelett.py <emne>"""
import re, sys, os

emne = sys.argv[1]
BOKDIR = f"/Users/danielandreasaubert/eksamenssett/Skolesaga/docs/hoyskole-boker/{emne}"

# ─── HARD SPERRE: er emnet nedlagt, skal det ikke bygges ────────────────────
# Produkteierkrav 31. juli 2026: bygg kun bøker for emner som tilbys kommende
# studieår. Kartleggingen fant 35 skjeletter for emner som ikke lenger
# undervises — noen døde siden 2017. Uten denne porten ville en byggeagent
# brukt en full dags arbeid på et pensum ingen tar eksamen i.
_stopp = os.path.join(BOKDIR, "IKKE-BYGG.md")
if os.path.exists(_stopp):
    print(f"⛔ {emne}: EMNET ER NEDLAGT — porten nekter å kjøre.", file=sys.stderr)
    print(f"   Se {_stopp}", file=sys.stderr)
    with open(_stopp, encoding="utf-8") as fh:
        for line in fh.read().splitlines()[:12]:
            if line.strip():
                print(f"   │ {line}", file=sys.stderr)
    print("   Skal emnet likevel bygges, er det en produkteierbeslutning:",
          file=sys.stderr)
    print("   bygg mot etterfølgerens emnekode og slett IKKE-BYGG.md bevisst.",
          file=sys.stderr)
    sys.exit(2)

# ─── ADVARSLER som ikke stopper porten ─────────────────────────────────────
for _fil, _tekst in (
    ("SISTE-UNDERVISNINGSAR.md", "SISTE UNDERVISNINGSÅR — boka rekker ett kull"),
    ("AVKLAR-FORST.md", "STATUS UAVKLART — avklar før du bruker byggeressurser"),
):
    if os.path.exists(os.path.join(BOKDIR, _fil)):
        print(f"⚠  {emne}: {_tekst}. Se {_fil}", file=sys.stderr)

p = os.path.join(BOKDIR, "SKJELETT.md")
s = open(p, encoding="utf-8").read()
issues = []

# 1. Standard headingformat + del-basert number
heads = re.findall(r"^#### Kapittel ([^\n:]+):", s, re.M)
bad_heads = [h for h in heads if not re.match(r"\d+\.\d+$", h.strip())]
if bad_heads: issues.append(f"Ikke-delbaserte kapittelnumre i headinger: {bad_heads[:5]}")
ids = re.findall(rf"\*\*id:\*\* `({emne}-\d+-\d+)`", s)
if len(ids) < 15: issues.append(f"Kun {len(ids)} kapittel-id-er funnet (forventet 15+)")
if len(ids) != len(set(ids)): issues.append("Duplikate kapittel-id-er")
nums = re.findall(r"\*\*number:\*\* ([^\s·]+)", s)
bad_nums = [n for n in nums if not re.match(r"\d+\.\d+$", n)]
if bad_nums: issues.append(f"Ikke-delbaserte number-felt: {bad_nums[:5]}")

# 2. Kvotesammendrag + minstekrav
m = re.search(r"(kvotesammendrag|summeringskontroll|[Qq]uiz totalt|[Qq]uiz:? *\d{3})", s)
if not m: issues.append("Mangler kvotesammendrag/summeringskontroll/quiz-totalt")
qm = re.findall(r"\*\*(\d{3,4})\*\*", s) + re.findall(r"totalt:\*\*\s*(\d{3,4})", s)
if not any(int(x) >= 500 for x in qm): issues.append("Fant ingen kvotesum >= 500 i fet skrift (sjekk manuelt)")

# 3. Prøve-kvoter per del
pk = re.findall(r"\*\*Prøve-kvote Del (\d+)", s)
# Godta også tabell-/temaprøve-format («4 per temadel», «Prøve N.X»)
alt_prove = len(re.findall(r"Prøve \d+\.[A-Z]", s)) + len(re.findall(r"per temadel", s, re.I))
if len(pk) < 3 and alt_prove < 3: issues.append(f"Kun {len(pk)} prøve-kvote-linjer og {alt_prove} alt.prøve-treff (forventet prøver per temadel)")

# 4. Seksjonstitler
if not re.search(r"seksjonstit|sectionNames", s, re.I): issues.append("Mangler seksjonstitler/sectionNames-angivelse")

# 5. Obligatoriske skjelett-felt per kapittel (stikkprøve: telling)
for felt in ["Eksamensbelegg", "Typiske feil", "estimatedMinutes", "prerequisites"]:
    n = len(re.findall(felt, s))
    if n < len(ids) * 0.8: issues.append(f"Felt «{felt}» bare {n} ganger for {len(ids)} kapitler")

# 6. Kvote per kapittel
kv = (len(re.findall(r"[Kk]vote:?\**:?\s*\**\s*\d+\s*quiz", s))
      + len(re.findall(r"[Kk]vote:?\**\s*quiz\s*\d+", s))
      + len(re.findall(r"Quiz:?\s*\**\d+", s)))
if kv < len(ids) * 0.7: issues.append(f"Kvotelinjer ({kv}) dekker ikke kapitlene ({len(ids)})")

print(f"{emne}: {len(ids)} kapitler, {len(pk)} prøve-kvote-linjer, {len(s.splitlines())} linjer")
if issues:
    print("AVVIK:")
    for i in issues: print(" -", i)
    sys.exit(1)
print("KVALITETSPORT OK")
