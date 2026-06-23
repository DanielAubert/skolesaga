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

- 🟡 `aria-expanded` på disclosure-/dropdown-knapper (competence-goals, exercise-answer-key, content-block collapsibles m.fl.)
- 🟡 `<html lang>` dynamisk for nn/sme (i dag hardkodet `nb`) — krever at root-layout leser malform-cookie (gjør layout dynamisk; vurderes)
- 🟡 Manglende `<h1>` på enkelte sider (`page.tsx`, `profil`, `join`, `bok`)
- 🟡 Overskriftshopp h1→h3 på selvtest-sidene (enneagram, eq-test, iq-test, laeringsstil, personlighetstest m.fl.)
- ✅ `python-console.tsx` input fokusindikator

---

## Lav alvorlighet
- ⬜ Math-illustrasjons-SVG: legg til `role="img"` (har allerede `aria-label`)
- ⬜ Brand-ikon-SVG i `provider-buttons.tsx`: `aria-hidden="true"`
- ⬜ `aria-pressed`/`role=radio` på svaralternativ-knapper (multiple-choice, sequential-quiz)
- ⬜ `lang="se"` på nordsamiske tekstfragmenter (sme-review)

---

## Gjenstår utenfor koden
- ⬜ Publisert tilgjengelighetserklæring (egen side + uustatus.no-registrering)
- ⬜ Automatisert a11y-testing (axe) i CI
- ⬜ Manuell skjermleser-/tastaturtest av hovedflyt
