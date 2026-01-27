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
// SPANSK 3 CHAPTERS 9-10
// ============================================================================
const s3ch9 = {
  title: 'IDENTIDAD CULTURAL',
  subs: [
    mkSub('9.1', 'Identidad hispana', 'Hispanisk identitet og mangfold',
      'Utforsk begrepene hispanidad og mestizaje, og forstå mangfoldet i den spansktalende verden.',
      ['forstå begrepene hispanidad og mestizaje', 'diskutere identitet og mangfold i den spansktalende verden'],
      'Hispanisk identitet (identidad hispana)',
      `**Nøkkelbegreper:**\n\n| Begrep | Spansk | Forklaring |\n|--------|--------|------------|\n| Mestizaje | el mestizaje | Kulturell og etnisk blanding mellom urfolk, europeere og afrikanere |\n| Hispanidad | la hispanidad | Fellesskap basert på spansk språk og kultur |\n| Identitet | la identidad | Hvem man er, tilhørighet og selvforståelse |\n| Mangfold | la diversidad | Det at mennesker er forskjellige |\n| Kulturarv | el patrimonio cultural | Tradisjoner, språk og verdier som overleveres |\n\n**Mestizaje** er et sentralt begrep for å forstå Latin-Amerika. Det refererer til blandingen av urfolks-, europeiske og afrikanske kulturer som har skapt et unikt kulturelt landskap.`,
      'Hva betyr det å være «hispano» i dag? Den spansktalende verden omfatter over 500 millioner mennesker med svært ulike bakgrunner. I dette kapittelet utforsker vi begrepene **identitet**, **mestizaje** og **hispanidad**.',
      ['## Mestizaje: kulturell blanding\n\nBegrepet *mestizaje* oppstod etter den spanske koloniseringen av Amerika. Det beskriver blandingen av:\n- **Urfolkskulturer** (maya, azteca, inca, mapuche)\n- **Europeisk kultur** (spansk, portugisisk)\n- **Afrikansk kultur** (brakt gjennom slaveri)\n\nDenne blandingen har skapt unike kulturer i hvert enkelt land. For eksempel:\n- **Mexico:** Aztekisk + spansk arv → mexicansk identitet\n- **Peru:** Inkakulturens levende arv + spansk innflytelse\n- **Cuba:** Afrikansk + spansk → kubansk musikk og religion (santería)',
       '## Hispanidad: et omstridt begrep\n\n*La hispanidad* brukes om fellesskapet mellom spansktalende land, men begrepet er omstridt:\n\n**Positive sider:**\n- Felles språk som binder sammen\n- Delte kulturelle uttrykk (litteratur, musikk)\n- Solidaritet mellom folk\n\n**Kritikk:**\n- Kan overse urfolkskulturer\n- Har kolonialistiske konnotasjoner\n- Overforenkler mangfoldet\n\n*\"Ser hispano no significa ser igual, sino compartir un idioma y una historia compleja.\"*\n(Å være hispano betyr ikke å være lik, men å dele et språk og en kompleks historie.)'],
      [{ title: 'Mestizaje', problem: 'Forklar begrepet mestizaje med egne ord.', solution: '**Mestizaje** refererer til den kulturelle og etniske blandingen som oppstod i Latin-Amerika etter koloniseringen, der urfolks-, europeiske og afrikanske kulturer smeltet sammen til noe nytt og unikt.' },
       { title: 'Hispanidad', problem: 'Hvorfor er begrepet hispanidad omstridt?', solution: 'Fordi det kan **overse urfolkskulturer** og har **koloniale konnotasjoner**. Noen mener det overforenkler det enorme mangfoldet i den spansktalende verden.' }],
      [mkEx('lett', 'Match begrep med forklaring:', [
        ['El mestizaje', 'Kulturell og etnisk blanding mellom urfolk, europeere og afrikanere'],
        ['La hispanidad', 'Fellesskap basert på spansk språk og kultur'],
        ['La identidad', 'Hvem man er, tilhørighet og selvforståelse'],
        ['La diversidad', 'Det at mennesker er forskjellige']]),
       mkEx('lett', 'Match kulturell blanding med land:', [
        ['Aztekisk + spansk arv', 'Mexico'],
        ['Inkakulturens arv + spansk innflytelse', 'Peru'],
        ['Afrikansk + spansk kultur (santería)', 'Cuba'],
        ['Mapuche-kultur + spansk innflytelse', 'Chile']]),
       mkEx('medium', 'Svar på spørsmålene om identitet:', [
        ['Hva menes med mestizaje i latinamerikansk kontekst?', 'Blandingen av urfolks-, europeiske og afrikanske kulturer som har formet Latin-Amerikas unike identitet.'],
        ['Nevn tre elementer som inngår i mestizaje.', 'Urfolkskultur, europeisk (spansk) kultur og afrikansk kultur.'],
        ['Hvordan kan språk være en identitetsmarkør?', 'Språket man snakker reflekterer kulturell tilhørighet, historie og verdier.'],
        ['Hva er forskjellen mellom identidad og hispanidad?', 'Identidad er individuell selvforståelse; hispanidad er et fellesskapsbegrep for spansktalende kulturer.']]),
       mkEx('vanskelig', 'Skriv refleksjonstekst (3-4 setninger):', [
        ['Diskuter fordeler og ulemper med begrepet hispanidad.', 'La hispanidad une a millones de personas a través del idioma, pero puede simplificar la enorme diversidad cultural. Es importante reconocer tanto lo que une como lo que diferencia a los países hispanohablantes.'],
        ['Hvordan har mestizaje formet latinamerikansk identitet?', 'El mestizaje ha creado identidades únicas en cada país, combinando tradiciones indígenas, europeas y africanas. Sin embargo, también ha generado desigualdades sociales basadas en el origen étnico.'],
        ['Sammenlign identitetsbegrepet i Norge og Latin-Amerika.', 'En Noruega, la identidad se relaciona con la naturaleza y el estado de bienestar. En Latinoamérica, la identidad está marcada por el mestizaje y la diversidad cultural.'],
        ['Kan man ha flere identiteter samtidig? Diskuter.', 'Sí, una persona puede identificarse como mexicana, indígena, hispanohablante y ciudadana del mundo al mismo tiempo. La identidad es compleja y multifacética.']])],
      '**Husk:** Identitet er ikke statisk. Den formes av historie, kultur, språk og personlige erfaringer. Den spansktalende verden er et levende bevis på dette mangfoldet.',
      '**Oppsummering: Hispanisk identitet**\n\n- **Mestizaje:** Blanding av urfolks-, europeisk og afrikansk kultur\n- **Hispanidad:** Fellesskap gjennom språk, men omstridt begrep\n- **Identitet:** Kompleks, sammensatt og i stadig endring\n- **Mangfold:** 21 land med enorm kulturell variasjon'
    ),
    mkSub('9.2', 'Inmigración y multiculturalismo', 'Innvandring og multikulturalisme',
      'Lær om innvandring i den spansktalende verden og diskuter multikulturalisme.',
      ['bruke vokabular knyttet til innvandring', 'diskutere integrering og multikulturalisme'],
      'Innvandringsvokabular (vocabulario de inmigración)',
      `**Nøkkelord:**\n\n| Spansk | Norsk |\n|--------|-------|\n| emigrar | å utvandre |\n| inmigrar | å innvandre |\n| el/la inmigrante | innvandrer |\n| el/la emigrante | utvandrer |\n| el/la refugiado/a | flyktning |\n| el asilo | asyl |\n| la frontera | grensen |\n| la integración | integrering |\n| la acogida | mottak |\n| la xenofobia | fremmedfrykt |\n| la ciudadanía | statsborgerskap |\n| el permiso de residencia | oppholdstillatelse |`,
      'Innvandring er et viktig tema i den spansktalende verden. Millioner av mennesker har emigrert fra Latin-Amerika til USA og Europa, mens Spania selv har blitt et mottakerland. Å forstå migrasjonshistorier gir innsikt i **identitet**, **integrering** og **kulturmøter**.',
      ['## Migrasjon i den spansktalende verden\n\n**Fra Latin-Amerika til USA:**\n- Over 60 millioner hispanics i USA\n- Mange fra Mexico, Guatemala, Honduras, El Salvador\n- Årsaker: fattigdom, vold, bedre muligheter\n- Utfordringer: papirløse, familieseparasjon, diskriminering\n\n**Til Spania:**\n- Spania har mottatt innvandrere fra Latin-Amerika, Nord-Afrika og Øst-Europa\n- Særlig fra Ecuador, Colombia, Marokko, Romania\n- Integreringsutfordringer og kulturell berikelse',
       '## Personlige migrasjonshistorier\n\nÅ fortelle om migrasjon:\n- *Salí de mi país porque...* (Jeg dro fra landet mitt fordi...)\n- *Llegué a... en el año...* (Jeg kom til... i år...)\n- *Lo más difícil fue...* (Det vanskeligste var...)\n- *Ahora me siento...* (Nå føler jeg meg...)\n- *Echo de menos...* (Jeg savner...)\n- *He aprendido que...* (Jeg har lært at...)\n\nDisse uttrykkene hjelper deg å forstå og fortelle migrasjonshistorier med empati og respekt.'],
      [{ title: 'Emigrar vs. inmigrar', problem: 'Forklar forskjellen mellom emigrar og inmigrar.', solution: '**Emigrar** betyr å forlate sitt eget land (utvandre). **Inmigrar** betyr å komme til et nytt land (innvandre). Samme person er emigrant fra ett land og immigrant i et annet.' },
       { title: 'Migrasjonshistorie', problem: 'Fortell en kort migrasjonshistorie med de oppgitte uttrykkene.', solution: '*Salí de mi país porque no había trabajo. Llegué a España en 2010. Lo más difícil fue aprender el idioma y encontrar empleo. Ahora me siento integrado, pero echo de menos a mi familia.*' }],
      [mkEx('lett', 'Match spansk med norsk:', [
        ['el/la refugiado/a', 'flyktning'],
        ['la frontera', 'grensen'],
        ['la integración', 'integrering'],
        ['la ciudadanía', 'statsborgerskap']]),
       mkEx('lett', 'Fyll inn riktig ord:', [
        ['En person som forlater landet sitt: el/la ___', 'emigrante'],
        ['En person som kommer til et nytt land: el/la ___', 'inmigrante'],
        ['Å søke beskyttelse i et annet land: pedir ___', 'asilo'],
        ['Frykt for fremmede: la ___', 'xenofobia']]),
       mkEx('medium', 'Svar på spørsmålene:', [
        ['Hvorfor emigrerer mange fra Latin-Amerika til USA?', 'Por razones económicas (pobreza, falta de trabajo), violencia, y la búsqueda de mejores oportunidades.'],
        ['Hvilke utfordringer møter innvandrere?', 'El idioma, la discriminación, la separación familiar, encontrar trabajo y la documentación legal.'],
        ['Hva betyr integración?', 'Es el proceso por el cual los inmigrantes se adaptan a la sociedad de acogida, manteniendo su identidad cultural.'],
        ['Hvordan kan samfunnet bidra til integrering?', 'Ofreciendo cursos de idioma, oportunidades de empleo, respeto por la diversidad y combatiendo la xenofobia.']]),
       mkEx('vanskelig', 'Skriv en refleksjonstekst (3-4 setninger):', [
        ['Diskuter utfordringer for latinamerikanske innvandrere i USA.', 'Los inmigrantes latinoamericanos en EE.UU. enfrentan barreras lingüísticas, discriminación y la separación de sus familias. A pesar de estas dificultades, contribuyen enormemente a la economía y la cultura del país.'],
        ['Sammenlign innvandring i Spania og Norge.', 'Tanto España como Noruega reciben inmigrantes de diferentes partes del mundo. En España, muchos vienen de Latinoamérica y el norte de África; en Noruega, de Oriente Medio y el este de Europa.'],
        ['Hvordan kan innvandring berike et samfunn?', 'La inmigración enriquece la sociedad con nuevas perspectivas culturales, gastronomía, arte y lenguas. La diversidad cultural es una fuente de creatividad e innovación.'],
        ['Skriv en kort migrasjonshistorie fra et valgt perspektiv.', 'Salí de Honduras porque la violencia en mi barrio era insoportable. Llegué a España con la esperanza de una vida mejor. Lo más difícil fue dejar a mi familia, pero ahora trabajo y estudio para construir un futuro.']])],
      '**Viktig:** Bak tallene og statistikken finnes det mennesker med drømmer, håp og historier. Empati og respekt er nøkkelen til å forstå innvandring.',
      '**Oppsummering: Innvandring og multikulturalisme**\n\n- **Nøkkelord:** emigrar, inmigrar, refugiado, asilo, integración\n- **Migrasjon:** Fra Latin-Amerika til USA og Europa\n- **Utfordringer:** Språk, diskriminering, papirløshet, familieseparasjon\n- **Berikelse:** Kulturelt mangfold, nye perspektiver\n- **Mål:** Empati og interkulturell forståelse'
    ),
    mkSub('9.3', 'Lengua e identidad', 'Språk og identitet',
      'Utforsk forholdet mellom språk og identitet, inkludert tospråklighet og språkvariasjon.',
      ['forstå forholdet mellom språk og identitet', 'diskutere tospråklighet, dialekter og Spanglish'],
      'Språk og identitet (lengua e identidad)',
      `**Nøkkelbegreper:**\n\n| Begrep | Spansk | Forklaring |\n|--------|--------|------------|\n| Tospråklighet | el bilingüismo | Å beherske to språk |\n| Dialekt | el dialecto | Regional variasjon av et språk |\n| Spanglish | el spanglish | Blanding av spansk og engelsk |\n| Språkprestisje | el prestigio lingüístico | Sosial status knyttet til et språk |\n| Morsmål | la lengua materna | Språket man lærer først |\n| Kodebytting | el cambio de código | Å veksle mellom språk i samtale |\n\n**Språket vårt former hvem vi er.** Det reflekterer vår kulturelle bakgrunn, sosiale tilhørighet og personlige identitet.`,
      'Språk er mye mer enn et kommunikasjonsverktøy. Det er en grunnleggende del av vår **identitet**. I den spansktalende verden finnes det en enorm **språklig variasjon** som reflekterer kulturelt mangfold.',
      ['## Spanglish: språk i kontakt\n\n**Spanglish** er blandingen av spansk og engelsk som snakkes av mange hispanics i USA.\n\n**Eksempler:**\n- *Voy a parkear el carro.* (parkear = to park)\n- *Llámame pa\' atrás.* (calque: call me back)\n- *Estoy bizi.* (bizi = busy)\n- *La marketa* (marketa = market)\n\n**Debatt:**\n- Noen ser Spanglish som kreativt og naturlig\n- Andre ser det som forfall av spansk\n- Språkforskere: det er en normal konsekvens av språkkontakt',
       '## Dialekter og variasjon\n\nSpansk varierer enormt mellom regioner:\n\n**Uttale:**\n- *Seseo* (Latin-Amerika): c/z uttales som /s/\n- *Distinción* (Nord-Spania): c/z uttales som /θ/\n- *Yeísmo*: ll og y uttales likt (de fleste)\n\n**Vokabular:**\n- Buss: *autobús* (Spania), *camión* (Mexico), *colectivo* (Argentina), *guagua* (Cuba)\n- Leilighet: *piso* (Spania), *departamento* (Lat-Am), *apartamento* (generelt)\n\n**Grammatikk:**\n- *Vosotros* (kun Spania) vs. *ustedes* (Latin-Amerika)\n- *Vos* (Argentina, Uruguay) vs. *tú* (de fleste land)'],
      [{ title: 'Spanglish', problem: 'Hva er Spanglish og hvorfor oppstår det?', solution: '**Spanglish** er en blanding av spansk og engelsk som oppstår naturlig når tospråklige personer veksler mellom språk. Det er en konsekvens av **språkkontakt** i USA.' },
       { title: 'Dialektvariasjon', problem: 'Gi tre eksempler på hvordan spansk varierer mellom land.', solution: '1. **Uttale:** seseo (Latin-Amerika) vs. distinción (Spania). 2. **Vokabular:** autobús/camión/colectivo. 3. **Grammatikk:** vosotros (Spania) vs. ustedes (Latin-Amerika).' }],
      [mkEx('lett', 'Match begrep med forklaring:', [
        ['El bilingüismo', 'Å beherske to språk'],
        ['El spanglish', 'Blanding av spansk og engelsk'],
        ['El dialecto', 'Regional variasjon av et språk'],
        ['La lengua materna', 'Språket man lærer først']]),
       mkEx('lett', 'Match ord med land/region:', [
        ['autobús', 'España'], ['camión', 'México'],
        ['colectivo', 'Argentina'], ['guagua', 'Cuba']]),
       mkEx('medium', 'Svar på spørsmålene om språk og identitet:', [
        ['Hva er forskjellen mellom seseo og distinción?', 'Seseo: c/z uttales som /s/ (Latin-Amerika). Distinción: c/z uttales som /θ/ (Nord-Spania).'],
        ['Hvorfor brukes vos i stedet for tú i Argentina?', 'Det er en historisk variasjon som har overlevd i Argentina og Uruguay, der vos brukes i dagligtale med egne verbformer.'],
        ['Hva er kodebytting (cambio de código)?', 'Det er når en tospråklig person veksler mellom to språk i samme samtale, ofte ubevisst og avhengig av kontekst.'],
        ['Hvordan kan språk være knyttet til makt?', 'Noen språk/dialekter har høyere prestisje enn andre, noe som kan påvirke tilgang til utdanning, arbeid og sosial status.']]),
       mkEx('vanskelig', 'Refleksjonsoppgaver (skriv 3-4 setninger):', [
        ['Diskuter om Spanglish er en trussel mot spansk eller en naturlig utvikling.', 'El spanglish no es una amenaza sino una consecuencia natural del contacto entre lenguas. Refleja la realidad bilingüe de millones de hispanohablantes en EE.UU. y demuestra la creatividad lingüística.'],
        ['Hvordan former språket vårt identiteten?', 'La lengua que hablamos determina cómo vemos el mundo y cómo nos relacionamos con los demás. Perder una lengua significa perder una forma de entender la realidad.'],
        ['Sammenlign språksituasjonen i Spania og Norge.', 'Tanto España como Noruega tienen varias lenguas: España tiene catalán, euskera y gallego; Noruega tiene bokmål, nynorsk y sami. Ambos países debaten sobre la protección de las lenguas minoritarias.'],
        ['Bør alle spansktalende snakke «standard» spansk? Diskuter.', 'No existe un español \"correcto\" universal. Todas las variedades son igualmente válidas lingüísticamente. La diversidad dialectal enriquece el idioma y refleja la riqueza cultural del mundo hispanohablante.']])],
      '**Husk:** Alle språkvarianter er likeverdige. Det finnes ikke «riktig» eller «feil» spansk – bare ulike former som reflekterer ulike kulturer og historier.',
      '**Oppsummering: Språk og identitet**\n\n- **Tospråklighet:** Naturlig fenomen i mange spansktalende samfunn\n- **Spanglish:** Blanding av spansk og engelsk, resultat av språkkontakt\n- **Dialekter:** Stor variasjon i uttale, vokabular og grammatikk\n- **Prestisje:** Noen varianter har høyere status, men alle er lingvistisk likeverdige\n- **Identitet:** Språket former hvem vi er og hvordan vi ser verden'
    ),
    mkSub('9.4', 'Reflexiones personales', 'Personlige refleksjoner',
      'Lær å uttrykke personlige refleksjoner om identitet og kulturelle opplevelser.',
      ['skrive personlige essays om identitet', 'reflektere over egne kulturelle erfaringer'],
      'Personlige refleksjoner (reflexiones personales)',
      `**Nyttige uttrykk for å skrive om identitet:**\n\n| Spansk | Norsk |\n|--------|-------|\n| Me identifico como... | Jeg identifiserer meg som... |\n| Mi identidad se compone de... | Min identitet består av... |\n| Lo que me define es... | Det som definerer meg er... |\n| Me siento parte de... | Jeg føler meg som en del av... |\n| Mi cultura me ha enseñado... | Kulturen min har lært meg... |\n| A través de mis experiencias... | Gjennom mine erfaringer... |\n| Creo que la identidad es... | Jeg tror at identitet er... |\n| Lo más importante para mí es... | Det viktigste for meg er... |`,
      'I dette delkapittelet skal du reflektere over din egen identitet og kulturelle erfaringer. Å skrive personlige tekster om identitet er en viktig ferdighet – det krever et rikt vokabular, gode strukturer og evne til å uttrykke komplekse tanker.',
      ['## Struktur for et personlig essay\n\n**Introducción:**\n- Presenter temaet og din tilnærming\n- *En este ensayo voy a reflexionar sobre...* (I dette essayet skal jeg reflektere over...)\n\n**Desarrollo (hoveddel):**\n- Del dine erfaringer og tanker\n- Bruk konkrete eksempler\n- *Por ejemplo, cuando viajé a...* (For eksempel, da jeg reiste til...)\n- *Esta experiencia me hizo comprender que...* (Denne opplevelsen fikk meg til å forstå at...)\n\n**Conclusión:**\n- Oppsummer og konkluder\n- *En conclusión, creo que...* (Avslutningsvis tror jeg at...)',
       '## Avanserte refleksjonsuttrykk\n\n**For å utdype tanker:**\n- *Esto me lleva a pensar que...* (Dette får meg til å tenke at...)\n- *Si reflexiono sobre mi propia experiencia...* (Hvis jeg reflekterer over min egen erfaring...)\n- *Me parece fundamental que...* (Jeg synes det er grunnleggende at...)\n\n**For å nyansere:**\n- *Por un lado... por otro lado...* (På den ene siden... på den andre siden...)\n- *Aunque... también es cierto que...* (Selv om... er det også sant at...)\n- *No se puede generalizar, pero...* (Man kan ikke generalisere, men...)'],
      [{ title: 'Introduksjon', problem: 'Skriv en introduksjon til et essay om identitet.', solution: '*En este ensayo voy a reflexionar sobre lo que significa la identidad cultural para mí. Como estudiante noruego que aprende español, me encuentro entre dos mundos culturales.*' },
       { title: 'Konklusjon', problem: 'Skriv en konklusjon om kulturelle erfaringer.', solution: '*En conclusión, mis experiencias con la cultura hispana me han enseñado que la identidad no es algo fijo, sino algo que se construye a lo largo de la vida a través del contacto con diferentes culturas.*' }],
      [mkEx('lett', 'Match uttrykk med funksjon:', [
        ['En este ensayo voy a reflexionar sobre...', 'Introduksjon av tema'],
        ['Por ejemplo, cuando viajé a...', 'Gi et konkret eksempel'],
        ['Esto me lleva a pensar que...', 'Utdype en tanke'],
        ['En conclusión, creo que...', 'Avslutte og konkludere']]),
       mkEx('lett', 'Fullfør setningene:', [
        ['Me identifico como ___ (nasjonalitet).', 'noruego/noruega'],
        ['Mi cultura me ha enseñado ___ (noe viktig).', 'a valorar la naturaleza / el respeto por los demás'],
        ['Lo que me define es ___ (noe personlig).', 'mi curiosidad por aprender idiomas / mi familia'],
        ['Me siento parte de ___ (en gruppe/kultur).', 'la comunidad de estudiantes de español / mi familia']]),
       mkEx('medium', 'Skriv avsnitt med de oppgitte uttrykkene:', [
        ['Skriv om din kulturelle identitet (3 setninger).', 'Mi identidad se compone de varias capas: soy noruego/a, estudiante y aprendiz de español. Mi cultura me ha enseñado valores como la igualdad y el respeto. A través de mis estudios de español, he descubierto nuevas perspectivas.'],
        ['Fortell om en kulturell opplevelse (3 setninger).', 'Cuando viajé a España, experimenté una cultura muy diferente a la noruega. Lo que más me impresionó fue la vida social y la importancia de la familia. Esta experiencia me hizo comprender que hay muchas formas de vivir.'],
        ['Reflekter over språklæring og identitet (3 setninger).', 'Aprender español ha cambiado mi forma de ver el mundo. Si reflexiono sobre mi experiencia, me doy cuenta de que el idioma abre puertas a nuevas culturas. Creo que hablar varios idiomas enriquece la identidad personal.'],
        ['Nyansér et synspunkt om kulturforskjeller (3 setninger).', 'Por un lado, las diferencias culturales pueden crear malentendidos. Por otro lado, también son una fuente de aprendizaje y crecimiento personal. No se puede generalizar, pero el contacto intercultural siempre nos enseña algo nuevo.']]),
       mkEx('vanskelig', 'Skriv et kort personlig essay (5-6 setninger):', [
        ['Tema: Min identitet og språk.', 'En este ensayo reflexiono sobre la relación entre mi identidad y los idiomas que hablo. Como noruego/a que estudia español, me encuentro entre diferentes mundos culturales. El noruego es mi lengua materna y me conecta con mi país. Sin embargo, el español me ha abierto puertas a una cultura rica y diversa. Creo que hablar varios idiomas no divide mi identidad, sino que la enriquece.'],
        ['Tema: Hva har spansk lært meg om verden?', 'Aprender español me ha enseñado mucho más que gramática y vocabulario. A través de este idioma, he descubierto la diversidad del mundo hispanohablante. He aprendido sobre el mestizaje, la inmigración y la importancia de la diversidad cultural. Esta experiencia me ha hecho más abierto/a y tolerante. En conclusión, estudiar español ha transformado mi visión del mundo.'],
        ['Tema: Kulturmøter og personlig vekst.', 'Los encuentros culturales han sido fundamentales en mi desarrollo personal. Cuando conocí a personas de países hispanohablantes, descubrí que teníamos muchas cosas en común a pesar de las diferencias culturales. Esto me lleva a pensar que la humanidad comparte valores universales. Me parece fundamental aprender sobre otras culturas para comprender mejor la nuestra propia.'],
        ['Tema: Mangfold som rikdom.', 'Creo firmemente que la diversidad cultural es una riqueza, no un problema. A través de mis estudios de español, he descubierto culturas fascinantes y personas inspiradoras. Por un lado, las diferencias pueden parecer difíciles; por otro lado, son una fuente de creatividad e innovación. En conclusión, un mundo diverso es un mundo más interesante y justo.']])],
      '**Skrivetips:** Et godt personlig essay balanserer mellom det personlige og det generelle. Del dine egne erfaringer, men knytt dem til større temaer som identitet, kultur og menneskelige verdier.',
      '**Oppsummering: Personlige refleksjoner**\n\n- **Struktur:** Introducción → Desarrollo → Conclusión\n- **Uttrykk:** Me identifico como, Mi cultura me ha enseñado, Esto me lleva a pensar\n- **Nyansering:** Por un lado/por otro lado, Aunque... también es cierto que\n- **Mål:** Uttrykke komplekse tanker om identitet og kultur\n- **Tips:** Balanser personlig erfaring med generelle refleksjoner'
    ),
  ]
};

const s3ch10 = {
  title: 'PREPARACIÓN PARA EXAMEN',
  subs: [
    mkSub('10.1', 'Comprensión lectora', 'Leseforståelse (strategier og øving)',
      'Lær strategier for leseforståelse og øv på ulike teksttyper.',
      ['bruke lesestrategier som skimming, scanning og inferens', 'forstå og analysere ulike teksttyper'],
      'Lesestrategier (estrategias de lectura)',
      `**Tre hovedstrategier:**\n\n| Strategi | Spansk | Bruk |\n|----------|--------|------|\n| Skimming | la lectura rápida | Få overblikk over teksten |\n| Scanning | la búsqueda de información | Finne spesifikk informasjon |\n| Inferens | la inferencia | Utlede betydning fra kontekst |\n\n**Steg for leseforståelse:**\n1. **Før lesing:** Les tittel, undertittel, bilder. Hva tror du teksten handler om?\n2. **Under lesing:** Understrek nøkkelord. Gjett ukjente ord fra kontekst.\n3. **Etter lesing:** Oppsummer med egne ord. Svar på spørsmål.`,
      'Leseforståelse er en sentral del av spanskeksamen. Med gode **lesestrategier** kan du forstå tekster effektivt, selv om du ikke kjenner alle ordene.',
      ['## Skimming og scanning\n\n**Skimming** (rask lesing):\n- Les raskt for å få et helhetsinntrykk\n- Fokuser på tittel, første/siste setning i hvert avsnitt\n- Mål: Forstå hva teksten handler om\n\n**Scanning** (søkelesing):\n- Søk etter spesifikk informasjon (navn, tall, datoer)\n- Ikke les hele teksten - let etter nøkkelord\n- Mål: Finne bestemte opplysninger raskt\n\n**Tips:** Bruk skimming først for å forstå konteksten, deretter scanning for å finne spesifikke svar.',
       '## Inferens: gjette fra kontekst\n\n**Inferens** betyr å utlede betydning uten at den er eksplisitt uttrykt.\n\n**Strategier:**\n- Se på ordets form: Ligner det et ord du kjenner?\n- Se på konteksten: Hva handler avsnittet om?\n- Se på ordklassen: Er det et verb, substantiv, adjektiv?\n- Se på prefikser/suffikser: *des-* (u-, av-), *-ción* (-sjon), *-mente* (-lig)\n\n**Eksempel:**\n*\"Los campesinos desforestaron la selva para cultivar.\"*\n→ *desforestaron* = des + forest + aron = avskogde (å fjerne skog)'],
      [{ title: 'Skimming', problem: 'Du har 2 minutter til å lese en artikkel. Hvilken strategi bruker du?', solution: '**Skimming** - les raskt, fokuser på tittel, undertitler, første og siste setning i hvert avsnitt for å få et helhetsinntrykk.' },
       { title: 'Inferens', problem: 'Gjett betydningen: \"La deforestación causa problemas ambientales graves.\"', solution: '**Deforestación** = avskoging (de- + forest + -ación). **Ambientales** = miljømessige (ambiente = miljø). Avskoging forårsaker alvorlige miljøproblemer.' }],
      [mkEx('lett', 'Match strategi med beskrivelse:', [
        ['Skimming', 'Lese raskt for å få overblikk'],
        ['Scanning', 'Lete etter spesifikk informasjon'],
        ['Inferens', 'Utlede betydning fra kontekst'],
        ['Før-lesing', 'Studere tittel og bilder før man leser']]),
       mkEx('lett', 'Gjett ordets betydning fra kontekst:', [
        ['El desempleo aumenta. (jobb = empleo)', 'Arbeidsledigheten øker (des- = uten)'],
        ['Es una situación insostenible. (sostener = å holde)', 'Det er en uholdbar situasjon (in- = u-)'],
        ['La globalización afecta a todos.', 'Globaliseringen påvirker alle (-ción = -sjon)'],
        ['Necesitamos una solución inmediata.', 'Vi trenger en umiddelbar løsning']]),
       mkEx('medium', 'Hvilken lesestrategi ville du brukt?', [
        ['Du skal finne årstallet da Cervantes ble født.', 'Scanning - søk etter tall og navnet Cervantes.'],
        ['Du skal oppsummere en artikkel om klimaendringer.', 'Skimming først for helhetsinntrykk, deretter grundig lesing.'],
        ['Du møter ordet \"desigualdad\" og kjenner \"igual\".', 'Inferens - des + igual + dad = ulikhet (det motsatte av likhet).'],
        ['Du har 5 minutter til å lese en lang tekst.', 'Skimming - les tittel, undertitler, første/siste setning i hvert avsnitt.']]),
       mkEx('vanskelig', 'Analyser og besvar spørsmål til denne teksten: \"La inmigración ha transformado las ciudades europeas. Hoy en día, es común escuchar diferentes idiomas en las calles de Madrid o Barcelona. Esta diversidad lingüística refleja un cambio profundo en la sociedad española.\"', [
        ['Hva er hovedtemaet? (Bruk skimming.)', 'Innvandringens innvirkning på europeiske byer og det språklige mangfoldet i Spania.'],
        ['Hvilke byer nevnes? (Bruk scanning.)', 'Madrid og Barcelona.'],
        ['Hva betyr \"diversidad lingüística\"? (Bruk inferens.)', 'Språklig mangfold (diversidad = mangfold, lingüística = språklig).'],
        ['Hva menes med \"cambio profundo\"?', 'En dyp/grunnleggende endring i det spanske samfunnet som følge av innvandring og kulturelt mangfold.']])],
      '**Eksamensstrategi:** Les alltid spørsmålene FØR du leser teksten. Da vet du hva du skal lete etter, og kan bruke scanning effektivt.',
      '**Oppsummering: Leseforståelse**\n\n- **Skimming:** Rask lesing for overblikk\n- **Scanning:** Søke etter spesifikk informasjon\n- **Inferens:** Gjette betydning fra kontekst\n- **Steg:** Før-lesing → Under lesing → Etter lesing\n- **Tips:** Les spørsmålene først, understrek nøkkelord, gjett fra kontekst'
    ),
    mkSub('10.2', 'Expresión escrita', 'Skriftlig uttrykk (teksttyper)',
      'Lær å skrive ulike teksttyper som essay, formelt brev, artikkel og anmeldelse.',
      ['mestre ulike teksttyper på spansk', 'strukturere tekster med riktig format og språk'],
      'Teksttyper (tipos de texto)',
      `**Viktige teksttyper til eksamen:**\n\n| Teksttype | Spansk | Kjennetegn |\n|-----------|--------|------------|\n| Essay | el ensayo | Argumenterende, reflekterende, formelt språk |\n| Formelt brev | la carta formal | Formell hilsing, tydelig formål, høflig avslutning |\n| Artikkel | el artículo | Informativt, fengende tittel, journalistisk stil |\n| Anmeldelse | la reseña | Vurdering av bok/film, beskrivelse + mening |\n\n**Felles struktur:** Alle gode tekster har en **introduksjon**, en **hoveddel** og en **konklusjon**.`,
      'På eksamen i spansk nivå 3 forventes det at du kan skrive ulike **teksttyper** med riktig struktur, register og språk. Her gjennomgår vi de viktigste typene.',
      ['## El ensayo (essay)\n\n**Struktur:**\n1. **Introducción:** Presenter temaet og tesen din\n2. **Desarrollo:** 2-3 argumenter med eksempler\n3. **Conclusión:** Oppsummering og personlig standpunkt\n\n**Nyttige uttrykk:**\n- *En primer lugar... En segundo lugar...* (For det første... For det andre...)\n- *Por una parte... Por otra parte...* (På den ene siden... På den andre siden...)\n- *En definitiva...* (Alt i alt...)\n- *Cabe destacar que...* (Det er verdt å fremheve at...)',
       '## La carta formal (formelt brev)\n\n**Format:**\n- **Encabezamiento:** Sted og dato (*Madrid, 15 de enero de 2026*)\n- **Destinatario:** *Estimado/a Sr./Sra. + etternavn:*\n- **Cuerpo:** Formelt språk, tydelig formål\n- **Despedida:** *Atentamente,* / *Le saluda atentamente,*\n- **Firma:** Navn\n\n**Nyttige uttrykk:**\n- *Me dirijo a usted para...* (Jeg henvender meg til Dem for å...)\n- *Le escribo con motivo de...* (Jeg skriver i anledning av...)\n- *Quedo a la espera de su respuesta.* (Jeg ser frem til Deres svar.)'],
      [{ title: 'Essay vs. artikkel', problem: 'Hva er forskjellen mellom et essay og en artikkel?', solution: 'Et **essay** er mer personlig og argumenterende, mens en **artikkel** er mer informativ og journalistisk. Essayet har en tese; artikkelen presenterer et tema objektivt (med mulig kommentar).' },
       { title: 'Formelt brev', problem: 'Skriv åpningen til et formelt brev til en rektor.', solution: '*Estimado Sr. Director:\n\nMe dirijo a usted para expresar mi preocupación por...*' }],
      [mkEx('lett', 'Match teksttype med kjennetegn:', [
        ['El ensayo', 'Argumenterende og reflekterende tekst'],
        ['La carta formal', 'Formell hilsing og høflig avslutning'],
        ['El artículo', 'Informativ tekst med fengende tittel'],
        ['La reseña', 'Vurdering av bok, film eller annet verk']]),
       mkEx('lett', 'Match uttrykk med teksttype:', [
        ['Estimado Sr. Director:', 'Carta formal'],
        ['En primer lugar... En segundo lugar...', 'Ensayo'],
        ['Se recomienda esta novela porque...', 'Reseña'],
        ['Según las estadísticas recientes...', 'Artículo']]),
       mkEx('medium', 'Skriv innledningen til hver teksttype:', [
        ['Essay om klimaendringer', 'El cambio climático es uno de los mayores desafíos de nuestro tiempo. En este ensayo voy a analizar las causas principales y proponer posibles soluciones.'],
        ['Formelt brev med klage', 'Estimado/a Sr./Sra.:\n\nMe dirijo a usted para expresar mi insatisfacción con el servicio recibido el pasado día 10 de enero.'],
        ['Artikkel om ungdom og sosiale medier', 'Los jóvenes y las redes sociales: ¿conexión o aislamiento? Un estudio reciente revela que el 90% de los adolescentes pasa más de tres horas diarias en las redes sociales.'],
        ['Anmeldelse av en film', 'Reseña: \"El laberinto del fauno\" (2006), dirigida por Guillermo del Toro. Esta película combina la fantasía con la dura realidad de la España franquista.']]),
       mkEx('vanskelig', 'Skriv en kort tekst (5-6 setninger) av den oppgitte typen:', [
        ['Essay: Bør alle lære et fremmedspråk?', 'En mi opinión, aprender un idioma extranjero debería ser obligatorio. En primer lugar, amplía nuestros horizontes culturales. En segundo lugar, mejora las oportunidades laborales. Además, estudios demuestran que el bilingüismo beneficia al cerebro. En definitiva, los idiomas son una herramienta fundamental para el mundo globalizado.'],
        ['Formelt brev: Søknad om sommerjobb.', 'Estimado/a Sr./Sra.:\n\nMe dirijo a usted para solicitar el puesto de trabajo de verano anunciado en su página web. Soy estudiante de bachillerato con conocimientos de noruego, inglés y español. Considero que mi perfil se ajusta a los requisitos del puesto. Quedo a la espera de su respuesta.\n\nAtentamente,'],
        ['Artikkel: Kulturelt mangfold i Europa.', 'Europa, un continente de diversidad cultural. Las ciudades europeas son cada vez más multiculturales gracias a la inmigración. Esta diversidad se refleja en la gastronomía, los idiomas y las tradiciones que conviven en nuestras calles. Sin embargo, la integración sigue siendo un desafío. Según los expertos, la educación intercultural es clave para una convivencia pacífica.'],
        ['Anmeldelse: En spanskspråklig bok du kjenner.', 'Reseña de \"Cien años de soledad\" de Gabriel García Márquez. Esta novela, publicada en 1967, narra la historia de la familia Buendía en el pueblo ficticio de Macondo. El autor utiliza el realismo mágico para explorar temas como el amor, la soledad y el paso del tiempo. Se recomienda esta obra maestra a todos los amantes de la literatura.']])],
      '**Eksamensstrategi:** Les oppgaven nøye og identifiser hvilken teksttype som kreves. Følg den riktige strukturen og bruk passende register (formelt/uformelt).',
      '**Oppsummering: Skriftlig uttrykk**\n\n- **Ensayo:** Introducción → Desarrollo (argumenter) → Conclusión\n- **Carta formal:** Encabezamiento → Saludo → Cuerpo → Despedida\n- **Artículo:** Tittel → Ingress → Hoveddel → Avslutning\n- **Reseña:** Presentasjon → Beskrivelse → Vurdering → Anbefaling\n- **Tips:** Identifiser teksttypen, følg strukturen, bruk riktig register'
    ),
    mkSub('10.3', 'Comunicación oral', 'Muntlig kommunikasjon',
      'Forbered deg til muntlig eksamen med strategier, nyttige fraser og øvelser.',
      ['mestre muntlig kommunikasjon på spansk', 'bruke strategier for muntlig eksamen'],
      'Muntlig kommunikasjon (comunicación oral)',
      `**Muntlig eksamen - hovedelementer:**\n\n| Element | Spansk | Beskrivelse |\n|---------|--------|-------------|\n| Presentasjon | la presentación | Forberedt tema du presenterer |\n| Samtale | la conversación | Dialog med sensor/medelev |\n| Bildeoppgave | la descripción de imagen | Beskrive og tolke et bilde |\n| Diskusjon | el debate | Argumentere for et synspunkt |\n\n**Vurderingskriterier:**\n- Innhold og relevans\n- Språklig korrekthet (grammatikk, uttale)\n- Flyt og kommunikasjonsevne\n- Vokabular og uttrykksrikdom\n- Evne til å samtale og respondere`,
      'Muntlig eksamen er en viktig del av vurderingen i spansk nivå 3. God forberedelse og kjennskap til **strategier** og **nyttige fraser** kan gjøre stor forskjell.',
      ['## Strategier for muntlig eksamen\n\n**Før eksamen:**\n- Øv på å snakke høyt – gjerne foran speilet\n- Forbered temaer du kan bli spurt om\n- Lag et stikkordark (hvis tillatt)\n- Øv på uttale av vanskelige ord\n\n**Under eksamen:**\n- Snakk tydelig og i passelig tempo\n- Ikke vær redd for å ta pauser\n- Hvis du ikke forstår spørsmålet: *¿Puede repetir la pregunta, por favor?*\n- Hvis du trenger tid: *Buena pregunta, déjeme pensar...*\n- Ikke svar med bare ja/nei – utdyp alltid',
       '## Nyttige fraser for muntlig eksamen\n\n**Starte presentasjonen:**\n- *Hoy voy a hablar sobre...* (I dag skal jeg snakke om...)\n- *El tema de mi presentación es...* (Temaet for presentasjonen min er...)\n\n**Strukturere:**\n- *En primer lugar... A continuación... Finalmente...*\n- *Me gustaría comenzar con...*\n\n**Gi din mening:**\n- *En mi opinión...* / *Desde mi punto de vista...*\n- *Estoy de acuerdo/en desacuerdo con...*\n\n**Avslutte:**\n- *Para concluir, me gustaría destacar que...*\n- *En resumen...*\n\n**Samtale:**\n- *Es una buena pregunta...* / *Me alegro de que pregunte eso...*\n- *Personalmente, creo que...*'],
      [{ title: 'Starte presentasjon', problem: 'Hvordan starter du en presentasjon om kultur?', solution: '*Buenos días. Hoy voy a hablar sobre la diversidad cultural en el mundo hispanohablante. El tema de mi presentación es cómo diferentes culturas conviven y se enriquecen mutuamente.*' },
       { title: 'Håndtere vanskelige situasjoner', problem: 'Du forstår ikke spørsmålet. Hva gjør du?', solution: 'Si deg: *¿Podría repetir la pregunta, por favor?* eller *Perdone, no he entendido bien. ¿Podría reformular la pregunta?* Det viser høflighet og kommunikasjonsevne.' }],
      [mkEx('lett', 'Match frase med funksjon:', [
        ['Hoy voy a hablar sobre...', 'Starte en presentasjon'],
        ['En mi opinión...', 'Gi sin mening'],
        ['¿Puede repetir la pregunta?', 'Be om å få spørsmålet gjentatt'],
        ['Para concluir...', 'Avslutte en presentasjon']]),
       mkEx('lett', 'Velg riktig frase for situasjonen:', [
        ['Du skal starte presentasjonen din.', 'Buenos días. El tema de mi presentación es...'],
        ['Du vil si at du er enig.', 'Estoy de acuerdo con...'],
        ['Du trenger litt tid til å tenke.', 'Buena pregunta, déjeme pensar un momento...'],
        ['Du vil avslutte presentasjonen.', 'En resumen / Para concluir, me gustaría destacar que...']]),
       mkEx('medium', 'Forbered muntlige svar (3-4 setninger):', [
        ['Presenter deg selv og dine interesser.', 'Me llamo... y soy estudiante en Noruega. Me interesa especialmente la cultura hispana y los idiomas. En mi tiempo libre leo y viajo cuando puedo. Mi objetivo es hablar español con fluidez.'],
        ['Snakk om en bok eller film du liker.', 'Me gustaría hablar sobre la novela \"Cien años de soledad\". Es una obra maestra de García Márquez que narra la historia de la familia Buendía. Lo que más me impresionó fue el uso del realismo mágico.'],
        ['Diskuter fordeler med å lære språk.', 'Desde mi punto de vista, aprender idiomas es fundamental en el mundo actual. En primer lugar, nos permite comunicarnos con más personas. Además, nos abre la puerta a nuevas culturas y formas de pensar.'],
        ['Gi din mening om sosiale medier.', 'En mi opinión, las redes sociales tienen tanto ventajas como desventajas. Por un lado, nos permiten mantener contacto con personas de todo el mundo. Por otro lado, pueden causar adicción y problemas de autoestima.']]),
       mkEx('vanskelig', 'Øv på muntlige eksamensoppgaver:', [
        ['Hold en kort presentasjon (5-6 setninger) om kulturelt mangfold.', 'Buenos días. Hoy voy a hablar sobre la diversidad cultural en el mundo hispanohablante. El mundo hispano comprende 21 países con una enorme variedad de culturas, tradiciones y lenguas. Esta diversidad es el resultado de siglos de mestizaje entre culturas indígenas, europeas y africanas. Desde mi punto de vista, esta riqueza cultural es algo que debemos valorar y proteger. Para concluir, creo que la diversidad nos hace más fuertes como sociedad.'],
        ['Responder på spørsmålet: ¿Qué opinas sobre la inmigración?', 'Es un tema muy importante y complejo. Personalmente, creo que la inmigración es positiva para la sociedad porque aporta diversidad cultural y nuevas perspectivas. Sin embargo, es necesario que los gobiernos faciliten la integración con programas de lengua y empleo. En definitiva, la inmigración debe gestionarse con humanidad y respeto.'],
        ['Beskriv og tolk et bilde av en multikulturell by.', 'En esta imagen veo una calle de una ciudad multicultural. Hay personas de diferentes orígenes caminando juntas. Se pueden ver tiendas con letreros en varios idiomas. Esto refleja la realidad de muchas ciudades europeas hoy en día. La imagen transmite un mensaje de convivencia y diversidad.'],
        ['Debatter: ¿Es mejor vivir en el campo o en la ciudad?', 'Desde mi punto de vista, tanto el campo como la ciudad tienen sus ventajas. En primer lugar, la ciudad ofrece más oportunidades de trabajo y cultura. Sin embargo, el campo proporciona tranquilidad y contacto con la naturaleza. Personalmente, prefiero la ciudad porque me gusta la vida cultural, pero entiendo que otros prefieran el campo.']])],
      '**Muntlig strategi:** Øv regelmessig! Snakk spansk med deg selv, med venner, eller ta opp deg selv og lytt. Jo mer du øver, jo mer naturlig vil det føles på eksamen.',
      '**Oppsummering: Muntlig kommunikasjon**\n\n- **Forberedelse:** Øv høyt, forbered temaer, lag stikkord\n- **Presentasjon:** Klar struktur (innledning, hoveddel, konklusjon)\n- **Samtale:** Utdyp svarene, vis at du kan samtale\n- **Nyttige fraser:** Hoy voy a hablar sobre..., En mi opinión..., Para concluir...\n- **Tips:** Ikke vær redd for pauser, be om gjentakelse hvis nødvendig'
    ),
    mkSub('10.4', 'Repaso general nivel 3', 'Repetisjon og strategier',
      'Repeter all grammatikk fra nivå 3 og lær eksamensstrategier.',
      ['oppsummere all grammatikk fra nivå 3', 'bruke strategier for eksamensforberedelse og selvvurdering'],
      'Generell repetisjon nivå 3 (repaso general)',
      `**Grammatikkoversikt nivå 3:**\n\n| Tema | Kapittel | Nøkkelpunkter |\n|------|----------|---------------|\n| Subjuntivo | Kap 7 | Ønsker, følelser, tvil, formelle oppfordringer |\n| Avanserte tider | Kap 8 | Condicional, pluscuamperfecto, futuro perfecto |\n| Konjunksjoner | Kap 7-8 | Aunque, para que, antes de que, sin que |\n| Passiv | Kap 8 | Ser + participio, pasiva refleja (se + verb) |\n| Diskursmarkører | Kap 9 | En primer lugar, sin embargo, en definitiva |\n| Teksttyper | Kap 10 | Ensayo, carta formal, artículo, reseña |\n\n**Eksamensforberedelse handler om å integrere alle ferdighetene: lesing, skriving, lytting og muntlig kommunikasjon.**`,
      'Nå har du jobbet deg gjennom alle temaene i spansk nivå 3. I dette siste kapittelet repeterer vi de viktigste grammatikkpunktene og gir deg strategier for eksamen og **selvvurdering**.',
      ['## Eksamensstrategier\n\n**Generelle tips:**\n1. **Les oppgaven nøye** – hva blir du bedt om?\n2. **Planlegg tiden** – fordel tiden mellom oppgavene\n3. **Skriv utkast** – spesielt for lengre tekster\n4. **Sjekk arbeidet** – les gjennom og rett feil\n5. **Bruk det du kan** – vis bredde i vokabular og grammatikk\n\n**For leseoppgaver:**\n- Les spørsmålene først\n- Bruk skimming og scanning\n- Gjett ukjente ord fra kontekst\n\n**For skriveoppgaver:**\n- Følg oppgitt teksttype\n- Strukturer teksten tydelig\n- Varier språket (ikke gjenta de samme uttrykkene)',
       '## Selvvurdering (autoevaluación)\n\n**Vurder deg selv på en skala 1-5:**\n\n| Ferdighet | Jeg kan... |\n|-----------|------------|\n| Leseforståelse | ...forstå autentiske tekster om ulike temaer |\n| Skriving | ...skrive essay, brev og artikler med riktig struktur |\n| Lytting | ...forstå spansktalende i normalt tempo |\n| Muntlig | ...holde presentasjoner og delta i samtaler |\n| Grammatikk | ...bruke subjuntivo, condicional og avanserte strukturer |\n| Vokabular | ...uttrykke meg om kultur, identitet og samfunn |\n\n**Identifiser dine svake områder og fokuser på disse i eksamensforberedelsen.**'],
      [{ title: 'Eksamensstrategi', problem: 'Du har 4 timer på eksamen og 5 oppgaver. Hvordan fordeler du tiden?', solution: 'Bruk **ca. 10 minutter** på å lese alle oppgavene og planlegge. Fordel resten av tiden basert på poengverdien til hver oppgave. Sett av **15-20 minutter** til sluttkontroll. Bruk **mer tid** på skriveoppgavene.' },
       { title: 'Selvvurdering', problem: 'Hvordan identifiserer du dine svake områder?', solution: 'Gjør **selvvurderingen** over. Prøv å gjøre øvingsoppgaver uten hjelpemidler. Det du sliter med, bør du prioritere i forberedelsene. Be gjerne om hjelp fra læreren din.' }],
      [mkEx('lett', 'Match grammatikktema med eksempel:', [
        ['Subjuntivo', 'Espero que tengas un buen viaje.'],
        ['Condicional', 'Me gustaría visitar España.'],
        ['Pasiva refleja', 'Se habla español en 21 países.'],
        ['Pluscuamperfecto', 'Cuando llegué, ya habían comido.']]),
       mkEx('lett', 'Identifiser feilene:', [
        ['*Espero que tienes razón.', 'Feil: tienes → tengas (subjuntivo etter esperar que)'],
        ['*Si tendría dinero, viajaría.', 'Feil: tendría → tuviera (imperfecto de subjuntivo etter si)'],
        ['*Ayer he ido al cine.', 'Feil: he ido → fui (pretérito indefinido med ayer)'],
        ['*Me gustaría que vienes.', 'Feil: vienes → vinieras (subjuntivo etter gustaría que)']]),
       mkEx('medium', 'Rett feilene og forklar:', [
        ['*Es importante que estudias mucho.*', 'Es importante que estudies mucho. (Subjuntivo etter es importante que.)'],
        ['*Si yo sería rico, compraría una casa.*', 'Si yo fuera rico, compraría una casa. (Imperfecto de subjuntivo i si-setninger, ikke condicional.)'],
        ['*La ventana ha sido roto por el viento.*', 'La ventana ha sido rota por el viento. (Participio må samsvare: ventana = hunkjønn → rota.)'],
        ['*Cuando llegé, ya habían comido.*', 'Cuando llegué, ya habían comido. (Riktig form av llegar i pretérito indefinido: llegué.)']]),
       mkEx('vanskelig', 'Integrasjonsoppgaver – bruk all grammatikk fra nivå 3:', [
        ['Skriv 3 setninger med subjuntivo om dine ønsker for fremtiden.', 'Espero que pueda viajar por Latinoamérica. Ojalá tenga la oportunidad de trabajar en el extranjero. Quiero que el mundo sea más justo e igualitario.'],
        ['Skriv en kort tekst (3-4 setninger) med condicional og subjuntivo.', 'Si tuviera más tiempo, estudiaría más español. Me gustaría que hubiera más intercambios culturales entre Noruega y España. Si pudiera elegir, viviría un año en un país hispanohablante.'],
        ['Skriv en avsluttende refleksjon om hva du har lært i spansk nivå 3.', 'Durante este curso he aprendido mucho sobre la lengua y la cultura hispana. He mejorado mi capacidad de escribir textos formales y de expresar opiniones complejas. Lo más importante es que ahora puedo comunicarme con más confianza y profundidad.'],
        ['Lag en personlig studieplan for de siste ukene før eksamen.', 'Mi plan de estudio incluye: repasar el subjuntivo y el condicional, practicar la escritura de ensayos y cartas formales, leer artículos en español cada día, y hablar en español con compañeros. Voy a dedicar especial atención a mis puntos débiles.']])],
      '**Siste tips:** Du har kommet langt! Stol på deg selv og det du har lært. På eksamen er det viktigste å vise hva du kan, ikke å være perfekt. ¡Buena suerte!',
      '**Oppsummering: Repetisjon og strategier**\n\n- **Grammatikk:** Subjuntivo, condicional, pluscuamperfecto, passiv, konjunksjoner\n- **Strategier:** Les oppgaven nøye, planlegg tiden, sjekk arbeidet\n- **Selvvurdering:** Identifiser svake områder, fokuser på disse\n- **Teksttyper:** Ensayo, carta formal, artículo, reseña\n- **Muntlig:** Forbered temaer, øv høyt, bruk strukturerende fraser\n- **Lykke til!** ¡Buena suerte en el examen!'
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

// Generate spansk-3-kap9-10
const s3_9_10 = generateFile(3, [9, 10], {9: s3ch9, 10: s3ch10}, '9-10');
fs.writeFileSync(path.join(outDir, 'textbook-content-spansk-3-kap9-10.ts'), s3_9_10);
console.log(`Written: textbook-content-spansk-3-kap9-10.ts (${s3_9_10.split('\n').length} lines)`);
