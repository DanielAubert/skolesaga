/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 3 - Kapittel 11-13 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 11: MEDIO AMBIENTE Y SOSTENIBILIDAD (11.1-11.4)
 * - Kapittel 12: MEDIOS Y COMUNICACIÓN DIGITAL (12.1-12.4)
 * - Kapittel 13: HISTORIA DEL MUNDO HISPANO (13.1-13.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11: MEDIO AMBIENTE Y SOSTENIBILIDAD
// ============================================================================

// 11.1 El cambio climático
export const CHAPTER_SPANSK_3_11_1: TextbookChapter = {
  id: 'spansk-3-11-1',
  courseId: 'spansk-3',
  chapterNumber: '11.1',
  title: 'El cambio climático',
  subtitle: 'Klimaendringer og spansktalende verden',
  description: 'Lær ordforråd knyttet til klimaendringer, og diskuter klimatiltak i spansktalende land.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke miljørelatert vokabular på spansk', 'diskutere klimaendringer og konsekvenser i den spansktalende verden'],
  content: [
    { id: 'spansk-3-11-1-intro', type: 'text', content: `## El cambio climático

Klimaendringer er en av vår tids største utfordringer, og den spansktalende verden er spesielt utsatt. Fra smeltende isbreer i Andesfjellene til tørke i Spania og orkaner i Karibia – konsekvensene er allerede synlige. I dette kapittelet lærer du å snakke om **klimaendringer** (*el cambio climático*) på spansk og å delta i debatter om klimatiltak.` },
    { id: 'spansk-3-11-1-def-1', type: 'definition', title: 'Klimavokabular (vocabulario del clima)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| el cambio climático | klimaendringer |
| el calentamiento global | global oppvarming |
| el efecto invernadero | drivhuseffekten |
| las emisiones de CO₂ | CO₂-utslipp |
| la sequía | tørke |
| la inundación | flom |
| el deshielo | issmelting |
| el nivel del mar | havnivået |
| la huella de carbono | karbonfotavtrykk |
| los combustibles fósiles | fossilt brensel |
| el acuerdo climático | klimaavtale |
| la sostenibilidad | bærekraft |` },
    { id: 'spansk-3-11-1-text-1', type: 'text', content: `## Klimaendringer i den spansktalende verden

Latin-Amerika og Spania merker klimaendringene på ulike måter:

**Andesfjellene:**
- Isbreene (*los glaciares*) smelter i rekordfart
- Bolivia, Peru og Colombia mister viktige vannkilder
- Urfolkssamfunn mister tradisjonelle levemåter

**Spania:**
- Økende tørke (*sequía*) i sør og sentrale deler
- Ørkenen sprer seg (*la desertificación*)
- Skogbranner blir hyppigere og mer intense

**Karibia og Mellom-Amerika:**
- Sterkere orkaner (*huracanes*) truer kystsamfunn
- Stigende havnivå truer øystater
- Korallrev ødelegges av varmere hav

*"El cambio climático no es un problema del futuro, es una realidad del presente."*
(Klimaendringer er ikke et fremtidsproblem, det er en nåtidig virkelighet.)` },
    { id: 'spansk-3-11-1-text-2', type: 'text', content: `## Klimadebatt på spansk

For å delta i debatter om klimatiltak trenger du nyttige uttrykk:

**Å uttrykke bekymring:**
- *Me preocupa que...* (Det bekymrer meg at...)
- *Es alarmante que...* (Det er alarmerende at...)
- *Si no actuamos ahora...* (Hvis vi ikke handler nå...)

**Å foreslå tiltak:**
- *Es necesario que reduzcamos...* (Det er nødvendig at vi reduserer...)
- *Deberíamos invertir en...* (Vi burde investere i...)
- *Propongo que...* (Jeg foreslår at...)

**Å argumentere:**
- *Por un lado... por otro lado...* (På den ene siden... på den andre siden...)
- *Según los científicos...* (Ifølge forskerne...)
- *Los datos muestran que...* (Dataene viser at...)

Legg merke til bruken av **subjuntivo** etter uttrykk som *es necesario que* og *propongo que*.` },
    { id: 'spansk-3-11-1-example-1', type: 'example', title: 'Eksempel: Klimaargument', problem: `Skriv et kort argument for klimatiltak med bruk av subjuntivo.`, solution: `*Es necesario que los gobiernos reduzcan las emisiones de CO₂ inmediatamente. Si no actuamos ahora, las consecuencias serán irreversibles. Propongo que invirtamos más en energías renovables y que protejamos los ecosistemas vulnerables.* (Det er nødvendig at myndighetene reduserer CO₂-utslippene umiddelbart. Hvis vi ikke handler nå, vil konsekvensene bli irreversible. Jeg foreslår at vi investerer mer i fornybar energi og at vi beskytter sårbare økosystemer.)` },
    { id: 'spansk-3-11-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-11-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'el calentamiento global', solution: 'global oppvarming', answer: 'global oppvarming' },
        { label: 'b', task: 'la sequía', solution: 'tørke', answer: 'tørke' },
        { label: 'c', task: 'la huella de carbono', solution: 'karbonfotavtrykk', answer: 'karbonfotavtrykk' },
        { label: 'd', task: 'los combustibles fósiles', solution: 'fossilt brensel', answer: 'fossilt brensel' },
      ], solution: 'a) global oppvarming, b) tørke, c) karbonfotavtrykk, d) fossilt brensel', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-11-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig ord:', subTasks: [
        { label: 'a', task: 'Smeltingen av isbreer kalles el ___', solution: 'deshielo', answer: 'deshielo' },
        { label: 'b', task: 'Gasser som varmer opp atmosfæren skaper el efecto ___', solution: 'invernadero', answer: 'invernadero' },
        { label: 'c', task: 'Havnivået stiger: sube el ___ del mar', solution: 'nivel', answer: 'nivel' },
        { label: 'd', task: 'En internasjonal klimaavtale er un ___ climático', solution: 'acuerdo', answer: 'acuerdo' },
      ], solution: 'a) deshielo, b) invernadero, c) nivel, d) acuerdo', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-11-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om klimaendringer:', subTasks: [
        { label: 'a', task: 'Hvordan påvirker klimaendringer Andesfjellene?', solution: 'Los glaciares de los Andes se están derritiendo rápidamente, lo que amenaza las fuentes de agua de millones de personas en Bolivia, Perú y Colombia.', answer: 'Los glaciares de los Andes se están derritiendo rápidamente, lo que amenaza las fuentes de agua de millones de personas en Bolivia, Perú y Colombia.' },
        { label: 'b', task: 'Hvilke klimaproblemer har Spania?', solution: 'España sufre sequías cada vez más frecuentes, desertificación en el sur y un aumento de los incendios forestales.', answer: 'España sufre sequías cada vez más frecuentes, desertificación en el sur y un aumento de los incendios forestales.' },
        { label: 'c', task: 'Hva betyr sostenibilidad?', solution: 'La sostenibilidad significa satisfacer las necesidades del presente sin comprometer las de las generaciones futuras.', answer: 'La sostenibilidad significa satisfacer las necesidades del presente sin comprometer las de las generaciones futuras.' },
        { label: 'd', task: 'Hvorfor brukes subjuntivo i klimadebatter?', solution: 'Porque se usan expresiones de necesidad y propuestas como «es necesario que» y «propongo que», que requieren el subjuntivo.', answer: 'Porque se usan expresiones de necesidad y propuestas como «es necesario que» y «propongo que», que requieren el subjuntivo.' },
      ], solution: 'a) Los glaciares de los Andes se están derritiendo rápidamente, lo que amenaza las fuentes de agua de millones de personas en Bolivia, Perú y Colombia., b) España sufre sequías cada vez más frecuentes, desertificación en el sur y un aumento de los incendios forestales., c) La sostenibilidad significa satisfacer las necesidades del presente sin comprometer las de las generaciones futuras., d) Porque se usan expresiones de necesidad y propuestas como «es necesario que» y «propongo que», que requieren el subjuntivo.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-11-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv argumenterende tekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Argumenter for at rike land bør hjelpe fattigere land med klimatilpasning.', solution: 'Los países ricos tienen una responsabilidad histórica porque han emitido la mayor parte de los gases de efecto invernadero. Es justo que financien la adaptación climática en países vulnerables que sufren las consecuencias sin haber causado el problema.', answer: 'Los países ricos tienen una responsabilidad histórica porque han emitido la mayor parte de los gases de efecto invernadero. Es justo que financien la adaptación climática en países vulnerables que sufren las consecuencias sin haber causado el problema.' },
        { label: 'b', task: 'Diskuter om individuelle tiltak er nok mot klimaendringer.', solution: 'Aunque las acciones individuales como reciclar y reducir el consumo son importantes, no son suficientes. Es necesario que los gobiernos implementen políticas estructurales y que las empresas cambien sus modelos de producción.', answer: 'Aunque las acciones individuales como reciclar y reducir el consumo son importantes, no son suficientes. Es necesario que los gobiernos implementen políticas estructurales y que las empresas cambien sus modelos de producción.' },
        { label: 'c', task: 'Sammenlign klimautfordringene i Spania og Norge.', solution: 'España enfrenta sequías y desertificación, mientras que Noruega experimenta un aumento de temperaturas en el Ártico. Ambos países deben reducir su dependencia de los combustibles fósiles, aunque Noruega como productor de petróleo tiene un dilema especial.', answer: 'España enfrenta sequías y desertificación, mientras que Noruega experimenta un aumento de temperaturas en el Ártico. Ambos países deben reducir su dependencia de los combustibles fósiles, aunque Noruega como productor de petróleo tiene un dilema especial.' },
        { label: 'd', task: 'Skriv en appell til verdens ledere om klimahandling.', solution: 'Estimados líderes mundiales: les pedimos que actúen con urgencia ante la crisis climática. Es imprescindible que se cumplan los acuerdos de París y que se inviertan recursos en energías limpias. El futuro de nuestro planeta depende de las decisiones que tomen hoy.', answer: 'Estimados líderes mundiales: les pedimos que actúen con urgencia ante la crisis climática. Es imprescindible que se cumplan los acuerdos de París y que se inviertan recursos en energías limpias. El futuro de nuestro planeta depende de las decisiones que tomen hoy.' },
      ], solution: 'a) Los países ricos tienen una responsabilidad histórica porque han emitido la mayor parte de los gases de efecto invernadero. Es justo que financien la adaptación climática en países vulnerables., b) Aunque las acciones individuales son importantes, no son suficientes. Es necesario que los gobiernos implementen políticas estructurales., c) España enfrenta sequías y desertificación, mientras que Noruega experimenta un aumento de temperaturas en el Ártico., d) Estimados líderes mundiales: les pedimos que actúen con urgencia ante la crisis climática.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-1-tip-1', type: 'tip', content: `**Husk:** Klimadebatten er en utmerket arena for å øve på subjuntivo. Uttrykk som *es necesario que*, *es urgente que* og *propongo que* krever alle subjuntivo.` },
    { id: 'spansk-3-11-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Klimaendringer**

- **Nøkkelord:** cambio climático, calentamiento global, efecto invernadero, sostenibilidad
- **Regioner:** Andes (issmelting), Spania (tørke), Karibia (orkaner)
- **Debattuttrykk:** Es necesario que..., Propongo que..., Según los científicos...
- **Grammatikk:** Subjuntivo etter uttrykk for nødvendighet og forslag` },
  ],
  exercises: [],
};

// 11.2 Energías renovables
export const CHAPTER_SPANSK_3_11_2: TextbookChapter = {
  id: 'spansk-3-11-2',
  courseId: 'spansk-3',
  chapterNumber: '11.2',
  title: 'Energías renovables',
  subtitle: 'Fornybar energi i den spansktalende verden',
  description: 'Utforsk fornybar energi med fokus på solenergi i Spania og vindkraft i Latin-Amerika.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke vokabular om energi og bærekraft', 'sammenligne energiløsninger i ulike spansktalende land'],
  content: [
    { id: 'spansk-3-11-2-intro', type: 'text', content: `## Energías renovables

Fornybar energi (*las energías renovables*) spiller en stadig viktigere rolle i den spansktalende verden. Spania er en global leder innen **solenergi** (*energía solar*), og flere latinamerikanske land satser stort på **vindkraft** (*energía eólica*). I dette kapittelet utforsker vi hvordan disse landene jobber mot en grønnere fremtid.` },
    { id: 'spansk-3-11-2-def-1', type: 'definition', title: 'Energivokabular (vocabulario de energía)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la energía renovable | fornybar energi |
| la energía solar | solenergi |
| la energía eólica | vindkraft |
| la energía hidroeléctrica | vannkraft |
| los paneles solares | solcellepaneler |
| los molinos de viento | vindmøller |
| el parque eólico | vindpark |
| la planta solar | solkraftverk |
| la red eléctrica | strømnett |
| la transición energética | energiomstilling |
| las emisiones cero | nullutslipp |
| el desarrollo sostenible | bærekraftig utvikling |` },
    { id: 'spansk-3-11-2-text-1', type: 'text', content: `## Solenergi i Spania

Spania er et av Europas mest solrike land, og har utnyttet dette til å bli en **verdensleder** innen solenergi:

- **Planta Solar de Almería:** Et av verdens største solforskningssentre i Andalucía
- **Gemasolar (Sevilla):** Verdens første kommersielle solkraftverk som leverer strøm 24 timer i døgnet
- I 2023 kom over **15 % av Spanias elektrisitet** fra solenergi
- Regjeringen har satt mål om **74 % fornybar energi** innen 2030

**Vindkraft i Latin-Amerika:**
- **Mexico:** Store vindparker i Oaxaca (Istmo de Tehuantepec)
- **Chile:** Satser på sol- og vindkraft i Atacamaørkenen
- **Uruguay:** Over 40 % av energien kommer fra vindkraft
- **Costa Rica:** Har gått flere måneder med 100 % fornybar energi

*"España demuestra que la energía solar no es el futuro, sino el presente."*` },
    { id: 'spansk-3-11-2-text-2', type: 'text', content: `## Å diskutere energiløsninger

Nyttige uttrykk for å sammenligne og vurdere energikilder:

**Fordeler (*ventajas*):**
- *La energía solar es inagotable.* (Solenergi er uuttømmelig.)
- *No produce emisiones contaminantes.* (Den produserer ikke forurensende utslipp.)
- *Genera empleo local.* (Den skaper lokale arbeidsplasser.)

**Ulemper (*desventajas*):**
- *Depende de las condiciones meteorológicas.* (Den er avhengig av værforholdene.)
- *Requiere una inversión inicial alta.* (Den krever en høy startinvestering.)
- *Puede afectar el paisaje.* (Den kan påvirke landskapet.)

**Sammenligningsuttrykk:**
- *En comparación con...* (Sammenlignet med...)
- *A diferencia de...* (I motsetning til...)
- *Tanto... como...* (Både... og...)
- *Mientras que España apuesta por la solar, Uruguay destaca en eólica.* (Mens Spania satser på sol, utmerker Uruguay seg på vind.)` },
    { id: 'spansk-3-11-2-example-1', type: 'example', title: 'Eksempel: Sammenligning av energikilder', problem: `Sammenlign solenergi og vindkraft på spansk.`, solution: `*Tanto la energía solar como la eólica son renovables y no producen emisiones contaminantes. Sin embargo, mientras que la solar depende de la radiación del sol, la eólica necesita viento constante. En España, la energía solar tiene más potencial debido al clima soleado, mientras que en Uruguay, las condiciones geográficas favorecen la energía eólica.*` },
    { id: 'spansk-3-11-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-11-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'la energía eólica', solution: 'vindkraft', answer: 'vindkraft' },
        { label: 'b', task: 'los paneles solares', solution: 'solcellepaneler', answer: 'solcellepaneler' },
        { label: 'c', task: 'la transición energética', solution: 'energiomstilling', answer: 'energiomstilling' },
        { label: 'd', task: 'el desarrollo sostenible', solution: 'bærekraftig utvikling', answer: 'bærekraftig utvikling' },
      ], solution: 'a) vindkraft, b) solcellepaneler, c) energiomstilling, d) bærekraftig utvikling', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-11-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant? Svar med verdadero eller falso:', subTasks: [
        { label: 'a', task: 'España es líder mundial en energía eólica.', solution: 'Falso – España es líder en energía solar.', answer: 'Falso – España es líder en energía solar.' },
        { label: 'b', task: 'Uruguay genera más del 40 % de su energía con viento.', solution: 'Verdadero – Uruguay es un líder en energía eólica.', answer: 'Verdadero – Uruguay es un líder en energía eólica.' },
        { label: 'c', task: 'Costa Rica ha logrado períodos con 100 % energía renovable.', solution: 'Verdadero – Costa Rica ha alcanzado meses enteros con energía 100 % renovable.', answer: 'Verdadero – Costa Rica ha alcanzado meses enteros con energía 100 % renovable.' },
        { label: 'd', task: 'La energía solar produce muchas emisiones de CO₂.', solution: 'Falso – La energía solar no produce emisiones contaminantes directas.', answer: 'Falso – La energía solar no produce emisiones contaminantes directas.' },
      ], solution: 'a) Falso – España es líder en energía solar., b) Verdadero., c) Verdadero., d) Falso – no produce emisiones contaminantes directas.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-11-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om fornybar energi:', subTasks: [
        { label: 'a', task: 'Hvorfor er Spania godt egnet for solenergi?', solution: 'Porque España tiene un clima muy soleado con muchas horas de sol al año, especialmente en el sur (Andalucía).', answer: 'Porque España tiene un clima muy soleado con muchas horas de sol al año, especialmente en el sur (Andalucía).' },
        { label: 'b', task: 'Nevn to fordeler og to ulemper med fornybar energi.', solution: 'Ventajas: es inagotable y no produce emisiones. Desventajas: depende del clima y requiere una inversión inicial alta.', answer: 'Ventajas: es inagotable y no produce emisiones. Desventajas: depende del clima y requiere una inversión inicial alta.' },
        { label: 'c', task: 'Hva betyr transición energética?', solution: 'Es el proceso de pasar de los combustibles fósiles a las energías renovables para reducir las emisiones y combatir el cambio climático.', answer: 'Es el proceso de pasar de los combustibles fósiles a las energías renovables para reducir las emisiones y combatir el cambio climático.' },
        { label: 'd', task: 'Hvordan kan Norge og Spania samarbeide om fornybar energi?', solution: 'Noruega tiene experiencia en energía hidroeléctrica y eólica marina, mientras España lidera en solar. Pueden intercambiar tecnología y experiencias para acelerar la transición energética.', answer: 'Noruega tiene experiencia en energía hidroeléctrica y eólica marina, mientras España lidera en solar. Pueden intercambiar tecnología y experiencias para acelerar la transición energética.' },
      ], solution: 'a) Porque España tiene un clima muy soleado con muchas horas de sol al año., b) Ventajas: es inagotable y no produce emisiones. Desventajas: depende del clima y requiere inversión alta., c) Es el proceso de pasar de combustibles fósiles a energías renovables., d) Pueden intercambiar tecnología y experiencias.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-11-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv sammenlignings- og argumentasjonstekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Sammenlign Spanias og Uruguays energistrategi.', solution: 'España ha apostado fuertemente por la energía solar gracias a su clima soleado, mientras que Uruguay ha desarrollado su potencial eólico hasta cubrir más del 40 % de su demanda eléctrica. Ambos países demuestran que la transición energética es posible con voluntad política.', answer: 'España ha apostado fuertemente por la energía solar gracias a su clima soleado, mientras que Uruguay ha desarrollado su potencial eólico hasta cubrir más del 40 % de su demanda eléctrica. Ambos países demuestran que la transición energética es posible con voluntad política.' },
        { label: 'b', task: 'Argumenter for at alle land bør investere i fornybar energi.', solution: 'Todos los países deberían invertir en energías renovables porque son la única forma de combatir el cambio climático de manera efectiva. Además, generan empleo, reducen la dependencia de importaciones de petróleo y garantizan un futuro sostenible.', answer: 'Todos los países deberían invertir en energías renovables porque son la única forma de combatir el cambio climático de manera efectiva. Además, generan empleo, reducen la dependencia de importaciones de petróleo y garantizan un futuro sostenible.' },
        { label: 'c', task: 'Diskuter utfordringer med overgang til fornybar energi i fattige land.', solution: 'Para los países en desarrollo, la transición energética presenta desafíos económicos importantes, ya que requiere grandes inversiones iniciales. Sin embargo, a largo plazo, las energías renovables son más baratas y crean empleo local.', answer: 'Para los países en desarrollo, la transición energética presenta desafíos económicos importantes, ya que requiere grandes inversiones iniciales. Sin embargo, a largo plazo, las energías renovables son más baratas y crean empleo local.' },
        { label: 'd', task: 'Skriv en kort presentasjon av Costa Ricas energimodell.', solution: 'Costa Rica es un modelo mundial de sostenibilidad energética. Gracias a sus recursos hidroeléctricos, geotérmicos y eólicos, ha logrado períodos enteros con 100 % de energía renovable. Este pequeño país demuestra que es posible vivir sin combustibles fósiles.', answer: 'Costa Rica es un modelo mundial de sostenibilidad energética. Gracias a sus recursos hidroeléctricos, geotérmicos y eólicos, ha logrado períodos enteros con 100 % de energía renovable. Este pequeño país demuestra que es posible vivir sin combustibles fósiles.' },
      ], solution: 'a) España apuesta por solar, Uruguay por eólica. Ambos demuestran que la transición es posible., b) Las renovables combaten el cambio climático, generan empleo y reducen la dependencia energética., c) Requiere inversiones altas, pero a largo plazo es más barato., d) Costa Rica es modelo mundial con períodos de 100 % renovable.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-2-tip-1', type: 'tip', content: `**Husk:** Når du sammenligner, bruk uttrykk som *en comparación con*, *a diferencia de*, *mientras que* og *tanto... como...*. Dette gir teksten din en mer akademisk stil.` },
    { id: 'spansk-3-11-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Fornybar energi**

- **Nøkkelord:** energía renovable, solar, eólica, transición energética
- **Spania:** Verdensleder i solenergi, mål om 74 % fornybart innen 2030
- **Latin-Amerika:** Uruguay (vindkraft), Costa Rica (100 % fornybart), Chile (sol og vind)
- **Sammenligninger:** Bruk tanto... como..., mientras que, en comparación con` },
  ],
  exercises: [],
};

// 11.3 Biodiversidad y ecosistemas
export const CHAPTER_SPANSK_3_11_3: TextbookChapter = {
  id: 'spansk-3-11-3',
  courseId: 'spansk-3',
  chapterNumber: '11.3',
  title: 'Biodiversidad y ecosistemas',
  subtitle: 'Biologisk mangfold og økosystemer',
  description: 'Lær om biologisk mangfold i den spansktalende verden, med fokus på Amazonas, Galápagos og truede arter.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke vokabular om natur og biologisk mangfold', 'diskutere bevaring av økosystemer i spansktalende land'],
  content: [
    { id: 'spansk-3-11-3-intro', type: 'text', content: `## Biodiversidad y ecosistemas

Latin-Amerika er verdens mest **biologisk mangfoldige** region. Fra **Amazonas' regnskog** til **Galápagosøyene** og **Patagonias stepper** finnes det økosystemer som er unike i verden. Dessverre trues mange av disse av avskoging, forurensning og klimaendringer. I dette kapittelet lærer du å snakke om **biodiversidad** (biologisk mangfold) på spansk.` },
    { id: 'spansk-3-11-3-def-1', type: 'definition', title: 'Naturvokabular (vocabulario de la naturaleza)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la biodiversidad | biologisk mangfold |
| el ecosistema | økosystem |
| la selva tropical | tropisk regnskog |
| la deforestación | avskoging |
| la especie en peligro | truet art |
| la extinción | utryddelse |
| la fauna | dyreliv |
| la flora | planteliv |
| el hábitat | leveområde |
| la reserva natural | naturreservat |
| la conservación | bevaring |
| la contaminación | forurensning |` },
    { id: 'spansk-3-11-3-text-1', type: 'text', content: `## Økosystemer i den spansktalende verden

**Amazonas (la Amazonía):**
- Verdens største regnskog, delt mellom ni land (bl.a. Colombia, Peru, Ecuador, Bolivia)
- Hjem til over **10 % av alle arter på jorden**
- Trues av avskoging for kvegdrift og soyaproduksjon
- Urfolk som yanomami og asháninka kjemper for å beskytte skogen

**Galápagosøyene (las Islas Galápagos):**
- Tilhører Ecuador, 1000 km ut i Stillehavet
- Her utviklet Charles Darwin sin evolusjonsteori
- Unike arter: *la tortuga gigante* (kjempeskilpadde), *la iguana marina* (haviguanen), *el pinzón de Darwin* (Darwins finke)
- UNESCO verdensarv siden 1978

**Andre viktige økosystemer:**
- **Pantanal (Bolivia/Paraguay):** Verdens største våtmark
- **Patagonia (Argentina/Chile):** Stepper, isbreer og unikt dyreliv
- **Arrecifes del Caribe:** Karibiske korallrev med rikt marint liv` },
    { id: 'spansk-3-11-3-text-2', type: 'text', content: `## Trusler og bevaring

**Hovedtrusler (*amenazas principales*):**
- *La deforestación* – avskoging for landbruk og kvegdrift
- *La contaminación* – forurensning av elver og hav
- *El comercio ilegal de especies* – ulovlig handel med dyr og planter
- *El cambio climático* – endringer i temperatur og nedbør
- *La urbanización* – byer som sprer seg inn i naturområder

**Bevaringstiltak (*medidas de conservación*):**
- *Crear reservas naturales* (opprette naturreservater)
- *Proteger a las especies en peligro* (beskytte truede arter)
- *Luchar contra la deforestación* (bekjempe avskoging)
- *Apoyar a las comunidades indígenas* (støtte urfolkssamfunn)
- *Fomentar el ecoturismo* (fremme økoturisme)

*"La biodiversidad no es un lujo, es una necesidad para la supervivencia humana."*
(Biologisk mangfold er ikke en luksus, det er en nødvendighet for menneskets overlevelse.)` },
    { id: 'spansk-3-11-3-example-1', type: 'example', title: 'Eksempel: Beskrivelse av et økosystem', problem: `Beskriv Galápagosøyene på spansk.`, solution: `*Las Islas Galápagos son un archipiélago volcánico situado a 1000 kilómetros de la costa de Ecuador. Son famosas por su biodiversidad única, que inspiró la teoría de la evolución de Charles Darwin. Entre sus especies más conocidas están la tortuga gigante, la iguana marina y los pinzones de Darwin. Desde 1978, son Patrimonio de la Humanidad de la UNESCO.*` },
    { id: 'spansk-3-11-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-11-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'la deforestación', solution: 'avskoging', answer: 'avskoging' },
        { label: 'b', task: 'la especie en peligro', solution: 'truet art', answer: 'truet art' },
        { label: 'c', task: 'la selva tropical', solution: 'tropisk regnskog', answer: 'tropisk regnskog' },
        { label: 'd', task: 'la reserva natural', solution: 'naturreservat', answer: 'naturreservat' },
      ], solution: 'a) avskoging, b) truet art, c) tropisk regnskog, d) naturreservat', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-11-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Koble dyret til riktig sted:', subTasks: [
        { label: 'a', task: 'La tortuga gigante', solution: 'Islas Galápagos', answer: 'Islas Galápagos' },
        { label: 'b', task: 'El jaguar', solution: 'La Amazonía', answer: 'La Amazonía' },
        { label: 'c', task: 'El pingüino de Magallanes', solution: 'Patagonia', answer: 'Patagonia' },
        { label: 'd', task: 'El manatí', solution: 'El Caribe', answer: 'El Caribe' },
      ], solution: 'a) Islas Galápagos, b) La Amazonía, c) Patagonia, d) El Caribe', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-11-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om biologisk mangfold:', subTasks: [
        { label: 'a', task: 'Hvorfor er Amazonas viktig for hele planeten?', solution: 'La Amazonía produce una gran parte del oxígeno del mundo, alberga el 10 % de todas las especies y regula el clima global. Su destrucción tendría consecuencias catastróficas.', answer: 'La Amazonía produce oxígeno, alberga el 10 % de las especies y regula el clima global.' },
        { label: 'b', task: 'Hva truer Galápagosøyenes økosystem?', solution: 'Las Galápagos están amenazadas por el turismo excesivo, las especies invasoras introducidas por humanos y los efectos del cambio climático sobre las corrientes marinas.', answer: 'Turismo excesivo, especies invasoras y cambio climático.' },
        { label: 'c', task: 'Hvilken rolle spiller urfolk i bevaring av naturen?', solution: 'Los pueblos indígenas han protegido los ecosistemas durante siglos con sus conocimientos tradicionales. Son guardianes fundamentales de la biodiversidad.', answer: 'Los pueblos indígenas protegen los ecosistemas con conocimientos tradicionales.' },
        { label: 'd', task: 'Hva er forskjellen mellom fauna og flora?', solution: 'La fauna se refiere al conjunto de animales de una región, mientras que la flora se refiere al conjunto de plantas. Juntas forman la biodiversidad de un ecosistema.', answer: 'Fauna = animales, flora = plantas.' },
      ], solution: 'a) La Amazonía produce oxígeno, alberga el 10 % de las especies y regula el clima., b) Turismo excesivo, especies invasoras y cambio climático., c) Los pueblos indígenas protegen los ecosistemas con conocimientos tradicionales., d) Fauna = animales, flora = plantas.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-11-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv argumenterende tekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Argumenter for at bevaring av Amazonas er et globalt ansvar.', solution: 'La protección de la Amazonía no es solo responsabilidad de los países amazónicos, sino de todo el mundo. Esta selva regula el clima global y alberga una biodiversidad insustituible. Los países industrializados deberían financiar su conservación como compensación por sus emisiones históricas.', answer: 'La protección de la Amazonía es un deber global porque regula el clima y alberga una biodiversidad insustituible.' },
        { label: 'b', task: 'Diskuter fordeler og ulemper med økoturisme.', solution: 'El ecoturismo puede generar ingresos para las comunidades locales y financiar la conservación. Sin embargo, un turismo mal gestionado puede dañar los mismos ecosistemas que pretende proteger. Es fundamental establecer límites y regulaciones estrictas.', answer: 'El ecoturismo genera ingresos pero mal gestionado puede dañar los ecosistemas.' },
        { label: 'c', task: 'Sammenlign naturvern i Spania og et latinamerikansk land.', solution: 'España cuenta con una red extensa de parques nacionales como Doñana y las Islas Canarias. En comparación, Costa Rica destina el 25 % de su territorio a áreas protegidas. Ambos países enfrentan el desafío de equilibrar desarrollo económico y conservación.', answer: 'España tiene parques nacionales; Costa Rica protege el 25 % de su territorio.' },
        { label: 'd', task: 'Skriv en appell for å beskytte en truet art i den spansktalende verden.', solution: 'El cóndor andino, símbolo de los Andes, está en peligro de extinción por la caza furtiva y la pérdida de hábitat. Debemos actuar ahora para proteger a esta majestuosa ave. Sin medidas urgentes de conservación, las futuras generaciones solo lo conocerán por fotografías.', answer: 'El cóndor andino necesita protección urgente contra la caza y la pérdida de hábitat.' },
      ], solution: 'a) La protección de la Amazonía es responsabilidad global., b) El ecoturismo tiene beneficios pero necesita regulación., c) España y Costa Rica protegen la naturaleza de diferentes maneras., d) El cóndor andino necesita protección urgente.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-3-tip-1', type: 'tip', content: `**Husk:** Latin-Amerika huser over 40 % av verdens biologiske mangfold. Når du skriver om natur, bruk beskrivende adjektiver og spesifikke eksempler for å gjøre teksten levende.` },
    { id: 'spansk-3-11-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Biologisk mangfold og økosystemer**

- **Nøkkelord:** biodiversidad, deforestación, especie en peligro, conservación
- **Viktige økosystemer:** Amazonas, Galápagos, Pantanal, Patagonia, Karibiske korallrev
- **Trusler:** Avskoging, forurensning, ulovlig handel, klimaendringer
- **Tiltak:** Naturreservater, urfolks rettigheter, økoturisme, internasjonalt samarbeid` },
  ],
  exercises: [],
};

// 11.4 Activismo medioambiental
export const CHAPTER_SPANSK_3_11_4: TextbookChapter = {
  id: 'spansk-3-11-4',
  courseId: 'spansk-3',
  chapterNumber: '11.4',
  title: 'Activismo medioambiental',
  subtitle: 'Miljøaktivisme og overtalelsesteknikker',
  description: 'Lær argumentasjonsteknikker og skriv kampanjetekster for miljøsaken på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke argumentasjonsteknikker i miljødebatten', 'skrive overbevisende kampanjetekster på spansk'],
  content: [
    { id: 'spansk-3-11-4-intro', type: 'text', content: `## Activismo medioambiental

Miljøaktivisme har lange tradisjoner i den spansktalende verden. Fra urfolksledere som forsvarer Amazonas til studentbevegelser i Spania og Mexico – mange kjemper for en bærekraftig fremtid. I dette kapittelet lærer du å bruke **argumentasjonsteknikker** (*técnicas de argumentación*) og å skrive **kampanjetekster** (*textos de campaña*) for miljøsaken.` },
    { id: 'spansk-3-11-4-def-1', type: 'definition', title: 'Aktivismevokabular (vocabulario de activismo)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| el activismo | aktivisme |
| el/la activista | aktivist |
| la manifestación | demonstrasjon |
| la campaña | kampanje |
| la petición | underskriftskampanje |
| la protesta | protest |
| el movimiento social | sosial bevegelse |
| la concienciación | bevisstgjøring |
| la denuncia | anmeldelse/anklage |
| el compromiso | engasjement/forpliktelse |
| la solidaridad | solidaritet |
| la justicia climática | klimarettferdighet |` },
    { id: 'spansk-3-11-4-text-1', type: 'text', content: `## Miljøaktivister i den spansktalende verden

**Berta Cáceres (Honduras, 1971-2016):**
- Urfolksleder og miljøaktivist fra lenca-folket
- Kjempet mot bygging av vannkraftverk på elven Gualcarque
- Vant Goldman Environmental Prize i 2015
- Myrdet i 2016 for sin aktivisme

**Nemonte Nenquimo (Ecuador):**
- Waorani-leder som vant rettssak mot oljeutvinning i Amazonas
- Beskyttet 500 000 hektar regnskog
- Kåret til en av Times 100 mest innflytelsesrike personer

**Fridays for Future i Latin-Amerika:**
- Inspirert av Greta Thunberg
- Store bevegelser i Chile, Colombia, Mexico og Argentina
- Unge aktivister krever klimahandling fra myndighetene

*"¡No hay planeta B!"* (Det finnes ingen planet B!)` },
    { id: 'spansk-3-11-4-text-2', type: 'text', content: `## Argumentasjonsteknikker og kampanjetekster

**Argumentasjonsstruktur (*estructura argumentativa*):**
1. **Tesis** – Hovedpåstanden din (*Debemos actuar ahora contra el cambio climático.*)
2. **Argumentos** – Begrunnelser (*Porque las consecuencias son irreversibles...*)
3. **Evidencia** – Bevis og eksempler (*Según la ONU, las temperaturas han subido...*)
4. **Contraargumento** – Motargument du imøtegår (*Algunos dicen que es costoso, pero...*)
5. **Conclusión** – Konklusjon (*Por lo tanto, es imprescindible que...*)

**Retoriske virkemidler (*recursos retóricos*):**
- **Pregunta retórica:** *¿Queremos un planeta habitable para nuestros hijos?*
- **Repetición:** *Ahora es el momento. Ahora o nunca.*
- **Apelación a las emociones:** *Imagina un mundo sin selvas, sin ríos limpios...*
- **Datos y cifras:** *Cada año desaparecen 10 millones de hectáreas de bosque.*
- **Llamada a la acción:** *¡Únete a la lucha! ¡Firma la petición!*` },
    { id: 'spansk-3-11-4-example-1', type: 'example', title: 'Eksempel: Kampanjetekst', problem: `Skriv en kort kampanjetekst mot avskoging.`, solution: `*¡Basta de destruir nuestros bosques! Cada minuto que pasa, desaparece un área de selva equivalente a 30 campos de fútbol. La deforestación no solo destruye la biodiversidad, sino que acelera el cambio climático que nos afecta a todos. ¿Queremos dejar un planeta muerto a nuestros hijos? ¡Firma nuestra petición y exige a los gobiernos que protejan los bosques ahora! No hay planeta B.*` },
    { id: 'spansk-3-11-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-11-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'la manifestación', solution: 'demonstrasjon', answer: 'demonstrasjon' },
        { label: 'b', task: 'la concienciación', solution: 'bevisstgjøring', answer: 'bevisstgjøring' },
        { label: 'c', task: 'la justicia climática', solution: 'klimarettferdighet', answer: 'klimarettferdighet' },
        { label: 'd', task: 'el compromiso', solution: 'engasjement/forpliktelse', answer: 'engasjement/forpliktelse' },
      ], solution: 'a) demonstrasjon, b) bevisstgjøring, c) klimarettferdighet, d) engasjement/forpliktelse', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-11-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Koble aktivisten med riktig beskrivelse:', subTasks: [
        { label: 'a', task: 'Berta Cáceres', solution: 'Urfolksleder fra Honduras som kjempet mot et vannkraftverk', answer: 'Urfolksleder fra Honduras som kjempet mot et vannkraftverk' },
        { label: 'b', task: 'Nemonte Nenquimo', solution: 'Waorani-leder som stoppet oljeutvinning i Amazonas', answer: 'Waorani-leder som stoppet oljeutvinning i Amazonas' },
        { label: 'c', task: 'Fridays for Future', solution: 'Ungdomsbevegelse som krever klimahandling', answer: 'Ungdomsbevegelse som krever klimahandling' },
        { label: 'd', task: 'Goldman Environmental Prize', solution: 'Prestisjetung pris for miljøaktivisme', answer: 'Prestisjetung pris for miljøaktivisme' },
      ], solution: 'a) Urfolksleder fra Honduras, b) Waorani-leder som stoppet oljeutvinning, c) Ungdomsbevegelse for klimahandling, d) Pris for miljøaktivisme', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-11-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Identifiser retoriske virkemidler:', subTasks: [
        { label: 'a', task: '¿Queremos un mundo sin bosques? – Hva slags virkemiddel er dette?', solution: 'Pregunta retórica – et retorisk spørsmål som ikke forventer svar, men som engasjerer leseren.', answer: 'Pregunta retórica (retorisk spørsmål)' },
        { label: 'b', task: 'Cada año desaparecen 10 millones de hectáreas. – Hva slags virkemiddel?', solution: 'Datos y cifras – bruk av tall og statistikk for å underbygge argumentet.', answer: 'Datos y cifras (tall og fakta)' },
        { label: 'c', task: 'Ahora es el momento. Ahora o nunca. – Hva slags virkemiddel?', solution: 'Repetición – gjentagelse av nøkkelord for å forsterke budskapet.', answer: 'Repetición (gjentagelse)' },
        { label: 'd', task: '¡Firma la petición! ¡Únete! – Hva slags virkemiddel?', solution: 'Llamada a la acción – oppfordring til leseren om å handle.', answer: 'Llamada a la acción (oppfordring til handling)' },
      ], solution: 'a) Pregunta retórica, b) Datos y cifras, c) Repetición, d) Llamada a la acción', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-11-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv kampanjetekster (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Skriv en kampanjetekst for bevaring av havet med retorisk spørsmål og tall.', solution: '¿Sabías que el 80 % de la contaminación marina proviene de actividades terrestres? Cada año, 8 millones de toneladas de plástico terminan en nuestros océanos, destruyendo ecosistemas marinos enteros. Es hora de actuar: reduce tu consumo de plástico, participa en limpiezas de playas y exige leyes más estrictas. ¡El mar nos necesita!', answer: '¿Sabías que el 80 % de la contaminación marina proviene de tierra? Cada año, 8 millones de toneladas de plástico llegan al mar. ¡Actúa ahora!' },
        { label: 'b', task: 'Argumenter for klimarettferdighet med tesis, argumentos og conclusión.', solution: 'Tesis: La justicia climática es un derecho fundamental. Los países más pobres sufren las peores consecuencias del cambio climático sin haberlo causado. Mientras tanto, los países industrializados siguen emitiendo gases contaminantes. Por lo tanto, es imprescindible que los países ricos compensen económicamente a los más vulnerables.', answer: 'La justicia climática exige que los países ricos compensen a los más vulnerables por las consecuencias del cambio climático.' },
        { label: 'c', task: 'Skriv en tale til en miljødemonstrasjon med følelsesappell.', solution: '¡Compañeros y compañeras! Imaginen un mundo donde nuestros hijos no puedan respirar aire limpio ni beber agua pura. Esa pesadilla se está convirtiendo en realidad. Pero juntos tenemos el poder de cambiar el rumbo. ¡No nos rendiremos hasta que nuestros líderes actúen!', answer: 'Imaginen un mundo sin aire limpio. Esa pesadilla se acerca. Juntos podemos cambiar el rumbo.' },
        { label: 'd', task: 'Diskuter om aktivisme er den beste måten å skape miljøendringer på.', solution: 'El activismo es fundamental para crear conciencia y presionar a los gobiernos, como demostró Berta Cáceres. Sin embargo, también se necesitan cambios legislativos, innovación tecnológica y educación ambiental. La combinación de activismo popular y políticas públicas es la estrategia más efectiva para proteger el medio ambiente.', answer: 'El activismo crea conciencia, pero también se necesitan leyes, tecnología y educación.' },
      ], solution: 'a) Kampanjetekst med retorisk spørsmål og tall om havforurensning., b) Argument for klimarettferdighet., c) Tale med følelsesappell., d) Aktivisme er viktig men må kombineres med andre tiltak.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-11-4-tip-1', type: 'tip', content: `**Husk:** En god kampanjetekst bruker en kombinasjon av retoriske virkemidler: retoriske spørsmål, tall og fakta, følelsesappell og en klar oppfordring til handling. Øv deg på å identifisere disse i tekster du leser!` },
    { id: 'spansk-3-11-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Miljøaktivisme**

- **Nøkkelord:** activismo, manifestación, campaña, concienciación, justicia climática
- **Aktivister:** Berta Cáceres (Honduras), Nemonte Nenquimo (Ecuador), Fridays for Future
- **Argumentasjon:** Tesis → argumentos → evidencia → contraargumento → conclusión
- **Retorikk:** Pregunta retórica, repetición, apelación emocional, datos, llamada a la acción` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12: MEDIOS Y COMUNICACIÓN DIGITAL
// ============================================================================

// 12.1 El periodismo en español
export const CHAPTER_SPANSK_3_12_1: TextbookChapter = {
  id: 'spansk-3-12-1',
  courseId: 'spansk-3',
  chapterNumber: '12.1',
  title: 'El periodismo en español',
  subtitle: 'Spansk journalistikk og kildekritikk',
  description: 'Lær å lese og analysere spanske avisartikler, og øv på kildekritikk med fokus på El País og andre store aviser.',
  estimatedMinutes: 45,
  competenceGoals: ['lese og forstå autentiske avisartikler på spansk', 'vurdere kilder kritisk og identifisere perspektiver i medietekster'],
  content: [
    { id: 'spansk-3-12-1-intro', type: 'text', content: `## El periodismo en español

Spanskspråklig journalistikk har en rik tradisjon og når hundrevis av millioner lesere verden over. Fra **El País** i Spania til **El Tiempo** i Colombia og **La Nación** i Argentina – spanske aviser dekker alt fra politikk til kultur. I dette kapittelet lærer du å lese, forstå og kritisk analysere **avisartikler** (*artículos periodísticos*) på spansk.` },
    { id: 'spansk-3-12-1-def-1', type: 'definition', title: 'Journalistikkvokabular (vocabulario periodístico)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| el periódico / el diario | avisen |
| el/la periodista | journalist |
| el artículo | artikkel |
| el titular | overskrift |
| la noticia | nyhet |
| la entrevista | intervju |
| el reportaje | reportasje |
| la columna de opinión | meningsartikkel |
| el editorial | lederartikkel |
| la fuente | kilde |
| la objetividad | objektivitet |
| la libertad de prensa | pressefrihet |` },
    { id: 'spansk-3-12-1-text-1', type: 'text', content: `## Viktige spanskspråklige medier

**Spania:**
- **El País** – Spanias mest leste avis, grunnlagt 1976 etter Francos død
- **El Mundo** – Mer konservativ profil, sterk på gravejournalistikk
- **La Vanguardia** – Barcelona-basert, utgis på spansk og katalansk

**Latin-Amerika:**
- **El Tiempo** (Colombia) – Grunnlagt 1911, en av de viktigste i Latin-Amerika
- **La Nación** (Argentina) – Konservativ tradisjon, grunnlagt 1870
- **El Universal** (Mexico) – Bred dekning av mexicansk politikk og samfunn
- **BBC Mundo** – BBCs spanskspråklige tjeneste, internasjonal dekning

**Avisartikkelens oppbygning:**
1. **El titular** – Overskriften: kort, fengslende, informativ
2. **La entradilla** – Ingressen: svarer på hvem, hva, hvor, når, hvorfor
3. **El cuerpo** – Brødteksten: utdypende informasjon
4. **Las fuentes** – Kildene: hvem uttaler seg?` },
    { id: 'spansk-3-12-1-text-2', type: 'text', content: `## Kildekritikk (*pensamiento crítico sobre fuentes*)

Når du leser en avisartikkel på spansk, still deg disse spørsmålene:

**Om kilden:**
- *¿Quién ha escrito el artículo?* (Hvem har skrevet artikkelen?)
- *¿Qué medio lo publica?* (Hvilket medium publiserer den?)
- *¿Qué perspectivo político tiene el medio?* (Hvilket politisk perspektiv har mediet?)

**Om innholdet:**
- *¿Qué fuentes se citan?* (Hvilke kilder siteres?)
- *¿Se presentan varios puntos de vista?* (Presenteres flere synspunkter?)
- *¿Hay datos que respalden las afirmaciones?* (Er det data som støtter påstandene?)

**Om hensikten:**
- *¿Cuál es el propósito del texto?* (Hva er hensikten med teksten?)
- *¿Informa, opina o persuade?* (Informerer, mener eller overtaler den?)
- *¿Hay lenguaje emotivo o neutral?* (Er språket følelsesladet eller nøytralt?)

Skille mellom **noticias** (nyheter – objektive) og **opiniones** (meninger – subjektive) er en grunnleggende ferdighet i kildekritikk.` },
    { id: 'spansk-3-12-1-example-1', type: 'example', title: 'Eksempel: Analyse av en overskrift', problem: `Analyser denne overskriften: "Crisis climática: los jóvenes exigen acción inmediata"`, solution: `**Analyse:** Overskriften er informativ og bruker ordet *crisis* (krise), som er sterkere enn *problema* (problem). Den identifiserer aktørene (*los jóvenes* – de unge) og deres krav (*acción inmediata* – umiddelbar handling). Ordet *exigen* (krever) er sterkere enn *piden* (ber om), noe som antyder at journalisten sympatiserer med de unges kamp.` },
    { id: 'spansk-3-12-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-12-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'el titular', solution: 'overskrift', answer: 'overskrift' },
        { label: 'b', task: 'la fuente', solution: 'kilde', answer: 'kilde' },
        { label: 'c', task: 'el reportaje', solution: 'reportasje', answer: 'reportasje' },
        { label: 'd', task: 'la libertad de prensa', solution: 'pressefrihet', answer: 'pressefrihet' },
      ], solution: 'a) overskrift, b) kilde, c) reportasje, d) pressefrihet', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-12-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Koble avisen med riktig land:', subTasks: [
        { label: 'a', task: 'El País', solution: 'España', answer: 'España' },
        { label: 'b', task: 'El Tiempo', solution: 'Colombia', answer: 'Colombia' },
        { label: 'c', task: 'La Nación', solution: 'Argentina', answer: 'Argentina' },
        { label: 'd', task: 'El Universal', solution: 'México', answer: 'México' },
      ], solution: 'a) España, b) Colombia, c) Argentina, d) México', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-12-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om journalistikk:', subTasks: [
        { label: 'a', task: 'Hva er forskjellen mellom en noticia og en columna de opinión?', solution: 'Una noticia presenta hechos de manera objetiva, mientras que una columna de opinión expresa el punto de vista personal del autor sobre un tema.', answer: 'Una noticia es objetiva (hechos); una columna de opinión es subjetiva (punto de vista del autor).' },
        { label: 'b', task: 'Hvilke spørsmål bør du stille når du vurderer en kilde?', solution: 'Quién ha escrito el texto, qué medio lo publica, qué perspectiva tiene, qué fuentes se citan y si se presentan varios puntos de vista.', answer: 'Quién lo escribe, qué medio lo publica, qué perspectiva tiene, qué fuentes cita.' },
        { label: 'c', task: 'Hvorfor er det viktig å lese flere kilder om samme sak?', solution: 'Porque cada medio tiene su propia perspectiva y sesgo. Leer varias fuentes permite formarse una opinión más completa y equilibrada.', answer: 'Porque cada medio tiene su perspectiva. Varias fuentes dan una visión más equilibrada.' },
        { label: 'd', task: 'Hva er en entradilla, og hva bør den inneholde?', solution: 'La entradilla es el primer párrafo de un artículo periodístico. Debe responder a las preguntas quién, qué, dónde, cuándo y por qué.', answer: 'La entradilla es el primer párrafo que responde a quién, qué, dónde, cuándo y por qué.' },
      ], solution: 'a) Noticia = objetiva, columna = subjetiva., b) Quién, qué medio, qué perspectiva, qué fuentes., c) Cada medio tiene su sesgo; varias fuentes dan visión equilibrada., d) Primer párrafo que responde quién, qué, dónde, cuándo, por qué.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-12-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Analyse- og skriveoppgaver (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Skriv en kort nyhetsartikkel (noticia) om en miljøhendelse.', solution: 'Miles de jóvenes se manifestaron ayer en las calles de Madrid para exigir medidas urgentes contra el cambio climático. La protesta, organizada por Fridays for Future, reunió a estudiantes de toda España. Los manifestantes pidieron al gobierno que cumpla sus compromisos del Acuerdo de París.', answer: 'Miles de jóvenes se manifestaron en Madrid para exigir medidas contra el cambio climático, organizados por Fridays for Future.' },
        { label: 'b', task: 'Skriv en meningsartikkel (columna de opinión) om samme tema.', solution: 'Es admirable que los jóvenes tomen la iniciativa en la lucha contra el cambio climático. Sin embargo, las manifestaciones no son suficientes si los gobiernos siguen ignorando las evidencias científicas. Necesitamos acciones concretas, no solo promesas vacías.', answer: 'Es admirable que los jóvenes luchen, pero necesitamos acciones concretas de los gobiernos, no solo promesas.' },
        { label: 'c', task: 'Sammenlign pressefrihet i Spania og i et latinamerikansk land.', solution: 'España goza de una amplia libertad de prensa, aunque existen debates sobre la concentración de medios. En México, la situación es más grave: es uno de los países más peligrosos del mundo para los periodistas, con decenas de asesinatos en las últimas décadas.', answer: 'España tiene buena libertad de prensa. México es uno de los países más peligrosos para periodistas.' },
        { label: 'd', task: 'Diskuter om objektivitet i journalistikk er mulig.', solution: 'La objetividad absoluta es imposible porque todo periodista tiene su propia perspectiva y experiencias. Sin embargo, un buen periodista debe esforzarse por presentar los hechos con honestidad, citar fuentes diversas y separar claramente la información de la opinión.', answer: 'La objetividad absoluta es imposible, pero el buen periodista presenta hechos con honestidad y separa información de opinión.' },
      ], solution: 'a) Nyhetsartikkel om klimademonstrasjon., b) Meningsartikkel om klimahandling., c) Pressefrihet: Spania relativt god, Mexico farlig for journalister., d) Absolutt objektivitet umulig, men journalister bør streve etter den.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-1-tip-1', type: 'tip', content: `**Husk:** Å lese spanske aviser som El País (elpais.com) er en utmerket måte å forbedre spansken din på. Begynn med korte nyhetsartikler og jobb deg opp til lengre reportasjer.` },
    { id: 'spansk-3-12-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Spansk journalistikk**

- **Nøkkelord:** periódico, periodista, titular, fuente, objetividad
- **Store aviser:** El País (Spania), El Tiempo (Colombia), La Nación (Argentina)
- **Artikkelstruktur:** Titular → entradilla → cuerpo → fuentes
- **Kildekritikk:** Hvem skriver? Hvilket perspektiv? Hvilke kilder? Fakta eller mening?` },
  ],
  exercises: [],
};

// 12.2 Redes sociales
export const CHAPTER_SPANSK_3_12_2: TextbookChapter = {
  id: 'spansk-3-12-2',
  courseId: 'spansk-3',
  chapterNumber: '12.2',
  title: 'Redes sociales',
  subtitle: 'Sosiale medier og språklig påvirkning',
  description: 'Utforsk sosiale mediers påvirkning på spansk språk og kultur, inkludert nettspråk og digital etikk.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå hvordan sosiale medier påvirker spansk språk', 'diskutere etiske spørsmål knyttet til sosiale medier'],
  content: [
    { id: 'spansk-3-12-2-intro', type: 'text', content: `## Redes sociales

Sosiale medier (*las redes sociales*) har forandret hvordan vi kommuniserer, og spansk er det nest mest brukte språket på internett. Med over 500 millioner spansktalende brukere har plattformer som Instagram, TikTok og X (Twitter) skapt et helt nytt **digitalt språk**. I dette kapittelet utforsker vi hvordan sosiale medier påvirker spansk og diskuterer etiske utfordringer.` },
    { id: 'spansk-3-12-2-def-1', type: 'definition', title: 'Sosiale medier-vokabular (vocabulario de redes sociales)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| las redes sociales | sosiale medier |
| el/la influencer | influenser |
| el seguidor/a | følger |
| el contenido | innhold |
| la publicación / el post | innlegg |
| el hashtag / la etiqueta | emneknagg |
| compartir | å dele |
| dar un «me gusta» | å like |
| el algoritmo | algoritmen |
| la privacidad | personvern |
| el ciberacoso | nettmobbing |
| la huella digital | digitalt fotavtrykk |` },
    { id: 'spansk-3-12-2-text-1', type: 'text', content: `## Spansk nettspråk

Sosiale medier har skapt et eget spansk nettspråk (*lenguaje digital*):

**Forkortelser:**
- *tb* = también (også)
- *xq* = porque (fordi)
- *q* = que (at/som)
- *tq* = te quiero (jeg er glad i deg)
- *ntp* = no te preocupes (ikke bekymre deg)

**Anglisismer:**
- *postear* (å poste), *likear* (å like), *stalkear* (å stalke)
- *un hater* (en hater), *el feed* (feeden), *hacer unfollow* (å avfølge)

**Uttrykk:**
- *¡Qué fuerte!* (Så vilt!/Utrolig!)
- *Estoy muerto/a* (Jeg er død = det var så morsomt)
- *Me da cringe* (Det gir meg cringe)
- *Es muy random* (Det er veldig random)

**Debatt:** Noen mener nettspråk ødelegger spansk, mens lingvister påpeker at det er en naturlig **språkutvikling** som alltid har skjedd.` },
    { id: 'spansk-3-12-2-text-2', type: 'text', content: `## Etikk og sosiale medier

Sosiale medier reiser viktige etiske spørsmål:

**Personvern (*privacidad*):**
- *Todo lo que publicas queda en internet para siempre.* (Alt du publiserer blir på internett for alltid.)
- *Tu huella digital puede afectar tu futuro.* (Ditt digitale fotavtrykk kan påvirke fremtiden din.)

**Nettmobbing (*ciberacoso*):**
- *El anonimato facilita el acoso.* (Anonymitet gjør mobbing lettere.)
- *Las víctimas pueden sufrir graves consecuencias psicológicas.* (Ofrene kan få alvorlige psykologiske konsekvenser.)

**Algoritmebobler (*burbujas de filtro*):**
- *Los algoritmos muestran lo que quieres ver, no lo que necesitas saber.* (Algoritmene viser det du vil se, ikke det du trenger å vite.)
- *Esto puede crear polarización.* (Dette kan skape polarisering.)

**Nyttige debattuttrykk:**
- *Estoy a favor de... porque...* (Jeg er for... fordi...)
- *Estoy en contra de... ya que...* (Jeg er mot... ettersom...)
- *Coincido con... en que...* (Jeg er enig med... i at...)
- *Discrepo porque...* (Jeg er uenig fordi...)` },
    { id: 'spansk-3-12-2-example-1', type: 'example', title: 'Eksempel: Nettspråk vs. formelt spansk', problem: `Oversett denne nettmeldingen til formelt spansk: "Oye, xq no vienes? tq, ntp x lo de ayer"`, solution: `**Nettspråk:** *Oye, xq no vienes? tq, ntp x lo de ayer*
**Formelt:** *Oye, ¿por qué no vienes? Te quiero, no te preocupes por lo de ayer.*
(Hei, hvorfor kommer du ikke? Jeg er glad i deg, ikke bekymre deg for det som skjedde i går.)` },
    { id: 'spansk-3-12-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-12-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'el ciberacoso', solution: 'nettmobbing', answer: 'nettmobbing' },
        { label: 'b', task: 'la huella digital', solution: 'digitalt fotavtrykk', answer: 'digitalt fotavtrykk' },
        { label: 'c', task: 'el/la seguidor/a', solution: 'følger', answer: 'følger' },
        { label: 'd', task: 'la privacidad', solution: 'personvern', answer: 'personvern' },
      ], solution: 'a) nettmobbing, b) digitalt fotavtrykk, c) følger, d) personvern', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-12-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Hva betyr disse nettforkortelsene?', subTasks: [
        { label: 'a', task: 'xq', solution: 'porque (fordi)', answer: 'porque (fordi)' },
        { label: 'b', task: 'tb', solution: 'también (også)', answer: 'también (også)' },
        { label: 'c', task: 'tq', solution: 'te quiero (jeg er glad i deg)', answer: 'te quiero (jeg er glad i deg)' },
        { label: 'd', task: 'ntp', solution: 'no te preocupes (ikke bekymre deg)', answer: 'no te preocupes (ikke bekymre deg)' },
      ], solution: 'a) porque, b) también, c) te quiero, d) no te preocupes', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-12-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om sosiale medier:', subTasks: [
        { label: 'a', task: 'Hvordan påvirker sosiale medier spansk språk?', solution: 'Las redes sociales han introducido abreviaturas, anglicismos y nuevas expresiones en el español. Han creado un lenguaje digital más informal y rápido.', answer: 'Las redes han introducido abreviaturas, anglicismos y nuevas expresiones en español.' },
        { label: 'b', task: 'Hva er en burbuja de filtro og hvorfor er den problematisk?', solution: 'Es cuando los algoritmos solo te muestran contenido que coincide con tus opiniones, creando una burbuja donde no ves perspectivas diferentes. Esto puede aumentar la polarización.', answer: 'Los algoritmos solo muestran contenido afín a tus opiniones, aumentando la polarización.' },
        { label: 'c', task: 'Nevn tre etiske utfordringer med sosiale medier.', solution: 'La privacidad (datos personales expuestos), el ciberacoso (bullying online) y las burbujas de filtro (polarización por algoritmos).', answer: 'Privacidad, ciberacoso y burbujas de filtro.' },
        { label: 'd', task: 'Er nettspråk en trussel mot spansk? Diskuter.', solution: 'No es una amenaza sino una evolución natural. Los jóvenes saben diferenciar entre el lenguaje digital informal y el español formal. El idioma siempre se ha adaptado a nuevos contextos comunicativos.', answer: 'No es amenaza, es evolución natural. Los jóvenes diferencian entre contextos.' },
      ], solution: 'a) Abreviaturas, anglicismos y nuevas expresiones., b) Algoritmos que solo muestran lo que quieres ver, causando polarización., c) Privacidad, ciberacoso, burbujas de filtro., d) No es amenaza, es evolución natural del idioma.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-12-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv argumenterende tekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Argumenter for at sosiale medier er positivt for demokratiet.', solution: 'Las redes sociales democratizan la información, permitiendo que cualquier persona comparta su voz. Han sido fundamentales para organizar movimientos sociales como las protestas en Chile y Colombia. Gracias a ellas, los ciudadanos pueden exigir transparencia a sus gobiernos.', answer: 'Las redes democratizan la información y han sido clave para movimientos sociales en Chile y Colombia.' },
        { label: 'b', task: 'Argumenter mot at sosiale medier er bra for ungdom.', solution: 'Las redes sociales pueden afectar negativamente la salud mental de los jóvenes, generando ansiedad y baja autoestima por la comparación constante. Además, el ciberacoso es un problema grave que puede tener consecuencias devastadoras.', answer: 'Las redes afectan la salud mental de los jóvenes y facilitan el ciberacoso.' },
        { label: 'c', task: 'Diskuter om influencere har for mye makt.', solution: 'Los influencers tienen un enorme poder sobre las decisiones de consumo y las opiniones de sus seguidores, especialmente los jóvenes. Esto es problemático cuando promocionan productos sin transparencia o difunden información errónea. Se necesita más regulación y educación mediática.', answer: 'Los influencers tienen mucho poder sobre los jóvenes. Se necesita regulación y educación mediática.' },
        { label: 'd', task: 'Sammenlign bruk av sosiale medier blant ungdom i Spania og Norge.', solution: 'Tanto en España como en Noruega, los jóvenes usan activamente Instagram, TikTok y YouTube. Sin embargo, Noruega ha sido pionera en legislar sobre el uso de filtros en publicidad, mientras que España debate leyes similares. Ambos países enfrentan los mismos desafíos de privacidad y ciberacoso.', answer: 'Ambos países usan las mismas redes. Noruega legisla sobre filtros; España debate leyes similares.' },
      ], solution: 'a) Las redes democratizan la información y organizan movimientos sociales., b) Afectan la salud mental y facilitan el ciberacoso., c) Los influencers tienen demasiado poder sin regulación., d) Ambos países usan las mismas redes pero enfrentan desafíos similares.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-2-tip-1', type: 'tip', content: `**Husk:** Å følge spanskspråklige kontoer på sosiale medier er en morsom måte å lære spansk på. Prøv å følge nyhetsmedier som @elpaborras, @bbcmundo eller spanske influencere som interesserer deg.` },
    { id: 'spansk-3-12-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Sosiale medier**

- **Nøkkelord:** redes sociales, influencer, ciberacoso, privacidad, huella digital
- **Nettspråk:** Forkortelser (xq, tb, tq), anglisismer (postear, likear), nye uttrykk
- **Etikk:** Personvern, nettmobbing, algoritmebobler, polarisering
- **Debatt:** Bruk uttrykk som estoy a favor de..., discrepo porque...` },
  ],
  exercises: [],
};

// 12.3 Publicidad y propaganda
export const CHAPTER_SPANSK_3_12_3: TextbookChapter = {
  id: 'spansk-3-12-3',
  courseId: 'spansk-3',
  chapterNumber: '12.3',
  title: 'Publicidad y propaganda',
  subtitle: 'Reklame, propaganda og overtalelsesteknikker',
  description: 'Analyser reklame og propaganda med fokus på retorisk analyse og overtalelsesteknikker i spanskspråklige medier.',
  estimatedMinutes: 45,
  competenceGoals: ['identifisere overtalelsesteknikker i reklame og propaganda', 'analysere retoriske virkemidler i spanske medietekster'],
  content: [
    { id: 'spansk-3-12-3-intro', type: 'text', content: `## Publicidad y propaganda

Reklame (*la publicidad*) og propaganda omgir oss overalt – på TV, i sosiale medier, på gaten. Å forstå **overtalelsesteknikker** (*técnicas de persuasión*) er avgjørende for å være en kritisk medieforbruker. I dette kapittelet analyserer vi hvordan spansk reklame bruker språk, bilder og følelser for å påvirke oss.` },
    { id: 'spansk-3-12-3-def-1', type: 'definition', title: 'Reklame- og propagandavokabular (vocabulario publicitario)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la publicidad | reklame |
| la propaganda | propaganda |
| el anuncio / el comercial | reklameinnslag |
| el eslogan | slagord |
| la marca | merkevare |
| el público objetivo | målgruppe |
| persuadir | å overtale |
| la manipulación | manipulasjon |
| el consumismo | forbrukerholdning |
| la imagen de marca | merkevareimage |
| el patrocinio | sponsing |
| el producto | produkt |` },
    { id: 'spansk-3-12-3-text-1', type: 'text', content: `## Overtalelsesteknikker i reklame

Reklame bruker en rekke teknikker for å overtale oss:

**1. Appell til følelser (*apelación emocional*):**
- Familielykke, nostalgi, frykt, humor
- Eksempel: *"Porque tú lo vales"* (L'Oréal) – appell til selvfølelse

**2. Sosial bevis (*prueba social*):**
- «Alle gjør det» – gruppepress
- Eksempel: *"El café preferido por millones"* – popularitetsargument

**3. Autoritet (*argumento de autoridad*):**
- Bruk av eksperter, kjendiser, profesjonelle
- Eksempel: *"9 de cada 10 dentistas lo recomiendan"*

**4. Knapphet (*escasez*):**
- Tidsbegrensede tilbud, begrenset opplag
- Eksempel: *"¡Solo hoy! ¡Últimas unidades!"*

**5. Repetisjon (*repetición*):**
- Gjenta merkenavnet eller slagordet
- Eksempel: Coca-Cola, Coca-Cola, Coca-Cola...

**6. Bandwagon (*efecto manada*):**
- Følg mengden, ikke gå glipp av noe
- Eksempel: *"Todo el mundo ya lo tiene. ¿Y tú?"*` },
    { id: 'spansk-3-12-3-text-2', type: 'text', content: `## Retorisk analyse av reklame

For å analysere en reklame bruker du de tre retoriske appellformene:

**Etos (*ethos*) – troverdighet:**
- Hvem står bak budskapet?
- Er avsenderen pålitelig?
- *"Aprobado por la Asociación Dental Española"*

**Patos (*pathos*) – følelser:**
- Hvilke følelser vekkes?
- Brukes bilder, musikk, fortellinger?
- *"Regala felicidad esta Navidad"* (Gi lykke i julegave)

**Logos (*logos*) – logikk:**
- Brukes fakta, tall, argumenter?
- Er argumentene gyldige?
- *"Ahorra un 50 % con nuestro plan"* (Spar 50 % med vår plan)

**Analysemal:**
1. *¿Qué producto o idea se vende?* (Hvilket produkt/idé selges?)
2. *¿Quién es el público objetivo?* (Hvem er målgruppen?)
3. *¿Qué técnicas de persuasión se usan?* (Hvilke overtalelsesteknikker brukes?)
4. *¿Qué valores se transmiten?* (Hvilke verdier formidles?)
5. *¿Es ético el anuncio?* (Er reklamen etisk?)` },
    { id: 'spansk-3-12-3-example-1', type: 'example', title: 'Eksempel: Analyse av et slagord', problem: `Analyser slagordet: "Red Bull te da alas" (Red Bull gir deg vinger)`, solution: `**Produkt:** Red Bull energidrikk. **Målgruppe:** Unge, aktive mennesker. **Teknikk:** Metafor (vinger = energi, frihet), appell til følelser (eventyrlyst), overdrivelse. **Etos:** Assosiasjon med ekstremsport. **Patos:** Følelse av frihet og styrke. **Logos:** Implisitt løfte om økt energi. **Etisk vurdering:** Overdrivelsen kan villede om produktets faktiske effekt.` },
    { id: 'spansk-3-12-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-12-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'el eslogan', solution: 'slagord', answer: 'slagord' },
        { label: 'b', task: 'el público objetivo', solution: 'målgruppe', answer: 'målgruppe' },
        { label: 'c', task: 'persuadir', solution: 'å overtale', answer: 'å overtale' },
        { label: 'd', task: 'el consumismo', solution: 'forbrukerholdning', answer: 'forbrukerholdning' },
      ], solution: 'a) slagord, b) målgruppe, c) å overtale, d) forbrukerholdning', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-12-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Identifiser overtalelsesteknikken:', subTasks: [
        { label: 'a', task: '"9 de cada 10 médicos lo recomiendan"', solution: 'Argumento de autoridad (autoritetsargument)', answer: 'Argumento de autoridad' },
        { label: 'b', task: '"¡Solo quedan 3 unidades!"', solution: 'Escasez (knapphet)', answer: 'Escasez (knapphet)' },
        { label: 'c', task: '"Porque tú lo vales"', solution: 'Apelación emocional (følelsesappell)', answer: 'Apelación emocional' },
        { label: 'd', task: '"Todo el mundo ya lo tiene"', solution: 'Efecto manada / bandwagon (gruppepress)', answer: 'Efecto manada / bandwagon' },
      ], solution: 'a) Argumento de autoridad, b) Escasez, c) Apelación emocional, d) Efecto manada', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-12-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om reklame:', subTasks: [
        { label: 'a', task: 'Hva er forskjellen mellom publicidad og propaganda?', solution: 'La publicidad vende productos o servicios con fines comerciales. La propaganda difunde ideas políticas o sociales con el objetivo de influir en la opinión pública.', answer: 'Publicidad vende productos (comercial); propaganda difunde ideas (político/social).' },
        { label: 'b', task: 'Forklar forskjellen mellom ethos, pathos og logos.', solution: 'Ethos apela a la credibilidad del emisor, pathos a las emociones del receptor, y logos a la razón y la lógica con datos y argumentos.', answer: 'Ethos = credibilidad, pathos = emociones, logos = razón y datos.' },
        { label: 'c', task: 'Hvorfor er det viktig å forstå overtalelsesteknikker?', solution: 'Porque nos permite ser consumidores y ciudadanos críticos, capaces de detectar manipulación y tomar decisiones informadas.', answer: 'Para ser consumidores críticos y detectar manipulación.' },
        { label: 'd', task: 'Gi et eksempel på uetisk reklame og forklar hvorfor.', solution: 'La publicidad de productos adelgazantes que promete resultados imposibles es poco ética porque crea falsas expectativas y puede dañar la salud y la autoestima de los consumidores.', answer: 'Publicidad de adelgazamiento con promesas imposibles: crea falsas expectativas y daña la autoestima.' },
      ], solution: 'a) Publicidad = comercial, propaganda = político/social., b) Ethos = credibilidad, pathos = emociones, logos = lógica., c) Para ser consumidores críticos., d) Publicidad con promesas falsas es poco ética.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-12-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv analyse- og kreative tekster (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Lag et slagord for en miljøkampanje og analyser det retorisk.', solution: 'Eslogan: "Tu planeta, tu responsabilidad. Actúa hoy." Análisis: Usa apelación emocional (tu planeta = personalización), repetición (tu... tu...), y llamada a la acción (actúa hoy). Combina pathos (sentido de responsabilidad) con logos implícito (hay que actuar ahora porque las consecuencias son reales).', answer: '"Tu planeta, tu responsabilidad. Actúa hoy." Usa personalización, repetición y llamada a la acción.' },
        { label: 'b', task: 'Diskuter om reklame rettet mot barn bør forbys.', solution: 'La publicidad dirigida a niños debería regularse estrictamente porque los menores no tienen la capacidad de distinguir entre información y persuasión. Muchos anuncios fomentan el consumismo y hábitos alimenticios poco saludables. Sin embargo, prohibirla completamente podría ser excesivo; lo importante es educar en pensamiento crítico.', answer: 'Debe regularse porque los niños no distinguen entre información y persuasión, pero educar es clave.' },
        { label: 'c', task: 'Analyser forskjellen mellom en nyhetsartikkel og en sponset artikkel.', solution: 'Un artículo periodístico busca informar de manera objetiva, mientras que un artículo patrocinado tiene un fin comercial disfrazado de información. El problema es que muchos lectores no distinguen entre ambos, lo que pone en riesgo la credibilidad del periodismo.', answer: 'El artículo periodístico informa; el patrocinado vende disfrazado de información.' },
        { label: 'd', task: 'Sammenlign reklamekultur i Spania og Latin-Amerika.', solution: 'En España, la publicidad suele ser más directa y sofisticada, influida por tendencias europeas. En Latinoamérica, la publicidad tiende a usar más humor, música y referencias culturales locales. Ambas regiones enfrentan debates sobre regulación de publicidad engañosa y protección del consumidor.', answer: 'España: más directa y europea. Latinoamérica: más humor y cultura local. Ambas debaten regulación.' },
      ], solution: 'a) Eslogan con análisis retórico., b) Debe regularse la publicidad infantil., c) Artículo vs. publirreportaje., d) España más directa; Latinoamérica más humor y cultura local.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-3-tip-1', type: 'tip', content: `**Husk:** Når du analyserer reklame, spør alltid: Hvem tjener på dette? Hva vil de at jeg skal føle? Hvilken informasjon mangler? Å stille kritiske spørsmål gjør deg til en bedre medieforbruker.` },
    { id: 'spansk-3-12-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Reklame og propaganda**

- **Nøkkelord:** publicidad, propaganda, eslogan, persuasión, consumismo
- **Overtalelsesteknikker:** Følelsesappell, autoritet, knapphet, sosial bevis, repetisjon
- **Retoriske appellformer:** Ethos (troverdighet), pathos (følelser), logos (logikk)
- **Analysemal:** Produkt → målgruppe → teknikker → verdier → etikk` },
  ],
  exercises: [],
};

// 12.4 Noticias falsas y pensamiento crítico
export const CHAPTER_SPANSK_3_12_4: TextbookChapter = {
  id: 'spansk-3-12-4',
  courseId: 'spansk-3',
  chapterNumber: '12.4',
  title: 'Noticias falsas y pensamiento crítico',
  subtitle: 'Falske nyheter og kritisk tenkning',
  description: 'Lær å identifisere falske nyheter og desinformasjon, og utvikle kritisk tenkning på spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['identifisere falske nyheter og desinformasjon på spansk', 'bruke kritisk tenkning i møte med digital informasjon'],
  content: [
    { id: 'spansk-3-12-4-intro', type: 'text', content: `## Noticias falsas y pensamiento crítico

I en tid med informasjonsoverflod er evnen til å skille fakta fra fiksjon viktigere enn noen gang. **Falske nyheter** (*noticias falsas* eller *fake news*) spres raskt via sosiale medier og kan påvirke valg, helse og samfunn. I dette kapittelet lærer du å gjenkjenne desinformasjon og å tenke kritisk på spansk.` },
    { id: 'spansk-3-12-4-def-1', type: 'definition', title: 'Kritisk tenkning-vokabular (vocabulario de pensamiento crítico)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| las noticias falsas / fake news | falske nyheter |
| la desinformación | desinformasjon |
| la información errónea | feilinformasjon |
| verificar | å verifisere/bekrefte |
| el bulo | falsk rykte |
| la teoría conspirativa | konspirasjonsteori |
| el sesgo | skjevhet/bias |
| el pensamiento crítico | kritisk tenkning |
| la fuente fiable | pålitelig kilde |
| contrastar información | å kryssjekke informasjon |
| el fact-checking | faktasjekk |
| la posverdad | postfakta |` },
    { id: 'spansk-3-12-4-text-1', type: 'text', content: `## Hvordan gjenkjenne falske nyheter

**Kjennetegn på falske nyheter (*señales de alarma*):**
- **Sensasjonelle overskrifter:** *"¡Increíble! Lo que no quieren que sepas..."* (Utrolig! Det de ikke vil at du skal vite...)
- **Manglende kilder:** Ingen eksperter eller dokumenter siteres
- **Følelsesladet språk:** Overdreven bruk av utropstegn og store bokstaver
- **Ukjent nettsted:** Ingen informasjon om hvem som står bak
- **Gammel dato:** Nyheten er gammel men presenteres som ny
- **Manipulerte bilder:** Bilder tatt ut av kontekst

**Verktøy for faktasjekk (*herramientas de verificación*):**
- **Maldita.es** – Spansk faktasjekktjeneste
- **Chequeado** (Argentina) – Latin-Amerikas første faktasjekker
- **ColombiaCheck** – Colombiansk faktasjekk
- **Google Reverse Image Search** – Sjekk om bilder er manipulert

**Sjekklistemetode (*método SIFT*):**
1. **Stop** – Stopp opp før du deler
2. **Investigate** – Undersøk kilden
3. **Find** – Finn bedre dekning
4. **Trace** – Spor til originalen` },
    { id: 'spansk-3-12-4-text-2', type: 'text', content: `## Kritisk tenkning på spansk

**Å uttrykke tvil:**
- *No estoy seguro/a de que esto sea verdad.* (Jeg er ikke sikker på at dette er sant.)
- *Me parece sospechoso que...* (Det virker mistenkelig at...)
- *Habría que verificar esta información.* (Man burde verifisere denne informasjonen.)

**Å kreve bevis:**
- *¿En qué datos se basa esta afirmación?* (Hvilke data bygger denne påstanden på?)
- *¿Quién es la fuente original?* (Hvem er originalkilden?)
- *¿Se ha publicado en un medio fiable?* (Er det publisert i et pålitelig medium?)

**Å analysere perspektiver:**
- *Este artículo tiene un sesgo político claro.* (Denne artikkelen har en tydelig politisk skjevhet.)
- *Solo se presenta un punto de vista.* (Bare ett synspunkt presenteres.)
- *Falta contexto importante.* (Viktig kontekst mangler.)

**Å konkludere:**
- *Después de investigar, puedo concluir que...* (Etter å ha undersøkt, kan jeg konkludere at...)
- *La evidencia sugiere que...* (Bevisene tyder på at...)
- *No hay pruebas suficientes para afirmar que...* (Det er ikke tilstrekkelig bevis for å påstå at...)` },
    { id: 'spansk-3-12-4-example-1', type: 'example', title: 'Eksempel: Faktasjekk', problem: `Vurder denne «nyheten»: "¡URGENTE! Un estudio demuestra que el café cura el cáncer. ¡Comparte antes de que lo censuren!"`, solution: `**Advarselstegn:** 1) Sensasjonell overskrift med store bokstaver og utropstegn. 2) Oppfordring til å dele raskt (skaper hastverk). 3) Antydning om sensur (konspirasjonselement). 4) Ingen kilde til studiet nevnes. 5) Overdreven påstand (kur mot kreft). **Konklusjon:** Dette er høyst sannsynlig en falsk nyhet. Man bør søke etter det påståtte studiet i pålitelige medisinske tidsskrifter og sjekke Maldita.es.` },
    { id: 'spansk-3-12-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-12-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'la desinformación', solution: 'desinformasjon', answer: 'desinformasjon' },
        { label: 'b', task: 'el bulo', solution: 'falsk rykte', answer: 'falsk rykte' },
        { label: 'c', task: 'el sesgo', solution: 'skjevhet/bias', answer: 'skjevhet/bias' },
        { label: 'd', task: 'contrastar información', solution: 'å kryssjekke informasjon', answer: 'å kryssjekke informasjon' },
      ], solution: 'a) desinformasjon, b) falsk rykte, c) skjevhet/bias, d) å kryssjekke informasjon', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-12-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Identifiser advarselstegn i disse overskriftene:', subTasks: [
        { label: 'a', task: '"¡¡¡INCREÍBLE!!! ¡Lo que NO quieren que sepas!"', solution: 'Overdreven tegnsetting, sensasjonelt språk, antydning om sensur', answer: 'Sensasjonelt språk, overdreven tegnsetting, antydning om sensur' },
        { label: 'b', task: '"Científicos confirman nueva vacuna contra la gripe"', solution: 'Ingen tydelige advarselstegn – saklig overskrift. Men man bør sjekke kilden.', answer: 'Ingen tydelige advarselstegn, men bør sjekke kilden.' },
        { label: 'c', task: '"¡COMPARTE ANTES DE QUE LO BORREN!"', solution: 'Hastverk-appell (del før det slettes), store bokstaver, antydning om sensur', answer: 'Hastverk, store bokstaver, antydning om sensur' },
        { label: 'd', task: '"Estudio de Harvard revela beneficios del chocolate"', solution: 'Bruk av autoritet (Harvard) – kan være sant, men man bør verifisere studiet og konteksten.', answer: 'Autoritetsbruk – bør verifiseres i original kilde.' },
      ], solution: 'a) Sensasjonelt, overdreven tegnsetting, sensur-antydning., b) Saklig, men bør sjekkes., c) Hastverk og sensur-antydning., d) Autoritetsbruk – verifiser i original.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-12-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om desinformasjon:', subTasks: [
        { label: 'a', task: 'Hva er forskjellen mellom desinformación og información errónea?', solution: 'La desinformación es falsa información difundida intencionalmente para engañar. La información errónea es falsa pero no se difunde con mala intención; el autor puede creer que es verdad.', answer: 'Desinformación = falsa e intencional. Información errónea = falsa pero sin mala intención.' },
        { label: 'b', task: 'Hvorfor spres falske nyheter så raskt på sosiale medier?', solution: 'Porque las noticias falsas suelen ser más emocionales y sensacionalistas, lo que genera más clics y se comparte más. Los algoritmos favorecen el contenido con más interacciones.', answer: 'Son más emocionales, generan más clics, y los algoritmos las favorecen.' },
        { label: 'c', task: 'Hva er posverdad (postfakta)?', solution: 'Es una situación en la que las emociones y las creencias personales influyen más en la opinión pública que los hechos objetivos. La verdad se vuelve relativa.', answer: 'Cuando las emociones influyen más que los hechos objetivos en la opinión pública.' },
        { label: 'd', task: 'Nevn tre steg du kan ta for å verifisere en nyhet.', solution: 'Primero, verificar la fuente original. Segundo, buscar la misma noticia en otros medios fiables. Tercero, usar herramientas de fact-checking como Maldita.es o Chequeado.', answer: 'Verificar la fuente, buscar en otros medios, usar herramientas de fact-checking.' },
      ], solution: 'a) Desinformación = intencional; información errónea = sin mala intención., b) Son emocionales, generan clics, algoritmos las favorecen., c) Las emociones influyen más que los hechos., d) Verificar fuente, buscar en otros medios, usar fact-checking.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-12-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv analytisk og argumenterende tekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Diskuter hvorfor falske nyheter er farlige for demokratiet.', solution: 'Las noticias falsas erosionan la confianza en las instituciones democráticas y en los medios de comunicación. Cuando los ciudadanos no pueden distinguir la verdad de la mentira, se debilita el debate público informado que es esencial para la democracia. Además, la desinformación puede manipular elecciones y dividir a la sociedad.', answer: 'Las noticias falsas erosionan la confianza en las instituciones y debilitan el debate democrático informado.' },
        { label: 'b', task: 'Argumenter for at kritisk tenkning bør være obligatorisk i skolen.', solution: 'En la era de la información, el pensamiento crítico es una habilidad esencial para todos los ciudadanos. Las escuelas deberían enseñar a los alumnos a verificar fuentes, detectar sesgos y cuestionar la información. Sin esta formación, los jóvenes son vulnerables a la manipulación.', answer: 'El pensamiento crítico es esencial. Las escuelas deben enseñar a verificar fuentes y detectar sesgos.' },
        { label: 'c', task: 'Analyser et eksempel på desinformasjon under pandemien i den spansktalende verden.', solution: 'Durante la pandemia de COVID-19, circularon bulos sobre supuestas curas milagrosas como beber lejía o tomar dióxido de cloro, especialmente en redes sociales latinoamericanas. Estas noticias falsas pusieron en peligro la vida de miles de personas. Organizaciones como Chequeado y Maldita.es trabajaron incansablemente para desmentir esta desinformación.', answer: 'Bulos sobre curas milagrosas (lejía, dióxido de cloro) pusieron vidas en peligro durante el COVID-19.' },
        { label: 'd', task: 'Sammenlign tiltak mot desinformasjon i Spania og Latin-Amerika.', solution: 'España cuenta con Maldita.es como principal organización de fact-checking, apoyada por la UE. En Latinoamérica, iniciativas como Chequeado (Argentina) y ColombiaCheck lideran la verificación. Sin embargo, la desinformación sigue siendo un desafío mayor en regiones con menor acceso a educación digital.', answer: 'Maldita.es (España) y Chequeado/ColombiaCheck (Lat-Am) lideran el fact-checking, pero falta educación digital.' },
      ], solution: 'a) Las noticias falsas erosionan la democracia., b) El pensamiento crítico debe ser obligatorio en la escuela., c) Bulos sobre curas de COVID-19 pusieron vidas en peligro., d) España y Latinoamérica tienen fact-checkers pero falta educación digital.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-12-4-tip-1', type: 'tip', content: `**Husk:** Før du deler noe på sosiale medier, stopp opp og spør deg selv: Er dette verifisert? Hvem er kilden? Sprer jeg fakta eller følelser? En enkel sjekk kan stoppe en falsk nyhet.` },
    { id: 'spansk-3-12-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Falske nyheter og kritisk tenkning**

- **Nøkkelord:** noticias falsas, desinformación, verificar, sesgo, pensamiento crítico
- **Advarselstegn:** Sensasjonelle overskrifter, manglende kilder, hastverk, følelsesladet språk
- **Verktøy:** Maldita.es, Chequeado, ColombiaCheck, SIFT-metoden
- **Uttrykk:** Me parece sospechoso que..., Habría que verificar..., La evidencia sugiere que...` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13: HISTORIA DEL MUNDO HISPANO
// ============================================================================

// 13.1 La conquista y la colonización
export const CHAPTER_SPANSK_3_13_1: TextbookChapter = {
  id: 'spansk-3-13-1',
  courseId: 'spansk-3',
  chapterNumber: '13.1',
  title: 'La conquista y la colonización',
  subtitle: 'Erobring og kolonisering av Amerika',
  description: 'Lær om den spanske erobringen av Amerika, med fokus på Columbus, Cortés og konsekvensene for urfolk.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå hovedtrekkene i den spanske erobringen av Amerika', 'diskutere konsekvensene av koloniseringen for urfolk og europeere'],
  content: [
    { id: 'spansk-3-13-1-intro', type: 'text', content: `## La conquista y la colonización

Den spanske erobringen av Amerika (*la conquista de América*) er en av historiens mest skjellsettende hendelser. Fra Columbus' ankomst i 1492 til etableringen av et enormt koloniimperium endret den verden for alltid. For Spania betydde det rikdom og makt; for urfolkene i Amerika betydde det katastrofe. I dette kapittelet utforsker vi denne komplekse historien.` },
    { id: 'spansk-3-13-1-def-1', type: 'definition', title: 'Erobringsvokabular (vocabulario de la conquista)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la conquista | erobringen |
| la colonización | koloniseringen |
| el conquistador | erobrer |
| los pueblos indígenas | urfolkene |
| el imperio | imperiet |
| la corona española | den spanske kronen |
| la encomienda | tvangsarbeidssystem |
| el virreinato | visekongedømmet |
| la evangelización | kristningen |
| el genocidio | folkemord |
| la resistencia | motstand |
| el legado colonial | koloniarven |` },
    { id: 'spansk-3-13-1-text-1', type: 'text', content: `## Erobringen av Amerika

**Cristóbal Colón (Columbus) – 1492:**
- Seilte fra Spania med tre skip: la Niña, la Pinta og la Santa María
- Trodde han hadde nådd Asia, men landet i Karibia (Bahamas)
- Åpnet veien for spansk kolonisering av hele kontinentet
- Behandlet urfolk brutalt, innførte tvangsarbeid

**Hernán Cortés – Aztekeriket (1519-1521):**
- Ankom Mexico med ca. 500 soldater
- Allierte seg med urfolk som var undertrykt av aztekerne
- Erobret hovedstaden Tenochtitlán (dagens Mexico City)
- Aztekernes keiser Moctezuma II ble drept under konflikten

**Francisco Pizarro – Inkariket (1532-1533):**
- Erobret inkariket i Peru med under 200 soldater
- Tok keiser Atahualpa som gissel og henrettet ham
- Utnyttet indre konflikter i Inkariket
- Grunnla Lima som ny hovedstad

**Konsekvenser for urfolkene:**
- Anslagsvis 90 % av urbefolkningen døde (sykdommer, krig, tvangsarbeid)
- Kulturer, språk og religioner ble undertrykt
- Tvangsarbeid i gruver og på plantasjer (encomienda-systemet)` },
    { id: 'spansk-3-13-1-text-2', type: 'text', content: `## Ulike perspektiver på erobringen

Historien om erobringen ser svært forskjellig ut avhengig av hvem som forteller den:

**Det tradisjonelle spanske perspektivet:**
- Erobringen brakte «sivilisasjon» og kristendom
- *El Día de la Hispanidad* (12. oktober) feires fortsatt i Spania
- Vektlegger kulturutveksling og felles arv

**Urfolksperspektivet:**
- Erobringen var et folkemord (*genocidio*) og kulturdrap
- *El Día de la Resistencia Indígena* (12. oktober i Venezuela og andre land)
- Urfolkssamfunn lever fortsatt med konsekvensene

**Det kritiske historikerperspektivet:**
- Kolonialismen skapte strukturell ulikhet som vedvarer
- *"La conquista no fue un encuentro de culturas, fue una imposición violenta."*
- (Erobringen var ikke et kulturmøte, det var en voldelig påtvingelse.)

**Bartolomé de las Casas (1484-1566):**
- Spansk prest som dokumenterte brutalt folkemord mot urfolk
- Skrev *Brevísima relación de la destrucción de las Indias* (1552)
- En av de første til å argumentere for urfolks rettigheter` },
    { id: 'spansk-3-13-1-example-1', type: 'example', title: 'Eksempel: Ulike perspektiver', problem: `Beskriv erobringen av Tenochtitlán fra to perspektiver.`, solution: `**Spansk perspektiv:** *Cortés liberó a los pueblos sometidos por los aztecas y trajo la fe cristiana a un mundo pagano. La caída de Tenochtitlán fue una victoria de la civilización.*
**Urfolksperspektiv:** *La destrucción de Tenochtitlán fue una tragedia. Los españoles destruyeron una ciudad más grande que cualquier ciudad europea de la época, mataron a miles de personas y arrasaron con una cultura milenaria.*` },
    { id: 'spansk-3-13-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-13-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'la conquista', solution: 'erobringen', answer: 'erobringen' },
        { label: 'b', task: 'los pueblos indígenas', solution: 'urfolkene', answer: 'urfolkene' },
        { label: 'c', task: 'la encomienda', solution: 'tvangsarbeidssystem', answer: 'tvangsarbeidssystem' },
        { label: 'd', task: 'el legado colonial', solution: 'koloniarven', answer: 'koloniarven' },
      ], solution: 'a) erobringen, b) urfolkene, c) tvangsarbeidssystem, d) koloniarven', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-13-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Koble erobreren med riktig rike:', subTasks: [
        { label: 'a', task: 'Hernán Cortés', solution: 'El Imperio azteca (Mexico)', answer: 'El Imperio azteca (Mexico)' },
        { label: 'b', task: 'Francisco Pizarro', solution: 'El Imperio inca (Peru)', answer: 'El Imperio inca (Peru)' },
        { label: 'c', task: 'Cristóbal Colón', solution: 'El Caribe (1492)', answer: 'El Caribe (1492)' },
        { label: 'd', task: 'Bartolomé de las Casas', solution: 'Forkjemper for urfolks rettigheter', answer: 'Forkjemper for urfolks rettigheter' },
      ], solution: 'a) Aztekeriket (Mexico), b) Inkariket (Peru), c) Karibia (1492), d) Urfolks rettigheter', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-13-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om erobringen:', subTasks: [
        { label: 'a', task: 'Hvordan klarte Cortés å erobre aztekeriket med bare 500 soldater?', solution: 'Cortés se alió con pueblos indígenas enemigos de los aztecas, usó armas de fuego y caballos desconocidos por los aztecas, y las enfermedades europeas devastaron a la población indígena.', answer: 'Alianzas con pueblos enemigos de los aztecas, armas superiores y enfermedades europeas.' },
        { label: 'b', task: 'Hva var konsekvensene av erobringen for urbefolkningen?', solution: 'Aproximadamente el 90 % de la población indígena murió por enfermedades, guerras y trabajo forzado. Sus culturas, lenguas y religiones fueron suprimidas.', answer: 'El 90 % murió por enfermedades, guerras y trabajo forzado. Sus culturas fueron suprimidas.' },
        { label: 'c', task: 'Hvem var Bartolomé de las Casas og hva kjempet han for?', solution: 'Fue un sacerdote español que denunció los abusos contra los indígenas en su obra "Brevísima relación de la destrucción de las Indias". Fue uno de los primeros defensores de los derechos humanos de los pueblos indígenas.', answer: 'Sacerdote español que denunció los abusos contra los indígenas y defendió sus derechos.' },
        { label: 'd', task: 'Hvorfor er 12. oktober en omstridt dato?', solution: 'En España se celebra como el Día de la Hispanidad, recordando el "descubrimiento". Pero en muchos países latinoamericanos se conmemora como el Día de la Resistencia Indígena, recordando el inicio de la colonización y el genocidio.', answer: 'España celebra la Hispanidad; muchos países latinoamericanos conmemoran la Resistencia Indígena.' },
      ], solution: 'a) Alianzas, armas superiores y enfermedades., b) 90 % murió; culturas suprimidas., c) Sacerdote que denunció abusos contra indígenas., d) España: Hispanidad; Lat-Am: Resistencia Indígena.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-13-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv reflekterende tekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Diskuter om Spania bør be om unnskyldning for koloniseringen.', solution: 'Esta es una cuestión compleja. Algunos argumentan que España debería pedir perdón formalmente por los crímenes de la colonización, como un paso hacia la reconciliación. Otros sostienen que no se puede juzgar el pasado con valores del presente. Sin embargo, reconocer el sufrimiento causado es fundamental para construir relaciones basadas en el respeto mutuo.', answer: 'Es complejo: algunos piden perdón formal; otros dicen que no se puede juzgar el pasado. Reconocer el sufrimiento es fundamental.' },
        { label: 'b', task: 'Sammenlign den spanske koloniseringen med en annen kolonimakt.', solution: 'La colonización española se centró en la explotación de recursos (oro, plata) y la evangelización forzada. En comparación, la colonización británica en Norteamérica se enfocó más en el asentamiento y la expulsión de los nativos. Ambas causaron sufrimiento inmenso a los pueblos indígenas.', answer: 'España: explotación y evangelización. Gran Bretaña: asentamiento y expulsión. Ambas causaron sufrimiento.' },
        { label: 'c', task: 'Skriv om erobringen fra et aztekisk perspektiv.', solution: 'Cuando los extranjeros llegaron a nuestras tierras, traían armas que escupían fuego y animales enormes que nunca habíamos visto. Nuestro gran emperador Moctezuma intentó negociar, pero fue capturado y asesinado. Nuestra hermosa ciudad de Tenochtitlán fue destruida, y con ella, siglos de cultura y conocimiento.', answer: 'Los extranjeros destruyeron Tenochtitlán, capturaron a Moctezuma y arrasaron siglos de cultura.' },
        { label: 'd', task: 'Diskuter om begrepet «descubrimiento de América» er riktig.', solution: 'El término "descubrimiento" es eurocéntrico porque implica que América no existía antes de la llegada de Colón. En realidad, millones de personas vivían allí con civilizaciones avanzadas. Sería más correcto hablar de "invasión" o "encuentro" desde una perspectiva más equilibrada.', answer: '"Descubrimiento" es eurocéntrico. Millones vivían allí. Mejor decir "invasión" o "encuentro".' },
      ], solution: 'a) Debatible; reconocer el sufrimiento es fundamental., b) España explotó recursos; Gran Bretaña se asentó. Ambas dañaron a los indígenas., c) Perspectiva azteca de la destrucción., d) "Descubrimiento" es eurocéntrico; mejor "invasión" o "encuentro".', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-1-tip-1', type: 'tip', content: `**Husk:** Historien ser forskjellig ut avhengig av hvem som forteller den. Å forstå ulike perspektiver er en nøkkelferdighet i historiefaget – og i spansk.` },
    { id: 'spansk-3-13-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Erobring og kolonisering**

- **Nøkkelord:** conquista, colonización, conquistador, encomienda, evangelización
- **Nøkkelpersoner:** Colón (1492), Cortés (aztekerne), Pizarro (inkaene), Las Casas (urfolks rettigheter)
- **Konsekvenser:** 90 % befolkningsdød, kulturell undertrykkelse, tvangsarbeid
- **Perspektiver:** Spansk (sivilisasjon), urfolk (folkemord), kritisk (strukturell ulikhet)` },
  ],
  exercises: [],
};

// 13.2 Independencia y revolución
export const CHAPTER_SPANSK_3_13_2: TextbookChapter = {
  id: 'spansk-3-13-2',
  courseId: 'spansk-3',
  chapterNumber: '13.2',
  title: 'Independencia y revolución',
  subtitle: 'Uavhengighet og revolusjon i Latin-Amerika',
  description: 'Lær om uavhengighetskampene i Latin-Amerika, med fokus på Bolívar og San Martín.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå hovedtrekkene i de latinamerikanske uavhengighetskampene', 'sammenligne frigjøringsbevegelser i ulike latinamerikanske land'],
  content: [
    { id: 'spansk-3-13-2-intro', type: 'text', content: `## Independencia y revolución

Tidlig på 1800-tallet reiste Latin-Amerika seg mot spansk kolonistyre. Inspirert av den franske og den amerikanske revolusjonen kjempet frigjøringsheltene for **uavhengighet** (*independencia*) og **frihet** (*libertad*). De to mest berømte er **Simón Bolívar** og **José de San Martín**, som frigjorde store deler av kontinentet.` },
    { id: 'spansk-3-13-2-def-1', type: 'definition', title: 'Uavhengighetsvokabular (vocabulario de la independencia)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la independencia | uavhengighet |
| la revolución | revolusjon |
| el/la libertador/a | frigjører |
| la libertad | frihet |
| la colonia | kolonien |
| la metrópoli | moderlandet |
| el criollo | kreol (etterkommer av spanjol født i Amerika) |
| la soberanía | suverenitet |
| la república | republikk |
| la constitución | grunnlov |
| el caudillo | militær leder/diktator |
| la emancipación | frigjøring |` },
    { id: 'spansk-3-13-2-text-1', type: 'text', content: `## Frigjøringsheltene

**Simón Bolívar (1783-1830) – «El Libertador»:**
- Født i Caracas, Venezuela, i en rik kreolfamilie
- Frigjorde Venezuela, Colombia, Ecuador, Peru og Bolivia
- Drømte om et forent Latin-Amerika (*la Gran Colombia*)
- Bolivia er oppkalt etter ham
- Berømt sitat: *"Si la naturaleza se opone, lucharemos contra ella y haremos que nos obedezca."* (Hvis naturen står imot, kjemper vi mot den og tvinger den til å adlyde oss.)

**José de San Martín (1778-1850):**
- Argentinsk general, frigjorde Argentina, Chile og Peru
- Krysset Andesfjellene med sin hær i 1817 – en legendarisk militær bragd
- Møtte Bolívar i Guayaquil (1822) og trakk seg tilbake til fordel for Bolívar
- Regnes som nasjonalhelten i Argentina

**Andre viktige skikkelser:**
- **Miguel Hidalgo** (Mexico) – Presten som startet den mexicanske uavhengighetskrigen i 1810
- **Bernardo O'Higgins** (Chile) – Chiles første statsoverhode etter uavhengigheten
- **José Martí** (Cuba) – Poet og frigjøringshelt, kjempet for cubansk uavhengighet fra Spania (1895)` },
    { id: 'spansk-3-13-2-text-2', type: 'text', content: `## Årsaker og konsekvenser

**Årsaker til uavhengighetskampene (*causas*):**
- **Opplysningstiden:** Ideer om frihet, likhet og demokrati
- **Kreolenes misnøye:** Rike kreoler (criollos) hadde ikke politisk makt
- **Napoleons invasjon av Spania (1808):** Svekket den spanske kronen
- **Inspirasjon:** Den franske revolusjonen (1789) og USAs uavhengighet (1776)

**Kronologi:**
- 1810: Mexico, Argentina, Chile, Colombia starter uavhengighetskamper
- 1821: Mexico blir uavhengig
- 1822: Brazil blir uavhengig (fra Portugal)
- 1824: Slaget ved Ayacucho – siste store slag mot Spania i Sør-Amerika
- 1898: Cuba og Puerto Rico – Spanias siste kolonier i Amerika

**Konsekvenser (*consecuencias*):**
- Nye uavhengige republikker, men politisk ustabilitet
- Caudillos (militære ledere) tok makten i mange land
- Urfolk og slaver ble ikke frigjort – ulikheten vedvarte
- Bolívars drøm om et forent Latin-Amerika ble aldri realisert
- Grenser trukket av kolonimaktene skapte konflikter` },
    { id: 'spansk-3-13-2-example-1', type: 'example', title: 'Eksempel: Bolívar vs. San Martín', problem: `Sammenlign Simón Bolívar og José de San Martín.`, solution: `**Likheter:** Begge var militære ledere som frigjorde store deler av Sør-Amerika fra spansk kolonistyre. Begge var inspirert av opplysningstidens idealer.
**Forskjeller:** Bolívar frigjorde nord (Venezuela, Colombia, Ecuador, Peru, Bolivia) og drømte om politisk enhet. San Martín frigjorde sør (Argentina, Chile, Peru) og trakk seg frivillig tilbake fra makten. Bolívar er mer kjent internasjonalt, men San Martín er like viktig i Sør-Amerikas historie.` },
    { id: 'spansk-3-13-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-13-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'el/la libertador/a', solution: 'frigjører', answer: 'frigjører' },
        { label: 'b', task: 'el criollo', solution: 'kreol (etterkommer av spanjol født i Amerika)', answer: 'kreol (etterkommer av spanjol født i Amerika)' },
        { label: 'c', task: 'la soberanía', solution: 'suverenitet', answer: 'suverenitet' },
        { label: 'd', task: 'el caudillo', solution: 'militær leder/diktator', answer: 'militær leder/diktator' },
      ], solution: 'a) frigjører, b) kreol, c) suverenitet, d) militær leder/diktator', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-13-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Koble personen med riktig land:', subTasks: [
        { label: 'a', task: 'Simón Bolívar', solution: 'Venezuela, Colombia, Ecuador, Peru, Bolivia', answer: 'Venezuela, Colombia, Ecuador, Peru, Bolivia' },
        { label: 'b', task: 'José de San Martín', solution: 'Argentina, Chile, Peru', answer: 'Argentina, Chile, Peru' },
        { label: 'c', task: 'Miguel Hidalgo', solution: 'México', answer: 'México' },
        { label: 'd', task: 'José Martí', solution: 'Cuba', answer: 'Cuba' },
      ], solution: 'a) Venezuela, Colombia, Ecuador, Peru, Bolivia, b) Argentina, Chile, Peru, c) México, d) Cuba', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-13-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om uavhengighetskampene:', subTasks: [
        { label: 'a', task: 'Nevn tre årsaker til de latinamerikanske uavhengighetskampene.', solution: 'Las ideas de la Ilustración sobre libertad e igualdad, la insatisfacción de los criollos que no tenían poder político, y la invasión napoleónica de España que debilitó la corona.', answer: 'La Ilustración, la insatisfacción de los criollos, y la invasión napoleónica de España.' },
        { label: 'b', task: 'Hva var la Gran Colombia og hvorfor mislyktes den?', solution: 'Fue el sueño de Bolívar de unir Venezuela, Colombia, Ecuador y Panamá en una sola nación. Fracasó por las rivalidades entre los líderes regionales, las diferencias culturales y los intereses económicos divergentes.', answer: 'Sueño de Bolívar de unir varios países. Fracasó por rivalidades, diferencias y intereses divergentes.' },
        { label: 'c', task: 'Hvorfor ble ikke urfolk og slaver frigjort etter uavhengigheten?', solution: 'Porque las revoluciones fueron lideradas por criollos ricos que buscaban poder político, no justicia social. La estructura colonial de desigualdad se mantuvo, beneficiando a las élites blancas.', answer: 'Las revoluciones fueron lideradas por criollos ricos que no buscaban justicia social.' },
        { label: 'd', task: 'Hva var betydningen av slaget ved Ayacucho (1824)?', solution: 'Fue la última gran batalla contra España en Sudamérica. La victoria de las fuerzas independentistas selló definitivamente la independencia de los países sudamericanos.', answer: 'Última batalla contra España en Sudamérica, que selló la independencia definitiva.' },
      ], solution: 'a) Ilustración, criollos insatisfechos, invasión napoleónica., b) Sueño de unidad que fracasó por rivalidades., c) Criollos ricos no buscaban justicia social., d) Última batalla que selló la independencia sudamericana.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-13-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv reflekterende tekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Diskuter om uavhengigheten virkelig førte til frihet for alle.', solution: 'La independencia liberó a los países latinoamericanos del dominio español, pero no trajo libertad para todos. Los pueblos indígenas, los esclavos y las mujeres quedaron excluidos del poder. La independencia benefició principalmente a los criollos ricos, manteniendo las estructuras coloniales de desigualdad.', answer: 'La independencia no trajo libertad para todos: indígenas, esclavos y mujeres quedaron excluidos.' },
        { label: 'b', task: 'Sammenlign de latinamerikanske og den norske uavhengighetskampen.', solution: 'Noruega logró su independencia de Suecia en 1905 de forma pacífica mediante un referéndum. En contraste, las independencias latinoamericanas fueron guerras sangrientas que duraron décadas. Sin embargo, ambos procesos fueron impulsados por el deseo de soberanía y autodeterminación.', answer: 'Noruega: independencia pacífica en 1905. Latinoamérica: guerras sangrientas. Ambos: deseo de soberanía.' },
        { label: 'c', task: 'Er Bolívars drøm om et forent Latin-Amerika fortsatt aktuell?', solution: 'El sueño de Bolívar sigue inspirando movimientos de integración regional como MERCOSUR y CELAC. Sin embargo, las diferencias políticas, económicas y culturales entre los países hacen difícil una unión real. La idea de solidaridad latinoamericana permanece como un ideal poderoso.', answer: 'El sueño inspira organizaciones como MERCOSUR, pero las diferencias dificultan la unión real.' },
        { label: 'd', task: 'Hvorfor er Miguel Hidalgo viktig for Mexico?', solution: 'Miguel Hidalgo fue el sacerdote que inició la lucha por la independencia mexicana el 16 de septiembre de 1810 con el famoso "Grito de Dolores". Aunque fue capturado y ejecutado un año después, su levantamiento inspiró a otros a continuar la lucha hasta lograr la independencia en 1821.', answer: 'Hidalgo inició la independencia mexicana con el Grito de Dolores en 1810, inspirando la lucha.' },
      ], solution: 'a) La independencia no trajo libertad para todos., b) Noruega pacífica; Latinoamérica violenta. Ambos buscaron soberanía., c) El sueño de Bolívar inspira pero es difícil de realizar., d) Hidalgo inició la independencia mexicana con el Grito de Dolores.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-2-tip-1', type: 'tip', content: `**Husk:** De latinamerikanske uavhengighetskampene er grunnleggende for å forstå politikken i regionen i dag. Mange av konfliktene som startet da, preger fortsatt latinamerikanske samfunn.` },
    { id: 'spansk-3-13-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Uavhengighet og revolusjon**

- **Nøkkelord:** independencia, libertador, criollo, soberanía, caudillo
- **Nøkkelpersoner:** Bolívar (nord), San Martín (sør), Hidalgo (Mexico), Martí (Cuba)
- **Årsaker:** Opplysningstiden, kreolenes misnøye, Napoleons invasjon
- **Konsekvenser:** Nye republikker, men politisk ustabilitet, vedvarende ulikhet` },
  ],
  exercises: [],
};

// 13.3 Dictaduras y democracia
export const CHAPTER_SPANSK_3_13_3: TextbookChapter = {
  id: 'spansk-3-13-3',
  courseId: 'spansk-3',
  chapterNumber: '13.3',
  title: 'Dictaduras y democracia',
  subtitle: 'Diktaturer og demokrati i den spansktalende verden',
  description: 'Utforsk diktaturer i Spania og Latin-Amerika, inkludert Franco, Pinochet og den argentinske militærjuntaen.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå diktaturenes historie i den spansktalende verden', 'diskutere overgangen fra diktatur til demokrati'],
  content: [
    { id: 'spansk-3-13-3-intro', type: 'text', content: `## Dictaduras y democracia

1900-tallet var preget av diktaturer (*dictaduras*) i den spansktalende verden. Fra **Franco** i Spania til **Pinochet** i Chile og militærjuntaen i Argentina – millioner levde under autoritære regimer som undertrykte frihet og menneskerettigheter. Å forstå denne historien er avgjørende for å forstå demokratiets verdi i dag.` },
    { id: 'spansk-3-13-3-def-1', type: 'definition', title: 'Diktatur- og demokrativokabular (vocabulario político)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la dictadura | diktatur |
| la democracia | demokrati |
| el dictador | diktator |
| el golpe de estado | statskupp |
| la junta militar | militærjunta |
| los derechos humanos | menneskerettigheter |
| la represión | undertrykkelse |
| los desaparecidos | de forsvunne |
| la tortura | tortur |
| el exilio | eksil |
| la transición democrática | demokratisk overgang |
| las elecciones libres | frie valg |` },
    { id: 'spansk-3-13-3-text-1', type: 'text', content: `## Diktaturer i den spansktalende verden

**Francisco Franco – Spania (1939-1975):**
- Tok makten etter den spanske borgerkrigen (1936-1939)
- Undertrykte all politisk opposisjon, regionale språk (katalansk, baskisk, galisisk) og kulturer
- Tusenvis ble henrettet eller fengslet
- Spania var isolert fra Europa i flere tiår
- Diktaturet varte til Francos død i 1975

**Augusto Pinochet – Chile (1973-1990):**
- Tok makten gjennom et militærkupp mot den demokratisk valgte presidenten Salvador Allende
- Kuppet ble støttet av USA under den kalde krigen
- Over 3 000 mennesker ble drept, 30 000 torturert
- Mange chilenere flyktet i eksil, inkludert til Norge
- Gjennomførte liberale økonomiske reformer mens han undertrykte all politisk frihet

**Argentinas militærjunta (1976-1983) – «La Guerra Sucia» (Den skitne krigen):**
- Militærkupp i 1976 mot president Isabel Perón
- Opptil **30 000 desaparecidos** (forsvunne) – bortført, torturert og drept
- **Las Madres de Plaza de Mayo:** Mødre som demonstrerte ukentlig for å finne sine forsvunne barn
- Juntaen falt etter Falklandskrigen (1982) mot Storbritannia` },
    { id: 'spansk-3-13-3-text-2', type: 'text', content: `## Fra diktatur til demokrati

**Spania – La Transición (1975-1982):**
- Etter Francos død ble Juan Carlos I konge
- Overgang til demokrati uten borgerkrig – et historisk eksempel
- Ny grunnlov i 1978 garanterte demokrati og regionale autonomier
- *El Pacto del Olvido* (Glemselspakten): Beslutning om å ikke straffeforfølge Franco-regimet

**Chile – La Transición (1988-1990):**
- Folkeavstemning i 1988: Chilenerne stemte NEI til å forlenge Pinochets styre
- Frie valg i 1989: Patricio Aylwin ble president
- Pinochet beholdt makt som øverstkommanderende for hæren til 1998

**Argentina – Juicio a las Juntas (1985):**
- Argentina stilte juntaledern for retten – unikt i Latin-Amerika
- Domstolen dømte flere generaler for forbrytelser mot menneskeheten
- Las Madres de Plaza de Mayo fortsetter å kjempe for rettferdighet

**Nyttige uttrykk:**
- *La democracia no se regala, se conquista.* (Demokratiet er ikke en gave, det er noe man kjemper for.)
- *Nunca más.* (Aldri mer. – Slagord mot diktatur i Argentina.)
- *Recordar para no repetir.* (Å huske for å ikke gjenta.)` },
    { id: 'spansk-3-13-3-example-1', type: 'example', title: 'Eksempel: Sammenligning av diktaturer', problem: `Sammenlign Franco-diktaturet i Spania med Pinochet-diktaturet i Chile.`, solution: `**Likheter:** Begge var militære diktaturer som undertrykte politisk opposisjon med vold, tortur og henrettelser. Begge varte i flere tiår og kontrollerte mediene.
**Forskjeller:** Franco tok makten etter en borgerkrig og styrte i 36 år. Pinochet tok makten gjennom et kupp mot en demokratisk valgt president og styrte i 17 år. Spania hadde en fredelig overgang til demokrati, mens Chile hadde en folkeavstemning. Argentina var det eneste landet som stilte diktatorene for retten.` },
    { id: 'spansk-3-13-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-13-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'el golpe de estado', solution: 'statskupp', answer: 'statskupp' },
        { label: 'b', task: 'los desaparecidos', solution: 'de forsvunne', answer: 'de forsvunne' },
        { label: 'c', task: 'la transición democrática', solution: 'demokratisk overgang', answer: 'demokratisk overgang' },
        { label: 'd', task: 'la represión', solution: 'undertrykkelse', answer: 'undertrykkelse' },
      ], solution: 'a) statskupp, b) de forsvunne, c) demokratisk overgang, d) undertrykkelse', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-13-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Koble diktatoren med riktig land og periode:', subTasks: [
        { label: 'a', task: 'Francisco Franco', solution: 'España (1939-1975)', answer: 'España (1939-1975)' },
        { label: 'b', task: 'Augusto Pinochet', solution: 'Chile (1973-1990)', answer: 'Chile (1973-1990)' },
        { label: 'c', task: 'La junta militar', solution: 'Argentina (1976-1983)', answer: 'Argentina (1976-1983)' },
        { label: 'd', task: 'Salvador Allende', solution: 'President demokratisk valgt i Chile, styrtet av Pinochet', answer: 'President demokratisk valgt i Chile, styrtet av Pinochet' },
      ], solution: 'a) España (1939-1975), b) Chile (1973-1990), c) Argentina (1976-1983), d) Demokratisk president styrtet av Pinochet', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-13-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om diktaturer og demokrati:', subTasks: [
        { label: 'a', task: 'Hvem var Las Madres de Plaza de Mayo og hva kjempet de for?', solution: 'Fueron madres argentinas que se reunían cada jueves en la Plaza de Mayo para exigir información sobre sus hijos desaparecidos durante la dictadura militar. Se convirtieron en un símbolo mundial de la lucha por los derechos humanos.', answer: 'Madres que exigían información sobre sus hijos desaparecidos durante la dictadura argentina.' },
        { label: 'b', task: 'Hva var el Pacto del Olvido i Spania?', solution: 'Fue un acuerdo tácito durante la Transición española de no investigar ni juzgar los crímenes del franquismo, para facilitar una transición pacífica a la democracia. Es muy controvertido porque muchas víctimas nunca obtuvieron justicia.', answer: 'Acuerdo de no investigar crímenes del franquismo para facilitar la transición. Muy controvertido.' },
        { label: 'c', task: 'Hvorfor støttet USA kuppet mot Allende i Chile?', solution: 'Durante la Guerra Fría, EE.UU. temía que el gobierno socialista de Allende pudiera alinear a Chile con la Unión Soviética. La CIA apoyó activamente el golpe de estado para proteger los intereses geopolíticos y económicos estadounidenses.', answer: 'EE.UU. temía el socialismo de Allende durante la Guerra Fría y apoyó el golpe para sus intereses.' },
        { label: 'd', task: 'Hva betyr uttrykket «Nunca más»?', solution: 'Significa "nunca más" y es el título del informe sobre las violaciones de derechos humanos durante la dictadura argentina. Se ha convertido en un lema universal contra las dictaduras y la violencia estatal.', answer: '"Nunca más" = aldri mer. Título del informe sobre crímenes de la dictadura argentina.' },
      ], solution: 'a) Madres que buscaban a sus hijos desaparecidos., b) Acuerdo de no juzgar crímenes franquistas., c) EE.UU. temía el socialismo durante la Guerra Fría., d) Lema contra dictaduras, título del informe argentino.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-13-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv reflekterende tekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Diskuter om det er riktig å «glemme» fortidens forbrytelser for fredens skyld.', solution: 'El olvido puede facilitar la paz a corto plazo, como ocurrió en España con el Pacto del Olvido. Sin embargo, las víctimas merecen verdad y justicia. La experiencia de Argentina demuestra que enfrentar el pasado, aunque doloroso, es necesario para construir una democracia sólida.', answer: 'El olvido facilita la paz temporal, pero las víctimas merecen justicia. Enfrentar el pasado es necesario.' },
        { label: 'b', task: 'Hvorfor er det viktig å lære om diktaturene i dag?', solution: 'Es fundamental aprender sobre las dictaduras para reconocer las señales de autoritarismo y defender la democracia. Como dice el lema: "Recordar para no repetir". Los jóvenes deben conocer esta historia para valorar los derechos y libertades que hoy damos por sentados.', answer: 'Para reconocer autoritarismo, defender la democracia y valorar nuestros derechos.' },
        { label: 'c', task: 'Sammenlign overgangen til demokrati i Spania og Argentina.', solution: 'España optó por una transición pactada sin juicios, mientras que Argentina juzgó a los líderes de la junta militar. El modelo español fue más pacífico pero dejó heridas sin cerrar. El modelo argentino fue más doloroso pero sentó un precedente mundial de justicia contra dictadores.', answer: 'España: transición sin juicios. Argentina: juicios a los dictadores. Modelos diferentes con consecuencias distintas.' },
        { label: 'd', task: 'Skriv om Las Madres de Plaza de Mayo fra deres perspektiv.', solution: 'Cada jueves marchamos en la Plaza de Mayo con nuestros pañuelos blancos, buscando a nuestros hijos que el gobierno nos arrebató. Nos llaman locas, pero no nos callaremos hasta saber la verdad. Nuestros hijos no son números: son personas con nombres, sueños y familias que los esperan.', answer: 'Marchamos cada jueves buscando a nuestros hijos. No nos callaremos hasta saber la verdad.' },
      ], solution: 'a) El olvido facilita la paz pero las víctimas merecen justicia., b) Para reconocer autoritarismo y valorar la democracia., c) España sin juicios; Argentina con juicios. Modelos diferentes., d) Perspectiva de las Madres buscando verdad y justicia.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-3-tip-1', type: 'tip', content: `**Husk:** Demokrati er ikke noe som kommer av seg selv. Det krever aktive borgere som forsvarer menneskerettigheter og frihet. Historien om diktaturene lærer oss å aldri ta demokratiet for gitt.` },
    { id: 'spansk-3-13-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Diktaturer og demokrati**

- **Nøkkelord:** dictadura, golpe de estado, desaparecidos, transición, derechos humanos
- **Diktaturer:** Franco (Spania 1939-75), Pinochet (Chile 1973-90), Junta (Argentina 1976-83)
- **Overgang:** Spania (fredelig pakt), Chile (folkeavstemning), Argentina (rettssaker)
- **Arv:** Nunca más, Las Madres de Plaza de Mayo, demokratiets verdi` },
  ],
  exercises: [],
};

// 13.4 La memoria histórica
export const CHAPTER_SPANSK_3_13_4: TextbookChapter = {
  id: 'spansk-3-13-4',
  courseId: 'spansk-3',
  chapterNumber: '13.4',
  title: 'La memoria histórica',
  subtitle: 'Historisk minne og forsoningsprosesser',
  description: 'Utforsk begrepet historisk minne, massegraver i Spania og sannhetskommisjoner i Latin-Amerika.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå begrepet historisk minne i spansktalende land', 'diskutere forsoningsprosesser og rettferdighet etter konflikter'],
  content: [
    { id: 'spansk-3-13-4-intro', type: 'text', content: `## La memoria histórica

Hva gjør et samfunn med en vond fortid? Skal man glemme eller huske? Straffe eller tilgi? **Historisk minne** (*la memoria histórica*) handler om hvordan samfunn forholder seg til sin vanskelige historie. I den spansktalende verden er dette spesielt aktuelt etter tiår med diktaturer, borgerkriger og menneskerettighetsbrudd.` },
    { id: 'spansk-3-13-4-def-1', type: 'definition', title: 'Historisk minne-vokabular (vocabulario de la memoria histórica)', content: `**Nøkkelord:**

| Spansk | Norsk |
|--------|-------|
| la memoria histórica | historisk minne |
| la reconciliación | forsoning |
| la justicia transicional | overgangsrettferdighet |
| la comisión de la verdad | sannhetskommisjon |
| la fosa común | massegrav |
| la reparación | oppreisning |
| la impunidad | straffefrihet |
| la víctima | offer |
| el testimonio | vitnesbyrd |
| la dignidad | verdighet |
| el perdón | tilgivelse |
| el olvido | glemsel |` },
    { id: 'spansk-3-13-4-text-1', type: 'text', content: `## Historisk minne i Spania

**Massegraver fra borgerkrigen (1936-1939):**
- Over 100 000 mennesker ligger fortsatt i **massegraver** (*fosas comunes*) over hele Spania
- Familier har kjempet i tiår for å finne og identifisere sine slektninger
- Under Franco var det forbudt å lete etter ofrene

**Lov om historisk minne (Ley de Memoria Histórica, 2007):**
- Anerkjente ofrene for borgerkrigen og Franco-diktaturet
- Ga rett til å åpne massegraver og identifisere ofre
- Fjernet Franco-symboler fra offentlige steder
- Opphevet dommer fra Franco-regimet

**Lov om demokratisk minne (Ley de Memoria Democrática, 2022):**
- Styrket rettigheter for ofre og deres familier
- Opprettet DNA-bank for å identifisere levninger
- Forbød Franco-hyllester og symboler
- Omstridt: noen mener det åpner gamle sår; andre mener det er rettferdighet

**El Valle de los Caídos / Valle de Cuelgamuros:**
- Stort monument bygget av tvangsarbeidere under Franco
- Franco var gravlagt her til 2019, da levningene ble flyttet
- Symboliserer debatten om historisk minne i Spania` },
    { id: 'spansk-3-13-4-text-2', type: 'text', content: `## Sannhetskommisjoner i Latin-Amerika

Flere latinamerikanske land har brukt **sannhetskommisjoner** (*comisiones de la verdad*) for å bearbeide sin vonde fortid:

**Argentina – CONADEP (1983):**
- Kommisjon ledet av forfatteren Ernesto Sabato
- Dokumenterte 8 960 forsvinninger (reelt tall antatt mye høyere)
- Rapporten *Nunca Más* ble en internasjonal bestselger
- Førte til rettssaker mot juntaledern

**Chile – Comisión Rettig (1991):**
- Dokumenterte 2 279 drepte og forsvunne under Pinochet
- Anbefalte oppreisning til familiene
- Comisión Valech (2004) dokumenterte i tillegg over 28 000 tilfeller av tortur

**Guatemala – Comisión de Esclarecimiento Histórico (1999):**
- Dokumenterte 200 000 drepte i borgerkrigen (1960-1996)
- 93 % av overgrepene ble begått av staten
- Konkluderte med at det hadde skjedd **folkemord** mot maya-folket

**Colombia – Comisión de la Verdad (2022):**
- Dokumenterte konsekvensene av over 50 år med væpnet konflikt
- Over 260 000 drepte, 80 000 forsvunne
- Del av fredsavtalen med FARC-geriljaen

*"La verdad es el primer paso hacia la reconciliación."*
(Sannheten er det første steget mot forsoning.)` },
    { id: 'spansk-3-13-4-example-1', type: 'example', title: 'Eksempel: Dilemmaet mellom glemsel og minne', problem: `Diskuter dilemmaet mellom glemsel (olvido) og minne (memoria) etter en konflikt.`, solution: `**For glemsel (olvido):** Å glemme kan gjøre det lettere å gå videre og bygge fred. Spanias Pacto del Olvido muliggjorde en fredelig overgang til demokrati uten borgerkrig.
**For minne (memoria):** Ofrene har rett til sannhet og rettferdighet. Argentinas Nunca Más viser at å konfrontere fortiden styrker demokratiet. Uten minne risikerer man å gjenta historiens feil.
**Konklusjon:** De fleste eksperter mener i dag at sannhet og minne er nødvendig for varig forsoning, selv om prosessen er smertefull.` },
    { id: 'spansk-3-13-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-13-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'la fosa común', solution: 'massegrav', answer: 'massegrav' },
        { label: 'b', task: 'la comisión de la verdad', solution: 'sannhetskommisjon', answer: 'sannhetskommisjon' },
        { label: 'c', task: 'la reconciliación', solution: 'forsoning', answer: 'forsoning' },
        { label: 'd', task: 'la impunidad', solution: 'straffefrihet', answer: 'straffefrihet' },
      ], solution: 'a) massegrav, b) sannhetskommisjon, c) forsoning, d) straffefrihet', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-13-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Koble sannhetskommisjonen med riktig land:', subTasks: [
        { label: 'a', task: 'CONADEP / Nunca Más', solution: 'Argentina', answer: 'Argentina' },
        { label: 'b', task: 'Comisión Rettig', solution: 'Chile', answer: 'Chile' },
        { label: 'c', task: 'Comisión de Esclarecimiento Histórico', solution: 'Guatemala', answer: 'Guatemala' },
        { label: 'd', task: 'Comisión de la Verdad (2022)', solution: 'Colombia', answer: 'Colombia' },
      ], solution: 'a) Argentina, b) Chile, c) Guatemala, d) Colombia', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-13-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene om historisk minne:', subTasks: [
        { label: 'a', task: 'Hva er formålet med en sannhetskommisjon?', solution: 'Investigar y documentar las violaciones de derechos humanos durante un conflicto o dictadura, para que la sociedad conozca la verdad y las víctimas obtengan reconocimiento y reparación.', answer: 'Investigar violaciones de derechos humanos para que se conozca la verdad y las víctimas obtengan reparación.' },
        { label: 'b', task: 'Hvorfor er det fortsatt massegraver i Spania etter nesten 90 år?', solution: 'Porque durante la dictadura de Franco fue prohibido buscar a las víctimas, y durante la Transición se adoptó un pacto de silencio. Solo a partir de 2007 se aprobaron leyes para abrir las fosas comunes.', answer: 'Franco lo prohibió, la Transición pactó silencio, y las leyes llegaron tarde (2007).' },
        { label: 'c', task: 'Hva avslørte sannhetskommisjonen i Guatemala?', solution: 'Reveló que durante la guerra civil guatemalteca murieron 200 000 personas, que el 93 % de las atrocidades fueron cometidas por el Estado, y que se cometió genocidio contra el pueblo maya.', answer: '200 000 muertos, 93 % por el Estado, genocidio contra el pueblo maya.' },
        { label: 'd', task: 'Hva er forskjellen mellom justicia transicional og vanlig rettsoppgjør?', solution: 'La justicia transicional busca equilibrar la necesidad de justicia con la necesidad de paz y reconciliación después de un conflicto. Puede incluir amnistías parciales, comisiones de la verdad y reparaciones, además de juicios penales.', answer: 'Equilibra justicia con paz/reconciliación. Incluye amnistías, verdad, reparaciones y juicios.' },
      ], solution: 'a) Investigar violaciones de DD.HH. para verdad y reparación., b) Franco prohibió buscar; la Transición pactó silencio., c) 200 000 muertos, 93 % por el Estado, genocidio maya., d) Equilibra justicia con paz mediante amnistías, verdad y reparaciones.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-13-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv reflekterende tekst (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Diskuter om tilgivelse er mulig etter folkemord.', solution: 'El perdón después de un genocidio es extremadamente difícil y no puede exigirse a las víctimas. Sin embargo, la verdad y el reconocimiento del sufrimiento son pasos necesarios. El perdón, si llega, debe ser voluntario y no puede reemplazar la justicia. Como demuestran Guatemala y Argentina, la verdad es el primer paso hacia cualquier forma de reconciliación.', answer: 'El perdón no puede exigirse. La verdad y la justicia son pasos previos necesarios para la reconciliación.' },
        { label: 'b', task: 'Sammenlign Spanias og Argentinas tilnærming til historisk minne.', solution: 'España optó por el olvido durante la Transición, lo que permitió una paz inmediata pero dejó a miles de víctimas sin justicia. Argentina eligió confrontar su pasado con el informe Nunca Más y juicios a los dictadores. Hoy, España intenta recuperar su memoria histórica con nuevas leyes, mientras Argentina es un referente mundial en justicia transicional.', answer: 'España eligió olvido; Argentina confrontó su pasado. España ahora recupera su memoria; Argentina es referente mundial.' },
        { label: 'c', task: 'Hvorfor er vitnesbyrd (testimonios) viktige for historisk minne?', solution: 'Los testimonios de las víctimas dan voz a quienes fueron silenciados por la represión. Permiten documentar la verdad desde la perspectiva humana, más allá de los datos y las cifras. Además, los testimonios tienen un poder educativo enorme: conectan a las nuevas generaciones con una historia que no deben olvidar.', answer: 'Dan voz a los silenciados, documentan la verdad humana y educan a nuevas generaciones.' },
        { label: 'd', task: 'Skriv et kort vitnesbyrd (testimonio) fra perspektivet til en familiemedlem som leter etter en forsvunnet person.', solution: 'Mi hermano desapareció una noche de junio de 1977. Unos hombres se lo llevaron de su casa sin explicación. Durante 40 años he buscado la verdad: ¿dónde está? ¿Qué le hicieron? Solo pido saber para poder cerrar esta herida que nunca sana. Porque sin verdad, no hay paz posible.', answer: 'Mi hermano desapareció en 1977. Llevo 40 años buscando la verdad. Sin verdad, no hay paz.' },
      ], solution: 'a) El perdón no puede exigirse; la verdad es el primer paso., b) España: olvido; Argentina: justicia. Modelos opuestos., c) Los testimonios dan voz a los silenciados y educan., d) Testimonio de un familiar que busca la verdad.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-13-4-tip-1', type: 'tip', content: `**Husk:** Historisk minne handler ikke bare om fortiden, men om verdiene vi vil bygge samfunnet vårt på: sannhet, rettferdighet, verdighet og forsoning. Å lære om andre lands erfaringer kan hjelpe oss å forstå universelle menneskerettigheter bedre.` },
    { id: 'spansk-3-13-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Historisk minne og forsoning**

- **Nøkkelord:** memoria histórica, reconciliación, comisión de la verdad, fosa común, impunidad
- **Spania:** Massegraver, Ley de Memoria Histórica (2007), Ley de Memoria Democrática (2022)
- **Sannhetskommisjoner:** Argentina (CONADEP), Chile (Rettig), Guatemala, Colombia
- **Dilemma:** Glemsel vs. minne – sannhet og rettferdighet som grunnlag for forsoning` },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const SPANSK_3_CHAPTERS_11_13: TextbookChapter[] = [
  CHAPTER_SPANSK_3_11_1,
  CHAPTER_SPANSK_3_11_2,
  CHAPTER_SPANSK_3_11_3,
  CHAPTER_SPANSK_3_11_4,
  CHAPTER_SPANSK_3_12_1,
  CHAPTER_SPANSK_3_12_2,
  CHAPTER_SPANSK_3_12_3,
  CHAPTER_SPANSK_3_12_4,
  CHAPTER_SPANSK_3_13_1,
  CHAPTER_SPANSK_3_13_2,
  CHAPTER_SPANSK_3_13_3,
  CHAPTER_SPANSK_3_13_4,
];
