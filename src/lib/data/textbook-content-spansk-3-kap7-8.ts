/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 3 - Kapittel 7-8 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 7: ECONOMÍA Y COMERCIO (7.1-7.4)
 * - Kapittel 8: VIAJES Y TURISMO (8.1-8.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7: ECONOMÍA Y COMERCIO
// ============================================================================

// 7.1 Economía global
export const CHAPTER_SPANSK_3_7_1: TextbookChapter = {
  id: 'spansk-3-7-1',
  courseId: 'spansk-3',
  chapterNumber: '7.1',
  title: 'Economía global',
  subtitle: 'Globaløkonomi og spansktalende markeder',
  description: 'Lær vokabular og begreper knyttet til globaløkonomi og spansktalende markeder.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå økonomiske begreper på spansk', 'diskutere globaløkonomi'],
  content: [
    { id: 'spansk-3-7-1-intro', type: 'text', content: `## Economía global

Globaløkonomien påvirker alle land, og den spansktalende verden spiller en stadig viktigere rolle. I dette kapittelet lærer du å forstå og diskutere økonomiske temaer på spansk.` },
    { id: 'spansk-3-7-1-def-1', type: 'definition', title: 'Økonomisk vokabular (vocabulario económico)', content: `**Sentrale økonomiske begreper:**

| Spansk | Norsk |
|--------|-------|
| el PIB (Producto Interior Bruto) | BNP (bruttonasjonalprodukt) |
| la inflación | inflasjonen |
| el desempleo / el paro | arbeidsledighet |
| el mercado | markedet |
| el crecimiento económico | økonomisk vekst |
| la deuda pública | offentlig gjeld |
| el tipo de cambio | valutakurs |
| la inversión extranjera | utenlandsk investering |

**Definisjon:** Globaløkonomi handler om hvordan land er knyttet sammen gjennom handel, investeringer og finansmarkeder. Spansktalende land utgjør en betydelig del av verdensøkonomien.` },
    { id: 'spansk-3-7-1-text-1', type: 'text', content: `## Spansktalende økonomier

**De største økonomiene (etter BNP):**
1. **México** - Nest største økonomi i Latin-Amerika
2. **España** - Fjerde største i eurosonen
3. **Argentina** - Tredje største i Latin-Amerika
4. **Colombia** - Voksende økonomi
5. **Chile** - Mest stabil økonomi i regionen

Til sammen har de spansktalende landene over 600 millioner innbyggere og representerer et enormt marked.` },
    { id: 'spansk-3-7-1-text-2', type: 'text', content: `## Økonomiske utfordringer

Felles utfordringer i spansktalende land:
- **Desigualdad** (ulikhet) - Stor forskjell mellom rik og fattig
- **Economía informal** - Mange jobber utenfor det formelle systemet
- **Dependencia de materias primas** - Avhengighet av råvarer
- **Fuga de cerebros** - Hjerneflukt til andre land

Noen land har også utfordringer med **inflación** (inflasjon) og **deuda externa** (utenlandsgjeld).` },
    { id: 'spansk-3-7-1-example-1', type: 'example', title: 'Eksempel: Økonomisk begrep', problem: `Hva betyr PIB, og hvorfor er det viktig?`, solution: `**PIB** (Producto Interior Bruto) er verdien av alle varer og tjenester produsert i et land i løpet av ett år. Det brukes til å måle størrelsen på en økonomi.` },
    { id: 'spansk-3-7-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-7-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match det økonomiske begrepet med norsk oversettelse:', subTasks: [
        { label: 'a', task: 'el PIB', solution: 'BNP (bruttonasjonalprodukt)', answer: 'BNP (bruttonasjonalprodukt)' },
        { label: 'b', task: 'la inflación', solution: 'inflasjon', answer: 'inflasjon' },
        { label: 'c', task: 'el desempleo', solution: 'arbeidsledighet', answer: 'arbeidsledighet' },
        { label: 'd', task: 'el crecimiento económico', solution: 'økonomisk vekst', answer: 'økonomisk vekst' },
      ], solution: 'a) BNP (bruttonasjonalprodukt), b) inflasjon, c) arbeidsledighet, d) økonomisk vekst', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-7-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg riktig ord for å fullføre setningen:', subTasks: [
        { label: 'a', task: 'El ___ de España es uno de los más grandes de Europa. (BNP)', solution: 'PIB', answer: 'PIB' },
        { label: 'b', task: 'La tasa de ___ en España ha sido alta entre los jóvenes. (arbeidsledighet)', solution: 'desempleo', answer: 'desempleo' },
        { label: 'c', task: 'La ___ afecta el poder adquisitivo de los ciudadanos. (inflasjon)', solution: 'inflación', answer: 'inflación' },
        { label: 'd', task: 'Chile atrae mucha ___ extranjera. (investering)', solution: 'inversión', answer: 'inversión' },
      ], solution: 'a) PIB, b) desempleo, c) inflación, d) inversión', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-1-example-2', type: 'example', title: 'Eksempel: Sammenligning', problem: `Sammenlign Spanias og Mexicos økonomi kort.`, solution: `España tiene una economía desarrollada dentro de la UE, mientras que México es una economía emergente con fuerte industria manufacturera. Ambos tienen un PIB significativo a nivel mundial.` },
    { id: 'spansk-3-7-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-7-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene med fullstendige setninger:', subTasks: [
        { label: 'a', task: '¿Cuál es la mayor economía de América Latina?', solution: 'Brasil es la mayor economía de América Latina, seguida de México y Argentina.', answer: 'Brasil es la mayor economía de América Latina, seguida de México y Argentina.' },
        { label: 'b', task: '¿Qué es la economía informal?', solution: 'La economía informal son las actividades económicas que no están registradas ni reguladas por el gobierno.', answer: 'La economía informal son las actividades económicas que no están registradas ni reguladas por el gobierno.' },
        { label: 'c', task: '¿Por qué es importante la inversión extranjera?', solution: 'La inversión extranjera es importante porque crea empleo, trae tecnología y contribuye al crecimiento económico.', answer: 'La inversión extranjera es importante porque crea empleo, trae tecnología y contribuye al crecimiento económico.' },
        { label: 'd', task: '¿Qué significa la fuga de cerebros?', solution: 'La fuga de cerebros significa que profesionales cualificados emigran a otros países en busca de mejores oportunidades.', answer: 'La fuga de cerebros significa que profesionales cualificados emigran a otros países en busca de mejores oportunidades.' },
      ], solution: 'a) Brasil es la mayor economía de América Latina, seguida de México y Argentina., b) La economía informal son las actividades económicas que no están registradas ni reguladas por el gobierno., c) La inversión extranjera es importante porque crea empleo, trae tecnología y contribuye al crecimiento económico., d) La fuga de cerebros significa que profesionales cualificados emigran a otros países en busca de mejores oportunidades.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-7-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv korte tekster om følgende temaer:', subTasks: [
        { label: 'a', task: 'Sammenlign økonomien i et spansktalende land med Norge.', solution: 'A diferencia de Noruega, que tiene una economía basada en el petróleo y un alto PIB per cápita, muchos países hispanohablantes dependen de materias primas diversas y enfrentan mayor desigualdad.', answer: 'A diferencia de Noruega, que tiene una economía basada en el petróleo y un alto PIB per cápita, muchos países hispanohablantes dependen de materias primas diversas y enfrentan mayor desigualdad.' },
        { label: 'b', task: 'Forklar begrepet desigualdad i Latin-Amerika.', solution: 'La desigualdad en América Latina se refiere a la gran diferencia entre ricos y pobres. A pesar del crecimiento económico, muchos países no han logrado distribuir la riqueza de manera equitativa.', answer: 'La desigualdad en América Latina se refiere a la gran diferencia entre ricos y pobres. A pesar del crecimiento económico, muchos países no han logrado distribuir la riqueza de manera equitativa.' },
        { label: 'c', task: 'Diskuter fordeler og ulemper ved globalisering for spansktalende land.', solution: 'La globalización ha traído inversión y desarrollo tecnológico, pero también ha aumentado la dependencia económica y la pérdida de industrias locales.', answer: 'La globalización ha traído inversión y desarrollo tecnológico, pero también ha aumentado la dependencia económica y la pérdida de industrias locales.' },
        { label: 'd', task: 'Hva kan gjøres for å redusere arbeidsledighet blant unge i Spania?', solution: 'Para reducir el desempleo juvenil en España, se podrían implementar programas de formación profesional, incentivar el emprendimiento y reformar el mercado laboral.', answer: 'Para reducir el desempleo juvenil en España, se podrían implementar programas de formación profesional, incentivar el emprendimiento y reformar el mercado laboral.' },
      ], solution: 'a) A diferencia de Noruega, que tiene una economía basada en el petróleo y un alto PIB per cápita, muchos países hispanohablantes dependen de materias primas diversas y enfrentan mayor desigualdad., b) La desigualdad en América Latina se refiere a la gran diferencia entre ricos y pobres. A pesar del crecimiento económico, muchos países no han logrado distribuir la riqueza de manera equitativa., c) La globalización ha traído inversión y desarrollo tecnológico, pero también ha aumentado la dependencia económica y la pérdida de industrias locales., d) Para reducir el desempleo juvenil en España, se podrían implementar programas de formación profesional, incentivar el emprendimiento y reformar el mercado laboral.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-1-tip-1', type: 'tip', content: `**Tips:** Følg med på spanske nyheter (El País, BBC Mundo) for å holde deg oppdatert på økonomiske temaer. Økonomiordforråd er viktig for å forstå avanserte tekster.` },
    { id: 'spansk-3-7-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Globaløkonomi**

- **Nøkkelbegreper:** PIB, inflación, desempleo, mercado, crecimiento
- **Store økonomier:** México, España, Argentina, Colombia, Chile
- **Utfordringer:** Desigualdad, economía informal, dependencia de materias primas
- **Viktig:** Spansktalende land representerer over 600 millioner innbyggere` },
  ],
  exercises: [],
};

// 7.2 Comercio internacional
export const CHAPTER_SPANSK_3_7_2: TextbookChapter = {
  id: 'spansk-3-7-2',
  courseId: 'spansk-3',
  chapterNumber: '7.2',
  title: 'Comercio internacional',
  subtitle: 'Internasjonal handel',
  description: 'Lær om internasjonal handel og handelsavtaler mellom spansktalende land.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå handelsterminologi på spansk', 'diskutere internasjonale handelsavtaler'],
  content: [
    { id: 'spansk-3-7-2-intro', type: 'text', content: `## Comercio internacional

Internasjonal handel er grunnleggende for økonomisk utvikling. Spansktalende land deltar aktivt i globale handelssystemer gjennom ulike avtaler og organisasjoner.` },
    { id: 'spansk-3-7-2-def-1', type: 'definition', title: 'Handelsterminologi (terminología comercial)', content: `**Viktige handelsbegreper:**

| Spansk | Norsk |
|--------|-------|
| importar | importere |
| exportar | eksportere |
| el tratado comercial | handelsavtale |
| los aranceles | tollsatser |
| el libre comercio | frihandel |
| la balanza comercial | handelsbalanse |
| las materias primas | råvarer |
| el superávit / el déficit | overskudd / underskudd |

**Definisjon:** Internasjonal handel er utveksling av varer og tjenester mellom land. Handelsavtaler regulerer vilkårene for denne utvekslingen.` },
    { id: 'spansk-3-7-2-text-1', type: 'text', content: `## Viktige handelsavtaler

**Mercosur** (Mercado Común del Sur):
- Medlemmer: Argentina, Brasil, Paraguay, Uruguay
- Assosierte: Bolivia, Chile, Colombia, Ecuador, Peru
- Mål: Frihandel og økonomisk integrasjon i Sør-Amerika

**Alianza del Pacífico:**
- Medlemmer: Chile, Colombia, México, Perú
- Mål: Frihandel og integrasjon med Asia-Stillehavsregionen

**EU-Mercosur:**
- Handelsavtale mellom EU og Mercosur-landene
- Viktig for Spania som bro mellom Europa og Latin-Amerika` },
    { id: 'spansk-3-7-2-text-2', type: 'text', content: `## Hva eksporterer spansktalende land?

| Land | Hovedeksport |
|------|-------------|
| México | Biler, elektronikk, olje |
| Chile | Kobber, frukt, vin |
| Argentina | Soyabønner, kjøtt, korn |
| Colombia | Kaffe, olje, blomster |
| España | Biler, mat, turisme |
| Perú | Kobber, gull, fisk |

Handelsbalansen viser forskjellen mellom eksport og import.` },
    { id: 'spansk-3-7-2-example-1', type: 'example', title: 'Eksempel: Handelsavtaler', problem: `Hva er Mercosur, og hvilke land er medlemmer?`, solution: `**Mercosur** (Mercado Común del Sur) er en handelsblokk i Sør-Amerika med Argentina, Brasil, Paraguay og Uruguay som fullverdige medlemmer. Målet er frihandel og økonomisk integrasjon.` },
    { id: 'spansk-3-7-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-7-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match begrepet med definisjonen:', subTasks: [
        { label: 'a', task: 'importar', solution: 'kjøpe varer fra utlandet', answer: 'kjøpe varer fra utlandet' },
        { label: 'b', task: 'exportar', solution: 'selge varer til utlandet', answer: 'selge varer til utlandet' },
        { label: 'c', task: 'los aranceles', solution: 'tollsatser på importerte varer', answer: 'tollsatser på importerte varer' },
        { label: 'd', task: 'el libre comercio', solution: 'handel uten tollbarrierer', answer: 'handel uten tollbarrierer' },
      ], solution: 'a) kjøpe varer fra utlandet, b) selge varer til utlandet, c) tollsatser på importerte varer, d) handel uten tollbarrierer', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-7-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match landet med hovedeksportvaren:', subTasks: [
        { label: 'a', task: 'Chile', solution: 'kobber (cobre)', answer: 'kobber (cobre)' },
        { label: 'b', task: 'Colombia', solution: 'kaffe (café)', answer: 'kaffe (café)' },
        { label: 'c', task: 'Argentina', solution: 'soyabønner (soja)', answer: 'soyabønner (soja)' },
        { label: 'd', task: 'México', solution: 'biler (automóviles)', answer: 'biler (automóviles)' },
      ], solution: 'a) kobber (cobre), b) kaffe (café), c) soyabønner (soja), d) biler (automóviles)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-2-example-2', type: 'example', title: 'Eksempel: Eksport', problem: `Hva er Chiles viktigste eksportvarer?`, solution: `Chile exporta principalmente **cobre** (kobber), **frutas** (frukt) y **vino** (vin). El cobre representa más del 50% de sus exportaciones.` },
    { id: 'spansk-3-7-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-7-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Fyll inn riktig handelsterm og svar på spansk:', subTasks: [
        { label: 'a', task: 'Cuando un país vende productos a otro país, se llama ___.', solution: 'exportar', answer: 'exportar' },
        { label: 'b', task: 'Los impuestos que se pagan por productos importados son los ___.', solution: 'aranceles', answer: 'aranceles' },
        { label: 'c', task: '¿Qué es la balanza comercial?', solution: 'La balanza comercial es la diferencia entre el valor de las exportaciones y las importaciones de un país.', answer: 'La balanza comercial es la diferencia entre el valor de las exportaciones y las importaciones de un país.' },
        { label: 'd', task: '¿Cuál es el objetivo de Mercosur?', solution: 'El objetivo de Mercosur es promover el libre comercio y la integración económica entre sus países miembros.', answer: 'El objetivo de Mercosur es promover el libre comercio y la integración económica entre sus países miembros.' },
      ], solution: 'a) exportar, b) aranceles, c) La balanza comercial es la diferencia entre el valor de las exportaciones y las importaciones de un país., d) El objetivo de Mercosur es promover el libre comercio y la integración económica entre sus países miembros.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-7-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort analyse (3-4 setninger) om:', subTasks: [
        { label: 'a', task: 'Fordeler og ulemper ved frihandel for Latin-Amerika.', solution: 'El libre comercio permite acceso a mercados más grandes y precios más bajos, pero puede perjudicar a industrias locales que no pueden competir con productos importados más baratos.', answer: 'El libre comercio permite acceso a mercados más grandes y precios más bajos, pero puede perjudicar a industrias locales que no pueden competir con productos importados más baratos.' },
        { label: 'b', task: 'Hvorfor er Alianza del Pacífico viktig?', solution: 'La Alianza del Pacífico conecta a cuatro economías latinoamericanas con los mercados de Asia-Pacífico, promoviendo la diversificación comercial y reduciendo la dependencia de un solo mercado.', answer: 'La Alianza del Pacífico conecta a cuatro economías latinoamericanas con los mercados de Asia-Pacífico, promoviendo la diversificación comercial y reduciendo la dependencia de un solo mercado.' },
        { label: 'c', task: 'Spanias rolle som bro mellom EU og Latin-Amerika.', solution: 'España actúa como puente entre la UE y América Latina gracias a los lazos históricos, lingüísticos y culturales. Esto facilita acuerdos comerciales como el tratado EU-Mercosur.', answer: 'España actúa como puente entre la UE y América Latina gracias a los lazos históricos, lingüísticos y culturales. Esto facilita acuerdos comerciales como el tratado EU-Mercosur.' },
        { label: 'd', task: 'Hvordan påvirker tollsatser forbrukerne?', solution: 'Los aranceles altos encarecen los productos importados para los consumidores, pero protegen la industria nacional. Un equilibrio entre protección y apertura es fundamental.', answer: 'Los aranceles altos encarecen los productos importados para los consumidores, pero protegen la industria nacional. Un equilibrio entre protección y apertura es fundamental.' },
      ], solution: 'a) El libre comercio permite acceso a mercados más grandes y precios más bajos, pero puede perjudicar a industrias locales que no pueden competir con productos importados más baratos., b) La Alianza del Pacífico conecta a cuatro economías latinoamericanas con los mercados de Asia-Pacífico, promoviendo la diversificación comercial y reduciendo la dependencia de un solo mercado., c) España actúa como puente entre la UE y América Latina gracias a los lazos históricos, lingüísticos y culturales. Esto facilita acuerdos comerciales como el tratado EU-Mercosur., d) Los aranceles altos encarecen los productos importados para los consumidores, pero protegen la industria nacional. Un equilibrio entre protección y apertura es fundamental.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-2-tip-1', type: 'tip', content: `**Tips:** Handelsavtaler endres over tid. Følg med på aktuelle nyheter for å forstå dynamikken i internasjonal handel.` },
    { id: 'spansk-3-7-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Internasjonal handel**

- **Begreper:** importar, exportar, aranceles, libre comercio, balanza comercial
- **Handelsavtaler:** Mercosur, Alianza del Pacífico, EU-Mercosur
- **Eksport:** Råvarer (kobber, kaffe, soya), industri (biler, elektronikk)
- **Viktig:** Handel er grunnleggende for økonomisk utvikling` },
  ],
  exercises: [],
};

// 7.3 El español de negocios
export const CHAPTER_SPANSK_3_7_3: TextbookChapter = {
  id: 'spansk-3-7-3',
  courseId: 'spansk-3',
  chapterNumber: '7.3',
  title: 'El español de negocios',
  subtitle: 'Forretningsspansk',
  description: 'Lær formelt forretningsspråk, e-postskriving og møtevokabular.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke formelt forretningsspansk', 'skrive profesjonelle e-poster'],
  content: [
    { id: 'spansk-3-7-3-intro', type: 'text', content: `## El español de negocios

I profesjonelle sammenhenger kreves et formelt og presist språk. Forretningsspansk skiller seg fra hverdagsspråk i ordvalg, tone og struktur.` },
    { id: 'spansk-3-7-3-def-1', type: 'definition', title: 'Forretningsspansk (español de negocios)', content: `**Formelt forretningsspråk:**

| Uformelt | Formelt (negocios) |
|----------|--------------------|
| Hola | Estimado/a señor/a |
| ¿Qué tal? | ¿Cómo se encuentra usted? |
| Quiero... | Desearía / Me gustaría... |
| Gracias | Le agradezco sinceramente |
| Adiós | Atentamente / Cordialmente |

**Definisjon:** Forretningsspansk (español de negocios) er den formelle varianten av spansk som brukes i profesjonelle sammenhenger: møter, forhandlinger, e-post og rapporter.` },
    { id: 'spansk-3-7-3-text-1', type: 'text', content: `## Profesjonell e-post

**Struktur:**
1. **Encabezado:** Estimado/a Sr./Sra. + Etternavn
2. **Introducción:** Me dirijo a usted para...
3. **Cuerpo:** Forklaring, forespørsel, informasjon
4. **Despedida:** Quedo a su disposición / En espera de su respuesta
5. **Firma:** Atentamente, + Navn og tittel

**Eksempel:**
*Estimada Sra. García:*
*Me dirijo a usted para solicitar información sobre los servicios de su empresa.*
*Quedo a la espera de su respuesta.*
*Atentamente,*
*Per Hansen, Director Comercial*` },
    { id: 'spansk-3-7-3-text-2', type: 'text', content: `## Møtevokabular

| Spansk | Norsk |
|--------|-------|
| convocar una reunión | innkalle til møte |
| el orden del día | dagsorden |
| tomar la palabra | ta ordet |
| proponer | foreslå |
| llegar a un acuerdo | komme til enighet |
| el acta de la reunión | møtereferat |
| la negociación | forhandling |
| el plazo | frist |

I et møte er det viktig å bruke formelle vendinger og respektere talerett.` },
    { id: 'spansk-3-7-3-example-1', type: 'example', title: 'Eksempel: Formelt brev', problem: `Skriv en formell åpning til en e-post til Sr. López.`, solution: `**Estimado Sr. López:** Me dirijo a usted para... / Le escribo en relación con...` },
    { id: 'spansk-3-7-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-7-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match den uformelle frasen med formelt alternativ:', subTasks: [
        { label: 'a', task: 'Hola, ¿qué tal?', solution: 'Estimado/a señor/a, ¿cómo se encuentra?', answer: 'Estimado/a señor/a, ¿cómo se encuentra?' },
        { label: 'b', task: 'Quiero saber...', solution: 'Desearía conocer... / Me gustaría saber...', answer: 'Desearía conocer... / Me gustaría saber...' },
        { label: 'c', task: 'Gracias por todo', solution: 'Le agradezco sinceramente su colaboración', answer: 'Le agradezco sinceramente su colaboración' },
        { label: 'd', task: 'Adiós, hasta luego', solution: 'Atentamente / Cordialmente', answer: 'Atentamente / Cordialmente' },
      ], solution: 'a) Estimado/a señor/a, ¿cómo se encuentra?, b) Desearía conocer... / Me gustaría saber..., c) Le agradezco sinceramente su colaboración, d) Atentamente / Cordialmente', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-7-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match møtebegrepet med norsk oversettelse:', subTasks: [
        { label: 'a', task: 'convocar una reunión', solution: 'innkalle til møte', answer: 'innkalle til møte' },
        { label: 'b', task: 'el orden del día', solution: 'dagsorden', answer: 'dagsorden' },
        { label: 'c', task: 'llegar a un acuerdo', solution: 'komme til enighet', answer: 'komme til enighet' },
        { label: 'd', task: 'el acta de la reunión', solution: 'møtereferat', answer: 'møtereferat' },
      ], solution: 'a) innkalle til møte, b) dagsorden, c) komme til enighet, d) møtereferat', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-3-example-2', type: 'example', title: 'Eksempel: Møteuttrykk', problem: `Hvordan foreslår du noe i et møte?`, solution: `**Me gustaría proponer que...** / **Propongo que...** / **Sugiero que consideremos...**` },
    { id: 'spansk-3-7-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-7-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv formelle setninger for følgende situasjoner:', subTasks: [
        { label: 'a', task: 'Du vil be om informasjon om et produkt.', solution: 'Me dirijo a usted para solicitar información detallada sobre su producto.', answer: 'Me dirijo a usted para solicitar información detallada sobre su producto.' },
        { label: 'b', task: 'Du vil avtale et møte.', solution: 'Le escribo para concertar una reunión a su conveniencia.', answer: 'Le escribo para concertar una reunión a su conveniencia.' },
        { label: 'c', task: 'Du vil takke for et samarbeid.', solution: 'Quisiera expresar mi agradecimiento por la excelente colaboración.', answer: 'Quisiera expresar mi agradecimiento por la excelente colaboración.' },
        { label: 'd', task: 'Du vil avslutte en e-post formelt.', solution: 'Quedo a su entera disposición. Atentamente, [Nombre], [Cargo].', answer: 'Quedo a su entera disposición. Atentamente, [Nombre], [Cargo].' },
      ], solution: 'a) Me dirijo a usted para solicitar información detallada sobre su producto., b) Le escribo para concertar una reunión a su conveniencia., c) Quisiera expresar mi agradecimiento por la excelente colaboración., d) Quedo a su entera disposición. Atentamente, [Nombre], [Cargo].', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-7-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort profesjonell e-post (5-6 setninger) for følgende situasjoner:', subTasks: [
        { label: 'a', task: 'Søk om informasjon om et kurs i Barcelona.', solution: 'Estimado/a señor/a: Me dirijo a usted para solicitar información sobre los cursos de español de negocios que ofrece su institución. Estoy interesado/a en un curso intensivo durante el mes de julio. Le agradecería que me enviara el programa y las tarifas. Quedo a la espera de su respuesta. Atentamente, ...', answer: 'Estimado/a señor/a: Me dirijo a usted para solicitar información sobre los cursos de español de negocios que ofrece su institución. Estoy interesado/a en un curso intensivo durante el mes de julio. Le agradecería que me enviara el programa y las tarifas. Quedo a la espera de su respuesta. Atentamente, ...' },
        { label: 'b', task: 'Bekreft deltakelse på en konferanse.', solution: 'Estimada Sra. Martínez: Le confirmo mi participación en la conferencia del 15 de marzo. Agradeceré que me reserve un lugar en la sesión de la tarde. Asimismo, necesitaré alojamiento para dos noches. Quedo a su disposición. Cordialmente, ...', answer: 'Estimada Sra. Martínez: Le confirmo mi participación en la conferencia del 15 de marzo. Agradeceré que me reserve un lugar en la sesión de la tarde. Asimismo, necesitaré alojamiento para dos noches. Quedo a su disposición. Cordialmente, ...' },
        { label: 'c', task: 'Reklamer et produkt som ble levert skadet.', solution: 'Estimado Sr. Rodríguez: Me pongo en contacto con usted para informarle de que el pedido recibido el día 10 presenta daños. Adjunto fotografías del producto dañado. Solicito la sustitución del producto o el reembolso del importe. En espera de su pronta respuesta. Atentamente, ...', answer: 'Estimado Sr. Rodríguez: Me pongo en contacto con usted para informarle de que el pedido recibido el día 10 presenta daños. Adjunto fotografías del producto dañado. Solicito la sustitución del producto o el reembolso del importe. En espera de su pronta respuesta. Atentamente, ...' },
        { label: 'd', task: 'Foreslå et samarbeidsprosjekt med en spansk bedrift.', solution: 'Estimada Sra. López: Me dirijo a usted en nombre de nuestra empresa para proponerle un proyecto de colaboración. Consideramos que una alianza entre nuestras empresas sería mutuamente beneficiosa. Le adjunto un documento con los detalles de nuestra propuesta. ¿Sería posible concertar una reunión? Atentamente, ...', answer: 'Estimada Sra. López: Me dirijo a usted en nombre de nuestra empresa para proponerle un proyecto de colaboración. Consideramos que una alianza entre nuestras empresas sería mutuamente beneficiosa. Le adjunto un documento con los detalles de nuestra propuesta. ¿Sería posible concertar una reunión? Atentamente, ...' },
      ], solution: 'a) Estimado/a señor/a: Me dirijo a usted para solicitar información sobre los cursos de español de negocios que ofrece su institución. Estoy interesado/a en un curso intensivo durante el mes de julio. Le agradecería que me enviara el programa y las tarifas. Quedo a la espera de su respuesta. Atentamente, ..., b) Estimada Sra. Martínez: Le confirmo mi participación en la conferencia del 15 de marzo. Agradeceré que me reserve un lugar en la sesión de la tarde. Asimismo, necesitaré alojamiento para dos noches. Quedo a su disposición. Cordialmente, ..., c) Estimado Sr. Rodríguez: Me pongo en contacto con usted para informarle de que el pedido recibido el día 10 presenta daños. Adjunto fotografías del producto dañado. Solicito la sustitución del producto o el reembolso del importe. En espera de su pronta respuesta. Atentamente, ..., d) Estimada Sra. López: Me dirijo a usted en nombre de nuestra empresa para proponerle un proyecto de colaboración. Consideramos que una alianza entre nuestras empresas sería mutuamente beneficiosa. Le adjunto un documento con los detalles de nuestra propuesta. ¿Sería posible concertar una reunión? Atentamente, ...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-3-tip-1', type: 'tip', content: `**Tips:** I forretningsspansk er det bedre å være for formell enn for uformell. Bruk alltid *usted* med forretningspartnere du ikke kjenner godt.` },
    { id: 'spansk-3-7-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Forretningsspansk**

- **Formelt språk:** Estimado/a, Me dirijo a usted, Atentamente
- **E-poststruktur:** Encabezado → Introducción → Cuerpo → Despedida → Firma
- **Møtevokabular:** convocar, orden del día, proponer, acuerdo
- **Viktig:** Bruk usted, vær formell og presis` },
  ],
  exercises: [],
};

// 7.4 Textos económicos
export const CHAPTER_SPANSK_3_7_4: TextbookChapter = {
  id: 'spansk-3-7-4',
  courseId: 'spansk-3',
  chapterNumber: '7.4',
  title: 'Textos económicos',
  subtitle: 'Lese og skrive om økonomi',
  description: 'Lær å lese økonomiske rapporter og skrive sammendrag av økonomiske data.',
  estimatedMinutes: 45,
  competenceGoals: ['lese og forstå økonomiske tekster', 'analysere økonomisk statistikk'],
  content: [
    { id: 'spansk-3-7-4-intro', type: 'text', content: `## Textos económicos

Å kunne lese og forstå økonomiske tekster er en viktig ferdighet i spanskfaget på avansert nivå. Her lærer du å tolke data og skrive egne sammendrag.` },
    { id: 'spansk-3-7-4-def-1', type: 'definition', title: 'Økonomiske tekster (textos económicos)', content: `**Typer økonomiske tekster:**

| Type | Spansk | Innhold |
|------|--------|--------|
| Rapport | el informe | Detaljert analyse |
| Artikkel | el artículo | Nyheter/analyse |
| Statistikk | las estadísticas | Tall og data |
| Grafisk fremstilling | el gráfico | Visuell data |

**Definisjon:** Økonomiske tekster presenterer data, analyser og argumenter om økonomiske forhold. For å lese dem effektivt trenger du spesifikt vokabular og evnen til å tolke statistikk.` },
    { id: 'spansk-3-7-4-text-1', type: 'text', content: `## Statistisk vokabular

| Spansk | Norsk |
|--------|-------|
| aumentar / crecer | øke / vokse |
| disminuir / reducir | minke / redusere |
| la tasa de | prosentsatsen for |
| el porcentaje | prosentandelen |
| según los datos | ifølge dataene |
| en comparación con | sammenlignet med |
| alcanzar un máximo | nå et toppunkt |
| registrar una caída | oppleve et fall |

Disse uttrykkene er essensielle for å beskrive trender og utviklinger.` },
    { id: 'spansk-3-7-4-text-2', type: 'text', content: `## Skrive et sammendrag (resumen)

**Struktur for økonomisk sammendrag:**
1. **Tema:** ¿De qué trata el texto? (Hva handler teksten om?)
2. **Datos principales:** Viktigste tall og fakta
3. **Tendencias:** Trender - økning, nedgang, stabilitet
4. **Conclusión:** Hovedkonklusjon

**Nyttige fraser:**
- *El texto/informe analiza...* (Teksten/rapporten analyserer...)
- *Los datos muestran que...* (Dataene viser at...)
- *Se observa un aumento/descenso de...* (Man ser en økning/nedgang i...)
- *En conclusión, se puede afirmar que...* (Avslutningsvis kan man hevde at...)` },
    { id: 'spansk-3-7-4-example-1', type: 'example', title: 'Eksempel: Lese statistikk', problem: `Beskriv følgende data: Arbeidsledighet i Spania: 2019: 14%, 2020: 16%, 2021: 15%.`, solution: `La tasa de desempleo en España **aumentó** del 14% en 2019 al 16% en 2020, probablemente debido a la pandemia. En 2021 **disminuyó** ligeramente al 15%.` },
    { id: 'spansk-3-7-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-7-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match den statistiske termen med norsk:', subTasks: [
        { label: 'a', task: 'aumentar', solution: 'øke', answer: 'øke' },
        { label: 'b', task: 'disminuir', solution: 'minke', answer: 'minke' },
        { label: 'c', task: 'la tasa de', solution: 'prosentsatsen for', answer: 'prosentsatsen for' },
        { label: 'd', task: 'según los datos', solution: 'ifølge dataene', answer: 'ifølge dataene' },
      ], solution: 'a) øke, b) minke, c) prosentsatsen for, d) ifølge dataene', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-7-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg riktig verb (aumentar/disminuir/mantener):', subTasks: [
        { label: 'a', task: 'El PIB pasó de 3% a 5%. El PIB ___.', solution: 'aumentó', answer: 'aumentó' },
        { label: 'b', task: 'El desempleo bajó del 20% al 15%. El desempleo ___.', solution: 'disminuyó', answer: 'disminuyó' },
        { label: 'c', task: 'La inflación se quedó en 2%. La inflación se ___.', solution: 'mantuvo', answer: 'mantuvo' },
        { label: 'd', task: 'Las exportaciones crecieron un 10%. Las exportaciones ___.', solution: 'aumentaron', answer: 'aumentaron' },
      ], solution: 'a) aumentó, b) disminuyó, c) mantuvo, d) aumentaron', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-4-example-2', type: 'example', title: 'Eksempel: Sammendrag', problem: `Skriv åpningssetningen til et sammendrag om Chiles eksport.`, solution: `**El presente informe analiza** la evolución de las exportaciones chilenas en la última década, con especial atención al sector del cobre.` },
    { id: 'spansk-3-7-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-7-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Beskriv følgende data med spanske setninger:', subTasks: [
        { label: 'a', task: 'BNP Spania: 2019: 1,4 billion €, 2020: 1,1 billion €', solution: 'El PIB de España disminuyó de 1,4 billones de euros en 2019 a 1,1 billones en 2020.', answer: 'El PIB de España disminuyó de 1,4 billones de euros en 2019 a 1,1 billones en 2020.' },
        { label: 'b', task: 'Eksport Chile: kobber utgjør 55%', solution: 'Según los datos, el cobre representa el 55% de las exportaciones totales de Chile.', answer: 'Según los datos, el cobre representa el 55% de las exportaciones totales de Chile.' },
        { label: 'c', task: 'Arbeidsledighet blant unge i Spania: 40%', solution: 'La tasa de desempleo juvenil en España alcanza el 40%, una de las más altas de Europa.', answer: 'La tasa de desempleo juvenil en España alcanza el 40%, una de las más altas de Europa.' },
        { label: 'd', task: 'Turisme i Spania: 83 mill. turister i 2019', solution: 'España registró 83 millones de turistas en 2019, lo que la convierte en uno de los destinos más visitados del mundo.', answer: 'España registró 83 millones de turistas en 2019, lo que la convierte en uno de los destinos más visitados del mundo.' },
      ], solution: 'a) El PIB de España disminuyó de 1,4 billones de euros en 2019 a 1,1 billones en 2020., b) Según los datos, el cobre representa el 55% de las exportaciones totales de Chile., c) La tasa de desempleo juvenil en España alcanza el 40%, una de las más altas de Europa., d) España registró 83 millones de turistas en 2019, lo que la convierte en uno de los destinos más visitados del mundo.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-7-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et kort sammendrag (4-5 setninger) basert på:', subTasks: [
        { label: 'a', task: 'Mexicos økonomi: BNP vekst 2%, inflasjon 4%, ledighet 3,5%', solution: 'El informe analiza la situación económica de México. El PIB registró un crecimiento del 2%, mientras que la inflación se situó en el 4%. La tasa de desempleo se mantuvo relativamente baja en un 3,5%. Sin embargo, la economía informal sigue siendo un desafío importante. En conclusión, México muestra un crecimiento moderado pero estable.', answer: 'El informe analiza la situación económica de México. El PIB registró un crecimiento del 2%, mientras que la inflación se situó en el 4%. La tasa de desempleo se mantuvo relativamente baja en un 3,5%. Sin embargo, la economía informal sigue siendo un desafío importante. En conclusión, México muestra un crecimiento moderado pero estable.' },
        { label: 'b', task: 'Spanias handelsbalanse: eksport opp 5%, import opp 8%', solution: 'Los datos muestran que las exportaciones españolas aumentaron un 5%, mientras que las importaciones crecieron un 8%. Esto resulta en un aumento del déficit comercial. Los principales productos de exportación son automóviles y alimentos. En comparación con el año anterior, la balanza comercial se ha deteriorado ligeramente.', answer: 'Los datos muestran que las exportaciones españolas aumentaron un 5%, mientras que las importaciones crecieron un 8%. Esto resulta en un aumento del déficit comercial. Los principales productos de exportación son automóviles y alimentos. En comparación con el año anterior, la balanza comercial se ha deteriorado ligeramente.' },
        { label: 'c', task: 'Analyser turismens betydning for Spanias økonomi', solution: 'El turismo es uno de los pilares fundamentales de la economía española. Según los datos más recientes, el sector turístico contribuye con aproximadamente el 12% del PIB. España recibe más de 80 millones de visitantes anuales. Sin embargo, la dependencia del turismo también representa un riesgo económico en tiempos de crisis.', answer: 'El turismo es uno de los pilares fundamentales de la economía española. Según los datos más recientes, el sector turístico contribuye con aproximadamente el 12% del PIB. España recibe más de 80 millones de visitantes anuales. Sin embargo, la dependencia del turismo también representa un riesgo económico en tiempos de crisis.' },
        { label: 'd', task: 'Sammenlign utviklingen i to latinamerikanske økonomier', solution: 'En comparación, Chile y Colombia han seguido trayectorias económicas diferentes. Mientras Chile se ha destacado por su estabilidad macroeconómica, Colombia ha experimentado un crecimiento más variable. Ambos países son miembros de la Alianza del Pacífico. Sin embargo, los niveles de desigualdad siguen siendo un reto común.', answer: 'En comparación, Chile y Colombia han seguido trayectorias económicas diferentes. Mientras Chile se ha destacado por su estabilidad macroeconómica, Colombia ha experimentado un crecimiento más variable. Ambos países son miembros de la Alianza del Pacífico. Sin embargo, los niveles de desigualdad siguen siendo un reto común.' },
      ], solution: 'a) El informe analiza la situación económica de México. El PIB registró un crecimiento del 2%, mientras que la inflación se situó en el 4%. La tasa de desempleo se mantuvo relativamente baja en un 3,5%. Sin embargo, la economía informal sigue siendo un desafío importante. En conclusión, México muestra un crecimiento moderado pero estable., b) Los datos muestran que las exportaciones españolas aumentaron un 5%, mientras que las importaciones crecieron un 8%. Esto resulta en un aumento del déficit comercial. Los principales productos de exportación son automóviles y alimentos. En comparación con el año anterior, la balanza comercial se ha deteriorado ligeramente., c) El turismo es uno de los pilares fundamentales de la economía española. Según los datos más recientes, el sector turístico contribuye con aproximadamente el 12% del PIB. España recibe más de 80 millones de visitantes anuales. Sin embargo, la dependencia del turismo también representa un riesgo económico en tiempos de crisis., d) En comparación, Chile y Colombia han seguido trayectorias económicas diferentes. Mientras Chile se ha destacado por su estabilidad macroeconómica, Colombia ha experimentado un crecimiento más variable. Ambos países son miembros de la Alianza del Pacífico. Sin embargo, los niveles de desigualdad siguen siendo un reto común.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-7-4-tip-1', type: 'tip', content: `**Tips:** Øv deg på å lese korte økonomiske artikler fra El País Economía eller BBC Mundo Economía. Start med overskrifter og sammendrag.` },
    { id: 'spansk-3-7-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Økonomiske tekster**

- **Teksttyper:** informe, artículo, estadísticas, gráfico
- **Statistisk vokabular:** aumentar, disminuir, tasa de, porcentaje
- **Sammendrag:** Tema → Datos → Tendencias → Conclusión
- **Fraser:** Los datos muestran, Se observa, En conclusión` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: VIAJES Y TURISMO
// ============================================================================

// 8.1 Planificar un viaje
export const CHAPTER_SPANSK_3_8_1: TextbookChapter = {
  id: 'spansk-3-8-1',
  courseId: 'spansk-3',
  chapterNumber: '8.1',
  title: 'Planificar un viaje',
  subtitle: 'Planlegge reise i detalj',
  description: 'Lær å planlegge en reise med bestilling, reiserute og transport på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['planlegge en reise på spansk', 'gjøre reservasjoner og sammenligne alternativer'],
  content: [
    { id: 'spansk-3-8-1-intro', type: 'text', content: `## Planificar un viaje

Å planlegge en reise til et spansktalende land krever språkferdigheter for å kommunisere med reisebyråer, hoteller og transportselskaper. Her lærer du å gjøre dette på en avansert måte.` },
    { id: 'spansk-3-8-1-def-1', type: 'definition', title: 'Reiseplanlegging (planificación de viajes)', content: `**Viktige reisebegreper:**

| Spansk | Norsk |
|--------|-------|
| reservar | bestille/reservere |
| el itinerario | reiserute |
| el alojamiento | overnatting |
| el vuelo | flyvning |
| el billete / el boleto | billett |
| la estancia | opphold |
| el seguro de viaje | reiseforsikring |
| la temporada alta/baja | høy-/lavsesong |

**Definisjon:** Reiseplanlegging innebærer å undersøke reisemål, bestille transport og overnatting, og lage en detaljert reiserute.` },
    { id: 'spansk-3-8-1-text-1', type: 'text', content: `## Bestille overnatting

**Typer overnatting:**
- **Hotel** (hotel) - Fra 1-5 stjerner
- **Hostal/albergue** (vandrerhjem) - Rimelig alternativ
- **Apartamento turístico** (ferieleilighet) - Selvhushold
- **Parador** (historisk hotell i Spania) - Unike opplevelser
- **Casa rural** (landsted) - Landlig turisme

**Nyttige fraser:**
- *Quisiera reservar una habitación doble para tres noches.*
- *¿Está incluido el desayuno?*
- *¿Cuál es el precio por noche en temporada alta?*
- *¿Tienen habitaciones disponibles del 15 al 20 de julio?*` },
    { id: 'spansk-3-8-1-text-2', type: 'text', content: `## Sammenligne reisealternativer

**Nyttige uttrykk:**
- *Es más barato/caro que...* (Det er billigere/dyrere enn...)
- *La mejor opción sería...* (Det beste alternativet ville være...)
- *Conviene más...* (Det lønner seg mer...)
- *En cuanto a precio/ubicación/comodidad...* (Når det gjelder pris/beliggenhet/komfort...)
- *Teniendo en cuenta que...* (Med tanke på at...)

Å sammenligne alternativer er viktig for å ta gode valg.` },
    { id: 'spansk-3-8-1-example-1', type: 'example', title: 'Eksempel: Reservasjon', problem: `Bestill et dobbeltrom med frokost for 5 netter.`, solution: `**Quisiera reservar una habitación doble con desayuno incluido para cinco noches, del 10 al 15 de agosto. ¿Cuál sería el precio total?**` },
    { id: 'spansk-3-8-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-8-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match reisebegrepet med norsk oversettelse:', subTasks: [
        { label: 'a', task: 'el itinerario', solution: 'reiserute', answer: 'reiserute' },
        { label: 'b', task: 'el alojamiento', solution: 'overnatting', answer: 'overnatting' },
        { label: 'c', task: 'el seguro de viaje', solution: 'reiseforsikring', answer: 'reiseforsikring' },
        { label: 'd', task: 'la temporada baja', solution: 'lavsesong', answer: 'lavsesong' },
      ], solution: 'a) reiserute, b) overnatting, c) reiseforsikring, d) lavsesong', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-8-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg riktig frase for situasjonen:', subTasks: [
        { label: 'a', task: 'Du vil bestille et enkeltrom.', solution: 'Quisiera reservar una habitación individual.', answer: 'Quisiera reservar una habitación individual.' },
        { label: 'b', task: 'Du spør om frokost er inkludert.', solution: '¿Está incluido el desayuno?', answer: '¿Está incluido el desayuno?' },
        { label: 'c', task: 'Du vil vite prisen per natt.', solution: '¿Cuál es el precio por noche?', answer: '¿Cuál es el precio por noche?' },
        { label: 'd', task: 'Du spør om ledige rom.', solution: '¿Tienen habitaciones disponibles?', answer: '¿Tienen habitaciones disponibles?' },
      ], solution: 'a) Quisiera reservar una habitación individual., b) ¿Está incluido el desayuno?, c) ¿Cuál es el precio por noche?, d) ¿Tienen habitaciones disponibles?', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-1-example-2', type: 'example', title: 'Eksempel: Sammenligning', problem: `Sammenlign et hotell (100€/natt) med en ferieleilighet (70€/natt).`, solution: `**El hotel cuesta 100€ por noche, mientras que el apartamento cuesta solo 70€. Sin embargo, el hotel incluye desayuno. Teniendo en cuenta la comodidad, el hotel puede ser mejor opción.**` },
    { id: 'spansk-3-8-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-8-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv dialoger for følgende situasjoner:', subTasks: [
        { label: 'a', task: 'Bestill fly fra Oslo til Madrid.', solution: 'Quisiera reservar un vuelo de Oslo a Madrid para el 20 de junio. ¿Hay vuelos directos? ¿Cuál es el precio del billete de ida y vuelta?', answer: 'Quisiera reservar un vuelo de Oslo a Madrid para el 20 de junio. ¿Hay vuelos directos? ¿Cuál es el precio del billete de ida y vuelta?' },
        { label: 'b', task: 'Spør om fasiliteter på et hotell.', solution: '¿El hotel dispone de piscina, wifi gratuito y aparcamiento? ¿A qué hora es el check-in?', answer: '¿El hotel dispone de piscina, wifi gratuito y aparcamiento? ¿A qué hora es el check-in?' },
        { label: 'c', task: 'Sammenlign to overnattingsalternativer.', solution: 'El hotel ofrece más comodidad, pero el albergue es más económico. En cuanto a ubicación, ambos están en el centro.', answer: 'El hotel ofrece más comodidad, pero el albergue es más económico. En cuanto a ubicación, ambos están en el centro.' },
        { label: 'd', task: 'Endre en reservasjon.', solution: 'Buenos días, llamo para modificar mi reserva. Necesito cambiar las fechas del 15 al 18 de julio, en lugar del 10 al 13.', answer: 'Buenos días, llamo para modificar mi reserva. Necesito cambiar las fechas del 15 al 18 de julio, en lugar del 10 al 13.' },
      ], solution: 'a) Quisiera reservar un vuelo de Oslo a Madrid para el 20 de junio. ¿Hay vuelos directos? ¿Cuál es el precio del billete de ida y vuelta?, b) ¿El hotel dispone de piscina, wifi gratuito y aparcamiento? ¿A qué hora es el check-in?, c) El hotel ofrece más comodidad, pero el albergue es más económico. En cuanto a ubicación, ambos están en el centro., d) Buenos días, llamo para modificar mi reserva. Necesito cambiar las fechas del 15 al 18 de julio, en lugar del 10 al 13.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-8-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Planlegg en reise og skriv en detaljert beskrivelse (4-5 setninger):', subTasks: [
        { label: 'a', task: 'En ukes ferie i Barcelona: transport, hotell, aktiviteter.', solution: 'Para nuestra semana en Barcelona, he reservado un vuelo directo desde Oslo y un hotel de 3 estrellas en el barrio Gótico. El itinerario incluye visitas a la Sagrada Familia, el Parque Güell y el Barrio Born. Hemos contratado un seguro de viaje completo. El presupuesto total es de aproximadamente 1500 euros por persona.', answer: 'Para nuestra semana en Barcelona, he reservado un vuelo directo desde Oslo y un hotel de 3 estrellas en el barrio Gótico. El itinerario incluye visitas a la Sagrada Familia, el Parque Güell y el Barrio Born. Hemos contratado un seguro de viaje completo. El presupuesto total es de aproximadamente 1500 euros por persona.' },
        { label: 'b', task: 'Backpacking gjennom Peru: rute og budsjett.', solution: 'El itinerario de tres semanas por Perú comienza en Lima, sigue a Cusco y Machu Picchu, y termina en el lago Titicaca. Nos alojaremos en albergues y hostales para mantener un presupuesto ajustado. El transporte será en autobuses nocturnos para ahorrar tiempo y dinero. Hemos calculado un presupuesto de 50 euros diarios.', answer: 'El itinerario de tres semanas por Perú comienza en Lima, sigue a Cusco y Machu Picchu, y termina en el lago Titicaca. Nos alojaremos en albergues y hostales para mantener un presupuesto ajustado. El transporte será en autobuses nocturnos para ahorrar tiempo y dinero. Hemos calculado un presupuesto de 50 euros diarios.' },
        { label: 'c', task: 'Kulturreise i Andalucía: byer og opplevelser.', solution: 'Nuestra ruta cultural por Andalucía incluye Sevilla, Córdoba y Granada. En cada ciudad visitaremos los monumentos más emblemáticos: la Giralda, la Mezquita y la Alhambra. Hemos reservado paradores nacionales para una experiencia auténtica. La mejor temporada para viajar es primavera u otoño.', answer: 'Nuestra ruta cultural por Andalucía incluye Sevilla, Córdoba y Granada. En cada ciudad visitaremos los monumentos más emblemáticos: la Giralda, la Mezquita y la Alhambra. Hemos reservado paradores nacionales para una experiencia auténtica. La mejor temporada para viajar es primavera u otoño.' },
        { label: 'd', task: 'Sammenlign to reisemål for sommerferien.', solution: 'Comparando México y España como destinos de verano, México ofrece precios más bajos y una rica diversidad cultural. Sin embargo, España tiene la ventaja de estar más cerca y no requiere visado. En cuanto a clima, ambos destinos tienen temperaturas agradables. Teniendo en cuenta el presupuesto, recomendaría España para una primera experiencia.', answer: 'Comparando México y España como destinos de verano, México ofrece precios más bajos y una rica diversidad cultural. Sin embargo, España tiene la ventaja de estar más cerca y no requiere visado. En cuanto a clima, ambos destinos tienen temperaturas agradables. Teniendo en cuenta el presupuesto, recomendaría España para una primera experiencia.' },
      ], solution: 'a) Para nuestra semana en Barcelona, he reservado un vuelo directo desde Oslo y un hotel de 3 estrellas en el barrio Gótico. El itinerario incluye visitas a la Sagrada Familia, el Parque Güell y el Barrio Born. Hemos contratado un seguro de viaje completo. El presupuesto total es de aproximadamente 1500 euros por persona., b) El itinerario de tres semanas por Perú comienza en Lima, sigue a Cusco y Machu Picchu, y termina en el lago Titicaca. Nos alojaremos en albergues y hostales para mantener un presupuesto ajustado. El transporte será en autobuses nocturnos para ahorrar tiempo y dinero. Hemos calculado un presupuesto de 50 euros diarios., c) Nuestra ruta cultural por Andalucía incluye Sevilla, Córdoba y Granada. En cada ciudad visitaremos los monumentos más emblemáticos: la Giralda, la Mezquita y la Alhambra. Hemos reservado paradores nacionales para una experiencia auténtica. La mejor temporada para viajar es primavera u otoño., d) Comparando México y España como destinos de verano, México ofrece precios más bajos y una rica diversidad cultural. Sin embargo, España tiene la ventaja de estar más cerca y no requiere visado. En cuanto a clima, ambos destinos tienen temperaturas agradables. Teniendo en cuenta el presupuesto, recomendaría España para una primera experiencia.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-1-tip-1', type: 'tip', content: `**Tips:** Bestill alltid reiseforsikring (seguro de viaje) og sjekk visum-krav (requisitos de visado) før du reiser til et spansktalende land.` },
    { id: 'spansk-3-8-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Reiseplanlegging**

- **Begreper:** reservar, itinerario, alojamiento, vuelo, billete
- **Overnatting:** hotel, hostal, apartamento, parador, casa rural
- **Sammenligning:** más barato/caro, la mejor opción, conviene más
- **Viktig:** Planlegg i god tid, spesielt i temporada alta` },
  ],
  exercises: [],
};

// 8.2 Turismo responsable
export const CHAPTER_SPANSK_3_8_2: TextbookChapter = {
  id: 'spansk-3-8-2',
  courseId: 'spansk-3',
  chapterNumber: '8.2',
  title: 'Turismo responsable',
  subtitle: 'Ansvarlig turisme',
  description: 'Lær om bærekraftig turisme og dens påvirkning på miljø og lokalsamfunn.',
  estimatedMinutes: 45,
  competenceGoals: ['diskutere ansvarlig turisme', 'reflektere over turismens påvirkning'],
  content: [
    { id: 'spansk-3-8-2-intro', type: 'text', content: `## Turismo responsable

Turisme er en av verdens største industrier, men den har også negative konsekvenser. Ansvarlig turisme søker å minimere skadene og maksimere fordelene for lokalsamfunn og miljø.` },
    { id: 'spansk-3-8-2-def-1', type: 'definition', title: 'Ansvarlig turisme (turismo responsable)', content: `**Nøkkelbegreper:**

| Spansk | Norsk |
|--------|-------|
| el ecoturismo | økoturisme |
| el turismo comunitario | fellesskapsturisme |
| el turismo sostenible | bærekraftig turisme |
| la huella de carbono | karbonfotavtrykk |
| el impacto medioambiental | miljøpåvirkning |
| el patrimonio cultural | kulturarv |
| la masificación turística | overturisme |
| el consumo responsable | ansvarlig forbruk |

**Definisjon:** Ansvarlig turisme handler om å reise på en måte som respekterer miljøet, lokalsamfunnet og kulturarven, samtidig som det bidrar til lokal økonomisk utvikling.` },
    { id: 'spansk-3-8-2-text-1', type: 'text', content: `## Utfordringer med masseturisme

**Overturisme (masificación turística):**
- Barcelona, Mallorca og Cancún opplever overturisme
- Stigende boligpriser for lokalbefolkningen
- Slitasje på kulturminner og natur
- Forurensning og avfallsproblemer

**Eksempler på tiltak:**
- Turistskatt (tasa turística) i Barcelona og Balearene
- Begrensning av cruiseskip i noen havner
- Kampanjer for å fordele turister over hele året
- Kvoter for besøk til sårbare naturområder` },
    { id: 'spansk-3-8-2-text-2', type: 'text', content: `## Alternativer til masseturisme

**Ecoturismo:** Naturbasert turisme med fokus på bevaring
- Eksempel: Galápagos-øyene (Ecuador), Costa Rica

**Turismo comunitario:** Reise organisert av lokalsamfunn
- Eksempel: Urfolkssamfunn i Bolivia og Peru

**Turismo rural:** Ferie på landsbygda
- Eksempel: Casas rurales i Spania

**Volunturismo:** Frivillig arbeid kombinert med reise
- Eksempel: Bevaringsprosjekter i Mellom-Amerika

Disse alternativene gir mer autentiske opplevelser og bedre fordeling av inntekter.` },
    { id: 'spansk-3-8-2-example-1', type: 'example', title: 'Eksempel: Overturisme', problem: `Gi et eksempel på overturisme i den spansktalende verden.`, solution: `**Barcelona** er et eksempel. La masificación turística ha provocado el aumento del precio de la vivienda, la pérdida de comercio local y molestias para los residentes. La ciudad ha implementado una tasa turística.` },
    { id: 'spansk-3-8-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-8-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match begrepet med definisjonen:', subTasks: [
        { label: 'a', task: 'el ecoturismo', solution: 'naturbasert turisme med fokus på bevaring', answer: 'naturbasert turisme med fokus på bevaring' },
        { label: 'b', task: 'la masificación turística', solution: 'overturisme - for mange turister', answer: 'overturisme - for mange turister' },
        { label: 'c', task: 'la huella de carbono', solution: 'karbonfotavtrykk fra reisen', answer: 'karbonfotavtrykk fra reisen' },
        { label: 'd', task: 'el patrimonio cultural', solution: 'kulturarv som bør beskyttes', answer: 'kulturarv som bør beskyttes' },
      ], solution: 'a) naturbasert turisme med fokus på bevaring, b) overturisme - for mange turister, c) karbonfotavtrykk fra reisen, d) kulturarv som bør beskyttes', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-8-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant om ansvarlig turisme:', subTasks: [
        { label: 'a', task: 'Ecoturismo betyr billig turisme.', solution: 'Usant - det betyr naturbasert og bærekraftig turisme.', answer: 'Usant - det betyr naturbasert og bærekraftig turisme.' },
        { label: 'b', task: 'Overturisme er et problem i Barcelona.', solution: 'Sant - byen har innført turistskatt.', answer: 'Sant - byen har innført turistskatt.' },
        { label: 'c', task: 'Turismo comunitario drives av store selskaper.', solution: 'Usant - det drives av lokalsamfunn.', answer: 'Usant - det drives av lokalsamfunn.' },
        { label: 'd', task: 'Ansvarlig turisme tar hensyn til miljøet.', solution: 'Sant', answer: 'Sant' },
      ], solution: 'a) Usant - det betyr naturbasert og bærekraftig turisme., b) Sant - byen har innført turistskatt., c) Usant - det drives av lokalsamfunn., d) Sant', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-2-example-2', type: 'example', title: 'Eksempel: Alternativ', problem: `Hva er turismo comunitario?`, solution: `El **turismo comunitario** es un tipo de turismo organizado y gestionado por las propias comunidades locales, especialmente indígenas. Los beneficios económicos se quedan en la comunidad.` },
    { id: 'spansk-3-8-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-8-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene med fullstendige setninger:', subTasks: [
        { label: 'a', task: '¿Cuáles son los problemas de la masificación turística?', solution: 'La masificación turística provoca el aumento de precios, la degradación del medio ambiente y molestias para los residentes.', answer: 'La masificación turística provoca el aumento de precios, la degradación del medio ambiente y molestias para los residentes.' },
        { label: 'b', task: '¿Qué es el turismo sostenible?', solution: 'El turismo sostenible es una forma de viajar que minimiza el impacto negativo en el medio ambiente y maximiza los beneficios para las comunidades locales.', answer: 'El turismo sostenible es una forma de viajar que minimiza el impacto negativo en el medio ambiente y maximiza los beneficios para las comunidades locales.' },
        { label: 'c', task: '¿Por qué es importante el ecoturismo?', solution: 'El ecoturismo es importante porque promueve la conservación de la naturaleza y genera ingresos para las comunidades locales sin destruir el medio ambiente.', answer: 'El ecoturismo es importante porque promueve la conservación de la naturaleza y genera ingresos para las comunidades locales sin destruir el medio ambiente.' },
        { label: 'd', task: '¿Qué medidas se pueden tomar contra la masificación?', solution: 'Se pueden implementar tasas turísticas, limitar el número de visitantes, promover destinos alternativos y distribuir el turismo durante todo el año.', answer: 'Se pueden implementar tasas turísticas, limitar el número de visitantes, promover destinos alternativos y distribuir el turismo durante todo el año.' },
      ], solution: 'a) La masificación turística provoca el aumento de precios, la degradación del medio ambiente y molestias para los residentes., b) El turismo sostenible es una forma de viajar que minimiza el impacto negativo en el medio ambiente y maximiza los beneficios para las comunidades locales., c) El ecoturismo es importante porque promueve la conservación de la naturaleza y genera ingresos para las comunidades locales sin destruir el medio ambiente., d) Se pueden implementar tasas turísticas, limitar el número de visitantes, promover destinos alternativos y distribuir el turismo durante todo el año.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-8-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en argumenterende tekst (4-5 setninger) om:', subTasks: [
        { label: 'a', task: 'Turismens positive og negative sider for et spansktalende land.', solution: 'El turismo es fundamental para la economía española, generando millones de empleos. Sin embargo, la masificación turística ha creado graves problemas en ciudades como Barcelona. Es necesario encontrar un equilibrio entre el beneficio económico y la calidad de vida de los residentes. El turismo sostenible podría ser la solución.', answer: 'El turismo es fundamental para la economía española, generando millones de empleos. Sin embargo, la masificación turística ha creado graves problemas en ciudades como Barcelona. Es necesario encontrar un equilibrio entre el beneficio económico y la calidad de vida de los residentes. El turismo sostenible podría ser la solución.' },
        { label: 'b', task: 'Hvorfor bør vi velge ecoturismo fremfor masseturisme?', solution: 'El ecoturismo ofrece experiencias más auténticas y respetuosas con el medio ambiente. A diferencia del turismo de masas, genera beneficios directos para las comunidades locales. Además, contribuye a la conservación de ecosistemas únicos. Aunque puede ser más caro, el valor de la experiencia y su impacto positivo lo justifican.', answer: 'El ecoturismo ofrece experiencias más auténticas y respetuosas con el medio ambiente. A diferencia del turismo de masas, genera beneficios directos para las comunidades locales. Además, contribuye a la conservación de ecosistemas únicos. Aunque puede ser más caro, el valor de la experiencia y su impacto positivo lo justifican.' },
        { label: 'c', task: 'Din mening om turismo comunitario i Latin-Amerika.', solution: 'En mi opinión, el turismo comunitario es una de las mejores formas de conocer la verdadera cultura latinoamericana. Permite a los viajeros convivir con comunidades indígenas y aprender de sus tradiciones. Al mismo tiempo, los beneficios económicos se quedan en la comunidad. Creo que debería promoverse más este tipo de turismo.', answer: 'En mi opinión, el turismo comunitario es una de las mejores formas de conocer la verdadera cultura latinoamericana. Permite a los viajeros convivir con comunidades indígenas y aprender de sus tradiciones. Al mismo tiempo, los beneficios económicos se quedan en la comunidad. Creo que debería promoverse más este tipo de turismo.' },
        { label: 'd', task: 'Foreslå tiltak mot overturisme i en spansktalende by.', solution: 'Para combatir la masificación turística, propongo implementar una tasa turística progresiva, limitar el número de alojamientos turísticos y crear rutas alternativas fuera del centro. También sería importante promover el turismo en temporada baja mediante campañas publicitarias. Finalmente, invertir en infraestructura sostenible beneficiaría tanto a turistas como a residentes.', answer: 'Para combatir la masificación turística, propongo implementar una tasa turística progresiva, limitar el número de alojamientos turísticos y crear rutas alternativas fuera del centro. También sería importante promover el turismo en temporada baja mediante campañas publicitarias. Finalmente, invertir en infraestructura sostenible beneficiaría tanto a turistas como a residentes.' },
      ], solution: 'a) El turismo es fundamental para la economía española, generando millones de empleos. Sin embargo, la masificación turística ha creado graves problemas en ciudades como Barcelona. Es necesario encontrar un equilibrio entre el beneficio económico y la calidad de vida de los residentes. El turismo sostenible podría ser la solución., b) El ecoturismo ofrece experiencias más auténticas y respetuosas con el medio ambiente. A diferencia del turismo de masas, genera beneficios directos para las comunidades locales. Además, contribuye a la conservación de ecosistemas únicos. Aunque puede ser más caro, el valor de la experiencia y su impacto positivo lo justifican., c) En mi opinión, el turismo comunitario es una de las mejores formas de conocer la verdadera cultura latinoamericana. Permite a los viajeros convivir con comunidades indígenas y aprender de sus tradiciones. Al mismo tiempo, los beneficios económicos se quedan en la comunidad. Creo que debería promoverse más este tipo de turismo., d) Para combatir la masificación turística, propongo implementar una tasa turística progresiva, limitar el número de alojamientos turísticos y crear rutas alternativas fuera del centro. También sería importante promover el turismo en temporada baja mediante campañas publicitarias. Finalmente, invertir en infraestructura sostenible beneficiaría tanto a turistas como a residentes.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-2-tip-1', type: 'tip', content: `**Tips:** Når du reiser, tenk på ditt eget karbonfotavtrykk. Velg lokale produkter, respekter naturen og støtt lokalsamfunnet.` },
    { id: 'spansk-3-8-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Ansvarlig turisme**

- **Begreper:** ecoturismo, turismo comunitario, sostenible, huella de carbono
- **Problemer:** Masificación, prisøkning, miljøskader
- **Alternativer:** Ecoturismo, turismo comunitario, turismo rural
- **Tiltak:** Tasa turística, begrensninger, fordeling av turister` },
  ],
  exercises: [],
};

// 8.3 Describir experiencias
export const CHAPTER_SPANSK_3_8_3: TextbookChapter = {
  id: 'spansk-3-8-3',
  courseId: 'spansk-3',
  chapterNumber: '8.3',
  title: 'Describir experiencias',
  subtitle: 'Beskrive reiseopplevelser',
  description: 'Lær å beskrive reiseopplevelser ved hjelp av fortidsformer og levende språk.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive reiseopplevelser detaljert', 'bruke fortidsformer korrekt for opplevelser'],
  content: [
    { id: 'spansk-3-8-3-intro', type: 'text', content: `## Describir experiencias

Å dele reiseopplevelser er en viktig kommunikativ ferdighet. Det handler om å bruke riktige fortidsformer og levende beskrivelser for å formidle stemning og inntrykk.` },
    { id: 'spansk-3-8-3-def-1', type: 'definition', title: 'Beskrive opplevelser (describir experiencias)', content: `**Nyttige uttrykk for å beskrive opplevelser:**

| Spansk | Norsk |
|--------|-------|
| fue una experiencia increíble | det var en utrolig opplevelse |
| lo que más me impresionó fue... | det som imponerte meg mest var... |
| no olvidaré nunca... | jeg vil aldri glemme... |
| me encantó... | jeg elsket... |
| lo más destacado fue... | det mest fremtredende var... |
| valió la pena | det var verdt det |
| me sorprendió que... | det overrasket meg at... |
| recomiendo encarecidamente... | jeg anbefaler sterkt... |

**Definisjon:** Å beskrive reiseopplevelser innebærer bruk av fortidsformer (pretérito perfecto, indefinido, imperfecto) og levende, beskrivende språk.` },
    { id: 'spansk-3-8-3-text-1', type: 'text', content: `## Fortidsformer for opplevelser

**Pretérito indefinido** - spesifikke hendelser:
- *Viajé a Perú el año pasado.* (Jeg reiste til Peru i fjor.)
- *Visitamos Machu Picchu un martes.* (Vi besøkte Machu Picchu en tirsdag.)

**Pretérito imperfecto** - bakgrunn, beskrivelser:
- *Hacía mucho calor.* (Det var veldig varmt.)
- *La ciudad estaba llena de turistas.* (Byen var full av turister.)

**Pretérito perfecto** - nylige opplevelser:
- *He visitado tres países este año.* (Jeg har besøkt tre land i år.)
- *Nunca he estado en México.* (Jeg har aldri vært i Mexico.)` },
    { id: 'spansk-3-8-3-text-2', type: 'text', content: `## Reiseblogg - struktur

**Introduksjon:** Hvor, når, med hvem
- *El verano pasado viajé a... con...*

**Beskrivelse:** Inntrykk, opplevelser
- *Lo que más me impresionó fue...*
- *El paisaje era espectacular...*

**Vurdering:** Positive og negative sider
- *Lo mejor fue... pero lo peor fue...*

**Anbefaling:** Til fremtidige reisende
- *Recomiendo visitar... / No os perdáis...*

En god reiseblogg kombinerer fakta med personlige inntrykk.` },
    { id: 'spansk-3-8-3-example-1', type: 'example', title: 'Eksempel: Fortidsformer', problem: `Beskriv en dag i Barcelona med begge fortidsformer.`, solution: `El martes **visitamos** (indefinido) la Sagrada Familia. **Hacía** (imperfecto) mucho calor y **había** (imperfecto) muchos turistas. Después **comimos** (indefinido) paella en un restaurante del puerto.` },
    { id: 'spansk-3-8-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-8-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match uttrykket med norsk:', subTasks: [
        { label: 'a', task: 'fue una experiencia increíble', solution: 'det var en utrolig opplevelse', answer: 'det var en utrolig opplevelse' },
        { label: 'b', task: 'lo que más me impresionó fue...', solution: 'det som imponerte meg mest var...', answer: 'det som imponerte meg mest var...' },
        { label: 'c', task: 'valió la pena', solution: 'det var verdt det', answer: 'det var verdt det' },
        { label: 'd', task: 'recomiendo encarecidamente', solution: 'jeg anbefaler sterkt', answer: 'jeg anbefaler sterkt' },
      ], solution: 'a) det var en utrolig opplevelse, b) det som imponerte meg mest var..., c) det var verdt det, d) jeg anbefaler sterkt', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-8-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg riktig fortidsform (indefinido/imperfecto):', subTasks: [
        { label: 'a', task: '___ (visitar/yo) la Alhambra el lunes.', solution: 'Visité (indefinido - spesifikk hendelse)', answer: 'Visité (indefinido - spesifikk hendelse)' },
        { label: 'b', task: '___ (hacer) mucho sol ese día.', solution: 'Hacía (imperfecto - bakgrunn/beskrivelse)', answer: 'Hacía (imperfecto - bakgrunn/beskrivelse)' },
        { label: 'c', task: 'La ciudad ___ (estar) muy bonita.', solution: 'estaba (imperfecto - beskrivelse)', answer: 'estaba (imperfecto - beskrivelse)' },
        { label: 'd', task: '___ (comer/nosotros) tapas en el centro.', solution: 'Comimos (indefinido - spesifikk hendelse)', answer: 'Comimos (indefinido - spesifikk hendelse)' },
      ], solution: 'a) Visité (indefinido - spesifikk hendelse), b) Hacía (imperfecto - bakgrunn/beskrivelse), c) estaba (imperfecto - beskrivelse), d) Comimos (indefinido - spesifikk hendelse)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-3-example-2', type: 'example', title: 'Eksempel: Reiseblogg', problem: `Skriv en åpning til en reiseblogg om en tur til Mexico.`, solution: `El verano pasado **viajé** a México con mi familia. **Fue** una experiencia **increíble** que no olvidaré nunca. Lo que más me **impresionó** fue la riqueza cultural y la amabilidad de la gente.` },
    { id: 'spansk-3-8-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-8-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Beskriv disse opplevelsene med 2-3 setninger:', subTasks: [
        { label: 'a', task: 'Et besøk til Machu Picchu.', solution: 'Visitamos Machu Picchu al amanecer. El paisaje era impresionante y hacía un poco de frío. Fue una experiencia que nunca olvidaré.', answer: 'Visitamos Machu Picchu al amanecer. El paisaje era impresionante y hacía un poco de frío. Fue una experiencia que nunca olvidaré.' },
        { label: 'b', task: 'En dag på stranden i Barcelona.', solution: 'Pasamos el día en la playa de la Barceloneta. El agua estaba caliente y había mucha gente. Comimos helado mientras paseábamos por el paseo marítimo.', answer: 'Pasamos el día en la playa de la Barceloneta. El agua estaba caliente y había mucha gente. Comimos helado mientras paseábamos por el paseo marítimo.' },
        { label: 'c', task: 'Smaksprøver i et marked i Mexico City.', solution: 'Fuimos al Mercado de San Juan para probar comida típica. Había puestos con todo tipo de productos: tacos, frutas exóticas y dulces tradicionales. Lo que más me sorprendió fue la variedad de chiles.', answer: 'Fuimos al Mercado de San Juan para probar comida típica. Había puestos con todo tipo de productos: tacos, frutas exóticas y dulces tradicionales. Lo que más me sorprendió fue la variedad de chiles.' },
        { label: 'd', task: 'En flamencoforestilling i Sevilla.', solution: 'Asistimos a un espectáculo de flamenco en el barrio de Triana. La bailaora era increíble y la música nos emocionó profundamente. Fue lo más destacado de nuestro viaje.', answer: 'Asistimos a un espectáculo de flamenco en el barrio de Triana. La bailaora era increíble y la música nos emocionó profundamente. Fue lo más destacado de nuestro viaje.' },
      ], solution: 'a) Visitamos Machu Picchu al amanecer. El paisaje era impresionante y hacía un poco de frío. Fue una experiencia que nunca olvidaré., b) Pasamos el día en la playa de la Barceloneta. El agua estaba caliente y había mucha gente. Comimos helado mientras paseábamos por el paseo marítimo., c) Fuimos al Mercado de San Juan para probar comida típica. Había puestos con todo tipo de productos: tacos, frutas exóticas y dulces tradicionales. Lo que más me sorprendió fue la variedad de chiles., d) Asistimos a un espectáculo de flamenco en el barrio de Triana. La bailaora era increíble y la música nos emocionó profundamente. Fue lo más destacado de nuestro viaje.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-8-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort reiseblogg (5-6 setninger) om:', subTasks: [
        { label: 'a', task: 'En uke i Costa Rica med fokus på ecoturismo.', solution: 'El mes pasado viajé a Costa Rica, un paraíso del ecoturismo. Visitamos el Parque Nacional Manuel Antonio, donde vimos monos, tucanes y perezosos. Lo que más me impresionó fue la biodiversidad increíble del país. También hicimos canopy en Monteverde, una experiencia que me daba mucho miedo pero valió totalmente la pena. Recomiendo encarecidamente Costa Rica a todos los amantes de la naturaleza.', answer: 'El mes pasado viajé a Costa Rica, un paraíso del ecoturismo. Visitamos el Parque Nacional Manuel Antonio, donde vimos monos, tucanes y perezosos. Lo que más me impresionó fue la biodiversidad increíble del país. También hicimos canopy en Monteverde, una experiencia que me daba mucho miedo pero valió totalmente la pena. Recomiendo encarecidamente Costa Rica a todos los amantes de la naturaleza.' },
        { label: 'b', task: 'Din beste reiseopplevelse i et spansktalende land (ekte eller oppdiktet).', solution: 'Mi mejor experiencia fue un viaje a Buenos Aires el año pasado. La ciudad me cautivó con su arquitectura europea, sus barrios con personalidad propia y su increíble gastronomía. Lo más destacado fue asistir a un show de tango en San Telmo. La música, el baile y la pasión me emocionaron profundamente. Sin duda, fue una experiencia que marcó mi vida.', answer: 'Mi mejor experiencia fue un viaje a Buenos Aires el año pasado. La ciudad me cautivó con su arquitectura europea, sus barrios con personalidad propia y su increíble gastronomía. Lo más destacado fue asistir a un show de tango en San Telmo. La música, el baile y la pasión me emocionaron profundamente. Sin duda, fue una experiencia que marcó mi vida.' },
        { label: 'c', task: 'En uventet hendelse under en reise.', solution: 'Durante mi viaje a Perú, nos perdimos en el camino a Ollantaytambo. Estábamos un poco asustados porque no teníamos señal de teléfono. Sin embargo, un señor del pueblo nos invitó a su casa y nos ofreció comida y té de coca. Fue una experiencia inesperada que nos enseñó sobre la hospitalidad peruana. A veces los mejores momentos de un viaje son los no planificados.', answer: 'Durante mi viaje a Perú, nos perdimos en el camino a Ollantaytambo. Estábamos un poco asustados porque no teníamos señal de teléfono. Sin embargo, un señor del pueblo nos invitó a su casa y nos ofreció comida y té de coca. Fue una experiencia inesperada que nos enseñó sobre la hospitalidad peruana. A veces los mejores momentos de un viaje son los no planificados.' },
        { label: 'd', task: 'Sammenlign to reiseopplevelser i forskjellige spansktalende land.', solution: 'He tenido la suerte de visitar tanto España como México, y ambas experiencias fueron muy diferentes. En España disfruté de la historia, la arquitectura y la gastronomía mediterránea. En México me fascinaron las ruinas mayas, la comida picante y la calidez de la gente. Mientras que en España el ritmo era más relajado, en México todo era más vibrante y colorido. Ambos países me robaron el corazón de maneras distintas.', answer: 'He tenido la suerte de visitar tanto España como México, y ambas experiencias fueron muy diferentes. En España disfruté de la historia, la arquitectura y la gastronomía mediterránea. En México me fascinaron las ruinas mayas, la comida picante y la calidez de la gente. Mientras que en España el ritmo era más relajado, en México todo era más vibrante y colorido. Ambos países me robaron el corazón de maneras distintas.' },
      ], solution: 'a) El mes pasado viajé a Costa Rica, un paraíso del ecoturismo. Visitamos el Parque Nacional Manuel Antonio, donde vimos monos, tucanes y perezosos. Lo que más me impresionó fue la biodiversidad increíble del país. También hicimos canopy en Monteverde, una experiencia que me daba mucho miedo pero valió totalmente la pena. Recomiendo encarecidamente Costa Rica a todos los amantes de la naturaleza., b) Mi mejor experiencia fue un viaje a Buenos Aires el año pasado. La ciudad me cautivó con su arquitectura europea, sus barrios con personalidad propia y su increíble gastronomía. Lo más destacado fue asistir a un show de tango en San Telmo. La música, el baile y la pasión me emocionaron profundamente. Sin duda, fue una experiencia que marcó mi vida., c) Durante mi viaje a Perú, nos perdimos en el camino a Ollantaytambo. Estábamos un poco asustados porque no teníamos señal de teléfono. Sin embargo, un señor del pueblo nos invitó a su casa y nos ofreció comida y té de coca. Fue una experiencia inesperada que nos enseñó sobre la hospitalidad peruana. A veces los mejores momentos de un viaje son los no planificados., d) He tenido la suerte de visitar tanto España como México, y ambas experiencias fueron muy diferentes. En España disfruté de la historia, la arquitectura y la gastronomía mediterránea. En México me fascinaron las ruinas mayas, la comida picante y la calidez de la gente. Mientras que en España el ritmo era más relajado, en México todo era más vibrante y colorido. Ambos países me robaron el corazón de maneras distintas.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-3-tip-1', type: 'tip', content: `**Tips:** For å gjøre beskrivelsene dine mer levende, bruk alle sansene: Hva så du? Hva hørte du? Hva smakte du? Hva følte du?` },
    { id: 'spansk-3-8-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Beskrive opplevelser**

- **Uttrykk:** fue increíble, lo que más me impresionó, valió la pena
- **Fortidsformer:** Indefinido (hendelser), Imperfecto (beskrivelser), Perfecto (nylige)
- **Reiseblogg:** Introduksjon → Beskrivelse → Vurdering → Anbefaling
- **Tips:** Bruk alle sansene for levende beskrivelser` },
  ],
  exercises: [],
};

// 8.4 El español como lengua global
export const CHAPTER_SPANSK_3_8_4: TextbookChapter = {
  id: 'spansk-3-8-4',
  courseId: 'spansk-3',
  chapterNumber: '8.4',
  title: 'El español como lengua global',
  subtitle: 'Spansk som verdensspråk',
  description: 'Utforsk spansk som globalt språk: statistikk, dialekter og verdensbetydning.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå spanskens globale betydning', 'kjenne til dialekter og varianter av spansk'],
  content: [
    { id: 'spansk-3-8-4-intro', type: 'text', content: `## El español como lengua global

Spansk er et av verdens viktigste språk, og dets betydning vokser for hvert år. I dette kapittelet utforsker vi spanskens globale rolle, dets dialekter og fremtid.` },
    { id: 'spansk-3-8-4-def-1', type: 'definition', title: 'Spansk som verdensspråk (el español como lengua global)', content: `**Statistikk om spansk:**

| Fakta | Tall |
|-------|------|
| Morsmålstalere | ca. 490 millioner |
| Totaltalere (inkl. andrespråk) | ca. 590 millioner |
| Land med spansk som offisielt språk | 21 |
| Nest mest talte morsmål i verden | Etter mandarin |
| Tredje mest brukte språk på internett | Etter engelsk og kinesisk |
| Studenter av spansk globalt | ca. 22 millioner |

**Definisjon:** Spansk er verdens nest mest talte morsmål og et av de seks offisielle FN-språkene. Dets globale betydning vokser stadig innen handel, kultur og diplomati.` },
    { id: 'spansk-3-8-4-text-1', type: 'text', content: `## Dialekter og varianter

**Spania:**
- **Castellano** - Standard spansk (Castilla y León)
- **Andaluz** - Sør-Spania (aspirert s, seseo)
- **Canario** - Kanariøyene (ligner latinamerikansk)

**Latin-Amerika:**
- **Mexicano** - Tydelig uttale, nahuatl-innflytelse
- **Rioplatense** - Argentina/Uruguay (vos, ll→sh)
- **Caribeño** - Cuba/Dom. Rep./Venezuela (aspirert s)
- **Andino** - Peru/Bolivia/Ecuador (konservativt, quechua-innflytelse)
- **Chileno** - Chile (unik intonasjon, mye slang)

Alle varianter er likeverdige - ingen er "bedre" enn andre.` },
    { id: 'spansk-3-8-4-text-2', type: 'text', content: `## Spanskens fremtid

**Vekst:**
- I USA snakker over 41 millioner spansk som morsmål
- Spansk er det mest studerte fremmedspråket i USA
- I 2060 kan USA bli verdens største spansktalende land

**Spansk i verden:**
- Offisielt FN-språk
- Offisielt EU-språk
- Viktig i internasjonalt diplomati og handel
- Voksende kulturell innflytelse (musikk, film, TV)

**Spansk og norsk:**
- Spansk er et populært fremmedspråk i Norge
- Økende handelsrelasjoner med spansktalende land
- Kulturutveksling gjennom musikk, mat og turisme` },
    { id: 'spansk-3-8-4-example-1', type: 'example', title: 'Eksempel: Statistikk', problem: `Hvor mange snakker spansk som morsmål?`, solution: `Ca. **490 millioner** mennesker snakker spansk som morsmål, noe som gjør det til verdens nest mest talte morsmål etter mandarin.` },
    { id: 'spansk-3-8-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-8-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Sant eller usant om spansk:', subTasks: [
        { label: 'a', task: 'Spansk er verdens mest talte morsmål.', solution: 'Usant - det er nest mest talte (etter mandarin).', answer: 'Usant - det er nest mest talte (etter mandarin).' },
        { label: 'b', task: 'Det er 21 land med spansk som offisielt språk.', solution: 'Sant', answer: 'Sant' },
        { label: 'c', task: 'I USA snakker ingen spansk.', solution: 'Usant - over 41 millioner snakker spansk som morsmål i USA.', answer: 'Usant - over 41 millioner snakker spansk som morsmål i USA.' },
        { label: 'd', task: 'Spansk er et offisielt FN-språk.', solution: 'Sant', answer: 'Sant' },
      ], solution: 'a) Usant - det er nest mest talte (etter mandarin)., b) Sant, c) Usant - over 41 millioner snakker spansk som morsmål i USA., d) Sant', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-8-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match dialekten med regionen:', subTasks: [
        { label: 'a', task: 'Rioplatense', solution: 'Argentina og Uruguay', answer: 'Argentina og Uruguay' },
        { label: 'b', task: 'Andaluz', solution: 'Sør-Spania', answer: 'Sør-Spania' },
        { label: 'c', task: 'Mexicano', solution: 'Mexico', answer: 'Mexico' },
        { label: 'd', task: 'Andino', solution: 'Peru, Bolivia, Ecuador', answer: 'Peru, Bolivia, Ecuador' },
      ], solution: 'a) Argentina og Uruguay, b) Sør-Spania, c) Mexico, d) Peru, Bolivia, Ecuador', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-4-example-2', type: 'example', title: 'Eksempel: Dialekter', problem: `Hva kjennetegner rioplatense-spansk?`, solution: `Rioplatense (Argentina/Uruguay) kjennetegnes av bruk av **vos** i stedet for tú, uttale av **ll/y** som "sh", og sterk italiensk innflytelse i intonasjonen.` },
    { id: 'spansk-3-8-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-8-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene med fullstendige setninger:', subTasks: [
        { label: 'a', task: '¿Por qué es importante aprender español?', solution: 'Es importante aprender español porque es la segunda lengua materna más hablada del mundo, es útil para los negocios y permite acceder a una rica cultura.', answer: 'Es importante aprender español porque es la segunda lengua materna más hablada del mundo, es útil para los negocios y permite acceder a una rica cultura.' },
        { label: 'b', task: '¿Cuáles son las principales diferencias entre el español de España y el de América Latina?', solution: 'Las principales diferencias son la pronunciación (especialmente la z y c), el uso de vosotros/ustedes, y algún vocabulario diferente.', answer: 'Las principales diferencias son la pronunciación (especialmente la z y c), el uso de vosotros/ustedes, y algún vocabulario diferente.' },
        { label: 'c', task: '¿Cuál es el futuro del español en Estados Unidos?', solution: 'El español seguirá creciendo en Estados Unidos. Se estima que en 2060 será el país con más hispanohablantes del mundo.', answer: 'El español seguirá creciendo en Estados Unidos. Se estima que en 2060 será el país con más hispanohablantes del mundo.' },
        { label: 'd', task: '¿Qué dialectos del español conoces?', solution: 'Conozco el castellano de España, el rioplatense de Argentina, el mexicano y el caribeño. Cada uno tiene características únicas de pronunciación y vocabulario.', answer: 'Conozco el castellano de España, el rioplatense de Argentina, el mexicano y el caribeño. Cada uno tiene características únicas de pronunciación y vocabulario.' },
      ], solution: 'a) Es importante aprender español porque es la segunda lengua materna más hablada del mundo, es útil para los negocios y permite acceder a una rica cultura., b) Las principales diferencias son la pronunciación (especialmente la z y c), el uso de vosotros/ustedes, y algún vocabulario diferente., c) El español seguirá creciendo en Estados Unidos. Se estima que en 2060 será el país con más hispanohablantes del mundo., d) Conozco el castellano de España, el rioplatense de Argentina, el mexicano y el caribeño. Cada uno tiene características únicas de pronunciación y vocabulario.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-8-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en reflekterende tekst (4-5 setninger) om:', subTasks: [
        { label: 'a', task: 'Betydningen av å lære spansk for norske elever.', solution: 'Para los estudiantes noruegos, aprender español abre las puertas a una comunidad de casi 600 millones de personas. No solo es útil para viajar y trabajar, sino que también permite acceder a una enorme riqueza cultural: literatura, cine, música y gastronomía. En un mundo cada vez más globalizado, dominar el español es una ventaja competitiva significativa.', answer: 'Para los estudiantes noruegos, aprender español abre las puertas a una comunidad de casi 600 millones de personas. No solo es útil para viajar y trabajar, sino que también permite acceder a una enorme riqueza cultural: literatura, cine, música y gastronomía. En un mundo cada vez más globalizado, dominar el español es una ventaja competitiva significativa.' },
        { label: 'b', task: 'Fordeler og utfordringer med at det finnes mange dialekter av spansk.', solution: 'La diversidad dialectal del español es una riqueza, pero también puede suponer un reto para los estudiantes. Las diferencias de pronunciación, vocabulario e incluso gramática pueden causar confusión. Sin embargo, esta variedad refleja la riqueza cultural de los países hispanohablantes. Lo más importante es que todas las variantes permiten la comunicación mutua.', answer: 'La diversidad dialectal del español es una riqueza, pero también puede suponer un reto para los estudiantes. Las diferencias de pronunciación, vocabulario e incluso gramática pueden causar confusión. Sin embargo, esta variedad refleja la riqueza cultural de los países hispanohablantes. Lo más importante es que todas las variantes permiten la comunicación mutua.' },
        { label: 'c', task: 'Spanskens rolle i en globalisert verden.', solution: 'El español desempeña un papel cada vez más importante en la globalización. Es lengua oficial de organismos internacionales como la ONU y la UE, y es fundamental en el comercio con América Latina. La influencia cultural del mundo hispanohablante, a través de la música, la gastronomía y el entretenimiento, sigue creciendo. En el futuro, el español será aún más relevante en las relaciones internacionales.', answer: 'El español desempeña un papel cada vez más importante en la globalización. Es lengua oficial de organismos internacionales como la ONU y la UE, y es fundamental en el comercio con América Latina. La influencia cultural del mundo hispanohablante, a través de la música, la gastronomía y el entretenimiento, sigue creciendo. En el futuro, el español será aún más relevante en las relaciones internacionales.' },
        { label: 'd', task: 'Sammenlign spanskens og engelskens globale posisjon.', solution: 'Aunque el inglés sigue siendo la lengua franca global, el español está ganando terreno rápidamente. Mientras el inglés domina en tecnología y negocios internacionales, el español es más fuerte en demografía, con más hablantes nativos en crecimiento. Ambos idiomas son complementarios en el mercado laboral internacional. Dominar ambos idiomas ofrece enormes ventajas profesionales y personales.', answer: 'Aunque el inglés sigue siendo la lengua franca global, el español está ganando terreno rápidamente. Mientras el inglés domina en tecnología y negocios internacionales, el español es más fuerte en demografía, con más hablantes nativos en crecimiento. Ambos idiomas son complementarios en el mercado laboral internacional. Dominar ambos idiomas ofrece enormes ventajas profesionales y personales.' },
      ], solution: 'a) Para los estudiantes noruegos, aprender español abre las puertas a una comunidad de casi 600 millones de personas. No solo es útil para viajar y trabajar, sino que también permite acceder a una enorme riqueza cultural: literatura, cine, música y gastronomía. En un mundo cada vez más globalizado, dominar el español es una ventaja competitiva significativa., b) La diversidad dialectal del español es una riqueza, pero también puede suponer un reto para los estudiantes. Las diferencias de pronunciación, vocabulario e incluso gramática pueden causar confusión. Sin embargo, esta variedad refleja la riqueza cultural de los países hispanohablantes. Lo más importante es que todas las variantes permiten la comunicación mutua., c) El español desempeña un papel cada vez más importante en la globalización. Es lengua oficial de organismos internacionales como la ONU y la UE, y es fundamental en el comercio con América Latina. La influencia cultural del mundo hispanohablante, a través de la música, la gastronomía y el entretenimiento, sigue creciendo. En el futuro, el español será aún más relevante en las relaciones internacionales., d) Aunque el inglés sigue siendo la lengua franca global, el español está ganando terreno rápidamente. Mientras el inglés domina en tecnología y negocios internacionales, el español es más fuerte en demografía, con más hablantes nativos en crecimiento. Ambos idiomas son complementarios en el mercado laboral internacional. Dominar ambos idiomas ofrece enormes ventajas profesionales y personales.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-8-4-tip-1', type: 'tip', content: `**Tips:** Eksponer deg for ulike varianter av spansk ved å se filmer og serier fra forskjellige spansktalende land. Netflix og YouTube har et enormt utvalg.` },
    { id: 'spansk-3-8-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Spansk som verdensspråk**

- **Tall:** ~490 mill. morsmålstalere, 21 land, nest mest talte morsmål
- **Dialekter:** Castellano, andaluz, mexicano, rioplatense, caribeño, andino, chileno
- **Fremtid:** Voksende i USA, viktig i handel og diplomati
- **Alle varianter er likeverdige** - mangfold er rikdom` },
  ],
  exercises: [],
};

export const SPANSK_3_CHAPTERS_7_8: TextbookChapter[] = [
  CHAPTER_SPANSK_3_7_1,
  CHAPTER_SPANSK_3_7_2,
  CHAPTER_SPANSK_3_7_3,
  CHAPTER_SPANSK_3_7_4,
  CHAPTER_SPANSK_3_8_1,
  CHAPTER_SPANSK_3_8_2,
  CHAPTER_SPANSK_3_8_3,
  CHAPTER_SPANSK_3_8_4,
];
