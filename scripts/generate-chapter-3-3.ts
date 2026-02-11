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

// Text content extracted from CHAPTER_HISTORIE_3_3_NARRATIV
const sections = [
  // intro + section1 → quiz1 marker
  {
    texts: [
      `## Den evige byen

Det finnes et ordtak som sier at "alle veier fører til Roma." For nesten to tusen år siden var dette bokstavelig talt sant. Roma var sentrum i det største riket verden hadde sett -- et rike som strakte seg fra Britannia i nord til Egypt i sør, fra Spania i vest til Mesopotamia i øst. Rundt 60 millioner mennesker levde under romersk styre. Og de fantastiske veiene romerne bygde -- tusenvis av kilometer med stein og mørtel -- bandt det hele sammen.

Men Roma begynte ikke som et verdensrike. Det begynte som en liten **bystat** i Italia, grunnlagt ifølge tradisjonen i 753 f.Kr. Fra denne beskjedne starten vokste Roma gjennom tre distinkte faser: først et **kongedømme** (753-509 f.Kr.), deretter en **republikk** (509-27 f.Kr.), og til slutt et **keiserdømme** (27 f.Kr.-476 e.Kr.).

Denne utviklingen -- fra liten bystat til verdensrike, fra kongedømme via republikk til keiserdømme -- er en av historiens mest fascinerende fortellinger. Og arven fra Roma er overalt rundt oss: i språket, lovene, arkitekturen, infrastrukturen og de politiske ideene vi lever med i dag.`,

      `## Republikken -- makt i balanse

I 509 f.Kr. kastet romerne ut sin siste konge og grunnla en **republikk** -- fra latin *res publica*, "offentlig sak" eller "fellessak." Ideen var at staten ikke tilhørte én person, men folket. Den romerske tenkeren Cicero formulerte det slik: *"En stat er folkets eiendom."*

Men hvem var "folket"? Som i Aten var svaret mer begrenset enn vi kanskje liker. Republikken var styrt av et komplisert system designet for å dele makten og hindre tyranni.

**Senatet** bestod av ca. 300 eldre adelsmenn med enorm innflytelse. De kontrollerte finanser og utenrikspolitikk og ga råd til embetsmennene. **Folkeforsamlingene** valgte embetsmenn og vedtok lover -- alle frie menn kunne delta, men de rikes stemmer talte mer enn de fattiges. To **konsuler** var de øverste lederne, valgt for bare ett år av gangen. De kunne legge ned veto mot hverandre -- enda et grep for å hindre at én person samlet for mye makt.

Under konsulene fantes det **pretorer** (dommere), **kvestorer** (finansforvaltere) og **censorer** (som holdt folketelling og overvåket borgernes moral). Alle verv var tidsbegrensede, og kollegialitetsprinsippet -- to eller flere personer i hvert verv -- sikret maktbalanse.

Makten var i praksis konsentrert hos **patrisiere** -- den gamle adelen. Men de vanlige borgerne, **plebeierne**, kjempet seg gradvis til flere rettigheter. De fikk sine egne embetsmenn (tribuner) med vetorett, og til slutt kunne plebeiere også bli konsuler. Denne kampen mellom adel og folk er en rød tråd gjennom hele republikkens historie.`
    ],
    marker: 'Slutt på del 1.'
  },
  // section2 → quiz2 marker
  {
    texts: [
      `## Fra republikk til keiserdømme -- maktens fristelse

Republikken fungerte i nesten 500 år, men den ble til slutt ødelagt innenfra. Hva skjedde?

Etter hvert som Roma erobret stadig større områder, ble hæren viktigere -- og generalene mektigere. Generaler som Marius, Sulla, Pompeius og til slutt **Julius Caesar** samlet lojaliteten til hærene sine og brukte den militære makten til å utfordre senatet. Borgerkriger herjet republikken i dens siste tiår.

Caesar krysset Rubicon-elven med sin hær i 49 f.Kr. -- en handling som symbolsk markerte at han brøt med republikken -- og tok makten. Han innførte reformer, ga borgerskap til flere, og ble utnevnt til diktator på livstid. Men ikke alle var fornøyde. Den 15. mars 44 f.Kr. -- de berømte *idus Martiae* -- ble Caesar myrdet av senatorer som fryktet at han ville gjøre seg til konge.

Mordet utløste nye borgerkriger. Til slutt sto Caesars adoptivsønn **Augustus** igjen som seierherre. I 27 f.Kr. ble han den første **keiseren** -- selv om han var klok nok til å beholde republikkens former. Han kalte seg "princeps" (den fremste), ikke "rex" (konge). Men i praksis var republikken død.

Augustus innledet **Pax Romana** -- den romerske freden -- en periode på ca. 200 år med relativ stabilitet, handel og kulturell blomstring. Veier, akvedukter og byer ble bygget over hele riket. Denne freden var reell, men den hvilte på keiserens makt, ikke på folkelig deltakelse. Demokratiet, slik athenerne hadde praktisert det, var forlatt.`
    ],
    marker: 'Slutt på del 2.'
  },
  // section3 → quiz3 marker
  {
    texts: [
      `## Rikets fall -- en sakte nedgang

Intet rike varer evig, og Romerriket var intet unntak. Etter Pax Romanas slutt rundt 180 e.Kr. begynte en lang, gradvis nedgang. Det er viktig å forstå at dette ikke var én dramatisk hendelse, men en prosess som strakte seg over nesten 300 år.

**Ytre press** var en avgjørende faktor. Germanske folk -- vandaler, goter, frankere og andre -- presset stadig hardere på rikets grenser. De var ikke nødvendigvis fiendtlige -- mange ønsket å bosette seg innenfor riket og delta i det romerske samfunnet. Men presset ble overveldende.

**Indre svakhet** var minst like viktig. Korrupsjon gjennomsyret administrasjonen. Økonomiske problemer -- inflasjon, skattetrykk, handelssvikt -- undergravde rikets grunnlag. **Politisk ustabilitet** med hyppige keiserskifter (i en periode hadde Roma 26 keisere på 50 år, de fleste myrdet) gjorde det umulig å føre en stabil politikk. **Militære problemer** -- det ble stadig vanskeligere å forsvare de enorme grensene -- tømte rikets ressurser.

I 395 e.Kr. ble riket delt i to: **Vestromerriket** med hovedstad i Roma, og **Østromerriket** med hovedstad i Konstantinopel. Vestromerriket falt i 476 e.Kr., da den germanske hærføreren Odoaker avsatte den siste vestromenske keiseren. Men **Østromerriket** -- kjent som **Bysants** -- overlevde i nesten tusen år til, helt til Konstantinopel falt for osmanene i 1453.

Det er verdt å merke seg at "fallet" ikke var like dramatisk som det ofte fremstilles. For mange av menneskene som levde i det vestlige Romerriket, forandret ikke hverdagen seg over natten. Germanske konger overtok styringen, men mye av den romerske kulturen, lovgivningen og infrastrukturen levde videre.`
    ],
    marker: 'Slutt på del 3.'
  },
  // section4 → quiz4 marker
  {
    texts: [
      `## Maktfordeling -- fra Roma til Montesquieu til Norge

La oss nå trekke en linje fra den romerske republikken til det norske demokratiet i dag, for sammenhengen er mer direkte enn du kanskje tror.

Romerne delte makten mellom konsuler, senat og folkeforsamlinger for å hindre tyranni. Denne ideen -- at makt må deles for å forhindre maktmisbruk -- ble gjenoppdaget av den franske filosofen **Montesquieu** på 1700-tallet. Han formulerte **maktfordelingsprinsippet**: den lovgivende, utøvende og dømmende makt må holdes adskilt. Montesquieu hentet inspirasjon direkte fra den romerske republikken.

I Norge i dag ser vi dette prinsippet i praksis: **Stortinget** lager lover (lovgivende makt), **regjeringen** styrer landet (utøvende makt), og **domstolene** dømmer (dømmende makt). Disse tre institusjonene kontrollerer hverandre -- ingen har all makt.

Men det er også viktige forskjeller mellom Roma og Norge. Roma hadde ingen **grunnlov** som sikret grunnleggende rettigheter. De rikes stemmer talte mer enn de fattiges. Kvinner og slaver var utelukket. Og i praksis var makten konsentrert hos adelen, ikke hos folket.

Norge har **uavhengige domstoler** som kan overprøve Stortingets vedtak hvis de bryter med Grunnloven. Vi har **menneskerettigheter** som beskytter individet mot flertallsovergrep. Vi har **allmenn stemmerett** -- alle voksne borgere har lik stemme. Og vi har et **rettighetsbegrep** som beskytter minoriteter mot flertallets vilje.

Likevel er den grunnleggende innsikten den samme: makt korrumperer, og absolutt makt korrumperer absolutt. Romerne visste det. Montesquieu artikulerte det. Og vi lever etter det -- i hvert fall prøver vi.`
    ],
    marker: 'Slutt på del 4.'
  },
  // section5 → quiz5 marker
  {
    texts: [
      `## Arven fra antikken -- overalt rundt oss

La oss avslutte med å se på den samlede arven fra antikken -- fra både Hellas og Roma. Den er så gjennomgripende at vi ofte ikke legger merke til den.

**Politikk og lov** er kanskje det mest åpenbare. Demokrati-ideen fra Aten, republikkbegrepet fra Roma, maktfordelingsprinsippet, og rettsprinsipper som uskyldspresumsjon og retten til skriftlige lover -- alt dette stammer fra antikken.

**Språket** vårt er fullt av latinske spor. Romanske språk som spansk, fransk og italiensk stammer direkte fra latin. Og selv på norsk bruker vi latinske ord daglig: *status quo*, *et cetera*, *veto*, *alibi*, *agenda*, *virus*, *ultimatum*. Alfabetet vi skriver med er det latinske alfabetet. Hele det akademiske, juridiske og medisinske fagspråket er gjennomsyret av gresk og latin.

**Arkitekturen** rundt oss bærer antikkens preg. Søyler, buer og kupler -- grunnelementene i vestlig arkitektur -- stammer fra Hellas og Roma. Offentlige bygninger over hele verden er inspirert av antikke forbilder. Stortingsbygningen i Oslo med sine søyler er et direkte ekko av gresk og romersk arkitektur.

**Filosofi og vitenskap** har dype røtter i antikken. Logikk og vitenskapelig metode begynte med greske tenkere. Etikk og politisk filosofi bygger på Platon og Aristoteles. Og den kritiske tenkningen -- evnen til å stille spørsmål ved etablerte sannheter -- er en arv fra Sokrates.

**Litteratur og teater** som kunstformer ble skapt i antikken. Drama, komedie og tragedie -- alle oppsto på greske scener. Episk diktning som Homers *Iliaden* og Vergils *Æneiden* har inspirert forfattere i to tusen år.

Det er verdt å merke seg at dette kapittelet fokuserer på den gresk-romerske arven fordi den har hatt størst direkte innflytelse på europeisk og norsk kultur. Andre sivilisasjonstradisjoner -- kinesisk, indisk, islamsk og andre -- har sine egne like betydningsfulle intellektuelle, arkitektoniske og politiske arver som har formet store deler av verden. Antikkens gresk-romerske arv er likevel ikke bare fortid for oss i Europa. Den er nåtid -- innvevd i alt fra språket vi snakker til bygningene vi ser og de politiske prinsippene samfunnet vårt bygger på.`
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

Roma gikk fra liten bystat til verdensrike og etterlot seg en arv som fortsatt preger vår verden: språk, lover, arkitektur, infrastruktur og politiske ideer.

**Nøkkelbegreper du nå kjenner:**
- **Republikk**: Fra latin res publica ("fellessak"), en stat der makten tilhører folket
- **Senatet**: Forsamling av eldre adelsmenn med stor innflytelse i Roma
- **Patrisiere og plebeiere**: Adel og vanlige borgere som kjempet om makt
- **Pax Romana**: Ca. 200 år med fred og stabilitet under keisertiden
- **Vestromerrikets fall**: 476 e.Kr., da den siste vestromenske keiseren ble avsatt
- **Maktfordelingsprinsippet**: Innsikten om at makt må deles for å hindre tyranni

**Det viktigste du tar med deg:**
Antikkens arv er ikke noe som ligger i en glassmonter på et museum. Den er levende -- i språket du snakker, lovene du lever under, bygningene du ser, og de politiske prinsippene som beskytter dine rettigheter. Å kjenne antikken er å kjenne røttene til vår egen verden.`
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
  const tmpDir = '/tmp/tts-historie-3-3';

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
  const masterFile = path.join(masterDir, 'historie-3-3-narrativ-full-master.mp3');

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
