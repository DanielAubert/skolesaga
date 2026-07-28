# Bokskjelett: OD4200 Odontologistudiet 8. semester (UiO) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (UiOs OD4200-arkiv 2023–2025: 21 filer over de **fem separate
> deleksamenene** — kariologi, endodonti, periodonti, farmakologi, gerodonti; sju rene
> sensorveiledninger/vurderingsdokumenter lest oppgave for oppgave, oppgavesettene
> gjennomgått delfag for delfag; to filer var billedskann uten tekstlag, men begge sittinger
> er dekket via parallelle sensorveiledninger). Alle oppgaver, kasus, tallverdier,
> pasientdetaljer og formuleringer i boka skal være NYSKREVNE (se §6). Diagnosenavn,
> graderingssystemer (VEDE/BEWE/DMF, periodontal stadium/grad), legemiddelnavn,
> standardmekanismer og lovhenvisninger er alminnelig, kanonisk fagstoff og er fritt å bruke.
>
> **Odontologisk og farmakologisk presisjon er kritisk.** Prognoseprosenter, MB2-frekvens,
> HbA1c-effekt, fluorkonsentrasjoner, legemiddeldoser, INR-grenser og lovparagrafer
> forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i fase 6. INGEN oppdiktede
> tall, doser eller lovhjemler. Flere av delfagene (periodonti, farmakologi, gerodonti)
> mangler egne fasitdokumenter i arkivet — fasitmomentene der er utledet av oppgavelogikk og
> fagets standardpensum, ikke gjengitt fra veiledning; tallverdier bør kontrolleres mot
> gjeldende pensumlitteratur før de brukes som fasit (kildeforbehold, se Del 0).
>
> **Emnet er AKTIVT (verifisert mot UiOs emne-/eksamensarkiv 2026-07-11):** OD4200
> «Dentistry / Odontologistudiet, 8. semester» er 8. semester i det integrerte masterstudiet
> i odontologi ved Det odontologiske fakultet, UiO, og avlegges av *alle* tannlegestudenter
> der (fornybar årskull-målgruppe). Fra og med vår 2027 legges vurderingen om fra bokstav
> (A–F) til **bestått/ikke bestått** — kalibreringen i boka bygger på 2023–2025-arkivet, og
> Del 0 rammer karaktersjargong deretter (se «Karakter-realisme» og «bestått-på-marginen»).

---

## BILDEAVHENGIGHETS-KONTRAKT (OD4200-spesifikk — ufravikelig, gjelder HELE boka)

OD4200-oppgavene er sterkt **kasusbaserte** og henviser gjennomgående til vedlagte
bitewing-røntgen (BW), apikalrøntgen, fistulogram, kliniske foto, perio-skjema, helstatus-
røntgen og kostholdsskjema. Bildeavhengigheten er **reell for oppgaveformatet**, men
**ikke blokkerende** for en tekstplattform, og løses slik i HVER bok:

1. **Tekstlig rekonstruerte kasus, aldri opphavsrettsbeskyttede bilder.** Der eksamen viser
   et bilde, gjengir boka **funnene i presis klartekst** slik sensorveiledningene selv gjør
   («grad 4–5 karieslesjon mesialt på tann 37; okklusale flater på 36/46 har VEDE 4–5»;
   «apikal radiolusens ~4 mm ved MB-roten med fistulogram som peker mot samme rot»;
   «perio-skjema: 6 mm PD bukkalt 26, BoP+, grad II furkasjon»). Kasusene bygges som
   NYSKREVNE tekstkasus (endre tenner, tall, pasientdata) i samme sjanger.
2. **Ærlig boks i hvert bildeavhengig kapittel (type `warning` eller `tip`):** «Denne
   oppgavesjangeren viser på eksamen et røntgen-/klinisk bilde. Boka kan ikke gjengi det;
   i stedet beskrives funnene i tekst slik sensor gjør, og du trener **tolknings-
   RESONNEMENTET** — hvordan du går fra et beskrevet funn til diagnose, prognose og plan.
   På eksamen leser du bildet selv; her drilles resonnementet som følger etter avlesningen.»
   Denne boksen er obligatorisk i kariologi- (1.1–1.2), endodonti- (2.1–2.2), periodonti-
   (3.1–3.3) og gerodonti-kasuskapitlene (5.1).
3. **Skjematiske egne illustrasjoner er ren støtte, aldri gjengivelse.** Der en figur trengs
   (histopatologiske soner, bendefekt-typer, perio-skjema-mal), lages den som nytegnet/
   lisensiert skjematikk — aldri eksamensbildet. Dra-og-slipp-bendefektoppgaven (periodonti)
   og håndtegningsoppgaven (kariologi, histopatologiske soner / white spot) løses som egne
   illustrerte forklaringssider + tekstbeskrivelse av sonene.
4. **Farmakologi og gerodonti er nesten bildeuavhengige** (fakta/mekanisme/jus/etikk) og
   bygges direkte; periodonti er figurtungt men skjematiserbart; kariologi/endodonti er mest
   fototunge og krever mest tekstlig kasusrekonstruksjon. Byggerekkefølge derfor: farmakologi
   + gerodonti først, så periodonti, sist kariologi/endodonti.

---

## 1. Bokens identitet

- **Kurs-id:** `od4200`
- **Tittel:** *OD4200 Odontologistudiet 8. semester*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Universitetet i Oslo (UiO), Det odontologiske fakultet.
  Visningsnavn i `institusjoner.ts`: «OD4200 Odontologistudiet 8. semester».
- **Arketype:** **fakta/pugg-klinisk-hybrid** — nærmeste forbilde er søsterboka **OD2200**
  (samme klynge, samme «flere separate deleksamener»-arkitektur, samme klinisk-koblede
  fakta-/mekanisme-essaylogikk). Låner celle-/mekanisme-essaystrukturen fra **MED1100** for
  farmakologidelfaget (legemiddelmekanisme + interaksjonslogikk deler pensum med MED1100), og
  låner **drøftings-/jus-elementer fra DNA-drofting.md** for gerodontidelfaget (etikk +
  pasient- og brukerrettighetsloven kap. 4/4A + refleksjonsoppgave — momentliste-/disposisjons-
  fasit, ikke tallfasit). Ingen ren DNA-mal passer alle fem delfagene; hybridvalgene er
  dokumentert i §2 «Arketypetilpasning».
- **Kapittelantall:** **32** (Del 0: 2 · Del 1 Kariologi: 6 · Del 2 Endodonti: 5 · Del 3
  Periodonti: 5 · Del 4 Farmakologi: 5 · Del 5 Gerodonti: 4 · Del 6 Eksamenstrening: 5).
- **Estimert totaltid:** ~1 985 minutter (~33 timer) fordelt per kapittel under.
- **Quiz totalt:** **576** (krav ≥500; inkl. 20 prøver × 6 spm = 120 fra §4).
- **Flashcards totalt:** **748** (krav ≥500; høy tetthet fordi fem faktatunge delfag med hver
  sin egen begreps-/mekanisme-/diagnose-/legemiddel-/lovterminologi).

**Pitch:** OD4200 er 8. semester i det integrerte masterstudiet i odontologi ved UiO og
avlegges av *alle* tannlegestudenter der. Det avgjørende strukturvalget: semesteret avsluttes
**ikke** med én samlet eksamen, men med **FEM fagspesifikke skriftlige deleksamener** — én i
kariologi, endodonti, periodonti, farmakologi og gerodonti. Hver er på **4 timer**, med egen
sensorstab fra sin avdeling, og svak prestasjon i ett delfag kan **ikke** kompenseres med et
sterkt annet. Boka bygges derfor som **fem nesten uavhengige delbøker** med hver sin
drilllogikk, pluss øvingseksamener på toppen — én per delfag:

- **Kariologi (4 t):** to store pasientkasus (systematisk BW-beskrivelse tann-for-tann →
  tentative diagnoser → non-operativ/operativ plan + materialvalg + hensyn), + 4–6
  kunnskapsoppgaver (erosjon/slitasje med VEDE/BEWE, fluormekanisme, forebygging, saliva,
  histopatologi/håndtegning, diagnostikkvalitet, kariesstudier), + avsluttende MCQ-bolk.
- **Endodonti (4 t):** 3–4 diagnose-/behandlingskasus (fast sekvens: dobbeltdiagnose pulpa +
  periapikal → behandlingsplan → kanaltall/anatomi → tallfestet prognose → toppfylling), +
  én del 2 med kortsvar/matching.
- **Periodonti (4 t):** ETT gjennomgående pasientkasus gjennom behandlingsløpet Trinn 1–4
  (klassifisert diagnose stadium I–IV + grad A–C → prognose per tann → plan per trinn →
  reevaluering → protetikk + HELFO), + fagteori (risikofaktorer, bendefekter (dra-og-slipp),
  tannstein, furkasjon, HbA1c, måletolkning PD/CAL).
- **Farmakologi (4 t):** MCQ (interaksjoner/CYP), kortsvarsbatteri (legemiddelgrupper,
  antidoter, reseptorer), reseptskriving (etter Helsedirektoratets retningslinje/
  Felleskatalogen), antibiotika-mekanisme/profylakse, + evt. integrert multimorbid
  legemiddelkasus. Det minst bildeavhengige, mest faktatunge delfaget.
- **Gerodonti (4 t):** ETT stort multimorbid pasientkasus (anamnese → oral helse →
  ambisjonsnivå → prioritert plan → lover → etikk), + drøftingsoppgaver (reservekapasitet/
  skrøpelighet, munntørrhet, karies hos syke eldre, systemsykdommers orale konsekvenser,
  delirium), + refleksjonsoppgave rundt et sitat. Rent essay/drøfting.

Boka er bygd baklengs fra tre ting: (1) gjengangerne (§2/analysens §2) drilles til de sitter;
(2) de fem ulike svarlogikkene trenes SEPARAT (kariologi = kasusdrill + gradering; endodonti
= diagnose-behandling-prognose-sekvens; periodonti = klassifisering + behandlingsstige +
måletolkning; farmakologi = fakta/mekanisme + resept + interaksjonslogikk; gerodonti =
kasuskobling + jus + etikk); (3) de faste sensorfellene i §5.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart for de fem delfagene) → de fem delfags-delene (Del 1–5,
ordnet med de minst bildeavhengige/mest byggeklare — men rekkefølgen i boka følger fagets
naturlige klynge kariologi→endodonti→periodonti→farmakologi→gerodonti) → Del 6
(øvingseksamener, én per delfag).** Hver delfags-del har temakapitler ordnet etter
frekvens/vekt (tyngst mest omfang), med prerequisites som peker bakover innen delfaget.

| Del | Delfag | Seksjonstittel | Kap. | Vekt/prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|---|
| 0 | meta | Eksamenskart: fem deleksamener | 2 | perfekt (meta) | De fem formatene, svarlogikkene, bildeavhengighets-kontrakten og kildeforbeholdet må etableres FØR fagstoffet. |
| 1 | kariologi | Kariologi: diagnostikk, gradering og forebygging | 6 | perfekt | To kasus + graderings-/fluor-/forebyggingsoppgaver + MCQ; kjernegjengangerne 3/3. |
| 2 | endodonti | Endodonti: diagnose, behandling og prognose | 5 | perfekt | 3–4 diagnose-/behandlingskasus + del 2; dobbeltdiagnose + prognose + anatomi 3/3. |
| 3 | periodonti | Periodonti: klassifisering og behandlingsstige | 5 | perfekt | Ett gjennomgående kasus Trinn 1–4 + bendefekt-figur + risikofaktorer; klassifisering + prognose 3/3. |
| 4 | farmakologi | Farmakologi for tannleger | 5 | perfekt | Antibiotika + resept + MCQ + legemiddelkasus; det mest variable men mest faktatunge settet. |
| 5 | gerodonti | Gerodonti: den skrøpelige eldre pasienten | 4 | perfekt | Ett stort multimorbid kasus + lover/etikk/reservekapasitet; kasuskobling 3/3. |
| 6 | meta | Eksamenstrening: fem øvingseksamener | 5 | perfekt (meta) | Én komplett øvingseksamen per delfag (fem separate deleksamener → fem separate treningssett). |

Rasjonale: fordi de fem delfagene er separate deleksamener, dekkes **alle fem fullt ut** —
prioriteringen styrer *dybde og drillmengde*, ikke *om* et tema er med. Kariologi (bredest,
to-kasus-mal) får 6 kapitler; endodonti/periodonti/farmakologi 5 hver; gerodonti (smalest,
ett-kasus-dominert) 4. Del 6 har fem øvingseksamener fordi hvert delfag er en egen
deleksamen med egen form som må trenes for seg.

### Seksjonstitler (`sectionNames` i metadata — vises som «Kapittel N: <tittel>» på bokforsiden)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart: fem deleksamener |
| 1 | Kariologi: diagnostikk, gradering og forebygging |
| 2 | Endodonti: diagnose, behandling og prognose |
| 3 | Periodonti: klassifisering og behandlingsstige |
| 4 | Farmakologi for tannleger |
| 5 | Gerodonti: den skrøpelige eldre pasienten |
| 6 | Eksamenstrening: fem øvingseksamener |

### Sjangerkoder per delfag (fra analysen §3 — brukes i «Eksamensbelegg» under)

Sjangerkodene skrives ALLTID fullt ut ved første bruk i teksten (README «nybegynner-inngang»).

**Kariologi:** `KA-KASUS` pasientkasus-essay (systematisk BW-beskrivelse tann-for-tann →
tentative diagnoser på pasient-/tannnivå → non-operativ/operativ plan + materialvalg + hensyn
som Marevan/endokardittprofylakse/HELFO) · `KA-GRAD` graderingsoppgave (anvend VEDE/BEWE på
erosjon/slitasje; korrekt skalanivå) · `KA-DEF` definisjons-/mekanismeoppgave (fluoriders
virkning, «non-cavitated lesion», forklar karies for en pasient) · `KA-TEGN` håndtegning
(histopatologiske soner grad 4-lesjon; white spot med sonenavn) · `KA-KUNN` kunnskapsoppgave
med opplisting (kariesstudier + hovedfunn; populasjons- vs. risikobasert forebygging) ·
`KA-MCQ` flervalgsbolk til slutt.

**Endodonti:** `EN-KASUS` diagnose-/behandlingskasus (fast sekvens: dobbeltdiagnose pulpa +
periapikal → plan → kanaltall/anatomi → tallfestet prognose → toppfylling; anamnese-
modifikatorer diabetes/latex/angst forventes fanget opp) · `EN-PROS` prosedyre-essay
(irrigasjonsregime NaOCl/EDTA; akuttbehandling pulpotomi/pulpektomi) · `EN-DIFF`
differensialdiagnose-essay (intern vs. ekstern cervikal resorpsjon; cyste vs. granulom;
revisjon vs. apisektomi) · `EN-DEL2` matching/kortsvar (nummerert liste med ett-ords/kort
fasitsvar).

**Periodonti:** `PE-KASUS` kasusdrevet forløps-essay (følg én pasient Trinn 1–4: klassifisert
diagnose → prognose per tann → plan per trinn → tolk reevaluering) · `PE-MÅL` måletolkning
(forklar retraksjon/festetap ut fra PD vs. CAL før/etter behandling) · `PE-TEORI`
fagteori-essay (definisjoner, risikofaktorer røyking/diabetes, genetikk, tannsteindannelse,
HbA1c-kobling, furkasjon) · `PE-FIG` dra-og-slipp-bildeoppgave (navnsett bendefekter:
krater, en-/to-/tre-veggs) · `PE-HELFO` HELFO-oppgave (innslagspunkt/takster).

**Farmakologi:** `FA-MCQ` flervalg (hvilken påstand er feil/riktig om interaksjoner, CYP,
biologiske legemidler, profylakse-indikasjon, INR, HIV) · `FA-KORT` kortsvarsbatteri (korte
faktaspørsmål: antidot, reseptor, eksempel på svakt/sterkt opioid, odontogene bivirkninger) ·
`FA-RESEPT` reseptskriving (korrekt resept etter Felleskatalogen/Helsedirektoratets
retningslinje: styrke, dosering, varighet) · `FA-MEK` mekanisme-/langsvar (antibiotikas
angrepspunkter og selektivitet, tids- vs. konsentrasjonsavhengig drap, betalaktamresistens) ·
`FA-KASUS` integrert legemiddelkasus på multimorbid pasient (antikolinerg belastning,
sedasjon, LA-valg, postoperativ analgesi, INR-vurdering, profylakse).

**Gerodonti:** `GE-KASUS` stort integrert kasus-essay (koble hver anamnese-opplysning til
oral helse → ambisjonsnivå → prioritert behandlingsplan → lover → etikk) · `GE-DRØFT`
begreps-/drøftingsoppgave (reservekapasitet, skrøpelighet, delirium, samtykkekompetanse,
tvangsvilkår) · `GE-SYST` systemsykdom-essay (hvordan slag/demens/Parkinson/lungesykdom
påvirker oral helse og tannbehandling) · `GE-REFL` refleksjonsoppgave (kort essay rundt et
sitat om tillit/kommunikasjon/etikk).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**Kariologi:** `KF1` beskrive røntgen/foto uten systematikk eller uten å ende i tentative
diagnoser · `KF2` gradere på feil nivå (VEDE = flatenivå, BEWE = per sekstant) eller blande
systemene · `KF3` forveksle erosjon/attrisjon/abrasjon eller overse kombinert slitasjeetiologi
· `KF4` navngi diagnose/skade uten begrunnelse fra kliniske kjennetegn · `KF5` hoppe rett til
operativ behandling der non-operativ er indisert (grad 1–3, intakt overflate, god hygiene) ·
`KF6` forveksle fluoriders lokale hovedeffekt med den utdaterte systemiske pre-frembruddseffekten
· `KF7` beskrive dentinlesjon med bakterieinvasjon når oppgaven gjelder emalje-/white spot-lesjon
· `KF8` glemme HELFO-forankring (§5-6 punkt 9) der kasuset åpner for det.

**Endodonti:** `EF1` ufullstendig diagnose — bare pulpa- eller bare periapikaldiagnose, ikke
begge · `EF2` overse at preoperativ apikal periodontitt er den dokumenterte prognose-senkeren ·
`EF3` feil kanaltall/anatomi (glemme MB2 i overkjevemolar) · `EF4` foreslå apisektomi for tidlig
der ortograd revisjon er førstevalg · `EF5` feil irrigasjonssekvens eller manglende begrunnelse
(blande NaOCl og klorhexidin → PCA-utfelling) · `EF6` ikke fange opp anamnese-modifikatorer
(diabetes, latexallergi) i plan/prognose · `EF7` påstå radikulær cyste sikkert uten å nevne at
det kun kan verifiseres histologisk.

**Periodonti:** `PF1` ufullstendig klassifisering — stadium uten grad, eller uten begrunnelse
fra målene · `PF2` tolke retraksjon etter behandling som festetap i stedet for avdekket
festeposisjon · `PF3` forveksle PD og CAL; bruke feil mål for å monitorere festetap · `PF4`
hoppe over behandlingsstigen (foreslå protetikk før periodontal stabilitet) · `PF5` behandle
avhengige observasjoner (flere tenner per pasient) som uavhengige i risikoresonnement · `PF6`
feil furkasjonsgradering eller manglende kobling til prognose.

**Farmakologi:** `FF1` interaksjonsfeller i MCQ (utskillelse «i milten», parenteral
administrasjon «forhindrer» interaksjoner — feil) · `FF2` forveksle bakteriostatisk/baktericid
og deres doseavhengighet · `FF3` feil antidot (naloxon ↔ flumazenil) · `FF4` ufullstendig resept
(mangler styrke/dosering/varighet) eller feil legemiddel ved penicillinallergi (skal være
klindamycin/Dalacin) · `FF5` overse antikolinerg totalbelastning på multimorbid pasient · `FF6`
feil INR-håndtering (kirurgi ved for høy INR) eller feil CYP-interaksjonslogikk.

**Gerodonti:** `GF1` oppramsing uten kobling til den konkrete pasienten · `GF2` feil eller
manglende lovforankring (samtykkekompetanse, tvangsvilkår) · `GF3` sette for høyt ambisjonsnivå
uten hensyn til reservekapasitet/skrøpelighet · `GF4` overflatisk etikk uten kliniske eksempler ·
`GF5` overse munntørrhet/karies-sammenheng hos den polyfarmasi-belastede eldre.

### Sensor-kredittregler (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

> **Kildeforbehold:** OD4200-veiledningene er i stor grad **vurderingskriterier** (lister *hva
> som forventes berørt* og *hvor detaljert*, ikke ett fasitsvar), og periodonti/farmakologi/
> gerodonti mangler egne fasitdokumenter i arkivet. Sensorpremisser sluttet indirekte av
> oppgavelogikk og standardpensum er merket `(verifiser)`.

1. **Systematikk før konklusjon (kariologi).** Tann-for-tann røntgenbeskrivelse (marginalt
   bennivå, restaureringer, radiolusenser, kariesgrad) kreves FØR tentative diagnoser.
2. **Begrunnelse er obligatorisk.** Å navngi en diagnose/skade uten å vise til kliniske/
   radiologiske kjennetegn gir sterkt redusert uttelling (gjelder alle delfag; egen warning).
3. **Dobbeltdiagnose (endodonti).** Korrekt og begrunnet **både** pulpa- og periapikaldiagnose
   er kjernen; bare den ene = ufullstendig.
4. **Prognose tallfestes og begrunnes (endodonti).** ~95 % ved vital pulpa uten apikal
   patologi vs. ~75–85 % ved preoperativ apikal periodontitt `(verifiser)`, og **viktigste
   enkeltfaktor** (preoperativ apikal periodontitt) navngis.
5. **Fullstendig klassifisering (periodonti).** Stadium I–IV **og** grad A–C, med begrunnelse
   fra de vedlagte målene; prognose per tann med kort stikkordsbegrunnelse.
6. **Korrekt tolkning av kliniske mål (periodonti).** CAL som mål for festetap; retraksjon =
   reell festeposisjon avdekket, ikke tap.
7. **Presise fakta og korrekt resept (farmakologi).** Korte spørsmål krever korte, korrekte
   svar («ikke svar utenom oppgaven»); resept etter mal (legemiddel, styrke, dosering,
   varighet, gyldighet) og etter Helsedirektoratets retningslinje.
8. **Kobling anamnese → oral helse → plan (gerodonti).** Ingen frittstående oppramsing;
   ambisjonsnivå eksplisitt vurdert mot reservekapasitet/skrøpelighet; korrekt lovforankring
   (pasient- og brukerrettighetsloven kap. 4/4A); reflektert etikk med kliniske eksempler.
   Egne vurderinger premieres framfor ordrik gjengivelse (uttrykkelig i 2025-instruksen).
9. **Nivåskille (destillert):** *Bestått/nedre nivå* høster de sikre gjengangerne (korrekt
   klassifisert diagnose, standard behandlingsløp, de mest kjente mekanismene/graderings-
   systemene, korrekt resept). *Toppsjikt* leverer fullstendig og begrunnet klinisk
   resonnement, korrekt håndtering av anamnese-modifikatorer, tallfestet begrunnet prognose,
   presis lov-/HELFO-forankring, og ingen av de faste feilene i §5.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Fem parallelle delbøker, ikke én bok (hovedvalg).** Fordi de fem delfagene er separate
   deleksamener med egen sensorstab og ingen kompensasjon på tvers, er hoveddelene organisert
   PER DELFAG. Hvert delfag har egen drilllogikk og egen øvingseksamen i sitt eget format
   (Del 6). Speiler OD2200s to-blokk-arkitektur, men skalert til fem.
2. **Bildeavhengighet håndteres eksplisitt (OD4200-signatur).** Se BILDEAVHENGIGHETS-KONTRAKT
   over: kasus rekonstrueres tekstlig fra sensorveiledningenes klartekstfunn; hver
   bildeavhengig kapittel har en ærlig boks om at boka trener tolknings-RESONNEMENTET
   tekstlig; skjematiske egne figurer er ren støtte. Dette er hovedavviket fra OD2200
   (som var bildeuavhengig).
3. **«Symbol- og formelliste» → «Nøkkelfakta- og terminologiliste» (per delkapittel).**
   README-kravet omtolkes (faget er nesten formelfritt): hvert delkapittel får en
   `collapsible` **«Nøkkelfakta- og terminologiliste»** SIST i delkapitlet, som samler
   graderingsskalaer, diagnosekriterier, prognosetall, fluorkonsentrasjoner, legemiddeldoser,
   klassifikasjonstabeller og lovhjemler kapitlet krever utenat — pluss latin↔norsk der det
   er relevant. Åpner med notisen «Oppslagsverk — alt her forklares underveis i kapitlet.»
4. **Todelt drill.** Quiz = faktapresisjon og begrepsgjenkjenning med nære distraktorer;
   flashcards = fakta/mekanisme/diagnosekriterier/legemiddeldoser/lovhjemler utenat (fem
   faktatunge delfag → HØY flashcard-tetthet); `example`/`exercise` = kasus-momentlister
   (kariologi/endodonti/periodonti/gerodonti) og resept-/mekanisme-momenter (farmakologi).
5. **Eksamensvinkel PER DELFAG.** Fordi et tema kan gli mellom delfag (munntørrhet i både
   kariologi/saliva, farmakologi/antikolinergika og gerodonti/eldre), sier hver `tip`
   **Eksamensvinkel** eksplisitt hvilket delfag kapitlet trener, med hvilken form/frekvens og
   hva sensor ser etter i akkurat det delfaget.
6. **Farmakologi låner MED1100; gerodonti låner DNA-drofting.** Farmakologidelfaget bruker
   MED1100s mekanisme-essaylogikk (angrepspunkt → selektivitet → resistens/interaksjon) og
   vinkler alt odontologisk (LA, profylakse, resept fra tannlege, munntørrhet). Gerodonti-
   delfaget bruker DNA-droftings drøftings-/jus-DNA: `GE-DRØFT`/`GE-REFL` har momentliste-/
   disposisjonsfasit (ikke tallfasit), etikk-oppgaver får binær selvrettingsrubrikk, og
   lovhjemler forankres presist (pasient- og brukerrettighetsloven kap. 4/4A).
7. **Ingen oppdiktede tall/doser/hjemler.** Prognoseprosenter, fluorkonsentrasjoner,
   legemiddeldoser, INR-grenser og lovparagrafer merkes `(verifiser)` der usikre; alle kasus,
   pasientdata og resepter er NYSKREVNE (opphavsrett, §6).

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — hvilket delfag, form (sjangerkoder), frekvens/gjenganger-score,
   retteform, og hva sensor ser etter. Fylles fra Eksamensbelegg under — forfatteren finner
   IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav; lenk kun til kapitler som finnes), etterfulgt av `collapsible` **Nøkkelfakta-
   og terminologiliste** (per delkapittel, plasseres SIST — se pkt. 3 over; her nevnt i
   DNA-en fordi den er obligatorisk).
3. `text` **Oversikt/motivasjon** — kort (maks 2–3 avsnitt): hva temaet er, hvorfor og hvor
   ofte det testes. Gjerne rammet i et hverdagsanker/kasus FØR apparatet (README).
4. `definition` **Kjernefakta** — begreper, kriterier, graderingsskalaer, doser i EMNETS
   terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `text` **Klinisk resonnement / mekanismekjede** — nummerert trinnvis (kariologi: BW-
   beskrivelse → diagnose → plan; endodonti: dobbeltdiagnose → plan → prognose; periodonti:
   klassifisering → prognose → trinn; farmakologi: mekanisme → interaksjon/resept; gerodonti:
   anamnese → oral helse → ambisjonsnivå → plan → lov → etikk).
6. `warning` **Typiske feil** — feilkodene (KF/EF/PF/FF/GF) som gjelder temaet; inkl. eksplisitt
   «riktig svar uten begrunnelse = sterkt redusert uttelling» (sensor-kredittregel 2). For
   bildeavhengige kapitler: den ærlige bilde-boksen (BILDEAVHENGIGHETS-KONTRAKT pkt. 2).
7. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ modellert på reell sjanger.
   Kasus skrives som full-pott-momentliste (diagnose/klassifisering + begrunnelse + plan +
   prognose, delpoeng synlige). Bruk NYSKREVNE pasientdata.
8. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels), 2–4
   eksamensklone (vanskelig, samme sjanger/vekt, nyskrevne kasus). Alle med `solution`
   (momentliste) + `hints` (første hint = kriteriet/hjemmelen/første grep, ALDRI
   konklusjonen). Hver oppgave merket med sjangerkode + delfag. Én lett innstegsoppgave tidlig
   (README «Selvdiagnose»).
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående.

Drill- og øvingseksamenskapitlene (Del 6) har egne oppsett — se §3/§4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = delfag + form/frekvens (gjenganger-score X/3 av de tre
> lesbare sittingene per delfag) + sjangerkoder + prioritetsklasse. **Faktakontrakt** =
> kriterier/skalaer/doser/hjemler som SKAL med (flashcard-kilden). **Klinisk resonnement** =
> det delfagets svar skal levere trinnvis. **Kvote** = quiz/flashcards. Kryssbok-lenkene peker
> på eksisterende kapitler; `(verifiser lenke)` der usikker.

### Del 0 — Eksamenskart: fem deleksamener *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Fem deleksamener — slik testes OD4200
**id:** `od4200-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Hvorfor 8. semester avsluttes med fem separate fagspesifikke deleksamener
  (kariologi, endodonti, periodonti, farmakologi, gerodonti) med egen sensorstab og ingen
  kompensasjon på tvers — hva hver tester, hvordan de er bygd opp, at bildeavhengigheten
  håndteres tekstlig, og hvordan boka brukes som fem parallelle delbøker.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2023–2025). Skal formidle: (a) **fem
  delfag**, hver 4 t, egen sensorstab, karakter A–F (bestått/ikke bestått fra 2027); (b)
  **formene per delfag** (delfags-oversiktstabellen fra analysen §0: kariologi 6 oppg. + MCQ;
  endodonti 4–5 oppg.; periodonti 8–9 oppg. med ett gjennomgående kasus; farmakologi ~7–28
  blandet; gerodonti 4–5 oppg. med ett stort kasus); (c) **gjenganger-scoren** (av 3 lesbare
  sittinger per delfag); (d) **bildeavhengighets-kontrakten** (kasus rekonstrueres tekstlig;
  boka trener tolknings-resonnementet); (e) **kildeforbeholdet** (veiledningene er
  vurderingskriterier, ikke fasit; tre delfag mangler egne fasitdokumenter; to filer var
  billedskann). Prioritet: perfekt (meta).
- **Faktakontrakt:** delfags-oversiktstabellen (fagfelt/form/svartype/bildeavhengighet/retting
  per delfag); sjangerkatalogen (KA-/EN-/PE-/FA-/GE-koder) som studentens sjekkliste med
  frekvens per sjanger; prognosen for neste sett per delfag (analysen §7).
- **Innholdskontrakt:** Del 0-pakken (README): «Lite tid?»-boks (hurtigrute + LESEtid,
  ×1,5 for håndskrift), kildenote for frekvens-empirien (2023–2025-arkivet + forbehold),
  prosedyre-/sjangerkort på ÉN side (sjanger → én linjes oppskrift → tidsbudsjett → vanligste
  feil), deltidsrute (10–12 uker ~8 t/uke), «lese mye, skrive lite»-boks (skriv minst ÉN
  øvingseksamen for hånd på tid). **Karakter-realisme:** eksamen er bestått/ikke bestått fra
  2027 → «A-kandidat»-sjargong unngås eller rammes som bilde; minst én «bestått-på-marginen»-
  besvarelse per delfag i Del 6. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** 3–4 refleksjonsoppgaver av typen «gitt en 4-timers deleksamen i
  kariologi med to kasus + MCQ — sett opp tidsbudsjett og rekkefølge» og «avgjør av en
  oppgavetekst hvilket delfag og hvilken sjanger den tilhører».
- **Typiske feil:** tro at et sterkt delfag kompenserer et svakt (det gjør det ikke); glemme
  begrunnelse (sensor-kredittregel 2); vente at boka viser eksamensbildet (den rekonstruerer
  funnene tekstlig); undervurdere at fem delfag krever fem separate treningsløp.
- **Kvote:** 10 quiz / 8 flashcards.

#### Kapittel 0.2: Eksamensstrategi per delfag — de fem svarlogikkene
**id:** `od4200-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `od4200-0-1`

- **Kapitteltype:** eksamensteknikk (strateginote).
- **Description:** Hvordan man skårer i hver av de fem formene — systematisk BW → diagnose →
  plan (kariologi); dobbeltdiagnose → plan → tallfestet prognose (endodonti); klassifisering
  → prognose → Trinn 1–4 (periodonti); presise fakta + korrekt resept + interaksjonslogikk
  (farmakologi); anamnese → oral helse → ambisjonsnivå → plan → lov → etikk (gerodonti) — og
  de ni sensor-kredittreglene, med begrunnelseskravet som gjennomgående strateginote.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile 2023→. Prioritet:
  perfekt (meta). Skal operasjonalisere de ni sensor-kredittreglene i §2. **Karaktersjargong
  rammes** (bestått/ikke bestått fra 2027).
- **Faktakontrakt:** de ni kredittreglene; de fem svarlogikk-malene i kortform; «systematikk
  før konklusjon»-regelen (kariologi); dobbeltdiagnose-kravet (endodonti); stadium+grad-
  kravet (periodonti); resept-malen (farmakologi); anamnese→plan→lov→etikk-kjeden (gerodonti).
- **Modelloppgaver:** samme kariologispørsmål besvart på to nivåer (usystematisk oppramsing
  vs. systematisk BW → begrunnet diagnose → plan) med margnotat om hvor poengene faller; en
  endodontidiagnose vist «bare pulpa» (EF1-felle) vs. full dobbeltdiagnose.
- **Typiske feil:** `KF1` (usystematisk), `KF4`/`EF1` (uten begrunnelse / ufullstendig
  diagnose), `PF1` (stadium uten grad), `FF4` (ufullstendig resept), `GF1` (oppramsing uten
  kasuskobling).
- **Kvote:** 12 quiz / 10 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 6).

### Del 1 — Kariologi: diagnostikk, gradering og forebygging *(prioritet: PERFEKT — 4 t deleksamen)*

#### Kapittel 1.1: Pasientkasus og systematisk røntgenbeskrivelse
**id:** `od4200-1-1` · **number:** 1.1 · **estimatedMinutes:** 70 · **prerequisites:** `od4200-0-2`

- **Kapitteltype:** tema (kariologi — kasusdrill). **Bildeavhengig → ærlig bilde-boks
  obligatorisk.**
- **Description:** Kjernesjangeren: systematisk tann-for-tann-beskrivelse av bitewing-røntgen
  og kliniske foto (marginalt bennivå, restaureringer, radiolusenser, kariesgrad 1–5) →
  tentative diagnoser på pasient- og tannnivå → non-operativ vs. operativ plan + materialvalg
  (kompositt) + spesielle hensyn (Marevan/hjerteklaff → endokardittprofylakse; HELFO).
- **Eksamensbelegg:** Kariologi, KA-KASUS. **3/3** (kjernen i oppg. 1–2, to store kasus hver
  sitting). Behandlingsplan non-op vs. op + materialvalg **3/3**. HELFO §5-6 punkt 9 **2/3**.
  Prioritet: perfekt. Gjengangerkasus: Marevan/hjerteklaff-pasient, erosjons-/isingspasient,
  stråleskadet munntørrhetspasient (bruk NYSKREVNE varianter).
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Nøkkelfakta- og terminologiliste:**
  kariesgrad 1–5; systematisk BW-avlesningsrekkefølge; non-op/op-terskler; HELFO §5-6 punkt 9-
  kriteriene.
- **Faktakontrakt (flashcard-kilde):** kariesgrad 1–5; radiologiske kjennetegn (emalje- vs.
  dentinlesjon, marginalt bennivå); non-operative kriterier (grad 1–3, intakt overflate, god
  hygiene) vs. operative; materialvalg (kompositt); endokardittprofylakse-indikasjon
  `(verifiser)`; HELFO §5-6 punkt 9 (patologisk tap ved attrisjon/erosjon; krav om påvirket
  estetikk *og* funksjon).
- **Klinisk resonnement:** (1) beskriv systematisk tann-for-tann; (2) still tentative
  diagnoser med radiologisk/klinisk begrunnelse; (3) velg non-op vs. op per tann; (4)
  materialvalg + hensyn (Marevan, profylakse, HELFO).
- **Typiske feil:** `KF1` (usystematisk / ingen tentative diagnoser), `KF4` (uten begrunnelse),
  `KF5` (rett til operativt), `KF8` (glemme HELFO). Ærlig bilde-boks.
- **Modellsvar:** ett enkelt (beskriv 2 tenner → diagnose) og ett på eksamensnivå (full
  NYSKREVET kasus: 45-årig antikoagulert pasient, BW beskrevet i klartekst → diagnoser → plan).
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 1.2: Erosjon, slitasje og gradering (VEDE/BEWE)
**id:** `od4200-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `od4200-1-1`

- **Kapitteltype:** tema (kariologi). **Bildeavhengig → ærlig bilde-boks.**
- **Description:** Erosjon/attrisjon/abrasjon (og kombinert etiologi), og de to graderings-
  systemene: VEDE (0–5, flatenivå, dentinblotting-terskler) og BEWE (0–3, per sekstant), med
  korrekt skalanivå og etiologiutredning; dentin hypersensitivitet/ising.
- **Eksamensbelegg:** Kariologi, KA-GRAD + KA-DEF. Erosjon/slitasje med gradering **3/3**.
  Dentin hypersensitivitet/ising **2/3**. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Nøkkelfakta- og terminologiliste:**
  VEDE 0–5 (flatenivå) vs. BEWE 0–3 (per sekstant); erosjon/attrisjon/abrasjon-kjennetegn;
  ising-utredning.
- **Faktakontrakt (flashcard-kilde):** VEDE-skalaen (0–5, flatenivå, dentinblotting); BEWE
  (0–3, per sekstant); erosjon (kjemisk) vs. attrisjon (tann-mot-tann) vs. abrasjon (mekanisk
  ytre); kombinert slitasjeetiologi; dentin hypersensitivitet (hydrodynamisk teori, utredning,
  behandling).
- **Klinisk resonnement:** identifiser etiologi → velg riktig skala (VEDE flatenivå vs. BEWE
  sekstant) → gradér korrekt → koble til non-op/op og forebygging.
- **Typiske feil:** `KF2` (feil skalanivå / blande systemene), `KF3` (forveksle erosjon/
  attrisjon/abrasjon). Ærlig bilde-boks.
- **Modellsvar:** «Gradér et beskrevet erosjonstilfelle med både VEDE og BEWE og begrunn
  skalavalget» (NYSKREVET).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 1.3: Fluor og remineralisering
**id:** `od4200-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-1-2`

- **Kapitteltype:** tema (kariologi — mekanisme).
- **Description:** Fluoriders lokale virkningsmekanisme (ikke systemisk pre-frembrudd),
  fastbundet fluorapatitt vs. løstbundet CaF₂, kritisk pH, konsentrasjoner og applikasjon;
  saliva som remineraliserer.
- **Eksamensbelegg:** Kariologi, KA-DEF. Fluoriders virkningsmekanisme **3/3**. Saliva/
  remineralisering **3/3**. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2; [Syrer og baser / pH](/kjemi1/kjemi1-6-1)
  `(verifiser lenke)`. `collapsible` **Nøkkelfakta- og terminologiliste:** fluorkonsentrasjoner;
  kritisk pH; fluorapatitt vs. CaF₂; saliva-funksjoner.
- **Faktakontrakt (flashcard-kilde):** lokal hovedeffekt; fluorapatitt (fastbundet) vs.
  CaF₂-lignende (løstbundet); kritisk pH; konsentrasjoner — Duraphat 22 600 ppm, 2 % NaF
  9 200 ppm, tannpasta 1 000–1 500 ppm, F-skyll 230/920 ppm `(verifiser tallene)`; SnF₂/TiF₄
  vs. NaF; frekvens/applikasjonstid/pH øker effekt; saliva-funksjoner (remineralisering via
  staterin/prolinrike proteiner/Ca-fosfat, buffer, clearance, smøring); sialometri (stimulert/
  ustimulert, bufferkapasitet); munntørrhetsårsaker.
- **Klinisk resonnement:** forklar fluors lokale mekanisme → velg produkt/konsentrasjon etter
  risiko → koble til remineralisering og forebyggingsprogram.
- **Typiske feil:** `KF6` (lokal vs. utdatert systemisk pre-frembruddseffekt), `KF7`
  (dentinlesjon når det gjelder emalje/white spot).
- **Modellsvar:** «Forklar hvorfor fluor virker lokalt og hvorfor CaF₂-reservoaret er viktig
  ved lav pH» (KA-DEF).
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 1.4: Kariesforebygging — basis, tillegg, populasjon vs. risikogruppe
**id:** `od4200-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `od4200-1-3`

- **Kapitteltype:** tema (kariologi — kunnskapsoppgave).
- **Description:** Basisprogram vs. tilleggsprogram; populasjons- vs. risikogruppebasert
  forebygging; de klassiske kariesstudiene som evidensgrunnlag.
- **Eksamensbelegg:** Kariologi, KA-KUNN. Forebygging basis/tillegg + populasjon/risikogruppe
  **3/3**. Klassiske kariesstudier **1/3**. Prioritet: perfekt (forebygging) / kunne (studier).
- **Forkunnskaper/kryssbok:** kap. 1.3. `collapsible` **Nøkkelfakta- og terminologiliste:**
  basis vs. tillegg; populasjon vs. risikogruppe; kariesstudiene + hovedfunn.
- **Faktakontrakt (flashcard-kilde):** basisprogram (alle) vs. tilleggsprogram (risiko);
  populasjonsstrategi vs. høyrisikostrategi; klassiske studier: Vipeholm (frekvens > mengde),
  Turku (xylitol ~85 % ↓, fruktose ~32 % ↓) `(verifiser tallene)`, Hopewood House (lavsukker →
  mindre karies), Tristan da Cunha (moderne kost → mer karies).
- **Klinisk resonnement:** kartlegg risiko → velg populasjons- vs. risikorettet tiltak →
  begrunn med studieevidens.
- **Typiske feil:** oppramse tiltak uten å skille basis/tillegg eller populasjon/risiko;
  gjengi studie uten hovedfunn.
- **Modellsvar:** «Nevn tre klassiske kariesstudier og deres hovedfunn, og bruk dem til å
  begrunne et forebyggingsopplegg for en høyrisikopasient» (KA-KUNN).
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 1.5: Karieshistopatologi og håndtegning
**id:** `od4200-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-1-4`

- **Kapitteltype:** tema (kariologi — tegning/struktur). **Håndtegning → egen illustrert
  forklaringsside + tekstbeskrivelse av soner.**
- **Description:** Grad 4-lesjonens fire soner og white spot-/subsurface-lesjonens lag, med
  sonenavn og trekantform — håndtegningsoppgaven trenes som tekstbeskrivelse av sonene +
  skjematisk egen figur.
- **Eksamensbelegg:** Kariologi, KA-TEGN. Karieshistopatologi (grad 4, 4 soner) / white spot
  **2/3**. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.3. `collapsible` **Nøkkelfakta- og terminologiliste:**
  grad 4-sonene; white spot-lagene; trekantform.
- **Faktakontrakt (flashcard-kilde):** grad 4 fra emalje-dentin-grensen innover: destruksjons-/
  bakteriesone → penetrasjonssone → demineralisasjonssone → translusent (sklerotisk) sone;
  reaksjonsdentin mot pulpa. White spot: intakt overflate (<5 % porevolum), body of lesion
  (5–25 %), mørk sone, translusent sone; trekant med basis mot overflaten `(verifiser
  porevolum-tallene)`.
- **Klinisk resonnement / tegneprosedyre:** navngi sonene i rekkefølge → beskriv hva som
  kjennetegner hver → koble til om lesjonen er reversibel (white spot) eller ikke.
- **Typiske feil:** `KF7` (dentinlesjon med bakterieinvasjon når oppgaven gjelder emalje/
  white spot); glemme meso-/sonelag; ufullstendig soneliste.
- **Modellsvar:** «Beskriv (og skjematiser) de fire sonene i en grad 4-karieslesjon fra
  emalje-dentin-grensen og innover» (KA-TEGN).
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 1.6: Diagnostikkvalitet, kariesprogresjon og DMF
**id:** `od4200-1-6` · **number:** 1.6 · **estimatedMinutes:** 45 · **prerequisites:** `od4200-1-5`

- **Kapitteltype:** tema (kariologi — kunnskapsoppgave + MCQ-mat).
- **Description:** Reliabilitet vs. validitet, sensitivitet/spesifisitet (klinisk nytte ved
  ≥0,8), kariesprogresjon (emalje→dentin), DMF(T/S)-systemet, restaureringers levetid.
- **Eksamensbelegg:** Kariologi, KA-KUNN + KA-MCQ. Diagnostikkvalitet **2/3**. Kariesprogresjon
  **2/3**. DMF(T/S) + epidemiologiske studier **2/3**. Restaureringers levetid **1/3**.
  Prioritet: kunne. **KA-MCQ-bolken (2024: 17 spm à 1 p) hentes fra hele Del 1.**
- **Forkunnskaper/kryssbok:** kap. 1.4. `collapsible` **Nøkkelfakta- og terminologiliste:**
  reliabilitet/validitet; sensitivitet/spesifisitet; DMF-komponenter; progresjonstall.
- **Faktakontrakt (flashcard-kilde):** reliabilitet vs. validitet; sensitivitet/spesifisitet
  (nyttegrense ≥0,8) `(verifiser)`; kariesprogresjon (emalje→dentin ~8 år median, halvveis i
  dentin ~3,4 år) `(verifiser tallene)`; DMF(T/S) med aldersregler og komponenter DT/DS,
  MT/MS, FT/FS; årsaker til fyllingsutskiftning.
- **Klinisk resonnement:** vurder en diagnostisk metodes reliabilitet/validitet → tolk
  sensitivitet/spesifisitet → koble til progresjonsvindu og behandlingsbeslutning.
- **Typiske feil:** blande reliabilitet/validitet; blande sensitivitet/spesifisitet;
  distraktor-felle i MCQ som gjengir bokas presisjon som «galt» (README).
- **Modellsvar:** «Forklar forskjellen på reliabilitet og validitet og hvorfor sensitivitet/
  spesifisitet ≥0,8 kreves for klinisk nytte» + en NYSKREVET MCQ-bolk (stokket fasit).
- **Kvote:** 14 quiz / 18 flashcards.

**Prøve-kvote Del 1:** 4 prøver (id `od4200-1-prove`): (1) *Kasus og røntgenbeskrivelse* —
systematisk BW → diagnoser → non-op/op-plan (KA-KASUS). (2) *Gradering og slitasje* — VEDE/
BEWE + erosjon/attrisjon/abrasjon (KA-GRAD). (3) *Fluor og forebygging* — fluormekanisme +
basis/tillegg + kariesstudie (KA-DEF/KA-KUNN). (4) *Blandet kariologi + MCQ-bolk* —
histopatologi + diagnostikkvalitet + stokket MCQ (KA-TEGN/KA-MCQ).

### Del 2 — Endodonti: diagnose, behandling og prognose *(prioritet: PERFEKT — 4 t deleksamen)*

#### Kapittel 2.1: Endodontisk diagnose — pulpa og periapikal
**id:** `od4200-2-1` · **number:** 2.1 · **estimatedMinutes:** 65 · **prerequisites:** `od4200-0-2`

- **Kapitteltype:** tema (endodonti — diagnosekjerne). **Bildeavhengig → ærlig bilde-boks.**
- **Description:** Dobbeltdiagnosen (pulpadiagnose + periapikaldiagnose) fra kasus +
  apikalrøntgen/fistulogram, med sensibilitets-/vitalitetstesting — kjernen i hver sitting.
- **Eksamensbelegg:** Endodonti, EN-KASUS. Still endodontisk diagnose (pulpa + periapikal)
  **3/3**. Sensibilitets-/vitalitetstesting **3/3**. Prioritet: perfekt. **Sensor-kredittregel
  3 (dobbeltdiagnose).**
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Nøkkelfakta- og terminologiliste:**
  pulpa- og periapikaldiagnoser; kuldetest/EPT (hva de måler).
- **Faktakontrakt (flashcard-kilde):** pulpadiagnoser (normal/reversibel/irreversibel pulpitt,
  nekrotisk pulpa); periapikaldiagnoser (frisk apikal, akutt/kronisk apikal periodontitt,
  periapikal abscess med/uten fistel, kondenserende ostitt); kuldetest og EPT måler sensorisk
  nervefunksjon (vitalitet); tilleggstester (varmetest, selektiv anestesi, frakturfinner,
  boretest).
- **Klinisk resonnement:** symptom + testrespons + røntgenfunn → pulpadiagnose → periapikal-
  diagnose (begge!) → begrunn hver.
- **Typiske feil:** `EF1` (bare den ene diagnosen), `KF4`-analog (uten begrunnelse). Ærlig
  bilde-boks.
- **Modellsvar:** NYSKREVET kasus (symptom + kuldetest negativ + apikal radiolusens beskrevet
  i klartekst) → dobbeltdiagnose med begrunnelse.
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 2.2: Behandlingsplan, rotanatomi og prognose
**id:** `od4200-2-2` · **number:** 2.2 · **estimatedMinutes:** 65 · **prerequisites:** `od4200-2-1`

- **Kapitteltype:** tema (endodonti — plan/prognose). **Bildeavhengig → ærlig bilde-boks.**
- **Description:** Total behandlingsplan for rotbehandling + toppfylling, rotanatomi/kanaltall,
  og tallfestet begrunnet prognose med viktigste enkeltfaktor — anamnese-modifikatorer.
- **Eksamensbelegg:** Endodonti, EN-KASUS. Behandlingsplan + toppfylling **3/3**. Prognose +
  viktigste enkeltfaktor **3/3**. Rotanatomi/kanaltall **3/3**. Systemsykdom/anamnese og
  prognose **2/3**. Prioritet: perfekt. **Sensor-kredittregel 4 (prognose tallfestes).**
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Nøkkelfakta- og terminologiliste:**
  prognosetall; kanaltall per tann; toppfyllingsvalg.
- **Faktakontrakt (flashcard-kilde):** prognose ~95 % ved vital pulpa uten apikal patologi vs.
  ~75–85 % ved preoperativ apikal periodontitt (den dokumenterte enkeltfaktoren)
  `(verifiser tallene)`; diabetes senker tilheling; anatomi — overkjeve 1. molar 3 røtter /
  3–4 kanaler (MB, MB2, DB, P), MB2 >80 %, premolar oftest 2 kanaler `(verifiser MB2-frekvens)`;
  toppfylling (kuspedekke/krone ved svekket tann).
- **Klinisk resonnement:** diagnose → behandlingsplan → kanaltall/anatomi → tallfestet prognose
  + navngi viktigste enkeltfaktor → toppfylling → juster for anamnese-modifikator.
- **Typiske feil:** `EF2` (overse preoperativ apikal periodontitt som prognose-senker), `EF3`
  (glemme MB2), `EF6` (ikke fange opp anamnese-modifikator). Ærlig bilde-boks.
- **Modellsvar:** NYSKREVET kasus (diabetiker, overkjevemolar med apikal periodontitt) → plan,
  kanaltall, tallfestet prognose med begrunnelse.
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 2.3: Irrigasjon og akuttbehandling
**id:** `od4200-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `od4200-2-2`

- **Kapitteltype:** tema (endodonti — prosedyre).
- **Description:** Irrigasjonsregime (NaOCl + EDTA — sekvens og begrunnelse) og akuttbehandling
  (pulpotomi/pulpektomi) — prosedyrer skal begrunnes både hvordan og hvorfor.
- **Eksamensbelegg:** Endodonti, EN-PROS. Irrigasjon **2/3**. Pulpotomi som akuttbehandling
  **1/3**. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.2. `collapsible` **Nøkkelfakta- og terminologiliste:**
  NaOCl/EDTA-roller og sekvens; akuttalternativer.
- **Faktakontrakt (flashcard-kilde):** NaOCl 0,5–1 % (organisk vev, bakterier; buffret Dakin
  ved pH 9); 17 % EDTA (chelator, fjerner smearlagets uorganiske del); klorhexidin kun ved
  revisjon — aldri direkte etter NaOCl (PCA-utfelling); pulpotomi (~89 % smertelindring ved
  pulpitt) `(verifiser)`; pulpektomi; IRM som midlertidig.
- **Klinisk resonnement:** velg irrigant → riktig sekvens (NaOCl hele seansen, EDTA til slutt)
  → begrunn (organisk vev vs. smearlag) → velg akuttbehandling etter diagnose.
- **Typiske feil:** `EF5` (feil sekvens / blande NaOCl og klorhexidin → PCA-utfelling).
- **Modellsvar:** «Beskriv irrigasjonsregimet og begrunn hvorfor NaOCl brukes hele seansen og
  EDTA til slutt» (EN-PROS).
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 2.4: Differensialdiagnostikk — resorpsjon, cyste/granulom, revisjon vs. kirurgi
**id:** `od4200-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `od4200-2-3`

- **Kapitteltype:** tema (endodonti — differensialdiagnose).
- **Description:** Intern vs. ekstern cervikal resorpsjon; radikulær cyste vs. periapikalt
  granulom; ortograd revisjon vs. apisektomi — når hva er indisert.
- **Eksamensbelegg:** Endodonti, EN-DIFF. Revisjon vs. apikal kirurgi **2/3**. Rotresorpsjon
  **1/3**. Radikulær cyste vs. granulom **1/3**. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.2. `collapsible` **Nøkkelfakta- og terminologiliste:**
  resorpsjonstyper; cyste vs. granulom; revisjon vs. apisektomi-indikasjoner.
- **Faktakontrakt (flashcard-kilde):** intern (vital pulpa involvert) vs. ekstern cervikal
  resorpsjon (ECRR, pulpa vital); klast-/odontoklastceller; CBCT-diagnostikk; granulom
  (granulomatøst vev + fibrøs kapsel) vs. radikulær cyste (ekte vs. lommecyste); sikker skille
  kun histologisk; ortograd revisjon ved sekundær infeksjon; apisektomi ved persisterende/
  ekstraradikulær infeksjon, frakturert instrument, store stifter, cyster.
- **Klinisk resonnement:** skille diagnoser på funn → velg revisjon vs. kirurgi etter årsak →
  ta forbehold om histologisk verifikasjon.
- **Typiske feil:** `EF4` (apisektomi for tidlig), `EF7` (påstå cyste sikkert uten histologi).
- **Modellsvar:** «Når velger du ortograd revisjon framfor apisektomi? Begrunn» (EN-DIFF).
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 2.5: Del 2 — kortsvar og matching
**id:** `od4200-2-5` · **number:** 2.5 · **estimatedMinutes:** 40 · **prerequisites:** `od4200-2-4`

- **Kapitteltype:** tema (endodonti — kortsvarsdrill).
- **Description:** Den avsluttende «del 2»: nummerert liste med korte fasitsvar (matching-/
  fyllinnstype) fra hele endodontipensumet — 10 p.
- **Eksamensbelegg:** Endodonti, EN-DEL2. Fast innslag hvert sett (del 2, 10 p). Prioritet:
  perfekt (høster sikre poeng). Trekker fra hele Del 2.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.4. `collapsible` **Nøkkelfakta- og terminologiliste:**
  de vanligste kortsvar-fasitene (f.eks. «vertikal rotfraktur», «høy pH», «fjerne smearlaget»).
- **Faktakontrakt (flashcard-kilde):** ett-ords/kort fasitsvar-repertoar på tvers av
  diagnose, prosedyre, anatomi, prognose, irrigasjon.
- **Klinisk resonnement:** gjenkjenn nøkkelbegrep → gi presist kort svar («ikke svar utenom
  oppgaven»).
- **Typiske feil:** upresise/lange svar der kort kreves; blande nabobegrep.
- **Modellsvar:** en NYSKREVET del 2-liste (10 nummererte kortsvar) med fasit + stokket
  rekkefølge.
- **Kvote:** 14 quiz / 18 flashcards.

**Prøve-kvote Del 2:** 4 prøver (id `od4200-2-prove`): (1) *Dobbeltdiagnose* — pulpa +
periapikal fra beskrevet kasus (EN-KASUS). (2) *Plan og prognose* — behandlingsplan + kanaltall
+ tallfestet prognose (EN-KASUS). (3) *Prosedyre og differensialdiagnose* — irrigasjon +
resorpsjon/cyste/revisjon (EN-PROS/EN-DIFF). (4) *Del 2-kortsvar* — nummerert matching-liste
(EN-DEL2, stokket fasit).

### Del 3 — Periodonti: klassifisering og behandlingsstige *(prioritet: PERFEKT — 4 t deleksamen)*

#### Kapittel 3.1: Definisjon, klassifisering og prognose
**id:** `od4200-3-1` · **number:** 3.1 · **estimatedMinutes:** 65 · **prerequisites:** `od4200-0-2`

- **Kapitteltype:** tema (periodonti — klassifiseringskjerne). **Bildeavhengig (perio-skjema/
  helstatus-rtg) → ærlig bilde-boks.**
- **Description:** Definisjon av periodontitt (vs. gingivitt), full diagnose med 2017-
  klassifiseringen (stadium I–IV + grad A–C), og prognosevurdering per tann — kjernen i det
  gjennomgående kasuset.
- **Eksamensbelegg:** Periodonti, PE-KASUS. Definisjon + full klassifisering **3/3**.
  Prognosevurdering per tann **3/3**. Prioritet: perfekt. **Sensor-kredittregel 5
  (stadium OG grad).**
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Nøkkelfakta- og terminologiliste:**
  2017-klassifiseringen (stadium/grad-kriterier); prognosekategorier.
- **Faktakontrakt (flashcard-kilde):** periodontitt vs. gingivitt (på pasientnivå); stadium
  I–IV (alvorlighet/kompleksitet), grad A–C (progresjonshastighet); BoP; prognosekategorier
  (god/usikker/dårlig/ex) med begrunnelse.
- **Klinisk resonnement:** avgjør gingivitt vs. periodontitt → sett stadium (fra vedlagte mål)
  → sett grad → prognose per tann med kort begrunnelse.
- **Typiske feil:** `PF1` (stadium uten grad / uten begrunnelse). Ærlig bilde-boks.
- **Modellsvar:** NYSKREVET kasus (perio-skjema beskrevet i klartekst) → full klassifisering +
  prognose for utvalgte tenner.
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 3.2: Behandlingsstigen Trinn 1–4 og reevaluering
**id:** `od4200-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `od4200-3-1`

- **Kapitteltype:** tema (periodonti — behandlingsløp). **Bildeavhengig → ærlig bilde-boks.**
- **Description:** Det periodontale behandlingsløpet Trinn 1→4 med reevaluering, og
  måletolkning (retraksjon etter Trinn 2, PD vs. CAL) — pasienten følges kronologisk.
- **Eksamensbelegg:** Periodonti, PE-KASUS + PE-MÅL. Behandlingsløpet Trinn 1–4 + reevaluering
  **3/3**. Retraksjon etter Trinn 2 (PD vs. CAL) **3/3**. Lommemåling (trykk, usikkerhet)
  **2/3**. Prioritet: perfekt. **Sensor-kredittregel 6 (CAL = festetap; retraksjon ≠ tap).**
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Nøkkelfakta- og terminologiliste:**
  Trinn 1–4-innhold; PD/CAL/retraksjon; lommemåletrykk.
- **Faktakontrakt (flashcard-kilde):** Trinn 1 (atferd/risikofaktorer), Trinn 2 (subgingival
  instrumentering — hånd/ultralyd), Trinn 3 (residuallommer, evt. kirurgi/regenerasjon),
  Trinn 4 (støttebehandling/SPT); reevaluering ~2 mnd etter Trinn 2 `(verifiser)`; PD vs. CAL
  (CAL best for festetap); retraksjon = avdekket festeposisjon, ikke nytt tap; lommemåling
  ~0,25 N `(verifiser)`; mobilitet grad 0–3.
- **Klinisk resonnement:** planlegg hvert trinn → tolk reevalueringen (PD ned pga. retraksjon,
  CAL uendret = ikke nytt festetap) → beslutt Trinn 3-behov.
- **Typiske feil:** `PF2` (retraksjon tolket som festetap), `PF3` (PD/CAL forvekslet), `PF4`
  (hoppe over stigen). Ærlig bilde-boks.
- **Modellsvar:** «Forklar hvorfor PD synker og gingiva trekker seg etter Trinn 2, og hvorfor
  dette ikke er nytt festetap» (PE-MÅL).
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 3.3: Risikofaktorer, bendefekter og tannstein
**id:** `od4200-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-3-2`

- **Kapitteltype:** tema (periodonti — fagteori + figur). **Bendefekt-figur (dra-og-slipp) →
  egen illustrert forklaringsside + tekstbeskrivelse.**
- **Description:** Risikofaktorer (røyking, diabetes/HbA1c, genetikk), bendefekt-typer
  (dra-og-slipp), tannsteindannelse trinnvis, furkasjonsgrader.
- **Eksamensbelegg:** Periodonti, PE-TEORI + PE-FIG. Risikofaktorer røyking/diabetes **3/3**.
  Bendefekter navnsatt (dra-og-slipp) **3/3**. Tannsteindannelse **2/3**. Furkasjonsgrader
  **2/3**. HbA1c-kobling **1/3**. Genetikk **1/3**. Prioritet: perfekt (risiko/bendefekt) /
  kunne (resten).
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Nøkkelfakta- og terminologiliste:**
  risikofaktormekanismer; bendefekt-typer; tannstein-trinn; furkasjonsgrader.
- **Faktakontrakt (flashcard-kilde):** røyking og diabetes (likheter/forskjeller, mekanismer);
  toveis diabetes-periodontitt (periodontal behandling senker HbA1c ~0,3–0,4 %-poeng)
  `(verifiser)`; bendefekter — suprabony/infrabony (intrabony), en-/to-/tre-veggs, krater;
  tannstein pellikel → plakk → mineralisering → supra- → subgingival calculus; furkasjonsgrad
  I–III og hvorfor dårligere prognose.
- **Klinisk resonnement:** koble risikofaktor til mekanisme og prognose → navnsett bendefekt
  fra beskrivelse → koble furkasjon til prognose.
- **Typiske feil:** `PF5` (avhengige observasjoner som uavhengige), `PF6` (feil furkasjons-
  gradering / manglende prognosekobling). Ærlig figur-boks.
- **Modellsvar:** «Navnsett tre beskrevne bendefekter og forklar hvorfor en tre-veggs har
  bedre regenerasjonsprognose enn en krater» (PE-FIG/PE-TEORI).
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 3.4: Protetisk rehabilitering, HELFO og fagteori
**id:** `od4200-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `od4200-3-3`

- **Kapitteltype:** tema (periodonti — protetikk/HELFO/øvrig teori).
- **Description:** Protetisk rehabilitering av tannluke + HELFO/innslagspunkt; endo-perio-
  lesjon; prevalens.
- **Eksamensbelegg:** Periodonti, PE-HELFO + PE-TEORI. Protetisk rehabilitering + HELFO **2/3**.
  Endo-perio-lesjon **1/3**. Prevalens **1/3**. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 3.2; kap. 2.1 (endodiagnose, for endo-perio).
  `collapsible` **Nøkkelfakta- og terminologiliste:** HELFO-innslagspunkt; endo-perio-
  utredning.
- **Faktakontrakt (flashcard-kilde):** protetiske erstatningsvalg etter periodontal stabilitet;
  HELFO innslagspunkt/takster for periodontal behandling og tannerstatning `(verifiser)`;
  endo-perio-lesjon (undersøkelser); prevalens av periodontitt.
- **Klinisk resonnement:** oppnå periodontal stabilitet → velg protetisk erstatning → forankre
  i HELFO der grunnlag finnes.
- **Typiske feil:** `PF4` (protetikk før stabilitet), `KF8`-analog (glemme HELFO-forankring).
- **Modellsvar:** «Foreslå protetisk erstatning for en tannluke etter oppnådd periodontal
  stabilitet og forankre i HELFO» (PE-HELFO).
- **Kvote:** 12 quiz / 18 flashcards.

#### Kapittel 3.5: Genetikk, prevalens og endo-perio-lesjon
**id:** `od4200-3-5` · **number:** 3.5 · **estimatedMinutes:** 40 · **prerequisites:** `od4200-3-4`

- **Kapitteltype:** tema (periodonti — fagteori, lavfrekvent).
- **Description:** Genetikk og periodontal sykdom, prevalens av periodontitt (og hvorfor så
  høy), og endo-perio-lesjonens differensialdiagnostikk — de lavfrekvente fagteoritemaene som
  runder av periodontidelfaget.
- **Eksamensbelegg:** Periodonti, PE-TEORI. Genetikk **1/3**. Prevalens **1/3**. Endo-perio-
  lesjon **1/3**. HbA1c (hva det er + effekt av behandling) **1/3**. Prioritet: kjenne
  (lavfrekvent, «bør kjenne til»).
- **Forkunnskaper/kryssbok:** kap. 3.3; kap. 2.1 (endodiagnose, for endo-perio-differensiering).
  `collapsible` **Nøkkelfakta- og terminologiliste:** genetiske risikomarkører; prevalenstall;
  endo-perio-utredning; HbA1c.
- **Faktakontrakt (flashcard-kilde):** genetikk og periodontal sykdom (arvelighet,
  risikomarkører); prevalens av periodontitt (høy, hvorfor); HbA1c (hva det er + at periodontal
  behandling reduserer det ~0,3–0,4 %-poeng) `(verifiser)`; endo-perio-lesjon (primær endo/
  primær perio/kombinert; undersøkelser: sensibilitetstest + sondering).
- **Klinisk resonnement:** vurder genetisk/familiær risiko → tolk prevalens i populasjon → skille
  endo-perio-opphav via sensibilitetstest og sondering.
- **Typiske feil:** `PF3` (feil mål), `EF1`-analog (glemme endo-komponenten i endo-perio);
  behandle lavfrekvent stoff som høyfrekvent (README: «bør kjenne til»-merking).
- **Modellsvar:** «Hvordan skiller du en primær endodontisk fra en primær periodontal lesjon
  ved en tann med både dyp lomme og apikal radiolusens?» (PE-TEORI).
- **Kvote:** 14 quiz / 22 flashcards.

**Prøve-kvote Del 3:** 4 prøver (id `od4200-3-prove`): (1) *Klassifisering og prognose* —
stadium+grad + prognose per tann (PE-KASUS). (2) *Behandlingsstige og måletolkning* — Trinn
1–4 + PD/CAL/retraksjon (PE-KASUS/PE-MÅL). (3) *Risiko og bendefekter* — røyking/diabetes +
bendefekt-navnsetting (PE-TEORI/PE-FIG). (4) *Protetikk, HELFO og blandet* — erstatning +
innslagspunkt + endo-perio.

### Del 4 — Farmakologi for tannleger *(prioritet: PERFEKT — 4 t deleksamen)*

#### Kapittel 4.1: Antibiotika — mekanisme, resistens og selektivitet
**id:** `od4200-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `od4200-0-2`

- **Kapitteltype:** tema (farmakologi — mekanisme). Låner MED1100s mekanisme-essaylogikk.
- **Description:** Antibiotikas angrepspunkter, bakteriostatisk/baktericid, tids- vs.
  konsentrasjonsavhengig drap, betalaktamresistens/klavulansyre, selektiv toksisitet.
- **Eksamensbelegg:** Farmakologi, FA-MEK + FA-KORT. Antibiotika virkemekanismer **3/3**.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Antibiotika og resistens](/med1100/med1100-...)
  `(verifiser lenke)`. `collapsible` **Nøkkelfakta- og terminologiliste:** angrepspunkter;
  baktericid/statisk; betalaktamresistens.
- **Faktakontrakt (flashcard-kilde):** angrepspunkter (celleveggsyntese/transpeptidase,
  proteinsyntese, DNA-gyrase/topoisomerase, folatsyntese); bakteriostatisk vs. baktericid;
  tids- (penicillin) vs. konsentrasjonsavhengig (aminoglykosid) drap; betalaktamase/
  klavulansyre; ESBL; selektiv toksisitet; gramnegativ ytre membran; anaerobe (metronidazol);
  tetrasyklin kontraindisert <12 år/gravide; aminoglykosid oto-/nefrotoksisk.
- **Klinisk resonnement:** velg angrepspunkt → baktericid/statisk + doseavhengighet →
  resistensmekanisme → selektivitet.
- **Typiske feil:** `FF2` (baktericid/statisk + doseavhengighet forvekslet).
- **Modellsvar:** «Forklar hvorfor penicillin er tidsavhengig og aminoglykosid
  konsentrasjonsavhengig, og hva det betyr for dosering» (FA-MEK).
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 4.2: Antibiotikaprofylakse og reseptskriving
**id:** `od4200-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-4-1`

- **Kapitteltype:** tema (farmakologi — resept/prosedyre).
- **Description:** Antibiotikaprofylakse etter Helsedirektoratets retningslinje (indikasjon,
  amoksicillin førstevalg, klindamycin/Dalacin ved penicillinallergi) og korrekt
  reseptskriving etter Felleskatalogen.
- **Eksamensbelegg:** Farmakologi, FA-RESEPT + FA-KORT. Antibiotikaprofylakse + resept **3/3**.
  Prioritet: perfekt. **Sensor-kredittregel 7 (korrekt resept).**
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Nøkkelfakta- og terminologiliste:**
  profylakse-indikasjon; reseptelementene; penicillinallergi-alternativ.
- **Faktakontrakt (flashcard-kilde):** profylakse — amoksicillin førstevalg, klindamycin ved
  penicillinallergi `(verifiser dose/regime)`; reseptelementer (legemiddel, styrke, form,
  dosering, mengde, bruksanvisning; gyldighet 1 år, A/B kortere); metronidazol ved anaerobe;
  amoksicillin + metronidazol ved terapisvikt aggressiv periodontitt.
- **Klinisk resonnement:** avgjør indikasjon → velg legemiddel (allergi?) → skriv komplett
  resept (alle elementer).
- **Typiske feil:** `FF4` (ufullstendig resept / feil middel ved penicillinallergi).
- **Modellsvar:** «Skriv en komplett resept på antibiotikaprofylakse for en penicillinallergisk
  pasient» (FA-RESEPT) — NYSKREVET, alle elementer.
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 4.3: Interaksjoner, CYP og INR/warfarin
**id:** `od4200-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `od4200-4-2`

- **Kapitteltype:** tema (farmakologi — MCQ/interaksjonslogikk).
- **Description:** Legemiddelinteraksjoner + CYP-enzymer (MCQ-favoritt), INR/warfarin (Marevan)
  og kirurgi ved forhøyet INR, biologiske legemidler.
- **Eksamensbelegg:** Farmakologi, FA-MCQ. Interaksjoner + CYP **3/3**. INR/warfarin **2/3**.
  Biologiske/HIV/sentralstimulerende (MCQ) **1/3**. Prioritet: perfekt (interaksjoner/CYP).
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Nøkkelfakta- og terminologiliste:**
  CYP-interaksjonslogikk; INR-grenser.
- **Faktakontrakt (flashcard-kilde):** CYP-hemming/induksjon (simvastatin ↑ warfarin);
  INR/warfarin, leverfunksjon, INR-grense for kirurgi `(verifiser grense)`; interaksjonsfeller
  (utskillelse «i milten», parenteral «forhindrer» interaksjon — feil); biologiske legemidler;
  HIV-kombinasjonsbehandling.
- **Klinisk resonnement:** identifiser interaksjonsmekanisme (CYP) → vurder INR før kirurgi →
  avvis MCQ-feller med begrunnelse.
- **Typiske feil:** `FF1` (interaksjonsfeller), `FF6` (feil INR-håndtering / CYP-logikk);
  distraktor som gjengir bokas presisjon som galt (README).
- **Modellsvar:** NYSKREVET MCQ-bolk om CYP/interaksjoner/INR med stokket fasit og
  fasit-kommentar på nære distraktorer.
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 4.4: Lokalanestesi, antikolinergika og opioider/antidoter
**id:** `od4200-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-4-3`

- **Kapitteltype:** tema (farmakologi — legemiddelgrupper).
- **Description:** Lokalanestesi (Na-kanalblokade, adrenalin, pKa), antikolinergika
  (munntørrhet), opioider/smertetrapp og antidoter (naloxon/flumazenil).
- **Eksamensbelegg:** Farmakologi, FA-KORT + FA-MEK. Lokalanestesi **2/3**. Antikolinergika
  **2/3**. Opioider/antidoter **2/3**. Prioritet: kunne (høyfrekvent 2/3).
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Nøkkelfakta- og terminologiliste:**
  LA-mekanisme; antikolinerg reseptor/bivirkning; antidoter.
- **Faktakontrakt (flashcard-kilde):** LA — blokade av spenningsstyrte Na⁺-kanaler; pKa/
  vevs-pH (feilslag ved infeksjon); adrenalin (forlenget effekt, forsiktighet ved
  hjertesykdom/kokain-metamfetamin); natriumbisulfitt-antioksidant; antikolinergika —
  muskarinreseptor, grupper (antihistaminer, TCA, antipsykotika, antiparkinson, spasmolytika),
  odontogen bivirkning munntørrhet → karies; opioider — WHOs smertetrapp, svakt (kodein/
  tramadol) vs. sterkt (morfin/oksykodon), μ-reseptor, antidot naloxon; benzodiazepin-antidot
  flumazenil; karbamazepin ved trigeminusnevralgi.
- **Klinisk resonnement:** velg LA + adrenalinhensyn → kartlegg antikolinerg belastning
  (munntørrhet) → smertetrapp + korrekt antidot.
- **Typiske feil:** `FF3` (naloxon ↔ flumazenil forvekslet), `FF5` (antikolinerg totalbelastning
  oversett).
- **Modellsvar:** «Hvilken antidot ved opioidoverdose vs. benzodiazepinoverdose, og hvorfor?»
  + LA-valg ved infisert vev (FA-KORT).
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 4.5: Multimorbid legemiddelkasus
**id:** `od4200-4-5` · **number:** 4.5 · **estimatedMinutes:** 45 · **prerequisites:** `od4200-4-4`

- **Kapitteltype:** tema (farmakologi — integrert kasus).
- **Description:** Integrert legemiddelvurdering på multimorbid pasient (antikolinerg
  totalbelastning, sedasjon, LA-valg, postoperativ analgesi, INR-vurdering, profylakse) —
  2025-signaturen «Nina 85 år».
- **Eksamensbelegg:** Farmakologi, FA-KASUS. Multimorbid legemiddelkasus **1/3** (nytt 2025,
  ventet gjenganger). Prioritet: kunne. Trekker fra hele Del 4.
- **Forkunnskaper/kryssbok:** kap. 4.1–4.4; kap. 5.x (gerodonti — polyfarmasi). `collapsible`
  **Nøkkelfakta- og terminologiliste:** antikolinerg belastning; INR-vurdering; profylakse i
  kasus.
- **Faktakontrakt (flashcard-kilde):** samlet vurdering — antikolinerg totalbelastning,
  sedasjonsrisiko, LA-valg, postoperativ analgesi (paracetamol før opioid), INR-grense,
  profylakseindikasjon.
- **Klinisk resonnement:** gjennomgå medikamentlisten → identifiser interaksjoner/belastning →
  planlegg trygg tannbehandling (LA, analgesi, profylakse, INR).
- **Typiske feil:** `FF5` (antikolinerg totalbelastning), `FF6` (INR/CYP), `FF4` (ufullstendig
  resept i kasus).
- **Modellsvar:** NYSKREVET multimorbid kasus (85 år, polyfarmasi) → full legemiddelvurdering
  med delpoeng.
- **Kvote:** 12 quiz / 18 flashcards.

**Prøve-kvote Del 4:** 4 prøver (id `od4200-4-prove`): (1) *Antibiotika og resept* — mekanisme
+ profylakse + komplett resept (FA-MEK/FA-RESEPT). (2) *Interaksjoner og INR* — CYP/MCQ + INR-
kirurgi (FA-MCQ, stokket fasit). (3) *Legemiddelgrupper* — LA + antikolinergika + opioider/
antidoter (FA-KORT). (4) *Multimorbid kasus* — integrert legemiddelvurdering (FA-KASUS).

### Del 5 — Gerodonti: den skrøpelige eldre pasienten *(prioritet: PERFEKT — 4 t deleksamen)*

#### Kapittel 5.1: Det multimorbide kasuset — anamnese, ambisjonsnivå og plan
**id:** `od4200-5-1` · **number:** 5.1 · **estimatedMinutes:** 65 · **prerequisites:** `od4200-0-2`

- **Kapitteltype:** tema (gerodonti — stort kasus). Låner DNA-droftings kasus-/momentliste-
  logikk. **Middels bildeavhengig → ærlig bilde-boks.**
- **Description:** Det dominerende pasientkasuset (multimorbid, medisinert eldre): koble hver
  anamnese-opplysning til oral helse → ambisjonsnivå (mot reservekapasitet/skrøpelighet) →
  prioritert behandlingsplan.
- **Eksamensbelegg:** Gerodonti, GE-KASUS. Stort multimorbid kasus **3/3**. Ambisjonsnivå
  **3/3**. Reservekapasitet/skrøpelighet **2/3**. Prioritet: perfekt. **Sensor-kredittregel 8
  (anamnese → oral helse → plan; ingen frittstående oppramsing).**
- **Forkunnskaper/kryssbok:** kap. 0.2; kap. 4.5 (multimorbid legemiddelvurdering).
  `collapsible` **Nøkkelfakta- og terminologiliste:** reservekapasitet/skrøpelighet/ADL/
  ambisjonsnivå; polyfarmasi.
- **Faktakontrakt (flashcard-kilde):** reservekapasitet, skrøpelighet (frailty), ADL,
  ambisjonsnivå, polyfarmasi, multimorbiditet; hvordan ambisjonsnivå vurderes (koblet til
  reservekapasitet/skrøpelighet).
- **Klinisk resonnement:** les anamnesen → koble hver opplysning til oral konsekvens → sett
  ambisjonsnivå → prioritert plan (rekkefølge begrunnet).
- **Typiske feil:** `GF1` (oppramsing uten kasuskobling), `GF3` (for høyt ambisjonsnivå). Ærlig
  bilde-boks.
- **Modellsvar:** NYSKREVET multimorbid kasus (92 år) → orale problemstillinger, ambisjonsnivå,
  prioritert plan med begrunnelse.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 5.2: Munntørrhet, karies og systemsykdommers orale konsekvenser
**id:** `od4200-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-5-1`

- **Kapitteltype:** tema (gerodonti — klinikk).
- **Description:** Munntørrhet hos syke eldre (årsaker + tiltak), karies hos syke eldre, og
  hvordan systemsykdommer (slag, demens, Parkinson, lungesykdom) påvirker oral helse.
- **Eksamensbelegg:** Gerodonti, GE-SYST + GE-DRØFT. Systemsykdommers orale konsekvenser
  **3/3**. Munntørrhet **3/3**. Karies hos syke eldre **2/3**. Legemidlers effekt på oral
  helse **2/3**. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1; kap. 1.3 (saliva/remineralisering); kap. 4.4
  (antikolinerg munntørrhet). `collapsible` **Nøkkelfakta- og terminologiliste:** munntørrhet-
  årsaker/tiltak; systemsykdom → oral konsekvens.
- **Faktakontrakt (flashcard-kilde):** munntørrhet (medikamentindusert antikolinerg,
  stråleindusert, aldersendring; tiltak: spyttstimulering, fuktemidler, fluor, tett
  innkalling); systemsykdom → oral helse (hjerneslag: motorikk/svelg; Alzheimer/demens:
  egenomsorg/samtykke; Parkinson: motorikk/munntørrhet; lungesykdom: aspirasjonspneumoni;
  osteoporose/bisfosfonater → MRONJ-risiko, zoledronsyre); karies hos eldre (rotkaries,
  polyfarmasi).
- **Klinisk resonnement:** koble systemsykdom → oral konsekvens → tilpasset tiltak; behandle
  munntørrhet som karies-driver.
- **Typiske feil:** `GF5` (overse munntørrhet/karies-sammenheng), `GF1` (oppramsing uten
  kobling).
- **Modellsvar:** «Hvordan påvirker hjerneslag oral helse og tannbehandling, og hvilke tiltak
  følger?» (GE-SYST).
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 5.3: Jus — samtykkekompetanse, tvang og pasientrettigheter
**id:** `od4200-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-5-1`

- **Kapitteltype:** tema (gerodonti — jus). Låner DNA-jus/DNA-drofting lovforankring.
- **Description:** Pasient- og brukerrettighetsloven kap. 4 (samtykke) og 4A (helsehjelp til
  pasienter uten samtykkekompetanse som motsetter seg), tvangsvilkår, samtykkekompetanse-
  vurdering.
- **Eksamensbelegg:** Gerodonti, GE-KASUS + GE-DRØFT. Aktuelle lover **3/3**. Prioritet:
  perfekt. **Sensor-kredittregel 8 (korrekt lovforankring).** *Ikke juridisk rådgivning —
  sjekk Lovdata (plattform-disclaimer).*
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Nøkkelfakta- og terminologiliste:**
  pbrl. kap. 4/4A; samtykkekompetanse; tvangsvilkår.
- **Faktakontrakt (flashcard-kilde):** pasient- og brukerrettighetsloven kap. 4 (samtykke) og
  4A (helsehjelp uten samtykkekompetanse ved motstand); samtykkekompetanse-vurdering;
  tvangsvilkårene (tillitsskapende tiltak forsøkt, vesentlig helseskade, forholdsmessighet)
  `(verifiser vilkårene mot Lovdata)`; helsepersonelloven; tannhelsetjenesteloven.
- **Klinisk resonnement:** vurder samtykkekompetanse → hvis mangler og pasienten motsetter
  seg: prøv tillitsskapende → vurder 4A-vilkårene → dokumentér.
- **Typiske feil:** `GF2` (feil/manglende lovforankring).
- **Modellsvar:** «En dement pasient motsetter seg nødvendig tannbehandling — hvilke vilkår i
  kap. 4A må være oppfylt?» (GE-DRØFT).
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 5.4: Etikk, delirium og refleksjonsoppgaven
**id:** `od4200-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `od4200-5-3`

- **Kapitteltype:** tema (gerodonti — etikk/drøfting). Låner DNA-droftings refleksjons-/
  drøftings-DNA (binær selvrettingsrubrikk).
- **Description:** Etiske problemstillinger (autonomi vs. velgjørenhet, verdighet, tvangens
  grenser), delirium, og den avsluttende refleksjonsoppgaven rundt et sitat om tillit/
  kommunikasjon/etikk.
- **Eksamensbelegg:** Gerodonti, GE-DRØFT + GE-REFL. Etiske problemstillinger **3/3**.
  Delirium **1/3**. Refleksjonsoppgave (flere sett). Ernæring/tverrfaglig **1/3**. Prioritet:
  perfekt (etikk) / kunne (delirium/refleksjon).
- **Forkunnskaper/kryssbok:** kap. 5.3. `collapsible` **Nøkkelfakta- og terminologiliste:**
  etiske prinsipper; delirium (definisjon/risiko/tiltak).
- **Faktakontrakt (flashcard-kilde):** autonomi vs. velgjørenhet, verdighet, tvangens grenser,
  kommunikasjon/tillit; delirium (definisjon, risikofaktorer, pre-/per-/postoperative tiltak);
  tverrfaglig samarbeid; ernæringstilstand og oral helse.
- **Klinisk resonnement / drøftingsdisposisjon:** identifiser etisk spenning → drøft begge
  hensyn med klinisk eksempel → land begrunnet (skarp konklusjon er lov, jf. README
  A-konklusjonsvariasjon).
- **Typiske feil:** `GF4` (overflatisk etikk uten kliniske eksempler), `GF1` (oppramsing).
- **Modellsvar:** en refleksjonsoppgave rundt et NYSKREVET sitat, med disposisjon + binær
  selvrettingsrubrikk (☐ standpunkt? ☐ klinisk eksempel? ☐ begge hensyn? ☐ begrunnet
  konklusjon?).
- **Kvote:** 12 quiz / 18 flashcards.

**Prøve-kvote Del 5:** 4 prøver (id `od4200-5-prove`): (1) *Multimorbid kasus* — anamnese →
oral helse → ambisjonsnivå → plan (GE-KASUS). (2) *Munntørrhet og systemsykdom* — slag/demens/
Parkinson + munntørrhet-tiltak (GE-SYST). (3) *Jus* — samtykkekompetanse + kap. 4A-vilkår
(GE-DRØFT). (4) *Etikk og refleksjon* — etisk drøfting + refleksjonsoppgave med rubrikk
(GE-REFL).

### Del 6 — Eksamenstrening: fem øvingseksamener *(prioritet: PERFEKT (meta))*

Fem nyskrevne komplette sett, ett i HVER av de fem deleksamensformene. Full modellsvar-fasit
+ Sensorblikket per sett. Hvert sett har minst én «bestått-på-marginen»-besvarelse (README:
eksamen er bestått/ikke bestått fra 2027) i tillegg til topp-modellsvaret. Begrunnelse: fordi
de fem delfagene er separate deleksamener med hvert sitt fagområde og hver sin form, må
studenten trene tidsdisiplin og poenghøsting SEPARAT i hvert delfag. Alle kasus/oppgaver
NYSKREVNE. Prøvekapittel-id `od4200-6-<n>`, chapterNumber `6.<n>`.

#### Kapittel 6.1: Øvingseksamen kariologi
**id:** `od4200-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-1-6`

- **Kapitteltype:** øvingseksamen (kariologi).
- **Description:** Komplett 4-timers kariologisett: to store pasientkasus (BW beskrevet i
  klartekst) + 4 kunnskapsoppgaver (VEDE/BEWE, fluor, forebygging, histopatologi) + MCQ-bolk.
  Full fasit + Sensorblikket + «bestått-på-marginen»-besvarelse.
- **Eksamensbelegg:** Speiler kariologiformen (analysen §1). Prioritet: perfekt (meta).
- **Typiske feil:** samlet: `KF1`–`KF8`.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 6.2: Øvingseksamen endodonti
**id:** `od4200-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-2-5`

- **Kapitteltype:** øvingseksamen (endodonti).
- **Description:** Komplett 4-timers endodontisett: 3–4 diagnose-/behandlingskasus (fast
  sekvens) + del 2 kortsvar. Full fasit + Sensorblikket + «bestått-på-marginen»-besvarelse.
- **Eksamensbelegg:** Speiler endodontiformen (analysen §1). Prioritet: perfekt (meta).
- **Typiske feil:** samlet: `EF1`–`EF7`.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 6.3: Øvingseksamen periodonti
**id:** `od4200-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-3-4`

- **Kapitteltype:** øvingseksamen (periodonti).
- **Description:** Komplett 4-timers periodontisett: ett gjennomgående kasus (Trinn 1–4) +
  bendefekt-figuroppgave + fagteori. Full fasit + Sensorblikket + «bestått-på-marginen»-
  besvarelse.
- **Eksamensbelegg:** Speiler periodontiformen (analysen §1). Prioritet: perfekt (meta).
- **Typiske feil:** samlet: `PF1`–`PF6`.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 6.4: Øvingseksamen farmakologi
**id:** `od4200-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-4-5`

- **Kapitteltype:** øvingseksamen (farmakologi).
- **Description:** Komplett 4-timers farmakologisett: MCQ-bolk + kortsvarsbatteri +
  reseptskriving + integrert multimorbid legemiddelkasus. Full fasit + Sensorblikket +
  «bestått-på-marginen»-besvarelse.
- **Eksamensbelegg:** Speiler farmakologiformen (analysen §1). Prioritet: perfekt (meta).
- **Typiske feil:** samlet: `FF1`–`FF6`.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 6.5: Øvingseksamen gerodonti
**id:** `od4200-6-5` · **number:** 6.5 · **estimatedMinutes:** 55 · **prerequisites:** `od4200-5-4`

- **Kapitteltype:** øvingseksamen (gerodonti).
- **Description:** Komplett 4-timers gerodontisett: ett stort multimorbid kasus + drøftings-
  oppgaver (reservekapasitet, systemsykdom, jus) + refleksjonsoppgave. Full fasit +
  Sensorblikket + «bestått-på-marginen»-besvarelse. Ordgrense oppgitt (~3000 ord).
- **Eksamensbelegg:** Speiler gerodontiformen (analysen §1). Prioritet: perfekt (meta).
- **Typiske feil:** samlet: `GF1`–`GF5`.
- **Kvote:** 12 quiz / 8 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Delfag | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|---|
| 0 | meta | 2 | 22 | 18 | 0 (dekkes av øvingseksamenene) |
| 1 | kariologi | 6 | 90 | 128 | 4 |
| 2 | endodonti | 5 | 74 | 106 | 4 |
| 3 | periodonti | 5 | 70 | 108 | 4 |
| 4 | farmakologi | 5 | 70 | 102 | 4 |
| 5 | gerodonti | 4 | 56 | 82 | 4 |
| 6 | meta | 5 | 60 | 40 | 0 (= 5 øvingseksamener, én per delfag) |
| **Sum** | | **32** | **442** | **484** | **20** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12=**22** / 8+10=**18**
- Del 1: 16+16+16+14+14+14=**90** / 24+22+24+20+20+18=**128**
- Del 2: 16+16+14+14+14=**74** / 24+24+20+20+18=**106**
- Del 3: 16+14+14+12+14=**70** / 24+22+22+18+22=**108**
- Del 4: 16+14+14+14+12=**70** / 24+20+20+20+18=**102**
- Del 5: 16+14+14+12=**56** / 22+22+20+18=**82**
- Del 6: 12+12+12+12+12=**60** / 8+8+8+8+8=**40**
- **Totalt (kapittelbidrag): 442 quiz / 484 flashcards** (eksakt per-kapittel-telling; 32 kapitler).

**Autoritativ totalsum (kapitler + prøver):**

| | Kapittelbidrag | Prøvebidrag (§4) | **Sum** | Krav |
|---|---|---|---|---|
| **Quiz** | 442 | 120 (20 prøver × 6 spm) | **562** | ≥500 ✓ |
| **Flashcards** | 484 | 0 (prøver gir ikke flashcards) | **484** | — se justering |

> **KVOTEGULV-JUSTERING (bindende):** Kapittelbidraget flashcards (484) ligger under 500-
> gulvet. Ved bygging **økes flashcard-kvoten i de fem faktatunge kjernekapitlene** (1.1, 2.1,
> 3.1, 4.1, 5.1) med +6 hver (24→30) og i 1.3/2.2/4.2 med +4 hver, slik at kapittelbidraget
> løftes til **≥520 flashcards**. Autoritativ målsum etter justering: **quiz 562 / flashcards
> 528** (begge klart over 500-gulvet). Se tetthetsbegrunnelse under. **Ved bygging skal begge
> summer verifiseres eksplisitt mot ≥500 før boka meldes ferdig.**

**Justert autoritativ totalsum:**

| | Sum | Krav |
|---|---|---|
| **Quiz** | **562** | ≥500 ✓ |
| **Flashcards** | **528** | ≥500 ✓ |

**Tetthetsbegrunnelse (jf. PRODUKSJONSLOYPE «≥500 er et GULV, ikke et mål»):** OD4200 er fem
faktatunge delfag i ett — kariologi (graderingsskalaer, fluorkonsentrasjoner, histopatologi-
soner, kariesstudier), endodonti (diagnosepar, prognosetall, rotanatomi, irrigasjonssekvens),
periodonti (2017-klassifisering, kliniske mål, bendefekter, behandlingsstige), farmakologi
(legemiddelgrupper, mekanismer, resepter, interaksjoner, antidoter) og gerodonti (begreper,
systemsykdom↔oral konsekvens, lovhjemler, etikk). Hvert delfag har sitt eget begrepsapparat
som må sitte utenat → **høy flashcard-tetthet** er faglig riktig (kjernekapitlene 24–30 kort
hver). **Quiz 562** (inkl. prøver) fordi alle fem delfag premierer presis begrepsgjenkjenning,
diagnosepar og sekvenser som egner seg til quiz med nære distraktorer.

**Flashcard-profil:** skala↔kriterium (VEDE flatenivå vs. BEWE sekstant; stadium I–IV vs. grad
A–C), diagnosepar (reversibel vs. irreversibel pulpitt; akutt vs. kronisk apikal periodontitt;
gingivitt vs. periodontitt), tall↔kontekst (fluorkonsentrasjoner, prognose ~95 %/~75–85 %,
MB2 >80 %, HbA1c ~0,3–0,4 %-poeng — alle `(verifiser)`), mekanisme↔effekt (fluor lokal effekt;
antibiotika angrepspunkt↔selektivitet; LA Na-kanalblokade), resept↔element (profylakse-regime,
reseptelementene), antidot↔legemiddel (naloxon↔opioid; flumazenil↔benzodiazepin), systemsykdom↔
oral konsekvens (slag↔svelg/motorikk; Parkinson↔munntørrhet; bisfosfonat↔MRONJ), lov↔innhold
(pbrl. kap. 4 samtykke / 4A tvang). **Quiz-profil:** faktapresisjon med nære distraktorer +
sekvens-spørsmål (BW-avlesningsrekkefølge, endodiagnose-sekvens, Trinn 1–4, irrigasjonssekvens)
+ kasus-/klinisk-vurderings-quiz (gradér VEDE/stadium/INR; hva betyr funnet for plan/prognose).
Distraktorer straffer aldri grundig lesing (README).

---

## 4. Prøver

Fire prøver per delfags-del (Del 1–5 = **20 prøver**). Del 0 og Del 6 har ingen egen prøve
(Del 6s fem øvingseksamener dekker helheten i hver deleksamensform). Hver prøve speiler
delfagets eksamensform i miniatyr (se prøve-kvotene under hver del over). Omfang 20–40 min,
**6 oppgaver/spørsmål per prøve**. Alle oppgaver NYSKREVNE. Prøvekapittel-id `od4200-<del>-prove`,
chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Flervalg i prøve-collapsibles har **stokket fasit**
(README); kasus-/drøftingsfasit er momentliste med selvdiagnose-sjekkliste (☐) etter hver fasit.

- **Del 1 (kariologi):** 4 prøver — kasus/røntgen · gradering/slitasje · fluor/forebygging ·
  blandet + MCQ. (Se Prøve-kvote Del 1 over.)
- **Del 2 (endodonti):** 4 prøver — dobbeltdiagnose · plan/prognose · prosedyre/differensial ·
  del 2-kortsvar. (Se Prøve-kvote Del 2 over.)
- **Del 3 (periodonti):** 4 prøver — klassifisering/prognose · behandlingsstige/måletolkning ·
  risiko/bendefekter · protetikk/HELFO/blandet. (Se Prøve-kvote Del 3 over.)
- **Del 4 (farmakologi):** 4 prøver — antibiotika/resept · interaksjoner/INR · legemiddelgrupper
  · multimorbid kasus. (Se Prøve-kvote Del 4 over.)
- **Del 5 (gerodonti):** 4 prøver — multimorbid kasus · munntørrhet/systemsykdom · jus ·
  etikk/refleksjon. (Se Prøve-kvote Del 5 over.)

**Prøvebidrag til kvoten:** 20 prøver × 6 spm = **120 quiz** (prøver gir ikke flashcards).

### Komplette øvingseksamener (5 — kapitlene 6.1–6.5, én per delfag)

Fem nyskrevne komplette sett, ett i HVER deleksamensform (se Del 6 over): 6.1 kariologi, 6.2
endodonti, 6.3 periodonti, 6.4 farmakologi, 6.5 gerodonti. Full modellsvar-fasit +
Sensorblikket + «bestått-på-marginen»-besvarelse per sett. Begrunnelse: de fem delfagene er
separate deleksamener med hvert sitt fagområde og hver sin form — studenten må trene
tidsdisiplin og poenghøsting SEPARAT i hvert delfag.

---

## 5. Studieguide-disposisjon

Studieguiden er de 32 kapitlene selv (fem parallelle delbøker + eksamenskart +
eksamenstrening), utfyllende og dekkende for alle fem deleksamenene: hver delfags-del gir
teori (kjernefakta + klinisk resonnement) i læringsløkker, med eksempler og oppgaver inline,
og hvert delfag avsluttes med prøver (4 per del) og en komplett øvingseksamen. Del 0 gir
orientering (fem former, svarlogikker, bildeavhengighets-kontrakt, kildeforbehold, «Lite tid?»-
og deltidsruter). Sentrale sammenhenger dekkes: kariesbiologi ↔ forebygging ↔ HELFO; endodontisk
dobbeltdiagnose ↔ prognose ↔ anatomi; periodontal klassifisering ↔ behandlingsstige ↔
måletolkning; antibiotika ↔ profylakse ↔ resept ↔ interaksjon; anamnese ↔ oral helse ↔
ambisjonsnivå ↔ jus ↔ etikk. Krysskoblinger til søsteremner: **OD2200** (patologi-/mikrobiologi-
fundament for karies-, pulpa- og periodontal patogenese — bygg OD2200 først), **MED1100**
(basal legemiddellære for farmakologidelfaget), **OD5100/OD5200** (viderefører oral
rehabilitering, protetikk, integrert pasientbehandling).
