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
- 🟡 Manglende `<h1>` på enkelte sider (`page.tsx`, `profil`, `join`, `bok`)
- 🟡 Overskriftshopp h1→h3 på selvtest-sidene (enneagram, eq-test, iq-test, laeringsstil, personlighetstest m.fl.)
- ✅ `join/page.tsx` + `feedback-dialog.tsx`: feilmelding `role="alert"` (+ aria-invalid/describedby i feedback)
- ✅ `prefers-reduced-motion` + kontrast for muted-tekst (fantes allerede i `globals.css`)
- 🟡 `create-assignment-dialog.tsx`: rad-`<div>` tastatur + `label htmlFor`

---

## Lav alvorlighet
- ✅ Math-illustrasjons-SVG: `role="img"` lagt på 59 SVG-er
- ✅ Brand-ikon-SVG i `provider-buttons.tsx`: `aria-hidden="true"`
- ✅ `lang="se"` på nordsamiske tekstfragmenter (sme-review)
- ✅ `aria-pressed` på svaralternativ-knapper (multiple-choice, sequential-quiz)

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

## Gjenstår utenfor koden
- ✅ Publisert tilgjengelighetserklæring (`/tilgjengelighet`, lenket i footer) — gjenstår: uustatus.no-registrering
- ✅ Automatisert a11y-testing (axe) i CI — gjenstår: utvide til innloggede ruter (dashboard) med testbruker
- ⬜ Manuell skjermleser-/tastaturtest av hovedflyt
