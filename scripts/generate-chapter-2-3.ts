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

// Text content extracted from CHAPTER_HISTORIE_2_3_NARRATIV
const sections = [
  // intro + section1 → quiz1 marker
  {
    texts: [
      `## Dagen alt forandret seg – eller gjorde det?

Forestill deg at du står i Paris, 14. juli 1789. Folkemassen rundt deg stormer Bastillen, det forhatte fengselet som symboliserer kongens makt. Skudd fyres, murer faller, og innen kvelden er festningen erobret. Verden vil aldri bli den samme igjen – sier historikerne.

Men er det virkelig sant? Gikk bonden Jacques, som bodde i en landsby 200 kilometer unna, til sengs den kvelden med en følelse av at alt hadde endret seg? Sannsynligvis ikke. Han hadde fortsatt den samme åkeren å pløye, den samme kirken å gå til, den samme dialekten å snakke. For Jacques endret hverdagen seg langsomt, nesten umerkelig, over tiår.

Her er vi ved kjernen av et av historiens mest grunnleggende spørsmål: Hva endrer seg egentlig, og hva forblir det samme? Historien er full av dramatiske vendepunkter – revolusjoner, kriger, oppdagelser som tilsynelatende snur alt på hodet. Men ved siden av disse bruddene finnes det strukturer og mønstre som varer ved i århundrer. Språk forandrer seg, men sakte. Religioner oppstår, men de gamle tradisjonene lever videre under nye navn. Grenser flyttes på kartet, men mennesker fortsetter å dyrke den samme jorda.

For å forstå historien trenger vi begge perspektivene: det som bryter, og det som vedvarer. Og vi trenger å stille noen avgjørende spørsmål: Hva endret seg, og hva forble det samme? Var endringen brå eller gradvis? Hvem opplevde endring, og hvem merket lite? Er det vi tror er brudd egentlig bare overflateendringer?`,

      `## Brudd – når historien rykker til

La oss starte med bruddene, de dramatiske endringene som bryter med det som var før. Historikere kaller dette også **diskontinuitet** – et langt ord for at noe slutter å henge sammen med det som kom før.

Tenk på revolusjoner. Den franske revolusjon i 1789 avskaffet monarkiet, opphevet adelens privilegier, og erklærte at alle mennesker er født frie og like. Det var et politisk brudd uten sidestykke. Eller tenk på kriger som endrer grenser og maktforhold: Etter andre verdenskrig ble verdenskartet tegnet på nytt, og to supermakter – USA og Sovjetunionen – overtok scenen fra de gamle europeiske kolonimaktene.

Teknologiske gjennombrudd kan også være brudd. Da Gutenberg oppfant boktrykkerkunsten rundt 1440, revolusjonerte det spredningen av kunnskap. Plutselig kunne ideer nå tusenvis av mennesker i stedet for noen få. Uten boktrykkerkunsten ville reformasjonen, opplysningstiden og den vitenskapelige revolusjonen vært utenkelige.

Og så har vi naturkatastrofer og pandemier. Svartedauden, som nådde Europa i 1347, drepte kanskje en tredjedel av befolkningen. Et slikt sjokk endret alt: arbeidskraft ble mangelvare, livegenskap ble svekket, og lønningene steg for de som overlevde.

Men her er det avgjørende poenget: **Brudd på ett område kan skje samtidig med kontinuitet på et annet.** Den franske revolusjon endret politikken radikalt, men bøndenes dagligliv endret seg mye saktere. Kvinner fikk ikke stemmerett. Sosiale forskjeller bestod. Napoleon gjeninnførte mange av de gamle strukturene. Var revolusjonen da et brudd – eller ikke? Svaret er at den var begge deler, avhengig av hva du ser på.`
    ],
    marker: 'Slutt på del 1.'
  },
  // section2 → quiz2 marker
  {
    texts: [
      `## Kontinuitet – de stille strømmene

Mens bruddene får overskriftene, er det kontinuiteten – det som vedvarer – som ofte former livene våre aller mest. Tenk på det: Du snakker norsk. Hvorfor? Fordi foreldrene dine snakket norsk, og deres foreldre før dem, og slik kan vi følge tråden tilbake gjennom århundrer. Språk er et av de mest slående eksemplene på kontinuitet. Det endrer seg, ja, men langsomt og gradvis.

Religion er et annet eksempel. Da kristendommen ble innført i Norge rundt år 1000, var det absolutt et brudd: en ny gud erstattet de norrøne gudene, kirker ble bygget, latinen kom som skriftspråk, og Norge ble del av den europeiske kristenheten. Men se hva som fortsatte: Språket forble norrønt. De sosiale strukturene bestod. Mange av de gamle skikkene levde videre under kristen drakt – julefeiring er et godt eksempel, der norrøne tradisjoner smeltet sammen med kristne. Bondesamfunnet fortsatte som før. Bruddet var reelt, men kontinuiteten var like reell.

Kulturelle tradisjoner og verdier, sosiale strukturer og hierarkier, geografiske og klimatiske forhold – alt dette hører til kontinuitetens domene. De endres, men i et tempo som gjør dem nesten usynlige for de som lever midt i dem. Det er som timeviserens bevegelse på en klokke: den beveger seg hele tiden, men du kan aldri se den flytte seg.

Og det er nettopp dette som gjør studiet av kontinuitet så viktig. Det er lett å bli blendet av de store hendelsene, de dramatiske bruddene som fyller lærebøkene. Men for å virkelig forstå et samfunn må du også forstå det som ikke endret seg – de dype strukturene som var der før bruddet, og som ofte fortsetter etter det.`
    ],
    marker: 'Slutt på del 2.'
  },
  // section3 → quiz3 marker
  {
    texts: [
      `## Historiens ulike hastigheter

Her er noe som kanskje overrasker deg: Ikke alle endringer beveger seg i samme tempo. Den franske historikeren Fernand Braudel ble berømt for å vise at historien opererer på minst tre ulike tidsnivåer – som bølger i havet.

På overflaten har vi hendelsene – det som skjer i kort tid. Et slag, en traktat, et attentat. Skuddene i Sarajevo 28. juni 1914, da den østerriksk-ungarske tronarvingen Franz Ferdinand ble drept. Disse hendelsene er synlige og dramatiske, og de er ofte det vi forbinder med «historie». De er som bølgene på havoverflaten: de fanger blikket, de spruter og skummer, men de forteller ikke hele historien om havet.

Under overflaten finner vi konjunkturene – endringer som varer i tiår eller generasjoner. Økonomiske sykluser, generasjonsskifter, politiske bevegelser. Urbaniseringen av Norge fra 1850 til 1950, for eksempel, forandret hvor og hvordan mennesker bodde. Men det var ingen enkelt hendelse du kunne peke på – det var en strøm som beveget seg over mange tiår. Konjunkturer krever statistikk og oversikt for å se. Du må zoome ut fra enkelthendelsene for å oppdage dem.

Og dypest ned, i havets mørke, finner vi strukturene – de lange, langsomme endringene som strekker seg over århundrer. Mentaliteter, klima, geografiske forhold, grunnleggende måter å organisere samfunnet på. Overgangen fra jordbrukssamfunn til industrisamfunn tok flere hundre år. Disse endringene er ofte usynlige for samtiden – du merker dem ikke mens de pågår, bare når du ser tilbake.

La oss ta et konkret eksempel: den industrielle revolusjon. Hendelsen kan være oppfinnelsen av dampmaskinen. Konjunkturen er urbaniseringen som fulgte over hundre år, der mennesker strømmet fra landsbygda til byene. Strukturen er den dype omveltningen fra et jordbrukssamfunn til et industrisamfunn – en endring som forandret alt fra familiestrukturer til tidsoppfatning.`
    ],
    marker: 'Slutt på del 3.'
  },
  // section4 → quiz4 marker
  {
    texts: [
      `## Revolusjonen som var – og ikke var

La oss vende tilbake til Paris og den franske revolusjon, for den er et perfekt eksempel på hvor vanskelig det er å skille brudd fra kontinuitet.

På den ene siden var de politiske bruddene udiskutable. Monarkiet ble avskaffet. Adelens privilegier ble opphevet. En helt ny kalender ble innført, med nye navn på månedene. Nye mål og vekt erstattet de gamle. Menneskerettighetserklæringen fra 1789 slo fast prinsipper som fortsatt former verden i dag: at alle mennesker er født frie og like, at makten utgår fra folket, at loven gjelder likt for alle. Kirkens makt ble dramatisk redusert.

Men se på den andre siden av bildet. Frankrike forble en sentralstyrt stat – det hadde det vært under kongene, og det fortsatte det å være under revolusjonens ledere og senere under Napoleon. Bøndenes hverdag endret seg langsomt; de fortsatte å pløye de samme åkrene med de samme redskapene. Kvinner, som hadde deltatt aktivt i revolusjonen, fikk ikke stemmerett. Sosiale forskjeller bestod, bare med nye navn. Og da Napoleon grep makten, gjeninnførte han mange av de gamle strukturene, inkludert en slags adel med hans egne marskaller og hertuger.

Så var den franske revolusjon et brudd eller en kontinuitet? Historikere har diskutert dette i over 200 år, og svaret er at den var begge deler. Den var et dramatisk politisk brudd, men dype samfunnsstrukturer endret seg mye langsommere enn de revolusjonære slagordene skulle tilsi. Dette viser oss noe viktig: «Brudd» og «kontinuitet» er ikke absolutte kategorier. Virkeligheten er alltid mer kompleks enn merkelappene vi setter på den.`
    ],
    marker: 'Slutt på del 4.'
  },
  // section5 → quiz5 marker
  {
    texts: [
      `## Vendepunkter – ekte eller konstruerte?

La oss avslutte med et tankeeksperiment. Tenk på din egen familie over tre generasjoner: deg selv, foreldrene dine og besteforeldrene dine. Hva har endret seg, og hva har forblitt det samme?

Bruddene er kanskje lette å se. Besteforeldrene dine vokste opp uten TV. Foreldrene dine vokste opp uten internett. Du har hatt en smarttelefon i lommen siden du var barn. Digital teknologi har endret kommunikasjon, arbeidsliv og underholdning fundamentalt – det er et brudd.

Men se etter kontinuiteten også. Kanskje har familien din feiret jul på samme måte i tre generasjoner. Kanskje snakker dere fortsatt den samme dialekten. Kanskje er tilknytningen til hjemstedet like sterk som den var for besteforeldrene dine. Disse tingene – familieverdier, tradisjoner, identitet – er kontinuitetens domene.

Og her kommer det virkelig store spørsmålet: Gir det egentlig mening å snakke om «historiens vendepunkter»? Er noen hendelser virkelig så viktige at de endrer alt – eller er det noe vi konstruerer i ettertid?

Tenk deg at du lever i 1914. Du vet ikke at det som skjer i Sarajevo vil utløse en verdenskrig. Du vet ikke at verden står ved et vendepunkt. Ingen visste det der og da. Det er vi som ser tilbake og sier: «Der endret alt seg.» Vi velger ut «viktige» hendelser basert på hva vi synes er viktig, med vår kunnskap om hva som skjedde etterpå.

Det betyr ikke at vendepunkter er meningsløse. Verdenskrigene, industrialiseringen, den digitale revolusjonen – alt dette hadde konsekvenser som var så omfattende at det er vanskelig å benekte at noe grunnleggende endret seg. Men vi bør huske at vendepunktene er konstruksjoner. Historien selv visste ikke at den var ved et vendepunkt. Det er vi som tegner strekene på tidslinja i ettertid.`
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

Historien beveger seg i spennet mellom brudd og kontinuitet – mellom det som endrer seg dramatisk og det som stille vedvarer.

Nøkkelbegreper du nå kjenner:
Brudd (diskontinuitet): Dramatiske endringer som bryter med det som var før – revolusjoner, kriger, teknologiske gjennombrudd, pandemier
Kontinuitet: Det som fortsetter på tross av endringer – kulturelle tradisjoner, språk, religion, sosiale strukturer, geografiske forhold
Hendelser: Endringer i kort tid (slag, traktater, attentater) – synlige og dramatiske
Konjunkturer: Endringer i mellomlang tid (økonomiske sykluser, generasjonsskifter) – krever oversikt å se
Strukturer: Endringer i lang tid (mentaliteter, klima, grunnleggende samfunnsorganisering) – ofte usynlige for samtiden

Viktige innsikter:
Store brudd på ett område kan skje samtidig med kontinuitet på andre
Den franske revolusjon var et politisk brudd, men dype samfunnsstrukturer endret seg langsommere
Historiens vendepunkter er delvis konstruksjoner vi lager i ettertid
For å forstå historien trenger vi begge perspektivene: det som bryter, og det som vedvarer

Husk: Neste gang du hører at «alt endret seg», spør deg selv: Endret virkelig alt seg – eller bare noe?`
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
  const masterDir = path.join(outputDir, '_master');
  const tmpDir = '/tmp/tts-historie-2-3';

  // Create dirs
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  if (!fs.existsSync(masterDir)) fs.mkdirSync(masterDir, { recursive: true });

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
  const { execSync } = require('child_process');

  for (let i = 0; i < chunkFiles.length; i++) {
    const chunkFile = chunkFiles[i];
    const cleanFile = path.join(tmpDir, `chunk${i + 1}-clean.mp3`);

    // Run whisper to find intro end
    const whisperOut = path.join(tmpDir, `whisper-chunk${i + 1}`);
    if (!fs.existsSync(whisperOut)) fs.mkdirSync(whisperOut, { recursive: true });

    execSync(`/Users/danielandreasaubert/Library/Python/3.9/bin/whisper --model tiny --language no "${chunkFile}" --output_format json --output_dir "${whisperOut}"`, { stdio: 'inherit' });

    // Parse whisper output to find "spennende" or "fortelle" in first 5 segments only
    const jsonFile = path.join(whisperOut, `chunk${i + 1}.json`);
    const whisperData = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

    let introEnd = 6.0; // default
    const segmentsToCheck = whisperData.segments.slice(0, 5);
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
  const masterFile = path.join(masterDir, 'historie-2-3-narrativ-full-master.mp3');

  if (cleanFiles.length === 1) {
    fs.copyFileSync(cleanFiles[0], masterFile);
  } else {
    const concatList = path.join(tmpDir, 'concat_list.txt');
    fs.writeFileSync(concatList, cleanFiles.map(f => `file '${f}'`).join('\n'));
    execSync(`ffmpeg -y -f concat -safe 0 -i "${concatList}" -c copy "${masterFile}"`, { stdio: 'inherit' });
  }

  console.log(`\nMaster file saved: ${masterFile}`);

  // Get duration
  const duration = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${masterFile}"`).toString().trim();
  console.log(`Master duration: ${parseFloat(duration).toFixed(1)}s (${(parseFloat(duration) / 60).toFixed(1)} min)`);

  console.log('\nDone! Now run Whisper on the master file to find segment boundaries.');
}

main().catch(console.error);
