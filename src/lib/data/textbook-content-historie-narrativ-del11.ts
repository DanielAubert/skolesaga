/**
 * Tekstbok innhold for Historie - NARRATIV VERSJON DEL 11
 * Kapittel 12: Mellomkrigstiden (12.1 - 12.4)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 12.1 NARRATIV: Etterkrigstid og økonomisk krise
// ============================================================================

export const CHAPTER_HISTORIE_12_1_NARRATIV: TextbookChapter = {
  id: 'historie-12-1-narrativ',
  courseId: 'historie',
  chapterNumber: '12.1',
  title: 'Etterkrigstid og økonomisk krise',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan verden gikk fra krigens ruiner gjennom de brølende 20-årene til den store depresjonens mørke dager.',
  estimatedMinutes: 45,
  competenceGoals: ['ideologier, undertrykkelse, terror og Holocaust'],
  linkedChapterId: 'historie-12-1',
  content: [
    {
      id: 'historie-12-1-n-intro',
      type: 'text',
      content: `## Da freden kom - og kaoset begynte

Tenk deg at du er en ung mann i Berlin i november 1918. Krigen er endelig over. Fire ar med helvete, millioner av dode, og na er det slutt. Du burde vare lettet, men i stedet er du forvirret og redd. Keiseren har flyktet. Revolusjonare marsjerer i gatene. Ingen vet hvem som styrer landet.

Slik var virkeligheten for millioner av europeere da forste verdenskrig tok slutt. De hadde overlevd krigen, men freden skulle vise seg a vare nesten like kaotisk. I arene som fulgte, ventet hyperinflasjon, politisk uro, en kortvarig gullalder - og sa den verste okonomiske krisen verden noensinne hadde sett.

La oss folge denne dramatiske reisen gjennom mellomkrigstiden, fra ruinene i 1918 til den sorte tirsdagen i 1929.`,
    },
    {
      id: 'historie-12-1-n-section1',
      type: 'text',
      content: `## Europa i ruiner

Forste verdenskrig etterlot Europa i en tilstand av total utmattelse. **Ti millioner soldater** var dode, enda flere saret. Sivilbefolkningen hadde lidd under blokader og matmangel. Og sa kom **spanskesyken** i 1918-19, en pandemi som tok livet av mellom 50 og 100 millioner mennesker over hele verden - flere enn selve krigen.

Politisk var kontinentet totalt forandret. Fire store imperier - det tyske, osterriksk-ungarske, osmanske og russiske - hadde kollapset. Pa ruinene vokste det fram en mengde nye stater: Polen, Tsjekkoslovakia, Jugoslavia, Finland, de baltiske statene. Men de nye grensene skapte nye konflikter. Millioner av mennesker havnet plutselig som minoriteter i fremmede land.

I Russland hadde bolsjevikene tatt makten i 1917, og en blodig borgerkrig raste. I Tyskland forsoke revolusjonare a gjenta det russiske eksempelet. I Ungarn ble det kortvarig kommuniststyre. Over hele Europa knitret det av politisk spenning. Det gamle Europa var dod - men hva skulle erstatte det?

Og sa var det okonomien. Landene hadde finansiert krigen med lan og ved a trykke penger. Na kom regningen. **Inflasjon** spredte seg som en epidemi, og verst var det i Tyskland og Osterrike.`,
    },
    {
      id: 'historie-12-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Europa etter forste verdenskrig:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-1-n-quiz1-q0',
            task: 'Hva var de viktigste konsekvensene av forste verdenskrig for Europa?',
            options: [
              { id: 'a', text: 'Okonomisk nedgang og tap av kolonier, men politisk stabilitet og styrket demokrati i de fleste land', isCorrect: false },
              { id: 'b', text: 'Millioner av dode, imperiesammenbrudd, nye stater, politisk uro og okonomisk kaos', isCorrect: true },
              { id: 'c', text: 'Hovedsakelig territorielle endringer i Ost-Europa, men bevart politisk og okonomisk orden i Vest-Europa', isCorrect: false },
              { id: 'd', text: 'Massiv odeleggelse under krigen, men rask gjenoppbygging og okonomisk vekst allerede fra 1919', isCorrect: false },
            ],
            solution: 'Forste verdenskrig forandret Europa totalt. Ti millioner soldater dode, fire imperier kollapset, nye stater ble skapt med omstridte grenser, revolusjonare bevegelser truet den gamle orden, og okonomien var i fritt fall med inflasjon og gjeldskrise.',
          },
          {
            id: 'historie-12-1-n-quiz1-q1',
            task: 'Hvilke fire store imperier kollapset som folge av forste verdenskrig?',
            options: [
              { id: 'a', text: 'Det tyske, britiske, osmanske og russiske', isCorrect: false },
              { id: 'b', text: 'Det russiske, osmanske, tyske og franske', isCorrect: false },
              { id: 'c', text: 'Det tyske, osterriksk-ungarske, osmanske og russiske', isCorrect: true },
              { id: 'd', text: 'Det osterriksk-ungarske, osmanske, russiske og britiske', isCorrect: false },
            ],
            solution: 'De fire imperiene som kollapset var det tyske, osterriksk-ungarske, osmanske og russiske. Pa ruinene av disse vokste det fram en rekke nye stater som Polen, Tsjekkoslovakia, Jugoslavia og de baltiske statene.',
          },
          {
            id: 'historie-12-1-n-quiz1-q2',
            task: 'Hva var spanskesyken, og hvorfor var den sa alvorlig?',
            options: [
              { id: 'a', text: 'En influensapandemi i 1918-19 som tok rundt 5-10 millioner liv, omtrent like mange som krigen', isCorrect: false },
              { id: 'b', text: 'En pandemi i 1918-19 som tok mellom 50 og 100 millioner liv - flere enn selve krigen', isCorrect: true },
              { id: 'c', text: 'En pandemi som startet i Spania i 1917 og spredte seg til frontlinjene, der den tok rundt 20 millioner soldaters liv', isCorrect: false },
              { id: 'd', text: 'En tyfusepidemi som rammet krigsflykninger og sivilbefolkningen i Ost-Europa i 1919-20', isCorrect: false },
            ],
            solution: 'Spanskesyken var en pandemi i 1918-19 som tok mellom 50 og 100 millioner liv over hele verden - langt flere enn de ti millioner soldatene som dode i selve krigen. Den rammet en verden allerede utmattet av krig.',
          },
        ],
      },
    },
    {
      id: 'historie-12-1-n-section2',
      type: 'text',
      content: `## Hyperinflasjonens mareritt

For a forsta hvor ekstrem situasjonen var, ma vi se pa Tyskland i 1923. **Hyperinflasjonen** er et av historiens mest ekstreme eksempler pa okonomisk kollaps.

Forestill deg dette: Om morgenen kjoper du en kaffe for 5000 mark. Om kvelden koster samme kaffe 8000 mark. Neste uke koster den en million. Lonningen du fikk i gar, er verdilos for den nar butikkene apner. Folk triller penger i trillebarer for a kjope brod. En brodkniv kostet bokstavelig talt milliarder mark.

Hvordan kunne dette skje? Etter krigen matte Tyskland betale enorme **krigserstatninger** til seierherrene. For a betale trykte de mer penger. Men dess mer penger de trykte, dess mindre var hver seddel verdt. Det ble en ond sirkel som spinnet ut av kontroll.

Konsekvensene var katastrofale. **Middelklassen** - larere, leger, embedsmenn - hadde spart hele livet. Na var sparepengene plutselig verdilose. En families livsoppsparing kunne ikke lenger kjope et brod. Mens de som hadde gjeld, jublet - for gjelden var ogsa blitt verdilos.

Denne erfaringen satte dype spor i den tyske psyken. Tilliten til republikken, til pengene, til systemet - alt raknet. Og i denne kaoset dukket det opp en agitator med bart og intense oyne som lovte a gjenreise Tysklands storhet. Hans navn var Adolf Hitler. I 1923 forsoke han sitt forste kupp i Munchen. Det mislyktes, men han var ikke ferdig.`,
    },
    {
      id: 'historie-12-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa hyperinflasjonen i Tyskland:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-1-n-quiz2-q0',
            task: 'Hvorfor var hyperinflasjonen i Tyskland i 1923 sa odeleggende for middelklassen?',
            options: [
              { id: 'a', text: 'Fordi de mistet jobbene sine da staten kuttet i offentlig sektor for a spare penger', isCorrect: false },
              { id: 'b', text: 'Fordi sparepengene deres ble verdilose nesten over natten', isCorrect: true },
              { id: 'c', text: 'Fordi lonnene deres ikke holdt folge med de raskt stigende prisene pa basisvarer', isCorrect: false },
              { id: 'd', text: 'Fordi krigserstatningene ble finansiert gjennom ekstraskatt som rammet middelklassen hardest', isCorrect: false },
            ],
            solution: 'Middelklassen hadde spart hele livet i tyske mark. Da inflasjonen eksploderte, ble disse sparepengene verdilose. En families livssparing kunne plutselig ikke kjope mer enn et brod.',
          },
          {
            id: 'historie-12-1-n-quiz2-q1',
            task: 'Hva var hovedarsaken til at Tyskland fikk hyperinflasjon?',
            options: [
              { id: 'a', text: 'Tyskland trykte enorme mengder penger for a betale krigserstatninger, noe som senket pengenes verdi', isCorrect: true },
              { id: 'b', text: 'Den franske okkupasjonen av Ruhr-omradet i 1923 lammet tysk industri og kuttet statsinntektene', isCorrect: false },
              { id: 'c', text: 'Amerikanske banker kalte tilbake krigslan fra Tyskland, noe som torpte knapt med likviditet i okonomien', isCorrect: false },
              { id: 'd', text: 'Gullstandarden kollapset da Storbritannia devaluerte pundet, og tok den tyske marken med i fallet', isCorrect: false },
            ],
            solution: 'Tyskland matte betale enorme krigserstatninger til seierherrene etter forste verdenskrig. For a skaffe penger trykte de mer og mer sedler. Men jo mer penger de trykte, desto mindre var hver seddel verdt - en ond sirkel som spinnet ut av kontroll.',
          },
          {
            id: 'historie-12-1-n-quiz2-q2',
            task: 'Hvilken politisk konsekvens fikk hyperinflasjonen i Tyskland?',
            options: [
              { id: 'a', text: 'Weimar-republikken ble styrket fordi regjeringen innforte en ny stabil valuta som gjenopprettet tilliten', isCorrect: false },
              { id: 'b', text: 'Sosialdemokratene fikk okt oppslutning fordi de ble sett som det eneste ansvarsfulle partiet', isCorrect: false },
              { id: 'c', text: 'Tilliten til republikken og det politiske systemet raknet, og ekstremister som Hitler fikk fotfeste', isCorrect: true },
              { id: 'd', text: 'Militaret grep inn og innforte et overgangsstyre som stabiliserte situasjonen', isCorrect: false },
            ],
            solution: 'Hyperinflasjonen odela folks tillit til det demokratiske systemet. I kaoset forsoke Adolf Hitler sitt forste kupp i Munchen i 1923. Det mislyktes, men bitterheten i befolkningen ga naering til ekstreme bevegelser bade pa hoyre- og venstresiden.',
          },
        ],
      },
    },
    {
      id: 'historie-12-1-n-section3',
      type: 'text',
      content: `## De brolende 20-arene

Sa, midt i alt kaoset, skjedde noe merkelig. Fra omkring 1924 til 1929 opplevde verden - sarlig USA - en periode med vekst, optimisme og kulturell blomstring som fikk kallenavnet **"de brolende 20-arene"** eller "the roaring twenties".

Det var som om folk hadde bestemt seg for a glemme krigens redsler og leve livet. **Jazzmusikk** strommet ut fra klubber og radioer. **Film** ble massenes underholdning, og Hollywood skapte de forste virkelige stjernene. Kvinner klippet haret kort, rokte sigaretter og danset **charleston** - de ble kalt "flappere" og sjokkerte den eldre generasjonen.

Teknologien forandret hverdagen. **Biler** ble billige nok til at vanlige folk kunne kjope dem - Henry Fords samleband revolusjonerte produksjonen. **Radio** brakte verden inn i stua. **Elektrisitet** spredte seg, og med den kom kjoleskap, stovsugere og lysere hjem.

Men velstanden var skjevt fordelt. USA blomstret, mens Europa fortsatt slet med krigsgjeld og gjenoppbygging. Tyskland fikk det bedre etter at amerikanerne begynte a lane dem penger - men den tyske velstanden var bygget pa lan, ikke pa solid grunn.

Og pa **Wall Street** i New York vokste det fram en farlig optimisme. Alle ville kjope aksjer. Kursene steg og steg. Folk lante penger for a kjope enda flere aksjer - det var jo sikker gevinst, mente de. Troen pa evig vekst spredte seg som en feber. Ingen spurte hva som ville skje nar musikken stoppet.`,
    },
    {
      id: 'historie-12-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa de brolende 20-arene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-1-n-quiz3-q0',
            task: 'Hvorfor var velstanden pa 1920-tallet ustabil?',
            options: [
              { id: 'a', text: 'Fordi industrialiseringen skapte overproduksjon som presset prisene ned og truet bedriftenes lonnsomhet', isCorrect: false },
              { id: 'b', text: 'Fordi den var geografisk ujevnt fordelt og basert pa spekulasjon og gjeld', isCorrect: true },
              { id: 'c', text: 'Fordi inflasjonen fra etterkrigstiden fortsatt preget okonomien og holdt realverdien av lonninger nede', isCorrect: false },
              { id: 'd', text: 'Fordi verdenshandelen var begrenset av hoye tollmurer som hindret okonomisk integrasjon mellom landene', isCorrect: false },
            ],
            solution: 'Velstanden var ustabil fordi USA blomstret mens Europa slet. Tyskland var avhengig av amerikanske lan. I USA var veksten drevet av spekulasjon - folk kjopte aksjer med lante penger i troen pa evig vekst.',
          },
          {
            id: 'historie-12-1-n-quiz3-q1',
            task: 'Hvilken teknologisk nyvinning revolusjonerte hverdagen for vanlige folk pa 1920-tallet?',
            options: [
              { id: 'a', text: 'Telefon, flyindustri og masseprodusert stal', isCorrect: false },
              { id: 'b', text: 'Dampturbiner, diesellokomotiv og telegraf', isCorrect: false },
              { id: 'c', text: 'Radio, bil og elektrisitet i hjemmet', isCorrect: true },
              { id: 'd', text: 'Kjemisk industri, kunstgjodsel og traktorer i landbruket', isCorrect: false },
            ],
            solution: 'Pa 1920-tallet ble biler billige nok for vanlige folk takket vare Henry Fords samleband. Radio brakte verden inn i stua. Elektrisitet spredte seg og ga folk kjoleskap, stovsugere og lysere hjem. Disse nyvinningene forandret hverdagslivet radikalt.',
          },
          {
            id: 'historie-12-1-n-quiz3-q2',
            task: 'Hva var farlig med aksjespekulasjonen pa Wall Street pa slutten av 1920-tallet?',
            options: [
              { id: 'a', text: 'At bankene investerte kundenes sparepenger i aksjer uten a informere dem om risikoen', isCorrect: false },
              { id: 'b', text: 'At utenlandske investorer kontrollerte storparten av det amerikanske aksjemarkedet', isCorrect: false },
              { id: 'c', text: 'At myndighetene oppfordret folk til a investere i aksjer som en del av den okonomiske vekstpolitikken', isCorrect: false },
              { id: 'd', text: 'At folk lante penger for a kjope aksjer i troen pa at kursene aldri ville falle', isCorrect: true },
            ],
            solution: 'Pa Wall Street vokste det fram en farlig optimisme. Folk lante penger for a kjope enda flere aksjer - det var jo "sikker gevinst". Troen pa evig vekst spredte seg som en feber. Ingen spurte hva som ville skje nar boblen sprakk.',
          },
        ],
      },
    },
    {
      id: 'historie-12-1-n-section4',
      type: 'text',
      content: `## Svart tirsdag og den store depresjonen

Den 24. oktober 1929 - "svart torsdag" - begynte aksjekursene pa Wall Street a falle. Panikken spredte seg. Folk forsoke a selge, men det var ingen kjopere. Den 29. oktober - **"svart tirsdag"** - kollapset markedet fullstendig. Milliarder av dollar i verdier forsvant pa timer.

Borskollapsen var bare begynnelsen. Den utloste en kjedereaksjon som kastet hele verden ut i **den store depresjonen** - den verste okonomiske krisen i moderne tid.

Banker som hadde lant ut penger til aksjespekulanter, gikk konkurs. Nar banker gikk konkurs, mistet folk sparepengene sine. Bedrifter som ikke fikk lan, matte legge ned. Arbeidere ble oppsagt. Arbeidsledige kunne ikke kjope varer, sa enda flere bedrifter gikk konkurs. Det var en ond spiral nedover.

**Arbeidsledigheten** naddde svimlende hoyder: 25 prosent i USA, 33 prosent i Tyskland. I noen bransjer var det enda verre. Millioner av familier mistet alt - hjem, sparepenger, verdighet. I USA vokste det fram teltleirer av hjemlose, ironisk kalt "Hoovervilles" etter presidenten som ikke klarte a lose krisen. Suppekjokkener delte ut mat til lange koer av sultne mennesker.

Og krisen spredte seg over hele verden. Da amerikanske banker kalte tilbake lanene sine fra Europa, kollapset den tyske okonomien - igjen. Verdenshandelen skrumpet inn da land reiste tollmurer for a beskytte egen industri. Alle forsoke a redde seg selv, og resultatet var at alle ble fattigere.`,
    },
    {
      id: 'historie-12-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa den store depresjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-1-n-quiz4-q0',
            task: 'Hvordan spredte den okonomiske krisen seg fra USA til resten av verden?',
            options: [
              { id: 'a', text: 'Gjennom at amerikanske bedrifter la ned sine europeiske fabrikker og flyttet produksjonen hjem', isCorrect: false },
              { id: 'b', text: 'Gjennom tilbakekalling av lan, kollaps i verdenshandelen og finansielle kjedereaksjoner', isCorrect: true },
              { id: 'c', text: 'Gjennom valutaspekulasjon som presset europeiske valutaer til a devaluere og skapte inflasjon', isCorrect: false },
              { id: 'd', text: 'Gjennom at USA innforte handelsblokade mot europeiske land for a beskytte egen industri', isCorrect: false },
            ],
            solution: 'Krisen spredte seg gjennom det sammenkoblede finanssystemet. Amerikanske banker kalte tilbake lan fra Europa, sarlig Tyskland. Land reiste tollmurer som kvelte verdenshandelen. Kollapsen i USA trakk hele verden med seg ned.',
          },
          {
            id: 'historie-12-1-n-quiz4-q1',
            task: 'Hva skjedde pa "svart tirsdag" 29. oktober 1929?',
            options: [
              { id: 'a', text: 'Den amerikanske sentralbanken hevet renten dramatisk for a bremse spekulasjonen', isCorrect: false },
              { id: 'b', text: 'De storste amerikanske bankene gikk konkurs og utloste panikk i finansmarkedene', isCorrect: false },
              { id: 'c', text: 'Aksjemarkedet pa Wall Street kollapset fullstendig', isCorrect: true },
              { id: 'd', text: 'Kongressen vedtok Smoot-Hawley-tolloven som lammet internasjonal handel', isCorrect: false },
            ],
            solution: 'Den 29. oktober 1929 kollapset aksjemarkedet pa Wall Street fullstendig. Folk forsoke a selge, men det var ingen kjopere. Milliarder av dollar i verdier forsvant pa timer. Dette utloste en kjedereaksjon som kastet verden ut i den store depresjonen.',
          },
          {
            id: 'historie-12-1-n-quiz4-q2',
            task: 'Hvorfor ble den onde spiralen under depresjonen sa vanskelig a stoppe?',
            options: [
              { id: 'a', text: 'Fordi regjeringene holdt fast ved gullstandarden og strammet inn pengebruken i stedet for a stimulere okonomien', isCorrect: false },
              { id: 'b', text: 'Fordi bankkonkurser, bedriftsnedleggelser og arbeidsledighet forsterket hverandre i en ond sirkel', isCorrect: true },
              { id: 'c', text: 'Fordi proteksjonistisk handelspolitikk og tollmurer hindret okonomisk samarbeid mellom landene', isCorrect: false },
              { id: 'd', text: 'Fordi den internasjonale gjeldsstrukturen fra forste verdenskrig skapte dominoeffekter nar ett land misligholdt', isCorrect: false },
            ],
            solution: 'Banker gikk konkurs og folk mistet sparepengene. Bedrifter fikk ikke lan og matte legge ned. Oppsagte arbeidere kunne ikke kjope varer, sa enda flere bedrifter gikk konkurs. Arbeidsledigheten naddde 25% i USA og 33% i Tyskland.',
          },
          {
            id: 'historie-12-1-n-quiz4-q3',
            task: 'Hva var "Hoovervilles"?',
            options: [
              { id: 'a', text: 'Offentlige arbeidsleirer opprettet av Hoover-administrasjonen for a sysselsette arbeidsledige', isCorrect: false },
              { id: 'b', text: 'Midlertidige suppekjokkener og matstasjoner drevet av frivillige organisasjoner i storbyene', isCorrect: false },
              { id: 'c', text: 'Billige boligprosjekter finansiert av den amerikanske staten for a huse fattige familier', isCorrect: false },
              { id: 'd', text: 'Teltleirer av hjemlose, ironisk oppkalt etter president Hoover som ikke klarte a lose krisen', isCorrect: true },
            ],
            solution: 'Hoovervilles var teltleirer og provisoriske bosettinger der hjemlose amerikanere bodde under depresjonen. De ble ironisk oppkalt etter president Herbert Hoover, som ble holdt ansvarlig for a ikke klare a lose den okonomiske krisen.',
          },
        ],
      },
    },
    {
      id: 'historie-12-1-n-section5',
      type: 'text',
      content: `## Krisens politiske konsekvenser

Den store depresjonen var ikke bare en okonomisk katastrofe - den var en politisk bombe. Nar folk sulter og demokratiet virker handlingslammet, begynner de a lytte til dem som lover enkle losninger.

Tenk deg at du er arbeidslos i Berlin i 1932. Du har mistet jobben, sparepengene, kanskje hjemmet. Regjeringen ser ut til a gjore ingenting. Moderate politikere krangler mens barna dine er sultne. Sa kommer det noen som sier: "Vi vet hvem som har skylden - jodene, kommunistene, de korrupte politikerne. Gi oss makten, og vi skal fikse alt."

Slik vokste **ekstreme ideologier** fram pa ruinene av okonomien. **Kommunistene** sa at kapitalismen hadde feilet og matte erstattes. **Nazistene** og **fascistene** lovte nasjonal gjenreisning, sterkt lederskap og en syndebukk a skylde pa.

I Tyskland var effekten mest dramatisk. Nazistpartiet, som hadde fatt bare 2,6 prosent av stemmene i 1928, fikk 37 prosent i 1932. Den okonomiske desperasjonen hadde gjort det mulig for Hitler a gripe makten.

Men det var ikke uunngaelig. Noen land - som de skandinaviske, Storbritannia og USA - beholdt demokratiet gjennom krisen. Forskjellen la ofte i hvordan politikere responderte. Der regjeringer grep aktivt inn med krisepolitikk og sosiale tiltak, holdt demokratiet stand. Der de virket hjelpelose, ble folk fristet av autoritare alternativer.

Den store depresjonen larte verden en brutal lekse: okonomiske kriser er ikke bare okonomiske. De truer selve demokratiet.`,
    },
    {
      id: 'historie-12-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-12-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa krisens politiske konsekvenser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-1-n-quiz5-q0',
            task: 'Hvorfor forte den okonomiske krisen til politisk radikalisering i mange land?',
            options: [
              { id: 'a', text: 'Fordi arbeiderklassen ble mer organisert gjennom fagforeninger og krevde grunnleggende systemendringer', isCorrect: false },
              { id: 'b', text: 'Fordi demokratiske regjeringer virket handlingslammet, og ekstreme ideologier tilbod enkle svar pa folks desperasjon', isCorrect: true },
              { id: 'c', text: 'Fordi den russiske revolusjonen inspirerte arbeidere i hele Europa til a kreve kommunistisk revolusjon', isCorrect: false },
              { id: 'd', text: 'Fordi Versailles-traktaten hadde skapt sa mye bitterhet at folk sokte hevn gjennom nasjonalistiske partier', isCorrect: false },
            ],
            solution: 'Nar demokratiske regjeringer ikke klarte a lose arbeidsledighet og fattigdom, mistet folk tilliten til systemet. Ekstreme ideologier tilbod enkle forklaringer, syndebukker og lofte om handling.',
          },
          {
            id: 'historie-12-1-n-quiz5-q1',
            task: 'Hvor stor andel av stemmene fikk nazistpartiet i Tyskland i 1932, sammenlignet med 2,6% i 1928?',
            options: [
              { id: 'a', text: '18 prosent', isCorrect: false },
              { id: 'b', text: '27 prosent', isCorrect: false },
              { id: 'c', text: '37 prosent', isCorrect: true },
              { id: 'd', text: '44 prosent', isCorrect: false },
            ],
            solution: 'Nazistpartiet gikk fra 2,6% i 1928 til 37% i 1932 - en dramatisk okning som skyldtes den okonomiske desperasjonen. Den store depresjonen hadde gjort det mulig for Hitler a vinne massiv folkelig stotte.',
          },
          {
            id: 'historie-12-1-n-quiz5-q2',
            task: 'Hvorfor overlevde demokratiet i noen land, som de skandinaviske og Storbritannia, mens det kollapset i andre?',
            options: [
              { id: 'a', text: 'Fordi de hadde lengre demokratiske tradisjoner og sterkere rettsstat som hindret maktmisbruk', isCorrect: false },
              { id: 'b', text: 'Fordi sterke fagforeninger og arbeiderpartier kanaliserte misnøyen inn i demokratiske former', isCorrect: false },
              { id: 'c', text: 'Fordi de hadde mindre krigsgjeld og slapp de verste virkningene av Versailles-traktaten', isCorrect: false },
              { id: 'd', text: 'Fordi regjeringene grep aktivt inn med krisepolitikk og sosiale tiltak som ga folk hap', isCorrect: true },
            ],
            solution: 'Forskjellen la ofte i hvordan politikere responderte. Der regjeringer grep aktivt inn med krisepolitikk og sosiale tiltak, holdt demokratiet stand. Der de virket hjelpelose, ble folk fristet av autoritare alternativer. Okonomiske kriser er ikke bare okonomiske - de truer selve demokratiet.',
          },
        ],
      },
    },
    {
      id: 'historie-12-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Mellomkrigstiden var en berg-og-dal-bane av kaos, hap og ny katastrofe. Fra ruinene etter forste verdenskrig, gjennom hyperinflasjonens mareritt, til de brolende 20-arenes korte gullalder, og sa ned i den store depresjonens morke - det var tjue ar som forandret verden.

**Nokkelbegreper du na kjenner:**
- **Hyperinflasjon (1923):** Ekstrem prisstigning som gjorde tysk valuta verdilos
- **De brolende 20-arene:** Periode med okonomisk vekst og kulturell frigjoring (1924-1929)
- **Borskollapsen (1929):** Wall Street-krakket som utloste den globale krisen
- **Den store depresjonen:** Verdensomspennende okonomisk krise (1929-1939)
- **Arbeidsledighet:** Naddde 25-33% i mange land under depresjonen
- **Politisk radikalisering:** Hvordan okonomisk krise forte folk mot ekstreme ideologier

**Det viktigste du tar med deg:**
Okonomiske kriser er aldri bare okonomiske. De ryster samfunnets grunnvoller og kan true selve demokratiet. Nar folk lider og systemet virker hjelplost, blir ekstreme losninger fristende. Mellomkrigstidens erfaring viser hvor viktig det er at demokratier responderer aktivt pa kriser - passivitet kan ha katastrofale konsekvenser.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.2 NARRATIV: Totalitære ideologier
// ============================================================================

export const CHAPTER_HISTORIE_12_2_NARRATIV: TextbookChapter = {
  id: 'historie-12-2-narrativ',
  courseId: 'historie',
  chapterNumber: '12.2',
  title: 'Totalitære ideologier',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan fascisme, nazisme og kommunisme grep makten og formet det 20. århundre.',
  estimatedMinutes: 50,
  competenceGoals: ['ideologier, undertrykkelse, terror og Holocaust'],
  linkedChapterId: 'historie-12-2',
  content: [
    {
      id: 'historie-12-2-n-intro',
      type: 'text',
      content: `## Da ideologiene krevde alt

Tenk deg et samfunn der staten ikke bare bestemmer hvem som styrer, men ogsa hva du skal tenke, hvem du skal vare venner med, hvilke boker du far lese, og hva barna dine skal lare. Et samfunn der naboen din kanskje angir deg for noe du sa ved middagsbordet. Der plakater av Lederen stirrer ned pa deg fra hver vegg. Der det ikke finnes noe privat rom - alt tilhorer staten.

Dette var virkeligheten for hundrevis av millioner mennesker under de **totalitare regimene** i mellomkrigstiden. Stalin i Sovjetunionen, Mussolini i Italia, Hitler i Tyskland - de representerte ulike ideologier, men delte en felles ambisjon: total kontroll.

La oss forsoke a forsta disse ideologiene - ikke for a rettferdiggjore dem, men for a gjenkjenne farene de representerer. For historien viser at mennesker, under de rette omstendighetene, kan lokkes til a gi opp friheten sin for lofte om sikkerhet, storhet eller en bedre fremtid.`,
    },
    {
      id: 'historie-12-2-n-section1',
      type: 'text',
      content: `## Hva er totalitarisme?

For vi dykker ned i de enkelte ideologiene, ma vi forsta hva **totalitarisme** egentlig betyr. Det er noe mer enn bare et diktatur.

Et vanlig diktatur - et **autoritart regime** - noyer seg med a holde pa makten. Diktatoren vil at du skal adlyde, betale skatt og holde deg unna politikk. Men han bryr seg ikke sarlig om hva du tenker privat, sa lenge du ikke lager brak.

Et **totalitart regime** vil noe mer. Det vil ikke bare ha lydighet - det vil ha din sjel. Det vil forme deg til et nytt menneske som virkelig tror pa ideologien, ikke bare later som. Det krever ikke bare passiv aksept, men aktiv deltakelse. Du skal marsiere i parader, synge sangene, melde deg inn i organisasjonene, rapportere om naboer som sier feil ting.

De totalitare regimene delte flere kjennetegn. Det var **enpartistyre** - bare ett parti var tillatt, alle andre ble forbudt eller knust. Det var **lederkult** - en karismatisk leder som ble tilbedt nesten som en gud. Det var **ideologi** - et altomfattende verdenssyn som skulle forklare alt og gi svar pa alle sporsmal. Det var **terror** - hemmelig politi, fangeleirer, vilkarlige arrestasjoner som skapte frykt. Og det var **propaganda** - konstant pavirkning gjennom statskontrollerte medier, plakater, film og radio.

Alt dette hadde ett mal: a bryte ned skillet mellom individ og stat. I det totalitare samfunnet skulle det ikke finnes noe privat rom. Alt tilhorte fellesskapet - og fellesskapet var staten.`,
    },
    {
      id: 'historie-12-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa totalitarisme:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-2-n-quiz1-q0',
            task: 'Hva skiller et totalitart regime fra et vanlig diktatur?',
            options: [
              { id: 'a', text: 'Et totalitart regime bruker systematisk vold mot befolkningen, mens et diktatur styrer gjennom lover og byrakrati', isCorrect: false },
              { id: 'b', text: 'Et totalitart regime har en altomfattende ideologi, mens et diktatur styrer uten ideologisk grunnlag', isCorrect: false },
              { id: 'c', text: 'Et totalitart regime vil forme hele mennesket og kontrollere alle sider av livet, ikke bare sikre lydighet', isCorrect: true },
              { id: 'd', text: 'Et totalitart regime har alltid en karismatisk leder, mens et diktatur styres av en militarjunta', isCorrect: false },
            ],
            solution: 'Et vanlig diktatur (autoritart regime) noyer seg med lydighet. Et totalitart regime vil forme hele mennesket, kontrollere tanker og folelser, og krever aktiv deltakelse. Ideologien skal gjennomsyre alt.',
          },
          {
            id: 'historie-12-2-n-quiz1-q1',
            task: 'Hvilke kjennetegn delte de totalitare regimene?',
            options: [
              { id: 'a', text: 'Enpartistyre, lederkult, sterk militarmakt, sensur og statlig planøkonomi', isCorrect: false },
              { id: 'b', text: 'Enpartistyre, lederkult, altomfattende ideologi, terror og propaganda', isCorrect: true },
              { id: 'c', text: 'Hemmelig politi, sensur av medier, forbud mot opposisjon, militardiktatur og nasjonalisme', isCorrect: false },
              { id: 'd', text: 'Statskontrollert okonomi, lederkult, massemobilisering, hemmeligholdelse og militarisme', isCorrect: false },
            ],
            solution: 'De totalitare regimene delte flere kjennetegn: enpartistyre (alle andre partier forbudt), lederkult (lederen tilbedt som nesten en gud), altomfattende ideologi, terror gjennom hemmelig politi og fangeleirer, og propaganda gjennom statskontrollerte medier.',
          },
          {
            id: 'historie-12-2-n-quiz1-q2',
            task: 'Hva menes med at totalitare regimer ville bryte ned skillet mellom individ og stat?',
            options: [
              { id: 'a', text: 'At staten skulle overta alle private bedrifter og gjore alle til statsansatte', isCorrect: false },
              { id: 'b', text: 'At det ikke skulle finnes noe privat rom - alt tilhorte staten', isCorrect: true },
              { id: 'c', text: 'At borgerne skulle identifisere seg med staten gjennom obligatorisk medlemskap i statlige organisasjoner', isCorrect: false },
              { id: 'd', text: 'At familien skulle erstattes av statlige institusjoner som tok ansvar for oppdragelse og omsorg', isCorrect: false },
            ],
            solution: 'I det totalitare samfunnet skulle det ikke finnes noe privat rom. Alt tilhorte fellesskapet - og fellesskapet var staten. Regimet krevde ikke bare at du adlod, men at du virkelig trodde pa ideologien og deltok aktivt i parader, organisasjoner og rapportering.',
          },
        ],
      },
    },
    {
      id: 'historie-12-2-n-section2',
      type: 'text',
      content: `## Fascismen: Mussolinis Italia

**Fascismen** ble fodt i Italia, og mannen som skapte den, het **Benito Mussolini**. Han hadde vart sosialist, men under forste verdenskrig vendte han seg mot nasjonalismen. I 1919 grunnla han fascistbevegelsen.

Italia var i krise. Krigen hadde kostet enormt, men seieren foltes tom - Italia fikk ikke de territoriene de var blitt lovet. Arbeidsledighet og uro preget landet. Kommunister og sosialister truet med revolusjon. Inn i dette vakuumet marsjerte fascistene.

Mussolini og hans **svartskjorter** brukte vold mot politiske motstandere, sarlig sosialister og kommunister. Samtidig lovte han orden, nasjonal storhet og effektiv styring. I 1922 organiserte han **"Marsjen mot Roma"** - et truende demonstrasjonstog som fikk kongen til a utnevne ham til statsminister.

Hva var fascismens ideologi? Det er ikke lett a oppsummere, for fascismen var mer folelse enn teori. Men noen elementer peker seg ut. **Nasjonalismen** var grunnleggende - nasjonen var alt, individet ingenting. **Handlingskraft** og **vold** ble glorifisert - demokratisk debatt var svakhet. **Lederprinsippet** betydde at nasjonen trengte en sterk mann a folge. Og **korporativismen** skulle forene arbeidere og kapitalister under statens ledelse, i stedet for klassekamp.

Fascismen var ogsa antidemokratisk og antiliberal. Mussolini foraktet parlamentarisme, menneskerettigheter og personlig frihet. Staten var alt - "Alt i staten, ingenting utenfor staten, ingenting mot staten," som han sa.

Men i motsetning til nazismen, var ikke fascismen i utgangspunktet rasistisk. Italia innforte raselover forst i 1938, under press fra Hitler.`,
    },
    {
      id: 'historie-12-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa fascismen i Italia:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-2-n-quiz2-q0',
            task: 'Hva var de viktigste elementene i fascismens ideologi?',
            options: [
              { id: 'a', text: 'Raseteori, antisemittisme og erobring av livsrom i ost', isCorrect: false },
              { id: 'b', text: 'Nasjonalisme, lederdyrking, statens totale makt og forakt for demokrati', isCorrect: true },
              { id: 'c', text: 'Korporativisme, klasseforsoning under statlig kontroll og imperialistisk ekspansjon', isCorrect: false },
              { id: 'd', text: 'Militarisme, antibolsjevisme og gjenopprettelse av det romerske imperiet', isCorrect: false },
            ],
            solution: 'Fascismen var bygget pa ekstrem nasjonalisme, troen pa en sterk leder, statens totale makt over individet, og forakt for demokrati. Den glorifiserte handling og vold.',
          },
          {
            id: 'historie-12-2-n-quiz2-q1',
            task: 'Hvordan kom Mussolini til makten i Italia i 1922?',
            options: [
              { id: 'a', text: 'Fascistpartiet vant flertall i parlamentet i 1921, og Mussolini ble naturlig statsminister', isCorrect: false },
              { id: 'b', text: 'Han ble utnevnt av parlamentet etter en koalisjonsavtale med de konservative partiene', isCorrect: false },
              { id: 'c', text: 'Han organiserte "Marsjen mot Roma" og ble utnevnt til statsminister av kongen under press', isCorrect: true },
              { id: 'd', text: 'Militaret gjennomforte et statskupp og innsatte Mussolini som leder for en overgangsregjering', isCorrect: false },
            ],
            solution: 'Mussolini og hans svartskjorter brukte vold og trusler. I 1922 organiserte han "Marsjen mot Roma" - et truende demonstrasjonstog som fikk kongen til a utnevne ham til statsminister. Det var en blanding av trusler og politisk manøvrering.',
          },
          {
            id: 'historie-12-2-n-quiz2-q2',
            task: 'Hva mente Mussolini med slagordet "Alt i staten, ingenting utenfor staten, ingenting mot staten"?',
            options: [
              { id: 'a', text: 'At staten hadde plikt til a beskytte nasjonen mot indre og ytre fiender med alle midler', isCorrect: false },
              { id: 'b', text: 'At nasjonen og staten var alt - individet var ingenting utenfor statens kontroll', isCorrect: true },
              { id: 'c', text: 'At alle samfunnsklasser skulle forenes under statens ledelse i en korporativ struktur', isCorrect: false },
              { id: 'd', text: 'At Italias storhet krevde at alle borgere ofret sine personlige interesser for nasjonens fremtid', isCorrect: false },
            ],
            solution: 'Slagordet uttrykte fascismens kjernetanke: staten var alt, individet ingenting. Det fantes ingen rettigheter, ingen frihet, ingen identitet utenfor staten. Dette var antidemokratisk og antiliberalt - parlamentarisme og personlig frihet ble foraktet.',
          },
        ],
      },
    },
    {
      id: 'historie-12-2-n-section3',
      type: 'text',
      content: `## Nazismen: Hitlers Tyskland

**Nazismen** - nasjonalsosialismen - tok fascismens grunnlag og la til noe enda mer dodelig: **raseteori** og **antisemittisme**.

**Adolf Hitler** var en mislykket kunstner fra Osterrike som hadde tjenestegjort som soldat i forste verdenskrig. Han ble bitter over Tysklands nederlag og skyldte pa "joder og kommunister". I 1920 tok han over ledelsen av NSDAP - det tyske nasjonalsosialistiske arbeiderparti.

Nazismens ideologi var en giftig blanding. Fra sosialdarwinismen hentet den tanken om at det fantes et **hierarki av raser** - med "arierne" (nordeuropeerne) pa toppen og andre raser som underlegne. **Antisemittismen** - jodehatet - var helt sentral: jodene ble fremstilt som roten til alt ondt, en kosmisk fiende som kontrollerte bade kapitalismen og kommunismen. **Lebensraum** - "livsrom" - betydde at Tyskland matte erobre land i ost for a gi plass til det "ariske" folket. Og **forerprinsippet** krevde absolutt lydighet mot Hitler.

Hvordan kom Hitler til makten? Det var en kombinasjon av okonomisk krise, politisk ustabilitet og strategisk dyktighet. Etter hyperinflasjonen i 1923 forsoke han et kupp som mislyktes. Men da den store depresjonen rammet i 1929, var hans time kommet. Arbeidsloshet og desperasjon fikk folk til a stromme til nazistene. I 1932 var NSDAP Tysklands storste parti.

I januar 1933 ble Hitler utnevnt til **rikskansler** - fullt lovlig. Men han brukte umiddelbart makten til a avvikle demokratiet. **Riksdagsbrannen** i februar 1933 ga paskudd for unntakslover. Opposisjonspartier ble forbudt, fagforeninger oppløst, mediene ensrettet. Pa noen maneder var den demokratiske Weimar-republikken erstattet av **Det tredje riket**.`,
    },
    {
      id: 'historie-12-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa nazismen og Hitlers vei til makten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-2-n-quiz3-q0',
            task: 'Hva var hovedforskjellen mellom fascisme og nazisme?',
            options: [
              { id: 'a', text: 'Fascismen var hovedsakelig nasjonalistisk, mens nazismen ogsa hadde et sterkt sosialistisk okonomisk program', isCorrect: false },
              { id: 'b', text: 'Nazismen hadde biologisk rasisme og antisemittisme som helt sentrale elementer, det hadde ikke fascismen opprinnelig', isCorrect: true },
              { id: 'c', text: 'Fascismen var begrenset til Italia og basert pa romersk tradisjon, mens nazismen var pangermansk og ekspansjonistisk', isCorrect: false },
              { id: 'd', text: 'Nazismen la storre vekt pa militarisme og erobring, mens fascismen fokuserte mer pa indre styring og korporativisme', isCorrect: false },
            ],
            solution: 'Bade fascismen og nazismen var totalitare og antidemokratiske. Men nazismen var grunnleggende rasistisk - hele ideologien bygget pa "arisk" overlegenhet og kampen mot jodene. Denne raselaren forte til Holocaust.',
          },
          {
            id: 'historie-12-2-n-quiz3-q1',
            task: 'Hva mente nazistene med "Lebensraum"?',
            options: [
              { id: 'a', text: 'Tanken om at alle tysktalende folk i Europa skulle samles i ett rike, inkludert Osterrike og Sudetenland', isCorrect: false },
              { id: 'b', text: 'Ideen om at Tyskland matte erobre land i ost for a gi plass til det "ariske" folket', isCorrect: true },
              { id: 'c', text: 'Kravet om at Tyskland skulle fa tilbake alle kolonier og territorier tapt i Versailles-traktaten', isCorrect: false },
              { id: 'd', text: 'Planene om a gjenreise det tyske keiserrikets grenser fra for 1914 og sikre Tysklands stormaktposisjon', isCorrect: false },
            ],
            solution: 'Lebensraum - "livsrom" - var Hitlers ide om at det "ariske" folket trengte mer plass, og at denne plassen matte tas i ost. De "underlegne" slaviske folkene skulle underkastes eller fjernes. Det var et program for erobring og folkemord.',
          },
          {
            id: 'historie-12-2-n-quiz3-q2',
            task: 'Hvordan avviklet Hitler demokratiet etter at han ble rikskansler i januar 1933?',
            options: [
              { id: 'a', text: 'Han fikk vedtatt fullmaktsloven (Ermachtigungsgesetz) som ga ham lovgivende makt, og avviklet gradvis demokratiet over flere ar', isCorrect: false },
              { id: 'b', text: 'Han erklarte unntakstilstand etter kommunistiske oppror og fikk militarets stotte til a opplose parlamentet', isCorrect: false },
              { id: 'c', text: 'Han brukte riksdagsbrannen som paskudd for unntakslover, forbod opposisjonen og ensrettet mediene', isCorrect: true },
              { id: 'd', text: 'Han gjennomforte en folkeavstemning der det tyske folket stemte for a gi ham eneveldig makt i en nasjonal krisesituasjon', isCorrect: false },
            ],
            solution: 'Hitler ble rikskansler fullt lovlig, men brukte umiddelbart makten til a avvikle demokratiet. Riksdagsbrannen i februar 1933 ga paskudd for unntakslover. Opposisjonspartier ble forbudt, fagforeninger opplost, mediene ensrettet. Pa noen maneder var Weimar-republikken erstattet av Det tredje riket.',
          },
          {
            id: 'historie-12-2-n-quiz3-q3',
            task: 'Hva var "forerprinsippet" i nazistisk ideologi?',
            options: [
              { id: 'a', text: 'At alle beslutninger i staten skulle folge en hierarkisk kommandokjede fra topp til bunn', isCorrect: false },
              { id: 'b', text: 'At Hitler som forer krevde absolutt lydighet og var ufeilbar', isCorrect: true },
              { id: 'c', text: 'At partiets ledelse kollektivt fattet beslutninger som Hitler deretter iverksatte som statsleder', isCorrect: false },
              { id: 'd', text: 'At den tyske nasjonen hadde rett til a velge sin forer gjennom interne partivalg i NSDAP', isCorrect: false },
            ],
            solution: 'Forerprinsippet krevde absolutt lydighet mot Hitler som den ufeilbare lederen. All makt og alle beslutninger utgikk fra ham. Ingen kunne utfordre hans autoritet. Dette var en del av lederkulten som gjorde Hitler til en nesten guddomlig figur i det nazistiske systemet.',
          },
        ],
      },
    },
    {
      id: 'historie-12-2-n-section4',
      type: 'text',
      content: `## Kommunismen: Stalins Sovjetunionen

Mens fascismen og nazismen var hoyre-ekstremisme, representerte **kommunismen** den motsatte enden av spekteret - i hvert fall i teorien. I praksis var Stalins Sovjetunionen like totalitart som Hitlers Tyskland.

**Vladimir Lenin** og bolsjevikene tok makten i Russland i 1917 gjennom en revolusjon. De baserte seg pa Karl Marx' teorier om at kapitalismen matte styrtes og erstattes med arbeiderklassens styre. Men Lenins versjon - **marxisme-leninismen** - la til at et lite, disiplinert parti matte lede revolusjonen pa arbeiderklassens vegne.

Etter Lenins dod i 1924 vant **Josef Stalin** maktkampen om lederskapet. Det som fulgte, var et av historiens mest brutale regimer.

**Kollektiviseringen** tvang millioner av bonder inn i kollektivbruk. De som motsatte seg - sarlig de sa kalte "kulakkene" (velstaende bonder) - ble deportert, fengslet eller skutt. Resultatet var katastrofalt: en kunstig hungersnod som tok livet av 5-7 millioner mennesker, sarlig i Ukraina. Denne tragedien kalles **Holodomor**.

**Industrialiseringen** ble presset frem gjennom "femarplaner" med brutale metoder. Millioner av mennesker ble tvunget til a arbeide under umenneskelige forhold for a bygge fabrikker og infrastruktur. Sovjetunionen ble industrialisert - men til en forferdelig pris.

Og sa kom **terroren**. Pa 1930-tallet, sarlig under "Den store terroren" 1936-38, ble millioner arrestert for virkelige eller innbilte forbrytelser. Mange ble henrettet etter skueprosesser. Enda flere ble sendt til **Gulag** - et enormt system av arbeidsleirer i Sibir og andre avsidesliggende steder. Minst 1,5 millioner dode i disse leirene. Ingen var trygge - selv Stalins naermeste medarbeidere kunne plutselig bli erklart "fiender av folket".`,
    },
    {
      id: 'historie-12-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Stalins Sovjetunionen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-2-n-quiz4-q0',
            task: 'Hva var konsekvensene av Stalins kollektivisering av jordbruket?',
            options: [
              { id: 'a', text: 'Rask industrialisering av landsbygda, men med store menneskelige kostnader i form av tvangsarbeid', isCorrect: false },
              { id: 'b', text: 'Hungersnod som tok 5-7 millioner liv, sarlig i Ukraina (Holodomor)', isCorrect: true },
              { id: 'c', text: 'Deportasjon av kulakkene til Sibir og lavere matproduksjon, men ingen storskala hungersnod', isCorrect: false },
              { id: 'd', text: 'Motstand fra bondene som forte til borgerkrigslignende tilstander pa den russiske landsbygda i flere ar', isCorrect: false },
            ],
            solution: 'Stalins tvungne kollektivisering var en katastrofe. Bonder som motsatte seg ble deportert eller drept. Resultatet var en kunstig hungersnod - Holodomor - som drepte 5-7 millioner mennesker, sarlig i Ukraina.',
          },
          {
            id: 'historie-12-2-n-quiz4-q1',
            task: 'Hva var Gulag?',
            options: [
              { id: 'a', text: 'Det hemmelige politiet i Sovjetunionen som overvakte befolkningen og arresterte "fiender av folket"', isCorrect: false },
              { id: 'b', text: 'Et enormt system av arbeidsleirer der millioner ble sendt og mange dode', isCorrect: true },
              { id: 'c', text: 'Stalins system av femarplaner for tvungen industrialisering av Sovjetunionen', isCorrect: false },
              { id: 'd', text: 'Den sentrale forvaltningsstrukturen i Sovjet som koordinerte kollektivbrukene og matdistribusjonen', isCorrect: false },
            ],
            solution: 'Gulag var et enormt system av arbeidsleirer i Sibir og andre avsidesliggende steder. Millioner ble arrestert for virkelige eller innbilte forbrytelser og sendt dit. Minst 1,5 millioner dode av hardt arbeid, kulde, sult og sykdom.',
          },
          {
            id: 'historie-12-2-n-quiz4-q2',
            task: 'Hva var "Den store terroren" pa 1930-tallet i Sovjet?',
            options: [
              { id: 'a', text: 'Stalins systematiske utrenskning av kulakkene og bondeklassen som motsatte seg kollektiviseringen', isCorrect: false },
              { id: 'b', text: 'En periode med væpnet motstand mot Stalins styre fra regionale militarledere og tidligere revolusjonare', isCorrect: false },
              { id: 'c', text: 'Hungersnoden i Ukraina (Holodomor) som Stalin brukte som middel for a knuse ukrainsk nasjonalisme', isCorrect: false },
              { id: 'd', text: 'En periode med massearrestasjoner, skueprosesser og henrettelser der ingen var trygge - selv Stalins naermeste', isCorrect: true },
            ],
            solution: 'Under "Den store terroren" 1936-38 ble millioner arrestert. Mange ble henrettet etter skueprosesser der de "tilsto" forbrytelser de ikke hadde begatt. Selv Stalins naermeste medarbeidere kunne plutselig bli erklart "fiender av folket". Ingen var trygge.',
          },
        ],
      },
    },
    {
      id: 'historie-12-2-n-section5',
      type: 'text',
      content: `## Propagandaens makt

Alle de totalitare regimene forstod propagandaens enorme betydning. De kontrollerte ikke bare hva folk fikk vite - de forsoke a forme selve virkelighetsoppfatningen.

Mediene ble fullstendig **statskontrollerte**. Aviser, radio og film formidlet bare det regimet tillot. Alternative informasjonskilder fantes ikke. I Sovjetunionen ble til og med fortiden omskrevet - "fiender" ble retusjert ut av fotografier, historieboker ble endret for a passe med gjeldende politisk linje.

**Lederkulten** var sentral. Stalin, Hitler og Mussolini ble fremstilt som nesten guddommelige figurer - ufeilbare genier som bare ville folkets beste. Bilder av dem hang overalt. Barn larte a elske Lederen for de larte a elske foreldrene sine.

**Massemotene** var imponerende skuespill. Nurnberg-rallyene i Tyskland, med tusenvis av uniformerte mennesker i perfekte formasjoner, fakkeltog og dramatisk musikk, skapte en overveldende folelse av makt og fellesskap. Hvem kunne tvile nar hundretusenvis jublet sammen?

Og propagandaen skapte alltid en **fiende**. I Tyskland var det jodene og kommunistene. I Sovjetunionen var det "klassefiender" og "kontrarevolusjonare". A ha en fiende ga mening til kampet og forklarte hvorfor ting gikk galt. Hvis matmangelen skyldtes "sabotorer", var det ikke regimets feil.

Det mest skremmende er at propagandaen ofte virket. Mange trodde virkelig pa ideologien - de var ikke bare redde, de var overbeviste. Andre tilpasset seg og lot som de trodde, til skillet mellom a late som og virkelig tro ble uklart. I et samfunn der alle later som de tror, blir det til slutt sant.`,
    },
    {
      id: 'historie-12-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-12-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa propagandaens rolle:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-2-n-quiz5-q0',
            task: 'Hvorfor var propaganda sa viktig for de totalitare regimene?',
            options: [
              { id: 'a', text: 'For a rettferdiggjore terrorbruken overfor omverdenen og hindre internasjonale sanksjoner', isCorrect: false },
              { id: 'b', text: 'For a kontrollere virkelighetsoppfatningen, skape legitimitet, mobilisere masser og definere fiender', isCorrect: true },
              { id: 'c', text: 'For a erstatte den tradisjonelle utdanningen og skape en ny generasjon som var lojal mot regimet', isCorrect: false },
              { id: 'd', text: 'For a holde befolkningen i konstant frykt og sikre at ingen turte a organisere motstand', isCorrect: false },
            ],
            solution: 'Propagandaen kontrollerte hva folk visste, skapte legitimitet og fellesskap, mobiliserte folk til aktiv deltakelse, og definerte fiender a skylde pa. Terror alene var ikke nok; regimene trengte at folk trodde.',
          },
          {
            id: 'historie-12-2-n-quiz5-q1',
            task: 'Hva var lederkulten, og hvilken funksjon hadde den?',
            options: [
              { id: 'a', text: 'Bruken av massemoter og parader for a vise regimets militare styrke og skremme potensielle motstandere', isCorrect: false },
              { id: 'b', text: 'Fremstillingen av Stalin, Hitler og Mussolini som nesten guddommelige, ufeilbare figurer for a skape lojalitet', isCorrect: true },
              { id: 'c', text: 'Systematisk historieomskriving der lederen ble fremstilt som den som alltid hadde hatt rett i alle sporsmal', isCorrect: false },
              { id: 'd', text: 'Ungdomsorganisasjonene som oppdro barn til a beundre og adlyde lederen fra tidlig alder', isCorrect: false },
            ],
            solution: 'Lederkulten fremstilte diktatoren som en nesten guddomlig, ufeilbar figur. Bilder hang overalt. Barn larte a elske Lederen for de larte a elske foreldrene. Dette skapte personlig lojalitet og gjorde det vanskeligere a kritisere regimet.',
          },
          {
            id: 'historie-12-2-n-quiz5-q2',
            task: 'Hvorfor skapte propagandaen alltid en fiende?',
            options: [
              { id: 'a', text: 'For a rettferdiggjore opprustning og militarisering av samfunnet overfor befolkningen', isCorrect: false },
              { id: 'b', text: 'For a samle befolkningen i nasjonalt fellesskap og overvinne de indre klassemotsetningene', isCorrect: false },
              { id: 'c', text: 'Fordi fienden ga mening til kampen og forklarte hvorfor ting gikk galt uten at regimet fikk skylden', isCorrect: true },
              { id: 'd', text: 'For a avlede oppmerksomheten fra regimets interne maktkamper og spenninger i partiledelsen', isCorrect: false },
            ],
            solution: 'A ha en fiende ga mening til kampen og forklarte problemer uten at regimet fikk skylden. I Tyskland var fienden jodene og kommunistene. I Sovjet var det "klassefiender". Hvis matmangelen skyldtes "sabotorer", var det ikke regimets feil.',
          },
          {
            id: 'historie-12-2-n-quiz5-q3',
            task: 'Hva var det mest skremmende ved propagandaens virkning, ifolge teksten?',
            options: [
              { id: 'a', text: 'At propagandaen var sa sofistikert at selv utenlandske observatorer ble lurt til a tro pa regimets suksess', isCorrect: false },
              { id: 'b', text: 'At barn som vokste opp under regimene ikke kjente til noen annen virkelighet og aldri stilte sporsmal', isCorrect: false },
              { id: 'c', text: 'At mange virkelig trodde pa ideologien - de var ikke bare redde, de var overbeviste', isCorrect: true },
              { id: 'd', text: 'At propagandaen skapte sa dyp mistillit mellom mennesker at ingen turde a snakke fritt, selv innen familien', isCorrect: false },
            ],
            solution: 'Det mest skremmende var at propagandaen ofte virket. Mange trodde virkelig pa ideologien. Andre tilpasset seg og lot som de trodde, til skillet mellom a late som og virkelig tro ble uklart. I et samfunn der alle later som de tror, blir det til slutt sant.',
          },
        ],
      },
    },
    {
      id: 'historie-12-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Totalitarismen var mellomkrigstidens morkeste arv. Fascisme, nazisme og kommunisme representerte ulike ideologier, men delte ambisjonen om total kontroll over menneskers liv, tanker og handlinger. De viste hvor langt mennesker kan ga nar de gir opp friheten for lofte om storhet, sikkerhet eller rettferdighet.

**Nokkelbegreper du na kjenner:**
- **Totalitarisme:** Et system der staten soker total kontroll over alle sider av livet
- **Fascisme:** Italiensk ideologi bygget pa nasjonalisme, lederdyrking og statens makt
- **Nazisme:** Tysk ideologi som la til biologisk rasisme og antisemittisme
- **Kommunisme (stalinisme):** Sovjetisk system med kollektivisering, industrialisering og terror
- **Lederkult:** Dyrking av lederen som ufeilbar og nesten guddomlig
- **Propaganda:** Systematisk kontroll over informasjon og meningsdannelse
- **Terror:** Bruk av frykt gjennom hemmelig politi, fangeleirer og vilkarlige arrestasjoner
- **Gulag:** Sovjetisk system av arbeidsleirer der millioner dode

**Det viktigste du tar med deg:**
Totalitare regimer kom til makten fordi de tilbod enkle svar i krisetider - noen a folge, noen a skylde pa, en mening med tilvarelsen. De viste at demokratiet aldri kan tas for gitt, og at frihet ma forsvares aktivt. A forsta hvordan totalitarismen fungerte, hjelper oss a gjenkjenne lignende tendenser i var egen tid.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.3 NARRATIV: Norge i mellomkrigstiden
// ============================================================================

export const CHAPTER_HISTORIE_12_3_NARRATIV: TextbookChapter = {
  id: 'historie-12-3-narrativ',
  courseId: 'historie',
  chapterNumber: '12.3',
  title: 'Norge i mellomkrigstiden',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan Norge navigerte gjennom økonomiske kriser og politiske spenninger - og beholdt demokratiet.',
  estimatedMinutes: 45,
  competenceGoals: ['velferdsutviklingen i Norge på 1900-tallet'],
  linkedChapterId: 'historie-12-3',
  content: [
    {
      id: 'historie-12-3-n-intro',
      type: 'text',
      content: `## Et lite land i en farlig tid

Mens demokratiet kollapset i land etter land pa 1930-tallet, holdt det stand i Norge. Mens tyskere, italienere og russere marsjerte i takt bak diktatorer, fortsatte nordmenn a stemme ved frie valg. Hvordan var det mulig?

Svaret er ikke enkelt. Norge slapp ikke unna krisene som rammet Europa - vi hadde var del av okonomisk kaos, arbeidsledighet og politisk spenning. Vi hadde til og med var egen fascistbevegelse. Men noe var annerledes. Noen valg ble tatt - av politikere, av organisasjoner, av vanlige folk - som pekte i en annen retning.

La oss folge Norges vei gjennom mellomkrigstiden. Det er en historie om kriser og konflikter, men ogsa om kompromisser som la grunnlaget for det moderne Norge.`,
    },
    {
      id: 'historie-12-3-n-section1',
      type: 'text',
      content: `## Okonomisk berg-og-dal-bane

Norge hadde tjent godt pa forste verdenskrig. Som noytral nasjon hadde vi solgt varer til begge sider. Men freden brakte problemer. Den korte etterkrigsbonomen snudde raskt til krise.

Fra 1920 rammet nedgangstidene hardt. Prisene falt, bedrifter gikk konkurs, arbeidsledigheten steg. Og sa kom **paripolitikken** - regjeringens beslutning om a bringe den norske kronen tilbake til forkrigsverdi mot gull. Dette hortes kanskje fornuftig ut, men konsekvensene var brutale.

For a fa kronens verdi opp, matte prisene ned. Og nar prisene faller, ma bedriftene kutte kostnader - ofte ved a si opp folk eller kutte lonner. De som hadde gjeld, fikk det verst: gjelden ble jo relativt storre nar pengene ble mer verdt. Bonder og smafolk som hadde lant for a kjope gard eller starte bedrift, slet hardt.

Sa kom **bankkrisen** pa 1920-tallet. Banker som hadde lant ut til spekulanter og bedrifter i trobb el, begynte a vakle. Staten matte gripe inn for a hindre total kollaps. Tilliten til det finansielle systemet var rystet.

Og akkurat da folk begynte a tro at det verste var over, slo **den store depresjonen** inn i 1930. Igjen steg arbeidsledigheten. I byggebransjen var over 30 prosent uten jobb. Fiskere fikk ikke solgt fisken sin. Bonder fikk ikke dekket gjelden. Over hele landet var det familier som slet for a fa endene til a motes.

I denne desperasjonen var det noen som sa at demokratiet var problemet. At det trengtes en sterk mann som kunne rydde opp. I 1931 kom det til apent sammenstot mellom arbeidere og politi i Skien - **Menstadslaget**. Noen fryktet at Norge stod pa randen av revolusjon eller fascisme.`,
    },
    {
      id: 'historie-12-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Norges okonomiske kriser i mellomkrigstiden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-3-n-quiz1-q0',
            task: 'Hva var paripolitikken, og hvorfor var den sa problematisk?',
            options: [
              { id: 'a', text: 'En inflasjonspolitikk der Norges Bank trykte mer penger for a stimulere okonomien etter krigen', isCorrect: false },
              { id: 'b', text: 'En politikk for a gjenopprette kronens forkrigsverdi, som krevde deflasjon og skapte arbeidsledighet og gjeldskrise', isCorrect: true },
              { id: 'c', text: 'En politikk for a knytte den norske kronen til det britiske pundet for a stabilisere valutaen', isCorrect: false },
              { id: 'd', text: 'En innstrammingspolitikk der staten kuttet utgifter og okte skattene for a betale ned krigsgjelden', isCorrect: false },
            ],
            solution: 'Paripolitikken var forsok pa a bringe kronen tilbake til forkrigsverdi mot gull. Dette krevde deflasjon - fallende priser - som skapte arbeidsledighet, bedriftskonkurser og gjeldskrise.',
          },
          {
            id: 'historie-12-3-n-quiz1-q1',
            task: 'Hva var Menstadslaget i 1931?',
            options: [
              { id: 'a', text: 'En streik blant havnearbeidere i Oslo som lammet eksportnaringen i flere uker', isCorrect: false },
              { id: 'b', text: 'Et sammenstot mellom arbeidere og politi/militar ved Menstad Bruk i Skien', isCorrect: true },
              { id: 'c', text: 'En stor demonstrasjon i Trondheim der arbeidere krevde statlige krisetiltak mot arbeidsledigheten', isCorrect: false },
              { id: 'd', text: 'Et oppgjor mellom LO og arbeidsgiverne som forte til generalstreik i den norske industrien', isCorrect: false },
            ],
            solution: 'Menstadslaget var et sammenstot mellom arbeidere som forsoke a hindre streikebrytere og politi/militar ved Menstad Bruk i Skien i 1931. Det ble et symbol pa den dype klassekonflikten i mellomkrigstiden og fikk mange til a frykte at Norge stod pa randen av revolusjon.',
          },
          {
            id: 'historie-12-3-n-quiz1-q2',
            task: 'Hvilke grupper ble hardest rammet av paripolitikken?',
            options: [
              { id: 'a', text: 'De som hadde gjeld, som bonder og smafolk som hadde lant for a kjope gard eller starte bedrift', isCorrect: true },
              { id: 'b', text: 'Industriarbeidere som mistet jobbene sine da bedrifter matte legge ned pa grunn av fallende ettersporsler', isCorrect: false },
              { id: 'c', text: 'Fiskere og sjøfolk som var avhengige av eksport til markeder som kollapset etter krigen', isCorrect: false },
              { id: 'd', text: 'Sparerne i middelklassen som sa verdien av innskuddene sine falle da bankene gikk konkurs', isCorrect: false },
            ],
            solution: 'De som hadde gjeld fikk det verst. Nar prisene falt ble gjelden relativt storre - pengene ble mer verdt, men gjelden forble den samme. Bonder og smafolk som hadde lant for a kjope gard eller starte bedrift slet hardt med a betjene gjelden sin.',
          },
        ],
      },
    },
    {
      id: 'historie-12-3-n-section2',
      type: 'text',
      content: `## Politisk spenning og klassekamp

Mellomkrigstiden i Norge var preget av dyp politisk polarisering. Det var som om samfunnet var delt i to leirer - arbeiderne pa den ene siden, borgerlige og bonder pa den andre.

**Det norske Arbeiderparti** hadde gjennomgatt en radikal forvandling. I 1918 vedtok partiet et revolusjonert program og meldte seg inn i **Komintern** - den kommunistiske internasjonalen styrt fra Moskva. Lederne snakket om a styrte kapitalismen gjennom revolusjon, ikke bare vinne valg.

Men det varte ikke. I 1923 brot partiet med Komintern fordi de nektet a akseptere Moskvas kontroll. De mest revolusjonare dannet **Norges Kommunistiske Parti (NKP)**. Og utover 1920- og 1930-tallet ble hovedpartiet gradvis mer moderat. De ga opp revolusjonsretorikken og aksepterte demokratiske spilleregler.

Pa den andre siden stod de **borgerlige partiene** - Hoyre, Venstre og Bondepartiet - som vekslet pa a styre gjennom ustabile regjeringer. De var dypt bekymret for arbeiderbevegelsen og var villige til a bruke makt for a holde orden.

**Menstadslaget** i 1931 ble et symbol pa denne konflikten. Ved Menstad Bruk i Skien forsoke arbeidere a hindre streikebrytere. Politi og militare ble satt inn. Det kom til sammenstot. Bilder av politi med batonger mot arbeidere sjokkerte mange. Var Norge pa vei mot borgerkrig?

Og sa var det **Nasjonal Samling**. I 1933 grunnla **Vidkun Quisling** dette partiet etter fascistisk modell. Quisling hadde vart forsvarsminister for Bondepartiet og var en respektert skikkelse. Han lovte a bekjempe kommunismen og gjenreise nasjonal storhet. Men NS fikk aldri mer enn 2 prosent ved valg. Nordmenn var ikke interessert i fascisme.`,
    },
    {
      id: 'historie-12-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa politisk spenning i mellomkrigstidens Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-3-n-quiz2-q0',
            task: 'Hvordan endret Det norske Arbeiderparti seg fra 1918 til 1930-tallet?',
            options: [
              { id: 'a', text: 'Det beholdt sin revolusjonare linje, men brot med Komintern for a samarbeide med de borgerlige partiene', isCorrect: false },
              { id: 'b', text: 'Det splittet seg i flere fraksjoner og mistet gradvis politisk innflytelse utover 1920-tallet', isCorrect: false },
              { id: 'c', text: 'Det gikk fra a vare revolusjonart og Komintern-tilsluttet til a bli et moderat, demokratisk reformparti', isCorrect: true },
              { id: 'd', text: 'Det ble mer radikalt etter den store depresjonen og krevde revolusjon pa nytt i 1930-arene', isCorrect: false },
            ],
            solution: 'Arbeiderpartiet gjennomgikk en dramatisk forvandling. I 1918 var det revolusjonart og tilsluttet Komintern. I 1923 brot det med Moskva. Utover 1930-tallet ble det stadig mer moderat og aksepterte demokratiske spilleregler.',
          },
          {
            id: 'historie-12-3-n-quiz2-q1',
            task: 'Hva var Komintern, og hvorfor brot Arbeiderpartiet med den?',
            options: [
              { id: 'a', text: 'Den sosialistiske internasjonalen; bruddet kom fordi Arbeiderpartiet onsket raskere revolusjon enn det organisasjonen tillot', isCorrect: false },
              { id: 'b', text: 'Den kommunistiske internasjonalen styrt fra Moskva; bruddet kom fordi partiet nektet a akseptere Moskvas kontroll', isCorrect: true },
              { id: 'c', text: 'Den kommunistiske internasjonalen; bruddet kom fordi Moskva krevde at partiet skulle stotte Sovjets utenrikspolitikk', isCorrect: false },
              { id: 'd', text: 'Et samarbeidsorgan for arbeiderbevegelsene i Norden; bruddet kom av uenighet om revolusjonar strategi', isCorrect: false },
            ],
            solution: 'Komintern var den kommunistiske internasjonalen styrt fra Moskva. Arbeiderpartiet brot med den i 1923 fordi de nektet a akseptere Moskvas detaljerte kontroll over norsk partipolitikk. De mest revolusjonare dannet i stedet Norges Kommunistiske Parti (NKP).',
          },
          {
            id: 'historie-12-3-n-quiz2-q2',
            task: 'Hvor stor oppslutning fikk Nasjonal Samling (NS) ved valg i Norge?',
            options: [
              { id: 'a', text: 'Rundt 8-10 prosent ved valget i 1936, omtrent som fascistpartiene i andre skandinaviske land', isCorrect: false },
              { id: 'b', text: 'Opp mot 5 prosent ved valget i 1933, men synkende oppslutning deretter', isCorrect: false },
              { id: 'c', text: 'Aldri mer enn 2 prosent', isCorrect: true },
              { id: 'd', text: 'Rundt 3-4 prosent, nok til a fa noen representanter pa Stortinget', isCorrect: false },
            ],
            solution: 'NS fikk aldri mer enn 2 prosent ved valg. Quislings fascistiske parti appellerte ikke til nordmenn, til tross for at de lovte a bekjempe kommunismen og gjenreise nasjonal storhet. Nordmenn var rett og slett ikke interessert i fascisme.',
          },
        ],
      },
    },
    {
      id: 'historie-12-3-n-section3',
      type: 'text',
      content: `## Kriseforliket: Kompromisset som reddet demokratiet

Sa skjedde noe bemerkelsesverdig. I 1935 inngikk to partier som hadde sett hverandre som fiender - **Arbeiderpartiet** og **Bondepartiet** - et kompromiss som skulle forandre norsk historie.

**Kriseforliket** var egentlig ganske enkelt: Bondepartiet lovte a stotte Arbeiderpartiets sosiale reformer og krisepolitikk. Til gjengjeld lovte Arbeiderpartiet a stotte landbrukspolitikk som hjalp bondene. Begge parter ga noe og fikk noe.

Men betydningen var enorm. For forste gang fikk Arbeiderpartiet en stabil regjeringsposisjon. **Johan Nygaardsvold** ble statsminister - en stilling han skulle beholde til langt inn i andre verdenskrig. Og kriseforliket demonstrerte at de to storste klassene i samfunnet - arbeidere og bonder - kunne samarbeide i stedet for a bekjempe hverandre.

Samme ar ble **Hovedavtalen** inngatt mellom LO (arbeidernes organisasjon) og NAF (arbeidsgivernes organisasjon). Dette var en avtale om spilleregler i arbeidslivet. Streik og lockout skulle vare siste utvei. Konflikter skulle loses gjennom forhandlinger. Det var slutt pa den apne klassekampen.

Disse to avtalene - kriseforliket og Hovedavtalen - la grunnlaget for det vi kaller **den norske modellen**. Tanken om at ulike interesser i samfunnet kan samarbeide til felles beste, i stedet for a bekjempe hverandre til en av dem vinner. Det er et kompromiss som har preget norsk politikk siden.

Regjeringen Nygaardsvold begynte ogsa a fore aktiv **krisepolitikk** - a bruke statens penger for a skape arbeidsplasser og stimulere okonomien. Det var ikke nok til a lose alle problemer, men det ga folk hap om at noen gjorde noe. Og hap er viktig i krisetider.`,
    },
    {
      id: 'historie-12-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa kriseforliket og den norske modellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-3-n-quiz3-q0',
            task: 'Hvorfor var kriseforliket i 1935 sa viktig for norsk historie?',
            options: [
              { id: 'a', text: 'Fordi det ga Arbeiderpartiet flertall alene og mulighet til a gjennomfore sin politikk uten kompromisser', isCorrect: false },
              { id: 'b', text: 'Fordi det viste at arbeidere og bonder kunne samarbeide, dempet klassekonflikten, og la grunnlaget for den norske modellen', isCorrect: true },
              { id: 'c', text: 'Fordi det innforte de forste trygdeordningene og dermed begynnelsen pa den norske velferdsstaten', isCorrect: false },
              { id: 'd', text: 'Fordi det samlet alle politiske partier bak en felles krisepolitikk og skapte nasjonal enhet', isCorrect: false },
            ],
            solution: 'Kriseforliket viste at arbeidere og bonder kunne finne felles grunn. Det dempet klassekonflikten og la grunnlaget for kompromiss og samarbeid som har preget norsk politikk siden.',
          },
          {
            id: 'historie-12-3-n-quiz3-q1',
            task: 'Hvilke to partier inngikk kriseforliket?',
            options: [
              { id: 'a', text: 'Arbeiderpartiet og Venstre', isCorrect: false },
              { id: 'b', text: 'Arbeiderpartiet og Bondepartiet', isCorrect: true },
              { id: 'c', text: 'Arbeiderpartiet og Hoyre', isCorrect: false },
              { id: 'd', text: 'Venstre og Bondepartiet', isCorrect: false },
            ],
            solution: 'Kriseforliket ble inngatt mellom Arbeiderpartiet og Bondepartiet - to partier som hadde sett hverandre som fiender. Bondepartiet stottet Arbeiderpartiets sosiale reformer, og Arbeiderpartiet stottet landbrukspolitikk som hjalp bondene.',
          },
          {
            id: 'historie-12-3-n-quiz3-q2',
            task: 'Hva var Hovedavtalen fra 1935?',
            options: [
              { id: 'a', text: 'En tariffavtale mellom LO og NAF som fastsatte minstelonn og arbeidstid for alle norske arbeidere', isCorrect: false },
              { id: 'b', text: 'En politisk avtale mellom regjeringen og næringslivet om statlig krisetiltak mot arbeidsledigheten', isCorrect: false },
              { id: 'c', text: 'En avtale mellom LO og NAF om spilleregler i arbeidslivet der konflikter skulle loses gjennom forhandlinger', isCorrect: true },
              { id: 'd', text: 'En lov vedtatt av Stortinget som regulerte forholdet mellom arbeidsgiver og arbeidstaker og innforte tvungen megling', isCorrect: false },
            ],
            solution: 'Hovedavtalen ble inngatt mellom LO (arbeidernes organisasjon) og NAF (arbeidsgivernes organisasjon). Den fastslo spilleregler i arbeidslivet: streik og lockout skulle vare siste utvei, konflikter skulle loses gjennom forhandlinger. Det var slutt pa den apne klassekampen.',
          },
          {
            id: 'historie-12-3-n-quiz3-q3',
            task: 'Hva er "den norske modellen"?',
            options: [
              { id: 'a', text: 'Et system der staten regulerer okonomien strengt og sikrer lik fordeling gjennom hoye skatter og overforinger', isCorrect: false },
              { id: 'b', text: 'Tanken om at ulike interesser i samfunnet - stat, arbeid og kapital - kan samarbeide til felles beste', isCorrect: true },
              { id: 'c', text: 'En velferdsmodell der fagforeningene har vetorett over naringspolitikken og sikrer arbeidernes interesser', isCorrect: false },
              { id: 'd', text: 'Et kompromiss der arbeiderpartiene styrer, men aksepterer markedsokonomien i bytte mot sosiale reformer', isCorrect: false },
            ],
            solution: 'Den norske modellen er tanken om at ulike interesser i samfunnet kan samarbeide i stedet for a bekjempe hverandre. Trepartssamarbeidet mellom stat, arbeid og kapital har rotter tilbake til kriseforliket og Hovedavtalen fra 1935.',
          },
        ],
      },
    },
    {
      id: 'historie-12-3-n-section4',
      type: 'text',
      content: `## Hvorfor overlevde demokratiet i Norge?

Nar vi ser pa mellomkrigstiden, er det naerliggende a sporre: Hvorfor gikk det sa galt i Tyskland og sa mye bedre i Norge? Begge land hadde okonomiske kriser, politisk spenning og fascistiske bevegelser. Likevel kollapset demokratiet det ene stedet og holdt stand det andre.

Det finnes ingen enkel forklaring, men flere faktorer spilte inn. Den **okonomiske krisen** var alvorlig i Norge, men ikke sa katastrofal som i Tyskland. Vi slapp hyperinflasjonen som odelade den tyske middelklassen. Og nar krisen kom, grep regjeringen inn med krisepolitikk som ga folk hap.

**Politiske valg** betod mye. Arbeiderpartiet valgte reformisme fremfor revolusjon. Bondepartiet valgte samarbeid fremfor konfrontasjon. Moderate politikere pa begge sider var villige til a innga kompromisser. I Tyskland bekjempet sosialdemokrater og kommunister hverandre like mye som nazistene.

**Historiske tradisjoner** spilte inn. Norge hadde en lang demokratisk tradisjon fra 1814, og parlamentarismen var etablert siden 1884. Det fantes ingen tradisjon for militarkupp eller politisk vold. I Tyskland var Weimar-republikken ny og svak, og mange i eliten - militaret, naeringslivet, embetsverket - hadde aldri akseptert demokratiet.

**Samfunnsstrukturen** var ogsa annerledes. Norge var et relativt homogent samfunn uten de store minoritetskonfliktene som preget sentral-Europa. Sterke organisasjoner som LO og bondeorganisasjonene kanaliserte misnøye inn i konstruktive baner, i stedet for a la den eksplodere.

Og sa var det rett og slett **timing og flaks**. NS kom for sent og fikk aldri tak pa en okonomisk krise alvorlig nok til a radikalisere befolkningen. Quisling manglet Hitlers karisma. Nordmenn var ikke mottakelige for fascismens budskap.`,
    },
    {
      id: 'historie-12-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa hvorfor demokratiet overlevde i Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-3-n-quiz4-q0',
            task: 'Hvorfor fikk Nasjonal Samling aldri gjennomslag i Norge?',
            options: [
              { id: 'a', text: 'Fordi de borgerlige partiene allerede dekte nasjonalistiske velgere og ga lite rom for et nytt hoyreparti', isCorrect: false },
              { id: 'b', text: 'Fordi Norge hadde sterkere demokratiske tradisjoner, kriseforliket ga hap, og fascismens budskap appellerte ikke til nordmenn', isCorrect: true },
              { id: 'c', text: 'Fordi den sterke arbeiderbevegelsen og LO mobiliserte aktivt mot fascismen og hindret NS i a fa fotfeste', isCorrect: false },
              { id: 'd', text: 'Fordi Quisling manglet organisatoriske evner og partiet var preget av interne stridigheter og splittelser', isCorrect: false },
            ],
            solution: 'Norge hadde lange demokratiske tradisjoner, kriseforliket ga folk hap om forbedring, Quisling manglet karisma, og fascismens budskap appellerte ikke til nordmenn.',
          },
          {
            id: 'historie-12-3-n-quiz4-q1',
            task: 'Hvilke historiske tradisjoner beskyttet det norske demokratiet?',
            options: [
              { id: 'a', text: 'En sterk rettsstattradisjon og uavhengig domstolssystem som hindret maktmisbruk', isCorrect: false },
              { id: 'b', text: 'En demokratisk tradisjon fra Grunnloven 1814 og parlamentarisme siden 1884', isCorrect: true },
              { id: 'c', text: 'Lokalt selvstyre og sterke kommuner som hadde gitt folk demokratisk erfaring siden 1837', isCorrect: false },
              { id: 'd', text: 'Allmenn stemmerett innfort tidlig (1898 for menn) som ga bred politisk deltakelse i befolkningen', isCorrect: false },
            ],
            solution: 'Norge hadde en lang demokratisk tradisjon fra Grunnloven i 1814, og parlamentarismen var etablert siden 1884. Det fantes ingen tradisjon for militarkupp eller politisk vold, i motsetning til mange andre europeiske land.',
          },
          {
            id: 'historie-12-3-n-quiz4-q2',
            task: 'Hva var en viktig forskjell mellom Norges og Tysklands situasjon som bidro til ulike utfall?',
            options: [
              { id: 'a', text: 'Norge hadde sterkere fagforeninger og arbeiderbevegelse som kunne kanalisere misnøyen konstruktivt', isCorrect: false },
              { id: 'b', text: 'Tyskland hadde dype minoritetskonflikter og grensetvister etter Versailles som naeret nasjonalismen', isCorrect: false },
              { id: 'c', text: 'Den okonomiske krisen var alvorlig i Norge, men ikke sa katastrofal som i Tyskland med hyperinflasjon og massearbeidsledighet', isCorrect: true },
              { id: 'd', text: 'Norges noytralitet under forste verdenskrig hadde spart landet for de traumene som preget tyske krigsveteraner', isCorrect: false },
            ],
            solution: 'Norge slapp hyperinflasjonen som odela den tyske middelklassen. Selv om den okonomiske krisen var alvorlig, var den ikke sa katastrofal. I tillegg grep norske politikere inn med krisepolitikk, mens Weimar-republikken virket handlingslammet.',
          },
        ],
      },
    },
    {
      id: 'historie-12-3-n-section5',
      type: 'text',
      content: `## Arven fra mellomkrigstiden

Da andre verdenskrig brøt ut i 1939, var Norge bedre rustet politisk enn mange andre land. Kriseforliket hadde skapt grunnlag for nasjonalt samarbeid. Arbeiderpartiet var et ansvarlig styringsparti. Klassekampen var dempet. Det fantes en bred enighet om demokratiets verdi.

Men det var ogsa skyggesider. Forsvaret var forsømt - nordmenn hadde trodd at noytraliteten ville beskytte dem, som den hadde gjort i forste verdenskrig. Og selv om NS var lite, fantes det folk som sympatiserte med fascismen. Noen av dem skulle bli kollaboratorer under okkupasjonen.

**Laerdommene fra mellomkrigstiden** preget Norge i tiårene som fulgte. Erfaringen med okonomisk krise og politisk radikalisering forte til at etterkrigstidens politikere prioriterte full sysselsetting og sosial sikkerhet. Velferdsstaten ble bygget ut for å sikre at ingen skulle oppleve den desperasjonen som hadde truet demokratiet.

Trepartssamarbeidet mellom stat, arbeid og kapital - med rotter tilbake til Hovedavtalen - ble institusjonalisert. Konflikt ble erstattet med forhandlinger. Den "norske modellen" som vi kjenner i dag, har sine røtter i kompromissene fra 1935.

Og kanskje viktigst: Bevisstheten om at demokratiet ikke kan tas for gitt. At det krever aktivt forsvar, kompromissvilje og evne til å finne losninger som gir folk hap. Mellomkrigstiden viste hva som kan skje når disse tingene svikter.`,
    },
    {
      id: 'historie-12-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-12-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa mellomkrigstidens arv for Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-3-n-quiz5-q0',
            task: 'Hvordan pavirket erfaringene fra mellomkrigstiden norsk politikk etter andre verdenskrig?',
            options: [
              { id: 'a', text: 'De forte til massiv opprustning og NATO-medlemskap for a sikre at Norge aldri igjen ble overfalt', isCorrect: false },
              { id: 'b', text: 'De forte til prioritering av full sysselsetting, velferdsstat og trepartssamarbeid for a unnga ny krise og radikalisering', isCorrect: true },
              { id: 'c', text: 'De forte til at Arbeiderpartiet fikk enerett pa a styre og dominerte norsk politikk uten reell opposisjon', isCorrect: false },
              { id: 'd', text: 'De forte til at Norge satset pa internasjonalt samarbeid gjennom FN og nordisk samarbeid for a sikre freden', isCorrect: false },
            ],
            solution: 'Politikerne husket at okonomisk krise kunne true demokratiet. Derfor prioriterte de full sysselsetting og bygde ut velferdsstaten. Trepartssamarbeidet ble institusjonalisert.',
          },
          {
            id: 'historie-12-3-n-quiz5-q1',
            task: 'Hva var Norges storste svakhet da andre verdenskrig brøt ut i 1939?',
            options: [
              { id: 'a', text: 'At de politiske motsetningene fra mellomkrigstiden fortsatt splittet nasjonen og svekket forsvarsviljen', isCorrect: false },
              { id: 'b', text: 'At forsvaret var forsomt fordi nordmenn trodd noytraliteten ville beskytte dem', isCorrect: true },
              { id: 'c', text: 'At Norge ikke hadde allierte og stod alene uten stotte fra Storbritannia eller andre vestmakter', isCorrect: false },
              { id: 'd', text: 'At regjeringen Nygaardsvold hadde prioritert sosiale reformer fremfor forsvar i budsjettene sine', isCorrect: false },
            ],
            solution: 'Norges storste svakhet var at forsvaret var forsomt. Nordmenn hadde trodd at noytraliteten ville beskytte dem, slik den hadde gjort under forste verdenskrig. Denne troen viste seg a vare feilaktig da Tyskland angrep i april 1940.',
          },
        ],
      },
    },
    {
      id: 'historie-12-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Norge navigerte gjennom mellomkrigstidens stormer uten a miste demokratiet. Det var ikke fordi vi var immune mot kriser eller ekstremisme, men fordi en kombinasjon av faktorer - historiske tradisjoner, politiske valg og heldige omstendigheter - pekte i en annen retning enn i mange andre europeiske land.

**Nokkelbegreper du na kjenner:**
- **Paripolitikken:** Politikk for a gjenopprette kronens verdi, med negative konsekvenser
- **Menstadslaget (1931):** Symbol pa klassekonflikten i mellomkrigstiden
- **Kriseforliket (1935):** Kompromiss mellom Arbeiderpartiet og Bondepartiet
- **Hovedavtalen (1935):** Avtale om spilleregler i arbeidslivet mellom LO og NAF
- **Johan Nygaardsvold:** Statsminister 1935-1945
- **Nasjonal Samling (NS):** Norsk fascistparti grunnlagt av Quisling i 1933
- **Den norske modellen:** Samarbeid mellom stat, arbeid og kapital

**Det viktigste du tar med deg:**
Demokratiets skjebne er ikke forutbestemt av okonomiske forhold. Politiske valg betyr noe. I Norge valgte sentrale aktorer kompromiss fremfor konfrontasjon. Arbeiderpartiet valgte reformisme. Bondepartiet valgte samarbeid. Kriseforliket viste at det var mulig a finne losninger som ga folk hap. Denne erfaringen la grunnlaget for det moderne Norge og minner oss om at demokrati krever aktivt vedlikehold.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.4 NARRATIV: Veien mot ny verdenskrig
// ============================================================================

export const CHAPTER_HISTORIE_12_4_NARRATIV: TextbookChapter = {
  id: 'historie-12-4-narrativ',
  courseId: 'historie',
  chapterNumber: '12.4',
  title: 'Veien mot ny verdenskrig',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan Hitlers aggressive politikk og Vestmaktenes ettergivenhet førte verden mot en ny katastrofe.',
  estimatedMinutes: 45,
  competenceGoals: ['ideologier, undertrykkelse, terror og Holocaust'],
  linkedChapterId: 'historie-12-4',
  content: [
    {
      id: 'historie-12-4-n-intro',
      type: 'text',
      content: `## Tjue ar med fred - og sa?

"Krigen for a avslutte alle kriger" - slik ble forste verdenskrig kalt. Men bare tjue ar senere brot en enda mer odeleggende krig ut. Hvordan kunne det skje? Hadde ikke menneskeheten lart noe?

Svaret er komplisert. Det handler om en aggressiv diktator med grandiose planer, om demokratier som var desperate etter a unnga ny krig, og om et internasjonalt system som ikke klarte a stoppe aggresjon. Steg for steg, avtale for avtale, ble grensene for hva som var akseptabelt flyttet - helt til det ikke var noen grenser igjen.

La oss folge veien fra Hitlers maktovertagelse i 1933 til krigsutbruddet i 1939. Det er en historie om feilvurderinger, naivitet og kynisme - men ogsa om dilemmaer som var reelle nok for dem som stod midt i dem.`,
    },
    {
      id: 'historie-12-4-n-section1',
      type: 'text',
      content: `## Hitlers mal: Versailles, Anschluss, Lebensraum

For a forsta veien mot krig, ma vi forsta hva Hitler faktisk ville. Hans mal var ikke hemmelige - han hadde skrevet dem ned i **"Mein Kampf"** (1925), boken han skrev i fengsel etter det mislykkede kupforsoket.

Det forste malet var a **rive opp Versailles-traktaten**. Denne fredsavtalen fra 1919, som Hitler og mange tyskere opplevde som en nasjonal ydmykelse, begrenset Tysklands militar, fratok dem territorier og pakla enorme krigserstatninger. Hitler lovte a gjenreise Tysklands storhet ved a trosse disse begrensningene.

Det andre malet var **Anschluss** - sammenslutning av alle "tyskere" i ett rike. Det betydde Osterrike, men ogsa de tyske minoritetene i Tsjekkoslovakia, Polen og andre land. Versailles hadde forbudt Osterrikes tilslutning til Tyskland, men Hitler brydde seg ikke om hva Versailles sa.

Det tredje og mest skremmende malet var **Lebensraum** - "livsrom". Hitler mente at det "ariske" folket trengte mer plass, og at denne plassen matte tas i ost - i Sovjetunionen og Ost-Europa. De "underlegne" slaviske folkene skulle underkastes eller fjernes. Dette var ikke bare nasjonalisme; det var et program for erobring og folkemord.

Hitler var en mester i a kombinere diplomati og trusler. Han viste nar han skulle vare sjarmaerende og nar han skulle true. Han testet grenser og rykket frem nar motstand uteble. Hver seier gjorde ham modigere og mer overbevist om sin egen ufeilbarlighet.`,
    },
    {
      id: 'historie-12-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Hitlers utenrikspolitiske mal:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-4-n-quiz1-q0',
            task: 'Hva var Hitlers tre hovedmal i utenrikspolitikken?',
            options: [
              { id: 'a', text: 'A ruste opp militaret, gjenvinne de tapte koloniene i Afrika, og etablere Tyskland som verdens ledende stormakt', isCorrect: false },
              { id: 'b', text: 'A rive opp Versailles, samle alle tyskere (Anschluss), og erobre "livsrom" i ost', isCorrect: true },
              { id: 'c', text: 'A alliere seg med Italia og Japan, knuse Sovjetunionen, og opprette et nytt europeisk ordningssystem under tysk ledelse', isCorrect: false },
              { id: 'd', text: 'A fjerne krigserstatningene, remilitarisere Tyskland, og sikre tyske handelsinteresser gjennom bilaterale avtaler', isCorrect: false },
            ],
            solution: 'Hitlers tre hovedmal var a rive opp Versailles-traktaten, samle alle tyskere i ett rike (Anschluss), og erobre "livsrom" (Lebensraum) i Ost-Europa. Disse malene innebar uunngaelig krig.',
          },
          {
            id: 'historie-12-4-n-quiz1-q1',
            task: 'I hvilken bok hadde Hitler skrevet ned sine mal allerede i 1925?',
            options: [
              { id: 'a', text: 'Das Kapital', isCorrect: false },
              { id: 'b', text: 'Mein Kampf', isCorrect: true },
              { id: 'c', text: 'Der Mythus des 20. Jahrhunderts', isCorrect: false },
              { id: 'd', text: 'Zweites Buch', isCorrect: false },
            ],
            solution: 'Hitler skrev ned sine mal i "Mein Kampf" (Min kamp), som han forfattet i fengsel etter det mislykkede kupporsoket i 1923. Boken la ikke skjul pa planene om a rive opp Versailles, gjennomfore Anschluss og erobre Lebensraum.',
          },
          {
            id: 'historie-12-4-n-quiz1-q2',
            task: 'Hva var Anschluss?',
            options: [
              { id: 'a', text: 'Hitlers plan om a erobre "livsrom" i Ost-Europa for det tyske folket', isCorrect: false },
              { id: 'b', text: 'Innlemmelsen av Sudetenland i Tyskland etter Munchen-avtalen i 1938', isCorrect: false },
              { id: 'c', text: 'Sammenslutningen av alle "tyskere" i ett rike, sarlig Osterrike og tyske minoriteter', isCorrect: true },
              { id: 'd', text: 'Gjenopprettelsen av Tysklands forkrigsgrenser slik de var for Versailles-traktaten', isCorrect: false },
            ],
            solution: 'Anschluss betydde sammenslutning av alle "tyskere" i ett rike. Det innebar forst og fremst Osterrike, men ogsa de tyske minoritetene i Tsjekkoslovakia, Polen og andre land. Versailles hadde forbudt Osterrikes tilslutning til Tyskland, men Hitler brydde seg ikke.',
          },
        ],
      },
    },
    {
      id: 'historie-12-4-n-section2',
      type: 'text',
      content: `## Steg for steg: Hitlers marsj mot krig

Hitler visste at han ikke kunne na sine mal pa en gang. Han matte ga steg for steg, teste grensene, se hvor langt han kunne ga for Vestmaktene reagerte.

**1933:** Bare maneder etter maktovertagelsen trakk Hitler Tyskland ut av **Folkeforbundet**. Det var et signal om at Tyskland ikke lenger ville folge internasjonale spilleregler.

**1935:** Hitler offentliggjorde at Tyskland ville bygge opp militaret igjen - i direkte brudd med Versailles-traktaten. Han gjeninnforte verneplikten. Verden protesterte, men ingen grep inn.

**1936:** Tyske tropper marsjerte inn i **Rhinland** - omradet langs Frankrikes grense som ifølge Versailles skulle vare demilitarisert. Franske generaler ville sla tilbake, men politikerne nektet. Hitler hadde bløffet - den tyske haren var fortsatt svak. Men bløffen virket.

**1936:** Hitler inngikk **Roma-Berlin-aksen** med Mussolinis Italia og **Anti-Kominternpakten** med Japan. De totalitare statene fant hverandre.

**1938:** I mars gjennomforte Hitler **Anschluss** med Osterrike. Tyske tropper rullet over grensen, og Osterrike ble innlemmet i Tyskland. Osterrikerne ble ikke spurt, men mange jublet - nazistenes propaganda hadde forberedt grunnen.

Hver gang Hitler brøt en regel, hver gang han tok et steg, ventet verden pa at noen skulle stoppe ham. Men ingen gjorde det. Og Hitler ble overbevist om at Vestmaktene var svake og at de aldri ville risikere krig.`,
    },
    {
      id: 'historie-12-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Hitlers marsj mot krig:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-4-n-quiz2-q0',
            task: 'Hvorfor var remilitariseringen av Rhinland i 1936 et viktig vendepunkt?',
            options: [
              { id: 'a', text: 'Fordi det var Hitlers forste atpakledde brudd pa Versailles-traktaten og et sjokk for det internasjonale samfunnet', isCorrect: false },
              { id: 'b', text: 'Fordi Vestmaktene ikke grep inn selv om de kunne ha stoppet Hitler der, noe som styrket hans tro pa at de var svake', isCorrect: true },
              { id: 'c', text: 'Fordi Folkeforbundet fordomte aksjonen men manglet militare midler til a håndheve sine vedtak', isCorrect: false },
              { id: 'd', text: 'Fordi Storbritannia i hemmelighet hadde akseptert remilitariseringen gjennom den tysk-britiske flateavtalen', isCorrect: false },
            ],
            solution: 'Rhinland-aksjonen var en bloff. Den tyske haren var fortsatt svak, og Frankrike kunne ha stoppet Hitler. Men de grep ikke inn, og Hitler larte at Vestmaktene ville ikke risikere krig.',
          },
          {
            id: 'historie-12-4-n-quiz2-q1',
            task: 'Sett Hitlers aggresjoner i riktig kronologisk rekkefolge: Anschluss med Osterrike, ut av Folkeforbundet, remilitarisering av Rhinland, gjeninnforing av verneplikt.',
            options: [
              { id: 'a', text: 'Verneplikt (1933), Folkeforbundet (1935), Rhinland (1936), Anschluss (1938)', isCorrect: false },
              { id: 'b', text: 'Folkeforbundet (1933), Verneplikt (1935), Rhinland (1936), Anschluss (1938)', isCorrect: true },
              { id: 'c', text: 'Folkeforbundet (1933), Rhinland (1935), Verneplikt (1936), Anschluss (1938)', isCorrect: false },
              { id: 'd', text: 'Folkeforbundet (1933), Verneplikt (1935), Anschluss (1936), Rhinland (1938)', isCorrect: false },
            ],
            solution: 'Hitler gikk steg for steg: ut av Folkeforbundet (1933), gjeninnforing av verneplikt og opprustning (1935), remilitarisering av Rhinland (1936), og Anschluss med Osterrike (1938). Hvert steg testet grensene for hva Vestmaktene ville akseptere.',
          },
          {
            id: 'historie-12-4-n-quiz2-q2',
            task: 'Hvilken strategi brukte Hitler for a na sine mal uten a provosere krig for tidlig?',
            options: [
              { id: 'a', text: 'Han bygde allianser med Italia og Japan for a skape en samlet front som Vestmaktene ikke turde utfordre', isCorrect: false },
              { id: 'b', text: 'Han brukte diplomati og forhandlinger for a oppna innrommelser, og truet bare med krig som siste utvei', isCorrect: false },
              { id: 'c', text: 'Han gikk steg for steg, testet grensene og rykket frem nar motstand uteble', isCorrect: true },
              { id: 'd', text: 'Han rustet opp militaret i hemmelighet og ventet til Tyskland var sterkt nok til a handle uten risiko', isCorrect: false },
            ],
            solution: 'Hitler var en mester i a ta ett steg om gangen. Han testet grensene, sa hvor langt han kunne ga for Vestmaktene reagerte, og rykket videre nar motstand uteble. Hver seier gjorde ham modigere og mer overbevist om egen ufeilbarlighet.',
          },
        ],
      },
    },
    {
      id: 'historie-12-4-n-section3',
      type: 'text',
      content: `## Appeasement: Ettergivenhetens pris

Hvorfor lot Storbritannia og Frankrike Hitler komme unna med det ene bruddet etter det andre? Svaret ligger i politikken som ble kjent som **appeasement** - ettergivenhet.

Appeasement-politikken var ikke feighet eller dumskap. Den kom av reelle dilemmaer. **Folkeopinionen** i Storbritannia og Frankrike var sterkt imot krig. Minnene fra skyttergravene var fortsatt ferske - en hel generasjon unge menn hadde blitt slaktet. Ingen ville gjenta den tragedien.

Dessuten var det mange som mente at **Versailles hadde vart urettferdig**. Kanskje hadde tyskerne rett i noen av klagene sine. Kanskje var det rimelig at de fikk militarisere eget territorium og samle tysktalende folk. Hvis man bare ga Hitler det han "fortjente", ville han kanskje vare fornøyd.

De demokratiske landene var heller ikke **militart klare** for krig. Opprustningen hang etter. Det var ikke sikkert at de kunne vinne. A kjope tid virket fornuftig - i ettertid vet vi at Hitler brukte tiden til a ruste opp enda mer.

Og sa var det **frykten for kommunismen**. Mange i Vestens overklasse sa Hitler som en buffer mot Sovjet. Bedre en fascist enn en kommunist, tenkte de. Det var en farlig feilberegning.

Den britiske statsministeren **Neville Chamberlain** ble ansiktet til appeasement. Han trodde oppriktig at diplomati kunne unnga krig, at rimelige avtaler kunne tilfredsstille Hitlers appetitt. Han tok grundig feil.`,
    },
    {
      id: 'historie-12-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa appeasement-politikken:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-4-n-quiz3-q0',
            task: 'Hvorfor valgte Storbritannia og Frankrike appeasement-politikken?',
            options: [
              { id: 'a', text: 'Fordi de ville kjope tid til a ruste opp militaret sitt og forhandle en allianse med Sovjetunionen', isCorrect: false },
              { id: 'b', text: 'Fordi folkeopinionen var mot krig, Versailles ble sett som urettferdig, de var militart svake, og noen fryktet kommunismen mer', isCorrect: true },
              { id: 'c', text: 'Fordi de trodde at diplomatisk dialog og okonomisk samarbeid kunne integrere Tyskland i et fredelig Europa', isCorrect: false },
              { id: 'd', text: 'Fordi USA nektet a involvere seg i europeiske konflikter, og Storbritannia og Frankrike folte seg for svake alene', isCorrect: false },
            ],
            solution: 'Appeasement kom av reelle dilemmaer: folkeopinion mot krig, syn pa Versailles som urettferdig, militar svakhet, og frykt for kommunismen. Politikken viste seg likevel katastrofal.',
          },
          {
            id: 'historie-12-4-n-quiz3-q1',
            task: 'Hvem var den britiske statsministeren som ble ansiktet til appeasement-politikken?',
            options: [
              { id: 'a', text: 'Winston Churchill', isCorrect: false },
              { id: 'b', text: 'David Lloyd George', isCorrect: false },
              { id: 'c', text: 'Neville Chamberlain', isCorrect: true },
              { id: 'd', text: 'Anthony Eden', isCorrect: false },
            ],
            solution: 'Neville Chamberlain ble ansiktet til appeasement. Han trodde oppriktig at diplomati kunne unnga krig og at rimelige avtaler kunne tilfredsstille Hitlers appetitt. Han tok grundig feil.',
          },
          {
            id: 'historie-12-4-n-quiz3-q2',
            task: 'Hvorfor sa mange i Vestens overklasse pa Hitler som noe positivt?',
            options: [
              { id: 'a', text: 'Fordi Hitler lovte okonomisk stabilitet og gjenoppbygging som ville gagne naeringslivet og den velstaende klassen', isCorrect: false },
              { id: 'b', text: 'Fordi de sa ham som en buffer mot kommunismen - "bedre en fascist enn en kommunist"', isCorrect: true },
              { id: 'c', text: 'Fordi Hitlers utenrikspolitikk utfordret Versailles-systemet som mange mente var urettferdig ogsa i Vesten', isCorrect: false },
              { id: 'd', text: 'Fordi et sterkt Tyskland ble sett som stabiliserende for den europeiske maktbalansen etter forste verdenskrig', isCorrect: false },
            ],
            solution: 'Mange i Vestens overklasse fryktet kommunismen mer enn fascismen. De sa Hitler som en buffer mot Sovjet og tenkte "bedre en fascist enn en kommunist". Dette var en farlig feilberegning som bidro til at Hitler fikk operere fritt lenger enn nodvendig.',
          },
        ],
      },
    },
    {
      id: 'historie-12-4-n-section4',
      type: 'text',
      content: `## Munchen: "Fred i var tid"

Hosten 1938 kom den store testen. Hitler krevde **Sudetenland** - et omrade i Tsjekkoslovakia med tysk befolkning. Han truet med krig hvis han ikke fikk viljen sin. Europa stod pa randen av katastrofe.

I september 1938 motte Chamberlain, den franske statsministeren **Daladier**, Mussolini og Hitler i **Munchen**. Tsjekkoslovakia - landet det handlet om - ble ikke engang invitert. Over hodene pa dem ble Sudetenland overgitt til Tyskland.

Chamberlain kom hjem til London og viftet med avtalen foran kameraene. **"Jeg tror dette er fred i var tid,"** erklarte han. Folk jublet. De hadde unngatt krig.

Men det varte ikke. I mars 1939 - bare seks maneder senere - brøt Hitler avtalen. Tyske tropper okkuperte resten av Tsjekkoslovakia. Tsjekkerne fikk ikke Sudetenland tilbake. De mistet alt.

**Munchen** har siden blitt stående som symbolet pa appeasements fiasko. Uttrykket "en ny Munchen" brukes fortsatt om naiv ettergivenhet overfor aggresjon. Chamberlains "fred i var tid" ble en bitter ironi.

Men Munchen larter ogsa en viktigere lekse: **Aggressive diktatorer lar seg ikke tilfredsstille med innrommelser.** Hver innrommelse overbeviste Hitler om at han kunne fa mer. Hvert kompromiss ble ikke slutten pa kravene, men begynnelsen pa nye. Slike regimer forstår bare styrke.

Na var det for sent a snu. Storbritannia og Frankrike garanterte Polens grenser. Neste gang Hitler gikk til angrep, ville det bety krig.`,
    },
    {
      id: 'historie-12-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Munchen-avtalen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-4-n-quiz4-q0',
            task: 'Hvorfor har Munchen-avtalen blitt et symbol pa mislykket diplomati?',
            options: [
              { id: 'a', text: 'Fordi Vestmaktene ofret en alliert nasjon uten a konsultere den, og undergravde tilliten til internasjonale garantier', isCorrect: false },
              { id: 'b', text: 'Fordi avtalen viste at Folkeforbundet var makteslost og ikke kunne hindre stormakter fra a handle pa egen hand', isCorrect: false },
              { id: 'c', text: 'Fordi den ga Hitler det han ville uten å stoppe ham - seks måneder senere brøt han avtalen og tok resten av Tsjekkoslovakia', isCorrect: true },
              { id: 'd', text: 'Fordi den oppmuntret Mussolini og Japan til ogsa a fore aggressiv ekspansjonspolitikk uten frykt for konsekvenser', isCorrect: false },
            ],
            solution: 'Munchen viste at appeasement ikke fungerer mot aggressive diktatorer. Chamberlain trodde han hadde sikret fred, men Hitler brot avtalen bare seks maneder senere og tok resten av Tsjekkoslovakia.',
          },
          {
            id: 'historie-12-4-n-quiz4-q1',
            task: 'Hva var Sudetenland, og hvorfor krevde Hitler det?',
            options: [
              { id: 'a', text: 'Den polske korridoren med blandet tysk og polsk befolkning, som skilte Ost-Preussen fra resten av Tyskland', isCorrect: false },
              { id: 'b', text: 'Et omrade i Tsjekkoslovakia med tysk befolkning, som Hitler krevde som del av "Anschluss"-tanken', isCorrect: true },
              { id: 'c', text: 'Omradet rundt Danzig ved Østersjoen, en friby under Folkeforbundets kontroll med overveiende tysk befolkning', isCorrect: false },
              { id: 'd', text: 'Saar-omradet ved den franske grensen som hadde vart under Folkeforbundets forvaltning siden 1920', isCorrect: false },
            ],
            solution: 'Sudetenland var et omrade i Tsjekkoslovakia med rundt tre millioner tysktalende innbyggere. Hitler krevde det som del av malet om a samle alle tyskere i ett rike. Da han truet med krig, ga Chamberlain og Daladier ham omradet ved Munchen-konferansen.',
          },
          {
            id: 'historie-12-4-n-quiz4-q2',
            task: 'Hva sa Chamberlain da han kom hjem fra Munchen, og hvorfor ble det ironisk?',
            options: [
              { id: 'a', text: 'Han sa "Vi har sikret Europas fremtid" - men krigen brøt ut bare et ar senere', isCorrect: false },
              { id: 'b', text: 'Han sa "Jeg tror dette er fred i var tid" - men seks maneder senere brøt Hitler avtalen', isCorrect: true },
              { id: 'c', text: 'Han sa "Vi har gitt Tsjekkoslovakia en rettferdig losning" - men tsjekkerne mistet hele sitt land', isCorrect: false },
              { id: 'd', text: 'Han sa "Dette kompromisset vil tilfredsstille Tysklands krav" - men Hitler krevde snart enda mer', isCorrect: false },
            ],
            solution: 'Chamberlain erklarte "Jeg tror dette er fred i var tid" og ble feiret av folk som hadde unngatt krig. Men bare seks maneder senere okkuperte Hitler resten av Tsjekkoslovakia og brot avtalen fullstendig. Utsagnet ble en av historiens mest berømte feilbedomninger.',
          },
          {
            id: 'historie-12-4-n-quiz4-q3',
            task: 'Hvilken viktig lekse larte Munchen-avtalen verden?',
            options: [
              { id: 'a', text: 'At stormakter aldri bor gripe inn i andres konflikter fordi det bare eskalerer situasjonen', isCorrect: false },
              { id: 'b', text: 'At aggressive diktatorer lar seg ikke tilfredsstille med innrommelser - de forstår bare styrke', isCorrect: true },
              { id: 'c', text: 'At kollektiv sikkerhet gjennom internasjonale organisasjoner er den eneste maten a hindre krig pa', isCorrect: false },
              { id: 'd', text: 'At demokratier ma ruste opp og vare klare for krig til enhver tid for a avskrekke potensielle angripere', isCorrect: false },
            ],
            solution: 'Munchen larte at aggressive diktatorer ikke lar seg tilfredsstille med innrommelser. Hver innrommelse overbeviste Hitler om at han kunne fa mer. Kompromisser ble ikke slutten pa kravene, men begynnelsen pa nye. Denne laerdommen har preget internasjonal politikk siden.',
          },
        ],
      },
    },
    {
      id: 'historie-12-4-n-section5',
      type: 'text',
      content: `## Hitler-Stalin-pakten: Sjakktrekket som sjokkerte verden

Sommeren 1939 forhandlet Storbritannia, Frankrike og Sovjetunionen om en allianse mot Tyskland. Det virket logisk - nazismen og kommunismen var rake motsetninger. Men forhandlingene slepte ut. Og sa, 23. august 1939, kom nyheten som sjokkerte verden:

**Nazi-Tyskland og Sovjetunionen hadde inngatt en ikke-angrepspakt.**

**Molotov-Ribbentrop-pakten** (oppkalt etter de to utenriksministrene) var en cynisk avtale mellom to ideologiske dodsfiender. Offentlig lovte de a ikke angripe hverandre. Men det var en **hemmelig tilleggsprotokoll** som delte Ost-Europa mellom dem. Tyskland fikk Vest-Polen. Sovjet fikk Ost-Polen, Finland, de baltiske statene og deler av Romania.

Hvorfor gjorde de dette? For **Hitler** fjernet pakten faren for tofrontskrig. Na kunne han angripe Polen uten a bekymre seg for Sovjet. For **Stalin** ga pakten tid til a forberede seg og territorier som buffer mot en fremtidig tysk invasjon. Begge visste at pakten var midlertidig, men begge trodde de hadde lurt den andre.

For **kommunister verden over** var pakten et sjokk. Plutselig skulle de forsvare en allianse med fascistene de hadde kjempet mot i arevis. Mange mistet troen.

Pakten fjernet det siste hinderet for krig. Atte dager senere, **1. september 1939**, rullet tyske panservogner over grensen til Polen. Storbritannia og Frankrike krevde tilbaketrekning. Hitler ignorerte dem. 3. september erklarte de krig.

**Andre verdenskrig hadde begynt.**`,
    },
    {
      id: 'historie-12-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-12-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa Hitler-Stalin-pakten og krigsutbruddet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-12-4-n-quiz5-q0',
            task: 'Hvorfor var Hitler-Stalin-pakten så overraskende og så viktig?',
            options: [
              { id: 'a', text: 'Fordi den ga Stalin kontroll over de baltiske statene og Ost-Polen, noe som endret maktbalansen i Europa dramatisk', isCorrect: false },
              { id: 'b', text: 'Fordi den var en avtale mellom dodsfiender som fjernet Hitlers frykt for tofrontskrig og gjorde angrepet pa Polen mulig', isCorrect: true },
              { id: 'c', text: 'Fordi den avslørte at Vestmaktenes forsok pa a bygge en allianse mot Hitler hadde mislyktes fullstendig', isCorrect: false },
              { id: 'd', text: 'Fordi den viste at ideologiske motsetninger var mindre viktige enn strategiske interesser i internasjonal politikk', isCorrect: false },
            ],
            solution: 'Pakten var sjokkerende fordi nazisme og kommunisme var dodsfiender. Men begge lederne var kyniske nok til a innga en midlertidig avtale. For Hitler fjernet den faren for tofrontskrig.',
          },
          {
            id: 'historie-12-4-n-quiz5-q1',
            task: 'Hva inneholdt den hemmelige tilleggsprotokollen i Molotov-Ribbentrop-pakten?',
            options: [
              { id: 'a', text: 'En gjensidig forsvarspakt der begge parter lovte a stotte hverandre militart ved et angrep fra tredjeland', isCorrect: false },
              { id: 'b', text: 'En avtale om okonomisk samarbeid der Sovjet leverte ravarer til Tyskland i bytte mot industriteknologi', isCorrect: false },
              { id: 'c', text: 'En deling av Ost-Europa i tyske og sovjetiske interessesfarer', isCorrect: true },
              { id: 'd', text: 'En avtale om at Sovjet skulle forbli noytral i en eventuell krig mellom Tyskland og Vestmaktene', isCorrect: false },
            ],
            solution: 'Den hemmelige tilleggsprotokollen delte Ost-Europa mellom Tyskland og Sovjet. Tyskland fikk Vest-Polen, Sovjet fikk Ost-Polen, Finland, de baltiske statene og deler av Romania. Begge visste at pakten var midlertidig, men begge trodde de hadde lurt den andre.',
          },
          {
            id: 'historie-12-4-n-quiz5-q2',
            task: 'Nar startet andre verdenskrig, og hva utloste den?',
            options: [
              { id: 'a', text: '1. september 1939 - Tysklands angrep pa Polen', isCorrect: true },
              { id: 'b', text: '3. september 1939 - Storbritannia og Frankrikes krigserklaring mot Tyskland', isCorrect: false },
              { id: 'c', text: '15. mars 1939 - Tysklands okkupasjon av resten av Tsjekkoslovakia', isCorrect: false },
              { id: 'd', text: '23. august 1939 - signeringen av Molotov-Ribbentrop-pakten', isCorrect: false },
            ],
            solution: 'Andre verdenskrig startet 1. september 1939 da tyske panservogner rullet over grensen til Polen. Storbritannia og Frankrike krevde tilbaketrekning, Hitler ignorerte dem, og 3. september erklarte de krig. Pakten med Stalin atte dager for hadde fjernet det siste hinderet.',
          },
        ],
      },
    },
    {
      id: 'historie-12-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Veien til andre verdenskrig var en serie av steg der hver enkelt virket handterbar, men der summen ble katastrofal. Hitler testet grensene, Vestmaktene ga etter i hap om fred, og til slutt var det ingen grenser igjen.

**Nokkelbegreper du nå kjenner:**
- **Versailles-traktaten:** Fredsavtalen fra 1919 som Hitler ville rive opp
- **Anschluss:** Sammenslutningen av Osterrike og Tyskland (1938)
- **Lebensraum:** "Livsrom" - Hitlers mal om a erobre territorier i ost
- **Appeasement:** Politikken med a gi etter for aggresjon for a unnga krig
- **Munchen-avtalen (1938):** Avtalen som ga Sudetenland til Hitler
- **Molotov-Ribbentrop-pakten (1939):** Ikke-angrepspakten mellom nazi-Tyskland og Sovjet
- **1. september 1939:** Tysklands angrep pa Polen - krigens utbrudd

**Det viktigste du tar med deg:**
Appeasement fungerer ikke mot aggressive diktatorer som ser kompromisser som svakhet. Hver innrømmelse overbeviste Hitler om at han kunne fa mer. Munchen larte verden at aggresjon ma motes tidlig, for aggressoren blir for sterk. Disse laerdommene preget etterkrigstidens internasjonale politikk og siteres fortsatt nar verden star overfor autoritare stater som bryter reglene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 11
// ============================================================================

export const HISTORIE_NARRATIV_DEL11_CHAPTERS = [
  CHAPTER_HISTORIE_12_1_NARRATIV,
  CHAPTER_HISTORIE_12_2_NARRATIV,
  CHAPTER_HISTORIE_12_3_NARRATIV,
  CHAPTER_HISTORIE_12_4_NARRATIV,
];
