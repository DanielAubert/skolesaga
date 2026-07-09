# Lansering av betalingsmodellen — hva som er bygget og hva som gjenstår

Status per 10. juli 2026. Forretningsmodell: se minne «forretningsmodell» +
docs/AI-SENSOR.md. Verditrapp: Gratis (bøker + auto-retting + 3 løsningsforslag/uke
+ 3 KI-vurderinger) → Pluss 49 kr/mnd (alle løsningsforslag + quiz/SRS) →
Premium 99–129 kr/mnd (+ KI-kvote + simulator) → KI-klippekort → skolelisens.

## Bygget (skjult bak flagg, IKKE ute på siden)
| Komponent | Filer | Flagg (av som standard) |
|---|---|---|
| AI-sensor (KI-vurdering per trykk) | `src/lib/ai-sensor/`, `src/app/api/ai-sensor/`, `ai-sensor-panel.tsx` | `AI_SENSOR_ENABLED` + `NEXT_PUBLIC_AI_SENSOR_ENABLED` |
| Fasit-mur (målt, 3/uke, Pluss-CTA) | `src/lib/fasit/gate.ts`, `fasit-gate.tsx`, wiret i `textbook-exercise-item.tsx` | `NEXT_PUBLIC_FASIT_MUR_ENABLED` |

Designprinsipp i muren: auto-retting (riktig/galt) er ALLTID gratis — bare det
fullstendige løsningsforslaget måles. Én opplåsning per oppgave per uke-meter.

## Verifiser-flagg (kvalitetstillit)
- **Live bøker (jus1111, econ1310, bi-okonomi + alle VGS): 0 åpne flagg** —
  kontrollert 10. juli; alle `(verifiser…)`-treff i live-innhold er pedagogisk
  tekst («verifiser gjerne dette» i matte, kildekritikk-oppgaver), ikke hedges.
- **Skjeletter/analyser: 1459 + 154 flagg** — løses PER DESIGN av Opus under
  bokbygging (fase 4–6, mot Lovdata m.m.). Ikke løs dem i forkant (dobbeltarbeid);
  byggekontraktene krever det allerede.

## Gjenstår før lansering (prioritert)
1. **Betalingsløsning** (størst): Stripe og/eller Vipps. Produkter: Pluss-abo
   (mnd/år 349), Premium-abo, KI-klippekort (10/50/200). Kreditt-ledger i
   Supabase (tabell: user_id, credits, transactions). Koble:
   - `checkCredits()` i `src/app/api/ai-sensor/route.ts` (stubb)
   - `hasPlusAccess()` i `src/lib/fasit/gate.ts` (stubb)
2. **Server-side håndheving av fasit-muren**: V1-meteret er localStorage (kan
   omgås av teknisk kyndige — akseptabelt for soft launch, ikke for skala).
   Flytt meter til server når konto/betaling er på plass. Vurder også gating av
   løsningsforslag-collapsibles i prøvekapitler (content-block-renderer) og
   exercise-trainer-fasit — V1 dekker hovedflaten (oppgaveblokkene).
3. **/priser-side**: verditrappen som salgsside (FasitGate lenker dit allerede).
4. **AI-sensor ende-til-ende-test med ekte API-kall** — KREVER produkteiers
   eksplisitte samtykke (regel: aldri betalt API uten direkte spørsmål).
   Deretter: prompt-caching av pensumkonteksten (~50 % billigere input).
5. **DPIA-oppdatering**: AI-sensor sender elevbesvarelser til Anthropic —
   må inn i personvernerklæring + DPIA (jf. skoleadopsjon-compliance-sporet).
   For skolelisens: databehandleravtale må dekke dette.
6. **Emnekode-SEO** (billigste kanal): landingssider per emne («JUS1111 —
   eksamensrettet lærebok med løsningsforslag»), sitemap, meta. 120+ emner.
7. **Skolelisens-modus**: alt åpent for Feide-innloggede med lisens (lærere må
   aldri møte muren).
8. **Analytics**: konverteringstrakt (mur-treff → CTA-klikk → kjøp), KI-bruk
   per fag, meter-forbruk. Trengs for å justere 3/uke og priser.
9. **Kvalitet før hard markedsføring på høyskole**: bygg bøkene for de store
   emnene (exphil/BI/jus/psykologi) via BYGGEKONTRAKT — verifiser-flaggene
   løses da; jus-bøker bør fagfellesjekkes ekstra.

## Aktiveringssekvens (når betalingen er klar)
1. Sett opp Stripe/Vipps-produkter + kredittabell → erstatt de to stubbene
2. Slå på `NEXT_PUBLIC_FASIT_MUR_ENABLED` (myk mur, mål konvertering 1–2 uker)
3. Slå på AI-sensor-flaggene med kvote/klippekort
4. /priser + kampanje mot eksamensperioden (mai/november = vinduene)
