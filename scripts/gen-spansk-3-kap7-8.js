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
// SPANSK 3 CHAPTERS 7-8
// ============================================================================
const s3ch7 = {
  title: 'ECONOMÍA Y COMERCIO',
  subs: [
    mkSub('7.1', 'Economía global', 'Globaløkonomi og spansktalende markeder',
      'Lær vokabular og begreper knyttet til globaløkonomi og spansktalende markeder.',
      ['forstå økonomiske begreper på spansk', 'diskutere globaløkonomi'],
      'Økonomisk vokabular (vocabulario económico)',
      `**Sentrale økonomiske begreper:**\n\n| Spansk | Norsk |\n|--------|-------|\n| el PIB (Producto Interior Bruto) | BNP (bruttonasjonalprodukt) |\n| la inflación | inflasjonen |\n| el desempleo / el paro | arbeidsledighet |\n| el mercado | markedet |\n| el crecimiento económico | økonomisk vekst |\n| la deuda pública | offentlig gjeld |\n| el tipo de cambio | valutakurs |\n| la inversión extranjera | utenlandsk investering |\n\n**Definisjon:** Globaløkonomi handler om hvordan land er knyttet sammen gjennom handel, investeringer og finansmarkeder. Spansktalende land utgjør en betydelig del av verdensøkonomien.`,
      'Globaløkonomien påvirker alle land, og den spansktalende verden spiller en stadig viktigere rolle. I dette kapittelet lærer du å forstå og diskutere økonomiske temaer på spansk.',
      ['## Spansktalende økonomier\n\n**De største økonomiene (etter BNP):**\n1. **México** - Nest største økonomi i Latin-Amerika\n2. **España** - Fjerde største i eurosonen\n3. **Argentina** - Tredje største i Latin-Amerika\n4. **Colombia** - Voksende økonomi\n5. **Chile** - Mest stabil økonomi i regionen\n\nTil sammen har de spansktalende landene over 600 millioner innbyggere og representerer et enormt marked.',
       '## Økonomiske utfordringer\n\nFelles utfordringer i spansktalende land:\n- **Desigualdad** (ulikhet) - Stor forskjell mellom rik og fattig\n- **Economía informal** - Mange jobber utenfor det formelle systemet\n- **Dependencia de materias primas** - Avhengighet av råvarer\n- **Fuga de cerebros** - Hjerneflukt til andre land\n\nNoen land har også utfordringer med **inflación** (inflasjon) og **deuda externa** (utenlandsgjeld).'],
      [{ title: 'Økonomisk begrep', problem: 'Hva betyr PIB, og hvorfor er det viktig?', solution: '**PIB** (Producto Interior Bruto) er verdien av alle varer og tjenester produsert i et land i løpet av ett år. Det brukes til å måle størrelsen på en økonomi.' },
       { title: 'Sammenligning', problem: 'Sammenlign Spanias og Mexicos økonomi kort.', solution: 'España tiene una economía desarrollada dentro de la UE, mientras que México es una economía emergente con fuerte industria manufacturera. Ambos tienen un PIB significativo a nivel mundial.' }],
      [mkEx('lett', 'Match det økonomiske begrepet med norsk oversettelse:', [
        ['el PIB', 'BNP (bruttonasjonalprodukt)'], ['la inflación', 'inflasjon'],
        ['el desempleo', 'arbeidsledighet'], ['el crecimiento económico', 'økonomisk vekst']]),
       mkEx('lett', 'Velg riktig ord for å fullføre setningen:', [
        ['El ___ de España es uno de los más grandes de Europa. (BNP)', 'PIB'], ['La tasa de ___ en España ha sido alta entre los jóvenes. (arbeidsledighet)', 'desempleo'],
        ['La ___ afecta el poder adquisitivo de los ciudadanos. (inflasjon)', 'inflación'], ['Chile atrae mucha ___ extranjera. (investering)', 'inversión']]),
       mkEx('medium', 'Svar på spørsmålene med fullstendige setninger:', [
        ['¿Cuál es la mayor economía de América Latina?', 'Brasil es la mayor economía de América Latina, seguida de México y Argentina.'],
        ['¿Qué es la economía informal?', 'La economía informal son las actividades económicas que no están registradas ni reguladas por el gobierno.'],
        ['¿Por qué es importante la inversión extranjera?', 'La inversión extranjera es importante porque crea empleo, trae tecnología y contribuye al crecimiento económico.'],
        ['¿Qué significa la fuga de cerebros?', 'La fuga de cerebros significa que profesionales cualificados emigran a otros países en busca de mejores oportunidades.']]),
       mkEx('vanskelig', 'Skriv korte tekster om følgende temaer:', [
        ['Sammenlign økonomien i et spansktalende land med Norge.', 'A diferencia de Noruega, que tiene una economía basada en el petróleo y un alto PIB per cápita, muchos países hispanohablantes dependen de materias primas diversas y enfrentan mayor desigualdad.'],
        ['Forklar begrepet desigualdad i Latin-Amerika.', 'La desigualdad en América Latina se refiere a la gran diferencia entre ricos y pobres. A pesar del crecimiento económico, muchos países no han logrado distribuir la riqueza de manera equitativa.'],
        ['Diskuter fordeler og ulemper ved globalisering for spansktalende land.', 'La globalización ha traído inversión y desarrollo tecnológico, pero también ha aumentado la dependencia económica y la pérdida de industrias locales.'],
        ['Hva kan gjøres for å redusere arbeidsledighet blant unge i Spania?', 'Para reducir el desempleo juvenil en España, se podrían implementar programas de formación profesional, incentivar el emprendimiento y reformar el mercado laboral.']])],
      '**Tips:** Følg med på spanske nyheter (El País, BBC Mundo) for å holde deg oppdatert på økonomiske temaer. Økonomiordforråd er viktig for å forstå avanserte tekster.',
      '**Oppsummering: Globaløkonomi**\n\n- **Nøkkelbegreper:** PIB, inflación, desempleo, mercado, crecimiento\n- **Store økonomier:** México, España, Argentina, Colombia, Chile\n- **Utfordringer:** Desigualdad, economía informal, dependencia de materias primas\n- **Viktig:** Spansktalende land representerer over 600 millioner innbyggere'
    ),
    mkSub('7.2', 'Comercio internacional', 'Internasjonal handel',
      'Lær om internasjonal handel og handelsavtaler mellom spansktalende land.',
      ['forstå handelsterminologi på spansk', 'diskutere internasjonale handelsavtaler'],
      'Handelsterminologi (terminología comercial)',
      `**Viktige handelsbegreper:**\n\n| Spansk | Norsk |\n|--------|-------|\n| importar | importere |\n| exportar | eksportere |\n| el tratado comercial | handelsavtale |\n| los aranceles | tollsatser |\n| el libre comercio | frihandel |\n| la balanza comercial | handelsbalanse |\n| las materias primas | råvarer |\n| el superávit / el déficit | overskudd / underskudd |\n\n**Definisjon:** Internasjonal handel er utveksling av varer og tjenester mellom land. Handelsavtaler regulerer vilkårene for denne utvekslingen.`,
      'Internasjonal handel er grunnleggende for økonomisk utvikling. Spansktalende land deltar aktivt i globale handelssystemer gjennom ulike avtaler og organisasjoner.',
      ['## Viktige handelsavtaler\n\n**Mercosur** (Mercado Común del Sur):\n- Medlemmer: Argentina, Brasil, Paraguay, Uruguay\n- Assosierte: Bolivia, Chile, Colombia, Ecuador, Peru\n- Mål: Frihandel og økonomisk integrasjon i Sør-Amerika\n\n**Alianza del Pacífico:**\n- Medlemmer: Chile, Colombia, México, Perú\n- Mål: Frihandel og integrasjon med Asia-Stillehavsregionen\n\n**EU-Mercosur:**\n- Handelsavtale mellom EU og Mercosur-landene\n- Viktig for Spania som bro mellom Europa og Latin-Amerika',
       '## Hva eksporterer spansktalende land?\n\n| Land | Hovedeksport |\n|------|-------------|\n| México | Biler, elektronikk, olje |\n| Chile | Kobber, frukt, vin |\n| Argentina | Soyabønner, kjøtt, korn |\n| Colombia | Kaffe, olje, blomster |\n| España | Biler, mat, turisme |\n| Perú | Kobber, gull, fisk |\n\nHandelsbalansen viser forskjellen mellom eksport og import.'],
      [{ title: 'Handelsavtaler', problem: 'Hva er Mercosur, og hvilke land er medlemmer?', solution: '**Mercosur** (Mercado Común del Sur) er en handelsblokk i Sør-Amerika med Argentina, Brasil, Paraguay og Uruguay som fullverdige medlemmer. Målet er frihandel og økonomisk integrasjon.' },
       { title: 'Eksport', problem: 'Hva er Chiles viktigste eksportvarer?', solution: 'Chile exporta principalmente **cobre** (kobber), **frutas** (frukt) y **vino** (vin). El cobre representa más del 50% de sus exportaciones.' }],
      [mkEx('lett', 'Match begrepet med definisjonen:', [
        ['importar', 'kjøpe varer fra utlandet'], ['exportar', 'selge varer til utlandet'],
        ['los aranceles', 'tollsatser på importerte varer'], ['el libre comercio', 'handel uten tollbarrierer']]),
       mkEx('lett', 'Match landet med hovedeksportvaren:', [
        ['Chile', 'kobber (cobre)'], ['Colombia', 'kaffe (café)'],
        ['Argentina', 'soyabønner (soja)'], ['México', 'biler (automóviles)']]),
       mkEx('medium', 'Fyll inn riktig handelsterm og svar på spansk:', [
        ['Cuando un país vende productos a otro país, se llama ___.', 'exportar'], ['Los impuestos que se pagan por productos importados son los ___.', 'aranceles'],
        ['¿Qué es la balanza comercial?', 'La balanza comercial es la diferencia entre el valor de las exportaciones y las importaciones de un país.'],
        ['¿Cuál es el objetivo de Mercosur?', 'El objetivo de Mercosur es promover el libre comercio y la integración económica entre sus países miembros.']]),
       mkEx('vanskelig', 'Skriv en kort analyse (3-4 setninger) om:', [
        ['Fordeler og ulemper ved frihandel for Latin-Amerika.', 'El libre comercio permite acceso a mercados más grandes y precios más bajos, pero puede perjudicar a industrias locales que no pueden competir con productos importados más baratos.'],
        ['Hvorfor er Alianza del Pacífico viktig?', 'La Alianza del Pacífico conecta a cuatro economías latinoamericanas con los mercados de Asia-Pacífico, promoviendo la diversificación comercial y reduciendo la dependencia de un solo mercado.'],
        ['Spanias rolle som bro mellom EU og Latin-Amerika.', 'España actúa como puente entre la UE y América Latina gracias a los lazos históricos, lingüísticos y culturales. Esto facilita acuerdos comerciales como el tratado EU-Mercosur.'],
        ['Hvordan påvirker tollsatser forbrukerne?', 'Los aranceles altos encarecen los productos importados para los consumidores, pero protegen la industria nacional. Un equilibrio entre protección y apertura es fundamental.']])],
      '**Tips:** Handelsavtaler endres over tid. Følg med på aktuelle nyheter for å forstå dynamikken i internasjonal handel.',
      '**Oppsummering: Internasjonal handel**\n\n- **Begreper:** importar, exportar, aranceles, libre comercio, balanza comercial\n- **Handelsavtaler:** Mercosur, Alianza del Pacífico, EU-Mercosur\n- **Eksport:** Råvarer (kobber, kaffe, soya), industri (biler, elektronikk)\n- **Viktig:** Handel er grunnleggende for økonomisk utvikling'
    ),
    mkSub('7.3', 'El español de negocios', 'Forretningsspansk',
      'Lær formelt forretningsspråk, e-postskriving og møtevokabular.',
      ['bruke formelt forretningsspansk', 'skrive profesjonelle e-poster'],
      'Forretningsspansk (español de negocios)',
      `**Formelt forretningsspråk:**\n\n| Uformelt | Formelt (negocios) |\n|----------|--------------------|\n| Hola | Estimado/a señor/a |\n| ¿Qué tal? | ¿Cómo se encuentra usted? |\n| Quiero... | Desearía / Me gustaría... |\n| Gracias | Le agradezco sinceramente |\n| Adiós | Atentamente / Cordialmente |\n\n**Definisjon:** Forretningsspansk (español de negocios) er den formelle varianten av spansk som brukes i profesjonelle sammenhenger: møter, forhandlinger, e-post og rapporter.`,
      'I profesjonelle sammenhenger kreves et formelt og presist språk. Forretningsspansk skiller seg fra hverdagsspråk i ordvalg, tone og struktur.',
      ['## Profesjonell e-post\n\n**Struktur:**\n1. **Encabezado:** Estimado/a Sr./Sra. + Etternavn\n2. **Introducción:** Me dirijo a usted para...\n3. **Cuerpo:** Forklaring, forespørsel, informasjon\n4. **Despedida:** Quedo a su disposición / En espera de su respuesta\n5. **Firma:** Atentamente, + Navn og tittel\n\n**Eksempel:**\n*Estimada Sra. García:*\n*Me dirijo a usted para solicitar información sobre los servicios de su empresa.*\n*Quedo a la espera de su respuesta.*\n*Atentamente,*\n*Per Hansen, Director Comercial*',
       '## Møtevokabular\n\n| Spansk | Norsk |\n|--------|-------|\n| convocar una reunión | innkalle til møte |\n| el orden del día | dagsorden |\n| tomar la palabra | ta ordet |\n| proponer | foreslå |\n| llegar a un acuerdo | komme til enighet |\n| el acta de la reunión | møtereferat |\n| la negociación | forhandling |\n| el plazo | frist |\n\nI et møte er det viktig å bruke formelle vendinger og respektere talerett.'],
      [{ title: 'Formelt brev', problem: 'Skriv en formell åpning til en e-post til Sr. López.', solution: '**Estimado Sr. López:** Me dirijo a usted para... / Le escribo en relación con...' },
       { title: 'Møteuttrykk', problem: 'Hvordan foreslår du noe i et møte?', solution: '**Me gustaría proponer que...** / **Propongo que...** / **Sugiero que consideremos...**' }],
      [mkEx('lett', 'Match den uformelle frasen med formelt alternativ:', [
        ['Hola, ¿qué tal?', 'Estimado/a señor/a, ¿cómo se encuentra?'], ['Quiero saber...', 'Desearía conocer... / Me gustaría saber...'],
        ['Gracias por todo', 'Le agradezco sinceramente su colaboración'], ['Adiós, hasta luego', 'Atentamente / Cordialmente']]),
       mkEx('lett', 'Match møtebegrepet med norsk oversettelse:', [
        ['convocar una reunión', 'innkalle til møte'], ['el orden del día', 'dagsorden'],
        ['llegar a un acuerdo', 'komme til enighet'], ['el acta de la reunión', 'møtereferat']]),
       mkEx('medium', 'Skriv formelle setninger for følgende situasjoner:', [
        ['Du vil be om informasjon om et produkt.', 'Me dirijo a usted para solicitar información detallada sobre su producto.'],
        ['Du vil avtale et møte.', 'Le escribo para concertar una reunión a su conveniencia.'],
        ['Du vil takke for et samarbeid.', 'Quisiera expresar mi agradecimiento por la excelente colaboración.'],
        ['Du vil avslutte en e-post formelt.', 'Quedo a su entera disposición. Atentamente, [Nombre], [Cargo].']]),
       mkEx('vanskelig', 'Skriv en kort profesjonell e-post (5-6 setninger) for følgende situasjoner:', [
        ['Søk om informasjon om et kurs i Barcelona.', 'Estimado/a señor/a: Me dirijo a usted para solicitar información sobre los cursos de español de negocios que ofrece su institución. Estoy interesado/a en un curso intensivo durante el mes de julio. Le agradecería que me enviara el programa y las tarifas. Quedo a la espera de su respuesta. Atentamente, ...'],
        ['Bekreft deltakelse på en konferanse.', 'Estimada Sra. Martínez: Le confirmo mi participación en la conferencia del 15 de marzo. Agradeceré que me reserve un lugar en la sesión de la tarde. Asimismo, necesitaré alojamiento para dos noches. Quedo a su disposición. Cordialmente, ...'],
        ['Reklamer et produkt som ble levert skadet.', 'Estimado Sr. Rodríguez: Me pongo en contacto con usted para informarle de que el pedido recibido el día 10 presenta daños. Adjunto fotografías del producto dañado. Solicito la sustitución del producto o el reembolso del importe. En espera de su pronta respuesta. Atentamente, ...'],
        ['Foreslå et samarbeidsprosjekt med en spansk bedrift.', 'Estimada Sra. López: Me dirijo a usted en nombre de nuestra empresa para proponerle un proyecto de colaboración. Consideramos que una alianza entre nuestras empresas sería mutuamente beneficiosa. Le adjunto un documento con los detalles de nuestra propuesta. ¿Sería posible concertar una reunión? Atentamente, ...']])],
      '**Tips:** I forretningsspansk er det bedre å være for formell enn for uformell. Bruk alltid *usted* med forretningspartnere du ikke kjenner godt.',
      '**Oppsummering: Forretningsspansk**\n\n- **Formelt språk:** Estimado/a, Me dirijo a usted, Atentamente\n- **E-poststruktur:** Encabezado → Introducción → Cuerpo → Despedida → Firma\n- **Møtevokabular:** convocar, orden del día, proponer, acuerdo\n- **Viktig:** Bruk usted, vær formell og presis'
    ),
    mkSub('7.4', 'Textos económicos', 'Lese og skrive om økonomi',
      'Lær å lese økonomiske rapporter og skrive sammendrag av økonomiske data.',
      ['lese og forstå økonomiske tekster', 'analysere økonomisk statistikk'],
      'Økonomiske tekster (textos económicos)',
      `**Typer økonomiske tekster:**\n\n| Type | Spansk | Innhold |\n|------|--------|--------|\n| Rapport | el informe | Detaljert analyse |\n| Artikkel | el artículo | Nyheter/analyse |\n| Statistikk | las estadísticas | Tall og data |\n| Grafisk fremstilling | el gráfico | Visuell data |\n\n**Definisjon:** Økonomiske tekster presenterer data, analyser og argumenter om økonomiske forhold. For å lese dem effektivt trenger du spesifikt vokabular og evnen til å tolke statistikk.`,
      'Å kunne lese og forstå økonomiske tekster er en viktig ferdighet i spanskfaget på avansert nivå. Her lærer du å tolke data og skrive egne sammendrag.',
      ['## Statistisk vokabular\n\n| Spansk | Norsk |\n|--------|-------|\n| aumentar / crecer | øke / vokse |\n| disminuir / reducir | minke / redusere |\n| la tasa de | prosentsatsen for |\n| el porcentaje | prosentandelen |\n| según los datos | ifølge dataene |\n| en comparación con | sammenlignet med |\n| alcanzar un máximo | nå et toppunkt |\n| registrar una caída | oppleve et fall |\n\nDisse uttrykkene er essensielle for å beskrive trender og utviklinger.',
       '## Skrive et sammendrag (resumen)\n\n**Struktur for økonomisk sammendrag:**\n1. **Tema:** ¿De qué trata el texto? (Hva handler teksten om?)\n2. **Datos principales:** Viktigste tall og fakta\n3. **Tendencias:** Trender - økning, nedgang, stabilitet\n4. **Conclusión:** Hovedkonklusjon\n\n**Nyttige fraser:**\n- *El texto/informe analiza...* (Teksten/rapporten analyserer...)\n- *Los datos muestran que...* (Dataene viser at...)\n- *Se observa un aumento/descenso de...* (Man ser en økning/nedgang i...)\n- *En conclusión, se puede afirmar que...* (Avslutningsvis kan man hevde at...)'],
      [{ title: 'Lese statistikk', problem: 'Beskriv følgende data: Arbeidsledighet i Spania: 2019: 14%, 2020: 16%, 2021: 15%.', solution: 'La tasa de desempleo en España **aumentó** del 14% en 2019 al 16% en 2020, probablemente debido a la pandemia. En 2021 **disminuyó** ligeramente al 15%.' },
       { title: 'Sammendrag', problem: 'Skriv åpningssetningen til et sammendrag om Chiles eksport.', solution: '**El presente informe analiza** la evolución de las exportaciones chilenas en la última década, con especial atención al sector del cobre.' }],
      [mkEx('lett', 'Match den statistiske termen med norsk:', [
        ['aumentar', 'øke'], ['disminuir', 'minke'],
        ['la tasa de', 'prosentsatsen for'], ['según los datos', 'ifølge dataene']]),
       mkEx('lett', 'Velg riktig verb (aumentar/disminuir/mantener):', [
        ['El PIB pasó de 3% a 5%. El PIB ___.', 'aumentó'], ['El desempleo bajó del 20% al 15%. El desempleo ___.', 'disminuyó'],
        ['La inflación se quedó en 2%. La inflación se ___.', 'mantuvo'], ['Las exportaciones crecieron un 10%. Las exportaciones ___.', 'aumentaron']]),
       mkEx('medium', 'Beskriv følgende data med spanske setninger:', [
        ['BNP Spania: 2019: 1,4 billion €, 2020: 1,1 billion €', 'El PIB de España disminuyó de 1,4 billones de euros en 2019 a 1,1 billones en 2020.'],
        ['Eksport Chile: kobber utgjør 55%', 'Según los datos, el cobre representa el 55% de las exportaciones totales de Chile.'],
        ['Arbeidsledighet blant unge i Spania: 40%', 'La tasa de desempleo juvenil en España alcanza el 40%, una de las más altas de Europa.'],
        ['Turisme i Spania: 83 mill. turister i 2019', 'España registró 83 millones de turistas en 2019, lo que la convierte en uno de los destinos más visitados del mundo.']]),
       mkEx('vanskelig', 'Skriv et kort sammendrag (4-5 setninger) basert på:', [
        ['Mexicos økonomi: BNP vekst 2%, inflasjon 4%, ledighet 3,5%', 'El informe analiza la situación económica de México. El PIB registró un crecimiento del 2%, mientras que la inflación se situó en el 4%. La tasa de desempleo se mantuvo relativamente baja en un 3,5%. Sin embargo, la economía informal sigue siendo un desafío importante. En conclusión, México muestra un crecimiento moderado pero estable.'],
        ['Spanias handelsbalanse: eksport opp 5%, import opp 8%', 'Los datos muestran que las exportaciones españolas aumentaron un 5%, mientras que las importaciones crecieron un 8%. Esto resulta en un aumento del déficit comercial. Los principales productos de exportación son automóviles y alimentos. En comparación con el año anterior, la balanza comercial se ha deteriorado ligeramente.'],
        ['Analyser turismens betydning for Spanias økonomi', 'El turismo es uno de los pilares fundamentales de la economía española. Según los datos más recientes, el sector turístico contribuye con aproximadamente el 12% del PIB. España recibe más de 80 millones de visitantes anuales. Sin embargo, la dependencia del turismo también representa un riesgo económico en tiempos de crisis.'],
        ['Sammenlign utviklingen i to latinamerikanske økonomier', 'En comparación, Chile y Colombia han seguido trayectorias económicas diferentes. Mientras Chile se ha destacado por su estabilidad macroeconómica, Colombia ha experimentado un crecimiento más variable. Ambos países son miembros de la Alianza del Pacífico. Sin embargo, los niveles de desigualdad siguen siendo un reto común.']])],
      '**Tips:** Øv deg på å lese korte økonomiske artikler fra El País Economía eller BBC Mundo Economía. Start med overskrifter og sammendrag.',
      '**Oppsummering: Økonomiske tekster**\n\n- **Teksttyper:** informe, artículo, estadísticas, gráfico\n- **Statistisk vokabular:** aumentar, disminuir, tasa de, porcentaje\n- **Sammendrag:** Tema → Datos → Tendencias → Conclusión\n- **Fraser:** Los datos muestran, Se observa, En conclusión'
    ),
  ]
};

const s3ch8 = {
  title: 'VIAJES Y TURISMO',
  subs: [
    mkSub('8.1', 'Planificar un viaje', 'Planlegge reise i detalj',
      'Lær å planlegge en reise med bestilling, reiserute og transport på spansk.',
      ['planlegge en reise på spansk', 'gjøre reservasjoner og sammenligne alternativer'],
      'Reiseplanlegging (planificación de viajes)',
      `**Viktige reisebegreper:**\n\n| Spansk | Norsk |\n|--------|-------|\n| reservar | bestille/reservere |\n| el itinerario | reiserute |\n| el alojamiento | overnatting |\n| el vuelo | flyvning |\n| el billete / el boleto | billett |\n| la estancia | opphold |\n| el seguro de viaje | reiseforsikring |\n| la temporada alta/baja | høy-/lavsesong |\n\n**Definisjon:** Reiseplanlegging innebærer å undersøke reisemål, bestille transport og overnatting, og lage en detaljert reiserute.`,
      'Å planlegge en reise til et spansktalende land krever språkferdigheter for å kommunisere med reisebyråer, hoteller og transportselskaper. Her lærer du å gjøre dette på en avansert måte.',
      ['## Bestille overnatting\n\n**Typer overnatting:**\n- **Hotel** (hotel) - Fra 1-5 stjerner\n- **Hostal/albergue** (vandrerhjem) - Rimelig alternativ\n- **Apartamento turístico** (ferieleilighet) - Selvhushold\n- **Parador** (historisk hotell i Spania) - Unike opplevelser\n- **Casa rural** (landsted) - Landlig turisme\n\n**Nyttige fraser:**\n- *Quisiera reservar una habitación doble para tres noches.*\n- *¿Está incluido el desayuno?*\n- *¿Cuál es el precio por noche en temporada alta?*\n- *¿Tienen habitaciones disponibles del 15 al 20 de julio?*',
       '## Sammenligne reisealternativer\n\n**Nyttige uttrykk:**\n- *Es más barato/caro que...* (Det er billigere/dyrere enn...)\n- *La mejor opción sería...* (Det beste alternativet ville være...)\n- *Conviene más...* (Det lønner seg mer...)\n- *En cuanto a precio/ubicación/comodidad...* (Når det gjelder pris/beliggenhet/komfort...)\n- *Teniendo en cuenta que...* (Med tanke på at...)\n\nÅ sammenligne alternativer er viktig for å ta gode valg.'],
      [{ title: 'Reservasjon', problem: 'Bestill et dobbeltrom med frokost for 5 netter.', solution: '**Quisiera reservar una habitación doble con desayuno incluido para cinco noches, del 10 al 15 de agosto. ¿Cuál sería el precio total?**' },
       { title: 'Sammenligning', problem: 'Sammenlign et hotell (100€/natt) med en ferieleilighet (70€/natt).', solution: '**El hotel cuesta 100€ por noche, mientras que el apartamento cuesta solo 70€. Sin embargo, el hotel incluye desayuno. Teniendo en cuenta la comodidad, el hotel puede ser mejor opción.**' }],
      [mkEx('lett', 'Match reisebegrepet med norsk oversettelse:', [
        ['el itinerario', 'reiserute'], ['el alojamiento', 'overnatting'],
        ['el seguro de viaje', 'reiseforsikring'], ['la temporada baja', 'lavsesong']]),
       mkEx('lett', 'Velg riktig frase for situasjonen:', [
        ['Du vil bestille et enkeltrom.', 'Quisiera reservar una habitación individual.'], ['Du spør om frokost er inkludert.', '¿Está incluido el desayuno?'],
        ['Du vil vite prisen per natt.', '¿Cuál es el precio por noche?'], ['Du spør om ledige rom.', '¿Tienen habitaciones disponibles?']]),
       mkEx('medium', 'Skriv dialoger for følgende situasjoner:', [
        ['Bestill fly fra Oslo til Madrid.', 'Quisiera reservar un vuelo de Oslo a Madrid para el 20 de junio. ¿Hay vuelos directos? ¿Cuál es el precio del billete de ida y vuelta?'],
        ['Spør om fasiliteter på et hotell.', '¿El hotel dispone de piscina, wifi gratuito y aparcamiento? ¿A qué hora es el check-in?'],
        ['Sammenlign to overnattingsalternativer.', 'El hotel ofrece más comodidad, pero el albergue es más económico. En cuanto a ubicación, ambos están en el centro.'],
        ['Endre en reservasjon.', 'Buenos días, llamo para modificar mi reserva. Necesito cambiar las fechas del 15 al 18 de julio, en lugar del 10 al 13.']]),
       mkEx('vanskelig', 'Planlegg en reise og skriv en detaljert beskrivelse (4-5 setninger):', [
        ['En ukes ferie i Barcelona: transport, hotell, aktiviteter.', 'Para nuestra semana en Barcelona, he reservado un vuelo directo desde Oslo y un hotel de 3 estrellas en el barrio Gótico. El itinerario incluye visitas a la Sagrada Familia, el Parque Güell y el Barrio Born. Hemos contratado un seguro de viaje completo. El presupuesto total es de aproximadamente 1500 euros por persona.'],
        ['Backpacking gjennom Peru: rute og budsjett.', 'El itinerario de tres semanas por Perú comienza en Lima, sigue a Cusco y Machu Picchu, y termina en el lago Titicaca. Nos alojaremos en albergues y hostales para mantener un presupuesto ajustado. El transporte será en autobuses nocturnos para ahorrar tiempo y dinero. Hemos calculado un presupuesto de 50 euros diarios.'],
        ['Kulturreise i Andalucía: byer og opplevelser.', 'Nuestra ruta cultural por Andalucía incluye Sevilla, Córdoba y Granada. En cada ciudad visitaremos los monumentos más emblemáticos: la Giralda, la Mezquita y la Alhambra. Hemos reservado paradores nacionales para una experiencia auténtica. La mejor temporada para viajar es primavera u otoño.'],
        ['Sammenlign to reisemål for sommerferien.', 'Comparando México y España como destinos de verano, México ofrece precios más bajos y una rica diversidad cultural. Sin embargo, España tiene la ventaja de estar más cerca y no requiere visado. En cuanto a clima, ambos destinos tienen temperaturas agradables. Teniendo en cuenta el presupuesto, recomendaría España para una primera experiencia.']])],
      '**Tips:** Bestill alltid reiseforsikring (seguro de viaje) og sjekk visum-krav (requisitos de visado) før du reiser til et spansktalende land.',
      '**Oppsummering: Reiseplanlegging**\n\n- **Begreper:** reservar, itinerario, alojamiento, vuelo, billete\n- **Overnatting:** hotel, hostal, apartamento, parador, casa rural\n- **Sammenligning:** más barato/caro, la mejor opción, conviene más\n- **Viktig:** Planlegg i god tid, spesielt i temporada alta'
    ),
    mkSub('8.2', 'Turismo responsable', 'Ansvarlig turisme',
      'Lær om bærekraftig turisme og dens påvirkning på miljø og lokalsamfunn.',
      ['diskutere ansvarlig turisme', 'reflektere over turismens påvirkning'],
      'Ansvarlig turisme (turismo responsable)',
      `**Nøkkelbegreper:**\n\n| Spansk | Norsk |\n|--------|-------|\n| el ecoturismo | økoturisme |\n| el turismo comunitario | fellesskapsturisme |\n| el turismo sostenible | bærekraftig turisme |\n| la huella de carbono | karbonfotavtrykk |\n| el impacto medioambiental | miljøpåvirkning |\n| el patrimonio cultural | kulturarv |\n| la masificación turística | overturisme |\n| el consumo responsable | ansvarlig forbruk |\n\n**Definisjon:** Ansvarlig turisme handler om å reise på en måte som respekterer miljøet, lokalsamfunnet og kulturarven, samtidig som det bidrar til lokal økonomisk utvikling.`,
      'Turisme er en av verdens største industrier, men den har også negative konsekvenser. Ansvarlig turisme søker å minimere skadene og maksimere fordelene for lokalsamfunn og miljø.',
      ['## Utfordringer med masseturisme\n\n**Overturisme (masificación turística):**\n- Barcelona, Mallorca og Cancún opplever overturisme\n- Stigende boligpriser for lokalbefolkningen\n- Slitasje på kulturminner og natur\n- Forurensning og avfallsproblemer\n\n**Eksempler på tiltak:**\n- Turistskatt (tasa turística) i Barcelona og Balearene\n- Begrensning av cruiseskip i noen havner\n- Kampanjer for å fordele turister over hele året\n- Kvoter for besøk til sårbare naturområder',
       '## Alternativer til masseturisme\n\n**Ecoturismo:** Naturbasert turisme med fokus på bevaring\n- Eksempel: Galápagos-øyene (Ecuador), Costa Rica\n\n**Turismo comunitario:** Reise organisert av lokalsamfunn\n- Eksempel: Urfolkssamfunn i Bolivia og Peru\n\n**Turismo rural:** Ferie på landsbygda\n- Eksempel: Casas rurales i Spania\n\n**Volunturismo:** Frivillig arbeid kombinert med reise\n- Eksempel: Bevaringsprosjekter i Mellom-Amerika\n\nDisse alternativene gir mer autentiske opplevelser og bedre fordeling av inntekter.'],
      [{ title: 'Overturisme', problem: 'Gi et eksempel på overturisme i den spansktalende verden.', solution: '**Barcelona** er et eksempel. La masificación turística ha provocado el aumento del precio de la vivienda, la pérdida de comercio local y molestias para los residentes. La ciudad ha implementado una tasa turística.' },
       { title: 'Alternativ', problem: 'Hva er turismo comunitario?', solution: 'El **turismo comunitario** es un tipo de turismo organizado y gestionado por las propias comunidades locales, especialmente indígenas. Los beneficios económicos se quedan en la comunidad.' }],
      [mkEx('lett', 'Match begrepet med definisjonen:', [
        ['el ecoturismo', 'naturbasert turisme med fokus på bevaring'], ['la masificación turística', 'overturisme - for mange turister'],
        ['la huella de carbono', 'karbonfotavtrykk fra reisen'], ['el patrimonio cultural', 'kulturarv som bør beskyttes']]),
       mkEx('lett', 'Sant eller usant om ansvarlig turisme:', [
        ['Ecoturismo betyr billig turisme.', 'Usant - det betyr naturbasert og bærekraftig turisme.'], ['Overturisme er et problem i Barcelona.', 'Sant - byen har innført turistskatt.'],
        ['Turismo comunitario drives av store selskaper.', 'Usant - det drives av lokalsamfunn.'], ['Ansvarlig turisme tar hensyn til miljøet.', 'Sant']]),
       mkEx('medium', 'Svar på spørsmålene med fullstendige setninger:', [
        ['¿Cuáles son los problemas de la masificación turística?', 'La masificación turística provoca el aumento de precios, la degradación del medio ambiente y molestias para los residentes.'],
        ['¿Qué es el turismo sostenible?', 'El turismo sostenible es una forma de viajar que minimiza el impacto negativo en el medio ambiente y maximiza los beneficios para las comunidades locales.'],
        ['¿Por qué es importante el ecoturismo?', 'El ecoturismo es importante porque promueve la conservación de la naturaleza y genera ingresos para las comunidades locales sin destruir el medio ambiente.'],
        ['¿Qué medidas se pueden tomar contra la masificación?', 'Se pueden implementar tasas turísticas, limitar el número de visitantes, promover destinos alternativos y distribuir el turismo durante todo el año.']]),
       mkEx('vanskelig', 'Skriv en argumenterende tekst (4-5 setninger) om:', [
        ['Turismens positive og negative sider for et spansktalende land.', 'El turismo es fundamental para la economía española, generando millones de empleos. Sin embargo, la masificación turística ha creado graves problemas en ciudades como Barcelona. Es necesario encontrar un equilibrio entre el beneficio económico y la calidad de vida de los residentes. El turismo sostenible podría ser la solución.'],
        ['Hvorfor bør vi velge ecoturismo fremfor masseturisme?', 'El ecoturismo ofrece experiencias más auténticas y respetuosas con el medio ambiente. A diferencia del turismo de masas, genera beneficios directos para las comunidades locales. Además, contribuye a la conservación de ecosistemas únicos. Aunque puede ser más caro, el valor de la experiencia y su impacto positivo lo justifican.'],
        ['Din mening om turismo comunitario i Latin-Amerika.', 'En mi opinión, el turismo comunitario es una de las mejores formas de conocer la verdadera cultura latinoamericana. Permite a los viajeros convivir con comunidades indígenas y aprender de sus tradiciones. Al mismo tiempo, los beneficios económicos se quedan en la comunidad. Creo que debería promoverse más este tipo de turismo.'],
        ['Foreslå tiltak mot overturisme i en spansktalende by.', 'Para combatir la masificación turística, propongo implementar una tasa turística progresiva, limitar el número de alojamientos turísticos y crear rutas alternativas fuera del centro. También sería importante promover el turismo en temporada baja mediante campañas publicitarias. Finalmente, invertir en infraestructura sostenible beneficiaría tanto a turistas como a residentes.']])],
      '**Tips:** Når du reiser, tenk på ditt eget karbonfotavtrykk. Velg lokale produkter, respekter naturen og støtt lokalsamfunnet.',
      '**Oppsummering: Ansvarlig turisme**\n\n- **Begreper:** ecoturismo, turismo comunitario, sostenible, huella de carbono\n- **Problemer:** Masificación, prisøkning, miljøskader\n- **Alternativer:** Ecoturismo, turismo comunitario, turismo rural\n- **Tiltak:** Tasa turística, begrensninger, fordeling av turister'
    ),
    mkSub('8.3', 'Describir experiencias', 'Beskrive reiseopplevelser',
      'Lær å beskrive reiseopplevelser ved hjelp av fortidsformer og levende språk.',
      ['beskrive reiseopplevelser detaljert', 'bruke fortidsformer korrekt for opplevelser'],
      'Beskrive opplevelser (describir experiencias)',
      `**Nyttige uttrykk for å beskrive opplevelser:**\n\n| Spansk | Norsk |\n|--------|-------|\n| fue una experiencia increíble | det var en utrolig opplevelse |\n| lo que más me impresionó fue... | det som imponerte meg mest var... |\n| no olvidaré nunca... | jeg vil aldri glemme... |\n| me encantó... | jeg elsket... |\n| lo más destacado fue... | det mest fremtredende var... |\n| valió la pena | det var verdt det |\n| me sorprendió que... | det overrasket meg at... |\n| recomiendo encarecidamente... | jeg anbefaler sterkt... |\n\n**Definisjon:** Å beskrive reiseopplevelser innebærer bruk av fortidsformer (pretérito perfecto, indefinido, imperfecto) og levende, beskrivende språk.`,
      'Å dele reiseopplevelser er en viktig kommunikativ ferdighet. Det handler om å bruke riktige fortidsformer og levende beskrivelser for å formidle stemning og inntrykk.',
      ['## Fortidsformer for opplevelser\n\n**Pretérito indefinido** - spesifikke hendelser:\n- *Viajé a Perú el año pasado.* (Jeg reiste til Peru i fjor.)\n- *Visitamos Machu Picchu un martes.* (Vi besøkte Machu Picchu en tirsdag.)\n\n**Pretérito imperfecto** - bakgrunn, beskrivelser:\n- *Hacía mucho calor.* (Det var veldig varmt.)\n- *La ciudad estaba llena de turistas.* (Byen var full av turister.)\n\n**Pretérito perfecto** - nylige opplevelser:\n- *He visitado tres países este año.* (Jeg har besøkt tre land i år.)\n- *Nunca he estado en México.* (Jeg har aldri vært i Mexico.)',
       '## Reiseblogg - struktur\n\n**Introduksjon:** Hvor, når, med hvem\n- *El verano pasado viajé a... con...*\n\n**Beskrivelse:** Inntrykk, opplevelser\n- *Lo que más me impresionó fue...*\n- *El paisaje era espectacular...*\n\n**Vurdering:** Positive og negative sider\n- *Lo mejor fue... pero lo peor fue...*\n\n**Anbefaling:** Til fremtidige reisende\n- *Recomiendo visitar... / No os perdáis...*\n\nEn god reiseblogg kombinerer fakta med personlige inntrykk.'],
      [{ title: 'Fortidsformer', problem: 'Beskriv en dag i Barcelona med begge fortidsformer.', solution: 'El martes **visitamos** (indefinido) la Sagrada Familia. **Hacía** (imperfecto) mucho calor y **había** (imperfecto) muchos turistas. Después **comimos** (indefinido) paella en un restaurante del puerto.' },
       { title: 'Reiseblogg', problem: 'Skriv en åpning til en reiseblogg om en tur til Mexico.', solution: 'El verano pasado **viajé** a México con mi familia. **Fue** una experiencia **increíble** que no olvidaré nunca. Lo que más me **impresionó** fue la riqueza cultural y la amabilidad de la gente.' }],
      [mkEx('lett', 'Match uttrykket med norsk:', [
        ['fue una experiencia increíble', 'det var en utrolig opplevelse'], ['lo que más me impresionó fue...', 'det som imponerte meg mest var...'],
        ['valió la pena', 'det var verdt det'], ['recomiendo encarecidamente', 'jeg anbefaler sterkt']]),
       mkEx('lett', 'Velg riktig fortidsform (indefinido/imperfecto):', [
        ['___ (visitar/yo) la Alhambra el lunes.', 'Visité (indefinido - spesifikk hendelse)'], ['___ (hacer) mucho sol ese día.', 'Hacía (imperfecto - bakgrunn/beskrivelse)'],
        ['La ciudad ___ (estar) muy bonita.', 'estaba (imperfecto - beskrivelse)'], ['___ (comer/nosotros) tapas en el centro.', 'Comimos (indefinido - spesifikk hendelse)']]),
       mkEx('medium', 'Beskriv disse opplevelsene med 2-3 setninger:', [
        ['Et besøk til Machu Picchu.', 'Visitamos Machu Picchu al amanecer. El paisaje era impresionante y hacía un poco de frío. Fue una experiencia que nunca olvidaré.'],
        ['En dag på stranden i Barcelona.', 'Pasamos el día en la playa de la Barceloneta. El agua estaba caliente y había mucha gente. Comimos helado mientras paseábamos por el paseo marítimo.'],
        ['Smaksprøver i et marked i Mexico City.', 'Fuimos al Mercado de San Juan para probar comida típica. Había puestos con todo tipo de productos: tacos, frutas exóticas y dulces tradicionales. Lo que más me sorprendió fue la variedad de chiles.'],
        ['En flamencoforestilling i Sevilla.', 'Asistimos a un espectáculo de flamenco en el barrio de Triana. La bailaora era increíble y la música nos emocionó profundamente. Fue lo más destacado de nuestro viaje.']]),
       mkEx('vanskelig', 'Skriv en kort reiseblogg (5-6 setninger) om:', [
        ['En uke i Costa Rica med fokus på ecoturismo.', 'El mes pasado viajé a Costa Rica, un paraíso del ecoturismo. Visitamos el Parque Nacional Manuel Antonio, donde vimos monos, tucanes y perezosos. Lo que más me impresionó fue la biodiversidad increíble del país. También hicimos canopy en Monteverde, una experiencia que me daba mucho miedo pero valió totalmente la pena. Recomiendo encarecidamente Costa Rica a todos los amantes de la naturaleza.'],
        ['Din beste reiseopplevelse i et spansktalende land (ekte eller oppdiktet).', 'Mi mejor experiencia fue un viaje a Buenos Aires el año pasado. La ciudad me cautivó con su arquitectura europea, sus barrios con personalidad propia y su increíble gastronomía. Lo más destacado fue asistir a un show de tango en San Telmo. La música, el baile y la pasión me emocionaron profundamente. Sin duda, fue una experiencia que marcó mi vida.'],
        ['En uventet hendelse under en reise.', 'Durante mi viaje a Perú, nos perdimos en el camino a Ollantaytambo. Estábamos un poco asustados porque no teníamos señal de teléfono. Sin embargo, un señor del pueblo nos invitó a su casa y nos ofreció comida y té de coca. Fue una experiencia inesperada que nos enseñó sobre la hospitalidad peruana. A veces los mejores momentos de un viaje son los no planificados.'],
        ['Sammenlign to reiseopplevelser i forskjellige spansktalende land.', 'He tenido la suerte de visitar tanto España como México, y ambas experiencias fueron muy diferentes. En España disfruté de la historia, la arquitectura y la gastronomía mediterránea. En México me fascinaron las ruinas mayas, la comida picante y la calidez de la gente. Mientras que en España el ritmo era más relajado, en México todo era más vibrante y colorido. Ambos países me robaron el corazón de maneras distintas.']])],
      '**Tips:** For å gjøre beskrivelsene dine mer levende, bruk alle sansene: Hva så du? Hva hørte du? Hva smakte du? Hva følte du?',
      '**Oppsummering: Beskrive opplevelser**\n\n- **Uttrykk:** fue increíble, lo que más me impresionó, valió la pena\n- **Fortidsformer:** Indefinido (hendelser), Imperfecto (beskrivelser), Perfecto (nylige)\n- **Reiseblogg:** Introduksjon → Beskrivelse → Vurdering → Anbefaling\n- **Tips:** Bruk alle sansene for levende beskrivelser'
    ),
    mkSub('8.4', 'El español como lengua global', 'Spansk som verdensspråk',
      'Utforsk spansk som globalt språk: statistikk, dialekter og verdensbetydning.',
      ['forstå spanskens globale betydning', 'kjenne til dialekter og varianter av spansk'],
      'Spansk som verdensspråk (el español como lengua global)',
      `**Statistikk om spansk:**\n\n| Fakta | Tall |\n|-------|------|\n| Morsmålstalere | ca. 490 millioner |\n| Totaltalere (inkl. andrespråk) | ca. 590 millioner |\n| Land med spansk som offisielt språk | 21 |\n| Nest mest talte morsmål i verden | Etter mandarin |\n| Tredje mest brukte språk på internett | Etter engelsk og kinesisk |\n| Studenter av spansk globalt | ca. 22 millioner |\n\n**Definisjon:** Spansk er verdens nest mest talte morsmål og et av de seks offisielle FN-språkene. Dets globale betydning vokser stadig innen handel, kultur og diplomati.`,
      'Spansk er et av verdens viktigste språk, og dets betydning vokser for hvert år. I dette kapittelet utforsker vi spanskens globale rolle, dets dialekter og fremtid.',
      ['## Dialekter og varianter\n\n**Spania:**\n- **Castellano** - Standard spansk (Castilla y León)\n- **Andaluz** - Sør-Spania (aspirert s, seseo)\n- **Canario** - Kanariøyene (ligner latinamerikansk)\n\n**Latin-Amerika:**\n- **Mexicano** - Tydelig uttale, nahuatl-innflytelse\n- **Rioplatense** - Argentina/Uruguay (vos, ll→sh)\n- **Caribeño** - Cuba/Dom. Rep./Venezuela (aspirert s)\n- **Andino** - Peru/Bolivia/Ecuador (konservativt, quechua-innflytelse)\n- **Chileno** - Chile (unik intonasjon, mye slang)\n\nAlle varianter er likeverdige - ingen er \"bedre\" enn andre.',
       '## Spanskens fremtid\n\n**Vekst:**\n- I USA snakker over 41 millioner spansk som morsmål\n- Spansk er det mest studerte fremmedspråket i USA\n- I 2060 kan USA bli verdens største spansktalende land\n\n**Spansk i verden:**\n- Offisielt FN-språk\n- Offisielt EU-språk\n- Viktig i internasjonalt diplomati og handel\n- Voksende kulturell innflytelse (musikk, film, TV)\n\n**Spansk og norsk:**\n- Spansk er et populært fremmedspråk i Norge\n- Økende handelsrelasjoner med spansktalende land\n- Kulturutveksling gjennom musikk, mat og turisme'],
      [{ title: 'Statistikk', problem: 'Hvor mange snakker spansk som morsmål?', solution: 'Ca. **490 millioner** mennesker snakker spansk som morsmål, noe som gjør det til verdens nest mest talte morsmål etter mandarin.' },
       { title: 'Dialekter', problem: 'Hva kjennetegner rioplatense-spansk?', solution: 'Rioplatense (Argentina/Uruguay) kjennetegnes av bruk av **vos** i stedet for tú, uttale av **ll/y** som \"sh\", og sterk italiensk innflytelse i intonasjonen.' }],
      [mkEx('lett', 'Sant eller usant om spansk:', [
        ['Spansk er verdens mest talte morsmål.', 'Usant - det er nest mest talte (etter mandarin).'], ['Det er 21 land med spansk som offisielt språk.', 'Sant'],
        ['I USA snakker ingen spansk.', 'Usant - over 41 millioner snakker spansk som morsmål i USA.'], ['Spansk er et offisielt FN-språk.', 'Sant']]),
       mkEx('lett', 'Match dialekten med regionen:', [
        ['Rioplatense', 'Argentina og Uruguay'], ['Andaluz', 'Sør-Spania'],
        ['Mexicano', 'Mexico'], ['Andino', 'Peru, Bolivia, Ecuador']]),
       mkEx('medium', 'Svar på spørsmålene med fullstendige setninger:', [
        ['¿Por qué es importante aprender español?', 'Es importante aprender español porque es la segunda lengua materna más hablada del mundo, es útil para los negocios y permite acceder a una rica cultura.'],
        ['¿Cuáles son las principales diferencias entre el español de España y el de América Latina?', 'Las principales diferencias son la pronunciación (especialmente la z y c), el uso de vosotros/ustedes, y algún vocabulario diferente.'],
        ['¿Cuál es el futuro del español en Estados Unidos?', 'El español seguirá creciendo en Estados Unidos. Se estima que en 2060 será el país con más hispanohablantes del mundo.'],
        ['¿Qué dialectos del español conoces?', 'Conozco el castellano de España, el rioplatense de Argentina, el mexicano y el caribeño. Cada uno tiene características únicas de pronunciación y vocabulario.']]),
       mkEx('vanskelig', 'Skriv en reflekterende tekst (4-5 setninger) om:', [
        ['Betydningen av å lære spansk for norske elever.', 'Para los estudiantes noruegos, aprender español abre las puertas a una comunidad de casi 600 millones de personas. No solo es útil para viajar y trabajar, sino que también permite acceder a una enorme riqueza cultural: literatura, cine, música y gastronomía. En un mundo cada vez más globalizado, dominar el español es una ventaja competitiva significativa.'],
        ['Fordeler og utfordringer med at det finnes mange dialekter av spansk.', 'La diversidad dialectal del español es una riqueza, pero también puede suponer un reto para los estudiantes. Las diferencias de pronunciación, vocabulario e incluso gramática pueden causar confusión. Sin embargo, esta variedad refleja la riqueza cultural de los países hispanohablantes. Lo más importante es que todas las variantes permiten la comunicación mutua.'],
        ['Spanskens rolle i en globalisert verden.', 'El español desempeña un papel cada vez más importante en la globalización. Es lengua oficial de organismos internacionales como la ONU y la UE, y es fundamental en el comercio con América Latina. La influencia cultural del mundo hispanohablante, a través de la música, la gastronomía y el entretenimiento, sigue creciendo. En el futuro, el español será aún más relevante en las relaciones internacionales.'],
        ['Sammenlign spanskens og engelskens globale posisjon.', 'Aunque el inglés sigue siendo la lengua franca global, el español está ganando terreno rápidamente. Mientras el inglés domina en tecnología y negocios internacionales, el español es más fuerte en demografía, con más hablantes nativos en crecimiento. Ambos idiomas son complementarios en el mercado laboral internacional. Dominar ambos idiomas ofrece enormes ventajas profesionales y personales.']])],
      '**Tips:** Eksponer deg for ulike varianter av spansk ved å se filmer og serier fra forskjellige spansktalende land. Netflix og YouTube har et enormt utvalg.',
      '**Oppsummering: Spansk som verdensspråk**\n\n- **Tall:** ~490 mill. morsmålstalere, 21 land, nest mest talte morsmål\n- **Dialekter:** Castellano, andaluz, mexicano, rioplatense, caribeño, andino, chileno\n- **Fremtid:** Voksende i USA, viktig i handel og diplomati\n- **Alle varianter er likeverdige** - mangfold er rikdom'
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

// Generate spansk-3-kap7-8
const s3_7_8 = generateFile(3, [7, 8], {7: s3ch7, 8: s3ch8}, '7-8');
fs.writeFileSync(path.join(outDir, 'textbook-content-spansk-3-kap7-8.ts'), s3_7_8);
console.log(`Written: textbook-content-spansk-3-kap7-8.ts (${s3_7_8.split('\n').length} lines)`);
