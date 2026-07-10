# Prisingsstrategi — Skolesaga (per 10. juli 2026)

Autoritativ oppsummering av prisingsbeslutningene og evidensen bak dem.
Evidens: 16 studentpanel-rapporter (4 live høyskolebøker × 4 personas:
skippertak, stryk-redd, vegrer, toppjeger) + forretningsmodell-diskusjon.
NB: panelet er simulerte studenter — retningen er robust, prisNIVÅENE bør
A/B-testes mot ekte kjøp før de låses.

## Verditrappa

| Trinn | Pris | Innhold | Begrunnelse |
|---|---|---|---|
| Gratis | 0 | Bøker, quiz, flashcards, auto-retting, 3 løsningsforslag/uke (målt mur), 3 KI-vurderinger totalt | Skaper frustrasjonsøyeblikket; quiz/auto-retting må ALDRI bak mur |
| **Pluss** | **49 kr/mnd** (ev. 349/år) | **Alle løsningsforslag, ALLE fag + 10 KI-vurderinger/mnd** | 49 var «instant yes» hos alle 16 panelstudenter; 10 klikk koster ~1 kr og gjør pakken til «feedback», ikke «lesing» |
| Eksamenspass | ~149 kr engangs | 6 uker, alle fag, ~25 KI-klikk | Fanger skippertakerne som aldri abonnerer (panel: 149–250 OK i eksamensperiode, abo skremmer) |
| KI-klippekort | 10 kr/stk · 10/79 · 25/149 | Påfyll utover månedskvoten | ~100× margin (kost 0,06–0,11 kr/klikk, Haiku); kjøpes i innspurten |
| Premium (senere) | 99–129 kr/mnd | Større KI-kvote + «A-laget» (nivå 2-vurdering med toppjeger-rubrikker) | Toppjegerne i panelet ville betalt «det dobbelte» for A-stresstesting |
| Skolelisens | per elev | Alt inkludert | Lærere skal aldri møte muren |

## Besluttet: ALL-ACCESS, ikke per fag

Per-fag-prising av fasit-muren er forkastet fordi:
1. 49 var friksjonsfritt nettopp fordi det ikke krevde kalkyle — per fag
   gjeninnfører nølingen.
2. De beste brukerne tar flere av fagene våre samtidig (jus + exphil er
   samme førsteårsstudent) — per fag straffer dem.
3. Kryssalg er vekstmotoren: emnekode-SEO drar inn på ETT fag; all-access
   lar dem oppdage neste gratis (i abonnementet).
4. VGS/grunnskole (5–8 fag per elev) knekker på per-fag; to modeller er
   uforsvarlig kompleksitet (også i delt Supabase-rettighetsmodell).
5. Per-fag-betalingsviljen (panel: 300–500 kr/bok) fanges i stedet av
   eksamenspasset, klippekortene og premium-trinnet.

## KI-sensor modellstige (testet på 4 panelstudenter 10. juli — simulert, ingen API)

Test: 4 besvarelser skrevet tro mot studentenes dokumenterte svakheter, vurdert
på 3 modellnivåer med den ekte sensor-prompten; studentene reagerte i persona.

| Nivå | Modell | Innhold | Tokenkost | Pris | Margin |
|---|---|---|---|---|---|
| 1 «Karakter» | Haiku 4.5 | karakter + kort dom + 2-3 styrker/mangler + råd | ~0,06–0,11 kr | **GRATIS-nivået** (de 3 gratis + inkludert i abo) | — |
| 2 «Karakter + hvorfor» | Sonnet 4.6 | + siterer studentens EGNE formuleringer, kobler til sensornøkler/feilkoder, prioritert liste | ~0,4–0,8 kr | 2 klipp (~16 kr) | ~25× |
| 3 «Ditt avsnitt til A» | Opus 4.8 | + nivå 2-rubrikk (A-stresstest), omskriver ETT av studentens avsnitt til A, «neste øvelse»-peker | ~2–4 kr | 4 klipp (~32 kr) | ~10× |

**Testresultat (4/4):**
- Vurderingene TRAFF — alle fire sa den fanget ting de ikke så selv («første
  gang noen har skilt mellom hva jeg FORSTÅR og hva jeg klarer å LEVERE»;
  «første gang 'lese alene om kvelden' ikke betyr 'vurdere alene'»). Selv
  «Ikke bestått»-dommen ble opplevd som «vondt på den riktige måten» fordi
  N3 la til veien videre.
- **Alle fire valgte nivå 2 som standard.** Nivå 1 ble slaktet som betalt
  produkt av alle («angst uten oppskrift», «nesten verdiløst for alle som har
  lest boka», «for vag der det gjaldt») → nivå 1 er GRATIS-/inngangs-nivået,
  nivå 2 er kjerneproduktet, nivå 3 er premium-øyeblikkene (store praktikum,
  søndagsprøver, siste to uker).
- **Navnene må si hva man FÅR** (3/4 uavhengig): ikke «Rask/Grundig/Sensor+»
  («Rask høres ut som dårligere kvalitet»), men «Karakter / Karakter + hvorfor
  (med dine sitater) / + ditt avsnitt omskrevet til A».
- Betalingsvilje opp hos alle. Deltidsstudenten sprenger 10-klippskvoten
  naturlig (~12/mnd) → påfyll-designet virker. Vegreren ville SKREVET MER
  («med en sensor som svarer blir skriving en løkke i stedet for et rop ut i
  tomrommet») — adferdsendring som øker hele produktets verdi.
- Toppjegeren bekreftet: nivå 3 ER «A-stresstesten» han ville betalt dobbelt
  for («eneste av de tre som gjør noe boka ikke allerede gjør»).

**Betingelser fra studentene (produktkrav):**
1. Faglig presisjon absolutt: «hvis den selv bommer på en paragraf, mister
   jeg all tillit på dagen» → sensor-konteksten må hente hjemler/nøkler fra
   bøkene (som den gjør), og jus-vurderinger bør QA-es ekstra.
2. Karakteren kalibreres KONSERVATIVT — heller streng enn snill («gir den meg
   B når sensor gir C, slutter jeg å stole på den»).
3. Vis eksempel-vurdering per nivå FØR kjøp (ingen skjønte stigen av navnene
   alene).
4. Månedsabo uten årsbinding — «sagt opp 16. mai» er naturlig og OK (årsabo
   kun som frivillig rabatt).

## Hint: GRATIS (besluttet 10. juli)

Hint skal IKKE bak muren — de er selgeren av fasiten, ikke konkurrenten:
- Hint øker investeringen i oppgaven → både mestring og fortsatt-fast-frustrasjon
  øker kjøpssannsynligheten; selv den som løser med hint vil VERIFISERE (og
  verifisering = må/pluss/felle-fasitens verdi).
- Trappen per oppgave: hint (gratis) → fasit (Pluss) → KI-vurdering av eget
  svar (klikk). Hvert trinn selger neste.
- Konkurrenten på hint-nivå er gratis ChatGPT — mur foran hintet mister
  brukeren i det avgjørende øyeblikket.
- UX-krok: etter brukt hint, vis «Sjekk svaret ditt mot full fasit»-knapp
  (møter muren for gratisbrukere).

## KI-vurderinger (AI-sensor)

- Løser panelets største udekkede behov på tvers av ALLE bølger: «ingen kan
  vurdere MIN tekst» (stryk-redd: subsumsjon; toppjeger: veiing).
- 10/mnd i Pluss: nok til vane, for lite til eksamensinnspurt → klippekort.
  Ubrukte klikk ruller maks 1 måned (skaper rytme).
- Referansepris hos brukerne: privatlærer 450 kr/t (nevnt spontant i panelet).
- Premium-differensiator senere: nivå 2-rubrikkene fra bølge 4 (sterkeste
  innvending? betingelsen som snur konklusjonen? gjorde veiingen arbeid?)
  som vurderingskriterier = «A-stresstesten» panelet etterlyste.

## Lydbok med quiz — per fag (VURDERES, ikke besluttet)

Anbefaling: per-fag er forsvarlig akkurat her, i motsetning til fasit-muren:
- Lytting er fag-spesifikk konsumpsjon (pendling/trening til ETT emne), et
  komplement til kjernen — engangskjøp per fag skader ikke 49-trinnet.
- Modell A: **engangskjøp 79–99 kr/fag** («eie lydboka») — matcher
  lydbok-mentalmodellen, forhåndsbetalt cash, ingen churn.
- Modell B: inkludert i Premium som differensiator (styrker 99–129-trinnet).
- A og B kan kombineres (engangskjøp for ikke-abonnenter, inkludert i Premium).
- IKKE flytt eksisterende quiz bak lydbok-betaling — quiz er gratis-trinnets
  motor mot fasit-muren. «Quiz» i lydbokpakken = lyd-tilpassede quizer/
  repetisjonsspor, ikke dagens Test deg selv.
- Kostnadsbilde: generering (ElevenLabs) er engangs per bok og krever
  eksplisitt samtykke (no-API-regelen); marginalkost per lytter ≈ 0
  (Supabase Storage/bandwidth). Pipeline for segmentering + opplasting
  finnes fra før.
- Utrulling: PILOT på 1–2 store fag (exphil03 er åpenbar: størst kull,
  «les på bussen»-caset), mål konvertering før flere produseres.

## Adopsjon og selling points (oppfølgingsrunde: alle 20 panelstudenter spurt direkte)

**«Ville du brukt dette fremfor alternativene?» — 20 av 20 JA.**
16 som hovedressurs/primærressurs, 4 (toppjegerne) som «ryggrad, ikke eneste
kilde» (beholder primærkilder som kontroll — sunt, og ærlig markedsføringsvinkel:
«ha Lovdata åpen, den er ikke ufeilbarlig»).

**Hva produktet ERSTATTER (viktig for posisjonering):**
- Pensumbok lest lineært: droppet av 18/20 («600 sider, 6 dager — nei»;
  beholdes som oppslagsverk)
- Forelesninger/opptak: droppet helt eller delvis av 12/20 («passer ikke i
  togvinduet», «kan ikke søke i dem», «filosoferer i sanntid, uten kriterier»)
- Privatkurs (flere tusen kr) og privatlærer (450 kr/t): eksplisitt erstattet
- Kompendier/notat-svartebørs, YouTube (unntak: se diagramtegning)

**Hva som beholdes VED SIDEN AV (ikke konkurrenter, komplementer):**
- Gamle eksamenssett som kontroll (skippertakere + toppjegere)
- Lovdata (jus — boka krever selv drillen)
- Kollokvier — men med NY rolle: bokas prøver som agenda, E/C/A-listene som
  rettenorm (produktet gjør kollokvier bedre, ikke overflødige)

**ChatGPT-vollgraven bekreftet:** 14/20 sa uoppfordret at de IKKE stoler på
ChatGPT om sensorkrav («finner på fortegn med større selvsikkerhet enn denne
boka noensinne gjør», «vet ikke hva UiO-sensor krever», «smigrer meg»).
ChatGPT degraderes til «forklar dummere»-nødhjelp og muntlig forhør.
→ Sensorveilednings-forankringen ER vollgraven — front den i all markedsføring.

**KI-sensor-behovet spontant bekreftet 4 ganger** («det eneste boka ikke kan,
er å lese MITT svar og si om det holder», «boka svarer ikke tilbake», «rette
drøftingsskissene mine», «kritisere veiingen min») — KI-vurdering er det
naturlige neste trinnet i studentenes egne ord.

**Selling points i studentenes egne ord (bruk i markedsføring):**
- «Alt annet forteller deg hva Kant mente. Denne forteller deg hva DU må
  skrive.» (skippertak)
- «Som å få sensorveiledningen før eksamen.» / «oversatt til bruksanvisning»
  (skippertak/toppjeger)
- «Den viser en besvarelse som misser nesten alt og LIKEVEL består — gulvet
  er nåbart på ei uke.» (skippertak, jus)
- «Det føles som å få juksearket alle de med akademikerforeldre fikk gratis
  hjemme.» (stryk-redd) ← panelets sterkeste linje
- «Jeg sluttet å være redd for å stryke i uke tre.» (stryk-redd)
- «Det er den eneste jusboka jeg har lest ferdig.» (vegrer)
- «Du slipper å late som du liker filosofi; du følger bare oppskriften.» (vegrer)
- «Den eneste boka som behandler toppkarakter som håndverk, ikke talent.»
  (toppjeger)
- «Pensum har alle; sensorens sjekkliste har bare de som leser denne.» (toppjeger)
- «Bygget for at INGEN av de 8 timene dine i uka skal være bortkastet.» (deltid)
- «Det er ikke innholdet som er gull — det er at noen endelig har tatt ansvar
  for PLANEN.» (deltid)
- «Du trenger ikke slutte i jobben for å klare dette.» (deltid, jus)

**Segmentering av budskap:** skippertak/stryk-redd → «hva som er NOK + gulvet»;
vegrere → «oversatt til norsk / oppskrift»; toppjegere → «sensorens sjekkliste,
håndverk ikke talent»; deltid → «planen er tatt ansvar for, timene kastes ikke
bort». Fellesnevneren på tvers: **«vi har lest sensorveiledningene for deg»** —
det er kjernebudskapet.

## Åpne punkter før lansering

- Betalingsinfrastruktur (størst — se docs/LANSERING-TODO.md);
  `user_credits` finnes i delt Supabase (eksamenssett-siden) og er naturlig
  hjem for klippekort-mekanikken.
- A/B-test pass-prisen (149 vs 199) og årsabo-nivået.
- Fasit-mur og AI-sensor er bygget men feature-flagget AV.
