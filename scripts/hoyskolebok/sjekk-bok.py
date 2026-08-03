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

# Toppnivårutene deler navnerom med kurs-id-ene etter at /bok-prefikset falt
# bort. Leses fra rutetreet, ikke skrives ned — en håndholdt liste ville råtnet
# stille hver gang noen la til en side.
TOPPNIVA = {
    d for d in os.listdir(os.path.join(REPO, "src/app"))
    if os.path.isdir(os.path.join(REPO, "src/app", d))
    and not d.startswith(("[", "(", "_"))
} | {"nn", "sme", "api", "images", "audio"}
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

# Byggespråk som lekker til leseren (BLOKKERENDE — nytt 2. august 2026).
# «Læringsløkke» er byggeplanens ord for hvordan et kapittel settes sammen;
# leseren skal aldri se det. Likevel nådde 3 048 overskrifter + 1 024
# kryssreferanser ut i live bøker, fordelt på fire former som hver slapp unna
# forrige runde med rydding:
#   ## Løkke 3 — Varians            (tall i overskrift)
#   «Repeter løkke 2 og 3»          (liten forbokstav i prosa — 820 treff)
#   ## Løkke B — Subsumsjonen       (bokstav i stedet for tall — 109 treff)
#   | Løkke | Innhold | Tid |       (tabellhode uten nummer)
# Mønsteret krever nummer/bokstav ETTER ordet, aldri ordet alene: i
# programmeringsfagene er «løkke» et sentralt fagbegrep (in1900 har 770
# for-/while-løkker), og en port forankret på ordet ville vært ubrukelig der.
#
# Ordene deles i to klasser, fordi de har ulik sannsynlighet for å være ekte:
#   BLOKKERENDE: «Løkke N» og «Bolk N» er byggeplanens egne ord. De har ingen
#     legitim bruk som overskrift i noen av bøkene våre.
#   RÅDGIVENDE: «Blokk N», «Runde N», «Sekvens N», «Modul N», «Iterasjon N» er
#     ekte fagord i flere fag. med1100 har «## Blokk 1 i detalj» fordi UiOs
#     medisineksamen FAKTISK består av tre blokker; econ1100 har «Runde 2» om
#     multiplikatorprosessen. Porten kan ikke avgjøre dette — mennesket kan.
BYGGESPRAK_OVERSKRIFT = re.compile(r"#{2,4}\s*(?:Løkke|Bolk)\s+[0-9A-ZÆØÅ]\b")
BYGGESPRAK_OVERSKRIFT_KANSKJE = re.compile(
    r"#{2,4}\s*(?:Blokk|Runde|Sekvens|Modul|Iterasjon)\s+[0-9A-ZÆØÅ]\b")
# Prosa-mønsteret dekker BARE «løkke», ikke de andre ordene. En måling 2.
# august fant 119 «Runde N» i prosa — bobblesorteringsrunder, polynomdivisjon,
# iterert dominans, delvis integrasjon, designiterasjoner, kall-og-svar i
# musikk — og alle var ekte. Et bredere mønster her ville vært ren støy.
BYGGESPRAK_PROSA = re.compile(
    r"(?<!#)(?<!# )\b[Ll]økke[nra]?\s+(?:[0-9]+|[A-ZÆØÅ])\b(?![-\w])")
# Tabellhodet er RÅDGIVENDE: i algoritme-/programmeringsbøker er «| Løkke |»
# et ekte sporingstabell-hode (in1900, tdt4110, naturfag-9-5-6 har gyldige),
# mens in2010 hadde det som byggespråk. Bare et menneske ser forskjellen.
BYGGESPRAK_TABELL = re.compile(r"\|\s*Løkke[nr]?\s*\|")

# Påstander om leserens lesehistorikk (RÅDGIVENDE). Forkunnskapsblokka
# oppsummerer et ANNET kapittel, så «her» peker feil vei — og boka vet
# uansett ikke hvor leseren har vært. 526 blokker sa «Sist du var her»,
# verst i inter1000-1-1: første kapittel i sin fagsøyle, som tre linjer
# lenger nede skriver at det kan leses uten å ha vært innom noe annet.
#
# ⚠ Ordgrense foran «som»: uten den treffer mønsteret «der·som du husker», som
# er en helt vanlig betingelse og ikke en påstand om lesehistorikk. 13 av 14
# treff i nynorsk-laget var nettopp det. En rådgivende port som roper ulv,
# blir ignorert.
LESEHISTORIKK = re.compile(
    r"[Ss]ist du var her"
    r"|(?<![a-zæøå])[Ss]om du (?:sikkert )?husker"
    r"|[Dd]u har jo allerede"
    r"|[Dd]ette kan du fra før"
    r"|[Dd]a vi (?:gikk gjennom|så på) dette sist")

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
    # byggespråk som lekker til leseren
    m = BYGGESPRAK_OVERSKRIFT.search(txt)
    if m:
        issues.append(f"{cid}: byggespråk i overskrift — «{m.group(0).strip()}»; "
                      f"overskriften skal si hva avsnittet handler om")
    m = BYGGESPRAK_OVERSKRIFT_KANSKJE.search(txt)
    if m:
        notes.append(f"{cid}: «{m.group(0).strip()}» i overskrift — byggespråk, "
                     f"eller fagets eget navn (eksamensblokk, multiplikatorrunde)? "
                     f"Vurder selv")
    n_prosa = len(BYGGESPRAK_PROSA.findall(txt))
    if n_prosa:
        ett = BYGGESPRAK_PROSA.search(txt).group(0)
        issues.append(f"{cid}: {n_prosa} nummerert løkke-referanse(r) i prosa "
                      f"(«{ett}») — vis til avsnittet ved NAVN, ikke nummer")
    if BYGGESPRAK_TABELL.search(txt):
        notes.append(f"{cid}: tabellkolonne «| Løkke |» — byggespråk, eller "
                     f"ekte sporingstabell for programmeringsløkker? Vurder selv")
    m = LESEHISTORIKK.search(txt)
    if m:
        notes.append(f"{cid}: «{m.group(0)}» — boka påstår noe om hvor leseren "
                     f"har vært. Skriv om stoffet i stedet: «Dette sto der», "
                     f"«Fra kap. X», «I det kapitlet lærte du …»")
    # Deloppgaver merkes a), b), c) — ALDRI (i), (ii), (iii). Produkteierregel,
    # ufravikelig. Brutt i første SVMET1010-bygg: kap. 0.1 hadde «**(i)** Gjør
    # kort rede for …» med fire bestillinger, og fasiten refererte til dem med
    # samme romertall.
    #
    # ⚠ Smalt forankret med vilje. «To løftesetninger: (i) jo strammere guiden
    # er … eller (ii) …» er inline-alternativer i en setning, ikke deloppgaver,
    # og skal IKKE flagges. Derfor kreves fet markør eller linjestart.
    # ⚠ Og bare inne i OPPGAVEBLOKKER. En prosedyre som nummererer sine sju
    # steg «(i) faktoriser modulusen; (ii) skriv gcd-sjekken …» (ma1301-8-1) er
    # ikke deloppgaver, og en sjekkliste over hva en drøfting skal inneholde
    # (ling1100-11-5) er det heller ikke. Første utkast av porten flagget 52
    # kapitler i 25 bøker, og de fleste var slike oppramsinger.
    ROMER = re.compile(r"\*\*\((i{1,3}|iv|v)\)\*\*|(?:^|\\n)\((i{1,3}|iv|v)\)\s")

    def _oppgavetekst(o, nøkler):
        if isinstance(o, dict):
            if o.get("type") == "exercise" or "task" in o or "problem" in o:
                for k in nøkler:
                    v = o.get(k)
                    if isinstance(v, str):
                        yield v
                    elif isinstance(v, list):
                        yield from (x for x in v if isinstance(x, str))
            for v in o.values():
                yield from _oppgavetekst(v, nøkler)
        elif isinstance(o, list):
            for v in o:
                yield from _oppgavetekst(v, nøkler)

    # Etiketten hører hjemme i SPØRSMÅLET. Står romertallet bare i fasiten,
    # er det som regel en tilbakevisning («Ingen feil — (i)») eller en
    # oppramsing av modellens ledd, ikke en deloppgavemerking. Det blokkerer
    # derfor ikke, men nevnes.
    # ⚠ Og bare når leddene er DELOPPGAVER. Spør oppgaven det SAMME om hvert
    # ledd — «For hvert av de fire utsagnene: er det riktig eller galt?»,
    # «Avgjør for hver av dem …», «Koble hver beskrivelse …» — er leddene en
    # liste av selvstendige påstander, ikke deloppgaver. Der er romertall det
    # RIKTIGE valget: med a) b) c) leser sjekk-statiskflervalg.py lista som ett
    # flervalg med én fasit. Jf. BYGGEKONTRAKT-MAL «Ja/nei-lister i
    # prøvekapitler kan feilmåles som flervalg».
    #
    # Deloppgaver stiller ULIKE spørsmål: «(i) Hva er forklaringen? (ii)
    # Hvorfor er forskjellen faglig interessant?»
    # Testen: er LEDDENE selv instruksjoner eller spørsmål? Da er de
    # deloppgaver. Er de påstander, formler eller navn som skal bedømmes, er
    # de en liste — og «Avgjør om de følgende følgene konvergerer: (i) a_n =
    # …» skal beholde romertallene.
    DELOPPGAVE = re.compile(
        r"^\s*(?:Gjør|Gjer|Analyser|Drøft|Forklar|Vurder|Diskuter|Redegjør|"
        r"Grei\s+ut|Beskriv|Sammenlign|Sammenlikn|Begrunn|Vis\s+at|Utled|"
        r"Skriv|Definer|Nevn|Regn\s+ut|Finn|Bruk|Velg|Hva|Hvorfor|Hvordan|"
        r"Hvilke|Hvilken|Hvilket|Når|Hvem)\b", re.I)
    LEDD = re.compile(r"\*\*\((?:i{1,3}|iv|v)\)\*\*\s*|(?:^|\n)\((?:i{1,3}|iv|v)\)\s*")

    # ⚠ Ett grensetilfelle til: leddene KAN være imperativer og likevel være en
    # liste, når de er siterte oppgaveformuleringer som skal klassifiseres —
    # «Her er fire nyskrevne oppgaveformuleringer. Hva bestiller hver av dem?
    # (i) Gjør kort rede for … (ii) Utform et forskningsopplegg …». Stammen
    # avslører det: spør den om «hver av dem», er leddene eksemplarer.
    #
    # ⚠ Og ett signal til: stammen KUNNGJØR en samling siterte ledd. «Du har
    # lastet ned et gammelt sett og ser disse fire spørsmålene: (i) … (ii) …»
    # er fire EKSEMPLARER leseren skal behandle, ikke fire deloppgaver — og
    # oppgaven har gjerne sine egne a)–d) på nivået over. juroff1500-1-5 og
    # -8-1 gjengir 1902-sett på nøyaktig den formen.
    TELL = r"(?:to|tre|fire|fem|seks|sju|åtte|ni|ti|\d+)"
    TING = (r"spørsmål|oppgav\w*|utdrag|formuleringer|påstand\w*|utsagn"
            r"|sitat\w*|situasjon\w*|eksempl\w*|setning\w*|besvarelse\w*")
    LISTESTAMME = re.compile(
        r"\bhver[t]?\s+av\b|\bfor\s+hver[t]?\b|\bhvert?\s+enkelt\b"
        rf"|\b(?:disse|følgende|under står|her er|står)\s+(?:\w+\s+)?{TELL}\s+"
        rf"(?:\w+\s+)?(?:{TING})"
        rf"|\b{TELL}\s+(?:\w+\s+)?(?:{TING})\s+(?:står|følger|er gjengitt)",
        re.I)

    def _er_deloppgaver(felt):
        biter = LEDD.split(felt)
        if LISTESTAMME.search(biter[0]):
            return False
        return sum(1 for b in biter[1:] if DELOPPGAVE.match(b)) >= 2

    for felt in _oppgavetekst(d, ("task", "problem")):
        m = ROMER.search(felt)
        if m and not _er_deloppgaver(felt):
            continue        # liste av selvstendige ledd — romertall er riktig
        if m:
            issues.append(f"{cid}: deloppgave merket «{m.group(0).strip()}» i "
                          f"oppgaveteksten — deloppgaver skal ha a), b), c). "
                          f"Rett BÅDE oppgaven og fasiten, ellers peker fasiten "
                          f"på etiketter som ikke finnes")
            break
    else:
        for felt in _oppgavetekst(d, ("solution", "hints")):
            if ROMER.search(felt):
                notes.append(f"{cid}: romertall i fasit/hint uten romertall i "
                             f"oppgaveteksten — tilbakevisning eller oppramsing? "
                             f"Vurder selv")
                break
    # `description` er REN TEKST. Verifisert mot prod-server 2. august 2026:
    # feltet havner rått i <meta name="description">, og:description og
    # twitter:description — altså i Google-treffet og lenkeforhåndsvisningen —
    # og i den synlige kroppen. KaTeX rendrer 1217 uttrykk ellers på
    # kapittelsiden, men ikke ett i beskrivelsen. 122 kapitler i 17 bøker viste
    # «$\omega_0=\sqrt{k/m}$» og «**rekonstruér**» bokstavelig i søkeresultatet.
    d_desc = d.get("description") or ""
    m = re.search(r"\$[^$]+\$|\*\*[^*]+\*\*|`[^`]+`", d_desc)
    if m:
        issues.append(f"{cid}: markdown/LaTeX i description — «{m.group(0)[:40]}» "
                      f"vises bokstavelig i Google-treffet. Skriv ren tekst "
                      f"(ω₀=√(k/m), ikke $\\omega_0=\\sqrt{{k/m}}$)")
    # døde lenker
    # /bok-prefikset ble fjernet 27. juli 2026 (kapitler ligger nå på
    # /<kurs>/<kapittel>). Sto det gamle mønsteret igjen her, ville regexen
    # sluttet å treffe NOE og porten stilltiende godkjent alle døde lenker.
    #
    # Uten TOPPNIVA-filteret ville /<kurs>/<kapittel> også truffet ordinære
    # sider som /trinn/vg1 og /dashboard/student, og flagget dem som døde
    # kapitler — de har ingen fil i chapters/.
    for m in re.finditer(r"\]\(/([a-z0-9-]+)/([a-z0-9-]+)\)", txt):
        if m.group(1) in TOPPNIVA:
            continue
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
