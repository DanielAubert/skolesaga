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

// Text content extracted from CHAPTER_HISTORIE_2_6_NARRATIV
const sections = [
  // intro + section1 → quiz1 marker
  {
    texts: [
      `## Stemmen som våpen og verktøy

Forestill deg en rettssal i Athen for 2400 år siden. En mann står foran flere hundre borgere og kjemper for livet sitt. Han har ingen advokat, ingen PowerPoint, ingen skriftlige bevis å dele ut. Alt han har, er stemmen sin og evnen til å overbevise. Mannen heter Sokrates, og selv om han tapte saken sin den dagen, har ordene hans levd videre i årtusener.

I historiefaget er muntlige ferdigheter noe av det viktigste du lærer. Det hjelper lite å ha gjort grundig forskning hvis du ikke klarer å formidle det du har funnet. Og i en tid der debatt, diskusjon og meningsutveksling preger hverdagen vår – i klasserommet, i sosiale medier, i politikken – er evnen til å argumentere klart og lytte kritisk en uvurderlig ferdighet.

Dette kapittelet handler om tre ting: å holde gode presentasjoner, å delta i debatter og diskusjoner, og å lytte kritisk til andre. Alle disse ferdighetene bygger på noe de gamle grekerne kalte retorikk – kunsten å overbevise.`,

      `## Retorikk – de tre overbevisningskunstene

De gamle grekerne identifiserte tre måter å overbevise et publikum på, og disse er like aktuelle i dag som for to tusen år siden.

Den første kalles etos – troverdighet. Hvis du skal snakke om den industrielle revolusjon, må publikum tro at du vet hva du snakker om. Etos handler om å vise at du har satt deg inn i stoffet, at du bruker pålitelige kilder, og at du fremstår som seriøs og forberedt. En historiker som refererer til konkrete kilder og forskning har sterkere etos enn en som bare sier «alle vet jo at...».

Den andre er patos – følelser. Selv det tørreste historiske emnet kan bli levende hvis du klarer å berøre publikum. Fortell om enkeltmennesker som ble rammet. Bruk konkrete detaljer. I stedet for å si «mange døde under svartedauden», kan du si «i Bergen døde så mange at det ikke var nok folk igjen til å begrave de døde». Patos gjør at publikum bryr seg om det du forteller.

Den tredje er logos – logikk og fornuft. Dette er selve argumentasjonen din: bevisene du legger fram, resonnementene du bygger opp, de logiske slutningene du trekker. I historiefaget er logos kanskje det viktigste – du må kunne underbygge påstandene dine med kilder og fakta.

En god muntlig framstilling i historie balanserer alle tre. Du trenger troverdighet (etos) for at folk skal lytte, du trenger følelser (patos) for at de skal bry seg, og du trenger logikk (logos) for at argumentene dine skal holde.`,
    ],
    marker: 'Slutt på del 1.'
  },
  // section2 → quiz2 marker
  {
    texts: [
      `## Å bygge en historisk presentasjon

La oss si at du skal holde en ti minutters presentasjon om den industrielle revolusjon. Hvordan gjør du det uten å bare ramse opp årstall og fakta?

Åpningen er avgjørende – her vinner eller taper du publikums oppmerksomhet. Start med noe konkret og levende. I stedet for «Den industrielle revolusjon startet i England på 1700-tallet», prøv: «I 1771 var Sarah Metyard tolv år gammel. Hver morgen klokken fem sto hun opp og gikk til bomullsfabrikken der hun jobbet fjorten timer om dagen, seks dager i uken.» Plutselig er vi inne i historien.

Hoveddelen er der du legger fram innholdet ditt. Et godt tips er å organisere stoffet i tre klare deler med en rød tråd – for eksempel årsaker, hendelsesforløp og konsekvenser. Bruk konkrete eksempler og kilder for å underbygge poengene. Si gjerne «her har vi en kilde som viser...» eller «historikerne er uenige om dette – noen mener X, mens andre peker på Y». Det viser at du tenker som en historiker, ikke bare gjenforteller.

Avslutningen skal binde det hele sammen. Kom tilbake til åpningen din – hva skjedde med Sarah? Trekk linjene til vår egen tid: Finnes det barnearbeid i dag? Hva lærte verden av den industrielle revolusjon? En god avslutning gir publikum noe å tenke på etter at du har satt deg ned.

Praktisk sett bør du øve presentasjonen høyt minst to ganger. Ha stikkord på kort, ikke et ferdigskrevet manus du leser opp. Hold øyekontakt med publikum. Varier stemmen – senk tempoet når noe er viktig, bruk pauser for effekt. Og husk: det er helt normalt å være nervøs. De beste talerne i verden er også nervøse – de har bare lært seg å bruke nervøsiteten som drivkraft.`,
    ],
    marker: 'Slutt på del 2.'
  },
  // section3 → quiz3 marker
  {
    texts: [
      `## Debatt og diskusjon – å bryne argumentene

Hvis presentasjoner handler om å formidle, handler debatt om å bryne seg – å teste argumentene sine mot andres. I historiefaget er dette ekstra viktig fordi historikere sjelden er enige om alt. Var den industrielle revolusjon en fremskrittshistorie eller en katastrofe for arbeiderklassen? Var unionsoppløsningen i 1905 uunngåelig? Spørsmål som dette har ikke ett riktig svar, og det er nettopp derfor debatt er så verdifullt.

En god historisk debatt følger noen grunnregler. Du skal lytte til motparten og svare på det de faktisk sier, ikke på noe du finner på selv. Du skal bruke kilder og argumenter, ikke personangrep. Og du skal være villig til å endre mening hvis motparten har bedre argumenter enn deg.

Det finnes flere debatteknikker som er spesielt nyttige i historie. Tilbakevisning betyr å vise at motpartens argument bygger på feil fakta, urimelige forutsetninger eller logiske brister. Nyansering betyr å si «ja, men det er mer komplisert enn som så» – og deretter vise kompleksiteten. Kontekstualisering betyr å plassere et argument i sin historiske sammenheng: «Det er lett å si det i dag, men husk at folk i 1814 ikke visste hva vi vet nå.» Og kildebruk betyr å underbygge argumentene dine med konkrete historiske kilder, ikke bare meninger.

Diskusjoner i historiefaget kan ta ulike former. I en paneldebatt forsvarer flere deltakere ulike synspunkter for et publikum. I en sokratisk samtale stiller man hverandre spørsmål for å grave dypere i et emne, uten nødvendigvis å argumentere for en bestemt posisjon. I et seminar diskuterer alle rundt bordet, og målet er ikke å vinne, men å forstå bedre.`,
    ],
    marker: 'Slutt på del 3.'
  },
  // section4 → quiz4 marker
  {
    texts: [
      `## Historisk empati – å forstå uten å unnskylde

En av de mest utfordrende muntlige ferdighetene i historiefaget er historisk empati – evnen til å sette seg inn i hvordan mennesker i fortiden tenkte og følte, uten å dømme dem ut fra vår tids verdier.

Dette er vanskeligere enn det høres ut. Når vi leser om at kvinner ikke hadde stemmerett før 1913, er det lett å tenke: «Hva var galt med folk?» Men det er det vi kaller presentisme – å bruke nåtidens verdier og kunnskap til å dømme fortiden. En historiker prøver i stedet å forstå hvorfor folk tenkte som de gjorde. Hvilke verdier, erfaringer og kunnskaper formet deres syn? Det betyr ikke at vi unnskylder urettferdighet – det betyr at vi prøver å forstå den.

En kraftig metode for å trene historisk empati er rollespill. Forestill deg at du er en norsk bonde i 1814 som nettopp har hørt at det skal velges representanter til en riksforsamling på Eidsvoll. Hva tenker du? Du har kanskje aldri reist lenger enn til nabobygda. Du vet lite om grunnlover og politikk. Men du vet at du er lei av at danske embetsmenn bestemmer over deg, og nå hører du rykter om at Sverige vil overta. Hva gjør du?

Eller forestill deg at du er en suffragette i 1910 som kjemper for kvinners stemmerett. Du blir latterliggjort i avisene, familien din synes du bringer skam over dem, og politiet kan arrestere deg for å demonstrere. Hvorfor fortsetter du å kjempe? Hva driver deg?

Eller tenk deg at du er en samisk aktivist under Alta-aksjonen i 1981. Myndighetene vil demme opp elva som har gitt folket ditt levebrød i generasjoner. Du lenker deg fast i kulda. Hvorfor?

Slike rollespill tvinger deg til å forlate ditt eget perspektiv og virkelig prøve å forstå fortiden innenfra. Det er ubehagelig, utfordrende – og utrolig lærerikt.`,
    ],
    marker: 'Slutt på del 4.'
  },
  // section5 → quiz5 marker
  {
    texts: [
      `## Lytting og kritisk vurdering – den undervurderte ferdigheten

Vi snakker mye om å snakke godt, men den kanskje viktigste muntlige ferdigheten er å lytte godt. I historiefaget betyr det å lytte kritisk – ikke bare høre ordene, men vurdere argumentene, kildegrunnlaget og logikken bak det som blir sagt.

Når du hører en historisk framstilling – enten det er en medelev som presenterer, en dokumentar du ser, eller en politisk tale som bruker historie – bør du stille deg selv noen kritiske spørsmål: Hvilke kilder bygger framstillingen på? Er det noe som er utelatt eller forenklet? Hvilke perspektiver mangler? Er det samsvar mellom påstander og bevis? Brukes patos for å dekke over mangel på logos?

Å gi konstruktiv tilbakemelding er en del av dette. Det betyr å peke på både styrker og svakheter i en framstilling – ikke for å rive ned, men for å bygge opp. «Du hadde et veldig godt eksempel om fabrikkarbeiderne, men jeg savnet kilder som viste motpartens syn» er konstruktivt. «Det var dårlig» er det ikke.

Alt dette er ferdigheter du trenger til muntlig eksamen i historie. Der skal du vise at du kan formidle historisk kunnskap, reflektere over kilder og metoder, og drøfte historiske spørsmål. Det beste rådet er å øve regelmessig: Hold korte presentasjoner for deg selv eller en venn, diskuter historiske spørsmål med medelever, og vurder framstillinger du møter i media kritisk. Muntlige ferdigheter er som en muskel – de blir sterkere jo mer du bruker dem.`,
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

Muntlige ferdigheter er en bærebjelke i historiefaget. Å kunne formidle, argumentere og lytte kritisk gjør deg til en bedre historiker – og en bedre samfunnsborger.

Nøkkelbegreper du nå kjenner:
Retorikk: Kunsten å overbevise, med de tre appellformene etos (troverdighet), patos (følelser) og logos (logikk)
Presentasjonsstruktur: Åpning som fanger oppmerksomheten, hoveddel med rød tråd og kilder, avslutning som gir perspektiv
Debatteknikker: Tilbakevisning, nyansering, kontekstualisering og kildebruk
Diskusjonsformer: Paneldebatt, sokratisk samtale og seminar
Historisk empati: Å forstå fortiden innenfra, uten å dømme med nåtidens verdier
Presentisme: Å anvende nåtidens verdier og kunnskap på fortiden
Kritisk lytting: Å vurdere kilder, logikk og utelatte perspektiver i en framstilling
Konstruktiv tilbakemelding: Å peke på styrker og forbedringsområder, ikke bare kritisere

Det viktigste du tar med deg:
Muntlige ferdigheter er som en muskel – de styrkes gjennom øvelse. Enten du holder en presentasjon, deltar i debatt eller lytter til en dokumentar, bruker du de samme verktøyene: retorikk, kildekritikk og historisk empati. Og på muntlig eksamen er det nettopp disse ferdighetene du blir vurdert på.`,
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
  const tmpDir = '/tmp/tts-historie-2-6';

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

    // Parse whisper output to find "spennende" or "fortelle" - ONLY in first 5 segments
    const jsonFile = path.join(whisperOut, `chunk${i + 1}.json`);
    const whisperData = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

    let introEnd = 6.0; // default
    const maxSegmentsToCheck = Math.min(5, whisperData.segments.length);
    for (let s = 0; s < maxSegmentsToCheck; s++) {
      const seg = whisperData.segments[s];
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
  const masterFile = path.join(masterDir, 'historie-2-6-narrativ-full-master.mp3');

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
