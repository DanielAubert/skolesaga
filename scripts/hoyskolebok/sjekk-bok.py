#!/usr/bin/env python3
"""
Deterministisk kvalitetsport for en BYGGET høyskolebok (fase 7, før build/commit).
Bruk: python3 scripts/hoyskolebok/sjekk-bok.py <emne> [forbudt-term-regex]

Sjekker: JSON-validitet, forkunnskaper-blokk i alle kapitler, symbol-/formelliste
(eller eksplisitt symbolfritt), typiske feil-warning, kvoter (definisjoner >= 500,
quiz >= 500 fra quiz-data-<emne>.ts), døde kryssbok-lenker, forbudt-termer,
(verifiser)-rester, blokk-id-unikhet. Exit 1 ved avvik.
"""
import json, re, sys, os, glob

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
CH = os.path.join(REPO, "src/lib/data/chapters")
emne = sys.argv[1]
forbudt = sys.argv[2] if len(sys.argv) > 2 else None

files = sorted(glob.glob(f"{CH}/{emne}-*.json"))
issues, notes, defs_tot = [], [], 0
assert files, f"ingen kapittelfiler for {emne}"

# Nybegynner-sjargong: RÅDGIVENDE merknader (feiler ALDRI porten — se
# minne «nybegynner-sjargong»). Snever + whitelistet for å unngå falske positive.
GRADE_SLANG = re.compile(r"\b[A-E]-(stoff|porten|markør|kandidat)\b")
BARE_CODE = re.compile(r"\b(RED|SIT|SAM|ANV|HYB|S[1-7])\b|\bsjanger [A-N]\b")
# Deloppgaver a) b) i løpende tekst (skal stå på egen linje med **a)**).
# Krav: a) og b) i SAMME linje med ≥8 tegn mellom (utelukker «jf. a) og b)»).
# Regelen gjelder deloppgaver som STARTER inline — ikke referanser til dem.
# Derfor er tre former unntatt (alle ti treffene 25. juli 2026 var av disse):
#   «**Svar:** (a) … (b) …»  oppsummering med parentes-form
#   «\boxed{\text{a) }…}»    markør inne i LaTeX
#   «etterspørsel mot a) og b)»  prosa som viser tilbake til punkter over
INLINE_SUBTASK = re.compile(r"(?<![*({\[\\])\ba\) [^\n]{8,}?(?<![({])\bb\) ")
# Har feltet allerede deloppgaver riktig formatert på egen linje, er et inline
# «a) … b)» lenger nede en tilbakevisning, ikke en formateringsfeil.
# Godtar både «**a)** tekst» og «**a) tekst**» — begge er korrekt formatert.
# Den smale varianten ga tre falske positive i in1020, der fasitlinja er
# «**Fasit: a) tilgjengelighet, b) integritet.**».
KORREKT_SUBTASK = re.compile(r"^\s*\*\*[a-h]\)(?:\*\*|\s)", re.M)
# Statisk prøve-flervalg der fasitlista er «alle a» (død selvtest — panelfunn):
# fanger fasitlinjer som «1a · 2a · 3a» / «1a, 2a, 3a» med ≥3 a-er på rad.
ALL_A_FASIT = re.compile(r"\b1a\b[^\n]{0,12}\b2a\b[^\n]{0,12}\b3a\b")
def _forklart(s):  # whitelist: teksten forklarer skala/kode ⇒ ikke merknad
    return bool(re.search(r"karakter|A[–-]F|bestått|forkort|= |betyr|dvs\.", s, re.I))

for f in files:
    cid = os.path.basename(f)[:-5]
    try:
        d = json.load(open(f))
    except Exception as e:
        issues.append(f"{cid}: UGYLDIG JSON — {e}"); continue
    c = d.get("content", [])
    txt = open(f).read()
    defs_tot += sum(1 for b in c if b.get("type") == "definition")
    # blokk-id-unikhet
    ids = [b.get("id") for b in c if b.get("id")]
    if len(ids) != len(set(ids)): issues.append(f"{cid}: duplikate blokk-id-er")
    # Vurderings-/simuleringskapitler (prøver, øvings-/slutteksamener,
    # midtveis-/slutteksamen-simuleringer): assessment-kapitler, ikke teori.
    # De har egen struktur i kontrakten (komplett sett + fasit i collapsibles)
    # og skal IKKE ha teorikapitlets pliktblokker (symbolliste, Typiske feil).
    tittel = d.get("title", "")
    er_vurdering = cid.endswith("-prove") or bool(
        re.search(r"øvingseksamen|simulering|prøve|typetilfelle|praktikum", tittel, re.I))
    # forkunnskaper — kreves i alle kapitler UNNTATT Del 0 (orienterings-/
    # innføringskapitlet: bokas startpunkt, har per definisjon ingen forkunnskaper).
    er_del0 = cid.startswith(f"{emne}-0-")
    if not er_del0 and "orkunnskaper" not in txt:
        issues.append(f"{cid}: mangler Forkunnskaper-blokk")
    # symbolliste (kreves i teorikapitler med LaTeX-symboler; ikke i vurderings-
    # /simuleringskapitler — de er ren oppgave+fasit, jf. kontraktens prøve-spec).
    har_liste = "Symbol- og formelliste" in txt
    har_latex = bool(re.search(r"\$[^$]*[A-Za-z\\][^$]*\$", txt))
    if har_latex and not har_liste and not er_vurdering:
        issues.append(f"{cid}: bruker LaTeX-symboler men mangler «Symbol- og formelliste»")
    # typiske feil: warning-blokk kreves i teori-/regel-/drillkapitler.
    # Unntak (per DNA-ene): vurderings-/simuleringskapitler (prøver, øvings-/
    # slutteksamener, simuleringer, typetilfelle-/praktikumkapitler) — de har
    # må/pluss/feller-fasit eller Sensorblikket.
    unntak = er_vurdering or "Feller" in txt or "typiske feil" in txt.lower()
    if not unntak and not any(b.get("type") == "warning" for b in c):
        issues.append(f"{cid}: mangler warning-blokk (Typiske feil)")
    # (verifiser)-rester — KUN den literale markøren «(verifiser)» (jf.
    # BYGGEKONTRAKT «Usikre referanser merkes (verifiser)»). Bar ordform
    # («Verifiser svaret ved innsetting») er påkrevd føringsspråk i regnefag
    # og skal ikke flagges.
    if re.search(r"\(verifiser\)", txt, re.I): issues.append(f"{cid}: uavklarte (verifiser)-markeringer")
    # forbudte felt
    if re.search(r"solutionVideo|allowsUpload|allowsCanvasDrawing", txt):
        issues.append(f"{cid}: forbudte exercise-felt")
    # døde lenker
    for m in re.finditer(r"\]\(/bok/([a-z0-9-]+)/([a-z0-9-]+)\)", txt):
        if not os.path.exists(f"{CH}/{m.group(2)}.json"):
            issues.append(f"{cid}: død lenke {m.group(0)}")
    # forbudt-termer
    if forbudt and re.search(forbudt, txt, re.I) and not cid.endswith("-0-1"):
        issues.append(f"{cid}: treff på forbudt-term-regex ({forbudt})")
    # RÅDGIVENDE nybegynner-merknader (feiler ikke porten):
    #  (a) karaktersjargong («C-stoff»/«A-markør») i FØRSTE innholdsblokk uten at
    #      skalaen forklares i samme blokk.
    if c:
        b0 = " ".join(str(c[0].get(k, "")) for k in ("content", "title"))
        if GRADE_SLANG.search(b0) and not _forklart(b0):
            notes.append(f"{cid}: karaktersjargong i første blokk uten forklaring av skalaen")
    #  (b) bar sjanger-/oppgavekode i competenceGoals (læringsmål) uten forklaring.
    for g in d.get("competenceGoals", []) or []:
        if BARE_CODE.search(g) and not _forklart(g):
            notes.append(f"{cid}: uforklart kode i læringsmål — «{g[:60]}…»"); break
    #  (c) deloppgaver a) b) i løpende tekst i exercise task/solution
    #      (README-regel: hver deloppgave på egen linje med **a)** i fet).
    for b in c:
        if b.get("type") != "exercise":
            continue
        e = b.get("exercise", b)  # oppgavedata ligger nestet i 'exercise'-objektet
        for felt in ("task", "solution"):
            s = e.get(felt, "") or ""
            if isinstance(s, str) and INLINE_SUBTASK.search(s) and not KORREKT_SUBTASK.search(s):
                notes.append(f"{cid}: deloppgaver a) b) i løpende {felt} (id {b.get('id','?')}) — skal ha egen linje + **fet** merking")
                break
    #  (d) statisk flervalg med «alle a»-fasit (død selvtest) og (e) tomme
    #      collapsibles (innhold under feil nøkkel, f.eks. 'text' i stedet for
    #      'content' — panelfunn i econ Del 6-7).
    for b in c:
        bt = b.get("type")
        if bt == "collapsible":
            cc = b.get("content") or ""
            tom = (not cc) if isinstance(cc, list) else (not str(cc).strip())
            if tom:
                notes.append(f"{cid}: tom collapsible (id {b.get('id','?')}) — ligger innholdet under feil nøkkel?")
            elif isinstance(cc, str) and ALL_A_FASIT.search(cc):
                notes.append(f"{cid}: flervalgsfasit «1a·2a·3a…» i collapsible (id {b.get('id','?')}) — stokk bokstavene (død selvtest)")
        elif bt in ("text", "tip") and ALL_A_FASIT.search(str(b.get("content", ""))):
            notes.append(f"{cid}: flervalgsfasit «1a·2a·3a…» (id {b.get('id','?')}) — stokk bokstavene (død selvtest)")

# kvoter
qf = os.path.join(REPO, f"src/lib/data/quiz-data-{emne}.ts")
quiz = open(qf).read().count("question:") if os.path.exists(qf) else 0
print(f"{emne}: {len(files)} kapittelfiler | {defs_tot} definisjoner | {quiz} quiz")
if defs_tot < 500: issues.append(f"KVOTE: kun {defs_tot} definisjoner (< 500)")
if quiz < 500: issues.append(f"KVOTE: kun {quiz} quiz (< 500) — er quiz-data-{emne}.ts wiret?")

if notes:
    print(f"MERKNADER — nybegynner-sjargong (RÅDGIVENDE, feiler ikke porten; {len(notes)}):")
    for n in notes[:20]: print(" ·", n)

if issues:
    print(f"AVVIK ({len(issues)}):")
    for i in issues[:40]: print(" -", i)
    sys.exit(1)
print("BOKPORT OK — kjør npx tsc --noEmit && npm run build, deretter prod-curl")
