/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Niva 2 - Kapittel 9-10
 *
 * Kapittel 9: Beruf und Zukunft
 * Kapittel 10: Fortgeschrittene Kommunikation
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Ausbildung und Studium
// ============================================================================

export const CHAPTER_TYSK_2_9_1: TextbookChapter = {
  id: 'tysk-2-9-1',
  courseId: 'tysk-2',
  chapterNumber: '9.1',
  title: 'Ausbildung und Studium',
  subtitle: 'Utdanning i Tyskland',
  description: 'Laer om det tyske utdanningssystemet med fokus pa det duale systemet og hoyere utdanning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forsta og beskrive det tyske utdanningssystemet',
    'sammenligne utdanningssystemer i ulike land',
    'bruke relevant fagvokabular om utdanning',
  ],
  content: [
    {
      id: 'tysk-2-9-1-intro',
      type: 'text',
      content: `## Det tyske utdanningssystemet

Det tyske utdanningssystemet er kjent for sin **duale Ausbildung** (yrkesopplaering) som kombinerer praktisk arbeid med teoretisk undervisning. Dette systemet er unikt for tysktalende land og har blitt et forbilde for mange andre nasjoner.

I Tyskland har man ulike utdanningsveier etter **Grundschule** (barneskole):
- **Hauptschule** - gir grunnleggende utdanning
- **Realschule** - gir mellomutdanning
- **Gymnasium** - forbereder til universitetsstudier (Abitur)
- **Gesamtschule** - kombinert skole med alle retninger`,
    },
    {
      id: 'tysk-2-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Utdanningsveier',
      problem: `Les teksten og svar pa sporsmalene:

*"Nach der Grundschule ging Maria auf das Gymnasium. Mit 18 Jahren machte sie ihr Abitur und begann danach ein Studium der Medizin an der Universitat Heidelberg. Ihr Bruder Thomas wahlte einen anderen Weg: Er machte eine Ausbildung zum Mechatroniker bei BMW und arbeitet jetzt in der Automobilindustrie."*

a) Hvilken utdanningsvei valgte Maria?
b) Hva er forskjellen mellom Marias og Thomas' utdanning?`,
      solution: `a) Maria valgte den akademiske veien: Gymnasium -> Abitur -> Universitetsstudium (medisin)

b) Maria tok den akademiske veien med fokus pa teoretisk utdanning ved universitet, mens Thomas valgte yrkesopplaering (Ausbildung) som kombinerer praktisk arbeid med teori.`,
    },
    {
      id: 'tysk-2-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forbind de tyske begrepene med riktig norsk oversettelse.',
        subTasks: [
          { label: 'a', task: 'die Ausbildung', solution: 'yrkesopplaering' },
          { label: 'b', task: 'das Studium', solution: 'studier (ved universitet/hoyskole)' },
          { label: 'c', task: 'das Abitur', solution: 'generell studiekompetanse (tilsvarer norsk vitnemal)' },
          { label: 'd', task: 'der Auszubildende (Azubi)', solution: 'laerling' },
        ],
        solution: 'a) yrkesopplaering, b) studier, c) generell studiekompetanse, d) laerling',
        hints: ['Tenk pa hva slags utdanning det handler om - praktisk eller teoretisk?'],
      },
    },
    {
      id: 'tysk-2-9-1-text-2',
      type: 'text',
      content: `## Das duale System - Det duale systemet

Det duale systemet er Tysklands stolthet innen yrkesutdanning. Navnet kommer av at opplaeringen skjer pa **to steder** samtidig:

1. **Im Betrieb** (i bedriften) - 3-4 dager i uken med praktisk arbeid
2. **In der Berufsschule** (pa yrkesskolen) - 1-2 dager i uken med teori

**Fordeler med det duale systemet:**
- Direkte kontakt med arbeidslivet fra dag en
- Lon under utdanningen (Ausbildungsvergutung)
- Hoy sannsynlighet for jobb etter endt utdanning
- Praktisk erfaring kombinert med teori`,
    },
    {
      id: 'tysk-2-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2: En dag som Azubi',
      problem: `Les Lenas dagbok og svar pa sporsmalene:

*"Montag, 15. September
Heute war mein erster Tag als Azubi bei der Deutschen Bank! Um 8 Uhr begann meine Ausbildung zur Bankkauffrau. Mein Ausbilder, Herr Muller, zeigte mir die verschiedenen Abteilungen. Am Donnerstag und Freitag gehe ich in die Berufsschule - dort lerne ich Buchfuhrung und Wirtschaftslehre."*

a) Hvilken yrkesutdanning tar Lena?
b) Hvor mange dager i uken er hun i bedriften?`,
      solution: `a) Lena tar utdanning som Bankkauffrau (bankmedarbeider/bankokonom)

b) Hun er i bedriften 3 dager i uken (mandag, tirsdag, onsdag) og pa yrkesskolen 2 dager (torsdag og fredag).`,
    },
    {
      id: 'tysk-2-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk. Bruk ordlisten hvis nodvendig.',
        subTasks: [
          { label: 'a', task: 'Jeg vil studere medisin i Tyskland.', solution: 'Ich mochte in Deutschland Medizin studieren.' },
          { label: 'b', task: 'Min bror tar yrkesopplaering som elektriker.', solution: 'Mein Bruder macht eine Ausbildung zum Elektriker.' },
          { label: 'c', task: 'Etter videregaende vil jeg ta Abitur.', solution: 'Nach der Oberstufe mochte ich das Abitur machen.' },
        ],
        solution: 'a) Ich mochte in Deutschland Medizin studieren. b) Mein Bruder macht eine Ausbildung zum Elektriker. c) Nach der Oberstufe mochte ich das Abitur machen.',
        hints: ['Husk at "studieren" brukes om universitetsstudier', '"eine Ausbildung machen" = ta yrkesopplaering'],
      },
    },
    {
      id: 'tysk-2-9-1-text-3',
      type: 'text',
      content: `## Hochschulbildung - Hoyere utdanning

For a studere ved et tysk universitet trenger man **Abitur** eller tilsvarende kvalifikasjon. Tyskland har flere typer hoyere utdanningsinstitusjoner:

**Universitat** - Fokus pa forskning og akademisk utdanning
- Tilbyr alle fagomrader
- Gir Bachelor, Master og Doktorgrad

**Fachhochschule (FH) / Hochschule** - Mer praktisk orientert
- Tettere samarbeid med naeringslivet
- Kortere studietid
- Mer praksisnaer undervisning

**Populaere studieretninger i Tyskland:**
- Betriebswirtschaftslehre (BWL) - Bedriftsokonomi
- Maschinenbau - Maskinteknikk
- Informatik - Informatikk
- Rechtswissenschaft - Juss
- Medizin - Medisin`,
    },
    {
      id: 'tysk-2-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Universitetssokning',
      problem: `Les dialogen og svar:

*Anna: "Was studierst du, Max?"
Max: "Ich studiere Informatik an der TU Munchen. Ich bin jetzt im vierten Semester."
Anna: "Und wie lange dauert das Studium?"
Max: "Der Bachelor dauert sechs Semester, also drei Jahre. Danach mochte ich noch einen Master machen."*

a) Hva studerer Max og hvor?
b) Hvor lang tid tar en bachelorgrad?`,
      solution: `a) Max studerer informatikk (Informatik) ved TU Munchen (Technische Universitat Munchen)

b) En bachelorgrad tar 6 semestre, det vil si 3 ar.`,
    },
    {
      id: 'tysk-2-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst (5-6 setninger) om dine utdanningsplaner pa tysk. Bruk minst 5 av disse ordene: studieren, die Ausbildung, das Abitur, die Universitat, der Beruf, arbeiten, lernen.',
        solution: 'Eksempel: "Nach der Schule mochte ich an einer Universitat studieren. Ich interessiere mich fur Medizin oder Biologie. Zuerst muss ich aber mein Abitur machen. Vielleicht werde ich in Deutschland studieren, weil die Universitaten dort sehr gut sind. Spater mochte ich als Arzt arbeiten und Menschen helfen."',
        hints: ['Bruk "mochte" for a uttrykke onsker', 'Husk verbets plassering i bisetninger'],
      },
    },
    {
      id: 'tysk-2-9-1-text-4',
      type: 'text',
      content: `## Wichtige Vokabeln - Viktig vokabular

| Tysk | Norsk |
|------|-------|
| die Ausbildung | yrkesopplaering |
| der/die Auszubildende (Azubi) | laerling |
| das Studium | studier |
| studieren | studere (ved universitet) |
| die Universitat | universitet |
| die Fachhochschule | yrkeshogskole |
| das Abitur | generell studiekompetanse |
| der Abschluss | eksamen, avslutning |
| das Semester | semester |
| die Vorlesung | forelesning |
| das Praktikum | praksis |
| der Betrieb | bedrift |
| die Berufsschule | yrkesskole |
| der Ausbilder | veileder/instruktor |`,
    },
    {
      id: 'tysk-2-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign det tyske og norske utdanningssystemet. Skriv pa tysk om minst to forskjeller og to likheter.',
        solution: 'Eksempel: "Ein grosser Unterschied ist das duale System in Deutschland. In Norwegen gibt es zwar auch eine praktische Ausbildung, aber sie ist anders organisiert. Eine Ahnlichkeit ist, dass man in beiden Landern nach der Sekundarstufe an einer Universitat studieren kann. Auch die Dauer des Studiums ist ahnlich: etwa drei Jahre fur den Bachelor."',
        hints: ['Bruk sammenligningsord: ahnlich, anders, im Vergleich zu', 'Tenk pa struktur, lengde og innhold'],
      },
    },
    {
      id: 'tysk-2-9-1-note-1',
      type: 'note',
      title: 'Kulturell innsikt',
      content: `I Tyskland er yrkesopplaering (Ausbildung) hoyere verdsatt enn i mange andre land. En god fagarbeider har hoy status, og mange velger bevisst yrkesopplaering fremfor universitetsstudier. Dette bidrar til Tysklands sterke okonomi og lave ungdomsarbeidsloshet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2: Bewerbung und Lebenslauf
// ============================================================================

export const CHAPTER_TYSK_2_9_2: TextbookChapter = {
  id: 'tysk-2-9-2',
  courseId: 'tysk-2',
  chapterNumber: '9.2',
  title: 'Bewerbung und Lebenslauf',
  subtitle: 'Jobbsoking pa tysk',
  description: 'Laer a skrive jobbsoknad og CV pa tysk med korrekt format og formalitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive formelle brev og dokumenter',
    'presentere seg selv skriftlig pa en profesjonell mate',
    'bruke hoflig og formelt sprak',
  ],
  content: [
    {
      id: 'tysk-2-9-2-intro',
      type: 'text',
      content: `## Die Bewerbung - Jobbsoknaden

A soke jobb pa tysk krever kjennskap til tyske konvensjoner. En tysk jobbsoknad (Bewerbung) bestar vanligvis av:

1. **Das Anschreiben** - Soknadsbrevet
2. **Der Lebenslauf** - CV
3. **Zeugnisse** - Attester og vitnemal
4. **Referenzen** - Referanser

Tyske arbeidsgivere legger stor vekt pa formalitet og grundighet. Et uprofesjonelt soknadsbrev kan fore til umiddelbar avvisning.`,
    },
    {
      id: 'tysk-2-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Strukturen i et Anschreiben',
      problem: `Les gjennom strukturen for et tysk soknadsbrev:

**1. Kopfzeile (topptekst)**
Ditt navn, adresse, telefon, e-post

**2. Empfangeradresse**
Firmanavn, kontaktperson, adresse

**3. Datum**
Berlin, den 15. Oktober 2024

**4. Betreffzeile (emnelinje)**
Bewerbung als Praktikant im Bereich Marketing

**5. Anrede (hilsen)**
Sehr geehrte Frau Muller, / Sehr geehrte Damen und Herren,

**6. Einleitung (innledning)**
Hvorfor du soker

**7. Hauptteil (hoveddel)**
Dine kvalifikasjoner og erfaringer

**8. Schluss (avslutning)**
Onsker om intervju, tilgjengelighet

**9. Grussformel (avsluttende hilsen)**
Mit freundlichen Grussen

Hvilke deler er forskjellige fra norske soknadsbrev?`,
      solution: `Hovedforskjeller fra norske soknadsbrev:
- Datoen skrives "Berlin, den 15. Oktober 2024" (med "den")
- Betreffzeile (emnelinje) er obligatorisk og konkret
- Formell hilsen "Sehr geehrte/r" er standard (ikke "Hei" eller "Hallo")
- Avslutningen "Mit freundlichen Grussen" er standard (uten komma etter)`,
    },
    {
      id: 'tysk-2-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig formell hilsen for folgende situasjoner.',
        subTasks: [
          { label: 'a', task: 'Du vet at mottakeren er en kvinne ved navn Schmidt', solution: 'Sehr geehrte Frau Schmidt,' },
          { label: 'b', task: 'Du vet ikke hvem som leser soknaden', solution: 'Sehr geehrte Damen und Herren,' },
          { label: 'c', task: 'Du skriver til Dr. Thomas Weber', solution: 'Sehr geehrter Herr Dr. Weber,' },
        ],
        solution: 'a) Sehr geehrte Frau Schmidt, b) Sehr geehrte Damen und Herren, c) Sehr geehrter Herr Dr. Weber,',
        hints: ['Husk at "geehrte" (feminin/flertall) og "geehrter" (maskulin) endres etter kjonn', 'Titler som Dr. skal alltid med'],
      },
    },
    {
      id: 'tysk-2-9-2-text-2',
      type: 'text',
      content: `## Der Lebenslauf - CV

En tysk CV (Lebenslauf) har strenge formkrav og skal vaere:
- **Tabellarisch** - i tabellform
- **Luckenlos** - uten hull i tidslinjen
- **Mit Foto** - med profesjonelt bilde (vanlig i Tyskland)
- **Unterschrieben** - signert med dato

**Struktur:**
1. Personliche Daten - Personalia
2. Berufserfahrung - Arbeidserfaring
3. Ausbildung - Utdanning
4. Kenntnisse - Kunnskaper (sprak, IT)
5. Hobbys/Interessen - Fritidsinteresser`,
    },
    {
      id: 'tysk-2-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Lebenslauf',
      problem: `Studer denne CV-en og svar pa sporsmalene:

**LEBENSLAUF**

**Personliche Daten**
Name: Lisa Berger
Geburtsdatum: 12.03.2000
Geburtsort: Hamburg
Staatsangehorigkeit: deutsch
Familienstand: ledig

**Berufserfahrung**
09/2022 - heute: Praktikantin bei Siemens AG, Munchen
06/2021 - 08/2021: Ferienjob im Einzelhandel

**Ausbildung**
10/2019 - heute: Studium BWL, Universitat Munchen
09/2010 - 06/2019: Gymnasium Hamburg, Abitur (Note: 1,8)

**Kenntnisse**
Sprachen: Deutsch (Muttersprache), Englisch (fliessend), Franzosisch (Grundkenntnisse)
EDV: MS Office, SAP

a) Hvilken utdanning har Lisa?
b) Hva betyr "ledig" under Familienstand?`,
      solution: `a) Lisa studerer bedriftsokonomi (BWL - Betriebswirtschaftslehre) ved universitetet i Munchen. Hun har ogsa Abitur fra gymnasium i Hamburg med karakteren 1,8.

b) "Ledig" betyr ugift (single/unmarried). I tysk CV er det vanlig a oppgi sivilstand.`,
    },
    {
      id: 'tysk-2-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse CV-uttrykkene til tysk.',
        subTasks: [
          { label: 'a', task: 'Fodselsdato: 15. mai 1999', solution: 'Geburtsdatum: 15.05.1999' },
          { label: 'b', task: 'Sprakkunnskaper: Norsk (morsmol), Engelsk (flytende)', solution: 'Sprachkenntnisse: Norwegisch (Muttersprache), Englisch (fliessend)' },
          { label: 'c', task: 'Arbeidserfaring: Sommerjobb hos IKEA', solution: 'Berufserfahrung: Ferienjob bei IKEA' },
          { label: 'd', task: 'Utdanning: Videregaende skole, generell studiekompetanse', solution: 'Ausbildung: Gymnasium, Abitur / Allgemeine Hochschulreife' },
        ],
        solution: 'a) Geburtsdatum: 15.05.1999, b) Sprachkenntnisse: Norwegisch (Muttersprache), Englisch (fliessend), c) Berufserfahrung: Ferienjob bei IKEA, d) Ausbildung: Gymnasium, Abitur',
        hints: ['Datoformat i Tyskland: DD.MM.YYYY', 'Spraknivaer: Muttersprache, fliessend, gut, Grundkenntnisse'],
      },
    },
    {
      id: 'tysk-2-9-2-text-3',
      type: 'text',
      content: `## Wichtige Formulierungen - Viktige formuleringer

**Innledning (Einleitung):**
- "Mit grossem Interesse habe ich Ihre Stellenanzeige gelesen..."
- "Hiermit bewerbe ich mich um die Stelle als..."
- "Auf der Suche nach einer neuen Herausforderung..."

**Kvalifikasjoner (Qualifikationen):**
- "Ich verfuge uber Erfahrung in..."
- "Wahrend meines Studiums habe ich..."
- "Zu meinen Starken zahlen..."
- "Ich bin teamfahig und belastbar."

**Avslutning (Schluss):**
- "Uber eine Einladung zu einem personlichen Gesprach wurde ich mich sehr freuen."
- "Fur Ruckfragen stehe ich Ihnen gern zur Verfugung."
- "Ich freue mich auf Ihre Ruckmeldung."`,
    },
    {
      id: 'tysk-2-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Avsnittet om kvalifikasjoner',
      problem: `Skriv om til bedre tysk:

*"Ich habe Erfahrung. Ich kann gut Englisch. Ich bin nett und arbeite viel."*`,
      solution: `Forbedret versjon:

*"Ich verfuge uber mehrjahrige Berufserfahrung im Bereich Kundenservice. Meine Englischkenntnisse sind fliessend, sowohl schriftlich als auch mundlich. Zu meinen personlichen Starken zahlen Teamfahigkeit, Kommunikationsstarke und eine hohe Belastbarkeit."*

Forbedringer:
- Mer presist sprak (verfugen uber, Starken zahlen)
- Mer detaljer (welcher Bereich? wie gut Englisch?)
- Profesjonelle uttrykk (Teamfahigkeit, Belastbarkeit)`,
    },
    {
      id: 'tysk-2-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort Anschreiben (soknadsbrev) for en sommerjobb hos et tysk firma. Inkluder: Anrede, Einleitung, kort Hauptteil og Schluss.',
        solution: `Eksempel:

Sehr geehrte Damen und Herren,

mit grossem Interesse habe ich Ihre Anzeige fur einen Ferienjob gelesen. Hiermit bewerbe ich mich um diese Stelle.

Ich bin Schuler/in am [Gymnasium Name] in Norwegen und werde dieses Jahr mein Abitur machen. Wahrend meiner Schulzeit habe ich gute Deutschkenntnisse erworben und mochte diese nun in der Praxis anwenden. Ich bin zuverlassig, teamfahig und motiviert, neue Erfahrungen zu sammeln.

Uber eine Einladung zu einem Gesprach wurde ich mich sehr freuen.

Mit freundlichen Grussen
[Name]`,
        hints: ['Begynn med hvorfor du soker', 'Nevn relevante kvalifikasjoner', 'Avslutt positivt med onske om intervju'],
      },
    },
    {
      id: 'tysk-2-9-2-text-4',
      type: 'text',
      content: `## Wichtige Vokabeln - Viktig vokabular

| Tysk | Norsk |
|------|-------|
| die Bewerbung | soknaden |
| das Anschreiben | soknadsbrevet |
| der Lebenslauf | CV |
| die Stellenanzeige | stillingsannonse |
| sich bewerben um | soke pa |
| der Bewerber / die Bewerberin | sokeren |
| die Qualifikation | kvalifikasjon |
| die Berufserfahrung | arbeidserfaring |
| die Kenntnisse | kunnskaper |
| das Vorstellungsgesprach | jobbintervju |
| die Starke | styrke |
| die Schwache | svakhet |
| teamfahig | samarbeidsvillig |
| belastbar | arbeidssom, taler belastning |
| zuverlassig | palitelig |`,
    },
    {
      id: 'tysk-2-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag din egen Lebenslauf pa tysk med disse kategoriene: Personliche Daten, Ausbildung, Kenntnisse (Sprachen, EDV).',
        solution: 'Se eksempel i Example 2. Husk: tabellform, datoer i tysk format (DD.MM.YYYY), spraknivaer (Muttersprache, fliessend, gut, Grundkenntnisse).',
        hints: ['Bruk tysk datoformat', 'Vaer presis med spraknivaer', 'Start med nyeste erfaring/utdanning'],
      },
    },
    {
      id: 'tysk-2-9-2-tip-1',
      type: 'tip',
      title: 'Tips for jobbsoknad',
      content: `I Tyskland er det vanlig a legge ved et profesjonelt foto i CV-en. Bildet bor vaere tatt av en fotograf og vise deg i formelle klaer. Unnga selfies eller feriebilder! Noen moderne bedrifter aksepterer na CV uten foto, men det er fortsatt standard i de fleste bransjer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3: Die deutsche Wirtschaft
// ============================================================================

export const CHAPTER_TYSK_2_9_3: TextbookChapter = {
  id: 'tysk-2-9-3',
  courseId: 'tysk-2',
  chapterNumber: '9.3',
  title: 'Die deutsche Wirtschaft',
  subtitle: 'Tysk naeringsiv og okonomi',
  description: 'Utforsk den tyske okonomien, viktige industrier og internasjonalt samarbeid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forsta og diskutere okonomiske temaer pa tysk',
    'kjenne til viktige tyske bedrifter og industrier',
    'bruke okonomisk fagvokabular',
  ],
  content: [
    {
      id: 'tysk-2-9-3-intro',
      type: 'text',
      content: `## Die grosste Volkswirtschaft Europas

Tyskland er Europas storste okonomi og verdens fjerde storste. Den tyske okonomien er kjent for:

- **Exportorientierung** - Fokus pa eksport
- **Starke Industrie** - Spesielt bilindustri og maskinteknikk
- **Mittelstand** - Mellomstore familiebedrifter
- **Innovation** - Forskning og utvikling

**Noen viktige tall:**
- BIP (Bruttoinlandsprodukt): ca. 4 billioner euro
- Arbeidsloshet: ca. 5%
- Viktigste handelspartner: USA, Kina, Frankrike, Nederland`,
    },
    {
      id: 'tysk-2-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Deutsche Weltmarktfuhrer',
      problem: `Les om disse tyske bedriftene og svar:

**Volkswagen AG** - Verdens storste bilprodusent (inkluderer Audi, Porsche, Skoda)
**Siemens AG** - Teknologi og ingeniorbedrift
**BASF** - Verdens storste kjemikalieprodusent
**SAP** - Europas storste programvareselskap
**Deutsche Post/DHL** - Verdens storste logistikkselskap

a) Hvilken bransje er Volkswagen i?
b) Hva produserer BASF?`,
      solution: `a) Volkswagen er i bilindustrien (Automobilindustrie). De produserer personbiler og eier flere bilmerker.

b) BASF produserer kjemikalier (Chemikalien). De er verdens storste kjemikalieprodusent og lager alt fra plast til maling.`,
    },
    {
      id: 'tysk-2-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forbind bedriften med riktig bransje.',
        subTasks: [
          { label: 'a', task: 'BMW', solution: 'Automobilindustrie (bilindustri)' },
          { label: 'b', task: 'Deutsche Bank', solution: 'Finanzwesen (finans)' },
          { label: 'c', task: 'Lufthansa', solution: 'Luftfahrt (luftfart)' },
          { label: 'd', task: 'Bosch', solution: 'Technologie/Elektrotechnik (teknologi)' },
        ],
        solution: 'a) Automobilindustrie, b) Finanzwesen, c) Luftfahrt, d) Technologie',
        hints: ['Tenk pa hva bedriften er mest kjent for'],
      },
    },
    {
      id: 'tysk-2-9-3-text-2',
      type: 'text',
      content: `## Der Mittelstand - Ryggraden i tysk okonomi

**Mittelstand** er betegnelsen pa mellomstore bedrifter som utgjor ryggraden i den tyske okonomien. Kjennetegn:

- Ofte familieeide i generasjoner
- 10-500 ansatte
- Hoy spesialisering ("Hidden Champions")
- Sterk lokal forankring
- Fokus pa kvalitet fremfor kvantitet

**Interessant fakta:** Over 1500 tyske Mittelstand-bedrifter er verdensledende innen sine nisjemarkedet - de kalles "Hidden Champions" (skjulte mestere).

**Eksempler pa Hidden Champions:**
- Wurth (skruer og festemidler)
- Stihl (motorsager)
- Haribo (godteri)`,
    },
    {
      id: 'tysk-2-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: En Mittelstand-bedrift',
      problem: `Les teksten:

*"Die Firma Muller & Sohn wurde 1923 von meinem Urgrossvater gegrundet. Wir stellen Prazisionswerkzeuge her und haben heute 250 Mitarbeiter. Unsere Kunden kommen aus der ganzen Welt - wir exportieren 70% unserer Produkte. Qualitat ist fur uns wichtiger als Quantitat."*

a) Hvor gammel er firmaet?
b) Hva kjennetegner denne bedriften som typisk Mittelstand?`,
      solution: `a) Firmaet er over 100 ar gammelt (grunnlagt 1923).

b) Typiske Mittelstand-trekk:
- Familieeid i flere generasjoner
- Mellomstort (250 ansatte)
- Hoy eksportandel (70%)
- Fokus pa kvalitet fremfor kvantitet
- Spesialisert produkt (presisjonsvektoy)`,
    },
    {
      id: 'tysk-2-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse okonomiske begrepene til norsk.',
        subTasks: [
          { label: 'a', task: 'die Arbeitslosigkeit', solution: 'arbeidsloshet' },
          { label: 'b', task: 'das Wirtschaftswachstum', solution: 'okonomisk vekst' },
          { label: 'c', task: 'der Export', solution: 'eksport' },
          { label: 'd', task: 'die Inflation', solution: 'inflasjon' },
          { label: 'e', task: 'der Umsatz', solution: 'omsetning' },
        ],
        solution: 'a) arbeidsloshet, b) okonomisk vekst, c) eksport, d) inflasjon, e) omsetning',
        hints: ['Mange okonomiske termer er like pa flere sprak'],
      },
    },
    {
      id: 'tysk-2-9-3-text-3',
      type: 'text',
      content: `## Deutsch-norwegische Wirtschaftsbeziehungen

Norge og Tyskland har sterke okonomiske band:

**Norsk eksport til Tyskland:**
- Olje og gass (storste enkeltvare)
- Fisk og sjomat
- Aluminium
- Kjemikalier

**Tysk eksport til Norge:**
- Maskiner og kjoretoyer
- Elektronikk
- Kjemiske produkter
- Matvarer

**Interessant:** Tyskland er Norges viktigste handelspartner i Europa. Over 600 tyske bedrifter har kontorer i Norge, og mange nordmenn jobber for tyske selskaper.`,
    },
    {
      id: 'tysk-2-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Handelsstatistikk',
      problem: `Les statistikken og svar:

*Tysk-norsk handel 2023:
- Norsk eksport til Tyskland: 45 milliarder euro
- Tysk eksport til Norge: 12 milliarder euro
- Handelsbalanse: Norge har overskudd pa 33 milliarder euro*

a) Hvilket land eksporterer mest?
b) Hvorfor har Norge handelsoverskudd?`,
      solution: `a) Norge eksporterer mest til Tyskland (45 milliarder euro vs. 12 milliarder euro).

b) Norge har handelsoverskudd hovedsakelig pa grunn av olje- og gasseksporten. Dette er hoyverdi-varer som utgjor en stor del av norsk eksport.`,
    },
    {
      id: 'tysk-2-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (5-6 setninger) pa tysk om tysk okonomi. Bruk minst 4 av disse ordene: die Wirtschaft, der Export, die Industrie, das Unternehmen, der Mittelstand, die Qualitat.',
        solution: 'Eksempel: "Die deutsche Wirtschaft ist die grosste in Europa. Der Export ist sehr wichtig fur Deutschland - besonders Autos und Maschinen werden in die ganze Welt verkauft. Die Industrie ist modern und innovativ. Viele Unternehmen gehoren zum Mittelstand und sind oft familiegefuhrt. Deutsche Produkte sind bekannt fur ihre hohe Qualitat."',
        hints: ['Begynn med et generelt utsagn om tysk okonomi', 'Nevn spesifikke bransjer eller bedrifter'],
      },
    },
    {
      id: 'tysk-2-9-3-text-4',
      type: 'text',
      content: `## Wichtige Vokabeln - Viktig vokabular

| Tysk | Norsk |
|------|-------|
| die Wirtschaft | okonomi, naeringsiv |
| das Unternehmen | bedrift, foretak |
| die Firma | firma, selskap |
| der Betrieb | virksomhet, drift |
| die Industrie | industri |
| der Export / exportieren | eksport / eksportere |
| der Import / importieren | import / importere |
| der Umsatz | omsetning |
| der Gewinn | fortjeneste, overskudd |
| der Verlust | tap |
| die Arbeitslosigkeit | arbeidsloshet |
| das Wachstum | vekst |
| der Arbeitnehmer | arbeidstaker |
| der Arbeitgeber | arbeidsgiver |
| die Konkurrenz | konkurranse |`,
    },
    {
      id: 'tysk-2-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter: Hvorfor tror du tysk industri er sa vellykket? Skriv 3-4 setninger pa tysk.',
        solution: 'Eksempel: "Ich glaube, die deutsche Industrie ist erfolgreich, weil sie auf Qualitat setzt. Das duale Ausbildungssystem sorgt fur gut ausgebildete Facharbeiter. Ausserdem investieren deutsche Firmen viel in Forschung und Entwicklung. Die Mittelstand-Tradition bedeutet auch, dass viele Firmen langfristig denken."',
        hints: ['Tenk pa utdanning, kvalitet, innovasjon', 'Bruk "weil" for a forklare arsaker'],
      },
    },
    {
      id: 'tysk-2-9-3-note-1',
      type: 'note',
      title: 'Made in Germany',
      content: `"Made in Germany" ble opprinnelig innfort av britene i 1887 for a advare mot tyske varer. Ironisk nok ble det snart et kvalitetsmerke som tyske produsenter var stolte av! I dag assosieres "Made in Germany" med hoy kvalitet, palitelighet og ingeniordyktighet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4: Zukunftsplane ausdrucken
// ============================================================================

export const CHAPTER_TYSK_2_9_4: TextbookChapter = {
  id: 'tysk-2-9-4',
  courseId: 'tysk-2',
  chapterNumber: '9.4',
  title: 'Zukunftsplane ausdrucken',
  subtitle: 'Snakke om fremtidsplaner',
  description: 'Laer ulike mater a uttrykke planer, onsker og mal for fremtiden pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke fremtidsplaner og mal',
    'bruke ulike grammatiske strukturer for fremtid',
    'diskutere karriere- og livsmol',
  ],
  content: [
    {
      id: 'tysk-2-9-4-intro',
      type: 'text',
      content: `## Uber die Zukunft sprechen

Pa tysk finnes flere mater a snakke om fremtiden:

1. **Futur I** (werden + infinitiv) - formell fremtid
2. **Prasens** med tidsuttrykk - vanligst i dagligtale
3. **Mochte/will** - for onsker og intensjoner
4. **Vorhaben/planen** - for konkrete planer

I daglig tale bruker tyskere ofte **presens med tidsuttrykk** i stedet for Futur I:
- "Nachstes Jahr studiere ich in Berlin." (vanlig)
- "Nachstes Jahr werde ich in Berlin studieren." (mer formelt)`,
    },
    {
      id: 'tysk-2-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Ulike mater a uttrykke fremtid',
      problem: `Sammenlign disse setningene:

A) "Ich werde Arzt."
B) "Ich werde Arzt werden."
C) "Ich mochte Arzt werden."
D) "Ich habe vor, Arzt zu werden."

Hvilken setning er mest...
a) ...formell?
b) ...vanlig i dagligtale?
c) ...uttrykker et onske?`,
      solution: `a) Mest formell: B) "Ich werde Arzt werden." (Futur I)

b) Mest vanlig i dagligtale: A) "Ich werde Arzt." (Presens med werden som hovedverb)

c) Uttrykker et onske: C) "Ich mochte Arzt werden." (mochte + infinitiv)

D) "Ich habe vor, Arzt zu werden" uttrykker en konkret plan/intensjon.`,
    },
    {
      id: 'tysk-2-9-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig form for a uttrykke fremtid.',
        subTasks: [
          { label: 'a', task: 'Neste sommer (reise) jeg til Tyskland. [formell]', solution: 'Nachsten Sommer werde ich nach Deutschland reisen.' },
          { label: 'b', task: 'Jeg (onske) a studere medisin.', solution: 'Ich mochte Medizin studieren.' },
          { label: 'c', task: 'Vi (planlegge) a flytte til Berlin.', solution: 'Wir haben vor, nach Berlin zu ziehen. / Wir planen, nach Berlin zu ziehen.' },
        ],
        solution: 'a) werde reisen, b) mochte studieren, c) haben vor zu ziehen / planen zu ziehen',
        hints: ['Futur I: werden + infinitiv', 'Onske: mochte + infinitiv', 'Plan: vorhaben/planen + zu + infinitiv'],
      },
    },
    {
      id: 'tysk-2-9-4-text-2',
      type: 'text',
      content: `## Plane und Ziele - Planer og mal

**Verb for a uttrykke planer:**
- **vorhaben** - ha til hensikt (Ich habe vor, ... zu + infinitiv)
- **planen** - planlegge (Ich plane, ... zu + infinitiv)
- **beabsichtigen** - ha intensjon om (formelt)
- **sich vornehmen** - ta seg fore

**Verb for a uttrykke onsker:**
- **mochte** - vil gjerne (hoflig)
- **wollen** - vil (direkte)
- **hoffen** - hape (Ich hoffe, dass...)
- **traumen von** - dromme om (Ich traume davon, ... zu + infinitiv)

**Verb for a uttrykke mal:**
- **anstreben** - strebe etter
- **erreichen** - oppna
- **sich ein Ziel setzen** - sette seg et mal`,
    },
    {
      id: 'tysk-2-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Fremtidsplaner',
      problem: `Les Marias fremtidsplaner:

*"Nach dem Abitur mochte ich ein Jahr Pause machen - ein sogenanntes Gap Year. Ich habe vor, als Au-pair nach Frankreich zu gehen. Danach plane ich, Psychologie zu studieren. Mein grosser Traum ist es, spater als Therapeutin zu arbeiten und Menschen zu helfen. In zehn Jahren sehe ich mich mit einer eigenen Praxis in einer Grossstadt."*

a) Hva vil Maria gjore rett etter videregaende?
b) Hva er hennes langsiktige mal?`,
      solution: `a) Rett etter videregaende vil Maria ta et gap year og jobbe som au pair i Frankrike.

b) Hennes langsiktige mal er a jobbe som terapeut og ha sin egen praksis i en storby.`,
    },
    {
      id: 'tysk-2-9-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk med ulike uttrykk for fremtid.',
        subTasks: [
          { label: 'a', task: 'Jeg drommer om a bo i utlandet.', solution: 'Ich traume davon, im Ausland zu leben.' },
          { label: 'b', task: 'Neste ar skal jeg begynne a studere.', solution: 'Nachstes Jahr fange ich an zu studieren. / Nachstes Jahr werde ich anfangen zu studieren.' },
          { label: 'c', task: 'Mitt mal er a bli ingeniorer.', solution: 'Mein Ziel ist es, Ingenieur zu werden.' },
        ],
        solution: 'a) Ich traume davon, im Ausland zu leben. b) Nachstes Jahr fange ich an zu studieren. c) Mein Ziel ist es, Ingenieur zu werden.',
        hints: ['traumen von + davon + zu-infinitiv', 'anfangen + zu + infinitiv'],
      },
    },
    {
      id: 'tysk-2-9-4-text-3',
      type: 'text',
      content: `## Zeitangaben fur die Zukunft - Tidsuttrykk

**Naer fremtid:**
- heute Abend - i kveld
- morgen - i morgen
- ubermorgen - i overmorgen
- nachste Woche - neste uke
- bald - snart

**Lengre frem:**
- nachsten Monat - neste maned
- nachstes Jahr - neste ar
- in zwei Jahren - om to ar
- in der Zukunft - i fremtiden
- eines Tages - en dag

**Karriererelatert:**
- nach dem Studium - etter studiene
- nach der Ausbildung - etter yrkesopplaeringen
- in funf Jahren - om fem ar
- langfristig - pa lang sikt`,
    },
    {
      id: 'tysk-2-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Jobbintervju-sporsmal',
      problem: `I et jobbintervju far du ofte sporsmal om fremtiden. Hvordan vil du svare pa:

*"Wo sehen Sie sich in funf Jahren?"*

Lag et svar pa 3-4 setninger.`,
      solution: `Eksempel pa svar:

*"In funf Jahren sehe ich mich in einer Fuhrungsposition in diesem Unternehmen. Ich mochte meine Fahigkeiten weiterentwickeln und mehr Verantwortung ubernehmen. Langfristig strebe ich eine Teamleiter-Position an, wo ich meine Erfahrung einsetzen kann, um das Team zum Erfolg zu fuhren."*

Viktige elementer:
- Viser ambisjon
- Knyttet til bedriften
- Realistisk, men positiv`,
    },
    {
      id: 'tysk-2-9-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (6-8 setninger) om dine egne fremtidsplaner pa tysk. Inkluder: kortsiktige planer (1-2 ar), langsiktige mal (5-10 ar), og et onske/drom.',
        solution: 'Eksempel: "Nach der Schule mochte ich an einer Universitat studieren, vielleicht in Deutschland oder Osterreich. Ich interessiere mich fur Informatik und Technologie. In den ersten Jahren des Studiums habe ich vor, auch ein Praktikum bei einem grossen Tech-Unternehmen zu machen. Mein langfristiges Ziel ist es, als Softwareentwickler zu arbeiten. Ich traume davon, eines Tages mein eigenes Start-up zu grunden. In zehn Jahren sehe ich mich als erfolgreichen Unternehmer mit einem internationalen Team."',
        hints: ['Bruk varierte uttrykk: mochte, habe vor, plane, traume davon', 'Inkluder tidsuttrykk for a strukturere teksten'],
      },
    },
    {
      id: 'tysk-2-9-4-text-4',
      type: 'text',
      content: `## Wichtige Vokabeln - Viktig vokabular

| Tysk | Norsk |
|------|-------|
| vorhaben | ha til hensikt |
| planen | planlegge |
| beabsichtigen | ha intensjon om |
| hoffen | hape |
| traumen von | dromme om |
| das Ziel | malet |
| erreichen | oppna |
| anstreben | strebe etter |
| die Zukunft | fremtiden |
| langfristig | langsiktig |
| kurzfristig | kortsiktig |
| die Karriere | karrieren |
| der Erfolg | suksess |
| sich entwickeln | utvikle seg |
| Verantwortung ubernehmen | ta ansvar |`,
    },
    {
      id: 'tysk-2-9-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-9-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rollespill: Du er pa jobbintervju. Svar pa disse sporsmalene pa tysk.',
        subTasks: [
          { label: 'a', task: 'Warum mochten Sie bei uns arbeiten?', solution: 'Ich mochte bei Ihnen arbeiten, weil Ihr Unternehmen fur Innovation und Qualitat bekannt ist. Ausserdem interessiere ich mich sehr fur [Branche].' },
          { label: 'b', task: 'Was sind Ihre beruflichen Ziele?', solution: 'Mein Ziel ist es, meine Fahigkeiten weiterzuentwickeln und langfristig mehr Verantwortung zu ubernehmen.' },
          { label: 'c', task: 'Wo sehen Sie sich in zehn Jahren?', solution: 'In zehn Jahren sehe ich mich in einer Fuhrungsposition, wo ich ein Team leiten und zum Erfolg des Unternehmens beitragen kann.' },
        ],
        solution: 'Se deloppgavene for forslag til svar.',
        hints: ['Vaer positiv og vis interesse for bedriften', 'Koble dine mal til stillingen du soker'],
      },
    },
    {
      id: 'tysk-2-9-4-tip-1',
      type: 'tip',
      title: 'Tips for jobbintervju',
      content: `I tyske jobbintervjuer er det vanlig a bli spurt om "Starken und Schwachen" (styrker og svakheter). Forbered deg pa a presentere dine styrker selvsikkert, og vend svakheter til noe positivt: "Manchmal bin ich zu perfektionistisch" (Noen ganger er jeg for perfeksjonistisk).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.1: Idiome und Redewendungen
// ============================================================================

export const CHAPTER_TYSK_2_10_1: TextbookChapter = {
  id: 'tysk-2-10-1',
  courseId: 'tysk-2',
  chapterNumber: '10.1',
  title: 'Idiome und Redewendungen',
  subtitle: 'Tyske uttrykk og talemater',
  description: 'Laer vanlige tyske idiomer og faste uttrykk for a fa et mer naturlig sprak.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forsta og bruke vanlige tyske idiomer',
    'gjenkjenne billedsprak i tysk',
    'utvikle et mer naturlig og idiomatisk sprak',
  ],
  content: [
    {
      id: 'tysk-2-10-1-intro',
      type: 'text',
      content: `## Was sind Redewendungen?

**Redewendungen** (idiomer/talemater) er faste uttrykk der betydningen ikke kan utledes direkte fra enkeltordene. De er en viktig del av ethvert sprak og gjor kommunikasjonen mer fargerik og naturlig.

Pa tysk finnes tusenvis av idiomer. Mange handler om:
- Kroppen (Kopf, Herz, Hand)
- Dyr (Hund, Katze, Schwein)
- Mat og drikke
- Vaer og natur

A kunne idiomer viser at du virkelig behersker spraket!`,
    },
    {
      id: 'tysk-2-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Kroppsrelaterte idiomer',
      problem: `Gjett betydningen av disse idiomene for du leser losningen:

a) **den Kopf in den Sand stecken**
b) **jemandem auf die Nerven gehen**
c) **die Daumen drucken**
d) **ein Auge zudrucken**`,
      solution: `a) **den Kopf in den Sand stecken** = stikke hodet i sanden
Betydning: Ignorere et problem, nekte a se virkeligheten

b) **jemandem auf die Nerven gehen** = ga noen pa nervene
Betydning: Irritere noen (samme som pa norsk!)

c) **die Daumen drucken** = holde tomler
Betydning: Onske noen lykke til

d) **ein Auge zudrucken** = lukke et oye
Betydning: Se gjennom fingrene med noe, ikke vaere sa streng`,
    },
    {
      id: 'tysk-2-10-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forbind idiomet med riktig betydning.',
        subTasks: [
          { label: 'a', task: 'Ich drucke dir die Daumen!', solution: 'Lykke til!' },
          { label: 'b', task: 'Das geht mir auf die Nerven.', solution: 'Det irriterer meg.' },
          { label: 'c', task: 'Er steckt den Kopf in den Sand.', solution: 'Han ignorerer problemet.' },
          { label: 'd', task: 'Der Lehrer druckt ein Auge zu.', solution: 'Laereren ser gjennom fingrene.' },
        ],
        solution: 'a) Lykke til! b) Det irriterer meg. c) Han ignorerer problemet. d) Laereren ser gjennom fingrene.',
        hints: ['Tenk pa den bokstavelige betydningen forst'],
      },
    },
    {
      id: 'tysk-2-10-1-text-2',
      type: 'text',
      content: `## Tierische Redewendungen - Dyreiidiomer

Tyske idiomer bruker ofte dyr. Her er noen vanlige:

| Idiom | Bokstavelig | Betydning |
|-------|-------------|-----------|
| Da liegt der Hund begraben | Der ligger hunden begravet | Det er kjernen i problemet |
| Schwein haben | Ha gris | Ha flaks |
| einen Kater haben | Ha en katt | Ha bakrus |
| die Katze im Sack kaufen | Kjope katta i sekken | Kjope noe usett |
| Da steppt der Bar | Der danser bjornen | Der er det fest/liv |
| Mein Name ist Hase | Mitt navn er Hare | Jeg vet ingenting |`,
    },
    {
      id: 'tysk-2-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Idiomer i kontekst',
      problem: `Les dialogene og identifiser idiomene:

**Dialog 1:**
A: "Wie war die Party gestern?"
B: "Super! Da hat wirklich der Bar gesteppt!"

**Dialog 2:**
A: "Warum hast du das Auto gekauft ohne es zu testen?"
B: "Ja, ich weiss... Ich habe die Katze im Sack gekauft und jetzt funktioniert es nicht."

Hva betyr idiomene i sammenheng?`,
      solution: `**Dialog 1:** "Da hat der Bar gesteppt" = Det var skikkelig fest, mye liv og moro.
Brukt her for a si at festen var veldig bra med mye aktivitet.

**Dialog 2:** "Die Katze im Sack kaufen" = Kjope noe uten a undersoke det forst.
Personen angrer pa a ha kjopt bilen uten a teste den.`,
    },
    {
      id: 'tysk-2-10-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig idiom for situasjonen.',
        subTasks: [
          { label: 'a', task: 'Du har eksamen i morgen og vennen din onsker deg lykke til.', solution: 'Ich drucke dir die Daumen!' },
          { label: 'b', task: 'Du festet mye i gar og foler deg darlig i dag.', solution: 'Ich habe einen Kater.' },
          { label: 'c', task: 'Du hadde flaks og vant i lotteriet.', solution: 'Ich habe Schwein gehabt!' },
          { label: 'd', task: 'Noen spor deg om noe du ikke vil svare pa.', solution: 'Mein Name ist Hase (ich weiss von nichts).' },
        ],
        solution: 'a) Ich drucke dir die Daumen! b) Ich habe einen Kater. c) Ich habe Schwein gehabt! d) Mein Name ist Hase.',
        hints: ['Tenk pa hva idiomet uttrykker: flaks, bakrus, onske, uvitenhet'],
      },
    },
    {
      id: 'tysk-2-10-1-text-3',
      type: 'text',
      content: `## Weitere nutzliche Redewendungen

**Om a forstå/ikke forsta:**
- Das ist mir Wurst / Das ist mir egal = Det bryr jeg meg ikke om
- Ich verstehe nur Bahnhof = Jeg forstar ingenting (bokstavelig: Jeg forstar bare "jernbanestasjon")
- Das kommt mir spanisch vor = Det virker mistenkelig

**Om a ha det travelt:**
- unter Zeitdruck stehen = vaere under tidspress
- Hals uber Kopf = hodestups, i full fart

**Om okonomi:**
- Geld zum Fenster hinauswerfen = kaste penger ut vinduet (slose)
- auf keinen grunen Zweig kommen = ikke fa det til a ga rundt

**Om sannhet og loyn:**
- jemanden an der Nase herumfuhren = fore noen bak lyset
- reinen Wein einschenken = si sannheten`,
    },
    {
      id: 'tysk-2-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Idiomer med forklaringer',
      problem: `Forklar betydningen av disse idiomene:

a) "Er hat mir reinen Wein eingeschenkt."
b) "Sie wirft das Geld zum Fenster hinaus."
c) "Das kommt mir spanisch vor."`,
      solution: `a) "Er hat mir reinen Wein eingeschenkt" = Han fortalte meg sannheten
(Bokstavelig: Han skjenket meg ren vin - alts ublandet, ekte)

b) "Sie wirft das Geld zum Fenster hinaus" = Hun sloser med penger
(Bokstavelig: Hun kaster pengene ut vinduet)

c) "Das kommt mir spanisch vor" = Det virker mistenkelig/rart
(Kommer fra en tid da Spania var sett pa som eksotisk og fremmed)`,
    },
    {
      id: 'tysk-2-10-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort dialog (4-6 replikker) der du bruker minst 2 tyske idiomer naturlig.',
        solution: `Eksempel:
A: "Hast du schon gehort? Max hat im Lotto gewonnen!"
B: "Wirklich? Der hat aber Schwein gehabt!"
A: "Ja, 10.000 Euro! Aber ich hore, er will alles fur eine teure Reise ausgeben."
B: "Na ja, dann wirft er das Geld zum Fenster hinaus. Das wurde ich nicht machen."
A: "Da hast du recht. Ich drucke ihm aber trotzdem die Daumen."`,
        hints: ['Velg idiomer som passer naturlig i samtalen', 'La konteksten gjore betydningen tydelig'],
      },
    },
    {
      id: 'tysk-2-10-1-text-4',
      type: 'text',
      content: `## Weitere wichtige Idiome

| Idiom | Betydning |
|-------|-----------|
| ins Schwarze treffen | treffe spikeren pa hodet |
| den Nagel auf den Kopf treffen | treffe spikeren pa hodet (alternativ) |
| uber den Berg sein | vaere over det verste |
| jemanden auf den Arm nehmen | ta noen pa kornet, lure |
| Tomaten auf den Augen haben | ikke se det opplagte |
| alles in Butter | alt i orden |
| mit Kind und Kegel | med hele familien |
| aller guten Dinge sind drei | alle gode ting er tre |
| andere Lander, andere Sitten | andre land, andre skikker |
| aus einer Mucke einen Elefanten machen | gjore en mygg til en elefant |`,
    },
    {
      id: 'tysk-2-10-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn det tilsvarende norske uttrykket (eller forklar betydningen).',
        subTasks: [
          { label: 'a', task: 'aus einer Mucke einen Elefanten machen', solution: 'Gjore en mygg til en elefant (same som norsk!)' },
          { label: 'b', task: 'aller guten Dinge sind drei', solution: 'Alle gode ting er tre' },
          { label: 'c', task: 'uber den Berg sein', solution: 'Vaere over kneika / vaere over det verste' },
          { label: 'd', task: 'andere Lander, andere Sitten', solution: 'Skikk folger land / Andre land, andre skikker' },
        ],
        solution: 'a) Gjore en mygg til en elefant, b) Alle gode ting er tre, c) Vaere over kneika, d) Skikk folger land',
        hints: ['Mange idiomer finnes i lignende form pa norsk'],
      },
    },
    {
      id: 'tysk-2-10-1-note-1',
      type: 'note',
      title: 'Kulturell kontekst',
      content: `Idiomer gjenspeiler ofte kultur og historie. "Mein Name ist Hase" kommer fra en berømt rettssak pa 1800-tallet der en student ved navn Victor Hase nektet a svare pa sporsmal. Mange tyske idiomer har ogsa rottene i Bibelen eller tysk folklore.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: Modalpartikeln verstehen
// ============================================================================

export const CHAPTER_TYSK_2_10_2: TextbookChapter = {
  id: 'tysk-2-10-2',
  courseId: 'tysk-2',
  chapterNumber: '10.2',
  title: 'Modalpartikeln verstehen',
  subtitle: 'De smma ordene som gjor stor forskjell',
  description: 'Forsta og bruk modalpartikler som doch, mal, ja og denn for mer naturlig tysk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forsta funksjonen til modalpartikler',
    'bruke modalpartikler for a nyansere sprak',
    'gjenkjenne modalpartikler i tekst og tale',
  ],
  content: [
    {
      id: 'tysk-2-10-2-intro',
      type: 'text',
      content: `## Was sind Modalpartikeln?

**Modalpartikeln** er sma ord som farger setningen folelsesmessig uten a endre den grunnleggende betydningen. De finnes nesten ikke pa norsk og er vanskelige a oversette direkte.

Vanlige modalpartikler:
- **doch** - jo, vel, likevel
- **mal** - bare, en gang
- **ja** - jo (bekreftende)
- **denn** - da, egentlig
- **schon** - nok, vel
- **eigentlich** - egentlig
- **halt/eben** - bare, na engang

Modalpartikler er *utrykte* - de star aldri forst i setningen og har ikke egen betydning alene.`,
    },
    {
      id: 'tysk-2-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Setninger med og uten modalpartikler',
      problem: `Sammenlign disse setningene:

**Uten modalpartikel:**
A) "Komm her!"
B) "Das ist schon."
C) "Wie heisst du?"

**Med modalpartikel:**
A) "Komm **doch mal** her!"
B) "Das ist **ja** schon!"
C) "Wie heisst du **denn**?"

Hvordan endrer modalpartikkelen tonen?`,
      solution: `A) "Komm her!" = Kom hit! (noytral kommando)
   "Komm doch mal her!" = Kom hit da! (mykere, mer vennlig oppfordring)

B) "Das ist schon." = Det er pent. (noytral konstatering)
   "Das ist ja schon!" = Det er jo pent! (uttrykker overraskelse/begeistring)

C) "Wie heisst du?" = Hva heter du? (noytral)
   "Wie heisst du denn?" = Hva heter du da? (mer interessert, vennlig)

Modalpartikler gjor spraket mykere, mer personlig og naturlig.`,
    },
    {
      id: 'tysk-2-10-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser modalpartikkelen i hver setning.',
        subTasks: [
          { label: 'a', task: 'Kannst du mir mal helfen?', solution: 'mal' },
          { label: 'b', task: 'Das weiss ich doch!', solution: 'doch' },
          { label: 'c', task: 'Was machst du denn hier?', solution: 'denn' },
          { label: 'd', task: 'Das ist ja interessant!', solution: 'ja' },
        ],
        solution: 'a) mal, b) doch, c) denn, d) ja',
        hints: ['Modalpartikler star aldri forst i setningen', 'De kan ofte fjernes uten at setningen blir grammatisk feil'],
      },
    },
    {
      id: 'tysk-2-10-2-text-2',
      type: 'text',
      content: `## Die wichtigsten Modalpartikeln

### DOCH
Brukes for a:
- Motsi noe: "Das stimmt **doch** nicht!" (Det stemmer jo ikke!)
- Oppfordre mykere: "Komm **doch** mit!" (Bli med da!)
- Bekrefte noe kjent: "Du weisst **doch**, dass..." (Du vet jo at...)

### MAL
Brukes for a:
- Myke opp foresporsler: "Zeig **mal**!" (Vis fram!)
- Gjore imperativ vennligere: "Warte **mal**!" (Vent litt!)
- Indikere noe uformelt: "Ich schau **mal**." (Jeg ser pa det.)

### JA
Brukes for a:
- Uttrykke overraskelse: "Das ist **ja** toll!" (Det er jo flott!)
- Paapeke noe opplagt: "Du weisst **ja**..." (Du vet jo...)
- Forsterke: "Das ist **ja** unglaublich!" (Det er jo utrolig!)`,
    },
    {
      id: 'tysk-2-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: DENN i sporsmal',
      problem: `Sammenlign sporsmal med og uten "denn":

A) "Was machst du?" vs. "Was machst du **denn**?"
B) "Woher kommst du?" vs. "Woher kommst du **denn**?"
C) "Warum bist du traurig?" vs. "Warum bist du **denn** traurig?"

Hvilken effekt har "denn"?`,
      solution: `"Denn" gjor sporsmalet:
- Mer interessert og engasjert
- Mindre interrogativt/forhorsaktigt
- Mer personlig og vennlig
- Ofte uttrykker det lett overraskelse

A) "Was machst du?" = Hva gjor du? (noytral)
   "Was machst du denn?" = Hva gjor du da? (nysgjerrig, interessert)

"Denn" signaliserer at du virkelig bryr deg om svaret, ikke bare spor for a sporre.`,
    },
    {
      id: 'tysk-2-10-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn passende modalpartikel (doch, mal, ja, denn).',
        subTasks: [
          { label: 'a', task: 'Kannst du mir ___ helfen? (vennlig forsporse)', solution: 'mal' },
          { label: 'b', task: 'Was ist ___ los? (interessert sporsmal)', solution: 'denn' },
          { label: 'c', task: 'Das weisst du ___! (du vet det jo)', solution: 'doch' },
          { label: 'd', task: 'Das ist ___ fantastisch! (overrasket)', solution: 'ja' },
        ],
        solution: 'a) mal, b) denn, c) doch, d) ja',
        hints: ['mal = mykere foresporsler', 'denn = interesserte sporsmal', 'doch = motsigelse/bekreftelse', 'ja = overraskelse'],
      },
    },
    {
      id: 'tysk-2-10-2-text-3',
      type: 'text',
      content: `## Weitere Modalpartikeln

### SCHON
- "Das wird **schon** klappen." (Det gar nok bra.) - beroliger
- "Was kostet das **schon**?" (Hva koster vel det?) - bagatelliserer

### EIGENTLICH
- "Was machst du **eigentlich** beruflich?" (Hva jobber du egentlig med?) - mer personlig sporsmal
- "**Eigentlich** wollte ich..." (Egentlich ville jeg...) - introduserer kontrast

### HALT / EBEN
- "Das ist **halt** so." (Sann er det bare.) - resignasjon
- "Dann machen wir es **eben** anders." (Da gjor vi det bare annerledes.)

### WOHL
- "Das ist **wohl** wahr." (Det er vel sant.)
- "Er kommt **wohl** spater." (Han kommer vel senere.) - antakelse`,
    },
    {
      id: 'tysk-2-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Kombinasjoner av modalpartikler',
      problem: `Modalpartikler kan kombineres! Analyser disse:

a) "Komm **doch mal** her!"
b) "Sag **doch mal**, wie das funktioniert."
c) "Das ist **ja wohl** nicht dein Ernst!"`,
      solution: `a) "Komm doch mal her!"
- doch = oppfordring
- mal = gjor det mykere
= "Kom hit da!" (vennlig oppfordring)

b) "Sag doch mal, wie das funktioniert."
- doch = oppfordrer
- mal = uformelt
= "Fortell meg da hvordan det fungerer" (nysgjerrig, vennlig)

c) "Das ist ja wohl nicht dein Ernst!"
- ja = overraskelse
- wohl = forsterker tvil
= "Det kan da vel ikke vaere alvor!" (sjokk/vantro)`,
    },
    {
      id: 'tysk-2-10-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til tysk med passende modalpartikkel.',
        subTasks: [
          { label: 'a', task: 'Det gar nok bra. (berolgende)', solution: 'Das wird schon klappen.' },
          { label: 'b', task: 'Hva gjor du egentlig? (interessert)', solution: 'Was machst du eigentlich?' },
          { label: 'c', task: 'Kan du ikke bare komme? (oppfordring)', solution: 'Kannst du nicht doch kommen? / Komm doch mal!' },
          { label: 'd', task: 'Sann er det bare. (resignert)', solution: 'Das ist halt/eben so.' },
        ],
        solution: 'a) Das wird schon klappen. b) Was machst du eigentlich? c) Kannst du nicht doch kommen? d) Das ist halt so.',
        hints: ['schon = beroliger', 'eigentlich = personlig interesse', 'doch = oppfordring', 'halt/eben = resignasjon'],
      },
    },
    {
      id: 'tysk-2-10-2-text-4',
      type: 'text',
      content: `## Ubersicht: Modalpartikeln

| Partikel | Hovedfunksjon | Eksempel |
|----------|---------------|----------|
| doch | motsigelse, oppfordring | Das stimmt doch nicht! |
| mal | myker opp, uformelt | Schau mal! |
| ja | overraskelse, bekreftelse | Das ist ja toll! |
| denn | interessert sporsmal | Was machst du denn? |
| schon | beroliger, bagatelliserer | Das wird schon. |
| eigentlich | personlig interesse | Was machst du eigentlich? |
| halt/eben | resignasjon | Das ist halt so. |
| wohl | antakelse | Er kommt wohl spater. |`,
    },
    {
      id: 'tysk-2-10-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog (4-6 replikker) og bruk minst 3 ulike modalpartikler.',
        solution: `Eksempel:
A: "Was machst du denn hier?"
B: "Ich warte auf Maria. Kennst du sie eigentlich?"
A: "Ja, naturlich! Sie ist doch meine Cousine!"
B: "Ach so! Das wusste ich ja nicht. Dann kommt sie wohl bald."
A: "Ja, das wird schon klappen. Setz dich doch mal."`,
        hints: ['denn = i sporsmal', 'eigentlich = personlig interesse', 'doch = jo/vel', 'ja = overraskelse', 'schon = beroliger', 'mal = myker opp'],
      },
    },
    {
      id: 'tysk-2-10-2-tip-1',
      type: 'tip',
      title: 'Tips for a laere modalpartikler',
      content: `Modalpartikler laeres best gjennom eksponering! Se tyske filmer og serier med undertekster, og legg merke til hvordan de brukes. Prov a etterape mater du horer dem. Husk: det er bedre a bruke noen fa riktig enn mange feil. Start med doch, mal og ja - de er mest vanlige!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Hoflichkeitsstufen und Register
// ============================================================================

export const CHAPTER_TYSK_2_10_3: TextbookChapter = {
  id: 'tysk-2-10-3',
  courseId: 'tysk-2',
  chapterNumber: '10.3',
  title: 'Hoflichkeitsstufen und Register',
  subtitle: 'Spraklig nivaaer og hoflighet',
  description: 'Behersk ulike sprakregistre fra uformelt til formelt pa tysk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'tilpasse sprak til ulike situasjoner',
    'skille mellom formelt og uformelt register',
    'bruke hoflige formuleringer korrekt',
  ],
  content: [
    {
      id: 'tysk-2-10-3-intro',
      type: 'text',
      content: `## Sprachregister im Deutschen

Pa tysk er det viktig a tilpasse sprakniva etter situasjonen. Vi skiller mellom:

1. **Formelles Deutsch** - Formelt tysk
   - Jobbsoknader, offisielle brev
   - Med fremmede, eldre, i forretninger

2. **Standard-Deutsch** - Standardtytsk
   - Nyheter, laereboker
   - Noytralt, korrekt sprak

3. **Umgangssprache** - Dagligtale
   - Med venner, familie
   - Uformelt, avslappet

4. **Jugendsprache/Slang** - Ungdomssprak
   - Med jevnaldrende
   - Trendord, forkortelser

Feil register kan virke uhoeflig eller komisk!`,
    },
    {
      id: 'tysk-2-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Samme budskap - ulike registre',
      problem: `Sammenlign hvordan man ber om hjelp i ulike registre:

**Formelt:**
"Wurden Sie mir bitte behilflich sein?"

**Standard:**
"Konnten Sie mir bitte helfen?"

**Uformelt:**
"Kannst du mir helfen?"

**Slang:**
"Ey, hilfst du mir mal?"

Hvilke situasjoner passer hvert register til?`,
      solution: `**Formelt:** "Wurden Sie mir bitte behilflich sein?"
- Svart formelle situasjoner
- Med hoytstanede personer, i forretningssammenheng
- Kan virke overhoeflig i feil kontekst

**Standard:** "Konnten Sie mir bitte helfen?"
- De fleste situasjoner med fremmede
- Butikker, offentlige steder, serviceyrker
- Trygt valg nar du er usikker

**Uformelt:** "Kannst du mir helfen?"
- Med venner, familie, bekjente
- Pa jobb med kollegaer du kjenner
- Daglige situasjoner

**Slang:** "Ey, hilfst du mir mal?"
- Kun med naere venner
- Kan virke uhoeflig i feil kontekst`,
    },
    {
      id: 'tysk-2-10-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilket register passer til situasjonen?',
        subTasks: [
          { label: 'a', task: 'E-post til en professor', solution: 'Formelt' },
          { label: 'b', task: 'Samtale med bestevennen din', solution: 'Uformelt/Slang' },
          { label: 'c', task: 'Bestille mat pa restaurant', solution: 'Standard/Hoflig' },
          { label: 'd', task: 'Jobbsoknad', solution: 'Formelt' },
        ],
        solution: 'a) Formelt, b) Uformelt, c) Standard, d) Formelt',
        hints: ['Tenk pa forholdet til mottakeren', 'Er det en offisiell situasjon?'],
      },
    },
    {
      id: 'tysk-2-10-3-text-2',
      type: 'text',
      content: `## Hofliche Formeln - Hoflige formuleringer

### Hilsener
| Formelt | Standard | Uformelt |
|---------|----------|----------|
| Sehr geehrte/r... | Liebe/r... | Hallo / Hi |
| Mit freundlichen Grussen | Viele Grusse | Tschuss / Ciao |

### Foresporsler
| Formelt | Standard | Uformelt |
|---------|----------|----------|
| Wurden Sie so freundlich sein... | Konnten Sie bitte... | Kannst du... |
| Durfte ich Sie bitten... | Wurden Sie... | Machst du mal... |
| Ware es moglich... | Geht das? | Geht klar? |

### Takk
| Formelt | Standard | Uformelt |
|---------|----------|----------|
| Ich danke Ihnen vielmals | Vielen Dank | Danke / Merci |
| Ich bin Ihnen sehr verbunden | Herzlichen Dank | Danke schon |`,
    },
    {
      id: 'tysk-2-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Formell e-post',
      problem: `Skriv om denne uformelle meldingen til en formell e-post:

**Uformelt:**
"Hi Prof,
kann ich morgen spater kommen? Hab nen Arzttermin.
Danke!"`,
      solution: `**Formelt:**
"Sehr geehrter Herr Professor [Nachname],

ich mochte Sie hoflich darum bitten, morgen etwa 15 Minuten spater zum Seminar erscheinen zu durfen. Leider habe ich einen dringenden Arzttermin, den ich nicht verschieben konnte.

Ich wurde mich freuen, wenn Sie mir dies ermoglichen konnten.

Mit freundlichen Grussen
[Vor- und Nachname]"

Endringer:
- Korrekt hilsen med tittel og etternavn
- Konjunktiv II for hoflighet
- Forklaring og begrunnelse
- Formell avslutning`,
    },
    {
      id: 'tysk-2-10-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor setningen mer formell.',
        subTasks: [
          { label: 'a', task: 'Kannst du mir das Salz geben?', solution: 'Wurden Sie mir bitte das Salz reichen?' },
          { label: 'b', task: 'Ich will einen Kaffee.', solution: 'Ich hatte gern einen Kaffee. / Konnte ich bitte einen Kaffee bekommen?' },
          { label: 'c', task: 'Wo ist das Klo?', solution: 'Konnten Sie mir sagen, wo die Toilette ist?' },
          { label: 'd', task: 'Check mal meine Mail.', solution: 'Ich wurde Sie bitten, meine E-Mail zu uberprufen.' },
        ],
        solution: 'a) Wurden Sie mir bitte das Salz reichen? b) Ich hatte gern einen Kaffee. c) Konnten Sie mir sagen, wo die Toilette ist? d) Ich wurde Sie bitten, meine E-Mail zu uberprufen.',
        hints: ['Bruk "Sie" i stedet for "du"', 'Konjunktiv II (wurden, konnten, hatte) gjor setninger hoefligere', 'Unnga slang og forkortelser'],
      },
    },
    {
      id: 'tysk-2-10-3-text-3',
      type: 'text',
      content: `## Du oder Sie? - Duzen oder Siezen?

Et av de viktigste valgene i tysk er om man skal bruke **"du"** (duzen) eller **"Sie"** (siezen).

**Bruk "Sie":**
- Med fremmede voksne
- I formelle situasjoner
- Med eldre personer (til de tilbyr "du")
- Med sjefer og overordnede (med mindre annet er bestemt)
- I butikker, pa restauranter, hos legen

**Bruk "du":**
- Med barn og ungdom
- Med familie og venner
- Nar noen tilbyr "du"
- I mange moderne arbeidsplasser (spesielt tech)
- Blant studenter

**Viktig:** Det er alltid den eldre/hoyere rangerte som tilbyr "du" forst!`,
    },
    {
      id: 'tysk-2-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Nar tilbys "du"?',
      problem: `Les situasjonene og avgjer hvem som bor tilby "du" forst:

a) En 50-arig sjef og en 25-arig nyansatt
b) To studenter som moetes for forste gang
c) En kunde og en butikkmedarbeider
d) En laerer og en elev`,
      solution: `a) **Sjefen** bor tilby "du" forst (hoyere rang)
Eksempel: "Wir konnen uns gern duzen. Ich bin Thomas."

b) **Begge** kan tilby "du" (likeverdige)
Blant studenter er det vanlig a ga rett til "du"

c) **Ingen** - man forblir ved "Sie"
I forretningssammenheng er "Sie" standard

d) **Laereren** kan tilby "du" (hoyere rang)
Men i Tyskland er det vanlig at laerere bruker "Sie" med eldre elever`,
    },
    {
      id: 'tysk-2-10-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort formell e-post (5-6 setninger) til en bedrift der du klager pa et produkt. Bruk korrekt register og hoflige formuleringer.',
        solution: `Eksempel:
"Sehr geehrte Damen und Herren,

am 15. Januar 2024 habe ich bei Ihnen einen Laptop bestellt (Bestellnummer: 12345). Leider musste ich feststellen, dass das Gerat einen Defekt aufweist.

Ich wurde Sie hoflich bitten, mir ein Ersatzgerat zuzusenden oder den Kaufpreis zu erstatten.

Fur Ihre Bemuhungen bedanke ich mich im Voraus.

Mit freundlichen Grussen
[Name]"`,
        hints: ['Start med "Sehr geehrte Damen und Herren"', 'Bruk Konjunktiv II for hoflighet', 'Avslutt med "Mit freundlichen Grussen"'],
      },
    },
    {
      id: 'tysk-2-10-3-text-4',
      type: 'text',
      content: `## Wichtige hofliche Wendungen

**For a be om noe:**
- Ich wurde Sie bitten... (Jeg vil be Dem om...)
- Ware es moglich... (Ville det vaere mulig...)
- Durfte ich Sie fragen... (Turde jeg sporre Dem...)

**For a avslå hoflig:**
- Das ist leider nicht moglich. (Det er dessverre ikke mulig.)
- Ich bedauere, aber... (Jeg beklager, men...)
- Leider muss ich ablehnen. (Dessverre ma jeg avslå.)

**For a beklage:**
- Es tut mir leid. (Jeg beklager.)
- Ich entschuldige mich. (Jeg unnskylder meg.)
- Verzeihen Sie bitte. (Unnskyld meg, vaer så snill.)

**For a takke:**
- Ich danke Ihnen herzlich. (Jeg takker Dem hjertelig.)
- Vielen herzlichen Dank. (Tusen hjertelig takk.)
- Ich bin Ihnen sehr dankbar. (Jeg er Dem svart takknemlig.)`,
    },
    {
      id: 'tysk-2-10-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig register og skriv en passende replikk.',
        subTasks: [
          { label: 'a', task: 'Du vil avslå et tilbud hoflig (formelt)', solution: 'Es tut mir leid, aber ich muss das Angebot leider ablehnen.' },
          { label: 'b', task: 'Du takker en venn for hjelp (uformelt)', solution: 'Danke, du bist der/die Beste!' },
          { label: 'c', task: 'Du ber om a fa se menyen pa restaurant (standard)', solution: 'Konnte ich bitte die Speisekarte haben/sehen?' },
        ],
        solution: 'a) Es tut mir leid, aber ich muss das Angebot leider ablehnen. b) Danke, du bist der Beste! c) Konnte ich bitte die Speisekarte haben?',
        hints: ['Formelt = Sie, Konjunktiv II', 'Uformelt = du, direkte', 'Standard = hoflig men ikke overdrevent formelt'],
      },
    },
    {
      id: 'tysk-2-10-3-note-1',
      type: 'note',
      title: 'Kulturell innsikt',
      content: `I mange moderne tyske bedrifter, spesielt i tech-bransjen og start-ups, er det vanlig med "Duz-Kultur" - alle bruker fornavn og "du". Men i tradisjonelle bransjer som bank, juss og offentlig sektor er "Sie" fortsatt standard. Nar du er usikker, bruk alltid "Sie" til noen tilbyr "du"!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.4: Interkulturelle Kommunikation
// ============================================================================

export const CHAPTER_TYSK_2_10_4: TextbookChapter = {
  id: 'tysk-2-10-4',
  courseId: 'tysk-2',
  chapterNumber: '10.4',
  title: 'Interkulturelle Kommunikation',
  subtitle: 'Kulturforskjeller i kommunikasjon',
  description: 'Forsta kulturelle forskjeller mellom tysktalende land og Norge for bedre kommunikasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forsta kulturelle forskjeller i kommunikasjon',
    'tilpasse kommunikasjonsstil til ulike kulturer',
    'unnga kulturelle misforstaelser',
  ],
  content: [
    {
      id: 'tysk-2-10-4-intro',
      type: 'text',
      content: `## Kultur und Kommunikation

Effektiv kommunikasjon handler ikke bare om sprak - det handler ogsa om a forsta kulturelle forskjeller. Selv om Norge og de tysktalende landene er naboer i Europa, finnes det viktige kulturelle forskjeller i:

- **Direkthet** - Hvor direkte sier man ting?
- **Formalitet** - Hvor formelt er spraket?
- **Punktlighet** - Hvor viktig er tid?
- **Hierarki** - Hvor viktig er rang og status?
- **Smalltalk** - Hvordan bygger man relasjoner?

A forsta disse forskjellene kan forhindre misforstaelser og forbedre kommunikasjonen.`,
    },
    {
      id: 'tysk-2-10-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Direkte vs. indirekte kommunikasjon',
      problem: `Sammenlign disse mateen a gi tilbakemelding pa:

**Tysk stil:**
"Der Bericht ist nicht gut. Er hat drei Fehler auf der ersten Seite."

**Norsk stil:**
"Rapporten er ganske bra, men kanskje du kunne se litt mer pa forste siden?"

Hvordan kan disse forskjellene fore til misforstaelser?`,
      solution: `**Tysk kommunikasjon er mer direkte:**
- Sier tydelig hva som er galt
- Fokuserer pa fakta, ikke folelser
- Kan oppleves som uhoflig av nordmenn

**Norsk kommunikasjon er ofte mer indirekte:**
- Pakker kritikk inn i ros
- Bruker modererende ord (kanskje, litt, ganske)
- Kan oppleves som uklar av tyskere

**Misforstaelser:**
- Nordmenn kan tro tyskere er uhoeflige/harde
- Tyskere kan tro nordmenn ikke sier hva de mener
- Begge stiler er like "hoeflige" i sin kulturelle kontekst`,
    },
    {
      id: 'tysk-2-10-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser om utsagnet er typisk tysk eller norsk kommunikasjonsstil.',
        subTasks: [
          { label: 'a', task: '"Nein, das geht nicht."', solution: 'Tysk - direkte avvisning' },
          { label: 'b', task: '"Det er kanskje ikke helt optimalt."', solution: 'Norsk - indirekte kritikk' },
          { label: 'c', task: '"Ihre Idee funktioniert aus folgenden Grunden nicht..."', solution: 'Tysk - direkte med begrunnelse' },
          { label: 'd', task: '"Hmm, vi far se pa det."', solution: 'Norsk - uklart/utydelig svar' },
        ],
        solution: 'a) Tysk, b) Norsk, c) Tysk, d) Norsk',
        hints: ['Direkte = tysk, Indirekte = norsk', 'Tysere gir ofte begrunnelser, nordmenn bruker ofte "kanskje" og "litt"'],
      },
    },
    {
      id: 'tysk-2-10-4-text-2',
      type: 'text',
      content: `## Punktlichkeit und Zeit - Punktlighet og tid

**I Tyskland:**
- "Punktlichkeit ist eine Tugend" (Punktlighet er en dyd)
- A komme for sent er uhoeflig, selv 5 minutter
- Moter starter presis pa avtalt tid
- "Funf Minuten vor der Zeit ist des Deutschen Punktlichkeit" (5 minutter for er tysk punktlighet)

**I Osterrike:**
- Noe mer avslappet enn Tyskland
- "Akademisches Viertel" - 15 minutter akademisk forsinkelse

**I Sveits:**
- Ekstrem punktlighet
- Tog og busser gar pa sekundet

**Sammenligning med Norge:**
- Norge er ogsa punktlig, men mer fleksibel enn Tyskland
- Sosiale arrangementer har ofte mykere tidsrammer`,
    },
    {
      id: 'tysk-2-10-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Forretningskultur',
      problem: `Les om tysk forretningskultur og sammenlign med Norge:

**Tysk forretningsmote:**
- Starter presis, gjerne med handtrykk
- Direkte til sak etter kort introduksjon
- Agenda folges noye
- Beslutninger er bindende
- Titler brukes (Herr Doktor, Frau Professor)

Hva er de storste forskjellene fra norsk forretningskultur?`,
      solution: `**Storste forskjeller:**

1. **Formalitet:**
- Tyskland: Titler og etternavn vanlig
- Norge: Fornavn nesten alltid

2. **Smalltalk:**
- Tyskland: Kort og profesjonell
- Norge: Mer uformell prat for man kommer til sak

3. **Hierarki:**
- Tyskland: Tydelig hierarki respekteres
- Norge: Flat struktur, alle kan si sin mening

4. **Beslutninger:**
- Tyskland: Grundig analyse for beslutning, men sa er det endelig
- Norge: Mer fleksibel, kan endre underveis

5. **Presentasjoner:**
- Tyskland: Detaljert, med tall og fakta
- Norge: Ofte mer overordnet, mindre detaljer`,
    },
    {
      id: 'tysk-2-10-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva bor du gjore i disse situasjonene med tyske forretningspartnere?',
        subTasks: [
          { label: 'a', task: 'Du kommer 10 minutter for sent til et mote.', solution: 'Unnskyld med en gang og forklar kort arsaken. I Tyskland er dette uhoflig, sa vaer oppriktig beklagende.' },
          { label: 'b', task: 'Du er usikker pa om du skal bruke "du" eller "Sie".', solution: 'Bruk alltid "Sie" til den andre tilbyr "du". I tvilstilfeller er "Sie" trygt.' },
          { label: 'c', task: 'En tysk kollega kritiserer forslaget ditt direkte.', solution: 'Ikke ta det personlig! Tysk direkthet er saklig, ikke personlig. Svar pa kritikken med argumenter.' },
        ],
        solution: 'a) Beklage oppriktig, b) Bruk "Sie", c) Svar saklig pa kritikken',
        hints: ['Tysere setter pris pa aerlighet og direkthet', 'Punktlighet er svart viktig', 'Kritikk er ofte saklig, ikke personlig'],
      },
    },
    {
      id: 'tysk-2-10-4-text-3',
      type: 'text',
      content: `## Smalltalk und Tabus

**Gode smalltalk-temaer i Tyskland:**
- Reiser og ferier
- Hobby og fritidsaktiviteter
- Kultur, bker, film
- Sport (spesielt fotball)
- Mat og drikke
- Aktuelle (ikke politiske) hendelser

**Unnga disse temaene:**
- Personlig okonomi/lon
- Politikk (spesielt i forste mote)
- Religion
- Andre verdenskrig/Nazi-tid (sensitive)
- Personlige problemer
- Kritikk av Tyskland

**Typiske sporsmal:**
- "Wie war Ihr Urlaub?"
- "Haben Sie das Spiel gestern gesehen?"
- "Was machen Sie in Ihrer Freizeit?"`,
    },
    {
      id: 'tysk-2-10-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Kulturelle feiltrinn',
      problem: `Les om disse kulturelle feilene og forklar hva som gikk galt:

a) En nordmann sier "Det var interessant" om en tysk kollegas presentasjon (mente at den var bra).

b) En norsk student kommer 10 minutter for sent til forstforelesning i Tyskland og sier ingenting.

c) En nordmann spor en tysk bekjent om han tjener godt i jobben sin.`,
      solution: `a) **"Interessant" kan tolkes negativt**
Pa tysk kan "interessant" vaere indirekte kritikk (som nar nordmenn sier "spesielt"). Si heller: "Das war sehr gut!" eller "Ich habe viel gelernt."

b) **For sent uten unnskyldning**
I Tyskland er dette svart uhoflig. Man bor alltid unnskylde seg ved forsinkelse, selv til en forelesning. Si: "Entschuldigung fur die Verspatung."

c) **Lon er privat**
I Tyskland (og mange andre land) er lon et tabu-tema. Dette er et altfor personlig sporsmal. Hold deg til tryggere temaer.`,
    },
    {
      id: 'tysk-2-10-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort presentasjon (pa tysk) av deg selv for et forretningsmote i Tyskland. Inkluder: navn, stilling, firma, og et par setninger om deg selv. Husk formelt register.',
        solution: `Eksempel:
"Guten Tag, mein Name ist [Fornavn Etternavn]. Ich arbeite als [stilling] bei [firmanavn] in Oslo. Unser Unternehmen ist auf [omrade] spezialisiert. Ich freue mich sehr, Sie heute kennenzulernen. Vor diesem Treffen habe ich einige Informationen uber Ihr Unternehmen gelesen und bin beeindruckt von Ihren Projekten im Bereich [omrade]. Ich hoffe auf eine gute Zusammenarbeit."`,
        hints: ['Start med "Guten Tag" og fullt navn', 'Nevn stilling og firma', 'Vis interesse for den andre parten'],
      },
    },
    {
      id: 'tysk-2-10-4-text-4',
      type: 'text',
      content: `## DACH-Unterschiede: Deutschland, Osterreich, Schweiz

Selv om alle snakker tysk, er det kulturelle forskjeller:

**Tyskland:**
- Mest direkte kommunikasjon
- Formelt i forretninger
- Hoy verdi pa effektivitet

**Osterreich:**
- Mykere, mer indirekte
- Stor vekt pa titler (Herr Magister, Frau Doktor)
- "Schmah" - wiensk humor og sjarme

**Sveits:**
- Svart punktlig og organisert
- Mer reservert forst, men varm nar man kjenner dem
- Konsensus-orientert (alle skal vaere enige)

**Felles for alle:**
- Kvalitet verdsettes hoyt
- Privatlivet respekteres
- Handtrykk ved hilsen
- "Sie" med fremmede`,
    },
    {
      id: 'tysk-2-10-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-10-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter: Hva kan nordmenn laere av tysk kommunikasjonskultur, og hva kan tyskere laere av norsk? Skriv 3-4 setninger pa tysk.',
        solution: `Eksempel:
"Norwegern konnten von den Deutschen mehr Direktheit lernen. Manchmal ist es effizienter, klar zu sagen, was man meint. Umgekehrt konnten Deutsche von der norwegischen flachen Hierarchie profitieren. In Norwegen fuhlt sich jeder frei, seine Meinung zu sagen - das fordert Kreativitat und Innovation."`,
        hints: ['Tenk pa fordeler med begge kulturer', 'Bruk sammenligningsord: im Gegensatz zu, wahrend, andererseits'],
      },
    },
    {
      id: 'tysk-2-10-4-note-1',
      type: 'note',
      title: 'Kulturell kompetanse',
      content: `Husk at kulturelle forskjeller er generaliseringer - individer varierer! Det viktigste er a vaere observant, spore nar du er usikker, og vaere villig til a tilpasse deg. God interkulturell kommunikasjon handler om respekt, nysgjerrighet og fleksibilitet.`,
    },
    {
      id: 'tysk-2-10-4-tip-1',
      type: 'tip',
      title: 'Tips for interkulturell suksess',
      content: `1. **Vaer punktlig** - spesielt i Tyskland og Sveits
2. **Bruk "Sie"** til du far tilbud om "du"
3. **Vaer forberedt** - tyskere setter pris pa grundighet
4. **Ta kritikk saklig** - det er ikke personlig
5. **Unnga sensitive temaer** - politikk, lon, krig
6. **Observer og tilpass** - se hva andre gjor`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_2_CHAPTERS_9_10: TextbookChapter[] = [
  CHAPTER_TYSK_2_9_1,
  CHAPTER_TYSK_2_9_2,
  CHAPTER_TYSK_2_9_3,
  CHAPTER_TYSK_2_9_4,
  CHAPTER_TYSK_2_10_1,
  CHAPTER_TYSK_2_10_2,
  CHAPTER_TYSK_2_10_3,
  CHAPTER_TYSK_2_10_4,
];
