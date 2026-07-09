# Bokskjelett: Felles avsluttende skriftlig deleksamen i medisin (nasjonal) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (det nasjonale arkivet 2017–2026: 16 bokmål-fasitsett med
> begrunnelser splittet oppgave for oppgave og klassifisert maskinelt, 2 256 oppgaver,
> kryssjekket mot eksamenskommisjonens psykometrinotater). Alle vignetter, svaralternativer,
> distraktorforklaringer og case i boka skal være NYSKREVNE (se §6). Medisinsk/latinsk
> terminologi, normalverdier, standarddoser og behandlingsprinsipper er allment fagstoff
> og fritt å bruke.
>
> **Klinisk presisjon er kritisk.** Normalverdier, doser, terskler og retningslinjedetaljer
> forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i fase 6 — flere er
> hentet fra enkeltvignetter og skal kontrolleres mot GJELDENDE norske retningslinjer
> (Legemiddelhåndboka, Norsk elektronisk legehåndbok, Helsedirektoratets veiledere,
> Felleskatalogen) FØR bruk som fasit. INGEN oppdiktede doser eller terskler. Nivået er
> **LIS1-bredde** (fersk lege / turnuslege): bred klinisk handlingskompetanse på tvers av
> hele klinikken — IKKE spesialistdybde, og IKKE basalfag (anatomi/fysiologi/biokjemi).
>
> **Dette er IKKE MED1100 (modul 1).** MED1100 (`docs/hoyskole-boker/med1100/`) tester det
> **friske** menneskets grunnfag i første semester. Denne eksamenen avlegges i **siste
> studieår** og tester **anvendt klinisk medisin** (diagnose, behandling, håndtering) på
> tvers av alle kliniske disipliner. Overlappen er indirekte (klinisk resonnement hviler
> på basalfag), men nivå, formål og oppgaveform er et annet. Boka bygges helt selvstendig
> som en **klinisk sluttkompetanse-bok**.

---

## 1. Bokens identitet

- **Kurs-id:** `med-avsluttende`
- **Tittel:** *Felles avsluttende deleksamen i medisin*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Nasjonal eksamen — felles for alle fire medisinske
  fakulteter (UiO, UiB, NTNU, UiT). Legges under **Universitetet i Oslo (UiO)** i
  `institusjoner.ts` (nasjonal koordinering ligger der), med visningsnavn:
  «Felles avsluttende deleksamen i medisin (nasjonal)».
- **Arketype:** **fakta / klinisk beslutning** — et klinisk beslutningsfag som ikke passer
  noen av de tre DNA-malene (regnefag/jus/drøfting) rent. Struktur er skreddersydd
  (dokumentert i §2 «Arketypetilpasning»); låner **fakta/pugg-tilpasningen** fra
  NOKUT-AFB (nøkkelfakta-lister som flashcard-kilde, MC-eksamenstrening tungt vektet, faget
  er uten hjelpemidler → alt utenat) og legger på et eget, definerende lag:
  **flervalgs-eksamenstrening med distraktoranalyse** (single best answer, forklar hvorfor
  HVER distraktor er gal). Se avviksdokumentasjonen i §2.
- **Kapittelantall:** 44 (Del 0: 3 · kliniske disiplindeler 1–13: 32 · farmakologi
  tverrgående Del 14: 2 · eksamenstrening Del 15: 7)
- **Estimert totaltid:** ~2 350 minutter (~39 timer) fordelt per kapittel under.
- **Quiz totalt:** **856** (krav ≥800) · **Flashcards totalt:** **724** (krav ≥700)

**Pitch:** Dette er den obligatoriske nasjonale sluttkompetanse-eksamenen for ALLE norske
medisinstudenter — ~370–457 avgangskandidater avlegger samme sett samme dag ved alle fire
fakulteter (aktiv per 2026, vår + høst). Formen er låst siden 2020: **140 flervalgsoppgaver
(single best answer, fire alternativer A–D), 4 timer (~100 sek/oppgave), INGEN hjelpemidler,
bestått/ikke bestått** med en standardsatt bestått-grense per sitting (~58–61 %; snitt
~73–80 %). Hver oppgave er en **klinisk pasientvignett** der studenten settes i en konkret
rolle («Du er LIS1 …», «Du er fastlege …») og skal ta en **beslutning**: stille diagnose,
velge behandling/legemiddel, velge neste utrednings-/håndteringssteg. **Ingen minuspoeng →
det er alltid rasjonelt å gjette.** Eksamenen er **bred, ikke dyp**: ti kliniske disipliner
har 16/16 i gjenganger-score — bredden over hele klinikken ER poenget, og man kan ikke
kompensere svake fagfelt med sterke (bestått/ikke bestått). Boka bygges baklengs fra tre
ting: (1) **frekvensvekten** per disiplin (kardiologi ~16 %, indremedisin samlet ~55–60 %,
kirurgi ~14 %) som styrer hvor mange kapitler og oppgaver hver disiplin får; (2) **single
best answer-tankesettet** — velg det MEST hensiktsmessige, ikke bare et forsvarlig tiltak;
og (3) **distraktor-logikken**, som er selve gullgruven: fasiten begrunner PER alternativ
hvorfor hvert gale alternativ er nest best/gal, og det er nettopp dette som skiller
toppsjiktet fra bestått. Farmakologi og geriatri er **tverrgående** — de veves inn i hver
behandlingsoppgave, ikke isoleres.

**Kalibreringsregel (ufravikelig):** Boka skrives mot **gjeldende form (140 MCQ, 4 t,
single best answer, ingen hjelpemidler, bestått/ikke bestått)**. Pilotårenes ulike
oppgavetall (120 i V2017, 160 i V2018, 180 i V2019) er en **anomali** og ALDRI normgivende
— fra V2020 er tallet 140. Nivået er **LIS1-bredde, ikke spesialistdybde**: klassisk
symptombilde → riktig standarddiagnose og førstevalgsbehandling, med basal individualisering
for åpenbar komorbiditet. Toppsjikt-poengene (tvetydige vignetter, dosejustering ved
nyresvikt, kontraindikasjoner, «når man IKKE skal agere», DOAK-fellen) markeres som slikt,
ikke som bestått-krav. Alle normalverdier/doser merkes `(verifiser)`.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart + single-best-answer-/distraktor-/gjettehåndverk +
tverrgående beslutningsverktøy) → kliniske disiplindeler etter frekvensvekt (tyngst først)
→ farmakologi tverrgående → eksamenstrening.** Klinisk beslutning (vignett → neste steg) er
den gjennomgående aksen i HVERT disiplinkapittel. Dette avviker bevisst fra DNA-regnefags
«ordne etter faglig avhengighet» (se avvik 4 under) — de kliniske disiplinene er stort sett
selvstendige beslutningsdomener, så tyngst-først maksimerer avkastning per lesetime mot en
bred bestått/ikke-bestått-eksamen.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart, beslutningshåndverk og tverrgående verktøy | 3 | perfekt (meta) | Formatet, single-best-answer-tankesettet, distraktoranalysen, gjettestrategien og de tverrgående beslutningsverktøyene (blodgass, dosejustering ved nyresvikt, respirasjonsstøtte, ABCDE) må etableres FØR fagstoffet — de brukes i hvert eneste kapittel. |
| 1 | Kardiologi og hjerte-kar | 5 | perfekt | Klart største disiplin (~15,7 %, 16/16). Hjertesvikt, koronarsykdom/ACS, atrieflimmer + antikoagulasjon (DOAK-fellen), klaffesykdom, hypertensjon + NORRISK 2/statin, arytmi. Høyest drillvekt. |
| 2 | Infeksjonsmedisin | 3 | perfekt | Nest største indremedisinske søyle (~8,2 %, 16/16). Empirisk antibiotika, sepsis/qSOFA, resistens, vanlige infeksjoner per organ. |
| 3 | Gastroenterologi | 3 | perfekt | ~6,9 %, 16/16. Akutte magesmerter, GI-blødning, ulcus/dyspepsi, lever/galle, IBD. |
| 4 | Lungemedisin | 3 | perfekt | ~6,8 %, 15/16. Kols/astma, pneumoni, respirasjonssvikt/NIV (blodgass-tungt), lungeemboli, lungekreft. |
| 5 | Nefrologi og urologi | 3 | perfekt | ~6,0 %, 16/16. Akutt/kronisk nyresvikt, elektrolytt-/væskeforstyrrelser, hyperkalemi, LUTS/prostata, UVI/nyrestein. |
| 6 | Endokrinologi og øvrig indremedisin (hematologi, revmatologi, onkologi/palliasjon) | 4 | perfekt/kunne | Endokrin ~3,2 %, hematologi ~4,3 %, revma ~3,1 %, onkologi/palliasjon ~4,4 % — samlet en stor indremedisinsk rest. Diabetes/thyreoidea, anemi/leukemi/koagulasjon, artritt, kreftutredning/palliativ smerte. |
| 7 | Ortopedi og kirurgi | 3 | perfekt/kunne | Ortopedi ~7,1 % (16/16) + gastrokirurgi ~3,9 % (16/16). Frakturer, rygg/kne/hofte, akutt abdomen, postoperative komplikasjoner. |
| 8 | Nevrologi | 2 | kunne | ~4,0 %, 15/16. Hjerneslag/TIA (trombolysevindu), hodepine, epilepsi, nevropati, MS/Parkinson kort. |
| 9 | Psykisk helse og rus | 2 | kunne | ~5,8 %, 15/16. Depresjon/angst, psykose, suicidvurdering, rus/abstinens, akutt psykiatri. |
| 10 | Pediatri | 2 | kunne | ~2,1 %, 15/16. Feber/infeksjon hos barn, dehydrering, vaksiner, utviklingsavvik, akutt syk barn. |
| 11 | Gynekologi og obstetrikk | 2 | kunne | ~2,4 %, 15/16. Svangerskap/komplikasjoner, prevensjon, blødningsforstyrrelser, cervix-/HPV-screening. |
| 12 | ØNH, øye og hud | 3 | kunne | ØNH/øye ~6,5 % (16/16) + hud ~1,8 %. Otitt/nesepolypp/svimmelhet, akutt synstap/rødt øye, utslett/helvetesild + postherpetisk nevralgi. |
| 13 | Allmenn- og akuttmedisin, samfunn og jus | 3 | kunne/perfekt (meta) | Allmenn/samfunn/jus ~2,3 % (16/16) + akutt/anestesi ~1,6 %, men akuttlogikk gjennomsyrer mange vignetter. Fastlegerollen, meldeplikt, screening; ABCDE-drill, intoksikasjon/blodgass, sjokk, traume. |
| 14 | Farmakologi tverrgående | 2 | perfekt (tverrgående) | Farmakologi (rendyrket) ~1,3 % som egen boks, men reelt i ~33 % av oppgavene (hver behandlingsoppgave). Samler dose-/kontraindikasjons-/interaksjonslogikken som veves inn overalt. |
| 15 | Eksamenstrening | 7 | perfekt (meta) | 4 sjanger-/distraktor-/feil-/gjettedrillkapitler + 3 komplette øvingseksamener i 140-MC-formatet (single best answer, bestått-grense). |

Rasjonale: kardiologi (Del 1) får flest kapitler og høyest kvote med egen drilltilnærming;
de øvrige store indremedisinske søylene (Del 2–6) får solide, komplette disiplinkapitler;
kirurgiske fag (Del 7) etter frekvens; smalere disipliner (Del 8–12) kompakt men fullstendig
— **ingenting utelates**, fordi settet dekker nesten hele bredden hvert år (ti disipliner
16/16). Prioriteringen styrer *dybde og drillmengde*, ikke *hva* som er med. Farmakologi/
geriatri er tverrgående (integrert i hvert kapittel + samlet i Del 14).

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart, beslutningshåndverk og tverrgående verktøy |
| 1 | Kardiologi og hjerte-kar |
| 2 | Infeksjonsmedisin |
| 3 | Gastroenterologi |
| 4 | Lungemedisin |
| 5 | Nefrologi og urologi |
| 6 | Endokrinologi og øvrig indremedisin |
| 7 | Ortopedi og kirurgi |
| 8 | Nevrologi |
| 9 | Psykisk helse og rus |
| 10 | Pediatri |
| 11 | Gynekologi og obstetrikk |
| 12 | ØNH, øye og hud |
| 13 | Allmenn- og akuttmedisin, samfunn og jus |
| 14 | Farmakologi tverrgående |
| 15 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

Alle oppgaver deler samme skall (vignett → 4 alternativer A–D → ett beste svar);
**spørsmålsstammen** styrer resonnementet:

**BEH** behandling/tiltak/legemiddel («beste behandling?», «hvilket legemiddel/dose?») —
~33 %, den største · **DIA** diagnose/årsak («mest sannsynlige diagnose/årsak?») — ~30 % ·
**HÅND** håndtering/neste steg («hvordan håndteres dette best?», «hva gjør du først?»,
«beste strategi videre?») — ~15 % (reelt mer; sammen med BEH nær halvparten) · **UTR**
utredning/undersøkelse («videre utredning?», «hvilken prøve/bildediagnostikk?») — ~6 % ·
**KUNN** kunnskap/mest korrekt utsagn («hva er riktig om …?») — ~5 % · **KOMM** kommunikasjon/
system/jus (melde-/henvisnings-/rettighetsspørsmål) — <1 % rendyrket, men ofte distraktorer ·
**PROG** prognose/komplikasjon/risiko — <1 % rendyrket.

### Vignett-elementer (fra analysen §3 — bygges inn realistisk)

**Rolle:** «Du er LIS1 …» (mest brukt), «Du er fastlege …», sjeldnere legevakt/LIS —
rollen definerer handlingsrommet (allmennlege vs. sykehuslege vs. akuttmottak). **Innvevde
kliniske data:** arteriell blodgass med referanseområde, elektrolytt-/lab-svar, vitalia
(RF, SpO₂, puls, BT, temp, GCS), henvisning til bildediagnostikk (CT ~325, røntgen ~239,
ultralyd ~213, EKG ~200, MR ~183 oppgaver på tvers av settene — studenten skal tolke
beskrevet funn eller velge riktig modalitet). **Komorbiditet/eldre-tyngde:** koronarsykdom,
nyresvikt, hjertesvikt, demens, skrøpelighet bygges inn for å tvinge fram individualisering
(dosejustering ved eGFR-fall, forsiktig opioidtitrering hos skrøpelig). **Realistiske
distraktorer:** de tre gale er plausible — «riktig medikamentklasse, feil middel», «riktig
tanke, ikke førstevalg», «for aggressiv/for passiv håndtering», «feil startdose».

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** velge et forsvarlig, men ikke optimalt tiltak (single-best-answer-fellen — et annet
er raskere/tryggere/mer målrettet) · **F2** feil dose/doseringsvei (riktig klasse, for høy
startdose, feil vei, manglende titrering — særlig opioider, insulin) · **F3** ikke
individualisere for komorbiditet (glemme dosejustering ved nyresvikt/eGFR-fall; overse
kontraindikasjon) · **F4** behandle det åpenbare labavviket i stedet for pasienten (agere på
lett hyperkalemi hos symptomfri når riktig svar er avvente/kontrollere) · **F5** feil
respirasjonsstøtte-logikk (gi mer O₂ når problemet er ventilasjon — høy PaCO₂ trenger
trykkstøtte/NIV) · **F6** overse alvorlig differensialdiagnose bak et «enkelt» funn
(sternumfraktur → høyenergitraume med mulig organskade) · **F7** for aggressiv/for passiv
håndtering (innlegge det som kan håndteres i førstelinje, eller undervurdere alvorlighet) ·
**F8** feil blodgass-/anion gap-tolkning (metabolsk acidose + høyt anion gap + respiratorisk
kompensasjon → metanol, ikke opiat) · **F9** feil førstevalg ved nevropatisk smerte
(NSAID/opioid der gabapentin/pregabalin er indisert) · **F10** melde-/system-/jusfeil (feil
mottaker/hjemmel — arbeidsrelatert sykdom → Arbeidstilsynet) · **F11** DOAK-/antikoagulasjons-
kontraindikasjon oversett (DOAK ved mitralstenose/mekanisk klaff → warfarin) · **F12** NSAID
ved nyresvikt/hjertesvikt/ulcus · **F13** blank besvarelse på usikker oppgave (ingen
minuspoeng → gjett ALLTID).

### Sensornøkkel / kredittregler (fra analysen §4 — etableres i Del 0, refereres overalt)

1. **Single best answer håndheves strengt.** Flere alternativer kan være *forsvarlige*, men
   ett er **mest hensiktsmessig** — velg det. Ved klager svarer kommisjonen gjentatte ganger
   at «oppgaven har et tydelig beste svar».
2. **Én begrunnelse per alternativ.** Fasiten forklarer ikke bare hvorfor det riktige er
   riktig, men **hvorfor hvert galt alternativ er galt** — «riktig middel, for høy startdose»,
   «riktig tanke, ikke førstevalg», «bedrer oksygenering, men ikke ventilasjon». Dette er
   distraktor-logikken boka skal lære.
3. **Automatisk retting** — kun ett rett alternativ; ingen fritekst, ingen delpoeng.
4. **Standardsatt bestått-grense** per sitting (~58–61 %), ikke fast prosent —
   kriterierefererende, justert for settets vanskegrad.
5. **Ingen minuspoeng.** Blank = feil → **gjett alltid** (viktig strategisk forskjell fra
   f.eks. MED1100 blokk 2 med negativ retting).
6. **Rollen og komorbiditeten er sjelden pynt** — de styrer riktig svar (handlingsrom,
   individualisering).
7. **Psykometrisk kvalitetssikring:** svake oppgaver fjernes eller får godkjent flere svar
   (V2026 oppg. 99 ortopedi: to godkjente svar pga. regional henvisningspraksis) — sjeldent,
   men viser at «tvetydige» oppgaver finnes.

### Nivåskille (destillert — brukes til å kalibrere vanskegrad)

- **Bestått:** treffer de høyfrekvente, «lærebok»-typiske presentasjonene — klassisk
  symptombilde → riktig standarddiagnose og førstevalgsbehandling, med basal justering for
  åpenbar komorbiditet.
- **Toppsjikt:** navigerer **tvetydige** vignetter (to alternativer nær hverandre), gjør
  riktig **individualisering** (dose ved nyresvikt, kontraindikasjoner, når man IKKE skal
  agere), og kjenner de fastlagte «snubletråd»-poengene (DOAK ved mitralstenose → warfarin;
  metanol via anion gap; postherpetisk nevralgi → gabapentin).

### Arketypetilpasning (dokumenterte valg og avvik)

1. **Ingen ren arketype (fakta / klinisk beslutning).** Dette er et klinisk beslutningsfag
   (anvendelse), ikke et regnefag. Fra **NOKUT-AFB** lånes fakta/pugg-tilpasningen: faget er
   uten hjelpemidler → alt må sitte utenat, så **flashcards** er fakta-/normalverdi-/dose-/
   førstevalgskort, og **quiz er kjernetreningen** (flervalg = eksamensmodaliteten). Det
   definerende, egne laget er **flervalgs-eksamenstrening med distraktoranalyse**: hver
   øvingsoppgave er en vignett med fire alternativer, og løsningen forklarer ikke bare det
   riktige, men **hvorfor hver distraktor er nest best/gal** (slik fasiten er bygget). Ingen
   DNA-mal dekker dette; strukturen er skreddersydd.
2. **«Symbol- og formelliste» → «Klinisk nøkkelfakta- og verdiliste».** README-kravet om en
   collapsible rett etter Forkunnskaper omtolkes for et fag nesten uten formler: hvert
   kapittel får en `collapsible` **«Klinisk nøkkelfakta- og verdiliste»** som samler
   førstevalgsbehandlinger, doser/doseprinsipper `(verifiser)`, kontraindikasjoner,
   normalverdier og terskler kapitlet krever utenat. De få reelle regnestørrelsene (anion
   gap = Na⁺ − (Cl⁻ + HCO₃⁻); eGFR-terskler; NORRISK 2-terskler `(verifiser)`) føres her.
3. **`definition`-blokker = klinisk nøkkelfakta (flashcard-kilden).** Toppnivå-`definition`
   med `title` er den ENESTE flashcard-kilden (jf. produksjonsløypen). Hvert kapittels
   kjernefakta — diagnosekriterier, førstevalg, doser, kontraindikasjoner, normalverdier —
   legges her som korte, puggbare kort.
4. **`theorem`-blokker = kliniske algoritmer/beslutningstrær.** De eksamensrelevante
   beslutningsalgoritmene (ACS-håndtering, sepsis-bundle, blodgass-tolkning, respirasjons-
   støtte-eskalering, hyperkalemi-trapp) presenteres som nummererte `theorem`-blokker
   (beslutningstrær), fordi de skal *anvendes* under tidspress, ikke utledes.
5. **Rekkefølge etter frekvensvekt, ikke faglig avhengighet (avvik fra DNA-regnefag).** De
   kliniske disiplinene er selvstendige beslutningsdomener uten de tunge avhengighetskjedene
   et regnefag har, så tyngst-først maksimerer avkastning. Der et disiplinkapittel trenger et
   tverrgående verktøy (blodgass, dosejustering), gir **Del 0.3** hurtigreferansen, og
   forkunnskaper-blokken **lenker tilbake** dit. `prerequisites`-feltet peker likevel bare
   BAKOVER (til tidligere kapitler / Del 0) for å holde metadata-grafen asyklisk.
6. **Farmakologi og geriatri tverrgående, ikke isolert.** Hver behandlingsoppgave er i
   praksis en farmakologioppgave (riktig middel/dose/kontraindikasjon), og en stor andel
   vignetter gjelder eldre/multisyke. Disse veves inn i HVERT disiplinkapittel (dose ved
   nyresvikt, opioidtitrering hos skrøpelig, CFS-vurdering) og samles i **Del 14**. Geriatri
   får ikke egen del (kun 2/16 som rendyrket) — den er en gjennomgående individualiseringsakse.
7. **Ingen forfatter-/pensumforankring.** Forankringen er til norske retningslinjer
   (Legemiddelhåndboka, NEL, Helsedirektoratets veiledere, Felleskatalogen), normalverdier og
   standard behandlingsprinsipper. ALDRI oppdiktede doser/terskler — usikre detaljer merkes
   `(verifiser)` for fase 6.

### Kapittel-DNA (disiplinkapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — frekvens/andel, gjenganger-score, hvilke sjangre (BEH/DIA/
   HÅND/UTR/KUNN) temaet inngår i, og hva sensornøkkelen belønner. Fylles fra skjelettets
   Eksamensbelegg — forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + tilbakelenker til Del 0s
   tverrgående verktøy og kryssbok-lenker (README-leserkrav), etterfulgt av `collapsible`
   **Klinisk nøkkelfakta- og verdiliste** (førstevalg, doser `(verifiser)`, kontraindikasjoner,
   normalverdier/terskler som må sitte utenat — per kapittel).
3. `text` **Klinisk oversikt** — kort (maks 2–3 avsnitt): hvilke presentasjoner testes og
   hvilken beslutning LIS1/fastlege skal ta. Ikke et oppslagsverk.
4. `definition` **Klinisk nøkkelfakta** — diagnosekriterier, førstevalgsbehandling, doser,
   kontraindikasjoner, normalverdier i klinisk terminologi. **Toppnivå med `title` — dette
   er flashcard-kilden.**
5. `theorem`/`text` **Kliniske algoritmer / beslutningstrær** — de eksamensrelevante
   beslutningsveiene, nummerert (vignett-funn → neste steg). Anvendes, ikke utledes.
6. `example` × 2–4 **Vignett-gjennomganger** — nyskrevne pasientvignetter i LIS1-/fastlege-
   rolle med fire alternativer A–D og **full distraktoranalyse** (hvorfor hver distraktor er
   nest best/gal). Første enkel (klassisk presentasjon), siste på eksamensnivå (tvetydig /
   komorbiditet / individualisering). Bruk **distraktoranalyse-malen** (se §2 under).
7. `warning` **Typiske feil** — feilkodene (F1–F13) som gjelder temaet, med den kliniske
   fellen konkret.
8. `exercise` × 8–14 — stigende: 2–3 klassiske presentasjoner (lett), 3–5 standard (middels),
   3–6 eksamensnivå (tvetydig/individualisering, samme sjanger/vekt som reelle oppgaver). ALLE
   er vignett + fire alternativer + `solution` med **full distraktoranalyse** + `hints`. Hver
   oppgave merket med sjangerkode (BEH/DIA/HÅND/UTR/KUNN).
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter/nøkkelfakta fra kapitlet (og
   Del 0-verktøyene det bruker).

### Distraktoranalyse-mal (obligatorisk i hver vignett-oppgave — den definerende mekanikken)

Hver `example`/`exercise`-løsning følger denne malen (nyskrevet, aldri kopiert fra arkiv):

> **Riktig svar (X):** [alternativet] — fordi [det mest hensiktsmessige tiltaket her, med
> begrunnelse i vignettens rolle + funn + komorbiditet].
> **A/B/C/D (distraktorene):** for HVER av de tre gale: «[alternativet] — [nest best/gal
> fordi …]». Bruk de reelle feilmønstrene: *riktig klasse, feil middel* · *riktig tanke, ikke
> førstevalg* · *feil startdose/vei* · *for aggressiv/for passiv* · *ignorerer komorbiditeten
> (f.eks. nyresvikt/kontraindikasjon)* · *behandler labavviket, ikke pasienten* · *bedrer
> oksygenering, ikke ventilasjon*.
> **Snubletråd/læringspunkt:** den ene tingen som skiller toppsjikt fra bestått her.

Drill-, distraktor-, feil-, gjette- og øvingseksamenskapitlene (Del 15) har egne oppsett —
se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = andel/gjenganger-score + sjangerkoder (BEH/DIA/HÅND/
> UTR/KUNN) + prioritetsklasse (perfekt/kunne/kjenne/meta). **Faktakontrakt** = diagnose-
> kriterier/førstevalg/doser/kontraindikasjoner/normalverdier som SKAL med (doser `(verifiser)`).
> **Algoritmer** = beslutningstrær (vignett-funn → neste steg) som må sitte utenat.
> **Vignett-sjangre** = hvilke spørsmålsstammer kapitlet skal drille. **Typiske feil** =
> feilkoder (F1–F13). **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart, beslutningshåndverk og tverrgående verktøy

#### Kapittel 0.1: Slik testes felles avsluttende deleksamen
**id:** `med-avsluttende-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (140 MCQ, 4 t, single best answer, ingen hjelpemidler,
  bestått/ikke bestått), frekvensvekten per klinisk disiplin, og hvordan boka brukes mot
  eksamen — studentens prioriteringsverktøy.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2017–2026). Skal formidle: (a) **gjeldende
  form** — 140 flervalgsoppgaver, single best answer, fire alternativer A–D, 4 timer (~100
  sek/oppgave), INGEN hjelpemidler, digital (Inspera), **bestått/ikke bestått** med
  standardsatt grense per sitting (~58–61 %; snitt ~73–80 %), nasjonal/felles for UiO/UiB/
  NTNU/UiT, vår + høst, aktiv per 2026; (b) **anomali-advarselen**: pilotårenes 120/160/180
  oppgaver (2017–2019) er IKKE normgivende — 140 fra V2020; (c) **frekvensvekt-tabellen**
  (andel · gjenganger): kardiologi 15,7 % (16/16) · infeksjon 8,2 % (16/16) · ortopedi 7,1 %
  (16/16) · gastro 6,9 % (16/16) · lunge 6,8 % (15/16) · ØNH/øye 6,5 % (16/16) · nefro/uro
  6,0 % (16/16) · psykiatri 5,8 % (15/16) · onkologi 4,4 % · hematologi 4,3 % · nevrologi
  4,0 % · kirurgi 3,9 % · endokrin 3,2 % · revma 3,1 % · gyn/obst 2,4 % · allmenn/jus 2,3 % ·
  pediatri 2,1 % · hud 1,8 % · akutt/anestesi 1,6 % · farmakologi 1,3 % (tverrgående) · geriatri
  tverrgående; hovedbolker: **indremedisin ~55–60 %**, kirurgi ~14 %; (d) at **bredden er
  poenget** — 10 disipliner 16/16, ingen kan neglisjeres; (e) prioriteringsrekkefølgen fra
  analysen §7. Prioritet: perfekt (meta).
- **Faktakontrakt:** frekvensvekt-tabellen; format-fakta; bestått-logikken (standardsatt,
  kriterierefererende); hovedbolk-inndelingen.
- **Algoritmer:** ingen (kartkapittel).
- **Vignett-sjangre:** vis ett nyskrevet mini-vignett-eksempel med de fem sjangerstammene
  (BEH/DIA/HÅND/UTR/KUNN) og hvordan man kjenner igjen hva som spørres om.
- **Typiske feil:** F13 (blank på usikker — gjett alltid); misforståelsen at man kan «slå opp»
  (ingen hjelpemidler); å satse smalt på favorittfag (bredden straffer det).
- **Kvote:** 14 quiz / 10 flashcards (format-fakta, frekvensvekt, hvem-er-gjenganger).

#### Kapittel 0.2: Single best answer, distraktoranalyse og gjettestrategi
**id:** `med-avsluttende-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `med-avsluttende-0-1`

- **Kapitteltype:** beslutningshåndverk.
- **Description:** Hvordan man tenker single best answer, leser distraktorer, disponerer 100
  sekunder, og gjetter rasjonelt uten minuspoeng — den gjennomgående ferdigheten i boka.
- **Eksamensbelegg:** Destillat av sensornøkkelen (analysen §4), stabil 2020→. Prioritet:
  perfekt (meta). Skal operasjonalisere: (a) **single-best-answer-tankesettet** — flere
  alternativer kan være forsvarlige, men velg det **mest hensiktsmessige** (raskest/tryggest/
  mest målrettet gitt rolle + funn + komorbiditet); kommisjonen håndhever «tydelig beste
  svar» ved klager; (b) **distraktor-lesing** — de tre gale er plausible og følger faste
  mønstre (riktig klasse/feil middel; riktig tanke/ikke førstevalg; feil dose/vei; for
  aggressiv/for passiv; ignorerer komorbiditet; behandler labavviket ikke pasienten); trene
  aktiv eliminering; (c) **tidsdisiplin** — ~100 sek/oppgave, ikke bli hengende, marker og gå
  videre; (d) **gjettestrategien** — INGEN minuspoeng → svar ALLTID; eliminer det du kan,
  gjett blant resten; (e) **les rollen og komorbiditeten** (de er sjelden pynt).
- **Faktakontrakt:** single-best-answer-definisjonen; de faste distraktormønstrene som liste;
  tidsbudsjettet; gjetteregelen; distraktoranalyse-malen (§2).
- **Algoritmer:** (1) oppgaveløsnings-loop: les stamme (hva spørres?) → les rollen/komorbiditet
  → generer eget svar før du ser alternativene → match/eliminer → velg mest hensiktsmessig →
  ved tvil, gjett og gå videre.
- **Vignett-sjangre:** samme vignett besvart tre måter — velge et forsvarlig (men ikke
  optimalt) tiltak (F1), overse komorbiditeten (F3), og den riktige single-best-answer-
  vurderingen — med margnotat om hvor toppsjiktet skilles.
- **Typiske feil:** F1 (forsvarlig ≠ optimalt), F13 (blank), F3 (ignorere komorbiditet),
  tidsfellen (bruke 5 min på én oppgave).
- **Kvote:** 16 quiz / 12 flashcards (single-best-answer-prinsippet, distraktormønstre,
  gjetteregel, tidsbudsjett).

#### Kapittel 0.3: Tverrgående beslutningsverktøy — blodgass, nyresvikt-dosering, respirasjonsstøtte, ABCDE
**id:** `med-avsluttende-0-3` · **number:** 0.3 · **estimatedMinutes:** 60 · **prerequisites:** `med-avsluttende-0-2`

- **Kapitteltype:** tverrgående verktøykasse.
- **Description:** De fire beslutningsverktøyene som veves inn i vignetter på tvers av alle
  disipliner: arteriell blodgass-tolkning, dosejustering ved nyresvikt, respirasjonsstøtte-
  eskalering og ABCDE — samlet her og lenket til fra hvert disiplinkapittel.
- **Eksamensbelegg:** Blodgass, elektrolytter, eGFR-justering, respirasjonsstøtte og ABCDE er
  **innvevd** i vignetter overalt (analysen §3/§6). Prioritet: perfekt (meta). Skal etablere:
  (a) **blodgass-tolkning** systematisk; (b) **anion gap** og intoksikasjonslogikk; (c)
  **dosejustering ved eGFR-fall** + faste kontraindikasjoner; (d) **respirasjonsstøtte-
  eskalering** (oksygenering vs. ventilasjon — F5); (e) **ABCDE** som fast handlingssekvens.
- **Faktakontrakt (alt `(verifiser)`):** arteriell blodgass normalverdier — pH 7,35–7,45;
  PaCO₂ 4,7–6,0 kPa; PaO₂ 10,7–13,3 kPa; SaO₂ 96–99 %; HCO₃⁻ 22–26 mmol/L; BE −3 til +3;
  **anion gap 8–12 mmol/L** = Na⁺ − (Cl⁻ + HCO₃⁻); vitalia-terskler (RF, SpO₂-grenser for
  O₂-behov, BT-/puls-grenser for sjokk, GCS); eGFR-terskler for dosejustering; faste
  kontraindikasjoner (DOAK ved mitralstenose/mekanisk klaff → warfarin; NSAID ved nyresvikt/
  hjertesvikt/ulcus; aminoglykosid ved nyresvikt); CFS (Clinical Frailty Scale) som
  intensitetsstyrer.
- **Algoritmer:** (1) **blodgass-trappen**: 1) pH → acidose/alkalose; 2) PaCO₂ → respiratorisk?
  3) HCO₃⁻/BE → metabolsk? 4) kompensasjon? 5) ved metabolsk acidose: regn anion gap → høyt
  AG (metanol/etylenglykol/ketoacidose/laktat/urinstoff) vs. normalt AG (diaré/renal). (2)
  **respirasjonsstøtte-eskalering**: O₂ (nesekateter → maske → high-flow) hever oksygenering;
  ved **ventilasjonssvikt (høy PaCO₂)** trengs **trykkstøtte/NIV/CPAP**, ikke bare mer O₂
  (F5). (3) **ABCDE**: Airway → Breathing → Circulation → Disability (GCS/pupiller/BS) →
  Exposure — behandle det livstruende i hvert steg før du går videre. (4) **nyresvikt-
  dosejustering**: sjekk eGFR → juster renalt utskilte legemidler / unngå kontraindikerte.
- **Vignett-sjangre:** blodgass-vignett (tolk + neste steg), respirasjonssvikt-vignett (O₂ vs.
  NIV), nyresvikt-dosevignett, ABCDE-akuttvignett — hver med distraktoranalyse.
- **Typiske feil:** F5 (O₂ når problemet er ventilasjon), F8 (feil anion gap-tolkning), F3
  (ikke justere dose ved eGFR-fall), F11/F12 (kontraindikasjoner), F4 (behandle labavvik).
- **Kvote:** 20 quiz / 20 flashcards (blodgass-verdier, anion gap-årsaker, eGFR-terskler,
  kontraindikasjoner, respirasjonsstøtte-trapp, ABCDE).

### Del 1 — Kardiologi og hjerte-kar

#### Kapittel 1.1: Koronarsykdom og akutt koronarsyndrom (ACS)
**id:** `med-avsluttende-1-1` · **number:** 1.1 · **estimatedMinutes:** 65 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin (klinisk beslutning).
- **Description:** Angina pectoris, ustabil angina, NSTEMI og STEMI — diagnose fra vignett
  (EKG + troponin), akuttbehandling og sekundærprofylakse i LIS1-rolle.
- **Eksamensbelegg:** Del av kardiologi (~15,7 %, 16/16 — bokas største domene). ACS er
  gjenganger med EKG-tolkning og behandlingsvalg. Sjangre: DIA (ACS vs. differensial), BEH
  (akuttbehandling/sekundærprofylakse), HÅND (STEMI → PCI-tid), UTR (troponin/EKG). Prioritet:
  perfekt.
- **Faktakontrakt (doser `(verifiser)`):** angina-typer; STEMI (ST-elevasjon) vs. NSTEMI
  (troponinstigning uten ST-elevasjon) vs. ustabil angina; akutt ACS-behandling (ASA,
  nitroglyserin, O₂ ved hypoksi, morfin ved smerte, P2Y12-hemmer, antikoagulasjon); STEMI →
  reperfusjon (primær PCI innen tidsvindu, ev. trombolyse); sekundærprofylakse (ASA + statin +
  betablokker + ACE-hemmer `(verifiser sammensetning)`); risikofaktorer.
- **Algoritmer:** (1) brystsmerte-vignett → EKG (ST-elevasjon? → STEMI → straks PCI) → troponin
  (stigende uten ST-elevasjon → NSTEMI) → behandlingsvalg. (2) sekundærprofylakse-pakken etter
  infarkt.
- **Vignett-sjangre:** «Du er LIS1, pasient med brystsmerter + EKG-beskrivelse» → DIA/HÅND;
  behandlingsvalg med komorbiditet (nyresvikt, blødningsrisiko) → BEH med distraktoranalyse.
- **Typiske feil:** F1 (forsvarlig ≠ raskest — utsette PCI), F6 (overse infarkt bak «dyspepsi»),
  F3 (ikke justere for nyresvikt/blødningsrisiko), F5 (rutine-O₂ uten hypoksi).
- **Kvote:** 22 quiz / 18 flashcards.

#### Kapittel 1.2: Hjertesvikt
**id:** `med-avsluttende-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `med-avsluttende-1-1`

- **Kapitteltype:** disiplin.
- **Description:** Akutt og kronisk hjertesvikt — diagnose (klinikk + BNP + ekko), akutt
  lungeødem-håndtering og medikamentell grunnbehandling.
- **Eksamensbelegg:** Kardiologi (16/16); hjertesvikt er høyfrekvent, ofte med akutt lungeødem
  eller medikamentvalg. Sjangre: DIA, BEH (grunnbehandling/akutt lungeødem), HÅND (akutt
  forverring). Prioritet: perfekt.
- **Faktakontrakt (doser `(verifiser)`):** HFrEF vs. HFpEF (kort); symptomer/tegn (dyspné,
  ødem, halsvenestuvning); NT-proBNP-rolle; ekko; kronisk grunnbehandling (ACE-hemmer/ARB,
  betablokker, MRA, SGLT2-hemmer `(verifiser gjeldende «fire søyler»)`); akutt lungeødem
  (sittende, O₂/CPAP, i.v. loop-diuretikum, nitrat, morfin `(verifiser)`); NSAID
  kontraindisert (F12).
- **Algoritmer:** (1) akutt lungeødem: sittende stilling → O₂/CPAP → i.v. furosemid → nitrat
  ved høyt BT → vurder NIV. (2) kronisk oppstart/opptrapping av grunnbehandling.
- **Vignett-sjangre:** akutt tungpustet med stuvning → HÅND/BEH; medikamentvalg ved
  komorbiditet → BEH med distraktoranalyse (feil klasse, NSAID-felle).
- **Typiske feil:** F12 (NSAID), F3 (dosere diuretikum uten hensyn til nyre/elektrolytt), F5
  (O₂ uten CPAP ved alvorlig ødem), F1 (peroralt der i.v. trengs akutt).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 1.3: Atrieflimmer og antikoagulasjon (inkl. DOAK-fellen)
**id:** `med-avsluttende-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `med-avsluttende-1-1`

- **Kapitteltype:** disiplin.
- **Description:** Atrieflimmer — frekvens- vs. rytmekontroll, og slagprofylakse med
  CHA₂DS₂-VASc — inkludert den faste snubletråden DOAK ved mitralstenose/mekanisk klaff.
- **Eksamensbelegg:** Kardiologi (16/16); antikoagulasjon er en klassisk snubletråd (DOAK vs.
  warfarin). Sjangre: BEH (antikoagulasjon/frekvenskontroll), DIA (AF på EKG), HÅND. Prioritet:
  perfekt.
- **Faktakontrakt (doser/terskler `(verifiser)`):** AF på EKG (uregelmessig, ingen P); frekvens-
  kontroll (betablokker/kalsiumantagonist) vs. rytmekontroll; **CHA₂DS₂-VASc** for
  slagrisiko → antikoagulasjonsindikasjon; **DOAK som førstevalg VED IKKE-klaffeassosiert AF**,
  men **DOAK KONTRAINDISERT ved mekanisk klaff / moderat-alvorlig mitralstenose → warfarin**
  (F11 — snubletråden); blødningsrisiko (HAS-BLED kort).
- **Algoritmer:** (1) nyoppdaget AF → hemodynamisk ustabil? (→ el-konvertering) → frekvens-/
  rytmekontroll → CHA₂DS₂-VASc → antikoagulasjon: klaffefeil? → warfarin, ellers DOAK.
- **Vignett-sjangre:** AF + mitralstenose/mekanisk klaff → BEH (warfarin, ikke DOAK) med
  distraktoranalyse; AF + nyresvikt → dosejustert DOAK/valg.
- **Typiske feil:** **F11** (DOAK ved mitralstenose/mekanisk klaff — kapitlets kjernefelle),
  F3 (ikke dosejustere DOAK ved nyresvikt), F1 (rytme der frekvenskontroll holder).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 1.4: Hypertensjon, kardiovaskulær risiko og NORRISK 2
**id:** `med-avsluttende-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-1-1`

- **Kapitteltype:** disiplin.
- **Description:** Hypertensjonsutredning og -behandling, statinindikasjon via NORRISK 2, og
  primærprofylakse i fastlegerollen.
- **Eksamensbelegg:** Kardiologi (16/16); hypertensjon/risiko + statin er høyfrekvent, ofte i
  fastlegerolle. Sjangre: BEH (antihypertensiva-trapp/statin), HÅND (risikovurdering), KUNN
  (NORRISK). Prioritet: perfekt.
- **Faktakontrakt (terskler/doser `(verifiser)`):** BT-grenser og diagnose; antihypertensiva-
  klasser og trapp (ACE-hemmer/ARB, kalsiumantagonist, tiazid, ev. betablokker) og valg ved
  komorbiditet (diabetes → ACE/ARB; hjertesvikt); **NORRISK 2** som kardiovaskulær risikoskår
  → statinindikasjon (terskler `(verifiser)`); livsstil før/ved siden av medikament.
- **Algoritmer:** (1) hypertensjon → bekreft (gjentatte målinger/hjemme-BT) → utred sekundære
  årsaker ved mistanke → livsstil + medikament etter komorbiditet. (2) NORRISK 2 → statin ved
  terskeloverskridelse.
- **Vignett-sjangre:** fastlege + risikoprofil → BEH (statin ja/nei), antihypertensiva-valg ved
  komorbiditet med distraktoranalyse.
- **Typiske feil:** F1 (feil klassevalg for komorbiditeten), F4 (behandle ett høyt måletall
  uten å bekrefte), F3 (ACE-hemmer ved nyrearteriestenose/graviditet `(verifiser)`).
- **Kvote:** 18 quiz / 14 flashcards.

#### Kapittel 1.5: Klaffesykdom, arytmier og øvrig hjerte-kar
**id:** `med-avsluttende-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-1-2`

- **Kapitteltype:** disiplin.
- **Description:** Aortastenose og øvrige klaffefeil, vanlige arytmier (bradyarytmi/
  ledningsblokk, supraventrikulær/ventrikulær takykardi), synkope og perifer karsykdom kompakt.
- **Eksamensbelegg:** Kardiologi (16/16); klaffefeil (aortastenose-triaden), arytmi og synkope
  forekommer. Sjangre: DIA (bilyd/synkope-årsak), HÅND (bradyarytmi/ustabil takykardi), UTR
  (ekko). Prioritet: perfekt/kunne.
- **Faktakontrakt (`(verifiser)`):** aortastenose (angina/synkope/dyspné, ejeksjonsbilyd) og
  øvrige klaffefeil kort; bradyarytmi/AV-blokk (pacemaker-indikasjon kort); SVT (vagusmanøver/
  adenosin) og VT (ustabil → el-konvertering); synkope-triage (kardial vs. vasovagal); perifer
  arteriell sykdom + DVT/lungeemboli-lenke til Del 4.
- **Algoritmer:** (1) takykardi-vignett: stabil vs. ustabil → ustabil = el-konvertering;
  smal/regelmessig → vagusmanøver/adenosin. (2) synkope: alarmtegn → kardial utredning vs.
  benign vasovagal.
- **Vignett-sjangre:** synkope + ejeksjonsbilyd → DIA/UTR (aortastenose, ekko); ustabil
  takykardi → HÅND med distraktoranalyse.
- **Typiske feil:** F7 (undervurdere kardial synkope), F1 (medikament der ustabil takykardi
  krever el-konvertering), F6 (overse aortastenose bak «anstrengelsesdyspné»).
- **Kvote:** 18 quiz / 14 flashcards.

### Del 2 — Infeksjonsmedisin

#### Kapittel 2.1: Sepsis og empirisk antibiotikavalg
**id:** `med-avsluttende-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Gjenkjenne sepsis tidlig (qSOFA/vitalia), sepsis-bundle, og velge empirisk
  antibiotika etter mistenkt fokus — i LIS1-/akuttrolle.
- **Eksamensbelegg:** Infeksjon (~8,2 %, 16/16 — nest største indremedisinske søyle). Sepsis
  og empirisk antibiotika er gjengangere. Sjangre: HÅND (sepsis-bundle/hva først), BEH
  (empirisk antibiotika), DIA (sepsis vs. SIRS). Prioritet: perfekt.
- **Faktakontrakt (doser/regimer `(verifiser)`):** sepsis-definisjon og alarmtegn (qSOFA:
  RF≥22, endret mental status, systolisk BT≤100 `(verifiser)`); sepsis-bundle (blodkultur FØR
  antibiotika, bredt empirisk antibiotikum raskt, væske, laktat, kilde-kontroll); empirisk valg
  etter fokus (lunge/urinveier/abdomen/hud) og lokale resistensmønstre; når smalne ned etter
  dyrkning.
- **Algoritmer:** (1) sepsis-bundle-sekvens: gjenkjenn → blodkultur → i.v. bredspektret
  antibiotika tidlig → væskebolus → mål laktat → finn og sanér fokus. (2) empirisk valg etter
  mistenkt fokus.
- **Vignett-sjangre:** febril hypotensiv pasient → HÅND (hva først: blodkultur før antibiotika)
  + BEH (empirisk valg etter fokus) med distraktoranalyse.
- **Typiske feil:** F7 (undervurdere sepsis / for sen antibiotika), F1 (antibiotika før
  blodkultur når kultur er raskt mulig — rekkefølge), F3 (dosere aminoglykosid ved nyresvikt).
- **Kvote:** 22 quiz / 18 flashcards.

#### Kapittel 2.2: Vanlige infeksjoner per organsystem
**id:** `med-avsluttende-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `med-avsluttende-2-1`

- **Kapitteltype:** disiplin.
- **Description:** Pneumoni, urinveisinfeksjon/pyelonefritt, hud-/bløtdelsinfeksjon, meningitt
  og gastroenteritt — diagnose og førstevalgs empirisk antibiotika i fastlege-/LIS1-rolle.
- **Eksamensbelegg:** Infeksjon (16/16); de vanlige organinfeksjonene er faste. Sjangre: BEH
  (førstevalg antibiotika), DIA, HÅND (innleggelse vs. hjemmebehandling — CRB-65). Prioritet:
  perfekt.
- **Faktakontrakt (regimer `(verifiser)`):** samfunnservervet pneumoni (CRB-65 for alvorlighet;
  penicillin som førstevalg i Norge `(verifiser)`); nedre/øvre UVI og pyelonefritt (førstevalg,
  gravid = eget hensyn); erysipelas/cellulitt; bakteriell meningitt (alarmtegn → straks
  antibiotika + steroid, ikke vent på CT/spinalpunksjon `(verifiser rekkefølge)`); virale vs.
  bakterielle luftveisinfeksjoner (antibiotika-restriksjon).
- **Algoritmer:** (1) pneumoni: CRB-65 → hjemme vs. innleggelse → empirisk antibiotika. (2)
  meningitt-mistanke: ikke utsett antibiotika for bildediagnostikk.
- **Vignett-sjangre:** hoste + feber + funn → DIA/BEH (penicillin); dysuri hos gravid → BEH
  (trygt middel) med distraktoranalyse.
- **Typiske feil:** F1 (bredspektret der smalt holder — resistensdriver), F7 (utsette
  antibiotika ved meningitt), F3 (feil middel i svangerskap/nyresvikt).
- **Kvote:** 22 quiz / 18 flashcards.

#### Kapittel 2.3: Antibiotikaprinsipper, resistens og spesielle infeksjoner
**id:** `med-avsluttende-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-2-2`

- **Kapitteltype:** disiplin.
- **Description:** Virkningsmekanismer, resistensutvikling og antibiotikastyring, pluss
  spesielle infeksjoner (endokarditt, tuberkulose, seksuelt overførbare, importfeber kort).
- **Eksamensbelegg:** Infeksjon (16/16); mekanisme-/resistens-«rene fakta»-oppgaver forekommer
  (KUNN), spesialtilstander som distraktorer. Sjangre: KUNN (mekanisme/resistens), DIA
  (spesielle infeksjoner), BEH. Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** antibiotikaklasser og virkningsmekanisme (celleveggs-,
  proteinsyntese-, DNA-hemmere kort); resistensmekanismer og hvorfor smalspektret/kort kur
  foretrekkes; endokarditt (feber + nyoppstått bilyd → blodkultur + ekko); tuberkulose
  (langvarig hoste/nattesvette, smitteoppsporing); STI kort.
- **Algoritmer:** (1) antibiotikastyring: smalest mulig, kortest mulig, etter dyrkning. (2)
  endokarditt-mistanke → blodkultur før antibiotika + ekko.
- **Vignett-sjangre:** mekanisme-KUNN («hvilket utsagn er riktig om …»); feber + bilyd → DIA/UTR
  med distraktoranalyse.
- **Typiske feil:** F1 (feil klasse for agens), F6 (overse endokarditt bak «langvarig feber»),
  KUNN-fellen (forveksle mekanismer).
- **Kvote:** 18 quiz / 14 flashcards.

### Del 3 — Gastroenterologi

#### Kapittel 3.1: Akutt abdomen og magesmerter
**id:** `med-avsluttende-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Systematisk tilnærming til akutte magesmerter — lokalisasjon, alarmtegn,
  riktig bildediagnostikk og når kirurgi haster (appendisitt, kolecystitt, divertikulitt,
  ileus, perforasjon).
- **Eksamensbelegg:** Gastro (~6,9 %, 16/16) + gastrokirurgi. Akutt abdomen er gjenganger med
  bilde-modalitetsvalg. Sjangre: DIA (årsak fra lokalisasjon/funn), UTR (CT vs. ultralyd),
  HÅND (kirurgi/innleggelse). Prioritet: perfekt.
- **Faktakontrakt (`(verifiser)`):** smertelokalisasjon → differensialdiagnoser (RNQ →
  appendisitt; RUQ → galle; venstre nedre → divertikulitt); alarmtegn (peritonitt, sepsis,
  ileus); modalitetsvalg (ultralyd ved galle/gyn, CT abdomen ved uklar/alvorlig; stående
  oversikt ved perforasjonsmistanke `(verifiser)`); akutt kirurgi-indikasjoner.
- **Algoritmer:** (1) akutt abdomen: ABCDE/vitalia → lokaliser smerte → alarmtegn? → riktig
  bilde → kirurgisk vs. konservativt.
- **Vignett-sjangre:** smertevignett + funn → DIA + UTR (riktig modalitet) med distraktoranalyse
  (feil modalitet, for passiv ved peritonitt).
- **Typiske feil:** F6 (overse perforasjon/ileus), F7 (konservativt ved kirurgisk abdomen), F1
  (CT der ultralyd er førstevalg / motsatt).
- **Kvote:** 22 quiz / 16 flashcards.

#### Kapittel 3.2: GI-blødning, ulcus og dyspepsi
**id:** `med-avsluttende-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-3-1`

- **Kapitteltype:** disiplin.
- **Description:** Øvre og nedre GI-blødning (hematemese/melena), ulcus pepticum, H. pylori og
  dyspepsi — hemodynamisk håndtering, gastroskopi og PPI/NSAID-logikken.
- **Eksamensbelegg:** Gastro (16/16); GI-blødning og ulcus er faste, ofte med NSAID/antikoagulasjon
  i vignetten. Sjangre: HÅND (blødningshåndtering), BEH (PPI/H. pylori-eradikasjon), DIA.
  Prioritet: perfekt.
- **Faktakontrakt (doser `(verifiser)`):** hematemese/melena → øvre blødning; hemodynamisk
  stabilisering (væske/blod), i.v. PPI, hasteskopi; ulcus (H. pylori + NSAID som årsaker);
  H. pylori-eradikasjon (trippelkur `(verifiser)`); PPI-indikasjon; NSAID-stopp; anemi-utredning
  ved okkult blødning.
- **Algoritmer:** (1) øvre GI-blødning: ABCDE → væske/blod → i.v. PPI → hasteskopi → hemostase.
- **Vignett-sjangre:** hematemese + NSAID-bruk → HÅND/BEH; ulcus + H. pylori → BEH med
  distraktoranalyse.
- **Typiske feil:** F12 (fortsette NSAID), F7 (utsette skopi ved aktiv blødning), F3 (ignorere
  antikoagulasjon i blødningsvignetten), F1 (peroral PPI ved akutt blødning).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 3.3: Lever, galle, pankreas og tarmsykdom
**id:** `med-avsluttende-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-3-1`

- **Kapitteltype:** disiplin.
- **Description:** Ikterus og leversykdom, gallesten/kolecystitt/kolangitt, akutt pankreatitt,
  og kronisk tarmsykdom (IBD, cøliaki, IBS) — utredning og førstetiltak.
- **Eksamensbelegg:** Gastro (16/16); lever/galle og pankreatitt er faste, IBD/cøliaki
  forekommer. Sjangre: DIA (ikterus-årsak, IBD vs. IBS), UTR (leverprøver/bilde), BEH.
  Prioritet: perfekt/kunne.
- **Faktakontrakt (`(verifiser)`):** ikterus (prehepatisk/hepatisk/posthepatisk) og
  leverprøvemønstre; gallesten → kolecystitt/kolangitt (Charcots triade); akutt pankreatitt
  (smerte + forhøyet amylase/lipase, gallesten/alkohol som årsak); IBD (Crohn vs. ulcerøs
  kolitt kort), cøliaki (antistoff + biopsi), IBS (eksklusjonsdiagnose, alarmtegn).
- **Algoritmer:** (1) ikterus → leverprøvemønster + ultralyd → hepatisk vs. obstruktiv. (2)
  akutt pankreatitt → smertelindring + væske + finn årsak.
- **Vignett-sjangre:** ikterus + funn → DIA/UTR; RUQ-smerte + feber → DIA (kolangitt) med
  distraktoranalyse.
- **Typiske feil:** F6 (overse kolangitt/sepsis), F1 (feil førstetiltak ved pankreatitt), DIA-
  felle (IBS uten å ekskludere alarmtegn).
- **Kvote:** 18 quiz / 14 flashcards.

### Del 4 — Lungemedisin

#### Kapittel 4.1: Astma og kols
**id:** `med-avsluttende-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Astma og kols — diagnose (spirometri), vedlikeholds-trappen og håndtering av
  akutt forverring/eksaserbasjon i fastlege-/akuttrolle.
- **Eksamensbelegg:** Lunge (~6,8 %, 15/16); astma/kols og eksaserbasjon er gjengangere.
  Sjangre: BEH (inhalasjonstrapp/eksaserbasjon), DIA (astma vs. kols), HÅND (akutt forverring).
  Prioritet: perfekt.
- **Faktakontrakt (doser `(verifiser)`):** astma (reversibel obstruksjon) vs. kols (irreversibel,
  røyk); spirometri; inhalasjonstrapp (SABA → ICS → LABA/LAMA `(verifiser gjeldende GOLD/
  astmaretningslinjer)`); kols-eksaserbasjon (bronkodilatator, systemisk steroid, antibiotika
  ved infeksjonstegn, O₂ FORSIKTIG — CO₂-retensjon, mål SpO₂ 88–92 % `(verifiser)`); astma-anfall.
- **Algoritmer:** (1) kols-eksaserbasjon: bronkodilatator + steroid ± antibiotika, kontrollert O₂
  (mål 88–92 %), vurder NIV ved ventilasjonssvikt (lenk Del 0.3). (2) astma-trapp.
- **Vignett-sjangre:** kjent kols med forverring + blodgass → HÅND/BEH (kontrollert O₂, NIV);
  astmatrapp-valg → BEH med distraktoranalyse.
- **Typiske feil:** F5 (høy-flow O₂ ved kols → CO₂-narkose i stedet for kontrollert O₂/NIV), F1
  (glemme steroid ved eksaserbasjon), DIA-felle (astma vs. kols).
- **Kvote:** 22 quiz / 16 flashcards.

#### Kapittel 4.2: Pneumoni, lungeemboli og respirasjonssvikt
**id:** `med-avsluttende-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `med-avsluttende-4-1`

- **Kapitteltype:** disiplin.
- **Description:** Respirasjonssvikt type 1 vs. 2 (blodgass), lungeemboli (Wells → utredning →
  antikoagulasjon) og pneumoni-håndtering — der blodgass og respirasjonsstøtte er avgjørende.
- **Eksamensbelegg:** Lunge (15/16); respirasjonssvikt/blodgass og lungeemboli er faste,
  blodgass-tolkning er innvevd. Sjangre: HÅND (respirasjonsstøtte), DIA (LE), UTR (CT-angio/
  D-dimer). Prioritet: perfekt.
- **Faktakontrakt (`(verifiser)`):** respirasjonssvikt type 1 (hypoksisk) vs. type 2 (hyperkapnisk
  → NIV, ikke bare O₂ — F5); lungeemboli (Wells-skår → D-dimer/CT-pulmonalangiografi;
  antikoagulasjon; massiv LE → trombolyse); pneumoni (lenk 2.2); pneumothorax kort.
- **Algoritmer:** (1) respirasjonssvikt: blodgass → type 1 (O₂) vs. type 2 (NIV/trykkstøtte)
  (lenk Del 0.3). (2) LE: Wells → D-dimer/CT-angio → antikoagulasjon.
- **Vignett-sjangre:** dyspné + blodgass (høy PaCO₂) → HÅND (NIV); pleuritisk smerte + takykardi
  → DIA/UTR (LE) med distraktoranalyse.
- **Typiske feil:** F5 (O₂ når ventilasjon svikter), F8 (feil blodgass-tolkning), F1 (utsette
  antikoagulasjon ved høy LE-sannsynlighet).
- **Kvote:** 22 quiz / 16 flashcards.

#### Kapittel 4.3: Lungekreft og øvrig lungemedisin (inkl. radon)
**id:** `med-avsluttende-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `med-avsluttende-4-1`

- **Kapitteltype:** disiplin.
- **Description:** Lungekreft (alarmtegn, utredning), miljø-/yrkesfaktorer inkl. radon, og
  interstitiell/øvrig lungesykdom kompakt.
- **Eksamensbelegg:** Lunge (15/16); lungekreft-utredning og «rene fakta» som radon → lungekreft
  (ikke kols) er kjente KUNN-oppgaver. Sjangre: DIA/UTR (kreftutredning), KUNN (radon/yrke).
  Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** lungekreft alarmtegn (langvarig hoste, hemoptyse, vekttap)
  → CT + henvisning pakkeforløp; røyking som hovedrisiko; **radon → lungekreft (ikke kols);
  nasjonal grenseverdi 200 Bq/m³ `(verifiser)`**; yrkeseksponering (asbest); interstitiell
  lungesykdom kort.
- **Algoritmer:** (1) mistenkt lungekreft → CT thorax → pakkeforløp/henvisning.
- **Vignett-sjangre:** hemoptyse + vekttap + røyk → DIA/UTR (CT, henvisning); radon-KUNN.
- **Typiske feil:** KUNN-felle (radon → kols i stedet for lungekreft), F7 (utsette
  kreftutredning), F1 (feil modalitet).
- **Kvote:** 16 quiz / 12 flashcards.

### Del 5 — Nefrologi og urologi

#### Kapittel 5.1: Akutt og kronisk nyresvikt
**id:** `med-avsluttende-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Akutt nyreskade (prerenal/renal/postrenal) og kronisk nyresykdom — årsak,
  eGFR/kreatinin-tolkning og den kritiske dosejusteringen av legemidler.
- **Eksamensbelegg:** Nefro/uro (~6,0 %, 16/16); nyresvikt og eGFR-dosejustering er faste og
  tverrgående. Sjangre: DIA (AKI-type), HÅND (reversibel årsak), BEH (dosejustering/unngå
  nefrotoksiner). Prioritet: perfekt.
- **Faktakontrakt (`(verifiser)`):** AKI prerenal (hypovolemi/dehydrering) vs. renal (nefrotoksin/
  ATN) vs. postrenal (obstruksjon → ultralyd, kateter); kreatinin/eGFR-tolkning; kronisk
  nyresykdom stadier; **dosejustering ved eGFR-fall** og unngå nefrotoksiner (NSAID,
  aminoglykosid, kontrast) (lenk Del 0.3); ACE-hemmer/ARB-hensyn `(verifiser)`.
- **Algoritmer:** (1) AKI: pre/renal/post-triage → ultralyd ved obstruksjon → korriger reversibel
  årsak → juster/stopp nefrotoksiske legemidler.
- **Vignett-sjangre:** stigende kreatinin + medikamentliste → DIA/BEH (stopp nefrotoksin,
  dosejuster) med distraktoranalyse.
- **Typiske feil:** F3 (ikke dosejustere / fortsette nefrotoksin), F12 (NSAID ved nyresvikt), F1
  (behandle uten å finne postrenal obstruksjon).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 5.2: Elektrolytt- og væskeforstyrrelser (inkl. hyperkalemi)
**id:** `med-avsluttende-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-5-1`

- **Kapitteltype:** disiplin.
- **Description:** Natrium- og kaliumforstyrrelser, dehydrering/væskebehandling og syre-base —
  med hyperkalemi-håndtering og «behandle pasienten, ikke labavviket»-prinsippet.
- **Eksamensbelegg:** Nefro/uro + klinisk kjemi (16/16); elektrolytter, hyperkalemi og
  væskebehandling er faste, ofte med EKG-endring. Sjangre: HÅND (akutt hyperkalemi), BEH
  (korreksjon), DIA (hypo-/hypernatremi-årsak). Prioritet: perfekt.
- **Faktakontrakt (`(verifiser)`):** hyponatremi/hypernatremi-årsaker og forsiktig korreksjonstakt;
  **hyperkalemi**: EKG-endringer (høye T, breddeøkt QRS) → akutt (kalsium for membranstabilisering,
  insulin+glukose, ev. salbutamol; deretter eliminasjon) `(verifiser doser)`; når lett avvik hos
  symptomfri skal KONTROLLERES, ikke akuttbehandles (F4); dehydrering/væsketyper.
- **Algoritmer:** (1) hyperkalemi: EKG-endring/høy verdi? → kalsium (stabiliser) → insulin+glukose
  (skift inn) → fjern kalium (diuretika/dialyse). (2) hyponatremi: volumstatus → årsak → forsiktig
  korreksjon.
- **Vignett-sjangre:** høy kalium + EKG → HÅND (rekkefølge: kalsium først); lett kaliumavvik hos
  symptomfri → HÅND (kontroller, ikke akuttbehandle) med distraktoranalyse.
- **Typiske feil:** **F4** (akuttbehandle et lite labavvik hos symptomfri), F8 (syre-base-feil),
  F1 (feil rekkefølge i hyperkalemi-trappen).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 5.3: Urologi — LUTS/prostata, UVI, nyrestein og hematuri
**id:** `med-avsluttende-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-5-1`

- **Kapitteltype:** disiplin.
- **Description:** Nedre urinveissymptomer og prostata (BPH vs. cancer/PSA), urinretensjon,
  nyrestein og hematuri-utredning i fastlege-/LIS1-rolle.
- **Eksamensbelegg:** Nefro/uro (16/16); LUTS/prostata, nyrestein og hematuri forekommer.
  Sjangre: DIA (BPH vs. cancer), UTR (PSA/hematuri-utredning), HÅND (urinretensjon/nyrestein).
  Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** LUTS og BPH-behandling (alfablokker, 5-alfa-reduktasehemmer);
  prostatacancer (PSA-tolkning, henvisning); akutt urinretensjon (kateter); nyrestein (kolikk,
  CT urinveier, smertelindring med NSAID der nyre tillater — ellers alternativ); hematuri
  (makroskopisk → utredning for malignitet).
- **Algoritmer:** (1) makroskopisk hematuri → utred for urologisk malignitet. (2) nyrekolikk →
  bekreft (CT) + smertelindring + steinstørrelse styrer.
- **Vignett-sjangre:** eldre mann + LUTS + PSA → DIA/UTR; makroskopisk hematuri → UTR med
  distraktoranalyse.
- **Typiske feil:** F6 (overse malignitet ved hematuri), F1 (feil førstetiltak ved retensjon),
  F12 (NSAID ved nyresvikt i steinvignett).
- **Kvote:** 18 quiz / 14 flashcards.

### Del 6 — Endokrinologi og øvrig indremedisin

#### Kapittel 6.1: Diabetes mellitus (type 1 og 2, akutte kriser)
**id:** `med-avsluttende-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Diabetes type 1 vs. 2 — diagnose, behandlingstrapp, insulinprinsipper, og
  akutte kriser (DKA, hypoglykemi, hyperosmolær tilstand).
- **Eksamensbelegg:** Endokrin (~3,2 %, 15/16); diabetes og akutte kriser er faste, insulin-
  dosering en klassisk F2-felle. Sjangre: BEH (behandlingstrapp/insulin), HÅND (DKA/hypoglykemi),
  DIA. Prioritet: perfekt/kunne.
- **Faktakontrakt (doser `(verifiser)`):** type 1 (insulinkrevende) vs. type 2 (metformin
  først, deretter SGLT2/GLP-1 etter komorbiditet `(verifiser gjeldende trapp)`); HbA1c-diagnose;
  **DKA** (høy glukose + metabolsk acidose + ketoner → væske + insulin + kalium-overvåkning,
  rekkefølge kritisk); **hypoglykemi** (rask glukose p.o./i.v.); insulintitrering (F2).
- **Algoritmer:** (1) DKA: væske → insulininfusjon → kalium-substitusjon/overvåkning → finn
  utløser. (2) type 2-trapp: livsstil + metformin → tillegg etter komorbiditet.
- **Vignett-sjangre:** type 2 + hjerte-/nyresykdom → BEH (SGLT2/GLP-1-valg); DKA → HÅND
  (rekkefølge) med distraktoranalyse.
- **Typiske feil:** F2 (feil insulinstartdose/-titrering), F1 (insulin før væske i DKA — feil
  rekkefølge), F3 (glemme kalium i DKA).
- **Kvote:** 22 quiz / 18 flashcards.

#### Kapittel 6.2: Thyreoidea og øvrig endokrinologi
**id:** `med-avsluttende-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `med-avsluttende-6-1`

- **Kapitteltype:** disiplin.
- **Description:** Hypo- og hypertyreose, thyreoideaknuter, og binyre-/hypofyse-tilstander
  kompakt — tolkning av TSH/fritt-T4 og førstetiltak.
- **Eksamensbelegg:** Endokrin (15/16); thyreoidea er den vanligste endokrine gjengangeren.
  Sjangre: DIA (TSH/T4-tolkning), BEH (levotyroksin/tyreostatika), KUNN. Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** hypotyreose (høy TSH, lav T4 → levotyroksin, forsiktig
  oppstart hos eldre/hjertesyk); hypertyreose (lav TSH → tyreostatika/videre); thyreoideaknute-
  utredning; binyrebarksvikt (Addison — trøtthet, hyponatremi, hyperpigmentering) og
  Cushing/feokromocytom kort.
- **Algoritmer:** (1) TSH → høy = hypo, lav = hyper → T4 bekrefter → behandling.
- **Vignett-sjangre:** trøtthet + TSH/T4 → DIA/BEH; forsiktig levotyroksin hos hjertesyk → BEH
  med distraktoranalyse.
- **Typiske feil:** F2 (for høy levotyroksinstartdose hos eldre/hjertesyk), DIA-felle (tolke TSH/
  T4 feil), F6 (overse Addison ved hyponatremi).
- **Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 6.3: Hematologi — anemi, maligniteter og koagulasjon
**id:** `med-avsluttende-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Anemidiagnostikk (MCV-basert), hematologiske maligniteter (leukemi/lymfom/
  MDS-alarmtegn) og koagulasjonsforstyrrelser — tolkning av blodstatus/utstryk.
- **Eksamensbelegg:** Hematologi (~4,3 %, 16/16); anemi (MCV-inndeling) og malignitets-alarmtegn
  er faste, blodutstryk-morfologi forekommer. Sjangre: DIA (anemitype/malignitet), UTR
  (jern/B12/utstryk), BEH. Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** anemi etter MCV — mikrocytær (jernmangel → finn kilde),
  makrocytær (B12/folat), normocytær (kronisk sykdom/blødning); leukemi/lymfom-alarmtegn
  (cytopenier, blaster, lymfeknuter, B-symptomer); MDS kort; koagulasjon (trombocytopeni, DIC,
  von Willebrand kort); transfusjonsindikasjon.
- **Algoritmer:** (1) anemi → MCV → årsaksklasse → målrettet prøve/utredning. (2) mistenkt
  hematologisk malignitet → hastehenvisning.
- **Vignett-sjangre:** trøtt + blodstatus/MCV → DIA/UTR; cytopenier + blaster → HÅND
  (hastehenvisning) med distraktoranalyse.
- **Typiske feil:** F6 (behandle jernmangel uten å finne blødningskilden — kan skjule cancer),
  DIA-felle (feil MCV-tolkning), F7 (utsette ved malignitetsmistanke).
- **Kvote:** 18 quiz / 14 flashcards.

#### Kapittel 6.4: Revmatologi, onkologi og palliasjon
**id:** `med-avsluttende-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Vanlige revmatiske tilstander (artritt-differensiering, temporalisarteritt-
  akutt), kreftutredning/pakkeforløp, og palliativ symptomlindring inkl. opioidtitrering hos
  skrøpelige.
- **Eksamensbelegg:** Revma (~3,1 %, 15/16) + onkologi/palliasjon (~4,4 %, 16/16); artritt-
  differensiering, alarmtilstander (temporalisarteritt, cauda equina-lenke) og palliativ smerte
  (opioid-titrering) er faste. Sjangre: DIA (artritt-type/kreftalarm), BEH (palliativ smerte/
  DMARD), HÅND. Prioritet: kunne.
- **Faktakontrakt (doser `(verifiser)`):** artritt-differensiering (RA, artrose, urinsyregikt,
  septisk artritt = ø-hjelp); **temporalisarteritt** (hodepine + synstruende → straks steroid,
  ikke vent på biopsi); kreftalarmtegn/pakkeforløp; palliativ smertetrapp og **opioidtitrering**
  (titrert i.v./p.o., forsiktig hos skrøpelig/nyresvikt — F2/F3); kvalme/obstipasjon ved opioid;
  nevropatisk smerte → gabapentin/pregabalin (F9).
- **Algoritmer:** (1) akutt monoartritt → utelukk septisk artritt (leddpunksjon). (2) palliativ
  smerte: titrer opioid mot effekt, individualiser for nyre/skrøpelighet.
- **Vignett-sjangre:** eldre + ny hodepine + synsforstyrrelse → HÅND (straks steroid); palliativ
  sterk smerte hos skrøpelig → BEH (titrert, ikke depot først) med distraktoranalyse.
- **Typiske feil:** F1/F2 (oksykodon depot vs. titrert i.v. ved akutt sterk smerte hos skrøpelig),
  F9 (NSAID/opioid der gabapentin er indisert), F7 (utsette steroid ved temporalisarteritt).
- **Kvote:** 18 quiz / 14 flashcards.

### Del 7 — Ortopedi og kirurgi

#### Kapittel 7.1: Frakturer og akutte skader
**id:** `med-avsluttende-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Vanlige frakturer, akutt håndtering, høyenergitraume-tenkning og
  «snubletråd»-skader (sternumfraktur, hoftebrudd hos eldre, komplikasjoner).
- **Eksamensbelegg:** Ortopedi (~7,1 %, 16/16 — stor kirurgisk søyle); frakturhåndtering og
  differensialtenkning er faste. Sjangre: HÅND (akutt frakturhåndtering), DIA (skadetype/
  underliggende), UTR (røntgen/CT). Prioritet: perfekt.
- **Faktakontrakt (`(verifiser)`):** vanlige frakturer (håndledd, hofte hos eldre, ankel);
  akutt håndtering (immobilisering, smertelindring, reponering/gips vs. kirurgi); åpen fraktur =
  ø-hjelp; **sternumfraktur → mistenk høyenergitraume med mulig organskade (F6)**; kompartment-
  syndrom; hoftebrudd hos eldre (kirurgi + geriatrisk vurdering/CFS).
- **Algoritmer:** (1) traume: ABCDE først → så skjelettskade. (2) mistenkt fraktur → røntgen (CT
  ved kompleks/skjult).
- **Vignett-sjangre:** fall + smerte → DIA/UTR/HÅND; sternumfraktur → DIA (se etter organskade)
  med distraktoranalyse.
- **Typiske feil:** **F6** (behandle den synlige frakturen, overse høyenergitraumet), F7
  (undervurdere åpen fraktur/kompartment), F3 (ignorere skrøpelighet ved hoftebrudd).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 7.2: Rygg, ledd og degenerativ ortopedi
**id:** `med-avsluttende-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-7-1`

- **Kapitteltype:** disiplin.
- **Description:** Ryggsmerter med røde flagg (cauda equina!), kne-/hofteartrose, skulder, og
  vanlige bløtdelsplager — når det haster og når det kan håndteres konservativt.
- **Eksamensbelegg:** Ortopedi (16/16); ryggsmerte med røde flagg (cauda equina) og
  artrose/kne er faste. Sjangre: HÅND (røde flagg → hast vs. konservativt), DIA, UTR (når MR).
  Prioritet: perfekt/kunne.
- **Faktakontrakt (`(verifiser)`):** uspesifikke ryggsmerter (konservativt, aktivitet) vs. **røde
  flagg** (cauda equina: ridebukseanestesi, blære-/tarmforstyrrelse → ø-hjelp MR + kirurgi;
  malignitet, infeksjon, fraktur); artrose (kne/hofte — trening/analgetika/kirurgi); skulder/
  bløtdel kort; MR-indikasjon (ikke rutine ved uspesifikk rygg).
- **Algoritmer:** (1) ryggsmerte → røde flagg? → cauda equina = straks MR/kirurgi; ellers
  konservativt uten rutine-bilde.
- **Vignett-sjangre:** ryggsmerte + ridebukseanestesi → HÅND (ø-hjelp MR); artrose → BEH med
  distraktoranalyse.
- **Typiske feil:** F6/F7 (overse cauda equina), F1 (rutine-MR ved uspesifikk rygg), F1 (kirurgi
  der konservativt er førstevalg).
- **Kvote:** 18 quiz / 14 flashcards.

#### Kapittel 7.3: Gastrokirurgi og postoperative komplikasjoner
**id:** `med-avsluttende-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-3-1`

- **Kapitteltype:** disiplin.
- **Description:** Kirurgiske akutte abdominaltilstander (appendisitt, ileus, brokk, perforasjon)
  og postoperative komplikasjoner (feber, infeksjon, tromboembolisme, sårruptur).
- **Eksamensbelegg:** Kirurgi/gastrokirurgi (~3,9 %, 16/16); postoperative komplikasjoner og
  kirurgisk abdomen er faste. Sjangre: DIA (postoperativ komplikasjon), HÅND (hva først), UTR.
  Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** kirurgisk abdomen (lenk 3.1); brokk (inkarserasjon =
  ø-hjelp); **postoperativ feber** (tidsforløp: tidlig atelektase/lunge, senere sår/UVI/DVT-LE);
  postoperativ tromboseprofylakse; sårruptur/anastomoselekkasje-alarmtegn; ileus-håndtering.
- **Algoritmer:** (1) postoperativ feber → tidsvindu styrer differensialdiagnose → målrettet
  utredning. (2) inkarserert brokk → ø-hjelp kirurgi.
- **Vignett-sjangre:** feber dag 5 postoperativt → DIA (sår/DVT-LE); inkarserert brokk → HÅND med
  distraktoranalyse.
- **Typiske feil:** F6 (overse anastomoselekkasje/LE postoperativt), F7 (avvente kirurgisk brokk),
  F1 (feil rekkefølge i utredning).
- **Kvote:** 16 quiz / 12 flashcards.

### Del 8 — Nevrologi

#### Kapittel 8.1: Hjerneslag, TIA og akutt nevrologi
**id:** `med-avsluttende-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Akutt hjerneslag (iskemisk vs. blødning), trombolyse-/trombektomivinduet, TIA-
  håndtering og andre akutte nevrologiske tilstander (meningitt-lenke, kramper).
- **Eksamensbelegg:** Nevrologi (~4,0 %, 15/16); akutt slag med tidsvindu og CT-før-trombolyse er
  faste. Sjangre: HÅND (akutt slag → CT → trombolyse), DIA (slag vs. mimic), UTR. Prioritet:
  perfekt/kunne.
- **Faktakontrakt (`(verifiser)`):** slagsymptomer (FAST); **akutt: straks CT for å skille
  iskemi fra blødning** før trombolyse; trombolysevindu og trombektomi ved storkarsokklusjon
  `(verifiser tidsvindu)`; TIA → rask utredning/sekundærprofylakse; blødning = IKKE trombolyse;
  status epilepticus (benzodiazepin først).
- **Algoritmer:** (1) akutt slag: FAST → straks CT → iskemi (trombolyse/trombektomi innen vindu)
  vs. blødning (ikke trombolyse). (2) status epilepticus: benzodiazepin.
- **Vignett-sjangre:** akutt hemiparese + tid → HÅND (CT før trombolyse); blødning på CT → HÅND
  (ikke trombolyse) med distraktoranalyse.
- **Typiske feil:** F1 (trombolyse uten CT / utenfor vindu), F6 (overse blødning), F7 (for sen
  håndtering av tidskritisk slag).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 8.2: Hodepine, nevropati og kroniske nevrologiske tilstander
**id:** `med-avsluttende-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-8-1`

- **Kapitteltype:** disiplin.
- **Description:** Primær vs. sekundær hodepine (røde flagg), nevropatisk smerte (førstevalg!),
  og vanlige kroniske tilstander (MS, Parkinson, demens) kompakt.
- **Eksamensbelegg:** Nevrologi (15/16); hodepine-røde-flagg og nevropatisk smerte-førstevalg
  (F9) er faste. Sjangre: DIA (hodepine-type/røde flagg), BEH (nevropatisk smerte), KUNN.
  Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** primær hodepine (migrene/spenning/klase) vs. sekundær med
  **røde flagg** (tordenskrallhodepine → SAH, feber+nakkestivhet → meningitt, temporalisarteritt);
  **nevropatisk smerte → gabapentin/pregabalin/TCA som førstevalg, IKKE NSAID/opioid (F9)**;
  postherpetisk nevralgi; MS/Parkinson/demens-hovedtrekk kort.
- **Algoritmer:** (1) hodepine → røde flagg? → sekundær utredning (CT/spinalpunksjon) vs. primær
  behandling. (2) nevropatisk smerte → gabapentinoid/TCA.
- **Vignett-sjangre:** postherpetisk smerte → BEH (gabapentin) med distraktoranalyse;
  tordenskrallhodepine → HÅND/UTR (CT → SAH).
- **Typiske feil:** **F9** (NSAID/opioid ved nevropatisk smerte), F6 (overse SAH/meningitt bak
  «hodepine»), DIA-felle (primær vs. sekundær).
- **Kvote:** 18 quiz / 14 flashcards.

### Del 9 — Psykisk helse og rus

#### Kapittel 9.1: Depresjon, angst, psykose og suicidvurdering
**id:** `med-avsluttende-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-2`

- **Kapitteltype:** disiplin.
- **Description:** Vanlige psykiske lidelser (depresjon, angst, psykose), førstevalgsbehandling,
  suicidrisikovurdering og når tvang/innleggelse er indisert.
- **Eksamensbelegg:** Psykiatri (~5,8 %, 15/16); depresjon/angst-behandling, psykoseutredning og
  suicidvurdering er faste. Sjangre: BEH (antidepressiva/antipsykotika), HÅND (suicidrisiko/
  innleggelse), DIA. Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** depresjon (SSRI som førstevalg, oppstartsforsiktighet,
  effekt tar uker); angstlidelser; psykose (antipsykotika, utredning inkl. somatisk avklaring —
  genetisk test kan inngå ved førstegangspsykose `(verifiser)`); **suicidrisikovurdering** og
  håndtering; tvunget psykisk helsevern-vilkår kort (lenk 13.x); bipolar/mani kort.
- **Algoritmer:** (1) depresjon → alvorlighet → SSRI ± psykoterapi; vurder suicidrisiko. (2)
  akutt suicidrisiko → sikre pasienten, vurder innleggelse.
- **Vignett-sjangre:** depresjon + suicidtanker → HÅND (risikovurdering/innleggelse); psykose-
  utredning → UTR/BEH med distraktoranalyse.
- **Typiske feil:** F7 (undervurdere suicidrisiko / feil omsorgsnivå), F1 (feil førstevalg/
  forvente rask effekt av SSRI), F3 (overse somatisk årsak til psykose).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 9.2: Rus, abstinens og akutt psykiatri
**id:** `med-avsluttende-9-2` · **number:** 9.2 · **estimatedMinutes:** 45 · **prerequisites:** `med-avsluttende-9-1`

- **Kapitteltype:** disiplin.
- **Description:** Rusmiddelbruk og intoksikasjon, abstinenshåndtering (alkohol/opioid) og akutt
  agitasjon/delir — der blodgass/anion gap ofte avgjør intoksikasjonsdiagnosen.
- **Eksamensbelegg:** Psykiatri/rus (15/16); abstinens, intoksikasjon (metanol via anion gap) og
  akutt agitasjon er faste. Sjangre: DIA (intoksikasjon via blodgass), HÅND (abstinens/agitasjon),
  BEH. Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** alkoholabstinens (benzodiazepin, tiamin før glukose);
  opioidoverdose (nalokson); **intoksikasjon via blodgass/anion gap** (metabolsk acidose + høyt
  anion gap → metanol/etylenglykol, ikke opiat/stimulant — F8; lenk Del 0.3); delir (finn og
  behandle utløsende somatisk årsak, ikke bare sedere); akutt agitasjon-håndtering.
- **Algoritmer:** (1) uklar intoksikasjon → blodgass + anion gap → metabolsk acidose med høyt AG
  → toksisk alkohol. (2) alkoholabstinens: benzodiazepin + tiamin.
- **Vignett-sjangre:** metabolsk acidose + høyt anion gap → DIA (metanol) med distraktoranalyse;
  abstinens → BEH.
- **Typiske feil:** **F8** (feil intoksikasjonsdiagnose når anion gap peker entydig), F1 (glukose
  før tiamin ved alkoholmisbruk), F3 (sedere delir uten å finne årsaken).
- **Kvote:** 18 quiz / 14 flashcards.

### Del 10 — Pediatri

#### Kapittel 10.1: Det akutt syke barnet — feber, infeksjon og dehydrering
**id:** `med-avsluttende-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Vurdering av det syke barnet (alarmtegn), feber/infeksjon, dehydrering og
  vekttilpasset dosering — med barnets normalverdier og lav terskel for alvorlig sykdom.
- **Eksamensbelegg:** Pediatri (~2,1 %, 15/16); akutt syk barn, feber/infeksjon og dehydrering
  er faste. Sjangre: HÅND (alarmtegn/innleggelse), DIA, BEH (vektdosering). Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** aldersavhengige normalverdier (RF, puls); alarmtegn hos
  barn; feber uten fokus/febril UVI; dehydreringsgrader og rehydrering (oral/i.v.); bronkiolitt/
  falsk krupp/pneumoni kort; **vekttilpasset dosering** (mg/kg — barn er ikke små voksne);
  meningokokk-alarm (petekkier).
- **Algoritmer:** (1) syk barn: systematisk vurdering → alarmtegn → innleggelse vs. hjemme. (2)
  dehydrering: gradér → oral vs. i.v. rehydrering.
- **Vignett-sjangre:** febril barn + petekkier → HÅND (mistenk meningokokk, straks handling);
  dehydrering → BEH (vektdosert væske) med distraktoranalyse.
- **Typiske feil:** F7 (undervurdere alvorlig barnesykdom), F2 (voksendose til barn / feil mg/kg),
  F6 (overse meningokokk bak «virusfeber»).
- **Kvote:** 18 quiz / 14 flashcards.

#### Kapittel 10.2: Vaksiner, vekst/utvikling og vanlige barnesykdommer
**id:** `med-avsluttende-10-2` · **number:** 10.2 · **estimatedMinutes:** 40 · **prerequisites:** `med-avsluttende-10-1`

- **Kapitteltype:** disiplin.
- **Description:** Barnevaksinasjonsprogrammet, vekst-/utviklingsavvik, og vanlige kroniske og
  akutte barnesykdommer (astma hos barn, allergi, vanlige eksantemer) kompakt.
- **Eksamensbelegg:** Pediatri (15/16); vaksineprogram og utviklingsavvik forekommer som KUNN/
  DIA. Sjangre: KUNN (vaksineprogram), DIA (utviklingsavvik/eksantem), HÅND. Prioritet: kjenne.
- **Faktakontrakt (`(verifiser)`):** barnevaksinasjonsprogrammet (hovedtrekk `(verifiser)`);
  normal vekst/utvikling og milepæler (alarmtegn ved avvik); astma/allergi hos barn; vanlige
  eksantemer kort; henvisningsindikasjon ved utviklingsavvik.
- **Algoritmer:** (1) utviklingsavvik → vurder mot milepæler → henvis ved klart avvik.
- **Vignett-sjangre:** vaksine-KUNN; utviklingsforsinkelse → DIA/HÅND (henvisning) med
  distraktoranalyse.
- **Typiske feil:** KUNN-felle (feil vaksinetidspunkt), F7 (bagatellisere utviklingsavvik), F1
  (feil håndteringsnivå).
- **Kvote:** 14 quiz / 12 flashcards.

### Del 11 — Gynekologi og obstetrikk

#### Kapittel 11.1: Svangerskap, obstetriske komplikasjoner og prevensjon
**id:** `med-avsluttende-11-1` · **number:** 11.1 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin.
- **Description:** Normalt svangerskap og de viktige komplikasjonene (preeklampsi, ekstrauterin,
  blødning), prevensjonsvalg og legemiddelbruk i svangerskap.
- **Eksamensbelegg:** Gyn/obst (~2,4 %, 15/16); obstetriske komplikasjoner (preeklampsi,
  ekstrauterin) og prevensjon/legemiddel i svangerskap er faste. Sjangre: DIA (komplikasjon),
  HÅND (akutt obstetrikk), BEH (prevensjon/trygt legemiddel). Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** **preeklampsi** (høyt BT + proteinuri → alvorlighet,
  behandling); **ekstrauterin graviditet** (magesmerte + positiv graviditetstest + ultralyd —
  ø-hjelp); blødning i svangerskap; prevensjonsmetoder og kontraindikasjoner (østrogen ved
  trombose-/migrenerisiko `(verifiser)`); trygge vs. kontraindiserte legemidler i svangerskap
  (ACE-hemmer/NSAID kontraindisert).
- **Algoritmer:** (1) magesmerte + fertil kvinne → alltid graviditetstest → positiv + smerte →
  utelukk ekstrauterin (ultralyd). (2) preeklampsi → BT-kontroll/alvorlighet → tiltak.
- **Vignett-sjangre:** magesmerte + positiv test → DIA/HÅND (ekstrauterin); prevensjon ved
  komorbiditet → BEH med distraktoranalyse.
- **Typiske feil:** F6 (overse ekstrauterin), F3 (kontraindisert legemiddel i svangerskap), F7
  (undervurdere preeklampsi).
- **Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 11.2: Gynekologiske tilstander og cervix-/HPV-screening
**id:** `med-avsluttende-11-2` · **number:** 11.2 · **estimatedMinutes:** 40 · **prerequisites:** `med-avsluttende-11-1`

- **Kapitteltype:** disiplin.
- **Description:** Blødningsforstyrrelser, underlivssmerter/infeksjon, overgangsalder, og
  Livmorhalsprogrammet/HPV-screening — utredning i fastlegerolle.
- **Eksamensbelegg:** Gyn/obst (15/16); blødningsforstyrrelser og screening (Livmorhals-
  programmet) er faste, ofte KUNN/HÅND. Sjangre: DIA (blødning/smerte-årsak), UTR/KUNN
  (screening), BEH. Prioritet: kjenne.
- **Faktakontrakt (`(verifiser)`):** unormal vaginalblødning (postmenopausal → alltid utred for
  malignitet); underlivsinfeksjon; overgangsalder; **Livmorhalsprogrammet / HPV-screening**
  (intervall og oppfølging av unormale prøver `(verifiser gjeldende)`); gyn-cancer-alarmtegn.
- **Algoritmer:** (1) postmenopausal blødning → utred for endometriecancer. (2) screening-avvik →
  standardisert oppfølging.
- **Vignett-sjangre:** postmenopausal blødning → HÅND/UTR (utred malignitet); screening-KUNN med
  distraktoranalyse.
- **Typiske feil:** F6 (bagatellisere postmenopausal blødning), KUNN-felle (feil screening-
  oppfølging), F1 (feil utredningsnivå).
- **Kvote:** 14 quiz / 12 flashcards.

### Del 12 — ØNH, øye og hud

#### Kapittel 12.1: ØNH — øre, nese, hals og svimmelhet
**id:** `med-avsluttende-12-1` · **number:** 12.1 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-0-2`

- **Kapitteltype:** disiplin.
- **Description:** Vanlige ØNH-presentasjoner — otitt, sinusitt, nesepolypp, halsinfeksjon,
  akutt svimmelhet (perifer vs. sentral) og epistaxis — i fastlege-/legevaktrolle.
- **Eksamensbelegg:** ØNH/øye (~6,5 %, 16/16 — stor); otitt, nesepolypp og svimmelhet er faste.
  Sjangre: DIA (svimmelhet perifer/sentral, halsinfeksjon), BEH (otitt/sinusitt), HÅND.
  Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** akutt otitt (når antibiotika); sinusitt (viral vs.
  bakteriell); **nesepolypp** og kronisk neseobstruksjon; halsinfeksjon (viral vs. streptokokk —
  Centor); **akutt svimmelhet** perifer (BPPV, vestibularisnevritt) vs. sentral (slag-alarmtegn —
  F6); epistaxis-håndtering.
- **Algoritmer:** (1) akutt svimmelhet → sentrale alarmtegn? → sentral (slagutredning) vs. perifer
  (benign). (2) halsinfeksjon → Centor → strep-test/antibiotika.
- **Vignett-sjangre:** akutt svimmelhet + nevrologisk tegn → DIA (sentral årsak); otitt → BEH med
  distraktoranalyse.
- **Typiske feil:** F6 (overse sentral årsak til svimmelhet), F1 (antibiotika ved viral otitt/
  sinusitt), DIA-felle (perifer vs. sentral).
- **Kvote:** 18 quiz / 14 flashcards.

#### Kapittel 12.2: Øye — akutt synstap og rødt øye
**id:** `med-avsluttende-12-2` · **number:** 12.2 · **estimatedMinutes:** 45 · **prerequisites:** `med-avsluttende-12-1`

- **Kapitteltype:** disiplin.
- **Description:** Akutt synstap (tidskritiske årsaker) og det røde øyet (benignt vs.
  synstruende) — differensiering og riktig hastegrad.
- **Eksamensbelegg:** ØNH/øye (16/16); akutt synstap og rødt øye er faste, hastegrad avgjør.
  Sjangre: DIA (synstap/rødt øye-årsak), HÅND (hastegrad/henvisning). Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** **akutt synstap** — arteria centralis retinae-okklusjon,
  amaurosis fugax (→ temporalisarteritt-lenke 6.4), netthinneavløsning, akutt glaukom (rødt,
  smertefullt øye + synstap → ø-hjelp); **rødt øye** benignt (konjunktivitt) vs. synstruende
  (keratitt, iridocyklitt, akutt glaukom); kontaktlinsebruker med rødt øye = alarmtegn.
- **Algoritmer:** (1) rødt øye → smerte + synstap + halofenomen → akutt glaukom/synstruende →
  ø-hjelp; ellers benignt.
- **Vignett-sjangre:** akutt smertefullt rødt øye + synstap → HÅND (ø-hjelp glaukom); amaurosis
  fugax → DIA (utred) med distraktoranalyse.
- **Typiske feil:** F6 (behandle som konjunktivitt når det er glaukom/keratitt), F7 (utsette
  synstruende øye), F1 (feil hastegrad).
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 12.3: Hud — vanlige tilstander, utslett og helvetesild
**id:** `med-avsluttende-12-3` · **number:** 12.3 · **estimatedMinutes:** 45 · **prerequisites:** `med-avsluttende-0-2`

- **Kapitteltype:** disiplin.
- **Description:** Vanlige hudtilstander og utslett, hudinfeksjoner, helvetesild (herpes zoster)
  med postherpetisk nevralgi, og alarmtegn for hudmalignitet.
- **Eksamensbelegg:** Hud (~1,8 %, 13/16); eksem/utslett, herpes zoster (+ postherpetisk
  nevralgi → F9) og malignitetsalarm er faste. Sjangre: DIA (utslett/lesjon), BEH (zoster/eksem),
  KUNN. Prioritet: kjenne.
- **Faktakontrakt (`(verifiser)`):** vanlige utslett (eksem, psoriasis, urtikaria kort);
  hudinfeksjoner (impetigo, erysipelas-lenke 2.2); **herpes zoster** (dermatomalt utslett →
  antiviralt tidlig; **postherpetisk nevralgi → gabapentin/pregabalin, ikke NSAID/opioid — F9**);
  hudmalignitet-alarmtegn (ABCDE-regel for føflekk); legemiddelutslett.
- **Algoritmer:** (1) dermatomalt smertefullt utslett → herpes zoster → antiviralt tidlig; senere
  brennende smerte → postherpetisk nevralgi → gabapentinoid.
- **Vignett-sjangre:** dermatomalt utslett → DIA/BEH (antiviralt); brennende smerte etter zoster →
  BEH (gabapentin) med distraktoranalyse.
- **Typiske feil:** **F9** (NSAID/opioid ved postherpetisk nevralgi), F6 (overse malign føflekk),
  F1 (for sen antiviral ved zoster).
- **Kvote:** 14 quiz / 12 flashcards.

### Del 13 — Allmenn- og akuttmedisin, samfunn og jus

#### Kapittel 13.1: Fastlegerollen, henvisning, meldeplikt og screening
**id:** `med-avsluttende-13-1` · **number:** 13.1 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-0-2`

- **Kapitteltype:** disiplin (system/jus).
- **Description:** Fastlegens rolle og handlingsrom, henvisningsindikasjoner,
  meldeplikt/rapporteringsveier, screeningprogrammer og pasientrettigheter — de faste system-/
  jus-poengene.
- **Eksamensbelegg:** Allmenn/samfunn/jus (~2,3 %, 16/16); melde-/henvisnings-/rettighets-
  spørsmål er lavfrekvente som rendyrket stamme, men faste og ofte distraktorer. Sjangre: KOMM/
  KUNN (meldeplikt/henvisning/rettigheter), HÅND. Prioritet: kunne.
- **Faktakontrakt (`(verifiser)`):** fastlege vs. spesialisthelsetjeneste (handlingsrom,
  henvisningsindikasjoner); **meldeplikt/rapportering** (arbeidsrelatert sykdom → Arbeidstilsynet,
  skjema 154 `(verifiser)`; smittsom sykdom → MSIS; dødsfall) — hvem meldingen går til og hvorfor
  (F10); screeningprogrammer (Livmorhals, tarm, mammografi kort); pasientrettigheter/samtykke/
  taushetsplikt kort; sykmelding.
- **Algoritmer:** (1) meldepliktig funn → riktig mottaker/hjemmel (arbeid → Arbeidstilsynet;
  smitte → MSIS).
- **Vignett-sjangre:** arbeidsrelatert sykdom → KOMM (Arbeidstilsynet, ikke arbeidsgiver/annen
  behandler) med distraktoranalyse; henvisningsindikasjon → HÅND.
- **Typiske feil:** **F10** (feil meldemottaker/hjemmel), F7 (henvise/innlegge det som håndteres i
  førstelinje), KUNN-felle (screeningintervall).
- **Kvote:** 16 quiz / 14 flashcards.

#### Kapittel 13.2: Akuttmedisin — ABCDE, sjokk, traume og gjenoppliving
**id:** `med-avsluttende-13-2` · **number:** 13.2 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin (akutt).
- **Description:** Systematisk akutthåndtering (ABCDE), sjokktyper og -behandling,
  traumemottak-prinsipper og hjertestans/gjenoppliving — akuttlogikken som gjennomsyrer settet.
- **Eksamensbelegg:** Akutt/anestesi (~1,6 %, 14/16) som rendyrket, men akuttlogikk gjennomsyrer
  mange vignetter (analysen §7.4). ABCDE, sjokk og traume er faste. Sjangre: HÅND (hva først/
  ABCDE), DIA (sjokktype), BEH. Prioritet: perfekt (tverrgående).
- **Faktakontrakt (`(verifiser)`):** **ABCDE** som fast sekvens (lenk Del 0.3); sjokktyper
  (hypovolemisk/kardiogent/distributivt/obstruktivt) og førstetiltak; traumemottak (primær-/
  sekundærundersøkelse, høyenergitraume — lenk 7.1); hjertestans (grunnleggende HLR/rytme kort);
  anafylaksi (adrenalin i.m. først — F1/F2).
- **Algoritmer:** (1) akutt dårlig pasient → ABCDE, behandle livstruende i hvert steg. (2)
  anafylaksi → adrenalin i.m. straks (ikke antihistamin/steroid først). (3) sjokk → type →
  målrettet.
- **Vignett-sjangre:** akutt dårlig pasient → HÅND (ABCDE-rekkefølge); anafylaksi → BEH
  (adrenalin i.m.) med distraktoranalyse.
- **Typiske feil:** F1 (antihistamin/steroid før adrenalin ved anafylaksi), F5 (O₂ når
  ventilasjon/sirkulasjon er problemet), F6 (overse høyenergitraume-skade).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 13.3: Geriatri, skrøpelighet og polyfarmasi (tverrgående individualisering)
**id:** `med-avsluttende-13-3` · **number:** 13.3 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** disiplin (tverrgående).
- **Description:** Hvordan alder, skrøpelighet (CFS), polyfarmasi og redusert organfunksjon
  endrer riktig beslutning — individualiseringsaksen som ligger under en stor andel vignetter.
- **Eksamensbelegg:** Geriatri er kun 2/16 som rendyrket, men eldre/multisyke er bygget inn i en
  stor andel vignetter (analysen §2/§3) for å tvinge fram individualisering. Sjangre: HÅND
  (behandlingsintensitet), BEH (dose-/legemiddelvalg hos eldre), KUNN. Prioritet: perfekt
  (tverrgående).
- **Faktakontrakt (`(verifiser)`):** **Clinical Frailty Scale (CFS)** som intensitetsstyrer;
  polyfarmasi og legemiddelsanering (STOPP/START-tankegang kort); aldersendret farmakokinetikk
  (nyre-/leverfunksjon → dosejustering); fallrisiko og legemidler som øker den; delir hos eldre
  (lenk 9.2); når mindre aggressiv behandling er riktig (skrøpelig pasient); ICF/funksjon.
- **Algoritmer:** (1) eldre pasient → CFS + organfunksjon → individualiser dose/intensitet;
  vurder om tiltaket gagner denne pasienten.
- **Vignett-sjangre:** skrøpelig eldre + aggressiv-vs-lindrende valg → HÅND; polyfarmasi + nytt
  symptom → BEH (saner legemiddel) med distraktoranalyse.
- **Typiske feil:** F3 (ikke individualisere for alder/nyre/skrøpelighet), F2 (voksen
  standarddose til skrøpelig), F1/F7 (for aggressiv behandling av skrøpelig).
- **Kvote:** 16 quiz / 14 flashcards.

### Del 14 — Farmakologi tverrgående

#### Kapittel 14.1: Legemiddelvalg, dosering og titrering
**id:** `med-avsluttende-14-1` · **number:** 14.1 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-3`

- **Kapitteltype:** tverrgående farmakologi.
- **Description:** Prinsippene som gjør en behandlingsoppgave riktig — riktig middel i riktig
  klasse, riktig startdose/vei, og korrekt titrering (opioider, insulin) — samlet på tvers.
- **Eksamensbelegg:** Farmakologi (rendyrket ~1,3 %, 16/16) men reelt i ~33 % av oppgavene (hver
  BEH-oppgave). Dose-/titreringsfeil (F2) er blant de vanligste fellene. Sjangre: BEH (middel/
  dose/vei), KUNN (mekanisme). Prioritet: perfekt (tverrgående).
- **Faktakontrakt (doser `(verifiser)`):** analgetikatrappen (paracetamol 1 g × 4 → NSAID med
  forbehold → opioid **titrert**, i.v. ved akutt sterk smerte); **opioidtitrering** (start lavt,
  titrer mot effekt; forsiktig ved skrøpelig/nyresvikt; kvalme/obstipasjon-profylakse);
  **insulinoppstart/-titrering**; antibiotikaklasser og -valg (lenk Del 2); antihypertensiva/
  hjertesviktmidler (lenk Del 1); nevropatisk smerte → gabapentinoid (F9); administrasjonsveier
  (når i.v. vs. p.o.).
- **Algoritmer:** (1) analgetika-trappen med titreringsprinsipp. (2) legemiddelvalg: riktig klasse
  → riktig middel → riktig dose/vei → individualiser (nyre/lever/alder).
- **Vignett-sjangre:** akutt sterk smerte hos skrøpelig → BEH (titrert i.v., ikke depot først);
  insulinstart → BEH med distraktoranalyse.
- **Typiske feil:** **F2** (feil startdose/vei/titrering), F1 (riktig klasse, feil middel), F9
  (feil førstevalg nevropatisk smerte).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 14.2: Kontraindikasjoner, interaksjoner og dosejustering ved organsvikt
**id:** `med-avsluttende-14-2` · **number:** 14.2 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-14-1`

- **Kapitteltype:** tverrgående farmakologi.
- **Description:** De faste kontraindikasjonene, interaksjonene og dosejusteringene som er
  «snubletråder» hvert år — DOAK-fellen, NSAID-fellen, nyresvikt-justering, og de vanligste
  farlige kombinasjonene.
- **Eksamensbelegg:** Farmakologi (16/16); kontraindikasjoner (F11/F12) og manglende
  dosejustering (F3) er blant toppsjikt-skillerne (analysen §4/§5). Sjangre: BEH (unngå
  kontraindisert), KUNN (interaksjon). Prioritet: perfekt (tverrgående).
- **Faktakontrakt (`(verifiser)`):** **DOAK kontraindisert ved mitralstenose/mekanisk klaff →
  warfarin (F11)**; **NSAID ved nyresvikt/hjertesvikt/ulcus/antikoagulasjon (F12)**;
  **dosejustering ved eGFR-fall** (renalt utskilte midler); aminoglykosid/kontrast ved nyresvikt;
  ACE-hemmer i svangerskap/ved nyrearteriestenose; QT-forlengende kombinasjoner kort; warfarin-
  interaksjoner kort; legemidler å unngå hos eldre (lenk 13.3).
- **Algoritmer:** (1) før forskrivning: kontraindikasjon? → interaksjon? → organfunksjon (eGFR/
  lever) → dosejuster/velg alternativ.
- **Vignett-sjangre:** AF + mitralstenose → BEH (warfarin, ikke DOAK); smerte hos nyresvikt-
  pasient → BEH (unngå NSAID) med distraktoranalyse.
- **Typiske feil:** **F11** (DOAK-fellen), **F12** (NSAID-fellen), **F3** (ikke dosejustere ved
  organsvikt).
- **Kvote:** 20 quiz / 16 flashcards.

### Del 15 — Eksamenstrening

#### Kapittel 15.1: Sjangerdrill — de fem spørsmålsstammene
**id:** `med-avsluttende-15-1` · **number:** 15.1 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-0-2`

- **Kapitteltype:** sjangerdrill (BEH/DIA/HÅND/UTR/KUNN).
- **Description:** Tren gjenkjenning og løsning av hver av de fem spørsmålsstammene på tvers av
  disipliner — samme skall, ulik resonneringsvei.
- **Eksamensbelegg:** Sjangerfordelingen (analysen §3): BEH ~33 %, DIA ~30 %, HÅND ~15 %, UTR
  ~6 %, KUNN ~5 %. Prioritet: perfekt (meta).
- **Innhold:** `text` **Løsningsoppskrift per sjanger** (BEH: riktig klasse → middel → dose/vei →
  individualiser; DIA: mønstergjenkjenning + utelukk alarm; HÅND: hva først/ABCDE/rekkefølge; UTR:
  riktig modalitet/prøve; KUNN: mest korrekte utsagn). `example` gjennomgått vignett av hver
  sjanger med full distraktoranalyse. `exercise` ×12–16 blandet på tvers av disipliner, hver
  merket med sjangerkode, alle med distraktoranalyse-`solution`.
- **Typiske feil:** F1 (velge forsvarlig i BEH), F6 (overse alarm i DIA), F5/F8 (feil i HÅND/
  blodgass), tidsfellen.
- **Kvote:** 24 quiz / 6 flashcards.

#### Kapittel 15.2: Distraktoranalyse-drill (single best answer i praksis)
**id:** `med-avsluttende-15-2` · **number:** 15.2 · **estimatedMinutes:** 55 · **prerequisites:** `med-avsluttende-15-1`

- **Kapitteltype:** distraktordrill.
- **Description:** Rendyrk ferdigheten som skiller toppsjikt fra bestått: for hver vignett, forklar
  hvorfor HVER distraktor er nest best/gal og finn den ene tingen som gjør ett svar «mest
  hensiktsmessig».
- **Eksamensbelegg:** Distraktor-logikken er «gullgruven» (analysen §4/§7): fasiten begrunner per
  alternativ; single best answer håndheves strengt. Prioritet: perfekt (meta).
- **Innhold:** `text` **Distraktormønstrene** (riktig klasse/feil middel; riktig tanke/ikke
  førstevalg; feil dose/vei; for aggressiv/for passiv; ignorerer komorbiditet; behandler labavvik/
  ikke pasienten; oksygenering vs. ventilasjon). `example` vignetter der to alternativer er nær
  hverandre, med margnotat om avgjørende detalj. `exercise` ×12–16: gitt vignett + fire
  alternativer, skriv distraktoranalysen selv, sammenlign; de faste snubletrådene (DOAK/
  mitralstenose, metanol/anion gap, postherpetisk nevralgi/gabapentin, adrenalin ved anafylaksi,
  sternumfraktur/høyenergitraume).
- **Typiske feil:** F1 (forsvarlig ≠ optimalt), F3 (overse komorbiditet), F11/F9/F8-snubletrådene.
- **Kvote:** 24 quiz / 6 flashcards.

#### Kapittel 15.3: Feildrill — de faste fellene (F1–F13)
**id:** `med-avsluttende-15-3` · **number:** 15.3 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-15-2`

- **Kapitteltype:** feildrill.
- **Description:** De 13 sensordokumenterte fellene drillet med gjenkjenning og korreksjon —
  feilunngåelse er «karakterforsikring» på en bestått/ikke-bestått-eksamen.
- **Eksamensbelegg:** Analysen §5 komplett (F1–F13). Prioritet: perfekt (meta).
- **Innhold:** én seksjon per felle: (a) fellen slik den ser ut i en vignett, (b) et nyskrevet
  «slik svarer kandidaten feil»-eksempel, (c) den korrekte single-best-answer-vurderingen, (d)
  varsellampe-heuristikk. Hjemkapitler: F1→0.2/mange, F2→14.1, F3→0.3/14.2, F4→5.2, F5→0.3/4.x,
  F6→3.1/7.1/12.x, F7→gjennomgående, F8→0.3/9.2, F9→8.2/12.3/14.1, F10→13.1, F11/F12→1.3/14.2,
  F13→0.1/0.2. Driller «hvilken felle begår denne kandidaten?» (utmerket flervalg).
- **Typiske feil:** kapitlet ER fellene.
- **Kvote:** 22 quiz / 6 flashcards.

#### Kapittel 15.4: Tids- og gjettestrategi + tverrgående verktøydrill
**id:** `med-avsluttende-15-4` · **number:** 15.4 · **estimatedMinutes:** 50 · **prerequisites:** `med-avsluttende-15-3`

- **Kapitteltype:** strategidrill.
- **Description:** Tren tidsdisiplin (~100 sek/oppgave), rasjonell gjetting (ingen minuspoeng), og
  rask bruk av de tverrgående verktøyene (blodgass, dosejustering, respirasjonsstøtte, ABCDE)
  under press.
- **Eksamensbelegg:** 4 t / 140 oppgaver ≈ 100 sek/oppgave; ingen minuspoeng → gjett alltid
  (analysen §4/§7); tverrgående verktøy er innvevd. Prioritet: perfekt (meta).
- **Innhold:** `text` **Tidsbudsjett-oppskrift** (raske først, marker og gå videre, sikre at ALLE
  besvares — gjett de usikre til slutt). `example` blodgass-/respirasjonsstøtte-/ABCDE-/
  dosejustering-vignetter løst raskt. `exercise` ×12–16 tempo-drill blandet, med tverrgående
  verktøy innvevd; egne gjette-eliminerings-øvelser.
- **Typiske feil:** F13 (blank), tidsfellen (henge på én oppgave), F5/F8 (verktøyfeil under press).
- **Kvote:** 22 quiz / 6 flashcards.

#### Kapittel 15.5: Øvingseksamen A (komplett 140-MC-sett)
**id:** `med-avsluttende-15-5` · **number:** 15.5 · **estimatedMinutes:** 90 · **prerequisites:** `med-avsluttende-15-4`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet sett i gjeldende format: 140 flervalgsoppgaver (single
  best answer, fire alternativer), 4 t, ingen hjelpemidler, temafordelt etter frekvensvekten.
- **Innhold:** temafordeling som en «typisk» eksamen (av 140): kardiologi ~22, infeksjon ~11,
  ortopedi ~10, gastro ~10, lunge ~9, ØNH/øye ~9, nefro/uro ~8, psykiatri ~8, onkologi ~6,
  hematologi ~6, nevrologi ~6, kirurgi ~5, endokrin ~5, revma ~4, gyn/obst ~3, allmenn/jus ~3,
  pediatri ~3, hud ~3, akutt ~2, farmakologi tverrgående (innvevd i BEH-oppgavene) (justeres til
  sum 140). `collapsible` full fasit per oppgave med **distraktoranalyse** (hvorfor hvert galt);
  `tip` **Sensorblikket** (bestått-grense ~58–61 %, hvordan sikte, gjett alltid). Merk om
  praktisk forkorting: bygg minst 40–50 fullstendige vignetter med full distraktoranalyse og
  angi resten som strukturert oppgaveliste per disiplin hvis full 140-produksjon er urealistisk —
  formatet og temaprofilen skal uansett være komplett.
- **Kvote:** 8 quiz / 2 flashcards.

#### Kapittel 15.6: Øvingseksamen B (komplett 140-MC-sett)
**id:** `med-avsluttende-15-6` · **number:** 15.6 · **estimatedMinutes:** 90 · **prerequisites:** `med-avsluttende-15-5`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre komplette sett med en annen, men fortsatt typisk, temaprofil (f.eks.
  tyngre indremedisin, flere tvetydige/komorbiditets-vignetter) — for å vise variasjonen i
  vanskegrad uten å endre bredden.
- **Innhold:** som 15.5, men annen oppgavemiks og flere toppsjikt-oppgaver (dosejustering,
  kontraindikasjoner, «når man ikke skal agere»). Full distraktoranalyse-fasit + Sensorblikket.
- **Kvote:** 8 quiz / 2 flashcards.

#### Kapittel 15.7: Øvingseksamen C (komplett 140-MC-sett)
**id:** `med-avsluttende-15-7` · **number:** 15.7 · **estimatedMinutes:** 90 · **prerequisites:** `med-avsluttende-15-6`

- **Kapitteltype:** øvingseksamen.
- **Description:** Tredje komplette sett vektlagt mot en tredje typisk profil, med ekstra tyngde
  på de faste snubletrådene og tverrgående verktøyene (blodgass, ABCDE, farmakologi).
- **Innhold:** som 15.5/15.6, med flere av de faste snubletrådene (DOAK/mitralstenose, metanol/
  anion gap, respirasjonsstøtte type 2, anafylaksi-adrenalin, postherpetisk nevralgi). Full
  distraktoranalyse-fasit + Sensorblikket med bestått/toppsjikt-terskelbeskrivelse.
- **Kvote:** 8 quiz / 2 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 3 | 50 | 42 | 0 (dekkes av øvingseksamenene) |
| 1 | 5 | 98 | 78 | 4 |
| 2 | 3 | 62 | 50 | 4 |
| 3 | 3 | 60 | 46 | 4 |
| 4 | 3 | 60 | 44 | 4 |
| 5 | 3 | 58 | 46 | 4 |
| 6 | 4 | 74 | 58 | 4 |
| 7 | 3 | 54 | 42 | 4 |
| 8 | 2 | 38 | 30 | 4 |
| 9 | 2 | 38 | 30 | 4 |
| 10 | 2 | 32 | 26 | 4 |
| 11 | 2 | 30 | 24 | 4 |
| 12 | 3 | 46 | 38 | 4 |
| 13 | 3 | 52 | 44 | 4 |
| 14 | 2 | 40 | 32 | 4 |
| 15 | 7 | 116 | 34 | 0 (= 3 øvingseksamener) |
| **Sum** | **44** | **856 ✓ (≥800)** | **724 ✓ (≥700)** | **56 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 14+16+20=50 / 10+12+20=42
- Del 1: 22+20+20+18+18=98 / 18+16+16+14+14=78
- Del 2: 22+22+18=62 / 18+18+14=50
- Del 3: 22+20+18=60 / 16+16+14=46
- Del 4: 22+22+16=60 / 16+16+12=44
- Del 5: 20+20+18=58 / 16+16+14=46
- Del 6: 22+16+18+18=74 / 18+12+14+14=58
- Del 7: 20+18+16=54 / 16+14+12=42
- Del 8: 20+18=38 / 16+14=30
- Del 9: 20+18=38 / 16+14=30
- Del 10: 18+14=32 / 14+12=26
- Del 11: 16+14=30 / 12+12=24
- Del 12: 18+14+14=46 / 14+12+12=38
- Del 13: 16+20+16=52 / 14+16+14=44
- Del 14: 20+20=40 / 16+16=32
- Del 15: 24+24+22+22+8+8+8=116 / 6+6+6+6+2+2+2=34
- **Totalt: 856 quiz / 724 flashcards.**

**Hvorfor så høyt (over gulvet ≥800/≥700):** Flervalg ER hele eksamensmodaliteten (140
single-best-answer-oppgaver), så **quiz er kjernetreningen** og siktes bevisst høyt (856) med
bredde over ~15 disipliner — hver disiplin må ha nok vignett-quiz til at bredden faktisk dekkes.
Faget er dessuten **svært faktatungt og uten hjelpemidler** (førstevalg, doser, kontraindikasjoner,
normalverdier utenat), så **flashcards** ligger godt over 700-gulvet (724). Quiz-profil: kliniske
vignetter med fire plausible alternativer og distraktoranalyse (den definerende mekanikken) +
diagnose-/behandlings-/håndteringsvarianter + tverrgående-verktøy-quiz (blodgass, anion gap,
eGFR-dose, respirasjonsstøtte, ABCDE). Flashcard-profil: førstevalg↔tilstand, dose/doseprinsipp
`(verifiser)`, kontraindikasjon↔legemiddel (DOAK↔mitralstenose→warfarin; NSAID↔nyresvikt),
normalverdi/terskel (blodgass; anion gap 8–12; eGFR-terskler), diagnosekriterium↔tilstand, og
«snubletråd»-kort (metanol via anion gap; postherpetisk nevralgi→gabapentin; anafylaksi→adrenalin
i.m.; sternumfraktur→høyenergitraume).

---

## 4. Prøver

Fire prøver per klinisk disiplin-/tverrgående del (Del 1–14 = 56 prøver). Hver prøve speiler
eksamensformatet i miniatyr: 8–15 flervalgsoppgaver (single best answer, fire alternativer,
vignett) med full **distraktoranalyse**-fasit. Omfang 20–40 min. Alle oppgaver NYSKREVNE.
Prøvekapittel-id `med-avsluttende-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT).
Del 0 og Del 15 har ingen egen prøve (Del 15s tre øvingseksamener dekker helheten).

**Prøve-kvote Del 1:** 4 prøver: (1) *ACS og koronarsykdom* — brystsmerte-vignett + EKG/troponin.
(2) *Hjertesvikt* — akutt lungeødem-håndtering + NSAID-felle. (3) *Atrieflimmer og antikoagulasjon*
— **DOAK/mitralstenose-snubletråden (F11)** + CHA₂DS₂-VASc. (4) *Blandet Del 1* — hypertensjon/
NORRISK + klaffefeil/arytmi.

**Prøve-kvote Del 2:** 4 prøver: (1) *Sepsis* — sepsis-bundle rekkefølge (blodkultur før
antibiotika) + empirisk valg. (2) *Organinfeksjoner* — pneumoni/UVI førstevalg + gravid-hensyn.
(3) *Resistens og spesielle infeksjoner* — mekanisme-KUNN + endokarditt. (4) *Blandet Del 2*.

**Prøve-kvote Del 3:** 4 prøver: (1) *Akutt abdomen* — smertelokalisasjon → diagnose + riktig
modalitet. (2) *GI-blødning og ulcus* — blødningshåndtering + NSAID-felle. (3) *Lever/galle/
pankreas* — ikterus/kolangitt. (4) *Blandet Del 3*.

**Prøve-kvote Del 4:** 4 prøver: (1) *Astma/kols* — eksaserbasjon + **kontrollert O₂/CO₂-retensjon
(F5)**. (2) *Respirasjonssvikt og LE* — blodgass type 1 vs. 2 + Wells/CT-angio. (3) *Lungekreft/
radon* — utredning + radon-KUNN. (4) *Blandet Del 4*.

**Prøve-kvote Del 5:** 4 prøver: (1) *Nyresvikt* — AKI-triage + dosejustering. (2) *Elektrolytter*
— **hyperkalemi-trapp + behandle-pasienten-ikke-labavviket (F4)**. (3) *Urologi* — hematuri/LUTS/
prostata. (4) *Blandet Del 5*.

**Prøve-kvote Del 6:** 4 prøver: (1) *Diabetes* — DKA-rekkefølge + type 2-trapp/insulin. (2)
*Thyreoidea* — TSH/T4-tolkning + forsiktig levotyroksin. (3) *Hematologi* — anemi-MCV +
malignitets-alarm. (4) *Revma/onkologi/palliasjon* — temporalisarteritt + palliativ opioidtitrering
(F2) + nevropatisk smerte (F9).

**Prøve-kvote Del 7:** 4 prøver: (1) *Frakturer* — **sternumfraktur/høyenergitraume (F6)** +
åpen fraktur. (2) *Rygg og ledd* — **cauda equina røde flagg** + artrose. (3) *Gastrokirurgi* —
postoperativ feber-tidsvindu + inkarserert brokk. (4) *Blandet Del 7*.

**Prøve-kvote Del 8:** 4 prøver: (1) *Akutt slag* — CT før trombolyse + iskemi/blødning. (2)
*TIA og status epilepticus* — håndtering. (3) *Hodepine og nevropati* — røde flagg +
**nevropatisk smerte→gabapentin (F9)**. (4) *Blandet Del 8*.

**Prøve-kvote Del 9:** 4 prøver: (1) *Depresjon og suicidvurdering* — risikovurdering/omsorgsnivå.
(2) *Psykose* — utredning + somatisk avklaring. (3) *Rus og intoksikasjon* — **metanol via anion
gap (F8)** + abstinens/tiamin. (4) *Blandet Del 9*.

**Prøve-kvote Del 10:** 4 prøver: (1) *Akutt syk barn* — alarmtegn + meningokokk. (2) *Dehydrering*
— vektdosert rehydrering (F2). (3) *Vaksiner og utvikling* — program-KUNN + utviklingsavvik. (4)
*Blandet Del 10*.

**Prøve-kvote Del 11:** 4 prøver: (1) *Obstetriske komplikasjoner* — **ekstrauterin/graviditetstest
(F6)** + preeklampsi. (2) *Prevensjon og legemiddel i svangerskap* — kontraindikasjoner. (3)
*Gynekologi og screening* — postmenopausal blødning + Livmorhalsprogrammet. (4) *Blandet Del 11*.

**Prøve-kvote Del 12:** 4 prøver: (1) *ØNH og svimmelhet* — perifer vs. sentral (F6) + otitt/
antibiotika. (2) *Øye* — akutt synstap/glaukom hastegrad. (3) *Hud og zoster* — **postherpetisk
nevralgi→gabapentin (F9)** + malignitetsalarm. (4) *Blandet Del 12*.

**Prøve-kvote Del 13:** 4 prøver: (1) *System og jus* — **meldeplikt/mottaker (F10)** + henvisning.
(2) *Akuttmedisin* — ABCDE-rekkefølge + **anafylaksi→adrenalin i.m. (F1)**. (3) *Geriatri* — CFS/
individualisering + polyfarmasi. (4) *Blandet Del 13*.

**Prøve-kvote Del 14:** 4 prøver: (1) *Legemiddelvalg og titrering* — analgetikatrapp +
opioidtitrering (F2). (2) *Kontraindikasjoner* — **DOAK/mitralstenose (F11) + NSAID/nyresvikt
(F12)**. (3) *Dosejustering ved organsvikt* — eGFR-justering (F3). (4) *Blandet Del 14*.

### Komplette øvingseksamener (3 — kapitlene 15.5–15.7)

Tre nyskrevne 140-MC-sett i gjeldende format (4 t, ingen hjelpemidler, single best answer,
bestått-grense ~58–61 %), med ulik men typisk temaprofil, full distraktoranalyse-fasit og
bestått/toppsjikt-nivåbeskrivelse (jf. §3 Del 15). Begrunnelse: øvingseksamenene er studentens
eneste helhetlige formatspeil og trener tidsdisiplin (~100 sek/oppgave) + gjettestrategi +
bredden på tvers av alle disipliner.

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — gjeldende form (140 MCQ, 4 t, single best answer, ingen hjelpemidler,
   bestått/ikke bestått ~58–61 %), frekvensvekt-tabellen, at bredden er poenget (fra kap. 0.1).
2. **Beslutningshåndverket** — single-best-answer-tankesettet, distraktormønstrene,
   gjettestrategi (gjett alltid) og tidsbudsjett (~100 sek) (fra kap. 0.2).
3. **Tverrgående verktøykasse** — blodgass-trappen, anion gap-årsaker, eGFR-dosejustering,
   respirasjonsstøtte-eskalering (oksygenering vs. ventilasjon), ABCDE (fra kap. 0.3) —
   verktøyene som løser vignetter på tvers.
4. **Disiplin-kart** — én side per disiplin: høyfrekvente presentasjoner + førstevalg +
   farligste felle + typisk vignett. Sortert etter frekvensvekt (kardiologi → infeksjon → …).
5. **Førstevalg- og dosebank** — alle førstevalgsbehandlinger, doser/doseprinsipper `(verifiser)`
   og administrasjonsveier samlet — flashcard-speilet i prosaform.
6. **Kontraindikasjons- og snubletråd-listen** — DOAK/mitralstenose→warfarin, NSAID/nyresvikt-
   hjertesvikt-ulcus, eGFR-dosejustering, metanol via anion gap, postherpetisk nevralgi→gabapentin,
   anafylaksi→adrenalin i.m., sternumfraktur→høyenergitraume, cauda equina, ekstrauterin — de
   faste toppsjikt-poengene som huskeliste.
7. **Normalverdi- og terskelbank** — arteriell blodgass (pH 7,35–7,45; PaCO₂ 4,7–6,0; PaO₂
   10,7–13,3; HCO₃⁻ 22–26; anion gap 8–12), eGFR-terskler, vitalia-/sjokkgrenser, barnas
   aldersnormaler — alle `(verifiser)`.
8. **Fellevaksinen** — de 13 typiske fellene (F1–F13) som énlinjers varsellamper, med F1
   (forsvarlig ≠ optimalt), F5 (ventilasjon vs. oksygenering), F11/F12 (kontraindikasjoner) og
   F13 (gjett alltid) uthevet.
9. **Ukeplan** — 6-ukers og 2-ukers løp mot eksamen med prøve-innplassering (disiplin-delprøver
   underveis etter frekvensvekt; øvingseksamen A/B/C de siste to ukene, tidtaking).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI`, skrives til
   `textbook-courses-hoyskole.ts`): id `med-avsluttende`, title, `level: 'Høyskole'`, alle 44
   kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites
   fra dette skjelettet, `sectionNames` fra §2-tabellen.
2. **Del 0** først (etablerer single-best-answer-/distraktor-tankesettet, gjettestrategien og de
   tverrgående verktøyene — blodgass, nyresvikt-dose, respirasjonsstøtte, ABCDE — som alle senere
   kapitler bygger på og lenker til).
3. **Del 1 → 14** i frekvensrekkefølge (kardiologi tyngst → farmakologi tverrgående).
   Prerequisites peker bakover (til tidligere kapitler / Del 0). Der en disiplin trenger et
   tverrgående verktøy, lenkes det til Del 0.3, ikke dupliseres.
4. **Del 15** til slutt (sjanger-, distraktor-, feil- og gjettedrill + øvingseksamener gjenbruker
   vignettmønstre, algoritmer og snubletråder fra disiplindelene).
5. **Prøver** (`med-avsluttende-<del>-prove`) etter at delens kapitler finnes.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-registrering
   til slutt.

Per disiplinkapittel gjelder blokk-rekkefølgen i §2 «Kapittel-DNA» (tip Eksamensvinkel → text
Forkunnskaper + collapsible Klinisk nøkkelfakta-/verdiliste → text Klinisk oversikt → definition
Klinisk nøkkelfakta (flashcard-kilden — toppnivå med title!) → theorem/text Kliniske algoritmer →
example Vignett-gjennomganger med distraktoranalyse → warning Typiske feil → exercise ×8–14
vignetter med distraktoranalyse → collapsible Repetisjon). Eksamensvinkel- og Typiske feil-blokkene
fylles med belegget og feilkodene fra dette skjelettet — forfatteren skal IKKE finne på
frekvenstall. Hver `example`/`exercise` bruker distraktoranalyse-malen fra §2.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/med-avsluttende-*.json` parser med
      `json.load` (generer via `json.dump`). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 44 kapittel-id-er har eksisterende content-fil; `number` er
      del-basert («1.3», ALDRI lineær); prosareferanser bruker samme form («kap. 1.3»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-id-er
      registrert slik at toggle rendrer (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **Klinisk presisjon / `(verifiser)`-markeringer:** grep `-i verifiser` — ALLE markerte doser,
      normalverdier og terskler (blodgass-verdier, anion gap, eGFR-terskler, antibiotikaregimer,
      insulin-/opioid-doser, DKA-rekkefølge, hyperkalemi-doser, NORRISK 2-terskler, trombolysevindu,
      radon-grenseverdi 200 Bq/m³, barnas normalverdier, vaksineprogram, screeningintervall,
      trippelkur H. pylori, sepsis qSOFA-verdier) fagfellesjekkes i fase 6 mot GJELDENDE norske
      retningslinjer (Legemiddelhåndboka/NEL/Helsedirektoratet/Felleskatalogen). INGEN oppdiktede
      doser eller terskler.
- [ ] **Nivåkalibrering:** LIS1-bredde, IKKE spesialistdybde; toppsjikt-poeng (dosejustering,
      kontraindikasjoner, «når man ikke skal agere», snubletråder) merket som toppsjikt, ikke
      bestått-krav. Pilotårenes 120/160/180 oppgaver omtales KUN som anomali i 0.1 (140 er
      gjeldende). Ingen basalfag (anatomi/fysiologi/biokjemi) som kjernestoff — dette er klinikk.
- [ ] **Single best answer + distraktoranalyse (den definerende mekanikken):** HVER `example`/
      `exercise` er en vignett med fire alternativer og en `solution` som forklarer det riktige
      OG hvorfor hver av de tre distraktorene er nest best/gal (distraktoranalyse-malen §2). Hver
      oppgave merket med sjangerkode (BEH/DIA/HÅND/UTR/KUNN).
- [ ] **Klinisk-bredde-vekting:** kapittel- og oppgavefordeling følger frekvensvekten (kardiologi
      tyngst; indremedisin ~55–60 %; kirurgi ~14 %; ingen disiplin utelatt — ti er 16/16).
      Farmakologi/geriatri vevd inn i hver disiplin + samlet i Del 14/13.3.
- [ ] **Tverrgående verktøy operasjonalisert:** blodgass/anion gap (F8), respirasjonsstøtte
      oksygenering-vs-ventilasjon (F5), eGFR-dosejustering (F3), kontraindikasjoner F11 (DOAK/
      mitralstenose→warfarin) og F12 (NSAID/nyresvikt) forekommer i sine hjemkapitler og i drillen.
- [ ] **Gjettestrategi/ingen minuspoeng:** F13 (gjett alltid) etablert i 0.1/0.2 og drillet i 15.4.
- [ ] **Kvotesum:** quiz ≥856 og flashcards ≥724 fordelt per kapittel som angitt (hardt minimum
      ≥800/≥700); 4 prøver per del for Del 1–14 (56) + 3 øvingseksamener; fasit-svaralternativer
      rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging, runtime stokker).
- [ ] **Opphavsrett:** alle vignetter, svaralternativer, distraktorforklaringer, case og
      øvingseksamener er NYSKREVNE — ingen ordrette oppgavetekster, alternativer eller
      fasitformuleringer fra det nasjonale arkivet. Medisinsk/latinsk terminologi, normalverdier
      og standard behandlingsprinsipper er allment fagstoff og fritt.
- [ ] **Leserkrav:** Forkunnskaper-blokk med lenker + collapsible «Klinisk nøkkelfakta- og
      verdiliste» først i hvert kapittel (lenk kun til eksisterende kapitler; tilbakelenk til Del
      0.3 der tverrgående verktøy trengs); Eksamensvinkel-`tip` og Typiske feil-`warning` i hvert
      kapittel; «bør kjenne til»-stoff plassert ETTER kjernestoffet og merket.
