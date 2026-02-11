import * as fs from 'fs';
import * as path from 'path';

const API_KEY = process.env.ELEVENLABS_API_KEY || 'sk_04691c8756f00846dce4badcc53b54f411adffc439ea3014';
const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ'; // Liam
const NORSK_INTRO = 'Jeg er en norsk nordmann og heter Daniel. Jeg vil gjerne fortelle deg om noe spennende.\n\n';

function stripMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/^[-•]\s+/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Text content extracted from CHAPTER_HISTORIE_3_4_NARRATIV
const sections = [
  // intro + section1 → quiz1 marker
  {
    texts: [
      `## En verden full av guder

Tenk deg at du lever i antikken. Du våkner om morgenen og ber til husgudene om en god dag. Du går forbi et tempel og ser prester ofre et lam til byens beskyttergudinne. På markedet hører du en reisende fortelle om gudene i et fjernt land -- og du tenker at de sikkert finnes, de også. Gudene er *overalt*. De er i naturen, i hjemmet, i politikken. Det finnes ingen skille mellom religion og resten av livet.

Slik var verden i antikken. **Religion** var ikke en privat sak du kunne velge å ha eller ikke ha. Den var selve fundamentet i samfunnet. Gudene forklarte naturens krefter og menneskets plass i verden. De legitimerte kongers og keiseres makt. De bandt samfunnet sammen gjennom ritualer og fester. Og de ga lover og moral guddommelig autoritet.

Men i denne verden av mange guder oppsto noe nytt og revolusjonerende: ideen om at det bare finnes *én* Gud. Fra denne ideen sprang det frem religioner som skulle forme verdenshistorien -- først jødedommen, deretter kristendommen, og senere islam. I dette kapittelet skal vi se på hvordan religion fungerte i antikken og hvordan kristendommen vokste fra en liten jødisk sekt til Romerrikets offisielle religion.`,

      `## Mange guder, mange svar

De fleste antikke kulturer praktiserte **polyteisme** -- troen på mange guder. Grekerne hadde Zevs, Athena, Apollon og et helt fjell fullt av guddommer. Romerne hadde Jupiter, Mars, Venus og mange andre (de "lånte" mange fra grekerne). Egypterne hadde Ra, Isis, Osiris. Nordboerne hadde Odin, Tor og Frøya.

Polyteistiske religioner hadde noe viktig til felles: de var ofte mer tolerante overfor andre religioner enn monoteistiske tradisjoner, selv om det fantes unntak. Hvis du reiste fra Roma til Egypt, kunne du tilbe egyptiske guder uten å fornekte dine egne. Det var ofte rom for flere guder. Romerne var mestre i dette: når de erobret et nytt folk, tok de ofte deres guder inn i sitt eget panteon. Det var en smart strategi -- det var lettere å styre folk som følte at gudene deres ble respektert. Likevel fantes det grenser: rettssaken mot Sokrates i Aten handlet delvis om anklager om gudløshet, og menneskeofring forekom i flere polyteistiske tradisjoner. Toleransen var altså reell, men ikke absolutt.

Hver gud hadde sitt ansvarsområde. Du ba til krigsguder før et slag, til fruktbarhetsguder for en god avling, til sjøguder før en reise. Religionen var praktisk og konkret: du ga gudene offergaver, og i gjengjeld ga de deg beskyttelse og lykke. Hvis ting gikk galt, hadde du kanskje fornærmet en gud og måtte gjøre opp for deg.

Men så kom en radikal idé fra et lite folk i Midtøsten: **monoteisme** -- troen på *én* Gud. **Jødedommen**, som tok form fra ca. 1200 f.Kr., hevdet at det bare finnes én sann, universell Gud -- Jahve. Alle andre guder var falske. Dette var eksklusivt og provoserende. Jødene inngikk en **pakt** med sin Gud: de lovte å følge hans bud, og han lovte å beskytte dem. Denne pakten ble nedskrevet i **Toraen**, de hellige tekstene.

Jødedommen var et lite folks religion og ble aldri en verdensreligion i seg selv. Men ideene -- én Gud, en pakt mellom det guddommelige og det menneskelige, nedskrevne hellige tekster -- ble fundamentet for to av verdens største religioner: kristendom og islam.`
    ],
    marker: 'Slutt på del 1.'
  },
  // section2 → quiz2 marker
  {
    texts: [
      `## En tømrersønn fra Nasaret

For omtrent to tusen år siden, i den romerske provinsen Palestina, begynte en jødisk predikant å samle tilhengere. **Jesus fra Nasaret** (ca. 4 f.Kr.-30 e.Kr.) forkynte et budskap om Guds rike, nestekjærlighet og tilgivelse. Han tiltrakk seg etterfølgere blant vanlige mennesker -- fiskere, tollere, fattige -- og utfordret det religiøse etablissementet med sin lære.

De romerske myndighetene, som styrte Palestina, så Jesus som en potensiell urostifter. Han ble arrestert, dømt og **korsfestet** -- en vanlig romersk henrettelsesmetode for forbrytere og opprørere. For de fleste romerske embedsmenn var dette en ubetydelig hendelse -- bare enda en jødisk predikant som ble ryddet av veien.

Men tilhengerne hans hevdet at Jesus var **Messias** -- den utvalgte frelserkongen jødene hadde ventet på -- og at han hadde **oppstått fra de døde**. Denne troen ga bevegelsen en ny kraft. Den lille gruppen tilhengere i Jerusalem -- **urkirken** -- begynte å spre budskapet.

Det store vendepunktet kom med **Paulus**, en jødisk fariseer som først forfulgte de kristne, men som etter en dramatisk omvendelsesopplevelse ble kristendommens viktigste misjonær. Paulus tok en avgjørende beslutning: han spredte budskapet til **ikke-jøder** (hedninger). Kristendommen var ikke lenger bare en jødisk sekt -- den ble en universell religion med budskap om frelse for alle mennesker, uansett bakgrunn. Dette var revolusjonerende. Mens jødedommen var knyttet til ett folk, åpnet kristendommen dørene for hele verden.`
    ],
    marker: 'Slutt på del 2.'
  },
  // section3 → quiz3 marker
  {
    texts: [
      `## Forfølgelse og triumf

Kristendommen bredte seg raskt i Romerriket, men veien var alt annet enn enkel. Romerne var normalt tolerante overfor andre religioner -- men kristendommen utgjorde et spesielt problem.

Problemet var **keiserkulten**. Romerne forventet at alle undersåtter deltok i offentlige ofringer til keiseren -- ikke nødvendigvis fordi de *trodde* keiseren var en gud, men som et tegn på lojalitet mot staten. Kristne nektet kategorisk. For dem var dette **avgudsdyrkelse** -- å tilbe en falsk gud. Det var ikke et kompromiss de kunne gjøre.

Denne nektelsen ble sett som **statsfiendtlig**. De kristne møttes i hemmelighet, snakket om et annet rike enn Romerriket ("Guds rike"), og nektet militærtjeneste. For romerske myndigheter virket de som en farlig undergrunnsgruppe. Under flere keisere ble de kristne **forfulgt** -- kastet for løver i amfiteatrene, brent som fakler, torturert og henrettet.

Men forfølgelsene slo feil. **Martyrenes** mot -- de som døde for troen i stedet for å fornekte den -- imponerte mange og tiltrakk nye tilhengere. Kristendommen fortsatte å vokse blant ulike samfunnslag -- både blant fattige og marginaliserte som fant trøst i budskapet om at alle er like for Gud, og blant utdannede eliter som ble tiltrukket av den teologiske og filosofiske dybden i den kristne læren.

Flere faktorer forklarer veksten: Det **universelle budskapet** om frelse for alle appellerte bredt. **Teologiske argumenter** om Guds natur, skapelsen og frelsen overbeviste også intellektuelle og filosofisk skolerte romere. Det kristne **fellesskapet** tok vare på fattige og syke på en måte som staten ikke gjorde. **Løftet om evig liv** ga håp i en usikker tid. Og ironisk nok hjalp den romerske **infrastrukturen** -- veiene og det felles språket (gresk og latin) -- kristne misjonærer å reise og spre budskapet effektivt.`
    ],
    marker: 'Slutt på del 3.'
  },
  // section4 → quiz4 marker
  {
    texts: [
      `## Fra forfulgt sekt til statsreligion

Vendepunktet kom i 313 e.Kr. med keiser **Konstantin**. Ifølge tradisjonen skal han ha hatt et syn før et avgjørende slag: han så et kors på himmelen med ordene "I dette tegn skal du seire." Han vant slaget, og i takknemlighet utstedte han **toleranseediktet** som ga kristne rett til å praktisere sin religion fritt. Forfølgelsene var over.

Konstantin gikk lenger enn bare toleranse. Han bygde kirker, ga biskoper politisk innflytelse, og grep inn i teologiske stridigheter -- blant annet ved å innkalle **kirkemøtet i Nikea** i 325, der grunnlaget for kristen lære ble formulert. Religion og statsmakt ble vevd sammen på en ny måte.

Den endelige triumfen kom i 380 e.Kr., da keiser **Theodosius** gjorde kristendommen til Romerrikets **offisielle statsreligion**. Nå var det hedningene -- de som holdt fast ved de gamle gudene -- som ble forfulgt. Templene ble stengt, ofringer forbudt, og den polyteistiske verden som hadde eksistert i årtusener ble gradvis fortrengt.

Denne alliansen mellom **kirke og stat** -- der keiseren beskyttet kirken og kirken støttet keiserens autoritet -- preget Europa i over tusen år. Biskoper fikk politisk makt. Keiseren grep inn i teologiske spørsmål. Grensen mellom det religiøse og det politiske ble utvisket.

Og denne arven lever videre. Forholdet mellom religion og stat -- sekularisme, religionsfrihet, statskirkeordninger -- er spørsmål vi fortsatt debatterer. I Norge hadde vi en statskirke helt til 2012. I mange land er forholdet mellom religiøs og politisk makt fortsatt brennaktuelt. Røttene til denne debatten ligger i det fjerde århundret, da en romersk keiser bestemte seg for å gjøre et kors til sitt symbol.`
    ],
    marker: 'Slutt på del 4.'
  },
  // section5 → quiz5 marker
  {
    texts: [
      `## Revolusjon eller tilpasning?

Var kristendommen en revolusjonær kraft som forandret Romerriket fundamentalt, eller ble den tilpasset og absorbert av den romerske maktstrukturen? Svaret er: begge deler.

**Det revolusjonære** er tydelig. Kristendommen brakte en ny etikk til verden: nestekjærlighet, tilgivelse, omsorg for de fattige og svake. Den hevdet at alle mennesker er **like for Gud** -- en radikal tanke i et samfunn bygget på slaveri og sosiale hierarkier. I de kristne menighetene kunne slaver og frie, rike og fattige, menn og kvinner tilbe side om side. Monoteismen erstattet polyteismen og endret menneskers forståelse av det guddommelige fundamentalt.

Men **tilpasningen** er like tydelig. Da kristendommen ble statsreligion, overtok kirken mye av den romerske statens struktur. **Bispedømmene** fulgte de administrative grensene i Romerriket. Kirkens hierarki -- med biskoper, erkebiskoper og til slutt paven i Roma -- lignet statens hierarki. Keiseren ble kirkens beskytter, og biskoper fikk politisk makt. Den kristne kirken ble en maktinstitusjon som ofte mer lignet det romerske senatet enn de enkle fiskerne fra Galilea.

Og noen av de gamle skikkene levde videre i ny drakt. Hedenske høytider ble kristnet -- julen ble lagt til vintersolverv, påsken til vårjevndøgn. Helgener tok over rollen til lokale guder som beskyttere av byer og yrker. Kirkebygg ble reist på stedene der templene hadde stått.

Denne doble arven -- radikal etikk og konservativ institusjon, revolusjon og tilpasning -- preget kristendommen gjennom hele middelalderen og videre. Den er en av grunnene til at kristendommens historie er så kompleks: den bærer i seg både frigjøringens og maktens logikk.`
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

Religion var uatskillelig fra samfunnet i antikken, og kristendommens fremvekst endret Romerriket og la grunnlaget for det kristne Europa som vokste frem i middelalderen.

**Nøkkelbegreper du nå kjenner:**
- **Polyteisme**: Tro på mange guder, tolerant overfor andre religioner
- **Monoteisme**: Tro på én Gud, eksklusiv -- oppsto med jødedommen
- **Jesus fra Nasaret**: Jødisk predikant, korsfestet av romerne, grunnlegger av kristendommen
- **Paulus**: Spredte kristendommen til ikke-jøder og gjorde den til en universell religion
- **Konstantins toleranseedikt (313)**: Ga kristne religionsfrihet i Romerriket
- **Theodosius (380)**: Gjorde kristendommen til statsreligion

**Det viktigste du tar med deg:**
Forholdet mellom religion og makt er en av historiens store temaer. Kristendommen begynte som en liten bevegelse i en utkant av Romerriket, bygget på troen på Gud, frelse gjennom Jesus Kristus, og håpet om evig liv -- men også på ideer om fellesskap, nestekjærlighet og rettferdighet. Denne kombinasjonen av teologisk overbevisning og sosial appell gjorde den mektigere enn noen keiser, og viser at trosretninger og ideer kan forandre verden mer enn hærer og imperier.`
    ],
    marker: null
  }
];

async function generateAudio(text: string, outputPath: string): Promise<void> {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      model_id: 'eleven_v3',
      language_code: 'no',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.0,
        use_speaker_boost: true,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`ElevenLabs API error: ${response.status} ${errorText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated: ${outputPath} (${buffer.length} bytes)`);
}

async function main() {
  const outputDir = path.join(__dirname, '..', 'public', 'audio', 'historie');
  const tmpDir = '/tmp/tts-historie-3-4';

  // Create dirs
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

  // Build full text with markers
  let fullText = '';
  for (const section of sections) {
    for (const text of section.texts) {
      fullText += stripMarkdown(text) + '\n\n';
    }
    if (section.marker) {
      fullText += section.marker + '\n\n';
    }
  }

  console.log(`Total text length: ${fullText.length} chars`);

  // Split into chunks of max ~4900 chars (leaving room for NORSK_INTRO ~90 chars)
  const MAX_CHUNK = 4900;
  const paragraphs = fullText.split('\n\n').filter(p => p.trim());
  const chunks: string[] = [];
  let currentChunk = '';

  for (const para of paragraphs) {
    if ((currentChunk + '\n\n' + para).length > MAX_CHUNK && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = para;
    } else {
      currentChunk = currentChunk ? currentChunk + '\n\n' + para : para;
    }
  }
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  console.log(`Split into ${chunks.length} chunks`);
  for (let i = 0; i < chunks.length; i++) {
    const chunkWithIntro = NORSK_INTRO + chunks[i];
    console.log(`Chunk ${i + 1}: ${chunkWithIntro.length} chars (with intro)`);
  }

  // Generate each chunk with NORSK_INTRO
  const chunkFiles: string[] = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunkFile = path.join(tmpDir, `chunk${i + 1}.mp3`);
    const textWithIntro = NORSK_INTRO + chunks[i];
    console.log(`\nGenerating chunk ${i + 1}/${chunks.length}...`);
    await generateAudio(textWithIntro, chunkFile);
    chunkFiles.push(chunkFile);
  }

  console.log('\nAll chunks generated. Now cutting intros with Whisper...');

  // For each chunk, find intro end and cut it
  const cleanFiles: string[] = [];
  for (let i = 0; i < chunkFiles.length; i++) {
    const chunkFile = chunkFiles[i];
    const cleanFile = path.join(tmpDir, `chunk${i + 1}-clean.mp3`);

    // Run whisper to find intro end
    const { execSync } = require('child_process');
    const whisperOut = path.join(tmpDir, `whisper-chunk${i + 1}`);
    if (!fs.existsSync(whisperOut)) fs.mkdirSync(whisperOut, { recursive: true });

    execSync(`/Users/danielandreasaubert/Library/Python/3.9/bin/whisper --model tiny --language no "${chunkFile}" --output_format json --output_dir "${whisperOut}"`, { stdio: 'inherit' });

    // Parse whisper output to find "spennende" or "fortelle" in FIRST 5 segments only
    const jsonFile = path.join(whisperOut, `chunk${i + 1}.json`);
    const whisperData = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

    let introEnd = 6.0; // default
    const segmentsToCheck = whisperData.segments.slice(0, 5); // ONLY first 5 segments
    for (const seg of segmentsToCheck) {
      const text = seg.text.toLowerCase();
      if (text.includes('spennende') || text.includes('fortelle')) {
        introEnd = seg.end;
        console.log(`Chunk ${i + 1}: Intro ends at ${introEnd}s ("${seg.text.trim()}")`);
        break;
      }
    }

    // Cut intro
    execSync(`ffmpeg -y -i "${chunkFile}" -ss ${introEnd} -c copy "${cleanFile}"`, { stdio: 'inherit' });
    cleanFiles.push(cleanFile);
    console.log(`Chunk ${i + 1}: Cut intro at ${introEnd}s → ${cleanFile}`);
  }

  // Concatenate clean chunks into master
  const masterDir = path.join(outputDir, '_master');
  if (!fs.existsSync(masterDir)) fs.mkdirSync(masterDir, { recursive: true });
  const masterFile = path.join(masterDir, 'historie-3-4-narrativ-full-master.mp3');

  if (cleanFiles.length === 1) {
    fs.copyFileSync(cleanFiles[0], masterFile);
  } else {
    const concatList = path.join(tmpDir, 'concat_list.txt');
    fs.writeFileSync(concatList, cleanFiles.map(f => `file '${f}'`).join('\n'));
    const { execSync } = require('child_process');
    execSync(`ffmpeg -y -f concat -safe 0 -i "${concatList}" -c copy "${masterFile}"`, { stdio: 'inherit' });
  }

  console.log(`\nMaster file saved: ${masterFile}`);

  // Get duration
  const { execSync } = require('child_process');
  const duration = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${masterFile}"`).toString().trim();
  console.log(`Master duration: ${parseFloat(duration).toFixed(1)}s (${(parseFloat(duration) / 60).toFixed(1)} min)`);

  console.log('\nDone! Now run Whisper on the master file to find segment boundaries.');
}

main().catch(console.error);
