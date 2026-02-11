/* eslint-disable */
// @ts-nocheck
/**
 * Entreprenorskap og bedriftsutvikling 1 (VG2) - Del 7: Bedriftsetablering og juss
 * Kapittel 7.1-7.5
 *
 * Dekker LK20 kompetansemål:
 * - gjore rede for ulike selskapsformer og vurdere hvilken som passer best i ulike situasjoner
 * - forklare sentrale lover og regler som gjelder for naeringsvirksomhet
 * - utarbeide enkle kontrakter og forstå grunnleggende avtalerett
 * - gjore rede for immaterielle rettigheter og deres betydning for bedrifter
 * - vurdere ulike finansieringskilder for oppstartsbedrifter
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Selskapsformer i praksis
// ============================================================================

export const CHAPTER_ENTREBED_1_7_1: TextbookChapter = {
  id: 'entrebed-1-7-1',
  courseId: 'entrebed-1',
  chapterNumber: '7.1',
  title: 'Selskapsformer i praksis',
  description: 'Lær om de vanligste selskapsformene i Norge: enkeltpersonforetak, ansvarlige selskaper og aksjeselskaper. Du får oversikt over registrering, ansvar og skatteregler for hver form.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjore rede for ulike selskapsformer og vurdere hvilken som passer best i ulike situasjoner',
    'beskrive prosessen med å registrere en bedrift',
  ],
  content: [
    {
      id: 'eb-7-1-intro',
      type: 'text',
      content: `## Å velge riktig selskapsform

Når du skal starte en bedrift, er et av de viktigste valgene du tar hvilken selskapsform du skal bruke. Selskapsformen bestemmer hvordan bedriften organiseres, hvem som har ansvar for gjeld, og hvordan overskuddet beskattes.

I Norge finnes det flere selskapsformer, men de tre vanligste er:
- **Enkeltpersonforetak (ENK)** - den enkleste formen
- **Ansvarlig selskap (ANS/DA)** - for to eller flere eiere
- **Aksjeselskap (AS)** - den mest utbredte formen for større virksomheter

Valget av selskapsform avhenger av faktorer som antall eiere, risiko, kapitalbehov og fremtidige vekstplaner.`,
    },
    {
      id: 'eb-7-1-def-1',
      type: 'definition',
      title: 'Enkeltpersonforetak (ENK)',
      content: `**Enkeltpersonforetak** er den enkleste selskapsformen i Norge. Kjennetegn:

- **Eier:** Én person som driver virksomheten
- **Ansvar:** Eieren har **ubegrenset personlig ansvar** for all gjeld
- **Registrering:** Registreres i Enhetsregisteret (Brønnøysund). Frivillig MVA-registrering under 50 000 kr i omsetning
- **Skatt:** Overskuddet beskattes som eierens personlige inntekt (alminnelig inntekt + trinnskatt + trygdeavgift)
- **Krav:** Ingen krav til egenkapital
- **Organisasjonsnummer:** Tildeles ved registrering

**Passer for:** Frilansere, konsulenter, mindre virksomheter med lav risiko.`,
    },
    {
      id: 'eb-7-1-def-2',
      type: 'definition',
      title: 'Ansvarlig selskap (ANS og DA)',
      content: `**Ansvarlig selskap** er en selskapsform med to eller flere eiere (deltakere).

**ANS (Ansvarlig selskap):**
- Deltakerne har **ubegrenset og solidarisk ansvar** for selskapets gjeld
- Det betyr at hver enkelt deltaker kan kreves for hele gjelden

**DA (Delt ansvar):**
- Deltakerne har **ubegrenset, men delt ansvar**
- Hver deltaker hefter for sin andel av gjelden (f.eks. 50 % hver ved to eiere)

**Felles for ANS/DA:**
- Krever selskapsavtale
- Beskattes gjennom deltakerne (deltakermodellen)
- Ingen krav til egenkapital
- Registreres i Foretaksregisteret

**Passer for:** Partnerskap, advokater, rådgivere, håndverkere som samarbeider.`,
    },
    {
      id: 'eb-7-1-def-3',
      type: 'definition',
      title: 'Aksjeselskap (AS)',
      content: `**Aksjeselskap** er en selskapsform der eierne (aksjonærene) har **begrenset ansvar**.

- **Ansvar:** Aksjonærene risikerer kun den kapitalen de har skutt inn (aksjekapitalen)
- **Aksjekapital:** Minimum 30 000 kr ved stiftelse
- **Styre:** Må ha et styre med minst én person
- **Registrering:** Stiftelsesdokument, vedtekter, registrering i Foretaksregisteret
- **Skatt:** Selskapet betaler 22 % selskapsskatt. Utbytte til eierne beskattes i tillegg (aksjonærmodellen)
- **Regnskap:** Regnskapsplikt og revisjonsplikt (kan unntas for små AS)

**Passer for:** Bedrifter med flere eiere, vekstambisjoner, behov for ekstern kapital eller høy risiko.`,
    },
    {
      id: 'eb-7-1-text-1',
      type: 'text',
      content: `### Registrering av bedrift i praksis

Uansett selskapsform må bedriften registreres. Her er hovedstegene:

**1. Velg selskapsform**
Vurder antall eiere, risiko, kapitalbehov og skattemessige konsekvenser.

**2. Velg navn**
Firmanavnet må være unikt og ikke forvekslbart med andre bedrifter. Sjekk i Brønnøysundregistrene.

**3. Registrering**
- **ENK:** Registreres på altinn.no i Enhetsregisteret
- **ANS/DA:** Registreres i Foretaksregisteret (krav om selskapsavtale)
- **AS:** Registreres i Foretaksregisteret (krav om stiftelsesdokument og vedtekter)

**4. MVA-registrering**
Obligatorisk når omsetningen overstiger 50 000 kr i løpet av 12 måneder.

**5. Forsikringer**
Yrkesskadeforsikring er lovpålagt for bedrifter med ansatte.`,
    },
    {
      id: 'eb-7-1-tip-1',
      type: 'tip',
      title: 'Ungdomsbedrift og selskapsform',
      content: `Ungdomsbedrifter (UB) registreres gjennom Ungt Entreprenørskap og har en egen, forenklet organisasjonsform. UB-er har begrenset ansvar (maks aksjekapital 1 000 kr per deltaker) og trenger ikke registreres i Brønnøysund. Etter skoleåret må bedriften avvikles - men erfaringen kan brukes når du starter et ekte selskap senere!`,
    },
    {
      id: 'eb-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Valg av selskapsform',
      problem: 'Marte og Erik skal starte en IT-konsulentbedrift. De forventer høy omsetning, men det er også risiko for krav fra misfornøyde kunder. Hvilken selskapsform bør de velge?',
      solution: `**Analyse:**
- To eiere utelukker ENK (kun én eier)
- Høy risiko for krav fra kunder gjør ubegrenset ansvar (ANS/DA) risikabelt
- Behov for å beskytte privatøkonomien taler for begrenset ansvar

**Anbefaling: Aksjeselskap (AS)**
- Marte og Erik risikerer kun aksjekapitalen (minimum 30 000 kr)
- Privatøkonomien er beskyttet hvis noe går galt
- Lettere å ta inn nye partnere eller investorer senere
- Mer profesjonelt overfor kunder og samarbeidspartnere

**Stiftelse:**
1. Utarbeide stiftelsesdokument og vedtekter
2. Innbetale aksjekapital (30 000 kr)
3. Registrere i Foretaksregisteret via Altinn
4. Åpne bedriftskonto i banken`,
    },
    {
      id: 'eb-7-1-text-2',
      type: 'text',
      content: `### Sammenligning av selskapsformer

| Egenskap | ENK | ANS/DA | AS |
|----------|-----|--------|-----|
| Antall eiere | 1 | 2+ | 1+ |
| Ansvar | Ubegrenset | Ubegrenset (solidarisk/delt) | Begrenset |
| Minstekrav kapital | Ingen | Ingen | 30 000 kr |
| Skatt | Personlig inntekt | Deltakermodellen | 22 % + utbytteskatt |
| Regnskap | Forenklet | Forenklet | Regnskapsplikt |
| Egnet for | Frilansere | Partnerskap | Vekstbedrifter |`,
    },
    {
      id: 'eb-7-1-note-1',
      type: 'note',
      title: 'Skatteforskjeller i praksis',
      content: `**ENK:** Du betaler skatt av hele overskuddet som personinntekt. Med høy inntekt kan marginalskatt nå over 50 %.

**AS:** Selskapet betaler 22 % skatt av overskuddet. Når du tar ut utbytte, beskattes det i tillegg med ca. 37,8 % (effektiv skattesats etter skjermingsfradrag). Til gjengjeld kan du velge å la overskudd bli i selskapet og kun ta ut lønn.

For lavere inntekter (under ca. 750 000 kr) er ENK ofte gunstigst skattemessig. For høyere inntekter kan AS gi lavere total beskatning.`,
    },
    {
      id: 'eb-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er minimumskravet til aksjekapital ved stiftelse av et aksjeselskap i Norge?',
        options: [
          { id: 'a', text: '10 000 kr', isCorrect: false },
          { id: 'b', text: '30 000 kr', isCorrect: true },
          { id: 'c', text: '100 000 kr', isCorrect: false },
          { id: 'd', text: 'Det er ingen minimumskrav', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Fra 2012 ble kravet til aksjekapital i AS senket fra 100 000 kr til 30 000 kr, nettopp for å gjøre det enklere å starte aksjeselskap.',
      },
    },
    {
      id: 'eb-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr det at eierne i et ansvarlig selskap (ANS) har solidarisk ansvar?',
        options: [
          { id: 'a', text: 'Eierne deler ansvaret likt mellom seg', isCorrect: false },
          { id: 'b', text: 'Eierne har begrenset ansvar opp til aksjekapitalen', isCorrect: false },
          { id: 'c', text: 'Hver eier kan kreves for hele gjelden, ikke bare sin andel', isCorrect: true },
          { id: 'd', text: 'Eierne har kun ansvar for sin egen arbeidsinnsats', isCorrect: false },
        ],
        solution: 'Svar C er riktig. Solidarisk ansvar betyr at kreditorer kan kreve hele gjelden fra én enkelt deltaker, selv om det er flere eiere. Deltakeren kan deretter kreve de andre for deres andel, men risikoen ved manglende betalingsevne hos meddeltakere ligger på den enkelte.',
      },
    },
    {
      id: 'eb-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom ANS og DA. I hvilke situasjoner er DA å foretrekke fremfor ANS?',
        hints: ['Tenk på hva solidarisk versus delt ansvar betyr i praksis', 'Hva skjer hvis en av deltakerne ikke kan betale sin del?'],
        solution: 'I et ANS (ansvarlig selskap) har deltakerne solidarisk ansvar, som betyr at hver enkelt kan kreves for hele gjelden. I et DA (selskap med delt ansvar) hefter hver deltaker bare for sin forholdsmessige andel. DA er å foretrekke når deltakerne ønsker å begrense risikoen sin og ikke vil stå ansvarlig for de andres andel av gjelden, for eksempel i partnerskap der deltakerne har ulik økonomisk styrke.',
      },
    },
    {
      id: 'eb-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal starte en nettbutikk alene med lite startkapital og lav risiko. Hvilken selskapsform ville du valgt, og hvorfor?',
        hints: ['Vurder hvor mye kapital du trenger', 'Tenk på risikoen ved virksomheten'],
        solution: 'Et enkeltpersonforetak (ENK) vil passe best i denne situasjonen. Grunnene er: 1) Bare én eier, 2) Ingen krav til egenkapital, 3) Enkel registrering og drift, 4) Lavere kostnader til regnskap og administrasjon, 5) Lav risiko betyr at ubegrenset ansvar er mindre problematisk. Dersom virksomheten vokser og risikoen øker, kan man senere omdanne til AS.',
      },
    },
    {
      id: 'eb-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-7-1-ex-5',
        number: '7.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Tre venner ønsker å starte en cateringbedrift. De har 90 000 kr til sammen. Beskriv hvilken selskapsform du anbefaler, og lag en plan for registreringen.',
        hints: ['Vurder antall eiere, risiko og kapitalbehov', 'Husk at catering innebærer matlaging - det kan være risiko for krav'],
        solution: 'Anbefaling: Aksjeselskap (AS). Begrunnelse: 1) Tre eiere - ENK er utelukket, 2) Catering innebærer risiko for matforgiftning og erstatningskrav - begrenset ansvar beskytter privatøkonomien, 3) De har nok kapital (90 000 kr, over minstekravet på 30 000 kr). Registreringsplan: a) Utarbeide stiftelsesdokument med vedtekter (fordeling av aksjer), b) Innbetale aksjekapital på bedriftskonto, c) Registrere i Foretaksregisteret via Altinn, d) Søke om nødvendige tillatelser (Mattilsynet), e) Tegne yrkesskadeforsikring, f) MVA-registrering når omsetningen overstiger 50 000 kr.',
      },
    },
    {
      id: 'eb-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-7-1-ex-6',
        number: '7.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Sammenlign skattebelastningen for en selvstendig konsulent med 800 000 kr i overskudd som driver ENK versus AS. Hvilken selskapsform gir lavest total skatt?',
        hints: ['Husk å inkludere trinnskatt og trygdeavgift for ENK', 'For AS: tenk på både selskapsskatt og utbytteskatt'],
        solution: 'ENK: Overskuddet beskattes som personinntekt. Med 800 000 kr betaler man ca. 22 % alminnelig inntekt, trinnskatt (stigende satser fra ca. 1,7 % til 17,6 %), og trygdeavgift (ca. 11,1 %). Total skatt kan bli rundt 40-45 % av overskuddet, altså ca. 320 000-360 000 kr. AS: Selskapet betaler 22 % selskapsskatt = 176 000 kr. Gjenstående 624 000 kr kan tas ut som utbytte med ca. 37,8 % effektiv skattesats = ca. 235 872 kr. Total skatt: ca. 411 872 kr. Men: I AS kan man optimalisere ved å ta ut deler som lønn (fradragsberettiget for selskapet) og la resten stå i selskapet. Ved høyere inntekter vil AS ofte være gunstigere fordi trinnskatten øker markant.',
      },
    },
    {
      id: 'eb-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **ENK** er enklest å starte, men gir ubegrenset personlig ansvar
- **ANS/DA** passer for partnerskap, men innebærer også ubegrenset ansvar
- **AS** gir begrenset ansvar og er best egnet for vekstbedrifter med risiko
- Registrering skjer via **Altinn** og **Brønnøysundregistrene**
- Valg av selskapsform påvirker **skatt**, **ansvar** og **organisering**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| ENK | Enkeltpersonforetak - én eier, ubegrenset ansvar |
| ANS | Ansvarlig selskap - solidarisk ansvar |
| DA | Delt ansvar - hver eier hefter for sin andel |
| AS | Aksjeselskap - begrenset ansvar, min. 30 000 kr |
| Aksjekapital | Kapital eierne skyter inn ved stiftelse av AS |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.2: Lover og regler
// ============================================================================

export const CHAPTER_ENTREBED_1_7_2: TextbookChapter = {
  id: 'entrebed-1-7-2',
  courseId: 'entrebed-1',
  chapterNumber: '7.2',
  title: 'Lover og regler',
  description: 'Oversikt over de viktigste lovene som påvirker næringsvirksomhet: aksjeloven, arbeidsmiljøloven, markedsføringsloven og personvernregelverket (GDPR).',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare sentrale lover og regler som gjelder for naeringsvirksomhet',
    'vurdere konsekvenser av å bryte lover og regler',
  ],
  content: [
    {
      id: 'eb-7-2-intro',
      type: 'text',
      content: `## Lover som styrer næringslivet

Å drive bedrift innebærer å forholde seg til et omfattende regelverk. Lover og regler sikrer rettferdig konkurranse, beskytter ansatte, forbrukere og miljøet, og skaper forutsigbarhet for alle parter.

For en gründer er det helt nødvendig å kjenne de viktigste lovene. Brudd på regelverket kan føre til bøter, erstatningskrav, og i verste fall straffeansvar.

De viktigste lovene for næringsvirksomhet:
- **Aksjeloven** - styrer aksjeselskaper
- **Arbeidsmiljøloven** - beskytter arbeidstakere
- **Markedsføringsloven** - regulerer reklame og salg
- **Personopplysningsloven / GDPR** - beskytter persondata`,
    },
    {
      id: 'eb-7-2-def-1',
      type: 'definition',
      title: 'Aksjeloven',
      content: `**Aksjeloven** regulerer stiftelse, organisering og drift av aksjeselskaper.

**Viktige krav:**
- **Stiftelse:** Stiftelsesdokument, vedtekter, aksjekapital min. 30 000 kr
- **Styre:** Alle AS må ha et styre som er ansvarlig for forvaltningen
- **Generalforsamling:** Øverste myndighet der aksjonærene fatter vedtak
- **Utbytte:** Kan kun deles ut av fri egenkapital og krever forsvarlig egenkapital
- **Regnskapsplikt:** AS plikter å levere årsregnskap
- **Handleplikt:** Styret har handleplikt dersom egenkapitalen blir uforsvarlig lav

**Konsekvenser ved brudd:**
Styremedlemmer kan bli personlig erstatningsansvarlige dersom de forsømmer sine plikter.`,
    },
    {
      id: 'eb-7-2-def-2',
      type: 'definition',
      title: 'Arbeidsmiljøloven',
      content: `**Arbeidsmiljøloven (AML)** regulerer forholdet mellom arbeidsgiver og arbeidstaker.

**Viktige områder:**
- **Arbeidstid:** Maks 9 timer per dag, 40 timer per uke (avtaler kan gi 37,5 t)
- **Overtid:** Maks 10 timer per uke, 25 timer per 4 uker
- **Ferie:** Minimum 25 virkedager (4 uker + 1 dag) per år
- **Oppsigelsesvern:** Krav om saklig grunn for oppsigelse, varslingsfrister
- **HMS:** Arbeidsgiver plikter å sikre et forsvarlig arbeidsmiljø
- **Diskriminering:** Forbud mot diskriminering basert på kjønn, alder, etnisitet etc.
- **Ansettelse:** Krav om skriftlig arbeidsavtale

**Gjelder for:** Alle virksomheter med ansatte.`,
    },
    {
      id: 'eb-7-2-def-3',
      type: 'definition',
      title: 'Markedsføringsloven',
      content: `**Markedsføringsloven** regulerer markedsføring og handelspraksis.

**Hovedprinsipper:**
- **God markedsføringsskikk:** All markedsføring skal være ansvarlig og ikke villedende
- **Villedende reklame:** Forbudt å gi uriktige eller misvisende opplysninger
- **Sammenlignende reklame:** Tillatt, men må være saklig og dokumenterbar
- **Salg til mindreårige:** Strengere regler for markedsføring rettet mot barn
- **Spam:** Forbud mot uoppfordret elektronisk markedsføring uten samtykke
- **Prismerking:** Priser skal oppgis tydelig og inkludere alle avgifter

**Tilsyn:** Forbrukertilsynet håndhever markedsføringsloven og kan ilegge overtredelsesgebyr.`,
    },
    {
      id: 'eb-7-2-def-4',
      type: 'definition',
      title: 'Personvernforordningen (GDPR)',
      content: `**GDPR** (General Data Protection Regulation) er EUs personvernforordning, gjennomført i norsk lov gjennom **personopplysningsloven**.

**Sentrale prinsipper:**
- **Lovlighet:** Det må finnes et rettslig grunnlag for å behandle personopplysninger (f.eks. samtykke)
- **Formålsbegrensning:** Data skal kun brukes til det formålet de ble samlet inn for
- **Dataminimering:** Ikke samle inn mer data enn nødvendig
- **Lagringsbegrensning:** Slett data når de ikke lenger trengs
- **Informasjonsplikt:** Informere den registrerte om behandlingen

**Rettigheter for den registrerte:**
- Rett til innsyn, retting, sletting og dataportabilitet

**Tilsyn:** Datatilsynet håndhever regelverket og kan ilegge bøter opp til 4 % av global omsetning.`,
    },
    {
      id: 'eb-7-2-warning-1',
      type: 'warning',
      title: 'Konsekvenser av lovbrudd',
      content: `Brudd på næringslivets lover kan få alvorlige konsekvenser:

- **Bøter:** Forbrukertilsynet og Datatilsynet kan gi høye overtredelsesgebyr
- **Erstatning:** Bedriften kan bli erstatningsansvarlig overfor skadelidte
- **Straff:** Grove brudd kan føre til fengselsstraff for ansvarlige personer
- **Omdømmetap:** Negativ medieoppmerksomhet kan ødelegge merkevarens verdi
- **Tilbaketrekking:** Produkter kan bli pålagt fjernet fra markedet

Uvitenhet om loven fritar ikke for ansvar. Som gründer er det ditt ansvar å kjenne regelverket!`,
    },
    {
      id: 'eb-7-2-example-1',
      type: 'example',
      title: 'Eksempel: GDPR i praksis for en nettbutikk',
      problem: 'Du driver en nettbutikk og samler inn kundedata som navn, adresse, e-post og kjøpshistorikk. Hva krever GDPR av deg?',
      solution: `**Tiltak du må gjennomføre:**

1. **Personvernerklæring:** Publiser en tydelig erklæring som forklarer hvilke data du samler inn, hvorfor, og hvordan de brukes

2. **Samtykke:** Innhent aktivt samtykke for nyhetsbrev og markedsføring. Forhåndsavkryssede bokser er ikke gyldig samtykke

3. **Cookies:** Vis en cookie-banner der brukeren kan velge hvilke informasjonskapsler de godtar

4. **Dataminimering:** Ikke samle inn data du ikke trenger (f.eks. fødselsdato hvis det ikke er nødvendig)

5. **Databehandleravtale:** Inngå avtale med tredjeparter som behandler data på dine vegne (f.eks. skylagringstjenester)

6. **Sletting:** Ha rutiner for å slette kundedata når de ikke lenger trengs

7. **Sikkerhetsbrudd:** Meld avvik til Datatilsynet innen 72 timer ved datalekkasje`,
    },
    {
      id: 'eb-7-2-tip-1',
      type: 'tip',
      title: 'Gratis ressurser for gründere',
      content: `Du trenger ikke være jurist for å følge loven. Bruk disse ressursene:
- **Altinn.no:** Oversikt over lover og regler for bedrifter
- **Arbeidstilsynet.no:** Veiledning om arbeidsmiljøloven
- **Datatilsynet.no:** Maler og veiledere for GDPR-etterlevelse
- **Forbrukertilsynet.no:** Retningslinjer for markedsføring
- **Lovdata.no:** Alle norske lover og forskrifter gratis tilgjengelig`,
    },
    {
      id: 'eb-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er maksimal vanlig arbeidstid per uke ifølge arbeidsmiljøloven?',
        options: [
          { id: 'a', text: '35 timer', isCorrect: false },
          { id: 'b', text: '37,5 timer', isCorrect: false },
          { id: 'c', text: '40 timer', isCorrect: true },
          { id: 'd', text: '45 timer', isCorrect: false },
        ],
        solution: 'Svar C er riktig. Arbeidsmiljøloven setter maksimal alminnelig arbeidstid til 40 timer per uke. Mange tariffavtaler har lavere arbeidstid (typisk 37,5 timer), men loven setter grensen ved 40 timer.',
      },
    },
    {
      id: 'eb-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-7-2-ex-2',
        number: '7.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den høyeste boten Datatilsynet kan gi for brudd på GDPR?',
        options: [
          { id: 'a', text: '100 000 kr', isCorrect: false },
          { id: 'b', text: '1 million kr', isCorrect: false },
          { id: 'c', text: '4 % av global omsetning eller 20 millioner euro', isCorrect: true },
          { id: 'd', text: '10 % av norsk omsetning', isCorrect: false },
        ],
        solution: 'Svar C er riktig. GDPR åpner for bøter på opptil 4 % av virksomhetens totale globale omsetning eller 20 millioner euro, avhengig av hva som er høyest. Dette er ment å være avskrekkende, selv for store internasjonale selskaper.',
      },
    },
    {
      id: 'eb-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva «god markedsføringsskikk» betyr, og gi to eksempler på brudd på markedsføringsloven.',
        hints: ['Tenk på villedende reklame og uønsket markedsføring', 'Husk reglene om markedsføring mot barn'],
        solution: 'God markedsføringsskikk betyr at all markedsføring skal være ærlig, saklig og ansvarlig. Eksempler på brudd: 1) Villedende priser - å annonsere «50 % rabatt» uten at varen faktisk har vært solgt til normalprisen. 2) Spam - å sende e-postreklame til kunder som ikke har samtykket til å motta markedsføring. Andre eksempler: skjult reklame i sosiale medier uten å merke det som annonse, eller aggressiv markedsføring rettet mot barn.',
      },
    },
    {
      id: 'eb-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Styret i et aksjeselskap oppdager at egenkapitalen er blitt negativ. Hva må de gjøre ifølge aksjeloven?',
        hints: ['Tenk på styrets handleplikt', 'Hva er konsekvensene av å ikke handle?'],
        solution: 'Ifølge aksjeloven har styret handleplikt når egenkapitalen er lavere enn forsvarlig. Styret må: 1) Innkalle til styremøte umiddelbart, 2) Vurdere om det er grunnlag for videre drift, 3) Innkalle til ekstraordinær generalforsamling, 4) Foreslå tiltak som emisjon (ny aksjekapital), kostnadsreduksjoner eller omstrukturering, 5) Hvis det ikke er grunnlag for videre drift: begjære oppbud (konkurs). Dersom styret ikke handler, kan styremedlemmene bli personlig erstatningsansvarlige for tap som oppstår.',
      },
    },
    {
      id: 'eb-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Du starter en bedrift med to ansatte. Lag en oversikt over de viktigste lovkravene du må oppfylle som arbeidsgiver, inkludert arbeidsmiljøloven, GDPR og HMS-krav.',
        hints: ['Tenk på arbeidsavtaler, arbeidstid, forsikring og personvern', 'Husk plikten til systematisk HMS-arbeid'],
        solution: 'Viktige lovkrav: ARBEIDSMILJØLOVEN: 1) Skriftlig arbeidsavtale med alle ansatte, 2) Overholde arbeidstidsregler (maks 9t/dag, 40t/uke), 3) Sikre minst 25 virkedager ferie, 4) Yrkesskadeforsikring (lovpålagt), 5) Systematisk HMS-arbeid med verneombud. GDPR: 6) Behandle ansattes personopplysninger lovlig, 7) Informere ansatte om hvilke data som lagres, 8) Sikre data mot uautorisert tilgang. ANNET: 9) Melde ansatte inn i obligatorisk tjenestepensjon (OTP), 10) Registrere seg som arbeidsgiver i NAV, 11) Trekke skatt og betale arbeidsgiveravgift, 12) Følge diskrimineringsreglene ved ansettelse og i arbeidsforholdet.',
      },
    },
    {
      id: 'eb-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-7-2-ex-6',
        number: '7.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: En influenser promoterer et produkt på Instagram uten å merke det som reklame. Analyser hvilke lover som brytes, og hvilke konsekvenser dette kan få for både influenseren og bedriften.',
        hints: ['Tenk på markedsføringsloven og Forbrukertilsynets retningslinjer', 'Hvem har ansvaret - influenseren, bedriften, eller begge?'],
        solution: 'Lovbrudd: 1) Markedsføringsloven § 3 - skjult reklame er villedende handelspraksis, 2) Markedsføringsforskriften - krav om tydelig merking av reklame. Konsekvenser for influenseren: Forbrukertilsynet kan gi vedtak om stans og overtredelsesgebyr. Konsekvenser for bedriften: Bedriften er medansvarlig som oppdragsgiver og kan ilegges bøter. Begge kan i tillegg oppleve omdømmetap. Riktig praksis: All betalt omtale skal merkes tydelig med «annonse» eller «reklame» i starten av innlegget. Forbrukertilsynet har utgitt en egen veileder for merking av reklame i sosiale medier.',
      },
    },
    {
      id: 'eb-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Aksjeloven** regulerer aksjeselskapers stiftelse, styre og utbytte
- **Arbeidsmiljøloven** beskytter ansattes rettigheter og stiller krav til arbeidsgiver
- **Markedsføringsloven** krever ærlig og ansvarlig markedsføring
- **GDPR** gir strenge regler for behandling av personopplysninger
- Lovbrudd kan medføre **bøter, erstatning og straffeansvar**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Aksjeloven | Regulerer aksjeselskaper |
| AML | Arbeidsmiljøloven - arbeidstakers rettigheter |
| GDPR | Personvernforordningen - beskytter persondata |
| Handleplikt | Styrets plikt til å handle ved lav egenkapital |
| God markedsføringsskikk | Krav om ærlig og ansvarlig reklame |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.3: Kontrakter og avtaler
// ============================================================================

export const CHAPTER_ENTREBED_1_7_3: TextbookChapter = {
  id: 'entrebed-1-7-3',
  courseId: 'entrebed-1',
  chapterNumber: '7.3',
  title: 'Kontrakter og avtaler',
  description: 'Lær om avtalerett, hvordan kontrakter inngås, og hva som gjør en avtale bindende. Du får innsikt i anbud, garantier og vanlige kontraktstyper i næringslivet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'utarbeide enkle kontrakter og forstå grunnleggende avtalerett',
    'gjore rede for rettigheter og plikter i avtaleforhold',
  ],
  content: [
    {
      id: 'eb-7-3-intro',
      type: 'text',
      content: `## Avtaler i næringslivet

Avtaler er grunnmuren i all forretningsvirksomhet. Hver gang du kjøper en vare, ansetter en person eller samarbeider med en leverandør, inngår du en avtale. En god kontrakt sikrer at begge parter vet hva de har blitt enige om, og hva konsekvensene er dersom noen bryter avtalen.

I dette kapittelet skal du lære:
- Grunnprinsippene i avtalerett
- Hvordan en avtale blir bindende
- Ulike typer kontrakter i næringslivet
- Hvordan anbudskonkurranser fungerer
- Hva garantier innebærer`,
    },
    {
      id: 'eb-7-3-def-1',
      type: 'definition',
      title: 'Avtalerett og avtaleloven',
      content: `**Avtaleloven** (av 1918) er den sentrale loven for hvordan avtaler inngås og blir bindende.

**Grunnprinsipp:** En avtale oppstår gjennom **tilbud** og **aksept**.
- **Tilbud:** Et konkret forslag til avtale (f.eks. et pristilbud)
- **Aksept:** Godkjenning av tilbudet uten endringer
- **Akseptfrist:** Tilbudet gjelder i en rimelig tid, eller til en angitt frist

**Avtalefriheten:**
I Norge har vi avtalefrihet - du kan i utgangspunktet inngå avtaler om hva som helst, med hvem som helst, på de vilkår dere ønsker. Unntak gjelder for avtaler som strider mot lov, ærbarhet eller urimelige avtaler (avtaleloven § 36).

**Formfrihet:**
Avtaler trenger ikke å være skriftlige for å være gyldige. Også muntlige avtaler er bindende. Men skriftlige kontrakter er mye enklere å bevise i en eventuell tvist.`,
    },
    {
      id: 'eb-7-3-text-1',
      type: 'text',
      content: `### Ugyldige avtaler

Selv om en avtale er inngått, kan den kjennes ugyldig dersom:

**Tilblivelsesmangler:**
- **Tvang:** En part ble tvunget til å inngå avtalen
- **Svik:** En part ble lurt med uriktige opplysninger
- **Umyndighet:** Parten var under 18 år og avtalen ikke var vanlig for alderen

**Urimelige vilkår (§ 36):**
- Retten kan sette til side avtaler som er urimelige
- Vurderingen tar hensyn til partenes stilling, forholdene da avtalen ble inngått, og senere omstendigheter

**Bristende forutsetninger:**
- Grunnleggende forutsetninger for avtalen viser seg å være feil`,
    },
    {
      id: 'eb-7-3-def-2',
      type: 'definition',
      title: 'Kontraktstyper i næringslivet',
      content: `**Vanlige kontraktstyper:**

**Kjøpskontrakter:**
Regulerer kjøp og salg av varer eller tjenester. Bør inneholde pris, leveringstid, betalingsvilkår og reklamasjonsrett.

**Arbeidskontrakter:**
Regulerer forholdet mellom arbeidsgiver og arbeidstaker. Påkrevd skriftlig ifølge arbeidsmiljøloven.

**Leieavtaler:**
Regulerer leie av lokaler, utstyr eller andre eiendeler. Bør inneholde leieperiode, pris, oppsigelsestid og vedlikeholdsansvar.

**Samarbeidsavtaler:**
Regulerer samarbeid mellom bedrifter. Bør definere ansvarsfordeling, inntektsdeling og tvisteløsning.

**Taushetserklæringer (NDA):**
Sikrer at konfidensiell informasjon ikke deles med andre.

**Intensjonsavtaler:**
Uforpliktende avtale om å forhandle videre. Ikke bindende for selve avtalen, men kan binde partene til å forhandle i god tro.`,
    },
    {
      id: 'eb-7-3-text-2',
      type: 'text',
      content: `### Anbud og anbudskonkurranser

Anbud er en formalisert prosess for å innhente tilbud fra flere leverandører.

**Hvordan fungerer anbud?**
1. **Anbudsinnbydelse:** Oppdragsgiver beskriver hva de trenger
2. **Tilbudsinnlevering:** Leverandører sender inn sine tilbud innen fristen
3. **Evaluering:** Tilbudene vurderes etter fastsatte kriterier
4. **Tildeling:** Kontrakten tildeles den leverandøren som vinner

**Offentlige anskaffelser:**
Offentlige virksomheter er lovpålagt å bruke anbudskonkurranser over visse beløpsgrenser (ca. 100 000 kr). Reglene skal sikre konkurranse og forhindre korrupsjon.

**Tildelingskriterier:**
- Laveste pris
- Det økonomisk mest fordelaktige tilbudet (pris + kvalitet)
- Bærekraft og miljøkrav`,
    },
    {
      id: 'eb-7-3-text-3',
      type: 'text',
      content: `### Garantier og reklamasjon

**Garanti:**
En garanti er et frivillig løfte fra selger om at produktet skal fungere i en viss periode. Garantien kommer i tillegg til forbrukerens lovfestede rettigheter.

**Reklamasjonsrett:**
- **Forbrukerkjøpsloven:** Reklamasjonsrett i 2 år (5 år for varer med lengre levetid)
- Kjøper må reklamere innen rimelig tid etter at mangelen ble oppdaget
- Selger kan velge mellom retting, omlevering, prisavslag eller heving

**Hva bør en kontrakt inneholde?**
1. Partene (hvem avtalen gjelder mellom)
2. Avtalens gjenstand (hva avtalen gjelder)
3. Pris og betalingsvilkår
4. Leveringstid og leveringssted
5. Ansvar og risiko
6. Mislighold og sanksjoner
7. Tvisteløsning
8. Varighet og oppsigelse
9. Underskrifter og dato`,
    },
    {
      id: 'eb-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Enkel leverandøravtale',
      problem: 'Din ungdomsbedrift skal bestille 200 t-skjorter fra et trykkeri. Hva bør kontrakten inneholde?',
      solution: `**Kontraktens innhold:**

1. **Parter:** Ungdomsbedriften (kjøper) og trykkeriet (selger)
2. **Produkt:** 200 stk hvite t-skjorter med trykk, størrelse S-XL, fordeling angitt
3. **Pris:** 85 kr per stk, totalt 17 000 kr inkl. mva
4. **Betaling:** 50 % ved bestilling, 50 % ved levering
5. **Levering:** Innen 14 virkedager til skolens adresse
6. **Kvalitet:** Prøvetrykk godkjennes før produksjon
7. **Reklamasjon:** Avvik fra prøvetrykk gir rett til omlevering
8. **Forsinkelse:** Ved forsinkelse over 5 dager gis 5 % rabatt per ekstra uke
9. **Force majeure:** Ingen erstatningsplikt ved uforutsette hendelser (brann, pandemi)
10. **Signering:** Begge parter signerer, dato angis`,
    },
    {
      id: 'eb-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kreves for at en avtale skal bli bindende ifølge avtaleloven?',
        options: [
          { id: 'a', text: 'Skriftlig kontrakt med notarens stempel', isCorrect: false },
          { id: 'b', text: 'Tilbud og aksept', isCorrect: true },
          { id: 'c', text: 'Minst tre vitner til stede', isCorrect: false },
          { id: 'd', text: 'Registrering i Brønnøysund', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Ifølge avtaleloven oppstår en bindende avtale når et tilbud aksepteres. Det kreves verken skriftlighet, vitner eller registrering - også muntlige avtaler er bindende.',
      },
    },
    {
      id: 'eb-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når kan en domstol sette en avtale til side som ugyldig?',
        options: [
          { id: 'a', text: 'Bare når avtalen er muntlig', isCorrect: false },
          { id: 'b', text: 'Når en part angrer seg innen 14 dager', isCorrect: false },
          { id: 'c', text: 'Når avtalen er urimelig etter avtaleloven § 36', isCorrect: true },
          { id: 'd', text: 'Når kontrakten er skrevet uten advokat', isCorrect: false },
        ],
        solution: 'Svar C er riktig. Avtaleloven § 36 gir domstolene mulighet til å sette til side eller endre avtaler som er urimelige. Vurderingen tar hensyn til partenes stilling, avtalens innhold, og forholdene ellers.',
      },
    },
    {
      id: 'eb-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom garanti og reklamasjonsrett. Hvorfor er det viktig å kjenne forskjellen?',
        hints: ['Hvem bestemmer vilkårene for garanti?', 'Hva sier loven om reklamasjonsrett?'],
        solution: 'Garanti er et frivillig løfte fra selger og kan ha vilkår og begrensninger selgeren selv bestemmer. Reklamasjonsrett er lovfestet og gir forbrukeren rett til å klage på mangler i 2 år (5 år for varer med lengre levetid). Det er viktig å kjenne forskjellen fordi: 1) Reklamasjonsretten gjelder uansett om det er gitt garanti, 2) En garanti kan ikke begrense lovfestede rettigheter, 3) Etter garantien utløper, kan reklamasjonsretten fortsatt gjelde.',
      },
    },
    {
      id: 'eb-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er en intensjonsavtale, og hvorfor brukes den i næringslivet?',
        hints: ['Tenk på situasjoner der partene vil utforske samarbeid uten å binde seg'],
        solution: 'En intensjonsavtale (letter of intent) er en uforpliktende avtale der partene uttrykker at de ønsker å forhandle videre om et mulig samarbeid eller kjøp. Den brukes for å: 1) Vise seriøs interesse uten å forplikte seg juridisk, 2) Avklare rammene for videre forhandlinger, 3) Etablere taushetsplikt rundt forhandlingene, 4) Sette tidsfrister for forhandlingsprosessen. Intensjonsavtalen er ikke bindende for selve avtalen, men kan binde partene til å forhandle i god tro.',
      },
    },
    {
      id: 'eb-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-7-3-ex-5',
        number: '7.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Din bedrift skal leie et kontorlokale. Lag en liste over de viktigste punktene leieavtalen bør inneholde, og forklar hvorfor hvert punkt er viktig.',
        hints: ['Tenk på alt som kan gå galt i et leieforhold', 'Husk vedlikehold, oppsigelse og kostnader'],
        solution: 'Leieavtalen bør inneholde: 1) Parter - hvem som er utleier og leietaker, 2) Lokalet - nøyaktig adresse og areal, 3) Formål - hva lokalet skal brukes til, 4) Leieperiode - startdato, varighet og eventuelle opsjoner for forlengelse, 5) Leiesum - månedlig beløp, regulering (KPI-justering), felleskostnader, 6) Depositum - beløp og vilkår for tilbakebetaling, 7) Oppsigelse - oppsigelsestid og vilkår (typisk 3-6 måneder), 8) Vedlikehold - ansvarsfordeling mellom utleier og leietaker, 9) Endringer - rett til ombygging og vilkår, 10) Forsikring - hvem forsikrer hva, 11) Fremleie - om dette er tillatt, 12) Tvisteløsning - hvordan uenigheter løses. Hvert punkt reduserer risikoen for konflikter og sikrer forutsigbarhet for begge parter.',
      },
    },
    {
      id: 'eb-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-7-3-ex-6',
        number: '7.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: En leverandør leverer 500 enheter med feil farge, tre uker etter avtalt leveringsdato. Analyser situasjonen juridisk: Hvilke rettigheter har kjøperen, og hva kan kjøperen kreve?',
        hints: ['Vurder både forsinkelse og mangel', 'Kjøpsloven gir rett til ulike misligholdsbeføyelser'],
        solution: 'Kjøperen har to grunnlag for krav: FORSINKELSE (3 uker forsinket): 1) Fastholde kjøpet og kreve levering, 2) Heve kjøpet dersom forsinkelsen er vesentlig, 3) Kreve erstatning for tap som skyldes forsinkelsen. MANGEL (feil farge): 1) Retting - kreve at selger sender varer med riktig farge, 2) Omlevering - kreve nye varer, 3) Prisavslag - beholde varene med redusert pris, 4) Heving - returnere varene og få pengene tilbake (ved vesentlig mangel), 5) Erstatning for eventuelt tap. Kjøperen bør: a) Reklamere skriftlig umiddelbart, b) Dokumentere mangelen med bilder, c) Sette en rimelig frist for retting, d) Vurdere om det er mest hensiktsmessig å heve eller kreve prisavslag.',
      },
    },
    {
      id: 'eb-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Avtaler oppstår gjennom **tilbud og aksept** (avtaleloven)
- Også **muntlige avtaler** er bindende, men skriftlige er enklere å bevise
- En avtale kan kjennes **ugyldig** ved tvang, svik eller urimelighet
- **Anbud** er en formalisert prosess for å innhente tilbud
- **Garantier** er frivillige, mens **reklamasjonsrett** er lovfestet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Avtalefrihet | Frihet til å inngå avtaler om nesten hva som helst |
| Tilbud og aksept | Grunnlaget for en bindende avtale |
| NDA | Taushetserklæring om konfidensiell informasjon |
| Anbud | Formell prosess for å innhente leverandørtilbud |
| Reklamasjon | Lovfestet rett til å klage på mangler |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.4: Immaterielle rettigheter
// ============================================================================

export const CHAPTER_ENTREBED_1_7_4: TextbookChapter = {
  id: 'entrebed-1-7-4',
  courseId: 'entrebed-1',
  chapterNumber: '7.4',
  title: 'Immaterielle rettigheter',
  description: 'Forstå hvordan du beskytter bedriftens ideer og skaperverk gjennom patent, varemerke, designrett og opphavsrett. Immaterielle rettigheter kan være en bedrifts viktigste verdier.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjore rede for immaterielle rettigheter og deres betydning for bedrifter',
    'vurdere hvordan bedrifter kan beskytte sine innovasjoner',
  ],
  content: [
    {
      id: 'eb-7-4-intro',
      type: 'text',
      content: `## Å beskytte ideene dine

Immaterielle rettigheter (også kalt intellektuell eiendom) er rettigheter til skaperverk og oppfinnelser som ikke er fysiske gjenstander. For mange bedrifter er disse rettighetene det mest verdifulle de eier.

Tenk på merkevaren Coca-Cola: selve oppskriften og logoen er verdt langt mer enn fabrikkene og lastebilene. Uten beskyttelse av immaterielle rettigheter kunne hvem som helst kopiert oppskriften og brukt navnet.

De fire hovedtypene immaterielle rettigheter:
- **Patent** - beskytter oppfinnelser
- **Varemerke** - beskytter navn, logoer og symboler
- **Designrett** - beskytter produkters utseende
- **Opphavsrett** - beskytter åndsverk (tekst, musikk, kode)`,
    },
    {
      id: 'eb-7-4-def-1',
      type: 'definition',
      title: 'Patent',
      content: `**Patent** gir enerett til kommersiell utnyttelse av en oppfinnelse.

**Krav for å få patent:**
- Oppfinnelsen må være **ny** (ikke kjent fra før)
- Den må ha **oppfinnelseshøyde** (ikke opplagt for en fagperson)
- Den må ha **industriell anvendelse** (kunne produseres eller brukes)

**Beskyttelse:**
- Varer i **20 år** fra søknadsdatoen
- Gjelder kun i de landene du søker patent i
- Koster penger å opprettholde (årsavgifter)

**Søknad:**
Sendes til **Patentstyret** i Norge. Prosessen tar typisk 2-4 år.

**Hva kan ikke patenteres?**
Matematiske metoder, kunstneriske verk, forretningsmetoder og programvare (i seg selv).`,
    },
    {
      id: 'eb-7-4-def-2',
      type: 'definition',
      title: 'Varemerke',
      content: `**Varemerke** er et tegn som skiller dine varer eller tjenester fra andres.

**Hva kan registreres som varemerke?**
- Ord (f.eks. «Nike», «IKEA»)
- Logoer og figurer
- Fargekombinasjoner
- Lyder (f.eks. Intels jingle)
- Slagord (f.eks. «Just Do It»)

**Beskyttelse:**
- Registreres hos **Patentstyret**
- Gjelder i **10 år** med mulighet for ubegrenset fornyelse
- Beskytter mot forveksling i samme varekategori

**Innarbeidet varemerke:**
Et varemerke kan også oppnå beskyttelse uten registrering dersom det er godt kjent i markedet (innarbeidet).

**Domenenavn:**
Et domenenavn (.no) gir ikke automatisk varemerkebeskyttelse - du bør registrere varemerket separat.`,
    },
    {
      id: 'eb-7-4-def-3',
      type: 'definition',
      title: 'Designrett',
      content: `**Designrett** beskytter det visuelle utseendet til et produkt.

**Hva beskyttes?**
- Form og fasong
- Mønstre og ornamenter
- Farger og linjer
- Emballasje

**Krav:**
- Designet må være **nytt** (ikke offentliggjort før søknad)
- Det må ha **individuell karakter** (skille seg fra eksisterende design)

**Beskyttelse:**
- Registreres hos **Patentstyret**
- Varer i **5 år**, kan fornyes opptil **25 år** totalt
- Gjelder kun i de landene du registrerer

**Eksempel:** Apples iPhone-design, formen på en Coca-Cola-flaske, mønsteret på Burberrys tøy.`,
    },
    {
      id: 'eb-7-4-def-4',
      type: 'definition',
      title: 'Opphavsrett (åndsverkloven)',
      content: `**Opphavsrett** beskytter litterære, kunstneriske og vitenskapelige verk.

**Hva beskyttes?**
- Tekster, bøker, artikler
- Musikk og sangtekster
- Film og foto
- Programvarekode
- Arkitekttegninger
- Databaser

**Viktig:**
- Opphavsrett oppstår **automatisk** ved skapelsen - ingen registrering nødvendig
- Beskytter **uttrykket**, ikke ideen bak
- Varer i **opphavsmannens levetid + 70 år**

**Rettigheter:**
- **Ideelle rettigheter:** Rett til å bli navngitt, vern mot krenkende bruk
- **Økonomiske rettigheter:** Enerett til kopiering, spredning, fremføring

**Lisenser:**
Opphavsmannen kan gi andre rett til å bruke verket gjennom lisensavtaler (f.eks. Creative Commons).`,
    },
    {
      id: 'eb-7-4-text-1',
      type: 'text',
      content: `### Sammenligning av immaterielle rettigheter

| Type | Hva beskyttes | Varighet | Registrering |
|------|--------------|----------|-------------|
| Patent | Oppfinnelser | 20 år | Patentstyret (påkrevd) |
| Varemerke | Navn, logoer | 10 år (fornybar) | Patentstyret (anbefalt) |
| Designrett | Produktutseende | 5-25 år | Patentstyret (påkrevd) |
| Opphavsrett | Åndsverk | Levetid + 70 år | Automatisk |`,
    },
    {
      id: 'eb-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Beskytte en ny app',
      problem: 'Du har utviklet en innovativ treningsapp med et unikt design og en særegen algoritme. Hvordan kan du beskytte den?',
      solution: `**Beskyttelsesmuligheter:**

1. **Opphavsrett (automatisk):**
   - Selve koden er beskyttet av opphavsretten
   - Grafisk design og tekster i appen er beskyttet
   - Krever ingen registrering

2. **Varemerke (bør registreres):**
   - Registrer appens navn og logo som varemerke
   - Beskytter mot at andre bruker lignende navn
   - Kost: ca. 2 900 kr per klasse hos Patentstyret

3. **Designrett (vurder):**
   - Kan beskytte appens unike visuelle grensesnitt
   - Relevant hvis designet er et viktig konkurransefortrinn

4. **Patent (vanskelig for ren programvare):**
   - Algoritmen alene kan ikke patenteres i Norge
   - Dersom algoritmen løser et teknisk problem på en ny måte, kan det være mulig

**Anbefaling:** Registrer varemerke, stol på opphavsrett for koden, og vurder designrett for grensesnittet.`,
    },
    {
      id: 'eb-7-4-warning-1',
      type: 'warning',
      title: 'Ikke del ideen for tidlig',
      content: `Hvis du planlegger å søke patent, må du **ikke offentliggjøre oppfinnelsen** før søknaden er sendt. Patentsøknaden krever at oppfinnelsen er ny, og enhver offentliggjøring (inkludert presentasjoner, sosiale medier eller salg) kan ødelegge nyhetskravet. Bruk taushetserklæringer (NDA) dersom du må diskutere ideen med potensielle partnere eller investorer før patentet er søkt.`,
    },
    {
      id: 'eb-7-4-tip-1',
      type: 'tip',
      title: 'Kostnader ved beskyttelse',
      content: `Registrering av immaterielle rettigheter koster penger, men er ofte en god investering:
- **Varemerke:** Fra ca. 2 900 kr for norsk registrering
- **Patent:** Fra ca. 5 450 kr i søknadsgebyr, pluss årsavgifter
- **Designrett:** Fra ca. 2 150 kr for norsk registrering
- **Opphavsrett:** Gratis (automatisk)

For oppstartsbedrifter kan Innovasjon Norge tilby støtte til patenteringskostnader.`,
    },
    {
      id: 'eb-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken immateriell rettighet oppstår automatisk, uten at du trenger å søke eller registrere?',
        options: [
          { id: 'a', text: 'Patent', isCorrect: false },
          { id: 'b', text: 'Varemerke', isCorrect: false },
          { id: 'c', text: 'Designrett', isCorrect: false },
          { id: 'd', text: 'Opphavsrett', isCorrect: true },
        ],
        solution: 'Svar D er riktig. Opphavsrett oppstår automatisk i det øyeblikket et åndsverk skapes (tekst, musikk, kode, bilder). De andre rettighetene krever registrering hos Patentstyret for å få full beskyttelse.',
      },
    },
    {
      id: 'eb-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvor lenge varer et patent i Norge?',
        options: [
          { id: 'a', text: '10 år fra søknadsdatoen', isCorrect: false },
          { id: 'b', text: '20 år fra søknadsdatoen', isCorrect: true },
          { id: 'c', text: '50 år fra søknadsdatoen', isCorrect: false },
          { id: 'd', text: 'Ubegrenset, så lenge årsavgiften betales', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Et patent varer i maksimalt 20 år fra søknadsdatoen. Det kan ikke fornyes. Patenthaveren må betale årsavgifter for å opprettholde patentet i hele perioden.',
      },
    },
    {
      id: 'eb-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom patent og opphavsrett. Gi et eksempel på noe som beskyttes av patent, og noe som beskyttes av opphavsrett.',
        hints: ['Tenk på hva slags skapelser som beskyttes av hver type', 'Hva med krav til registrering?'],
        solution: 'Patent beskytter oppfinnelser og tekniske løsninger, og krever søknad og godkjenning fra Patentstyret. Opphavsrett beskytter åndsverk som tekst, musikk og programkode, og oppstår automatisk. Eksempel patent: en ny type solcelleteknologi som omformer sollys mer effektivt. Eksempel opphavsrett: romanen du skriver, musikken du komponerer, eller koden du programmerer. Viktig forskjell: Patent beskytter selve ideen/løsningen, mens opphavsrett kun beskytter det konkrete uttrykket (andre kan skrive om samme tema på sin egen måte).',
      },
    },
    {
      id: 'eb-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvorfor bør en bedrift registrere varemerket sitt, selv om innarbeidede varemerker også har beskyttelse?',
        hints: ['Hva er bevisbyrden for et innarbeidet varemerke?', 'Hva skjer ved en konflikt med et registrert varemerke?'],
        solution: 'En bedrift bør registrere varemerket fordi: 1) Registrering gir umiddelbar og dokumenterbar beskyttelse i hele landet, 2) Innarbeidet varemerke krever at du beviser at merket er godt kjent - dette er vanskelig og kostbart, 3) Registrering gir rett til å bruke symbolet (R) som signaliserer beskyttelse, 4) Ved konflikt har registrert varemerke sterkere stilling, 5) Det er enklere å håndheve rettighetene internasjonalt med et registrert varemerke, 6) Registrering er relativt billig (ca. 2 900 kr) sammenlignet med kostnadene ved en varemerkestvist.',
      },
    },
    {
      id: 'eb-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-7-4-ex-5',
        number: '7.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Din ungdomsbedrift har utviklet et nytt produkt med et unikt design og et catchy merkenavn. Lag en strategi for å beskytte bedriftens immaterielle verdier.',
        hints: ['Vurder alle fire typer immaterielle rettigheter', 'Tenk på hva som er mest kritisk å beskytte først'],
        solution: 'Beskyttelsesstrategi: 1) OPPHAVSRETT (gratis, automatisk): Dokumenter tidspunkt for skapelsen av tekster, markedsmateriell og eventuell programkode. 2) VAREMERKE (prioritet 1): Søk om registrering av merkenavnet og logoen hos Patentstyret. Sjekk først at navnet er ledig i varemerkedatabasen. Kostnad ca. 2 900 kr. 3) DESIGNRETT (prioritet 2): Registrer produktets unike design hos Patentstyret. Viktig å søke FØR produktet vises offentlig. Kostnad ca. 2 150 kr. 4) PATENT (vurder): Hvis produktet inneholder en ny teknisk løsning, vurder patentsøknad. Husk at offentliggjøring ødelegger muligheten. 5) TAUSHET: Bruk NDA-er med alle som får innsikt i forretningshemmeligheter. 6) DOMENE: Registrer relevante domenenavn (.no, .com). Prioriteringsrekkefølge: Varemerke først (billig, raskt), deretter designrett, og til slutt patent hvis relevant.',
      },
    },
    {
      id: 'eb-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-7-4-ex-6',
        number: '7.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: En konkurrent har laget et produkt som ligner svært mye på ditt patenterte produkt. Beskriv fremgangsmåten for å håndheve patentet ditt. Hva kan du kreve, og hva er risikoen?',
        hints: ['Tenk på bevis, juridiske steg og mulige utfall', 'Hva er kostnadene ved en patentsak?'],
        solution: 'Fremgangsmåte: 1) DOKUMENTER: Samle bevis for at konkurrentens produkt krenker patentet - kjøp produktet, ta bilder, analyser likheter. 2) JURIDISK VURDERING: Konsulter en patentadvokat for å vurdere om det faktisk foreligger patentinngrep. 3) VARSELSBREV: Send et formelt varselsbrev (cease and desist) der du krever at konkurrenten slutter med produksjon og salg. 4) FORHANDLING: Prøv å løse saken utenfor retten - kanskje gjennom en lisensavtale. 5) RETTSSAK: Hvis forhandling mislykkes, kan du gå til retten. Du kan kreve: a) Forbud mot videre produksjon og salg, b) Erstatning for tapt fortjeneste, c) Ødeleggelse av kopierte produkter. RISIKO: Rettssaker er dyre (hundretusenvis av kroner), tidkrevende, og utfallet er usikkert. Konkurrenten kan bestride patentets gyldighet. Derfor forsøker mange å løse tvister gjennom forhandling eller lisensavtaler.',
      },
    },
    {
      id: 'eb-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Patent** beskytter oppfinnelser i 20 år (krever registrering)
- **Varemerke** beskytter navn og logoer (fornybart hvert 10. år)
- **Designrett** beskytter produkters utseende (5-25 år)
- **Opphavsrett** oppstår automatisk for åndsverk (levetid + 70 år)
- Immaterielle rettigheter kan være en bedrifts **viktigste verdier**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Patent | Enerett til å utnytte en oppfinnelse |
| Varemerke | Tegn som skiller dine varer fra andres |
| Designrett | Beskyttelse av produkters utseende |
| Opphavsrett | Automatisk beskyttelse av åndsverk |
| NDA | Taushetserklæring for konfidensiell informasjon |
| Patentstyret | Norsk myndighet for registrering av IP-rettigheter |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.5: Finansiering og kapitaltilgang
// ============================================================================

export const CHAPTER_ENTREBED_1_7_5: TextbookChapter = {
  id: 'entrebed-1-7-5',
  courseId: 'entrebed-1',
  chapterNumber: '7.5',
  title: 'Finansiering og kapitaltilgang',
  description: 'Utforsk ulike måter å finansiere en oppstartsbedrift på: egenkapital, banklån, Innovasjon Norge, investorer og crowdfunding. Forstå fordeler og ulemper ved hver finansieringskilde.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere ulike finansieringskilder for oppstartsbedrifter',
    'gjore rede for fordeler og ulemper ved ulike finansieringsformer',
  ],
  content: [
    {
      id: 'eb-7-5-intro',
      type: 'text',
      content: `## Hvordan finansiere en bedrift?

En av de største utfordringene for gründere er å skaffe nok kapital til å starte og vokse. Selv den beste ideen trenger penger for å bli til virkelighet: til produktutvikling, markedsføring, lokaler, utstyr og lønn.

Finansiering handler om å finne riktig kapital til riktig tid. I ulike faser av bedriftens liv passer ulike finansieringskilder.

**Hovedkategorier:**
- **Egenkapital** - penger du selv eller eierne skyter inn
- **Fremmedkapital** - lån fra bank eller andre
- **Offentlig støtte** - tilskudd fra Innovasjon Norge, Forskningsrådet m.fl.
- **Investorer** - eksterne eiere som skyter inn kapital
- **Alternativ finansiering** - crowdfunding, bootstrapping m.m.`,
    },
    {
      id: 'eb-7-5-def-1',
      type: 'definition',
      title: 'Egenkapital og bootstrapping',
      content: `**Egenkapital** er penger eierne selv skyter inn i bedriften.

**Former for egenkapital:**
- **Sparepenger:** Egne oppsparte midler
- **Venner og familie:** Lån eller investering fra nære relasjoner (FFF - Friends, Family & Fools)
- **Aksjekapital:** Innskudd fra aksjonærer ved stiftelse eller emisjon

**Bootstrapping:**
Å starte og drive bedriften med minimal ekstern kapital. Du bruker egne midler og reinvesterer inntektene.

**Fordeler med egenkapital:**
- Du beholder full kontroll over bedriften
- Ingen renter eller avdrag å betale
- Viser omverdenen at du tror på ideen

**Ulemper:**
- Begrenset mengde kapital tilgjengelig
- Du bærer all risiko selv
- Kan ta lang tid å vokse`,
    },
    {
      id: 'eb-7-5-def-2',
      type: 'definition',
      title: 'Banklån og fremmedkapital',
      content: `**Fremmedkapital** er penger bedriften låner og som skal betales tilbake med renter.

**Typer banklån:**
- **Kassakreditt:** Trekkrettighet på konto - fleksibelt, men dyrt (brukes for kortsiktig likviditet)
- **Nedbetalingslån:** Fast lånebeløp med avtalt nedbetalingsplan
- **Leasing:** Leie av utstyr eller kjøretøy med mulighet for kjøp

**Krav fra banken:**
- Forretningsplan og budsjett
- Sikkerhet (pant i eiendom, utstyr eller personlig garanti)
- Egenkapitalandel (typisk 20-40 %)
- Positiv kredittvurdering

**Fordeler med lån:**
- Du beholder eierskapet
- Forutsigbare kostnader (renter og avdrag)

**Ulemper:**
- Krav om sikkerhet
- Må betales tilbake uansett bedriftens resultat
- Kan være vanskelig å få for oppstartsbedrifter uten historikk`,
    },
    {
      id: 'eb-7-5-def-3',
      type: 'definition',
      title: 'Innovasjon Norge og offentlig støtte',
      content: `**Innovasjon Norge** er statens viktigste virkemiddel for innovasjon og næringsutvikling.

**Tilbud:**
- **Oppstartslån:** Lån med gunstige vilkår for nye bedrifter
- **Tilskudd:** Støtte som ikke skal betales tilbake (typisk 50-75 % av prosjektkostnad)
- **Mentortjenester:** Gratis rådgivning fra erfarne gründere
- **Markedsavklaringstilskudd:** Støtte til å teste om markedet vil ha produktet ditt
- **Kommersialiseringstilskudd:** Støtte til å bringe innovasjoner til markedet

**Andre offentlige kilder:**
- **Forskningsrådet:** Støtte til forskningsbasert innovasjon
- **SIVA:** Inkubatorer og næringshager
- **Enova:** Støtte til grønne energi- og miljøprosjekter
- **Kommunale næringsfond:** Lokale støtteordninger

**Fordeler:**
- Rimelig eller gratis kapital
- Legitimitet og kvalitetsstempel

**Ulemper:**
- Tidkrevende søknadsprosess
- Strenge krav til dokumentasjon og rapportering`,
    },
    {
      id: 'eb-7-5-def-4',
      type: 'definition',
      title: 'Investorer og venturekapital',
      content: `**Investorer** skyter inn kapital i bytte mot eierandeler (aksjer) i bedriften.

**Typer investorer:**
- **Business angels (engleinvestorer):** Privatpersoner som investerer egne penger i oppstartsbedrifter. Bidrar ofte med erfaring og nettverk i tillegg til kapital (typisk 100 000 - 5 mill. kr)
- **Venturekapital (VC):** Profesjonelle fond som investerer i bedrifter med høyt vekstpotensial (typisk 5-50 mill. kr)
- **Såkornfond:** Offentlige/private fond for tidligfase-bedrifter

**Hva investorer ser etter:**
- Stort markedspotensial (skalerbar forretningsmodell)
- Sterkt team
- Unikt konkurransefortrinn
- Tydelig exit-strategi (salg eller børsnotering)

**Fordeler:**
- Stor kapitaltilgang
- Kompetanse og nettverk fra investoren
- Ingen rentekostnader

**Ulemper:**
- Du gir fra deg eierandeler og kontroll
- Investorer forventer høy avkastning
- Kan føre til interessekonflikt om retning`,
    },
    {
      id: 'eb-7-5-def-5',
      type: 'definition',
      title: 'Crowdfunding',
      content: `**Crowdfunding** (folkefinansiering) innebærer å samle inn kapital fra mange mennesker, vanligvis gjennom en nettplattform.

**Typer crowdfunding:**
- **Belønningsbasert:** Bidragsytere får et produkt eller en tjeneste tilbake (f.eks. Kickstarter, Indiegogo)
- **Aksjebasert (equity):** Bidragsytere får aksjer i bedriften (f.eks. Folkeinvest)
- **Lånebasert:** Bidragsytere låner ut penger med rente (f.eks. FundingPartner)
- **Donasjonsbasert:** Bidragsytere gir uten å forvente noe tilbake (f.eks. Spleis)

**Fordeler:**
- Markedstester ideen din (folk «stemmer med lommeboka»)
- Bygger et fellesskap rundt produktet
- Ingen krav til sikkerhet
- God markedsføring

**Ulemper:**
- Krever mye markedsføringsarbeid
- Ingen garanti for suksess
- Plattformene tar gebyr (5-10 %)
- Du må levere det du lover`,
    },
    {
      id: 'eb-7-5-text-1',
      type: 'text',
      content: `### Finansiering i ulike faser

**Idefasen (pre-seed):**
- Egne midler, FFF (friends, family, fools)
- Offentlige tilskudd (markedsavklaring)
- Bootstrapping

**Oppstartsfasen (seed):**
- Innovasjon Norge (oppstartslån, tilskudd)
- Business angels
- Crowdfunding

**Vekstfasen:**
- Venturekapital
- Banklån (bedriften har nå historikk)
- Emisjon (nye aksjer)

**Modningsfasen:**
- Banklån og obligasjoner
- Børsnotering (IPO)
- Oppkjøp eller fusjon`,
    },
    {
      id: 'eb-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Finansieringsplan for en matleverings-startup',
      problem: 'Ola har en ide om en app for levering av lokal mat fra småprodusenter. Han trenger 1,5 millioner kroner for å utvikle appen og starte driften. Hvordan bør han finansiere dette?',
      solution: `**Finansieringsplan:**

| Kilde | Beløp | Andel |
|-------|-------|-------|
| Egenkapital (sparepenger) | 200 000 kr | 13 % |
| Innovasjon Norge (tilskudd) | 500 000 kr | 33 % |
| Business angel | 500 000 kr | 33 % |
| Crowdfunding (Kickstarter) | 300 000 kr | 20 % |
| **Totalt** | **1 500 000 kr** | **100 %** |

**Begrunnelse:**
1. Egenkapitalen viser at Ola tror på ideen og tar risiko selv
2. Innovasjon Norge gir billig kapital og legitimitet
3. En business angel tilfører kapital, erfaring og nettverk
4. Crowdfunding tester markedsinteressen og skaper tidlige kunder

**Viktig:** Ola bør passe på at han ikke gir fra seg for mye eierandel for tidlig. Typisk bør gründeren beholde minst 50-60 % etter første finansieringsrunde.`,
    },
    {
      id: 'eb-7-5-note-1',
      type: 'note',
      title: 'Pitching for investorer',
      content: `En god pitch (presentasjon for investorer) bør dekke:

1. **Problemet:** Hvilket problem løser du?
2. **Løsningen:** Hvordan løser du det?
3. **Markedet:** Hvor stort er markedet?
4. **Forretningsmodellen:** Hvordan tjener du penger?
5. **Traction:** Hva har du oppnådd så langt?
6. **Teamet:** Hvem er dere, og hvorfor er dere riktige?
7. **Finansielt:** Hva trenger du, og hva skal pengene brukes til?
8. **Exit:** Hvordan kan investoren få avkastning?

En pitch bør ta maks 10 minutter og etterfølges av spørsmål.`,
    },
    {
      id: 'eb-7-5-tip-1',
      type: 'tip',
      title: 'Ikke glem likviditeten',
      content: `Mange bedrifter går konkurs, ikke fordi de er ulønnsomme, men fordi de går tom for kontanter (dårlig likviditet). Selv om du har stor omsetning, kan det oppstå problemer dersom kundene betaler sent, mens du må betale leverandører og lønn i tide. Lag alltid et likviditetsbudsjett som viser inn- og utbetalinger måned for måned!`,
    },
    {
      id: 'eb-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «bootstrapping»?',
        options: [
          { id: 'a', text: 'Å låne penger fra banken for å starte bedrift', isCorrect: false },
          { id: 'b', text: 'Å starte og drive bedriften med minimal ekstern kapital', isCorrect: true },
          { id: 'c', text: 'Å selge aksjer til investorer', isCorrect: false },
          { id: 'd', text: 'Å søke om offentlig støtte', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Bootstrapping betyr å starte og drive en bedrift med egne midler og reinvestere inntektene i stedet for å hente ekstern finansiering. Begrepet kommer fra uttrykket «pulling yourself up by your bootstraps» - å klare seg selv.',
      },
    },
    {
      id: 'eb-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-7-5-ex-2',
        number: '7.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom et tilskudd fra Innovasjon Norge og et banklån?',
        options: [
          { id: 'a', text: 'Tilskudd gir lavere rente enn banklån', isCorrect: false },
          { id: 'b', text: 'Tilskudd skal ikke betales tilbake, banklån skal', isCorrect: true },
          { id: 'c', text: 'Banklån gir mer kapital enn tilskudd', isCorrect: false },
          { id: 'd', text: 'Tilskudd krever høyere egenkapital', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Et tilskudd er støtte som ikke skal betales tilbake - det er i praksis en gave fra staten for å fremme innovasjon. Et banklån må derimot betales tilbake med renter over en avtalt periode, uavhengig av om bedriften lykkes.',
      },
    },
    {
      id: 'eb-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-7-5-ex-3',
        number: '7.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva en business angel er, og hva som skiller dem fra venturekapitalfond (VC).',
        hints: ['Tenk på investeringsbeløp, tidspunkt i bedriftens liv og grad av personlig involvering'],
        solution: 'En business angel er en privatperson som investerer egne penger i oppstartsbedrifter, typisk 100 000 - 5 millioner kroner. De investerer ofte i tidlig fase og bidrar aktivt med erfaring og nettverk. Et venturekapitalfond (VC) er et profesjonelt investeringsfond som forvalter andres penger. VC investerer typisk større beløp (5-50+ mill. kr) og i bedrifter som allerede har vist traction. VC har strengere krav til avkastning og rapportering. Oppsummert: Business angels investerer tidlig, med egne penger og personlig engasjement. VC kommer inn senere, med mer kapital og mer formelle krav.',
      },
    },
    {
      id: 'eb-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er crowdfunding? Beskriv de fire typene og gi et eksempel på når hver type passer.',
        hints: ['Tenk på hva bidragsyteren får tilbake', 'Når passer donasjon versus aksjer?'],
        solution: 'Crowdfunding er å samle inn kapital fra mange mennesker gjennom en nettplattform. 1) Belønningsbasert: Bidragsytere får et produkt tilbake. Passer for nye produkter som kan forhåndsselges (f.eks. en ny type ryggsekk på Kickstarter). 2) Aksjebasert: Bidragsytere får aksjer i bedriften. Passer for vekstbedrifter som ønsker mange småeiere (f.eks. en lokal bryggeripstart på Folkeinvest). 3) Lånebasert: Bidragsytere låner ut penger med rente. Passer for bedrifter som trenger kapital men ikke vil gi fra seg eierskap (f.eks. et etablert firma som trenger finansiering til et nytt prosjekt). 4) Donasjonsbasert: Bidragsytere gir uten å forvente noe tilbake. Passer for veldedige formål og ideelle prosjekter (f.eks. en innsamling til ny lekeplass på Spleis).',
      },
    },
    {
      id: 'eb-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Du skal starte en bedrift som produserer bærekraftige skolesekker. Du trenger 800 000 kr. Lag en finansieringsplan og begrunn valgene dine.',
        hints: ['Tenk på hvilke kilder som passer for produktets type og fase', 'Vurder også ikke-finansielle fordeler ved hver kilde'],
        solution: 'Finansieringsplan: 1) EGENKAPITAL: 150 000 kr fra sparepenger - viser investorer at du tror på ideen. 2) INNOVASJON NORGE: 250 000 kr i tilskudd - bærekraftig produkt passer godt med deres prioriteringer, og søknaden styrkes av at du har egenkapital. 3) CROWDFUNDING (belønningsbasert): 200 000 kr via Kickstarter - forhåndsselg sekkene, tester markedsinteressen, skaper tidlige kunder og ambassadører. 4) BANKLÅN: 200 000 kr - mulig fordi du har 40 % egenkapital/tilskudd og kan vise til forhåndssalg. Begrunnelse: Denne miksen gir tilstrekkelig kapital uten å gi fra seg eierandeler. Tilskudd og crowdfunding reduserer risikoen. Crowdfunding fungerer også som markedsundersøkelse og markedsføring. Banklånet kan sikres med utstyr/varelager. Alternativt kunne en business angel erstattet banklånet, men da gir du fra deg eierandeler.',
      },
    },
    {
      id: 'eb-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-7-5-ex-6',
        number: '7.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: En investor tilbyr 2 millioner kroner for 40 % eierandel i bedriften din. Forklar hva dette betyr for bedriftens verdsettelse, og diskuter fordeler og ulemper ved å akseptere tilbudet.',
        hints: ['Hva er bedriftens verdsettelse (pre-money og post-money)?', 'Hva mister du ved å gi fra deg 40 %?'],
        solution: 'Beregning av verdsettelse: Hvis 2 mill. kr = 40 % eierandel, er bedriftens post-money verdsettelse 2 mill / 0,4 = 5 mill. kr. Pre-money verdsettelse (før investeringen) er 5 mill - 2 mill = 3 mill. kr. FORDELER: 1) Stor kapitaltilførsel som muliggjør rask vekst, 2) Investorens nettverk og kompetanse, 3) Legitimitet overfor kunder og partnere. ULEMPER: 1) Du gir fra deg 40 % av eierskapet - ved senere runder kan din andel bli ytterligere utvannet, 2) Investoren kan ha vetorett over viktige beslutninger, 3) Investoren forventer høy avkastning (typisk 10x på 5-7 år), 4) Interessekonflikt dersom du og investoren har ulik visjon. VURDERING: 40 % er en stor andel å gi fra seg. Mange rådgivere anbefaler å ikke gi fra seg mer enn 20-25 % i første runde. Det kan være lurt å forhandle ned andelen eller hente inn en lavere sum.',
      },
    },
    {
      id: 'eb-7-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'eb-7-5-ex-7',
        number: '7.5.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Drøft hvorfor så mange oppstartsbedrifter går konkurs de første årene, og forklar hvordan god finansiell planlegging kan redusere risikoen.',
        hints: ['Tenk på likviditet, for rask vekst, og manglende planlegging', 'Hva er forskjellen mellom å være ulønnsom og å gå tom for kontanter?'],
        solution: 'Årsaker til at oppstartsbedrifter mislykkes: 1) LIKVIDITETSPROBLEMER: Bedriften går tom for kontanter, selv om den kan være lønnsom på papiret. Kunder betaler sent, men regninger forfaller. 2) FEIL MARKEDSFORSTÅELSE: Produktet møter ikke et reelt behov, eller markedet er for lite. 3) FOR RASK VEKST: Kostnader øker raskere enn inntektene. 4) UNDERFINANSIERING: For lite kapital ved oppstart, ikke nok buffer til å overleve oppstartsfasen. 5) MANGLENDE KOMPETANSE: Gründeren mangler erfaring med økonomi og drift. God finansiell planlegging reduserer risikoen gjennom: a) Likviditetsbudsjett som viser månedlige inn- og utbetalinger, b) Realistisk forretningsplan med konservative anslag, c) Tilstrekkelig startkapital med buffer (minst 6 måneders driftskapital), d) Diversifisert finansiering (ikke avhengig av én kilde), e) Regelmessig oppfølging av nøkkeltall (burn rate, break-even, runway).',
      },
    },
    {
      id: 'eb-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Egenkapital** gir full kontroll, men begrenset kapital
- **Banklån** krever sikkerhet og tilbakebetaling
- **Innovasjon Norge** tilbyr tilskudd og lån med gunstige vilkår
- **Investorer** gir kapital og kompetanse, men krever eierandeler
- **Crowdfunding** tester markedet og bygger fellesskap
- Riktig **finansieringsmiks** avhenger av fase, risiko og behov

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Egenkapital | Eiernes egne penger i bedriften |
| Fremmedkapital | Lånte penger som skal tilbakebetales |
| Bootstrapping | Drive bedrift med minimal ekstern kapital |
| Business angel | Privatperson som investerer i oppstartsbedrifter |
| Venturekapital | Profesjonelt fond for vekstbedrifter |
| Crowdfunding | Samle kapital fra mange gjennom nettplattform |
| Tilskudd | Offentlig støtte som ikke tilbakebetales |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const ENTREBED_1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_ENTREBED_1_7_1,
  CHAPTER_ENTREBED_1_7_2,
  CHAPTER_ENTREBED_1_7_3,
  CHAPTER_ENTREBED_1_7_4,
  CHAPTER_ENTREBED_1_7_5,
];
