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

// Text content extracted from CHAPTER_HISTORIE_2_2_NARRATIV
const sections = [
  // intro + section1 → quiz1 marker
  {
    texts: [
      `## Historien har mange stemmer

Tenk deg at du står på en fotballbane. Kampen er over, og laget ditt har vunnet 2-1 etter et kontroversielt straffespark. Du er lykkelig. Men motstanderlagets supportere er rasende – de mener dommeren tok feil. Begge lag opplevde akkurat den samme kampen. Likevel vil beretningene bli helt forskjellige.

Slik er det med historie også. En og samme hendelse kan fortelles på radikalt ulike måter, avhengig av hvem som forteller, fra hvilket ståsted de ser, og hva de ønsker å fremheve. Det handler ikke nødvendigvis om at noen lyver – det handler om at ulike mennesker ser forskjellige ting, vektlegger forskjellige detaljer, og tolker hendelser ut fra sin egen bakgrunn og sine egne erfaringer.

Historien har mange stemmer, og ingen av dem forteller hele sannheten alene. Å forstå dette er kanskje den viktigste innsikten i historiefaget. For hvis vi bare lytter til én stemme, får vi bare én del av bildet – og vi risikerer å tro at denne ene delen er hele bildet.`,

      `## Perspektiv og ståsted

Historikere snakker ofte om perspektiv – altså fra hvilken synsvinkel en historisk beretning er skrevet. Vi kan se på fortiden fra mange ulike ståsteder, og hvert av dem gir oss forskjellig innsikt.

Ovenfra-perspektivet ser historien fra makthavernes synsvinkel: konger, regjeringer, generaler. Denne tilnærmingen har dominert historieskriving i århundrer. Vi hører om store slag, traktater og politiske beslutninger. Det er nyttig – men det utelater de fleste menneskers opplevelser.

Nedenfra-perspektivet snur dette på hodet. Her ser vi historien fra vanlige menneskers ståsted: bønder, arbeidere, kvinner, undertrykte grupper. Hvordan opplevde en fattig fisker i Lofoten at Norge ble uavhengig i 1905? Det vet vi langt mindre om enn hva politikerne i Kristiania tenkte.

Innenfra-perspektivet prøver å forstå fortiden på dens egne premisser. Hva tenkte og følte menneskene selv? Hva var selvsagt for dem? Hvordan oppfattet de sin egen verden?

Utenfra-perspektivet ser på fortiden med vårt moderne blikk. Vi kan peke på sammenhenger og konsekvenser som menneskene selv ikke så, men vi risikerer også å bedømme fortiden etter nåtidens standarder.

Disse fire perspektivene er sentrale i det vi kaller historiografi – studiet av hvordan historie blir skrevet. Historiografiske retninger som sosialhistorie, kulturhistorie, kjønnshistorie og postkolonial historie representerer ulike måter å velge perspektiv på.`
    ],
    marker: 'Slutt på del 1.'
  },
  // section2 → quiz2 marker
  {
    texts: [
      `## Hvorfor fremstillinger er forskjellige

Når to historikere skriver om den samme hendelsen og likevel produserer vidt forskjellige tekster, skyldes det sjelden bevisst løgn. Det skyldes en rekke valg – bevisste og ubevisste – som former den endelige fremstillingen.

Utvalg av fakta er det første og kanskje viktigste valget. Enhver historisk hendelse inneholder uendelig mange detaljer. Ingen fremstilling kan ta med alt, så historikeren må velge: Hvilke fakta er viktige? Hvilke kan utelates? Disse valgene styres av perspektivet og problemstillingen – og de former bildet som tegnes.

Ordvalg har enorm makt. Var Colombus' ankomst til Amerika en «oppdagelse» eller en «invasjon»? Det første ordet antyder at noe nytt og positivt ble funnet. Det andre antyder vold og overgrep. Begge ordene beskriver den samme hendelsen – men de sender helt forskjellige signaler om hvem vi sympatiserer med.

Årsaksforklaringer varierer også. Hvorfor falt Romerriket? Var det barbarene? Intern korrupsjon? Kristendommens spredning? Økonomisk krise? Militær overstrekning? Ulike historikere vektlegger ulike årsaker, og dette former hele fortellingen.

Kontekst – altså hva som trekkes inn som bakgrunn – kan endre bildet fullstendig. En hendelse som virker grusom isolert sett, kan se annerledes ut i sin historiske kontekst. Eller omvendt: noe som virker uskyldig, kan vise seg å ha dype røtter i undertrykkelse.`
    ],
    marker: 'Slutt på del 2.'
  },
  // section3 → quiz3 marker
  {
    texts: [
      `## Vikingene i ulike fremstillinger

Et fascinerende eksempel på hvordan perspektiv former historien, er fremstillingen av vikingene. De samme menneskene har blitt beskrevet på radikalt forskjellige måter gjennom historien – og forskjellene forteller oss like mye om dem som skriver som om vikingene selv.

En engelsk munk på 800-tallet, som opplevde vikingangrep på sitt kloster, skrev med rystende hender om «hedningenes raseri». For ham var vikingene Guds straff over syndige kristne – brutale plyndrere som kom fra havet for å ødelegge alt som var hellig. Han la vekt på vold, ødeleggelse og frykt. Hans perspektiv var innenfra: han var et offer for vikingtokene og skrev fra sin egen redsel og fortvilelse.

Spol fremover tusen år. En norsk lærebokforfatter på 1900-tallet tegner et helt annet bilde. Her er vikingene modige sjøfarere, dyktige handelsmenn og dristige oppdagere som nådde helt til Amerika lenge før Columbus. De var nasjonsbyggere som grunnla byer og etablerte rettssystemer. Volden tones ned; eventyrlyst og dyktighet fremheves. Perspektivet er et annet: forfatteren skriver som en del av et nasjonalt prosjekt der vikingene representerer norsk styrke og stolthet.

Hvem har rett? Begge – og ingen. Den engelske munken beskrev reelle opplevelser av vold og plyndring. Den norske forfatteren pekte på reelle prestasjoner innen sjøfart og handel. Men begge ga et ufullstendig bilde, farget av sitt eget ståsted. Moderne forskning forsøker å kombinere begge perspektivene og legge til flere – for eksempel urfolksperspektiver fra områdene vikingene «oppdaget».`
    ],
    marker: 'Slutt på del 3.'
  },
  // section4 → quiz4 marker
  {
    texts: [
      `## Vinnernes og tapernes historie

Det finnes et velkjent uttrykk: «Historien skrives av seierherrene.» Det er en forenkling, men det peker på noe viktig. De som har makt, har ofte også makten til å forme fortellingen om fortiden.

Tenk på kolonialismen. I europeiske lærebøker ble kolonisering lenge fremstilt som sivilisering – europeerne «brakte» kultur, utdanning og fremskritt til «primitive» folkeslag. Men fra de kolonisertes perspektiv var det en helt annen historie: undertrykkelse, tvangsarbeid, kulturell ødeleggelse og tap av frihet. I dag er det stadig flere historikere som skriver kolonialhistorie fra de kolonisertes perspektiv, og bildet som tegnes er dramatisk forskjellig.

Eller ta den amerikanske borgerkrigen. I sørstatene ble den lenge fremstilt som en «tapt sak» – en edel kamp for staters rettigheter. Men for millioner av afroamerikanere handlet krigen om noe langt mer grunnleggende: frihet fra slaveri. Perspektivet du velger, bestemmer hvilken historie som fortelles.

Dette betyr ikke at alle perspektiver er like gyldige i enhver sammenheng. En historiefremstilling som benekter Holocaust, er ikke bare «et annet perspektiv» – den strider mot et overveldende kildemateriale. Kildekritikk og faglige standarder setter grenser for hva som kan regnes som legitim historieskriving. Men innenfor disse grensene finnes det rom for mange stemmer og mange perspektiver, og vi blir klokere av å lytte til flere av dem.`
    ],
    marker: 'Slutt på del 4.'
  },
  // section5 → quiz5 marker
  {
    texts: [
      `## Hvorfor dette angår deg

Du møter ulike historiske fremstillinger hele tiden – kanskje uten å tenke over det. Nyhetsartikler, dokumentarer, filmer, politiske taler, sosiale medier: alle presenterer sin versjon av fortiden. Og i en tid med «fake news» og polarisert debatt er evnen til å gjennomskue perspektiver viktigere enn noen gang.

Neste gang du leser om en historisk hendelse, still deg disse spørsmålene: Hvem forteller denne historien? Hvilket perspektiv ser den fra – ovenfra eller nedenfra, innenfra eller utenfra? Hvilke fakta er valgt ut, og hvilke kan være utelatt? Hvordan ville historien sett ut fra den andre sidens perspektiv?

La oss ta et dagsaktuelt eksempel. Konflikter rundt om i verden beskrives svært forskjellig avhengig av hvilken nyhetskanal du følger. Én kanal kan fremstille den ene parten som forsvarer, en annen som aggressor – basert på de samme hendelsene. Å kunne identifisere perspektivet bak fremstillingen gjør deg til en bedre og mer kritisk leser.

Poenget er ikke at du skal bli kynisk og tro at alt er løgn. Poenget er at du skal bli nysgjerrig: «Hvem sin stemme hører jeg? Og hvem sin stemme mangler?» Historien er rikest når vi lytter til mange stemmer – og fattigst når vi nøyer oss med bare én.`
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

Historien har mange stemmer, og alle historiske fremstillinger er formet av perspektiv. Det betyr ikke at alt er like gyldig – faglige standarder og kildekritikk setter grenser – men det betyr at vi alltid bør spørre: Fra hvis ståsted er denne historien fortalt?

Nøkkelbegreper du nå kjenner:
Perspektiv: Synsvinkelen en historisk beretning er skrevet fra
Ovenfra/nedenfra: Makthavernes vs. vanlige menneskers perspektiv
Innenfra/utenfra: Fortidens egne premisser vs. vårt moderne blikk
Historiografi: Studiet av hvordan historie blir skrevet
Utvalg, ordvalg, årsaksforklaringer, kontekst: Fire måter fremstillinger formes på

Det viktigste du tar med deg:
Ingen historisk fremstilling er helt nøytral. Men det gjør ikke historien verdiløs – det gjør den rikere. Ved å sammenligne ulike fremstillinger og identifisere perspektivene bak dem, kommer vi nærmere en helhetlig forståelse av fortiden. Spør alltid: Hvem sin stemme hører jeg, og hvem sin stemme mangler?`
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
  const tmpDir = '/tmp/tts-historie-2-2';

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
  const masterFile = path.join(masterDir, 'historie-2-2-narrativ-full-master.mp3');

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
