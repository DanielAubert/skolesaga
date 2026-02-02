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

// Text content extracted from CHAPTER_HISTORIE_2_5_NARRATIV
const sections = [
  // intro + section1 → quiz1 marker
  {
    texts: [
      `## Historikeren som forfatter

Tenk deg at du har gravd deg gjennom støvete arkiver, analysert gamle brev, sammenlignet motstridende kilder og endelig funnet svaret på et spørsmål som har plaget deg. Du vet noe viktig om fortiden. Men så kommer den store utfordringen: Hvordan formidler du det du har funnet?

Skriving er en av de viktigste grunnleggende ferdighetene i historiefaget. Det er gjennom skriftlige tekster at historikere deler sine funn, argumenterer for sine tolkninger og overbeviser andre om at konklusjonene deres holder vann. Uten evnen til å skrive godt, blir selv den mest briljante forskningen liggende uoppdaget.

Men det å skrive i historie er ikke det samme som å skrive en novelle eller et dikt. Det finnes bestemte krav, sjangre og konvensjoner du må kjenne til. I dette kapittelet skal vi utforske akkurat dette – fra den grunnleggende oppbyggingen av en fagtekst til kunsten å drøfte, argumentere og bruke kilder på en overbevisende måte.`,

      `## Fagteksten i historie – hva kjennetegner den?

En **fagtekst i historie** skiller seg fra andre tekster ved at den bygger på kilder, bruker fagbegreper presist og argumenterer saklig. Du kan ikke bare mene noe i historie – du må begrunne det med belegg fra kildene.

Det finnes flere ulike sjangre innenfor historisk skriving, og det er viktig at du kjenner til de fire hovedtypene:

**Kildeanalyse** er kanskje den mest grunnleggende sjangeren. Her undersøker du en eller flere kilder systematisk: Hvem står bak? Hva er budskapet? Når og hvorfor ble kilden laget? Er den troverdig? Kildeanalysen er historikerens håndverk i praksis.

**Drøfting** handler om å belyse en problemstilling fra flere sider. Du presenterer argumenter for og imot, veier dem opp mot hverandre, og trekker en konklusjon. Drøfting er kanskje den sjangeren du møter oftest på eksamen.

**Sammenligning** innebærer å sette to eller flere fenomener, perioder eller hendelser opp mot hverandre. Hva er likt? Hva er forskjellig? Hvorfor? En god sammenligning krever at du finner meningsfulle kriterier å sammenligne etter.

**Framstilling** er en sammenhengende fortelling om en historisk hendelse, periode eller utvikling. Her forteller du hva som skjedde, men du må også forklare *hvorfor* det skjedde og *hva konsekvensene ble*. En ren oppramsing av fakta er ikke nok – du må vise at du forstår sammenhengene.

Felles for alle disse sjangrene er at de krever god struktur, presis kildebruk og klar argumentasjon.`
    ],
    marker: 'Slutt på del 1.'
  },
  // section2 → quiz2 marker
  {
    texts: [
      `## Oppbygging og struktur – skjelettet i teksten din

Uansett hvilken sjanger du skriver i, følger en god fagtekst i historie en tydelig tredelt struktur: **innledning**, **hoveddel** og **avslutning**.

**Innledningen** er tekstens ansikt utad. Her presenterer du temaet, avgrenser det og gir leseren en klar forventning om hva teksten skal handle om. En god innledning kan starte med en interessant opplysning, et sitat eller en kort kontekstualisering av problemstillingen. Det viktigste er at leseren etter innledningen vet nøyaktig hva teksten skal besvare.

**Hoveddelen** er der det virkelige arbeidet skjer. Her presenterer du argumenter, analyser og drøftinger – alt støttet av kilder. Et avgjørende verktøy i hoveddelen er **temasetninger**. En temasetning er den første setningen i hvert avsnitt, og den forteller leseren hva avsnittet skal handle om. Tenk på temasetninger som veiskilt langs en motorvei – de hjelper leseren å navigere gjennom teksten din.

Her er et eksempel: Hvis du skriver om årsakene til den franske revolusjonen, kan et avsnitt begynne med temasetningen: «En sentral årsak til den franske revolusjonen var den økonomiske krisen som rammet Frankrike på 1780-tallet.» Resten av avsnittet utdyper og belegger denne påstanden.

**Avslutningen** samler trådene. Her oppsummerer du de viktigste funnene og trekker en konklusjon som svarer på problemstillingen. En god avslutning tilfører ikke ny informasjon, men viser at du kan se det store bildet.

Denne strukturen er ikke bare en formalitet – den er et verktøy for klar tenkning. Når du tvinger deg selv til å organisere stoffet i innledning, hoveddel og avslutning, blir du også tvunget til å tenke gjennom hva som faktisk er viktig.`
    ],
    marker: 'Slutt på del 2.'
  },
  // section3 → quiz3 marker
  {
    texts: [
      `## Kildebruk og kildehenvisning – belegget for påstandene dine

I historiefaget kan du ikke bare påstå ting – du må vise hvor du har det fra. God kildebruk er det som skiller en faglig solid tekst fra en meningsytring. Det finnes tre hovedmåter å bruke kilder på i teksten din:

**Direkte sitat** betyr at du gjengir nøyaktig det kilden sier, ord for ord, i anførselstegn. For eksempel: Historikeren Knut Kjeldstadli skriver at «historikere rekonstruerer fortiden med utgangspunkt i sporene som er bevart.» Direkte sitater er nyttige når formuleringen i kilden er spesielt treffende eller viktig.

**Parafrase** betyr at du gjengir innholdet i kilden med dine egne ord. For eksempel: Ifølge Kjeldstadli arbeider historikere med å sette sammen et bilde av fortiden basert på de kildene som har overlevd. Parafrase er den vanligste måten å bruke kilder på, og det viser at du har forstått innholdet.

**Referanse** er den korteste formen – du viser bare til kilden uten å gjengi innholdet detaljert. For eksempel: «Flere historikere har påpekt utfordringene ved denne tilnærmingen (Kjeldstadli 1999, Kaldal 2003).»

Uansett hvilken metode du bruker, må du alltid oppgi kilden. Uten kildehenvisning er påstandene dine bare løse meninger. En **kildeliste** bakerst i teksten din samler alle kildene du har brukt, ordnet alfabetisk. Kildelisten inneholder forfatter, tittel, utgivelsesår og utgiver for bøker, og tilsvarende informasjon for andre kildetyper.

Husk: Å la være å oppgi kilder er ikke bare slurvete – det er juks. I akademisk sammenheng kalles det plagiat, og det tas svært alvorlig.`
    ],
    marker: 'Slutt på del 3.'
  },
  // section4 → quiz4 marker
  {
    texts: [
      `## Argumentasjon og drøfting – PBE-modellen

Nå kommer vi til kjernen i historiefaglig skriving: evnen til å argumentere og drøfte. Det finnes en enkel og effektiv modell som hjelper deg å bygge sterke argumenter – den kalles **PBE-modellen**: **Påstand**, **Begrunnelse**, **Eksempel**.

**Påstand** – Du starter med å si hva du mener. «Den franske revolusjonen var først og fremst et resultat av økonomisk krise.»

**Begrunnelse** – Deretter forklarer du *hvorfor* du mener dette. «Frankrike var på randen av statsbankerott etter kostbare kriger og et skattesystem som rammet de fattigste hardest.»

**Eksempel** – Til slutt gir du et konkret eksempel som belegger argumentet. «Da kong Ludvig XVI kalte inn stenderforsamlingen i mai 1789 for å finne en løsning på den økonomiske krisen, var det første gang på 175 år at forsamlingen ble innkalt – et tydelig tegn på hvor desperat situasjonen var.»

PBE-modellen gir hvert avsnitt en klar logikk: du påstår noe, du forklarer hvorfor, og du beviser det med et eksempel. Slik bygger du en argumentasjon som holder.

Når du drøfter, bruker du PBE-modellen gjentatte ganger – både for argumenter *for* og *imot* en påstand. For å binde drøftingen sammen, bruker du **drøftingsord** som signaliserer ulike perspektiver:

- **For å introdusere et argument**: «For det første», «Et viktig argument er», «På den ene siden»
- **For å nyansere eller motsi**: «På den andre siden», «Imidlertid», «Likevel», «Det kan innvendes at»
- **For å veie argumenter**: «Det sterkeste argumentet er», «Til tross for dette», «Samlet sett»
- **For å konkludere**: «Alt i alt», «På bakgrunn av dette», «Konklusjonen er»

Her er et eksempel på et komplett drøftingsavsnitt om den franske revolusjonen:

*«På den ene siden kan man argumentere for at den franske revolusjonen primært skyldtes økonomiske årsaker. Frankrike var på randen av statsbankerott, og skattebyrden falt urettferdig på tredjestanden. Da brødprisene steg dramatisk i 1788-89, ble misnøyen akutt. På den andre siden er det viktig å påpeke at opplysningstidens ideer også spilte en avgjørende rolle. Tenkere som Voltaire og Rousseau hadde i tiår utfordret eneveldet og standssamfunnet intellektuelt. Uten denne ideologiske grobunnen ville kanskje misnøyen bare ført til brødopprør, ikke til en revolusjon som endret hele samfunnsstrukturen.»*

Legg merke til hvordan avsnittet bruker drøftingsordene «på den ene siden» og «på den andre siden» for å presentere to ulike perspektiver, og hvordan begge sidene underbygges med konkrete eksempler.`
    ],
    marker: 'Slutt på del 4.'
  },
  // section5 → quiz5 marker
  {
    texts: [
      `## Ulike skriveoppgaver og eksamensskriving

La oss nå se nærmere på hvordan du konkret griper an de ulike typene skriveoppgaver du kan møte – ikke minst på eksamen.

Når du får en **kildeanalyse-oppgave**, skal du undersøke en kilde systematisk. Start med å presentere kilden: Hva slags kilde er det? Hvem har laget den, og når? Deretter analyserer du innholdet: Hva er budskapet? Hvilke virkemidler brukes? Til slutt vurderer du kildens troverdighet og nytteverdi. Kildeanalyser kan handle om alt fra et fotografi og en tale til en propagandaplakat – prinsippene er de samme.

En **drøftingsoppgave** krever at du belyser en problemstilling fra flere sider. Et tips: Begynn med en god innledning som setter problemstillingen i kontekst. For eksempel, hvis oppgaven er «Drøft i hvilken grad den industrielle revolusjonen forbedret levekårene for arbeiderklassen», kan innledningen din lyde slik: *«Den industrielle revolusjonen som startet i Storbritannia på slutten av 1700-tallet, forandret samfunnet grunnleggende. Mens den skapte enorm økonomisk vekst og teknologisk fremgang, er det omdiskutert om vanlige arbeidere faktisk fikk det bedre. I denne teksten skal jeg drøfte i hvilken grad den industrielle revolusjonen forbedret levekårene for arbeiderklassen.»*

En **sammenligningsoppgave** – for eksempel å sammenligne den franske og den amerikanske revolusjonen – krever at du velger klare sammenligningskriterier. Du kan organisere teksten tematisk (ett avsnitt om årsaker, ett om forløp, ett om konsekvenser) eller kilde-for-kilde. Det viktigste er at du hele tiden peker på likheter *og* forskjeller, og reflekterer over hvorfor det er slik.

En **framstillingsoppgave** ber deg fortelle en sammenhengende historie om en hendelse eller utvikling. Her er kronologi viktig, men du må også forklare årsaker og konsekvenser – ikke bare ramse opp hva som skjedde.

**Tips til eksamensskriving:** Les oppgaven nøye og understrek nøkkelordene. Ordene «drøft», «vurder», «gjør rede for», «sammenlign» og «analyser» krever ulike tilnærminger. Lag en disposisjon før du begynner å skrive. Bruk temasetninger i hvert avsnitt. Pass på tidsbruken – bruk ikke all tiden på ett spørsmål. Og husk at en kort, presis tekst alltid slår en lang, rotete en.`
    ],
    marker: 'Slutt på del 5.'
  },
  // summary (no marker after)
  {
    texts: [
      `## Oppsummering

Å skrive godt i historiefaget er en ferdighet du bygger opp over tid. Det handler om å kombinere fagkunnskap med klare strukturer, presis kildebruk og overbevisende argumentasjon.

**Nøkkelbegreper du nå kjenner:**
- **Fagtekst i historie**: En tekst som bygger på kilder, bruker fagbegreper og argumenterer saklig
- **Fire sjangre**: Kildeanalyse, drøfting, sammenligning og framstilling
- **Temasetninger**: Første setning i et avsnitt som forteller leseren hva avsnittet handler om
- **PBE-modellen**: Påstand, Begrunnelse, Eksempel – verktøyet for å bygge sterke argumenter
- **Drøftingsord**: Ord som «på den ene siden», «imidlertid», «likevel» – de binder drøftingen sammen

**Tre former for kildebruk:**
1. Direkte sitat (eksakte ord i anførselstegn)
2. Parafrase (gjengi med egne ord)
3. Referanse (kort henvisning til kilden)

**Tips for eksamensskriving:**
- Les oppgaven nøye og understrek nøkkelordene
- Lag en disposisjon før du skriver
- Bruk temasetninger i hvert avsnitt
- Svar på det oppgaven spør om – verken mer eller mindre
- En kort, presis tekst slår alltid en lang, rotete en`
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
  const tmpDir = '/tmp/tts-historie-2-5';

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
    console.log(`Chunk ${i + 1}: Cut intro at ${introEnd}s -> ${cleanFile}`);
  }

  // Concatenate clean chunks into master
  const masterDir = path.join(outputDir, '_master');
  if (!fs.existsSync(masterDir)) fs.mkdirSync(masterDir, { recursive: true });
  const masterFile = path.join(masterDir, 'historie-2-5-narrativ-full-master.mp3');

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
