/**
 * Lærebøker for fremmedspråk
 *
 * Alle fag med kapitler og oppgaver basert på LK20
 */

import type { TextbookCourse } from '@/lib/types/textbook';

// ============================================================================

export const COURSE_SPANSK_1: TextbookCourse = {
  id: 'spansk-1',
  title: 'Spansk nivå 1',
  level: 'Nivå 1',
  description: 'Spansk for nybegynnere - hilsener, tall, familie, tid, mat, hjem, klær, skole, reise og grammatikk',
  curriculum: 'LK20',
  icon: '🇪🇸',
  coverImage: '/images/subjects/spansk-1-hero.webp',
  chapters: [
    // Kapittel 1: Saludos y presentación
    {
      id: 'spansk-1-1-1',
      number: '1.1',
      title: '¡Hola! - Hilsener',
      description: 'Lær grunnleggende hilsener og høflighetsfraser på spansk.',
      estimatedMinutes: 40,
      exerciseCount: 4,
      topics: ['Hilsener', 'Avskjed', 'Høflighetsfraser'],
      competenceGoals: ['bruke enkle hilsener og høflighetsuttrykk'],
    },
    {
      id: 'spansk-1-1-2',
      number: '1.2',
      title: 'Me llamo... - Presentere seg',
      description: 'Lær å presentere deg selv og spørre om navn.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Presentasjon', 'Verb llamarse', 'Navn'],
      competenceGoals: ['presentere seg selv og andre'],
    },
    {
      id: 'spansk-1-1-3',
      number: '1.3',
      title: '¿De dónde eres? - Hvor kommer du fra',
      description: 'Lær å snakke om land og nasjonaliteter.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Land', 'Nasjonaliteter', 'Kjønnsbøyning'],
      competenceGoals: ['fortelle hvor man kommer fra og nasjonalitet'],
    },
    {
      id: 'spansk-1-1-4',
      number: '1.4',
      title: 'Primeras conversaciones - Første samtaler',
      description: 'Øv på å føre enkle samtaler på spansk.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Samtale', 'Spørsmål', 'Svar'],
      competenceGoals: ['føre enkle samtaler om seg selv'],
    },
    // Kapittel 2: Números y colores
    {
      id: 'spansk-1-2-1',
      number: '2.1',
      title: 'Los números 0-20 - Tall 0-20',
      description: 'Lær tallene fra 0 til 20 på spansk.',
      estimatedMinutes: 40,
      exerciseCount: 4,
      topics: ['Tall 0-15', 'Tall 16-20'],
      competenceGoals: ['bruke tall i daglige situasjoner'],
    },
    {
      id: 'spansk-1-2-2',
      number: '2.2',
      title: 'Los números 21-100 - Tall 21-100',
      description: 'Lær tallene fra 21 til 100 på spansk.',
      estimatedMinutes: 40,
      exerciseCount: 4,
      topics: ['Tall 21-29', 'Tall 30-100', 'Tierene'],
      competenceGoals: ['bruke større tall i kommunikasjon'],
    },
    {
      id: 'spansk-1-2-3',
      number: '2.3',
      title: 'Los colores - Fargene',
      description: 'Lær fargene og hvordan de bøyes etter kjønn.',
      estimatedMinutes: 40,
      exerciseCount: 4,
      topics: ['Farger', 'Kjønnsbøyning', 'Adjektiver'],
      competenceGoals: ['beskrive ting med farger'],
    },
    {
      id: 'spansk-1-2-4',
      number: '2.4',
      title: 'De compras con números - Handle med tall',
      description: 'Lær å bruke tall og farger i handlesituasjoner.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Handel', 'Priser', 'Tall i praksis'],
      competenceGoals: ['bruke tall og farger i handlesituasjoner'],
    },
    // Kapittel 3: Familia y descripciones
    {
      id: 'spansk-1-3-1',
      number: '3.1',
      title: 'La familia - Familien',
      description: 'Lær ord for familiemedlemmer på spansk.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Nærmeste familie', 'Utvidet familie'],
      competenceGoals: ['fortelle om familie og venner'],
    },
    {
      id: 'spansk-1-3-2',
      number: '3.2',
      title: 'Los posesivos - Eiendomsord',
      description: 'Lær eiendomsord og hvordan de brukes.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Eiendomsord', 'Tallbøyning', 'Mi/tu/su'],
      competenceGoals: ['bruke eiendomsord riktig'],
    },
    {
      id: 'spansk-1-3-3',
      number: '3.3',
      title: 'Describir personas - Beskrive personer',
      description: 'Lær å beskrive utseende og personlighet.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Utseende', 'Personlighet', 'Adjektiver'],
      competenceGoals: ['beskrive personer og seg selv'],
    },
    {
      id: 'spansk-1-3-4',
      number: '3.4',
      title: 'Presentar a mi familia - Presentere familien',
      description: 'Øv på å presentere familien din på spansk.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Familiepresentasjon', 'Beskrivelser', 'Sammensatte setninger'],
      competenceGoals: ['presentere familien sin muntlig og skriftlig'],
    },
    // Kapittel 4: Tiempo y calendario
    {
      id: 'spansk-1-4-1',
      number: '4.1',
      title: 'La hora - Klokkeslettet',
      description: 'Lær å si og spørre om klokkeslett på spansk.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Klokkeslett', 'Es la/Son las', 'Y media/Y cuarto'],
      competenceGoals: ['uttrykke klokkeslett'],
    },
    {
      id: 'spansk-1-4-2',
      number: '4.2',
      title: 'Los días de la semana - Ukedagene',
      description: 'Lær ukedagene og hvordan de brukes.',
      estimatedMinutes: 40,
      exerciseCount: 4,
      topics: ['Ukedager', 'Artikler med dager', 'Ukeplan'],
      competenceGoals: ['bruke ukedager i kommunikasjon'],
    },
    {
      id: 'spansk-1-4-3',
      number: '4.3',
      title: 'Meses y estaciones - Måneder og årstider',
      description: 'Lær måneder, årstider og datoer.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Måneder', 'Årstider', 'Datoer', 'Bursdag'],
      competenceGoals: ['uttrykke datoer og årstider'],
    },
    {
      id: 'spansk-1-4-4',
      number: '4.4',
      title: 'Mi rutina diaria - Min dagsrutine',
      description: 'Lær å beskrive daglige rutiner på spansk.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Dagsrutine', 'Refleksive verb', 'Tidsuttrykk'],
      competenceGoals: ['beskrive daglige rutiner'],
    },
    // Kapittel 5: Comida y restaurante
    {
      id: 'spansk-1-5-1',
      number: '5.1',
      title: 'La comida y bebida - Mat og drikke',
      description: 'Lær ord for mat, drikke og måltider.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Mat', 'Drikke', 'Måltider', 'Me gusta'],
      competenceGoals: ['snakke om mat og måltider'],
    },
    {
      id: 'spansk-1-5-2',
      number: '5.2',
      title: 'En el restaurante - På restauranten',
      description: 'Lær å bestille mat og drikke på restaurant.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Bestilling', 'Høflighetsfraser', 'Regning'],
      competenceGoals: ['kommunisere i enkle hverdagssituasjoner'],
    },
    {
      id: 'spansk-1-5-3',
      number: '5.3',
      title: 'En el supermercado - På butikken',
      description: 'Lær å handle og kommunisere i butikk.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Butikk', 'Mengder', 'Priser', 'Handel'],
      competenceGoals: ['handle og kommunisere i butikk'],
    },
    {
      id: 'spansk-1-5-4',
      number: '5.4',
      title: 'La cocina española - Spansk mat og kultur',
      description: 'Lær om spansk matkultur og tradisjoner.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Spanske retter', 'Matkultur', 'Tapas', 'Måltidstider'],
      competenceGoals: ['kjenne til spansk matkultur'],
    },
    // Kapittel 6: Casa y hogar
    {
      id: 'spansk-1-6-1',
      number: '6.1',
      title: 'La casa - Huset',
      description: 'Lær ord for rom og deler av huset.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Rom', 'Hus', 'Hay-konstruksjonen'],
      competenceGoals: ['beskrive hjemmet sitt'],
    },
    {
      id: 'spansk-1-6-2',
      number: '6.2',
      title: 'Los muebles - Møblene',
      description: 'Lær møbelvokabular og preposisjoner.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Møbler', 'Preposisjoner', 'Plassering'],
      competenceGoals: ['beskrive rominnredning og plassering'],
    },
    {
      id: 'spansk-1-6-3',
      number: '6.3',
      title: 'Mi habitación - Rommet mitt',
      description: 'Lær å beskrive rommet ditt detaljert.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Soverom', 'Beskrivelser', 'Farger og form'],
      competenceGoals: ['beskrive rommet sitt detaljert'],
    },
    {
      id: 'spansk-1-6-4',
      number: '6.4',
      title: 'Vivir en España - Bo i Spania',
      description: 'Sammenlign boforhold i Spania og Norge.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Boligtyper', 'Nabolag', 'Kulturforskjeller'],
      competenceGoals: ['sammenligne boforhold i Spania og Norge'],
    },
    // Kapittel 7: Ropa y compras
    {
      id: 'spansk-1-7-1',
      number: '7.1',
      title: 'La ropa - Klærne',
      description: 'Lær ord for klær og tilbehør.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Klær', 'Tilbehør', 'Artikler'],
      competenceGoals: ['navngi klær og tilbehør'],
    },
    {
      id: 'spansk-1-7-2',
      number: '7.2',
      title: 'En la tienda de ropa - I klesbutikken',
      description: 'Lær å kommunisere i klesbutikk.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Shopping', 'Størrelser', 'Betaling'],
      competenceGoals: ['kommunisere i klesbutikk'],
    },
    {
      id: 'spansk-1-7-3',
      number: '7.3',
      title: 'Colores y tallas - Farger og størrelser',
      description: 'Kombiner farger med klær og størrelser.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Farger med klær', 'Størrelser', 'Sammenligning'],
      competenceGoals: ['beskrive klær med farger og størrelser'],
    },
    {
      id: 'spansk-1-7-4',
      number: '7.4',
      title: '¿Qué llevas? - Hva har du på deg?',
      description: 'Lær å beskrive hva du og andre har på seg.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Verb llevar', 'Klær og vær', 'Beskrivelser'],
      competenceGoals: ['beskrive hva man har på seg'],
    },
    // Kapittel 8: Escuela y profesiones
    {
      id: 'spansk-1-8-1',
      number: '8.1',
      title: 'El colegio - Skolen',
      description: 'Lær om skolen og skolemiljøet.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Skolerom', 'Skoleutstyr', 'Skoledag'],
      competenceGoals: ['beskrive skolen og skolehverdagen'],
    },
    {
      id: 'spansk-1-8-2',
      number: '8.2',
      title: 'Las asignaturas - Skolefagene',
      description: 'Lær om skolefag og timeplan.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Skolefag', 'Timeplan', 'Preferanser'],
      competenceGoals: ['snakke om skolefag og timeplan'],
    },
    {
      id: 'spansk-1-8-3',
      number: '8.3',
      title: 'Las profesiones - Yrker',
      description: 'Lær om vanlige yrker og kjønnsbøyning.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Yrker', 'Kjønnsbøyning', 'Verb ser'],
      competenceGoals: ['navngi vanlige yrker'],
    },
    {
      id: 'spansk-1-8-4',
      number: '8.4',
      title: '¿Qué quieres ser? - Hva vil du bli?',
      description: 'Lær å uttrykke fremtidsønsker om yrke.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Fremtidsønsker', 'Quiero ser', 'Begrunnelser'],
      competenceGoals: ['uttrykke fremtidsønsker om yrke'],
    },
    // Kapittel 9: Viajes y transporte
    {
      id: 'spansk-1-9-1',
      number: '9.1',
      title: 'Los medios de transporte - Transportmidler',
      description: 'Lær om transportmidler og verbet ir.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Transport', 'Verb ir', 'Ir en/a'],
      competenceGoals: ['snakke om transportmidler'],
    },
    {
      id: 'spansk-1-9-2',
      number: '9.2',
      title: 'En la ciudad - I byen',
      description: 'Lær å orientere deg og gi retningsbeskrivelser.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Steder i byen', 'Retninger', 'Spørre om veien'],
      competenceGoals: ['orientere seg i en by'],
    },
    {
      id: 'spansk-1-9-3',
      number: '9.3',
      title: 'Planear un viaje - Planlegge en reise',
      description: 'Lær å planlegge og snakke om reiser.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Reisevokabular', 'Bestilling', 'Ir a + infinitiv'],
      competenceGoals: ['planlegge og snakke om reiser'],
    },
    {
      id: 'spansk-1-9-4',
      number: '9.4',
      title: 'En el hotel - På hotellet',
      description: 'Lær å kommunisere på hotell.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Hotell', 'Innsjekking', 'Problemer'],
      competenceGoals: ['kommunisere på hotell'],
    },
    // Kapittel 10: Verbos y gramática
    {
      id: 'spansk-1-10-1',
      number: '10.1',
      title: 'El verbo ser - Verbet å være',
      description: 'Lær full bøyning og bruk av ser.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Verb ser', 'Bøyning', 'Bruksområder'],
      competenceGoals: ['bøye og bruke verbet ser'],
    },
    {
      id: 'spansk-1-10-2',
      number: '10.2',
      title: 'El verbo tener - Verbet å ha',
      description: 'Lær full bøyning og bruk av tener.',
      estimatedMinutes: 45,
      exerciseCount: 4,
      topics: ['Verb tener', 'Tener-uttrykk', 'Tener que'],
      competenceGoals: ['bøye og bruke verbet tener'],
    },
    {
      id: 'spansk-1-10-3',
      number: '10.3',
      title: 'Verbos regulares - Regelmessige verb',
      description: 'Lær bøyning av regelmessige -ar, -er og -ir verb.',
      estimatedMinutes: 50,
      exerciseCount: 4,
      topics: ['Verb -ar', 'Verb -er', 'Verb -ir', 'Presens'],
      competenceGoals: ['bøye regelmessige verb i presens'],
    },
    {
      id: 'spansk-1-10-4',
      number: '10.4',
      title: 'Repaso general - Repetisjon',
      description: 'Oppsummering og repetisjon av alle emner.',
      estimatedMinutes: 50,
      exerciseCount: 4,
      topics: ['Grammatikk', 'Vokabular', 'Samtale', 'Repetisjon'],
      competenceGoals: ['oppsummere og repetere sentrale emner'],
    },
    // Kapittel 11: Den spansktalende verden
    { id: 'spansk-1-11-1', number: '11.1', title: 'Los países hispanohablantes - Spansktalende land', description: 'Lær om de over 20 landene der spansk er offisielt språk.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Spansktalende land', 'Geografi', 'Nasjonaliteter'], competenceGoals: ['utforske geografi og levemåter i spansktalende områder'] },
    { id: 'spansk-1-11-2', number: '11.2', title: 'España - Spania', description: 'Utforsk spanske regioner, byer og kulturelle særtrekk.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Spania', 'Regioner', 'Byer'], competenceGoals: ['utforske geografi og levemåter i spansktalende områder'] },
    { id: 'spansk-1-11-3', number: '11.3', title: 'México y Centroamérica - Mexico og Mellom-Amerika', description: 'Lær om Mexico og mellomamerikanske land.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Mexico', 'Mellom-Amerika', 'Kultur'], competenceGoals: ['utforske geografi og levemåter i spansktalende områder'] },
    { id: 'spansk-1-11-4', number: '11.4', title: 'Sudamérica - Sør-Amerika', description: 'Utforsk Argentina, Colombia, Chile, Peru og andre søramerikanske land.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Sør-Amerika', 'Geografi', 'Kultur'], competenceGoals: ['utforske geografi og levemåter i spansktalende områder'] },
    // Kapittel 12: Kunst og kultur
    { id: 'spansk-1-12-1', number: '12.1', title: 'La música en español - Spanskspråklig musikk', description: 'Utforsk reggaeton, flamenco, cumbia og kjente artister.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Musikk', 'Flamenco', 'Reggaeton'], competenceGoals: ['utforske kunstneriske og kulturelle uttrykk i spansktalende områder'] },
    { id: 'spansk-1-12-2', number: '12.2', title: 'El cine en español - Spansk film', description: 'Lær om spansk og latinamerikansk film og filmvokabular.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Film', 'Regissører', 'Filmsjangre'], competenceGoals: ['utforske kunstneriske og kulturelle uttrykk i spansktalende områder'] },
    { id: 'spansk-1-12-3', number: '12.3', title: 'Cómics y literatura - Tegneserier og litteratur', description: 'Bli kjent med Mafalda, Don Quijote og andre litterære verk.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Tegneserier', 'Litteratur', 'Don Quijote'], competenceGoals: ['utforske kunstneriske og kulturelle uttrykk i spansktalende områder'] },
    { id: 'spansk-1-12-4', number: '12.4', title: 'Fiestas y tradiciones - Høytider og tradisjoner', description: 'Utforsk Día de los Muertos, La Tomatina og Semana Santa.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Høytider', 'Tradisjoner', 'Festivaler'], competenceGoals: ['utforske kunstneriske og kulturelle uttrykk i spansktalende områder'] },
    // Kapittel 13: Autentiske tekster
    { id: 'spansk-1-13-1', number: '13.1', title: 'Leer un menú - Lese en meny', description: 'Lær å lese og forstå spanske restaurantmenyer.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Meny', 'Restaurant', 'Matvokabular'], competenceGoals: ['lese og forstå enkle autentiske tekster på spansk'] },
    { id: 'spansk-1-13-2', number: '13.2', title: 'Leer horarios - Lese rutetabeller', description: 'Lær å lese rutetabeller og togplaner på spansk.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Rutetabeller', 'Tidsuttrykk', 'Reise'], competenceGoals: ['lese og forstå enkle autentiske tekster på spansk'] },
    { id: 'spansk-1-13-3', number: '13.3', title: 'Anuncios clasificados - Småannonser', description: 'Lær å lese og forstå spanske småannonser for bolig og jobb.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Småannonser', 'Bolig', 'Jobb'], competenceGoals: ['lese og forstå enkle autentiske tekster på spansk'] },
    { id: 'spansk-1-13-4', number: '13.4', title: 'Poemas y canciones - Dikt og sanger', description: 'Les enkle spanske dikt og sangtekster og lær om poesi.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Dikt', 'Sanger', 'Poesi'], competenceGoals: ['lese og forstå enkle autentiske tekster på spansk'] },
    // Kapittel 14: Muntlig kommunikasjon
    { id: 'spansk-1-14-1', number: '14.1', title: 'La pronunciación - Uttale', description: 'Lær om spansk uttale og de viktigste lydene.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Uttale', 'Vokaler', 'Konsonanter'], competenceGoals: ['bruke regler for uttale for å kommunisere tydelig på spansk'] },
    { id: 'spansk-1-14-2', number: '14.2', title: 'Diálogos - Samtaletrening', description: 'Øv på å føre samtaler i vanlige hverdagssituasjoner.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Samtale', 'Hilsener', 'Hverdagssituasjoner'], competenceGoals: ['delta i enkle samtaler om dagligdagse emner på spansk'] },
    { id: 'spansk-1-14-3', number: '14.3', title: 'Presentaciones cortas - Korte presentasjoner', description: 'Lær å holde korte presentasjoner om deg selv og kjente emner.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Presentasjon', 'Struktur', 'Hobbyer'], competenceGoals: ['gi en kort presentasjon på spansk om kjente emner'] },
    { id: 'spansk-1-14-4', number: '14.4', title: 'Juego de roles - Rollespill', description: 'Øv på spansk gjennom rollespill i ulike situasjoner.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Rollespill', 'Hotell', 'Reise', 'Lege'], competenceGoals: ['bruke spansk i ulike rollespillsituasjoner'] },
    // Kapittel 15: Skriftlig kommunikasjon
    { id: 'spansk-1-15-1', number: '15.1', title: 'Correos electrónicos y cartas - E-poster og brev', description: 'Lær å skrive e-poster og brev på spansk.', estimatedMinutes: 45, exerciseCount: 6, topics: ['E-post', 'Brev', 'Formelt/uformelt'], competenceGoals: ['skrive enkle e-poster og brev på spansk'] },
    { id: 'spansk-1-15-2', number: '15.2', title: 'Postales y mensajes - Postkort og meldinger', description: 'Lær å skrive postkort og korte meldinger på spansk.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Postkort', 'Meldinger', 'Vær'], competenceGoals: ['skrive korte meldinger og postkort på spansk'] },
    { id: 'spansk-1-15-3', number: '15.3', title: 'Escribir textos cortos - Skrive korte tekster', description: 'Lær å skrive beskrivelser, dagboknotater og korte fortellinger.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Beskrivelser', 'Dagbok', 'Bindeord'], competenceGoals: ['skrive korte, sammenhengende tekster på spansk'] },
    { id: 'spansk-1-15-4', number: '15.4', title: 'Escritura creativa - Kreativ skriving', description: 'Utforsk kreativ skriving gjennom historier, dikt og fantasitekster.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Kreativ skriving', 'Dikt', 'Historier'], competenceGoals: ['skrive kreative tekster på spansk'] },
    // Kapittel 16: Grammatikk og strategier
    { id: 'spansk-1-16-1', number: '16.1', title: 'Resumen de gramática - Grammatikkoversikt', description: 'Samlet oversikt over grunnleggende spansk grammatikk.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Ser/Estar', 'Presens', 'Artikler', 'Preposisjoner'], competenceGoals: ['ha oversikt over grunnleggende spansk grammatikk'] },
    { id: 'spansk-1-16-2', number: '16.2', title: 'Formación de palabras - Orddannelse', description: 'Lær om kognater, falske venner og ordfamilier.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Kognater', 'Falske venner', 'Ordfamilier'], competenceGoals: ['gjenkjenne kognater og bruke ordfamilier'] },
    { id: 'spansk-1-16-3', number: '16.3', title: 'Estrategias de aprendizaje - Læringsstrategier', description: 'Effektive strategier for å lære spansk bedre.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Læringsstrategier', 'Ordlæring', 'Lytting'], competenceGoals: ['bruke hensiktsmessige læringsstrategier'] },
    { id: 'spansk-1-16-4', number: '16.4', title: 'Autoevaluación - Egenvurdering', description: 'Vurder egen fremgang og sett mål for videre læring.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Egenvurdering', 'Læringsmål', 'Refleksjon'], competenceGoals: ['vurdere egen språklæring og sette realistiske mål'] },
  ],
};

// ============================================================================

export const COURSE_SPANSK_2: TextbookCourse = {
  id: 'spansk-2',
  title: 'Spansk nivå 2',
  level: 'VG2',
  description: 'Spansk 2 - utvidet grammatikk, litteratur og kultur',
  curriculum: 'LK20',
  icon: '🇪🇸',
  coverImage: '/images/subjects/spansk-2-hero.webp',
  chapters: [
    // Kapittel 1: Perfecto y imperfecto (Fortidsformer)
    { id: 'spansk-2-1-1', number: '1.1', title: 'El pretérito perfecto - Sammensatt fortid', description: 'Haber + partisipp for nylige hendelser.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Perfecto', 'Haber', 'Partisipp'], competenceGoals: ['bruke sammensatt fortid', 'fortelle om nylige hendelser'], wip: true },
    { id: 'spansk-2-1-2', number: '1.2', title: 'El pretérito imperfecto - Ufullendt fortid', description: 'Vaner og beskrivelser i fortiden.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Imperfecto', 'Vaner', 'Beskrivelser'], competenceGoals: ['beskrive fortidige vaner', 'bruke imperfecto korrekt'], wip: true },
    { id: 'spansk-2-1-3', number: '1.3', title: 'Perfecto vs. imperfecto - Når brukes hva?', description: 'Avsluttede handlinger vs. pågående tilstander.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Fortidsformer', 'Kontrast'], competenceGoals: ['skille mellom fortidsformene', 'bruke begge former i kontekst'], wip: true },
    { id: 'spansk-2-1-4', number: '1.4', title: 'Narrar en el pasado - Fortelle historier i fortid', description: 'Kombinere fortidsformer i fortelling.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Narrativ', 'Fortelling'], competenceGoals: ['fortelle sammenhengende historier', 'bruke begge fortidsformer naturlig'], wip: true },
    // Kapittel 2: El subjuntivo (Konjunktiv)
    { id: 'spansk-2-2-1', number: '2.1', title: 'Introducción al subjuntivo - Hva er konjunktiv?', description: 'Grunnleggende om konjunktiv.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Subjuntivo', 'Dannelse'], competenceGoals: ['forstå konjunktiv som begrep', 'danne presens konjunktiv'], wip: true },
    { id: 'spansk-2-2-2', number: '2.2', title: 'Subjuntivo con emociones y deseos - Følelser og ønsker', description: 'Konjunktiv med følelsesuttrykk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Følelser', 'Ønsker', 'Querer que'], competenceGoals: ['uttrykke ønsker med konjunktiv', 'reagere følelsesmessig med konjunktiv'], wip: true },
    { id: 'spansk-2-2-3', number: '2.3', title: 'Subjuntivo con expresiones impersonales - Upersonlige uttrykk', description: 'Konjunktiv etter es importante que, etc.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Upersonlige uttrykk', 'Sikkerhet'], competenceGoals: ['bruke upersonlige uttrykk med konjunktiv', 'skille mellom sikkerhet og usikkerhet'], wip: true },
    { id: 'spansk-2-2-4', number: '2.4', title: 'Subjuntivo en la práctica - Konjunktiv i praksis', description: 'Praktisk bruk av konjunktiv.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Praktisk bruk', 'Dagligspråk'], competenceGoals: ['bruke konjunktiv naturlig', 'skrive tekster med konjunktiv'], wip: true },
    // Kapittel 3: Condicional y futuro (Vilkår og fremtid)
    { id: 'spansk-2-3-1', number: '3.1', title: 'El futuro simple - Enkel fremtid', description: 'Dannelse og bruk av futuro simple.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Futuro simple', 'Uregelmessige stammer'], competenceGoals: ['danne futuro simple', 'uttrykke fremtid og forutsigelser'], wip: true },
    { id: 'spansk-2-3-2', number: '3.2', title: 'El condicional - Vilkårsformen', description: 'Hypotetiske situasjoner og høflighet.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Condicional', 'Høflighet'], competenceGoals: ['danne kondisjonalis', 'uttrykke ønsker og høflighet'], wip: true },
    { id: 'spansk-2-3-3', number: '3.3', title: 'Oraciones condicionales - Betingelsessetninger', description: 'Si-setninger type 1 og 2.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Si-setninger', 'Betingelser'], competenceGoals: ['lage betingelsessetninger', 'bruke imperfecto subjuntivo'], wip: true },
    { id: 'spansk-2-3-4', number: '3.4', title: 'Expresar planes y posibilidades - Planer og muligheter', description: 'Kombinere fremtid og vilkår.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Planer', 'Muligheter'], competenceGoals: ['uttrykke planer og muligheter', 'kombinere tidsformer'], wip: true },
    // Kapittel 4: Pronombres y referencias (Pronomen og referanser)
    { id: 'spansk-2-4-1', number: '4.1', title: 'Pronombres de objeto directo - Direkte objektspronomen', description: 'Lo, la, los, las.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Direkte objekt', 'Pronomen'], competenceGoals: ['bruke direkte objektspronomen', 'forenkle setninger med pronomen'], wip: true },
    { id: 'spansk-2-4-2', number: '4.2', title: 'Pronombres de objeto indirecto - Indirekte objektspronomen', description: 'Me, te, le, nos, les.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Indirekte objekt', 'Pronomen'], competenceGoals: ['bruke indirekte objektspronomen', 'identifisere indirekte objekt'], wip: true },
    { id: 'spansk-2-4-3', number: '4.3', title: 'Combinación de pronombres - Kombinere pronomen', description: 'Se lo/la og doble pronomen.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Doble pronomen', 'Se lo'], competenceGoals: ['kombinere to objektspronomen', 'bruke se lo/la korrekt'], wip: true },
    { id: 'spansk-2-4-4', number: '4.4', title: 'Pronombres relativos - Relativpronomen', description: 'Que, quien, donde, el que.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Relativpronomen', 'Komplekse setninger'], competenceGoals: ['bruke relativpronomen', 'bygge komplekse setninger'], wip: true },
    // Kapittel 5: Literatura hispanohablante (Spanskspråklig litteratur)
    { id: 'spansk-2-5-1', number: '5.1', title: 'Introducción a la literatura - Litterære sjangre', description: 'Sjangre og grunnleggende analysebegreper.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Sjangre', 'Begreper'], competenceGoals: ['kjenne litterære sjangre', 'bruke grunnleggende analysebegreper'], wip: true },
    { id: 'spansk-2-5-2', number: '5.2', title: 'Autores españoles - Spanske forfattere', description: 'Cervantes, Lorca og andre.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Cervantes', 'Lorca', 'Spansk litteratur'], competenceGoals: ['kjenne viktige spanske forfattere', 'lese og forstå litterære utdrag'], wip: true },
    { id: 'spansk-2-5-3', number: '5.3', title: 'Autores latinoamericanos - Latinamerikanske forfattere', description: 'Márquez, Neruda, Allende, Borges.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Márquez', 'Neruda', 'Magisk realisme'], competenceGoals: ['kjenne latinamerikanske forfattere', 'forstå magisk realisme'], wip: true },
    { id: 'spansk-2-5-4', number: '5.4', title: 'Análisis de textos literarios - Litterær analyse', description: 'Systematisk analyse av tekster.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Analyse', 'Bokrapport'], competenceGoals: ['analysere litterære tekster', 'skrive om litteratur'], wip: true },
    // Kapittel 6: Cultura y sociedad (Kultur og samfunn)
    { id: 'spansk-2-6-1', number: '6.1', title: 'Fiestas y tradiciones - Fester og tradisjoner', description: 'Fester i den spansktalende verden.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Fester', 'Tradisjoner'], competenceGoals: ['beskrive fester og tradisjoner', 'sammenligne kulturer'], wip: true },
    { id: 'spansk-2-6-2', number: '6.2', title: 'La vida cotidiana - Hverdagslivet', description: 'Hverdagsliv i spansktalende land.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Hverdag', 'Rutiner'], competenceGoals: ['beskrive hverdagsliv', 'sammenligne med norsk hverdag'], wip: true },
    { id: 'spansk-2-6-3', number: '6.3', title: 'Comparar culturas - Sammenligne kulturer', description: 'Norge vs. spansktalende land.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Kultursammenligning', 'Interkulturell'], competenceGoals: ['sammenligne kulturer', 'reflektere over kulturforskjeller'], wip: true },
    { id: 'spansk-2-6-4', number: '6.4', title: 'Diversidad cultural - Kulturelt mangfold', description: 'Mangfold i den spansktalende verden.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Mangfold', 'Urfolk'], competenceGoals: ['kjenne kulturelt mangfold', 'respektere kulturelle forskjeller'], wip: true },
    // Kapittel 7: El mundo laboral (Arbeidsliv)
    { id: 'spansk-2-7-1', number: '7.1', title: 'Profesiones y trabajo - Yrker og arbeidsliv', description: 'Vokabular og uttrykk for yrker.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Yrker', 'Arbeid'], competenceGoals: ['beskrive yrker og arbeid', 'kommunisere om arbeidslivet'], wip: true },
    { id: 'spansk-2-7-2', number: '7.2', title: 'El currículum vitae - Skrive CV på spansk', description: 'CV-struktur og formelt språk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['CV', 'Formelt språk'], competenceGoals: ['skrive CV på spansk', 'bruke formelt språk'], wip: true },
    { id: 'spansk-2-7-3', number: '7.3', title: 'La entrevista de trabajo - Jobbintervjuet', description: 'Jobbintervju-situasjoner.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Intervju', 'Formelt register'], competenceGoals: ['gjennomføre jobbintervju', 'bruke formelt register'], wip: true },
    { id: 'spansk-2-7-4', number: '7.4', title: 'El español en el trabajo - Spansk i arbeidslivet', description: 'Forretningsspansk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Forretning', 'E-post', 'Møter'], competenceGoals: ['kommunisere i arbeidssammenheng', 'skrive formelle tekster'], wip: true },
    // Kapittel 8: Medio ambiente y sociedad (Miljø og samfunn)
    { id: 'spansk-2-8-1', number: '8.1', title: 'Problemas medioambientales - Miljøproblemer', description: 'Diskutere miljøproblemer.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Miljø', 'Forurensning'], competenceGoals: ['beskrive miljøproblemer', 'bruke relevant vokabular'], wip: true },
    { id: 'spansk-2-8-2', number: '8.2', title: 'El cambio climático - Klimaendringer', description: 'Klimaendringer og konsekvenser.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Klima', 'Drivhuseffekt'], competenceGoals: ['diskutere klimaendringer', 'presentere data og fakta'], wip: true },
    { id: 'spansk-2-8-3', number: '8.3', title: 'Sostenibilidad - Bærekraft i hverdagen', description: 'Bærekraftige løsninger.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Bærekraft', 'Resirkulering'], competenceGoals: ['foreslå bærekraftige løsninger', 'argumentere for miljøvalg'], wip: true },
    { id: 'spansk-2-8-4', number: '8.4', title: 'Argumentar y debatir - Argumentere og debattere', description: 'Argumentasjon og debatteknikk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Argumentasjon', 'Debatt'], competenceGoals: ['argumentere på spansk', 'delta i debatter'], wip: true },
    // Kapittel 9: Historia de España y Latinoamérica (Historie)
    { id: 'spansk-2-9-1', number: '9.1', title: 'Historia de España - Spansk historie', description: 'Viktige perioder i spansk historie.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Spansk historie', 'Borgerkrigen'], competenceGoals: ['kjenne spansk historie', 'forstå historiske sammenhenger'], wip: true },
    { id: 'spansk-2-9-2', number: '9.2', title: 'Historia de Latinoamérica - Latinamerikansk historie', description: 'Kolonitid og uavhengighet.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Kolonitid', 'Uavhengighet'], competenceGoals: ['kjenne latinamerikansk historie', 'forstå kolonialismens konsekvenser'], wip: true },
    { id: 'spansk-2-9-3', number: '9.3', title: 'España y Latinoamérica hoy - Spansktalende land i dag', description: 'Dagens situasjon.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Moderne', 'Utfordringer'], competenceGoals: ['beskrive aktuelle forhold', 'sammenligne land og regioner'], wip: true },
    { id: 'spansk-2-9-4', number: '9.4', title: 'Reflexiones históricas - Historiske refleksjoner', description: 'Sammenhenger mellom fortid og nåtid.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Refleksjon', 'Memoria histórica'], competenceGoals: ['reflektere over historie', 'se sammenhenger mellom fortid og nåtid'], wip: true },
    // Kapittel 10: Comunicación avanzada (Avansert kommunikasjon)
    { id: 'spansk-2-10-1', number: '10.1', title: 'Expresar opiniones - Uttrykke meninger', description: 'Avanserte meningsuttrykk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Meninger', 'Synspunkter'], competenceGoals: ['uttrykke meninger nyansert', 'bruke varierte meningsuttrykk'], wip: true },
    { id: 'spansk-2-10-2', number: '10.2', title: 'Argumentación escrita - Skriftlig argumentasjon', description: 'Argumenterende tekster.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Argumentasjon', 'Tekststruktur'], competenceGoals: ['skrive argumenterende tekster', 'strukturere argumenter'], wip: true },
    { id: 'spansk-2-10-3', number: '10.3', title: 'Presentaciones orales - Muntlige presentasjoner', description: 'Holde presentasjoner.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Presentasjon', 'Muntlig'], competenceGoals: ['holde presentasjoner', 'kommunisere tydelig muntlig'], wip: true },
    { id: 'spansk-2-10-4', number: '10.4', title: 'Repaso general nivel 2 - Repetisjon nivå 2', description: 'Repetisjon av alle temaer.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Repetisjon', 'Eksamen'], competenceGoals: ['repetere nivå 2-stoff', 'forberede seg til vurdering'], wip: true },
  ],
};

// ============================================================================

export const COURSE_SPANSK_3: TextbookCourse = {
  id: 'spansk-3',
  title: 'Spansk nivå 3',
  level: 'VG3',
  description: 'Spansk 3 - avansert grammatikk, litteratur og samfunn',
  curriculum: 'LK20',
  icon: '🇲🇽',
  coverImage: '/images/subjects/spansk-3-hero.webp',
  chapters: [
    // Kapittel 1: Subjuntivo avanzado (Avansert konjunktiv)
    { id: 'spansk-3-1-1', number: '1.1', title: 'Subjuntivo con expresiones impersonales - Upersonlige uttrykk', description: 'Avansert bruk med upersonlige uttrykk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Subjuntivo', 'Upersonlige uttrykk'], competenceGoals: ['mestre subjuntivo med upersonlige uttrykk', 'skille mellom modus etter sikkerhetsnivå'], wip: true },
    { id: 'spansk-3-1-2', number: '1.2', title: 'Subjuntivo en cláusulas relativas - Relativsetninger', description: 'Konjunktiv i relativsetninger.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Relativsetninger', 'Referent'], competenceGoals: ['bruke konjunktiv i relativsetninger', 'forstå kjent vs. ukjent referent'], wip: true },
    { id: 'spansk-3-1-3', number: '1.3', title: 'Subjuntivo en cláusulas temporales - Tidssetninger', description: 'Konjunktiv etter tidskonjunksjoner.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Tidssetninger', 'Cuando', 'Antes de que'], competenceGoals: ['bruke konjunktiv i tidssetninger', 'skille mellom fremtidig og vanlig handling'], wip: true },
    { id: 'spansk-3-1-4', number: '1.4', title: 'Subjuntivo vs. indicativo avanzado - Avanserte forskjeller', description: 'Subtile forskjeller mellom modus.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Modus', 'Aunque', 'Como si'], competenceGoals: ['mestre forskjellen mellom modus', 'bruke konjunktiv i alle kontekster'], wip: true },
    // Kapittel 2: Tiempos compuestos (Sammensatte tider)
    { id: 'spansk-3-2-1', number: '2.1', title: 'El pluscuamperfecto - Pluskvamperfektum', description: 'Había + partisipp.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Pluscuamperfecto', 'Había'], competenceGoals: ['bruke pluskvamperfektum', 'uttrykke rekkefølge i fortid'], wip: true },
    { id: 'spansk-3-2-2', number: '2.2', title: 'El pretérito indefinido avanzado - Preteritum avansert', description: 'Uregelmessige verb i preteritum.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Indefinido', 'Uregelmessige verb'], competenceGoals: ['mestre uregelmessige preteritumsformer', 'velge riktig fortidsform'], wip: true },
    { id: 'spansk-3-2-3', number: '2.3', title: 'Combinación de tiempos - Kombinere tidsformer', description: 'Flere tidsformer i lengre tekster.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Tidsformer', 'Narrativ'], competenceGoals: ['kombinere tidsformer i tekst', 'skrive varierte fortellende tekster'], wip: true },
    { id: 'spansk-3-2-4', number: '2.4', title: 'Secuencia de tiempos - Tidsformssekvenser', description: 'Concordancia de tiempos.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Concordancia', 'Sekvens'], competenceGoals: ['forstå concordancia de tiempos', 'bruke korrekte tidsformssekvenser'], wip: true },
    // Kapittel 3: Estilo indirecto (Indirekte tale)
    { id: 'spansk-3-3-1', number: '3.1', title: 'Introducción al estilo indirecto - Grunnleggende', description: 'Direkte til indirekte tale.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Indirekte tale', 'Rapporteringsverb'], competenceGoals: ['gjøre om til indirekte tale', 'bruke rapporteringsverb'], wip: true },
    { id: 'spansk-3-3-2', number: '3.2', title: 'Cambios de tiempos verbales - Tidsendringer', description: 'Tidsendringer i indirekte tale.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Tidsendringer', 'Transformasjon'], competenceGoals: ['utføre tidsendringer korrekt', 'endre tids- og stedsuttrykk'], wip: true },
    { id: 'spansk-3-3-3', number: '3.3', title: 'Estilo indirecto con preguntas - Indirekte spørsmål', description: 'Rapportere spørsmål.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Indirekte spørsmål', 'Preguntar si'], competenceGoals: ['rapportere spørsmål', 'bruke indirekte spørsmål'], wip: true },
    { id: 'spansk-3-3-4', number: '3.4', title: 'Textos periodísticos - Journalistisk bruk', description: 'Indirekte tale i journalistikk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Journalistikk', 'Nyheter'], competenceGoals: ['forstå journalistisk stil', 'skrive med indirekte tale'], wip: true },
    // Kapittel 4: Literatura clásica y moderna (Klassisk og moderne litteratur)
    { id: 'spansk-3-4-1', number: '4.1', title: 'El Quijote y Cervantes - Cervantes og Don Quijote', description: 'Cervantes og hans mesterverk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Cervantes', 'Don Quijote'], competenceGoals: ['kjenne Cervantes og Don Quijote', 'analysere klassisk litteratur'], wip: true },
    { id: 'spansk-3-4-2', number: '4.2', title: 'García Lorca y la poesía - Lorca og poesi', description: 'Lorca og Generación del 27.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Lorca', 'Poesi', 'Generación del 27'], competenceGoals: ['analysere spansk poesi', 'kjenne García Lorca'], wip: true },
    { id: 'spansk-3-4-3', number: '4.3', title: 'El realismo mágico - Magisk realisme', description: 'Márquez, Allende og el boom.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Magisk realisme', 'Márquez', 'El boom'], competenceGoals: ['forstå magisk realisme', 'analysere latinamerikansk litteratur'], wip: true },
    { id: 'spansk-3-4-4', number: '4.4', title: 'Análisis literario avanzado - Avansert analyse', description: 'Avanserte analysemetoder.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Narratologi', 'Intertekstualitet'], competenceGoals: ['utføre avansert litterær analyse', 'skrive om litteratur akademisk'], wip: true },
    // Kapittel 5: Cine y arte hispanohablante (Film og kunst)
    { id: 'spansk-3-5-1', number: '5.1', title: 'El cine español - Spansk film', description: 'Buñuel, Almodóvar, Amenábar.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Spansk film', 'Almodóvar'], competenceGoals: ['kjenne spansk film', 'diskutere film på spansk'], wip: true },
    { id: 'spansk-3-5-2', number: '5.2', title: 'El cine latinoamericano - Latinamerikansk film', description: 'Nuevo cine latinoamericano.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Latinamerikansk film', 'Cuarón'], competenceGoals: ['kjenne latinamerikansk film', 'analysere film'], wip: true },
    { id: 'spansk-3-5-3', number: '5.3', title: 'Arte y arquitectura - Kunst og arkitektur', description: 'Picasso, Dalí, Kahlo, Gaudí.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Kunst', 'Picasso', 'Kahlo'], competenceGoals: ['kjenne spanskspråklig kunst', 'beskrive kunst på spansk'], wip: true },
    { id: 'spansk-3-5-4', number: '5.4', title: 'Reseñas y críticas - Anmeldelser og kritikk', description: 'Skrive anmeldelser.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Anmeldelse', 'Kritikk'], competenceGoals: ['skrive anmeldelser', 'uttrykke kritisk vurdering'], wip: true },
    // Kapittel 6: Política y actualidad (Politikk og aktualitet)
    { id: 'spansk-3-6-1', number: '6.1', title: 'Sistemas políticos - Politiske systemer', description: 'Politiske systemer i spansktalende land.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Politikk', 'Demokrati'], competenceGoals: ['forstå politiske systemer', 'kommunisere om politikk'], wip: true },
    { id: 'spansk-3-6-2', number: '6.2', title: 'Temas de actualidad - Aktuelle temaer', description: 'Migrasjon, ulikhet, teknologi.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Aktualitet', 'Migrasjon'], competenceGoals: ['diskutere aktuelle temaer', 'lese og forstå nyheter'], wip: true },
    { id: 'spansk-3-6-3', number: '6.3', title: 'Derechos humanos - Menneskerettigheter', description: 'Rettigheter i spansktalende kontekst.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Menneskerettigheter', 'Rettferdighet'], competenceGoals: ['diskutere menneskerettigheter', 'reflektere over rettferdighet'], wip: true },
    { id: 'spansk-3-6-4', number: '6.4', title: 'Debates y opiniones - Debatter og meningsytringer', description: 'Avansert debatteknikk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Debatt', 'Retorikk'], competenceGoals: ['debattere på avansert nivå', 'bruke retoriske virkemidler'], wip: true },
    // Kapittel 7: Economía y comercio (Økonomi og handel)
    { id: 'spansk-3-7-1', number: '7.1', title: 'Economía global - Globaløkonomi', description: 'Spansktalende lands rolle i verdensøkonomien.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Økonomi', 'PIB'], competenceGoals: ['forstå globaløkonomi', 'kommunisere om økonomi'], wip: true },
    { id: 'spansk-3-7-2', number: '7.2', title: 'Comercio internacional - Internasjonal handel', description: 'Handelsrelasjoner.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Handel', 'Import/Eksport'], competenceGoals: ['forstå internasjonal handel', 'diskutere handelsrelasjoner'], wip: true },
    { id: 'spansk-3-7-3', number: '7.3', title: 'El español de negocios - Forretningsspansk', description: 'Formelt forretningsspråk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Forretning', 'Korrespondanse'], competenceGoals: ['bruke forretningsspansk', 'skrive formelle forretningstekster'], wip: true },
    { id: 'spansk-3-7-4', number: '7.4', title: 'Textos económicos - Økonomiske tekster', description: 'Lese og analysere økonomiske tekster.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Økonomiske tekster', 'Statistikk'], competenceGoals: ['lese økonomiske tekster', 'presentere økonomisk data'], wip: true },
    // Kapittel 8: Viajes y turismo (Reise og turisme)
    { id: 'spansk-3-8-1', number: '8.1', title: 'Planificar un viaje - Planlegge reise', description: 'Reiseplanlegging i detalj.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Reise', 'Planlegging'], competenceGoals: ['planlegge reiser på spansk', 'kommunisere i reisesituasjoner'], wip: true },
    { id: 'spansk-3-8-2', number: '8.2', title: 'Turismo responsable - Ansvarlig turisme', description: 'Bærekraftig turisme.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Bærekraft', 'Økoturisme'], competenceGoals: ['reflektere over turisme', 'diskutere ansvarlig reiseliv'], wip: true },
    { id: 'spansk-3-8-3', number: '8.3', title: 'Describir experiencias - Beskrive reiseopplevelser', description: 'Levende reisebeskrivelser.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Beskrivelser', 'Reiseblogg'], competenceGoals: ['beskrive opplevelser', 'skrive reisebeskrivelser'], wip: true },
    { id: 'spansk-3-8-4', number: '8.4', title: 'El español como lengua global - Spansk som verdensspråk', description: 'Spansk i verden.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Verdensspråk', 'Variasjon'], competenceGoals: ['kjenne spansk som verdensspråk', 'forstå språklig variasjon'], wip: true },
    // Kapittel 9: Identidad cultural (Kulturell identitet)
    { id: 'spansk-3-9-1', number: '9.1', title: 'Identidad hispana - Hispanisk identitet', description: 'Hva er hispanisk identitet?', estimatedMinutes: 45, exerciseCount: 4, topics: ['Identitet', 'Hispano'], competenceGoals: ['reflektere over identitet', 'forstå kulturelt mangfold'], wip: true },
    { id: 'spansk-3-9-2', number: '9.2', title: 'Inmigración y multiculturalismo - Innvandring', description: 'Innvandring og integrering.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Innvandring', 'Multikulturalisme'], competenceGoals: ['diskutere migrasjon', 'reflektere over multikulturalisme'], wip: true },
    { id: 'spansk-3-9-3', number: '9.3', title: 'Lengua e identidad - Språk og identitet', description: 'Språklig mangfold og identitet.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Språk', 'Urfolksspråk'], competenceGoals: ['forstå språklig mangfold', 'reflektere over språk og identitet'], wip: true },
    { id: 'spansk-3-9-4', number: '9.4', title: 'Reflexiones personales - Personlige refleksjoner', description: 'Reflektere over egen identitet.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Refleksjon', 'Interkulturell'], competenceGoals: ['reflektere over egen identitet', 'uttrykke personlige refleksjoner'], wip: true },
    // Kapittel 10: Preparación para examen (Eksamensforberedelse)
    { id: 'spansk-3-10-1', number: '10.1', title: 'Comprensión lectora - Leseforståelse', description: 'Strategier for leseforståelse.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Lesing', 'Strategier'], competenceGoals: ['mestre leseforståelse', 'bruke lesestrategier'], wip: true },
    { id: 'spansk-3-10-2', number: '10.2', title: 'Expresión escrita - Skriftlig uttrykk', description: 'Skrive ulike teksttyper.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Skriving', 'Teksttyper'], competenceGoals: ['skrive varierte teksttyper', 'strukturere tekster korrekt'], wip: true },
    { id: 'spansk-3-10-3', number: '10.3', title: 'Comunicación oral - Muntlig kommunikasjon', description: 'Muntlig eksamensforberedelse.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Muntlig', 'Presentasjon'], competenceGoals: ['kommunisere muntlig', 'presentere på spansk'], wip: true },
    { id: 'spansk-3-10-4', number: '10.4', title: 'Repaso general nivel 3 - Repetisjon nivå 3', description: 'Helhetlig repetisjon.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Repetisjon', 'Eksamen'], competenceGoals: ['repetere nivå 3-stoff', 'forberede til eksamen'], wip: true },
  ],
};

// ============================================================================

export const COURSE_TYSK_1: TextbookCourse = {
  id: 'tysk-1',
  title: 'Tysk nivå 1',
  level: 'Nivå 1',
  description: 'Tysk for nybegynnere - hilsener, tall, farger, familie og hverdagsfraser',
  curriculum: 'LK20',
  icon: '🇩🇪',
  coverImage: '/images/subjects/tysk-1-hero.webp',
  chapters: [
    // Kapittel 1: Hilsener og presentasjon
    { id: 'tysk-1-1-1', number: '1.1', title: 'Hallo! - Hilsener', description: 'Grunnleggende hilsener og uttrykk.', estimatedMinutes: 40, exerciseCount: 8, topics: ['Hilsener', 'Avskjed', 'Høflighetsfraser'], competenceGoals: ['bruke enkle hilsener'] },
    { id: 'tysk-1-1-2', number: '1.2', title: 'Ich heiße... - Presentere seg', description: 'Presentere seg selv.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Presentasjon', 'Verb sein/heißen'], competenceGoals: ['presentere seg selv'] },
    { id: 'tysk-1-1-3', number: '1.3', title: 'Woher kommst du? - Hvor kommer du fra', description: 'Snakke om nasjonalitet og hjemsted.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Land', 'Nasjonalitet', 'Verb kommen'], competenceGoals: ['fortelle hvor man kommer fra'] },
    { id: 'tysk-1-1-4', number: '1.4', title: 'Erste Gespräche - Første samtaler', description: 'Øve på enkle samtaler.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Dialog', 'Spørsmål', 'Svar'], competenceGoals: ['føre enkle samtaler'] },
    // Kapittel 2: Tall og farger
    { id: 'tysk-1-2-1', number: '2.1', title: 'Die Zahlen 0-20 - Tall 0-20', description: 'Lær tallene 0-20.', estimatedMinutes: 40, exerciseCount: 8, topics: ['Tall 0-20', 'Uttale'], competenceGoals: ['telle til 20'] },
    { id: 'tysk-1-2-2', number: '2.2', title: 'Die Zahlen 21-100 - Tall 21-100', description: 'Lær tallene 21-100.', estimatedMinutes: 40, exerciseCount: 8, topics: ['Tall 21-100', 'Alder'], competenceGoals: ['telle til 100'] },
    { id: 'tysk-1-2-3', number: '2.3', title: 'Die Farben - Fargene', description: 'Lær fargene på tysk.', estimatedMinutes: 35, exerciseCount: 8, topics: ['Farger', 'Nyanser'], competenceGoals: ['beskrive ting med farger'] },
    { id: 'tysk-1-2-4', number: '2.4', title: 'Einkaufen mit Zahlen - Handle med tall', description: 'Bruke tall i praksis.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Priser', 'Shopping', 'Euro'], competenceGoals: ['bruke tall i hverdagen'] },
    // Kapittel 3: Familie og beskrivelser
    { id: 'tysk-1-3-1', number: '3.1', title: 'Die Familie - Familien', description: 'Ord for familiemedlemmer.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Familie', 'Slektninger'], competenceGoals: ['fortelle om familien'] },
    { id: 'tysk-1-3-2', number: '3.2', title: 'Possessivpronomen - Eiendomsord', description: 'Mein, dein, sein, ihr.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Eiendomsord', 'Grammatikk'], competenceGoals: ['bruke eiendomsord'] },
    { id: 'tysk-1-3-3', number: '3.3', title: 'Menschen beschreiben - Beskrive personer', description: 'Utseende og personlighet.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Utseende', 'Personlighet'], competenceGoals: ['beskrive mennesker'] },
    { id: 'tysk-1-3-4', number: '3.4', title: 'Meine Familie vorstellen - Presentere familien', description: 'Fortelle om familien din.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Presentasjon', 'Familie'], competenceGoals: ['presentere familien'] },
    // Kapittel 4: Tid og kalender
    { id: 'tysk-1-4-1', number: '4.1', title: 'Die Uhrzeit - Klokkeslettet', description: 'Si hva klokken er.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Klokkeslett', 'Tid'], competenceGoals: ['si hva klokken er'] },
    { id: 'tysk-1-4-2', number: '4.2', title: 'Die Wochentage - Ukedagene', description: 'Lær ukedagene.', estimatedMinutes: 40, exerciseCount: 8, topics: ['Ukedager', 'Planer'], competenceGoals: ['bruke ukedagene'] },
    { id: 'tysk-1-4-3', number: '4.3', title: 'Monate und Jahreszeiten - Måneder og årstider', description: 'Måneder og årstider.', estimatedMinutes: 40, exerciseCount: 8, topics: ['Måneder', 'Årstider', 'Dato'], competenceGoals: ['snakke om dato og årstider'] },
    { id: 'tysk-1-4-4', number: '4.4', title: 'Mein Tagesablauf - Min dagsrutine', description: 'Fortelle om dagen din.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Dagsrutine', 'Aktiviteter'], competenceGoals: ['beskrive daglige rutiner'] },
    // Kapittel 5: Mat og restaurant
    { id: 'tysk-1-5-1', number: '5.1', title: 'Essen und Trinken - Mat og drikke', description: 'Ord for mat og drikke.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Mat', 'Drikke', 'Måltider'], competenceGoals: ['snakke om mat'] },
    { id: 'tysk-1-5-2', number: '5.2', title: 'Im Restaurant - På restauranten', description: 'Bestille mat på restaurant.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Restaurant', 'Bestilling'], competenceGoals: ['bestille mat'] },
    { id: 'tysk-1-5-3', number: '5.3', title: 'Im Supermarkt - På butikken', description: 'Handle dagligvarer.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Butikk', 'Varer', 'Betaling'], competenceGoals: ['handle på butikken'] },
    { id: 'tysk-1-5-4', number: '5.4', title: 'Deutsche Küche - Tysk mat', description: 'Typisk tysk mat og kultur.', estimatedMinutes: 40, exerciseCount: 8, topics: ['Tysk mat', 'Kultur'], competenceGoals: ['kjenne til tysk matkultur'] },
    // Kapittel 6: Hjem og bolig
    { id: 'tysk-1-6-1', number: '6.1', title: 'Das Haus - Huset', description: 'Rom i et hus.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Hus', 'Rom'], competenceGoals: ['beskrive et hus'] },
    { id: 'tysk-1-6-2', number: '6.2', title: 'Die Möbel - Møblene', description: 'Møbler og gjenstander.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Møbler', 'Gjenstander'], competenceGoals: ['snakke om møbler'] },
    { id: 'tysk-1-6-3', number: '6.3', title: 'Mein Zimmer - Rommet mitt', description: 'Beskrive rommet ditt.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Eget rom', 'Beskrivelse'], competenceGoals: ['beskrive eget rom'] },
    { id: 'tysk-1-6-4', number: '6.4', title: 'Wohnen in Deutschland - Bo i Tyskland', description: 'Boformer i Tyskland.', estimatedMinutes: 40, exerciseCount: 8, topics: ['Bolig', 'Kultur'], competenceGoals: ['kjenne til tysk bokultur'] },
    // Kapittel 7: Klær og shopping
    { id: 'tysk-1-7-1', number: '7.1', title: 'Die Kleidung - Klærne', description: 'Ord for klær.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Klær', 'Plagg'], competenceGoals: ['snakke om klær'] },
    { id: 'tysk-1-7-2', number: '7.2', title: 'Im Kleidergeschäft - I klesbutikken', description: 'Handle klær.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Klesbutikk', 'Størrelser'], competenceGoals: ['handle klær'] },
    { id: 'tysk-1-7-3', number: '7.3', title: 'Farben und Größen - Farger og størrelser', description: 'Beskrive klær.', estimatedMinutes: 40, exerciseCount: 8, topics: ['Farger', 'Størrelser', 'Adjektiver'], competenceGoals: ['beskrive klær'] },
    { id: 'tysk-1-7-4', number: '7.4', title: 'Was trägst du? - Hva har du på deg?', description: 'Snakke om antrekk.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Antrekk', 'Verb tragen'], competenceGoals: ['beskrive antrekk'] },
    // Kapittel 8: Skole og yrker
    { id: 'tysk-1-8-1', number: '8.1', title: 'Die Schule - Skolen', description: 'Skole og utdanning.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Skole', 'Klasserom'], competenceGoals: ['snakke om skolen'] },
    { id: 'tysk-1-8-2', number: '8.2', title: 'Die Schulfächer - Skolefagene', description: 'Fag på skolen.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Fag', 'Timeplan'], competenceGoals: ['snakke om skolefag'] },
    { id: 'tysk-1-8-3', number: '8.3', title: 'Berufe - Yrker', description: 'Ulike yrker.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Yrker', 'Arbeid'], competenceGoals: ['snakke om yrker'] },
    { id: 'tysk-1-8-4', number: '8.4', title: 'Was willst du werden? - Hva vil du bli?', description: 'Fremtidsdrømmer.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Fremtid', 'Ønsker'], competenceGoals: ['uttrykke fremtidsønsker'] },
    // Kapittel 9: Reise og transport
    { id: 'tysk-1-9-1', number: '9.1', title: 'Verkehrsmittel - Transportmidler', description: 'Ulike transportmidler.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Transport', 'Reise'], competenceGoals: ['snakke om transport'] },
    { id: 'tysk-1-9-2', number: '9.2', title: 'In der Stadt - I byen', description: 'Steder i byen.', estimatedMinutes: 45, exerciseCount: 8, topics: ['By', 'Steder', 'Veibeskrivelse'], competenceGoals: ['orientere seg i byen'] },
    { id: 'tysk-1-9-3', number: '9.3', title: 'Eine Reise planen - Planlegge en reise', description: 'Planlegge reiser.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Reiseplanlegging', 'Billetter'], competenceGoals: ['planlegge en reise'] },
    { id: 'tysk-1-9-4', number: '9.4', title: 'Im Hotel - På hotellet', description: 'Booke og bo på hotell.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Hotell', 'Booking'], competenceGoals: ['kommunisere på hotell'] },
    // Kapittel 10: Verb og grammatikk
    { id: 'tysk-1-10-1', number: '10.1', title: 'Das Verb sein - Verbet å være', description: 'Bøyning av sein.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Verb sein', 'Bøyning'], competenceGoals: ['bruke verbet sein'] },
    { id: 'tysk-1-10-2', number: '10.2', title: 'Das Verb haben - Verbet å ha', description: 'Bøyning av haben.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Verb haben', 'Bøyning'], competenceGoals: ['bruke verbet haben'] },
    { id: 'tysk-1-10-3', number: '10.3', title: 'Regelmäßige Verben - Regelmessige verb', description: 'Bøye regelmessige verb.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Verb', 'Presens', 'Bøyning'], competenceGoals: ['bøye regelmessige verb'] },
    { id: 'tysk-1-10-4', number: '10.4', title: 'Wiederholung - Repetisjon', description: 'Repetisjon av nivå 1.', estimatedMinutes: 50, exerciseCount: 10, topics: ['Repetisjon', 'Grammatikk'], competenceGoals: ['mestre grunnleggende tysk'] },
    // Kapittel 11: Den tysktalende verden
    { id: 'tysk-1-11-1', number: '11.1', title: 'Die DACH-Länder - DACH-landene', description: 'Lær om de tysktalende landene: Tyskland, Østerrike, Sveits og flere.', estimatedMinutes: 45, exerciseCount: 5, topics: ['DACH-land', 'Geografi', 'Hovedsteder'], competenceGoals: ['utforske geografi i tysktalende områder'] },
    { id: 'tysk-1-11-2', number: '11.2', title: 'Österreich - Østerrike', description: 'Lær om Østerrike - Alpene, Wien, Salzburg og Wiener Schnitzel.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Østerrike', 'Wien', 'Kultur'], competenceGoals: ['utforske geografi i tysktalende områder'] },
    { id: 'tysk-1-11-3', number: '11.3', title: 'Die Schweiz - Sveits', description: 'Lær om Sveits - fire språk, sjokolade, ost og nøytralitet.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Sveits', 'Flerspråklighet', 'Kultur'], competenceGoals: ['utforske geografi i tysktalende områder'] },
    { id: 'tysk-1-11-4', number: '11.4', title: 'Dialekte und Varietäten - Dialekter og varianter', description: 'Lær om forskjellene mellom Hochdeutsch, østerriksk og sveitsisk tysk.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Dialekter', 'Hochdeutsch', 'Varianter'], competenceGoals: ['utforske geografi i tysktalende områder'] },
    // Kapittel 12: Kunst og kultur
    { id: 'tysk-1-12-1', number: '12.1', title: 'Deutsche Musik - Tysk musikk', description: 'Lær om berømt tysk musikk fra Beethoven til Rammstein.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Musikk', 'Beethoven', 'Nena'], competenceGoals: ['utforske kunstneriske og kulturelle uttrykk'] },
    { id: 'tysk-1-12-2', number: '12.2', title: 'Deutsches Kino - Tysk film', description: 'Lær om berømte tyske filmer og filmhistorie.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Film', 'Kino', 'Fritz Lang'], competenceGoals: ['utforske kunstneriske og kulturelle uttrykk'] },
    { id: 'tysk-1-12-3', number: '12.3', title: 'Comics und Literatur - Tegneserier og litteratur', description: 'Lær om tysk tegneserietradisjon og litteratur.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Tegneserier', 'Eventyr', 'Grimm'], competenceGoals: ['utforske kunstneriske og kulturelle uttrykk'] },
    { id: 'tysk-1-12-4', number: '12.4', title: 'Feste und Traditionen - Høytider og tradisjoner', description: 'Lær om tyske høytider: Oktoberfest, jul og karneval.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Høytider', 'Oktoberfest', 'Jul'], competenceGoals: ['utforske kunstneriske og kulturelle uttrykk'] },
    // Kapittel 13: Autentiske tekster
    { id: 'tysk-1-13-1', number: '13.1', title: 'Speisekarten lesen - Lese menyer', description: 'Lær å lese tyske restaurantmenyer.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Meny', 'Restaurant', 'Matvokabular'], competenceGoals: ['lese og forstå enkle autentiske tekster på tysk'] },
    { id: 'tysk-1-13-2', number: '13.2', title: 'Fahrpläne lesen - Lese rutetabeller', description: 'Lær å lese tyske togrutetabeller fra Deutsche Bahn.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Rutetabeller', 'Deutsche Bahn', 'Reise'], competenceGoals: ['lese og forstå enkle autentiske tekster på tysk'] },
    { id: 'tysk-1-13-3', number: '13.3', title: 'Kleinanzeigen - Småannonser', description: 'Lær å lese og forstå tyske småannonser.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Småannonser', 'Forkortelser', 'Bolig'], competenceGoals: ['lese og forstå enkle autentiske tekster på tysk'] },
    { id: 'tysk-1-13-4', number: '13.4', title: 'Gedichte und Lieder - Dikt og sanger', description: 'Les enkle tyske dikt og sangtekster.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Dikt', 'Sanger', 'Poesi'], competenceGoals: ['lese og forstå enkle autentiske tekster på tysk'] },
    // Kapittel 14: Muntlig kommunikasjon
    { id: 'tysk-1-14-1', number: '14.1', title: 'Die Aussprache - Uttale', description: 'Lær om tysk uttale, omlyds-bokstaver og spesielle lyder.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Uttale', 'Umlaute', 'ch-Laut'], competenceGoals: ['bruke regler for uttale for å kommunisere tydelig på tysk'] },
    { id: 'tysk-1-14-2', number: '14.2', title: 'Dialogtraining - Samtaletrening', description: 'Øv på å føre samtaler i vanlige hverdagssituasjoner.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Samtale', 'Kafé', 'Butikk'], competenceGoals: ['delta i enkle samtaler om hverdagslige emner på tysk'] },
    { id: 'tysk-1-14-3', number: '14.3', title: 'Kurzvorträge - Korte presentasjoner', description: 'Lær å holde korte presentasjoner på tysk.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Presentasjon', 'Struktur', 'Bindeord'], competenceGoals: ['holde korte presentasjoner på tysk om kjente emner'] },
    { id: 'tysk-1-14-4', number: '14.4', title: 'Rollenspiele - Rollespill', description: 'Øv på å bruke tysk i ulike rollespill-situasjoner.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Rollespill', 'Togstasjon', 'Hotell', 'Lege'], competenceGoals: ['bruke tysk i ulike hverdagssituasjoner gjennom rollespill'] },
    // Kapittel 15: Skriftlig kommunikasjon
    { id: 'tysk-1-15-1', number: '15.1', title: 'E-Mails und Briefe - E-poster og brev', description: 'Lær å skrive formelle og uformelle e-poster på tysk.', estimatedMinutes: 45, exerciseCount: 6, topics: ['E-post', 'Brev', 'Formelt/uformelt'], competenceGoals: ['skrive enkle e-poster og brev på tysk'] },
    { id: 'tysk-1-15-2', number: '15.2', title: 'Postkarten und Nachrichten - Postkort og meldinger', description: 'Lær å skrive postkort og korte meldinger på tysk.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Postkort', 'Meldinger', 'SMS'], competenceGoals: ['skrive korte tekster som postkort og meldinger på tysk'] },
    { id: 'tysk-1-15-3', number: '15.3', title: 'Kurze Texte schreiben - Skrive korte tekster', description: 'Lær å skrive beskrivelser, blogginnlegg og dagboktekster.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Beskrivelser', 'Dagbok', 'Bindeord'], competenceGoals: ['skrive korte sammenhengende tekster på tysk'] },
    { id: 'tysk-1-15-4', number: '15.4', title: 'Kreatives Schreiben - Kreativ skriving', description: 'Utforsk kreativ skriving: dikt, korte historier og fantasitekster.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Kreativ skriving', 'Elfchen', 'Historier'], competenceGoals: ['skrive kreative tekster på tysk'] },
    // Kapittel 16: Grammatikk og strategier
    { id: 'tysk-1-16-1', number: '16.1', title: 'Grammatiküberblick - Grammatikkoversikt', description: 'Repetisjon av all grammatikk: artikler, verb, kasus og ordstilling.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Artikler', 'Verb', 'Kasus', 'Ordstilling'], competenceGoals: ['beherske grunnleggende tysk grammatikk'] },
    { id: 'tysk-1-16-2', number: '16.2', title: 'Wortbildung - Orddannelse', description: 'Lær om sammensatte ord, forstavelser og endelser.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Sammensatte ord', 'Forstavelser', 'Endelser'], competenceGoals: ['forstå og danne sammensatte ord på tysk'] },
    { id: 'tysk-1-16-3', number: '16.3', title: 'Lernstrategien - Læringsstrategier', description: 'Effektive strategier for å lære tysk bedre.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Læringsstrategier', 'Ordlæring', 'Lesing'], competenceGoals: ['bruke ulike læringsstrategier for å utvikle egne tyskferdigheter'] },
    { id: 'tysk-1-16-4', number: '16.4', title: 'Selbstevaluation - Egenvurdering', description: 'Vurder dine egne tyskferdigheter og sett mål for videre læring.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Egenvurdering', 'Læringsmål', 'Refleksjon'], competenceGoals: ['reflektere over egen språklæring og sette realistiske mål'] },
  ],
};

// ============================================================================

export const COURSE_TYSK_2: TextbookCourse = {
  id: 'tysk-2',
  title: 'Tysk nivå 2',
  level: 'VG2',
  description: 'Tysk 2 - utvidet grammatikk, litteratur og kultur',
  curriculum: 'LK20',
  icon: '🇩🇪',
  coverImage: '/images/subjects/tysk-2-hero.webp',
  chapters: [
    // Kapittel 1: Perfekt und Präteritum (Fortidsformer)
    { id: 'tysk-2-1-1', number: '1.1', title: 'Das Perfekt - dannelse og bruk', description: 'Perfektum med haben og sein.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Perfekt', 'haben', 'sein'], competenceGoals: ['bruke tyske fortidsformer', 'kommunisere om personlige opplevelser'] },
    { id: 'tysk-2-1-2', number: '1.2', title: 'Unregelmäßige Verben im Perfekt', description: 'Sterke verb i perfektum.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Sterke verb', 'Partisipp'], competenceGoals: ['bruke uregelmessige verb korrekt'] },
    { id: 'tysk-2-1-3', number: '1.3', title: 'Das Präteritum - når og hvorfor', description: 'Preteritum i skriftspråk.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Präteritum', 'Skriftspråk'], competenceGoals: ['forstå og bruke preteritum'] },
    { id: 'tysk-2-1-4', number: '1.4', title: 'Erzählen in der Vergangenheit', description: 'Fortellende tekst i fortid.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Fortelling', 'Narrativ'], competenceGoals: ['skrive sammenhengende tekster i fortid'] },
    // Kapittel 2: Konjunktiv II (Irrealis)
    { id: 'tysk-2-2-1', number: '2.1', title: 'Höflichkeit und Wünsche', description: 'Høflighet og ønsker med Konjunktiv II.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Konjunktiv II', 'Høflighet'], competenceGoals: ['uttrykke ønsker og muligheter', 'kommunisere høflig'] },
    { id: 'tysk-2-2-2', number: '2.2', title: 'Irreale Bedingungen', description: 'Betingelsessetninger med wenn.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Betingelser', 'wenn-setninger'], competenceGoals: ['uttrykke hypotetiske situasjoner'] },
    { id: 'tysk-2-2-3', number: '2.3', title: 'Ratschläge geben', description: 'Gi råd med Konjunktiv II.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Råd', 'sollte', 'würde'], competenceGoals: ['gi råd og anbefalinger'] },
    { id: 'tysk-2-2-4', number: '2.4', title: 'Der Konjunktiv in der Praxis', description: 'Konjunktiv i daglig bruk.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Praktisk bruk', 'Idiomer'], competenceGoals: ['bruke konjunktiv naturlig'] },
    // Kapittel 3: Passiv und Relativsätze
    { id: 'tysk-2-3-1', number: '3.1', title: 'Das Passiv - dannelse i alle tider', description: 'Passiv med werden.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Passiv', 'werden'], competenceGoals: ['bruke passiv og relativsetninger'] },
    { id: 'tysk-2-3-2', number: '3.2', title: 'Passiv im Alltag', description: 'Passiv i hverdagstekster.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Passiv', 'Hverdagsspråk'], competenceGoals: ['forstå passiv i autentiske tekster'] },
    { id: 'tysk-2-3-3', number: '3.3', title: 'Relativsätze - alle kasus', description: 'Relativsetninger med der/die/das.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Relativsetninger', 'Kasus'], competenceGoals: ['konstruere komplekse setninger'] },
    { id: 'tysk-2-3-4', number: '3.4', title: 'Komplexe Satzstrukturen', description: 'Avanserte setningsstrukturer.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Leddsetninger', 'Struktur'], competenceGoals: ['skrive varierte og komplekse setninger'] },
    // Kapittel 4: Adjektivdeklination
    { id: 'tysk-2-4-1', number: '4.1', title: 'Starke Deklination', description: 'Adjektiv uten artikkel.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Adjektiv', 'Sterk bøyning'], competenceGoals: ['bøye adjektiver korrekt'] },
    { id: 'tysk-2-4-2', number: '4.2', title: 'Schwache Deklination', description: 'Adjektiv med bestemt artikkel.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Adjektiv', 'Svak bøyning'], competenceGoals: ['bøye adjektiver med bestemt artikkel'] },
    { id: 'tysk-2-4-3', number: '4.3', title: 'Gemischte Deklination', description: 'Adjektiv med ubestemt artikkel.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Adjektiv', 'Blandet bøyning'], competenceGoals: ['bøye adjektiver med ubestemt artikkel'] },
    { id: 'tysk-2-4-4', number: '4.4', title: 'Adjektive in Beschreibungen', description: 'Beskrivende tekster med adjektiv.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Beskrivelser', 'Tekstproduksjon'], competenceGoals: ['skrive beskrivende tekster'] },
    // Kapittel 5: Deutsche Literatur und Medien
    { id: 'tysk-2-5-1', number: '5.1', title: 'Klassiker der deutschen Literatur', description: 'Goethe, Schiller og andre klassikere.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Klassikere', 'Goethe', 'Schiller'], competenceGoals: ['lese tysk litteratur', 'utforske kulturelle forhold'] },
    { id: 'tysk-2-5-2', number: '5.2', title: 'Moderne Autoren und Bücher', description: 'Moderne tysk litteratur.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Moderne litteratur', 'Samtidsforfattere'], competenceGoals: ['lese og forstå moderne tekster'] },
    { id: 'tysk-2-5-3', number: '5.3', title: 'Film und Fernsehen', description: 'Tysk film og TV.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Film', 'Medier'], competenceGoals: ['forstå tysk mediekultur'] },
    { id: 'tysk-2-5-4', number: '5.4', title: 'Literarische Texte lesen und verstehen', description: 'Analyse av litterære tekster.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Tekstanalyse', 'Leseforståelse'], competenceGoals: ['analysere litterære tekster'] },
    // Kapittel 6: Geschichte und Politik
    { id: 'tysk-2-6-1', number: '6.1', title: 'Deutsche Geschichte im 20. Jahrhundert', description: 'Det 20. århundrets historie.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Historie', '1900-tallet'], competenceGoals: ['kjenne tysk historie', 'reflektere over historiske hendelser'] },
    { id: 'tysk-2-6-2', number: '6.2', title: 'Die Teilung und Wiedervereinigung', description: 'Delingen og gjenforeningen.', estimatedMinutes: 45, exerciseCount: 8, topics: ['DDR', 'BRD', 'Gjenforening'], competenceGoals: ['forstå delingen av Tyskland'] },
    { id: 'tysk-2-6-3', number: '6.3', title: 'Das politische System Deutschlands', description: 'Tysk politisk system.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Politikk', 'Demokrati'], competenceGoals: ['forstå tysk politikk'] },
    { id: 'tysk-2-6-4', number: '6.4', title: 'Deutschland in Europa und der Welt', description: 'Tyskland i Europa og verden.', estimatedMinutes: 45, exerciseCount: 8, topics: ['EU', 'Internasjonal'], competenceGoals: ['forstå Tysklands rolle internasjonalt'] },
    // Kapittel 7: Kultur und Gesellschaft
    { id: 'tysk-2-7-1', number: '7.1', title: 'Feste und Traditionen', description: 'Tyske høytider og tradisjoner.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Høytider', 'Tradisjoner'], competenceGoals: ['beskrive tysk kultur', 'sammenligne tradisjoner'] },
    { id: 'tysk-2-7-2', number: '7.2', title: 'Musik und Kunst', description: 'Tysk musikk og kunst.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Musikk', 'Kunst'], competenceGoals: ['kjenne til tysk kunst og musikk'] },
    { id: 'tysk-2-7-3', number: '7.3', title: 'Sport und Freizeit', description: 'Sport og fritid i Tyskland.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Sport', 'Fritid'], competenceGoals: ['kommunisere om fritidsaktiviteter'] },
    { id: 'tysk-2-7-4', number: '7.4', title: 'Alltagskultur und Gemütlichkeit', description: 'Hverdagskultur og hygge.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Hverdagskultur', 'Gemütlichkeit'], competenceGoals: ['forstå tysk hverdagskultur'] },
    // Kapittel 8: Umwelt und Nachhaltigkeit
    { id: 'tysk-2-8-1', number: '8.1', title: 'Umweltprobleme und Klimawandel', description: 'Miljøproblemer og klimaendringer.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Miljø', 'Klima'], competenceGoals: ['diskutere miljø og teknologi', 'uttrykke og begrunne egne meninger'] },
    { id: 'tysk-2-8-2', number: '8.2', title: 'Die deutsche Energiewende', description: 'Energiomstillingen i Tyskland.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Energi', 'Bærekraft'], competenceGoals: ['forstå Tysklands energipolitikk'] },
    { id: 'tysk-2-8-3', number: '8.3', title: 'Nachhaltigkeit im Alltag', description: 'Bærekraft i hverdagen.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Bærekraft', 'Hverdagsliv'], competenceGoals: ['kommunisere om bærekraftige valg'] },
    { id: 'tysk-2-8-4', number: '8.4', title: 'Argumentieren und Diskutieren', description: 'Argumentere og diskutere.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Argumentasjon', 'Diskusjon'], competenceGoals: ['argumentere og diskutere på tysk'] },
    // Kapittel 9: Beruf und Zukunft
    { id: 'tysk-2-9-1', number: '9.1', title: 'Ausbildung und Studium', description: 'Utdanning i Tyskland.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Utdanning', 'Studier'], competenceGoals: ['kommunisere i arbeidssammenheng', 'forstå tysk utdanningssystem'] },
    { id: 'tysk-2-9-2', number: '9.2', title: 'Bewerbung und Lebenslauf', description: 'Jobbsøknad og CV.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Jobbsøknad', 'CV'], competenceGoals: ['skrive formelle tekster'] },
    { id: 'tysk-2-9-3', number: '9.3', title: 'Die deutsche Wirtschaft', description: 'Tysk økonomi og næringsliv.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Økonomi', 'Næringsliv'], competenceGoals: ['forstå tysk økonomi'] },
    { id: 'tysk-2-9-4', number: '9.4', title: 'Zukunftspläne ausdrücken', description: 'Uttrykke fremtidsplaner.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Fremtid', 'Planer'], competenceGoals: ['snakke om fremtidsplaner'] },
    // Kapittel 10: Fortgeschrittene Kommunikation
    { id: 'tysk-2-10-1', number: '10.1', title: 'Idiome und Redewendungen', description: 'Tyske idiomer og uttrykk.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Idiomer', 'Uttrykk'], competenceGoals: ['kommunisere nyansert', 'forstå idiomer'] },
    { id: 'tysk-2-10-2', number: '10.2', title: 'Modalpartikeln verstehen', description: 'Forstå modalpartikler.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Modalpartikler', 'Nyanser'], competenceGoals: ['forstå og bruke modalpartikler'] },
    { id: 'tysk-2-10-3', number: '10.3', title: 'Höflichkeitsstufen und Register', description: 'Høflighetsnivåer og register.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Høflighet', 'Register'], competenceGoals: ['tilpasse språket til situasjonen'] },
    { id: 'tysk-2-10-4', number: '10.4', title: 'Interkulturelle Kommunikation', description: 'Interkulturell kommunikasjon.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Interkulturell', 'Kommunikasjon'], competenceGoals: ['reflektere over kulturelle forskjeller'] },
  ],
};

// ============================================================================

export const COURSE_TYSK_3: TextbookCourse = {
  id: 'tysk-3',
  title: 'Tysk nivå 3',
  level: 'VG3',
  description: 'Tysk 3 - avansert grammatikk, litteratur og samfunn',
  curriculum: 'LK20',
  icon: '🇦🇹',
  coverImage: '/images/subjects/tysk-3-hero.webp',
  chapters: [
    // Kapittel 1: Konjunktiv I (Indirekte tale)
    { id: 'tysk-3-1-1', number: '1.1', title: 'Konjunktiv I Grundlagen', description: 'Grunnleggende om Konjunktiv I.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Konjunktiv I', 'Dannelse'], competenceGoals: ['forstå Konjunktiv I'] },
    { id: 'tysk-3-1-2', number: '1.2', title: 'Indirekte Rede im Text', description: 'Indirekte tale i tekst.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Indirekte tale', 'Tekst'], competenceGoals: ['bruke indirekte tale'] },
    { id: 'tysk-3-1-3', number: '1.3', title: 'Zeitenwechsel', description: 'Tidsendringer i indirekte tale.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Tider', 'Transformasjon'], competenceGoals: ['håndtere tidsendringer'] },
    { id: 'tysk-3-1-4', number: '1.4', title: 'Journalistische Texte', description: 'Journalistisk bruk av Konjunktiv I.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Journalistikk', 'Nyheter'], competenceGoals: ['forstå journalistisk stil'] },
    // Kapittel 2: Komplexe Sätze
    { id: 'tysk-3-2-1', number: '2.1', title: 'Nebensätze', description: 'Leddsetninger med ulike konjunksjoner.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Leddsetninger', 'Konjunksjoner'], competenceGoals: ['bygge komplekse setninger'] },
    { id: 'tysk-3-2-2', number: '2.2', title: 'Partizipialkonstruktionen', description: 'Partisippkonstruksjoner.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Partisipp', 'Konstruksjoner'], competenceGoals: ['bruke partisippkonstruksjoner'] },
    { id: 'tysk-3-2-3', number: '2.3', title: 'Infinitivkonstruktionen', description: 'Infinitivkonstruksjoner.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Infinitiv', 'um zu', 'ohne zu'], competenceGoals: ['bruke infinitivkonstruksjoner'] },
    { id: 'tysk-3-2-4', number: '2.4', title: 'Satzverkettung', description: 'Setningskobling og tekstflyt.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Tekstflyt', 'Koherens'], competenceGoals: ['skrive sammenhengende tekst'] },
    // Kapittel 3: Stilistik und Rhetorik
    { id: 'tysk-3-3-1', number: '3.1', title: 'Stilmittel erkennen', description: 'Gjenkjenne stilistiske virkemidler.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Stilmidler', 'Analyse'], competenceGoals: ['identifisere stilmidler'] },
    { id: 'tysk-3-3-2', number: '3.2', title: 'Rhetorische Figuren', description: 'Retoriske figurer.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Retorikk', 'Figurer'], competenceGoals: ['bruke retoriske figurer'] },
    { id: 'tysk-3-3-3', number: '3.3', title: 'Argumentationsstrategien', description: 'Argumentasjonsstrategier.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Argumentasjon', 'Strategier'], competenceGoals: ['argumentere effektivt'] },
    { id: 'tysk-3-3-4', number: '3.4', title: 'Textsorten und Register', description: 'Teksttyper og register.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Teksttyper', 'Register'], competenceGoals: ['tilpasse språk til kontekst'] },
    // Kapittel 4: Klassische Literatur
    { id: 'tysk-3-4-1', number: '4.1', title: 'Weimarer Klassik', description: 'Goethe og Schiller.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Goethe', 'Schiller', 'Klassikk'], competenceGoals: ['analysere klassisk litteratur'] },
    { id: 'tysk-3-4-2', number: '4.2', title: 'Romantik', description: 'Tysk romantikk.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Romantikk', 'Novalis', 'Heine'], competenceGoals: ['forstå romantisk litteratur'] },
    { id: 'tysk-3-4-3', number: '4.3', title: 'Realismus', description: 'Realisme og naturalisme.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Realisme', 'Fontane'], competenceGoals: ['analysere realistisk litteratur'] },
    { id: 'tysk-3-4-4', number: '4.4', title: 'Literarische Analyse', description: 'Litterær analyse.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Analyse', 'Metode'], competenceGoals: ['utføre litterær analyse'] },
    // Kapittel 5: Moderne Literatur und Kultur
    { id: 'tysk-3-5-1', number: '5.1', title: 'Literatur des 20. Jahrhunderts', description: 'Kafka, Mann, Brecht.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Kafka', 'Mann', 'Modernisme'], competenceGoals: ['forstå modernistisk litteratur'] },
    { id: 'tysk-3-5-2', number: '5.2', title: 'Nachkriegsliteratur', description: 'Etterkrigslitteratur.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Böll', 'Grass', 'Trümmerliteratur'], competenceGoals: ['analysere etterkrigslitteratur'] },
    { id: 'tysk-3-5-3', number: '5.3', title: 'Gegenwartsliteratur', description: 'Samtidslitteratur.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Samtidslitteratur', 'Nye stemmer'], competenceGoals: ['lese tysk samtidslitteratur'] },
    { id: 'tysk-3-5-4', number: '5.4', title: 'Film und Theater', description: 'Tysk film og teater.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Film', 'Teater', 'Kultur'], competenceGoals: ['analysere tysk film og teater'] },
    // Kapittel 6: Deutsche Geschichte vertieft
    { id: 'tysk-3-6-1', number: '6.1', title: 'Kaiserreich und Erster Weltkrieg', description: 'Keisertiden og første verdenskrig.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Keisertid', '1914-1918'], competenceGoals: ['forstå tysk historie før 1918'] },
    { id: 'tysk-3-6-2', number: '6.2', title: 'Weimarer Republik', description: 'Weimarrepublikken og nazismen.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Weimar', 'Nazisme', 'Holocaust'], competenceGoals: ['analysere mellomkrigstiden'] },
    { id: 'tysk-3-6-3', number: '6.3', title: 'Nachkriegszeit', description: 'Etterkrigstid og den kalde krigen.', estimatedMinutes: 45, exerciseCount: 8, topics: ['DDR', 'BRD', 'Kald krig'], competenceGoals: ['forstå etterkrigstidens Tyskland'] },
    { id: 'tysk-3-6-4', number: '6.4', title: 'Wiedervereinigung bis heute', description: 'Gjenforening til i dag.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Gjenforening', 'Moderne'], competenceGoals: ['forstå moderne tysk historie'] },
    // Kapittel 7: Wirtschaft und Politik
    { id: 'tysk-3-7-1', number: '7.1', title: 'Die deutsche Wirtschaft', description: 'Tysk økonomi i dybden.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Økonomi', 'Industri', 'Handel'], competenceGoals: ['forstå tysk økonomi'] },
    { id: 'tysk-3-7-2', number: '7.2', title: 'Politisches System', description: 'Det politiske systemet.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Bundestag', 'Partier', 'Valg'], competenceGoals: ['forstå tysk politikk'] },
    { id: 'tysk-3-7-3', number: '7.3', title: 'Deutschland in der EU', description: 'Tyskland i EU.', estimatedMinutes: 45, exerciseCount: 8, topics: ['EU', 'Europa', 'Integrasjon'], competenceGoals: ['forstå Tysklands rolle i EU'] },
    { id: 'tysk-3-7-4', number: '7.4', title: 'Aktuelle Debatten', description: 'Aktuelle politiske debatter.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Aktualitet', 'Debatter'], competenceGoals: ['diskutere aktuelle temaer'] },
    // Kapittel 8: Medien und Journalismus
    { id: 'tysk-3-8-1', number: '8.1', title: 'Deutsche Medienlandschaft', description: 'Tysk medielandskap.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Medier', 'Presse', 'TV'], competenceGoals: ['kjenne tyske medier'] },
    { id: 'tysk-3-8-2', number: '8.2', title: 'Nachrichtensprache', description: 'Nyhetsspråk.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Nyheter', 'Språk', 'Stil'], competenceGoals: ['forstå nyhetsspråk'] },
    { id: 'tysk-3-8-3', number: '8.3', title: 'Meinungsartikel', description: 'Meningsartikler og kommentarer.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Meninger', 'Kommentarer'], competenceGoals: ['analysere meningsartikler'] },
    { id: 'tysk-3-8-4', number: '8.4', title: 'Kritische Medienanalyse', description: 'Kritisk medieanalyse.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Kildekritikk', 'Analyse'], competenceGoals: ['analysere medier kritisk'] },
    // Kapittel 9: Wissenschaft und Akademie
    { id: 'tysk-3-9-1', number: '9.1', title: 'Akademische Texte lesen', description: 'Lese akademiske tekster.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Akademisk', 'Lesing'], competenceGoals: ['lese akademisk tysk'] },
    { id: 'tysk-3-9-2', number: '9.2', title: 'Wissenschaftliches Schreiben', description: 'Vitenskapelig skriving.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Skriving', 'Akademisk'], competenceGoals: ['skrive akademisk'] },
    { id: 'tysk-3-9-3', number: '9.3', title: 'Fachsprache', description: 'Fagspråk.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Fagspråk', 'Terminologi'], competenceGoals: ['forstå fagspråk'] },
    { id: 'tysk-3-9-4', number: '9.4', title: 'Präsentationen', description: 'Holde presentasjoner.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Presentasjon', 'Muntlig'], competenceGoals: ['presentere på tysk'] },
    // Kapittel 10: Prüfungsvorbereitung
    { id: 'tysk-3-10-1', number: '10.1', title: 'Textverständnis', description: 'Øve på tekstforståelse.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Lesing', 'Forståelse'], competenceGoals: ['mestre tekstforståelse'] },
    { id: 'tysk-3-10-2', number: '10.2', title: 'Schriftlicher Ausdruck', description: 'Skriftlig uttrykk.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Skriving', 'Uttrykk'], competenceGoals: ['skrive variert'] },
    { id: 'tysk-3-10-3', number: '10.3', title: 'Mündliche Kommunikation', description: 'Muntlig kommunikasjon.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Muntlig', 'Samtale'], competenceGoals: ['kommunisere muntlig'] },
    { id: 'tysk-3-10-4', number: '10.4', title: 'Wiederholung', description: 'Repetisjon og strategier.', estimatedMinutes: 50, exerciseCount: 10, topics: ['Repetisjon', 'Eksamen'], competenceGoals: ['forberede til eksamen'] },
  ],
};

// ============================================================================

export const COURSE_FRANSK_1: TextbookCourse = {
  id: 'fransk-1',
  title: 'Fransk nivå 1',
  level: 'Nivå 1',
  description: 'Fransk for nybegynnere - hilsener, tall, farger, familie og hverdagsfraser',
  curriculum: 'LK20',
  icon: '🇫🇷',
  coverImage: '/images/subjects/fransk-1-hero.webp',
  chapters: [
    // Kapittel 1: Hilsener og presentasjon
    { id: 'fransk-1-1-1', number: '1.1', title: 'Bonjour! - Hilsener', description: 'Grunnleggende hilsener og uttrykk.', estimatedMinutes: 40, exerciseCount: 4, topics: ['Hilsener', 'Avskjed', 'Høflighetsfraser'], competenceGoals: ['bruke enkle hilsener'] },
    { id: 'fransk-1-1-2', number: '1.2', title: "Je m'appelle... - Presentere seg", description: 'Presentere seg selv.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Presentasjon', 'Verb être/s\'appeler'], competenceGoals: ['presentere seg selv'] },
    { id: 'fransk-1-1-3', number: '1.3', title: "D'où viens-tu? - Hvor kommer du fra", description: 'Snakke om nasjonalitet og hjemsted.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Land', 'Nasjonalitet', 'Verb venir'], competenceGoals: ['fortelle hvor man kommer fra'] },
    { id: 'fransk-1-1-4', number: '1.4', title: 'Premières conversations - Første samtaler', description: 'Øve på enkle samtaler.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Dialog', 'Spørsmål', 'Svar'], competenceGoals: ['føre enkle samtaler'] },
    // Kapittel 2: Tall og farger
    { id: 'fransk-1-2-1', number: '2.1', title: 'Les nombres 0-20 - Tall 0-20', description: 'Lær tallene 0-20.', estimatedMinutes: 40, exerciseCount: 4, topics: ['Tall 0-20', 'Uttale'], competenceGoals: ['telle til 20'] },
    { id: 'fransk-1-2-2', number: '2.2', title: 'Les nombres 21-100 - Tall 21-100', description: 'Lær tallene 21-100.', estimatedMinutes: 40, exerciseCount: 4, topics: ['Tall 21-100', 'Alder'], competenceGoals: ['telle til 100'] },
    { id: 'fransk-1-2-3', number: '2.3', title: 'Les couleurs - Fargene', description: 'Lær fargene på fransk.', estimatedMinutes: 35, exerciseCount: 4, topics: ['Farger', 'Adjektivbøyning'], competenceGoals: ['beskrive ting med farger'] },
    { id: 'fransk-1-2-4', number: '2.4', title: 'Faire les courses avec des nombres - Handle med tall', description: 'Bruke tall i praksis.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Priser', 'Shopping', 'Euro'], competenceGoals: ['bruke tall i hverdagen'] },
    // Kapittel 3: Familie og beskrivelser
    { id: 'fransk-1-3-1', number: '3.1', title: 'La famille - Familien', description: 'Ord for familiemedlemmer.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Familie', 'Slektninger'], competenceGoals: ['fortelle om familien'] },
    { id: 'fransk-1-3-2', number: '3.2', title: 'Les adjectifs possessifs - Eiendomsord', description: 'Mon, ma, mes, ton, ta, tes.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Eiendomsord', 'Grammatikk'], competenceGoals: ['bruke eiendomsord'] },
    { id: 'fransk-1-3-3', number: '3.3', title: 'Décrire les personnes - Beskrive personer', description: 'Utseende og personlighet.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Utseende', 'Personlighet'], competenceGoals: ['beskrive mennesker'] },
    { id: 'fransk-1-3-4', number: '3.4', title: 'Présenter ma famille - Presentere familien', description: 'Fortelle om familien din.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Presentasjon', 'Familie'], competenceGoals: ['presentere familien'] },
    // Kapittel 4: Tid og kalender
    { id: 'fransk-1-4-1', number: '4.1', title: "L'heure - Klokkeslettet", description: 'Si hva klokken er.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Klokkeslett', 'Tid'], competenceGoals: ['si hva klokken er'] },
    { id: 'fransk-1-4-2', number: '4.2', title: 'Les jours de la semaine - Ukedagene', description: 'Lær ukedagene.', estimatedMinutes: 40, exerciseCount: 4, topics: ['Ukedager', 'Planer'], competenceGoals: ['bruke ukedagene'] },
    { id: 'fransk-1-4-3', number: '4.3', title: 'Les mois et les saisons - Måneder og årstider', description: 'Måneder og årstider.', estimatedMinutes: 40, exerciseCount: 4, topics: ['Måneder', 'Årstider', 'Dato'], competenceGoals: ['snakke om dato og årstider'] },
    { id: 'fransk-1-4-4', number: '4.4', title: 'Ma journée - Min dagsrutine', description: 'Fortelle om dagen din.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Dagsrutine', 'Refleksive verb'], competenceGoals: ['beskrive daglige rutiner'] },
    // Kapittel 5: Mat og restaurant
    { id: 'fransk-1-5-1', number: '5.1', title: 'Manger et boire - Mat og drikke', description: 'Ord for mat og drikke.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Mat', 'Drikke', 'Delingsartikler'], competenceGoals: ['snakke om mat'] },
    { id: 'fransk-1-5-2', number: '5.2', title: 'Au restaurant - På restauranten', description: 'Bestille mat på restaurant.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Restaurant', 'Bestilling'], competenceGoals: ['bestille mat'] },
    { id: 'fransk-1-5-3', number: '5.3', title: 'Au supermarché - På butikken', description: 'Handle dagligvarer.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Butikk', 'Varer', 'Mengder'], competenceGoals: ['handle på butikken'] },
    { id: 'fransk-1-5-4', number: '5.4', title: 'La cuisine française - Fransk mat', description: 'Typisk fransk mat og kultur.', estimatedMinutes: 40, exerciseCount: 4, topics: ['Fransk mat', 'Kultur'], competenceGoals: ['kjenne til fransk matkultur'] },
    // Kapittel 6: Hjem og bolig
    { id: 'fransk-1-6-1', number: '6.1', title: 'La maison - Huset', description: 'Rom i et hus.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Hus', 'Rom'], competenceGoals: ['beskrive et hus'] },
    { id: 'fransk-1-6-2', number: '6.2', title: 'Les meubles - Møblene', description: 'Møbler og gjenstander.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Møbler', 'Preposisjoner'], competenceGoals: ['snakke om møbler'] },
    { id: 'fransk-1-6-3', number: '6.3', title: 'Ma chambre - Rommet mitt', description: 'Beskrive rommet ditt.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Eget rom', 'Beskrivelse'], competenceGoals: ['beskrive eget rom'] },
    { id: 'fransk-1-6-4', number: '6.4', title: 'Habiter en France - Bo i Frankrike', description: 'Boformer i Frankrike.', estimatedMinutes: 40, exerciseCount: 4, topics: ['Bolig', 'Kultur'], competenceGoals: ['kjenne til fransk bokultur'] },
    // Kapittel 7: Klær og shopping
    { id: 'fransk-1-7-1', number: '7.1', title: 'Les vêtements - Klærne', description: 'Ord for klær.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Klær', 'Plagg'], competenceGoals: ['snakke om klær'] },
    { id: 'fransk-1-7-2', number: '7.2', title: 'Au magasin de vêtements - I klesbutikken', description: 'Handle klær.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Klesbutikk', 'Størrelser'], competenceGoals: ['handle klær'] },
    { id: 'fransk-1-7-3', number: '7.3', title: 'Couleurs et tailles - Farger og størrelser', description: 'Beskrive klær.', estimatedMinutes: 40, exerciseCount: 4, topics: ['Farger', 'Størrelser', 'Adjektiver'], competenceGoals: ['beskrive klær'] },
    { id: 'fransk-1-7-4', number: '7.4', title: "Qu'est-ce que tu portes? - Hva har du på deg?", description: 'Snakke om antrekk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Antrekk', 'Verb porter'], competenceGoals: ['beskrive antrekk'] },
    // Kapittel 8: Skole og yrker
    { id: 'fransk-1-8-1', number: '8.1', title: "L'école - Skolen", description: 'Skole og utdanning.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Skole', 'Klasserom'], competenceGoals: ['snakke om skolen'] },
    { id: 'fransk-1-8-2', number: '8.2', title: 'Les matières scolaires - Skolefagene', description: 'Fag på skolen.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Fag', 'Timeplan'], competenceGoals: ['snakke om skolefag'] },
    { id: 'fransk-1-8-3', number: '8.3', title: 'Les métiers - Yrker', description: 'Ulike yrker.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Yrker', 'Arbeid'], competenceGoals: ['snakke om yrker'] },
    { id: 'fransk-1-8-4', number: '8.4', title: 'Que veux-tu devenir? - Hva vil du bli?', description: 'Fremtidsdrømmer.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Fremtid', 'Verb vouloir'], competenceGoals: ['uttrykke fremtidsønsker'] },
    // Kapittel 9: Reise og transport
    { id: 'fransk-1-9-1', number: '9.1', title: 'Les transports - Transportmidler', description: 'Ulike transportmidler.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Transport', 'Verb prendre'], competenceGoals: ['snakke om transport'] },
    { id: 'fransk-1-9-2', number: '9.2', title: 'En ville - I byen', description: 'Steder i byen.', estimatedMinutes: 45, exerciseCount: 4, topics: ['By', 'Steder', 'Veibeskrivelse'], competenceGoals: ['orientere seg i byen'] },
    { id: 'fransk-1-9-3', number: '9.3', title: 'Planifier un voyage - Planlegge en reise', description: 'Planlegge reiser.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Reiseplanlegging', 'Billetter'], competenceGoals: ['planlegge en reise'] },
    { id: 'fransk-1-9-4', number: '9.4', title: "À l'hôtel - På hotellet", description: 'Booke og bo på hotell.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Hotell', 'Booking'], competenceGoals: ['kommunisere på hotell'] },
    // Kapittel 10: Verb og grammatikk
    { id: 'fransk-1-10-1', number: '10.1', title: 'Le verbe être - Verbet å være', description: 'Bøyning av être.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Verb être', 'Bøyning'], competenceGoals: ['bruke verbet être'] },
    { id: 'fransk-1-10-2', number: '10.2', title: 'Le verbe avoir - Verbet å ha', description: 'Bøyning av avoir.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Verb avoir', 'Uttrykk'], competenceGoals: ['bruke verbet avoir'] },
    { id: 'fransk-1-10-3', number: '10.3', title: 'Les verbes réguliers - Regelmessige verb', description: 'Bøye regelmessige verb.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Verb -er/-ir', 'Presens'], competenceGoals: ['bøye regelmessige verb'] },
    { id: 'fransk-1-10-4', number: '10.4', title: 'Révision - Repetisjon', description: 'Repetisjon av nivå 1.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Repetisjon', 'Grammatikk'], competenceGoals: ['mestre grunnleggende fransk'] },
    // Kapittel 11: Den frankofone verden
    { id: 'fransk-1-11-1', number: '11.1', title: 'La Francophonie - Den frankofone verden', description: 'Hvor i verden snakkes fransk?', estimatedMinutes: 45, exerciseCount: 4, topics: ['Frankofoni', 'Geografi'], competenceGoals: ['utforske geografi i fransktalende områder'] },
    { id: 'fransk-1-11-2', number: '11.2', title: 'La Belgique et la Suisse - Belgia og Sveits', description: 'Fransktalende land i Europa.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Belgia', 'Sveits', 'Europa'], competenceGoals: ['utforske levemåter og tradisjoner'] },
    { id: 'fransk-1-11-3', number: '11.3', title: 'Le Québec et le Canada - Québec og Canada', description: 'Fransk i Nord-Amerika.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Québec', 'Canada', 'Dialekt'], competenceGoals: ['utforske levemåter og tradisjoner'] },
    { id: 'fransk-1-11-4', number: '11.4', title: "L'Afrique francophone - Det fransktalende Afrika", description: 'Fransktalende land i Afrika.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Afrika', 'Senegal', 'Marokko'], competenceGoals: ['utforske levemåter, tradisjoner og geografi'] },
    // Kapittel 12: Kunst og kultur
    { id: 'fransk-1-12-1', number: '12.1', title: 'La musique francophone - Franskspråklig musikk', description: 'Musikk fra den fransktalende verden.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Musikk', 'Artister', 'Sjangre'], competenceGoals: ['utforske kunstneriske uttrykk'] },
    { id: 'fransk-1-12-2', number: '12.2', title: 'Le cinéma français - Fransk film', description: 'Fransk film og filmhistorie.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Film', 'Cannes', 'Filmhistorie'], competenceGoals: ['utforske kunstneriske uttrykk'] },
    { id: 'fransk-1-12-3', number: '12.3', title: 'La bande dessinée - Tegneserier', description: 'Fransk-belgisk tegneseriekultur.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Tegneserier', 'Tintin', 'Astérix'], competenceGoals: ['utforske kunstneriske uttrykk'] },
    { id: 'fransk-1-12-4', number: '12.4', title: 'Les fêtes et traditions - Høytider og tradisjoner', description: 'Franske høytider og tradisjoner.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Høytider', '14. juli', 'Jul'], competenceGoals: ['utforske tradisjoner'] },
    // Kapittel 13: Autentiske tekster
    { id: 'fransk-1-13-1', number: '13.1', title: 'Lire un menu - Lese en meny', description: 'Forstå en fransk restaurantmeny.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Meny', 'Restaurant', 'Mat'], competenceGoals: ['lese og forstå autentiske tekster'] },
    { id: 'fransk-1-13-2', number: '13.2', title: 'Lire un horaire - Lese rutetabeller', description: 'Forstå togplaner og rutetabeller.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Rutetabell', 'SNCF', 'Tid'], competenceGoals: ['lese og forstå autentiske tekster'] },
    { id: 'fransk-1-13-3', number: '13.3', title: 'Petites annonces - Småannonser', description: 'Lese bolig- og jobbannonser.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Annonser', 'Bolig', 'Jobb'], competenceGoals: ['lese og forstå autentiske tekster'] },
    { id: 'fransk-1-13-4', number: '13.4', title: 'Poèmes et chansons simples - Enkle dikt og sanger', description: 'Lese enkle franske dikt og sanger.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Dikt', 'Sanger', 'Prévert'], competenceGoals: ['lese og forstå tekster', 'utforske kunstneriske uttrykk'] },
    // Kapittel 14: Muntlig kommunikasjon
    { id: 'fransk-1-14-1', number: '14.1', title: 'La prononciation - Uttale', description: 'Franske lyder, stumme bokstaver og liaison.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Uttale', 'Nasalvokaler', 'Liaison'], competenceGoals: ['bruke regler for uttale'] },
    { id: 'fransk-1-14-2', number: '14.2', title: 'Écouter et comprendre - Lytte og forstå', description: 'Lyttestrategier og hjelpeuttrykk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Lytting', 'Strategier', 'Cognater'], competenceGoals: ['lytte til og forstå enkel tale'] },
    { id: 'fransk-1-14-3', number: '14.3', title: 'Parler et présenter - Snakke og presentere', description: 'Muntlige strategier og presentasjoner.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Presentasjon', 'Fyllord', 'Meninger'], competenceGoals: ['muntlig fortelle om dagligliv'] },
    { id: 'fransk-1-14-4', number: '14.4', title: 'Jeux de rôle - Rollespill', description: 'Øve på samtaler gjennom rollespill.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Rollespill', 'Kafé', 'Butikk'], competenceGoals: ['delta i enkle samtaler'] },
    // Kapittel 15: Skriftlig kommunikasjon
    { id: 'fransk-1-15-1', number: '15.1', title: 'Écrire un message - Skrive meldinger', description: 'Uformelle og formelle meldinger.', estimatedMinutes: 45, exerciseCount: 4, topics: ['E-post', 'SMS', 'Formelt/uformelt'], competenceGoals: ['skrive enkle tekster som informerer'] },
    { id: 'fransk-1-15-2', number: '15.2', title: 'Écrire une carte postale - Skrive postkort', description: 'Skrive postkort fra ferien.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Postkort', 'Ferie', 'Vær'], competenceGoals: ['skrive enkle tekster som forteller og beskriver'] },
    { id: 'fransk-1-15-3', number: '15.3', title: 'Mon journal - Dagboka mi', description: 'Skrive dagbok på fransk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Dagbok', 'Følelser', 'Hverdagsliv'], competenceGoals: ['skrive enkle tekster om dagligliv'] },
    { id: 'fransk-1-15-4', number: '15.4', title: 'Décrire une image - Beskrive et bilde', description: 'Beskrive bilder på fransk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Bildebeskrivelse', 'Preposisjoner'], competenceGoals: ['skrive enkle tekster som beskriver'] },
    // Kapittel 16: Grammatikk og læringsstrategier
    { id: 'fransk-1-16-1', number: '16.1', title: 'La négation - Nektelse', description: 'Ne...pas og andre nektelsesformer.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Nektelse', 'Ne...pas', 'Grammatikk'], competenceGoals: ['bruke enkle språklige strukturer'] },
    { id: 'fransk-1-16-2', number: '16.2', title: 'Poser des questions - Stille spørsmål', description: 'Tre måter å stille spørsmål på.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Spørsmål', 'Est-ce que', 'Inversjon'], competenceGoals: ['bruke enkle språklige strukturer'] },
    { id: 'fransk-1-16-3', number: '16.3', title: 'Les articles - Artikler', description: 'Bestemt, ubestemt og delingsartikkel.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Artikler', 'Le/la/les', 'Du/de la'], competenceGoals: ['bruke enkle språklige strukturer'] },
    { id: 'fransk-1-16-4', number: '16.4', title: "Stratégies d'apprentissage - Læringsstrategier", description: 'Strategier for å lære fransk effektivt.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Ordbok', 'Gloselæring', 'Cognater'], competenceGoals: ['bruke relevante læringsstrategier'] },
  ],
};

// ============================================================================

export const COURSE_FRANSK_2: TextbookCourse = {
  id: 'fransk-2',
  title: 'Fransk nivå 2',
  level: 'Nivå 2',
  description: 'Fransk for viderekomne - fortidsformer, subjonctif, pronomen, litteratur og kultur',
  curriculum: 'LK20',
  icon: '🇫🇷',
  coverImage: '/images/subjects/fransk-2-hero.webp',
  chapters: [
    // Kapittel 1: Fortidsformer I
    { id: 'fransk-2-1-1', number: '1.1', title: 'Le passé composé avec avoir - Passé composé med avoir', description: 'Dannelse og bruk med avoir.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Passé composé', 'Avoir'], competenceGoals: ['bruke passé composé med avoir'] },
    { id: 'fransk-2-1-2', number: '1.2', title: 'Le passé composé avec être - Passé composé med être', description: 'Bevegelsesverb og samsvarsbøyning.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Passé composé', 'Être', 'Samsvar'], competenceGoals: ['bruke passé composé med être'] },
    { id: 'fransk-2-1-3', number: '1.3', title: "L'imparfait - Imperfektum", description: 'Dannelse og bruk av imparfait.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Imparfait', 'Beskrivelse'], competenceGoals: ['bruke imparfait'] },
    { id: 'fransk-2-1-4', number: '1.4', title: 'Passé composé vs imparfait', description: 'Når bruke hvilken fortidsform.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Fortidsformer', 'Kontekst'], competenceGoals: ['velge riktig fortidsform'] },
    // Kapittel 2: Futur og kondisjonalis
    { id: 'fransk-2-2-1', number: '2.1', title: 'Le futur simple - Enkel fremtid', description: 'Dannelse og bruk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Futur simple', 'Uregelmessige stammer'], competenceGoals: ['bruke futur simple'] },
    { id: 'fransk-2-2-2', number: '2.2', title: 'Le futur proche - Nær fremtid', description: 'Aller + infinitiv.', estimatedMinutes: 40, exerciseCount: 4, topics: ['Futur proche', 'Tidsuttrykk'], competenceGoals: ['bruke futur proche'] },
    { id: 'fransk-2-2-3', number: '2.3', title: 'Le conditionnel présent - Kondisjonalis', description: 'Dannelse og bruk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Conditionnel', 'Høflighet'], competenceGoals: ['bruke kondisjonalis'] },
    { id: 'fransk-2-2-4', number: '2.4', title: 'Les phrases avec si - Vilkårssetninger', description: 'Si-setninger.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Vilkår', 'Si-setninger'], competenceGoals: ['uttrykke vilkår'] },
    // Kapittel 3: Pronomen
    { id: 'fransk-2-3-1', number: '3.1', title: 'Les pronoms COD - Direkte objektpronomen', description: 'Me, te, le, la, nous, vous, les.', estimatedMinutes: 45, exerciseCount: 4, topics: ['COD', 'Pronomen'], competenceGoals: ['bruke direkte objektpronomen'] },
    { id: 'fransk-2-3-2', number: '3.2', title: 'Les pronoms COI - Indirekte objektpronomen', description: 'Me, te, lui, nous, vous, leur.', estimatedMinutes: 45, exerciseCount: 4, topics: ['COI', 'Pronomen'], competenceGoals: ['bruke indirekte objektpronomen'] },
    { id: 'fransk-2-3-3', number: '3.3', title: 'Y et en - Pronomenene y og en', description: 'Erstatte sted og mengde.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Y', 'En', 'Erstatning'], competenceGoals: ['bruke y og en'] },
    { id: 'fransk-2-3-4', number: '3.4', title: "L'ordre des pronoms - Pronomenrekkefølge", description: 'Doble pronomen og rekkefølge.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Rekkefølge', 'Doble pronomen'], competenceGoals: ['plassere pronomen riktig'] },
    // Kapittel 4: Reise og kultur
    { id: 'fransk-2-4-1', number: '4.1', title: 'Voyager en France - Reise i Frankrike', description: 'Reisevokabular og regioner.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Reise', 'Frankrike'], competenceGoals: ['kommunisere om reise'] },
    { id: 'fransk-2-4-2', number: '4.2', title: 'La culture française au quotidien - Fransk hverdagskultur', description: 'Dagligliv og skikker.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Kultur', 'Dagligliv'], competenceGoals: ['beskrive fransk kultur'] },
    { id: 'fransk-2-4-3', number: '4.3', title: 'La gastronomie française - Fransk gastronomi', description: 'Regional mat og vinkultur.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Gastronomi', 'Regioner'], competenceGoals: ['kjenne fransk matkultur'] },
    { id: 'fransk-2-4-4', number: '4.4', title: 'Les régions de France - Frankrikes regioner', description: 'Geografi og regional identitet.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Geografi', 'Regioner', 'DOM-TOM'], competenceGoals: ['kjenne Frankrikes regioner'] },
    // Kapittel 5: Helse og kropp
    { id: 'fransk-2-5-1', number: '5.1', title: 'Le corps humain - Menneskekroppen', description: 'Kroppsdeler.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Kropp', 'Avoir mal à'], competenceGoals: ['snakke om kroppen'] },
    { id: 'fransk-2-5-2', number: '5.2', title: 'Chez le médecin - Hos legen', description: 'Medisinsk vokabular.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Lege', 'Symptomer'], competenceGoals: ['kommunisere hos legen'] },
    { id: 'fransk-2-5-3', number: '5.3', title: 'La santé et le bien-être - Helse og velvære', description: 'Sunt levesett.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Helse', 'Velvære'], competenceGoals: ['snakke om helse'] },
    { id: 'fransk-2-5-4', number: '5.4', title: "Les sports et l'activité physique - Sport og aktivitet", description: 'Sport og trening.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Sport', 'Faire du/de la'], competenceGoals: ['snakke om sport'] },
    // Kapittel 6: Subjonctif
    { id: 'fransk-2-6-1', number: '6.1', title: 'Formation du subjonctif - Dannelse av subjonctif', description: 'Regelmessig og uregelmessig dannelse.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Subjonctif', 'Dannelse'], competenceGoals: ['danne subjonctif'] },
    { id: 'fransk-2-6-2', number: '6.2', title: 'Le subjonctif de volonté et émotion - Vilje og følelse', description: 'Bruk med vilje og følelse.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Vilje', 'Følelse', 'Il faut que'], competenceGoals: ['bruke subjonctif med vilje'] },
    { id: 'fransk-2-6-3', number: '6.3', title: 'Subjonctif vs indicatif - Subjonctif mot indikativ', description: 'Når bruke hvilken.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Subjonctif', 'Indikativ', 'Konjunksjoner'], competenceGoals: ['velge riktig modus'] },
    { id: 'fransk-2-6-4', number: '6.4', title: 'Expressions avec le subjonctif - Uttrykk med subjonctif', description: 'Vanlige uttrykk.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Uttrykk', 'Praksis'], competenceGoals: ['bruke subjonctif i praksis'] },
    // Kapittel 7: Litteratur og media
    { id: 'fransk-2-7-1', number: '7.1', title: 'La littérature française - Fransk litteratur', description: 'Introduksjon til fransk litteratur.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Litteratur', 'Le Petit Prince'], competenceGoals: ['lese fransk litteratur'] },
    { id: 'fransk-2-7-2', number: '7.2', title: 'La presse et les médias - Presse og media', description: 'Franske medier.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Presse', 'Media'], competenceGoals: ['lese franske medier'] },
    { id: 'fransk-2-7-3', number: '7.3', title: 'Le cinéma français - Fransk film', description: 'Fransk filmkultur.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Film', 'Anmeldelse'], competenceGoals: ['drøfte fransk film'] },
    { id: 'fransk-2-7-4', number: '7.4', title: 'La musique francophone - Franskspråklig musikk', description: 'Musikk fra fransktalende verden.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Musikk', 'Meninger'], competenceGoals: ['drøfte franskspråklig musikk'] },
    // Kapittel 8: Samfunn og dagligliv
    { id: 'fransk-2-8-1', number: '8.1', title: "L'environnement - Miljø", description: 'Miljøspørsmål.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Miljø', 'Klima', 'Resirkulering'], competenceGoals: ['diskutere miljøspørsmål'] },
    { id: 'fransk-2-8-2', number: '8.2', title: "L'éducation en France - Utdanning i Frankrike", description: 'Fransk skolesystem.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Utdanning', 'Baccalauréat'], competenceGoals: ['kjenne fransk utdanning'] },
    { id: 'fransk-2-8-3', number: '8.3', title: 'Le monde du travail - Arbeidslivet', description: 'Jobb og karriere.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Arbeid', 'CV', 'Intervju'], competenceGoals: ['kommunisere om arbeid'] },
    { id: 'fransk-2-8-4', number: '8.4', title: 'La vie sociale - Sosialt liv', description: 'Vennskap og sosialt liv.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Vennskap', 'Sosiale medier'], competenceGoals: ['snakke om sosialt liv'] },
    // Kapittel 9: Skriving og kommunikasjon
    { id: 'fransk-2-9-1', number: '9.1', title: 'Écrire une lettre / un courriel - Skrive brev/e-post', description: 'Formelt og uformelt brev.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Brev', 'E-post', 'Formelt'], competenceGoals: ['skrive formelle tekster'] },
    { id: 'fransk-2-9-2', number: '9.2', title: 'Argumenter et débattre - Argumentere og debattere', description: 'Meningsuttrykk og argumentasjon.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Argumentasjon', 'Debatt'], competenceGoals: ['argumentere på fransk'] },
    { id: 'fransk-2-9-3', number: '9.3', title: 'Raconter et décrire - Fortelle og beskrive', description: 'Fortellerteknikker.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Fortelling', 'Beskrivelse'], competenceGoals: ['fortelle og beskrive'] },
    { id: 'fransk-2-9-4', number: '9.4', title: 'Registre formel et informel - Formelt og uformelt', description: 'Språkregister.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Register', 'Tu/vous'], competenceGoals: ['tilpasse språkregisteret'] },
    // Kapittel 10: Grammatikkrepetisjon
    { id: 'fransk-2-10-1', number: '10.1', title: 'Les temps du passé - révision - Fortidsformer repetisjon', description: 'Repetisjon av fortidsformer.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Passé composé', 'Imparfait'], competenceGoals: ['mestre fortidsformene'] },
    { id: 'fransk-2-10-2', number: '10.2', title: 'Les pronoms - révision - Pronomen repetisjon', description: 'Repetisjon av pronomen.', estimatedMinutes: 45, exerciseCount: 4, topics: ['COD', 'COI', 'Y', 'En'], competenceGoals: ['mestre pronomenene'] },
    { id: 'fransk-2-10-3', number: '10.3', title: 'Subjonctif et conditionnel - révision - Subjonctif og kondisjonalis repetisjon', description: 'Repetisjon av modus.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Subjonctif', 'Conditionnel'], competenceGoals: ['mestre subjonctif og kondisjonalis'] },
    { id: 'fransk-2-10-4', number: '10.4', title: 'Révision générale - Generell repetisjon', description: 'Repetisjon av nivå 2.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Repetisjon', 'Grammatikk'], competenceGoals: ['mestre fransk nivå 2'] },
  ],
};

// ============================================================================

export const COURSE_FRANSK_3: TextbookCourse = {
  id: 'fransk-3',
  title: 'Fransk nivå 3',
  level: 'Nivå 3',
  description: 'Avansert fransk - avansert grammatikk, litteratur, kultur og samfunn',
  curriculum: 'LK20',
  icon: '🇫🇷',
  coverImage: '/images/subjects/fransk-3-hero.webp',
  chapters: [
    // Kapittel 1: Avanserte fortidsformer
    { id: 'fransk-3-1-1', number: '1.1', title: 'Le plus-que-parfait - Pluskvamperfektum', description: 'Dannelse og bruk.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Plus-que-parfait', 'Fortidig fortid'], competenceGoals: ['bruke pluskvamperfektum'] },
    { id: 'fransk-3-1-2', number: '1.2', title: 'Le passé simple - Enkel fortid', description: 'Gjenkjenne litterær fortid.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Passé simple', 'Litteratur'], competenceGoals: ['gjenkjenne passé simple'] },
    { id: 'fransk-3-1-3', number: '1.3', title: 'Le passé antérieur et le futur antérieur - Sammensatte tider', description: 'Avanserte sammensatte tider.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Passé antérieur', 'Futur antérieur'], competenceGoals: ['bruke avanserte tider'] },
    { id: 'fransk-3-1-4', number: '1.4', title: 'La concordance des temps - Tidssamsvar', description: 'Tidssamsvaret i komplekse setninger.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Tidssamsvar', 'Komplekse setninger'], competenceGoals: ['mestre tidssamsvar'] },
    // Kapittel 2: Avansert subjonctif og verbal
    { id: 'fransk-3-2-1', number: '2.1', title: 'Le subjonctif passé - Subjonctif fortid', description: 'Subjonctif i fortid.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Subjonctif passé'], competenceGoals: ['bruke subjonctif passé'] },
    { id: 'fransk-3-2-2', number: '2.2', title: 'Le subjonctif - cas particuliers - Spesielle tilfeller', description: 'Superlativer og negasjoner.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Superlativer', 'Negasjoner'], competenceGoals: ['bruke subjonctif avansert'] },
    { id: 'fransk-3-2-3', number: '2.3', title: 'La voix passive - Passiv form', description: 'Dannelse og bruk.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Passiv', 'Agens'], competenceGoals: ['bruke passiv form'] },
    { id: 'fransk-3-2-4', number: '2.4', title: 'La nominalisation - Nominalisering', description: 'Verb/adjektiv til substantiv.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Nominalisering', 'Akademisk stil'], competenceGoals: ['bruke nominalisering'] },
    // Kapittel 3: Diskurs og argumentasjon
    { id: 'fransk-3-3-1', number: '3.1', title: 'Le discours indirect - Indirekte tale', description: 'Rapportere tale.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Indirekte tale', 'Pronomenendring'], competenceGoals: ['bruke indirekte tale'] },
    { id: 'fransk-3-3-2', number: '3.2', title: 'Le discours indirect au passé - Indirekte tale i fortid', description: 'Tidsforskyvning.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Tidsforskyvning', 'Rapportering'], competenceGoals: ['bruke indirekte tale i fortid'] },
    { id: 'fransk-3-3-3', number: '3.3', title: 'Les connecteurs logiques - Logiske bindord', description: 'Årsak, konsekvens, innrømmelse.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Bindord', 'Koherens'], competenceGoals: ['bruke logiske bindord'] },
    { id: 'fransk-3-3-4', number: '3.4', title: "L'argumentation structurée - Strukturert argumentasjon", description: 'Tese-antitese-syntese.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Argumentasjon', 'Essay'], competenceGoals: ['strukturere argumentasjon'] },
    // Kapittel 4: Stilistikk og retorikk
    { id: 'fransk-3-4-1', number: '4.1', title: 'Les figures de style - Stilfigurer', description: 'Metafor, sammenligning, hyperbol.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Stilfigurer', 'Metafor'], competenceGoals: ['gjenkjenne stilfigurer'] },
    { id: 'fransk-3-4-2', number: '4.2', title: 'Le registre soutenu - Formelt register', description: 'Formelt og litterært fransk.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Register', 'Litterært språk'], competenceGoals: ['bruke formelt register'] },
    { id: 'fransk-3-4-3', number: '4.3', title: "L'analyse de texte - Tekstanalyse", description: 'Analysere litterære tekster.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Tekstanalyse', 'Fortellerteknikk'], competenceGoals: ['analysere tekster'] },
    { id: 'fransk-3-4-4', number: '4.4', title: 'La dissertation française - Fransk essay', description: 'Essayformat og oppbygging.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Dissertation', 'Struktur'], competenceGoals: ['skrive fransk essay'] },
    // Kapittel 5: Litteratur
    { id: 'fransk-3-5-1', number: '5.1', title: 'Le classicisme - Klassisismen', description: 'Molière og Racine.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Klassisisme', 'Molière', 'Racine'], competenceGoals: ['kjenne klassisismen'] },
    { id: 'fransk-3-5-2', number: '5.2', title: 'Les Lumières - Opplysningstiden', description: 'Voltaire og Rousseau.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Opplysning', 'Voltaire', 'Rousseau'], competenceGoals: ['kjenne opplysningstiden'] },
    { id: 'fransk-3-5-3', number: '5.3', title: 'Le romantisme et le réalisme - Romantikk og realisme', description: 'Hugo og Flaubert.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Romantikk', 'Realisme', 'Hugo'], competenceGoals: ['kjenne romantikken og realismen'] },
    { id: 'fransk-3-5-4', number: '5.4', title: 'La littérature moderne - Moderne litteratur', description: 'Camus og eksistensialisme.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Modernisme', 'Camus', 'Sartre'], competenceGoals: ['analysere moderne litteratur'] },
    // Kapittel 6: Film og kunst
    { id: 'fransk-3-6-1', number: '6.1', title: 'Le cinéma français classique - Klassisk fransk film', description: 'Fra Lumière til Nouvelle Vague.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Filmhistorie', 'Lumière'], competenceGoals: ['kjenne fransk filmhistorie'] },
    { id: 'fransk-3-6-2', number: '6.2', title: 'Le cinéma contemporain - Moderne fransk film', description: 'Moderne filmer og analyse.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Moderne film', 'Filmanalyse'], competenceGoals: ['analysere film'] },
    { id: 'fransk-3-6-3', number: '6.3', title: "L'art français - Fransk kunst", description: 'Impressionisme til kubisme.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Kunst', 'Impressionisme', 'Museer'], competenceGoals: ['kjenne fransk kunst'] },
    { id: 'fransk-3-6-4', number: '6.4', title: 'La culture contemporaine - Moderne kultur', description: 'Samtidskultur.', estimatedMinutes: 45, exerciseCount: 4, topics: ['Samtidskultur', 'Mote', 'Musikk'], competenceGoals: ['drøfte moderne kultur'] },
    // Kapittel 7: Politikk og samfunn
    { id: 'fransk-3-7-1', number: '7.1', title: 'Le système politique français - Politisk system', description: 'Republikken og institusjonene.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Politikk', 'Republikk', 'Valg'], competenceGoals: ['kjenne det politiske systemet'] },
    { id: 'fransk-3-7-2', number: '7.2', title: 'Les enjeux sociaux - Sosiale utfordringer', description: 'Innvandring og ulikhet.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Sosiale spørsmål', 'Banlieues', 'Laïcité'], competenceGoals: ['diskutere sosiale utfordringer'] },
    { id: 'fransk-3-7-3', number: '7.3', title: "L'actualité et les médias - Aktualitet og media", description: 'Nyheter og pressefrihet.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Nyheter', 'Pressefrihet', 'Fake news'], competenceGoals: ['drøfte aktuelle temaer'] },
    { id: 'fransk-3-7-4', number: '7.4', title: "L'Union européenne - EU", description: 'Frankrike i EU.', estimatedMinutes: 50, exerciseCount: 4, topics: ['EU', 'Samarbeid', 'Institusjoner'], competenceGoals: ['kjenne Frankrikes rolle i EU'] },
    // Kapittel 8: Økonomi og arbeidsliv
    { id: 'fransk-3-8-1', number: '8.1', title: "L'économie française - Fransk økonomi", description: 'Nøkkelsektorer.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Økonomi', 'Sektorer'], competenceGoals: ['kommunisere om økonomi'] },
    { id: 'fransk-3-8-2', number: '8.2', title: 'Le monde professionnel - Yrkeslivet', description: 'CV og jobbintervju.', estimatedMinutes: 50, exerciseCount: 4, topics: ['CV', 'Jobbintervju', 'Arbeidskultur'], competenceGoals: ['kommunisere i arbeidslivet'] },
    { id: 'fransk-3-8-3', number: '8.3', title: 'La mondialisation - Globalisering', description: 'Frankrike i verdensøkonomien.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Globalisering', 'Handel'], competenceGoals: ['drøfte globalisering'] },
    { id: 'fransk-3-8-4', number: '8.4', title: "L'entrepreneuriat - Entreprenørskap", description: 'Innovasjon og startups.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Entreprenørskap', 'Station F'], competenceGoals: ['kommunisere om entreprenørskap'] },
    // Kapittel 9: Frankofoni
    { id: 'fransk-3-9-1', number: '9.1', title: "L'Afrique francophone - Fransktalende Afrika", description: 'Historie og kultur.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Afrika', 'Kolonialisme', 'Litteratur'], competenceGoals: ['kjenne fransktalende Afrika'] },
    { id: 'fransk-3-9-2', number: '9.2', title: 'Le Québec et le Canada français - Québec', description: 'Fransk Canada.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Québec', 'Tospråklighet'], competenceGoals: ['kjenne fransk Canada'] },
    { id: 'fransk-3-9-3', number: '9.3', title: 'La francophonie en Asie et Pacifique - Asia og Stillehavet', description: 'Vietnam, Laos, Polynesia.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Asia', 'Stillehavet', 'Kreolspråk'], competenceGoals: ['kjenne frankofoni i Asia'] },
    { id: 'fransk-3-9-4', number: '9.4', title: 'Les enjeux de la francophonie - Frankofoniens utfordringer', description: 'OIF og fremtiden.', estimatedMinutes: 50, exerciseCount: 4, topics: ['OIF', 'Språkpolitikk'], competenceGoals: ['drøfte frankofoniens fremtid'] },
    // Kapittel 10: Eksamensforberedelse
    { id: 'fransk-3-10-1', number: '10.1', title: 'Compréhension écrite avancée - Avansert leseforståelse', description: 'Strategier for komplekse tekster.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Leseforståelse', 'Analyse'], competenceGoals: ['mestre avansert leseforståelse'] },
    { id: 'fransk-3-10-2', number: '10.2', title: 'Production écrite avancée - Avansert skriving', description: 'Essay og argumentasjon.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Skriving', 'Essay', 'Argumentasjon'], competenceGoals: ['skrive avanserte tekster'] },
    { id: 'fransk-3-10-3', number: '10.3', title: 'Compréhension et production orale - Muntlig', description: 'Presentasjon og debatt.', estimatedMinutes: 50, exerciseCount: 4, topics: ['Muntlig', 'Presentasjon', 'Debatt'], competenceGoals: ['mestre muntlig kommunikasjon'] },
    { id: 'fransk-3-10-4', number: '10.4', title: "Révision générale et stratégies d'examen - Repetisjon og eksamensstrategier", description: 'Generell repetisjon.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Repetisjon', 'Eksamen'], competenceGoals: ['forberede til eksamen'] },
  ],
};
