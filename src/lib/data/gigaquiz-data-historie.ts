import type { QuizQuestion } from './quiz-data';

export interface GigaquizChapter {
  chapterNumber: number;
  title: string;
  level: 'VG2' | 'VG3';
  courseId: string;
  textbookChapterId: string;
  questions: QuizQuestion[];
}

export interface GigaquizConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  chapters: GigaquizChapter[];
}

export const GIGAQUIZ_HISTORIE: GigaquizConfig = {
  id: 'historie',
  title: 'Historie Gigaquiz',
  subtitle: 'Diagnostisk eksamensforberedelse – HIS01-03',
  description: 'Test deg selv på alle 17 kapitler i Historie VG2 og VG3. Finn ut hvilke temaer du kan godt, og hvilke du bør repetere før eksamen.',
  chapters: [
    // ═══════════════════════════════════════════
    // VG2 – Kapittel 1-10
    // ═══════════════════════════════════════════

    // Kapittel 1: Historisk metode
    {
      chapterNumber: 1,
      title: 'Historisk metode',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-1-1',
      questions: [
        {
          question: 'Hva er forskjellen mellom en primærkilde og en sekundærkilde?',
          options: ['Primærkilder er fra tiden man studerer, sekundærkilder er bearbeidede fremstillinger', 'Primærkilder er øyenvitneskildringer, sekundærkilder er alle skriftlige kilder fra perioden', 'Primærkilder er alltid mer pålitelige enn sekundærkilder', 'Primærkilder er offentlige dokumenter, sekundærkilder er private brev og dagbøker'],
          explanation: 'Primærkilder er kilder fra den tiden man studerer (dagbøker, brev, fotografier), mens sekundærkilder er bearbeidede fremstillinger basert på primærkilder (historiebøker, artikler).',
        },
        {
          question: 'Hva menes med at en kilde har "tendens"?',
          options: ['Kilden har en bestemt hensikt eller vinkling', 'Kilden gjenspeiler en generell historisk utvikling', 'Kilden er preget av tidens dominerende ideologi uten bevisst vinkling', 'Kilden bekrefter det andre kilder allerede har slått fast'],
          explanation: 'Tendens betyr at kilden har en bestemt hensikt eller vinkling. Skaperen kan ønske å fremstille noe i et spesielt lys eller påvirke mottakeren.',
        },
        {
          question: 'Hva er forskjellen mellom levninger og beretninger?',
          options: ['Levninger er spor etter fortiden, beretninger er fortellinger om fortiden', 'Levninger er materielle kilder, beretninger er alle skriftlige kilder', 'Levninger er utilsiktede spor, beretninger er kilder med kjent opphav', 'Levninger er fra førhistorisk tid, beretninger er fra historisk tid'],
          explanation: 'Levninger er fysiske spor etter fortiden (bygninger, redskaper), mens beretninger er fortellinger om fortiden (krøniker, memoarer).',
        },
      ],
    },

    // Kapittel 2: Å arbeide med historie
    {
      chapterNumber: 2,
      title: 'Å arbeide med historie',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-2-1',
      questions: [
        {
          question: 'Hva betyr «brudd og kontinuitet» i historisk sammenheng?',
          options: ['At noe endres brått (brudd) mens annet vedvarer over tid (kontinuitet)', 'At historiske fremstillinger enten fokuserer på konflikter eller på fredelige perioder', 'At kilder fra perioden enten er skadet (brudd) eller intakte (kontinuitet)', 'At historikere skiller mellom kortsiktige hendelser og langsiktige strukturer'],
          explanation: 'Brudd refererer til plutselige historiske endringer (revolusjoner, kriger), mens kontinuitet betyr at strukturer, tradisjoner eller institusjoner vedvarer over lang tid.',
        },
        {
          question: 'Hva er historiebevissthet?',
          options: ['Forståelsen av sammenhenger mellom fortid, nåtid og fremtid', 'Evnen til å skille mellom troverdige og ikke-troverdige kilder', 'Kunnskap om de viktigste historiske hendelsene og årstallene', 'Bevissthet om at historikere kan ha ulike politiske ståsteder'],
          explanation: 'Historiebevissthet handler om å forstå hvordan fortiden påvirker nåtiden, og hvordan vår forståelse av fortiden formes av den tiden vi lever i.',
        },
        {
          question: 'Hva betyr det å «periodisere» historien?',
          options: ['Å dele historien inn i avgrensede tidsperioder med felles kjennetegn', 'Å ordne historiske kilder kronologisk etter dato', 'Å identifisere sykliske mønstre som gjentar seg gjennom historien', 'Å avgrense et historisk emne til en bestemt geografisk region'],
          explanation: 'Periodisering betyr å dele historien inn i perioder (f.eks. middelalder, renessanse) basert på felles kjennetegn, noe som gjør det enklere å forstå historiske endringer.',
        },
      ],
    },

    // Kapittel 3: Forhistorie og antikken
    {
      chapterNumber: 3,
      title: 'Forhistorie og antikken',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-3-1',
      questions: [
        {
          question: 'Hva betyr ordet «demokrati»?',
          options: ['Folkestyre', 'Borgerråd', 'Likestyre', 'Folkemakt'],
          explanation: 'Demokrati kommer fra gresk «demos» (folk) og «kratos» (styre), og betyr folkestyre.',
        },
        {
          question: 'Hvem hadde IKKE politiske rettigheter i det athenske demokratiet?',
          options: ['Kvinner, slaver og fremmede', 'Bønder og håndverkere uten eiendom', 'Menn under 30 år', 'Borgere som ikke hadde avtjent militærtjeneste'],
          explanation: 'Bare frie menn over 18 år med athensk borgerskap hadde politiske rettigheter. Kvinner, slaver og fremmede (metøker) var utelukket.',
        },
        {
          question: 'Når falt det vestromerske riket?',
          options: ['476 e.Kr.', '395 e.Kr.', '410 e.Kr.', '1453 e.Kr.'],
          explanation: 'Det vestromerske riket falt i 476 e.Kr. 395 var rikets deling, 410 var plyndringen av Roma, 1453 var Konstantinopels fall.',
        },
      ],
    },

    // Kapittel 4: Middelalderen
    {
      chapterNumber: 4,
      title: 'Middelalderen',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-4-1',
      questions: [
        {
          question: 'Hva var føydalisme?',
          options: ['Et hierarkisk system basert på jordeiendeler og lojalitetsbånd', 'Et styresystem der kirken kontrollerte jordfordelingen', 'Et økonomisk system der kongen eide all jord og bøndene betalte skatt direkte', 'Et militærsystem der alle frie menn hadde verneplikt for kongen'],
          explanation: 'Føydalisme var et hierarkisk system der kongen sto øverst, etterfulgt av vasaller/adelsmenn, riddere og bønder/leilendinger.',
        },
        {
          question: 'Når rammet Svartedauden Norge?',
          options: ['1349', '1347', '1361', '1380'],
          explanation: 'Svartedauden kom til Norge i 1349 (via Bergen). 1347 var utbruddet i Sør-Europa, 1361 var et nytt pestutbrudd, 1380 var Kalmarunionens begynnelse.',
        },
        {
          question: 'Hva var korstogene?',
          options: ['Militære ekspedisjoner for å erobre Det hellige land', 'Kirkelige pilegrimsferder organisert av paven', 'Handelsekspedisjoner til Det hellige land finansiert av italienske bystater', 'Diplomatiske misjoner for å forene den østlige og vestlige kirken'],
          explanation: 'Korstogene (1095–1291) var militære ekspedisjoner for å erobre Det hellige land fra muslimene.',
        },
      ],
    },

    // Kapittel 5: Renessanse og reformasjon
    {
      chapterNumber: 5,
      title: 'Renessanse og reformasjon',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-5-1',
      questions: [
        {
          question: 'Hva betyr «renessanse»?',
          options: ['Gjenfødelse', 'Opplysning', 'Fornyelse', 'Frigjøring'],
          explanation: 'Renessanse betyr «gjenfødelse» og refererer til gjenoppdagelsen av antikkens kunst, litteratur og filosofi.',
        },
        {
          question: 'Hva kritiserte Martin Luther ved den katolske kirken?',
          options: ['Avlatshandel og at frelse kunne kjøpes for penger', 'At kirken ikke drev nok misjon blant hedningene', 'At paven nektet å oversette Bibelen til latin', 'At kirken tillot prestene å gifte seg'],
          explanation: 'Luther kritiserte særlig avlatshandelen – at kirken solgte tilgivelse for synder mot betaling.',
        },
        {
          question: 'Hva var Gutenbergs viktigste oppfinnelse?',
          options: ['Trykkpressen med løse bokstavtyper', 'Papirproduksjon basert på trefiber', 'Kobberstikk-teknikken for illustrasjoner', 'Blekk som tålte masseproduksjon'],
          explanation: 'Gutenbergs trykkpresse med bevegelige typer (ca. 1450) revolusjonerte spredningen av kunnskap.',
        },
      ],
    },

    // Kapittel 6: Opplysningstid og revolusjoner
    {
      chapterNumber: 6,
      title: 'Opplysningstid og revolusjoner',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-6-1',
      questions: [
        {
          question: 'Når ble den amerikanske uavhengighetserklæringen vedtatt?',
          options: ['4. juli 1776', '4. mars 1775', '17. september 1787', '14. juli 1789'],
          explanation: '4. juli 1776. 1775 var krigens start, 1787 var grunnloven, 1789 var den franske revolusjonen.',
        },
        {
          question: 'Hva var den franske revolusjonens slagord?',
          options: ['Frihet, likhet, brorskap', 'Frihet, eiendom, sikkerhet', 'Rettferdighet, likhet, frihet', 'Fornuft, fremskritt, folkestyre'],
          explanation: 'Den franske revolusjonens slagord var «Frihet, likhet, brorskap» (Liberté, égalité, fraternité).',
        },
        {
          question: 'Når fikk Norge sin grunnlov?',
          options: ['17. mai 1814', '25. februar 1814', '4. november 1814', '7. juni 1905'],
          explanation: '17. mai 1814 på Eidsvoll. 25. februar var Kiel-traktaten, 4. november den reviderte grunnloven etter union med Sverige.',
        },
      ],
    },

    // Kapittel 7: Industrialisering
    {
      chapterNumber: 7,
      title: 'Industrialisering',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-7-1',
      questions: [
        {
          question: 'Hvor begynte den industrielle revolusjonen?',
          options: ['England', 'Nederland', 'Frankrike', 'Skottland'],
          explanation: 'Den industrielle revolusjonen begynte i England på midten av 1700-tallet, blant annet på grunn av kull- og jernforekomster, kapital fra handel og stabile politiske forhold.',
        },
        {
          question: 'Hva var en viktig konsekvens av industrialiseringen for arbeiderklassen?',
          options: ['Lange arbeidsdager, lav lønn og dårlige boforhold i industribyene', 'Rask lønnsøkning som ga de fleste en bedre levestandard', 'At fagforeninger ble opprettet og anerkjent av staten med en gang', 'At barnearbeid ble forbudt allerede i industrialiseringens første fase'],
          explanation: 'Tidlig industrialisering førte til 12–16 timers arbeidsdager, lav lønn, barnearbeid og elendige boforhold. Fagforeningene vokste frem gradvis som reaksjon.',
        },
        {
          question: 'Hva var den viktigste oppfinnelsen som drev den tidlige industrialiseringen?',
          options: ['Dampmaskinen', 'Den mekaniske vevstolen', 'Jernbanen', 'Bessemer-prosessen for stålproduksjon'],
          explanation: 'James Watts forbedrede dampmaskin (1769) var nøkkelen – den drev fabrikker, gruver og etter hvert lokomotiver. Vevstolen og jernbanen var viktige, men avhengig av dampmaskinen.',
        },
      ],
    },

    // Kapittel 8: Nasjonalisme
    {
      chapterNumber: 8,
      title: 'Nasjonalisme',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-8-1',
      questions: [
        {
          question: 'Hva er nasjonalisme?',
          options: ['Ideen om at folk med felles språk og kultur bør ha egen stat', 'Ideen om at staten bør kontrollere all økonomi for nasjonens beste', 'Ideen om at et lands grenser bør følge naturlige geografiske skillelinjer', 'Ideen om at alle folk bør samles i overnasjonale forbund for fred'],
          explanation: 'Nasjonalisme er ideen om at folk med felles språk, kultur og historie utgjør en nasjon og bør ha sin egen stat.',
        },
        {
          question: 'Hva skjedde 7. juni 1905 i Norge?',
          options: ['Stortinget erklærte unionen med Sverige for oppløst', 'Folkeavstemningen om unionsoppløsningen ble gjennomført', 'Prins Carl av Danmark ble valgt til norsk konge', 'Karlstad-forhandlingene ble avsluttet'],
          explanation: '7. juni 1905 vedtok Stortinget at unionen med Sverige var oppløst. Folkeavstemningen var i august, Karlstad-forhandlingene i september, og kongevalget i november.',
        },
        {
          question: 'Hvilken rolle spilte nasjonalromantikken i den norske nasjonsbyggingen?',
          options: ['Den fremhevet norsk natur, folklore og bondekultur som uttrykk for nasjonal identitet', 'Den la vekt på Norges historiske bånd til Danmark som kulturell grunnstein', 'Den fokuserte på å kopiere europeisk bykultur som modell for det nye Norge', 'Den vektla det norrøne som det eneste autentisk norske og avviste all utenlandsk påvirkning'],
          explanation: 'Nasjonalromantikken dyrket norsk natur, folkeeventyr (Asbjørnsen og Moe), folkemusikk og bondekultur som uttrykk for en særegen norsk identitet, adskilt fra dansk kultur.',
        },
      ],
    },

    // Kapittel 9: Imperialisme og kolonialisme
    {
      chapterNumber: 9,
      title: 'Imperialisme og kolonialisme',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-9-1',
      questions: [
        {
          question: 'Omtrent hvor mye av Afrika kontrollerte europeere i 1914?',
          options: ['90 %', '60 %', '75 %', '50 %'],
          explanation: 'I 1914 kontrollerte europeere ca. 90 % av Afrika. Bare Etiopia og Liberia var formelt uavhengige.',
        },
        {
          question: 'Hva skjedde på Berlinkonferansen 1884–85?',
          options: ['Europeiske stormakter fastsatte regler for deling av Afrika', 'Afrikanske ledere forhandlet om grenser med europeiske stater', 'Slaveriet ble formelt avskaffet i alle europeiske kolonier', 'Europeiske land ble enige om å trekke seg ut av Vest-Afrika'],
          explanation: 'På Berlinkonferansen fastsatte europeiske stormakter regler for kolonisering og deling av Afrika. Ingen afrikanske ledere var invitert.',
        },
        {
          question: 'Hva er sosialdarwinisme?',
          options: ['Ideen om at noen folk og samfunn er naturlig overlegne andre', 'Darwins opprinnelige teori om naturlig utvalg blant arter', 'En vitenskapelig teori om at samfunn utvikler seg i faste stadier', 'En politisk bevegelse som brukte evolusjonsteori for å fremme likhet'],
          explanation: 'Sosialdarwinisme overførte Darwins evolusjonsteori til samfunn og «raser», og ble brukt til å rettferdiggjøre kolonialisme og rasisme.',
        },
      ],
    },

    // Kapittel 10: Kulturmøter og kommunikasjon
    {
      chapterNumber: 10,
      title: 'Kulturmøter og kommunikasjon',
      level: 'VG2',
      courseId: 'historie-vg2',
      textbookChapterId: 'historie-10-1',
      questions: [
        {
          question: 'Hva kjennetegner et kulturmøte i historisk sammenheng?',
          options: ['Når mennesker fra ulike kulturer møtes og gjensidig påvirker hverandre', 'Når en kultur dominerer og erstatter en annen fullstendig', 'Når to folkegrupper utveksler handelsvarer over en felles grense', 'Når en stat aktivt forsøker å bevare sin egen kulturarv mot påvirkning utenfra'],
          explanation: 'Et kulturmøte oppstår når mennesker fra ulike kulturer møtes gjennom handel, migrasjon, erobring eller andre kontakter – med gjensidig påvirkning, ikke bare enveis.',
        },
        {
          question: 'Hva var Silkeveien?',
          options: ['Et nettverk av handelsruter mellom Øst-Asia og Middelhavet', 'En enkelt hovedvei fra Kina til Roma bygget av Han-dynastiet', 'En sjørute langs Afrikas kyst som forbandt Europa med India', 'Betegnelsen på den kinesiske eksporten av silke til Japan og Korea'],
          explanation: 'Silkeveien var et nettverk av handelsruter (ikke én enkelt vei) som forbandt Asia og Europa. Varer, ideer, teknologi og religioner ble utvekslet over flere tusen år.',
        },
        {
          question: 'Hva var en viktig konsekvens av den colombianske utvekslingen etter 1492?',
          options: ['Massedød blant urbefolkningen i Amerika på grunn av europeiske sykdommer', 'At europeere tok i bruk avansert jordbruksteknologi fra Amerika', 'At den transatlantiske slavehandelen umiddelbart tok slutt', 'At urfolk i Amerika fikk tilgang til europeisk medisin og levde lenger'],
          explanation: 'Den colombianske utvekslingen førte til at opptil 90 % av urbefolkningen i Amerika døde av sykdommer som kopper og meslinger, som de ikke hadde immunitet mot.',
        },
      ],
    },

    // ═══════════════════════════════════════════
    // VG3 – Kapittel 11-17
    // ═══════════════════════════════════════════

    // Kapittel 11: Første verdenskrig
    {
      chapterNumber: 11,
      title: 'Første verdenskrig',
      level: 'VG3',
      courseId: 'historie-vg3',
      textbookChapterId: 'historie-11-1',
      questions: [
        {
          question: 'Hvilken hendelse utløste første verdenskrig?',
          options: ['Attentatet mot Franz Ferdinand i Sarajevo', 'Tysklands invasjon av Belgia', 'Østerrike-Ungarns annektering av Bosnia', 'Russlands mobilisering mot Østerrike-Ungarn'],
          explanation: 'Attentatet mot den østerriksk-ungarske tronarvingen i Sarajevo 28. juni 1914 satte alliansesystemet i gang og utløste krigen.',
        },
        {
          question: 'Hva kjennetegnet skyttergravskrigen på vestfronten?',
          options: ['Stillingskrig der fronten knapt beveget seg på flere år', 'Raske gjennombrudd fulgt av lange pauser mellom offensiver', 'Hyppige flankemanøvrer som fikk fronten til å skifte posisjon', 'Hovedsakelig sjøblokade kombinert med begrenset landkrig'],
          explanation: 'Vestfronten var preget av stillingskrig i skyttergraver fra Kanalen til Sveits – fronten beveget seg knapt på fire år tross enorme tap.',
        },
        {
          question: 'Hva var Versaillestraktaten?',
          options: ['Fredsavtalen som ga Tyskland hovedskylden for krigen og påla harde betingelser', 'En gjensidig fredsavtale der alle parter tok ansvar for krigen', 'En avtale som delte Østerrike-Ungarn i nye nasjonalstater', 'En avtale som opprettet Folkeforbundet som eneste forpliktelse'],
          explanation: 'Versaillestraktaten (1919) påla Tyskland eneansvar for krigen, store erstatninger, tap av territorier og militære begrensninger.',
        },
      ],
    },

    // Kapittel 12: Mellomkrigstiden
    {
      chapterNumber: 12,
      title: 'Mellomkrigstiden',
      level: 'VG3',
      courseId: 'historie-vg3',
      textbookChapterId: 'historie-12-1',
      questions: [
        {
          question: 'Hva kjennetegner et totalitært regime?',
          options: ['Staten søker total kontroll over samfunnet og individet', 'Staten kontrollerer økonomien, men tillater politisk opposisjon', 'Militæret styrer landet uten ideologisk grunnlag', 'En sterk leder styrer med støtte fra et begrenset oligarki'],
          explanation: 'Totalitarisme søker total kontroll over alle samfunnsområder – dette skiller det fra autoritære regimer som kan tillate en viss privat sfære.',
        },
        {
          question: 'Når tok Hitler makten i Tyskland?',
          options: ['1933', '1932', '1934', '1930'],
          explanation: 'Hitler ble utnevnt til rikskansler 30. januar 1933. 1932 stilte han til presidentvalg, 1934 ble han Führer etter Hindenburgs død.',
        },
        {
          question: 'Hva var nazismens viktigste særtrekk sammenlignet med italiensk fascisme?',
          options: ['Biologisk rasisme og antisemittisme som kjerneelement', 'Sterkere vekt på militarisme og territoriell ekspansjon', 'Mer omfattende bruk av propaganda og massemøter', 'Totalitær kontroll over økonomien gjennom statlig eierskap'],
          explanation: 'Begge delte nasjonalisme, lederprinsipp og antidemokrati, men nazismens kjerne var biologisk rasisme og antisemittisme – noe som muliggjorde Holocaust.',
        },
      ],
    },

    // Kapittel 13: Andre verdenskrig og Holocaust
    {
      chapterNumber: 13,
      title: 'Andre verdenskrig og Holocaust',
      level: 'VG3',
      courseId: 'historie-vg3',
      textbookChapterId: 'historie-13-1',
      questions: [
        {
          question: 'Når startet og sluttet andre verdenskrig?',
          options: ['1939–1945', '1937–1945', '1939–1944', '1941–1945'],
          explanation: 'Fra 1. september 1939 (angrepet på Polen) til 1945. 1937 var krigens start i Asia, 1941 var USAs inntreden.',
        },
        {
          question: 'Omtrent hvor mange jøder ble drept i Holocaust?',
          options: ['6 millioner', '4 millioner', '8 millioner', '11 millioner'],
          explanation: '6 millioner jøder. 11 millioner inkluderer alle offergrupper (romani, funksjonshemmede, politiske fanger m.fl.).',
        },
        {
          question: 'Når ble Norge angrepet av Tyskland?',
          options: ['9. april 1940', '10. mai 1940', '1. september 1939', '3. april 1940'],
          explanation: '9. april 1940 (Operasjon Weserübung). 10. mai var angrepet på Frankrike/Benelux, 1. september var angrepet på Polen.',
        },
      ],
    },

    // Kapittel 14: Den kalde krigen
    {
      chapterNumber: 14,
      title: 'Den kalde krigen',
      level: 'VG3',
      courseId: 'historie-vg3',
      textbookChapterId: 'historie-14-1',
      questions: [
        {
          question: 'Hva var den kalde krigen?',
          options: ['Konflikt mellom USA og Sovjet preget av ideologisk rivalisering uten direkte krig', 'En serie med stedfortrederkriger mellom NATO og Warszawapakten i Europa', 'Et våpenkappløp begrenset til utviklingen av atomvåpen', 'En økonomisk konkurranse mellom kapitalistiske og kommunistiske land'],
          explanation: 'Den kalde krigen (1947–1991) var en bred konflikt – ideologisk, militært, økonomisk og politisk – men uten direkte militær konfrontasjon mellom supermaktene.',
        },
        {
          question: 'Når falt Berlinmuren?',
          options: ['9. november 1989', '3. oktober 1990', '25. desember 1991', '9. november 1991'],
          explanation: '9. november 1989. 3. oktober 1990 ble Tyskland gjenforent, 25. desember 1991 ble Sovjetunionen oppløst.',
        },
        {
          question: 'Hva var Cuba-krisen?',
          options: ['En krise i 1962 da Sovjet plasserte atomraketter på Cuba', 'En konflikt i 1961 da USA forsøkte å invadere Cuba ved Grisebukta', 'En handelsblokade mot Cuba som varte fra 1960 til 1990', 'En krise i 1959 da Fidel Castro gjennomførte revolusjon på Cuba'],
          explanation: 'Cuba-krisen (oktober 1962) oppstod da USA oppdaget sovjetiske atomraketter på Cuba. Grisebukta (1961) var et mislykket invasjonsforsøk.',
        },
      ],
    },

    // Kapittel 15: Velferdsstaten Norge
    {
      chapterNumber: 15,
      title: 'Velferdsstaten Norge',
      level: 'VG3',
      courseId: 'historie-vg3',
      textbookChapterId: 'historie-15-1',
      questions: [
        {
          question: 'Hva kjennetegner den skandinaviske velferdsmodellen?',
          options: ['Universelle velferdsordninger finansiert gjennom høy skatt', 'Behovsprøvde ytelser kun til de som kan dokumentere lav inntekt', 'Privat forsikring som hovedkilde til helse- og pensjonsytelser', 'En modell der arbeidsgiverne dekker alle sosiale utgifter for sine ansatte'],
          explanation: 'Den skandinaviske velferdsmodellen bygger på universelle ordninger – alle har rett til helsetjenester, utdanning og pensjon, finansiert gjennom skatt.',
        },
        {
          question: 'Hva var viktig for Norges økonomiske vekst fra 1970-tallet?',
          options: ['Oppdagelsen og utvinningen av olje og gass i Nordsjøen', 'Storstilt industrialisering basert på billig vannkraft', 'Eksportinntekter fra fiskeri og oppdrettsnæringen', 'EF-medlemskap som ga tilgang til det europeiske markedet'],
          explanation: 'Funnet av olje på Ekofisk (1969) transformerte norsk økonomi. Norge sa nei til EF i 1972 og EU i 1994.',
        },
        {
          question: 'Når fikk kvinner allmenn stemmerett i Norge?',
          options: ['1913', '1901', '1907', '1919'],
          explanation: 'Allmenn stemmerett for kvinner kom i 1913. 1901 var begrenset kommunal stemmerett, 1907 var begrenset stemmerett ved stortingsvalg, 1919 var Finland og flere andre land.',
        },
      ],
    },

    // Kapittel 16: Norsk og samisk identitet
    {
      chapterNumber: 16,
      title: 'Norsk og samisk identitet',
      level: 'VG3',
      courseId: 'historie-vg3',
      textbookChapterId: 'historie-16-1',
      questions: [
        {
          question: 'Hva var fornorskingspolitikken?',
          options: ['Statlig politikk for å assimilere samer og kvener til norsk kultur og språk', 'En kulturpolitikk for å fremme nynorsk som hovedspråk i Norge', 'Tiltak for å integrere innvandrere fra Sør-Europa på 1960-tallet', 'Politikk for å samle de norske dialektene til ett felles talemål'],
          explanation: 'Fornorskingspolitikken (ca. 1850–1960) tvang samer og kvener til å gi opp eget språk og kultur til fordel for norsk, blant annet gjennom internatskoletvang.',
        },
        {
          question: 'Når ble Sametinget åpnet?',
          options: ['1989', '1987', '1980', '1995'],
          explanation: 'Sametinget ble åpnet i 1989, etter at sameloven ble vedtatt i 1987. Det er et folkevalgt organ for det samiske folket i Norge.',
        },
        {
          question: 'Hva var Alta-saken?',
          options: ['En stor konflikt om utbygging av Alta-Kautokeino-vassdraget på 1970–80-tallet', 'En strid om samisk reindrift i Alta-regionen på 1960-tallet', 'En rettssak om samenes rett til fiske i Altaelva', 'Opprettelsen av Finnmarkseiendommen etter langvarig konflikt'],
          explanation: 'Alta-saken (1979–82) var en stor konflikt om vassdraget der samiske og miljøvernaktivister demonstrerte. Saken satte samiske rettigheter på dagsordenen og ledet til sameloven og Sametinget.',
        },
      ],
    },

    // Kapittel 17: Globalisering og samtidshistorie
    {
      chapterNumber: 17,
      title: 'Globalisering og samtidshistorie',
      level: 'VG3',
      courseId: 'historie-vg3',
      textbookChapterId: 'historie-17-1',
      questions: [
        {
          question: 'Hva kjennetegner globalisering?',
          options: ['Økt sammenkobling mellom verdens land gjennom handel, teknologi og kultur', 'At internasjonale organisasjoner styrer nasjonal politikk', 'At vestlige land sprer sin kultur og erstatter lokale tradisjoner', 'At verdens land gradvis innfører samme politiske system'],
          explanation: 'Globalisering innebærer økt sammenkobling mellom verdens land gjennom fri handel, teknologisk utvikling, kulturutveksling og migrasjon – det er bredere enn bare vestlig kulturspredning.',
        },
        {
          question: 'Hvilken hendelse markerte slutten på den kalde krigen?',
          options: ['Sovjetunionens oppløsning i desember 1991', 'Berlinmurens fall i november 1989', 'Gorbatsjovs tiltredelse som generalsekretær i 1985', 'Gulfkrigen i 1991'],
          explanation: 'Selv om Berlinmurens fall i 1989 var symbolsk viktig, var det Sovjetunionens formelle oppløsning i desember 1991 som markerte den definitive slutten.',
        },
        {
          question: 'Hva er en viktig utfordring knyttet til globaliseringen?',
          options: ['Økte økonomiske forskjeller mellom og innad i land', 'At all internasjonal handel har blitt konsentrert i noen få multinasjonale selskaper', 'At nasjonalstater ikke lenger eksisterer som politiske enheter', 'At teknologisk utvikling har stoppet opp på grunn av patenttvister mellom land'],
          explanation: 'En sentral kritikk av globaliseringen er at den har økt forskjellene – noen land og grupper har tjent stort, mens andre er blitt hengende etter.',
        },
      ],
    },
  ],
};
