# DNA: Drøftingsfag (essay- og metodeemner)

Arketype for emner der eksamen er drøftingsessay: metodefag (SVMET1010),
sosiologi, sosialantropologi, filosofi/exphil, statsvitenskap, psykologi-
teoriemner. Kjennetegn: ingen fasit — sensor vurderer begrepspresisjon,
PENSUMFORANKRING (navngitte forfattere/verk), selvstendig drøfting og koherent
struktur. Boka må derfor levere tre ting eksamensrettet: (1) presise begreper
koblet til pensumbidrag, (2) drøftingsstruktur som håndverk, (3) modell-
besvarelser som viser karakternivåene.

## Bokens makrostruktur

1. **Del 0 — Eksamenskart + essayhåndverk** (2 kapitler): eksamensform,
   temafrekvens, oppgavesjangre; HVORDAN en drøftingsbesvarelse bygges
   (problemforståelse → begrepsavklaring MED pensumreferanse → strukturert
   drøfting med motargumenter → konklusjon som svarer på spørsmålet), og hva
   som skiller A/C/E ifølge sensorveiledningene. Del 0 skal ha en kort **«Slik
   leser du denne boka»-boks (type `text` eller `tip`, ALDRI `definition` —
   påvirker flashcard-kvoten)** som forklarer karakter-/vurderingsskalaen (og hva
   «C-stoff»/«A-markør» betyr), en kompakt liste over sjanger-/oppgavekodene
   (skrevet fullt ut), og at typiske feil har et samlet register.
2. **Del 1..N — Temadeler** etter analysens temafrekvens; omfang etter
   gjenganger-score.
3. **Siste del — Eksamenstrening**: sjangerkapitler (f.eks. «design en studie»,
   «gjør rede for og drøft», begrepsoppgaver) + modellbesvarelser på flere
   karakternivåer.

## Kapittel-DNA (temakapittel)

1. `tip` **Eksamensvinkel** — frekvens, sjangre temaet inngår i, typiske
   oppgaveformuleringer (omskrevet).
2. `text` **Temaet i fagets landskap** — hvilket problem det svarer på, hvor
   det står i faglige debatter.
3. `definition` **Kjernebegreper** — hvert begrep presist definert OG forankret:
   hvem (forfatter/verk fra pensum) bruker begrepet slik, og hvilke nyanser
   ulike pensumbidrag legger i det. Sensor belønner navngitt forankring —
   definisjoner uten avsender er C-stoff.
4. `text` **Posisjoner og spenninger** — der pensum rommer uenighet/dilemmaer:
   fremstill posisjonene ærlig og vis hva som står på spill. Dette er råstoffet
   for drøftingsdelen av en A-besvarelse.
5. `example` **Anvendelse** × 1–3 — temaet brukt på en konkret case
   (f.eks. et forskningsdesign, et etisk dilemma i felt), skrevet slik en god
   besvarelse ville gjort det, med eksplisitte pensumreferanser underveis.
6. `warning` **Typiske feil** — fra sensorveiledningene (f.eks. kvantitativ
   logikk i kvalitativ kontekst, sjekklistesvar uten begrunnelse, pensum-løs
   synsing, deskriptiv gjengivelse uten drøfting).
7. `exercise` × 4–8 — 2–3 begreps-/kontrollspørsmål, 1–2 kortdrøftinger
   (med disposisjonsforslag som løsning), 1–2 eksamenslike essayoppgaver
   (løsning = momentliste + disposisjon, ikke fullt essay).
8. `collapsible` **Pensumkart for kapitlet** — forfatter → verk → hvilke
   begreper/poenger de «eier» (flashcard-råstoff).

**Læringsløkke per begrep (UFRAVIKELIG — jf. README «Leserkrav»).** Blokkene
3–7 over er IKKE tre samlede bolker (alle begreper, så alle eksempler, så alle
oppgaver nederst). De veksler i løkker gjennom kapitlet, én løkke per begrep/
teoribit: begrep eller teori med pensumforankring (`definition` + evt. `text`
om posisjoner) → anvendt illustrasjon eller mini-case som viser begrepet i bruk
(`example`) → drøftings-/anvendelsesoppgave på samme begrep (`exercise`),
plassert INLINE i `content[]` rett etter eksempelet (plattformen renderer
oppgaver inline). Deretter neste begrep, osv., til alt stoffet i delkapitlet er
dekket. `tip` Eksamensvinkel og `warning` Typiske feil kan stå der de er mest
relevante.

**Full oppgavedekning — ingen usett teori (UFRAVIKELIG — jf. README).** En
drøftings-/anvendelsesoppgave får bare kreve begreper, teorier og posisjoner
som allerede er introdusert — tidligere i SAMME kapittel (t.o.m. eksempelet rett
foran) eller i et tidligere kapittel referert i Forkunnskaper-blokken. Ingen
oppgave skal forutsette et begrep leseren ikke har møtt ennå. Sjekk dette
eksplisitt ved bygging.

**Ingen uforklart sjargong — sjangerkoder og vurderingsakser (UFRAVIKELIG — jf.
README «Leserkrav»).** Fagstoffet er allerede nybegynner-vennlig; det er
METASPRÅKET rundt eksamen som må ryddes. Sjangerkodene (f.eks. RED = redegjørelse,
SIT = situasjonsanalyse, SAM = sammenlikning, ANV = anvendelse, HYB = hybrid, og
strukturkoder S1–S7) skrives ALLTID fullt ut i klarspråk ved FØRSTE bruk, og skal
aldri stå kald i `competenceGoals`/læringsmål eller i aller første tekstboks. Har
faget en samlet skala av vurderingsakser og/eller feilkoder (#N), skal disse ha
én samlet forklaring (i Del 0-orienteringsboksen og/eller sjangerkapitlet), ikke
strøs utover teksten uforklart. Bruker faget «utdrag a)–e)» / et «utdragslager»,
forklares dette tidlig (hva et utdrag er, hvordan a)–e) refererer til dem).
Del 0-orienteringsboksen (over) samler skala + kodeliste + feilregister — som
`text`/`tip`, ALDRI `definition`.

## Kapittel-DNA (sjangerkapittel)

Ett per oppgavesjanger fra EKSAMENSANALYSE §3:

1. `tip` Eksamensvinkel: sjangeren over årene.
2. `text` **Oppskrift** — trinn-for-trinn disponering av sjangeren, med
   tidsbudsjett for eksamenssituasjonen.
3. `example` **Gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor.
4. `exercise` × 3–6 nyskrevne oppgaver i sjangeren med momentliste-løsninger.

## Kapittel-DNA (modellbesvarelse)

1. Nyskrevet eksamensoppgave i reell sjanger.
2. `collapsible` **A-besvarelse** — full tekst, med margnotater («her: begrep +
   forankring», «her: motargument — dette løfter til A»).
3. `collapsible` **Kommentert C-besvarelse** — samme oppgave, korrekt men flat
   (gjengivelse uten drøfting, tynn forankring), med notater om gapet opp til A.
4. `tip` **Sensorblikket** — momentliste og vektlegging.

## Skjelett-krav (hva SKJELETT.md må angi per kapittel)

- id, nummer, tittel, estimatedMinutes, prerequisites
- **Eksamensbelegg**: år/oppgaver temaet forekom, sjangre, prioritetsklasse
- **Begrepskontrakt**: begreper som SKAL defineres, med pensumforankring
  (forfatter/verk) per begrep
- **Drøftingsakser**: spenningene/posisjonene kapitlet skal ruste studenten
  til å drøfte
- **Case-forslag** til anvendelseseksempler
- **Typiske feil** for temaet
- Quiz/flashcard-kvote (sum per emne ≥500/500; flashcards egner seg for
  begrep↔forfatter-koblinger)

## Kvalitet/omfang

- 15–30 kapitler; ≥3 modellbesvarelse-kapitler; ≥4 prøver per del;
  ≥500 quiz, ≥500 flashcards.
- Pensumforankring skal være EKTE (reelle forfattere/verk fra emnets pensum,
  fra analysen §6) — aldri oppdiktede referanser. Ved pensumskifte er
  begrepene stabile, forfatterkoblingene må revideres — skjelettet merker
  hvilke koblinger som er utgave-sensitive.
- Refererte synspunkter tilskrives riktig; direkte sitater unngås (opphavsrett).
