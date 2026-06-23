# Arbeidsliste: Skolesaga som lærebok i norske skoler

Status-spor for å gjøre bøkene brukbare som læremidler i norsk skole. Oppdateres etter hvert som ting fullføres.

**Bakgrunn:** Det finnes ingen statlig godkjenningsordning (avskaffet 2000). Skoleeier velger selv. Fire bindende lovkrav + praktiske/tillitsmessige krav.

Legende: ✅ ferdig · 🟡 påbegynt · ⬜ ikke startet · 🔒 krever ekstern part (jurist/Sikt/leverandør)

---

## 1. Målform / parallellitetskrav (LOVKRAV) — ✅
- ✅ Bokmål + nynorsk komplett (kapitler, quiz, chapterMeta), gratis = samme pris
- ⬜ Sluttverifisering: alle surfacede ruter har faktisk nynorsk (ikke bare datalaget)

## 2. Universell utforming WCAG 2.1 AA (LOVKRAV) — 🟡 STORE FREMSKRITT
- 🟡 Kodebase-revisjon mot WCAG 2.1 AA (se `docs/wcag-revisjon.md`)
  - [x] Skip-nav-mål + landemerker (id på nav + 80 main-elementer)
  - [x] Tastaturnavigasjon: flashcard-flipp, deloppgaver, modal-fokusfelle, fokusringer
  - [x] Tekstalternativ: ikon-knapper navngitt, role="img" på 59 illustrasjoner, aria-hidden på brand-ikoner
  - [x] Skjermleser: aria-expanded på collapsibles, dialog-roller
  - [x] Skjemaer: role=alert + aria-invalid på innlogging, label-kobling i sme-review
  - [ ] Fargekontrast AA (4.5:1 tekst / 3:1 UI) — krever visuell/automatisert sjekk (axe)
  - [ ] Resterende: h1 på enkelte sider, overskriftshierarki selvtest-sider, aria-pressed på svaralternativ, join/feedback role=alert, create-assignment-rader
  - [ ] `lang` på innholdsregion for nn/sme (3.1.2) — bevisst utsatt (perf), se wcag-revisjon.md
  - [ ] Bevegelse/animasjon: respektér `prefers-reduced-motion`
- [x] Publisert **tilgjengelighetserklæring** (`/tilgjengelighet`) — gjenstår: uustatus.no-registrering
- [ ] Automatisert a11y-testing i CI (f.eks. axe)

## 3. Personvern / GDPR (LOVKRAV) — 🟡
- ✅ Personvernerklæring rettet (reflekterer serverside-behandling)
- ✅ Feide-dataminimering (`groups`-scope fjernet)
- ✅ EØS-lagring (Supabase Stockholm) + Vercel-region pinnet til EØS
- ✅ Databehandleravtale-utkast (`docs/databehandleravtale-utkast.md`)
- ✅ DPIA-grunnlag (`docs/dpia-grunnlag.md`)
- 🔒 Juridisk gjennomgang av DPA + DPIA (fyll ut frister/ansvar)
- 🔒 Innhent SCC + SOC 2/ISO 27001 fra Supabase og Vercel
- [ ] Bekreft hvilket Supabase-prosjekt som er produksjon (eu-north-1 vs eu-central-1)
- [ ] Verifiser at Vercel faktisk deployer til arn1 etter neste deploy
- [ ] Slettefunksjon for konto (selvbetjent) + dokumentert sletterutine

## 4. LK20-samsvar (LOVKRAV) — ✅
- ✅ Innhold bygget rundt LK20-kompetansemål
- [ ] Vedlikeholdsrutine ved læreplanendringer

## 5. Markedstilgang (PRAKTISK) — 🟡
- ✅ Feide-integrasjon teknisk på plass (Dataporten OIDC)
- 🔒 Formell Feide-tjenesteavtale via Sikt (kundeportal, dataminimering godkjent)
- [ ] Avklar innkjøps-/anskaffelsesmodell mot kommuner
- [ ] Læringsanalyse: vurder ekstra personvernkrav for lærer-dashboard

## 6. Tillit / AI-innhold (IKKE LOVKRAV, men avgjørende for adopsjon) — ⬜
- [ ] Transparent merking av AI-generert innhold (AiDisclosure-komponent)
- [ ] Kvalitetssikrings-/fagfellevurderingsprosess (minst stikkprøve per fag)
- [ ] Dokumentert faktasjekk-prosess

---

## Rekkefølge jeg jobber i (autonomt)
1. **WCAG 2.1 AA-revisjon** (lovkrav, kodbart) → `docs/wcag-revisjon.md`
2. **Tilgjengelighetserklæring**-side
3. **AI-transparens-merking** (tillit)
4. Småfikser fra personvern-sporet (kontosletting o.l.)

Det som er 🔒 (jurist, Sikt, leverandørsertifiseringer) kan ikke jeg sluttføre — det venter på deg/ekstern part.
