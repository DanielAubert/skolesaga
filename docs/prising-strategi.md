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

## Åpne punkter før lansering

- Betalingsinfrastruktur (størst — se docs/LANSERING-TODO.md);
  `user_credits` finnes i delt Supabase (eksamenssett-siden) og er naturlig
  hjem for klippekort-mekanikken.
- A/B-test pass-prisen (149 vs 199) og årsabo-nivået.
- Fasit-mur og AI-sensor er bygget men feature-flagget AV.
