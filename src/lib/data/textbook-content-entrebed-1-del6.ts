/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Entreprenørskap og bedriftsutvikling 1 (VG2) - Del 6: Organisering og ledelse
 *
 * Følger LK20 læreplan for entreprenørskap og bedriftsutvikling.
 * Delkapitler 6.1 - 6.5
 *
 * Kompetansemål:
 * - gjøre rede for ulike organisasjonsformer og vurdere hvilken som passer for ulike virksomheter
 * - planlegge, gjennomføre og lede prosjekter med utgangspunkt i teamarbeid og samarbeid
 * - drøfte ulike lederstiler og motivasjonsteorier og vurdere hvordan de påvirker en virksomhet
 * - presentere og kommunisere forretningsideer og prosjekter på en overbevisende måte
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Organisasjonsformer
// ============================================================================

export const CHAPTER_ENTREBED_1_6_1: TextbookChapter = {
  id: 'entrebed-1-6-1',
  courseId: 'entrebed-1',
  chapterNumber: '6.1',
  title: 'Organisasjonsformer',
  description: 'Enkeltpersonforetak, ansvarlig selskap og aksjeselskap — kjennetegn, fordeler og ulemper, og hvordan du velger riktig organisasjonsform for din virksomhet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for ulike organisasjonsformer og vurdere hvilken som passer for ulike virksomheter',
  ],
  content: [
    {
      id: 'eb-6-1-intro',
      type: 'text',
      content: `# Organisasjonsformer

Når du skal starte en virksomhet, er et av de første valgene du må ta hvilken **organisasjonsform** selskapet skal ha. Dette valget påvirker alt fra hvordan du beskattes, hvor mye personlig risiko du tar, og hvordan beslutninger fattes.

I Norge finnes det flere organisasjonsformer, men de tre vanligste for gründere er:

1. **Enkeltpersonforetak (ENK)** — enklest å starte, én eier
2. **Ansvarlig selskap (ANS/DA)** — to eller flere eiere med personlig ansvar
3. **Aksjeselskap (AS)** — begrenset ansvar, men strengere krav

Valget av organisasjonsform er ikke endelig — det er mulig å endre underveis. Mange gründere starter med enkeltpersonforetak og omdanner til aksjeselskap når virksomheten vokser. Men det er lurt å tenke gjennom valget grundig fra starten, fordi omdanning innebærer kostnader og papirarbeid.

**Registrering i Brønnøysundregistrene:**
Alle virksomheter i Norge må registreres i Enhetsregisteret hos Brønnøysundregistrene. Der får selskapet et organisasjonsnummer som brukes i all kontakt med offentlige myndigheter, banker og samarbeidspartnere.`,
    },
    {
      id: 'eb-6-1-def-enk',
      type: 'definition',
      title: 'Enkeltpersonforetak (ENK)',
      content: `Et **enkeltpersonforetak** er en virksomhet som eies av én person. Eieren og selskapet er juridisk sett én og samme enhet.

**Kjennetegn:**
- Én eier som har fullt ansvar for all gjeld og forpliktelser (ubegrenset personlig ansvar)
- Ingen krav til startkapital
- Enkel registrering — kan gjøres gratis i Brønnøysundregistrene
- Eieren beskattes personlig for overskuddet
- Kan ikke ha ansatte medhjelpere som medeiere (men kan ha ansatte)

**Viktig:** Ubegrenset personlig ansvar betyr at dersom virksomheten går konkurs, kan kreditorene kreve dekning i eierens private eiendeler — hus, bil og sparepenger.`,
    },
    {
      id: 'eb-6-1-text-ans',
      type: 'text',
      content: `## Ansvarlig selskap (ANS og DA)

Et ansvarlig selskap er en virksomhet med to eller flere eiere (deltakere) som har personlig ansvar for selskapets forpliktelser. Det finnes to varianter:

**ANS — Ansvarlig selskap:**
Deltakerne har **solidarisk** ansvar. Det betyr at hver enkelt deltaker kan holdes ansvarlig for hele selskapets gjeld. Dersom én deltaker ikke kan betale, kan kreditorene kreve hele beløpet fra de andre.

**DA — Selskap med delt ansvar:**
Deltakerne har ansvar for en **bestemt andel** av selskapets gjeld. Ansvaret er fordelt etter eierandel, og hver deltaker risikerer bare sin forholdsmessige del.

**Kjennetegn for begge:**
- To eller flere eiere (deltakere)
- Personlig ansvar for selskapets forpliktelser
- Ingen krav til startkapital
- Selskapsavtale bør utformes (anbefalt, ikke lovpålagt for DA)
- Overskudd fordeles etter avtale og beskattes hos deltakerne personlig

**Typisk for:** Advokatfirmaer, konsulentselskaper og mindre virksomheter der partnerne bidrar med kompetanse og jobber tett sammen. Mange ungdomsbedrifter (UB) organiseres som ansvarlig selskap.`,
    },
    {
      id: 'eb-6-1-def-as',
      type: 'definition',
      title: 'Aksjeselskap (AS)',
      content: `Et **aksjeselskap** er en selvstendig juridisk enhet der eiernes ansvar er **begrenset til aksjekapitalen** de har skutt inn.

**Kjennetegn:**
- Eget rettssubjekt — selskapet eier seg selv og har egne rettigheter og forpliktelser
- Minst 30 000 kr i aksjekapital ved stiftelse
- Eierne (aksjonærene) risikerer bare pengene de har investert
- Styret og daglig leder har ansvar for driften
- Strengere krav til regnskap, revisjon og rapportering
- Overskudd kan deles ut som utbytte til aksjonærene

**Viktig:** Begrenset ansvar betyr at aksjonærene ikke risikerer private eiendeler dersom selskapet går konkurs. De kan bare tape aksjekapitalen sin. Dette gjør AS til den tryggeste organisasjonsformen for eierne.

**Styringsstruktur:**
Generalforsamling (alle aksjonærer) → Styre → Daglig leder → Ansatte`,
    },
    {
      id: 'eb-6-1-text-sammenligning',
      type: 'text',
      content: `## Sammenligning av organisasjonsformene

Valg av organisasjonsform bør baseres på flere faktorer: antall eiere, økonomisk risiko, kapitalbehov og ambisjoner for vekst.

| | ENK | ANS/DA | AS |
|---|---|---|---|
| **Antall eiere** | 1 | 2+ | 1+ |
| **Ansvar** | Ubegrenset | Ubegrenset (ANS: solidarisk, DA: delt) | Begrenset til aksjekapital |
| **Startkapital** | Ingen krav | Ingen krav | Minst 30 000 kr |
| **Registrering** | Enkel og gratis | Enkel | Mer krevende, koster gebyr |
| **Beskatning** | Personlig | Personlig hos deltakerne | Selskapet beskattes, utbytte ekstrabeskattes |
| **Regnskap** | Forenklet | Forenklet/full | Full regnskapsplikt |
| **Egnet for** | Frilansere, hobby | Partnere, småskala | Vekstbedrifter, investorer |

**Hovedregelen:**
- **Lav risiko, én eier, enkel drift** → ENK
- **Samarbeid mellom få partnere, lav risiko** → ANS/DA
- **Vekstambisjoner, behov for investorer, høyere risiko** → AS`,
    },
    {
      id: 'eb-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Valg av organisasjonsform',
      problem: 'Sara vil starte en nettbutikk for håndlagde smykker. Hun jobber alene, har begrenset startkapital og vil teste om ideen fungerer. Marte og Erik vil starte et programvareselskap. De planlegger å søke investorer og ansette folk om et år. Hvilken organisasjonsform bør de velge?',
      solution: `**Sara bør velge ENK:**
- Hun jobber alene (én eier)
- Ingen krav til startkapital passer hennes situasjon
- Enkel registrering gjør at hun raskt kan komme i gang
- Risikoen er begrenset fordi hun lager smykker og ikke tar opp store lån
- Dersom virksomheten vokser, kan hun omdanne til AS senere

**Marte og Erik bør velge AS:**
- De planlegger å hente inn investorer — dette krever AS-form fordi investorer kjøper aksjer
- Begrenset ansvar beskytter dem personlig dersom selskapet ikke lykkes
- Programvareutvikling kan innebære store kostnader før inntektene kommer — AS begrenser den personlige risikoen
- De trenger en profesjonell struktur med styre og daglig leder
- 30 000 kr i aksjekapital er en overkommelig investering

**Lærdommen:** Organisasjonsformen bør matche virksomhetens størrelse, risikoprofil og vekstambisjoner. Det finnes ikke én riktig form — det handler om å velge den som passer best for din situasjon.`,
    },
    {
      id: 'eb-6-1-tip-1',
      type: 'tip',
      title: 'NUF — Norskregistrert utenlandsk foretak',
      content: `I tillegg til ENK, ANS/DA og AS finnes det andre organisasjonsformer. **NUF** (Norskregistrert utenlandsk foretak) ble tidligere brukt av noen for å unngå kravet om aksjekapital, ved å registrere et selskap i utlandet (f.eks. Storbritannia) og opprette en norsk avdeling. Etter at aksjekapitalkravet for AS ble senket til 30 000 kr i 2012, har NUF blitt langt mindre populært.

**Andre organisasjonsformer:**
- **Samvirkeforetak (SA):** Medlemseid, vanlig i landbruk (f.eks. Tine, Nortura)
- **Stiftelse:** Selveiende, brukes for ideelle formål
- **Forening:** Medlemsorganisasjon uten profittmotiv`,
    },
    {
      id: 'eb-6-1-note-1',
      type: 'note',
      title: 'Ungdomsbedrift (UB)',
      content: `Dersom du driver en **ungdomsbedrift** gjennom Ungt Entreprenørskap, er dette en egen organisasjonsform som ligner på et ansvarlig selskap. UB-deltakerne har personlig ansvar, men ansvaret er begrenset til den kapitalen som er skutt inn. Ungdomsbedriften registreres hos Ungt Entreprenørskap, ikke i Brønnøysundregistrene.`,
    },
  ],
  exercises: [
    {
      id: 'eb-6-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er minimumskravet til aksjekapital for å stifte et aksjeselskap (AS) i Norge?',
      options: [
        { id: 'a', text: '10 000 kr', isCorrect: false },
        { id: 'b', text: '30 000 kr', isCorrect: true },
        { id: 'c', text: '100 000 kr', isCorrect: false },
        { id: 'd', text: 'Det er ingen krav til aksjekapital', isCorrect: false },
      ],
      solution: 'Siden 2012 har minstekravet til aksjekapital i et AS vært 30 000 kr. Beløpet ble senket fra 100 000 kr for å gjøre det lettere for gründere å starte aksjeselskap.',
    },
    {
      id: 'eb-6-1-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr det at eierne i et ENK har «ubegrenset personlig ansvar»?',
      options: [
        { id: 'a', text: 'Eieren kan bare tape pengene som er skutt inn i selskapet', isCorrect: false },
        { id: 'b', text: 'Eieren risikerer at private eiendeler kan brukes til å dekke selskapets gjeld', isCorrect: true },
        { id: 'c', text: 'Eieren har ansvar for ansattes handlinger, men ikke for gjeld', isCorrect: false },
        { id: 'd', text: 'Eieren har ansvar bare i de første fem årene', isCorrect: false },
      ],
      solution: 'Ubegrenset personlig ansvar betyr at det ikke er noe skille mellom eierens og virksomhetens økonomi. Kreditorene kan kreve dekning i eierens private eiendeler — hus, bil og sparepenger — dersom virksomheten ikke kan betale gjelden sin.',
    },
    {
      id: 'eb-6-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den viktigste forskjellen mellom ANS og DA?',
      options: [
        { id: 'a', text: 'ANS har begrenset ansvar, DA har ubegrenset ansvar', isCorrect: false },
        { id: 'b', text: 'I ANS har deltakerne solidarisk ansvar, i DA har de delt ansvar etter eierandel', isCorrect: true },
        { id: 'c', text: 'ANS krever minst tre deltakere, DA krever minst to', isCorrect: false },
        { id: 'd', text: 'ANS må registreres i Brønnøysundregistrene, DA trenger ikke det', isCorrect: false },
      ],
      solution: 'I et ANS kan hver deltaker holdes ansvarlig for hele selskapets gjeld (solidarisk ansvar). I et DA er ansvaret fordelt etter eierandel — hver deltaker risikerer bare sin forholdsmessige del av gjelden.',
    },
    {
      id: 'eb-6-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar styringsstrukturen i et aksjeselskap. Hvem har den øverste myndigheten, og hva er styrets rolle?',
      solution: 'Generalforsamlingen er den øverste myndigheten i et aksjeselskap. Den består av alle aksjonærer og fatter beslutninger om store spørsmål som vedtektsendringer, valg av styre og godkjenning av årsregnskap. Styret velges av generalforsamlingen og har ansvar for den overordnede forvaltningen av selskapet — de setter strategi, fører tilsyn med daglig leder og sikrer at selskapet drives forsvarlig. Daglig leder står for den løpende driften og rapporterer til styret.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'To venner vil starte en kafé sammen. De har 50 000 kr i startkapital til sammen og er usikre på om de bør velge ANS eller AS. Drøft fordeler og ulemper med begge alternativene, og gi en anbefaling.',
      solution: 'ANS: Fordeler er at det er enklere og billigere å starte, ingen krav til aksjekapital, og forenklet regnskap. Ulemper er ubegrenset personlig ansvar (solidarisk i ANS), noe som er risikabelt i serveringsbransjen der det kan oppstå store kostnader. AS: Fordeler er begrenset ansvar (de risikerer bare aksjekapitalen på 50 000 kr), mer profesjonell fremtoning overfor leverandører og bank, og lettere å ta inn nye eiere senere. Ulemper er mer papirarbeid og strengere regnskapskrav. Anbefaling: AS er trolig best fordi kafédrift innebærer økonomisk risiko (husleie, lønninger, vareinnkjøp), og begrenset ansvar beskytter deres private økonomi. De har nok kapital til å oppfylle minstekravet på 30 000 kr.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvorfor det store flertallet av norske virksomheter med ansatte velger aksjeselskap som organisasjonsform. Trekk inn fordeler og ulemper med AS sammenlignet med ENK og ANS/DA, og vurder når det likevel kan være fornuftig å velge en annen organisasjonsform.',
      solution: 'De fleste velger AS fordi begrenset ansvar beskytter eiernes personlige økonomi, det gir en profesjonell struktur med klare roller, investorer og banker foretrekker AS-formen, og det er enklere å ta inn nye eiere eller selge aksjer. Skattemessig kan AS være gunstig fordi selskapet beskattes med 22 % og utbytte kan utsettes. Ulempene med AS — mer papirarbeid og krav om aksjekapital — oppveies av fordelene for de fleste bedrifter med ansatte. ENK kan likevel passe for frilansere og konsulenter med lav risiko, der enkelhet og lave kostnader er viktigere enn ansvarsbegrensning. ANS/DA kan passe for profesjonsvirksomheter som advokatfirmaer der partnerne har tillit til hverandre og ønsker fleksibel overskuddsdeling.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 6.2: Teamarbeid og roller
// ============================================================================

export const CHAPTER_ENTREBED_1_6_2: TextbookChapter = {
  id: 'entrebed-1-6-2',
  courseId: 'entrebed-1',
  chapterNumber: '6.2',
  title: 'Teamarbeid og roller',
  description: 'Teamdynamikk, Belbins teamroller, hvordan bygge effektive team og håndtere konflikter i gruppearbeid.',
  estimatedMinutes: 24,
  competenceGoals: [
    'planlegge, gjennomføre og lede prosjekter med utgangspunkt i teamarbeid og samarbeid',
  ],
  content: [
    {
      id: 'eb-6-2-intro',
      type: 'text',
      content: `# Teamarbeid og roller

Svært få virksomheter bygges av én person alene. Bak nesten alle vellykkede bedrifter står et team av mennesker med ulike ferdigheter og perspektiver. Å forstå hvordan team fungerer — og hvorfor de noen ganger ikke fungerer — er avgjørende for enhver gründer.

Et **team** er noe mer enn en gruppe mennesker som jobber på samme sted. I et ekte team jobber medlemmene mot et felles mål, de er gjensidig avhengige av hverandre, og hvert medlem bidrar med noe unikt.

**Hvorfor teamarbeid?**
- Komplekse problemer krever ulike perspektiver og kompetanser
- Teamet kan oppnå mer enn summen av enkeltpersonene (synergieffekt)
- Arbeidsmengden fordeles, og spesialisering gir effektivitet
- Sosial støtte og motivasjon

**Når teamarbeid ikke fungerer:**
- «Gratispassasjerer» som lar andre gjøre jobben
- Uklar ansvarsfordeling
- Konflikter som ikke håndteres
- Gruppetenkning — alle er enige uten kritisk diskusjon`,
    },
    {
      id: 'eb-6-2-def-teamdynamikk',
      type: 'definition',
      title: 'Teamdynamikk',
      content: `**Teamdynamikk** beskriver de usynlige kreftene som påvirker hvordan teammedlemmer samhandler, kommuniserer og presterer. Dynamikken formes av personligheter, roller, maktforhold og kommunikasjonsmønstre.

**Bruce Tuckmans modell for teamutvikling** beskriver fire faser som de fleste team gjennomgår:

1. **Forming** (danning) — Teamet dannes. Medlemmene er høflige, usikre og avventende. Lite produktivt arbeid.
2. **Storming** (storming) — Konflikter oppstår. Uenighet om roller, arbeidsmåter og mål. En krevende, men nødvendig fase.
3. **Norming** (normering) — Teamet finner sin form. Felles normer og spilleregler etableres. Samarbeidet bedres.
4. **Performing** (ytelse) — Teamet presterer godt. Medlemmene stoler på hverandre, kommunikasjonen flyter og resultatene kommer.

Mange team sitter fast i storming-fasen fordi konflikter ikke håndteres konstruktivt. En god leder hjelper teamet gjennom denne fasen.`,
    },
    {
      id: 'eb-6-2-text-belbin',
      type: 'text',
      content: `## Belbins teamroller

Den britiske forskeren Meredith Belbin identifiserte ni ulike roller som trengs i et effektivt team. Poenget er ikke at hvert team trenger ni personer — én person kan fylle flere roller. Men et team der alle tenker likt og har samme styrker, vil mangle viktige perspektiver.

**De ni teamrollene delt i tre kategorier:**

**Handlingsorienterte roller:**
- **Iverksetter** — Disiplinert og pålitelig. Gjør planer om til handling. Kan være ufleksibel.
- **Pådriver** — Dynamisk og utålmodig. Presser teamet fremover. Kan virke provoserende.
- **Ferdigstiller** — Nøyaktig og samvittighetsfull. Sikrer kvalitet og at frister holdes. Kan bli for detaljfokusert.

**Sosiale roller:**
- **Koordinator** — Moden og trygg. Fordeler oppgaver og inkluderer alle. Kan oppfattes som delegerende.
- **Teamarbeider** — Samarbeidsvillig og diplomatisk. Lytter og demper konflikter. Kan ha vanskelig for å ta vanskelige avgjørelser.
- **Ressursinnhenter** — Utadvendt og entusiastisk. Finner kontakter og muligheter. Kan miste interessen etter den første begeistringen.

**Tankeorienterte roller:**
- **Idéskaper** — Kreativ og ukonvensjonell. Kommer med nye ideer. Kan glemme praktiske begrensninger.
- **Analytiker** — Nøktern og strategisk. Vurderer alternativer objektivt. Kan virke kritisk og demotiverende.
- **Spesialist** — Fokusert og engasjert. Har dyp fagkunnskap. Kan bli for smal i sin tilnærming.`,
    },
    {
      id: 'eb-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Teamsammensetning i en ungdomsbedrift',
      problem: 'En ungdomsbedrift med fire medlemmer skal utvikle og selge et produkt. Hvordan kan Belbins roller brukes for å fordele ansvar?',
      solution: `**Teamet:**
- **Anna** er kreativ og full av ideer → hun er **Idéskaper** og kan også ta rollen som **Ressursinnhenter** fordi hun er utadvendt
- **Bo** er strukturert og nøyaktig → han er **Ferdigstiller** og **Iverksetter**, og tar ansvar for produksjon og kvalitetssikring
- **Clara** er flink med folk og lytter godt → hun er **Koordinator** og **Teamarbeider**, og passer som daglig leder
- **David** er analytisk og kritisk → han er **Analytiker** og kan ta økonomiansvaret

**Manglende roller:**
Teamet mangler en sterk **Pådriver** som presser på tempo. Clara kan bevisst ta denne rollen i situasjoner der frister nærmer seg.

**Lærdommen:**
Det perfekte teamet finnes ikke, men ved å være bevisst på rollene kan teamet kompensere for svakheter. Det viktigste er at teamet er klar over sine styrker og mangler, og at de snakker åpent om det.`,
    },
    {
      id: 'eb-6-2-text-konflikter',
      type: 'text',
      content: `## Konflikthåndtering i team

Konflikter er uunngåelige i teamarbeid. Det avgjørende er ikke å unngå konflikter, men å håndtere dem konstruktivt. Forskere skiller mellom to typer konflikter:

**Sakskonflikt (oppgavekonflikt):**
Uenighet om hvordan arbeidet skal gjøres, hva som er den beste løsningen, eller hvilke prioriteringer som bør gjøres. Sakskonflikter er ofte **produktive** fordi de fører til bedre beslutninger gjennom diskusjon og kritisk tenkning.

**Personkonflikt (relasjonskonflikt):**
Konflikter knyttet til personligheter, kommunikasjonsstil eller følelser av å bli oversett. Personkonflikter er nesten alltid **destruktive** og må håndteres raskt.

**Fem strategier for konflikthåndtering (Thomas-Kilmann):**
1. **Konkurrere** — Vinne på den andres bekostning. Nødvendig i kriser, men skaper tapere.
2. **Samarbeide** — Finne løsninger som tilfredsstiller alle. Tidkrevende, men gir best resultat.
3. **Kompromiss** — Begge parter gir og tar. Raskt, men ingen er helt fornøyd.
4. **Unngå** — Utsette eller ignorere konflikten. Kan fungere for bagateller, men forverrer store konflikter.
5. **Tilpasse seg** — Gi etter for den andre. Bevarer relasjonen, men egne behov ignoreres.

**Beste praksis:**
Gode team løser sakskonflikter gjennom samarbeid og diskusjon, og tar personkonflikter tidlig — før de vokser seg store. En enkel regel er: «Kritisér ideer, ikke personer.»`,
    },
    {
      id: 'eb-6-2-tip-1',
      type: 'tip',
      title: 'Teamkontrakt',
      content: `En **teamkontrakt** er en skriftlig avtale som teamet lager i starten av et samarbeid. Den beskriver:

- **Mål:** Hva skal teamet oppnå?
- **Roller:** Hvem har ansvar for hva?
- **Spilleregler:** Hvordan kommuniserer vi? Når har vi møter? Hva er frister?
- **Konflikthåndtering:** Hva gjør vi når det oppstår uenighet?
- **Konsekvenser:** Hva skjer dersom noen ikke bidrar?

En teamkontrakt forebygger konflikter fordi forventningene er avklart på forhånd. Den er spesielt nyttig i ungdomsbedrifter og prosjektgrupper der medlemmene ikke har jobbet sammen før.`,
    },
    {
      id: 'eb-6-2-note-1',
      type: 'note',
      title: 'Gratispassasjerproblemet',
      content: `Et av de vanligste problemene i teamarbeid er **gratispassasjerer** — medlemmer som bidrar lite, men drar nytte av gruppens arbeid. Forskning viser at gratispassasjerproblemet er vanligst i store team med uklar ansvarsfordeling. Tiltak: tydelige, individuelle ansvarsområder, jevnlige statusmøter og hverandrevurdering.`,
    },
  ],
  exercises: [
    {
      id: 'eb-6-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner «storming»-fasen i Tuckmans modell?',
      options: [
        { id: 'a', text: 'Teamet presterer på sitt beste og leverer gode resultater', isCorrect: false },
        { id: 'b', text: 'Medlemmene er høflige og avventende', isCorrect: false },
        { id: 'c', text: 'Konflikter og uenigheter oppstår om roller og arbeidsmåter', isCorrect: true },
        { id: 'd', text: 'Teamet har etablert felles normer og spilleregler', isCorrect: false },
      ],
      solution: 'Storming-fasen kjennetegnes av konflikter og uenigheter. Teammedlemmene begynner å utfordre hverandres ideer og kjemper om roller og innflytelse. Denne fasen er krevende, men nødvendig for at teamet skal utvikle seg.',
    },
    {
      id: 'eb-6-2-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av Belbins teamroller er kjent for å være kreativ og komme med nye ideer?',
      options: [
        { id: 'a', text: 'Ferdigstiller', isCorrect: false },
        { id: 'b', text: 'Idéskaper', isCorrect: true },
        { id: 'c', text: 'Iverksetter', isCorrect: false },
        { id: 'd', text: 'Analytiker', isCorrect: false },
      ],
      solution: 'Idéskaperen er den kreative rollen i Belbins modell. Denne personen er ukonvensjonell, tenker nytt og kommer med originale løsninger. Svakheten er at idéskapere kan glemme praktiske begrensninger.',
    },
    {
      id: 'eb-6-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type konflikt er vanligvis produktiv i et team?',
      options: [
        { id: 'a', text: 'Personkonflikt (relasjonskonflikt)', isCorrect: false },
        { id: 'b', text: 'Sakskonflikt (oppgavekonflikt)', isCorrect: true },
        { id: 'c', text: 'Statuskonflikt', isCorrect: false },
        { id: 'd', text: 'Alle typer konflikter er destruktive', isCorrect: false },
      ],
      solution: 'Sakskonflikter — uenighet om oppgaver, løsninger og prioriteringer — er ofte produktive fordi de fører til bedre beslutninger gjennom diskusjon og kritisk tenkning. Personkonflikter derimot er nesten alltid destruktive og bør håndteres raskt.',
    },
    {
      id: 'eb-6-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar Tuckmans fire faser for teamutvikling. Gi et eksempel på hva som kan skje i hver fase i en ungdomsbedrift.',
      solution: 'Forming: UB-gruppen møtes for første gang, alle er høflige og forsiktige, de diskuterer hva de skal lage uten å komme til enighet. Storming: To medlemmer krangler om hvem som skal være daglig leder, en tredje føler seg oversett, og det er uenighet om produktidé. Norming: Gruppen lager en teamkontrakt med klare roller, de blir enige om å stemme over uenigheter, og kommunikasjonen bedres. Performing: Teamet jobber effektivt, alle vet sin rolle, de leverer god kvalitet og støtter hverandre i stressede perioder.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'I en ungdomsbedrift med fem medlemmer oppdager dere at to av medlemmene sjelden møter opp til arbeidsmøter og bidrar lite til prosjektet. Bruk Thomas-Kilmanns modell for konflikthåndtering til å drøfte ulike måter å håndtere situasjonen på, og anbefal en tilnærming.',
      solution: 'Konkurrere: Lederen konfronterer de to og truer med konsekvenser. Kan virke raskt, men kan ødelegge relasjonen. Samarbeide: Hele gruppen setter seg ned og diskuterer åpent — kanskje de to har utfordringer som kan løses (andre forpliktelser, usikkerhet om oppgaver). Beste langsiktige løsning. Kompromiss: De to tar på seg noen spesifikke, avgrensede oppgaver som passer deres situasjon. Unngå: Ignorere problemet og håpe det løser seg — vil sannsynligvis forverres. Tilpasse seg: De tre aktive tar over alt arbeidet — urettferdig og demotiverende. Anbefaling: Start med samarbeid — innkall til et ærlig møte der alle kan si sin mening uten å bli dømt. Referer til teamkontrakten (hvis den finnes) og bli enige om konkrete tiltak med tidsfrister. Dersom dette ikke hjelper, kan lederen bruke en mer konkurrerende stil med tydelige konsekvenser.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft om det finnes en «ideell teamsammensetning» ifølge Belbins teori. Hva kan skje dersom et team har for mange idéskapere og for få iverksettere — eller omvendt?',
      solution: 'Ifølge Belbin finnes det ikke én ideell sammensetning, men et godt team trenger en balanse av handlingsorienterte, sosiale og tankeorienterte roller. Et team med mange idéskapere men få iverksettere vil generere mange kreative forslag, men slite med å gjennomføre dem — de vil stadig skifte retning uten å levere konkrete resultater. Et team med mange iverksettere men få idéskapere vil være effektive på å utføre oppgaver, men mangler innovasjon og kan bli fastlåst i rutiner. Det ideelle er et team der rollene utfyller hverandre. Én person kan fylle flere roller, så et lite team kan likevel ha god dekning. Det viktigste er at teamet er bevisst sine styrker og mangler og aktivt kompenserer for det de mangler.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 6.3: Ledelse og motivasjon
// ============================================================================

export const CHAPTER_ENTREBED_1_6_3: TextbookChapter = {
  id: 'entrebed-1-6-3',
  courseId: 'entrebed-1',
  chapterNumber: '6.3',
  title: 'Ledelse og motivasjon',
  description: 'Ulike lederstiler, motivasjonsteorier fra Maslow og Herzberg, og hvordan ledelse påvirker medarbeidernes motivasjon og virksomhetens resultater.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte ulike lederstiler og motivasjonsteorier og vurdere hvordan de påvirker en virksomhet',
  ],
  content: [
    {
      id: 'eb-6-3-intro',
      type: 'text',
      content: `# Ledelse og motivasjon

Ledelse handler om å påvirke andre til å jobbe mot felles mål. En god leder får medarbeiderne til å yte sitt beste — ikke gjennom tvang, men gjennom inspirasjon, tillit og tydelig retning.

For en gründer er ledelse spesielt utfordrende fordi du ofte må lede uten formell autoritet. I en oppstartsbedrift eller ungdomsbedrift handler ledelse mer om å motivere, koordinere og gå foran som et godt eksempel.

**Lederskap vs. administrasjon:**
- **Lederskap** handler om mennesker — inspirere, motivere, vise retning og skape engasjement
- **Administrasjon** handler om systemer — planlegge, organisere, kontrollere og rapportere

De beste lederne mestrer begge deler, men i en liten bedrift er lederskap ofte viktigere enn administrasjon. Det hjelper lite med perfekte systemer dersom ingen er motiverte til å gjøre jobben.`,
    },
    {
      id: 'eb-6-3-def-lederstiler',
      type: 'definition',
      title: 'Lederstiler',
      content: `En **lederstil** er måten en leder utøver sitt lederskap på — hvordan beslutninger fattes, oppgaver fordeles og medarbeidere involveres. De tre klassiske lederstilene er:

**Autoritær ledelse:**
Lederen tar alle beslutninger selv og gir klare ordrer. Medarbeiderne har lite innflytelse. Passer i krisesituasjoner der raske beslutninger er nødvendige, men kan demotivere over tid.

**Demokratisk ledelse:**
Lederen involverer medarbeiderne i beslutningsprosessen. Ideer diskuteres, og avgjørelser tas i fellesskap. Gir høy motivasjon og engasjement, men kan være tidkrevende.

**Laissez-faire ledelse (la-det-skure):**
Lederen gir medarbeiderne stor frihet og blander seg lite inn. Kan fungere godt med selvstendige, kompetente medarbeidere, men kan føre til kaos dersom teamet mangler retning.`,
    },
    {
      id: 'eb-6-3-text-situasjonsbestemt',
      type: 'text',
      content: `## Situasjonsbestemt ledelse

Moderne ledelsesteori understreker at det ikke finnes én lederstil som alltid er best. **Situasjonsbestemt ledelse** (Hersey og Blanchard) handler om å tilpasse lederstilen til situasjonen og medarbeidernes modenhet.

**Fire tilnærminger basert på medarbeiderens kompetanse og motivasjon:**

1. **Instruerende** — Når medarbeideren er ny og usikker: gi tydelige instruksjoner og tett oppfølging. Mye styring, lite støtte.
2. **Coachende** — Når medarbeideren har noe kompetanse, men trenger veiledning: forklar hvorfor, still spørsmål og oppmuntre. Mye styring, mye støtte.
3. **Støttende** — Når medarbeideren er kompetent, men usikker: gi rom for selvstendighet, men vær tilgjengelig for råd. Lite styring, mye støtte.
4. **Delegerende** — Når medarbeideren er erfaren og selvstendig: overlat ansvar og la dem jobbe fritt. Lite styring, lite støtte.

**Praktisk eksempel:**
I en ungdomsbedrift kan lederen bruke instruerende stil i oppstarten (alle er nye), gå over til coachende etter noen uker (folk lærer, men trenger veiledning), og etter hvert delegere mer ansvar etter hvert som teamet modnes.`,
    },
    {
      id: 'eb-6-3-def-maslow',
      type: 'definition',
      title: 'Maslows behovshierarki',
      content: `Abraham **Maslow** presenterte i 1943 sin teori om at menneskets behov er organisert i et hierarki. Lavere behov må tilfredsstilles før de høyere behovene blir viktige som motivasjonskraft.

**De fem nivåene (fra bunn til topp):**
1. **Fysiologiske behov** — Mat, vann, søvn, husly. I arbeidslivet: lønn nok til å dekke grunnleggende levekostnader.
2. **Trygghetsbehov** — Sikkerhet, stabilitet, forutsigbarhet. I arbeidslivet: fast ansettelse, trygge arbeidsforhold, pensjon.
3. **Sosiale behov** — Tilhørighet, vennskap, fellesskap. I arbeidslivet: godt arbeidsmiljø, gode kolleger, sosiale arrangementer.
4. **Anerkjennelse** — Respekt, status, mestring. I arbeidslivet: ros, forfremmelse, ansvar, synlige resultater.
5. **Selvrealisering** — Personlig vekst, kreativitet, mening. I arbeidslivet: utfordrende oppgaver, mulighet til å utvikle seg, autonomi.

**Kritikk av Maslow:** Behovene er ikke alltid hierarkiske — noen mennesker ofrer trygghet for selvrealisering (f.eks. gründere som sier opp trygge jobber). Kulturelle forskjeller spiller også inn.`,
    },
    {
      id: 'eb-6-3-def-herzberg',
      type: 'definition',
      title: 'Herzbergs tofaktorteori',
      content: `Frederick **Herzberg** utviklet sin tofaktorteori basert på forskning om hva som gjør arbeidstakere tilfredse og utilfredse. Han fant at tilfredshet og utilfredshet ikke er motpoler, men to ulike dimensjoner.

**Hygienefaktorer** (forhindrer misnøye):
- Lønn og arbeidsvilkår
- Jobbsikkerhet
- Ledelse og administrasjon
- Fysiske arbeidsforhold
- Relasjoner til kolleger

Dersom hygienefaktorene er dårlige, blir medarbeiderne misfornøyde. Men selv om de er gode, skaper de ikke motivasjon — bare fravær av misnøye.

**Motivasjonsfaktorer** (skaper engasjement):
- Meningsfulle arbeidsoppgaver
- Ansvar og autonomi
- Mulighet for personlig vekst
- Anerkjennelse og ros
- Prestasjoner og resultater

**Herzbergs poeng:** Høyere lønn fjerner misnøye, men skaper sjelden varig motivasjon. Det er de indre faktorene — ansvar, utvikling og anerkjennelse — som virkelig motiverer mennesker.`,
    },
    {
      id: 'eb-6-3-text-praksis',
      type: 'text',
      content: `## Motivasjon i praksis

Teoriene til Maslow og Herzberg gir gründere konkrete verktøy for å skape et motiverende arbeidsmiljø:

**Sørg for at det grunnleggende er på plass (hygienefaktorer):**
- Rettferdig lønn som dekker folks behov
- Trygge og rene arbeidsforhold
- Ryddig ledelse uten tilfeldigheter
- Forutsigbare rutiner og klare forventninger

**Bygg motivasjon gjennom indre faktorer:**
- Gi medarbeiderne ansvar og tillit
- Anerkjenn gode prestasjoner — si det høyt
- Skap muligheter for læring og utvikling
- La folk jobbe med oppgaver de brenner for
- Involver medarbeiderne i beslutninger som angår dem

**Eksempel: Google**
Google er kjent for å gi ansatte 20 % av arbeidstiden til egne prosjekter (autonomi og selvrealisering). De har også gratis mat, treningsrom og fleksibel arbeidstid (sterke hygienefaktorer). Gmail og Google Maps ble begge utviklet i denne «20 %-tiden» — noe som viser at indre motivasjon gir resultater.

**Eksempel: For gründere og ungdomsbedrifter**
I en ungdomsbedrift har du sjelden mulighet til å motivere med lønn. Da blir Herzbergs motivasjonsfaktorer enda viktigere: gi folk ansvar, ros gode bidrag, og sørg for at alle føler at de bidrar til noe meningsfullt.`,
    },
    {
      id: 'eb-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Lederstil i praksis',
      problem: 'En ungdomsbedrift har en daglig leder som tar alle beslutninger selv uten å involvere teamet. Medlemmene begynner å miste motivasjonen. Hva er problemet, og hva bør endres?',
      solution: `**Problemet:**
Daglig leder bruker en autoritær lederstil der beslutninger fattes uten medarbeidernes innflytelse. Ifølge Herzbergs tofaktorteori mangler teammedlemmene motivasjonsfaktorer som ansvar, medbestemmelse og anerkjennelse. Ifølge Maslows hierarki er behovet for anerkjennelse og selvrealisering ikke ivaretatt.

**Løsning:**
1. Gå over til **demokratisk ledelse** der teamet involveres i beslutninger
2. **Deleger ansvar** — la hvert medlem «eie» sitt ansvarsområde
3. **Anerkjenn bidrag** — ros gode ideer og prestasjoner i fellesskap
4. **Tilpass lederstilen** etter situasjonen — bruk situasjonsbestemt ledelse der nye medlemmer får mer veiledning, mens erfarne får mer frihet

**Effekt:**
Medarbeiderne vil føle eierskap til prosjektet, motivasjonen øker, og kvaliteten på arbeidet bedres. Forskning viser konsistent at demokratisk ledelse gir bedre resultater i kreative oppgaver enn autoritær ledelse.`,
    },
    {
      id: 'eb-6-3-warning-1',
      type: 'warning',
      title: 'Indre vs. ytre motivasjon',
      content: `Forskning viser at **ytre motivasjon** (lønn, bonuser, premier) kan *undergrave* **indre motivasjon** (glede ved arbeidet, nysgjerrighet, mestringsfølelse). Dette kalles «overjustification effect». Dersom du begynner å belønne noe folk gjør av fri vilje med ytre belønninger, kan de miste den indre motivasjonen når belønningen forsvinner. For gründere betyr dette: bygge en kultur der folk motiveres av mening og mestring, ikke bare av penger.`,
    },
  ],
  exercises: [
    {
      id: 'eb-6-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner en demokratisk lederstil?',
      options: [
        { id: 'a', text: 'Lederen tar alle beslutninger alene og gir klare ordrer', isCorrect: false },
        { id: 'b', text: 'Lederen involverer medarbeiderne i beslutningsprosessen', isCorrect: true },
        { id: 'c', text: 'Lederen gir medarbeiderne full frihet uten noen form for styring', isCorrect: false },
        { id: 'd', text: 'Lederen fokuserer bare på administrative oppgaver', isCorrect: false },
      ],
      solution: 'Demokratisk ledelse kjennetegnes av at lederen involverer medarbeiderne i beslutninger. Ideer diskuteres, og avgjørelser tas i fellesskap. Dette gir høy motivasjon og engasjement, men kan være mer tidkrevende enn autoritær ledelse.',
    },
    {
      id: 'eb-6-3-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket nivå i Maslows behovshierarki handler om fellesskap og tilhørighet på arbeidsplassen?',
      options: [
        { id: 'a', text: 'Fysiologiske behov', isCorrect: false },
        { id: 'b', text: 'Trygghetsbehov', isCorrect: false },
        { id: 'c', text: 'Sosiale behov', isCorrect: true },
        { id: 'd', text: 'Selvrealisering', isCorrect: false },
      ],
      solution: 'Sosiale behov er det tredje nivået i Maslows hierarki og handler om tilhørighet, vennskap og fellesskap. I arbeidslivet dekkes dette gjennom godt arbeidsmiljø, gode kolleger og sosiale arrangementer.',
    },
    {
      id: 'eb-6-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Ifølge Herzbergs tofaktorteori — hva skjer dersom en bedrift gir sine ansatte høyere lønn?',
      options: [
        { id: 'a', text: 'De ansatte blir svært motiverte og yter betydelig bedre', isCorrect: false },
        { id: 'b', text: 'Misnøyen reduseres, men det skaper ikke nødvendigvis varig motivasjon', isCorrect: true },
        { id: 'c', text: 'Ingenting — lønn påvirker ikke trivsel i det hele tatt', isCorrect: false },
        { id: 'd', text: 'De ansatte vil umiddelbart kreve enda høyere lønn', isCorrect: false },
      ],
      solution: 'Ifølge Herzberg er lønn en hygienefaktor. Dårlig lønn skaper misnøye, men god lønn skaper bare fravær av misnøye — ikke motivasjon. Det er motivasjonsfaktorene (ansvar, anerkjennelse, meningsfulle oppgaver) som virkelig driver engasjement og ytelse.',
    },
    {
      id: 'eb-6-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom hygienefaktorer og motivasjonsfaktorer i Herzbergs tofaktorteori. Gi to eksempler på hver.',
      solution: 'Hygienefaktorer er forhold som forhindrer misnøye, men som ikke i seg selv skaper motivasjon. Eksempler: lønn (rettferdig betaling hindrer misnøye) og fysiske arbeidsforhold (rent og trygt kontor). Motivasjonsfaktorer er forhold som skaper ekte engasjement og tilfredshet. Eksempler: ansvar og autonomi (å få lede et eget prosjekt) og anerkjennelse (ros fra lederen for god innsats). Herzbergs poeng er at du må ha hygienefaktorene på plass for å unngå misnøye, men det er motivasjonsfaktorene som virkelig gjør at folk yter sitt beste.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvilken lederstil som egner seg best for en nystartet ungdomsbedrift der alle er uerfarne. Bruk teorien om situasjonsbestemt ledelse og Herzbergs motivasjonsteori i svaret ditt.',
      solution: 'Ifølge situasjonsbestemt ledelse bør lederen starte med en instruerende eller coachende stil fordi medarbeiderne er nye og uerfarne — de trenger klare retningslinjer og veiledning. Etter hvert som teamet utvikler kompetanse, bør lederen gradvis bevege seg mot en mer støttende og delegerende stil. Ifølge Herzberg må lederen sørge for hygienefaktorene (klare forventninger, trygt miljø) samtidig som motivasjonsfaktorene bygges opp (gi hvert medlem et meningsfullt ansvarsområde, anerkjenne bidrag). I praksis betyr dette: i de første ukene gir lederen tydelig retning og struktur (instruerende), men involverer teamet i viktige beslutninger (demokratisk). Etter hvert som teamet modnes, delegerer lederen mer ansvar. Den verste fellen er å bruke laissez-faire fra starten — et uerfaret team uten retning vil sannsynligvis mislykkes.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign Maslows og Herzbergs motivasjonsteorier. Hvilke likheter og forskjeller finnes? Vurder kritisk om teoriene er relevante for moderne arbeidsliv.',
      solution: 'Likheter: Begge skiller mellom grunnleggende/lavere behov og høyere behov. Maslows fysiologiske behov og trygghetsbehov tilsvarer Herzbergs hygienefaktorer. Maslows anerkjennelse og selvrealisering tilsvarer Herzbergs motivasjonsfaktorer. Begge mener at de høyere behovene/motivasjonsfaktorene er viktigst for varig motivasjon. Forskjeller: Maslow ser behovene som et hierarki der lavere nivåer må dekkes først, mens Herzberg ser to parallelle dimensjoner. Maslow er generell (alle behov), Herzberg er spesifikk for arbeidsliv. Kritikk: Teoriene er fra 1940-60-tallet og forskningen bak dem er diskutert. Moderne arbeidsliv med fjernarbeid, gig-økonomi og generasjon Z har endret hva som motiverer. Likevel er kjernebudskapet fortsatt relevant: folk motiveres av mening, mestring og autonomi — ikke bare av lønn.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 6.4: Kommunikasjon og presentasjon
// ============================================================================

export const CHAPTER_ENTREBED_1_6_4: TextbookChapter = {
  id: 'entrebed-1-6-4',
  courseId: 'entrebed-1',
  chapterNumber: '6.4',
  title: 'Kommunikasjon og presentasjon',
  description: 'Effektiv kommunikasjon i virksomheter, pitching av forretningsideer og presentasjonsteknikk for å overbevise investorer, kunder og samarbeidspartnere.',
  estimatedMinutes: 22,
  competenceGoals: [
    'presentere og kommunisere forretningsideer og prosjekter på en overbevisende måte',
  ],
  content: [
    {
      id: 'eb-6-4-intro',
      type: 'text',
      content: `# Kommunikasjon og presentasjon

For en gründer er kommunikasjon like viktig som selve produktet. Du kan ha verdens beste forretningsidé, men dersom du ikke klarer å formidle den — til investorer, kunder, partnere og ansatte — blir den aldri noe mer enn en idé.

Kommunikasjon i en virksomhet handler om å overføre informasjon, ideer og meninger slik at mottakeren forstår budskapet. Men effektiv kommunikasjon er mer enn bare å sende et budskap — det handler om å sikre at mottakeren tolker det slik du mente det.

**Kommunikasjonsmodellen:**
Enhver kommunikasjon har fire hovedelementer:
1. **Sender** — den som formidler budskapet
2. **Budskap** — innholdet som kommuniseres
3. **Kanal** — mediet budskapet sendes gjennom (tale, e-post, presentasjon, sosiale medier)
4. **Mottaker** — den som mottar og tolker budskapet

**Støy** er alt som forstyrrer kommunikasjonen — fysisk støy, språklige misforståelser, kulturelle forskjeller eller følelsesmessige barrierer. God kommunikasjon handler om å minimere støy.`,
    },
    {
      id: 'eb-6-4-def-kommunikasjon',
      type: 'definition',
      title: 'Intern og ekstern kommunikasjon',
      content: `**Intern kommunikasjon** er kommunikasjonen innad i virksomheten — mellom ledelse og medarbeidere, mellom avdelinger og mellom kolleger.

**Former for intern kommunikasjon:**
- **Nedover:** Fra ledelse til medarbeidere (informasjon, instruksjoner)
- **Oppover:** Fra medarbeidere til ledelse (tilbakemeldinger, forslag, rapportering)
- **Horisontalt:** Mellom kolleger på samme nivå (koordinering, samarbeid)

**Ekstern kommunikasjon** er kommunikasjonen mellom virksomheten og omverdenen — kunder, investorer, leverandører, media og offentligheten.

**Former for ekstern kommunikasjon:**
- Markedsføring og reklame
- Kundeservice og henvendelser
- Pressemelding og mediekontakt
- Presentasjoner og pitching
- Sosiale medier og nettside`,
    },
    {
      id: 'eb-6-4-text-pitching',
      type: 'text',
      content: `## Pitching — å selge ideen din

En **pitch** er en kort, overbevisende presentasjon av en forretningsidé. Pitching er en av de viktigste ferdighetene for en gründer, enten du presenterer for investorer, kunder eller en jury i en ungdomsbedriftskonkurranse.

**Elevator pitch (heistalen):**
Forestill deg at du møter en potensiell investor i en heis og har 30-60 sekunder på å forklare ideen din. Hva sier du?

En god elevator pitch inneholder:
1. **Problemet** — Hvilket problem løser du? (1-2 setninger)
2. **Løsningen** — Hva er produktet/tjenesten din? (1-2 setninger)
3. **Hvorfor deg** — Hva gjør din løsning unik? (1 setning)
4. **Handlingsoppfordring** — Hva vil du at mottakeren skal gjøre? (1 setning)

**Eksempel på elevator pitch:**
«Visste du at 40 % av maten som produseres i Norge kastes? Vi har utviklet appen TooGood, som kobler butikker med overskuddsmat til prisbevisste forbrukere i nabolaget. Vi har allerede 500 brukere og 12 butikker i Oslo. Kan vi sette opp et møte for å diskutere samarbeid?»

**Investor pitch (5-10 minutter):**
En lengre pitch til investorer følger vanligvis en fast struktur med slides:
1. Problem og markedsmulighet
2. Løsning og produkt
3. Forretningsmodell (hvordan tjener dere penger?)
4. Markedsstørrelse og konkurranse
5. Teamet (hvem er dere?)
6. Traction (hva har dere oppnådd?)
7. Økonomiske mål og finansieringsbehov`,
    },
    {
      id: 'eb-6-4-text-presentasjonsteknikk',
      type: 'text',
      content: `## Presentasjonsteknikk

Å holde en god presentasjon er en ferdighet som kan læres. De beste presentatørene er ikke nødvendigvis de mest utadvendte — de er de best forberedte.

**Forberedelse:**
- **Kjenn publikum:** Hvem snakker du til? Investorer, kunder, medelever? Tilpass språk og innhold.
- **Kjenn budskapet:** Hva er de 2-3 viktigste poengene du vil at publikum skal huske?
- **Øv:** Presenter for speilet, for venner, for familien. Tid deg. Gjør det igjen.

**Gjennomføring:**
- **Sterk åpning:** Start med et spørsmål, en historie eller en overraskende statistikk. Aldri start med «Ehm, hei, jeg heter...»
- **Blikkontakt:** Se på publikum, ikke på skjermen. Veksle blikket mellom ulike deler av salen.
- **Kroppsspråk:** Stå stødig, bruk hendene naturlig, unngå å krysse armene. Beveg deg gjerne litt.
- **Stemmebruk:** Varier tempo og volum. Pauser er effektive — de gir publikum tid til å tenke.
- **Slides:** Støtteverktøy, ikke manus. Bruk bilder, korte punkter og lite tekst. Aldri les opp fra slides.

**Avslutning:**
- Oppsummer de viktigste poengene
- Avslutt med en tydelig handlingsoppfordring
- Åpne for spørsmål og svar med trygghet`,
    },
    {
      id: 'eb-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Pitch for en ungdomsbedrift',
      problem: 'En ungdomsbedrift har utviklet en gjenbrukbar matboks i bambus og skal pitche på fylkesmessa for ungdomsbedrifter. De har 3 minutter. Hvordan bør de strukturere pitchen?',
      solution: `**Struktur for en 3-minutters pitch:**

**0:00-0:30 — Åpning med problemet:**
«Hvert år kastes det 300 millioner engangsemballasjer bare i Norge. Vi spiser lunsjen vår fra plastbokser som ender i havet. Det ville vi gjøre noe med.»

**0:30-1:00 — Løsningen:**
«Vi har utviklet BambuBoks — en stilig, holdbar matboks laget av bærekraftig bambus. Den er lett, tåler oppvaskmaskin og varer i årevis. Og den ser mye bedre ut enn plastboksen din.»

**1:00-1:45 — Forretningsmodellen og resultater:**
«Vi selger BambuBoks til 189 kr per stykk via nettbutikk og lokale butikker. Produksjonskostnaden er 75 kr, som gir oss god margin. Hittil har vi solgt 120 bokser og omsatt for over 22 000 kr.»

**1:45-2:30 — Teamet og fremtidsplaner:**
«Vi er fire elever med kompetanse innen design, markedsføring, produksjon og økonomi. Neste steg er å lansere en serie med matchende bestikk og å inngå avtale med en nasjonal kjede.»

**2:30-3:00 — Avslutning:**
«BambuBoks gjør det enkelt å velge bærekraftig — uten å gi opp stil. Takk for oppmerksomheten. Vi svarer gjerne på spørsmål.»`,
    },
    {
      id: 'eb-6-4-tip-1',
      type: 'tip',
      title: 'Storytelling i forretningskommunikasjon',
      content: `Mennesker husker historier bedre enn fakta og tall. **Storytelling** er en kraftig teknikk i forretningskommunikasjon:

**Grunnstrukturen:**
1. **Helten** — kunden eller brukeren (ikke bedriften din)
2. **Problemet** — en utfordring helten står overfor
3. **Løsningen** — hvordan ditt produkt hjelper
4. **Resultatet** — hva som ble bedre

**Eksempel:**
I stedet for: «Vår app reduserer matsvinn med 30 %.»
Si: «Marie er student og har stramt budsjett. Hver kveld kastet hun mat fordi hun handlet for mye. Med TooGood-appen får hun nå varsler om overskuddsmat fra nærbutikken. Hun sparer 500 kr i måneden og kaster nesten ingenting.»

Samme informasjon, men historien skaper en emosjonell tilknytning som tall alene ikke gir.`,
    },
    {
      id: 'eb-6-4-note-1',
      type: 'note',
      title: 'Digitale presentasjonsverktøy',
      content: `Moderne presentasjoner kan bruke verktøy utover PowerPoint:

- **Canva** — Enkelt designverktøy med flotte maler, gratis for elever
- **Prezi** — Dynamiske, ikke-lineære presentasjoner
- **Google Slides** — Bra for samarbeid i sanntid
- **Pitch** — Moderne alternativ designet for forretningspresentasjoner

Uansett verktøy: husk at innholdet og fremføringen alltid er viktigere enn fancy animasjoner.`,
    },
  ],
  exercises: [
    {
      id: 'eb-6-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en «elevator pitch»?',
      options: [
        { id: 'a', text: 'En presentasjon med minst 20 slides', isCorrect: false },
        { id: 'b', text: 'En kort presentasjon på 30-60 sekunder som forklarer forretningsideen din', isCorrect: true },
        { id: 'c', text: 'En skriftlig forretningsplan sendt til investorer', isCorrect: false },
        { id: 'd', text: 'En presentasjon som bare holdes i heiser', isCorrect: false },
      ],
      solution: 'En elevator pitch er en kort, overbevisende presentasjon på 30-60 sekunder — omtrent den tiden du ville hatt i en heistur. Den inneholder problemet du løser, løsningen din, hva som gjør deg unik, og en handlingsoppfordring.',
    },
    {
      id: 'eb-6-4-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom intern og ekstern kommunikasjon?',
      options: [
        { id: 'a', text: 'Intern kommunikasjon er skriftlig, ekstern er muntlig', isCorrect: false },
        { id: 'b', text: 'Intern kommunikasjon foregår innad i virksomheten, ekstern kommunikasjon rettes mot omverdenen', isCorrect: true },
        { id: 'c', text: 'Intern kommunikasjon er formell, ekstern er uformell', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
      ],
      solution: 'Intern kommunikasjon foregår mellom personer innad i virksomheten — ledelse, avdelinger og kolleger. Ekstern kommunikasjon foregår mellom virksomheten og omverdenen — kunder, investorer, leverandører, media og offentligheten.',
    },
    {
      id: 'eb-6-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva bør du IKKE gjøre under en presentasjon?',
      options: [
        { id: 'a', text: 'Ha blikkontakt med publikum', isCorrect: false },
        { id: 'b', text: 'Variere tempo og volum i stemmen', isCorrect: false },
        { id: 'c', text: 'Lese opp all teksten fra slidesene', isCorrect: true },
        { id: 'd', text: 'Starte med en overraskende statistikk', isCorrect: false },
      ],
      solution: 'Du bør aldri lese opp teksten fra slides. Slides er et støtteverktøy, ikke et manus. De bør inneholde bilder, korte punkter og lite tekst. Publikum kan selv lese — din jobb er å tilføre noe utover det som står på skjermen.',
    },
    {
      id: 'eb-6-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv en elevator pitch (30-60 sekunder) for en selvvalgt forretningsidé. Pitchen skal inneholde: problemet, løsningen, hva som gjør den unik, og en handlingsoppfordring.',
      solution: 'En god elevator pitch følger strukturen: 1) Problemet — beskriv et reelt problem mange kjenner seg igjen i, 2) Løsningen — presenter produktet/tjenesten kort og konkret, 3) Unikhet — forklar hva som skiller deg fra konkurrentene, 4) Handlingsoppfordring — be om et møte, en investering eller et kjøp. Eksempel: «Visste du at norske elever bruker over 2000 kr i året på skolemateriell som bare brukes én gang? Vi har laget BookSwap, en app der elever kan kjøpe og selge brukte lærebøker direkte til hverandre. Til forskjell fra Finn.no er vi spesialisert for skoleelever med innebygd betalingsløsning og levering via skolens resepsjon. Last ned appen gratis og spar penger allerede i morgen.»',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvorfor storytelling er effektivt i forretningskommunikasjon. Bruk eksempler for å vise forskjellen mellom en faktabasert og en historiebasert presentasjon av det samme budskapet.',
      solution: 'Storytelling er effektivt fordi mennesker er biologisk programmert til å reagere på historier. Forskning viser at historier aktiverer flere deler av hjernen enn fakta alene — både de analytiske og de emosjonelle. Når en investor hører «appen vår har 500 brukere», registreres et tall. Men når investoren hører «Marie er student og sliter med å få endene til å møtes. Hver kveld kastet hun mat fordi hun ikke klarte å planlegge. Med appen vår fant hun overskuddsmat fra nærbutikken for halv pris — nå sparer hun 500 kr i måneden», oppstår en emosjonell tilknytning. Investoren ser Marie for seg, kjenner empati og forstår produktets verdi intuitivt. I tillegg er historier lettere å huske — studier viser at folk husker historier opptil 22 ganger bedre enn ren fakta. For en gründer betyr dette at en pitch med en god historie har mye større sjanse for å bli husket enn en pitch med bare tall og diagrammer.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du skal forberede en 5-minutters investorpitch for en ungdomsbedrift som selger bærekraftige vannflasker. Lag en disposisjon (stikkord) for presentasjonen med tydelig struktur og forklar hvorfor du har valgt akkurat denne rekkefølgen.',
      solution: 'Disposisjon: 1) Åpning med problemet (0:00-0:30): «1 million plastflasker kastes i Norge hver dag» — setter scenen med en sjokkerende statistikk. 2) Løsningen (0:30-1:15): Presentér vannflasken, vis den fysisk, forklar hva som gjør den unik (design, bærekraftige materialer). 3) Markedet (1:15-1:45): Målgruppe (unge, miljøbevisste), markedsstørrelse, veksttrend i bærekraft. 4) Forretningsmodell og resultater (1:45-2:30): Pris, marginer, salgskanaler, hva dere har solgt så langt. 5) Konkurranse (2:30-3:00): Hvem er konkurrentene og hva er deres fordel. 6) Teamet (3:00-3:30): Hvem er dere og hva bidrar hver person med. 7) Veien videre (3:30-4:30): Planer, mål, hva dere trenger investering til. 8) Avslutning (4:30-5:00): Oppsummering og handlingsoppfordring. Rekkefølgen er valgt fordi den starter med det emosjonelle (problemet), bygger interesse (løsningen), gir troverdighet (resultater og team) og avsluttes med en tydelig forespørsel.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 6.5: Prosjektledelse
// ============================================================================

export const CHAPTER_ENTREBED_1_6_5: TextbookChapter = {
  id: 'entrebed-1-6-5',
  courseId: 'entrebed-1',
  chapterNumber: '6.5',
  title: 'Prosjektledelse',
  description: 'Prosjektplanlegging med Gantt-diagram, milepæler og risikoanalyse — verktøy og metoder for å styre prosjekter fra idé til gjennomføring.',
  estimatedMinutes: 25,
  competenceGoals: [
    'planlegge, gjennomføre og lede prosjekter med utgangspunkt i teamarbeid og samarbeid',
  ],
  content: [
    {
      id: 'eb-6-5-intro',
      type: 'text',
      content: `# Prosjektledelse

Å starte en bedrift er i seg selv et prosjekt — det har en begynnelse, et sett aktiviteter som må gjennomføres, og et mål. Prosjektledelse handler om å planlegge, organisere og styre disse aktivitetene slik at prosjektet når målet innenfor tids- og budsjettrammen.

God prosjektledelse er forskjellen mellom kaos og kontroll. Uten en plan risikerer du å bruke for mye tid på feil oppgaver, glemme viktige aktiviteter og miste oversikten over hvem som gjør hva.

**Hva kjennetegner et prosjekt?**
- **Tidsavgrenset** — det har en definert start og slutt
- **Unikt** — det skiller seg fra rutineoppgaver
- **Målrettet** — det har et klart mål som skal oppnås
- **Ressursbegrenset** — det har begrensede ressurser (tid, penger, folk)

**Prosjektlederens oppgaver:**
- Definere mål og omfang
- Lage en realistisk plan
- Fordele oppgaver og ansvar
- Følge opp fremdrift
- Håndtere problemer og endringer
- Rapportere status til interessenter`,
    },
    {
      id: 'eb-6-5-def-prosjektfaser',
      type: 'definition',
      title: 'Prosjektets faser',
      content: `Et prosjekt gjennomgår vanligvis fire **faser**:

**1. Oppstartsfasen (initiering):**
Definere prosjektets mål, omfang og rammer. Hvem er involvert? Hva skal leveres? Hva er budsjettet? Resultatet er ofte et **prosjektmandat** — et kort dokument som beskriver prosjektets formål og rammer.

**2. Planleggingsfasen:**
Bryte ned prosjektet i konkrete aktiviteter, estimere tidsbruk, fordele ansvar og lage en tidsplan. Her brukes verktøy som **Gantt-diagram** og **milepæler**.

**3. Gjennomføringsfasen:**
Arbeidet utføres i henhold til planen. Prosjektlederen følger opp fremdrift, løser problemer og justerer planen ved behov. God kommunikasjon er avgjørende.

**4. Avslutningsfasen (evaluering):**
Prosjektet avsluttes, resultater evalueres og erfaringer dokumenteres. Hva gikk bra? Hva kunne vært gjort annerledes? Denne fasen er viktig for læring, men hoppes ofte over.`,
    },
    {
      id: 'eb-6-5-text-gantt',
      type: 'text',
      content: `## Gantt-diagram

Et **Gantt-diagram** er et visuelt planleggingsverktøy som viser prosjektets aktiviteter langs en tidsakse. Hver aktivitet representeres som en horisontal stolpe der lengden viser varigheten.

**Slik lager du et Gantt-diagram:**
1. List opp alle aktivitetene som må gjennomføres
2. Estimer hvor lang tid hver aktivitet tar
3. Bestem rekkefølgen — hvilke aktiviteter avhenger av andre?
4. Tegn aktivitetene inn på en tidsakse
5. Marker hvem som er ansvarlig for hver aktivitet

**Eksempel — Ungdomsbedrift starter nettbutikk:**

| Aktivitet | Uke 1 | Uke 2 | Uke 3 | Uke 4 | Uke 5 | Ansvarlig |
|---|---|---|---|---|---|---|
| Produktutvikling | ████ | ████ | | | | Anna |
| Design av nettside | | ████ | ████ | | | Bo |
| Fotografering | | | ████ | | | Clara |
| Lansering | | | | ████ | | Alle |
| Markedsføring | | | | ████ | ████ | David |

**Fordeler med Gantt-diagram:**
- Gir visuell oversikt over hele prosjektet
- Viser avhengigheter mellom aktiviteter
- Gjør det lett å se om prosjektet er på tidsplanen
- Fungerer som kommunikasjonsverktøy for teamet

**Digitale verktøy:** Trello, Notion, Google Sheets, Microsoft Project og Monday.com kan alle brukes til å lage Gantt-diagram.`,
    },
    {
      id: 'eb-6-5-def-milepeler',
      type: 'definition',
      title: 'Milepæler',
      content: `En **milepæl** er et viktig kontrollpunkt i prosjektet — en hendelse eller leveranse som markerer at en fase er fullført. Milepæler har ingen varighet; de er punkter i tid.

**Eksempler på milepæler i en ungdomsbedrift:**
- Forretningsidé valgt (uke 2)
- Prototype ferdig (uke 5)
- Nettbutikk lansert (uke 8)
- Første salg gjennomført (uke 9)
- Fylkesmesse gjennomført (uke 15)
- Sluttrapport levert (uke 20)

**Hvorfor milepæler er viktige:**
- Gir teamet delmål å jobbe mot — motiverende å «krysse av»
- Gjør det mulig å måle fremdrift objektivt
- Signaliserer til interessenter at prosjektet er på sporet
- Tvinger teamet til å fullføre aktiviteter før neste fase starter

**Tips:** Definer 4-6 milepæler for et ungdomsbedriftsprosjekt. Ikke for mange (mister oversikten) og ikke for få (mister kontrollen).`,
    },
    {
      id: 'eb-6-5-text-risikoanalyse',
      type: 'text',
      content: `## Risikoanalyse

Alle prosjekter innebærer risiko — ting som kan gå galt. En **risikoanalyse** hjelper deg med å identifisere, vurdere og forberede deg på potensielle problemer før de oppstår.

**Prosessen:**
1. **Identifiser risikoer** — Hva kan gå galt? Brainstorm med teamet.
2. **Vurder sannsynlighet** — Hvor sannsynlig er det at dette skjer? (Lav/Middels/Høy)
3. **Vurder konsekvens** — Hvor alvorlig er det dersom det skjer? (Lav/Middels/Høy)
4. **Prioriter** — Risikoer med høy sannsynlighet OG høy konsekvens bør håndteres først.
5. **Planlegg tiltak** — Hva kan vi gjøre for å forhindre risikoen eller redusere konsekvensen?

**Risikomatrise:**

| | Lav konsekvens | Middels konsekvens | Høy konsekvens |
|---|---|---|---|
| **Høy sannsynlighet** | Overvåk | Tiltak nødvendig | Kritisk — umiddelbar handling |
| **Middels sannsynlighet** | Aksepter | Overvåk | Tiltak nødvendig |
| **Lav sannsynlighet** | Aksepter | Aksepter | Overvåk |

**Eksempel — Risikoanalyse for ungdomsbedrift:**

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
|---|---|---|---|
| Produktet blir forsinket | Middels | Høy | Buffer i tidsplanen, parallelle aktiviteter |
| Et teammedlem slutter | Lav | Høy | Dokumenter alle prosesser, del kunnskap |
| Salget er lavere enn forventet | Middels | Middels | Flere salgskanaler, justér markedsføring |
| Leverandør leverer for sent | Middels | Middels | Ha backup-leverandør, bestill tidlig |`,
    },
    {
      id: 'eb-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Prosjektplan for en ungdomsbedrift',
      problem: 'En ungdomsbedrift skal utvikle og selge et miljøvennlig produkt. De har 20 uker til fylkesmessen. Lag en overordnet prosjektplan med faser, milepæler og et forenklet Gantt-diagram.',
      solution: `**Prosjektplan — GrønnStart UB:**

**Fase 1: Oppstart (uke 1-3)**
- Idéutvikling og markedsundersøkelse
- Fordele roller i teamet
- Skrive forretningsplan
- **Milepæl: Forretningsidé godkjent (uke 3)**

**Fase 2: Utvikling (uke 4-8)**
- Produktutvikling og prototyping
- Teste prototype med potensielle kunder
- Kontakte leverandører
- **Milepæl: Prototype ferdig og testet (uke 8)**

**Fase 3: Lansering (uke 9-12)**
- Produsere første serie
- Bygge nettbutikk og sosiale medier
- Gjennomføre lansering
- **Milepæl: Første salg gjennomført (uke 10)**

**Fase 4: Drift og salg (uke 13-18)**
- Kontinuerlig salg og markedsføring
- Forberede presentasjon til fylkesmesse
- Justere strategi basert på resultater
- **Milepæl: Salgsmål nådd (uke 16)**

**Fase 5: Avslutning (uke 19-20)**
- Gjennomføre fylkesmesse
- Skrive årsrapport og evaluering
- **Milepæl: Fylkesmesse gjennomført (uke 19)**

**Viktig lærdom:** Planen vil alltid endres underveis. Det viktige er å ha en plan å avvike fra — uten plan drifter prosjektet uten retning.`,
    },
    {
      id: 'eb-6-5-tip-1',
      type: 'tip',
      title: 'Agil prosjektledelse',
      content: `Tradisjonell prosjektledelse (fossefallsmetoden) planlegger alt i forkant og følger planen. **Agil prosjektledelse** er et alternativ der prosjektet deles i korte sykluser (sprinter) på 1-2 uker:

1. Planlegg hva som skal gjøres denne sprinten
2. Utfør arbeidet
3. Evaluer — hva fungerte, hva bør endres?
4. Tilpass planen og start neste sprint

Agile metoder (som Scrum og Kanban) er populære i teknologibedrifter, men prinsippene fungerer godt også i ungdomsbedrifter: planlegg kort, juster ofte, lær underveis.`,
    },
    {
      id: 'eb-6-5-warning-1',
      type: 'warning',
      title: 'Scope creep — prosjektet som vokser',
      content: `**Scope creep** betyr at prosjektets omfang gradvis vokser utover det opprinnelige målet. Noen vil legge til nye funksjoner, andre vil utvide målgruppen, og plutselig er prosjektet dobbelt så stort som planlagt — uten at tidsrammen eller ressursene har økt. Tiltak: definer tydelig hva prosjektet inkluderer (og hva det IKKE inkluderer), og vær disiplinert med å si nei til endringer som ikke er strengt nødvendige.`,
    },
  ],
  exercises: [
    {
      id: 'eb-6-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et Gantt-diagram?',
      options: [
        { id: 'a', text: 'Et regneark som viser selskapets inntekter og utgifter', isCorrect: false },
        { id: 'b', text: 'Et visuelt planleggingsverktøy som viser prosjektaktiviteter langs en tidsakse', isCorrect: true },
        { id: 'c', text: 'En liste over alle ansatte og deres roller', isCorrect: false },
        { id: 'd', text: 'Et diagram som viser organisasjonsstrukturen i en bedrift', isCorrect: false },
      ],
      solution: 'Et Gantt-diagram er et visuelt planleggingsverktøy der prosjektets aktiviteter vises som horisontale stolper langs en tidsakse. Stolpens lengde viser aktivitetens varighet, og diagrammet gir oversikt over rekkefølge, avhengigheter og hvem som er ansvarlig.',
    },
    {
      id: 'eb-6-5-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en milepæl i et prosjekt?',
      options: [
        { id: 'a', text: 'En daglig oppgave som alle teammedlemmer gjør', isCorrect: false },
        { id: 'b', text: 'Et viktig kontrollpunkt som markerer at en fase er fullført', isCorrect: true },
        { id: 'c', text: 'En type risiko som kan oppstå i prosjektet', isCorrect: false },
        { id: 'd', text: 'Et verktøy for å måle økonomisk resultat', isCorrect: false },
      ],
      solution: 'En milepæl er et viktig kontrollpunkt i prosjektet — en hendelse eller leveranse som markerer at noe vesentlig er oppnådd. Milepæler har ingen varighet; de er punkter i tid som gir teamet delmål å jobbe mot.',
    },
    {
      id: 'eb-6-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I en risikoanalyse — hvilke risikoer bør håndteres først?',
      options: [
        { id: 'a', text: 'Risikoer med lav sannsynlighet og lav konsekvens', isCorrect: false },
        { id: 'b', text: 'Risikoer med høy sannsynlighet og høy konsekvens', isCorrect: true },
        { id: 'c', text: 'Bare risikoer som har oppstått tidligere', isCorrect: false },
        { id: 'd', text: 'Risikoer som er billigst å håndtere', isCorrect: false },
      ],
      solution: 'I en risikoanalyse prioriteres risikoer basert på kombinasjonen av sannsynlighet og konsekvens. Risikoer med høy sannsynlighet og høy konsekvens er kritiske og bør håndteres umiddelbart, mens risikoer med lav sannsynlighet og lav konsekvens kan aksepteres uten tiltak.',
    },
    {
      id: 'eb-6-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar de fire fasene i et prosjekt og hva som gjøres i hver fase. Bruk et ungdomsbedriftsprosjekt som eksempel.',
      solution: 'Fase 1 — Oppstart: Prosjektet defineres med mål og rammer. I en UB: velge forretningsidé, fordele roller, skrive prosjektmandat. Fase 2 — Planlegging: Aktivitetene brytes ned, tidsplan lages og ansvar fordeles. I en UB: lage Gantt-diagram for hele året, sette milepæler, lage budsjett. Fase 3 — Gjennomføring: Arbeidet utføres i henhold til planen. I en UB: utvikle produkt, bygge nettbutikk, selge, delta på messer. Prosjektleder følger opp fremdrift og løser problemer. Fase 4 — Avslutning: Prosjektet avsluttes og evalueres. I en UB: skrive sluttrapport, evaluere hva som gikk bra og dårlig, avvikle selskapet. Denne fasen er viktig for læring, men hoppes ofte over i iveren etter å starte noe nytt.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Gjennomfør en risikoanalyse for en ungdomsbedrift som skal selge hjemmelagde energibarer. Identifiser minst fire risikoer, vurder sannsynlighet og konsekvens for hver, og foreslå tiltak.',
      solution: 'Risiko 1: Mattilsynets krav ikke oppfylt — Sannsynlighet: Middels, Konsekvens: Høy (kan ikke selge). Tiltak: Kontakt Mattilsynet tidlig, følg reglene for småskalaproduksjon, sørg for korrekt merking med ingrediensliste og allergener. Risiko 2: Ingredienser er dyrere enn beregnet — Sannsynlighet: Middels, Konsekvens: Middels (lavere margin). Tiltak: Undersøk priser hos flere leverandører før start, ha en buffer i budsjettet, vurder alternative ingredienser. Risiko 3: Produktet selger dårlig — Sannsynlighet: Middels, Konsekvens: Høy (ikke inntekter). Tiltak: Test smak med potensielle kunder før produksjon, start med liten serie, ha flere salgskanaler (skole, marked, nettbutikk). Risiko 4: Kvalitetsproblemer (smak, holdbarhet) — Sannsynlighet: Lav, Konsekvens: Høy (omdømmetap). Tiltak: Standardiser oppskrift, test holdbarhet, ha strenge rutiner for hygiene og produksjon. De to risikoene med høy konsekvens (Mattilsynet og dårlig salg) bør prioriteres først.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft forskjellen mellom tradisjonell prosjektledelse (fossefallsmetoden) og agil prosjektledelse. Hvilken tilnærming passer best for en ungdomsbedrift, og hvorfor?',
      solution: 'Tradisjonell prosjektledelse (fossefallsmetoden) planlegger hele prosjektet i detalj i forkant, med klare faser som følger sekvensielt. Fordeler: god oversikt, tydelig fremdrift, enkelt å kommunisere planen. Ulemper: lite fleksibelt, vanskelig å endre kurs, forutsetter at du vet nøyaktig hva du skal lage fra starten. Agil prosjektledelse deler prosjektet i korte sykluser (sprinter) og tilpasser planen etter hvert. Fordeler: fleksibelt, tilpasser seg endringer, raskere tilbakemelding fra kunder. Ulemper: kan mangle overordnet retning, krever disiplin i teamet, vanskelig å forutsi sluttdato. For en ungdomsbedrift er en kombinasjon trolig best: bruk fossefallsmetoden for den overordnede planen (mål, milepæler, tidsramme) og agile sprinter for det daglige arbeidet. Ungdomsbedrifter opererer i usikre omgivelser der forutsetningene endres raskt (produktet fungerer ikke, markedet responderer annerledes), og da er agil tilpasning viktig. Samtidig trenger de en overordnet plan fordi prosjektet har en fast sluttdato (fylkesmessen).',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-6-5-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag et forenklet Gantt-diagram (som tabell) for de første 8 ukene av en ungdomsbedrift som skal selge et egendesignet klesplagg. Inkluder minst 6 aktiviteter, angi varighet og avhengigheter, og sett inn to milepæler.',
      solution: 'Gantt-diagram: Aktivitet 1: Idéutvikling og markedsundersøkelse (uke 1-2, ingen avhengighet). Aktivitet 2: Design av klesplagg (uke 2-3, avhengig av aktivitet 1). Aktivitet 3: Finne leverandør/produsent (uke 3-4, avhengig av aktivitet 2). MILEPÆL 1: Design godkjent og leverandør valgt (slutten av uke 4). Aktivitet 4: Produksjon av første serie (uke 5-6, avhengig av aktivitet 3). Aktivitet 5: Bygge nettbutikk og sosiale medier (uke 4-6, kan starte parallelt med produksjon). Aktivitet 6: Fotografering og markedsmateriell (uke 6-7, avhengig av at produktet er ferdig). Aktivitet 7: Lansering og første salg (uke 7-8, avhengig av aktivitet 4, 5 og 6). MILEPÆL 2: Nettbutikk lansert og første salg gjennomført (slutten av uke 8). Avhengigheter: Design må være klart før produksjon, men nettbutikk kan bygges parallelt. Fotografering krever ferdige produkter.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// Eksport: Alle kapitler i Del 6
// ============================================================================

export const ENTREBED_1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_ENTREBED_1_6_1,
  CHAPTER_ENTREBED_1_6_2,
  CHAPTER_ENTREBED_1_6_3,
  CHAPTER_ENTREBED_1_6_4,
  CHAPTER_ENTREBED_1_6_5,
];
