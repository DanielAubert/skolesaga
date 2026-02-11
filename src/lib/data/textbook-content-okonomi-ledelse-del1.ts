/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og ledelse (VG2) - Del 1: Introduksjon til økonomi og ledelse
 *
 * Kapittel 1.1–1.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for ulike selskapsformer og deres kjennetegn
 * - identifisere og analysere bedriftens interessenter
 * - forklare sammenhengen mellom mål, strategi og handling
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_OKONOMI_LEDELSE_1_1: TextbookChapter = {
  id: 'okonomi-ledelse-1-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '1.1',
  title: 'Hva er økonomi og ledelse?',
  description: 'Introduksjon til fagområdene økonomi og ledelse, sammenhengen mellom dem, og hvorfor de er viktige for enhver virksomhet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'Forstå hva økonomi og ledelse handler om som fagområder',
    'Kjenne til sammenhengen mellom økonomi og ledelse i en bedrift',
    'Kunne forklare grunnleggende økonomiske og ledelsesmessige begreper',
  ],
  content: [
    {
      id: 'ol-1-1-intro',
      type: 'text',
      content: `## Hva er økonomi og ledelse?

Økonomi og ledelse er to fagområder som henger tett sammen i næringslivet. Økonomi dreier seg om hvordan virksomheter forvalter begrensede ressurser, mens ledelse handler om å styre menneskene og prosessene som skaper verdier. Sammen utgjør de kjernen i det å drive en virksomhet.

Faget Økonomi og ledelse gir deg grunnleggende kunnskap om hvordan bedrifter organiseres, styres og utvikles. Enten du drømmer om å starte egen bedrift eller jobbe i en stor organisasjon, er disse kunnskapene avgjørende.`,
    },
    {
      id: 'ol-1-1-def-1',
      type: 'definition',
      title: 'Økonomi',
      content: `Økonomi er læren om hvordan individer, bedrifter og samfunn forvalter knappe ressurser for å dekke behov og ønsker. Ordet kommer fra det greske *oikonomia*, som betyr «husholdningsstyring».`,
    },
    {
      id: 'ol-1-1-example-1',
      type: 'example',
      title: 'Økonomi i hverdagen',
      problem: `En kafé har et månedlig budsjett på 80 000 kr til drift. De må fordele pengene mellom råvarer, lønn, husleie og markedsføring. Hvorfor er dette et økonomisk problem?`,
      solution: `Dette er et økonomisk problem fordi kaféen har **begrensede ressurser** (80 000 kr) og **flere behov** (råvarer, lønn, husleie, markedsføring). De kan ikke bruke ubegrenset på alt, og må derfor gjøre **prioriteringer**.

Hvis de bruker mer på råvarer for å heve kvaliteten, blir det mindre til markedsføring. Hvis de bruker mer på lønn for å tiltrekke dyktige ansatte, kan de måtte kutte andre steder. Hver beslutning har en **alternativkostnad** - verdien av det de gir opp.`,
    },
    {
      id: 'ol-1-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'ol-1-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedårsaken til at økonomi som fag eksisterer?',
        options: [
          'Alle mennesker vil bli rike',
          'Ressursene er knappe mens behovene er ubegrensede',
          'Staten krever at bedrifter fører regnskap',
          'Teknologisk utvikling gjør økonomien komplisert',
        ],
        solution: 'Ressursene er knappe mens behovene er ubegrensede',
        explanation: 'Økonomi som fag oppsto fordi vi har begrensede ressurser (tid, penger, råvarer, arbeidskraft) men tilnærmet ubegrensede behov og ønsker. Denne knappheten tvinger oss til å velge og prioritere.',
      },
    },
    {
      id: 'ol-1-1-def-2',
      type: 'definition',
      title: 'Ledelse',
      content: `Ledelse handler om å påvirke, motivere og koordinere mennesker slik at de arbeider mot felles mål. En leder planlegger, organiserer, styrer og kontrollerer virksomhetens ressurser og aktiviteter.`,
    },
    {
      id: 'ol-1-1-text-2',
      type: 'text',
      content: `### Sammenhengen mellom økonomi og ledelse

Økonomi og ledelse er uatskillelige i praksis. En leder trenger økonomisk forståelse for å ta gode beslutninger, og økonomisk styring krever lederkompetanse for å bli gjennomført.

**Ledelsens rolle i økonomien:**
- Sette økonomiske mål og budsjetter
- Fordele ressurser effektivt
- Følge opp økonomiske resultater
- Ta beslutninger basert på økonomisk informasjon

**Økonomiens rolle i ledelsen:**
- Gi grunnlag for strategiske valg
- Måle effektivitet og produktivitet
- Synliggjøre konsekvenser av ulike valg
- Sikre langsiktig bærekraft for virksomheten`,
    },
    {
      id: 'ol-1-1-example-2',
      type: 'example',
      title: 'Når økonomi og ledelse møtes',
      problem: `En daglig leder i et lite IT-selskap oppdager at lønnskostnadene utgjør 70 % av omsetningen. Hvordan henger økonomi og ledelse sammen i denne situasjonen?`,
      solution: `**Økonomisk analyse:** 70 % lønnskostnader er høyt og kan true lønnsomheten. Daglig leder må forstå tallene, analysere fordelingen og se hva som driver kostnadene.

**Ledelsesutfordring:** Å kutte lønnskostnader betyr enten å si opp ansatte, redusere lønn eller øke omsetningen uten å ansette flere. Alle alternativene krever god ledelse:
- Oppsigelser krever vanskelige samtaler og god prosess
- Omorganisering krever motivasjon og endringsvilje
- Økt omsetning krever strategisk tenkning og at medarbeiderne yter mer

**Sammenhengen:** Det økonomiske problemet (høye lønnskostnader) kan bare løses gjennom god ledelse (motivere ansatte, effektivisere arbeidet, utvikle nye tjenester).`,
    },
    {
      id: 'ol-1-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'ol-1-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken påstand beskriver best sammenhengen mellom økonomi og ledelse?',
        options: [
          'Økonomi handler bare om tall, og ledelse handler bare om mennesker',
          'God ledelse gjør at man ikke trenger å tenke på økonomi',
          'Økonomi og ledelse er uatskillelige fordi gode beslutninger krever begge deler',
          'Ledelse er viktigere enn økonomi i en bedrift',
        ],
        solution: 'Økonomi og ledelse er uatskillelige fordi gode beslutninger krever begge deler',
        explanation: 'Økonomi gir tallgrunnlaget og rammene, mens ledelse sørger for at menneskene jobber mot de riktige målene. En leder som ikke forstår økonomi tar dårlige beslutninger, og økonomiske planer uten god ledelse blir ikke gjennomført.',
      },
    },
    {
      id: 'ol-1-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'ol-1-1-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Gi to eksempler fra virkeligheten der en bedriftsleder trenger både økonomisk kunnskap og lederkompetanse. Forklar hvorfor begge deler er nødvendige.',
        solution: `**Eksempel 1: Budsjettprosessen**
Økonomisk kunnskap trengs for å lage realistiske budsjetter, analysere kostnader og inntekter, og forstå økonomiske prognoser. Lederkompetanse trengs for å involvere medarbeiderne, forankre budsjettet i organisasjonen og motivere alle til å jobbe mot de satte målene.

**Eksempel 2: Lansering av nytt produkt**
Økonomisk kunnskap trengs for å vurdere investeringskostnader, beregne forventet lønnsomhet og sette riktig pris. Lederkompetanse trengs for å koordinere utviklingsteamet, motivere selgerne, håndtere usikkerhet og kommunisere visjonen til hele organisasjonen.

Begge eksemplene viser at økonomiske beslutninger krever menneskelig gjennomføringskraft, og ledelse uten økonomisk forståelse mangler nødvendig beslutningsgrunnlag.`,
      },
    },
    {
      id: 'ol-1-1-text-3',
      type: 'text',
      content: `### Fire grunnleggende ledelsesfunksjoner

Uansett type virksomhet innebærer ledelse fire hoveddimensjoner:

1. **Planlegging** – sette mål og bestemme hvordan de skal nås
2. **Organisering** – fordele oppgaver, ansvar og myndighet
3. **Styring** – lede, motivere og veilede medarbeidere
4. **Kontroll** – følge opp resultater og korrigere avvik

Disse funksjonene kalles gjerne *ledelseshjulet* fordi de gjentar seg i en kontinuerlig syklus.`,
    },
    {
      id: 'ol-1-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'ol-1-1-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken av de fire ledelsesfunksjonene handler om å følge opp resultater og korrigere avvik?',
        options: [
          'Planlegging',
          'Organisering',
          'Styring',
          'Kontroll',
        ],
        solution: 'Kontroll',
        explanation: 'Kontrollfunksjonen handler om å sammenligne faktiske resultater med planlagte mål, identifisere avvik og iverksette korrigerende tiltak. Planlegging handler om å sette mål, organisering om å fordele ansvar, og styring om å motivere medarbeidere.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-1-1-text-samle',
      type: 'text',
      content: `## --- Samleoppgaver ---

Oppgavene under tester din helhetlige forståelse av forholdet mellom økonomi og ledelse.`,
    },
    {
      id: 'ol-1-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'ol-1-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En nystartet bedrift med tre ansatte opplever at salget ikke går som forventet. Daglig leder vurderer å kutte i markedsføringsbudsjettet for å spare penger.\n\na) Hvilke økonomiske forhold bør daglig leder vurdere før hun tar denne beslutningen?\nb) Hvilke ledelsesutfordringer kan oppstå dersom hun kutter i budsjettet?\nc) Foreslå en alternativ løsning som kombinerer god økonomiforståelse og god ledelse.',
        solution: `**a) Økonomiske forhold:**
- Hva har markedsføringen kostet og hva har den gitt tilbake i omsetning?
- Hvor mye kan spares, og er det nok til å utgjøre en forskjell?
- Hva er alternativkostnaden ved å kutte – kan salget falle ytterligere?
- Er det andre kostnader som kan kuttes uten å påvirke inntektene?

**b) Ledelsesutfordringer:**
- Ansatte kan bli usikre på bedriftens fremtid og miste motivasjon
- Den som jobber med markedsføring kan føle seg usynliggjort
- Teamet kan miste troen på at bedriften har en plan

**c) Alternativ løsning:**
Daglig leder kan involvere de ansatte i en felles problemløsning. Sammen kan de analysere hvilke markedsføringskanaler som gir best effekt (økonomisk analyse), og fokusere ressursene der. Samtidig kan hun motivere teamet ved å presentere en tydelig plan fremover (god ledelse). For eksempel kan de skifte fra dyr annonsering til gratis sosiale medier og personlig salg – det sparer penger og engasjerer de ansatte.`,
      },
    },
    {
      id: 'ol-1-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'ol-1-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du er rådgiver for en gründer som skal starte en treningsstudio. Forklar hvilke økonomiske og ledelsesmessige utfordringer hun vil møte det første driftsåret. Bruk begrepene knapphet, alternativkostnad, planlegging og organisering i svaret ditt.',
        solution: `**Økonomiske utfordringer:**

Gründeren vil oppleve **knapphet** på flere områder: begrenset kapital, begrenset tid og begrensede lokaler. Hver krone brukt på utstyr er en krone som ikke kan brukes på markedsføring – det er **alternativkostnaden**.

Konkrete økonomiske utfordringer:
- Høye oppstartskostnader (leie, utstyr, oppussing) før inntektene kommer
- Usikker inntekt de første månedene mens kundebasen bygges opp
- Likviditetsutfordringer: regningene kommer før medlemsinntektene
- Prissetting: for høy pris gir få kunder, for lav pris gir dårlig lønnsomhet

**Ledelsesmessige utfordringer:**

**Planlegging** er avgjørende det første året: hun må sette realistiske mål for antall medlemmer, lage budsjett, planlegge markedsføringsaktiviteter og timeplan for treningstilbudet.

**Organisering** handler om å fordele oppgaver og ansvar: hvem tar imot kunder, hvem holder treningstimer, hvem gjør renhold? Hvis hun ansetter trenere, må hun definere roller og forventninger.

Kombinasjonen av stram økonomi og mange praktiske oppgaver gjør at gründeren må være god på begge deler: forstå tallene og motivere seg selv og eventuelle medarbeidere til å stå på i en krevende oppstartsfase.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Økonomi', definition: 'Læren om forvaltning av knappe ressurser for å dekke behov og ønsker' },
    { term: 'Ledelse', definition: 'Å påvirke, motivere og koordinere mennesker mot felles mål' },
    { term: 'Alternativkostnad', definition: 'Verdien av det beste alternativet man gir opp ved et valg' },
    { term: 'Knapphet', definition: 'Det grunnleggende økonomiske problemet: begrensede ressurser, ubegrensede behov' },
    { term: 'Ledelsesfunksjonene', definition: 'Planlegging, organisering, styring og kontroll' },
  ],
};

export const CHAPTER_OKONOMI_LEDELSE_1_2: TextbookChapter = {
  id: 'okonomi-ledelse-1-2',
  courseId: 'okonomi-ledelse',
  chapterNumber: '1.2',
  title: 'Virksomhetstyper og selskapsformer',
  description: 'Oversikt over ulike selskapsformer i Norge: enkeltpersonforetak, ansvarlig selskap, aksjeselskap og andre organisasjonsformer.',
  estimatedMinutes: 24,
  competenceGoals: [
    'Gjøre rede for ulike selskapsformer og deres kjennetegn',
    'Forstå forskjellen mellom begrenset og ubegrenset ansvar',
    'Kunne vurdere hvilken selskapsform som passer for ulike situasjoner',
  ],
  content: [
    {
      id: 'ol-1-2-intro',
      type: 'text',
      content: `## Virksomhetstyper og selskapsformer

Når noen starter en virksomhet i Norge, må de velge en selskapsform. Valget av selskapsform påvirker alt fra personlig ansvar og skatteforhold til hvordan bedriften styres og finansieres. Det finnes flere ulike selskapsformer, hver med sine fordeler og ulemper.`,
    },
    {
      id: 'ol-1-2-def-1',
      type: 'definition',
      title: 'Selskapsform',
      content: `En selskapsform er den juridiske organiseringen av en virksomhet. Selskapsformen bestemmer blant annet eiernes ansvar, skatteforhold, krav til kapital og hvordan beslutninger tas.`,
    },
    {
      id: 'ol-1-2-text-2',
      type: 'text',
      content: `### Enkeltpersonforetak (ENK)

Enkeltpersonforetak er den enkleste selskapsformen og er eid av én person.

**Kjennetegn:**
- Eieren har **ubegrenset personlig ansvar** for virksomhetens gjeld
- Ingen krav til startkapital
- Overskuddet beskattes som eierens personlige inntekt
- Eieren bestemmer alt selv
- Enkel registrering i Brønnøysundregistrene

**Fordeler:** Enkelt å starte, lave kostnader, full kontroll, enkel skatterapportering.

**Ulemper:** Personlig risiko for all gjeld, kan være vanskelig å få lån, ingen andre å dele ansvar med.`,
    },
    {
      id: 'ol-1-2-example-1',
      type: 'example',
      title: 'Enkeltpersonforetak i praksis',
      problem: `Sara starter et enkeltpersonforetak som frisør. Første år har hun 600 000 kr i inntekter og 200 000 kr i kostnader. Bedriften har også tatt opp et lån på 100 000 kr til utstyr. Hva innebærer det at Sara har ubegrenset personlig ansvar?`,
      solution: `Ubegrenset personlig ansvar betyr at Sara er personlig ansvarlig for **all gjeld** i virksomheten. Hvis frisørsalongen ikke klarer å betale tilbake lånet på 100 000 kr, kan kreditorer kreve pengene fra Saras **private eiendeler** – for eksempel sparepenger, bil eller bolig.

**Overskuddet** på 400 000 kr (600 000 – 200 000) beskattes som Saras personlige inntekt. Det er ingen skille mellom Saras privatøkonomi og virksomhetens økonomi i juridisk forstand.

Fordelen er at Sara beholder hele overskuddet selv og kan ta ut penger fra virksomheten når hun vil.`,
    },
    {
      id: 'ol-1-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'ol-1-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner et enkeltpersonforetak (ENK)?',
        options: [
          'Eieren har begrenset ansvar for gjelden',
          'Det kreves minst 30 000 kr i startkapital',
          'Eieren har ubegrenset personlig ansvar for virksomhetens gjeld',
          'Det må være minst to eiere',
        ],
        solution: 'Eieren har ubegrenset personlig ansvar for virksomhetens gjeld',
        explanation: 'I et enkeltpersonforetak er det ingen juridisk skille mellom eier og virksomhet. Eieren er personlig ansvarlig for all gjeld, men trenger til gjengjeld ingen startkapital og har full kontroll.',
      },
    },
    {
      id: 'ol-1-2-text-3',
      type: 'text',
      content: `### Ansvarlig selskap (ANS og DA)

Ansvarlig selskap er selskapsformer for to eller flere eiere (deltakere).

**ANS – Ansvarlig selskap:**
- Hver deltaker hefter for **hele** selskapets gjeld (solidaransvar)
- Kreditorer kan kreve hele beløpet fra én deltaker

**DA – Delt ansvar:**
- Deltakerne hefter for en **forholdsmessig andel** av gjelden
- Hvis du eier 50 %, hefter du for 50 % av gjelden

**Felles for ANS og DA:**
- Minst to deltakere
- Ingen krav til startkapital
- Selskapsavtale bør lages
- Overskuddet fordeles etter avtale og beskattes hos den enkelte deltaker`,
    },
    {
      id: 'ol-1-2-example-2',
      type: 'example',
      title: 'ANS versus DA',
      problem: `Ole og Kari starter et firma sammen med like eierandeler (50/50). Firmaet får en gjeld på 200 000 kr som det ikke klarer å betale. Hva blir forskjellen dersom selskapet er organisert som ANS versus DA?`,
      solution: `**Hvis ANS (solidaransvar):**
Kreditorer kan kreve hele beløpet – 200 000 kr – fra enten Ole eller Kari. Hvis Ole har mest penger, kan de kreve alt fra ham. Ole må da selv kreve tilbake Karis andel fra henne etterpå.

**Hvis DA (delt ansvar):**
Ole hefter for sin andel: 50 % × 200 000 = 100 000 kr.
Kari hefter for sin andel: 50 % × 200 000 = 100 000 kr.
Kreditorer kan ikke kreve mer enn 100 000 kr fra hver av dem.

**Konklusjon:** DA gir bedre beskyttelse for den enkelte deltaker. ANS innebærer større risiko fordi én deltaker kan bli krevd for hele gjelden.`,
    },
    {
      id: 'ol-1-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'ol-1-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom ANS og DA?',
        options: [
          'ANS har krav til startkapital, DA har ikke det',
          'I ANS hefter hver deltaker for hele gjelden, i DA hefter de for sin andel',
          'ANS kan ha ubegrenset antall deltakere, DA kan bare ha to',
          'ANS betaler mer skatt enn DA',
        ],
        solution: 'I ANS hefter hver deltaker for hele gjelden, i DA hefter de for sin andel',
        explanation: 'I et ANS (ansvarlig selskap) har deltakerne solidaransvar, som betyr at én deltaker kan bli krevd for hele gjelden. I et DA (selskap med delt ansvar) hefter hver deltaker bare for sin forholdsmessige andel.',
      },
    },
    {
      id: 'ol-1-2-text-4',
      type: 'text',
      content: `### Aksjeselskap (AS)

Aksjeselskap er den vanligste selskapsformen for større virksomheter i Norge.

**Kjennetegn:**
- Eierne (aksjonærene) har **begrenset ansvar** – de risikerer kun sin investering
- Krav om minst 30 000 kr i aksjekapital ved stiftelse
- Selskapet er en **egen juridisk person** adskilt fra eierne
- Styret og daglig leder har formelt ansvar for driften
- Strenge krav til regnskap, revisjon og rapportering

**Fordeler:** Begrenset risiko for eierne, lettere å hente kapital, profesjonell struktur.

**Ulemper:** Mer administrasjon, dobbeltbeskatning (selskapsskatt + utbytteskatt), strengere regelverk.`,
    },
    {
      id: 'ol-1-2-def-2',
      type: 'definition',
      title: 'Begrenset ansvar',
      content: `Begrenset ansvar betyr at eierne av et selskap bare risikerer det beløpet de har investert (aksjekapitalen). De kan ikke bli personlig ansvarlige for selskapets gjeld utover dette.`,
    },
    {
      id: 'ol-1-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'ol-1-2-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er minimumskravet til aksjekapital ved stiftelse av et AS?',
        options: [
          '10 000 kr',
          '30 000 kr',
          '50 000 kr',
          '100 000 kr',
        ],
        solution: '30 000 kr',
        explanation: 'Siden 2012 har minstekravet til aksjekapital i et norsk aksjeselskap vært 30 000 kr. Denne kapitalen skal beskytte kreditorene og vise at eierne har lagt inn egne penger.',
      },
    },
    {
      id: 'ol-1-2-text-5',
      type: 'text',
      content: `### Andre selskapsformer

**NUF – Norskregistrert utenlandsk foretak:**
- Et utenlandsk selskap med avdeling i Norge
- Tidligere populært for å unngå krav om aksjekapital, men mindre vanlig i dag

**Samvirkeforetak (SA):**
- Eid av medlemmene, som også er brukere av tjenestene
- Demokratisk styrt: én stemme per medlem
- Eksempler: Coop, TINE, boligbyggelag (OBOS)
- Overskuddet fordeles etter bruk, ikke etter investert kapital

**Stiftelse:**
- Selvstendig formue som er stilt til rådighet for et bestemt formål
- Ingen eiere – stiftelsen eier seg selv
- Eksempler: Sparebankstiftelsen, forskningsstiftelser`,
    },
    {
      id: 'ol-1-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'ol-1-2-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva som menes med at et samvirkeforetak er «demokratisk styrt» og at overskuddet fordeles «etter bruk, ikke etter investert kapital». Bruk Coop som eksempel.',
        solution: `**Demokratisk styrt:** I Coop har hvert medlem én stemme på generalforsamlingen, uansett hvor mye de handler for. En kunde som handler for 5 000 kr har like mye innflytelse som en som handler for 500 000 kr. I et aksjeselskap ville den som eier flest aksjer hatt mest makt.

**Overskudd etter bruk:** I Coop fordeles utbytte (kjøpeutbytte) basert på hvor mye det enkelte medlemmet har handlet, ikke basert på investert kapital. Hvis du har handlet for 50 000 kr og naboen for 25 000 kr, får du dobbelt så mye i kjøpeutbytte. I et aksjeselskap ville utbyttet blitt fordelt etter antall aksjer eid, uavhengig av om du brukte selskapets tjenester.`,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-1-2-text-samle',
      type: 'text',
      content: `## --- Samleoppgaver ---

Test din helhetlige forståelse av selskapsformer.`,
    },
    {
      id: 'ol-1-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'ol-1-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp en tabell som sammenligner ENK, ANS, DA og AS på følgende punkter: antall eiere, krav til startkapital, ansvar for gjeld, og beskatning av overskudd.',
        solution: `| Egenskap | ENK | ANS | DA | AS |
|---|---|---|---|---|
| **Antall eiere** | 1 | Minst 2 | Minst 2 | 1 eller flere |
| **Krav til startkapital** | Ingen | Ingen | Ingen | 30 000 kr |
| **Ansvar for gjeld** | Ubegrenset personlig | Ubegrenset, solidaransvar | Ubegrenset, delt etter andel | Begrenset til aksjekapitalen |
| **Beskatning** | Personlig inntekt | Deltakernes personlige inntekt | Deltakernes personlige inntekt | Selskapsskatt (22 %) + utbytteskatt |

Tabellen viser at AS gir best beskyttelse for eierne, men har strengere krav og høyere administrasjon. ENK er enklest, men innebærer størst personlig risiko.`,
      },
    },
    {
      id: 'ol-1-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'ol-1-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tre venner vil starte en bedrift som selger håndlagde møbler. De planlegger å investere 200 000 kr og ta opp et lån på 500 000 kr. Anbefal en selskapsform og begrunn valget ditt. Hva ville du advart dem mot?',
        solution: `**Anbefaling: Aksjeselskap (AS)**

**Begrunnelse:**
1. **Begrenset ansvar:** Med et lån på 500 000 kr er risikoen betydelig. I et AS risikerer de bare aksjekapitalen (200 000 kr samlet). I et ANS kunne én venn bli krevd for hele lånet.

2. **Tydelig struktur:** Med tre eiere er det viktig med klare roller og regler. AS-formen krever styre, vedtekter og generalforsamling, noe som forebygger konflikter.

3. **Profesjonelt omdømme:** Banker og leverandører tar AS mer seriøst enn ENK, noe som gjør det lettere å forhandle gode vilkår.

4. **Aksjekapitalen dekkes:** De har planlagt 200 000 kr, noe som er godt over minimumskravet på 30 000 kr.

**Advarsel:**
- Ikke velg ANS – da kan én venn ende opp med ansvar for hele gjelden på 500 000 kr
- Lag en aksjonæravtale som regulerer hva som skjer hvis én vil ut, eller det oppstår uenighet
- Vurder hvem som skal sitte i styret og hvem som skal være daglig leder
- Sørg for at alle forstår at aksjekapitalen kan gå tapt dersom bedriften ikke går bra`,
      },
    },
    {
      id: 'ol-1-2-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'ol-1-2-oppg-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En student vil starte en liten nettbutikk ved siden av studiene, med lave kostnader og ingen ansatte. Hvilken selskapsform passer best?',
        options: [
          'Aksjeselskap (AS)',
          'Enkeltpersonforetak (ENK)',
          'Ansvarlig selskap (ANS)',
          'Samvirkeforetak (SA)',
        ],
        solution: 'Enkeltpersonforetak (ENK)',
        explanation: 'For en liten virksomhet med lav risiko, én person og lave kostnader er ENK det enkleste og mest kostnadseffektive valget. Det er gratis å registrere, krever ingen startkapital og har enklere regnskapsregler. AS ville gitt unødvendig administrasjon for en slik liten virksomhet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Selskapsform', definition: 'Den juridiske organiseringen av en virksomhet' },
    { term: 'Enkeltpersonforetak (ENK)', definition: 'Selskapsform med én eier og ubegrenset personlig ansvar' },
    { term: 'Ansvarlig selskap (ANS)', definition: 'Selskapsform med solidaransvar – deltakerne hefter for hele gjelden' },
    { term: 'Selskap med delt ansvar (DA)', definition: 'Selskapsform der deltakerne hefter for sin forholdsmessige andel' },
    { term: 'Aksjeselskap (AS)', definition: 'Selskapsform med begrenset ansvar, krav om 30 000 kr i aksjekapital' },
    { term: 'Begrenset ansvar', definition: 'Eierne risikerer kun investert beløp, ikke personlige eiendeler' },
    { term: 'Samvirkeforetak (SA)', definition: 'Medlemseid virksomhet med demokratisk styring og utbytte etter bruk' },
  ],
};

export const CHAPTER_OKONOMI_LEDELSE_1_3: TextbookChapter = {
  id: 'okonomi-ledelse-1-3',
  courseId: 'okonomi-ledelse',
  chapterNumber: '1.3',
  title: 'Interessenter og omgivelser',
  description: 'Bedriftens interessenter, forskjellen mellom primære og sekundære interessenter, interessekonflikter og analyse av omgivelser med PESTEL-modellen.',
  estimatedMinutes: 22,
  competenceGoals: [
    'Identifisere og analysere bedriftens interessenter',
    'Forstå forskjellen mellom primære og sekundære interessenter',
    'Kunne bruke PESTEL-analyse for å vurdere omgivelser',
  ],
  content: [
    {
      id: 'ol-1-3-intro',
      type: 'text',
      content: `## Interessenter og omgivelser

Ingen bedrift eksisterer i et vakuum. Enhver virksomhet påvirkes av og påvirker en rekke aktører i omgivelsene sine. Disse aktørene kalles **interessenter**. For å lykkes må en bedrift forstå hvem interessentene er, hva de vil, og hvordan de kan påvirke virksomheten.`,
    },
    {
      id: 'ol-1-3-def-1',
      type: 'definition',
      title: 'Interessent',
      content: `En interessent (stakeholder) er en person, gruppe eller organisasjon som påvirker eller påvirkes av bedriftens aktiviteter. Interessenter har ulike forventninger til bedriften og kan utøve innflytelse på dens beslutninger.`,
    },
    {
      id: 'ol-1-3-text-2',
      type: 'text',
      content: `### Primære og sekundære interessenter

Interessentene kan deles inn i to hovedgrupper:

**Primære interessenter** har direkte forbindelse til bedriften og er nødvendige for dens drift:
- **Eiere/aksjonærer** – vil ha avkastning på investert kapital
- **Ansatte** – vil ha lønn, trygghet og gode arbeidsforhold
- **Kunder** – vil ha gode produkter til riktig pris
- **Leverandører** – vil ha stabile bestillinger og rettidig betaling
- **Långivere (banker)** – vil ha renter og tilbakebetaling av lån

**Sekundære interessenter** påvirkes indirekte eller har en bredere interesse:
- **Staten/kommunen** – skatteinntekter, arbeidsplasser, lovfølgelse
- **Lokalsamfunnet** – arbeidsplasser, miljøpåvirkning, støtte til lokale tiltak
- **Medier** – nyhetsverdi, offentlig interesse
- **Miljøorganisasjoner** – bærekraft og miljøansvar
- **Konkurrenter** – markedsforhold og konkurransevilkår`,
    },
    {
      id: 'ol-1-3-example-1',
      type: 'example',
      title: 'Interessenter for en dagligvarebutikk',
      problem: `Identifiser minst fem interessenter for en lokal Rema 1000-butikk og forklar hva hver av dem forventer av butikken.`,
      solution: `**Primære interessenter:**
1. **Kundene** – forventer lave priser, godt utvalg, ferske varer og hyggelig service
2. **De ansatte** – forventer rettferdig lønn, gode arbeidsforhold og forutsigbare vakter
3. **Leverandørene** – forventer at butikken betaler fakturaer i tide og bestiller jevnlig
4. **Rema 1000 (eieren/kjeden)** – forventer lønnsomhet, at konseptet følges og gode salgstall
5. **Banken** – forventer at eventuelle lån betjenes og at butikken er økonomisk sunn

**Sekundære interessenter:**
6. **Kommunen** – forventer skatteinntekter og arbeidsplasser til lokalsamfunnet
7. **Naboer/lokalsamfunnet** – forventer at butikken ikke skaper for mye trafikk, støy eller forsøpling`,
    },
    {
      id: 'ol-1-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'ol-1-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er en primær interessent for en bedrift?',
        options: [
          'Miljøorganisasjoner',
          'Mediene',
          'Leverandører',
          'Konkurrenter',
        ],
        solution: 'Leverandører',
        explanation: 'Leverandører er primære interessenter fordi de har direkte forbindelse til bedriften gjennom leveranser av varer eller tjenester. Miljøorganisasjoner, medier og konkurrenter er sekundære interessenter med mer indirekte forbindelser.',
      },
    },
    {
      id: 'ol-1-3-def-2',
      type: 'definition',
      title: 'Interessekonflikt',
      content: `En interessekonflikt oppstår når to eller flere interessenter har motstridende ønsker eller krav til bedriften. Bedriften må da finne en balanse mellom de ulike interessene.`,
    },
    {
      id: 'ol-1-3-example-2',
      type: 'example',
      title: 'Interessekonflikt i praksis',
      problem: `En møbelfabrikk vurderer å flytte produksjonen til et lavkostland. Identifiser interessekonflikten mellom eierne og de ansatte.`,
      solution: `**Eiernes perspektiv:**
- Lavere produksjonskostnader gir høyere fortjeneste
- Bedre konkurranseevne på pris
- Økt avkastning på investert kapital
- Ønsker utflytting

**De ansattes perspektiv:**
- Mister jobbene sine ved utflytting
- Lokalsamfunnet mister arbeidsplasser
- Kompetansen de har bygget opp blir verdiløs
- Ønsker at produksjonen forblir i Norge

**Konflikten:** Eierne tjener på lavere kostnader, mens de ansatte taper arbeidsplassene sine. Bedriften må veie kortsiktig lønnsomhet mot langsiktige konsekvenser som tap av kompetanse, omdømme og kvalitet.`,
    },
    {
      id: 'ol-1-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'ol-1-3-oppg-2',
        number: '2',
        type: 'classic',
        task: 'En byggevarebutikk vurderer å holde åpent til kl. 22 hver dag for å øke omsetningen. Beskriv interessekonflikten mellom eierne, de ansatte og naboene.',
        solution: `**Eiernes interesse:** Lengre åpningstider gir potensielt mer omsetning og høyere fortjeneste. De ønsker å holde åpent lengre.

**De ansattes interesse:** Lange kvelder betyr ugunstige vakter, mindre fritid og dårligere balanse mellom jobb og privatliv. Noen ansatte ønsker kanskje kvelds-tillegg, andre vil ikke jobbe sent. De kan ønske å beholde kortere åpningstider.

**Naboenes interesse:** Kveldsåpent betyr mer biltrafikk, støy fra vareleveranser, kunder og parkeringsplasser på kveldstid. Naboene ønsker trolig at butikken stenger tidligere.

**Konflikten:** Eierens ønske om økt omsetning står mot ansattes ønske om bedre arbeidstid og naboenes ønske om ro på kvelden. Bedriften kan forsøke kompromisser som å ha åpent til kl. 20 i stedet for kl. 22, eller bare ha lengre åpent noen dager i uken.`,
      },
    },
    {
      id: 'ol-1-3-text-3',
      type: 'text',
      content: `### PESTEL-analyse

For å forstå omgivelsene bruker bedrifter ofte en **PESTEL-analyse**. Modellen kartlegger seks typer eksterne faktorer som påvirker virksomheten:

**P – Politiske faktorer:** Regjeringens politikk, handelspolitikk, regulering, politisk stabilitet

**E – Økonomiske faktorer (*Economic*):** Konjunkturer, rente, inflasjon, valutakurser, arbeidsledighet

**S – Sosiale faktorer:** Demografiske endringer, forbrukeratferd, kulturelle trender, holdninger

**T – Teknologiske faktorer:** Ny teknologi, digitalisering, automatisering, innovasjonstakt

**E – Miljømessige faktorer (*Environmental*):** Klimaendringer, bærekraftkrav, miljøregulering, ressursknapphet

**L – Juridiske faktorer (*Legal*):** Arbeidsmiljølov, forbrukerlovgivning, personvern (GDPR), konkurranserett`,
    },
    {
      id: 'ol-1-3-def-3',
      type: 'definition',
      title: 'PESTEL-analyse',
      content: `PESTEL er en analysemodell som kartlegger Politiske, Økonomiske, Sosiale, Teknologiske, miljømessige (Environmental) og Juridiske (Legal) faktorer som påvirker en virksomhets omgivelser.`,
    },
    {
      id: 'ol-1-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'ol-1-3-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken PESTEL-faktor beskriver økt bruk av kunstig intelligens i bransjen?',
        options: [
          'Politisk',
          'Økonomisk',
          'Sosial',
          'Teknologisk',
        ],
        solution: 'Teknologisk',
        explanation: 'Kunstig intelligens er en teknologisk faktor. Teknologiske faktorer i PESTEL omfatter ny teknologi, digitalisering, automatisering og innovasjon som påvirker hvordan bedrifter arbeider og konkurrerer.',
      },
    },
    {
      id: 'ol-1-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'ol-1-3-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfør en enkel PESTEL-analyse for et norsk reisebyrå. Gi minst én faktor for hver av de seks kategoriene.',
        solution: `**P – Politiske faktorer:** Innreiserestriksjoner og visumsregler påvirker hvilke reisemål som kan tilbys. Reiseråd fra UD kan endre etterspørselen over natten.

**E – Økonomiske faktorer:** Norsk kronekurs påvirker hvor dyrt det er å reise utenlands. I nedgangstider kutter folk gjerne i feriereiser.

**S – Sosiale faktorer:** Økt fokus på opplevelsesreiser fremfor pakkereiser. Yngre generasjoner booker mer selv via nettportaler.

**T – Teknologiske faktorer:** Bookingplattformer som Airbnb og Booking.com konkurrerer direkte med tradisjonelle reisebyrå. AI-baserte reiseplanleggere utfordrer rådgiverrollen.

**E – Miljømessige faktorer:** Flyskam og økt miljøbevissthet gjør at flere velger togreiser eller nærferie. Karbonkompensasjon blir forventet.

**L – Juridiske faktorer:** Pakkereiseloven gir kundene sterke rettigheter ved avbestilling og mangler. GDPR krever forsvarlig håndtering av kundedata.`,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-1-3-text-samle',
      type: 'text',
      content: `## --- Samleoppgaver ---

Sammensatte oppgaver om interessenter og omgivelser.`,
    },
    {
      id: 'ol-1-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'ol-1-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En stor industribedrift i en liten kommune planlegger å legge ned en avdeling med 50 ansatte for å kutte kostnader. Identifiser minst fire interessenter som påvirkes, beskriv deres reaksjoner, og foreslå hvordan bedriften kan håndtere situasjonen.',
        solution: `**Interessenter og reaksjoner:**

1. **De 50 ansatte:** Mister jobbene sine. Vil reagere med sinne, frykt og motstand. Fagforeningen vil trolig forhandle om sluttpakker og omstillingsmidler.

2. **Eierne/aksjonærene:** Fornøyde med kostnadskutt som øker lønnsomheten, men bekymret for omdømmeskade og eventuelle kundetap.

3. **Kommunen:** Alvorlig bekymret over tap av 50 arbeidsplasser og reduserte skatteinntekter. Kan tilby incentiver for å beholde avdelingen.

4. **Lokale leverandører:** Mister en viktig kunde for kantinedrift, renhold, vedlikehold med mer. Kan måtte si opp egne ansatte.

5. **Lokalsamfunnet:** Ringvirkninger når 50 familier mister inntekt – butikker, skoler og foreningsliv påvirkes.

**Håndtering:**
- Tidlig og ærlig informasjon til alle berørte
- Forhandle gode sluttpakker med fagforeningen
- Tilby omskolering og karriereveiledning
- Samarbeide med kommunen om alternative arbeidsplasser
- Vurdere om det finnes kompromisser (f.eks. delvis nedbemanning i stedet for full nedleggelse)`,
      },
    },
    {
      id: 'ol-1-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'ol-1-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en bedrift du kjenner til (f.eks. en lokal butikk, en kjent merkevare eller en kjede). Gjennomfør en interessentanalyse og en PESTEL-analyse for denne bedriften. Bruk analysene til å identifisere en mulig utfordring og foreslå en strategi for å håndtere den.',
        solution: `**Eksempel: En lokal kaffebar**

**Interessentanalyse:**
- *Primære:* Eier, ansatte (baristaar), faste kunder, kaffeleverandør, utleier
- *Sekundære:* Kommunen, naboer, matilsynet, konkurrerende kaféer, sosiale medier-følgere

**PESTEL-analyse:**
- *P:* Mvaatsregler på mat og drikke
- *Ø:* Økte råvarepriser (kaffe) pga. klimaendringer, høy inflasjon presser kundenes kjøpekraft
- *S:* Trend mot spesialkaffe og veganske alternativer, «third place»-kultur
- *T:* Mobilbestilling og betalingsapper, sosiale medier for markedsføring
- *E:* Krav om bærekraftig kaffeinnkjøp, redusere engangsemballasje
- *L:* Matforskriften, arbeidsmiljøloven ved kvelds- og helgearbeid

**Identifisert utfordring:** Økte kaffepriser (økonomisk faktor) kombinert med at kundene blir mer prisbevisste (sosial faktor) kan presse marginene.

**Strategi:** Differensiere seg gjennom kvalitet og opplevelse (storytelling rundt kaffebøndene, kursvirksomhet, abonnementsordning). Justere priser gradvis fremfor store hopp. Tilby rimeligere alternativer ved siden av spesialkaffen for å beholde prisbevisste kunder.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Interessent', definition: 'Person, gruppe eller organisasjon som påvirker eller påvirkes av en bedrift' },
    { term: 'Primære interessenter', definition: 'Aktører med direkte forbindelse til bedriften (eiere, ansatte, kunder, leverandører, långivere)' },
    { term: 'Sekundære interessenter', definition: 'Aktører med indirekte forbindelse (stat, medier, lokalsamfunn, miljøorganisasjoner)' },
    { term: 'Interessekonflikt', definition: 'Situasjon der to eller flere interessenter har motstridende krav til bedriften' },
    { term: 'PESTEL-analyse', definition: 'Modell for å analysere Politiske, Økonomiske, Sosiale, Teknologiske, miljømessige og Juridiske omgivelsesfaktorer' },
  ],
};

export const CHAPTER_OKONOMI_LEDELSE_1_4: TextbookChapter = {
  id: 'okonomi-ledelse-1-4',
  courseId: 'okonomi-ledelse',
  chapterNumber: '1.4',
  title: 'Bedriftens mål og visjon',
  description: 'Visjon, misjon, forretningsidé, SMART-mål og strategier – hvordan bedrifter setter retning og jobber mot sine mål.',
  estimatedMinutes: 24,
  competenceGoals: [
    'Forklare sammenhengen mellom mål, strategi og handling',
    'Kunne formulere SMART-mål for en virksomhet',
    'Forstå forskjellen mellom visjon, misjon og forretningsidé',
  ],
  content: [
    {
      id: 'ol-1-4-intro',
      type: 'text',
      content: `## Bedriftens mål og visjon

Alle vellykkede bedrifter har en tydelig retning. De vet hva de vil oppnå, hvorfor de eksisterer og hvordan de skal komme dit. I dette kapittelet skal vi se på begrepene visjon, misjon, forretningsidé og mål – og hvordan de henger sammen med strategi og daglig handling.`,
    },
    {
      id: 'ol-1-4-def-1',
      type: 'definition',
      title: 'Visjon',
      content: `En visjon er et inspirerende fremtidsbilde av hva virksomheten ønsker å oppnå på lang sikt. Visjonen gir retning og motivasjon for alle i organisasjonen. Den skal være ambisiøs, men ikke urealistisk.`,
    },
    {
      id: 'ol-1-4-example-1',
      type: 'example',
      title: 'Kjente visjoner',
      problem: `Se på følgende visjoner fra norske bedrifter. Hva kjennetegner en god visjon?`,
      solution: `**Eksempler på visjoner:**
- **Equinor:** «Forme energifremtiden»
- **DNB:** «Vi skaper muligheter for kundene og samfunnet»
- **IKEA:** «Å skape en bedre hverdag for de mange menneskene»

**Kjennetegn på en god visjon:**
1. **Kort og konsis** – lett å huske og kommunisere
2. **Inspirerende** – skaper motivasjon og stolthet
3. **Retningsgivende** – viser hvor bedriften vil
4. **Tidløs** – gjelder over lang tid, ikke bare i år
5. **Ambisiøs** – noe å strekke seg etter

Visjonen er som en «nordstjerne» – den forteller retningen, selv om man kanskje aldri når helt frem.`,
    },
    {
      id: 'ol-1-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'ol-1-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med en visjon?',
        options: [
          'Å beskrive bedriftens daglige rutiner',
          'Å gi et inspirerende fremtidsbilde og retning for virksomheten',
          'Å bestemme hvilke produkter bedriften skal selge',
          'Å sette konkrete økonomiske mål for neste år',
        ],
        solution: 'Å gi et inspirerende fremtidsbilde og retning for virksomheten',
        explanation: 'Visjonen er et overordnet fremtidsbilde som gir retning og motivasjon. Den handler ikke om daglige rutiner eller konkrete mål, men om den langsiktige ambisjonen til virksomheten.',
      },
    },
    {
      id: 'ol-1-4-text-2',
      type: 'text',
      content: `### Misjon og forretningsidé

Mens visjonen beskriver *hvor* bedriften vil, forklarer **misjonen** *hvorfor* bedriften eksisterer og **forretningsidéen** *hva* bedriften gjør.

**Misjon** (formål): Bedriftens eksistensgrunnlag – hvorfor den finnes og hvem den er til for.

**Forretningsidé:** En konkret beskrivelse av hva bedriften tilbyr, til hvem, og hvordan den skaper verdi.

**Eksempel for en treningskjede:**
- *Visjon:* «Et friskere Norge»
- *Misjon:* «Vi gjør det enkelt og motiverende for alle å trene regelmessig»
- *Forretningsidé:* «Vi tilbyr rimelige treningssentre med fleksible åpningstider og et bredt gruppetilbud for folk i alle aldre»`,
    },
    {
      id: 'ol-1-4-def-2',
      type: 'definition',
      title: 'Forretningsidé',
      content: `En forretningsidé beskriver hva bedriften tilbyr (produkter/tjenester), hvem den tilbyr det til (målgruppe), og hva som gjør tilbudet unikt (konkurransefortrinn). Den besvarer spørsmålet: «Hvordan tjener vi penger?»`,
    },
    {
      id: 'ol-1-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'ol-1-4-oppg-2',
        number: '2',
        type: 'classic',
        task: 'Formuler en visjon, misjon og forretningsidé for en fiktiv bedrift som lager økologiske hudpleieprodukter.',
        solution: `**Visjon:** «Ren hud, ren natur»

**Misjon:** «Vi gir mennesker trygge og effektive hudpleieprodukter som er gode for både hud og miljø.»

**Forretningsidé:** «Vi utvikler og selger økologiske hudpleieprodukter laget av norske råvarer, rettet mot miljøbevisste forbrukere som ønsker naturlige alternativer til konvensjonell hudpleie. Vi selger gjennom nettbutikk og utvalgte helsekostbutikker, og skiller oss ut med dokumentert økologisk sertifisering og kortreiste ingredienser.»

**Sammenhengen:**
- Visjonen gir den overordnede retningen (ren hud og natur)
- Misjonen forklarer hvorfor bedriften finnes (trygge produkter for hud og miljø)
- Forretningsidéen beskriver konkret hva, hvem og hvordan (økologiske produkter til miljøbevisste via nett og butikk)`,
      },
    },
    {
      id: 'ol-1-4-text-3',
      type: 'text',
      content: `### SMART-mål

For å omsette visjoner og strategier til handling trenger bedrifter konkrete mål. En mye brukt metode er **SMART-mål**, der hvert mål skal oppfylle fem kriterier:

- **S – Spesifikt:** Målet må være klart og tydelig. Hva konkret skal oppnås?
- **M – Målbart:** Du må kunne måle om målet er nådd. Bruk tall!
- **A – Ambisiøst (oppnåelig):** Målet skal utfordre, men likevel være realistisk
- **R – Relevant:** Målet må være viktig for bedriftens overordnede strategi
- **T – Tidsbestemt:** Det må ha en tydelig frist`,
    },
    {
      id: 'ol-1-4-def-3',
      type: 'definition',
      title: 'SMART-mål',
      content: `SMART er en metode for å formulere konkrete mål som er Spesifikke, Målbare, Ambisiøse (oppnåelige), Relevante og Tidsbestemte.`,
    },
    {
      id: 'ol-1-4-example-2',
      type: 'example',
      title: 'SMART vs. ikke-SMART mål',
      problem: `Vurder om følgende mål er SMART-mål. Hvis ikke, gjør dem SMART.

a) «Vi skal selge mer.»
b) «Vi skal øke omsetningen med 15 % innen 31. desember 2025.»`,
      solution: `**a) «Vi skal selge mer.»**
- Spesifikt? Nei – «mer» er for vagt
- Målbart? Nei – ingen tall å måle
- Ambisiøst? Uklart
- Relevant? Muligens
- Tidsbestemt? Nei – ingen frist

**Ikke et SMART-mål.** Forbedret versjon: «Vi skal øke antall solgte enheter av produkt X med 20 % innen utgangen av Q2 2025.»

**b) «Vi skal øke omsetningen med 15 % innen 31. desember 2025.»**
- Spesifikt? Ja – øke omsetningen
- Målbart? Ja – 15 %
- Ambisiøst? Ja – 15 % er utfordrende men mulig
- Relevant? Ja – omsetning er alltid relevant
- Tidsbestemt? Ja – 31. desember 2025

**Dette er et SMART-mål.**`,
    },
    {
      id: 'ol-1-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'ol-1-4-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilket av disse er et SMART-mål?',
        options: [
          'Vi skal bli bedre på kundeservice',
          'Vi skal tjene mer penger neste år',
          'Vi skal redusere sykefraværet fra 8 % til 5 % innen utgangen av 2025',
          'Vi skal ha fornøyde ansatte',
        ],
        solution: 'Vi skal redusere sykefraværet fra 8 % til 5 % innen utgangen av 2025',
        explanation: 'Dette målet er spesifikt (sykefravær), målbart (fra 8 % til 5 %), ambisiøst men oppnåelig, relevant for bedriften og tidsbestemt (utgangen av 2025). De andre alternativene mangler konkrete tall og/eller tidsfrister.',
      },
    },
    {
      id: 'ol-1-4-text-4',
      type: 'text',
      content: `### Fra mål til strategi

Når målene er satt, trenger bedriften en **strategi** for å nå dem. Strategi handler om å gjøre bevisste valg om *hvordan* målene skal oppnås.

**Sammenhengen:**
1. **Visjon** → Hvor vil vi? (langsiktig retning)
2. **Mål** → Hva konkret skal vi oppnå? (SMART-mål)
3. **Strategi** → Hvordan skal vi komme dit? (overordnede valg)
4. **Handlingsplan** → Hvem gjør hva, når? (konkrete tiltak)

Eksempel: Visjonen er «Norges mest bærekraftige møbelprodusent». Et SMART-mål kan være «Redusere CO₂-utslipp med 30 % innen 2027». Strategien kan være «Bytte til fornybare energikilder og resirkulerte materialer». Handlingsplanen beskriver konkret hvilke maskiner som skal byttes, når, og hvem som er ansvarlig.`,
    },
    {
      id: 'ol-1-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'ol-1-4-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Formuler tre SMART-mål for en fiktiv klesbutikk som ønsker å vokse. Forklar hvorfor hvert mål oppfyller SMART-kriteriene.',
        solution: `**Mål 1:** «Øke antall faste kunder med lojalkort fra 500 til 800 innen 30. juni 2025.»
- *S:* Spesifikt – antall faste kunder med lojalkort
- *M:* Målbart – fra 500 til 800
- *A:* Ambisiøst men oppnåelig – 60 % vekst på 6 måneder
- *R:* Relevant – flere faste kunder gir høyere omsetning
- *T:* Tidsbestemt – innen 30. juni 2025

**Mål 2:** «Øke gjennomsnittlig handlesum fra 450 kr til 550 kr per kunde innen utgangen av 2025.»
- *S:* Gjennomsnittlig handlesum per kunde
- *M:* Fra 450 kr til 550 kr
- *A:* Ca. 22 % økning – krevende men realistisk med mersalg-strategier
- *R:* Økt handlesum gir høyere omsetning uten å trenge flere kunder
- *T:* Utgangen av 2025

**Mål 3:** «Lansere nettbutikk med minst 200 produkter innen 1. mars 2025.»
- *S:* Lansere nettbutikk med bestemt antall produkter
- *M:* 200 produkter
- *A:* Realistisk med riktig leverandør
- *R:* Digital tilstedeværelse er viktig for vekst
- *T:* 1. mars 2025`,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-1-4-text-samle',
      type: 'text',
      content: `## --- Samleoppgaver ---

Samleoppgaver som kombinerer visjon, mål og strategi.`,
    },
    {
      id: 'ol-1-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'ol-1-4-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En restaurant har visjonen «Det naturlige matvalget i byen vår». De har satt følgende mål: «Vi vil ha flere gjester.»\n\na) Forklar hvorfor dette målet ikke er et SMART-mål.\nb) Omformuler målet til et SMART-mål.\nc) Foreslå en strategi og to konkrete handlinger for å nå det nye målet.',
        solution: `**a) Hvorfor det ikke er SMART:**
- *S:* Delvis spesifikt (flere gjester), men mangler detaljer
- *M:* Ikke målbart – «flere» kan bety 1 gjest eller 1 000
- *A:* Umulig å vurdere uten tall
- *R:* Ja, relevant for en restaurant
- *T:* Ingen tidsfrist

**b) SMART-versjon:**
«Vi skal øke antall middagsgjester fra 40 til 55 per kveld innen 1. september 2025.»

**c) Strategi og handlinger:**

*Strategi:* Tiltrekke nye gjester gjennom et styrket økologisk konsept og lokal synlighet.

*Handling 1:* Inngå samarbeid med tre lokale gårder om sesongbaserte menyer og markedsføre dette i sosiale medier – ansvarlig: kjøkkensjef, frist: mars 2025.

*Handling 2:* Arrangere månedlige «smakskvelder» med lokale råvarer for å bygge kundelojalitet og tiltrekke nye gjester – ansvarlig: daglig leder, første arrangement: april 2025.`,
      },
    },
    {
      id: 'ol-1-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'ol-1-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er konsulent for en liten IT-bedrift med 10 ansatte. Bedriften har ingen visjon, misjon eller definerte mål – de «bare jobber». Eieren sier: «Vi trenger ikke visjoner, vi trenger penger.»\n\nSkriv et kort notat til eieren der du forklarer:\na) Hvorfor en visjon og klare mål er viktige, også for en liten bedrift\nb) Foreslå en visjon, misjon og tre SMART-mål tilpasset en liten IT-bedrift\nc) Beskriv hvordan dette kan styrke bedriftens økonomi på sikt',
        solution: `**a) Hvorfor visjon og mål er viktige:**

Uten tydelig retning risikerer bedriften å si ja til alt og nei til ingenting. De ansatte vet ikke hva de jobber mot, noe som kan svekke motivasjon og effektivitet. Klare mål gjør det mulig å måle fremgang, prioritere riktig og ta bedre beslutninger. Selv små bedrifter trenger å vite hvor de skal – ellers vet de ikke om de er på rett vei.

**b) Forslag:**

*Visjon:* «IT-partneren som gjør hverdagen enklere for lokale bedrifter»

*Misjon:* «Vi leverer pålitelige IT-løsninger og personlig support som gir små og mellomstore bedrifter trygghet og effektivitet i hverdagen.»

*SMART-mål:*
1. «Øke årlig omsetning fra 5 mill. til 6,5 mill. kr innen 31. desember 2025.»
2. «Få minst 8 nye faste serviceavtalekunder innen 30. juni 2025.»
3. «Oppnå kundetilfredshetscore på minst 4,5 av 5 på halvårlig måling innen desember 2025.»

**c) Styrket økonomi på sikt:**

Med klare mål vet selgerne nøyaktig hvor mange nye kunder de trenger. Med en tydelig visjon kan bedriften posisjonere seg i markedet og skille seg fra konkurrentene. Kundetilfredshetsmålet sikrer at eksisterende kunder blir og anbefaler videre, noe som er billigere enn å skaffe nye. Resultatet: høyere inntekter, lavere kundefrafall og bedre ressursbruk – altså bedre økonomi.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Visjon', definition: 'Et inspirerende fremtidsbilde som gir virksomheten langsiktig retning' },
    { term: 'Misjon', definition: 'Bedriftens formål – hvorfor den finnes og hvem den er til for' },
    { term: 'Forretningsidé', definition: 'Beskriver hva bedriften tilbyr, til hvem, og hva som gjør tilbudet unikt' },
    { term: 'SMART-mål', definition: 'Mål som er Spesifikke, Målbare, Ambisiøse, Relevante og Tidsbestemte' },
    { term: 'Strategi', definition: 'Overordnede valg om hvordan bedriften skal nå sine mål' },
    { term: 'Handlingsplan', definition: 'Konkret plan for hvem som gjør hva og når for å gjennomføre strategien' },
  ],
};

export const CHAPTER_OKONOMI_LEDELSE_1_5: TextbookChapter = {
  id: 'okonomi-ledelse-1-5',
  courseId: 'okonomi-ledelse',
  chapterNumber: '1.5',
  title: 'Verdiskaping og samfunnsrolle',
  description: 'Verdikjeden, verdiskaping for ulike aktører, bedriftens bidrag til BNP og samfunnsansvar.',
  estimatedMinutes: 22,
  competenceGoals: [
    'Forstå begrepet verdiskaping og verdikjeden',
    'Kunne forklare hvordan bedrifter skaper verdi for ulike aktører',
    'Kjenne til bedriftens rolle i samfunnsøkonomien og BNP',
  ],
  content: [
    {
      id: 'ol-1-5-intro',
      type: 'text',
      content: `## Verdiskaping og samfunnsrolle

Bedrifter eksisterer ikke bare for å tjene penger til eierne. De skaper verdier for en lang rekke aktører – ansatte, kunder, leverandører, lokalsamfunn og samfunnet som helhet. I dette kapittelet ser vi på hva verdiskaping betyr, hvordan verdikjeden fungerer, og hvilken rolle bedrifter spiller i norsk økonomi.`,
    },
    {
      id: 'ol-1-5-def-1',
      type: 'definition',
      title: 'Verdiskaping',
      content: `Verdiskaping er den merverdien en bedrift skaper gjennom sin virksomhet. Verdiskapingen beregnes som forskjellen mellom verdien av det bedriften produserer (salgsinntekter) og kostnadene for innkjøpte varer og tjenester fra andre.`,
    },
    {
      id: 'ol-1-5-example-1',
      type: 'example',
      title: 'Verdiskaping i et bakeri',
      problem: `Et bakeri kjøper mel, smør og sukker for 20 000 kr per uke. De baker brød, kaker og boller som de selger for 80 000 kr per uke. Beregn verdiskapingen.`,
      solution: `**Verdiskaping = Salgsinntekter − Innkjøpte varer og tjenester**

Verdiskaping = 80 000 kr − 20 000 kr = **60 000 kr per uke**

Denne verdiskapingen på 60 000 kr fordeles på:
- **Lønn til ansatte** (bakere, butikkansatte)
- **Skatt og avgifter** til stat og kommune
- **Renter** til banken (hvis bakeriet har lån)
- **Overskudd** til eieren

Bakeriet tar altså råvarer verdt 20 000 kr og foredler dem til produkter kundene er villige til å betale 80 000 kr for. Forskjellen – 60 000 kr – er verdien som bakeriet skaper gjennom arbeid, kompetanse og utstyr.`,
    },
    {
      id: 'ol-1-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'ol-1-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En snekker kjøper trevirke for 5 000 kr og lager et bord som han selger for 15 000 kr. Hva er verdiskapingen?',
        options: [
          '5 000 kr',
          '10 000 kr',
          '15 000 kr',
          '20 000 kr',
        ],
        solution: '10 000 kr',
        explanation: 'Verdiskapingen er salgsinntektene (15 000 kr) minus kostnaden for innkjøpte materialer (5 000 kr) = 10 000 kr. Dette er merverdien snekkeren har skapt gjennom arbeidet sitt.',
      },
    },
    {
      id: 'ol-1-5-text-2',
      type: 'text',
      content: `### Verdikjeden

**Verdikjeden** beskriver alle aktivitetene en bedrift utfører fra den mottar råvarer til kunden har fått produktet. Konseptet ble utviklet av Michael Porter og deler bedriftens aktiviteter i to grupper:

**Primæraktiviteter** (direkte verdiskapende):
1. **Inngående logistikk** – mottak, lagring og håndtering av råvarer
2. **Produksjon/drift** – foredling av råvarer til ferdige produkter
3. **Utgående logistikk** – lagring og distribusjon til kunder
4. **Markedsføring og salg** – gjøre produktet kjent og selge det
5. **Service/ettersalg** – kundeservice, garantier, vedlikehold

**Støtteaktiviteter** (muliggjør primæraktivitetene):
- Innkjøp
- Teknologiutvikling
- Personalforvaltning (HR)
- Infrastruktur (ledelse, økonomi, jus)`,
    },
    {
      id: 'ol-1-5-def-2',
      type: 'definition',
      title: 'Verdikjeden',
      content: `Verdikjeden (Porters verdikjede) er en modell som beskriver alle aktiviteter en bedrift utfører for å skape verdi for kunden. Målet er å identifisere hvor i kjeden bedriften kan skape mest mulig verdi til lavest mulig kostnad.`,
    },
    {
      id: 'ol-1-5-example-2',
      type: 'example',
      title: 'Verdikjeden for en nettbutikk',
      problem: `Beskriv verdikjeden for en nettbutikk som selger klær.`,
      solution: `**Primæraktiviteter:**

1. **Inngående logistikk:** Klærne bestilles fra leverandører i utlandet, mottas på lager, kvalitetskontrolleres og registreres i datasystemet.

2. **Produksjon/drift:** Klærne fotograferes, produktbeskrivelser skrives, og varene legges ut i nettbutikken. (I en nettbutikk er «produksjon» å gjøre varen klar for salg.)

3. **Utgående logistikk:** Når en kunde bestiller, plukkes varen fra lager, pakkes og sendes med post/bud.

4. **Markedsføring og salg:** Annonsering på Instagram og Google, e-postmarkedsføring, sesongkampanjer, influencer-samarbeid.

5. **Service/ettersalg:** Kundeservice via chat/e-post, enkel returprosess, lojalitetsprogram.

**Støtteaktiviteter:**
- *Innkjøp:* Forhandle priser med leverandører, velge riktige kolleksjoner
- *Teknologi:* Nettbutikkplattform, betalingsløsning, lagersystem
- *HR:* Ansettelse og opplæring av kundeservicemedarbeidere, lagerarbeidere
- *Infrastruktur:* Regnskap, jus (forbrukerrettigheter), strategi`,
    },
    {
      id: 'ol-1-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'ol-1-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er en primæraktivitet i Porters verdikjede?',
        options: [
          'Personalforvaltning (HR)',
          'Teknologiutvikling',
          'Markedsføring og salg',
          'Innkjøp',
        ],
        solution: 'Markedsføring og salg',
        explanation: 'Markedsføring og salg er en av de fem primæraktivitetene i verdikjeden. Personalforvaltning, teknologiutvikling og innkjøp er alle støtteaktiviteter som legger til rette for primæraktivitetene.',
      },
    },
    {
      id: 'ol-1-5-text-3',
      type: 'text',
      content: `### Verdiskaping for ulike aktører

Bedrifters verdiskaping kommer mange aktører til gode:

**For ansatte:** Lønn, kompetanseutvikling, sosialt fellesskap, pensjonsrettigheter

**For kunder:** Produkter og tjenester som dekker behov, god service, valgfrihet

**For eiere:** Avkastning på investert kapital (utbytte, verdiøkning)

**For leverandører:** Stabile bestillinger og inntekter

**For staten/kommunen:** Skatteinntekter (bedriftsskatt, arbeidsgiveravgift, mva), redusert arbeidsledighet

**For lokalsamfunnet:** Arbeidsplasser, ringvirkninger (ansatte handler lokalt), sponsing av lag og foreninger`,
    },
    {
      id: 'ol-1-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'ol-1-5-oppg-3',
        number: '3',
        type: 'classic',
        task: 'En bedrift med 20 ansatte betaler 8 mill. kr i lønn, 2 mill. kr i skatt, 500 000 kr i renter til banken og har 1 mill. kr i overskudd til eieren. Forklar hvordan bedriftens verdiskaping fordeles på ulike aktører.',
        solution: `Bedriftens totale verdiskaping fordeles slik:

**Ansatte (lønn):** 8 000 000 kr – den største andelen. De ansatte mottar lønn for arbeidet sitt, som brukes til livsopphold og forbruk i samfunnet.

**Staten (skatt):** 2 000 000 kr – bedriften bidrar til fellesskapet gjennom skatteinntekter som finansierer velferdstjenester som skole, helse og infrastruktur.

**Banken (renter):** 500 000 kr – banken mottar renter for lån de har gitt bedriften. Dette er prisen for å låne kapital.

**Eieren (overskudd):** 1 000 000 kr – eieren får avkastning på sin investering og risiko.

**Total verdiskaping:** 8 + 2 + 0,5 + 1 = **11,5 mill. kr**

Fordelingen viser at bedriften skaper verdi for mange aktører – ikke bare eieren. De ansatte mottar størstedelen, mens staten, banken og eieren deler resten.`,
      },
    },
    {
      id: 'ol-1-5-text-4',
      type: 'text',
      content: `### Bedriftens bidrag til BNP

**Bruttonasjonalprodukt (BNP)** er den totale verdiskapingen i et land i løpet av ett år. Alle bedrifter bidrar til BNP gjennom sin verdiskaping.

Norges BNP var i 2024 ca. 4 500 milliarder kroner. Dette inkluderer verdiskapingen fra alle bedrifter, offentlig sektor og ideelle organisasjoner.

**Hvordan bedrifter bidrar til BNP:**
- Produksjon av varer og tjenester
- Sysselsetting (folk i arbeid produserer mer enn folk uten arbeid)
- Innovasjon (nye produkter og metoder øker produktiviteten)
- Eksport (salg til utlandet bringer inn valuta)

**Verdiskaping ≠ omsetning:** BNP måler verdiskaping, ikke total omsetning. Hvis en fabrikk kjøper råvarer for 500 000 kr og selger produkter for 800 000 kr, er bidraget til BNP bare 300 000 kr (verdiskapingen), ikke 800 000 kr (omsetningen).`,
    },
    {
      id: 'ol-1-5-def-3',
      type: 'definition',
      title: 'Bruttonasjonalprodukt (BNP)',
      content: `Bruttonasjonalprodukt er den samlede verdiskapingen i et land i løpet av ett år. BNP måler verdien av alle ferdige varer og tjenester som produseres, og er det viktigste målet på et lands økonomiske aktivitet.`,
    },
    {
      id: 'ol-1-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'ol-1-5-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'En fabrikk har en omsetning på 10 mill. kr og kjøper råvarer for 6 mill. kr. Hva er fabrikkens bidrag til BNP?',
        options: [
          '10 mill. kr',
          '6 mill. kr',
          '4 mill. kr',
          '16 mill. kr',
        ],
        solution: '4 mill. kr',
        explanation: 'BNP måler verdiskaping, ikke omsetning. Verdiskapingen er omsetning minus innkjøpte varer: 10 mill. – 6 mill. = 4 mill. kr. Råvarekostnadene er verdiskaping som skjedde hos leverandørene, ikke hos fabrikken.',
      },
    },
    {
      id: 'ol-1-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'ol-1-5-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar med egne ord hva verdiskaping betyr, og gi et eksempel på hvordan én bedrift kan skape verdi for minst fire ulike aktører.',
        solution: `**Verdiskaping** er den merverdien en bedrift skaper gjennom sin virksomhet – forskjellen mellom hva de produserer og hva de kjøper inn. Det er bedriftens bidrag til samfunnsøkonomien.

**Eksempel: En lokal restaurant**

1. **For kundene:** Restauranten foredler råvarer til smakfulle måltider og gir en matopplevelse. Kundene får verdi i form av god mat og hyggelig atmosfære.

2. **For de ansatte:** Kokkene, servitørene og oppvaskerne får lønn, arbeidserfaring og et sosialt fellesskap. Verdien er både økonomisk og personlig.

3. **For leverandørene:** Lokale gårder og grossister får stabile bestillinger. Restauranten er en viktig kunde som gir dem jevne inntekter.

4. **For kommunen:** Kommunen mottar skatteinntekter og arbeidsgiveravgift. Restauranten bidrar til å holde folk i arbeid, som reduserer behovet for sosiale ytelser.

5. **For eieren:** Eieren får overskudd som avkastning på investert kapital og arbeidsinnsats.

Slik skaper én restaurant verdi for mange aktører – langt mer enn bare fortjenesten til eieren.`,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-1-5-text-samle',
      type: 'text',
      content: `## --- Samleoppgaver ---

Samleoppgaver om verdiskaping, verdikjeden og bedriftens samfunnsrolle.`,
    },
    {
      id: 'ol-1-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'ol-1-5-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En liten møbelprodusent kjøper trevirke for 500 000 kr, bruker 800 000 kr i lønn, betaler 150 000 kr i skatt, 50 000 kr i renter til banken og sitter igjen med 200 000 kr i overskudd. Omsetningen er 1 700 000 kr.\n\na) Beregn verdiskapingen.\nb) Forklar hvordan verdiskapingen fordeles.\nc) Beskriv verdikjeden for denne bedriften med minst tre primæraktiviteter.',
        solution: `**a) Verdiskaping:**
Verdiskaping = Omsetning − Innkjøpte varer = 1 700 000 − 500 000 = **1 200 000 kr**

**b) Fordeling av verdiskapingen:**
- Lønn til ansatte: 800 000 kr (67 %)
- Skatt til staten: 150 000 kr (12,5 %)
- Renter til banken: 50 000 kr (4 %)
- Overskudd til eier: 200 000 kr (16,5 %)
- **Sum: 1 200 000 kr** (stemmer med verdiskapingen)

**c) Verdikjeden:**

1. **Inngående logistikk:** Trevirke mottas fra sagbruk, kvalitetskontrolleres og lagres i verkstedet. Ulike tresorter sorteres etter bruksområde.

2. **Produksjon:** Treverket sages, freses, pusses og monteres til ferdige møbler. Møblene lakkeres eller oljes og kvalitetskontrolleres.

3. **Utgående logistikk:** Ferdige møbler pakkes forsvarlig og sendes til kunder eller butikker via transportselskap.

4. **Markedsføring og salg:** Møblene markedsføres på nettsiden, i sosiale medier og på lokale messer. Salg skjer direkte og gjennom forhandlere.

5. **Service:** Kunder kan kontakte bedriften for reparasjoner, reklamasjoner og vedlikeholdsråd.`,
      },
    },
    {
      id: 'ol-1-5-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'ol-1-5-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kommune vurderer om de skal gi en industribedrift billig tomteleie for å lokke den til kommunen. Bedriften vil skape 100 arbeidsplasser.\n\na) Drøft hvordan bedriften vil bidra til verdiskaping i kommunen.\nb) Hvilke argumenter kan brukes for og mot å tilby billig tomteleie?\nc) Bruk begrepene verdiskaping, BNP og ringvirkninger i svaret ditt.',
        solution: `**a) Verdiskaping i kommunen:**

Bedriften vil bidra med direkte **verdiskaping** gjennom:
- Produksjon av varer som selges (bidrar direkte til **BNP**)
- Lønn til 100 ansatte som bruker inntekten sin lokalt
- Skatteinntekter (bedriftsskatt, arbeidsgiveravgift, kommunal inntektsskatt fra ansatte)

**Ringvirkninger:** De 100 ansatte vil handle i lokale butikker, bruke lokale tjenester (frisør, restaurant, barnehage), betale eiendomsskatt og delta i frivillig arbeid. Bedriften vil også kjøpe tjenester lokalt (renhold, regnskap, vedlikehold). Estimater tyder på at hver industriarbeidsplass kan skape 1–2 ekstra arbeidsplasser gjennom ringvirkninger.

**b) Argumenter for billig tomteleie:**
- 100 nye arbeidsplasser gir betydelige skatteinntekter over tid
- Ringvirkninger som øker aktiviteten i hele kommunen
- Styrker kommunens attraktivitet for andre bedrifter
- Reduserer arbeidsledighet og sosiale utgifter
- Den samlede verdiskapingen vil langt overstige den tapte tomteleien

**Argumenter mot billig tomteleie:**
- Kommunen taper inntekter fra markedspris tomteleie
- Andre bedrifter kan føle seg urettferdig behandlet
- Risiko for at bedriften flytter igjen når leien normaliseres
- Kan skape presedens der alle nye bedrifter forventer rabatt
- Usikkerhet om bedriften faktisk skaper de lovede arbeidsplassene

**c) Konklusjon:**
Verdiskapingen fra 100 arbeidsplasser med tilhørende ringvirkninger vil sannsynligvis langt overgå kostnaden ved billig tomteleie. Bidraget til kommunens andel av **BNP** gjennom produksjon, lønn og skatt er betydelig. Men kommunen bør stille betingelser (f.eks. krav om minsteantall ansatte i minst 5 år) for å sikre at verdiskapingen faktisk realiseres.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Verdiskaping', definition: 'Merverdien en bedrift skaper – salgsinntekter minus innkjøpte varer og tjenester' },
    { term: 'Verdikjeden', definition: 'Porters modell som beskriver alle aktiviteter fra råvare til kunde' },
    { term: 'Primæraktiviteter', definition: 'Aktiviteter som direkte skaper verdi: logistikk, produksjon, markedsføring, service' },
    { term: 'Støtteaktiviteter', definition: 'Aktiviteter som muliggjør verdiskaping: innkjøp, teknologi, HR, infrastruktur' },
    { term: 'BNP (bruttonasjonalprodukt)', definition: 'Samlet verdiskaping i et land i løpet av ett år' },
    { term: 'Ringvirkninger', definition: 'Indirekte positive effekter av en bedrifts aktivitet i et lokalsamfunn' },
  ],
};

export const OKONOMI_LEDELSE_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMI_LEDELSE_1_1,
  CHAPTER_OKONOMI_LEDELSE_1_2,
  CHAPTER_OKONOMI_LEDELSE_1_3,
  CHAPTER_OKONOMI_LEDELSE_1_4,
  CHAPTER_OKONOMI_LEDELSE_1_5,
];
