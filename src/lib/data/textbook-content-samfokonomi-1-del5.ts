/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 1 (VG2 programfag) - Del 5: Arbeid og sysselsetting
 *
 * Dekker LK20-kompetansemål:
 * - reflektere over ulike sysselsettingstiltak og drøfte hvordan tiltakene kan påvirke ulike typer arbeidsledighet
 * - utforske lønnsforskjeller, inntektsfordeling og økonomisk ulikhet
 *
 * Kapittel 5.1–5.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Arbeidsmarkedet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_5_1: TextbookChapter = {
  id: 'samfokonomi-1-5-1',
  courseId: 'samfokonomi-1',
  chapterNumber: '5.1',
  title: 'Arbeidsmarkedet',
  description: 'Tilbud og etterspørsel etter arbeidskraft, lønnsdannelse og likevekt i arbeidsmarkedet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over ulike sysselsettingstiltak og drøfte hvordan tiltakene kan påvirke ulike typer arbeidsledighet',
    'utforske lønnsforskjeller, inntektsfordeling og økonomisk ulikhet',
  ],
  content: [
    {
      id: 'soe-5-1-intro',
      type: 'text',
      content: `# Arbeidsmarkedet

Arbeidsmarkedet er der arbeidstakere og arbeidsgivere møtes. Arbeidstakerne tilbyr sin arbeidskraft, mens arbeidsgiverne etterspør arbeidskraft for å produsere varer og tjenester. Hvordan dette markedet fungerer, har stor betydning for lønnsnivå, sysselsetting og velstand i samfunnet.

I Norge er arbeidsmarkedet kjennetegnet av et organisert samarbeid mellom partene i arbeidslivet. Likevel styres det også av de samme grunnleggende økonomiske kreftene som andre markeder: tilbud, etterspørsel og pris.`,
    },
    {
      id: 'soe-5-1-def-arbeidstilbud',
      type: 'definition',
      title: 'Tilbud av arbeidskraft',
      content: `**Tilbudet av arbeidskraft** er den totale mengden arbeid som arbeidstakere ønsker å tilby ved ulike lønnsnivåer. Tilbudet avhenger blant annet av:

- **Befolkningsstørrelse og alderssammensetning** – Flere personer i yrkesaktiv alder gir større tilbud.
- **Yrkesdeltakelse** – Hvor stor andel av befolkningen som velger å jobbe.
- **Utdanningsnivå** – Påvirker hvilke jobber folk kan ta.
- **Lønnsnivå** – Høyere lønn gjør det mer attraktivt å jobbe fremfor fritid.
- **Innvandring** – Arbeidsinnvandring øker tilbudet av arbeidskraft.`,
    },
    {
      id: 'soe-5-1-example-tilbud',
      type: 'example',
      title: 'Eksempel: Tilbudskurven for arbeidskraft',
      problem: 'Hvorfor heller tilbudskurven for arbeidskraft oppover mot høyre?',
      solution: `Tilbudskurven for arbeidskraft heller oppover fordi høyere lønn tiltrekker flere arbeidstakere. Ved lav lønn er det få som ønsker å jobbe i en bestemt næring. Når lønnen stiger, blir det mer attraktivt å jobbe fremfor å bruke tid på utdanning, fritid eller husarbeid.

**Eksempel:** I helsesektoren har man sett at høyere lønn for sykepleiere fører til at flere søker seg til sykepleierutdanningen, og at flere som har forlatt yrket, velger å komme tilbake.

Merk: Ved svært høye lønnsnivåer kan tilbudskurven bøye seg bakover, fordi folk velger mer fritid fremfor enda mer inntekt. Dette kalles «bakovervendt tilbudskurve».`,
    },
    {
      id: 'soe-5-1-def-ettersporsel',
      type: 'definition',
      title: 'Etterspørsel etter arbeidskraft',
      content: `**Etterspørselen etter arbeidskraft** er den totale mengden arbeid som bedrifter ønsker å kjøpe ved ulike lønnsnivåer. Etterspørselen avhenger av:

- **Produksjonsnivå** – Økt produksjon krever mer arbeidskraft.
- **Produktivitet** – Høyere produktivitet kan redusere behovet for arbeidskraft per enhet.
- **Lønnskostnader** – Lavere lønn gjør det billigere å ansette flere.
- **Teknologisk utvikling** – Automatisering kan erstatte arbeidskraft.
- **Etterspørsel etter varer og tjenester** – Avledet etterspørsel.

Etterspørselen etter arbeidskraft er en **avledet etterspørsel**: Bedrifter ansetter folk fordi de trenger arbeidskraften til å produsere noe som etterspørres i et annet marked.`,
    },
    {
      id: 'soe-5-1-example-avledet',
      type: 'example',
      title: 'Eksempel: Avledet etterspørsel',
      problem: 'Forklar begrepet avledet etterspørsel med et eksempel fra byggebransjen.',
      solution: `Etterspørselen etter tømrere er en avledet etterspørsel. Ingen etterspør tømrere «i seg selv» – det er etterspørselen etter nye boliger som skaper behovet for tømrere.

**Når boligetterspørselen øker:**
1. Flere boliger skal bygges
2. Entreprenører trenger flere tømrere
3. Etterspørselen etter tømrere øker
4. Lønnen for tømrere presses opp

**Når boligetterspørselen faller:**
1. Færre byggeprosjekter
2. Mindre behov for tømrere
3. Etterspørselen etter tømrere synker
4. Noen tømrere mister jobben

Slik ser vi at arbeidsmarkedet for tømrere er direkte koblet til boligmarkedet.`,
    },
    {
      id: 'soe-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med at etterspørselen etter arbeidskraft er «avledet»?',
        multipleChoiceOptions: [
          'At bedrifter etterspør arbeidskraft fordi de trenger den til å produsere varer og tjenester som etterspørres i et annet marked',
          'At etterspørselen kommer fra staten og ikke fra private bedrifter',
          'At arbeidstakerne bestemmer hvor mange som skal ansettes',
          'At etterspørselen er uavhengig av lønnsnivået',
        ],
        hints: ['Tenk på hvorfor en bedrift ansetter folk – hva trenger de arbeidskraften til?'],
        solution: 'Avledet etterspørsel betyr at bedrifter ikke etterspør arbeidskraft for arbeidskraftens egen skyld, men fordi de trenger den til å produsere varer og tjenester som kundene etterspør. Etterspørselen etter arbeidskraft er altså avledet fra etterspørselen etter bedriftens produkter.',
      },
    },
    {
      id: 'soe-5-1-def-likevekt',
      type: 'definition',
      title: 'Likevekt i arbeidsmarkedet',
      content: `**Likevekt i arbeidsmarkedet** oppstår der tilbudet av arbeidskraft er lik etterspørselen etter arbeidskraft. I likevekten bestemmes:

- **Likevektslønnen** – Den lønnen der antall jobber som tilbys er lik antall arbeidstakere som ønsker å jobbe.
- **Likevektssysselsettingen** – Antall personer som faktisk er i arbeid.

Hvis lønnen er **høyere** enn likevektslønnen, vil tilbudet av arbeidskraft overstige etterspørselen, og det oppstår **arbeidsledighet**.

Hvis lønnen er **lavere** enn likevektslønnen, vil etterspørselen etter arbeidskraft overstige tilbudet, og det oppstår **mangel på arbeidskraft**.`,
    },
    {
      id: 'soe-5-1-example-likevekt',
      type: 'example',
      title: 'Eksempel: Skift i arbeidsmarkedet',
      problem: 'Hva skjer i arbeidsmarkedet for IT-utviklere dersom digitaliseringen øker kraftig?',
      solution: `Økt digitalisering fører til at bedrifter trenger flere IT-utviklere:

1. **Etterspørselskurven skifter til høyre** – Bedrifter vil ansette flere IT-utviklere ved ethvert lønnsnivå.
2. **Lønnsnivået stiger** – Konkurranse om arbeidskraften presser lønningene oppover.
3. **Sysselsettingen øker** – Flere IT-utviklere ansettes.

**På lengre sikt:**
- Høyere lønn tiltrekker flere studenter til IT-utdanninger.
- Tilbudskurven skifter gradvis til høyre.
- Lønnen stabiliserer seg på et nytt, men noe høyere nivå.

Dette er et godt eksempel på hvordan markedskreftene styrer ressursallokeringen – høy etterspørsel gir høy lønn, som igjen styrer folk mot de yrkene samfunnet trenger mest.`,
    },
    {
      id: 'soe-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-5-1-ex-2',
        number: '5.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer i arbeidsmarkedet dersom lønnen er høyere enn likevektslønnen?',
        multipleChoiceOptions: [
          'Det blir overskudd av arbeidskraft – flere ønsker å jobbe enn det finnes jobber',
          'Det blir mangel på arbeidskraft – bedriftene finner ikke nok ansatte',
          'Ingenting – markedet er i balanse',
          'Produktiviteten til de ansatte øker automatisk',
        ],
        hints: ['Tenk på hva som skjer med tilbud og etterspørsel når prisen (lønnen) er over likevektsnivået.'],
        solution: 'Når lønnen er over likevektsnivået, vil flere ønske å jobbe (høyt tilbud), men færre bedrifter vil ansette (lav etterspørsel). Resultatet er overskudd av arbeidskraft, altså arbeidsledighet. Dette ligner på et vanlig marked der en pris over likevektsprisen gir overskuddstilbud.',
      },
    },
    {
      id: 'soe-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan arbeidsinnvandring påvirker tilbudet av arbeidskraft i et land. Bruk tilbuds- og etterspørselsmodellen til å drøfte mulige virkninger på lønnsnivå og sysselsetting.',
        hints: [
          'Tenk på hva som skjer med tilbudskurven når det kommer flere arbeidstakere inn i markedet.',
          'Vurder om virkningen kan være forskjellig i ulike bransjer.',
        ],
        solution: 'Arbeidsinnvandring øker tilbudet av arbeidskraft, noe som skifter tilbudskurven til høyre. I den enkle modellen fører dette til lavere likevektslønn og høyere sysselsetting. I praksis kan virkningen variere mellom bransjer: I sektorer der innvandrerne har etterspurt kompetanse, kan effekten på lønn være liten. I sektorer med mange ufaglærte jobber, kan lønnspresset bli større. Innvandring kan også øke etterspørselen etter varer og tjenester, som delvis motvirker lønnseffekten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-5-1-ex-4',
        number: '5.1.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende faktorer øker IKKE etterspørselen etter arbeidskraft direkte?',
        multipleChoiceOptions: [
          'Lengre fødselspermisjon for ansatte',
          'Økt etterspørsel etter bedriftens produkter',
          'Lavere lønnskostnader',
          'Høyere produktivitet per arbeider',
        ],
        hints: ['Etterspørselen etter arbeidskraft handler om bedriftens behov for å ansette folk.'],
        solution: 'Lengre fødselspermisjon påvirker ikke direkte bedriftens ønske om å ansette flere folk – det handler om arbeidsvilkår, ikke etterspørsel. Økt produktetterspørsel, lavere lønnskostnader og høyere produktivitet er derimot faktorer som direkte kan øke etterspørselen etter arbeidskraft.',
      },
    },
    {
      id: 'soe-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Automatisering og kunstig intelligens endrer arbeidsmarkedet. Drøft hvordan teknologisk utvikling kan påvirke etterspørselen etter arbeidskraft i ulike sektorer, og vurder om dette fører til permanent høyere arbeidsledighet eller om markedet tilpasser seg.',
        hints: [
          'Tenk på historiske eksempler der ny teknologi erstattet jobber – hva skjedde på lang sikt?',
          'Vurder om ny teknologi også kan skape nye typer jobber.',
        ],
        solution: 'Teknologisk utvikling reduserer etterspørselen etter arbeidskraft i enkelte sektorer (f.eks. industri, rutinearbeid), men skaper ny etterspørsel i andre (f.eks. IT, vedlikehold av roboter, kreative yrker). Historisk sett har arbeidsmarkedet tilpasset seg – den industrielle revolusjonen fjernet mange jobber, men skapte langt flere. Utfordringen er overgangsperioden: Arbeidstakere trenger omskolering, og tilpasningen tar tid. Sysselsettingstiltak som utdanning og kompetanseheving er derfor viktige for å lette overgangen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Arbeidsmarkedet

- **Tilbudet av arbeidskraft** avhenger av lønn, befolkning, yrkesdeltakelse og innvandring.
- **Etterspørselen etter arbeidskraft** er avledet – den avhenger av etterspørselen etter bedriftens produkter.
- **Likevekt** oppstår der tilbud er lik etterspørsel, og gir likevektslønn og likevektssysselsetting.
- Lønn over likevektsnivå gir arbeidsledighet; lønn under gir arbeidskraftmangel.
- Teknologisk utvikling og globalisering skaper stadig endringer i arbeidsmarkedet.`,
    },
    {
      id: 'soe-5-1-samle-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-1-samle-1',
        number: '5.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for hvordan tilbud og etterspørsel bestemmer lønn og sysselsetting i arbeidsmarkedet. Bruk et konkret eksempel fra norsk arbeidsliv til å illustrere hvordan skift i tilbud eller etterspørsel påvirker likevekten.',
        hints: [
          'Du kan for eksempel bruke helsesektoren, IT-bransjen eller byggebransjen som eksempel.',
          'Tegn gjerne en tilbuds- og etterspørselskurve for å illustrere.',
        ],
        solution: 'I arbeidsmarkedet bestemmes lønnen av samspillet mellom tilbudet av og etterspørselen etter arbeidskraft. Tilbudet heller oppover (høyere lønn tiltrekker flere arbeidstakere), mens etterspørselen heller nedover (lavere lønn gjør det billigere å ansette). Eksempel: Under oljeboomen økte etterspørselen etter ingeniører kraftig. Etterspørselskurven skiftet til høyre, og lønningene steg markant. Over tid tiltrakk de høye lønningene flere studenter til ingeniørutdanningene (tilbudet økte), og lønnsveksten avtok noe. Da oljeprisen falt i 2014, skiftet etterspørselskurven tilbake, og mange ingeniører mistet jobben.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Arbeidsledighet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_5_2: TextbookChapter = {
  id: 'samfokonomi-1-5-2',
  courseId: 'samfokonomi-1',
  chapterNumber: '5.2',
  title: 'Arbeidsledighet',
  description: 'Typer arbeidsledighet, naturlig arbeidsledighetsrate og måling av arbeidsledighet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over ulike sysselsettingstiltak og drøfte hvordan tiltakene kan påvirke ulike typer arbeidsledighet',
  ],
  content: [
    {
      id: 'soe-5-2-intro',
      type: 'text',
      content: `# Arbeidsledighet

Arbeidsledighet er et av de viktigste økonomiske problemene et samfunn kan ha. Når mennesker som ønsker å jobbe ikke finner arbeid, går samfunnet glipp av verdiskaping, og den enkelte opplever økonomisk usikkerhet og ofte redusert livskvalitet.

For å forstå arbeidsledighet må vi kjenne til de ulike typene og hva som forårsaker dem. Bare da kan vi finne riktige tiltak for å bekjempe problemet.`,
    },
    {
      id: 'soe-5-2-def-arbeidsledig',
      type: 'definition',
      title: 'Arbeidsledig',
      content: `En person regnes som **arbeidsledig** dersom vedkommende:
1. Er uten inntektsgivende arbeid
2. Har forsøkt å skaffe arbeid de siste fire ukene
3. Kan begynne i arbeid innen to uker

**Arbeidsstyrken** = sysselsatte + arbeidsledige

**Arbeidsledighetsraten** = (antall arbeidsledige / arbeidsstyrken) × 100 %

Merk: Personer som verken jobber eller aktivt søker jobb (studenter, pensjonister, hjemmeværende), regnes ikke som del av arbeidsstyrken og er derfor heller ikke arbeidsledige i statistisk forstand.`,
    },
    {
      id: 'soe-5-2-example-maaling',
      type: 'example',
      title: 'Eksempel: Beregning av arbeidsledighetsrate',
      problem: 'I et land har 2 500 000 personer jobb, mens 100 000 personer er arbeidsledige. Hva er arbeidsledighetsraten?',
      solution: `**Arbeidsstyrken** = sysselsatte + arbeidsledige = 2 500 000 + 100 000 = 2 600 000

**Arbeidsledighetsrate** = (100 000 / 2 600 000) × 100 % = **3,85 %**

Til sammenligning har Norge i de siste årene hatt en arbeidsledighetsrate på rundt 3–4 %, noe som er lavt i internasjonal sammenheng.`,
    },
    {
      id: 'soe-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En student på 20 år som studerer fulltid og ikke søker jobb, regnes som:',
        multipleChoiceOptions: [
          'Utenfor arbeidsstyrken – verken sysselsatt eller arbeidsledig',
          'Arbeidsledig – fordi vedkommende ikke har jobb',
          'Sysselsatt – fordi studier regnes som arbeid',
          'Skjult arbeidsledig – fordi studenten egentlig ville jobbet',
        ],
        hints: ['Husk definisjonen: Arbeidsledige er folk som aktivt søker jobb.'],
        solution: 'En fulltidsstudent som ikke aktivt søker jobb, regnes som utenfor arbeidsstyrken. Vedkommende er verken sysselsatt eller arbeidsledig. Arbeidsstyrken består kun av de som enten har jobb (sysselsatte) eller aktivt søker jobb (arbeidsledige).',
      },
    },
    {
      id: 'soe-5-2-def-friksjons',
      type: 'definition',
      title: 'Friksjonsledighet',
      content: `**Friksjonsledighet** oppstår fordi det tar tid å matche arbeidstakere med ledige jobber. Selv i en økonomi med full sysselsetting vil det alltid være noen som er mellom jobber.

**Kjennetegn:**
- Vanligvis kortvarig (noen uker til måneder)
- Skyldes informasjonsmangler – folk vet ikke om alle ledige jobber
- Skyldes geografisk og yrkesmessig mobilitet
- Er naturlig og uunngåelig i en dynamisk økonomi

**Eksempler:** En nyutdannet som søker sin første jobb, en person som har sagt opp for å finne en bedre jobb, eller en sesongarbeider mellom sesonger.`,
    },
    {
      id: 'soe-5-2-def-strukturell',
      type: 'definition',
      title: 'Strukturell arbeidsledighet',
      content: `**Strukturell arbeidsledighet** oppstår når det er et misforhold mellom arbeidstakernes kompetanse og det arbeidsmarkedet etterspør. Årsaker kan være:

- **Teknologisk endring** – Nye maskiner eller programvare erstatter arbeidskraft.
- **Globalisering** – Produksjon flyttes til lavkostland.
- **Endrede forbrukermønstre** – Bransjer som krymper.
- **Manglende utdanning** – Arbeidstakere har feil kompetanse.

**Kjennetegn:**
- Kan være langvarig
- Krever omskolering eller flytting
- Rammer bestemte yrkesgrupper og regioner hardt

**Eksempel:** Da verftsindustrien i Norge ble kraftig redusert på 1980-tallet, mistet mange sveisere og platearbeidere jobben. De hadde kompetanse som ikke lenger var etterspurt i like stor grad.`,
    },
    {
      id: 'soe-5-2-def-konjunktur',
      type: 'definition',
      title: 'Konjunkturell arbeidsledighet',
      content: `**Konjunkturell (syklisk) arbeidsledighet** skyldes svingninger i den samlede etterspørselen i økonomien. I nedgangstider faller etterspørselen etter varer og tjenester, noe som fører til at bedrifter reduserer produksjonen og sier opp ansatte.

**Kjennetegn:**
- Følger konjunktursyklusen – øker i lavkonjunktur, faller i høykonjunktur
- Rammer bredt på tvers av bransjer
- Kan motvirkes med finanspolitikk og pengepolitikk

**Eksempel:** Under finanskrisen i 2008–2009 falt etterspørselen kraftig i mange land, og arbeidsledigheten steg raskt. I Norge var økningen mer moderat takket være oljerikdom og aktiv motkonjunkturpolitikk.`,
    },
    {
      id: 'soe-5-2-example-typer',
      type: 'example',
      title: 'Eksempel: Hvilken type arbeidsledighet?',
      problem: 'Klassifiser følgende tilfeller: a) En butikkmedarbeider mister jobben fordi netthandel erstatter fysiske butikker. b) En person har sagt opp og bruker noen uker på å finne ny jobb. c) En fabrikk permitterer ansatte fordi ordrene faller under en lavkonjunktur.',
      solution: `**a) Strukturell arbeidsledighet.** Endringen fra fysisk handel til netthandel er en varig strukturendring som gjør at kompetansen til butikkmedarbeidere er mindre etterspurt. Vedkommende trenger sannsynligvis omskolering.

**b) Friksjonsledighet.** Personen er frivillig mellom jobber, og det tar tid å finne den rette stillingen. Dette er normalt og kortvarig.

**c) Konjunkturell arbeidsledighet.** Permitteringen skyldes et midlertidig fall i etterspørselen under en lavkonjunktur. Når konjunkturen snur, vil sannsynligvis arbeidsplassene komme tilbake.`,
    },
    {
      id: 'soe-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-5-2-ex-2',
        number: '5.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken type arbeidsledighet skyldes at arbeidstakernes kompetanse ikke matcher det arbeidsmarkedet etterspør?',
        multipleChoiceOptions: [
          'Strukturell arbeidsledighet',
          'Friksjonsledighet',
          'Konjunkturell arbeidsledighet',
          'Sesongarbeidsledighet',
        ],
        hints: ['Tenk på hva som skjer når en hel bransje endrer seg eller forsvinner.'],
        solution: 'Strukturell arbeidsledighet oppstår nettopp når det er et misforhold mellom arbeidstakernes kompetanse og det markedet etterspør. Teknologisk endring, globalisering og endrede forbrukermønstre er typiske årsaker. Denne typen arbeidsledighet er ofte langvarig og krever omskolering.',
      },
    },
    {
      id: 'soe-5-2-def-naturlig',
      type: 'definition',
      title: 'Naturlig arbeidsledighetsrate (NAIRU)',
      content: `**Naturlig arbeidsledighetsrate** (ofte kalt NAIRU – Non-Accelerating Inflation Rate of Unemployment) er det nivået av arbeidsledighet som er forenlig med stabil inflasjon.

Den naturlige raten omfatter friksjonsledighet og strukturell ledighet, men ikke konjunkturell ledighet.

**Kjennetegn:**
- Er ikke null – noe ledighet er naturlig i en dynamisk økonomi
- Varierer mellom land, avhengig av arbeidsmarkedets struktur
- I Norge anslås den til rundt 3–4 %
- Arbeidsledighet under NAIRU kan føre til lønns- og prisspiraler`,
    },
    {
      id: 'soe-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-5-2-ex-3',
        number: '5.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er NAIRU?',
        multipleChoiceOptions: [
          'Det arbeidsledighétsnivået som er forenlig med stabil inflasjon',
          'Den laveste arbeidsledighetsraten som noen gang er målt i et land',
          'Et mål på hvor mange som er i arbeid i offentlig sektor',
          'En internasjonal avtale om minimumslønninger',
        ],
        hints: ['NAIRU står for «Non-Accelerating Inflation Rate of Unemployment».'],
        solution: 'NAIRU er det arbeidsledighétsnivået der inflasjonen er stabil. Dersom arbeidsledigheten faller under NAIRU, vil det oppstå press på lønninger og priser, som kan drive opp inflasjonen. NAIRU omfatter friksjonsledighet og strukturell ledighet, men ikke konjunkturell ledighet.',
      },
    },
    {
      id: 'soe-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'I et land er 4 800 000 personer sysselsatte og 200 000 er arbeidsledige. Regn ut arbeidsledighetsraten. Dersom 50 000 av de arbeidsledige gir opp jobbsøkingen, hva skjer med den offisielle arbeidsledighetsraten?',
        hints: [
          'Husk at arbeidsstyrken = sysselsatte + arbeidsledige.',
          'Hva skjer med arbeidsstyrken når folk slutter å søke jobb?',
        ],
        solution: 'Arbeidsstyrken = 4 800 000 + 200 000 = 5 000 000. Arbeidsledighetsrate = (200 000 / 5 000 000) × 100 = 4,0 %. Når 50 000 gir opp jobbsøkingen, faller de ut av arbeidsstyrken. Ny arbeidsstyrke = 4 800 000 + 150 000 = 4 950 000. Ny rate = (150 000 / 4 950 000) × 100 ≈ 3,03 %. Paradoksalt nok faller den offisielle arbeidsledighetsraten, selv om situasjonen ikke er bedre – dette viser en svakhet ved arbeidsledighetsmålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-2-note-skjult',
      type: 'note',
      title: 'Skjult arbeidsledighet',
      content: `Arbeidsledighetsstatistikken fanger ikke opp alle som mangler arbeid. **Skjult arbeidsledighet** omfatter blant annet:

- **Oppgitte arbeidssøkere** – Folk som har gitt opp å søke jobb og dermed faller ut av statistikken.
- **Undersysselsatte** – Folk som jobber deltid, men ønsker fulltidsjobb.
- **Personer på tiltak** – Folk som deltar i arbeidsmarkedstiltak, men egentlig er uten ordinært arbeid.

Derfor gir arbeidsledighetsraten alene et ufullstendig bilde av arbeidsmarkedets tilstand.`,
    },
    {
      id: 'soe-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom friksjonsledighet, strukturell arbeidsledighet og konjunkturell arbeidsledighet. Gi et eksempel på hver type og forklar hvilke tiltak som kan være effektive mot hver av dem.',
        hints: [
          'Tenk på årsaken til hver type ledighet – det gir ledetråd til riktig tiltak.',
          'Friksjon handler om tid og informasjon, struktur handler om kompetanse, konjunktur handler om etterspørsel.',
        ],
        solution: 'Friksjonsledighet: Midlertidig mellom jobber. Eksempel: Nyutdannet som søker sin første jobb. Tiltak: Bedre jobbformidling, NAV-tjenester, karriereveiledning. Strukturell arbeidsledighet: Kompetansemisforhold. Eksempel: Industriarbeider som mister jobben pga. automatisering. Tiltak: Omskolering, videreutdanning, støtte til geografisk mobilitet. Konjunkturell arbeidsledighet: Skyldes økonomiske nedgangstider. Eksempel: Massepermitteringer under finanskrisen. Tiltak: Ekspansiv finanspolitikk (økt offentlig forbruk, skattelettelser) og pengepolitikk (rentekutt).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Arbeidsledighet

- **Arbeidsledige** er folk uten jobb som aktivt søker arbeid.
- **Arbeidsledighetsrate** = arbeidsledige / arbeidsstyrken × 100 %.
- **Friksjonsledighet**: Kortvarig, skyldes at det tar tid å matche folk med jobber.
- **Strukturell ledighet**: Langvarig, skyldes kompetansemisforhold.
- **Konjunkturell ledighet**: Følger konjunktursyklusen, rammer bredt.
- **NAIRU**: Naturlig arbeidsledighetsrate forenlig med stabil inflasjon.
- Arbeidsledighetsmålet har svakheter – det fanger ikke opp skjult arbeidsledighet.`,
    },
    {
      id: 'soe-5-2-samle-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-2-samle-1',
        number: '5.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge har hatt relativt lav arbeidsledighet sammenlignet med andre europeiske land. Drøft hva som kan forklare dette, og vurder om lav arbeidsledighet nødvendigvis betyr at arbeidsmarkedet fungerer godt.',
        hints: [
          'Tenk på norske særtrekk: oljeøkonomi, trepartssamarbeid, velferdsstat.',
          'Husk at lav ledighet kan skjule problemer som undersysselsetting og utenforskap.',
        ],
        solution: 'Norges lave arbeidsledighet kan forklares med flere faktorer: oljeinntekter som finansierer offentlig sektor, trepartssamarbeidet som sikrer stabile lønnsoppgjør, en aktiv arbeidsmarkedspolitikk gjennom NAV, og en sterk velferdsstat som gir sikkerhetsnett. Imidlertid kan lav offisiell arbeidsledighet skjule problemer: mange mottar uføretrygd, noen er undersysselsatte, og innvandrere har ofte lavere yrkesdeltakelse. I tillegg kan det være regionale forskjeller. Lav arbeidsledighet er altså ikke alene et tilstrekkelig mål på et velfungerende arbeidsmarked.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Sysselsettingstiltak
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_5_3: TextbookChapter = {
  id: 'samfokonomi-1-5-3',
  courseId: 'samfokonomi-1',
  chapterNumber: '5.3',
  title: 'Sysselsettingstiltak',
  description: 'Aktiv arbeidsmarkedspolitikk, utdanningstiltak, lønnstilskudd og offentlig sysselsetting.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over ulike sysselsettingstiltak og drøfte hvordan tiltakene kan påvirke ulike typer arbeidsledighet',
  ],
  content: [
    {
      id: 'soe-5-3-intro',
      type: 'text',
      content: `# Sysselsettingstiltak

Når arbeidsledigheten er høy eller rammer bestemte grupper hardt, kan myndighetene sette inn ulike tiltak for å øke sysselsettingen. Valg av tiltak avhenger av hvilken type arbeidsledighet man vil bekjempe.

Vi skiller gjerne mellom to hovedtyper av tiltak:
- **Aktiv arbeidsmarkedspolitikk** – Tiltak som direkte hjelper folk inn i jobb (utdanning, omskolering, jobbformidling).
- **Passiv arbeidsmarkedspolitikk** – Inntektssikring for arbeidsledige (dagpenger, trygd).

I dette kapitlet fokuserer vi på de aktive tiltakene og hvordan de virker mot ulike typer arbeidsledighet.`,
    },
    {
      id: 'soe-5-3-def-aktiv',
      type: 'definition',
      title: 'Aktiv arbeidsmarkedspolitikk',
      content: `**Aktiv arbeidsmarkedspolitikk** er tiltak som skal hjelpe arbeidsledige tilbake i jobb eller hindre at folk faller ut av arbeidslivet. De viktigste tiltakstypene er:

1. **Utdannings- og omskoleringstiltak** – Kurs og opplæring som gir ny kompetanse.
2. **Lønnstilskudd** – Subsidier til arbeidsgivere som ansetter arbeidsledige.
3. **Arbeidstrening/praksisplasser** – Arbeidspraksis i bedrifter med oppfølging.
4. **Jobbformidling** – Hjelp til å finne ledige stillinger (NAVs rolle).
5. **Offentlige arbeidsplasser** – Myndighetene skaper jobber i offentlig sektor.
6. **Etablererstøtte** – Hjelp til å starte egen bedrift.`,
    },
    {
      id: 'soe-5-3-example-tiltak-type',
      type: 'example',
      title: 'Eksempel: Riktig tiltak til riktig type arbeidsledighet',
      problem: 'Hvilke tiltak passer best mot de ulike typene arbeidsledighet?',
      solution: `**Mot friksjonsledighet:**
- Bedre jobbformidling og informasjon om ledige stillinger
- Digitale plattformer som matcher arbeidstakere og arbeidsgivere
- Redusere byråkrati i ansettelsesprosesser

**Mot strukturell arbeidsledighet:**
- Omskolering og videreutdanning
- Kompetansehevingsprogrammer
- Støtte til geografisk mobilitet (flyttetilskudd)
- Lønnstilskudd for å senke terskelen for ansettelse

**Mot konjunkturell arbeidsledighet:**
- Ekspansiv finanspolitikk (økt offentlig forbruk, skattelettelser)
- Offentlige investeringsprosjekter som skaper arbeidsplasser
- Permitteringsordninger som holder folk tilknyttet arbeidsplassen
- Pengepolitikk (rentekutt fra sentralbanken)`,
    },
    {
      id: 'soe-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom aktiv og passiv arbeidsmarkedspolitikk?',
        multipleChoiceOptions: [
          'Aktiv politikk hjelper folk inn i jobb, passiv politikk gir inntektssikring til arbeidsledige',
          'Aktiv politikk drives av private bedrifter, passiv politikk av staten',
          'Aktiv politikk gjelder unge, passiv politikk gjelder eldre',
          'Det er ingen forskjell – begrepene brukes om det samme',
        ],
        hints: ['Tenk på om tiltaket handler om å få folk i jobb, eller om å gi dem penger mens de er uten jobb.'],
        solution: 'Aktiv arbeidsmarkedspolitikk fokuserer på tiltak som hjelper arbeidsledige tilbake i jobb – som omskolering, praksisplasser og jobbformidling. Passiv politikk handler om å sikre inntekten til de som er uten jobb – som dagpenger og andre ytelser. Begge er viktige, men tjener ulike formål.',
      },
    },
    {
      id: 'soe-5-3-def-lonnstilskudd',
      type: 'definition',
      title: 'Lønnstilskudd',
      content: `**Lønnstilskudd** er en ordning der staten betaler en del av lønnskostnaden for at en bedrift skal ansette en arbeidsledig person. Formålet er å senke arbeidsgiverens kostnad ved å ansette personer som ellers ville hatt vanskeligheter med å få jobb.

**Fordeler:**
- Senker terskelen for ansettelse
- Gir arbeidsledige arbeidserfaring
- Kan lede til fast ansettelse etter tilskuddsperioden

**Mulige ulemper:**
- Kan fortrenge ordinære ansettelser (dødvektstap)
- Bedrifter kan misbruke ordningen
- Stigmatisering: Kan signalisere at arbeidstakeren er «svak»`,
    },
    {
      id: 'soe-5-3-example-nav',
      type: 'example',
      title: 'Eksempel: NAVs rolle i norsk arbeidsmarkedspolitikk',
      problem: 'Hvordan fungerer NAV som verktøy for aktiv arbeidsmarkedspolitikk?',
      solution: `NAV (Arbeids- og velferdsetaten) er Norges viktigste verktøy for arbeidsmarkedspolitikk. NAV kombinerer flere funksjoner:

**Jobbformidling:**
- Drifter nav.no med oversikt over ledige stillinger
- Kobler arbeidssøkere med arbeidsgivere
- Tilbyr karriereveiledning

**Tiltak:**
- Arrangerer kurs og opplæring
- Formidler praksisplasser
- Administrerer lønnstilskuddsordninger
- Tilbyr arbeidsrettet rehabilitering

**Inntektssikring:**
- Utbetaler dagpenger til arbeidsledige
- Administrerer arbeidsavklaringspenger
- Forvalter uføretrygd

NAV betjener omtrent 2,8 millioner mennesker årlig og er en av Norges største offentlige virksomheter.`,
    },
    {
      id: 'soe-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-5-3-ex-2',
        number: '5.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken type arbeidsledighet er omskolering og videreutdanning mest effektivt mot?',
        multipleChoiceOptions: [
          'Strukturell arbeidsledighet – fordi den skyldes kompetansemisforhold',
          'Friksjonsledighet – fordi den skyldes mangel på informasjon',
          'Konjunkturell arbeidsledighet – fordi den skyldes fall i etterspørselen',
          'Sesongledighet – fordi den skyldes årstidsvariasjoner',
        ],
        hints: ['Tenk på hva som kjennetegner strukturell arbeidsledighet og hva som skal til for å løse den.'],
        solution: 'Omskolering og videreutdanning er mest effektivt mot strukturell arbeidsledighet, som skyldes at arbeidstakernes kompetanse ikke matcher det arbeidsmarkedet etterspør. Ved å gi folk ny kompetanse kan man tette gapet mellom tilbud og etterspørsel i arbeidsmarkedet.',
      },
    },
    {
      id: 'soe-5-3-text-offentlig',
      type: 'text',
      content: `## Offentlig sysselsetting og investeringer

I perioder med høy konjunkturell arbeidsledighet kan staten øke sin egen sysselsetting for å kompensere for fallende privat etterspørsel. Dette kan gjøres gjennom:

- **Infrastrukturprosjekter** – Bygging av veier, jernbane og offentlige bygg skaper arbeidsplasser direkte og indirekte.
- **Økt bemanning i offentlige tjenester** – Flere ansatte i helse, utdanning og omsorg.
- **Grønne investeringer** – Satsing på fornybar energi og klimatiltak som skaper nye arbeidsplasser.

Slike tiltak fungerer som **automatiske stabilisatorer** og **diskresjonær finanspolitikk** – de demper nedgangen og opprettholder etterspørselen i økonomien.`,
    },
    {
      id: 'soe-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Under koronapandemien i 2020 innførte Norge utvidede permitteringsordninger. Forklar hva en permitteringsordning er, og drøft hvorfor dette kan være et bedre tiltak enn å la bedriftene si opp ansatte under en midlertidig krise.',
        hints: [
          'Ved permittering beholder arbeidstakeren tilknytningen til arbeidsgiveren.',
          'Tenk på hva som skjer når krisen er over – er det lettere å starte opp igjen med eller uten de gamle ansatte?',
        ],
        solution: 'Permittering betyr at arbeidstakeren midlertidig fritas fra arbeidsplikten, men beholder ansettelsesforholdet. Staten betaler dagpenger i permitteringsperioden. Fordeler: Bedriften beholder kompetansen og kan raskt øke produksjonen når krisen er over. Arbeidstakeren slipper å søke ny jobb. Samfunnet unngår kostnadene ved masseoppsigelser (omstillingskostnader, kompetansetap, sosiale problemer). Under pandemien var dette spesielt effektivt fordi krisen var midlertidig – da samfunnet åpnet opp igjen, kunne bedriftene raskt kalle tilbake ansatte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-5-3-ex-4',
        number: '5.3.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en mulig ulempe ved lønnstilskudd?',
        multipleChoiceOptions: [
          'Det kan fortrenge ordinære ansettelser – bedrifter ansetter med tilskudd i stedet for til vanlig lønn',
          'Det gjør at arbeidstakerne tjener for mye',
          'Det fører alltid til høyere arbeidsledighet',
          'Det fungerer bare i offentlig sektor',
        ],
        hints: ['Tenk på hva som skjer dersom en bedrift ville ansatt uansett, men nå får tilskudd i tillegg.'],
        solution: 'En viktig innvending mot lønnstilskudd er fortrengningseffekten (dødvektstap): Bedrifter kan bruke tilskuddet til å ansette folk de ville ansatt uansett, eller til å erstatte ordinære stillinger med subsidierte. Da skaper tiltaket ikke nye jobber, men overfører kostnader fra bedrift til stat. Derfor er det viktig med god utforming og kontroll av ordningen.',
      },
    },
    {
      id: 'soe-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved å bruke offentlige investeringsprosjekter (for eksempel vei- og jernbanebygging) som tiltak mot arbeidsledighet i en lavkonjunktur.',
        hints: [
          'Tenk på multiplikatoreffekten: Når staten ansetter folk, bruker de lønnen på varer og tjenester, som skaper nye jobber.',
          'Vurder også om det er mulige ulemper, for eksempel tidsforskyvning.',
        ],
        solution: 'Fordeler: Offentlige investeringer skaper direkte arbeidsplasser i byggebransjen og indirekte i leverandørindustrien (multiplikatoreffekt). Investeringene gir varig infrastruktur som øker produktiviteten. De kan rettes mot regioner med høy ledighet. Ulemper: Det tar ofte lang tid å planlegge og starte store prosjekter – ledigheten kan være over før prosjektet kommer i gang (tidsforskyvning). Prosjektene kan fortrenge privat investering (crowding out). Kostnadene kan bli høye dersom prosjektene er dårlig planlagt. Staten risikerer å opprettholde unødvendig høy offentlig sysselsetting etter at krisen er over.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Sysselsettingstiltak

- **Aktive tiltak** hjelper folk inn i jobb: utdanning, lønnstilskudd, praksisplasser, jobbformidling.
- **Passive tiltak** gir inntektssikring: dagpenger, trygd.
- **Omskolering** er mest effektivt mot strukturell arbeidsledighet.
- **Jobbformidling** hjelper mot friksjonsledighet.
- **Offentlige investeringer** og finanspolitikk bekjemper konjunkturell ledighet.
- **Permitteringsordninger** bevarer kompetanse under midlertidige kriser.
- Alle tiltak har potensielle ulemper som fortrengning, tidsforskyvning og kostnader.`,
    },
    {
      id: 'soe-5-3-samle-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-3-samle-1',
        number: '5.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg to ulike sysselsettingstiltak og drøft hvordan de kan påvirke ulike typer arbeidsledighet. Vurder effektiviteten av tiltakene og eventuelle utilsiktede virkninger.',
        hints: [
          'Strukturer svaret ved å knytte hvert tiltak til en bestemt type arbeidsledighet.',
          'Tenk på hvem som tjener på tiltaket og om det kan ha negative sideeffekter.',
        ],
        solution: 'Eksempel 1: Omskolering (mot strukturell ledighet): Effektivt fordi det adresserer kjerneproblemet – kompetansemisforhold. Industriarbeidere som mister jobben pga. automatisering kan omskoleres til IT-sektoren. Utilsiktet virkning: Kan ta lang tid og er kostbart. Ikke alle klarer å fullføre omskolering, og det er ingen garanti for jobb etterpå. Eksempel 2: Økt offentlig forbruk (mot konjunkturell ledighet): Effektivt på kort sikt fordi det øker samlet etterspørsel og skaper jobber direkte. Multiplikatoreffekten forsterker virkningen. Utilsiktet virkning: Kan føre til budsjettunderskudd og økt statsgjeld. Risiko for at midlertidige tiltak blir permanente. Kan fortrenge privat investering dersom staten konkurrerer om de samme ressursene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Lønn og lønnsforskjeller
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_5_4: TextbookChapter = {
  id: 'samfokonomi-1-5-4',
  courseId: 'samfokonomi-1',
  chapterNumber: '5.4',
  title: 'Lønn og lønnsforskjeller',
  description: 'Lønnsdannelse, humankapitalteori, kjønnsbaserte lønnsforskjeller og den norske modellen (trepartssamarbeidet).',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske lønnsforskjeller, inntektsfordeling og økonomisk ulikhet',
    'reflektere over ulike sysselsettingstiltak og drøfte hvordan tiltakene kan påvirke ulike typer arbeidsledighet',
  ],
  content: [
    {
      id: 'soe-5-4-intro',
      type: 'text',
      content: `# Lønn og lønnsforskjeller

Lønn er prisen på arbeidskraft. Den varierer enormt – fra lavtlønte jobber i servicenæringen til millionlønninger for toppledere. Hva er det som bestemmer lønnsnivået, og hvorfor tjener noen så mye mer enn andre?

I dette kapitlet ser vi på teorier for lønnsdannelse, forklaringer på lønnsforskjeller, og hvordan den norske modellen for lønnsdannelse skiller seg fra andre land.`,
    },
    {
      id: 'soe-5-4-def-humankapital',
      type: 'definition',
      title: 'Humankapitalteori',
      content: `**Humankapitalteori** forklarer lønnsforskjeller med forskjeller i kompetanse og produktivitet. Ifølge denne teorien bestemmes lønnen av arbeidstakerens **humankapital** – den samlede verdien av kunnskap, ferdigheter, erfaring og helse.

**Faktorer som øker humankapital:**
- **Utdanning** – Flere år med utdanning gir høyere lønn.
- **Arbeidserfaring** – Erfaring øker produktiviteten.
- **Videreutdanning** – Kurs og oppdatering av kompetanse.
- **Helse** – God helse gjør at man kan jobbe mer effektivt.

**Sentral tanke:** Folk investerer i utdanning og opplæring fordi det gir høyere lønn senere. Kostnaden er tapte inntekter under utdanningen (alternativkostnad) pluss direkte kostnader (studieavgift, bøker).`,
    },
    {
      id: 'soe-5-4-example-utdanning',
      type: 'example',
      title: 'Eksempel: Utdanning og lønn',
      problem: 'Hvorfor tjener en lege mer enn en ufaglært butikkmedarbeider? Bruk humankapitalteorien til å forklare.',
      solution: `Ifølge humankapitalteorien skyldes lønnsforskjellen forskjeller i kompetanse og investeringer:

**Legen:**
- 6 år medisinutdanning + turnustjeneste
- Høy alternativkostnad: Gikk glipp av inntekt i mange år
- Spesialisert kunnskap som er vanskelig å erstatte
- Høy produktivitet: Kan utføre livsviktige tjenester

**Butikkmedarbeideren:**
- Lite eller ingen formell utdanning nødvendig
- Lav alternativkostnad: Kunne begynne å jobbe tidlig
- Kompetansen er lettere å erstatte
- Lavere marginalt bidrag til bedriftens inntekt

**Konklusjon:** Legens høye lønn kompenserer for den store investeringen i utdanning og reflekterer den høye produktiviteten. Uten en lønnsforskjell ville færre valgt den lange og krevende utdanningen.`,
    },
    {
      id: 'soe-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ifølge humankapitalteorien, hva er den viktigste forklaringen på lønnsforskjeller mellom arbeidstakere?',
        multipleChoiceOptions: [
          'Forskjeller i utdanning, kompetanse og erfaring',
          'Tilfeldigheter og flaks',
          'Forskjeller i alder og kjønn',
          'Hvor lenge man har jobbet i samme bedrift',
        ],
        hints: ['Humankapital handler om den samlede verdien av kunnskap og ferdigheter.'],
        solution: 'Humankapitalteorien forklarer lønnsforskjeller med forskjeller i utdanning, kompetanse og erfaring. Jo mer humankapital en arbeidstaker har, desto mer produktiv er vedkommende, og desto høyere lønn kan arbeidsgiveren betale. Andre faktorer spiller også inn, men kompetanse er kjernen i denne teorien.',
      },
    },
    {
      id: 'soe-5-4-def-trepartssamarbeidet',
      type: 'definition',
      title: 'Den norske modellen og trepartssamarbeidet',
      content: `**Trepartssamarbeidet** er en norsk tradisjon der tre parter samarbeider om lønnsdannelse og arbeidsmarkedspolitikk:

1. **Arbeidstakerorganisasjonene** (LO, Unio, YS, Akademikerne) – Representerer arbeidstakerne.
2. **Arbeidsgiverorganisasjonene** (NHO, Virke, KS) – Representerer arbeidsgiverne.
3. **Staten** – Legger til rette og megler ved konflikter.

**Frontfagsmodellen:**
Den konkurranseutsatte industrien (frontfaget) forhandler først og setter normen for lønnsvekst. Andre sektorer følger etter. Formålet er å sikre at lønnsveksten ikke overstiger det konkurranseutsatt sektor kan tåle.

**Kjennetegn ved den norske modellen:**
- Koordinert lønnsdannelse
- Relativt små lønnsforskjeller
- Høy organisasjonsgrad
- Stabilt arbeidsliv med få streiker`,
    },
    {
      id: 'soe-5-4-example-frontfag',
      type: 'example',
      title: 'Eksempel: Frontfagsmodellen i praksis',
      problem: 'Hvordan fungerer frontfagsmodellen i et lønnsoppgjør?',
      solution: `**Steg 1:** Det tekniske beregningsutvalget (TBU) legger frem tall for prisstigning, lønnsnivå og økonomisk utvikling.

**Steg 2:** Frontfaget (typisk Fellesforbundet og Norsk Industri) forhandler først. De blir enige om en ramme for lønnsveksten, for eksempel 5,2 %.

**Steg 3:** Andre sektorer forhandler med frontfagets ramme som norm:
- Offentlig sektor (kommuner, stat)
- Helse og utdanning
- Handels- og servicenæringen

**Formålet:** Frontfagsmodellen sikrer at lønnsveksten i hele økonomien er tilpasset det den konkurranseutsatte industrien tåler. Dersom lønnene vokser for raskt, taper norsk industri konkurransekraft, og arbeidsplasser kan gå tapt.

**Kritikk:** Noen mener modellen holder lønningene kunstig nede i sektorer med stor etterspørsel etter arbeidskraft, som helse og IT.`,
    },
    {
      id: 'soe-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-5-4-ex-2',
        number: '5.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er formålet med frontfagsmodellen?',
        multipleChoiceOptions: [
          'Å sikre at lønnsveksten i hele økonomien er tilpasset det den konkurranseutsatte industrien tåler',
          'Å gi den offentlige sektoren høyere lønnsvekst enn privat sektor',
          'Å fjerne alle lønnsforskjeller mellom yrkesgrupper',
          'Å garantere at lønningene alltid stiger mer enn prisene',
        ],
        hints: ['«Frontfag» betyr at den konkurranseutsatte industrien forhandler først.'],
        solution: 'Frontfagsmodellen sikrer at lønnsveksten i Norge er tilpasset det den konkurranseutsatte eksportindustrien kan tåle. Dersom lønningene vokser raskere enn produktiviteten i eksportindustrien, mister norske bedrifter konkurranseevne og arbeidsplasser kan gå tapt. Frontfaget setter normen som andre sektorer følger.',
      },
    },
    {
      id: 'soe-5-4-def-kjonnsforskjell',
      type: 'definition',
      title: 'Kjønnsbaserte lønnsforskjeller',
      content: `**Lønnsforskjeller mellom kvinner og menn** er et vedvarende fenomen i de fleste land. I Norge tjener kvinner i gjennomsnitt rundt 87–88 % av det menn tjener.

**Mulige forklaringer:**
- **Yrkesvalg** – Kvinner og menn velger ulike yrker (kjønnssegregering). Kvinnedominerte yrker har ofte lavere lønn.
- **Arbeidstid** – Kvinner jobber oftere deltid.
- **Forhandlingsstyrke** – Forskning tyder på at menn oftere forhandler lønn.
- **Karriereavbrudd** – Fødselspermisjon og omsorgsarbeid kan bremse karriereutvikling.
- **Diskriminering** – Ulik behandling basert på kjønn, bevisst eller ubevisst.

**Tiltak:**
- Likelønnslovgivning
- Kvotering i styrer
- Deling av foreldrepermisjon (fedrekvoten)
- Lønnskartlegging og åpenhet om lønn`,
    },
    {
      id: 'soe-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med kjønnssegregering i arbeidsmarkedet, og drøft hvordan dette kan bidra til lønnsforskjeller mellom kvinner og menn.',
        hints: [
          'Kjønnssegregering betyr at kvinner og menn dominerer i ulike yrker.',
          'Tenk på typiske «kvinneyrker» og «mannsyrker» – hva kjennetegner lønnsnivået?',
        ],
        solution: 'Kjønnssegregering i arbeidsmarkedet betyr at kvinner og menn er konsentrert i ulike yrker og sektorer. Kvinnedominerte yrker (helse, omsorg, undervisning) har ofte lavere lønn enn mannsdominerte yrker (teknologi, finans, industri). Dette kalles horisontal segregering. Vertikal segregering betyr at menn oftere har lederstillinger. Segregeringen forklarer en betydelig del av lønnsforskjellen, men spørsmålet er om de kvinnedominerte yrkene er lavere lønnet fordi de har lavere verdi, eller fordi de tradisjonelt har vært utført av kvinner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-4-text-andre-faktorer',
      type: 'text',
      content: `## Andre faktorer som påvirker lønn

Utover humankapital og forhandlinger er det flere faktorer som forklarer lønnsforskjeller:

- **Risiko og arbeidsforhold** – Farlige eller ubekvemme jobber betaler ofte mer (kompenserende lønnsforskjeller).
- **Geografi** – Lønningene er ofte høyere i storbyene, der levekostnadene er høyere.
- **Fagforeningsmedlemskap** – Organiserte arbeidstakere har ofte bedre lønns- og arbeidsvilkår.
- **Bedriftens lønnsevne** – Bedrifter med høy profitt kan betale høyere lønn.
- **Knapphet på kompetanse** – Sjeldne ferdigheter gir forhandlingsmakt og høyere lønn.`,
    },
    {
      id: 'soe-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-5-4-ex-4',
        number: '5.4.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med «kompenserende lønnsforskjeller»?',
        multipleChoiceOptions: [
          'At ubekvemme eller farlige jobber betaler høyere lønn for å kompensere for dårlige arbeidsforhold',
          'At kvinner får høyere lønn enn menn for å kompensere for historisk diskriminering',
          'At offentlig sektor betaler mer enn privat sektor',
          'At lønn justeres automatisk etter inflasjon',
        ],
        hints: ['Tenk på hvorfor en oljearbeider offshore kanskje tjener mer enn en kontormedarbeider.'],
        solution: 'Kompenserende lønnsforskjeller betyr at jobber med ugunstige forhold – som fare, ubekvem arbeidstid, fysisk belastning eller isolasjon – betaler høyere lønn for å tiltrekke arbeidstakere. Offshore-arbeidere tjener for eksempel mer enn sammenlignbare jobber på land, nettopp fordi arbeidsforholdene er mer krevende.',
      },
    },
    {
      id: 'soe-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan trepartssamarbeidet i Norge bidrar til relativt små lønnsforskjeller sammenlignet med andre land. Drøft om dette er entydig positivt.',
        hints: [
          'Tenk på hva koordinert lønnsdannelse betyr i praksis.',
          'Vurder om det finnes ulemper med at lønnsforskjellene er små.',
        ],
        solution: 'Trepartssamarbeidet, gjennom frontfagsmodellen, koordinerer lønnsdannelsen slik at alle sektorer følger omtrent samme lønnsvekst. Dette bidrar til små lønnsforskjeller fordi lavtlønte grupper løftes relativt mer (kronetillegg fremfor prosenttillegg), og topplønningene holdes nede av moderasjon. Fordeler: Rettferdig fordeling, sosial stabilitet, lav fattigdom. Mulige ulemper: Vanskelig å rekruttere til yrker med stor etterspørsel når lønnen ikke kan settes fritt, redusert insentiv til å ta lang utdanning dersom lønnsgevinsten er liten, og potensielt mindre innovasjon i næringslivet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Lønn og lønnsforskjeller

- **Humankapitalteorien** forklarer lønnsforskjeller med forskjeller i utdanning, kompetanse og erfaring.
- **Trepartssamarbeidet** og **frontfagsmodellen** er sentrale i norsk lønnsdannelse og bidrar til relativt små lønnsforskjeller.
- **Kjønnsbaserte lønnsforskjeller** skyldes blant annet yrkessegregering, arbeidstid, karriereavbrudd og diskriminering.
- **Kompenserende lønnsforskjeller** oppstår fordi noen jobber har ugunstige arbeidsforhold.
- Andre faktorer som geografi, fagforeningsmedlemskap og knapphet på kompetanse påvirker også lønnsnivået.`,
    },
    {
      id: 'soe-5-4-samle-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-4-samle-1',
        number: '5.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I noen land (for eksempel USA) er lønnsforskjellene mye større enn i Norge. Drøft mulige fordeler og ulemper ved henholdsvis små og store lønnsforskjeller. Bruk eksempler fra norsk og internasjonal økonomi.',
        hints: [
          'Små lønnsforskjeller: Tenk på likhet, sosial sammenhengskraft, men også insentiver.',
          'Store lønnsforskjeller: Tenk på motivasjon og innovasjon, men også fattigdom og ulikhet.',
        ],
        solution: 'Små lønnsforskjeller (som i Norge): Fordeler – lavere fattigdom, sterkere sosial sammenhengskraft, bedre folkehelse, høyere tillit i samfunnet. Ulemper – svakere økonomiske insentiver til å ta høyere utdanning eller ekstra risiko, kan gjøre det vanskelig å rekruttere til nøkkelyrker. Store lønnsforskjeller (som i USA): Fordeler – sterkere insentiver til å prestere, innovere og ta risiko, lettere å tiltrekke topptalenter. Ulemper – høyere fattigdom, sosial uro, dårligere folkehelse, lavere sosial mobilitet. Ingen av ytterpunktene er «riktige» – det handler om en avveining mellom likhet og effektivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Inntektsfordeling og ulikhet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_5_5: TextbookChapter = {
  id: 'samfokonomi-1-5-5',
  courseId: 'samfokonomi-1',
  chapterNumber: '5.5',
  title: 'Inntektsfordeling og ulikhet',
  description: 'Lorenzkurven, Gini-koeffisienten, inntektsomfordeling og den nordiske velferdsmodellen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske lønnsforskjeller, inntektsfordeling og økonomisk ulikhet',
  ],
  content: [
    {
      id: 'soe-5-5-intro',
      type: 'text',
      content: `# Inntektsfordeling og ulikhet

Hvordan fordeles inntektene i et samfunn? Er fordelingen rettferdig? Og hva kan staten gjøre for å påvirke den? Dette er sentrale spørsmål i samfunnsøkonomien.

Inntektsfordelingen har stor betydning for folks levekår, sosial mobilitet og samfunnets stabilitet. I dette kapitlet lærer vi verktøy for å måle ulikhet og analyserer hvordan den nordiske velferdsmodellen omfordeler inntekt.`,
    },
    {
      id: 'soe-5-5-def-lorenz',
      type: 'definition',
      title: 'Lorenzkurven',
      content: `**Lorenzkurven** er et grafisk verktøy for å vise inntektsfordelingen i et samfunn.

**Slik konstrueres den:**
- **X-aksen:** Kumulativ andel av befolkningen (fra 0 % til 100 %), sortert fra lavest til høyest inntekt.
- **Y-aksen:** Kumulativ andel av den totale inntekten.
- **45-graderslinjen** representerer perfekt likhet – der alle tjener like mye.
- **Lorenzkurven** viser den faktiske fordelingen og ligger alltid under eller på 45-graderslinjen.

**Tolkning:**
- Jo nærmere kurven er 45-graderslinjen, desto likere er fordelingen.
- Jo lenger kurven buer ned, desto større er ulikheten.
- Arealet mellom 45-graderslinjen og Lorenzkurven kalles **konsentrasjonsarealet** og er grunnlaget for Gini-koeffisienten.`,
    },
    {
      id: 'soe-5-5-example-lorenz',
      type: 'example',
      title: 'Eksempel: Tolkning av Lorenzkurven',
      problem: 'I et land viser Lorenzkurven at de fattigste 50 % av befolkningen bare mottar 20 % av den totale inntekten. Hva forteller dette oss?',
      solution: `**Tolkning:**

Dersom vi hadde perfekt likhet, ville de fattigste 50 % mottatt 50 % av inntekten (45-graderslinjen). Når de bare mottar 20 %, betyr det at:

- De rikeste 50 % mottar 80 % av inntekten.
- Inntektsfordelingen er skjev – det er betydelig ulikhet.

**Sammenligning:**
- I Norge mottar de fattigste 50 % omtrent 30 % av inntekten – relativt lav ulikhet.
- I land som Brasil eller Sør-Afrika kan de fattigste 50 % motta under 15 % – svært høy ulikhet.

Lorenzkurven gir oss et visuelt bilde av ulikheten, men for å sammenligne land og perioder trenger vi et tall – det er her Gini-koeffisienten kommer inn.`,
    },
    {
      id: 'soe-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva representerer 45-graderslinjen i et Lorenzkurve-diagram?',
        multipleChoiceOptions: [
          'Perfekt likhet – en situasjon der alle har like stor inntekt',
          'Perfekt ulikhet – en situasjon der én person har all inntekten',
          'Gjennomsnittlig inntekt i samfunnet',
          'Den høyeste mulige inntekten',
        ],
        hints: ['Tenk på hva det betyr at 50 % av befolkningen har 50 % av inntekten.'],
        solution: '45-graderslinjen representerer en situasjon med perfekt likhet, der enhver andel av befolkningen mottar en tilsvarende andel av inntekten. For eksempel ville de fattigste 20 % mottatt 20 % av inntekten, de fattigste 50 % mottatt 50 %, og så videre. I virkeligheten oppnår ingen land perfekt likhet.',
      },
    },
    {
      id: 'soe-5-5-def-gini',
      type: 'definition',
      title: 'Gini-koeffisienten',
      content: `**Gini-koeffisienten** er et tall mellom 0 og 1 som måler graden av inntektsulikhet.

**Beregning:**
Gini = Konsentrasjonsarealet / Totalt areal under 45-graderslinjen

- **Gini = 0**: Perfekt likhet (alle har lik inntekt).
- **Gini = 1**: Perfekt ulikhet (én person har all inntekten).

**Noen Gini-verdier (ca.):**
- Norge: 0,27 – lav ulikhet
- Sverige: 0,29 – lav ulikhet
- USA: 0,39 – middels høy ulikhet
- Brasil: 0,49 – høy ulikhet
- Sør-Afrika: 0,63 – svært høy ulikhet

**Merk:** Gini-koeffisienten kan beregnes for inntekt før skatt (markedsinntekt) og etter skatt og overføringer (disponibel inntekt). Forskjellen viser effekten av omfordeling.`,
    },
    {
      id: 'soe-5-5-example-gini',
      type: 'example',
      title: 'Eksempel: Gini-koeffisienten i praksis',
      problem: 'Norges Gini-koeffisient for markedsinntekt er ca. 0,44, men etter skatt og overføringer er den ca. 0,27. Hva forteller dette oss?',
      solution: `**Tolkning:**

Forskjellen mellom Gini for markedsinntekt (0,44) og disponibel inntekt (0,27) viser effekten av Norges omfordelingspolitikk.

**Omfordelingen skjer gjennom:**
1. **Progressiv beskatning** – De som tjener mest, betaler en høyere andel i skatt.
2. **Overføringer** – Trygder, barnetrygd, bostøtte og andre ytelser til lavinntektsgrupper.
3. **Offentlige tjenester** – Gratis utdanning og helsevesen som alle har tilgang til.

**Beregning av omfordelingseffekten:**
Reduksjon i Gini = 0,44 – 0,27 = 0,17

Dette betyr at skatter og overføringer reduserer ulikheten med nesten 40 %. Norge er blant landene i verden som omfordeler mest, sammen med de andre nordiske landene.`,
    },
    {
      id: 'soe-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-5-5-ex-2',
        number: '5.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et land har en Gini-koeffisient på 0,55. Hva kan vi si om inntektsfordelingen?',
        multipleChoiceOptions: [
          'Det er svært høy ulikhet – inntekten er sterkt konsentrert hos de rikeste',
          'Det er lav ulikhet – inntekten er jevnt fordelt',
          'Alle har omtrent like mye inntekt',
          'Gini-koeffisienten sier ingenting om ulikhet',
        ],
        hints: ['Husk at Gini = 0 er perfekt likhet og Gini = 1 er perfekt ulikhet. Hvor plasserer 0,55 seg?'],
        solution: 'En Gini-koeffisient på 0,55 indikerer svært høy ulikhet. Til sammenligning har de nordiske landene Gini rundt 0,25–0,30, mens land som Sør-Afrika (0,63) har enda høyere ulikhet. Ved 0,55 mottar en liten andel av befolkningen en svært stor andel av den totale inntekten.',
      },
    },
    {
      id: 'soe-5-5-def-omfordeling',
      type: 'definition',
      title: 'Inntektsomfordeling',
      content: `**Inntektsomfordeling** er overføring av inntekt fra høyinntektsgrupper til lavinntektsgrupper gjennom offentlig politikk. De viktigste virkemidlene er:

**1. Progressiv beskatning:**
Høyere inntekt gir høyere skattesats. I Norge er marginalskatten på lønnsinntekt opptil ca. 47 % for de høyeste inntektene.

**2. Overføringer:**
- Barnetrygd, kontantstøtte
- Dagpenger, arbeidsavklaringspenger
- Sosialstønad, bostøtte
- Pensjon, uføretrygd

**3. Universelle offentlige tjenester:**
- Gratis skole og utdanning
- Subsidiert helsevesen
- Barnehageplass med makspris
- Offentlig transport

Omfordeling reduserer ulikhet, men kan ha utilsiktede effekter på arbeidsinsentiver og økonomisk effektivitet.`,
    },
    {
      id: 'soe-5-5-example-velferdsmodell',
      type: 'example',
      title: 'Eksempel: Den nordiske velferdsmodellen',
      problem: 'Hva kjennetegner den nordiske velferdsmodellen, og hvordan bidrar den til lavere ulikhet?',
      solution: `Den nordiske velferdsmodellen (også kalt den skandinaviske modellen) kjennetegnes av:

**1. Universelle velferdsordninger:**
Alle har rett til de samme tjenestene, uavhengig av inntekt – skole, helse, eldreomsorg.

**2. Høy skatt og høy omfordeling:**
Skattene er høye, men pengene brukes til tjenester som kommer alle til gode.

**3. Koordinert lønnsdannelse:**
Trepartssamarbeidet bidrar til små lønnsforskjeller.

**4. Aktiv arbeidsmarkedspolitikk:**
Hjelper folk tilbake i arbeid, reduserer langvarig utenforskap.

**5. Høy tillit og sosial kapital:**
Tillit mellom folk og til institusjoner er blant de høyeste i verden.

**Resultatet:** De nordiske landene har verdens laveste ulikhet, høyest sosial mobilitet og topper ofte kåringer av livskvalitet – til tross for (eller kanskje på grunn av) høye skatter.`,
    },
    {
      id: 'soe-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-5-5-ex-3',
        number: '5.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende er IKKE et verktøy for inntektsomfordeling?',
        multipleChoiceOptions: [
          'Aksjeutbytte',
          'Progressiv beskatning',
          'Barnetrygd',
          'Gratis offentlig utdanning',
        ],
        hints: ['Omfordeling handler om å overføre inntekt fra rike til fattige gjennom offentlig politikk.'],
        solution: 'Aksjeutbytte er inntekt fra aksjer som tilfaller eierne – det er ikke et verktøy for omfordeling, men tvert imot en kilde til inntektsulikhet (de som eier mest aksjer, får mest utbytte). Progressiv beskatning, barnetrygd og gratis utdanning er alle verktøy staten bruker for å omfordele inntekt.',
      },
    },
    {
      id: 'soe-5-5-text-debatt',
      type: 'text',
      content: `## Debatten om ulikhet

Økonomisk ulikhet er et omstridt tema. Det finnes ulike synspunkter:

**Argumenter for en viss ulikhet:**
- Gir insentiver til å arbeide hardt, ta utdanning og innovere.
- Belønner risikotaking og entreprenørskap.
- Et fritt marked vil naturlig skape ulike utfall.

**Argumenter mot for mye ulikhet:**
- Høy ulikhet svekker sosial sammenhengskraft og tillit.
- Reduserer sosial mobilitet – fattige barn har vanskeligere for å lykkes.
- Kan føre til sosial uro og politisk ustabilitet.
- Er ineffektivt: Pengene «sitter fast» hos de rikeste og brukes ikke til konsum.

**Forskning viser:**
Moderate forskjeller kan være sunne for økonomien, men svært høy ulikhet er negativt for både økonomisk vekst og sosial utvikling. De nordiske landene er et eksempel på at lav ulikhet og høy velstand kan gå hånd i hånd.`,
    },
    {
      id: 'soe-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva Lorenzkurven og Gini-koeffisienten er, og vis hvordan de henger sammen. Bruk et tenkt eksempel med to land for å illustrere.',
        hints: [
          'Tegn gjerne to Lorenzkurver i samme diagram – en for et land med lav ulikhet og en for et land med høy ulikhet.',
          'Forklar sammenhengen mellom arealet under kurven og Gini-tallet.',
        ],
        solution: 'Lorenzkurven viser kumulativ inntektsandel (y-aksen) mot kumulativ befolkningsandel (x-aksen). 45-graderslinjen representerer perfekt likhet. Land A (f.eks. Norge) har en Lorenzkurve tett inntil 45-graderslinjen – de fattigste 20 % har 10 % av inntekten. Land B (f.eks. Brasil) har en kurve som buer kraftig ned – de fattigste 20 % har bare 3 % av inntekten. Gini-koeffisienten er forholdet mellom arealet mellom 45-graderslinjen og Lorenzkurven, og det totale arealet under 45-graderslinjen. Land A har liten avstand (Gini ≈ 0,27), land B har stor avstand (Gini ≈ 0,49). Jo nærmere Gini er 0, desto likere er fordelingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om den nordiske velferdsmodellen med høy omfordeling er bærekraftig på lang sikt. Vurder både økonomiske og sosiale argumenter.',
        hints: [
          'Tenk på utfordringer som eldrebølge, innvandring, globalisering og skattekonkurranse.',
          'Vurder også hva som taler for at modellen er robust.',
        ],
        solution: 'Argumenter for bærekraft: Modellen skaper høy tillit, sosial stabilitet og god folkehelse, som gir et produktivt samfunn. Høy yrkesdeltakelse (også blant kvinner) gir et bredt skattegrunnlag. Investeringer i utdanning og helse gir avkastning i form av produktiv arbeidskraft. Argumenter mot bærekraft: Aldring av befolkningen øker utgiftene til pensjon og helse mens skattebasen krymper. Globalisering og skattekonkurranse kan gjøre det vanskeligere å opprettholde høye skatter. Innvandring utfordrer modellen dersom innvandrere ikke integreres i arbeidsmarkedet. Teknologisk endring kan øke ulikheten. Konklusjon: Modellen må tilpasses nye utfordringer, men grunnprinsippene – universelle tjenester, koordinert lønnsdannelse og aktiv arbeidsmarkedspolitikk – har vist seg robuste gjennom mange kriser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Inntektsfordeling og ulikhet

- **Lorenzkurven** viser grafisk hvordan inntekten er fordelt i et samfunn.
- **Gini-koeffisienten** er et tall mellom 0 og 1 som måler ulikhet – lavere tall betyr mer likhet.
- **Inntektsomfordeling** skjer gjennom progressiv beskatning, overføringer og universelle tjenester.
- **Den nordiske velferdsmodellen** gir lav ulikhet, høy sosial mobilitet og høy tillit.
- Ulikhet er et avveiingsspørsmål: Noe ulikhet gir insentiver, men for mye ulikhet svekker samfunnet.
- Norges Gini-koeffisient (ca. 0,27 etter skatt) er blant verdens laveste.`,
    },
    {
      id: 'soe-5-5-samle-1',
      type: 'exercise',
      exercise: {
        id: 'soe-5-5-samle-1',
        number: '5.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gini-koeffisienten i Norge har økt noe de siste tiårene. Gjør rede for mulige årsaker til dette, og drøft om utviklingen er bekymringsfull.',
        hints: [
          'Tenk på trender som økte kapitalinntekter, innvandring, endringer i arbeidsmarkedet og skattepolitikk.',
          'Vurder hva økningen betyr i praksis – er Norge fortsatt et land med lav ulikhet?',
        ],
        solution: 'Mulige årsaker til økt Gini i Norge: Økte kapitalinntekter (aksjeutbytte, boligpriser) som tilfaller de rikeste. Globalisering og teknologisk endring som øker etterspørselen etter høy kompetanse relativt til lav kompetanse. Innvandring som har økt andelen med lav inntekt. Skatteendringer som har redusert omfordelingseffekten noe. Økt andel deltidsarbeid og midlertidige ansettelser. Vurdering: Selv om ulikheten har økt, er Norge fortsatt blant verdens mest egalitære land. Den absolutte økningen er liten (fra ca. 0,24 til 0,27). Men trenden er viktig å følge, fordi økt ulikhet kan undergrave tilliten og den sosiale kontrakten som den norske modellen bygger på. Tidlig inngripen – gjennom utdanning, skattepolitikk og arbeidsmarkedstiltak – er enklere enn å reversere etablert ulikhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-5-5-samle-2',
      type: 'exercise',
      exercise: {
        id: 'soe-5-5-samle-2',
        number: '5.5.7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende påstander om den nordiske velferdsmodellen er mest korrekt?',
        multipleChoiceOptions: [
          'Den kombinerer universelle velferdsordninger med koordinert lønnsdannelse og aktiv arbeidsmarkedspolitikk',
          'Den gir alle borgere lik inntekt uavhengig av jobb og utdanning',
          'Den avskaffet alle skatter for å stimulere økonomisk vekst',
          'Den lar markedet alene bestemme fordelingen av inntekt',
        ],
        hints: ['Tenk på kjennetegnene ved de nordiske landene: høy skatt, universelle tjenester, trepartssamarbeid.'],
        solution: 'Den nordiske velferdsmodellen kjennetegnes av universelle velferdsordninger (alle har rett til helse, utdanning, eldreomsorg), koordinert lønnsdannelse gjennom trepartssamarbeidet, og aktiv arbeidsmarkedspolitikk. Den gir ikke lik inntekt til alle, men sikrer et sterkt sikkerhetsnett og relativt små forskjeller. Modellen bruker markedsmekanismer, men med betydelig offentlig regulering og omfordeling.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SAMFOKONOMI_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_1_5_1, CHAPTER_SAMFOKONOMI_1_5_2, CHAPTER_SAMFOKONOMI_1_5_3,
  CHAPTER_SAMFOKONOMI_1_5_4, CHAPTER_SAMFOKONOMI_1_5_5,
];
