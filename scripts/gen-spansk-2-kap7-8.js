const fs = require('fs');
const path = require('path');
const outDir = path.join(__dirname, '..', 'src', 'lib', 'data');

// Helper: generate a standard subchapter with minimal boilerplate
function mkSub(n, title, subtitle, desc, goals, defTitle, defContent, intro, texts, examples, exercises, tip, note) {
  return { n, title, subtitle, desc, goals, defTitle, defContent, intro, texts, examples, exercises, tip, note };
}

function mkEx(diff, task, subs) {
  return { diff, task, subs: subs.map(s => ({ t: s[0], s: s[1] })) };
}

// ============================================================================
// SPANSK 2 CHAPTERS 7-8
// ============================================================================
const s2ch7 = {
  title: 'EL MUNDO LABORAL',
  subs: [
    mkSub('7.1', 'Profesiones y trabajo', 'Yrker og arbeidsliv',
      'Lær om yrker og arbeidsliv på spansk.',
      ['beskrive yrker og arbeidsoppgaver', 'snakke om arbeidsliv'],
      'Vanlige yrker (profesiones)',
      `**Vanlige yrker:**\n\n| Spansk | Norsk | Arbeidsplass |\n|--------|-------|-------------|\n| el/la médico/a | lege | el hospital |\n| el/la profesor/a | lærer | la escuela / el instituto |\n| el/la abogado/a | advokat | el despacho / la oficina |\n| el/la ingeniero/a | ingeniør | la empresa |\n| el/la enfermero/a | sykepleier | el hospital / la clínica |\n| el/la periodista | journalist | el periódico / la redacción |\n| el/la cocinero/a | kokk | el restaurante |\n| el/la camarero/a | servitør | el bar / el restaurante |\n| el/la programador/a | programmerer | la oficina / en casa |\n| el/la arquitecto/a | arkitekt | el estudio |\n\n**Kjønnsformer:** De fleste yrker har hankjønns- og hunkjønnsformer: *el médico / la médica, el abogado / la abogada*. Noen er felles: *el/la periodista, el/la dentista*.`,
      'I dette delkapittelet lærer du navn på vanlige yrker, hvor folk jobber, og hvordan du beskriver hva folk gjør i jobben sin.',
      ['## Beskrive yrker\n\n**Spørsmål:**\n- *¿A qué te dedicas?* (Hva jobber du med?)\n- *¿En qué trabajas?* (Hva jobber du med?)\n- *¿Cuál es tu profesión?* (Hva er yrket ditt?)\n\n**Svar:**\n- *Soy médico/a.* (Jeg er lege.)\n- *Trabajo como profesor/a.* (Jeg jobber som lærer.)\n- *Me dedico a la enseñanza.* (Jeg jobber med undervisning.)\n- *Trabajo en un hospital.* (Jeg jobber på et sykehus.)',
       '## Arbeidsoppgaver\n\nFor å beskrive hva folk gjør på jobben:\n- *Un médico cura a los enfermos.* (En lege helbreder de syke.)\n- *Un profesor enseña a los alumnos.* (En lærer underviser elevene.)\n- *Un abogado defiende a sus clientes.* (En advokat forsvarer klientene sine.)\n- *Un periodista escribe artículos.* (En journalist skriver artikler.)\n- *Un cocinero prepara la comida.* (En kokk lager maten.)'],
      [{ title: 'Spør om yrke', problem: '¿A qué te dedicas? (du er lege)', solution: '**Soy médico/a.** Eller: **Trabajo como médico/a en un hospital.**' },
       { title: 'Beskriv yrket', problem: 'Hva gjør en lærer?', solution: '**Un profesor enseña a los alumnos.** También prepara las clases y corrige exámenes.' }],
      [mkEx('lett', 'Match yrke med arbeidsplass:', [
        ['el médico', 'el hospital'], ['el profesor', 'la escuela / el instituto'],
        ['el cocinero', 'el restaurante'], ['el abogado', 'el despacho / la oficina']]),
       mkEx('lett', 'Match yrke med arbeidsoppgave:', [
        ['el periodista', 'escribe artículos'], ['el enfermero', 'cuida a los enfermos'],
        ['el arquitecto', 'diseña edificios'], ['el programador', 'escribe código / programas']]),
       mkEx('medium', 'Svar på spørsmålene med hele setninger:', [
        ['¿A qué se dedica un abogado?', 'Un abogado se dedica a defender a sus clientes en cuestiones legales.'],
        ['¿Dónde trabaja un cocinero?', 'Un cocinero trabaja en un restaurante o en un hotel.'],
        ['¿Qué hace un periodista?', 'Un periodista investiga y escribe artículos para un periódico o una revista.'],
        ['¿Cuál es la profesión de alguien que trabaja en un hospital y cura enfermos?', 'Es médico/a.']]),
       mkEx('vanskelig', 'Oversett til spansk:', [
        ['Jeg jobber som ingeniør i en stor bedrift.', 'Trabajo como ingeniero/a en una empresa grande.'],
        ['Broren min er journalist og skriver artikler for en avis.', 'Mi hermano es periodista y escribe artículos para un periódico.'],
        ['Hva vil du jobbe med i fremtiden?', '¿A qué te quieres dedicar en el futuro? / ¿En qué quieres trabajar en el futuro?'],
        ['Moren min er advokat og jobber på et kontor i sentrum.', 'Mi madre es abogada y trabaja en una oficina en el centro.']])],
      '**Husk:** På spansk sier man *Soy médico* uten artikkel (ikke *Soy un médico*), i motsetning til norsk der vi sier \"Jeg er lege\".',
      '**Oppsummering: Yrker og arbeidsliv**\n\n- **Spørsmål:** ¿A qué te dedicas?, ¿En qué trabajas?\n- **Svar:** Soy..., Trabajo como..., Me dedico a...\n- **Yrker:** médico, profesor, abogado, ingeniero, enfermero, periodista\n- **Arbeidsplasser:** hospital, escuela, oficina, restaurante\n- **Husk:** Ingen artikkel: Soy médico (ikke Soy un médico)'
    ),
    mkSub('7.2', 'El currículum vitae', 'Skrive CV på spansk',
      'Lær å skrive en CV (currículum vitae) på spansk.',
      ['skrive en CV på spansk', 'bruke formelt språk i skriftlige dokumenter'],
      'CV-seksjoner (secciones del currículum)',
      `**En spansk CV inneholder:**\n\n| Seksjon | Spansk | Innhold |\n|---------|--------|--------|\n| Personlige data | Datos personales | Navn, adresse, telefon, e-post |\n| Utdanning | Formación académica | Skoler, universiteter, kurs |\n| Arbeidserfaring | Experiencia laboral | Tidligere jobber |\n| Språk | Idiomas | Språk og nivå |\n| Ferdigheter | Habilidades | Tekniske og personlige ferdigheter |\n| Interesser | Aficiones / Intereses | Hobbyer og fritidsaktiviteter |\n\n**Nyttige uttrykk:**\n- *Licenciado/a en...* (Utdannet i...)\n- *Máster en...* (Master i...)\n- *Nivel avanzado / intermedio / básico* (Avansert / middels / grunnleggende nivå)`,
      'En CV er et viktig dokument når du søker jobb. På spansk kalles det **currículum vitae** eller bare **currículum**. Her lærer du hvordan du skriver en profesjonell CV.',
      ['## Datos personales\n\nDenne seksjonen inkluderer:\n- **Nombre:** María García López\n- **Fecha de nacimiento:** 15 de mayo de 1998\n- **Dirección:** Calle Gran Vía 25, Madrid\n- **Teléfono:** +34 612 345 678\n- **Correo electrónico:** maria.garcia@email.com\n- **Nacionalidad:** Española\n\n## Formación académica\n\nSkrives i omvendt kronologisk rekkefølge (nyeste først):\n- *2020-2024: Licenciatura en Derecho, Universidad Complutense de Madrid*\n- *2016-2020: Bachillerato, IES Cervantes, Madrid*',
       '## Experiencia laboral\n\nBeskriv tidligere jobber:\n- *2023-actualidad: Asistente legal en Bufete López & Asociados*\n  - Responsabilidades: Investigación jurídica, atención al cliente\n- *2021-2023: Camarera en Restaurante El Olivo*\n  - Responsabilidades: Servicio al cliente, gestión de pedidos\n\n## Idiomas y habilidades\n\n**Idiomas:**\n- Español: lengua materna\n- Inglés: nivel avanzado (B2)\n- Francés: nivel intermedio (B1)\n\n**Habilidades:**\n- Trabajo en equipo (samarbeid)\n- Comunicación (kommunikasjon)\n- Microsoft Office (avanzado)'],
      [{ title: 'CV-seksjon', problem: 'Hva skriver du under \"Formación académica\"?', solution: 'Under **Formación académica** skriver du utdanningen din i omvendt kronologisk rekkefølge: år, grad, institusjon. F.eks.: *2020-2024: Licenciatura en Derecho, Universidad Complutense.*' },
       { title: 'Formelt språk', problem: 'Hvordan beskriver du språknivået ditt?', solution: 'Bruk: **nivel avanzado** (avansert), **nivel intermedio** (middels) eller **nivel básico** (grunnleggende). Eller europeisk rammeverk: A1-C2.' }],
      [mkEx('lett', 'Match spansk CV-seksjon med norsk:', [
        ['Datos personales', 'Personlige data'], ['Formación académica', 'Utdanning'],
        ['Experiencia laboral', 'Arbeidserfaring'], ['Idiomas', 'Språk']]),
       mkEx('lett', 'Match nivåbeskrivelse med norsk:', [
        ['nivel avanzado', 'avansert nivå'], ['nivel intermedio', 'middels nivå'],
        ['nivel básico', 'grunnleggende nivå'], ['lengua materna', 'morsmål']]),
       mkEx('medium', 'Skriv CV-seksjoner på spansk:', [
        ['Skriv dine personlige data (bruk fiktive data).', 'Nombre: Ole Hansen. Fecha de nacimiento: 10 de enero de 2005. Dirección: Storgata 5, Oslo. Teléfono: +47 123 45 678.'],
        ['Skriv din utdanning.', 'Formación académica: 2021-actualidad: Bachillerato (videregående), [Skolenavn], Noruega.'],
        ['Beskriv språkkunnskapene dine.', 'Idiomas: Noruego: lengua materna. Inglés: nivel avanzado. Español: nivel intermedio.'],
        ['List opp tre ferdigheter.', 'Habilidades: Trabajo en equipo, comunicación, conocimientos de informática.']]),
       mkEx('vanskelig', 'Skriv en komplett mini-CV på spansk (bruk fiktive data):', [
        ['Skriv Datos personales', 'Nombre: Ana Nordvik. Fecha de nacimiento: 22 de marzo de 2006. Dirección: Parkveien 12, Bergen. Correo: ana.nordvik@email.com.'],
        ['Skriv Formación académica og Experiencia', 'Formación: 2022-actualidad: Bachillerato, Nordahl Grieg VGS. Experiencia: 2024: Dependienta en tienda de ropa (verano).'],
        ['Skriv Idiomas', 'Idiomas: Noruego (lengua materna), Inglés (nivel avanzado, B2), Español (nivel intermedio, B1).'],
        ['Skriv Habilidades og Aficiones', 'Habilidades: Trabajo en equipo, responsabilidad, puntualidad, Microsoft Office. Aficiones: Deportes, lectura, música.']])],
      '**Tips for CV:** Hold CVen kort (1-2 sider), bruk formelt språk og unngå forkortelser. Tilpass alltid CVen til jobben du søker på.',
      '**Oppsummering: CV på spansk**\n\n- **Seksjoner:** Datos personales, Formación, Experiencia, Idiomas, Habilidades\n- **Rekkefølge:** Nyeste først (omvendt kronologisk)\n- **Språknivå:** avanzado, intermedio, básico / A1-C2\n- **Formelt språk:** Licenciado/a en..., Responsabilidades:...\n- **Tips:** Kort, ryddig, tilpasset jobben'
    ),
    mkSub('7.3', 'La entrevista de trabajo', 'Jobbintervjuet',
      'Lær språk og uttrykk for jobbintervju på spansk.',
      ['forstå og svare på intervjuspørsmål', 'bruke formelt språk (usted)'],
      'Vanlige intervjuspørsmål',
      `**Typiske spørsmål og svar i jobbintervju:**\n\n| Spørsmål | Norsk |\n|----------|-------|\n| ¿Por qué quiere trabajar aquí? | Hvorfor vil du jobbe her? |\n| ¿Cuáles son sus puntos fuertes? | Hva er dine sterke sider? |\n| ¿Cuáles son sus puntos débiles? | Hva er dine svake sider? |\n| ¿Tiene experiencia en...? | Har du erfaring med...? |\n| ¿Dónde se ve en cinco años? | Hvor ser du deg selv om fem år? |\n| Hábleme de usted. | Fortell om deg selv. |\n| ¿Cuándo puede empezar? | Når kan du begynne? |\n\n**Merk bruk av usted-formen:** I formelle situasjoner som jobbintervju brukes *usted* (De-formen).`,
      'Et jobbintervju (*entrevista de trabajo*) er en viktig del av jobbsøkingsprosessen. Her lærer du vanlige spørsmål, hvordan du svarer, og hvordan du bruker formelt språk.',
      ['## Tú vs. Usted\n\nI jobbintervju brukes **usted** (formelt \"De\"):\n\n| Tú (uformelt) | Usted (formelt) |\n|----------------|------------------|\n| ¿Qué haces? | ¿Qué hace usted? |\n| ¿Tienes experiencia? | ¿Tiene experiencia? |\n| ¿Dónde trabajas? | ¿Dónde trabaja? |\n| Dime | Dígame |\n| Siéntate | Siéntese |\n\n**Usted** konjugeres som 3. person entall.\n**Ustedes** (flertall) konjugeres som 3. person flertall.',
       '## Modellsvar\n\n**Hábleme de usted:**\n*Me llamo María García. Tengo 25 años y soy licenciada en Derecho por la Universidad Complutense. He trabajado como asistente legal durante dos años...*\n\n**¿Cuáles son sus puntos fuertes?**\n*Soy una persona responsable, organizada y con buena capacidad de comunicación. Trabajo bien en equipo y me adapto fácilmente a nuevas situaciones.*\n\n**¿Por qué quiere trabajar aquí?**\n*Porque su empresa tiene una excelente reputación y me gustaría desarrollar mi carrera profesional en este sector.*'],
      [{ title: 'Formell form', problem: 'Gjør om til usted: ¿Dónde trabajas?', solution: '**¿Dónde trabaja (usted)?** Bytt fra tú-konjugasjon (trabajas) til usted-konjugasjon (trabaja).' },
       { title: 'Intervjusvar', problem: 'Svar på: ¿Cuáles son sus puntos fuertes?', solution: '**Soy una persona responsable y organizada. Tengo buena capacidad de comunicación y trabajo bien en equipo.**' }],
      [mkEx('lett', 'Match spørsmål med norsk oversettelse:', [
        ['¿Por qué quiere trabajar aquí?', 'Hvorfor vil du jobbe her?'],
        ['¿Cuáles son sus puntos fuertes?', 'Hva er dine sterke sider?'],
        ['Hábleme de usted.', 'Fortell om deg selv.'],
        ['¿Cuándo puede empezar?', 'Når kan du begynne?']]),
       mkEx('lett', 'Gjør om fra tú til usted:', [
        ['¿Dónde trabajas?', '¿Dónde trabaja (usted)?'],
        ['¿Tienes experiencia?', '¿Tiene (usted) experiencia?'],
        ['¿Qué quieres hacer?', '¿Qué quiere (usted) hacer?'],
        ['Dime tu nombre.', 'Dígame su nombre.']]),
       mkEx('medium', 'Skriv svar på intervjuspørsmålene:', [
        ['Hábleme de usted.', 'Me llamo [nombre]. Tengo [edad] años. Estudio [studium] y tengo experiencia en [erfaring].'],
        ['¿Cuáles son sus puntos fuertes?', 'Soy responsable, organizado/a y trabajo bien en equipo.'],
        ['¿Por qué quiere trabajar aquí?', 'Porque me interesa mucho este sector y su empresa tiene una excelente reputación.'],
        ['¿Dónde se ve en cinco años?', 'Me veo trabajando en una posición de mayor responsabilidad en este sector.']]),
       mkEx('vanskelig', 'Simuler jobbintervju - skriv svar:', [
        ['Intervjuer: Buenos días. Siéntese. Hábleme de usted.', 'Buenos días. Me llamo [navn]. Tengo [alder] años y estudio en [skole]. Soy una persona responsable y me interesa mucho trabajar en este campo.'],
        ['¿Tiene alguna experiencia laboral?', 'Sí, he trabajado como [yrke] en [sted] durante [tid]. Allí aprendí a trabajar en equipo y a comunicarme con los clientes.'],
        ['¿Cuál es su mayor debilidad?', 'A veces soy demasiado perfeccionista, pero estoy aprendiendo a gestionar mejor mi tiempo.'],
        ['¿Tiene alguna pregunta para nosotros?', 'Sí, me gustaría saber más sobre las oportunidades de desarrollo profesional en la empresa.']])],
      '**Intervjutips:** Øv på svarene på forhånd, bruk usted-formen, vær høflig og profesjonell. Husk å stille spørsmål til arbeidsgiveren også!',
      '**Oppsummering: Jobbintervjuet**\n\n- **Usted-form:** Formelt, 3. person konjugasjon\n- **Vanlige spørsmål:** Hábleme de usted, ¿Por qué quiere trabajar aquí?, Puntos fuertes/débiles\n- **Tips:** Forbered svar, vær konkret, vis interesse\n- **Husk:** usted = De (formelt), tú = du (uformelt)'
    ),
    mkSub('7.4', 'El español en el trabajo', 'Spansk i arbeidslivet',
      'Lær å bruke spansk i profesjonelle sammenhenger.',
      ['skrive formelle e-poster', 'kommunisere profesjonelt på spansk'],
      'Forretningsspansk (español de negocios)',
      `**Nyttige uttrykk for profesjonell kommunikasjon:**\n\n| Situasjon | Uttrykk | Norsk |\n|-----------|---------|-------|\n| E-post åpning | Estimado/a Sr./Sra. | Kjære Hr./Fru. |\n| E-post avslutning | Atentamente / Un cordial saludo | Med vennlig hilsen |\n| Telefon | ¿Dígame? / ¿De parte de quién? | Hallo? / Hvem ringer? |\n| Møte | Orden del día / puntos a tratar | Dagsorden / saker å behandle |\n| Avtale | Tenemos una cita a las... | Vi har et møte kl... |\n| Takke | Le agradezco su atención | Takk for oppmerksomheten |\n| Be om noe | ¿Sería posible...? | Ville det være mulig...? |`,
      'Å kunne bruke spansk i profesjonelle sammenhenger er svært nyttig. Her lærer du å skrive e-poster, snakke i telefonen og kommunisere på møter på spansk.',
      ['## Formell e-post\n\n**Struktur:**\n```\nAsunto: Solicitud de información\n\nEstimado/a Sr./Sra. [Etternavn]:\n\nMe dirijo a usted para solicitar información sobre...\n\n[Innhold]\n\nLe agradezco de antemano su atención.\n\nAtentamente,\n[Ditt navn]\n[Din stilling]\n```\n\n**Nyttige fraser:**\n- *Me dirijo a usted para...* (Jeg henvender meg til Dem for å...)\n- *Le escribo con respecto a...* (Jeg skriver angående...)\n- *Adjunto encontrará...* (Vedlagt finner De...)\n- *Quedo a su disposición.* (Jeg står til Deres disposisjon.)',
       '## Telefon og møter\n\n**Telefonsamtale:**\n- *¿Dígame?* (Hallo?)\n- *¿De parte de quién?* (Hvem ringer?)\n- *¿Podría hablar con...?* (Kan jeg få snakke med...?)\n- *Le paso con...* (Jeg setter Dem over til...)\n- *¿Podría dejar un mensaje?* (Kan jeg legge igjen en beskjed?)\n\n**Møtefraser:**\n- *Vamos a empezar la reunión.* (La oss starte møtet.)\n- *El primer punto del orden del día es...* (Første punkt på dagsordenen er...)\n- *¿Alguien tiene alguna pregunta?* (Er det noen som har spørsmål?)'],
      [{ title: 'E-poststart', problem: 'Hvordan starter du en formell e-post til Sra. Martínez?', solution: '**Estimada Sra. Martínez:** Deretter: *Me dirijo a usted para...* eller *Le escribo con respecto a...*' },
       { title: 'Telefonsamtale', problem: 'Du ringer og vil snakke med Sr. López. Hva sier du?', solution: '**Buenos días. ¿Podría hablar con el señor López, por favor?** Og når de spør hvem som ringer: **De parte de [ditt navn].**' }],
      [mkEx('lett', 'Match uttrykk med situasjon:', [
        ['Estimado Sr. García:', 'Starten av en formell e-post'],
        ['Atentamente,', 'Avslutningen av en formell e-post'],
        ['¿Dígame?', 'Svare telefonen'],
        ['¿De parte de quién?', 'Spørre hvem som ringer']]),
       mkEx('lett', 'Oversett til spansk:', [
        ['Med vennlig hilsen', 'Atentamente / Un cordial saludo'],
        ['Vedlagt finner De...', 'Adjunto encontrará...'],
        ['Kan jeg få snakke med...?', '¿Podría hablar con...?'],
        ['Jeg skriver angående...', 'Le escribo con respecto a...']]),
       mkEx('medium', 'Skriv formelle e-postfragmenter:', [
        ['Start en e-post til Sr. Rodríguez om en jobbsøknad.', 'Estimado Sr. Rodríguez: Me dirijo a usted para presentar mi candidatura al puesto de...'],
        ['Be om informasjon om et kurs.', 'Le escribo con respecto al curso de español. ¿Sería posible recibir más información sobre el horario y el precio?'],
        ['Avslutt e-posten formelt.', 'Le agradezco de antemano su atención. Quedo a su disposición para cualquier consulta. Atentamente, [nombre].'],
        ['Skriv en e-post for å bekrefte et møte.', 'Estimado/a: Le escribo para confirmar nuestra reunión el [dato] a las [tid]. Un cordial saludo.']]),
       mkEx('vanskelig', 'Skriv en komplett formell e-post:', [
        ['Skriv emnelinjen (Asunto)', 'Asunto: Solicitud de empleo - Puesto de asistente administrativo'],
        ['Skriv innledningen', 'Estimada Sra. Martínez: Me dirijo a usted para presentar mi candidatura al puesto de asistente administrativo publicado en su página web.'],
        ['Skriv hoveddelen', 'Soy estudiante de [studium] y tengo experiencia en atención al cliente. Adjunto encontrará mi currículum vitae. Me gustaría tener la oportunidad de formar parte de su equipo.'],
        ['Skriv avslutningen', 'Le agradezco de antemano su atención. Quedo a su disposición para una entrevista. Atentamente, [Nombre Apellido].']])],
      '**Tips:** I formell kommunikasjon er det bedre å bruke for mange høflighetsfraser enn for få. *Sería posible*, *Le agradezco*, *Quedo a su disposición* gjør et godt inntrykk.',
      '**Oppsummering: Spansk i arbeidslivet**\n\n- **E-post:** Estimado/a, Me dirijo a usted, Atentamente\n- **Telefon:** ¿Dígame?, ¿De parte de quién?, ¿Podría hablar con...?\n- **Møter:** Orden del día, puntos a tratar\n- **Nøkkelfraser:** Le agradezco, Quedo a su disposición, ¿Sería posible...?'
    ),
  ]
};

const s2ch8 = {
  title: 'MEDIO AMBIENTE Y SOCIEDAD',
  subs: [
    mkSub('8.1', 'Problemas medioambientales', 'Miljøproblemer',
      'Lær vokabular og uttrykk om miljøproblemer på spansk.',
      ['beskrive miljøproblemer', 'forklare årsaker og konsekvenser'],
      'Viktige miljøbegreper',
      `**Miljøproblemer (problemas medioambientales):**\n\n| Spansk | Norsk |\n|--------|-------|\n| la contaminación | forurensning |\n| la deforestación | avskoging |\n| la desertificación | ørkenspredning |\n| la extinción de especies | utrydding av arter |\n| la lluvia ácida | sur nedbør |\n| el efecto invernadero | drivhuseffekten |\n| el calentamiento global | global oppvarming |\n| la sequía | tørke |\n| las inundaciones | oversvømmelser |\n| los residuos / la basura | avfall / søppel |\n\n**Årsaksuttrykk:**\n- *La contaminación es causada por...* (Forurensningen er forårsaket av...)\n- *Esto provoca / causa...* (Dette forårsaker...)\n- *Como consecuencia...* (Som konsekvens...)`,
      'Miljøproblemer er et viktig tema i den moderne verden. Her lærer du å snakke om de viktigste miljøutfordringene på spansk.',
      ['## Beskrive problemer\n\n**Forurensning:**\n- *La contaminación del aire es un grave problema.* (Luftforurensning er et alvorlig problem.)\n- *Los coches contaminan el aire.* (Bilene forurenser luften.)\n- *Las fábricas emiten gases tóxicos.* (Fabrikkene slipper ut giftige gasser.)\n\n**Avskoging:**\n- *La deforestación destruye los bosques.* (Avskogingen ødelegger skogene.)\n- *Cada año se pierden millones de hectáreas de bosque.* (Hvert år mister man millioner av hektar skog.)',
       '## Årsak og virkning\n\nFor å beskrive sammenhengen mellom årsak og virkning:\n- *La contaminación **causa** enfermedades respiratorias.* (Forurensning forårsaker luftveissykdommer.)\n- *La deforestación **provoca** la pérdida de biodiversidad.* (Avskoging fører til tap av biologisk mangfold.)\n- ***Debido a** la contaminación, muchas especies están en peligro.* (På grunn av forurensningen er mange arter truet.)\n- ***Como resultado**, el nivel del mar sube.* (Som resultat stiger havnivået.)'],
      [{ title: 'Miljøproblem', problem: 'Beskriv problemet med forurensning.', solution: '**La contaminación del aire y del agua es un grave problema medioambiental.** Es causada por las fábricas, los coches y los residuos. Como consecuencia, muchas personas sufren enfermedades respiratorias.' },
       { title: 'Årsak-virkning', problem: 'Hva forårsaker avskoging?', solution: '**La deforestación es causada por** la agricultura intensiva, la ganadería y la tala ilegal. **Provoca** la pérdida de biodiversidad y contribuye al cambio climático.' }],
      [mkEx('lett', 'Match spansk med norsk:', [
        ['la contaminación', 'forurensning'], ['la deforestación', 'avskoging'],
        ['el calentamiento global', 'global oppvarming'], ['la extinción de especies', 'utrydding av arter']]),
       mkEx('lett', 'Sant eller usant:', [
        ['La deforestación es buena para el medio ambiente.', 'Usant - avskoging er skadelig for miljøet.'],
        ['La contaminación puede causar enfermedades.', 'Sant - forurensning kan forårsake sykdommer.'],
        ['El efecto invernadero es un fenómeno natural.', 'Sant - men menneskelig aktivitet forsterker det.'],
        ['La lluvia ácida es un tipo de contaminación.', 'Sant']]),
       mkEx('medium', 'Beskriv miljøproblemene med hele setninger:', [
        ['Forurensning av havet', 'La contaminación del mar es causada por los residuos plásticos y los vertidos industriales.'],
        ['Avskoging i Amazonas', 'La deforestación del Amazonas provoca la pérdida de biodiversidad y contribuye al cambio climático.'],
        ['Utrydding av arter', 'La extinción de especies es causada por la destrucción de los hábitats naturales y la contaminación.'],
        ['Tørke i Spania', 'La sequía en España es un problema grave, causado por el cambio climático y el uso excesivo del agua.']]),
       mkEx('vanskelig', 'Skriv en kort tekst (3-4 setninger) om et miljøproblem:', [
        ['Beskriv et miljøproblem', 'La contaminación del aire es uno de los problemas medioambientales más graves de nuestro tiempo.'],
        ['Forklar årsakene', 'Es causada principalmente por las emisiones de los coches y las fábricas. Además, la quema de combustibles fósiles contribuye al problema.'],
        ['Beskriv konsekvensene', 'Como consecuencia, muchas personas sufren enfermedades respiratorias y el cambio climático se acelera.'],
        ['Foreslå en løsning', 'Para solucionar este problema, debemos usar más energías renovables y reducir el uso del coche.']])],
      '**Nyttige uttrykk:** *Es un grave problema* (Det er et alvorlig problem), *Debemos actuar* (Vi må handle), *Es urgente* (Det haster).',
      '**Oppsummering: Miljøproblemer**\n\n- **Problemer:** contaminación, deforestación, calentamiento global, extinción\n- **Årsaker:** fábricas, coches, agricultura intensiva\n- **Konsekvenser:** enfermedades, pérdida de biodiversidad, subida del nivel del mar\n- **Uttrykk:** es causado por, provoca, como consecuencia, debido a'
    ),
    mkSub('8.2', 'El cambio climático', 'Klimaendringer',
      'Lær å snakke om klimaendringer på spansk.',
      ['forklare klimaendringer', 'bruke statistikk og fakta på spansk'],
      'Klimabegreper (el cambio climático)',
      `**Viktige begreper:**\n\n| Spansk | Norsk |\n|--------|-------|\n| el cambio climático | klimaendringer |\n| el calentamiento global | global oppvarming |\n| los gases de efecto invernadero | drivhusgasser |\n| las emisiones de CO₂ | CO₂-utslipp |\n| el deshielo | issmelting |\n| el nivel del mar | havnivå |\n| la temperatura media | gjennomsnittstemperatur |\n| las energías renovables | fornybar energi |\n| los combustibles fósiles | fossilt brensel |\n| la huella de carbono | karbonfotavtrykk |\n\n**Statistiske uttrykk:**\n- *La temperatura ha subido X grados.* (Temperaturen har steget X grader.)\n- *Según los científicos...* (Ifølge forskerne...)\n- *Los datos muestran que...* (Dataene viser at...)`,
      'Klimaendringer (*el cambio climático*) er en av de største utfordringene i vår tid. Her lærer du vokabular og uttrykk for å diskutere klimaendringer på spansk.',
      ['## Årsaker og konsekvenser\n\n**Årsaker (causas):**\n- La quema de combustibles fósiles (forbrenning av fossilt brensel)\n- Las emisiones de gases de efecto invernadero (utslipp av drivhusgasser)\n- La deforestación (avskoging)\n- La industria y el transporte (industri og transport)\n\n**Konsekvenser (consecuencias):**\n- El aumento de la temperatura (temperaturøkning)\n- El deshielo de los polos (smelting av polene)\n- La subida del nivel del mar (stigning av havnivået)\n- Fenómenos meteorológicos extremos (ekstremvær)',
       '## Snakke om statistikk\n\nFor å presentere fakta og tall:\n- *Según los expertos, la temperatura ha subido 1,1 grados desde la era preindustrial.* (Ifølge ekspertene har temperaturen steget 1,1 grader siden den førindustrielle tiden.)\n- *Los datos muestran que las emisiones han aumentado un 50%.* (Dataene viser at utslippene har økt 50%.)\n- *Se estima que el nivel del mar subirá entre 30 y 100 cm.* (Det anslås at havnivået vil stige mellom 30 og 100 cm.)\n- *Es probable que / Es posible que + subjuntivo* (Det er sannsynlig/mulig at...)'],
      [{ title: 'Klimaendringer', problem: 'Forklar hva klimaendringer er på spansk.', solution: '**El cambio climático es el aumento de la temperatura global causado por las emisiones de gases de efecto invernadero.** Como consecuencia, los polos se derriten y el nivel del mar sube.' },
       { title: 'Statistikk', problem: 'Presenter et faktum om klimaendringer.', solution: '**Según los científicos, la temperatura media global ha subido 1,1 grados desde la era preindustrial.** Los datos muestran que las emisiones de CO₂ siguen aumentando.' }],
      [mkEx('lett', 'Match spansk med norsk:', [
        ['el cambio climático', 'klimaendringer'], ['los gases de efecto invernadero', 'drivhusgasser'],
        ['las energías renovables', 'fornybar energi'], ['los combustibles fósiles', 'fossilt brensel']]),
       mkEx('lett', 'Sant eller usant:', [
        ['El cambio climático es causado solo por causas naturales.', 'Usant - det er hovedsakelig forårsaket av menneskelig aktivitet.'],
        ['Los combustibles fósiles producen gases de efecto invernadero.', 'Sant'], ['El deshielo de los polos provoca la subida del nivel del mar.', 'Sant'],
        ['Las energías renovables contribuyen al cambio climático.', 'Usant - fornybar energi reduserer utslipp.']]),
       mkEx('medium', 'Bruk statistiske uttrykk til å presentere fakta:', [
        ['Temperaturen har steget.', 'Según los científicos, la temperatura media global ha subido 1,1 grados.'],
        ['CO₂-utslippene øker.', 'Los datos muestran que las emisiones de CO₂ han aumentado significativamente en las últimas décadas.'],
        ['Havnivået stiger.', 'Se estima que el nivel del mar subirá entre 30 y 100 centímetros durante este siglo.'],
        ['Ekstremvær blir vanligere.', 'Es probable que los fenómenos meteorológicos extremos sean cada vez más frecuentes.']]),
       mkEx('vanskelig', 'Skriv en kort presentasjon om klimaendringer (en setning per punkt):', [
        ['Definer klimaendringer.', 'El cambio climático es el aumento de la temperatura global causado principalmente por las emisiones de gases de efecto invernadero.'],
        ['Forklar årsakene.', 'Las principales causas son la quema de combustibles fósiles, la deforestación y las emisiones industriales.'],
        ['Beskriv konsekvensene.', 'Como consecuencia, los polos se derriten, el nivel del mar sube y los fenómenos meteorológicos extremos son más frecuentes.'],
        ['Foreslå løsninger.', 'Para combatir el cambio climático, debemos usar energías renovables, reducir las emisiones y proteger los bosques.']])],
      '**Nyttige statistikk-uttrykk:** *Según los datos*, *Se estima que*, *Los expertos afirman que*, *Es probable que*.',
      '**Oppsummering: Klimaendringer**\n\n- **Begreper:** cambio climático, calentamiento global, efecto invernadero\n- **Årsaker:** combustibles fósiles, emisiones, deforestación\n- **Konsekvenser:** deshielo, subida del nivel del mar, fenómenos extremos\n- **Statistikk:** Según los expertos, Los datos muestran, Se estima que'
    ),
    mkSub('8.3', 'Sostenibilidad', 'Bærekraft i hverdagen',
      'Lær å snakke om bærekraft og miljøvennlige tiltak på spansk.',
      ['beskrive bærekraftige tiltak', 'diskutere miljøvennlige vaner'],
      'De tre R-ene og bærekraft',
      `**Las tres erres (De tre R-ene):**\n\n| Spansk | Norsk | Eksempel |\n|--------|-------|----------|\n| Reducir | Redusere | Usar menos plástico (bruke mindre plast) |\n| Reutilizar | Gjenbruke | Usar bolsas de tela (bruke tøyposer) |\n| Reciclar | Resirkulere | Separar la basura (sortere søppel) |\n\n**Bærekraftige tiltak:**\n- *Ahorrar agua y energía* (Spare vann og energi)\n- *Usar transporte público* (Bruke offentlig transport)\n- *Comprar productos locales* (Kjøpe lokale produkter)\n- *Evitar el desperdicio de alimentos* (Unngå matsvinn)\n- *Usar energías renovables* (Bruke fornybar energi)\n- *Plantar árboles* (Plante trær)`,
      'Bærekraft (*sostenibilidad*) handler om å dekke våre behov uten å ødelegge for fremtidige generasjoner. Her lærer du å snakke om bærekraftige tiltak og miljøvennlige vaner.',
      ['## Hverdagstiltak\n\n**I hjemmet:**\n- *Apagar las luces cuando no se usan.* (Slå av lysene når de ikke brukes.)\n- *Ducharse en vez de bañarse.* (Dusje i stedet for å bade.)\n- *Separar la basura para reciclar.* (Sortere søpplet for å resirkulere.)\n- *Usar electrodomésticos eficientes.* (Bruke energieffektive apparater.)\n\n**I transport:**\n- *Ir en bicicleta o a pie.* (Sykle eller gå.)\n- *Usar el transporte público.* (Bruke offentlig transport.)\n- *Compartir coche (carpooling).* (Samkjøring.)',
       '## Uttrykk for å gi råd\n\nFor å snakke om hva folk bør gjøre:\n- *Debemos reciclar más.* (Vi må resirkulere mer.)\n- *Es importante reducir el consumo.* (Det er viktig å redusere forbruket.)\n- *Hay que ahorrar agua.* (Man må spare vann.)\n- *Podemos contribuir reciclando.* (Vi kan bidra ved å resirkulere.)\n- *Cada uno puede hacer su parte.* (Hver enkelt kan gjøre sin del.)\n- *Si todos colaboramos, podemos...* (Hvis alle samarbeider, kan vi...)'],
      [{ title: 'De tre R-ene', problem: 'Forklar de tre R-ene på spansk.', solution: '**Reducir** (redusere forbruket), **Reutilizar** (bruke ting om igjen) y **Reciclar** (sende materialer til gjenvinning). Es importante seguir este orden de prioridad.' },
       { title: 'Gi råd', problem: 'Gi tre bærekraftige råd.', solution: '**Debemos** ahorrar agua, **es importante** usar el transporte público y **hay que** separar la basura para reciclar.' }],
      [mkEx('lett', 'Match tiltak med kategori (reducir/reutilizar/reciclar):', [
        ['Separar la basura', 'Reciclar'], ['Usar bolsas de tela', 'Reutilizar'],
        ['Comprar menos ropa', 'Reducir'], ['Llevar los envases al contenedor', 'Reciclar']]),
       mkEx('lett', 'Oversett til spansk:', [
        ['Spare vann', 'Ahorrar agua'], ['Bruke offentlig transport', 'Usar el transporte público'],
        ['Sortere søppel', 'Separar la basura'], ['Slå av lysene', 'Apagar las luces']]),
       mkEx('medium', 'Gi bærekraftige råd med ulike uttrykk:', [
        ['Gi råd om vann (Debemos...)', 'Debemos ahorrar agua, por ejemplo duchándonos en vez de bañándonos.'],
        ['Gi råd om transport (Es importante...)', 'Es importante usar el transporte público o ir en bicicleta en vez de usar el coche.'],
        ['Gi råd om resirkulering (Hay que...)', 'Hay que separar la basura y llevar los envases al contenedor de reciclaje.'],
        ['Gi råd om energi (Podemos...)', 'Podemos contribuir apagando las luces y usando electrodomésticos eficientes.']]),
       mkEx('vanskelig', 'Skriv en kort tekst om bærekraft i hverdagen din:', [
        ['Beskriv hva du gjør for miljøet.', 'En mi vida diaria, intento ser más sostenible. Reciclo la basura y uso el transporte público.'],
        ['Foreslå tiltak for skolen din.', 'En el instituto, podemos reducir el uso de papel, reciclar más y ahorrar energía apagando las luces.'],
        ['Hva kan familier gjøre?', 'Las familias pueden comprar productos locales, reducir el desperdicio de alimentos y usar electrodomésticos eficientes.'],
        ['Hva kan samfunnet gjøre?', 'La sociedad debe invertir en energías renovables, mejorar el transporte público y educar a los ciudadanos sobre sostenibilidad.']])],
      '**Husk de tre R-ene i riktig rekkefølge:** Først **reducir** (redusere), deretter **reutilizar** (gjenbruke), og til slutt **reciclar** (resirkulere). Å redusere er det viktigste!',
      '**Oppsummering: Bærekraft**\n\n- **Las tres erres:** Reducir, Reutilizar, Reciclar\n- **Hverdagstiltak:** Ahorrar agua/energía, transporte público, separar basura\n- **Gi råd:** Debemos, Es importante, Hay que, Podemos\n- **Nøkkel:** Cada uno puede hacer su parte'
    ),
    mkSub('8.4', 'Argumentar y debatir', 'Argumentere og debattere',
      'Lær å uttrykke meninger, argumentere og debattere på spansk.',
      ['uttrykke meninger', 'bruke argumentasjonsuttrykk og konnektorer'],
      'Debattuttrykk (expresiones para debatir)',
      `**Uttrykke meninger:**\n\n| Spansk | Norsk |\n|--------|-------|\n| En mi opinión... | Etter min mening... |\n| Creo que... | Jeg tror at... |\n| Me parece que... | Det virker som... |\n| Estoy de acuerdo (con) | Jeg er enig (med) |\n| No estoy de acuerdo | Jeg er uenig |\n| Estoy a favor de... | Jeg er for... |\n| Estoy en contra de... | Jeg er imot... |\n\n**Konnektorer:**\n\n| Spansk | Norsk |\n|--------|-------|\n| sin embargo | likevel |\n| además | dessuten |\n| por un lado... por otro lado | på den ene siden... på den andre siden |\n| en primer lugar | for det første |\n| por lo tanto | derfor |\n| en conclusión | avslutningsvis |`,
      'Å kunne argumentere og debattere er en viktig språkferdighet. Her lærer du uttrykk for å uttrykke meninger, være enig/uenig, og strukturere argumenter.',
      ['## Strukturere argumenter\n\nEn god argumentasjon følger denne strukturen:\n1. **Tesis:** *En mi opinión, debemos reciclar más.* (Etter min mening bør vi resirkulere mer.)\n2. **Argumento 1:** *En primer lugar, reciclar reduce la contaminación.* (For det første reduserer resirkulering forurensning.)\n3. **Argumento 2:** *Además, ahorra recursos naturales.* (Dessuten sparer det naturressurser.)\n4. **Contraargumento:** *Sin embargo, algunos piensan que es difícil.* (Likevel mener noen at det er vanskelig.)\n5. **Conclusión:** *En conclusión, reciclar es necesario para el futuro.* (Avslutningsvis er resirkulering nødvendig for fremtiden.)',
       '## Være enig og uenig\n\n**Enig:**\n- *Estoy de acuerdo contigo.* (Jeg er enig med deg.)\n- *Tienes razón.* (Du har rett.)\n- *Exacto. / Exactamente.* (Nettopp.)\n- *Comparto tu opinión.* (Jeg deler din mening.)\n\n**Uenig:**\n- *No estoy de acuerdo.* (Jeg er uenig.)\n- *No comparto esa opinión.* (Jeg deler ikke den meningen.)\n- *Creo que te equivocas.* (Jeg tror du tar feil.)\n- *Respeto tu opinión, pero...* (Jeg respekterer meningen din, men...)'],
      [{ title: 'Uttrykke mening', problem: 'Si din mening om resirkulering.', solution: '**En mi opinión, reciclar es fundamental para proteger el medio ambiente.** Creo que todos debemos hacer un esfuerzo para separar la basura.' },
       { title: 'Være uenig høflig', problem: 'Noen sier: \"No necesitamos reciclar.\" Vær uenig høflig.', solution: '**Respeto tu opinión, pero no estoy de acuerdo.** Creo que reciclar es necesario para reducir la contaminación y proteger el planeta.' }],
      [mkEx('lett', 'Match uttrykk med funksjon:', [
        ['En mi opinión...', 'Uttrykke mening'], ['Estoy de acuerdo.', 'Være enig'],
        ['Sin embargo...', 'Motargument / kontrast'], ['En conclusión...', 'Oppsummere']]),
       mkEx('lett', 'Fyll inn riktig konnektor:', [
        ['___, debemos reciclar más. (Etter min mening)', 'En mi opinión'], ['Reciclar es bueno. ___, ahorra recursos. (Dessuten)', 'Además'],
        ['___, no todos reciclan. (Likevel)', 'Sin embargo'], ['___, debemos actuar ahora. (Avslutningsvis)', 'En conclusión']]),
       mkEx('medium', 'Skriv argumenter for og imot:', [
        ['For: Bruke offentlig transport', 'Estoy a favor de usar el transporte público porque reduce la contaminación y es más económico.'],
        ['Imot: Forby plast', 'Por un lado, prohibir el plástico reduciría la contaminación. Por otro lado, sería difícil encontrar alternativas para todos los usos.'],
        ['Enig: Vi bør bruke fornybar energi', 'Estoy de acuerdo. Además, las energías renovables son cada vez más baratas y eficientes.'],
        ['Uenig: Klimaendringer er ikke viktig', 'No estoy de acuerdo. Según los científicos, el cambio climático es uno de los mayores problemas de nuestro tiempo.']]),
       mkEx('vanskelig', 'Skriv et strukturert argument om et miljøtema:', [
        ['Skriv tesis (påstand)', 'En mi opinión, todos deberíamos reducir nuestro consumo de plástico para proteger el medio ambiente.'],
        ['Skriv to argumenter', 'En primer lugar, el plástico contamina los océanos y mata a los animales marinos. Además, tarda cientos de años en degradarse.'],
        ['Skriv et motargument og svar', 'Sin embargo, algunos argumentan que el plástico es práctico y barato. No obstante, existen alternativas sostenibles como las bolsas de tela.'],
        ['Skriv konklusjon', 'En conclusión, debemos reducir el uso de plástico. Cada uno puede contribuir usando alternativas sostenibles en su vida diaria.']])],
      '**Argumentasjonstips:** Strukturer alltid argumentene dine med konnektorer. Bruk *en primer lugar, además, sin embargo, en conclusión* for å gjøre teksten logisk og overbevisende.',
      '**Oppsummering: Argumentere og debattere**\n\n- **Meningsuttrykk:** En mi opinión, Creo que, Me parece que\n- **Enig/uenig:** Estoy de acuerdo, No comparto esa opinión\n- **Konnektorer:** sin embargo, además, por lo tanto, en conclusión\n- **Struktur:** Tesis → Argumenter → Motargument → Konklusjon'
    ),
  ]
};

// Now generate the file
function generateChapterContent(level, mainNum, subNum, data) {
  const id = `spansk-${level}-${mainNum}-${subNum}`;
  const lines = [];
  lines.push(`    { id: '${id}-intro', type: 'text', content: \`## ${data.title}\n\n${data.intro}\` },`);
  lines.push(`    { id: '${id}-def-1', type: 'definition', title: '${data.defTitle}', content: \`${data.defContent}\` },`);
  data.texts.forEach((t, i) => {
    lines.push(`    { id: '${id}-text-${i+1}', type: 'text', content: \`${t}\` },`);
  });
  if (data.examples[0]) {
    lines.push(`    { id: '${id}-example-1', type: 'example', title: 'Eksempel: ${data.examples[0].title}', problem: \`${data.examples[0].problem}\`, solution: \`${data.examples[0].solution}\` },`);
  }
  data.exercises.forEach((ex, i) => {
    const subs = ex.subs.map((s, j) => {
      const l = String.fromCharCode(97+j);
      return `        { label: '${l}', task: '${s.t.replace(/'/g,"\\'")}', solution: '${s.s.replace(/'/g,"\\'")}', answer: '${s.s.replace(/'/g,"\\'")}' }`;
    }).join(',\n');
    lines.push(`    { id: '${id}-ex-block-${i+1}', type: 'exercise', exercise: { id: '${id}-ex-${i+1}', number: '${i+1}', type: 'classic', difficulty: '${ex.diff}', task: '${ex.task.replace(/'/g,"\\'")}', subTasks: [\n${subs},\n      ], solution: '${ex.subs.map((s,j)=>String.fromCharCode(97+j)+') '+s.s).join(', ').replace(/'/g,"\\'")}', hints: ['Se teorien over', 'Sjekk eksemplene'] } },`);
    if (i === 1 && data.examples[1]) {
      lines.push(`    { id: '${id}-example-2', type: 'example', title: 'Eksempel: ${data.examples[1].title}', problem: \`${data.examples[1].problem}\`, solution: \`${data.examples[1].solution}\` },`);
    }
  });
  lines.push(`    { id: '${id}-tip-1', type: 'tip', content: \`${data.tip}\` },`);
  lines.push(`    { id: '${id}-note-1', type: 'note', title: 'Oppsummering', content: \`${data.note}\` },`);
  return lines.join('\n');
}

function generateFile(level, chapterNums, chapters, fileLabel) {
  const lang = `spansk-${level}`;
  let content = `/* eslint-disable */\n// @ts-nocheck\n/**\n * Spansk nivå ${level} - Kapittel ${fileLabel} (Detaljerte underkapitler)\n *\n * Dekker:\n${chapterNums.map(n => ` * - Kapittel ${n}: ${chapters[n].title} (${n}.1-${n}.4)`).join('\n')}\n */\n\nimport type { TextbookChapter } from '@/lib/types/textbook';\n`;
  const allNames = [];
  for (const m of chapterNums) {
    const ch = chapters[m];
    content += `\n// ============================================================================\n// KAPITTEL ${m}: ${ch.title}\n// ============================================================================\n`;
    ch.subs.forEach((sub, idx) => {
      const s = idx + 1;
      const name = `CHAPTER_SPANSK_${level}_${m}_${s}`;
      allNames.push(name);
      content += `\n// ${sub.n} ${sub.title}\nexport const ${name}: TextbookChapter = {\n  id: '${lang}-${m}-${s}',\n  courseId: '${lang}',\n  chapterNumber: '${sub.n}',\n  title: '${sub.title}',\n  subtitle: '${sub.subtitle}',\n  description: '${sub.desc}',\n  estimatedMinutes: 45,\n  competenceGoals: [${sub.goals.map(g=>`'${g}'`).join(', ')}],\n  content: [\n${generateChapterContent(level, m, s, sub)}\n  ],\n  exercises: [],\n};\n`;
    });
  }
  const expName = `SPANSK_${level}_CHAPTERS_${fileLabel.replace('-','_')}`;
  content += `\nexport const ${expName}: TextbookChapter[] = [\n${allNames.map(n=>`  ${n},`).join('\n')}\n];\n`;
  return content;
}

// Generate spansk-2-kap7-8
const s2_7_8 = generateFile(2, [7, 8], {7: s2ch7, 8: s2ch8}, '7-8');
fs.writeFileSync(path.join(outDir, 'textbook-content-spansk-2-kap7-8.ts'), s2_7_8);
console.log(`Written: textbook-content-spansk-2-kap7-8.ts (${s2_7_8.split('\n').length} lines)`);
