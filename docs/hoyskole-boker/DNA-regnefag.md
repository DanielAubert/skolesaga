# DNA: Regnefag (kvantitative emner)

Arketype for emner der eksamen består av regne-, utlednings- og modelloppgaver
med entydige(re) fasitsvar: økonomiske modellfag (makro/mikro), matematikk,
statistikk, fysikk, økonometri, samt programmerings-/algoritmefag.
Kjennetegn: oppgavemønstre gjentas år etter år → boka bygges som målrettet drill
mot nettopp disse mønstrene.

## Bokens makrostruktur

1. **Del 0 — Eksamenskart** (1 kapittel): eksamensform, vekting, temafrekvens-
   oversikt («dette testes, så ofte, så tungt»), lesestrategi frem mot eksamen.
   Dette kapitlet er studentens prioriteringsverktøy. Del 0 skal ha en kort
   **«Slik leser du denne boka»-boks (type `text` eller `tip`, ALDRI
   `definition` — påvirker flashcard-kvoten)** som forklarer karakter-/
   vurderingsskalaen, en kompakt liste over oppgave-/sjangerkodene (f.eks.
   sjanger A–N), og at typiske feil har et samlet register. Boksen skal
   eksplisitt ramme inn tunge symboler leseren vil møte senere («du trenger ikke
   forstå disse symbolene ennå — de forklares der de brukes»), slik at et første
   møte med heavy notasjon ikke skremmer. Del 0 skal også ha en
   **formel-minimum-side** (collapsible «Formlene du må kunne utenat — og
   resten kan du slå opp»): de ~5–8 uunngåelige formlene, hver med én ordlinje
   («multiplikatoren = 1 delt på lekkasjen»), + eksplisitt beskjed om at resten
   kan slås opp. Denne siden er også regnefagets «samlede oppslagskort»
   (jf. README «Leserkrav» — printbar ren tabell). I tillegg: Del 0-pakken
   fra README «Leserkrav» («Lite tid?»-boks m/gjøre- vs. lese-tider, kildenote
   for frekvens-empirien, prosedyre-/sjangerkort, deltidsrute, «lese mye,
   skrive lite»-boks).
2. **Del 1..N — Temadeler**: én del per hovedtema, ordnet etter faglig
   avhengighet (prerequisites), IKKE etter frekvens. Frekvensen styrer i stedet
   *omfanget*: «må beherskes perfekt»-temaer får 2–4 kapitler + eget
   drillkapittel; «bør kjenne til» får ett kompakt kapittel.
3. **Siste del — Eksamenstrening**: sjangerkapitler (ett per oppgavetype fra
   EKSAMENSANALYSE §3) + komplette øvingseksamener med løsningsforslag skrevet
   slik sensor vil se dem.

## Kapittel-DNA (teorikapittel)

Rekkefølgen under er obligatorisk; blokktypene er plattformens
(`text`/`definition`/`theorem`/`example`/`exercise`/`tip`/`warning`/`collapsible`):

1. `tip` **Eksamensvinkel** — hvor ofte/hvordan temaet testes, typisk vekting,
   hvilke oppgavesjangre det inngår i (fra skjelettets per-kapittel-DNA).
1b. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker
   (jf. Leserkrav i README). I tunge kapitler med stor tidsavstand til
   forkunnskapen (typisk siste deler) skal blokken VISE de 2–3 nøkkelformlene
   ferdig oppfrisket («Sist du var her» — jf. README), ikke bare lenke.
   `collapsible` **Symbol- og formelliste** forklarer
   ALLE symboler og formler brukt i delkapitlet (per delkapittel — ikke arv fra
   tidligere kapitler; unntak kun for helt symbolfrie kapitler) og plasseres
   SIST i kapitlet med åpningsnotisen «Oppslagsverk — alt her forklares
   underveis i kapitlet.» (studentpanel: en symbolvegg i døråpningen skremmer
   — vegrere hopper av før teksten starter).
2. `text` **Motivasjon** — kort: hvorfor modellen/verktøyet finnes, hvilket
   spørsmål den besvarer. Maks 2–3 avsnitt; dette er ikke et dannelsesfag.
3. `definition` / `theorem` — begreper og resultater i EMNETS NOTASJON (bruk
   notasjonen fra eksamenssettene, ikke lærebok-alternativer). Definition-
   blokker åpner med forklaringen i ORD; formelen kommer etter — aldri en
   ligning som første linje (studentpanel: vegrere hopper ellers over hele
   blokken, og dermed flashcard-stoffet).
4. `text` **Utledning med intuisjon** — utledninger som eksamen krever aktivt
   («kunne utlede») vises steg for steg med en «Intuisjon:»-linje i ord etter
   HVERT steg (ikke bare per utledning); resultater som bare skal *brukes*
   presenteres uten utledning (merk skillet — det står i EKSAMENSANALYSE §6).
   Symbolgrep leseren ikke har fra R1/R2-nivå (∂-notasjon, «differensiere»)
   introduseres eksplisitt ved første bruk eller omskrives (Δ/subtraksjon).
5. `example` × 2–4 — første eksempel enkelt, siste på EKSAMENSNIVÅ og modellert
   på en reell oppgavesjanger. Løsningen skrives slik en A-besvarelse ser ut
   (inkl. figur/graf-beskrivelse der sensor forventer figur).
6. `warning` **Typiske feil** — de konkrete feilene fra sensorveiledningene for
   dette temaet.
7. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels),
   2–4 eksamensklone (vanskelig, samme sjanger/vekt som reelle oppgaver, med
   nyskrevne tall/kontekst). Alle med `solution` + `hints` (første hint =
   formelen/første grep, aldri konklusjonen — jf. README «Hint på alle
   oppgaver»). Boka SAMLET skal i tillegg ha genuint krevende merkede oppgaver
   og en kald bank uten hint i eksamenstreningsdelen (jf. README
   «Difficulty-spredning + kald bank») — f.eks. parameterbetingelse-oppgaver,
   selvfinansieringsgrad, algebraisk løsning av hele modellen. Varier
   kalibreringene: samme tallsett gjenbrukt overalt gir autopilot.
8. `collapsible` **Repetisjonsoppgaver** — 4–6 korte oppgaver fra tidligere
   kapitler som dette kapitlet bygger på.

**Læringsløkke per metode (UFRAVIKELIG — jf. README «Leserkrav»).** Blokkene
3–7 over er IKKE tre samlede bolker (all teori, så alle eksempler, så alle
oppgaver nederst). De veksler i løkker gjennom kapitlet, én løkke per metode/
formel: metode eller formel (`definition`/`theorem` + evt. `text`-utledning) →
gjennomregnet eksempel på nettopp den metoden (`example`) → øvingsoppgave(r) på
samme metode (`exercise`), plassert INLINE i `content[]` rett etter eksempelet
(plattformen renderer oppgaver inline). Deretter neste metode, osv., til alt
stoffet i delkapitlet er dekket. `tip` Eksamensvinkel og `warning` Typiske feil
kan stå der de er mest relevante. Den store, stigende oppgavepuljen (blokk 7)
kan fortsatt samles til slutt som eksamensdrill — men grunnstoffet skal først
være gjennomarbeidet løkke for løkke.

**Full oppgavedekning — ingen usett teknikk (UFRAVIKELIG — jf. README).** En
regneoppgave får bare bruke formler, teoremer og teknikker som allerede er vist
— tidligere i SAMME kapittel (t.o.m. eksempelet rett foran) eller i et tidligere
kapittel referert i Forkunnskaper-blokken. Ingen oppgave skal kreve en metode
leseren ikke har møtt ennå. Sjekk dette eksplisitt ved bygging.

**Ingen uforklart sjargong — koder og fagtermer (UFRAVIKELIG — jf. README
«Leserkrav»).** Fagstoffet er allerede nybegynner-vennlig; det er METASPRÅKET
rundt eksamen som må ryddes. HVER oppgavekode (sjanger A–N o.l.), feilkode #N og
karakterbokstav forklares i klarspråk ved FØRSTE bruk, og skal ALDRI stå kald i
`competenceGoals`/læringsmål eller i aller første tekstboks. Det samme gjelder
tunge fagtermer som komparativ statikk, fortegnsubestemthet, IS-RR-PK-modellen,
Holden-notasjon og endogen/eksogen — skriv termen ut med en klarspråksforklaring
første gang. Eksamenskart-kapitlet (Del 0, orienteringsboksen over) rammer i
tillegg eksplisitt inn tunge symboler med «du trenger ikke forstå disse ennå».

## Figurkrav (UFRAVIKELIG — fra studentpanel bølge 1–3)

Fag der eksamen krever grafisk analyse (tegne/lese/skifte kurver i diagram)
SKAL ha statiske SVG-figurer: minst utgangslikevekt + hvert sjokk/skift som
drilles. Et «grafisk drill»-kapittel uten figur er FORBUDT — to paneldeltakere
var nær ved å forlate boka på nettopp dette. Prosabeskrivelsen beholdes som
forklaring TIL figuren, aldri i stedet for den.

- Filer: `public/images/textbook/<emne>/<navn>.svg`; wire som image-blokker
  (`{type:'image', src:'/images/textbook/<emne>/<fil>.svg', alt, caption}`)
  der analysen står. Gjenbruk samme `src` som referansefigur i drillkapitler
  («slik skal diagrammet ditt se ut — merk aksene»; ny id/caption).
- Stil: akser i `#6b7280`, kurver i mid-tone farger, norsk tekst, transparent
  bakgrunn (lesbar i både lys og mørk modus), viewBox ca. 480x360, tydelige
  akse-/kurveetiketter (f.eks. i, Y, π / IS, RR, PK) og likevektspunkter med
  stiplede hjelpelinjer til aksene. Valider XML før wiring.
- ETTER at nye figurer er skrevet: kjør `npx tsx scripts/upload-media-storage.ts`
  (bilder serveres fra Supabase Storage) — ellers 404 i prod.
- Lover en caption/tip en figur («figuren i kapittel X»), skal figuren faktisk
  finnes der det loves.

## Enhets- og konvensjonsvalg (fra studentpanel)

Måleenheter og konvensjoner (desimal vs. prosentpoeng, gap-definisjoner,
fortegnskonvensjoner, kalibrerte koeffisienter) deklareres ÉN gang (Del 0
eller ved første bruk). Hvert sted konvensjonen byttes varsles med en
`warning`-blokk («NB: to måleenheter i omløp — sjekk alltid hva oppgaven
bruker»), og tall-kalibrerte oppgaver sier eksplisitt i OPPGAVETEKSTEN hvilke
enheter koeffisientene er målt i og hvilken enhet svaret kommer i. Samme
størrelse skal ikke kalibreres ulikt i to kapitler uten at begge stedene
flagger det.

## Matematisk sannhetskontroll (UFRAVIKELIG — fra studentpanel bølge 4)

Fortegns-, entydighets- og «alltid mindre/større enn»-påstander (f.eks.
«multiplikatoren med skattefinansiering er alltid < 1») skal PARAMETERSJEKKES
NUMERISK (python3) i modellens FULLE parameterrom FØR de skrives — inkludert
alle ledd modellen faktisk har (bølge 4 fant en hel familie påstander som var
sanne uten akselerator, men falske med b₁>0, «bevist» sirkulært i teksten).

- Er påstanden bare betinget sann: skriv betingelsen eksplisitt («tm<1 hviss
  b₁<(1−c₁)(1−t)») og si når hvilken variant gjelder. Parameterbetingelser er
  A-stoff — «vis at påstanden gjelder uten akselerator, og finn betingelsen
  med» er en bedre oppgave enn en usann «vis at …».
- En «Vis at …»-oppgave der påstanden ikke holder ubetinget, KAN IKKE LØSES —
  det er verre enn en manglende oppgave.
- Fasiter etterregnes numerisk; talleksempler begge veier der en betingelse
  kan slå begge veier.
- «Formelt ubestemt» vs. utregnbart: velg ÉN linje per størrelse — i en lineær
  modell kan fortegnet ofte regnes ut; si det, og vis når intuisjon og
  regnestykke skiller lag. To selvrettingssteder skal aldri lande motsatt.

## Kapittel-DNA (drillkapittel — kun for «må beherskes perfekt»-temaer)

1. `tip` Eksamensvinkel: hvilke varianter av sjangeren som har forekommet.
2. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte for sjangeren
   (f.eks. «skift i modellen: 1) identifiser hvilken kurve, 2) retning,
   3) nytt likevektspunkt, 4) mekanismen i ord, 5) sammenlign»).
3. `example` **Gjennomregnet eksamenscase** med sensor-kommentarer: margnotater
   om hva som gir uttelling ved hvert steg.
4. `exercise` × 8–15 varianter av sjangeren, alle på eksamensnivå.

## Kapittel-DNA (øvingseksamen)

Komplett sett med eksamens vekting og varighet, nyskrevne oppgaver som speiler
temafordelingen i EKSAMENSANALYSE §2 (en «typisk» eksamen, ikke en uvanlig).
Løsningsforslag i eget `collapsible` per oppgave, skrevet som A-besvarelse,
med `tip`-notat om delpoeng/vekting.

## Skjelett-krav (hva SKJELETT.md må angi per kapittel)

- id, nummer, tittel, estimatedMinutes, prerequisites
- **Eksamensbelegg**: hvilke år/oppgaver temaet forekom (fra analysen), vekt,
  gjenganger-score, prioritetsklasse (perfekt/kunne/kjenne)
- **Innholdskontrakt**: definisjoner/teoremer som SKAL med (med notasjon),
  utledninger som kreves aktivt vs. kun bruk
- **Oppgavesjangre** kapitlet skal drille, med omskrevet mønstereksempel
- **Typiske feil** for temaet
- Antall quiz/flashcards kapitlet skal bidra med (slik at summen per emne ≥500/500)

## Kvalitet/omfang

- «Må beherskes perfekt»-tema: teorikapitler + drillkapittel, 15–25 oppgaver totalt.
- Emnet totalt: 20–35 kapitler, 2–4 øvingseksamener, ≥500 quiz, ≥500 flashcards,
  ≥4 prøver per temadel, studieguide (Del 0 fungerer som kjerne i denne).
- Språk: norsk bokmål; engelskspråklige emner beholder engelsk fagterminologi
  i parentes ved første forekomst.
