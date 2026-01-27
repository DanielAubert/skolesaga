/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 3 - Kapittel 9-10 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 9: IDENTIDAD CULTURAL (9.1-9.4)
 * - Kapittel 10: PREPARACIÓN PARA EXAMEN (10.1-10.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 9: IDENTIDAD CULTURAL
// ============================================================================

// 9.1 Identidad hispana
export const CHAPTER_SPANSK_3_9_1: TextbookChapter = {
  id: 'spansk-3-9-1',
  courseId: 'spansk-3',
  chapterNumber: '9.1',
  title: 'Identidad hispana',
  subtitle: 'Hispanisk identitet og mangfold',
  description: 'Utforsk begrepene hispanidad og mestizaje, og forstå mangfoldet i den spansktalende verden.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå begrepene hispanidad og mestizaje', 'diskutere identitet og mangfold i den spansktalende verden'],
  content: [
    { id: 'spansk-3-9-1-intro', type: 'text', content: `## Identidad hispana

Hva betyr det å være «hispano» i dag? Den spansktalende verden omfatter over 500 millioner mennesker med svært ulike bakgrunner. I dette kapittelet utforsker vi begrepene **identitet**, **mestizaje** og **hispanidad**.` },
    { id: 'spansk-3-9-1-def-1', type: 'definition', title: 'Hispanisk identitet (identidad hispana)', content: `**Nøkkelbegreper:**

| Begrep | Spansk | Forklaring |
|--------|--------|------------|
| Mestizaje | el mestizaje | Kulturell og etnisk blanding mellom urfolk, europeere og afrikanere |
| Hispanidad | la hispanidad | Fellesskap basert på spansk språk og kultur |
| Identitet | la identidad | Hvem man er, tilhørighet og selvforståelse |
| Mangfold | la diversidad | Det at mennesker er forskjellige |
| Kulturarv | el patrimonio cultural | Tradisjoner, språk og verdier som overleveres |

**Mestizaje** er et sentralt begrep for å forstå Latin-Amerika. Det refererer til blandingen av urfolks-, europeiske og afrikanske kulturer som har skapt et unikt kulturelt landskap.` },
    { id: 'spansk-3-9-1-text-1', type: 'text', content: `## Mestizaje: kulturell blanding

Begrepet *mestizaje* oppstod etter den spanske koloniseringen av Amerika. Det beskriver blandingen av:
- **Urfolkskulturer** (maya, azteca, inca, mapuche)
- **Europeisk kultur** (spansk, portugisisk)
- **Afrikansk kultur** (brakt gjennom slaveri)

Denne blandingen har skapt unike kulturer i hvert enkelt land. For eksempel:
- **Mexico:** Aztekisk + spansk arv → mexicansk identitet
- **Peru:** Inkakulturens levende arv + spansk innflytelse
- **Cuba:** Afrikansk + spansk → kubansk musikk og religion (santería)` },
    { id: 'spansk-3-9-1-text-2', type: 'text', content: `## Hispanidad: et omstridt begrep

*La hispanidad* brukes om fellesskapet mellom spansktalende land, men begrepet er omstridt:

**Positive sider:**
- Felles språk som binder sammen
- Delte kulturelle uttrykk (litteratur, musikk)
- Solidaritet mellom folk

**Kritikk:**
- Kan overse urfolkskulturer
- Har kolonialistiske konnotasjoner
- Overforenkler mangfoldet

*"Ser hispano no significa ser igual, sino compartir un idioma y una historia compleja."*
(Å være hispano betyr ikke å være lik, men å dele et språk og en kompleks historie.)` },
    { id: 'spansk-3-9-1-example-1', type: 'example', title: 'Eksempel: Mestizaje', problem: `Forklar begrepet mestizaje med egne ord.`, solution: `**Mestizaje** refererer til den kulturelle og etniske blandingen som oppstod i Latin-Amerika etter koloniseringen, der urfolks-, europeiske og afrikanske kulturer smeltet sammen til noe nytt og unikt.` },
    { id: 'spansk-3-9-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-9-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match begrep med forklaring:', subTasks: [
        { label: 'a', task: 'El mestizaje', solution: 'Kulturell og etnisk blanding mellom urfolk, europeere og afrikanere', answer: 'Kulturell og etnisk blanding mellom urfolk, europeere og afrikanere' },
        { label: 'b', task: 'La hispanidad', solution: 'Fellesskap basert på spansk språk og kultur', answer: 'Fellesskap basert på spansk språk og kultur' },
        { label: 'c', task: 'La identidad', solution: 'Hvem man er, tilhørighet og selvforståelse', answer: 'Hvem man er, tilhørighet og selvforståelse' },
        { label: 'd', task: 'La diversidad', solution: 'Det at mennesker er forskjellige', answer: 'Det at mennesker er forskjellige' },
      ], solution: 'a) Kulturell og etnisk blanding mellom urfolk, europeere og afrikanere, b) Fellesskap basert på spansk språk og kultur, c) Hvem man er, tilhørighet og selvforståelse, d) Det at mennesker er forskjellige', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-9-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match kulturell blanding med land:', subTasks: [
        { label: 'a', task: 'Aztekisk + spansk arv', solution: 'Mexico', answer: 'Mexico' },
        { label: 'b', task: 'Inkakulturens arv + spansk innflytelse', solution: 'Peru', answer: 'Peru' },
        { label: 'c', task: 'Afrikansk + spansk kultur (santería)', solution: 'Cuba', answer: 'Cuba' },
        { label: 'd', task: 'Mapuche-kultur + spansk innflytelse', solution: 'Chile', answer: 'Chile' },
      ], solution: 'a) Mexico, b) Peru, c) Cuba, d) Chile', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-1-example-2', type: 'example', title: 'Eksempel: Hispanidad', problem: `Hvorfor er begrepet hispanidad omstridt?`, solution: `Fordi det kan **overse urfolkskulturer** og har **koloniale konnotasjoner**. Noen mener det overforenkler det enorme mangfoldet i den spansktalende verden.` },
    { id: 'spansk-3-9-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-9-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om identitet:', subTasks: [
        { label: 'a', task: 'Hva menes med mestizaje i latinamerikansk kontekst?', solution: 'Blandingen av urfolks-, europeiske og afrikanske kulturer som har formet Latin-Amerikas unike identitet.', answer: 'Blandingen av urfolks-, europeiske og afrikanske kulturer som har formet Latin-Amerikas unike identitet.' },
        { label: 'b', task: 'Nevn tre elementer som inngår i mestizaje.', solution: 'Urfolkskultur, europeisk (spansk) kultur og afrikansk kultur.', answer: 'Urfolkskultur, europeisk (spansk) kultur og afrikansk kultur.' },
        { label: 'c', task: 'Hvordan kan språk være en identitetsmarkør?', solution: 'Språket man snakker reflekterer kulturell tilhørighet, historie og verdier.', answer: 'Språket man snakker reflekterer kulturell tilhørighet, historie og verdier.' },
        { label: 'd', task: 'Hva er forskjellen mellom identidad og hispanidad?', solution: 'Identidad er individuell selvforståelse; hispanidad er et fellesskapsbegrep for spansktalende kulturer.', answer: 'Identidad er individuell selvforståelse; hispanidad er et fellesskapsbegrep for spansktalende kulturer.' },
      ], solution: 'a) Blandingen av urfolks-, europeiske og afrikanske kulturer som har formet Latin-Amerikas unike identitet., b) Urfolkskultur, europeisk (spansk) kultur og afrikansk kultur., c) Språket man snakker reflekterer kulturell tilhørighet, historie og verdier., d) Identidad er individuell selvforståelse; hispanidad er et fellesskapsbegrep for spansktalende kulturer.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-9-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv refleksjonstekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Diskuter fordeler og ulemper med begrepet hispanidad.', solution: 'La hispanidad une a millones de personas a través del idioma, pero puede simplificar la enorme diversidad cultural. Es importante reconocer tanto lo que une como lo que diferencia a los países hispanohablantes.', answer: 'La hispanidad une a millones de personas a través del idioma, pero puede simplificar la enorme diversidad cultural. Es importante reconocer tanto lo que une como lo que diferencia a los países hispanohablantes.' },
        { label: 'b', task: 'Hvordan har mestizaje formet latinamerikansk identitet?', solution: 'El mestizaje ha creado identidades únicas en cada país, combinando tradiciones indígenas, europeas y africanas. Sin embargo, también ha generado desigualdades sociales basadas en el origen étnico.', answer: 'El mestizaje ha creado identidades únicas en cada país, combinando tradiciones indígenas, europeas y africanas. Sin embargo, también ha generado desigualdades sociales basadas en el origen étnico.' },
        { label: 'c', task: 'Sammenlign identitetsbegrepet i Norge og Latin-Amerika.', solution: 'En Noruega, la identidad se relaciona con la naturaleza y el estado de bienestar. En Latinoamérica, la identidad está marcada por el mestizaje y la diversidad cultural.', answer: 'En Noruega, la identidad se relaciona con la naturaleza y el estado de bienestar. En Latinoamérica, la identidad está marcada por el mestizaje y la diversidad cultural.' },
        { label: 'd', task: 'Kan man ha flere identiteter samtidig? Diskuter.', solution: 'Sí, una persona puede identificarse como mexicana, indígena, hispanohablante y ciudadana del mundo al mismo tiempo. La identidad es compleja y multifacética.', answer: 'Sí, una persona puede identificarse como mexicana, indígena, hispanohablante y ciudadana del mundo al mismo tiempo. La identidad es compleja y multifacética.' },
      ], solution: 'a) La hispanidad une a millones de personas a través del idioma, pero puede simplificar la enorme diversidad cultural. Es importante reconocer tanto lo que une como lo que diferencia a los países hispanohablantes., b) El mestizaje ha creado identidades únicas en cada país, combinando tradiciones indígenas, europeas y africanas. Sin embargo, también ha generado desigualdades sociales basadas en el origen étnico., c) En Noruega, la identidad se relaciona con la naturaleza y el estado de bienestar. En Latinoamérica, la identidad está marcada por el mestizaje y la diversidad cultural., d) Sí, una persona puede identificarse como mexicana, indígena, hispanohablante y ciudadana del mundo al mismo tiempo. La identidad es compleja y multifacética.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-1-tip-1', type: 'tip', content: `**Husk:** Identitet er ikke statisk. Den formes av historie, kultur, språk og personlige erfaringer. Den spansktalende verden er et levende bevis på dette mangfoldet.` },
    { id: 'spansk-3-9-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Hispanisk identitet**

- **Mestizaje:** Blanding av urfolks-, europeisk og afrikansk kultur
- **Hispanidad:** Fellesskap gjennom språk, men omstridt begrep
- **Identitet:** Kompleks, sammensatt og i stadig endring
- **Mangfold:** 21 land med enorm kulturell variasjon` },
  ],
  exercises: [],
};

// 9.2 Inmigración y multiculturalismo
export const CHAPTER_SPANSK_3_9_2: TextbookChapter = {
  id: 'spansk-3-9-2',
  courseId: 'spansk-3',
  chapterNumber: '9.2',
  title: 'Inmigración y multiculturalismo',
  subtitle: 'Innvandring og multikulturalisme',
  description: 'Lær om innvandring i den spansktalende verden og diskuter multikulturalisme.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke vokabular knyttet til innvandring', 'diskutere integrering og multikulturalisme'],
  content: [
    { id: 'spansk-3-9-2-intro', type: 'text', content: `## Inmigración y multiculturalismo

Innvandring er et viktig tema i den spansktalende verden. Millioner av mennesker har emigrert fra Latin-Amerika til USA og Europa, mens Spania selv har blitt et mottakerland. Å forstå migrasjonshistorier gir innsikt i **identitet**, **integrering** og **kulturmøter**.` },
    { id: 'spansk-3-9-2-def-1', type: 'definition', title: 'Innvandringsvokabular (vocabulario de inmigración)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| emigrar | å utvandre |
| inmigrar | å innvandre |
| el/la inmigrante | innvandrer |
| el/la emigrante | utvandrer |
| el/la refugiado/a | flyktning |
| el asilo | asyl |
| la frontera | grensen |
| la integración | integrering |
| la acogida | mottak |
| la xenofobia | fremmedfrykt |
| la ciudadanía | statsborgerskap |
| el permiso de residencia | oppholdstillatelse |` },
    { id: 'spansk-3-9-2-text-1', type: 'text', content: `## Migrasjon i den spansktalende verden

**Fra Latin-Amerika til USA:**
- Over 60 millioner hispanics i USA
- Mange fra Mexico, Guatemala, Honduras, El Salvador
- Årsaker: fattigdom, vold, bedre muligheter
- Utfordringer: papirløse, familieseparasjon, diskriminering

**Til Spania:**
- Spania har mottatt innvandrere fra Latin-Amerika, Nord-Afrika og Øst-Europa
- Særlig fra Ecuador, Colombia, Marokko, Romania
- Integreringsutfordringer og kulturell berikelse` },
    { id: 'spansk-3-9-2-text-2', type: 'text', content: `## Personlige migrasjonshistorier

Å fortelle om migrasjon:
- *Salí de mi país porque...* (Jeg dro fra landet mitt fordi...)
- *Llegué a... en el año...* (Jeg kom til... i år...)
- *Lo más difícil fue...* (Det vanskeligste var...)
- *Ahora me siento...* (Nå føler jeg meg...)
- *Echo de menos...* (Jeg savner...)
- *He aprendido que...* (Jeg har lært at...)

Disse uttrykkene hjelper deg å forstå og fortelle migrasjonshistorier med empati og respekt.` },
    { id: 'spansk-3-9-2-example-1', type: 'example', title: 'Eksempel: Emigrar vs. inmigrar', problem: `Forklar forskjellen mellom emigrar og inmigrar.`, solution: `**Emigrar** betyr å forlate sitt eget land (utvandre). **Inmigrar** betyr å komme til et nytt land (innvandre). Samme person er emigrant fra ett land og immigrant i et annet.` },
    { id: 'spansk-3-9-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-9-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'el/la refugiado/a', solution: 'flyktning', answer: 'flyktning' },
        { label: 'b', task: 'la frontera', solution: 'grensen', answer: 'grensen' },
        { label: 'c', task: 'la integración', solution: 'integrering', answer: 'integrering' },
        { label: 'd', task: 'la ciudadanía', solution: 'statsborgerskap', answer: 'statsborgerskap' },
      ], solution: 'a) flyktning, b) grensen, c) integrering, d) statsborgerskap', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-9-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig ord:', subTasks: [
        { label: 'a', task: 'En person som forlater landet sitt: el/la ___', solution: 'emigrante', answer: 'emigrante' },
        { label: 'b', task: 'En person som kommer til et nytt land: el/la ___', solution: 'inmigrante', answer: 'inmigrante' },
        { label: 'c', task: 'Å søke beskyttelse i et annet land: pedir ___', solution: 'asilo', answer: 'asilo' },
        { label: 'd', task: 'Frykt for fremmede: la ___', solution: 'xenofobia', answer: 'xenofobia' },
      ], solution: 'a) emigrante, b) inmigrante, c) asilo, d) xenofobia', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-2-example-2', type: 'example', title: 'Eksempel: Migrasjonshistorie', problem: `Fortell en kort migrasjonshistorie med de oppgitte uttrykkene.`, solution: `*Salí de mi país porque no había trabajo. Llegué a España en 2010. Lo más difícil fue aprender el idioma y encontrar empleo. Ahora me siento integrado, pero echo de menos a mi familia.*` },
    { id: 'spansk-3-9-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-9-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene:', subTasks: [
        { label: 'a', task: 'Hvorfor emigrerer mange fra Latin-Amerika til USA?', solution: 'Por razones económicas (pobreza, falta de trabajo), violencia, y la búsqueda de mejores oportunidades.', answer: 'Por razones económicas (pobreza, falta de trabajo), violencia, y la búsqueda de mejores oportunidades.' },
        { label: 'b', task: 'Hvilke utfordringer møter innvandrere?', solution: 'El idioma, la discriminación, la separación familiar, encontrar trabajo y la documentación legal.', answer: 'El idioma, la discriminación, la separación familiar, encontrar trabajo y la documentación legal.' },
        { label: 'c', task: 'Hva betyr integración?', solution: 'Es el proceso por el cual los inmigrantes se adaptan a la sociedad de acogida, manteniendo su identidad cultural.', answer: 'Es el proceso por el cual los inmigrantes se adaptan a la sociedad de acogida, manteniendo su identidad cultural.' },
        { label: 'd', task: 'Hvordan kan samfunnet bidra til integrering?', solution: 'Ofreciendo cursos de idioma, oportunidades de empleo, respeto por la diversidad y combatiendo la xenofobia.', answer: 'Ofreciendo cursos de idioma, oportunidades de empleo, respeto por la diversidad y combatiendo la xenofobia.' },
      ], solution: 'a) Por razones económicas (pobreza, falta de trabajo), violencia, y la búsqueda de mejores oportunidades., b) El idioma, la discriminación, la separación familiar, encontrar trabajo y la documentación legal., c) Es el proceso por el cual los inmigrantes se adaptan a la sociedad de acogida, manteniendo su identidad cultural., d) Ofreciendo cursos de idioma, oportunidades de empleo, respeto por la diversidad y combatiendo la xenofobia.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-9-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en refleksjonstekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Diskuter utfordringer for latinamerikanske innvandrere i USA.', solution: 'Los inmigrantes latinoamericanos en EE.UU. enfrentan barreras lingüísticas, discriminación y la separación de sus familias. A pesar de estas dificultades, contribuyen enormemente a la economía y la cultura del país.', answer: 'Los inmigrantes latinoamericanos en EE.UU. enfrentan barreras lingüísticas, discriminación y la separación de sus familias. A pesar de estas dificultades, contribuyen enormemente a la economía y la cultura del país.' },
        { label: 'b', task: 'Sammenlign innvandring i Spania og Norge.', solution: 'Tanto España como Noruega reciben inmigrantes de diferentes partes del mundo. En España, muchos vienen de Latinoamérica y el norte de África; en Noruega, de Oriente Medio y el este de Europa.', answer: 'Tanto España como Noruega reciben inmigrantes de diferentes partes del mundo. En España, muchos vienen de Latinoamérica y el norte de África; en Noruega, de Oriente Medio y el este de Europa.' },
        { label: 'c', task: 'Hvordan kan innvandring berike et samfunn?', solution: 'La inmigración enriquece la sociedad con nuevas perspectivas culturales, gastronomía, arte y lenguas. La diversidad cultural es una fuente de creatividad e innovación.', answer: 'La inmigración enriquece la sociedad con nuevas perspectivas culturales, gastronomía, arte y lenguas. La diversidad cultural es una fuente de creatividad e innovación.' },
        { label: 'd', task: 'Skriv en kort migrasjonshistorie fra et valgt perspektiv.', solution: 'Salí de Honduras porque la violencia en mi barrio era insoportable. Llegué a España con la esperanza de una vida mejor. Lo más difícil fue dejar a mi familia, pero ahora trabajo y estudio para construir un futuro.', answer: 'Salí de Honduras porque la violencia en mi barrio era insoportable. Llegué a España con la esperanza de una vida mejor. Lo más difícil fue dejar a mi familia, pero ahora trabajo y estudio para construir un futuro.' },
      ], solution: 'a) Los inmigrantes latinoamericanos en EE.UU. enfrentan barreras lingüísticas, discriminación y la separación de sus familias. A pesar de estas dificultades, contribuyen enormemente a la economía y la cultura del país., b) Tanto España como Noruega reciben inmigrantes de diferentes partes del mundo. En España, muchos vienen de Latinoamérica y el norte de África; en Noruega, de Oriente Medio y el este de Europa., c) La inmigración enriquece la sociedad con nuevas perspectivas culturales, gastronomía, arte y lenguas. La diversidad cultural es una fuente de creatividad e innovación., d) Salí de Honduras porque la violencia en mi barrio era insoportable. Llegué a España con la esperanza de una vida mejor. Lo más difícil fue dejar a mi familia, pero ahora trabajo y estudio para construir un futuro.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-2-tip-1', type: 'tip', content: `**Viktig:** Bak tallene og statistikken finnes det mennesker med drømmer, håp og historier. Empati og respekt er nøkkelen til å forstå innvandring.` },
    { id: 'spansk-3-9-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Innvandring og multikulturalisme**

- **Nøkkelord:** emigrar, inmigrar, refugiado, asilo, integración
- **Migrasjon:** Fra Latin-Amerika til USA og Europa
- **Utfordringer:** Språk, diskriminering, papirløshet, familieseparasjon
- **Berikelse:** Kulturelt mangfold, nye perspektiver
- **Mål:** Empati og interkulturell forståelse` },
  ],
  exercises: [],
};

// 9.3 Lengua e identidad
export const CHAPTER_SPANSK_3_9_3: TextbookChapter = {
  id: 'spansk-3-9-3',
  courseId: 'spansk-3',
  chapterNumber: '9.3',
  title: 'Lengua e identidad',
  subtitle: 'Språk og identitet',
  description: 'Utforsk forholdet mellom språk og identitet, inkludert tospråklighet og språkvariasjon.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå forholdet mellom språk og identitet', 'diskutere tospråklighet, dialekter og Spanglish'],
  content: [
    { id: 'spansk-3-9-3-intro', type: 'text', content: `## Lengua e identidad

Språk er mye mer enn et kommunikasjonsverktøy. Det er en grunnleggende del av vår **identitet**. I den spansktalende verden finnes det en enorm **språklig variasjon** som reflekterer kulturelt mangfold.` },
    { id: 'spansk-3-9-3-def-1', type: 'definition', title: 'Språk og identitet (lengua e identidad)', content: `**Nøkkelbegreper:**

| Begrep | Spansk | Forklaring |
|--------|--------|------------|
| Tospråklighet | el bilingüismo | Å beherske to språk |
| Dialekt | el dialecto | Regional variasjon av et språk |
| Spanglish | el spanglish | Blanding av spansk og engelsk |
| Språkprestisje | el prestigio lingüístico | Sosial status knyttet til et språk |
| Morsmål | la lengua materna | Språket man lærer først |
| Kodebytting | el cambio de código | Å veksle mellom språk i samtale |

**Språket vårt former hvem vi er.** Det reflekterer vår kulturelle bakgrunn, sosiale tilhørighet og personlige identitet.` },
    { id: 'spansk-3-9-3-text-1', type: 'text', content: `## Spanglish: språk i kontakt

**Spanglish** er blandingen av spansk og engelsk som snakkes av mange hispanics i USA.

**Eksempler:**
- *Voy a parkear el carro.* (parkear = to park)
- *Llámame pa' atrás.* (calque: call me back)
- *Estoy bizi.* (bizi = busy)
- *La marketa* (marketa = market)

**Debatt:**
- Noen ser Spanglish som kreativt og naturlig
- Andre ser det som forfall av spansk
- Språkforskere: det er en normal konsekvens av språkkontakt` },
    { id: 'spansk-3-9-3-text-2', type: 'text', content: `## Dialekter og variasjon

Spansk varierer enormt mellom regioner:

**Uttale:**
- *Seseo* (Latin-Amerika): c/z uttales som /s/
- *Distinción* (Nord-Spania): c/z uttales som /θ/
- *Yeísmo*: ll og y uttales likt (de fleste)

**Vokabular:**
- Buss: *autobús* (Spania), *camión* (Mexico), *colectivo* (Argentina), *guagua* (Cuba)
- Leilighet: *piso* (Spania), *departamento* (Lat-Am), *apartamento* (generelt)

**Grammatikk:**
- *Vosotros* (kun Spania) vs. *ustedes* (Latin-Amerika)
- *Vos* (Argentina, Uruguay) vs. *tú* (de fleste land)` },
    { id: 'spansk-3-9-3-example-1', type: 'example', title: 'Eksempel: Spanglish', problem: `Hva er Spanglish og hvorfor oppstår det?`, solution: `**Spanglish** er en blanding av spansk og engelsk som oppstår naturlig når tospråklige personer veksler mellom språk. Det er en konsekvens av **språkkontakt** i USA.` },
    { id: 'spansk-3-9-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-9-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match begrep med forklaring:', subTasks: [
        { label: 'a', task: 'El bilingüismo', solution: 'Å beherske to språk', answer: 'Å beherske to språk' },
        { label: 'b', task: 'El spanglish', solution: 'Blanding av spansk og engelsk', answer: 'Blanding av spansk og engelsk' },
        { label: 'c', task: 'El dialecto', solution: 'Regional variasjon av et språk', answer: 'Regional variasjon av et språk' },
        { label: 'd', task: 'La lengua materna', solution: 'Språket man lærer først', answer: 'Språket man lærer først' },
      ], solution: 'a) Å beherske to språk, b) Blanding av spansk og engelsk, c) Regional variasjon av et språk, d) Språket man lærer først', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-9-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match ord med land/region:', subTasks: [
        { label: 'a', task: 'autobús', solution: 'España', answer: 'España' },
        { label: 'b', task: 'camión', solution: 'México', answer: 'México' },
        { label: 'c', task: 'colectivo', solution: 'Argentina', answer: 'Argentina' },
        { label: 'd', task: 'guagua', solution: 'Cuba', answer: 'Cuba' },
      ], solution: 'a) España, b) México, c) Argentina, d) Cuba', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-3-example-2', type: 'example', title: 'Eksempel: Dialektvariasjon', problem: `Gi tre eksempler på hvordan spansk varierer mellom land.`, solution: `1. **Uttale:** seseo (Latin-Amerika) vs. distinción (Spania). 2. **Vokabular:** autobús/camión/colectivo. 3. **Grammatikk:** vosotros (Spania) vs. ustedes (Latin-Amerika).` },
    { id: 'spansk-3-9-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-9-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om språk og identitet:', subTasks: [
        { label: 'a', task: 'Hva er forskjellen mellom seseo og distinción?', solution: 'Seseo: c/z uttales som /s/ (Latin-Amerika). Distinción: c/z uttales som /θ/ (Nord-Spania).', answer: 'Seseo: c/z uttales som /s/ (Latin-Amerika). Distinción: c/z uttales som /θ/ (Nord-Spania).' },
        { label: 'b', task: 'Hvorfor brukes vos i stedet for tú i Argentina?', solution: 'Det er en historisk variasjon som har overlevd i Argentina og Uruguay, der vos brukes i dagligtale med egne verbformer.', answer: 'Det er en historisk variasjon som har overlevd i Argentina og Uruguay, der vos brukes i dagligtale med egne verbformer.' },
        { label: 'c', task: 'Hva er kodebytting (cambio de código)?', solution: 'Det er når en tospråklig person veksler mellom to språk i samme samtale, ofte ubevisst og avhengig av kontekst.', answer: 'Det er når en tospråklig person veksler mellom to språk i samme samtale, ofte ubevisst og avhengig av kontekst.' },
        { label: 'd', task: 'Hvordan kan språk være knyttet til makt?', solution: 'Noen språk/dialekter har høyere prestisje enn andre, noe som kan påvirke tilgang til utdanning, arbeid og sosial status.', answer: 'Noen språk/dialekter har høyere prestisje enn andre, noe som kan påvirke tilgang til utdanning, arbeid og sosial status.' },
      ], solution: 'a) Seseo: c/z uttales som /s/ (Latin-Amerika). Distinción: c/z uttales som /θ/ (Nord-Spania)., b) Det er en historisk variasjon som har overlevd i Argentina og Uruguay, der vos brukes i dagligtale med egne verbformer., c) Det er når en tospråklig person veksler mellom to språk i samme samtale, ofte ubevisst og avhengig av kontekst., d) Noen språk/dialekter har høyere prestisje enn andre, noe som kan påvirke tilgang til utdanning, arbeid og sosial status.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-9-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Refleksjonsoppgaver (skriv 3-4 setninger):', subTasks: [
        { label: 'a', task: 'Diskuter om Spanglish er en trussel mot spansk eller en naturlig utvikling.', solution: 'El spanglish no es una amenaza sino una consecuencia natural del contacto entre lenguas. Refleja la realidad bilingüe de millones de hispanohablantes en EE.UU. y demuestra la creatividad lingüística.', answer: 'El spanglish no es una amenaza sino una consecuencia natural del contacto entre lenguas. Refleja la realidad bilingüe de millones de hispanohablantes en EE.UU. y demuestra la creatividad lingüística.' },
        { label: 'b', task: 'Hvordan former språket vårt identiteten?', solution: 'La lengua que hablamos determina cómo vemos el mundo y cómo nos relacionamos con los demás. Perder una lengua significa perder una forma de entender la realidad.', answer: 'La lengua que hablamos determina cómo vemos el mundo y cómo nos relacionamos con los demás. Perder una lengua significa perder una forma de entender la realidad.' },
        { label: 'c', task: 'Sammenlign språksituasjonen i Spania og Norge.', solution: 'Tanto España como Noruega tienen varias lenguas: España tiene catalán, euskera y gallego; Noruega tiene bokmål, nynorsk y sami. Ambos países debaten sobre la protección de las lenguas minoritarias.', answer: 'Tanto España como Noruega tienen varias lenguas: España tiene catalán, euskera y gallego; Noruega tiene bokmål, nynorsk y sami. Ambos países debaten sobre la protección de las lenguas minoritarias.' },
        { label: 'd', task: 'Bør alle spansktalende snakke «standard» spansk? Diskuter.', solution: 'No existe un español "correcto" universal. Todas las variedades son igualmente válidas lingüísticamente. La diversidad dialectal enriquece el idioma y refleja la riqueza cultural del mundo hispanohablante.', answer: 'No existe un español "correcto" universal. Todas las variedades son igualmente válidas lingüísticamente. La diversidad dialectal enriquece el idioma y refleja la riqueza cultural del mundo hispanohablante.' },
      ], solution: 'a) El spanglish no es una amenaza sino una consecuencia natural del contacto entre lenguas. Refleja la realidad bilingüe de millones de hispanohablantes en EE.UU. y demuestra la creatividad lingüística., b) La lengua que hablamos determina cómo vemos el mundo y cómo nos relacionamos con los demás. Perder una lengua significa perder una forma de entender la realidad., c) Tanto España como Noruega tienen varias lenguas: España tiene catalán, euskera y gallego; Noruega tiene bokmål, nynorsk y sami. Ambos países debaten sobre la protección de las lenguas minoritarias., d) No existe un español "correcto" universal. Todas las variedades son igualmente válidas lingüísticamente. La diversidad dialectal enriquece el idioma y refleja la riqueza cultural del mundo hispanohablante.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-3-tip-1', type: 'tip', content: `**Husk:** Alle språkvarianter er likeverdige. Det finnes ikke «riktig» eller «feil» spansk – bare ulike former som reflekterer ulike kulturer og historier.` },
    { id: 'spansk-3-9-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Språk og identitet**

- **Tospråklighet:** Naturlig fenomen i mange spansktalende samfunn
- **Spanglish:** Blanding av spansk og engelsk, resultat av språkkontakt
- **Dialekter:** Stor variasjon i uttale, vokabular og grammatikk
- **Prestisje:** Noen varianter har høyere status, men alle er lingvistisk likeverdige
- **Identitet:** Språket former hvem vi er og hvordan vi ser verden` },
  ],
  exercises: [],
};

// 9.4 Reflexiones personales
export const CHAPTER_SPANSK_3_9_4: TextbookChapter = {
  id: 'spansk-3-9-4',
  courseId: 'spansk-3',
  chapterNumber: '9.4',
  title: 'Reflexiones personales',
  subtitle: 'Personlige refleksjoner',
  description: 'Lær å uttrykke personlige refleksjoner om identitet og kulturelle opplevelser.',
  estimatedMinutes: 45,
  competenceGoals: ['skrive personlige essays om identitet', 'reflektere over egne kulturelle erfaringer'],
  content: [
    { id: 'spansk-3-9-4-intro', type: 'text', content: `## Reflexiones personales

I dette delkapittelet skal du reflektere over din egen identitet og kulturelle erfaringer. Å skrive personlige tekster om identitet er en viktig ferdighet – det krever et rikt vokabular, gode strukturer og evne til å uttrykke komplekse tanker.` },
    { id: 'spansk-3-9-4-def-1', type: 'definition', title: 'Personlige refleksjoner (reflexiones personales)', content: `**Nyttige uttrykk for å skrive om identitet:**

| Spansk | Norsk |
|--------|-------|
| Me identifico como... | Jeg identifiserer meg som... |
| Mi identidad se compone de... | Min identitet består av... |
| Lo que me define es... | Det som definerer meg er... |
| Me siento parte de... | Jeg føler meg som en del av... |
| Mi cultura me ha enseñado... | Kulturen min har lært meg... |
| A través de mis experiencias... | Gjennom mine erfaringer... |
| Creo que la identidad es... | Jeg tror at identitet er... |
| Lo más importante para mí es... | Det viktigste for meg er... |` },
    { id: 'spansk-3-9-4-text-1', type: 'text', content: `## Struktur for et personlig essay

**Introducción:**
- Presenter temaet og din tilnærming
- *En este ensayo voy a reflexionar sobre...* (I dette essayet skal jeg reflektere over...)

**Desarrollo (hoveddel):**
- Del dine erfaringer og tanker
- Bruk konkrete eksempler
- *Por ejemplo, cuando viajé a...* (For eksempel, da jeg reiste til...)
- *Esta experiencia me hizo comprender que...* (Denne opplevelsen fikk meg til å forstå at...)

**Conclusión:**
- Oppsummer og konkluder
- *En conclusión, creo que...* (Avslutningsvis tror jeg at...)` },
    { id: 'spansk-3-9-4-text-2', type: 'text', content: `## Avanserte refleksjonsuttrykk

**For å utdype tanker:**
- *Esto me lleva a pensar que...* (Dette får meg til å tenke at...)
- *Si reflexiono sobre mi propia experiencia...* (Hvis jeg reflekterer over min egen erfaring...)
- *Me parece fundamental que...* (Jeg synes det er grunnleggende at...)

**For å nyansere:**
- *Por un lado... por otro lado...* (På den ene siden... på den andre siden...)
- *Aunque... también es cierto que...* (Selv om... er det også sant at...)
- *No se puede generalizar, pero...* (Man kan ikke generalisere, men...)` },
    { id: 'spansk-3-9-4-example-1', type: 'example', title: 'Eksempel: Introduksjon', problem: `Skriv en introduksjon til et essay om identitet.`, solution: `*En este ensayo voy a reflexionar sobre lo que significa la identidad cultural para mí. Como estudiante noruego que aprende español, me encuentro entre dos mundos culturales.*` },
    { id: 'spansk-3-9-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-9-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match uttrykk med funksjon:', subTasks: [
        { label: 'a', task: 'En este ensayo voy a reflexionar sobre...', solution: 'Introduksjon av tema', answer: 'Introduksjon av tema' },
        { label: 'b', task: 'Por ejemplo, cuando viajé a...', solution: 'Gi et konkret eksempel', answer: 'Gi et konkret eksempel' },
        { label: 'c', task: 'Esto me lleva a pensar que...', solution: 'Utdype en tanke', answer: 'Utdype en tanke' },
        { label: 'd', task: 'En conclusión, creo que...', solution: 'Avslutte og konkludere', answer: 'Avslutte og konkludere' },
      ], solution: 'a) Introduksjon av tema, b) Gi et konkret eksempel, c) Utdype en tanke, d) Avslutte og konkludere', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-9-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fullfør setningene:', subTasks: [
        { label: 'a', task: 'Me identifico como ___ (nasjonalitet).', solution: 'noruego/noruega', answer: 'noruego/noruega' },
        { label: 'b', task: 'Mi cultura me ha enseñado ___ (noe viktig).', solution: 'a valorar la naturaleza / el respeto por los demás', answer: 'a valorar la naturaleza / el respeto por los demás' },
        { label: 'c', task: 'Lo que me define es ___ (noe personlig).', solution: 'mi curiosidad por aprender idiomas / mi familia', answer: 'mi curiosidad por aprender idiomas / mi familia' },
        { label: 'd', task: 'Me siento parte de ___ (en gruppe/kultur).', solution: 'la comunidad de estudiantes de español / mi familia', answer: 'la comunidad de estudiantes de español / mi familia' },
      ], solution: 'a) noruego/noruega, b) a valorar la naturaleza / el respeto por los demás, c) mi curiosidad por aprender idiomas / mi familia, d) la comunidad de estudiantes de español / mi familia', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-4-example-2', type: 'example', title: 'Eksempel: Konklusjon', problem: `Skriv en konklusjon om kulturelle erfaringer.`, solution: `*En conclusión, mis experiencias con la cultura hispana me han enseñado que la identidad no es algo fijo, sino algo que se construye a lo largo de la vida a través del contacto con diferentes culturas.*` },
    { id: 'spansk-3-9-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-9-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv avsnitt med de oppgitte uttrykkene:', subTasks: [
        { label: 'a', task: 'Skriv om din kulturelle identitet (3 setninger).', solution: 'Mi identidad se compone de varias capas: soy noruego/a, estudiante y aprendiz de español. Mi cultura me ha enseñado valores como la igualdad y el respeto. A través de mis estudios de español, he descubierto nuevas perspectivas.', answer: 'Mi identidad se compone de varias capas: soy noruego/a, estudiante y aprendiz de español. Mi cultura me ha enseñado valores como la igualdad y el respeto. A través de mis estudios de español, he descubierto nuevas perspectivas.' },
        { label: 'b', task: 'Fortell om en kulturell opplevelse (3 setninger).', solution: 'Cuando viajé a España, experimenté una cultura muy diferente a la noruega. Lo que más me impresionó fue la vida social y la importancia de la familia. Esta experiencia me hizo comprender que hay muchas formas de vivir.', answer: 'Cuando viajé a España, experimenté una cultura muy diferente a la noruega. Lo que más me impresionó fue la vida social y la importancia de la familia. Esta experiencia me hizo comprender que hay muchas formas de vivir.' },
        { label: 'c', task: 'Reflekter over språklæring og identitet (3 setninger).', solution: 'Aprender español ha cambiado mi forma de ver el mundo. Si reflexiono sobre mi experiencia, me doy cuenta de que el idioma abre puertas a nuevas culturas. Creo que hablar varios idiomas enriquece la identidad personal.', answer: 'Aprender español ha cambiado mi forma de ver el mundo. Si reflexiono sobre mi experiencia, me doy cuenta de que el idioma abre puertas a nuevas culturas. Creo que hablar varios idiomas enriquece la identidad personal.' },
        { label: 'd', task: 'Nyansér et synspunkt om kulturforskjeller (3 setninger).', solution: 'Por un lado, las diferencias culturales pueden crear malentendidos. Por otro lado, también son una fuente de aprendizaje y crecimiento personal. No se puede generalizar, pero el contacto intercultural siempre nos enseña algo nuevo.', answer: 'Por un lado, las diferencias culturales pueden crear malentendidos. Por otro lado, también son una fuente de aprendizaje y crecimiento personal. No se puede generalizar, pero el contacto intercultural siempre nos enseña algo nuevo.' },
      ], solution: 'a) Mi identidad se compone de varias capas: soy noruego/a, estudiante y aprendiz de español. Mi cultura me ha enseñado valores como la igualdad y el respeto. A través de mis estudios de español, he descubierto nuevas perspectivas., b) Cuando viajé a España, experimenté una cultura muy diferente a la noruega. Lo que más me impresionó fue la vida social y la importancia de la familia. Esta experiencia me hizo comprender que hay muchas formas de vivir., c) Aprender español ha cambiado mi forma de ver el mundo. Si reflexiono sobre mi experiencia, me doy cuenta de que el idioma abre puertas a nuevas culturas. Creo que hablar varios idiomas enriquece la identidad personal., d) Por un lado, las diferencias culturales pueden crear malentendidos. Por otro lado, también son una fuente de aprendizaje y crecimiento personal. No se puede generalizar, pero el contacto intercultural siempre nos enseña algo nuevo.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-9-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et kort personlig essay (5-6 setninger):', subTasks: [
        { label: 'a', task: 'Tema: Min identitet og språk.', solution: 'En este ensayo reflexiono sobre la relación entre mi identidad y los idiomas que hablo. Como noruego/a que estudia español, me encuentro entre diferentes mundos culturales. El noruego es mi lengua materna y me conecta con mi país. Sin embargo, el español me ha abierto puertas a una cultura rica y diversa. Creo que hablar varios idiomas no divide mi identidad, sino que la enriquece.', answer: 'En este ensayo reflexiono sobre la relación entre mi identidad y los idiomas que hablo. Como noruego/a que estudia español, me encuentro entre diferentes mundos culturales. El noruego es mi lengua materna y me conecta con mi país. Sin embargo, el español me ha abierto puertas a una cultura rica y diversa. Creo que hablar varios idiomas no divide mi identidad, sino que la enriquece.' },
        { label: 'b', task: 'Tema: Hva har spansk lært meg om verden?', solution: 'Aprender español me ha enseñado mucho más que gramática y vocabulario. A través de este idioma, he descubierto la diversidad del mundo hispanohablante. He aprendido sobre el mestizaje, la inmigración y la importancia de la diversidad cultural. Esta experiencia me ha hecho más abierto/a y tolerante. En conclusión, estudiar español ha transformado mi visión del mundo.', answer: 'Aprender español me ha enseñado mucho más que gramática y vocabulario. A través de este idioma, he descubierto la diversidad del mundo hispanohablante. He aprendido sobre el mestizaje, la inmigración y la importancia de la diversidad cultural. Esta experiencia me ha hecho más abierto/a y tolerante. En conclusión, estudiar español ha transformado mi visión del mundo.' },
        { label: 'c', task: 'Tema: Kulturmøter og personlig vekst.', solution: 'Los encuentros culturales han sido fundamentales en mi desarrollo personal. Cuando conocí a personas de países hispanohablantes, descubrí que teníamos muchas cosas en común a pesar de las diferencias culturales. Esto me lleva a pensar que la humanidad comparte valores universales. Me parece fundamental aprender sobre otras culturas para comprender mejor la nuestra propia.', answer: 'Los encuentros culturales han sido fundamentales en mi desarrollo personal. Cuando conocí a personas de países hispanohablantes, descubrí que teníamos muchas cosas en común a pesar de las diferencias culturales. Esto me lleva a pensar que la humanidad comparte valores universales. Me parece fundamental aprender sobre otras culturas para comprender mejor la nuestra propia.' },
        { label: 'd', task: 'Tema: Mangfold som rikdom.', solution: 'Creo firmemente que la diversidad cultural es una riqueza, no un problema. A través de mis estudios de español, he descubierto culturas fascinantes y personas inspiradoras. Por un lado, las diferencias pueden parecer difíciles; por otro lado, son una fuente de creatividad e innovación. En conclusión, un mundo diverso es un mundo más interesante y justo.', answer: 'Creo firmemente que la diversidad cultural es una riqueza, no un problema. A través de mis estudios de español, he descubierto culturas fascinantes y personas inspiradoras. Por un lado, las diferencias pueden parecer difíciles; por otro lado, son una fuente de creatividad e innovación. En conclusión, un mundo diverso es un mundo más interesante y justo.' },
      ], solution: 'a) En este ensayo reflexiono sobre la relación entre mi identidad y los idiomas que hablo. Como noruego/a que estudia español, me encuentro entre diferentes mundos culturales. El noruego es mi lengua materna y me conecta con mi país. Sin embargo, el español me ha abierto puertas a una cultura rica y diversa. Creo que hablar varios idiomas no divide mi identidad, sino que la enriquece., b) Aprender español me ha enseñado mucho más que gramática y vocabulario. A través de este idioma, he descubierto la diversidad del mundo hispanohablante. He aprendido sobre el mestizaje, la inmigración y la importancia de la diversidad cultural. Esta experiencia me ha hecho más abierto/a y tolerante. En conclusión, estudiar español ha transformado mi visión del mundo., c) Los encuentros culturales han sido fundamentales en mi desarrollo personal. Cuando conocí a personas de países hispanohablantes, descubrí que teníamos muchas cosas en común a pesar de las diferencias culturales. Esto me lleva a pensar que la humanidad comparte valores universales. Me parece fundamental aprender sobre otras culturas para comprender mejor la nuestra propia., d) Creo firmemente que la diversidad cultural es una riqueza, no un problema. A través de mis estudios de español, he descubierto culturas fascinantes y personas inspiradoras. Por un lado, las diferencias pueden parecer difíciles; por otro lado, son una fuente de creatividad e innovación. En conclusión, un mundo diverso es un mundo más interesante y justo.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-9-4-tip-1', type: 'tip', content: `**Skrivetips:** Et godt personlig essay balanserer mellom det personlige og det generelle. Del dine egne erfaringer, men knytt dem til større temaer som identitet, kultur og menneskelige verdier.` },
    { id: 'spansk-3-9-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Personlige refleksjoner**

- **Struktur:** Introducción → Desarrollo → Conclusión
- **Uttrykk:** Me identifico como, Mi cultura me ha enseñado, Esto me lleva a pensar
- **Nyansering:** Por un lado/por otro lado, Aunque... también es cierto que
- **Mål:** Uttrykke komplekse tanker om identitet og kultur
- **Tips:** Balanser personlig erfaring med generelle refleksjoner` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: PREPARACIÓN PARA EXAMEN
// ============================================================================

// 10.1 Comprensión lectora
export const CHAPTER_SPANSK_3_10_1: TextbookChapter = {
  id: 'spansk-3-10-1',
  courseId: 'spansk-3',
  chapterNumber: '10.1',
  title: 'Comprensión lectora',
  subtitle: 'Leseforståelse (strategier og øving)',
  description: 'Lær strategier for leseforståelse og øv på ulike teksttyper.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke lesestrategier som skimming, scanning og inferens', 'forstå og analysere ulike teksttyper'],
  content: [
    { id: 'spansk-3-10-1-intro', type: 'text', content: `## Comprensión lectora

Leseforståelse er en sentral del av spanskeksamen. Med gode **lesestrategier** kan du forstå tekster effektivt, selv om du ikke kjenner alle ordene.` },
    { id: 'spansk-3-10-1-def-1', type: 'definition', title: 'Lesestrategier (estrategias de lectura)', content: `**Tre hovedstrategier:**

| Strategi | Spansk | Bruk |
|----------|--------|------|
| Skimming | la lectura rápida | Få overblikk over teksten |
| Scanning | la búsqueda de información | Finne spesifikk informasjon |
| Inferens | la inferencia | Utlede betydning fra kontekst |

**Steg for leseforståelse:**
1. **Før lesing:** Les tittel, undertittel, bilder. Hva tror du teksten handler om?
2. **Under lesing:** Understrek nøkkelord. Gjett ukjente ord fra kontekst.
3. **Etter lesing:** Oppsummer med egne ord. Svar på spørsmål.` },
    { id: 'spansk-3-10-1-text-1', type: 'text', content: `## Skimming og scanning

**Skimming** (rask lesing):
- Les raskt for å få et helhetsinntrykk
- Fokuser på tittel, første/siste setning i hvert avsnitt
- Mål: Forstå hva teksten handler om

**Scanning** (søkelesing):
- Søk etter spesifikk informasjon (navn, tall, datoer)
- Ikke les hele teksten - let etter nøkkelord
- Mål: Finne bestemte opplysninger raskt

**Tips:** Bruk skimming først for å forstå konteksten, deretter scanning for å finne spesifikke svar.` },
    { id: 'spansk-3-10-1-text-2', type: 'text', content: `## Inferens: gjette fra kontekst

**Inferens** betyr å utlede betydning uten at den er eksplisitt uttrykt.

**Strategier:**
- Se på ordets form: Ligner det et ord du kjenner?
- Se på konteksten: Hva handler avsnittet om?
- Se på ordklassen: Er det et verb, substantiv, adjektiv?
- Se på prefikser/suffikser: *des-* (u-, av-), *-ción* (-sjon), *-mente* (-lig)

**Eksempel:**
*"Los campesinos desforestaron la selva para cultivar."*
→ *desforestaron* = des + forest + aron = avskogde (å fjerne skog)` },
    { id: 'spansk-3-10-1-example-1', type: 'example', title: 'Eksempel: Skimming', problem: `Du har 2 minutter til å lese en artikkel. Hvilken strategi bruker du?`, solution: `**Skimming** - les raskt, fokuser på tittel, undertitler, første og siste setning i hvert avsnitt for å få et helhetsinntrykk.` },
    { id: 'spansk-3-10-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-10-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match strategi med beskrivelse:', subTasks: [
        { label: 'a', task: 'Skimming', solution: 'Lese raskt for å få overblikk', answer: 'Lese raskt for å få overblikk' },
        { label: 'b', task: 'Scanning', solution: 'Lete etter spesifikk informasjon', answer: 'Lete etter spesifikk informasjon' },
        { label: 'c', task: 'Inferens', solution: 'Utlede betydning fra kontekst', answer: 'Utlede betydning fra kontekst' },
        { label: 'd', task: 'Før-lesing', solution: 'Studere tittel og bilder før man leser', answer: 'Studere tittel og bilder før man leser' },
      ], solution: 'a) Lese raskt for å få overblikk, b) Lete etter spesifikk informasjon, c) Utlede betydning fra kontekst, d) Studere tittel og bilder før man leser', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-10-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Gjett ordets betydning fra kontekst:', subTasks: [
        { label: 'a', task: 'El desempleo aumenta. (jobb = empleo)', solution: 'Arbeidsledigheten øker (des- = uten)', answer: 'Arbeidsledigheten øker (des- = uten)' },
        { label: 'b', task: 'Es una situación insostenible. (sostener = å holde)', solution: 'Det er en uholdbar situasjon (in- = u-)', answer: 'Det er en uholdbar situasjon (in- = u-)' },
        { label: 'c', task: 'La globalización afecta a todos.', solution: 'Globaliseringen påvirker alle (-ción = -sjon)', answer: 'Globaliseringen påvirker alle (-ción = -sjon)' },
        { label: 'd', task: 'Necesitamos una solución inmediata.', solution: 'Vi trenger en umiddelbar løsning', answer: 'Vi trenger en umiddelbar løsning' },
      ], solution: 'a) Arbeidsledigheten øker (des- = uten), b) Det er en uholdbar situasjon (in- = u-), c) Globaliseringen påvirker alle (-ción = -sjon), d) Vi trenger en umiddelbar løsning', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-1-example-2', type: 'example', title: 'Eksempel: Inferens', problem: `Gjett betydningen: "La deforestación causa problemas ambientales graves."`, solution: `**Deforestación** = avskoging (de- + forest + -ación). **Ambientales** = miljømessige (ambiente = miljø). Avskoging forårsaker alvorlige miljøproblemer.` },
    { id: 'spansk-3-10-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-10-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Hvilken lesestrategi ville du brukt?', subTasks: [
        { label: 'a', task: 'Du skal finne årstallet da Cervantes ble født.', solution: 'Scanning - søk etter tall og navnet Cervantes.', answer: 'Scanning - søk etter tall og navnet Cervantes.' },
        { label: 'b', task: 'Du skal oppsummere en artikkel om klimaendringer.', solution: 'Skimming først for helhetsinntrykk, deretter grundig lesing.', answer: 'Skimming først for helhetsinntrykk, deretter grundig lesing.' },
        { label: 'c', task: 'Du møter ordet "desigualdad" og kjenner "igual".', solution: 'Inferens - des + igual + dad = ulikhet (det motsatte av likhet).', answer: 'Inferens - des + igual + dad = ulikhet (det motsatte av likhet).' },
        { label: 'd', task: 'Du har 5 minutter til å lese en lang tekst.', solution: 'Skimming - les tittel, undertitler, første/siste setning i hvert avsnitt.', answer: 'Skimming - les tittel, undertitler, første/siste setning i hvert avsnitt.' },
      ], solution: 'a) Scanning - søk etter tall og navnet Cervantes., b) Skimming først for helhetsinntrykk, deretter grundig lesing., c) Inferens - des + igual + dad = ulikhet (det motsatte av likhet)., d) Skimming - les tittel, undertitler, første/siste setning i hvert avsnitt.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-10-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Analyser og besvar spørsmål til denne teksten: "La inmigración ha transformado las ciudades europeas. Hoy en día, es común escuchar diferentes idiomas en las calles de Madrid o Barcelona. Esta diversidad lingüística refleja un cambio profundo en la sociedad española."', subTasks: [
        { label: 'a', task: 'Hva er hovedtemaet? (Bruk skimming.)', solution: 'Innvandringens innvirkning på europeiske byer og det språklige mangfoldet i Spania.', answer: 'Innvandringens innvirkning på europeiske byer og det språklige mangfoldet i Spania.' },
        { label: 'b', task: 'Hvilke byer nevnes? (Bruk scanning.)', solution: 'Madrid og Barcelona.', answer: 'Madrid og Barcelona.' },
        { label: 'c', task: 'Hva betyr "diversidad lingüística"? (Bruk inferens.)', solution: 'Språklig mangfold (diversidad = mangfold, lingüística = språklig).', answer: 'Språklig mangfold (diversidad = mangfold, lingüística = språklig).' },
        { label: 'd', task: 'Hva menes med "cambio profundo"?', solution: 'En dyp/grunnleggende endring i det spanske samfunnet som følge av innvandring og kulturelt mangfold.', answer: 'En dyp/grunnleggende endring i det spanske samfunnet som følge av innvandring og kulturelt mangfold.' },
      ], solution: 'a) Innvandringens innvirkning på europeiske byer og det språklige mangfoldet i Spania., b) Madrid og Barcelona., c) Språklig mangfold (diversidad = mangfold, lingüística = språklig)., d) En dyp/grunnleggende endring i det spanske samfunnet som følge av innvandring og kulturelt mangfold.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-1-tip-1', type: 'tip', content: `**Eksamensstrategi:** Les alltid spørsmålene FØR du leser teksten. Da vet du hva du skal lete etter, og kan bruke scanning effektivt.` },
    { id: 'spansk-3-10-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Leseforståelse**

- **Skimming:** Rask lesing for overblikk
- **Scanning:** Søke etter spesifikk informasjon
- **Inferens:** Gjette betydning fra kontekst
- **Steg:** Før-lesing → Under lesing → Etter lesing
- **Tips:** Les spørsmålene først, understrek nøkkelord, gjett fra kontekst` },
  ],
  exercises: [],
};

// 10.2 Expresión escrita
export const CHAPTER_SPANSK_3_10_2: TextbookChapter = {
  id: 'spansk-3-10-2',
  courseId: 'spansk-3',
  chapterNumber: '10.2',
  title: 'Expresión escrita',
  subtitle: 'Skriftlig uttrykk (teksttyper)',
  description: 'Lær å skrive ulike teksttyper som essay, formelt brev, artikkel og anmeldelse.',
  estimatedMinutes: 45,
  competenceGoals: ['mestre ulike teksttyper på spansk', 'strukturere tekster med riktig format og språk'],
  content: [
    { id: 'spansk-3-10-2-intro', type: 'text', content: `## Expresión escrita

På eksamen i spansk nivå 3 forventes det at du kan skrive ulike **teksttyper** med riktig struktur, register og språk. Her gjennomgår vi de viktigste typene.` },
    { id: 'spansk-3-10-2-def-1', type: 'definition', title: 'Teksttyper (tipos de texto)', content: `**Viktige teksttyper til eksamen:**

| Teksttype | Spansk | Kjennetegn |
|-----------|--------|------------|
| Essay | el ensayo | Argumenterende, reflekterende, formelt språk |
| Formelt brev | la carta formal | Formell hilsing, tydelig formål, høflig avslutning |
| Artikkel | el artículo | Informativt, fengende tittel, journalistisk stil |
| Anmeldelse | la reseña | Vurdering av bok/film, beskrivelse + mening |

**Felles struktur:** Alle gode tekster har en **introduksjon**, en **hoveddel** og en **konklusjon**.` },
    { id: 'spansk-3-10-2-text-1', type: 'text', content: `## El ensayo (essay)

**Struktur:**
1. **Introducción:** Presenter temaet og tesen din
2. **Desarrollo:** 2-3 argumenter med eksempler
3. **Conclusión:** Oppsummering og personlig standpunkt

**Nyttige uttrykk:**
- *En primer lugar... En segundo lugar...* (For det første... For det andre...)
- *Por una parte... Por otra parte...* (På den ene siden... På den andre siden...)
- *En definitiva...* (Alt i alt...)
- *Cabe destacar que...* (Det er verdt å fremheve at...)` },
    { id: 'spansk-3-10-2-text-2', type: 'text', content: `## La carta formal (formelt brev)

**Format:**
- **Encabezamiento:** Sted og dato (*Madrid, 15 de enero de 2026*)
- **Destinatario:** *Estimado/a Sr./Sra. + etternavn:*
- **Cuerpo:** Formelt språk, tydelig formål
- **Despedida:** *Atentamente,* / *Le saluda atentamente,*
- **Firma:** Navn

**Nyttige uttrykk:**
- *Me dirijo a usted para...* (Jeg henvender meg til Dem for å...)
- *Le escribo con motivo de...* (Jeg skriver i anledning av...)
- *Quedo a la espera de su respuesta.* (Jeg ser frem til Deres svar.)` },
    { id: 'spansk-3-10-2-example-1', type: 'example', title: 'Eksempel: Essay vs. artikkel', problem: `Hva er forskjellen mellom et essay og en artikkel?`, solution: `Et **essay** er mer personlig og argumenterende, mens en **artikkel** er mer informativ og journalistisk. Essayet har en tese; artikkelen presenterer et tema objektivt (med mulig kommentar).` },
    { id: 'spansk-3-10-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-10-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match teksttype med kjennetegn:', subTasks: [
        { label: 'a', task: 'El ensayo', solution: 'Argumenterende og reflekterende tekst', answer: 'Argumenterende og reflekterende tekst' },
        { label: 'b', task: 'La carta formal', solution: 'Formell hilsing og høflig avslutning', answer: 'Formell hilsing og høflig avslutning' },
        { label: 'c', task: 'El artículo', solution: 'Informativ tekst med fengende tittel', answer: 'Informativ tekst med fengende tittel' },
        { label: 'd', task: 'La reseña', solution: 'Vurdering av bok, film eller annet verk', answer: 'Vurdering av bok, film eller annet verk' },
      ], solution: 'a) Argumenterende og reflekterende tekst, b) Formell hilsing og høflig avslutning, c) Informativ tekst med fengende tittel, d) Vurdering av bok, film eller annet verk', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-10-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match uttrykk med teksttype:', subTasks: [
        { label: 'a', task: 'Estimado Sr. Director:', solution: 'Carta formal', answer: 'Carta formal' },
        { label: 'b', task: 'En primer lugar... En segundo lugar...', solution: 'Ensayo', answer: 'Ensayo' },
        { label: 'c', task: 'Se recomienda esta novela porque...', solution: 'Reseña', answer: 'Reseña' },
        { label: 'd', task: 'Según las estadísticas recientes...', solution: 'Artículo', answer: 'Artículo' },
      ], solution: 'a) Carta formal, b) Ensayo, c) Reseña, d) Artículo', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-2-example-2', type: 'example', title: 'Eksempel: Formelt brev', problem: `Skriv åpningen til et formelt brev til en rektor.`, solution: `*Estimado Sr. Director:

Me dirijo a usted para expresar mi preocupación por...*` },
    { id: 'spansk-3-10-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-10-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv innledningen til hver teksttype:', subTasks: [
        { label: 'a', task: 'Essay om klimaendringer', solution: 'El cambio climático es uno de los mayores desafíos de nuestro tiempo. En este ensayo voy a analizar las causas principales y proponer posibles soluciones.', answer: 'El cambio climático es uno de los mayores desafíos de nuestro tiempo. En este ensayo voy a analizar las causas principales y proponer posibles soluciones.' },
        { label: 'b', task: 'Formelt brev med klage', solution: 'Estimado/a Sr./Sra.: Me dirijo a usted para expresar mi insatisfacción con el servicio recibido el pasado día 10 de enero.', answer: 'Estimado/a Sr./Sra.: Me dirijo a usted para expresar mi insatisfacción con el servicio recibido el pasado día 10 de enero.' },
        { label: 'c', task: 'Artikkel om ungdom og sosiale medier', solution: 'Los jóvenes y las redes sociales: ¿conexión o aislamiento? Un estudio reciente revela que el 90% de los adolescentes pasa más de tres horas diarias en las redes sociales.', answer: 'Los jóvenes y las redes sociales: ¿conexión o aislamiento? Un estudio reciente revela que el 90% de los adolescentes pasa más de tres horas diarias en las redes sociales.' },
        { label: 'd', task: 'Anmeldelse av en film', solution: 'Reseña: "El laberinto del fauno" (2006), dirigida por Guillermo del Toro. Esta película combina la fantasía con la dura realidad de la España franquista.', answer: 'Reseña: "El laberinto del fauno" (2006), dirigida por Guillermo del Toro. Esta película combina la fantasía con la dura realidad de la España franquista.' },
      ], solution: 'a) El cambio climático es uno de los mayores desafíos de nuestro tiempo. En este ensayo voy a analizar las causas principales y proponer posibles soluciones., b) Estimado/a Sr./Sra.: Me dirijo a usted para expresar mi insatisfacción con el servicio recibido el pasado día 10 de enero., c) Los jóvenes y las redes sociales: ¿conexión o aislamiento? Un estudio reciente revela que el 90% de los adolescentes pasa más de tres horas diarias en las redes sociales., d) Reseña: "El laberinto del fauno" (2006), dirigida por Guillermo del Toro. Esta película combina la fantasía con la dura realidad de la España franquista.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-10-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort tekst (5-6 setninger) av den oppgitte typen:', subTasks: [
        { label: 'a', task: 'Essay: Bør alle lære et fremmedspråk?', solution: 'En mi opinión, aprender un idioma extranjero debería ser obligatorio. En primer lugar, amplía nuestros horizontes culturales. En segundo lugar, mejora las oportunidades laborales. Además, estudios demuestran que el bilingüismo beneficia al cerebro. En definitiva, los idiomas son una herramienta fundamental para el mundo globalizado.', answer: 'En mi opinión, aprender un idioma extranjero debería ser obligatorio. En primer lugar, amplía nuestros horizontes culturales. En segundo lugar, mejora las oportunidades laborales. Además, estudios demuestran que el bilingüismo beneficia al cerebro. En definitiva, los idiomas son una herramienta fundamental para el mundo globalizado.' },
        { label: 'b', task: 'Formelt brev: Søknad om sommerjobb.', solution: 'Estimado/a Sr./Sra.: Me dirijo a usted para solicitar el puesto de trabajo de verano anunciado en su página web. Soy estudiante de bachillerato con conocimientos de noruego, inglés y español. Considero que mi perfil se ajusta a los requisitos del puesto. Quedo a la espera de su respuesta. Atentamente,', answer: 'Estimado/a Sr./Sra.: Me dirijo a usted para solicitar el puesto de trabajo de verano anunciado en su página web. Soy estudiante de bachillerato con conocimientos de noruego, inglés y español. Considero que mi perfil se ajusta a los requisitos del puesto. Quedo a la espera de su respuesta. Atentamente,' },
        { label: 'c', task: 'Artikkel: Kulturelt mangfold i Europa.', solution: 'Europa, un continente de diversidad cultural. Las ciudades europeas son cada vez más multiculturales gracias a la inmigración. Esta diversidad se refleja en la gastronomía, los idiomas y las tradiciones que conviven en nuestras calles. Sin embargo, la integración sigue siendo un desafío. Según los expertos, la educación intercultural es clave para una convivencia pacífica.', answer: 'Europa, un continente de diversidad cultural. Las ciudades europeas son cada vez más multiculturales gracias a la inmigración. Esta diversidad se refleja en la gastronomía, los idiomas y las tradiciones que conviven en nuestras calles. Sin embargo, la integración sigue siendo un desafío. Según los expertos, la educación intercultural es clave para una convivencia pacífica.' },
        { label: 'd', task: 'Anmeldelse: En spanskspråklig bok du kjenner.', solution: 'Reseña de "Cien años de soledad" de Gabriel García Márquez. Esta novela, publicada en 1967, narra la historia de la familia Buendía en el pueblo ficticio de Macondo. El autor utiliza el realismo mágico para explorar temas como el amor, la soledad y el paso del tiempo. Se recomienda esta obra maestra a todos los amantes de la literatura.', answer: 'Reseña de "Cien años de soledad" de Gabriel García Márquez. Esta novela, publicada en 1967, narra la historia de la familia Buendía en el pueblo ficticio de Macondo. El autor utiliza el realismo mágico para explorar temas como el amor, la soledad y el paso del tiempo. Se recomienda esta obra maestra a todos los amantes de la literatura.' },
      ], solution: 'a) En mi opinión, aprender un idioma extranjero debería ser obligatorio. En primer lugar, amplía nuestros horizontes culturales. En segundo lugar, mejora las oportunidades laborales. Además, estudios demuestran que el bilingüismo beneficia al cerebro. En definitiva, los idiomas son una herramienta fundamental para el mundo globalizado., b) Estimado/a Sr./Sra.: Me dirijo a usted para solicitar el puesto de trabajo de verano anunciado en su página web. Soy estudiante de bachillerato con conocimientos de noruego, inglés y español. Considero que mi perfil se ajusta a los requisitos del puesto. Quedo a la espera de su respuesta. Atentamente,, c) Europa, un continente de diversidad cultural. Las ciudades europeas son cada vez más multiculturales gracias a la inmigración. Esta diversidad se refleja en la gastronomía, los idiomas y las tradiciones que conviven en nuestras calles. Sin embargo, la integración sigue siendo un desafío. Según los expertos, la educación intercultural es clave para una convivencia pacífica., d) Reseña de "Cien años de soledad" de Gabriel García Márquez. Esta novela, publicada en 1967, narra la historia de la familia Buendía en el pueblo ficticio de Macondo. El autor utiliza el realismo mágico para explorar temas como el amor, la soledad y el paso del tiempo. Se recomienda esta obra maestra a todos los amantes de la literatura.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-2-tip-1', type: 'tip', content: `**Eksamensstrategi:** Les oppgaven nøye og identifiser hvilken teksttype som kreves. Følg den riktige strukturen og bruk passende register (formelt/uformelt).` },
    { id: 'spansk-3-10-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Skriftlig uttrykk**

- **Ensayo:** Introducción → Desarrollo (argumenter) → Conclusión
- **Carta formal:** Encabezamiento → Saludo → Cuerpo → Despedida
- **Artículo:** Tittel → Ingress → Hoveddel → Avslutning
- **Reseña:** Presentasjon → Beskrivelse → Vurdering → Anbefaling
- **Tips:** Identifiser teksttypen, følg strukturen, bruk riktig register` },
  ],
  exercises: [],
};

// 10.3 Comunicación oral
export const CHAPTER_SPANSK_3_10_3: TextbookChapter = {
  id: 'spansk-3-10-3',
  courseId: 'spansk-3',
  chapterNumber: '10.3',
  title: 'Comunicación oral',
  subtitle: 'Muntlig kommunikasjon',
  description: 'Forbered deg til muntlig eksamen med strategier, nyttige fraser og øvelser.',
  estimatedMinutes: 45,
  competenceGoals: ['mestre muntlig kommunikasjon på spansk', 'bruke strategier for muntlig eksamen'],
  content: [
    { id: 'spansk-3-10-3-intro', type: 'text', content: `## Comunicación oral

Muntlig eksamen er en viktig del av vurderingen i spansk nivå 3. God forberedelse og kjennskap til **strategier** og **nyttige fraser** kan gjøre stor forskjell.` },
    { id: 'spansk-3-10-3-def-1', type: 'definition', title: 'Muntlig kommunikasjon (comunicación oral)', content: `**Muntlig eksamen - hovedelementer:**

| Element | Spansk | Beskrivelse |
|---------|--------|-------------|
| Presentasjon | la presentación | Forberedt tema du presenterer |
| Samtale | la conversación | Dialog med sensor/medelev |
| Bildeoppgave | la descripción de imagen | Beskrive og tolke et bilde |
| Diskusjon | el debate | Argumentere for et synspunkt |

**Vurderingskriterier:**
- Innhold og relevans
- Språklig korrekthet (grammatikk, uttale)
- Flyt og kommunikasjonsevne
- Vokabular og uttrykksrikdom
- Evne til å samtale og respondere` },
    { id: 'spansk-3-10-3-text-1', type: 'text', content: `## Strategier for muntlig eksamen

**Før eksamen:**
- Øv på å snakke høyt – gjerne foran speilet
- Forbered temaer du kan bli spurt om
- Lag et stikkordark (hvis tillatt)
- Øv på uttale av vanskelige ord

**Under eksamen:**
- Snakk tydelig og i passelig tempo
- Ikke vær redd for å ta pauser
- Hvis du ikke forstår spørsmålet: *¿Puede repetir la pregunta, por favor?*
- Hvis du trenger tid: *Buena pregunta, déjeme pensar...*
- Ikke svar med bare ja/nei – utdyp alltid` },
    { id: 'spansk-3-10-3-text-2', type: 'text', content: `## Nyttige fraser for muntlig eksamen

**Starte presentasjonen:**
- *Hoy voy a hablar sobre...* (I dag skal jeg snakke om...)
- *El tema de mi presentación es...* (Temaet for presentasjonen min er...)

**Strukturere:**
- *En primer lugar... A continuación... Finalmente...*
- *Me gustaría comenzar con...*

**Gi din mening:**
- *En mi opinión...* / *Desde mi punto de vista...*
- *Estoy de acuerdo/en desacuerdo con...*

**Avslutte:**
- *Para concluir, me gustaría destacar que...*
- *En resumen...*

**Samtale:**
- *Es una buena pregunta...* / *Me alegro de que pregunte eso...*
- *Personalmente, creo que...*` },
    { id: 'spansk-3-10-3-example-1', type: 'example', title: 'Eksempel: Starte presentasjon', problem: `Hvordan starter du en presentasjon om kultur?`, solution: `*Buenos días. Hoy voy a hablar sobre la diversidad cultural en el mundo hispanohablante. El tema de mi presentación es cómo diferentes culturas conviven y se enriquecen mutuamente.*` },
    { id: 'spansk-3-10-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-10-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match frase med funksjon:', subTasks: [
        { label: 'a', task: 'Hoy voy a hablar sobre...', solution: 'Starte en presentasjon', answer: 'Starte en presentasjon' },
        { label: 'b', task: 'En mi opinión...', solution: 'Gi sin mening', answer: 'Gi sin mening' },
        { label: 'c', task: '¿Puede repetir la pregunta?', solution: 'Be om å få spørsmålet gjentatt', answer: 'Be om å få spørsmålet gjentatt' },
        { label: 'd', task: 'Para concluir...', solution: 'Avslutte en presentasjon', answer: 'Avslutte en presentasjon' },
      ], solution: 'a) Starte en presentasjon, b) Gi sin mening, c) Be om å få spørsmålet gjentatt, d) Avslutte en presentasjon', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-10-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg riktig frase for situasjonen:', subTasks: [
        { label: 'a', task: 'Du skal starte presentasjonen din.', solution: 'Buenos días. El tema de mi presentación es...', answer: 'Buenos días. El tema de mi presentación es...' },
        { label: 'b', task: 'Du vil si at du er enig.', solution: 'Estoy de acuerdo con...', answer: 'Estoy de acuerdo con...' },
        { label: 'c', task: 'Du trenger litt tid til å tenke.', solution: 'Buena pregunta, déjeme pensar un momento...', answer: 'Buena pregunta, déjeme pensar un momento...' },
        { label: 'd', task: 'Du vil avslutte presentasjonen.', solution: 'En resumen / Para concluir, me gustaría destacar que...', answer: 'En resumen / Para concluir, me gustaría destacar que...' },
      ], solution: 'a) Buenos días. El tema de mi presentación es..., b) Estoy de acuerdo con..., c) Buena pregunta, déjeme pensar un momento..., d) En resumen / Para concluir, me gustaría destacar que...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-3-example-2', type: 'example', title: 'Eksempel: Håndtere vanskelige situasjoner', problem: `Du forstår ikke spørsmålet. Hva gjør du?`, solution: `Si deg: *¿Podría repetir la pregunta, por favor?* eller *Perdone, no he entendido bien. ¿Podría reformular la pregunta?* Det viser høflighet og kommunikasjonsevne.` },
    { id: 'spansk-3-10-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-10-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Forbered muntlige svar (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Presenter deg selv og dine interesser.', solution: 'Me llamo... y soy estudiante en Noruega. Me interesa especialmente la cultura hispana y los idiomas. En mi tiempo libre leo y viajo cuando puedo. Mi objetivo es hablar español con fluidez.', answer: 'Me llamo... y soy estudiante en Noruega. Me interesa especialmente la cultura hispana y los idiomas. En mi tiempo libre leo y viajo cuando puedo. Mi objetivo es hablar español con fluidez.' },
        { label: 'b', task: 'Snakk om en bok eller film du liker.', solution: 'Me gustaría hablar sobre la novela "Cien años de soledad". Es una obra maestra de García Márquez que narra la historia de la familia Buendía. Lo que más me impresionó fue el uso del realismo mágico.', answer: 'Me gustaría hablar sobre la novela "Cien años de soledad". Es una obra maestra de García Márquez que narra la historia de la familia Buendía. Lo que más me impresionó fue el uso del realismo mágico.' },
        { label: 'c', task: 'Diskuter fordeler med å lære språk.', solution: 'Desde mi punto de vista, aprender idiomas es fundamental en el mundo actual. En primer lugar, nos permite comunicarnos con más personas. Además, nos abre la puerta a nuevas culturas y formas de pensar.', answer: 'Desde mi punto de vista, aprender idiomas es fundamental en el mundo actual. En primer lugar, nos permite comunicarnos con más personas. Además, nos abre la puerta a nuevas culturas y formas de pensar.' },
        { label: 'd', task: 'Gi din mening om sosiale medier.', solution: 'En mi opinión, las redes sociales tienen tanto ventajas como desventajas. Por un lado, nos permiten mantener contacto con personas de todo el mundo. Por otro lado, pueden causar adicción y problemas de autoestima.', answer: 'En mi opinión, las redes sociales tienen tanto ventajas como desventajas. Por un lado, nos permiten mantener contacto con personas de todo el mundo. Por otro lado, pueden causar adicción y problemas de autoestima.' },
      ], solution: 'a) Me llamo... y soy estudiante en Noruega. Me interesa especialmente la cultura hispana y los idiomas. En mi tiempo libre leo y viajo cuando puedo. Mi objetivo es hablar español con fluidez., b) Me gustaría hablar sobre la novela "Cien años de soledad". Es una obra maestra de García Márquez que narra la historia de la familia Buendía. Lo que más me impresionó fue el uso del realismo mágico., c) Desde mi punto de vista, aprender idiomas es fundamental en el mundo actual. En primer lugar, nos permite comunicarnos con más personas. Además, nos abre la puerta a nuevas culturas y formas de pensar., d) En mi opinión, las redes sociales tienen tanto ventajas como desventajas. Por un lado, nos permiten mantener contacto con personas de todo el mundo. Por otro lado, pueden causar adicción y problemas de autoestima.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-10-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Øv på muntlige eksamensoppgaver:', subTasks: [
        { label: 'a', task: 'Hold en kort presentasjon (5-6 setninger) om kulturelt mangfold.', solution: 'Buenos días. Hoy voy a hablar sobre la diversidad cultural en el mundo hispanohablante. El mundo hispano comprende 21 países con una enorme variedad de culturas, tradiciones y lenguas. Esta diversidad es el resultado de siglos de mestizaje entre culturas indígenas, europeas y africanas. Desde mi punto de vista, esta riqueza cultural es algo que debemos valorar y proteger. Para concluir, creo que la diversidad nos hace más fuertes como sociedad.', answer: 'Buenos días. Hoy voy a hablar sobre la diversidad cultural en el mundo hispanohablante. El mundo hispano comprende 21 países con una enorme variedad de culturas, tradiciones y lenguas. Esta diversidad es el resultado de siglos de mestizaje entre culturas indígenas, europeas y africanas. Desde mi punto de vista, esta riqueza cultural es algo que debemos valorar y proteger. Para concluir, creo que la diversidad nos hace más fuertes como sociedad.' },
        { label: 'b', task: 'Responder på spørsmålet: ¿Qué opinas sobre la inmigración?', solution: 'Es un tema muy importante y complejo. Personalmente, creo que la inmigración es positiva para la sociedad porque aporta diversidad cultural y nuevas perspectivas. Sin embargo, es necesario que los gobiernos faciliten la integración con programas de lengua y empleo. En definitiva, la inmigración debe gestionarse con humanidad y respeto.', answer: 'Es un tema muy importante y complejo. Personalmente, creo que la inmigración es positiva para la sociedad porque aporta diversidad cultural y nuevas perspectivas. Sin embargo, es necesario que los gobiernos faciliten la integración con programas de lengua y empleo. En definitiva, la inmigración debe gestionarse con humanidad y respeto.' },
        { label: 'c', task: 'Beskriv og tolk et bilde av en multikulturell by.', solution: 'En esta imagen veo una calle de una ciudad multicultural. Hay personas de diferentes orígenes caminando juntas. Se pueden ver tiendas con letreros en varios idiomas. Esto refleja la realidad de muchas ciudades europeas hoy en día. La imagen transmite un mensaje de convivencia y diversidad.', answer: 'En esta imagen veo una calle de una ciudad multicultural. Hay personas de diferentes orígenes caminando juntas. Se pueden ver tiendas con letreros en varios idiomas. Esto refleja la realidad de muchas ciudades europeas hoy en día. La imagen transmite un mensaje de convivencia y diversidad.' },
        { label: 'd', task: 'Debatter: ¿Es mejor vivir en el campo o en la ciudad?', solution: 'Desde mi punto de vista, tanto el campo como la ciudad tienen sus ventajas. En primer lugar, la ciudad ofrece más oportunidades de trabajo y cultura. Sin embargo, el campo proporciona tranquilidad y contacto con la naturaleza. Personalmente, prefiero la ciudad porque me gusta la vida cultural, pero entiendo que otros prefieran el campo.', answer: 'Desde mi punto de vista, tanto el campo como la ciudad tienen sus ventajas. En primer lugar, la ciudad ofrece más oportunidades de trabajo y cultura. Sin embargo, el campo proporciona tranquilidad y contacto con la naturaleza. Personalmente, prefiero la ciudad porque me gusta la vida cultural, pero entiendo que otros prefieran el campo.' },
      ], solution: 'a) Buenos días. Hoy voy a hablar sobre la diversidad cultural en el mundo hispanohablante. El mundo hispano comprende 21 países con una enorme variedad de culturas, tradiciones y lenguas. Esta diversidad es el resultado de siglos de mestizaje entre culturas indígenas, europeas y africanas. Desde mi punto de vista, esta riqueza cultural es algo que debemos valorar y proteger. Para concluir, creo que la diversidad nos hace más fuertes como sociedad., b) Es un tema muy importante y complejo. Personalmente, creo que la inmigración es positiva para la sociedad porque aporta diversidad cultural y nuevas perspectivas. Sin embargo, es necesario que los gobiernos faciliten la integración con programas de lengua y empleo. En definitiva, la inmigración debe gestionarse con humanidad y respeto., c) En esta imagen veo una calle de una ciudad multicultural. Hay personas de diferentes orígenes caminando juntas. Se pueden ver tiendas con letreros en varios idiomas. Esto refleja la realidad de muchas ciudades europeas hoy en día. La imagen transmite un mensaje de convivencia y diversidad., d) Desde mi punto de vista, tanto el campo como la ciudad tienen sus ventajas. En primer lugar, la ciudad ofrece más oportunidades de trabajo y cultura. Sin embargo, el campo proporciona tranquilidad y contacto con la naturaleza. Personalmente, prefiero la ciudad porque me gusta la vida cultural, pero entiendo que otros prefieran el campo.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-3-tip-1', type: 'tip', content: `**Muntlig strategi:** Øv regelmessig! Snakk spansk med deg selv, med venner, eller ta opp deg selv og lytt. Jo mer du øver, jo mer naturlig vil det føles på eksamen.` },
    { id: 'spansk-3-10-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Muntlig kommunikasjon**

- **Forberedelse:** Øv høyt, forbered temaer, lag stikkord
- **Presentasjon:** Klar struktur (innledning, hoveddel, konklusjon)
- **Samtale:** Utdyp svarene, vis at du kan samtale
- **Nyttige fraser:** Hoy voy a hablar sobre..., En mi opinión..., Para concluir...
- **Tips:** Ikke vær redd for pauser, be om gjentakelse hvis nødvendig` },
  ],
  exercises: [],
};

// 10.4 Repaso general nivel 3
export const CHAPTER_SPANSK_3_10_4: TextbookChapter = {
  id: 'spansk-3-10-4',
  courseId: 'spansk-3',
  chapterNumber: '10.4',
  title: 'Repaso general nivel 3',
  subtitle: 'Repetisjon og strategier',
  description: 'Repeter all grammatikk fra nivå 3 og lær eksamensstrategier.',
  estimatedMinutes: 45,
  competenceGoals: ['oppsummere all grammatikk fra nivå 3', 'bruke strategier for eksamensforberedelse og selvvurdering'],
  content: [
    { id: 'spansk-3-10-4-intro', type: 'text', content: `## Repaso general nivel 3

Nå har du jobbet deg gjennom alle temaene i spansk nivå 3. I dette siste kapittelet repeterer vi de viktigste grammatikkpunktene og gir deg strategier for eksamen og **selvvurdering**.` },
    { id: 'spansk-3-10-4-def-1', type: 'definition', title: 'Generell repetisjon nivå 3 (repaso general)', content: `**Grammatikkoversikt nivå 3:**

| Tema | Kapittel | Nøkkelpunkter |
|------|----------|---------------|
| Subjuntivo | Kap 7 | Ønsker, følelser, tvil, formelle oppfordringer |
| Avanserte tider | Kap 8 | Condicional, pluscuamperfecto, futuro perfecto |
| Konjunksjoner | Kap 7-8 | Aunque, para que, antes de que, sin que |
| Passiv | Kap 8 | Ser + participio, pasiva refleja (se + verb) |
| Diskursmarkører | Kap 9 | En primer lugar, sin embargo, en definitiva |
| Teksttyper | Kap 10 | Ensayo, carta formal, artículo, reseña |

**Eksamensforberedelse handler om å integrere alle ferdighetene: lesing, skriving, lytting og muntlig kommunikasjon.**` },
    { id: 'spansk-3-10-4-text-1', type: 'text', content: `## Eksamensstrategier

**Generelle tips:**
1. **Les oppgaven nøye** – hva blir du bedt om?
2. **Planlegg tiden** – fordel tiden mellom oppgavene
3. **Skriv utkast** – spesielt for lengre tekster
4. **Sjekk arbeidet** – les gjennom og rett feil
5. **Bruk det du kan** – vis bredde i vokabular og grammatikk

**For leseoppgaver:**
- Les spørsmålene først
- Bruk skimming og scanning
- Gjett ukjente ord fra kontekst

**For skriveoppgaver:**
- Følg oppgitt teksttype
- Strukturer teksten tydelig
- Varier språket (ikke gjenta de samme uttrykkene)` },
    { id: 'spansk-3-10-4-text-2', type: 'text', content: `## Selvvurdering (autoevaluación)

**Vurder deg selv på en skala 1-5:**

| Ferdighet | Jeg kan... |
|-----------|------------|
| Leseforståelse | ...forstå autentiske tekster om ulike temaer |
| Skriving | ...skrive essay, brev og artikler med riktig struktur |
| Lytting | ...forstå spansktalende i normalt tempo |
| Muntlig | ...holde presentasjoner og delta i samtaler |
| Grammatikk | ...bruke subjuntivo, condicional og avanserte strukturer |
| Vokabular | ...uttrykke meg om kultur, identitet og samfunn |

**Identifiser dine svake områder og fokuser på disse i eksamensforberedelsen.**` },
    { id: 'spansk-3-10-4-example-1', type: 'example', title: 'Eksempel: Eksamensstrategi', problem: `Du har 4 timer på eksamen og 5 oppgaver. Hvordan fordeler du tiden?`, solution: `Bruk **ca. 10 minutter** på å lese alle oppgavene og planlegge. Fordel resten av tiden basert på poengverdien til hver oppgave. Sett av **15-20 minutter** til sluttkontroll. Bruk **mer tid** på skriveoppgavene.` },
    { id: 'spansk-3-10-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-10-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match grammatikktema med eksempel:', subTasks: [
        { label: 'a', task: 'Subjuntivo', solution: 'Espero que tengas un buen viaje.', answer: 'Espero que tengas un buen viaje.' },
        { label: 'b', task: 'Condicional', solution: 'Me gustaría visitar España.', answer: 'Me gustaría visitar España.' },
        { label: 'c', task: 'Pasiva refleja', solution: 'Se habla español en 21 países.', answer: 'Se habla español en 21 países.' },
        { label: 'd', task: 'Pluscuamperfecto', solution: 'Cuando llegué, ya habían comido.', answer: 'Cuando llegué, ya habían comido.' },
      ], solution: 'a) Espero que tengas un buen viaje., b) Me gustaría visitar España., c) Se habla español en 21 países., d) Cuando llegué, ya habían comido.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-10-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Identifiser feilene:', subTasks: [
        { label: 'a', task: '*Espero que tienes razón.', solution: 'Feil: tienes → tengas (subjuntivo etter esperar que)', answer: 'Feil: tienes → tengas (subjuntivo etter esperar que)' },
        { label: 'b', task: '*Si tendría dinero, viajaría.', solution: 'Feil: tendría → tuviera (imperfecto de subjuntivo etter si)', answer: 'Feil: tendría → tuviera (imperfecto de subjuntivo etter si)' },
        { label: 'c', task: '*Ayer he ido al cine.', solution: 'Feil: he ido → fui (pretérito indefinido med ayer)', answer: 'Feil: he ido → fui (pretérito indefinido med ayer)' },
        { label: 'd', task: '*Me gustaría que vienes.', solution: 'Feil: vienes → vinieras (subjuntivo etter gustaría que)', answer: 'Feil: vienes → vinieras (subjuntivo etter gustaría que)' },
      ], solution: 'a) Feil: tienes → tengas (subjuntivo etter esperar que), b) Feil: tendría → tuviera (imperfecto de subjuntivo etter si), c) Feil: he ido → fui (pretérito indefinido med ayer), d) Feil: vienes → vinieras (subjuntivo etter gustaría que)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-4-example-2', type: 'example', title: 'Eksempel: Selvvurdering', problem: `Hvordan identifiserer du dine svake områder?`, solution: `Gjør **selvvurderingen** over. Prøv å gjøre øvingsoppgaver uten hjelpemidler. Det du sliter med, bør du prioritere i forberedelsene. Be gjerne om hjelp fra læreren din.` },
    { id: 'spansk-3-10-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-10-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Rett feilene og forklar:', subTasks: [
        { label: 'a', task: '*Es importante que estudias mucho.*', solution: 'Es importante que estudies mucho. (Subjuntivo etter es importante que.)', answer: 'Es importante que estudies mucho. (Subjuntivo etter es importante que.)' },
        { label: 'b', task: '*Si yo sería rico, compraría una casa.*', solution: 'Si yo fuera rico, compraría una casa. (Imperfecto de subjuntivo i si-setninger, ikke condicional.)', answer: 'Si yo fuera rico, compraría una casa. (Imperfecto de subjuntivo i si-setninger, ikke condicional.)' },
        { label: 'c', task: '*La ventana ha sido roto por el viento.*', solution: 'La ventana ha sido rota por el viento. (Participio må samsvare: ventana = hunkjønn → rota.)', answer: 'La ventana ha sido rota por el viento. (Participio må samsvare: ventana = hunkjønn → rota.)' },
        { label: 'd', task: '*Cuando llegé, ya habían comido.*', solution: 'Cuando llegué, ya habían comido. (Riktig form av llegar i pretérito indefinido: llegué.)', answer: 'Cuando llegué, ya habían comido. (Riktig form av llegar i pretérito indefinido: llegué.)' },
      ], solution: 'a) Es importante que estudies mucho. (Subjuntivo etter es importante que.), b) Si yo fuera rico, compraría una casa. (Imperfecto de subjuntivo i si-setninger, ikke condicional.), c) La ventana ha sido rota por el viento. (Participio må samsvare: ventana = hunkjønn → rota.), d) Cuando llegué, ya habían comido. (Riktig form av llegar i pretérito indefinido: llegué.)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-10-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Integrasjonsoppgaver – bruk all grammatikk fra nivå 3:', subTasks: [
        { label: 'a', task: 'Skriv 3 setninger med subjuntivo om dine ønsker for fremtiden.', solution: 'Espero que pueda viajar por Latinoamérica. Ojalá tenga la oportunidad de trabajar en el extranjero. Quiero que el mundo sea más justo e igualitario.', answer: 'Espero que pueda viajar por Latinoamérica. Ojalá tenga la oportunidad de trabajar en el extranjero. Quiero que el mundo sea más justo e igualitario.' },
        { label: 'b', task: 'Skriv en kort tekst (3-4 setninger) med condicional og subjuntivo.', solution: 'Si tuviera más tiempo, estudiaría más español. Me gustaría que hubiera más intercambios culturales entre Noruega y España. Si pudiera elegir, viviría un año en un país hispanohablante.', answer: 'Si tuviera más tiempo, estudiaría más español. Me gustaría que hubiera más intercambios culturales entre Noruega y España. Si pudiera elegir, viviría un año en un país hispanohablante.' },
        { label: 'c', task: 'Skriv en avsluttende refleksjon om hva du har lært i spansk nivå 3.', solution: 'Durante este curso he aprendido mucho sobre la lengua y la cultura hispana. He mejorado mi capacidad de escribir textos formales y de expresar opiniones complejas. Lo más importante es que ahora puedo comunicarme con más confianza y profundidad.', answer: 'Durante este curso he aprendido mucho sobre la lengua y la cultura hispana. He mejorado mi capacidad de escribir textos formales y de expresar opiniones complejas. Lo más importante es que ahora puedo comunicarme con más confianza y profundidad.' },
        { label: 'd', task: 'Lag en personlig studieplan for de siste ukene før eksamen.', solution: 'Mi plan de estudio incluye: repasar el subjuntivo y el condicional, practicar la escritura de ensayos y cartas formales, leer artículos en español cada día, y hablar en español con compañeros. Voy a dedicar especial atención a mis puntos débiles.', answer: 'Mi plan de estudio incluye: repasar el subjuntivo y el condicional, practicar la escritura de ensayos y cartas formales, leer artículos en español cada día, y hablar en español con compañeros. Voy a dedicar especial atención a mis puntos débiles.' },
      ], solution: 'a) Espero que pueda viajar por Latinoamérica. Ojalá tenga la oportunidad de trabajar en el extranjero. Quiero que el mundo sea más justo e igualitario., b) Si tuviera más tiempo, estudiaría más español. Me gustaría que hubiera más intercambios culturales entre Noruega y España. Si pudiera elegir, viviría un año en un país hispanohablante., c) Durante este curso he aprendido mucho sobre la lengua y la cultura hispana. He mejorado mi capacidad de escribir textos formales y de expresar opiniones complejas. Lo más importante es que ahora puedo comunicarme con más confianza y profundidad., d) Mi plan de estudio incluye: repasar el subjuntivo y el condicional, practicar la escritura de ensayos y cartas formales, leer artículos en español cada día, y hablar en español con compañeros. Voy a dedicar especial atención a mis puntos débiles.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-10-4-tip-1', type: 'tip', content: `**Siste tips:** Du har kommet langt! Stol på deg selv og det du har lært. På eksamen er det viktigste å vise hva du kan, ikke å være perfekt. ¡Buena suerte!` },
    { id: 'spansk-3-10-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Repetisjon og strategier**

- **Grammatikk:** Subjuntivo, condicional, pluscuamperfecto, passiv, konjunksjoner
- **Strategier:** Les oppgaven nøye, planlegg tiden, sjekk arbeidet
- **Selvvurdering:** Identifiser svake områder, fokuser på disse
- **Teksttyper:** Ensayo, carta formal, artículo, reseña
- **Muntlig:** Forbered temaer, øv høyt, bruk strukturerende fraser
- **Lykke til!** ¡Buena suerte en el examen!` },
  ],
  exercises: [],
};

export const SPANSK_3_CHAPTERS_9_10: TextbookChapter[] = [
  CHAPTER_SPANSK_3_9_1,
  CHAPTER_SPANSK_3_9_2,
  CHAPTER_SPANSK_3_9_3,
  CHAPTER_SPANSK_3_9_4,
  CHAPTER_SPANSK_3_10_1,
  CHAPTER_SPANSK_3_10_2,
  CHAPTER_SPANSK_3_10_3,
  CHAPTER_SPANSK_3_10_4,
];
