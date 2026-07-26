# WCAG 2.1 AA-revisjon — Skolesaga

Revisjon av kodebasen (`src/app/`, `src/components/`) mot WCAG 2.1 AA. Innholds-JSON i `src/lib/data/` er ikke revidert her (egne datakvalitetstiltak).

**Fundament som allerede er på plass:** SkipNav, VisuallyHidden, LiveRegion, useFocusTrap, useAnnounce (`src/components/accessibility/skip-nav.tsx`); zoom tillatt (`maximumScale: 5`); shadcn/Radix-primitiver er stort sett tilgjengelige; `focus:ring` finnes de fleste steder.

Legende: ✅ fikset · 🟡 delvis · ⬜ gjenstår

---

## Høy alvorlighet (systemisk)

### Skip-nav / landemerker (WCAG 1.3.1, 2.4.1)
- ✅ `id="navigation"` lagt på hovednavigasjonen (`main-nav.tsx`)
- ✅ `id="main-content"` lagt på alle `<main>` som manglet det (codemod, første `<main>` per fil)

### Ikon-only knapper uten tilgjengelig navn (WCAG 1.1.1, 4.1.2)
- ✅ YouTube-avspillingsknapp (`content-block-renderer.tsx`)
- ✅ Fjern-steg (`step-by-step-input.tsx`), lukk AI-tilbakemelding (`visual-math-input.tsx`, `canvas-drawing.tsx`)
- ✅ Fjern elev (`student-selector.tsx` ×2)
- ✅ Mobil meny-toggle (`table-of-contents.tsx`)
- ✅ Del/kopier (`hoderegning/challenge/[code]/page.tsx`)
- ✅ Tema-placeholder (`theme-toggle.tsx`)

### Skjemafeil ikke annonsert / inputs uten aria-invalid (WCAG 3.3.1)
- ✅ `login-form.tsx`, `signup-form.tsx`: feilboks `role="alert"` + `aria-invalid`/`aria-describedby`
- 🟡 `join/page.tsx`, `feedback-dialog.tsx`: gjenstår

### Tastatur (WCAG 2.1.1, 4.1.2)
- ✅ Flashcard-flipp: `<div onClick>` → tastaturtilgjengelig (`flashcard-client.tsx`)
- ✅ Egenutviklet modal `sme-review.tsx`: `role="dialog"`, `aria-modal`, Escape, fokusfelle, lukke-label
- 🟡 `exercise-progress.tsx` deloppgave-`<div>`, `create-assignment-dialog.tsx` rad-`<div>`: gjenstår

---

## Middels alvorlighet

- ✅ `aria-expanded` på disclosure-/dropdown-knapper (kompetansemål, fasit, bevis, video, kode, løsning, hint, fullførte lekser)
- ✅ `python-console.tsx` input: fokusindikator + `aria-label`
- 🟡 `<html lang>` dynamisk for nn/sme — **bevisst utsatt:** å lese malform-cookie i root-layout gjør HELE appen dynamisk (stor ytelse-/SEO-kostnad). `<html lang="nb">` beholdes som nettstedets standardspråk (UI er bokmål, korrekt per 3.1.1). Språkmerking av innholdsregion (3.1.2) er en fremtidig forbedring uten perf-kostnad.
- ✅ Manglende `<h1>` — **lukket 26. juli 2026** (se eget avsnitt under)
- ✅ Overskriftshopp h1→h3 på selvtest-sidene — **lukket 26. juli 2026**
- ✅ `join/page.tsx` + `feedback-dialog.tsx`: feilmelding `role="alert"` (+ aria-invalid/describedby
  begge steder), og kvitteringen i feedback-dialogen fikk `role="alert"` 26. juli — uten den ble
  innholdsbyttet i en allerede åpen dialog aldri annonsert
- ✅ `prefers-reduced-motion` + kontrast for muted-tekst (`globals.css`); 26. juli lukket også de to
  JS-drevne `scrollTo({behavior:'smooth'})`-kallene, som CSS-regelen ikke nådde (options-verdien
  vinner over `scroll-behavior`) — ny hjelper `scrollBehavior()` i `src/lib/utils.ts`
- 🟡 `create-assignment-dialog.tsx`: rad-`<div>` tastatur + `label htmlFor`

---

## Lav alvorlighet
- ✅ Math-illustrasjons-SVG: `role="img"` lagt på 59 SVG-er
- ✅ Brand-ikon-SVG i `provider-buttons.tsx`: `aria-hidden="true"`
- ✅ `lang="se"` på nordsamiske tekstfragmenter (sme-review)
- ✅ `aria-pressed` på svaralternativ-knapper — **fullført 26. juli 2026**: mønsteret fantes bare i
  `multiple-choice-exercise.tsx` og `sequential-quiz-exercise.tsx`; nå også i alle 12 øvrige
  svarflater (se eget avsnitt under)

---

## Automatisert verifisering (axe-core) — ✅ i CI
`scripts/a11y-check.mjs` kjører Playwright + axe-core (WCAG 2.1 AA) mot 11 ruter (hjem, bok,
trinn, kapittel, kapittel-quiz, quiz, ressurser, poengkalkulator, login, personvern,
tilgjengelighet). `.github/workflows/a11y.yml` kjører det ved hver PR/push og feiler ved brudd.
Kjør lokalt: `PORT=3100 npm run dev` så `npm run a11y`.

Funn fra skannene (alle rettet — **0 brudd på alle 11 ruter**):
- ✅ Kontrast KI-deklarasjon (`text-muted-foreground/70` → fjernet opasitet)
- ✅ Login-tabs: `TabsTrigger` uten `TabsContent` → ugyldig `aria-controls`, la formene i paneler
- ✅ Ressurser: hvit tekst på `bg-{farge}-600` (3.2–3.7:1) → `-700`
- ✅ Quiz: `text-green-600` (3.1:1) → `green-700`; progressbar fikk `aria-label`
- ✅ Poengkalkulator: slider-thumb + number-input fikk `aria-label` (Slider videresender nå til thumb)
- ✅ Kapittel: disabled prev/next ikon-knapper fikk `aria-label`

---

## Runde 2 — 26. juli 2026 (punkt 7 i `docs/juridisk-todo.md`)

Metode: hele rutesettet ble målt i nettleser (Playwright) før og etter, både på overskriftsstruktur
(`heading-order`, `page-has-heading-one`) og med axe-core mot WCAG 2.1 AA. Alle endringer er
verifisert i faktisk rendret DOM på prod-server, ikke bare i kildekoden.

### `<h1>` — alle sider har nå nøyaktig én (WCAG 1.3.1, 2.4.6)

Målingen fant 21 ruter uten `<h1>`. Tre årsaksmønstre:

1. **Bildevariant uten tekstlig tittel** — `bok/trinn/[grade]` og `bok/[courseId]` viser bare et
   hero-bilde når boka/trinnet har `image`/`coverImage`; `<h1>`-en lå i `else`-grenen. Fikset med
   `<h1 className="sr-only">` i bildegrenen.
2. **Skjermer helt uten overskrift** — selve quiz-/eksamens-/spillflatene (`quiz-client`,
   `gigaquiz-client`, `diagnostisk-client`, `eksamen-client`, `challenge/[code]/play`,
   `sme-review`, alle sju selvtester i testfasen) og `/login`. Fikset med `sr-only` `<h1>`.
3. **Feil nivå på den eneste overskriften** — retur-grener der en `<h2>` var sidens eneste
   overskrift (flashcards «Økt fullført», quiz «Quiz kommer snart», eksamen «Eksamensøkt fullført»,
   challenge «Ferdig!»/«Ga opp»). Hevet til `<h1>`; grenene er gjensidig utelukkende, så det blir
   aldri to.

`CardTitle` fikk `asChild` (Radix `Slot`) slik at sider der korttittelen ER sidetittelen kan rendre
den som ekte `<h1>` uten å miste kortstilene: `/profil`, `/endre-passord`, `/join`,
`/dashboard/admin/{feedback,users}`, IQ-testens resultatside. Verifisert at utfallet er pikselidentisk
(`font-semibold text-2xl`, 24 px / 600 — samme som `<div>`-en ga).

### Overskriftshierarki (WCAG 1.3.1)

- **Sju selvtest-landingssider** (personlighetstest, personlighetstyper, enneagram, laeringsstil,
  yrkesinteresser, iq-test, eq-test): hoppet h1→h3 kom fra tre info-kort. Hevet til `<h2>` med
  eksplisitt `text-2xl md:text-3xl` slik at typografien er uendret (målt: 30 px før og etter).
- **`/poengkalkulator`**: h1→h3 → seksjons-`<h3>` senket til `<h2>` (alle har eksplisitte
  `text-*`-klasser, så uendret utseende).
- **`/bok/[courseId]/eksamen`** og **`/bok/[courseId]/flashcards`**: samme mønster, samme fiks.

### `aria-pressed` på svaralternativ (WCAG 4.1.2)

Lagt på alle gjenstående svarflater: `standalone-quiz-client`, `quiz-client`, `gigaquiz-client`,
`diagnostisk-client`, `eksamen-client`, `iq-test/test` og de seks Likert-testene
(personlighetstest, personlighetstyper, enneagram, laeringsstil, yrkesinteresser, eq-test).

**Hvorfor `aria-pressed` og ikke `role="radio"`/`aria-checked`:** knappene ligger ikke i en
`radiogroup` og har ingen pilnavigasjon eller roving tabindex. `role="radio"` ville lovet en
tastaturmodell widgeten ikke har. `aria-pressed` beskriver det som faktisk skjer — en knapp som blir
stående i trykket tilstand — og er samme mønster som de to komponentene som allerede var riktige.
Verifisert i nettleser at verdien faktisk går `false → true` på valgt alternativ.

### `prefers-reduced-motion` (WCAG 2.3.3)

CSS-regelen i `globals.css` dekker CSS-animasjoner/-transisjoner (målt: 1e-05 s under
`prefers-reduced-motion: reduce`). Den nådde derimot ikke `scrollTo({ behavior: 'smooth' })` i
`python-console.tsx` og `python-input-runner.tsx` — en eksplisitt `behavior`-verdi overstyrer
`scroll-behavior` fra CSS. Ny hjelper `scrollBehavior()` i `src/lib/utils.ts` leser mediespørringen.

### Sidefunn rettet på veien

- `aria-progressbar-name` (alvorlig, 7 ruter): framdriftsindikatoren i alle selvtestene manglet
  tilgjengelig navn. Fikset med `aria-label`.
- `button-name` (kritisk): seksjonsfilteret på flashcards-sida (Radix `SelectTrigger`) hadde ikke
  tilgjengelig navn.
- Skip-nav: flere `<main>` i alternative retur-grener manglet `id="main-content"` (codemoden i
  runde 1 tok bare første `<main>` per fil). Rettet i de grenene som ble berørt av arbeidet over.

### Axe-resultat

| | Før | Etter |
|---|---|---|
| CI-rutene (`scripts/a11y-check.mjs`, 13 ruter) | 0 brudd | 0 brudd |
| 24 ekstra ruter (selvtester, flashcards, eksamen, gigaquiz, geogebra …) | 17 brudd | 9 brudd |

Ingen nye brudd innført. De 9 som står igjen er alle forhåndseksisterende og utenfor punkt 7 —
se under.

---

## Nye funn som gjenstår (ikke rettet 26. juli)

- ⬜ **Overskriftshopp i kapittelbrødteksten (WCAG 1.3.1) — størst gjenstående post.**
  `latex-renderer.tsx` mapper `#`→h2, `##`→h3, `###`→h4, `####`→h5. Sidens `<h1>` er
  kapitteltittelen, så innhold som starter på `##` gir h1→h3. Målt i `_all.json`:
  **10 218 av 11 243 kapitler med overskrifter starter på `##`** (989 starter på `#`, 36 på `###`).
  Fiksen må normalisere nivåene med KAPITTELETS laveste nivå som utgangspunkt — normalisering per
  tekstblokk ble prøvd og forkastet, fordi den flater ut ekte underkapitler (testet på
  `exphil03-1-1`: både `##` og `###` ble h2). Krever at nivåforskyvningen tres gjennom
  `content-block-renderer` → `LatexRenderer`. Merk at ren tag-endring er visuelt gratis:
  `@tailwindcss/typography` er ikke installert, `prose`-klassene er inerte, og alle
  størrelser/vekter settes med eksplisitte utility-klasser (målt før/etter: kun `tagName` endret seg).
- ⬜ **Flashcards** (`/bok/[courseId]/flashcards`), 4 axe-brudd:
  `aria-valid-attr-value` (kritisk) — modusvelgeren bruker Radix `Tabs` med `TabsTrigger` uten
  tilhørende `TabsContent`, så `aria-controls` peker på en id som ikke finnes (samme feilklasse som
  login-fanene i runde 1); `nested-interactive` (alvorlig) — kortet er en `role="button"`-`<div>`
  med interaktive vurderingsknapper inni; `color-contrast` (alvorlig) på
  `border-amber-300`/`border-green-300`-knappene.
- ⬜ **Kontrast**: `/quiz/gigaquiz` (`text-muted-foreground/60`) og `/geogebra`
  (`bg-emerald-400`, `text-amber-600` på kort-badges, `bg-emerald-500` med hvit tekst).
- ⬜ `src/app/dashboard/page.tsx` har ingen `<h1>`, men er en ren redirect-spinner uten varig
  innhold. Vurdert som ikke-avvik.

## Gjenstår utenfor koden
- ✅ Publisert tilgjengelighetserklæring (`/tilgjengelighet`, lenket i footer) — gjenstår: uustatus.no-registrering
- ✅ Automatisert a11y-testing (axe) i CI — gjenstår: utvide til innloggede ruter (dashboard) med testbruker
- ⬜ Manuell skjermleser-/tastaturtest av hovedflyt
