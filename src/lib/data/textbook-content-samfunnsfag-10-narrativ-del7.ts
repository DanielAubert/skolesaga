/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - NARRATIV VERSJON DEL 7
 * Kapittel 29-34: Identitet, mangfold og livsmestring (Narrativ versjon)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 29 NARRATIV: Samene — Urfolk i Norge
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_29_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-29-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '29',
  title: 'Samene — Urfolk i Norge',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om samisk historie og kultur, fra fornorskingspolitikken til Sametinget og samenes rettigheter som urfolk i dag.',
  estimatedMinutes: 40,
  competenceGoals: ['reflektere over identitet, tilhørighet og mangfold'],
  linkedChapterId: 'samfunnsfag-10-29',
  content: [
    {
      id: 'samfunnsfag-10-29-n-intro',
      type: 'text',
      content: `## Norges eldste folk

Lenge foer det fantes noe som het Norge, levde samene i nord. De er Norges -- og et av Europas -- eldste folk, med en kultur, et spraak og en levemaate som strekker seg tusenvis av aar tilbake. I dag bor det samer i Norge, Sverige, Finland og Russland -- et omraade samene selv kaller **Sápmi**.

Samisk kultur er rik og mangfoldig. **Joiken** er en unik musikktradisjon der man synger om en person, et dyr eller et landskap -- man joiker ikke om noe, man joiker noe. **Duodji** er samisk haandverk med tradisjoner som gaar hundrevis av aar tilbake. Og **reindriften** er fortsatt en viktig naering og kulturbaaerer for mange samer.

Men samenes historie i Norge er ogsaa en historie om urett. I over hundre aar foerte den norske staten en bevisst politikk for aa utrydde samisk spraak og kultur. Denne historien er det viktig aa kjenne til -- baade for aa forstaa fortiden og for aa forme en bedre fremtid.`,
    },
    {
      id: 'samfunnsfag-10-29-n-section1',
      type: 'text',
      content: `## Fornorskingspolitikken -- en moerk historie

Fra slutten av 1800-tallet og langt inn paa 1900-tallet foerte den norske staten en aktiv **fornorskingspolitikk** overfor samene. Maalet var klart: samene skulle bli norske. Samisk spraak ble forbudt paa skolene. Samiske barn ble sendt til internatskoler langt hjemmefra, der de ble straffet for aa snakke sitt eget spraak. Samiske stedsnavn ble erstattet med norske.

For mange samer hadde dette oedeleggende konsekvenser. Barn som ble tvunget til aa snakke norsk, mistet kontakten med sitt eget spraak. Foreldre som saa at barna ble straffet for aa vaere samiske, begynte selv aa skjule sin samiske identitet. Over tid mistet mange familier spraakat, kulturen og tilhoerigheten sin.

Vendepunktet kom med **Alta-saken** paa slutten av 1970-tallet og begynnelsen av 1980-tallet. Norske myndigheter ville demme opp Alta-Kautokeino-vassdraget for vannkraftproduksjon, noe som ville oedelegge viktige beiteomraader for reindriften. Samiske aktivister og miljoeavernere protesterte gjennom sivil ulydighet. Selv om utbyggingen til slutt ble gjennomfoert i redusert form, satte Alta-saken samiske rettigheter paa dagsordenen som aldri foer.

I 1989 ble **Sametinget** opprettet -- et folkevalgt organ for den samiske befolkningen i Norge. Sametinget gir samene en stemme i saker som angaar dem, og det markerte et viktig skifte fra fornorsking til anerkjennelse.`,
    },
    {
      id: 'samfunnsfag-10-29-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-29-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa samisk historie:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-29-n-quiz1-q0',
            task: 'Hva var fornorskingspolitikken?',
            options: [
              { id: 'a', text: 'En politikk for aa gjooere norsk til offisielt spraak i hele Norden', isCorrect: false },
              { id: 'b', text: 'En politikk for aa utrydde samisk spraak og kultur og gjooere samene norske', isCorrect: true },
              { id: 'c', text: 'En politikk for aa laaere alle nordmenn samisk', isCorrect: false },
              { id: 'd', text: 'En politikk for aa tildele samer egne landomraader', isCorrect: false },
            ],
            solution: 'Fornorskingspolitikken var en bevisst politikk fra den norske staten for aa utrydde samisk spraak og kultur. Samiske barn ble tvunget til aa snakke norsk paa skolen.',
          },
          {
            id: 'samfunnsfag-10-29-n-quiz1-q1',
            task: 'Hva var Alta-saken?',
            options: [
              { id: 'a', text: 'En rettssak om samisk stemmerett', isCorrect: false },
              { id: 'b', text: 'En konflikt om utbygging av vannkraft som satte samiske rettigheter paa dagsordenen', isCorrect: true },
              { id: 'c', text: 'Opprettelsen av Sametinget', isCorrect: false },
              { id: 'd', text: 'En internasjonal konferanse om urfolksrettigheter', isCorrect: false },
            ],
            solution: 'Alta-saken handlet om planlagt utbygging av Alta-Kautokeino-vassdraget. Protester fra samer og miljoeavernere satte samiske rettigheter paa den politiske dagsordenen.',
          },
          {
            id: 'samfunnsfag-10-29-n-quiz1-q2',
            task: 'Hva er Sametinget?',
            options: [
              { id: 'a', text: 'Et museum for samisk kultur', isCorrect: false },
              { id: 'b', text: 'Et kommunestyre i Finnmark', isCorrect: false },
              { id: 'c', text: 'Et folkevalgt organ for den samiske befolkningen i Norge', isCorrect: true },
              { id: 'd', text: 'En avdeling i Stortinget', isCorrect: false },
            ],
            solution: 'Sametinget er et folkevalgt organ opprettet i 1989. Det gir den samiske befolkningen en stemme i saker som angaar dem.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-29-n-section2',
      type: 'text',
      content: `## Samene i dag -- mellom tradisjon og modernitet

I dag er samenes rettigheter som urfolk anerkjent i den norske **grunnloven** og i internasjonal rett, blant annet gjennom **ILO-konvensjon 169** om urfolks rettigheter. Samisk spraak har faaatt status som offisielt spraak i flere kommuner, og det finnes samiske barnehager, skoler og medier.

Men utfordringene er ikke over. Mange samiske spraak er fortsatt truet -- av de ti samiske spraakene som finnes, er flere alvorlig truet av utryddelse. Fornorskingspolitikkens skadevirkninger merkes fortsatt i familier der spraak og kultur gikk tapt.

**Sannhets- og forsoningskommisjonen**, som la frem sin rapport i 2023, dokumenterte de omfattende konsekvensene av fornorskingspolitikken for samer, kvener og norskfinner. Rapporten viste at saarene etter denne politikken er dype og at forsoning krever langsiktig innsats.

Samtidig opplever samisk kultur en revitalisering. Unge samer tar tilbake spraak og tradisjoner. Samiske artister som Ella Marie Haaetta Isaksen og Jon Henrik Fjaallaas naar ut til et bredt publikum. Og Sametinget spiller en stadig viktigere rolle i norsk politikk.

Aa kjenne samisk historie og kultur er viktig for alle som bor i Norge. Samene er ikke en historisk kuriositet -- de er et levende folk med en rik kultur og en rettmessig plass i det norske samfunnet.`,
    },
    {
      id: 'samfunnsfag-10-29-n-summary',
      type: 'text',
      content: `## Oppsummering

Samene er Norges urfolk med en tusenaarig historie og kultur. **Fornorskingspolitikken** paafoerte samene stor skade gjennom forbud mot spraak og kultur. **Alta-saken** satte samiske rettigheter paa dagsordenen, og **Sametinget** (1989) ga samene politisk representasjon.

I dag er samiske rettigheter forankret i grunnloven og internasjonal rett, men utfordringer gjenstaar. Mange samiske spraak er truet, og saarene etter fornorskingspolitikken er fortsatt merkbare.

Samisk kultur opplever revitalisering, med unge samer som tar tilbake spraak og tradisjoner. Aa forstaa samisk historie er en viktig del av det aa forstaa Norge.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 30 NARRATIV: Kulturelt mangfold i Norge
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_30_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-30-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '30',
  title: 'Kulturelt mangfold i Norge',
  subtitle: 'Narrativ versjon',
  description: 'En nyansert fortelling om det flerkulturelle Norge, om integrering, tilhoerighet, rasisme og veien mot et inkluderende samfunn.',
  estimatedMinutes: 40,
  competenceGoals: ['reflektere over identitet, tilhørighet og mangfold'],
  linkedChapterId: 'samfunnsfag-10-30',
  content: [
    {
      id: 'samfunnsfag-10-30-n-intro',
      type: 'text',
      content: `## Et Norge i forandring

Gaa gjennom gatene i Oslo, Bergen eller Tromsoe, og du moeter mennesker med roetter fra hele verden. I klassen din sitter det kanskje elever med bakgrunn fra Pakistan, Somalia, Polen, Syria eller Vietnam. Paa matbutikken finner du tortillas ved siden av lefse, og hummus ved siden av brunost.

Norge har forandret seg enormt de siste femti aarene. Fra aa vaere et relativt homogent samfunn har vi blitt et land med innbyggere fra over 200 ulike land. Omtrent 20 prosent av befolkningen har innvandrerbakgrunn. Dette mangfoldet beriker samfunnet vaart -- men det skaper ogsaa utfordringer som vi maa snakke aapent om.

**Kulturelt mangfold** betyr at et samfunn bestaar av mennesker med ulik kulturell, religioes og etnisk bakgrunn. Det handler om mat, musikk og spraak, men ogsaa om dypere ting: verdier, normer, familiestrukturer og verdensbilder. Spoersmaalet er ikke om mangfold er bra eller daarlig -- det er en realitet. Spoersmaalet er hvordan vi skal leve godt sammen.`,
    },
    {
      id: 'samfunnsfag-10-30-n-section1',
      type: 'text',
      content: `## Integrering -- en toveis prosess

**Integrering** er prosessen der mennesker med innvandrerbakgrunn blir en del av det norske samfunnet. Men det er viktig aa forstaa at integrering ikke betyr det samme som **assimilering**. Assimilering betyr at man gir opp sin egen kultur og blir lik majoriteten. Integrering betyr at man deltar i samfunnet -- laerer spraakat, foelaer lovene, jobber og bidrar -- uten at man noedevendigvis maa gi opp sin kulturelle identitet.

Integrering er en **toveis prosess**. Det krever innsats baade fra den som kommer og fra samfunnet som tar imot. Innvandrere maa laere norsk, forstaa norske lover og verdier, og delta i arbeids- og samfunnsliv. Men det norske samfunnet maa ogsaa vaere villig til aa inkludere, gi muligheter og akseptere at folk kan vaere norske paa ulike maater.

Norskopplaering, utdanning og arbeid er de viktigste noekelene til integrering. Forskning viser at de som faar jobb raskt, integreres bedre. De som laerer spraakat godt, faar stoerre nettverk. Og barn av innvandrere som vokser opp i Norge, klarer seg ofte svaaert godt -- mange tar hoeayere utdanning og bidrar aktivt i samfunnet.

Samtidig er det utfordringer. Noen innvandrergrupper sliter med hoey arbeidsledighet, lav utdanning og sosial isolasjon. Boligsegregering -- at innvandrere konsentreres i visse omraader -- kan foersterke utenforskap. Og kulturelle forskjeller kan skape misforstaaeelser og konflikter.`,
    },
    {
      id: 'samfunnsfag-10-30-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-30-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa integrering og mangfold:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-30-n-quiz1-q0',
            task: 'Hva er forskjellen mellom integrering og assimilering?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell, begge betyr det samme', isCorrect: false },
              { id: 'b', text: 'Integrering betyr at man deltar i samfunnet men beholder sin kultur; assimilering betyr at man gir opp sin kultur', isCorrect: true },
              { id: 'c', text: 'Integrering gjelder bare barn, assimilering gjelder voksne', isCorrect: false },
              { id: 'd', text: 'Assimilering er frivillig, integrering er paalaegt', isCorrect: false },
            ],
            solution: 'Integrering betyr at man deltar i samfunnet (laerer spraak, jobber, foelger lover) uten aa maaette gi opp sin kulturelle identitet. Assimilering betyr aa gi opp sin egen kultur for aa bli lik majoriteten.',
          },
          {
            id: 'samfunnsfag-10-30-n-quiz1-q1',
            task: 'Hvorfor kalles integrering en toveis prosess?',
            options: [
              { id: 'a', text: 'Fordi innvandrere maa bo i to land', isCorrect: false },
              { id: 'b', text: 'Fordi det krever innsats baade fra den som kommer og fra samfunnet som tar imot', isCorrect: true },
              { id: 'c', text: 'Fordi det finnes to typer integrering', isCorrect: false },
              { id: 'd', text: 'Fordi prosessen gaar foerst fremover og saa bakover', isCorrect: false },
            ],
            solution: 'Integrering er en toveis prosess fordi det krever innsats fra baade innvandreren (laere spraak, delta i samfunnet) og mottakssamfunnet (vaere inkluderende, gi muligheter).',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-30-n-section2',
      type: 'text',
      content: `## Rasisme og diskriminering -- noe som angaar alle

**Rasisme** er fordomaer, holdninger eller handlinger som nedvurderer mennesker paa grunn av hudfarge, etnisitet eller nasjonal opprinnelse. **Diskriminering** er urettferdig forskjellsbehandling. Baade rasisme og diskriminering er ulovlig i Norge, men de finnes likevel -- baade i aapne og skjulte former.

**Aapen rasisme** er direkte -- rasistiske kommentarer, vold eller trakassering. Den er lettere aa identifisere og foerdoemmme. Men **strukturell rasisme** er mer subtil: det handler om moeanstre i samfunnet som gir ulike grupper ulike muligheter, uten at noen noedevendigvis har ment det slik. Forskning viser for eksempel at jobbsoekere med utenlandske navn har lavere sannsynlighet for aa bli kalt inn til intervju, selv med identiske kvalifikasjoner.

Rasisme kan ogsaa vaere **hverdagsrasisme** -- kommentarer og handlinger som kanskje ikke er ment ondsinnet, men som likevel gjaoer at noen foeler seg utenfor. «Hvor kommer du egentlig fra?» kan vaere et uskyldige spoersmaal, men for noen som er foedt og oppvokst i Norge, kan det signalisere at de ikke anses som «ordentlig norske».

Kampen mot rasisme og diskriminering er alles ansvar. Det handler om aa vaere bevisst paa egne fordommer, aa si ifra naar noen behandles urettferdig, og aa bygge et samfunn der alle behandles med verdighet uansett bakgrunn.`,
    },
    {
      id: 'samfunnsfag-10-30-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-30-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa rasisme og diskriminering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-30-n-quiz2-q0',
            task: 'Hva er strukturell rasisme?',
            options: [
              { id: 'a', text: 'Rasisme som er organisert av en bestemt gruppe', isCorrect: false },
              { id: 'b', text: 'Moenstre i samfunnet som gir ulike grupper ulike muligheter, uten at det noedevendigvis er tilsiktet', isCorrect: true },
              { id: 'c', text: 'Rasisme som bare finnes i bygningsbransjen', isCorrect: false },
              { id: 'd', text: 'Det samme som aapen rasisme', isCorrect: false },
            ],
            solution: 'Strukturell rasisme handler om systemiske moenstre som gir ulike grupper ulike muligheter -- for eksempel at jobbsoekere med utenlandske navn har lavere sjanse for aa bli kalt inn til intervju.',
          },
          {
            id: 'samfunnsfag-10-30-n-quiz2-q1',
            task: 'Er rasisme og diskriminering lovlig i Norge?',
            options: [
              { id: 'a', text: 'Ja, det er ytringsfrihet', isCorrect: false },
              { id: 'b', text: 'Nei, baade rasisme og diskriminering er ulovlig', isCorrect: true },
              { id: 'c', text: 'Bare diskriminering er ulovlig, ikke rasisme', isCorrect: false },
              { id: 'd', text: 'Det er ulovlig bare paa arbeidsplassen', isCorrect: false },
            ],
            solution: 'Rasisme og diskriminering er ulovlig i Norge. Likestillings- og diskrimineringsloven forbyr forskjellsbehandling basert paa etnisitet, religion og lignende.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-30-n-summary',
      type: 'text',
      content: `## Oppsummering

Norge er et **flerkulturelt samfunn** med innbyggere fra over 200 land. **Integrering** er en toveis prosess som krever innsats baade fra den som kommer og fra samfunnet. Noekelene til god integrering er spraak, utdanning og arbeid.

**Rasisme** og **diskriminering** finnes i baade aapne og skjulte former, inkludert **strukturell rasisme** som gir ulike grupper ulike muligheter. Kampen mot rasisme er alles ansvar.

Et mangfoldig samfunn byr paa baade muligheter og utfordringer. Nokkelen er aa bygge et samfunn der alle behandles med verdighet, der forskjeller respekteres, og der alle har muligheten til aa delta og bidra.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 31 NARRATIV: Likestilling og kjoennsmangfold
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_31_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-31-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '31',
  title: 'Likestilling og kjønnsmangfold',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om kampen for likestilling mellom kjoenaaene, om kjoennsroller i endring og om skeiv historie i Norge.',
  estimatedMinutes: 40,
  competenceGoals: ['reflektere over identitet, tilhørighet og mangfold'],
  linkedChapterId: 'samfunnsfag-10-31',
  content: [
    {
      id: 'samfunnsfag-10-31-n-intro',
      type: 'text',
      content: `## Fra stemmerett til mangfold

I 1913 ble Norge et av de foerste landene i verden som ga kvinner full stemmerett. Det var et historisk oeyeblikk -- men bare begynnelsen paa en lang kamp for likestilling.

I dag regnes Norge som et av verdens mest likestilte land. Vi har hatt kvinnelig statsminister, halvparten av regjeringen bestaar gjerne av kvinner, og pappaperm er blitt en selvfoelge. Men betyr det at vi er i maal?

Ikke helt. Kvinner tjener fortsatt mindre enn menn. Arbeidsmarkedet er sterkt kjoennsdelt -- kvinner dominerer i helse, omsorg og utdanning, mens menn dominerer i teknologi, haandverk og lederstillinger. Vold i naere relasjoner rammer kvinner i stoerre grad. Og spoersmaal om kjoennsidentitet og seksualitet utfordrer oss til aa tenke bredere enn den tradisjonelle inndelingen i mann og kvinne.`,
    },
    {
      id: 'samfunnsfag-10-31-n-section1',
      type: 'text',
      content: `## Kjoennsroller -- fra tradisjon til endring

**Kjoennsroller** er forventningene samfunnet har til hvordan menn og kvinner skal oppfoere seg, kle seg og vaere. I det gamle bondesamfunnet var rollene tydelige: mannen arbeidet ute, kvinnen var hjemme. Paa 1800-tallet var kvinner rettslig underordnet menn -- de kunne ikke stemme, eie eiendom eller ta utdanning paa lik linje.

Kampen for likestilling har vaert lang og inneholdt mange milepaaeler. **1854**: kvinner fikk arverett paa lik linje med menn. **1882**: kvinner fikk ta artium. **1913**: full stemmerett for kvinner. **1978**: likestillingsloven ble vedtatt. **1993**: pappapermisjon ble innfoert. Hvert steg var et resultat av kamp, debatt og motstand.

I dag har **kjoennsrollene** endret seg enormt. Fedre er mye mer involvert i barnepass enn tidligere. Kvinner tar hoeyere utdanning i stoerre grad enn menn. Men noen moeanstre er seige: vi snakker om et **kjoennsdelt arbeidsmarked** der kvinner og menn i stor grad velger ulike yrker. Norge har faktisk et av de mest kjoennsdelte arbeidsmarkedene i Europa -- et paradoks for et land som er saa opptatt av likestilling.

**Loennsforskjellen** mellom kvinner og menn har blitt mindre, men den finnes fortsatt. Kvinner tjener i gjennomsnitt mindre enn menn, delvis paa grunn av yrkesvalg, delvis paa grunn av at kvinner oftere jobber deltid, og delvis paa grunn av mekanismer som er vanskeligere aa forklare.`,
    },
    {
      id: 'samfunnsfag-10-31-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-31-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa likestilling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-31-n-quiz1-q0',
            task: 'Naar fikk kvinner full stemmerett i Norge?',
            options: [
              { id: 'a', text: '1884', isCorrect: false },
              { id: 'b', text: '1905', isCorrect: false },
              { id: 'c', text: '1913', isCorrect: true },
              { id: 'd', text: '1945', isCorrect: false },
            ],
            solution: 'Kvinner fikk full stemmerett i Norge i 1913. Norge var et av de foerste landene i verden som innfoerte dette.',
          },
          {
            id: 'samfunnsfag-10-31-n-quiz1-q1',
            task: 'Hva mener vi med et kjoennsdelt arbeidsmarked?',
            options: [
              { id: 'a', text: 'At kvinner og menn ikke har lov til aa jobbe sammen', isCorrect: false },
              { id: 'b', text: 'At kvinner og menn i stor grad velger ulike yrker', isCorrect: true },
              { id: 'c', text: 'At det finnes separate arbeidsplasser for menn og kvinner', isCorrect: false },
              { id: 'd', text: 'At menn tjener dobbelt saa mye som kvinner', isCorrect: false },
            ],
            solution: 'Et kjoennsdelt arbeidsmarked betyr at kvinner og menn i stor grad velger ulike yrker -- kvinner dominerer i helse og omsorg, menn i teknologi og haandverk.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-31-n-section2',
      type: 'text',
      content: `## Skeiv historie og kjoennsmangfold

Likestilling handler ikke bare om forholdet mellom kvinner og menn. Det handler ogsaa om retten til aa vaere den man er, uavhengig av seksuell orientering og kjoennsidentitet.

Norges **skeive historie** er baade moerk og inspirerende. Homofile handlinger var ulovlig i Norge helt til **1972**. Mange levde i skjul og frykt. PST (den gang Politiets overvaakningstjeneste) registrerte homofile. Stigmaet var enormt.

Siden den gang har utviklingen vaert dramatisk. I **1993** fikk homofile rett til registrert partnerskap. I **2009** kom **felles ekteskapslov**, som ga homofile og lesbiske rett til aa gifte seg paa lik linje med heterofile. I **2016** fikk transpersoner rett til juridisk kjoennsskifte basert paa selvbestemmelse.

I dag feires **Pride** i byer over hele Norge, og aapenheten om seksualitet og kjoennsidentitet er stoerre enn noen gang. Men kampen er ikke over. **LHBT+-personer** opplever fortsatt diskriminering, hat og vold. Terrorangrepet mot London Pub i Oslo i juni 2022, der to mennesker ble drept under Pride, var en brutal paaminnelse om at hat fortsatt kan faa doeadelige konsekvenser.

**Kjoennsmangfold** innebaaerer aa anerkjenne at kjoenn ikke noedevendigvis er en enkel todeling i mann og kvinne. Noen opplever seg som **ikke-binaere** -- at de verken foeler seg som mann eller kvinne. Andre er **transpersoner** -- de opplever at kjoennet de ble tildelt ved foedsel, ikke stemmer med hvem de er. Aa respektere og inkludere mennesker med ulik kjoennsidentitet er en del av et moderne, likestilt samfunn.`,
    },
    {
      id: 'samfunnsfag-10-31-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-31-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa skeiv historie og kjoennsmangfold:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-31-n-quiz2-q0',
            task: 'Naar ble felles ekteskapslov innfoert i Norge?',
            options: [
              { id: 'a', text: '1993', isCorrect: false },
              { id: 'b', text: '2002', isCorrect: false },
              { id: 'c', text: '2009', isCorrect: true },
              { id: 'd', text: '2016', isCorrect: false },
            ],
            solution: 'Felles ekteskapslov ble innfoert i 2009 og ga homofile og lesbiske rett til aa gifte seg paa lik linje med heterofile par.',
          },
          {
            id: 'samfunnsfag-10-31-n-quiz2-q1',
            task: 'Hva betyr det aa vaere ikke-binaer?',
            options: [
              { id: 'a', text: 'At man ikke har noen kjoennsidentitet', isCorrect: false },
              { id: 'b', text: 'At man opplever seg verken som mann eller kvinne', isCorrect: true },
              { id: 'c', text: 'At man er baaede mann og kvinne samtidig', isCorrect: false },
              { id: 'd', text: 'At man er usikker paa egen identitet', isCorrect: false },
            ],
            solution: 'Aa vaere ikke-binaer betyr at man ikke opplever seg som utelukkende mann eller kvinne. Det er en del av det bredere kjoennsmangfoldet.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-31-n-summary',
      type: 'text',
      content: `## Oppsummering

Kampen for **likestilling** i Norge har vaert lang -- fra kvinners stemmerett i 1913 til dagens debatter om loennsforskjeller og kjoennsdelt arbeidsmarked. **Kjoennsrollene** har endret seg enormt, men noen moenstre bestaar.

**Skeiv historie** viser en utvikling fra kriminalisering til likeverd: felles ekteskapslov i 2009, og rett til juridisk kjoennsskifte i 2016. Men hat og diskriminering mot **LHBT+-personer** finnes fortsatt.

**Kjoennsmangfold** betyr aa anerkjenne at kjoenn og identitet er mer komplekst enn en enkel todeling. Et likestilt samfunn er et samfunn der alle kan vaere den de er, med respekt og verdighet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 32 NARRATIV: Psykisk helse og livsmestring
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_32_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-32-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '32',
  title: 'Psykisk helse og livsmestring',
  subtitle: 'Narrativ versjon',
  description: 'En varm og aapen fortelling om psykisk helse, stress, mestring og hvordan sosiale medier pavirker oss -- med praktiske tips for et bedre liv.',
  estimatedMinutes: 40,
  competenceGoals: ['reflektere over identitet, tilhørighet og mangfold'],
  linkedChapterId: 'samfunnsfag-10-32',
  content: [
    {
      id: 'samfunnsfag-10-32-n-intro',
      type: 'text',
      content: `## Det er lov aa ikke ha det bra

La oss begynne med noe viktig: **alle** sliter av og til. Alle foealer seg triste, engstelige, ensomme eller overveldet iblant. Det er ikke et tegn paa svakhet -- det er en del av det aa vaere menneske.

**Psykisk helse** handler om hvordan vi har det innvendig -- foelelsene vaarae, tankene vaarae, og evnen vaar til aa haandtere livets utfordringer. Akkurat som fysisk helse kan psykisk helse vaere god eller daarlig, og den varierer over tid. Noen dager har du det bra, andre dager er tyngre.

For unge mennesker er dette en saerlig utfordrende tid. Kroppen forandrer seg, forventningene oeker, sosiale relasjoner blir mer komplekse, og fremtiden kan foeles usikker. I tillegg lever dagens unge med noe ingen generasjon foer dem har opplevd: en digital verden som aldri slaar seg av.

Ungdata-undersoekelsene viser at de fleste unge i Norge har det bra. Men de viser ogsaa at andelen som rapporterer om psykiske plager -- angst, depressive symptomer, ensomhet -- har oekt de siste aarene. Det betyr at dette er noe vi maa ta paa alvor og snakke aapent om.`,
    },
    {
      id: 'samfunnsfag-10-32-n-section1',
      type: 'text',
      content: `## Stress -- naar presset blir for stort

**Stress** er kroppens reaksjon paa krav og utfordringer. Litt stress er faktisk nyttig -- det hjelper deg aa fokusere foer en proeave eller prestere i en konkurranse. Men naar stresset blir kronisk -- naar du foeler deg presset hele tiden uten aa faa hvile -- kan det vaere skadelig.

Unge opplever stress fra mange kanter. **Skolepress** -- karakterer, proever, lekser, forventninger. **Sosialt press** -- aa passe inn, se riktig ut, ha de riktige vennene. **Prestasjonspress** -- aa vaere flink i alt, hele tiden. Og **tidspress** -- foelelsen av at det aldri er nok timer i doegnet.

Det er viktig aa gjenkjenne tegnene paa for mye stress: problemer med aa sove, hodepine, irritabilitet, konsentrasjonsvansker, eller at du trekker deg tilbake fra venner og aktiviteter.

Hva kan du gjoere? For det foerste: **anerkjenn foelelsene dine**. Det er lov aa synes at ting er vanskelig. For det andre: **snakk med noen**. En venn, en forelder, en laerer, en helsesykepleier. Aa sette ord paa det du foeler, er ofte det foerste steget mot aa ha det bedre. For det tredje: **ta vare paa det grunnleggende** -- soevn, fysisk aktivitet, frokost, tid uten skjerm. Det hoeres enkelt ut, men disse tingene har enorm effekt paa psykisk helse.`,
    },
    {
      id: 'samfunnsfag-10-32-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-32-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa psykisk helse og stress:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-32-n-quiz1-q0',
            task: 'Hva er psykisk helse?',
            options: [
              { id: 'a', text: 'Det samme som aa ikke ha psykiske sykdommer', isCorrect: false },
              { id: 'b', text: 'Hvordan vi har det innvendig -- foelelser, tanker og evne til aa haandtere utfordringer', isCorrect: true },
              { id: 'c', text: 'Noe som bare angaar dem som er syke', isCorrect: false },
              { id: 'd', text: 'Evnen til aa prestere godt paa skolen', isCorrect: false },
            ],
            solution: 'Psykisk helse handler om hvordan vi har det innvendig -- vaarae foelelser, tanker og evne til aa haandtere livets utfordringer. Alle har psykisk helse, og den varierer over tid.',
          },
          {
            id: 'samfunnsfag-10-32-n-quiz1-q1',
            task: 'Hva er det viktigste du kan gjoere naar du foeler deg overveldet?',
            options: [
              { id: 'a', text: 'Holde det for deg selv og haape at det gaar over', isCorrect: false },
              { id: 'b', text: 'Snakke med noen du stoler paa om hvordan du har det', isCorrect: true },
              { id: 'c', text: 'Scrolle paa sosiale medier for aa tenke paa noe annet', isCorrect: false },
              { id: 'd', text: 'Jobbe enda hardere for aa bevise at du mestrer det', isCorrect: false },
            ],
            solution: 'Aa snakke med noen du stoler paa -- en venn, forelder, laerer eller helsesykepleier -- er ofte det viktigste foerste steget. Aa sette ord paa foelelsene hjelper.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-32-n-section2',
      type: 'text',
      content: `## Sosiale medier -- venn og fiende

**Sosiale medier** er en stor del av livet til de fleste unge. Instagram, TikTok, Snapchat, YouTube -- disse plattformene tilbyr underholdning, fellesskap og kontakt med venner. Men de har ogsaa en moerkere side.

Forskning viser at mye tid paa sosiale medier kan haenge sammen med daarligere psykisk helse, saerlig blant jenter. Noen av mekanismene er: **sammenligning** -- du ser andres beste oeyeblikk og sammenligner med ditt eget hverdagsliv; **FOMO** (fear of missing out) -- foelelsen av aa gaa glipp av noe; **kroppsbilde** -- filtrerte bilder skaper urealistiske forventninger; og **soevnmangel** -- skjermbruk sent paa kvelden forstyrrer soevnen.

Men det er viktig aa nyansere. Sosiale medier kan ogsaa vaere positivt: de gir tilhoerighet, mulighet til aa uttrykke seg kreativt, og tilgang til informasjon og stoettefellesskap. For mange unge er de en viktig arena for vennskap og identitetsutforskning.

Nokkelen er **bevissthet og balanse**. Noen tips: vaer bevisst paa hvordan du foealer deg etter aa ha scrollet -- gjoer det deg glad eller nedstemt? Sett grenser for skjermtid, saerlig foer sengetid. Husk at det du ser paa sosiale medier er et redigert utsnitt av virkeligheten. Og ikke vaer redd for aa ta pauser -- det er overraskende befriende aa legge fra seg telefonen.`,
    },
    {
      id: 'samfunnsfag-10-32-n-section3',
      type: 'text',
      content: `## Livsmestring -- verktoeykassen for livet

**Livsmestring** er et begrep som har faaett stor plass i norsk skole. Det handler om aa utvikle ferdigheter og kompetanse til aa haandtere livets utfordringer paa en god maate.

Hva betyr det i praksis? Det handler om aa kunne **regulere foelelsene dine** -- aa kjenne igjen foelelser, akseptere dem og velge hvordan du reagerer. Det handler om aa bygge gode **relasjoner** -- aa kommunisere, samarbeide og loeaese konflikter. Det handler om **oekonomisk forstaelse** -- aa styre pengene dine. Og det handler om aa kunne **ta gode valg** for egen helse og fremtid.

Noen viktige mestringsstrategier: **Problemfokusert mestring** betyr aa aktivt gjoere noe med situasjonen -- for eksempel aa lage en leseplan naar du stresser for eksamen. **Emosjonsfokusert mestring** betyr aa haandtere foelelsene dine -- for eksempel aa puste dypt, gaae en tur eller snakke med noen naar du er lei deg.

Det er ogsaa viktig aa vite naar du trenger **profesjonell hjelp**. Helsesykepleier paa skolen, fastlegen, Mental Helses hjelpetelefon (116 123), eller Kirkens SOS (22 40 00 40) er alle steder du kan henvende deg. Aa soeke hjelp er ikke et tegn paa svakhet -- det er et tegn paa styrke og selvinnsikt.`,
    },
    {
      id: 'samfunnsfag-10-32-n-summary',
      type: 'text',
      content: `## Oppsummering

**Psykisk helse** angaar alle, og det er normalt aa slite av og til. **Stress** fra skole, sosialt liv og prestasjonspress kan bli for mye -- og da er det viktig aa snakke med noen og ta vare paa grunnleggende behov som soevn og aktivitet.

**Sosiale medier** kan baade berike og belaste. Bevissthet om egen bruk og balanse mellom digital og analog tid er viktig.

**Livsmestring** handler om aa utvikle ferdigheter til aa haandtere livets utfordringer: regulere foelelser, bygge relasjoner, ta gode valg. Og husk: aa soeke hjelp naar du trenger det, er et tegn paa styrke.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 33 NARRATIV: Rus og kriminalitet
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_33_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-33-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '33',
  title: 'Rus og kriminalitet',
  subtitle: 'Narrativ versjon',
  description: 'En balansert og faktabasert gjennomgang av rus, avhengighet, kriminalitet og forebygging -- med fokus paa forstaelse og beskyttelse.',
  estimatedMinutes: 40,
  competenceGoals: ['reflektere over identitet, tilhørighet og mangfold'],
  linkedChapterId: 'samfunnsfag-10-33',
  content: [
    {
      id: 'samfunnsfag-10-33-n-intro',
      type: 'text',
      content: `## Valg, press og konsekvenser

Paa et tidspunkt i ungdomsaarene vil de fleste av dere moete situasjoner der rus er til stede. Kanskje noen tilbyr deg en oeal paa en fest. Kanskje du ser jevnaldrende som snuser eller roeaker. Kanskje du lurer paa hva cannabis egentlig er.

Det er viktig aa snakke aapent om rus -- ikke for aa skremme deg, men for aa gi deg kunnskap saa du kan ta gode valg. Forskning viser at unge som har kunnskap om rus og dets konsekvenser, tar bedre beslutninger enn de som bare har faaatt beskjed om aa si nei.

**Rusmidler** er stoffer som pavirker hjernen og endrer hvordan du tenker, foealer og oppfoerer deg. De vanligste er **alkohol**, **tobakk/snus**, **cannabis** og sterkere stoffer som kokain, amfetamin og opiater. I Norge er alkohol lovlig for personer over 18 aar (vin og oeal) og 20 aar (sprit), mens de fleste andre rusmidler er ulovlige.

Den viktigste tingen aa forstaa om rus er at **den utviklende hjernen er saerlig saarbar**. Hjernen er ikke ferdig utviklet foer du er i midten av 20-aarene. Rusmidler i ung alder kan forstyrre denne utviklingen og gjoere varig skade -- saerlig paa hukommelse, konsentrasjon og evnen til aa ta gode beslutninger.`,
    },
    {
      id: 'samfunnsfag-10-33-n-section1',
      type: 'text',
      content: `## Avhengighet -- naar det du velger, velger deg

Ingen planlegger aa bli avhengig. Det begynner gjerne med nysgjerrighet, sosialt press eller et oenske om aa slappe av. Men rusmidler pavirker hjernens beloenningssystem -- de utloeser dopamin, et stoff som gir foelelsen av velvaaere og beloenning.

Over tid kan hjernen tilpasse seg: den trenger mer av stoffet for aa oppnaa den samme effekten (**toleranse**), og den foeler seg daarlig uten det (**abstinens**). Da har du utviklet en **avhengighet** -- og det som begynte som et valg, har blitt et behov.

Avhengighet rammer ikke alle likt. **Risikofaktorer** inkluderer genetikk (noen har stoerre biologisk saarbarhet), psykiske vansker (mange ruser seg for aa doeyve angst, depresjon eller traumer), og miljoefaktorer (oppvekst, vennemiljoee, tilgjengelighet). Men avhengighet kan ramme hvem som helst -- det er ikke et tegn paa daarlig karakter.

**Alkohol** er det vanligste rusmiddelet i Norge og det som foerer til mest skade totalt sett. Det er ogsaa det mest normaliserte -- mange voksne drikker regelmessig. Men alkohol kan foere til avhengighet, helseskader, ulykker og vold. Forskning viser at jo senere du begynner aa drikke, jo lavere er risikoen for aa utvikle problemer.

I Norge har det vaert mye debatt om **ruspolitikk**. Noen mener at rusmisbruk primaaert er et helseproblem og at rusavhengige trenger hjelp, ikke straff. Andre mener at strenge lover er noedvendig for aa forebygge rusbruk. Denne debatten handler om grunnleggende spoersmaal om ansvar, omsorg og hva samfunnet kan gjoere for aa beskytte sine innbyggere.`,
    },
    {
      id: 'samfunnsfag-10-33-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-33-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa rus og avhengighet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-33-n-quiz1-q0',
            task: 'Hvorfor er unge saerlig saarbare for rusmidler?',
            options: [
              { id: 'a', text: 'Fordi de har lavere kroppsvekt', isCorrect: false },
              { id: 'b', text: 'Fordi hjernen ikke er ferdig utviklet foer midt i 20-aarene, og rus kan forstyrre utviklingen', isCorrect: true },
              { id: 'c', text: 'Fordi unge drikker mer enn voksne', isCorrect: false },
              { id: 'd', text: 'Fordi unge ikke vet hva rus er', isCorrect: false },
            ],
            solution: 'Hjernen er ikke ferdig utviklet foer midt i 20-aarene. Rusmidler i ung alder kan forstyrre denne utviklingen og gjoere varig skade paa hukommelse, konsentrasjon og beslutningsevne.',
          },
          {
            id: 'samfunnsfag-10-33-n-quiz1-q1',
            task: 'Hva er toleranse i forbindelse med rusmidler?',
            options: [
              { id: 'a', text: 'At kroppen toler alle typer rusmidler like godt', isCorrect: false },
              { id: 'b', text: 'At man trenger stadig stoerre doser for aa oppnaa den samme effekten', isCorrect: true },
              { id: 'c', text: 'At man er tolerant overfor andre som bruker rusmidler', isCorrect: false },
              { id: 'd', text: 'At rusmiddelet slutrer aa virke etter en stund', isCorrect: false },
            ],
            solution: 'Toleranse betyr at kroppen tilpasser seg et rusmiddel slik at du trenger stadig stoerre doser for aa oppnaa den samme effekten. Det er et steg paa veien mot avhengighet.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-33-n-section2',
      type: 'text',
      content: `## Kriminalitet og forebygging

**Kriminalitet** er handlinger som er ulovlige ifoeolge norsk lov. Det spenner fra smaa lovbrudd som nasking til alvorlige forbrytelser som vold og drap. I Norge har vi relativt lav kriminalitet sammenlignet med mange andre land, men utfordringene finnes.

Det er en klar sammenheng mellom rus og kriminalitet. Mange lovbrudd begaas i ruspaavirket tilstand -- alkohol er involvert i en stor andel av volds- og trafikkforbrytelser. Narkotika er ulovlig i seg selv, og kjoepa og salg av narkotika er en form for kriminalitet.

Men kriminalitet har ikke bare med rus aa gjoere. **Risikofaktorer** for kriminalitet inkluderer fattigdom, oppvekstproblemer, manglende utdanning og tilknytning til negative miljoeer. **Beskyttelsesfaktorer** inkluderer et trygt hjem, gode venner, meningsfulle aktiviteter og tilhoerighet til samfunnet.

**Forebygging** er mer effektivt enn straff. Det betyr aa gripe inn tidlig -- gjennom gode barnehager, stoettende skolemiljoeer, fritidsaktiviteter og hjelp til familier som sliter. Politiet driver ogsaa forebyggende arbeid, blant annet gjennom **politiraad** og samarbeid med skoler og kommuner.

For unge under 18 aar bruker Norge i stor grad **alternative reaksjoner** fremfor fengselsstraff: ungdomsstraff, ungdomsoppfoelging, mekling og samfunnstjeneste. Tanken er at unge lovbrytere har bedre av tiltak som hjelper dem paa rett spor enn av aa sitte i fengsel.`,
    },
    {
      id: 'samfunnsfag-10-33-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-33-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa kriminalitet og forebygging:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-33-n-quiz2-q0',
            task: 'Hvorfor bruker Norge alternative reaksjoner for unge lovbrytere?',
            options: [
              { id: 'a', text: 'Fordi vi ikke har nok fengselsplasser', isCorrect: false },
              { id: 'b', text: 'Fordi unge har bedre av tiltak som hjelper dem paa rett spor enn av aa sitte i fengsel', isCorrect: true },
              { id: 'c', text: 'Fordi unge ikke kan straffes for lovbrudd', isCorrect: false },
              { id: 'd', text: 'Fordi det er billigere enn fengselsstraff', isCorrect: false },
            ],
            solution: 'Norge prioriterer alternative reaksjoner for unge lovbrytere fordi forskning viser at tiltak som stoette, oppfoelging og mekling er mer effektivt enn fengsel for aa forhindre gjentatt kriminalitet.',
          },
          {
            id: 'samfunnsfag-10-33-n-quiz2-q1',
            task: 'Hva er beskyttelsesfaktorer mot kriminalitet?',
            options: [
              { id: 'a', text: 'Strenge lover og lang fengselsstraff', isCorrect: false },
              { id: 'b', text: 'Trygt hjem, gode venner, meningsfulle aktiviteter og tilhoerighet', isCorrect: true },
              { id: 'c', text: 'Overvaakning og kontroll av alle innbyggere', isCorrect: false },
              { id: 'd', text: 'Forbud mot alkohol og tobakk', isCorrect: false },
            ],
            solution: 'Beskyttelsesfaktorer mot kriminalitet inkluderer et trygt hjem, gode venner, meningsfulle aktiviteter og tilhoerighet til samfunnet. Forebygging er mer effektivt enn straff.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-33-n-summary',
      type: 'text',
      content: `## Oppsummering

**Rusmidler** pavirker hjernen og kan foere til **avhengighet** -- saerlig hos unge, siden hjernen ikke er ferdig utviklet foer midt i 20-aarene. Alkohol er det mest utbredte rusmiddelet i Norge og forarsaker mest skade.

Det er en klar sammenheng mellom **rus og kriminalitet**. **Forebygging** -- gjennom gode oppvekstvilkaar, tilhoerighet og tidlig innsats -- er mer effektivt enn straff. For unge bruker Norge i stor grad alternative reaksjoner fremfor fengsel.

Det viktigste er kunnskap og gode valg. Vit hva rusmidler gjoer med kropp og hjerne, vaer bevisst paa sosialt press, og vit at det er hjelp aa faa for dem som trenger det.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 34 NARRATIV: Seksualitet og grensesetting
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_34_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-34-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '34',
  title: 'Seksualitet og grensesetting',
  subtitle: 'Narrativ versjon',
  description: 'En respektfull og informativ gjennomgang av seksualitet, samtykke, grensesetting og relevante lover -- tilpasset unge mennesker.',
  estimatedMinutes: 40,
  competenceGoals: ['reflektere over identitet, tilhørighet og mangfold'],
  linkedChapterId: 'samfunnsfag-10-34',
  content: [
    {
      id: 'samfunnsfag-10-34-n-intro',
      type: 'text',
      content: `## Din kropp, dine grenser

Seksualitet er en naturlig del av det aa vaere menneske. Det handler om foelelser, tiltrekning, intimitet og identitet. Og det er noe som utvikler seg gjennom hele livet -- fra de foerste sommerfuglene i magen til dype, voksne relasjoner.

Men seksualitet handler ogsaa om **grenser**, **respekt** og **ansvar**. I en tid der seksualitet er svaaert synlig gjennom medier, filmer og internett, er det viktigere enn noen gang aa kunne skille mellom fiksjon og virkelighet, og mellom det som er greit og det som ikke er det.

Dette kapittelet handler ikke om aa fortelle deg hva du skal gjoere eller ikke gjoere. Det handler om aa gi deg kunnskap og verktoeay slik at du kan ta gode, trygge valg -- og respektere baade dine egne og andres grenser.`,
    },
    {
      id: 'samfunnsfag-10-34-n-section1',
      type: 'text',
      content: `## Samtykke -- det viktigste ordet

Kjernen i all seksuell aktivitet er **samtykke**. Samtykke betyr at alle involverte sier ja frivillig, og at de kan trekke tilbake dette jaet naaer som helst. Det hoeres enkelt ut, men det er viktig aa forstaa hva samtykke virkelig innebaaerer.

Samtykke maa vaere **frivillig**. Det betyr at ingen skal presses, trues eller overtales. Hvis noen sier ja fordi de foealer seg presset, er det ikke samtykke. Samtykke maa vaere **informert**. Begge parter maa vite hva de sier ja til. Samtykke maa vaere **gjensidig**. Begge parter maa vaere enige. Og samtykke maa vaere **tilbakekallbart**. Du kan alltid ombestemme deg, ogsaa midt i noe.

Det er ogsaa viktig aa vite at noen **ikke kan gi samtykke**. En person som er berusest, bevisstloes eller sover, kan ikke gi samtykke. En person under den seksuelle lavalderen kan ikke gi rettslig gyldig samtykke til sex med en voksen.

Aa laere seg aa kommunisere om grenser er en ferdighet -- og det er en ferdighet som er nyttig langt utover det seksuelle. Det handler om aa toere aa si hva du oensker og hva du ikke oensker, og om aa lytte til den andre personen. Det handler om respekt.`,
    },
    {
      id: 'samfunnsfag-10-34-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-34-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa samtykke og grensesetting:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-34-n-quiz1-q0',
            task: 'Hva kjennetegner gyldig samtykke?',
            options: [
              { id: 'a', text: 'At den ene personen sier ja en gang, og da gjelder det alltid', isCorrect: false },
              { id: 'b', text: 'At det er frivillig, informert, gjensidig og kan trekkes tilbake', isCorrect: true },
              { id: 'c', text: 'At man har vaert kjaaerester lenge', isCorrect: false },
              { id: 'd', text: 'At ingen sier nei', isCorrect: false },
            ],
            solution: 'Gyldig samtykke maa vaere frivillig (ikke presset), informert (man vet hva man sier ja til), gjensidig (begge er enige) og tilbakekallbart (man kan alltid ombestemme seg).',
          },
          {
            id: 'samfunnsfag-10-34-n-quiz1-q1',
            task: 'Kan en person som er sterkt beruset, gi samtykke?',
            options: [
              { id: 'a', text: 'Ja, saa lenge de sier ja', isCorrect: false },
              { id: 'b', text: 'Ja, hvis de har drukket frivillig', isCorrect: false },
              { id: 'c', text: 'Nei, en sterkt beruset person kan ikke gi gyldig samtykke', isCorrect: true },
              { id: 'd', text: 'Det kommer an paa situasjonen', isCorrect: false },
            ],
            solution: 'En person som er sterkt beruset, kan ikke gi gyldig samtykke. Aa ha sex med en person som er for beruset til aa samtykke, er et overgrep.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-34-n-section2',
      type: 'text',
      content: `## Lover og beskyttelse

Norsk lov har klare regler som er ment aa beskytte, saerlig unge mennesker. Den **seksuelle lavalderen** i Norge er **16 aar**. Det betyr at det er ulovlig for en voksen aa ha seksuell omgang med en person under 16 aar. Denne loven finnes for aa beskytte barn og unge mot utnyttelse.

**Seksuelle overgrep** -- seksuell aktivitet uten samtykke -- er alvorlige lovbrudd. Det inkluderer voldtekt, seksuell trakassering, overgrep mot barn og spredning av seksuelt innhold uten samtykke.

Et viktig tema i var digitale tid er **deling av intime bilder**. Det er ulovlig aa dele nakenbilder eller seksuelt innhold av andre uten deres samtykke. Det gjelder ogsaa for dem under 18 aar. Aa ta, oppbevare eller dele nakenbilder av personer under 18 aar kan vaere straffbart som barnepornografi -- selv om du selv er under 18.

Hvis du eller noen du kjenner opplever overgrep, er det viktig aa vite at **det aldri er offerets feil**. Det finnes hjelp: helsesykepleier, laege, politiet, og organisasjoner som **Dixi ressurssenter** og **Stine Sofies stiftelse** kan kontaktes. Det krever mot aa soeke hjelp, men det er det riktige aa gjoere.`,
    },
    {
      id: 'samfunnsfag-10-34-n-section3',
      type: 'text',
      content: `## Seksualitet, medier og virkelighet

Unge i dag er utsatt for mye seksuelt innhold gjennom medier -- fra reklame og musikkladeoer til det som finnes tilgjengelig paa internett. Det er viktig aa vaere bevisst paa at mye av det du ser, gir et forvrengt bilde av seksualitet.

Pornografi, som mange unge eksponeres for, presenterer en urealistisk og ofte skadelig fremstilling av sex. Det viser ikke reelle foelelser, kommunikasjon eller gjensidighet. Forskning viser at tidlig og hyppig eksponering for pornografi kan pavirke holdninger til sex og relasjoner negativt.

Et sunt forhold til seksualitet handler om **gjensidig respekt**, **kommunikasjon** og **trygghet**. Det handler om aa foele seg komfortabel med sin egen kropp, aa toere aa sette grenser, og aa respektere partnerens grenser. Det handler om aa ta ting i ditt eget tempo, uten press utenfra.

Husk: det finnes ikke noe «normalt» tidspunkt for aa begynne aa vaere seksuelt aktiv. Noen er klare tidlig, andre venter. Begge deler er helt greit. Det viktigste er at du gjoer ting fordi du oensker det selv, i et tempo som foeles riktig for deg.`,
    },
    {
      id: 'samfunnsfag-10-34-n-summary',
      type: 'text',
      content: `## Oppsummering

Seksualitet er en naturlig del av livet. **Samtykke** -- frivillig, informert, gjensidig og tilbakekallbart -- er grunnlaget for all seksuell aktivitet. Den **seksuelle lavalderen** i Norge er 16 aar, og lovene beskytter unge mot overgrep og utnyttelse.

**Deling av intime bilder** uten samtykke er ulovlig, og for personer under 18 kan det vaere straffbart som barnepornografi. Medier og pornografi gir ofte et forvrengt bilde av seksualitet.

Et sunt forhold til seksualitet bygger paa **respekt, kommunikasjon og trygghet**. Du bestemmer over din egen kropp, og du har rett til aa sette grenser. Hvis du trenger hjelp, finnes det mange steder du kan henvende deg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 7 Narrativ
// ============================================================================

export const SAMFUNNSFAG_10_NARRATIV_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSFAG_10_29_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_30_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_31_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_32_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_33_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_34_NARRATIV,
];
