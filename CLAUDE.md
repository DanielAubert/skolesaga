# CLAUDE.md — Skolesaga

Dette repoet (Skolesaga) arver instruksjonene fra `../CLAUDE.md` (eksamenssett).
Reglene under gjelder spesifikt for Skolesaga og OVERSTYRER ved konflikt.


## Aldri stoff som er for avansert for faget (Daniel 24.10.2026, regel)

«Det skal ikke være stoff som er for avansert for faget i noe fag på skolesaga. Regel». Hvert kapittel holder seg
innenfor gjeldende læreplan for faget og trinnet (bekreft planen på data.udir.no, jf. ../CLAUDE.md). Stoff fra et
høyere trinn (Kjemi 2 i Kjemi 1, Fysikk 2 i Fysikk 1, R2 i R1, universitetsstoff i VGS o.l.) tas ut eller flyttes til
riktig bok — det merkes ikke bare som «utvidet». Gjelder tekst, eksempler, oppgaver, figurer og videoer, og sjekkes ved
hver ny eller endret seksjon. Grensetilfeller legges fram for Daniel.

**Skjerpet 23.11.2026 (Daniel, ordrett: «Alt som ikke er i lære planen for det aktuelle året eller tidligere år skal ut av bøkene
(regel).»)** — etter at kontrollen av klassekapitlene fant abc-formelen og diskriminanten i Matematikk 10 (ikke i MAT01-06 for
10. trinn), elektronegativitet i Naturfag 10 og binomialkoeffisienter i Matematikk 9. Målestokken er GJELDENDE læreplan for bokas
trinn og trinnene før (på trinn uten egne mål: neste måltrinn i planen, f.eks. 8. og 9. trinn mot målene etter 10. — da gjelder
planens progresjon og Udirs støtte, og tvil legges fram). Stoff som bare hører til et senere trinn eller et annet fag, TAS UT av
fagtekst, fortelling, eksempler, oppgaver, quiz, kort og figurer i begge målformer, eller flyttes til riktig bok hvis den mangler
det. Ikke «fordypning», ikke «for de som vil ha mer». Før noe tas ut: sjekk eksamenssettene for trinnet (er det gitt på eksamen,
er det ikke utenfor — legg det fram). Har en oppgave som tas ut film, meldes det. Mål-linjer (`competenceGoals`) skal være ordrett
fra gjeldende plan.

## All ny tekst går gjennom æøå-porten (Daniel 6.11.2026)

«sveip skolesaga og legg inn samme safegaurde der også» (etter «Jeg føler at vi burde ha en automatisk æøå sjekk hver gang
det blir skrevet nytt materialet»). Sveipen 6.11 rettet 70 633 strippede/feilinnsatte æøå i 2504 kapittel- og quizfiler
(`../fremdrift/aeoa-sveip-0611/skolesaga/`). Portene, som i eksamenssett:
1. `scripts/aeoa/aeoa-vakt.mjs` (PostToolUse i `.claude/settings.json`, også underagenter) melder «pa», «a» for «å»,
   «okonomi», «metøde» o.l. i ny tekst i .json/.ts — rett tegnene straks.
2. Pre-commit (lint-staged) og CI (`.github/workflows/aeoa.yml`) feller ordformene i `scripts/aeoa/kjente-feil.json` i
   `src/lib/data` (kode, matte, slugs og taksonomifelt røres ikke; nordsamisk `sme/` er utenfor).
3. Skript som genererer kapitler: kjør `python3 scripts/aeoa/sjekk.py <fil>` på resultatet før commit.
Riktige ord som flagges (navn, nynorsk, sitat i eldre rettskrivning) føres i `scripts/aeoa/kjente-riktige.json`, eller per fil
i `unntak-filer.json`. Eldre rettskrivning i sitater («aa» hos Wergeland, Aasen, Vinje) skal stå som i originalen.

## Figurer: grafmotoren er standard (5.9.26, Daniels vedtak)

Alle figurer til Skolesaga (lærebok, oppgaver, forelesninger, videoer) lages
med grafmotoren i `~/Documents/losningsfilmer-arbeid/grafmotor_losning.py` —
samme motor og samme dobbel-audit-protokoll (`FIGURAUDIT-PROTOKOLL.md`) som
eksamenssett-løsningene. Aldri hånd-SVG for noe motoren dekker.

## ⚠️ DELT SUPABASE-DATABASE MED EKSAMENSSETT.NO

Skolesaga og eksamenssett.no (kodebasen i foreldremappa `../`) deler ETT
Supabase-prosjekt. Endringer i databasen her kan ødelegge eksamenssett.no i
produksjon. Disse reglene er absolutte:

### Delte tabeller (brukes av BEGGE apper — per juli 2026)

`users`, `classes`, `class_memberships`, `organizations`, `quiz_results`,
`challenges`, `challenge_players`, `geogebra_progress`

Regenerer lista ved behov:
```bash
grep -rhoE "\.from\(['\"][a-z_]+['\"]\)" src ../src --include='*.ts' --include='*.tsx' | sort | uniq
```

### Migrasjonsregler (via Supabase Management API)

1. **Kun additive endringer**: `CREATE TABLE IF NOT EXISTS`,
   `ADD COLUMN IF NOT EXISTS`. ALDRI `DROP`, `RENAME`, `ALTER TYPE` eller
   endring av constraints på eksisterende tabeller/kolonner.
2. **Nye kolonner på delte tabeller** MÅ ha `DEFAULT` eller være nullable —
   eksamenssett.no gjør egne INSERT/UPDATE mot `users` m.fl. og kjenner ikke
   nye kolonner.
3. **Før enhver endring i en delt tabell**: grep BEGGE kodebaser
   (`src/` her og `../src/`) etter tabellnavnet, og kjør `git -C .. pull`
   først — kodebasene oppdateres fra flere maskiner.
4. **Nye tabeller**: sjekk navnekollisjon i begge kodebaser og i
   `information_schema.tables` før `CREATE`. Slå på RLS
   (`ENABLE ROW LEVEL SECURITY`) på alle nye tabeller.
5. **RLS-policyer**: eksamenssett.no eier egne policyer
   (`../supabase/migrations/`). Ikke endre eksisterende policyer herfra.
6. **API-nøkler**: ALDRI slett, roter eller deaktiver nøkler i
   Supabase-prosjektet — begge apper (og begge produksjonsmiljøer på Vercel)
   deler dem. Legacy-nøklene (`eyJ...`) er deaktivert; nye nøkler er
   `sb_secret_*` / `sb_publishable_*`.
7. **Destruktiv SQL**: aldri `DELETE`/`UPDATE` uten presis `WHERE` mot delte
   tabeller. Testbrukere skal ha `@example.com`-adresser og slettes (både
   `users`-rad og Auth-bruker) etter test.
8. **Sletting av brukere**: `users`-tabellen er felles konto for BEGGE
   tjenester. Sletting (admin-panelet eller GDPR-sletting i
   `/api/user/data`) fjerner brukeren også fra eksamenssett.no — inkludert
   kjøp/abonnement der (`unlocked_courses`, `user_credits`,
   `teacher_subscriptions` m.m.). Vær sikker på at det er riktig bruker.
9. **Dokumenter** alle skjemaendringer i `docs/database-schema.md`.

## Verifisering

- Kjør alltid `npm run build` (og `npx tsc --noEmit`) før noe erklæres ferdig.
- Verifiser nye API-ruter/flyter ende-til-ende mot lokal prod-server
  (`PORT=3057 npm run start` + curl) — ikke bare at koden kompilerer.
