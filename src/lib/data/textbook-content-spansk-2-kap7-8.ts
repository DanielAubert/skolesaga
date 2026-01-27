/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 2 - Kapittel 7-8 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 7: EL MUNDO LABORAL (7.1-7.4)
 * - Kapittel 8: MEDIO AMBIENTE Y SOCIEDAD (8.1-8.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7: EL MUNDO LABORAL
// ============================================================================

// 7.1 Profesiones y trabajo
export const CHAPTER_SPANSK_2_7_1: TextbookChapter = {
  id: 'spansk-2-7-1',
  courseId: 'spansk-2',
  chapterNumber: '7.1',
  title: 'Profesiones y trabajo',
  subtitle: 'Yrker og arbeidsliv',
  description: 'Lær om yrker og arbeidsliv på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive yrker og arbeidsoppgaver', 'snakke om arbeidsliv'],
  content: [
    { id: 'spansk-2-7-1-intro', type: 'text', content: `## Profesiones y trabajo

I dette delkapittelet lærer du navn på vanlige yrker, hvor folk jobber, og hvordan du beskriver hva folk gjør i jobben sin.` },
    { id: 'spansk-2-7-1-def-1', type: 'definition', title: 'Vanlige yrker (profesiones)', content: `**Vanlige yrker:**

| Spansk | Norsk | Arbeidsplass |
|--------|-------|-------------|
| el/la médico/a | lege | el hospital |
| el/la profesor/a | lærer | la escuela / el instituto |
| el/la abogado/a | advokat | el despacho / la oficina |
| el/la ingeniero/a | ingeniør | la empresa |
| el/la enfermero/a | sykepleier | el hospital / la clínica |
| el/la periodista | journalist | el periódico / la redacción |
| el/la cocinero/a | kokk | el restaurante |
| el/la camarero/a | servitør | el bar / el restaurante |
| el/la programador/a | programmerer | la oficina / en casa |
| el/la arquitecto/a | arkitekt | el estudio |

**Kjønnsformer:** De fleste yrker har hankjønns- og hunkjønnsformer: *el médico / la médica, el abogado / la abogada*. Noen er felles: *el/la periodista, el/la dentista*.` },
    { id: 'spansk-2-7-1-text-1', type: 'text', content: `## Beskrive yrker

**Spørsmål:**
- *¿A qué te dedicas?* (Hva jobber du med?)
- *¿En qué trabajas?* (Hva jobber du med?)
- *¿Cuál es tu profesión?* (Hva er yrket ditt?)

**Svar:**
- *Soy médico/a.* (Jeg er lege.)
- *Trabajo como profesor/a.* (Jeg jobber som lærer.)
- *Me dedico a la enseñanza.* (Jeg jobber med undervisning.)
- *Trabajo en un hospital.* (Jeg jobber på et sykehus.)` },
    { id: 'spansk-2-7-1-text-2', type: 'text', content: `## Arbeidsoppgaver

For å beskrive hva folk gjør på jobben:
- *Un médico cura a los enfermos.* (En lege helbreder de syke.)
- *Un profesor enseña a los alumnos.* (En lærer underviser elevene.)
- *Un abogado defiende a sus clientes.* (En advokat forsvarer klientene sine.)
- *Un periodista escribe artículos.* (En journalist skriver artikler.)
- *Un cocinero prepara la comida.* (En kokk lager maten.)` },
    { id: 'spansk-2-7-1-example-1', type: 'example', title: 'Eksempel: Spør om yrke', problem: `¿A qué te dedicas? (du er lege)`, solution: `**Soy médico/a.** Eller: **Trabajo como médico/a en un hospital.**` },
    { id: 'spansk-2-7-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-7-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match yrke med arbeidsplass:', subTasks: [
        { label: 'a', task: 'el médico', solution: 'el hospital', answer: 'el hospital' },
        { label: 'b', task: 'el profesor', solution: 'la escuela / el instituto', answer: 'la escuela / el instituto' },
        { label: 'c', task: 'el cocinero', solution: 'el restaurante', answer: 'el restaurante' },
        { label: 'd', task: 'el abogado', solution: 'el despacho / la oficina', answer: 'el despacho / la oficina' },
      ], solution: 'a) el hospital, b) la escuela / el instituto, c) el restaurante, d) el despacho / la oficina', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-7-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match yrke med arbeidsoppgave:', subTasks: [
        { label: 'a', task: 'el periodista', solution: 'escribe artículos', answer: 'escribe artículos' },
        { label: 'b', task: 'el enfermero', solution: 'cuida a los enfermos', answer: 'cuida a los enfermos' },
        { label: 'c', task: 'el arquitecto', solution: 'diseña edificios', answer: 'diseña edificios' },
        { label: 'd', task: 'el programador', solution: 'escribe código / programas', answer: 'escribe código / programas' },
      ], solution: 'a) escribe artículos, b) cuida a los enfermos, c) diseña edificios, d) escribe código / programas', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-1-example-2', type: 'example', title: 'Eksempel: Beskriv yrket', problem: `Hva gjør en lærer?`, solution: `**Un profesor enseña a los alumnos.** También prepara las clases y corrige exámenes.` },
    { id: 'spansk-2-7-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-7-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene med hele setninger:', subTasks: [
        { label: 'a', task: '¿A qué se dedica un abogado?', solution: 'Un abogado se dedica a defender a sus clientes en cuestiones legales.', answer: 'Un abogado se dedica a defender a sus clientes en cuestiones legales.' },
        { label: 'b', task: '¿Dónde trabaja un cocinero?', solution: 'Un cocinero trabaja en un restaurante o en un hotel.', answer: 'Un cocinero trabaja en un restaurante o en un hotel.' },
        { label: 'c', task: '¿Qué hace un periodista?', solution: 'Un periodista investiga y escribe artículos para un periódico o una revista.', answer: 'Un periodista investiga y escribe artículos para un periódico o una revista.' },
        { label: 'd', task: '¿Cuál es la profesión de alguien que trabaja en un hospital y cura enfermos?', solution: 'Es médico/a.', answer: 'Es médico/a.' },
      ], solution: 'a) Un abogado se dedica a defender a sus clientes en cuestiones legales., b) Un cocinero trabaja en un restaurante o en un hotel., c) Un periodista investiga y escribe artículos para un periódico o una revista., d) Es médico/a.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-7-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk:', subTasks: [
        { label: 'a', task: 'Jeg jobber som ingeniør i en stor bedrift.', solution: 'Trabajo como ingeniero/a en una empresa grande.', answer: 'Trabajo como ingeniero/a en una empresa grande.' },
        { label: 'b', task: 'Broren min er journalist og skriver artikler for en avis.', solution: 'Mi hermano es periodista y escribe artículos para un periódico.', answer: 'Mi hermano es periodista y escribe artículos para un periódico.' },
        { label: 'c', task: 'Hva vil du jobbe med i fremtiden?', solution: '¿A qué te quieres dedicar en el futuro? / ¿En qué quieres trabajar en el futuro?', answer: '¿A qué te quieres dedicar en el futuro? / ¿En qué quieres trabajar en el futuro?' },
        { label: 'd', task: 'Moren min er advokat og jobber på et kontor i sentrum.', solution: 'Mi madre es abogada y trabaja en una oficina en el centro.', answer: 'Mi madre es abogada y trabaja en una oficina en el centro.' },
      ], solution: 'a) Trabajo como ingeniero/a en una empresa grande., b) Mi hermano es periodista y escribe artículos para un periódico., c) ¿A qué te quieres dedicar en el futuro? / ¿En qué quieres trabajar en el futuro?, d) Mi madre es abogada y trabaja en una oficina en el centro.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-1-tip-1', type: 'tip', content: `**Husk:** På spansk sier man *Soy médico* uten artikkel (ikke *Soy un médico*), i motsetning til norsk der vi sier "Jeg er lege".` },
    { id: 'spansk-2-7-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Yrker og arbeidsliv**

- **Spørsmål:** ¿A qué te dedicas?, ¿En qué trabajas?
- **Svar:** Soy..., Trabajo como..., Me dedico a...
- **Yrker:** médico, profesor, abogado, ingeniero, enfermero, periodista
- **Arbeidsplasser:** hospital, escuela, oficina, restaurante
- **Husk:** Ingen artikkel: Soy médico (ikke Soy un médico)` },
  ],
  exercises: [],
};

// 7.2 El currículum vitae
export const CHAPTER_SPANSK_2_7_2: TextbookChapter = {
  id: 'spansk-2-7-2',
  courseId: 'spansk-2',
  chapterNumber: '7.2',
  title: 'El currículum vitae',
  subtitle: 'Skrive CV på spansk',
  description: 'Lær å skrive en CV (currículum vitae) på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['skrive en CV på spansk', 'bruke formelt språk i skriftlige dokumenter'],
  content: [
    { id: 'spansk-2-7-2-intro', type: 'text', content: `## El currículum vitae

En CV er et viktig dokument når du søker jobb. På spansk kalles det **currículum vitae** eller bare **currículum**. Her lærer du hvordan du skriver en profesjonell CV.` },
    { id: 'spansk-2-7-2-def-1', type: 'definition', title: 'CV-seksjoner (secciones del currículum)', content: `**En spansk CV inneholder:**

| Seksjon | Spansk | Innhold |
|---------|--------|--------|
| Personlige data | Datos personales | Navn, adresse, telefon, e-post |
| Utdanning | Formación académica | Skoler, universiteter, kurs |
| Arbeidserfaring | Experiencia laboral | Tidligere jobber |
| Språk | Idiomas | Språk og nivå |
| Ferdigheter | Habilidades | Tekniske og personlige ferdigheter |
| Interesser | Aficiones / Intereses | Hobbyer og fritidsaktiviteter |

**Nyttige uttrykk:**
- *Licenciado/a en...* (Utdannet i...)
- *Máster en...* (Master i...)
- *Nivel avanzado / intermedio / básico* (Avansert / middels / grunnleggende nivå)` },
    { id: 'spansk-2-7-2-text-1', type: 'text', content: `## Datos personales

Denne seksjonen inkluderer:
- **Nombre:** María García López
- **Fecha de nacimiento:** 15 de mayo de 1998
- **Dirección:** Calle Gran Vía 25, Madrid
- **Teléfono:** +34 612 345 678
- **Correo electrónico:** maria.garcia@email.com
- **Nacionalidad:** Española

## Formación académica

Skrives i omvendt kronologisk rekkefølge (nyeste først):
- *2020-2024: Licenciatura en Derecho, Universidad Complutense de Madrid*
- *2016-2020: Bachillerato, IES Cervantes, Madrid*` },
    { id: 'spansk-2-7-2-text-2', type: 'text', content: `## Experiencia laboral

Beskriv tidligere jobber:
- *2023-actualidad: Asistente legal en Bufete López & Asociados*
  - Responsabilidades: Investigación jurídica, atención al cliente
- *2021-2023: Camarera en Restaurante El Olivo*
  - Responsabilidades: Servicio al cliente, gestión de pedidos

## Idiomas y habilidades

**Idiomas:**
- Español: lengua materna
- Inglés: nivel avanzado (B2)
- Francés: nivel intermedio (B1)

**Habilidades:**
- Trabajo en equipo (samarbeid)
- Comunicación (kommunikasjon)
- Microsoft Office (avanzado)` },
    { id: 'spansk-2-7-2-example-1', type: 'example', title: 'Eksempel: CV-seksjon', problem: `Hva skriver du under "Formación académica"?`, solution: `Under **Formación académica** skriver du utdanningen din i omvendt kronologisk rekkefølge: år, grad, institusjon. F.eks.: *2020-2024: Licenciatura en Derecho, Universidad Complutense.*` },
    { id: 'spansk-2-7-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-7-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk CV-seksjon med norsk:', subTasks: [
        { label: 'a', task: 'Datos personales', solution: 'Personlige data', answer: 'Personlige data' },
        { label: 'b', task: 'Formación académica', solution: 'Utdanning', answer: 'Utdanning' },
        { label: 'c', task: 'Experiencia laboral', solution: 'Arbeidserfaring', answer: 'Arbeidserfaring' },
        { label: 'd', task: 'Idiomas', solution: 'Språk', answer: 'Språk' },
      ], solution: 'a) Personlige data, b) Utdanning, c) Arbeidserfaring, d) Språk', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-7-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match nivåbeskrivelse med norsk:', subTasks: [
        { label: 'a', task: 'nivel avanzado', solution: 'avansert nivå', answer: 'avansert nivå' },
        { label: 'b', task: 'nivel intermedio', solution: 'middels nivå', answer: 'middels nivå' },
        { label: 'c', task: 'nivel básico', solution: 'grunnleggende nivå', answer: 'grunnleggende nivå' },
        { label: 'd', task: 'lengua materna', solution: 'morsmål', answer: 'morsmål' },
      ], solution: 'a) avansert nivå, b) middels nivå, c) grunnleggende nivå, d) morsmål', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-2-example-2', type: 'example', title: 'Eksempel: Formelt språk', problem: `Hvordan beskriver du språknivået ditt?`, solution: `Bruk: **nivel avanzado** (avansert), **nivel intermedio** (middels) eller **nivel básico** (grunnleggende). Eller europeisk rammeverk: A1-C2.` },
    { id: 'spansk-2-7-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-7-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv CV-seksjoner på spansk:', subTasks: [
        { label: 'a', task: 'Skriv dine personlige data (bruk fiktive data).', solution: 'Nombre: Ole Hansen. Fecha de nacimiento: 10 de enero de 2005. Dirección: Storgata 5, Oslo. Teléfono: +47 123 45 678.', answer: 'Nombre: Ole Hansen. Fecha de nacimiento: 10 de enero de 2005. Dirección: Storgata 5, Oslo. Teléfono: +47 123 45 678.' },
        { label: 'b', task: 'Skriv din utdanning.', solution: 'Formación académica: 2021-actualidad: Bachillerato (videregående), [Skolenavn], Noruega.', answer: 'Formación académica: 2021-actualidad: Bachillerato (videregående), [Skolenavn], Noruega.' },
        { label: 'c', task: 'Beskriv språkkunnskapene dine.', solution: 'Idiomas: Noruego: lengua materna. Inglés: nivel avanzado. Español: nivel intermedio.', answer: 'Idiomas: Noruego: lengua materna. Inglés: nivel avanzado. Español: nivel intermedio.' },
        { label: 'd', task: 'List opp tre ferdigheter.', solution: 'Habilidades: Trabajo en equipo, comunicación, conocimientos de informática.', answer: 'Habilidades: Trabajo en equipo, comunicación, conocimientos de informática.' },
      ], solution: 'a) Nombre: Ole Hansen. Fecha de nacimiento: 10 de enero de 2005. Dirección: Storgata 5, Oslo. Teléfono: +47 123 45 678., b) Formación académica: 2021-actualidad: Bachillerato (videregående), [Skolenavn], Noruega., c) Idiomas: Noruego: lengua materna. Inglés: nivel avanzado. Español: nivel intermedio., d) Habilidades: Trabajo en equipo, comunicación, conocimientos de informática.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-7-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en komplett mini-CV på spansk (bruk fiktive data):', subTasks: [
        { label: 'a', task: 'Skriv Datos personales', solution: 'Nombre: Ana Nordvik. Fecha de nacimiento: 22 de marzo de 2006. Dirección: Parkveien 12, Bergen. Correo: ana.nordvik@email.com.', answer: 'Nombre: Ana Nordvik. Fecha de nacimiento: 22 de marzo de 2006. Dirección: Parkveien 12, Bergen. Correo: ana.nordvik@email.com.' },
        { label: 'b', task: 'Skriv Formación académica og Experiencia', solution: 'Formación: 2022-actualidad: Bachillerato, Nordahl Grieg VGS. Experiencia: 2024: Dependienta en tienda de ropa (verano).', answer: 'Formación: 2022-actualidad: Bachillerato, Nordahl Grieg VGS. Experiencia: 2024: Dependienta en tienda de ropa (verano).' },
        { label: 'c', task: 'Skriv Idiomas', solution: 'Idiomas: Noruego (lengua materna), Inglés (nivel avanzado, B2), Español (nivel intermedio, B1).', answer: 'Idiomas: Noruego (lengua materna), Inglés (nivel avanzado, B2), Español (nivel intermedio, B1).' },
        { label: 'd', task: 'Skriv Habilidades og Aficiones', solution: 'Habilidades: Trabajo en equipo, responsabilidad, puntualidad, Microsoft Office. Aficiones: Deportes, lectura, música.', answer: 'Habilidades: Trabajo en equipo, responsabilidad, puntualidad, Microsoft Office. Aficiones: Deportes, lectura, música.' },
      ], solution: 'a) Nombre: Ana Nordvik. Fecha de nacimiento: 22 de marzo de 2006. Dirección: Parkveien 12, Bergen. Correo: ana.nordvik@email.com., b) Formación: 2022-actualidad: Bachillerato, Nordahl Grieg VGS. Experiencia: 2024: Dependienta en tienda de ropa (verano)., c) Idiomas: Noruego (lengua materna), Inglés (nivel avanzado, B2), Español (nivel intermedio, B1)., d) Habilidades: Trabajo en equipo, responsabilidad, puntualidad, Microsoft Office. Aficiones: Deportes, lectura, música.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-2-tip-1', type: 'tip', content: `**Tips for CV:** Hold CVen kort (1-2 sider), bruk formelt språk og unngå forkortelser. Tilpass alltid CVen til jobben du søker på.` },
    { id: 'spansk-2-7-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: CV på spansk**

- **Seksjoner:** Datos personales, Formación, Experiencia, Idiomas, Habilidades
- **Rekkefølge:** Nyeste først (omvendt kronologisk)
- **Språknivå:** avanzado, intermedio, básico / A1-C2
- **Formelt språk:** Licenciado/a en..., Responsabilidades:...
- **Tips:** Kort, ryddig, tilpasset jobben` },
  ],
  exercises: [],
};

// 7.3 La entrevista de trabajo
export const CHAPTER_SPANSK_2_7_3: TextbookChapter = {
  id: 'spansk-2-7-3',
  courseId: 'spansk-2',
  chapterNumber: '7.3',
  title: 'La entrevista de trabajo',
  subtitle: 'Jobbintervjuet',
  description: 'Lær språk og uttrykk for jobbintervju på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå og svare på intervjuspørsmål', 'bruke formelt språk (usted)'],
  content: [
    { id: 'spansk-2-7-3-intro', type: 'text', content: `## La entrevista de trabajo

Et jobbintervju (*entrevista de trabajo*) er en viktig del av jobbsøkingsprosessen. Her lærer du vanlige spørsmål, hvordan du svarer, og hvordan du bruker formelt språk.` },
    { id: 'spansk-2-7-3-def-1', type: 'definition', title: 'Vanlige intervjuspørsmål', content: `**Typiske spørsmål og svar i jobbintervju:**

| Spørsmål | Norsk |
|----------|-------|
| ¿Por qué quiere trabajar aquí? | Hvorfor vil du jobbe her? |
| ¿Cuáles son sus puntos fuertes? | Hva er dine sterke sider? |
| ¿Cuáles son sus puntos débiles? | Hva er dine svake sider? |
| ¿Tiene experiencia en...? | Har du erfaring med...? |
| ¿Dónde se ve en cinco años? | Hvor ser du deg selv om fem år? |
| Hábleme de usted. | Fortell om deg selv. |
| ¿Cuándo puede empezar? | Når kan du begynne? |

**Merk bruk av usted-formen:** I formelle situasjoner som jobbintervju brukes *usted* (De-formen).` },
    { id: 'spansk-2-7-3-text-1', type: 'text', content: `## Tú vs. Usted

I jobbintervju brukes **usted** (formelt "De"):

| Tú (uformelt) | Usted (formelt) |
|----------------|------------------|
| ¿Qué haces? | ¿Qué hace usted? |
| ¿Tienes experiencia? | ¿Tiene experiencia? |
| ¿Dónde trabajas? | ¿Dónde trabaja? |
| Dime | Dígame |
| Siéntate | Siéntese |

**Usted** konjugeres som 3. person entall.
**Ustedes** (flertall) konjugeres som 3. person flertall.` },
    { id: 'spansk-2-7-3-text-2', type: 'text', content: `## Modellsvar

**Hábleme de usted:**
*Me llamo María García. Tengo 25 años y soy licenciada en Derecho por la Universidad Complutense. He trabajado como asistente legal durante dos años...*

**¿Cuáles son sus puntos fuertes?**
*Soy una persona responsable, organizada y con buena capacidad de comunicación. Trabajo bien en equipo y me adapto fácilmente a nuevas situaciones.*

**¿Por qué quiere trabajar aquí?**
*Porque su empresa tiene una excelente reputación y me gustaría desarrollar mi carrera profesional en este sector.*` },
    { id: 'spansk-2-7-3-example-1', type: 'example', title: 'Eksempel: Formell form', problem: `Gjør om til usted: ¿Dónde trabajas?`, solution: `**¿Dónde trabaja (usted)?** Bytt fra tú-konjugasjon (trabajas) til usted-konjugasjon (trabaja).` },
    { id: 'spansk-2-7-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-7-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spørsmål med norsk oversettelse:', subTasks: [
        { label: 'a', task: '¿Por qué quiere trabajar aquí?', solution: 'Hvorfor vil du jobbe her?', answer: 'Hvorfor vil du jobbe her?' },
        { label: 'b', task: '¿Cuáles son sus puntos fuertes?', solution: 'Hva er dine sterke sider?', answer: 'Hva er dine sterke sider?' },
        { label: 'c', task: 'Hábleme de usted.', solution: 'Fortell om deg selv.', answer: 'Fortell om deg selv.' },
        { label: 'd', task: '¿Cuándo puede empezar?', solution: 'Når kan du begynne?', answer: 'Når kan du begynne?' },
      ], solution: 'a) Hvorfor vil du jobbe her?, b) Hva er dine sterke sider?, c) Fortell om deg selv., d) Når kan du begynne?', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-7-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Gjør om fra tú til usted:', subTasks: [
        { label: 'a', task: '¿Dónde trabajas?', solution: '¿Dónde trabaja (usted)?', answer: '¿Dónde trabaja (usted)?' },
        { label: 'b', task: '¿Tienes experiencia?', solution: '¿Tiene (usted) experiencia?', answer: '¿Tiene (usted) experiencia?' },
        { label: 'c', task: '¿Qué quieres hacer?', solution: '¿Qué quiere (usted) hacer?', answer: '¿Qué quiere (usted) hacer?' },
        { label: 'd', task: 'Dime tu nombre.', solution: 'Dígame su nombre.', answer: 'Dígame su nombre.' },
      ], solution: 'a) ¿Dónde trabaja (usted)?, b) ¿Tiene (usted) experiencia?, c) ¿Qué quiere (usted) hacer?, d) Dígame su nombre.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-3-example-2', type: 'example', title: 'Eksempel: Intervjusvar', problem: `Svar på: ¿Cuáles son sus puntos fuertes?`, solution: `**Soy una persona responsable y organizada. Tengo buena capacidad de comunicación y trabajo bien en equipo.**` },
    { id: 'spansk-2-7-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-7-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv svar på intervjuspørsmålene:', subTasks: [
        { label: 'a', task: 'Hábleme de usted.', solution: 'Me llamo [nombre]. Tengo [edad] años. Estudio [studium] y tengo experiencia en [erfaring].', answer: 'Me llamo [nombre]. Tengo [edad] años. Estudio [studium] y tengo experiencia en [erfaring].' },
        { label: 'b', task: '¿Cuáles son sus puntos fuertes?', solution: 'Soy responsable, organizado/a y trabajo bien en equipo.', answer: 'Soy responsable, organizado/a y trabajo bien en equipo.' },
        { label: 'c', task: '¿Por qué quiere trabajar aquí?', solution: 'Porque me interesa mucho este sector y su empresa tiene una excelente reputación.', answer: 'Porque me interesa mucho este sector y su empresa tiene una excelente reputación.' },
        { label: 'd', task: '¿Dónde se ve en cinco años?', solution: 'Me veo trabajando en una posición de mayor responsabilidad en este sector.', answer: 'Me veo trabajando en una posición de mayor responsabilidad en este sector.' },
      ], solution: 'a) Me llamo [nombre]. Tengo [edad] años. Estudio [studium] y tengo experiencia en [erfaring]., b) Soy responsable, organizado/a y trabajo bien en equipo., c) Porque me interesa mucho este sector y su empresa tiene una excelente reputación., d) Me veo trabajando en una posición de mayor responsabilidad en este sector.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-7-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Simuler jobbintervju - skriv svar:', subTasks: [
        { label: 'a', task: 'Intervjuer: Buenos días. Siéntese. Hábleme de usted.', solution: 'Buenos días. Me llamo [navn]. Tengo [alder] años y estudio en [skole]. Soy una persona responsable y me interesa mucho trabajar en este campo.', answer: 'Buenos días. Me llamo [navn]. Tengo [alder] años y estudio en [skole]. Soy una persona responsable y me interesa mucho trabajar en este campo.' },
        { label: 'b', task: '¿Tiene alguna experiencia laboral?', solution: 'Sí, he trabajado como [yrke] en [sted] durante [tid]. Allí aprendí a trabajar en equipo y a comunicarme con los clientes.', answer: 'Sí, he trabajado como [yrke] en [sted] durante [tid]. Allí aprendí a trabajar en equipo y a comunicarme con los clientes.' },
        { label: 'c', task: '¿Cuál es su mayor debilidad?', solution: 'A veces soy demasiado perfeccionista, pero estoy aprendiendo a gestionar mejor mi tiempo.', answer: 'A veces soy demasiado perfeccionista, pero estoy aprendiendo a gestionar mejor mi tiempo.' },
        { label: 'd', task: '¿Tiene alguna pregunta para nosotros?', solution: 'Sí, me gustaría saber más sobre las oportunidades de desarrollo profesional en la empresa.', answer: 'Sí, me gustaría saber más sobre las oportunidades de desarrollo profesional en la empresa.' },
      ], solution: 'a) Buenos días. Me llamo [navn]. Tengo [alder] años y estudio en [skole]. Soy una persona responsable y me interesa mucho trabajar en este campo., b) Sí, he trabajado como [yrke] en [sted] durante [tid]. Allí aprendí a trabajar en equipo y a comunicarme con los clientes., c) A veces soy demasiado perfeccionista, pero estoy aprendiendo a gestionar mejor mi tiempo., d) Sí, me gustaría saber más sobre las oportunidades de desarrollo profesional en la empresa.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-3-tip-1', type: 'tip', content: `**Intervjutips:** Øv på svarene på forhånd, bruk usted-formen, vær høflig og profesjonell. Husk å stille spørsmål til arbeidsgiveren også!` },
    { id: 'spansk-2-7-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Jobbintervjuet**

- **Usted-form:** Formelt, 3. person konjugasjon
- **Vanlige spørsmål:** Hábleme de usted, ¿Por qué quiere trabajar aquí?, Puntos fuertes/débiles
- **Tips:** Forbered svar, vær konkret, vis interesse
- **Husk:** usted = De (formelt), tú = du (uformelt)` },
  ],
  exercises: [],
};

// 7.4 El español en el trabajo
export const CHAPTER_SPANSK_2_7_4: TextbookChapter = {
  id: 'spansk-2-7-4',
  courseId: 'spansk-2',
  chapterNumber: '7.4',
  title: 'El español en el trabajo',
  subtitle: 'Spansk i arbeidslivet',
  description: 'Lær å bruke spansk i profesjonelle sammenhenger.',
  estimatedMinutes: 45,
  competenceGoals: ['skrive formelle e-poster', 'kommunisere profesjonelt på spansk'],
  content: [
    { id: 'spansk-2-7-4-intro', type: 'text', content: `## El español en el trabajo

Å kunne bruke spansk i profesjonelle sammenhenger er svært nyttig. Her lærer du å skrive e-poster, snakke i telefonen og kommunisere på møter på spansk.` },
    { id: 'spansk-2-7-4-def-1', type: 'definition', title: 'Forretningsspansk (español de negocios)', content: `**Nyttige uttrykk for profesjonell kommunikasjon:**

| Situasjon | Uttrykk | Norsk |
|-----------|---------|-------|
| E-post åpning | Estimado/a Sr./Sra. | Kjære Hr./Fru. |
| E-post avslutning | Atentamente / Un cordial saludo | Med vennlig hilsen |
| Telefon | ¿Dígame? / ¿De parte de quién? | Hallo? / Hvem ringer? |
| Møte | Orden del día / puntos a tratar | Dagsorden / saker å behandle |
| Avtale | Tenemos una cita a las... | Vi har et møte kl... |
| Takke | Le agradezco su atención | Takk for oppmerksomheten |
| Be om noe | ¿Sería posible...? | Ville det være mulig...? |` },
    { id: 'spansk-2-7-4-text-1', type: 'text', content: `## Formell e-post

**Struktur:**

- **Asunto:** Solicitud de información
- **Saludo:** Estimado/a Sr./Sra. [Etternavn]:
- **Introducción:** Me dirijo a usted para solicitar información sobre...
- **Cuerpo:** [Innhold]
- **Despedida:** Le agradezco de antemano su atención.
- **Firma:** Atentamente, [Ditt navn], [Din stilling]

**Nyttige fraser:**
- *Me dirijo a usted para...* (Jeg henvender meg til Dem for å...)
- *Le escribo con respecto a...* (Jeg skriver angående...)
- *Adjunto encontrará...* (Vedlagt finner De...)
- *Quedo a su disposición.* (Jeg står til Deres disposisjon.)` },
    { id: 'spansk-2-7-4-text-2', type: 'text', content: `## Telefon og møter

**Telefonsamtale:**
- *¿Dígame?* (Hallo?)
- *¿De parte de quién?* (Hvem ringer?)
- *¿Podría hablar con...?* (Kan jeg få snakke med...?)
- *Le paso con...* (Jeg setter Dem over til...)
- *¿Podría dejar un mensaje?* (Kan jeg legge igjen en beskjed?)

**Møtefraser:**
- *Vamos a empezar la reunión.* (La oss starte møtet.)
- *El primer punto del orden del día es...* (Første punkt på dagsordenen er...)
- *¿Alguien tiene alguna pregunta?* (Er det noen som har spørsmål?)` },
    { id: 'spansk-2-7-4-example-1', type: 'example', title: 'Eksempel: E-poststart', problem: `Hvordan starter du en formell e-post til Sra. Martínez?`, solution: `**Estimada Sra. Martínez:** Deretter: *Me dirijo a usted para...* eller *Le escribo con respecto a...*` },
    { id: 'spansk-2-7-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-7-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match uttrykk med situasjon:', subTasks: [
        { label: 'a', task: 'Estimado Sr. García:', solution: 'Starten av en formell e-post', answer: 'Starten av en formell e-post' },
        { label: 'b', task: 'Atentamente,', solution: 'Avslutningen av en formell e-post', answer: 'Avslutningen av en formell e-post' },
        { label: 'c', task: '¿Dígame?', solution: 'Svare telefonen', answer: 'Svare telefonen' },
        { label: 'd', task: '¿De parte de quién?', solution: 'Spørre hvem som ringer', answer: 'Spørre hvem som ringer' },
      ], solution: 'a) Starten av en formell e-post, b) Avslutningen av en formell e-post, c) Svare telefonen, d) Spørre hvem som ringer', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-7-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Oversett til spansk:', subTasks: [
        { label: 'a', task: 'Med vennlig hilsen', solution: 'Atentamente / Un cordial saludo', answer: 'Atentamente / Un cordial saludo' },
        { label: 'b', task: 'Vedlagt finner De...', solution: 'Adjunto encontrará...', answer: 'Adjunto encontrará...' },
        { label: 'c', task: 'Kan jeg få snakke med...?', solution: '¿Podría hablar con...?', answer: '¿Podría hablar con...?' },
        { label: 'd', task: 'Jeg skriver angående...', solution: 'Le escribo con respecto a...', answer: 'Le escribo con respecto a...' },
      ], solution: 'a) Atentamente / Un cordial saludo, b) Adjunto encontrará..., c) ¿Podría hablar con...?, d) Le escribo con respecto a...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-4-example-2', type: 'example', title: 'Eksempel: Telefonsamtale', problem: `Du ringer og vil snakke med Sr. López. Hva sier du?`, solution: `**Buenos días. ¿Podría hablar con el señor López, por favor?** Og når de spør hvem som ringer: **De parte de [ditt navn].**` },
    { id: 'spansk-2-7-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-7-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv formelle e-postfragmenter:', subTasks: [
        { label: 'a', task: 'Start en e-post til Sr. Rodríguez om en jobbsøknad.', solution: 'Estimado Sr. Rodríguez: Me dirijo a usted para presentar mi candidatura al puesto de...', answer: 'Estimado Sr. Rodríguez: Me dirijo a usted para presentar mi candidatura al puesto de...' },
        { label: 'b', task: 'Be om informasjon om et kurs.', solution: 'Le escribo con respecto al curso de español. ¿Sería posible recibir más información sobre el horario y el precio?', answer: 'Le escribo con respecto al curso de español. ¿Sería posible recibir más información sobre el horario y el precio?' },
        { label: 'c', task: 'Avslutt e-posten formelt.', solution: 'Le agradezco de antemano su atención. Quedo a su disposición para cualquier consulta. Atentamente, [nombre].', answer: 'Le agradezco de antemano su atención. Quedo a su disposición para cualquier consulta. Atentamente, [nombre].' },
        { label: 'd', task: 'Skriv en e-post for å bekrefte et møte.', solution: 'Estimado/a: Le escribo para confirmar nuestra reunión el [dato] a las [tid]. Un cordial saludo.', answer: 'Estimado/a: Le escribo para confirmar nuestra reunión el [dato] a las [tid]. Un cordial saludo.' },
      ], solution: 'a) Estimado Sr. Rodríguez: Me dirijo a usted para presentar mi candidatura al puesto de..., b) Le escribo con respecto al curso de español. ¿Sería posible recibir más información sobre el horario y el precio?, c) Le agradezco de antemano su atención. Quedo a su disposición para cualquier consulta. Atentamente, [nombre]., d) Estimado/a: Le escribo para confirmar nuestra reunión el [dato] a las [tid]. Un cordial saludo.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-7-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en komplett formell e-post:', subTasks: [
        { label: 'a', task: 'Skriv emnelinjen (Asunto)', solution: 'Asunto: Solicitud de empleo - Puesto de asistente administrativo', answer: 'Asunto: Solicitud de empleo - Puesto de asistente administrativo' },
        { label: 'b', task: 'Skriv innledningen', solution: 'Estimada Sra. Martínez: Me dirijo a usted para presentar mi candidatura al puesto de asistente administrativo publicado en su página web.', answer: 'Estimada Sra. Martínez: Me dirijo a usted para presentar mi candidatura al puesto de asistente administrativo publicado en su página web.' },
        { label: 'c', task: 'Skriv hoveddelen', solution: 'Soy estudiante de [studium] y tengo experiencia en atención al cliente. Adjunto encontrará mi currículum vitae. Me gustaría tener la oportunidad de formar parte de su equipo.', answer: 'Soy estudiante de [studium] y tengo experiencia en atención al cliente. Adjunto encontrará mi currículum vitae. Me gustaría tener la oportunidad de formar parte de su equipo.' },
        { label: 'd', task: 'Skriv avslutningen', solution: 'Le agradezco de antemano su atención. Quedo a su disposición para una entrevista. Atentamente, [Nombre Apellido].', answer: 'Le agradezco de antemano su atención. Quedo a su disposición para una entrevista. Atentamente, [Nombre Apellido].' },
      ], solution: 'a) Asunto: Solicitud de empleo - Puesto de asistente administrativo, b) Estimada Sra. Martínez: Me dirijo a usted para presentar mi candidatura al puesto de asistente administrativo publicado en su página web., c) Soy estudiante de [studium] y tengo experiencia en atención al cliente. Adjunto encontrará mi currículum vitae. Me gustaría tener la oportunidad de formar parte de su equipo., d) Le agradezco de antemano su atención. Quedo a su disposición para una entrevista. Atentamente, [Nombre Apellido].', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-7-4-tip-1', type: 'tip', content: `**Tips:** I formell kommunikasjon er det bedre å bruke for mange høflighetsfraser enn for få. *Sería posible*, *Le agradezco*, *Quedo a su disposición* gjør et godt inntrykk.` },
    { id: 'spansk-2-7-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Spansk i arbeidslivet**

- **E-post:** Estimado/a, Me dirijo a usted, Atentamente
- **Telefon:** ¿Dígame?, ¿De parte de quién?, ¿Podría hablar con...?
- **Møter:** Orden del día, puntos a tratar
- **Nøkkelfraser:** Le agradezco, Quedo a su disposición, ¿Sería posible...?` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: MEDIO AMBIENTE Y SOCIEDAD
// ============================================================================

// 8.1 Problemas medioambientales
export const CHAPTER_SPANSK_2_8_1: TextbookChapter = {
  id: 'spansk-2-8-1',
  courseId: 'spansk-2',
  chapterNumber: '8.1',
  title: 'Problemas medioambientales',
  subtitle: 'Miljøproblemer',
  description: 'Lær vokabular og uttrykk om miljøproblemer på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive miljøproblemer', 'forklare årsaker og konsekvenser'],
  content: [
    { id: 'spansk-2-8-1-intro', type: 'text', content: `## Problemas medioambientales

Miljøproblemer er et viktig tema i den moderne verden. Her lærer du å snakke om de viktigste miljøutfordringene på spansk.` },
    { id: 'spansk-2-8-1-def-1', type: 'definition', title: 'Viktige miljøbegreper', content: `**Miljøproblemer (problemas medioambientales):**

| Spansk | Norsk |
|--------|-------|
| la contaminación | forurensning |
| la deforestación | avskoging |
| la desertificación | ørkenspredning |
| la extinción de especies | utrydding av arter |
| la lluvia ácida | sur nedbør |
| el efecto invernadero | drivhuseffekten |
| el calentamiento global | global oppvarming |
| la sequía | tørke |
| las inundaciones | oversvømmelser |
| los residuos / la basura | avfall / søppel |

**Årsaksuttrykk:**
- *La contaminación es causada por...* (Forurensningen er forårsaket av...)
- *Esto provoca / causa...* (Dette forårsaker...)
- *Como consecuencia...* (Som konsekvens...)` },
    { id: 'spansk-2-8-1-text-1', type: 'text', content: `## Beskrive problemer

**Forurensning:**
- *La contaminación del aire es un grave problema.* (Luftforurensning er et alvorlig problem.)
- *Los coches contaminan el aire.* (Bilene forurenser luften.)
- *Las fábricas emiten gases tóxicos.* (Fabrikkene slipper ut giftige gasser.)

**Avskoging:**
- *La deforestación destruye los bosques.* (Avskogingen ødelegger skogene.)
- *Cada año se pierden millones de hectáreas de bosque.* (Hvert år mister man millioner av hektar skog.)` },
    { id: 'spansk-2-8-1-text-2', type: 'text', content: `## Årsak og virkning

For å beskrive sammenhengen mellom årsak og virkning:
- *La contaminación **causa** enfermedades respiratorias.* (Forurensning forårsaker luftveissykdommer.)
- *La deforestación **provoca** la pérdida de biodiversidad.* (Avskoging fører til tap av biologisk mangfold.)
- ***Debido a** la contaminación, muchas especies están en peligro.* (På grunn av forurensningen er mange arter truet.)
- ***Como resultado**, el nivel del mar sube.* (Som resultat stiger havnivået.)` },
    { id: 'spansk-2-8-1-example-1', type: 'example', title: 'Eksempel: Miljøproblem', problem: `Beskriv problemet med forurensning.`, solution: `**La contaminación del aire y del agua es un grave problema medioambiental.** Es causada por las fábricas, los coches y los residuos. Como consecuencia, muchas personas sufren enfermedades respiratorias.` },
    { id: 'spansk-2-8-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-8-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'la contaminación', solution: 'forurensning', answer: 'forurensning' },
        { label: 'b', task: 'la deforestación', solution: 'avskoging', answer: 'avskoging' },
        { label: 'c', task: 'el calentamiento global', solution: 'global oppvarming', answer: 'global oppvarming' },
        { label: 'd', task: 'la extinción de especies', solution: 'utrydding av arter', answer: 'utrydding av arter' },
      ], solution: 'a) forurensning, b) avskoging, c) global oppvarming, d) utrydding av arter', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-8-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant:', subTasks: [
        { label: 'a', task: 'La deforestación es buena para el medio ambiente.', solution: 'Usant - avskoging er skadelig for miljøet.', answer: 'Usant - avskoging er skadelig for miljøet.' },
        { label: 'b', task: 'La contaminación puede causar enfermedades.', solution: 'Sant - forurensning kan forårsake sykdommer.', answer: 'Sant - forurensning kan forårsake sykdommer.' },
        { label: 'c', task: 'El efecto invernadero es un fenómeno natural.', solution: 'Sant - men menneskelig aktivitet forsterker det.', answer: 'Sant - men menneskelig aktivitet forsterker det.' },
        { label: 'd', task: 'La lluvia ácida es un tipo de contaminación.', solution: 'Sant', answer: 'Sant' },
      ], solution: 'a) Usant - avskoging er skadelig for miljøet., b) Sant - forurensning kan forårsake sykdommer., c) Sant - men menneskelig aktivitet forsterker det., d) Sant', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-1-example-2', type: 'example', title: 'Eksempel: Årsak-virkning', problem: `Hva forårsaker avskoging?`, solution: `**La deforestación es causada por** la agricultura intensiva, la ganadería y la tala ilegal. **Provoca** la pérdida de biodiversidad y contribuye al cambio climático.` },
    { id: 'spansk-2-8-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-8-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Beskriv miljøproblemene med hele setninger:', subTasks: [
        { label: 'a', task: 'Forurensning av havet', solution: 'La contaminación del mar es causada por los residuos plásticos y los vertidos industriales.', answer: 'La contaminación del mar es causada por los residuos plásticos y los vertidos industriales.' },
        { label: 'b', task: 'Avskoging i Amazonas', solution: 'La deforestación del Amazonas provoca la pérdida de biodiversidad y contribuye al cambio climático.', answer: 'La deforestación del Amazonas provoca la pérdida de biodiversidad y contribuye al cambio climático.' },
        { label: 'c', task: 'Utrydding av arter', solution: 'La extinción de especies es causada por la destrucción de los hábitats naturales y la contaminación.', answer: 'La extinción de especies es causada por la destrucción de los hábitats naturales y la contaminación.' },
        { label: 'd', task: 'Tørke i Spania', solution: 'La sequía en España es un problema grave, causado por el cambio climático y el uso excesivo del agua.', answer: 'La sequía en España es un problema grave, causado por el cambio climático y el uso excesivo del agua.' },
      ], solution: 'a) La contaminación del mar es causada por los residuos plásticos y los vertidos industriales., b) La deforestación del Amazonas provoca la pérdida de biodiversidad y contribuye al cambio climático., c) La extinción de especies es causada por la destrucción de los hábitats naturales y la contaminación., d) La sequía en España es un problema grave, causado por el cambio climático y el uso excesivo del agua.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-8-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort tekst (3-4 setninger) om et miljøproblem:', subTasks: [
        { label: 'a', task: 'Beskriv et miljøproblem', solution: 'La contaminación del aire es uno de los problemas medioambientales más graves de nuestro tiempo.', answer: 'La contaminación del aire es uno de los problemas medioambientales más graves de nuestro tiempo.' },
        { label: 'b', task: 'Forklar årsakene', solution: 'Es causada principalmente por las emisiones de los coches y las fábricas. Además, la quema de combustibles fósiles contribuye al problema.', answer: 'Es causada principalmente por las emisiones de los coches y las fábricas. Además, la quema de combustibles fósiles contribuye al problema.' },
        { label: 'c', task: 'Beskriv konsekvensene', solution: 'Como consecuencia, muchas personas sufren enfermedades respiratorias y el cambio climático se acelera.', answer: 'Como consecuencia, muchas personas sufren enfermedades respiratorias y el cambio climático se acelera.' },
        { label: 'd', task: 'Foreslå en løsning', solution: 'Para solucionar este problema, debemos usar más energías renovables y reducir el uso del coche.', answer: 'Para solucionar este problema, debemos usar más energías renovables y reducir el uso del coche.' },
      ], solution: 'a) La contaminación del aire es uno de los problemas medioambientales más graves de nuestro tiempo., b) Es causada principalmente por las emisiones de los coches y las fábricas. Además, la quema de combustibles fósiles contribuye al problema., c) Como consecuencia, muchas personas sufren enfermedades respiratorias y el cambio climático se acelera., d) Para solucionar este problema, debemos usar más energías renovables y reducir el uso del coche.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-1-tip-1', type: 'tip', content: `**Nyttige uttrykk:** *Es un grave problema* (Det er et alvorlig problem), *Debemos actuar* (Vi må handle), *Es urgente* (Det haster).` },
    { id: 'spansk-2-8-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Miljøproblemer**

- **Problemer:** contaminación, deforestación, calentamiento global, extinción
- **Årsaker:** fábricas, coches, agricultura intensiva
- **Konsekvenser:** enfermedades, pérdida de biodiversidad, subida del nivel del mar
- **Uttrykk:** es causado por, provoca, como consecuencia, debido a` },
  ],
  exercises: [],
};

// 8.2 El cambio climático
export const CHAPTER_SPANSK_2_8_2: TextbookChapter = {
  id: 'spansk-2-8-2',
  courseId: 'spansk-2',
  chapterNumber: '8.2',
  title: 'El cambio climático',
  subtitle: 'Klimaendringer',
  description: 'Lær å snakke om klimaendringer på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['forklare klimaendringer', 'bruke statistikk og fakta på spansk'],
  content: [
    { id: 'spansk-2-8-2-intro', type: 'text', content: `## El cambio climático

Klimaendringer (*el cambio climático*) er en av de største utfordringene i vår tid. Her lærer du vokabular og uttrykk for å diskutere klimaendringer på spansk.` },
    { id: 'spansk-2-8-2-def-1', type: 'definition', title: 'Klimabegreper (el cambio climático)', content: `**Viktige begreper:**

| Spansk | Norsk |
|--------|-------|
| el cambio climático | klimaendringer |
| el calentamiento global | global oppvarming |
| los gases de efecto invernadero | drivhusgasser |
| las emisiones de CO₂ | CO₂-utslipp |
| el deshielo | issmelting |
| el nivel del mar | havnivå |
| la temperatura media | gjennomsnittstemperatur |
| las energías renovables | fornybar energi |
| los combustibles fósiles | fossilt brensel |
| la huella de carbono | karbonfotavtrykk |

**Statistiske uttrykk:**
- *La temperatura ha subido X grados.* (Temperaturen har steget X grader.)
- *Según los científicos...* (Ifølge forskerne...)
- *Los datos muestran que...* (Dataene viser at...)` },
    { id: 'spansk-2-8-2-text-1', type: 'text', content: `## Årsaker og konsekvenser

**Årsaker (causas):**
- La quema de combustibles fósiles (forbrenning av fossilt brensel)
- Las emisiones de gases de efecto invernadero (utslipp av drivhusgasser)
- La deforestación (avskoging)
- La industria y el transporte (industri og transport)

**Konsekvenser (consecuencias):**
- El aumento de la temperatura (temperaturøkning)
- El deshielo de los polos (smelting av polene)
- La subida del nivel del mar (stigning av havnivået)
- Fenómenos meteorológicos extremos (ekstremvær)` },
    { id: 'spansk-2-8-2-text-2', type: 'text', content: `## Snakke om statistikk

For å presentere fakta og tall:
- *Según los expertos, la temperatura ha subido 1,1 grados desde la era preindustrial.* (Ifølge ekspertene har temperaturen steget 1,1 grader siden den førindustrielle tiden.)
- *Los datos muestran que las emisiones han aumentado un 50%.* (Dataene viser at utslippene har økt 50%.)
- *Se estima que el nivel del mar subirá entre 30 y 100 cm.* (Det anslås at havnivået vil stige mellom 30 og 100 cm.)
- *Es probable que / Es posible que + subjuntivo* (Det er sannsynlig/mulig at...)` },
    { id: 'spansk-2-8-2-example-1', type: 'example', title: 'Eksempel: Klimaendringer', problem: `Forklar hva klimaendringer er på spansk.`, solution: `**El cambio climático es el aumento de la temperatura global causado por las emisiones de gases de efecto invernadero.** Como consecuencia, los polos se derriten y el nivel del mar sube.` },
    { id: 'spansk-2-8-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-8-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'el cambio climático', solution: 'klimaendringer', answer: 'klimaendringer' },
        { label: 'b', task: 'los gases de efecto invernadero', solution: 'drivhusgasser', answer: 'drivhusgasser' },
        { label: 'c', task: 'las energías renovables', solution: 'fornybar energi', answer: 'fornybar energi' },
        { label: 'd', task: 'los combustibles fósiles', solution: 'fossilt brensel', answer: 'fossilt brensel' },
      ], solution: 'a) klimaendringer, b) drivhusgasser, c) fornybar energi, d) fossilt brensel', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-8-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant:', subTasks: [
        { label: 'a', task: 'El cambio climático es causado solo por causas naturales.', solution: 'Usant - det er hovedsakelig forårsaket av menneskelig aktivitet.', answer: 'Usant - det er hovedsakelig forårsaket av menneskelig aktivitet.' },
        { label: 'b', task: 'Los combustibles fósiles producen gases de efecto invernadero.', solution: 'Sant', answer: 'Sant' },
        { label: 'c', task: 'El deshielo de los polos provoca la subida del nivel del mar.', solution: 'Sant', answer: 'Sant' },
        { label: 'd', task: 'Las energías renovables contribuyen al cambio climático.', solution: 'Usant - fornybar energi reduserer utslipp.', answer: 'Usant - fornybar energi reduserer utslipp.' },
      ], solution: 'a) Usant - det er hovedsakelig forårsaket av menneskelig aktivitet., b) Sant, c) Sant, d) Usant - fornybar energi reduserer utslipp.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-2-example-2', type: 'example', title: 'Eksempel: Statistikk', problem: `Presenter et faktum om klimaendringer.`, solution: `**Según los científicos, la temperatura media global ha subido 1,1 grados desde la era preindustrial.** Los datos muestran que las emisiones de CO₂ siguen aumentando.` },
    { id: 'spansk-2-8-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-8-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Bruk statistiske uttrykk til å presentere fakta:', subTasks: [
        { label: 'a', task: 'Temperaturen har steget.', solution: 'Según los científicos, la temperatura media global ha subido 1,1 grados.', answer: 'Según los científicos, la temperatura media global ha subido 1,1 grados.' },
        { label: 'b', task: 'CO₂-utslippene øker.', solution: 'Los datos muestran que las emisiones de CO₂ han aumentado significativamente en las últimas décadas.', answer: 'Los datos muestran que las emisiones de CO₂ han aumentado significativamente en las últimas décadas.' },
        { label: 'c', task: 'Havnivået stiger.', solution: 'Se estima que el nivel del mar subirá entre 30 y 100 centímetros durante este siglo.', answer: 'Se estima que el nivel del mar subirá entre 30 y 100 centímetros durante este siglo.' },
        { label: 'd', task: 'Ekstremvær blir vanligere.', solution: 'Es probable que los fenómenos meteorológicos extremos sean cada vez más frecuentes.', answer: 'Es probable que los fenómenos meteorológicos extremos sean cada vez más frecuentes.' },
      ], solution: 'a) Según los científicos, la temperatura media global ha subido 1,1 grados., b) Los datos muestran que las emisiones de CO₂ han aumentado significativamente en las últimas décadas., c) Se estima que el nivel del mar subirá entre 30 y 100 centímetros durante este siglo., d) Es probable que los fenómenos meteorológicos extremos sean cada vez más frecuentes.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-8-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort presentasjon om klimaendringer (en setning per punkt):', subTasks: [
        { label: 'a', task: 'Definer klimaendringer.', solution: 'El cambio climático es el aumento de la temperatura global causado principalmente por las emisiones de gases de efecto invernadero.', answer: 'El cambio climático es el aumento de la temperatura global causado principalmente por las emisiones de gases de efecto invernadero.' },
        { label: 'b', task: 'Forklar årsakene.', solution: 'Las principales causas son la quema de combustibles fósiles, la deforestación y las emisiones industriales.', answer: 'Las principales causas son la quema de combustibles fósiles, la deforestación y las emisiones industriales.' },
        { label: 'c', task: 'Beskriv konsekvensene.', solution: 'Como consecuencia, los polos se derriten, el nivel del mar sube y los fenómenos meteorológicos extremos son más frecuentes.', answer: 'Como consecuencia, los polos se derriten, el nivel del mar sube y los fenómenos meteorológicos extremos son más frecuentes.' },
        { label: 'd', task: 'Foreslå løsninger.', solution: 'Para combatir el cambio climático, debemos usar energías renovables, reducir las emisiones y proteger los bosques.', answer: 'Para combatir el cambio climático, debemos usar energías renovables, reducir las emisiones y proteger los bosques.' },
      ], solution: 'a) El cambio climático es el aumento de la temperatura global causado principalmente por las emisiones de gases de efecto invernadero., b) Las principales causas son la quema de combustibles fósiles, la deforestación y las emisiones industriales., c) Como consecuencia, los polos se derriten, el nivel del mar sube y los fenómenos meteorológicos extremos son más frecuentes., d) Para combatir el cambio climático, debemos usar energías renovables, reducir las emisiones y proteger los bosques.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-2-tip-1', type: 'tip', content: `**Nyttige statistikk-uttrykk:** *Según los datos*, *Se estima que*, *Los expertos afirman que*, *Es probable que*.` },
    { id: 'spansk-2-8-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Klimaendringer**

- **Begreper:** cambio climático, calentamiento global, efecto invernadero
- **Årsaker:** combustibles fósiles, emisiones, deforestación
- **Konsekvenser:** deshielo, subida del nivel del mar, fenómenos extremos
- **Statistikk:** Según los expertos, Los datos muestran, Se estima que` },
  ],
  exercises: [],
};

// 8.3 Sostenibilidad
export const CHAPTER_SPANSK_2_8_3: TextbookChapter = {
  id: 'spansk-2-8-3',
  courseId: 'spansk-2',
  chapterNumber: '8.3',
  title: 'Sostenibilidad',
  subtitle: 'Bærekraft i hverdagen',
  description: 'Lær å snakke om bærekraft og miljøvennlige tiltak på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive bærekraftige tiltak', 'diskutere miljøvennlige vaner'],
  content: [
    { id: 'spansk-2-8-3-intro', type: 'text', content: `## Sostenibilidad

Bærekraft (*sostenibilidad*) handler om å dekke våre behov uten å ødelegge for fremtidige generasjoner. Her lærer du å snakke om bærekraftige tiltak og miljøvennlige vaner.` },
    { id: 'spansk-2-8-3-def-1', type: 'definition', title: 'De tre R-ene og bærekraft', content: `**Las tres erres (De tre R-ene):**

| Spansk | Norsk | Eksempel |
|--------|-------|----------|
| Reducir | Redusere | Usar menos plástico (bruke mindre plast) |
| Reutilizar | Gjenbruke | Usar bolsas de tela (bruke tøyposer) |
| Reciclar | Resirkulere | Separar la basura (sortere søppel) |

**Bærekraftige tiltak:**
- *Ahorrar agua y energía* (Spare vann og energi)
- *Usar transporte público* (Bruke offentlig transport)
- *Comprar productos locales* (Kjøpe lokale produkter)
- *Evitar el desperdicio de alimentos* (Unngå matsvinn)
- *Usar energías renovables* (Bruke fornybar energi)
- *Plantar árboles* (Plante trær)` },
    { id: 'spansk-2-8-3-text-1', type: 'text', content: `## Hverdagstiltak

**I hjemmet:**
- *Apagar las luces cuando no se usan.* (Slå av lysene når de ikke brukes.)
- *Ducharse en vez de bañarse.* (Dusje i stedet for å bade.)
- *Separar la basura para reciclar.* (Sortere søpplet for å resirkulere.)
- *Usar electrodomésticos eficientes.* (Bruke energieffektive apparater.)

**I transport:**
- *Ir en bicicleta o a pie.* (Sykle eller gå.)
- *Usar el transporte público.* (Bruke offentlig transport.)
- *Compartir coche (carpooling).* (Samkjøring.)` },
    { id: 'spansk-2-8-3-text-2', type: 'text', content: `## Uttrykk for å gi råd

For å snakke om hva folk bør gjøre:
- *Debemos reciclar más.* (Vi må resirkulere mer.)
- *Es importante reducir el consumo.* (Det er viktig å redusere forbruket.)
- *Hay que ahorrar agua.* (Man må spare vann.)
- *Podemos contribuir reciclando.* (Vi kan bidra ved å resirkulere.)
- *Cada uno puede hacer su parte.* (Hver enkelt kan gjøre sin del.)
- *Si todos colaboramos, podemos...* (Hvis alle samarbeider, kan vi...)` },
    { id: 'spansk-2-8-3-example-1', type: 'example', title: 'Eksempel: De tre R-ene', problem: `Forklar de tre R-ene på spansk.`, solution: `**Reducir** (redusere forbruket), **Reutilizar** (bruke ting om igjen) y **Reciclar** (sende materialer til gjenvinning). Es importante seguir este orden de prioridad.` },
    { id: 'spansk-2-8-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-8-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match tiltak med kategori (reducir/reutilizar/reciclar):', subTasks: [
        { label: 'a', task: 'Separar la basura', solution: 'Reciclar', answer: 'Reciclar' },
        { label: 'b', task: 'Usar bolsas de tela', solution: 'Reutilizar', answer: 'Reutilizar' },
        { label: 'c', task: 'Comprar menos ropa', solution: 'Reducir', answer: 'Reducir' },
        { label: 'd', task: 'Llevar los envases al contenedor', solution: 'Reciclar', answer: 'Reciclar' },
      ], solution: 'a) Reciclar, b) Reutilizar, c) Reducir, d) Reciclar', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-8-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Oversett til spansk:', subTasks: [
        { label: 'a', task: 'Spare vann', solution: 'Ahorrar agua', answer: 'Ahorrar agua' },
        { label: 'b', task: 'Bruke offentlig transport', solution: 'Usar el transporte público', answer: 'Usar el transporte público' },
        { label: 'c', task: 'Sortere søppel', solution: 'Separar la basura', answer: 'Separar la basura' },
        { label: 'd', task: 'Slå av lysene', solution: 'Apagar las luces', answer: 'Apagar las luces' },
      ], solution: 'a) Ahorrar agua, b) Usar el transporte público, c) Separar la basura, d) Apagar las luces', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-3-example-2', type: 'example', title: 'Eksempel: Gi råd', problem: `Gi tre bærekraftige råd.`, solution: `**Debemos** ahorrar agua, **es importante** usar el transporte público y **hay que** separar la basura para reciclar.` },
    { id: 'spansk-2-8-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-8-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Gi bærekraftige råd med ulike uttrykk:', subTasks: [
        { label: 'a', task: 'Gi råd om vann (Debemos...)', solution: 'Debemos ahorrar agua, por ejemplo duchándonos en vez de bañándonos.', answer: 'Debemos ahorrar agua, por ejemplo duchándonos en vez de bañándonos.' },
        { label: 'b', task: 'Gi råd om transport (Es importante...)', solution: 'Es importante usar el transporte público o ir en bicicleta en vez de usar el coche.', answer: 'Es importante usar el transporte público o ir en bicicleta en vez de usar el coche.' },
        { label: 'c', task: 'Gi råd om resirkulering (Hay que...)', solution: 'Hay que separar la basura y llevar los envases al contenedor de reciclaje.', answer: 'Hay que separar la basura y llevar los envases al contenedor de reciclaje.' },
        { label: 'd', task: 'Gi råd om energi (Podemos...)', solution: 'Podemos contribuir apagando las luces y usando electrodomésticos eficientes.', answer: 'Podemos contribuir apagando las luces y usando electrodomésticos eficientes.' },
      ], solution: 'a) Debemos ahorrar agua, por ejemplo duchándonos en vez de bañándonos., b) Es importante usar el transporte público o ir en bicicleta en vez de usar el coche., c) Hay que separar la basura y llevar los envases al contenedor de reciclaje., d) Podemos contribuir apagando las luces y usando electrodomésticos eficientes.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-8-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort tekst om bærekraft i hverdagen din:', subTasks: [
        { label: 'a', task: 'Beskriv hva du gjør for miljøet.', solution: 'En mi vida diaria, intento ser más sostenible. Reciclo la basura y uso el transporte público.', answer: 'En mi vida diaria, intento ser más sostenible. Reciclo la basura y uso el transporte público.' },
        { label: 'b', task: 'Foreslå tiltak for skolen din.', solution: 'En el instituto, podemos reducir el uso de papel, reciclar más y ahorrar energía apagando las luces.', answer: 'En el instituto, podemos reducir el uso de papel, reciclar más y ahorrar energía apagando las luces.' },
        { label: 'c', task: 'Hva kan familier gjøre?', solution: 'Las familias pueden comprar productos locales, reducir el desperdicio de alimentos y usar electrodomésticos eficientes.', answer: 'Las familias pueden comprar productos locales, reducir el desperdicio de alimentos y usar electrodomésticos eficientes.' },
        { label: 'd', task: 'Hva kan samfunnet gjøre?', solution: 'La sociedad debe invertir en energías renovables, mejorar el transporte público y educar a los ciudadanos sobre sostenibilidad.', answer: 'La sociedad debe invertir en energías renovables, mejorar el transporte público y educar a los ciudadanos sobre sostenibilidad.' },
      ], solution: 'a) En mi vida diaria, intento ser más sostenible. Reciclo la basura y uso el transporte público., b) En el instituto, podemos reducir el uso de papel, reciclar más y ahorrar energía apagando las luces., c) Las familias pueden comprar productos locales, reducir el desperdicio de alimentos y usar electrodomésticos eficientes., d) La sociedad debe invertir en energías renovables, mejorar el transporte público y educar a los ciudadanos sobre sostenibilidad.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-3-tip-1', type: 'tip', content: `**Husk de tre R-ene i riktig rekkefølge:** Først **reducir** (redusere), deretter **reutilizar** (gjenbruke), og til slutt **reciclar** (resirkulere). Å redusere er det viktigste!` },
    { id: 'spansk-2-8-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Bærekraft**

- **Las tres erres:** Reducir, Reutilizar, Reciclar
- **Hverdagstiltak:** Ahorrar agua/energía, transporte público, separar basura
- **Gi råd:** Debemos, Es importante, Hay que, Podemos
- **Nøkkel:** Cada uno puede hacer su parte` },
  ],
  exercises: [],
};

// 8.4 Argumentar y debatir
export const CHAPTER_SPANSK_2_8_4: TextbookChapter = {
  id: 'spansk-2-8-4',
  courseId: 'spansk-2',
  chapterNumber: '8.4',
  title: 'Argumentar y debatir',
  subtitle: 'Argumentere og debattere',
  description: 'Lær å uttrykke meninger, argumentere og debattere på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['uttrykke meninger', 'bruke argumentasjonsuttrykk og konnektorer'],
  content: [
    { id: 'spansk-2-8-4-intro', type: 'text', content: `## Argumentar y debatir

Å kunne argumentere og debattere er en viktig språkferdighet. Her lærer du uttrykk for å uttrykke meninger, være enig/uenig, og strukturere argumenter.` },
    { id: 'spansk-2-8-4-def-1', type: 'definition', title: 'Debattuttrykk (expresiones para debatir)', content: `**Uttrykke meninger:**

| Spansk | Norsk |
|--------|-------|
| En mi opinión... | Etter min mening... |
| Creo que... | Jeg tror at... |
| Me parece que... | Det virker som... |
| Estoy de acuerdo (con) | Jeg er enig (med) |
| No estoy de acuerdo | Jeg er uenig |
| Estoy a favor de... | Jeg er for... |
| Estoy en contra de... | Jeg er imot... |

**Konnektorer:**

| Spansk | Norsk |
|--------|-------|
| sin embargo | likevel |
| además | dessuten |
| por un lado... por otro lado | på den ene siden... på den andre siden |
| en primer lugar | for det første |
| por lo tanto | derfor |
| en conclusión | avslutningsvis |` },
    { id: 'spansk-2-8-4-text-1', type: 'text', content: `## Strukturere argumenter

En god argumentasjon følger denne strukturen:
1. **Tesis:** *En mi opinión, debemos reciclar más.* (Etter min mening bør vi resirkulere mer.)
2. **Argumento 1:** *En primer lugar, reciclar reduce la contaminación.* (For det første reduserer resirkulering forurensning.)
3. **Argumento 2:** *Además, ahorra recursos naturales.* (Dessuten sparer det naturressurser.)
4. **Contraargumento:** *Sin embargo, algunos piensan que es difícil.* (Likevel mener noen at det er vanskelig.)
5. **Conclusión:** *En conclusión, reciclar es necesario para el futuro.* (Avslutningsvis er resirkulering nødvendig for fremtiden.)` },
    { id: 'spansk-2-8-4-text-2', type: 'text', content: `## Være enig og uenig

**Enig:**
- *Estoy de acuerdo contigo.* (Jeg er enig med deg.)
- *Tienes razón.* (Du har rett.)
- *Exacto. / Exactamente.* (Nettopp.)
- *Comparto tu opinión.* (Jeg deler din mening.)

**Uenig:**
- *No estoy de acuerdo.* (Jeg er uenig.)
- *No comparto esa opinión.* (Jeg deler ikke den meningen.)
- *Creo que te equivocas.* (Jeg tror du tar feil.)
- *Respeto tu opinión, pero...* (Jeg respekterer meningen din, men...)` },
    { id: 'spansk-2-8-4-example-1', type: 'example', title: 'Eksempel: Uttrykke mening', problem: `Si din mening om resirkulering.`, solution: `**En mi opinión, reciclar es fundamental para proteger el medio ambiente.** Creo que todos debemos hacer un esfuerzo para separar la basura.` },
    { id: 'spansk-2-8-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-8-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match uttrykk med funksjon:', subTasks: [
        { label: 'a', task: 'En mi opinión...', solution: 'Uttrykke mening', answer: 'Uttrykke mening' },
        { label: 'b', task: 'Estoy de acuerdo.', solution: 'Være enig', answer: 'Være enig' },
        { label: 'c', task: 'Sin embargo...', solution: 'Motargument / kontrast', answer: 'Motargument / kontrast' },
        { label: 'd', task: 'En conclusión...', solution: 'Oppsummere', answer: 'Oppsummere' },
      ], solution: 'a) Uttrykke mening, b) Være enig, c) Motargument / kontrast, d) Oppsummere', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-8-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig konnektor:', subTasks: [
        { label: 'a', task: '___, debemos reciclar más. (Etter min mening)', solution: 'En mi opinión', answer: 'En mi opinión' },
        { label: 'b', task: 'Reciclar es bueno. ___, ahorra recursos. (Dessuten)', solution: 'Además', answer: 'Además' },
        { label: 'c', task: '___, no todos reciclan. (Likevel)', solution: 'Sin embargo', answer: 'Sin embargo' },
        { label: 'd', task: '___, debemos actuar ahora. (Avslutningsvis)', solution: 'En conclusión', answer: 'En conclusión' },
      ], solution: 'a) En mi opinión, b) Además, c) Sin embargo, d) En conclusión', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-4-example-2', type: 'example', title: 'Eksempel: Være uenig høflig', problem: `Noen sier: "No necesitamos reciclar." Vær uenig høflig.`, solution: `**Respeto tu opinión, pero no estoy de acuerdo.** Creo que reciclar es necesario para reducir la contaminación y proteger el planeta.` },
    { id: 'spansk-2-8-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-8-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv argumenter for og imot:', subTasks: [
        { label: 'a', task: 'For: Bruke offentlig transport', solution: 'Estoy a favor de usar el transporte público porque reduce la contaminación y es más económico.', answer: 'Estoy a favor de usar el transporte público porque reduce la contaminación y es más económico.' },
        { label: 'b', task: 'Imot: Forby plast', solution: 'Por un lado, prohibir el plástico reduciría la contaminación. Por otro lado, sería difícil encontrar alternativas para todos los usos.', answer: 'Por un lado, prohibir el plástico reduciría la contaminación. Por otro lado, sería difícil encontrar alternativas para todos los usos.' },
        { label: 'c', task: 'Enig: Vi bør bruke fornybar energi', solution: 'Estoy de acuerdo. Además, las energías renovables son cada vez más baratas y eficientes.', answer: 'Estoy de acuerdo. Además, las energías renovables son cada vez más baratas y eficientes.' },
        { label: 'd', task: 'Uenig: Klimaendringer er ikke viktig', solution: 'No estoy de acuerdo. Según los científicos, el cambio climático es uno de los mayores problemas de nuestro tiempo.', answer: 'No estoy de acuerdo. Según los científicos, el cambio climático es uno de los mayores problemas de nuestro tiempo.' },
      ], solution: 'a) Estoy a favor de usar el transporte público porque reduce la contaminación y es más económico., b) Por un lado, prohibir el plástico reduciría la contaminación. Por otro lado, sería difícil encontrar alternativas para todos los usos., c) Estoy de acuerdo. Además, las energías renovables son cada vez más baratas y eficientes., d) No estoy de acuerdo. Según los científicos, el cambio climático es uno de los mayores problemas de nuestro tiempo.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-8-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et strukturert argument om et miljøtema:', subTasks: [
        { label: 'a', task: 'Skriv tesis (påstand)', solution: 'En mi opinión, todos deberíamos reducir nuestro consumo de plástico para proteger el medio ambiente.', answer: 'En mi opinión, todos deberíamos reducir nuestro consumo de plástico para proteger el medio ambiente.' },
        { label: 'b', task: 'Skriv to argumenter', solution: 'En primer lugar, el plástico contamina los océanos y mata a los animales marinos. Además, tarda cientos de años en degradarse.', answer: 'En primer lugar, el plástico contamina los océanos y mata a los animales marinos. Además, tarda cientos de años en degradarse.' },
        { label: 'c', task: 'Skriv et motargument og svar', solution: 'Sin embargo, algunos argumentan que el plástico es práctico y barato. No obstante, existen alternativas sostenibles como las bolsas de tela.', answer: 'Sin embargo, algunos argumentan que el plástico es práctico y barato. No obstante, existen alternativas sostenibles como las bolsas de tela.' },
        { label: 'd', task: 'Skriv konklusjon', solution: 'En conclusión, debemos reducir el uso de plástico. Cada uno puede contribuir usando alternativas sostenibles en su vida diaria.', answer: 'En conclusión, debemos reducir el uso de plástico. Cada uno puede contribuir usando alternativas sostenibles en su vida diaria.' },
      ], solution: 'a) En mi opinión, todos deberíamos reducir nuestro consumo de plástico para proteger el medio ambiente., b) En primer lugar, el plástico contamina los océanos y mata a los animales marinos. Además, tarda cientos de años en degradarse., c) Sin embargo, algunos argumentan que el plástico es práctico y barato. No obstante, existen alternativas sostenibles como las bolsas de tela., d) En conclusión, debemos reducir el uso de plástico. Cada uno puede contribuir usando alternativas sostenibles en su vida diaria.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-8-4-tip-1', type: 'tip', content: `**Argumentasjonstips:** Strukturer alltid argumentene dine med konnektorer. Bruk *en primer lugar, además, sin embargo, en conclusión* for å gjøre teksten logisk og overbevisende.` },
    { id: 'spansk-2-8-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Argumentere og debattere**

- **Meningsuttrykk:** En mi opinión, Creo que, Me parece que
- **Enig/uenig:** Estoy de acuerdo, No comparto esa opinión
- **Konnektorer:** sin embargo, además, por lo tanto, en conclusión
- **Struktur:** Tesis → Argumenter → Motargument → Konklusjon` },
  ],
  exercises: [],
};

export const SPANSK_2_CHAPTERS_7_8: TextbookChapter[] = [
  CHAPTER_SPANSK_2_7_1,
  CHAPTER_SPANSK_2_7_2,
  CHAPTER_SPANSK_2_7_3,
  CHAPTER_SPANSK_2_7_4,
  CHAPTER_SPANSK_2_8_1,
  CHAPTER_SPANSK_2_8_2,
  CHAPTER_SPANSK_2_8_3,
  CHAPTER_SPANSK_2_8_4,
];
