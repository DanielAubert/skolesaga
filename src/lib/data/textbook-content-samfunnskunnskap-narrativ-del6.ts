/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1 NARRATIV: Hva er menneskerettigheter?
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_6_1_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-6-1-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.1',
  title: 'Hva er menneskerettigheter?',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan ideen om at alle mennesker har ukrenkelige rettigheter vokste frem -- fra opplysningstidens filosofer til FNs verdenserklaering etter andre verdenskrig.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjoere rede for menneskerettighetenes grunnlag og kjennetegn',
    'reflektere over menneskerettighetenes betydning',
  ],
  linkedChapterId: 'samfunnskunnskap-6-1',
  content: [
    {
      id: 'samfunnskunnskap-6-1-n-intro',
      type: 'text',
      content: `## En ide som forandret verden

Tenk deg at du lever i et land der myndighetene kan fengsle deg uten grunn, der du ikke faar si det du mener, og der politiet kan bryte seg inn i hjemmet ditt naar som helst. For mange mennesker i dag er dette virkeligheten. Men vi har ogsaa en ide -- en kraftfull, revolusjonaer ide -- om at ingen stat har rett til aa behandle mennesker slik. Denne ideen kaller vi menneskerettigheter.

Menneskerettigheter er grunnleggende rettigheter som tilkommer alle mennesker i kraft av at de er mennesker. De skal beskytte individets verdighet og frihet uavhengig av statsborgerskap, kjoenn, religion eller andre kjennetegn. Du trenger ikke aa gjoere deg fortjent til dem. Du har dem bare fordi du er et menneske.

Men hva er det egentlig som gjoer menneskerettighetene saa spesielle? De har fire avgoerende kjennetegn. For det foerste er de **universelle** -- de gjelder for alle mennesker, overalt i verden, til alle tider. For det andre er de **umistelige** -- ingen kan ta dem fra deg, ikke engang en regjering. For det tredje er de **udelelige** -- du kan ikke plukke ut noen rettigheter og forkaste andre, fordi alle rettighetene haenger sammen. Og for det fjerde er de **gjensidig avhengige** -- oppfyllelsen av en rettighet avhenger av at andre rettigheter ogsaa er oppfylt.

Hvorfor trenger vi menneskerettigheter? Svaret finner vi i historien. Menneskerettighetene oppstod som en reaksjon paa overgrep -- fra slavehandelen til holocaust. De ble skapt for aa forhindre at slike overgrep skjer igjen.`,
    },
    {
      id: 'samfunnskunnskap-6-1-n-section1',
      type: 'text',
      content: `## Fra naturrett til verdenserklaering

Ideen om at mennesker har medfodte rettigheter er ikke ny. Den har roetter i naturrettsfilosofien, der tenkere som John Locke og Jean-Jacques Rousseau hevdet at mennesket har naturlige, medfodte rettigheter som ingen stat kan ta fra dem. I opplysningstiden paa 1700-tallet ble denne tanken koblet til ideer om fornuft og menneskets verdighet. Filosofene mente at fornuften viste at alle mennesker er like mye verdt.

Disse ideene fikk politiske konsekvenser. I 1776 vedtok USA sin uavhengighetserklaering, som slo fast at «alle mennesker er skapt like» og har «umistelige rettigheter» til «liv, frihet og streben etter lykke». I 1789 kom Den franske menneskerettighetserklaering, vedtatt under revolusjonen, som proklamerte at «mennesker foedes og forblir frie og like i rettigheter». Disse dokumentene var banebrytende, men de hadde sine begrensninger -- rettighetene gjaldt i praksis ofte bare frie menn, ikke kvinner, slaver eller urfolk.

Saa kom det 20. aarhundrets katastrofer. To verdenskriger, holocaust, og nazistenes systematiske folkemord paa seks millioner joeder og millioner av andre mennesker viste verden hva som kan skje naar menneskeverdet trakkes under foetter. Etter andre verdenskrig var det en sterk overbevisning om at noe slikt aldri maatte skje igjen.

Den 10. desember 1948 vedtok FNs generalforsamling **Verdenserklaering om menneskerettigheter**. Erklaering inneholder 30 artikler med grunnleggende rettigheter -- fra retten til liv og frihet til forbud mot tortur og slaveri, fra ytringsfrihet til rett til utdanning. Erklaerings er ikke juridisk bindende, men den har enorm moralsk autoritet og har inspirert grunnlover og konvensjoner verden over. Den er blitt internasjonal sedvanerett.

For aa gjoere rettighetene juridisk bindende vedtok FN i 1966 to viktige konvensjoner: Konvensjonen om sivile og politiske rettigheter og Konvensjonen om oekonomiske, sosiale og kulturelle rettigheter. Disse er juridisk bindende for stater som har ratifisert dem.`,
    },
    {
      id: 'samfunnskunnskap-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa menneskerettighetenes historie og kjennetegn:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-1-n-quiz1-q0',
            task: 'Hva betyr det at menneskerettighetene er "umistelige"?',
            options: [
              { id: 'a', text: 'At de gjelder for alle mennesker overalt', isCorrect: false },
              { id: 'b', text: 'At de ikke kan tas fra deg', isCorrect: true },
              { id: 'c', text: 'At alle rettigheter haenger sammen', isCorrect: false },
              { id: 'd', text: 'At de bare gjelder i demokratier', isCorrect: false },
            ],
            solution: 'Umistelige betyr at rettighetene ikke kan tas fra deg -- ingen stat eller myndighet kan frata deg dine menneskerettigheter. Det er ett av de fire kjennetegnene, ved siden av universelle, udelelige og gjensidig avhengige.',
          },
          {
            id: 'samfunnskunnskap-6-1-n-quiz1-q1',
            task: 'Naar ble FNs verdenserklaering om menneskerettigheter vedtatt?',
            options: [
              { id: 'a', text: '1776', isCorrect: false },
              { id: 'b', text: '1789', isCorrect: false },
              { id: 'c', text: '1948', isCorrect: true },
              { id: 'd', text: '1966', isCorrect: false },
            ],
            solution: 'FNs verdenserklaering ble vedtatt 10. desember 1948, etter andre verdenskrig og holocaust. Den inneholder 30 artikler med grunnleggende rettigheter.',
          },
          {
            id: 'samfunnskunnskap-6-1-n-quiz1-q2',
            task: 'Hvilken milepael kom foerst i menneskerettighetenes historie?',
            options: [
              { id: 'a', text: 'Den franske menneskerettighetserklaering', isCorrect: false },
              { id: 'b', text: 'FNs verdenserklaering', isCorrect: false },
              { id: 'c', text: 'USAs uavhengighetserklaering', isCorrect: true },
              { id: 'd', text: 'SP-konvensjonen', isCorrect: false },
            ],
            solution: 'USAs uavhengighetserklaering fra 1776 kom foerst, fulgt av Den franske menneskerettighetserklaering i 1789, FNs verdenserklaering i 1948 og de to FN-konvensjonene i 1966.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-1-n-section2',
      type: 'text',
      content: `## Hvorfor har vi rettigheter? Ulike begrunnelser

Det finnes flere maater aa begrunne menneskerettighetene paa. Den **naturrettslige begrunnelsen** sier at mennesket har medfodte rettigheter i kraft av sin menneskelighet -- uavhengig av hva staten bestemmer. Rettigheter er noe du har, ikke noe staten gir deg.

**Samfunnskontraktsteorien** ser det annerledes. Her er rettighetene det individet har krav paa i bytte mot aa gi opp noe frihet til fellesskapet. Du aksepterer statens makt, men i gjengjeld maa staten respektere dine grunnleggende rettigheter. Den **utilitaristiske begrunnelsen** hevder at menneskerettigheter gir stoerst mulig lykke for stoerst mulig antall mennesker -- de er nyttige fordi de skaper gode samfunn.

FNs verdenserklaering bygger paa ideen om **menneskelig verdighet** -- alle mennesker er like mye verdt. Dette er kjernen i hele menneskerettighetssystemet.

Men menneskerettighetene moeter ogsaa kritikk. Er de virkelig universelle, eller er de uttrykk for vestlige verdier? Kulturrelativister hevder at rettigheter maa forstas i sin kulturelle kontekst, og at det er arrogant aa paatvinges andre kulturer vestlige standarder. Motargumentet er at grunnleggende verdighet er universelt -- alle mennesker oensker aa leve uten tortur, vilkaarlig fengsling og undertrykkelse. Utoevelsen kan variere mellom kulturer, men kjerneverdiene er felles.

Noen av de viktigste artiklene i FNs verdenserklaering illustrerer bredden i rettighetene. Artikkel 1 slaar fast at alle mennesker er foedt frie og med samme menneskeverd. Artikkel 3 fastslaar retten til liv, frihet og personlig sikkerhet. Artikkel 5 forbyr tortur og umenneskelig behandling. Artikkel 18 beskytter tanke-, samvittighets- og religionsfrihet. Artikkel 19 sikrer ytrings- og informasjonsfrihet. Og artikkel 26 gir rett til utdanning. Selv om erklaerings ikke er juridisk bindende, har den blitt internasjonal sedvanerett og inspirert grunnlover og menneskerettighetskonvensjoner over hele verden.`,
    },
    {
      id: 'samfunnskunnskap-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa rettighetenes grunnlag og FNs verdenserklaering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-1-n-quiz2-q0',
            task: 'Hva sier naturrettsfilosofien om menneskerettigheter?',
            options: [
              { id: 'a', text: 'Rettigheter gis av staten og kan trekkes tilbake', isCorrect: false },
              { id: 'b', text: 'Mennesket har medfodte rettigheter uavhengig av hva staten bestemmer', isCorrect: true },
              { id: 'c', text: 'Rettigheter er bare gyldige i vestlige land', isCorrect: false },
              { id: 'd', text: 'Rettigheter er et moderne paafunn fra FN', isCorrect: false },
            ],
            solution: 'Naturrettsfilosofien hevder at mennesker har medfodte rettigheter i kraft av sin menneskelighet. Disse rettighetene eksisterer uavhengig av hva staten bestemmer -- de er noe du har, ikke noe staten gir deg.',
          },
          {
            id: 'samfunnskunnskap-6-1-n-quiz2-q1',
            task: 'Hva kjennetegner FNs verdenserklaering?',
            options: [
              { id: 'a', text: 'Den er juridisk bindende for alle FN-land', isCorrect: false },
              { id: 'b', text: 'Den inneholder bare sivile rettigheter', isCorrect: false },
              { id: 'c', text: 'Den har 30 artikler og er ikke juridisk bindende, men har stor moralsk autoritet', isCorrect: true },
              { id: 'd', text: 'Den ble vedtatt under den kalde krigen i 1966', isCorrect: false },
            ],
            solution: 'Verdenserklaerings inneholder 30 artikler med grunnleggende rettigheter. Den er ikke juridisk bindende, men har enorm moralsk autoritet og er blitt internasjonal sedvanerett. Den ble vedtatt i 1948.',
          },
          {
            id: 'samfunnskunnskap-6-1-n-quiz2-q2',
            task: 'Hva mener kulturrelativister om menneskerettigheter?',
            options: [
              { id: 'a', text: 'At alle rettigheter er absolutte og ufravikelige', isCorrect: false },
              { id: 'b', text: 'At rettigheter maa forstas i sin kulturelle kontekst', isCorrect: true },
              { id: 'c', text: 'At bare vestlige land trenger menneskerettigheter', isCorrect: false },
              { id: 'd', text: 'At FN boer oppveves', isCorrect: false },
            ],
            solution: 'Kulturrelativister hevder at verdier og rettigheter maa forstas i sin kulturelle kontekst. De mener det kan vaere arrogant aa paatvinges andre kulturer vestlige standarder. Motargumentet er at grunnleggende verdighet er universelt.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi fulgt menneskerettighetene fra filosofisk ide til globalt rammeverk. Vi har sett at menneskerettigheter er grunnleggende rettigheter som tilkommer alle mennesker i kraft av deres menneskeverd. De er universelle, umistelige, udelelige og gjensidig avhengige.

Den historiske reisen gikk fra naturrettsfilosofien gjennom opplysningstiden, via USAs uavhengighetserklaering i 1776 og Den franske menneskerettighetserklaering i 1789, til FNs verdenserklaering i 1948 etter andre verdenskrig og holocaust. Verdenserklaerings 30 artikler er ikke juridisk bindende, men har enorm moralsk autoritet og ble grunnlaget for senere bindende konvensjoner.

Rettighetene kan begrunnes paa ulike maater -- fra naturrett og samfunnskontrakt til menneskelig verdighet -- og det finnes en paagoende debatt mellom universalister og kulturrelativister om hvorvidt rettighetene er universelle standarder eller vestlige verdier.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2 NARRATIV: Kategorier av rettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_6_2_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-6-2-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.2',
  title: 'Kategorier av rettigheter',
  subtitle: 'Narrativ versjon',
  description: 'En utforskning av hvordan menneskerettighetene deles inn i ulike kategorier -- og hvorfor skillet mellom frihet fra staten og frihet til velferd er bade nyttig og kunstig.',
  estimatedMinutes: 25,
  competenceGoals: [
    'skille mellom ulike kategorier av menneskerettigheter',
    'forstaa sammenhengen mellom rettigheter',
  ],
  linkedChapterId: 'samfunnskunnskap-6-2',
  content: [
    {
      id: 'samfunnskunnskap-6-2-n-intro',
      type: 'text',
      content: `## To sider av samme mynt

Menneskerettighetene deles tradisjonelt inn i kategorier. Selv om skillet kan vaere kunstig -- rettighetene haenger tett sammen -- er det nyttig for aa forstaa ulike typer forpliktelser stater har overfor sine borgere. Historisk sett ble kategoriene utviklet paa ulike tidspunkter, og under den kalde krigen ble de til politiske verktoy: Vesten fremhevet sivile og politiske rettigheter, mens oestblokken vektla oekonomiske og sosiale rettigheter. Men sannheten er at begge typer er like viktige. Sivile rettigheter uten mat er verdilese, og mat uten frihet er ikke nok.

La oss utforske de ulike kategoriene.`,
    },
    {
      id: 'samfunnskunnskap-6-2-n-section1',
      type: 'text',
      content: `## Frihet FRA staten: Sivile og politiske rettigheter

Den foerste kategorien kalles sivile og politiske rettigheter -- ofte forkortet SP-rettigheter. Disse handler om aa beskytte individet mot statlige overgrep. Tenk paa dem som en mur mellom deg og statsmakten.

De **sivile rettighetene** gir deg frihet FRA staten: Rett til liv. Forbud mot tortur. Forbud mot slaveri. Rettssikkerhet -- altsaa at du ikke kan straffes uten lov og rettferdig rettergang. Vern av privatlivet ditt. Religionsfrihet. Ytringsfrihet. Bevegelsesfrihet.

De **politiske rettighetene** gir deg frihet TIL aa delta i styringen av samfunnet: Stemmerett. Rett til aa stille til valg. Forsamlingsfrihet -- altsaa retten til aa mote og demonstrere. Organisasjonsfrihet -- retten til aa danne og delta i foreninger og partier. Tilgang til offentlig informasjon.

Disse rettighetene kalles ofte «negative» rettigheter -- ikke fordi det er noe negativt med dem, men fordi de krever at staten **avstaar** fra inngrep. Staten skal la deg vaere i fred. De er umiddelbart gjennomfoerbare -- en stat kan slutte aa torturere i dag, uten at det krever store ressurser. De er nedfelt i FN-konvensjonen om sivile og politiske rettigheter fra 1966.`,
    },
    {
      id: 'samfunnskunnskap-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa sivile og politiske rettigheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-2-n-quiz1-q0',
            task: 'Hvorfor kalles sivile og politiske rettigheter "negative" rettigheter?',
            options: [
              { id: 'a', text: 'Fordi de er mindre viktige enn andre rettigheter', isCorrect: false },
              { id: 'b', text: 'Fordi de krever at staten avstaar fra inngrep', isCorrect: true },
              { id: 'c', text: 'Fordi de har negative konsekvenser for staten', isCorrect: false },
              { id: 'd', text: 'Fordi de bare gjelder i krisesituasjoner', isCorrect: false },
            ],
            solution: 'Sivile og politiske rettigheter kalles "negative" fordi de krever at staten avstaar fra inngrep -- staten skal la deg vaere i fred. Det betyr ikke at de er mindre viktige; tvert imot er de grunnleggende for demokratiet.',
          },
          {
            id: 'samfunnskunnskap-6-2-n-quiz1-q1',
            task: 'Hvilken av disse er en politisk rettighet?',
            options: [
              { id: 'a', text: 'Rett til utdanning', isCorrect: false },
              { id: 'b', text: 'Forbud mot tortur', isCorrect: false },
              { id: 'c', text: 'Stemmerett', isCorrect: true },
              { id: 'd', text: 'Rett til helse', isCorrect: false },
            ],
            solution: 'Stemmerett er en politisk rettighet -- den gir deg frihet TIL aa delta i styringen av samfunnet. Forbud mot tortur er en sivil rettighet, mens rett til utdanning og helse er oekonomiske/sosiale rettigheter.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-2-n-section2',
      type: 'text',
      content: `## Frihet TIL velferd: Oekonomiske, sosiale og kulturelle rettigheter

Den andre kategorien er oekonomiske, sosiale og kulturelle rettigheter -- ofte forkortet OESK-rettigheter. Der SP-rettighetene beskytter deg mot staten, krever OESK-rettighetene at staten aktivt gjoer noe for deg.

De **oekonomiske rettighetene** omfatter rett til arbeid, rettferdige arbeidsvilkaar, rett til aa danne fagforeninger, og rett til sosial trygghet. De **sosiale rettighetene** gir deg rett til mat og vann, bolig, helse, utdanning og familieliv. De **kulturelle rettighetene** sikrer deg retten til aa delta i kulturlivet, nyte vitenskapens fremskritt, faa beskyttelse av aandsverk, og for minoriteter retten til aa utove sin kultur.

Disse kalles «positive» rettigheter fordi de krever at staten aktivt **soerger for** noe. Staten maa bygge skoler, sykehus og boliger. Det betyr at gjennomfoeringen er gradvis -- den avhenger av statens ressurser. En fattig stat kan ikke over natten gi alle innbyggere gratis helsetjenester, men den skal arbeide mot dette maalet. OESK-rettighetene er nedfelt i FN-konvensjonen om oekonomiske, sosiale og kulturelle rettigheter fra 1966.`,
    },
    {
      id: 'samfunnskunnskap-6-2-n-section3',
      type: 'text',
      content: `## Rettighetene haenger sammen

Det viktigste aa forstaa er at de to kategoriene ikke kan skilles fra hverandre i praksis. De er udelelige og gjensidig avhengige.

Tenk paa utdanning. Utdanning er en OESK-rettighet, men den er nodvendig for at du skal kunne bruke ytringsfrihet -- en SP-rettighet -- effektivt. Uten gratis utdanning vil fattige mennesker ikke kunne delta i politikken. Eller tenk paa helse: Retten til helse er en OESK-rettighet, men den forutsetter informasjonsfrihet om helsespoersmaal -- en SP-rettighet. Og retten til liv -- den mest grunnleggende SP-rettigheten -- er meningsloes uten tilgang til helsetjenester.

Demokrati er et godt eksempel paa sammenhengen. Demokrati krever utdannede borgere (OESK) som har tid og overskudd til aa engasjere seg (OESK), og som har politiske rettigheter til aa stemme og organisere seg (SP). Uten begge typer rettigheter fungerer ikke demokratiet.

Konklusjonen er klar: Sivile og politiske rettigheter uten sosiale rettigheter gir formelle rettigheter uten reell mulighet til aa bruke dem. Sosiale rettigheter uten sivile og politiske rettigheter gir velstand uten frihet. Begge typer maa oppfylles for at mennesker skal leve verdige liv.`,
    },
    {
      id: 'samfunnskunnskap-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa rettighetskategorier og sammenhengen mellom dem:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-2-n-quiz2-q0',
            task: 'Hvilken av disse er en oekonomisk, sosial eller kulturell rettighet?',
            options: [
              { id: 'a', text: 'Ytringsfrihet', isCorrect: false },
              { id: 'b', text: 'Stemmerett', isCorrect: false },
              { id: 'c', text: 'Rett til utdanning', isCorrect: true },
              { id: 'd', text: 'Forbud mot vilkaarlig fengsling', isCorrect: false },
            ],
            solution: 'Rett til utdanning er en sosial rettighet (OESK). Den krever at staten aktivt soerger for skoler og undervisning. Ytringsfrihet, stemmerett og forbud mot vilkaarlig fengsling er sivile og politiske rettigheter.',
          },
          {
            id: 'samfunnskunnskap-6-2-n-quiz2-q1',
            task: 'Hvorfor kalles rettighetene "udelelige"?',
            options: [
              { id: 'a', text: 'Fordi de ikke kan endres av FN', isCorrect: false },
              { id: 'b', text: 'Fordi alle rettigheter haenger sammen og er like viktige', isCorrect: true },
              { id: 'c', text: 'Fordi de bare gjelder samlet i demokratier', isCorrect: false },
              { id: 'd', text: 'Fordi de ikke kan deles mellom borgere', isCorrect: false },
            ],
            solution: 'Udelelige betyr at alle rettigheter er like viktige og haenger sammen. Man kan ikke velge ut noen rettigheter og forkaste andre. Ytringsfrihet krever utdanning, politisk deltakelse krever frihet fra sult -- begge typer maa oppfylles.',
          },
          {
            id: 'samfunnskunnskap-6-2-n-quiz2-q2',
            task: 'Hva er hovedforskjellen mellom "negative" og "positive" rettigheter?',
            options: [
              { id: 'a', text: 'Negative rettigheter er mindre viktige enn positive', isCorrect: false },
              { id: 'b', text: 'Negative rettigheter krever at staten avstaar fra inngrep, positive at staten aktivt handler', isCorrect: true },
              { id: 'c', text: 'Negative rettigheter gjelder bare i krig', isCorrect: false },
              { id: 'd', text: 'Positive rettigheter er nyere enn negative', isCorrect: false },
            ],
            solution: 'Negative rettigheter (SP) krever at staten avstaar fra inngrep -- for eksempel ikke torturere eller sensurere. Positive rettigheter (OESK) krever at staten aktivt soerger for noe -- for eksempel bygge skoler og sykehus. Begge er like viktige.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har sett at menneskerettighetene tradisjonelt deles inn i to hovedkategorier. Sivile og politiske rettigheter (SP) gir frihet fra statlige overgrep -- ytringsfrihet, religionsfrihet, stemmerett, rettssikkerhet. De kalles "negative" fordi staten skal avstaa fra inngrep, og de er umiddelbart gjennomfoerbare.

Oekonomiske, sosiale og kulturelle rettigheter (OESK) gir frihet til velferd -- rett til arbeid, utdanning, helse, mat og bolig. De kalles "positive" fordi staten aktivt maa soerge for noe, og gjennomfoeringen er gradvis etter ressurser.

Det viktigste er at rettighetene er udelelige og gjensidig avhengige. Sivile rettigheter uten sosiale er formelle rettigheter uten reell mulighet til aa bruke dem. Sosiale rettigheter uten sivile er velstand uten frihet. Begge typer maa oppfylles for verdige liv.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3 NARRATIV: FN og menneskerettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_6_3_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-6-3-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.3',
  title: 'FN og menneskerettigheter',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan FN ble verdens viktigste arena for menneskerettigheter -- fra verdenserklaerings til konvensjoner, overvaaking og de uunngaaelige svakhetene.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forklare FNs rolle i menneskerettighetsarbeidet',
    'kjenne til de viktigste FN-konvensjonene',
  ],
  linkedChapterId: 'samfunnskunnskap-6-3',
  content: [
    {
      id: 'samfunnskunnskap-6-3-n-intro',
      type: 'text',
      content: `## Fra krigens ruiner til et nytt haap

De forente nasjoner -- FN -- ble grunnlagt i 1945, mens roeyken fortsatt laa over Europas bombede byer. Opplevelsene med nazistenes folkemord og krigens grusomheter skapte et sterkt behov for et internasjonalt system som kunne beskytte mennesker mot overgrep. Aldri mer, sa verden. FNs hovedmaal er aa fremme fred, sikkerhet og samarbeid mellom nasjoner, og menneskerettighetene ble en sentral del av dette arbeidet helt fra starten.

Den 10. desember 1948 vedtok FNs generalforsamling Verdenserklaering om menneskerettigheter. Denne datoen feires fortsatt hvert aar som Den internasjonale menneskerettighetsdagen. Erklaerings inneholder 30 artikler som beskriver grunnleggende rettigheter alle mennesker har. Den var banebrytende fordi den definerte universelle rettigheter for alle mennesker, ble vedtatt av verdenssamfunnet samlet, og la grunnlaget for senere konvensjoner. Viktige prinsipper er at alle mennesker er foedt frie og like i verdighet, at rettighetene gjelder uten forskjellsbehandling, og at bade sivile, politiske, oekonomiske og sosiale rettigheter er inkludert.

Men verdenserklaerings har en avgoerende begrensning: den er ikke juridisk bindende. Den har stor moralsk autoritet og har inspirert nasjonal lovgivning verden over, men ingen stat kan straffes for aa bryte den. Derfor begynte arbeidet med aa lage juridisk bindende avtaler -- konvensjoner.`,
    },
    {
      id: 'samfunnskunnskap-6-3-n-section1',
      type: 'text',
      content: `## Fra erklaering til bindende lov: FNs konvensjoner

For aa gjoere rettighetene juridisk bindende har FN vedtatt flere konvensjoner. En konvensjon er en internasjonal avtale som forplikter stater som ratifiserer den -- altsaa formelt godkjenner og paatar seg aa foelge den.

I 1966 vedtok FN de to hovedkonvensjonene. **Konvensjonen om sivile og politiske rettigheter (SP)** beskytter ytringsfrihet, religionsfrihet, forsamlingsfrihet, rett til liv, frihet fra tortur, rett til rettferdig rettergang og forbud mot vilkaarlig arrestasjon. **Konvensjonen om oekonomiske, sosiale og kulturelle rettigheter (OESK)** sikrer rett til arbeid og rettferdige arbeidsvilkaar, rett til utdanning, rett til helse, og rett til mat, klaer og bolig.

Sammen med Verdenserklaerings utgjoer disse tre dokumentene **"The International Bill of Human Rights"** -- det internasjonale menneskerettighetslovverket. Men FN har ogsaa vedtatt flere spesialkonvensjoner som beskytter saerlig utsatte grupper. **Rasekonvensjonen** (1965) forbyr diskriminering basert paa rase, hudfarge eller etnisitet. **Kvinnekonvensjonen** (1979) forbyr diskriminering av kvinner og fremmer likestilling. **Torturkonvensjonen** (1984) forbyr tortur og umenneskelig behandling og paalegger stater aa straffeforfaelge tortur. **Barnekonvensjonen** (1989) gir barn egne rettigheter og slaar fast at barnets beste skal vaere et grunnleggende hensyn. **Flyktningkonvensjonen** (1951) definerer hvem som er flyktning og forbyr aa sende flyktninger tilbake til forfoelgelse. Og **Funksjonshemmedekonvensjonen** (2006) sikrer like rettigheter for personer med nedsatt funksjonsevne.`,
    },
    {
      id: 'samfunnskunnskap-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa FNs menneskerettighetskonvensjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-3-n-quiz1-q0',
            task: 'Hva er forskjellen paa Verdenserklaerings og FNs konvensjoner?',
            options: [
              { id: 'a', text: 'Verdenserklaerings er nyere enn konvensjonene', isCorrect: false },
              { id: 'b', text: 'Verdenserklaerings er ikke juridisk bindende, konvensjonene er det', isCorrect: true },
              { id: 'c', text: 'Konvensjonene gjelder bare for europeiske land', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Verdenserklaerings fra 1948 er en politisk erklaering med stor moralsk autoritet, men den er ikke juridisk bindende. Konvensjonene er juridisk bindende avtaler som forplikter stater som har ratifisert dem.',
          },
          {
            id: 'samfunnskunnskap-6-3-n-quiz1-q1',
            task: 'Hvilke tre dokumenter utgjoer "The International Bill of Human Rights"?',
            options: [
              { id: 'a', text: 'Rasekonvensjonen, Kvinnekonvensjonen og Barnekonvensjonen', isCorrect: false },
              { id: 'b', text: 'Verdenserklaerings, SP-konvensjonen og OESK-konvensjonen', isCorrect: true },
              { id: 'c', text: 'FN-pakten, Flyktningkonvensjonen og Torturkonvensjonen', isCorrect: false },
              { id: 'd', text: 'EMK, EU-charteret og Den europeiske sosialpakten', isCorrect: false },
            ],
            solution: 'The International Bill of Human Rights bestaar av Verdenserklaerings (1948), Konvensjonen om sivile og politiske rettigheter (1966) og Konvensjonen om oekonomiske, sosiale og kulturelle rettigheter (1966).',
          },
          {
            id: 'samfunnskunnskap-6-3-n-quiz1-q2',
            task: 'Hvilken FN-konvensjon beskytter barn spesielt?',
            options: [
              { id: 'a', text: 'Rasekonvensjonen fra 1965', isCorrect: false },
              { id: 'b', text: 'Kvinnekonvensjonen fra 1979', isCorrect: false },
              { id: 'c', text: 'Barnekonvensjonen fra 1989', isCorrect: true },
              { id: 'd', text: 'Flyktningkonvensjonen fra 1951', isCorrect: false },
            ],
            solution: 'FNs barnekonvensjon fra 1989 gir barn egne rettigheter og slaar fast at barnets beste skal vaere et grunnleggende hensyn. Den er verdens mest ratifiserte menneskerettighetskonvensjon.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-3-n-section2',
      type: 'text',
      content: `## Hvem passer paa? FNs overvaakingssystem

Aa vedta fine erklaeringsringer og konvensjoner er en ting. Aa soerge for at statene faktisk foelger dem er noe helt annet. Hvordan sikrer FN at statene holder det de har lovet?

FN har tre viktige mekanismer. Den foerste er **konvensjonsorganene**. Hver konvensjon har et eget komiteorgan som overvaaker at statene foelger forpliktelsene. Menneskerettighetskomiteen overvaaker SP-konvensjonen, Komiteen for barns rettigheter overvaaker Barnekonvensjonen, og CEDAW-komiteen overvaaker Kvinnekonvensjonen. Disse komiteene behandler statsrapporter fra medlemslandene, gir anbefalinger til forbedring, og kan behandle individklager dersom staten har akseptert dette.

Den andre mekanismen er **FNs menneskerettighetsraad**. Raadet har 47 medlemsland som velges for tre aar, og moetes i Geneve. Den viktigste oppgaven er **Universal Periodic Review (UPR)** -- en regelmessig gjennomgang av alle FN-lands menneskerettighetssituasjon. Raadet kan ogsaa opprette granskingskommisjoner for aa undersaeke spesielt alvorlige situasjoner.

Den tredje mekanismen er **FNs hoeykommissaer for menneskerettigheter**, som leder FNs menneskerettighetskontor. Hoeykommissaeren er en talsmann for menneskerettigheter globalt og overvaaker situasjonen i ulike land.`,
    },
    {
      id: 'samfunnskunnskap-6-3-n-section3',
      type: 'text',
      content: `## Systemets svakheter

FN-systemet har betydelige svakheter som vi maa vaere aaaerlige om. Den stoerste er **manglende haandhevelse**. FN kan ikke tvinge stater til aa foelge konvensjonene. Systemet er avhengig av politisk vilje og internasjonalt press, og oekonomiske sanksjoner er sjeldne.

Saa har vi **politisering**. Menneskerettighetsraadet har vaert kritisert for aa velge inn land med daarlig menneskerettighetshistorikk. Stormakter kan blokkere resolusjoner som gjelder allierte, og det er ofte et selektivt fokus paa noen konflikter mens andre ignoreres.

**Suverenitetshensynet** er et annet problem. Stater beskytter sin selvbestemmelsesrett og kan nekte FN tilgang til sitt territorium. De kan ogsaa vedta forbehold ved ratifisering av konvensjoner, noe som svekker virkningen. I tillegg lider systemet av **ressursmangel** -- FN har begrenset budsjett, og mange konvensjonsorganer har store etterslep.

Men dette betyr ikke at FN-systemet er verdilest. FN setter standarder som verden kan maales mot. Det dokumenterer overgrep som ellers ville forblitt ukjente. Og det skaper press for forbedring. Et ufullkomment internasjonalt system er langt bedre enn intet system i det hele tatt.`,
    },
    {
      id: 'samfunnskunnskap-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa FNs overvaakingssystem og begrensninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-3-n-quiz2-q0',
            task: 'Hva er Universal Periodic Review (UPR)?',
            options: [
              { id: 'a', text: 'En aarlig rapport fra FNs generalsekretaer', isCorrect: false },
              { id: 'b', text: 'En regelmessig gjennomgang av alle FN-lands menneskerettighetssituasjon', isCorrect: true },
              { id: 'c', text: 'En eksamen for FN-ansatte', isCorrect: false },
              { id: 'd', text: 'En plan for aa fordele FNs budsjett', isCorrect: false },
            ],
            solution: 'UPR er en regelmessig gjennomgang av alle FN-lands menneskerettighetssituasjon, gjennomfoert av FNs menneskerettighetsraad. Alle land gjennomgaas, og det gis anbefalinger til forbedring.',
          },
          {
            id: 'samfunnskunnskap-6-3-n-quiz2-q1',
            task: 'Hva er den stoerste svakheten ved FNs menneskerettighetssystem?',
            options: [
              { id: 'a', text: 'At det finnes for mange konvensjoner', isCorrect: false },
              { id: 'b', text: 'At FN ikke kan tvinge stater til aa foelge konvensjonene', isCorrect: true },
              { id: 'c', text: 'At bare europeiske land er medlemmer', isCorrect: false },
              { id: 'd', text: 'At konvensjonene er utdaterte', isCorrect: false },
            ],
            solution: 'FNs stoerste svakhet er manglende haandhevelse -- FN kan ikke tvinge stater til aa foelge konvensjonene. Systemet er avhengig av politisk vilje, internasjonalt press og statenes egen vilje til aa forbedre seg.',
          },
          {
            id: 'samfunnskunnskap-6-3-n-quiz2-q2',
            task: 'Hvilke tre mekanismer bruker FN for aa overvaake menneskerettighetene?',
            options: [
              { id: 'a', text: 'FN-politiet, FN-domstolen og FN-fengselet', isCorrect: false },
              { id: 'b', text: 'Konvensjonsorganer, Menneskerettighetsraadet og Hoeykommissaeren', isCorrect: true },
              { id: 'c', text: 'Sikkerhetsraadet, Generalforsamlingen og ICJ', isCorrect: false },
              { id: 'd', text: 'UNICEF, WHO og UNESCO', isCorrect: false },
            ],
            solution: 'FNs tre hovedmekanismer er: 1) Konvensjonsorganer som behandler statsrapporter og individklager, 2) Menneskerettighetsraadet som gjennomfoerer UPR, og 3) FNs hoeykommissaer for menneskerettigheter som overvaaker og rapporterer.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

FN ble grunnlagt i 1945 og har menneskerettigheter som sentral oppgave. Verdenserklaerings fra 1948 la grunnlaget, og de to hovedkonvensjonene fra 1966 -- SP og OESK -- gjoerde rettighetene juridisk bindende. I tillegg finnes spesialkonvensjoner for barn, kvinner, flyktninger og andre utsatte grupper.

FN overvaaker statenes etterlevelse gjennom konvensjonsorganer, Menneskerettighetsraadet med UPR, og hoeykommissaeren for menneskerettigheter. Men systemet har svakheter: manglende tvangsmakt, politisering, suverenitetshensynet og ressursmangel. Likevel setter FN standarder, dokumenterer overgrep og skaper press for forbedring -- og det er langt bedre enn intet system.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4 NARRATIV: Menneskerettigheter i Europa
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_6_4_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-6-4-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.4',
  title: 'Menneskerettigheter i Europa',
  subtitle: 'Narrativ versjon',
  description: 'Historien om det europeiske menneskerettighetssystemet -- fra Europaraadets grunnleggelse til Den europeiske menneskerettsdomstolen som kan doemme stater for brudd paa borgernes rettigheter.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kjenne til det europeiske menneskerettighetssystemet',
    'forstaa Den europeiske menneskerettsdomstolens rolle',
  ],
  linkedChapterId: 'samfunnskunnskap-6-4',
  content: [
    {
      id: 'samfunnskunnskap-6-4-n-intro',
      type: 'text',
      content: `## Et sterkere vern enn FN

Etter andre verdenskrig ville de europeiske landene gaa lenger enn FN-systemet. I 1949 grunnla de **Europaraadet** for aa fremme demokrati, menneskerettigheter og rettsstaten i Europa. Europaraadet har i dag 46 medlemsland og maa ikke forveksles med EU -- det er to helt forskjellige organisasjoner. Alle europeiske land unntatt Russland (suspendert i 2022) og Belarus er medlemmer.

Det europeiske samarbeidet paa menneskerettigheter er sterkere enn det globale FN-systemet. Mens FN mangler effektive haandhevelsesmekanismer, har Europa en domstol som kan doemme stater for brudd paa borgernes rettigheter. Det gjoer det europeiske systemet til det mest effektive regionale menneskerettighetssystemet i verden.`,
    },
    {
      id: 'samfunnskunnskap-6-4-n-section1',
      type: 'text',
      content: `## Den europeiske menneskerettskonvensjonen (EMK)

Hjertet i det europeiske systemet er **Den europeiske menneskerettskonvensjonen -- EMK**. Den ble vedtatt i 1950 og tredde i kraft i 1953. EMK er den viktigste regionale menneskerettighetsavtalen i verden.

EMK beskytter en rekke grunnleggende rettigheter. Artikkel 2 sikrer retten til liv. Artikkel 3 forbyr tortur. Artikkel 4 forbyr slaveri. Artikkel 5 gir rett til frihet og sikkerhet. Artikkel 6 sikrer rett til rettferdig rettergang. Artikkel 7 slaar fast at ingen kan straffes uten lov. Artikkel 8 beskytter retten til privatliv og familieliv. Artikkel 9 sikrer tanke-, samvittighets- og religionsfrihet. Artikkel 10 beskytter ytringsfrihet. Og artikkel 11 sikrer forsamlings- og foreningsfrihet.

Det avgoerende med EMK er at den er **juridisk bindende** for alle medlemsland. Det betyr at borgere kan klage staten inn for brudd -- noe som er en helt annen situasjon enn i FN-systemet.`,
    },
    {
      id: 'samfunnskunnskap-6-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa EMK og Europaraadet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-4-n-quiz1-q0',
            task: 'Naar ble Europaraadet grunnlagt?',
            options: [
              { id: 'a', text: '1945', isCorrect: false },
              { id: 'b', text: '1949', isCorrect: true },
              { id: 'c', text: '1957', isCorrect: false },
              { id: 'd', text: '1993', isCorrect: false },
            ],
            solution: 'Europaraadet ble grunnlagt i 1949 for aa fremme demokrati, menneskerettigheter og rettsstat i Europa. Det har i dag 46 medlemsland og maa ikke forveksles med EU.',
          },
          {
            id: 'samfunnskunnskap-6-4-n-quiz1-q1',
            task: 'Hva er EMK?',
            options: [
              { id: 'a', text: 'En FN-konvensjon om miljoerettigheter', isCorrect: false },
              { id: 'b', text: 'Den europeiske menneskerettskonvensjonen fra 1950, juridisk bindende for alle medlemsland', isCorrect: true },
              { id: 'c', text: 'En EU-forordning om oekonomiske rettigheter', isCorrect: false },
              { id: 'd', text: 'En erklaering uten juridisk kraft', isCorrect: false },
            ],
            solution: 'EMK er Den europeiske menneskerettskonvensjonen, vedtatt i 1950. Den beskytter sivile og politiske rettigheter og er juridisk bindende for alle Europaraadets 46 medlemsland.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-4-n-section2',
      type: 'text',
      content: `## Den europeiske menneskerettsdomstolen (EMD)

**Den europeiske menneskerettsdomstolen** ligger i Strasbourg i Frankrike og er verdens mest effektive internasjonale domstol for menneskerettigheter. Den har en makt som FN-organer bare kan droemme om.

Hvordan fungerer EMD? For det foerste har den **individklagerett**: Enhver person som mener at staten har krenket rettighetene deres etter EMK, kan klage til EMD. Tenk paa det -- du som enkeltperson kan ta din egen stat til en internasjonal domstol! For det andre kan ogsaa stater klage paa andre stater (statsklage). Men det er et viktig krav: klageren maa ha proevd saken i nasjonale domstoler foerst. EMD er siste utvei, ikke foerste stopp.

Noe av det viktigste er at EMDs dommer er **bindende** for medlemsstatene. Domstolen kan fastslaa at staten har krenket EMK, tilkjenne erstatning til klageren, og kreve endringer i nasjonal lovgivning. Dommene overvaakes av Europaraadets ministerkomite, som foelger opp at statene faktisk gjoer det domstolen har bestemt.

Norge har blitt doemt i EMD flere ganger. Et viktig eksempel er barnevernssaker, der EMD gjoentatte ganger har doemt Norge for brudd paa retten til familieliv etter artikkel 8. Domstolen kritiserte manglende gjenforeningsmaal og for strenge samvaersbegrensninger. Dette foerte til endringer i norsk barnevernspraksis. EMD har ogsaa behandlet saker om ytringsfrihet og pressefrihet, og om soningsforhold i norske fengsler. Naar Norge doemmes, maa vi betale eventuell erstatning, vurdere aa endre lovgivning, og endre praksis hos myndighetene.`,
    },
    {
      id: 'samfunnskunnskap-6-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa EMD og det europeiske systemets styrke:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-4-n-quiz2-q0',
            task: 'Hva er individklagerett?',
            options: [
              { id: 'a', text: 'Retten til aa klage paa enkeltpersoner', isCorrect: false },
              { id: 'b', text: 'Enkeltpersoners rett til aa klage staten inn for EMD ved brudd paa rettigheter', isCorrect: true },
              { id: 'c', text: 'Retten til aa klage paa FN-vedtak', isCorrect: false },
              { id: 'd', text: 'En rettighet bare for statsborgere i EU', isCorrect: false },
            ],
            solution: 'Individklagerett betyr at enhver person som mener at staten har krenket rettighetene deres etter EMK, kan klage direkte til EMD. Man maa foerst ha proevd saken i nasjonale domstoler.',
          },
          {
            id: 'samfunnskunnskap-6-4-n-quiz2-q1',
            task: 'Hvorfor regnes det europeiske menneskerettighetssystemet som sterkere enn FN-systemet?',
            options: [
              { id: 'a', text: 'Fordi det har flere medlemsland', isCorrect: false },
              { id: 'b', text: 'Fordi det bare gjelder sivile rettigheter', isCorrect: false },
              { id: 'c', text: 'Fordi EMDs dommer er bindende, individer kan klage direkte, og oppfoelgingen er effektiv', isCorrect: true },
              { id: 'd', text: 'Fordi det er nyere', isCorrect: false },
            ],
            solution: 'Det europeiske systemet er sterkere fordi EMDs dommer er juridisk bindende, individer kan klage direkte uten aa gaa gjennom staten, ministerkomitteen foelger opp dommer effektivt, og europeiske land har likere verdier.',
          },
          {
            id: 'samfunnskunnskap-6-4-n-quiz2-q2',
            task: 'Hva har Norge blitt doemt for i EMD?',
            options: [
              { id: 'a', text: 'Brudd paa retten til familieliv i barnevernssaker', isCorrect: true },
              { id: 'b', text: 'Manglende ytringsfrihet for politikere', isCorrect: false },
              { id: 'c', text: 'Brudd paa flyktningkonvensjonen', isCorrect: false },
              { id: 'd', text: 'Norge har aldri blitt doemt', isCorrect: false },
            ],
            solution: 'Norge har blitt doemt i EMD flere ganger, blant annet for brudd paa retten til familieliv i barnevernssaker (artikkel 8). Kritikken gjaldt manglende gjenforeningsmaal og for strenge samvaersbegrensninger.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-4-n-section3',
      type: 'text',
      content: `## Andre europeiske instrumenter og systemets styrke

Det europeiske systemet har mer enn bare EMK og EMD. **Den europeiske sosialpakten** dekker oekonomiske og sosiale rettigheter -- rett til arbeid, rimelige arbeidsvilkaar, sosial trygghet -- og overvaakes av Europaraadets sosialrettskomite. **EU-charteret om grunnleggende rettigheter** gjelder for EU-land og EU-institusjoner, og binder ogsaa Norge gjennom EOES paa noen omraader. **Torturforebyggingskomiteen (CPT)** besaoeker fengsler, politiarrester og psykiatriske institusjoner, og rapporterer om forholdene. **Minoritetskonvensjonen** beskytter nasjonale minoriteter, og Norge har forpliktelser overfor samer, kvener, rom, romani og skogfinner.

Hvorfor er det europeiske systemet saa mye sterkere enn FNs? Det er fire hovedgrunner. Foerst er EMDs dommer **juridisk bindende** -- stater maa foelge opp. Deretter har systemet **individklagerett** -- enkeltpersoner kan klage direkte uten aa gaa gjennom staten. Videre er det **effektiv overvaaking** gjennom ministerkomiteens oppfoelging av dommer. Og endelig gjoer **regional homogenitet** det lettere -- europeiske land har likere verdier og lettere for aa enes om standarder.

Men systemet har ogsaa utfordringer. EMD har stor saksmengde og lang behandlingstid. Noen stater motarbeider dommer de er uenige i. Og det er press fra populistiske regjeringer som misliker overnasjonalt tilsyn.`,
    },
    {
      id: 'samfunnskunnskap-6-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har sett at det europeiske menneskerettighetssystemet er verdens sterkeste. Europaraadet ble grunnlagt i 1949 og har 46 medlemsland. EMK fra 1950 beskytter sivile og politiske rettigheter og er juridisk bindende. Den europeiske menneskerettsdomstolen i Strasbourg behandler individklager og avsier bindende dommer -- ogsaa mot Norge, som blant annet er doemt i barnevernssaker.

Systemets styrke ligger i at dommene er bindende, individer kan klage direkte, og oppfoelgingen er effektiv. I tillegg finnes Den europeiske sosialpakten, EU-charteret, Torturforebyggingskomiteen og Minoritetskonvensjonen. Utfordringene er lang behandlingstid og politisk motstand fra stater som misliker aa bli overproevd.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5 NARRATIV: Menneskerettigheter i Norge
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_6_5_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-6-5-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.5',
  title: 'Menneskerettigheter i Norge',
  subtitle: 'Narrativ versjon',
  description: 'Hvordan menneskerettighetene er forankret i norsk lov -- fra Grunnlovens menneskerettighetskatalog til menneskerettsloven, institusjonene som vaaker over rettighetene, og utfordringene vi fortsatt har.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forstaa hvordan menneskerettigheter er beskyttet i Norge',
    'kjenne til menneskerettighetenes plass i norsk lov',
  ],
  linkedChapterId: 'samfunnskunnskap-6-5',
  content: [
    {
      id: 'samfunnskunnskap-6-5-n-intro',
      type: 'text',
      content: `## Et sterkt vern -- men ikke uten utfordringer

Norge har et av verdens sterkeste menneskerettighetsvern. Rettighetene er beskyttet paa flere nivaaer: Grunnloven inneholder en egen menneskerettighetskatalog, menneskerettsloven gir viktige konvensjoner direkte virkning i norsk rett, og norsk lovgivning foelger opp menneskerettighetsforpliktelsene. Norge har ratifisert de fleste FN-konvensjoner og EMK, og er dermed forpliktet til aa sikre rettighetene for alle som oppholder seg her.

Men et sterkt juridisk rammeverk betyr ikke at alt er perfekt. Ogsaa i Norge finnes det utfordringer -- fra samiske rettigheter til barnefattigdom, fra ytringsfrihet versus hatprat til personvern i den digitale tidsalderen.`,
    },
    {
      id: 'samfunnskunnskap-6-5-n-section1',
      type: 'text',
      content: `## Grunnloven og menneskerettsloven

I 2014 ble Grunnloven betydelig utvidet med et **menneskerettighetskapittel** -- kapittel E. Dette var en historisk milepael. Naa staar de viktigste rettighetene i landets hoeyeste lov. Paragraf 92 slaar fast at myndighetene skal sikre menneskerettighetene. Paragraf 93 beskytter retten til liv. Paragraf 95 sikrer rett til rettferdig rettergang. Paragraf 96 fastslaar at ingen kan straffes uten lov og dom. Paragraf 98 sikrer likhet for loven. Paragraf 100 beskytter ytringsfriheten. Paragraf 102 verner privatlivet og personvernet. Paragraf 104 gir barn egne rettigheter. Paragraf 109 sikrer rett til utdanning. Og paragraf 110 gir rett til arbeid.

Grunnloven har **trinnhoeyde** -- den staar over alle andre lover. Det betyr at ingen vanlig lov kan stride mot Grunnlovens menneskerettighetsbestemmelser.

Men Grunnloven er ikke alene. **Menneskerettsloven** fra 1999 gjoer fem sentrale konvensjoner til norsk lov: EMK, FNs konvensjon om sivile og politiske rettigheter, FNs konvensjon om oekonomiske, sosiale og kulturelle rettigheter, FNs barnekonvensjon, og FNs kvinnekonvensjon. Det avgoerende er lovens **forrangsbestemmelse** i paragraf 3: Ved konflikt mellom norsk lov og konvensjonene skal konvensjonene **gaa foran**. Det betyr at domstolene maa anvende konvensjonene direkte, at norsk lov maa tolkes i samsvar med menneskerettighetene, og at lover som strider mot konvensjonene er ugyldige.`,
    },
    {
      id: 'samfunnskunnskap-6-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa menneskerettighetene i norsk lov:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-5-n-quiz1-q0',
            task: 'Naar fikk Grunnloven sitt menneskerettighetskapittel?',
            options: [
              { id: 'a', text: '1814', isCorrect: false },
              { id: 'b', text: '1999', isCorrect: false },
              { id: 'c', text: '2014', isCorrect: true },
              { id: 'd', text: '1948', isCorrect: false },
            ],
            solution: 'I 2014 ble Grunnloven betydelig utvidet med et menneskerettighetskapittel (kapittel E). Naa staar de viktigste rettighetene i landets hoeyeste lov.',
          },
          {
            id: 'samfunnskunnskap-6-5-n-quiz1-q1',
            task: 'Hva betyr menneskerettslovens forrangsbestemmelse?',
            options: [
              { id: 'a', text: 'At Grunnloven staar over menneskerettighetene', isCorrect: false },
              { id: 'b', text: 'At FN-konvensjonene staar over norsk Grunnlov', isCorrect: false },
              { id: 'c', text: 'At konvensjonene gaar foran annen norsk lov ved motstrid', isCorrect: true },
              { id: 'd', text: 'At norske domstoler ikke kan anvende konvensjonene', isCorrect: false },
            ],
            solution: 'Forrangsbestemmelsen i menneskerettslovens paragraf 3 sier at ved konflikt mellom norsk lov og konvensjonene skal konvensjonene gaa foran. Lover som strider mot konvensjonene er ugyldige.',
          },
          {
            id: 'samfunnskunnskap-6-5-n-quiz1-q2',
            task: 'Hvor mange konvensjoner er inkorporert gjennom menneskerettsloven?',
            options: [
              { id: 'a', text: 'To', isCorrect: false },
              { id: 'b', text: 'Tre', isCorrect: false },
              { id: 'c', text: 'Fem', isCorrect: true },
              { id: 'd', text: 'Alle FN-konvensjoner', isCorrect: false },
            ],
            solution: 'Menneskerettsloven inkorporerer fem konvensjoner: EMK, SP-konvensjonen, OESK-konvensjonen, Barnekonvensjonen og Kvinnekonvensjonen. Alle disse er norsk lov med forrang.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-5-n-section2',
      type: 'text',
      content: `## Institusjonene som vaaker over rettighetene

Norge har flere institusjoner som arbeider med menneskerettigheter. **Norges institusjon for menneskerettigheter (NIM)** er et uavhengig offentlig organ som overvaaker menneskerettighetssituasjonen i landet, gir raad til Stortinget og myndighetene, og rapporterer til FN.

**Likestillings- og diskrimineringsombudet (LDO)** arbeider for likestilling og mot diskriminering. Ombudet gir veiledning til individer og fremmer klager for Diskrimineringsnemnda. **Sivilombudet** behandler klager mot offentlig forvaltning og kan paapeke menneskerettighetsbrudd. Det er uavhengig av bade regjering og Storting. **Barneombudet** er en uavhengig talsmann for barn og unges interesser, overvaaker barns rettigheter og uttaler seg i saker som beroerer barn.

Og saa har vi **domstolene**, som kanskje er den viktigste vaktbikkjen. Domstolene proever om lover og vedtak er i samsvar med menneskerettighetene. Hoeyesterett har utviklet en betydelig rettspraksis om menneskerettigheter og har i flere saker satt til side norsk lov fordi den stred mot menneskerettighetene.`,
    },
    {
      id: 'samfunnskunnskap-6-5-n-section3',
      type: 'text',
      content: `## Utfordringer i menneskerettighetenes land

Selv om Norge har sterkt menneskerettighetsvern, finnes det reelle utfordringer. Paa omraadet **urfolk og minoriteter** gjelder det samiske rettigheter og arealforvaltning -- konflikter om vindkraft paa reinbeiteomraader er et aktuelt eksempel. Nasjonale minoriteter som kvener, rom, romani og skogfinner har ogsaa utfordringer.

Blant **saarbare grupper** finner vi barn i vanskelige situasjoner, mennesker med funksjonsnedsettelser, eldre i institusjon, og innsatte i fengsel. **Sosialt utenforskap** er et vedvarende problem: fattigdom og barnefattigdom, bosteds-loeshet, rus og psykiske lidelser.

En viktig debatt handler om **ytringsfrihet og hatefulle ytringer**: Hvor gaar grensen mellom ytringsfrihet og hatprat? Straffelovens paragraf 185 forbyr hatefulle ytringer, men det er uenighet om hvor grensen boer gaa mellom vern av saarbare grupper og rommet for fri debatt.

Andre aktuelle spoersmaal er **personvern** i en digital tidsalder -- balansen mellom overvaaking og privatliv -- og **barns rettigheter** i barnevernet og i asylsaker. Det er ogsaa uenighet om hva som utgjoer diskriminering versus legitime synspunkter, og om balansen mellom ulike gruppers rettigheter og interesser.

Norge mottar jevnlig kritikk og anbefalinger fra FN-organer og EMD. Det er debatt om hvorvidt all slik kritikk er berettiget, eller om den noen ganger reflekterer politiske perspektiver snarere enn objektive standarder.`,
    },
    {
      id: 'samfunnskunnskap-6-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa norske institusjoner og utfordringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-5-n-quiz2-q0',
            task: 'Hva er NIM?',
            options: [
              { id: 'a', text: 'Norsk institutt for medisin', isCorrect: false },
              { id: 'b', text: 'Norges institusjon for menneskerettigheter, et uavhengig overvaakingsorgan', isCorrect: true },
              { id: 'c', text: 'En avdeling under Justisdepartementet', isCorrect: false },
              { id: 'd', text: 'En FN-organisasjon med kontor i Norge', isCorrect: false },
            ],
            solution: 'NIM er Norges institusjon for menneskerettigheter -- et uavhengig offentlig organ som overvaaker menneskerettighetssituasjonen, gir raad til Stortinget og myndighetene, og rapporterer til FN.',
          },
          {
            id: 'samfunnskunnskap-6-5-n-quiz2-q1',
            task: 'Hvilken institusjon er talsmann for barn og unge i Norge?',
            options: [
              { id: 'a', text: 'Sivilombudet', isCorrect: false },
              { id: 'b', text: 'LDO', isCorrect: false },
              { id: 'c', text: 'Barneombudet', isCorrect: true },
              { id: 'd', text: 'NIM', isCorrect: false },
            ],
            solution: 'Barneombudet er en uavhengig talsmann for barn og unges interesser i Norge. Ombudet overvaaker barns rettigheter og uttaler seg i saker som beroerer barn.',
          },
          {
            id: 'samfunnskunnskap-6-5-n-quiz2-q2',
            task: 'Hvilket av disse er et aktuelt menneskerettighetsdilemma i Norge?',
            options: [
              { id: 'a', text: 'Om Norge boer innfoere stemmerett', isCorrect: false },
              { id: 'b', text: 'Balansen mellom ytringsfrihet og vern mot hatefulle ytringer', isCorrect: true },
              { id: 'c', text: 'Om Norge boer ratifisere EMK', isCorrect: false },
              { id: 'd', text: 'Om kvinner boer ha stemmerett', isCorrect: false },
            ],
            solution: 'Balansen mellom ytringsfrihet og vern mot hatefulle ytringer er et aktuelt dilemma i Norge. Straffelovens paragraf 185 forbyr hatefulle ytringer, men det er uenighet om hvor grensen boer gaa.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Norge har et sterkt menneskerettighetsvern forankret i Grunnlovens kapittel E (fra 2014) og menneskerettsloven fra 1999, som gjoer fem sentrale konvensjoner til norsk lov med forrang. Viktige institusjoner som NIM, LDO, Sivilombudet, Barneombudet og domstolene arbeider for aa sikre rettighetene.

Men ogsaa i Norge finnes utfordringer. Samiske rettigheter, barnefattigdom, saarbare grupper i institusjon, balansen mellom ytringsfrihet og hatprat, og personvern i en digital tidsalder er aktuelle spoersmaal. Norge mottar jevnlig kritikk fra FN-organer og EMD, og det foeres debatt om hvordan rettighetene best kan ivaretas.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.6 NARRATIV: Barns rettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_6_6_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-6-6-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.6',
  title: 'Barns rettigheter',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan barn fikk egne rettigheter -- fra FNs barnekonvensjon til norsk lov, med fire grunnprinsipper som skal beskytte alle under 18 aar.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kjenne til FNs barnekonvensjon og dens prinsipper',
    'forstaa hvordan barns rettigheter beskyttes i Norge',
  ],
  linkedChapterId: 'samfunnskunnskap-6-6',
  content: [
    {
      id: 'samfunnskunnskap-6-6-n-intro',
      type: 'text',
      content: `## Hvorfor trenger barn egne rettigheter?

Barn er saarbare. De er avhengige av voksne for omsorg, mat, trygghet og kjaerlighet. Men barn er ogsaa selvstendige individer med egne behov, meninger og droemmer. De har rett til aa bli hoert, rett til aa leke, rett til aa laere, og rett til aa vaere trygge. Derfor har barn faatt egne rettigheter gjennom FNs barnekonvensjon.

Men hvem er egentlig et barn? Barnekonvensjonen definerer barn som alle mennesker under 18 aar. Rettighetene gjelder for alle barn, uavhengig av bakgrunn -- om du er norsk eller utenlandsk, rik eller fattig, frisk eller syk.`,
    },
    {
      id: 'samfunnskunnskap-6-6-n-section1',
      type: 'text',
      content: `## Verdens mest ratifiserte konvensjon

**FNs barnekonvensjon** ble vedtatt i 1989 og er verdens mest ratifiserte menneskerettighetskonvensjon. Nesten alle land i verden har ratifisert den -- bare USA staar utenfor. Konvensjonen inneholder 54 artikler som dekker alle sider av barns liv: sivile og politiske rettigheter, oekonomiske, sosiale og kulturelle rettigheter, og beskyttelse mot vold, overgrep og utnytting. Norge ratifiserte konvensjonen i 1991 og innarbeidet den i menneskerettsloven i 2003, noe som betyr at den er norsk lov med forrang.

Barnekonvensjonen har **fire grunnprinsipper** som gjelder ved tolkning av alle artiklene. Det foerste er **ikke-diskriminering** (artikkel 2): Alle barn har de samme rettighetene, og det er forbudt aa diskriminere barn paa noen som helst maate -- uansett barnets eller foreldrenes bakgrunn.

Det andre er **barnets beste** (artikkel 3): Barnets beste skal vaere et grunnleggende hensyn i alle avgoerelser som beroerer barn. Det betyr ikke at barnets beste alltid skal veie tyngst -- det kan finnes andre hensyn -- men det skal alltid vurderes og tillegges stor vekt. Dette gjelder for myndigheter, institusjoner, domstoler og foreldre. Hva som er barnets beste maa vurderes konkret i hver enkelt sak.

Det tredje er **rett til liv og utvikling** (artikkel 6): Alle barn har rett til liv, og staten skal sikre barnets overlevelse og utvikling. Utvikling omfatter ikke bare fysisk vekst, men ogsaa psykisk, aandelig og sosial utvikling.

Det fjerde er **rett til aa bli hoert** (artikkel 12): Barn som er i stand til aa danne egne synspunkter, skal faa uttale seg i alle saker som angaar dem. Barnets mening skal tillegges vekt etter alder og modenhet. Dette er en revolusjonaer tanke -- at barn ikke bare er passive mottakere av voksnes omsorg, men aktive deltakere med rett til aa pavirke sitt eget liv.`,
    },
    {
      id: 'samfunnskunnskap-6-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa barnekonvensjonen og dens prinsipper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-6-n-quiz1-q0',
            task: 'Naar ble FNs barnekonvensjon vedtatt?',
            options: [
              { id: 'a', text: '1948', isCorrect: false },
              { id: 'b', text: '1966', isCorrect: false },
              { id: 'c', text: '1989', isCorrect: true },
              { id: 'd', text: '2003', isCorrect: false },
            ],
            solution: 'FNs barnekonvensjon ble vedtatt i 1989 og er verdens mest ratifiserte menneskerettighetskonvensjon. Norge ratifiserte i 1991 og innarbeidet den i menneskerettsloven i 2003.',
          },
          {
            id: 'samfunnskunnskap-6-6-n-quiz1-q1',
            task: 'Hva betyr prinsippet om "barnets beste"?',
            options: [
              { id: 'a', text: 'At barnets oenske alltid skal oppfylles', isCorrect: false },
              { id: 'b', text: 'At barnets beste skal vaere et grunnleggende hensyn i alle avgoerelser som beroerer barn', isCorrect: true },
              { id: 'c', text: 'At foreldrene alltid vet best', isCorrect: false },
              { id: 'd', text: 'At barn ikke trenger aa foelge regler', isCorrect: false },
            ],
            solution: 'Barnets beste skal vaere et grunnleggende hensyn, men ikke noedvendigvis det eneste hensynet. Det skal vurderes konkret i hver sak og gjelder for myndigheter, domstoler og foreldre.',
          },
          {
            id: 'samfunnskunnskap-6-6-n-quiz1-q2',
            task: 'Hvilke fire grunnprinsipper har barnekonvensjonen?',
            options: [
              { id: 'a', text: 'Mat, utdanning, helse og lek', isCorrect: false },
              { id: 'b', text: 'Ikke-diskriminering, barnets beste, rett til liv og utvikling, rett til aa bli hoert', isCorrect: true },
              { id: 'c', text: 'Ytringsfrihet, religionsfrihet, stemmerett og privatliv', isCorrect: false },
              { id: 'd', text: 'Universelle, umistelige, udelelige og gjensidig avhengige', isCorrect: false },
            ],
            solution: 'De fire grunnprinsippene er: 1) Ikke-diskriminering, 2) Barnets beste, 3) Rett til liv og utvikling, 4) Rett til aa bli hoert. Disse gjelder ved tolkning av alle artiklene i konvensjonen.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-6-n-section2',
      type: 'text',
      content: `## Rettigheter som dekker hele livet

Barnekonvensjonen inneholder rettigheter som dekker alle sider av et barns liv. **Beskyttelsesrettighetene** gir beskyttelse mot vold, overgrep og omsorgssvikt (artikkel 19), mot barnearbeid (artikkel 32), mot seksuell utnytting (artikkel 34), mot menneskehandel (artikkel 35), og saerlig beskyttelse for flyktningbarn (artikkel 22).

**Utviklingsrettighetene** sikrer rett til utdanning (artikkel 28-29), rett til lek og fritid (artikkel 31), rett til helse og helsetjenester (artikkel 24), og rett til tilfredsstillende levestandard (artikkel 27).

**Deltakelsesrettighetene** gir barn rett til ytringsfrihet (artikkel 13), tanke-, samvittighets- og religionsfrihet (artikkel 14), forenings- og forsamlingsfrihet (artikkel 15), og rett til informasjon (artikkel 17).

**Familierettighetene** sikrer retten til aa kjenne og faa omsorg fra foreldrene (artikkel 7), rett til familieliv (artikkel 9), og rett til samvaer med begge foreldre ved samlivsbrudd (artikkel 9).

I Norge er barns rettigheter beskyttet gjennom flere lover. **Grunnlovens paragraf 104** slaar fast at barn har krav paa respekt for sitt menneskeverd, at barnets beste skal vaere et grunnleggende hensyn, og at barn har rett til aa bli hoert. **Barneloven** regulerer forholdet mellom barn og foreldre, inkludert foreldreansvar, samvaersrett, og forbud mot fysisk avstraffelse. **Barnevernsloven** beskytter barn mot omsorgssvikt med barnets beste som overordnet prinsipp. **Opplaeringssloven** sikrer rett og plikt til grunnskoleopplaering, rett til videregaaende opplaering, og tilpasset opplaering. Og **Barneombudet** er en uavhengig talsmann som overvaaker barns rettigheter og uttaler seg i saker som beroerer barn.`,
    },
    {
      id: 'samfunnskunnskap-6-6-n-section3',
      type: 'text',
      content: `## Utfordringer -- bade naert og fjernt

Til tross for sterkt juridisk vern staar barns rettigheter overfor betydelige utfordringer, bade i Norge og globalt.

I Norge vokser rundt 12 prosent av barn opp i familier med vedvarende lavinntekt -- det vi kaller barnefattigdom. Det er en paagaaende debatt om balansen mellom beskyttelse og familieliv i barnevernet. Psykiske helseplager blant unge er oekende. Mobbing er et vedvarende problem bade i skolen og paa nettet. Og asylbarn som har bodd lenge i Norge lever i uvisshet.

Globalt er bildet enda mer alvorlig. Over 160 millioner barn arbeider -- mange av dem under farlige forhold. Barn rekrutteres som soldater i vaepnede konflikter. Millioner av jenter giftes bort som barn. Millioner av barn faar ikke gaa paa skole. Barn rammes hardest av fattigdom, og de lider uforholdsmessig mye i kriger og humanitaere kriser.

FNs barnekomite overvaaker statenes etterlevelse av konvensjonen og gir anbefalinger. Norge mottar jevnlig kritikk og paaleg om forbedringer -- et tegn paa at ogsaa velstaaende land har en vei aa gaa.`,
    },
    {
      id: 'samfunnskunnskap-6-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa barns rettigheter i Norge og globalt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-6-n-quiz2-q0',
            task: 'Hvilken norsk lov grunnlovsfester barns rettigheter?',
            options: [
              { id: 'a', text: 'Barneloven', isCorrect: false },
              { id: 'b', text: 'Menneskerettsloven', isCorrect: false },
              { id: 'c', text: 'Grunnlovens paragraf 104', isCorrect: true },
              { id: 'd', text: 'Opplaeringssloven', isCorrect: false },
            ],
            solution: 'Grunnlovens paragraf 104 grunnlovsfester barns rettigheter: barn har krav paa respekt for sitt menneskeverd, barnets beste skal vaere grunnleggende hensyn, og barn har rett til aa bli hoert.',
          },
          {
            id: 'samfunnskunnskap-6-6-n-quiz2-q1',
            task: 'Omtrent hvor mange prosent av barn i Norge vokser opp i familier med vedvarende lavinntekt?',
            options: [
              { id: 'a', text: 'Rundt 2 prosent', isCorrect: false },
              { id: 'b', text: 'Rundt 12 prosent', isCorrect: true },
              { id: 'c', text: 'Rundt 25 prosent', isCorrect: false },
              { id: 'd', text: 'Rundt 40 prosent', isCorrect: false },
            ],
            solution: 'Rundt 12 prosent av barn i Norge vokser opp i familier med vedvarende lavinntekt. Dette er barnefattigdom, som er en av de viktigste utfordringene for barns rettigheter i Norge.',
          },
          {
            id: 'samfunnskunnskap-6-6-n-quiz2-q2',
            task: 'Omtrent hvor mange barn i verden arbeider?',
            options: [
              { id: 'a', text: 'Rundt 10 millioner', isCorrect: false },
              { id: 'b', text: 'Rundt 50 millioner', isCorrect: false },
              { id: 'c', text: 'Over 160 millioner', isCorrect: true },
              { id: 'd', text: 'Over 500 millioner', isCorrect: false },
            ],
            solution: 'Over 160 millioner barn arbeider globalt, mange under farlige forhold. Barnearbeid er en av de stoerste globale utfordringene for barns rettigheter.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-6-n-summary',
      type: 'text',
      content: `## Oppsummering

FNs barnekonvensjon fra 1989 er verdens mest ratifiserte menneskerettighetskonvensjon, med 54 artikler som beskytter alle under 18 aar. De fire grunnprinsippene -- ikke-diskriminering, barnets beste, rett til liv og utvikling, og rett til aa bli hoert -- gjelder ved tolkning av alle artiklene.

I Norge er barns rettigheter beskyttet gjennom Grunnloven, barneloven, barnevernsloven, opplaeringssloven og Barneombudet. Men utfordringene finnes: barnefattigdom, psykisk uhelse, mobbing og barnevernssaker i Norge, og barnearbeid, barnesoldater, barneekteskap, manglende utdanning og fattigdom globalt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.7 NARRATIV: Utfordringer og konflikter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_6_7_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-6-7-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.7',
  title: 'Utfordringer og konflikter',
  subtitle: 'Narrativ versjon',
  description: 'Hva skjer naar rettigheter kolliderer, kulturer møtes og stater nekter aa samarbeide? En aaerlig utforskning av menneskerettighetenes vanskeligste spoersmaal.',
  estimatedMinutes: 30,
  competenceGoals: [
    'droeste rettighetskollisjoner og dilemmaer',
    'vurdere utfordringer med aa haandheve menneskerettigheter',
  ],
  linkedChapterId: 'samfunnskunnskap-6-7',
  content: [
    {
      id: 'samfunnskunnskap-6-7-n-intro',
      type: 'text',
      content: `## Naar rettighetene moeter virkeligheten

Vi har laert om menneskerettighetene som noble prinsipper -- universelle, umistelige, udelelige. Men hva skjer naar vi proever aa anvende dem i praksis? Da oppdager vi raskt at menneskerettighetene ikke er uproblematiske. Rettigheter kan kollidere med hverandre. De maa balanseres mot andre hensyn. Kulturelle forskjeller gjoer tolkningen vanskelig. Og selv om rettighetene finnes paa papiret, er det enormt krevende aa haandheve dem.

Det er viktig aa forstaa disse utfordringene. Ikke for aa undergrave menneskerettighetene, men for aa kunne delta i debatten med aapenhet og klokskap.`,
    },
    {
      id: 'samfunnskunnskap-6-7-n-section1',
      type: 'text',
      content: `## Naar rettigheter kolliderer

**Rettighetskollisjoner** oppstaar naar ulike rettigheter trekker i motsatt retning. Da maa noen gjoere en avveining -- og det finnes sjelden perfekte svar.

Tenk paa **ytringsfrihet versus vern mot hatprat**. Ytringsfrihet er grunnleggende i demokratiet -- uten den kan vi ikke ha fri debatt, kritisere makthaverne eller avdekke urett. Men ytringer kan ogsaa krenke, true og skade. Rasistiske ytringer kan gjoere livet utrygt for minoriteter. Saa hvor gaar grensen?

Eller tenk paa **privatliv versus sikkerhet**. Retten til privatliv beskytter deg mot overvaaking fra staten. Men overvaaking kan forebygge terrorisme og alvorlig kriminalitet. Hvis politiet kunne lese alle meldingene dine, ville de kanskje stanse noen angrep -- men ville du ville leve i et samfunn der ingenting er privat?

**Religionsfrihet versus likestilling** er en annen vanskelig kollisjon. Retten til religioes praksis er beskyttet, men noen religioese praksiser diskriminerer kvinner. Skal staten gripe inn i religioese samfunn for aa sikre likestilling, eller er det et brudd paa religionsfriheten?

Og **ytringsfrihet versus privatliv** oppstaar naar pressen vil informere offentligheten om noe som beroerer privatpersoners privatliv. Offentlige personer maa taale mer offentlig oppmerksomhet enn privatpersoner, men hvor gaar grensen?`,
    },
    {
      id: 'samfunnskunnskap-6-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa rettighetskollisjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-7-n-quiz1-q0',
            task: 'Hva er en rettighetskolilsjon?',
            options: [
              { id: 'a', text: 'Naar en stat nekter aa ratifisere en konvensjon', isCorrect: false },
              { id: 'b', text: 'Naar ulike rettigheter trekker i motsatt retning og maa avveies', isCorrect: true },
              { id: 'c', text: 'Naar to stater er uenige om menneskerettigheter', isCorrect: false },
              { id: 'd', text: 'Naar FN vedtar motstridende konvensjoner', isCorrect: false },
            ],
            solution: 'En rettighetskollisjon oppstaar naar ulike rettigheter trekker i motsatt retning. For eksempel kan ytringsfrihet kollidere med vern mot hatprat, eller privatliv med sikkerhet.',
          },
          {
            id: 'samfunnskunnskap-6-7-n-quiz1-q1',
            task: 'Hvilke to rettigheter kolliderer naar staten vil overvaake kommunikasjon for aa forebygge terror?',
            options: [
              { id: 'a', text: 'Ytringsfrihet og religionsfrihet', isCorrect: false },
              { id: 'b', text: 'Rett til utdanning og rett til arbeid', isCorrect: false },
              { id: 'c', text: 'Rett til privatliv og rett til sikkerhet', isCorrect: true },
              { id: 'd', text: 'Stemmerett og forsamlingsfrihet', isCorrect: false },
            ],
            solution: 'Overvaaking for aa forebygge terror skaper en kollisjon mellom retten til privatliv (artikkel 8 EMK) og retten til sikkerhet. Balansen mellom frihet og trygghet er et av de vanskeligste spoersmaalene i moderne demokratier.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-7-n-section2',
      type: 'text',
      content: `## Hvordan avveie rettigheter?

Naar rettigheter kolliderer, maa man foreta en **forholdsmessighetsvurdering**. Denne har flere elementer.

Foerst maa man vurdere **noedvendighet**: Er inngrepet noedvendig for aa beskytte den andre rettigheten? Finnes det mindre inngripende alternativer? Hvis politiet kan forebygge terrorisme med mildere midler enn masseovervaaking, er masseovervaaking ikke noedvendig.

Deretter vurderer man **proporsjonalitet**: Staar inngrepet i forhold til formaalet? Er gevinsten stoerre enn kostnaden? Aa forby all religioes praksis for aa sikre likestilling ville vaere uforholdsmessig -- men aa forby tvangsekteskap er forholdsmessig.

Man maa ogsaa respektere **kjernen i rettigheten**. Rettigheter har en kjerne som ikke kan krenkes. Absolutte forbud -- som forbudet mot tortur -- kan aldri fravikes, uansett omstendigheter. Andre rettigheter kan begrenses, men de kan ikke utslettes.

Og til slutt kreves **demokratisk legitimitet**: Begrensninger maa vedtas gjennom demokratiske prosesser og vaere forankret i lov. Domstolene kontrollerer at begrensningene holder seg innenfor rammene. Denne avveiningen gjoeres ofte av domstolene, som EMD eller Hoeyesterett.`,
    },
    {
      id: 'samfunnskunnskap-6-7-n-section3',
      type: 'text',
      content: `## Den store debatten: Universalisme versus kulturrelativisme

En av de mest grunnleggende debattene om menneskerettigheter handler om universalitet. **Universalisme** hevder at menneskerettighetene gjelder for alle mennesker, uavhengig av kultur, religion eller tradisjon. Rettighetene er nedtegnet i internasjonale avtaler som alle stater er bundet av. Det finnes ingen kulturell unnskyldning for tortur, slaveri eller undertrykkelse.

**Kulturrelativisme** ser det annerledes. Kulturrelativister hevder at verdier og rettigheter er kulturelt betinget. De mener at vestlige verdier paatvinges andre kulturer gjennom menneskerettighetssystemet, og at man maa respektere ulike tradisjoner. Noen kaller menneskerettighetene for «vestlig imperialisme» i en ny drakt.

Diskusjonen dreier seg om grunnleggende spoersmaal: Er menneskerettighetene universelle standarder som alle maa foelge? Eller er de uttrykk for vestlige verdier som ikke noedvendigvis passer overalt? Hvordan skal vi haandtere praksiser som strider mot menneskerettighetene men som er dypt forankret i lokale tradisjoner?

En mulig **mellomposisjon** sier at kjerneverdiene -- som retten til liv og forbudet mot tortur -- er universelle. Ingen kultur aksepterer at dens egne medlemmer tortureres. Men anvendelsen kan tilpasses kulturell kontekst. Dialog er bedre enn paatvingelses, men man kan ikke akseptere grove overgrep med henvisning til kultur.`,
    },
    {
      id: 'samfunnskunnskap-6-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa universalisme, kulturrelativisme og forholdsmessighet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-7-n-quiz2-q0',
            task: 'Hva er en forholdsmessighetsvurdering?',
            options: [
              { id: 'a', text: 'En vurdering av hvor mange land som har ratifisert en konvensjon', isCorrect: false },
              { id: 'b', text: 'En juridisk avveining av om et inngrep i en rettighet er noedvendig og proporsjonalt', isCorrect: true },
              { id: 'c', text: 'En sammenligning av ulike lands menneskerettighetssituasjon', isCorrect: false },
              { id: 'd', text: 'En beregning av kostnaden ved aa gjennomfoere rettigheter', isCorrect: false },
            ],
            solution: 'En forholdsmessighetsvurdering er en juridisk avveining som vurderer om et inngrep i en rettighet er noedvendig, proporsjonalt, respekterer rettighetens kjerne, og har demokratisk legitimitet.',
          },
          {
            id: 'samfunnskunnskap-6-7-n-quiz2-q1',
            task: 'Hva mener kulturrelativister?',
            options: [
              { id: 'a', text: 'At alle kulturer maa foelge vestlige verdier', isCorrect: false },
              { id: 'b', text: 'At verdier og rettigheter er kulturelt betinget og ikke kan paatvinges utenfra', isCorrect: true },
              { id: 'c', text: 'At kultur er irrelevant for menneskerettigheter', isCorrect: false },
              { id: 'd', text: 'At FN boer bestemme alle kulturelle spoersmaal', isCorrect: false },
            ],
            solution: 'Kulturrelativister hevder at verdier og rettigheter er kulturelt betinget. De mener det er problematisk aa paatvinges andre kulturer vestlige standarder, og at man maa respektere ulike tradisjoner.',
          },
          {
            id: 'samfunnskunnskap-6-7-n-quiz2-q2',
            task: 'Hva er et eksempel paa en absolutt rettighet som aldri kan fravikes?',
            options: [
              { id: 'a', text: 'Ytringsfrihet', isCorrect: false },
              { id: 'b', text: 'Religionsfrihet', isCorrect: false },
              { id: 'c', text: 'Forbudet mot tortur', isCorrect: true },
              { id: 'd', text: 'Stemmerett', isCorrect: false },
            ],
            solution: 'Forbudet mot tortur er en absolutt rettighet som aldri kan fravikes, uansett omstendigheter -- heller ikke i krig eller ved terrorfare. Rettigheter som ytringsfrihet og religionsfrihet kan begrenses under visse vilkaar.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-7-n-section4',
      type: 'text',
      content: `## Haandhevelsens utfordringer og menneskerettighetenes fremtid

Selv om menneskerettighetene er godt formulert paa papiret, er det enormt krevende aa haandheve dem i praksis. **Suverenitetsprinsippet** betyr at stater har selvbestemmelsesrett, og menneskerettigheter griper inn i det stater anser som sine indre anliggender. Det skaper en grunnleggende spenning. Det finnes **ingen verdenspoliti** -- FN kan vedta sanksjoner, men er avhengig av Sikkerhetsraadet der stormakter kan blokkere tiltak. Svake stater rammes lettere av sanksjoner enn sterke. **Politisering** gjoer at allierte skaanes mens rivaler kritiseres, og denne dobbeltmoralen svekker systemets legitimitet. Og **ressursmangel** betyr at FN og regionale organer har begrensede budsjetter og lange koeer.

I tillegg staar menneskerettighetene overfor helt nye utfordringer. Teknologisk overvaaking gjoer det mulig aa foelge med paa borgerne paa maater som var utenkelige for noen tiaar siden. Klimaendringer truer grunnleggende rettigheter som retten til mat, vann og bolig. Store selskaper har enorm makt men begrenset ansvar under menneskerettighetslovgivningen. Og terrorbekjempelse brukes som argument for aa innskrenke rettssikkerheten.

Fremtiden byr paa bade utfordringer og debatter. Autoritaere regimer undertrykker opposisjon. Noen mener internasjonale organer gaar for langt i aa overstyre nasjonale demokratier, mens andre mener internasjonalt press er noedvendig for aa beskytte minoriteter. Det er debatt om hvem som skal definere menneskerettighetenes innhold og om overnasjonale domstolers demokratiske legitimitet.

Men det finnes ogsaa muligheter: Oekt bevissthet om rettigheter, sivilsamfunnet som vaktbikkje, juridisk utvikling i domstolene, og bred enighet om grunnleggende verdier som rettssikkerhet og ytringsfrihet. Menneskerettigheter er aldri fullstendig sikret -- de krever kontinuerlig arbeid og aaervakenhet. Demokrati og menneskerettigheter haenger sammen. Og alle har et ansvar for aa forsvare rettighetene.

Menneskerettighetene er ikke perfekte, men de representerer en felles standard for menneskelig verdighet som vi alle kan holde fast ved.`,
    },
    {
      id: 'samfunnskunnskap-6-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv paa haandhevelse og fremtidige utfordringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-6-7-n-quiz3-q0',
            task: 'Hva er den stoerste utfordringen med aa haandheve menneskerettigheter internasjonalt?',
            options: [
              { id: 'a', text: 'At konvensjonene er for vanskelige aa forstaa', isCorrect: false },
              { id: 'b', text: 'At det mangler tvangsmakt -- det finnes ingen verdenspoliti', isCorrect: true },
              { id: 'c', text: 'At for faa land har ratifisert konvensjonene', isCorrect: false },
              { id: 'd', text: 'At menneskerettighetene er utdaterte', isCorrect: false },
            ],
            solution: 'Den stoerste utfordringen er manglende tvangsmakt. Det finnes ingen verdenspoliti, og FN er avhengig av Sikkerhetsraadet der stormakter kan blokkere tiltak. Stater kan i praksis bryte menneskerettighetene uten aa bli stoppet.',
          },
          {
            id: 'samfunnskunnskap-6-7-n-quiz3-q1',
            task: 'Hva betyr suverenitetsprinsippet i sammenheng med menneskerettigheter?',
            options: [
              { id: 'a', text: 'At FN har makt over alle stater', isCorrect: false },
              { id: 'b', text: 'At alle stater maa foelge EMDs dommer', isCorrect: false },
              { id: 'c', text: 'At stater har selvbestemmelsesrett, noe som kan hindre internasjonal innblanding', isCorrect: true },
              { id: 'd', text: 'At bare demokratier har rettigheter', isCorrect: false },
            ],
            solution: 'Suverenitetsprinsippet betyr at stater har selvbestemmelsesrett. Dette kan komme i konflikt med menneskerettighetene fordi stater kan hevde at menneskerettighetsspoersmaal er indre anliggender.',
          },
          {
            id: 'samfunnskunnskap-6-7-n-quiz3-q2',
            task: 'Hvilken av disse er en ny utfordring for menneskerettighetene?',
            options: [
              { id: 'a', text: 'Slaveri', isCorrect: false },
              { id: 'b', text: 'Teknologisk masseovervaaking', isCorrect: true },
              { id: 'c', text: 'Kolonialisme', isCorrect: false },
              { id: 'd', text: 'Verdenskrig', isCorrect: false },
            ],
            solution: 'Teknologisk masseovervaaking er en ny utfordring. Moderne teknologi gjoer det mulig aa overvake borgere paa maater som var utenkelige for noen tiaar siden, noe som truer retten til privatliv og personvern.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-6-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at menneskerettighetene reiser vanskelige spoersmaal naar de moeter virkeligheten. Rettigheter kan kollidere -- som ytringsfrihet mot hatprat, eller privatliv mot sikkerhet -- og maa avveies gjennom forholdsmessighetsvurderinger som vektlegger noedvendighet, proporsjonalitet og rettighetens kjerne.

Debatten mellom universalisme og kulturrelativisme handler om hvorvidt menneskerettighetene er universelle standarder eller vestlige verdier. En mulig mellomposisjon sier at kjerneverdiene er universelle, men at anvendelsen kan tilpasses kontekst.

Haandhevelsen er utfordrende paa grunn av suverenitetsprinsippet, manglende tvangsmakt, politisering og ressursmangel. Nye utfordringer som teknologisk overvaaking, klimaendringer og terrorbekjempelse gjoer bildet enda mer komplekst. Men menneskerettighetene representerer en felles standard for menneskelig verdighet som krever kontinuerlig arbeid og aaervakenhet aa forsvare.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 6 Narrativ
// ============================================================================

export const SAMFUNNSKUNNSKAP_NARRATIV_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSKUNNSKAP_6_1_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_6_2_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_6_3_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_6_4_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_6_5_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_6_6_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_6_7_NARRATIV,
];
