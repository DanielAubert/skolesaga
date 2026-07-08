# Analyse: hvilke andre læringsressurser trenger høyskolefagene?

Bestilt av bruker 8. juli 2026, etter at alle 118 rammeverk sto ferdige.
Grunnlag: kvantitativ sveip over alle skjelettene (eksamensformer/ferdighets-
typer), bøkenes allerede planlagte innhold, og plattformens eksisterende
kapabiliteter.

## 1. Utgangspunktet — hva som allerede er dekket

Hver bok planlegger: ~590 quiz + ~585 flashcards (snitt), 4 prøver per temadel,
2–3 øvingseksamener i fagets EKSAKTE eksamensform, studieguide, modell-
besvarelser (A + kommentert C) og «Eksamensvinkel»/«Typiske feil» per kapittel.
Plattformen har fra før: quiz-runtime («Test deg selv»), flashcard-generering,
narrativ-versjoner (lesevennlig toggle), lydbok-pipeline, illustrasjoner,
nynorsk/nordsamisk-infrastruktur.

Det betyr: **innholdet er i stor grad planlagt — gapet er først og fremst
treningsFORMER som speiler eksamensformen, ikke mer stoff.**

## 2. Kvantitativ behovskartlegging (av 118 skjeletter)

| Signal i skjelettet | Fag | Ressursen det peker mot |
|---|--:|---|
| Flervalg/MC-trening | 85 | eksamenssimulator med ekte MC-scoring |
| Regne-/utledningsdrill | 83 | parametrisk oppgavegenerator + steg-retting |
| Identifikasjon/klassifisering | 82 | bildebasert trening (der faget er visuelt) |
| Essay/drøfting m/modellbesvarelser | 62 | AI-skrivetrening mot sensorkriterier |
| «Alt må pugges» (kode E/lukket bok) | 58 | spaced repetition på flashcards |
| Formelark utdeles | 47 | formelark-simulering («tren bruk, ikke pugg») |
| R/Python/kode-verktøy i pensum | 31 | kjørbar kode i nettleser |
| Minuspoeng-scoring | 26 | gjettestrategi-trening (EV-kalkyle) |
| Engelsk eksamen | 22 | tospråklig modus på quiz/flashcards |
| Jus-praktikum | 16 | subsumsjonstrening med AI-sensor |
| Figur-i-ord-økonomi | 16 | interaktive diagrammer |
| Kodeskriving/-sporing | 15 | auto-rettet kodeoppgave-løper |
| Tegning/skisse gir poeng | 13 | tegneøvelser med fasit-sammenligning |
| Muntlig/presentasjon | 10 | presentasjons-/muntligtrening |

## 3. Anbefalte ressurser, prioritert (verdi × byggekostnad)

### Nivå 1 — «quick wins»: gjenbruker eksisterende plattformteknologi

**R1. Narrativ-versjoner + lydbøker for høyskolebøkene.** Pipeline finnes
(VGS-bøkene har 100 % narrativ-dekning; lydbok-verktøyene er kamptestet).
Universitetsstudenter pendler/trener — lyd av studieguiden + narrativ av
teorikapitlene er billigste store løft. Allerede i TODO-OPUS §D for
econ1310/jus1111; bør bli standard etterarbeid per bygget bok.

**R2. Spaced repetition-modus (SRS) på flashcards.** ~69 000 kort er allerede
planlagt; det som mangler er en Leitner-/SM2-algoritme og en «dagens
repetisjoner»-visning. 58 fag har lukket bok/kode E der pugging ER
eksamensferdigheten (NOKUT-AFB, MED1100, TGB4100, tma4121, fin3521 …).
Uten SRS er 500+ kort per fag en haug; med SRS er de et system.
Bonus: Anki-eksport er nesten gratis å tilby ved siden av.

**R3. Eksamenssimulator.** Bøkene inneholder allerede 2–3 øvingseksamener i
fagets eksakte form — det som mangler er runtime: nedtelling (3t/4t/6t),
riktig oppgavevekting, og fremfor alt **ekte scoring-regler**: minuspoeng
(26 fag: −0,5/−1,5, «blankt = 0»), terskler (SOS1004: A = 17/20), og
todelte eksamener (60/40, begge-må-bestås). Gjettestrategi er et
dokumentert sensor-tema i mange analyser — det kan bare trenes med ekte
scoring. Datamodellen finnes; dette er en frontend-/runtime-jobb.

### Nivå 2 — høy verdi, middels bygging

**R4. AI-skrivetrening («AI-sensor») for essay og praktikum.** Fabrikkens
mest unike asset er at analysene har DESTILLERT sensorkriteriene per fag
(momentlister, «C krever begge deler», firepunkts-sjekklister, «relasjon +
faghistorisk plassering = A/B», subsumsjonsmaler, fallgruve-kataloger).
En skrivetrener som tar studentens fritekst-svar og gir tilbakemelding MOT
DISSE kriteriene (ikke generisk AI-feedback) dekker 62 drøftingsfag + 16
jus-praktikum — fagene der quiz/flashcards hjelper minst og der studenten
i dag ikke får øvd realistisk i det hele tatt. Modellbesvarelsene (A +
kommentert C) i bøkene gir kalibreringsgrunnlag. Dette er sannsynligvis
den enkeltressursen med størst pedagogisk verdi i porteføljen.

**R5. Parametrisk oppgavegenerator for regnefag.** 83 fag er regnedrevne, og
skjelettene har allerede «parametrisk mal (symboler først → tallvarianter)»
som kontraktsform — BI-fagene fordi eksamen SELV randomiserer tall per
kandidat. En generator som instansierer malene med nye tall + auto-retter
sluttsvar (og viser steg-fasit) gir uendelig mengdetrening der bøkene i dag
har et endelig antall oppgaver. Start med fagene som allerede har maler
(bok3532, bok3632, met-fagene, tma-fagene) og utvid.

**R6. Kjørbar kode i nettleser.** 15 kodefag (Python/C++/Scheme/JS) tester
kodeskriving/-sporing, og 31 fag har R/Python i pensum. En enkel
sandkasse (Pyodide for Python/R-emulering, JS/canvas nativt, WASM for
C++-smakebiter) + auto-test av kodeoppgaver dekker «hva skrives ut»-drill
interaktivt. IT2805s canvas-verksted er en perfekt pilot (nettleseren ER
kjøremiljøet).

### Nivå 3 — verdifullt, men krever innholdsproduksjon

**R7. Bildebank for identifikasjonsfagene.** TGB4100 (mineraler/bergarter),
MED1100 (histologi-snitt), kj1020/kjm1110 (strukturer/spektre), nokut-afb
(anatomi) tester visuell identifikasjon — men bøkene er tekstbaserte, og
opphavsrett stenger arkivbildene. Trenger enten egenproduserte/fri-lisens-
bilder (Wikimedia har mye geologi/anatomi CC-lisensiert) eller genererte
illustrasjoner. Uten dette har puggefagene et reelt hull mot eksamen.

**R8. Tegneøvelser med fasit-sammenligning.** 13 fag gir poeng for tegning
(TGB4100s tegnebolk, TTK4240s «boks = 0 poeng»-skisser, mat2500s
konstruksjoner, in1030s UML som er STRYKKRITISK). Enkleste form: oppgave →
studenten tegner på papir → avslør fasit-skisse + sjekkliste for
selv-evaluering. Ambisiøst: tegneflate med AI-vurdering. Start enkelt.

**R9. Interaktive diagrammer for figur-i-ord-økonomien.** 16 fag (econ-
serien, sok3500) drilles på «forklar mekanismen + figur». Skyvbare
IS-RR-/tilbud-etterspørsel-/badekar-diagrammer der studenten ser skiftene
ville løfte akkurat det sensorene måler. Kan bygges én gang per
diagramfamilie og gjenbrukes på tvers av alle økonomifagene.

### Nivå 4 — nisje/senere

- **Tospråklig modus** (22 engelsk-eksamensfag): flashcards er allerede
  planlagt tospråklige; en UI-toggle «vis engelsk term først» er liten.
- **Formelark-simulering** (47 fag): vis fagets faktiske formelark under
  øvingseksamen — og skjul det i fagene med kode E, så treningen matcher.
- **Muntlig-/presentasjonstrening** (10 fag, mest BI-prosjektfag): mal +
  sjekkliste holder; AI-rollespill er mulig senere.
- **Studieplan/eksamensnedtelling:** koble bokas «byggerekkefølge for
  studenten» (studieguiden) til kalender mot eksamensdato.
- **Lenkekatalog til originalkilder:** gamle eksamener kan ikke
  republiseres (opphavsrett), men en per-fag-lenkeside til institusjonenes
  offisielle arkiv + Lovdata (jus) er billig og ærlig.

## 4. Anbefalt rekkefølge

1. **R2 SRS** og **R3 eksamenssimulator** — de multipliserer verdien av
   innhold som allerede er planlagt, uten ny innholdsproduksjon.
2. **R1 narrativ+lyd** som standard etterarbeid per bygget bok (pipeline
   finnes; ren kapasitetsjobb).
3. **R4 AI-sensor** — størst pedagogisk differensiering; sensorkriteriene
   ligger klare i analysene og modellbesvarelsene kalibrerer den.
4. **R5 oppgavegenerator** og **R6 kodekjøring** — dybde for regne- og
   kodefagene.
5. **R7–R9** etter hvert som de aktuelle bøkene bygges (bildebank sammen
   med TGB4100/MED1100-bygging; diagrammer sammen med econ-bøkene).

## 5. Én advarsel

Ressursene over er verdiløse hvis de ikke arver bøkenes KALIBRERING. En
generisk quiz-app eller generisk AI-feedback kaster bort fabrikkens fremste
egenskap: at alt er vektet mot hva sensor faktisk belønner per fag. Hver
ressurs bør derfor konsumere skjelettenes/analysenes strukturer (sjanger-
koder, sensornøkler, feilkataloger, scoring-regler) — ikke bygges frikoblet.
