# DNA: Regnefag (kvantitative emner)

Arketype for emner der eksamen består av regne-, utlednings- og modelloppgaver
med entydige(re) fasitsvar: økonomiske modellfag (makro/mikro), matematikk,
statistikk, fysikk, økonometri, samt programmerings-/algoritmefag.
Kjennetegn: oppgavemønstre gjentas år etter år → boka bygges som målrettet drill
mot nettopp disse mønstrene.

## Bokens makrostruktur

1. **Del 0 — Eksamenskart** (1 kapittel): eksamensform, vekting, temafrekvens-
   oversikt («dette testes, så ofte, så tungt»), lesestrategi frem mot eksamen.
   Dette kapitlet er studentens prioriteringsverktøy.
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
2. `text` **Motivasjon** — kort: hvorfor modellen/verktøyet finnes, hvilket
   spørsmål den besvarer. Maks 2–3 avsnitt; dette er ikke et dannelsesfag.
3. `definition` / `theorem` — begreper og resultater i EMNETS NOTASJON (bruk
   notasjonen fra eksamenssettene, ikke lærebok-alternativer).
4. `text` **Utledning med intuisjon** — utledninger som eksamen krever aktivt
   («kunne utlede») vises steg for steg med intuisjonsforklaring per steg;
   resultater som bare skal *brukes* presenteres uten utledning (merk skillet —
   det står i EKSAMENSANALYSE §6).
5. `example` × 2–4 — første eksempel enkelt, siste på EKSAMENSNIVÅ og modellert
   på en reell oppgavesjanger. Løsningen skrives slik en A-besvarelse ser ut
   (inkl. figur/graf-beskrivelse der sensor forventer figur).
6. `warning` **Typiske feil** — de konkrete feilene fra sensorveiledningene for
   dette temaet.
7. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels),
   2–4 eksamensklone (vanskelig, samme sjanger/vekt som reelle oppgaver, med
   nyskrevne tall/kontekst). Alle med `solution` + `hints`.
8. `collapsible` **Repetisjonsoppgaver** — 4–6 korte oppgaver fra tidligere
   kapitler som dette kapitlet bygger på.

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
