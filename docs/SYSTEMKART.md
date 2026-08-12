# Systemkart: hva finnes hvor, og hvordan alt gjenskapes

Skrevet 11. august 2026. Gjelder **begge** prosjektene — `Skolesaga` og
`eksamenssett` — som deler ett Supabase-prosjekt.

Formålet er å kunne svare på ett spørsmål under press: *hvis dette forsvinner,
hva må jeg ha for å bygge det opp igjen?*

---

## Det viktigste skillet: kilde mot avledet

Mesteparten av det som ligger på disken kan gjenskapes fra noe annet. Bare et
lite kjerneutvalg er uerstattelig. Å vite hvilket er forskjellen mellom en
ettermiddags gjenoppbygging og et tapt år.

### KILDE — kan ikke gjenskapes

| hva | hvor | størrelse | kopier |
|---|---|---|---|
| Kildekode + kapitteldata + quiz | git → GitHub | — | GitHub + lokal |
| Mediefiler (lyd, bilder) | Supabase `media` | 2,4 GB | Storage + iCloud |
| eksamenssetts PDF-er og løsninger | git → GitHub | 775 MB | GitHub + lokal |
| Eksamensarkivet (råmateriale) | `~/Desktop/Eksamner` | 8,4 GB | iCloud (Skrivebord-synk) |
| `content_data` (Postgres) | Supabase | 41 MB | daglig dump → `db-backups`, 14 dagers oppbevaring |
| **Brukere, kjøp, abonnement** | **Supabase** | — | **⚠ ingen dump — se nedenfor** |
| **Hemmeligheter (`.env.local`)** | **kun lokalt** | — | **⚠ se nedenfor** |

### AVLEDET — regenereres med én kommando

| hva | hvordan | merk |
|---|---|---|
| `chapters/_all.json` (222 MB) | `npm run prebuild` | ikke i git, med vilje |
| `chapters/_all.nn.json` (137 MB) | `npm run prebuild` | lastes også opp til `chapter-data` |
| `_definition-counts.json`, `_quiz-counts.json` | `npm run prebuild` | i git for byggetid |
| WebP-utgaver av bilder | `cwebp` fra originalene | originalene ligger i `media` |
| `.next/`, `node_modules/` | `npm install && npm run build` | — |

⚠ **`_all.json` er 222 MB og ligger bevisst utenfor git.** Den regenereres av
`scripts/combine-chapters.js` i `prebuild`. Ligger den i en funksjonsbundel,
sprenger Vercels 250 MB-grense — se merknaden i `next.config.ts`.

---

## ⚠ Det ene reelle hullet: hemmelighetene

`.env.local` er **ikke i git og ikke i noen backup**. Den inneholder blant annet
`SUPABASE_SERVICE_ROLE_KEY`, `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_SECRET`,
`ANTHROPIC_API_KEY` og `GEMINI_API_KEY`.

Dette har allerede skjedd én gang: `vercel link` overskrev fila, og
ELEVENLABS-, GEMINI- og SUPABASE_ACCESS_TOKEN-nøklene gikk tapt.

**Hva som kan hentes tilbake, og hvordan:**

| nøkkel | gjenopprettes fra |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL`, `*_ANON_KEY`, `SERVICE_ROLE_KEY` | Supabase-dashbordet → Project Settings → API |
| `GOOGLE_CLIENT_ID` / `_SECRET` | Google Cloud Console → Credentials |
| `ANTHROPIC_API_KEY`, `GEMINI_API_KEY` | nye nøkler må lages; de gamle kan ikke leses ut |
| `NEXTAUTH_SECRET` | ⚠ mistes den, blir alle innloggede sesjoner ugyldige |
| **alle sammen** | **Vercel → Project → Settings → Environment Variables** |

**Vercel er i praksis backupen for hemmelighetene.** Produksjonsvariablene ligger
der, og de kan leses ut med `vercel env pull`. Det forutsetter at
Vercel-kontoen er intakt.

⚠ **Legg aldri `.env.local` i git.** Vil du ha en kopi utenfor Vercel, hører den
hjemme i en passordhvelv, ikke i iCloud eller på disk.

---

## Gjenoppbygging fra bunnen

Antar ny maskin, ingenting lokalt.

```bash
# 1. Kode og innhold
git clone git@github-danielaubert:DanielAubert/skolesaga.git
git clone https://github.com/DanielAubert/eksamenssett.git
#    ⚠ eksamenssett bruker HTTPS-remote. Workflow-filer kan IKKE pushes dit
#      (OAuth-tokenet mangler `workflow`-scope) — bruk SSH for dem:
#      git push git@github-danielaubert:DanielAubert/eksamenssett.git main

# 2. Hemmeligheter
cd skolesaga && npx vercel link && npx vercel env pull .env.local

# 3. Avhengigheter
npm install

# 4. Mediefiler — velg én kilde
#    a) fra iCloud (raskest, har også originalene i full oppløsning)
cp -R ~/Library/Mobile\ Documents/com~apple~CloudDocs/Desktop/Skolesaga-mediebackup/speil/{audio,images} public/
#    b) eller fra Supabase Storage (samme innhold + 246 filer slettet lokalt)
#       last ned bucket «media» → public/

# 5. Bygg (regenererer _all.json og laster opp chapter-data)
npm run build

# 6. Kontroller at ingenting mangler
npx tsx scripts/backup-media.ts --verifiser-storage
```

**Databasen:** `content_data` gjenopprettes fra siste dump i `db-backups`
(14 dagers oppbevaring, skrives av eksamenssetts daglige GitHub Action).

⚠ **Brukertabellene er IKKE dekket av den jobben.** `users`,
`unlocked_courses`, `user_credits`, `teacher_subscriptions`, `quiz_results` og
`class_memberships` finnes bare i Supabase. Går prosjektet tapt, går kundenes
kjøp og fremdrift med. Supabase tar egne PITR-/dagsbackuper på Pro, men de
ligger hos samme leverandør. En egen dump av brukertabellene til iCloud eller
GitHub ville lukket dette — det er den største gjenstående risikoen i kartet.

---

## Hvor de fire kopiene ligger

| lag | innhold | dekker |
|---|---|---|
| **GitHub** | all kode, kapitteldata, quiz, eksamenssetts PDF-er | tapt maskin, feilredigering (via historikk) |
| **Supabase Storage** | mediefiler, append-only (sletter aldri) | tapt maskin, lokal sletting |
| **iCloud Drive** | speil + daterte øyeblikksbilder av media | tapt maskin, tapt Supabase-konto |
| **lokal disk** | arbeidskopi | rask tilgang |

Ingen enkelt hendelse tar to av dem samtidig. Supabase og iCloud er uavhengige
leverandører, og GitHub er en tredje.

---

## Systemet som holder det ved like

`scripts/upload-media-storage.ts` er **det obligatoriske steget** for alt nytt
medieinnhold, og gjør tre ting i én operasjon:

1. **Vektvakt** — nekter å laste opp bilder over 500 KB (SVG 200 KB) og
   avslutter med exit 1. Bakgrunnen er at forsiden i august 2026 lastet 45,4 MB
   fordi sidene bruker rå `<img>` med `eslint-disable`, som kobler ut Next.js'
   bildeoptimalisering. Overstyres med `--tillat-tunge`.
2. **Opplasting** til `media` med cache-headere (lyd 30 dager, bilder 7 dager).
3. **Backup** via `scripts/backup-media.ts` — kjøres til slutt, og **før**
   vektvakten avslutter, slik at et blokkert bilde likevel er sikret.

```bash
npx tsx scripts/backup-media.ts                      # speil (rsync --delete)
npx tsx scripts/backup-media.ts --snapshot           # + datert tar.gz, beholder 2
npx tsx scripts/backup-media.ts --snapshot --snapshot-lyd
npx tsx scripts/backup-media.ts --verifiser-storage  # er Storage komplett?
```

⚠ **Speilet bruker `--delete`.** En fil som forsvinner lokalt, forsvinner fra
speilet ved neste kjøring. Mot uhellssletting hjelper bare øyeblikksbildene —
og Storage, som aldri sletter.

---

## Fallgruver som har kostet tid før

- **`du` lyver om backupstørrelsen.** Speilet i iCloud viste 1,5 GB mot 2,4 GB
  lokalt, og så ut som en halv backup. Filantallet var identisk (2 626), og
  logisk størrelse målt med `stat -f%z` stemte eksakt: 1 767 MB lyd og 735 MB
  bilder. `du` teller diskblokker, og iCloud lagrer komprimert. **Mål logisk
  størrelse, ikke diskbruk, når du kontrollerer en backup.**

- **`StartInterval` i launchd teller bare mens maskinen er våken.** Med 818
  sove-/vekkehendelser gikk brukerdata-backupen et helt døgn uten å kjøre — mens
  `launchctl list` viste den som lastet med exit 0. Byttet til
  `StartCalendarInterval`, som tar igjen en tapt kjøring ved oppvåkning.

- **En plist uten `</plist>` avvises stille.** `launchctl load` svarte bare
  «Input/output error», og den gamle konfigurasjonen ble stående. `plutil -lint`
  sier hva som er galt; kjør den alltid etter å ha skrevet en plist.

- **En backup-jobb som feiler stille.** Den daglige dumpen lyktes én gang —
  26. juli, da bucketen ble opprettet — og feilet så hver natt i 16 dager uten
  at noe varslet. Årsaken: Supabase svarer HTTP 400 når bucketen finnes fra før,
  men skriver `"statusCode":"409"` i brødteksten, og `case`-grenen matchet bare
  på HTTP-koden. Rettet 11. august 2026. **Sjekk `gh run list` av og til** — en
  rød jobb ingen ser på, er verre enn ingen jobb.

- **`_all.json` i en funksjonsbundel** sprengte Vercels 250 MB-grense og
  blokkerte alle deployer i tre dager. `next.config.ts` har merknaden.
- **Prod-curl mot gammel server:** en `next start` fra forrige bygg svarer 200
  på gamle ruter og 404 på nye. Drep alltid serveren før verifisering.
- **Nynorsk-sidecar:** rører du et bilde eller en sti i `chapters/`, må
  `chapters/nn/` endres likt — ellers får nynorsklesere 404.
- **Delt arbeidstre:** flere økter redigerer samtidig. Stage kun egne filer, og
  bruk `git commit --no-verify` (lint-staged sveiper ellers inn andres arbeid).
- **Delt Supabase:** `users`-tabellen er felles for begge tjenestene. Sletting
  av en bruker rammer kjøp og abonnement i eksamenssett òg.
