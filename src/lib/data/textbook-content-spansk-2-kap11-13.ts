/* eslint-disable */
// @ts-nocheck
/**
 * Spansk Nivå 2 - Kapittel 11-13 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 11: Viajes y turismo (11.1-11.4)
 * - Kapittel 12: Salud y bienestar (12.1-12.4)
 * - Kapittel 13: Tecnología y mundo digital (13.1-13.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================
// KAPITTEL 11.1: Destinos y planificación
// ============================================================

export const CHAPTER_SPANSK_2_11_1: TextbookChapter = {
  id: 'spansk-2-11-1',
  courseId: 'spansk-2',
  chapterNumber: '11.1',
  title: 'Destinos y planificación',
  subtitle: 'Reisemål og planlegging',
  description: 'Lær å snakke om reisemål, planlegge reiser og bruke kondisjonal (condicional) for høflige forespørsler på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne beskrive ulike reisemål og ferietyper på spansk',
    'Bruke kondisjonal (condicional) for å uttrykke høflige ønsker og forespørsler',
    'Kunne planlegge en reise og bestille billetter på spansk',
  ],
  content: [
    {
      id: 'spansk-2-11-1-intro',
      type: 'text',
      content: `## Destinos y planificación\n\nÅ reise er en viktig del av livet, og det å kunne snakke om reisemål og planlegge reiser på spansk åpner mange dører. I dette kapittelet lærer du viktig reisevokabular og hvordan du bruker **kondisjonal** (el condicional) for å uttrykke høflige forespørsler – en uunnværlig ferdighet når du skal kommunisere med hoteller, flyselskaper og reisebyråer.\n\n### Viktige reiseord\n\n| Spansk | Norsk |\n|--------|-------|\n| el destino | reisemålet |\n| el viaje | reisen |\n| la maleta | kofferten |\n| el pasaporte | passet |\n| el billete (de ida y vuelta) | billetten (tur-retur) |\n| la reserva | reservasjonen |\n| el alojamiento | overnattingen |\n| la agencia de viajes | reisebyrået |\n| el seguro de viaje | reiseforsikringen |\n| el itinerario | reiseruten |`,
    },
    {
      id: 'spansk-2-11-1-def-1',
      type: 'definition',
      title: 'El condicional simple',
      content: `**El condicional simple** (kondisjonal) brukes for å uttrykke høflige forespørsler, ønsker og hypotetiske situasjoner. Det tilsvarer det norske «ville/skulle/kunne».\n\n**Bøyning** (regelmessige verb):\n- **-ar** (viajar): viajaría, viajarías, viajaría, viajaríamos, viajaríais, viajarían\n- **-er** (comer): comería, comerías, comería, comeríamos, comeríais, comerían\n- **-ir** (vivir): viviría, vivirías, viviría, viviríamos, viviríais, vivirían\n\nEndelsene er de samme for alle tre konjugasjoner: **-ía, -ías, -ía, -íamos, -íais, -ían**. Stammen er hele infinitiven.`,
    },
    {
      id: 'spansk-2-11-1-def-2',
      type: 'definition',
      title: 'Uregelmessige verb i kondisjonal',
      content: `Noen viktige verb har uregelmessig stamme i kondisjonal:\n\n| Infinitiv | Stamme | Eksempel (yo) |\n|-----------|--------|---------------|\n| tener | tendr- | tendría |\n| poder | podr- | podría |\n| querer | querr- | querría |\n| hacer | har- | haría |\n| decir | dir- | diría |\n| saber | sabr- | sabría |\n| salir | saldr- | saldría |\n| venir | vendr- | vendría |\n\nMerk: Endelsene er de samme som for regelmessige verb.`,
    },
    {
      id: 'spansk-2-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Høflige forespørsler med kondisjonal',
      problem: `Hvordan bruker vi kondisjonal for å uttrykke høflige forespørsler i en reisesituasjon?`,
      solution: `**Høflige forespørsler:**\n\n- *¿Podría reservar una habitación doble?* – Kunne jeg reservere et dobbeltrom?\n- *¿Me gustaría saber el precio del billete?* – Jeg ville gjerne vite prisen på billetten.\n- *Querría un billete de ida y vuelta a Barcelona.* – Jeg ville gjerne ha en tur-returbillett til Barcelona.\n- *¿Sería posible cambiar la fecha de mi reserva?* – Ville det være mulig å endre datoen for reservasjonen min?\n- *¿Tendría usted una mesa libre para esta noche?* – Ville De ha et ledig bord i kveld?\n\nKondisjonal gjør forespørselen mykere og mer høflig enn å bruke presens eller imperativ.`,
    },
    {
      id: 'spansk-2-11-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Planlegge en reise',
      problem: `Skriv en kort dialog der to venner planlegger en reise til Spania.`,
      solution: `**Ana:** ¿Adónde te gustaría viajar este verano?\n*(Hvor ville du likt å reise i sommer?)*\n\n**Carlos:** Me gustaría ir a Andalucía. Podríamos visitar Granada y Sevilla.\n*(Jeg ville likt å dra til Andalucía. Vi kunne besøke Granada og Sevilla.)*\n\n**Ana:** ¡Qué buena idea! ¿Cuántos días necesitaríamos?\n*(For en god idé! Hvor mange dager ville vi trenge?)*\n\n**Carlos:** Yo diría que una semana sería suficiente. Deberíamos reservar el alojamiento pronto.\n*(Jeg ville si at en uke ville være nok. Vi burde reservere overnatting snart.)*\n\n**Ana:** Sí, y tendríamos que comprar los billetes de avión también.\n*(Ja, og vi måtte kjøpe flybillettene også.)*`,
    },
    {
      id: 'spansk-2-11-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den korrekte kondisjonal-formen av "poder" i første person entall (yo)?',
        options: [
          { id: 'a', text: 'podía', isCorrect: false },
          { id: 'b', text: 'podería', isCorrect: false },
          { id: 'c', text: 'podría', isCorrect: true },
          { id: 'd', text: 'puedría', isCorrect: false },
        ],
        solution: 'Riktig svar er **podría**. Verbet "poder" har uregelmessig stamme i kondisjonal: podr- + ía = podría. "Podía" er imperfektum, ikke kondisjonal.',
      },
    },
    {
      id: 'spansk-2-11-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning er en høflig forespørsel med kondisjonal?',
        options: [
          { id: 'a', text: '¡Dame el billete!', isCorrect: false },
          { id: 'b', text: '¿Me da un billete?', isCorrect: false },
          { id: 'c', text: '¿Podría darme un billete, por favor?', isCorrect: true },
          { id: 'd', text: 'Quiero un billete.', isCorrect: false },
        ],
        solution: 'Riktig svar er **¿Podría darme un billete, por favor?** Kondisjonal-formen "podría" gjør setningen til en høflig forespørsel. De andre alternativene bruker imperativ, presens indikativ eller direkte uttrykk.',
      },
    },
    {
      id: 'spansk-2-11-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy verbene i parentes i kondisjonal (condicional simple).',
        subTasks: [
          { label: 'a', task: 'Yo _______ (querer) un billete de ida y vuelta.', solution: 'querría' },
          { label: 'b', task: 'Nosotros _______ (viajar) a México en diciembre.', solution: 'viajaríamos' },
          { label: 'c', task: '¿Tú _______ (poder) ayudarme con la reserva?', solution: 'podrías' },
          { label: 'd', task: 'Ellos _______ (tener) que comprar los billetes antes.', solution: 'tendrían' },
          { label: 'e', task: '¿_______ (ser) posible cambiar el vuelo?', solution: 'Sería' },
        ],
        solution: 'a) querría (uregelmessig stamme: querr-), b) viajaríamos (regelmessig: viajar + íamos), c) podrías (uregelmessig stamme: podr-), d) tendrían (uregelmessig stamme: tendr-), e) Sería (regelmessig stamme: ser + ía).',
      },
    },
    {
      id: 'spansk-2-11-1-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Reisevokabular**: el destino, el viaje, la maleta, el billete, la reserva, el alojamiento\n- **Kondisjonal** (el condicional simple): Dannes med infinitiv + endelsene -ía, -ías, -ía, -íamos, -íais, -ían\n- **Uregelmessige stamme**: poder → podr-, querer → querr-, tener → tendr-, hacer → har-\n- **Bruk av kondisjonal**: Høflige forespørsler, ønsker, hypotetiske situasjoner\n- **Nyttige uttrykk**: ¿Podría...?, Me gustaría..., Querría..., ¿Sería posible...?`,
    },
    {
      id: 'spansk-2-11-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst (5-6 setninger) der du planlegger en drømmereise. Bruk minst 4 verb i kondisjonal og reisevokabular fra kapittelet.',
        solution: 'Eksempel: "Me gustaría viajar a Argentina el próximo verano. Visitaría Buenos Aires y Patagonia. Reservaría un hotel en el centro de la ciudad. Podría visitar el famoso barrio de La Boca. Compraría un billete de ida y vuelta. Sería un viaje inolvidable."',
      },
    },
    {
      id: 'spansk-2-11-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr "Me gustaría reservar una habitación con vistas al mar"?',
        options: [
          { id: 'a', text: 'Jeg liker å reservere rom med utsikt til havet.', isCorrect: false },
          { id: 'b', text: 'Jeg ville gjerne reservere et rom med havutsikt.', isCorrect: true },
          { id: 'c', text: 'Jeg reserverte et rom med havutsikt.', isCorrect: false },
          { id: 'd', text: 'Jeg skal reservere et rom med havutsikt.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Jeg ville gjerne reservere et rom med havutsikt**. "Me gustaría" er kondisjonal av "gustar" og uttrykker et høflig ønske. "Vistas al mar" betyr havutsikt.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el destino', definition: 'reisemålet' },
    { term: 'el billete de ida y vuelta', definition: 'tur-returbillett' },
    { term: 'la reserva', definition: 'reservasjonen' },
    { term: 'el alojamiento', definition: 'overnattingen, innkvarteringen' },
    { term: 'el condicional', definition: 'kondisjonal – verbform for høflige forespørsler og hypotetiske situasjoner' },
    { term: 'el itinerario', definition: 'reiseruten, reiseplanen' },
    { term: 'el seguro de viaje', definition: 'reiseforsikringen' },
  ],
};

// ============================================================
// KAPITTEL 11.2: En el hotel y en el aeropuerto
// ============================================================

export const CHAPTER_SPANSK_2_11_2: TextbookChapter = {
  id: 'spansk-2-11-2',
  courseId: 'spansk-2',
  chapterNumber: '11.2',
  title: 'En el hotel y en el aeropuerto',
  subtitle: 'På hotellet og på flyplassen',
  description: 'Lær viktig vokabular og uttrykk for situasjoner på hotell og flyplass, inkludert innsjekking, utsjekking og navigering på flyplassen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne gjennomføre innsjekking og utsjekking på et hotell på spansk',
    'Beherske vokabular knyttet til flyplassen og flyreiser',
    'Kunne føre samtaler i reisesituasjoner med passende høflighetsform',
  ],
  content: [
    {
      id: 'spansk-2-11-2-intro',
      type: 'text',
      content: `## En el hotel y en el aeropuerto\n\nNår du reiser i spansktalende land, er hotellet og flyplassen to av de viktigste stedene der du trenger å kommunisere på spansk. I dette kapittelet lærer du nødvendig vokabular og praktiske uttrykk for å sjekke inn og ut av hotell, og for å navigere deg gjennom flyplassen.\n\n### Vokabular: El hotel\n\n| Spansk | Norsk |\n|--------|-------|\n| la recepción | resepsjonen |\n| el/la recepcionista | resepsjonisten |\n| la habitación individual | enkeltrom |\n| la habitación doble | dobbeltrom |\n| la llave / la tarjeta | nøkkelen / kortet |\n| el ascensor | heisen |\n| la planta baja | første etasje |\n| el desayuno incluido | frokost inkludert |\n| la caja fuerte | safen |\n| el aire acondicionado | klimaanlegget |\n| la factura | regningen/fakturaen |`,
    },
    {
      id: 'spansk-2-11-2-def-1',
      type: 'definition',
      title: 'Vokabular: El aeropuerto',
      content: `**Flyplassvokabular:**\n\n| Spansk | Norsk |\n|--------|-------|\n| el aeropuerto | flyplassen |\n| el vuelo | flyvningen |\n| la puerta de embarque | gaten (boarding gate) |\n| la tarjeta de embarque | boardingkortet |\n| el equipaje de mano | håndbagasjen |\n| la cinta de equipajes | bagasjebåndet |\n| el control de seguridad | sikkerhetskontrollen |\n| el mostrador de facturación | innsjekkingsskranken |\n| la escala | mellomlanding |\n| el retraso | forsinkelsen |\n| el pasillo / la ventanilla | midtgangen / vinduet (sete) |\n| aterrizar / despegar | lande / ta av |`,
    },
    {
      id: 'spansk-2-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Innsjekking på hotell',
      problem: `Hvordan gjennomfører man en innsjekking på et spansk hotell?`,
      solution: `**Recepcionista:** Buenas tardes. ¿En qué puedo ayudarle?\n*(God ettermiddag. Hva kan jeg hjelpe deg med?)*\n\n**Huésped:** Buenas tardes. Tengo una reserva a nombre de García.\n*(God ettermiddag. Jeg har en reservasjon i navnet García.)*\n\n**Recepcionista:** Sí, aquí la tengo. Una habitación doble con desayuno incluido, ¿verdad?\n*(Ja, her har jeg den. Et dobbeltrom med frokost inkludert, ikke sant?)*\n\n**Huésped:** Exacto. ¿Podría darme una habitación con vistas al mar?\n*(Akkurat. Kunne jeg få et rom med havutsikt?)*\n\n**Recepcionista:** Por supuesto. Aquí tiene la tarjeta de la habitación 305, en la tercera planta. El ascensor está a la derecha.\n*(Selvfølgelig. Her er kortet til rom 305, i tredje etasje. Heisen er til høyre.)*\n\n**Huésped:** Gracias. ¿A qué hora es el desayuno?\n*(Takk. Når er frokosten?)*\n\n**Recepcionista:** El desayuno se sirve de 7:00 a 10:30 en el restaurante de la planta baja.\n*(Frokosten serveres fra 7:00 til 10:30 i restauranten i første etasje.)*`,
    },
    {
      id: 'spansk-2-11-2-example-2',
      type: 'example',
      title: 'Eksempel 2: På flyplassen',
      problem: `Skriv en dialog ved innsjekkingsskranken på flyplassen.`,
      solution: `**Empleada:** Buenos días. Su pasaporte y su billete, por favor.\n*(God morgen. Passet og billetten Deres, takk.)*\n\n**Pasajero:** Aquí tiene. Vuelo IB 3245 a Madrid.\n*(Vær så god. Fly IB 3245 til Madrid.)*\n\n**Empleada:** ¿Prefiere asiento de pasillo o de ventanilla?\n*(Foretrekker De sete ved midtgangen eller ved vinduet?)*\n\n**Pasajero:** De ventanilla, por favor. ¿Podría sentarme cerca de la salida de emergencia?\n*(Ved vinduet, takk. Kunne jeg sitte nær nødutgangen?)*\n\n**Empleada:** Sí, le he asignado el asiento 14A. ¿Tiene equipaje para facturar?\n*(Ja, jeg har tildelt Dem sete 14A. Har De bagasje å sjekke inn?)*\n\n**Pasajero:** Sí, esta maleta. Y llevo este bolso como equipaje de mano.\n*(Ja, denne kofferten. Og jeg har denne vesken som håndbagasje.)*\n\n**Empleada:** Perfecto. Su puerta de embarque es la B12. El embarque comienza a las 10:45.\n*(Perfekt. Gaten Deres er B12. Boarding starter klokken 10:45.)*`,
    },
    {
      id: 'spansk-2-11-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "la tarjeta de embarque"?',
        options: [
          { id: 'a', text: 'Kredittkort', isCorrect: false },
          { id: 'b', text: 'Boardingkort', isCorrect: true },
          { id: 'c', text: 'Nøkkelkort', isCorrect: false },
          { id: 'd', text: 'Visittkort', isCorrect: false },
        ],
        solution: 'Riktig svar er **boardingkort**. "La tarjeta de embarque" er kortet du trenger for å gå om bord i flyet. "Embarque" kommer fra verbet "embarcar" (å gå om bord).',
      },
    },
    {
      id: 'spansk-2-11-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning ville du bruke for å be om et rom med havutsikt på et hotell?',
        options: [
          { id: 'a', text: '¡Quiero una habitación con mar!', isCorrect: false },
          { id: 'b', text: '¿Podría darme una habitación con vistas al mar?', isCorrect: true },
          { id: 'c', text: 'Dame una habitación al mar.', isCorrect: false },
          { id: 'd', text: 'Necesito ver el mar desde mi casa.', isCorrect: false },
        ],
        solution: 'Riktig svar er **¿Podría darme una habitación con vistas al mar?** Dette er en høflig forespørsel med kondisjonal. De andre alternativene er enten uhøflige, grammatisk feil, eller ikke passende for hotellsituasjonen.',
      },
    },
    {
      id: 'spansk-2-11-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble de spanske ordene med de norske oversettelsene.',
        subTasks: [
          { label: 'a', task: 'el equipaje de mano', solution: 'håndbagasje' },
          { label: 'b', task: 'la cinta de equipajes', solution: 'bagasjebåndet' },
          { label: 'c', task: 'la puerta de embarque', solution: 'gaten (boarding gate)' },
          { label: 'd', task: 'el control de seguridad', solution: 'sikkerhetskontrollen' },
          { label: 'e', task: 'el mostrador de facturación', solution: 'innsjekkingsskranken' },
        ],
        solution: 'a) håndbagasje, b) bagasjebåndet, c) gaten (boarding gate), d) sikkerhetskontrollen, e) innsjekkingsskranken.',
      },
    },
    {
      id: 'spansk-2-11-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog (6-8 replikker) der du sjekker ut av et hotell. Bruk vokabular fra kapittelet og kondisjonal for høflige forespørsler.',
        solution: 'Eksempel: "Huésped: Buenos días. Querría hacer el check-out, por favor. Recepcionista: Buenos días. ¿Qué número de habitación? Huésped: La 305. ¿Podría ver la factura? Recepcionista: Sí, aquí tiene. Son 240 euros en total. Huésped: ¿Sería posible pagar con tarjeta? Recepcionista: Por supuesto. Huésped: Gracias. ¿Podría llamarme un taxi al aeropuerto? Recepcionista: Claro, le llamo uno ahora mismo."',
      },
    },
    {
      id: 'spansk-2-11-2-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Hotellvokabular**: la recepción, la habitación, la tarjeta, el desayuno incluido, la factura\n- **Flyplassvokabular**: la tarjeta de embarque, la puerta de embarque, el equipaje de mano, el control de seguridad\n- **Innsjekking og utsjekking**: Praktiske dialoger for hotellbesøk\n- **Flyplassfraser**: Hvordan sjekke inn bagasje, velge sete og finne gaten\n- **Høflige uttrykk**: ¿Podría...?, ¿Sería posible...?, Querría...`,
    },
    {
      id: 'spansk-2-11-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva sier du på spansk for å spørre om frokost er inkludert i prisen?',
        options: [
          { id: 'a', text: '¿Cuánto cuesta el desayuno?', isCorrect: false },
          { id: 'b', text: '¿El desayuno está incluido en el precio?', isCorrect: true },
          { id: 'c', text: '¿Dónde está el desayuno?', isCorrect: false },
          { id: 'd', text: '¿Puedo desayunar aquí?', isCorrect: false },
        ],
        solution: 'Riktig svar er **¿El desayuno está incluido en el precio?** (Er frokosten inkludert i prisen?). De andre spør om pris, sted eller tillatelse, men ikke om frokosten er inkludert.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la recepción', definition: 'resepsjonen (på hotellet)' },
    { term: 'la habitación doble', definition: 'dobbeltrom' },
    { term: 'la tarjeta de embarque', definition: 'boardingkortet' },
    { term: 'la puerta de embarque', definition: 'gaten (boarding gate)' },
    { term: 'el equipaje de mano', definition: 'håndbagasjen' },
    { term: 'la factura', definition: 'regningen, fakturaen' },
    { term: 'el mostrador de facturación', definition: 'innsjekkingsskranken' },
    { term: 'la escala', definition: 'mellomlandingen' },
  ],
};

// ============================================================
// KAPITTEL 11.3: Problemas de viaje
// ============================================================

export const CHAPTER_SPANSK_2_11_3: TextbookChapter = {
  id: 'spansk-2-11-3',
  courseId: 'spansk-2',
  chapterNumber: '11.3',
  title: 'Problemas de viaje',
  subtitle: 'Reiseproblemer',
  description: 'Lær å håndtere reiseproblemer som forsinkelser, klager, tapt bagasje og andre uforutsette situasjoner på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne klage og rapportere problemer på spansk i reisesituasjoner',
    'Beherske vokabular knyttet til forsinkelser, kanselleringer og tapt bagasje',
    'Kunne uttrykke misnøye og kreve løsninger på en høflig måte',
  ],
  content: [
    {
      id: 'spansk-2-11-3-intro',
      type: 'text',
      content: `## Problemas de viaje\n\nReiser går ikke alltid som planlagt. Forsinkede fly, tapt bagasje og dårlige hotellrom er vanlige problemer som reisende kan møte. I dette kapittelet lærer du hvordan du håndterer slike situasjoner på spansk – fra å forstå kunngjøringer om forsinkelser til å levere formelle klager.\n\n### Vanlige reiseproblemer\n\n| Spansk | Norsk |\n|--------|-------|\n| el retraso | forsinkelsen |\n| la cancelación | kanselleringen |\n| el equipaje perdido | den tapte bagasjen |\n| la reclamación | klagen/reklamasjonen |\n| la hoja de reclamaciones | klageskjemaet |\n| la indemnización | erstatningen |\n| el overbooking | overbooking |\n| la avería | feilen/defekten |\n| el problema con la reserva | problemet med reservasjonen |\n| perder el vuelo | å miste flyet |`,
    },
    {
      id: 'spansk-2-11-3-def-1',
      type: 'definition',
      title: 'Uttrykk for å klage og kreve',
      content: `**Nyttige uttrykk for klager:**\n\n- *Quisiera presentar una reclamación.* – Jeg ville gjerne levere en klage.\n- *No estoy satisfecho/a con...* – Jeg er ikke fornøyd med...\n- *Esto no es lo que reservé.* – Dette er ikke det jeg reserverte.\n- *Exijo una explicación / una solución.* – Jeg krever en forklaring / en løsning.\n- *¿Podría hablar con el responsable?* – Kunne jeg få snakke med den ansvarlige?\n- *Es inaceptable que...* – Det er uakseptabelt at...\n- *Me han cobrado de más.* – Jeg har blitt overbelastet (tatt for mye betalt).\n- *Les ruego que solucionen este problema.* – Jeg ber dere om å løse dette problemet.`,
    },
    {
      id: 'spansk-2-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Tapt bagasje',
      problem: `Hvordan rapporterer man tapt bagasje på flyplassen?`,
      solution: `**Pasajero:** Disculpe, mi equipaje no ha llegado. He esperado en la cinta de equipajes, pero mi maleta no ha aparecido.\n*(Unnskyld, bagasjen min har ikke kommet. Jeg har ventet ved bagasjebåndet, men kofferten min har ikke dukket opp.)*\n\n**Empleada:** Lamento mucho la situación. ¿Podría describir su maleta?\n*(Jeg beklager situasjonen. Kunne De beskrive kofferten Deres?)*\n\n**Pasajero:** Es una maleta grande, negra, con una etiqueta roja. Aquí tiene el resguardo del equipaje.\n*(Det er en stor, svart koffert med en rød merkelapp. Her er bagasjekvitteringen.)*\n\n**Empleada:** Gracias. Vamos a rastrear su equipaje. ¿Podría rellenar este formulario con sus datos y la dirección del hotel?\n*(Takk. Vi skal spore bagasjen Deres. Kunne De fylle ut dette skjemaet med kontaktinformasjon og hotelladressen?)*\n\n**Pasajero:** Sí, claro. ¿Cuánto tiempo tardarán en encontrarla?\n*(Ja, selvfølgelig. Hvor lang tid vil det ta å finne den?)*\n\n**Empleada:** Normalmente entre 24 y 48 horas. Le llamaremos en cuanto la localicemos.\n*(Normalt mellom 24 og 48 timer. Vi ringer Dem så snart vi lokaliserer den.)*`,
    },
    {
      id: 'spansk-2-11-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Klage på hotellrom',
      problem: `Skriv en dialog der en gjest klager på hotellrommet.`,
      solution: `**Huésped:** Disculpe, tengo un problema con mi habitación. El aire acondicionado no funciona y hay mucho ruido de la calle.\n*(Unnskyld, jeg har et problem med rommet mitt. Klimaanlegget virker ikke og det er mye støy fra gaten.)*\n\n**Recepcionista:** Lo siento mucho. Enviaré a alguien de mantenimiento para revisar el aire acondicionado.\n*(Det beklager jeg veldig. Jeg sender noen fra vedlikehold for å sjekke klimaanlegget.)*\n\n**Huésped:** Además, la habitación no está limpia. Había toallas usadas en el baño.\n*(I tillegg er ikke rommet rent. Det var brukte håndklær på badet.)*\n\n**Recepcionista:** Eso es inaceptable. Le pido disculpas. ¿Le gustaría cambiar a otra habitación?\n*(Det er uakseptabelt. Jeg ber om unnskyldning. Vil De bytte til et annet rom?)*\n\n**Huésped:** Sí, me gustaría una habitación en una planta más alta y más tranquila. Y querría un descuento por las molestias.\n*(Ja, jeg vil gjerne ha et rom i en høyere og roligere etasje. Og jeg ville gjerne ha en rabatt for ulempene.)*`,
    },
    {
      id: 'spansk-2-11-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "Quisiera presentar una reclamación"?',
        options: [
          { id: 'a', text: 'Jeg vil presentere en reservasjon.', isCorrect: false },
          { id: 'b', text: 'Jeg ville gjerne levere en klage.', isCorrect: true },
          { id: 'c', text: 'Jeg ønsker å legge frem en anbefaling.', isCorrect: false },
          { id: 'd', text: 'Jeg vil gjerne ha en forklaring.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Jeg ville gjerne levere en klage**. "Quisiera" er kondisjonal av "querer" (en spesielt høflig form), og "reclamación" betyr klage/reklamasjon.',
      },
    },
    {
      id: 'spansk-2-11-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Flyet ditt er forsinket. Hvilken kunngjøring vil du sannsynligvis høre?',
        options: [
          { id: 'a', text: 'El vuelo IB 3245 ha sido cancelado.', isCorrect: false },
          { id: 'b', text: 'El vuelo IB 3245 tiene un retraso de dos horas.', isCorrect: true },
          { id: 'c', text: 'El vuelo IB 3245 ha aterrizado.', isCorrect: false },
          { id: 'd', text: 'El vuelo IB 3245 está embarcando.', isCorrect: false },
        ],
        solution: 'Riktig svar er **El vuelo IB 3245 tiene un retraso de dos horas** (Fly IB 3245 har en forsinkelse på to timer). "Retraso" betyr forsinkelse. De andre betyr kansellert, har landet, eller boarder.',
      },
    },
    {
      id: 'spansk-2-11-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett setningene til spansk. Bruk høflige uttrykk.',
        subTasks: [
          { label: 'a', task: 'Bagasjen min har ikke kommet.', solution: 'Mi equipaje no ha llegado.' },
          { label: 'b', task: 'Jeg er ikke fornøyd med rommet.', solution: 'No estoy satisfecho/a con la habitación.' },
          { label: 'c', task: 'Kunne jeg snakke med den ansvarlige?', solution: '¿Podría hablar con el responsable?' },
          { label: 'd', task: 'Klimaanlegget virker ikke.', solution: 'El aire acondicionado no funciona.' },
        ],
        solution: 'a) Mi equipaje no ha llegado. b) No estoy satisfecho/a con la habitación. c) ¿Podría hablar con el responsable? d) El aire acondicionado no funciona.',
      },
    },
    {
      id: 'spansk-2-11-3-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Problemvokabular**: el retraso, la cancelación, el equipaje perdido, la reclamación, la avería\n- **Klagefraser**: Quisiera presentar una reclamación, No estoy satisfecho/a con..., Es inaceptable que...\n- **Praktiske dialoger**: Rapportere tapt bagasje, klage på hotellrom, håndtere forsinkelser\n- **Høflig klagestil**: Bruk av kondisjonal og formelle uttrykk for å klage uten å være uhøflig\n- **Nyttige verb**: funcionar (virke), reclamar (klage), exigir (kreve), solucionar (løse)`,
    },
    {
      id: 'spansk-2-11-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et formelt klagebrev (6-8 setninger) til et hotell der du beskriver problemer du opplevde under oppholdet. Bruk minst 3 uttrykk for å klage fra kapittelet.',
        solution: 'Eksempel: "Estimado director del hotel: Le escribo para presentar una reclamación sobre mi estancia en su hotel del 15 al 18 de marzo. No estoy satisfecho con el servicio recibido. El aire acondicionado de mi habitación no funcionaba y el personal tardó dos días en repararlo. Además, la habitación no estaba limpia cuando llegué. Es inaceptable que un hotel de cuatro estrellas ofrezca este nivel de servicio. Les ruego que me ofrezcan una indemnización. Atentamente, [nombre]."',
      },
    },
    {
      id: 'spansk-2-11-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "la hoja de reclamaciones"?',
        options: [
          { id: 'a', text: 'Reiseplanen', isCorrect: false },
          { id: 'b', text: 'Klageskjemaet', isCorrect: true },
          { id: 'c', text: 'Fakturaen', isCorrect: false },
          { id: 'd', text: 'Bestillingsskjemaet', isCorrect: false },
        ],
        solution: 'Riktig svar er **klageskjemaet**. I Spania har alle bedrifter plikt til å ha "hojas de reclamaciones" (klageskjemaer) tilgjengelig for kunder. "Hoja" betyr ark/skjema og "reclamación" betyr klage.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el retraso', definition: 'forsinkelsen' },
    { term: 'la cancelación', definition: 'kanselleringen' },
    { term: 'el equipaje perdido', definition: 'den tapte bagasjen' },
    { term: 'la reclamación', definition: 'klagen, reklamasjonen' },
    { term: 'la hoja de reclamaciones', definition: 'klageskjemaet' },
    { term: 'la indemnización', definition: 'erstatningen, kompensasjonen' },
    { term: 'la avería', definition: 'feilen, defekten' },
  ],
};

// ============================================================
// KAPITTEL 11.4: Escribir sobre viajes
// ============================================================

export const CHAPTER_SPANSK_2_11_4: TextbookChapter = {
  id: 'spansk-2-11-4',
  courseId: 'spansk-2',
  chapterNumber: '11.4',
  title: 'Escribir sobre viajes',
  subtitle: 'Å skrive om reiser',
  description: 'Lær å skrive reiserapporter og reiseblogger på spansk, med fokus på bruk av fortidsformer (pretérito indefinido og pretérito imperfecto).',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive en reiserapport eller reiseblogg på spansk',
    'Mestre forskjellen mellom pretérito indefinido og pretérito imperfecto i fortellinger',
    'Bruke beskrivende språk for å formidle reiseopplevelser',
  ],
  content: [
    {
      id: 'spansk-2-11-4-intro',
      type: 'text',
      content: `## Escribir sobre viajes\n\nÅ skrive om reiser – enten som en rapport, en blogg eller en dagbok – er en utmerket måte å øve spansk på. I dette kapittelet fokuserer vi på **fortidsformene** som er avgjørende for å fortelle om reiseopplevelser: **pretérito indefinido** (for hendelser) og **pretérito imperfecto** (for beskrivelser og bakgrunn).\n\n### Nyttige tidsuttrykk for reisefortellinger\n\n| Spansk | Norsk |\n|--------|-------|\n| el primer día | den første dagen |\n| al día siguiente | dagen etter |\n| durante la estancia | under oppholdet |\n| al llegar | ved ankomst |\n| antes de volver | før vi dro tilbake |\n| al final del viaje | på slutten av reisen |\n| mientras tanto | i mellomtiden |\n| después de visitar | etter å ha besøkt |`,
    },
    {
      id: 'spansk-2-11-4-def-1',
      type: 'definition',
      title: 'Indefinido vs. imperfecto i reisefortellinger',
      content: `**Pretérito indefinido** brukes for:\n- Avsluttede handlinger: *Visitamos la Alhambra.* (Vi besøkte Alhambra.)\n- Hendelser i rekkefølge: *Llegamos, dejamos las maletas y salimos a pasear.* (Vi ankom, la igjen koffertene og gikk ut for å spasere.)\n- Spesifikke tidspunkt: *El último día compramos recuerdos.* (Den siste dagen kjøpte vi suvenirer.)\n\n**Pretérito imperfecto** brukes for:\n- Beskrivelser: *El hotel era moderno y tenía piscina.* (Hotellet var moderne og hadde basseng.)\n- Vær og stemning: *Hacía sol y la temperatura era perfecta.* (Det var sol og temperaturen var perfekt.)\n- Gjentatte handlinger: *Cada mañana desayunábamos en la terraza.* (Hver morgen spiste vi frokost på terrassen.)\n- Bakgrunnsinformasjon: *La ciudad estaba llena de turistas.* (Byen var full av turister.)`,
    },
    {
      id: 'spansk-2-11-4-example-1',
      type: 'example',
      title: 'Eksempel 1: En reiseblogg',
      problem: `Les denne korte reisebloggen og legg merke til bruken av indefinido og imperfecto.`,
      solution: `**Mi viaje a Barcelona**\n\n*El mes pasado **viajé** a Barcelona con mi familia. **Llegamos** al aeropuerto a las diez de la mañana. **Hacía** un tiempo espléndido y el cielo **estaba** completamente azul.*\n\n*El primer día **visitamos** la Sagrada Familia. **Era** impresionante – la arquitectura de Gaudí **parecía** sacada de un sueño. **Sacamos** muchas fotos.*\n\n*Cada mañana **desayunábamos** en una cafetería cerca del hotel. **Servían** churros con chocolate que **estaban** deliciosos.*\n\n*El último día **fuimos** al mercado de la Boquería, donde **compramos** jamón y queso. Al final del viaje, no **queríamos** volver a casa.*\n\nLegg merke til: **Indefinido** (fet skrift) for handlinger/hendelser, *imperfecto* (kursiv) for beskrivelser og bakgrunn.`,
    },
    {
      id: 'spansk-2-11-4-def-2',
      type: 'definition',
      title: 'Struktur for en reiserapport',
      content: `**En god reiserapport inneholder:**\n\n1. **Introducción**: Hvor, når, med hvem\n   - *El verano pasado viajé a... con...*\n2. **El viaje**: Hvordan dere kom dit\n   - *Cogimos un vuelo directo a... / Viajamos en tren...*\n3. **El alojamiento**: Beskrivelse av overnatting\n   - *Nos alojamos en un hotel que estaba...*\n4. **Las actividades**: Hva dere gjorde\n   - *Visitamos..., Fuimos a..., Probamos...*\n5. **Las impresiones**: Inntrykk og meninger\n   - *Lo que más me gustó fue... / Me encantó...*\n6. **Conclusión**: Oppsummering\n   - *Fue un viaje inolvidable... / Me gustaría volver...*`,
    },
    {
      id: 'spansk-2-11-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrivende språk',
      problem: `Hvordan kan vi gjøre reisebeskrivelser mer levende med adjektiver og uttrykk?`,
      solution: `**Nyttige beskrivende uttrykk:**\n\n- *un paisaje espectacular* – et spektakulært landskap\n- *una experiencia inolvidable* – en uforglemmelig opplevelse\n- *la comida era exquisita* – maten var utsøkt\n- *la gente era muy amable* – folkene var veldig vennlige\n- *un ambiente animado* – en livlig stemning\n- *unas vistas impresionantes* – en imponerende utsikt\n- *un lugar encantador* – et sjarmerende sted\n\n**Eksempel med beskrivende språk:**\n*Sevilla era una ciudad fascinante. Las calles estrechas del barrio de Santa Cruz tenían un encanto especial. La Giralda era impresionante y desde arriba había unas vistas espectaculares de toda la ciudad. La comida andaluza era deliciosa, especialmente el gazpacho y las tapas.*`,
    },
    {
      id: 'spansk-2-11-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken verbform brukes for å beskrive bakgrunn og stemning i en reisefortelling?',
        options: [
          { id: 'a', text: 'Pretérito indefinido', isCorrect: false },
          { id: 'b', text: 'Pretérito imperfecto', isCorrect: true },
          { id: 'c', text: 'Presente de indicativo', isCorrect: false },
          { id: 'd', text: 'Futuro simple', isCorrect: false },
        ],
        solution: 'Riktig svar er **pretérito imperfecto**. Imperfecto brukes for beskrivelser, bakgrunn, vær, stemning og gjentatte handlinger i fortiden. Indefinido brukes for avsluttede, konkrete hendelser.',
      },
    },
    {
      id: 'spansk-2-11-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig verbform (indefinido eller imperfecto) for hvert verb i parentes.',
        subTasks: [
          { label: 'a', task: 'El hotel _______ (ser) muy moderno y _______ (tener) piscina.', solution: 'era, tenía (imperfecto – beskrivelse)' },
          { label: 'b', task: 'El primer día _______ (visitar, nosotros) el museo y _______ (comer) en un restaurante típico.', solution: 'visitamos, comimos (indefinido – avsluttede hendelser)' },
          { label: 'c', task: 'Mientras _______ (pasear, nosotros) por la playa, _______ (encontrar, nosotros) una concha muy bonita.', solution: 'paseábamos (imperfecto – bakgrunn), encontramos (indefinido – hendelse)' },
          { label: 'd', task: 'Cada tarde _______ (ir, nosotros) a la playa porque _______ (hacer) mucho calor.', solution: 'íbamos, hacía (begge imperfecto – gjentatt handling og beskrivelse)' },
        ],
        solution: 'a) era, tenía (beskrivelser = imperfecto), b) visitamos, comimos (avsluttede handlinger = indefinido), c) paseábamos, encontramos (bakgrunn + hendelse = imperfecto + indefinido), d) íbamos, hacía (gjentatt handling + beskrivelse = imperfecto).',
      },
    },
    {
      id: 'spansk-2-11-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning bruker korrekt kombinasjon av indefinido og imperfecto?',
        options: [
          { id: 'a', text: 'Cuando llegábamos al hotel, el recepcionista nos daba la llave.', isCorrect: false },
          { id: 'b', text: 'Cuando llegamos al hotel, el recepcionista nos dio la llave.', isCorrect: true },
          { id: 'c', text: 'Cuando llegué al hotel, el recepcionista nos dabas la llave.', isCorrect: false },
          { id: 'd', text: 'Cuando llegamos al hotel, el recepcionista nos damos la llave.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Cuando llegamos al hotel, el recepcionista nos dio la llave.** "Llegamos" (indefinido) er en avsluttet handling, og "dio" (indefinido) er resultatet. Begge er konkrete hendelser i en sekvens.',
      },
    },
    {
      id: 'spansk-2-11-4-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Indefinido vs. imperfecto**: Indefinido for hendelser og handlinger, imperfecto for beskrivelser og bakgrunn\n- **Reiserapportstruktur**: Introducción → El viaje → El alojamiento → Las actividades → Las impresiones → Conclusión\n- **Tidsuttrykk**: el primer día, al día siguiente, durante la estancia, al final del viaje\n- **Beskrivende språk**: espectacular, inolvidable, encantador, impresionante, fascinante\n- **Bloggstil**: Hvordan kombinere fortidsformene for å skape en levende reisefortelling`,
    },
    {
      id: 'spansk-2-11-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en reiseblogg (8-10 setninger) om en reise du har gjort (ekte eller oppdiktet). Følg strukturen fra kapittelet og bruk både indefinido og imperfecto korrekt.',
        solution: 'Eksempel: "El verano pasado viajé a Málaga con mis amigos. Cogimos un vuelo directo desde Oslo. El tiempo era fantástico – hacía sol todos los días. Nos alojamos en un hotel que estaba cerca de la playa. El primer día visitamos la Alcazaba, que era un monumento impresionante. Cada mañana desayunábamos en un café junto al mar. Un día fuimos a Ronda, un pueblo que tenía un puente espectacular. La comida andaluza era deliciosa, especialmente el pescaíto frito. El último día compramos recuerdos en el centro. Fue un viaje inolvidable y me gustaría volver algún día."',
      },
    },
    {
      id: 'spansk-2-11-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-11-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "Fue un viaje inolvidable"?',
        options: [
          { id: 'a', text: 'Det var en uforglemmelig reise.', isCorrect: true },
          { id: 'b', text: 'Det blir en uforglemmelig reise.', isCorrect: false },
          { id: 'c', text: 'Det var en forferdelig reise.', isCorrect: false },
          { id: 'd', text: 'Det var en kort reise.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Det var en uforglemmelig reise**. "Fue" er pretérito indefinido av "ser" og "inolvidable" betyr uforglemmelig (in- = u-, olvidar = glemme).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'pretérito indefinido', definition: 'spansk fortidsform for avsluttede handlinger og hendelser' },
    { term: 'pretérito imperfecto', definition: 'spansk fortidsform for beskrivelser, bakgrunn og gjentatte handlinger' },
    { term: 'inolvidable', definition: 'uforglemmelig' },
    { term: 'el paisaje', definition: 'landskapet' },
    { term: 'la experiencia', definition: 'opplevelsen' },
    { term: 'el recuerdo', definition: 'suveniren / minnet' },
    { term: 'encantador/a', definition: 'sjarmerende' },
  ],
};

// ============================================================
// KAPITTEL 12.1: El cuerpo y la salud
// ============================================================

export const CHAPTER_SPANSK_2_12_1: TextbookChapter = {
  id: 'spansk-2-12-1',
  courseId: 'spansk-2',
  chapterNumber: '12.1',
  title: 'El cuerpo y la salud',
  subtitle: 'Kroppen og helsen',
  description: 'Lær kroppsdeler og grunnleggende helsevokabular på spansk, inkludert uttrykk for å beskrive symptomer og plager.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne navngi kroppsdeler på spansk med riktig artikkel',
    'Beherske vokabular for vanlige sykdommer og symptomer',
    'Kunne beskrive plager og helseproblemer',
  ],
  content: [
    {
      id: 'spansk-2-12-1-intro',
      type: 'text',
      content: `## El cuerpo y la salud\n\nÅ kunne snakke om kroppen og helsen er avgjørende når du reiser eller bor i et spansktalende land. I dette kapittelet lærer du navnene på kroppsdeler, vanlige sykdommer og symptomer, og hvordan du uttrykker at du har vondt eller er syk.\n\n### Las partes del cuerpo (Kroppsdeler)\n\n| Spansk | Norsk |\n|--------|-------|\n| la cabeza | hodet |\n| el cuello | halsen |\n| el hombro | skulderen |\n| el brazo | armen |\n| la mano | hånden |\n| el dedo | fingeren |\n| el pecho | brystet |\n| la espalda | ryggen |\n| el estómago | magen |\n| la pierna | beinet |\n| la rodilla | kneet |\n| el tobillo | ankelen |\n| el pie | foten |\n| el corazón | hjertet |\n| el oído | øret (indre) |\n| la oreja | øret (ytre) |\n| el ojo | øyet |\n| la nariz | nesen |\n| la boca | munnen |\n| la garganta | halsen (svelget) |`,
    },
    {
      id: 'spansk-2-12-1-def-1',
      type: 'definition',
      title: 'Uttrykk med "doler" og "tener"',
      content: `**Doler** (å gjøre vondt) brukes som «gustar» – med indirekte objektpronomen:\n\n- *Me duele la cabeza.* – Jeg har vondt i hodet. (Hodet gjør vondt for meg.)\n- *Me duelen los pies.* – Jeg har vondt i føttene.\n- *Le duele el estómago.* – Han/hun har vondt i magen.\n- *Nos duelen las piernas.* – Vi har vondt i beina.\n\n**Tener** + substantiv for symptomer:\n\n- *Tener fiebre* – å ha feber\n- *Tener tos* – å ha hoste\n- *Tener gripe* – å ha influensa\n- *Tener dolor de cabeza* – å ha hodepine\n- *Tener náuseas* – å ha kvalme\n- *Tener mareos* – å ha svimmelhet\n- *Tener alergia a...* – å være allergisk mot...`,
    },
    {
      id: 'spansk-2-12-1-def-2',
      type: 'definition',
      title: 'Vanlige sykdommer og plager',
      content: `| Spansk | Norsk |\n|--------|-------|\n| el resfriado | forkjølelsen |\n| la gripe | influensaen |\n| la fiebre | feberen |\n| la tos | hosten |\n| el dolor de cabeza | hodepinen |\n| el dolor de espalda | ryggsmerter |\n| el dolor de garganta | vondt i halsen |\n| la herida | såret |\n| la quemadura | brannsåret |\n| la alergia | allergien |\n| la infección | infeksjonen |\n| el mareo | svimmelheten |\n| la indigestión | fordøyelsesbesvær |\n| la fractura | bruddet (beinbrudd) |`,
    },
    {
      id: 'spansk-2-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Beskrive symptomer',
      problem: `Hvordan beskriver vi symptomer og plager på spansk?`,
      solution: `**Vanlige måter å uttrykke plager:**\n\n- *No me encuentro bien.* – Jeg føler meg ikke bra.\n- *Estoy enfermo/a.* – Jeg er syk.\n- *Me duele mucho la garganta.* – Jeg har veldig vondt i halsen.\n- *Tengo fiebre y tos.* – Jeg har feber og hoste.\n- *Me he torcido el tobillo.* – Jeg har forstuet ankelen.\n- *Me he cortado el dedo.* – Jeg har kuttet meg i fingeren.\n- *Creo que tengo gripe.* – Jeg tror jeg har influensa.\n- *Me pica todo el cuerpo.* – Det klør over hele kroppen.\n- *Tengo la nariz tapada.* – Jeg har tett nese.\n- *Estoy resfriado/a.* – Jeg er forkjølet.`,
    },
    {
      id: 'spansk-2-12-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Dialog om helse',
      problem: `Skriv en dialog mellom to venner der den ene er syk.`,
      solution: `**María:** Hola, Pedro. ¿Qué te pasa? No tienes buena cara.\n*(Hei, Pedro. Hva er galt? Du ser ikke bra ut.)*\n\n**Pedro:** No me encuentro bien. Me duele mucho la cabeza y tengo fiebre.\n*(Jeg føler meg ikke bra. Jeg har veldig vondt i hodet og jeg har feber.)*\n\n**María:** ¿Desde cuándo te sientes así?\n*(Hvor lenge har du følt deg sånn?)*\n\n**Pedro:** Desde ayer por la tarde. También me duele la garganta y tengo tos.\n*(Siden i går ettermiddag. Jeg har også vondt i halsen og hoste.)*\n\n**María:** Parece que tienes gripe. Deberías ir al médico.\n*(Det virker som du har influensa. Du burde gå til legen.)*\n\n**Pedro:** Sí, creo que tienes razón. También me duelen los músculos.\n*(Ja, jeg tror du har rett. Musklene mine er også vonde.)*`,
    },
    {
      id: 'spansk-2-12-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "Me duele la espalda"?',
        options: [
          { id: 'a', text: 'Jeg har vondt i magen.', isCorrect: false },
          { id: 'b', text: 'Jeg har vondt i ryggen.', isCorrect: true },
          { id: 'c', text: 'Jeg har vondt i skulderen.', isCorrect: false },
          { id: 'd', text: 'Jeg har vondt i brystet.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Jeg har vondt i ryggen**. "La espalda" betyr ryggen. "Me duele" betyr «det gjør vondt for meg» (noe gjør vondt).',
      },
    },
    {
      id: 'spansk-2-12-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket alternativ bruker "doler" korrekt i flertall?',
        options: [
          { id: 'a', text: 'Me duele los ojos.', isCorrect: false },
          { id: 'b', text: 'Me duelo los ojos.', isCorrect: false },
          { id: 'c', text: 'Me duelen los ojos.', isCorrect: true },
          { id: 'd', text: 'Me duelan los ojos.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Me duelen los ojos**. Når det som gjør vondt er i flertall (los ojos), må verbet "doler" også stå i flertall: duelen. Verbet kongruerer med det som gjør vondt, ikke med personen.',
      },
    },
    {
      id: 'spansk-2-12-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk. Bruk "doler" eller "tener" etter behov.',
        subTasks: [
          { label: 'a', task: 'Jeg har hodepine.', solution: 'Me duele la cabeza. / Tengo dolor de cabeza.' },
          { label: 'b', task: 'Hun har feber og hoste.', solution: 'Ella tiene fiebre y tos.' },
          { label: 'c', task: 'Vi har vondt i beina.', solution: 'Nos duelen las piernas.' },
          { label: 'd', task: 'Han er forkjølet.', solution: 'Él está resfriado. / Él tiene un resfriado.' },
          { label: 'e', task: 'Jeg er allergisk mot nøtter.', solution: 'Tengo alergia a los frutos secos.' },
        ],
        solution: 'a) Me duele la cabeza / Tengo dolor de cabeza, b) Ella tiene fiebre y tos, c) Nos duelen las piernas, d) Él está resfriado, e) Tengo alergia a los frutos secos.',
      },
    },
    {
      id: 'spansk-2-12-1-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Kroppsdeler**: la cabeza, el brazo, la pierna, la espalda, la garganta, el estómago, el pie, la mano\n- **Verbet doler**: Fungerer som «gustar» – Me duele (entall) / Me duelen (flertall)\n- **Tener + substantiv**: tener fiebre, tener tos, tener gripe, tener dolor de...\n- **Vanlige sykdommer**: el resfriado, la gripe, la alergia, la infección\n- **Nyttige uttrykk**: No me encuentro bien, Estoy enfermo/a, Me he torcido...`,
    },
    {
      id: 'spansk-2-12-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv symptomene for følgende sykdommer på spansk (skriv 2-3 symptomer for hver).',
        subTasks: [
          { label: 'a', task: 'La gripe (influensa)', solution: 'Tengo fiebre, me duelen los músculos y tengo tos. / Estoy cansado/a y me duele la cabeza.' },
          { label: 'b', task: 'Un resfriado (forkjølelse)', solution: 'Tengo la nariz tapada, me duele la garganta y estornudo mucho. / Tengo tos leve.' },
        ],
        solution: 'a) La gripe: Tengo fiebre, me duelen los músculos y tengo tos. b) Un resfriado: Tengo la nariz tapada, me duele la garganta y estornudo mucho.',
      },
    },
    {
      id: 'spansk-2-12-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er riktig oversettelse av "Jeg har forstuet ankelen"?',
        options: [
          { id: 'a', text: 'Me he roto el tobillo.', isCorrect: false },
          { id: 'b', text: 'Me he torcido el tobillo.', isCorrect: true },
          { id: 'c', text: 'Me duele el tobillo.', isCorrect: false },
          { id: 'd', text: 'Tengo mal el tobillo.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Me he torcido el tobillo**. "Torcerse" betyr å forstue seg. "Romperse" ville bety å brekke. "Me duele el tobillo" betyr bare at ankelen gjør vondt, uten å spesifisere årsaken.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la cabeza', definition: 'hodet' },
    { term: 'la espalda', definition: 'ryggen' },
    { term: 'el estómago', definition: 'magen' },
    { term: 'doler (me duele/duelen)', definition: 'å gjøre vondt (brukes som gustar)' },
    { term: 'la fiebre', definition: 'feberen' },
    { term: 'el resfriado', definition: 'forkjølelsen' },
    { term: 'la garganta', definition: 'halsen (svelget)' },
    { term: 'torcerse', definition: 'å forstue seg' },
  ],
};

// ============================================================
// KAPITTEL 12.2: En el médico y en la farmacia
// ============================================================

export const CHAPTER_SPANSK_2_12_2: TextbookChapter = {
  id: 'spansk-2-12-2',
  courseId: 'spansk-2',
  chapterNumber: '12.2',
  title: 'En el médico y en la farmacia',
  subtitle: 'Hos legen og på apoteket',
  description: 'Lær å kommunisere hos legen og på apoteket på spansk, inkludert bruk av modale verb (deber, tener que, hay que) for medisinske råd.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne gjennomføre en legekonsultasjon på spansk',
    'Beherske vokabular for medisinsk behandling og medisiner',
    'Bruke modale verb for å gi og forstå medisinske råd',
  ],
  content: [
    {
      id: 'spansk-2-12-2-intro',
      type: 'text',
      content: `## En el médico y en la farmacia\n\nHvis du blir syk i et spansktalende land, må du kunne kommunisere med legen og apotekeren. I dette kapittelet lærer du viktig medisinsk vokabular og hvordan du bruker **modale verb** (deber, tener que, hay que) for å forstå og gi medisinske råd.\n\n### Medisinsk vokabular\n\n| Spansk | Norsk |\n|--------|-------|\n| el/la médico/a | legen |\n| el/la enfermero/a | sykepleieren |\n| la consulta | konsultasjonen / legekontoret |\n| la receta | resepten |\n| el medicamento / la medicina | medisinen |\n| la pastilla | tabletten |\n| el jarabe | saften (medisin) |\n| la pomada | salven |\n| la inyección | sprøyten |\n| la venda | bandasjen |\n| la tirita | plasteret |\n| la farmacia | apoteket |\n| el/la farmacéutico/a | apotekeren |\n| los análisis de sangre | blodprøvene |\n| la radiografía | røntgenbildet |`,
    },
    {
      id: 'spansk-2-12-2-def-1',
      type: 'definition',
      title: 'Modale verb: deber, tener que, hay que',
      content: `**Modale verb** uttrykker nødvendighet, plikt eller anbefaling:\n\n**Deber + infinitiv** (bør, må – moralsk plikt/anbefaling):\n- *Debes descansar más.* – Du bør hvile mer.\n- *No deberías fumar.* – Du burde ikke røyke. (kondisjonal = mildere)\n\n**Tener que + infinitiv** (må – sterk nødvendighet):\n- *Tienes que tomar estas pastillas tres veces al día.* – Du må ta disse tablettene tre ganger om dagen.\n- *Tengo que ir al médico.* – Jeg må gå til legen.\n\n**Hay que + infinitiv** (man må – upersonlig):\n- *Hay que beber mucha agua.* – Man må drikke mye vann.\n- *Hay que descansar cuando se está enfermo.* – Man må hvile når man er syk.\n\n**Styrkegrad**: hay que (generelt) < deber (anbefaling) < tener que (nødvendighet)`,
    },
    {
      id: 'spansk-2-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Hos legen',
      problem: `Skriv en dialog mellom en pasient og en lege.`,
      solution: `**Médica:** Buenos días. ¿Qué le ocurre?\n*(God morgen. Hva er problemet?)*\n\n**Paciente:** Buenos días, doctora. No me encuentro bien. Me duele mucho la garganta y tengo fiebre desde hace dos días.\n*(God morgen, doktor. Jeg føler meg ikke bra. Jeg har veldig vondt i halsen og har hatt feber i to dager.)*\n\n**Médica:** Vamos a ver. Abra la boca, por favor. Diga «aaa».\n*(La oss se. Åpne munnen, vær så snill. Si «aaa».)*\n\n**Médica:** Tiene la garganta muy inflamada. Voy a recetarle un antibiótico.\n*(Halsen Deres er veldig betent. Jeg skal skrive ut en antibiotika.)*\n\n**Paciente:** ¿Tengo que tomar alguna otra cosa?\n*(Må jeg ta noe annet?)*\n\n**Médica:** Sí, debe tomar ibuprofeno para la fiebre. Y tiene que descansar al menos tres días. Hay que beber mucho líquido.\n*(Ja, De bør ta ibuprofen for feberen. Og De må hvile i minst tre dager. Man må drikke mye væske.)*`,
    },
    {
      id: 'spansk-2-12-2-example-2',
      type: 'example',
      title: 'Eksempel 2: På apoteket',
      problem: `Skriv en dialog på apoteket.`,
      solution: `**Cliente:** Buenos días. ¿Tiene algo para el dolor de cabeza?\n*(God morgen. Har dere noe mot hodepine?)*\n\n**Farmacéutica:** Sí, le recomiendo este analgésico. ¿Es alérgico a algún medicamento?\n*(Ja, jeg anbefaler denne smertestillende. Er De allergisk mot noen medisiner?)*\n\n**Cliente:** No, no tengo alergias. ¿Cuántas pastillas tengo que tomar al día?\n*(Nei, jeg har ingen allergier. Hvor mange tabletter må jeg ta om dagen?)*\n\n**Farmacéutica:** Debe tomar una pastilla cada ocho horas, con comida. No debe tomar más de tres al día.\n*(De bør ta én tablett hver åttende time, med mat. De bør ikke ta mer enn tre om dagen.)*\n\n**Cliente:** También necesito una pomada para una quemadura de sol.\n*(Jeg trenger også en salve for solbrenthet.)*\n\n**Farmacéutica:** Aquí tiene esta crema con aloe vera. Hay que aplicarla dos veces al día.\n*(Her er denne kremen med aloe vera. Man må påføre den to ganger om dagen.)*`,
    },
    {
      id: 'spansk-2-12-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket modalt verb uttrykker en generell, upersonlig nødvendighet?',
        options: [
          { id: 'a', text: 'Deber', isCorrect: false },
          { id: 'b', text: 'Tener que', isCorrect: false },
          { id: 'c', text: 'Hay que', isCorrect: true },
          { id: 'd', text: 'Poder', isCorrect: false },
        ],
        solution: 'Riktig svar er **hay que**. "Hay que" er upersonlig (man må) og uttrykker en generell nødvendighet. "Deber" er en anbefaling, "tener que" er personlig nødvendighet, og "poder" uttrykker mulighet.',
      },
    },
    {
      id: 'spansk-2-12-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "la receta" i medisinsk sammenheng?',
        options: [
          { id: 'a', text: 'Oppskrift (matlaging)', isCorrect: false },
          { id: 'b', text: 'Resept (fra legen)', isCorrect: true },
          { id: 'c', text: 'Kvittering', isCorrect: false },
          { id: 'd', text: 'Diagnose', isCorrect: false },
        ],
        solution: 'Riktig svar er **resept (fra legen)**. "La receta" kan bety både oppskrift (i matlaging) og resept (i medisinsk sammenheng). I konteksten "en el médico" betyr det resept.',
      },
    },
    {
      id: 'spansk-2-12-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn med riktig modalt verb: deber, tener que eller hay que.',
        subTasks: [
          { label: 'a', task: '_______ beber mucha agua cuando hace calor. (generelt råd)', solution: 'Hay que' },
          { label: 'b', task: 'Tú _______ tomar esta medicina tres veces al día. (nødvendighet)', solution: 'tienes que' },
          { label: 'c', task: 'Usted no _______ fumar. Es malo para la salud. (anbefaling)', solution: 'debe' },
          { label: 'd', task: 'Nosotros _______ ir al hospital. Es urgente. (sterk nødvendighet)', solution: 'tenemos que' },
        ],
        solution: 'a) Hay que (generelt/upersonlig), b) tienes que (personlig nødvendighet), c) debe (anbefaling), d) tenemos que (sterk nødvendighet).',
      },
    },
    {
      id: 'spansk-2-12-2-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Medisinsk vokabular**: el/la médico/a, la receta, el medicamento, la pastilla, la pomada, la farmacia\n- **Modale verb**: deber (bør), tener que (må), hay que (man må) + infinitiv\n- **Hos legen**: Beskrive symptomer, forstå diagnose og behandling\n- **På apoteket**: Be om medisiner, forstå doseringsanvisninger\n- **Styrkegrad**: hay que (generelt) → deber (anbefaling) → tener que (nødvendighet)`,
    },
    {
      id: 'spansk-2-12-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en dialog (6-8 replikker) der du besøker en lege fordi du har falt og skadet kneet. Bruk medisinsk vokabular og modale verb.',
        solution: 'Eksempel: "Paciente: Buenos días, doctor. Me he caído y me duele mucho la rodilla. Médico: Vamos a examinar la rodilla. ¿Puede doblarla? Paciente: Sí, pero me duele mucho. Médico: No parece fractura, pero tenemos que hacer una radiografía para estar seguros. Tiene que tomar ibuprofeno para el dolor. Paciente: ¿Tengo que guardar reposo? Médico: Sí, debe descansar y no debe hacer deporte durante una semana. Hay que poner hielo en la rodilla tres veces al día."',
      },
    },
    {
      id: 'spansk-2-12-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Legen sier: "Debe tomar una pastilla cada ocho horas con comida." Hva betyr dette?',
        options: [
          { id: 'a', text: 'Du kan ta en tablett når du vil.', isCorrect: false },
          { id: 'b', text: 'Du bør ta en tablett hver åttende time med mat.', isCorrect: true },
          { id: 'c', text: 'Du må ta åtte tabletter om dagen uten mat.', isCorrect: false },
          { id: 'd', text: 'Du bør spise mat hver åttende time.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Du bør ta en tablett hver åttende time med mat**. "Cada ocho horas" = hver åttende time, "con comida" = med mat, "una pastilla" = en tablett.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el/la médico/a', definition: 'legen' },
    { term: 'la receta', definition: 'resepten' },
    { term: 'el medicamento', definition: 'medisinen, legemiddelet' },
    { term: 'la pastilla', definition: 'tabletten' },
    { term: 'la farmacia', definition: 'apoteket' },
    { term: 'deber + infinitiv', definition: 'bør (anbefaling)' },
    { term: 'tener que + infinitiv', definition: 'må (nødvendighet)' },
    { term: 'hay que + infinitiv', definition: 'man må (upersonlig nødvendighet)' },
  ],
};

// ============================================================
// KAPITTEL 12.3: Fitness y nutrición
// ============================================================

export const CHAPTER_SPANSK_2_12_3: TextbookChapter = {
  id: 'spansk-2-12-3',
  courseId: 'spansk-2',
  chapterNumber: '12.3',
  title: 'Fitness y nutrición',
  subtitle: 'Trening og ernæring',
  description: 'Lær vokabular om trening, ernæring og en sunn livsstil på spansk, inkludert komparativer og superlativer for å sammenligne.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Beherske vokabular om trening, sport og ernæring',
    'Kunne bruke komparativer og superlativer på spansk',
    'Kunne diskutere en sunn livsstil på spansk',
  ],
  content: [
    {
      id: 'spansk-2-12-3-intro',
      type: 'text',
      content: `## Fitness y nutrición\n\nEn sunn livsstil med trening og god ernæring er et viktig tema i moderne samfunn. I dette kapittelet lærer du å snakke om trening, matvaner og ernæring på spansk, og du lærer å bruke **komparativer** for å sammenligne.\n\n### Treningsvokabular\n\n| Spansk | Norsk |\n|--------|-------|\n| hacer ejercicio | å trene |\n| el gimnasio | treningsstudioet |\n| correr | å løpe |\n| nadar | å svømme |\n| montar en bicicleta | å sykle |\n| levantar pesas | å løfte vekter |\n| el entrenamiento | treningen |\n| calentar | å varme opp |\n| estirar | å tøye |\n| sudar | å svette |\n| estar en forma | å være i form |\n| ponerse en forma | å komme i form |`,
    },
    {
      id: 'spansk-2-12-3-def-1',
      type: 'definition',
      title: 'Ernæringsvokabular',
      content: `| Spansk | Norsk |\n|--------|-------|\n| la alimentación | ernæringen |\n| la dieta equilibrada | balansert kosthold |\n| las proteínas | proteinene |\n| los carbohidratos | karbohydratene |\n| las grasas | fettene |\n| las vitaminas | vitaminene |\n| la fibra | fiberen |\n| las calorías | kaloriene |\n| los alimentos procesados | bearbeidet mat |\n| los alimentos integrales | fullkornsprodukter |\n| las frutas y verduras | frukt og grønnsaker |\n| los frutos secos | nøtter |\n| adelgazar | å gå ned i vekt |\n| engordar | å legge på seg |`,
    },
    {
      id: 'spansk-2-12-3-def-2',
      type: 'definition',
      title: 'Komparativer og superlativer',
      content: `**Komparativer (sammenligning):**\n\n- **más ... que** (mer ... enn): *Nadar es más relajante que correr.* (Å svømme er mer avslappende enn å løpe.)\n- **menos ... que** (mindre ... enn): *El arroz tiene menos grasa que la pizza.* (Ris har mindre fett enn pizza.)\n- **tan ... como** (like ... som): *El yoga es tan beneficioso como el pilates.* (Yoga er like gunstig som pilates.)\n- **tanto/a/os/as ... como** (like mye/mange ... som): *Como tantas frutas como verduras.* (Jeg spiser like mye frukt som grønnsaker.)\n\n**Uregelmessige komparativer:**\n- bueno → **mejor** (bedre)\n- malo → **peor** (verre)\n- grande → **mayor** (større/eldre)\n- pequeño → **menor** (mindre/yngre)\n\n**Superlativ:**\n- **el/la más ...** (den mest ...): *El deporte más popular es el fútbol.* (Den mest populære sporten er fotball.)\n- **el/la mejor** (den beste): *La mejor dieta es una dieta variada.* (Det beste kostholdet er et variert kosthold.)`,
    },
    {
      id: 'spansk-2-12-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Sammenligne treningsformer',
      problem: `Bruk komparativer til å sammenligne ulike treningsformer.`,
      solution: `- *Correr es **más** intenso **que** caminar.* – Å løpe er mer intenst enn å gå.\n- *Nadar es **menos** agresivo para las articulaciones **que** correr.* – Å svømme er mindre belastende for leddene enn å løpe.\n- *El yoga es **tan** beneficioso **como** el pilates para la flexibilidad.* – Yoga er like gunstig som pilates for fleksibiliteten.\n- *Levantar pesas es **mejor** para ganar músculo **que** hacer cardio.* – Å løfte vekter er bedre for å bygge muskler enn å gjøre kardio.\n- *Hacer ejercicio al aire libre es **más** agradable **que** ir al gimnasio.* – Å trene utendørs er mer behagelig enn å gå på treningsstudio.`,
    },
    {
      id: 'spansk-2-12-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Snakke om kosthold',
      problem: `Hvordan diskuterer vi kosthold og ernæring på spansk?`,
      solution: `**Ernæringsspesialist:** Para tener una dieta equilibrada, hay que comer más frutas y verduras y menos alimentos procesados.\n*(For å ha et balansert kosthold, må man spise mer frukt og grønnsaker og mindre bearbeidet mat.)*\n\n**Cliente:** ¿Qué es mejor, comer tres comidas grandes o cinco pequeñas?\n*(Hva er bedre, å spise tre store måltider eller fem små?)*\n\n**Especialista:** Las cinco comidas pequeñas son mejores para el metabolismo. Y es tan importante beber agua como comer bien.\n*(De fem små måltidene er bedre for metabolismen. Og det er like viktig å drikke vann som å spise godt.)*\n\n**Cliente:** ¿Debo eliminar todos los carbohidratos?\n*(Bør jeg kutte ut alle karbohydratene?)*\n\n**Especialista:** No, los carbohidratos integrales son menos perjudiciales que los refinados. La peor opción es eliminar grupos de alimentos completamente.\n*(Nei, fullkornskarbohydrater er mindre skadelige enn raffinerte. Det verste alternativet er å kutte ut hele matgrupper helt.)*`,
    },
    {
      id: 'spansk-2-12-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den uregelmessige komparativformen av "bueno"?',
        options: [
          { id: 'a', text: 'más bueno', isCorrect: false },
          { id: 'b', text: 'mejor', isCorrect: true },
          { id: 'c', text: 'buenor', isCorrect: false },
          { id: 'd', text: 'el más bueno', isCorrect: false },
        ],
        solution: 'Riktig svar er **mejor**. "Bueno" (god) har den uregelmessige komparativformen "mejor" (bedre). Man sier aldri "más bueno" i standard spansk (unntatt i betydningen «snillere»).',
      },
    },
    {
      id: 'spansk-2-12-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning bruker komparativ korrekt?',
        options: [
          { id: 'a', text: 'Nadar es tan relajante como correr.', isCorrect: false },
          { id: 'b', text: 'Nadar es más relajante que correr.', isCorrect: true },
          { id: 'c', text: 'Nadar es más relajante como correr.', isCorrect: false },
          { id: 'd', text: 'Nadar es tan relajante que correr.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Nadar es más relajante que correr** (Å svømme er mer avslappende enn å løpe). Strukturen er "más + adjektiv + que". Alternativ a) er også grammatisk korrekt, men betyr "like avslappende som" (likhet, ikke sammenligning).',
      },
    },
    {
      id: 'spansk-2-12-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag sammenligninger med de oppgitte ordene. Bruk más...que, menos...que eller tan...como.',
        subTasks: [
          { label: 'a', task: 'el fútbol / el tenis / popular', solution: 'El fútbol es más popular que el tenis.' },
          { label: 'b', task: 'las frutas / los dulces / saludable', solution: 'Las frutas son más saludables que los dulces.' },
          { label: 'c', task: 'el yoga / la meditación / relajante', solution: 'El yoga es tan relajante como la meditación.' },
          { label: 'd', task: 'la comida rápida / la comida casera / nutritivo', solution: 'La comida rápida es menos nutritiva que la comida casera.' },
        ],
        solution: 'a) El fútbol es más popular que el tenis. b) Las frutas son más saludables que los dulces. c) El yoga es tan relajante como la meditación. d) La comida rápida es menos nutritiva que la comida casera.',
      },
    },
    {
      id: 'spansk-2-12-3-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Treningsvokabular**: hacer ejercicio, el gimnasio, correr, nadar, levantar pesas, estar en forma\n- **Ernæringsvokabular**: la dieta equilibrada, las proteínas, los carbohidratos, las vitaminas\n- **Komparativer**: más...que, menos...que, tan...como, tanto/a...como\n- **Uregelmessige komparativer**: mejor (bedre), peor (verre), mayor (større), menor (mindre)\n- **Superlativ**: el/la más..., el/la mejor, el/la peor`,
    },
    {
      id: 'spansk-2-12-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst (6-8 setninger) om din treningsrutine og ditt kosthold. Bruk minst 3 komparativer og vokabular fra kapittelet.',
        solution: 'Eksempel: "Hago ejercicio tres veces a la semana. Prefiero correr porque es más divertido que ir al gimnasio. Creo que nadar es mejor para la espalda que levantar pesas. Mi dieta no es perfecta, pero intento comer más frutas y verduras que comida procesada. Bebo tanta agua como zumo de naranja. El peor hábito que tengo es comer chocolate por la noche. Me gustaría estar más en forma, así que voy a hacer más ejercicio este año."',
      },
    },
    {
      id: 'spansk-2-12-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr "La peor opción es eliminar grupos de alimentos completamente"?',
        options: [
          { id: 'a', text: 'Det beste alternativet er å kutte ut matgrupper helt.', isCorrect: false },
          { id: 'b', text: 'Det verste alternativet er å kutte ut matgrupper helt.', isCorrect: true },
          { id: 'c', text: 'Det minste alternativet er å legge til matgrupper.', isCorrect: false },
          { id: 'd', text: 'Det vanskeligste er å spise alle matgrupper.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Det verste alternativet er å kutte ut matgrupper helt**. "La peor" er superlativ av "malo" (dårlig) og betyr "det verste". "Eliminar" betyr å kutte ut/eliminere.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'hacer ejercicio', definition: 'å trene' },
    { term: 'el gimnasio', definition: 'treningsstudioet' },
    { term: 'la dieta equilibrada', definition: 'balansert kosthold' },
    { term: 'más ... que', definition: 'mer ... enn (komparativ)' },
    { term: 'menos ... que', definition: 'mindre ... enn (komparativ)' },
    { term: 'tan ... como', definition: 'like ... som (likhet)' },
    { term: 'mejor / peor', definition: 'bedre / verre (uregelmessige komparativer)' },
  ],
};

// ============================================================
// KAPITTEL 12.4: Salud mental y bienestar
// ============================================================

export const CHAPTER_SPANSK_2_12_4: TextbookChapter = {
  id: 'spansk-2-12-4',
  courseId: 'spansk-2',
  chapterNumber: '12.4',
  title: 'Salud mental y bienestar',
  subtitle: 'Mental helse og velvære',
  description: 'Lær å snakke om mental helse, følelser og velvære på spansk, med fokus på refleksive verb for daglige rutiner og selvpleie.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne snakke om mental helse og følelser på spansk',
    'Beherske refleksive verb for daglige rutiner og selvpleie',
    'Kunne uttrykke råd om mental helse og velvære',
  ],
  content: [
    {
      id: 'spansk-2-12-4-intro',
      type: 'text',
      content: `## Salud mental y bienestar\n\nMental helse er like viktig som fysisk helse. I dette kapittelet lærer du å snakke om følelser, stress og velvære på spansk, og du fordyper deg i **refleksive verb** – verb der handlingen vender tilbake til subjektet.\n\n### Vokabular: Følelser og mental helse\n\n| Spansk | Norsk |\n|--------|-------|\n| el bienestar | velværet |\n| la salud mental | den mentale helsen |\n| el estrés | stresset |\n| la ansiedad | angsten |\n| la depresión | depresjonen |\n| el agotamiento | utmattelsen |\n| la autoestima | selvfølelsen |\n| el estado de ánimo | humøret, sinnsstemningen |\n| sentirse bien/mal | å føle seg bra/dårlig |\n| estar agotado/a | å være utmattet |\n| estar estresado/a | å være stresset |\n| relajarse | å slappe av |\n| desconectar | å koble av |`,
    },
    {
      id: 'spansk-2-12-4-def-1',
      type: 'definition',
      title: 'Refleksive verb (Los verbos reflexivos)',
      content: `**Refleksive verb** er verb der subjektet utfører handlingen på seg selv. De kjennetegnes av pronomenet **-se** i infinitiv.\n\n**Refleksive pronomen:**\n| Person | Pronomen | Eksempel (levantarse) |\n|--------|----------|----------------------|\n| yo | me | me levanto |\n| tú | te | te levantas |\n| él/ella/usted | se | se levanta |\n| nosotros | nos | nos levantamos |\n| vosotros | os | os levantáis |\n| ellos/ustedes | se | se levantan |\n\n**Viktige refleksive verb for velvære:**\n- *sentirse* – å føle seg\n- *relajarse* – å slappe av\n- *cuidarse* – å ta vare på seg selv\n- *despertarse* – å våkne\n- *acostarse* – å legge seg\n- *ducharse* – å dusje\n- *preocuparse* – å bekymre seg\n- *concentrarse* – å konsentrere seg\n- *animarse* – å oppmuntre seg selv`,
    },
    {
      id: 'spansk-2-12-4-def-2',
      type: 'definition',
      title: 'Uttrykk for følelser og sinnstilstander',
      content: `**Estar + adjektiv** (midlertidig tilstand):\n- *Estoy contento/a* – Jeg er glad\n- *Estoy triste* – Jeg er trist\n- *Estoy nervioso/a* – Jeg er nervøs\n- *Estoy preocupado/a* – Jeg er bekymret\n- *Estoy agotado/a* – Jeg er utmattet\n\n**Sentirse + adjektiv** (å føle seg):\n- *Me siento solo/a* – Jeg føler meg ensom\n- *Me siento motivado/a* – Jeg føler meg motivert\n- *Me siento agobiado/a* – Jeg føler meg overveldet\n\n**Ponerse + adjektiv** (å bli – følelsesendring):\n- *Me pongo nervioso/a cuando...* – Jeg blir nervøs når...\n- *Se pone triste si...* – Han/hun blir trist hvis...`,
    },
    {
      id: 'spansk-2-12-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Daglige rutiner med refleksive verb',
      problem: `Beskriv en daglig rutine med fokus på velvære ved bruk av refleksive verb.`,
      solution: `**Mi rutina de bienestar:**\n\n*Cada mañana **me despierto** a las siete. Primero **me estiro** en la cama durante unos minutos. Luego **me levanto** y **me ducho** con agua fría para activarme. Después de desayunar, **me concentro** en mis estudios durante dos horas.*\n\n*Por la tarde, **me relajo** leyendo un libro o paseando por el parque. Intento no **preocuparme** demasiado por las cosas que no puedo controlar.*\n\n*Por la noche, **me acuesto** temprano para dormir al menos ocho horas. Antes de dormir, **me desconecto** del móvil y **me dedico** a actividades tranquilas.*\n\nLegg merke til at det refleksive pronomenet (me, te, se...) alltid står foran det bøyde verbet.`,
    },
    {
      id: 'spansk-2-12-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Råd om mental helse',
      problem: `Gi råd om hvordan man kan ta vare på den mentale helsen.`,
      solution: `**Consejos para cuidar la salud mental:**\n\n1. *Debes **cuidarte** y dedicar tiempo a ti mismo/a.* – Du bør ta vare på deg selv og gi tid til deg selv.\n2. *Es importante **relajarse** después del trabajo.* – Det er viktig å slappe av etter jobb.\n3. *No deberías **preocuparte** por cosas que no puedes cambiar.* – Du burde ikke bekymre deg for ting du ikke kan endre.\n4. *Hay que **expresarse** y hablar de los sentimientos.* – Man må uttrykke seg og snakke om følelsene sine.\n5. *Si te sientes agotado/a, tienes que **descansar**.* – Hvis du føler deg utmattet, må du hvile.\n6. *Intenta **acostarte** temprano y **despertarte** a la misma hora cada día.* – Prøv å legge deg tidlig og våkne til samme tid hver dag.`,
    },
    {
      id: 'spansk-2-12-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket refleksivt pronomen brukes med "nosotros"?',
        options: [
          { id: 'a', text: 'me', isCorrect: false },
          { id: 'b', text: 'se', isCorrect: false },
          { id: 'c', text: 'nos', isCorrect: true },
          { id: 'd', text: 'os', isCorrect: false },
        ],
        solution: 'Riktig svar er **nos**. Refleksive pronomen: yo = me, tú = te, él/ella/usted = se, nosotros = nos, vosotros = os, ellos/ustedes = se.',
      },
    },
    {
      id: 'spansk-2-12-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "Me siento agobiado"?',
        options: [
          { id: 'a', text: 'Jeg føler meg glad.', isCorrect: false },
          { id: 'b', text: 'Jeg føler meg overveldet.', isCorrect: true },
          { id: 'c', text: 'Jeg setter meg ned.', isCorrect: false },
          { id: 'd', text: 'Jeg føler meg sulten.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Jeg føler meg overveldet**. "Sentirse" er et refleksivt verb som betyr "å føle seg", og "agobiado" betyr overveldet/tynget. Merk: "me siento" (jeg føler meg) og "me siento" (jeg setter meg) er samme form, men konteksten avgjør betydningen.',
      },
    },
    {
      id: 'spansk-2-12-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy de refleksive verbene i presens for den angitte personen.',
        subTasks: [
          { label: 'a', task: 'yo / despertarse', solution: 'me despierto' },
          { label: 'b', task: 'tú / relajarse', solution: 'te relajas' },
          { label: 'c', task: 'ella / sentirse bien', solution: 'se siente bien' },
          { label: 'd', task: 'nosotros / preocuparse', solution: 'nos preocupamos' },
          { label: 'e', task: 'ellos / acostarse temprano', solution: 'se acuestan temprano' },
        ],
        solution: 'a) me despierto (stammeendring e→ie), b) te relajas, c) se siente bien (stammeendring e→ie), d) nos preocupamos, e) se acuestan temprano (stammeendring o→ue).',
      },
    },
    {
      id: 'spansk-2-12-4-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Vokabular for mental helse**: el bienestar, el estrés, la ansiedad, la autoestima, el estado de ánimo\n- **Refleksive verb**: sentirse, relajarse, cuidarse, preocuparse, despertarse, acostarse\n- **Refleksive pronomen**: me, te, se, nos, os, se\n- **Følelsesuttrykk**: estar + adjektiv, sentirse + adjektiv, ponerse + adjektiv\n- **Råd om velvære**: Bruk av modale verb + refleksive infinitiver (Debes cuidarte, Hay que relajarse)`,
    },
    {
      id: 'spansk-2-12-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv 5 råd om mental helse ved hjelp av refleksive verb og modale verb. Bruk varierte strukturer (debes, hay que, es importante, tienes que).',
        solution: 'Eksempel: "1) Debes relajarte al menos 30 minutos cada día. 2) Es importante cuidarse y no trabajar demasiado. 3) Hay que desconectarse del móvil antes de acostarse. 4) Tienes que expresarte y hablar con alguien si te sientes mal. 5) No deberías preocuparte por cosas que no puedes controlar."',
      },
    },
    {
      id: 'spansk-2-12-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-12-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning bruker et refleksivt verb korrekt?',
        options: [
          { id: 'a', text: 'Yo me preocupo demasiado por los exámenes.', isCorrect: true },
          { id: 'b', text: 'Yo preocupo demasiado por los exámenes.', isCorrect: false },
          { id: 'c', text: 'Yo se preocupo demasiado por los exámenes.', isCorrect: false },
          { id: 'd', text: 'Yo me preocupar demasiado por los exámenes.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Yo me preocupo demasiado por los exámenes** (Jeg bekymrer meg for mye for eksamenene). Det refleksive pronomenet "me" (for yo) står foran det bøyde verbet "preocupo".',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el bienestar', definition: 'velværet' },
    { term: 'la salud mental', definition: 'den mentale helsen' },
    { term: 'el estrés', definition: 'stresset' },
    { term: 'la autoestima', definition: 'selvfølelsen' },
    { term: 'sentirse', definition: 'å føle seg (refleksivt verb)' },
    { term: 'relajarse', definition: 'å slappe av (refleksivt verb)' },
    { term: 'preocuparse', definition: 'å bekymre seg (refleksivt verb)' },
    { term: 'cuidarse', definition: 'å ta vare på seg selv (refleksivt verb)' },
  ],
};

// ============================================================
// KAPITTEL 13.1: Internet y redes sociales
// ============================================================

export const CHAPTER_SPANSK_2_13_1: TextbookChapter = {
  id: 'spansk-2-13-1',
  courseId: 'spansk-2',
  chapterNumber: '13.1',
  title: 'Internet y redes sociales',
  subtitle: 'Internett og sosiale medier',
  description: 'Lær vokabular om internett og sosiale medier på spansk, og bruk subjuntivo for å uttrykke meninger og følelser om digital kommunikasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Beherske vokabular om internett og sosiale medier på spansk',
    'Kunne diskutere fordeler og ulemper med sosiale medier',
    'Bruke subjuntivo etter uttrykk for mening og følelse i kontekst av teknologi',
  ],
  content: [
    {
      id: 'spansk-2-13-1-intro',
      type: 'text',
      content: `## Internet y redes sociales\n\nInternett og sosiale medier er en uunngåelig del av hverdagen vår. I dette kapittelet lærer du å snakke om nettbruk, sosiale plattformer og digital kommunikasjon på spansk. Du lærer også å bruke **subjuntivo** etter uttrykk som uttrykker meninger, følelser og ønsker – noe som er svært vanlig når man diskuterer teknologi og samfunn.\n\n### Vokabular: Internett og sosiale medier\n\n| Spansk | Norsk |\n|--------|-------|\n| el Internet / la red | internett / nettet |\n| la página web | nettsiden |\n| el sitio web | nettstedet |\n| el navegador | nettleseren |\n| el buscador | søkemotoren |\n| la red social | det sosiale mediet |\n| el perfil | profilen |\n| la publicación | innlegget |\n| el seguidor | følgeren |\n| dar \"me gusta\" | å like (trykke liker) |\n| compartir | å dele |\n| comentar | å kommentere |\n| seguir (a alguien) | å følge (noen) |\n| la cuenta | kontoen |`,
    },
    {
      id: 'spansk-2-13-1-def-1',
      type: 'definition',
      title: 'Mer vokabular: Nettaktiviteter',
      content: `| Spansk | Norsk |\n|--------|-------|\n| navegar por Internet | å surfe på nettet |\n| buscar información | å søke etter informasjon |\n| descargar | å laste ned |\n| subir (una foto/un video) | å laste opp (et bilde/en video) |\n| iniciar sesión | å logge inn |\n| cerrar sesión | å logge ut |\n| la contraseña | passordet |\n| el nombre de usuario | brukernavnet |\n| el enlace / el vínculo | lenken |\n| el hashtag / la etiqueta | emneknaggen |\n| hacerse viral | å gå viralt |\n| el contenido | innholdet |\n| el algoritmo | algoritmen |\n| las notificaciones | varslene |`,
    },
    {
      id: 'spansk-2-13-1-def-2',
      type: 'definition',
      title: 'Subjuntivo etter menings- og følelsesuttrykk',
      content: `**El subjuntivo** brukes etter verb og uttrykk som uttrykker meninger, følelser, ønsker og tvil. Dette er svært relevant når man diskuterer teknologi og sosiale medier.\n\n**Struktur:** Uttrykk + **que** + subjuntivo\n\n**Uttrykk som krever subjuntivo:**\n- *Es importante que...* – Det er viktig at...\n- *Es necesario que...* – Det er nødvendig at...\n- *Es bueno/malo que...* – Det er bra/dårlig at...\n- *Me preocupa que...* – Det bekymrer meg at...\n- *No creo que...* – Jeg tror ikke at...\n- *Espero que...* – Jeg håper at...\n- *Quiero que...* – Jeg vil at...\n\n**Presens subjuntivo (regelmessige verb):**\n| | -ar (hablar) | -er (comer) | -ir (vivir) |\n|---|---|---|---|\n| yo | hable | coma | viva |\n| tú | hables | comas | vivas |\n| él/ella | hable | coma | viva |\n| nosotros | hablemos | comamos | vivamos |\n| ellos | hablen | coman | vivan |\n\nMerk: -ar-verb får -e-endelser, -er/-ir-verb får -a-endelser (motsatt av indikativ).`,
    },
    {
      id: 'spansk-2-13-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Meninger om sosiale medier',
      problem: `Uttrykk meninger om sosiale medier ved hjelp av subjuntivo.`,
      solution: `- *Es importante que los jóvenes **usen** las redes sociales con responsabilidad.* – Det er viktig at unge bruker sosiale medier med ansvar.\n- *Me preocupa que muchas personas **compartan** información personal en Internet.* – Det bekymrer meg at mange deler personlig informasjon på nettet.\n- *No creo que las redes sociales **sean** completamente negativas.* – Jeg tror ikke at sosiale medier er helt negative.\n- *Espero que las plataformas **protejan** mejor la privacidad de los usuarios.* – Jeg håper at plattformene beskytter brukernes privatliv bedre.\n- *Es necesario que todos **aprendan** a identificar noticias falsas.* – Det er nødvendig at alle lærer å identifisere falske nyheter.`,
    },
    {
      id: 'spansk-2-13-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Diskusjon om skjermtid',
      problem: `Les en dialog om skjermtid og sosiale medier.`,
      solution: `**Ana:** ¿Cuántas horas al día pasas en las redes sociales?\n*(Hvor mange timer om dagen bruker du på sosiale medier?)*\n\n**Carlos:** Creo que unas tres horas. Sé que es demasiado, pero es difícil desconectar.\n*(Jeg tror rundt tre timer. Jeg vet det er for mye, men det er vanskelig å koble fra.)*\n\n**Ana:** Es importante que **controlemos** el tiempo que pasamos en el móvil. Yo he desactivado las notificaciones.\n*(Det er viktig at vi kontrollerer tiden vi bruker på mobilen. Jeg har slått av varslene.)*\n\n**Carlos:** Buena idea. Me preocupa que las redes sociales **afecten** mi concentración. No creo que **sea** sano mirar el móvil antes de dormir.\n*(God idé. Jeg er bekymret for at sosiale medier påvirker konsentrasjonen min. Jeg tror ikke det er sunt å se på mobilen før man sover.)*\n\n**Ana:** Estoy de acuerdo. Espero que más personas **tomen** conciencia de este problema.\n*(Jeg er enig. Jeg håper at flere blir bevisste på dette problemet.)*`,
    },
    {
      id: 'spansk-2-13-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "dar me gusta" på norsk?',
        options: [
          { id: 'a', text: 'Å dele et innlegg', isCorrect: false },
          { id: 'b', text: 'Å like (trykke liker)', isCorrect: true },
          { id: 'c', text: 'Å kommentere', isCorrect: false },
          { id: 'd', text: 'Å følge noen', isCorrect: false },
        ],
        solution: 'Riktig svar er **Å like (trykke liker)**. "Dar me gusta" er det spanske uttrykket for å trykke «liker» på sosiale medier. "Me gusta" betyr bokstavelig "det liker meg" / "jeg liker".',
      },
    },
    {
      id: 'spansk-2-13-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning bruker subjuntivo korrekt?',
        options: [
          { id: 'a', text: 'Es importante que usas las redes con cuidado.', isCorrect: false },
          { id: 'b', text: 'Es importante que uses las redes con cuidado.', isCorrect: true },
          { id: 'c', text: 'Es importante que usar las redes con cuidado.', isCorrect: false },
          { id: 'd', text: 'Es importante que usarás las redes con cuidado.', isCorrect: false },
        ],
        solution: 'Riktig svar er **Es importante que uses las redes con cuidado** (Det er viktig at du bruker sosiale medier forsiktig). Etter "Es importante que" kreves subjuntivo: "uses" (ikke indikativ "usas").',
      },
    },
    {
      id: 'spansk-2-13-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfør setningene med riktig form av verbet i subjuntivo.',
        subTasks: [
          { label: 'a', task: 'Es necesario que (tú / proteger) tu contraseña.', solution: 'Es necesario que protejas tu contraseña.' },
          { label: 'b', task: 'Me preocupa que los niños (pasar) demasiado tiempo en línea.', solution: 'Me preocupa que los niños pasen demasiado tiempo en línea.' },
          { label: 'c', task: 'No creo que las redes sociales (ser) siempre negativas.', solution: 'No creo que las redes sociales sean siempre negativas.' },
          { label: 'd', task: 'Espero que la plataforma (mejorar) su política de privacidad.', solution: 'Espero que la plataforma mejore su política de privacidad.' },
        ],
        solution: 'a) protejas (proteger → protej- + -as), b) pasen (pasar → pas- + -en), c) sean (ser – uregelmessig i subjuntivo), d) mejore (mejorar → mejor- + -e).',
      },
    },
    {
      id: 'spansk-2-13-1-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Internettvokabular**: la página web, el navegador, el buscador, descargar, subir, iniciar sesión\n- **Sosiale medier**: la red social, el perfil, la publicación, el seguidor, dar me gusta, compartir\n- **Subjuntivo etter meningsuttrykk**: Es importante que + subjuntivo, Me preocupa que + subjuntivo\n- **Presens subjuntivo**: -ar-verb får -e-endelser, -er/-ir-verb får -a-endelser\n- **Diskutere fordeler og ulemper**: Uttrykke meninger om teknologi og sosiale medier`,
    },
    {
      id: 'spansk-2-13-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv 4 setninger der du uttrykker meninger om sosiale medier. Bruk subjuntivo etter uttrykkene: Es bueno que..., Es malo que..., Me preocupa que..., Espero que...',
        solution: 'Eksempel: "Es bueno que las redes sociales nos permitan comunicarnos con personas de todo el mundo. Es malo que muchos jóvenes pasen demasiadas horas mirando el móvil. Me preocupa que algunas personas compartan información personal sin pensar en las consecuencias. Espero que en el futuro haya mejores leyes para proteger la privacidad en Internet."',
      },
    },
    {
      id: 'spansk-2-13-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr "hacerse viral"?',
        options: [
          { id: 'a', text: 'Å bli syk av et virus', isCorrect: false },
          { id: 'b', text: 'Å slette en konto', isCorrect: false },
          { id: 'c', text: 'Å gå viralt (spres raskt på nettet)', isCorrect: true },
          { id: 'd', text: 'Å laste ned et program', isCorrect: false },
        ],
        solution: 'Riktig svar er **Å gå viralt (spres raskt på nettet)**. "Hacerse viral" betyr at noe sprer seg raskt på internett og sosiale medier, akkurat som på norsk.',
      },
    },
    {
      id: 'spansk-2-13-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (8-10 setninger) om ditt forhold til sosiale medier. Inkluder hvilke plattformer du bruker, hva du gjør der, og hva du synes om skjermtid. Bruk minst 3 subjuntivo-setninger.',
        solution: 'Eksempel: "Uso las redes sociales todos los días. Mis plataformas favoritas son Instagram y TikTok. Normalmente miro publicaciones de mis amigos y comparto fotos de mi vida cotidiana. Creo que es importante que controlemos el tiempo que pasamos en línea. Me preocupa que las redes sociales afecten nuestra autoestima, especialmente entre los jóvenes. Es bueno que podamos comunicarnos con personas de otros países. Sin embargo, espero que las empresas tecnológicas hagan más para proteger a los usuarios. Intento no mirar el móvil antes de acostarme."',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la red social', definition: 'det sosiale mediet' },
    { term: 'el perfil', definition: 'profilen' },
    { term: 'la publicación', definition: 'innlegget (på sosiale medier)' },
    { term: 'compartir', definition: 'å dele' },
    { term: 'el seguidor', definition: 'følgeren' },
    { term: 'navegar por Internet', definition: 'å surfe på nettet' },
    { term: 'la contraseña', definition: 'passordet' },
    { term: 'hacerse viral', definition: 'å gå viralt' },
  ],
};

// ============================================================
// KAPITTEL 13.2: Dispositivos y aplicaciones
// ============================================================

export const CHAPTER_SPANSK_2_13_2: TextbookChapter = {
  id: 'spansk-2-13-2',
  courseId: 'spansk-2',
  chapterNumber: '13.2',
  title: 'Dispositivos y aplicaciones',
  subtitle: 'Tekniske enheter og apper',
  description: 'Lær vokabular om tekniske enheter, apper og programvare på spansk, inkludert imperativ for å gi instruksjoner om teknologibruk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Beherske vokabular om tekniske enheter og programvare',
    'Kunne beskrive og sammenligne ulike teknologiske produkter',
    'Bruke imperativ (bydeform) for å gi instruksjoner om teknologibruk',
  ],
  content: [
    {
      id: 'spansk-2-13-2-intro',
      type: 'text',
      content: `## Dispositivos y aplicaciones\n\nTeknologiske enheter og apper er blitt uunnværlige verktøy i hverdagen. I dette kapittelet lærer du å snakke om mobiltelefoner, datamaskiner, apper og programvare på spansk. Du lærer også å bruke **imperativ** (el imperativo) for å gi instruksjoner og veiledninger – nyttig når du skal forklare hvordan man bruker teknologi.\n\n### Vokabular: Enheter og utstyr\n\n| Spansk | Norsk |\n|--------|-------|\n| el dispositivo | enheten |\n| el teléfono móvil / el celular | mobiltelefonen |\n| el ordenador / la computadora | datamaskinen |\n| el portátil | den bærbare datamaskinen |\n| la tableta | nettbrettet |\n| los auriculares | hodetelefonene |\n| el altavoz inteligente | den smarte høyttaleren |\n| el reloj inteligente | smartklokken |\n| la pantalla | skjermen |\n| el teclado | tastaturet |\n| el ratón | datamusen |\n| el cargador | laderen |\n| la batería | batteriet |\n| el disco duro | harddisken |`,
    },
    {
      id: 'spansk-2-13-2-def-1',
      type: 'definition',
      title: 'Vokabular: Apper og programvare',
      content: `| Spansk | Norsk |\n|--------|-------|\n| la aplicación (la app) | appen |\n| el programa / el software | programmet / programvaren |\n| el sistema operativo | operativsystemet |\n| la actualización | oppdateringen |\n| instalar | å installere |\n| desinstalar | å avinstallere |\n| actualizar | å oppdatere |\n| configurar | å konfigurere / stille inn |\n| el almacenamiento | lagringen |\n| la nube | skyen (nettsky) |\n| guardar | å lagre |\n| copiar | å kopiere |\n| pegar | å lime inn |\n| el archivo | filen |\n| la carpeta | mappen |`,
    },
    {
      id: 'spansk-2-13-2-def-2',
      type: 'definition',
      title: 'El imperativo (bydeformen)',
      content: `**El imperativo** brukes for å gi instruksjoner, råd og kommandoer. Det finnes både bekreftende (afirmativo) og nektende (negativo) imperativ.\n\n**Bekreftende imperativ (tú):**\n| Infinitiv | Imperativ (tú) | Eksempel |\n|-----------|----------------|----------|\n| instalar | instala | ¡Instala la app! |\n| abrir | abre | ¡Abre el archivo! |\n| escribir | escribe | ¡Escribe tu contraseña! |\n\n**Uregelmessige (tú):** hacer → haz, poner → pon, salir → sal, tener → ten, venir → ven, decir → di, ir → ve, ser → sé\n\n**Nektende imperativ (tú):** Bruk subjuntivo!\n| Infinitiv | Negativ imperativ (tú) | Eksempel |\n|-----------|------------------------|----------|\n| instalar | no instales | ¡No instales programas desconocidos! |\n| abrir | no abras | ¡No abras archivos sospechosos! |\n| escribir | no escribas | ¡No escribas tu contraseña aquí! |\n\n**Imperativ (usted) – formelt:** Bruk alltid subjuntivo.\n- *Instale la aplicación.* – Installer appen.\n- *No abra archivos desconocidos.* – Ikke åpne ukjente filer.`,
    },
    {
      id: 'spansk-2-13-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Instruksjoner for appinstallasjon',
      problem: `Gi trinnvise instruksjoner for å installere en app med imperativ.`,
      solution: `**Instrucciones para instalar una aplicación:**\n\n1. *Primero, **abre** la tienda de aplicaciones en tu móvil.* – Først, åpne appbutikken på mobilen din.\n2. ***Busca** el nombre de la aplicación en el buscador.* – Søk etter navnet på appen i søkemotoren.\n3. ***Haz** clic en el botón \"Instalar\".* – Klikk på «Installer»-knappen.\n4. ***Espera** a que se descargue el archivo.* – Vent til filen lastes ned.\n5. ***Abre** la aplicación cuando termine la instalación.* – Åpne appen når installasjonen er ferdig.\n6. ***Crea** una cuenta o **inicia** sesión con tu correo electrónico.* – Opprett en konto eller logg inn med e-posten din.\n7. ***Configura** tus preferencias y notificaciones.* – Still inn dine preferanser og varsler.\n\n**Advarsler (negativ imperativ):**\n- *¡**No descargues** aplicaciones de fuentes no oficiales!* – Ikke last ned apper fra uoffisielle kilder!\n- *¡**No compartas** tu contraseña con nadie!* – Ikke del passordet ditt med noen!`,
    },
    {
      id: 'spansk-2-13-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne enheter',
      problem: `Les en samtale om å velge en ny datamaskin.`,
      solution: `**Vendedor:** ¡Buenos días! ¿En qué puedo ayudarle?\n*(God dag! Hva kan jeg hjelpe deg med?)*\n\n**Cliente:** Necesito un ordenador portátil nuevo. ¿Cuál me recomienda?\n*(Jeg trenger en ny bærbar datamaskin. Hvilken anbefaler du?)*\n\n**Vendedor:** Este modelo tiene una pantalla de 15 pulgadas y 16 GB de memoria. Es más rápido que el modelo anterior.\n*(Denne modellen har en 15-tommers skjerm og 16 GB minne. Den er raskere enn den forrige modellen.)*\n\n**Cliente:** ¿Y la batería? Es importante que **dure** muchas horas.\n*(Og batteriet? Det er viktig at det varer mange timer.)*\n\n**Vendedor:** La batería dura hasta 12 horas. **Mire**, también tiene un disco duro de 512 GB y se puede ampliar el almacenamiento con la nube.\n*(Batteriet varer opptil 12 timer. Se, den har også en harddisk på 512 GB og man kan utvide lagringen med skyen.)*\n\n**Cliente:** Perfecto. **Dígame** el precio, por favor.\n*(Perfekt. Si meg prisen, takk.)*`,
    },
    {
      id: 'spansk-2-13-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "el portátil" på norsk?',
        options: [
          { id: 'a', text: 'Nettbrettet', isCorrect: false },
          { id: 'b', text: 'Den bærbare datamaskinen', isCorrect: true },
          { id: 'c', text: 'Mobiltelefonen', isCorrect: false },
          { id: 'd', text: 'Smartklokken', isCorrect: false },
        ],
        solution: 'Riktig svar er **Den bærbare datamaskinen**. "El portátil" kommer av "portátil" (bærbar) og refererer til en bærbar PC/laptop. "El ordenador portátil" er den fullstendige formen.',
      },
    },
    {
      id: 'spansk-2-13-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den korrekte bekreftende imperativformen av "hacer" for "tú"?',
        options: [
          { id: 'a', text: 'hace', isCorrect: false },
          { id: 'b', text: 'hagas', isCorrect: false },
          { id: 'c', text: 'haz', isCorrect: true },
          { id: 'd', text: 'haces', isCorrect: false },
        ],
        solution: 'Riktig svar er **haz**. "Hacer" har uregelmessig imperativ for "tú": haz. Eksempel: "¡Haz clic aquí!" (Klikk her!).',
      },
    },
    {
      id: 'spansk-2-13-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv instruksjoner (imperativ, tú) for å gjøre følgende:',
        subTasks: [
          { label: 'a', task: 'Slå på datamaskinen (encender el ordenador)', solution: '¡Enciende el ordenador!' },
          { label: 'b', task: 'Åpne nettleseren (abrir el navegador)', solution: '¡Abre el navegador!' },
          { label: 'c', task: 'Lagre filen (guardar el archivo)', solution: '¡Guarda el archivo!' },
          { label: 'd', task: 'Ikke slett mappen (no borrar la carpeta)', solution: '¡No borres la carpeta!' },
          { label: 'e', task: 'Oppdater programvaren (actualizar el software)', solution: '¡Actualiza el software!' },
        ],
        solution: 'a) ¡Enciende el ordenador! (stammeendring e→ie), b) ¡Abre el navegador!, c) ¡Guarda el archivo!, d) ¡No borres la carpeta! (negativ imperativ = subjuntivo), e) ¡Actualiza el software!',
      },
    },
    {
      id: 'spansk-2-13-2-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Enhetsvokabular**: el dispositivo, el portátil, la tableta, la pantalla, el teclado, la batería\n- **App- og programvarevokabular**: la aplicación, instalar, actualizar, la nube, el archivo, la carpeta\n- **Bekreftende imperativ (tú)**: Vanligvis lik 3. person entall presens (instala, abre, escribe)\n- **Uregelmessige imperativer**: haz, pon, sal, ten, ven, di, ve, sé\n- **Nektende imperativ (tú)**: Bruk subjuntivo (no instales, no abras, no escribas)\n- **Formell imperativ (usted)**: Alltid subjuntivo (instale, abra, escriba)`,
    },
    {
      id: 'spansk-2-13-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett de følgende instruksjonene til spansk. Bruk imperativ (tú-formen).',
        subTasks: [
          { label: 'a', task: 'Lad ned appen fra appbutikken.', solution: 'Descarga la aplicación de la tienda de aplicaciones.' },
          { label: 'b', task: 'Ikke del passordet ditt med noen.', solution: 'No compartas tu contraseña con nadie.' },
          { label: 'c', task: 'Lagre dokumentet i skyen.', solution: 'Guarda el documento en la nube.' },
        ],
        solution: 'a) Descarga la aplicación de la tienda de aplicaciones. b) No compartas tu contraseña con nadie. (negativ imperativ med subjuntivo) c) Guarda el documento en la nube.',
      },
    },
    {
      id: 'spansk-2-13-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken nektende imperativform er korrekt for "tú / abrir"?',
        options: [
          { id: 'a', text: 'No abre', isCorrect: false },
          { id: 'b', text: 'No abres', isCorrect: false },
          { id: 'c', text: 'No abras', isCorrect: true },
          { id: 'd', text: 'No abrir', isCorrect: false },
        ],
        solution: 'Riktig svar er **No abras**. Nektende imperativ for "tú" dannes med subjuntivo: abrir → abra- → no abras. Man bruker aldri indikativformer i nektende imperativ.',
      },
    },
    {
      id: 'spansk-2-13-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en bruksanvisning (6-8 setninger) for en ny smarttelefon. Bruk imperativ (usted-formen for formelle instruksjoner) og vokabular fra kapittelet.',
        solution: 'Eksempel: "Estimado usuario, siga estas instrucciones para configurar su nuevo teléfono. Primero, encienda el dispositivo con el botón lateral. Conecte el cargador si la batería está baja. Seleccione su idioma y conéctese a una red wifi. Inicie sesión con su cuenta o cree una nueva. Instale las aplicaciones que necesite desde la tienda de aplicaciones. No descargue aplicaciones de fuentes desconocidas. Guarde sus documentos importantes en la nube para no perderlos."',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el dispositivo', definition: 'enheten' },
    { term: 'el portátil', definition: 'den bærbare datamaskinen' },
    { term: 'la aplicación', definition: 'appen' },
    { term: 'la nube', definition: 'skyen (nettsky)' },
    { term: 'instalar', definition: 'å installere' },
    { term: 'actualizar', definition: 'å oppdatere' },
    { term: 'el archivo', definition: 'filen' },
    { term: 'la pantalla', definition: 'skjermen' },
  ],
};

// ============================================================
// KAPITTEL 13.3: Comunicación digital
// ============================================================

export const CHAPTER_SPANSK_2_13_3: TextbookChapter = {
  id: 'spansk-2-13-3',
  courseId: 'spansk-2',
  chapterNumber: '13.3',
  title: 'Comunicación digital',
  subtitle: 'Digital kommunikasjon',
  description: 'Lær å skrive e-poster, delta i nettfora og forstå nettsikkerhet på spansk, med fokus på formell og uformell digital kommunikasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive formelle og uformelle e-poster på spansk',
    'Beherske vokabular om digital kommunikasjon og nettsikkerhet',
    'Kunne skille mellom formell og uformell tone i skriftlig digital kommunikasjon',
  ],
  content: [
    {
      id: 'spansk-2-13-3-intro',
      type: 'text',
      content: `## Comunicación digital\n\nDigital kommunikasjon er en sentral del av moderne liv, enten det dreier seg om e-poster til en arbeidsgiver, meldinger til venner eller diskusjoner i nettfora. I dette kapittelet lærer du å mestre ulike former for digital kommunikasjon på spansk, med særlig fokus på forskjellen mellom **formelt og uformelt register** – og viktige aspekter ved nettsikkerhet.\n\n### Vokabular: Digital kommunikasjon\n\n| Spansk | Norsk |\n|--------|-------|\n| el correo electrónico | e-posten |\n| el mensaje | meldingen |\n| el destinatario | mottakeren |\n| el remitente | avsenderen |\n| el asunto | emnet (i e-post) |\n| adjuntar (un archivo) | å legge ved (en fil) |\n| el archivo adjunto | vedlegget |\n| reenviar | å videresende |\n| responder | å svare |\n| el foro | forumet |\n| el hilo (de discusión) | (diskusjons)tråden |\n| el chat | chatten |\n| la videoconferencia | videokonferansen |\n| en línea / fuera de línea | på nett / frakoblet |`,
    },
    {
      id: 'spansk-2-13-3-def-1',
      type: 'definition',
      title: 'Formell vs. uformell e-post',
      content: `**Formell e-post** (til arbeidsgiver, lærer, ukjent):\n\n**Hilsener:**\n- *Estimado/a señor/a [Etternavn]:* – Kjære herr/fru [Etternavn]:\n- *A quien corresponda:* – Til rette vedkommende:\n- *Muy señor/a mío/a:* – Kjære herre/fru:\n\n**Avslutninger:**\n- *Atentamente,* – Med vennlig hilsen,\n- *Le saluda atentamente,* – Vennlig hilsen,\n- *Quedo a su disposición.* – Jeg står til deres disposisjon.\n\n**Uformell e-post** (til venner, familie):\n\n**Hilsener:**\n- *¡Hola, [Navn]!* – Hei, [Navn]!\n- *¿Qué tal?* – Hvordan går det?\n- *Querido/a [Navn]:* – Kjære [Navn]:\n\n**Avslutninger:**\n- *Un abrazo,* – Klem,\n- *Besos,* – Kyss,\n- *¡Hasta pronto!* – Snakkes snart!\n\n**Viktig:** I formell kommunikasjon brukes **usted** (De), i uformell brukes **tú** (du).`,
    },
    {
      id: 'spansk-2-13-3-def-2',
      type: 'definition',
      title: 'Nettsikkerhet (La seguridad en línea)',
      content: `| Spansk | Norsk |\n|--------|-------|\n| la seguridad en línea | nettsikkerheten |\n| la privacidad | personvernet |\n| los datos personales | personopplysningene |\n| la estafa | svindelen |\n| el fraude | bedrageriet |\n| el phishing | phishing (nettfisking) |\n| el virus informático | dataviruset |\n| el programa malicioso (malware) | skadevaren |\n| la verificación en dos pasos | tofaktorverifisering |\n| el cifrado | krypteringen |\n| la copia de seguridad | sikkerhetskopien |\n| el acoso en línea (ciberbullying) | netthets / nettmobbing |\n| denunciar | å rapportere / anmelde |\n| bloquear | å blokkere |\n\n**Nyttige uttrykk:**\n- *Protege tus datos personales.* – Beskytt personopplysningene dine.\n- *No hagas clic en enlaces sospechosos.* – Ikke klikk på mistenkelige lenker.\n- *Activa la verificación en dos pasos.* – Aktiver tofaktorverifisering.`,
    },
    {
      id: 'spansk-2-13-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Formell e-post',
      problem: `Skriv en formell e-post til en spansk skole for å søke om utvekslingsplass.`,
      solution: `**De:** maria.hansen@correo.com\n**Para:** info@colegiomadrid.es\n**Asunto:** Solicitud de plaza de intercambio\n\n*Estimada señora directora:*\n\n*Le escribo para solicitar información sobre el programa de intercambio para el próximo curso escolar. Soy estudiante noruega de 17 años y estudio español como segunda lengua extranjera.*\n\n*Me gustaría saber los requisitos de admisión, las fechas del programa y el coste total. También me interesaría recibir información sobre las familias de acogida.*\n\n*Adjunto mi expediente académico y una carta de motivación.*\n\n*Quedo a su disposición para cualquier consulta adicional.*\n\n*Atentamente,*\n*María Hansen*\n\n---\nLegg merke til bruken av **usted** (Le escribo, su disposición) og formelle uttrykk (Estimada, Atentamente).`,
    },
    {
      id: 'spansk-2-13-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Uformell melding og nettsikkerhet',
      problem: `Les en samtale om en phishing-svindel.`,
      solution: `**Lucía:** ¡Oye! ¿Has visto el correo que nos han enviado? Dice que hemos ganado un viaje a Cancún. 🤔\n*(Hei! Har du sett e-posten de har sendt oss? Den sier at vi har vunnet en reise til Cancun.)*\n\n**Pablo:** ¡No abras ese enlace! Es una estafa de phishing. Quieren robar tus datos personales.\n*(Ikke åpne den lenken! Det er phishing-svindel. De vil stjele personopplysningene dine.)*\n\n**Lucía:** ¿En serio? Parecía bastante real...\n*(Virkelig? Den så ganske ekte ut...)*\n\n**Pablo:** Fíjate en la dirección del remitente. No es una dirección oficial. Además, nunca te piden datos bancarios por correo electrónico.\n*(Se på avsenderadressen. Det er ikke en offisiell adresse. Dessuten ber de aldri om bankopplysninger via e-post.)*\n\n**Lucía:** Tienes razón. Voy a bloquear al remitente y denunciar el correo.\n*(Du har rett. Jeg skal blokkere avsenderen og rapportere e-posten.)*\n\n**Pablo:** ¡Bien hecho! Y cambia tu contraseña por si acaso.\n*(Bra gjort! Og bytt passordet ditt for sikkerhets skyld.)*`,
    },
    {
      id: 'spansk-2-13-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken hilsen passer i en formell e-post?',
        options: [
          { id: 'a', text: '¡Hola, tío!', isCorrect: false },
          { id: 'b', text: 'Estimado señor García:', isCorrect: true },
          { id: 'c', text: '¿Qué tal, amigo?', isCorrect: false },
          { id: 'd', text: '¡Hey!', isCorrect: false },
        ],
        solution: 'Riktig svar er **Estimado señor García:**. "Estimado/a" er en formell hilsen som tilsvarer "Kjære" på norsk. De andre alternativene er uformelle.',
      },
    },
    {
      id: 'spansk-2-13-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "adjuntar un archivo"?',
        options: [
          { id: 'a', text: 'Å slette en fil', isCorrect: false },
          { id: 'b', text: 'Å laste ned en fil', isCorrect: false },
          { id: 'c', text: 'Å legge ved en fil', isCorrect: true },
          { id: 'd', text: 'Å åpne en fil', isCorrect: false },
        ],
        solution: 'Riktig svar er **Å legge ved en fil**. "Adjuntar" betyr å legge ved, og "el archivo adjunto" er vedlegget i en e-post.',
      },
    },
    {
      id: 'spansk-2-13-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett følgende uttrykk om nettsikkerhet til spansk.',
        subTasks: [
          { label: 'a', task: 'Beskytt personopplysningene dine.', solution: 'Protege tus datos personales.' },
          { label: 'b', task: 'Ikke klikk på mistenkelige lenker.', solution: 'No hagas clic en enlaces sospechosos.' },
          { label: 'c', task: 'Aktiver tofaktorverifisering.', solution: 'Activa la verificación en dos pasos.' },
          { label: 'd', task: 'Rapporter svindelen.', solution: 'Denuncia la estafa.' },
        ],
        solution: 'a) Protege tus datos personales. b) No hagas clic en enlaces sospechosos. (negativ imperativ: haz → no hagas) c) Activa la verificación en dos pasos. d) Denuncia la estafa.',
      },
    },
    {
      id: 'spansk-2-13-3-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **E-postvokabular**: el correo electrónico, el destinatario, el remitente, el asunto, adjuntar\n- **Formelle hilsener**: Estimado/a señor/a, Atentamente, Le saluda atentamente\n- **Uformelle hilsener**: ¡Hola!, Un abrazo, ¡Hasta pronto!\n- **Nettsikkerhet**: la estafa, el phishing, el virus informático, la verificación en dos pasos\n- **Formelt vs. uformelt register**: usted (formell) vs. tú (uformell) i digital kommunikasjon\n- **Nettfora**: el foro, el hilo de discusión, comentar, responder`,
    },
    {
      id: 'spansk-2-13-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort formell e-post (6-8 setninger) til en spansk bedrift der du søker om sommerjobb. Bruk formelle hilsener, usted-formen og avslutninger.',
        solution: 'Eksempel: "Estimado/a señor/a:\n\nLe escribo para solicitar un puesto de trabajo para el verano. Soy estudiante noruego/a de 18 años y hablo español con fluidez. Tengo experiencia trabajando en atención al cliente. Me gustaría trabajar en su empresa durante los meses de julio y agosto. Adjunto mi currículum vitae para su consideración. Quedo a su disposición para una entrevista.\n\nAtentamente,\n[Navn]"',
      },
    },
    {
      id: 'spansk-2-13-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er "la verificación en dos pasos"?',
        options: [
          { id: 'a', text: 'Et antivirusprogram', isCorrect: false },
          { id: 'b', text: 'Tofaktorverifisering (ekstra sikkerhetssteg ved innlogging)', isCorrect: true },
          { id: 'c', text: 'En brannmur', isCorrect: false },
          { id: 'd', text: 'En kryptert melding', isCorrect: false },
        ],
        solution: 'Riktig svar er **Tofaktorverifisering**. "La verificación en dos pasos" er en ekstra sikkerhetsmekanisme der du bekrefter identiteten din med to steg (f.eks. passord + SMS-kode).',
      },
    },
    {
      id: 'spansk-2-13-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et innlegg (8-10 setninger) til et spansk nettforum der du advarer andre brukere om en phishing-e-post du har mottatt. Beskriv hva som skjedde, hvordan du oppdaget svindelen, og gi råd om nettsikkerhet.',
        solution: 'Eksempel: "¡Hola a todos! Quiero advertiros sobre una estafa de phishing que he recibido hoy. Me llegó un correo electrónico que parecía ser de mi banco, pidiendo que actualizara mis datos personales. Al principio parecía real, pero me fijé en la dirección del remitente y no era la oficial del banco. Además, el correo tenía varios errores gramaticales. No hice clic en ningún enlace y llamé directamente a mi banco para confirmar. Me dijeron que era una estafa conocida. Os recomiendo que nunca compartáis datos bancarios por correo electrónico. Activad la verificación en dos pasos en todas vuestras cuentas. Si recibís un correo sospechoso, denunciadlo y bloqueadlo inmediatamente."',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el correo electrónico', definition: 'e-posten' },
    { term: 'adjuntar', definition: 'å legge ved (en fil)' },
    { term: 'el destinatario', definition: 'mottakeren' },
    { term: 'el remitente', definition: 'avsenderen' },
    { term: 'la estafa', definition: 'svindelen' },
    { term: 'la privacidad', definition: 'personvernet' },
    { term: 'denunciar', definition: 'å rapportere / anmelde' },
    { term: 'la verificación en dos pasos', definition: 'tofaktorverifisering' },
  ],
};

// ============================================================
// KAPITTEL 13.4: Tecnología y futuro
// ============================================================

export const CHAPTER_SPANSK_2_13_4: TextbookChapter = {
  id: 'spansk-2-13-4',
  courseId: 'spansk-2',
  chapterNumber: '13.4',
  title: 'Tecnología y futuro',
  subtitle: 'Teknologi og fremtiden',
  description: 'Lær å diskutere teknologiens fremtid, kunstig intelligens og automatisering på spansk, med fokus på futuro simple og argumenterende tekst.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne diskutere teknologiens innvirkning på fremtidens samfunn',
    'Beherske vokabular om kunstig intelligens, automatisering og fremtidsteknologi',
    'Bruke futuro simple for å snakke om fremtiden og gjøre forutsigelser',
  ],
  content: [
    {
      id: 'spansk-2-13-4-intro',
      type: 'text',
      content: `## Tecnología y futuro\n\nHvordan vil teknologien forme fremtiden vår? Kunstig intelligens, automatisering og robotikk endrer allerede samfunnet på mange måter. I dette kapittelet lærer du å diskutere disse temaene på spansk, og du lærer å bruke **futuro simple** for å gjøre forutsigelser om fremtiden – et sentralt verktøy i debatt og argumentasjon.\n\n### Vokabular: Fremtidsteknologi\n\n| Spansk | Norsk |\n|--------|-------|\n| la inteligencia artificial (IA) | kunstig intelligens (KI) |\n| la automatización | automatiseringen |\n| el robot | roboten |\n| la robótica | robotikken |\n| el algoritmo | algoritmen |\n| los datos masivos (big data) | stordata (big data) |\n| la realidad virtual (RV) | virtuell virkelighet (VR) |\n| la realidad aumentada (RA) | utvidet virkelighet (AR) |\n| el coche autónomo | den selvkjørende bilen |\n| la impresora 3D | 3D-printeren |\n| el dron | dronen |\n| la energía renovable | fornybar energi |\n| la sostenibilidad | bærekraftigheten |\n| la innovación | innovasjonen |`,
    },
    {
      id: 'spansk-2-13-4-def-1',
      type: 'definition',
      title: 'El futuro simple (enkel fremtid)',
      content: `**El futuro simple** brukes for å snakke om fremtiden, gjøre forutsigelser og uttrykke antakelser.\n\n**Bøyning (regelmessige verb):**\n\nStammen er hele infinitiven + endelser:\n\n| | -ar (hablar) | -er (comer) | -ir (vivir) |\n|---|---|---|---|\n| yo | hablaré | comeré | viviré |\n| tú | hablarás | comerás | vivirás |\n| él/ella | hablará | comerá | vivirá |\n| nosotros | hablaremos | comeremos | viviremos |\n| ellos | hablarán | comerán | vivirán |\n\n**Uregelmessige stammer:**\n| Infinitiv | Stamme | Eksempel (yo) |\n|-----------|--------|---------------|\n| tener | tendr- | tendré |\n| poder | podr- | podré |\n| saber | sabr- | sabré |\n| hacer | har- | haré |\n| decir | dir- | diré |\n| salir | saldr- | saldré |\n| poner | pondr- | pondré |\n| haber | habr- | habrá (det vil finnes) |\n| querer | querr- | querré |\n| venir | vendr- | vendré |\n\nMerk: Uregelmessighetene i futuro simple er de samme som i kondisjonal!`,
    },
    {
      id: 'spansk-2-13-4-def-2',
      type: 'definition',
      title: 'Debattvokabular og argumentasjon',
      content: `For å diskutere teknologi og fremtid trenger du argumentasjonsuttrykk:\n\n**Uttrykke mening:**\n- *En mi opinión...* – Etter min mening...\n- *Creo que...* – Jeg tror at...\n- *Estoy convencido/a de que...* – Jeg er overbevist om at...\n- *Me parece que...* – Jeg synes at...\n\n**Argumentere for:**\n- *Una ventaja es que...* – En fordel er at...\n- *Por un lado... por otro lado...* – På den ene siden... på den andre siden...\n- *Además...* – Dessuten...\n- *Es evidente que...* – Det er tydelig at...\n\n**Argumentere mot:**\n- *Una desventaja es que...* – En ulempe er at...\n- *Sin embargo...* – Likevel... / Men...\n- *A pesar de que...* – Til tross for at...\n- *El problema es que...* – Problemet er at...\n\n**Konkludere:**\n- *En conclusión...* – Avslutningsvis...\n- *Para resumir...* – For å oppsummere...\n- *En definitiva...* – Kort sagt...`,
    },
    {
      id: 'spansk-2-13-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forutsigelser om fremtiden',
      problem: `Bruk futuro simple for å gjøre forutsigelser om teknologiens fremtid.`,
      solution: `- *En 2040, los coches autónomos **serán** algo normal en las ciudades.* – I 2040 vil selvkjørende biler være vanlig i byene.\n- *La inteligencia artificial **cambiará** muchos puestos de trabajo.* – Kunstig intelligens vil endre mange arbeidsplasser.\n- *Las impresoras 3D **podrán** construir casas completas.* – 3D-printere vil kunne bygge hele hus.\n- ***Habrá** más energía renovable y menos combustibles fósiles.* – Det vil finnes mer fornybar energi og mindre fossilt brensel.\n- *Los robots **harán** muchas tareas domésticas por nosotros.* – Roboter vil gjøre mange husholdsoppgaver for oss.\n- *La realidad virtual **transformará** la manera en que aprendemos.* – Virtuell virkelighet vil forandre måten vi lærer på.`,
    },
    {
      id: 'spansk-2-13-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Debatt om kunstig intelligens',
      problem: `Les en debatt om fordelene og ulempene med kunstig intelligens.`,
      solution: `**A favor (for):**\n\n*En mi opinión, la inteligencia artificial tendrá muchos beneficios para la sociedad. Por un lado, los algoritmos podrán diagnosticar enfermedades más rápidamente que los médicos. Además, la automatización liberará a las personas de trabajos repetitivos y peligrosos. Es evidente que la IA mejorará la eficiencia en muchos sectores.*\n*(Etter min mening vil kunstig intelligens ha mange fordeler for samfunnet. På den ene siden vil algoritmer kunne diagnostisere sykdommer raskere enn leger. Dessuten vil automatisering frigjøre folk fra repetitivt og farlig arbeid. Det er tydelig at KI vil forbedre effektiviteten i mange sektorer.)*\n\n**En contra (mot):**\n\n*Sin embargo, una desventaja importante es que muchas personas perderán sus empleos. El problema es que no todos tendrán acceso a la nueva tecnología. A pesar de los avances, me preocupa que la IA pueda ser utilizada de manera irresponsable. En conclusión, es necesario que los gobiernos regulen el uso de la inteligencia artificial.*\n*(Likevel er en viktig ulempe at mange vil miste jobbene sine. Problemet er at ikke alle vil ha tilgang til den nye teknologien. Til tross for fremskrittene er jeg bekymret for at KI kan brukes uansvarlig. Avslutningsvis er det nødvendig at myndighetene regulerer bruken av kunstig intelligens.)*`,
    },
    {
      id: 'spansk-2-13-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "la inteligencia artificial" på norsk?',
        options: [
          { id: 'a', text: 'Virtuell virkelighet', isCorrect: false },
          { id: 'b', text: 'Kunstig intelligens', isCorrect: true },
          { id: 'c', text: 'Automatisering', isCorrect: false },
          { id: 'd', text: 'Stordata', isCorrect: false },
        ],
        solution: 'Riktig svar er **Kunstig intelligens**. "La inteligencia artificial" (IA) tilsvarer det norske "kunstig intelligens" (KI) og det engelske "artificial intelligence" (AI).',
      },
    },
    {
      id: 'spansk-2-13-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den korrekte futuro simple-formen av "tener" for "nosotros"?',
        options: [
          { id: 'a', text: 'teneremos', isCorrect: false },
          { id: 'b', text: 'tendremos', isCorrect: true },
          { id: 'c', text: 'teníamos', isCorrect: false },
          { id: 'd', text: 'tuvimos', isCorrect: false },
        ],
        solution: 'Riktig svar er **tendremos**. "Tener" har uregelmessig stamme i futuro simple: tendr- + -emos = tendremos. "Teneremos" ville vært den regelmessige formen, men er feil.',
      },
    },
    {
      id: 'spansk-2-13-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy verbene i futuro simple for den angitte personen.',
        subTasks: [
          { label: 'a', task: 'los robots / hacer (tareas domésticas)', solution: 'Los robots harán tareas domésticas.' },
          { label: 'b', task: 'nosotros / poder (viajar a Marte)', solution: 'Nosotros podremos viajar a Marte.' },
          { label: 'c', task: 'la IA / saber (diagnosticar enfermedades)', solution: 'La IA sabrá diagnosticar enfermedades.' },
          { label: 'd', task: 'tú / tener (un coche autónomo)', solution: 'Tú tendrás un coche autónomo.' },
          { label: 'e', task: 'haber (más energía renovable)', solution: 'Habrá más energía renovable.' },
        ],
        solution: 'a) Los robots harán tareas domésticas. (hacer → har-), b) Nosotros podremos viajar a Marte. (poder → podr-), c) La IA sabrá diagnosticar enfermedades. (saber → sabr-), d) Tú tendrás un coche autónomo. (tener → tendr-), e) Habrá más energía renovable. (haber → habr-).',
      },
    },
    {
      id: 'spansk-2-13-4-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Fremtidsteknologi**: la inteligencia artificial, la automatización, el robot, la realidad virtual, el coche autónomo\n- **Futuro simple**: Infinitiv + endelser (-é, -ás, -á, -emos, -án)\n- **Uregelmessige stammer i futuro**: tener → tendr-, poder → podr-, hacer → har-, saber → sabr-, haber → habr-\n- **Debattvokabular**: En mi opinión, Una ventaja/desventaja es que, Sin embargo, En conclusión\n- **Argumentasjon**: Uttrykke meninger, argumentere for og mot, konkludere`,
    },
    {
      id: 'spansk-2-13-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv 3 forutsigelser om teknologien i 2050. Bruk futuro simple og vokabular fra kapittelet.',
        solution: 'Eksempel: "1) En 2050, la inteligencia artificial será más inteligente que los seres humanos en muchas áreas. 2) Los coches autónomos reemplazarán a los conductores humanos y habrá menos accidentes de tráfico. 3) La realidad virtual transformará la educación y los estudiantes podrán visitar cualquier lugar del mundo desde su casa."',
      },
    },
    {
      id: 'spansk-2-13-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket uttrykk bruker du for å introdusere et motargument?',
        options: [
          { id: 'a', text: 'Además...', isCorrect: false },
          { id: 'b', text: 'En conclusión...', isCorrect: false },
          { id: 'c', text: 'Sin embargo...', isCorrect: true },
          { id: 'd', text: 'En mi opinión...', isCorrect: false },
        ],
        solution: 'Riktig svar er **Sin embargo...** (Likevel.../Men...). Dette uttrykket brukes for å introdusere et motargument eller en kontrast. "Además" (dessuten) legger til et argument, "En conclusión" (avslutningsvis) oppsummerer, og "En mi opinión" (etter min mening) introduserer en mening.',
      },
    },
    {
      id: 'spansk-2-13-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-13-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en argumenterende tekst (10-12 setninger) om temaet: "¿La inteligencia artificial será positiva o negativa para la sociedad?" Bruk uttrykk for argumentasjon (En mi opinión, Una ventaja/desventaja, Sin embargo, En conclusión) og futuro simple.',
        solution: 'Eksempel: "En mi opinión, la inteligencia artificial tendrá tanto efectos positivos como negativos en la sociedad. Por un lado, una ventaja importante es que la IA mejorará la medicina. Los algoritmos podrán diagnosticar enfermedades con mayor precisión y rapidez. Además, la automatización liberará a las personas de trabajos peligrosos y repetitivos. La IA también ayudará a resolver problemas medioambientales.\n\nSin embargo, una desventaja significativa es que muchas personas perderán sus empleos. El problema es que la desigualdad social podrá aumentar si solo algunos países tendrán acceso a esta tecnología. A pesar de los beneficios, me preocupa que la IA pueda ser utilizada para la vigilancia masiva.\n\nEn conclusión, creo que será necesario que los gobiernos regulen el desarrollo de la inteligencia artificial para maximizar sus beneficios y minimizar los riesgos."',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la inteligencia artificial', definition: 'kunstig intelligens (KI)' },
    { term: 'la automatización', definition: 'automatiseringen' },
    { term: 'el coche autónomo', definition: 'den selvkjørende bilen' },
    { term: 'la realidad virtual', definition: 'virtuell virkelighet (VR)' },
    { term: 'la sostenibilidad', definition: 'bærekraftigheten' },
    { term: 'el futuro simple', definition: 'enkel fremtid (verbtid)' },
    { term: 'sin embargo', definition: 'likevel, men (motargument)' },
    { term: 'en conclusión', definition: 'avslutningsvis, kort sagt' },
  ],
};

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const SPANSK_2_CHAPTERS_11_13: TextbookChapter[] = [
  CHAPTER_SPANSK_2_11_1,
  CHAPTER_SPANSK_2_11_2,
  CHAPTER_SPANSK_2_11_3,
  CHAPTER_SPANSK_2_11_4,
  CHAPTER_SPANSK_2_12_1,
  CHAPTER_SPANSK_2_12_2,
  CHAPTER_SPANSK_2_12_3,
  CHAPTER_SPANSK_2_12_4,
  CHAPTER_SPANSK_2_13_1,
  CHAPTER_SPANSK_2_13_2,
  CHAPTER_SPANSK_2_13_3,
  CHAPTER_SPANSK_2_13_4,
];
