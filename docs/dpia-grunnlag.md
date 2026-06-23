# DPIA-grunnlag for Skolesaga (UTKAST)

> **Formål:** Dette dokumentet gir skoleeier (behandlingsansvarlig) faktagrunnlaget for å gjennomføre en **personvernkonsekvensvurdering (DPIA)** etter GDPR art. 35 før Skolesaga tas i bruk. Skolesaga (databehandler) fyller ut og holder dokumentet oppdatert; skoleeier gjør selve vurderingen og beslutningen.
>
> **Status:** Utkast – må kvalitetssikres av personvernombud/jurist.

En DPIA er som hovedregel påkrevd fordi behandlingen gjelder **systematisk overvåking av læringsaktivitet** og **sårbare registrerte (barn)**, jf. Datatilsynets liste over behandlinger som krever DPIA.

---

## 1. Beskrivelse av behandlingen

| | |
|---|---|
| **Tjeneste** | Skolesaga – digitalt læremiddel (lærebøker, quiz, øvingsoppgaver, flashcards, lydbøker) med innlogging og fremgangssporing |
| **Behandlingsansvarlig** | Skoleeier (kommune/fylkeskommune) |
| **Databehandler** | Skolesaga [AS] |
| **Registrerte** | Elever (hovedsakelig mindreårige), lærere, skoleadministratorer |
| **Behandlingsgrunnlag** | GDPR art. 6(1)(e) – oppgave i allmennhetens interesse / offentlig myndighet innen opplæring, jf. opplæringslova |
| **Særlige kategorier (art. 9)** | Behandles ikke |

## 2. Dataflyt og lagring

- **Innlogging:** Feide (via Sikt/Dataporten, OIDC), alternativt Google eller e-post/passord. Feide-attributter begrenset til: unik ID, navn, e-post, Feide-ID (dataminimering – `groups`-scope er **ikke** etterspurt).
- **Lagring:** PostgreSQL-database hos **Supabase, region eu-north-1 (Stockholm, EU/EØS)**. Filer (bilder/lyd) i Supabase Storage, samme region.
- **Drift/hosting:** Vercel, funksjonsregion pinnet til EØS (`arn1`).
- **Kryptering:** TLS i transitt; kryptering i ro på lagringsnivå.
- **Tilgangskontroll:** Rollebasert tilgang (elev/lærer/admin) + Row Level Security i databasen; minste privilegium.

## 3. Kategorier av personopplysninger

| Kategori | Eksempler | Lagringssted |
|----------|-----------|--------------|
| Identitet/konto | Navn, e-post, Feide-ID, rolle, klassetrinn, profilbilde | Supabase (`users`) |
| Skolestruktur | Klassemedlemskap, organisasjon, lærertildelte oppgaver | Supabase (`class_memberships`, `organizations`, `assignments`) |
| Læringsdata | Kapittelfremgang/fullføring, quiz-resultater, oppgaveforsøk, innleveringer, treningsøkter, flashcard-repetisjoner | Supabase (`completions`, `quiz_results`, `attempts`, `submissions`, `training_sessions`, `exercise_completions`) |
| Tilbakemeldinger | Innsendte tilbakemeldinger på innhold | Supabase (`content_feedback`) |
| Lokalt (ikke server) | Tema-valg, Python-kode, fremgang for uinnloggede | Nettleser (localStorage) |

## 4. Vurdering av nødvendighet og forholdsmessighet

- **Dataminimering:** Kun attributter som faktisk brukes hentes inn; `groups`-scope fra Feide er utelatt.
- **Formålsbegrensning:** Data brukes kun for å levere læremiddelet og gi elev/lærer innsyn i fremgang. Ingen behandling for egne kommersielle formål eller trening av AI-modeller.
- **Læringsanalyse:** Lærers innsyn i elevdata er begrenset til egen klasse/skole og tjener pedagogisk oppfølging.

## 5. Risikovurdering (skal fylles ut av skoleeier)

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
|--------|---------------|------------|--------|
| Uautorisert tilgang til elevdata | [ ] | [ ] | RLS, rollebasert tilgang, kryptering, MFA for admin [vurderes] |
| Tredjelandstilgang (Supabase/Vercel US-eierskap) | [ ] | [ ] | EØS-lagring, SCC, transfer impact assessment |
| For mye innsamlet data | [ ] | [ ] | Dataminimering, jevnlig gjennomgang |
| Brudd ikke oppdaget/varslet i tide | [ ] | [ ] | Logging/monitorering; varsling innen 24t til skoleeier |
| Feilaktig/utdatert informasjon til registrerte | [ ] | [ ] | Oppdatert personvernerklæring og databehandleravtale |

## 6. Restrisiko og konklusjon

[Skoleeier konkluderer: er restrisikoen akseptabel, kreves forhåndsdrøfting med Datatilsynet (art. 36), eller kreves ytterligere tiltak?]

## 7. Tiltak som er på plass (per nå)

- ✅ EØS-lagring (Supabase Stockholm)
- ✅ Vercel-funksjonsregion pinnet til EØS (`arn1`)
- ✅ Feide-dataminimering (`groups`-scope fjernet)
- ✅ Sikkerhetsheadere (CSP, HSTS, X-Frame-Options m.m.)
- ✅ Oppdatert personvernerklæring som reflekterer serverside-behandling
- ✅ Utkast til databehandleravtale (`docs/databehandleravtale-utkast.md`)
- ⬜ SCC + sikkerhetssertifiseringer (SOC 2 / ISO 27001) innhentet fra Supabase og Vercel
- ⬜ Juridisk gjennomgang av DPA og denne DPIA-en
- ⬜ WCAG 2.1 AA-revisjon og publisert tilgjengelighetserklæring
