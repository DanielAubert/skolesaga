# Eksamensanalyse: Felles avsluttende skriftlig deleksamen i medisin (nasjonal)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på det nasjonale eksamensarkivet for **Felles avsluttende skriftlig deleksamen i medisin** (tidligere «Nasjonal delprøve i medisin»), slik det ligger i `~/Desktop/Eksamner/UiO/MEDISIN-felles-avsluttende-deleksamen/` — 71 filer, 2017–2026, mange **med fasit og begrunnelser** samt egne **psykometrinotater**. Analysen er kvantitativ: **alle 16 tilgjengelige bokmål-sett med fasit er splittet oppgave for oppgave og klassifisert maskinelt** (2 256 oppgaver), og resultatene er kryssjekket mot de faglige merkelappene eksamenskommisjonen selv bruker i psykometrinotatene. Nynorsk-settene er rene oversettelser og er ikke analysert separat. Rene bildeskann forekommer nesten ikke — tekstuttrekk (`pdftotext -layout`) fungerte for alle fasit-sett.
>
> **Dette er IKKE MED1100 (modul 1).** MED1100-analysen (`docs/hoyskole-boker/med1100/`) holdt bevisst denne eksamenen utenfor og konkluderte med at den hører til **et helt annet sted i studieløpet**. Felles avsluttende deleksamen avlegges i **siste studieår / nest siste semester** og tester **anvendt klinisk medisin** (diagnose, behandling, håndtering) på tvers av alle kliniske fag — ikke det friske menneskets grunnfag (anatomi/fysiologi/biokjemi/statistikk) som modul 1 dekker. Overlappen er indirekte: klinisk resonnement hviler på basalfag, men nivå, formål og oppgaveform er et annet. Denne boka bygges derfor helt fra bunnen som en **klinisk sluttkompetanse-bok**.
>
> **Alt innhold er omskrevet med egne ord.** Ingen ordrette gjengivelser av oppgavetekster, vignetter, svaralternativer eller begrunnelser. Medisinsk/latinsk terminologi, normalverdier, standarddoser og behandlingsprinsipper er allment fagstoff og ikke opphavsrettslig beskyttet, men **normalverdier og doser er merket (verifiser)** der de er hentet fra enkeltoppgaver og bør kontrolleres mot gjeldende retningslinjer før bruk som fasit.

---

## 0. Det viktigste å forstå først

Til forskjell fra MED1100s tre svært ulike blokkeksamener er denne eksamenen **ett enkelt, homogent format**:

- **140 flervalgsoppgaver** (single best answer), **4 timer**, **ingen hjelpemidler**, **bestått/ikke bestått**.
- Hver oppgave er en **klinisk pasientvignett** etterfulgt av **fire svaralternativer (A–D): tre distraktorer + ett beste svar**. Ingen «velg to», ingen femte alternativ, ingen fritekst.
- Studenten settes nesten alltid i en **konkret klinisk rolle** — «Du er LIS1 …» eller «Du er fastlege …» — og skal ta en **beslutning**: stille diagnose, velge behandling, velge neste utredningssteg eller håndtere en situasjon.
- Eksamenen er **nasjonal og felles** for alle fire medisinske fakulteter (UiO, UiB, NTNU, UiT) og speiler et felles sett læringsutbytter for hele det kliniske studiet.

En eksamensrettet bok må derfor være **bred, ikke dyp**: den skal dekke alle kliniske disipliner på det nivået en fersk lege (LIS1) forventes å beherske, med hovedvekt på **klinisk beslutningstaking under tvetydighet**, ikke på detaljert basalvitenskap.

---

## 1. Eksamensform og utvikling

### Format (stabilt fra 2020)

| Egenskap | Verdi |
|---|---|
| Oppgavetype | Flervalg, single best answer, 4 alternativer (A–D) |
| Antall oppgaver | **140** (stabilt 2020→2026) |
| Varighet | **4 timer** (~100 sekunder per oppgave) |
| Hjelpemidler | **Ingen** (skoleeksamen, digital i Inspera) |
| Vurdering | **Bestått / ikke bestått** |
| Karaktergrense | Settes per sitting, typisk **~58–61 %** riktig |
| Plattform | Digital (Inspera); fasit + begrunnelser publiseres rett etter |
| Deltakere | Alle avgangsstudenter ved UiO, UiB, NTNU, UiT |

### Historisk utvikling

- **2014:** fakultetene får i oppdrag å utrede en felles eksamen.
- **2017–2020:** fem **pilotrunder** («Nasjonal delprøve i medisin»), avlagt i siste studieår. Prosjektet fikk **NOKUTs utdanningskvalitetspris i 2017**.
  - V2017: **120 oppgaver**, 4 timer, reliabilitet 0,80.
  - V2018: **160 oppgaver**; V2019: **180 oppgaver** (piloterte ulik lengde).
  - Fra V2020: standardisert til **140 oppgaver**.
- **Vår 2021:** innført som **obligatorisk** felles avsluttende skriftlig deleksamen for alle norske medisinstudenter, med navneskifte fra «Nasjonal delprøve» til «Felles avsluttende skriftlig deleksamen».
- **Vår og høst** hvert år (2021→), slik at både høst- og vårkull får samme deleksamen. **Aktiv per 2026** — V2026-settet (26. mai 2026, 457 kandidater) finnes med fasit; eksamenen kjøres fortsatt.

### Deltakertall og prestasjon (fra psykometrinotatene)

| Sitting | Kandidater | Snittscore | Bestått-grense |
|---|---|---|---|
| V2019 (pilot) | 370 | 73 % | — |
| V2020 (pilot) | 387 | 80 % | — |
| V2021 | 371 | 79 % | — |
| H2021 (kont/mindre kull) | 167 | 76 % | — |
| V2022 | 412 | 75 % | — |
| H2022 | 193 | 74 % | — |
| V2023 | 431 | 79,1 % | 60,83 % |
| H2023 | 200 | 76 % | 59,27 % |
| V2024 | 433 | 74 % | 58,24 % |
| H2024 | 194 | 75 % | 58,80 % |
| V2025 | 439 | 73 % | 58,17 % |
| H2025 | 213 | 75 % | 58,31 % |
| V2026 | 457 | 77 % | 59,50 % |

**Mønster:** Vårsittinger er de store fulle avgangskullene (~370–457 kandidater); høstsittinger er mindre (~167–213, i praksis kont/forsinkede kandidater). Snittet ligger stabilt **73–80 %**, og bestått-grensen justeres per sitting til **~58–61 %** — altså en **kriterie-/standardsettingsbasert grense**, ikke en fast prosent. Reliabiliteten meldes gjennomgående som «god» (0,80 i 2017-piloten). Bestått-grensen ligger komfortabelt under snittet, men spredningen i vanskegrad er stor.

---

## 2. Temafrekvens per klinisk disiplin (kvantitativt)

Fordeling basert på maskinell klassifisering av **alle 2 256 fasit-oppgaver (16 sett, 2017–2026)**. Hver oppgave er tildelt sin **primære disiplin** ut fra vektet nøkkelordtreff i vignett + svaralternativer. **Gjenganger-score** = antall av de 16 settene disiplinen forekommer i (maks 16).

| Disiplin | Antall | Andel | Gjenganger |
|---|---:|---:|:---:|
| **Kardiologi / hjerte-kar** | 355 | **15,7 %** | 16/16 |
| **Infeksjonsmedisin** | 184 | 8,2 % | 16/16 |
| **Ortopedi / muskel-skjelett** | 161 | 7,1 % | 16/16 |
| **Gastroenterologi** | 156 | 6,9 % | 16/16 |
| **Lungemedisin** | 153 | 6,8 % | 15/16 |
| **ØNH / øye** | 146 | 6,5 % | 16/16 |
| **Nefrologi / urologi** | 136 | 6,0 % | 16/16 |
| **Psykiatri / rus** | 131 | 5,8 % | 15/16 |
| **Onkologi / palliasjon** | 100 | 4,4 % | 16/16 |
| **Hematologi** | 96 | 4,3 % | 16/16 |
| **Nevrologi** | 90 | 4,0 % | 15/16 |
| **Kirurgi / gastrokirurgi** | 87 | 3,9 % | 16/16 |
| **Endokrinologi** | 72 | 3,2 % | 15/16 |
| **Revmatologi** | 70 | 3,1 % | 15/16 |
| **Gynekologi / obstetrikk** | 54 | 2,4 % | 15/16 |
| **Allmennmedisin / samfunn / jus** | 53 | 2,3 % | 16/16 |
| **Pediatri** | 48 | 2,1 % | 15/16 |
| **Klinisk kjemi / laboratorium** | 48 | 2,1 % | 14/16 |
| **Hud / dermatologi** | 41 | 1,8 % | 13/16 |
| **Akuttmedisin / anestesi** | 37 | 1,6 % | 14/16 |
| **Farmakologi (rendyrket)** | 29 | 1,3 % | 16/16 |
| **Geriatri (rendyrket)** | 2 | 0,1 % | 2/16 |
| Uklassifisert | 7 | 0,3 % | — |

### Tolkning og forbehold

- **Alle store kliniske disipliner er representert i så godt som hvert sett.** Ti disipliner har 16/16 i gjenganger-score — bredden er selve poenget med eksamenen. En bok kan ikke satse på et smalt utvalg; den må dekke hele klinikken.
- **Kardiologi er klart størst** (~16 %). Tallet er reelt, men noe oppblåst av at hjerte-kar-risikofaktorer (hypertensjon, statin, koronar komorbiditet) opptrer som *bakgrunn* i mange vignetter som primært handler om andre fag. En stramere klassifisering (krav om primært kardialt fokus i selve spørsmålet) gir ~15–20 % med genuint kardialt tyngdepunkt — kardiologi er utvilsomt tyngst uansett metode.
- **Farmakologi og geriatri er underrapportert som egne bokser**: de er gjennomgripende *tverrgående* tema. Nesten hver behandlingsoppgave er i praksis en farmakologioppgave (riktig legemiddel/dose/kontraindikasjon), og en stor andel vignetter gjelder **eldre, multisyke pasienter** (sykehjem, polyfarmasi, CFS/skrøpelighetsvurdering, nyresvikt-justert dosering). Disse to må derfor **integreres på tvers**, ikke isoleres.
- **Paraklinikk i klinisk innpakning:** radiologi (CT/MR/røntgen/ultralyd), klinisk kjemi (blodgass, elektrolytter, CRP) og klinisk farmakologi testes **innvevd i vignettene**, ikke som egne seksjoner — se oppgavesjangre.

### Grupperer man i hovedbolker

- **Indremedisin i vid forstand** (kardiologi + lunge + gastro + nefro/uro + endokrin + hematologi + infeksjon + revma + onkologi) utgjør **~55–60 %** av alle oppgaver — tyngdepunktet ligger her.
- **Kirurgiske fag** (ortopedi + gastrokirurgi + urologisk kirurgi + ØNH-kirurgi) utgjør **~13–15 %**.
- **Psykisk helse og rus** ~6 %, **nevrologi** ~4 %, **kvinne-/barnehelse** (gyn/obst + pediatri) ~4,5 %, **hud/ØNH-medisin/øye** ~8 %, **allmenn-/samfunnsmedisin/jus** ~2–3 %, **akutt/anestesi** ~2 % (men akuttlogikk gjennomsyrer mange indremedisinske vignetter).

---

## 3. Oppgavesjangre

Alle oppgaver deler samme skall (vignett → 4 alternativer → ett beste svar), men **spørsmålsstammen** styrer resonnementet. Fordeling over alle 2 256 oppgaver:

| Sjanger (spørsmålsstamme) | Andel | Hva som testes |
|---|---:|---|
| **Behandling / tiltak / legemiddel** | ~33 % | «Hva er beste behandling/tiltak?», «Hvilket legemiddel/dose?» |
| **Diagnose / årsak** | ~30 % | «Mest sannsynlige diagnose/årsak/tilstand?» |
| **Håndtering / neste steg** (praktisk) | ~15 %¹ | «Hvordan bør situasjonen håndteres?», «Hva er viktigst å gjøre først?», «Beste strategi videre?» |
| **Utredning / undersøkelse** | ~6 % | «Videre utredning?», «Hvilken prøve/undersøkelse?», «Hvilken bildediagnostikk?» |
| **Kunnskap / mest korrekt utsagn** | ~5 % | «Hva er riktig om …?», «Mest korrekt påstand?» |
| **Kommunikasjon / system / jus** | <1 %² | Melde-/henvisnings-/rettighetsspørsmål, informasjon til pasient |
| **Prognose / komplikasjon / risiko** | <1 %² | «Hvilken komplikasjon?», «Hvordan senke risiko?» |

¹ «Håndtering/neste steg»-oppgaver ble maskinelt fanget dels som «annet» (~24,5 % i rå-tellingen); manuell gjennomgang viser at brorparten er praktiske management-spørsmål («hvordan håndteres dette best», «hva gjør du først»). **Beslutning/håndtering + behandling utgjør dermed reelt nær halvparten av settet.**
² Kommunikasjon/jus og prognose er lavfrekvente som *rendyrket stammetype*, men temaene inngår ofte som distraktorer eller som del av management-alternativene.

### Gjennomgående trekk i vignettene

- **Rolleforankring:** «Du er LIS1 …» (mest brukt), «Du er fastlege …», sjeldnere «på legevakt / LIS». Rollen definerer forventet handlingsrom (allmennlege vs. sykehuslege vs. akuttmottak).
- **Innvevde kliniske data:** vignetter inneholder ofte **arteriell blodgass med referanseområde**, elektrolytt-/lab-svar, vitalia (RF, SpO₂, puls, BT, temp, GCS) og henvisning til **bildediagnostikk**. Oppgaver som *refererer* til CT/MR/røntgen/ultralyd/EKG er svært vanlige (CT nevnt i ~325, røntgen ~239, ultralyd ~213, EKG ~200, MR ~183 oppgaver på tvers av settene); studenten skal **tolke funn eller velge riktig modalitet**, ofte uten at selve bildet er nødvendig for svaret.
- **Realistiske distraktorer:** de tre gale alternativene er gjennomgående **plausible** — «single best answer» betyr at flere kan være delvis riktige, men ett er mest hensiktsmessig. Distraktorene er ofte vanlige feilvalg fra klinisk praksis (feil dose, for aggressiv/for passiv håndtering, riktig medikamentklasse men feil middel).
- **Multisyke/eldre-tyngde:** komorbiditet (koronarsykdom, nyresvikt, hjertesvikt, demens, skrøpelighet) er bygget inn for å tvinge fram **individualisert** vurdering — f.eks. dosejustering ved eGFR-fall eller forsiktig opioidtitrering hos skrøpelig pasient.
- **Kunnskapsbaserte «rene fakta»-oppgaver** finnes (f.eks. radon → lungekreft, ikke kols; antibiotika-mekanisme; genetisk test ved psykoseutredning), men er mindretall — de fleste krever *anvendelse*, ikke gjenkjenning.

---

## 4. Sensorkrav og standardsetting

Eksamenen rettes **automatisk** (kun ett rett alternativ per oppgave), så det finnes ingen sensorveiledning i tradisjonell forstand. «Sensorkravene» ligger i stedet i **fasitbegrunnelsene** og **eksamenskommisjonens psykometriske etterarbeid**:

- **Én begrunnelse per alternativ.** Fasiten forklarer ikke bare hvorfor det riktige er riktig, men **hvorfor hvert galt alternativ er galt** — ofte med henvisning til at et alternativ er «riktig medikament, men for høy startdose», «riktig tanke, men ikke førstevalg», eller «gjør ikke noe med det egentlige problemet (f.eks. bedrer oksygenering, men ikke ventilasjon)». Dette er gullgruven for en lærebok: **det er distraktor-logikken som skal læres.**
- **«Single best answer»-prinsippet håndheves eksplisitt.** Ved studentklager svarer kommisjonen gjentatte ganger at «oppgaven har et tydelig beste svar» selv der flere alternativer er *forsvarlige*. Studenten må velge det **mest hensiktsmessige**, ikke bare et akseptabelt tiltak.
- **Psykometrisk kvalitetssikring:** hver oppgave analyseres for **diskriminerende evne** (deler kandidatene i tre etter totalscore; en god oppgave løses klart best av toppgruppen) og for om alle svaralternativer brukes. Oppgaver som svikter, **fjernes eller får godkjent flere svar** etter sensurmøtet. Eksempel: V2026 oppgave 99 (ortopedi) fikk to godkjente svar pga. «ulik regional henvisningspraksis».
- **Standardsatt bestått-grense:** grensen fastsettes per sitting (typisk 58–61 %), ikke som fast prosent — en kriterierefererende tilnærming som justerer for settets vanskegrad.
- **Ingen minuspoeng / negativ retting.** Blank = feil; det er derfor **alltid rasjonelt å gjette** (i motsetning til MED1100 blokk 2, der negativ retting straffer gjetting). Dette er en viktig eksamensstrategisk forskjell å formidle i boka.

### Nivåskille (destillert)

- **Bestått:** treffer de **høyfrekvente, «lærebok»-typiske** presentasjonene — klassisk symptombilde → riktig standarddiagnose og førstevalgsbehandling, med basal justering for åpenbar komorbiditet.
- **Toppsjikt:** navigerer **tvetydige** vignetter der to alternativer er nær hverandre, gjør riktig **individualisering** (dose ved nyresvikt, kontraindikasjoner, når man *ikke* skal agere), og kjenner de mindre vanlige, men fastlagte «snubletråd»-poengene (f.eks. DOAK kontraindisert ved atrieflimmer + mitralstenose → warfarin).

---

## 5. Typiske feil (fra fasitbegrunnelser og sensurmøter)

Destillert fra fasitenes distraktorforklaringer og psykometrinotatenes gjennomgang av studentklager:

1. **Velge et forsvarlig, men ikke optimalt tiltak.** Vanligste fellen: alternativet er «ikke feil», men et annet er raskere/tryggere/mer målrettet (f.eks. oksykodon depot vs. titrert i.v. morfin ved akutt sterk smerte hos skrøpelig pasient).
2. **Feil dose eller doseringsvei** — riktig legemiddelklasse, men for høy startdose, feil administrasjonsvei eller manglende titrering (særlig opioider, insulin).
3. **Ikke individualisere for komorbiditet** — glemme å justere dose ved nyresvikt/eGFR-fall, eller overse kontraindikasjon (DOAK ved mekanisk klaff/mitralstenose; NSAID ved nyresvikt/hjertesvikt).
4. **Behandle det åpenbare avviket i stedet for pasienten** — agere på et enkelt labavvik (lett forhøyet kalium hos symptomfri pasient) når riktig svar er å avvente/kontrollere.
5. **Feil respirasjonsstøtte-logikk** — velge tiltak som bedrer oksygenering når problemet er ventilasjon (høy PaCO₂ → trenger trykkstøtte/NIV, ikke bare mer O₂).
6. **Overse alvorlig differensialdiagnose bak et «enkelt» funn** — f.eks. sternumfraktur som markør for høyenergitraume med mulig underliggende organskade.
7. **For aggressiv eller for passiv håndtering** — henvise/innlegge pasienter som kan håndteres i førstelinje, eller motsatt undervurdere alvorlighet.
8. **Metabolsk-acidose-/anion gap-tolkning** — feil intoksikasjonsdiagnose når blodgass + anion gap peker entydig (f.eks. metabolsk acidose med høyt anion gap + respiratorisk kompensasjon → metanol, ikke opiat/stimulant).
9. **Feil førstevalg ved nevropatisk smerte** — bruke NSAID/opioid der gabapentin/pregabalin er indisert (postherpetisk nevralgi).
10. **Melde-/system-/juskunnskap** — feil om hvem meldinger går til og hvorfor (arbeidsrelatert sykdom → Arbeidstilsynet/pasientens rettigheter, ikke til andre behandlere eller arbeidsgiver).

---

## 6. Kunnskaps- og begrepsapparat

Fordi eksamenen er **uten hjelpemidler**, må klinisk kjernekunnskap sitte aktivt. Det som må beherskes under tidspress (~100 sek/oppgave):

### Klinisk beslutningsstøtte som må kunne utenat
- **Førstevalgsbehandling** for vanlige tilstander per disiplin (empirisk antibiotika, antihypertensiva-trapper, analgetika-trapp inkl. nevropatisk smerte, astma/kols-behandling, diabetesbehandling type 1 vs. 2).
- **Doser og doseringsprinsipper** for høyfrekvente legemidler *(verifiser mot gjeldende felleskatalog/retningslinjer)*: opioid-titrering i.v., paracetamol 1 g × 4, insulin-oppstart, NSAID-grenser, gabapentin-opptrapping.
- **Kontraindikasjoner og interaksjoner** som gjentas: DOAK ved mitralstenose/mekanisk klaff (→ warfarin), NSAID ved nyresvikt/hjertesvikt/ulcus, dosejustering ved eGFR-fall, aminoglykosid ved nyresvikt.
- **Akuttalgoritmer:** ABCDE, respirasjonsstøtte-eskalering (O₂ → high-flow → CPAP → NIV med trykkstøtte), sjokk-håndtering, GCS-vurdering.

### Normalverdier og tolkningsrammer (må kunne, uten oppslag) — *(verifiser)*
- **Arteriell blodgass:** pH 7,35–7,45; PaCO₂ 4,7–6,0 kPa; PaO₂ 10,7–13,3 kPa; SaO₂ 96–99 %; HCO₃⁻ 22–26 mmol/L; BE −3 til +3; anion gap 8–12 mmol/L. Tolkning: acidose/alkalose, respiratorisk vs. metabolsk, kompensasjon, anion gap-forhøyelse.
- **Nyrefunksjon:** eGFR-terskler for dosejustering; kreatinin-tolkning; hyperkalemi-håndtering.
- **Vitalia-terskler:** respirasjonsfrekvens, SpO₂-grenser for O₂-behov, BT-/puls-grenser for sjokk.
- **Radon: nasjonal grenseverdi 200 Bq/m³** *(verifiser)*; radon → lungekreft (ikke kols).

### Tverrgående rammeverk
- **NORRISK 2** (kardiovaskulær risikoskår → statinindikasjon) *(verifiser terskler)*.
- **Clinical Frailty Scale (CFS)** — skrøpelighetsvurdering hos eldre (styrer behandlingsintensitet/henvisning).
- **ICF** (funksjon/deltakelse) og **disease/illness/sickness**-perspektivet.
- **Meldeplikt og system:** arbeidsrelatert sykdom → Arbeidstilsynet (skjema 154); henvisningsindikasjoner; fastlegens vs. spesialisthelsetjenestens roller; Livmorhalsprogrammet/HPV-screening.
- **Farmakologiske grunnmekanismer** i klinisk kontekst: antibiotika-virkningsmekanismer og resistens, antikoagulasjon (DOAK vs. warfarin), opioid-/NSAID-/paracetamol-farmakologi.

### Bilde-/paraklinikk-lesing
- **EKG:** rytme, iskemi/ST-endringer, ledningsforstyrrelser.
- **Radiologi:** velge riktig modalitet (CT vs. MR vs. ultralyd vs. røntgen) og tolke beskrevne funn.
- **Klinisk kjemi:** blodgass, elektrolytter, CRP/infeksjonsmarkører, blodutstryk-morfologi (hematologi).

---

## 7. Prognose og prioritering

Fordi eksamenen er **bred og bestått/ikke-bestått**, kan man ikke kompensere svake fagfelt med sterke — men man **kan** prioritere etter frekvens, siden alle disipliner testes hvert år.

### Prioriteringsrekkefølge for en eksamensrettet bok

1. **Kardiologi/hjerte-kar (~16 %, 16/16):** hjertesvikt, koronarsykdom/angina, atrieflimmer + antikoagulasjon, klaffesykdom, hypertensjon + NORRISK 2/statin, arytmi. Størst enkeltbolk — høyest drillvekt.
2. **Indremedisinsk kjerne (samlet ~40 %):** infeksjon (empirisk antibiotika, sepsis, resistens), lungemedisin (kols/astma, pneumoni, respirasjonssvikt/NIV, blodgass), gastroenterologi (magesmerter, GI-blødning, ulcus, lever/galle), nefrologi/urologi (nyresvikt, elektrolytter, LUTS/prostata), endokrinologi (diabetes, thyreoidea), hematologi (anemi, leukemi/MDS, koagulasjon), revmatologi, onkologi/palliasjon.
3. **Kirurgiske fag (~14 %):** ortopedi (frakturer, rygg/kne/hofte, klumpfot), gastrokirurgi (akutt abdomen, postoperative komplikasjoner), urologisk og ØNH-kirurgi.
4. **Akutt- og beslutningsmedisin (tverrgående):** ABCDE, respirasjonsstøtte-eskalering, intoksikasjon/blodgass-tolkning, sjokk, GCS, traume — gjennomsyrer mange vignetter.
5. **Psykisk helse og rus (~6 %):** depresjon/angst, psykose, suicidvurdering, rus/abstinens, akutt psykiatri.
6. **ØNH/øye/hud (~8 % samlet):** vanlige medisinske presentasjoner (nesepolypp, otitt, synstap, utslett, helvetesild/postherpetisk nevralgi).
7. **Nevrologi (~4 %), kvinne-/barnehelse (~4,5 %):** hjerneslag/TIA, hodepine, nevropati; svangerskap/prevensjon/gyn-cancer-screening; vanlige barnesykdommer og vaksiner.
8. **Allmenn-/samfunnsmedisin/jus (~2–3 %):** fastlegerollen, meldeplikt, henvisningsindikasjoner, screening, arbeidsmedisin.
9. **Farmakologi og geriatri — bygges inn overalt**, ikke som egne kapitler: riktig legemiddel/dose/kontraindikasjon i hver behandlingsoppgave, og individualisering for eldre/multisyke/skrøpelige.

### Bokens arketype

Boka bør bygges som en **case-drevet klinisk beslutningsbok** — ikke et lærebokoppslagsverk og ikke en basalfagsbok. Anbefalt struktur:

- **Kapittelinndeling per klinisk disiplin** (etter frekvensvekten over), der hvert kapittel presenterer de **høyfrekvente presentasjonene** som pasientvignetter i LIS1-/fastlege-perspektiv.
- **Kjernemekanikk = single-best-answer-trening med distraktoranalyse:** for hver øvingsoppgave, forklar ikke bare det riktige svaret, men **hvorfor hver distraktor er nest best/gal** — det er nettopp slik fasiten er bygget, og slik toppsjiktet skilles fra bestått.
- **Tverrgående «beslutningsverktøy»-bokser:** blodgasstolkning, dosejustering ved nyresvikt, opioidtitrering, antibiotikavalg, respirasjonsstøtte-eskalering, når-man-ikke-skal-agere.
- **Eksamensstrategi-kapittel:** ingen minuspoeng (gjett alltid), ~100 sek/oppgave (tidsdisiplin), «single best answer»-tankesett (velg mest hensiktsmessig, ikke bare forsvarlig), les rollen og komorbiditeten (de er sjelden pynt).
- **Nivå:** LIS1-forventning — bred klinisk handlingskompetanse, ikke spesialistdybde. Boka skal gjøre en avgangsstudent trygg på **å ta den beste beslutningen** i vanlige og halvvanlige situasjoner på tvers av hele klinikken.

Til forskjell fra MED1100-boka (tre parallelle delbøker med hver sin logikk: statistikk / cellebiologisk essay / anatomi-flervalg) er dette **én sammenhengende klinisk drillbok** med ett format og ett gjennomgående ferdighetsmål: **klinisk beslutningstaking under tvetydighet og tidspress.**

---

## 8. Kildeliste og metode

### Primærkilder
Alle filer i `~/Desktop/Eksamner/UiO/MEDISIN-felles-avsluttende-deleksamen/` (71 filer, 2017–2026):
- **16 bokmål-fasitsett med begrunnelser** (V2017, V2018, V2019, V2020, H2020, V2021, H2021, V2022, H2022, V2023, H2023, V2024, H2024, V2025, H2025, V2026) — **alle splittet oppgave for oppgave og klassifisert maskinelt** (2 256 oppgaver totalt). Fasitene markerer riktig alternativ med «X» og gir begrunnelse per alternativ.
- **~16 psykometrinotater** (2017→2026) — deltakertall, snittscore, bestått-grenser, reliabilitet, sensurmøtets vurderinger av påklagede oppgaver, samt sporadiske disiplin-merkelapper som validerte klassifiseringen.
- Nynorsk-settene er rene oversettelser (duplikater) og ble ikke analysert separat.

### Metode
- Tekstuttrekk med `pdftotext -layout`; ingen tunge bildeskann forekom blant fasit-settene.
- Oppgavesplitting på bare tallinjer (oppgavenummer) + verifisering av at hver blokk inneholder A–D-alternativer med «X»-markert svar (gir stabilt ~140 oppgaver per sett fra 2020, 120/160/180 i pilotårene).
- Disiplinklassifisering ved vektet norsk-/latinsk nøkkelordmatching (22 disipliner); primærdisiplin = høyeste treffsum. 7 av 2 256 oppgaver forble uklassifiserte (0,3 %).
- Sjangerklassifisering på spørsmålsstammen (siste `?`-linje i hver oppgave).
- **Kryssvalidering:** de faglige merkelappene eksamenskommisjonen selv bruker i psykometrinotatene (f.eks. «Oppgave 99, Ortopedi»; «Spørsmål 15 (gastrologi)») samsvarer med klassifiseringens topp-disipliner.

### Statusverifisering
- Formatet (140 MCQ, 4 t, single best answer, 4 alternativer, ingen hjelpemidler, bestått/ikke bestått, vår + høst, alle fire fakulteter) er bekreftet mot **med.uio.no / uio.no** (offisielle sider for felles avsluttende deleksamen) og mot psykometrinotatene.
- Historikk (utredning 2014, fem piloter 2017–2020 som «Nasjonal delprøve», obligatorisk fra V2021, NOKUTs utdanningskvalitetspris 2017) bekreftet mot med.uio.no.
- **Aktiv per 2026:** V2026-settet (eksamensdato 2026-05-26, 457 kandidater) foreligger med fasit; eksamenen kjøres fortsatt.

### Forbehold
- **Kardiologi-andelen (~16 %)** er noe oppblåst av hjerte-kar-komorbiditet i vignetter med annet primærfokus; reell kardial tyngde er ~15–20 % — uansett den største disiplinen.
- **Farmakologi og geriatri** er underrapportert som egne bokser fordi de er tverrgående; de er reelt til stede i en langt større andel oppgaver enn tallene antyder.
- **Normalverdier, doser og terskler** merket *(verifiser)* er hentet fra enkeltvignetter og må kontrolleres mot gjeldende norske retningslinjer før bruk som fasit i boka.
- **Opphavsrett:** alle beskrivelser av vignetter, alternativer og begrunnelser er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Medisinsk/latinsk terminologi, normalverdier og standard behandlingsprinsipper er allment fagstoff.
- **Avgrensning mot MED1100:** denne eksamenen tester anvendt klinikk i siste studieår og deler verken temavekting, format eller nivå med modul 1. Boka bygges selvstendig.
