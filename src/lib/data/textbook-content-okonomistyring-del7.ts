/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomistyring (VG2) - Del 7
 * Seksjon 7: Selskapsformer og samfunnsansvar
 * Følger LK20 læreplan (NOK02-03)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Selskapsformer
// ============================================================================

const CHAPTER_OKONOMISTYRING_7_1: TextbookChapter = {
  id: 'oks-7-1',
  title: 'Selskapsformer',
  subject: 'okonomistyring',
  gradeLevel: 'vg2',
  estimatedMinutes: 25,
  content: [
    {
      id: 'oks-7-1-intro',
      type: 'text',
      title: 'Innledning',
      content: `Når du skal starte en virksomhet, må du velge hvilken **selskapsform** bedriften skal ha. Valget påvirker alt fra personlig økonomi og ansvar til skatt, administrasjon og mulighet til å hente inn kapital.

I Norge finnes det flere ulike selskapsformer, og hver har sine fordeler og ulemper. De vanligste er enkeltpersonforetak (ENK), aksjeselskap (AS), ansvarlig selskap (ANS) og norskregistrert utenlandsk foretak (NUF).`
    },
    {
      id: 'oks-7-1-enk',
      type: 'text',
      title: 'Enkeltpersonforetak (ENK)',
      content: `**Enkeltpersonforetak** er den enkleste og vanligste selskapsformen i Norge. Her er én person som eier og driver virksomheten alene.

**Kjennetegn ved ENK:**
- Enkel og billig å etablere – registreres i Foretaksregisteret
- Eieren har **ubegrenset ansvar** – personlig ansvar for all gjeld
- Eieren skatter som personinntekt (ikke selskapsskatt)
- Liten administrasjon og få rapporteringskrav
- Enkel å avvikle

**Eksempel:** En frisør som driver egen salong, en rørlegger som jobber selvstendig, eller en grafisk designer som freelancer.

ENK egner seg godt for små virksomheter med lav risiko, men det ubegrensede ansvaret kan være en stor ulempe hvis noe går galt.`
    },
    {
      id: 'oks-7-1-ans',
      type: 'text',
      title: 'Ansvarlig selskap (ANS og DA)',
      content: `**Ansvarlig selskap (ANS)** er en selskapsform der to eller flere eiere driver virksomhet sammen. En variant er **deltakerlignet selskap (DA)**, som har samme ansvarsstruktur.

**Kjennetegn ved ANS:**
- Krever minimum to deltakere (eiere)
- Alle deltakere har **ubegrenset ansvar** for selskapets gjeld
- Deltakerne skatter personlig på sin andel av overskuddet
- Enklere enn AS, men mer forpliktende enn ENK
- Må ha skriftlig selskapsavtale

**Eksempel:** To advokater som starter advokatfirma sammen, eller tre håndverkere som går sammen om et byggefirma.

ANS brukes ofte i bransjer der personlig ansvar og tillit er viktig, som i advokatfirmaer og revisjonsfirmaer.`
    },
    {
      id: 'oks-7-1-as',
      type: 'text',
      title: 'Aksjeselskap (AS)',
      content: `**Aksjeselskap (AS)** er en selskapsform der eierne har begrenset ansvar. Selskapet er en egen juridisk enhet, atskilt fra eierne.

**Kjennetegn ved AS:**
- Krever minimum 30 000 kr i **aksjekapital**
- Eierne har **begrenset ansvar** – taper maksimalt sin investering
- Selskapet betaler 22 % **selskapsskatt**
- Strengere krav til regnskap, revisjon og rapportering
- Kan ha en eller flere aksjonærer
- Styret har juridisk ansvar for selskapets drift

**Eksempel:** De fleste mellomstore og store bedrifter i Norge er organisert som AS, for eksempel butikker, teknologiselskaper og produksjonsbedrifter.

AS gir beskyttelse mot personlig økonomisk tap, men krever mer administrasjon og formelt styre.`
    },
    {
      id: 'oks-7-1-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hva er hovedforskjellen mellom enkeltpersonforetak (ENK) og aksjeselskap (AS) når det gjelder ansvar?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'easy',
      topics: ['selskapsformer', 'ansvar'],
      exerciseType: 'multiple-choice',
      options: [
        'I ENK har eieren ubegrenset ansvar, i AS har eierne begrenset ansvar',
        'I ENK har eieren begrenset ansvar, i AS har eierne ubegrenset ansvar',
        'Både ENK og AS har ubegrenset ansvar',
        'Både ENK og AS har begrenset ansvar'
      ],
      correctAnswer: 0,
      solution: 'I et enkeltpersonforetak (ENK) har eieren ubegrenset personlig ansvar for all gjeld. I et aksjeselskap (AS) har aksjonærene begrenset ansvar – de risikerer kun å tape det de har investert i selskapet.'
    },
    {
      id: 'oks-7-1-nuf',
      type: 'text',
      title: 'Norskregistrert utenlandsk foretak (NUF)',
      content: `**NUF** er en selskapsform der et utenlandsk selskap (ofte britisk) registreres for virksomhet i Norge. Dette har vært populært blant gründere som ønsker å unngå kravet om 30 000 kr i aksjekapital.

**Kjennetegn ved NUF:**
- Ingen krav til aksjekapital i Norge
- Begrenset ansvar (som AS)
- Må betale skatt i Norge hvis virksomheten drives herfra
- Dårlig omdømme – ofte ansett som useriøst av kunder og banker
- Vanskelig å få bankkonto og kreditt

**Hvorfor er NUF problematisk?**
Mange har brukt NUF for å unngå kapitalkrav, men selskapsformen har fått et dårlig rykte fordi den ofte brukes av useriøse aktører. Banker og leverandører er ofte skeptiske til NUF-selskaper.

**Eksempel:** En nettbutikk som registreres som britisk selskap, men drives fra Norge.

I 2023 ble det innført strengere regler for NUF, og færre velger denne selskapsformen i dag.`
    },
    {
      id: 'oks-7-1-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'Hvilken av disse påstandene om NUF (norskregistrert utenlandsk foretak) er korrekt?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['selskapsformer', 'NUF'],
      exerciseType: 'multiple-choice',
      options: [
        'NUF har begrenset ansvar og ingen krav til aksjekapital i Norge',
        'NUF har ubegrenset ansvar og må ha 30 000 kr i aksjekapital',
        'NUF er den mest anerkjente selskapsformen i Norge',
        'NUF betaler ikke skatt i Norge selv om virksomheten drives her'
      ],
      correctAnswer: 0,
      solution: 'NUF har begrenset ansvar (som AS) og krever ikke aksjekapital i Norge. Men selskapsformen har dårlig omdømme og det kan være vanskelig å få bankkonto. Hvis virksomheten drives fra Norge, må det betales norsk skatt.'
    },
    {
      id: 'oks-7-1-samvirke',
      type: 'text',
      title: 'Samvirkeforetak og andre selskapsformer',
      content: `Det finnes også andre, mer spesialiserte selskapsformer:

**Samvirkeforetak (SA/BA/AL)**
Et samvirkeforetak eies og drives av medlemmene i fellesskap. Målet er ikke profitt, men å tjene medlemmenes interesser.

**Eksempler:** OBOS (boligbyggelag), Coop (forbrukersamvirke), Tine (landbrukssamvirke).

**Kjennetegn:**
- Medlemmene har én stemme hver (ikke etter kapitalandel)
- Overskudd deles etter bruk, ikke eierskap
- Demokratisk styring

**Andre selskapsformer:**
- **Stiftelse:** Organisert for et bestemt formål (ikke profitt)
- **Allmennaksjeselskap (ASA):** Børsnotert selskap med strengere krav
- **Kommandittselskap (KS):** Kombinasjon av begrenset og ubegrenset ansvar

De fleste gründere velger mellom ENK, ANS og AS avhengig av risiko, kapitalbehov og antall eiere.`
    },
    {
      id: 'oks-7-1-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hva kjennetegner et samvirkeforetak?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['selskapsformer', 'samvirkeforetak'],
      exerciseType: 'multiple-choice',
      options: [
        'Medlemmene har én stemme hver, uavhengig av kapitalandel',
        'Overskuddet går til aksjonærene basert på eierskap',
        'Det er et ordinært aksjeselskap med begrenset ansvar',
        'Det krever minimum 100 000 kr i aksjekapital'
      ],
      correctAnswer: 0,
      solution: 'I et samvirkeforetak har hvert medlem én stemme, uavhengig av hvor mye kapital de har investert. Overskuddet deles etter bruk, ikke eierskap. Eksempler er OBOS, Coop og Tine.'
    },
    {
      id: 'oks-7-1-comparison',
      type: 'example',
      title: 'Sammenligning av selskapsformer',
      content: `**Oversikt over de vanligste selskapsformene:**

| Selskapsform | Ansvar | Kapitalkrav | Skatt | Administrasjon |
|---|---|---|---|---|
| **ENK** | Ubegrenset | Ingen | Personinntekt | Enkel |
| **ANS** | Ubegrenset | Ingen | Personinntekt | Middels |
| **AS** | Begrenset | 30 000 kr | Selskapsskatt 22 % | Kompleks |
| **NUF** | Begrenset | Ingen (i Norge) | Selskapsskatt | Middels |
| **SA** | Begrenset | Varierer | Selskapsskatt | Middels |

**Når velge hva?**
- **ENK:** Liten virksomhet, lav risiko, enkel drift
- **ANS:** Flere eiere, bransjekrav (advokat, revisor)
- **AS:** Behov for begrenset ansvar, vekstambisjon, investorer
- **NUF:** Sjelden anbefalt (dårlig omdømme)
- **SA:** Medlemsbasert virksomhet med felles interesser`
    },
    {
      id: 'oks-7-1-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'Lisa skal starte et lite webdesign-byrå. Hun jobber alene, har lav risiko, og ønsker enkel administrasjon. Hvilken selskapsform bør hun velge?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['selskapsformer', 'valg'],
      exerciseType: 'multiple-choice',
      options: [
        'Enkeltpersonforetak (ENK)',
        'Aksjeselskap (AS)',
        'Ansvarlig selskap (ANS)',
        'Samvirkeforetak (SA)'
      ],
      correctAnswer: 0,
      solution: 'Lisa bør velge enkeltpersonforetak (ENK). Det er enkelt å etablere, har lav administrasjon, og passer for enkeltpersoner som driver liten virksomhet med lav risiko. Det ubegrensede ansvaret er akseptabelt når risikoen er liten.'
    },
    {
      id: 'oks-7-1-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'En IT-gründer planlegger å utvikle en app og søke ekstern finansiering fra investorer. Virksomheten har høy risiko. Hvilken selskapsform er mest hensiktsmessig?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['selskapsformer', 'risiko', 'investorer'],
      exerciseType: 'classic',
      solution: `Gründeren bør velge **aksjeselskap (AS)**.

**Begrunnelse:**
1. **Begrenset ansvar:** Beskytter gründerens private økonomi ved høy risiko
2. **Investorer:** AS kan utstede aksjer og hente inn ekstern kapital
3. **Profesjonelt:** AS gir mer tillit hos investorer og samarbeidspartnere
4. **Vekstpotensial:** Enklere å skalere og utvide virksomheten

Selv om AS krever mer administrasjon og 30 000 kr i aksjekapital, veier fordelene tyngre i denne situasjonen.`
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-7-1-exercise-6',
      type: 'exercise',
      title: 'Oppgave 6 – Samleoppgave',
      content: `To venner vil starte et reklamebyrå sammen. De har 40 000 kr i startkapital til sammen og ønsker å dele ansvar og eierskap likt. De er usikre på om de skal velge ANS eller AS.

a) Forklar forskjellen mellom ANS og AS når det gjelder ansvar.
b) Hvilken selskapsform vil du anbefale, og hvorfor?`,
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['selskapsformer', 'ansvar', 'valg'],
      exerciseType: 'classic',
      solution: `**a) Forskjell i ansvar:**
- **ANS:** Begge deltakerne har ubegrenset personlig ansvar for all gjeld i selskapet
- **AS:** Begge aksjonærene har begrenset ansvar – de risikerer kun å tape sine 20 000 kr hver

**b) Anbefaling:**
Jeg vil anbefale **aksjeselskap (AS)**.

**Begrunnelse:**
1. De har nok kapital (40 000 kr > 30 000 kr minimum)
2. Begrenset ansvar beskytter personlig økonomi
3. AS gir mer profesjonelt inntrykk overfor kunder
4. Enklere å hente inn mer kapital senere hvis nødvendig

ANS kunne vært aktuelt hvis de jobber i en bransje som krever det (advokat, revisor), men for et reklamebyrå er AS det beste valget.`
    },
    {
      id: 'oks-7-1-exercise-7',
      type: 'exercise',
      title: 'Oppgave 7 – Samleoppgave',
      content: `En ny gründer vurderer å registrere virksomheten som NUF for å unngå kravet om 30 000 kr i aksjekapital. Forklar minst tre grunner til at dette kan være et dårlig valg.`,
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['selskapsformer', 'NUF', 'risiko'],
      exerciseType: 'classic',
      solution: `**Tre grunner til at NUF kan være et dårlig valg:**

1. **Dårlig omdømme:** NUF har fått rykte som useriøs selskapsform, noe som kan skade tilliten hos kunder og samarbeidspartnere

2. **Vanskelig å få banktjenester:** Norske banker er ofte skeptiske til NUF og kan nekte å åpne bankkonto eller gi kreditt

3. **Skattemessige utfordringer:** Selv om selskapet er utenlandsk, må det betale norsk skatt hvis virksomheten drives fra Norge. Dette kan skape kompliserte rapporteringskrav

4. **Begrenset troverdighet:** Leverandører og kunder kan være mer tilbakeholdne med å samarbeide med et NUF sammenlignet med et norsk AS

**Konklusjon:** Det er bedre å spare opp 30 000 kr og etablere et aksjeselskap (AS) som gir langt bedre omdømme og muligheter.`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 7.2: Eieransvar og risiko
// ============================================================================

const CHAPTER_OKONOMISTYRING_7_2: TextbookChapter = {
  id: 'oks-7-2',
  title: 'Eieransvar og risiko',
  subject: 'okonomistyring',
  gradeLevel: 'vg2',
  estimatedMinutes: 20,
  content: [
    {
      id: 'oks-7-2-intro',
      type: 'text',
      title: 'Innledning',
      content: `Valg av selskapsform handler i stor grad om **ansvar** og **risiko**. Hvor mye av din private økonomi er du villig til å sette på spill? Hva skjer hvis virksomheten går konkurs?

Forskjellen mellom **begrenset** og **ubegrenset ansvar** er avgjørende for din personlige økonomiske sikkerhet.`
    },
    {
      id: 'oks-7-2-unlimited',
      type: 'text',
      title: 'Ubegrenset ansvar',
      content: `**Ubegrenset ansvar** betyr at eieren er **personlig ansvarlig** for all gjeld i virksomheten. Hvis selskapet ikke klarer å betale regningene, kan kreditorene kreve betaling fra eierens private økonomi.

**Dette gjelder for:**
- Enkeltpersonforetak (ENK)
- Ansvarlig selskap (ANS)
- Deltakere i deltakerlignet selskap (DA)

**Hva betyr det i praksis?**
Hvis virksomheten skylder 500 000 kr og ikke kan betale, kan kreditorene:
- Ta pant i eierens private bolig
- Kreve utlegg i bil, bankinnskudd og andre eiendeler
- Tvinge eieren til å selge private eiendeler for å dekke gjeld

**Eksempel:**
En elektriker driver ENK. Han får en stor kontrakt, men prosjektet går dårlig og han pådrar seg 800 000 kr i gjeld. Fordi han har ubegrenset ansvar, må han selge huset sitt for å dekke gjelden.

**Konklusjon:** Ubegrenset ansvar gir høy risiko, men er akseptabelt i virksomheter med lav økonomisk risiko.`
    },
    {
      id: 'oks-7-2-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hva betyr ubegrenset ansvar i praksis?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'easy',
      topics: ['ansvar', 'risiko'],
      exerciseType: 'multiple-choice',
      options: [
        'Eieren er personlig ansvarlig for all gjeld i virksomheten',
        'Eieren kan bare tape det som er investert i virksomheten',
        'Kreditorene kan ikke kreve penger fra eierens private økonomi',
        'Virksomheten har ubegrenset tid til å betale gjeld'
      ],
      correctAnswer: 0,
      solution: 'Ubegrenset ansvar betyr at eieren er personlig ansvarlig for all gjeld i virksomheten. Hvis virksomheten ikke kan betale, kan kreditorene kreve betaling fra eierens private økonomi, inkludert bolig, bil og bankinnskudd.'
    },
    {
      id: 'oks-7-2-limited',
      type: 'text',
      title: 'Begrenset ansvar',
      content: `**Begrenset ansvar** betyr at eierne kun risikerer å tape det de har investert i selskapet. Personlig økonomi er beskyttet.

**Dette gjelder for:**
- Aksjeselskap (AS)
- Allmennaksjeselskap (ASA)
- Samvirkeforetak (SA/BA/AL)
- Norskregistrert utenlandsk foretak (NUF)

**Hva betyr det i praksis?**
Hvis et AS går konkurs, taper aksjonærene kun pengene de har investert i aksjekapitalen. Kreditorene kan **ikke** kreve betaling fra aksjonærenes private økonomi.

**Eksempel:**
En aksjonær har investert 50 000 kr i et AS. Selskapet går konkurs med 2 millioner kr i gjeld. Aksjonæren taper sine 50 000 kr, men kan **ikke** bli krevd for mer – selv om gjelden er mye større.

**Unntak – når begrenset ansvar ikke gjelder:**
- **Kausjon:** Hvis du har stilt personlig garanti (kausjonert) for et lån, gjelder ikke det begrensede ansvaret
- **Ansvarlig søksmål:** Hvis styret eller daglig leder har brutt loven, kan de bli personlig ansvarlige
- **Underkapitalisering:** Hvis selskapet drives uten tilstrekkelig kapital, kan ansvaret utvides

**Konklusjon:** Begrenset ansvar gir økonomisk trygghet, men krever mer formaliteter og kapital.`
    },
    {
      id: 'oks-7-2-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'En aksjonær har investert 100 000 kr i et AS. Selskapet går konkurs med 5 millioner kr i gjeld. Hvor mye taper aksjonæren?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'easy',
      topics: ['ansvar', 'aksjeselskap'],
      exerciseType: 'multiple-choice',
      options: [
        '100 000 kr (investert beløp)',
        '5 millioner kr (total gjeld)',
        'Ingenting – staten dekker tapet',
        '2,5 millioner kr (halvparten av gjelden)'
      ],
      correctAnswer: 0,
      solution: 'I et aksjeselskap har aksjonærene begrenset ansvar. De taper kun det de har investert – i dette tilfellet 100 000 kr. De kan ikke bli krevd for mer, selv om selskapets gjeld er langt større.'
    },
    {
      id: 'oks-7-2-kausjon',
      type: 'text',
      title: 'Personlig kausjon',
      content: `**Personlig kausjon** (garanti) er et vanlig krav fra banker når et AS søker lån. Selv om selskapet har begrenset ansvar, krever banken ofte at eierne **stiller personlig garanti** for lånet.

**Hva betyr det?**
Hvis selskapet ikke kan betale lånet, kan banken kreve pengene fra kausjonisten – altså fra eierens private økonomi.

**Eksempel:**
Et AS tar opp lån på 1 million kr. Banken krever at daglig leder kausjonerer personlig. Hvis selskapet går konkurs, kan banken kreve 1 million kr fra daglig leders private økonomi – selv om selskapet har begrenset ansvar.

**Risiko:**
Personlig kausjon kan i praksis **oppheve** det begrensede ansvaret. Mange gründere tror de er beskyttet i et AS, men har kausjonert for alle lånene – og står derfor med samme risiko som i et ENK.

**Konklusjon:**
Vær svært forsiktig med å kausjonere personlig for selskapets lån. Det kan sette hele din private økonomi i fare.`
    },
    {
      id: 'oks-7-2-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hva skjer med det begrensede ansvaret i et AS hvis eieren har kausjonert personlig for et lån?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['ansvar', 'kausjon', 'risiko'],
      exerciseType: 'multiple-choice',
      options: [
        'Kausjonen opphever det begrensede ansvaret for dette lånet',
        'Det begrensede ansvaret gjelder fortsatt fullt ut',
        'Kausjonen gjelder bare hvis selskapet går konkurs',
        'Banken kan ikke kreve penger fra kausjonisten'
      ],
      correctAnswer: 0,
      solution: 'Personlig kausjon opphever i praksis det begrensede ansvaret for det aktuelle lånet. Hvis selskapet ikke kan betale, kan banken kreve pengene fra kausjonistens private økonomi – selv om selskapet er et AS.'
    },
    {
      id: 'oks-7-2-risk-assessment',
      type: 'example',
      title: 'Risikovurdering ved valg av selskapsform',
      content: `**Faktorer som påvirker valg av selskapsform:**

**Velg ENK/ANS (ubegrenset ansvar) hvis:**
- Virksomheten har lav økonomisk risiko
- Du driver tjenesteyting uten store investeringer
- Du vil unngå formaliteter og kostnader
- Du vil ha enkel skattebehandling

**Eksempler:** Frisør, konsulent, fotograf, grafisk designer

**Velg AS (begrenset ansvar) hvis:**
- Virksomheten har høy økonomisk risiko
- Du planlegger store investeringer eller lån
- Du skal hente inn ekstern kapital
- Du vil beskytte privat økonomi

**Eksempler:** Produksjonsbedrift, teknologiselskap, eiendomsutvikling, restaurant

**Spørsmål å stille seg:**
1. Hvor mye kapital trenger virksomheten?
2. Hva er den økonomiske risikoen?
3. Skal jeg hente inn investorer?
4. Hvor viktig er det å beskytte privat økonomi?
5. Hvor mye administrasjon tåler jeg?`
    },
    {
      id: 'oks-7-2-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'En fotograf skal starte virksomhet. Hun trenger lite utstyr (har allerede kamera), driver tjenesteyting uten store kostnader, og har lav økonomisk risiko. Hvilken selskapsform er mest hensiktsmessig?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['selskapsformer', 'risiko', 'valg'],
      exerciseType: 'classic',
      solution: `**Anbefaling:** Enkeltpersonforetak (ENK)

**Begrunnelse:**
1. **Lav risiko:** Tjenesteyting uten store investeringer gir lav økonomisk risiko
2. **Enkel administrasjon:** ENK er billig og enkelt å drive
3. **Ingen kapitalkrav:** Trenger ikke 30 000 kr i aksjekapital
4. **Personlig skatt:** Enklere skattebehandling enn AS

Det ubegrensede ansvaret er akseptabelt når risikoen er liten. Hvis virksomheten vokser og risikoen øker, kan hun senere omorganisere til AS.`
    },
    {
      id: 'oks-7-2-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'Forklar forskjellen mellom begrenset og ubegrenset ansvar. Gi eksempler på selskapsformer med hver type ansvar.',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['ansvar', 'selskapsformer'],
      exerciseType: 'classic',
      solution: `**Ubegrenset ansvar:**
Eieren er personlig ansvarlig for all gjeld i virksomheten. Hvis selskapet ikke kan betale, kan kreditorene kreve betaling fra eierens private økonomi (bolig, bil, bankinnskudd).

**Selskapsformer:** ENK, ANS, DA

**Begrenset ansvar:**
Eierne risikerer kun å tape det de har investert i selskapet. Personlig økonomi er beskyttet. Hvis selskapet går konkurs, kan kreditorene **ikke** kreve penger fra eiernes private økonomi.

**Selskapsformer:** AS, ASA, SA, NUF

**Unntak:** Personlig kausjon kan oppheve det begrensede ansvaret for spesifikke lån.`
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-7-2-exercise-6',
      type: 'exercise',
      title: 'Oppgave 6 – Samleoppgave',
      content: `En gründer planlegger å starte en restaurant. Investeringen er på 2 millioner kr (lokale, utstyr, inventar), og det er usikkert om konseptet vil lykkes.

a) Hvilken type ansvar vil du anbefale – begrenset eller ubegrenset? Begrunn.
b) Hvilken konkret selskapsform vil du anbefale?
c) Hva bør gründeren være obs på når det gjelder finansiering?`,
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['ansvar', 'risiko', 'selskapsformer'],
      exerciseType: 'classic',
      solution: `**a) Type ansvar:**
**Begrenset ansvar** er klart å anbefale.

**Begrunnelse:**
- Høy investeringssum (2 millioner kr)
- Høy økonomisk risiko (restaurant har høy konkursrate)
- Beskytter gründerens private økonomi hvis konseptet ikke lykkes

**b) Selskapsform:**
**Aksjeselskap (AS)**

**Begrunnelse:**
- Begrenset ansvar beskytter privat økonomi
- Enklere å hente inn investorer hvis nødvendig
- Gir mer profesjonelt inntrykk overfor leverandører

**c) Finansiering:**
**Vær forsiktig med personlig kausjon!**

Banker vil sannsynligvis kreve at gründeren kausjonerer personlig for lån. Dette opphever i praksis det begrensede ansvaret. Alternativer:
- Prøv å unngå kausjon ved å stille annen sikkerhet
- Begrens kausjon til et maksimumsbeløp
- Hent inn egenkapital fra investorer i stedet for lån`
    },
    {
      id: 'oks-7-2-exercise-7',
      type: 'exercise',
      title: 'Oppgave 7 – Samleoppgave',
      content: 'En virksomhet driver som ENK og har tjent godt de siste årene. Nå planlegger eieren å ekspandere med ny produksjonslinje som krever 1,5 millioner kr i investering. Diskuter om eieren bør endre selskapsform, og begrunn svaret.',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['selskapsformer', 'risiko', 'omorganisering'],
      exerciseType: 'classic',
      solution: `**Anbefaling:** Eieren bør vurdere å omorganisere til **aksjeselskap (AS)**.

**Begrunnelse:**

**Argumenter for AS:**
1. **Høy investering:** 1,5 millioner kr er en stor sum som øker økonomisk risiko
2. **Begrenset ansvar:** Beskytter eierens private økonomi hvis investeringen mislykkes
3. **Ekstern finansiering:** Lettere å hente inn kapital fra investorer i et AS
4. **Vekstpotensial:** AS er bedre egnet for vekst og skalering

**Argumenter mot (fortsette ENK):**
1. **Mer administrasjon:** AS krever styre, årsregnskap, revisjon
2. **Kapitalkrav:** Må ha minimum 30 000 kr i aksjekapital
3. **Dobbel beskatning:** Først selskapsskatt (22 %), deretter skatt på utbytte

**Konklusjon:**
Fordelene ved AS veier tyngst når investeringen er så stor. Det ubegrensede ansvaret i ENK er en for stor risiko. Eieren bør omorganisere til AS før ekspansjonen.`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 7.3: Revisor og regnskapsfører
// ============================================================================

const CHAPTER_OKONOMISTYRING_7_3: TextbookChapter = {
  id: 'oks-7-3',
  title: 'Revisor og regnskapsfører',
  subject: 'okonomistyring',
  gradeLevel: 'vg2',
  estimatedMinutes: 20,
  content: [
    {
      id: 'oks-7-3-intro',
      type: 'text',
      title: 'Innledning',
      content: `Alle virksomheter i Norge må føre **regnskap** og levere **årsregnskap**. For mange bedrifter er det også krav om **revisjon**. Men hva er egentlig forskjellen på en regnskapsfører og en revisor?

I dette kapitlet ser vi på:
- Regnskapsførerens rolle og autorisasjonskrav
- Revisors rolle og uavhengighet
- Internkontroll og risikostyring`
    },
    {
      id: 'oks-7-3-accountant',
      type: 'text',
      title: 'Regnskapsførerens rolle',
      content: `En **regnskapsfører** fører den daglige regnskapsføringen i virksomheten. Dette inkluderer:

**Arbeidsoppgaver:**
- Registrere alle inn- og utbetalinger
- Føre kjøps- og salgsreskontro (faktura til/fra kunder og leverandører)
- Avstemme bankkonti
- Beregne og betale merverdiavgift (mva)
- Beregne lønninger og trekke skatt
- Utarbeide årsregnskap og årsberetning
- Levere skattemelding

**Eksempel:**
En liten butikk har regnskapsfører som kommer én gang i måneden for å registrere alle fakturaer, avstemme kassen, og sende inn mva-melding.

Regnskapsføreren sikrer at virksomheten følger **regnskapsloven** og har **god kontroll** på økonomien.`
    },
    {
      id: 'oks-7-3-authorization',
      type: 'text',
      title: 'Autorisasjonskrav for regnskapsførere',
      content: `Fra 2004 har Norge hatt krav om **autorisasjon** for alle som driver regnskapsføring for andre.

**Autorisasjonsplikt:**
Alle som driver regnskapsføring profesjonelt må være:
- **Autorisert regnskapsfører** – grunnleggende autorisasjon
- **Godkjent regnskapsfører** – høyere kompetanse og erfaring

**Krav for autorisasjon:**
1. Bestått godkjent regnskapsutdanning
2. Minimum to års praksis i regnskapsføring
3. Være registrert i **Regnskapsførerregisteret**
4. Følge etiske retningslinjer

**Hvorfor autorisasjon?**
- Sikrer **faglig kompetanse** hos regnskapsførere
- Beskytter virksomheter mot feil og svindel
- Gir ansvarliggjøring gjennom tilsynsmyndighet
- Styrker tilliten til regnskapsbransjen

**Tilsyn:**
Finanstilsynet fører tilsyn med autoriserte regnskapsførere og kan tilbakekalle autorisasjon ved brudd på reglene.

**Eksempel:**
En regnskapsfører som jukser med kunders regnskap kan miste autorisasjonen og forbys å drive regnskapsføring.`
    },
    {
      id: 'oks-7-3-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hvorfor er det krav om autorisasjon for regnskapsførere i Norge?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'easy',
      topics: ['regnskapsfører', 'autorisasjon'],
      exerciseType: 'multiple-choice',
      options: [
        'For å sikre faglig kompetanse og beskytte virksomheter mot feil',
        'For å øke prisen på regnskapstjenester',
        'For å redusere antall regnskapsførere i markedet',
        'For å gjøre det enklere å drive virksomhet'
      ],
      correctAnswer: 0,
      solution: 'Autorisasjonskravet sikrer at regnskapsførere har nødvendig faglig kompetanse og erfaring. Dette beskytter virksomheter mot feil og svindel, og styrker tilliten til regnskapsbransjen. Finanstilsynet fører tilsyn.'
    },
    {
      id: 'oks-7-3-auditor',
      type: 'text',
      title: 'Revisors rolle',
      content: `En **revisor** er uavhengig kontrollør som gjennomgår virksomhetens regnskap og bekrefter at det er korrekt. Revisor jobber **ikke** for virksomheten, men skal være **objektiv** og **uavhengig**.

**Revisors hovedoppgave:**
Revisor skal bekrefte at årsregnskapet gir et **rettvisende bilde** av virksomhetens økonomiske stilling. Dette gjøres gjennom:

1. **Kontroll av regnskap:** Sjekke at alle bilag, fakturaer og transaksjoner er korrekt registrert
2. **Vurdering av verdier:** Kontrollere at eiendeler og gjeld er riktig verdsatt
3. **Risikovurdering:** Vurdere risiko for feil og svindel
4. **Revisjonsberetning:** Skrive rapport som bekrefter eller avviker fra regnskapet

**Eksempel:**
Et AS leverer årsregnskap som viser 5 millioner kr i omsetning. Revisor går gjennom alle fakturaer, kontoutskrifter og bilag, og bekrefter at tallene stemmer. Revisor skriver deretter en **revisjonsberetning** som sier om regnskapet er riktig eller ikke.

**Konklusjon:**
Revisor er virksomhetens **økonomiske vaktbikkje** som sikrer at regnskapet er troverdig og korrekt.`
    },
    {
      id: 'oks-7-3-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'Hva er revisors hovedoppgave?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'easy',
      topics: ['revisor', 'revisjon'],
      exerciseType: 'multiple-choice',
      options: [
        'Bekrefte at årsregnskapet gir et rettvisende bilde av virksomhetens økonomi',
        'Føre det daglige regnskapet i virksomheten',
        'Gi virksomheten råd om hvordan de kan spare skatt',
        'Hjelpe virksomheten med å tjene mer penger'
      ],
      correctAnswer: 0,
      solution: 'Revisors hovedoppgave er å bekrefte at årsregnskapet gir et rettvisende bilde av virksomhetens økonomiske stilling. Revisor gjennomgår regnskap, bilag og transaksjoner, og skriver en revisjonsberetning.'
    },
    {
      id: 'oks-7-3-audit-requirement',
      type: 'text',
      title: 'Plikt til revisjon',
      content: `Ikke alle virksomheter må bruke revisor. Krav til revisjon avhenger av **størrelse** på virksomheten.

**Revisjonsplikt for AS:**
Et aksjeselskap må ha revisor hvis det oppfyller minst to av disse kriteriene:

1. **Salgsinntekter** > 6 millioner kr
2. **Balansesum** (eiendeler) > 23 millioner kr
3. **Antall ansatte** > 10 årsverk

**Eksempel 1 – Revisjonspliktig:**
Et AS har 8 millioner kr i salg, 15 millioner kr i balanse, og 12 ansatte → Oppfyller to kriterier → **Må ha revisor**

**Eksempel 2 – Ikke revisjonspliktig:**
Et AS har 4 millioner kr i salg, 10 millioner kr i balanse, og 5 ansatte → Oppfyller ingen kriterier → **Trenger ikke revisor**

**Unntak:**
- Små AS kan velge bort revisor hvis de er under grensene
- Konsernselskaper må alltid ha revisor
- Allmennaksjeselskap (ASA) må alltid ha revisor

**Frivillig revisjon:**
Selv om det ikke er krav, kan virksomheten velge å bruke revisor frivillig. Dette gir økt **troverdighet** overfor banker og investorer.`
    },
    {
      id: 'oks-7-3-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Et AS har 7 millioner kr i salg, 20 millioner kr i balanse, og 8 ansatte. Må selskapet ha revisor?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['revisor', 'revisjonsplikt'],
      exerciseType: 'multiple-choice',
      options: [
        'Ja, fordi det oppfyller to av tre kriterier',
        'Nei, fordi det ikke oppfyller alle tre kriterier',
        'Ja, fordi alle AS må ha revisor',
        'Nei, fordi det har under 10 ansatte'
      ],
      correctAnswer: 0,
      solution: 'Selskapet må ha revisor fordi det oppfyller to av tre kriterier: salg > 6 millioner kr (7 mill.) og balanse > 23 millioner kr (nei), og ansatte > 10 (nei). Salg og balanse oppfyller to kriterier, derfor revisjonspliktig.'
    },
    {
      id: 'oks-7-3-independence',
      type: 'text',
      title: 'Revisors uavhengighet',
      content: `**Uavhengighet** er revisjonens viktigste prinsipp. Revisor må være **objektiv** og **nøytral** – ikke påvirket av virksomheten eller ledelsen.

**Krav til uavhengighet:**
- Revisor kan **ikke** være ansatt i virksomheten
- Revisor kan **ikke** eie aksjer i virksomheten
- Revisor kan **ikke** ha nære familieforhold til ledelsen
- Revisor kan **ikke** gi råd som påvirker regnskapet

**Eksempel på brudd:**
En revisor hjelper et AS med å utarbeide årsregnskapet, og reviderer deretter samme regnskap. Dette er **ikke tillatt** fordi revisor da kontrollerer sitt eget arbeid.

**Rotasjon av revisor:**
For å sikre uavhengighet må mange selskaper bytte revisor regelmessig (hvert 7.-10. år). Dette forhindrer at revisor blir for «komfortabel» med kunden.

**Konklusjon:**
Revisors troverdighet avhenger av **uavhengighet**. Hvis revisor har interessekonflikt, mister revisjonen sin verdi.`
    },
    {
      id: 'oks-7-3-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'Hvorfor er det viktig at revisor er uavhengig av virksomheten?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['revisor', 'uavhengighet'],
      exerciseType: 'classic',
      solution: `**Viktigheten av uavhengighet:**

Revisor må være uavhengig for å sikre **objektivitet** og **troverdighet**.

**Grunner:**
1. **Objektivitet:** Revisor må kunne påpeke feil uten å være påvirket av ledelsen
2. **Troverdighet:** Brukere av regnskapet (banker, investorer, myndigheter) må stole på at revisor er nøytral
3. **Forebygging av svindel:** Uavhengig revisor avdekker lettere feil og økonomisk kriminalitet
4. **Profesjonell integritet:** Revisor representerer allmennhetens interesser, ikke virksomhetens

**Eksempel:**
Hvis revisor eier aksjer i selskapet, kan revisor være fristet til å overse feil for å beskytte egne investeringer. Dette undergraver hele revisjonens formål.`
    },
    {
      id: 'oks-7-3-internal-control',
      type: 'text',
      title: 'Internkontroll',
      content: `**Internkontroll** er virksomhetens eget system for å sikre god styring og kontroll av økonomien.

**Formål med internkontroll:**
- Forebygge feil og svindel
- Sikre pålitelig regnskapsføring
- Beskytte eiendeler mot tyveri og misbruk
- Sikre at lover og regler følges

**Eksempler på internkontroll:**
1. **Arbeidsdeling:** Ulike personer godkjenner og betaler fakturaer
2. **Autorisasjon:** Kun daglig leder kan godkjenne kjøp over 50 000 kr
3. **Avstemming:** Bankkonto avstemmes hver måned
4. **Tilgangskontroll:** Kun kasserer har tilgang til kassen
5. **Bilagskontroll:** Alle utbetalinger må dokumenteres med bilag

**Eksempel:**
En butikk har regel om at **to personer** må telle kassen ved dagens slutt. Dette forhindrer at én person kan stjele penger uten å bli oppdaget.

**Revisors rolle:**
Revisor vurderer om virksomheten har **god internkontroll**. Svak internkontroll øker risiko for feil og svindel.

**Konklusjon:**
God internkontroll reduserer risiko og gir bedre oversikt over økonomien.`
    },
    {
      id: 'oks-7-3-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'Forklar forskjellen mellom en regnskapsfører og en revisor.',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['regnskapsfører', 'revisor'],
      exerciseType: 'classic',
      solution: `**Regnskapsfører:**
- Fører det daglige regnskapet (registrerer transaksjoner, avstemmer konti, betaler mva)
- Jobber **for** virksomheten
- Utarbeider årsregnskap
- Må være autorisert

**Revisor:**
- Kontrollerer at regnskapet er korrekt og rettvisende
- Jobber **uavhengig** av virksomheten
- Skriver revisjonsberetning
- Må være statsautorisert eller registrert revisor

**Hovedforskjell:**
Regnskapsfører **lager** regnskapet, revisor **kontrollerer** regnskapet.

**Eksempel:**
Regnskapsføreren registrerer alle fakturaer og lager årsregnskapet. Deretter går revisor gjennom alt og bekrefter at regnskapet stemmer.`
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-7-3-exercise-6',
      type: 'exercise',
      title: 'Oppgave 6 – Samleoppgave',
      content: `Et lite AS med 4 ansatte, 3 millioner kr i salg og 8 millioner kr i balanse ønsker å spare penger ved å ikke bruke revisor.

a) Kan selskapet lovlig velge bort revisor? Begrunn.
b) Hva kan være fordeler med å bruke revisor frivillig?
c) Hva er risikoen ved å ikke ha revisor?`,
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['revisor', 'revisjonsplikt', 'internkontroll'],
      exerciseType: 'classic',
      solution: `**a) Kan selskapet velge bort revisor?**
**Ja**, selskapet kan lovlig velge bort revisor.

**Begrunnelse:**
Selskapet oppfyller ingen av revisjonskriteriene:
- Salg: 3 mill. kr (under 6 mill.)
- Balanse: 8 mill. kr (under 23 mill.)
- Ansatte: 4 (under 10)

Siden det ikke oppfyller minst to kriterier, er det ikke revisjonspliktig.

**b) Fordeler med frivillig revisjon:**
1. **Økt troverdighet:** Banker og investorer stoler mer på revidert regnskap
2. **Kvalitetssikring:** Revisor avdekker feil før de blir store problemer
3. **Bedre internkontroll:** Revisor gir råd om forbedringer
4. **Profesjonelt inntrykk:** Viser at selskapet tar økonomi på alvor

**c) Risiko ved å ikke ha revisor:**
1. **Feil oppdages ikke:** Regnskapsfeil kan føre til feil beslutninger
2. **Svindel:** Høyere risiko for økonomisk kriminalitet
3. **Mistillit:** Banker kan være mer skeptiske til å gi lån
4. **Juridisk ansvar:** Styret kan bli ansvarliggjort for regnskapsfeil`
    },
    {
      id: 'oks-7-3-exercise-7',
      type: 'exercise',
      title: 'Oppgave 7 – Samleoppgave',
      content: `En virksomhet har oppdaget at regnskapsføreren har gjort flere alvorlige feil i regnskapet, noe som har ført til feil mva-innberetning og skattemelding.

a) Hvilke konsekvenser kan dette få for virksomheten?
b) Hva burde virksomheten ha gjort for å forebygge slike feil?
c) Kan virksomheten holde regnskapsføreren ansvarlig?`,
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['regnskapsfører', 'internkontroll', 'ansvar'],
      exerciseType: 'classic',
      solution: `**a) Konsekvenser for virksomheten:**
1. **Skattemessige konsekvenser:** Feil mva og skatt kan føre til etterberegning og **rentetillegg**
2. **Bøter:** Skatteetaten kan ilegge **tilleggsskatt** (inntil 60 % av beløpet)
3. **Omdømmetap:** Feil regnskap svekker tilliten til virksomheten
4. **Tidskrevende:** Må rette opp alle feil og levere korrigert regnskap

**b) Forebygging av feil:**
1. **Autorisert regnskapsfører:** Bruk kun autorisert regnskapsfører med god fagkompetanse
2. **Intern kontroll:** Daglig leder bør jevnlig gjennomgå regnskapet
3. **Revisor:** Bruk revisor til å kvalitetssikre regnskapet
4. **Opplæring:** Sørg for at regnskapsfører har oppdatert kunnskap om skatteregler

**c) Kan regnskapsføreren holdes ansvarlig?**
**Ja**, autoriserte regnskapsførere har **profesjonsansvar**.

Virksomheten kan:
- Kreve erstatning for økonomisk tap
- Klage til Finanstilsynet (kan føre til tap av autorisasjon)
- Anmelde hvis det er snakk om grov uaktsomhet eller svindel

Regnskapsføreren bør ha **yrkesskadeforsikring** som dekker slike feil.`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 7.4: Interessegrupper og samfunnsansvar
// ============================================================================

const CHAPTER_OKONOMISTYRING_7_4: TextbookChapter = {
  id: 'oks-7-4',
  title: 'Interessegrupper og samfunnsansvar',
  subject: 'okonomistyring',
  gradeLevel: 'vg2',
  estimatedMinutes: 20,
  content: [
    {
      id: 'oks-7-4-intro',
      type: 'text',
      title: 'Innledning',
      content: `En virksomhet eksisterer ikke i et vakuum. Den påvirker – og påvirkes av – mange ulike grupper i samfunnet. Disse kalles **interessegrupper** eller **interessenter**.

I dette kapitlet skal vi se på:
- Hvem er virksomhetens interessegrupper?
- Hva er samfunnsansvar (CSR)?
- Hvordan balanserer virksomheter ulike interesser?`
    },
    {
      id: 'oks-7-4-stakeholders',
      type: 'text',
      title: 'Interessegrupper',
      content: `**Interessegrupper** (stakeholders) er alle som har en interesse i virksomhetens drift og beslutninger.

**De viktigste interessegruppene:**

**1. Eiere/aksjonærer**
- Ønsker høyest mulig avkastning på investering
- Tar beslutninger gjennom generalforsamling

**2. Ansatte**
- Ønsker trygg jobb, god lønn, godt arbeidsmiljø
- Representert gjennom tillitsvalgte og fagforeninger

**3. Kunder**
- Ønsker gode produkter til rimelig pris
- Driver etterspørselen i markedet

**4. Leverandører**
- Ønsker langsiktige kontrakter og betaling til avtalt tid
- Viktige for virksomhetens forsyningskjede

**5. Kreditorer (banker, långivere)**
- Ønsker at lån betales tilbake med renter
- Vurderer virksomhetens økonomiske soliditet

**6. Samfunnet (stat, kommune, lokalsamfunn)**
- Ønsker arbeidsplasser, skatteinntekter, ansvarlig drift
- Regulerer virksomheten gjennom lover og regler

**7. Miljøet og fremtidige generasjoner**
- Berørt av virksomhetens miljøpåvirkning
- Kan ikke selv tale sin sak

**Eksempel:**
En møbelfabrikk har mange interessenter: eierne vil ha overskudd, de ansatte vil ha trygg jobb, kundene vil ha kvalitetsmøbler, kommunen vil ha arbeidsplasser og skatteinntekter, og miljøet påvirkes av produksjonen.`
    },
    {
      id: 'oks-7-4-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hvilken interessegruppe er representert gjennom generalforsamlingen i et aksjeselskap?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'easy',
      topics: ['interessegrupper', 'aksjeselskap'],
      exerciseType: 'multiple-choice',
      options: [
        'Eiere/aksjonærer',
        'Ansatte',
        'Kunder',
        'Leverandører'
      ],
      correctAnswer: 0,
      solution: 'Eiere og aksjonærer er representert gjennom generalforsamlingen, som er selskapets øverste organ. Her tar aksjonærene de viktigste beslutningene, som valg av styre og godkjenning av årsregnskap.'
    },
    {
      id: 'oks-7-4-stakeholder-model',
      type: 'example',
      title: 'Interessentmodellen',
      content: `**Interessentmodellen** illustrerer hvordan virksomheten står i sentrum og må balansere ulike interesser.

**Konflikter mellom interessegrupper:**

**Eiere vs. Ansatte:**
- Eiere vil maksimere profitt (kutte kostnader)
- Ansatte vil ha høyere lønn og bedre vilkår

**Kunder vs. Eiere:**
- Kunder vil ha lavest mulig pris
- Eiere vil ha høyest mulig margin

**Miljø vs. Eiere:**
- Miljøet krever bærekraftig produksjon
- Eiere frykter høyere kostnader ved miljøtiltak

**Samfunn vs. Eiere:**
- Samfunnet vil ha høyere skatter
- Eiere vil minimere skattebelastning

**Utfordringen:**
Ledelsen må balansere disse ofte motstridende interessene. Virksomheten kan ikke kun fokusere på kortsiktig profitt – den må også ta hensyn til langsiktig bærekraft og tillit i samfunnet.`
    },
    {
      id: 'oks-7-4-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'En bedrift vurderer å outsource produksjon til et lavkostland for å redusere kostnader. Hvilke interessegrupper vil dette påvirke negativt?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['interessegrupper', 'beslutninger'],
      exerciseType: 'multiple-choice',
      options: [
        'Ansatte og lokalsamfunnet',
        'Eiere og kreditorer',
        'Kunder og leverandører',
        'Kun miljøet'
      ],
      correctAnswer: 0,
      solution: 'Outsourcing påvirker ansatte (mister jobber) og lokalsamfunnet (færre arbeidsplasser, lavere skatteinntekter) negativt. Eierne kan tjene på lavere kostnader, men risikerer omdømmetap og konflikter med fagforeninger.'
    },
    {
      id: 'oks-7-4-csr',
      type: 'text',
      title: 'Samfunnsansvar (CSR)',
      content: `**Samfunnsansvar** (Corporate Social Responsibility – CSR) betyr at virksomheter tar ansvar for hvordan de påvirker samfunnet og miljøet – utover det loven krever.

**De tre pilarene i CSR:**

**1. Økonomisk ansvar**
- Skape verdier og lønnsomhet
- Betale skatt og avgifter
- Gi ansatte trygg jobb

**2. Sosialt ansvar**
- Sikre gode arbeidsforhold
- Respektere menneskerettigheter
- Bidra til lokalsamfunnet
- Etisk forretningsdrift

**3. Miljøansvar**
- Redusere utslipp og forurensning
- Bruke ressurser bærekraftig
- Ta hensyn til biologisk mangfold

**Hvorfor CSR?**
- **Omdømme:** Kunder og investorer foretrekker ansvarlige bedrifter
- **Tillit:** Samfunnet støtter virksomheter som tar ansvar
- **Langsiktighet:** Bærekraftig drift sikrer fremtidig verdiskaping
- **Rekruttering:** Ansatte vil jobbe for virksomheter med gode verdier

**Eksempel:**
Orkla har egne mål for bærekraft: redusere matsvinn, bruke fornybar energi, sikre etiske leverandørkjeder, og støtte lokalsamfunn.`
    },
    {
      id: 'oks-7-4-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hva er de tre pilarene i samfunnsansvar (CSR)?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'easy',
      topics: ['CSR', 'samfunnsansvar'],
      exerciseType: 'multiple-choice',
      options: [
        'Økonomisk ansvar, sosialt ansvar, miljøansvar',
        'Profitt, vekst, innovasjon',
        'Eiere, ansatte, kunder',
        'Produksjon, salg, markedsføring'
      ],
      correctAnswer: 0,
      solution: 'De tre pilarene i CSR er økonomisk ansvar (skape verdier), sosialt ansvar (sikre gode arbeidsforhold og bidra til samfunnet), og miljøansvar (redusere miljøpåvirkning).'
    },
    {
      id: 'oks-7-4-esg',
      type: 'text',
      title: 'ESG – Miljø, Sosial og Styring',
      content: `**ESG** står for **Environmental, Social and Governance** (miljø, sosial og styring). Dette er en rammeverk for å vurdere virksomheters bærekraft.

**Hva er ESG?**

**E – Environmental (Miljø):**
- Klimagassutslipp
- Energiforbruk
- Avfallshåndtering
- Vannforbruk

**S – Social (Sosial):**
- Arbeidsforhold
- Likestilling
- Menneskerettigheter i leverandørkjeden
- Samfunnsengasjement

**G – Governance (Styring):**
- Etisk ledelse
- Antikorrupsjon
- Åpenhet og rapportering
- Styresammensetning

**Hvorfor er ESG viktig?**
- **Investorer** bruker ESG-kriterier når de vurderer investeringer
- **Banker** vurderer ESG-risiko ved lån
- **Kunder** velger bærekraftige produkter
- **Regulering** – EU innfører strengere rapporteringskrav

**Eksempel:**
Equinor rapporterer årlig på ESG: CO₂-utslipp, sikkerhet på plattformer, kvinneandel i ledelsen, og antikorrupsjonspolitikk.

**Konklusjon:**
ESG er blitt en standard for å måle og rapportere på bærekraft. Det er ikke lenger nok å bare være lønnsom – virksomheter må også være ansvarlige.`
    },
    {
      id: 'oks-7-4-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'Hva står ESG for?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'easy',
      topics: ['ESG', 'bærekraft'],
      exerciseType: 'multiple-choice',
      options: [
        'Environmental, Social, Governance (Miljø, Sosial, Styring)',
        'Economic, Social, Governmental',
        'Energy, Sustainability, Growth',
        'Equity, Strategy, Governance'
      ],
      correctAnswer: 0,
      solution: 'ESG står for Environmental (miljø), Social (sosial), og Governance (styring). Dette er et rammeverk for å vurdere virksomheters bærekraft og samfunnsansvar.'
    },
    {
      id: 'oks-7-4-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'Forklar hvorfor samfunnsansvar (CSR) kan være lønnsomt for en virksomhet på lang sikt.',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['CSR', 'lønnsomhet', 'strategi'],
      exerciseType: 'classic',
      solution: `**Hvorfor CSR er lønnsomt på lang sikt:**

**1. Bedre omdømme:**
Kunder og investorer foretrekker virksomheter med godt samfunnsansvar. Dette gir konkurransefortrinn og økt salg.

**2. Tiltrekke talenter:**
Dyktige medarbeidere vil jobbe for virksomheter med gode verdier. Dette reduserer rekrutteringskostnader.

**3. Redusert risiko:**
Ansvarlig drift reduserer risiko for skandaler, søksmål og regulatoriske sanksjoner.

**4. Tilgang til kapital:**
Investorer og banker prioriterer virksomheter med god ESG-profil. Dette gir lavere kapitalkostnader.

**5. Langsiktig verdiskaping:**
Bærekraftig bruk av ressurser sikrer at virksomheten kan fortsette å skape verdier i fremtiden.

**Eksempel:**
Patagonia (utendørsklær) bygger hele merkevaren på miljøansvar. De har lojale kunder, høy lønnsomhet, og lavt turnover blant ansatte.`
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-7-4-exercise-6',
      type: 'exercise',
      title: 'Oppgave 6 – Samleoppgave',
      content: `En klesbutikk oppdager at en av deres leverandører bruker barnearbeid i produksjonen. Diskuter:

a) Hvilke interessegrupper påvirkes av denne situasjonen?
b) Hva bør klesbutikken gjøre, og hvorfor?
c) Hva kan skje hvis klesbutikken ikke gjør noe?`,
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['interessegrupper', 'etikk', 'CSR'],
      exerciseType: 'classic',
      solution: `**a) Hvilke interessegrupper påvirkes?**
1. **Barna** som utnyttes i produksjonen
2. **Kunder** som kjøper produktene (ofte uten å vite om barnearbeid)
3. **Ansatte** som kan føle skam over arbeidsgiverens etikk
4. **Eiere** som risikerer omdømmetap og økonomisk tap
5. **Samfunnet** som forventer etisk forretningsdrift

**b) Hva bør klesbutikken gjøre?**
Klesbutikken bør **umiddelbart** avslutte samarbeidet med leverandøren.

**Begrunnelse:**
- Barnearbeid er brudd på menneskerettigheter
- Det er i strid med god forretningsetikk og CSR
- Det kan føre til boikott og omdømmetap hvis det blir kjent
- Norske virksomheter har ansvar for hele leverandørkjeden (åpenhetsloven)

Klesbutikken bør:
- Finne ny leverandør med etiske standarder
- Informere kunder om tiltak som er iverksatt
- Innføre bedre kontroll av leverandørkjeden

**c) Hva kan skje hvis de ikke gjør noe?**
1. **Omdømmetap:** Hvis det blir kjent, kan mediene og sosiale medier ødelegge omdømmet
2. **Boikott:** Kunder kan slutte å handle hos butikken
3. **Juridiske konsekvenser:** Brudd på åpenhetsloven kan gi sanksjoner
4. **Tap av ansatte:** Ansatte vil ikke jobbe for en uetisk bedrift
5. **Økonomisk tap:** Alt dette kan føre til konkurs`
    },
    {
      id: 'oks-7-4-exercise-7',
      type: 'exercise',
      title: 'Oppgave 7 – Samleoppgave',
      content: `En bedrift må velge mellom to strategier:

**Alternativ A:** Investere i miljøvennlig teknologi (kostnad 5 millioner kr). Dette reduserer utslipp, men gir ingen direkte inntektsøkning.

**Alternativ B:** Fortsette med dagens teknologi og bruke pengene på markedsføring for å øke salget.

Diskuter hvilke interessegrupper som favoriserer hvert alternativ, og gi en anbefaling.`,
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['interessegrupper', 'bærekraft', 'beslutninger'],
      exerciseType: 'classic',
      solution: `**Interessegrupper per alternativ:**

**Alternativ A (miljøinvestering):**
**Favoriserer:**
- **Miljøet og fremtidige generasjoner** – reduserte utslipp
- **Samfunnet** – bedriften tar miljøansvar
- **Miljøbevisste kunder** – vil foretrekke bedriften
- **Langsiktige investorer** – bedre ESG-profil

**Motstandere:**
- **Kortsiktige eiere** – vil ha høyere utbytte nå
- **Kreditorer** – bekymret for lønnsomhet

**Alternativ B (markedsføring):**
**Favoriserer:**
- **Kortsiktige eiere** – raskere avkastning
- **Ansatte** – økt salg kan gi tryggere jobber
- **Kreditorer** – bedre lønnsomhet på kort sikt

**Motstandere:**
- **Miljøet** – fortsatt høye utslipp
- **Fremtidige generasjoner** – miljøproblemene fortsetter
- **Samfunnet** – bedriften tar ikke ansvar

**Anbefaling:**
Jeg vil anbefale **Alternativ A** (miljøinvestering).

**Begrunnelse:**
1. **Langsiktig lønnsomhet:** Miljøteknologi blir et konkurransefortrinn når regulering strammes til
2. **Omdømme:** Bedriften posisjonerer seg som ansvarlig
3. **Tilgang til kapital:** Investorer og banker prioriterer ESG
4. **Fremtidssikring:** Unngår fremtidige kostnader ved CO₂-avgifter og regulering

Bedriften kan også søke om støtte til miljøinvesteringer (Enova, Innovasjon Norge) som reduserer kostnaden.`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 7.5: Bærekraftig næringsliv
// ============================================================================

const CHAPTER_OKONOMISTYRING_7_5: TextbookChapter = {
  id: 'oks-7-5',
  title: 'Bærekraftig næringsliv',
  subject: 'okonomistyring',
  gradeLevel: 'vg2',
  estimatedMinutes: 25,
  content: [
    {
      id: 'oks-7-5-intro',
      type: 'text',
      title: 'Innledning',
      content: `**Bærekraft** handler om å møte dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. For næringslivet betyr dette å skape verdier på en måte som er økonomisk, sosialt og miljømessig ansvarlig.

I dette kapitlet skal vi se på:
- FNs bærekraftsmål
- Sirkulærøkonomi
- Bærekraftsrapportering og åpenhetsloven`
    },
    {
      id: 'oks-7-5-sdg',
      type: 'text',
      title: 'FNs bærekraftsmål',
      content: `FN vedtok i 2015 **17 bærekraftsmål** (Sustainable Development Goals – SDGs) som skal oppnås innen 2030. Disse målene gjelder både land og næringsliv.

**De 17 bærekraftsmålene:**
1. Utrydde fattigdom
2. Utrydde sult
3. God helse og livskvalitet
4. God utdanning
5. Likestilling mellom kjønnene
6. Rent vann og gode sanitærforhold
7. Ren energi for alle
8. Anstendig arbeid og økonomisk vekst
9. Innovasjon og infrastruktur
10. Mindre ulikhet
11. Bærekraftige byer og samfunn
12. Ansvarlig forbruk og produksjon
13. Stoppe klimaendringene
14. Livet i havet
15. Livet på land
16. Fred, rettferdighet og velfungerende institusjoner
17. Samarbeid for å nå målene

**Hvordan bidrar næringslivet?**
Virksomheter kan bidra til flere av målene:

**Eksempel – Scatec (solenergi):**
- **Mål 7:** Ren energi for alle (produserer solenergi)
- **Mål 8:** Skaper arbeidsplasser i utviklingsland
- **Mål 13:** Reduserer klimautslipp

**Eksempel – Rema 1000:**
- **Mål 12:** Ansvarlig forbruk (reduserer matsvinn)
- **Mål 2:** Utrydde sult (donerer mat til veldedighet)

**Konklusjon:**
FNs bærekraftsmål gir virksomheter et rammeverk for å bidra til en bedre verden – samtidig som de skaper verdier.`
    },
    {
      id: 'oks-7-5-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hvor mange bærekraftsmål har FN satt?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'easy',
      topics: ['bærekraft', 'FN'],
      exerciseType: 'multiple-choice',
      options: [
        '17 mål',
        '10 mål',
        '25 mål',
        '50 mål'
      ],
      correctAnswer: 0,
      solution: 'FN har satt 17 bærekraftsmål (Sustainable Development Goals – SDGs) som skal oppnås innen 2030. Disse dekker områder som fattigdom, klima, helse, utdanning og likestilling.'
    },
    {
      id: 'oks-7-5-circular',
      type: 'text',
      title: 'Sirkulærøkonomi',
      content: `**Sirkulærøkonomi** er en økonomisk modell der ressurser brukes om og om igjen – i motsetning til tradisjonell **lineær økonomi** (ta, produser, kast).

**Lineær økonomi (dagens modell):**
1. Utvinne råvarer
2. Produsere varer
3. Bruke varer
4. Kaste som avfall

**Problem:** Dette fører til ressursmangel, forurensning og klimautslipp.

**Sirkulærøkonomi (fremtidens modell):**
1. **Design for gjenbruk** – lag produkter som varer lenge
2. **Gjenbruk og reparasjon** – reparer i stedet for å kaste
3. **Resirkulering** – gjør avfall om til nye råvarer
4. **Fornybare materialer** – bruk materialer som kan fornyes

**Eksempler på sirkulærøkonomi:**

**Vipps Recycle (Tise, Finn gjenbruk):**
- Plattformer for kjøp og salg av brukte varer
- Forlenger produktenes levetid

**Patagonia (klær):**
- Reparerer og selger brukte klær
- Produserer med resirkulerte materialer

**IKEA:**
- Kjøper tilbake brukte møbler
- Produserer med bærekraftige materialer

**Tomra (pantesystem):**
- Resirkulerer flasker og bokser
- Råvarer brukes til nye produkter

**Fordeler med sirkulærøkonomi:**
- Reduserer avfall og forurensning
- Sparer naturressurser
- Skaper nye arbeidsplasser (reparasjon, resirkulering)
- Reduserer klimautslipp

**Konklusjon:**
Sirkulærøkonomi er nøkkelen til bærekraftig næringsliv. I fremtiden vil virksomheter som ikke tenker sirkulært bli utkonkurrert.`
    },
    {
      id: 'oks-7-5-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'Hva er forskjellen mellom lineær økonomi og sirkulærøkonomi?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['sirkulærøkonomi', 'bærekraft'],
      exerciseType: 'multiple-choice',
      options: [
        'Lineær økonomi: ta, produser, kast. Sirkulærøkonomi: gjenbruk og resirkulering',
        'Lineær økonomi: gjenbruk. Sirkulærøkonomi: kaste avfall',
        'Begge modeller er like',
        'Sirkulærøkonomi produserer mer avfall'
      ],
      correctAnswer: 0,
      solution: 'I lineær økonomi utvinner vi råvarer, produserer varer, bruker dem og kaster som avfall (ta, produser, kast). I sirkulærøkonomi gjenbrukes ressurser gjennom reparasjon, gjenbruk og resirkulering.'
    },
    {
      id: 'oks-7-5-reporting',
      type: 'text',
      title: 'Bærekraftsrapportering',
      content: `**Bærekraftsrapportering** betyr at virksomheter offentliggjør informasjon om miljø, sosiale forhold og styring (ESG).

**Hvorfor rapportere på bærekraft?**
1. **Åpenhet:** Viser hvordan virksomheten påvirker samfunnet
2. **Tillit:** Bygger tillit hos kunder, investorer og myndigheter
3. **Forbedring:** Tvinger virksomheten til å reflektere og forbedre seg
4. **Krav:** EU innfører lovpålagt rapportering (CSRD – Corporate Sustainability Reporting Directive)

**Hva rapporteres det på?**

**Miljø:**
- CO₂-utslipp (Scope 1, 2, 3)
- Energiforbruk
- Vannforbruk
- Avfallshåndtering

**Sosialt:**
- Arbeidsmiljø
- Kjønnsbalanse i ledelsen
- Menneskerettigheter i leverandørkjeden
- Ulønnet arbeid

**Styring:**
- Styresammensetning
- Antikorrupsjon
- Etiske retningslinjer

**Standarder:**
- **GRI** (Global Reporting Initiative) – mest brukte standard
- **TCFD** (Task Force on Climate-related Financial Disclosures) – klimarapportering
- **CSRD** (EU) – lovpålagt fra 2024 for store selskaper

**Eksempel:**
Telenor publiserer årlig bærekraftsrapport med detaljer om CO₂-utslipp, energibruk, kjønnsbalanse og leverandørkontroll.`
    },
    {
      id: 'oks-7-5-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hvorfor er bærekraftsrapportering viktig for virksomheter?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['bærekraft', 'rapportering'],
      exerciseType: 'classic',
      solution: `**Hvorfor bærekraftsrapportering er viktig:**

**1. Åpenhet:**
Viser hvordan virksomheten påvirker miljø, samfunn og arbeidsforhold. Dette gir interessenter (kunder, investorer, myndigheter) innsikt.

**2. Tillit:**
Bygger tillit hos kunder som vil støtte ansvarlige virksomheter, og hos investorer som vurderer ESG-risiko.

**3. Forbedring:**
Når virksomheten måler og rapporterer, blir de tvunget til å reflektere og forbedre sin påvirkning.

**4. Lovkrav:**
EU innfører lovpålagt rapportering (CSRD) for store selskaper fra 2024. Dette vil også påvirke leverandører til store bedrifter.

**5. Konkurransefortrinn:**
Virksomheter med god bærekraftsprofil får lettere tilgang til kapital, kunder og talenter.

**Eksempel:**
Investorer bruker bærekraftsrapporter til å vurdere om de skal investere. Bedrifter med dårlig ESG-profil får høyere kapitalkostnader.`
    },
    {
      id: 'oks-7-5-transparency',
      type: 'text',
      title: 'Åpenhetsloven',
      content: `**Åpenhetsloven** (2022) krever at norske virksomheter sikrer anstendig arbeid og menneskerettigheter i sine leverandørkjeder.

**Hva krever åpenhetsloven?**

**1. Aktsomhetsvurdering:**
Virksomheten må kartlegge risiko for brudd på menneskerettigheter og arbeidsforhold i leverandørkjeden.

**Eksempler på risiko:**
- Barnearbeid hos leverandører
- Farlige arbeidsforhold
- Dårlig lønn
- Diskriminering

**2. Stoppe og forebygge:**
Hvis virksomheten finner brudd, må de stoppe samarbeidet eller kreve forbedring.

**3. Rapportere offentlig:**
Virksomheten må publisere årlig rapport om arbeidet med menneskerettigheter.

**4. Informasjonsplikt:**
Kunder kan kreve informasjon om hvordan produkter er produsert.

**Hvem omfattes?**
- Store virksomheter (over 50 ansatte eller omsetning over 80 millioner kr)
- Mindre virksomheter som er leverandører til store bedrifter

**Eksempel:**
Varner (Carlings, Cubus, Bik Bok) må sikre at klær produseres under anstendig forhold i Asia. De må inspisere fabrikker og rapportere offentlig.

**Sanksjoner:**
Virksomheter som ikke følger loven kan få tvangsmulkt og omdømmetap.

**Konklusjon:**
Åpenhetsloven gjør virksomheter ansvarlige for hele verdikjeden – ikke bare egen produksjon.`
    },
    {
      id: 'oks-7-5-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'Hva krever åpenhetsloven av norske virksomheter?',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['åpenhetsloven', 'menneskerettigheter'],
      exerciseType: 'multiple-choice',
      options: [
        'Kartlegge risiko for brudd på menneskerettigheter i leverandørkjeden',
        'Kun rapportere på egne ansatte',
        'Betale høyere skatt',
        'Kun gjelde for statseide selskaper'
      ],
      correctAnswer: 0,
      solution: 'Åpenhetsloven krever at virksomheter kartlegger risiko for brudd på menneskerettigheter og arbeidsforhold i hele leverandørkjeden. De må stoppe brudd, rapportere offentlig, og gi informasjon til kunder.'
    },
    {
      id: 'oks-7-5-future',
      type: 'example',
      title: 'Fremtidens næringsliv',
      content: `**Hvordan ser fremtidens bærekraftige næringsliv ut?**

**Trender:**
1. **Sirkulære forretningsmodeller:** Leasing i stedet for salg (møbler, elektronikk)
2. **Karbon-nøytralitet:** Virksomheter må eliminere eller kompensere for all CO₂
3. **Transparens:** Fullt innsyn i leverandørkjeder via blockchain
4. **Lokalproduksjon:** Reduserer transport og støtter lokalsamfunn
5. **Fornybar energi:** 100 % fornybar energi i produksjon

**Eksempler:**

**Varner:** Mål om klimanøytralitet innen 2050
**IKEA:** Kun bruk av fornybare og resirkulerte materialer innen 2030
**Equinor:** Investerer tungt i havvind og hydrogen
**Norsk Gjenvinning:** Resirkulerer 95 % av alt avfall

**Utfordringer:**
- Høyere kostnader på kort sikt
- Komplisert å kontrollere hele leverandørkjeden
- Mangel på standarder og regelverk

**Muligheter:**
- Nye markeder (grønn teknologi)
- Konkurransefortrinn hos miljøbevisste kunder
- Lavere risiko og bedre omdømme

**Konklusjon:**
Fremtidens næringsliv må balansere profitt med planet og mennesker. Bærekraft er ikke lenger et «nice to have», men en forutsetning for langsiktig suksess.`
    },
    {
      id: 'oks-7-5-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'En bedrift produserer elektronikk. Forklar hvordan de kan implementere sirkulærøkonomi i sin virksomhet.',
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'medium',
      topics: ['sirkulærøkonomi', 'bærekraft'],
      exerciseType: 'classic',
      solution: `**Hvordan implementere sirkulærøkonomi i elektronikkproduksjon:**

**1. Design for lang levetid:**
- Lag produkter som er lette å reparere
- Bruk modulære komponenter som kan byttes ut
- Unngå "planned obsolescence" (planlagt utdatering)

**2. Reparasjonstjeneste:**
- Tilby reparasjon i stedet for å erstatte
- Selge reservedeler til kunder

**3. Innkjøpsordning:**
- Kjøp tilbake brukte produkter
- Renover og selg som "refurbished" til lavere pris

**4. Resirkulering:**
- Ta imot utrangerte produkter
- Hent ut verdifulle materialer (metaller, plast)
- Bruk resirkulerte materialer i ny produksjon

**5. Leasing i stedet for salg:**
- Tilby leasing av produkter
- Tar tilbake produktet når leieperioden er over
- Gjenbruker komponenter

**Eksempel:**
Fairphone (mobiltelefon) er designet for enkel reparasjon. Kunder kan selv bytte skjerm, batteri og kamera. Selskapet bruker resirkulerte materialer og etiske leverandører.`
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-7-5-exercise-6',
      type: 'exercise',
      title: 'Oppgave 6 – Samleoppgave',
      content: `En produksjonsbedrift vurderer å investere i solcellepanel på taket. Investeringen koster 3 millioner kr og sparer 400 000 kr i strømkostnader per år.

a) Beregn tilbakebetalingstiden.
b) Hvilke av FNs bærekraftsmål bidrar investeringen til?
c) Hvordan kan bedriften bruke denne investeringen i markedsføring og omdømmebygging?`,
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['bærekraft', 'investering', 'FN'],
      exerciseType: 'classic',
      solution: `**a) Tilbakebetalingstid:**

Tilbakebetalingstid = Investeringskostnad ÷ Årlig besparelse

= 3 000 000 kr ÷ 400 000 kr/år
= **7,5 år**

Investeringen betaler seg tilbake på 7,5 år.

**b) Hvilke bærekraftsmål?**

**Mål 7: Ren energi for alle**
- Produserer fornybar energi (sol)

**Mål 13: Stoppe klimaendringene**
- Reduserer CO₂-utslipp ved å erstatte fossil energi

**Mål 12: Ansvarlig forbruk og produksjon**
- Bruker bærekraftig energikilde

**c) Markedsføring og omdømme:**

Bedriften kan bruke investeringen til å:

1. **Markedsføre som "grønn bedrift":**
   - Kommunisere miljøengasjement til kunder
   - Skille seg fra konkurrenter

2. **Bærekraftsrapport:**
   - Publisere CO₂-reduksjon
   - Vise konkret handling for FNs bærekraftsmål

3. **Kunder:**
   - Miljøbevisste kunder foretrekker bærekraftige leverandører
   - Kan markedsføre produkter som "produsert med solenergi"

4. **Rekruttering:**
   - Tiltrekke talenter som vil jobbe for ansvarlig bedrift

5. **Investorer:**
   - Bedre ESG-profil gir lavere kapitalkostnader

**Konklusjon:**
Investeringen har både økonomisk (strømbesparelse) og strategisk (omdømme, markedsføring) verdi.`
    },
    {
      id: 'oks-7-5-exercise-7',
      type: 'exercise',
      title: 'Oppgave 7 – Samleoppgave',
      content: `Diskuter hvordan åpenhetsloven og sirkulærøkonomi kan påvirke en norsk klesbutikks forretningsmodell. Gi konkrete eksempler på tiltak bedriften kan iverksette.`,
      subject: 'okonomistyring',
      gradeLevel: 'vg2',
      difficulty: 'hard',
      topics: ['åpenhetsloven', 'sirkulærøkonomi', 'forretningsmodell'],
      exerciseType: 'classic',
      solution: `**Hvordan åpenhetsloven og sirkulærøkonomi påvirker klesbutikk:**

**ÅPENHETSLOVEN:**

**Krav:**
Klesbutikken må sikre at klær produseres under anstendig forhold.

**Tiltak:**
1. **Kartlegge leverandørkjeden:**
   - Besøke fabrikker i Asia
   - Sjekke arbeidsforhold, lønn, sikkerhet

2. **Bytte leverandør hvis nødvendig:**
   - Avslutte samarbeid med fabrikker som bruker barnearbeid
   - Velge sertifiserte leverandører (Fair Trade, SA8000)

3. **Rapportere offentlig:**
   - Publisere årlig rapport om menneskerettigheter
   - Gi kunder informasjon om produksjon

**Konsekvenser:**
- Høyere innkjøpskostnader (etiske leverandører er dyrere)
- Bedre omdømme og kundelojalitet

**SIRKULÆRØKONOMI:**

**Tiltak:**
1. **Gjenbruk:**
   - Tilby brukte klær (vintage/second hand)
   - Kjøp tilbake brukte klær fra kunder

2. **Reparasjon:**
   - Tilby gratis reparasjon av klær
   - Lære kunder å reparere selv

3. **Resirkulering:**
   - Samle inn gamle klær
   - Produsere nye klær av resirkulerte fibre

4. **Leasing:**
   - Tilby leasing av festklær/dresser
   - Kunder returnerer etter bruk

**Eksempel:**
H&M har innsamlingsbokser for gamle klær, selger "Conscious Collection" med bærekraftige materialer, og tilbyr reparasjon.

**Konklusjon:**
Åpenhetsloven og sirkulærøkonomi tvinger klesbutikken til å endre forretningsmodell – men skaper også nye muligheter for differensiering og lojalitet.`
    }
  ],
  exercises: []
};

// ============================================================================
// Export
// ============================================================================

export const OKONOMISTYRING_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMISTYRING_7_1,
  CHAPTER_OKONOMISTYRING_7_2,
  CHAPTER_OKONOMISTYRING_7_3,
  CHAPTER_OKONOMISTYRING_7_4,
  CHAPTER_OKONOMISTYRING_7_5,
];
