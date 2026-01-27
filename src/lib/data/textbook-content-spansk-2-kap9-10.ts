/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 2 - Kapittel 9-10 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 9: HISTORIA DE ESPAÑA Y LATINOAMÉRICA (9.1-9.4)
 * - Kapittel 10: COMUNICACIÓN AVANZADA (10.1-10.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 9: HISTORIA DE ESPAÑA Y LATINOAMÉRICA
// ============================================================================

// 9.1 Historia de España
export const CHAPTER_SPANSK_2_9_1: TextbookChapter = {
  id: 'spansk-2-9-1',
  courseId: 'spansk-2',
  chapterNumber: '9.1',
  title: 'Historia de España',
  subtitle: 'Spansk historie (conquistadores, borgerkrig, demokrati)',
  description: 'Lær om Spanias historie fra reconquista til moderne demokrati.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne viktige perioder i Spanias historie', 'bruke historisk vokabular på spansk'],
  content: [
    { id: 'spansk-2-9-1-intro', type: 'text', content: `## Historia de España

Spanias historie er lang og dramatisk, fra den mauriske perioden og reconquista til borgerkrigen og overgangen til demokrati. Å forstå denne historien gir innsikt i det moderne Spania.` },
    { id: 'spansk-2-9-1-def-1', type: 'definition', title: 'Viktige perioder i Spanias historie', content: `**Spanias historie** kan deles inn i flere viktige perioder:

| Periode | Tid | Beskrivelse |
|---------|-----|-------------|
| La Reconquista | 711-1492 | Gjenerobring fra maurerne |
| El Siglo de Oro | 1500-1700 | Gullalderen - kunst, litteratur, imperium |
| Los Conquistadores | 1500-tallet | Erobring av Amerika |
| La Guerra Civil | 1936-1939 | Borgerkrigen |
| La dictadura de Franco | 1939-1975 | Francos diktatur |
| La Transición | 1975-1982 | Overgangen til demokrati |
| España democrática | 1982- | Moderne demokrati, EU-medlem 1986 |

**Nøkkelbegreper:** la monarquía (monarkiet), la república (republikken), la democracia (demokratiet), la constitución (grunnloven)` },
    { id: 'spansk-2-9-1-text-1', type: 'text', content: `## Reconquista og Siglo de Oro

I 711 invaderte maurerne (los moros) den iberiske halvøy. **La Reconquista** (gjenerobringen) varte nesten 800 år og endte i 1492 da Granada falt.

Samme år sendte dronning Isabel og kong Fernando Columbus til Amerika. Dette markerte starten på **El Siglo de Oro** (gullalderen), da Spania ble en verdensmakt med et enormt imperium.

**Viktige årstall:**
- 1492: Fall av Granada + Columbus' reise
- 1519: Cortés erobrer aztekerriket
- 1532: Pizarro erobrer inkaene` },
    { id: 'spansk-2-9-1-text-2', type: 'text', content: `## Borgerkrigen og Franco

**La Guerra Civil Española** (1936-1939) var en av Europas mest brutale konflikter. Den sto mellom:
- **Los republicanos:** Valgt regjering, støttet av Sovjetunionen
- **Los nacionalistas:** Militæropprør ledet av general Francisco Franco, støttet av Hitler og Mussolini

Franco vant og styrte Spania som diktator i 36 år (1939-1975). Etter hans død begynte **La Transición** - en fredelig overgang til demokrati under kong Juan Carlos I.

**Grunnloven av 1978** etablerte Spania som et konstitusjonelt monarki.` },
    { id: 'spansk-2-9-1-example-1', type: 'example', title: 'Eksempel: Tidslinjen', problem: `Sett i riktig rekkefølge: Franco-diktaturet, Reconquista, Borgerkrigen, La Transición.`, solution: `1. **Reconquista** (711-1492) → 2. **Borgerkrigen** (1936-1939) → 3. **Franco-diktaturet** (1939-1975) → 4. **La Transición** (1975-1982)` },
    { id: 'spansk-2-9-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-9-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match periode med årstall:', subTasks: [
        { label: 'a', task: 'La Reconquista', solution: '711-1492', answer: '711-1492' },
        { label: 'b', task: 'El Siglo de Oro', solution: '1500-1700', answer: '1500-1700' },
        { label: 'c', task: 'La Guerra Civil', solution: '1936-1939', answer: '1936-1939' },
        { label: 'd', task: 'La Transición', solution: '1975-1982', answer: '1975-1982' },
      ], solution: 'a) 711-1492, b) 1500-1700, c) 1936-1939, d) 1975-1982', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-9-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match begrep med norsk oversettelse:', subTasks: [
        { label: 'a', task: 'la monarquía', solution: 'monarkiet', answer: 'monarkiet' },
        { label: 'b', task: 'la dictadura', solution: 'diktaturet', answer: 'diktaturet' },
        { label: 'c', task: 'la democracia', solution: 'demokratiet', answer: 'demokratiet' },
        { label: 'd', task: 'la constitución', solution: 'grunnloven', answer: 'grunnloven' },
      ], solution: 'a) monarkiet, b) diktaturet, c) demokratiet, d) grunnloven', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-1-example-2', type: 'example', title: 'Eksempel: Årstall', problem: `Hva skjedde i 1492?`, solution: `To viktige hendelser: **Fall av Granada** (slutten på Reconquista) og **Columbus' reise** til Amerika.` },
    { id: 'spansk-2-9-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-9-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene:', subTasks: [
        { label: 'a', task: 'Hvem var Francisco Franco?', solution: 'En general som ledet nasjonalistene i borgerkrigen og styrte Spania som diktator fra 1939 til 1975.', answer: 'En general som ledet nasjonalistene i borgerkrigen og styrte Spania som diktator fra 1939 til 1975.' },
        { label: 'b', task: 'Hva var La Transición?', solution: 'Den fredelige overgangen fra Francos diktatur til demokrati (1975-1982).', answer: 'Den fredelige overgangen fra Francos diktatur til demokrati (1975-1982).' },
        { label: 'c', task: 'Hvorfor er 1492 et viktig årstall?', solution: 'Granada falt (slutten på Reconquista) og Columbus reiste til Amerika.', answer: 'Granada falt (slutten på Reconquista) og Columbus reiste til Amerika.' },
        { label: 'd', task: 'Hvem var los conquistadores?', solution: 'Spanske erobrere som erobret store deler av Amerika på 1500-tallet (f.eks. Cortés, Pizarro).', answer: 'Spanske erobrere som erobret store deler av Amerika på 1500-tallet (f.eks. Cortés, Pizarro).' },
      ], solution: 'a) En general som ledet nasjonalistene i borgerkrigen og styrte Spania som diktator fra 1939 til 1975., b) Den fredelige overgangen fra Francos diktatur til demokrati (1975-1982)., c) Granada falt (slutten på Reconquista) og Columbus reiste til Amerika., d) Spanske erobrere som erobret store deler av Amerika på 1500-tallet (f.eks. Cortés, Pizarro).', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-9-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Refleksjonsoppgaver - skriv 2-3 setninger på spansk:', subTasks: [
        { label: 'a', task: 'Hvorfor var borgerkrigen viktig for Spanias utvikling?', solution: 'La Guerra Civil fue un conflicto devastador que dividió a España durante décadas. Después de la guerra, Franco impuso una dictadura que duró 36 años.', answer: 'La Guerra Civil fue un conflicto devastador que dividió a España durante décadas. Después de la guerra, Franco impuso una dictadura que duró 36 años.' },
        { label: 'b', task: 'Hva betyr La Transición for dagens Spania?', solution: 'La Transición fue un proceso pacífico que permitió a España convertirse en una democracia moderna. Gracias a la Constitución de 1978, España es hoy un estado democrático.', answer: 'La Transición fue un proceso pacífico que permitió a España convertirse en una democracia moderna. Gracias a la Constitución de 1978, España es hoy un estado democrático.' },
        { label: 'c', task: 'Sammenlign Reconquista med koloniseringen av Amerika.', solution: 'Tanto la Reconquista como la colonización involucraron la conquista de territorios. Sin embargo, la Reconquista fue una recuperación de tierras propias, mientras que la colonización fue la conquista de nuevos continentes.', answer: 'Tanto la Reconquista como la colonización involucraron la conquista de territorios. Sin embargo, la Reconquista fue una recuperación de tierras propias, mientras que la colonización fue la conquista de nuevos continentes.' },
        { label: 'd', task: 'Diskuter Francos innvirkning på spansk samfunn.', solution: 'La dictadura de Franco suprimió libertades básicas como la libertad de expresión y los derechos regionales. Muchos españoles tuvieron que exiliarse, y el país quedó aislado internacionalmente.', answer: 'La dictadura de Franco suprimió libertades básicas como la libertad de expresión y los derechos regionales. Muchos españoles tuvieron que exiliarse, y el país quedó aislado internacionalmente.' },
      ], solution: 'a) La Guerra Civil fue un conflicto devastador que dividió a España durante décadas. Después de la guerra, Franco impuso una dictadura que duró 36 años., b) La Transición fue un proceso pacífico que permitió a España convertirse en una democracia moderna. Gracias a la Constitución de 1978, España es hoy un estado democrático., c) Tanto la Reconquista como la colonización involucraron la conquista de territorios. Sin embargo, la Reconquista fue una recuperación de tierras propias, mientras que la colonización fue la conquista de nuevos continentes., d) La dictadura de Franco suprimió libertades básicas como la libertad de expresión y los derechos regionales. Muchos españoles tuvieron que exiliarse, y el país quedó aislado internacionalmente.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-1-tip-1', type: 'tip', content: `**Historisk kontekst:** Spanias historie hjelper oss å forstå dagens samfunn - for eksempel regionale spenninger (Cataluña, País Vasco) og det konstitusjonelle monarkiet.` },
    { id: 'spansk-2-9-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Spansk historie**

- **Reconquista:** 711-1492, gjenerobring fra maurerne
- **Siglo de Oro:** 1500-1700, gullalderen
- **Conquistadores:** Erobring av Amerika (Cortés, Pizarro)
- **Borgerkrigen:** 1936-1939, republikk vs. nasjonalisme
- **Franco:** Diktatur 1939-1975
- **La Transición:** Fredelig overgang til demokrati` },
  ],
  exercises: [],
};

// 9.2 Historia de Latinoamérica
export const CHAPTER_SPANSK_2_9_2: TextbookChapter = {
  id: 'spansk-2-9-2',
  courseId: 'spansk-2',
  chapterNumber: '9.2',
  title: 'Historia de Latinoamérica',
  subtitle: 'Latinamerikansk historie (kolonitid, uavhengighet)',
  description: 'Lær om Latin-Amerikas historie fra kolonitiden til uavhengigheten.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne hovedtrekkene i Latin-Amerikas historie', 'forstå kolonialismens konsekvenser'],
  content: [
    { id: 'spansk-2-9-2-intro', type: 'text', content: `## Historia de Latinoamérica

Latin-Amerikas historie er preget av kolonialisme, frigjøringskamp og nasjonsbygging. De spanske koloniene kjempet seg fri tidlig på 1800-tallet, ledet av helteskikkelser som Bolívar og San Martín.` },
    { id: 'spansk-2-9-2-def-1', type: 'definition', title: 'Kolonitid og uavhengighet i Latin-Amerika', content: `**Kolonitiden (1492-ca. 1825):**
Spania kontrollerte store deler av Amerika i over 300 år.

**Uavhengighetsbevegelsene (1810-1825):**

| Leder | Land/Region | Periode |
|-------|------------|--------|
| Simón Bolívar | Venezuela, Colombia, Ecuador, Bolivia, Peru | 1810-1830 |
| José de San Martín | Argentina, Chile, Peru | 1812-1824 |
| Miguel Hidalgo | Mexico | 1810-1811 |
| Bernardo O'Higgins | Chile | 1817-1823 |

**Nøkkelbegreper:** la colonia (kolonien), la independencia (uavhengigheten), el libertador (frigjøreren), la esclavitud (slaveriet), los pueblos indígenas (urfolkene)` },
    { id: 'spansk-2-9-2-text-1', type: 'text', content: `## Kolonitiden

Spanias kolonisering av Amerika hadde enorme konsekvenser:
- **Urfolk:** Befolkningsreduksjon gjennom sykdommer, krig og tvangsarbeid
- **Økonomi:** Utvinning av gull og sølv sendt til Spania
- **Religion:** Katolisismen ble innført med makt
- **Språk:** Spansk ble det dominerende språket
- **Samfunn:** Et klassesystem basert på etnisitet (peninsulares, criollos, mestizos, indígenas)

**Nøkkelord:**
- *los peninsulares:* spanskfødte som bodde i Amerika
- *los criollos:* amerikanskfødte med spanske foreldre
- *los mestizos:* blandet opphav` },
    { id: 'spansk-2-9-2-text-2', type: 'text', content: `## Uavhengighetsbevegelsene

**Simón Bolívar** (1783-1830) - "El Libertador" - drømte om et forent Sør-Amerika. Han frigjorde Venezuela, Colombia, Ecuador, Peru og Bolivia.

**José de San Martín** (1778-1850) frigjorde Argentina, Chile og Peru fra sør.

**Grito de Dolores** (1810): Presten Miguel Hidalgo startet den meksikanske uavhengighetskampen.

**Viktige årstall:**
- 1810: Starten på uavhengighetskampene
- 1821: Mexico uavhengig
- 1824: Slaget ved Ayacucho - siste store slag` },
    { id: 'spansk-2-9-2-example-1', type: 'example', title: 'Eksempel: Kolonisystemet', problem: `Forklar forskjellen mellom peninsulares, criollos og mestizos.`, solution: `**Peninsulares:** Født i Spania, bodde i Amerika - høyest status. **Criollos:** Født i Amerika med spanske foreldre - nest høyest. **Mestizos:** Blandet urfolks- og spansk opphav.` },
    { id: 'spansk-2-9-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-9-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match leder med land:', subTasks: [
        { label: 'a', task: 'Simón Bolívar', solution: 'Venezuela, Colombia, Ecuador, Bolivia, Peru', answer: 'Venezuela, Colombia, Ecuador, Bolivia, Peru' },
        { label: 'b', task: 'José de San Martín', solution: 'Argentina, Chile, Peru', answer: 'Argentina, Chile, Peru' },
        { label: 'c', task: 'Miguel Hidalgo', solution: 'Mexico', answer: 'Mexico' },
        { label: 'd', task: 'Bernardo O\'Higgins', solution: 'Chile', answer: 'Chile' },
      ], solution: 'a) Venezuela, Colombia, Ecuador, Bolivia, Peru, b) Argentina, Chile, Peru, c) Mexico, d) Chile', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-9-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match begrep med norsk:', subTasks: [
        { label: 'a', task: 'la colonia', solution: 'kolonien', answer: 'kolonien' },
        { label: 'b', task: 'la independencia', solution: 'uavhengigheten', answer: 'uavhengigheten' },
        { label: 'c', task: 'el libertador', solution: 'frigjøreren', answer: 'frigjøreren' },
        { label: 'd', task: 'la esclavitud', solution: 'slaveriet', answer: 'slaveriet' },
      ], solution: 'a) kolonien, b) uavhengigheten, c) frigjøreren, d) slaveriet', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-2-example-2', type: 'example', title: 'Eksempel: Bolívar', problem: `Hvorfor kalles Bolívar "El Libertador"?`, solution: `Fordi han ledet frigjøringen av flere søramerikanske land: Venezuela, Colombia, Ecuador, Peru og Bolivia (oppkalt etter ham).` },
    { id: 'spansk-2-9-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-9-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene:', subTasks: [
        { label: 'a', task: 'Hva var de viktigste konsekvensene av koloniseringen?', solution: 'Befolkningsreduksjon blant urfolk, innføring av spansk språk og katolsk religion, økonomisk utbytting.', answer: 'Befolkningsreduksjon blant urfolk, innføring av spansk språk og katolsk religion, økonomisk utbytting.' },
        { label: 'b', task: 'Hvem startet Mexicos uavhengighetskamp?', solution: 'Presten Miguel Hidalgo med Grito de Dolores i 1810.', answer: 'Presten Miguel Hidalgo med Grito de Dolores i 1810.' },
        { label: 'c', task: 'Hva drømte Bolívar om?', solution: 'Et forent Sør-Amerika, uten kolonialisme.', answer: 'Et forent Sør-Amerika, uten kolonialisme.' },
        { label: 'd', task: 'Hva skjedde i 1824?', solution: 'Slaget ved Ayacucho - det siste store slaget i uavhengighetskrigene.', answer: 'Slaget ved Ayacucho - det siste store slaget i uavhengighetskrigene.' },
      ], solution: 'a) Befolkningsreduksjon blant urfolk, innføring av spansk språk og katolsk religion, økonomisk utbytting., b) Presten Miguel Hidalgo med Grito de Dolores i 1810., c) Et forent Sør-Amerika, uten kolonialisme., d) Slaget ved Ayacucho - det siste store slaget i uavhengighetskrigene.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-9-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Refleksjonsoppgaver - skriv 2-3 setninger på spansk:', subTasks: [
        { label: 'a', task: 'Diskuter konsekvensene av kolonialismen for urfolk.', solution: 'La colonización tuvo consecuencias devastadoras para los pueblos indígenas: enfermedades, trabajo forzado y pérdida de sus tierras y culturas.', answer: 'La colonización tuvo consecuencias devastadoras para los pueblos indígenas: enfermedades, trabajo forzado y pérdida de sus tierras y culturas.' },
        { label: 'b', task: 'Hvorfor er Bolívar en viktig historisk person?', solution: 'Bolívar es importante porque lideró la independencia de varios países sudamericanos y soñó con la unidad latinoamericana.', answer: 'Bolívar es importante porque lideró la independencia de varios países sudamericanos y soñó con la unidad latinoamericana.' },
        { label: 'c', task: 'Sammenlign koloniseringen av Amerika med kolonialisme i Afrika.', solution: 'Tanto en América como en África, la colonización significó explotación económica y opresión cultural. Sin embargo, la colonización de América comenzó siglos antes.', answer: 'Tanto en América como en África, la colonización significó explotación económica y opresión cultural. Sin embargo, la colonización de América comenzó siglos antes.' },
        { label: 'd', task: 'Hvilke spor har kolonitiden etterlatt i dag?', solution: 'La colonización dejó huellas en el idioma (español), la religión (católica), la cultura y las desigualdades sociales que aún existen.', answer: 'La colonización dejó huellas en el idioma (español), la religión (católica), la cultura y las desigualdades sociales que aún existen.' },
      ], solution: 'a) La colonización tuvo consecuencias devastadoras para los pueblos indígenas: enfermedades, trabajo forzado y pérdida de sus tierras y culturas., b) Bolívar es importante porque lideró la independencia de varios países sudamericanos y soñó con la unidad latinoamericana., c) Tanto en América como en África, la colonización significó explotación económica y opresión cultural. Sin embargo, la colonización de América comenzó siglos antes., d) La colonización dejó huellas en el idioma (español), la religión (católica), la cultura y las desigualdades sociales que aún existen.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-2-tip-1', type: 'tip', content: `**Kolonialismens arv:** Mange av dagens utfordringer i Latin-Amerika har røtter i kolonitiden - sosial ulikhet, jordfordeling og kulturelle spenninger.` },
    { id: 'spansk-2-9-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Latinamerikansk historie**

- **Kolonitiden:** 1492-ca. 1825, spansk kontroll
- **Konsekvenser:** Urfolksreduksjon, språk, religion, klassesystem
- **Uavhengighet:** 1810-1824, ledet av Bolívar, San Martín, Hidalgo
- **Arv:** Sosial ulikhet, kulturell blanding, språklig enhet` },
  ],
  exercises: [],
};

// 9.3 España y Latinoamérica hoy
export const CHAPTER_SPANSK_2_9_3: TextbookChapter = {
  id: 'spansk-2-9-3',
  courseId: 'spansk-2',
  chapterNumber: '9.3',
  title: 'España y Latinoamérica hoy',
  subtitle: 'Spansktalende land i dag',
  description: 'Forstå dagens politiske og økonomiske situasjon i spansktalende land.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive aktuelle forhold i spansktalende land', 'bruke nyhetsrelatert vokabular'],
  content: [
    { id: 'spansk-2-9-3-intro', type: 'text', content: `## España y Latinoamérica hoy

I dag er de spansktalende landene et mangfoldig fellesskap med ulike styreformer, økonomiske systemer og utfordringer. Spania er EU-medlem, mens Latin-Amerika har alt fra stabile demokratier til land i politisk uro.` },
    { id: 'spansk-2-9-3-def-1', type: 'definition', title: 'Spansktalende land i dag', content: `**Spania i dag:**
- Konstitusjonelt monarki (kong Felipe VI)
- EU-medlem siden 1986
- Parlamentarisk demokrati
- Utfordringer: arbeidsledighet, regional autonomi (Cataluña)

**Latin-Amerika i dag:**

| Land | Styreform | Økonomisk nøkkel |
|------|-----------|------------------|
| Mexico | Føderal republikk | Olje, turisme, industri |
| Colombia | Presidentsrepublikk | Kaffe, olje, fredsprosess |
| Argentina | Føderal republikk | Jordbruk, økonomi i krise |
| Chile | Presidentsrepublikk | Kobber, vin, stabil økonomi |
| Peru | Presidentsrepublikk | Gruvedrift, turisme |

**Nøkkelbegreper:** el gobierno (regjeringen), el parlamento (parlamentet), el presidente (presidenten), la economía (økonomien), el desempleo (arbeidsledigheten)` },
    { id: 'spansk-2-9-3-text-1', type: 'text', content: `## Spanias utfordringer

**Regionale spenninger:**
- **Cataluña:** Uavhengighetsbevegelses folkeavstemning i 2017
- **País Vasco:** Historisk ETA-terrorisme, nå fredelig
- **Diskusjon:** Autonomi vs. nasjonal enhet

**Økonomi:**
- Stor finanskrise 2008-2014
- Høy ungdomsarbeidsledighet
- Turisme som viktig næring

**Nyttige uttrykk:**
- *El gobierno español...* (Den spanske regjeringen...)
- *España es miembro de la UE.* (Spania er EU-medlem.)
- *El desempleo juvenil es un problema.* (Ungdomsarbeidsledighet er et problem.)` },
    { id: 'spansk-2-9-3-text-2', type: 'text', content: `## Latin-Amerika: Utfordringer og muligheter

**Felles utfordringer:**
- Sosial ulikhet (*la desigualdad social*)
- Fattigdom (*la pobreza*)
- Korrupsjon (*la corrupción*)
- Miljøproblemer (*los problemas medioambientales*)

**Muligheter:**
- Ung befolkning
- Naturressurser
- Kulturell rikdom
- Økonomisk vekst i flere land

**Colombias fredsprosess:** I 2016 ble det signert en fredsavtale mellom regjeringen og FARC-geriljaen etter over 50 års konflikt.` },
    { id: 'spansk-2-9-3-example-1', type: 'example', title: 'Eksempel: Spania i dag', problem: `Hva slags styreform har Spania?`, solution: `Spania er et **konstitusjonelt monarki** med et parlamentarisk demokrati. Kongen er statsoverhode, mens regjeringssjefen (presidente del gobierno) har den utøvende makten.` },
    { id: 'spansk-2-9-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-9-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match land med fakta:', subTasks: [
        { label: 'a', task: 'Spania', solution: 'EU-medlem, konstitusjonelt monarki', answer: 'EU-medlem, konstitusjonelt monarki' },
        { label: 'b', task: 'Mexico', solution: 'Føderal republikk, olje og turisme', answer: 'Føderal republikk, olje og turisme' },
        { label: 'c', task: 'Colombia', solution: 'Fredsprosess med FARC, kaffe', answer: 'Fredsprosess med FARC, kaffe' },
        { label: 'd', task: 'Chile', solution: 'Stabil økonomi, kobber og vin', answer: 'Stabil økonomi, kobber og vin' },
      ], solution: 'a) EU-medlem, konstitusjonelt monarki, b) Føderal republikk, olje og turisme, c) Fredsprosess med FARC, kaffe, d) Stabil økonomi, kobber og vin', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-9-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match begrep med norsk:', subTasks: [
        { label: 'a', task: 'el gobierno', solution: 'regjeringen', answer: 'regjeringen' },
        { label: 'b', task: 'el desempleo', solution: 'arbeidsledigheten', answer: 'arbeidsledigheten' },
        { label: 'c', task: 'la desigualdad', solution: 'ulikheten', answer: 'ulikheten' },
        { label: 'd', task: 'la pobreza', solution: 'fattigdommen', answer: 'fattigdommen' },
      ], solution: 'a) regjeringen, b) arbeidsledigheten, c) ulikheten, d) fattigdommen', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-3-example-2', type: 'example', title: 'Eksempel: Latin-Amerika', problem: `Nevn tre utfordringer for Latin-Amerika i dag.`, solution: `Sosial ulikhet (**la desigualdad social**), fattigdom (**la pobreza**) og korrupsjon (**la corrupción**). Andre: miljøproblemer, arbeidsledighet.` },
    { id: 'spansk-2-9-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-9-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene på spansk:', subTasks: [
        { label: 'a', task: 'Hva slags styreform har Spania?', solution: 'España es una monarquía constitucional con un sistema parlamentario.', answer: 'España es una monarquía constitucional con un sistema parlamentario.' },
        { label: 'b', task: 'Hva er en stor utfordring for Spania?', solution: 'Un gran desafío para España es el desempleo juvenil y las tensiones regionales, como en Cataluña.', answer: 'Un gran desafío para España es el desempleo juvenil y las tensiones regionales, como en Cataluña.' },
        { label: 'c', task: 'Hva skjedde i Colombia i 2016?', solution: 'En 2016, el gobierno colombiano firmó un acuerdo de paz con la guerrilla de las FARC.', answer: 'En 2016, el gobierno colombiano firmó un acuerdo de paz con la guerrilla de las FARC.' },
        { label: 'd', task: 'Hvorfor er turisme viktig for Spania?', solution: 'El turismo es importante para la economía española porque genera empleo y ingresos.', answer: 'El turismo es importante para la economía española porque genera empleo y ingresos.' },
      ], solution: 'a) España es una monarquía constitucional con un sistema parlamentario., b) Un gran desafío para España es el desempleo juvenil y las tensiones regionales, como en Cataluña., c) En 2016, el gobierno colombiano firmó un acuerdo de paz con la guerrilla de las FARC., d) El turismo es importante para la economía española porque genera empleo y ingresos.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-9-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Refleksjonsoppgaver - skriv 3-4 setninger:', subTasks: [
        { label: 'a', task: 'Diskuter Cataluñas uavhengighetsbevegelse.', solution: 'La cuestión catalana es compleja. Muchos catalanes quieren la independencia, pero el gobierno español lo considera inconstitucional. En 2017 hubo un referéndum ilegal que causó una gran crisis política.', answer: 'La cuestión catalana es compleja. Muchos catalanes quieren la independencia, pero el gobierno español lo considera inconstitucional. En 2017 hubo un referéndum ilegal que causó una gran crisis política.' },
        { label: 'b', task: 'Sammenlign utfordringene til Spania og Norge.', solution: 'Tanto España como Noruega enfrentan desafíos económicos. Sin embargo, el desempleo es mucho más alto en España. A diferencia de Noruega, España no tiene grandes reservas de petróleo.', answer: 'Tanto España como Noruega enfrentan desafíos económicos. Sin embargo, el desempleo es mucho más alto en España. A diferencia de Noruega, España no tiene grandes reservas de petróleo.' },
        { label: 'c', task: 'Diskuter Latin-Amerikas fremtid.', solution: 'Latinoamérica tiene un gran potencial gracias a su joven población y sus recursos naturales. Sin embargo, necesita superar problemas como la desigualdad y la corrupción.', answer: 'Latinoamérica tiene un gran potencial gracias a su joven población y sus recursos naturales. Sin embargo, necesita superar problemas como la desigualdad y la corrupción.' },
        { label: 'd', task: 'Hva kan vi lære av Colombias fredsprosess?', solution: 'El proceso de paz en Colombia nos enseña que el diálogo puede resolver conflictos largos. También muestra que la paz requiere compromiso de todas las partes.', answer: 'El proceso de paz en Colombia nos enseña que el diálogo puede resolver conflictos largos. También muestra que la paz requiere compromiso de todas las partes.' },
      ], solution: 'a) La cuestión catalana es compleja. Muchos catalanes quieren la independencia, pero el gobierno español lo considera inconstitucional. En 2017 hubo un referéndum ilegal que causó una gran crisis política., b) Tanto España como Noruega enfrentan desafíos económicos. Sin embargo, el desempleo es mucho más alto en España. A diferencia de Noruega, España no tiene grandes reservas de petróleo., c) Latinoamérica tiene un gran potencial gracias a su joven población y sus recursos naturales. Sin embargo, necesita superar problemas como la desigualdad y la corrupción., d) El proceso de paz en Colombia nos enseña que el diálogo puede resolver conflictos largos. También muestra que la paz requiere compromiso de todas las partes.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-3-tip-1', type: 'tip', content: `**Aktualitet:** Følg nyheter fra spansktalende land på nett (f.eks. BBC Mundo, El País) for å holde deg oppdatert og øve spansk.` },
    { id: 'spansk-2-9-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Spansktalende land i dag**

- **Spania:** Monarki, EU, regionalisme, arbeidsledighet
- **Latin-Amerika:** Demokratier, sosial ulikhet, korrupsjon, potensial
- **Colombia:** Fredsprosess 2016
- **Uttrykk:** el gobierno, el desempleo, la desigualdad, la pobreza` },
  ],
  exercises: [],
};

// 9.4 Reflexiones históricas
export const CHAPTER_SPANSK_2_9_4: TextbookChapter = {
  id: 'spansk-2-9-4',
  courseId: 'spansk-2',
  chapterNumber: '9.4',
  title: 'Reflexiones históricas',
  subtitle: 'Historiske refleksjoner og sammenhenger',
  description: 'Lær å reflektere over historiske hendelser og trekke sammenhenger til i dag.',
  estimatedMinutes: 45,
  competenceGoals: ['analysere historiske hendelser', 'skrive refleksjonstekster om historie'],
  content: [
    { id: 'spansk-2-9-4-intro', type: 'text', content: `## Reflexiones históricas

Å reflektere over historie er mer enn å lære årstall. Det handler om å forstå **sammenhenger** mellom fortid og nåtid, og å analysere **årsaker og konsekvenser** av historiske hendelser.` },
    { id: 'spansk-2-9-4-def-1', type: 'definition', title: 'Historisk refleksjon og analyse', content: `**Å reflektere over historie** betyr å:
1. **Forstå** hva som skjedde og hvorfor
2. **Analysere** konsekvensene
3. **Sammenligne** med andre hendelser
4. **Koble** fortid og nåtid

**Nyttige uttrykk for historisk refleksjon:**

| Spansk | Norsk |
|--------|-------|
| En el siglo... | På ...hundretallet |
| Durante la época de... | I perioden... |
| Como consecuencia de... | Som følge av... |
| Esto llevó a... | Dette førte til... |
| Podemos ver que... | Vi kan se at... |
| En la actualidad... | I dag... |
| A lo largo de la historia... | Gjennom historien... |` },
    { id: 'spansk-2-9-4-text-1', type: 'text', content: `## Strukturere en historisk refleksjon

**Essay-struktur:**
1. **Introducción:** Presenter temaet og din problemstilling
2. **Contexto histórico:** Beskriv bakgrunnen
3. **Análisis:** Drøft årsaker og konsekvenser
4. **Conexión con el presente:** Koble til nåtiden
5. **Conclusión:** Oppsummer og gi din mening

**Eksempel på åpning:**
*A lo largo de la historia, España ha experimentado grandes cambios políticos. En este ensayo, voy a analizar...* (Gjennom historien har Spania opplevd store politiske endringer. I dette essayet skal jeg analysere...)` },
    { id: 'spansk-2-9-4-text-2', type: 'text', content: `## Koble fortid og nåtid

**Fra Reconquista til i dag:**
- Maurisk arkitektur i Andalucía (Alhambra) → turisme i dag
- Kolonialismens klassesystem → sosial ulikhet i Latin-Amerika
- Borgerkrigen → generasjonskonflikter, minnespolitikk
- La Transición → dagens konstitusjonelle monarki

**Formuler sammenhenger:**
- *Como consecuencia de la colonización, hoy en día...* (Som følge av koloniseringen, i dag...)
- *La Guerra Civil todavía afecta a...* (Borgerkrigen påvirker fortsatt...)
- *Los efectos de... se pueden ver en...* (Effektene av... kan ses i...)` },
    { id: 'spansk-2-9-4-example-1', type: 'example', title: 'Eksempel: Årsak-virkning', problem: `Hva var en konsekvens av koloniseringen for språket i Latin-Amerika?`, solution: `**Como consecuencia de la colonización**, el español se convirtió en el idioma principal de gran parte de América Latina. (Som følge av koloniseringen ble spansk hovedspråket i store deler av Latin-Amerika.)` },
    { id: 'spansk-2-9-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-9-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match historisk hendelse med konsekvens:', subTasks: [
        { label: 'a', task: 'Koloniseringen av Amerika', solution: 'Spansk ble hovedspråket i Latin-Amerika', answer: 'Spansk ble hovedspråket i Latin-Amerika' },
        { label: 'b', task: 'Borgerkrigen', solution: 'Franco-diktaturet i 36 år', answer: 'Franco-diktaturet i 36 år' },
        { label: 'c', task: 'La Transición', solution: 'Spania ble et demokrati', answer: 'Spania ble et demokrati' },
        { label: 'd', task: 'EU-medlemskap (1986)', solution: 'Økonomisk vekst og modernisering', answer: 'Økonomisk vekst og modernisering' },
      ], solution: 'a) Spansk ble hovedspråket i Latin-Amerika, b) Franco-diktaturet i 36 år, c) Spania ble et demokrati, d) Økonomisk vekst og modernisering', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-9-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig uttrykk:', subTasks: [
        { label: 'a', task: '___ la época colonial, los indígenas sufrieron mucho.', solution: 'Durante', answer: 'Durante' },
        { label: 'b', task: '___ de la guerra, España quedó dividida.', solution: 'Como consecuencia', answer: 'Como consecuencia' },
        { label: 'c', task: '___ la historia, España ha cambiado mucho.', solution: 'A lo largo de', answer: 'A lo largo de' },
        { label: 'd', task: '___, España es una democracia.', solution: 'En la actualidad', answer: 'En la actualidad' },
      ], solution: 'a) Durante, b) Como consecuencia, c) A lo largo de, d) En la actualidad', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-4-example-2', type: 'example', title: 'Eksempel: Koble fortid-nåtid', problem: `Hvordan påvirker borgerkrigen Spania i dag?`, solution: `La Guerra Civil **todavía afecta a** la sociedad española. Hay debates sobre la memoria histórica y cómo recordar a las víctimas. (Borgerkrigen påvirker fortsatt det spanske samfunnet. Det er debatter om historisk minne.)` },
    { id: 'spansk-2-9-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-9-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv sammenhenger mellom fortid og nåtid:', subTasks: [
        { label: 'a', task: 'Maurisk arkitektur → turisme', solution: 'Como consecuencia de la influencia árabe, hoy podemos visitar monumentos como la Alhambra, que atrae a millones de turistas.', answer: 'Como consecuencia de la influencia árabe, hoy podemos visitar monumentos como la Alhambra, que atrae a millones de turistas.' },
        { label: 'b', task: 'Kolonialisme → ulikhet', solution: 'El sistema colonial creó desigualdades que todavía existen en Latinoamérica.', answer: 'El sistema colonial creó desigualdades que todavía existen en Latinoamérica.' },
        { label: 'c', task: 'Borgerkrig → minneskultur', solution: 'La Guerra Civil todavía genera debates sobre la memoria histórica en España.', answer: 'La Guerra Civil todavía genera debates sobre la memoria histórica en España.' },
        { label: 'd', task: 'La Transición → demokrati', solution: 'Gracias a la Transición, España es hoy una democracia moderna y miembro de la Unión Europea.', answer: 'Gracias a la Transición, España es hoy una democracia moderna y miembro de la Unión Europea.' },
      ], solution: 'a) Como consecuencia de la influencia árabe, hoy podemos visitar monumentos como la Alhambra, que atrae a millones de turistas., b) El sistema colonial creó desigualdades que todavía existen en Latinoamérica., c) La Guerra Civil todavía genera debates sobre la memoria histórica en España., d) Gracias a la Transición, España es hoy una democracia moderna y miembro de la Unión Europea.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-9-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort historisk refleksjon (4-5 setninger):', subTasks: [
        { label: 'a', task: 'Reflekter over kolonialismens konsekvenser for Latin-Amerika.', solution: 'A lo largo de tres siglos, España colonizó gran parte de América. Como consecuencia, el español se convirtió en el idioma principal. Sin embargo, la colonización también causó sufrimiento entre los pueblos indígenas. En la actualidad, podemos ver los efectos en la desigualdad social.', answer: 'A lo largo de tres siglos, España colonizó gran parte de América. Como consecuencia, el español se convirtió en el idioma principal. Sin embargo, la colonización también causó sufrimiento entre los pueblos indígenas. En la actualidad, podemos ver los efectos en la desigualdad social.' },
        { label: 'b', task: 'Reflekter over La Transición i Spania.', solution: 'Después de la muerte de Franco en 1975, España inició una transición pacífica a la democracia. La Constitución de 1978 estableció un sistema democrático. Esto llevó a la modernización del país y su entrada en la Unión Europea en 1986.', answer: 'Después de la muerte de Franco en 1975, España inició una transición pacífica a la democracia. La Constitución de 1978 estableció un sistema democrático. Esto llevó a la modernización del país y su entrada en la Unión Europea en 1986.' },
        { label: 'c', task: 'Sammenlign to historiske hendelser.', solution: 'Tanto la Reconquista como las guerras de independencia fueron luchas por la libertad. Sin embargo, mientras la Reconquista duró casi 800 años, las independencias se lograron en pocas décadas.', answer: 'Tanto la Reconquista como las guerras de independencia fueron luchas por la libertad. Sin embargo, mientras la Reconquista duró casi 800 años, las independencias se lograron en pocas décadas.' },
        { label: 'd', task: 'Diskuter historiens relevans for oss i dag.', solution: 'Estudiar la historia nos ayuda a entender el presente. Por ejemplo, las tensiones en Cataluña tienen raíces históricas. A lo largo de la historia, los conflictos entre regiones y el gobierno central han sido una constante en España.', answer: 'Estudiar la historia nos ayuda a entender el presente. Por ejemplo, las tensiones en Cataluña tienen raíces históricas. A lo largo de la historia, los conflictos entre regiones y el gobierno central han sido una constante en España.' },
      ], solution: 'a) A lo largo de tres siglos, España colonizó gran parte de América. Como consecuencia, el español se convirtió en el idioma principal. Sin embargo, la colonización también causó sufrimiento entre los pueblos indígenas. En la actualidad, podemos ver los efectos en la desigualdad social., b) Después de la muerte de Franco en 1975, España inició una transición pacífica a la democracia. La Constitución de 1978 estableció un sistema democrático. Esto llevó a la modernización del país y su entrada en la Unión Europea en 1986., c) Tanto la Reconquista como las guerras de independencia fueron luchas por la libertad. Sin embargo, mientras la Reconquista duró casi 800 años, las independencias se lograron en pocas décadas., d) Estudiar la historia nos ayuda a entender el presente. Por ejemplo, las tensiones en Cataluña tienen raíces históricas. A lo largo de la historia, los conflictos entre regiones y el gobierno central han sido una constante en España.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-9-4-tip-1', type: 'tip', content: `**Refleksjonstips:** Bruk alltid konkrete eksempler når du analyserer historie. Unngå generaliseringer og vis at du forstår nyanser.` },
    { id: 'spansk-2-9-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Historisk refleksjon**

- **Metode:** Forstå → Analysere → Sammenligne → Koble til nåtid
- **Struktur:** Introducción → Contexto → Análisis → Conexión → Conclusión
- **Uttrykk:** Como consecuencia de, Esto llevó a, A lo largo de la historia, En la actualidad
- **Viktig:** Bruk konkrete eksempler, vis sammenhenger` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: COMUNICACIÓN AVANZADA
// ============================================================================

// 10.1 Expresar opiniones
export const CHAPTER_SPANSK_2_10_1: TextbookChapter = {
  id: 'spansk-2-10-1',
  courseId: 'spansk-2',
  chapterNumber: '10.1',
  title: 'Expresar opiniones',
  subtitle: 'Uttrykke meninger',
  description: 'Lær å uttrykke meninger, enighet og uenighet på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['uttrykke egne meninger', 'uttrykke enighet og uenighet høflig'],
  content: [
    { id: 'spansk-2-10-1-intro', type: 'text', content: `## Expresar opiniones

Å kunne uttrykke meninger er en viktig kommunikasjonsferdighet. I dette kapittelet lærer du å si hva du mener, og å uttrykke enighet og uenighet **høflig** på spansk.` },
    { id: 'spansk-2-10-1-def-1', type: 'definition', title: 'Meningsuttrykk (expresar opiniones)', content: `**Uttrykke meninger:**

| Spansk | Norsk |
|--------|-------|
| Creo que... | Jeg tror at... |
| Me parece que... | Det virker for meg som... |
| En mi opinión... | Etter min mening... |
| Pienso que... | Jeg tenker at... |
| Considero que... | Jeg anser at... |

**Enighet:**
| Estoy de acuerdo (con) | Jeg er enig (med) |
| Tienes razón | Du har rett |
| Exactamente | Nettopp |

**Uenighet:**
| No estoy de acuerdo | Jeg er ikke enig |
| No creo que... (+subjuntivo) | Jeg tror ikke at... |
| Respeto tu opinión, pero... | Jeg respekterer din mening, men... |` },
    { id: 'spansk-2-10-1-text-1', type: 'text', content: `## Grader av enighet

**Helt enig:**
- *Estoy totalmente de acuerdo.* (Jeg er helt enig.)
- *¡Exactamente! Tienes toda la razón.* (Nettopp! Du har helt rett.)

**Delvis enig:**
- *Estoy de acuerdo en parte, pero...* (Jeg er delvis enig, men...)
- *Tienes razón en eso, sin embargo...* (Du har rett i det, likevel...)

**Uenig:**
- *No estoy de acuerdo porque...* (Jeg er ikke enig fordi...)
- *Respeto tu opinión, pero creo que...* (Jeg respekterer din mening, men jeg tror at...)

**Sterkt uenig:**
- *No estoy nada de acuerdo.* (Jeg er slett ikke enig.)
- *Me parece que estás equivocado/a.* (Jeg synes du tar feil.)` },
    { id: 'spansk-2-10-1-text-2', type: 'text', content: `## Debatt og diskusjon

**Starter en mening:**
- *Yo creo que la educación es importante.* (Jeg tror utdanning er viktig.)

**Spørre om andres mening:**
- *¿Qué piensas tú?* (Hva tenker du?)
- *¿Estás de acuerdo?* (Er du enig?)
- *¿Cuál es tu opinión?* (Hva er din mening?)

**Bygge på andres mening:**
- *Como dice María...* (Som María sier...)
- *Estoy de acuerdo con Juan porque...* (Jeg er enig med Juan fordi...)` },
    { id: 'spansk-2-10-1-example-1', type: 'example', title: 'Eksempel: Uttrykke mening', problem: `Si at du mener at spansk er et vakkert språk.`, solution: `**Creo que** el español es un idioma bonito. / **En mi opinión**, el español es un idioma muy bonito.` },
    { id: 'spansk-2-10-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-10-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig uttrykk for meninger:', subTasks: [
        { label: 'a', task: '___ que el español es fácil. (Jeg tror)', solution: 'Creo', answer: 'Creo' },
        { label: 'b', task: 'En mi ___, los idiomas son importantes. (mening)', solution: 'opinión', answer: 'opinión' },
        { label: 'c', task: '___ de acuerdo contigo. (Jeg er)', solution: 'Estoy', answer: 'Estoy' },
        { label: 'd', task: '___ razón. (Du har)', solution: 'Tienes', answer: 'Tienes' },
      ], solution: 'a) Creo, b) opinión, c) Estoy, d) Tienes', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-10-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'Creo que...', solution: 'Jeg tror at...', answer: 'Jeg tror at...' },
        { label: 'b', task: 'No estoy de acuerdo', solution: 'Jeg er ikke enig', answer: 'Jeg er ikke enig' },
        { label: 'c', task: 'Me parece que...', solution: 'Det virker for meg som...', answer: 'Det virker for meg som...' },
        { label: 'd', task: 'Tienes razón', solution: 'Du har rett', answer: 'Du har rett' },
      ], solution: 'a) Jeg tror at..., b) Jeg er ikke enig, c) Det virker for meg som..., d) Du har rett', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-1-example-2', type: 'example', title: 'Eksempel: Uenighet', problem: `Uttrykk høflig uenighet med noen som sier at ferie er bortkastet tid.`, solution: `**Respeto tu opinión, pero** creo que las vacaciones son necesarias para descansar. / **No estoy de acuerdo** porque todos necesitamos tiempo libre.` },
    { id: 'spansk-2-10-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-10-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Uttrykk din mening om disse temaene:', subTasks: [
        { label: 'a', task: 'Skoleuniformer', solution: 'Creo que los uniformes escolares son / no son una buena idea porque...', answer: 'Creo que los uniformes escolares son / no son una buena idea porque...' },
        { label: 'b', task: 'Sosiale medier', solution: 'En mi opinión, las redes sociales tienen ventajas y desventajas...', answer: 'En mi opinión, las redes sociales tienen ventajas y desventajas...' },
        { label: 'c', task: 'Miljøvern', solution: 'Pienso que es importante proteger el medio ambiente porque...', answer: 'Pienso que es importante proteger el medio ambiente porque...' },
        { label: 'd', task: 'Leksefri skole', solution: 'Me parece que la escuela sin deberes sería... porque...', answer: 'Me parece que la escuela sin deberes sería... porque...' },
      ], solution: 'a) Creo que los uniformes escolares son / no son una buena idea porque..., b) En mi opinión, las redes sociales tienen ventajas y desventajas..., c) Pienso que es importante proteger el medio ambiente porque..., d) Me parece que la escuela sin deberes sería... porque...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-10-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort debatt - gi mening, enighet og uenighet:', subTasks: [
        { label: 'a', task: 'Tema: "Alle burde lære et fremmedspråk." - Si deg enig.', solution: 'Estoy totalmente de acuerdo con que todos deberían aprender un idioma extranjero. Creo que aprender idiomas abre puertas y nos permite conocer otras culturas.', answer: 'Estoy totalmente de acuerdo con que todos deberían aprender un idioma extranjero. Creo que aprender idiomas abre puertas y nos permite conocer otras culturas.' },
        { label: 'b', task: 'Tema: "Teknologi gjør oss dumme." - Si deg uenig.', solution: 'No estoy de acuerdo con que la tecnología nos haga más tontos. En mi opinión, la tecnología nos da acceso a más información y herramientas de aprendizaje.', answer: 'No estoy de acuerdo con que la tecnología nos haga más tontos. En mi opinión, la tecnología nos da acceso a más información y herramientas de aprendizaje.' },
        { label: 'c', task: 'Tema: "Det er viktigere å reise enn å studere." - Delvis enig.', solution: 'Estoy de acuerdo en parte. Viajar es muy educativo, pero pienso que los estudios también son importantes. Lo ideal es combinar ambas cosas.', answer: 'Estoy de acuerdo en parte. Viajar es muy educativo, pero pienso que los estudios también son importantes. Lo ideal es combinar ambas cosas.' },
        { label: 'd', task: 'Tema: "Spansk er viktigere enn tysk." - Gi en balansert mening.', solution: 'Creo que ambos idiomas son importantes. Sin embargo, el español se habla en más países. Respeto la opinión de quienes prefieren el alemán, pero me parece que el español tiene más hablantes.', answer: 'Creo que ambos idiomas son importantes. Sin embargo, el español se habla en más países. Respeto la opinión de quienes prefieren el alemán, pero me parece que el español tiene más hablantes.' },
      ], solution: 'a) Estoy totalmente de acuerdo con que todos deberían aprender un idioma extranjero. Creo que aprender idiomas abre puertas y nos permite conocer otras culturas., b) No estoy de acuerdo con que la tecnología nos haga más tontos. En mi opinión, la tecnología nos da acceso a más información y herramientas de aprendizaje., c) Estoy de acuerdo en parte. Viajar es muy educativo, pero pienso que los estudios también son importantes. Lo ideal es combinar ambas cosas., d) Creo que ambos idiomas son importantes. Sin embargo, el español se habla en más países. Respeto la opinión de quienes prefieren el alemán, pero me parece que el español tiene más hablantes.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-1-tip-1', type: 'tip', content: `**Høflighet:** I en debatt er det viktig å respektere andres meninger. Bruk uttrykk som *respeto tu opinión, pero...* for å uttrykke uenighet uten å være uhøflig.` },
    { id: 'spansk-2-10-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Uttrykke meninger**

- **Mening:** Creo que, Me parece que, En mi opinión, Pienso que
- **Enighet:** Estoy de acuerdo, Tienes razón, Exactamente
- **Uenighet:** No estoy de acuerdo, Respeto tu opinión pero...
- **Spørre:** ¿Qué piensas? ¿Estás de acuerdo?
- **Viktig:** Vær høflig, respekter andres meninger` },
  ],
  exercises: [],
};

// 10.2 Argumentación escrita
export const CHAPTER_SPANSK_2_10_2: TextbookChapter = {
  id: 'spansk-2-10-2',
  courseId: 'spansk-2',
  chapterNumber: '10.2',
  title: 'Argumentación escrita',
  subtitle: 'Skriftlig argumentasjon',
  description: 'Lær å strukturere argumenterende tekster med konnektorer.',
  estimatedMinutes: 45,
  competenceGoals: ['skrive argumenterende tekster', 'bruke konnektorer og bindeord'],
  content: [
    { id: 'spansk-2-10-2-intro', type: 'text', content: `## Argumentación escrita

Å skrive argumenterende tekster er en viktig ferdighet i spanskfaget. Du trenger en klar **struktur** og gode **konnektorer** (bindeord) for å koble argumentene dine.` },
    { id: 'spansk-2-10-2-def-1', type: 'definition', title: 'Argumenterende tekst (texto argumentativo)', content: `**Struktur for argumenterende tekst:**

1. **Introducción:** Presenter temaet og din tese
2. **Desarrollo:** Argumenter for og imot
3. **Conclusión:** Oppsummer og gi din mening

**Viktige konnektorer:**

| Spansk | Norsk | Funksjon |
|--------|-------|----------|
| Por lo tanto | Derfor | Konklusjon |
| Sin embargo | Likevel | Motsetning |
| Además | Dessuten | Tillegg |
| En primer lugar | For det første | Ordne |
| Por otro lado | På den annen side | Kontrast |
| En conclusión | Avslutningsvis | Oppsummering |
| Aunque | Selv om | Innrømmelse |
| Por ejemplo | For eksempel | Eksempel |` },
    { id: 'spansk-2-10-2-text-1', type: 'text', content: `## Konnektorer i praksis

**Ordne argumenter:**
- *En primer lugar, creo que...* (For det første tror jeg at...)
- *En segundo lugar...* (For det andre...)
- *Por último...* (Til slutt...)

**Legge til:**
- *Además, es importante...* (Dessuten er det viktig...)
- *También hay que considerar...* (Man må også vurdere...)

**Motsetning:**
- *Sin embargo, otros piensan que...* (Likevel mener andre at...)
- *Por otro lado...* (På den annen side...)
- *Aunque es verdad que..., creo que...* (Selv om det er sant at..., tror jeg at...)` },
    { id: 'spansk-2-10-2-text-2', type: 'text', content: `## Eksempel på argumenterende tekst

**Tema: ¿Es importante aprender idiomas?**

*En mi opinión, aprender idiomas es fundamental en el mundo actual.*

*En primer lugar, hablar otros idiomas nos permite comunicarnos con más personas. **Además**, conocer un idioma significa conocer una cultura.*

***Sin embargo**, algunos argumentan que la tecnología de traducción hace innecesario aprender idiomas. **Aunque** la tecnología avanza, **creo que** hablar directamente con personas de otras culturas es insustituible.*

***En conclusión**, aprender idiomas es una inversión en nuestro futuro.*` },
    { id: 'spansk-2-10-2-example-1', type: 'example', title: 'Eksempel: Konnektorer', problem: `Bind sammen: "Spansk er nyttig." + "Mange snakker det."`, solution: `El español es útil. **Además**, muchos lo hablan. / El español es útil **porque** muchos lo hablan.` },
    { id: 'spansk-2-10-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-10-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match konnektor med funksjon:', subTasks: [
        { label: 'a', task: 'Por lo tanto', solution: 'Konklusjon (derfor)', answer: 'Konklusjon (derfor)' },
        { label: 'b', task: 'Sin embargo', solution: 'Motsetning (likevel)', answer: 'Motsetning (likevel)' },
        { label: 'c', task: 'Además', solution: 'Tillegg (dessuten)', answer: 'Tillegg (dessuten)' },
        { label: 'd', task: 'En conclusión', solution: 'Oppsummering (avslutningsvis)', answer: 'Oppsummering (avslutningsvis)' },
      ], solution: 'a) Konklusjon (derfor), b) Motsetning (likevel), c) Tillegg (dessuten), d) Oppsummering (avslutningsvis)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-10-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig konnektor:', subTasks: [
        { label: 'a', task: '___, creo que el español es importante. (For det første)', solution: 'En primer lugar', answer: 'En primer lugar' },
        { label: 'b', task: '___, muchos países hablan español. (Dessuten)', solution: 'Además', answer: 'Además' },
        { label: 'c', task: '___, algunos prefieren el inglés. (Likevel)', solution: 'Sin embargo', answer: 'Sin embargo' },
        { label: 'd', task: '___, aprender idiomas es positivo. (Avslutningsvis)', solution: 'En conclusión', answer: 'En conclusión' },
      ], solution: 'a) En primer lugar, b) Además, c) Sin embargo, d) En conclusión', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-2-example-2', type: 'example', title: 'Eksempel: Motargument', problem: `Presenter et motargument til "Vi trenger ikke lære fremmedspråk."`, solution: `**Sin embargo**, aprender idiomas nos permite comunicarnos con personas de otras culturas y entender diferentes perspectivas.` },
    { id: 'spansk-2-10-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-10-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv setninger med konnektorer:', subTasks: [
        { label: 'a', task: 'Bruk "sin embargo" - spansk er vanskelig, men verdt det.', solution: 'El español puede ser difícil. Sin embargo, vale la pena aprenderlo.', answer: 'El español puede ser difícil. Sin embargo, vale la pena aprenderlo.' },
        { label: 'b', task: 'Bruk "además" - legg til et argument for språklæring.', solution: 'Aprender español es divertido. Además, nos permite viajar a muchos países.', answer: 'Aprender español es divertido. Además, nos permite viajar a muchos países.' },
        { label: 'c', task: 'Bruk "por lo tanto" - trekk en konklusjon.', solution: 'El español se habla en 21 países. Por lo tanto, es un idioma muy útil.', answer: 'El español se habla en 21 países. Por lo tanto, es un idioma muy útil.' },
        { label: 'd', task: 'Bruk "aunque" - innrøm noe, men hold fast.', solution: 'Aunque el inglés es el idioma global, creo que el español también es muy importante.', answer: 'Aunque el inglés es el idioma global, creo que el español también es muy importante.' },
      ], solution: 'a) El español puede ser difícil. Sin embargo, vale la pena aprenderlo., b) Aprender español es divertido. Además, nos permite viajar a muchos países., c) El español se habla en 21 países. Por lo tanto, es un idioma muy útil., d) Aunque el inglés es el idioma global, creo que el español también es muy importante.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-10-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort argumenterende tekst (5-6 setninger) om temaet:', subTasks: [
        { label: 'a', task: '"Er det viktig å reise?"', solution: 'En mi opinión, viajar es muy importante. En primer lugar, nos permite conocer otras culturas. Además, viajando aprendemos a ser más tolerantes. Sin embargo, no todos tienen la oportunidad de viajar. Por lo tanto, es importante que los viajes sean accesibles para todos. En conclusión, viajar enriquece nuestra vida.', answer: 'En mi opinión, viajar es muy importante. En primer lugar, nos permite conocer otras culturas. Además, viajando aprendemos a ser más tolerantes. Sin embargo, no todos tienen la oportunidad de viajar. Por lo tanto, es importante que los viajes sean accesibles para todos. En conclusión, viajar enriquece nuestra vida.' },
        { label: 'b', task: '"Bør alle lære et fremmedspråk?"', solution: 'Creo que todos deberían aprender al menos un idioma extranjero. En primer lugar, facilita la comunicación internacional. Además, aprender idiomas mejora la capacidad cognitiva. Aunque la tecnología ofrece traducción automática, hablar directamente es más auténtico. En conclusión, aprender idiomas es una inversión valiosa.', answer: 'Creo que todos deberían aprender al menos un idioma extranjero. En primer lugar, facilita la comunicación internacional. Además, aprender idiomas mejora la capacidad cognitiva. Aunque la tecnología ofrece traducción automática, hablar directamente es más auténtico. En conclusión, aprender idiomas es una inversión valiosa.' },
        { label: 'c', task: '"Er sosiale medier positivt eller negativt?"', solution: 'Las redes sociales tienen aspectos positivos y negativos. Por un lado, nos permiten estar conectados con amigos y familia. Además, son una fuente de información. Sin embargo, pueden causar adicción y problemas de salud mental. En conclusión, debemos usarlas con moderación.', answer: 'Las redes sociales tienen aspectos positivos y negativos. Por un lado, nos permiten estar conectados con amigos y familia. Además, son una fuente de información. Sin embargo, pueden causar adicción y problemas de salud mental. En conclusión, debemos usarlas con moderación.' },
        { label: 'd', task: '"Er det viktig å bevare tradisjoner?"', solution: 'En mi opinión, es importante preservar las tradiciones. En primer lugar, las tradiciones nos conectan con nuestra historia. Además, forman parte de nuestra identidad cultural. Sin embargo, también debemos estar abiertos al cambio. Por lo tanto, lo ideal es encontrar un equilibrio entre tradición y modernidad.', answer: 'En mi opinión, es importante preservar las tradiciones. En primer lugar, las tradiciones nos conectan con nuestra historia. Además, forman parte de nuestra identidad cultural. Sin embargo, también debemos estar abiertos al cambio. Por lo tanto, lo ideal es encontrar un equilibrio entre tradición y modernidad.' },
      ], solution: 'a) En mi opinión, viajar es muy importante. En primer lugar, nos permite conocer otras culturas. Además, viajando aprendemos a ser más tolerantes. Sin embargo, no todos tienen la oportunidad de viajar. Por lo tanto, es importante que los viajes sean accesibles para todos. En conclusión, viajar enriquece nuestra vida., b) Creo que todos deberían aprender al menos un idioma extranjero. En primer lugar, facilita la comunicación internacional. Además, aprender idiomas mejora la capacidad cognitiva. Aunque la tecnología ofrece traducción automática, hablar directamente es más auténtico. En conclusión, aprender idiomas es una inversión valiosa., c) Las redes sociales tienen aspectos positivos y negativos. Por un lado, nos permiten estar conectados con amigos y familia. Además, son una fuente de información. Sin embargo, pueden causar adicción y problemas de salud mental. En conclusión, debemos usarlas con moderación., d) En mi opinión, es importante preservar las tradiciones. En primer lugar, las tradiciones nos conectan con nuestra historia. Además, forman parte de nuestra identidad cultural. Sin embargo, también debemos estar abiertos al cambio. Por lo tanto, lo ideal es encontrar un equilibrio entre tradición y modernidad.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-2-tip-1', type: 'tip', content: `**Skrivetips:** Les teksten din høyt for å sjekke flyten. Bruk konnektorer for å binde sammen avsnitt og argumenter.` },
    { id: 'spansk-2-10-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Skriftlig argumentasjon**

- **Struktur:** Introducción → Desarrollo → Conclusión
- **Ordne:** En primer lugar, En segundo lugar, Por último
- **Tillegg:** Además, También
- **Motsetning:** Sin embargo, Por otro lado, Aunque
- **Konklusjon:** Por lo tanto, En conclusión` },
  ],
  exercises: [],
};

// 10.3 Presentaciones orales
export const CHAPTER_SPANSK_2_10_3: TextbookChapter = {
  id: 'spansk-2-10-3',
  courseId: 'spansk-2',
  chapterNumber: '10.3',
  title: 'Presentaciones orales',
  subtitle: 'Muntlige presentasjoner',
  description: 'Lær å strukturere og holde muntlige presentasjoner på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['holde muntlige presentasjoner', 'bruke presentasjonsfraser'],
  content: [
    { id: 'spansk-2-10-3-intro', type: 'text', content: `## Presentaciones orales

Muntlige presentasjoner er en viktig del av spanskfaget. Å ha en klar **struktur** og gode **fraser** gjør presentasjonen din profesjonell og overbevisende.` },
    { id: 'spansk-2-10-3-def-1', type: 'definition', title: 'Muntlig presentasjon (presentación oral)', content: `**Struktur for muntlig presentasjon:**

1. **Saludo:** Hils og presenter deg
2. **Introducción:** Presenter temaet
3. **Desarrollo:** Hoveddelen
4. **Conclusión:** Oppsummering
5. **Preguntas:** Spørsmål fra publikum

**Nyttige fraser:**

| Fase | Frase |
|------|-------|
| Åpning | Buenos días, me llamo... Hoy voy a hablar sobre... |
| Tema | El tema de mi presentación es... |
| Struktur | Primero voy a hablar de... Después... |
| Eksempel | Por ejemplo... Un ejemplo de esto es... |
| Overgang | Ahora pasemos a... Otro punto importante es... |
| Avslutning | En resumen... Para finalizar... |
| Spørsmål | ¿Tienen alguna pregunta? |` },
    { id: 'spansk-2-10-3-text-1', type: 'text', content: `## Tips for god presentasjon

**Forberedelse:**
- Skriv stikkord, ikke hele setninger
- Øv foran speil eller venner
- Planlegg tidsbruken
- Forbered deg på spørsmål

**Framføring:**
- Snakk tydelig og ikke for fort
- Ha øyekontakt med publikum
- Bruk kroppsspråk
- Varier stemmen

**Vanlige feil:**
- ❌ Lese opp fra manus
- ❌ Snakke for fort
- ❌ Unngå øyekontakt
- ✅ Bruke stikkord
- ✅ Se på publikum
- ✅ Ta pauser` },
    { id: 'spansk-2-10-3-text-2', type: 'text', content: `## Eksempel: Mini-presentasjon

*Buenos días a todos. Me llamo Ana y hoy voy a hablar sobre las fiestas españolas.*

*Primero, voy a presentar las fiestas más importantes de España. Después, voy a comparar una fiesta española con una noruega.*

*En primer lugar, una de las fiestas más famosas es la Semana Santa, que se celebra antes de Pascua. Por ejemplo, en Sevilla hay procesiones impresionantes.*

*Para finalizar, podemos ver que tanto España como Noruega tienen tradiciones importantes. ¿Tienen alguna pregunta?*` },
    { id: 'spansk-2-10-3-example-1', type: 'example', title: 'Eksempel: Åpning', problem: `Skriv en åpning for en presentasjon om Mexico.`, solution: `*Buenos días. Me llamo (navn) y hoy voy a hablar sobre México. El tema de mi presentación es la cultura mexicana.*` },
    { id: 'spansk-2-10-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-10-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match fase med frase:', subTasks: [
        { label: 'a', task: 'Åpning', solution: 'Buenos días, me llamo... Hoy voy a hablar sobre...', answer: 'Buenos días, me llamo... Hoy voy a hablar sobre...' },
        { label: 'b', task: 'Struktur', solution: 'Primero voy a hablar de... Después...', answer: 'Primero voy a hablar de... Después...' },
        { label: 'c', task: 'Overgang', solution: 'Ahora pasemos a... Otro punto importante es...', answer: 'Ahora pasemos a... Otro punto importante es...' },
        { label: 'd', task: 'Avslutning', solution: 'En resumen... Para finalizar...', answer: 'En resumen... Para finalizar...' },
      ], solution: 'a) Buenos días, me llamo... Hoy voy a hablar sobre..., b) Primero voy a hablar de... Después..., c) Ahora pasemos a... Otro punto importante es..., d) En resumen... Para finalizar...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-10-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig frase:', subTasks: [
        { label: 'a', task: '___, me llamo Pedro. (God dag)', solution: 'Buenos días', answer: 'Buenos días' },
        { label: 'b', task: '___ de mi presentación es la música. (Temaet)', solution: 'El tema', answer: 'El tema' },
        { label: 'c', task: '___ voy a hablar de la historia. (Først)', solution: 'Primero', answer: 'Primero' },
        { label: 'd', task: '___ alguna pregunta? (Har dere)', solution: '¿Tienen', answer: '¿Tienen' },
      ], solution: 'a) Buenos días, b) El tema, c) Primero, d) ¿Tienen', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-3-example-2', type: 'example', title: 'Eksempel: Overgang', problem: `Lag en overgang mellom to temaer: mat → musikk.`, solution: `*Ahora pasemos a otro tema interesante: la música mexicana.* / *Otro punto importante es la música.*` },
    { id: 'spansk-2-10-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-10-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv presentasjonsdeler:', subTasks: [
        { label: 'a', task: 'Åpning for en presentasjon om spansk mat', solution: 'Buenos días a todos. Me llamo... y hoy voy a hablar sobre la comida española.', answer: 'Buenos días a todos. Me llamo... y hoy voy a hablar sobre la comida española.' },
        { label: 'b', task: 'Strukturoversikt med tre punkter', solution: 'Primero, voy a hablar de los platos típicos. Después, voy a explicar los horarios de comida. Por último, voy a comparar con la comida noruega.', answer: 'Primero, voy a hablar de los platos típicos. Después, voy a explicar los horarios de comida. Por último, voy a comparar con la comida noruega.' },
        { label: 'c', task: 'En overgang fra historie til kultur', solution: 'Ahora pasemos a otro aspecto interesante: la cultura española.', answer: 'Ahora pasemos a otro aspecto interesante: la cultura española.' },
        { label: 'd', task: 'Avslutning med oppsummering', solution: 'En resumen, hemos visto que la comida española es variada y deliciosa. ¿Tienen alguna pregunta?', answer: 'En resumen, hemos visto que la comida española es variada y deliciosa. ¿Tienen alguna pregunta?' },
      ], solution: 'a) Buenos días a todos. Me llamo... y hoy voy a hablar sobre la comida española., b) Primero, voy a hablar de los platos típicos. Después, voy a explicar los horarios de comida. Por último, voy a comparar con la comida noruega., c) Ahora pasemos a otro aspecto interesante: la cultura española., d) En resumen, hemos visto que la comida española es variada y deliciosa. ¿Tienen alguna pregunta?', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-10-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en komplett mini-presentasjon (6-8 setninger):', subTasks: [
        { label: 'a', task: 'Tema: Din favorittby i den spansktalende verden', solution: 'Buenos días. Hoy voy a hablar sobre Barcelona. Primero, voy a describir la ciudad. Barcelona está en Cataluña, en el noreste de España. Es famosa por la arquitectura de Gaudí, como la Sagrada Familia. Además, tiene playas bonitas y una vida cultural muy rica. En conclusión, Barcelona es una ciudad fascinante que combina historia, arte y naturaleza. ¿Tienen alguna pregunta?', answer: 'Buenos días. Hoy voy a hablar sobre Barcelona. Primero, voy a describir la ciudad. Barcelona está en Cataluña, en el noreste de España. Es famosa por la arquitectura de Gaudí, como la Sagrada Familia. Además, tiene playas bonitas y una vida cultural muy rica. En conclusión, Barcelona es una ciudad fascinante que combina historia, arte y naturaleza. ¿Tienen alguna pregunta?' },
        { label: 'b', task: 'Tema: En spansktalende tradisjon', solution: 'Buenos días a todos. El tema de mi presentación es el Día de los Muertos en México. Esta tradición se celebra el 1 y 2 de noviembre. Las familias crean altares con flores, comida y fotos de sus seres queridos. A diferencia de otras tradiciones similares, es una celebración alegre. En resumen, el Día de los Muertos es una tradición única que celebra la vida. ¿Alguna pregunta?', answer: 'Buenos días a todos. El tema de mi presentación es el Día de los Muertos en México. Esta tradición se celebra el 1 y 2 de noviembre. Las familias crean altares con flores, comida y fotos de sus seres queridos. A diferencia de otras tradiciones similares, es una celebración alegre. En resumen, el Día de los Muertos es una tradición única que celebra la vida. ¿Alguna pregunta?' },
        { label: 'c', task: 'Tema: Hvorfor du lærer spansk', solution: 'Buenos días. Me llamo... y hoy voy a explicar por qué estoy aprendiendo español. En primer lugar, el español es uno de los idiomas más hablados del mundo. Además, me interesa la cultura hispana, especialmente la música y la comida. También me gustaría viajar a Latinoamérica en el futuro. En conclusión, aprender español me abre muchas puertas. ¿Tienen alguna pregunta?', answer: 'Buenos días. Me llamo... y hoy voy a explicar por qué estoy aprendiendo español. En primer lugar, el español es uno de los idiomas más hablados del mundo. Además, me interesa la cultura hispana, especialmente la música y la comida. También me gustaría viajar a Latinoamérica en el futuro. En conclusión, aprender español me abre muchas puertas. ¿Tienen alguna pregunta?' },
        { label: 'd', task: 'Tema: Sammenligning mellom Norge og et spansktalende land', solution: 'Buenos días. Hoy voy a comparar Noruega con España. Primero, voy a hablar del clima: en Noruega hace mucho frío, mientras que en España hace calor. Después, los horarios son muy diferentes: los españoles comen y cenan más tarde. Sin embargo, ambos países valoran la educación y la democracia. En conclusión, aunque son muy diferentes, Noruega y España tienen mucho en común. ¿Alguna pregunta?', answer: 'Buenos días. Hoy voy a comparar Noruega con España. Primero, voy a hablar del clima: en Noruega hace mucho frío, mientras que en España hace calor. Después, los horarios son muy diferentes: los españoles comen y cenan más tarde. Sin embargo, ambos países valoran la educación y la democracia. En conclusión, aunque son muy diferentes, Noruega y España tienen mucho en común. ¿Alguna pregunta?' },
      ], solution: 'a) Buenos días. Hoy voy a hablar sobre Barcelona. Primero, voy a describir la ciudad. Barcelona está en Cataluña, en el noreste de España. Es famosa por la arquitectura de Gaudí, como la Sagrada Familia. Además, tiene playas bonitas y una vida cultural muy rica. En conclusión, Barcelona es una ciudad fascinante que combina historia, arte y naturaleza. ¿Tienen alguna pregunta?, b) Buenos días a todos. El tema de mi presentación es el Día de los Muertos en México. Esta tradición se celebra el 1 y 2 de noviembre. Las familias crean altares con flores, comida y fotos de sus seres queridos. A diferencia de otras tradiciones similares, es una celebración alegre. En resumen, el Día de los Muertos es una tradición única que celebra la vida. ¿Alguna pregunta?, c) Buenos días. Me llamo... y hoy voy a explicar por qué estoy aprendiendo español. En primer lugar, el español es uno de los idiomas más hablados del mundo. Además, me interesa la cultura hispana, especialmente la música y la comida. También me gustaría viajar a Latinoamérica en el futuro. En conclusión, aprender español me abre muchas puertas. ¿Tienen alguna pregunta?, d) Buenos días. Hoy voy a comparar Noruega con España. Primero, voy a hablar del clima: en Noruega hace mucho frío, mientras que en España hace calor. Después, los horarios son muy diferentes: los españoles comen y cenan más tarde. Sin embargo, ambos países valoran la educación y la democracia. En conclusión, aunque son muy diferentes, Noruega y España tienen mucho en común. ¿Alguna pregunta?', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-3-tip-1', type: 'tip', content: `**Presentasjonstips:** Øv med en venn eller foran speilet. Jo mer du øver, desto tryggere blir du. Husk: alle er nervøse!` },
    { id: 'spansk-2-10-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Muntlige presentasjoner**

- **Struktur:** Saludo → Introducción → Desarrollo → Conclusión → Preguntas
- **Åpning:** Buenos días, hoy voy a hablar sobre...
- **Overgang:** Ahora pasemos a, Otro punto importante es
- **Avslutning:** En resumen, Para finalizar
- **Tips:** Stikkord, øyekontakt, tydelig tale` },
  ],
  exercises: [],
};

// 10.4 Repaso general nivel 2
export const CHAPTER_SPANSK_2_10_4: TextbookChapter = {
  id: 'spansk-2-10-4',
  courseId: 'spansk-2',
  chapterNumber: '10.4',
  title: 'Repaso general nivel 2',
  subtitle: 'Repetisjon nivå 2',
  description: 'Repeter og oppsummer de viktigste grammatiske og kommunikative temaene fra nivå 2.',
  estimatedMinutes: 45,
  competenceGoals: ['repetere nøkkelgrammatikk fra nivå 2', 'kombinere grammatikk og kommunikasjon'],
  content: [
    { id: 'spansk-2-10-4-intro', type: 'text', content: `## Repaso general nivel 2

I dette siste kapittelet repeterer vi de viktigste temaene fra Spansk nivå 2. Bruk dette som en sjekkliste for å sikre at du mestrer de viktigste ferdighetene.` },
    { id: 'spansk-2-10-4-def-1', type: 'definition', title: 'Oppsummering av nivå 2', content: `**Nøkkelgrammatikk fra Spansk 2:**

| Tema | Eksempel |
|------|----------|
| Pretérito indefinido | Ayer **comí** paella. |
| Pretérito imperfecto | De niño **jugaba** al fútbol. |
| Indefinido vs. imperfecto | **Llovía** cuando **salí**. |
| Futuro simple | Mañana **iré** a España. |
| Condicional | Me **gustaría** viajar. |
| Subjuntivo (intro) | Quiero que **vengas**. |
| Pronombres de objeto | **Se lo** doy. |
| Relativpronomen | El libro **que** leo. |
| Konnektorer | Sin embargo, además, por lo tanto |
| Meningsuttrykk | Creo que, En mi opinión |` },
    { id: 'spansk-2-10-4-text-1', type: 'text', content: `## Grammatikk-sjekkliste

**Verbaltider:**
- ✅ Pretérito indefinido (fullførte handlinger)
- ✅ Pretérito imperfecto (bakgrunn, vaner)
- ✅ Indefinido vs. imperfecto (kombinasjon)
- ✅ Futuro simple (framtid)
- ✅ Condicional (betingelse, høflighet)
- ✅ Subjuntivo (introduksjon)

**Pronomen:**
- ✅ Direkte objektspronomen (lo, la, los, las)
- ✅ Indirekte objektspronomen (me, te, le, nos, les)
- ✅ Doble pronomen (se lo, se la)
- ✅ Relativpronomen (que, quien, donde, lo que)` },
    { id: 'spansk-2-10-4-text-2', type: 'text', content: `## Kommunikasjon-sjekkliste

**Skriftlig:**
- ✅ Argumenterende tekst (introducción, desarrollo, conclusión)
- ✅ Konnektorer (sin embargo, además, por lo tanto)
- ✅ Litterær analyse
- ✅ Historisk refleksjon

**Muntlig:**
- ✅ Uttrykke meninger (creo que, en mi opinión)
- ✅ Enighet/uenighet (estoy de acuerdo/no estoy de acuerdo)
- ✅ Presentasjoner (struktur og fraser)
- ✅ Kultursammenligninger

**Kultur:**
- ✅ Fester og tradisjoner
- ✅ Litteratur (forfattere og sjangre)
- ✅ Historie (Spania og Latin-Amerika)
- ✅ Mangfold i den spansktalende verden` },
    { id: 'spansk-2-10-4-example-1', type: 'example', title: 'Eksempel: Verbaltider', problem: `Bruk riktig tid: "Ayer ___ (ir) al cine. De niño, siempre ___ (ir) con mis padres."`, solution: `Ayer **fui** al cine. (indefinido - fullført). De niño, siempre **iba** con mis padres. (imperfecto - vane).` },
    { id: 'spansk-2-10-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-10-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Velg riktig verbform:', subTasks: [
        { label: 'a', task: 'Ayer ___ (comer) paella. (indefinido)', solution: 'comí', answer: 'comí' },
        { label: 'b', task: 'De niño ___ (jugar) al fútbol. (imperfecto)', solution: 'jugaba', answer: 'jugaba' },
        { label: 'c', task: 'Mañana ___ (ir) a España. (futuro)', solution: 'iré', answer: 'iré' },
        { label: 'd', task: 'Me ___ (gustar) viajar. (condicional)', solution: 'gustaría', answer: 'gustaría' },
      ], solution: 'a) comí, b) jugaba, c) iré, d) gustaría', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-10-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig pronomen eller konnektor:', subTasks: [
        { label: 'a', task: '¿Ves el libro? Sí, ___ veo. (direkte objekt)', solution: 'lo', answer: 'lo' },
        { label: 'b', task: 'Creo ___ el español es bonito. (at)', solution: 'que', answer: 'que' },
        { label: 'c', task: 'Me gusta la música. ___, me gusta bailar. (dessuten)', solution: 'Además', answer: 'Además' },
        { label: 'd', task: 'No estoy de ___. (enig)', solution: 'acuerdo', answer: 'acuerdo' },
      ], solution: 'a) lo, b) que, c) Además, d) acuerdo', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-4-example-2', type: 'example', title: 'Eksempel: Pronomen', problem: `Erstatt objektene: "Doy el libro a María."`, solution: `**Se lo doy.** (le → se foran lo, el libro → lo)` },
    { id: 'spansk-2-10-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-10-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Kombiner grammatikk og innhold - skriv setninger:', subTasks: [
        { label: 'a', task: 'Bruk indefinido + imperfecto i samme setning.', solution: 'Cuando era niño, mi familia viajó a España. / Llovía cuando salí de casa.', answer: 'Cuando era niño, mi familia viajó a España. / Llovía cuando salí de casa.' },
        { label: 'b', task: 'Bruk konnektor + mening om en spansktalende tradisjon.', solution: 'Creo que el Día de los Muertos es una tradición fascinante. Además, muestra cómo los mexicanos celebran la vida.', answer: 'Creo que el Día de los Muertos es una tradición fascinante. Además, muestra cómo los mexicanos celebran la vida.' },
        { label: 'c', task: 'Bruk doble pronomen i en setning.', solution: 'Mi madre me compró un libro. Me lo dio ayer. / ¿Puedes darme el bolígrafo? → ¿Puedes dármelo?', answer: 'Mi madre me compró un libro. Me lo dio ayer. / ¿Puedes darme el bolígrafo? → ¿Puedes dármelo?' },
        { label: 'd', task: 'Bruk relativpronomen + konnektor.', solution: 'El libro que leí fue interesante. Sin embargo, el final fue un poco aburrido.', answer: 'El libro que leí fue interesante. Sin embargo, el final fue un poco aburrido.' },
      ], solution: 'a) Cuando era niño, mi familia viajó a España. / Llovía cuando salí de casa., b) Creo que el Día de los Muertos es una tradición fascinante. Además, muestra cómo los mexicanos celebran la vida., c) Mi madre me compró un libro. Me lo dio ayer. / ¿Puedes darme el bolígrafo? → ¿Puedes dármelo?, d) El libro que leí fue interesante. Sin embargo, el final fue un poco aburrido.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-10-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort tekst (5-6 setninger) som kombinerer flere grammatiske temaer:', subTasks: [
        { label: 'a', task: 'Tema: Din erfaring med å lære spansk (bruk fortid, pronomen, meninger)', solution: 'Empecé a estudiar español hace dos años. Cuando era principiante, me parecía muy difícil. Sin embargo, ahora lo entiendo mucho mejor. Creo que es un idioma bonito y útil. Mi profesor me lo enseña con paciencia. En conclusión, estoy contento/a de haber elegido el español.', answer: 'Empecé a estudiar español hace dos años. Cuando era principiante, me parecía muy difícil. Sin embargo, ahora lo entiendo mucho mejor. Creo que es un idioma bonito y útil. Mi profesor me lo enseña con paciencia. En conclusión, estoy contento/a de haber elegido el español.' },
        { label: 'b', task: 'Tema: En reise til et spansktalende land (bruk indefinido, imperfecto, konnektorer)', solution: 'El verano pasado viajé a Barcelona con mi familia. Hacía mucho calor y el sol brillaba todos los días. Visitamos la Sagrada Familia, que me pareció impresionante. Además, probamos la paella, y nos la sirvieron en un restaurante junto al mar. Sin embargo, lo que más me gustó fue pasear por las Ramblas. En resumen, fue un viaje inolvidable.', answer: 'El verano pasado viajé a Barcelona con mi familia. Hacía mucho calor y el sol brillaba todos los días. Visitamos la Sagrada Familia, que me pareció impresionante. Además, probamos la paella, y nos la sirvieron en un restaurante junto al mar. Sin embargo, lo que más me gustó fue pasear por las Ramblas. En resumen, fue un viaje inolvidable.' },
        { label: 'c', task: 'Tema: Sammenligning av kulturer (bruk konnektorer, meningsuttrykk, kulturkunnskap)', solution: 'En mi opinión, tanto España como Noruega son países interesantes. Sin embargo, hay grandes diferencias culturales. Por ejemplo, los españoles cenan mucho más tarde que los noruegos. Además, la vida social en España se desarrolla más en la calle. Creo que podemos aprender mucho de ambas culturas. En conclusión, la diversidad cultural nos enriquece a todos.', answer: 'En mi opinión, tanto España como Noruega son países interesantes. Sin embargo, hay grandes diferencias culturales. Por ejemplo, los españoles cenan mucho más tarde que los noruegos. Además, la vida social en España se desarrolla más en la calle. Creo que podemos aprender mucho de ambas culturas. En conclusión, la diversidad cultural nos enriquece a todos.' },
        { label: 'd', task: 'Tema: Oppsummering av hva du har lært i Spansk 2 (bruk variert grammatikk)', solution: 'Durante este curso he aprendido mucho. Cuando empecé, no sabía usar el pretérito. Ahora puedo escribir textos argumentativos con conectores como sin embargo y además. También he conocido la literatura y la historia hispana. Lo que más me ha gustado es aprender sobre las culturas latinoamericanas. En conclusión, creo que el español me será muy útil en el futuro.', answer: 'Durante este curso he aprendido mucho. Cuando empecé, no sabía usar el pretérito. Ahora puedo escribir textos argumentativos con conectores como sin embargo y además. También he conocido la literatura y la historia hispana. Lo que más me ha gustado es aprender sobre las culturas latinoamericanas. En conclusión, creo que el español me será muy útil en el futuro.' },
      ], solution: 'a) Empecé a estudiar español hace dos años. Cuando era principiante, me parecía muy difícil. Sin embargo, ahora lo entiendo mucho mejor. Creo que es un idioma bonito y útil. Mi profesor me lo enseña con paciencia. En conclusión, estoy contento/a de haber elegido el español., b) El verano pasado viajé a Barcelona con mi familia. Hacía mucho calor y el sol brillaba todos los días. Visitamos la Sagrada Familia, que me pareció impresionante. Además, probamos la paella, y nos la sirvieron en un restaurante junto al mar. Sin embargo, lo que más me gustó fue pasear por las Ramblas. En resumen, fue un viaje inolvidable., c) En mi opinión, tanto España como Noruega son países interesantes. Sin embargo, hay grandes diferencias culturales. Por ejemplo, los españoles cenan mucho más tarde que los noruegos. Además, la vida social en España se desarrolla más en la calle. Creo que podemos aprender mucho de ambas culturas. En conclusión, la diversidad cultural nos enriquece a todos., d) Durante este curso he aprendido mucho. Cuando empecé, no sabía usar el pretérito. Ahora puedo escribir textos argumentativos con conectores como sin embargo y además. También he conocido la literatura y la historia hispana. Lo que más me ha gustado es aprender sobre las culturas latinoamericanas. En conclusión, creo que el español me será muy útil en el futuro.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-10-4-tip-1', type: 'tip', content: `**Lykke til videre!** Du har nå et solid grunnlag i spansk. Fortsett å lese, lytte og snakke spansk så mye som mulig.` },
    { id: 'spansk-2-10-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Nivå 2 komplett**

- **Grammatikk:** Indefinido, imperfecto, futuro, condicional, subjuntivo, pronomen
- **Kommunikasjon:** Meninger, argumentasjon, presentasjoner
- **Kultur:** Fester, litteratur, historie, mangfold
- **Ferdigheter:** Lese, skrive, lytte, snakke
- **Neste steg:** Spansk nivå 3!` },
  ],
  exercises: [],
};

export const SPANSK_2_CHAPTERS_9_10: TextbookChapter[] = [
  CHAPTER_SPANSK_2_9_1,
  CHAPTER_SPANSK_2_9_2,
  CHAPTER_SPANSK_2_9_3,
  CHAPTER_SPANSK_2_9_4,
  CHAPTER_SPANSK_2_10_1,
  CHAPTER_SPANSK_2_10_2,
  CHAPTER_SPANSK_2_10_3,
  CHAPTER_SPANSK_2_10_4,
];
