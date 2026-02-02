/**
 * Biologi 1 - Kapittel 6.3: Kropp, helse og livsstilssykdommer
 */
import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_6_3: TextbookChapter = {
  id: 'bio1-6-3',
  courseId: 'biologi-1',
  chapterNumber: '6.3',
  title: 'Kropp, helse og livsstilssykdommer',
  description:
    'Kroppens forsvar, livsstilssykdommer, rusmidler og forebyggende helse.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forklare begrepet homeostase og gi eksempler på negativ tilbakekobling i kroppen',
    'beskrive hvordan blodsukkerregulering fungerer med insulin og glukagon',
    'gjøre rede for risikofaktorer og biologiske mekanismer bak hjerte- og karsykdommer',
    'sammenligne diabetes type 1 og type 2 med hensyn til årsak, mekanisme og behandling',
    'forklare hvordan kreft oppstår gjennom flertrinnsprosesser med mutasjoner i onkogener og tumorsuppressorgener',
    'beskrive hvordan rusmidler påvirker nervesystemet og belønningssystemet i hjernen',
    'drøfte sammenhengen mellom livsstil og helse, herunder kosthold, fysisk aktivitet og psykisk helse',
    'gjøre rede for folkehelsearbeid i Norge, inkludert vaksineprogrammer og screeningprogrammer',
  ],
  content: [
    // -----------------------------------------------------------------------
    // 1. Introduksjon: Hva bestemmer helsen vår?
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-intro',
      type: 'text',
      title: 'Hva bestemmer helsen vår?',
      content: `Verdens helseorganisasjon (WHO) definerer helse som «en tilstand av fullstendig fysisk, psykisk og sosialt velvære, og ikke bare fravær av sykdom eller svakhet». Helse er altså mer enn det motsatte av sykdom. Men hva er det som avgjor om vi holder oss friske eller blir syke?

Helsen vår påvirkes av et samspill mellom **genetikk**, **miljø** og **livsstil**:

- **Genetikk:** Vi arver gener som kan gi oss disposisjon for bestemte sykdommer. Noen sykdommer er rent genetiske, men for de fleste livsstilssykdommer gir genene bare en okt eller redusert risiko.
- **Miljo:** Forurensning, stråling, kjemikalier og smittestoffer i omgivelsene våre kan påvirke helsen.
- **Livsstil:** Kosthold, fysisk aktivitet, sovn, rusbruk og stressmestring er faktorer vi selv i stor grad kan påvirke.

I dette kapittelet ser vi på hvordan kroppen opprettholder sin indre balanse, hva som skjer når denne balansen forstyrres, og hvordan livsstilen vår påvirker risikoen for de store folkesykdommene: hjerte- og karsykdommer, diabetes, kreft og psykiske lidelser.

**Livsstilssykdommer** er sykdommer der levevanene våre spiller en vesentlig rolle for utviklingen av sykdommen. Disse sykdommene er blant de vanligste dodsårsakene i den vestlige verden og representerer en av de storste folkehelseutfordringene i Norge i dag.`,
    },

    // -----------------------------------------------------------------------
    // 2. Definisjon: Homeostase
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-def-homeostase',
      type: 'definition',
      title: 'Homeostase',
      content:
        '**Homeostase** er kroppens evne til å opprettholde et stabilt indre miljo til tross for endringer i ytre forhold. Dette inkluderer regulering av kroppstemperatur, blodsukker, pH, vannbalanse, blodtrykk og mange andre parametere. Homeostase er avgjorende for at cellene skal fungere optimalt.',
    },

    // -----------------------------------------------------------------------
    // 3. Kroppens homeostase
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-homeostase',
      type: 'text',
      title: 'Kroppens homeostase',
      content: `Kroppen vår er en kompleks organisme der milliarder av celler jobber sammen. For at cellene skal fungere optimalt, må det indre miljoet holdes stabilt. Denne reguleringen kalles **homeostase**.

## Temperaturregulering (termoregulering)

Mennesket er **homoiotermt** (varmblodige) og opprettholder en kjernetemperatur rundt **37 grader C**. Hjernen overvåker kroppstemperaturen via **hypothalamus**, som fungerer som kroppens termostat.

**Når kroppen er for varm:**
- Blodkarene i huden utvider seg (vasodilatasjon), slik at mer varme kan avgis til omgivelsene
- Svettekjertlene produserer svette som kjoles ned via fordamping
- Stoffskiftet dempes

**Når kroppen er for kald:**
- Blodkarene i huden trekker seg sammen (vasokonstriksjon), slik at mindre varme tapes
- Musklene skjelver (frivillige kontraksjoner som produserer varme)
- Stoffskiftet okes, blant annet ved hjelp av skjoldbruskkjertelhormonet tyroksin

## Blodsukkerregulering

Konsentrasjonen av glukose i blodet (blodsukkeret) må holdes innenfor et smalt intervall, vanligvis mellom **4 og 7 mmol/L**. For hoyt eller for lavt blodsukker kan begge vare farlig.

Reguleringen styres av to hormoner fra **bukspyttkjertelen** (pankreas):

- **Insulin** (fra betaceller i de Langerhanske oyer): Frigjores når blodsukkeret stiger, for eksempel etter et måltid. Insulin gjor at celler tar opp glukose fra blodet, og at leveren lagrer glukose som glykogen. Blodsukkeret synker.
- **Glukagon** (fra alfaceller i de Langerhanske oyer): Frigjores når blodsukkeret er lavt, for eksempel mellom måltider. Glukagon stimulerer leveren til å bryte ned glykogen til glukose og frigjore det til blodet. Blodsukkeret stiger.

## pH-regulering

Blodets pH holdes normalt mellom **7,35 og 7,45**. Selv små avvik kan vare livstruende, fordi enzymer og proteiner er avhengig av riktig pH for å fungere.

Kroppen regulerer pH gjennom tre systemer:
1. **Buffersystemer i blodet** (bikarbonatbufferen er den viktigste)
2. **Lungene** (regulerer CO₂-nivået gjennom pustefrekvensen)
3. **Nyrene** (skiller ut overflodig syre eller base)

## Osmoregulering

Kroppen må opprettholde riktig vannbalanse og saltkonsentrasjon. Nyrene spiller hovedrollen i dette, styrt av hormonet **ADH** (antidiuretisk hormon) fra hypofysen:

- **Lite vann i kroppen:** Mer ADH frigjores, nyrene reabsorberer mer vann, og urinen blir konsentrert.
- **Mye vann i kroppen:** Mindre ADH frigjores, nyrene slipper gjennom mer vann, og urinen blir tynn.`,
    },

    // -----------------------------------------------------------------------
    // 4. Definisjon: Negativ tilbakekobling
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-def-negativ-tilbakekobling',
      type: 'definition',
      title: 'Negativ tilbakekobling',
      content:
        '**Negativ tilbakekobling** (negativ feedback) er et reguleringsmekanisme der resultatet av en prosess hemmer prosessen selv. Når en variabel (f.eks. blodsukker) avviker fra settpunktet, iverksettes tiltak som bringer variabelen tilbake mot normalen. Nesten all homeostase i kroppen styres av negativ tilbakekobling.',
    },

    // -----------------------------------------------------------------------
    // 5. Eksempel: Blodsukkerregulering som negativ tilbakekobling
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-ex-blodsukker',
      type: 'example',
      title: 'Blodsukkerregulering som negativ tilbakekobling',
      content: `Blodsukkerreguleringen er et klassisk eksempel på negativ tilbakekobling:

**Scenario 1: Etter et karbohydratrikt maltid**
1. Glukose tas opp fra tarmen til blodet, og blodsukkeret stiger.
2. Betacellene i bukspyttkjertelen registrerer det hoye blodsukkeret.
3. Betacellene frigjor **insulin**.
4. Insulin gjor at kroppens celler (spesielt muskel- og fettceller) tar opp glukose, og at leveren omdanner glukose til glykogen.
5. Blodsukkeret synker tilbake til normalt nivå.
6. Når blodsukkeret er normalt, reduseres insulinfrigjoring. Prosessen dempes.

**Scenario 2: Flere timer etter siste maltid**
1. Cellene forbruker glukose, og blodsukkeret synker.
2. Alfacellene i bukspyttkjertelen registrerer det lave blodsukkeret.
3. Alfacellene frigjor **glukagon**.
4. Glukagon stimulerer leveren til å bryte ned glykogen til glukose og frigjore det til blodet.
5. Blodsukkeret stiger tilbake til normalt nivå.
6. Når blodsukkeret er normalt, reduseres glukagonfrigjoring.

**Prinsippet:** Responsen (insulinfrigjoring eller glukagonfrigjoring) motvirker den opprinnelige endringen (hoyt eller lavt blodsukker). Systemet er selvregulerende.`,
    },

    // -----------------------------------------------------------------------
    // 6. Hjerte- og karsykdommer
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-hjertekarsykdommer',
      type: 'text',
      title: 'Hjerte- og karsykdommer',
      content: `Hjerte- og karsykdommer er den vanligste dodsårsaken i Norge og i verden. Disse sykdommene rammer hjertet og blodkarene og inkluderer hjerteinfarkt, hjerneslag, hjertesvikt og perifer karsykdom.

## Hjertet og blodkarene

Hjertet pumper blod gjennom kroppen via arterier (pulsårer), kapillarer (hårkarene) og vener (blodårer). Arteriene forer oksygenrikt blod fra hjertet ut til vevene, mens venene forer oksygenfattig blod tilbake.

Arterieveggene er elastiske og har et glatt indre lag (**endotel**) som sikrer fri blodstrom. Når dette endotelet skades, kan det fores til alvorlig sykdom.

## Aterosklerose (åreforkalkning)

**Aterosklerose** er en gradvis prosess der det bygger seg opp avleiringer (**plakk**) i arterieveggene:

1. **Endotelskade:** Hoyt blodtrykk, roykingstoffer eller andre faktorer skader endotelet (det indre cellelaget i arteriene).
2. **Fettavleiring:** LDL-kolesterol («det dårlige kolesterolet») trenger inn i den skadede arterieveggen og oksideres.
3. **Betennelsesreaksjon:** Hvite blodceller (makrofager) forsøker å rydde opp og spiser det oksiderte LDL-kolesterolet. De hovner opp og blir til **skumceller**.
4. **Plakkdannelse:** Skumceller, fett, kalk og bindevev bygger seg opp til et plakk i arterieveggen.
5. **Forsnevring:** Plakket gjor arterien trangere, og blodstrommen reduseres.
6. **Plakkruptur:** Dersom plakket sprekker, dannes en blodpropp (trombe) som kan blokkere arterien fullstendig.

## Risikofaktorer for hjerte- og karsykdommer

**Faktorer du ikke kan påvirke:**
- Alder (risikoen oker med alderen)
- Kjonn (menn har hoyere risiko, men risikoen for kvinner oker etter overgangsalderen)
- Arvelig disposisjon

**Faktorer du kan påvirke (livsstil):**
- **Roking:** Skader endotelet, oker LDL-kolesterol, fremmer blodpropper
- **Hoyt blodtrykk (hypertensjon):** Belaster arterieveggene og oker risikoen for plakkdannelse
- **Hoyt kolesterol:** Spesielt hoyt LDL-kolesterol og lavt HDL-kolesterol
- **Fysisk inaktivitet:** Manglende aktivitet svekker hjertet og forverrer andre risikofaktorer
- **Usunt kosthold:** Mye mettet fett, sukker og salt
- **Overvekt/fedme:** Oker risikoen for hoyt blodtrykk, hoyt kolesterol og diabetes
- **Diabetes:** Skadet blodsukkerregulering skader blodkarene over tid

## Hjerteinfarkt og hjerneslag

**Hjerteinfarkt** oppstår når en koronararterie (kransarterie) blokkeres av en blodpropp, vanligvis på grunn av plakkruptur. Hjertemuskelen som forsynes av den blokkerte arterien, far ikke oksygen og dor. Dette gir brystsmerter, ofte med utstråling til venstre arm, og kan vare livstruende.

**Hjerneslag** oppstår når en arterie i hjernen blokkeres (ischemisk hjerneslag, ca. 85 % av tilfellene) eller sprekker (hemoragisk hjerneslag). Hjerneceller som ikke far oksygen, dor raskt, noe som kan fores til lammelser, taleforstyrrelser og andre nevrologiske skader.`,
    },

    // -----------------------------------------------------------------------
    // 7. Definisjon: Aterosklerose
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-def-aterosklerose',
      type: 'definition',
      title: 'Aterosklerose',
      content:
        '**Aterosklerose** (åreforkalkning) er en kronisk betennelsessykdom i arteriene der det bygger seg opp plakk av fett, kolesterol, kalk og bindevev i arterieveggen. Over tid gjor plakket arterien trangere og stivere, noe som reduserer blodstrommen og oker risikoen for hjerteinfarkt og hjerneslag.',
    },

    // -----------------------------------------------------------------------
    // 8. Diabetes
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-diabetes',
      type: 'text',
      title: 'Diabetes',
      content: `**Diabetes mellitus** er en kronisk sykdom kjennetegnet av for hoyt blodsukker. Det finnes to hovedtyper:

## Diabetes type 1

- **Årsak:** En **autoimmun** sykdom der kroppens eget immunforsvar angriper og odelegger betacellene i bukspyttkjertelen.
- **Resultat:** Bukspyttkjertelen kan ikke lenger produsere insulin.
- **Debut:** Oppstår vanligvis i barne- eller ungdomsårene (kan oppstå i alle aldre).
- **Arvelighet:** Genetisk disposisjon spiller en rolle, men miljo og virusinfeksjoner kan utlose sykdommen.
- **Behandling:** Pasienten er helt avhengig av å tilforsel av **insulin** (injeksjoner eller insulinpumpe). Blodsukkeret må overvåkes nøye.
- **Andel:** Utgjor ca. 5-10 % av alle diabetestilfeller.

## Diabetes type 2

- **Årsak:** Kroppens celler utvikler **insulinresistens** -- de reagerer dårligere på insulin. Bukspyttkjertelen produserer ofte insulin, men det er ikke nok til å kompensere for resistensen. Over tid kan også betacellene bli utslitt.
- **Resultat:** Glukose tas ikke opp effektivt av cellene, og blodsukkeret forblir hoyt.
- **Debut:** Utvikler seg vanligvis gradvis hos voksne, men ses i okende grad hos yngre personer.
- **Risikofaktorer:**
  - Overvekt/fedme (spesielt bukfedme)
  - Fysisk inaktivitet
  - Usunt kosthold (mye raffinert sukker og mettet fett)
  - Genetisk disposisjon
  - Alder
- **Behandling:** Livsstilsendringer (kosthold og mosjon) er forstevalget. Mange trenger også blodsukkersenkende medisiner. Noen utvikler etter hvert behov for insulin.
- **Andel:** Utgjor ca. 90-95 % av alle diabetestilfeller.

## Komplikasjoner ved diabetes

Vedvarende hoyt blodsukker skader blodkarene over tid og kan fore til:
- Hjerte- og karsykdommer (aterosklerose)
- Nyreskade (diabetisk nefropati)
- Oyeskade (diabetisk retinopati, kan fore til blindhet)
- Nerveskade (diabetisk nevropati, spesielt i foter)
- Dårlig sårheling og risiko for amputasjoner

God blodsukkerkontroll reduserer risikoen for disse komplikasjonene betydelig.`,
    },

    // -----------------------------------------------------------------------
    // 9. Eksempel: Sammenligning av diabetes type 1 og type 2
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-ex-diabetes-sammenligning',
      type: 'example',
      title: 'Sammenligning av diabetes type 1 og type 2',
      content: `| Egenskap | Type 1 | Type 2 |
|---|---|---|
| **Årsak** | Autoimmun odeleggelse av betaceller | Insulinresistens i kroppens celler |
| **Insulinproduksjon** | Ingen eller svart lite | Normal eller okt (tidlig), redusert (sent) |
| **Typisk debutalder** | Barn/ungdom | Voksen (men i okende grad yngre) |
| **Kroppstype** | Ofte normalvektig | Ofte overvektig (bukfedme) |
| **Arvelighet** | Noe genetisk disposisjon | Sterk genetisk komponent |
| **Livsstilsfaktorer** | Liten betydning for utvikling | Stor betydning (kosthold, aktivitet, vekt) |
| **Behandling** | Insulin (alltid) | Livsstilsendringer, tabletter, eventuelt insulin |
| **Forebyggbar?** | Nei (per i dag) | Ja, i stor grad gjennom livsstil |
| **Andel av tilfeller** | 5-10 % | 90-95 % |

**Felles for begge:** Hoyt blodsukker, risiko for langtidskomplikasjoner, behov for jevnlig overvåking.

**Viktig:** Diabetes type 1 er ikke selv forskyldt og kan ikke forebygges. Diabetes type 2 kan i mange tilfeller forebygges eller forsinkes gjennom sunne levevaner.`,
    },

    // -----------------------------------------------------------------------
    // 10. Kreftbiologi
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-kreft',
      type: 'text',
      title: 'Kreftbiologi',
      content: `**Kreft** er en samlebetegnelse på sykdommer der celler deler seg ukontrollert og kan invadere annet vev. For å forstå kreft, må vi forst forstå hvordan normal celledeling reguleres.

## Normal cellesyklusregulering

Celledelingen reguleres av et komplekst system av proteiner som fungerer som gasspedaler og bremsepedaler:

- **Proto-onkogener** fungerer som gasspedaler -- de stimulerer celledeling og cellevekst. De er normale og nodvendige for at kroppen skal vokse og reparere vev.
- **Tumorsuppressorgener** fungerer som bremser -- de bremser celledeling, reparerer DNA-skader eller sotter i gang programmert celledod (**apoptose**) dersom skaden er for stor.

Det viktigste tumorsuppressorproteinet er **p53**, som kalles «genomets vokter». p53 stopper cellesyklusen dersom DNA-skader oppdages og setter i gang reparasjon. Dersom skaden ikke kan repareres, sotter p53 i gang apoptose slik at den skadede cellen fjernes.

Et annet viktig tumorsuppressorprotein er **Rb** (retinoblastomprotein), som kontrollerer overgangen til celledelingsfasen.

## Fra normal celle til kreftcelle -- en flertrinnsprosess

Kreft oppstår ikke etter en enkelt mutasjon. Det kreves vanligvis **flere mutasjoner** i ulike gener over tid:

1. **Forste mutasjon (f.eks. i et proto-onkogen):** Et proto-onkogen muterer til et **onkogen** -- en permanent aktivert gasspedal. Cellen far et signal om å dele seg raskere.
2. **Senere mutasjoner (f.eks. i tumorsuppressorgener):** Bremsene svikter. Cellen mister evnen til å stoppe deling ved DNA-skader.
3. **Ytterligere mutasjoner:** Cellen utvikler evne til å unngå apoptose, stimulere blodkardannelse (**angiogenese**) og unngå immunforsvaret.
4. **Akkumulering:** Etter flere mutasjoner har cellen blitt en kreftcelle som deler seg ukontrollert.

Denne flertrinnsprosessen forklarer hvorfor kreft ofte tar mange år å utvikle seg, og hvorfor risikoen oker med alderen.

## Godartet vs. ondartet svulst

- **Godartet (benign) svulst:** Cellene deler seg for raskt, men de **invaderer ikke** vev rundt seg. De er innkapslet og sprer seg ikke. Kan likevel vare farlig dersom de trykker på viktige strukturer.
- **Ondartet (malign) svulst / kreft:** Cellene invaderer omkringliggende vev og kan **metastasere** -- spre seg til andre deler av kroppen via blod eller lymfe.

## Metastase

**Metastase** er prosessen der kreftceller lossner fra den opprinnelige svulsten, transporteres gjennom blod- eller lymfesystemet, og etablerer nye svulster (dattersvulster) på andre steder i kroppen. Metastasering er det som gjor kreft spesielt farlig og vanskelig å behandle.

## Risikofaktorer for kreft

**Fysiske faktorer:**
- **UV-stråling** fra sol og solarier: Skader DNA i hudceller og oker risikoen for hudkreft (inkludert malignt melanom)
- **Ioniserende stråling** (rontgen, radioaktiv stråling): Skader DNA direkte

**Kjemiske faktorer:**
- **Tobakksroyk:** Inneholder over 70 kjente kreftfremkallende stoffer (karsinogener). Hovedårsak til lungekreft og viktig risikofaktor for mange andre kreftformer.
- **Alkohol:** Oker risikoen for kreft i munnhule, svelg, spisetror, lever, bryst og tykktarm.
- **Industrielle kjemikalier:** Asbest (lungekreft), benzen (leukemi), formaldehyd med flere.

**Biologiske faktorer:**
- **Virus:** Humant papillomavirus (HPV) kan fore til livmorhalskreft. Hepatitt B og C kan fore til leverkreft. Epstein-Barr-virus er knyttet til noen former for lymfekreft.
- **Bakterier:** *Helicobacter pylori* oker risikoen for magekreft.

**Livsstilsfaktorer:**
- Overvekt og fedme
- Fysisk inaktivitet
- Usunt kosthold (lite frukt og gronnsaker, mye bearbeidet kjott)

## Forebygging og screening

**Forebygging:**
- Ikke royk
- Begrens alkoholinntak
- Bruk solkrem og unngå overdreven soleksponering
- Spis sunt og var fysisk aktiv
- Vaksiner: HPV-vaksine (tilbys alle 12-åringer i Norge gjennom barnevaksinasjonsprogrammet)

**Screening:**
- Mammografi (brystkreft) -- tilbys kvinner 50-69 år
- Tarmkreftscreening -- tilbys voksne fra 55 år
- Livmorhalskreftscreening (celleprovefra livmorhalsen) -- tilbys kvinner 25-69 år`,
    },

    // -----------------------------------------------------------------------
    // 11. Definisjoner: Onkogen og metastase
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-def-onkogen',
      type: 'definition',
      title: 'Onkogen',
      content:
        'Et **onkogen** er et mutert proto-onkogen som er permanent aktivert og stimulerer cellen til ukontrollert deling. Mens proto-onkogener er normale gener som fremmer cellevekst når det er behov for det, er onkogener «fastlåste gasspedaler» som driver cellen mot kreftutvikling.',
    },
    {
      id: 'bio1-6-3-def-metastase',
      type: 'definition',
      title: 'Metastase',
      content:
        '**Metastase** er spredning av kreftceller fra den opprinnelige svulsten til andre steder i kroppen gjennom blod- eller lymfesystemet. Metastasering er det som skiller ondartede (maligne) svulster fra godartede (benigne) svulster, og det er hovedårsaken til at kreft er vanskelig å behandle og kan vare dodelig.',
    },

    // -----------------------------------------------------------------------
    // 12. Eksempel: Hvordan royking forer til lungekreft
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-ex-royking-lungekreft',
      type: 'example',
      title: 'Hvordan royking forer til lungekreft -- en flertrinnsprosess',
      content: `Lungekreft er den kreftformen som tar flest liv i verden, og omtrent 85 % av tilfellene skyldes tobakksroyking. Prosessen illustrerer flertrinnsutviklingen av kreft:

**Trinn 1: DNA-skade**
Tobakksroyk inneholder over 70 kreftfremkallende stoffer (karsinogener), blant annet benso[a]pyren og nitrosaminer. Disse stoffene binder seg til DNA i lungecellene og forårsaker mutasjoner.

**Trinn 2: Forste mutasjoner**
Etter år med royking akkumulerer lungecellene mutasjoner. Noen av disse kan ramme proto-onkogener (f.eks. *KRAS*-genet) og gjore dem til onkogener -- permanente signaler om celledeling.

**Trinn 3: Tap av tumorsuppressorer**
Senere mutasjoner kan ramme tumorsuppressorgener som *TP53* (genet for p53) eller *RB*. Når bremsene svikter, mister cellen evnen til å stoppe sin egen deling eller starte apoptose.

**Trinn 4: Ukontrollert vekst**
Cellen har nå flere mutasjoner: aktive onkogener og inaktive tumorsuppressorgener. Den begynner å dele seg ukontrollert og danner en svulst.

**Trinn 5: Invasjon og metastase**
Ytterligere mutasjoner gjor at kreftcellene kan bryte gjennom basalmembranen, trenge inn i blod- og lymfekar, og metastasere til andre organer (hjerne, lever, knokler).

**Tidsperspektiv:** Denne prosessen tar vanligvis 20-30 år. Det er derfor lungekreft oftest diagnostiseres hos personer over 60 år som har roykt i mange år.

**Konklusjon:** Royking gir ikke kreft over natten. Det er en gradvis prosess med mange mutasjoner som akkumuleres over tid. Jo lenger man royker, jo hoyere er risikoen.`,
    },

    // -----------------------------------------------------------------------
    // 13. Kosthold og helse
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-kosthold',
      type: 'text',
      title: 'Kosthold og helse',
      content: `Et balansert kosthold er en av de viktigste faktorene for god helse. Kroppen trenger riktige mengder av både **makronaringsstoffer** og **mikronaringsstoffer**.

## Makronaringsstoffer

**Karbohydrater** er kroppens viktigste energikilde. De brytes ned til glukose som brukes i celleåndingen. Vi skiller mellom:
- **Raske karbohydrater** (sukker, hvitt mel): Tas raskt opp og gir brå blodsukkersvingninger
- **Langsomme karbohydrater** (fullkorn, gronnsaker, belgfrukter): Tas saktere opp og gir jevnere blodsukker
- **Fiber** er ufordoyelige karbohydrater som er viktige for tarmfunksjonen og metthetsfølelse

**Proteiner** er byggesteinene i kroppen. De brukes til å bygge muskler, enzymer, hormoner, antistoffer og mye mer. Proteiner består av aminosyrer, og kroppen trenger 20 ulike aminosyrer -- 9 av disse er essensielle (må tilforsel gjennom kosten).

**Fett** er en konsentrert energikilde og viktig for cellemembraner, hormonproduksjon og opptak av fettloselige vitaminer (A, D, E, K). Vi skiller mellom:
- **Umettet fett** (fisk, norter, olivenolje): Gunstig for helsen
- **Mettet fett** (smor, ost, fett kjott): Kan oke LDL-kolesterol ved hoyt inntak
- **Transfett** (herdet vegetabilsk fett): Uheldig for helsen, oker LDL og senker HDL

## Mikronaringsstoffer

**Vitaminer** er organiske stoffer kroppen trenger i små mengder. De er nodvendige for en rekke kjemiske reaksjoner. Eksempler:
- Vitamin D: Viktig for kalsiumopptak og benhelse
- Vitamin C: Antioksidant, viktig for immunforsvar og bindevev
- B-vitaminer: Nodvendige for energiomsetning

**Mineraler** er uorganiske stoffer som er nodvendige for kroppen. Eksempler:
- Jern: Nodvendig for hemoglobin (oksygentransport i blod)
- Kalsium: Bygger bein og tenner
- Jod: Nodvendig for produksjon av skjoldbruskkjertelhormoner

## Energibalanse

**Energibalanse** handler om forholdet mellom energiinntaket (det vi spiser) og energiforbruket (det vi forbrenner):

- **Positiv energibalanse** (spiser mer enn vi forbrenner): Vektokning
- **Negativ energibalanse** (forbrenner mer enn vi spiser): Vektnedgang
- **Noytral energibalanse:** Stabil vekt

Vedvarende positiv energibalanse forer til overvekt og fedme, som er risikofaktorer for diabetes type 2, hjerte- og karsykdommer og flere kreftformer.

## Spiseforstyrrelser

Spiseforstyrrelser er alvorlige psykiske lidelser som påvirker forholdet til mat og kropp. De vanligste er:
- **Anorexia nervosa:** Svart begrenset matinntak og frykt for å legge på seg
- **Bulimia nervosa:** Gjentatte episoder med overspising etterfulgt av oppkast eller overtrening
- **Overspisingslidelse:** Gjentatte episoder med ukontrollert overspising

Spiseforstyrrelser kan ha alvorlige fysiske konsekvenser, blant annet naeringsmangel, hjertearytmier, beintap og hormonforstyrrelser. De krever profesjonell behandling.`,
    },

    // -----------------------------------------------------------------------
    // 14. Fysisk aktivitet og helse
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-fysisk-aktivitet',
      type: 'text',
      title: 'Fysisk aktivitet og helse',
      content: `Regelmessig fysisk aktivitet er en av de mest effektive måtene å forebygge livsstilssykdommer på. Effektene er mange og godt dokumentert.

## Fysiologiske effekter av trening

**Kardiovaskulare effekter:**
- Hjertet blir sterkere og pumper mer blod per slag (okt slagvolum)
- Hvilepulsen synker
- Blodtrykket senkes
- HDL-kolesterolet (det «gode» kolesterolet) oker
- Risikoen for aterosklerose reduseres

**Muskler og skjelett:**
- Muskelmassen oker
- Beintettheten opprettholdes (forebygger osteoporose)
- Leddene holdes smidige

**Stoffskifte:**
- Insulinfolsomheten oker (cellene reagerer bedre på insulin)
- Blodsukkerkontroll forbedres
- Energiforbruket oker

**Psykisk helse:**
- Endorfiner frigjores og gir folelse av velvare
- Stress og angst reduseres
- Sovnkvaliteten forbedres
- Risikoen for depresjon reduseres

## Grunnleggende treningsfysiologi

Under fysisk aktivitet oker energibehovet i musklene. Kroppen responderer med:
- Okt hjertefrekvens og pusterfrekvens for å levere mer oksygen
- Okt blodstrom til arbeidende muskler
- Mobilisering av glykogenlagre og fettlagre som energikilder
- Ved hoy intensitet: Melkesyregjaring i musklene (anaerob energiproduksjon)

**Aerob trening** (gåing, jogging, sykling) forbrenner primært fett og karbohydrater med oksygen. Forbedrer utholdenhet og hjerte- og lungekapasitet.

**Anaerob trening** (styrketrening, sprint) bygger muskelmasse og styrke. Bruker mer glykogen og produserer laktat.

## Anbefalinger

Helsedirektoratet anbefaler at voksne er fysisk aktive i minst **150 minutter med moderat intensitet** (rask gange) eller **75 minutter med hoy intensitet** (loping) per uke, fordelt på flere dager. I tillegg anbefales styrketrening minst **2 ganger per uke**.

Barn og unge (6-17 år) anbefales minst **60 minutter fysisk aktivitet daglig**.`,
    },

    // -----------------------------------------------------------------------
    // 15. Rusmidler
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-rusmidler',
      type: 'text',
      title: 'Rusmidler og deres virkning på kroppen',
      content: `**Rusmidler** er stoffer som påvirker sentralnervesystemet og endrer stemningsleje, bevissthet, oppfatningsevne eller atferd. Rusmidler virker ved å forstyrre nervesystemets normale signaloverforsel, spesielt systemet for **nevrotransmittere**.

## Alkohol

Alkohol (etanol) er det mest brukte rusmiddelet i Norge.

**Virkningsmekanisme:** Alkohol forsterker virkningen av den hemmende nevrotransmitteren **GABA** og hemmer den stimulerende nevrotransmitteren **glutamat**. Resultatet er generell demping av hjerneaktiviteten.

**Akutte effekter:** Avslappethet, nedsatt hemninger, dårligere koordinasjon, nedsatt domsevne, sloret tale. Ved hoye doser: bevisstlostap, pustehemming og dod.

**Kroniske effekter ved langvarig hoyt forbruk:**
- **Leverskade:** Fettlever, alkoholhepatitt, skrumplever (cirrhose)
- **Hjerneskade:** Tap av hjerneceller, demens
- **Kreft:** Okt risiko for kreft i munnhule, svelg, spisetror, lever, bryst og tykktarm
- **Hjerte- og karsykdommer:** Kardiomyopati (svekket hjertemuskel)
- **Avhengighet:** Alkoholisme

## Tobakk

Tobakksroyk inneholder over 7000 kjemiske stoffer, hvorav over 70 er kjent kreftfremkallende.

**Nikotin:** Det avhengighetsskapende stoffet. Stimulerer frigjoring av **dopamin** i belonningssystemet. Gir raskt en folelse av velvare og avslapning, etterfulgt av abstinens som motiverer til ny bruk.

**Tjarestoffer:** Kreftfremkallende stoffer som avleires i lungene.

**Karbonmonoksid (CO):** Binder seg til hemoglobin og reduserer blodets evne til å transportere oksygen.

**Konsekvenser av royking:**
- **Lungekreft:** Hovedårsaken (85 % av tilfellene)
- **KOLS** (kronisk obstruktiv lungesykdom): Emfysem og kronisk bronkitt. Lungene odelegges gradvis og uopprettelig.
- **Hjerte- og karsykdommer:** Okt risiko for hjerteinfarkt og hjerneslag
- **Andre kreftformer:** Munnhule, svelg, spisetror, blare, nyre med mer

## Cannabis

Cannabis inneholder det psykoaktive stoffet **THC** (tetrahydrocannabinol) som binder til cannabinoidreseptorer i hjernen.

**Akutte effekter:** Eufori, endret tidsoppfatning, endret sanseopplevelse, okt appetitt, redusert konsentrasjon og korttidshukommelse.

**Risikoer:**
- Okt risiko for psykiske lidelser (spesielt psykose) ved bruk i ungdomsårene, da hjernen fortsatt er under utvikling
- Nedsatt kognitiv funksjon ved regelmessig bruk
- Avhengighet (ca. 9 % av brukere utvikler avhengighet)
- Royking av cannabis gir mange av de samme lungeskadene som tobakksroyking

## Hvordan rusmidler påvirker nevrotransmittere

De fleste rusmidler påvirker hjernens **belonningssystem** -- et nettverk av nevroner som bruker nevrotransmitteren **dopamin**. Dette systemet har utviklet seg for å forsterke atferd som er gunstig for overlevelse (mat, sosial kontakt, formering).

Rusmidler kaprer dette systemet:
- **Alkohol og opiater:** Oker dopaminfrigjoring indirekte
- **Nikotin:** Stimulerer dopaminfrigjoring direkte via nikotinreseptorer
- **Kokain og amfetamin:** Blokkerer gjenopptaket av dopamin, slik at dopamin forblir lenger i synapsen
- **Cannabis:** Påvirker cannabinoidsystemet som modulerer dopaminfrigjoring

## Avhengighetsmekanismer

Ved gjentatt bruk av rusmidler skjer det tilpasninger i hjernen:

1. **Toleranseutvikling:** Hjernen tilpasser seg de hoye dopaminnivåene ved å redusere antall dopaminreseptorer eller mengden dopamin som frigjores. Man trenger stadig storre doser for å oppnå samme effekt.
2. **Abstinens:** Når rusmiddelet ikke er tilstede, er dopaminnivåene lavere enn normalt. Dette gir ubehagelige symptomer (angst, uro, irritabilitet, fysisk ubehag) som motiverer til ny bruk.
3. **Tvangsmessig bruk:** Over tid endres hjernens kretslopfor beslutningstaking. Rusmiddelbruken blir mer automatisk og vanskeligere å kontrollere.`,
    },

    // -----------------------------------------------------------------------
    // 16. Definisjon: Livsstilssykdom og rusmiddel
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-def-livsstilssykdom',
      type: 'definition',
      title: 'Livsstilssykdom',
      content:
        'En **livsstilssykdom** er en sykdom der levevanene (kosthold, fysisk aktivitet, rusbruk, stressnivå) spiller en vesentlig rolle i utviklingen. Eksempler inkluderer hjerte- og karsykdommer, diabetes type 2, mange kreftformer, KOLS og fedme. Livsstilssykdommer kan i stor grad forebygges gjennom sunne levevaner.',
    },
    {
      id: 'bio1-6-3-def-rusmiddel',
      type: 'definition',
      title: 'Rusmiddel',
      content:
        'Et **rusmiddel** er et stoff som påvirker sentralnervesystemet og endrer stemningsleje, bevissthet, oppfatningsevne eller atferd. Rusmidler inkluderer alkohol, tobakk/nikotin, cannabis, amfetamin, kokain, opiater og mange andre stoffer. De fleste rusmidler påvirker hjernens belonningssystem og kan fore til avhengighet.',
    },

    // -----------------------------------------------------------------------
    // 17. Psykisk helse
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-psykisk-helse',
      type: 'text',
      title: 'Psykisk helse og stress',
      content: `Psykisk helse er en viktig del av den totale helsen. Stress, sovn og mental helse har store konsekvenser for kroppen og kan påvirke risikoen for livsstilssykdommer.

## Stressresponsen

Når vi opplever en trussel eller utfordring, aktiveres **stressresponsen** -- også kalt «kamp-eller-flukt-responsen» (fight-or-flight):

1. **Hypothalamus** i hjernen aktiverer det sympatiske nervesystemet og HPA-aksen (hypothalamus-hypofyse-binyre-aksen).
2. **Binyremargen** frigjor **adrenalin** og **noradrenalin**, som gir umiddelbare effekter: okt hjertefrekvens, okt blodtrykk, utvidet luftveier, okt blodsukker, okt blodtilforsel til muskler.
3. **Binyrebarken** frigjor **kortisol**, som opprettholder stressresponsen over lengre tid. Kortisol oker blodsukkeret, demper immunforsvaret og oker nedbrytningen av proteiner.

## Kronisk stress

Stressresponsen er utviklet for å håndtere akutte, kortvarige trusler. Problemer oppstår når stresset blir **kronisk** -- vedvarende over uker, måneder eller år:

- **Okt risiko for hjerte- og karsykdommer:** Vedvarende hoyt blodtrykk og betennelse
- **Svekket immunforsvar:** Kronisk forhoyede kortisolnivåer demper immunforsvaret
- **Fordoyelsesproblemer:** Nedsatt blodtilforsel til fordoyelsessystemet
- **Psykiske plager:** Angst, depresjon, utbrenthet
- **Somnproblemer:** Vanskelig å slappe av og sove
- **Vektokning:** Kortisol oker appetitten og fremmer fettlagring rundt magen

## Sovnens betydning

Sovn er avgjorende for helsen. Under sovn skjer viktige prosesser:
- Immunforsvaret styrkes
- Minner konsolideres og laering prosesseres
- Vev repareres og veksthormoner frigjores
- Avfallsstoffer fjernes fra hjernen (det glymfatiske systemet)

**Somnmangel** er forbundet med:
- Okt risiko for fedme (påvirker sulthormonene leptin og ghrelin)
- Okt risiko for diabetes type 2 (redusert insulinfolsomhet)
- Svekket immunforsvar
- Redusert kognitiv funksjon og konsentrasjon
- Okt risiko for psykiske lidelser

Ungdom trenger **8-10 timer sovn** per natt, voksne trenger **7-9 timer**.

## Psykiske lidelser

Psykiske lidelser er vanlige og inkluderer depresjon, angstlidelser, spiseforstyrrelser, ADHD og mange andre. De skyldes et samspill mellom genetikk, hjernekjemi, livserfaringer og sosiale faktorer.

Det er viktig å vite at psykiske lidelser **ikke er selvforskyldt** og at det finnes god behandling. Å soke hjelp er et tegn på styrke, ikke svakhet.`,
    },

    // -----------------------------------------------------------------------
    // 18. Folkehelse i Norge
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-folkehelse',
      type: 'text',
      title: 'Folkehelse i Norge',
      content: `**Folkehelse** handler om helsetilstanden i en befolkning og arbeidet med å fremme helse og forebygge sykdom på samfunnsnivå.

## Folkehelseinstituttet (FHI)

**Folkehelseinstituttet** er et statlig institutt under Helse- og omsorgsdepartementet. FHI har ansvar for:
- Overvåking av smittsomme og ikke-smittsomme sykdommer
- Forskning på folkehelse
- Rådgivning til myndigheter og befolkningen
- Beredskap ved epidemier og pandemier
- Vaksineprogrammer

## Helsefremming og sykdomsforebygging

Folkehelsearbeid handler om to hovedstrategier:

**Helsefremming:** Tiltak som styrker befolkningens helse og velvare:
- Tilrettelegging for fysisk aktivitet (gang- og sykkelveier, friluftsområder)
- Sunne matvalg i skole og barnehage
- Forebygging av utenforskap og ensomhet
- Helseopplysning

**Sykdomsforebygging:** Tiltak som reduserer risikoen for spesifikke sykdommer:
- Vaksinasjon
- Screeningprogrammer
- Tobakksforebygging og alkoholpolitikk
- Regulering av transfett og salt i matvarer

## Vaksineprogrammer

Norge har et **barnevaksinasjonsprogram** som tilbyr gratis vaksiner mot en rekke alvorlige sykdommer. Programmet dekker blant annet:
- Difteri, stivkrampe, kikhoste, polio
- Meslinger, kusma, rode hunder (MMR-vaksinen)
- Humant papillomavirus (HPV) -- for å forebygge livmorhalskreft
- Pneumokokksykdom og meningokokksykdom

Vaksinasjon beskytter ikke bare den som vaksineres, men også sårbare personer som ikke kan vaksineres, gjennom **flokkimmunitet**.

## Screeningprogrammer

Screening er systematisk undersokelse av friske personer for å oppdage sykdom i et tidlig stadium, for symptomer oppstår. Norske screeningprogrammer inkluderer:
- **Mammografiprogrammet:** Roentgenundersokelse av bryst for kvinner 50-69 år (hvert 2. år) for tidlig oppdagelse av brystkreft
- **Tarmkreftscreening:** Tilbys voksne fra 55 år for tidlig oppdagelse av tarmkreft
- **Livmorhalsscreening:** Celleprove/HPV-test for kvinner 25-69 år for å oppdage celleforandringer som kan utvikle seg til kreft
- **Nyfodtscreening:** Alle nyfodte testes for en rekke sjeldne, men alvorlige sykdommer

Tidlig oppdagelse gjennom screening gir bedre prognose og storre sjanse for vellykket behandling.`,
    },

    // -----------------------------------------------------------------------
    // 19. Definisjon: Folkehelse
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-def-folkehelse',
      type: 'definition',
      title: 'Folkehelse',
      content:
        '**Folkehelse** er befolkningens helsetilstand og fordelingen av helse i en befolkning. Folkehelsearbeid omfatter alle tiltak rettet mot å fremme helse, forebygge sykdom og utjevne sosiale helseforskjeller i samfunnet. I Norge er dette et offentlig ansvar forankret i folkehelseloven.',
    },

    // -----------------------------------------------------------------------
    // 20. Advarsel: Avhengighet
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-warning-avhengighet',
      type: 'warning',
      title: 'Avhengighet er en sykdom',
      content: `Avhengighet av rusmidler er ikke et tegn på svak vilje eller dårlig moral. Det er en **kronisk hjernesykdom** der gjentatt eksponering for rusmidler endrer hjernens struktur og funksjon, spesielt i belonningssystemet og områdene for beslutningstaking.

Disse endringene gjor at personen:
- Opplever sterkt sug (craving) etter rusmiddelet
- Mister kontroll over bruken
- Fortsetter å bruke til tross for negative konsekvenser

Avhengighet kan behandles, men som med andre kroniske sykdommer kan det vare tilbakefall. Tidlig intervensjon gir best prognose. Dersom du eller noen du kjenner sliter med rusmiddelbruk, ta kontakt med helsesykepleier, fastlege eller rustelefonen (tlf. 08588).`,
    },

    // -----------------------------------------------------------------------
    // 21. Oppsummerende notat
    // -----------------------------------------------------------------------
    {
      id: 'bio1-6-3-note-oppsummering',
      type: 'note',
      title: 'Oppsummering av kapittelet',
      content: `De viktigste punktene å huske fra dette kapittelet:

- **Homeostase** er kroppens evne til å opprettholde stabilt indre miljo gjennom negativ tilbakekobling (eksempel: blodsukkerregulering med insulin og glukagon).
- **Hjerte- og karsykdommer** skyldes ofte aterosklerose, der plakk bygger seg opp i arteriene. Viktige risikofaktorer er royking, hoyt blodtrykk, hoyt kolesterol og inaktivitet.
- **Diabetes type 1** er autoimmun (betaceller odelegges), mens **type 2** skyldes insulinresistens og er sterkt knyttet til livsstil.
- **Kreft** oppstår gjennom en flertrinnsprosess med mutasjoner i onkogener og tumorsuppressorgener (spesielt p53). Risikofaktorer inkluderer royking, UV-stråling, alkohol og virus (HPV).
- **Rusmidler** påvirker nervesystemet og belonningssystemet (dopamin). Gjentatt bruk kan fore til toleranse og avhengighet.
- **Fysisk aktivitet** forebygger hjerte- og karsykdommer, diabetes og psykiske lidelser.
- **Psykisk helse** påvirkes av stress (kortisol), sovn og sosiale faktorer.
- **Folkehelsearbeid** i Norge inkluderer vaksineprogrammer, screeningprogrammer og helsefremming.`,
    },
  ],

  // =========================================================================
  // OPPGAVER
  // =========================================================================
  exercises: [
    // ---- Oppgave 1: Flervalg -- lett ----
    {
      id: 'bio1-6-3-ex1',
      number: '6.3.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er homeostase?',
      options: [
        {
          id: 'a',
          text: 'Kroppens evne til å oke temperaturen ved sykdom',
          isCorrect: false,
          feedback:
            'Feber er en del av immunforsvaret, men homeostase handler om noe bredere enn bare temperaturokning.',
        },
        {
          id: 'b',
          text: 'Kroppens evne til å opprettholde et stabilt indre miljo',
          isCorrect: true,
          feedback:
            'Riktig! Homeostase omfatter regulering av temperatur, blodsukker, pH, vannbalanse og mange andre parametere.',
        },
        {
          id: 'c',
          text: 'Prosessen der celler deler seg ukontrollert',
          isCorrect: false,
          feedback:
            'Ukontrollert celledeling er en beskrivelse av kreft, ikke homeostase.',
        },
        {
          id: 'd',
          text: 'Nedbrytning av naringsstoffer i fordoyelsen',
          isCorrect: false,
          feedback:
            'Fordoyelsen er en viktig prosess, men homeostase handler om å opprettholde stabilt indre miljo generelt.',
        },
      ],
      hints: ['Tenk på hva kroppen gjor for å holde det indre miljoet stabilt.'],
      topic: 'homeostase',
    },

    // ---- Oppgave 2: Klassisk -- lett ----
    {
      id: 'bio1-6-3-ex2',
      number: '6.3.2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar hvordan insulin og glukagon samarbeider for å regulere blodsukkeret. Bruk begrepet negativ tilbakekobling i svaret ditt.',
      solution: `**Blodsukkerregulering med insulin og glukagon:**

Blodsukkeret reguleres av to hormoner fra bukspyttkjertelen som virker motsatt av hverandre:

**Når blodsukkeret er hoyt (etter et maltid):**
1. Betacellene i bukspyttkjertelen registrerer det hoye blodsukkeret.
2. De frigjor **insulin**.
3. Insulin gjor at kroppens celler tar opp glukose fra blodet, og leveren lagrer glukose som glykogen.
4. Blodsukkeret synker tilbake til normalt nivå.
5. Insulinfrigjoring reduseres.

**Når blodsukkeret er lavt (mellom maltider):**
1. Alfacellene registrerer det lave blodsukkeret.
2. De frigjor **glukagon**.
3. Glukagon stimulerer leveren til å bryte ned glykogen til glukose.
4. Blodsukkeret stiger tilbake til normalt nivå.
5. Glukagonfrigjoring reduseres.

**Negativ tilbakekobling:** Responsen (insulin senker blodsukkeret, glukagon oker det) motvirker den opprinnelige forandringen. Når blodsukkeret er tilbake til normalt nivå, stoppes hormonproduksjonen. Systemet korrigerer seg selv automatisk.`,
      hints: [
        'Beskriv hva som skjer både når blodsukkeret er hoyt og når det er lavt.',
        'Negativ tilbakekobling betyr at responsen motvirker den opprinnelige endringen.',
      ],
      topic: 'blodsukkerregulering',
    },

    // ---- Oppgave 3: Flervalg -- lett ----
    {
      id: 'bio1-6-3-ex3',
      number: '6.3.3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av folgende er den viktigste forskjellen mellom diabetes type 1 og diabetes type 2?',
      options: [
        {
          id: 'a',
          text: 'Type 1 gir hoyt blodsukker, type 2 gir lavt blodsukker',
          isCorrect: false,
          feedback:
            'Begge typene gir hoyt blodsukker. Forskjellen ligger i årsaken.',
        },
        {
          id: 'b',
          text: 'Type 1 skyldes autoimmun odeleggelse av betaceller, type 2 skyldes insulinresistens',
          isCorrect: true,
          feedback:
            'Riktig! Ved type 1 odelegges insulinproduserende celler, ved type 2 reagerer cellene dårligere på insulin.',
        },
        {
          id: 'c',
          text: 'Type 1 rammer bare barn, type 2 rammer bare eldre',
          isCorrect: false,
          feedback:
            'Type 1 oppstår oftest i unge år, men kan oppstå i alle aldre. Type 2 sees i okende grad hos yngre personer.',
        },
        {
          id: 'd',
          text: 'Type 1 er en livsstilssykdom, type 2 er genetisk',
          isCorrect: false,
          feedback:
            'Det er omvendt: Type 1 er autoimmun (ikke livsstilsrelatert), type 2 er sterkt knyttet til livsstil.',
        },
      ],
      hints: [
        'Tenk på hva som feiler med insulinsystemet i hver type.',
      ],
      topic: 'diabetes',
    },

    // ---- Oppgave 4: Klassisk -- medium ----
    {
      id: 'bio1-6-3-ex4',
      number: '6.3.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv flertrinnsprosessen som forer fra en normal celle til en kreftcelle. Forklar rollen til proto-onkogener, onkogener og tumorsuppressorgener (inkludert p53).',
      solution: `**Fra normal celle til kreftcelle -- en flertrinnsprosess:**

**Normale kontrollmekanismer:**
- **Proto-onkogener** stimulerer celledeling når det er behov for det (som en gasspedal).
- **Tumorsuppressorgener** (som *TP53* og *RB*) stopper celledeling, reparerer DNA-skader eller setter i gang apoptose (programmert celledod) ved alvorlig skade (som bremsepedaler).

**Trinn 1: Aktivering av onkogener**
En mutasjon i et proto-onkogen gjor det til et **onkogen** -- en permanent aktiv gasspedal. Cellen far konstant signal om å dele seg, selv når det ikke er behov.

**Trinn 2: Tap av tumorsuppressorgener**
Senere mutasjoner rammer tumorsuppressorgener. Spesielt viktig er **p53** («genomets vokter»), som normalt stopper cellesyklusen ved DNA-skader og setter i gang reparasjon eller apoptose. Når p53 er mutert, kan cellen fortsette å dele seg med skadet DNA.

**Trinn 3: Unnvikelse av apoptose**
Ytterligere mutasjoner gjor at cellen unngår programmert celledod, selv når den har mange genetiske feil.

**Trinn 4: Angiogenese og invasjon**
Cellen utvikler evne til å stimulere dannelse av nye blodkar (angiogenese) for å forsyne svulsten med naering, og evne til å invadere omkringliggende vev.

**Trinn 5: Metastasering**
Til slutt kan kreftceller losnne fra svulsten, entre blod- eller lymfekar, og etablere dattersvulster (metastaser) andre steder i kroppen.

**Viktig:** Det kreves vanligvis 5-10 mutasjoner over mange år for å omdanne en normal celle til en kreftcelle. Hver mutasjon gir cellen en ny fordel (raskere deling, motstand mot apoptose, evne til invasjon osv.). Dette forklarer hvorfor kreft er vanligere hos eldre.`,
      hints: [
        'Bruk analogien med gasspedal og bremsepedal.',
        'Forklar hva p53 normalt gjor, og hva som skjer når det er mutert.',
        'Husk at kreft krever flere mutasjoner, ikke bare en.',
      ],
      topic: 'kreftbiologi',
    },

    // ---- Oppgave 5: Flervalg -- medium ----
    {
      id: 'bio1-6-3-ex5',
      number: '6.3.5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den viktigste grunnen til at aterosklerose kan fore til hjerteinfarkt?',
      options: [
        {
          id: 'a',
          text: 'Plakk i arteriene gjor at hjertet slår raskere',
          isCorrect: false,
          feedback:
            'Raskere hjerteslag er ikke den direkte årsaken til hjerteinfarkt.',
        },
        {
          id: 'b',
          text: 'Plakk i koronararterie kan sprekke og utlose en blodpropp som blokkerer blodstrommen til hjertemuskelen',
          isCorrect: true,
          feedback:
            'Riktig! Plakkruptur etterfulgt av trombedannelse er den vanligste årsaken til akutt hjerteinfarkt.',
        },
        {
          id: 'c',
          text: 'Plakk gjor at blodet inneholder for mye oksygen',
          isCorrect: false,
          feedback:
            'Aterosklerose påvirker ikke oksygeninnholdet i blodet direkte.',
        },
        {
          id: 'd',
          text: 'Plakk gjor at venene rundt hjertet lukker seg',
          isCorrect: false,
          feedback:
            'Aterosklerose rammer arterier, ikke vener. Og det er koronararterienes blokkering som gir hjerteinfarkt.',
        },
      ],
      hints: [
        'Tenk på hva som skjer når et plakk i en koronararterie sprekker.',
      ],
      topic: 'hjerte- og karsykdommer',
    },

    // ---- Oppgave 6: Klassisk -- medium ----
    {
      id: 'bio1-6-3-ex6',
      number: '6.3.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan nikotin og alkohol påvirker hjernen på ulike måter. Inkluder informasjon om nevrotransmittere og belonningssystemet.',
      solution: `**Nikotins virkning på hjernen:**

Nikotin binder seg til **nikotinreseptorer** (en type acetylkolinreseptor) i hjernen. Når nikotin aktiverer disse reseptorene, frigjores **dopamin** i belonningssystemet (nucleus accumbens). Dopaminfrigjoring gir en folelse av nytelse og avslapning.

Nikotin virker raskt -- det når hjernen i loper av 10-20 sekunder etter inhalasjon. Denne raske virkningen forsterker den avhengighetsskapende effekten. Etter hvert utvikler hjernen flere nikotinreseptorer (oppregulering), og man trenger mer nikotin for å oppnå samme effekt (toleranse). Uten nikotin foles dopaminnivåene unormalt lave, noe som gir abstinens.

---

**Alkohols virkning på hjernen:**

Alkohol virker på **flere nevrotransmittersystemer** samtidig:
- **GABA:** Alkohol forsterker virkningen av GABA, som er hjernens viktigste hemmende nevrotransmitter. Dette gir avslappethet, redusert angst og nedsatt hemming.
- **Glutamat:** Alkohol hemmer virkningen av glutamat, som er hjernens viktigste stimulerende nevrotransmitter. Dette bidrar til den dempende effekten.
- **Dopamin:** Alkohol oker dopaminfrigjoring i belonningssystemet, noe som gir en folelse av velbehag.

Alkohol gir altså en generell demping av hjerneaktiviteten, kombinert med aktivering av belonningssystemet.

---

**Felles:** Begge stoffene aktiverer hjernens belonningssystem via dopamin, noe som gir behagelige folelser og kan fore til avhengighet. Forskjellen er at nikotin primært er et stimulerende stoff som aktiverer spesifikke reseptorer, mens alkohol er et dempende stoff som påvirker flere systemer bredt.`,
      hints: [
        'Tenk på hvilke nevrotransmittere hvert stoff påvirker.',
        'Hva er dopamins rolle i belonningssystemet?',
        'Hvordan bidrar dette til avhengighet?',
      ],
      topic: 'rusmidler',
    },

    // ---- Oppgave 7: Klassisk -- medium ----
    {
      id: 'bio1-6-3-ex7',
      number: '6.3.7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv stressresponsen (kamp-eller-flukt) og forklar hvorfor kronisk stress er skadelig for helsen.',
      solution: `**Stressresponsen (kamp-eller-flukt-responsen):**

Når kroppen oppfatter en trussel, aktiveres stressresponsen:

1. **Hypothalamus** i hjernen sender signaler via det sympatiske nervesystemet og HPA-aksen.
2. **Binyremargen** frigjor adrenalin og noradrenalin. Disse gir umiddelbare effekter:
   - Okt hjertefrekvens og blodtrykk
   - Utvidelse av luftveier (letter pusting)
   - Okt blodsukker (frigjoring av energi)
   - Okt blodtilforsel til muskler
   - Redusert blodtilforsel til fordoyelsessystemet
   - Utvidede pupiller
3. **Binyrebarken** frigjor kortisol, som opprettholder stressresponsen over lengre tid.

Denne responsen er gunstig i akutte situasjoner -- den gjor kroppen klar til å kjaempe eller flykte.

---

**Hvorfor kronisk stress er skadelig:**

Problemet oppstår når stressresponsen er aktivert over lang tid:

**Hjerte- og karsykdommer:** Vedvarende hoyt blodtrykk belaster arterieveggene og fremmer aterosklerose. Kronisk betennelse i karveggene oker risikoen for hjerteinfarkt og hjerneslag.

**Svekket immunforsvar:** Kortisol demper immunforsvaret. Kronisk forhoyede kortisolnivåer gjor kroppen mer sårbar for infeksjoner og sykdom.

**Metabolske forstyrrelser:** Kronisk hoyt kortisol oker blodsukkeret (insulinresistens), oker appetitten (spesielt for fett og sukker) og fremmer fettlagring rundt magen (visceralt fett). Dette oker risikoen for diabetes type 2 og fedme.

**Fordoyelsesproblemer:** Redusert blodtilforsel til fordoyelsessystemet kan gi magesår, irritabel tarm og andre problemer.

**Psykiske konsekvenser:** Kronisk stress er en stor risikofaktor for depresjon, angst og utbrenthet. Langvarig eksponering for kortisol kan også skade hippocampus (viktig for hukommelse).

**Somnproblemer:** Forhoyede stresshormoner gjor det vanskelig å sovne og opprettholde dyp sovn, noe som forverrer de andre problemene.

**Konklusjon:** Stressresponsen er livreddende i akutte situasjoner, men odeleggende når den er kronisk aktivert. Stressmestring gjennom fysisk aktivitet, avslapningsteknikker og sosial stotte er viktig for helsen.`,
      hints: [
        'Beskriv forst den akutte stressresponsen (hormoner, effekter).',
        'Forklar deretter hva som skjer når dette pågår over lang tid.',
        'Tenk på effekter på hjerte, immunforsvar, stoffskifte og psykisk helse.',
      ],
      topic: 'psykisk helse',
    },

    // ---- Oppgave 8: Flervalg -- medium ----
    {
      id: 'bio1-6-3-ex8',
      number: '6.3.8',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket protein kalles «genomets vokter» og spiller en noklerolle i å forhindre kreft?',
      options: [
        {
          id: 'a',
          text: 'Insulin',
          isCorrect: false,
          feedback:
            'Insulin er et hormon som regulerer blodsukker, ikke en tumorsuppressor.',
        },
        {
          id: 'b',
          text: 'Hemoglobin',
          isCorrect: false,
          feedback:
            'Hemoglobin er et oksygentransporterende protein i rode blodceller.',
        },
        {
          id: 'c',
          text: 'p53',
          isCorrect: true,
          feedback:
            'Riktig! p53 overvåker DNA-skader, stopper cellesyklusen for reparasjon, og setter i gang apoptose dersom skaden er for stor. Mutasjoner i TP53-genet finnes i over halvparten av alle krefttyper.',
        },
        {
          id: 'd',
          text: 'Dopamin',
          isCorrect: false,
          feedback:
            'Dopamin er en nevrotransmitter i hjernen, ikke et tumorsuppressorprotein.',
        },
      ],
      hints: [
        'Proteinet stopper celledeling ved DNA-skader og kan starte apoptose.',
      ],
      topic: 'kreftbiologi',
    },

    // ---- Oppgave 9: Klassisk -- vanskelig ----
    {
      id: 'bio1-6-3-ex9',
      number: '6.3.9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En person royker daglig i 30 år, er overvektig, spiser mye mettet fett og er fysisk inaktiv. Analyser denne personens samlede risiko for å utvikle (a) hjerte- og karsykdommer, (b) diabetes type 2 og (c) lungekreft. For hver sykdom, forklar de biologiske mekanismene som ligger bak den okte risikoen.',
      solution: `**a) Hjerte- og karsykdommer (svart hoy risiko):**

Denne personen har fire store risikofaktorer som alle bidrar til aterosklerose:

**Royking:** Kjemikalier i tobakksroyk skader endotelet (det indre cellelaget) i arteriene, noe som starter ateroskleroseprosessen. Royking oker også LDL-kolesterol (det «dårlige» kolesterolet), fremmer oksidert LDL som trigger betennelsesreaksjon, og gjor blodet mer tilboyelig til å danne blodpropper. Karbonmonoksid i royken reduserer oksygentransporten, noe som belaster hjertet ytterligere.

**Mye mettet fett i kosten:** Hoyt inntak av mettet fett oker LDL-kolesterolet i blodet. Overskudd av LDL avleires i skadede arterievegger, oksideres og danner grunnlaget for plakk.

**Overvekt:** Overvekt, spesielt bukfedme, er forbundet med hoyt blodtrykk, hoyt kolesterol, insulinresistens og kronisk lavgradig betennelse -- alle risikofaktorer for aterosklerose.

**Fysisk inaktivitet:** Manglende aktivitet bidrar til svakere hjerte, lavere HDL-kolesterol, hoyere blodtrykk og dårligere blodsukkerkontroll.

**Samlet mekanisme:** Alle faktorene fremmer aterosklerose, der plakk i koronararteriene kan sprekke og utlose blodpropp som forer til hjerteinfarkt, eller i hjernens arterier forer til hjerneslag.

---

**b) Diabetes type 2 (hoy risiko):**

**Overvekt:** Overflodig fettvevsend, spesielt visceralt fett (bukfedme), frigjor betennelsesstoffer og frie fettsyrer som gjor cellene mindre folsomme for insulin (insulinresistens). Bukspyttkjertelen kompenserer ved å produsere mer insulin, men over tid kan betacellene bli utslitt.

**Fysisk inaktivitet:** Fysisk aktivitet oker insulinfolsomheten ved at muskelcellene tar opp glukose mer effektivt. Uten aktivitet opprettholdes insulinresistensen.

**Usunt kosthold:** Mye mettet fett og raffinert sukker oker insulinresistens og belaster blodsukkersystemet.

**Royking:** Royking er en uavhengig risikofaktor for diabetes type 2 -- den oker insulinresistens og påvirker betacellefunksjonen negativt.

**Samlet mekanisme:** Insulinresistens gjor at cellene ikke tar opp glukose effektivt. Blodsukkeret forblir hoyt. Over tid kan betacellene svikte, og full diabetes type 2 utvikler seg.

---

**c) Lungekreft (hoy risiko):**

**Royking i 30 år:** Tobakksroyk inneholder over 70 karsinogener som forårsaker direkte DNA-skade i lungecellene. Over 30 år akkumuleres mutasjoner:
- Mutasjoner i proto-onkogener (f.eks. KRAS) gjor dem til onkogener
- Mutasjoner i tumorsuppressorgener (TP53, RB) fjerner bremsene
- Denne flertrinnsprosessen forer til ukontrollert celledeling

**Overvekt, inaktivitet og kosthold:** Disse faktorene oker den generelle kreftrisikoen gjennom kronisk betennelse, hoye insulinnivåer (insulin kan fungere som vekstfaktor), og oksidativt stress.

**Samlet mekanisme:** 30 års royking gir langvarig eksponering for karsinogener som skader DNA i lungecellene. Med sviktende tumorsuppressormekanismer (p53) og aktiverte onkogener utvikles ukontrollert cellevekst som kan fore til lungekreft med eventuell metastasering.

---

**Konklusjon:** Denne personens livsstil gir dramatisk okt risiko for alle tre sykdommene. Det viktigste enkelttiltaket ville vare roykeslutt, fulgt av okt fysisk aktivitet, vektreduksjon og kostholdsendringer.`,
      hints: [
        'Gå systematisk gjennom hver risikofaktor for hver sykdom.',
        'Forklar de biologiske mekanismene, ikke bare list opp risikofaktorene.',
        'Tenk på aterosklerose, insulinresistens og flertrinnsprosessen for kreft.',
      ],
      topic: 'livsstilssykdommer',
    },

    // ---- Oppgave 10: Klassisk -- medium ----
    {
      id: 'bio1-6-3-ex10',
      number: '6.3.10',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva screening er og gi to eksempler på screeningprogrammer i Norge. Hvorfor er tidlig oppdagelse viktig for prognosen ved kreft?',
      solution: `**Hva er screening?**

Screening er systematisk undersokelse av tilsynelatende friske personer for å oppdage sykdom (eller forstadier til sykdom) for symptomer oppstår. Målet er å finne sykdommen i et tidlig stadium der behandlingen er mer effektiv.

---

**Eksempel 1: Mammografiprogrammet (brystkreftscreening)**

Alle kvinner mellom 50 og 69 år i Norge inviteres til roentgenundersokelse av brystene (mammografi) hvert andre år. Mammografi kan oppdage brystkreft for svulsten er stor nok til å kjennes som en kul. Tidlig oppdagelse betyr at svulsten er mindre, har sjeldnere metastasert, og kan behandles med mindre inngripende kirurgi og mildere tilleggsbehandling.

**Eksempel 2: Livmorhalskreftscreening (celleprove/HPV-test)**

Kvinner mellom 25 og 69 år tilbys regelmessig celleprove fra livmorhalsen eller HPV-test. Screeningen kan oppdage celleforandringer (forstadier til kreft) forårsaket av HPV-virus for de utvikler seg til invasiv kreft. Disse forstadiene kan behandles enkelt og effektivt.

---

**Hvorfor tidlig oppdagelse er viktig ved kreft:**

1. **Storrrelse og stadium:** Kreft som oppdages tidlig, er vanligvis mindre og begrenset til et område. Behandling (kirurgi, stråling) er enklere og mer effektiv.

2. **Metastasering:** Det viktigste: Tidlig oppdagelse oker sjansen for at kreften ikke har metastasert (spredt seg til andre organer). Når kreft har metastasert, er den langt vanskeligere å behandle og prognosen forverres betydelig.

3. **Behandlingsmuligheter:** Tidlig kreft kan ofte behandles med kirurgi alene, mens avansert kreft kan kreve kombinasjoner av kirurgi, cellegift, stråling og immunterapi.

4. **Overlevelse:** 5-årsoverlevelsen er dramatisk hoyere for kreft oppdaget i tidlig stadium sammenlignet med sent stadium. For eksempel: Brystkreft oppdaget i stadium I har over 95 % 5-årsoverlevelse, mens stadium IV har under 30 %.`,
      hints: [
        'Screening gjores for symptomene oppstår.',
        'Tenk på forholdet mellom tumorstorrelse, metastasering og behandlingsmuligheter.',
      ],
      topic: 'folkehelse',
    },

    // ---- Oppgave 11: Flervalg -- vanskelig ----
    {
      id: 'bio1-6-3-ex11',
      number: '6.3.11',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor oker risikoen for avhengighet ved gjentatt rusmiddelbruk?',
      options: [
        {
          id: 'a',
          text: 'Fordi rusmiddelet odelegger alle dopaminreseptorene permanent',
          isCorrect: false,
          feedback:
            'Dopaminreseptorene odelegges ikke permanent, men antallet nedreguleres (reduseres) som en tilpasning.',
        },
        {
          id: 'b',
          text: 'Fordi hjernen tilpasser seg ved å nedregulere dopaminreseptorer, slik at man trenger storre doser for samme effekt, og opplever ubehag uten rusmiddelet',
          isCorrect: true,
          feedback:
            'Riktig! Toleranseutvikling (nedregulering av dopaminreseptorer) og abstinens (lavere dopaminnivåer enn normalt uten rusmiddelet) driver avhengigheten.',
        },
        {
          id: 'c',
          text: 'Fordi rusmiddelet lagres permanent i hjernevevet',
          isCorrect: false,
          feedback:
            'Rusmidler brytes ned og utskilles av kroppen. Det er hjernens tilpasninger, ikke lagring av stoffet, som driver avhengighet.',
        },
        {
          id: 'd',
          text: 'Fordi rusmiddelet gjor at hjernen produserer for mye serotonin',
          isCorrect: false,
          feedback:
            'Hovedmekanismen for avhengighet er knyttet til dopaminsystemet, selv om noen rusmidler også påvirker serotonin.',
        },
      ],
      hints: [
        'Tenk på toleranseutvikling og hva som skjer med dopaminsystemet.',
        'Hva opplever personen når rusmiddelet ikke er tilstede?',
      ],
      topic: 'avhengighet',
    },

    // ---- Oppgave 12: Klassisk -- vanskelig ----
    {
      id: 'bio1-6-3-ex12',
      number: '6.3.12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drooft sammenhengen mellom genetikk, miljo og livsstil for utviklingen av diabetes type 2. Hvorfor er det viktig å skille mellom risikofaktorer du kan påvirke og risikofaktorer du ikke kan påvirke?',
      solution: `**Sammenhengen mellom genetikk, miljo og livsstil ved diabetes type 2:**

**Genetikk:**
Diabetes type 2 har en sterk genetisk komponent. Dersom en av foreldrene har type 2-diabetes, er risikoen for å utvikle sykdommen omtrent 40 %. Dersom begge foreldrene har det, oker risikoen til ca. 70 %. Det er identifisert mange gener som påvirker insulinfolsomhet, betacellefunksjon og fettlagring. Men gener alene forårsaker sjelden sykdommen -- de gir en **disposisjon** (okt sårbarhet).

**Miljo:**
Miljofaktorer inkluderer tilgjengelighet av billig, kaloririk mat, stillesittende arbeid, urbanisering, sosioøokonomiske forhold og kulturelle faktorer. Mennesker i lavere sosioøokonomiske grupper har hoyere risiko, delvis på grunn av tilgang til sunn mat og treningsmuligheter.

**Livsstil:**
Livsstilsfaktorer er de viktigste modifiserbare risikofaktorene:
- **Overvekt/fedme:** Spesielt bukfedme forårsaker insulinresistens gjennom kronisk betennelse og frigjoring av frie fettsyrer fra visceralt fettvev.
- **Fysisk inaktivitet:** Reduserer insulinfolsomheten i muskelcellene.
- **Usunt kosthold:** Mye raffinert sukker gir hyppige blodsukkertopper, mye mettet fett forverrer insulinresistens.

**Samspillet:** En person med sterk genetisk disposisjon som lever sunt (normalvektig, aktiv, sunn kost) kan unngå å utvikle diabetes. Omvendt kan en person uten genetisk disposisjon utvikle sykdommen ved ekstrem overvekt og inaktivitet. Gener lader pistolen, livsstil trekker avtrekkeren.

---

**Hvorfor skille mellom modifiserbare og ikke-modifiserbare risikofaktorer?**

**Praktisk betydning:**
- Faktorer vi **ikke kan påvirke** (genetikk, alder, kjonn) hjelper oss å identifisere hvem som bor vare ekstra oppmerksom og bor screenes hyppigere.
- Faktorer vi **kan påvirke** (kosthold, aktivitet, vekt, royking) gir konkrete mål for forebygging.

**For individet:** En person som vet at diabetes type 2 er vanlig i familien, kan ta bevisste valg for å redusere risikoen: holde normalvekt, vare fysisk aktiv, spise sunt. Selv om man ikke kan endre genene, kan man kompensere gjennom livsstil.

**For folkehelsen:** Folkehelsetiltak bor rettes mot modifiserbare risikofaktorer som har storst effekt: tilrettelegging for fysisk aktivitet, tilgang til sunn mat, opplysning om kosthold, forebygging av overvekt hos barn og unge.

**Etisk perspektiv:** Å skille mellom modifiserbare og ikke-modifiserbare faktorer er viktig for å unngå å legge skyld på individet. Gener og miljo kan gjore det vanskeligere for noen å opprettholde sunn vekt, og dette bor tas hensyn til i helsepolitikken.`,
      hints: [
        'Diskuter bidraget fra hvert av de tre områdene.',
        'Bruk gjerne uttrykket «genene lader pistolen, livsstil trekker avtrekkeren».',
        'Tenk på konsekvensene for både individet og folkehelsen.',
      ],
      topic: 'diabetes',
    },

    // ---- Oppgave 13: Klassisk -- lett ----
    {
      id: 'bio1-6-3-ex13',
      number: '6.3.13',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn tre helsefordeler ved regelmessig fysisk aktivitet og forklar kort den biologiske mekanismen bak hver fordel.',
      solution: `**Tre helsefordeler ved regelmessig fysisk aktivitet:**

**1. Redusert risiko for hjerte- og karsykdommer**

*Biologisk mekanisme:* Regelmessig aerob trening styrker hjertemuskelen slik at hjertet pumper mer blod per slag (okt slagvolum). Dette senker hvilepulsen og blodtrykket. Trening oker også HDL-kolesterolet (det «gode» kolesterolet) som transporterer overflodig kolesterol bort fra arterieveggene. I tillegg bedres blodkarrenes elastisitet. Alt dette reduserer risikoen for aterosklerose, hjerteinfarkt og hjerneslag.

**2. Bedre blodsukkerkontroll (forebygging av diabetes type 2)**

*Biologisk mekanisme:* Fysisk aktivitet oker insulinfolsomheten -- muskelcellene produserer flere glukosetransportorer (GLUT4) og tar opp glukose mer effektivt, både under og etter treningen. Dette betyr at kroppen trenger mindre insulin for å holde blodsukkeret normalt. Effekten varer i timer etter treningsokten. Over tid motvirker dette insulinresistens, som er grunnmekanismen i diabetes type 2.

**3. Bedre psykisk helse**

*Biologisk mekanisme:* Under fysisk aktivitet frigjores **endorfiner** (kroppens naturlige «lykkehormoner») som gir en folelse av velvare. Trening reduserer også nivåene av stresshormonene adrenalin og kortisol. Regelmessig aktivitet oker nivåene av nevrotransmittere som **serotonin** og **noradrenalin**, som er viktige for stemningsleje og er ofte lave ved depresjon. I tillegg fremmer trening bedre sovn, som er viktig for psykisk helse.`,
      hints: [
        'Velg tre ulike helsefordeler (f.eks. hjerte, blodsukker, psykisk helse).',
        'Forklar hva som skjer i kroppen, ikke bare at det er bra.',
      ],
      topic: 'fysisk aktivitet',
    },
  ],
};
