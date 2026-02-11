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

// Text content extracted from CHAPTER_HISTORIE_3_2_NARRATIV
const sections = [
  // intro + section1 → quiz1 marker
  {
    texts: [
      `## En morgen i Aten

Det er tidlig morgen i Aten, en varm dag på 430-tallet f.Kr. Du er en fri, mannlig borger i verdens mest berømte bystat, og du er på vei opp til **Pnyx**-høyden. Her, på en åpen plass med utsikt over byen, samles tusenvis av dine medborgere. I dag skal folkeforsamlingen behandle et viktig spørsmål -- kanskje krig eller fred, kanskje en ny lov. Du har rett til å ta ordet, og din stemme teller like mye som de rikestes.

Du deltar i noe verden aldri har sett før: **demokrati** -- folkestyre. Ordet kommer fra gresk: *demos* betyr folk, *kratos* betyr styre. For første gang i historien har vanlige borgere direkte makt til å bestemme lover og politikk. Det er en radikal idé i en verden dominert av konger og tyranner.

Men Grekenland var ikke ett land. Det bestod av hundrevis av **bystater** -- på gresk *polis* -- som hver hadde sin egen styreform. **Aten**, **Sparta**, **Korint** og **Theben** var blant de mektigste. De delte et felles språk, religion og kultur, men var politisk uavhengige og ofte i krig med hverandre. Det var i Aten at demokratiet vokste frem, og det er det athenske demokratiet som har inspirert politisk tenkning helt frem til vår tid.

Men var det virkelig et folkestyre? Svaret er mer komplisert enn du kanskje tror.`,

      `## Slik fungerte demokratiet

Det athenske demokratiet var organisert rundt tre hovedinstitusjoner. Den viktigste var **folkeforsamlingen**, kalt *Ekklesia*. Her kunne alle mannlige borgere over 18 år delta. Den møttes 40 ganger i året på Pnyx-høyden, og her ble de store avgjørelsene tatt: lover ble vedtatt, krig ble erklært, embetsmenn ble valgt. Enhver borger kunne ta ordet og argumentere for sitt syn. Beslutninger ble fattet ved flertall.

Den daglige administrasjonen ble styrt av **Rådet** (*Boule*), som hadde 500 medlemmer. Og her kommer en overraskelse: medlemmene ble ikke valgt ved valg, men ved **loddtrekning**. Navnet ditt ble trukket fra en urne, og plutselig var du med på å styre byen. Rådet forberedte saker for folkeforsamlingen og tok seg av den løpende driften av byen.

Også **domstolene** (*Dikasterion*) var bemannet av borgere valgt ved loddtrekning. Det fantes ingen profesjonelle dommere. Vanlige borgere lyttet til argumentene og avgjorde rettssakene ved avstemning.

Hvorfor loddtrekning og ikke valg? Athenerne mente at valg favoriserer de rike og veltalende -- de som har råd til å drive valgkamp og som mestrer retorikken. Loddtrekning sikret at makten ble spredt og at alle borgere fikk erfaring med å styre. Det var en demokratisk idé i sin reneste form: enhver borger er god nok til å delta i styringen av samfunnet.

Perikles, Athens fremste politiker på 400-tallet f.Kr., sa det slik i sin berømte gravtale: *"Vår statsforfatning er ikke en etterligning av andre folks lover. Vi er snarere selv et forbilde for andre."* Han mente at Athens demokrati var unikt -- og det hadde han rett i.`
    ],
    marker: 'Slutt på del 1.'
  },
  // section2 → quiz2 marker
  {
    texts: [
      `## De som sto utenfor

Det athenske demokratiet var *ikke* et demokrati i moderne forstand. La oss se på hvem som faktisk hadde rett til å delta.

**Kvinner** var fullstendig utelukket fra politikken. De hadde ingen stemmerett, kunne ikke eie eiendom, og levde under mannlig formynderskap -- først av faren, deretter av ektemannen. I en av antikkens mest demokratiske bystater var halvparten av befolkningen uten politiske rettigheter på grunn av kjønn.

**Slaver** utgjorde kanskje 30-40 prosent av Atens befolkning. De hadde ingen rettigheter overhodet. De arbeidet i hjemmene, på jordene, i gruvene. Og her kommer et av historiens store paradokser: det athenske demokratiet var delvis *mulig* fordi slavene frigjorde borgernes tid til politikk. Mens slavene arbeidet, kunne borgerne diskutere og stemme.

**Innflyttere** -- kalt *metoiker* -- var frie ikke-atenere som bodde og arbeidet i byen. De betalte skatt og drev ofte handel og håndverk, men kunne ikke stemme eller delta i politikken. De bidro til byens økonomi uten å ha noen innflytelse på beslutningene.

Hvem hadde da rettigheter? Kun frie menn født av athenske foreldre. Det var anslagsvis bare **10-20 prosent** av befolkningen. Og selv blant disse krevde det tid og ressurser å delta aktivt -- den fattigste bonden hadde kanskje ikke råd til å forlate åkeren sin for å reise inn til byen og stemme.

Kan vi kalle dette et "demokrati"? Svaret avhenger av definisjonen. For de som var definert som borgere, var det et reelt folkestyre -- de bestemte direkte. Men for flertallet av befolkningen var det alt annet enn folkestyre.`
    ],
    marker: 'Slutt på del 2.'
  },
  // section3 → quiz3 marker
  {
    texts: [
      `## Kritikerne -- var demokrati virkelig en god idé?

Det er lett å romantisere det athenske demokratiet, men vi bør huske at ikke alle i samtiden var begeistret. Noen av historiens mest innflytelsesrike tenkere -- **Sokrates**, **Platon** og **Aristoteles** -- var kritiske til demokratiet.

Sokrates ble faktisk dømt til døden av det athenske demokratiet i 399 f.Kr. Han ble anklaget for å fordærve ungdommen og for å ikke tro på byens guder. En jury av 501 borgere stemte ham skyldig, og han ble tvunget til å drikke gift. For mange var dette beviset på at folkemengden kunne ta urettferdige beslutninger.

Sokrates' elev **Platon** gikk lenger. Han mente at demokrati var farlig fordi folk flest manglet kunnskapen til å ta gode beslutninger. Folk stemte for det som *føles* bra, ikke det som *er* klokt. Dyktige talere -- **demagoger** -- kunne manipulere folkemengden med fine ord og tomme løfter. Platon mente at samfunnet burde styres av "filosofkonger" -- vise eksperter som hadde studert i årevis og forstod hva som virkelig var best for samfunnet.

Aristoteles, Platons elev, hadde et mer nyansert syn. Han mente at demokrati var en av de mulige styreformene, men at den beste styreformen var en blanding -- det han kalte **politeia** -- som kombinerte elementer fra demokrati, aristokrati og monarki.

Disse kritikkene er ikke bare historisk interessante -- de er fortsatt relevante. Spørsmål om populisme, "fake news" og ekspertenes rolle i demokratiet er like aktuelle i dag som de var i Aten for 2400 år siden. Er folket alltid klokt? Kan demokratiet ta katastrofalt feilaktige beslutninger? Og i så fall -- finnes det et bedre alternativ?`
    ],
    marker: 'Slutt på del 3.'
  },
  // section4 → quiz4 marker
  {
    texts: [
      `## Aten versus Norge -- demokrati da og nå

La oss sammenligne det athenske demokratiet med det norske demokratiet i dag. Likhetene er reelle: ideen om at folket skal styre, flertallsbeslutninger og likhet for loven for borgere. Men forskjellene er enorme.

Den mest grunnleggende forskjellen handler om hvem som er "folket." I Aten var det ca. 30 000 mannlige borgere. I Norge er det over 4 millioner velgere -- alle voksne borgere, uavhengig av kjønn, rase eller sosial bakgrunn. Det athenske demokratiet var et **direkte demokrati**: borgerne møtte opp personlig og stemte over hver enkelt sak. Norges demokrati er et **representativt demokrati**: vi velger representanter som tar beslutninger på våre vegne. Det er en praktisk nødvendighet -- du kan ikke samle 4 millioner mennesker på en høyde for å diskutere statsbudsjettet.

En annen viktig forskjell handler om beskyttelse av **menneskerettigheter**. I Aten bestemte flertallet alt -- det fantes ingen grunnlov som beskyttet individets rettigheter mot folkets vilje. Det betyr at flertallet kunne bestemme å henrette en uskyldig mann -- noe som faktisk skjedde med Sokrates. I Norge sikrer Grunnloven og internasjonale menneskerettighetskonvensjoner at selv om flertallet ønsker noe, kan ikke visse rettigheter krenkes.

Athenerne brukte loddtrekning. Vi bruker frie valg. Athenernes verv var ofte ettårige. Vår Stortingsperiode er fire år. Athenerne tok alle beslutninger selv. Vi delegerer til politikere og byråkrater.

Men kjernen er den samme: ideen om at makten tilhører folket, ikke en konge, en adelsklasse eller en militærjunta. Denne ideen ble født i Aten for nesten 2500 år siden, og den lever videre i det norske Stortinget i dag.`
    ],
    marker: 'Slutt på del 4.'
  },
  // section5 → quiz5 marker
  {
    texts: [
      `## Arven fra Aten -- en ufullstendig revolusjon

Det athenske demokratiet varte i omtrent 200 år, fra slutten av 500-tallet til 322 f.Kr., da Makedonia erobret Aten. Men ideen overlevde. Den ble videreført av romerske politiske tenkere, gjenoppdaget under renessansen, og ble det ideologiske grunnlaget for den amerikanske og den franske revolusjonen på slutten av 1700-tallet.

Kunne direkte demokrati som i Aten fungere i Norge i dag? Det er et interessant tankeeksperiment. Teknologien gjør det mulig -- vi kunne i prinsippet stemme digitalt over hver eneste sak. Og vi er bedre utdannet enn noen gang. Men motargumentene er sterke: Norge har over 4 millioner velgere mot Athens 30 000. Sakene er enormt komplekse -- skattepolitikk, utenrikspolitikk, miljølovgivning. Folk har ikke tid til å sette seg grundig inn i alt. Og risikoen for populisme og manipulasjon -- Platons gamle bekymring -- er kanskje enda større i sosiale mediers tidsalder.

Likevel bruker vi elementer av direkte demokrati: folkeavstemninger om store spørsmål, som EU-avstemningen i 1994 eller Brexit i Storbritannia i 2016. Disse viser både styrken og svakheten ved direkte demokrati: folket får bestemme, men komplekse spørsmål reduseres til et enkelt ja eller nei.

Det athenske demokratiet var ufullkomment -- det utelukket flertallet av befolkningen. Men det plantet en idé som ble enormt innflytelsesrik i senere historie: at vanlige mennesker kan og bør ha innflytelse over styringen av samfunnet. Denne ideen om folkelig suverenitet ble videreført, omformet og utvidet gjennom århundrene -- og den preger politisk tenkning over hele verden i dag. Hver gang du stemmer ved et valg, deltar du i en tradisjon som har røtter på Pnyx-høyden i Aten for nesten 2500 år siden.`
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

Det athenske demokratiet var verdens første folkestyre -- en radikal idé som endret historien. Men det var også et ufullstendig demokrati som utelukket kvinner, slaver og innflyttere.

**Nøkkelbegreper du nå kjenner:**
- **Demokrati**: Folkestyre, fra gresk demos (folk) + kratos (styre)
- **Polis**: Gresk bystat, den grunnleggende politiske enheten
- **Folkeforsamlingen (Ekklesia)**: Der alle mannlige borgere kunne stemme direkte over lover og politikk
- **Loddtrekning**: Metode for å velge embetsmenn, sikret maktspredning
- **Direkte vs. representativt demokrati**: Aten hadde direkte demokrati, Norge har representativt

**Det viktigste du tar med deg:**
Demokrati er ikke noe som alltid har eksistert -- det ble oppfunnet, og det har utviklet seg over tid. Fra Athens begrensede borgerrettigheter til moderne demokratiers allmenne stemmerett har definisjonen av hvem som regnes som politiske deltakere endret seg dramatisk gjennom historien.`
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
  const tmpDir = '/tmp/tts-historie-3-2';

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
  const masterFile = path.join(masterDir, 'historie-3-2-narrativ-full-master.mp3');

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
