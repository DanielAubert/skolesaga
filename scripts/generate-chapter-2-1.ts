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

// Text content extracted from CHAPTER_HISTORIE_2_1_NARRATIV
const sections = [
  // intro + section1 → quiz1 marker
  {
    texts: [
      `## Mysteriet på loftet

Tenk deg at du rydder på loftet til en gammel tante. Bak en støvete koffert finner du et sertifikat fra 1943, utstedt til en person du aldri har hørt om. Under sertifikatet ligger et fotografi av en ung mann i uniform – men det er ikke en norsk uniform. Hvem var denne mannen? Hva gjorde han under krigen? Og hvorfor hadde tanta hans papirer?

Du har nettopp oppdaget det som driver historikere: nysgjerrighet. Hele historiefaget starter med et spørsmål. Uten gode spørsmål får vi ingen gode svar. Men ikke alle spørsmål er like gode. Å stille det rette spørsmålet er faktisk en ferdighet i seg selv – og det er det dette kapittelet handler om.`,

      `## Kunsten å stille gode spørsmål

La oss si at du er fascinert av andre verdenskrig i Norge. Du vil undersøke noe selv. Men «Hvordan var andre verdenskrig?» er et håpløst spørsmål å starte med – det er som å spørre «Hva er livet?». Du kan ikke svare på det i én oppgave, én bok, eller for den saks skyld i hundre bøker.

Det du trenger er en problemstilling – et presist formulert spørsmål som styrer hele undersøkelsen din. En god problemstilling er avgrenset nok til at du faktisk kan finne svar, åpen nok til at svaret krever mer enn ja eller nei, og undersøkbar – det må finnes kilder du kan bruke.

La oss prøve å forbedre spørsmålet vårt steg for steg. «Hvordan var andre verdenskrig?» blir til «Hvordan påvirket andre verdenskrig hverdagslivet i Norge?» – bedre, men fortsatt for vidt. La oss avgrense mer: «Hvordan påvirket rasjoneringen matvanene til familier i Bergen 1942–1945?» Nå har vi noe konkret. Vi vet hva vi leter etter (matvaner), hvor (Bergen), når (1942–1945), og hvorfor det er interessant (rasjoneringen tvang folk til å endre livsstilen sin).

Til sammenligning er «Var Hitler ond?» et dårlig historisk spørsmål. Det inviterer til moralsk dom, ikke til analyse. En bedre versjon ville vært: «Hvordan rettferdiggjorde naziregimet sine handlinger overfor den tyske befolkningen?»`
    ],
    marker: 'Slutt på del 1.'
  },
  // section2 → quiz2 marker
  {
    texts: [
      `## Jakten på sporene

Når du har problemstillingen klar, begynner det virkelige detektivarbeidet: å finne kilder. Og her er det mange steder å lete.

Arkivene er historikerens skattkamre. Riksarkivet, statsarkivene og kommunearkivene oppbevarer alt fra kirkebøker og rettsdokumenter til brev og fotografier. Mye av dette er i dag digitalisert – Digitalarkivet er en gullgruve for alle som vil utforske fortiden. Der kan du finne folketellinger, emigrantlister og kirkebøker fra hele landet.

Bibliotekene har mer enn bare bøker. Nasjonalbiblioteket har digitalisert enorme mengder norske aviser, bøker og tidsskrifter. Vil du vite hva avisene skrev om en hendelse i 1905? Da søker du i deres digitale arkiv.

Museene har gjenstander og fotografier som kan fortelle historier ingen tekst kan formidle. En slitt arbeidshanske fra en fiskebåt sier noe om hardt arbeid som ingen statistikk kan fange.

Men her er det viktige: Du kan ikke lese alt. En historiker må gjøre et kildeutvalg – velge ut de kildene som er mest relevante for problemstillingen. Og du må være ærlig om hva du ikke har undersøkt. Kanskje finnes det et arkiv du ikke rakk å besøke, eller en type kilder du ikke hadde tilgang til. Det er helt greit – så lenge du sier det.`
    ],
    marker: 'Slutt på del 2.'
  },
  // section3 → quiz3 marker
  {
    texts: [
      `## Fra problem til undersøkelse – et eksempel

La oss følge en historisk undersøkelse fra start til slutt. Si at du vil undersøke din egen skoles historie. Problemstillingen din er: «Hvordan endret undervisningen seg ved Lillevik videregående fra 1950 til 1970?»

Steg 1: Kildesøk. Du starter i skolens eget arkiv. Der finner du gamle protokoller, timeplaner og reglementer. I kommunearkivet finner du budsjettvedtak om skolen. I lokalavisen søker du etter artikler om skolen. Og kanskje finner du en pensjonert lærer som gikk på skolen som elev i 1955 – en muntlig kilde.

Steg 2: Kildekritikk. Protokollene er skrevet av rektor – de gir et offisielt bilde, men sier lite om hvordan elevene faktisk opplevde undervisningen. Avisen kan ha dramatisert for å selge aviser. Den pensjonerte læreren husker kanskje ikke alt riktig etter 70 år. Hver kilde har sine styrker og svakheter.

Steg 3: Analyse. Du sammenligner timeplanene fra 1950 og 1970. Kanskje ser du at nye fag har kommet til, at det er færre timer med pugging og flere med gruppearbeid, at jenter og gutter plutselig har samme timeplan.

Steg 4: Konklusjon. Du svarer på problemstillingen din, basert på det kildene forteller deg. Og du er ærlig om det du ikke vet – kanskje du ikke fant nok kilder til å si noe sikkert om hvordan elevene selv opplevde endringene.`
    ],
    marker: 'Slutt på del 3.'
  },
  // section4 → quiz4 marker
  {
    texts: [
      `## Muntlige kilder – levende historie

Noen av de mest fascinerende kildene er de som lever og puster. Muntlige kilder – intervjuer med mennesker som har opplevd historien selv – gir oss noe skriftlige kilder sjelden kan: følelser, stemninger, personlige opplevelser.

Tenk på bestemoren din som forteller om hvordan det var å vokse opp etter krigen. Hun kan beskrive lukten av nybakt brød da rasjoneringen tok slutt, lyden av kirkeklokkene på frigjøringsdagen, redselen hun kjente da faren ikke kom hjem fra sjøen. Ingen protokoll eller statistikk kan fange dette.

Men muntlige kilder har også klare svakheter. Hukommelsen er upålitelig – vi glemmer, vi blander sammen hendelser, og vi omformer minnene våre i lys av det som har skjedd etterpå. En bestefar som forteller om krigen i 2024 husker den annerledes enn han ville gjort i 1950. Dessuten kan informanten ha motiver for å fremstille seg selv eller sin gruppe i et godt lys.

Betyr det at muntlige kilder er verdiløse? Absolutt ikke. Men de må brukes kritisk, akkurat som alle andre kilder. Ideelt sett kombinerer du muntlige kilder med skriftlige og materielle kilder – da får du et rikere og mer nyansert bilde av fortiden.`
    ],
    marker: 'Slutt på del 4.'
  },
  // section5 + summary → quiz5 marker + end
  {
    texts: [
      `## Du er også en historiker

Her er det fine med historisk metode: Den er ikke bare for professorer på universitetet. Hver gang du søker opp noe på nettet og vurderer om informasjonen er til å stole på, bruker du kildekritikk. Hver gang du spør «hvem sier dette, og hvorfor?», tenker du som en historiker.

Neste gang du ser en påstand på sosiale medier, prøv dette: Spør deg selv hvem som står bak, hva hensikten kan være, når det ble skrevet, og om andre kilder sier det samme. Du har nettopp gjennomført en kildekritisk analyse – på under ett minutt.

Historisk metode handler ikke bare om fortiden. Det handler om å tenke kritisk – en ferdighet du trenger hver eneste dag i en verden full av informasjon, desinformasjon og konkurrerende fortellinger.`
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

Historisk forskning handler om å stille gode spørsmål og systematisk lete etter svar. En presis problemstilling er utgangspunktet for alt.

Nøkkelbegreper du nå kjenner:
Problemstilling: Et presist, avgrenset spørsmål som styrer undersøkelsen.
Kildeutvalg: Å velge ut de kildene som er mest relevante.
Muntlige kilder: Intervjuer med tidsvitner – verdifulle, men må brukes kritisk.
Historisk undersøkelse: Fra problemstilling via kildesøk og analyse til konklusjon.

Stegene i en historisk undersøkelse:
Formulere problemstilling.
Finne relevante kilder.
Analysere kildene kritisk.
Tolke og sammenstille.
Presentere funn og konklusjon.

Husk: En god problemstilling er avgrenset, åpen og undersøkbar. Og historisk metode er ikke bare for historikere – det er kritisk tenkning som du bruker hver dag.`
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
  const tmpDir = '/tmp/tts-historie-2-1';

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

    // Parse whisper output to find "spennende"
    const jsonFile = path.join(whisperOut, `chunk${i + 1}.json`);
    const whisperData = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

    let introEnd = 6.0; // default
    for (const seg of whisperData.segments) {
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
  const masterFile = path.join(outputDir, '_master', 'historie-2-1-narrativ-full-master.mp3');

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
