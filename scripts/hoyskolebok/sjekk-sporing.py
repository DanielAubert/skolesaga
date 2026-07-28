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

def oppgaver(blokker):
    """Alle exercise-blokker, OGSÅ de som ligger inne i en collapsible.

    Fram til 28. juli 2026 gikk denne porten bare over toppnivå-`content`. Men
    prøvekapitlene legger oppgavene sine inne i collapsibles («Prøve 5.A …»),
    så INGEN sporingsfasit i noe prøvekapittel har noen gang vært kontrollert —
    verken her eller i in1900/in1000. Nettopp prøvene er der en feil fasit gjør
    mest skade: studenten bruker dem til å måle seg selv før eksamen.

    Funnet av Del 5-agenten, som kjørte sin egen rekursive kontroll ved siden av
    porten og oppdaget at de to talte ulikt antall.
    """
    for b in blokker or []:
        if not isinstance(b, dict):
            continue
        if b.get("type") == "exercise" and "exercise" in b:
            yield b
        # collapsible og andre beholdere bærer blokkene sine i `content`
        indre = b.get("content")
        if isinstance(indre, list):
            yield from oppgaver(indre)


for p in sorted(glob.glob(os.path.join(CH, emne + "-*.json"))):
    navn = os.path.basename(p)
    d = json.load(open(p, encoding="utf-8"))
    for b in oppgaver(d.get("content", [])):
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

        # Etterfølgende blanktegn per linje ignoreres. `print(x, end=' ')` i en
        # løkke gir en avsluttende space som er USYNLIG for leseren, og som
        # ingen fasitforfatter kan skrive inn meningsfullt. Uten denne
        # normaliseringen meldte porten in1900-9-1-oppg-2 som avvik fordi
        # «1 2 3 3 4 5» manglet et mellomrom til slutt — der både svaret og
        # sporingstavla var helt riktige. En port som klager på usynlig
        # blanktegn blir ignorert, og da fanger den ikke de ekte feilene heller.
        def uten_hale(s):
            return "\n".join(l.rstrip() for l in s.split("\n"))

        if uten_hale(r.stdout) == uten_hale(forventet):
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
