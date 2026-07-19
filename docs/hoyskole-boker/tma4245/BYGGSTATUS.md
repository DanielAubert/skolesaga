# BYGGSTATUS — TMA4245 (oppdateres ved hver commit)

**Sist oppdatert:** 20. juli 2026, etter Steg 4 sluttport. BOKA FERDIG (ikke pushet/merget).

- Steg 1 FERDIG: alle 44 kapittelfiler + 540 quiz + 524 flashcard-defs på disk, kvoter = skjelettet (overskyting 8-1/8-2/8-3: 22/21/16 defs, tillatt).
- Steg 2 FERDIG: wire-bok.py «WIRING OK» (registry +44, quiz-data-tma4245.ts, institusjoner.ts ntnu, textbook-courses), kildegrunnlag.ts-oppføring (ærlig: løsningsforslag, IKKE sensorveiledninger), quiz-staging slettet, tsc ren.
- Steg 3 FERDIG (committet): verifikator Del 0–5 (commit 066786c7, 5 kirurgiske fiks), Del 6–8 (commit 3af56937, 4 fiks: unicode-artefakt+resonnerings-lekkasje 7-1, dansk form 7-3, løkke-nummerering 6-1; 184/184 tall etterregnet), Del 9–10 (commit 575be46e, 6 lenke-innsettinger; all Python re-kjørt, sjangerdekning A–O bekreftet). HELE verifikatorrunden committet.
- Steg 4 FERDIG (sluttport, denne commiten):
  - sjekk-bok.py-port: **BOKPORT OK** — 44 filer, 524 def, 540 quiz, 0 issues, 0 rådgivende merknader. Nyanserte forbudt-grep: unicode χ²/Σ/√ i `$...$` = 0; `\lambda e^{-\lambda x}` som hovedform = 0 (treff i 2-2 er Poisson-punktsannsyn, 2-3 er tillatt alias); meta-fasit «ville ha drøftet» = 0.
  - Studentpanel-port: «Prioritet: perfekt» = 0; ingen «alle-a»-fasitmønster i prøver; 0 tomme collapsible-`content`; Del 0 har «Lite tid?»-boks + kildenote + prosedyrekort; 208 exercises alle med ikke-tomme hints; vanskelighetsfordeling 50 lett / 93 middels / 65 vanskelig; 0 tomme hints.
  - SVG-opplasting: 10 SVG-er (9 refererte + residual-qq) lastet opp til Supabase Storage `media`-bøtta med upsert; alle 9 refererte verifisert **200 image/svg+xml** via public-URL. Kjent avvik (d) LØST.
  - `npx tsc --noEmit`: ren (exit 0).
  - `npm run build`: **✓ Compiled successfully** (17.1s), «Kombinerte 10745 kapitler», 275/275 statiske sider, exit 0.
  - Prod-curl (`PORT=3062 npm run start`): `/bok/trinn/hoyere/ntnu` 200 (viser TMA4245/Statistikk), `/bok/tma4245` 200, teori `/bok/tma4245/tma4245-1-1` 200 (Forkunnskaper + Symbol- og formelliste + inline Oppgave/Fasit/Løsning = læringsløkke bekreftet), `/tma4245-1-prove` 200, oppgave/trening-exerciseruter 200, `/quiz/tma4245-1-1` 200, `/bok/tma4245/flashcards` 200. Server stoppet.
- GJENSTÅR: kun brukers vurdering av push/merge (byggeleder pusher/merger IKKE).
- KJENTE AKSEPTERTE AVVIK: (a) «en medstudent påstår»-ramme i kritikk-/felleoppgaver Del 0–2 — akseptert (kontraktens forbud gjelder teorianker-eksempler); (b) 5-prove bruker (1)(2)(3)(4)-flervalg vs (a)(b)(c)(d) ellers — kosmetisk, står; (c) 9.D delta-vs-simulering ~6 %-avvik er bevisst fagpoeng, dokumentert i fasit.
