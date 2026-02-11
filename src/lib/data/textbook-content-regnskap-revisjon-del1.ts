/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Regnskap og revisjon (VG3) - Del 1
 * Seksjon 1: Regnskapets grunnprinsipper
 * Følger LK20 læreplan
 *
 * Kapittel 1.1–1.5:
 *  1.1 Regnskapets formål og brukere
 *  1.2 Regnskapsloven
 *  1.3 God regnskapsskikk (GRS)
 *  1.4 Grunnleggende regnskapsprinsipper
 *  1.5 Regnskapssystemer og digitalisering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Regnskapets formål og brukere
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_1_1: TextbookChapter = {
  id: 'regnskap-revisjon-1-1',
  courseId: 'regnskap-revisjon',
  chapterNumber: '1.1',
  title: 'Regnskapets formål og brukere',
  description: 'Hvorfor regnskap, interessenter, beslutningsgrunnlag og regnskapets rolle i samfunnet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'Gjøre rede for regnskapets formål og funksjon',
    'Identifisere ulike brukere av regnskapsinformasjon og deres informasjonsbehov',
    'Forstå regnskapets rolle som beslutningsgrunnlag',
  ],
  content: [
    // INTRO
    {
      id: 'rr-1-1-intro',
      type: 'text',
      content: `## Regnskapets formål og brukere

Regnskap er selve grunnmuren i økonomisk styring. Uten et pålitelig regnskap kan verken eiere, investorer, myndigheter eller ledelsen ta gode beslutninger. I dette kapittelet skal du lære:

- Hva regnskap er og hvorfor det er viktig
- Hvem som bruker regnskapsinformasjon og hva de ser etter
- Hvordan regnskapet fungerer som beslutningsgrunnlag
- Skillet mellom finansregnskap og driftsregnskap

Et regnskap handler i bunn og grunn om å registrere, klassifisere og rapportere økonomiske hendelser i en virksomhet, slik at ulike brukere kan ta informerte valg.`,
    },

    // BLOCK 1: Hva er regnskap?
    {
      id: 'rr-1-1-def-1',
      type: 'definition',
      title: 'Regnskap',
      content: `**Regnskap** er en systematisk registrering, klassifisering og rapportering av økonomiske transaksjoner i en virksomhet. Formålet er å gi relevant, pålitelig og sammenlignbar informasjon om virksomhetens økonomiske stilling og resultat.

Man skiller gjerne mellom:
- **Finansregnskap** (eksternt): Rettet mot eksterne brukere (eiere, kreditorer, myndigheter). Regulert av regnskapsloven.
- **Driftsregnskap** (internt): Rettet mot intern styring (ledelsen). Ikke lovpålagt, men avgjørende for god drift.`,
    },
    {
      id: 'rr-1-1-example-1',
      type: 'example',
      title: 'Hvorfor trenger vi regnskap?',
      problem: 'Tenk deg en bedrift som selger sportsutstyr. I løpet av et år har de hatt hundrevis av transaksjoner: kjøp av varer, salg til kunder, lønnsutbetalinger, husleie, forsikring med mer. Hvorfor er det viktig at alt dette registreres i et regnskap?',
      solution: `**Uten regnskap vet ikke bedriften:**
- Om den tjener penger eller taper penger (lønnsomhet)
- Om den har nok penger til å betale regningene sine (likviditet)
- Hvor mye den eier og skylder (formuesstilling)
- Hvilke produkter som er mest lønnsomme
- Om den kan betale skatten sin

**Med et regnskap kan bedriften:**
1. Beregne årets resultat (overskudd eller underskudd)
2. Vise banken at den er kreditverdig (for å få lån)
3. Beregne riktig skatt til myndighetene
4. Gi eierne grunnlag for å vurdere utbytte
5. Sammenligne seg med andre bedrifter i bransjen

**Konklusjon:** Regnskap er ikke bare et lovkrav – det er et uunnværlig styringsverktøy.`,
    },
    {
      id: 'rr-1-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-1-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med finansregnskapet?',
        options: [
          'Å gi intern styringsinfo til ledelsen',
          'Å gi relevant og pålitelig informasjon til eksterne brukere om virksomhetens økonomi',
          'Å beregne budsjettavvik for avdelingsledere',
          'Å dokumentere antall ansatte i bedriften',
        ],
        solution: 'Å gi relevant og pålitelig informasjon til eksterne brukere om virksomhetens økonomi',
        explanation: 'Finansregnskapet er det lovpålagte, eksterne regnskapet. Det skal gi eiere, kreditorer, myndigheter og andre brukere pålitelig informasjon om virksomhetens resultat og stilling. Intern styringsinfo hører til driftsregnskapet.',
      },
    },

    // BLOCK 2: Regnskapets brukere
    {
      id: 'rr-1-1-text-brukere',
      type: 'text',
      title: 'Regnskapets brukere',
      content: `### Hvem bruker regnskapet?

Regnskapsinformasjon er viktig for mange ulike grupper. Hver gruppe har sine egne informasjonsbehov:

**Eiere og investorer**
- Vil vite om bedriften er lønnsom og om verdien øker
- Bruker regnskapet til å vurdere utbytte og avkastning
- Sammenligner med alternative investeringer

**Kreditorer (banker og långivere)**
- Vil vite om bedriften kan betjene gjelden sin
- Vurderer evnen til å betale tilbake lån
- Ser spesielt på likviditet og soliditet

**Ansatte og fagforeninger**
- Interessert i bedriftens økonomi og stabilitet
- Grunnlag for lønnsforhandlinger
- Trygghet for arbeidsplassene

**Kunder og leverandører**
- Kunder vil vite om leverandøren er stabil nok til å levere over tid
- Leverandører vil vite om bedriften kan betale for varene

**Offentlige myndigheter**
- Skatteetaten bruker regnskapet for skatteberegning
- SSB bruker aggregerte tall til nasjonalstatistikk
- Tilsynsmyndigheter vurderer om loven er fulgt

**Ledelsen**
- Bruker regnskapet til å styre og kontrollere driften
- Planlegging og budsjettering
- Grunnlag for strategiske beslutninger`,
    },
    {
      id: 'rr-1-1-def-2',
      type: 'definition',
      title: 'Interessenter (stakeholders)',
      content: `**Interessenter** er alle personer, grupper og organisasjoner som har en interesse i virksomhetens økonomi og drift. Disse kalles også regnskapets brukere.

**Primære brukere:** De som har direkte økonomisk interesse – eiere, kreditorer, investorer.
**Sekundære brukere:** De som har indirekte interesse – ansatte, myndigheter, kunder, leverandører, samfunnet generelt.`,
    },
    {
      id: 'rr-1-1-example-2',
      type: 'example',
      title: 'Ulike brukeres fokus',
      problem: 'Nordvik Møbler AS har offentliggjort årsregnskapet. Forklar hva følgende brukere typisk vil se etter:\n\na) Bankrådgiveren i Nordvik Sparebank\nb) Daglig leder i selskapet\nc) Skatteetaten',
      solution: `**a) Bankrådgiveren:**
- **Likviditet:** Har bedriften nok likvide midler til å betale terminene?
- **Soliditet:** Hvor stor andel av eiendelene er finansiert med egenkapital?
- **Kontantstrøm:** Genererer driften nok penger til å betjene lån?
- **Sikkerhet:** Hvilke eiendeler kan stilles som sikkerhet?

**b) Daglig leder:**
- **Resultatutviklingen:** Går det bedre eller dårligere enn fjoråret?
- **Kostnadskontroll:** Er kostnadene på et akseptabelt nivå?
- **Lønnsomhet per avdeling/produkt:** Hvor tjener vi penger?
- **Budsjettavvik:** Ligger vi over eller under budsjett?

**c) Skatteetaten:**
- **Skattepliktig inntekt:** Er det beregnet riktig skattemessig resultat?
- **Fradrag:** Er kostnadene som er ført reelle og fradragsberettigede?
- **MVA:** Stemmer merverdiavgiftsoppgjøret?
- **Dokumentasjon:** Foreligger det gyldige bilag for transaksjonene?`,
    },
    {
      id: 'rr-1-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-1-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En leverandør vurderer å gi kreditt til en ny kunde. Hvilken informasjon fra kundens regnskap er mest relevant?',
        options: [
          { id: 'a', text: 'Hvor mange ansatte kunden har', isCorrect: false },
          { id: 'b', text: 'Kundens soliditet og betalingsevne', isCorrect: true },
          { id: 'c', text: 'Kundens markedsandel', isCorrect: false },
          { id: 'd', text: 'Kundens organisasjonsstruktur', isCorrect: false },
        ],
        solution: 'En leverandør som vurderer å gi kreditt, er opptatt av om kunden kan betale regningene. Soliditet (egenkapitalandel) viser den finansielle styrken, og betalingsevne (likviditet) viser om kunden har penger til å gjøre opp for seg. Antall ansatte eller organisasjonsstruktur sier lite om dette.',
      },
    },
    {
      id: 'rr-1-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-1-1-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom finansregnskap og driftsregnskap. Gi minst to eksempler på informasjon som hører hjemme i hvert av dem.',
        solution: `**Finansregnskap (eksternt regnskap):**
- Er lovpålagt etter regnskapsloven
- Retter seg mot eksterne brukere (eiere, kreditorer, myndigheter)
- Følger standardiserte regler (regnskapsloven, GRS/IFRS)
- Eksempler: Resultatregnskap, balanse, noter, kontantstrøm

**Driftsregnskap (internt regnskap):**
- Er frivillig – ingen lovkrav
- Retter seg mot intern styring (ledelse og mellomledere)
- Kan tilpasses bedriftens behov
- Eksempler: Kalkyler per produkt, avdelingsregnskap, budsjettrapporter

**Hovedforskjell:** Finansregnskapet viser den totale økonomiske stillingen utad, mens driftsregnskapet bryter ned informasjonen for intern styring og kontroll.`,
      },
    },

    // SUMMARY
    {
      id: 'rr-1-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Regnskap** er systematisk registrering, klassifisering og rapportering av økonomiske transaksjoner.
- **Finansregnskapet** er lovpålagt og rettet mot eksterne brukere. **Driftsregnskapet** er internt og frivillig.
- Regnskapets brukere inkluderer eiere, kreditorer, ansatte, myndigheter, kunder, leverandører og ledelsen.
- Ulike brukere har ulike informasjonsbehov: Eiere fokuserer på lønnsomhet, banker på soliditet og likviditet, myndigheter på korrekt skatteberegning.
- Regnskapet er et helt sentralt beslutningsgrunnlag for alle interessenter i en virksomhet.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rr-1-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-1-1-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken brukergruppe er mest opptatt av om bedriften kan betale tilbake lån og renter?',
        options: [
          'Ansatte',
          'Kreditorer (banker og långivere)',
          'Skatteetaten',
          'Kundene',
        ],
        solution: 'Kreditorer (banker og långivere)',
        explanation: 'Kreditorer har lånt penger til bedriften og er derfor mest opptatt av om den kan betjene gjelden sin – det vil si betale renter og avdrag. De ser spesielt på likviditet, soliditet og kontantstrøm.',
      },
    },
    {
      id: 'rr-1-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-1-1-oppg-5',
        number: '5',
        type: 'classic',
        task: 'En bedrift har følgende interessenter: Eiere, DNB (bank), Skatteetaten, de ansatte og en stor kunde. Forklar kort hva hver interessent typisk er mest opptatt av i bedriftens regnskap.',
        solution: `**Eiere:** Er bedriften lønnsom? Gir den god avkastning på investert kapital? Kan det tas ut utbytte?

**DNB (bank):** Har bedriften evne til å betale renter og avdrag på lån? Er soliditeten god nok til at banken er sikret?

**Skatteetaten:** Er inntekter og kostnader riktig bokført? Er skattepliktig inntekt beregnet korrekt? Er det tilstrekkelig dokumentasjon?

**De ansatte:** Er bedriften stabil nok til å sikre arbeidsplassene? Er det rom for lønnsøkning?

**Stor kunde:** Er bedriften solid nok til å levere varer/tjenester over tid? Er det risiko for at leverandøren går konkurs?`,
      },
    },
    {
      id: 'rr-1-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rr-1-1-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Drøft påstanden: «Regnskapet er bare viktig for store bedrifter. Små bedrifter trenger det ikke.»',
        hints: [
          'Tenk på lovkrav, skatteberegning og styringsverktøy.',
          'Vurder om størrelsen på bedriften endrer behovet for informasjon.',
        ],
        solution: `Påstanden er feil. Regnskap er viktig uavhengig av bedriftens størrelse:

**Lovkrav:** Alle regnskapspliktige foretak (AS, ASA, og foretak over omsetningsgrensen) skal føre regnskap etter regnskapsloven. Også enkeltpersonforetak må føre regnskap for skatteformål.

**Skatteberegning:** Alle bedrifter må beregne og betale skatt. Uten regnskap er dette umulig.

**Styringsverktøy:** Små bedrifter har ofte strammere økonomi og mindre buffere enn store. Regnskapet gir eieren oversikt over om driften er lønnsom og om likviditeten holder.

**Konklusjon:** Om noe er regnskapet viktigere for små bedrifter fordi de er mer sårbare for feil beslutninger og dårlig økonomisk kontroll.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Regnskap', definition: 'Systematisk registrering, klassifisering og rapportering av økonomiske transaksjoner i en virksomhet.' },
    { term: 'Finansregnskap', definition: 'Lovpålagt eksternt regnskap rettet mot eiere, kreditorer og myndigheter.' },
    { term: 'Driftsregnskap', definition: 'Frivillig internt regnskap rettet mot ledelsen for styring og kontroll.' },
    { term: 'Interessenter', definition: 'Alle personer og grupper som har interesse i virksomhetens økonomi og drift.' },
  ],
};

// ============================================================================
// KAPITTEL 1.2: Regnskapsloven
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_1_2: TextbookChapter = {
  id: 'regnskap-revisjon-1-2',
  courseId: 'regnskap-revisjon',
  chapterNumber: '1.2',
  title: 'Regnskapsloven',
  description: 'Krav i regnskapsloven, hvem som er regnskapspliktige, frister, oppstillingsplan og årsberetning.',
  estimatedMinutes: 22,
  competenceGoals: [
    'Kjenne til regnskapslovens formål og virkeområde',
    'Vite hvem som er regnskapspliktige etter loven',
    'Forstå krav til oppstillingsplan, frister og årsberetning',
  ],
  content: [
    // INTRO
    {
      id: 'rr-1-2-intro',
      type: 'text',
      content: `## Regnskapsloven

Regnskapsloven (lov av 17. juli 1998 nr. 56) er den sentrale loven som regulerer hvordan virksomheter i Norge skal utarbeide årsregnskapet sitt. I dette kapittelet skal du lære:

- Hvem som er regnskapspliktige etter loven
- Hva regnskapet skal inneholde (oppstillingsplan)
- Frister for innsending og offentliggjøring
- Krav til årsberetning og noter
- Konsekvenser ved brudd på regnskapsloven

Regnskapsloven er fundamentet for norsk regnskapspraksis og sikrer at regnskapsinformasjonen er sammenlignbar og pålitelig for alle brukere.`,
    },

    // BLOCK 1: Regnskapsplikt
    {
      id: 'rr-1-2-def-1',
      type: 'definition',
      title: 'Regnskapsplikt',
      content: `**Regnskapsplikt** innebærer at en virksomhet er lovpålagt å utarbeide årsregnskap etter reglene i regnskapsloven.

**Regnskapspliktige foretak** (regnskapsloven § 1-2):
- Aksjeselskaper (AS) og allmennaksjeselskaper (ASA)
- Ansvarlige selskaper (ANS/DA) med omsetning over 5 mill. kr
- Stiftelser
- Samvirkeforetak med omsetning over 2 mill. kr
- Enkeltpersonforetak med eiendeler over 20 mill. kr eller mer enn 20 ansatte
- Alle foretak som er regnskapspliktige etter særlovgivning

**Merk:** Også foretak som ikke er regnskapspliktige, kan ha bokføringsplikt etter bokføringsloven.`,
    },
    {
      id: 'rr-1-2-example-1',
      type: 'example',
      title: 'Er foretaket regnskapspliktig?',
      problem: 'Vurder om følgende foretak er regnskapspliktige etter regnskapsloven:\n\na) Munch Kunsthandel AS med 3 ansatte og 2 mill. kr i omsetning\nb) Erik Hansens Rørleggerbedrift (enkeltpersonforetak) med 4 mill. kr i omsetning og 2 ansatte\nc) Fjordby Idrettslag (stiftelse) med 500 000 kr i omsetning',
      solution: `**a) Munch Kunsthandel AS:**
**Ja, regnskapspliktig.** Alle aksjeselskaper er regnskapspliktige etter regnskapsloven § 1-2, uavhengig av størrelse.

**b) Erik Hansens Rørleggerbedrift:**
**Nei, ikke regnskapspliktig etter regnskapsloven.** Enkeltpersonforetak er kun regnskapspliktige dersom de har eiendeler over 20 mill. kr eller mer enn 20 ansatte. Erik har verken. Men han har bokføringsplikt etter bokføringsloven.

**c) Fjordby Idrettslag (stiftelse):**
**Ja, regnskapspliktig.** Alle stiftelser er regnskapspliktige, uavhengig av størrelse og omsetning.`,
    },
    {
      id: 'rr-1-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-1-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilke av følgende foretak er alltid regnskapspliktige, uavhengig av størrelse?',
        options: [
          { id: 'a', text: 'Enkeltpersonforetak', isCorrect: false },
          { id: 'b', text: 'Aksjeselskaper (AS)', isCorrect: true },
          { id: 'c', text: 'Ansvarlige selskaper (ANS)', isCorrect: false },
          { id: 'd', text: 'Samvirkeforetak', isCorrect: false },
        ],
        solution: 'Aksjeselskaper (AS og ASA) er alltid regnskapspliktige etter regnskapsloven § 1-2, uavhengig av omsetning, antall ansatte eller størrelse på eiendeler. For andre selskapsformer gjelder terskelverdier.',
      },
    },

    // BLOCK 2: Oppstillingsplan og innhold
    {
      id: 'rr-1-2-text-oppstilling',
      type: 'text',
      title: 'Årsregnskapets innhold',
      content: `### Hva skal årsregnskapet inneholde?

Regnskapsloven § 3-2 stiller krav til innholdet i årsregnskapet. Et komplett årsregnskap skal bestå av:

**1. Resultatregnskap**
- Viser inntekter og kostnader i regnskapsåret
- Gir grunnlag for å beregne årsresultatet (overskudd/underskudd)
- Regnskapsloven gir to oppstillingsplaner: etter art eller etter funksjon

**2. Balanse**
- Viser virksomhetens eiendeler, egenkapital og gjeld på balansedagen (31.12.)
- Delt i eiendeler (anleggsmidler + omløpsmidler) og finansiering (egenkapital + gjeld)

**3. Kontantstrømoppstilling**
- Viser pengestrømmene i løpet av året
- Delt i drift, investering og finansiering
- Unntak: Små foretak kan unnlate kontantstrømoppstilling

**4. Noter**
- Tilleggsopplysninger som utdyper tallene i regnskapet
- For eksempel regnskapsprinsipper, lønnskostnader, sikkerhetsstillelser

**Frister:**
- Årsregnskapet skal fastsettes senest **seks måneder** etter regnskapsårets slutt (dvs. 30. juni for kalenderårsregnskap)
- Regnskapet sendes til **Regnskapsregisteret** i Brønnøysund`,
    },
    {
      id: 'rr-1-2-def-2',
      type: 'definition',
      title: 'Oppstillingsplan',
      content: `**Oppstillingsplan** er det lovfestede skjemaet som angir hvordan resultatregnskapet og balansen skal settes opp.

Regnskapsloven § 6-1 og § 6-2 gir to alternativer for resultatregnskapet:
- **Artsbasert oppstilling:** Kostnadene grupperes etter art (lønn, avskrivninger, varekostnad osv.)
- **Funksjonsbasert oppstilling:** Kostnadene grupperes etter funksjon (produksjon, salg, administrasjon osv.)

De fleste norske bedrifter bruker artsbasert oppstilling.`,
    },
    {
      id: 'rr-1-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-1-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva består et komplett årsregnskap av?',
        options: [
          'Bare resultatregnskap og balanse',
          'Resultatregnskap, balanse, kontantstrømoppstilling og noter',
          'Bare balanse og noter',
          'Resultatregnskap og årsberetning',
        ],
        solution: 'Resultatregnskap, balanse, kontantstrømoppstilling og noter',
        explanation: 'Etter regnskapsloven § 3-2 skal årsregnskapet inneholde resultatregnskap, balanse, kontantstrømoppstilling og noter. Årsberetning er et eget dokument som følger årsregnskapet, men er ikke en del av selve regnskapet. Små foretak har fritak fra kontantstrøm.',
      },
    },

    // BLOCK 3: Årsberetning og små foretak
    {
      id: 'rr-1-2-text-arsberetning',
      type: 'text',
      title: 'Årsberetning og forenklinger for små foretak',
      content: `### Årsberetning

I tillegg til årsregnskapet skal styret avgi en **årsberetning** (regnskapsloven § 3-3 a). Årsberetningen er en verbal redegjørelse som blant annet skal omtale:

- Virksomhetens art og aktivitet
- Fortsatt drift-forutsetningen
- Arbeidsmiljø og likestilling
- Ytre miljø
- Forsknings- og utviklingsaktiviteter
- Fremtidsutsikter

### Forenklinger for små foretak

Regnskapsloven gir **små foretak** (§ 1-6) flere forenklinger:
- Unntak fra krav om kontantstrømoppstilling
- Forenklede notekrav
- Unntak fra krav om årsberetning (fra 2018)
- Kan benytte forenklede regnskapsregler

**Kriterier for små foretak** (to av tre vilkår på balansedagen):
- Salgsinntekt under 70 mill. kr
- Balansesum under 35 mill. kr
- Gjennomsnittlig antall ansatte under 50`,
    },
    {
      id: 'rr-1-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-1-2-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Et aksjeselskap har følgende tall: Salgsinntekt 40 mill. kr, balansesum 25 mill. kr, og 30 ansatte. Regnes selskapet som et «lite foretak» etter regnskapsloven? Begrunn svaret.',
        solution: `**Kriteriene for små foretak (to av tre vilkår):**
1. Salgsinntekt under 70 mill. kr: 40 mill. kr ✓ (oppfylt)
2. Balansesum under 35 mill. kr: 25 mill. kr ✓ (oppfylt)
3. Gjennomsnittlig ansatte under 50: 30 ansatte ✓ (oppfylt)

**Konklusjon:** Ja, selskapet regnes som et lite foretak fordi det oppfyller alle tre vilkår (det kreves bare to av tre). Selskapet kan dermed benytte forenklede regler: unntak fra kontantstrømoppstilling, forenklede noter, og fritak fra årsberetning.`,
      },
    },

    // SUMMARY
    {
      id: 'rr-1-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Regnskapsloven** regulerer utarbeidelse av årsregnskap for norske virksomheter.
- **Regnskapsplikt** gjelder automatisk for AS, ASA og stiftelser, mens andre selskapsformer har terskelverdier.
- Årsregnskapet består av **resultatregnskap, balanse, kontantstrømoppstilling og noter**.
- Regnskapsloven gir to **oppstillingsplaner** for resultatregnskapet: artsbasert og funksjonsbasert.
- **Små foretak** har forenklede krav: unntak fra kontantstrøm, forenklede noter og fritak fra årsberetning.
- Årsregnskapet skal fastsettes innen **seks måneder** etter regnskapsårets slutt og sendes til **Regnskapsregisteret** i Brønnøysund.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rr-1-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-1-2-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Innen hvilken frist skal årsregnskapet for et selskap med kalenderår som regnskapsår normalt være fastsatt?',
        options: [
          '31. mars',
          '30. april',
          '30. juni',
          '31. desember',
        ],
        solution: '30. juni',
        explanation: 'Etter regnskapsloven skal årsregnskapet fastsettes senest seks måneder etter regnskapsårets slutt. For selskaper med kalenderårsregnskap (1.1.–31.12.) er fristen dermed 30. juni.',
      },
    },
    {
      id: 'rr-1-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-1-2-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor regnskapsloven gir forenklede regler for små foretak. Gi to konkrete eksempler på slike forenklinger.',
        hints: [
          'Tenk på forholdet mellom kostnad og nytte av regnskapsinformasjon.',
          'Hva er forskjellen i informasjonsbehovet for et stort børsnotert selskap versus en liten bedrift?',
        ],
        solution: `**Begrunnelse for forenklinger:**
Små foretak har færre interessenter og enklere virksomhet. Å kreve like omfattende regnskapsrapportering som for store bedrifter ville medført uforholdsmessig høye kostnader sett opp mot nytten for brukerne. Lovgiver har derfor gjort en avveining mellom informasjonsbehov og rapporteringsbyrde.

**Eksempler på forenklinger:**
1. **Fritak fra kontantstrømoppstilling:** Små foretak trenger ikke utarbeide en egen oversikt over pengestrømmene. For store foretak er dette viktig informasjon for investorer og kreditorer, mens for små foretak er behovet begrenset.

2. **Forenklede notekrav:** Små foretak trenger ikke gi like omfattende tilleggsopplysninger. For eksempel er kravene til informasjon om finansielle instrumenter, segmentinformasjon og nærstående parter redusert.`,
      },
    },
    {
      id: 'rr-1-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rr-1-2-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Hva er forskjellen mellom en artsbasert og en funksjonsbasert oppstilling av resultatregnskapet? Gi et eksempel på en kostnadspost som ville klassifiseres ulikt i de to oppstillingene.',
        solution: `**Artsbasert oppstilling:**
Kostnadene grupperes etter hva de er (art): varekostnad, lønnskostnad, avskrivninger, annen driftskostnad osv. Sier hva bedriften har brukt penger på.

**Funksjonsbasert oppstilling:**
Kostnadene grupperes etter formål (funksjon): produksjonskostnad, salgskostnad, administrasjonskostnad osv. Sier hva pengene er brukt til.

**Eksempel: Lønn til ansatte**
- **Artsbasert:** All lønn samles under posten «Lønnskostnad» – uansett om den ansatte jobber i produksjon, salg eller administrasjon.
- **Funksjonsbasert:** Lønnen fordeles: Produksjonsarbeiderens lønn inngår i «Produksjonskostnad», selgerens lønn i «Salgskostnad» og regnskapssjefens lønn i «Administrasjonskostnad».

De fleste norske bedrifter bruker artsbasert oppstilling fordi det er enklere og mest utbredt i norsk praksis.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Regnskapsplikt', definition: 'Lovpålagt plikt til å utarbeide årsregnskap etter regnskapsloven.' },
    { term: 'Oppstillingsplan', definition: 'Lovfestet skjema for hvordan resultatregnskap og balanse skal settes opp.' },
    { term: 'Årsberetning', definition: 'Styrets verbale redegjørelse som følger årsregnskapet, med informasjon om drift, arbeidsmiljø og fremtidsutsikter.' },
    { term: 'Små foretak', definition: 'Foretak som oppfyller minst to av tre størrelseskriterier og får forenklede regnskapskrav.' },
    { term: 'Regnskapsregisteret', definition: 'Register i Brønnøysund der alle regnskapspliktige foretak sender inn årsregnskapet.' },
  ],
};

// ============================================================================
// KAPITTEL 1.3: God regnskapsskikk (GRS)
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_1_3: TextbookChapter = {
  id: 'regnskap-revisjon-1-3',
  courseId: 'regnskap-revisjon',
  chapterNumber: '1.3',
  title: 'God regnskapsskikk (GRS)',
  description: 'NRS, IFRS, dynamikken mellom lov og skikk, og hvordan regnskapsstandarder utvikles.',
  estimatedMinutes: 22,
  competenceGoals: [
    'Forstå begrepet god regnskapsskikk og dets rettslige status',
    'Kjenne til NRS og IFRS og forskjellene mellom dem',
    'Forstå dynamikken mellom regnskapsloven og regnskapsstandardene',
  ],
  content: [
    // INTRO
    {
      id: 'rr-1-3-intro',
      type: 'text',
      content: `## God regnskapsskikk (GRS)

Regnskapsloven fastslår i § 4-6 at årsregnskapet skal utarbeides i samsvar med **god regnskapsskikk**. Men hva betyr egentlig dette? I dette kapittelet skal du lære:

- Hva god regnskapsskikk er og hvorfor den er viktig
- Hvordan regnskapsstandarder fra NRS konkretiserer god regnskapsskikk
- Forskjellen mellom NRS (norsk standard) og IFRS (internasjonal standard)
- Dynamikken mellom lov og skikk i norsk regnskapsrett

God regnskapsskikk fyller det rommet der loven ikke gir detaljerte svar. Det er en rettslig standard som utvikler seg over tid i takt med endringer i næringslivet og regnskapsfaglig utvikling.`,
    },

    // BLOCK 1: Begrepet GRS
    {
      id: 'rr-1-3-def-1',
      type: 'definition',
      title: 'God regnskapsskikk (GRS)',
      content: `**God regnskapsskikk** er en rettslig standard som innebærer at regnskapet skal utarbeides i samsvar med:

1. **Regnskapsloven** og dens grunnleggende prinsipper
2. **Regnskapsstandarder** utgitt av Norsk RegnskapsStiftelse (NRS)
3. **Anerkjent regnskapsteori** og bransjepraksis
4. **Rettslig utvikling**, herunder internasjonal påvirkning

God regnskapsskikk er en dynamisk standard som endrer seg over tid. Den fylles med innhold gjennom regnskapsstandarder, praksis og teori.`,
    },
    {
      id: 'rr-1-3-text-dynamikk',
      type: 'text',
      title: 'Dynamikken mellom lov og skikk',
      content: `### Hvorfor trenger vi god regnskapsskikk?

Regnskapsloven kan ikke regulere alle situasjoner som oppstår i næringslivet. Loven gir et **rammeverk** med grunnleggende prinsipper, mens god regnskapsskikk fyller rammeverket med detaljerte løsninger.

**Eksempel:** Regnskapsloven sier at eiendeler skal vurderes til «virkelig verdi» eller «anskaffelseskost», men sier ikke i detalj hvordan du beregner virkelig verdi av en eiendom, et patent eller en kundeportefølje. Her gir regnskapsstandardene veiledning.

**Dynamisk utvikling:**
- Næringslivet endrer seg: Nye forretningsmodeller, digitalisering, kryptovaluta osv.
- Regnskapsstandardene oppdateres for å håndtere nye problemstillinger
- Loven forblir stabil, mens skikken utvikler seg

**Rettskildehierarkiet:**
1. Regnskapsloven (overordnet)
2. Regnskapsstandarder fra NRS (utdypende)
3. Anerkjent teori og praksis (supplerende)
4. Internasjonal påvirkning, bl.a. IFRS (veiledende)`,
    },
    {
      id: 'rr-1-3-example-1',
      type: 'example',
      title: 'Når loven ikke gir svar',
      problem: 'Et IT-selskap har utviklet et dataprogram internt. Programmet har kostet 3 mill. kr å utvikle og forventes å gi inntekter i 5 år. Regnskapsloven sier lite om dette spesifikt. Hvordan hjelper god regnskapsskikk?',
      solution: `**Problemet:** Skal utviklingskostnadene utgiftsføres med en gang, eller kan de aktiveres som en eiendel og avskrives over levetiden?

**Regnskapsloven:** Gir generelle prinsipper om aktivering av eiendeler, men sier lite spesifikt om egenutviklet programvare.

**God regnskapsskikk (NRS 19 Immaterielle eiendeler):**
- Forskning skal alltid utgiftsføres
- Utvikling kan aktiveres dersom bestemte vilkår er oppfylt:
  * Det er teknisk mulig å fullføre prosjektet
  * Det er intensjon om å bruke eller selge det
  * Fremtidige inntekter er sannsynlige
  * Kostnadene kan måles pålitelig

**Løsning:** Dersom vilkårene er oppfylt, kan selskapet aktivere 3 mill. kr og avskrive over 5 år (600 000 kr per år). Uten NRS 19 hadde svaret vært uklart.`,
    },
    {
      id: 'rr-1-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-1-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvorfor er god regnskapsskikk nødvendig i tillegg til regnskapsloven?',
        options: [
          { id: 'a', text: 'Fordi regnskapsloven er utdatert og bør erstattes', isCorrect: false },
          { id: 'b', text: 'Fordi loven gir et rammeverk, mens god regnskapsskikk fyller det med detaljerte løsninger', isCorrect: true },
          { id: 'c', text: 'Fordi god regnskapsskikk kun gjelder for børsnoterte selskaper', isCorrect: false },
          { id: 'd', text: 'Fordi regnskapsloven er frivillig å følge', isCorrect: false },
        ],
        solution: 'Regnskapsloven gir de grunnleggende prinsippene og rammene, men kan ikke dekke alle tenkelige regnskapsmessige problemstillinger i detalj. God regnskapsskikk, konkretisert gjennom NRS-standarder, fyller dette rommet med spesifikke løsninger for ulike typer transaksjoner og hendelser.',
      },
    },

    // BLOCK 2: NRS og IFRS
    {
      id: 'rr-1-3-def-2',
      type: 'definition',
      title: 'NRS og IFRS',
      content: `**NRS (Norsk RegnskapsStiftelse):**
NRS er et privatrettslig organ som utsteder norske regnskapsstandarder. Standardene konkretiserer god regnskapsskikk og er i praksis bindende for norske foretak som ikke bruker IFRS. Eksempler: NRS 5 (Skatt), NRS 13 (Usikre forpliktelser), NRS 19 (Immaterielle eiendeler).

**IFRS (International Financial Reporting Standards):**
IFRS er et internasjonalt regnskapsrammeverk utstedt av IASB (International Accounting Standards Board). I Norge er IFRS:
- **Påbudt** for børsnoterte selskaper (konsernregnskapet)
- **Tillatt** som alternativ til NRS for andre regnskapspliktige foretak

**Hovedforskjeller:**
- NRS er tilpasset norske forhold og er enklere for mindre bedrifter
- IFRS er mer detaljert og prinsippbasert, med større vekt på virkelig verdi
- IFRS krever mer omfattende noteopplysninger`,
    },
    {
      id: 'rr-1-3-example-2',
      type: 'example',
      title: 'NRS vs. IFRS i praksis',
      problem: 'Et norsk børsnotert selskap og et lite norsk AS eier begge en tomt de kjøpte for 5 mill. kr for ti år siden. Tomten har nå en markedsverdi på 12 mill. kr. Hvordan behandles dette regnskapsmessig?',
      solution: `**Det lille AS-et (NRS/god regnskapsskikk):**
- Tomten føres i balansen til anskaffelseskost: 5 mill. kr
- Tomter avskrives normalt ikke (ubestemt levetid)
- Verdiøkningen på 7 mill. kr vises ikke i regnskapet
- Begrunnelse: Forsiktighetsprinsippet – urealisert gevinst inntektsføres ikke

**Det børsnoterte selskapet (IFRS – IAS 40):**
- Kan velge å måle investeringseiendommer til virkelig verdi
- Tomten kan føres til 12 mill. kr i balansen
- Verdiøkningen på 7 mill. kr resultatføres
- Begrunnelse: IFRS vektlegger beslutningsrelevant informasjon

**Viktig forskjell:** Samme eiendel, samme situasjon, men ulik regnskapsmessig behandling avhengig av regnskapsstandard. IFRS gir et mer oppdatert bilde av verdien, mens NRS gir et mer forsiktig bilde.`,
    },
    {
      id: 'rr-1-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-1-3-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvem er påbudt å bruke IFRS i Norge?',
        options: [
          'Alle aksjeselskaper',
          'Alle foretak med mer enn 50 ansatte',
          'Børsnoterte selskaper (konsernregnskapet)',
          'Bare foretak som handler med utlandet',
        ],
        solution: 'Børsnoterte selskaper (konsernregnskapet)',
        explanation: 'I Norge er det obligatorisk for børsnoterte selskaper å utarbeide konsernregnskapet etter IFRS. Andre foretak kan velge å bruke IFRS, men det er ikke påbudt for dem.',
      },
    },
    {
      id: 'rr-1-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-1-3-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar med egne ord hva «god regnskapsskikk» betyr. Hvorfor er det en dynamisk standard, og gi et eksempel på hvordan den kan endre seg over tid.',
        solution: `**God regnskapsskikk** betyr at regnskapet skal utarbeides i samsvar med regnskapsloven, regnskapsstandarder fra NRS, anerkjent teori og praksis. Det er spillereglene som utfyller lovens rammeverk.

**Dynamisk standard:** God regnskapsskikk er ikke statisk – den endrer seg i takt med utviklingen i næringslivet, ny regnskapsteori, og internasjonale impulser (særlig fra IFRS).

**Eksempel:** Kryptovaluta. Da regnskapsloven ble vedtatt i 1998, fantes ikke Bitcoin. Etter hvert som bedrifter begynte å handle med kryptovaluta, oppsto spørsmål om regnskapsmessig behandling. God regnskapsskikk utvikler seg for å håndtere slike nye problemstillinger – NRS kan utstede veiledninger, og praksis dannes gradvis blant revisorer og regnskapsførere.`,
      },
    },

    // SUMMARY
    {
      id: 'rr-1-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **God regnskapsskikk (GRS)** er en rettslig standard som krever at regnskapet utarbeides i samsvar med lov, standarder, teori og praksis.
- GRS er en **dynamisk standard** som utvikler seg over tid gjennom nye regnskapsstandarder og bransjepraksis.
- **NRS** utsteder norske regnskapsstandarder som konkretiserer god regnskapsskikk.
- **IFRS** er et internasjonalt rammeverk som er påbudt for børsnoterte selskaper og frivillig for andre.
- NRS er enklere og tilpasset norske forhold; IFRS er mer detaljert med vekt på virkelig verdi.
- Rettskildehierarkiet: Regnskapslov → NRS-standarder → Teori/praksis → Internasjonal påvirkning.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rr-1-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-1-3-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er NRS?',
        options: [
          'Norges Revisorforening',
          'Norsk RegnskapsStiftelse – utsteder norske regnskapsstandarder',
          'Det norske finanstilsynet for regnskap',
          'En internasjonal regnskapsstandard',
        ],
        solution: 'Norsk RegnskapsStiftelse – utsteder norske regnskapsstandarder',
        explanation: 'NRS (Norsk RegnskapsStiftelse) er et privatrettslig organ som utsteder regnskapsstandarder i Norge. Standardene konkretiserer god regnskapsskikk og er i praksis bindende for foretak som ikke bruker IFRS.',
      },
    },
    {
      id: 'rr-1-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-1-3-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Drøft fordeler og ulemper med at Norge har to regnskapssystemer: NRS for de fleste foretak og IFRS for børsnoterte. Kunne vi klart oss med bare ett system?',
        hints: [
          'Tenk på kostnader vs. informasjonsverdi for ulike typer foretak.',
          'Vurder behovet for sammenlignbarhet internasjonalt.',
        ],
        solution: `**Fordeler med to systemer:**
- NRS er enklere og billigere for små og mellomstore bedrifter – redusert rapporteringsbyrde
- IFRS gir børsnoterte selskaper internasjonal sammenlignbarhet – viktig for utenlandske investorer
- Skreddersydd regulering: Kravene tilpasses brukernes faktiske informasjonsbehov

**Ulemper med to systemer:**
- Dobbelt sett med regler å holde seg oppdatert på for regnskapsførere og revisorer
- Overgang fra NRS til IFRS (ved børsnotering) kan være krevende og kostbar
- Forskjeller i regnskapsmessig behandling gjør sammenligning mellom NRS- og IFRS-foretak vanskelig

**Bare ett system?**
- Bare IFRS: For kostbart og komplekst for små bedrifter
- Bare NRS: Ikke tilstrekkelig for internasjonale investorer som forventer IFRS
- Konklusjon: To systemer er en fornuftig løsning som balanserer ulike behov.`,
      },
    },
    {
      id: 'rr-1-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rr-1-3-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Forklar rettskildehierarkiet i norsk regnskap. Hvorfor står regnskapsloven øverst, og hvilken rolle har NRS-standardene?',
        solution: `**Rettskildehierarkiet i norsk regnskap:**

1. **Regnskapsloven** – overordnet lov vedtatt av Stortinget. Setter de grunnleggende rammene og prinsippene. Alle regnskapspliktige må følge loven.

2. **Regnskapsstandarder fra NRS** – konkretiserer lovens krav. Har ikke lovstatus, men er i praksis bindende fordi regnskapsloven krever at regnskapet følger «god regnskapsskikk», og NRS-standardene er den viktigste kilden til hva god regnskapsskikk innebærer.

3. **Anerkjent regnskapsteori og praksis** – supplerer der verken lov eller standard gir klare svar. Inkluderer lærebøker, fagartikler og etablert bransjepraksis.

4. **Internasjonal påvirkning (IFRS)** – veiledende for norsk praksis, og NRS-standardene er i stor grad harmonisert med IFRS.

**Hvorfor loven øverst:** Loven er vedtatt av Stortinget og har demokratisk legitimitet. NRS-standardene er utstedt av et privat organ og kan ikke gå utover lovens rammer.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'God regnskapsskikk (GRS)', definition: 'Rettslig standard som krever at regnskapet følger lov, standarder, teori og praksis.' },
    { term: 'NRS', definition: 'Norsk RegnskapsStiftelse – utsteder norske regnskapsstandarder som konkretiserer god regnskapsskikk.' },
    { term: 'IFRS', definition: 'International Financial Reporting Standards – internasjonalt rammeverk påbudt for børsnoterte selskaper.' },
    { term: 'IASB', definition: 'International Accounting Standards Board – organet som utsteder IFRS-standardene.' },
    { term: 'Rettslig standard', definition: 'Juridisk begrep som fylles med innhold gjennom praksis, teori og skjønn, og som utvikler seg over tid.' },
  ],
};

// ============================================================================
// KAPITTEL 1.4: Grunnleggende regnskapsprinsipper
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_1_4: TextbookChapter = {
  id: 'regnskap-revisjon-1-4',
  courseId: 'regnskap-revisjon',
  chapterNumber: '1.4',
  title: 'Grunnleggende regnskapsprinsipper',
  description: 'Transaksjonsprinsippet, opptjeningsprinsippet, sammenstillingsprinsippet, forsiktighetsprinsippet og kongruensprinsippet.',
  estimatedMinutes: 24,
  competenceGoals: [
    'Forstå og kunne forklare de grunnleggende regnskapsprinsippene i regnskapsloven kapittel 4',
    'Kunne anvende prinsippene på praktiske regnskapsmessige problemstillinger',
    'Kjenne til samspillet mellom prinsippene og eventuelle konflikter',
  ],
  content: [
    // INTRO
    {
      id: 'rr-1-4-intro',
      type: 'text',
      content: `## Grunnleggende regnskapsprinsipper

Regnskapsloven kapittel 4 inneholder de grunnleggende regnskapsprinsippene som alle regnskapspliktige foretak må følge. Disse prinsippene er selve «grammatikken» i regnskapet. I dette kapittelet skal du lære om:

- **Transaksjonsprinsippet** – hva som skal bokføres
- **Opptjeningsprinsippet** – når inntekt skal regnskapsføres
- **Sammenstillingsprinsippet** – kobling mellom inntekt og kostnad
- **Forsiktighetsprinsippet** – forsiktighet i verdsettelse
- **Kongruensprinsippet** – alle resultatposter via resultatregnskapet

Prinsippene utgjør fundamentet for god regnskapsskikk, og det er avgjørende at du forstår dem godt for å kunne arbeide med regnskap og revisjon.`,
    },

    // BLOCK 1: Transaksjonsprinsippet og opptjeningsprinsippet
    {
      id: 'rr-1-4-def-1',
      type: 'definition',
      title: 'Transaksjonsprinsippet (regnskapsloven § 4-1 første ledd nr. 1)',
      content: `**Transaksjonsprinsippet** innebærer at transaksjoner skal regnskapsføres til verdien av vederlaget på transaksjonstidspunktet.

**Hva betyr dette i praksis?**
- Bare faktiske transaksjoner (kjøp, salg, bytte, overføringer) skal bokføres
- Verdien som registreres er det som faktisk ble avtalt mellom partene
- Verdiendringer som ikke bygger på en transaksjon (f.eks. at en eiendom øker i verdi) skal normalt ikke inntektsføres
- Transaksjonene skal dokumenteres med bilag`,
    },
    {
      id: 'rr-1-4-def-2',
      type: 'definition',
      title: 'Opptjeningsprinsippet (regnskapsloven § 4-1 første ledd nr. 2)',
      content: `**Opptjeningsprinsippet** innebærer at inntekt skal resultatføres når den er opptjent.

**Når er inntekten opptjent?**
- Ved salg av varer: Når risiko og kontroll er overført til kjøper (normalt ved levering)
- Ved salg av tjenester: Etter hvert som tjenesten utføres
- Ikke nødvendigvis når betalingen mottas – inntekten kan opptjenes før, samtidig med, eller etter betaling`,
    },
    {
      id: 'rr-1-4-example-1',
      type: 'example',
      title: 'Transaksjon og opptjening i praksis',
      problem: 'En konsulentbedrift inngår en kontrakt 1. november om å levere en rapport innen 31. januar neste år. Kontraktsverdien er 200 000 kr. Konsulentene arbeider 50 % i november–desember og 50 % i januar. Kunden betaler ved levering i januar. Når skal inntekten inntektsføres?',
      solution: `**Analyse:**

**Transaksjonsprinsippet:** Det foreligger en reell transaksjon (kontrakt er inngått). Verdien er 200 000 kr.

**Opptjeningsprinsippet:** Inntekten opptjenes etter hvert som tjenesten utføres:
- November–desember (regnskapsår 1): 50 % av arbeidet er utført → 100 000 kr er opptjent
- Januar (regnskapsår 2): 50 % av arbeidet utføres → 100 000 kr opptjenes

**Bokføring regnskapsår 1 (november–desember):**
- Debet Opptjent, ikke fakturert inntekt: 100 000 kr (eiendel)
- Kredit Salgsinntekt: 100 000 kr

**Bokføring regnskapsår 2 (januar – ved levering og fakturering):**
- Debet Kundefordringer: 200 000 kr
- Kredit Opptjent, ikke fakturert inntekt: 100 000 kr
- Kredit Salgsinntekt: 100 000 kr

**Viktig:** Betalingstidspunktet (januar) er ikke avgjørende for inntektsføringen. Det avgjørende er når arbeidet er utført.`,
    },
    {
      id: 'rr-1-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-1-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Etter opptjeningsprinsippet, når skal en varesalgsinntekt normalt inntektsføres?',
        options: [
          'Når kunden bestiller varene',
          'Når varene er levert og risiko er overført til kjøperen',
          'Når kunden betaler fakturaen',
          'Når varene er produsert og klare for salg',
        ],
        solution: 'Når varene er levert og risiko er overført til kjøperen',
        explanation: 'Opptjeningsprinsippet sier at inntekten skal resultatføres når den er opptjent. For varesalg er dette normalt ved levering, når risiko og kontroll over varene overføres til kjøperen. Bestilling eller produksjon er for tidlig, og betaling kan komme lenge etter opptjening.',
      },
    },

    // BLOCK 2: Sammenstillingsprinsippet og forsiktighetsprinsippet
    {
      id: 'rr-1-4-def-3',
      type: 'definition',
      title: 'Sammenstillingsprinsippet (regnskapsloven § 4-1 første ledd nr. 3)',
      content: `**Sammenstillingsprinsippet** (også kalt matchingprinsippet) innebærer at utgifter skal kostnadsføres i samme periode som den tilhørende inntekten.

**Hva betyr dette?**
- Kostnader knyttes til de inntektene de har generert
- Varekostnaden for solgte varer kostnadsføres i samme periode som salgsinntekten
- Provisjon til selger kostnadsføres i perioden salget skjer
- Avskrivninger fordeler kostnaden over eiendelens levetid`,
    },
    {
      id: 'rr-1-4-def-4',
      type: 'definition',
      title: 'Forsiktighetsprinsippet (regnskapsloven § 4-1 første ledd nr. 4)',
      content: `**Forsiktighetsprinsippet** innebærer at urealisert tap skal resultatføres, mens urealisert gevinst ikke skal resultatføres.

**I praksis betyr dette:**
- **Tap:** Bokfør straks du vet om det, selv om det ikke er realisert ennå (f.eks. nedskrivning av varelager)
- **Gevinst:** Vent med å bokføre til den er realisert gjennom en transaksjon
- Regnskapet skal ikke gi et for optimistisk bilde av virksomheten
- Ved usikkerhet velges den løsningen som gir lavest resultat og lavest verdier`,
    },
    {
      id: 'rr-1-4-example-2',
      type: 'example',
      title: 'Sammenstilling og forsiktighet',
      problem: 'En butikk kjøpte inn varer for 300 000 kr i oktober. I desember er 200 000 kr av varene solgt for 350 000 kr. De resterende varene (innkjøpsverdi 100 000 kr) har falt i verdi og kan nå bare selges for 60 000 kr. Hvordan behandles dette regnskapsmessig?',
      solution: `**Sammenstillingsprinsippet (solgte varer):**
- Salgsinntekt: 350 000 kr (inntektsføres i desember)
- Varekostnad: 200 000 kr (kostnadsføres i desember – matches med inntekten)
- Bruttofortjeneste: 150 000 kr

**Forsiktighetsprinsippet (usolgte varer):**
- Innkjøpsverdi: 100 000 kr
- Netto salgsverdi: 60 000 kr
- Verdinedgang: 40 000 kr (urealisert tap)
- Varene nedskrives til 60 000 kr i balansen
- Nedskrivningen på 40 000 kr kostnadsføres umiddelbart

**Samlet resultateffekt i desember:**
- Salgsinntekt: 350 000 kr
- Varekostnad solgte varer: −200 000 kr
- Nedskrivning varelager: −40 000 kr
- **Resultat: 110 000 kr**

**Merk:** Hadde de usolgte varene steget i verdi (f.eks. til 130 000 kr), ville vi etter forsiktighetsprinsippet ikke bokført den urealiserte gevinsten på 30 000 kr. Varene ville stått til kostpris 100 000 kr.`,
    },
    {
      id: 'rr-1-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-1-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En bedrift eier en maskin kjøpt for 500 000 kr. Markedsverdien har steget til 600 000 kr. Etter forsiktighetsprinsippet, hva skal maskinen stå til i balansen?',
        options: [
          { id: 'a', text: '600 000 kr (markedsverdi)', isCorrect: false },
          { id: 'b', text: '500 000 kr minus akkumulerte avskrivninger', isCorrect: true },
          { id: 'c', text: '550 000 kr (gjennomsnitt)', isCorrect: false },
          { id: 'd', text: '600 000 kr minus avskrivninger', isCorrect: false },
        ],
        solution: 'Etter forsiktighetsprinsippet skal urealisert gevinst ikke resultatføres. Maskinen står til anskaffelseskost (500 000 kr) fratrukket akkumulerte avskrivninger. Verdiøkningen på 100 000 kr er en urealisert gevinst som ikke bokføres etter norsk GRS.',
      },
    },

    // BLOCK 3: Kongruensprinsippet
    {
      id: 'rr-1-4-def-5',
      type: 'definition',
      title: 'Kongruensprinsippet (regnskapsloven § 4-3)',
      content: `**Kongruensprinsippet** innebærer at alle inntekter og kostnader skal resultatføres – det vil si gå via resultatregnskapet. Endringer i egenkapitalen som ikke skyldes kapitalinnskudd eller uttak (utbytte), skal vises i resultatregnskapet.

**I praksis betyr dette:**
- Ingen poster skal føres direkte mot egenkapitalen uten å passere resultatregnskapet
- Sikrer at resultatregnskapet gir et komplett bilde av periodens resultat
- Det finnes unntak, blant annet for virkning av endring av regnskapsprinsipp (som kan føres direkte mot egenkapitalen)`,
    },
    {
      id: 'rr-1-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-1-4-oppg-3',
        number: '3',
        type: 'classic',
        task: 'En bedrift har oppdaget en feil i fjorårets regnskap: En kostnad på 150 000 kr ble ikke bokført. Forklar hvordan kongruensprinsippet påvirker behandlingen av denne feilen.',
        hints: [
          'Tenk på om korrigeringen skal gå via årets resultatregnskap eller føres direkte mot egenkapitalen.',
        ],
        solution: `**Kongruensprinsippet:** Alle inntekter og kostnader skal gå via resultatregnskapet.

**Behandling av feilen:**
Etter kongruensprinsippet skal korrigeringen av fjorårets feil i utgangspunktet resultatføres i inneværende år. Kostnaden på 150 000 kr bokføres som en kostnad i år.

**Unntak:** Dersom feilen er vesentlig, kan den etter NRS 5 (Endring av regnskapsprinsipp, korrigering av feil) føres direkte mot egenkapitalen som en virkning av feilkorrigering. Dette er et unntak fra kongruensprinsippet.

**Praktisk betydning:**
- Mindre feil: Korrigeres over resultatregnskapet i oppdagelsesåret (kongruensprinsippet følges)
- Vesentlige feil: Kan føres direkte mot egenkapitalen (unntak fra kongruensprinsippet)
- Formålet med unntaket er å unngå at vesentlige feil fra tidligere år forvrenger årets resultat.`,
      },
    },

    // SUMMARY
    {
      id: 'rr-1-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Transaksjonsprinsippet:** Transaksjoner bokføres til verdien av vederlaget på transaksjonstidspunktet. Bare reelle transaksjoner registreres.
- **Opptjeningsprinsippet:** Inntekter resultatføres når de er opptjent, uavhengig av betalingstidspunkt.
- **Sammenstillingsprinsippet:** Kostnader knyttes til og resultatføres i samme periode som tilhørende inntekter.
- **Forsiktighetsprinsippet:** Urealisert tap bokføres straks, urealisert gevinst bokføres ikke. Regnskapet skal ikke være for optimistisk.
- **Kongruensprinsippet:** Alle resultatposter skal gå via resultatregnskapet – med enkelte unntak for vesentlige feil og prinsippendringer.
- Prinsippene kan komme i konflikt: F.eks. kan forsiktighetsprinsippet kreve nedskrivning som bryter med sammenstillingen.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rr-1-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-1-4-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket prinsipp sier at kostnader skal bokføres i samme periode som tilhørende inntekter?',
        options: [
          'Transaksjonsprinsippet',
          'Opptjeningsprinsippet',
          'Sammenstillingsprinsippet',
          'Forsiktighetsprinsippet',
        ],
        solution: 'Sammenstillingsprinsippet',
        explanation: 'Sammenstillingsprinsippet (matching) krever at kostnader matches med de inntektene de har bidratt til å generere, og bokføres i samme periode. For eksempel skal varekostnaden for solgte varer bokføres i perioden salget skjer.',
      },
    },
    {
      id: 'rr-1-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-1-4-oppg-5',
        number: '5',
        type: 'classic',
        task: 'En byggentreprenør har et prosjekt som strekker seg over tre år. Kontraktsverdien er 30 mill. kr. Etter to år er 60 % av arbeidet utført. Forklar hvilke regnskapsprinsipper som er relevante, og skisser hvordan inntekten bør fordeles over de tre årene.',
        solution: `**Relevante prinsipper:**

**Opptjeningsprinsippet:** Inntekten skal resultatføres etter hvert som den opptjenes. For langvarige prosjekter innebærer dette løpende avregning (prosent-av-fullføringsgrad).

**Sammenstillingsprinsippet:** Kostnadene som påløper knyttet til arbeidet i hver periode, matches med den opptjente inntekten.

**Transaksjonsprinsippet:** Kontraktsverdien på 30 mill. kr er transaksjonens totale vederlag.

**Fordeling av inntekt:**
- År 1: Sett at 25 % er utført → 7,5 mill. kr inntektsføres
- År 2: 35 % utført i år 2 (totalt 60 %) → 10,5 mill. kr inntektsføres
- År 3: 40 % gjenstår → 12 mill. kr inntektsføres
- Totalt: 30 mill. kr

Kostnadene fordeles tilsvarende: Kostnadene som er påløpt i hver periode kostnadsføres mot den opptjente inntekten. Dette gir et rettvisende bilde av resultatutviklingen gjennom prosjektperioden.`,
      },
    },
    {
      id: 'rr-1-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rr-1-4-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Drøft forholdet mellom opptjeningsprinsippet og forsiktighetsprinsippet. Kan de komme i konflikt? Gi et eksempel.',
        hints: [
          'Tenk på hva som skjer med et prosjekt der inntekten er opptjent, men det er usikkert om kunden kan betale.',
        ],
        solution: `**Forholdet:**
Opptjeningsprinsippet sier at inntekt skal bokføres når den er opptjent. Forsiktighetsprinsippet sier at man skal være forsiktig og ikke overvurdere inntekter.

**Potensiell konflikt:**
Ja, prinsippene kan komme i konflikt. Opptjeningsprinsippet kan tilsi at en inntekt skal bokføres, mens forsiktighetsprinsippet tilsier at man bør vente.

**Eksempel:**
Et konsulentfirma har utført arbeid for 500 000 kr for en kunde som har alvorlige betalingsproblemer. Etter opptjeningsprinsippet er inntekten opptjent (arbeidet er utført). Men etter forsiktighetsprinsippet bør man ta hensyn til at pengene kanskje aldri kommer inn.

**Løsning i praksis:**
- Inntekten inntektsføres (opptjeningsprinsippet)
- Samtidig nedskrives kundefordringen med en tapsavsetning (forsiktighetsprinsippet)
- Netto effekt: Inntekten bokføres, men det gjøres en avsetning for forventet tap
- Begge prinsippene ivaretas gjennom denne «to-trinns»-tilnærmingen.`,
      },
    },
    {
      id: 'rr-1-4-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'rr-1-4-oppg-7',
        number: '7',
        type: 'multiple-choice',
        task: 'En bedrift har en urealisert kursgevinst på en utenlandsk fordring. Hva sier forsiktighetsprinsippet?',
        options: [
          'Gevinsten skal inntektsføres umiddelbart',
          'Gevinsten skal ikke resultatføres før den er realisert',
          'Gevinsten skal fordeles over flere år',
          'Gevinsten skal føres direkte mot egenkapitalen',
        ],
        solution: 'Gevinsten skal ikke resultatføres før den er realisert',
        explanation: 'Forsiktighetsprinsippet sier at urealisert gevinst ikke skal resultatføres. Kursgevinsten er urealisert så lenge fordringen ikke er innfridd. Først ved realisering (dvs. innbetaling) kan gevinsten bokføres.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Transaksjonsprinsippet', definition: 'Transaksjoner registreres til verdien av vederlaget på transaksjonstidspunktet.' },
    { term: 'Opptjeningsprinsippet', definition: 'Inntekter resultatføres når de er opptjent, uavhengig av betalingstidspunkt.' },
    { term: 'Sammenstillingsprinsippet', definition: 'Kostnader matches med tilhørende inntekter og bokføres i samme periode.' },
    { term: 'Forsiktighetsprinsippet', definition: 'Urealisert tap bokføres straks, urealisert gevinst bokføres ikke.' },
    { term: 'Kongruensprinsippet', definition: 'Alle resultatposter skal gå via resultatregnskapet, med enkelte unntak.' },
  ],
};

// ============================================================================
// KAPITTEL 1.5: Regnskapssystemer og digitalisering
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_1_5: TextbookChapter = {
  id: 'regnskap-revisjon-1-5',
  courseId: 'regnskap-revisjon',
  chapterNumber: '1.5',
  title: 'Regnskapssystemer og digitalisering',
  description: 'Regnskapsprogram, ERP-systemer, SAF-T, digital bokføring og automasjon i regnskapsbransjen.',
  estimatedMinutes: 22,
  competenceGoals: [
    'Kjenne til ulike typer regnskapssystemer og ERP-løsninger',
    'Forstå SAF-T-formatet og dets betydning for kontroll og rapportering',
    'Forstå hvordan digitalisering endrer regnskapsbransjen',
  ],
  content: [
    // INTRO
    {
      id: 'rr-1-5-intro',
      type: 'text',
      content: `## Regnskapssystemer og digitalisering

Moderne regnskap er uløselig knyttet til teknologi. Manuell bokføring med penn og papir er historie – i dag bruker alle virksomheter digitale verktøy. I dette kapittelet skal du lære:

- Hva regnskapsprogram og ERP-systemer er
- Hva SAF-T er og hvorfor det ble innført
- Hvordan digital bokføring fungerer i praksis
- Hvordan automasjon og kunstig intelligens endrer bransjen

Digitalisering handler ikke bare om å erstatte papir med datamaskiner. Det endrer fundamentalt hvordan regnskap produseres, kontrolleres og brukes.`,
    },

    // BLOCK 1: Regnskapsprogram
    {
      id: 'rr-1-5-def-1',
      type: 'definition',
      title: 'Regnskapsprogram',
      content: `Et **regnskapsprogram** (også kalt økonomisystem) er en programvare som brukes til å registrere transaksjoner, føre regnskap og produsere økonomiske rapporter.

**Vanlige funksjoner:**
- Bokføring (hovedbok, dagbok, reskontro)
- Fakturering og kundeoppfølging
- Lønn og personaladministrasjon
- MVA-rapportering
- Årsavslutning og regnskapsrapporter

**Eksempler på norske regnskapsprogram:**
- Visma Business / Tripletex / eAccounting
- PowerOffice Go
- Fiken (for småbedrifter)
- Xledger (skybasert for mellomstore)
- SAP / Microsoft Dynamics (for store foretak)`,
    },
    {
      id: 'rr-1-5-text-erp',
      type: 'text',
      title: 'ERP-systemer',
      content: `### Fra regnskapsprogram til ERP

Mange bedrifter bruker i dag **ERP-systemer** (Enterprise Resource Planning) i stedet for rene regnskapsprogram. Et ERP-system integrerer alle forretningsprosesser i én løsning.

**Hva dekker et ERP-system?**
- Regnskap og økonomi
- Innkjøp og varelager
- Salg og kundebehandling (CRM)
- Produksjon og logistikk
- HR og lønn
- Prosjektstyring

**Fordeler med ERP:**
- Alle avdelinger jobber i samme system
- Data registreres én gang og gjenbrukes
- Automatisering av rutineoppgaver
- Bedre rapportering og beslutningsgrunnlag
- Færre feil ved manuell overføring mellom systemer

**Ulemper:**
- Kostbart å innføre og vedlikeholde
- Komplekst – krever opplæring
- Avhengighet av én leverandør (vendor lock-in)`,
    },
    {
      id: 'rr-1-5-example-1',
      type: 'example',
      title: 'ERP i praksis',
      problem: 'En industribedrift bruker et ERP-system. En kunde bestiller 100 enheter av et produkt. Beskriv hvordan ordren flyter gjennom ERP-systemet.',
      solution: `**Ordreflyt gjennom ERP-systemet:**

**1. Salgsmodulen:**
Selgeren registrerer ordren. Systemet sjekker automatisk kundens kredittgrense og leveringsbetingelser.

**2. Lagermodulen:**
Systemet sjekker lagerbeholdning. Hvis det er nok på lager, reserveres varene. Hvis ikke, genereres et produksjons- eller innkjøpsbehov.

**3. Produksjonsmodulen:**
Hvis varene må produseres, opprettes en produksjonsordre med stykkliste og arbeidsplan.

**4. Logistikkmodulen:**
Når varene er klare, planlegges plukking, pakking og transport.

**5. Regnskapsmodulen:**
Ved levering genereres automatisk:
- Salgsfaktura til kunden (debet kundefordring, kredit salgsinntekt)
- Varekostnad bokføres (debet varekostnad, kredit varelager)
- MVA beregnes automatisk

**6. Oppfølging:**
Systemet overvåker forfall og purrer automatisk ved manglende betaling.

**Poeng:** Alt dette skjer i ett integrert system – ingen manuell overføring mellom separate programmer.`,
    },
    {
      id: 'rr-1-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rr-1-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom et regnskapsprogram og et ERP-system?',
        options: [
          'Et regnskapsprogram er gratis, mens ERP koster penger',
          'Et ERP-system integrerer alle forretningsprosesser, mens et regnskapsprogram kun dekker økonomi',
          'Et regnskapsprogram brukes av store selskaper, mens ERP brukes av små',
          'Det er ingen vesentlig forskjell',
        ],
        solution: 'Et ERP-system integrerer alle forretningsprosesser, mens et regnskapsprogram kun dekker økonomi',
        explanation: 'ERP (Enterprise Resource Planning) integrerer alle forretningsprosesser – regnskap, innkjøp, salg, produksjon, HR osv. – i ett system. Et rent regnskapsprogram dekker primært økonomi og regnskap.',
      },
    },

    // BLOCK 2: SAF-T
    {
      id: 'rr-1-5-def-2',
      type: 'definition',
      title: 'SAF-T (Standard Audit File – Tax)',
      content: `**SAF-T** er et standardisert filformat for utveksling av regnskapsdata. Forkortelsen står for Standard Audit File – Tax.

**Hva er SAF-T?**
- Et XML-basert format som gir en standardisert eksport av regnskapstall
- Innført i Norge fra 1. januar 2020 (obligatorisk for bokføringspliktige som fører regnskap elektronisk)
- Erstatter papir og manuelle uttrekk ved bokettersyn

**Formål:**
- Effektivisere Skatteetatens kontrollarbeid
- Standardisere dataformatet på tvers av ulike regnskapsprogram
- Gjøre det enklere for revisor å analysere regnskapsdata
- Redusere kostnader ved kontroll og revisjon

**Innhold i SAF-T-filen:**
- Kontoplan med saldoer
- Alle hovedbokstransaksjoner
- Kunde- og leverandørreskontro
- MVA-koder og -beløp
- Anleggsmiddelregister`,
    },
    {
      id: 'rr-1-5-example-2',
      type: 'example',
      title: 'SAF-T i praksis',
      problem: 'Skatteetaten har varslet bokettersyn hos Fjordkraft Elektro AS. Tidligere måtte bedriften samle en mengde papirer og dokumenter. Hvordan fungerer det med SAF-T?',
      solution: `**Før SAF-T (gammelt system):**
- Skatteetaten ba om kopi av dagbok, hovedbok, bilag, kontoutskrifter osv.
- Bedriften brukte dager/uker på å samle dokumentasjon
- Formatet varierte fra bedrift til bedrift og regnskapsprogram til regnskapsprogram
- Skatteetaten måtte manuelt analysere data i ulike formater

**Med SAF-T (nåværende system):**
1. Skatteetaten ber om SAF-T-fil for kontrollperioden
2. Bedriften eksporterer filen direkte fra regnskapsprogrammet (noen få tastetrykk)
3. Filen inneholder alle transaksjoner, saldoer og kontoinformasjon i et standardisert format
4. Skatteetaten bruker egne analyseverktøy til å analysere dataen automatisk
5. Avvik og uregelmessigheter identifiseres raskt

**Fordeler:**
- Dramatisk reduksjon i tidsbruk for både bedrift og kontrollør
- Standardisert format gjør analyse enklere og mer effektiv
- Bedriften slipper å fortolke kontrollørens forespørsler
- Kontrollene blir mer presise og konsistente`,
    },
    {
      id: 'rr-1-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rr-1-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med SAF-T?',
        options: [
          { id: 'a', text: 'Å erstatte regnskapsprogrammer', isCorrect: false },
          { id: 'b', text: 'Å standardisere utveksling av regnskapsdata for effektiv kontroll', isCorrect: true },
          { id: 'c', text: 'Å fjerne behovet for revisjon', isCorrect: false },
          { id: 'd', text: 'Å automatisk utarbeide årsregnskapet', isCorrect: false },
        ],
        solution: 'SAF-T standardiserer utveksling av regnskapsdata slik at Skatteetaten, revisorer og andre kontrollører kan analysere data effektivt. Det erstatter ikke regnskapsprogrammet, men gir en standardisert eksportfunksjon.',
      },
    },

    // BLOCK 3: Digital bokføring og automasjon
    {
      id: 'rr-1-5-text-digital',
      type: 'text',
      title: 'Digital bokføring og automasjon',
      content: `### Hvordan digitalisering endrer regnskapet

Regnskapsbransjen gjennomgår en omfattende digital transformasjon:

**Automatisk bilagsbehandling:**
- Inngående fakturaer skannes eller mottas elektronisk (EHF-format)
- OCR-teknologi (optisk tegngjenkjenning) leser fakturainformasjon automatisk
- Systemet foreslår kontering basert på leverandør og historikk
- Regnskapsfører godkjenner i stedet for å taste manuelt

**Bankintegrasjon:**
- Banktransaksjoner hentes automatisk inn i regnskapsprogrammet
- Systemet matcher betalinger med fakturaer
- Bankavstemmingen blir i stor grad automatisert

**Elektronisk fakturering (EHF):**
- Norsk standard for elektronisk fakturaformat
- Obligatorisk ved fakturering til offentlig sektor
- Stadig mer utbredt også mellom private bedrifter
- Fakturaen flyter rett inn i mottakerens system

**Maskinlæring og kunstig intelligens:**
- Automatisk kategorisering av transaksjoner
- Oppdagelse av avvik og mulige feil
- Prediksjon av kontantstrøm
- Chatbots for regnskapsspørsmål

**Konsekvenser for regnskapsbransjen:**
- Rutinearbeid automatiseres → færre manuelle oppgaver
- Regnskapsføreren blir mer rådgiver og kontrollør
- Økt behov for teknologikompetanse
- Revisoren bruker dataanalyse i stedet for stikkprøver`,
    },
    {
      id: 'rr-1-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rr-1-5-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva EHF-faktura er og hvorfor det er en fordel sammenlignet med papirfaktura. Nevn minst tre fordeler.',
        solution: `**EHF-faktura** (Elektronisk Handelsformat) er et standardisert elektronisk fakturaformat utviklet for norsk næringsliv. Fakturaen sendes digitalt fra avsenderens til mottakerens regnskapssystem.

**Fordeler sammenlignet med papirfaktura:**

1. **Raskere prosessering:** Fakturaen flyter direkte inn i mottakerens system uten manuell registrering. Behandlingstiden reduseres fra dager til minutter.

2. **Færre feil:** Ingen manuell tasting betyr ingen tastefeil. Beløp, kontonummer og referanser overføres korrekt automatisk.

3. **Lavere kostnader:** Ingen porto, printing eller papir. Ingen manuell sortering og arkivering.

4. **Bedre likviditetsstyring:** Fakturaene registreres umiddelbart, noe som gir bedre oversikt over forfallende betalinger.

5. **Miljøvennlig:** Papirløs prosess reduserer miljøbelastningen.

6. **Enklere arkivering:** Elektroniske fakturaer lagres digitalt og kan søkes opp raskt. Oppfyller bokføringslovens oppbevaringskrav.`,
      },
    },

    // SUMMARY
    {
      id: 'rr-1-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Regnskapsprogram** er programvare for bokføring og rapportering. Eksempler: Visma, Tripletex, Fiken.
- **ERP-systemer** integrerer alle forretningsprosesser i én løsning: regnskap, innkjøp, salg, produksjon, HR osv.
- **SAF-T** er et obligatorisk, standardisert filformat for utveksling av regnskapsdata, innført fra 2020.
- **EHF** er norsk standard for elektronisk faktura – raskere, billigere og mer pålitelig enn papir.
- Digitalisering endrer regnskapsbransjen: Automatisering av rutinearbeid, bankintegrasjon, maskinlæring og AI.
- Regnskapsførerens rolle beveger seg fra manuell registrering til rådgivning, analyse og kontroll.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rr-1-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rr-1-5-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Fra hvilket år ble SAF-T obligatorisk for bokføringspliktige i Norge?',
        options: [
          '2015',
          '2018',
          '2020',
          '2023',
        ],
        solution: '2020',
        explanation: 'SAF-T ble innført som obligatorisk standard fra 1. januar 2020 for alle bokføringspliktige som fører regnskapet elektronisk. Formålet var å standardisere utveksling av regnskapsdata ved kontroller.',
      },
    },
    {
      id: 'rr-1-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rr-1-5-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan digitalisering og automasjon endrer rollen til regnskapsføreren. Vil regnskapsførere bli overflødige i fremtiden?',
        hints: [
          'Tenk på hvilke oppgaver som kan automatiseres og hvilke som fortsatt krever menneskelig vurdering.',
          'Vurder rådgivning, skjønnsmessige vurderinger og kundekontakt.',
        ],
        solution: `**Oppgaver som automatiseres:**
- Manuell bokføring og kontering
- Bankavstemminger
- MVA-rapportering
- Fakturering og purring
- Enkel lønnsbehandling

**Oppgaver som krever mennesker:**
- Regnskapsfaglige vurderinger og skjønn (f.eks. avsetninger, nedskrivninger)
- Rådgivning til kunder om økonomisk styring
- Skatteplanlegging og -rådgivning
- Komplekse transaksjoner (fusjoner, oppkjøp)
- Kvalitetssikring og kontroll av automatiserte prosesser
- Forklaring og fortolkning av regnskapstall for ledelse og styre

**Konklusjon:**
Regnskapsførere blir ikke overflødige, men rollen endres. Fra å være en som taster tall, blir regnskapsføreren en rådgiver og analytiker. Verdiskapningen flyttes fra rutinearbeid til rådgivning, kontroll og strategisk støtte. De som ikke tilpasser seg den digitale utviklingen, vil imidlertid oppleve at oppgavene forsvinner.`,
      },
    },
    {
      id: 'rr-1-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rr-1-5-oppg-6',
        number: '6',
        type: 'classic',
        task: 'En liten bedrift vurderer om de skal kjøpe et enkelt regnskapsprogram (som Fiken) eller et ERP-system (som SAP Business One). Hvilke faktorer bør bedriften vurdere? Anbefal en løsning for en bedrift med 5 ansatte og 3 mill. kr i omsetning.',
        solution: `**Faktorer å vurdere:**

1. **Bedriftens størrelse og kompleksitet:** Hvor mange ansatte, kunder, produkter? Hvor komplekse er prosessene?
2. **Behov:** Trenger bedriften bare regnskap, eller også innkjøp, lager, produksjon, CRM?
3. **Kostnad:** Lisens, implementering, opplæring, vedlikehold.
4. **Brukervennlighet:** Hvor mye tid kan brukes på opplæring?
5. **Skalerbarhet:** Planlegger bedriften å vokse?
6. **Integrasjon:** Trenger systemet å snakke med andre systemer (nettbutikk, bank)?

**Anbefaling for denne bedriften (5 ansatte, 3 mill. kr):**

**Fiken (eller tilsvarende enkelt regnskapsprogram):**
- Rimelig (fra ca. 300 kr/mnd)
- Brukervennlig – lite opplæring nødvendig
- Dekker kjernebehovet: Bokføring, fakturering, MVA, lønn, årsavslutning
- God bankintegrasjon
- Ikke behov for avansert ERP-funksjonalitet med 5 ansatte

**Ikke SAP Business One:**
- For kostbart (fra 50 000 kr + implementering)
- For komplekst for en bedrift med 5 ansatte
- Overkill – bedriften har ikke behov som rettferdiggjør investeringen

**Konklusjon:** Start enkelt med Fiken eller Tripletex. Vurder ERP først når bedriften vokser og prosessene blir mer komplekse.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Regnskapsprogram', definition: 'Programvare for bokføring, rapportering og regnskapsadministrasjon.' },
    { term: 'ERP', definition: 'Enterprise Resource Planning – integrert system som dekker alle forretningsprosesser i en virksomhet.' },
    { term: 'SAF-T', definition: 'Standard Audit File – Tax. Obligatorisk standardisert filformat for utveksling av regnskapsdata.' },
    { term: 'EHF', definition: 'Elektronisk Handelsformat – norsk standard for elektronisk fakturering.' },
    { term: 'OCR', definition: 'Optisk tegngjenkjenning – teknologi som leser tekst fra bilder eller skannede dokumenter automatisk.' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const REGNSKAP_REVISJON_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_REGNSKAP_REVISJON_1_1,
  CHAPTER_REGNSKAP_REVISJON_1_2,
  CHAPTER_REGNSKAP_REVISJON_1_3,
  CHAPTER_REGNSKAP_REVISJON_1_4,
  CHAPTER_REGNSKAP_REVISJON_1_5,
];
