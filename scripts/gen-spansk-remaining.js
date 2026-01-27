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
// SPANSK 2 CHAPTERS 4-6
// ============================================================================
const s2ch4 = {
  title: 'PRONOMBRES Y REFERENCIAS',
  subs: [
    mkSub('4.1', 'Pronombres de objeto directo', 'Direkte objektspronomen',
      'Lær å bruke direkte objektspronomen (me, te, lo, la, nos, los, las).',
      ['bruke direkte objektspronomen', 'forenkle setninger med pronomen'],
      'Direkte objektspronomen',
      `**Direkte objektspronomen** erstatter det direkte objektet i setningen.\n\n| Person | Pronomen | Eksempel |\n|--------|----------|----------|\n| yo | me | Me conoce. (Han kjenner meg.) |\n| tú | te | Te veo. (Jeg ser deg.) |\n| él | lo | Lo compro. (Jeg kjøper den.) |\n| ella | la | La quiero. (Jeg elsker henne.) |\n| nosotros | nos | Nos invitan. (De inviterer oss.) |\n| ellos | los | Los necesito. (Jeg trenger dem.) |\n| ellas | las | Las busco. (Jeg leter etter dem.) |\n\n**Plassering:** Foran konjugert verb. Bak infinitiv/gerundium.`,
      'Direkte objektspronomen erstatter substantiv som er direkte objekt i setningen. De plasseres **foran** det konjugerte verbet.',
      ['## Plassering av pronomen\n\n**Foran konjugert verb:**\n- *¿Ves el libro?* → *Sí, **lo** veo.* (Ja, jeg ser den.)\n- *¿Conoces a María?* → *Sí, **la** conozco.* (Ja, jeg kjenner henne.)\n\n**Bak infinitiv (festet):**\n- *Voy a comprar**lo**.* (Jeg skal kjøpe den.)\n- *Quiero ver**la**.* (Jeg vil se henne.)\n\n**Begge er mulige:**\n- *Lo voy a comprar.* = *Voy a comprarlo.*',
       '## Personlig a\n\nHusk at når det direkte objektet er en person, brukes **a**:\n- *Veo **a** María.* → *La veo.*\n- *Conozco **a** tu hermano.* → *Lo conozco.*'],
      [{ title: 'Erstatt med pronomen', problem: '¿Ves el libro? → Sí, ___ veo.', solution: 'Sí, **lo** veo. (el libro = hankjønn entall → lo)' },
       { title: 'Plassering', problem: 'Quiero comprar la casa. (to måter)', solution: '**La** quiero comprar. / Quiero comprar**la**.' }],
      [mkEx('lett', 'Erstatt det direkte objektet med pronomen:', [
        ['¿Lees el periódico? Sí, ___ leo.', 'lo'], ['¿Ves a María? Sí, ___ veo.', 'la'],
        ['¿Compras las flores? Sí, ___ compro.', 'las'], ['¿Conoces a mis padres? Sí, ___ conozco.', 'los']]),
       mkEx('lett', 'Velg riktig pronomen (lo/la/los/las):', [
        ['___ libro → ___', 'lo'], ['___ mesa → ___', 'la'],
        ['___ coches → ___', 'los'], ['___ casas → ___', 'las']]),
       mkEx('medium', 'Skriv om med pronomen foran verbet:', [
        ['Voy a leer el libro.', 'Lo voy a leer.'], ['Quiero ver la película.', 'La quiero ver.'],
        ['Necesito comprar las entradas.', 'Las necesito comprar.'], ['Puedo ayudar a Juan.', 'Lo puedo ayudar.']]),
       mkEx('vanskelig', 'Oversett med direkte objektspronomen:', [
        ['Ja, jeg kjenner henne.', 'Sí, la conozco.'], ['Jeg skal kjøpe den (boken).', 'Lo voy a comprar. / Voy a comprarlo.'],
        ['Vi ser dem (jentene).', 'Las vemos.'], ['Kan du hjelpe meg?', '¿Puedes ayudarme? / ¿Me puedes ayudar?']])],
      '**Husk:** *Lo* brukes for hankjønn entall, *la* for hunkjønn entall, *los* for hankjønn flertall, *las* for hunkjønn flertall.',
      '**Oppsummering: Direkte objektspronomen**\n\n- me, te, lo/la, nos, los/las\n- Plassering: Foran konjugert verb ELLER bak infinitiv/gerundium\n- Erstatter direkte objekt\n- Personlig *a* ved personer'
    ),
    mkSub('4.2', 'Pronombres de objeto indirecto', 'Indirekte objektspronomen',
      'Lær å bruke indirekte objektspronomen (me, te, le, nos, les).',
      ['bruke indirekte objektspronomen', 'identifisere indirekte objekt'],
      'Indirekte objektspronomen',
      `**Indirekte objektspronomen** viser hvem handlingen rettes mot.\n\n| Person | Pronomen | Eksempel |\n|--------|----------|----------|\n| yo | me | Me da el libro. (Gir meg boken.) |\n| tú | te | Te escribo. (Jeg skriver til deg.) |\n| él/ella/usted | le | Le digo. (Jeg sier til ham/henne.) |\n| nosotros | nos | Nos explica. (Forklarer oss.) |\n| ellos/ustedes | les | Les envío. (Jeg sender til dem.) |`,
      'Indirekte objektspronomen viser **til hvem** eller **for hvem** handlingen utføres. De brukes med verb som *dar, decir, escribir, enviar, preguntar, explicar*.',
      ['## Verb med indirekte objekt\n\n| Verb | Eksempel |\n|------|----------|\n| dar | Le doy un regalo. (Gir ham en gave.) |\n| decir | Te digo la verdad. (Sier deg sannheten.) |\n| escribir | Les escribo una carta. (Skriver dem et brev.) |\n| enviar | Me envían un paquete. (Sender meg en pakke.) |\n| preguntar | Le pregunto la hora. (Spør ham om tiden.) |\n| explicar | Nos explica la lección. (Forklarer oss leksjonen.) |',
       '## Klargjøring med a + person\n\nSiden *le* kan bety ham, henne eller Dem, klargjøres det ofte med *a*:\n- *Le doy el libro **a Juan**.* (Jeg gir boken til Juan.)\n- *Le escribo **a María**.* (Jeg skriver til María.)\n- *Les envío la carta **a mis padres**.* (Jeg sender brevet til foreldrene mine.)'],
      [{ title: 'Identifiser indirekte objekt', problem: 'Juan da un libro a María. Hvem er indirekte objekt?', solution: '**A María** er indirekte objekt (til hvem?). → Juan **le** da un libro.' },
       { title: 'Klargjøring', problem: 'Le escribo. Hvem skriver jeg til?', solution: 'Uklart! Klargjør: **Le** escribo **a mi madre**. / **Le** escribo **a Juan**.' }],
      [mkEx('lett', 'Fyll inn riktig indirekte objektspronomen:', [
        ['___ escribo una carta. (a ti)', 'Te'], ['___ doy un regalo. (a ella)', 'Le'],
        ['___ explican la tarea. (a nosotros)', 'Nos'], ['___ envío el paquete. (a ellos)', 'Les']]),
       mkEx('lett', 'Erstatt med pronomen:', [
        ['Doy un libro a Juan.', 'Le doy un libro.'], ['Escribo a mis amigos.', 'Les escribo.'],
        ['Dice la verdad a mí.', 'Me dice la verdad.'], ['Pregunta a nosotros.', 'Nos pregunta.']]),
       mkEx('medium', 'Fyll inn le eller les:', [
        ['___ digo la verdad a mi madre.', 'Le'], ['___ envío un mensaje a mis amigos.', 'Les'],
        ['___ pregunto la dirección al policía.', 'Le'], ['___ escribo a mis abuelos.', 'Les']]),
       mkEx('vanskelig', 'Oversett med indirekte objektspronomen:', [
        ['Jeg gir henne en gave.', 'Le doy un regalo.'], ['Hun skriver til oss.', 'Nos escribe.'],
        ['Kan du si meg sannheten?', '¿Puedes decirme la verdad? / ¿Me puedes decir la verdad?'],
        ['Læreren forklarer dem leksjonen.', 'El profesor les explica la lección.']])],
      '**Forskjell direkte/indirekte:** Direkte objekt = *hva/hvem* (¿Qué ves? Lo veo). Indirekte objekt = *til hvem* (¿A quién le das? Le doy).',
      '**Oppsummering: Indirekte objektspronomen**\n\n- me, te, le, nos, les\n- Brukes med: dar, decir, escribir, enviar, preguntar, explicar\n- Klargjøring: Le/les + a + person\n- Plassering: Foran konjugert verb eller bak infinitiv'
    ),
    mkSub('4.3', 'Combinación de pronombres', 'Kombinere pronomen (se lo/la)',
      'Lær å kombinere direkte og indirekte objektspronomen.',
      ['kombinere to objektspronomen', 'bruke se lo/la korrekt'],
      'Doble objektspronomen',
      `Når **indirekte** og **direkte** objektspronomen brukes sammen:\n1. Indirekte kommer FØRST\n2. **le/les → se** foran lo/la/los/las\n\n| Indirekte + Direkte | Eksempel |\n|---------------------|----------|\n| me lo | Me lo da. (Gir den til meg.) |\n| te la | Te la envío. (Sender den til deg.) |\n| se lo | Se lo digo. (Sier det til ham/henne.) |\n| nos los | Nos los traen. (Bringer dem til oss.) |\n| se las | Se las compro. (Kjøper dem til dem.) |`,
      'Når du har både direkte og indirekte objekt i samme setning, kan begge erstattes med pronomen. **Le/les** endres til **se** foran lo/la/los/las.',
      ['## Regelen: le/les → se\n\n- *Le doy el libro.* → *~~Le lo~~ doy.* ❌ → ***Se** lo doy.* ✅\n- *Les envío las cartas.* → *~~Les las~~ envío.* ❌ → ***Se** las envío.* ✅\n\nFordi *le lo* og *les las* er vanskelig å uttale, endres le/les alltid til **se**.',
       '## Plassering av doble pronomen\n\n**Foran konjugert verb:**\n- *Se lo digo.* (Jeg sier det til ham.)\n\n**Bak infinitiv (sammenhengende):**\n- *Voy a decír**selo**.* (Jeg skal si det til ham.)\n\n**Merk:** Begge pronomenene må være sammen!'],
      [{ title: 'Le → se', problem: 'Le doy el libro a Juan. Erstatt begge objektene.', solution: '**Se lo doy.** (le → se, el libro → lo)' },
       { title: 'Doble pronomen', problem: 'Nos envían las cartas. Erstatt direkte objekt.', solution: '**Nos las envían.** (las cartas → las, nos forblir)' }],
      [mkEx('lett', 'Erstatt det direkte objektet:', [
        ['Me da el libro. → Me ___ da.', 'lo'], ['Te envío la carta. → Te ___ envío.', 'la'],
        ['Nos traen los regalos. → Nos ___ traen.', 'los'], ['Le doy las llaves. → Se ___ doy.', 'las']]),
       mkEx('medium', 'Erstatt begge objektene:', [
        ['Doy el libro a Juan.', 'Se lo doy.'], ['Envío la carta a María.', 'Se la envío.'],
        ['Compro los regalos a mis padres.', 'Se los compro.'], ['Explico la lección a los alumnos.', 'Se la explico.']]),
       mkEx('medium', 'Skriv om med pronomen bak infinitiv:', [
        ['Voy a dar el libro a Juan.', 'Voy a dárselo.'], ['Quiero enviar la carta a María.', 'Quiero enviársela.'],
        ['Puedo explicar la lección a ti.', 'Puedo explicártela.'], ['Necesito comprar las flores a ella.', 'Necesito comprárselas.']]),
       mkEx('vanskelig', 'Oversett med doble pronomen:', [
        ['Jeg gir den (boken) til henne.', 'Se lo doy.'], ['Kan du sende den (brevet) til meg?', '¿Puedes enviármela? / ¿Me la puedes enviar?'],
        ['Vi kjøper dem (gavene) til dem.', 'Se los compramos.'], ['Han forklarer det til oss.', 'Nos lo explica.']])],
      '**Huskeregel for rekkefølge:** **RID** - Refleksiv, Indirekte, Direkte. Pronomenene kommer alltid i denne rekkefølgen.',
      '**Oppsummering: Doble pronomen**\n\n- Indirekte før direkte: me lo, te la, se lo\n- le/les → se foran lo/la/los/las\n- Plassering: Foran konjugert verb eller bak infinitiv (sammenhengende)\n- Klargjøring: se lo doy a Juan'
    ),
    mkSub('4.4', 'Pronombres relativos', 'Relativpronomen',
      'Lær å bruke relativpronomen for å binde sammen setninger.',
      ['bruke relativpronomen', 'bygge komplekse setninger'],
      'Relativpronomen (pronombres relativos)',
      `**Relativpronomen** binder sammen to setninger:\n\n| Pronomen | Bruk | Eksempel |\n|----------|------|----------|\n| que | ting og personer | El libro **que** leo. (Boken som jeg leser.) |\n| quien/es | personer (etter prep.) | La chica **con quien** hablo. |\n| donde | steder | La ciudad **donde** vivo. |\n| lo que | abstrakt/setning | **Lo que** dices es verdad. |\n| el/la que | spesifisering | El **que** llegó primero. |`,
      'Relativpronomen brukes for å koble to setninger sammen og unngå gjentakelse. Det vanligste relativpronomenet i spansk er **que**.',
      ['## Que - det vanligste\n\n*Que* brukes for både personer og ting:\n- *El chico **que** habla español.* (Gutten som snakker spansk.)\n- *El libro **que** leo.* (Boken som jeg leser.)\n- *La película **que** vimos.* (Filmen som vi så.)\n\n**Etter preposisjon + person → quien:**\n- *La chica **con quien** hablo.* (Jenta som jeg snakker med.)\n- *El profesor **a quien** admiro.* (Læreren som jeg beundrer.)',
       '## Donde og lo que\n\n**Donde** = der/hvor:\n- *La ciudad **donde** nací.* (Byen der jeg ble født.)\n- *El restaurante **donde** comimos.* (Restauranten der vi spiste.)\n\n**Lo que** = det som (abstrakt):\n- ***Lo que** dices es interesante.* (Det du sier er interessant.)\n- *No entiendo **lo que** pasa.* (Jeg forstår ikke det som skjer.)'],
      [{ title: 'Que', problem: 'Bind sammen: Tengo un libro. El libro es interesante.', solution: 'Tengo un libro **que** es interesante. (Jeg har en bok som er interessant.)' },
       { title: 'Donde', problem: 'Bind sammen: Vivo en una ciudad. La ciudad es bonita.', solution: 'La ciudad **donde** vivo es bonita. (Byen der jeg bor er pen.)' }],
      [mkEx('lett', 'Fyll inn que, quien, donde eller lo que:', [
        ['El chico ___ habla español.', 'que'], ['La ciudad ___ nací.', 'donde'],
        ['___ dices es verdad.', 'Lo que'], ['La chica con ___ hablo.', 'quien']]),
       mkEx('medium', 'Bind sammen setningene med relativpronomen:', [
        ['Tengo un amigo. Mi amigo vive en Madrid.', 'Tengo un amigo que vive en Madrid.'],
        ['Vivo en una casa. La casa es grande.', 'La casa donde vivo es grande.'],
        ['Hablo con una chica. La chica es simpática.', 'La chica con quien hablo es simpática.'],
        ['No entiendo algo. Algo pasa.', 'No entiendo lo que pasa.']]),
       mkEx('medium', 'Velg riktig relativpronomen:', [
        ['La película ___ vimos fue buena.', 'que'], ['El restaurante ___ comimos está cerrado.', 'donde'],
        ['El profesor ___ admiro es muy bueno.', 'a quien / que'], ['___ necesitas es descansar.', 'Lo que']]),
       mkEx('vanskelig', 'Oversett med relativpronomen:', [
        ['Boken som jeg leser er interessant.', 'El libro que leo es interesante.'],
        ['Byen der hun bor er pen.', 'La ciudad donde vive es bonita.'],
        ['Det du sier er viktig.', 'Lo que dices es importante.'],
        ['Vennen som jeg reiser med er norsk.', 'El amigo con quien viajo es noruego.']])],
      '**Que** er det klart vanligste relativpronomenet. Bruk *quien* bare etter preposisjoner med personer. *Lo que* brukes for abstrakte konsepter.',
      '**Oppsummering: Relativpronomen**\n\n- **que:** ting og personer (vanligst)\n- **quien/quienes:** personer etter preposisjon\n- **donde:** steder\n- **lo que:** abstrakt, \"det som\"\n- Brukes for å binde setninger sammen'
    ),
  ]
};

const s2ch5 = {
  title: 'LITERATURA HISPANOHABLANTE',
  subs: [
    mkSub('5.1', 'Introducción a la literatura', 'Litterære sjangre og begreper',
      'Bli kjent med litterære sjangre og grunnleggende begreper.',
      ['kjenne litterære sjangre', 'bruke grunnleggende analysebegreper'],
      'Litterære sjangre (géneros literarios)',
      `**Hovedsjangre:**\n\n| Sjanger | Spansk | Beskrivelse |\n|---------|--------|-------------|\n| Roman | la novela | Lang fortellende prosa |\n| Novelle | el cuento | Kort fortelling |\n| Poesi | la poesía | Dikt og vers |\n| Teater | el teatro | Dramatiske tekster |\n| Essay | el ensayo | Reflekterende prosa |\n\n**Analysebegreper:** el narrador (forteller), los personajes (karakterer), la trama (handling), el tema (tema), el conflicto (konflikt), el desenlace (løsning)`,
      'Litteratur er en viktig del av spanskfaget. For å analysere tekster trenger du kunnskap om **sjangre** og grunnleggende **analysebegreper**.',
      ['## Litterære virkemidler\n\n| Virkemiddel | Spansk | Eksempel |\n|-------------|--------|----------|\n| Metafor | la metáfora | Sus ojos son soles. |\n| Sammenligning | el símil | Es fuerte como un roble. |\n| Personifisering | la personificación | El viento canta. |\n| Gjentakelse | la repetición | Llueve, llueve, llueve. |\n| Ironi | la ironía | ¡Qué buen tiempo! (i regn) |',
       '## Å analysere en tekst\n\n1. **Sjanger:** Hva slags tekst er det?\n2. **Tema:** Hva handler teksten om?\n3. **Forteller:** Hvem forteller? (1. eller 3. person)\n4. **Karakterer:** Hvem er hovedpersonene?\n5. **Virkemidler:** Hvilke virkemidler brukes?\n6. **Budskap:** Hva vil forfatteren formidle?'],
      [{ title: 'Identifiser sjanger', problem: 'Hva slags tekst er dette? \"Det var en gang en gammel mann som bodde alene i et lite hus...\"', solution: 'Dette er en **cuento** (novelle/kort fortelling) - kort narrativ prosa.' },
       { title: 'Finn virkemiddelet', problem: 'Identifiser virkemiddelet: \"Sus ojos brillaban como estrellas.\"', solution: '**Símil** (sammenligning) - øynene sammenlignes med stjerner med \"como\".' }],
      [mkEx('lett', 'Match sjanger med beskrivelse:', [
        ['Lang fortellende tekst med flere kapitler', 'la novela (roman)'], ['Kort fortelling', 'el cuento (novelle)'],
        ['Tekst skrevet i vers', 'la poesía (poesi)'], ['Tekst ment for oppførelse', 'el teatro (teater)']]),
       mkEx('lett', 'Match analysebegrep med definisjon:', [
        ['Hvem som forteller historien', 'el narrador (forteller)'], ['Personene i historien', 'los personajes (karakterer)'],
        ['Hendelsesforløpet', 'la trama (handling)'], ['Hovedbudskapet', 'el tema (tema)']]),
       mkEx('medium', 'Identifiser virkemiddelet:', [
        ['El tiempo vuela.', 'Metáfora (tiden flyr)'], ['Es alto como una torre.', 'Símil (sammenligning med como)'],
        ['El río susurra secretos.', 'Personificación (elven hvisker)'], ['Nunca, nunca, nunca volveré.', 'Repetición (gjentakelse)']]),
       mkEx('vanskelig', 'Analyser teksten: \"Era una noche oscura. Juan caminaba solo por la calle vacía. De repente, oyó un ruido extraño.\"', [
        ['Hva er sjangeren?', 'Cuento (kort fortelling/novelle)'], ['Hvem er fortelleren?', 'Narrador en tercera persona (tredjepersonsforteller)'],
        ['Hva er stemningen?', 'Mysteriøs, mørk, spenningsfylt'], ['Hvilket virkemiddel brukes?', 'Beskrivelse (noche oscura, calle vacía) for å skape stemning']])],
      '**Tips for analyse:** Spør alltid: Hvem forteller? Til hvem? Om hva? Hvorfor? Hvordan?',
      '**Oppsummering: Litterære sjangre**\n\n- **Sjangre:** novela, cuento, poesía, teatro, ensayo\n- **Begreper:** narrador, personajes, trama, tema, conflicto\n- **Virkemidler:** metáfora, símil, personificación, repetición, ironía\n- **Analyse:** sjanger → tema → forteller → karakterer → virkemidler → budskap'
    ),
    mkSub('5.2', 'Autores españoles', 'Spanske forfattere',
      'Utforsk viktige spanske forfattere fra Cervantes til moderne tid.',
      ['kjenne viktige spanske forfattere', 'lese og forstå litterære utdrag'],
      'Viktige spanske forfattere',
      `**Klassikere:**\n- **Miguel de Cervantes** (1547-1616): Don Quijote de la Mancha\n- **Federico García Lorca** (1898-1936): Bodas de sangre, Romancero gitano\n\n**Generación del 98:**\n- **Miguel de Unamuno** (1864-1936): Niebla\n\n**Moderne:**\n- **Ana María Matute** (1925-2014): Los Abel\n- **Carlos Ruiz Zafón** (1964-2020): La sombra del viento`,
      'Spansk litteratur har en rik tradisjon som strekker seg over flere århundrer. I dette kapittelet møter du noen av de viktigste spanske forfatterne.',
      ['## Cervantes og Don Quijote\n\nMiguel de Cervantes\' *Don Quijote de la Mancha* (1605/1615) anses som den første moderne romanen. Handlingen følger en idealistisk ridder som kjemper mot vindmøller og tror de er kjemper.\n\n**Viktige temaer:** Idealisme vs. realisme, galskap vs. fornuft, ridderlighet.\n\n*\"En un lugar de la Mancha, de cuyo nombre no quiero acordarme...\"*\n(Et sted i La Mancha, hvis navn jeg ikke vil huske...)',
       '## García Lorca\n\nFederico García Lorca var poet og dramatiker, medlem av Generación del 27. Han ble drept under den spanske borgerkrigen i 1936.\n\n**Kjente verk:**\n- *Romancero gitano* (poesi, 1928)\n- *Bodas de sangre* (teater, 1932)\n- *La casa de Bernarda Alba* (teater, 1936)\n\n**Temaer:** Kjærlighet, død, undertrykkelse, frihet, andalusisk kultur.'],
      [{ title: 'Don Quijote', problem: 'Hvem er hovedpersonene i Don Quijote?', solution: '**Don Quijote** (den idealistiske ridderen) og **Sancho Panza** (hans realistiske væpner). De representerer motsetningen mellom idealisme og realisme.' },
       { title: 'García Lorca', problem: 'Hvilken litterær generasjon tilhørte García Lorca?', solution: '**Generación del 27** - en gruppe spanske poeter og forfattere som fornyet spansk litteratur på 1920-30-tallet.' }],
      [mkEx('lett', 'Match forfatter med verk:', [
        ['Miguel de Cervantes', 'Don Quijote de la Mancha'], ['Federico García Lorca', 'Bodas de sangre / Romancero gitano'],
        ['Miguel de Unamuno', 'Niebla'], ['Carlos Ruiz Zafón', 'La sombra del viento']]),
       mkEx('lett', 'Sant eller usant:', [
        ['Don Quijote ble skrevet på 1600-tallet.', 'Sant (1605/1615)'], ['García Lorca var kun poet.', 'Usant - han var også dramatiker.'],
        ['Don Quijote kjemper mot vindmøller.', 'Sant'], ['Cervantes levde på 1800-tallet.', 'Usant - 1547-1616']]),
       mkEx('medium', 'Knytt temaer til forfattere:', [
        ['Idealisme vs. realisme', 'Cervantes (Don Quijote)'], ['Undertrykkelse av kvinner', 'García Lorca (La casa de Bernarda Alba)'],
        ['Andalusisk kultur og tradisjon', 'García Lorca (Romancero gitano)'], ['Identitet og eksistens', 'Unamuno (Niebla)']]),
       mkEx('vanskelig', 'Refleksjonsspørsmål:', [
        ['Hvorfor anses Don Quijote som den første moderne romanen?', 'Den leker med forholdet mellom fiksjon og virkelighet, har komplekse karakterer, og bruker ironi og humor.'],
        ['Hvorfor er García Lorca fortsatt viktig?', 'Hans temaer (frihet, undertrykkelse, kjærlighet, død) er universelle og relevante i dag.'],
        ['Hva betyr Generación del 27?', 'En gruppe forfattere/poeter som fornyet spansk litteratur i 1920-30-årene, oppkalt etter 300-årsjubileet for Góngoras død.'],
        ['Sammenlign Don Quijote og Sancho Panza.', 'Don Quijote er idealistisk og drømmende; Sancho er realistisk og jordnær. Sammen representerer de menneskelig dualitet.']])],
      '**Lesetips:** Start med korte utdrag og oversatte versjoner. Bruk ordbok aktivt og fokuser på å forstå hovedideene først.',
      '**Oppsummering: Spanske forfattere**\n\n- **Cervantes:** Don Quijote - første moderne roman\n- **García Lorca:** Poesi og teater, Generación del 27\n- **Temaer:** Idealisme/realisme, frihet/undertrykkelse\n- **Analyse:** Forstå historisk kontekst, identifiser temaer'
    ),
    mkSub('5.3', 'Autores latinoamericanos', 'Latinamerikanske forfattere',
      'Utforsk viktige latinamerikanske forfattere og litterære bevegelser.',
      ['kjenne latinamerikanske forfattere', 'forstå magisk realisme'],
      'Latinamerikansk litteratur',
      `**El boom latinoamericano** (1960-70-tallet):\n\n| Forfatter | Land | Kjent verk |\n|-----------|------|------------|\n| Gabriel García Márquez | Colombia | Cien años de soledad |\n| Julio Cortázar | Argentina | Rayuela |\n| Mario Vargas Llosa | Peru | La ciudad y los perros |\n| Carlos Fuentes | Mexico | La muerte de Artemio Cruz |\n\n**Andre viktige:**\n- Pablo Neruda (Chile) - Nobelpris 1971\n- Isabel Allende (Chile) - La casa de los espíritus\n- Jorge Luis Borges (Argentina) - Ficciones`,
      'Latinamerikansk litteratur opplevde en eksplosjon på 1960-70-tallet kjent som **el boom**. Den mest kjente bevegelsen er **magisk realisme**, der overnaturlige elementer blandes med hverdagsvirkelighet.',
      ['## Magisk realisme\n\nMagisk realisme (*el realismo mágico*) blander det hverdagslige med det overnaturlige som om det var helt normalt.\n\n**Kjennetegn:**\n- Overnaturlige hendelser presenteres som vanlige\n- Rik, detaljert beskrivelse\n- Mytisk tidsfølelse (syklisk tid)\n- Latinamerikansk identitet og historie\n\n**García Márquez:** *\"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.\"*\n(Åpningen av Cien años de soledad)',
       '## Pablo Neruda\n\nChilensk poet som vant Nobelprisen i 1971. Kjent for kjærlighetspoesi og politisk engasjert diktning.\n\n**Kjente verk:**\n- *Veinte poemas de amor y una canción desesperada* (1924)\n- *Canto general* (1950)\n\n*\"Puedo escribir los versos más tristes esta noche.\"*\n(Jeg kan skrive de tristeste versene i natt.)'],
      [{ title: 'Magisk realisme', problem: 'Hva kjennetegner magisk realisme?', solution: 'Overnaturlige hendelser presenteres som **helt normalt** i en ellers realistisk setting. Det overnaturlige kommenteres ikke som uvanlig.' },
       { title: 'El boom', problem: 'Nevn tre forfattere fra el boom.', solution: 'García Márquez (Colombia), Cortázar (Argentina), Vargas Llosa (Peru), Carlos Fuentes (Mexico).' }],
      [mkEx('lett', 'Match forfatter med land:', [
        ['Gabriel García Márquez', 'Colombia'], ['Pablo Neruda', 'Chile'],
        ['Jorge Luis Borges', 'Argentina'], ['Mario Vargas Llosa', 'Peru']]),
       mkEx('lett', 'Match forfatter med verk:', [
        ['García Márquez', 'Cien años de soledad'], ['Neruda', 'Veinte poemas de amor'],
        ['Isabel Allende', 'La casa de los espíritus'], ['Borges', 'Ficciones']]),
       mkEx('medium', 'Svar på spørsmålene:', [
        ['Hva er el boom latinoamericano?', 'En litterær bevegelse på 1960-70-tallet der latinamerikanske forfattere fikk internasjonal anerkjennelse.'],
        ['Hvem vant Nobelprisen i 1971?', 'Pablo Neruda (Chile)'], ['Hva handler Cien años de soledad om?', 'Familien Buendía gjennom syv generasjoner i den fiktive byen Macondo.'],
        ['Hva er forskjellen mellom magisk realisme og fantasy?', 'I magisk realisme er det overnaturlige en del av hverdagen; i fantasy er det en egen verden.']]),
       mkEx('vanskelig', 'Refleksjonsoppgaver:', [
        ['Hvorfor tror du magisk realisme oppsto i Latin-Amerika?', 'Mulige svar: Blandingen av kulturer (urfolk, europeisk, afrikansk), mytisk tradisjon, politisk virkelighet som føles surrealistisk.'],
        ['Sammenlign Neruda og García Márquez.', 'Neruda: poet, politisk engasjert, kjærlighetslyrikk. Márquez: prosaist, magisk realisme, episk fortelling.'],
        ['Hvorfor er Borges viktig?', 'Han utforsket tid, uendelighet og identitet i korte, intellektuelle tekster som påvirket verdenslitteraturen.'],
        ['Hva er la casa de los espíritus om?', 'Tre generasjoner kvinner i Chile, blander familiehistorie med politisk historie og magisk realisme.']])],
      '**Anbefalt lesing:** Start med korte tekster av Borges eller Cortázar. García Márquez\' noveller er lettere å lese enn romanene.',
      '**Oppsummering: Latinamerikanske forfattere**\n\n- **El boom:** 1960-70-tallet, internasjonal anerkjennelse\n- **Magisk realisme:** Overnaturlig + hverdagslig (García Márquez, Allende)\n- **Nøkkelforfattere:** Márquez, Neruda, Borges, Allende, Vargas Llosa\n- **Nobelpriser:** Neruda (1971), García Márquez (1982), Vargas Llosa (2010)'
    ),
    mkSub('5.4', 'Análisis de textos literarios', 'Analyse av litterære tekster',
      'Lær å analysere litterære tekster systematisk.',
      ['analysere litterære tekster', 'skrive om litteratur'],
      'Litterær analyse (análisis literario)',
      `**Steg i litterær analyse:**\n\n1. **Kontekst:** Forfatter, tid, bevegelse\n2. **Innhold:** Handling, karakterer, tema\n3. **Form:** Sjanger, struktur, fortellerteknikk\n4. **Virkemidler:** Språklige og litterære grep\n5. **Tolkning:** Budskap, betydning\n\n**Nyttige uttrykk:**\n- *El autor/la autora presenta...* (Forfatteren presenterer...)\n- *El tema principal es...* (Hovedtemaet er...)\n- *El narrador describe...* (Fortelleren beskriver...)\n- *El texto trata de...* (Teksten handler om...)`,
      'Å analysere litterære tekster systematisk er en viktig ferdighet. I dette kapittelet lærer du en **trinnvis metode** for analyse og nyttige **uttrykk** for å skrive om litteratur.',
      ['## Skriv en bokrapport\n\n**Struktur:**\n1. **Introducción:** Tittel, forfatter, sjanger, utgivelsesår\n2. **Resumen:** Kort sammendrag av handlingen\n3. **Análisis:** Tema, karakterer, virkemidler\n4. **Opinión personal:** Din mening\n5. **Conclusión:** Anbefaling\n\n**Nyttige fraser:**\n- *La novela fue escrita por... en...* (Romanen ble skrevet av... i...)\n- *El protagonista es...* (Hovedpersonen er...)\n- *En mi opinión...* (Etter min mening...)',
       '## Sitatteknikk\n\nNår du siterer fra teksten:\n- *Según el autor, \"...\"* (Ifølge forfatteren, \"...\")\n- *Como dice el narrador: \"...\"* (Som fortelleren sier: \"...\")\n- *En las palabras de...: \"...\"* (I ordene til...: \"...\")\n- *El personaje afirma que \"...\"* (Karakteren hevder at \"...\")'],
      [{ title: 'Analysestruktur', problem: 'Sett stegene i riktig rekkefølge: Tolkning, Kontekst, Virkemidler, Innhold, Form.', solution: '1. **Kontekst** → 2. **Innhold** → 3. **Form** → 4. **Virkemidler** → 5. **Tolkning**' },
       { title: 'Nyttige uttrykk', problem: 'Hvordan sier du \"Teksten handler om kjærlighet\" på spansk?', solution: '**El texto trata de/sobre el amor.** Eller: **El tema principal es el amor.**' }],
      [mkEx('lett', 'Match analysebegrep med spansk:', [
        ['Forfatter', 'el autor / la autora'], ['Hovedperson', 'el/la protagonista'],
        ['Handling', 'la trama / el argumento'], ['Budskap', 'el mensaje']]),
       mkEx('lett', 'Fyll inn riktig uttrykk:', [
        ['___ principal es el amor. (Tema)', 'El tema'], ['___ describe un viaje. (Fortelleren)', 'El narrador'],
        ['___ fue escrita en 1605. (Romanen)', 'La novela'], ['En mi ___, el libro es interesante. (mening)', 'opinión']]),
       mkEx('medium', 'Skriv analysesetninger:', [
        ['Presenter forfatteren', 'El autor/La autora es... nació en... y escribió...'],
        ['Beskriv hovedtemaet', 'El tema principal de la obra es...'],
        ['Gi din mening', 'En mi opinión, esta novela es... porque...'],
        ['Anbefal boken', 'Recomiendo este libro porque...']]),
       mkEx('vanskelig', 'Skriv korte analyser:', [
        ['Presenter Don Quijote (forfatter, sjanger, år)', 'Don Quijote de la Mancha fue escrita por Miguel de Cervantes en 1605. Es una novela que...'],
        ['Beskriv temaet i Don Quijote', 'El tema principal es el conflicto entre el idealismo y la realidad...'],
        ['Bruk et sitat og kommenter', 'Según el narrador, \"En un lugar de la Mancha...\", lo cual sugiere que...'],
        ['Gi en avsluttende vurdering', 'En conclusión, considero que esta obra es fundamental porque...']])],
      '**Tips for analyse:** Les teksten to ganger - først for å forstå handlingen, deretter for å identifisere virkemidler og temaer.',
      '**Oppsummering: Litterær analyse**\n\n- **5 steg:** Kontekst → Innhold → Form → Virkemidler → Tolkning\n- **Bokrapport:** Introduksjon, resumen, análisis, opinión, conclusión\n- **Uttrykk:** El texto trata de..., El tema principal es..., En mi opinión...\n- **Sitatteknikk:** Según el autor, Como dice el narrador'
    ),
  ]
};

const s2ch6 = {
  title: 'CULTURA Y SOCIEDAD',
  subs: [
    mkSub('6.1', 'Fiestas y tradiciones', 'Fester og tradisjoner', 'Lær om fester og tradisjoner i den spansktalende verden.',
      ['beskrive fester og tradisjoner', 'sammenligne kulturer'],
      'Viktige fester i den spansktalende verden',
      `| Fest | Land | Tid |\n|------|------|-----|\n| La Semana Santa | Spania | Mars/april |\n| Los Sanfermines | Pamplona | Juli |\n| El Día de los Muertos | Mexico | 1-2. nov |\n| Las Fallas | Valencia | Mars |\n| La Tomatina | Buñol | August |\n| Carnaval | Mange land | Februar |`,
      'Den spansktalende verden er rik på fester og tradisjoner som gjenspeiler historie, religion og kultur. Å kjenne disse tradisjonene hjelper deg å forstå kulturen bedre.',
      ['## Semana Santa\n\nDen hellige uken før påske feires med **prosesjon** i mange spanske byer. Sevilla er mest kjent. Religiøse bilder bæres gjennom gatene, og det er musikk, røkelse og dype tradisjoner.\n\n## Día de los Muertos\n\nI Mexico (1-2. november) hedres de døde med fargerike **altare** (ofrendas), **cempasúchil**-blomster (ringblomster), mat, drikke og musikk. Det er en feiring av livet, ikke sorg.',
       '## Sammenligne fester\n\nNyttige uttrykk:\n- *En España se celebra...* (I Spania feirer man...)\n- *A diferencia de Noruega...* (Til forskjell fra Norge...)\n- *Es similar a...* (Det ligner på...)\n- *Mientras que en México...* (Mens i Mexico...)'],
      [{ title: 'Beskrive en fest', problem: 'Beskriv Día de los Muertos med 2-3 setninger.', solution: 'El Día de los Muertos se celebra en México el 1 y 2 de noviembre. Las familias crean altares con flores, comida y fotos para honrar a los difuntos. Es una celebración de la vida, no del luto.' },
       { title: 'Sammenligne', problem: 'Sammenlign Día de los Muertos med norsk Allehelgensdag.', solution: 'A diferencia de Noruega, donde se visitan las tumbas, en México se hace una fiesta con música y comida. En Noruega es más solemne, mientras que en México es una celebración colorida.' }],
      [mkEx('lett', 'Match fest med land/by:', [
        ['Los Sanfermines', 'Pamplona, España'], ['El Día de los Muertos', 'México'],
        ['Las Fallas', 'Valencia, España'], ['La Tomatina', 'Buñol, España']]),
       mkEx('lett', 'Sant eller usant:', [
        ['Día de los Muertos er en trist fest.', 'Usant - det er en feiring av livet.'],
        ['Semana Santa feires før påske.', 'Sant'], ['La Tomatina handler om å kaste tomater.', 'Sant'],
        ['Las Fallas er en musikkfestival.', 'Usant - det er en fest med store figurer som brennes.']]),
       mkEx('medium', 'Beskriv festen med spanske uttrykk:', [
        ['Semana Santa: Hva skjer?', 'Se celebran procesiones religiosas por las calles.'],
        ['Día de los Muertos: Hva gjør familiene?', 'Las familias crean altares y ofrendas para los difuntos.'],
        ['Los Sanfermines: Hva er det?', 'Es una fiesta en Pamplona donde la gente corre delante de los toros.'],
        ['La Tomatina: Beskriv.', 'Es una fiesta donde la gente se tira tomates en las calles de Buñol.']]),
       mkEx('vanskelig', 'Skriv en sammenligning (3-4 setninger):', [
        ['Sammenlign en spansk fest med en norsk.', 'En España se celebra la Semana Santa con procesiones religiosas. A diferencia de Noruega, donde la Semana Santa se pasa en la montaña...'],
        ['Hva kan vi lære av Día de los Muertos?', 'El Día de los Muertos nos enseña que podemos recordar a los muertos con alegría y celebración, no solo con tristeza.'],
        ['Hvilken fest ville du gjerne oppleve?', 'Me gustaría asistir a... porque... Me parece interesante que...'],
        ['Finn likheter mellom to fester.', 'Tanto la Semana Santa como el Día de los Muertos tienen un aspecto religioso y tradicional...']])],
      '**Kulturtips:** Fester er en god inngang til å forstå et lands verdier. Spør deg: Hva feirer de? Hvorfor? Hvem deltar?',
      '**Oppsummering: Fester og tradisjoner**\n\n- **Spania:** Semana Santa, Sanfermines, Fallas, Tomatina\n- **Mexico:** Día de los Muertos\n- **Mange land:** Carnaval, Navidad\n- **Uttrykk:** Se celebra, a diferencia de, es similar a'
    ),
    mkSub('6.2', 'La vida cotidiana', 'Hverdagslivet i spansktalende land', 'Forstå hverdagslivet i Spania og Latin-Amerika.',
      ['beskrive hverdagsliv', 'sammenligne med norsk hverdag'],
      'Hverdagslivet (la vida cotidiana)',
      `**Daglige rutiner i Spania:**\n\n| Tid | Aktivitet |\n|-----|----------|\n| 7:00-8:00 | Desayuno (frokost - lett) |\n| 9:00-14:00 | Trabajo/Escuela |\n| 14:00-15:00 | Comida (middag - hovedmåltid) |\n| 15:00-17:00 | Siesta / descanso |\n| 17:00-20:00 | Trabajo/actividades |\n| 21:00-22:00 | Cena (kveldsmat) |\n\n**I Latin-Amerika** varierer rutinene mye fra land til land.`,
      'Hverdagslivet i spansktalende land kan være ganske forskjellig fra norsk hverdag. Måltidstider, sosiale vaner og daglige rutiner reflekterer kulturelle verdier.',
      ['## Måltider\n\n**Spania:**\n- **Desayuno** (7-9): Lett - kaffe og brød/croissant\n- **Comida** (14-15): Hovedmåltid - flere retter\n- **Merienda** (17-18): Mellommåltid - kaffe, kake\n- **Cena** (21-22): Lettere kveldsmat\n\n**Forskjell fra Norge:** I Spania er lunsjen (comida) det viktigste måltidet, og middagen (cena) spises sent.',
       '## Sosiale vaner\n\n- **Tiltale:** *Tú* (uformelt) vs. *usted* (formelt)\n- **Hilsing:** To kyss på kinnet (Spania), håndtrykk\n- **Tid:** Mer fleksibel holdning til tid\n- **Familie:** Sterk familiebinding, bo hjemme lenger\n- **Sosial tid:** Café, paseo (tur), tertulia (samtale)'],
      [{ title: 'Beskriv en dag', problem: 'Beskriv en typisk dag i Spania.', solution: 'Un español típicamente desayuna ligero, trabaja hasta las 14:00, come el almuerzo principal, descansa, vuelve al trabajo y cena tarde, sobre las 21:00-22:00.' },
       { title: 'Sammenligning', problem: 'Hva er den største forskjellen mellom norsk og spansk hverdag?', solution: 'La mayor diferencia es el horario de las comidas: en España se come a las 14:00 y se cena a las 21:00-22:00, mientras que en Noruega se cena sobre las 17:00-18:00.' }],
      [mkEx('lett', 'Match spansk med norsk:', [
        ['el desayuno', 'frokost'], ['la comida', 'lunsj/middag (hovedmåltid)'],
        ['la merienda', 'mellommåltid'], ['la cena', 'kveldsmat/middag']]),
       mkEx('lett', 'Sant eller usant om Spania:', [
        ['Spanjolene spiser middag kl. 14.', 'Sant'], ['Kveldsmat spises kl. 18.', 'Usant - kl. 21-22'],
        ['Frokost er det viktigste måltidet.', 'Usant - lunsj (comida) er viktigst'], ['Man hilser med to kyss.', 'Sant (mellom venner)']]),
       mkEx('medium', 'Beskriv norsk vs. spansk hverdag:', [
        ['Frokost i Norge vs. Spania', 'En Noruega el desayuno es más completo; en España es muy ligero.'],
        ['Middagstid', 'En Noruega se cena a las 17-18; en España a las 21-22.'],
        ['Sosiale vaner', 'Los españoles pasan más tiempo en cafés y plazas; los noruegos prefieren actividades al aire libre.'],
        ['Familie', 'En España los jóvenes viven con sus padres hasta más tarde que en Noruega.']]),
       mkEx('vanskelig', 'Skriv en sammenligning (3-4 setninger):', [
        ['Sammenlign en typisk dag', 'Un día típico en España empieza más tarde y termina más tarde que en Noruega...'],
        ['Diskuter fordeler og ulemper', 'La siesta tiene ventajas para la salud, pero puede ser un problema para la productividad...'],
        ['Hva ville du foretrukket?', 'Personalmente, preferiría... porque...'],
        ['Hva kan vi lære?', 'Podemos aprender de los españoles a disfrutar más de la vida social y de las comidas en familia.']])],
      '**Husk:** Stereotypier er forenklinger. Ikke alle spanjolene tar siesta, og hverdagen varierer enormt mellom by og land, og mellom generasjoner.',
      '**Oppsummering: Hverdagsliv**\n\n- **Måltider:** desayuno (lett), comida (hovedmåltid kl. 14), cena (sent)\n- **Sosiale vaner:** Kaféliv, paseo, familietid\n- **Forskjeller fra Norge:** Senere måltider, mer sosial tid, sterkere familieband\n- **Viktig:** Unngå stereotypier - stor variasjon'
    ),
    mkSub('6.3', 'Comparar culturas', 'Sammenligne kulturer', 'Lær å sammenligne norsk og spansktalende kultur.',
      ['sammenligne kulturer', 'reflektere over kulturforskjeller'],
      'Kultursammenligning',
      `**Nyttige uttrykk for sammenligning:**\n\n| Spansk | Norsk |\n|--------|-------|\n| A diferencia de | Til forskjell fra |\n| En cambio | Derimot |\n| Sin embargo | Likevel |\n| Igual que | Likt som |\n| Mientras que | Mens |\n| Al contrario | Tvert imot |\n| En comparación con | Sammenlignet med |\n| Tanto... como... | Både... og... |`,
      'Å sammenligne kulturer er en viktig del av språklæring. Det handler ikke om å bedømme hvilken kultur som er \"best\", men å forstå **forskjeller og likheter** og å utvikle **interkulturell forståelse**.',
      ['## Kulturelle dimensjoner\n\n**Tid:** I Spania/Latin-Amerika er holdningen til tid ofte mer fleksibel enn i Norge. Å komme 15-30 minutter \"sent\" er ofte akseptabelt sosialt.\n\n**Kommunikasjon:** Spansktalende kulturer er ofte mer direkte i følelsesuttrykk, bruker mer kroppsspråk og snakker nærmere hverandre.\n\n**Individualisme vs. kollektivisme:** Mange spansktalende kulturer vektlegger familie og fellesskap sterkere enn individuell uavhengighet.',
       '## Stereotypier vs. virkelighet\n\nStereotypier er forenklinger som kan være skadelige:\n- ❌ \"Alle spanjolene er late\" (siesta-myten)\n- ❌ \"Latin-Amerika er farlig\"\n- ✅ Spania har andre arbeidstider enn Norge\n- ✅ Latin-Amerika er et mangfoldig kontinent\n\n**Viktig:** Individuelle forskjeller er større enn kulturelle forskjeller.'],
      [{ title: 'Sammenligning', problem: 'Sammenlign holdningen til tid i Norge og Spania.', solution: 'En Noruega la puntualidad es muy importante. **A diferencia de** Noruega, en España hay más flexibilidad con el tiempo en situaciones sociales. **Sin embargo**, en el trabajo la puntualidad también es importante en España.' },
       { title: 'Stereotypier', problem: 'Er dette en stereotypi eller et faktum? \"Spanjolene spiser middag sent.\"', solution: 'Det er et **faktum basert på generell praksis** - måltidstidene er genuint senere i Spania. Men det er viktig å huske at det er individuelle variasjoner.' }],
      [mkEx('lett', 'Fyll inn riktig sammenligningsuttrykk:', [
        ['___ Noruega, en España se come más tarde.', 'A diferencia de'], ['En Noruega nieva mucho. ___, en España hace calor.', 'En cambio'],
        ['___ en Noruega ___ en España la familia es importante.', 'Tanto... como...'], ['Los españoles hablan alto. ___, es normal en su cultura.', 'Sin embargo']]),
       mkEx('medium', 'Skriv sammenligninger:', [
        ['Norge: kaldt. Spania: varmt.', 'A diferencia de Noruega, donde hace frío, en España hace calor.'],
        ['Begge: demokrati.', 'Tanto Noruega como España son democracias.'],
        ['Norge: tidlig middag. Spania: sen middag.', 'En Noruega se cena temprano, mientras que en España se cena tarde.'],
        ['Begge: likestilling viktig.', 'Igual que en Noruega, en España la igualdad es un valor importante.']]),
       mkEx('medium', 'Er dette stereotypi eller faktum?', [
        ['Alle latinamerikanere danser salsa.', 'Stereotypi - ikke alle danser salsa.'], ['Spania er et EU-medlem.', 'Faktum.'],
        ['Latinamerikanere er alltid glade.', 'Stereotypi.'], ['I Mexico feires Día de los Muertos.', 'Faktum.']]),
       mkEx('vanskelig', 'Refleksjon - skriv 2-3 setninger:', [
        ['Hva har du lært om kulturforskjeller?', 'He aprendido que las diferencias culturales son fascinantes y que no debemos juzgar...'],
        ['Hvordan kan vi unngå stereotypier?', 'Podemos evitar los estereotipos conociendo a personas de otras culturas y viajando...'],
        ['Hva er likt mellom Norge og Spania?', 'Tanto Noruega como España valoran la educación, la democracia y la igualdad...'],
        ['Hva vil du lære mer om?', 'Me gustaría aprender más sobre... porque...']])],
      '**Interkulturell kompetanse:** Det handler ikke om å dømme, men å forstå. Spør deg: Hvorfor gjør de det annerledes? Hva kan jeg lære?',
      '**Oppsummering: Kultursammenligning**\n\n- **Uttrykk:** a diferencia de, en cambio, sin embargo, igual que, mientras que\n- **Dimensjoner:** Tid, kommunikasjon, individualisme/kollektivisme\n- **Viktig:** Unngå stereotypier, respekter forskjeller\n- **Mål:** Interkulturell forståelse'
    ),
    mkSub('6.4', 'Diversidad cultural', 'Kulturelt mangfold i den spansktalende verden', 'Utforsk det kulturelle mangfoldet.',
      ['kjenne kulturelt mangfold', 'respektere kulturelle forskjeller'],
      'Kulturelt mangfold (diversidad cultural)',
      `**Den spansktalende verden** omfatter 21 land med enorm variasjon:\n\n**Urfolkskulturer:**\n- Maya (Mexico, Guatemala)\n- Azteca/Mexica (Mexico)\n- Inca/Quechua (Peru, Bolivia, Ecuador)\n- Mapuche (Chile, Argentina)\n\n**Språklig mangfold:**\n- Quechua (~8 mill. talere)\n- Guaraní (Paraguay - offisielt språk)\n- Náhuatl (Mexico)\n- Catalán, Euskera, Gallego (Spania)`,
      'Den spansktalende verden er **ikke** en enhetlig kultur. Det er et enormt mangfold av urfolkskulturer, regionale tradisjoner, språk og identiteter.',
      ['## Regionale forskjeller i Spania\n\n**Cataluña:** Eget språk (catalán), sterk regional identitet\n**País Vasco:** Euskera (unikt språk uten slektskap), sterk autonomi\n**Galicia:** Gallego (ligner portugisisk), keltisk innflytelse\n**Andalucía:** Flamenco, maurisk arv, distinkt aksent\n\nSpania er **ikke** ett folk - det er et mangfold av kulturer og språk.',
       '## Urfolkskulturer i Latin-Amerika\n\nUrfolkskulturer lever videre i dag:\n- **Bolivia:** Evo Morales var første urfolkspresidenten\n- **Guatemala:** Maya-kulturen er fortsatt levende\n- **Peru:** Quechua og aimara er offisielle språk\n- **Mexico:** Mange urfolksgrupper bevarer tradisjonene\n\nDenne kulturelle rikdommen er en viktig del av Latin-Amerikas identitet.'],
      [{ title: 'Mangfold', problem: 'Nevn tre urfolkskulturer i Latin-Amerika.', solution: 'Maya (Mexico/Guatemala), Inca/Quechua (Peru/Bolivia), Mapuche (Chile/Argentina). Andre: Azteca, Guaraní, Aymara.' },
       { title: 'Spania', problem: 'Hvilke språk snakkes i Spania?', solution: 'Castellano (spansk), catalán, euskera (baskisk), gallego, og valenciano. Castellano er det eneste offisielle språket i hele landet.' }],
      [mkEx('lett', 'Match urfolkskultur med region:', [
        ['Maya', 'Mexico og Guatemala'], ['Inca', 'Peru og Bolivia'],
        ['Mapuche', 'Chile og Argentina'], ['Guaraní', 'Paraguay']]),
       mkEx('lett', 'Match region med språk:', [
        ['Cataluña', 'Catalán'], ['País Vasco', 'Euskera'],
        ['Galicia', 'Gallego'], ['Paraguay', 'Guaraní']]),
       mkEx('medium', 'Svar på spørsmålene:', [
        ['Hvor mange land har spansk som offisielt språk?', '21 land (inkludert Spania)'],
        ['Hva er spesielt med euskera?', 'Det er et isolert språk uten kjent slektskap med andre språk.'],
        ['Hva er quechua?', 'Et urfolksspråk med ca. 8 millioner talere i Peru, Bolivia og Ecuador.'],
        ['Hvorfor er mangfold viktig?', 'Fordi det beriker kulturen og gir ulike perspektiver.']]),
       mkEx('vanskelig', 'Refleksjonsoppgaver:', [
        ['Sammenlign mangfold i Spania og Norge.', 'Tanto España como Noruega tienen minorías linguísticas (samisk/catalán). A diferencia de España, Noruega tiene solo un idioma oficial principal...'],
        ['Hvorfor er det viktig å bevare urfolksspråk?', 'Es importante preservar las lenguas indígenas porque representan conocimientos, tradiciones y visiones del mundo únicas.'],
        ['Diskuter begrepet \"latinamerikansk kultur\".', 'No existe una sola cultura latinoamericana. Hay una enorme diversidad de culturas, tradiciones y lenguas...'],
        ['Hva kan vi lære av kulturelt mangfold?', 'Podemos aprender a respetar las diferencias, valorar la diversidad y enriquecer nuestra propia cultura.']])],
      '**Respekt for mangfold:** Å lære et språk handler også om å forstå at det finnes mange måter å leve på. Mangfold er en rikdom, ikke et problem.',
      '**Oppsummering: Kulturelt mangfold**\n\n- **21 land** med spansk som offisielt språk\n- **Urfolk:** Maya, Inca, Mapuche, Guaraní, Azteca\n- **Spania:** Cataluña, País Vasco, Galicia - egne språk og kulturer\n- **Språk:** Quechua, guaraní, náhuatl, catalán, euskera, gallego\n- **Nøkkel:** Mangfold er rikdom'
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

// Generate spansk-2-kap4-6
const s2_4_6 = generateFile(2, [4, 5, 6], {4: s2ch4, 5: s2ch5, 6: s2ch6}, '4-6');
fs.writeFileSync(path.join(outDir, 'textbook-content-spansk-2-kap4-6.ts'), s2_4_6);
console.log(`Written: textbook-content-spansk-2-kap4-6.ts (${s2_4_6.split('\n').length} lines)`);
