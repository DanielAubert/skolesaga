/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1 NARRATIV: Arbeidsliv og arbeidstakere
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_3_1_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-3-1-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.1',
  title: 'Arbeidsliv og arbeidstakere',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om arbeidslivets betydning, den norske modellen og dine rettigheter som arbeidstaker.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte arbeidslivets betydning for individ og samfunn',
    'reflektere over arbeidstakerrettigheter og arbeidsgivers plikter',
  ],
  linkedChapterId: 'samfunnskunnskap-3-1',
  content: [
    {
      id: 'samfunnskunnskap-3-1-n-intro',
      type: 'text',
      content: `## Mer enn bare en lønnsslipp

Tenk deg en vanlig mandag morgen. Vekkerklokken ringer, du står opp, spiser frokost og drar på jobb. For de fleste voksne er dette hverdagen -- store deler av livet tilbringes på en arbeidsplass. Men har du noen gang tenkt over hva arbeidet egentlig betyr for deg, utover pengene du tjener?

Arbeid er langt mer enn bare en inntektskilde. Når du jobber, får du økonomisk trygghet -- du kan betale husleie, kjøpe mat og planlegge fremtiden. Men arbeidet gir deg også noe dypere. Det gir deg et sosialt fellesskap: kollegaer du deler hverdagen med, noen å spise lunsj med, mennesker som forstår frustrasjonen når kopimaskinen ikke virker. Du opplever mestring når du løser vanskelige oppgaver, og du får en følelse av at du bidrar til noe større enn deg selv. Arbeidet gir struktur i hverdagen -- det er en grunn til å stå opp om morgenen. Og for mange er jobben en viktig del av identiteten: «Hva jobber du med?» er ofte det første spørsmålet vi stiller nye mennesker vi møter.

Samtidig er arbeidslivet i stadig endring. Flere jobber krever høyere utdanning enn før. Teknologi automatiserer oppgaver som mennesker tidligere utførte. Hjemmekontor og gig-økonomi gjør arbeidshverdagen mer fleksibel, men også mer uforutsigbar. Globalisering betyr at norske bedrifter konkurrerer med virksomheter over hele verden. Og livslang læring -- det å oppdatere kunnskapen sin gjennom hele karrieren -- blir stadig viktigere.

Å forstå arbeidslivet og rettighetene dine som arbeidstaker er avgjørende for å navigere trygt i dette landskapet. La oss dykke inn i det.`,
    },
    {
      id: 'samfunnskunnskap-3-1-n-section1',
      type: 'text',
      content: `## Den norske arbeidslivsmodellen -- et unikt samarbeid

Visste du at Norge har en helt spesiell måte å organisere arbeidslivet på? Den kalles den norske arbeidslivsmodellen, og den skiller seg fra mange andre land i verden.

Modellen hviler på tre pilarer. Den første er høy organisasjonsgrad: en stor andel av norske arbeidstakere er medlemmer i en fagforening. Fagforeningene forhandler på vegne av sine medlemmer, og dette gir arbeidstakerne mye større forhandlingsmakt enn de ville hatt alene.

Den andre pilaren er trepartssamarbeidet. Forestill deg et bord der tre parter sitter: arbeidstakerne, representert ved organisasjoner som LO (Landsorganisasjonen), som er Norges største arbeidstakerorganisasjon. På den andre siden sitter arbeidsgiverne, representert ved organisasjoner som NHO (Næringslivets Hovedorganisasjon). Og ved bordenden sitter staten, som legger til rette for samarbeid og kan gripe inn når det trengs. Andre viktige organisasjoner er Unio, YS, Akademikerne, Virke og Spekter. Til sammen utgjør disse et nettverk av samarbeid som holder det norske arbeidslivet i balanse.

Den tredje pilaren er tariffavtalene. Dette er avtaler mellom fagforeninger og arbeidsgivere som bestemmer lønn, arbeidstid og andre arbeidsvilkår. I stedet for at hver enkelt arbeidstaker må forhandle alene med sjefen sin, gjøres dette kollektivt.

Hva har denne modellen gitt oss? Forutsigbarhet og stabilitet -- både arbeidsgivere og arbeidstakere vet hva de kan forvente. Færre konflikter, fordi partene er vant til å snakke sammen. Høy tillit mellom partene, som gjør omstilling lettere. Og relativt lave lønnsforskjeller sammenlignet med mange andre land. Norge har også et sterkt stillingsvern, som betyr at det er vanskelig å si opp ansatte uten saklig grunn, og ansatte har medbestemmelse -- de har reell innflytelse på sin egen arbeidsplass.`,
    },
    {
      id: 'samfunnskunnskap-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-1-n-quiz1-q0',
            task: 'Hva menes med trepartssamarbeidet i norsk arbeidsliv?',
            options: [
              { id: 'a', text: 'Samarbeid mellom tre ulike fagforeninger', isCorrect: false },
              { id: 'b', text: 'Samarbeid mellom arbeidstakere, arbeidsgivere og staten', isCorrect: true },
              { id: 'c', text: 'Samarbeid mellom tre politiske partier om arbeidslivspolitikk', isCorrect: false },
              { id: 'd', text: 'Samarbeid mellom kommune, fylke og stat', isCorrect: false },
            ],
            solution: 'Trepartssamarbeidet er samarbeidet mellom arbeidstakerne (representert ved f.eks. LO), arbeidsgiverne (representert ved f.eks. NHO) og staten. Disse tre partene forhandler og samarbeider om lønn, arbeidsvilkår og arbeidslivspolitikk.',
          },
          {
            id: 'samfunnskunnskap-3-1-n-quiz1-q1',
            task: 'Hvilken organisasjon er Norges største arbeidstakerorganisasjon?',
            options: [
              { id: 'a', text: 'NHO', isCorrect: false },
              { id: 'b', text: 'Unio', isCorrect: false },
              { id: 'c', text: 'LO', isCorrect: true },
              { id: 'd', text: 'Virke', isCorrect: false },
            ],
            solution: 'LO (Landsorganisasjonen) er Norges største arbeidstakerorganisasjon. NHO er den største arbeidsgiverorganisasjonen. Unio, YS og Akademikerne er andre arbeidstakerorganisasjoner.',
          },
          {
            id: 'samfunnskunnskap-3-1-n-quiz1-q2',
            task: 'Hva er en tariffavtale?',
            options: [
              { id: 'a', text: 'En individuell arbeidskontrakt mellom ansatt og sjef', isCorrect: false },
              { id: 'b', text: 'En lov vedtatt av Stortinget om arbeidstid', isCorrect: false },
              { id: 'c', text: 'En avtale mellom fagforening og arbeidsgiver om lønns- og arbeidsvilkår', isCorrect: true },
              { id: 'd', text: 'En avtale mellom staten og kommunene om offentlig ansatte', isCorrect: false },
            ],
            solution: 'En tariffavtale er en skriftlig avtale mellom en fagforening og en arbeidsgiver (eller arbeidsgiverorganisasjon) om lønns- og arbeidsvilkår. Den forhandles kollektivt og gjelder for alle ansatte som omfattes av avtalen.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-1-n-section2',
      type: 'text',
      content: `## Arbeidsavtalen -- din viktigste trygghet

La oss si at du har fått din første jobb. Kanskje er det en sommerjobb på en kafé, eller en deltidsstilling i en butikk. Det første du bør vite er at du har krav på en skriftlig arbeidsavtale -- en arbeidskontrakt. Dette gjelder uansett om du jobber fulltid, deltid, midlertidig eller bare noen uker om sommeren.

Arbeidsavtalen skal inneholde viktig informasjon: partenes navn, hvor du skal jobbe, hva jobben din går ut på, når du starter, hva du får i lønn og når den utbetales, hvor mye du skal jobbe, dine ferierettigheter og oppsigelsesfrister. Alt dette skal stå svart på hvitt, og avtalen skal være på plass senest én måned etter at du starter.

Men hva om sjefen sier: «Vi tar det litt uformelt i begynnelsen, bare for å se om det fungerer»? Da bør alarmklokkene ringe. Å jobbe uten kontrakt er lovstridig. En «prøveperiode» uten kontrakt er ikke lov. Det kan tyde på at arbeidsgiveren vil unngå forpliktelsene sine. Hvis dette skjer deg, bør du be om skriftlig avtale, sjekke at den inneholder alt den skal, og beholde en kopi. Nekter arbeidsgiveren, kan du kontakte Arbeidstilsynet eller snakke med en fagforening.

Som arbeidstaker har du en rekke viktige rettigheter. Du har krav på lønn for utført arbeid, minst 25 virkedager ferie i året, og sykelønn dersom du blir syk. Du har permisjonsrettigheter, for eksempel foreldrepermisjon og omsorgspermisjon. Du har rett til verneombud og HMS-arbeid på arbeidsplassen. Du er vernet mot oppsigelse uten saklig grunn, og du er beskyttet mot diskriminering.

Når det gjelder arbeidstid, sier loven at du ikke kan jobbe mer enn 9 timer per dag eller 40 timer per uke som normalarbeidstid. Overtid skal gi ekstra betaling, og det finnes maksgrenser for hvor mye overtid du kan jobbe. Nattarbeid har strenge regler, og du har krav på minst 11 timers sammenhengende hviletid i døgnet.

Selv om du er ung og dette er din første jobb, har du de samme grunnleggende rettighetene som alle andre arbeidstakere. Aldri la noen fortelle deg noe annet.`,
    },
    {
      id: 'samfunnskunnskap-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-1-n-quiz2-q0',
            task: 'Når skal en arbeidsavtale senest være på plass?',
            options: [
              { id: 'a', text: 'Før du begynner å jobbe', isCorrect: false },
              { id: 'b', text: 'Senest én måned etter oppstart', isCorrect: true },
              { id: 'c', text: 'Etter tre måneders prøvetid', isCorrect: false },
              { id: 'd', text: 'Når du har jobbet i et halvt år', isCorrect: false },
            ],
            solution: 'Arbeidsavtalen skal være på plass senest én måned etter at arbeidsforholdet startet. Den gjelder for alle typer ansettelsesforhold -- fulltid, deltid, midlertidig og sommerjobb.',
          },
          {
            id: 'samfunnskunnskap-3-1-n-quiz2-q1',
            task: 'Hva er maksimal normalarbeidstid per uke ifølge loven?',
            options: [
              { id: 'a', text: '35 timer', isCorrect: false },
              { id: 'b', text: '37,5 timer', isCorrect: false },
              { id: 'c', text: '40 timer', isCorrect: true },
              { id: 'd', text: '45 timer', isCorrect: false },
            ],
            solution: 'Loven sier maks 9 timer per dag og 40 timer per uke som normalarbeidstid. Mange tariffavtaler har lavere grenser, f.eks. 37,5 timer per uke, men 40 timer er lovens grense.',
          },
          {
            id: 'samfunnskunnskap-3-1-n-quiz2-q2',
            task: 'Hva betyr stillingsvern?',
            options: [
              { id: 'a', text: 'At du ikke kan si opp jobben din selv', isCorrect: false },
              { id: 'b', text: 'At arbeidsgiver ikke kan si deg opp uten saklig grunn', isCorrect: true },
              { id: 'c', text: 'At du alltid har rett til fast stilling etter tre måneder', isCorrect: false },
              { id: 'd', text: 'At fagforeningen beskytter deg mot all kritikk fra sjefen', isCorrect: false },
            ],
            solution: 'Stillingsvern betyr at arbeidsgiver ikke kan si deg opp uten saklig grunn. Det er en lovbeskyttelse som gjør det vanskelig å bli oppsagt vilkårlig. Saklig grunn kan være driftsinnskrenkninger eller alvorlige brudd på arbeidsavtalen.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at arbeid gir oss mye mer enn bare penger -- det gir inntekt, sosial tilhørighet, mestring, struktur i hverdagen og identitet. Vi har lært om den norske arbeidslivsmodellen, som kjennetegnes av høy organisasjonsgrad, trepartssamarbeid mellom arbeidstakere (LO), arbeidsgivere (NHO) og staten, tariffavtaler og et sterkt stillingsvern. Vi har også sett at alle arbeidstakere har krav på skriftlig arbeidsavtale med informasjon om lønn, arbeidstid, ferie og oppsigelsesfrister, og at viktige rettigheter som lønn, ferie, sykelønn, permisjonsrettigheter og vern mot usaklig oppsigelse gjelder for alle -- uansett alder og stillingstype.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2 NARRATIV: Arbeidsmiljø og HMS
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_3_2_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-3-2-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.2',
  title: 'Arbeidsmiljø og HMS',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om hva et godt arbeidsmiljø er, hva HMS betyr, og hvordan arbeidsmiljøloven beskytter deg.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte hva som kjennetegner et godt arbeidsmiljø',
    'reflektere over HMS-arbeid og arbeidsmiljølovens betydning',
  ],
  linkedChapterId: 'samfunnskunnskap-3-2',
  content: [
    {
      id: 'samfunnskunnskap-3-2-n-intro',
      type: 'text',
      content: `## En arbeidsplass der du trives

Forestill deg to arbeidsplasser. På den første er det kaldt, dårlig belysning og bråkete maskiner. Sjefen snakker sjelden med de ansatte, og kollegaene baksnakker hverandre. På den andre arbeidsplassen er det godt lys, behagelig temperatur, og kollegaene hilser på hverandre om morgenen. Lederen spør regelmessig om hvordan det går, og alle føler at de bidrar til noe meningsfullt.

Hvor ville du helst jobbet? Svaret er åpenbart, og det illustrerer hvorfor arbeidsmiljø er så viktig. Et godt arbeidsmiljø forebygger sykdom og skader, øker trivsel og motivasjon, reduserer sykefravær, gir bedre produktivitet -- og er en grunnleggende rettighet du har som arbeidstaker.

Men hva er det egentlig som påvirker arbeidsmiljøet? Det er mer komplekst enn du kanskje tror. De fysiske forholdene spiller selvsagt inn: lys, støy, temperatur og ergonomi. Men de psykososiale forholdene er minst like viktige: trivsel, relasjoner mellom kollegaer, og stress. I tillegg kommer organisatoriske forhold som ledelseskvalitet, kommunikasjon og mulighet for medvirkning. Og i noen bransjer er også kjemiske og biologiske forhold relevante, som eksponering for farlige stoffer.

Alt dette henger sammen, og det er her HMS-arbeidet kommer inn.`,
    },
    {
      id: 'samfunnskunnskap-3-2-n-section1',
      type: 'text',
      content: `## HMS -- tre bokstaver som betyr mye

HMS står for Helse, Miljø og Sikkerhet, og det handler om systematisk arbeid for å sikre et trygt og godt arbeidsmiljø. HMS-arbeid er ikke noe som skjer av seg selv -- det krever bevisst innsats fra mange ulike aktører.

Hva omfatter HMS-arbeid? Det starter med å kartlegge risiko: hva kan gå galt på denne arbeidsplassen? Deretter handler det om å forebygge ulykker og sykdom, gi opplæring til ansatte slik at de kan jobbe trygt, følge opp sykmeldte, tilrettelegge fysisk for dem som trenger det, og jobbe aktivt med det psykososiale arbeidsmiljøet.

Men hvem har egentlig ansvaret? Her er det et klart hierarki. Arbeidsgiveren har hovedansvaret for HMS. Det er arbeidsgiverens plikt å sikre et forsvarlig arbeidsmiljø. Men arbeidstakeren har også et ansvar: du skal medvirke til HMS-arbeidet, følge reglene som gjelder, og varsle om farlige forhold.

På arbeidsplassen finnes det også spesielle roller. Verneombudet er de ansattes representant i HMS-saker -- en person som passer på at arbeidsgiveren følger reglene. I større virksomheter finnes det et AMU, et arbeidsmiljøutvalg, som er et samarbeidsorgan der ansatte og ledelse sammen diskuterer HMS-spørsmål. Bedriftshelsetjenesten gir faglig bistand i HMS-arbeid. Og over det hele troner Arbeidstilsynet -- den statlige etaten som fører tilsyn med at arbeidsmiljøloven faktisk følges ute på arbeidsplassene.`,
    },
    {
      id: 'samfunnskunnskap-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-2-n-quiz1-q0',
            task: 'Hva står HMS for?',
            options: [
              { id: 'a', text: 'Helse, Miljø og Sikkerhet', isCorrect: true },
              { id: 'b', text: 'Hjelp, Mekling og Støtte', isCorrect: false },
              { id: 'c', text: 'Helse, Mestring og Samarbeid', isCorrect: false },
              { id: 'd', text: 'Håndtering, Miljø og Sertifisering', isCorrect: false },
            ],
            solution: 'HMS står for Helse, Miljø og Sikkerhet. Det handler om systematisk arbeid for å sikre et trygt og godt arbeidsmiljø, og omfatter kartlegging av risiko, forebygging, opplæring og oppfølging.',
          },
          {
            id: 'samfunnskunnskap-3-2-n-quiz1-q1',
            task: 'Hvem har hovedansvaret for HMS på en arbeidsplass?',
            options: [
              { id: 'a', text: 'Verneombudet', isCorrect: false },
              { id: 'b', text: 'Arbeidstakerne selv', isCorrect: false },
              { id: 'c', text: 'Arbeidsgiver', isCorrect: true },
              { id: 'd', text: 'Arbeidstilsynet', isCorrect: false },
            ],
            solution: 'Arbeidsgiver har hovedansvaret for HMS og skal sikre et forsvarlig arbeidsmiljø. Arbeidstaker skal medvirke og varsle, verneombudet representerer ansatte, og Arbeidstilsynet fører eksternt tilsyn.',
          },
          {
            id: 'samfunnskunnskap-3-2-n-quiz1-q2',
            task: 'Hva er verneombudets rolle?',
            options: [
              { id: 'a', text: 'Å ansette og si opp folk', isCorrect: false },
              { id: 'b', text: 'Å representere de ansatte i HMS-saker', isCorrect: true },
              { id: 'c', text: 'Å føre tilsyn med arbeidsplassen på vegne av staten', isCorrect: false },
              { id: 'd', text: 'Å forhandle lønn for de ansatte', isCorrect: false },
            ],
            solution: 'Verneombudet er de ansattes representant i HMS-saker. Verneombudet passer på at arbeidsgiveren følger arbeidsmiljøloven og tar opp HMS-spørsmål på vegne av kollegaene.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-2-n-section2',
      type: 'text',
      content: `## Arbeidsmiljøloven -- ditt viktigste vern

Arbeidsmiljøloven er selve grunnmuren i norsk arbeidsliv. Dens formål er å sikre et arbeidsmiljø som gir full trygghet mot fysiske og psykiske skadevirkninger. La oss se på hva den faktisk beskytter deg mot.

Loven stiller krav om et fullt forsvarlig arbeidsmiljø, regulerer arbeidstiden (maks 9 timer per dag, med krav om pauser og hviletid), gir vern mot diskriminering, krever skriftlig arbeidsavtale for alle, gir oppsigelsesvern og sikrer rett til medvirkning og informasjon.

En del av arbeidsmiljøet som ofte undervurderes, er det psykososiale. Loven gir deg vern mot trakassering og mobbing, krav om at arbeidet skal være meningsfullt, mulighet for faglig og personlig utvikling, og en viss grad av selvbestemmelse i arbeidet.

La oss ta et eksempel. Tenk deg Kristian, som opplever at kollegaene snakker nedsettende om ham, utelukker ham fra sosiale aktiviteter og gir ham feil informasjon om arbeidsoppgaver. Det Kristian opplever er trakassering og mobbing -- et klart brudd på arbeidsmiljøloven.

Hva kan Kristian gjøre? Først bør han dokumentere hendelsene: skrive ned hva som skjer, med dato, tid og eventuelle vitner, og ta vare på skriftlig kommunikasjon. Deretter kan han si ifra internt -- snakke med nærmeste leder, kontakte verneombudet, ta opp saken i AMU hvis det finnes, eller bruke en intern varslingskanal. Hvis det ikke hjelper, kan han søke ekstern hjelp: kontakte Arbeidstilsynet, snakke med fagforeningen, oppsøke bedriftshelsetjenesten eller kontakte en advokat.

Arbeidsgiveren har plikt til å gripe inn mot mobbing og skal ha rutiner for håndtering av slike saker. Hvis ingenting gjøres, kan arbeidsgiveren holdes ansvarlig. Mobbing på arbeidsplassen er alvorlig og forbudt, og Kristian har rett til å bli hørt og få hjelp.

Det fysiske arbeidsmiljøet er også regulert: arbeidsplassen skal ha forsvarlig fysisk utforming, vern mot støy, stråling og kjemikalier, ergonomiske krav, og verneutstyr skal være tilgjengelig ved behov.`,
    },
    {
      id: 'samfunnskunnskap-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-2-n-quiz2-q0',
            task: 'Hva menes med psykososialt arbeidsmiljø?',
            options: [
              { id: 'a', text: 'Hvor god luft og belysning det er på kontoret', isCorrect: false },
              { id: 'b', text: 'De sosiale og psykologiske forholdene på jobben -- trivsel, relasjoner, stress, mobbing', isCorrect: true },
              { id: 'c', text: 'Hvilke dataverktøy og programmer de ansatte bruker', isCorrect: false },
              { id: 'd', text: 'Hvor mye de ansatte tjener i lønn', isCorrect: false },
            ],
            solution: 'Psykososialt arbeidsmiljø handler om de sosiale og psykologiske forholdene på jobben: trivsel, relasjoner mellom kollegaer, stress, mobbing, meningsfullt arbeid og mulighet for utvikling.',
          },
          {
            id: 'samfunnskunnskap-3-2-n-quiz2-q1',
            task: 'Hva er Arbeidstilsynets rolle?',
            options: [
              { id: 'a', text: 'Å forhandle tariffavtaler for de ansatte', isCorrect: false },
              { id: 'b', text: 'Å drive opplæring av nye ansatte', isCorrect: false },
              { id: 'c', text: 'Å føre tilsyn med at arbeidsmiljøloven følges', isCorrect: true },
              { id: 'd', text: 'Å utbetale dagpenger til arbeidsledige', isCorrect: false },
            ],
            solution: 'Arbeidstilsynet er en statlig etat som fører tilsyn med at arbeidsmiljøloven følges ute på arbeidsplassene. De kan gjennomføre inspeksjoner, gi pålegg og bøter ved brudd.',
          },
          {
            id: 'samfunnskunnskap-3-2-n-quiz2-q2',
            task: 'Hva bør du gjøre først hvis du opplever mobbing på arbeidsplassen?',
            options: [
              { id: 'a', text: 'Slutte i jobben umiddelbart', isCorrect: false },
              { id: 'b', text: 'Dokumentere hendelsene og si ifra til leder eller verneombud', isCorrect: true },
              { id: 'c', text: 'Mobbe tilbake', isCorrect: false },
              { id: 'd', text: 'Ignorere det og håpe det går over', isCorrect: false },
            ],
            solution: 'Første steg er å dokumentere hendelsene (dato, tid, vitner) og si ifra internt -- til leder, verneombud eller via intern varslingskanal. Arbeidsgiver har plikt til å gripe inn mot mobbing.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at arbeidsmiljøet påvirkes av fysiske, psykososiale og organisatoriske forhold, og at et godt arbeidsmiljø er avgjørende for trivsel, helse og produktivitet. HMS -- Helse, Miljø og Sikkerhet -- handler om systematisk arbeid med kartlegging av risiko, forebygging og opplæring. Arbeidsgiver har hovedansvaret for HMS, men arbeidstaker, verneombud, AMU og Arbeidstilsynet har også viktige roller. Arbeidsmiljøloven sikrer deg vern mot trakassering, krav om forsvarlig arbeidsmiljø og rett til medvirkning -- og hvis noe er galt, har du flere veier å gå for å få hjelp.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3 NARRATIV: Lønn og lønnsforhandlinger
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_3_3_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-3-3-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.3',
  title: 'Lønn og lønnsforhandlinger',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om hvordan lønn fastsettes, lønnsoppgjøret og hvordan tariffavtaler fungerer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte hvordan lønn fastsettes i Norge',
    'reflektere over tariffavtalenes betydning for arbeidslivet',
  ],
  linkedChapterId: 'samfunnskunnskap-3-3',
  content: [
    {
      id: 'samfunnskunnskap-3-3-n-intro',
      type: 'text',
      content: `## Pengene som driver det hele

Lønn. Det er kanskje det første de fleste tenker på når de hører ordet «jobb». Lønnen er det viktigste grunnlaget for de fleste menneskers økonomi -- den avgjør om du har råd til bolig, mat, klær og fritidsaktiviteter. Men har du noen gang tenkt over hvordan lønnen din faktisk fastsettes? Det handler om mye mer enn hva sjefen din synes du fortjener.

I Norge fastsettes lønn på flere måter. Den viktigste mekanismen er tariffavtaler mellom fagforeninger og arbeidsgivere, der organisasjonene forhandler seg frem til vilkår som gjelder for mange. I tillegg kan det foregå individuelle forhandlinger mellom deg og arbeidsgiveren din. Markedsmekanismer spiller også inn: hvis det er stor etterspørsel etter folk med din kompetanse og lite tilbud, presses lønnen opp. I visse bransjer finnes det også lovbestemte minstelønninger.

Hva avgjør om du tjener godt eller dårlig? Utdanning og kompetanse spiller en stor rolle -- jo mer spesialisert kunnskap du har, desto mer kan du forvente å tjene. Erfaring teller også, det samme gjør ansvaret du har og hvor komplekst arbeidet ditt er. Bransje og geografisk område påvirker lønnsnivået, og i bransjer med høy organisasjonsgrad er lønningene gjerne høyere. Bedriftens økonomi spiller også inn: en virksomhet som går godt, har mer å dele ut enn en som sliter.

Et interessant trekk ved Norge er at vi har relativt lave lønnsforskjeller sammenlignet med mange andre land. Det betyr at forskjellen mellom de som tjener minst og de som tjener mest, er mindre enn i for eksempel USA eller Storbritannia. Dette er delvis et resultat av den norske arbeidslivsmodellen.`,
    },
    {
      id: 'samfunnskunnskap-3-3-n-section1',
      type: 'text',
      content: `## Tariffavtaler og lønnsoppgjøret

La oss dykke dypere inn i tariffavtalene, som er selve bærebjelken i norsk lønnsdannelse. En tariffavtale er en skriftlig avtale mellom en fagforening og en arbeidsgiver eller arbeidsgiverorganisasjon om lønns- og arbeidsvilkår. Den gjelder for en bestemt periode, vanligvis to år.

Hva inneholder en typisk tariffavtale? Den fastsetter minstelønn for ulike stillinger, regulerer arbeidstid, bestemmer overtidsbetaling, gir tillegg for kveld-, natt- og helgearbeid, og regulerer ferie- og pensjonsordninger. Alt dette er forhandlet frem kollektivt, slik at enkeltpersoner slipper å stå alene mot arbeidsgiveren.

Hvert år gjennomføres det noe som kalles lønnsoppgjøret -- forhandlinger om lønn mellom arbeidstaker- og arbeidsgiverorganisasjonene. Og her kommer en viktig mekanisme inn: frontfagsmodellen.

Frontfagsmodellen fungerer slik: den konkurranseutsatte industrien -- altså den delen av næringslivet som konkurrerer med utlandet, for eksempel eksportbedrifter -- forhandler først. Resultatet av disse forhandlingene setter rammen for alle andre sektorer. Hvorfor? Fordi lønningene i Norge ikke kan vokse raskere enn det den konkurranseutsatte industrien tåler. Hvis lønningene stiger for mye, blir norske varer for dyre i utlandet, og bedrifter kan tape kunder og til slutt gå konkurs. Frontfagsmodellen sikrer altså at lønnsveksten er økonomisk ansvarlig, bidrar til lav inflasjon og opprettholder norsk konkurransekraft.

Resultatet av lønnsoppgjøret kan ta ulike former: et generelt tillegg der alle får like mye i kroner, et prosentvis tillegg der alle får samme prosent av sin nåværende lønn, eller et lavlønnstillegg der de med lavest lønn får ekstra.`,
    },
    {
      id: 'samfunnskunnskap-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-3-n-quiz1-q0',
            task: 'Hva er frontfagsmodellen?',
            options: [
              { id: 'a', text: 'En modell der offentlig sektor forhandler lønn først', isCorrect: false },
              { id: 'b', text: 'En modell der alle bransjer forhandler lønn samtidig', isCorrect: false },
              { id: 'c', text: 'En modell der konkurranseutsatt industri forhandler først og setter rammen for andre', isCorrect: true },
              { id: 'd', text: 'En modell der staten bestemmer all lønn', isCorrect: false },
            ],
            solution: 'Frontfagsmodellen innebærer at konkurranseutsatt industri forhandler først og setter rammen for lønnsoppgjøret i andre sektorer. Dette sikrer at lønnsveksten ikke overstiger det eksportindustrien tåler.',
          },
          {
            id: 'samfunnskunnskap-3-3-n-quiz1-q1',
            task: 'Hvor lenge gjelder en tariffavtale vanligvis?',
            options: [
              { id: 'a', text: '1 år', isCorrect: false },
              { id: 'b', text: '2 år', isCorrect: true },
              { id: 'c', text: '5 år', isCorrect: false },
              { id: 'd', text: '10 år', isCorrect: false },
            ],
            solution: 'En tariffavtale gjelder vanligvis for en periode på 2 år. Etter dette må partene forhandle om en ny avtale.',
          },
          {
            id: 'samfunnskunnskap-3-3-n-quiz1-q2',
            task: 'Hva er et lavlønnstillegg?',
            options: [
              { id: 'a', text: 'Et tillegg alle ansatte får uansett lønnsnivå', isCorrect: false },
              { id: 'b', text: 'Et ekstra tillegg til de med lavest lønn', isCorrect: true },
              { id: 'c', text: 'Et tillegg som kun gjelder for deltidsansatte', isCorrect: false },
              { id: 'd', text: 'Et tillegg som erstatter overtidsbetaling', isCorrect: false },
            ],
            solution: 'Et lavlønnstillegg er et ekstra lønnstillegg som gis til de med lavest lønn i lønnsoppgjøret. Det bidrar til å utjevne lønnsforskjeller.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-3-n-section2',
      type: 'text',
      content: `## Når forhandlingene bryter sammen -- streik og lockout

Hva skjer når partene ikke blir enige? La oss følge et tenkt lønnsoppgjør. LO krever 5 prosent lønnsvekst. NHO tilbyr 3 prosent. Begge parter har gjort hjemmeleksen sin: LO har kartlagt medlemmenes krav, NHO har vurdert bedriftenes betalingsevne, og Teknisk beregningsutvalg har laget et faktagrunnlag som begge parter kan forholde seg til.

Partene møtes og presenterer kravene sine. De utveksler argumenter og prøver å finne en løsning. Men noen ganger bryter forhandlingene sammen. Da kobles Riksmekleren inn -- en uavhengig instans som mekler mellom partene for å unngå konflikt. Partene møtes hos mekleren, og det legges press på for å finne et kompromiss.

Men hva om heller ikke meklingen lykkes? Da kan det bli arbeidskamp. Mens en tariffavtale gjelder, har vi noe som kalles fredsplikt: arbeidstakere kan ikke streike, og arbeidsgivere kan ikke lockout. Men når avtalen er utløpt og mekling ikke har ført frem, blir disse virkemidlene lovlige.

Streik er arbeidsnedleggelse -- arbeidstakerne nekter å jobbe for å presse frem bedre vilkår. Det er arbeidstakernes sterkeste våpen. Lockout er motparten: arbeidsgiveren stenger arbeidstakerne ute fra arbeid for å presse dem til å akseptere arbeidsgiverens tilbud.

I tillegg finnes det sympatistreik, der arbeidstakere i andre bransjer streiker i solidaritet med de som allerede streiker, og politisk streik, som er en kort streik for å markere et politisk standpunkt -- den handler ikke om egne lønnsvilkår.

I sjeldne tilfeller, når en streik truer liv, helse eller viktige samfunnsfunksjoner, kan staten gripe inn med tvungen lønnsnemnd. Da tvinges partene til å godta en løsning fastsatt av en nemnd. Dette virkemiddelet brukes sjelden og er kontroversielt.

I praksis ender de fleste oppgjør med et kompromiss -- kanskje 4 prosent lønnsvekst i vårt eksempel. Frontfagsmodellen bidrar til at oppgjøret forblir økonomisk ansvarlig.`,
    },
    {
      id: 'samfunnskunnskap-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-3-n-quiz2-q0',
            task: 'Hva betyr fredsplikt?',
            options: [
              { id: 'a', text: 'At Norge ikke kan delta i krig mens lønnsoppgjøret pågår', isCorrect: false },
              { id: 'b', text: 'At det er forbudt med streik og lockout mens tariffavtalen gjelder', isCorrect: true },
              { id: 'c', text: 'At politiet må beskytte arbeidsplassen under en streik', isCorrect: false },
              { id: 'd', text: 'At alle arbeidstakere må jobbe overtid under lønnsoppgjøret', isCorrect: false },
            ],
            solution: 'Fredsplikt betyr at det er forbudt å streike eller bruke lockout mens en tariffavtale gjelder. Konflikter i denne perioden må løses gjennom forhandling eller mekling.',
          },
          {
            id: 'samfunnskunnskap-3-3-n-quiz2-q1',
            task: 'Hva er forskjellen mellom streik og lockout?',
            options: [
              { id: 'a', text: 'Streik er lovlig, lockout er ulovlig', isCorrect: false },
              { id: 'b', text: 'Streik er arbeidstakernes virkemiddel, lockout er arbeidsgiverens', isCorrect: true },
              { id: 'c', text: 'Streik varer lenger enn lockout', isCorrect: false },
              { id: 'd', text: 'Streik gjelder bare offentlig sektor, lockout bare privat', isCorrect: false },
            ],
            solution: 'Streik er arbeidstakernes virkemiddel -- de nekter å jobbe. Lockout er arbeidsgiverens virkemiddel -- arbeidstakerne stenges ute fra arbeid. Begge er lovlige virkemidler når tariffavtalen er utløpt og mekling ikke har ført frem.',
          },
          {
            id: 'samfunnskunnskap-3-3-n-quiz2-q2',
            task: 'Hvem er Riksmekleren?',
            options: [
              { id: 'a', text: 'Lederen for LO', isCorrect: false },
              { id: 'b', text: 'Statsministeren i sin rolle under lønnsoppgjør', isCorrect: false },
              { id: 'c', text: 'En uavhengig instans som mekler mellom partene for å unngå arbeidskonflikt', isCorrect: true },
              { id: 'd', text: 'En dommer i Arbeidsretten', isCorrect: false },
            ],
            solution: 'Riksmekleren er en uavhengig instans som mekler mellom arbeidstaker- og arbeidsgiverorganisasjonene når forhandlingene bryter sammen. Formålet er å unngå streik eller lockout ved å hjelpe partene til å finne et kompromiss.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært at lønn fastsettes gjennom tariffavtaler, individuelle forhandlinger og markedsmekanismer, og at faktorer som utdanning, erfaring, bransje og organisasjonsgrad påvirker lønnsnivået. Frontfagsmodellen sikrer at den konkurranseutsatte industrien forhandler først og setter rammen for andre sektorer, slik at lønnsveksten er bærekraftig. Når forhandlingene bryter sammen, kan det bli streik (arbeidstakernes virkemiddel) eller lockout (arbeidsgiverens virkemiddel), men først etter at mekling hos Riksmekleren er forsøkt. Norge har relativt lave lønnsforskjeller som følge av den norske arbeidslivsmodellen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4 NARRATIV: Kjønn og arbeidsliv
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_3_4_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-3-4-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.4',
  title: 'Kjønn og arbeidsliv',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om kjønnsforskjeller i arbeidslivet, ulike forklaringer og debatter om tiltak.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte kjønnsforskjeller i norsk arbeidsliv',
    'reflektere over ulike forklaringer på kjønnsmønstre i arbeidsmarkedet',
  ],
  linkedChapterId: 'samfunnskunnskap-3-4',
  content: [
    {
      id: 'samfunnskunnskap-3-4-n-intro',
      type: 'text',
      content: `## Likestillingens uferdige prosjekt

Norge regnes som et av verdens mest likestilte land. Vi har høy yrkesdeltakelse blant begge kjønn, lovfestet likestilling og en rekke tiltak for å fremme likestilling i arbeidslivet. Men se litt nærmere, og du oppdager at kjønnsforskjellene fortsatt er tydelige. Kvinner dominerer i offentlig sektor, menn i privat. Kvinner dominerer i helse- og omsorgsyrker, menn i tekniske yrker. Flere kvinner enn menn jobber deltid, og flere menn enn kvinner sitter i toppledelsen.

Hva forklarer disse forskjellene? Og er de et problem som krever tiltak, eller reflekterer de frie valg? Det er her debatten begynner, og den har ingen enkle svar. Noen mener forskjellene reflekterer diskriminering og ulike maktstrukturer. Andre mener de reflekterer frie valg basert på ulike preferanser. De fleste mener sannheten ligger et sted i mellom.

La oss se nærmere på hva som faktisk skjer i det norske arbeidsmarkedet.`,
    },
    {
      id: 'samfunnskunnskap-3-4-n-section1',
      type: 'text',
      content: `## Horisontal og vertikal kjønnsdeling

Forskerne snakker om to typer kjønnsdeling i arbeidsmarkedet. Den første kalles horisontal kjønnsdeling, og den handler om at kvinner og menn jobber i ulike yrker og bransjer. Kvinnedominerte yrker inkluderer helse, omsorg, undervisning og barnehage. Mannsdominerte yrker inkluderer bygg, teknologi, ingeniørfag og IT. Denne delingen er overraskende stabil over tid, selv om det finnes unntak og gradvise endringer.

Hva forklarer den horisontale kjønnsdelingen? Her finnes det ulike perspektiver. Valgperspektivet legger vekt på at menn og kvinner i gjennomsnitt har ulike interesser og preferanser, og at de velger yrker deretter. Biologiske og psykologiske forskjeller kan spille inn -- for eksempel viser forskning at kvinner i gjennomsnitt scorer høyere på interesse for mennesker, mens menn i gjennomsnitt scorer høyere på interesse for ting og systemer. Strukturperspektivet legger vekt på at samfunnets forventninger og sosialisering styrer valgene: jenter oppmuntres til omsorgsorienterte yrker, gutter til tekniske yrker, og diskriminering kan forekomme. Kombinasjonsperspektivet -- som de fleste forskere heller mot -- sier at både biologi, preferanser og sosiale forhold spiller inn samtidig.

Den andre typen kalles vertikal kjønnsdeling, og den handler om at flere menn enn kvinner har lederstillinger. Noen mener dette skyldes et usynlig «glasstak» som hindrer kvinner i å nå toppen -- barrierer som er vanskelige å se, men som likevel er der. Andre peker på at kvinner oftere prioriterer familietid fremfor karriere, og atter andre mener at menn og kvinner i gjennomsnitt har ulike karriereambisjoner.

Når det gjelder lønn, tjener kvinner i gjennomsnitt cirka 87 prosent av menns lønn. Men mesteparten av denne forskjellen forklares av yrkes- og stillingsvalg: kvinner velger oftere yrker med lavere lønn, jobber mer deltid, og menn jobber mer overtid og tar færre permisjoner. Det er debatt om den uforklarte resten skyldes diskriminering eller andre faktorer som forskjellige karriereprioriteringer.`,
    },
    {
      id: 'samfunnskunnskap-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-4-n-quiz1-q0',
            task: 'Hva er horisontal kjønnsdeling?',
            options: [
              { id: 'a', text: 'At kvinner og menn jobber i ulike yrker og bransjer', isCorrect: true },
              { id: 'b', text: 'At kvinner tjener mindre enn menn i samme stilling', isCorrect: false },
              { id: 'c', text: 'At flere menn enn kvinner har lederstillinger', isCorrect: false },
              { id: 'd', text: 'At kvinner oftere jobber deltid enn menn', isCorrect: false },
            ],
            solution: 'Horisontal kjønnsdeling betyr at kvinner og menn jobber i ulike yrker og bransjer. For eksempel dominerer kvinner i helse og omsorg, mens menn dominerer i bygg og teknologi.',
          },
          {
            id: 'samfunnskunnskap-3-4-n-quiz1-q1',
            task: 'Hva menes med vertikal kjønnsdeling?',
            options: [
              { id: 'a', text: 'At kvinner og menn jobber i ulike bransjer', isCorrect: false },
              { id: 'b', text: 'At flere menn enn kvinner har lederstillinger', isCorrect: true },
              { id: 'c', text: 'At menn og kvinner har ulik arbeidstid', isCorrect: false },
              { id: 'd', text: 'At kvinner og menn har ulik pensjonsalder', isCorrect: false },
            ],
            solution: 'Vertikal kjønnsdeling betyr at flere menn enn kvinner har lederstillinger. Det kalles også «glasstaket» -- usynlige barrierer som kan hindre kvinner i å nå toppstillinger.',
          },
          {
            id: 'samfunnskunnskap-3-4-n-quiz1-q2',
            task: 'Omtrent hvor mye tjener kvinner i gjennomsnitt sammenlignet med menn?',
            options: [
              { id: 'a', text: 'Ca. 95 prosent av menns lønn', isCorrect: false },
              { id: 'b', text: 'Ca. 87 prosent av menns lønn', isCorrect: true },
              { id: 'c', text: 'Ca. 75 prosent av menns lønn', isCorrect: false },
              { id: 'd', text: 'Like mye som menn', isCorrect: false },
            ],
            solution: 'Kvinner tjener i gjennomsnitt ca. 87 prosent av menns lønn. Mesteparten av denne forskjellen forklares av yrkes- og stillingsvalg, men det er debatt om den uforklarte resten skyldes diskriminering eller andre faktorer.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-4-n-section2',
      type: 'text',
      content: `## Likestillingstiltak -- hva gjøres og hva debatteres?

Norge har et omfattende lovverk for likestilling. Likestillings- og diskrimineringsloven forbyr diskriminering basert på kjønn, og aktivitets- og redegjørelsesplikten pålegger arbeidsgivere å rapportere om likestillingssituasjonen i sin virksomhet.

Permisjonsordningene er et viktig verktøy. Norske foreldre har rett til totalt 49 uker foreldrepermisjon med full lønnskompensasjon, eller 59 uker med redusert sats. Minst 15 uker er forbeholdt far (fedrekvoten), og minst 15 uker er forbeholdt mor (mødrekvoten). Resten kan deles fritt mellom foreldrene. Fedrekvoten ble innført for å øke fedres deltakelse i barneomsorgen, og argumentene for er at det fremmer likestilling i arbeidslivet. Argumentene mot er at den begrenser familiens frihet til å organisere seg selv, og at staten ikke bør bestemme hvordan familier fordeler permisjonen.

Et annet omdiskutert tiltak er kvotering. Styrekvotering i ASA-selskaper krever at minst 40 prosent av hvert kjønn er representert i styret. Kjønnspoeng ved opptak til studier gir det underrepresenterte kjønnet ekstra poeng. Argumentene for kvotering er at det bryter ned barrierer, sikrer mangfold og gir rollemodeller. Argumentene mot er at kvalifikasjoner bør telle mest, at kvotering kan oppfattes som urettferdig, og at det kan skape tvil om personen er der på grunn av kompetanse eller kjønn.

La oss ta et eksempel som viser hvordan likestillingsloven fungerer i praksis. Elin er 28 år og på jobbintervju. Arbeidsgiveren spør henne om hun planlegger å få barn snart. Dette spørsmålet er ulovlig -- arbeidsgivere har ikke lov til å spørre om graviditetsplaner, da det regnes som diskriminering basert på kjønn. Elin kan nekte å svare, si at spørsmålet ikke er relevant for jobben, og klage til Diskrimineringsnemnda dersom hun ikke får jobben. Graviditet skal aldri påvirke en ansettelse.

Den politiske debatten om likestilling i arbeidslivet følger velkjente linjer: venstresiden vektlegger strukturelle barrierer og vil ha aktive tiltak som kvotering, mens høyresiden vektlegger frie valg og er mer skeptisk til statlig inngripen. Mange mener sannheten ligger et sted i mellom.`,
    },
    {
      id: 'samfunnskunnskap-3-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-4-n-quiz2-q0',
            task: 'Hva er fedrekvoten?',
            options: [
              { id: 'a', text: 'All foreldrepermisjon som faren kan ta ut', isCorrect: false },
              { id: 'b', text: 'En del av foreldrepermisjonen som er forbeholdt far -- minst 15 uker', isCorrect: true },
              { id: 'c', text: 'Farens rett til å jobbe deltid det første året etter fødsel', isCorrect: false },
              { id: 'd', text: 'En kvote som gir fedre ekstra lønn under permisjon', isCorrect: false },
            ],
            solution: 'Fedrekvoten er en del av foreldrepermisjonen som er forbeholdt far -- minst 15 uker. Hvis far ikke tar den ut, faller disse ukene bort. Formålet er å øke fedres deltakelse i barneomsorgen.',
          },
          {
            id: 'samfunnskunnskap-3-4-n-quiz2-q1',
            task: 'Hva er styrekvotering i ASA-selskaper?',
            options: [
              { id: 'a', text: 'Krav om at minst 50 prosent av styret er kvinner', isCorrect: false },
              { id: 'b', text: 'Krav om at minst 40 prosent av hvert kjønn er representert i styret', isCorrect: true },
              { id: 'c', text: 'En frivillig anbefaling om kjønnsbalanse', isCorrect: false },
              { id: 'd', text: 'Et krav som gjelder alle norske bedrifter', isCorrect: false },
            ],
            solution: 'Styrekvotering i ASA-selskaper krever at minst 40 prosent av hvert kjønn er representert i styret. Det gjelder altså begge kjønn og kun for allmennaksjeselskaper (ASA).',
          },
          {
            id: 'samfunnskunnskap-3-4-n-quiz2-q2',
            task: 'Har en arbeidsgiver lov til å spørre om graviditetsplaner på jobbintervju?',
            options: [
              { id: 'a', text: 'Ja, det er helt lovlig', isCorrect: false },
              { id: 'b', text: 'Ja, men bare for stillinger med mye reising', isCorrect: false },
              { id: 'c', text: 'Nei, det er forbudt og regnes som diskriminering', isCorrect: true },
              { id: 'd', text: 'Ja, men bare hvis stillingsannonsene nevner det', isCorrect: false },
            ],
            solution: 'Nei, å spørre om graviditetsplaner på jobbintervju er ulovlig. Det regnes som diskriminering basert på kjønn og er i strid med likestillings- og diskrimineringsloven.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at det norske arbeidsmarkedet fortsatt preges av kjønnsdeling: horisontal kjønnsdeling (kvinner og menn i ulike yrker) og vertikal kjønnsdeling (flere menn i ledelse). Kvinner tjener i gjennomsnitt cirka 87 prosent av menns lønn, hovedsakelig forklart av yrkes- og stillingsvalg. Det finnes ulike forklaringer -- valgperspektivet, strukturperspektivet og kombinasjonsperspektivet -- som gir forskjellige svar på hvorfor mønstrene oppstår. Tiltak som fedrekvote, styrekvotering og aktivitets- og redegjørelsesplikt debatteres politisk, med uenighet om hvor mye som er frie valg versus strukturelle barrierer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5 NARRATIV: Arbeidsledighet og Nav
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_3_5_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-3-5-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.5',
  title: 'Arbeidsledighet og Nav',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om arbeidsledighet, dens årsaker og konsekvenser, og hvordan Nav fungerer som sikkerhetsnett.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte årsaker til og konsekvenser av arbeidsledighet',
    'reflektere over velferdsstatens rolle i å sikre arbeidsledige',
  ],
  linkedChapterId: 'samfunnskunnskap-3-5',
  content: [
    {
      id: 'samfunnskunnskap-3-5-n-intro',
      type: 'text',
      content: `## Når jobben forsvinner

Tenk deg at du våkner en morgen til nyheten om at bedriften du jobber i legger ned. Kanskje har du jobbet der i 20 år. Plutselig er hverdagsrutinen borte, inntekten stoppes, og kollegaene du har delt lunsj med i årevis forsvinner i hver sin retning. Hva gjør du?

Arbeidsledighet betyr at noen ønsker å jobbe, men ikke finner arbeid. Det høres enkelt ut, men konsekvensene er alt annet enn enkle. For individet betyr det tap av inntekt og økonomisk usikkerhet. Men det handler om mye mer enn penger. Jobben gir identitet, og når den forsvinner, kan du føle at du mister en del av deg selv. Det sosiale nettverket på jobben forsvinner. Strukturen i hverdagen rakner. Forskning viser at arbeidsledige har økt risiko for psykiske problemer som depresjon og angst.

For samfunnet er arbeidsledighet også kostbart. Arbeidskraft som ikke brukes, er produksjon som går tapt. Skatteinntektene synker, mens utgiftene til trygd og stønad øker. Høy arbeidsledighet kan true den sosiale stabiliteten.

Norge har historisk hatt lav arbeidsledighet sammenlignet med mange andre land -- rundt 3 til 4 prosent i normalår. Men ledigheten varierer med konjunkturene og er høyere blant unge og innvandrere. Det finnes også regionale forskjeller, der noen deler av landet er mer utsatt enn andre.

Nav er den viktigste institusjonen for å hjelpe arbeidsledige. Men for å forstå systemet, må vi først forstå de ulike typene arbeidsledighet.`,
    },
    {
      id: 'samfunnskunnskap-3-5-n-section1',
      type: 'text',
      content: `## Ulike typer arbeidsledighet

Arbeidsledighet er ikke bare arbeidsledighet. Den kommer i flere varianter, og hver type krever ulike tiltak.

Konjunkturledighet skyldes nedgangstider i økonomien. Når etterspørselen etter varer og tjenester faller, trenger bedriftene færre ansatte og sier opp folk. Denne typen ledighet er gjerne midlertidig: når økonomien snur, ansettes folk igjen.

Strukturell ledighet er mer utfordrende. Den skyldes varige endringer i næringsstrukturen. Kanskje forsvinner en hel bransje fordi teknologien gjør den overflødig. Jobber som fantes i går, finnes ikke i morgen. De som rammes, må ofte omskolere seg for å finne nytt arbeid. Tenk for eksempel på regnskapsførere som mister jobben fordi programvare automatiserer arbeidet deres.

Friksjonsledighet er den mest ufarlige typen. Den oppstår når folk er mellom jobber -- de har sluttet i én stilling og er på vei inn i en annen. Eller de har nettopp fullført utdanning og søker sin første jobb. En viss grad av friksjonsledighet er helt naturlig og uunngåelig i en velfungerende økonomi.

Sesongledighet varierer med årstidene. Noen bransjer har høysesong om sommeren og lite aktivitet om vinteren, som turisme og jordbruk. Andre har motsatt mønster.

Den mest alvorlige formen er langtidsledighet -- arbeidsledighet som varer over ett år. Den er særlig skadelig fordi kompetansen kan forvitre over tid: du mister kontakt med faget ditt, teknologien utvikler seg uten deg, og det blir stadig vanskeligere å komme tilbake. Selvtilliten synker, og arbeidsgivere kan bli skeptiske til å ansette noen som har vært uten jobb lenge.

Til slutt har vi skjult ledighet -- mennesker som har gitt opp å søke jobb, som er på tiltak eller trygd, men som egentlig kunne ha jobbet. Disse dukker ikke opp i den offisielle arbeidsledighetsstatistikken, noe som betyr at den reelle ledigheten kan være høyere enn tallene viser.`,
    },
    {
      id: 'samfunnskunnskap-3-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-5-n-quiz1-q0',
            task: 'Hva er konjunkturledighet?',
            options: [
              { id: 'a', text: 'Ledighet som skyldes at folk skifter jobb', isCorrect: false },
              { id: 'b', text: 'Ledighet som skyldes nedgangstider i økonomien', isCorrect: true },
              { id: 'c', text: 'Ledighet som varierer med årstidene', isCorrect: false },
              { id: 'd', text: 'Ledighet som skyldes at en hel bransje forsvinner', isCorrect: false },
            ],
            solution: 'Konjunkturledighet skyldes nedgangstider i økonomien. Når etterspørselen faller, trenger bedrifter færre ansatte. Den er gjerne midlertidig og avhenger av konjunktursyklusen.',
          },
          {
            id: 'samfunnskunnskap-3-5-n-quiz1-q1',
            task: 'Hva skiller strukturell ledighet fra konjunkturledighet?',
            options: [
              { id: 'a', text: 'Strukturell ledighet varer bare noen uker', isCorrect: false },
              { id: 'b', text: 'Strukturell ledighet skyldes varige endringer i næringsstrukturen og krever ofte omskolering', isCorrect: true },
              { id: 'c', text: 'Strukturell ledighet rammer bare unge mennesker', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false },
            ],
            solution: 'Strukturell ledighet skyldes varige endringer i næringsstrukturen, for eksempel at teknologi erstatter jobber permanent. Den krever ofte omskolering, mens konjunkturledighet er midlertidig og følger svingninger i økonomien.',
          },
          {
            id: 'samfunnskunnskap-3-5-n-quiz1-q2',
            task: 'Hvorfor er langtidsledighet spesielt problematisk?',
            options: [
              { id: 'a', text: 'Fordi man mister dagpengene etter to uker', isCorrect: false },
              { id: 'b', text: 'Fordi man automatisk mister boligen sin', isCorrect: false },
              { id: 'c', text: 'Fordi kompetansen kan forvitre og det blir vanskeligere å komme tilbake i jobb', isCorrect: true },
              { id: 'd', text: 'Fordi man mister stemmeretten', isCorrect: false },
            ],
            solution: 'Langtidsledighet (over ett år) er spesielt problematisk fordi kompetansen kan forvitre, selvtilliten synker, arbeidsgivere kan bli skeptiske, og det blir en ond sirkel der det stadig blir vanskeligere å komme tilbake i jobb.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-5-n-section2',
      type: 'text',
      content: `## Nav -- sikkerhetsnettet

Når du mister jobben, er Nav -- Arbeids- og velferdsforvaltningen -- det viktigste sikkerhetsnettet. Nav forvalter arbeidsformidling, trygdeytelser og sosiale tjenester. La oss se på hva de kan tilby.

Det mest kjente tilbudet er dagpenger -- økonomisk støtte ved arbeidsledighet. Men det stilles krav for å få dagpenger. Du må ha hatt tilstrekkelig inntekt, noe som betyr minst 1,5 ganger grunnbeløpet (G) det siste året eller 3 G de siste tre årene. Du må være registrert som arbeidssøker hos Nav, aktivt søke jobb, være villig til å ta passende arbeid, og ha mistet minst 50 prosent av arbeidstiden din.

Hvor mye får du? Dagpengene utgjør cirka 62,4 prosent av din tidligere inntekt, opp til et tak på 6 G. De varer i maks 104 uker, altså to år. Hvis du jobber deltid mens du er arbeidsledig, kan du få graderte dagpenger.

Men Nav tilbyr mer enn bare penger. La oss følge Jonas, 45 år, som mister jobben som regnskapsfører fordi bedriften hans automatiserer flere oppgaver. Han har jobbet der i 20 år og er rammet av strukturell ledighet.

Første steg for Jonas er å melde seg som arbeidssøker hos Nav og søke dagpenger. Han registrerer CVen sin og begynner å søke jobber aktivt. Nav tilbyr ham veiledning og oppfølging, jobbsøkerkurs og kartlegging av kompetansen hans. Tiltak som kan være aktuelle inkluderer opplæring og kurs, lønnstilskudd der arbeidsgiver får støtte for å ansette ham, arbeidspraksis i en ny bransje, eller full omskolering.

For Jonas er det håp. Mange regnskapsoppgaver finnes fortsatt, og han kan spesialisere seg på rådgivning og komplekse oppgaver som kunstig intelligens ikke kan gjøre. Han kan omskolere seg til et tilgrensende felt, og erfaringen hans er verdifull selv om teknologien endres.

I tillegg til dagpenger finnes det andre Nav-ytelser: arbeidsavklaringspenger (AAP) for personer med nedsatt arbeidsevne, uføretrygd for de som varig ikke kan jobbe, og sosialhjelp som det siste sikkerhetsnettet for de som ikke kvalifiserer for andre ytelser.`,
    },
    {
      id: 'samfunnskunnskap-3-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-5-n-quiz2-q0',
            task: 'Omtrent hvor stor andel av tidligere inntekt utgjør dagpengene?',
            options: [
              { id: 'a', text: 'Ca. 50 prosent', isCorrect: false },
              { id: 'b', text: 'Ca. 62,4 prosent', isCorrect: true },
              { id: 'c', text: 'Ca. 80 prosent', isCorrect: false },
              { id: 'd', text: '100 prosent', isCorrect: false },
            ],
            solution: 'Dagpengene utgjør ca. 62,4 prosent av tidligere inntekt, opp til et tak på 6 G. De kan mottas i maks 104 uker (2 år).',
          },
          {
            id: 'samfunnskunnskap-3-5-n-quiz2-q1',
            task: 'Hva er et krav for å motta dagpenger fra Nav?',
            options: [
              { id: 'a', text: 'Du må ha vært ansatt i minst 10 år', isCorrect: false },
              { id: 'b', text: 'Du må være registrert som arbeidssøker og aktivt søke jobb', isCorrect: true },
              { id: 'c', text: 'Du må ha mistet 100 prosent av arbeidstiden', isCorrect: false },
              { id: 'd', text: 'Du må være medlem av en fagforening', isCorrect: false },
            ],
            solution: 'For å få dagpenger må du blant annet være registrert som arbeidssøker hos Nav, aktivt søke jobb, være villig til å ta passende arbeid, og ha hatt tilstrekkelig inntekt (minst 1,5 G siste år eller 3 G siste 3 år).',
          },
          {
            id: 'samfunnskunnskap-3-5-n-quiz2-q2',
            task: 'Hva er Nav?',
            options: [
              { id: 'a', text: 'En privat arbeidsgiver som ansetter arbeidsledige', isCorrect: false },
              { id: 'b', text: 'Arbeids- og velferdsforvaltningen som forvalter arbeidsformidling og trygdeytelser', isCorrect: true },
              { id: 'c', text: 'En fagforening for offentlig ansatte', isCorrect: false },
              { id: 'd', text: 'En avdeling under Arbeidstilsynet', isCorrect: false },
            ],
            solution: 'Nav (Arbeids- og velferdsforvaltningen) forvalter arbeidsformidling, trygdeytelser og sosiale tjenester. Det er det viktigste sikkerhetsnettet for arbeidsledige i Norge.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært at arbeidsledighet betyr at noen ønsker å jobbe men ikke finner arbeid, og at det rammer både individ og samfunn gjennom tap av inntekt, identitet, sosial tilhørighet og produksjon. Vi har sett at det finnes ulike typer ledighet: konjunkturledighet (midlertidig, følger økonomiske svingninger), strukturell ledighet (varig, krever omskolering), friksjonsledighet (naturlig, mellom jobber), sesongledighet (følger årstidene) og den alvorlige langtidsledigheten. Nav er Norges arbeids- og velferdsforvaltning, som tilbyr dagpenger (ca. 62,4 prosent av tidligere inntekt i inntil 2 år), arbeidsformidling, veiledning og tiltak for å hjelpe arbeidsledige tilbake i jobb.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.6 NARRATIV: Fremtidens arbeidsliv
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_3_6_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-3-6-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.6',
  title: 'Fremtidens arbeidsliv',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om hvordan teknologi, globalisering og nye arbeidsformer endrer arbeidslivet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte hvordan arbeidslivet endres av teknologi og globalisering',
    'reflektere over kompetansebehov i fremtidens arbeidsliv',
  ],
  linkedChapterId: 'samfunnskunnskap-3-6',
  content: [
    {
      id: 'samfunnskunnskap-3-6-n-intro',
      type: 'text',
      content: `## En verden i rask endring

Verden du skal jobbe i om ti eller tjue år, vil se helt annerledes ut enn dagens arbeidsliv. Arbeidsplasser transformeres, yrker oppstår og forsvinner, og måten vi jobber på endrer seg fundamentalt. For deg som snart skal inn i arbeidslivet, er det viktig å forstå disse endringene -- ikke for å bli skremt, men for å være forberedt.

Hva er det som driver endringene? Det er flere drivkrefter som virker samtidig. Digitalisering og automatisering gjør at maskiner og programvare tar over oppgaver som mennesker tidligere utførte. Kunstig intelligens (KI) -- datamaskiner som kan lære, resonnere og ta beslutninger -- utfordrer ikke bare manuelle jobber, men også kunnskapsarbeid. Globalisering og internasjonal konkurranse gjør at bedrifter konkurrerer på tvers av landegrenser. Grønn omstilling krever at vi endrer måten vi produserer og arbeider på for å redde klimaet. Demografiske endringer, som eldrebølgen, betyr at vi trenger flere folk i helse og omsorg. Og forventningene til arbeid endrer seg: yngre generasjoner ønsker mer fleksibilitet, mening og balanse mellom jobb og privatliv.

Midt i alt dette stiller vi oss noen store spørsmål: Hvilke jobber forsvinner? Hvilke nye jobber oppstår? Hvilken kompetanse trengs? Hvordan sikrer vi trygghet i et arbeidsliv som endres stadig raskere? Og vil den norske modellen -- med sterke fagforeninger, trepartssamarbeid og sterkt stillingsvern -- overleve disse endringene?`,
    },
    {
      id: 'samfunnskunnskap-3-6-n-section1',
      type: 'text',
      content: `## Roboter, KI og jobber som forsvinner (og oppstår)

La oss starte med det mange frykter mest: vil roboter og kunstig intelligens ta jobbene våre? Svaret er nyansert.

Automatisering -- at maskiner og programvare tar over oppgaver som tidligere ble gjort av mennesker -- er ikke noe nytt. Det har skjedd siden den industrielle revolusjonen. Men tempoet øker. Kunstig intelligens tar dette et steg videre: KI-systemer kan ikke bare gjenta forhåndsprogrammerte oppgaver, de kan lære av data, gjenkjenne mønstre og ta beslutninger. Dette betyr at også jobber som krever kunnskap og vurderingsevne, kan bli påvirket.

Hvilke jobber er mest utsatt? Generelt er rutinepreget arbeid mest sårbart -- både manuelt rutinearbeid som industriarbeid, og kognitivt rutinearbeid som enkle kontoroppgaver. Kundeservice erstattes delvis av chatbots. Deler av transport kan bli automatisert med selvkjørende kjøretøy. Analysearbeid som kan gjøres av algoritmer, er også utsatt.

Men det er viktig å se den andre siden av bildet. Mange jobber vil trolig bestå. Kreative yrker som krever originalitet og fantasi er vanskelige å automatisere. Kompleks problemløsning der du må tenke på tvers av fagfelt er fortsatt en menneskelig styrke. Menneskelig omsorg og kontakt -- å trøste en pasient, motivere en elev, bygge tillit med en klient -- er noe maskiner foreløpig ikke kan gjøre. Ledelse og samarbeid krever sosial intelligens som KI mangler. Håndverk og praktisk arbeid der ingen dag er lik, og yrker som krever fysisk tilstedeværelse, er også vanskelige å automatisere.

Og teknologien skaper nye jobber: IT-sikkerhet, dataanalyse, KI-utvikling, robotvedlikehold og grønn teknologi er alle voksende felt. Historien viser at nye teknologier alltid har skapt flere jobber enn de har fjernet -- men de nye jobbene krever gjerne annen kompetanse enn de gamle.

La oss ta Sofia som eksempel. Hun studerer jus og lurer på om KI vil ta over jobben hennes som advokat. KI kan allerede søke i store dokumentmengder, finne relevant rettspraksis, skrive utkast til standarddokumenter, analysere kontrakter og forutsi utfall av saker. Men KI kan foreløpig ikke forstå komplekse menneskelige situasjoner, gi råd tilpasset klientens livssituasjon, forhandle og bygge relasjoner, prosedere i rettssalen, ta etiske vurderinger eller utøve skjønn i vanskelige saker. Sofias jobb vil trolig endres -- rutineoppgaver automatiseres, og advokater får KI som verktøy -- men jobben som advokat forsvinner ikke. Tilpasningsevne er nøkkelen.`,
    },
    {
      id: 'samfunnskunnskap-3-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-6-n-quiz1-q0',
            task: 'Hvilke typer jobber er mest utsatt for automatisering?',
            options: [
              { id: 'a', text: 'Kreative yrker og lederstillinger', isCorrect: false },
              { id: 'b', text: 'Omsorgsyrker og håndverk', isCorrect: false },
              { id: 'c', text: 'Rutinepreget arbeid -- både manuelt og kognitivt', isCorrect: true },
              { id: 'd', text: 'Alle jobber er like utsatt', isCorrect: false },
            ],
            solution: 'Rutinepreget arbeid -- både manuelt (industriarbeid) og kognitivt (enkle kontoroppgaver) -- er mest utsatt for automatisering. Kreative yrker, omsorgsyrker og kompleks problemløsning er mindre utsatt.',
          },
          {
            id: 'samfunnskunnskap-3-6-n-quiz1-q1',
            task: 'Hva er en viktig drivkraft for endring i arbeidslivet?',
            options: [
              { id: 'a', text: 'Lavere folketall i Norge', isCorrect: false },
              { id: 'b', text: 'Digitalisering, kunstig intelligens og globalisering', isCorrect: true },
              { id: 'c', text: 'Mindre internasjonal handel', isCorrect: false },
              { id: 'd', text: 'Færre som tar høyere utdanning', isCorrect: false },
            ],
            solution: 'Viktige drivkrefter for endring i arbeidslivet er digitalisering og automatisering, kunstig intelligens, globalisering, grønn omstilling og demografiske endringer som eldrebølgen.',
          },
          {
            id: 'samfunnskunnskap-3-6-n-quiz1-q2',
            task: 'Hva viser historien om forholdet mellom teknologi og jobber?',
            options: [
              { id: 'a', text: 'Ny teknologi har alltid ført til massearbeidsledighet', isCorrect: false },
              { id: 'b', text: 'Teknologi har aldri hatt noen effekt på arbeidsmarkedet', isCorrect: false },
              { id: 'c', text: 'Nye teknologier har alltid skapt flere jobber enn de har fjernet, men med andre kompetansekrav', isCorrect: true },
              { id: 'd', text: 'Bare manuelle jobber har noen gang blitt påvirket av teknologi', isCorrect: false },
            ],
            solution: 'Historisk har nye teknologier skapt flere jobber enn de har fjernet, men de nye jobbene krever gjerne annen kompetanse enn de gamle. Tilpasningsevne og livslang læring blir derfor viktig.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-6-n-section2',
      type: 'text',
      content: `## Nye arbeidsformer -- fleksibilitet med bakside

Teknologien endrer ikke bare hvilke jobber som finnes, men også hvordan vi jobber. Nye arbeidsformer vokser frem, og de utfordrer det tradisjonelle forholdet mellom arbeidsgiver og arbeidstaker.

Gig-økonomien er kanskje det tydeligste eksempelet. Her jobber folk med korttidsoppdrag og frilansarbeid formidlet via plattformer som Uber, Foodora og Fiverr. Du er ikke fast ansatt noe sted -- du tar oppdrag når de dukker opp. Det gir stor fleksibilitet: du bestemmer selv når og hvor mye du jobber. Men baksiden er betydelig: arbeidsforholdene er usikre, du mangler rettigheter som sykepenger og pensjon, det er uklart hvem som er arbeidsgiveren din, inntekten er uforutsigbar, og sosial isolasjon kan bli et problem.

Pandemiårene akselererte en annen arbeidsform: hjemmekontor og hybrid arbeid. Millioner av mennesker oppdaget at mange jobber kan gjøres hjemmefra. For noen var dette en frigjøring -- slippe pendling, mer tid med familien. For andre var det en kilde til ensomhet og utvisking av grensen mellom jobb og fritid.

Plattformarbeid -- arbeid formidlet via digitale plattformer -- utfordrer den tradisjonelle arbeidsmodellen på et grunnleggende nivå. Er en Foodora-budsjåfør en ansatt med rettigheter, eller en selvstendig næringsdrivende som har valgt friheten selv? Norsk Høyesterett slo fast at Foodora-bud er arbeidstakere, men debatten pågår fortsatt i mange land. EU og Norge jobber med regulering for å sikre at plattformarbeidere får de rettighetene de trenger.

Alt dette peker mot en felles konklusjon: livslang læring blir viktigere enn noensinne. Du kan ikke lenger regne med at utdanningen du tar i 20-årene varer resten av karrieren. Du må være forberedt på å oppdatere kompetansen din gjennom hele arbeidslivet. Etter- og videreutdanning, kurs, sertifiseringer -- alt dette blir viktigere for å holde seg relevant i et arbeidsmarked som er i konstant endring.`,
    },
    {
      id: 'samfunnskunnskap-3-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-6-n-quiz2-q0',
            task: 'Hva er gig-økonomien?',
            options: [
              { id: 'a', text: 'En økonomi basert på musikkopptredener', isCorrect: false },
              { id: 'b', text: 'Korttidsoppdrag og frilansarbeid formidlet via digitale plattformer', isCorrect: true },
              { id: 'c', text: 'Et annet ord for offentlig sektor', isCorrect: false },
              { id: 'd', text: 'En økonomi der alle har fast jobb', isCorrect: false },
            ],
            solution: 'Gig-økonomien handler om korttidsoppdrag og frilansarbeid formidlet via plattformer som Uber, Foodora og Fiverr. Det gir fleksibilitet, men ofte på bekostning av jobbsikkerhet og rettigheter.',
          },
          {
            id: 'samfunnskunnskap-3-6-n-quiz2-q1',
            task: 'Hva slo norsk Høyesterett fast om Foodora-bud?',
            options: [
              { id: 'a', text: 'At de er selvstendig næringsdrivende', isCorrect: false },
              { id: 'b', text: 'At de er arbeidstakere med rettigheter', isCorrect: true },
              { id: 'c', text: 'At de er frivillige', isCorrect: false },
              { id: 'd', text: 'At de må starte eget firma', isCorrect: false },
            ],
            solution: 'Norsk Høyesterett slo fast at Foodora-bud er arbeidstakere, ikke selvstendig næringsdrivende. Dette betyr at de har krav på arbeidstakerrettigheter som sykepenger, pensjon og stillingsvern.',
          },
          {
            id: 'samfunnskunnskap-3-6-n-quiz2-q2',
            task: 'Hva menes med livslang læring?',
            options: [
              { id: 'a', text: 'At du må gå på skolen hele livet', isCorrect: false },
              { id: 'b', text: 'At du oppdaterer kompetansen din gjennom hele arbeidslivet', isCorrect: true },
              { id: 'c', text: 'At du må ta doktorgrad for å få jobb', isCorrect: false },
              { id: 'd', text: 'At arbeidsgiveren betaler all utdanning', isCorrect: false },
            ],
            solution: 'Livslang læring betyr å oppdatere kompetansen gjennom hele arbeidslivet, gjennom etter- og videreutdanning, kurs og sertifiseringer. Det er nødvendig fordi arbeidsmarkedet endrer seg stadig raskere.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at arbeidslivet endres av flere drivkrefter: digitalisering, kunstig intelligens, globalisering, grønn omstilling og demografiske endringer. Rutinepreget arbeid er mest utsatt for automatisering, mens kreative yrker, omsorgsyrker og håndverk trolig består. Nye arbeidsformer som gig-økonomi, hjemmekontor og plattformarbeid gir fleksibilitet, men utfordrer tradisjonelle arbeidsforhold med usikkerhet og manglende rettigheter. Livslang læring -- det å oppdatere kompetansen gjennom hele arbeidslivet -- blir stadig viktigere for å møte endringene. Jobber forsvinner sjelden helt -- de endres, og tilpasningsevne er nøkkelen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.7 NARRATIV: Svart arbeid og arbeidslivskriminalitet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_3_7_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-3-7-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.7',
  title: 'Svart arbeid og arbeidslivskriminalitet',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om hva svart arbeid og arbeidslivskriminalitet er, konsekvensene og hvordan det bekjempes.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte hva svart arbeid og arbeidslivskriminalitet er',
    'reflektere over konsekvensene for individ og samfunn',
  ],
  linkedChapterId: 'samfunnskunnskap-3-7',
  content: [
    {
      id: 'samfunnskunnskap-3-7-n-intro',
      type: 'text',
      content: `## Skyggesiden av arbeidslivet

Hittil i dette kapittelet har vi snakket om det seriøse, lovlydige arbeidslivet -- med tariffavtaler, rettigheter og trygge arbeidsforhold. Men det finnes en skyggeside. Svart arbeid og arbeidslivskriminalitet er et alvorlig samfunnsproblem som undergraver alt det vi har bygget opp.

Tenk på det slik: hver gang noen jobber svart, forsvinner skatteinntekter som kunne finansiert skoler, sykehus og veier. Arbeidstakere mister rettighetene sine. Useriøse bedrifter som slipper å betale skatt og avgifter kan underby seriøse bedrifter og vinne oppdrag de ikke burde ha. Sårbare arbeidstakere utnyttes. Og organisert kriminalitet får fotfeste.

Omfanget er betydelig. Svart arbeid i Norge anslås til mellom 40 og 100 milliarder kroner årlig. Det forekommer mest i bransjer som bygg, renhold, restaurant og transport, og det utføres av både norske og utenlandske arbeidstakere.

For å forstå problemet ordentlig, må vi skille mellom to ting: «vanlig» svart arbeid og den mer alvorlige arbeidslivskriminaliteten.`,
    },
    {
      id: 'samfunnskunnskap-3-7-n-section1',
      type: 'text',
      content: `## Svart arbeid -- fristende, men dumt

Hva er egentlig svart arbeid? Det er arbeid som utføres uten at inntekten oppgis til skattemyndighetene. Både den som jobber og den som betaler bryter loven. Det kan ta mange former: kontant betaling uten kvittering, å jobbe «ved siden av» trygd uten å melde fra, å ikke føre timer korrekt, eller betaling under bordet.

Hvorfor er det fristende? For arbeidstakeren betyr det mer penger direkte -- du slipper å betale skatt, og pengene havner i lommen din med en gang. For arbeidsgiveren betyr det lavere kostnader -- ingen arbeidsgiveravgift, ingen feriepenger, ingen pensjonsinnskudd. Og så er det det velkjente argumentet: «Alle andre gjør det jo.»

Men la oss se på hva du faktisk gir opp. Når du jobber svart, har du ingen rettigheter. Ingen sykepenger hvis du blir syk. Ingen feriepenger. Ingen pensjonsopptjening. Ingen forsikring hvis du skader deg på jobb. Du kan ikke klage på dårlige forhold -- for offisielt eksisterer ikke arbeidsforholdet. Du risikerer straff hvis du blir tatt. Og du ødelegger for fellesskapet: de skattepengene som mangler, er penger som ikke går til barnehager, skoler, helsetjenester og veier.

Det handler rett og slett om at det som ser ut som en god deal på kort sikt, er en dårlig deal på lang sikt -- både for deg og for samfunnet.`,
    },
    {
      id: 'samfunnskunnskap-3-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-7-n-quiz1-q0',
            task: 'Hva er svart arbeid?',
            options: [
              { id: 'a', text: 'Arbeid som utføres om natten', isCorrect: false },
              { id: 'b', text: 'Arbeid der inntekten ikke oppgis til skattemyndighetene', isCorrect: true },
              { id: 'c', text: 'Arbeid i gruver og tunneler', isCorrect: false },
              { id: 'd', text: 'Arbeid som er farlig for helsen', isCorrect: false },
            ],
            solution: 'Svart arbeid er arbeid der inntekten ikke oppgis til skattemyndighetene. Både den som jobber og den som betaler bryter loven.',
          },
          {
            id: 'samfunnskunnskap-3-7-n-quiz1-q1',
            task: 'Hva mister du når du jobber svart?',
            options: [
              { id: 'a', text: 'Bare litt lønn', isCorrect: false },
              { id: 'b', text: 'Ingenting -- det er bare fordeler', isCorrect: false },
              { id: 'c', text: 'Rettigheter som sykepenger, feriepenger, pensjon og forsikring', isCorrect: true },
              { id: 'd', text: 'Bare retten til overtidsbetaling', isCorrect: false },
            ],
            solution: 'Når du jobber svart mister du alle arbeidstakerrettigheter: sykepenger, feriepenger, pensjonsopptjening, forsikring ved skade, og muligheten til å klage på dårlige arbeidsforhold.',
          },
          {
            id: 'samfunnskunnskap-3-7-n-quiz1-q2',
            task: 'Omtrent hvor mye anslås svart arbeid i Norge til årlig?',
            options: [
              { id: 'a', text: '1-5 milliarder kroner', isCorrect: false },
              { id: 'b', text: '10-20 milliarder kroner', isCorrect: false },
              { id: 'c', text: '40-100 milliarder kroner', isCorrect: true },
              { id: 'd', text: 'Over 500 milliarder kroner', isCorrect: false },
            ],
            solution: 'Svart arbeid i Norge anslås til mellom 40 og 100 milliarder kroner årlig. Det forekommer mest i bransjer som bygg, renhold, restaurant og transport.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-7-n-section2',
      type: 'text',
      content: `## Arbeidslivskriminalitet -- organisert og ondsinnet

Mens «vanlig» svart arbeid kan handle om en enkeltperson som maler et hus mot kontant betaling, er arbeidslivskriminalitet noe langt mer alvorlig. Det er systematiske, organiserte kriminelle handlinger som gjøres i eller påvirker arbeidslivet.

Eksemplene er nedslående: systematisk skatteunndragelse i stor skala, menneskehandel og tvangsarbeid, grov utnytting av arbeidstakere, falske fakturaer og stråselskaper, trygdesvindel, ulovlig innkvartering og farlige arbeidsforhold som setter folks liv og helse i fare.

Hvem rammes? Særlig utenlandske arbeidstakere som kanskje ikke kjenner norske lover og rettigheter, sårbare grupper uten nettverk som kan hjelpe dem, og mennesker som frykter å miste jobben eller oppholdstillatelsen hvis de sier ifra. De er fanget i en situasjon der de føler de ikke har noe valg.

La oss ta et konkret eksempel. Et byggeselskap ansetter utenlandske arbeidere gjennom et bemanningsfirma. Arbeiderne bor trangt i en leilighet som arbeidsgiveren eier, har dårlig sikkerhetsutstyr og får langt under minstelønn. Her brytes loven på flere punkter: allmenngjorte tariffavtaler sikrer minstelønn i byggebransjen, og å betale under dette er ulovlig. Innkvarteringen kan være ulovlig utnytting. Manglende sikkerhetsutstyr bryter arbeidsmiljøloven. Og det kan ligge brudd på arbeidstidsregler og mangel på arbeidsavtale under det hele.

Ansvaret for å gripe inn ligger ikke bare hos arbeidsgiveren. Byggherren som bestiller arbeidet, hovedentreprenøren, bemanningsfirmaet og alle underleverandører i kjeden har et ansvar.

Konsekvensene for samfunnet er enorme: milliardtap i skatteinntekter, undergraving av velferdsordninger, konkurransevridning der seriøse bedrifter taper mot de kriminelle, og styrking av organisert kriminalitet.`,
    },
    {
      id: 'samfunnskunnskap-3-7-n-section3',
      type: 'text',
      content: `## Kampen mot arbeidslivskriminalitet

Heldigvis kjempes det tilbake. For å bekjempe svart arbeid og arbeidslivskriminalitet brukes en rekke virkemidler.

Arbeidstilsynet fører tilsyn med arbeidsplasser og kan gi bøter og pålegg. A-krimsentrene er tverrfaglige sentre der flere etater -- Arbeidstilsynet, skatteetaten, politiet, Nav og andre -- samarbeider for å avdekke og bekjempe arbeidslivskriminalitet. ID-kort på byggeplasser gjør det vanskeligere å bruke uregistrerte arbeidere. Allmenngjøring av tariffavtaler gjør at minstekravene i en tariffavtale gjelder for alle i en bransje, også uorganiserte -- dette motvirker sosial dumping, altså at utenlandske arbeidere tilbys lønn og vilkår langt under norsk standard.

Fagforeningene spiller også en viktig rolle i å varsle om og bekjempe arbeidslivskriminalitet. Informasjon til utenlandske arbeidere om rettighetene deres er avgjørende, for mange av dem vet rett og slett ikke hva de har krav på. Og holdningsskapende arbeid rettet mot befolkningen generelt bidrar til å redusere aksepten for svart arbeid.

Hva kan du gjøre? Du kan la være å kjøpe svarte tjenester. Du kan kreve kvittering og kontrakt. Du kan varsle Arbeidstilsynet hvis du oppdager ulovlige forhold. Og du kan forstå at svart arbeid ikke er en ufarlig snarveig -- det er noe som skader hele fellesskapet.`,
    },
    {
      id: 'samfunnskunnskap-3-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-3-7-n-quiz2-q0',
            task: 'Hva skiller arbeidslivskriminalitet fra vanlig svart arbeid?',
            options: [
              { id: 'a', text: 'Arbeidslivskriminalitet er lovlig, svart arbeid er ulovlig', isCorrect: false },
              { id: 'b', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'c', text: 'Arbeidslivskriminalitet er systematisk, organisert og mer alvorlig', isCorrect: true },
              { id: 'd', text: 'Svart arbeid er mer alvorlig enn arbeidslivskriminalitet', isCorrect: false },
            ],
            solution: 'Arbeidslivskriminalitet er systematisk og organisert kriminalitet -- menneskehandel, grov utnytting, falske selskaper, stor skala. Det er mer alvorlig enn enkelttilfeller av svart arbeid og ofte knyttet til organisert kriminalitet.',
          },
          {
            id: 'samfunnskunnskap-3-7-n-quiz2-q1',
            task: 'Hva er et A-krimsenter?',
            options: [
              { id: 'a', text: 'Et senter der arbeidsledige kan søke jobb', isCorrect: false },
              { id: 'b', text: 'Et tverrfaglig senter der flere etater samarbeider for å bekjempe arbeidslivskriminalitet', isCorrect: true },
              { id: 'c', text: 'Et opplæringssenter for utenlandske arbeidere', isCorrect: false },
              { id: 'd', text: 'Et senter der fagforeningene holder til', isCorrect: false },
            ],
            solution: 'A-krimsentre er tverrfaglige sentre der Arbeidstilsynet, skatteetaten, politiet, Nav og andre etater samarbeider for å avdekke og bekjempe arbeidslivskriminalitet.',
          },
          {
            id: 'samfunnskunnskap-3-7-n-quiz2-q2',
            task: 'Hva betyr allmenngjøring av tariffavtaler?',
            options: [
              { id: 'a', text: 'At alle nordmenn automatisk er fagorganisert', isCorrect: false },
              { id: 'b', text: 'At tariffavtalens minstekrav gjøres gjeldende for alle i en bransje, også uorganiserte', isCorrect: true },
              { id: 'c', text: 'At alle bedrifter må ha tariffavtale', isCorrect: false },
              { id: 'd', text: 'At lønningene i alle bransjer blir like', isCorrect: false },
            ],
            solution: 'Allmenngjøring betyr at minstekravene i en tariffavtale gjøres gjeldende for alle arbeidstakere i en bransje, uavhengig av om de er fagorganisert eller ikke. Det motvirker sosial dumping.',
          },
          {
            id: 'samfunnskunnskap-3-7-n-quiz2-q3',
            task: 'Hva er sosial dumping?',
            options: [
              { id: 'a', text: 'At folk dumper søppel på arbeidsplassen', isCorrect: false },
              { id: 'b', text: 'At prisen på varer dumpes i butikker', isCorrect: false },
              { id: 'c', text: 'At utenlandske arbeidere tilbys lønn og vilkår langt under norsk standard', isCorrect: true },
              { id: 'd', text: 'At bedrifter flytter produksjonen til utlandet', isCorrect: false },
            ],
            solution: 'Sosial dumping betyr at utenlandske arbeidere tilbys lønn og arbeidsvilkår som er langt under det som er norsk standard. Allmenngjøring av tariffavtaler er et viktig virkemiddel mot dette.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-3-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at svart arbeid -- arbeid der inntekten ikke oppgis til skattemyndighetene -- er ulovlig for begge parter og gir arbeidstakeren ingen rettigheter som sykepenger, feriepenger eller pensjon. Arbeidslivskriminalitet er langt mer alvorlig: systematisk og organisert kriminalitet som menneskehandel, grov utnytting og skatteunndragelse i stor skala, som ofte rammer sårbare utenlandske arbeidstakere. Konsekvensene er store: tap av milliarder i skatteinntekter, undergraving av velferdsordninger og utnytting av sårbare mennesker. Kampen mot arbeidslivskriminalitet føres gjennom styrket kontroll fra Arbeidstilsynet, tverrfaglige A-krimsentre, allmenngjøring av tariffavtaler som motvirker sosial dumping, og informasjon til utenlandske arbeidere om rettighetene deres.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLET EKSPORT
// ============================================================================

export const SAMFUNNSKUNNSKAP_NARRATIV_DEL3_CHAPTERS = [
  CHAPTER_SAMFUNNSKUNNSKAP_3_1_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_3_2_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_3_3_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_3_4_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_3_5_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_3_6_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_3_7_NARRATIV,
];
