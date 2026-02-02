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

// Text content extracted from CHAPTER_HISTORIE_2_4_NARRATIV
const sections = [
  // intro → quiz1 marker
  {
    texts: [
      `## Steinen som husker

Gå ut av huset ditt. Gå til torget, til parken, til den lille plassen foran kommunehuset. Sjansen er stor for at du finner en statue, en minneplate, eller i det minste et gatenavn som peker bakover i tid. Kanskje er det en bauta over falne fra andre verdenskrig. Kanskje en statue av en lokal dikter. Kanskje bare et skilt som forteller at «her lå det gamle meieriet».

Stopp opp og tenk: Hvem bestemte at akkurat dette skulle huskes? Hvorfor står det en statue av denne personen og ikke av noen andre? Og hvem er det ingen minnesmerker for?

Disse spørsmålene fører oss rett inn i noe av det mest fascinerende i historiefaget: minnekultur – måten samfunn husker og markerer fortiden på. For samfunn husker ikke tilfeldig. De velger. De prioriterer. Og de glemmer – noen ganger med vilje.

Tenk på det slik: Hukommelsen din er personlig. Du husker bursdagen din, den gangen du scoret det avgjørende målet, den vanskelige samtalen med en venn. Men samfunn har også en slags kollektiv hukommelse. Den finnes i monumenter, i minnedager, i museer, i fortellingene vi forteller om oss selv. Familier husker sine forfedre. Lokalsamfunn husker sin historie. Nasjoner har sine helter og hendelser. Menneskeheten har globale minner, som Holocaust. Minnekulturen finnes på alle disse nivåene – og å utforske den handler om å forstå hvorfor vi husker det vi husker, og hva det sier om oss i dag.`,
    ],
    marker: 'Slutt på del 1.'
  },
  // section1 → quiz2 marker
  {
    texts: [
      `## Monumenter, dager og fortellinger

Minnekulturen viser seg i mange former, og det er verdt å se nærmere på de tre viktigste.

For det første har vi de fysiske minnesmerkene: statuer, monumenter, gravsteder, historiske bygninger og museer. De er bokstavelig talt støpt i stein eller bronse – varige, synlige, umulige å ignorere når du passerer dem. Tenk på Vigelandsparken i Oslo, på Nidarosdomen i Trondheim, på de tusenvis av krigsminnesmerker som finnes i nesten hver eneste norsk bygd.

For det andre har vi de tidsmessige markeringene: dager som er ladet med mening. 17. mai er den mest åpenbare – hele nasjonen stopper opp for å feire Grunnloven fra 1814. Men tenk også på 8. mai, frigjøringsdagen fra 1945, da krigen tok slutt. Og Grunnlovsjubileet i 2014, da Norge markerte 200 år med konstitusjon. Disse dagene er som tidsanker: De minner oss om hvem vi er som fellesskap.

For det tredje har vi de narrative formene: nasjonale fortellinger, lokale sagn og historier, lærebøker og offisiell historieskrivning. Disse er kanskje de mektigste formene for minnekultur, fordi de former hvordan vi tenker om fortiden – ikke bare hva vi ser eller feirer.

Men hvem bestemmer alt dette? Hvem former minnekulturen? Svaret er sammensatt: Staten spiller en avgjørende rolle gjennom læreplaner, offisielle minnedager og statlige monumenter. Men også kirken, organisasjoner, medier og enkeltpersoner er med på å definere hva som huskes og hvordan. Minnekultur er aldri nøytral. Den er alltid et resultat av valg – og bak valgene ligger makt.`,
    ],
    marker: 'Slutt på del 2.'
  },
  // section2 → quiz3 marker
  {
    texts: [
      `## To nivåer av minne

Forestill deg at det er 8. mai. I Oslo holder statsministeren en tale om frigjøringen. På Akershus festning legges det ned kranser. TV-kanalene viser dokumentarer om motstandsbevegelsen, om sabotasjeaksjoner og heltemodige nordmenn som trosset okkupasjonsmakten.

Men reis nå til Hammerfest, lengst nord i Norge. Der handler 8. mai om noe annet. Der handler det om at hele byen ble brent ned til grunnen av den tyske tilbaketrekningen i 1944. Over 50 000 mennesker ble tvangsevakuert fra Finnmark. Folk mistet alt – hus, fjøs, eiendeler, minner. Den nasjonale fortellingen om heltemodig motstandskamp treffer annerledes når ditt lokalsamfunn først og fremst husker ødeleggelse og tap.

Dette viser spenningen mellom nasjonalt og lokalt minne. Det nasjonale minnet er den felles historieforståelsen som binder nasjonen sammen: grunnleggende myter som 1814 (Grunnloven), 1905 (unionsoppløsningen) og 1945 (frigjøringen). Nasjonale helter som Fridtjof Nansen og Camilla Collett. Traumer og seire som hele folket deler – eller i det minste er ment å dele.

Det lokale minnet er noe annet. Det er stedsspesifikke historier og tradisjoner: lokale helter og hendelser, industri- og arbeidshistorie, naturkatastrofer og ulykker, stedsnavn og lokale tradisjoner. I Odda handler lokalhistorien om smelteverket. I Lofoten om fisket. I Røros om gruvene. Disse historiene er like viktige for dem som lever der, men de passer ikke alltid inn i den store nasjonale fortellingen.

Og her oppstår spenninger. Lokal historie kan utfordre eller nyansere nasjonal historie. Norsk krigshistorie ser annerledes ut fra et samisk perspektiv enn fra Østlandet. Bygder som hadde mange NS-medlemmer har vanskeligere minner enn steder som var kjent for aktiv motstand.`,
    ],
    marker: 'Slutt på del 3.'
  },
  // section3 → quiz4 marker
  {
    texts: [
      `## De glemte stemmene

Det finnes en enda dypere spenning i minnekulturen: forholdet mellom de som blir husket og de som blir glemt. For gjennom det meste av norsk historie har det vært menn fra majoritetsbefolkningen og den sosiale eliten som har bestemt hva som er «viktig» historie. Konger og generaler fikk statuer. Politikere og forfattere fikk gater oppkalt etter seg. Men hva med de andre?

Samenes historie ble lenge behandlet som perifer – som noe som foregikk i utkanten, bokstavelig og billedlig. Fornorskningspolitikken, der samiske barn ble tvunget til å snakke norsk og gi opp sin egen kultur, var i generasjoner en skam som ble tiet i hjel. Først med Sannhets- og forsoningskommisjonen har dette blitt en del av den nasjonale fortellingen.

Romanifolket (taterne) ble utsatt for tvangssterilisering, barnehjemsinternering og systematisk diskriminering. Denne historien var nesten usynlig i norsk minnekultur frem til ganske nylig.

Kvinners historie ble lenge sett som «privat» og dermed uviktig. Kvinner som drev gårder mens mennene var på havet, kvinner som sloss for stemmerett, kvinner som holdt samfunnet gående under krigen – deres innsats ble sjelden foreviget i bronse.

Arbeiderklassens historie ble heller ikke alltid sett som verdig et monument. Fabrikkarbeiderne, tjenestepikene, fiskerne – de som bokstavelig talt bygde landet – forble lenge usynlige i den offisielle minnekulturen.

Men dette har endret seg, langsomt. Samisk kulturarv er nå beskyttet. Kvinnehistorie er del av læreplanen. Arbeiderhistorie har fått sine museer. Det tar tid å endre etablerte narrativer, men det skjer – og det viser at minnekultur er levende, ikke statisk.`,
    ],
    marker: 'Slutt på del 4.'
  },
  // section4 → quiz5 marker
  {
    texts: [
      `## Når statuene faller

I 2020 eksploderte en global debatt som satte minnekultur på dagsordenen som aldri før. Etter drapet på George Floyd i USA veltet demonstranter statuer av sørstatsgeneraler fra den amerikanske borgerkrigen – menn som hadde kjempet for å beholde slaveriet. I Belgia ble statuer av kong Leopold II – mannen som styrte Kongo som en personlig koloni med millioner av døde – overmalt og revet ned. Til og med i Norge oppsto debatt: Bør statuen av Winston Churchill utenfor Solli plass i Oslo stå der, når han som statsminister bar ansvaret for politikken som førte til hungersnøden i Bengal i 1943, der millioner døde?

Denne debatten avslører noe viktig om minnekultur: Den er ikke nøytral. Den er politisk. Hva vi minnes og hvordan, sier mye om maktforhold og verdier i samtiden.

De som vil fjerne statuene argumenterer at offentlig rom ikke bør hylle personer som begikk overgrep, og at statuene representerer undertrykkelse for mange mennesker. De som vil beholde dem svarer at vi ikke kan bedømme fortiden med dagens standarder, at statuene er historiske dokumenter i seg selv, og at å fjerne dem er historieløst.

Og så finnes det mellomløsningene: kontekstualisering med informasjonsskilt som forklarer hele bildet, flytte statuer til museum der de kan vises med historisk kontekst, eller sette opp nye statuer som motvekt – slik at monumentlandskapet gjenspeiler flere stemmer.

Uansett hva du mener, tvinger debatten oss til å skille mellom to ting: å huske (bevissthet om fortiden) og å hedre (feire og opphøye). En statue på et torg er en æresbevisning. Et museum kan fortelle den samme historien uten å hylle.`,
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

Samfunn husker ikke tilfeldig. Minnekultur er resultatet av valg – og bak valgene ligger makt. Gjennom monumenter, minnedager og fortellinger former vi en felles forståelse av hvem vi er.

Nøkkelbegreper du nå kjenner:
Minnekultur: Måten et samfunn husker og markerer fortiden – gjennom fysiske minnesmerker, tidsmessige markeringer (17. mai, 8. mai) og narrative former.
Nasjonalt minne: Felles historieforståelse som binder en nasjon sammen – grunnleggende myter (1814, 1905, 1945) og nasjonale helter.
Lokalt minne: Stedsspesifikke historier og tradisjoner som kan utfordre eller nyansere den nasjonale fortellingen.
Marginaliserte minner: Historien til grupper som samer, romanifolk, kvinner og arbeiderklassen – lenge undertrykt, nå gradvis synliggjort.

Viktige innsikter:
Hvem som former minnekulturen (staten, kirken, medier, organisasjoner) påvirker hva som huskes og glemmes.
Lokal og nasjonal historie kan stå i spenning til hverandre – som krigen sett fra Finnmark mot Østlandet.
Statuedebatten viser at minnekultur er politisk, og at vi må skille mellom å huske og å hedre.
Minnekultur er levende og i endring – nye stemmer og perspektiver får plass over tid.

Husk: Neste gang du passerer et minnesmerke, stopp og spør: Hvem bestemte at dette skulle stå her? Og hvem er det som mangler?`,
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
  const tmpDir = '/tmp/tts-historie-2-4';

  // Create dirs
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  if (!fs.existsSync(path.join(outputDir, '_master'))) fs.mkdirSync(path.join(outputDir, '_master'), { recursive: true });

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
    const maxSegments = Math.min(5, whisperData.segments.length);
    for (let j = 0; j < maxSegments; j++) {
      const seg = whisperData.segments[j];
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
  const masterFile = path.join(masterDir, 'historie-2-4-narrativ-full-master.mp3');

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
