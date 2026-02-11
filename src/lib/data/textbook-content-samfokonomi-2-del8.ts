/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Samfunnsøkonomi 2 VG3 - Del 8: Aktuelle økonomiske debatter
 * Kapittel 8.1–8.5
 *
 * Dekker LK20 kompetansemål:
 * - drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver
 * - analysere årsaker til og konsekvenser av økonomisk ulikhet og vurdere virkemidler for omfordeling
 * - drøfte utfordringer knyttet til boligmarked, gjeldsvekst og finansiell stabilitet
 * - vurdere digitale valutaer og teknologisk endring i finanssystemet
 * - analysere tendenser til deglobalisering og proteksjonisme i verdensøkonomien
 * - sammenlikne ulike økonomiske skoler og deres politikkanbefalinger
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Ulikhet og rettferdighet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_1: TextbookChapter = {
  id: 'samfokonomi-2-8-1',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.1',
  title: 'Ulikhet og rettferdighet',
  description: 'Piketty, formuesskatt og omfordeling.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
  ],
  content: [
    {
      id: 'sf2-8-1-intro',
      type: 'text',
      content: `## Økonomisk ulikhet – en av vår tids store debatter

Siden finanskrisen i 2008 har økonomisk ulikhet blitt et av de mest debatterte temaene i samfunnsøkonomien. Den franske økonomen Thomas Piketty satte debatten i brann med boken *Capital in the Twenty-First Century* (2013), der han viste at formuesulikheten har økt kraftig i vestlige land siden 1980-tallet.

I dette kapittelet skal du lære:
- Hvordan økonomisk ulikhet måles og har utviklet seg
- Pikettys sentrale teori om $r > g$
- Argumenter for og mot omfordeling
- Virkemidler som formuesskatt, arveavgift og progressiv beskatning`,
    },
    {
      id: 'sf2-8-1-def-1',
      type: 'definition',
      title: 'Gini-koeffisient',
      content: `**Gini-koeffisienten** er det mest brukte målet på økonomisk ulikhet. Den varierer fra 0 (perfekt likhet – alle har lik inntekt) til 1 (perfekt ulikhet – én person har all inntekt). Norge har en Gini-koeffisient på ca. 0,27 for disponibel inntekt, mens USA ligger rundt 0,39. Koeffisienten beregnes fra Lorenz-kurven, som viser kumulativ andel av inntekten mot kumulativ andel av befolkningen.`,
    },
    {
      id: 'sf2-8-1-text-1',
      type: 'text',
      content: `### Pikettys teori: $r > g$

Thomas Pikettys hovedargument er enkelt, men kraftfullt: Når avkastningen på kapital ($r$) er større enn den økonomiske vekstraten ($g$), vil formuesulikheten øke over tid.

**Mekanismen:** De som eier kapital (aksjer, eiendom, obligasjoner) får en avkastning som overstiger den generelle økonomiske veksten. Arbeids­inntekter vokser omtrent i takt med $g$, mens kapitalinntekter vokser i takt med $r$. Når $r > g$ over lang tid, får kapitaleierne en stadig større andel av totalinntekten.

Piketty viste med historiske data at $r$ typisk har ligget på 4–5 % per år, mens $g$ sjelden overstiger 1–2 %. Unntaket var perioden 1914–1970, da kriger, inflasjon og høy økonomisk vekst midlertidig reduserte ulikheten.

**Kritikk av Piketty:**
- Ikke all kapitalavkastning reinvesteres – konsum og skatt reduserer akkumulasjonen
- Humankapital (utdanning) er utelatt fra analysen
- Datagrunnlaget er omdiskutert for enkelte perioder og land
- Teknologisk endring kan endre forholdet mellom $r$ og $g$`,
    },
    {
      id: 'sf2-8-1-def-2',
      type: 'definition',
      title: 'Formuesskatt',
      content: `**Formuesskatt** er en skatt på netto formue (eiendeler minus gjeld) som betales årlig. Norge er ett av få OECD-land som fortsatt har formuesskatt (0,95–1,1 % i 2024). Tilhengere mener den bidrar til omfordeling og skattlegger reell skatteevne. Kritikere hevder den fører til kapitalflukt, rammer bedriftseiere som har formue bundet i virksomheten, og at den har blitt avskaffet i de fleste andre land.`,
    },
    {
      id: 'sf2-8-1-text-2',
      type: 'text',
      content: `### Omfordelingsdebatten

Debatten om omfordeling handler om balansen mellom likhet og effektivitet.

**Argumenter for omfordeling:**
- Stor ulikhet hemmer sosial mobilitet og sjanselikhet
- Konsentrert rikdom gir urimelig politisk makt
- Omfordeling kan øke samlet etterspørsel (fattige har høyere forbrukstilbøyelighet)
- Rawls' slør av uvitenhet: Et rettferdig samfunn er ett vi ville valgt uten å vite vår posisjon

**Argumenter mot omfordeling:**
- Høye skatter svekker insentiver til arbeid, sparing og investering
- Kapitalmobilitet gjør det vanskelig å beskatte de rikeste
- Omfordeling kan skape avhengighet og redusere egeninnsats
- Nozicks rettighetsperspektiv: Rettferdig ervervede inntekter bør ikke tas fra noen

**Virkemidler for omfordeling:**
| Virkemiddel | Styrke | Svakhet |
|-------------|--------|---------|
| Progressiv inntektsskatt | Treffes bredt | Skatteplanlegging |
| Formuesskatt | Treffer konsentrert rikdom | Kapitalflukt |
| Arveavgift | Hindrer dynastisk rikdom | Lite proveny, omgåelse |
| Offentlige tjenester | Universell tilgang | Kostbart |
| Minstelønn | Direkte løfter lavtlønte | Kan øke arbeidsledighet |`,
    },
    {
      id: 'sf2-8-1-example-1',
      type: 'example',
      title: 'Pikettys $r > g$ i praksis',
      problem: 'Person A arver 10 millioner kroner og får 5 % årlig avkastning. Person B tjener 600 000 kr/år med 2 % reallønnsvekst. Beregn forskjellen etter 20 år.',
      solution: `Person A (kapitalinntekt):
$10\\,000\\,000 \\times 1{,}05^{20} = 10\\,000\\,000 \\times 2{,}653 = 26\\,533\\,000$ kr

Person B (arbeidsinntekt, sum over 20 år):
Årlig lønn år $t$: $600\\,000 \\times 1{,}02^{t-1}$
Sum over 20 år: $600\\,000 \\times \\frac{1{,}02^{20}-1}{0{,}02} = 600\\,000 \\times 24{,}30 = 14\\,579\\,000$ kr

Etter 20 år har person A 26,5 mill. i formue (uten å jobbe), mens person B har tjent 14,6 mill. totalt (før skatt og forbruk). Person As formue har vokst med 16,5 mill., mens person Bs akkumulerte inntekt er 14,6 mill. Eksempelet illustrerer Pikettys poeng: kapitalavkastning akkumuleres raskere enn arbeidsinntekt.`,
    },
    {
      id: 'sf2-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-1-ex-1',
        number: '8.1.1',
        type: 'classic',
        task: 'Forklar hva Gini-koeffisienten måler, og hvorfor Norge har lavere Gini enn USA.',
        hints: ['Tenk på forskjeller i skattesystem og velferdsordninger', 'Vurder rollen til fagforeninger og tariffavtaler'],
        solution: 'Gini-koeffisienten måler graden av inntektsulikhet i et samfunn på en skala fra 0 (perfekt likhet) til 1 (perfekt ulikhet). Norge (ca. 0,27) har lavere Gini enn USA (ca. 0,39) fordi: 1) Progressivt skattesystem med høyere marginalskatter. 2) Universelle velferdsordninger som helse, utdanning og trygd. 3) Sterk fagbevegelse med koordinert lønnsdannelse som komprimerer lønnsforskjellene. 4) Offentlig utdanning reduserer sjanseforskjeller. 5) Omfordelende overføringer som barnetrygd og bostøtte.',
      },
    },
    {
      id: 'sf2-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        task: 'Forklar Pikettys teori om $r > g$ med egne ord. Hvorfor fører dette til økt ulikhet over tid?',
        hints: ['$r$ er avkastning på kapital, $g$ er økonomisk vekst', 'Tenk på forskjellen mellom kapitaleiere og lønnsmottakere'],
        solution: 'Pikettys teori sier at når kapitalavkastningen ($r$) er høyere enn den økonomiske vekstraten ($g$), vil de som eier kapital se sin formue vokse raskere enn den generelle velstanden i samfunnet. Lønnsmottakere får typisk lønnsvekst i takt med $g$, mens kapitaleierne får avkastning i takt med $r$. Over tid betyr dette at en stadig større andel av nasjonalinntekten tilfaller kapitaleierne. Ulikheten forsterkes ytterligere ved at de rikeste reinvesterer mye av avkastningen, som gir rentes rente-effekt.',
      },
    },
    {
      id: 'sf2-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        task: 'En person har netto formue på 5 millioner kr. Formuesskatten er 1 % over et bunnfradrag på 1,7 mill. Beregn skatten.',
        hints: ['Skatten beregnes bare av formue over bunnfradraget'],
        solution: 'Skattepliktig formue: $5\\,000\\,000 - 1\\,700\\,000 = 3\\,300\\,000$ kr. Formuesskatt: $3\\,300\\,000 \\times 0{,}01 = 33\\,000$ kr. Personen betaler 33 000 kr i formuesskatt.',
      },
    },
    {
      id: 'sf2-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Diskuter to argumenter for og to argumenter mot formuesskatt som virkemiddel for omfordeling.',
        hints: ['Tenk på effektivitet vs. rettferdighet', 'Vurder internasjonale erfaringer'],
        solution: 'For: 1) Formuesskatten treffer konsentrert rikdom og bidrar til omfordeling fra de mest velstående. 2) Den skattlegger reell økonomisk evne – en person med stor formue har høy skatteevne uavhengig av inntekt. Mot: 1) De fleste OECD-land har avskaffet formuesskatt fordi kapital er mobil – rike kan flytte formue til lavskattland. 2) Formuesskatten kan ramme bedriftseiere som har formue bundet i virksomheten, og tvinge dem til å ta ut utbytte eller selge eierandeler for å betale skatten, noe som kan hemme investeringer.',
      },
    },
    {
      id: 'sf2-8-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom inntektsulikhet og formuesulikhet. Hvorfor er formuesulikheten vanligvis mye større?',
        hints: ['Tenk på akkumulering over tid', 'Vurder arv og rentes rente-effekten'],
        solution: 'Inntektsulikhet måler forskjeller i årlig inntekt (lønn, kapitalinntekter, overføringer), mens formuesulikhet måler forskjeller i akkumulert rikdom (eiendom, aksjer, bankinnskudd minus gjeld). Formuesulikheten er alltid større fordi: 1) Formue akkumuleres over livstid og generasjoner gjennom arv. 2) Rentes rente-effekten gjør at store formuer vokser raskere enn små. 3) Rike har bedre tilgang til høyavkastningsinvesteringer. I Norge er Gini for inntekt ca. 0,27, men for formue over 0,70.',
      },
    },
    {
      id: 'sf2-8-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        task: 'Rawls mente vi bør vurdere rettferdighet bak et «slør av uvitenhet». Anvend dette tankeeksperimentet på spørsmålet om omfordeling i Norge.',
        hints: ['Du vet ikke om du blir rik eller fattig, frisk eller syk', 'Tenk på hva slags samfunn du ville valgt under usikkerhet'],
        solution: 'Bak sløret av uvitenhet vet vi ikke om vi blir født rike eller fattige, friske eller syke, med gode eller dårlige evner. Rawls mener rasjonelle mennesker da ville valgt et samfunn med maksimaliseringsregelen (maximin): Ordne institusjoner slik at de dårligst stilte får det best mulig. Anvendt på Norge: De fleste ville trolig velge et samfunn med universell helse og utdanning, progressiv skatt, og et sikkerhetsnett for arbeidsledige og syke – nettopp fordi risikoen for å havne i en vanskelig situasjon er reell. Kritikere som Nozick ville imidlertid påpeke at tvungen omfordeling krenker individets rett til å beholde rettferdig ervervede eiendeler.',
      },
    },
    {
      id: 'sf2-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Gini-koeffisienten** er det vanligste målet på økonomisk ulikhet (0 = perfekt likhet, 1 = perfekt ulikhet)
- Pikettys teori om **$r > g$** forklarer hvorfor formuesulikheten tenderer til å øke over tid
- **Formuesulikhet** er mye større enn inntektsulikhet på grunn av akkumulering og arv
- Omfordelingsdebatten handler om balansen mellom **likhet og effektivitet**
- **Formuesskatt** er et omdiskutert virkemiddel – Norge er ett av få land som har beholdt den

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Gini-koeffisient | Mål på ulikhet fra 0 til 1 |
| $r > g$ | Kapitalavkastning høyere enn økonomisk vekst |
| Formuesskatt | Årlig skatt på netto formue |
| Rawls' slør av uvitenhet | Tankeeksperiment for rettferdige institusjoner |
| Progressiv beskatning | Høyere skattesats på høyere inntekt |
| Lorenz-kurven | Grafisk fremstilling av inntektsfordeling |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Boligmarkedet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_2: TextbookChapter = {
  id: 'samfokonomi-2-8-2',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.2',
  title: 'Boligmarkedet',
  description: 'Prisdannelse, boligpolitikk og gjeldsvekst.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
  ],
  content: [
    {
      id: 'sf2-8-2-intro',
      type: 'text',
      content: `## Boligmarkedet – Norges viktigste marked?

For de fleste nordmenn er boligen den klart største investeringen i livet. Boligprisene påvirker privatøkonomien, bankenes soliditet, rentenivået og den økonomiske stabiliteten. Siden 1990-tallet har boligprisene i Norge tredoblet seg reelt, og gjelden i norske husholdninger har vokst til over 250 % av disponibel inntekt.

I dette kapittelet skal du lære:
- Hvordan tilbud og etterspørsel bestemmer boligprisene
- Hvilke faktorer som driver boligprisveksten
- Sammenhengen mellom boligpriser og gjeldsvekst
- Boligpolitiske virkemidler og deres effekter`,
    },
    {
      id: 'sf2-8-2-def-1',
      type: 'definition',
      title: 'Prisdannelse i boligmarkedet',
      content: `**Boligpriser** bestemmes av tilbud og etterspørsel. Etterspørselen påvirkes av inntektsvekst, rente, befolkningsvekst, urbanisering og forventninger. Tilbudet bestemmes av nybygging, regulering og tomtetilgang. Boligmarkedet skiller seg fra andre markeder ved at tilbudet reagerer svært tregt på prisendringer – det tar 2–4 år å planlegge og bygge nye boliger. Denne tregheten gjør boligprisene spesielt volatile.`,
    },
    {
      id: 'sf2-8-2-text-1',
      type: 'text',
      content: `### Hva driver boligprisene?

Boligprisene bestemmes av samspillet mellom etterspørsel og tilbud. Vi kan dele driverne inn i:

**Etterspørselsfaktorer:**
- **Rente:** Lavere rente gjør det billigere å låne og øker etterspørselen. En rentenedgang på 1 prosentpoeng øker typisk boligprisene med 5–8 %.
- **Inntektsvekst:** Høyere lønn gir rom for høyere boliglån.
- **Befolkningsvekst og urbanisering:** Flere mennesker i byene øker etterspørselen.
- **Forventninger:** Tro på videre prisvekst skaper selvforsterkende prosesser.
- **Skattesystemet:** Rentefradrag og lav eiendomsbeskatning favoriserer boliginvestering.

**Tilbudsfaktorer:**
- **Regulering:** Strenge reguleringsplaner bremser nybygging.
- **Byggekostnader:** Materialer, arbeidskraft og tomtepriser.
- **Tilgjengelig areal:** Topografiske begrensninger i byer som Oslo og Bergen.

I norsk sammenheng har spesielt den lave renten etter 2014, kombinert med begrenset nybygging i pressområder, drevet boligprisene oppover.`,
    },
    {
      id: 'sf2-8-2-def-2',
      type: 'definition',
      title: 'Boliglånsforskriften',
      content: `**Boliglånsforskriften** er en regulering fra Finansdepartementet som setter grenser for bankenes utlånspraksis til boligformål. Krav inkluderer: maks belåningsgrad på 85 % (60 % for sekundærbolig i Oslo), avdragsplikt ved belåning over 60 %, og at låntaker skal tåle en renteøkning på 3 prosentpoeng. Formålet er å dempe gjeldsveksten og redusere risikoen for finansiell ustabilitet.`,
    },
    {
      id: 'sf2-8-2-text-2',
      type: 'text',
      content: `### Gjeldsvekst og finansiell stabilitet

Boligprisveksten og gjeldsveksten henger tett sammen i en potensielt farlig spiral:

1. Boligprisene stiger
2. Eksisterende boligeiere får høyere formue og kan låne mer
3. Økt kjøpekraft driver prisene ytterligere opp
4. Nye kjøpere må ta opp større lån for å komme inn i markedet

Norsk husholdningsgjeld utgjør over 250 % av disponibel inntekt – blant de høyeste i OECD. Norges Bank har gjentatte ganger advart om at dette er en vesentlig sårbarhet i norsk økonomi.

**Risikoen:** Dersom boligprisene faller kraftig, kan husholdninger bli «under vann» (gjeld høyere enn boligens verdi). De vil stramme inn forbruket, bankene vil tape penger, og en nedadgående spiral kan forsterke en resesjon. Dette var nettopp mekanismen bak den norske bankkrisen 1988–1993.`,
    },
    {
      id: 'sf2-8-2-example-1',
      type: 'example',
      title: 'Effekten av renteendring på boligkjøp',
      problem: 'Et par har en årsinntekt på 1,2 mill. kr og kan låne 5 ganger inntekten. Renten er 4 %. Banken krever at de tåler 3 prosentpoeng renteøkning. Hva er maks lån, og hvor mye øker årlige rentekostnader ved stresstest-renten?',
      solution: `Maks lån: $1\\,200\\,000 \\times 5 = 6\\,000\\,000$ kr.

Rentekostnader ved 4 %: $6\\,000\\,000 \\times 0{,}04 = 240\\,000$ kr/år.
Rentekostnader ved stresstest (7 %): $6\\,000\\,000 \\times 0{,}07 = 420\\,000$ kr/år.

Økning: $420\\,000 - 240\\,000 = 180\\,000$ kr/år, altså 15 000 kr mer per måned. Stresstesten sikrer at paret tåler en slik økning – rentekostnadene utgjør da 35 % av bruttoinntekten, som er i grenseland for hva de fleste anser som bærekraftig.`,
    },
    {
      id: 'sf2-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-2-ex-1',
        number: '8.2.1',
        type: 'classic',
        task: 'Forklar hvorfor boligmarkedet reagerer tregere på prisendringer enn for eksempel aksjemarkedet.',
        hints: ['Tenk på tiden det tar å bygge nye boliger', 'Vurder regulering og tomtetilgang'],
        solution: 'Boligtilbudet reagerer tregt fordi: 1) Det tar 2–4 år å regulere, planlegge og bygge nye boliger. 2) Tomtetilgang er begrenset av geografi og offentlig regulering. 3) Byggebransjen kan ikke skalere kapasiteten raskt. 4) Boliger kan ikke importeres. I aksjemarkedet kan tilbudet justeres umiddelbart gjennom emisjoner eller salg. Denne tregheten betyr at etterspørselsøkninger i boligmarkedet i stor grad slår ut i prisøkninger på kort sikt, fremfor økt tilbud.',
      },
    },
    {
      id: 'sf2-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        task: 'En bolig koster 4 millioner kr. Kjøperen har 15 % egenkapital og tar opp lån til 5 % rente med 25 års nedbetaling (annuitet). Beregn egenkapitalen og omtrentlig månedlig betaling.',
        hints: ['Egenkapital = 15 % av kjøpesum', 'Annuitetsformel: $A = L \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}$'],
        solution: 'Egenkapital: $4\\,000\\,000 \\times 0{,}15 = 600\\,000$ kr. Lån: $4\\,000\\,000 - 600\\,000 = 3\\,400\\,000$ kr. Månedlig rente: $r = 0{,}05/12 = 0{,}00417$. Antall terminer: $n = 25 \\times 12 = 300$. Månedlig annuitet: $A = 3\\,400\\,000 \\times \\frac{0{,}00417 \\times 1{,}00417^{300}}{1{,}00417^{300} - 1} \\approx 3\\,400\\,000 \\times 0{,}00585 \\approx 19\\,880$ kr/mnd.',
      },
    },
    {
      id: 'sf2-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        task: 'Forklar den selvforsterkende spiralen mellom boligpriser og gjeldsvekst. Hvorfor er dette en risiko for finansiell stabilitet?',
        hints: ['Tenk på formueseffekten av boligprisvekst', 'Vurder hva som skjer hvis spiralen snur'],
        solution: 'Spiralen: 1) Boligprisene stiger, som øker boligeiernes formue. 2) Høyere formue gir mulighet til å låne mer (med boligen som sikkerhet). 3) Mer utlån øker etterspørselen, som presser prisene videre opp. Risikoen: Denne spiralen kan snu brått. Et fall i boligprisene reduserer sikkerhetsgrunnlaget, bankene strammer inn utlån, husholdninger kutter forbruk, og realøkonomien rammes. En gjeldsgrad på 250 % av disponibel inntekt gjør norske husholdninger spesielt sårbare for renteøkninger eller inntektsbortfall.',
      },
    },
    {
      id: 'sf2-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Drøft om boliglånsforskriften er et godt virkemiddel for å dempe boligprisveksten.',
        hints: ['Tenk på hvem som rammes', 'Vurder om det behandler symptomer eller årsaker'],
        solution: 'For: 1) Forskriften begrenser overlånssetting og reduserer risikoen for finanskrise. 2) Stresstesten sikrer at låntakere tåler renteøkninger. 3) Den demper gjeldsoppbyggingen i husholdningssektoren. Mot: 1) Den rammer førstegangskjøpere hardest, da de mangler egenkapital – dette kan øke ulikheten. 2) Den behandler etterspørselssiden, men ikke tilbudsproblemene (for lite bygging). 3) Rike foreldre kan hjelpe sine barn utenom forskriften. 4) Den kan flytte risiko til uregulert sektor. Konklusjon: Forskriften er nødvendig for finansiell stabilitet, men bør suppleres med tiltak på tilbudssiden.',
      },
    },
    {
      id: 'sf2-8-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Forklar hvordan det norske skattesystemet favoriserer boliginvestering sammenlignet med andre investeringer.',
        hints: ['Tenk på rentefradrag og skatt på utleieinntekter', 'Sammenlign med beskatning av aksjer og bankinnskudd'],
        solution: 'Norsk skattesystem favoriserer bolig gjennom: 1) Rentefradrag – renteutgifter på boliglån gir 22 % skattefradrag. 2) Skattefritt salg av egen bolig (etter ett års botid). 3) Lav formuesverdi – bolig verdsettes til 25 % av markedsverdi (primærbolig) mot 100 % for bankinnskudd. 4) Ingen skatt på fordel av egen bruk (avskaffet i 2005). 5) Ingen eiendomsskatt i mange kommuner. Til sammenligning skattlegges aksjeinntekter med 37,84 % (med oppjusteringsfaktor). Denne forskjellsbehandlingen gir insentiver til å overinvestere i bolig fremfor produktiv kapital.',
      },
    },
    {
      id: 'sf2-8-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-2-ex-6',
        number: '8.2.6',
        type: 'classic',
        task: 'Analyser fordeler og ulemper ved å innføre høyere eiendomsskatt i Norge som tiltak for å dempe boligprisveksten.',
        hints: ['Tenk på hvem som bærer byrden', 'Vurder internasjonale erfaringer'],
        solution: 'Fordeler: 1) Eiendomsskatt er vanskelig å unndra – boliger kan ikke flyttes til utlandet. 2) Det reduserer den skattemessige favoriseringen av bolig og kan dempe prisveksten. 3) Det gir kommunene en stabil inntektskilde. 4) OECD anbefaler eiendomsskatt som en av de minst vridende skattene. Ulemper: 1) Rammer boligeiere med lav inntekt men høy boligverdi (f.eks. pensjonister). 2) Politisk upopulært. 3) Kan ha begrenset effekt alene dersom tilbudssiden ikke bedres. 4) Øker bokostnadene for alle. En gradvis innfasing med bunnfradrag og skjermingsordninger kan redusere de negative fordelingseffektene.',
      },
    },
    {
      id: 'sf2-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Boligpriser** bestemmes av tilbud og etterspørsel, der tilbudet reagerer tregt
- Lave renter, inntektsvekst og begrenset nybygging har drevet boligprisene opp i Norge
- **Gjeldsveksten** i norske husholdninger (over 250 % av disponibel inntekt) utgjør en systemrisiko
- **Boliglånsforskriften** begrenser bankenes utlån for å dempe risikoen
- Skattesystemet **favoriserer boliginvestering** og bidrar til prispress

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Boliglånsforskriften | Regulering av bankenes boligutlån |
| Belåningsgrad | Lån som andel av boligens verdi |
| Stresstest | Krav om å tåle 3 pp renteøkning |
| Formueseffekt | Økt forbruk når boligformuen stiger |
| Annuitetslån | Lån med like store terminbeløp |
| Tilbudstreghet | Lang tid fra behov til nybygging |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Kryptovaluta og digitale penger
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_3: TextbookChapter = {
  id: 'samfokonomi-2-8-3',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.3',
  title: 'Kryptovaluta og digitale penger',
  description: 'Bitcoin og sentralbankdigital valuta.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
  ],
  content: [
    {
      id: 'sf2-8-3-intro',
      type: 'text',
      content: `## Pengenes fremtid: Fra mynt til kode

Penger har utviklet seg fra varepenger (gull, sølv) via sedler og mynter til digitale tall på en konto. Nå står vi overfor neste revolusjon: kryptovalutaer som Bitcoin utfordrer tradisjonelle pengesystemer, mens sentralbanker utvikler sine egne digitale valutaer.

I dette kapittelet skal du lære:
- Hva kryptovaluta er og hvordan Bitcoin fungerer
- Utfordringer og muligheter ved desentraliserte pengesystemer
- Hva sentralbankdigital valuta (CBDC) er og hvorfor sentralbanker vurderer det
- Implikasjoner for pengepolitikk og det finansielle systemet`,
    },
    {
      id: 'sf2-8-3-def-1',
      type: 'definition',
      title: 'Kryptovaluta',
      content: `**Kryptovaluta** er digital valuta som bruker kryptografisk teknologi for å sikre transaksjoner og kontrollere utstedelsen av nye enheter. I motsetning til tradisjonelle penger utstedes kryptovaluta ikke av en sentralbank, men av et desentralisert nettverk. Bitcoin, lansert i 2009, var den første kryptovalutaen. Den bruker blokkjedeteknologi der transaksjoner verifiseres av nettverket gjennom en prosess kalt mining (graving).`,
    },
    {
      id: 'sf2-8-3-text-1',
      type: 'text',
      content: `### Bitcoin og blokkjeden

Bitcoin ble skapt i 2009 av den pseudonyme Satoshi Nakamoto. Ideen var å lage et betalingssystem uten behov for en betrodd tredjepart (som en bank).

**Sentrale egenskaper ved Bitcoin:**
- **Desentralisert:** Ingen sentralbank eller myndighet kontrollerer nettverket
- **Begrenset mengde:** Maks 21 millioner Bitcoin kan noensinne lages
- **Blokkjede:** Alle transaksjoner registreres i en offentlig, uforanderlig database
- **Pseudonymitet:** Brukerne identifiseres med adresser, ikke navn

**Bitcoins verdi** bestemmes utelukkende av tilbud og etterspørsel. Det er ingen underliggende inntektsstrøm (som utbytte for aksjer) eller stat som garanterer verdien. Prisen har vært ekstremt volatil – fra under 1 dollar i 2010 til over 100 000 dollar i 2024, med flere krasj på 50–80 % underveis.

**Energibruk** er en stor utfordring. Bitcoins proof-of-work-mekanisme krever enorme mengder energi. I 2024 brukte Bitcoin-nettverket omtrent like mye strøm som hele Finland.`,
    },
    {
      id: 'sf2-8-3-def-2',
      type: 'definition',
      title: 'Sentralbankdigital valuta (CBDC)',
      content: `**Sentralbankdigital valuta (CBDC – Central Bank Digital Currency)** er en digital form for sentralbankpenger som er tilgjengelig direkte for publikum. I dag er sentralbankpenger kun tilgjengelig digitalt for banker (reserver), mens publikum kun har tilgang til kontanter som fysisk sentralbankpenger. En CBDC ville gi befolkningen digital tilgang til risikofrie sentralbankpenger. Norges Bank utreder en digital norsk krone (DSP – Digitale Sentralbankpenger).`,
    },
    {
      id: 'sf2-8-3-text-2',
      type: 'text',
      content: `### CBDC – Sentralbankenes svar

Over 130 land utreder nå sentralbankdigital valuta. Motivasjonen varierer:

**Argumenter for CBDC:**
- Kontantbruken faller – uten CBDC mister publikum tilgang til risikofrie penger
- Kan effektivisere betalingssystemet og redusere transaksjonskostnader
- Gir sentralbanken nye pengepolitiske verktøy (f.eks. direkte utbetaling til borgere)
- Motvirker dominansen til private betalingsløsninger og potensielt private valutaer

**Argumenter mot CBDC:**
- Risiko for bankrun – i krisesituasjoner kan folk flytte alle pengene fra banker til CBDC
- Personvernutfordringer – sentralbanken kan potensielt overvåke alle transaksjoner
- Bankene kan miste innskudd, noe som reduserer deres utlånskapasitet
- Teknologisk kompleksitet og cybersikkerhetsrisiko

**Kryptovaluta vs. CBDC:**
| Egenskap | Kryptovaluta (Bitcoin) | CBDC |
|----------|----------------------|------|
| Utsteder | Desentralisert nettverk | Sentralbank |
| Verdi | Markedsbestemt, volatil | Stabil, 1:1 med valuta |
| Personvern | Pseudonym | Avhenger av design |
| Pengepolitikk | Utenfor statlig kontroll | Verktøy for sentralbanken |`,
    },
    {
      id: 'sf2-8-3-example-1',
      type: 'example',
      title: 'Er Bitcoin penger?',
      problem: 'Vurder om Bitcoin oppfyller de tre funksjonene som penger tradisjonelt skal ha: byttemiddel, verdioppbevaring og regneenhet.',
      solution: `**Byttemiddel:** Delvis. Bitcoin kan brukes til betalinger, men aksepteres av svært få virksomheter. Transaksjonstiden (10–60 min) og gebyrene gjør det upraktisk for daglige kjøp. Lightning Network forbedrer dette, men adopsjonen er begrenset.

**Verdioppbevaring:** Svak. Bitcoins volatilitet (svingninger på 20–50 % på kort tid) gjør den uegnet som stabil verdioppbevaring. Tilhengere mener den er god langsiktig verdioppbevaring på grunn av begrenset mengde.

**Regneenhet:** Nei. Nesten ingen priser oppgis i Bitcoin. Volatiliteten gjør det umulig å bruke som stabil referanse for priser.

Konklusjon: Bitcoin oppfyller ikke de tradisjonelle pengefunksjonene godt nok til å kalles «penger» i økonomisk forstand. Den fungerer primært som et spekulativt investeringsobjekt.`,
    },
    {
      id: 'sf2-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-3-ex-1',
        number: '8.3.1',
        type: 'classic',
        task: 'Forklar hva som gjør Bitcoin forskjellig fra tradisjonelle valutaer som den norske kronen.',
        hints: ['Tenk på hvem som utsteder og kontrollerer', 'Vurder tilbudsbegrensninger og verdigrunnlag'],
        solution: 'Forskjeller: 1) Utsteder: Bitcoin utstedes desentralisert av nettverket gjennom mining, mens kroner utstedes av Norges Bank. 2) Mengde: Bitcoin har en fast maksgrense på 21 millioner, mens Norges Bank kan justere pengemengden etter behov. 3) Verdi: Bitcoin har ingen statlig garanti og verdien svinger vilt, mens kronen er stabil med sentralbankens inflasjonsmål. 4) Kontroll: Ingen myndighet kontrollerer Bitcoin, mens Norges Bank styrer pengepolitikken. 5) Bruk: Kronen er lovlig betalingsmiddel i Norge, Bitcoin er det ikke.',
      },
    },
    {
      id: 'sf2-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        task: 'Drøft om det er et problem at kontantbruken faller i Norge, og om CBDC er en god løsning.',
        hints: ['Tenk på hvem som trenger kontanter', 'Vurder personvern og beredskap'],
        solution: 'Problemer med fallende kontantbruk: 1) Sårbare grupper (eldre, digitalt ekskluderte) mister betalingsmuligheter. 2) Samfunnet blir avhengig av private betalingssystemer som kan svikte. 3) Beredskap – uten kontanter fungerer ikke betalinger ved strømbrudd. CBDC som løsning: Fordeler – gir alle digital tilgang til risikofrie sentralbankpenger, styrker beredskapen. Ulemper – løser ikke behovet for offline-betaling dersom ikke spesialdesignet, personvernsutfordringer, risiko for bankrun. Konklusjon: Fallende kontantbruk er en reell utfordring, men CBDC krever nøye design for å løse problemene uten å skape nye.',
      },
    },
    {
      id: 'sf2-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        task: 'Bitcoins energibruk tilsvarer omtrent et middels stort land. Diskuter om dette er et økonomisk og miljømessig problem.',
        hints: ['Vurder alternativ bruk av energien', 'Tenk på proof-of-work vs. proof-of-stake'],
        solution: 'Økonomisk problem: Energibruken er en reell ressurskostnad uten produktiv verdiskaping – den brukes kun til å sikre nettverket. Alternativt kunne strømmen forsyne husholdninger og industri. Miljøproblem: Avhengig av energikilde – mye mining bruker kull i Asia, men noe bruker overskuddskraft fra fornybare kilder. Motargumenter: 1) Bankssystemet bruker også mye energi. 2) Proof-of-stake (som Ethereum nå bruker) er 99,9 % mer energieffektivt. 3) Mining kan bruke overskuddskraft. Konklusjon: Proof-of-work-mekanismen er en vesentlig svakhet ved Bitcoin, og overgangen til mer energieffektive konsensusmekanismer er nødvendig for at kryptovaluta skal ha langsiktig legitimitet.',
      },
    },
    {
      id: 'sf2-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Forklar hva en «stablecoin» er, og hvorfor den kollapsede stablecoinen Terra/UST i 2022 var et problem.',
        hints: ['Stablecoins er knyttet til en valuta', 'Skille mellom algoritmisk og fiat-støttet'],
        solution: 'En stablecoin er en kryptovaluta designet for å holde stabil verdi, vanligvis knyttet 1:1 til US dollar. Det finnes to hovedtyper: Fiat-støttet (som Tether/USDT) har dollarreserver, mens algoritmisk (som Terra/UST) brukte algoritmer uten fulle reserver. I mai 2022 kollapset Terra/UST fra 1 dollar til nær null, og søstervalutaen Luna falt 99,9 %. Over 40 mrd. dollar forsvant. Problemet: 1) Det viste at algoritmiske stablecoins mangler reell sikkerhet. 2) Smitteeffekter rammet hele kryptomarkedet. 3) Millioner av privatpersoner tapte sparepenger. Hendelsen førte til krav om strengere regulering av stablecoins.',
      },
    },
    {
      id: 'sf2-8-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'Hvorfor kan innføring av CBDC føre til bankrun, og hvordan kan sentralbanken designe CBDC for å forhindre dette?',
        hints: ['Tenk på forskjellen mellom bankinnskudd og sentralbankpenger', 'Vurder tak og rentemekanismer'],
        solution: 'Risiko for bankrun: I en finansiell krise kan folk flytte pengene fra bankkontoer (som innebærer kredittrisiko) til CBDC (risikofrie sentralbankpenger) med et tastetrykk. Dette er raskere enn å hente kontanter, og kan tømme bankene for innskudd på timer. Designløsninger: 1) Sette tak på CBDC-beholdning per person (f.eks. maks 30 000 kr). 2) Innføre progressiv negativ rente over terskelen. 3) Begrense hastigheten på overføringer fra bankkonto til CBDC. 4) Gjøre CBDC kun tilgjengelig for betalinger, ikke som sparemiddel. ECB har foreslått et tak på 3 000 euro for den digitale euroen.',
      },
    },
    {
      id: 'sf2-8-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-3-ex-6',
        number: '8.3.6',
        type: 'classic',
        task: 'Vurder om kryptovalutaer bør reguleres strengere. Drøft ulike perspektiver.',
        hints: ['Tenk på forbrukerbeskyttelse og kriminalitet', 'Vurder innovasjon og frihet'],
        solution: 'For strengere regulering: 1) Forbrukerbeskyttelse – mange taper penger på svindel og spekulasjon. 2) Hvitvasking og kriminalitet – kryptovalutaer brukes til ulovlige formål. 3) Finansiell stabilitet – ukontrollert vekst kan true det tradisjonelle finanssystemet. 4) Skattunndragelse – vanskelig å spore transaksjoner. Mot strengere regulering: 1) Innovasjon – blokkjedeteknologien har potensial utover spekulasjon. 2) Individuell frihet – rett til finansiell autonomi. 3) Regulering i ett land flytter bare aktiviteten. 4) Teknologien er vanskelig å stoppe. Balansert tilnærming: De fleste økonomer anbefaler regulering som beskytter forbrukere og hindrer kriminalitet, men ikke kveler innovasjon.',
      },
    },
    {
      id: 'sf2-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kryptovalutaer** som Bitcoin er desentraliserte digitale valutaer basert på blokkjedeteknologi
- Bitcoin oppfyller **pengenes tre funksjoner** dårlig og fungerer primært som spekulativt aktivum
- **Sentralbankdigital valuta (CBDC)** er sentralbankenes svar på digitalisering og fallende kontantbruk
- CBDC gir nye muligheter, men innebærer risiko for **bankrun** og **personvernsutfordringer**
- Regulering av kryptovalutaer er en pågående debatt om balansen mellom innovasjon og beskyttelse

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kryptovaluta | Digital valuta basert på kryptografi og desentralisert nettverk |
| Blokkjede | Distribuert, uforanderlig transaksjonslogg |
| Bitcoin | Første og største kryptovaluta (2009) |
| CBDC | Sentralbankdigital valuta for publikum |
| Stablecoin | Kryptovaluta designet for stabil verdi |
| Proof-of-work | Energikrevende mekanisme for å verifisere transaksjoner |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Deglobalisering og proteksjonisme
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_4: TextbookChapter = {
  id: 'samfokonomi-2-8-4',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.4',
  title: 'Deglobalisering og proteksjonisme',
  description: 'Handelskriger og reshoring.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
  ],
  content: [
    {
      id: 'sf2-8-4-intro',
      type: 'text',
      content: `## Er globaliseringen i revers?

Etter flere tiår med stadig dypere global økonomisk integrasjon har pendelen begynt å svinge. Handelskrig mellom USA og Kina, pandemien som avslørte sårbare forsyningskjeder, og Russlands invasjon av Ukraina har fått både politikere og bedrifter til å revurdere globaliseringen.

I dette kapittelet skal du lære:
- Hva som menes med deglobalisering og geoøkonomisk fragmentering
- Årsaker til den nye proteksjonismen
- Hva reshoring og friendshoring innebærer
- Konsekvenser for verdensøkonomien og Norge`,
    },
    {
      id: 'sf2-8-4-def-1',
      type: 'definition',
      title: 'Proteksjonisme',
      content: `**Proteksjonisme** er en handelspolitikk der staten beskytter innenlandsk produksjon mot utenlandsk konkurranse gjennom toll, kvoter, subsidier eller andre handelshindringer. Mens frihandel baseres på komparativt fortrinn, argumenterer proteksjonister for at visse næringer trenger beskyttelse av hensyn til nasjonal sikkerhet, sysselsetting eller strategisk industriutvikling.`,
    },
    {
      id: 'sf2-8-4-text-1',
      type: 'text',
      content: `### Den nye proteksjonismen

Siden 2018 har verden sett en markant økning i proteksjonistisk politikk:

**Handelskrigen USA–Kina:** I 2018 innførte USA toll på kinesiske varer for over 350 mrd. dollar, og Kina svarte med gjengjeldelsestoll. Konflikten handler om mer enn handel – den dreier seg om teknologisk dominans, immaterielle rettigheter og geopolitisk rivalisering.

**Industrisubsidier:** USAs Inflation Reduction Act (2022) og CHIPS Act subsidierte grønn teknologi og halvlederproduksjon med hundrevis av milliarder dollar. EU svarte med egne industriprogrammer. Dette er en kappløp om å tiltrekke strategisk industri.

**Eksportrestriksjoner:** USA har innført strenge restriksjoner på eksport av avansert halvlederteknologi til Kina. Kina har svart med restriksjoner på sjeldne jordarter.

Denne utviklingen bryter fundamentalt med den liberale handelsordenen som har preget verdensøkonomien siden 1945. WTO er i praksis lammet som tvisteløser.`,
    },
    {
      id: 'sf2-8-4-def-2',
      type: 'definition',
      title: 'Reshoring og friendshoring',
      content: `**Reshoring** betyr å flytte produksjon tilbake til hjemlandet etter å ha outsourcet den til lavkostland. **Friendshoring** (eller «ally-shoring») betyr å flytte forsyningskjeder til allierte land i stedet for geopolitiske rivaler. Begge trendene er drevet av ønsket om mer robuste forsyningskjeder og redusert avhengighet av Kina. Begrepene ble sentrale etter covid-19-pandemien avslørte sårbarheten i globale forsyningskjeder.`,
    },
    {
      id: 'sf2-8-4-text-2',
      type: 'text',
      content: `### Konsekvenser av deglobalisering

Deglobaliseringen har vidtrekkende økonomiske konsekvenser:

**For verdensøkonomien:**
- Høyere priser for forbrukerne – produksjon i høykostland er dyrere
- Redusert global effektivitet – mindre spesialisering etter komparativt fortrinn
- Lavere økonomisk vekst globalt – IMF anslår at fragmentering kan koste 7 % av verdens BNP
- Doble forsyningskjeder – bedrifter bygger parallelle leverandørkjeder for ulike blokker

**For utviklingsland:**
- Mister tilgang til vestlige markeder og teknologi
- Presses til å velge side i geopolitisk rivalisering
- Eksportledet vekstmodell (som løftet Kina og Sør-Korea) kan bli vanskeligere å gjenta

**For Norge:**
- Økte kostnader for import
- Men også muligheter: Europeisk reshoring kan gi markedsmuligheter for norsk teknologi
- Energisikkerhet gjør Norge mer attraktiv som handelspartner
- EØS-avtalen forankrer Norge i det europeiske markedet`,
    },
    {
      id: 'sf2-8-4-example-1',
      type: 'example',
      title: 'Kostnaden av proteksjonisme',
      problem: 'USA innfører 25 % toll på importerte stålprodukter. Stålet kostet opprinnelig 100 kr/kg. Innenlandsk produksjon koster 110 kr/kg. Analyser virkningene.',
      solution: `**Før toll:** Importert stål koster 100 kr/kg, innenlandsk stål 110 kr/kg. Rasjonelle kjøpere velger importert stål.

**Etter 25 % toll:** Importert stål koster $100 \\times 1{,}25 = 125$ kr/kg. Innenlandsk stål koster fortsatt 110 kr/kg og vinner nå konkurransen.

**Virkninger:** 1) Innenlandsk stålindustri er beskyttet og kan opprettholde produksjonen. 2) Men alle som bruker stål (bilprodusenter, bygg) betaler 110 i stedet for 100 kr/kg – en kostnad på 10 kr/kg. 3) Forbrukerne betaler mer for varer laget av stål. 4) Handelspartnere kan innføre gjengjeldelsestoll.

Studier viste at USAs ståltoll i 2018 reddet ca. 8 700 jobber i stålindustrien, men kostet amerikanske stålbrukere ca. 5,6 mrd. dollar – rundt 650 000 dollar per reddet jobb.`,
    },
    {
      id: 'sf2-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-4-ex-1',
        number: '8.4.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom toll, kvoter og subsidier som proteksjonistiske virkemidler.',
        hints: ['Tenk på hvem som bærer kostnadene ved hvert virkemiddel', 'Hvem mottar pengene?'],
        solution: 'Toll: En avgift på importerte varer som gjør dem dyrere. Kostnaden bæres av importør og forbruker, inntekten går til staten. Kvoter: En mengdebegrensning på import – maks antall enheter som kan importeres. Begrenser tilbudet og øker prisen. Ingen inntekt til staten (med mindre kvoten auksjoneres). Subsidier: Statlig støtte til innenlandsk produksjon som gjør den mer konkurransedyktig. Kostnaden bæres av skattebetalerne. Alle tre virkemidlene beskytter innenlandsk industri, men på ulike måter og med ulike fordelingseffekter.',
      },
    },
    {
      id: 'sf2-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        task: 'Drøft om pandemien viste at globalisering har gått for langt. Bruk eksempler fra forsyningskjeder.',
        hints: ['Tenk på medisinsk utstyr og halvledere', 'Vurder effektivitet mot robusthet'],
        solution: 'Argumenter for at globaliseringen gikk for langt: 1) Europa manglet medisinsk utstyr fordi produksjonen var konsentrert i Kina – masker, hansker, respiratorer. 2) Halvledermangelen lammet bilindustrien i over et år fordi produksjonen var konsentrert i Taiwan og Sør-Korea. 3) «Just-in-time»-logistikken hadde ingen buffere. Argumenter mot: 1) Globale forsyningskjeder muliggjorde rask oppskalering av vaksineproduksjon. 2) Problemet var konsentrasjon, ikke globalisering i seg selv – diversifisering kan løse dette. 3) Ren nasjonal produksjon ville vært dyrere og mindre effektiv. Konklusjon: Pandemien viste behovet for mer robust, men ikke nødvendigvis mindre, globalisering.',
      },
    },
    {
      id: 'sf2-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        task: 'Et land innfører 20 % toll på importerte biler. Importprisen er 300 000 kr, og innenlandsk pris er 340 000 kr. Hva blir resultatet for forbrukerne?',
        hints: ['Beregn ny importpris etter toll', 'Sammenlign med innenlandsk pris'],
        solution: 'Importpris etter toll: $300\\,000 \\times 1{,}20 = 360\\,000$ kr. Innenlandsk pris: 340 000 kr. Forbrukerne vil nå kjøpe den innenlandske bilen til 340 000 kr i stedet for importbilen til 360 000 kr. Men de betaler 40 000 kr mer enn de ville gjort uten toll (300 000 kr). Tollen beskytter den innenlandske bilindustrien, men forbrukerne betaler prisen gjennom høyere bilpriser.',
      },
    },
    {
      id: 'sf2-8-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Forklar hva «friendshoring» innebærer, og vurder om det er en god strategi for vestlige land.',
        hints: ['Tenk på forholdet til Kina', 'Vurder kostnader og geopolitisk risiko'],
        solution: 'Friendshoring betyr å flytte forsyningskjeder til politisk allierte land i stedet for geopolitiske rivaler. Fordeler: 1) Reduserer avhengighet av potensielle motstandere som Kina. 2) Styrker økonomiske bånd mellom allierte. 3) Reduserer risikoen for at handel brukes som våpen. 4) Kan kombinere kostnadseffektivitet med sikkerhet (f.eks. produksjon i Vietnam eller India fremfor Kina). Ulemper: 1) Dyrere enn å produsere i det billigste landet. 2) Skaper et fragmentert handelssystem. 3) Tvinger mindre land til å velge side. 4) Reduserer global effektivitet og kan bremse veksten.',
      },
    },
    {
      id: 'sf2-8-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Analyser hvordan deglobalisering kan påvirke norsk økonomi. Vurder både eksport og import.',
        hints: ['Tenk på Norges handelspartnere og eksportvarer', 'Vurder energimarkedet'],
        solution: 'Eksport: 1) Olje og gass – europeisk energisikkerhet gjør norsk energi mer verdifull. 2) Sjømat – global etterspørsel fortsetter, men handelshindringer kan komplisere markedsadgang. 3) Teknologi – europeisk reshoring kan gi muligheter for norsk maritim og energiteknologi. Import: 1) Dyrere forbruksvarer dersom billig kinesisk import erstattes av dyrere alternativer. 2) Halvledere og elektronikk kan bli dyrere ved fragmentering. 3) Økt prisnivå og potensielt høyere inflasjon. Samlet: Norge er relativt godt posisjonert takket være energiressurser og EØS-tilknytning, men vil likevel merke økte kostnader og mer usikre handelsforhold.',
      },
    },
    {
      id: 'sf2-8-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        task: 'WTO har vært svekket de siste årene. Forklar hvorfor, og drøft konsekvensene for internasjonal handel.',
        hints: ['Tenk på USAs blokkering av dommere', 'Vurder Kinas rolle og nye handelsutfordringer'],
        solution: 'Svekket WTO: 1) USA har blokkert utnevnelse av dommere til ankeorganet siden 2019, slik at tvister ikke kan avgjøres. 2) WTO-reglene er designet for en tid med lavere geopolitisk spenning og passer dårlig for konflikten mellom USA og Kina. 3) Nye utfordringer som digital handel, datastrømmer og klimatoll dekkes ikke godt av eksisterende regler. 4) Stormakter foretrekker bilaterale avtaler der de har mer makt. Konsekvenser: 1) Mindre forutsigbarhet for bedrifter som handler internasjonalt. 2) Sterkere land kan tvinge igjennom sine interesser. 3) Småland som Norge mister en viktig arena for å beskytte sine rettigheter. 4) Risiko for at handelsregimer fragmenteres i regionale blokker.',
      },
    },
    {
      id: 'sf2-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Deglobalisering** og geoøkonomisk fragmentering utfordrer den liberale handelsordenen
- **Handelskrigen mellom USA og Kina** er drevet av geopolitisk rivalisering, ikke bare økonomi
- **Reshoring og friendshoring** reflekterer ønsket om robuste forsyningskjeder og redusert avhengighet
- Proteksjonisme har klare **kostnader for forbrukere** gjennom høyere priser
- **WTO** er svekket, og regelbasert handel er under press

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Proteksjonisme | Statlig beskyttelse av innenlandsk industri mot import |
| Reshoring | Flytte produksjon tilbake til hjemlandet |
| Friendshoring | Flytte forsyningskjeder til allierte land |
| Geoøkonomisk fragmentering | Oppdeling av verdensøkonomien i rivaliserende blokker |
| Handelskrig | Gjensidig opptrapping av toll og restriksjoner |
| WTO | Verdens handelsorganisasjon |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Økonomiske skoler og debatter
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8_5: TextbookChapter = {
  id: 'samfokonomi-2-8-5',
  courseId: 'samfokonomi-2',
  chapterNumber: '8.5',
  title: 'Økonomiske skoler og debatter',
  description: 'Keynesiansk vs nyklassisk, MMT.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte aktuelle økonomiske debatter med utgangspunkt i ulike teoretiske perspektiver',
  ],
  content: [
    {
      id: 'sf2-8-5-intro',
      type: 'text',
      content: `## Hvorfor er økonomer uenige?

Økonomer er ofte uenige om politikkanbefalinger, selv når de ser på de samme dataene. Årsaken er at de tilhører ulike «skoler» eller tradisjoner med forskjellige grunnantakelser om hvordan økonomien fungerer.

I dette kapittelet skal du lære:
- Hovedforskjellene mellom keynesiansk og nyklassisk økonomi
- Hva moderne pengeteori (MMT) innebærer
- Hvordan ulike skoler vurderer sentrale politikkspørsmål
- Aktuelle debatter i lys av ulike teoretiske perspektiver`,
    },
    {
      id: 'sf2-8-5-def-1',
      type: 'definition',
      title: 'Keynesiansk økonomi',
      content: `**Keynesiansk økonomi** bygger på John Maynard Keynes' teorier fra 1930-tallet. Sentrale ideer: 1) Markedsøkonomien er ustabil og kan havne i langvarige lavkonjunkturer. 2) Etterspørselen bestemmer produksjon og sysselsetting på kort sikt. 3) Staten bør bruke finanspolitikk (offentlige utgifter og skatter) aktivt for å stabilisere økonomien. 4) I en dyp resesjon kan pengepolitikken bli maktesløs (likviditetsfellen), og finanspolitikken blir avgjørende. Moderne nykeynesiansk teori kombinerer Keynes' innsikter med mikroøkonomisk teori om priser og lønn som tilpasser seg tregt.`,
    },
    {
      id: 'sf2-8-5-text-1',
      type: 'text',
      content: `### Keynesiansk vs. nyklassisk økonomi

De to dominerende retningene i moderne makroøkonomi er **nykeynesiansk** og **nyklassisk** teori. De er enige om mye, men uenige om sentrale spørsmål:

**Nyklassisk økonomi** bygger på at markeder er effektive og tilpasser seg raskt. Priser og lønninger er fleksible. Økonomien tenderer mot full sysselsetting på egen hånd. Staten bør begrense seg til å sette rammebetingelser, og aktiv stabiliseringspolitikk kan gjøre mer skade enn nytte.

**Nykeynesiansk økonomi** bygger på at priser og lønninger er trege (sticky). Markeder kan svikte, og økonomien kan bli sittende fast i lavkonjunkturer. Aktiv stabiliseringspolitikk – spesielt finanspolitikk i dype kriser – er nødvendig og effektivt.

| Spørsmål | Nyklassisk | Keynesiansk |
|----------|------------|-------------|
| Markeder | Effektive, selvkorrigerende | Kan svikte, trenger korrigering |
| Arbeidsledighet | Frivillig eller midlertidig | Kan bli langvarig ufrivillig |
| Finanspolitikk | Lite effektivt, crowding out | Viktig stabiliseringsverktøy |
| Pengepolitikk | Hovedverktøy for stabilisering | Utilstrekkelig i likviditetsfelle |
| Statsgjeld | Problematisk, begrenser vekst | Akseptabelt i lavkonjunktur |`,
    },
    {
      id: 'sf2-8-5-def-2',
      type: 'definition',
      title: 'Moderne pengeteori (MMT)',
      content: `**Moderne pengeteori (MMT – Modern Monetary Theory)** er en uortodoks retning som hevder at en stat som utsteder sin egen valuta aldri kan gå konkurs – den kan alltid trykke mer penger. Ifølge MMT er den reelle begrensningen ikke statsbudsjettet, men inflasjonen. Staten bør bruke finanspolitikk fritt for å sikre full sysselsetting, og heller stramme inn gjennom skatter dersom inflasjonen stiger. Kritikere mener MMT undervurderer inflasjonsrisikoen og kan føre til ukontrollert pengebruk.`,
    },
    {
      id: 'sf2-8-5-text-2',
      type: 'text',
      content: `### MMT – en radikal utfordrer

Moderne pengeteori (MMT) har fått mye oppmerksomhet, særlig blant progressive politikere i USA. Kjerneargumentet er:

1. **En stat som utsteder sin egen valuta kan ikke gå tom for penger.** Norge, USA og Japan kan alltid betale sine forpliktelser i egen valuta.
2. **Skatter driver ikke statsutgiftene.** Staten trenger ikke skatteinntekter for å bruke penger – den skaper penger når den bruker. Skatter brukes til å fjerne kjøpekraft og holde inflasjonen i sjakk.
3. **Den virkelige begrensningen er inflasjon**, ikke budsjettbalanse. Staten bør bruke til det er full sysselsetting, og stramme inn kun når inflasjonen stiger.

**Kritikk av MMT:**
- Undervurderer risikoen for inflasjon og forventningskanalen
- Forutsetter at politikere vil stramme inn i tide – historien viser at dette er vanskelig
- Fungerer dårlig for små, åpne økonomier med flytende valutakurs (som Norge) – stor pengebruk kan svekke kronen
- Skiller ikke tydelig nok mellom teori og politikkanbefalinger

De fleste etablerte økonomer er skeptiske til MMT, men anerkjenner at debatten har løftet viktige spørsmål om forholdet mellom pengepolitikk og finanspolitikk.`,
    },
    {
      id: 'sf2-8-5-example-1',
      type: 'example',
      title: 'Keynesiansk vs. nyklassisk respons på resesjon',
      problem: 'En økonomi opplever et fall i BNP på 3 % og arbeidsledigheten stiger fra 4 % til 8 %. Hvordan ville en keynesiansk og en nyklassisk økonom anbefale å håndtere situasjonen?',
      solution: `**Keynesiansk anbefaling:**
Problemet er for lav samlet etterspørsel. Staten bør øke offentlige utgifter og/eller kutte skatter for å stimulere etterspørselen. Multiplikatoreffekten vil forsterke effekten. Sentralbanken bør også kutte renten. Budsjettunderskudd er akseptabelt i en krise – underskuddet finansierer seg selv gjennom økt aktivitet og skatteinntekter. Å stramme inn nå vil forverre krisen.

**Nyklassisk anbefaling:**
Markedene vil selv korrigere – lønninger og priser vil falle og gjenopprette likevekten. Sentralbanken bør kutte renten, men staten bør ikke øke utgiftene vesentlig. Offentlige utgifter «crowder ut» private investeringer. Strukturreformer (fleksiblisering av arbeidsmarkedet, deregulering) er viktigere enn kortsiktig stimulans. Høy statsgjeld hemmer fremtidig vekst.

I praksis har de fleste land brukt en blanding: pengepolitikk som hovedverktøy (nyklassisk), men aktiv finanspolitikk i dype kriser (keynesiansk), som under covid-19.`,
    },
    {
      id: 'sf2-8-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-5-ex-1',
        number: '8.5.1',
        type: 'classic',
        task: 'Forklar hovedforskjellen mellom keynesiansk og nyklassisk syn på arbeidsledighet.',
        hints: ['Tenk på frivillig vs. ufrivillig ledighet', 'Vurder hvor raskt markedet tilpasser seg'],
        solution: 'Nyklassisk syn: Arbeidsledighet er i hovedsak frivillig – folk som er ledige velger å ikke jobbe til gjeldende lønn, eller ledigheten er midlertidig friksjons­ledighet mens folk søker nye jobber. Markedet vil selv korrigere gjennom lønns- og pristilpasning. Keynesiansk syn: Arbeidsledighet kan være ufrivillig og langvarig. Når etterspørselen faller, kutter bedrifter produksjon og sier opp ansatte. Lønns- og pristreghet gjør at markedet ikke korrigerer raskt nok. Folk som vil jobbe til gjeldende lønn, finner ikke jobb. Staten må stimulere etterspørselen for å redusere ledigheten.',
      },
    },
    {
      id: 'sf2-8-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-5-ex-2',
        number: '8.5.2',
        type: 'classic',
        task: 'Forklar hva «crowding out» betyr, og hvorfor nyklassiske økonomer bruker dette argumentet mot ekspansiv finanspolitikk.',
        hints: ['Tenk på sammenhengen mellom statsgjeld og rente', 'Vurder hva som skjer i lånemarkedet'],
        solution: 'Crowding out (fortrengning) betyr at økte offentlige utgifter finansiert ved lån fortrenger private investeringer. Mekanismen: 1) Staten låner mer i obligasjonsmarkedet. 2) Økt etterspørsel etter lån presser renten opp. 3) Høyere rente gjør det dyrere for bedrifter å investere og for husholdninger å låne. 4) Private utgifter faller tilsvarende det offentlige utgiftsøkningen. Nyklassiske økonomer mener dette gjør finanspolitikk lite effektiv – man bytter bare offentlig etterspørsel mot privat etterspørsel. Keynesianere svarer at crowding out er lite relevant i en resesjon, fordi renten allerede er lav og private investorer er tilbakeholdne uansett.',
      },
    },
    {
      id: 'sf2-8-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        task: 'Forklar MMTs påstand om at «staten kan ikke gå tom for penger i egen valuta». Hva er den viktigste innvendingen?',
        hints: ['Tenk på forskjellen mellom å trykke penger og reell kjøpekraft', 'Vurder inflasjonsrisiko'],
        solution: 'MMTs påstand: En stat som utsteder egen valuta (som Norge med kroner) kan alltid lage mer penger for å betale sine forpliktelser. Teknisk sett kan staten aldri misligholde gjeld i egen valuta. Viktigste innvending: Selv om staten teknisk kan trykke ubegrenset med penger, betyr det ikke at dette er uten kostnader. For mye pengetrykking fører til inflasjon – pengene mister kjøpekraft. For en liten, åpen økonomi som Norge vil også valutakursen svekkes kraftig, noe som gjør import dyrere og forsterker inflasjonen. MMT-tilhengere anerkjenner inflasjonsrisikoen, men mener den kan håndteres med skatter. Kritikere mener det er politisk urealistisk å øke skattene raskt nok.',
      },
    },
    {
      id: 'sf2-8-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Under covid-19-pandemien brukte Norge kraftig ekspansiv finanspolitikk. Analyser dette fra både et keynesiansk og nyklassisk perspektiv.',
        hints: ['Tenk på kriseperiodens spesielle karakter', 'Vurder risikoen for crowding out under pandemien'],
        solution: 'Keynesiansk perspektiv: Politikken var helt riktig. Pandemien skapte et massivt etterspørselssjokk, og uten statlig inngripen ville resesjonen blitt mye dypere. Overføringer til permitterte og støtte til bedrifter opprettholdt etterspørselen. Budsjettunderskudd er uproblematisk i en slik krise. Nyklassisk perspektiv: Noe støtte var nødvendig, men omfanget var overdrevent. De sjenerøse ordningene holdt ulønnsomme bedrifter kunstig i live (zombiebedrifter) og reduserte omstillingsevnen. Den massive pengebruken bidro til inflasjonen som fulgte i 2022–2023. I praksis var det bred enighet om at noe stimulans var nødvendig – uenigheten gjaldt omfang og varighet.',
      },
    },
    {
      id: 'sf2-8-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Hva er en «likviditetsfelle», og hvorfor er dette et sentralt begrep i keynesiansk teori?',
        hints: ['Tenk på hva som skjer når renten er nær null', 'Vurder pengepolitikkens begrensninger'],
        solution: 'En likviditetsfelle oppstår når sentralbankens styringsrente er nær null og ikke kan senkes mer. I denne situasjonen: 1) Pengepolitikken mister sin kraft – renten kan ikke stimulere mer. 2) Folk og bedrifter foretrekker å holde penger (likviditet) fremfor å investere, fordi forventningene er pessimistiske. 3) Økt pengemengde absorberes uten å øke etterspørselen. Begrepet er sentralt i keynesiansk teori fordi det viser at pengepolitikk alene ikke alltid er nok – finanspolitikk blir nødvendig. Japan har vært i en form for likviditetsfelle siden 1990-tallet, og Europa og USA opplevde det etter finanskrisen 2008.',
      },
    },
    {
      id: 'sf2-8-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        task: 'Velg et aktuelt økonomisk tema (f.eks. inflasjon, ulikhet eller klima) og analyser det fra to ulike økonomiske skoler.',
        hints: ['Velg et tema du kjenner godt', 'Identifiser hva de ulike skolene ville vektlagt'],
        solution: 'Eksempel – Inflasjon (2022–2023): Keynesiansk analyse: Inflasjonen skyldtes tilbudssjokk (energipriser, krig, pandemiforstyrrelser) og ikke for stor etterspørsel. Aggressiv rentehevning straffer arbeidstakere for problemer de ikke har skapt. Bedre å bruke prisregulering og målrettet finanspolitikk. Nyklassisk analyse: Inflasjonen skyldtes for ekspansiv penge- og finanspolitikk under pandemien. For mye penger jaktet på for få varer. Sentralbankene må heve renten raskt og troverdig for å forankre inflasjonsforventningene. Kortsiktig smerte er nødvendig for langsiktig stabilitet. Begge perspektiver fanger noe viktig – inflasjonen hadde trolig både tilbuds- og etterspørselskomponenter.',
      },
    },
    {
      id: 'sf2-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Keynesiansk økonomi** vektlegger markedsfeil, ufrivillig ledighet og aktiv stabiliseringspolitikk
- **Nyklassisk økonomi** vektlegger effektive markeder, selvkorrigering og begrensning av statlig inngripen
- **MMT** hevder at stater med egen valuta aldri trenger å gå tom for penger, og at inflasjon er den reelle begrensningen
- I praksis bruker de fleste land en **pragmatisk blanding** av ulike perspektiver
- Uenighet mellom økonomer reflekterer ofte forskjellige **verdier og antagelser**, ikke bare faglig uenighet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Keynesiansk økonomi | Aktiv finanspolitikk for å stabilisere økonomien |
| Nyklassisk økonomi | Markedene korrigerer seg selv, staten bør begrenses |
| MMT | Staten kan ikke gå tom for penger i egen valuta |
| Crowding out | Offentlige utgifter fortrenger private investeringer |
| Likviditetsfelle | Pengepolitikken mister kraft ved nullrente |
| Multiplikatoreffekt | Offentlige utgifter genererer større økning i BNP |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SAMFOKONOMI_2_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_8_1, CHAPTER_SAMFOKONOMI_2_8_2, CHAPTER_SAMFOKONOMI_2_8_3,
  CHAPTER_SAMFOKONOMI_2_8_4, CHAPTER_SAMFOKONOMI_2_8_5,
];
