# Arbeidsliste: Skolesaga som lærebok i norske skoler

Status-spor for å gjøre bøkene brukbare som læremidler i norsk skole. Oppdateres etter hvert som ting fullføres.

**Bakgrunn:** Det finnes ingen statlig godkjenningsordning (avskaffet 2000). Skoleeier velger selv. Fire bindende lovkrav + praktiske/tillitsmessige krav.

Legende: ✅ ferdig · 🟡 påbegynt · ⬜ ikke startet · 🔒 krever ekstern part (jurist/Sikt/leverandør)

---

## 1. Målform / parallellitetskrav (LOVKRAV) — ✅
- ✅ Bokmål + nynorsk komplett (kapitler, quiz, chapterMeta), gratis = samme pris
- ⬜ Sluttverifisering: alle surfacede ruter har faktisk nynorsk (ikke bare datalaget)

## 2. Universell utforming WCAG 2.1 AA (LOVKRAV) — 🟡 STØRSTE GAP
- 🟡 Kodebase-revisjon mot WCAG 2.1 AA (pågår — se `docs/wcag-revisjon.md`)
  - [ ] Tastaturnavigasjon (alle interaktive elementer, fokusrekkefølge, fokus synlig)
  - [ ] Tekstalternativ/alt-tekst på alle bilder og illustrasjoner
  - [ ] Fargekontrast AA (4.5:1 tekst / 3:1 store elementer / UI)
  - [ ] Skjermleser: aria-roller, landmarks, overskriftshierarki
  - [ ] Skjemaer: labels, feilmeldinger, instruksjoner
  - [ ] `lang`-attributt korrekt (nb/nn/sme) per innhold
  - [ ] Lyd/video: tekstalternativ (narrativ-tekst dekker lydbøker)
  - [ ] Bevegelse/animasjon: respektér `prefers-reduced-motion`
- [ ] Publisert **tilgjengelighetserklæring** (egen side + uustatus.no-registrering)
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
