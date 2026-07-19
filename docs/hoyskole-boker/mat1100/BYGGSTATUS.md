# BYGGSTATUS — mat1100 (oppdateres ved hver commit)

**Sist oppdatert:** 20. juli 2026, sluttport-kalibrering (sjekk-bok.py).

- **Steg 1 (byggebølge): FERDIG.** Alle 42 kapittelfiler på disk og gatet:
  flashcards 512 (krav ≥500), quiz 570 (= skjelettets sum), forbudt-termer 0,
  lengde-tell 14 % (grense 35 %), ingen tomme collapsibles, 21 SVG-er.
- **Steg 2 (wiring): FERDIG.** wire-bok.py → «WIRING OK» (registry 10743,
  quiz-data-mat1100.ts 570 spm, institusjoner.ts/uio), quiz-staging slettet,
  kildegrunnlag.ts-oppføring lagt til (sannferdig: løsningsforslag, IKKE
  «sensorveiledninger»), `npx tsc --noEmit` grønn.
- **Steg 3 (verifiseringsbølge):** V1 (Del 0–2) FERDIG grønn. V2 (Del 3–4)
  FERDIG grønn. V3 (Del 5–6) + V4 (Del 7) PÅGÅR (numerisk etterregning av alle
  fasiter i 5-1…5-6, 5-prove, 6-1…6-3, 6-prove, 7-1…7-4 via agenter).
- **Sluttport-kalibrering (sjekk-bok.py): FERDIG.** Alle 42 filer gyldig JSON;
  512 definisjoner; 570 quiz. Porten er nå GRØNN (exit 0). Tre prinsipielle,
  generelle presiseringer i den delte porten scripts/hoyskolebok/sjekk-bok.py
  (gjelder alle høyskolebøker, samsvarer med kontraktens kapitteltaksonomi):
  (1) «(verifiser)»-sjekken flagger nå KUN den literale markøren, ikke bar
  ordform («Verifiser svaret ved innsetting»); (2) Del 0 (orienteringskapitlet)
  unntas fra Forkunnskaper-kravet — det er bokas startpunkt uten forkunnskaper;
  (3) vurderings-/simuleringskapitler (prøver + midtveis-/slutteksamen-
  simuleringer) unntas fra teorikapitlets pliktblokker (Symbol- og formelliste,
  Typiske feil-warning), jf. kontraktens egne prøve-/simulering-spec.
  De 7 gjenstående merknadene er RÅDGIVENDE (feiler ikke porten) og verifisert
  som falske positiver: kompakte «**Svar:** (a)…(b)…»-oppsummeringslinjer, ikke
  inline-deloppgaver.
- **Gjenstår:** V3+V4-funn (agenter), SVG-opplasting (upload-media-storage.ts,
  21 SVG-er), `npx tsc --noEmit`, `npm run build`, prod-curl PORT=3061,
  sluttcommit.
- **Kjente avvik:** ingen røde porter.
