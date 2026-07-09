# CLAUDE.md — Skolesaga

Dette repoet (Skolesaga) arver instruksjonene fra `../CLAUDE.md` (eksamenssett).
Reglene under gjelder spesifikt for Skolesaga og OVERSTYRER ved konflikt.

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
