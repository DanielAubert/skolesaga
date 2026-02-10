/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Rettslære 1 VG2
 *
 * Seksjon 2: Avtale- og forbrukerrett (Kapittel 2.1–2.8)
 * Denne filen inneholder kapittel 2.1–2.8 (komplett).
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1: Hva er en avtale?
// ============================================================================

export const CHAPTER_RETTSLAERE_1_2_1: TextbookChapter = {
  id: 'rettslaere-1-2-1',
  courseId: 'rettslaere-1',
  chapterNumber: '2.1',
  title: 'Hva er en avtale?',
  description: 'Avtalebegrepet, avtalefrihet og avtalelovens virkeområde – grunnlaget for all kontraktsrett.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare avtalebegrepet og avtalefriheten'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-2-1-intro',
      type: 'text',
      content: `## Hva er en avtale?

Hver dag inngår vi avtaler – ofte uten å tenke over det. Når du kjøper en kaffekopp, laster ned en app eller tar bussen, inngår du en avtale. Avtaler er selve limet i privatretten: de regulerer rettigheter og plikter mellom parter som frivillig har bundet seg til hverandre.

Men hva gjør en avtale juridisk bindende? Når er du egentlig bundet? Og hva står du fritt til å avtale? I dette kapittelet ser vi nærmere på de grunnleggende reglene om avtaler i norsk rett.`
    },

    // --- BLOKK 1: Avtalebegrepet ---
    {
      id: 'rett1-2-1-def-1',
      type: 'definition',
      title: 'Avtale',
      content: `En **avtale** er en rettslig bindende enighet mellom to eller flere parter om rettigheter og plikter. For at en avtale skal være bindende, kreves det normalt:

1. **Disposisjonsvilje** – partene har til hensikt å binde seg rettslig
2. **Kompetanse** – partene har rettslig handleevne (er myndige eller har fullmakt)
3. **Samsvar** – partene er enige om det vesentlige innholdet

En avtale skiller seg fra et løfte mellom venner nettopp ved at partene har ment å skape rettslige forpliktelser.`
    },
    {
      id: 'rett1-2-1-text-1',
      type: 'text',
      content: `### Avtaleloven

Den viktigste loven om avtaleinngåelse er **avtaleloven** (lov om avslutning av avtaler, om fuldmagt og om ugyldige viljeserklæringer) fra 1918. Loven regulerer:

- **Kapittel 1** (§§ 1–9): Regler om avtaleinngåelse – tilbud og aksept
- **Kapittel 2** (§§ 10–27): Regler om fullmakt
- **Kapittel 3** (§§ 28–36): Regler om ugyldige viljeserklæringer

Avtaleloven er **deklaratorisk** (fravikelig), noe som betyr at partene kan avtale andre løsninger enn det loven legger opp til. Loven fungerer som et «sikkerhetsnett» der partene ikke har avtalt noe spesielt.`
    },
    {
      id: 'rett1-2-1-example-1',
      type: 'example',
      title: 'Avtale eller bare en uforpliktende samtale?',
      problem: 'Jonas og Marte snakker i lunsjen. Jonas sier: «Jeg kan selge deg den gamle sykkelen min for 500 kroner.» Marte svarer: «Ja, det høres bra ut!» Er dette en bindende avtale?',
      solution: `**Analyse:**

For å avgjøre om det foreligger en bindende avtale, må vi vurdere:

1. **Disposisjonsvilje:** Sammenhengen tyder på at Jonas mente å selge sykkelen. Han oppga en bestemt gjenstand og en bestemt pris. Marte svarte bekreftende.
2. **Kompetanse:** Begge er myndige personer (forutsatt at de er over 18 år).
3. **Samsvar:** Partene er enige om hva som skal selges (sykkelen) og prisen (500 kr).

**Konklusjon:** Det foreligger sannsynligvis en bindende avtale. Jonas har fremsatt et tilbud (avtaleloven § 2), og Marte har akseptert det (§ 3). At avtalen er muntlig, er uten betydning – muntlige avtaler er like bindende som skriftlige i norsk rett (formfrihet).

Hadde Jonas derimot sagt «kanskje jeg burde selge sykkelen min», ville det vært et uforpliktende utsagn uten disposisjonsvilje – og dermed ingen avtale.`
    },
    {
      id: 'rett1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedkravet for at en avtale skal være rettslig bindende?',
        options: [
          { id: 'a', text: 'Avtalen må alltid være skriftlig', isCorrect: false },
          { id: 'b', text: 'Partene må ha disposisjonsvilje – altså ment å binde seg rettslig', isCorrect: true },
          { id: 'c', text: 'Avtalen må godkjennes av en advokat', isCorrect: false },
          { id: 'd', text: 'Begge parter må være over 25 år', isCorrect: false }
        ],
        solution: 'Det avgjørende er at partene har disposisjonsvilje, det vil si at de har til hensikt å skape rettslige forpliktelser. Avtaler trenger verken å være skriftlige eller godkjent av noen – muntlige avtaler er fullt ut bindende i norsk rett.'
      }
    },

    // --- BLOKK 2: Avtalefrihet og formfrihet ---
    {
      id: 'rett1-2-1-def-2',
      type: 'definition',
      title: 'Avtalefrihet',
      content: `**Avtalefriheten** er et grunnleggende prinsipp i norsk rett som innebærer:

1. **Frihet til å inngå avtaler** – ingen kan tvinges til å inngå en avtale
2. **Frihet til å velge avtalepartner** – du bestemmer selv hvem du vil avtale med
3. **Frihet til å bestemme innholdet** – partene avgjør selv hva avtalen skal gå ut på
4. **Formfrihet** – avtalen kan inngås i hvilken som helst form (muntlig, skriftlig, elektronisk, ved konkludent atferd)

Avtalefriheten er likevel ikke absolutt. Den begrenses av ufravikelige lovregler, avtaleloven § 36 (urimelige avtaler), og preseptorisk forbrukerlovgivning.`
    },
    {
      id: 'rett1-2-1-text-2',
      type: 'text',
      content: `### Begrensninger i avtalefriheten

Selv om avtalefriheten er et bærende prinsipp, finnes det viktige unntak:

- **Ufravikelig (preseptorisk) lovgivning:** Forbrukerkjøpsloven, husleieloven og arbeidsmiljøloven inneholder regler som ikke kan fravikes til ulempe for den svakere parten. For eksempel kan en utleier ikke avtale at leietaker gir opp retten til reklamasjon.
- **Avtaleloven § 36** (generalklausulen): En avtale kan settes helt eller delvis til side dersom det ville virke **urimelig** å gjøre den gjeldende.
- **Lov og orden:** Man kan ikke inngå gyldige avtaler om ulovlige handlinger (for eksempel avtale om kjøp av narkotika).
- **Offentlige påbud:** Noen avtaler krever bestemt form, for eksempel må eiendomsoverdragelser tinglyses.`
    },
    {
      id: 'rett1-2-1-example-2',
      type: 'example',
      title: 'Begrensning av avtalefriheten',
      problem: 'En nettbutikk skriver i sine vilkår: «Kunden fraskriver seg all rett til reklamasjon.» Er dette vilkåret gyldig?',
      solution: `**Analyse:**

Forbrukerkjøpsloven er **preseptorisk** (ufravikelig) i forbrukerforhold, jf. forbrukerkjøpsloven § 3. Det betyr at loven ikke kan fravikes til ulempe for forbrukeren.

Forbrukerkjøpsloven § 27 gir forbrukeren rett til å reklamere på mangler i inntil to år (fem år for varer med lengre levetid). Denne retten kan ikke avtales bort.

**Konklusjon:** Vilkåret er **ugyldig**. Selv om nettbutikken har skrevet det inn i sine vilkår, kan det ikke gjøres gjeldende overfor forbrukeren. Forbrukeren har full reklamasjonsrett etter loven, uavhengig av hva vilkårene sier. Dette er et eksempel på at preseptorisk lovgivning begrenser avtalefriheten.`
    },
    {
      id: 'rett1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr det at avtaleloven er deklaratorisk?',
        options: [
          { id: 'a', text: 'Loven gjelder bare for skriftlige avtaler', isCorrect: false },
          { id: 'b', text: 'Loven kan ikke fravikes av partene under noen omstendigheter', isCorrect: false },
          { id: 'c', text: 'Lovens regler kan fravikes dersom partene avtaler noe annet', isCorrect: true },
          { id: 'd', text: 'Loven gjelder bare for næringsdrivende', isCorrect: false }
        ],
        solution: 'At avtaleloven er deklaratorisk (fravikelig) betyr at partene kan avtale andre løsninger enn det loven legger opp til. Lovens regler fungerer som et «sikkerhetsnett» som gjelder der partene ikke har regulert noe selv. Motsetningen er preseptoriske (ufravikelige) lover som forbrukerkjøpsloven, som ikke kan fravikes til ulempe for forbrukeren.'
      }
    },

    // --- BLOKK 3: Konkludent atferd ---
    {
      id: 'rett1-2-1-text-3',
      type: 'text',
      content: `### Avtaleinngåelse ved konkludent atferd

Ikke alle avtaler inngås gjennom uttrykkelige ord. Mange avtaler inngås ved **konkludent atferd** (stilltiende adferd) – det vil si handlinger som viser at partene er enige.

Eksempler på konkludent atferd:
- Du setter deg på bussen og stempler kortet → avtale om transport
- Du legger varer på båndet i butikken og betaler → kjøpsavtale
- Du parkerer på en avgiftsbelagt parkeringsplass → avtale om betaling

I slike situasjoner er det ingen uttrykkelig utveksling av tilbud og aksept, men handlingene viser klart at partene har ment å inngå en avtale. Den ene parten yter en tjeneste, og den andre betaler for den.`
    },
    {
      id: 'rett1-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hva «konkludent atferd» betyr, og gi to eksempler fra hverdagen der avtaler inngås på denne måten. Begrunn hvorfor eksemplene dine utgjør bindende avtaler.',
        hints: ['Tenk på situasjoner der du betaler for noe uten å si et ord.'],
        solution: `**Konkludent atferd** betyr at en avtale inngås gjennom handlinger (atferd) som viser at partene er enige, uten at det utveksles uttrykkelige ord om tilbud og aksept.

**Eksempel 1:** Du går inn på en kafé, peker på en bolle i disken, legger betalingskortet på terminalen og tar bollen med deg. Selv om du ikke sa et ord, har du gjennom handlingene dine akseptert kaféens tilbud om å selge bollen til den oppgitte prisen.

**Eksempel 2:** Du abonnerer på en strømmetjeneste og fortsetter å bruke den etter prøveperioden. Ved å fortsette bruken aksepterer du konkludent at abonnementet løper videre til full pris.

Begge eksemplene utgjør bindende avtaler fordi handlingene tydelig viser disposisjonsvilje – partene har opptrådt på en måte som viser at de mente å forplikte seg.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- En **avtale** er en rettslig bindende enighet mellom to eller flere parter.
- For at en avtale skal være bindende, kreves **disposisjonsvilje**, **kompetanse** og **samsvar** mellom partene.
- **Avtalefriheten** er et grunnprinsipp i norsk rett: frihet til å inngå avtaler, velge medkontrahent, bestemme innhold, og velge form.
- Avtaleloven fra 1918 er **deklaratorisk** – den gjelder der partene ikke har avtalt noe annet.
- Avtalefriheten begrenses av **preseptorisk lovgivning** (f.eks. forbrukerkjøpsloven), **avtaleloven § 36** og forbud mot ulovlige avtaler.
- Avtaler kan inngås gjennom **konkludent atferd** – handlinger som viser at partene er enige.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En arbeidsgiver skriver i arbeidsavtalen at den ansatte ikke har rett til ferie. Er dette vilkåret gyldig? Begrunn svaret med henvisning til forholdet mellom avtalefrihet og preseptorisk lovgivning.',
        hints: ['Ferieloven er preseptorisk – den kan ikke fravikes til ulempe for arbeidstaker.'],
        solution: `**Analyse:**

Ferieloven § 3 gir arbeidstaker rett til ferie på minst 25 virkedager (fire uker og én dag). Ferieloven § 14 slår fast at loven ikke kan fravikes til skade for arbeidstaker.

Arbeidsgiverens vilkår om at den ansatte «ikke har rett til ferie» strider direkte mot ferielovens ufravikelige regler. Vilkåret er derfor **ugyldig**, og arbeidstaker har uansett rett til ferie etter loven.

**Konklusjon:** Avtalefriheten begrenses av preseptorisk lovgivning. Ferieloven er et typisk eksempel på en lov som beskytter den svakere parten (arbeidstaker) og som ikke kan avtales bort.`
      }
    },
    {
      id: 'rett1-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: «Avtalefriheten er nødvendig for et fungerende samfunn, men ubegrenset avtalefrihet kan føre til urettferdighet.» Bruk eksempler fra kapittelet og gjør rede for minst to begrensninger i avtalefriheten som finnes i norsk rett.',
        hints: ['Tenk på preseptorisk lovgivning, avtaleloven § 36 og forbud mot ulovlige avtaler.', 'Bruk konkrete eksempler for å illustrere poengene dine.'],
        solution: `**Drøfting:**

**Avtalefriheten som grunnpilar:**
Avtalefriheten er nødvendig for at næringsliv og privatliv skal fungere. Bedrifter må fritt kunne inngå kontrakter, forbrukere må kunne handle, og privatpersoner må kunne avtale seg imellom. Uten avtalefrihet ville det vært umulig å drive forretning.

**Ubegrenset avtalefrihet – problemer:**
Dersom avtalefriheten var helt ubegrenset, ville den sterkere parten kunne utnytte den svakere. En arbeidsgiver kunne fratatt ansatte retten til ferie. En nettbutikk kunne fjernet reklamasjonsretten. En utleier kunne kastet ut leietakeren uten varsel.

**Begrensning 1: Preseptorisk lovgivning**
Forbrukerkjøpsloven § 3, ferieloven § 14 og husleieloven § 1-2 er eksempler på ufravikelige regler som beskytter den svakere parten. En nettbutikk kan ikke fraskrive seg ansvar for mangelfulle varer – forbrukeren har alltid reklamasjonsrett.

**Begrensning 2: Avtaleloven § 36**
Generalklausulen gir domstolene adgang til å sette til side avtaler som virker urimelige. For eksempel kan en låneavtale med ågerrenter settes til side selv om låntaker frivillig signerte.

**Konklusjon:** Avtalefriheten er essensiell, men må balanseres mot hensynet til den svakere parten. Preseptorisk lovgivning og avtaleloven § 36 sikrer at avtaler forblir rimelige og rettferdige.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Avtaleinngåelse – tilbud og aksept
// ============================================================================

export const CHAPTER_RETTSLAERE_1_2_2: TextbookChapter = {
  id: 'rettslaere-1-2-2',
  courseId: 'rettslaere-1',
  chapterNumber: '2.2',
  title: 'Avtaleinngåelse – tilbud og aksept',
  description: 'Reglene om hvordan bindende avtaler inngås gjennom tilbud og aksept, akseptfrist og re integra-regelen.',
  estimatedMinutes: 30,
  competenceGoals: [
    'vurdere om bindende avtale er inngått'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-2-2-intro',
      type: 'text',
      content: `## Avtaleinngåelse – tilbud og aksept

Når er du egentlig bundet av en avtale? Kan du angre etter at du har sagt ja? Hva skjer dersom aksepten kommer for sent?

Avtaleloven bygger på en klassisk modell for avtaleinngåelse: en part fremsetter et **tilbud**, og den andre parten svarer med en **aksept**. Når tilbud og aksept stemmer overens, er avtalen inngått og bindende for begge parter.

I dette kapittelet ser vi nærmere på denne modellen og de viktigste reglene som styrer når bindende avtale oppstår.`
    },

    // --- BLOKK 1: Tilbud og aksept ---
    {
      id: 'rett1-2-2-def-1',
      type: 'definition',
      title: 'Tilbud',
      content: `Et **tilbud** er et forslag om å inngå en avtale, fremsatt av den ene parten (tilbyderen/tilbudsgiveren). For at noe skal være et rettslig tilbud, må det:

1. Være tilstrekkelig **bestemt** – det må gå klart frem hva tilbudet gjelder (gjenstand, pris, vilkår)
2. Vise **disposisjonsvilje** – tilbyderen må ha til hensikt å binde seg dersom tilbudet aksepteres

Et tilbud er **bindende** for tilbyderen fra det øyeblikk det er kommet til mottakerens kunnskap, jf. avtaleloven § 7. Tilbyderen kan ikke fritt trekke tilbudet tilbake etter dette tidspunktet.`
    },
    {
      id: 'rett1-2-2-def-2',
      type: 'definition',
      title: 'Aksept',
      content: `En **aksept** er mottakerens svar som godtar tilbudet. Aksepten må:

1. Være **rettidig** – den må komme innenfor akseptfristen (avtaleloven § 2 og § 3)
2. Være **overensstemmende** – den må samsvare med tilbudet uten forbehold eller endringer

Dersom «aksepten» inneholder endringer eller tillegg, regnes den ikke som en aksept, men som et **nytt tilbud** (avkall/motbud) som den opprinnelige tilbyderen kan velge å akseptere eller avslå, jf. avtaleloven § 6.`
    },
    {
      id: 'rett1-2-2-example-1',
      type: 'example',
      title: 'Er det inngått bindende avtale?',
      problem: 'Anna sender en e-post til Bjørn: «Jeg selger deg bilen min for 150 000 kroner. Tilbudet gjelder til fredag.» Bjørn svarer onsdag: «Jeg aksepterer, men vil betale i tre avdrag.» Er det inngått en bindende avtale?',
      solution: `**Analyse:**

Annas e-post er et **tilbud** etter avtaleloven § 2: det er bestemt (bilen, 150 000 kr) og viser disposisjonsvilje. Akseptfristen er fredag.

Bjørns svar inneholder imidlertid et **tillegg** – han vil endre betalingsvilkårene fra kontant til avdragsbetaling. Etter avtaleloven § 6 regnes en aksept som inneholder forbehold, tillegg eller innskrenkninger, som **avslag** i forening med et **nytt tilbud**.

**Konklusjon:** Det er **ikke** inngått bindende avtale. Bjørns svar er et avslag på Annas tilbud og samtidig et nytt tilbud (motbud). Anna kan nå velge om hun vil akseptere avdragsbetaling, avslå, eller fremsette et nytt tilbud.`
    },
    {
      id: 'rett1-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Etter avtaleloven § 6: Hva skjer dersom en «aksept» inneholder endringer sammenlignet med tilbudet?',
        options: [
          { id: 'a', text: 'Den regnes som en gyldig aksept med de endringene som er gjort', isCorrect: false },
          { id: 'b', text: 'Den regnes som et avslag og et nytt tilbud (motbud)', isCorrect: true },
          { id: 'c', text: 'Avtalen inngås til de opprinnelige vilkårene', isCorrect: false },
          { id: 'd', text: 'Begge parter er ubundet', isCorrect: false }
        ],
        solution: 'Etter avtaleloven § 6 regnes en aksept som avviker fra tilbudet som et avslag på det opprinnelige tilbudet, kombinert med et nytt tilbud (motbud). Den opprinnelige tilbyderen må da ta stilling til det nye tilbudet.'
      }
    },

    // --- BLOKK 2: Akseptfrist og for sen aksept ---
    {
      id: 'rett1-2-2-text-2',
      type: 'text',
      content: `### Akseptfrist

Når et tilbud er fremsatt, har mottakeren en begrenset tid til å akseptere. Avtaleloven skiller mellom to situasjoner:

**Tilbud med akseptfrist (§ 2):**
Dersom tilbyderen har satt en frist, må aksepten være kommet frem til tilbyderen innen fristen utløper. Etter fristens utløp er tilbyderen ikke lenger bundet.

**Tilbud uten akseptfrist (§ 3):**
Dersom det ikke er satt noen frist, skiller loven mellom:
- **Tilbud fremsatt muntlig** (også telefon, videomøte): Må aksepteres umiddelbart, ellers faller det bort
- **Tilbud fremsatt skriftlig** (brev, e-post): Aksepten må komme frem innen den tid tilbyderen med rimelighet kan forvente å motta svar

### For sen aksept (§ 4)

Dersom aksepten kommer **for sent**, er tilbyderen ikke bundet – med mindre tilbyderen velger å godta den sene aksepten. En for sen aksept regnes etter loven som et **nytt tilbud** fra akseptantens side.

Men det finnes et viktig unntak: dersom mottakeren trodde aksepten kom i tide, og tilbyderen måtte forstå dette, plikter tilbyderen å gi beskjed om at aksepten var for sen. Unnlater tilbyderen å gi slik beskjed, anses avtalen som inngått (avtaleloven § 4 andre ledd).`
    },
    {
      id: 'rett1-2-2-example-2',
      type: 'example',
      title: 'For sen aksept',
      problem: 'Sara sender et brev til Thomas 1. mars med tilbud om å selge maleriet sitt for 8 000 kroner, med akseptfrist 10. mars. Thomas poster sitt akseptbrev 9. mars, men på grunn av postforsinkelse ankommer brevet først 12. mars. Er avtale inngått?',
      solution: `**Analyse:**

Saras tilbud har akseptfrist 10. mars. Thomas sendte akseptbrevet i god tid (9. mars), men det ankom 12. mars – **etter** fristens utløp.

Etter avtaleloven § 4 første ledd er en for sen aksept i utgangspunktet å anse som et nytt tilbud. Sara er ikke bundet.

**Men:** Avtaleloven § 4 andre ledd sier at dersom mottakeren (Thomas) gikk ut fra at aksepten var rettidig, og avgiveren (Sara) måtte forstå dette, plikter Sara å gi beskjed om at aksepten kom for sent. Unnlater hun det, anses avtalen som inngått.

Thomas sendte brevet dagen før fristen – det var rimelig å forvente at det kom frem i tide. Sara mottar brevet og ser at det er sendt 9. mars. Hun må forstå at Thomas trodde aksepten var rettidig.

**Konklusjon:** Dersom Sara ikke varsler Thomas om forsinkelsen, er avtalen **bindende**. Sara bør gi beskjed uten ugrunnet opphold dersom hun ikke ønsker å selge.`
    },
    {
      id: 'rett1-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et muntlig tilbud (f.eks. i en telefonsamtale) har ingen uttrykkelig akseptfrist. Hva gjelder da etter avtaleloven § 3?',
        options: [
          { id: 'a', text: 'Mottakeren har 14 dagers betenkningstid', isCorrect: false },
          { id: 'b', text: 'Tilbudet gjelder i 30 dager', isCorrect: false },
          { id: 'c', text: 'Tilbudet må aksepteres umiddelbart, ellers faller det bort', isCorrect: true },
          { id: 'd', text: 'Tilbudet gjelder til mottakeren gir beskjed om at han avslår', isCorrect: false }
        ],
        solution: 'Etter avtaleloven § 3 andre ledd skal et mundtlig tilbud aksepteres «straks» (umiddelbart). Dersom mottakeren ikke aksepterer med en gang, faller tilbudet bort og tilbyderen er fri. Dette gjelder muntlige tilbud fremsatt ansikt til ansikt, per telefon eller i videomøte.'
      }
    },

    // --- BLOKK 3: Re integra ---
    {
      id: 'rett1-2-2-text-3',
      type: 'text',
      content: `### Tilbakekall – re integra-regelen

Kan du angre på et tilbud etter at du har sendt det? Utgangspunktet er at et tilbud er bindende fra det er kommet til mottakerens kunnskap (avtaleloven § 7). Men loven åpner for tilbakekall i én bestemt situasjon:

**Avtaleloven § 7 (re integra):** Et tilbud (eller en aksept) kan kalles tilbake dersom tilbakekallet kommer frem til mottakeren **før eller samtidig med** at tilbudet/aksepten kommer til mottakerens kunnskap.

I praksis betyr dette at du kan angre, men bare hvis angremeldingen rekker frem i tide. Sender du et tilbud per post, kan du for eksempel ringe eller sende en e-post med tilbakekall – forutsatt at mottakeren leser e-posten før brevet.

**Merk:** Re integra-regelen gjelder bare tilbakekall som kommer frem *før eller samtidig*. Har mottakeren allerede lest tilbudet, er det for sent.`
    },
    {
      id: 'rett1-2-2-example-3',
      type: 'example',
      title: 'Re integra i praksis',
      problem: 'Erik sender mandag en e-post til Lise med tilbud om å selge hyttetomten sin for 500 000 kroner. Tirsdag morgen angrer Erik og sender en ny e-post: «Jeg trekker tilbudet.» Lise leser begge e-postene tirsdag ettermiddag – tilbudet først, deretter tilbakekallet. Er Erik bundet?',
      solution: `**Analyse:**

Etter avtaleloven § 7 kan et tilbud kalles tilbake dersom tilbakekallet kommer frem **før eller samtidig med** at tilbudet kommer til mottakerens kunnskap.

Her er spørsmålet: Når kom tilbudet til Lises «kunnskap»? Avgjørende er når Lise faktisk leste e-posten. Lise leste tilbudet først og tilbakekallet deretter – altså etter at hun allerede hadde fått kunnskap om tilbudet.

**Konklusjon:** Erik er **bundet** av tilbudet. Tilbakekallet kom for sent fordi Lise leste tilbuds-e-posten før tilbakekallmeldingen. Hadde Lise lest tilbakekallet først (eller begge samtidig), ville Erik vært fri.`
    },
    {
      id: 'rett1-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Morten sender fredag kveld en SMS til Ingrid med tilbud om å kjøpe motorsykkelen hennes for 60 000 kroner. Lørdag morgen angrer han og ringer Ingrid for å trekke tilbudet. Ingrid sier at hun ikke har sett SMSen ennå. Er Morten fri fra tilbudet? Begrunn svaret med henvisning til avtaleloven § 7.',
        hints: ['Tenk på når tilbudet kom til Ingrids «kunnskap» – er det når SMSen ble sendt, eller når hun leste den?'],
        solution: `**Analyse etter avtaleloven § 7:**

Avgjørende er om tilbakekallet kom frem «før eller samtidig med» at tilbudet kom til mottakerens kunnskap. Kunnskap innebærer at mottakeren faktisk har lest eller fått kjennskap til tilbudet.

Ingrid bekrefter at hun ikke har sett SMSen. Mortens tilbakekall (telefonsamtalen) kommer altså frem **før** tilbudet er kommet til hennes kunnskap.

**Konklusjon:** Morten er **fri** fra tilbudet. Re integra-regelen er oppfylt fordi tilbakekallet (telefonsamtalen lørdag morgen) kom frem til Ingrid før hun fikk kunnskap om tilbudet (SMSen hun ennå ikke hadde lest). Morten har lovlig kalt tilbake tilbudet sitt.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Bindende avtale oppstår når et **tilbud** møtes av en **overensstemmende aksept** innen akseptfristen.
- Et tilbud er **bindende** for tilbyderen fra det er kommet til mottakerens kunnskap (avtaleloven § 7).
- En aksept som inneholder endringer, regnes som et **avslag** og et **nytt tilbud** (§ 6).
- **Akseptfrist:** Muntlige tilbud må aksepteres umiddelbart (§ 3). Skriftlige tilbud kan ha fastsatt frist (§ 2) eller rimelig tid (§ 3).
- **For sen aksept** regnes som nytt tilbud, men tilbyderen har varslingsplikt dersom mottakeren trodde aksepten var rettidig (§ 4).
- **Re integra** (§ 7): Et tilbud eller en aksept kan kalles tilbake dersom tilbakekallet kommer frem før eller samtidig med at erklæringen kommer til mottakerens kunnskap.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Kristin sender 1. juni et brev med tilbud om å selge kajakken sin for 5 000 kroner, med akseptfrist 10. juni. Mottakeren Ole sender akseptbrev 11. juni. Hva er rettsstillingen?',
        options: [
          { id: 'a', text: 'Bindende avtale er inngått fordi Ole aksepterte kort tid etter fristen', isCorrect: false },
          { id: 'b', text: 'Oles aksept regnes som et nytt tilbud som Kristin kan velge å akseptere eller avslå', isCorrect: true },
          { id: 'c', text: 'Kristin er bundet fordi hun ikke har kalt tilbudet tilbake', isCorrect: false },
          { id: 'd', text: 'Tilbudet fornyes automatisk med 10 nye dager', isCorrect: false }
        ],
        solution: 'Oles aksept er sendt etter akseptfristen (10. juni) og er dermed for sen. Etter avtaleloven § 4 regnes en for sen aksept som et nytt tilbud fra Oles side. Kristin er ikke bundet og kan fritt velge om hun vil godta Oles tilbud. Det finnes ingen automatisk fornyelse av tilbud i norsk rett.'
      }
    },
    {
      id: 'rett1-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Elektronikk AS legger ut en annonse på nett: «Samsung TV 65 tommer – TILBUD 2 990 kr (ordinær pris 12 990 kr).» Prisen skyldes en tastefeil. 200 kunder bestiller TVen til den lave prisen før feilen oppdages. Er Elektronikk AS bundet av de 200 avtalene? Drøft med utgangspunkt i reglene om tilbud og aksept, og vurder om avtaleloven § 32 (feilskrift) kan gi grunnlag for å gå fra avtalene.',
        hints: ['Vurder om annonsen er et bindende tilbud eller en oppfordring til å gi tilbud.', 'Avtaleloven § 32 handler om erklæringer avgitt ved feilskrift – vurder om kundene «burde innsett» at prisen var feil.'],
        solution: `**Drøfting:**

**Tilbud eller oppfordring?**
En nettbutikk som legger ut varer med pris og «legg i handlekurv»-knapp, fremsetter normalt et bindende tilbud. Når kunden bestiller, aksepterer kunden tilbudet, og avtale er inngått.

**Avtaleloven § 32 – feilskrift:**
Etter § 32 første ledd er en viljeserklæring som er avgitt med et annet innhold enn tilsiktet (f.eks. ved feilskrift), ikke bindende for avgiveren dersom «den anden part indsaa eller burde ha indset, at der forelaa en feiltagelse».

Spørsmålet er om kundene **burde innsett** at prisen var feil. En 65-tommers Samsung TV til 2 990 kr (77 % rabatt) er uvanlig lavt. De fleste forbrukere bør forstå at dette sannsynligvis er en feil, spesielt når ordinærprisen er oppgitt til 12 990 kr.

**Konklusjon:** Elektronikk AS har trolig grunnlag for å påberope seg avtaleloven § 32. Prisen avviker så mye fra markedspris at kundene burde forstått at det forelå en feil. Avtalene kan sannsynligvis heves. Forbrukerrådet har imidlertid i tidligere saker uttalt at det er selgerens risiko å ha korrekte priser – grensen for hva som er «åpenbar feil» kan diskuteres.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3: Fullmakt og representasjon
// ============================================================================

export const CHAPTER_RETTSLAERE_1_2_3: TextbookChapter = {
  id: 'rettslaere-1-2-3',
  courseId: 'rettslaere-1',
  chapterNumber: '2.3',
  title: 'Fullmakt og representasjon',
  description: 'Ulike fullmaktstyper, prokura, stillingsfullmakt og representasjon – når andre handler på dine vegne.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere fullmaktsforhold'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-2-3-intro',
      type: 'text',
      content: `## Fullmakt og representasjon

Ikke alle avtaler inngås personlig. En daglig leder signerer kontrakter på vegne av bedriften. En eiendomsmegler selger bolig på vegne av selgeren. En advokat forhandler på klientens vegne.

I alle disse tilfellene handler én person (**fullmektigen**) på vegne av en annen (**fullmaktsgiveren**). Men hva gir fullmektigen rett til å binde fullmaktsgiveren? Og hva skjer dersom fullmektigen går utenfor sin fullmakt?

Reglene om fullmakt finner vi i avtaleloven kapittel 2 (§§ 10–27).`
    },

    // --- BLOKK 1: Fullmaktsbegrepet ---
    {
      id: 'rett1-2-3-def-1',
      type: 'definition',
      title: 'Fullmakt',
      content: `En **fullmakt** er en rett til å handle på en annens vegne med rettslig virkning for denne. Tre parter er involvert:

1. **Fullmaktsgiveren** (principal) – den som gir fullmakten
2. **Fullmektigen** (representanten) – den som handler på vegne av fullmaktsgiveren
3. **Medkontrahenten** (tredjeperson) – den som fullmektigen inngår avtale med

Hovedregelen er at fullmektigen binder fullmaktsgiveren overfor tredjepersonen, forutsatt at fullmektigen handler **innenfor fullmaktens grenser**, jf. avtaleloven § 10.`
    },
    {
      id: 'rett1-2-3-text-1',
      type: 'text',
      content: `### Ulike fullmaktstyper

Avtaleloven skiller mellom flere typer fullmakt:

**1. Fuldmagt med særskilt bemyndigelse (§ 10 andre ledd, jf. § 13–16)**
Fullmakt som er meddelt tredjepersonen direkte, f.eks. skriftlig fullmakt som fullmektigen viser frem, eller fullmakt som er kunngjort i avis eller register.

**2. Stillingsfullmakt (§ 10 andre ledd)**
Fullmakt som følger av at en person har en bestemt **stilling** eller **posisjon**. For eksempel har en butikkmedarbeider fullmakt til å selge butikkens varer, og en daglig leder har fullmakt til å inngå avtaler som faller innenfor selskapets daglige drift.

**3. Oppdragsfullmakt (§ 18)**
Fullmakt som kun er gitt i forholdet mellom fullmaktsgiver og fullmektig, uten at tredjepersonen kjenner til fullmaktens innhold. Fullmektigen har fått et «oppdrag» med instruksjoner.

**4. Prokura (prokuralovens regler)**
En særlig vid fullmakt som gir innehaveren rett til å opptre på vegne av en virksomhet i alle saker som hører under virksomhetens drift. Prokura registreres i Brønnøysundregistrene.`
    },
    {
      id: 'rett1-2-3-example-1',
      type: 'example',
      title: 'Stillingsfullmakt',
      problem: 'Maria jobber som innkjøpsansvarlig i en møbelbutikk. Hun bestiller 50 kontorstoler fra en leverandør til 4 000 kroner per stol – totalt 200 000 kroner. Eieren av møbelbutikken mener ordren er for stor og vil avbestille. Kan eieren hevde at Maria ikke hadde fullmakt?',
      solution: `**Analyse:**

Maria har **stillingsfullmakt** etter avtaleloven § 10 andre ledd. Som innkjøpsansvarlig har hun en stilling som normalt innebærer rett til å bestille varer for butikken.

Spørsmålet er om ordren på 200 000 kroner faller innenfor det som er «sedvanlig» for hennes stilling. For en innkjøpsansvarlig i en møbelbutikk er det normalt å bestille varepartier i denne størrelsesordenen.

Selv om eieren kanskje hadde interne instruksjoner om et lavere beløp, er dette et forholdet mellom fullmaktsgiver (eieren) og fullmektig (Maria). Leverandøren kjenner ikke til disse interne begrensningene.

**Konklusjon:** Butikken er sannsynligvis **bundet** av bestillingen. Leverandøren kunne med rette forvente at en innkjøpsansvarlig har fullmakt til å bestille varer i denne størrelsesordenen. Eieren kan eventuelt holde Maria erstatningsansvarlig internt, men kan ikke heve avtalen overfor leverandøren.`
    },
    {
      id: 'rett1-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke tre parter er involvert i et fullmaktsforhold?',
        options: [
          { id: 'a', text: 'Dommer, advokat og tiltalte', isCorrect: false },
          { id: 'b', text: 'Fullmaktsgiver, fullmektig og medkontrahent (tredjeperson)', isCorrect: true },
          { id: 'c', text: 'Kjøper, selger og megler', isCorrect: false },
          { id: 'd', text: 'Arbeidsgiver, arbeidstaker og fagforening', isCorrect: false }
        ],
        solution: 'Et fullmaktsforhold involverer tre parter: fullmaktsgiveren (den som gir fullmakten), fullmektigen (den som handler på fullmaktsgiverens vegne) og medkontrahenten/tredjepersonen (den som fullmektigen inngår avtale med). Fullmektigen binder fullmaktsgiveren overfor tredjepersonen.'
      }
    },

    // --- BLOKK 2: Overskridelse av fullmakt ---
    {
      id: 'rett1-2-3-text-2',
      type: 'text',
      content: `### Overskridelse av fullmakt

Hva skjer dersom fullmektigen handler **utenfor** sin fullmakt? Avtaleloven § 11 regulerer dette:

**Hovedregelen:** Dersom fullmektigen handler utenfor fullmaktens grenser, er fullmaktsgiveren **ikke bundet** av avtalen.

**Men:** Tredjepersonen kan kreve erstatning fra **fullmektigen personlig** dersom tredjepersonen ikke visste og heller ikke burde visst at fullmektigen gikk utenfor sin fullmakt (avtaleloven § 25).

**Ratihabisjon (etterfølgende godkjennelse):** Fullmaktsgiveren kan likevel velge å godkjenne avtalen i ettertid. Slik godkjennelse kalles **ratihabisjon** og innebærer at avtalen blir bindende som om fullmakt hadde foreligget fra starten.`
    },
    {
      id: 'rett1-2-3-example-2',
      type: 'example',
      title: 'Fullmaktsoverskridelse',
      problem: 'Ole har fått fullmakt av sin mor til å selge hennes gamle bil for «minst 80 000 kroner». Ole selger bilen til en kjøper for 65 000 kroner fordi han mener det er en god pris i markedet. Er moren bundet av salget?',
      solution: `**Analyse:**

Ole har fått en oppdragsfullmakt (avtaleloven § 18) med en klar instruks: selg for minst 80 000 kroner. Ved å selge for 65 000 kroner har Ole handlet **utenfor fullmaktens grenser**.

Spørsmålet er hva kjøperen visste. Ved oppdragsfullmakt kjenner tredjepersonen normalt ikke til de interne instruksjonene mellom fullmaktsgiver og fullmektig.

**Men:** Etter avtaleloven § 11 er fullmaktsgiveren ikke bundet dersom medkontrahenten «indsaa eller burde ha indset» at fullmektigen overskred sin fullmakt. Hvis kjøperen visste at moren ville ha minst 80 000 kr, er moren ikke bundet.

**Konklusjon:** Dersom kjøperen var i god tro (ikke visste om instruksen), er moren trolig bundet. Dersom kjøperen visste eller burde visst om prisgrensen, er moren ikke bundet. Moren kan uansett holde Ole erstatningsansvarlig for tapet (80 000 – 65 000 = 15 000 kr).

Moren kan også velge å **ratihabere** (godkjenne) salget i ettertid, dersom hun er fornøyd med prisen likevel.`
    },
    {
      id: 'rett1-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer «ratihabisjon» i fullmaktsretten?',
        options: [
          { id: 'a', text: 'At fullmaktsgiveren trekker tilbake fullmakten', isCorrect: false },
          { id: 'b', text: 'At fullmektigen handler innenfor sine instruksjoner', isCorrect: false },
          { id: 'c', text: 'At fullmaktsgiveren i ettertid godkjenner en avtale fullmektigen har inngått utenfor sin fullmakt', isCorrect: true },
          { id: 'd', text: 'At tredjepersonen krever erstatning fra fullmektigen', isCorrect: false }
        ],
        solution: 'Ratihabisjon betyr etterfølgende godkjennelse. Dersom en fullmektig har handlet utenfor sin fullmakt, kan fullmaktsgiveren likevel velge å godkjenne avtalen i ettertid. Avtalen blir da bindende som om fullmakt hadde foreligget fra starten.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Fullmakt** er rett til å handle på en annens vegne med rettslig virkning for denne.
- Tre parter: **fullmaktsgiver**, **fullmektig** og **medkontrahent** (tredjeperson).
- **Stillingsfullmakt** følger av personens stilling (butikkmedarbeider, daglig leder).
- **Prokura** gir rett til å opptre i alle saker innenfor virksomhetens drift.
- **Oppdragsfullmakt** gjelder kun internt mellom fullmaktsgiver og fullmektig.
- Fullmektigen binder fullmaktsgiveren **innenfor** fullmaktens grenser (§ 10).
- Ved **overskridelse** er fullmaktsgiveren normalt ikke bundet, men tredjepersonen kan kreve erstatning fra fullmektigen (§ 25).
- **Ratihabisjon** – fullmaktsgiveren kan i ettertid godkjenne avtalen.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom stillingsfullmakt og oppdragsfullmakt. Gi et praktisk eksempel på hver type og forklar hva som skjer dersom fullmektigen handler utenfor fullmaktens grenser i hvert tilfelle.',
        hints: ['Tenk på hva tredjepersonen vet om fullmaktens omfang i de to tilfellene.'],
        solution: `**Stillingsfullmakt:**
Følger av at en person har en bestemt stilling. Tredjepersonen kan se hvilken stilling personen har, og kan dermed vurdere omfanget av fullmakten.

*Eksempel:* En butikkmedarbeider i en sportsbutikk selger ski til en kunde. Kunden kan med rette forvente at en ansatt i butikken har fullmakt til å selge butikkens varer.

*Ved overskridelse:* Dersom butikkmedarbeideren gir 50 % rabatt uten lov, er butikken likevel bundet dersom kunden var i god tro (rabatten var ikke åpenbart urimelig). Butikken kan holde medarbeideren ansvarlig internt.

**Oppdragsfullmakt:**
Gis gjennom interne instruksjoner mellom fullmaktsgiver og fullmektig. Tredjepersonen kjenner normalt ikke til instruksjonenes innhold.

*Eksempel:* En far gir sønnen i oppdrag å selge familiens campingvogn for «minst 100 000 kr».

*Ved overskridelse:* Selger sønnen for 80 000 kr, er faren normalt bundet fordi kjøperen ikke kjente til instruksen. Faren kan kreve erstatning av sønnen for differansen.`
      }
    },
    {
      id: 'rett1-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Helene er daglig leder i et arkitektkontor med 12 ansatte. Uten å konsultere styret signerer hun en femårig leieavtale for nye kontorlokaler til 1,5 millioner kroner per år. Styret mener leieprisen er for høy og vil ut av avtalen. Vurder om Helene hadde fullmakt til å signere leieavtalen, og drøft utleierens rettsstilling. Bruk reglene om stillingsfullmakt og aksjeloven § 6-14.',
        hints: ['Aksjeloven § 6-14 sier at daglig leder står for den daglige ledelsen og kan ikke ta avgjørelser av «uvanlig art eller stor betydning» uten styrets godkjennelse.', 'Vurder om en femårig leieavtale faller innenfor «daglig drift» for et slikt arkitektkontor.'],
        solution: `**Drøfting:**

**Stillingsfullmakt:**
Som daglig leder har Helene stillingsfullmakt til å inngå avtaler som hører under den daglige driften av arkitektkontoret. Å skaffe kontorlokaler er nødvendig for driften.

**Aksjeloven § 6-14:**
Daglig leder kan ikke ta avgjørelser som er av «uvanlig art eller stor betydning» uten styrets samtykke. En femårig leieavtale til 1,5 millioner kr/år (totalt 7,5 millioner kr) for et kontor med 12 ansatte er trolig av **stor økonomisk betydning**. Helene burde ha forelagt saken for styret.

**Utleierens stilling:**
Spørsmålet er om utleieren var i **god tro**. En profesjonell utleier bør vite at en daglig leder normalt ikke kan binde selskapet til langvarige leieavtaler av denne størrelsen uten styrebehandling. Utleieren burde kanskje ha sjekket om det forelå styrevedtak.

**Konklusjon:** Det er usikkert om arkitektkontoret er bundet. Helene har trolig overskredet sin stillingsfullmakt. Dersom utleieren var i god tro og ikke burde forstått at Helene gikk utenfor sin fullmakt, er selskapet bundet. Men dersom utleieren som profesjonell part burde ha spurt etter styrevedtak, kan selskapet ha grunnlag for å bestride avtalen. Styret kan også velge å ratihabere avtalen.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4: Ugyldige avtaler
// ============================================================================

export const CHAPTER_RETTSLAERE_1_2_4: TextbookChapter = {
  id: 'rettslaere-1-2-4',
  courseId: 'rettslaere-1',
  chapterNumber: '2.4',
  title: 'Ugyldige avtaler',
  description: 'Tvang, svik, utnyttelse, umyndighet og avtaleloven § 36 – når en avtale kan kjennes ugyldig.',
  estimatedMinutes: 30,
  competenceGoals: [
    'vurdere om en avtale er ugyldig'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-2-4-intro',
      type: 'text',
      content: `## Ugyldige avtaler

En avtale som er inngått, er i utgangspunktet bindende – «avtaler skal holdes» (*pacta sunt servanda*). Men hva om du ble lurt? Hva om du signerte under press? Hva om du var 16 år da du signerte en kontrakt?

Norsk rett anerkjenner flere grunner til at en avtale kan være **ugyldig**, det vil si at den ikke kan gjøres gjeldende. Reglene om ugyldighet finner vi hovedsakelig i avtaleloven kapittel 3 (§§ 28–36) og i vergemålsloven.

I dette kapittelet ser vi på de viktigste ugyldighetsgrunnene.`
    },

    // --- BLOKK 1: Tvang ---
    {
      id: 'rett1-2-4-def-1',
      type: 'definition',
      title: 'Tvang (avtaleloven §§ 28 og 29)',
      content: `Avtaleloven skiller mellom to former for tvang:

**Grov tvang (§ 28):** En viljeserklæring er ugyldig dersom den er fremkalt ved **vold** eller **trusler om vold** som fremkaller «grundet frygt for liv eller helbred». Grov tvang gir **sterk ugyldighet** – avtalen er ugyldig overfor alle, også tredjepersoner i god tro.

**Annen tvang (§ 29):** En viljeserklæring kan kjennes ugyldig dersom den er fremkalt ved annen rettsstridig tvang, for eksempel trusler om å avsløre hemmeligheter, ødelegge noe av verdi, eller anmelde forhold til politiet. Annen tvang gir **svak ugyldighet** – avtalen er ugyldig bare dersom medkontrahenten kjente til eller burde kjent til tvangen.`
    },
    {
      id: 'rett1-2-4-example-1',
      type: 'example',
      title: 'Tvang i praksis',
      problem: 'Anders truer Berit med å publisere private bilder av henne på nettet dersom hun ikke selger ham bilen sin for 10 000 kroner (markedsverdi 150 000 kr). Berit signerer en kjøpsavtale under press. Er avtalen gyldig?',
      solution: `**Analyse:**

Anders har brukt **rettsstridig tvang** (trusler om å offentliggjøre private bilder) for å presse Berit til å inngå avtalen. Dette faller under avtaleloven § 29 (annen tvang).

Tvangen er klart **rettsstridig** – det er straffbart å true med å offentliggjøre private bilder (straffeloven § 267a om krenkelse av privatlivets fred, eventuelt § 263 om trusler).

Vilkårene for ugyldighet etter § 29 er oppfylt: viljeserklæringen er fremkalt ved rettsstridig tvang, og Anders (medkontrahenten) kjente naturligvis til tvangen siden han selv utøvde den.

**Konklusjon:** Avtalen er **ugyldig** etter avtaleloven § 29. Berit er ikke bundet. I tillegg kan Anders straffes for tvang (straffeloven § 251) og eventuelt trusler (§ 263).`
    },
    {
      id: 'rett1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedforskjellen mellom «grov tvang» (§ 28) og «annen tvang» (§ 29) i avtaleloven?',
        options: [
          { id: 'a', text: 'Grov tvang gjelder bare fysisk vold, annen tvang gjelder bare verbale trusler', isCorrect: false },
          { id: 'b', text: 'Grov tvang gir sterk ugyldighet (ugyldig overfor alle), annen tvang gir svak ugyldighet (ugyldig bare overfor den som kjente til tvangen)', isCorrect: true },
          { id: 'c', text: 'Grov tvang er straffbart, annen tvang er det ikke', isCorrect: false },
          { id: 'd', text: 'Det er ingen praktisk forskjell mellom de to bestemmelsene', isCorrect: false }
        ],
        solution: 'Hovedforskjellen ligger i ugyldighetsvirkningen. Grov tvang (§ 28) gir sterk ugyldighet – avtalen er ugyldig overfor alle, inkludert godtroende tredjepersoner. Annen tvang (§ 29) gir svak ugyldighet – avtalen kan bare kjennes ugyldig dersom medkontrahenten kjente til eller burde kjent til tvangen.'
      }
    },

    // --- BLOKK 2: Svik og utnyttelse ---
    {
      id: 'rett1-2-4-text-2',
      type: 'text',
      content: `### Svik (§ 30) og utnyttelse (§ 31)

**Svik (avtaleloven § 30):**
En avtale er ugyldig dersom den er fremkalt ved **svikaktig adferd** (bevisst villedning/løgn) fra medkontrahenten. Eksempler: å gi uriktige opplysninger om en vares tilstand, fortie vesentlige mangler, eller bevisst gi feilaktig informasjon for å få motparten til å inngå avtalen.

Svik gir **svak ugyldighet** – medkontrahenten må ha kjent til eller medvirket til sviket.

**Utnyttelse (avtaleloven § 31):**
En avtale kan kjennes ugyldig dersom noen har utnyttet en annens **nødstilstand**, **lettsinne**, **svakhet** eller **avhengighetsforhold** til å oppnå urimelige fordeler. Det kreves at det er et klart **misforhold** mellom ytelsene.

Typiske eksempler: å gi et lån med ågerrenter til en person i akutt pengenød, eller å kjøpe et verdifullt maleri til en brøkdel av verdien fra en dement person.`
    },
    {
      id: 'rett1-2-4-example-2',
      type: 'example',
      title: 'Svik ved bilsalg',
      problem: 'Henrik selger bilen sin til Camilla for 120 000 kroner. Henrik fortier bevisst at bilen har vært i en stor kollisjon og har skjulte rustskader. Camilla oppdager dette etter kjøpet. Kan hun påberope seg ugyldighet?',
      solution: `**Analyse:**

Henrik har bevisst fortiet vesentlige opplysninger om bilens tilstand – dette er **svikaktig adferd** etter avtaleloven § 30.

Vilkårene for svik er oppfylt:
1. Henrik har handlet bevisst – han visste om kollisjonen og rustskadene
2. Han har fortiet opplysningene med den hensikt å få Camilla til å kjøpe
3. Opplysningene var vesentlige for Camillas kjøpsbeslutning – hun ville neppe betalt 120 000 kr for en kollisjonsskadd bil

**Konklusjon:** Camilla kan påberope seg ugyldighet etter avtaleloven § 30. Avtalen kan heves, og Henrik må tilbakebetale kjøpesummen mot å få bilen tilbake.

I tillegg kan Camilla ha krav etter kjøpsloven/forbrukerkjøpsloven om mangel – den fortiede kollisjonshistorikken utgjør en mangel ved bilen.`
    },
    {
      id: 'rett1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi et eksempel på en situasjon der en avtale kan kjennes ugyldig etter avtaleloven § 31 (utnyttelse). Forklar hvilke vilkår som må være oppfylt, og hvem som er den utnyttede parten.',
        hints: ['Tenk på situasjoner der en person i en sårbar posisjon blir presset til å akseptere urimelige vilkår.'],
        solution: `**Eksempel:** Fatima er i akutt pengenød etter å ha mistet jobben og trenger penger til husleie. En nabo tilbyr å kjøpe Fatimas bil (verdi ca. 200 000 kr) for 40 000 kr. Fatima aksepterer fordi hun trenger pengene umiddelbart.

**Vilkårene etter § 31:**
1. **Nødstilstand/svakhet:** Fatima er i akutt pengenød (nødstilstand).
2. **Utnyttelse:** Naboen vet om Fatimas situasjon og tilbyr bevisst en lav pris.
3. **Misforhold mellom ytelsene:** Bilen er verdt 200 000 kr, men selges for 40 000 kr – et klart misforhold.

**Utnyttet part:** Fatima er den utnyttede parten. Naboen er den som utnytter hennes sårbare situasjon.

**Virkning:** Avtalen kan kjennes ugyldig, og bilen skal leveres tilbake mot at Fatima tilbakebetaler 40 000 kr.`
      }
    },

    // --- BLOKK 3: Umyndighet og avtaleloven § 36 ---
    {
      id: 'rett1-2-4-text-3',
      type: 'text',
      content: `### Umyndighet

Etter vergemålsloven § 9 blir man myndig (rettslig handleevne) ved fylte 18 år. **Umyndige** (personer under 18 år og voksne under vergemål) kan som hovedregel ikke binde seg ved avtale.

Viktige unntak:
- **Dagligdagse avtaler:** Mindreårige kan inngå vanlige hverdagsavtaler som er rimelige ut fra alder og modenhet (f.eks. kjøpe mat, klær, bussbillett).
- **Arbeidsinntekter:** En mindreårig kan råde over midler han eller hun selv har tjent ved eget arbeid, jf. vergemålsloven § 12.
- **Etterfølgende godkjennelse:** Vergen kan godkjenne en avtale inngått av den mindreårige, og den blir da bindende.`
    },
    {
      id: 'rett1-2-4-def-2',
      type: 'definition',
      title: 'Avtaleloven § 36 – generalklausulen',
      content: `Avtaleloven § 36 er den viktigste enkeltbestemmelsen for å sette urimelige avtaler til side. Bestemmelsen lyder (forenklet):

*«En avtale kan helt eller delvis settes til side eller endres for så vidt det ville virke urimelig … å gjøre den gjeldende.»*

Ved urimelighetsvurderingen skal det legges vekt på:
- **Avtalens innhold** – er vilkårene balanserte?
- **Partenes stilling** – er det et misforhold i styrkeforholdet?
- **Forholdene ved avtaleinngåelsen** – ble den ene parten presset eller villedet?
- **Senere inntrådte forhold** – har omstendigheter endret seg vesentlig etter avtaleinngåelsen?

§ 36 er en **sikkerhetsventil** som fanger opp urimelige avtaler som ikke rammes av de spesifikke ugyldighetsreglene i §§ 28–33.`
    },
    {
      id: 'rett1-2-4-example-3',
      type: 'example',
      title: 'Avtaleloven § 36 i praksis',
      problem: 'En 19-åring uten erfaring med boligmarkedet signerer en leieavtale for en hybel. Kontrakten inneholder et vilkår om at leietaker må betale 6 måneders husleie som erstatning dersom han sier opp avtalen før det har gått 3 år. Kan vilkåret settes til side etter avtaleloven § 36?',
      solution: `**Analyse etter avtaleloven § 36:**

1. **Avtalens innhold:** Et erstatningskrav på 6 måneders husleie ved oppsigelse er svært strengt og uvanlig i leiemarkedet. Husleieloven § 9-6 gir leietaker rett til å si opp med 3 måneders varsel.

2. **Partenes stilling:** 19-åringen er en uerfaren part som stiller svakt overfor en profesjonell utleier. Det er et klart styrkeforskjell.

3. **Forholdene ved avtaleinngåelsen:** 19-åringen manglet erfaring med leieavtaler og var trolig ikke klar over at vilkåret er uvanlig og strengt.

4. **Husleieloven:** Husleieloven § 1-2 er preseptorisk – den kan ikke fravikes til ulempe for leietaker. Vilkåret strider trolig også mot husleielovens regler om oppsigelse.

**Konklusjon:** Vilkåret kan med stor sannsynlighet settes til side etter avtaleloven § 36. Det er urimelig å binde en ung leietaker til 6 måneders erstatning ved oppsigelse. I tillegg strider vilkåret trolig mot husleielovens preseptoriske regler.`
    },
    {
      id: 'rett1-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når en 15-åring kjøper en mobiltelefon til 12 000 kroner uten foreldrenes samtykke – hva er rettsstillingen?',
        options: [
          { id: 'a', text: 'Avtalen er gyldig fordi mobiltelefoner er dagligdagse kjøp', isCorrect: false },
          { id: 'b', text: 'Avtalen er gyldig fordi alle over 12 år kan handle fritt', isCorrect: false },
          { id: 'c', text: 'Avtalen er som hovedregel ugyldig fordi 15-åringen er umyndig, men foreldrene kan godkjenne den i ettertid', isCorrect: true },
          { id: 'd', text: 'Avtalen er alltid ugyldig og kan aldri godkjennes', isCorrect: false }
        ],
        solution: 'En 15-åring er umyndig og kan som hovedregel ikke binde seg ved avtaler. Kjøp av en mobiltelefon til 12 000 kr overstiger hva som regnes som «dagligdagse avtaler» for en 15-åring. Avtalen er derfor ugyldig. Men foreldrene (vergene) kan godkjenne avtalen i ettertid (etterfølgende godkjennelse), og den blir da bindende.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- En avtale kan være **ugyldig** selv om den formelt er inngått – «avtaler skal holdes» er ikke absolutt.
- **Grov tvang** (§ 28) gir **sterk ugyldighet** – ugyldig overfor alle.
- **Annen tvang** (§ 29) og **svik** (§ 30) gir **svak ugyldighet** – ugyldig bare overfor den som kjente til forholdet.
- **Utnyttelse** (§ 31) rammer tilfeller der noen utnytter en annens nødstilstand, svakhet eller avhengighetsforhold.
- **Umyndige** (under 18 år) kan som hovedregel ikke binde seg, men dagligdagse avtaler og avtaler godkjent av verge er unntak.
- **Avtaleloven § 36** (generalklausulen) er en sikkerhetsventil som lar domstolene sette urimelige avtaler helt eller delvis til side.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En 17-åring bruker sparepenger (gavebeløp fra bestemor) på å kjøpe en gamingPC til 25 000 kroner fra en nettbutikk. Foreldrene vil ikke godkjenne kjøpet. Vurder om avtalen er gyldig. Gjør rede for reglene om umyndighet, dagligdagse avtaler og vergemålsloven § 12.',
        hints: ['Vergemålsloven § 12 gir mindreårige rett til å råde over midler de selv har tjent ved eget arbeid. Gjelder dette for gavebeløp?'],
        solution: `**Analyse:**

**Umyndighet:** 17-åringen er umyndig og kan som hovedregel ikke binde seg ved avtale.

**Dagligdags avtale?** Et kjøp til 25 000 kr er ikke en dagligdags avtale for en 17-åring. Det er et betydelig beløp som overstiger det som er «sedvanlig» for aldersgruppen.

**Vergemålsloven § 12:** Bestemmelsen gir mindreårige rett til å råde over midler de «selv har fortjent ved eget arbeid». Gavebeløp fra bestemor er **ikke** arbeidsinntekt – § 12 gir derfor ikke grunnlag for kjøpet.

**Foreldrenes holdning:** Foreldrene nekter å godkjenne kjøpet. Uten etterfølgende godkjennelse fra vergene er avtalen ugyldig.

**Konklusjon:** Avtalen er **ugyldig**. 17-åringen er umyndig, kjøpet er ikke dagligdags, midlene er ikke arbeidsinntekt (§ 12), og foreldrene nekter å godkjenne. Nettbutikken må ta varen tilbake og tilbakebetale kjøpesummen.`
      }
    },
    {
      id: 'rett1-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende situasjon med utgangspunkt i avtaleloven §§ 28–33 og § 36:\n\nEn eldre mann på 82 år med begynnende demens signerer en avtale om å selge huset sitt (verdi 4 millioner kr) til en «hjelpsom» nabo for 1,5 millioner kr. Naboen kjente til mannens helsetilstand. Pårørende oppdager avtalen etter to uker.\n\nVurder (a) om avtalen kan kjennes ugyldig, (b) hvilket rettsgrunnlag som er mest aktuelt, og (c) hva konsekvensene av ugyldighet vil være.',
        hints: ['Vurder avtaleloven § 31 (utnyttelse av svakhet) og § 36 (urimelighetsvurdering).', 'Tenk også på vergemålslovens regler dersom mannen er satt under vergemål.'],
        solution: `**Drøfting:**

**(a) Kan avtalen kjennes ugyldig?**
Ja, det er sterke grunner til ugyldighet.

**(b) Rettsgrunnlag:**

**Avtaleloven § 31 – Utnyttelse:**
Vilkårene er trolig oppfylt:
- *Svakhet:* Mannen har begynnende demens, noe som svekker hans vurderingsevne
- *Utnyttelse:* Naboen kjente til helsetilstanden og utnyttet den bevisst
- *Misforhold:* Huset er verdt 4 millioner, men selges for 1,5 millioner – et misforhold på 2,5 millioner kr

**Avtaleloven § 36 – Urimelighetsvurdering:**
- *Avtalens innhold:* Prisen er kun 37,5 % av markedsverdi – klart urimelig
- *Partenes stilling:* En dement 82-åring mot en utnyttende nabo – enormt styrkeforskjell
- *Forholdene ved inngåelsen:* Mannen manglet evne til å vurdere avtalens konsekvenser

**Vergemålsloven:**
Dersom mannen er satt under vergemål, kan avtalen også være ugyldig fordi vergen ikke har samtykket. Selv uten formelt vergemål kan hans svekkede tilstand gjøre at han manglet rettslig handleevne.

**(c) Konsekvenser av ugyldighet:**
Avtalen heves – huset tilbakeføres til den eldre mannen, og naboen får tilbake 1,5 millioner kr. I tillegg kan naboen risikere erstatningsansvar og eventuelt straffeforfølgelse for bedrageri (straffeloven § 371) eller utnyttelse.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5: Kjøpsloven
// ============================================================================

export const CHAPTER_RETTSLAERE_1_2_5: TextbookChapter = {
  id: 'rettslaere-1-2-5',
  courseId: 'rettslaere-1',
  chapterNumber: '2.5',
  title: 'Kjøpsloven',
  description: 'Kjøp mellom privatpersoner, mangel, forsinkelse og misligholdsbeføyelser etter kjøpsloven.',
  estimatedMinutes: 30,
  competenceGoals: [
    'anvende kjøpslovens regler'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-2-5-intro',
      type: 'text',
      content: `## Kjøpsloven

Når du kjøper en brukt bil av naboen, en sykkel på Finn.no eller et maleri på et loppemarked, er det **kjøpsloven** (lov om kjøp av 13. mai 1988 nr. 27) som regulerer forholdet mellom kjøper og selger.

Kjøpsloven gjelder for kjøp mellom privatpersoner og mellom næringsdrivende – men **ikke** for forbrukerkjøp (der gjelder forbrukerkjøpsloven, som vi ser på i neste kapittel). Loven er **deklaratorisk**, noe som betyr at partene kan avtale andre løsninger enn det loven legger opp til.

I dette kapittelet ser vi på de sentrale reglene om mangler, forsinkelse og hva du kan kreve når selgeren ikke oppfyller sin del av avtalen.`
    },

    // --- BLOKK 1: Kjøpslovens virkeområde ---
    {
      id: 'rett1-2-5-def-1',
      type: 'definition',
      title: 'Kjøpsloven – virkeområde',
      content: `**Kjøpsloven** gjelder for kjøp av **løsøre** (ting) og er den generelle loven for kjøpsforhold i norsk rett.

Loven gjelder:
- Kjøp mellom to **privatpersoner** (f.eks. bruktbilsalg på Finn.no)
- Kjøp mellom to **næringsdrivende** (f.eks. bedrift kjøper kontormøbler fra en annen bedrift)

Loven gjelder **ikke**:
- **Forbrukerkjøp** (forbruker kjøper fra næringsdrivende) – her gjelder forbrukerkjøpsloven
- **Fast eiendom** – her gjelder avhendingslova
- **Internasjonale kjøp** regulert av CISG (FN-konvensjonen om internasjonale løsørekjøp)

Kjøpsloven er **deklaratorisk** (fravikelig), jf. § 3. Partene kan altså avtale vilkår som avviker fra lovens regler, for eksempel «solgt som den er».`
    },
    {
      id: 'rett1-2-5-text-1',
      type: 'text',
      content: `### «Solgt som den er» – forbehold (§ 19)

Et svært praktisk tema i privatpersonkjøp er forbeholdet **«solgt som den er»** (eller «as is»). Kjøpsloven § 19 regulerer dette:

Selv om tingen er solgt «som den er», foreligger det en mangel dersom:
1. Tingen ikke svarer til opplysninger selgeren har gitt om tingen, og som har innvirket på kjøpet (§ 19 bokstav a)
2. Selgeren har forsømt å gi opplysninger om vesentlige forhold ved tingen som han måtte kjenne til, og som kjøperen hadde grunn til å regne med å få (§ 19 bokstav b)
3. Tingen er i **vesentlig dårligere stand** enn kjøperen hadde grunn til å regne med etter kjøpesummen og forholdene ellers (§ 19 bokstav c)

Forbeholdet «solgt som den er» gir altså ikke selgeren et fullstendig frikort – det gjelder fortsatt et minstekrav.`
    },
    {
      id: 'rett1-2-5-example-1',
      type: 'example',
      title: '«Solgt som den er» – er det en mangel?',
      problem: 'Lars selger sin 10 år gamle bil til Kari for 80 000 kroner via Finn.no. Annonsen sier «solgt som den er». Etter to uker oppdager Kari at motoren har en alvorlig feil som koster 45 000 kroner å reparere. Lars visste om motorproblemet, men sa ingenting. Foreligger det en mangel?',
      solution: `**Analyse etter kjøpsloven § 19:**

Selv om bilen er solgt «som den er», kan det foreligge mangel etter § 19.

**§ 19 bokstav b – tilbakeholdte opplysninger:**
Lars visste om motorproblemet, men fortalte ikke Kari om det. En alvorlig motorfeil er et «vesentlig forhold» ved bilen som Lars «måtte kjenne til». Kari hadde grunn til å forvente å få opplysninger om en slik feil.

**§ 19 bokstav c – vesentlig dårligere stand:**
En reparasjonskostnad på 45 000 kroner utgjør over halvparten av kjøpesummen (80 000 kr). Bilen er i vesentlig dårligere stand enn Kari hadde grunn til å regne med ut fra prisen.

**Konklusjon:** Det foreligger mangel etter kjøpsloven § 19 bokstav b og trolig også bokstav c. «Solgt som den er»-forbeholdet beskytter ikke Lars når han bevisst har holdt tilbake opplysninger om en alvorlig feil.`
    },
    {
      id: 'rett1-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Kjøpsloven gjelder for kjøp mellom privatpersoner. Hvilken lov gjelder når en forbruker kjøper fra en næringsdrivende?',
        options: [
          { id: 'a', text: 'Kjøpsloven', isCorrect: false },
          { id: 'b', text: 'Forbrukerkjøpsloven', isCorrect: true },
          { id: 'c', text: 'Avhendingslova', isCorrect: false },
          { id: 'd', text: 'Markedsføringsloven', isCorrect: false }
        ],
        solution: 'Forbrukerkjøpsloven gjelder for kjøp av ting fra en næringsdrivende til en forbruker. Kjøpsloven gjelder mellom privatpersoner og mellom næringsdrivende, men ikke for forbrukerkjøp. Avhendingslova gjelder for fast eiendom.'
      }
    },

    // --- BLOKK 2: Mangel og forsinkelse ---
    {
      id: 'rett1-2-5-def-2',
      type: 'definition',
      title: 'Mangel (kjøpsloven §§ 17–18)',
      content: `En **mangel** foreligger når tingen ikke er i samsvar med det som er avtalt eller det kjøperen med rimelighet kunne forvente.

**Kjøpsloven § 17 – krav til tingens egenskaper:**
Tingen skal være i samsvar med avtalen og egne seg for det formålet den vanligvis brukes til. Avviker tingen fra dette, foreligger det en mangel.

**Kjøpsloven § 18 – opplysningssvikt:**
Det foreligger mangel dersom tingen ikke svarer til opplysninger som selgeren har gitt om tingens egenskaper eller bruk, og som kan antas å ha innvirket på kjøpet.

**Tidspunktet for mangelsvurdering:** Mangelen må ha foreligget på **leveringstidspunktet** (risikoens overgang), jf. § 21. At tingen går i stykker etter levering på grunn av normal slitasje, er ikke en mangel.`
    },
    {
      id: 'rett1-2-5-text-2',
      type: 'text',
      content: `### Forsinkelse (kjøpsloven §§ 22–29)

En **forsinkelse** foreligger når tingen ikke leveres til avtalt tid, eller ikke leveres i det hele tatt.

**Kjøpsloven § 22** gir kjøperen flere beføyelser ved forsinkelse:
- **Fastholde kjøpet** og kreve oppfyllelse (§ 23) – selgeren må levere
- **Heve kjøpet** dersom forsinkelsen er et **vesentlig kontraktsbrudd** (§ 25)
- **Kreve erstatning** for tap som følge av forsinkelsen (§ 27)

**Reklamasjon:** Kjøperen må reklamere innen rimelig tid etter at han ble kjent med mangelen (§ 32). For kjøp mellom privatpersoner er det ingen absolutt reklamasjonsfrist som i forbrukerkjøpsloven, men kravet til rimelig tid innebærer at man ikke kan vente for lenge.

**Undersøkelsesplikt:** Kjøperen plikter å undersøke tingen etter levering «slik god skikk tilsier» (§ 31). Oppdager kjøperen en mangel som burde vært funnet ved undersøkelse, kan han tape sin rett til å reklamere.`
    },
    {
      id: 'rett1-2-5-example-2',
      type: 'example',
      title: 'Forsinkelse og heving',
      problem: 'Per avtaler med Silje at hun skal levere en brukt vaskemaskin 15. januar. Silje leverer ikke maskinen og svarer ikke på meldinger. 25. januar har Per fortsatt ikke fått vaskemaskinen. Kan Per heve kjøpet?',
      solution: `**Analyse etter kjøpsloven §§ 22–25:**

Det foreligger en **forsinkelse** – vaskemaskinen er ikke levert til avtalt tid (15. januar), jf. kjøpsloven § 22.

**Krav om oppfyllelse (§ 23):** Per kan fastholde kjøpet og kreve at Silje leverer. Men Silje svarer ikke på meldinger, noe som tyder på at hun ikke har til hensikt å oppfylle.

**Heving (§ 25):** Kjøpet kan heves dersom forsinkelsen er et **vesentlig kontraktsbrudd**. 10 dagers forsinkelse uten noen forklaring fra selger – og uten svar på henvendelser – tyder sterkt på at Silje ikke har til hensikt å levere. Dette er et vesentlig kontraktsbrudd.

**Konklusjon:** Per kan **heve kjøpet** etter kjøpsloven § 25 og kreve tilbakebetaling av kjøpesummen. I tillegg kan han kreve **erstatning** etter § 27 for eventuelle merutgifter (f.eks. hvis han måtte kjøpe en dyrere vaskemaskin et annet sted).`
    },
    {
      id: 'rett1-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Etter kjøpsloven § 19 bokstav c kan det foreligge mangel selv om tingen er «solgt som den er». Hva kreves?',
        options: [
          { id: 'a', text: 'At tingen har en hvilken som helst feil', isCorrect: false },
          { id: 'b', text: 'At tingen er i vesentlig dårligere stand enn kjøperen hadde grunn til å regne med etter kjøpesummen og forholdene ellers', isCorrect: true },
          { id: 'c', text: 'At selgeren har handlet uaktsomt', isCorrect: false },
          { id: 'd', text: 'At kjøperen ikke har undersøkt tingen før kjøpet', isCorrect: false }
        ],
        solution: 'Etter kjøpsloven § 19 bokstav c foreligger det mangel selv ved «solgt som den er»-forbehold dersom tingen er i vesentlig dårligere stand enn kjøperen hadde grunn til å regne med. Vurderingen er objektiv og tar hensyn til kjøpesummen, tingens alder, type og forholdene ellers. Det kreves altså et kvalifisert avvik – ikke enhver feil er nok.'
      }
    },

    // --- BLOKK 3: Misligholdsbeføyelser ---
    {
      id: 'rett1-2-5-text-3',
      type: 'text',
      content: `### Misligholdsbeføyelser ved mangel

Når tingen har en mangel, gir kjøpsloven kjøperen flere virkemidler – såkalte **misligholdsbeføyelser**:

**1. Retting (§ 34):** Selgeren har rett til å rette (reparere) mangelen dersom dette kan skje uten vesentlig ulempe for kjøperen. Kjøperen kan også kreve retting.

**2. Prisavslag (§ 38):** Kjøperen kan kreve prisavslag tilsvarende verdireduksjonen mangelen medfører.

**3. Heving (§ 39):** Kjøperen kan heve kjøpet dersom mangelen utgjør et **vesentlig kontraktsbrudd**. Terskelen for heving er høy – mangelen må være av en viss alvorlighetsgrad.

**4. Erstatning (§ 40):** Kjøperen kan kreve erstatning for tap som følge av mangelen.

Kjøperen må **reklamere** innen rimelig tid etter at mangelen ble eller burde blitt oppdaget (§ 32). Unnlater kjøperen å reklamere i tide, taper han retten til å gjøre mangelen gjeldende.`
    },
    {
      id: 'rett1-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hanne kjøper en brukt sofa av Martin for 8 000 kroner via Finn.no. Annonsen beskriver sofaen som «i god stand, ingen flekker». Når Hanne henter sofaen, oppdager hun store flekker og en knekt ramme som Martin ikke nevnte. Vurder om det foreligger en mangel etter kjøpsloven, og hvilke misligholdsbeføyelser Hanne kan gjøre gjeldende.',
        hints: ['Vurder kjøpsloven §§ 17, 18 og 19. Tenk på om beskrivelsen i annonsen stemmer med virkeligheten.'],
        solution: `**Analyse:**

**Mangel etter § 17:** Sofaen er ikke i samsvar med avtalen – annonsen beskrev den som «i god stand, ingen flekker», men den har store flekker og knekt ramme.

**Mangel etter § 18:** Selgerens opplysninger om at sofaen var i god stand og uten flekker er uriktige. Disse opplysningene kan antas å ha innvirket på kjøpet – Hanne betalte 8 000 kr fordi hun trodde sofaen var i den standen Martin beskrev.

**Konklusjon:** Det foreligger mangel etter både §§ 17 og 18.

**Misligholdsbeføyelser:**
- **Prisavslag (§ 38):** Hanne kan kreve prisavslag som tilsvarer verdireduksjonen, for eksempel 3 000–4 000 kr for flekkene og den knekte rammen.
- **Heving (§ 39):** Dersom mangelen er vesentlig (en knekt ramme og store flekker på en sofa beskrevet som «i god stand» kan være vesentlig), kan Hanne heve kjøpet og kreve pengene tilbake mot å levere sofaen tilbake.
- **Erstatning (§ 40):** Hanne kan kreve erstatning for eventuelle merutgifter, for eksempel transportkostnader.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Kjøpsloven** gjelder for kjøp mellom privatpersoner og mellom næringsdrivende – ikke for forbrukerkjøp.
- Loven er **deklaratorisk** – partene kan avtale andre løsninger, f.eks. «solgt som den er».
- Selv ved «solgt som den er»-forbehold foreligger mangel dersom selgeren har gitt uriktige opplysninger (§ 19 bokstav a), tilbakeholdt vesentlige opplysninger (§ 19 bokstav b), eller tingen er i **vesentlig dårligere stand** enn forventet (§ 19 bokstav c).
- **Mangel** foreligger når tingen ikke samsvarer med avtalen (§ 17) eller opplysninger selgeren har gitt (§ 18).
- **Forsinkelse** gir kjøperen rett til å fastholde kjøpet, heve eller kreve erstatning (§§ 22–29).
- **Misligholdsbeføyelser** ved mangel: retting (§ 34), prisavslag (§ 38), heving (§ 39) og erstatning (§ 40).
- Kjøperen må **reklamere** innen rimelig tid (§ 32).`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er vilkåret for at kjøperen kan heve et kjøp etter kjøpsloven § 39?',
        options: [
          { id: 'a', text: 'At kjøperen er misfornøyd med tingen', isCorrect: false },
          { id: 'b', text: 'At mangelen utgjør et vesentlig kontraktsbrudd', isCorrect: true },
          { id: 'c', text: 'At tingen har en hvilken som helst mangel', isCorrect: false },
          { id: 'd', text: 'At selgeren nekter å gi prisavslag', isCorrect: false }
        ],
        solution: 'Heving etter kjøpsloven § 39 krever at mangelen utgjør et vesentlig kontraktsbrudd. Terskelen er høy – det er ikke nok at kjøperen er misfornøyd eller at det finnes en mindre mangel. Mangelen må være av en slik karakter at det er rimelig at kjøperen kan si seg løs fra avtalen. Mindre mangler gir grunnlag for prisavslag eller retting, men ikke heving.'
      }
    },
    {
      id: 'rett1-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ola selger sin 15 år gamle båt til Petter for 120 000 kroner. Annonsen sier «solgt som den er, uten garanti». Etter to uker oppdager Petter at båten har en råteskade i skroget som koster 70 000 kroner å reparere. Ola visste ikke om skaden. Vurder (a) om det foreligger en mangel etter kjøpsloven § 19, (b) om Petter kan heve kjøpet, og (c) betydningen av at Ola ikke visste om skaden.',
        hints: ['Vurder § 19 bokstav c: er båten i «vesentlig dårligere stand» enn forventet ut fra pris og alder?', 'Husk at kjøpsloven § 19 bokstav c er en objektiv vurdering – selgerens kunnskap er ikke avgjørende for denne bestemmelsen.'],
        solution: `**Analyse:**

**(a) Mangel etter § 19:**
Båten er solgt «som den er». Vi vurderer § 19:

*§ 19 bokstav b (tilbakeholdte opplysninger):* Ola visste ikke om skaden, så han har ikke bevisst holdt tilbake opplysninger. Bokstav b krever at selgeren «måtte kjenne til» forholdet – det er usikkert om Ola burde visst om en skjult råteskade.

*§ 19 bokstav c (vesentlig dårligere stand):* Reparasjonskostnaden på 70 000 kr utgjør ca. 58 % av kjøpesummen (120 000 kr). For en 15 år gammel båt forventes noe slitasje, men en råteskade som koster over halvparten av kjøpesummen å reparere er trolig «vesentlig dårligere stand» enn Petter hadde grunn til å regne med. Bokstav c er en objektiv vurdering – det avgjørende er misforholdet mellom forventet og faktisk tilstand, ikke selgerens kunnskap.

**Konklusjon (a):** Det foreligger sannsynligvis mangel etter § 19 bokstav c.

**(b) Heving:**
Heving etter § 39 krever vesentlig kontraktsbrudd. En skjult skade som koster 58 % av kjøpesummen å reparere utgjør trolig et vesentlig kontraktsbrudd. Petter kan sannsynligvis heve kjøpet.

**(c) Olas uvitenhet:**
At Ola ikke visste om skaden har betydning for § 19 bokstav b (han har ikke bevisst tilbakeholdt opplysninger), men er uten betydning for § 19 bokstav c (objektiv vurdering). Olas uvitenhet kan også påvirke erstatningsspørsmålet – etter § 40 er erstatning betinget av at selgeren kan bebreides (culpa), noe som er mer usikkert når Ola ikke kjente til skaden.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6: Forbrukerkjøpsloven
// ============================================================================

export const CHAPTER_RETTSLAERE_1_2_6: TextbookChapter = {
  id: 'rettslaere-1-2-6',
  courseId: 'rettslaere-1',
  chapterNumber: '2.6',
  title: 'Forbrukerkjøpsloven',
  description: 'Forbrukervern, bevisbyrde, reklamasjonsfrister og garantier ved kjøp fra næringsdrivende.',
  estimatedMinutes: 30,
  competenceGoals: [
    'anvende forbrukerkjøpslovens regler'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-2-6-intro',
      type: 'text',
      content: `## Forbrukerkjøpsloven

Når du handler i en butikk, bestiller på nett eller kjøper en ny mobiltelefon, er du beskyttet av **forbrukerkjøpsloven** (lov om forbrukerkjøp av 21. juni 2002 nr. 34). Denne loven gir forbrukere et sterkere vern enn kjøpsloven gir mellom privatpersoner.

Forbrukerkjøpsloven er **preseptorisk** (ufravikelig) – den kan ikke fravikes til ulempe for forbrukeren, jf. § 3. Det betyr at en butikk ikke kan skrive i sine vilkår at du har færre rettigheter enn loven gir deg. Uansett hva vilkårene sier, har du alltid minst de rettighetene som forbrukerkjøpsloven gir.

I dette kapittelet ser vi på de viktigste forskjellene mellom kjøpsloven og forbrukerkjøpsloven, og hvorfor forbrukervernet er så viktig.`
    },

    // --- BLOKK 1: Forbrukerbegrepet og lovens virkeområde ---
    {
      id: 'rett1-2-6-def-1',
      type: 'definition',
      title: 'Forbrukerkjøp',
      content: `Et **forbrukerkjøp** er et kjøp av en ting fra en **næringsdrivende** (selger) til en **forbruker** (kjøper), jf. forbrukerkjøpsloven § 1.

**Forbruker:** En fysisk person som ikke hovedsakelig handler som ledd i næringsvirksomhet. Du handler som forbruker når du kjøper ting til privat bruk.

**Næringsdrivende:** En person eller et selskap som selger ting som ledd i næringsvirksomhet.

**Viktige kjennetegn ved forbrukerkjøpsloven:**
1. **Preseptorisk** (§ 3) – kan ikke fravikes til ulempe for forbrukeren
2. **Bevisbyrden** ligger hos selgeren de første 6 månedene (§ 18 andre ledd)
3. **Reklamasjonsfrist** på 2 år (5 år for varer med lengre levetid) (§ 27)
4. Selgeren kan **ikke** ta «solgt som den er»-forbehold overfor forbruker (§ 17)`
    },
    {
      id: 'rett1-2-6-text-1',
      type: 'text',
      content: `### Bevisbyrde – hvem må bevise hva?

En av de viktigste forskjellene mellom kjøpsloven og forbrukerkjøpsloven er **bevisbyrden**.

**Forbrukerkjøpsloven § 18 andre ledd:**
Dersom en mangel viser seg innen **seks måneder** etter levering, presumeres det at mangelen forelå ved levering – med mindre selgeren kan bevise noe annet. Det er altså **selgeren** som har bevisbyrden de første seks månedene.

I praksis betyr dette:
- Slutter mobilen å virke etter 3 måneder? → Selgeren må bevise at feilen ikke skyldes en produksjonsfeil
- Går vaskemaskinen i stykker etter 5 måneder? → Selgeren må bevise at du har brukt den feil

Etter kjøpsloven (privatpersonkjøp) er det derimot **kjøperen** som må bevise at mangelen forelå ved levering. Dette gir forbrukeren et vesentlig bedre vern.`
    },
    {
      id: 'rett1-2-6-example-1',
      type: 'example',
      title: 'Bevisbyrde i praksis',
      problem: 'Emma kjøper en ny bærbar PC til 12 000 kroner i en elektronikkbutikk. Etter fire måneder slutter skjermen å fungere. Butikken hevder at Emma har mishandlet PCen og nekter å reparere. Hvem har bevisbyrden?',
      solution: `**Analyse etter forbrukerkjøpsloven § 18:**

Mangelen (defekt skjerm) har vist seg innen seks måneder etter levering. Etter forbrukerkjøpsloven § 18 andre ledd presumeres det da at mangelen forelå ved levering.

**Bevisbyrden ligger hos butikken:** Det er butikken (den næringsdrivende) som må bevise at skjermfeilen skyldes Emmas bruk – ikke omvendt. Dersom butikken ikke kan dokumentere at Emma har mishandlet PCen (f.eks. gjennom synlige skader, væskeskade eller lignende), må butikken reparere, bytte eller gi pengene tilbake.

**Konklusjon:** Emma trenger ikke bevise at feilen er en produksjonsfeil. Butikken må bevise at feilen skyldes Emmas bruk. Klarer de ikke det, har Emma krav på retting, omlevering eller heving etter forbrukerkjøpsloven §§ 29–32.`
    },
    {
      id: 'rett1-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at forbrukerkjøpsloven er preseptorisk?',
        options: [
          { id: 'a', text: 'Loven gjelder bare for dyre kjøp over 5 000 kroner', isCorrect: false },
          { id: 'b', text: 'Selgeren kan avtale dårligere vilkår for forbrukeren enn det loven sier', isCorrect: false },
          { id: 'c', text: 'Loven kan ikke fravikes til ulempe for forbrukeren', isCorrect: true },
          { id: 'd', text: 'Loven gjelder bare for kjøp i fysiske butikker', isCorrect: false }
        ],
        solution: 'At forbrukerkjøpsloven er preseptorisk (ufravikelig) betyr at den ikke kan fravikes til ulempe for forbrukeren, jf. § 3. Selgeren kan ikke skrive i vilkårene sine at forbrukeren har færre rettigheter enn loven gir. Slike vilkår er ugyldige. Selgeren kan derimot gi forbrukeren bedre rettigheter enn loven krever.'
      }
    },

    // --- BLOKK 2: Reklamasjon og garanti ---
    {
      id: 'rett1-2-6-text-2',
      type: 'text',
      content: `### Reklamasjonsfrister (§ 27)

Forbrukerkjøpsloven gir forbrukeren klare **reklamasjonsfrister**:

**Relativ reklamasjonsfrist:** Forbrukeren må reklamere innen **rimelig tid** etter at mangelen ble oppdaget eller burde vært oppdaget. Rimelig tid er normalt to måneder.

**Absolutt reklamasjonsfrist:** Forbrukeren må reklamere innen:
- **2 år** for de fleste varer
- **5 år** for varer som er ment å vare vesentlig lenger (f.eks. hvitevarer, møbler, biler, elektronikk med lang levetid)

Reklamasjonsfristen løper fra forbrukeren overtok tingen. Etter at fristen er utløpt, kan ikke forbrukeren lenger gjøre mangelen gjeldende.`
    },
    {
      id: 'rett1-2-6-text-2b',
      type: 'text',
      content: `### Garanti

En **garanti** er et frivillig tilsagn fra selgeren om at varen skal fungere i en bestemt periode. Garantien kommer **i tillegg til** reklamasjonsretten etter forbrukerkjøpsloven – den erstatter den ikke.

**Forbrukerkjøpsloven § 18a:**
Dersom selgeren har gitt en garanti, kan forbrukeren gjøre mangelen gjeldende etter garantien i tillegg til sine lovbestemte rettigheter.

**Viktig:** En selger kan ikke bruke en garanti til å **begrense** forbrukerens rettigheter. For eksempel:
- En butikk tilbyr 1 års garanti på en vaskemaskin → Forbrukeren har likevel 5 års reklamasjonsrett etter loven
- En butikk skriver «etter garantitidens utløp dekkes ingen feil» → Dette er ugyldig – forbrukerens lovbestemte rettigheter gjelder uansett`
    },
    {
      id: 'rett1-2-6-example-2',
      type: 'example',
      title: 'Reklamasjonsfrist',
      problem: 'Jonas kjøper en ny oppvaskmaskin til 7 000 kroner. Etter 3 år og 8 måneder slutter den å fungere på grunn av en produksjonsfeil i pumpen. Butikken sier at «garantien gikk ut etter 2 år» og nekter å hjelpe. Har Jonas reklamasjonsrett?',
      solution: `**Analyse etter forbrukerkjøpsloven § 27:**

En oppvaskmaskin er en vare som er ment å vare vesentlig lenger enn 2 år. Den absolutte reklamasjonsfristen er derfor **5 år** (§ 27 andre ledd).

Jonas oppdaget feilen etter 3 år og 8 måneder – altså **innenfor** 5-årsfristen.

**Garantien vs. lovens reklamasjonsrett:**
At butikkens «garanti» er utløpt etter 2 år, er uten betydning. Forbrukerkjøpslovens reklamasjonsrett er lovbestemt og kan ikke begrenses av en garanti. Butikken kan ikke bruke garantien til å avskjære Jonas fra sine lovbestemte rettigheter.

**Konklusjon:** Jonas har reklamasjonsrett. Han er innenfor 5-årsfristen, og feilen (produksjonsfeil i pumpen) er en mangel. Butikken plikter å rette feilen, omlevere eller gi prisavslag/heving etter forbrukerkjøpsloven §§ 29–32.`
    },
    {
      id: 'rett1-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den absolutte reklamasjonsfristen etter forbrukerkjøpsloven for varer som er ment å vare vesentlig lenger enn to år?',
        options: [
          { id: 'a', text: '2 år', isCorrect: false },
          { id: 'b', text: '3 år', isCorrect: false },
          { id: 'c', text: '5 år', isCorrect: true },
          { id: 'd', text: '10 år', isCorrect: false }
        ],
        solution: 'Etter forbrukerkjøpsloven § 27 andre ledd er den absolutte reklamasjonsfristen 5 år for varer som er ment å vare vesentlig lenger enn to år. Eksempler på slike varer er hvitevarer (vaskemaskin, oppvaskmaskin), møbler, biler og elektronikk med lang forventet levetid. For øvrige varer er fristen 2 år.'
      }
    },

    // --- BLOKK 3: Mangelsvurdering og «solgt som den er» ---
    {
      id: 'rett1-2-6-text-3',
      type: 'text',
      content: `### Mangelsvurdering i forbrukerkjøp

Forbrukerkjøpsloven §§ 15–17 stiller krav til tingens egenskaper:

**§ 15 – Alminnelige krav:** Tingen skal være i samsvar med avtalen og ha de egenskaper forbrukeren har grunn til å forvente.

**§ 16 – Mangel:** Mangel foreligger dersom tingen:
- Ikke samsvarer med opplysninger selgeren har gitt (§ 16 bokstav c)
- Ikke er fagmessig montert av selgeren (§ 16 bokstav d)
- Avviker fra opplysninger gitt i markedsføring (§ 16 bokstav c)

**§ 17 – «Solgt som den er» gjelder IKKE:**
I motsetning til kjøpsloven kan selgeren **ikke** ta «solgt som den er»-forbehold i forbrukerkjøp. Slike forbehold er ugyldige. Forbrukeren har alltid rett til en vare som oppfyller lovens krav – selgeren kan ikke fraskrive seg ansvaret.

**Unntak:** Brukte varer solgt på auksjon der forbrukeren har mulighet til å være personlig til stede, kan unntas (§ 17 andre ledd).`
    },
    {
      id: 'rett1-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord minst tre viktige forskjeller mellom kjøpsloven og forbrukerkjøpsloven. Bruk konkrete eksempler for å illustrere hvorfor forbrukervernet er sterkere.',
        hints: ['Tenk på bevisbyrde, reklamasjonsfrister, «solgt som den er»-forbehold og lovens karakter (deklaratorisk vs. preseptorisk).'],
        solution: `**Forskjell 1: Lovens karakter**
Kjøpsloven er deklaratorisk (fravikelig) – partene kan avtale noe annet. Forbrukerkjøpsloven er preseptorisk (ufravikelig) – den kan ikke fravikes til ulempe for forbrukeren.
*Eksempel:* En butikk kan ikke skrive i vilkårene at «all reklamasjon må skje innen 30 dager» – dette er ugyldig etter forbrukerkjøpsloven.

**Forskjell 2: Bevisbyrde**
Etter kjøpsloven må kjøperen bevise at mangelen forelå ved levering. Etter forbrukerkjøpsloven presumeres det at mangelen forelå ved levering dersom den viser seg innen 6 måneder.
*Eksempel:* Slutter en mobiltelefon å virke etter 4 måneder, er det butikken som må bevise at forbrukeren har brukt den feil – ikke forbrukeren som må bevise produksjonsfeil.

**Forskjell 3: «Solgt som den er»**
Etter kjøpsloven kan selgeren selge «som den er» (§ 19). Etter forbrukerkjøpsloven er slike forbehold ugyldige (§ 17).
*Eksempel:* En elektronikkbutikk kan ikke selge en demovare «som den er» og fraskrive seg alt ansvar overfor forbrukeren.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-2-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Forbrukerkjøpsloven** gjelder når en forbruker kjøper fra en næringsdrivende.
- Loven er **preseptorisk** – den kan ikke fravikes til ulempe for forbrukeren (§ 3).
- **Bevisbyrden** ligger hos selgeren de første 6 månedene etter levering (§ 18 andre ledd).
- **Reklamasjonsfrist:** 2 år for de fleste varer, 5 år for varer med lengre forventet levetid (§ 27).
- **Garanti** kommer i tillegg til lovens reklamasjonsrett og kan ikke brukes til å begrense forbrukerens rettigheter.
- Selgeren kan **ikke** ta «solgt som den er»-forbehold i forbrukerkjøp (§ 17).
- **Mangelsvurderingen** følger §§ 15–16: tingen skal samsvare med avtalen og opplysninger gitt av selgeren.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En forbruker kjøper en TV til 15 000 kroner. Etter 4 måneder slutter skjermen å fungere. Selgeren hevder det skyldes feil bruk. Hvem har bevisbyrden?',
        options: [
          { id: 'a', text: 'Forbrukeren må bevise at det er en produksjonsfeil', isCorrect: false },
          { id: 'b', text: 'Selgeren må bevise at feilen skyldes feil bruk av forbrukeren', isCorrect: true },
          { id: 'c', text: 'Ingen har bevisbyrden – de må bli enige seg imellom', isCorrect: false },
          { id: 'd', text: 'Forbrukerrådet avgjør skyldspørsmålet', isCorrect: false }
        ],
        solution: 'Etter forbrukerkjøpsloven § 18 andre ledd presumeres det at mangelen forelå ved levering dersom den viser seg innen 6 måneder. Skjermfeilen oppsto etter 4 måneder – altså innenfor 6-månedersfristen. Det er derfor selgeren som har bevisbyrden og må dokumentere at feilen skyldes feil bruk. Klarer selgeren ikke det, har forbrukeren krav på retting, omlevering eller heving.'
      }
    },
    {
      id: 'rett1-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Mia kjøper en vinterjakke til 3 500 kroner i en klesbutikk. Etter 1 år og 10 måneder sprekker glidelåsen. Butikken sier reklamasjonsfristen er utløpt fordi jakken ikke er en «varig vare». Mia mener hun har 5 års reklamasjonsrett. Drøft hvem som har rett, og vurder om en vinterjakke er en vare som er ment å vare vesentlig lenger enn to år.',
        hints: ['Forbrukerkjøpsloven § 27: den absolutte reklamasjonsfristen er 2 eller 5 år. Spørsmålet er om en vinterjakke er ment å vare «vesentlig lenger» enn 2 år.', 'Vurder forventninger til holdbarhet for en jakke til 3 500 kr – er det rimelig å forvente mer enn 2 års bruk?'],
        solution: `**Drøfting:**

**Forbrukerkjøpsloven § 27 andre ledd:** Den absolutte reklamasjonsfristen er 5 år for varer som er ment å vare vesentlig lenger enn 2 år.

**Er en vinterjakke til 3 500 kr en «varig vare»?**
En vinterjakke til 3 500 kroner er en relativt kostbar klesplagg. Det er rimelig å forvente at en slik jakke holder mer enn to sesonger. Forbrukerrådet og praksis tilsier at klær i denne prisklassen normalt forventes å vare 3–5 år ved normal bruk. Det taler for at 5-årsfristen gjelder.

**Motargument:** Klær er generelt utsatt for slitasje, og noen vil hevde at klær ikke er «ment å vare vesentlig lenger» enn 2 år. Men en kvalitetsjakke til 3 500 kr er i en annen kategori enn en billig T-skjorte.

**Vurdering av mangelen:** En glidelås som sprekker etter under 2 år kan tyde på en produksjonsfeil eller dårlig kvalitet – det er ikke normal slitasje for en jakke i denne prisklassen.

**Konklusjon:** Mia har sannsynligvis rett. En vinterjakke til 3 500 kr er ment å vare lenger enn 2 år, og 5-årsfristen gjelder trolig. Mia har reklamert innenfor fristen (1 år og 10 måneder). Butikken plikter å vurdere mangelen og eventuelt rette, omlevere eller gi prisavslag.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7: Heving, prisavslag og erstatning
// ============================================================================

export const CHAPTER_RETTSLAERE_1_2_7: TextbookChapter = {
  id: 'rettslaere-1-2-7',
  courseId: 'rettslaere-1',
  chapterNumber: '2.7',
  title: 'Heving, prisavslag og erstatning',
  description: 'Misligholdsbeføyelser ved kjøp – heving, prisavslag, retting og erstatning etter kjøpsloven og forbrukerkjøpsloven.',
  estimatedMinutes: 30,
  competenceGoals: [
    'vurdere misligholdsbeføyelser ved kjøp'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-2-7-intro',
      type: 'text',
      content: `## Heving, prisavslag og erstatning

Når du har kjøpt en vare med mangel eller selgeren har levert for sent – hva kan du kreve? Norsk kjøpsrett gir kjøperen et sett med **misligholdsbeføyelser**: rettsmidler du kan bruke når selgeren ikke oppfyller sin del av avtalen.

De viktigste misligholdsbeføyelsene er **retting**, **omlevering**, **prisavslag**, **heving** og **erstatning**. Men du kan ikke fritt velge mellom dem – det finnes en bestemt rekkefølge og vilkår for når de ulike beføyelsene kan brukes.

I dette kapittelet ser vi nærmere på vilkårene for de ulike misligholdsbeføyelsene og hvordan de virker i praksis.`
    },

    // --- BLOKK 1: Retting og omlevering ---
    {
      id: 'rett1-2-7-def-1',
      type: 'definition',
      title: 'Retting og omlevering',
      content: `**Retting** betyr at selgeren reparerer mangelen, slik at varen bringes i kontraktsmessig stand. **Omlevering** betyr at selgeren leverer en ny, mangelfri vare i stedet.

**Forbrukerkjøpsloven §§ 29–30:**
Forbrukeren kan velge mellom retting og omlevering, med mindre den ene løsningen er umulig eller påfører selgeren urimelige kostnader sammenlignet med den andre.

**Selgerens rettingsrett:** Selgeren har rett til å tilby retting eller omlevering **før** forbrukeren kan kreve prisavslag eller heving. Retting skal skje innen rimelig tid og uten vesentlig ulempe for forbrukeren. Selgeren har normalt to forsøk på å rette mangelen.

**Kjøpsloven § 34:**
Selgeren har rett til å rette mangelen dersom dette kan skje uten vesentlig ulempe for kjøperen. Kjøperen kan også kreve retting, men selgeren kan nekte dersom retting medfører urimelig kostnad eller ulempe.`
    },
    {
      id: 'rett1-2-7-example-1',
      type: 'example',
      title: 'Retting eller omlevering?',
      problem: 'Sofie kjøper en ny smarttelefon til 10 000 kroner. Etter en uke oppdager hun at kameraet er defekt. Hun krever ny telefon (omlevering). Butikken tilbyr å reparere kameraet i stedet. Hva har Sofie krav på?',
      solution: `**Analyse etter forbrukerkjøpsloven §§ 29–30:**

Sofie kan i utgangspunktet velge mellom retting og omlevering. Men selgeren har rett til å tilby retting dersom dette kan skje uten vesentlig ulempe for Sofie og innen rimelig tid.

**Vurdering:**
- Telefonen er én uke gammel, og det er kun kameraet som er defekt
- Retting (reparasjon av kameraet) kan trolig utføres raskt og uten store ulemper for Sofie
- Omlevering (ny telefon) er mulig – det er en ny modell som butikken har på lager

**Men:** Selgeren kan tilby retting først. Dersom retting skjer innen rimelig tid (noen dager) og uten vesentlig ulempe, har butikken lov til å reparere i stedet for å bytte.

**Konklusjon:** Butikken kan tilby retting som første løsning. Sofie må akseptere dette dersom reparasjonen skjer raskt og uten ulempe. Dersom butikken ikke klarer å rette mangelen innen rimelig tid (eller etter to forsøk), kan Sofie kreve omlevering, prisavslag eller heving.`
    },
    {
      id: 'rett1-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «omlevering» som misligholdsbeføyelse?',
        options: [
          { id: 'a', text: 'At selgeren reparerer den defekte varen', isCorrect: false },
          { id: 'b', text: 'At selgeren leverer en ny, mangelfri vare i stedet for den defekte', isCorrect: true },
          { id: 'c', text: 'At kjøperen leverer varen tilbake og får pengene igjen', isCorrect: false },
          { id: 'd', text: 'At kjøperen får et prisavslag på den defekte varen', isCorrect: false }
        ],
        solution: 'Omlevering betyr at selgeren leverer en ny, mangelfri vare i stedet for den defekte. Det skiller seg fra retting (reparasjon) ved at kjøperen får en helt ny vare. Omlevering forutsetter at det finnes tilsvarende varer tilgjengelig – er det et unikum eller en utgått modell, er omlevering ikke mulig.'
      }
    },

    // --- BLOKK 2: Prisavslag og heving ---
    {
      id: 'rett1-2-7-def-2',
      type: 'definition',
      title: 'Prisavslag',
      content: `**Prisavslag** innebærer at kjøpesummen reduseres for å kompensere for mangelen. Kjøperen beholder varen, men betaler en lavere pris.

**Forbrukerkjøpsloven § 31:**
Forbrukeren kan kreve prisavslag dersom retting eller omlevering ikke kommer på tale, eller dersom selgeren ikke har rettet mangelen innen rimelig tid.

Prisavslaget skal tilsvare **forholdet mellom tingens verdi i mangelfull stand og kontraktsmessig stand** på leveringstidspunktet. I praksis beregnes det ofte ut fra reparasjonskostnaden.

**Kjøpsloven § 38:**
Tilsvarende regel for privatpersonkjøp.`
    },
    {
      id: 'rett1-2-7-text-2',
      type: 'text',
      content: `### Heving

**Heving** er den mest inngripende misligholdsbeføyelsen. Ved heving oppheves hele kjøpsavtalen: kjøperen leverer varen tilbake, og selgeren tilbakebetaler kjøpesummen.

**Forbrukerkjøpsloven § 32:**
Forbrukeren kan heve kjøpet dersom mangelen **ikke er uvesentlig**. Terskelen for heving i forbrukerkjøp er lavere enn i kjøp mellom privatpersoner – det kreves ikke «vesentlig kontraktsbrudd», men bare at mangelen «ikke er uvesentlig».

**Kjøpsloven § 39:**
Kjøperen kan heve dersom mangelen utgjør et **vesentlig kontraktsbrudd**. Terskelen er høyere enn i forbrukerkjøp.

**Rekkefølge i forbrukerkjøp:**
1. Først har selgeren rett til å tilby **retting** eller **omlevering**
2. Dersom dette ikke skjer innen rimelig tid, kan forbrukeren kreve **prisavslag** eller **heving**

**Viktig:** Kjøperen kan ikke heve dersom mangelen er uvesentlig (bagatellmessig). For slike mangler er prisavslag den riktige beføyelsen.`
    },
    {
      id: 'rett1-2-7-example-2',
      type: 'example',
      title: 'Heving eller prisavslag?',
      problem: 'Kristoffer kjøper en ny sykkel til 8 000 kroner. Ved levering oppdager han at girskifteren er defekt og at lakken har flere riper. Butikken tilbyr å reparere girskifteren, men sier at ripene er «kosmetiske» og ikke dekkes. Etter reparasjonen fungerer girskifteren, men den hakker fortsatt ved bruk. Kan Kristoffer heve kjøpet?',
      solution: `**Analyse etter forbrukerkjøpsloven §§ 29–32:**

**Retting:** Butikken har forsøkt å rette girskifteren, men reparasjonen var ikke vellykket – den hakker fortsatt. Selgeren har dermed ikke oppfylt sin rettingsplikt.

**Samlet mangelsvurdering:**
- Girskifteren er defekt selv etter reparasjonsforsøk
- Lakken har flere riper (kosmetisk, men relevant for en ny sykkel)
- Samlet sett har sykkelen flere mangler som reduserer dens verdi og funksjon

**Hevingsvurdering (§ 32):**
Spørsmålet er om mangelen «ikke er uvesentlig». En defekt girskifter på en ny sykkel til 8 000 kr – som ikke lar seg reparere – er en **ikke uvesentlig** mangel. Girsystemet er sentralt for sykkelens funksjon.

Selgeren har allerede forsøkt retting uten hell. Etter forbrukerkjøpsloven har selgeren normalt to rettingsforsøk.

**Konklusjon:** Kristoffer kan sannsynligvis **heve** kjøpet dersom butikken ikke klarer å rette mangelen ved et nytt forsøk eller tilby omlevering. Mangelen er ikke uvesentlig – en defekt girskifter er et vesentlig funksjonsproblem for en sykkel.`
    },
    {
      id: 'rett1-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen på hevingsterskelen i kjøpsloven og forbrukerkjøpsloven?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell – begge krever vesentlig kontraktsbrudd', isCorrect: false },
          { id: 'b', text: 'Kjøpsloven krever vesentlig kontraktsbrudd, forbrukerkjøpsloven krever bare at mangelen ikke er uvesentlig', isCorrect: true },
          { id: 'c', text: 'Forbrukerkjøpsloven krever vesentlig kontraktsbrudd, kjøpsloven har lavere terskel', isCorrect: false },
          { id: 'd', text: 'Heving er ikke mulig etter kjøpsloven', isCorrect: false }
        ],
        solution: 'Kjøpsloven § 39 krever at mangelen utgjør et «vesentlig kontraktsbrudd» for heving. Forbrukerkjøpsloven § 32 har en lavere terskel – forbrukeren kan heve med mindre mangelen er «uvesentlig». Dette betyr at det skal mer til for å heve etter kjøpsloven (mellom privatpersoner) enn etter forbrukerkjøpsloven (forbrukerkjøp). Forskjellen er et uttrykk for lovgivers ønske om å gi forbrukere sterkere vern.'
      }
    },

    // --- BLOKK 3: Erstatning ---
    {
      id: 'rett1-2-7-text-3',
      type: 'text',
      content: `### Erstatning

**Erstatning** kan kreves i tillegg til andre misligholdsbeføyelser. Formålet er å kompensere kjøperens **økonomiske tap** som følge av mangelen eller forsinkelsen.

**Forbrukerkjøpsloven § 33 (erstatning ved mangel):**
Forbrukeren kan kreve erstatning for tap som følge av mangelen. Selgeren er ansvarlig **uten skyld** (objektivt ansvar) – det spiller ingen rolle om selgeren visste om mangelen.

Erstatningen kan dekke:
- **Direkte tap:** Utgifter til reparasjon, prisforskjell ved dekningskjøp, transportkostnader
- **Indirekte tap:** Tapt fortjeneste, tap som følge av at en ting man ikke kunne bruke (§ 34)

For indirekte tap kreves det at selgeren har utvist **uaktsomhet** (culpa) eller at mangelen skyldes kontraktsbrudd.

**Kjøpsloven § 40:**
Tilsvarende regel, men kjøpsloven stiller strengere krav – selgeren er ansvarlig for direkte tap med mindre han godtgjør at mangelen skyldes en hindring utenfor hans kontroll (kontrollansvar).`
    },
    {
      id: 'rett1-2-7-example-3',
      type: 'example',
      title: 'Erstatning i tillegg til heving',
      problem: 'Live kjøper en brukt bil av en bilforhandler for 200 000 kroner. Etter to uker stopper bilen på motorveien på grunn av en alvorlig motorfeil. Live må betale 3 000 kroner for bilberging og 5 000 kroner for leiebil i to uker mens saken pågår. Hun hever kjøpet. Kan hun i tillegg kreve erstatning for bilberging og leiebil?',
      solution: `**Analyse etter forbrukerkjøpsloven §§ 32–33:**

**Heving:** Live hever kjøpet – bilen leveres tilbake, og forhandleren tilbakebetaler 200 000 kroner. En alvorlig motorfeil som stopper bilen etter to uker er klart en «ikke uvesentlig» mangel.

**Erstatning (§ 33):**
I tillegg til heving kan Live kreve erstatning for sitt økonomiske tap som følge av mangelen:

- **Bilberging 3 000 kr:** Direkte tap som følge av at bilen stoppet – en nødvendig kostnad fordi bilen var mangelfull.
- **Leiebil 5 000 kr:** Direkte tap – Live trengte transport mens reklamasjonssaken ble behandlet.

Selgeren (bilforhandleren) er ansvarlig uten skyld etter forbrukerkjøpsloven § 33 – det spiller ingen rolle om forhandleren visste om motorfeilen.

**Konklusjon:** Live kan kreve **heving** (tilbakebetaling av 200 000 kr) **pluss erstatning** for bilberging (3 000 kr) og leiebil (5 000 kr) – totalt 208 000 kr. Erstatningen kommer i tillegg til hevingsoppgjøret.`
    },
    {
      id: 'rett1-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom «direkte tap» og «indirekte tap» ved erstatning etter forbrukerkjøpsloven. Gi et eksempel på hver type tap.',
        hints: ['Direkte tap er kostnader som har direkte sammenheng med mangelen. Indirekte tap er mer avledet, som tapt fortjeneste.'],
        solution: `**Direkte tap:**
Kostnader som har direkte sammenheng med mangelen og som oppstår som en umiddelbar følge av kontraktsbruddet.

*Eksempel:* Du kjøper en ny fryser. Den slutter å virke etter en uke, og all maten i fryseren tiner og blir ødelagt. Kostnaden for den ødelagte maten (f.eks. 2 000 kr) er direkte tap. Selgeren er ansvarlig uten skyld.

**Indirekte tap:**
Mer avledede tap som ikke er en direkte kostnad, men følger av at man ikke kan bruke tingen som planlagt. Typisk tapt fortjeneste eller tap som krever lengre årsaksrekke.

*Eksempel:* Du kjøper en ny profesjonell printer til bedriften din. Printeren er mangelfull og fungerer ikke i to uker. I denne perioden kan du ikke levere trykkeoppdrag til kundene dine og taper 20 000 kr i fortjeneste. Dette er indirekte tap. For indirekte tap kreves det normalt at selgeren har utvist uaktsomhet (culpa).`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-2-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Misligholdsbeføyelser** er rettsmidler kjøperen kan bruke når selgeren ikke oppfyller avtalen.
- **Retting** (reparasjon) og **omlevering** (ny vare) er de første stegene. Selgeren har rett til å forsøke retting før kjøperen kan heve.
- **Prisavslag** reduserer kjøpesummen for å kompensere for mangelen – kjøperen beholder varen.
- **Heving** opphever avtalen: varen leveres tilbake og pengene tilbakebetales. Krever at mangelen «ikke er uvesentlig» (forbrukerkjøpsloven) eller «vesentlig kontraktsbrudd» (kjøpsloven).
- **Erstatning** kan kreves i tillegg til andre beføyelser for å dekke økonomisk tap (direkte og indirekte tap).
- I forbrukerkjøp har selgeren **objektivt ansvar** for direkte tap – han er ansvarlig uavhengig av skyld.
- Rekkefølge i forbrukerkjøp: retting/omlevering → prisavslag/heving (+ erstatning).`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-7-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I hvilken rekkefølge skal misligholdsbeføyelsene brukes i forbrukerkjøp?',
        options: [
          { id: 'a', text: 'Heving → prisavslag → retting', isCorrect: false },
          { id: 'b', text: 'Erstatning → heving → retting', isCorrect: false },
          { id: 'c', text: 'Retting/omlevering → prisavslag/heving (+ erstatning)', isCorrect: true },
          { id: 'd', text: 'Forbrukeren kan fritt velge mellom alle beføyelser uten rekkefølge', isCorrect: false }
        ],
        solution: 'I forbrukerkjøp skal selgeren først få mulighet til å rette mangelen eller tilby omlevering. Dersom dette ikke skjer innen rimelig tid eller ikke er vellykket, kan forbrukeren kreve prisavslag eller heving. Erstatning kan kreves i tillegg på ethvert stadium. Denne rekkefølgen er lovfestet i forbrukerkjøpsloven §§ 29–33 og er ment å gi selgeren en sjanse til å bøte på feilen før de mer inngripende beføyelsene kan brukes.'
      }
    },
    {
      id: 'rett1-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Anders kjøper en ny elektrisk sparkesykkel til 6 000 kroner fra en nettbutikk. Etter tre uker slutter motoren å fungere. Nettbutikken tilbyr retting, men reparasjonen tar fire uker. Etter reparasjonen fungerer sparkesykkelen i to dager, så stopper motoren igjen. Nettbutikken tilbyr en ny reparasjon.\n\nVurder: (a) Kan Anders nekte den andre reparasjonen og kreve heving? (b) Har Anders krav på erstatning for perioden han ikke kunne bruke sparkesykkelen? (c) Ville svaret vært annerledes dersom Anders hadde kjøpt sparkesykkelen brukt av en privatperson?',
        hints: ['Selgeren har normalt to rettingsforsøk i forbrukerkjøp.', 'Vurder om fire ukers reparasjonstid er «rimelig tid».', 'Husk forskjellen mellom forbrukerkjøpsloven og kjøpsloven.'],
        solution: `**(a) Heving:**
Etter forbrukerkjøpsloven § 30 har selgeren rett til å forsøke retting, men den skal skje innen «rimelig tid» og uten «vesentlig ulempe» for forbrukeren.

Første reparasjon tok fire uker – for en sparkesykkel til 6 000 kr er dette i grenseland for hva som er «rimelig tid». Etter reparasjonen fungerte sparkesykkelen bare i to dager, noe som viser at retting var mislykket.

Selgeren har normalt to forsøk på retting. Her har selgeren allerede brukt ett forsøk som var mislykket. Anders kan trolig akseptere ett forsøk til, men dersom den nye reparasjonen heller ikke er vellykket – eller tar urimelig lang tid – har Anders krav på heving etter § 32.

Gitt at den første reparasjonen tok fire uker og var mislykket, kan Anders argumentere for at han allerede har ventet urimelig lenge og at mangelen «ikke er uvesentlig». Han har et godt grunnlag for å kreve heving allerede nå.

**(b) Erstatning:**
Anders kan kreve erstatning etter § 33 for direkte tap. Perioden uten sparkesykkel (over fire uker) kan gi grunnlag for erstatning dersom Anders har hatt merutgifter (f.eks. transport). Selgeren har objektivt ansvar for direkte tap.

**(c) Kjøp mellom privatpersoner:**
Dersom Anders hadde kjøpt sparkesykkelen brukt av en privatperson, ville kjøpsloven gjelde. Forskjeller:
- **Hevingsterskel:** Kjøpsloven § 39 krever «vesentlig kontraktsbrudd» – en høyere terskel enn forbrukerkjøpsloven
- **Bevisbyrde:** Anders måtte bevist at mangelen forelå ved levering (ingen 6-månederspresumsjonsregel)
- **«Solgt som den er»:** Selgeren kunne ha tatt slikt forbehold (kjøpsloven § 19), noe som begrenser kjøperens rettigheter
- **Erstatning:** Kjøpsloven krever at selgeren kan bebreides (culpa) for direkte tap, ikke objektivt ansvar`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.8: E-handel og angrerett
// ============================================================================

export const CHAPTER_RETTSLAERE_1_2_8: TextbookChapter = {
  id: 'rettslaere-1-2-8',
  courseId: 'rettslaere-1',
  chapterNumber: '2.8',
  title: 'E-handel og angrerett',
  description: 'Angrerettloven, netthandel, digitale avtaler og personvern ved e-handel.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere forbrukerrettigheter ved e-handel'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-2-8-intro',
      type: 'text',
      content: `## E-handel og angrerett

Netthandel har revolusjonert måten vi handler på. Du kan kjøpe klær, elektronikk og matvarer med noen få tastetrykk – men du kan ikke prøve varen, ta på den eller inspisere den før du kjøper. Nettopp fordi forbrukeren er i en svakere posisjon ved fjernkjøp, har lovgiver gitt særlige regler som beskytter deg når du handler på nett.

**Angrerettloven** (lov om opplysningsplikt og angrerett ved fjernsalg og salg utenom faste forretningslokaler av 20. juni 2014 nr. 27) gir forbrukere rett til å angre på kjøp gjort utenfor fysiske butikker – typisk netthandel, telefonsalg og dørsalg.

I dette kapittelet ser vi på angrerettens regler, den næringsdrivendes opplysningsplikt og særlige spørsmål knyttet til digitale avtaler og personvern.`
    },

    // --- BLOKK 1: Angrerettloven ---
    {
      id: 'rett1-2-8-def-1',
      type: 'definition',
      title: 'Angrerett (angrerettloven §§ 20–22)',
      content: `**Angreretten** gir forbrukeren rett til å gå fra en avtale inngått ved fjernsalg (netthandel, telefonsalg) eller salg utenom faste forretningslokaler (dørsalg), uten å oppgi noen grunn.

**Hovedregler:**
1. **Angrefrist:** 14 dager fra forbrukeren mottok varen (§ 21)
2. **Ingen begrunnelse nødvendig** – forbrukeren trenger ikke oppgi grunn for å angre
3. **Angrerett gjelder ikke** i fysiske butikker – kun ved fjernsalg og salg utenom faste forretningslokaler
4. **Returkostnad:** Forbrukeren bærer som hovedregel returkostnaden, med mindre selgeren har påtatt seg denne (§ 25)

**Utvidet angrefrist (§ 21 tredje ledd):**
Dersom selgeren **ikke** har opplyst om angreretten, forlenges angrefristen med inntil 12 måneder. Manglende opplysning kan altså gi forbrukeren opp til 12 måneder og 14 dager til å angre.`
    },
    {
      id: 'rett1-2-8-text-1',
      type: 'text',
      content: `### Opplysningsplikt (§ 8)

Selgeren har en omfattende **opplysningsplikt** overfor forbrukeren før avtalen inngås. Angrerettloven § 8 krever at selgeren gir opplysninger om blant annet:

- Varens **viktigste egenskaper**
- Den næringsdrivendes **identitet** (navn, adresse, e-post, telefon)
- **Totalprisen** inkludert alle avgifter og leveringskostnader
- **Betalingsvilkår** og leveringsvilkår
- **Angreretten** – at forbrukeren har rett til å angre, og hvordan angreretten utøves
- **Reklamasjonsrettigheter** etter forbrukerkjøpsloven
- **Klageordninger** (Forbrukertilsynet, Forbrukerrådet)

Opplysningene skal gis på en **klar og forståelig** måte. Ved netthandel skal forbrukeren få tydelig informasjon om at bestillingen innebærer en **betalingsforpliktelse** – den berømte «bestill og betal»-knappen.`
    },
    {
      id: 'rett1-2-8-example-1',
      type: 'example',
      title: 'Angrerett i praksis',
      problem: 'Sara bestiller et par sko til 1 200 kroner fra en norsk nettbutikk. Skoene leveres 5. mars. Sara prøver skoene hjemme, men de passer ikke. 22. mars sender hun skoene tilbake med beskjed om at hun angrer. Nettbutikken nekter å ta dem tilbake og hevder at angrefristen er utløpt. Har Sara angret i tide?',
      solution: `**Analyse etter angrerettloven § 21:**

Angrefristen er **14 dager** fra forbrukeren mottok varen. Sara mottok skoene 5. mars.

**Beregning av angrefrist:**
- Dag 1: 6. mars (dagen etter mottak)
- Dag 14: 19. mars

Sara ga beskjed om angring 22. mars – det er **3 dager etter** fristens utløp.

**Men:** Dersom nettbutikken ikke har gitt Sara korrekt informasjon om angreretten (angrerettloven § 8 bokstav h), forlenges fristen med inntil 12 måneder (§ 21 tredje ledd).

**Konklusjon:**
- Dersom nettbutikken har oppfylt sin opplysningsplikt om angreretten, er Saras angreerklæring **for sen** – fristen utløp 19. mars.
- Dersom nettbutikken **ikke** har opplyst om angreretten (f.eks. ikke sendt angrerettskjema eller gitt tydelig informasjon), er fristen forlenget, og Sara har angret **i tide**.

Sara bør undersøke om hun mottok angrerettsinformasjon ved bestillingen.`
    },
    {
      id: 'rett1-2-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor lang er den normale angrefristen ved netthandel etter angrerettloven?',
        options: [
          { id: 'a', text: '7 dager', isCorrect: false },
          { id: 'b', text: '14 dager', isCorrect: true },
          { id: 'c', text: '30 dager', isCorrect: false },
          { id: 'd', text: '3 måneder', isCorrect: false }
        ],
        solution: 'Den normale angrefristen er 14 dager fra forbrukeren mottok varen, jf. angrerettloven § 21. Fristen løper fra dagen etter at varen er mottatt. Forbrukeren trenger ikke oppgi noen grunn for å angre. Dersom selgeren ikke har opplyst om angreretten, kan fristen forlenges med inntil 12 måneder.'
      }
    },

    // --- BLOKK 2: Unntak fra angreretten ---
    {
      id: 'rett1-2-8-text-2',
      type: 'text',
      content: `### Unntak fra angreretten (§ 22)

Angreretten gjelder ikke for alle typer kjøp. Angrerettloven § 22 lister opp viktige unntak:

**1. Spesialtilpassede varer** (§ 22 bokstav c)
Varer som er laget etter forbrukerens spesifikasjoner eller som er klart personlige. Eksempel: en gravering på et smykke, spesialsydd dress eller tilpasset møbel.

**2. Forseglede varer som er åpnet** (§ 22 bokstav f)
Varer som av hygiene- eller helsemessige grunner ikke kan returneres etter at forseglingen er brutt. Eksempel: ørepropper, undertøy, kosmetikk.

**3. Digitalt innhold** (§ 22 bokstav m)
Levering av digitalt innhold som ikke leveres på et fysisk medium, dersom forbrukeren har samtykket til at leveringen starter og har bekreftet at angreretten da tapes. Eksempel: nedlasting av spill, e-bøker, strømming.

**4. Hotell, transport, restaurant** (§ 22 bokstav l)
Avtaler om innkvartering, transport, restaurantbesøk eller fritidsaktiviteter til en bestemt dato.

**5. Lett bedervelige varer** (§ 22 bokstav d)
Varer som raskt kan bli for gamle eller ødelagt. Eksempel: fersk mat, blomster.`
    },
    {
      id: 'rett1-2-8-example-2',
      type: 'example',
      title: 'Unntak fra angreretten',
      problem: 'Thomas bestiller et par trådløse ørepropper til 2 500 kroner fra en nettbutikk. Når de ankommer, åpner han forseglingen, prøver dem i 20 minutter og synes lyden er skuffende. Han vil angre kjøpet. Har Thomas angrerett?',
      solution: `**Analyse etter angrerettloven § 22 bokstav f:**

Angrerettloven § 22 bokstav f unntar forseglede varer som av **helsemessige eller hygieniske grunner** ikke er egnet for retur etter at forseglingen er brutt.

**Ørepropper og hygiene:**
Ørepropper er produkter som settes inn i øret. Etter at forseglingen er brutt og de er brukt, kan de av hygieniske grunner ikke videreselges. § 22 bokstav f er ment å dekke nettopp slike produkter.

**Forutsetning:** Unntaket gjelder kun dersom nettbutikken har opplyst om at angreretten faller bort ved åpning av forseglingen. Dersom butikken ikke ga slik informasjon, kan Thomas likevel ha angrerett.

**Konklusjon:** Dersom forseglingen var tydelig merket og nettbutikken opplyste om at angreretten bortfaller ved åpning, har Thomas **ikke angrerett**. Dersom butikken ikke ga tilstrekkelig informasjon, kan Thomas fortsatt ha rett til å angre.`
    },
    {
      id: 'rett1-2-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse varene kan du IKKE angre på etter angrerettloven § 22, dersom selgeren har opplyst korrekt?',
        options: [
          { id: 'a', text: 'Et par sko bestilt fra en nettbutikk (ubrukte, i original emballasje)', isCorrect: false },
          { id: 'b', text: 'En spesialsydd brudekjole laget etter dine mål', isCorrect: true },
          { id: 'c', text: 'En bærbar PC bestilt på nett (uåpnet)', isCorrect: false },
          { id: 'd', text: 'Et fjernsyn kjøpt via telefonsalg', isCorrect: false }
        ],
        solution: 'En spesialsydd brudekjole laget etter forbrukerens mål er en «spesialtilpasset vare» etter angrerettloven § 22 bokstav c. Slike varer kan ikke returneres fordi de er laget spesielt for én kunde og ikke kan videreselges. Sko i original emballasje, en uåpnet PC og et fjernsyn fra telefonsalg er alle varer der angreretten normalt gjelder.'
      }
    },

    // --- BLOKK 3: E-handel og personvern ---
    {
      id: 'rett1-2-8-text-3',
      type: 'text',
      content: `### Digitale avtaler og personvern

Netthandel innebærer at du deler personopplysninger: navn, adresse, e-post, betalingsinformasjon og ofte mye mer. **Personvernforordningen** (GDPR) og **personopplysningsloven** regulerer hvordan nettbutikker kan behandle dine opplysninger.

**Viktige regler:**
- **Samtykke:** Nettbutikken trenger som hovedregel ditt **samtykke** for å sende deg markedsføring (nyhetsbrev, tilbud).
- **Informasjonsplikt:** Nettbutikken må opplyse om hvilke personopplysninger som samles inn og hvorfor.
- **Sletting:** Du har rett til å kreve at nettbutikken sletter dine personopplysninger (med visse unntak).
- **Cookies:** Nettbutikken må innhente samtykke for bruk av informasjonskapsler (cookies) som sporer din atferd.

**Ehandelsloven** (lov om elektronisk handel) stiller også krav til nettbutikker:
- Tydelig **identifikasjon** av den næringsdrivende (organisasjonsnummer, kontaktinformasjon)
- Klare opplysninger om **pris og vilkår** før bestilling
- **Ordrebekreftelse** uten ugrunnet opphold etter bestilling`
    },
    {
      id: 'rett1-2-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du bestiller en jakke fra en utenlandsk nettbutikk. I handlekurven ser du totalprisen, men etter at du har betalt, mottar du en e-post om at det tilkommer et «administrasjonsgebyr» på 200 kroner som ikke var opplyst om. Vurder om dette gebyret er gyldig ut fra reglene om opplysningsplikt i angrerettloven § 8.',
        hints: ['Angrerettloven § 8 bokstav e krever at selgeren opplyser om totalprisen inkludert alle tilleggskostnader.'],
        solution: `**Analyse etter angrerettloven § 8:**

Angrerettloven § 8 bokstav e krever at selgeren før avtalen inngås opplyser om den **samlede prisen** inkludert alle avgifter og tilleggskostnader. Dersom det kommer kostnader i tillegg, skal dette opplyses tydelig.

**Vurdering:**
Et «administrasjonsgebyr» på 200 kr som ikke var opplyst om i handlekurven, er en **skjult kostnad**. Forbrukeren ble ikke informert om den samlede prisen før bestillingen ble gjennomført.

**Angrerettloven § 8 femte ledd:** Dersom den næringsdrivende ikke har opplyst om tilleggskostnader, er forbrukeren **ikke forpliktet** til å betale dem.

**Konklusjon:** Administrasjonsgebyret er **ugyldig**. Forbrukeren trenger ikke betale det, fordi det ikke var opplyst om før avtaleinngåelsen. Selgeren har brutt sin opplysningsplikt etter § 8. Forbrukeren kan kreve å få gebyret tilbakebetalt dersom det allerede er trukket.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-2-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Angrerettloven** gir forbrukere rett til å angre kjøp gjort ved fjernsalg (netthandel, telefonsalg) og salg utenom faste forretningslokaler.
- **Angrefristen** er **14 dager** fra varen er mottatt. Ingen begrunnelse nødvendig.
- Dersom selgeren ikke har opplyst om angreretten, kan fristen forlenges med inntil **12 måneder**.
- **Unntak** fra angreretten: spesialtilpassede varer, forseglede hygieneprodukter som er åpnet, digitalt innhold, lett bedervelige varer, m.m.
- Selgeren har **opplysningsplikt** om pris, identitet, angrerett og reklamasjonsrettigheter (§ 8).
- **Skjulte kostnader** som ikke er opplyst om, er forbrukeren ikke forpliktet til å betale.
- **Personvern:** GDPR og personopplysningsloven gir forbrukere rettigheter knyttet til behandling av personopplysninger ved netthandel.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-2-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-2-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Maria bestiller en ny sofa til 15 000 kroner fra en norsk nettbutikk 1. februar. Sofaen leveres 10. februar. Maria er fornøyd med sofaen, men 20. februar oppdager hun at nettbutikken aldri sendte angrerettskjema eller informasjon om angreretten. 1. september (over 6 måneder senere) finner Maria en billigere og bedre sofa i en annen butikk. Kan hun nå angre det opprinnelige kjøpet og sende tilbake sofaen?\n\nDrøft med utgangspunkt i angrerettloven §§ 8, 21 og 22.',
        hints: ['Manglende opplysning om angreretten kan forlenge fristen med inntil 12 måneder.', 'Finnes det noe unntak i § 22 som hindrer angring av en sofa?'],
        solution: `**Analyse:**

**Angrefrist (§ 21):**
Normal angrefrist er 14 dager fra 10. februar = utløper 24. februar. Maria forsøker å angre 1. september – lenge etter normalfristen.

**Utvidet angrefrist (§ 21 tredje ledd):**
Men nettbutikken har ikke sendt angrerettskjema eller informasjon om angreretten. Etter § 21 tredje ledd forlenges angrefristen med inntil **12 måneder** dersom selgeren ikke har oppfylt opplysningsplikten om angreretten.

Utvidet frist: 12 måneder + 14 dager fra 10. februar = til ca. 24. februar neste år.

Maria angrer 1. september – dette er ca. 7 måneder etter levering. Det er **innenfor** den utvidede fristen på 12 måneder og 14 dager.

**Unntak (§ 22):**
En sofa er ikke en spesialtilpasset vare, ikke et hygieneprodukt, og ikke digitalt innhold. Ingen av unntakene i § 22 gjelder.

**Bruksfradrag:**
Maria har brukt sofaen i over 6 måneder. Etter angrerettloven § 25 kan selgeren kreve fradrag for **verdiforringelse** som skyldes bruk utover det som er nødvendig for å fastslå varens art, egenskaper og funksjon. Maria må trolig tåle et fradrag for normal slitasje.

**Konklusjon:** Maria kan angre kjøpet fordi den utvidede fristen gjelder. Hun har rett til å sende sofaen tilbake og få pengene igjen, men selgeren kan trekke fra et beløp for verdiforringelse ved bruk. At Marias motiv er å finne en bedre sofa, er uten betydning – angreretten krever ingen begrunnelse.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 2 (kapittel 2.1–2.8)
// ============================================================================

export const RETTSLAERE_1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_1_2_1,
  CHAPTER_RETTSLAERE_1_2_2,
  CHAPTER_RETTSLAERE_1_2_3,
  CHAPTER_RETTSLAERE_1_2_4,
  CHAPTER_RETTSLAERE_1_2_5,
  CHAPTER_RETTSLAERE_1_2_6,
  CHAPTER_RETTSLAERE_1_2_7,
  CHAPTER_RETTSLAERE_1_2_8,
];
