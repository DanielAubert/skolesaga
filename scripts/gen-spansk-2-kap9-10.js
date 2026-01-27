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
// SPANSK 2 CHAPTERS 9-10
// ============================================================================
const s2ch9 = {
  title: 'HISTORIA DE ESPAÑA Y LATINOAMÉRICA',
  subs: [
    mkSub('9.1', 'Historia de España', 'Spansk historie (conquistadores, borgerkrig, demokrati)',
      'Lær om Spanias historie fra reconquista til moderne demokrati.',
      ['kjenne viktige perioder i Spanias historie', 'bruke historisk vokabular på spansk'],
      'Viktige perioder i Spanias historie',
      `**Spanias historie** kan deles inn i flere viktige perioder:\n\n| Periode | Tid | Beskrivelse |\n|---------|-----|-------------|\n| La Reconquista | 711-1492 | Gjenerobring fra maurerne |\n| El Siglo de Oro | 1500-1700 | Gullalderen - kunst, litteratur, imperium |\n| Los Conquistadores | 1500-tallet | Erobring av Amerika |\n| La Guerra Civil | 1936-1939 | Borgerkrigen |\n| La dictadura de Franco | 1939-1975 | Francos diktatur |\n| La Transición | 1975-1982 | Overgangen til demokrati |\n| España democrática | 1982- | Moderne demokrati, EU-medlem 1986 |\n\n**Nøkkelbegreper:** la monarquía (monarkiet), la república (republikken), la democracia (demokratiet), la constitución (grunnloven)`,
      'Spanias historie er lang og dramatisk, fra den mauriske perioden og reconquista til borgerkrigen og overgangen til demokrati. Å forstå denne historien gir innsikt i det moderne Spania.',
      ['## Reconquista og Siglo de Oro\n\nI 711 invaderte maurerne (los moros) den iberiske halvøy. **La Reconquista** (gjenerobringen) varte nesten 800 år og endte i 1492 da Granada falt.\n\nSamme år sendte dronning Isabel og kong Fernando Columbus til Amerika. Dette markerte starten på **El Siglo de Oro** (gullalderen), da Spania ble en verdensmakt med et enormt imperium.\n\n**Viktige årstall:**\n- 1492: Fall av Granada + Columbus\' reise\n- 1519: Cortés erobrer aztekerriket\n- 1532: Pizarro erobrer inkaene',
       '## Borgerkrigen og Franco\n\n**La Guerra Civil Española** (1936-1939) var en av Europas mest brutale konflikter. Den sto mellom:\n- **Los republicanos:** Valgt regjering, støttet av Sovjetunionen\n- **Los nacionalistas:** Militæropprør ledet av general Francisco Franco, støttet av Hitler og Mussolini\n\nFranco vant og styrte Spania som diktator i 36 år (1939-1975). Etter hans død begynte **La Transición** - en fredelig overgang til demokrati under kong Juan Carlos I.\n\n**Grunnloven av 1978** etablerte Spania som et konstitusjonelt monarki.'],
      [{ title: 'Tidslinjen', problem: 'Sett i riktig rekkefølge: Franco-diktaturet, Reconquista, Borgerkrigen, La Transición.', solution: '1. **Reconquista** (711-1492) → 2. **Borgerkrigen** (1936-1939) → 3. **Franco-diktaturet** (1939-1975) → 4. **La Transición** (1975-1982)' },
       { title: 'Årstall', problem: 'Hva skjedde i 1492?', solution: 'To viktige hendelser: **Fall av Granada** (slutten på Reconquista) og **Columbus\' reise** til Amerika.' }],
      [mkEx('lett', 'Match periode med årstall:', [
        ['La Reconquista', '711-1492'], ['El Siglo de Oro', '1500-1700'],
        ['La Guerra Civil', '1936-1939'], ['La Transición', '1975-1982']]),
       mkEx('lett', 'Match begrep med norsk oversettelse:', [
        ['la monarquía', 'monarkiet'], ['la dictadura', 'diktaturet'],
        ['la democracia', 'demokratiet'], ['la constitución', 'grunnloven']]),
       mkEx('medium', 'Svar på spørsmålene:', [
        ['Hvem var Francisco Franco?', 'En general som ledet nasjonalistene i borgerkrigen og styrte Spania som diktator fra 1939 til 1975.'],
        ['Hva var La Transición?', 'Den fredelige overgangen fra Francos diktatur til demokrati (1975-1982).'],
        ['Hvorfor er 1492 et viktig årstall?', 'Granada falt (slutten på Reconquista) og Columbus reiste til Amerika.'],
        ['Hvem var los conquistadores?', 'Spanske erobrere som erobret store deler av Amerika på 1500-tallet (f.eks. Cortés, Pizarro).']]),
       mkEx('vanskelig', 'Refleksjonsoppgaver - skriv 2-3 setninger på spansk:', [
        ['Hvorfor var borgerkrigen viktig for Spanias utvikling?', 'La Guerra Civil fue un conflicto devastador que dividió a España durante décadas. Después de la guerra, Franco impuso una dictadura que duró 36 años.'],
        ['Hva betyr La Transición for dagens Spania?', 'La Transición fue un proceso pacífico que permitió a España convertirse en una democracia moderna. Gracias a la Constitución de 1978, España es hoy un estado democrático.'],
        ['Sammenlign Reconquista med koloniseringen av Amerika.', 'Tanto la Reconquista como la colonización involucraron la conquista de territorios. Sin embargo, la Reconquista fue una recuperación de tierras propias, mientras que la colonización fue la conquista de nuevos continentes.'],
        ['Diskuter Francos innvirkning på spansk samfunn.', 'La dictadura de Franco suprimió libertades básicas como la libertad de expresión y los derechos regionales. Muchos españoles tuvieron que exiliarse, y el país quedó aislado internacionalmente.']])],
      '**Historisk kontekst:** Spanias historie hjelper oss å forstå dagens samfunn - for eksempel regionale spenninger (Cataluña, País Vasco) og det konstitusjonelle monarkiet.',
      '**Oppsummering: Spansk historie**\n\n- **Reconquista:** 711-1492, gjenerobring fra maurerne\n- **Siglo de Oro:** 1500-1700, gullalderen\n- **Conquistadores:** Erobring av Amerika (Cortés, Pizarro)\n- **Borgerkrigen:** 1936-1939, republikk vs. nasjonalisme\n- **Franco:** Diktatur 1939-1975\n- **La Transición:** Fredelig overgang til demokrati'
    ),
    mkSub('9.2', 'Historia de Latinoamérica', 'Latinamerikansk historie (kolonitid, uavhengighet)',
      'Lær om Latin-Amerikas historie fra kolonitiden til uavhengigheten.',
      ['kjenne hovedtrekkene i Latin-Amerikas historie', 'forstå kolonialismens konsekvenser'],
      'Kolonitid og uavhengighet i Latin-Amerika',
      `**Kolonitiden (1492-ca. 1825):**\nSpania kontrollerte store deler av Amerika i over 300 år.\n\n**Uavhengighetsbevegelsene (1810-1825):**\n\n| Leder | Land/Region | Periode |\n|-------|------------|--------|\n| Simón Bolívar | Venezuela, Colombia, Ecuador, Bolivia, Peru | 1810-1830 |\n| José de San Martín | Argentina, Chile, Peru | 1812-1824 |\n| Miguel Hidalgo | Mexico | 1810-1811 |\n| Bernardo O'Higgins | Chile | 1817-1823 |\n\n**Nøkkelbegreper:** la colonia (kolonien), la independencia (uavhengigheten), el libertador (frigjøreren), la esclavitud (slaveriet), los pueblos indígenas (urfolkene)`,
      'Latin-Amerikas historie er preget av kolonialisme, frigjøringskamp og nasjonsbygging. De spanske koloniene kjempet seg fri tidlig på 1800-tallet, ledet av helteskikkelser som Bolívar og San Martín.',
      ['## Kolonitiden\n\nSpanias kolonisering av Amerika hadde enorme konsekvenser:\n- **Urfolk:** Befolkningsreduksjon gjennom sykdommer, krig og tvangsarbeid\n- **Økonomi:** Utvinning av gull og sølv sendt til Spania\n- **Religion:** Katolisismen ble innført med makt\n- **Språk:** Spansk ble det dominerende språket\n- **Samfunn:** Et klassesystem basert på etnisitet (peninsulares, criollos, mestizos, indígenas)\n\n**Nøkkelord:**\n- *los peninsulares:* spanskfødte som bodde i Amerika\n- *los criollos:* amerikanskfødte med spanske foreldre\n- *los mestizos:* blandet opphav',
       '## Uavhengighetsbevegelsene\n\n**Simón Bolívar** (1783-1830) - \"El Libertador\" - drømte om et forent Sør-Amerika. Han frigjorde Venezuela, Colombia, Ecuador, Peru og Bolivia.\n\n**José de San Martín** (1778-1850) frigjorde Argentina, Chile og Peru fra sør.\n\n**Grito de Dolores** (1810): Presten Miguel Hidalgo startet den meksikanske uavhengighetskampen.\n\n**Viktige årstall:**\n- 1810: Starten på uavhengighetskampene\n- 1821: Mexico uavhengig\n- 1824: Slaget ved Ayacucho - siste store slag'],
      [{ title: 'Kolonisystemet', problem: 'Forklar forskjellen mellom peninsulares, criollos og mestizos.', solution: '**Peninsulares:** Født i Spania, bodde i Amerika - høyest status. **Criollos:** Født i Amerika med spanske foreldre - nest høyest. **Mestizos:** Blandet urfolks- og spansk opphav.' },
       { title: 'Bolívar', problem: 'Hvorfor kalles Bolívar \"El Libertador\"?', solution: 'Fordi han ledet frigjøringen av flere søramerikanske land: Venezuela, Colombia, Ecuador, Peru og Bolivia (oppkalt etter ham).' }],
      [mkEx('lett', 'Match leder med land:', [
        ['Simón Bolívar', 'Venezuela, Colombia, Ecuador, Bolivia, Peru'], ['José de San Martín', 'Argentina, Chile, Peru'],
        ['Miguel Hidalgo', 'Mexico'], ['Bernardo O\'Higgins', 'Chile']]),
       mkEx('lett', 'Match begrep med norsk:', [
        ['la colonia', 'kolonien'], ['la independencia', 'uavhengigheten'],
        ['el libertador', 'frigjøreren'], ['la esclavitud', 'slaveriet']]),
       mkEx('medium', 'Svar på spørsmålene:', [
        ['Hva var de viktigste konsekvensene av koloniseringen?', 'Befolkningsreduksjon blant urfolk, innføring av spansk språk og katolsk religion, økonomisk utbytting.'],
        ['Hvem startet Mexicos uavhengighetskamp?', 'Presten Miguel Hidalgo med Grito de Dolores i 1810.'],
        ['Hva drømte Bolívar om?', 'Et forent Sør-Amerika, uten kolonialisme.'],
        ['Hva skjedde i 1824?', 'Slaget ved Ayacucho - det siste store slaget i uavhengighetskrigene.']]),
       mkEx('vanskelig', 'Refleksjonsoppgaver - skriv 2-3 setninger på spansk:', [
        ['Diskuter konsekvensene av kolonialismen for urfolk.', 'La colonización tuvo consecuencias devastadoras para los pueblos indígenas: enfermedades, trabajo forzado y pérdida de sus tierras y culturas.'],
        ['Hvorfor er Bolívar en viktig historisk person?', 'Bolívar es importante porque lideró la independencia de varios países sudamericanos y soñó con la unidad latinoamericana.'],
        ['Sammenlign koloniseringen av Amerika med kolonialisme i Afrika.', 'Tanto en América como en África, la colonización significó explotación económica y opresión cultural. Sin embargo, la colonización de América comenzó siglos antes.'],
        ['Hvilke spor har kolonitiden etterlatt i dag?', 'La colonización dejó huellas en el idioma (español), la religión (católica), la cultura y las desigualdades sociales que aún existen.']])],
      '**Kolonialismens arv:** Mange av dagens utfordringer i Latin-Amerika har røtter i kolonitiden - sosial ulikhet, jordfordeling og kulturelle spenninger.',
      '**Oppsummering: Latinamerikansk historie**\n\n- **Kolonitiden:** 1492-ca. 1825, spansk kontroll\n- **Konsekvenser:** Urfolksreduksjon, språk, religion, klassesystem\n- **Uavhengighet:** 1810-1824, ledet av Bolívar, San Martín, Hidalgo\n- **Arv:** Sosial ulikhet, kulturell blanding, språklig enhet'
    ),
    mkSub('9.3', 'España y Latinoamérica hoy', 'Spansktalende land i dag',
      'Forstå dagens politiske og økonomiske situasjon i spansktalende land.',
      ['beskrive aktuelle forhold i spansktalende land', 'bruke nyhetsrelatert vokabular'],
      'Spansktalende land i dag',
      `**Spania i dag:**\n- Konstitusjonelt monarki (kong Felipe VI)\n- EU-medlem siden 1986\n- Parlamentarisk demokrati\n- Utfordringer: arbeidsledighet, regional autonomi (Cataluña)\n\n**Latin-Amerika i dag:**\n\n| Land | Styreform | Økonomisk nøkkel |\n|------|-----------|------------------|\n| Mexico | Føderal republikk | Olje, turisme, industri |\n| Colombia | Presidentsrepublikk | Kaffe, olje, fredsprosess |\n| Argentina | Føderal republikk | Jordbruk, økonomi i krise |\n| Chile | Presidentsrepublikk | Kobber, vin, stabil økonomi |\n| Peru | Presidentsrepublikk | Gruvedrift, turisme |\n\n**Nøkkelbegreper:** el gobierno (regjeringen), el parlamento (parlamentet), el presidente (presidenten), la economía (økonomien), el desempleo (arbeidsledigheten)`,
      'I dag er de spansktalende landene et mangfoldig fellesskap med ulike styreformer, økonomiske systemer og utfordringer. Spania er EU-medlem, mens Latin-Amerika har alt fra stabile demokratier til land i politisk uro.',
      ['## Spanias utfordringer\n\n**Regionale spenninger:**\n- **Cataluña:** Uavhengighetsbevegelses folkeavstemning i 2017\n- **País Vasco:** Historisk ETA-terrorisme, nå fredelig\n- **Diskusjon:** Autonomi vs. nasjonal enhet\n\n**Økonomi:**\n- Stor finanskrise 2008-2014\n- Høy ungdomsarbeidsledighet\n- Turisme som viktig næring\n\n**Nyttige uttrykk:**\n- *El gobierno español...* (Den spanske regjeringen...)\n- *España es miembro de la UE.* (Spania er EU-medlem.)\n- *El desempleo juvenil es un problema.* (Ungdomsarbeidsledighet er et problem.)',
       '## Latin-Amerika: Utfordringer og muligheter\n\n**Felles utfordringer:**\n- Sosial ulikhet (*la desigualdad social*)\n- Fattigdom (*la pobreza*)\n- Korrupsjon (*la corrupción*)\n- Miljøproblemer (*los problemas medioambientales*)\n\n**Muligheter:**\n- Ung befolkning\n- Naturressurser\n- Kulturell rikdom\n- Økonomisk vekst i flere land\n\n**Colombias fredsprosess:** I 2016 ble det signert en fredsavtale mellom regjeringen og FARC-geriljaen etter over 50 års konflikt.'],
      [{ title: 'Spania i dag', problem: 'Hva slags styreform har Spania?', solution: 'Spania er et **konstitusjonelt monarki** med et parlamentarisk demokrati. Kongen er statsoverhode, mens regjeringssjefen (presidente del gobierno) har den utøvende makten.' },
       { title: 'Latin-Amerika', problem: 'Nevn tre utfordringer for Latin-Amerika i dag.', solution: 'Sosial ulikhet (**la desigualdad social**), fattigdom (**la pobreza**) og korrupsjon (**la corrupción**). Andre: miljøproblemer, arbeidsledighet.' }],
      [mkEx('lett', 'Match land med fakta:', [
        ['Spania', 'EU-medlem, konstitusjonelt monarki'], ['Mexico', 'Føderal republikk, olje og turisme'],
        ['Colombia', 'Fredsprosess med FARC, kaffe'], ['Chile', 'Stabil økonomi, kobber og vin']]),
       mkEx('lett', 'Match begrep med norsk:', [
        ['el gobierno', 'regjeringen'], ['el desempleo', 'arbeidsledigheten'],
        ['la desigualdad', 'ulikheten'], ['la pobreza', 'fattigdommen']]),
       mkEx('medium', 'Svar på spørsmålene på spansk:', [
        ['Hva slags styreform har Spania?', 'España es una monarquía constitucional con un sistema parlamentario.'],
        ['Hva er en stor utfordring for Spania?', 'Un gran desafío para España es el desempleo juvenil y las tensiones regionales, como en Cataluña.'],
        ['Hva skjedde i Colombia i 2016?', 'En 2016, el gobierno colombiano firmó un acuerdo de paz con la guerrilla de las FARC.'],
        ['Hvorfor er turisme viktig for Spania?', 'El turismo es importante para la economía española porque genera empleo y ingresos.']]),
       mkEx('vanskelig', 'Refleksjonsoppgaver - skriv 3-4 setninger:', [
        ['Diskuter Cataluñas uavhengighetsbevegelse.', 'La cuestión catalana es compleja. Muchos catalanes quieren la independencia, pero el gobierno español lo considera inconstitucional. En 2017 hubo un referéndum ilegal que causó una gran crisis política.'],
        ['Sammenlign utfordringene til Spania og Norge.', 'Tanto España como Noruega enfrentan desafíos económicos. Sin embargo, el desempleo es mucho más alto en España. A diferencia de Noruega, España no tiene grandes reservas de petróleo.'],
        ['Diskuter Latin-Amerikas fremtid.', 'Latinoamérica tiene un gran potencial gracias a su joven población y sus recursos naturales. Sin embargo, necesita superar problemas como la desigualdad y la corrupción.'],
        ['Hva kan vi lære av Colombias fredsprosess?', 'El proceso de paz en Colombia nos enseña que el diálogo puede resolver conflictos largos. También muestra que la paz requiere compromiso de todas las partes.']])],
      '**Aktualitet:** Følg nyheter fra spansktalende land på nett (f.eks. BBC Mundo, El País) for å holde deg oppdatert og øve spansk.',
      '**Oppsummering: Spansktalende land i dag**\n\n- **Spania:** Monarki, EU, regionalisme, arbeidsledighet\n- **Latin-Amerika:** Demokratier, sosial ulikhet, korrupsjon, potensial\n- **Colombia:** Fredsprosess 2016\n- **Uttrykk:** el gobierno, el desempleo, la desigualdad, la pobreza'
    ),
    mkSub('9.4', 'Reflexiones históricas', 'Historiske refleksjoner og sammenhenger',
      'Lær å reflektere over historiske hendelser og trekke sammenhenger til i dag.',
      ['analysere historiske hendelser', 'skrive refleksjonstekster om historie'],
      'Historisk refleksjon og analyse',
      `**Å reflektere over historie** betyr å:\n1. **Forstå** hva som skjedde og hvorfor\n2. **Analysere** konsekvensene\n3. **Sammenligne** med andre hendelser\n4. **Koble** fortid og nåtid\n\n**Nyttige uttrykk for historisk refleksjon:**\n\n| Spansk | Norsk |\n|--------|-------|\n| En el siglo... | På ...hundretallet |\n| Durante la época de... | I perioden... |\n| Como consecuencia de... | Som følge av... |\n| Esto llevó a... | Dette førte til... |\n| Podemos ver que... | Vi kan se at... |\n| En la actualidad... | I dag... |\n| A lo largo de la historia... | Gjennom historien... |`,
      'Å reflektere over historie er mer enn å lære årstall. Det handler om å forstå **sammenhenger** mellom fortid og nåtid, og å analysere **årsaker og konsekvenser** av historiske hendelser.',
      ['## Strukturere en historisk refleksjon\n\n**Essay-struktur:**\n1. **Introducción:** Presenter temaet og din problemstilling\n2. **Contexto histórico:** Beskriv bakgrunnen\n3. **Análisis:** Drøft årsaker og konsekvenser\n4. **Conexión con el presente:** Koble til nåtiden\n5. **Conclusión:** Oppsummer og gi din mening\n\n**Eksempel på åpning:**\n*A lo largo de la historia, España ha experimentado grandes cambios políticos. En este ensayo, voy a analizar...* (Gjennom historien har Spania opplevd store politiske endringer. I dette essayet skal jeg analysere...)',
       '## Koble fortid og nåtid\n\n**Fra Reconquista til i dag:**\n- Maurisk arkitektur i Andalucía (Alhambra) → turisme i dag\n- Kolonialismens klassesystem → sosial ulikhet i Latin-Amerika\n- Borgerkrigen → generasjonskonflikter, minnespolitikk\n- La Transición → dagens konstitusjonelle monarki\n\n**Formuler sammenhenger:**\n- *Como consecuencia de la colonización, hoy en día...* (Som følge av koloniseringen, i dag...)\n- *La Guerra Civil todavía afecta a...* (Borgerkrigen påvirker fortsatt...)\n- *Los efectos de... se pueden ver en...* (Effektene av... kan ses i...)'],
      [{ title: 'Årsak-virkning', problem: 'Hva var en konsekvens av koloniseringen for språket i Latin-Amerika?', solution: '**Como consecuencia de la colonización**, el español se convirtió en el idioma principal de gran parte de América Latina. (Som følge av koloniseringen ble spansk hovedspråket i store deler av Latin-Amerika.)' },
       { title: 'Koble fortid-nåtid', problem: 'Hvordan påvirker borgerkrigen Spania i dag?', solution: 'La Guerra Civil **todavía afecta a** la sociedad española. Hay debates sobre la memoria histórica y cómo recordar a las víctimas. (Borgerkrigen påvirker fortsatt det spanske samfunnet. Det er debatter om historisk minne.)' }],
      [mkEx('lett', 'Match historisk hendelse med konsekvens:', [
        ['Koloniseringen av Amerika', 'Spansk ble hovedspråket i Latin-Amerika'], ['Borgerkrigen', 'Franco-diktaturet i 36 år'],
        ['La Transición', 'Spania ble et demokrati'], ['EU-medlemskap (1986)', 'Økonomisk vekst og modernisering']]),
       mkEx('lett', 'Fyll inn riktig uttrykk:', [
        ['___ la época colonial, los indígenas sufrieron mucho.', 'Durante'], ['___ de la guerra, España quedó dividida.', 'Como consecuencia'],
        ['___ la historia, España ha cambiado mucho.', 'A lo largo de'], ['___, España es una democracia.', 'En la actualidad']]),
       mkEx('medium', 'Skriv sammenhenger mellom fortid og nåtid:', [
        ['Maurisk arkitektur → turisme', 'Como consecuencia de la influencia árabe, hoy podemos visitar monumentos como la Alhambra, que atrae a millones de turistas.'],
        ['Kolonialisme → ulikhet', 'El sistema colonial creó desigualdades que todavía existen en Latinoamérica.'],
        ['Borgerkrig → minneskultur', 'La Guerra Civil todavía genera debates sobre la memoria histórica en España.'],
        ['La Transición → demokrati', 'Gracias a la Transición, España es hoy una democracia moderna y miembro de la Unión Europea.']]),
       mkEx('vanskelig', 'Skriv en kort historisk refleksjon (4-5 setninger):', [
        ['Reflekter over kolonialismens konsekvenser for Latin-Amerika.', 'A lo largo de tres siglos, España colonizó gran parte de América. Como consecuencia, el español se convirtió en el idioma principal. Sin embargo, la colonización también causó sufrimiento entre los pueblos indígenas. En la actualidad, podemos ver los efectos en la desigualdad social.'],
        ['Reflekter over La Transición i Spania.', 'Después de la muerte de Franco en 1975, España inició una transición pacífica a la democracia. La Constitución de 1978 estableció un sistema democrático. Esto llevó a la modernización del país y su entrada en la Unión Europea en 1986.'],
        ['Sammenlign to historiske hendelser.', 'Tanto la Reconquista como las guerras de independencia fueron luchas por la libertad. Sin embargo, mientras la Reconquista duró casi 800 años, las independencias se lograron en pocas décadas.'],
        ['Diskuter historiens relevans for oss i dag.', 'Estudiar la historia nos ayuda a entender el presente. Por ejemplo, las tensiones en Cataluña tienen raíces históricas. A lo largo de la historia, los conflictos entre regiones y el gobierno central han sido una constante en España.']])],
      '**Refleksjonstips:** Bruk alltid konkrete eksempler når du analyserer historie. Unngå generaliseringer og vis at du forstår nyanser.',
      '**Oppsummering: Historisk refleksjon**\n\n- **Metode:** Forstå → Analysere → Sammenligne → Koble til nåtid\n- **Struktur:** Introducción → Contexto → Análisis → Conexión → Conclusión\n- **Uttrykk:** Como consecuencia de, Esto llevó a, A lo largo de la historia, En la actualidad\n- **Viktig:** Bruk konkrete eksempler, vis sammenhenger'
    ),
  ]
};

const s2ch10 = {
  title: 'COMUNICACIÓN AVANZADA',
  subs: [
    mkSub('10.1', 'Expresar opiniones', 'Uttrykke meninger',
      'Lær å uttrykke meninger, enighet og uenighet på spansk.',
      ['uttrykke egne meninger', 'uttrykke enighet og uenighet høflig'],
      'Meningsuttrykk (expresar opiniones)',
      `**Uttrykke meninger:**\n\n| Spansk | Norsk |\n|--------|-------|\n| Creo que... | Jeg tror at... |\n| Me parece que... | Det virker for meg som... |\n| En mi opinión... | Etter min mening... |\n| Pienso que... | Jeg tenker at... |\n| Considero que... | Jeg anser at... |\n\n**Enighet:**\n| Estoy de acuerdo (con) | Jeg er enig (med) |\n| Tienes razón | Du har rett |\n| Exactamente | Nettopp |\n\n**Uenighet:**\n| No estoy de acuerdo | Jeg er ikke enig |\n| No creo que... (+subjuntivo) | Jeg tror ikke at... |\n| Respeto tu opinión, pero... | Jeg respekterer din mening, men... |`,
      'Å kunne uttrykke meninger er en viktig kommunikasjonsferdighet. I dette kapittelet lærer du å si hva du mener, og å uttrykke enighet og uenighet **høflig** på spansk.',
      ['## Grader av enighet\n\n**Helt enig:**\n- *Estoy totalmente de acuerdo.* (Jeg er helt enig.)\n- *¡Exactamente! Tienes toda la razón.* (Nettopp! Du har helt rett.)\n\n**Delvis enig:**\n- *Estoy de acuerdo en parte, pero...* (Jeg er delvis enig, men...)\n- *Tienes razón en eso, sin embargo...* (Du har rett i det, likevel...)\n\n**Uenig:**\n- *No estoy de acuerdo porque...* (Jeg er ikke enig fordi...)\n- *Respeto tu opinión, pero creo que...* (Jeg respekterer din mening, men jeg tror at...)\n\n**Sterkt uenig:**\n- *No estoy nada de acuerdo.* (Jeg er slett ikke enig.)\n- *Me parece que estás equivocado/a.* (Jeg synes du tar feil.)',
       '## Debatt og diskusjon\n\n**Starter en mening:**\n- *Yo creo que la educación es importante.* (Jeg tror utdanning er viktig.)\n\n**Spørre om andres mening:**\n- *¿Qué piensas tú?* (Hva tenker du?)\n- *¿Estás de acuerdo?* (Er du enig?)\n- *¿Cuál es tu opinión?* (Hva er din mening?)\n\n**Bygge på andres mening:**\n- *Como dice María...* (Som María sier...)\n- *Estoy de acuerdo con Juan porque...* (Jeg er enig med Juan fordi...)'],
      [{ title: 'Uttrykke mening', problem: 'Si at du mener at spansk er et vakkert språk.', solution: '**Creo que** el español es un idioma bonito. / **En mi opinión**, el español es un idioma muy bonito.' },
       { title: 'Uenighet', problem: 'Uttrykk høflig uenighet med noen som sier at ferie er bortkastet tid.', solution: '**Respeto tu opinión, pero** creo que las vacaciones son necesarias para descansar. / **No estoy de acuerdo** porque todos necesitamos tiempo libre.' }],
      [mkEx('lett', 'Fyll inn riktig uttrykk for meninger:', [
        ['___ que el español es fácil. (Jeg tror)', 'Creo'], ['En mi ___, los idiomas son importantes. (mening)', 'opinión'],
        ['___ de acuerdo contigo. (Jeg er)', 'Estoy'], ['___ razón. (Du har)', 'Tienes']]),
       mkEx('lett', 'Match spansk med norsk:', [
        ['Creo que...', 'Jeg tror at...'], ['No estoy de acuerdo', 'Jeg er ikke enig'],
        ['Me parece que...', 'Det virker for meg som...'], ['Tienes razón', 'Du har rett']]),
       mkEx('medium', 'Uttrykk din mening om disse temaene:', [
        ['Skoleuniformer', 'Creo que los uniformes escolares son / no son una buena idea porque...'],
        ['Sosiale medier', 'En mi opinión, las redes sociales tienen ventajas y desventajas...'],
        ['Miljøvern', 'Pienso que es importante proteger el medio ambiente porque...'],
        ['Leksefri skole', 'Me parece que la escuela sin deberes sería... porque...']]),
       mkEx('vanskelig', 'Skriv en kort debatt - gi mening, enighet og uenighet:', [
        ['Tema: \"Alle burde lære et fremmedspråk.\" - Si deg enig.', 'Estoy totalmente de acuerdo con que todos deberían aprender un idioma extranjero. Creo que aprender idiomas abre puertas y nos permite conocer otras culturas.'],
        ['Tema: \"Teknologi gjør oss dumme.\" - Si deg uenig.', 'No estoy de acuerdo con que la tecnología nos haga más tontos. En mi opinión, la tecnología nos da acceso a más información y herramientas de aprendizaje.'],
        ['Tema: \"Det er viktigere å reise enn å studere.\" - Delvis enig.', 'Estoy de acuerdo en parte. Viajar es muy educativo, pero pienso que los estudios también son importantes. Lo ideal es combinar ambas cosas.'],
        ['Tema: \"Spansk er viktigere enn tysk.\" - Gi en balansert mening.', 'Creo que ambos idiomas son importantes. Sin embargo, el español se habla en más países. Respeto la opinión de quienes prefieren el alemán, pero me parece que el español tiene más hablantes.']])],
      '**Høflighet:** I en debatt er det viktig å respektere andres meninger. Bruk uttrykk som *respeto tu opinión, pero...* for å uttrykke uenighet uten å være uhøflig.',
      '**Oppsummering: Uttrykke meninger**\n\n- **Mening:** Creo que, Me parece que, En mi opinión, Pienso que\n- **Enighet:** Estoy de acuerdo, Tienes razón, Exactamente\n- **Uenighet:** No estoy de acuerdo, Respeto tu opinión pero...\n- **Spørre:** ¿Qué piensas? ¿Estás de acuerdo?\n- **Viktig:** Vær høflig, respekter andres meninger'
    ),
    mkSub('10.2', 'Argumentación escrita', 'Skriftlig argumentasjon',
      'Lær å strukturere argumenterende tekster med konnektorer.',
      ['skrive argumenterende tekster', 'bruke konnektorer og bindeord'],
      'Argumenterende tekst (texto argumentativo)',
      `**Struktur for argumenterende tekst:**\n\n1. **Introducción:** Presenter temaet og din tese\n2. **Desarrollo:** Argumenter for og imot\n3. **Conclusión:** Oppsummer og gi din mening\n\n**Viktige konnektorer:**\n\n| Spansk | Norsk | Funksjon |\n|--------|-------|----------|\n| Por lo tanto | Derfor | Konklusjon |\n| Sin embargo | Likevel | Motsetning |\n| Además | Dessuten | Tillegg |\n| En primer lugar | For det første | Ordne |\n| Por otro lado | På den annen side | Kontrast |\n| En conclusión | Avslutningsvis | Oppsummering |\n| Aunque | Selv om | Innrømmelse |\n| Por ejemplo | For eksempel | Eksempel |`,
      'Å skrive argumenterende tekster er en viktig ferdighet i spanskfaget. Du trenger en klar **struktur** og gode **konnektorer** (bindeord) for å koble argumentene dine.',
      ['## Konnektorer i praksis\n\n**Ordne argumenter:**\n- *En primer lugar, creo que...* (For det første tror jeg at...)\n- *En segundo lugar...* (For det andre...)\n- *Por último...* (Til slutt...)\n\n**Legge til:**\n- *Además, es importante...* (Dessuten er det viktig...)\n- *También hay que considerar...* (Man må også vurdere...)\n\n**Motsetning:**\n- *Sin embargo, otros piensan que...* (Likevel mener andre at...)\n- *Por otro lado...* (På den annen side...)\n- *Aunque es verdad que..., creo que...* (Selv om det er sant at..., tror jeg at...)',
       '## Eksempel på argumenterende tekst\n\n**Tema: ¿Es importante aprender idiomas?**\n\n*En mi opinión, aprender idiomas es fundamental en el mundo actual.*\n\n*En primer lugar, hablar otros idiomas nos permite comunicarnos con más personas. **Además**, conocer un idioma significa conocer una cultura.*\n\n***Sin embargo**, algunos argumentan que la tecnología de traducción hace innecesario aprender idiomas. **Aunque** la tecnología avanza, **creo que** hablar directamente con personas de otras culturas es insustituible.*\n\n***En conclusión**, aprender idiomas es una inversión en nuestro futuro.*'],
      [{ title: 'Konnektorer', problem: 'Bind sammen: \"Spansk er nyttig.\" + \"Mange snakker det.\"', solution: 'El español es útil. **Además**, muchos lo hablan. / El español es útil **porque** muchos lo hablan.' },
       { title: 'Motargument', problem: 'Presenter et motargument til \"Vi trenger ikke lære fremmedspråk.\"', solution: '**Sin embargo**, aprender idiomas nos permite comunicarnos con personas de otras culturas y entender diferentes perspectivas.' }],
      [mkEx('lett', 'Match konnektor med funksjon:', [
        ['Por lo tanto', 'Konklusjon (derfor)'], ['Sin embargo', 'Motsetning (likevel)'],
        ['Además', 'Tillegg (dessuten)'], ['En conclusión', 'Oppsummering (avslutningsvis)']]),
       mkEx('lett', 'Fyll inn riktig konnektor:', [
        ['___, creo que el español es importante. (For det første)', 'En primer lugar'], ['___, muchos países hablan español. (Dessuten)', 'Además'],
        ['___, algunos prefieren el inglés. (Likevel)', 'Sin embargo'], ['___, aprender idiomas es positivo. (Avslutningsvis)', 'En conclusión']]),
       mkEx('medium', 'Skriv setninger med konnektorer:', [
        ['Bruk \"sin embargo\" - spansk er vanskelig, men verdt det.', 'El español puede ser difícil. Sin embargo, vale la pena aprenderlo.'],
        ['Bruk \"además\" - legg til et argument for språklæring.', 'Aprender español es divertido. Además, nos permite viajar a muchos países.'],
        ['Bruk \"por lo tanto\" - trekk en konklusjon.', 'El español se habla en 21 países. Por lo tanto, es un idioma muy útil.'],
        ['Bruk \"aunque\" - innrøm noe, men hold fast.', 'Aunque el inglés es el idioma global, creo que el español también es muy importante.']]),
       mkEx('vanskelig', 'Skriv en kort argumenterende tekst (5-6 setninger) om temaet:', [
        ['\"Er det viktig å reise?\"', 'En mi opinión, viajar es muy importante. En primer lugar, nos permite conocer otras culturas. Además, viajando aprendemos a ser más tolerantes. Sin embargo, no todos tienen la oportunidad de viajar. Por lo tanto, es importante que los viajes sean accesibles para todos. En conclusión, viajar enriquece nuestra vida.'],
        ['\"Bør alle lære et fremmedspråk?\"', 'Creo que todos deberían aprender al menos un idioma extranjero. En primer lugar, facilita la comunicación internacional. Además, aprender idiomas mejora la capacidad cognitiva. Aunque la tecnología ofrece traducción automática, hablar directamente es más auténtico. En conclusión, aprender idiomas es una inversión valiosa.'],
        ['\"Er sosiale medier positivt eller negativt?\"', 'Las redes sociales tienen aspectos positivos y negativos. Por un lado, nos permiten estar conectados con amigos y familia. Además, son una fuente de información. Sin embargo, pueden causar adicción y problemas de salud mental. En conclusión, debemos usarlas con moderación.'],
        ['\"Er det viktig å bevare tradisjoner?\"', 'En mi opinión, es importante preservar las tradiciones. En primer lugar, las tradiciones nos conectan con nuestra historia. Además, forman parte de nuestra identidad cultural. Sin embargo, también debemos estar abiertos al cambio. Por lo tanto, lo ideal es encontrar un equilibrio entre tradición y modernidad.']])],
      '**Skrivetips:** Les teksten din høyt for å sjekke flyten. Bruk konnektorer for å binde sammen avsnitt og argumenter.',
      '**Oppsummering: Skriftlig argumentasjon**\n\n- **Struktur:** Introducción → Desarrollo → Conclusión\n- **Ordne:** En primer lugar, En segundo lugar, Por último\n- **Tillegg:** Además, También\n- **Motsetning:** Sin embargo, Por otro lado, Aunque\n- **Konklusjon:** Por lo tanto, En conclusión'
    ),
    mkSub('10.3', 'Presentaciones orales', 'Muntlige presentasjoner',
      'Lær å strukturere og holde muntlige presentasjoner på spansk.',
      ['holde muntlige presentasjoner', 'bruke presentasjonsfraser'],
      'Muntlig presentasjon (presentación oral)',
      `**Struktur for muntlig presentasjon:**\n\n1. **Saludo:** Hils og presenter deg\n2. **Introducción:** Presenter temaet\n3. **Desarrollo:** Hoveddelen\n4. **Conclusión:** Oppsummering\n5. **Preguntas:** Spørsmål fra publikum\n\n**Nyttige fraser:**\n\n| Fase | Frase |\n|------|-------|\n| Åpning | Buenos días, me llamo... Hoy voy a hablar sobre... |\n| Tema | El tema de mi presentación es... |\n| Struktur | Primero voy a hablar de... Después... |\n| Eksempel | Por ejemplo... Un ejemplo de esto es... |\n| Overgang | Ahora pasemos a... Otro punto importante es... |\n| Avslutning | En resumen... Para finalizar... |\n| Spørsmål | ¿Tienen alguna pregunta? |`,
      'Muntlige presentasjoner er en viktig del av spanskfaget. Å ha en klar **struktur** og gode **fraser** gjør presentasjonen din profesjonell og overbevisende.',
      ['## Tips for god presentasjon\n\n**Forberedelse:**\n- Skriv stikkord, ikke hele setninger\n- Øv foran speil eller venner\n- Planlegg tidsbruken\n- Forbered deg på spørsmål\n\n**Framføring:**\n- Snakk tydelig og ikke for fort\n- Ha øyekontakt med publikum\n- Bruk kroppsspråk\n- Varier stemmen\n\n**Vanlige feil:**\n- ❌ Lese opp fra manus\n- ❌ Snakke for fort\n- ❌ Unngå øyekontakt\n- ✅ Bruke stikkord\n- ✅ Se på publikum\n- ✅ Ta pauser',
       '## Eksempel: Mini-presentasjon\n\n*Buenos días a todos. Me llamo Ana y hoy voy a hablar sobre las fiestas españolas.*\n\n*Primero, voy a presentar las fiestas más importantes de España. Después, voy a comparar una fiesta española con una noruega.*\n\n*En primer lugar, una de las fiestas más famosas es la Semana Santa, que se celebra antes de Pascua. Por ejemplo, en Sevilla hay procesiones impresionantes.*\n\n*Para finalizar, podemos ver que tanto España como Noruega tienen tradiciones importantes. ¿Tienen alguna pregunta?*'],
      [{ title: 'Åpning', problem: 'Skriv en åpning for en presentasjon om Mexico.', solution: '*Buenos días. Me llamo (navn) y hoy voy a hablar sobre México. El tema de mi presentación es la cultura mexicana.*' },
       { title: 'Overgang', problem: 'Lag en overgang mellom to temaer: mat → musikk.', solution: '*Ahora pasemos a otro tema interesante: la música mexicana.* / *Otro punto importante es la música.*' }],
      [mkEx('lett', 'Match fase med frase:', [
        ['Åpning', 'Buenos días, me llamo... Hoy voy a hablar sobre...'], ['Struktur', 'Primero voy a hablar de... Después...'],
        ['Overgang', 'Ahora pasemos a... Otro punto importante es...'], ['Avslutning', 'En resumen... Para finalizar...']]),
       mkEx('lett', 'Fyll inn riktig frase:', [
        ['___, me llamo Pedro. (God dag)', 'Buenos días'], ['___ de mi presentación es la música. (Temaet)', 'El tema'],
        ['___ voy a hablar de la historia. (Først)', 'Primero'], ['___ alguna pregunta? (Har dere)', '¿Tienen']]),
       mkEx('medium', 'Skriv presentasjonsdeler:', [
        ['Åpning for en presentasjon om spansk mat', 'Buenos días a todos. Me llamo... y hoy voy a hablar sobre la comida española.'],
        ['Strukturoversikt med tre punkter', 'Primero, voy a hablar de los platos típicos. Después, voy a explicar los horarios de comida. Por último, voy a comparar con la comida noruega.'],
        ['En overgang fra historie til kultur', 'Ahora pasemos a otro aspecto interesante: la cultura española.'],
        ['Avslutning med oppsummering', 'En resumen, hemos visto que la comida española es variada y deliciosa. ¿Tienen alguna pregunta?']]),
       mkEx('vanskelig', 'Skriv en komplett mini-presentasjon (6-8 setninger):', [
        ['Tema: Din favorittby i den spansktalende verden', 'Buenos días. Hoy voy a hablar sobre Barcelona. Primero, voy a describir la ciudad. Barcelona está en Cataluña, en el noreste de España. Es famosa por la arquitectura de Gaudí, como la Sagrada Familia. Además, tiene playas bonitas y una vida cultural muy rica. En conclusión, Barcelona es una ciudad fascinante que combina historia, arte y naturaleza. ¿Tienen alguna pregunta?'],
        ['Tema: En spansktalende tradisjon', 'Buenos días a todos. El tema de mi presentación es el Día de los Muertos en México. Esta tradición se celebra el 1 y 2 de noviembre. Las familias crean altares con flores, comida y fotos de sus seres queridos. A diferencia de otras tradiciones similares, es una celebración alegre. En resumen, el Día de los Muertos es una tradición única que celebra la vida. ¿Alguna pregunta?'],
        ['Tema: Hvorfor du lærer spansk', 'Buenos días. Me llamo... y hoy voy a explicar por qué estoy aprendiendo español. En primer lugar, el español es uno de los idiomas más hablados del mundo. Además, me interesa la cultura hispana, especialmente la música y la comida. También me gustaría viajar a Latinoamérica en el futuro. En conclusión, aprender español me abre muchas puertas. ¿Tienen alguna pregunta?'],
        ['Tema: Sammenligning mellom Norge og et spansktalende land', 'Buenos días. Hoy voy a comparar Noruega con España. Primero, voy a hablar del clima: en Noruega hace mucho frío, mientras que en España hace calor. Después, los horarios son muy diferentes: los españoles comen y cenan más tarde. Sin embargo, ambos países valoran la educación y la democracia. En conclusión, aunque son muy diferentes, Noruega y España tienen mucho en común. ¿Alguna pregunta?']])],
      '**Presentasjonstips:** Øv med en venn eller foran speilet. Jo mer du øver, desto tryggere blir du. Husk: alle er nervøse!',
      '**Oppsummering: Muntlige presentasjoner**\n\n- **Struktur:** Saludo → Introducción → Desarrollo → Conclusión → Preguntas\n- **Åpning:** Buenos días, hoy voy a hablar sobre...\n- **Overgang:** Ahora pasemos a, Otro punto importante es\n- **Avslutning:** En resumen, Para finalizar\n- **Tips:** Stikkord, øyekontakt, tydelig tale'
    ),
    mkSub('10.4', 'Repaso general nivel 2', 'Repetisjon nivå 2',
      'Repeter og oppsummer de viktigste grammatiske og kommunikative temaene fra nivå 2.',
      ['repetere nøkkelgrammatikk fra nivå 2', 'kombinere grammatikk og kommunikasjon'],
      'Oppsummering av nivå 2',
      `**Nøkkelgrammatikk fra Spansk 2:**\n\n| Tema | Eksempel |\n|------|----------|\n| Pretérito indefinido | Ayer **comí** paella. |\n| Pretérito imperfecto | De niño **jugaba** al fútbol. |\n| Indefinido vs. imperfecto | **Llovía** cuando **salí**. |\n| Futuro simple | Mañana **iré** a España. |\n| Condicional | Me **gustaría** viajar. |\n| Subjuntivo (intro) | Quiero que **vengas**. |\n| Pronombres de objeto | **Se lo** doy. |\n| Relativpronomen | El libro **que** leo. |\n| Konnektorer | Sin embargo, además, por lo tanto |\n| Meningsuttrykk | Creo que, En mi opinión |`,
      'I dette siste kapittelet repeterer vi de viktigste temaene fra Spansk nivå 2. Bruk dette som en sjekkliste for å sikre at du mestrer de viktigste ferdighetene.',
      ['## Grammatikk-sjekkliste\n\n**Verbaltider:**\n- ✅ Pretérito indefinido (fullførte handlinger)\n- ✅ Pretérito imperfecto (bakgrunn, vaner)\n- ✅ Indefinido vs. imperfecto (kombinasjon)\n- ✅ Futuro simple (framtid)\n- ✅ Condicional (betingelse, høflighet)\n- ✅ Subjuntivo (introduksjon)\n\n**Pronomen:**\n- ✅ Direkte objektspronomen (lo, la, los, las)\n- ✅ Indirekte objektspronomen (me, te, le, nos, les)\n- ✅ Doble pronomen (se lo, se la)\n- ✅ Relativpronomen (que, quien, donde, lo que)',
       '## Kommunikasjon-sjekkliste\n\n**Skriftlig:**\n- ✅ Argumenterende tekst (introducción, desarrollo, conclusión)\n- ✅ Konnektorer (sin embargo, además, por lo tanto)\n- ✅ Litterær analyse\n- ✅ Historisk refleksjon\n\n**Muntlig:**\n- ✅ Uttrykke meninger (creo que, en mi opinión)\n- ✅ Enighet/uenighet (estoy de acuerdo/no estoy de acuerdo)\n- ✅ Presentasjoner (struktur og fraser)\n- ✅ Kultursammenligninger\n\n**Kultur:**\n- ✅ Fester og tradisjoner\n- ✅ Litteratur (forfattere og sjangre)\n- ✅ Historie (Spania og Latin-Amerika)\n- ✅ Mangfold i den spansktalende verden'],
      [{ title: 'Verbaltider', problem: 'Bruk riktig tid: \"Ayer ___ (ir) al cine. De niño, siempre ___ (ir) con mis padres.\"', solution: 'Ayer **fui** al cine. (indefinido - fullført). De niño, siempre **iba** con mis padres. (imperfecto - vane).' },
       { title: 'Pronomen', problem: 'Erstatt objektene: \"Doy el libro a María.\"', solution: '**Se lo doy.** (le → se foran lo, el libro → lo)' }],
      [mkEx('lett', 'Velg riktig verbform:', [
        ['Ayer ___ (comer) paella. (indefinido)', 'comí'], ['De niño ___ (jugar) al fútbol. (imperfecto)', 'jugaba'],
        ['Mañana ___ (ir) a España. (futuro)', 'iré'], ['Me ___ (gustar) viajar. (condicional)', 'gustaría']]),
       mkEx('lett', 'Fyll inn riktig pronomen eller konnektor:', [
        ['¿Ves el libro? Sí, ___ veo. (direkte objekt)', 'lo'], ['Creo ___ el español es bonito. (at)', 'que'],
        ['Me gusta la música. ___, me gusta bailar. (dessuten)', 'Además'], ['No estoy de ___. (enig)', 'acuerdo']]),
       mkEx('medium', 'Kombiner grammatikk og innhold - skriv setninger:', [
        ['Bruk indefinido + imperfecto i samme setning.', 'Cuando era niño, mi familia viajó a España. / Llovía cuando salí de casa.'],
        ['Bruk konnektor + mening om en spansktalende tradisjon.', 'Creo que el Día de los Muertos es una tradición fascinante. Además, muestra cómo los mexicanos celebran la vida.'],
        ['Bruk doble pronomen i en setning.', 'Mi madre me compró un libro. Me lo dio ayer. / ¿Puedes darme el bolígrafo? → ¿Puedes dármelo?'],
        ['Bruk relativpronomen + konnektor.', 'El libro que leí fue interesante. Sin embargo, el final fue un poco aburrido.']]),
       mkEx('vanskelig', 'Skriv en kort tekst (5-6 setninger) som kombinerer flere grammatiske temaer:', [
        ['Tema: Din erfaring med å lære spansk (bruk fortid, pronomen, meninger)', 'Empecé a estudiar español hace dos años. Cuando era principiante, me parecía muy difícil. Sin embargo, ahora lo entiendo mucho mejor. Creo que es un idioma bonito y útil. Mi profesor me lo enseña con paciencia. En conclusión, estoy contento/a de haber elegido el español.'],
        ['Tema: En reise til et spansktalende land (bruk indefinido, imperfecto, konnektorer)', 'El verano pasado viajé a Barcelona con mi familia. Hacía mucho calor y el sol brillaba todos los días. Visitamos la Sagrada Familia, que me pareció impresionante. Además, probamos la paella, y nos la sirvieron en un restaurante junto al mar. Sin embargo, lo que más me gustó fue pasear por las Ramblas. En resumen, fue un viaje inolvidable.'],
        ['Tema: Sammenligning av kulturer (bruk konnektorer, meningsuttrykk, kulturkunnskap)', 'En mi opinión, tanto España como Noruega son países interesantes. Sin embargo, hay grandes diferencias culturales. Por ejemplo, los españoles cenan mucho más tarde que los noruegos. Además, la vida social en España se desarrolla más en la calle. Creo que podemos aprender mucho de ambas culturas. En conclusión, la diversidad cultural nos enriquece a todos.'],
        ['Tema: Oppsummering av hva du har lært i Spansk 2 (bruk variert grammatikk)', 'Durante este curso he aprendido mucho. Cuando empecé, no sabía usar el pretérito. Ahora puedo escribir textos argumentativos con conectores como sin embargo y además. También he conocido la literatura y la historia hispana. Lo que más me ha gustado es aprender sobre las culturas latinoamericanas. En conclusión, creo que el español me será muy útil en el futuro.']])],
      '**Lykke til videre!** Du har nå et solid grunnlag i spansk. Fortsett å lese, lytte og snakke spansk så mye som mulig.',
      '**Oppsummering: Nivå 2 komplett**\n\n- **Grammatikk:** Indefinido, imperfecto, futuro, condicional, subjuntivo, pronomen\n- **Kommunikasjon:** Meninger, argumentasjon, presentasjoner\n- **Kultur:** Fester, litteratur, historie, mangfold\n- **Ferdigheter:** Lese, skrive, lytte, snakke\n- **Neste steg:** Spansk nivå 3!'
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

// Generate spansk-2-kap9-10
const s2_9_10 = generateFile(2, [9, 10], {9: s2ch9, 10: s2ch10}, '9-10');
fs.writeFileSync(path.join(outDir, 'textbook-content-spansk-2-kap9-10.ts'), s2_9_10);
console.log(`Written: textbook-content-spansk-2-kap9-10.ts (${s2_9_10.split('\n').length} lines)`);
