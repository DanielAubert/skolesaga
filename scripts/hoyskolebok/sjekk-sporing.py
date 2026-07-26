#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""sjekk-sporing.py <emne> — verifiser sjanger A-fasiter.

Utskriftsporten (sjekk-utskrift.py) kan IKKE sjekke sporingsoppgaver: koden står
i `exercise.task`, mens svaret står i `exercise.solution` som en løsrevet
«**Utskrift:**»-blokk uten kodeblokk foran. Denne porten lukker hullet: den
kjører koden fra oppgaveteksten og sammenligner med fasitens utskriftsblokk.

Porten er bevisst konservativ og hopper over alt den ikke kan gjenskape trygt:

- oppgaver der `solution` selv har en ```python-blokk (dekket av utskriftsporten),
- oppgaver med FLERE kodeblokker i teksten (to selvstendige programmer som
  sammenlignes — de kan ikke kjøres som ett),
- kode som trenger noe utenfra: `import`, `sys.argv`, fil, modul, stdin, eller
  et navn som er definert tidligere i kapitlet (`NameError`),
- en fasit som bare mangler det avsluttende linjeskiftet (en ```-blokk kan ikke
  uttrykke «uten linjeskift til slutt», så `print(..., end=" ")` gir det avviket).

Det som blir igjen, er ekte avvik. Kjørt på in1000 25. juli 2026 fant den tre
sporingsfasiter som var skrevet fra teorien i stedet for kjørt.
"""
import glob, json, os, re, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CH = os.path.join(ROOT, "src/lib/data/chapters")
TMP = tempfile.mkdtemp()

FENCE = re.compile(r"```([A-Za-z0-9_-]*)\n([\s\S]*?)```")
UTBLOKK = re.compile(r"\*\*Utskrift:\*\*\s*\n```\n([\s\S]*?)```")

emne = sys.argv[1]
avvik, sjekket, hoppet = [], 0, 0

for p in sorted(glob.glob(os.path.join(CH, emne + "-*.json"))):
    navn = os.path.basename(p)
    d = json.load(open(p, encoding="utf-8"))
    for b in d.get("content", []):
        if b.get("type") != "exercise":
            continue
        e = b["exercise"]
        task, sol = e.get("task", ""), e.get("solution", "")
        kodeblokker = [m for m in FENCE.finditer(task) if m.group(1) == "python"]
        if not kodeblokker:
            continue
        if any(m.group(1) == "python" for m in FENCE.finditer(sol)):
            hoppet += 1          # fasiten har egen kjørt kode — dekket av utskriftsporten
            continue
        if len(kodeblokker) > 1:
            hoppet += 1          # to selvstendige programmer — kan ikke kjøres som ett
            continue
        if re.search(r"^\s*import\b|sys\.argv", kodeblokker[0].group(2), re.M):
            hoppet += 1          # trenger kommandolinje eller bibliotek
            continue
        um = UTBLOKK.search(sol)
        if not um:
            hoppet += 1          # ingen utskriftspåstand å kontrollere
            continue
        kode = "\n".join(m.group(2) for m in kodeblokker)
        f = os.path.join(TMP, "_t.py")
        open(f, "w", encoding="utf-8").write(kode)
        try:
            r = subprocess.run([sys.executable, "_t.py"], cwd=TMP,
                               stdin=subprocess.DEVNULL,
                               capture_output=True, text=True, timeout=15)
        except subprocess.TimeoutExpired:
            hoppet += 1          # venter på inndata eller løkker evig
            continue
        # Ytre ressurser (fil, modul, stdin) kan ikke gjenskapes her — hopp over.
        siste = r.stderr.strip().split("\n")[-1] if r.stderr.strip() else ""
        if siste.startswith(("ModuleNotFoundError", "FileNotFoundError", "EOFError",
                             "NameError")):
            hoppet += 1
            continue
        sjekket += 1
        forventet = um.group(1)
        # En ```-blokk kan ikke uttrykke «uten avsluttende linjeskift», så en
        # utskrift laget med print(..., end=" ") får ett ekstra \n i fasiten.
        if forventet == r.stdout + "\n":
            continue
        if r.stdout != forventet:
            avvik.append(f"{navn} {e['id']}: FASIT AVVIKER\n"
                         f"  fasit sier: {forventet!r}\n"
                         f"  faktisk:    {r.stdout!r}"
                         + (f"\n  stderr: {siste}" if siste else ""))

print(f"{emne}: {sjekket} sporingsfasiter kjørt og sammenlignet ({hoppet} hoppet over)")
if avvik:
    print(f"AVVIK ({len(avvik)}):")
    for a in avvik:
        print(" -", a)
    sys.exit(1)
print("SPORINGSPORT OK")
