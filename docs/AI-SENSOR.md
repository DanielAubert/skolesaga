# AI-sensor — KI-vurdering av besvarelser (ett knappetrykk)

**Status: BYGGET, SKJULT.** Ikke ute på siden — begge feature-flagg er av som
standard. Bestilt av produkteier 9. juli 2026 («bygg nå, men ikke ut på siden ennå»).

## Hva den gjør
Studenten skriver/limer inn besvarelsen sin under en oppgave og trykker
«Vurder med KI». Systemet vurderer besvarelsen mot:
1. **Oppgaveteksten** (inkl. deloppgaver)
2. **Pensum gjennomgått så langt i boka** — kapitler t.o.m. gjeldende kapittel
   (aldri senere stoff; modellen instrueres eksplisitt om å ikke trekke for
   begreper studenten ikke har møtt)
3. **Teorien i gjeldende kapittel** (utdrag av definisjoner/teoremer)
4. **Fagprofilen** (`src/lib/data/fagprofil/<courseId>.json`): sensornøkler,
   typiske feil, karakterskala — bygget fra eksamensanalysene

Svaret er strukturert: karakter (på fagets skala), kort dom, styrker, mangler,
konkret forbedringsråd. Norsk bokmål. Skriver ikke fasit for studenten.

## Filer
- `src/lib/ai-sensor/context.ts` — kontekstbygger (pensum-så-langt, teoriutdrag,
  fagprofil, prompt). Token-budsjettert for billig modell.
- `src/app/api/ai-sensor/route.ts` — POST-endepunkt. Kaller Anthropic Messages
  API direkte (fetch, ingen SDK). Rate-limit 6/min per IP. Kredittsjekk-STUBB
  (`checkCredits`) — koble til betaling før lansering.
- `src/components/textbook/ai-sensor-panel.tsx` — klientpanel (textarea + knapp
  + resultatvisning).
- Wiring: `textbook-exercise-item.tsx` rendrer panelet nederst i hver oppgave —
  kun når flagget er på.

## Aktivering (i dag: AV)
```
AI_SENSOR_ENABLED=true              # server: tillater API-ruta
NEXT_PUBLIC_AI_SENSOR_ENABLED=true  # klient: viser panelet
ANTHROPIC_API_KEY=sk-ant-...        # betalt API — kun med produkteiers samtykke
```
Modell: `claude-haiku-4-5-20251001` (billigst fornuftige). Overstyr med
`AI_SENSOR_MODEL`.

## Kostnad og anbefalte priser (per trykk)
Kostnadsgrunnlag (Haiku 4.5: ~$1/MTok inn, ~$5/MTok ut; kurs ~10,5 kr/$):
input ~3–6k tokens + output ~500–900 tokens ≈ **0,06–0,11 kr per vurdering**.

Anbefalt prising (~90–95 % margin, psykologisk enkle beløp):
| Produkt | Pris | Per trykk |
|---|---|---|
| Enkelttrykk | **2 kr** | 2,00 |
| Klippekort 10 | 15 kr | 1,50 |
| Klippekort 50 | 59 kr | 1,18 |
| Klippekort 200 | 199 kr | ~1,00 |
| Premium-kvote | f.eks. 30 trykk/mnd inkludert | — |

Anbefalt onboarding: **3 gratis vurderinger per bruker** (kostnad ~0,3 kr) —
lav terskel for å oppleve verdien før betaling.

## Gjenstår før lansering (bevisst ikke gjort)
1. **Betaling per trykk**: erstatt `checkCredits`-stubben med ekte kreditt-/
   betalingsløsning (Supabase-tabell for kreditter + kjøpsflyt).
2. **Test med ekte API-kall** — krever produkteiers eksplisitte samtykke til
   betalt API-bruk (regel: aldri betalt API uten direkte spørsmål).
3. Ev. prompt-caching av pensumlisten per kapittel (kutter input-kostnad ~50 %
   ved gjentatte vurderinger i samme kapittel).
4. Logging/statistikk per fag for kvalitetsovervåkning.

## Oppdatering 10. juli 2026 — modellstige, lagring og refusjon

- **To nivåer** (panel-testet; ingen synlig Haiku — tynt gratisnivå skader
  tilliten): 1 «Karakter + hvorfor» (Sonnet, 1 klipp, også gratis-smaken) og
  2 «Ditt avsnitt til A» (Opus, 3 klipp: + A-stresstest-rubrikk + omskriving
  av studentens svakeste avsnitt + neste øvelse). Konfig: src/lib/ai-sensor/tiers.ts.
  Skjult nødbrems: AI_SENSOR_MODEL_OVERRIDE.
- **karakterBokstav**: eget felt, nøyaktig én bokstav A–F (stor visning i UI);
  prompten krever konservativ kalibrering.
- **Lagring**: alle vurderinger lagres i ai_sensor_vurderinger (se
  docs/database-schema.md) — best effort, svaret feiler aldri på lagring.
- **Refusjon**: student kan melde inn en dårlig vurdering med begrunnelse
  (knapp under vurderingen) → admin behandler i /dashboard/admin/ki-sensor
  (godkjenn/avvis + valgfritt svar). Klipp-tilbakeføring kobles til
  betalingsløsningen (stubb markert i koden).
- Fortsatt HELT skjult bak AI_SENSOR_ENABLED + NEXT_PUBLIC_AI_SENSOR_ENABLED.
