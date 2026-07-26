#!/usr/bin/env python3
"""sjekk-utskrift.py <kapittelfil.json> [<datadir>]

UTSKRIFTSPORT for kodefag: kjører HVER ```python-blokk i et kapittel og
sammenligner den faktiske stdout med «**Utskrift:**»-blokken rett etter.

Hvorfor: utskrift skrevet fra teorien i stedet for kjørt er den farligste feilen
en kodefag-bok kan gjøre — den lærer leseren feil svar på nettopp den sjangeren
som er 100 % sikker på eksamen. Verifiseringen av in1900 fant fem slike. Denne
porten gjør funnet deterministisk i stedet for avhengig av en leser.

Regler:
- Blokker i `task`/`problem`-felt KJØRES, men sammenlignes ikke — fasiten eier
  svaret. Krasjer de, rapporteres det som tilsiktet (sjanger I, «finn feilen»).
- Blokker uten «**Utskrift:**» etter seg kjøres for å sjekke at de ikke krasjer,
  og rapporteres bare hvis de faktisk skriver noe.
- En blokk som ikke terminerer (uendelig løkke) rapporteres — slike skal ha
  fence-taggen ```text, jf. BYGGEKONTRAKT §K1.
- Kjøres i <datadir> (default: en tom temp-mappe), så fillesing virker: legg
  datafila der først.

Kjør:  python3 scripts/hoyskolebok/sjekk-utskrift.py src/lib/data/chapters/in1000-1-1.json
"""
import json, os, re, subprocess, sys, tempfile

fil = sys.argv[1]
datadir = sys.argv[2] if len(sys.argv) > 2 else tempfile.mkdtemp()

d = json.load(open(fil, encoding="utf-8"))


OPPGAVEBOKS = re.compile(r"^\s*(prøve|prove|kald bank|oppgavesett|øvingseksamen)\b", re.I)


def strenger(o, sti="", i_oppgaveboks=False):
    """Flagger strenger som står i en OPPGAVEBOKS — samme regel som sjekk-kode.py.

    En sporingsoppgave i et prøvekapittel bor i en `collapsible` «Prøve …», ikke
    i et `exercise.task`-felt. Fasiten hører i den separate «Fasit …»-boksen, så
    koden der skal IKKE ha utskriften ved siden av seg.
    """
    if isinstance(o, str):
        yield sti, o, i_oppgaveboks
    elif isinstance(o, dict):
        nå = i_oppgaveboks or (o.get("type") == "collapsible"
                               and bool(OPPGAVEBOKS.match(str(o.get("title", "")))))
        for k, v in o.items():
            yield from strenger(v, f"{sti}.{k}", nå)
    elif isinstance(o, list):
        for i, v in enumerate(o):
            yield from strenger(v, f"{sti}[{i}]", i_oppgaveboks)


FENCE = re.compile(r"```([A-Za-z0-9_-]*)\n([\s\S]*?)```")
# Utskriftsgjerdet kan vaere bart (```) ELLER ha en sprakkode (```text).
# Den gamle regexen krevde bart gjerde, og var derfor BLIND for hele Del 8 i
# fys1100: atte kodeblokker med utskrift ble aldri sammenliknet, bare meldt som
# «mangler Utskrift-blokk». Oppdaget 26. juli 2026 av agenten som skrev Del 11.
UT = re.compile(r"\A\s*\*\*Utskrift:\*\*\s*\n```[A-Za-z0-9_-]*\n([\s\S]*?)```")

feil, kjort, sammenlignet = [], 0, 0
for sti, s, i_oppgaveboks in strenger(d):
    er_oppgavetekst = ("task" in sti) or sti.endswith(".problem") or i_oppgaveboks
    for m in FENCE.finditer(s):
        if m.group(1) != "python":
            continue
        kode = m.group(2)
        kjort += 1
        p = os.path.join(datadir, "_snutt.py")
        open(p, "w", encoding="utf-8").write(kode)
        try:
            r = subprocess.run([sys.executable, "_snutt.py"], cwd=datadir,
                               capture_output=True, text=True, timeout=15)
        except subprocess.TimeoutExpired:
            feil.append(f"{sti}: KJØRER FOR EVIG (uendelig løkke?) — bruk ```text-tagg"
                        f" hvis blokken ikke skal kunne kjøres")
            continue
        faktisk = r.stdout
        um = UT.match(s[m.end():])
        if um:
            forventet = um.group(1)
            sammenlignet += 1
            if faktisk != forventet:
                feil.append(f"{sti}: UTSKRIFT AVVIKER\n  forventet: {forventet!r}\n  faktisk:   {faktisk!r}")
        elif not er_oppgavetekst and faktisk.strip():
            feil.append(f"{sti}: skriver ut, men har ingen «**Utskrift:**»-blokk etter: {faktisk!r}")
        if r.returncode != 0:
            siste = r.stderr.strip().split("\n")[-1] if r.stderr.strip() else "(ingen stderr)"
            if er_oppgavetekst:
                print(f"  (oppgavekode krasjer med vilje i {sti}: {siste})")
            elif um and siste in um.group(1):
                pass  # tilsiktet feilmelding, dokumentert i utskriftsblokken
            elif "# tilsiktet feil" in kode:
                print(f"  (tilsiktet feil i {sti}: {siste})")
            else:
                feil.append(f"{sti}: KRASJER — {siste}")

print(f"{os.path.basename(fil)}: {kjort} python-blokker kjørt, {sammenlignet} utskrifter sammenlignet")
if feil:
    print(f"AVVIK ({len(feil)}):")
    for f in feil:
        print(" -", f)
    sys.exit(1)
print("UTSKRIFTSPORT OK")
