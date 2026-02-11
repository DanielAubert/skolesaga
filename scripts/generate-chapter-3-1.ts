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

// Text content extracted from CHAPTER_HISTORIE_3_1_NARRATIV
const sections = [
  // intro + section1 → quiz1 marker
  {
    texts: [
      `## Der elvene møtes

Forestill deg at du står ved bredden av en bred, saktflytende elv. Rundt deg strekker det seg et flatt landskap av leire og sand, men langs elvebredden er alt grønt og frodig. Det er varmt -- over 40 grader i skyggen. Du er i Mesopotamia, "landet mellom elvene," for omtrent 5000 år siden. Og det du ser rundt deg er noe verden aldri har sett før: en **by**.

Tusenvis av mennesker lever her. Det er ikke lenger bare bønder -- det er håndverkere, prester, skrivere, soldater og handelsmenn. Midt i byen reiser det seg en enorm trappepyramide -- en **ziggurat** -- der prestene utfører ritualer for gudene. I et hjørne sitter en mann og presser en skarp pinne ned i en fuktig leirtavle. Han skriver. Det er en av de første menneskene i historien som gjør det.

For rundt 5000 år siden oppsto de første **sivilisasjonene** langs de store elvene i Midtøsten: **Mesopotamia** mellom Eufrat og Tigris, og **Egypt** langs Nilen. Her ble skriften oppfunnet, lovene nedskrevet, og komplekse samfunn med arbeidsdeling og hierarkier utviklet seg. Andre tidlige sivilisasjoner vokste frem i **Indusdalen** i dagens Pakistan og langs **Huang He** (Den gule elven) i Kina. Disse sivilisasjonene la grunnlaget for mye av det vi tar for gitt i dag: skrift, lover, matematikk og selve ideen om staten.`,

      `## Hva er en sivilisasjon?

Ordet "sivilisasjon" brukes ofte i hverdagsspråket, men i historiefaget har det en mer presis betydning. En sivilisasjon er et komplekst samfunn kjennetegnet av flere trekk: **byer** med større befolkningskonsentrasjoner enn landsbyer, et **skriftsystem** for å registrere informasjon, **spesialisering** der ikke alle er bønder, **sosial lagdeling** med et hierarki av herskere, prester, håndverkere og bønder, **organisert religion** med templer og presterskap, og **sentralisert styring** med lover og administrasjon.

Men her er det viktig å stoppe opp og tenke kritisk. Begrepet "sivilisasjon" har historisk blitt misbrukt til å nedvurdere andre samfunn som "usiviliserte." Europeiske koloniherrer brukte dette begrepet for å rettferdiggjøre undertrykkelse av folkeslag som levde annerledes -- men lignende rangordninger har også blitt brukt av ikke-europeiske makter, som det kinesiske keiserriket i møte med nabofolk. Moderne historikere bruker begrepet i hovedsak nøytralt for å beskrive en bestemt *type* samfunn, ikke for å rangere kulturer som bedre eller dårligere. Noen forskere mener begrepet fortsatt har analytisk verdi for å beskrive komplekse, urbane samfunn, mens andre foretrekker alternative begreper.

Og her er et spørsmål verdt å tenke på: Hvorfor oppsto de første sivilisasjonene langs store elver? Svaret er nesten elegant i sin enkelhet. Elvene ga **vann** til jordbruk i ellers tørre områder. De ga **fruktbar jord** gjennom årlige oversvømmelser, særlig i Egypt der Nilen la igjen næringsrikt slam. De ga **transport** -- det var mye lettere å frakte varer med båt enn på landeveien. Og de ga **fisk og mat**. Jordbruksoverskuddet som elvene muliggjorde, frigjorde folk til andre oppgaver: håndverk, handel, administrasjon og religion.`
    ],
    marker: 'Slutt på del 1.'
  },
  // section2 → quiz2 marker
  {
    texts: [
      `## Mesopotamia -- landet mellom elvene

**Mesopotamia** -- fra gresk "mellom elvene" -- lå mellom Eufrat og Tigris, i det som i dag er Irak. Her oppsto en av verdens aller første sivilisasjoner, og her ble noen av menneskehetens viktigste oppfinnelser gjort.

Det var **sumererne** som rundt 3200 f.Kr. oppfant **kileskriften** -- et skriftsystem der man presset en kileformet pinne ned i fuktige leirtavler. Opprinnelig ble skriften brukt til regnskap og handel -- å holde styr på hvem som skyldte hvem hva. Men snart ble den brukt til alt fra kongebrev til kjærlighetspoesi. Det er noe magisk ved tanken: de første skriftlige ordene i historien handlet trolig om korn og kveg.

Mesopotamia var ikke ett stabilt rike, men en serie skiftende maktsentre: **Sumer**, **Akkad**, **Babylon** og **Assyria** avløste hverandre gjennom årtusener. Babylons mest berømte konge var **Hammurabi**, som rundt 1750 f.Kr. samlet 282 lover i en lovsamling bevart på en steinplate. "Øye for øye, tann for tann" -- dette prinsippet kommer herfra. Det høres brutalt ut for oss, men det representerte faktisk et fremskritt: det satte en *grense* for gjengjeldelse. Du kunne ikke drepe noen fordi de skadet deg. Straffen måtte stå i forhold til forbrytelsen.

Hammurabi lovsamling forteller oss mye om samfunnet i Babylon. Den avslører et **lagdelt samfunn** med frie borgere, halvfrie og slaver. Kvinner hadde noen rettigheter, som arv og skilsmisse, men var underordnet menn. Detaljerte regler for handel, kontrakter, familierett og yrker viser et komplekst samfunn med behov for skriftlige regler -- et enormt steg fra muntlig tradisjon.

Mesopotamia ga oss også **60-tallssystemet** -- grunnen til at vi har 60 minutter i en time og 60 sekunder i et minutt. Hver gang du ser på klokken, bruker du en mesopotamisk oppfinnelse som er nesten 5000 år gammel.`
    ],
    marker: 'Slutt på del 2.'
  },
  // section3 → quiz3 marker
  {
    texts: [
      `## Egypt -- riket langs Nilen

Mens Mesopotamia var preget av skiftende riker og stadige invasjoner, var **Egypt** en helt annen historie. Beskyttet av ørken på begge sider og med Nilen som livsnerve, forble Egypt et stabilt rike i nesten 3000 år -- en utrolig bragd i verdenshistorien.

Egypt ble forent under én **farao** rundt 3100 f.Kr. Farao var ikke bare en politisk leder -- han (og noen ganger hun) ble ansett som en levende gud, en bro mellom mennesker og det guddommelige. Denne religiøse autoriteten ga farao enorm makt og bidro til rikets stabilitet.

Egypterne utviklet sitt eget skriftsystem: **hieroglyfer** -- vakre, intrikate tegn som ble risset inn i tempelvegger og malt på papyrus. Lenge var disse tegnene en gåte for moderne forskere, helt til **Rosettasteinen** ble funnet i 1799, med samme tekst skrevet på hieroglyfer, demotisk skrift og gresk. Det tok likevel over 20 år før franskmannen Jean-Francois Champollion knekket koden i 1822.

**Pyramidene** er kanskje det mest kjente symbolet på det gamle Egypt. Den store pyramiden i Giza, bygget rundt 2560 f.Kr. for farao Khufu, var verdens høyeste menneskeskapte konstruksjon i over 3800 år. Den ble bygget av titusenvis av arbeidere -- ikke slaver, som mange tror, men organiserte arbeidslag som trolig arbeidet i bytte mot mat og hus. Pyramidene var gravkamre, knyttet til den egyptiske troen på **livet etter døden**. Gjennom **mumifisering** ble kroppen bevart for at sjelen skulle ha et sted å vende tilbake til.

Egypt og Mesopotamia delte mye: begge var elvebaserte jordbrukssamfunn med skrift, monumentalarkitektur, kongemakt og presteskap. Men forskjellene er også slående. Egypt var mer stabilt, mer isolert og mer sentralisert. Mesopotamia var mer åpent, mer utsatt for invasjoner, og mer preget av skiftende makter.`
    ],
    marker: 'Slutt på del 3.'
  },
  // section4 → quiz4 marker
  {
    texts: [
      `## Skriftens makt -- fra regneskap til poesi

La oss dvele litt ved skriften, for den er kanskje den viktigste oppfinnelsen i menneskets historie. Tenk på hva skriften muliggjorde: For første gang kunne informasjon lagres *utenfor* et menneskes hode. Kunnskap kunne overleve den som skapte den. Lover kunne gjelde for alle, ikke bare for de som hadde hørt dem muntlig. Handel over lange avstander ble enklere fordi avtaler kunne skrives ned.

Kileskriften i Mesopotamia og hieroglyfene i Egypt ble begge oppfunnet rundt 3200-3100 f.Kr. -- trolig uavhengig av hverandre. I begge tilfeller begynte skriften som et praktisk verktøy for regnskap og administrasjon. Men den utviklet seg raskt. Noen av de tidligste litterære verkene i historien er mesopotamiske -- som **Gilgamesh-eposet**, en fortelling om vennskap, tap og søken etter udødelighet som fortsatt berører lesere i dag.

Skriften var likevel ikke for alle. Å lese og skrive var en ferdighet forbeholdt en liten elite: **skriverne**. De gjennomgikk år med opplæring og hadde høy status i samfunnet. For de aller fleste mennesker i de tidlige sivilisasjonene forble verden muntlig. Men skriverne la grunnlaget for noe helt nytt: et samfunn der makt ikke bare handlet om fysisk styrke eller karisma, men om informasjon og kunnskap.

Og dette er en arv vi fortsatt lever med. Alfabetet vårt stammer fra en lang utvikling som startet med kileskrift og hieroglyfer. Ideen om nedskrevne lover som gjelder for alle -- det rettsstatsprinsippet vi setter så høyt -- begynner her. Kalenderen vår bygger på egyptiske beregninger. Hver gang du ser at klokken er kvart over, bruker du mesopotamisk matematikk. De tidlige sivilisasjonene er ikke fjern fortid -- de er innvevd i hverdagen din.`
    ],
    marker: 'Slutt på del 4.'
  },
  // section5 → quiz5 marker
  {
    texts: [
      `## Arven som lever videre

Når vi ser tilbake på de første sivilisasjonene, er det lett å føle en enorm avstand. Mesopotamia og Egypt virker eksotiske og fjerne. Men arven deres er overraskende nær.

**Skriften** er det mest åpenbare. Uten oppfinnelsen av skrift i Mesopotamia og Egypt ville vi ikke hatt bøker, lover, vitenskap eller noe av det vi forbinder med kunnskapssamfunnet. Selve ideen om å lagre informasjon permanent -- det som i dag har blitt til internett og skylagring -- begynner med kileskriftens leirtavler.

**Lovgivning** er en annen arv. Hammurabi lovsamling etablerte prinsippet om at samfunnet trenger nedskrevne regler som gjelder for alle. Moderne rettssystemer bygger på denne ideen, selv om innholdet er radikalt annerledes.

**Tidsregning** stammer direkte fra disse sivilisasjonene. 60 minutter i en time, 60 sekunder i et minutt -- det er mesopotamisk. 365 dager i et år -- det er egyptisk. Disse systemene har overlevd i nesten 5000 år uten vesentlige endringer.

**Arkitektur og ingeniørkunst** -- buer og hvelvinger fra Mesopotamia brukes fortsatt. Og selve ideen om **staten** -- et sentralisert styresystem med administrasjon, skatteinnkrevning og lovgivning -- tar form her.

Men kanskje den viktigste arven er en idé: at mennesker kan organisere seg i store, komplekse samfunn med felles regler. At vi kan samarbeide i grupper på tusenvis og millioner, ikke bare i små flokker. Det er denne evnen -- til å skape abstrakte systemer som lover, religioner og stater -- som gjør oss unike. Og det begynte langs elvene i Midtøsten for 5000 år siden.`
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

De første sivilisasjonene oppsto langs store elver i Midtøsten for ca. 5000 år siden og la grunnlaget for mye av det vi i dag tar for gitt: skrift, lover, matematikk og selve ideen om staten.

**Nøkkelbegreper du nå kjenner:**
- **Sivilisasjon**: Et komplekst samfunn med byer, skrift, spesialisering, sosial lagdeling og sentralisert styring
- **Mesopotamia**: "Landet mellom elvene" (Eufrat og Tigris), der sumererne oppfant kileskriften
- **Kileskrift**: Verdens eldste kjente skriftsystem, oppfunnet ca. 3200 f.Kr.
- **Hammurabis lovsamling**: En av verdens eldste lovsamlinger, med 282 lover fra ca. 1750 f.Kr.
- **Egypt**: Stabilt rike langs Nilen i nesten 3000 år, styrt av farao med guddommelig status
- **Hieroglyfer**: Egypts skriftsystem

**Det viktigste du tar med deg:**
Hver gang du ser på klokken, leser en tekst eller forholder deg til en lov, bruker du en arv fra de tidlige sivilisasjonene. De er ikke fjern fortid -- de er innvevd i hverdagen din.`
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
  const tmpDir = '/tmp/tts-historie-3-1';

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
  const masterFile = path.join(masterDir, 'historie-3-1-narrativ-full-master.mp3');

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
