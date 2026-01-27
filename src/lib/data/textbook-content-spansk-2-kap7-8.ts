/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 2 - Kapittel 7-8 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 7: El mundo laboral (7.1-7.4)
 * - Kapittel 8: Medio ambiente y sociedad (8.1-8.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Profesiones y trabajo - Yrker og arbeidsliv
// ============================================================================

export const CHAPTER_SPANSK_2_7_1: TextbookChapter = {
  id: 'spansk-2-7-1',
  courseId: 'spansk-2',
  chapterNumber: '7.1',
  title: 'Profesiones y trabajo',
  subtitle: 'Yrker og arbeidsliv',
  description: 'Lær vokabular og uttrykk for yrker og arbeidsliv.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive yrker og arbeid',
    'kommunisere om arbeidslivet',
  ],
  content: [
    {
      id: 'spansk-2-7-1-intro',
      type: 'text',
      content: `## Yrker og arbeidsliv på spansk

Å kunne snakke om yrker og arbeidsliv er viktig når du møter nye mennesker, diskuterer fremtidsplaner eller reiser i spansktalende land. I dette kapittelet lærer du ord og uttrykk for ulike yrker, arbeidsplasser og arbeidsoppgaver.

På spansk har mange yrkesord både en hankjønns- og hunkjønnsform. For eksempel: **el médico / la médica** (lege), **el profesor / la profesora** (lærer). Noen yrkesord er like i begge kjønn, som **el/la periodista** (journalist).`,
    },
    {
      id: 'spansk-2-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Vanlige yrker',
      content: `**Profesiones comunes (vanlige yrker):**

| Spansk (m/f) | Norsk |
|--------------|-------|
| el médico / la médica | lege |
| el abogado / la abogada | advokat |
| el ingeniero / la ingeniera | ingeniør |
| el profesor / la profesora | lærer |
| el enfermero / la enfermera | sykepleier |
| el arquitecto / la arquitecta | arkitekt |
| el periodista / la periodista | journalist |
| el cocinero / la cocinera | kokk |
| el programador / la programadora | programmerer |
| el vendedor / la vendedora | selger |`,
    },
    {
      id: 'spansk-2-7-1-text-1',
      type: 'text',
      content: `## Arbeidsplasser og arbeidsoppgaver

For å snakke om arbeid trenger du også ord for **arbeidsplasser** og **arbeidsoppgaver**:

**Lugares de trabajo (arbeidsplasser):**

| Spansk | Norsk |
|--------|-------|
| la oficina | kontoret |
| el hospital | sykehuset |
| la fábrica | fabrikken |
| el colegio / la escuela | skolen |
| el restaurante | restauranten |
| la tienda | butikken |
| el tribunal | rettslokalet |
| la empresa | bedriften |

**Tareas laborales (arbeidsoppgaver):**

| Spansk | Norsk |
|--------|-------|
| atender a los clientes | betjene kunder |
| escribir informes | skrive rapporter |
| organizar reuniones | organisere møter |
| dirigir un equipo | lede et team |
| investigar | forske/undersøke |
| enseñar | undervise |`,
    },
    {
      id: 'spansk-2-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Beskrive yrker',
      problem: `Koble yrket med riktig beskrivelse:

a) El médico
b) El abogado
c) El profesor
d) El cocinero

1. Trabaja en un restaurante y prepara la comida.
2. Trabaja en un hospital y cura a los enfermos.
3. Trabaja en un tribunal y defiende a sus clientes.
4. Trabaja en un colegio y enseña a los alumnos.`,
      solution: `a) El médico → 2. **Trabaja en un hospital y cura a los enfermos.** (Jobber på et sykehus og helbreder de syke.)
b) El abogado → 3. **Trabaja en un tribunal y defiende a sus clientes.** (Jobber i en rettsal og forsvarer klientene sine.)
c) El profesor → 4. **Trabaja en un colegio y enseña a los alumnos.** (Jobber på en skole og underviser elevene.)
d) El cocinero → 1. **Trabaja en un restaurante y prepara la comida.** (Jobber på en restaurant og lager maten.)

**Nyttige verb:** curar (helbrede), defender (forsvare), enseñar (undervise), preparar (forberede/lage)`,
    },
    {
      id: 'spansk-2-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-7-1-ex-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett yrkene til spansk (bruk hankjønnsformen):',
        subTasks: [
          { label: 'a', task: 'lege', solution: 'el médico', answer: 'el médico' },
          { label: 'b', task: 'advokat', solution: 'el abogado', answer: 'el abogado' },
          { label: 'c', task: 'ingeniør', solution: 'el ingeniero', answer: 'el ingeniero' },
          { label: 'd', task: 'sykepleier', solution: 'el enfermero', answer: 'el enfermero' },
        ],
        solution: 'a) el médico, b) el abogado, c) el ingeniero, d) el enfermero',
        hints: ['Husk artikkelen "el" foran hankjønnsord', 'Médico kommer fra latin "medicus"'],
      },
    },
    {
      id: 'spansk-2-7-1-text-2',
      type: 'text',
      content: `## Verb relatert til arbeid

For å snakke om arbeidsliv trenger du noen viktige verb:

| Spansk | Norsk | Eksempel |
|--------|-------|----------|
| trabajar | å jobbe | Trabajo en una oficina. (Jeg jobber på et kontor.) |
| ganar | å tjene | Gana un buen sueldo. (Han tjener en god lønn.) |
| contratar | å ansette | La empresa va a contratar a diez personas. (Bedriften skal ansette ti personer.) |
| despedir | å si opp/sparke | Lo despidieron por llegar tarde. (De sparket ham for å komme for sent.) |
| solicitar | å søke (jobb) | Voy a solicitar el puesto. (Jeg skal søke på stillingen.) |
| jubilarse | å pensjonere seg | Mi abuelo se jubiló a los 65 años. (Bestefaren min pensjonerte seg ved 65 år.) |

**Uttrykk om arbeid:**
- estar en paro = å være arbeidsledig
- trabajar a tiempo completo = å jobbe heltid
- trabajar a media jornada = å jobbe deltid
- hacer horas extra = å jobbe overtid`,
    },
    {
      id: 'spansk-2-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Snakke om arbeid',
      problem: `Fyll inn riktig verb (trabajar, ganar, contratar, solicitar):

a) Mi madre ___ en un hospital.
b) Quiero ___ el puesto de programador.
c) La empresa va a ___ a nuevos empleados.
d) Los médicos ___ un buen sueldo.`,
      solution: `a) Mi madre **trabaja** en un hospital. (Moren min jobber på et sykehus.)
b) Quiero **solicitar** el puesto de programador. (Jeg vil søke på stillingen som programmerer.)
c) La empresa va a **contratar** a nuevos empleados. (Bedriften skal ansette nye ansatte.)
d) Los médicos **ganan** un buen sueldo. (Leger tjener en god lønn.)

**Merk bøyningen:** trabajar → trabaja (3. person), ganar → ganan (3. person flertall)`,
    },
    {
      id: 'spansk-2-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett setningene til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg jobber på et kontor.', solution: 'Trabajo en una oficina.', answer: 'Trabajo en una oficina.' },
          { label: 'b', task: 'Hun er sykepleier.', solution: 'Ella es enfermera.', answer: 'Ella es enfermera.' },
          { label: 'c', task: 'De jobber heltid.', solution: 'Trabajan a tiempo completo.', answer: 'Trabajan a tiempo completo.' },
          { label: 'd', task: 'Han er arbeidsledig.', solution: 'Él está en paro.', answer: 'Él está en paro.' },
        ],
        solution: 'a) Trabajo en una oficina. b) Ella es enfermera. c) Trabajan a tiempo completo. d) Él está en paro.',
        hints: ['Husk å bøye verbet etter person', 'Bruk "ser" for yrke og "estar" for tilstand'],
      },
    },
    {
      id: 'spansk-2-7-1-tip-1',
      type: 'tip',
      content: `**Ser vs. estar med yrker:** Bruk **ser** for å si hva noen er (yrke): "Soy médico" (Jeg er lege). Bruk **estar** for midlertidige tilstander: "Estoy en paro" (Jeg er arbeidsledig). Denne forskjellen er viktig å huske!`,
    },
    {
      id: 'spansk-2-7-1-text-3',
      type: 'text',
      content: `## Snakke om fremtidige yrkesplaner

Når du vil snakke om hva du ønsker å bli eller jobbe med i fremtiden, bruker du disse uttrykkene:

- **Quiero ser...** = Jeg vil bli...
- **Me gustaría trabajar como...** = Jeg skulle gjerne jobbe som...
- **Mi sueño es ser...** = Drømmen min er å bli...
- **Estoy estudiando para ser...** = Jeg studerer for å bli...
- **Cuando termine mis estudios, quiero...** = Når jeg er ferdig med studiene, vil jeg...

**Eksempler:**
- *Quiero ser ingeniera porque me gustan las matemáticas.* (Jeg vil bli ingeniør fordi jeg liker matematikk.)
- *Me gustaría trabajar como periodista en el extranjero.* (Jeg skulle gjerne jobbe som journalist i utlandet.)
- *Estoy estudiando para ser abogada.* (Jeg studerer for å bli advokat.)`,
    },
    {
      id: 'spansk-2-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Fremtidsplaner',
      problem: `Les teksten og svar på spørsmålene:

"Me llamo Carlos y tengo 17 años. Estoy en el último año del instituto. Me gustaría ser programador porque me encanta la tecnología. Quiero trabajar en una empresa de tecnología en Madrid o Barcelona. Mi hermana Ana quiere ser médica. Ella estudia mucho y es muy inteligente."

a) ¿Qué quiere ser Carlos?
b) ¿Por qué quiere ser programador?
c) ¿Dónde quiere trabajar?
d) ¿Qué quiere ser su hermana?`,
      solution: `a) Carlos quiere ser **programador**. (Carlos vil bli programmerer.)
b) Quiere ser programador porque **le encanta la tecnología**. (Fordi han elsker teknologi.)
c) Quiere trabajar **en una empresa de tecnología en Madrid o Barcelona**. (I en teknologibedrift i Madrid eller Barcelona.)
d) Su hermana quiere ser **médica**. (Søsteren hans vil bli lege.)

**Nyttig vokabular:** el instituto = videregående skole, encantar = å elske/begeistre, el último año = siste året`,
    },
    {
      id: 'spansk-2-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfør setningene med passende yrke eller uttrykk:',
        subTasks: [
          { label: 'a', task: 'Quiero ser ___ porque me gusta ayudar a los enfermos.', solution: 'médico/a (o enfermero/a)', answer: 'médico/a' },
          { label: 'b', task: 'Me gustaría trabajar como ___ porque me encanta cocinar.', solution: 'cocinero/a', answer: 'cocinero/a' },
          { label: 'c', task: 'Mi sueño es ser ___ porque me interesan las leyes.', solution: 'abogado/a', answer: 'abogado/a' },
          { label: 'd', task: 'Estoy estudiando para ser ___ porque me gustan los ordenadores.', solution: 'programador/a', answer: 'programador/a' },
        ],
        solution: 'a) médico/a, b) cocinero/a, c) abogado/a, d) programador/a',
        hints: ['Tenk på hva yrket innebærer', 'ayudar a los enfermos = hjelpe de syke'],
      },
    },
    {
      id: 'spansk-2-7-1-note-1',
      type: 'note',
      title: 'Oppsummering: Yrker og arbeidsliv',
      content: `**Det viktigste fra dette kapittelet:**

1. **Yrkesord** har ofte hankjønns- og hunkjønnsform: el médico / la médica
2. **Arbeidsplasser:** la oficina, el hospital, la fábrica, el colegio
3. **Viktige verb:** trabajar, ganar, contratar, despedir, solicitar
4. **Uttrykk:** estar en paro, trabajar a tiempo completo, a media jornada
5. **Fremtidsplaner:** Quiero ser..., Me gustaría trabajar como...`,
    },
    {
      id: 'spansk-2-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (4-5 setninger) på spansk om dine fremtidsplaner. Bruk uttrykkene: Quiero ser..., porque..., me gustaría trabajar en...',
        subTasks: [
          { label: 'a', task: 'Hva vil du bli? (Quiero ser...)', solution: 'Quiero ser ingeniero/a.', answer: 'Quiero ser ingeniero/a.' },
          { label: 'b', task: 'Hvorfor? (porque...)', solution: 'Porque me gustan las matemáticas y la tecnología.', answer: 'Porque me gustan las matemáticas y la tecnología.' },
          { label: 'c', task: 'Hvor vil du jobbe? (Me gustaría trabajar en...)', solution: 'Me gustaría trabajar en una empresa internacional.', answer: 'Me gustaría trabajar en una empresa internacional.' },
          { label: 'd', task: 'Hva studerer du nå? (Estoy estudiando...)', solution: 'Estoy estudiando ciencias y matemáticas en el instituto.', answer: 'Estoy estudiando ciencias y matemáticas en el instituto.' },
        ],
        solution: 'Eksempel: Quiero ser ingeniero porque me gustan las matemáticas y la tecnología. Me gustaría trabajar en una empresa internacional en España. Estoy estudiando ciencias y matemáticas en el instituto. Cuando termine mis estudios, quiero ir a la universidad.',
        hints: ['Bruk "Quiero ser" + yrke', 'Bruk "porque" for å begrunne', 'Bruk "Me gustaría" for ønsker'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: El currículum vitae - Skrive CV på spansk
// ============================================================================

export const CHAPTER_SPANSK_2_7_2: TextbookChapter = {
  id: 'spansk-2-7-2',
  courseId: 'spansk-2',
  chapterNumber: '7.2',
  title: 'El currículum vitae',
  subtitle: 'Skrive CV på spansk',
  description: 'Lær å skrive en spansk CV med riktige uttrykk og format.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive CV på spansk',
    'bruke formelt språk',
  ],
  content: [
    {
      id: 'spansk-2-7-2-intro',
      type: 'text',
      content: `## CV-en på spansk

En CV (el currículum vitae) er et viktig dokument når du søker jobb. På spansk følger CV-en en bestemt struktur med faste overskrifter og formelt språk. I dette kapittelet lærer du å skrive en profesjonell CV på spansk.

I Spania og Latin-Amerika er det også vanlig å skrive en **carta de presentación** (presentasjonsbrev/søknadsbrev) som følger med CV-en.`,
    },
    {
      id: 'spansk-2-7-2-def-1',
      type: 'definition',
      title: 'CV-struktur på spansk',
      content: `**Estructura del currículum vitae:**

En spansk CV inneholder vanligvis disse delene:

| Spansk | Norsk |
|--------|-------|
| Datos personales | Personlige opplysninger |
| Formación académica | Utdanning |
| Experiencia laboral | Arbeidserfaring |
| Idiomas | Språk |
| Habilidades | Ferdigheter |
| Otros datos de interés | Annen relevant informasjon |
| Referencias | Referanser |

**Datos personales inkluderer:**
- Nombre y apellidos (fornavn og etternavn)
- Fecha de nacimiento (fødselsdato)
- Dirección (adresse)
- Teléfono (telefon)
- Correo electrónico (e-post)`,
    },
    {
      id: 'spansk-2-7-2-text-1',
      type: 'text',
      content: `## Utdanning og arbeidserfaring

Når du beskriver utdanning og arbeidserfaring, bruker du spesifikke uttrykk:

**Formación académica (utdanning):**

| Spansk | Norsk |
|--------|-------|
| el instituto | videregående skole |
| la universidad | universitet |
| el grado | bachelorgrad |
| el máster | mastergrad |
| el doctorado | doktorgrad |
| el curso | kurs |
| el certificado | sertifikat |
| el título | vitnemål/grad |

**Experiencia laboral (arbeidserfaring):**

| Spansk | Norsk |
|--------|-------|
| el puesto | stillingen |
| la empresa | bedriften |
| las funciones | arbeidsoppgavene |
| las responsabilidades | ansvarsområdene |
| el período | perioden |
| prácticas profesionales | internship/praksis |
| becario/a | stipendiat/praktikant |`,
    },
    {
      id: 'spansk-2-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese en CV',
      problem: `Les denne delen av en CV og svar på spørsmålene:

**DATOS PERSONALES**
Nombre: María García López
Fecha de nacimiento: 15 de marzo de 1995
Dirección: Calle Gran Vía 45, Madrid
Teléfono: +34 612 345 678
Correo electrónico: maria.garcia@email.com

**FORMACIÓN ACADÉMICA**
2013-2017: Grado en Ingeniería Informática, Universidad Complutense de Madrid
2017-2018: Máster en Inteligencia Artificial, Universidad Politécnica de Madrid

a) ¿Cuál es el nombre completo de la candidata?
b) ¿Dónde vive?
c) ¿Qué estudió en la universidad?`,
      solution: `a) El nombre completo es **María García López**.
b) Vive en **la Calle Gran Vía 45, Madrid**.
c) Estudió **Ingeniería Informática** (bachelorgrad) y después hizo un **Máster en Inteligencia Artificial** (mastergrad).

**Merk:** I Spania har man to etternavn: ett fra far (García) og ett fra mor (López).`,
    },
    {
      id: 'spansk-2-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-7-2-ex-1',
        number: '7.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett CV-overskriftene til spansk:',
        subTasks: [
          { label: 'a', task: 'Personlige opplysninger', solution: 'Datos personales', answer: 'Datos personales' },
          { label: 'b', task: 'Utdanning', solution: 'Formación académica', answer: 'Formación académica' },
          { label: 'c', task: 'Arbeidserfaring', solution: 'Experiencia laboral', answer: 'Experiencia laboral' },
          { label: 'd', task: 'Språk', solution: 'Idiomas', answer: 'Idiomas' },
        ],
        solution: 'a) Datos personales, b) Formación académica, c) Experiencia laboral, d) Idiomas',
        hints: ['Datos = opplysninger/data', 'Formación = utdanning/dannelse'],
      },
    },
    {
      id: 'spansk-2-7-2-text-2',
      type: 'text',
      content: `## Språk og ferdigheter

I en spansk CV er det viktig å beskrive språkferdighetene dine. Man bruker ofte det europeiske rammeverket (MCER/CEFR):

**Nivåer:**
- A1/A2: Nivel básico (grunnleggende nivå)
- B1/B2: Nivel intermedio (mellomnivå)
- C1/C2: Nivel avanzado (avansert nivå)

**Beskrivelse av språkferdigheter:**
- Lengua materna (morsmål)
- Nivel alto / avanzado (høyt/avansert nivå)
- Nivel medio / intermedio (middels nivå)
- Nivel básico (grunnleggende nivå)

**Habilidades (ferdigheter):**

| Spansk | Norsk |
|--------|-------|
| Trabajo en equipo | Teamarbeid |
| Liderazgo | Lederskap |
| Comunicación | Kommunikasjon |
| Organización | Organisering |
| Resolución de problemas | Problemløsning |
| Conocimientos de informática | IT-kunnskaper |
| Creatividad | Kreativitet |
| Responsabilidad | Ansvarlighet |`,
    },
    {
      id: 'spansk-2-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Språk og ferdigheter',
      problem: `Skriv "Idiomas" og "Habilidades"-delen av en CV for en norsk elev som snakker norsk, engelsk og spansk:

Hint: Norsk er morsmål, engelsk er avansert, spansk er mellomnivå.`,
      solution: `**IDIOMAS**
- Noruego: Lengua materna
- Inglés: Nivel avanzado (C1)
- Español: Nivel intermedio (B1)

**HABILIDADES**
- Trabajo en equipo
- Conocimientos de informática (Microsoft Office, programación básica)
- Comunicación
- Organización

**Merk:** Det er vanlig å oppgi CEFR-nivået (A1-C2) i parentes etter språknivået.`,
    },
    {
      id: 'spansk-2-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett ferdighetene til spansk:',
        subTasks: [
          { label: 'a', task: 'Teamarbeid', solution: 'Trabajo en equipo', answer: 'Trabajo en equipo' },
          { label: 'b', task: 'Lederskap', solution: 'Liderazgo', answer: 'Liderazgo' },
          { label: 'c', task: 'Problemløsning', solution: 'Resolución de problemas', answer: 'Resolución de problemas' },
          { label: 'd', task: 'Ansvarlighet', solution: 'Responsabilidad', answer: 'Responsabilidad' },
        ],
        solution: 'a) Trabajo en equipo, b) Liderazgo, c) Resolución de problemas, d) Responsabilidad',
        hints: ['equipo = lag/team', 'resolver = å løse → resolución = løsning'],
      },
    },
    {
      id: 'spansk-2-7-2-warning-1',
      type: 'warning',
      title: 'Kulturelle forskjeller i CV',
      content: `I Spania er det vanlig å inkludere **bilde**, **fødselsdato** og **sivilstatus** i CV-en. I Norge og mange andre land er dette uvanlig på grunn av anti-diskrimineringslovgivning. Vær bevisst på disse kulturelle forskjellene når du skriver CV til ulike land!`,
    },
    {
      id: 'spansk-2-7-2-text-3',
      type: 'text',
      content: `## Carta de presentación - Søknadsbrevet

I tillegg til CV-en skriver man ofte et **carta de presentación** (søknadsbrev). Her er strukturen:

**Formelle hilsener:**
- Estimado/a Sr./Sra. [etternavn]: (Ærede herr/fru...)
- Muy señor/a mío/a: (Kjære herr/fru)

**Innledning:**
- Me dirijo a usted para... (Jeg henvender meg til Dem for å...)
- Le escribo en relación con... (Jeg skriver i forbindelse med...)
- He visto su oferta de empleo en... (Jeg har sett deres stillingsannonse i...)

**Avslutning:**
- Quedo a su disposición para... (Jeg er til disposisjon for...)
- Atentamente (Med vennlig hilsen)
- Un cordial saludo (Vennlig hilsen)

**Eksempel på innledning:**
*Estimada Sra. Martínez: Le escribo en relación con el puesto de programador publicado en su página web. Soy licenciado en Ingeniería Informática y tengo dos años de experiencia en desarrollo web.*`,
    },
    {
      id: 'spansk-2-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Skrive søknadsbrev',
      problem: `Fullfør søknadsbrevet med riktige uttrykk:

___ Sra. López:

___ a usted para solicitar el puesto de profesor de noruego en su academia de idiomas. ___ su oferta de empleo en LinkedIn.

Soy noruego y hablo español con fluidez. Tengo experiencia como profesor particular.

___ a su disposición para una entrevista.

___,
Erik Hansen`,
      solution: `**Estimada** Sra. López:

**Me dirijo** a usted para solicitar el puesto de profesor de noruego en su academia de idiomas. **He visto** su oferta de empleo en LinkedIn.

Soy noruego y hablo español con fluidez. Tengo experiencia como profesor particular.

**Quedo** a su disposición para una entrevista.

**Atentamente**,
Erik Hansen

**Oversettelse:** Ærede fru López: Jeg henvender meg til Dem for å søke på stillingen som norsklærer ved deres språkakademi. Jeg har sett deres stillingsannonse på LinkedIn. Jeg er norsk og snakker spansk flytende. Jeg har erfaring som privatlærer. Jeg er til disposisjon for et intervju. Med vennlig hilsen, Erik Hansen`,
    },
    {
      id: 'spansk-2-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett de formelle uttrykkene til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg henvender meg til Dem for å...', solution: 'Me dirijo a usted para...', answer: 'Me dirijo a usted para...' },
          { label: 'b', task: 'Jeg har sett deres stillingsannonse.', solution: 'He visto su oferta de empleo.', answer: 'He visto su oferta de empleo.' },
          { label: 'c', task: 'Jeg er til disposisjon for et intervju.', solution: 'Quedo a su disposición para una entrevista.', answer: 'Quedo a su disposición para una entrevista.' },
          { label: 'd', task: 'Med vennlig hilsen', solution: 'Atentamente', answer: 'Atentamente' },
        ],
        solution: 'a) Me dirijo a usted para..., b) He visto su oferta de empleo., c) Quedo a su disposición para una entrevista., d) Atentamente',
        hints: ['dirigirse = å henvende seg', 'oferta de empleo = stillingsannonse', 'disposición = disposisjon'],
      },
    },
    {
      id: 'spansk-2-7-2-note-1',
      type: 'note',
      title: 'Oppsummering: CV og søknadsbrev',
      content: `**Det viktigste fra dette kapittelet:**

1. **CV-struktur:** Datos personales, Formación académica, Experiencia laboral, Idiomas, Habilidades
2. **Språknivåer:** Nivel básico (A1-A2), intermedio (B1-B2), avanzado (C1-C2)
3. **Ferdigheter:** trabajo en equipo, liderazgo, comunicación, resolución de problemas
4. **Søknadsbrev:** Estimado/a + formell hilsen, innledning, avslutning med "Atentamente"
5. **Formelt register:** Bruk "usted" (ikke "tú") i formelle brev`,
    },
    {
      id: 'spansk-2-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv begynnelsen av et søknadsbrev på spansk. Du søker på en sommerjobb i en spansk restaurant. Bruk formelt språk.',
        subTasks: [
          { label: 'a', task: 'Skriv den formelle hilsenen (til Sr. Rodríguez)', solution: 'Estimado Sr. Rodríguez:', answer: 'Estimado Sr. Rodríguez:' },
          { label: 'b', task: 'Skriv innledningen (henvende deg og fortell hvilken stilling)', solution: 'Me dirijo a usted para solicitar el puesto de camarero/a en su restaurante.', answer: 'Me dirijo a usted para solicitar el puesto de camarero/a en su restaurante.' },
          { label: 'c', task: 'Beskriv en relevant ferdighet eller erfaring', solution: 'Tengo experiencia como camarero y hablo noruego, inglés y español.', answer: 'Tengo experiencia como camarero y hablo noruego, inglés y español.' },
          { label: 'd', task: 'Skriv avslutningen', solution: 'Quedo a su disposición para una entrevista. Atentamente, [Navn]', answer: 'Quedo a su disposición para una entrevista. Atentamente,' },
        ],
        solution: 'Estimado Sr. Rodríguez: Me dirijo a usted para solicitar el puesto de camarero/a en su restaurante. He visto su oferta de empleo en Internet. Tengo experiencia como camarero y hablo noruego, inglés y español. Quedo a su disposición para una entrevista. Atentamente, [Navn]',
        hints: ['Husk kolon etter hilsenen', 'camarero/a = servitør', 'Bruk formelt "usted"-register'],
      },
    },
  ],
  exercises: [],
};
