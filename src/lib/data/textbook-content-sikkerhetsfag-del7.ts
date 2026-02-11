/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

/**
 * Sikkerhetsfag VG2/VG3 - Del 7: Lover og regler
 * Kapittel 7.1-7.5
 *
 * Dekker LK20 kompetansemål:
 * - gjore rede for relevant lovverk som regulerer vaktvirksomhet og sikkerhetsbransjen
 * - drøfte grensene for lovlig maktbruk og borgernes rettigheter
 * - beskrive brann- og eksplosjonsvernlovens krav til forebyggende arbeid
 * - forklare personvernregelverket og dets betydning for sikkerhetsbransjen
 * - vurdere samspillet mellom ulike lover som regulerer sikkerhetsarbeid
 */

// ============================================================================
// Kapittel 7.1: Vaktvirksomhetsloven
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_7_1: TextbookChapter = {
  id: 'sikkerhetsfag-7-1',
  courseId: 'sikkerhetsfag',
  chapterNumber: '7.1',
  title: 'Vaktvirksomhetsloven',
  description: 'Vaktvirksomhetsloven regulerer hvem som kan drive vaktvirksomhet i Norge, hvilke krav som stilles til autorisasjon, og hvilke plikter og begrensninger vektere har. Du larer om lovens formål, krav til godkjenning og sentrale bestemmelser.',
  estimatedMinutes: 20,
  competenceGoals: ['gjore rede for relevant lovverk som regulerer vaktvirksomhet og sikkerhetsbransjen'],
  content: [
    {
      id: 'sik-7-1-intro',
      type: 'text',
      content: `## Vaktvirksomhetsloven - rammeverket for vekterbransjen

Vaktvirksomhetsloven (lov om vaktvirksomhet) er den viktigste loven for alle som jobber i sikkerhetsbransjen. Loven ble vedtatt for å sikre at vaktvirksomhet drives forsvarlig og i samsvar med samfunnets interesser. Den stiller krav til både foretak og enkeltpersoner som utforer vekteroppgaver.

I dette kapittelet skal du lare:
- Hva vaktvirksomhetsloven regulerer og dens formål
- Krav til autorisasjon for vaktforetak
- Hvilke plikter vektere har etter loven
- Begrensninger som gjelder for vaktvirksomhet`,
    },
    {
      id: 'sik-7-1-def-1',
      type: 'definition',
      title: 'Vaktvirksomhet',
      content: `**Vaktvirksomhet** er virksomhet som går ut på å vake over eller beskytte personer, eiendom eller andre verdier, samt kontrollere adgang til bestemte områder. Begrepet dekker blant annet ordensvakter, butikkvektere, verditransport og resepsjonsvakter.`,
    },
    {
      id: 'sik-7-1-text-1',
      type: 'text',
      content: `### Lovens formål og virkeområde

Vaktvirksomhetsloven har flere viktige formål:

**Kvalitetssikring:**
- Sette minstekrav til kompetanse for vektere
- Sikre at vaktforetak drives av seriose aktorer
- Forebygge kriminalitet i bransjen

**Rettssikkerhet:**
- Beskytte publikum mot ulovlig maktbruk
- Sikre at vektere kjenner grensene for sin myndighet
- Klargjore forholdet mellom vektere og politi

**Virkeområde:**
Loven gjelder for all vaktvirksomhet som utoves som naeringsvirksomhet. Den gjelder også for egenvakthold der dette utfores av personer som er ansatt spesielt for dette formålet. Frivillig vakthold, for eksempel nattevandring i regi av foreldre, faller utenfor loven.`,
    },
    {
      id: 'sik-7-1-def-2',
      type: 'definition',
      title: 'Autorisasjon',
      content: `**Autorisasjon** er en offentlig tillatelse fra politiet som gir et foretak lov til å drive vaktvirksomhet. Uten autorisasjon er det ulovlig å tilby vakttjenester. Autorisasjonen gis av politidistriktet der foretaket har sitt hovedkontor.`,
    },
    {
      id: 'sik-7-1-text-2',
      type: 'text',
      content: `### Krav til autorisasjon

For å få autorisasjon til å drive vaktvirksomhet må foretaket oppfylle flere vilkår:

**Krav til foretaket:**
- Foretaket må vare registrert i Foretaksregisteret
- Det må foreligge tilfredsstillende vandel for eiere og ledelse
- Foretaket må ha ordnede okonomi- og arbeidsforhold
- Det skal utpekes en daglig leder som er ansvarlig overfor politiet

**Krav til den enkelte vekter:**
- Tilfredsstillende vandel (plettfri vandelsattest)
- Gjennomfort godkjent vekterutdanning (minst 90 timer)
- Fylt 18 år
- Vare statsborger i EOS-land eller ha oppholdstillatelse

**Krav til uniformering:**
- Vektere skal baere uniform under tjeneste
- Uniformen skal vare godkjent av politiet
- Uniformen skal tydelig skille seg fra politiets uniform
- Vektere skal baere synlig vekterlegitimisjon`,
    },
    {
      id: 'sik-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Kravet til vandel',
      problem: 'En person med en dom for voldsbruk for fem år siden soker om å bli vekter. Vil vedkommende få godkjenning?',
      solution: `**Vurdering:**
Vandelsattesten vurderes individuelt av politiet. En voldsdom er alvorlig, men politiet ser på flere faktorer:

- **Type lovbrudd:** Vold er spesielt relevant for vektere som kan havne i konfliktsituasjoner
- **Hvor lenge siden:** Fem år kan vare tilstrekkelig tid, men det avhenger av alvorlighetsgraden
- **Gjentakelse:** Er det et enkeltstående tilfelle eller et monster?
- **Rehabilitering:** Har personen vist positiv utvikling?

I praksis vil en voldsdom ofte fore til avslag, saerlig dersom den er av nyere dato. Politiet har et strengt krav til vandel for vektere fordi de utover oppgaver som krever hoyt tillitsnivå.`,
    },
    {
      id: 'sik-7-1-text-3',
      type: 'text',
      content: `### Vekteres plikter

Loven pålegger vektere en rekke plikter:

**Legitimasjonsplikt:**
- Vektere skal på forespørsel vise gyldig vekterlegitimisjon
- Legitimasjonen skal inneholde navn, foto og foretakets navn
- Den skal vare utstedt av politiet

**Rapporteringsplikt:**
- Hendelser som er relevante for oppdragsgivers sikkerhet skal rapporteres
- Strafbare forhold skal rapporteres til politiet
- Det skal fores vaktjournal med oversikt over hendelser

**Taushetsplikt:**
- Vektere har taushetsplikt om personlige forhold de får kjennskap til i tjenesten
- Taushetsplikten gjelder også etter at ansettelsesforholdet er avsluttet
- Opplysninger kan kun utleveres til politiet når det er nødvendig

**Aktsomhetsplikt:**
- Vektere skal opptre aktsomt og hensynsfullt
- De skal unngå å framprovosere konflikter
- De skal vare hooflige og profesjonelle i all kontakt med publikum`,
    },
    {
      id: 'sik-7-1-text-4',
      type: 'text',
      content: `### Begrensninger for vaktvirksomhet

Det er viktig å forstå hva vektere **ikke** har lov til:

**Myndighetsutovelse:**
- Vektere har ikke politimyndighet
- De kan ikke foreta ransaking eller beslag
- De kan ikke utstede forelegg eller bøter
- De har ingen saerlig rett til å bruke tvangsmidler

**Maktbruk:**
- Vektere har ikke storre rett til maktbruk enn vanlige borgere
- Maktbruk er kun tillatt i nodverge- og nodrettssituasjoner (se kapittel 7.2)
- All maktbruk skal vare forholdsmessig og et siste utvei

**Bevapning:**
- Vektere har ikke lov til å baere våpen
- Bruk av slagvåpen, pepperspray eller elektrosjokkvåpen er forbudt
- Håndjern kan kun brukes dersom det er uttrykkelig avtalt med politiet

**Oppgavebegrensninger:**
- Vektere skal ikke utfore politioppgaver
- De skal ikke utfore oppgaver som grenser mot privat etterforskning uten saerskilt tillatelse
- Vaktvirksomhet i det offentlige rom krever saerskilt tillatelse`,
    },
    {
      id: 'sik-7-1-text-5',
      type: 'text',
      content: `### Tilsyn og sanksjoner

Politiet forer tilsyn med vaktvirksomhet:

**Tilsynsmyndighet:**
- Politiet kan når som helst kontrollere at vilkårene for autorisasjon er oppfylt
- De kan foreta inspeksjoner av vaktforetakets lokaler og dokumentasjon
- Arbeidstilsynet forer tilsyn med arbeidsmiljølovens bestemmelser

**Sanksjoner ved brudd:**
- Autorisasjonen kan trekkes tilbake ved gjentatte eller alvorlige brudd
- Vaktvirksomhet uten autorisasjon er straffbart
- Strafferammen er bøter eller fengsel inntil tre måneder
- Overtredelse av uniformeringsplikten kan medføre bøter`,
    },
    {
      id: 'sik-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med vaktvirksomhetsloven?',
        options: [
          { id: 'a', text: 'Å gi vektere politimyndighet i bestemte situasjoner', isCorrect: false },
          { id: 'b', text: 'Å sikre at vaktvirksomhet drives forsvarlig og med kvalifisert personell', isCorrect: true },
          { id: 'c', text: 'Å erstatte politiets oppgaver med private vaktselskaper', isCorrect: false },
          { id: 'd', text: 'Å regulere priser og konkurransevilkår i vekterbransjen', isCorrect: false },
        ],
        solution: 'Vaktvirksomhetsloven har som hovedformål å sikre at vaktvirksomhet drives forsvarlig. Den stiller krav til autorisasjon, vandel, utdanning og uniformering for å beskytte både publikum og bransjen.',
      },
    },
    {
      id: 'sik-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        task: 'Hvilke av folgende er et krav for å kunne arbeide som vekter?',
        options: [
          { id: 'a', text: 'Man må vare minst 21 år gammel', isCorrect: false },
          { id: 'b', text: 'Man må ha tilfredsstillende vandel og gjennomfort godkjent vekterutdanning', isCorrect: true },
          { id: 'c', text: 'Man må ha militaer bakgrunn eller politiutdanning', isCorrect: false },
          { id: 'd', text: 'Man må ha norsk statsborgerskap', isCorrect: false },
        ],
        solution: 'For å jobbe som vekter kreves tilfredsstillende vandel (plettfri vandelsattest) og gjennomfort godkjent vekterutdanning på minst 90 timer. Alderskravet er 18 år, og man trenger ikke norsk statsborgerskap, men må vare statsborger i et EOS-land eller ha oppholdstillatelse.',
      },
    },
    {
      id: 'sik-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'Forklar hva autorisasjon innebarer for et vaktforetak, og nevn minst tre vilkår som må vare oppfylt for å få autorisasjon.',
        hints: ['Tenk på krav til selve foretaket, ikke bare de ansatte'],
        solution: 'Autorisasjon er en offentlig tillatelse fra politiet som gir et foretak lov til å drive vaktvirksomhet. Uten autorisasjon er det ulovlig å tilby vakttjenester. For å få autorisasjon kreves blant annet: 1) Foretaket må vare registrert i Foretaksregisteret. 2) Eiere og ledelse må ha tilfredsstillende vandel. 3) Foretaket må ha ordnede okonomi- og arbeidsforhold. 4) Det må utpekes en daglig leder som er ansvarlig overfor politiet.',
      },
    },
    {
      id: 'sik-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Beskriv tre viktige plikter en vekter har etter vaktvirksomhetsloven.',
        hints: ['Tenk på legitimasjon, rapportering og taushetsplikt'],
        solution: 'Tre viktige plikter er: 1) Legitimasjonsplikt: Vektere skal på forespørsel vise gyldig vekterlegitimisjon med navn, foto og foretakets navn. 2) Rapporteringsplikt: Hendelser skal rapporteres til oppdragsgiver, strafbare forhold til politiet, og det skal fores vaktjournal. 3) Taushetsplikt: Vektere har taushetsplikt om personlige forhold de får kjennskap til, også etter at ansettelsesforholdet er avsluttet.',
      },
    },
    {
      id: 'sik-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-7-1-ex-5',
        number: '7.1.5',
        type: 'classic',
        task: 'En vekter på et kjopesenter oppdager at en person stjeler varer. Vekteren onsker å ransake personen og legge beslag på tyvgodset. Er dette lovlig? Begrunn svaret ditt.',
        hints: ['Tenk på forskjellen mellom politimyndighet og vekternes myndighet'],
        solution: 'Nei, en vekter har ikke lov til å ransake personer eller foreta beslag. Dette er politioppgaver som krever politimyndighet. Vekteren kan derimot holde tilbake personen dersom vedkommende er tatt på fersk gjerning (borgernes pågripelsesrett etter straffeprosessloven paragraf 176), og tilkalle politiet. Vekteren kan be personen om å åpne vesken frivillig, men har ingen rett til å kreve det.',
      },
    },
    {
      id: 'sik-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-7-1-ex-6',
        number: '7.1.6',
        type: 'classic',
        task: 'Drooft hvorfor det er viktig at vektere ikke har politimyndighet. Hvilke konsekvenser kunne det fått dersom vektere hadde fått utvidede fullmakter?',
        hints: ['Tenk på rettssikkerhet, demokratisk kontroll og mulig misbruk'],
        solution: 'Det er viktig at vektere ikke har politimyndighet av flere grunner: 1) Rettssikkerhet: Politimyndighet innebarer makt over borgere, og denne makten må kontrolleres demokratisk gjennom offentlige institusjoner. 2) Kompetanse: Politiet har lang utdanning i lovverk, etikk og maktbruk, mens vektere har kortere utdanning. 3) Fare for misbruk: Private selskaper har oekonomiske incentiver som kan komme i konflikt med borgernes rettigheter. 4) Ansvarlighet: Politiet er underlagt offentlig kontroll og Spesialenheten, mens private vaktselskaper ikke har tilsvarende kontrollmekanismer.',
      },
    },
    {
      id: 'sik-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Vaktvirksomhetsloven** regulerer all naeringsmessig vaktvirksomhet i Norge
- **Autorisasjon** fra politiet er påkrevd for å drive vaktforetak
- **Krav til vektere** inkluderer vandel, utdanning, alder og uniformering
- **Plikter** omfatter legitimasjon, rapportering, taushetsplikt og aktsomhet
- **Begrensninger** betyr at vektere ikke har politimyndighet eller rett til maktbruk utover det enhver borger har

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Autorisasjon | Offentlig tillatelse fra politiet til å drive vaktvirksomhet |
| Vandelsattest | Dokumentasjon på at en person ikke har relevante straffbare forhold |
| Legitimasjonsplikt | Plikt til å vise vekterlegitimisjon på forespørsel |
| Taushetsplikt | Plikt til å tie om personlige forhold man får kjennskap til |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Straffeloven og nodrett
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_7_2: TextbookChapter = {
  id: 'sikkerhetsfag-7-2',
  courseId: 'sikkerhetsfag',
  chapterNumber: '7.2',
  title: 'Straffeloven og nodrett',
  description: 'Straffeloven inneholder bestemmelser om nodverge, nodrett og borgernes pågripelsesrett som er svart relevante for vektere. Du larer om når maktbruk er lovlig, hva borgerarrest innebarer, og hvordan forholdsmessighetsprinsippet fungerer.',
  estimatedMinutes: 20,
  competenceGoals: ['drofte grensene for lovlig maktbruk og borgernes rettigheter'],
  content: [
    {
      id: 'sik-7-2-intro',
      type: 'text',
      content: `## Straffeloven - grunnlaget for lovlig maktbruk

Som vekter vil du kunne havne i situasjoner der du må bruke fysisk makt. Da er det helt avgjorende at du kjenner reglene i straffeloven om nodverge og nodrett. Disse bestemmelsene gjelder for alle borgere, og vektere har ikke noen utvidet rett til maktbruk.

I dette kapittelet skal du lare:
- Hva nodverge innebarer og når det er lovlig
- Hva nodrett er og hvordan det skiller seg fra nodverge
- Borgernes pågripelsesrett (borgerarrest)
- Forholdsmessighetsprinsippet ved maktbruk`,
    },
    {
      id: 'sik-7-2-def-1',
      type: 'definition',
      title: 'Nodverge',
      content: `**Nodverge** (straffeloven paragraf 18) er retten til å bruke makt for å avverge et ulovlig angrep. Handlingen må ikke gå lenger enn det som er nodvendig, og den må ikke vare åpenbart uforsvarlig sett opp mot angrepets farlighet, den angrepnes skyld, og de verdier som er truet.`,
    },
    {
      id: 'sik-7-2-text-1',
      type: 'text',
      content: `### Nodverge i praksis

For at nodverge skal vare lovlig, må fire vilkår vare oppfylt:

**1. Det må foreligge et ulovlig angrep:**
- Angrepet må vare rettsstridig (ulovlig)
- Det kan vare rettet mot person, eiendom eller andre rettsgoder
- Angrepet kan komme fra mennesker (ikke dyr eller naturkrefter - det er nodrett)

**2. Angrepet må vare aktuelt eller umiddelbart forestående:**
- Du kan ikke bruke nodverge mot noe som skjedde i går
- Du kan handle preventivt dersom angrepet er umiddelbart forestående
- Når angrepet er over, opphorer retten til nodverge

**3. Forsvarshandlingen må vare nodvendig:**
- Du må velge det minst inngripende middelet som er tilstrekkelig
- Hvis du kan trekke deg unna, bor du gjore det
- Maktbruken skal stå i forhold til trusselen

**4. Handlingen må ikke vare åpenbart uforsvarlig:**
- En forholdsmessighetsvurdering må gjennomfores
- Å skyte noen som stjeler et eple er åpenbart uforsvarlig
- Å holde fast noen som angriper deg fysisk er normalt forsvarlig`,
    },
    {
      id: 'sik-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Forholdsmessig nodverge',
      problem: 'En beruset person på et utested begynner å slå etter en annen gjest. Du er ordensvakt. Hvordan kan du handle innenfor nodvergebestemmelsen?',
      solution: `**Trinn 1 - Vurdering:**
Det foreligger et ulovlig angrep (vold) som er pågående - vilkårene for nodverge er oppfylt.

**Trinn 2 - Minst inngripende middel:**
- Forst: Verbal tilnaerming - "Stopp, dette må du slutte med"
- Deretter: Fysisk skille partene ved å stille deg mellom dem
- Om nodvendig: Holde fast den aggressive personen
- Siste utvei: Legge personen i bakken og holde fast til politiet kommer

**Trinn 3 - Forholdsmessighet:**
- Slag med flat hånd mot en som slår med knyttneve: normalt forsvarlig
- Bruke kvelegrep mot en som dytter: uforholdsmessig
- Holde fast til situasjonen roer seg: forsvarlig

**Viktig:** Så snart personen slutter å utgjore en trussel, må maktbruken opphore.`,
    },
    {
      id: 'sik-7-2-def-2',
      type: 'definition',
      title: 'Nodrett',
      content: `**Nodrett** (straffeloven paragraf 17) er retten til å handle i strid med loven for å redde liv, helse, eiendom eller andre verdier fra en fare som ikke kan avverges på annen måte. Til forskjell fra nodverge trenger ikke faren å skyldes et ulovlig angrep - den kan også komme fra naturkrefter, ulykker eller dyr.`,
    },
    {
      id: 'sik-7-2-text-2',
      type: 'text',
      content: `### Nodrett i praksis

Nodrett er aktuelt når faren ikke skyldes et ulovlig angrep fra en person:

**Eksempler på nodrettssituasjoner for vektere:**
- Bryte opp en dor for å slukke en brann
- Kjore over fartsgrensen for å frakte en alvorlig skadet person til sykehus
- Gå inn i et privat område for å redde en person fra drukning
- Ta en fremmed bil for å transportere en bevisstlos person

**Vilkår for nodrett:**
- Det må foreligge en fare for liv, helse, eiendom eller andre verdier
- Faren kan ikke avverges på annen rimelig måte
- Skaden som voldes må ikke vare uforholdsmessig stor i forhold til faren
- Handlingen må vare nodvendig - du kan ikke gå lenger enn det situasjonen krever

**Forskjell fra nodverge:**
| Nodverge | Nodrett |
|----------|---------|
| Ulovlig angrep fra person | Fare fra enhver kilde |
| Makt mot angriperen | Handling som ellers ville vare ulovlig |
| Retter seg mot den som angriper | Kan ramme uskyldige tredjeparter |`,
    },
    {
      id: 'sik-7-2-text-3',
      type: 'text',
      content: `### Borgernes pågripelsesrett (borgerarrest)

Etter straffeprosessloven paragraf 176 andre ledd har enhver rett til å pågripe en person som treffes på fersk gjerning eller fersk spor. Dette er svart relevant for vektere:

**Vilkår for borgerarrest:**
- Personen må treffes på **fersk gjerning** (tas i selve handlingen) eller **fersk spor** (umiddelbart etter)
- Det må gjelde et straffbart forhold
- Den pågrepne skal snarest overleveres til politiet

**Hva du kan gjore:**
- Holde personen fysisk fast
- Be personen om å bli til politiet kommer
- Bruke minst mulig makt for å hindre flukt
- Identifisere personen (be om legitimasjon)

**Hva du ikke kan gjore:**
- Bruke mer makt enn det som er nodvendig
- Holde personen over lengre tid uten å tilkalle politi
- Ransake personen eller vedkommendes eiendeler
- Transportere personen mot vedkommendes vilje til et annet sted

**Praktisk råd for vektere:**
Tilkall alltid politiet umiddelbart. Dokumenter hendelsen norye - tidspunkt, vitner, hva du observerte. Vær rolig og profesjonell. Bruk minst mulig makt.`,
    },
    {
      id: 'sik-7-2-text-4',
      type: 'text',
      content: `### Forholdsmessighetsprinsippet

Forholdsmessighetsprinsippet er det overordnede prinsippet for all maktbruk:

**Trappetrinnsmodellen for maktbruk:**

1. **Tilstedevarelse:** Ofte er det nok at en vekter er til stede
2. **Verbal kommunikasjon:** Gi tydelige beskjeder og advarsler
3. **Verbal advarsel:** Informer om konsekvenser ved manglende samarbeid
4. **Fysisk kontakt (lav):** Lett beroring, ledsaging
5. **Fysisk kontakt (hoy):** Fastholdelse, nedlegging
6. **Tilkall politi:** Overlat til politiet ved alvorlige situasjoner

**Prinsippet innebarer at:**
- Maktbruken skal stå i forhold til trusselen
- Du skal alltid starte på lavest mulig nivå
- Du skal trappe ned så snart situasjonen tillater det
- Overdreven maktbruk er straffbart (legemsfornarmelse, frihetsberovelse)

**Dokumentasjon:**
Etter enhver hendelse med maktbruk bor du dokumentere: hva som skjedde, hvilke tiltak du tok, hvorfor du mente det var nodvendig, vitner, og eventuell skade.`,
    },
    {
      id: 'sik-7-2-example-2',
      type: 'example',
      title: 'Eksempel: Grensen mellom lovlig og ulovlig maktbruk',
      problem: 'En butikkvekter oppdager at en person har gjemt varer under jakken. Personen forsøker å gå ut av butikken uten å betale. Hva kan vekteren gjøre?',
      solution: `**Situasjon:** Personen treffes på fersk gjerning - borgernes pågripelsesrett gjelder.

**Lovlig fremgangsmåte:**
1. Henvend deg hooflig: "Unnskyld, jeg tror du har glemt å betale for noe"
2. Be personen folge med til et kontor for å avklare situasjonen
3. Dersom personen nekter: Informer om at du vil tilkalle politiet
4. Dersom personen forsøker å flykte: Du kan holde personen tilbake med minst mulig makt
5. Tilkall politiet umiddelbart

**Ulovlig fremgangsmåte (dette er IKKE lov):**
- Ta kvelertak på personen
- Slå eller sparke personen
- Ransake personens lommer og vesker
- Låse personen inne i flere timer uten å ringe politiet
- Tvinge personen til å kle av seg`,
    },
    {
      id: 'sik-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom nodverge og nodrett?',
        options: [
          { id: 'a', text: 'Nodverge gjelder bare for politi, nodrett gjelder for alle', isCorrect: false },
          { id: 'b', text: 'Nodverge forutsetter et ulovlig angrep, nodrett gjelder fare uansett kilde', isCorrect: true },
          { id: 'c', text: 'Nodverge tillater ubegrenset maktbruk, nodrett har begrensninger', isCorrect: false },
          { id: 'd', text: 'Nodverge er regulert i Grunnloven, nodrett i straffeloven', isCorrect: false },
        ],
        solution: 'Nodverge (straffeloven paragraf 18) forutsetter et ulovlig angrep fra en person, mens nodrett (paragraf 17) gjelder fare uansett kilde - for eksempel brann, ulykker eller naturkatastrofer. Begge krever forholdsmessighet.',
      },
    },
    {
      id: 'sik-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-7-2-ex-2',
        number: '7.2.2',
        type: 'multiple-choice',
        task: 'Når kan en vekter bruke borgernes pågripelsesrett?',
        options: [
          { id: 'a', text: 'Når som helst det er mistanke om et straffbart forhold', isCorrect: false },
          { id: 'b', text: 'Bare dersom politiet har gitt forhåndsgodkjenning', isCorrect: false },
          { id: 'c', text: 'Når personen treffes på fersk gjerning eller fersk spor', isCorrect: true },
          { id: 'd', text: 'Bare ved alvorlige forbrytelser som ran eller drap', isCorrect: false },
        ],
        solution: 'Borgernes pågripelsesrett etter straffeprosessloven paragraf 176 gjelder når personen treffes på fersk gjerning (i selve handlingen) eller fersk spor (umiddelbart etter). Den gjelder for alle straffbare forhold, ikke bare alvorlige, og krever ikke forhåndsgodkjenning fra politiet.',
      },
    },
    {
      id: 'sik-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        task: 'Forklar de fire vilkårene som må vare oppfylt for at nodverge skal vare lovlig, og gi et eksempel på hver.',
        hints: ['Se straffeloven paragraf 18 og tenk på hva som gjor handlingen lovlig'],
        solution: 'De fire vilkårene er: 1) Det må foreligge et ulovlig angrep - for eksempel at noen forsøker å slå deg. 2) Angrepet må vare aktuelt eller umiddelbart forestående - personen lofter neven for å slå. 3) Forsvarshandlingen må vare nodvendig - du kan ikke unngå situasjonen ved å gå unna. 4) Handlingen må ikke vare åpenbart uforsvarlig - å dytte bort en person som slår er greit, men å bruke jernstang mot en som dytter er uforsvarlig.',
      },
    },
    {
      id: 'sik-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'Beskriv trappetrinnsmodellen for maktbruk og forklar hvorfor den er viktig for vektere.',
        hints: ['Start med det minst inngripende tiltaket'],
        solution: 'Trappetrinnsmodellen beskriver en opptrappingsrekkefolge: 1) Tilstedevarelse, 2) Verbal kommunikasjon, 3) Verbal advarsel om konsekvenser, 4) Lett fysisk kontakt som ledsaging, 5) Sterkere fysisk kontakt som fastholdelse, 6) Tilkalling av politi. Modellen er viktig fordi den sikrer at vektere alltid bruker minst mulig makt, noe som er et juridisk krav. Overdreven maktbruk er straffbart og kan medføre tiltale for legemsfornarmelse eller frihetsberovelse.',
      },
    },
    {
      id: 'sik-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        task: 'En vekter oppdager en brann i et lagerrom som er låst. Nokkelen er ikke tilgjengelig, men det er mennesker i naerheten som kan vare i fare. Vekteren sparker opp doren. Er dette lovlig? Hvilket juridisk grunnlag gjelder?',
        solution: 'Ja, dette er lovlig og faller inn under nodrett (straffeloven paragraf 17). Faren (brannen) kan ikke avverges på annen rimelig måte fordi nokkelen ikke er tilgjengelig, og det er fare for liv og helse. Skaden (ødelagt dor) er ikke uforholdsmessig stor sammenlignet med faren for menneskene. Merk at dette ikke er nodverge, fordi faren ikke skyldes et ulovlig angrep fra en person, men en brann.',
      },
    },
    {
      id: 'sik-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-7-2-ex-6',
        number: '7.2.6',
        type: 'classic',
        task: 'Drooft grensene for lovlig maktbruk for en vekter sammenlignet med en politibetjent. Hvorfor har politiet utvidede fullmakter?',
        hints: ['Tenk på utdanning, demokratisk kontroll og ansvar'],
        solution: 'Vektere har kun de samme rettighetene som enhver borger: nodverge, nodrett og borgernes pågripelsesrett. Politiet har derimot politimyndighet som gir utvidede fullmakter: de kan bruke tvangsmidler, foreta ransaking, arrestere og bruke våpen i bestemte situasjoner. Politiet har disse fullmaktene fordi: 1) De har lang utdanning (3 år) med grundig opplaering i lovverk og etikk. 2) De er underlagt demokratisk kontroll gjennom Justisdepartementet. 3) De er underlagt Spesialenheten som etterforsker maktmisbruk. 4) De handler på vegne av staten, ikke private interesser.',
      },
    },
    {
      id: 'sik-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Nodverge** gir rett til å avverge ulovlige angrep med forholdsmessig makt
- **Nodrett** gir rett til å handle mot loven for å avverge fare fra enhver kilde
- **Borgerarrest** kan brukes når noen treffes på fersk gjerning eller fersk spor
- **Forholdsmessighet** er det overordnede prinsippet - maktbruken må stå i forhold til trusselen
- **Trappetrinnsmodellen** sikrer at maktbruk trappes opp gradvis

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Nodverge | Rett til å avverge ulovlige angrep med makt |
| Nodrett | Rett til å handle mot loven for å avverge fare |
| Borgerarrest | Rett til å pågripe person tatt på fersk gjerning |
| Forholdsmessighet | Maktbruk må stå i forhold til trusselen |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Brann- og eksplosjonsvernloven
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_7_3: TextbookChapter = {
  id: 'sikkerhetsfag-7-3',
  courseId: 'sikkerhetsfag',
  chapterNumber: '7.3',
  title: 'Brann- og eksplosjonsvernloven',
  description: 'Brann- og eksplosjonsvernloven regulerer forebyggende arbeid mot brann og eksplosjon. Du larer om brannvesenets rolle, krav til bygninger og virksomheter, og hvilke forebyggende tiltak loven krever.',
  estimatedMinutes: 20,
  competenceGoals: ['beskrive brann- og eksplosjonsvernlovens krav til forebyggende arbeid'],
  content: [
    {
      id: 'sik-7-3-intro',
      type: 'text',
      content: `## Brann- og eksplosjonsvernloven - forebygging og beredskap

Brann er en av de storste truslene mot liv og verdier i samfunnet. Brann- og eksplosjonsvernloven gir rammeverket for å forebygge brann og begrense skadene når brann oppstår. For deg som jobber i sikkerhetsbransjen er kjennskap til denne loven helt avgjorende - vektere er ofte de forste som oppdager brannfarlige forhold eller må håndtere begynnende branner.

I dette kapittelet skal du lare:
- Lovens formål og oppbygging
- Brannvesenets organisering og rolle
- Krav til forebyggende brannvern i bygninger og virksomheter
- Eiers og brukers plikter etter loven`,
    },
    {
      id: 'sik-7-3-def-1',
      type: 'definition',
      title: 'Brann- og eksplosjonsvernloven',
      content: `**Brann- og eksplosjonsvernloven** er en lov som har til formål å verne liv, helse, miljo og materielle verdier mot brann og eksplosjon, mot ulykker med farlig stoff og farlig gods, og andre akutte ulykker. Loven regulerer både forebyggende arbeid og beredskap.`,
    },
    {
      id: 'sik-7-3-text-1',
      type: 'text',
      content: `### Brannvesenets organisering

Brannvernet i Norge er organisert på kommunalt nivå:

**Kommunens ansvar:**
- Hver kommune skal ha et brannvesen som kan ivareta forebyggende og beredskapsmessige oppgaver
- Kommunen skal sørge for at brannvesenet er organisert, bemannet og utstyrt for å kunne håndtere branner og ulykker
- Flere kommuner kan samarbeide om felles brannvesen

**Brannvesenets oppgaver:**
- Forebyggende arbeid: Tilsyn med bygninger og virksomheter
- Beredskap: Slukking av branner og redningsinnsats
- Informasjon og veiledning til publikum
- Feiing og tilsyn med fyringsanlegg

**Direktoratet for samfunnssikkerhet og beredskap (DSB):**
- Er overordnet fagmyndighet for brann- og eksplosjonsvernområdet
- Fastsetter forskrifter og retningslinjer
- Driver tilsyn med kommunenes brannvern
- Administrerer utdanning av brannpersonell`,
    },
    {
      id: 'sik-7-3-text-2',
      type: 'text',
      content: `### Krav til forebyggende brannvern

Loven stiller omfattende krav til forebygging:

**Krav til bygninger:**
- Bygninger skal prosjekteres og utfores slik at det oppnås tilfredsstillende sikkerhet ved brann
- Romningsveier skal vare tilstrekkelige og godt merket
- Brannalarmanlegg skal installeres i naeringsbygg og boliger
- Slokkeutstyr (brannslukningsapparater, brannslanger) skal vare tilgjengelig
- Brannceller skal hindre spredning av brann mellom rom

**Krav til virksomheter:**
- Saerlige brannobjekter (sykehus, hoteller, skoler, forsamlingslokaler) skal ha systematisk brannvernarbeid
- Virksomheten skal utarbeide brannvernplan
- Det skal gjennomfores jevnlige brannøvelser
- Ansatte skal ha opplaering i brannforebygging og bruk av slokkeutstyr
- Romningsveier skal holdes frie og tilgjengelige til enhver tid

**Tilsyn:**
- Brannvesenet gjennomforer tilsyn med saerlige brannobjekter
- Tilsynet kontrollerer at kravene i loven og forskriftene er oppfylt
- Ved avvik kan brannvesenet gi pålegg om utbedring
- Alvorlige mangler kan føre til bruksforbud`,
    },
    {
      id: 'sik-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Vekterens rolle i brannforebygging',
      problem: 'Du jobber som nattevakt på et kjopesenter. Under en runde oppdager du at en nodutgang er blokkert av vareleveranser, og at et brannslukningsapparat mangler i korridoren. Hva gjor du?',
      solution: `**Umiddelbare tiltak:**
1. **Nodutgangen:** Fjern hindringene umiddelbart dersom det er mulig, eller sperr av området og varsle ansvarlig. En blokkert nodutgang er en alvorlig sikkerhetsrisiko.
2. **Brannslukningsapparatet:** Noter nøyaktig plassering der apparatet mangler.

**Rapportering:**
3. Dokumenter funnene med dato, klokkeslett og nøyaktig beskrivelse
4. Rapporter til vaktleder og oppdragsgiver umiddelbart
5. Oppfølging: Kontroller at avvikene er utbedret ved neste runde

**Lovgrunnlag:**
Etter brann- og eksplosjonsvernloven har eier og bruker av bygningen plikt til å sørge for at romningsveier er frie og at slokkeutstyr er på plass. Som vekter har du en rapporteringsplikt, og dine observasjoner kan forebygge alvorlige hendelser.`,
    },
    {
      id: 'sik-7-3-text-3',
      type: 'text',
      content: `### Eiers og brukers plikter

Loven skiller mellom eier og bruker av en bygning:

**Eiers plikter:**
- Sørge for at bygningen er i forsvarlig stand med hensyn til brannsikkerhet
- Installere og vedlikeholde branntekniske installasjoner (alarm, slokkeanlegg, nodlys)
- Sørge for at romningsveier er forsvarlig utformet og merket
- Dokumentere branntekniske forhold i bygningen
- Medvirke til at brannvesenet kan gjennomfore tilsyn

**Brukers plikter:**
- Sørge for at virksomheten drives i samsvar med brannvernkravene
- Holde romningsveier frie og tilgjengelige
- Utarbeide og vedlikeholde brannvernplan
- Gjennomfore brannøvelser
- Gi ansatte opplaering i brannvern
- Rapportere avvik til eier

**Viktig for vektere:**
Som vekter er du ofte den som oppdager avvik. Din observasjons- og rapporteringsevne er avgjorende for at brannvernarbeidet fungerer. Typiske funn kan vare blokkerte romningsveier, defekte brannalarmer, manglende slokkeutstyr, feil oppbevaring av brennbare materialer, eller propping av branndorer.`,
    },
    {
      id: 'sik-7-3-text-4',
      type: 'text',
      content: `### Forskrift om brannforebygging

Forskrift om brannforebygging utfyller loven med mer detaljerte krav:

**Saerlige brannobjekter:**
Bygninger der en brann kan medføre tap av mange liv, er klassifisert som saerlige brannobjekter. Eksempler:
- Sykehus og sykehjem
- Hoteller og overnattingssteder
- Skoler og barnehager
- Forsamlingslokaler og kjøpesentre
- Industribygg med farlige stoffer

**Krav til saerlige brannobjekter:**
- Brannvernleder skal utpekes
- Brannvernplan skal vare oppdatert og tilgjengelig
- Systematisk brannvernarbeid med dokumentasjon
- Hyppigere tilsyn fra brannvesenet
- Strengere krav til øvelser og opplaering

**Systematisk sikkerhetsarbeid:**
Virksomheter skal drive systematisk arbeid for å forebygge brann. Dette innebarer å kartlegge risiko, gjennomfore tiltak, kontrollere at tiltakene virker, og forbedre arbeidet kontinuerlig.`,
    },
    {
      id: 'sik-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med brann- og eksplosjonsvernloven?',
        options: [
          { id: 'a', text: 'Å regulere forsikringsselskapenes ansvar ved brann', isCorrect: false },
          { id: 'b', text: 'Å verne liv, helse, miljo og materielle verdier mot brann og eksplosjon', isCorrect: true },
          { id: 'c', text: 'Å gi brannvesenet myndighet til å bøtelegge bygningseiere', isCorrect: false },
          { id: 'd', text: 'Å regulere salg og bruk av fyrverkeri', isCorrect: false },
        ],
        solution: 'Brann- og eksplosjonsvernloven har som hovedformål å verne liv, helse, miljo og materielle verdier mot brann og eksplosjon, mot ulykker med farlig stoff og farlig gods, og andre akutte ulykker.',
      },
    },
    {
      id: 'sik-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        task: 'Hvem har det overordnede ansvaret for brannvernet i en kommune?',
        options: [
          { id: 'a', text: 'Fylkesmannen', isCorrect: false },
          { id: 'b', text: 'Det lokale politidistriktet', isCorrect: false },
          { id: 'c', text: 'Kommunen selv, gjennom det kommunale brannvesenet', isCorrect: true },
          { id: 'd', text: 'Direktoratet for samfunnssikkerhet og beredskap alene', isCorrect: false },
        ],
        solution: 'Etter brann- og eksplosjonsvernloven er det kommunen som har ansvaret for brannvernet. Kommunen skal ha et brannvesen som kan ivareta forebyggende og beredskapsmessige oppgaver. DSB er overordnet fagmyndighet, men det operative ansvaret ligger hos kommunen.',
      },
    },
    {
      id: 'sik-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom eiers og brukers plikter etter brann- og eksplosjonsvernloven.',
        hints: ['Tenk på bygningstekniske forhold versus daglig drift'],
        solution: 'Eier har ansvar for de bygningstekniske forholdene: bygningens branntekniske tilstand, installasjon og vedlikehold av brannalarmer og slokkeanlegg, romningsveier og nodlys. Bruker (virksomheten som holder til i bygningen) har ansvar for den daglige driften: holde romningsveier frie, utarbeide brannvernplan, gjennomfore brannøvelser, gi ansatte opplaering, og rapportere avvik til eier. Begge parter har et selvstendig ansvar for brannsikkerheten.',
      },
    },
    {
      id: 'sik-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Hva er et saerlig brannobjekt? Gi tre eksempler og forklar hvilke ekstra krav som stilles.',
        hints: ['Tenk på bygninger der mange mennesker kan vare samlet'],
        solution: 'Et saerlig brannobjekt er en bygning der en brann kan medføre tap av mange liv. Eksempler: 1) Sykehus og sykehjem - pasienter kan ha vanskelig for å evakuere selv. 2) Hoteller - gjester kjenner ikke bygningen. 3) Kjøpesentre - mange mennesker samlet. Ekstra krav inkluderer: utpeking av brannvernleder, oppdatert brannvernplan, systematisk brannvernarbeid med dokumentasjon, hyppigere tilsyn fra brannvesenet, og strengere krav til øvelser og opplaering.',
      },
    },
    {
      id: 'sik-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-7-3-ex-5',
        number: '7.3.5',
        type: 'classic',
        task: 'Beskriv minst fem typiske brannrelaterte avvik en vekter kan oppdage under en vaktrundeinnspeksjon.',
        solution: 'Typiske avvik en vekter kan oppdage: 1) Blokkerte romningsveier - varer, mobler eller annet foran nodutganger. 2) Defekt brannalarm - blinkende feillampe eller manglende stromforsyning. 3) Manglende eller utgått brannslukningsapparat - tomt, ikke kontrollert, eller fjernet fra holderen. 4) Proppede branndorer - dorer som skal lukke seg automatisk er festet i åpen stilling. 5) Feil lagring av brennbare materialer - for eksempel pappesker stablet naer varmekilde. 6) Manglende eller ødelagte nodlys over utgangsdorer. 7) Røyking på ikke-tillattsteder.',
      },
    },
    {
      id: 'sik-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-7-3-ex-6',
        number: '7.3.6',
        type: 'classic',
        task: 'Drooft hvorfor systematisk brannvernarbeid er viktig for en virksomhet. Hva innebarer det i praksis?',
        hints: ['Tenk på risikokartlegging, tiltak, kontroll og forbedring'],
        solution: 'Systematisk brannvernarbeid er viktig fordi det sikrer at brannforebygging ikke er tilfeldig, men planlagt og dokumentert. I praksis innebarer det: 1) Risikokartlegging: Identifisere farer og sårbare punkter i bygningen. 2) Tiltak: Iverksette konkrete forebyggende tiltak basert på risikoen. 3) Kontroll: Gjennomfore jevnlige kontroller for å sikre at tiltakene fungerer. 4) Forbedring: Evaluere og forbedre arbeidet kontinuerlig. 5) Dokumentasjon: Alt skal dokumenteres for å vise at arbeidet gjores. 6) Opplaering: Alle ansatte skal vite hva de skal gjore ved brann. Uten systematikk risikerer man at viktige tiltak glemmes og at feil utvikler seg til alvorlige branner.',
      },
    },
    {
      id: 'sik-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Brann- og eksplosjonsvernloven** regulerer forebygging og beredskap mot brann
- **Brannvesenet** er kommunalt organisert med DSB som overordnet fagmyndighet
- **Eier** har ansvar for bygningstekniske forhold, **bruker** for daglig drift
- **Saerlige brannobjekter** har strengere krav til brannvern
- **Vektere** spiller en viktig rolle i å oppdage og rapportere avvik

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Saerlig brannobjekt | Bygning der brann kan medføre tap av mange liv |
| Brannvernplan | Dokumentert plan for brannforebygging og evakuering |
| Romningsvei | Merket og fri fluktvei ut av bygningen |
| DSB | Direktoratet for samfunnssikkerhet og beredskap |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Personopplysningsloven og GDPR
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_7_4: TextbookChapter = {
  id: 'sikkerhetsfag-7-4',
  courseId: 'sikkerhetsfag',
  chapterNumber: '7.4',
  title: 'Personopplysningsloven og GDPR',
  description: 'Personopplysningsloven og GDPR regulerer behandling av personopplysninger. Du larer om kravene til databehandling, samtykke, de registrertes rettigheter, og hva dette betyr for sikkerhetsbransjen som håndterer kameraovervåking og adgangskontroll.',
  estimatedMinutes: 20,
  competenceGoals: ['forklare personvernregelverket og dets betydning for sikkerhetsbransjen'],
  content: [
    {
      id: 'sik-7-4-intro',
      type: 'text',
      content: `## Personvern i sikkerhetsbransjen

Sikkerhetsbransjen behandler store mengder personopplysninger: kameraovervåking, adgangskontrollsystemer, besoksregistrering og hendelsesrapporter. Alt dette er regulert av personopplysningsloven og EUs personvernforordning (GDPR). Brudd på personvernreglene kan medføre store boter og alvorlig omdommeskade.

I dette kapittelet skal du lare:
- Hva personopplysninger er og hva behandling innebarer
- De viktigste prinsippene i GDPR
- Krav til samtykke og andre behandlingsgrunnlag
- De registrertes rettigheter
- Personvern i praksis for vektere`,
    },
    {
      id: 'sik-7-4-def-1',
      type: 'definition',
      title: 'Personopplysninger',
      content: `**Personopplysninger** er enhver opplysning som kan knyttes til en identifiserbar person. Dette inkluderer navn, adresse, fodselsnummer, bilder, videoopptak, IP-adresser, fingeravtrykk og posisjonsdata. Også opplysninger som indirekte kan identifisere en person regnes som personopplysninger.`,
    },
    {
      id: 'sik-7-4-text-1',
      type: 'text',
      content: `### GDPR - de grunnleggende prinsippene

GDPR (General Data Protection Regulation) er EUs personvernforordning som gjelder i Norge gjennom EOS-avtalen. Den bygger på syv grunnprinsipper:

**1. Lovlighet, rettferdighet og åpenhet:**
- Behandlingen må ha et lovlig grunnlag
- Den må vare rettferdig overfor den registrerte
- Det må vare åpenhet om hva som gjores med opplysningene

**2. Formålsbegrensning:**
- Personopplysninger skal samles inn for spesifikke, uttrykkelig angitte formål
- De skal ikke brukes til andre formål enn det opprinnelige

**3. Dataminimering:**
- Kun de opplysningene som er nodvendige for formålet skal samles inn
- Ikke samle inn mer enn du trenger

**4. Riktighet:**
- Opplysningene skal vare korrekte og oppdaterte
- Uriktige opplysninger skal rettes eller slettes

**5. Lagringsbegrensning:**
- Opplysninger skal ikke lagres lenger enn nodvendig
- Det skal fastsettes slettefrister

**6. Integritet og konfidensialitet:**
- Opplysningene skal beskyttes mot uautorisert tilgang
- Tilstrekkelig sikkerhet skal ivaretas

**7. Ansvarlighet:**
- Den behandlingsansvarlige skal kunne dokumentere at reglene folges`,
    },
    {
      id: 'sik-7-4-def-2',
      type: 'definition',
      title: 'Behandlingsgrunnlag',
      content: `**Behandlingsgrunnlag** er det juridiske grunnlaget som gjor det lovlig å behandle personopplysninger. De vanligste grunnlagene er samtykke fra den registrerte, oppfyllelse av avtale, rettslig forpliktelse, berettiget interesse, og vitale interesser. Uten gyldig behandlingsgrunnlag er behandlingen ulovlig.`,
    },
    {
      id: 'sik-7-4-text-2',
      type: 'text',
      content: `### Behandlingsgrunnlag for sikkerhetsbransjen

I sikkerhetsbransjen er folgende behandlingsgrunnlag mest relevante:

**Berettiget interesse (artikkel 6(1)(f)):**
- Mest brukt for kameraovervåking i naeringsbygg
- Formålet (sikkerhet) må veie tyngre enn personvernet til de som overvåkes
- Det skal gjennomfores en interesseavveining
- Eksempel: Kameraovervåking av en bankfilial for å forebygge ran

**Samtykke (artikkel 6(1)(a)):**
- Den registrerte gir frivillig, informert og uttrykkelig samtykke
- Samtykket kan trekkes tilbake når som helst
- Eksempel: En ansatt samtykker til bruk av fingeravtrykk i adgangskontroll

**Rettslig forpliktelse (artikkel 6(1)(c)):**
- Behandlingen er påkrevd for å oppfylle en lovpålagt plikt
- Eksempel: Oppbevaring av vaktjournaler som påkrevd av vaktvirksomhetsloven

**Krav til samtykke:**
- Det må vare frivillig - ingen negative konsekvenser ved å si nei
- Det må vare informert - den registrerte vet hva de samtykker til
- Det må vare utvetydig - klart og tydelig uttrykt
- Det må vare spesifikt - for et bestemt formål
- Det kan trekkes tilbake når som helst`,
    },
    {
      id: 'sik-7-4-text-3',
      type: 'text',
      content: `### De registrertes rettigheter

GDPR gir personer en rekke rettigheter over sine personopplysninger:

**Rett til informasjon:**
- Den registrerte skal vite hvem som behandler opplysningene og hvorfor
- Det skal vare synlig informasjon om kameraovervåking (skilting)
- Personvernerklaring skal vare tilgjengelig

**Rett til innsyn:**
- Enhver kan be om innsyn i hvilke opplysninger som er lagret om dem
- Henvendelsen skal besvares innen 30 dager
- Innsynet er som hovedregel gratis

**Rett til retting og sletting:**
- Uriktige opplysninger skal rettes
- Opplysninger som ikke lenger er nodvendige skal slettes
- "Retten til å bli glemt" gir rett til å kreve sletting

**Rett til å protestere:**
- Den registrerte kan protestere mot behandling basert på berettiget interesse
- Protesten skal vurderes og besvares

**Rett til dataportabilitet:**
- Den registrerte kan kreve å få sine opplysninger i et maskinlesbart format
- Opplysningene kan overføres til en annen behandlingsansvarlig`,
    },
    {
      id: 'sik-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Kameraovervåking og personvern',
      problem: 'Et vaktselskap installerer kameraovervåking i et kjopesenter. Hva krever personvernregelverket?',
      solution: `**For installasjon:**
1. Gjennomfore en vurdering av behandlingsgrunnlag (berettiget interesse)
2. Dokumentere interesseavveiningen: sikkerhetsbehovet vs. kunders personvern
3. Utarbeide en protokoll over behandlingsaktiviteter (ROPA)

**Ved installasjon:**
4. Skilte tydelig om at det foregår kameraovervåking
5. Informere om hvem som er behandlingsansvarlig og formålet
6. Sørge for at kameraene ikke filmer unødvendig (for eksempel inn i naboeiendommer)

**Under drift:**
7. Begrense hvem som har tilgang til opptakene
8. Fastsette og overholde slettefrister (typisk 7 dager)
9. Håndtere innsynshenvendelser innen 30 dager
10. Sikre opptakene mot uautorisert tilgang

**Ved hendelser:**
11. Opptak kan utleveres til politiet ved straffbare forhold
12. Opptak skal ikke deles med uvedkommende
13. Opptak som brukes som bevis kan lagres lenger enn normal slettefrist`,
    },
    {
      id: 'sik-7-4-text-4',
      type: 'text',
      content: `### Personvern i vekterens hverdag

Som vekter behandler du personopplysninger daglig:

**Kameraovervåking:**
- Du har tilgang til sanntids kamerabilder og opptak
- Du skal kun se på kameraer som er relevante for oppdraget
- Du skal ikke kopiere, fotografere eller dele opptak
- Opptak skal slettes i henhold til fastsatte slettefrister

**Adgangskontroll:**
- Du registrerer hvem som går inn og ut
- Disse opplysningene er personopplysninger
- De skal kun brukes til sikkerhetsformål

**Hendelsesrapporter:**
- Rapporter inneholder ofte personopplysninger
- Beskriv hendelsen saklig uten unodvendige personopplysninger
- Rapporter skal oppbevares sikkert

**Praktiske råd:**
- Aldri diskuter hendelser med utenforstående
- Lås skjermen når du forlater vaktrommet
- Sørg for at besokslogger oppbevares forsvarlig
- Si fra til leder dersom du oppdager personvernbrudd`,
    },
    {
      id: 'sik-7-4-text-5',
      type: 'text',
      content: `### Konsekvenser ved brudd

Brudd på personvernregelverket kan få alvorlige konsekvenser:

**Boter:**
- GDPR åpner for boter på opptil 20 millioner euro eller 4 prosent av global omsetning
- Datatilsynet har ilagt norske virksomheter boter på flere millioner kroner
- Eksempler: Ulovlig kameraovervåking, manglende sletting, utilstrekkelig sikkerhet

**Omdommeskade:**
- Personvernbrudd genererer negativ medieoppmerksomhet
- Tap av kundetillit kan vare langvarig
- Offentlige virksomheter risikerer politisk press

**Erstatningsansvar:**
- Den registrerte kan kreve erstatning for skade
- Både materielle og immaterielle skader kan erstattes

**Straff:**
- Grove eller forsettlige brudd kan medføre straffeansvar
- Strafferammen er boter eller fengsel`,
    },
    {
      id: 'sik-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hvilket av folgende er IKKE et grunnprinsipp i GDPR?',
        options: [
          { id: 'a', text: 'Dataminimering - kun samle inn det som er nodvendig', isCorrect: false },
          { id: 'b', text: 'Datamaksimering - samle inn så mye som mulig for sikkerhet', isCorrect: true },
          { id: 'c', text: 'Formålsbegrensning - bruke data kun til det angitte formålet', isCorrect: false },
          { id: 'd', text: 'Lagringsbegrensning - ikke lagre data lenger enn nodvendig', isCorrect: false },
        ],
        solution: 'Datamaksimering er IKKE et prinsipp i GDPR. Tvert imot er dataminimering et av de syv grunnprinsippene, som betyr at man kun skal samle inn personopplysninger som er nodvendige for det angitte formålet. De andre alternativene (formålsbegrensning og lagringsbegrensning) er reelle GDPR-prinsipper.',
      },
    },
    {
      id: 'sik-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        task: 'Hva er det vanligste behandlingsgrunnlaget for kameraovervåking i naeringsbygg?',
        options: [
          { id: 'a', text: 'Samtykke fra alle som filmes', isCorrect: false },
          { id: 'b', text: 'Berettiget interesse, etter en dokumentert interesseavveining', isCorrect: true },
          { id: 'c', text: 'Avtale med de ansatte', isCorrect: false },
          { id: 'd', text: 'Det trengs ikke behandlingsgrunnlag for kameraovervåking', isCorrect: false },
        ],
        solution: 'Berettiget interesse (GDPR artikkel 6(1)(f)) er det vanligste behandlingsgrunnlaget for kameraovervåking i naeringsbygg. Det kreves en dokumentert interesseavveining der sikkerhetsbehovet veies mot personvernet. Samtykke er upraktisk fordi man ikke kan innhente samtykke fra alle som besøker bygningen.',
      },
    },
    {
      id: 'sik-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        task: 'Forklar de syv grunnprinsippene i GDPR med egne ord.',
        hints: ['Husk lovlighet, formålsbegrensning, dataminimering, riktighet, lagringsbegrensning, integritet og ansvarlighet'],
        solution: 'De syv prinsippene er: 1) Lovlighet, rettferdighet og åpenhet: Behandlingen må ha lovlig grunnlag og vare åpen. 2) Formålsbegrensning: Data samles inn for bestemte formål og brukes ikke til annet. 3) Dataminimering: Kun nodvendige opplysninger samles inn. 4) Riktighet: Opplysningene skal vare korrekte og oppdaterte. 5) Lagringsbegrensning: Data slettes når de ikke lenger trengs. 6) Integritet og konfidensialitet: Data skal beskyttes mot uautorisert tilgang. 7) Ansvarlighet: Virksomheten skal kunne dokumentere at reglene folges.',
      },
    },
    {
      id: 'sik-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'En person henvender seg til vaktrommet og ber om å få se kameraopptaket der vedkommende ble filmet i resepsjonen i går. Hvordan skal du som vekter håndtere denne henvendelsen?',
        hints: ['Tenk på innsynsrett, svarfrist og hvem som er behandlingsansvarlig'],
        solution: 'Personen utover sin innsynsrett etter GDPR. Som vekter skal du: 1) Ta imot henvendelsen hooflig og noter personens kontaktopplysninger. 2) Forklare at henvendelsen vil bli videresendt til behandlingsansvarlig (oppdragsgiver, ikke vaktselskapet med mindre vaktselskapet er behandlingsansvarlig). 3) Du skal IKKE selv vise frem opptaket uten godkjenning fra behandlingsansvarlig. 4) Henvendelsen skal besvares innen 30 dager. 5) Ved utlevering av opptak må andre personers personvern ivaretas (sladding av andre personer). 6) Dokumenter henvendelsen.',
      },
    },
    {
      id: 'sik-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-7-4-ex-5',
        number: '7.4.5',
        type: 'classic',
        task: 'Beskriv tre konkrete tiltak en vekter kan gjore for å ivareta personvernet i sin daglige jobb.',
        solution: 'Tre konkrete tiltak: 1) Skjermlåsing: Alltid låse skjermen når man forlater vaktrommet slik at ikke uvedkommende ser kamerabilder eller personopplysninger. 2) Taushetsplikt: Aldri diskutere hendelser eller personer med utenforstående - kun rapportere til leder og politi når det er nodvendig. 3) Dataminimering i rapporter: Kun inkludere personopplysninger som er relevante for hendelsen, ikke unodvendige detaljer om personers utseende, etnisitet eller andre sensitive opplysninger.',
      },
    },
    {
      id: 'sik-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-7-4-ex-6',
        number: '7.4.6',
        type: 'classic',
        task: 'Drooft hvorfor personvernregelverket er saerlig viktig for sikkerhetsbransjen. Hvilke utfordringer skaper regelverket, og hvorfor er det likevel nodvendig?',
        hints: ['Tenk på mengden personopplysninger sikkerhetsbransjen behandler og faren for misbruk'],
        solution: 'Personvernregelverket er saerlig viktig fordi sikkerhetsbransjen behandler store mengder personopplysninger gjennom kameraovervåking, adgangskontroll og hendelsesrapporter. Utfordringer: 1) Avveiningen mellom sikkerhet og personvern kan vare vanskelig. 2) Teknologien gjor det stadig enklere å overvåke, men regelverket setter grenser. 3) Slettefrister kan vare utfordrende å administrere. Regelverket er likevel nodvendig fordi: 1) Uten kontroll risikerer man masseovervåking. 2) Personopplysninger kan misbrukes til andre formål enn sikkerhet. 3) Borgere har rett til privatliv også i det offentlige rom. 4) Tilliten til sikkerhetsbransjen avhenger av at personvernet ivaretas.',
      },
    },
    {
      id: 'sik-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Personopplysninger** er enhver opplysning som kan knyttes til en identifiserbar person
- **GDPR** bygger på syv grunnprinsipper for behandling av personopplysninger
- **Behandlingsgrunnlag** er påkrevd for all behandling - samtykke og berettiget interesse er vanligst i sikkerhetsbransjen
- **De registrerte** har rett til informasjon, innsyn, retting, sletting og å protestere
- **Vektere** behandler daglig personopplysninger og har ansvar for å ivareta personvernet

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| GDPR | EUs personvernforordning |
| Behandlingsgrunnlag | Juridisk grunnlag for å behandle personopplysninger |
| Dataminimering | Kun samle inn nodvendige opplysninger |
| Berettiget interesse | Behandlingsgrunnlag der sikkerhetsbehovet veier tyngre enn personvernet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Ovrig relevant lovverk
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_7_5: TextbookChapter = {
  id: 'sikkerhetsfag-7-5',
  courseId: 'sikkerhetsfag',
  chapterNumber: '7.5',
  title: 'Ovrig relevant lovverk',
  description: 'I tillegg til vaktvirksomhetsloven finnes det en rekke andre lover som er relevante for sikkerhetsbransjen. Du larer om arbeidsmiljoloven, politiloven og sivilbeskyttelsesloven, og hvordan disse lovene påvirker sikkerhetsarbeidet.',
  estimatedMinutes: 20,
  competenceGoals: ['vurdere samspillet mellom ulike lover som regulerer sikkerhetsarbeid'],
  content: [
    {
      id: 'sik-7-5-intro',
      type: 'text',
      content: `## Et sammensatt lovverk

Sikkerhetsbransjen opererer i skjaeringspunktet mellom mange ulike lover. I tillegg til vaktvirksomhetsloven, straffeloven, brann- og eksplosjonsvernloven og personopplysningsloven, finnes det flere lover som regulerer ulike sider av sikkerhetsarbeidet. Å kjenne disse lovene gjor deg til en bedre og mer profesjonell vekter.

I dette kapittelet skal du lare:
- Arbeidsmiljolovens betydning for sikkerhetsbransjen
- Politilovens relevans for vektere
- Sivilbeskyttelseslovens rolle i beredskapsarbeid
- Hvordan lovene samvirker i praksis`,
    },
    {
      id: 'sik-7-5-def-1',
      type: 'definition',
      title: 'Arbeidsmiljoloven',
      content: `**Arbeidsmiljoloven** (lov om arbeidsmiljo, arbeidstid og stillingsvern) er den viktigste loven for regulering av arbeidsforhold i Norge. Den gjelder for alle som har et ansettelsesforhold, inkludert vektere. Loven stiller krav til arbeidsmiljo, arbeidstid, stillingsvern og medvirkning.`,
    },
    {
      id: 'sik-7-5-text-1',
      type: 'text',
      content: `### Arbeidsmiljoloven i sikkerhetsbransjen

Vektere har ofte arbeidsforhold som gjor arbeidsmiljoloven saerlig relevant:

**Arbeidstid:**
- Sikkerhetsbransjen har ofte skiftarbeid, nattarbeid og helgearbeid
- Hovedregelen er maks 9 timer per dag og 40 timer per uke
- Nattarbeid (kl. 21-06) er i utgangspunktet forbudt, men tillatt for vektere fordi arbeidets art gjor det nodvendig
- Arbeidstaker skal ha minst 11 timer sammenhengende fritid per dogn
- Det skal vare minst 35 timer sammenhengende fritid per uke

**Arbeidsmiljo:**
- Arbeidsgiver har plikt til å sikre et fullt forsvarlig arbeidsmiljo
- For vektere innebarer dette blant annet tilstrekkelig sikkerhetsutstyr
- Risikovurdering skal gjennomfores for alle arbeidsoppgaver
- Vektere som utsettes for trusler eller vold har krav på oppfolging

**HMS-arbeid:**
- Systematisk HMS-arbeid er lovpålagt for alle virksomheter
- Vaktselskaper skal ha verneombud og arbeidsmiljoutvalg (AMU) ved 50 ansatte eller flere
- Risikovurderinger skal dokumenteres
- Avvik skal rapporteres og folges opp`,
    },
    {
      id: 'sik-7-5-text-2',
      type: 'text',
      content: `### Varsling og vern av varslere

Arbeidsmiljoloven gir vektere rett til å varsle om kritikkverdige forhold:

**Hva kan det varsles om?**
- Lovbrudd hos arbeidsgiver eller oppdragsgiver
- Brudd på interne retningslinjer
- Fare for liv eller helse
- Korrupsjon eller okonomisk kriminalitet
- Trakassering eller diskriminering

**Fremgangsmåte:**
- Varsle internt forst (leder, verneombud, tillitsvalgt)
- Dersom internt varsel ikke forer frem: varsle tilsynsmyndighet
- Offentlig varsling kan vare berettiget i saerlige tilfeller

**Vern mot gjengjeldelse:**
- Arbeidstaker som varsler i tråd med loven er vernet mot gjengjeldelse
- Gjengjeldelse omfatter oppsigelse, omplassering, trakassering og andre negative reaksjoner
- Arbeidsgiver har bevisbyrden for at det ikke foreligger gjengjeldelse`,
    },
    {
      id: 'sik-7-5-def-2',
      type: 'definition',
      title: 'Politiloven',
      content: `**Politiloven** regulerer politiets organisering, oppgaver og myndighetsutovelse. For vektere er politiloven relevant fordi den klargjor grensen mellom politiets oppgaver og private vaktselskapers virkeområde. Politiet har myndighet som vektere ikke har.`,
    },
    {
      id: 'sik-7-5-text-3',
      type: 'text',
      content: `### Politiloven og forholdet til vaktvirksomhet

Politiloven er relevant for vektere på flere måter:

**Politiets oppgaver som vektere ikke kan utfore:**
- Opprettholdelse av offentlig ro og orden med tvangsmidler
- Etterforskning av straffbare forhold
- Ransaking og beslag
- Pågripelse (utover borgernes pågripelsesrett)
- Bruk av våpen og tvangsmidler

**Samarbeid mellom politi og vaktselskaper:**
- Politiet kan pålegge vaktselskaper å tilpasse sin virksomhet
- Vektere har plikt til å folge politiets instrukser på stedet
- Politiet skal varsles ved alvorlige hendelser
- Vektere kan bistå politiet, men kun etter instruks

**Politiets myndighet over vaktselskaper:**
- Politiet gir autorisasjon til vaktvirksomhet
- Politiet forer tilsyn med vaktselskapene
- Politiet kan trekke tilbake autorisasjon
- Politiet godkjenner vekteruniformer

**Ordensvakter:**
- Ordensvakter på utesteder og arrangementer har et saerlig forhold til politiet
- De opererer ofte i naer kontakt med politiet
- De kan gis saerlige fullmakter gjennom avtale med politidistriktet
- De plikter å folge politiets anvisninger`,
    },
    {
      id: 'sik-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Grensene mellom politi og vekter',
      problem: 'Under en større konsert oppstår det bråk blant publikum. Både ordensvakter og politi er til stede. Hva er ansvarsfordelingen?',
      solution: `**Ordensvaktenes rolle:**
- Observere og rapportere
- Forsøke verbal kommunikasjon med de involverte
- Bortvise personer fra arrangementsområdet (privat grunn)
- Beskytte andre gjester ved å skille partene
- Varsle politi dersom situasjonen eskalerer

**Politiets rolle:**
- Ta over håndteringen ved alvorlige hendelser
- Bruke tvangsmidler dersom nodvendig (håndjern, fysisk makt)
- Pågripe og transportere personer til arrest
- Etterforske eventuelle lovbrudd
- Gi instrukser til ordensvaktene

**Viktig prinsipp:**
Når politiet er til stede og gir instrukser, skal ordensvaktene folge disse. Politiet har overordnet myndighet. Ordensvaktene skal ikke ta egne initiativ som er i strid med politiets instrukser.`,
    },
    {
      id: 'sik-7-5-def-3',
      type: 'definition',
      title: 'Sivilbeskyttelsesloven',
      content: `**Sivilbeskyttelsesloven** regulerer kommunenes og statens ansvar for å beskytte befolkningen ved krig, kriser og katastrofer. Loven pålegger kommunene å utarbeide beredskapsplaner og stiller krav til sivil beredskap, inkludert tilfluktsrom og varslingssystemer.`,
    },
    {
      id: 'sik-7-5-text-4',
      type: 'text',
      content: `### Sivilbeskyttelsesloven og beredskap

Sivilbeskyttelsesloven er relevant for sikkerhetsbransjen i et bredere perspektiv:

**Kommunal beredskapsplikt:**
- Kommunene skal ha en overordnet beredskapsplan
- Planen skal bygge på risiko- og sårbarhetsanalyse (ROS-analyse)
- Planen skal øves jevnlig
- Private aktorer, inkludert vaktselskaper, kan ha en rolle i kommunens beredskap

**Tilfluktsrom:**
- Visse bygninger skal ha tilfluktsrom
- Eier har plikt til å vedlikeholde tilfluktsrommene
- Vektere som jobber i bygninger med tilfluktsrom bor kjenne plasseringen

**Sivilforsvaret:**
- Sivilforsvaret er en statlig forsterkningsressurs
- De støtter nødetatene ved store hendelser
- Vektere kan bli innkalt til tjeneste i sivilforsvaret

**Egenberedskap:**
- Myndighetene oppfordrer alle til egenberedskap (72-timers beredskap)
- Vaktselskaper bor ha egen beredskapsplan for langvarige kriser
- Vektere kan spille en viktig rolle i krisesituasjoner

**Relevans for vektere:**
I store krisesituasjoner kan vektere bli satt til oppgaver utenfor normal tjeneste. Kunnskap om beredskapsplaner, evakueringsprosedyrer og samarbeid med nødetater er derfor viktig.`,
    },
    {
      id: 'sik-7-5-text-5',
      type: 'text',
      content: `### Lovene i sammenheng

Tabellen under viser hvordan de ulike lovene samvirker i sikkerhetsarbeidet:

| Lov | Hovedfokus | Relevans for vektere |
|-----|-----------|---------------------|
| Vaktvirksomhetsloven | Regulerer vaktbransjen | Autorisasjon, plikter, begrensninger |
| Straffeloven | Straffbare handlinger | Nodverge, nodrett, borgerarrest |
| Brann- og eksplosjonsvernloven | Brannforebygging | Tilsyn, rapportering, evakuering |
| Personopplysningsloven/GDPR | Personvern | Kameraovervåking, databehandling |
| Arbeidsmiljoloven | Arbeidsforhold | Arbeidstid, HMS, varsling |
| Politiloven | Politiets myndighet | Grenseoppgang politi/vekter |
| Sivilbeskyttelsesloven | Sivil beredskap | Beredskapsplaner, krisehåndtering |

**Samspillet i praksis:**
En vanlig arbeidssituasjon for en vekter kan begrore flere lover samtidig. For eksempel: En nattevakt på et kjopesenter (arbeidsmiljoloven: nattarbeid) oppdager en brann (brann- og eksplosjonsvernloven: rapportering) som er påsatt av en innbruddstyv (straffeloven: borgerarrest). Vekteren varsler politi (politiloven: samarbeid) og ivaretar kameraopptak som bevis (personopplysningsloven: utlevering til politi).`,
    },
    {
      id: 'sik-7-5-text-6',
      type: 'text',
      content: `### Andre relevante lover og forskrifter

I tillegg til hovedlovene finnes det en rekke andre regelverk som kan vare relevante:

**Alkoholloven:**
- Regulerer salg og skjenking av alkohol
- Relevant for ordensvakter på utesteder
- Skjenkestopp og alderskontroll

**Straffegjennomforingsloven:**
- Regulerer gjennomforing av straff
- Relevant for vektere som jobber i fengsler eller med fangetransport

**Tolloven:**
- Relevant for vektere som jobber på flyplasser og grenseoverganger
- Kontrolltiltak ved inn- og utførsel

**Helsepersonelloven:**
- Alle har plikt til å hjelpe syke og skadde (nødrett)
- Relevant for vektere som er forste på stedet ved ulykker

**Forskrifter under vaktvirksomhetsloven:**
- Forskrift om vaktvirksomhet utfyller loven med detaljerte krav
- Krav til opplaering, uniformering og dokumentasjon`,
    },
    {
      id: 'sik-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hvilken av folgende oppgaver kan en vekter IKKE utfore i henhold til lovverket?',
        options: [
          { id: 'a', text: 'Holde tilbake en person som er tatt på fersk gjerning i butikktyveri', isCorrect: false },
          { id: 'b', text: 'Foreta ransaking av en mistenkt persons lommer og vesker', isCorrect: true },
          { id: 'c', text: 'Rapportere brannfarlige forhold til oppdragsgiver', isCorrect: false },
          { id: 'd', text: 'Bortvise en person fra et privat område etter instrukser fra eier', isCorrect: false },
        ],
        solution: 'En vekter kan ikke foreta ransaking. Ransaking er et tvangsmiddel som er forbeholdt politiet etter straffeprosessloven. Vektere kan holde tilbake en person (borgernes pågripelsesrett), rapportere brannfarlige forhold (rapporteringsplikt) og bortvise fra privat grunn (eiers rett).',
      },
    },
    {
      id: 'sik-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-7-5-ex-2',
        number: '7.5.2',
        type: 'multiple-choice',
        task: 'Hva innebarer arbeidsmiljolovens krav om fullt forsvarlig arbeidsmiljo for vektere?',
        options: [
          { id: 'a', text: 'At vektere aldri skal utsettes for farlige situasjoner', isCorrect: false },
          { id: 'b', text: 'At vektere har rett til hooyere lonn enn andre yrkesgrupper', isCorrect: false },
          { id: 'c', text: 'At arbeidsgiver skal gjennomfore risikovurderinger og iverksette tiltak for å beskytte vekteres helse og sikkerhet', isCorrect: true },
          { id: 'd', text: 'At vektere kun kan jobbe dagtid', isCorrect: false },
        ],
        solution: 'Kravet om fullt forsvarlig arbeidsmiljo betyr at arbeidsgiver skal kartlegge risiko og iverksette tiltak for å beskytte arbeidstakernes helse og sikkerhet. For vektere innebarer dette blant annet risikovurdering av oppdrag, tilstrekkelig sikkerhetsutstyr, opplaering og oppfolging etter volds- og trusselhendelser.',
      },
    },
    {
      id: 'sik-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-7-5-ex-3',
        number: '7.5.3',
        type: 'classic',
        task: 'Forklar grensene mellom politiets og vekternes myndighet med utgangspunkt i politiloven. Gi eksempler på situasjoner der grensen kan vare utfordrende.',
        hints: ['Tenk på tvangsmidler, etterforskning og myndighetsutovelse'],
        solution: 'Politiet har myndighet til å bruke tvangsmidler (håndjern, våpen), foreta ransaking og beslag, pågripe og etterforske. Vektere har kun alminnelige borgerrettigheter. Grensen kan vare utfordrende i situasjoner som: 1) Når en vekter ser en person begå en forbrytelse men politiet ikke er til stede - vekteren kan bruke borgernes pågripelsesrett, men ikke etterforske. 2) Når en beruset person nekter å forlate et utested - vekteren kan bortvise fra privat grunn, men ikke bruke tvang som politiet kan. 3) Når vektere bistår politiet under store arrangementer - de må folge politiets instrukser uten å ta egne initiativ.',
      },
    },
    {
      id: 'sik-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Beskriv hva varslingsretten etter arbeidsmiljoloven innebarer for en vekter. Gi et eksempel på en situasjon der en vekter bor vurdere å varsle.',
        hints: ['Tenk på kritikkverdige forhold og vern mot gjengjeldelse'],
        solution: 'Varslingsretten gir vektere rett til å varsle om kritikkverdige forhold uten fare for gjengjeldelse. Eksempel: En vekter oppdager at vaktselskapet systematisk forer for mange timer i timelisten til kunden uten at vekteren faktisk har jobbet disse timene. Dette er bedrageri. Vekteren bor forst varsle internt til leder. Dersom dette ikke forer frem, kan vedkommende varsle til Arbeidstilsynet eller eventuelt politiet. Vekteren er beskyttet mot gjengjeldelse som oppsigelse eller omplassering.',
      },
    },
    {
      id: 'sik-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        task: 'Forklar hva sivilbeskyttelsesloven sier om kommunal beredskapsplikt, og drooft hvordan private vaktselskaper kan spille en rolle i kommunens beredskap.',
        solution: 'Sivilbeskyttelsesloven pålegger kommunene å utarbeide beredskapsplaner basert på risiko- og sårbarhetsanalyser. Planene skal øves jevnlig. Private vaktselskaper kan spille en rolle ved å: 1) Inngå i kommunens beredskapsplan for vakthold og sikring av kritisk infrastruktur. 2) Bistå med evakuering og trafikkdirigering ved store hendelser. 3) Sikre områder etter katastrofer (branntomter, skredområder). 4) Bidra med personell til informasjonssentraler. 5) Overvåke utsatte områder i ettertid. Samarbeidet bor formaliseres gjennom avtaler slik at roller og ansvar er klare for politiet ankommer.',
      },
    },
    {
      id: 'sik-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-7-5-ex-6',
        number: '7.5.6',
        type: 'classic',
        task: 'Gi et eksempel på en situasjon der en vekter må forholde seg til flere lover samtidig. Beskriv hvilke lover som er relevante og hvordan de samvirker.',
        hints: ['Tenk på en konkret hendelse og hvilke lovregler som aktualiseres'],
        solution: 'Eksempel: En nattevakt (arbeidsmiljoloven: nattarbeid, arbeidstidsbestemmelser) på et kjopesenter oppdager via kameraovervåking (personopplysningsloven: behandlingsgrunnlag, slettefrister) at noen bryter seg inn. Vekteren melder fra til politiet (politiloven: samarbeid, vaktvirksomhetsloven: rapporteringsplikt). Innbruddstyven setter fyr på avfall ved innbruddstedet (brann- og eksplosjonsvernloven: brannvarsling, evakuering). Vekteren konfronterer tyven som angriper med kniv - vekteren bruker nodverge for å beskytte seg (straffeloven: nodverge, forholdsmessighet). Politiet ankommer og overtar - vekteren folger politiets instrukser (politiloven). Etterpå skriver vekteren rapport med personopplysninger (GDPR: dataminimering, taushetsplikt).',
      },
    },
    {
      id: 'sik-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Arbeidsmiljoloven** regulerer arbeidsforhold, arbeidstid og HMS for vektere
- **Politiloven** klargjor grensen mellom politiets myndighet og vaktvirksomhet
- **Sivilbeskyttelsesloven** regulerer beredskapsarbeid der vaktselskaper kan bidra
- **Lovene samvirker** i praksis og en hendelse kan aktualisere flere lover samtidig
- **Varsling** er en rettighet som beskytter vektere som melder fra om kritikkverdige forhold

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| HMS | Helse, miljo og sikkerhet - systematisk arbeid pålagt av arbeidsmiljoloven |
| Varsling | Å melde fra om kritikkverdige forhold med lovfestet vern |
| Beredskapsplikt | Kommunenes plikt til å planlegge for kriser |
| Politimyndighet | Fullmakter forbeholdt politiet, som vektere ikke har |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SIKKERHETSFAG_DEL7_CHAPTERS = [
  CHAPTER_SIKKERHETSFAG_7_1,
  CHAPTER_SIKKERHETSFAG_7_2,
  CHAPTER_SIKKERHETSFAG_7_3,
  CHAPTER_SIKKERHETSFAG_7_4,
  CHAPTER_SIKKERHETSFAG_7_5,
];
