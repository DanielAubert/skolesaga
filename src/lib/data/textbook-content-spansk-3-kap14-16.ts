/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 3 - Kapittel 14-16 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 14: CIENCIA Y TECNOLOGÍA (14.1-14.4)
 * - Kapittel 15: TRADUCCIÓN Y MEDIACIÓN (15.1-15.4)
 * - Kapittel 16: ESPAÑOL ACADÉMICO (16.1-16.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 14: CIENCIA Y TECNOLOGÍA
// ============================================================================

// 14.1 El español científico
export const CHAPTER_SPANSK_3_14_1: TextbookChapter = {
  id: 'spansk-3-14-1',
  courseId: 'spansk-3',
  chapterNumber: '14.1',
  title: 'El español científico',
  subtitle: 'Vitenskapelig spansk og fagterminologi',
  description: 'Lær å lese og forstå vitenskapelige tekster på spansk, og utvid ordforrådet med fagterminologi fra ulike vitenskapelige felt.',
  estimatedMinutes: 45,
  competenceGoals: ['lese og forstå vitenskapelige tekster på spansk', 'bruke fagterminologi fra naturvitenskap og teknologi'],
  content: [
    { id: 'spansk-3-14-1-intro', type: 'text', content: `## El español científico

Spansk er et av verdens mest brukte språk i vitenskapelig kommunikasjon. Forskningsartikler, konferanser og akademiske tidsskrifter publiseres i økende grad på spansk. Å kunne lese og forstå vitenskapelige tekster på spansk åpner dører til et enormt kunnskapsunivers fra Latin-Amerika og Spania.` },
    { id: 'spansk-3-14-1-def-1', type: 'definition', title: 'Vitenskapelig terminologi (terminología científica)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la investigación | forskning |
| el estudio | studien |
| la hipótesis | hypotesen |
| el experimento | eksperimentet |
| los resultados | resultatene |
| la conclusión | konklusjonen |
| el método científico | den vitenskapelige metoden |
| el/la investigador/a | forskeren |
| el descubrimiento | oppdagelsen |
| el avance | fremskrittet |
| la revista científica | det vitenskapelige tidsskriftet |
| la muestra | utvalget / prøven |` },
    { id: 'spansk-3-14-1-text-1', type: 'text', content: `## Strukturen i en vitenskapelig tekst

Vitenskapelige artikler på spansk følger en internasjonal standard kalt **IMRAD**:

- **Introducción:** Bakgrunn, problemstilling og hypotese
- **Método:** Hvordan forskningen ble gjennomført
- **Resultados:** Funn og data
- **Discusión:** Tolkning og sammenligning med tidligere forskning
- **Conclusión:** Oppsummering og videre forskning

Typiske fraser i vitenskapelige tekster:
- *El objetivo de este estudio es...* (Målet med denne studien er...)
- *Los resultados muestran que...* (Resultatene viser at...)
- *Se puede concluir que...* (Man kan konkludere med at...)
- *Según investigaciones previas...* (Ifølge tidligere forskning...)` },
    { id: 'spansk-3-14-1-text-2', type: 'text', content: `## Vitenskapelig spansk i praksis

Spansk brukes aktivt i forskning innen mange felt:

**Medisin og helse:** Spania og Latin-Amerika bidrar betydelig til medisinsk forskning. Tidsskrifter som *Revista Española de Cardiología* og *Salud Pública de México* publiserer viktig forskning.

**Miljø og klima:** Forskning på regnskog, biologisk mangfold og klimaendringer i Latin-Amerika er uvurderlig for global vitenskap.

**Samfunnsvitenskap:** Spanskspråklige forskere har bidratt sterkt til sosiologi, økonomi og utdanningsforskning.

For å lese vitenskapelige tekster effektivt bør du:
1. Skumme sammendraget (*el resumen*) først
2. Identifisere nøkkelbegreper
3. Lese konklusjonen før hele teksten
4. Bruke konteksten til å forstå ukjente ord` },
    { id: 'spansk-3-14-1-example-1', type: 'example', title: 'Eksempel: Lese et vitenskapelig sammendrag', problem: `Les følgende sammendrag og identifiser hypotese, metode og konklusjon:\n\n*«El objetivo de este estudio fue analizar el efecto del cambio climático en la biodiversidad de la Amazonía. Se realizaron observaciones de campo durante 12 meses en tres regiones diferentes. Los resultados muestran una reducción del 15% en la diversidad de especies. Se concluye que el cambio climático tiene un impacto significativo en los ecosistemas tropicales.»*`, solution: `**Hypotese/mål:** Analysere effekten av klimaendringer på biologisk mangfold i Amazonas.\n**Metode:** Feltobservasjoner i 12 måneder i tre ulike regioner.\n**Konklusjon:** Klimaendringer har en betydelig innvirkning på tropiske økosystemer (15 % reduksjon i artsmangfold).` },
    { id: 'spansk-3-14-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-14-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match vitenskapelige begrep med norsk oversettelse:', subTasks: [
        { label: 'a', task: 'la hipótesis', solution: 'hypotesen', answer: 'hypotesen' },
        { label: 'b', task: 'los resultados', solution: 'resultatene', answer: 'resultatene' },
        { label: 'c', task: 'el descubrimiento', solution: 'oppdagelsen', answer: 'oppdagelsen' },
        { label: 'd', task: 'la revista científica', solution: 'det vitenskapelige tidsskriftet', answer: 'det vitenskapelige tidsskriftet' },
      ], solution: 'a) hypotesen, b) resultatene, c) oppdagelsen, d) det vitenskapelige tidsskriftet', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-14-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Hva betyr disse vitenskapelige frasene? Oversett til norsk:', subTasks: [
        { label: 'a', task: 'El objetivo de este estudio es...', solution: 'Målet med denne studien er...', answer: 'Målet med denne studien er...' },
        { label: 'b', task: 'Los resultados muestran que...', solution: 'Resultatene viser at...', answer: 'Resultatene viser at...' },
        { label: 'c', task: 'Se puede concluir que...', solution: 'Man kan konkludere med at...', answer: 'Man kan konkludere med at...' },
        { label: 'd', task: 'Según investigaciones previas...', solution: 'Ifølge tidligere forskning...', answer: 'Ifølge tidligere forskning...' },
      ], solution: 'a) Målet med denne studien er..., b) Resultatene viser at..., c) Man kan konkludere med at..., d) Ifølge tidligere forskning...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-14-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om vitenskapelig spansk:', subTasks: [
        { label: 'a', task: 'Hva står IMRAD for, og hva betyr hver del?', solution: 'Introducción (bakgrunn og hypotese), Método (fremgangsmåte), Resultados (funn), Discusión (tolkning og sammenligning).', answer: 'Introducción (bakgrunn og hypotese), Método (fremgangsmåte), Resultados (funn), Discusión (tolkning og sammenligning).' },
        { label: 'b', task: 'Hvorfor er det nyttig å lese sammendraget (el resumen) først?', solution: 'Fordi sammendraget gir en oversikt over hele artikkelen, slik at man raskt kan vurdere om teksten er relevant.', answer: 'Fordi sammendraget gir en oversikt over hele artikkelen, slik at man raskt kan vurdere om teksten er relevant.' },
        { label: 'c', task: 'Nevn to vitenskapelige felt der spanskspråklig forskning er viktig.', solution: 'Medisin/helse og miljø/klima. Forskning på tropisk biodiversitet og folkehelse i Latin-Amerika er globalt viktig.', answer: 'Medisin/helse og miljø/klima. Forskning på tropisk biodiversitet og folkehelse i Latin-Amerika er globalt viktig.' },
        { label: 'd', task: 'Hva er forskjellen mellom «resultados» og «conclusión» i en artikkel?', solution: 'Resultados presenterer de faktiske funnene/dataene, mens conclusión tolker hva funnene betyr og trekker overordnede slutninger.', answer: 'Resultados presenterer de faktiske funnene/dataene, mens conclusión tolker hva funnene betyr og trekker overordnede slutninger.' },
      ], solution: 'a) Introducción (bakgrunn og hypotese), Método (fremgangsmåte), Resultados (funn), Discusión (tolkning og sammenligning)., b) Fordi sammendraget gir en oversikt over hele artikkelen, slik at man raskt kan vurdere om teksten er relevant., c) Medisin/helse og miljø/klima. Forskning på tropisk biodiversitet og folkehelse i Latin-Amerika er globalt viktig., d) Resultados presenterer de faktiske funnene/dataene, mens conclusión tolker hva funnene betyr og trekker overordnede slutninger.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-14-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv vitenskapelige tekster på spansk:', subTasks: [
        { label: 'a', task: 'Skriv et kort sammendrag (resumen) på spansk om et selvvalgt tema (3-4 setninger).', solution: 'El objetivo de este estudio fue investigar los hábitos de lectura de los jóvenes noruegos. Se realizó una encuesta a 200 estudiantes de secundaria. Los resultados muestran que el 60% prefiere leer en formato digital. Se concluye que las bibliotecas deben adaptarse a las nuevas preferencias de los lectores jóvenes.', answer: 'El objetivo de este estudio fue investigar los hábitos de lectura de los jóvenes noruegos. Se realizó una encuesta a 200 estudiantes de secundaria. Los resultados muestran que el 60% prefiere leer en formato digital. Se concluye que las bibliotecas deben adaptarse a las nuevas preferencias de los lectores jóvenes.' },
        { label: 'b', task: 'Formuler en hypotese på spansk om et miljøproblem.', solution: 'Nuestra hipótesis es que la contaminación del agua en las zonas urbanas de Chile ha aumentado un 20% en los últimos diez años debido a la actividad industrial.', answer: 'Nuestra hipótesis es que la contaminación del agua en las zonas urbanas de Chile ha aumentado un 20% en los últimos diez años debido a la actividad industrial.' },
        { label: 'c', task: 'Skriv en kort metodebeskrivelse (método) for et tenkt forskningsprosjekt.', solution: 'Para este estudio, se seleccionaron 100 participantes de diferentes ciudades españolas. Se les aplicó un cuestionario sobre sus hábitos alimenticios y se analizaron los datos mediante estadísticas descriptivas.', answer: 'Para este estudio, se seleccionaron 100 participantes de diferentes ciudades españolas. Se les aplicó un cuestionario sobre sus hábitos alimenticios y se analizaron los datos mediante estadísticas descriptivas.' },
        { label: 'd', task: 'Skriv en konklusjon (conclusión) basert på fiktive resultater om klimaendringer.', solution: 'Los resultados de esta investigación confirman que el aumento de las temperaturas está afectando gravemente a los glaciares andinos. Se recomienda implementar políticas de reducción de emisiones a nivel regional para frenar este proceso.', answer: 'Los resultados de esta investigación confirman que el aumento de las temperaturas está afectando gravemente a los glaciares andinos. Se recomienda implementar políticas de reducción de emisiones a nivel regional para frenar este proceso.' },
      ], solution: 'a) El objetivo de este estudio fue investigar los hábitos de lectura de los jóvenes noruegos. Se realizó una encuesta a 200 estudiantes de secundaria. Los resultados muestran que el 60% prefiere leer en formato digital. Se concluye que las bibliotecas deben adaptarse a las nuevas preferencias de los lectores jóvenes., b) Nuestra hipótesis es que la contaminación del agua en las zonas urbanas de Chile ha aumentado un 20% en los últimos diez años debido a la actividad industrial., c) Para este estudio, se seleccionaron 100 participantes de diferentes ciudades españolas. Se les aplicó un cuestionario sobre sus hábitos alimenticios y se analizaron los datos mediante estadísticas descriptivas., d) Los resultados de esta investigación confirman que el aumento de las temperaturas está afectando gravemente a los glaciares andinos. Se recomienda implementar políticas de reducción de emisiones a nivel regional para frenar este proceso.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-1-tip-1', type: 'tip', content: `**Husk:** Vitenskapelig spansk bruker ofte passiv form (*se realizó*, *se concluyó*) og upersonlige konstruksjoner. Øv på å gjenkjenne disse strukturene for å forstå akademiske tekster bedre.` },
    { id: 'spansk-3-14-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: El español científico**

- **IMRAD-struktur:** Introducción, Método, Resultados, Discusión
- **Nøkkelord:** investigación, hipótesis, resultados, conclusión
- **Lesteknikk:** Les resumen først, identifiser nøkkelbegreper
- **Vitenskapelig spansk:** Passiv form og upersonlige konstruksjoner
- **Relevans:** Spansk forskning er viktig globalt, særlig innen medisin og miljø` },
  ],
  exercises: [],
};

// 14.2 Innovación tecnológica
export const CHAPTER_SPANSK_3_14_2: TextbookChapter = {
  id: 'spansk-3-14-2',
  courseId: 'spansk-3',
  chapterNumber: '14.2',
  title: 'Innovación tecnológica',
  subtitle: 'Teknologisk innovasjon i den spansktalende verden',
  description: 'Utforsk teknologisk innovasjon, startups og digitalisering i Spania og Latin-Amerika, og lær relevant vokabular.',
  estimatedMinutes: 45,
  competenceGoals: ['diskutere teknologisk utvikling i den spansktalende verden', 'bruke vokabular knyttet til innovasjon og digitalisering'],
  content: [
    { id: 'spansk-3-14-2-intro', type: 'text', content: `## Innovación tecnológica

Den spansktalende verden er i rask teknologisk utvikling. Fra fintech-startups i Mexico City til kunstig intelligens-laboratorier i Barcelona, er innovasjon en drivkraft for økonomisk vekst og samfunnsendring. I dette kapittelet utforsker vi det teknologiske landskapet i Spania og Latin-Amerika.` },
    { id: 'spansk-3-14-2-def-1', type: 'definition', title: 'Teknologivokabular (vocabulario tecnológico)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la innovación | innovasjon |
| la inteligencia artificial (IA) | kunstig intelligens (KI) |
| la empresa emergente / startup | oppstartsbedrift |
| el emprendimiento | entreprenørskap |
| la digitalización | digitalisering |
| la aplicación (app) | applikasjon |
| el comercio electrónico | netthandel |
| la ciberseguridad | cybersikkerhet |
| los datos masivos (big data) | stordata |
| la computación en la nube | skytjenester |
| el/la emprendedor/a | gründer |
| la brecha digital | det digitale skillet |` },
    { id: 'spansk-3-14-2-text-1', type: 'text', content: `## Startups og innovasjon i den spansktalende verden

**Spania:**
- Barcelona og Madrid er ledende teknologihuber i Europa
- Mobile World Congress i Barcelona samler teknologiverden årlig
- Sterke sektorer: fintech, helseteknologi, reiseliv-teknologi
- Selskaper som Cabify, Glovo og Wallapop har internasjonal suksess

**Latin-Amerika:**
- Mexico: Fintech-boom med selskaper som Clip og Bitso
- Colombia: Rappi har revolusjonert leveringstjenester
- Argentina: MercadoLibre er regionens største netthandelsplattform
- Chile: Start-Up Chile er et statlig program som tiltrekker gründere globalt

Felles utfordringer:
- *La brecha digital* (det digitale skillet) mellom by og bygd
- Tilgang til finansiering for nye bedrifter
- Utdanning og kompetansebygging i teknologi` },
    { id: 'spansk-3-14-2-text-2', type: 'text', content: `## Digitalisering og samfunnsendring

Teknologi endrer hverdagen i den spansktalende verden:

**Utdanning:** *La educación en línea* (nettbasert utdanning) har vokst enormt. Plattformer som Platzi (Colombia) tilbyr kurs på spansk innen teknologi og business.

**Helse:** *La telemedicina* (telemedsin) gir helsetilgang til avsidesliggende områder i Latin-Amerika.

**Økonomi:** *Los pagos digitales* (digitale betalinger) erstatter kontanter i mange land. I Mexico bruker millioner nå digital bankvirksomhet.

**Språk:** Teknologien påvirker også språket. Nye ord og uttrykk oppstår:
- *Googlear* (å google)
- *Tuitear* (å tvitre)
- *Influencer* (brukes direkte fra engelsk)
- *Hackear* (å hacke)` },
    { id: 'spansk-3-14-2-example-1', type: 'example', title: 'Eksempel: Beskrive en startup', problem: `Beskriv en tenkt startup på spansk ved hjelp av teknologivokabular.`, solution: `*Nuestra empresa emergente se llama «EcoApp». Es una aplicación de comercio electrónico que conecta a productores locales con consumidores. Utilizamos inteligencia artificial para recomendar productos sostenibles. Nuestro objetivo es reducir la brecha digital en zonas rurales de Colombia.*` },
    { id: 'spansk-3-14-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-14-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match teknologibegrep med norsk oversettelse:', subTasks: [
        { label: 'a', task: 'la inteligencia artificial', solution: 'kunstig intelligens', answer: 'kunstig intelligens' },
        { label: 'b', task: 'el comercio electrónico', solution: 'netthandel', answer: 'netthandel' },
        { label: 'c', task: 'la brecha digital', solution: 'det digitale skillet', answer: 'det digitale skillet' },
        { label: 'd', task: 'el/la emprendedor/a', solution: 'gründer', answer: 'gründer' },
      ], solution: 'a) kunstig intelligens, b) netthandel, c) det digitale skillet, d) gründer', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-14-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Koble selskapet til riktig land:', subTasks: [
        { label: 'a', task: 'MercadoLibre (netthandelsplattform)', solution: 'Argentina', answer: 'Argentina' },
        { label: 'b', task: 'Rappi (leveringstjeneste)', solution: 'Colombia', answer: 'Colombia' },
        { label: 'c', task: 'Cabify (transport-app)', solution: 'Spania', answer: 'Spania' },
        { label: 'd', task: 'Bitso (kryptovaluta-børs)', solution: 'Mexico', answer: 'Mexico' },
      ], solution: 'a) Argentina, b) Colombia, c) Spania, d) Mexico', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-14-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om teknologisk innovasjon:', subTasks: [
        { label: 'a', task: 'Hva menes med «la brecha digital», og hvorfor er det et problem?', solution: 'La brecha digital er forskjellen i tilgang til teknologi mellom ulike grupper. Det er et problem fordi det skaper ulikhet i utdanning, arbeidsmuligheter og tilgang til tjenester.', answer: 'La brecha digital er forskjellen i tilgang til teknologi mellom ulike grupper. Det er et problem fordi det skaper ulikhet i utdanning, arbeidsmuligheter og tilgang til tjenester.' },
        { label: 'b', task: 'Hvordan har digitaliseringen endret hverdagen i Latin-Amerika?', solution: 'Digitaliseringen har gitt tilgang til nettbasert utdanning, telemedisin, digitale betalinger og e-handel, spesielt viktig i avsidesliggende områder.', answer: 'Digitaliseringen har gitt tilgang til nettbasert utdanning, telemedisin, digitale betalinger og e-handel, spesielt viktig i avsidesliggende områder.' },
        { label: 'c', task: 'Nevn to eksempler på hvordan spansk har tatt opp teknologiord.', solution: 'Googlear (å google) og tuitear (å tvitre) er eksempler på engelske teknologiord som har blitt tilpasset spansk grammatikk.', answer: 'Googlear (å google) og tuitear (å tvitre) er eksempler på engelske teknologiord som har blitt tilpasset spansk grammatikk.' },
        { label: 'd', task: 'Hva er Start-Up Chile, og hvorfor er det viktig?', solution: 'Start-Up Chile er et statlig program som gir finansiering og støtte til gründere fra hele verden for å etablere seg i Chile. Det har gjort Chile til et innovasjonssenter i Latin-Amerika.', answer: 'Start-Up Chile er et statlig program som gir finansiering og støtte til gründere fra hele verden for å etablere seg i Chile. Det har gjort Chile til et innovasjonssenter i Latin-Amerika.' },
      ], solution: 'a) La brecha digital er forskjellen i tilgang til teknologi mellom ulike grupper. Det er et problem fordi det skaper ulikhet i utdanning, arbeidsmuligheter og tilgang til tjenester., b) Digitaliseringen har gitt tilgang til nettbasert utdanning, telemedisin, digitale betalinger og e-handel, spesielt viktig i avsidesliggende områder., c) Googlear (å google) og tuitear (å tvitre) er eksempler på engelske teknologiord som har blitt tilpasset spansk grammatikk., d) Start-Up Chile er et statlig program som gir finansiering og støtte til gründere fra hele verden for å etablere seg i Chile. Det har gjort Chile til et innovasjonssenter i Latin-Amerika.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-14-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv om teknologi på spansk:', subTasks: [
        { label: 'a', task: 'Beskriv en app-idé på spansk (3-4 setninger). Bruk teknologivokabularet.', solution: 'Mi idea es una aplicación de inteligencia artificial que ayuda a los estudiantes a aprender idiomas. La app utiliza datos masivos para personalizar las lecciones según el nivel del usuario. Está basada en la computación en la nube para funcionar en cualquier dispositivo.', answer: 'Mi idea es una aplicación de inteligencia artificial que ayuda a los estudiantes a aprender idiomas. La app utiliza datos masivos para personalizar las lecciones según el nivel del usuario. Está basada en la computación en la nube para funcionar en cualquier dispositivo.' },
        { label: 'b', task: 'Diskuter fordeler og ulemper med digitaliseringen (3-4 setninger på spansk).', solution: 'La digitalización ofrece muchas ventajas: acceso a la educación, telemedicina y comercio electrónico. Sin embargo, también presenta desafíos como la brecha digital y la ciberseguridad. Es importante que los gobiernos inviertan en infraestructura tecnológica para que todos puedan beneficiarse.', answer: 'La digitalización ofrece muchas ventajas: acceso a la educación, telemedicina y comercio electrónico. Sin embargo, también presenta desafíos como la brecha digital y la ciberseguridad. Es importante que los gobiernos inviertan en infraestructura tecnológica para que todos puedan beneficiarse.' },
        { label: 'c', task: 'Sammenlign teknologisk utvikling i Spania og et latinamerikansk land (på spansk).', solution: 'España tiene una industria tecnológica consolidada con ciudades como Barcelona como centros de innovación. México, por su parte, está experimentando un boom en fintech y comercio electrónico. Ambos países enfrentan el reto de reducir la brecha digital entre zonas urbanas y rurales.', answer: 'España tiene una industria tecnológica consolidada con ciudades como Barcelona como centros de innovación. México, por su parte, está experimentando un boom en fintech y comercio electrónico. Ambos países enfrentan el reto de reducir la brecha digital entre zonas urbanas y rurales.' },
        { label: 'd', task: 'Skriv et kort innlegg om hvordan teknologi kan løse et samfunnsproblem i Latin-Amerika.', solution: 'La telemedicina puede transformar la salud en zonas rurales de Latinoamérica. Mediante aplicaciones y videollamadas, los pacientes pueden consultar a médicos especializados sin necesidad de viajar largas distancias. Esta innovación tecnológica es esencial para reducir la desigualdad en el acceso a la salud.', answer: 'La telemedicina puede transformar la salud en zonas rurales de Latinoamérica. Mediante aplicaciones y videollamadas, los pacientes pueden consultar a médicos especializados sin necesidad de viajar largas distancias. Esta innovación tecnológica es esencial para reducir la desigualdad en el acceso a la salud.' },
      ], solution: 'a) Mi idea es una aplicación de inteligencia artificial que ayuda a los estudiantes a aprender idiomas. La app utiliza datos masivos para personalizar las lecciones según el nivel del usuario. Está basada en la computación en la nube para funcionar en cualquier dispositivo., b) La digitalización ofrece muchas ventajas: acceso a la educación, telemedicina y comercio electrónico. Sin embargo, también presenta desafíos como la brecha digital y la ciberseguridad. Es importante que los gobiernos inviertan en infraestructura tecnológica para que todos puedan beneficiarse., c) España tiene una industria tecnológica consolidada con ciudades como Barcelona como centros de innovación. México, por su parte, está experimentando un boom en fintech y comercio electrónico. Ambos países enfrentan el reto de reducir la brecha digital entre zonas urbanas y rurales., d) La telemedicina puede transformar la salud en zonas rurales de Latinoamérica. Mediante aplicaciones y videollamadas, los pacientes pueden consultar a médicos especializados sin necesidad de viajar largas distancias. Esta innovación tecnológica es esencial para reducir la desigualdad en el acceso a la salud.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-2-tip-1', type: 'tip', content: `**Husk:** Mange teknologiord er like på spansk og norsk/engelsk, men de tilpasses spansk grammatikk. Verbet *googlear* bøyes for eksempel som et vanlig -ar-verb: *googleo, googleas, googlea...*` },
    { id: 'spansk-3-14-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Innovación tecnológica**

- **Spania:** Barcelona og Madrid som teknologihuber, Mobile World Congress
- **Latin-Amerika:** Fintech-boom, MercadoLibre, Rappi, Start-Up Chile
- **Digitalisering:** Nettutdanning, telemedisin, digitale betalinger
- **Utfordringer:** Brecha digital, finansiering, kompetansebygging
- **Språkpåvirkning:** Teknologiord tilpasses spansk (googlear, tuitear)` },
  ],
  exercises: [],
};

// 14.3 Bioética y dilemas modernos
export const CHAPTER_SPANSK_3_14_3: TextbookChapter = {
  id: 'spansk-3-14-3',
  courseId: 'spansk-3',
  chapterNumber: '14.3',
  title: 'Bioética y dilemas modernos',
  subtitle: 'Bioetikk og moderne dilemmaer',
  description: 'Diskuter etiske dilemmaer knyttet til kloning, kunstig intelligens og genredigering, og lær å argumentere på spansk om komplekse temaer.',
  estimatedMinutes: 45,
  competenceGoals: ['diskutere bioetiske dilemmaer på spansk', 'argumentere for og mot teknologiske nyvinninger'],
  content: [
    { id: 'spansk-3-14-3-intro', type: 'text', content: `## Bioética y dilemas modernos

Teknologisk utvikling bringer med seg vanskelige etiske spørsmål. Bør vi redigere menneskelige gener? Kan kunstig intelligens erstatte menneskelig arbeid? Hvem eier dataene våre? Disse spørsmålene diskuteres aktivt i den spansktalende verden, og å kunne delta i slike debatter på spansk er en viktig del av avansert språkkompetanse.` },
    { id: 'spansk-3-14-3-def-1', type: 'definition', title: 'Bioetikk-vokabular (vocabulario de bioética)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la bioética | bioetikk |
| la clonación | kloning |
| la edición genética | genredigering |
| la ética | etikk |
| el dilema moral | moralsk dilemma |
| la privacidad | personvern |
| el consentimiento | samtykke |
| la manipulación genética | genmanipulering |
| los derechos humanos | menneskerettigheter |
| la responsabilidad | ansvar |
| el debate ético | etisk debatt |
| la dignidad humana | menneskeverd |` },
    { id: 'spansk-3-14-3-text-1', type: 'text', content: `## Sentrale bioetiske temaer

**Genredigering (CRISPR):**
Teknologien CRISPR gjør det mulig å redigere DNA. Dette kan kurere genetiske sykdommer, men reiser spørsmål:
- *¿Es ético modificar los genes de un embrión?* (Er det etisk å endre genene til et embryo?)
- *¿Quién decide qué es una «enfermedad» y qué es una «variación»?* (Hvem bestemmer hva som er en sykdom og hva som er en variasjon?)

**Kunstig intelligens:**
KI brukes i stadig flere områder, fra medisin til rettsvesen:
- *¿Puede una máquina tomar decisiones morales?* (Kan en maskin ta moralske beslutninger?)
- *¿Quién es responsable cuando un algoritmo comete un error?* (Hvem er ansvarlig når en algoritme gjør en feil?)

**Personvern og data:**
- *¿Tenemos derecho a que nos olviden en internet?* (Har vi rett til å bli glemt på internett?)
- *¿Hasta qué punto pueden las empresas usar nuestros datos?* (I hvilken grad kan bedrifter bruke dataene våre?)` },
    { id: 'spansk-3-14-3-text-2', type: 'text', content: `## Å argumentere om etiske spørsmål

For å delta i etiske debatter på spansk trenger du argumentasjonsfraser:

**For å uttrykke mening:**
- *Desde mi punto de vista...* (Fra mitt synspunkt...)
- *Considero que...* (Jeg mener at...)
- *Es innegable que...* (Det er ubestridelig at...)

**For å presentere motargumenter:**
- *Sin embargo, hay quienes opinan que...* (Likevel er det de som mener at...)
- *Por otro lado...* (På den andre siden...)
- *No obstante, debemos considerar que...* (Ikke desto mindre bør vi vurdere at...)

**For å konkludere:**
- *En conclusión, creo que...* (Avslutningsvis mener jeg at...)
- *Teniendo todo en cuenta...* (Alt tatt i betraktning...)
- *Es necesario encontrar un equilibrio entre...* (Det er nødvendig å finne en balanse mellom...)` },
    { id: 'spansk-3-14-3-example-1', type: 'example', title: 'Eksempel: Etisk argumentasjon', problem: `Skriv et kort argument for og mot genredigering på spansk.`, solution: `**For:** *La edición genética puede eliminar enfermedades hereditarias graves y salvar millones de vidas. Desde un punto de vista médico, es una herramienta revolucionaria.*\n\n**Mot:** *Sin embargo, manipular los genes humanos plantea serios dilemas éticos. ¿Quién decide qué genes son «mejores»? Existe el riesgo de crear desigualdades genéticas entre ricos y pobres.*` },
    { id: 'spansk-3-14-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-14-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match bioetikk-begrep med norsk oversettelse:', subTasks: [
        { label: 'a', task: 'la clonación', solution: 'kloning', answer: 'kloning' },
        { label: 'b', task: 'la privacidad', solution: 'personvern', answer: 'personvern' },
        { label: 'c', task: 'el consentimiento', solution: 'samtykke', answer: 'samtykke' },
        { label: 'd', task: 'la dignidad humana', solution: 'menneskeverd', answer: 'menneskeverd' },
      ], solution: 'a) kloning, b) personvern, c) samtykke, d) menneskeverd', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-14-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Oversett argumentasjonsfrasene til norsk:', subTasks: [
        { label: 'a', task: 'Desde mi punto de vista...', solution: 'Fra mitt synspunkt...', answer: 'Fra mitt synspunkt...' },
        { label: 'b', task: 'Sin embargo, hay quienes opinan que...', solution: 'Likevel er det de som mener at...', answer: 'Likevel er det de som mener at...' },
        { label: 'c', task: 'No obstante, debemos considerar que...', solution: 'Ikke desto mindre bør vi vurdere at...', answer: 'Ikke desto mindre bør vi vurdere at...' },
        { label: 'd', task: 'Es necesario encontrar un equilibrio entre...', solution: 'Det er nødvendig å finne en balanse mellom...', answer: 'Det er nødvendig å finne en balanse mellom...' },
      ], solution: 'a) Fra mitt synspunkt..., b) Likevel er det de som mener at..., c) Ikke desto mindre bør vi vurdere at..., d) Det er nødvendig å finne en balanse mellom...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-14-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om bioetikk:', subTasks: [
        { label: 'a', task: 'Hva er CRISPR, og hvilke etiske spørsmål reiser det?', solution: 'CRISPR er en teknologi for genredigering. Det reiser spørsmål om hvem som bestemmer hvilke gener som skal endres, risiko for genetisk ulikhet, og grensene for menneskelig inngripen i naturen.', answer: 'CRISPR er en teknologi for genredigering. Det reiser spørsmål om hvem som bestemmer hvilke gener som skal endres, risiko for genetisk ulikhet, og grensene for menneskelig inngripen i naturen.' },
        { label: 'b', task: 'Kan en maskin ta moralske beslutninger? Begrunn svaret ditt.', solution: 'En maskin kan følge programmerte regler, men mangler empati og moralsk bevissthet. Moralske beslutninger krever kontekstforståelse og verdivurderinger som er unikt menneskelige.', answer: 'En maskin kan følge programmerte regler, men mangler empati og moralsk bevissthet. Moralske beslutninger krever kontekstforståelse og verdivurderinger som er unikt menneskelige.' },
        { label: 'c', task: 'Hva menes med «retten til å bli glemt» på internett?', solution: 'Det betyr at en person har rett til å kreve at personlig informasjon fjernes fra søkemotorer og nettsider, for å beskytte personvernet sitt.', answer: 'Det betyr at en person har rett til å kreve at personlig informasjon fjernes fra søkemotorer og nettsider, for å beskytte personvernet sitt.' },
        { label: 'd', task: 'Hvorfor er samtykke (consentimiento) viktig i bioetikk?', solution: 'Samtykke sikrer at individer frivillig og informert godtar deltakelse i forskning eller behandling. Uten samtykke krenkes personens autonomi og rettigheter.', answer: 'Samtykke sikrer at individer frivillig og informert godtar deltakelse i forskning eller behandling. Uten samtykke krenkes personens autonomi og rettigheter.' },
      ], solution: 'a) CRISPR er en teknologi for genredigering. Det reiser spørsmål om hvem som bestemmer hvilke gener som skal endres, risiko for genetisk ulikhet, og grensene for menneskelig inngripen i naturen., b) En maskin kan følge programmerte regler, men mangler empati og moralsk bevissthet. Moralske beslutninger krever kontekstforståelse og verdivurderinger som er unikt menneskelige., c) Det betyr at en person har rett til å kreve at personlig informasjon fjernes fra søkemotorer og nettsider, for å beskytte personvernet sitt., d) Samtykke sikrer at individer frivillig og informert godtar deltakelse i forskning eller behandling. Uten samtykke krenkes personens autonomi og rettigheter.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-14-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv argumenterende tekst på spansk:', subTasks: [
        { label: 'a', task: 'Skriv et argument FOR bruk av kunstig intelligens i helsevesenet (3-4 setninger).', solution: 'La inteligencia artificial puede revolucionar la medicina al diagnosticar enfermedades con mayor precisión que los médicos humanos. Los algoritmos pueden analizar miles de imágenes médicas en segundos, detectando patrones que el ojo humano no puede ver. Esto permitiría salvar vidas mediante diagnósticos más tempranos y tratamientos más efectivos.', answer: 'La inteligencia artificial puede revolucionar la medicina al diagnosticar enfermedades con mayor precisión que los médicos humanos. Los algoritmos pueden analizar miles de imágenes médicas en segundos, detectando patrones que el ojo humano no puede ver. Esto permitiría salvar vidas mediante diagnósticos más tempranos y tratamientos más efectivos.' },
        { label: 'b', task: 'Skriv et argument MOT ubegrenset genredigering (3-4 setninger).', solution: 'La edición genética sin límites podría crear una sociedad dividida entre quienes pueden permitirse «mejorar» sus genes y quienes no. Además, no conocemos las consecuencias a largo plazo de modificar el ADN humano. Es fundamental establecer regulaciones internacionales estrictas para proteger la dignidad humana.', answer: 'La edición genética sin límites podría crear una sociedad dividida entre quienes pueden permitirse «mejorar» sus genes y quienes no. Además, no conocemos las consecuencias a largo plazo de modificar el ADN humano. Es fundamental establecer regulaciones internacionales estrictas para proteger la dignidad humana.' },
        { label: 'c', task: 'Diskuter personvern i den digitale tidsalderen (3-4 setninger på spansk).', solution: 'En la era digital, nuestra privacidad está constantemente amenazada. Las empresas tecnológicas recopilan enormes cantidades de datos personales, muchas veces sin nuestro consentimiento explícito. Considero que es necesario crear leyes más estrictas que protejan los derechos digitales de los ciudadanos y garanticen la transparencia en el uso de datos.', answer: 'En la era digital, nuestra privacidad está constantemente amenazada. Las empresas tecnológicas recopilan enormes cantidades de datos personales, muchas veces sin nuestro consentimiento explícito. Considero que es necesario crear leyes más estrictas que protejan los derechos digitales de los ciudadanos y garanticen la transparencia en el uso de datos.' },
        { label: 'd', task: 'Skriv en balansert konklusjon om teknologi og etikk (3-4 setninger).', solution: 'En conclusión, la tecnología ofrece posibilidades extraordinarias para mejorar la vida humana, pero también plantea dilemas éticos que no podemos ignorar. Es necesario encontrar un equilibrio entre el progreso científico y la protección de los derechos fundamentales. Solo mediante un diálogo abierto y democrático podremos tomar decisiones responsables sobre el futuro de la humanidad.', answer: 'En conclusión, la tecnología ofrece posibilidades extraordinarias para mejorar la vida humana, pero también plantea dilemas éticos que no podemos ignorar. Es necesario encontrar un equilibrio entre el progreso científico y la protección de los derechos fundamentales. Solo mediante un diálogo abierto y democrático podremos tomar decisiones responsables sobre el futuro de la humanidad.' },
      ], solution: 'a) La inteligencia artificial puede revolucionar la medicina al diagnosticar enfermedades con mayor precisión que los médicos humanos. Los algoritmos pueden analizar miles de imágenes médicas en segundos, detectando patrones que el ojo humano no puede ver. Esto permitiría salvar vidas mediante diagnósticos más tempranos y tratamientos más efectivos., b) La edición genética sin límites podría crear una sociedad dividida entre quienes pueden permitirse «mejorar» sus genes y quienes no. Además, no conocemos las consecuencias a largo plazo de modificar el ADN humano. Es fundamental establecer regulaciones internacionales estrictas para proteger la dignidad humana., c) En la era digital, nuestra privacidad está constantemente amenazada. Las empresas tecnológicas recopilan enormes cantidades de datos personales, muchas veces sin nuestro consentimiento explícito. Considero que es necesario crear leyes más estrictas que protejan los derechos digitales de los ciudadanos y garanticen la transparencia en el uso de datos., d) En conclusión, la tecnología ofrece posibilidades extraordinarias para mejorar la vida humana, pero también plantea dilemas éticos que no podemos ignorar. Es necesario encontrar un equilibrio entre el progreso científico y la protección de los derechos fundamentales. Solo mediante un diálogo abierto y democrático podremos tomar decisiones responsables sobre el futuro de la humanidad.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-3-tip-1', type: 'tip', content: `**Husk:** I etiske debatter er det viktig å vise at du forstår begge sider. Bruk fraser som *por un lado... por otro lado...* (på den ene siden... på den andre siden...) for å vise nyansert tenkning.` },
    { id: 'spansk-3-14-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Bioética y dilemas modernos**

- **Genredigering:** CRISPR gir muligheter, men reiser etiske spørsmål
- **KI:** Kan forbedre livet, men kan maskiner ta moralske valg?
- **Personvern:** Retten til å bli glemt og databeskyttelse
- **Argumentasjon:** Bruk for/mot-struktur med bindeord
- **Balanse:** Teknologisk fremskritt må balanseres med etikk og menneskerettigheter` },
  ],
  exercises: [],
};

// 14.4 Presentaciones académicas
export const CHAPTER_SPANSK_3_14_4: TextbookChapter = {
  id: 'spansk-3-14-4',
  courseId: 'spansk-3',
  chapterNumber: '14.4',
  title: 'Presentaciones académicas',
  subtitle: 'Akademiske presentasjoner på spansk',
  description: 'Lær å holde akademiske presentasjoner på spansk med riktig struktur, overganger og formelt språk.',
  estimatedMinutes: 45,
  competenceGoals: ['strukturere en akademisk presentasjon på spansk', 'bruke formelle overgangsfraser og akademisk språk muntlig'],
  content: [
    { id: 'spansk-3-14-4-intro', type: 'text', content: `## Presentaciones académicas

Å holde en akademisk presentasjon på spansk krever både språklige ferdigheter og kunnskap om struktur og formelt register. Enten du presenterer et forskningsprosjekt, en litteraturanalyse eller et debattinnlegg, må du kunne kommunisere klart, presist og overbevisende.` },
    { id: 'spansk-3-14-4-def-1', type: 'definition', title: 'Presentasjonsvokabular (vocabulario de presentaciones)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la presentación | presentasjonen |
| la diapositiva | lysbildet |
| el esquema | disposisjonen |
| la introducción | innledningen |
| el desarrollo | hoveddelen |
| la conclusión | avslutningen |
| los puntos clave | hovedpunktene |
| el público / la audiencia | publikum |
| la transición | overgangen |
| el apoyo visual | visuell støtte |
| el turno de preguntas | spørsmålsrunden |
| el lenguaje formal | formelt språk |` },
    { id: 'spansk-3-14-4-text-1', type: 'text', content: `## Strukturen i en akademisk presentasjon

**1. Innledning (Introducción):**
- *Buenos días / Buenas tardes, mi presentación trata sobre...* (God morgen / God ettermiddag, presentasjonen min handler om...)
- *El objetivo de esta presentación es...* (Målet med denne presentasjonen er...)
- *Primero voy a hablar de..., luego...* (Først skal jeg snakke om..., deretter...)

**2. Hoveddel (Desarrollo):**
- Presenter 2-3 hovedpunkter med eksempler
- Bruk visuell støtte (diapositivas)
- Hold deg til temaet

**3. Avslutning (Conclusión):**
- *Para resumir / En resumen...* (For å oppsummere...)
- *En conclusión, podemos decir que...* (Avslutningsvis kan vi si at...)
- *¿Tienen alguna pregunta?* (Har dere noen spørsmål?)` },
    { id: 'spansk-3-14-4-text-2', type: 'text', content: `## Overganger og bindeord i presentasjoner

Gode overganger gjør presentasjonen lettere å følge:

**Å introdusere et nytt punkt:**
- *Pasemos ahora al siguiente punto...* (La oss gå videre til neste punkt...)
- *En cuanto a...* (Når det gjelder...)
- *Con respecto a...* (Med hensyn til...)

**Å gi eksempler:**
- *Por ejemplo...* (For eksempel...)
- *Un caso concreto es...* (Et konkret tilfelle er...)
- *Como podemos ver en esta imagen/gráfica...* (Som vi kan se i dette bildet/diagrammet...)

**Å understreke noe viktig:**
- *Es importante destacar que...* (Det er viktig å fremheve at...)
- *Cabe señalar que...* (Det bør påpekes at...)
- *Lo más relevante es...* (Det mest relevante er...)

**Å håndtere spørsmål:**
- *Es una buena pregunta...* (Det er et godt spørsmål...)
- *Permítame explicarlo de otra manera...* (Tillat meg å forklare det på en annen måte...)` },
    { id: 'spansk-3-14-4-example-1', type: 'example', title: 'Eksempel: Innledning til en presentasjon', problem: `Skriv en innledning til en presentasjon om klimaendringer i Latin-Amerika.`, solution: `*Buenos días a todos. Mi presentación trata sobre el impacto del cambio climático en Latinoamérica. El objetivo es analizar cómo afecta a la biodiversidad, la agricultura y las comunidades indígenas. Primero voy a hablar de la situación actual, luego presentaré algunos datos relevantes y finalmente propondré posibles soluciones.*` },
    { id: 'spansk-3-14-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-14-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match presentasjonsfrasene med deres funksjon:', subTasks: [
        { label: 'a', task: 'Mi presentación trata sobre...', solution: 'Introdusere temaet', answer: 'Introdusere temaet' },
        { label: 'b', task: 'Pasemos ahora al siguiente punto...', solution: 'Overgang til nytt punkt', answer: 'Overgang til nytt punkt' },
        { label: 'c', task: 'En conclusión, podemos decir que...', solution: 'Avslutte presentasjonen', answer: 'Avslutte presentasjonen' },
        { label: 'd', task: '¿Tienen alguna pregunta?', solution: 'Invitere til spørsmål', answer: 'Invitere til spørsmål' },
      ], solution: 'a) Introdusere temaet, b) Overgang til nytt punkt, c) Avslutte presentasjonen, d) Invitere til spørsmål', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-14-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig overgangsfrase:', subTasks: [
        { label: 'a', task: '___ el tema del medio ambiente... (Når det gjelder...)', solution: 'En cuanto a', answer: 'En cuanto a' },
        { label: 'b', task: '___ destacar que este problema es global. (Det er viktig å fremheve at...)', solution: 'Es importante', answer: 'Es importante' },
        { label: 'c', task: '___ esta imagen, podemos ver la evolución. (Som vi kan se i...)', solution: 'Como podemos ver en', answer: 'Como podemos ver en' },
        { label: 'd', task: '___, la educación es la clave. (For å oppsummere...)', solution: 'En resumen', answer: 'En resumen' },
      ], solution: 'a) En cuanto a, b) Es importante, c) Como podemos ver en, d) En resumen', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-14-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om akademiske presentasjoner:', subTasks: [
        { label: 'a', task: 'Hvilke tre hoveddeler har en akademisk presentasjon?', solution: 'Introducción (innledning), desarrollo (hoveddel) og conclusión (avslutning).', answer: 'Introducción (innledning), desarrollo (hoveddel) og conclusión (avslutning).' },
        { label: 'b', task: 'Hvorfor er overganger viktige i en presentasjon?', solution: 'Overganger gjør det lettere for publikum å følge strukturen og forstå sammenhengen mellom ulike punkter.', answer: 'Overganger gjør det lettere for publikum å følge strukturen og forstå sammenhengen mellom ulike punkter.' },
        { label: 'c', task: 'Hva bør man gjøre i innledningen av en presentasjon?', solution: 'Man bør presentere temaet, forklare målet med presentasjonen og gi en oversikt over strukturen.', answer: 'Man bør presentere temaet, forklare målet med presentasjonen og gi en oversikt over strukturen.' },
        { label: 'd', task: 'Hvordan kan man håndtere vanskelige spørsmål fra publikum?', solution: 'Man kan bruke fraser som «Es una buena pregunta» og «Permítame explicarlo de otra manera» for å vinne tid og gi et gjennomtenkt svar.', answer: 'Man kan bruke fraser som «Es una buena pregunta» og «Permítame explicarlo de otra manera» for å vinne tid og gi et gjennomtenkt svar.' },
      ], solution: 'a) Introducción (innledning), desarrollo (hoveddel) og conclusión (avslutning)., b) Overganger gjør det lettere for publikum å følge strukturen og forstå sammenhengen mellom ulike punkter., c) Man bør presentere temaet, forklare målet med presentasjonen og gi en oversikt over strukturen., d) Man kan bruke fraser som «Es una buena pregunta» og «Permítame explicarlo de otra manera» for å vinne tid og gi et gjennomtenkt svar.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-14-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv presentasjonsdeler på spansk:', subTasks: [
        { label: 'a', task: 'Skriv en innledning til en presentasjon om teknologisk innovasjon i Latin-Amerika.', solution: 'Buenos días. Hoy voy a hablar sobre la innovación tecnológica en Latinoamérica. El objetivo de mi presentación es mostrar cómo países como México, Colombia y Chile están liderando el emprendimiento digital. Primero analizaré el ecosistema de startups, luego presentaré casos de éxito y finalmente discutiré los desafíos pendientes.', answer: 'Buenos días. Hoy voy a hablar sobre la innovación tecnológica en Latinoamérica. El objetivo de mi presentación es mostrar cómo países como México, Colombia y Chile están liderando el emprendimiento digital. Primero analizaré el ecosistema de startups, luego presentaré casos de éxito y finalmente discutiré los desafíos pendientes.' },
        { label: 'b', task: 'Skriv en overgang mellom to temaer: fra økonomisk vekst til sosiale utfordringer.', solution: 'Hasta ahora hemos analizado el crecimiento económico de la región. Sin embargo, es importante destacar que este desarrollo no ha beneficiado a todos por igual. Pasemos ahora a examinar los desafíos sociales que persisten.', answer: 'Hasta ahora hemos analizado el crecimiento económico de la región. Sin embargo, es importante destacar que este desarrollo no ha beneficiado a todos por igual. Pasemos ahora a examinar los desafíos sociales que persisten.' },
        { label: 'c', task: 'Skriv en avslutning med oppsummering og oppfordring til handling.', solution: 'En conclusión, hemos visto que la innovación tecnológica ofrece grandes oportunidades para Latinoamérica. Sin embargo, es fundamental invertir en educación y reducir la brecha digital. Los invito a reflexionar sobre cómo cada uno de nosotros puede contribuir a un futuro más equitativo. ¿Tienen alguna pregunta?', answer: 'En conclusión, hemos visto que la innovación tecnológica ofrece grandes oportunidades para Latinoamérica. Sin embargo, es fundamental invertir en educación y reducir la brecha digital. Los invito a reflexionar sobre cómo cada uno de nosotros puede contribuir a un futuro más equitativo. ¿Tienen alguna pregunta?' },
        { label: 'd', task: 'Skriv et svar på et vanskelig spørsmål om teknologi og arbeidsledighet.', solution: 'Es una excelente pregunta. Efectivamente, la automatización puede eliminar ciertos empleos. No obstante, también crea nuevas oportunidades laborales en sectores como la programación y el análisis de datos. Lo esencial es adaptar el sistema educativo para preparar a los jóvenes para estos nuevos trabajos.', answer: 'Es una excelente pregunta. Efectivamente, la automatización puede eliminar ciertos empleos. No obstante, también crea nuevas oportunidades laborales en sectores como la programación y el análisis de datos. Lo esencial es adaptar el sistema educativo para preparar a los jóvenes para estos nuevos trabajos.' },
      ], solution: 'a) Buenos días. Hoy voy a hablar sobre la innovación tecnológica en Latinoamérica. El objetivo de mi presentación es mostrar cómo países como México, Colombia y Chile están liderando el emprendimiento digital. Primero analizaré el ecosistema de startups, luego presentaré casos de éxito y finalmente discutiré los desafíos pendientes., b) Hasta ahora hemos analizado el crecimiento económico de la región. Sin embargo, es importante destacar que este desarrollo no ha beneficiado a todos por igual. Pasemos ahora a examinar los desafíos sociales que persisten., c) En conclusión, hemos visto que la innovación tecnológica ofrece grandes oportunidades para Latinoamérica. Sin embargo, es fundamental invertir en educación y reducir la brecha digital. Los invito a reflexionar sobre cómo cada uno de nosotros puede contribuir a un futuro más equitativo. ¿Tienen alguna pregunta?, d) Es una excelente pregunta. Efectivamente, la automatización puede eliminar ciertos empleos. No obstante, también crea nuevas oportunidades laborales en sectores como la programación y el análisis de datos. Lo esencial es adaptar el sistema educativo para preparar a los jóvenes para estos nuevos trabajos.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-14-4-tip-1', type: 'tip', content: `**Husk:** Øv presentasjonen høyt! Muntlig flyt kommer med trening. Ta opp deg selv og lytt etter uttale, tempo og bruk av overganger. Det er bedre å snakke litt saktere og tydelig enn raskt og utydelig.` },
    { id: 'spansk-3-14-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Presentaciones académicas**

- **Struktur:** Introducción → Desarrollo → Conclusión
- **Innledning:** Presenter tema, mål og oversikt
- **Overganger:** Bruk bindeord som *pasemos a*, *en cuanto a*, *por otro lado*
- **Avslutning:** Oppsummer, konkluder og inviter til spørsmål
- **Tips:** Øv høyt, bruk visuell støtte, hold deg til temaet` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15: TRADUCCIÓN Y MEDIACIÓN
// ============================================================================

// 15.1 Técnicas de traducción
export const CHAPTER_SPANSK_3_15_1: TextbookChapter = {
  id: 'spansk-3-15-1',
  courseId: 'spansk-3',
  chapterNumber: '15.1',
  title: 'Técnicas de traducción',
  subtitle: 'Oversettelsesteknikker mellom norsk og spansk',
  description: 'Lær ulike oversettelsesteknikker som ekvivalens, tilpasning og omskrivning for å oversette effektivt mellom norsk og spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['anvende ulike oversettelsesteknikker mellom norsk og spansk', 'forstå forskjellen mellom direkte og fri oversettelse'],
  content: [
    { id: 'spansk-3-15-1-intro', type: 'text', content: `## Técnicas de traducción

Oversettelse handler om mye mer enn å bytte ut ord fra ett språk til et annet. En god oversetter forstår kulturen, konteksten og nyansene bak ordene. I dette kapittelet lærer du ulike teknikker som hjelper deg å oversette mer presist og naturlig mellom norsk og spansk.` },
    { id: 'spansk-3-15-1-def-1', type: 'definition', title: 'Oversettelsesvokabular (vocabulario de traducción)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la traducción | oversettelse |
| traducir | å oversette |
| el/la traductor/a | oversetteren |
| la traducción literal | direkte/bokstavelig oversettelse |
| la traducción libre | fri oversettelse |
| la equivalencia | ekvivalens |
| la adaptación | tilpasning |
| la modulación | modulering (endring av synspunkt) |
| el préstamo | lånord |
| el calco | kalkering (oversettelseslån) |
| la transposición | transposisjon (ordklasseskifte) |
| el texto fuente | kildeteksten |` },
    { id: 'spansk-3-15-1-text-1', type: 'text', content: `## De viktigste oversettelseteknikkene

**1. Direkte oversettelse (traducción literal):**
Ord-for-ord-oversettelse som fungerer når språkene har lik struktur.
- *La casa es grande* → Huset er stort ✓

**2. Ekvivalens (equivalencia):**
Bruke et uttrykk i målspråket som har samme funksjon, men helt andre ord.
- *Llover a cántaros* → Det regner sinte kjerringer (idiomatisk ekvivalens)
- *¡Buen provecho!* → Vel bekomme!

**3. Tilpasning (adaptación):**
Erstatte et kulturelt element med noe tilsvarende i målkulturen.
- *La Navidad* → Julen (ulik feiring, men samme funksjon)

**4. Modulering (modulación):**
Endre synsvinkelen, men beholde meningen.
- *No es difícil* → Det er ganske enkelt
- *La botella está medio vacía* → Flasken er halvfull

**5. Transposisjon (transposición):**
Endre ordklasse, men beholde meningen.
- *Después de comer* (etter å spise) → Etter måltidet (verb → substantiv)` },
    { id: 'spansk-3-15-1-text-2', type: 'text', content: `## Utfordringer i norsk-spansk oversettelse

Norsk og spansk har svært ulik grammatisk struktur, noe som skaper spesielle utfordringer:

**Ordstilling:** Norsk har V2-regel (verbet alltid på andreplass), mens spansk er mer fleksibelt.
- *I går gikk jeg på kino* → *Ayer fui al cine* (ikke *Ayer fui yo al cine*)

**Artikler:** Norsk bruker etterstilt artikkel, spansk bruker foranstilt.
- *Huset* → *La casa* (ikke *casa la*)

**Tempusvalg:** Der norsk bruker preteritum, bruker spansk ofte perfektum, og omvendt.
- *Har du sett filmen?* → *¿Has visto la película?* ELLER *¿Viste la película?*

**Preposisjoner:** Sjelden direkte ekvivalens mellom norsk og spansk.
- *Tenke på* → *Pensar en* (ikke *pensar sobre*)
- *Drømme om* → *Soñar con* (ikke *soñar sobre*)

**Tips for god oversettelse:**
1. Les hele teksten først
2. Forstå budskapet, ikke bare ordene
3. Oversett meningen, ikke ord for ord
4. Les oversettelsen høyt – høres den naturlig ut?` },
    { id: 'spansk-3-15-1-example-1', type: 'example', title: 'Eksempel: Ulike oversettelsesteknikker', problem: `Oversett setningen «Det var dråpen som fikk begeret til å flyte over» til spansk. Hvilken teknikk bruker du?`, solution: `**Spansk:** *Fue la gota que colmó el vaso.*\n**Teknikk:** Ekvivalens – begge språk har et lignende idiomatisk uttrykk (dråpen/begeret), men den spanske versjonen sier «som fylte glasset» i stedet for «fikk begeret til å flyte over».` },
    { id: 'spansk-3-15-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-15-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match oversettelsesteknikk med definisjon:', subTasks: [
        { label: 'a', task: 'Equivalencia', solution: 'Bruke et uttrykk med samme funksjon, men helt andre ord', answer: 'Bruke et uttrykk med samme funksjon, men helt andre ord' },
        { label: 'b', task: 'Traducción literal', solution: 'Ord-for-ord-oversettelse', answer: 'Ord-for-ord-oversettelse' },
        { label: 'c', task: 'Modulación', solution: 'Endre synsvinkelen, men beholde meningen', answer: 'Endre synsvinkelen, men beholde meningen' },
        { label: 'd', task: 'Adaptación', solution: 'Erstatte et kulturelt element med noe tilsvarende i målkulturen', answer: 'Erstatte et kulturelt element med noe tilsvarende i målkulturen' },
      ], solution: 'a) Bruke et uttrykk med samme funksjon, men helt andre ord, b) Ord-for-ord-oversettelse, c) Endre synsvinkelen, men beholde meningen, d) Erstatte et kulturelt element med noe tilsvarende i målkulturen', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-15-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Hvilken oversettelsesteknikk er brukt? Velg mellom: literal, equivalencia, modulación, adaptación:', subTasks: [
        { label: 'a', task: '«¡Buen provecho!» → «Vel bekomme!»', solution: 'Equivalencia (ekvivalens – tilsvarende uttrykk med ulike ord)', answer: 'Equivalencia' },
        { label: 'b', task: '«La casa es grande» → «Huset er stort»', solution: 'Traducción literal (direkte oversettelse)', answer: 'Traducción literal' },
        { label: 'c', task: '«No es difícil» → «Det er ganske enkelt»', solution: 'Modulación (endring av synsvinkel)', answer: 'Modulación' },
        { label: 'd', task: '«Halloween» → «Allehelgensaften» (i norsk kontekst)', solution: 'Adaptación (kulturell tilpasning)', answer: 'Adaptación' },
      ], solution: 'a) Equivalencia (ekvivalens – tilsvarende uttrykk med ulike ord), b) Traducción literal (direkte oversettelse), c) Modulación (endring av synsvinkel), d) Adaptación (kulturell tilpasning)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-15-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Oversett til spansk og identifiser utfordringen:', subTasks: [
        { label: 'a', task: 'Oversett: «Jeg tenker på deg.»', solution: 'Pienso en ti. (Utfordring: preposisjonsvalg – norsk «på» = spansk «en», ikke «sobre».)', answer: 'Pienso en ti.' },
        { label: 'b', task: 'Oversett: «Har du vært i Spania?»', solution: '¿Has estado en España? (Utfordring: tempusvalg – norsk bruker perfektum, spansk også her.)', answer: '¿Has estado en España?' },
        { label: 'c', task: 'Oversett: «Etter frokost gikk vi en tur.»', solution: 'Después del desayuno dimos un paseo. (Utfordring: ordstilling og uttrykket «gå en tur» = dar un paseo.)', answer: 'Después del desayuno dimos un paseo.' },
        { label: 'd', task: 'Oversett: «Det er typisk norsk å gå tur.»', solution: 'Es típicamente noruego salir a caminar. (Utfordring: kulturelt uttrykk som krever tilpasning.)', answer: 'Es típicamente noruego salir a caminar.' },
      ], solution: 'a) Pienso en ti. (Utfordring: preposisjonsvalg – norsk «på» = spansk «en», ikke «sobre».), b) ¿Has estado en España? (Utfordring: tempusvalg – norsk bruker perfektum, spansk også her.), c) Después del desayuno dimos un paseo. (Utfordring: ordstilling og uttrykket «gå en tur» = dar un paseo.), d) Es típicamente noruego salir a caminar. (Utfordring: kulturelt uttrykk som krever tilpasning.)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-15-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversettelsesutfordringer – oversett og begrunn valg av teknikk:', subTasks: [
        { label: 'a', task: 'Oversett ordtaket «Øvelse gjør mester» til spansk. Hvilken teknikk bruker du?', solution: 'La práctica hace al maestro. Teknikk: Direkte oversettelse (traducción literal), da ordtaket finnes i nesten identisk form på spansk.', answer: 'La práctica hace al maestro. Teknikk: Traducción literal.' },
        { label: 'b', task: 'Oversett «koselig» til spansk. Forklar utfordringen.', solution: '«Koselig» har ingen direkte ekvivalent på spansk. Man kan bruke acogedor (om et sted), agradable (hyggelig) eller íntimo (intimt). Teknikk: Modulación/adaptación – man må velge ut fra kontekst.', answer: 'Acogedor / agradable / íntimo, avhengig av kontekst. Teknikk: Modulación/adaptación.' },
        { label: 'c', task: 'Oversett et kort avsnitt (3 setninger) fra norsk til spansk: «I Norge feirer vi 17. mai med bunad, tog og is. Barna er i sentrum av feiringen. Det er en dag fylt av glede.»', solution: 'En Noruega celebramos el 17 de mayo con trajes tradicionales, desfiles y helados. Los niños son el centro de la celebración. Es un día lleno de alegría. (Teknikk: Blanding av literal oversettelse og adaptación for «bunad» → «trajes tradicionales».)', answer: 'En Noruega celebramos el 17 de mayo con trajes tradicionales, desfiles y helados. Los niños son el centro de la celebración. Es un día lleno de alegría.' },
        { label: 'd', task: 'Oversett fra spansk til norsk: «En España, la sobremesa es sagrada. Después de comer, las familias se quedan hablando durante horas.» Forklar den kulturelle utfordringen.', solution: 'I Spania er samværet etter maten hellig. Etter måltidet sitter familiene og snakker i timevis. (Utfordring: «sobremesa» har ingen norsk ekvivalent – det beskriver tiden man tilbringer ved bordet etter at man har spist. Man må bruke en omskrivning.)', answer: 'I Spania er samværet etter maten hellig. Etter måltidet sitter familiene og snakker i timevis.' },
      ], solution: 'a) La práctica hace al maestro. Teknikk: Direkte oversettelse (traducción literal), da ordtaket finnes i nesten identisk form på spansk., b) «Koselig» har ingen direkte ekvivalent på spansk. Man kan bruke acogedor (om et sted), agradable (hyggelig) eller íntimo (intimt). Teknikk: Modulación/adaptación – man må velge ut fra kontekst., c) En Noruega celebramos el 17 de mayo con trajes tradicionales, desfiles y helados. Los niños son el centro de la celebración. Es un día lleno de alegría. (Teknikk: Blanding av literal oversettelse og adaptación for «bunad» → «trajes tradicionales».), d) I Spania er samværet etter maten hellig. Etter måltidet sitter familiene og snakker i timevis. (Utfordring: «sobremesa» har ingen norsk ekvivalent – det beskriver tiden man tilbringer ved bordet etter at man har spist. Man må bruke en omskrivning.)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-1-tip-1', type: 'tip', content: `**Husk:** Den beste oversettelsen er den som høres naturlig ut på målspråket. Spør deg selv: «Ville en spansktalende person sagt det slik?» Hvis svaret er nei, prøv en annen teknikk.` },
    { id: 'spansk-3-15-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Técnicas de traducción**

- **Literal:** Ord-for-ord, fungerer når strukturen er lik
- **Ekvivalens:** Samme funksjon, men ulike ord (idiomer, uttrykk)
- **Tilpasning:** Erstatte kulturelle elementer
- **Modulering:** Endre synsvinkel, beholde mening
- **Transposisjon:** Endre ordklasse, beholde mening
- **Hovedregel:** Oversett meningen, ikke ordene` },
  ],
  exercises: [],
};

// 15.2 Falsos amigos y contrastes
export const CHAPTER_SPANSK_3_15_2: TextbookChapter = {
  id: 'spansk-3-15-2',
  courseId: 'spansk-3',
  chapterNumber: '15.2',
  title: 'Falsos amigos y contrastes',
  subtitle: 'Falske venner og kontrastiv analyse',
  description: 'Unngå vanlige feil ved å kjenne til falske venner mellom norsk/engelsk og spansk, og forstå kontrastive forskjeller.',
  estimatedMinutes: 45,
  competenceGoals: ['identifisere og unngå falske venner mellom spansk og norsk/engelsk', 'bruke kontrastiv analyse for å forbedre språkforståelsen'],
  content: [
    { id: 'spansk-3-15-2-intro', type: 'text', content: `## Falsos amigos y contrastes

*Falsos amigos* (falske venner) er ord som ser like ut på to språk, men som har helt ulik betydning. For norske og engelsktalende elever som lærer spansk, er dette en vanlig kilde til misforståelser. Kontrastiv analyse hjelper oss å forstå de systematiske forskjellene mellom språkene.` },
    { id: 'spansk-3-15-2-def-1', type: 'definition', title: 'Falske venner spansk–engelsk (falsos amigos español–inglés)', content: `**Nøkkelord:**

| Spansk ord | Ser ut som (engelsk) | Betyr faktisk |
|------------|---------------------|---------------|
| embarazada | embarrassed | gravid |
| realizar | realize | gjennomføre |
| actualmente | actually | for tiden |
| sensible | sensible | følsom |
| éxito | exit | suksess |
| carpeta | carpet | mappe |
| constipado | constipated | forkjølet |
| largo | large | lang |
| recordar | record | huske |
| pretender | pretend | ha til hensikt |
| librería | library | bokhandel |
| asistir | assist | delta/være til stede |` },
    { id: 'spansk-3-15-2-text-1', type: 'text', content: `## Kontrastive forskjeller: norsk vs. spansk

Kontrastiv analyse sammenligner to språk systematisk for å identifisere forskjeller som kan skape problemer:

**Grammatiske kontraster:**
- **Kjønn:** Norsk har tre kjønn (han/hun/intetkjønn), spansk har to (maskulin/feminin)
- **Adjektiver:** Norsk: adjektiv før substantiv. Spansk: vanligvis etter.
  - *Et stort hus* → *Una casa grande* (ikke *una grande casa*)
- **Dobbel negasjon:** Norsk: ingen dobbel negasjon. Spansk: obligatorisk.
  - *Jeg ser ingen* → *No veo a nadie* (bokstavelig: «jeg ser ikke ingen»)

**Uttalekontraster:**
- Norsk har mange vokaler (9), spansk bare 5 (a, e, i, o, u)
- Den spanske «r» er rullet, ulikt norsk «r» i de fleste dialekter
- «j» på spansk uttales som norsk «kh», ikke som norsk «j»

**Ordforrådskontraster:**
- Norsk bruker mange sammensatte ord: *barnehage* → spansk bruker to ord: *jardín de infancia*
- Spansk har mange diminutiver (-ito/-ita) som norsk mangler: *casita* (lite hus), *perrito* (liten hund)` },
    { id: 'spansk-3-15-2-text-2', type: 'text', content: `## Vanlige feil for norske spanskstudenter

**Feil med preposisjoner:**
- ❌ *Estoy enamorado en ella* → ✓ *Estoy enamorado de ella* (forelsket i)
- ❌ *Depende en el tiempo* → ✓ *Depende del tiempo* (avhenger av)
- ❌ *Sueño sobre viajar* → ✓ *Sueño con viajar* (drømmer om)

**Feil med ser/estar:**
- ❌ *María es cansada* → ✓ *María está cansada* (er trøtt – midlertidig tilstand)
- ❌ *La fiesta está el sábado* → ✓ *La fiesta es el sábado* (festen er lørdag – tidspunkt)

**Feil med falske venner:**
- ❌ *Estoy muy embarazado* (Jeg er veldig gravid) → ✓ *Estoy muy avergonzado* (Jeg er veldig flau)
- ❌ *La librería tiene muchos libros* (Bokhandelen) → Mente du *La biblioteca*? (Biblioteket)

**Direkte oversettelse fra norsk:**
- ❌ *Tengo frío* betyr ikke «Jeg har kulde», men «Jeg fryser» (spansk uttrykker følelser annerledes)
- ❌ *Hace buen tiempo* betyr ikke «Det gjør godt vær», men «Det er fint vær»` },
    { id: 'spansk-3-15-2-example-1', type: 'example', title: 'Eksempel: Falske venner i kontekst', problem: `Hva er feil i denne setningen, og hvordan rettes den?\n\n*«Actualmente, estoy muy embarazada porque realicé que mi carpeta está en la librería.»*`, solution: `Feilen: Setningen ser ut som den betyr «Egentlig er jeg veldig flau fordi jeg innså at mappen min er på biblioteket.»\n\nMen den betyr faktisk: «For tiden er jeg veldig gravid fordi jeg gjennomførte at mappen min er i bokhandelen.» (Meningsløst!)\n\n**Riktig:** *En realidad, estoy muy avergonzada porque me di cuenta de que mi carpeta está en la biblioteca.*` },
    { id: 'spansk-3-15-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-15-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Hva betyr disse «falske vennene» egentlig på spansk?', subTasks: [
        { label: 'a', task: 'embarazada', solution: 'gravid (ikke flau/embarrassed)', answer: 'gravid' },
        { label: 'b', task: 'éxito', solution: 'suksess (ikke utgang/exit)', answer: 'suksess' },
        { label: 'c', task: 'largo', solution: 'lang (ikke stor/large)', answer: 'lang' },
        { label: 'd', task: 'sensible', solution: 'følsom (ikke fornuftig/sensible)', answer: 'følsom' },
      ], solution: 'a) gravid (ikke flau/embarrassed), b) suksess (ikke utgang/exit), c) lang (ikke stor/large), d) følsom (ikke fornuftig/sensible)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-15-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Rett feilen i hver setning:', subTasks: [
        { label: 'a', task: '❌ Estoy enamorado en ella.', solution: '✓ Estoy enamorado de ella. (Preposisjon: «de», ikke «en».)', answer: 'Estoy enamorado de ella.' },
        { label: 'b', task: '❌ María es cansada.', solution: '✓ María está cansada. (Estar for midlertidig tilstand, ikke ser.)', answer: 'María está cansada.' },
        { label: 'c', task: '❌ Sueño sobre viajar a España.', solution: '✓ Sueño con viajar a España. (Preposisjon: «con», ikke «sobre».)', answer: 'Sueño con viajar a España.' },
        { label: 'd', task: '❌ Voy a la librería para estudiar.', solution: '✓ Voy a la biblioteca para estudiar. (Biblioteca = bibliotek, librería = bokhandel.)', answer: 'Voy a la biblioteca para estudiar.' },
      ], solution: 'a) Estoy enamorado de ella. (Preposisjon: «de», ikke «en».), b) María está cansada. (Estar for midlertidig tilstand, ikke ser.), c) Sueño con viajar a España. (Preposisjon: «con», ikke «sobre».), d) Voy a la biblioteca para estudiar. (Biblioteca = bibliotek, librería = bokhandel.)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-15-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Kontrastiv analyse – forklar forskjellen:', subTasks: [
        { label: 'a', task: 'Forklar forskjellen mellom adjektivplassering i norsk og spansk.', solution: 'I norsk står adjektivet vanligvis foran substantivet (et stort hus). I spansk står det vanligvis etter (una casa grande). Noen spanske adjektiver kan stå foran, men da endrer de ofte betydning.', answer: 'I norsk står adjektivet vanligvis foran substantivet (et stort hus). I spansk står det vanligvis etter (una casa grande).' },
        { label: 'b', task: 'Hvorfor er dobbel negasjon vanskelig for norske elever?', solution: 'I norsk er dobbel negasjon grammatisk feil eller betyr det motsatte. I spansk er dobbel negasjon obligatorisk: «No veo a nadie» (jeg ser ingen). Norske elever utelater ofte «no» fordi «nadie» allerede er negativt.', answer: 'I norsk er dobbel negasjon grammatisk feil. I spansk er dobbel negasjon obligatorisk: «No veo a nadie».' },
        { label: 'c', task: 'Hvorfor er ser/estar vanskelig for norske elever?', solution: 'Norsk har bare ett verb for «å være». Spansk skiller mellom ser (permanent egenskap) og estar (midlertidig tilstand, plassering). For eksempel: «Es alta» (hun er høy – permanent) vs. «Está cansada» (hun er trøtt – midlertidig).', answer: 'Norsk har bare «å være», mens spansk skiller mellom ser (permanent) og estar (midlertidig).' },
        { label: 'd', task: 'Forklar utfordringen med sammensatte ord (norsk) vs. flerordsuttrykk (spansk).', solution: 'Norsk lager sammensatte ord som «barnehage» og «sykepleier». Spansk bruker flerordsuttrykk: «jardín de infancia», «enfermero/a». Norske elever prøver noen ganger å lage sammensatte ord på spansk, som ikke fungerer.', answer: 'Norsk bruker sammensatte ord (barnehage), spansk bruker flerordsuttrykk (jardín de infancia).' },
      ], solution: 'a) I norsk står adjektivet vanligvis foran substantivet (et stort hus). I spansk står det vanligvis etter (una casa grande). Noen spanske adjektiver kan stå foran, men da endrer de ofte betydning., b) I norsk er dobbel negasjon grammatisk feil eller betyr det motsatte. I spansk er dobbel negasjon obligatorisk: «No veo a nadie» (jeg ser ingen). Norske elever utelater ofte «no» fordi «nadie» allerede er negativt., c) Norsk har bare ett verb for «å være». Spansk skiller mellom ser (permanent egenskap) og estar (midlertidig tilstand, plassering). For eksempel: «Es alta» (hun er høy – permanent) vs. «Está cansada» (hun er trøtt – midlertidig)., d) Norsk lager sammensatte ord som «barnehage» og «sykepleier». Spansk bruker flerordsuttrykk: «jardín de infancia», «enfermero/a». Norske elever prøver noen ganger å lage sammensatte ord på spansk, som ikke fungerer.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-15-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Avanserte kontrastoppgaver:', subTasks: [
        { label: 'a', task: 'Skriv en kort tekst (3-4 setninger) på spansk der du med vilje unngår minst tre vanlige feil for norske elever.', solution: 'Ayer fui a la biblioteca para estudiar porque estaba muy estresada. Soñé con aprobar todos los exámenes. No vi a nadie que conociera, así que me senté sola. Actualmente estoy preparándome para el examen final.', answer: 'Ayer fui a la biblioteca para estudiar porque estaba muy estresada. Soñé con aprobar todos los exámenes. No vi a nadie que conociera, así que me senté sola.' },
        { label: 'b', task: 'Lag en liste over fem falske venner du tror er farligst for norske elever, og forklar hvorfor.', solution: '1) Embarazada (gravid, ikke flau) – svært pinlig misforståelse. 2) Éxito (suksess, ikke utgang) – daglig ord. 3) Largo (lang, ikke stor) – svært vanlig feil. 4) Realizar (gjennomføre, ikke innse) – akademisk ord. 5) Asistir (delta, ikke hjelpe) – brukes på skolen.', answer: '1) Embarazada, 2) Éxito, 3) Largo, 4) Realizar, 5) Asistir – alle har svært ulik betydning fra det engelske ordet de ligner på.' },
        { label: 'c', task: 'Oversett teksten uten å falle i «feilene»: «Actually, I realized that the large library has a sensible approach to recording exit data.»', solution: 'En realidad, me di cuenta de que la gran biblioteca tiene un enfoque sensato para registrar datos de salida. (Actualmente→En realidad, realized→me di cuenta, large→gran, sensible→sensato, recording→registrar, exit→salida.)', answer: 'En realidad, me di cuenta de que la gran biblioteca tiene un enfoque sensato para registrar datos de salida.' },
        { label: 'd', task: 'Lag tre setningspar som viser kontrastive forskjeller mellom norsk og spansk.', solution: '1) Norsk: «Jeg har det kaldt.» → Spansk: «Tengo frío.» (Norsk: ha det + adj. / Spansk: tener + subst.) 2) Norsk: «Et hvitt hus.» → Spansk: «Una casa blanca.» (Adjektiv foran/etter.) 3) Norsk: «Jeg liker bøker.» → Spansk: «Me gustan los libros.» (Ulik setningsstruktur.)', answer: '1) Jeg har det kaldt → Tengo frío, 2) Et hvitt hus → Una casa blanca, 3) Jeg liker bøker → Me gustan los libros.' },
      ], solution: 'a) Ayer fui a la biblioteca para estudiar porque estaba muy estresada. Soñé con aprobar todos los exámenes. No vi a nadie que conociera, así que me senté sola. Actualmente estoy preparándome para el examen final., b) 1) Embarazada (gravid, ikke flau). 2) Éxito (suksess, ikke utgang). 3) Largo (lang, ikke stor). 4) Realizar (gjennomføre, ikke innse). 5) Asistir (delta, ikke hjelpe)., c) En realidad, me di cuenta de que la gran biblioteca tiene un enfoque sensato para registrar datos de salida., d) 1) Norsk: «Jeg har det kaldt.» → Spansk: «Tengo frío.» 2) Norsk: «Et hvitt hus.» → Spansk: «Una casa blanca.» 3) Norsk: «Jeg liker bøker.» → Spansk: «Me gustan los libros.»', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-2-tip-1', type: 'tip', content: `**Husk:** Lag din egen «farlige ord»-liste med falske venner du har opplevd. Gjennomgå listen regelmessig. Jo mer bevisst du er på fellene, desto lettere unngår du dem!` },
    { id: 'spansk-3-15-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Falsos amigos y contrastes**

- **Falske venner:** Ord som ser like ut, men betyr noe annet (embarazada ≠ embarrassed)
- **Preposisjoner:** Norsk og spansk bruker ulike preposisjoner (enamorado de, soñar con)
- **Ser/estar:** To verb for «å være» – permanent vs. midlertidig
- **Dobbel negasjon:** Obligatorisk i spansk, feil i norsk
- **Adjektivplassering:** Etter substantivet i spansk, foran i norsk` },
  ],
  exercises: [],
};

// 15.3 Mediación cultural
export const CHAPTER_SPANSK_3_15_3: TextbookChapter = {
  id: 'spansk-3-15-3',
  courseId: 'spansk-3',
  chapterNumber: '15.3',
  title: 'Mediación cultural',
  subtitle: 'Kulturell mediering og interkulturell kompetanse',
  description: 'Utvikle ferdigheter i kulturell mediering – å kunne tolke og formidle mellom kulturer og kommunikasjonsstiler.',
  estimatedMinutes: 45,
  competenceGoals: ['formidle innhold mellom kulturer og språk', 'vise interkulturell kompetanse i kommunikasjon'],
  content: [
    { id: 'spansk-3-15-3-intro', type: 'text', content: `## Mediación cultural

Kulturell mediering handler om å bygge bruer mellom kulturer. Som språkbruker er du ikke bare en oversetter av ord, men en formidler av mening, verdier og kulturelle koder. I det europeiske rammeverket for språk (CEFR) er mediering en av de viktigste ferdighetene – evnen til å gjøre innhold tilgjengelig for andre på tvers av språk og kulturer.` },
    { id: 'spansk-3-15-3-def-1', type: 'definition', title: 'Medieringsvokabular (vocabulario de mediación)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la mediación | mediering |
| el/la mediador/a cultural | kulturell mediator |
| la competencia intercultural | interkulturell kompetanse |
| el malentendido cultural | kulturell misforståelse |
| la negociación de significados | meningsforhandling |
| el contexto cultural | kulturell kontekst |
| la empatía intercultural | interkulturell empati |
| los estereotipos | stereotypier |
| los prejuicios | fordommer |
| la diversidad cultural | kulturelt mangfold |
| la comunicación no verbal | ikke-verbal kommunikasjon |
| el choque cultural | kultursjokk |` },
    { id: 'spansk-3-15-3-text-1', type: 'text', content: `## Hva er kulturell mediering?

Kulturell mediering innebærer å:

**1. Tolke mellom kulturer:**
Forklare kulturelle koder for noen fra en annen bakgrunn. For eksempel: Hvorfor er det uhøflig å komme presis til en fest i mange latinamerikanske land?

**2. Tilpasse kommunikasjon:**
Endre måten du formidler noe på, avhengig av hvem du snakker med. En formell hilsen i Spania er annerledes enn i Norge.

**3. Bygge broer:**
Hjelpe mennesker fra ulike kulturer å forstå hverandre, for eksempel i en forretningssituasjon mellom norske og spanske partnere.

**Eksempler på kulturelle forskjeller:**
- **Tid:** I Spania og Latin-Amerika er det akseptabelt å komme 15-30 minutter «sent». I Norge er punktlighet viktig.
- **Fysisk nærhet:** Spansktalende står nærmere hverandre og bruker mer berøring i samtale.
- **Formalitet:** Bruk av *usted* vs. *tú* signaliserer respekt og avstand.
- **Kommunikasjonsstil:** Spansktalende kan oppfattes som mer direkte og uttrykksfulle enn nordmenn.` },
    { id: 'spansk-3-15-3-text-2', type: 'text', content: `## Mediering i praksis

**Situasjon 1: Forretningskontekst**
En norsk bedrift skal samarbeide med en meksikansk partner. Den norske siden forventer raske beslutninger, mens den meksikanske siden legger vekt på relasjonsbygging først. En mediator må forklare begge kulturers tilnærming.

**Situasjon 2: Utdanning**
En spansk utvekslingselev i Norge forstår ikke hvorfor norske elever kaller læreren ved fornavn. En mediator forklarer at dette reflekterer norsk likhetstankegang, ikke manglende respekt.

**Situasjon 3: Hverdagsliv**
En norsk turist i Spania er frustrert over at butikker stenger mellom 14:00 og 17:00. En mediator forklarer *la siesta*-tradisjonen og at matbutikker har tilpassede åpningstider.

**Nøkkelfraser for mediering:**
- *En la cultura noruega, esto significa que...* (I norsk kultur betyr dette at...)
- *En España/Latinoamérica, es común que...* (I Spania/Latin-Amerika er det vanlig at...)
- *La diferencia se debe a...* (Forskjellen skyldes...)
- *No es una falta de respeto, sino...* (Det er ikke mangel på respekt, men...)` },
    { id: 'spansk-3-15-3-example-1', type: 'example', title: 'Eksempel: Kulturell mediering', problem: `En norsk venn spør hvorfor den spanske venninnen din alltid kysser folk på kinnet når hun hilser. Hvordan forklarer du dette?`, solution: `*En España y Latinoamérica, es costumbre saludarse con dos besos en las mejillas. No es una señal de intimidad, sino una forma normal y educada de saludar. En Noruega preferimos mantener más distancia física, pero en la cultura hispana, el contacto físico es una muestra de cercanía y amabilidad.*` },
    { id: 'spansk-3-15-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-15-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match kulturell forskjell med riktig forklaring:', subTasks: [
        { label: 'a', task: 'Spansktalende står fysisk nærmere i samtale', solution: 'Kulturell norm – nærhet viser vennlighet, ikke påtrengenhet', answer: 'Kulturell norm – nærhet viser vennlighet, ikke påtrengenhet' },
        { label: 'b', task: 'Norske elever kaller læreren ved fornavn', solution: 'Reflekterer norsk likhetstankegang, ikke manglende respekt', answer: 'Reflekterer norsk likhetstankegang, ikke manglende respekt' },
        { label: 'c', task: 'Butikker i Spania stenger midt på dagen', solution: 'La siesta-tradisjonen og tilpasning til varmt klima', answer: 'La siesta-tradisjonen og tilpasning til varmt klima' },
        { label: 'd', task: 'Det er vanlig å komme «sent» til en fest i Latin-Amerika', solution: 'Ulike kulturer har ulike normer for tid og punktlighet', answer: 'Ulike kulturer har ulike normer for tid og punktlighet' },
      ], solution: 'a) Kulturell norm – nærhet viser vennlighet, ikke påtrengenhet, b) Reflekterer norsk likhetstankegang, ikke manglende respekt, c) La siesta-tradisjonen og tilpasning til varmt klima, d) Ulike kulturer har ulike normer for tid og punktlighet', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-15-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Oversett medieringsfrasene til norsk:', subTasks: [
        { label: 'a', task: 'En la cultura noruega, esto significa que...', solution: 'I norsk kultur betyr dette at...', answer: 'I norsk kultur betyr dette at...' },
        { label: 'b', task: 'La diferencia se debe a...', solution: 'Forskjellen skyldes...', answer: 'Forskjellen skyldes...' },
        { label: 'c', task: 'No es una falta de respeto, sino...', solution: 'Det er ikke mangel på respekt, men...', answer: 'Det er ikke mangel på respekt, men...' },
        { label: 'd', task: 'Es común que en España...', solution: 'Det er vanlig at i Spania...', answer: 'Det er vanlig at i Spania...' },
      ], solution: 'a) I norsk kultur betyr dette at..., b) Forskjellen skyldes..., c) Det er ikke mangel på respekt, men..., d) Det er vanlig at i Spania...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-15-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Medieringsoppgaver – forklar kulturelle forskjeller:', subTasks: [
        { label: 'a', task: 'Forklar for en spansk venn hvorfor nordmenn tar av seg skoene når de kommer hjem til noen.', solution: 'En Noruega, quitarse los zapatos al entrar en una casa es una señal de respeto y limpieza. El clima frío y húmedo hace que los zapatos estén sucios, así que es normal dejarlos en la entrada.', answer: 'En Noruega, quitarse los zapatos al entrar en una casa es una señal de respeto y limpieza.' },
        { label: 'b', task: 'Forklar for en norsk venn hvorfor spanjoler spiser middag klokken 21-22.', solution: 'En España, el horario de comidas es diferente al noruego. Se come más tarde por razones históricas y climáticas. El calor del mediodía hace que se prefiera cenar cuando baja la temperatura. Es una costumbre arraigada, no pereza.', answer: 'En España, el horario de comidas es diferente al noruego. Se come más tarde por razones históricas y climáticas.' },
        { label: 'c', task: 'Hva kan skje i et forretningssmøte mellom norske og meksikanske partnere? Identifiser to mulige misforståelser.', solution: 'Mulige misforståelser: 1) Nordmenn vil gå rett til saken, mens meksikanere ønsker å bygge relasjoner først (småprat, måltid sammen). 2) Nordmenn tolker «sí» som en forpliktelse, mens det i meksikansk kultur kan bety «kanskje» eller «vi skal se».', answer: '1) Ulik tilnærming til relasjonsbygging vs. effektivitet. 2) Ulik tolkning av «ja» (forpliktelse vs. høflighet).' },
        { label: 'd', task: 'Hvordan kan man unngå stereotypier når man snakker om kulturelle forskjeller?', solution: 'Man bør bruke formuleringer som «mange i denne kulturen» i stedet for «alle spanjoler». Man bør huske at det er stor variasjon innad i alle kulturer, og unngå generaliseringer. Kulturelle tendenser er ikke absolutte regler.', answer: 'Bruke «mange i denne kulturen» i stedet for generaliseringer. Huske variasjon innad i kulturer.' },
      ], solution: 'a) En Noruega, quitarse los zapatos al entrar en una casa es una señal de respeto y limpieza. El clima frío y húmedo hace que los zapatos estén sucios, así que es normal dejarlos en la entrada., b) En España, el horario de comidas es diferente al noruego. Se come más tarde por razones históricas y climáticas. El calor del mediodía hace que se prefiera cenar cuando baja la temperatura. Es una costumbre arraigada, no pereza., c) 1) Nordmenn vil gå rett til saken, mens meksikanere ønsker å bygge relasjoner først. 2) Nordmenn tolker «sí» som en forpliktelse, mens det i meksikansk kultur kan bety «kanskje»., d) Man bør bruke formuleringer som «mange i denne kulturen» i stedet for «alle spanjoler». Man bør huske variasjon innad i kulturer.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-15-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Avanserte medieringsoppgaver:', subTasks: [
        { label: 'a', task: 'Skriv en medieringstekst (3-4 setninger på spansk) som forklarer norsk «jantelov» for en spansktalende person.', solution: 'La «ley de Jante» es un concepto cultural escandinavo que dice que nadie debe creerse mejor que los demás. En la práctica, esto significa que los noruegos valoran la modestia y evitan presumir de sus logros. No es que no tengan ambición, sino que prefieren la igualdad y el trabajo en equipo sobre el individualismo.', answer: 'La «ley de Jante» es un concepto cultural escandinavo que dice que nadie debe creerse mejor que los demás. En la práctica, esto significa que los noruegos valoran la modestia y evitan presumir de sus logros.' },
        { label: 'b', task: 'Skriv en medieringstekst (3-4 setninger på spansk) som forklarer «la sobremesa» for en norsk person.', solution: 'La sobremesa es el tiempo que las familias y amigos pasan conversando en la mesa después de comer. En la cultura hispana, las comidas no son solo para alimentarse, sino para disfrutar de la compañía. Esta tradición refleja la importancia de las relaciones sociales y la comunicación en la cultura española.', answer: 'La sobremesa es el tiempo que las familias y amigos pasan conversando en la mesa después de comer. Es una tradición que refleja la importancia de las relaciones sociales.' },
        { label: 'c', task: 'Du er tolk i et møte mellom norske og colombianske samarbeidspartnere. Den norske siden er frustrert over at colombianerne er 20 minutter «sent». Skriv hva du ville sagt til begge parter (på spansk).', solution: 'A los noruegos: En Colombia, la puntualidad es más flexible que en Noruega. Llegar un poco tarde no se considera una falta de respeto, sino algo normal. A los colombianos: En Noruega, la puntualidad es muy importante en contextos profesionales. Llegar a tiempo es una señal de seriedad y respeto.', answer: 'A los noruegos: La puntualidad es más flexible en Colombia. A los colombianos: En Noruega, la puntualidad es muy importante en contextos profesionales.' },
        { label: 'd', task: 'Reflekter over din egen interkulturelle kompetanse. Skriv på spansk om en situasjon der du opplevde en kulturell forskjell (3-4 setninger).', solution: 'Cuando estuve en España, me sorprendió que la gente hablara tan alto en los restaurantes. Al principio pensé que era descortesía, pero luego entendí que es simplemente la manera normal de comunicarse. Esta experiencia me enseñó que no debemos juzgar otras culturas desde nuestra propia perspectiva.', answer: 'Cuando estuve en España, me sorprendió que la gente hablara tan alto en los restaurantes. Entendí que es simplemente la manera normal de comunicarse.' },
      ], solution: 'a) La «ley de Jante» es un concepto cultural escandinavo que dice que nadie debe creerse mejor que los demás. En la práctica, esto significa que los noruegos valoran la modestia y evitan presumir de sus logros., b) La sobremesa es el tiempo que las familias y amigos pasan conversando en la mesa después de comer. En la cultura hispana, las comidas no son solo para alimentarse, sino para disfrutar de la compañía., c) A los noruegos: En Colombia, la puntualidad es más flexible. A los colombianos: En Noruega, la puntualidad es muy importante en contextos profesionales., d) Cuando estuve en España, me sorprendió que la gente hablara tan alto en los restaurantes. Esta experiencia me enseñó que no debemos juzgar otras culturas desde nuestra propia perspectiva.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-3-tip-1', type: 'tip', content: `**Husk:** Kulturell mediering handler ikke om å si at en kultur er «rett» og en annen «feil». Det handler om å forstå ulike perspektiver og hjelpe andre å gjøre det samme. Empati er nøkkelen!` },
    { id: 'spansk-3-15-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Mediación cultural**

- **Mediering:** Å bygge bruer mellom kulturer gjennom forståelse og formidling
- **Kulturelle forskjeller:** Tid, fysisk nærhet, formalitet, kommunikasjonsstil
- **Nøkkelfraser:** «En la cultura noruega...», «La diferencia se debe a...»
- **Stereotypier:** Unngå generaliseringer, vær nyansert
- **Empati:** Forstå uten å dømme, se fra andres perspektiv` },
  ],
  exercises: [],
};

// 15.4 Adaptación de textos
export const CHAPTER_SPANSK_3_15_4: TextbookChapter = {
  id: 'spansk-3-15-4',
  courseId: 'spansk-3',
  chapterNumber: '15.4',
  title: 'Adaptación de textos',
  subtitle: 'Teksttilpasning: register, målgruppe og sjanger',
  description: 'Lær å tilpasse tekster for ulike formål, målgrupper og sjangre – fra uformelt til akademisk register.',
  estimatedMinutes: 45,
  competenceGoals: ['tilpasse tekster til ulike registre og målgrupper', 'gjenkjenne og mestre ulike sjangre på spansk'],
  content: [
    { id: 'spansk-3-15-4-intro', type: 'text', content: `## Adaptación de textos

Teksttilpasning handler om å formidle det samme budskapet på ulike måter, avhengig av hvem som skal lese teksten, i hvilken situasjon den brukes, og hvilken sjanger som passer. Å mestre ulike registre og sjangre er en sentral del av avansert språkkompetanse.` },
    { id: 'spansk-3-15-4-def-1', type: 'definition', title: 'Teksttilpasningsvokabular (vocabulario de adaptación textual)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| el registro | registeret / stilnivået |
| el registro formal | formelt register |
| el registro informal | uformelt register |
| el/la destinatario/a | mottakeren |
| el público objetivo | målgruppen |
| el género textual | tekstsjangeren |
| el tono | tonen |
| la adecuación | tilpasning (til kontekst) |
| la reformulación | omformulering |
| el resumen | sammendraget |
| la paráfrasis | parafrasering |
| el nivel de lengua | språknivået |` },
    { id: 'spansk-3-15-4-text-1', type: 'text', content: `## Register og stilnivåer

Spansk har tydelige registerforskjeller:

**Uformelt register (registro informal/coloquial):**
- Brukes mellom venner, familie, unge
- *Tú*-form, slang, forkortelser
- *¡Oye, tío! ¿Qué tal? ¿Quedamos mañana?* (Hei, kompis! Hvordan går det? Skal vi treffes i morgen?)

**Nøytralt register (registro estándar):**
- Brukes i media, skole, dagligtale
- Korrekt grammatikk, uten slang
- *Hola, ¿cómo estás? ¿Podemos vernos mañana?* (Hei, hvordan har du det? Kan vi treffes i morgen?)

**Formelt register (registro formal):**
- Brukes i akademia, forretninger, offisielle dokumenter
- *Usted*-form, kompleks setningsstruktur
- *Estimado señor: Le escribo para solicitar una reunión.* (Ærede herr: Jeg skriver for å be om et møte.)

**Akademisk register (registro académico):**
- Vitenskapelige tekster, forskningsrapporter
- Passiv form, nominaliseringer, fagterminologi
- *Se ha demostrado que la hipótesis es válida.* (Det har blitt bevist at hypotesen er gyldig.)` },
    { id: 'spansk-3-15-4-text-2', type: 'text', content: `## Sjangertilpasning

Ulike sjangre krever ulik stil og struktur:

**E-post (correo electrónico):**
- Formell: *Estimado/a... Atentamente...*
- Uformell: *¡Hola! Un abrazo...*

**Blogginnlegg (entrada de blog):**
- Personlig tone, direkte henvendelse til leser
- *¿Alguna vez has pensado en...?* (Har du noen gang tenkt på...?)

**Nyhetsartikkel (artículo periodístico):**
- Nøytralt, objektivt språk
- Invertert pyramide: viktigste info først

**Akademisk essay (ensayo académico):**
- Formelt, argumenterende, med kilder
- Klar tese, argument og konklusjon

**Tilpasningsteknikker:**
1. **Forenkling:** Gjøre en kompleks tekst enklere for et yngre publikum
2. **Formalisering:** Gjøre en uformell tekst mer formell
3. **Omformulering:** Si det samme med andre ord
4. **Oppsummering:** Komprimere en lang tekst til hovedpoengene` },
    { id: 'spansk-3-15-4-example-1', type: 'example', title: 'Eksempel: Samme budskap – ulike registre', problem: `Tilpass budskapet «Jeg kan ikke komme på festen» til tre ulike registre.`, solution: `**Uformelt:** *¡Oye! No puedo ir a la fiesta, ¡qué pena! ¿Quedamos otro día?*\n\n**Nøytralt:** *Lo siento, pero no voy a poder asistir a la fiesta. Espero que lo paséis muy bien.*\n\n**Formelt:** *Lamento informarle de que no me será posible asistir al evento. Le ruego que acepte mis disculpas.*` },
    { id: 'spansk-3-15-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-15-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Hvilket register hører setningen til? Velg: informal, estándar, formal, académico:', subTasks: [
        { label: 'a', task: '¡Oye, tío! ¿Qué tal?', solution: 'Informal (uformelt – slang, tú-form)', answer: 'Informal' },
        { label: 'b', task: 'Estimado señor, le escribo para solicitar...', solution: 'Formal (formelt – usted-form, høflig)', answer: 'Formal' },
        { label: 'c', task: 'Se ha demostrado que la hipótesis es válida.', solution: 'Académico (akademisk – passiv form, fagspråk)', answer: 'Académico' },
        { label: 'd', task: 'Hola, ¿cómo estás? ¿Podemos vernos mañana?', solution: 'Estándar (nøytralt – korrekt, men ikke formelt)', answer: 'Estándar' },
      ], solution: 'a) Informal (uformelt – slang, tú-form), b) Formal (formelt – usted-form, høflig), c) Académico (akademisk – passiv form, fagspråk), d) Estándar (nøytralt – korrekt, men ikke formelt)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-15-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match sjanger med typisk trekk:', subTasks: [
        { label: 'a', task: 'Correo electrónico formal', solution: 'Estimado/a... Atentamente...', answer: 'Estimado/a... Atentamente...' },
        { label: 'b', task: 'Entrada de blog', solution: 'Personlig tone, direkte henvendelse til leser', answer: 'Personlig tone, direkte henvendelse til leser' },
        { label: 'c', task: 'Artículo periodístico', solution: 'Nøytralt språk, viktigste info først', answer: 'Nøytralt språk, viktigste info først' },
        { label: 'd', task: 'Ensayo académico', solution: 'Formelt, argumenterende, med kilder og tese', answer: 'Formelt, argumenterende, med kilder og tese' },
      ], solution: 'a) Estimado/a... Atentamente..., b) Personlig tone, direkte henvendelse til leser, c) Nøytralt språk, viktigste info først, d) Formelt, argumenterende, med kilder og tese', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-15-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Tilpass teksten til angitt register:', subTasks: [
        { label: 'a', task: 'Gjør uformell: «Le informo de que el evento ha sido cancelado.»', solution: '¡Oye! Han cancelado el evento. ¡Qué rollo! (Uformelt med slang og utrop.)', answer: '¡Oye! Han cancelado el evento. ¡Qué rollo!' },
        { label: 'b', task: 'Gjør formell: «¡Oye! ¿Puedes echarme una mano con esto?»', solution: 'Estimado/a colega, ¿sería posible que me ayudara con este asunto? Le agradecería su colaboración. (Formelt med usted-form og høflig formulering.)', answer: '¿Sería posible que me ayudara con este asunto? Le agradecería su colaboración.' },
        { label: 'c', task: 'Gjør akademisk: «Mange folk mener at klimaendringer er farlige.»', solution: 'Diversos estudios han demostrado que el cambio climático representa una amenaza significativa para los ecosistemas globales (González, 2023). (Akademisk med kilde og fagspråk.)', answer: 'Diversos estudios han demostrado que el cambio climático representa una amenaza significativa para los ecosistemas globales.' },
        { label: 'd', task: 'Gjør til blogginnlegg: «El consumo de plástico contamina los océanos.»', solution: '¿Sabías que cada año millones de toneladas de plástico acaban en nuestros océanos? Es hora de que hagamos algo al respecto. Yo he empezado a usar bolsas reutilizables, ¿y tú? (Personlig tone, direkte henvendelse.)', answer: '¿Sabías que cada año millones de toneladas de plástico acaban en nuestros océanos?' },
      ], solution: 'a) ¡Oye! Han cancelado el evento. ¡Qué rollo!, b) ¿Sería posible que me ayudara con este asunto? Le agradecería su colaboración., c) Diversos estudios han demostrado que el cambio climático representa una amenaza significativa para los ecosistemas globales (González, 2023)., d) ¿Sabías que cada año millones de toneladas de plástico acaban en nuestros océanos? Yo he empezado a usar bolsas reutilizables, ¿y tú?', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-15-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Avanserte tilpasningsoppgaver:', subTasks: [
        { label: 'a', task: 'Skriv den samme nyheten i tre registre: «Spania har vedtatt en ny lov om dyrebeskyttelse.» (uformelt, nøytralt, formelt)', solution: 'Uformelt: ¡Por fin! España ha aprobado una ley para proteger a los animales. ¡Ya era hora! Nøytralt: España ha aprobado una nueva ley de protección animal que entrará en vigor el próximo año. Formelt: El Gobierno de España ha promulgado una nueva legislación en materia de bienestar animal, la cual entrará en vigor a partir del próximo ejercicio.', answer: 'Tre versjoner med økende formalitet.' },
        { label: 'b', task: 'Forenkle denne akademiske teksten for en 15-åring: «La correlación estadística entre variables socioeconómicas y rendimiento académico ha sido ampliamente documentada en la literatura científica.»', solution: 'Forskning viser at det er en sammenheng mellom familiens økonomi og hvordan elever gjør det på skolen. / Los estudios muestran que hay una relación entre la economía de la familia y cómo les va a los estudiantes en la escuela.', answer: 'Los estudios muestran que hay una relación entre la economía de la familia y cómo les va a los estudiantes en la escuela.' },
        { label: 'c', task: 'Skriv en formell e-post til en spansk professor der du ber om veiledning til en oppgave (3-4 setninger).', solution: 'Estimado/a profesor/a García: Le escribo para solicitar una tutoría sobre mi trabajo de investigación. Me gustaría discutir la estructura del ensayo y las fuentes bibliográficas. ¿Sería posible reunirnos la próxima semana? Le agradezco de antemano su tiempo. Atentamente, [Nombre].', answer: 'Estimado/a profesor/a García: Le escribo para solicitar una tutoría sobre mi trabajo de investigación. ¿Sería posible reunirnos la próxima semana? Atentamente, [Nombre].' },
        { label: 'd', task: 'Omformuler dette blogginnlegget til en nyhetsartikkel: «¡No vas a creer lo que está pasando en la Amazonía! Los incendios están destruyendo miles de hectáreas y nadie hace nada. ¡Es horrible!»', solution: 'Los incendios forestales en la Amazonía han destruido miles de hectáreas de selva tropical en las últimas semanas. Organizaciones medioambientales han expresado su preocupación ante la falta de medidas efectivas por parte de los gobiernos de la región para combatir la deforestación.', answer: 'Los incendios forestales en la Amazonía han destruido miles de hectáreas de selva tropical. Organizaciones medioambientales han expresado su preocupación.' },
      ], solution: 'a) Tre versjoner med økende formalitet fra uformelt utrop til formelt lovspråk., b) Los estudios muestran que hay una relación entre la economía de la familia y cómo les va a los estudiantes en la escuela., c) Estimado/a profesor/a García: Le escribo para solicitar una tutoría. ¿Sería posible reunirnos la próxima semana? Atentamente., d) Los incendios forestales en la Amazonía han destruido miles de hectáreas. Organizaciones medioambientales han expresado su preocupación.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-15-4-tip-1', type: 'tip', content: `**Husk:** Når du tilpasser tekst, tenk alltid på tre ting: Hvem leser dette? (destinatario), i hvilken situasjon? (contexto), og hva er formålet? (objetivo). Disse tre faktorene bestemmer register og stil.` },
    { id: 'spansk-3-15-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Adaptación de textos**

- **Registre:** Informal, estándar, formal, académico
- **Sjangre:** E-post, blogg, nyhetsartikkel, akademisk essay
- **Tilpasningsteknikker:** Forenkling, formalisering, omformulering, oppsummering
- **Nøkkelspørsmål:** Hvem leser? I hvilken situasjon? Hva er formålet?
- **Kjennetegn:** Tú/usted, ordvalg, setningsstruktur, tone` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 16: ESPAÑOL ACADÉMICO
// ============================================================================

// 16.1 El ensayo argumentativo
export const CHAPTER_SPANSK_3_16_1: TextbookChapter = {
  id: 'spansk-3-16-1',
  courseId: 'spansk-3',
  chapterNumber: '16.1',
  title: 'El ensayo argumentativo',
  subtitle: 'Argumenterende essay: struktur og sammenbinding',
  description: 'Lær å skrive et argumenterende essay på spansk med klar struktur, koherens og effektive bindeord.',
  estimatedMinutes: 45,
  competenceGoals: ['skrive et argumenterende essay med klar struktur', 'bruke sammenbindende uttrykk for koherens og kohesjon'],
  content: [
    { id: 'spansk-3-16-1-intro', type: 'text', content: `## El ensayo argumentativo

Det argumenterende essayet er den viktigste teksttypen i akademisk spansk. Her skal du presentere en tese, argumentere for den med eksempler og bevis, og trekke en logisk konklusjon. Å mestre denne sjangeren er avgjørende for eksamen og videre studier.` },
    { id: 'spansk-3-16-1-def-1', type: 'definition', title: 'Essay-vokabular (vocabulario del ensayo)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| el ensayo | essayet |
| la tesis | tesen / påstanden |
| el argumento | argumentet |
| la evidencia | beviset / belegget |
| el contraargumento | motargumentet |
| la refutación | tilbakevisningen |
| la cohesión | kohesjonen (tekstlig sammenheng) |
| la coherencia | koherensen (logisk sammenheng) |
| el conector | bindeordet |
| el párrafo | avsnittet |
| la introducción | innledningen |
| la conclusión | konklusjonen |` },
    { id: 'spansk-3-16-1-text-1', type: 'text', content: `## Strukturen i et argumenterende essay

**1. Innledning (Introducción):**
- Introduser temaet med en «krok» (pregunta, dato, cita)
- Presenter tesen tydelig
- *En este ensayo se argumentará que...* (I dette essayet vil det bli argumentert for at...)

**2. Hoveddel (Desarrollo):**
- **Avsnitt 1:** Første argument med eksempler/bevis
- **Avsnitt 2:** Andre argument med eksempler/bevis
- **Avsnitt 3:** Motargument og tilbakevisning (contraargumento y refutación)

**3. Konklusjon (Conclusión):**
- Gjenta tesen med andre ord
- Oppsummer de viktigste argumentene
- Avslutt med en refleksjon eller oppfordring
- *En conclusión, se puede afirmar que...* (Avslutningsvis kan man fastslå at...)

**Struktur i hvert avsnitt:**
1. Temasetning (frase temática) – hovedideen
2. Utdyping og eksempler
3. Overgangssetning til neste avsnitt` },
    { id: 'spansk-3-16-1-text-2', type: 'text', content: `## Bindeord og sammenbinding (conectores)

**For å legge til argumenter:**
- *Además...* (Dessuten...)
- *Asimismo...* (Likeledes...)
- *Por otra parte...* (På den annen side...)
- *Cabe añadir que...* (Det kan tilføyes at...)

**For å vise motsetning:**
- *Sin embargo...* (Likevel...)
- *No obstante...* (Ikke desto mindre...)
- *A pesar de que...* (Til tross for at...)
- *Aunque es cierto que..., también...* (Selv om det er sant at..., også...)

**For å gi eksempler:**
- *Por ejemplo...* (For eksempel...)
- *Un caso ilustrativo es...* (Et illustrerende tilfelle er...)
- *Como demuestra el caso de...* (Som tilfellet med... viser...)

**For å konkludere:**
- *En conclusión...* (Avslutningsvis...)
- *En definitiva...* (Til syvende og sist...)
- *Por todo lo expuesto...* (Med alt som er lagt frem...)
- *Se puede afirmar que...* (Man kan fastslå at...)

**For årsak og konsekvens:**
- *Debido a que...* (På grunn av at...)
- *Por consiguiente...* (Følgelig...)
- *Esto conlleva que...* (Dette innebærer at...)` },
    { id: 'spansk-3-16-1-example-1', type: 'example', title: 'Eksempel: Innledning til et essay', problem: `Skriv en innledning til et essay om temaet «Bør bruk av sosiale medier begrenses for unge?»`, solution: `*¿Cuántas horas al día pasa un adolescente mirando su teléfono? Según estudios recientes, los jóvenes dedican una media de cuatro horas diarias a las redes sociales. Esta cifra alarmante plantea una pregunta fundamental: ¿deberíamos limitar el uso de las redes sociales entre los menores? En este ensayo se argumentará que es necesario establecer ciertos límites para proteger la salud mental y el desarrollo social de los jóvenes.*` },
    { id: 'spansk-3-16-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-16-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match bindeordet med riktig funksjon:', subTasks: [
        { label: 'a', task: 'Sin embargo', solution: 'Motsetning (likevel)', answer: 'Motsetning (likevel)' },
        { label: 'b', task: 'Además', solution: 'Tillegg (dessuten)', answer: 'Tillegg (dessuten)' },
        { label: 'c', task: 'Por consiguiente', solution: 'Konsekvens (følgelig)', answer: 'Konsekvens (følgelig)' },
        { label: 'd', task: 'En conclusión', solution: 'Avslutning (avslutningsvis)', answer: 'Avslutning (avslutningsvis)' },
      ], solution: 'a) Motsetning (likevel), b) Tillegg (dessuten), c) Konsekvens (følgelig), d) Avslutning (avslutningsvis)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-16-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig bindeord:', subTasks: [
        { label: 'a', task: 'Las redes sociales tienen ventajas. ___, también presentan riesgos. (Likevel)', solution: 'Sin embargo', answer: 'Sin embargo' },
        { label: 'b', task: 'El cambio climático afecta a la agricultura. ___, debemos actuar. (Følgelig)', solution: 'Por consiguiente', answer: 'Por consiguiente' },
        { label: 'c', task: 'La educación es importante. ___, la salud es fundamental. (Likeledes)', solution: 'Asimismo', answer: 'Asimismo' },
        { label: 'd', task: '___ que llueva mucho, iremos de excursión. (Til tross for at)', solution: 'A pesar de', answer: 'A pesar de' },
      ], solution: 'a) Sin embargo, b) Por consiguiente, c) Asimismo, d) A pesar de', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-16-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv essaydeler på spansk:', subTasks: [
        { label: 'a', task: 'Skriv en tese om temaet «Bør skoleuniform være obligatorisk?»', solution: 'En este ensayo se argumentará que el uso obligatorio del uniforme escolar fomenta la igualdad entre los estudiantes y reduce la presión social relacionada con la vestimenta.', answer: 'El uso obligatorio del uniforme escolar fomenta la igualdad entre los estudiantes.' },
        { label: 'b', task: 'Skriv et argument FOR skoleuniform med eksempel.', solution: 'En primer lugar, el uniforme elimina las diferencias visibles entre estudiantes de distintos niveles económicos. Por ejemplo, en países como Japón y el Reino Unido, donde el uniforme es obligatorio, los estudiantes reportan menos casos de acoso relacionado con la ropa.', answer: 'El uniforme elimina las diferencias visibles entre estudiantes de distintos niveles económicos.' },
        { label: 'c', task: 'Skriv et motargument og tilbakevisning.', solution: 'Algunos argumentan que el uniforme limita la libertad de expresión de los jóvenes. Sin embargo, la identidad personal se puede expresar de muchas otras formas, como a través del arte, la música y las actividades extracurriculares. La vestimenta no es la única forma de expresión.', answer: 'Algunos argumentan que limita la libertad de expresión. Sin embargo, la identidad se puede expresar de muchas otras formas.' },
        { label: 'd', task: 'Skriv en konklusjon til essayet.', solution: 'En conclusión, aunque el debate sobre el uniforme escolar es complejo, los beneficios de igualdad y reducción de la presión social superan las desventajas. Se puede afirmar que el uniforme contribuye a un ambiente escolar más inclusivo y centrado en el aprendizaje.', answer: 'En conclusión, los beneficios de igualdad y reducción de la presión social superan las desventajas.' },
      ], solution: 'a) El uso obligatorio del uniforme escolar fomenta la igualdad entre los estudiantes y reduce la presión social., b) El uniforme elimina las diferencias visibles entre estudiantes de distintos niveles económicos. Por ejemplo, en países como Japón y el Reino Unido, los estudiantes reportan menos acoso., c) Algunos argumentan que limita la libertad de expresión. Sin embargo, la identidad se puede expresar de muchas otras formas., d) En conclusión, los beneficios de igualdad y reducción de la presión social superan las desventajas.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-16-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et komplett kort essay (innledning + 1 argument + motargument + konklusjon):', subTasks: [
        { label: 'a', task: 'Tema: «Bør alle unge lære programmering på skolen?» – Skriv innledningen.', solution: 'En un mundo cada vez más digitalizado, surge la pregunta: ¿deberían todos los jóvenes aprender programación en la escuela? En este ensayo se argumentará que la programación debería ser una asignatura obligatoria, ya que desarrolla habilidades fundamentales para el siglo XXI.', answer: '¿Deberían todos los jóvenes aprender programación? Se argumentará que sí, ya que desarrolla habilidades fundamentales para el siglo XXI.' },
        { label: 'b', task: 'Skriv hovedargumentet med bevis.', solution: 'En primer lugar, la programación desarrolla el pensamiento lógico y la capacidad de resolver problemas. Según un estudio de la Universidad de Stanford, los estudiantes que aprenden a programar mejoran significativamente en matemáticas y ciencias. Además, la competencia digital es esencial en prácticamente todos los campos profesionales del futuro.', answer: 'La programación desarrolla el pensamiento lógico. Los estudiantes que aprenden a programar mejoran en matemáticas y ciencias.' },
        { label: 'c', task: 'Skriv motargumentet og tilbakevisningen.', solution: 'No obstante, algunos critican que no todos los alumnos tienen interés en la tecnología y que se debería priorizar otras materias. Sin embargo, aprender programación no significa convertirse en programador, sino adquirir una forma de pensar analítica que es útil en cualquier profesión. Asimismo, la alfabetización digital es tan importante como la lectoescritura en el mundo actual.', answer: 'Algunos critican que no todos tienen interés en la tecnología. Sin embargo, aprender programación es adquirir pensamiento analítico útil en cualquier profesión.' },
        { label: 'd', task: 'Skriv konklusjonen.', solution: 'En conclusión, incluir la programación como asignatura obligatoria prepara a los jóvenes para un futuro digital y desarrolla competencias transversales valiosas. Por todo lo expuesto, se puede afirmar que esta medida beneficiaría tanto a los estudiantes como a la sociedad en su conjunto.', answer: 'En conclusión, incluir la programación prepara a los jóvenes para un futuro digital y desarrolla competencias transversales valiosas.' },
      ], solution: 'a) Se argumentará que la programación debería ser obligatoria ya que desarrolla habilidades fundamentales., b) La programación desarrolla el pensamiento lógico. Según estudios, mejora resultados en matemáticas y ciencias., c) Algunos critican la falta de interés. Sin embargo, es una forma de pensar analítica útil en cualquier profesión., d) Incluir la programación prepara a los jóvenes para un futuro digital y desarrolla competencias transversales valiosas.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-1-tip-1', type: 'tip', content: `**Husk:** Et godt essay har alltid et motargument. Det viser at du har vurdert ulike perspektiver og styrker tesen din. Bruk strukturen: motargument → «sin embargo» → tilbakevisning.` },
    { id: 'spansk-3-16-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: El ensayo argumentativo**

- **Struktur:** Introducción (tese) → Desarrollo (argumenter + motargument) → Conclusión
- **Bindeord:** Además, sin embargo, por consiguiente, en conclusión
- **Hvert avsnitt:** Temasetning → utdyping → overgang
- **Motargument:** Vis at du kjenner andre perspektiver, men tilbakevis dem
- **Konklusjon:** Gjenta tesen med andre ord, oppsummer, reflekter` },
  ],
  exercises: [],
};

// 16.2 Investigación y fuentes
export const CHAPTER_SPANSK_3_16_2: TextbookChapter = {
  id: 'spansk-3-16-2',
  courseId: 'spansk-3',
  chapterNumber: '16.2',
  title: 'Investigación y fuentes',
  subtitle: 'Forskning og kildebruk i akademisk spansk',
  description: 'Lær å finne, vurdere og referere til kilder i akademiske tekster på spansk, og utvikle kritisk leseferdighet.',
  estimatedMinutes: 45,
  competenceGoals: ['finne og vurdere spanske akademiske kilder', 'referere korrekt til kilder i akademisk tekst'],
  content: [
    { id: 'spansk-3-16-2-intro', type: 'text', content: `## Investigación y fuentes

I akademisk skriving er det avgjørende å bygge argumentene dine på solide kilder. Å vite hvordan du finner, vurderer og refererer til kilder på spansk er en ferdighet som løfter tekstene dine fra personlige meninger til faglig funderte argumenter.` },
    { id: 'spansk-3-16-2-def-1', type: 'definition', title: 'Forskningsvokabular (vocabulario de investigación)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la fuente | kilden |
| la fuente primaria | primærkilden |
| la fuente secundaria | sekundærkilden |
| la bibliografía | litteraturlisten |
| la referencia | referansen |
| la cita textual | direkte sitat |
| la paráfrasis | parafrasering |
| el plagio | plagiat |
| la fiabilidad | pålitelighet |
| el artículo de investigación | forskningsartikkelen |
| el autor / la autora | forfatteren |
| la base de datos | databasen |` },
    { id: 'spansk-3-16-2-text-1', type: 'text', content: `## Å finne og vurdere kilder

**Hvor finne spanskspråklige kilder:**
- **Dialnet** (dialnet.unirioja.es) – Spansk database med akademiske artikler
- **Redalyc** (redalyc.org) – Latinamerikansk vitenskapelig database
- **SciELO** (scielo.org) – Åpen tilgang til forskningsartikler
- **Google Académico** (scholar.google.es) – Googles akademiske søkemotor
- **Cervantes Virtual** (cervantesvirtual.com) – Spansk litteratur og kultur

**Kriterier for å vurdere kilder (CRAAP-test):**
- *Actualidad* (aktualitet): Er kilden oppdatert?
- *Relevancia* (relevans): Er kilden relevant for temaet ditt?
- *Autoridad* (autoritet): Hvem er forfatteren? Hvilken institusjon?
- *Exactitud* (nøyaktighet): Er informasjonen korrekt og verifiserbar?
- *Propósito* (formål): Hva er formålet med teksten? Er den objektiv?` },
    { id: 'spansk-3-16-2-text-2', type: 'text', content: `## Å referere til kilder i tekst

**Direkte sitat (cita textual):**
Brukes når du gjengir forfatterens nøyaktige ord.
- *Según García (2023), «la educación es la base del desarrollo social» (p. 45).*
- *«El cambio climático es el mayor desafío de nuestra época» (Martínez, 2022, p. 12).*

**Parafrasering (paráfrasis):**
Brukes når du gjengir innholdet med egne ord.
- *García (2023) argumenterer for at utdanning er grunnlaget for sosial utvikling.*
- *Ifølge Martínez (2022) er klimaendringer den største utfordringen i vår tid.*

**Formuleringer for å referere til kilder:**
- *Según [autor]...* (Ifølge [forfatter]...)
- *Como señala [autor]...* (Som [forfatter] påpeker...)
- *[Autor] sostiene que...* ([Forfatter] hevder at...)
- *De acuerdo con [autor]...* (I samsvar med [forfatter]...)
- *En palabras de [autor]...* (Med [forfatters] ord...)

**Plagiat (plagio):**
Å bruke andres ideer uten å oppgi kilde er plagiat. Alltid:
1. Oppgi kilde ved sitat og parafrasering
2. Bruk anførselstegn ved direkte sitat
3. Lag en komplett bibliografi` },
    { id: 'spansk-3-16-2-example-1', type: 'example', title: 'Eksempel: Sitat vs. parafrasering', problem: `Originaltekst: «Los jóvenes que leen regularmente desarrollan mejores habilidades de comunicación» (López, 2024, p. 78). Skriv dette som a) direkte sitat og b) parafrasering.`, solution: `**a) Direkte sitat:** Según López (2024), «los jóvenes que leen regularmente desarrollan mejores habilidades de comunicación» (p. 78).\n\n**b) Parafrasering:** López (2024) hevder at unge som leser jevnlig utvikler bedre kommunikasjonsferdigheter.` },
    { id: 'spansk-3-16-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-16-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match kildebruk-begrep med definisjon:', subTasks: [
        { label: 'a', task: 'la cita textual', solution: 'direkte sitat – gjengir forfatterens nøyaktige ord', answer: 'direkte sitat – gjengir forfatterens nøyaktige ord' },
        { label: 'b', task: 'la paráfrasis', solution: 'parafrasering – gjengir innholdet med egne ord', answer: 'parafrasering – gjengir innholdet med egne ord' },
        { label: 'c', task: 'el plagio', solution: 'plagiat – bruke andres ideer uten å oppgi kilde', answer: 'plagiat – bruke andres ideer uten å oppgi kilde' },
        { label: 'd', task: 'la bibliografía', solution: 'litteraturlisten – oversikt over alle brukte kilder', answer: 'litteraturlisten – oversikt over alle brukte kilder' },
      ], solution: 'a) direkte sitat – gjengir forfatterens nøyaktige ord, b) parafrasering – gjengir innholdet med egne ord, c) plagiat – bruke andres ideer uten å oppgi kilde, d) litteraturlisten – oversikt over alle brukte kilder', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-16-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig frase for å referere til kilde:', subTasks: [
        { label: 'a', task: '___ García (2023), la educación es fundamental. (Ifølge)', solution: 'Según', answer: 'Según' },
        { label: 'b', task: '___ señala Martínez (2022), el problema es grave. (Som... påpeker)', solution: 'Como', answer: 'Como' },
        { label: 'c', task: 'López (2024) ___ que la lectura mejora las habilidades. (hevder)', solution: 'sostiene', answer: 'sostiene' },
        { label: 'd', task: '___ con el informe de la ONU... (I samsvar med)', solution: 'De acuerdo', answer: 'De acuerdo' },
      ], solution: 'a) Según, b) Como, c) sostiene, d) De acuerdo', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-16-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Kildevurdering og referering:', subTasks: [
        { label: 'a', task: 'Hvilke kriterier bruker du for å vurdere om en kilde er pålitelig?', solution: 'Aktualitet (er den oppdatert?), relevans (passer den temaet?), autoritet (hvem er forfatteren?), nøyaktighet (er informasjonen korrekt?) og formål (er teksten objektiv?).', answer: 'Aktualitet, relevans, autoritet, nøyaktighet og formål.' },
        { label: 'b', task: 'Parafraser dette sitatet: «La tecnología ha transformado completamente la manera en que nos comunicamos» (Pérez, 2023, p. 34).', solution: 'Según Pérez (2023), teknologien har fullstendig forandret måten vi kommuniserer på. / Pérez (2023) señala que la tecnología ha cambiado radicalmente nuestras formas de comunicación.', answer: 'Pérez (2023) señala que la tecnología ha cambiado radicalmente nuestras formas de comunicación.' },
        { label: 'c', task: 'Hva er forskjellen mellom en primærkilde og en sekundærkilde?', solution: 'En primærkilde er originalverket (f.eks. en roman, et forskningseksperiment). En sekundærkilde analyserer eller kommenterer primærkilden (f.eks. en bokanmeldelse, en metaanalyse).', answer: 'Primærkilde: originalverket. Sekundærkilde: analyserer eller kommenterer primærkilden.' },
        { label: 'd', task: 'Nevn tre spanskspråklige databaser for akademiske kilder.', solution: 'Dialnet (spansk database), Redalyc (latinamerikansk database) og SciELO (åpen tilgang til forskningsartikler fra Latin-Amerika og Spania).', answer: 'Dialnet, Redalyc og SciELO.' },
      ], solution: 'a) Aktualitet, relevans, autoritet, nøyaktighet og formål., b) Pérez (2023) señala que la tecnología ha cambiado radicalmente nuestras formas de comunicación., c) Primærkilde: originalverket. Sekundærkilde: analyserer eller kommenterer primærkilden., d) Dialnet, Redalyc og SciELO.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-16-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Avansert kildebruk:', subTasks: [
        { label: 'a', task: 'Skriv et avsnitt (3-4 setninger) med to kildhenvisninger om temaet utdanning og teknologi.', solution: 'Según García (2023), la integración de la tecnología en las aulas ha mejorado significativamente el rendimiento académico de los estudiantes. Sin embargo, Martínez (2022) advierte que el uso excesivo de dispositivos puede afectar negativamente la concentración. Por consiguiente, es necesario encontrar un equilibrio entre la innovación digital y los métodos pedagógicos tradicionales.', answer: 'Según García (2023), la tecnología mejora el rendimiento. Sin embargo, Martínez (2022) advierte sobre el uso excesivo.' },
        { label: 'b', task: 'Vurder denne kilden: En bloggpost skrevet av en anonym person i 2015 om klimaendringer. Er den pålitelig? Begrunn.', solution: 'Kilden er lite pålitelig fordi: 1) Den er anonym – ingen autoritet. 2) Den er fra 2015 – ikke oppdatert i et felt som endrer seg raskt. 3) En bloggpost er ikke fagfellevurdert. Man bør i stedet bruke vitenskapelige artikler fra anerkjente tidsskrifter.', answer: 'Lite pålitelig: anonym forfatter, utdatert (2015), ikke fagfellevurdert.' },
        { label: 'c', task: 'Skriv en kort bibliografioppføring for en bok: Forfatter: María López, Tittel: «La educación del futuro», År: 2024, Forlag: Editorial Planeta, Sted: Madrid.', solution: 'López, M. (2024). La educación del futuro. Madrid: Editorial Planeta.', answer: 'López, M. (2024). La educación del futuro. Madrid: Editorial Planeta.' },
        { label: 'd', task: 'Er dette plagiat? «Utdanning er grunnlaget for sosial utvikling. Det er viktig å investere i skoler.» (Originalkilden sa: «La educación es la base del desarrollo social. Es fundamental invertir en las escuelas.»)', solution: 'Ja, dette er plagiat – det er en direkte oversettelse uten kildehenvisning. Riktig ville være: Ifølge García (2023) er utdanning grunnlaget for sosial utvikling, og det er viktig å investere i skoler (s. 45).', answer: 'Ja, det er plagiat – direkte oversettelse uten kilde. Man må oppgi forfatter, år og sidetall.' },
      ], solution: 'a) Et avsnitt med to kildehenvisninger om teknologi og utdanning., b) Lite pålitelig: anonym, utdatert, ikke fagfellevurdert., c) López, M. (2024). La educación del futuro. Madrid: Editorial Planeta., d) Ja, det er plagiat. Man må oppgi forfatter, år og sidetall.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-2-tip-1', type: 'tip', content: `**Husk:** Når du er i tvil, oppgi alltid kilden. Det er bedre å referere for mye enn for lite. Og husk: å parafrasere betyr ikke bare å bytte ut noen ord – du må virkelig formulere ideen med dine egne ord.` },
    { id: 'spansk-3-16-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Investigación y fuentes**

- **Databaser:** Dialnet, Redalyc, SciELO, Google Académico
- **Kildevurdering:** Aktualitet, relevans, autoritet, nøyaktighet, formål
- **Direkte sitat:** Bruk anførselstegn og oppgi forfatter, år og side
- **Parafrasering:** Gjengi med egne ord, men oppgi fortsatt kilde
- **Plagiat:** Bruk andres ideer uten å oppgi kilde – alltid uakseptabelt` },
  ],
  exercises: [],
};

// 16.3 Registro formal y académico
export const CHAPTER_SPANSK_3_16_3: TextbookChapter = {
  id: 'spansk-3-16-3',
  courseId: 'spansk-3',
  chapterNumber: '16.3',
  title: 'Registro formal y académico',
  subtitle: 'Formelt og akademisk register på spansk',
  description: 'Mestre formelt og akademisk register med nominaliseringer, passiv form og avansert setningsstruktur.',
  estimatedMinutes: 45,
  competenceGoals: ['skrive i formelt og akademisk register på spansk', 'bruke nominaliseringer, passiv og kompleks setningsstruktur'],
  content: [
    { id: 'spansk-3-16-3-intro', type: 'text', content: `## Registro formal y académico

Formelt og akademisk spansk skiller seg markant fra dagligspråket. Det kjennetegnes av presist ordvalg, kompleks setningsstruktur, nominaliseringer og upersonlige konstruksjoner. Å beherske dette registeret er nødvendig for akademisk skriving, formelle brev og profesjonell kommunikasjon.` },
    { id: 'spansk-3-16-3-def-1', type: 'definition', title: 'Akademisk registervokabular (vocabulario del registro académico)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la nominalización | nominalisering |
| la voz pasiva | passiv form |
| la construcción impersonal | upersonlig konstruksjon |
| el léxico especializado | fagordforråd |
| la subordinación | underordning (leddsetninger) |
| la precisión léxica | leksikalsk presisjon |
| el estilo impersonal | upersonlig stil |
| la objetividad | objektivitet |
| la formalidad | formalitet |
| la oración compuesta | sammensatt setning |
| el tecnicismo | fagterm |
| la modalización | modalitet (grad av sikkerhet) |` },
    { id: 'spansk-3-16-3-text-1', type: 'text', content: `## Kjennetegn ved akademisk register

**1. Nominaliseringer:**
Å gjøre verb om til substantiv gir en mer formell tone.
- Uformelt: *Los científicos descubrieron algo nuevo.* (Forskerne oppdaget noe nytt.)
- Akademisk: *El descubrimiento de nuevos hallazgos...* (Oppdagelsen av nye funn...)

Vanlige nominaliseringer:
- *investigar → la investigación* (forske → forskning)
- *desarrollar → el desarrollo* (utvikle → utvikling)
- *analizar → el análisis* (analysere → analyse)
- *evaluar → la evaluación* (evaluere → evaluering)
- *participar → la participación* (delta → deltakelse)

**2. Passiv form:**
- *Se realizó un estudio...* (Det ble gjennomført en studie...)
- *Los datos fueron analizados...* (Dataene ble analysert...)
- *Ha sido demostrado que...* (Det har blitt bevist at...)

**3. Upersonlige konstruksjoner:**
- *Se puede afirmar que...* (Man kan fastslå at...)
- *Es necesario considerar que...* (Det er nødvendig å vurdere at...)
- *Cabe destacar que...* (Det bør fremheves at...)` },
    { id: 'spansk-3-16-3-text-2', type: 'text', content: `## Fra uformelt til akademisk

**Ordvalg – velg det presise ordet:**
- *ting* → *aspecto, factor, elemento* (ikke *cosa*)
- *mye* → *considerablemente, significativamente* (ikke *mucho*)
- *bra* → *beneficioso, favorable, positivo* (ikke *bueno*)
- *dårlig* → *perjudicial, desfavorable, negativo* (ikke *malo*)
- *si* → *en caso de que, siempre y cuando* (ikke bare *si*)

**Setningsstruktur – bruk underordning:**
- Uformelt: *El problema es grave. Debemos actuar.*
- Akademisk: *Dado que el problema es de considerable gravedad, resulta imperativo tomar medidas inmediatas.*

**Modalitet – vis grad av sikkerhet:**
- Sikker: *Se ha demostrado que...* (Det er bevist at...)
- Sannsynlig: *Es probable que...* (Det er sannsynlig at...)
- Mulig: *Podría argumentarse que...* (Det kunne argumenteres for at...)
- Forsiktig: *Los datos parecen indicar que...* (Dataene synes å indikere at...)

**Unngå i akademisk spansk:**
- Førsteperson (*yo creo*) → Bruk upersonlig (*se puede considerar*)
- Slang og forkortelser
- Retoriske spørsmål (i noen sjangre)
- Overdrivelser (*increíble*, *fatal*)` },
    { id: 'spansk-3-16-3-example-1', type: 'example', title: 'Eksempel: Uformelt til akademisk', problem: `Omskriv denne uformelle teksten til akademisk register:\n\n*«Yo creo que las redes sociales son malas para los jóvenes. Hay muchos estudios que dicen que es un problema gordo. Tenemos que hacer algo ya.»*`, solution: `**Akademisk versjon:** *Se puede argumentar que las redes sociales tienen un impacto perjudicial en el bienestar de los jóvenes. Numerosos estudios han demostrado que el uso excesivo de estas plataformas constituye un problema significativo para la salud mental de los adolescentes (García, 2023). Por consiguiente, resulta imperativo implementar medidas regulatorias a corto plazo.*` },
    { id: 'spansk-3-16-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-16-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Lag nominalisering av verbene:', subTasks: [
        { label: 'a', task: 'investigar (forske)', solution: 'la investigación (forskning)', answer: 'la investigación' },
        { label: 'b', task: 'desarrollar (utvikle)', solution: 'el desarrollo (utvikling)', answer: 'el desarrollo' },
        { label: 'c', task: 'evaluar (evaluere)', solution: 'la evaluación (evaluering)', answer: 'la evaluación' },
        { label: 'd', task: 'participar (delta)', solution: 'la participación (deltakelse)', answer: 'la participación' },
      ], solution: 'a) la investigación, b) el desarrollo, c) la evaluación, d) la participación', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-16-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Erstatt det uformelle ordet med et akademisk alternativ:', subTasks: [
        { label: 'a', task: 'cosa (ting)', solution: 'aspecto / factor / elemento', answer: 'aspecto / factor / elemento' },
        { label: 'b', task: 'mucho (mye)', solution: 'considerablemente / significativamente', answer: 'considerablemente / significativamente' },
        { label: 'c', task: 'bueno (bra)', solution: 'beneficioso / favorable / positivo', answer: 'beneficioso / favorable / positivo' },
        { label: 'd', task: 'malo (dårlig)', solution: 'perjudicial / desfavorable / negativo', answer: 'perjudicial / desfavorable / negativo' },
      ], solution: 'a) aspecto / factor / elemento, b) considerablemente / significativamente, c) beneficioso / favorable / positivo, d) perjudicial / desfavorable / negativo', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-16-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Omskriv til akademisk register:', subTasks: [
        { label: 'a', task: 'Omskriv: «Yo creo que el cambio climático es muy malo.»', solution: 'Se puede argumentar que el cambio climático tiene consecuencias significativamente perjudiciales para el medio ambiente.', answer: 'Se puede argumentar que el cambio climático tiene consecuencias significativamente perjudiciales.' },
        { label: 'b', task: 'Omskriv: «Los científicos encontraron cosas interesantes.»', solution: 'Los hallazgos de la investigación revelaron aspectos de considerable interés científico.', answer: 'Los hallazgos de la investigación revelaron aspectos de considerable interés científico.' },
        { label: 'c', task: 'Omskriv: «Hay que hacer más estudios sobre este tema.»', solution: 'Resulta necesario llevar a cabo investigaciones adicionales en este ámbito.', answer: 'Resulta necesario llevar a cabo investigaciones adicionales en este ámbito.' },
        { label: 'd', task: 'Omskriv: «La gente piensa que la educación es buena.»', solution: 'Existe un consenso generalizado sobre los efectos beneficiosos de la educación en el desarrollo social.', answer: 'Existe un consenso generalizado sobre los efectos beneficiosos de la educación.' },
      ], solution: 'a) Se puede argumentar que el cambio climático tiene consecuencias significativamente perjudiciales para el medio ambiente., b) Los hallazgos de la investigación revelaron aspectos de considerable interés científico., c) Resulta necesario llevar a cabo investigaciones adicionales en este ámbito., d) Existe un consenso generalizado sobre los efectos beneficiosos de la educación en el desarrollo social.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-16-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Avanserte oppgaver i akademisk register:', subTasks: [
        { label: 'a', task: 'Skriv et akademisk avsnitt (3-4 setninger) om ungdom og sosiale medier. Bruk minst to nominaliseringer og en passiv konstruksjon.', solution: 'La utilización de las redes sociales entre los jóvenes ha sido objeto de numerosos estudios en los últimos años. Se ha demostrado que el consumo excesivo de estas plataformas puede tener repercusiones negativas en el desarrollo emocional de los adolescentes. La implementación de programas educativos sobre el uso responsable de la tecnología resulta, por tanto, de considerable importancia.', answer: 'Et avsnitt med nominaliseringer (utilización, implementación) og passiv (se ha demostrado).' },
        { label: 'b', task: 'Omskriv denne avisteksten til akademisk stil: «¡Increíble! Los jóvenes españoles leen menos que nunca. Los expertos dicen que es culpa de los móviles.»', solution: 'Datos recientes revelan un descenso significativo en los hábitos de lectura entre los jóvenes españoles. Diversos expertos atribuyen esta tendencia al incremento en el uso de dispositivos móviles, los cuales compiten con la lectura tradicional como forma de entretenimiento.', answer: 'Datos recientes revelan un descenso significativo en los hábitos de lectura. Expertos atribuyen esta tendencia al incremento en el uso de dispositivos móviles.' },
        { label: 'c', task: 'Skriv tre setninger med økende grad av sikkerhet om sammenhengen mellom fysisk aktivitet og helse.', solution: 'Los datos parecen sugerir una correlación entre la actividad física y el bienestar general. Es probable que el ejercicio regular contribuya a la reducción del estrés. Se ha demostrado que la actividad física tiene efectos beneficiosos sobre la salud cardiovascular.', answer: 'Parecen sugerir (forsiktig) → Es probable (sannsynlig) → Se ha demostrado (bevist).' },
        { label: 'd', task: 'Skriv en akademisk innledning til et essay om utdanningssystemet i Spania (3-4 setninger).', solution: 'El sistema educativo español ha experimentado transformaciones significativas en las últimas décadas. La implementación de sucesivas reformas legislativas ha generado un debate constante sobre la calidad de la enseñanza. En el presente ensayo se analizarán los principales desafíos que enfrenta la educación en España, con especial atención a la brecha entre la formación académica y las necesidades del mercado laboral.', answer: 'El sistema educativo español ha experimentado transformaciones significativas. Se analizarán los principales desafíos con especial atención a la brecha formación-mercado laboral.' },
      ], solution: 'a) Et avsnitt med nominaliseringer og passiv om ungdom og sosiale medier., b) Datos revelan un descenso significativo en los hábitos de lectura. Expertos atribuyen esta tendencia al uso de dispositivos móviles., c) Tre setninger med økende sikkerhet (parecen sugerir → es probable → se ha demostrado)., d) El sistema educativo español ha experimentado transformaciones significativas. Se analizarán los principales desafíos.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-3-tip-1', type: 'tip', content: `**Husk:** Akademisk skriving betyr ikke å skrive så komplisert som mulig. Målet er klarhet og presisjon. Bruk fagtermer når de er nødvendige, men unngå å gjøre teksten unødvendig vanskelig å lese.` },
    { id: 'spansk-3-16-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Registro formal y académico**

- **Nominaliseringer:** Verb → substantiv for formell tone (investigar → investigación)
- **Passiv:** Se realizó, fue demostrado, ha sido analizado
- **Upersonlig:** Se puede, es necesario, cabe destacar
- **Ordvalg:** Presist og formelt (cosa → aspecto, mucho → significativamente)
- **Modalitet:** Vis grad av sikkerhet (se ha demostrado → es probable → parece)
- **Mål:** Klarhet, presisjon og objektivitet` },
  ],
  exercises: [],
};

// 16.4 Autoevaluación nivel III avanzado
export const CHAPTER_SPANSK_3_16_4: TextbookChapter = {
  id: 'spansk-3-16-4',
  courseId: 'spansk-3',
  chapterNumber: '16.4',
  title: 'Autoevaluación nivel III avanzado',
  subtitle: 'Egenvurdering og videre læring',
  description: 'Reflekter over ditt eget nivå, identifiser styrker og forbedringsområder, og lag en plan for videre spansklæring.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere eget språknivå og identifisere forbedringsområder', 'reflektere over egen læringsprosess og sette mål for videre utvikling'],
  content: [
    { id: 'spansk-3-16-4-intro', type: 'text', content: `## Autoevaluación nivel III avanzado

Du er nå ved slutten av Spansk Nivå III. Gjennom dette kurset har du utviklet avanserte ferdigheter i lesing, skriving, lytting og muntlig kommunikasjon på spansk. I dette siste kapittelet reflekterer du over hva du har lært, identifiserer dine styrker og svakheter, og lager en plan for videre læring.` },
    { id: 'spansk-3-16-4-def-1', type: 'definition', title: 'Egenvurderingsvokabular (vocabulario de autoevaluación)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la autoevaluación | egenvurdering |
| los puntos fuertes | sterke sider |
| los puntos débiles | svake sider |
| el nivel de competencia | ferdighetsnivået |
| la mejora | forbedring |
| el progreso | fremgangen |
| la estrategia de aprendizaje | læringsstrategien |
| la reflexión | refleksjon |
| el objetivo | målet |
| la retroalimentación | tilbakemelding |
| la fluidez | flyt (i tale/skrift) |
| la precisión | presisjon / nøyaktighet |` },
    { id: 'spansk-3-16-4-text-1', type: 'text', content: `## Hva har du lært i Spansk Nivå III?

Gjennom kurset har du arbeidet med:

**Språkferdigheter:**
- Lese og forstå avanserte tekster (vitenskapelige artikler, litteratur, debattinnlegg)
- Skrive akademiske tekster (essay, formelle brev, analyser)
- Diskutere komplekse temaer muntlig (etikk, samfunn, kultur)
- Forstå ulike registre og tilpasse språket etter kontekst

**Grammatikk og struktur:**
- Subjuntivo i alle tider
- Condicional og irreale setninger
- Passiv form og upersonlige konstruksjoner
- Kompleks setningsstruktur med underordning

**Kultur og samfunn:**
- Spansktalende lands historie, politikk og samfunn
- Interkulturell kompetanse og kulturell mediering
- Spansk i vitenskapelig og akademisk kontekst

**Strategier:**
- Oversettelsesteknikker og kontrastiv analyse
- Kildebruk og akademisk redelighet
- Presentasjonsteknikker og argumentasjon

Bruk **CEFR** (det europeiske rammeverket) for å vurdere ditt nivå:
- **B1:** Kan forstå hovedpoengene i klart standardspråk
- **B2:** Kan forstå komplekse tekster og delta i diskusjoner
- **C1:** Kan uttrykke seg flytende, presist og nyansert` },
    { id: 'spansk-3-16-4-text-2', type: 'text', content: `## Veien videre – slik fortsetter du å lære

**1. Les mye og variert:**
- Aviser: *El País*, *La Nación*, *El Universal*
- Litteratur: Gabriel García Márquez, Isabel Allende, Javier Marías
- Podcaster: *Radio Ambulante*, *Hoy hablamos*, *Españolistos*

**2. Skriv regelmessig:**
- Før dagbok på spansk
- Skriv leserbrev eller blogginnlegg
- Delta i skriveforum på nett

**3. Snakk spansk aktivt:**
- Språktandem: finn en spansktalende partner
- Språkreiser: opphold i et spansktalende land
- Online-samtaler: plattformer som italki eller Tandem

**4. Sett konkrete mål:**
- *Quiero poder leer un libro entero en español.* (Jeg vil kunne lese en hel bok på spansk.)
- *Mi objetivo es mantener una conversación de 30 minutos sin dificultad.* (Målet mitt er å ha en samtale på 30 minutter uten problemer.)
- *Quiero aprobar el examen DELE B2/C1.* (Jeg vil bestå DELE B2/C1-eksamen.)

**5. Bruk spansk i hverdagen:**
- Endre språkinnstillinger på telefonen
- Se serier og filmer med spansk tale (og spansk teksting!)
- Lytt til spansk musikk og les tekstene` },
    { id: 'spansk-3-16-4-example-1', type: 'example', title: 'Eksempel: Egenvurdering', problem: `Skriv en kort egenvurdering på spansk der du beskriver dine sterke og svake sider i spansk.`, solution: `*Mis puntos fuertes son la comprensión lectora y el vocabulario. Puedo leer artículos de periódicos y entender la mayoría del contenido. Sin embargo, mis puntos débiles son la expresión oral y la gramática avanzada, especialmente el uso del subjuntivo. Mi objetivo para el próximo año es mejorar mi fluidez oral practicando con un compañero de idiomas.*` },
    { id: 'spansk-3-16-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-16-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Vurder ditt eget nivå i ulike ferdigheter (velg: básico, intermedio, avanzado):', subTasks: [
        { label: 'a', task: 'Comprensión lectora (leseforståelse): Kan du lese og forstå avanserte tekster?', solution: 'Svar individuelt. Eksempel: Avanzado – puedo leer artículos académicos y entender la mayoría del contenido.', answer: 'Individuelt svar basert på eget nivå.' },
        { label: 'b', task: 'Expresión escrita (skriftlig produksjon): Kan du skrive akademiske tekster?', solution: 'Svar individuelt. Eksempel: Intermedio – puedo escribir ensayos con estructura clara, pero a veces cometo errores gramaticales.', answer: 'Individuelt svar basert på eget nivå.' },
        { label: 'c', task: 'Comprensión auditiva (lytteforståelse): Kan du forstå spansktalende i normal hastighet?', solution: 'Svar individuelt. Eksempel: Intermedio – entiendo películas con subtítulos en español, pero me cuesta entender conversaciones rápidas.', answer: 'Individuelt svar basert på eget nivå.' },
        { label: 'd', task: 'Expresión oral (muntlig produksjon): Kan du delta i diskusjoner om komplekse temaer?', solution: 'Svar individuelt. Eksempel: Básico/Intermedio – puedo hablar sobre temas cotidianos, pero me falta fluidez en debates complejos.', answer: 'Individuelt svar basert på eget nivå.' },
      ], solution: 'Individuell vurdering i fire ferdigheter: leseforståelse, skriftlig produksjon, lytteforståelse og muntlig produksjon. Bruk nivåene básico, intermedio eller avanzado.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-16-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match læringsressurs med ferdighetsmål:', subTasks: [
        { label: 'a', task: 'Lese El País daglig', solution: 'Forbedre leseforståelse og ordforråd', answer: 'Forbedre leseforståelse og ordforråd' },
        { label: 'b', task: 'Høre på Radio Ambulante', solution: 'Forbedre lytteforståelse og uttale', answer: 'Forbedre lytteforståelse og uttale' },
        { label: 'c', task: 'Skrive dagbok på spansk', solution: 'Forbedre skriftlig produksjon og grammatikk', answer: 'Forbedre skriftlig produksjon og grammatikk' },
        { label: 'd', task: 'Språktandem med en spansktalende', solution: 'Forbedre muntlig flyt og kommunikasjon', answer: 'Forbedre muntlig flyt og kommunikasjon' },
      ], solution: 'a) Forbedre leseforståelse og ordforråd, b) Forbedre lytteforståelse og uttale, c) Forbedre skriftlig produksjon og grammatikk, d) Forbedre muntlig flyt og kommunikasjon', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-16-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Refleksjonsoppgaver – svar på spansk:', subTasks: [
        { label: 'a', task: 'Hva er det viktigste du har lært i Spansk Nivå III? Skriv 2-3 setninger.', solution: 'Lo más importante que he aprendido es a expresar opiniones complejas y a escribir textos académicos. También he mejorado mi comprensión de la cultura hispanohablante y he aprendido a mediar entre culturas diferentes.', answer: 'Lo más importante que he aprendido es a expresar opiniones complejas y a escribir textos académicos.' },
        { label: 'b', task: 'Hva synes du var mest utfordrende? Skriv 2-3 setninger.', solution: 'Lo más difícil ha sido dominar el subjuntivo en todas sus formas y escribir en registro académico. También me ha costado mantener conversaciones fluidas sobre temas complejos sin mezclar el español con el noruego.', answer: 'Lo más difícil ha sido dominar el subjuntivo y escribir en registro académico.' },
        { label: 'c', task: 'Hvilke læringsstrategier har fungert best for deg? Skriv 2-3 setninger.', solution: 'Las estrategias que mejor me han funcionado son leer textos auténticos cada día y escuchar podcasts en español durante mis desplazamientos. También me ha ayudado mucho escribir resúmenes de los textos que leo para practicar la expresión escrita.', answer: 'Leer textos auténticos, escuchar podcasts y escribir resúmenes han sido las mejores estrategias.' },
        { label: 'd', task: 'Sett tre konkrete mål for det neste halvåret. Skriv på spansk.', solution: 'Mis tres objetivos son: 1) Leer un libro completo en español cada mes. 2) Practicar la expresión oral con un compañero de idiomas dos veces por semana. 3) Mejorar mi uso del subjuntivo haciendo ejercicios gramaticales tres veces por semana.', answer: 'Tres objetivos concretos para seguir mejorando en español.' },
      ], solution: 'Individuelle refleksjoner over hva man har lært, utfordringer, strategier og fremtidige mål – alt skrevet på spansk.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-16-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Avsluttende oppgaver – vis hva du kan:', subTasks: [
        { label: 'a', task: 'Skriv en kort akademisk tekst (4-5 setninger) om et selvvalgt tema. Bruk formelt register med nominaliseringer, bindeord og kildehenvisning.', solution: 'La digitalización de la educación ha experimentado un crecimiento significativo en los últimos años. Según García (2024), la implementación de plataformas digitales ha mejorado el acceso a la formación en zonas rurales. Sin embargo, diversos estudios señalan que la brecha digital sigue siendo un obstáculo considerable. Por consiguiente, resulta necesario que los gobiernos inviertan en infraestructura tecnológica para garantizar la igualdad de oportunidades educativas.', answer: 'En akademisk tekst med formelt register, nominaliseringer, bindeord og kildehenvisning.' },
        { label: 'b', task: 'Skriv en medieringstekst (3-4 setninger) der du forklarer en norsk kulturell tradisjon for en spansktalende person.', solution: 'En Noruega, el «friluftsliv» (vida al aire libre) es una parte fundamental de la identidad nacional. Los noruegos disfrutan de actividades en la naturaleza durante todo el año, incluso en invierno. Esta tradición refleja valores como la conexión con la naturaleza, la salud física y la simplicidad. No se trata solo de deporte, sino de una filosofía de vida profundamente arraigada en la cultura escandinava.', answer: 'En medieringstekst som forklarer friluftsliv eller annen norsk tradisjon for et spansktalende publikum.' },
        { label: 'c', task: 'Oversett denne norske teksten til spansk med riktig oversettelsesteknikk: «Det norske skolesystemet er basert på likhet. Alle har rett til gratis utdanning, uansett bakgrunn.»', solution: 'El sistema educativo noruego se basa en el principio de igualdad. Todos tienen derecho a una educación gratuita, independientemente de su origen socioeconómico. (Teknikk: Blanding av literal oversettelse og modulering – «uansett bakgrunn» → «independientemente de su origen socioeconómico».)', answer: 'El sistema educativo noruego se basa en la igualdad. Todos tienen derecho a educación gratuita, independientemente de su origen.' },
        { label: 'd', task: 'Skriv en avsluttende refleksjon på spansk (3-4 setninger) om hva det betyr for deg å lære spansk.', solution: 'Aprender español ha sido una de las experiencias más enriquecedoras de mi vida. No solo he adquirido una nueva lengua, sino que he descubierto culturas fascinantes y he desarrollado una mayor empatía intercultural. Mi viaje con el español no termina aquí; es solo el comienzo de una aventura que me acompañará siempre. ¡Adelante con el español!', answer: 'En personlig refleksjon om verdien av å lære spansk og fremtidige planer.' },
      ], solution: 'Fire avanserte oppgaver som viser mestring av akademisk skriving, mediering, oversettelse og personlig refleksjon på spansk.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-16-4-tip-1', type: 'tip', content: `**Siste tips:** Språklæring er en livslang reise. Du trenger ikke å være perfekt – det viktigste er å bruke språket aktivt og tørre å gjøre feil. Cada error es una oportunidad de aprender. ¡Sigue adelante!` },
    { id: 'spansk-3-16-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Autoevaluación nivel III avanzado**

- **Ferdigheter:** Leseforståelse, skriftlig produksjon, lytteforståelse, muntlig produksjon
- **CEFR-nivå:** Vurder deg selv mot B1, B2 eller C1
- **Styrker og svakheter:** Identifiser og lag en plan for forbedring
- **Læringsstrategier:** Les, skriv, lytt og snakk aktivt på spansk
- **Fremtiden:** DELE-eksamen, språkreiser, videre studier
- **¡Buena suerte y adelante con el español!**` },
  ],
  exercises: [],
};

export const SPANSK_3_CHAPTERS_14_16: TextbookChapter[] = [
  CHAPTER_SPANSK_3_14_1,
  CHAPTER_SPANSK_3_14_2,
  CHAPTER_SPANSK_3_14_3,
  CHAPTER_SPANSK_3_14_4,
  CHAPTER_SPANSK_3_15_1,
  CHAPTER_SPANSK_3_15_2,
  CHAPTER_SPANSK_3_15_3,
  CHAPTER_SPANSK_3_15_4,
  CHAPTER_SPANSK_3_16_1,
  CHAPTER_SPANSK_3_16_2,
  CHAPTER_SPANSK_3_16_3,
  CHAPTER_SPANSK_3_16_4,
];
