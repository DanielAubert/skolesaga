# Juridisk TODO – gjenstående etter totalgjennomgang juli 2026

Full juridisk gjennomgang av skolesaga.no ble gjennomført 7. juli 2026 (personvern/GDPR,
vilkår, universell utforming, opphavsrett, e-handelskrav, AI-merking). Alt som kunne fikses
i kode ble fikset og er committet – se «Hva som allerede er fikset» nederst. Denne listen er
det som gjenstår, og krever i hovedsak deg (ID-porten/Altinn, avtaler, leverandørkontakt).

Legende: ⬜ ikke startet · 🔒 krever ekstern part

---

## 1. ⬜ Registrer tilgjengelighetserklæring på uustatus.no (VIKTIGST for skoleadopsjon)

Formell lovplikt ligger hos skoleeier (WAD gjelder offentlige virksomheter), men skoler
som vurderer Skolesaga vil kreve erklæring i standardformatet – i praksis en
markedsforutsetning. Egensiden `/tilgjengelighet` er bra, men erstatter ikke dette.

**Slik gjør du det (~30–60 min, alt faggrunnlag ligger klart):**
1. Logg inn på uustatus.no med ID-porten, representer Studenthjelp Privatundervisning AS
   (org.nr 913 117 387) – daglig leder/styreleder har normalt Altinn-rollen automatisk.
2. Opprett erklæring for skolesaga.no. Veiviseren spør per WCAG 2.1 AA-suksesskriterium.
   Fasit: `docs/wcag-revisjon.md`. De fem kjente avvikene (WCAG 3.3.1, 1.3.1, 3.1.2,
   1.1.1, 4.1.2 – samme som på `/tilgjengelighet`) settes «ikke oppfylt» med kort
   begrunnelse; resten i hovedsak oppfylt (støttet av axe-CI, 0 brudd på 11 ruter).
3. Tilbakemeldingskanal: studenthjelp@gmail.com.
4. Publiser → du får en permanent URL (uustatus.no/nb/erklaringer/…).
5. **Be Claude lenke URL-en inn** i footer + `/tilgjengelighet`-siden etterpå.
6. Oppdater erklæringen når avvik rettes; minst årlig gjennomgang.

## 2. 🔒 Juridisk gjennomgang av DPA + DPIA

- `docs/databehandleravtale-utkast.md` (art. 28-utkast) og `docs/dpia-grunnlag.md` er
  ferdige utkast, men merket UTKAST og trenger jurist.
- Frister/ansvar står i [klammer] i DPA-en (10 virkedager, 30 dager, ansvarsbegrensning) –
  må fastsettes.
- DPIA-ens risikotabell (§5) og restrisiko (§6) fylles ut av/sammen med skoleeier.

## 3. 🔒 Innhent overføringsdokumentasjon fra leverandører

- SCC + SOC 2 / ISO 27001 fra **Supabase** og **Vercel** (lastes ned fra deres
  trust-/compliance-sider med kundeinnlogging).
- Tilsvarende for **Google** (GA4 + OAuth) – DPF-sertifisering er referert i
  personvernerklæringen, bør arkiveres som dokumentasjon.
- Legges ved DPA-ens vedlegg C når de foreligger.

## 4. 🔒 Formell Feide-tjenesteavtale via Sikt

- Teknisk integrasjon (Dataporten OIDC) er på plass med dataminimert scope
  (`openid email profile userid-feide`, groups bevisst utelatt).
- Gjenstår: tjenesteregistrering/avtale i Sikt kundeportal så skoler kan aktivere
  Skolesaga for sine brukere.

## 5. ⬜ Verifiser ElevenLabs-lisens (lydbøkene) — SMALNET INN 26. juli 2026

**Stemmespørsmålet er avklart i koden og krever ingen videre undersøkelse.**
Kodegjennomgang 26. juli 2026:

- Alle lydfiler er generert med **én stemme: «Liam», `TX3LPaxmHKxFdv7VOQHJ`** —
  en av ElevenLabs' **ferdiglagde standardstemmer**. Identisk VOICE_ID i alle
  generatorskriptene (`generate-full-chapter.ts`, `generate-chapter-*.ts`,
  `regenerate-danish-segments.ts`).
- **Ingen stemmekloning noe sted i kodebasen** (grep på `voice.clone`,
  `/v1/voices/add`, instant/professional voice clone: 0 treff). Samtykkekravet
  som gjelder klonede stemmer er dermed ikke utløst.
- Stemmen er **ikke** hentet fra Voice Library, der opplasteren kan sette egne
  vilkår som forbyr kommersiell bruk. Den er ElevenLabs' egen.
- Ingen andre TTS-leverandører i bruk.
- Omfang: **407 lydfiler** i `public/audio` (serveres fra Supabase Storage).

**Det som fortsatt gjenstår, og bare kan gjøres av kontoeier:**

1. Bekreft betalt abonnementsnivå — https://elevenlabs.io/app/subscription
   (gratisnivået gir ikke kommersielle rettigheter og krever attribusjon;
   ethvert betalt nivå gir kommersiell lisens).
2. Les https://elevenlabs.io/terms-of-use og sjekk om nivået krever synlig
   attribusjon. I så fall: én linje i footer eller på `/vilkar`.
3. **Viktigst:** finn setningen om hva som skjer med ALLEREDE GENERERT lyd hvis
   abonnementet sies opp eller nedgraderes. Med 407 publiserte filer er det den
   ene betingelsen som kan bite i ettertid.

## 6. ⬜ Infrastruktur-verifisering (rest fra GDPR-sporet)

- Bekreft hvilket Supabase-prosjekt som er produksjon: `xerfxuoxqdptoxkiefju`
  (eu-north-1 Stockholm, EØS – det koden peker på) vs. det separate
  `hwakghiwvfoaorccuece` (eu-central-1). Unngå elevdata i feil prosjekt.
- Verifiser at Vercel faktisk deployer til arn1 (vercel.json har regions:["arn1"]).

## 7. ⬜ Gjenstående WCAG-småting (kodbart – Claude kan ta disse)

- Manuell skjermleser-/tastaturtest (VoiceOver/NVDA) – aldri gjennomført.
- `<h1>` på enkelte sider, overskriftshierarki på selvtest-sider, aria-pressed på
  svaralternativ, join/feedback role=alert, `prefers-reduced-motion`.
- `lang`-attributt på innholdsregion for nn/sme (WCAG 3.1.2) – bevisst utsatt (perf).
- Axe-CI på innloggede ruter.
- Detaljer: `docs/wcag-revisjon.md`.

## 8. ⬜ Tillit/AI-innhold (ikke lovkrav, men viktig for adopsjon)

- Kvalitetssikrings-/fagfellevurderingsprosess (minst stikkprøve per fag).
- Dokumentert faktasjekk-prosess + ev. offentlig rettelogg
  (jf. `docs/sarbarhetsvurdering-2026-06.md`).

## 9. ⚠️ FØR betaling noen gang aktiveres

Det finnes ikke betalingssystem i dag (`subscription_tier` er alltid "free"), så
angrerettloven er ikke utløst. **Hvis premium/abonnement innføres, MÅ dette bygges først:**
- Forhåndsopplysninger (pris, bindingstid, vilkår) før kjøp.
- Angrerettsinformasjon + standard angreskjema; eksplisitt samtykke til levering av
  digitalt innhold før angrefristens utløp (angrerettloven § 22 n).
- Aktiv vilkårsaksept i kjøpsflyten.
- NB: mindreårige kan ikke inngå kjøpsavtaler – krever foresatt-håndtering.

---

## Hva som allerede er fikset (7. juli 2026, committet)

- **Tilbyderinfo overalt** (ehandelsloven § 8 / GDPR art. 13): Studenthjelp
  Privatundervisning AS, org.nr 913 117 387, Aksel Olsens vei 10B, 1597 Moss,
  studenthjelp@gmail.com – i footer, personvern, vilkår + ny `/kontakt`-side.
- **Personvernerklæring**: GA4 deklarert, telefon/fødselsår/organisasjon listet,
  Feide-overrapportering fjernet, nytt avsnitt om barn og unge (13-årsgrense,
  personopplysningsloven § 5), nytt avsnitt om at selvtester (personlighet/IQ/EQ)
  aldri lagres, faste revisjonsdatoer (var `new Date()`).
- **Vilkår**: varslingsplikt ved endringer (var «uten forvarsel»), gratis-status
  eksplisitt, § 14 mindreårige, NLOD-attribusjon for LK20-kompetansemål,
  Unsplash-lisensomtale, kontaktinfo i § 16, footer lagt til på siden.
- **Selvbetjent GDPR**: `/api/user/data` (GET = JSON-eksport art. 15/20,
  DELETE = slett konto + alle data art. 17) + «Personvern og data»-kort på `/profil`.
  NB: kontoen er delt med eksamenssett.no – sletting sjekker deletion-impact.
- **Tilgjengelighetserklæring** (`/tilgjengelighet`): dato, utgiver, e-postkontakt.
- Sitemap: `/kontakt` + `/tilgjengelighet` lagt til.
- Verifisert: Unsplash-bruk OK (dokumentert i vilkår), ingen UDIR-PDF-er serveres,
  kildetekster i historie er public domain, ingen GPL-avhengigheter, personlighets-/
  IQ-/EQ-tester lagres ikke (kun React-state).

Status-sporet vedlikeholdes også i `docs/skoleadopsjon-arbeidsliste.md`.
