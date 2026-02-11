/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Entreprenørskap og bedriftsutvikling 2 (VG3) - DEL 4
 * Seksjon 4: Bærekraftig entreprenørskap (Kapittel 4.1–4.5)
 *
 * LK20 kompetansemål:
 * - drøfte korleis berekraft kan integrerast i forretningsmodellar og strategiar
 * - analysere samanhengen mellom bedrifta sitt samfunnsansvar og langsiktig verdiskaping
 * - vurdere korleis FNs berekraftsmål kan koplast til forretningsutvikling
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1: Bærekraft som forretningsstrategi
// ============================================================================

export const CHAPTER_ENTREBED_2_4_1: TextbookChapter = {
  id: 'entrebed-2-4-1',
  courseId: 'entrebed-2',
  chapterNumber: '4.1',
  title: 'Bærekraft som forretningsstrategi',
  description: 'Trippel bunnlinje, ESG-kriterier og hvordan bærekraft kan integreres som en kjernestrategi i bedriftens forretningsmodell.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte korleis berekraft kan integrerast i forretningsmodellar og strategiar',
    'analysere samanhengen mellom bedrifta sitt samfunnsansvar og langsiktig verdiskaping',
  ],
  content: [
    {
      id: 'eb2-4-1-intro',
      type: 'text',
      content: `## Bærekraft som forretningsstrategi

Bærekraft har gått fra å være et valgfritt tillegg til å bli en strategisk nødvendighet for moderne bedrifter. Investorer, kunder, ansatte og myndigheter forventer i stadig større grad at bedrifter tar ansvar for sin påvirkning på miljø og samfunn. Men bærekraft handler ikke bare om å «gjøre det rette» — det handler også om å sikre bedriftens langsiktige konkurransekraft.

Bedrifter som integrerer bærekraft i kjernestrategien, opplever ofte lavere kostnader (gjennom ressurseffektivitet), sterkere merkevare, lettere rekruttering og bedre tilgang på kapital. De som ignorerer bærekraft, risikerer derimot omdømmetap, regulatoriske sanksjoner og tap av markedsandeler.

**I dette kapittelet skal du lære:**
- Hva trippel bunnlinje (TBL) betyr og hvordan den fungerer i praksis
- Hva ESG-kriterier er og hvorfor de er viktige for investorer
- Hvordan bedrifter kan gjøre bærekraft til et konkurransefortrinn
- Forskjellen mellom reaktiv og proaktiv bærekraftsstrategi`,
    },
    {
      id: 'eb2-4-1-def-1',
      type: 'definition',
      title: 'Trippel bunnlinje (TBL)',
      content: `**Trippel bunnlinje** (Triple Bottom Line) er et rammeverk utviklet av John Elkington i 1994. Det utvider det tradisjonelle fokuset på økonomisk resultat til å inkludere tre dimensjoner:

**1. Profit (Økonomi)**
Bedriftens økonomiske resultater — omsetning, lønnsomhet, vekst og verdiskaping for eierne. Uten økonomisk bærekraft kan ikke bedriften overleve.

**2. People (Mennesker)**
Bedriftens sosiale påvirkning — hvordan den behandler ansatte, leverandører, lokalsamfunn og samfunnet for øvrig. Inkluderer arbeidsmiljø, mangfold, menneskerettigheter og rettferdig handel.

**3. Planet (Miljø)**
Bedriftens miljøpåvirkning — klimagassutslipp, ressursbruk, avfallshåndtering, biologisk mangfold og forurensning. Målet er å minimere negativ miljøpåvirkning og ideelt sett bidra positivt.

**Kjerneprinsippet:** En virkelig bærekraftig bedrift skaper verdi langs alle tre dimensjonene — ikke bare den økonomiske. De tre dimensjonene er gjensidig avhengige: en bedrift som ødelegger miljøet eller utnytter arbeidere, vil på sikt også tape økonomisk.`,
    },
    {
      id: 'eb2-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Trippel bunnlinje i praksis — Stormberg',
      problem: 'Hvordan illustrerer den norske friluftsklesprodusenten Stormberg trippel bunnlinje-prinsippet?',
      solution: `**Profit (Økonomi):**
- Stormberg har hatt sterk vekst og er en av Norges mest populære friluftsmerker
- Direkte salg til forbruker (egne butikker og nettbutikk) gir gode marginer
- Bærekraftsprofilen tiltrekker lojale kunder som er villige til å betale for kvalitet

**People (Mennesker):**
- Stormberg har en bevisst inkluderingspolitikk: minst 25 % av de ansatte har hull i CV-en (tidligere rusavhengige, langtidssykemeldte, eks-innsatte)
- Bedriften donerer 1 % av omsetningen til tiltak for barn og unge
- Åpenhet om hele leverandørkjeden med publiserte fabrikklister

**Planet (Miljø):**
- Produkter lages i stor grad av resirkulerte materialer (PET-flasker, resirkulert polyester)
- Retursystem der kunder kan levere tilbake brukte plagg
- Mål om klimanøytral drift med konkrete reduksjonstiltak
- Bluesign-sertifisering for å minimere kjemikaliebruk

**Sammenhengen:** Stormberg viser at de tre bunnlinjene forsterker hverandre — inkluderings­politikken gir positiv medieomtale som styrker merkevaren, bærekraftige produkter tiltrekker miljøbevisste kunder, og alt dette bidrar til økt lønnsomhet.`,
    },
    {
      id: 'eb2-4-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-1-oppg-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står de tre P-ene i trippel bunnlinje for?',
        options: [
          { id: 'a', text: 'Profit, People, Planet', isCorrect: true },
          { id: 'b', text: 'Produkt, Pris, Påvirkning', isCorrect: false },
          { id: 'c', text: 'Profitt, Produktivitet, Prestasjon', isCorrect: false },
          { id: 'd', text: 'Plan, Prosess, Prestasjon', isCorrect: false },
        ],
        solution: 'Trippel bunnlinje (TBL) måler bedriftens resultater langs tre dimensjoner: Profit (økonomi), People (mennesker/sosialt ansvar) og Planet (miljø). Rammeverket ble utviklet av John Elkington i 1994 og viser at en bærekraftig bedrift må skape verdi langs alle tre dimensjonene.',
      },
    },
    {
      id: 'eb2-4-1-def-2',
      type: 'definition',
      title: 'ESG — Environmental, Social, Governance',
      content: `**ESG** er et sett med kriterier som brukes av investorer, analytikere og ratingbyråer for å vurdere bedrifters bærekraftsprestasjon. ESG har blitt den globale standarden for å måle ikke-finansiell risiko og verdiskaping.

**E — Environmental (Miljø)**
- Klimagassutslipp og klimastrategi
- Energibruk og energieffektivitet
- Vannforbruk og vannhåndtering
- Avfallshåndtering og sirkulærøkonomi
- Biologisk mangfold og arealbruk

**S — Social (Sosialt)**
- Arbeidstakerrettigheter og HMS
- Mangfold, likestilling og inkludering (DEI)
- Menneskerettigheter i leverandørkjeden
- Personvern og datasikkerhet
- Lokalsamfunnsengasjement

**G — Governance (Selskapsstyring)**
- Styrets sammensetning og uavhengighet
- Lederlønninger og incentivordninger
- Antikorrupsjon og etiske retningslinjer
- Åpenhet og rapportering
- Aksjonærrettigheter og eierstyring

**Hvorfor ESG er viktig:** Investorer bruker ESG-vurderinger for å identifisere risiko og muligheter som ikke fanges opp av tradisjonell finansiell analyse. Forskning viser at bedrifter med høy ESG-score ofte har lavere kapitalkostnad, mindre volatilitet og bedre langsiktig avkastning.`,
    },
    {
      id: 'eb2-4-1-example-2',
      type: 'example',
      title: 'Eksempel: ESG i praksis — Equinor',
      problem: 'Hvordan påvirker ESG-krav strategien til et norsk energiselskap som Equinor?',
      solution: `**Environmental (Miljø):**
- Equinor har satt mål om å redusere klimagassutslipp fra norsk sokkel med 50 % innen 2030 og netto null innen 2050
- Storstilt satsing på havvind (Hywind Tampen, Dogger Bank) som del av energiomstillingen
- Elektrifisering av plattformer med kraft fra land for å kutte utslipp
- Investorer krever tydelig klimastrategi som del av ESG-rapporteringen

**Social (Sosialt):**
- Strenge HMS-krav på alle installasjoner
- Mangfoldsmål for kjønnsbalanse i ledelsen
- Krav til leverandører om å overholde menneskerettigheter
- Engasjement i lokalsamfunnene der selskapet opererer

**Governance (Selskapsstyring):**
- Uavhengig styre med mangfoldig kompetanse
- Åpenhet om lederlønninger og bonusordninger
- Antikorrupsjonsprogram med varslingskanal
- Bærekraftsrapportering integrert i årsrapporten

**Strategisk betydning:** ESG-kravene driver Equinors omstilling fra olje- og gasselskap til bredt energiselskap. Investorer som Norges Bank Investment Management (oljefondet) stiller konkrete ESG-krav som direkte påvirker selskapets strategi og kapitaltilgang.`,
    },
    {
      id: 'eb2-4-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-1-oppg-2',
        number: '4.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken påstand om ESG er mest korrekt?',
        options: [
          { id: 'a', text: 'ESG handler kun om miljøtiltak og klimagassutslipp', isCorrect: false },
          { id: 'b', text: 'ESG brukes av investorer for å vurdere bærekraftsrisiko og ikke-finansielle faktorer som påvirker langsiktig verdiskaping', isCorrect: true },
          { id: 'c', text: 'ESG er en frivillig sertifisering som bare store bedrifter trenger', isCorrect: false },
          { id: 'd', text: 'ESG erstatter tradisjonell regnskapsrapportering fullstendig', isCorrect: false },
        ],
        solution: 'ESG (Environmental, Social, Governance) er et rammeverk som brukes av investorer og analytikere for å vurdere bedrifters bærekraftsprestasjon. Det dekker miljø, sosiale forhold og selskapsstyring — altså langt mer enn bare miljø. ESG-vurderinger avdekker risiko og muligheter som ikke fanges av tradisjonelt regnskap, og forskning viser at høy ESG-score ofte korrelerer med bedre langsiktig avkastning.',
      },
    },
    {
      id: 'eb2-4-1-text-1',
      type: 'text',
      content: `## Bærekraft som konkurransefortrinn

Tidligere ble bærekraft ofte sett som en kostnad — noe bedrifter «måtte gjøre» for å tilfredsstille reguleringer. I dag er perspektivet snudd: bærekraft kan være en kilde til **konkurransefortrinn**.

### Reaktiv vs. proaktiv bærekraftsstrategi

**Reaktiv tilnærming:**
Bedriften gjør minimumskrav for å overholde lover og forskrifter. Bærekraft behandles som en kostnad og en byrde. Eksempel: En bedrift som kun rapporterer klimagassutslipp fordi det er lovpålagt.

**Proaktiv tilnærming:**
Bedriften ser bærekraft som en strategisk mulighet og integrerer det i kjernevirksomheten. Bærekraft driver innovasjon, differensiering og langsiktig verdiskaping. Eksempel: Patagonia, som har bygget hele merkevaren sin rundt miljøansvar — og tjener mer penger enn noensinne.

### Hvordan bærekraft skaper verdi

- **Kostnadskutt:** Energieffektivisering og avfallsreduksjon sparer penger
- **Innovasjon:** Bærekraftskrav driver frem nye produkter og forretningsmodeller
- **Merkevare:** Bærekraft styrker omdømme og kundelojalitet
- **Rekruttering:** Talentfulle ansatte velger bedrifter med tydelig samfunnsformål
- **Kapitaltilgang:** Stadig flere investorer prioriterer ESG-sterke bedrifter
- **Regulatorisk forsprang:** Proaktive bedrifter er bedre forberedt på fremtidige krav`,
    },
    {
      id: 'eb2-4-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-1-oppg-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom en reaktiv og en proaktiv bærekraftsstrategi. Gi et eksempel på hver og diskuter hvilken tilnærming som gir størst langsiktig verdi for bedriften.',
        hints: ['Tenk på reaktiv som «gjør det vi må» og proaktiv som «gjør det fordi det lønner seg».', 'Vurder fordeler og ulemper ved begge tilnærmingene.'],
        solution: 'En reaktiv strategi innebærer at bedriften gjør minimum for å overholde lover og forskrifter — bærekraft behandles som en kostnad. Eksempel: En fabrikk som kun renser utslipp fordi myndighetene krever det. En proaktiv strategi innebærer at bedriften aktivt bruker bærekraft som en strategisk mulighet — til å innovere, differensiere seg og skape langsiktig verdi. Eksempel: IKEA som investerer i fornybar energi, sirkulære møbelkonsepter og sosiale programmer i leverandørkjeden. Den proaktive tilnærmingen gir størst langsiktig verdi fordi den driver innovasjon, styrker merkevaren, tiltrekker talent og kapital, og gjør bedriften bedre rustet mot fremtidige reguleringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-1-oppg-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en norsk bedrift du kjenner til. Analyser bedriften ut fra trippel bunnlinje-modellen (Profit, People, Planet). Vurder om de tre dimensjonene er i balanse, eller om bedriften prioriterer noen dimensjoner over andre. Hva kunne bedriften gjort annerledes?',
        hints: ['Se på bedriftens nettside, årsrapport eller bærekraftsrapport for informasjon.', 'Vurder om bedriftens bærekraftstiltak er «ekte» eller mest markedsføring (grønnvasking).'],
        solution: 'En god besvarelse velger en konkret bedrift og analyserer alle tre dimensjonene med eksempler. Eksempel med Rema 1000: Profit — sterk lønnsomhet, over 600 butikker, prispress som strategi. People — franchise-modell gir selvstendige kjøpmenn, men kritisert for arbeidspress. Planet — Æ-merket for norske varer, kutt i matsvinn, men store mengder emballasje og transport. Vurdering: Rema prioriterer Profit tydelig, gjør mye bra på Planet (matsvinn), men People-dimensjonen kunne styrkes med bedre vilkår for franchise-takere. Bedriften kunne gjort mer med bærekraftig emballasje og transport.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-1-oppg-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal starte en bedrift. Beskriv hvordan du ville integrert ESG-tenkning allerede fra oppstarten. Lag en kort ESG-plan som dekker miljø (E), sosialt ansvar (S) og selskapsstyring (G).',
        hints: ['Du trenger ikke velge en spesifikk bransje — tenk generelle prinsipper.', 'En ESG-plan for en oppstartsbedrift trenger ikke være like omfattende som for et stort selskap.'],
        solution: 'Eksempel på ESG-plan for oppstart: E (Miljø): Velge bærekraftige materialer, minimere emballasje, klimaregnskap fra dag én, digital-først for å redusere papirbruk. S (Sosialt): Rettferdige lønns- og arbeidsvilkår, mangfoldspolicy, velge leverandører med gode arbeidsforhold, bidra til lokalsamfunnet. G (Selskapsstyring): Tydelige etiske retningslinjer, varslingskanal, transparent rapportering til investorer, uavhengig rådgivende styre. Nøkkelen er at ESG-tenkning bør bygges inn i bedriftens DNA fra starten — det er mye vanskeligere å innføre det i ettertid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-1-oppg-6',
        number: '4.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Bærekraft er bare et motefenomen — det som teller for en bedrift er å tjene penger.» Bruk fagbegreper som trippel bunnlinje, ESG og konkurransefortrinn i svaret ditt.',
        hints: ['Presenter argumenter både for og mot påstanden.', 'Bruk konkrete eksempler på bedrifter som har lykkes (eller mislyktes) med bærekraft.'],
        solution: 'En god drøfting presenterer begge sider: For påstanden — bærekraftstiltak koster penger, noen bedrifter bruker bærekraft mest som markedsføring (grønnvasking), og i siste instans må bedrifter være lønnsomme for å overleve. Mot påstanden — trippel bunnlinje viser at økonomi, mennesker og miljø er gjensidig avhengige. ESG-forskning dokumenterer at bærekraftige bedrifter ofte har bedre avkastning over tid. Bedrifter som Patagonia og Stormberg viser at bærekraft kan være et kraftig konkurransefortrinn. Stadig strengere reguleringer (EUs taksonomi, CSRD) gjør bærekraft til et lovkrav, ikke et valg. Konklusjon: Bærekraft og lønnsomhet er ikke motsetninger — de forsterker hverandre på lang sikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.1

- **Trippel bunnlinje (TBL)** måler bedriftens resultater langs tre dimensjoner: Profit (økonomi), People (mennesker) og Planet (miljø). Alle tre må være i balanse.
- **ESG** (Environmental, Social, Governance) er standarden investorer bruker for å vurdere bedrifters bærekraftsprestasjon og ikke-finansielle risiko.
- En **reaktiv** bærekraftsstrategi gjør minimum for å overholde lover, mens en **proaktiv** strategi bruker bærekraft som kilde til innovasjon og konkurransefortrinn.
- Bærekraft skaper verdi gjennom kostnadskutt, innovasjon, sterkere merkevare, lettere rekruttering og bedre kapitaltilgang.
- Bedrifter som integrerer bærekraft i kjernestrategien fra starten, er bedre rustet for fremtiden.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Trippel bunnlinje (TBL)', definition: 'Rammeverk som måler bedriftens resultater langs tre dimensjoner: Profit, People og Planet.' },
    { term: 'ESG', definition: 'Environmental, Social, Governance — kriterier investorer bruker for å vurdere bærekraftsprestasjon.' },
    { term: 'Proaktiv bærekraftsstrategi', definition: 'Strategi der bedriften aktivt bruker bærekraft som kilde til innovasjon og konkurransefortrinn.' },
    { term: 'Grønnvasking', definition: 'Når en bedrift gir inntrykk av å være mer miljøvennlig enn den faktisk er.' },
  ],
};

// ============================================================================
// KAPITTEL 4.2: Sirkulærøkonomi
// ============================================================================

export const CHAPTER_ENTREBED_2_4_2: TextbookChapter = {
  id: 'entrebed-2-4-2',
  courseId: 'entrebed-2',
  chapterNumber: '4.2',
  title: 'Sirkulærøkonomi',
  description: 'Sirkulære forretningsmodeller, cradle-to-cradle-prinsippet og hvordan bedrifter kan tjene penger på å eliminere avfall.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte korleis berekraft kan integrerast i forretningsmodellar og strategiar',
    'analysere samanhengen mellom bedrifta sitt samfunnsansvar og langsiktig verdiskaping',
  ],
  content: [
    {
      id: 'eb2-4-2-intro',
      type: 'text',
      content: `## Fra lineær til sirkulær økonomi

Den tradisjonelle økonomien er **lineær**: vi tar ut råvarer, lager produkter, bruker dem og kaster dem. Denne «bruk-og-kast»-modellen fører til enorme mengder avfall, ressursknapphet og miljøødeleggelser. Hvert år havner millioner av tonn plast i havet, verdifulle metaller ender på søppelfyllinger, og vi forbruker ressurser raskere enn jorden kan fornye dem.

**Sirkulærøkonomi** er alternativet. I en sirkulær økonomi er målet å holde materialer og produkter i bruk så lenge som mulig, hente ut mest mulig verdi, og deretter gjenvinne og regenerere materialer ved slutten av levetiden. Avfall blir en ressurs, ikke et problem.

For entreprenører representerer overgangen til sirkulærøkonomi en enorm forretningsmulighet. Bedrifter som utvikler sirkulære forretningsmodeller, kan kutte kostnader, skape nye inntektsstrømmer og differensiere seg i markedet.

**I dette kapittelet skal du lære:**
- Forskjellen mellom lineær og sirkulær økonomi
- Prinsippene bak cradle-to-cradle
- Fem sirkulære forretningsmodeller
- Hvordan norske bedrifter jobber med sirkulærøkonomi`,
    },
    {
      id: 'eb2-4-2-def-1',
      type: 'definition',
      title: 'Sirkulærøkonomi',
      content: `**Sirkulærøkonomi** er et økonomisk system der produkter, materialer og ressurser holdes i bruk så lenge som mulig, og der avfall og forurensning er designet bort fra starten.

**Tre grunnprinsipper (Ellen MacArthur Foundation):**

**1. Design bort avfall og forurensning**
Allerede i designfasen planlegges det for at produktet kan repareres, oppgraderes, gjenbrukes og til slutt materialgjenvinnes. Avfall er et designproblem, ikke en uunngåelig konsekvens.

**2. Hold produkter og materialer i bruk**
Gjennom vedlikehold, reparasjon, gjenbruk, oppussing og resirkulering holdes produkter og materialer i sirkulasjon. Produktets levetid forlenges, og verdien utnyttes fullt ut.

**3. Regenerer naturlige systemer**
I stedet for bare å minimere skade, bidrar en sirkulær økonomi til å bygge opp naturkapitalen — gjennom bruk av fornybare materialer, regenerativt landbruk og naturbaserte løsninger.

**Lineær vs. sirkulær:**
- *Lineær:* Utvinne → Produsere → Bruke → Kaste
- *Sirkulær:* Designe → Produsere → Bruke → Reparere/Gjenbruke → Materialgjenvinne → Produsere igjen`,
    },
    {
      id: 'eb2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Sirkulære forretningsmodeller',
      problem: 'Beskriv fem ulike sirkulære forretningsmodeller med praktiske eksempler.',
      solution: `**1. Produkt som tjeneste (Product-as-a-Service)**
I stedet for å selge produktet, leier bedriften det ut. Kunden betaler for bruken, ikke eierskapet. Bedriften beholder eierskapet og ansvaret for vedlikehold og materialgjenvinning.
*Eksempel:* Philips tilbyr «lys som tjeneste» — bedriftskunder betaler for lux (lysmengde), ikke for lyspærer. Philips eier og vedlikeholder systemet.

**2. Gjenbruk og videresalg**
Brukte produkter samles inn, pusses opp og selges på nytt — ofte til lavere pris.
*Eksempel:* Finn.no er Norges største plattform for gjenbruk. Tise og Fretex selger brukte klær.

**3. Reparasjon og oppgradering**
Produkter designes for å kunne repareres og oppgraderes, i stedet for å kastes ved feil.
*Eksempel:* Fairphone lager mobiltelefoner der alle deler kan byttes enkelt. Patagonia tilbyr gratis reparasjon av klær.

**4. Deling og utlån**
Produkter deles mellom flere brukere, slik at utnyttelsesgraden øker.
*Eksempel:* Bilkollektivet lar medlemmer dele biler. Airbnb deler boligkapasitet.

**5. Materialgjenvinning og upcycling**
Avfallsmaterialer brukes som råstoff for nye produkter, ofte med høyere verdi enn opprinnelig.
*Eksempel:* Norsk Gjenvinning omdanner avfall til nye råvarer. Toneby lager møbler av kassert treverk fra byggebransjen.`,
    },
    {
      id: 'eb2-4-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-2-oppg-1',
        number: '4.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det grunnleggende målet med sirkulærøkonomi?',
        options: [
          { id: 'a', text: 'Å produsere mest mulig varer til lavest mulig pris', isCorrect: false },
          { id: 'b', text: 'Å holde produkter og materialer i bruk så lenge som mulig og eliminere avfall', isCorrect: true },
          { id: 'c', text: 'Å erstatte alle fysiske produkter med digitale tjenester', isCorrect: false },
          { id: 'd', text: 'Å stoppe all produksjon for å beskytte miljøet', isCorrect: false },
        ],
        solution: 'Sirkulærøkonomi handler om å holde produkter og materialer i bruk så lenge som mulig, hente ut mest mulig verdi, og deretter gjenvinne materialene. Avfall og forurensning skal designes bort fra starten. Det er ikke et mål å stoppe produksjon, men å produsere smartere.',
      },
    },
    {
      id: 'eb2-4-2-def-2',
      type: 'definition',
      title: 'Cradle-to-Cradle (C2C)',
      content: `**Cradle-to-Cradle** (vugge-til-vugge) er et designrammeverk utviklet av Michael Braungart og William McDonough. Mens tradisjonell tenkning handler om «cradle-to-grave» (vugge-til-grav — altså at produktet ender som avfall), handler C2C om at alle materialer skal kunne gå tilbake i en ny produksjonssyklus.

**To materialkretsløp:**

**1. Biologisk kretsløp**
Materialer som er biologisk nedbrytbare og kan returneres trygt til naturen. Eksempler: bomull, tre, matavfall som blir kompost.

**2. Teknisk kretsløp**
Materialer som ikke brytes ned (metaller, plast, glass), men som kan resirkuleres uendelig mange ganger uten kvalitetstap. Disse materialene skal aldri bli avfall, men kontinuerlig sirkulere som tekniske «næringsstoffer».

**C2C-sertifisering** vurderer produkter på fem kategorier:
1. Materialets sunnhet (ingen giftstoffer)
2. Materialgjenvinning (designet for sirkulasjon)
3. Bruk av fornybar energi
4. Vannforvaltning
5. Sosial rettferdighet

**Eksempel:** Steelcase kontormøbler med C2C-sertifisering er designet slik at alle materialer kan demonteres og enten komposteres (biologisk kretsløp) eller gjenvinnes til nye møbler (teknisk kretsløp).`,
    },
    {
      id: 'eb2-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Fra lineær til sirkulær — klesbransjen',
      problem: 'Klesbransjen er en av verdens mest forurensende industrier. Hvordan kan en klesprodusent gå fra lineær til sirkulær forretningsmodell?',
      solution: `**Lineær modell (dagens standard):**
Råvarer → Produksjon → Salg → Bruk (kort levetid) → Kast → Deponi/forbrenning.
Resultat: 92 millioner tonn tekstilavfall globalt hvert år.

**Sirkulær modell:**

**Design:**
- Bruk materialer som kan gjenvinnes (mono-materialer fremfor blandinger)
- Design for holdbarhet (kvalitetssømmer, slitesterke stoffer)
- Modulært design (utskiftbare deler, f.eks. glidelås)

**Produksjon:**
- Bruk resirkulerte fibre (resirkulert polyester, regenerert bomull)
- Minimal kjemikaliebruk, fornybar energi i fabrikkene

**Distribusjon og bruk:**
- Tilby utleie og abonnement i tillegg til salg
- Gratis reparasjonstjenester og reservedeler
- Vask og vedlikeholdsveiledninger for å forlenge levetiden

**Etter bruk:**
- Innsamlings- og returordning for brukte plagg
- Videresalg av brukte plagg gjennom egen plattform
- Materialgjenvinning av plagg som ikke kan gjenbrukes

**Norsk eksempel — Holzweiler:**
Holzweiler har lansert «Holzweiler Vintage» for videresalg av brukte plagg, og bruker i økende grad resirkulerte materialer i nye kolleksjoner.`,
    },
    {
      id: 'eb2-4-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-2-oppg-2',
        number: '4.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skiller cradle-to-cradle fra tradisjonell resirkulering?',
        options: [
          { id: 'a', text: 'Cradle-to-cradle handler om å designe produkter slik at alle materialer kan gå tilbake i en ny produksjonssyklus uten kvalitetstap', isCorrect: true },
          { id: 'b', text: 'Cradle-to-cradle betyr at produkter skal kastes på en mer miljøvennlig måte', isCorrect: false },
          { id: 'c', text: 'Cradle-to-cradle er en annen betegnelse for deponering på søppelfyllinger', isCorrect: false },
          { id: 'd', text: 'Cradle-to-cradle gjelder kun for plastprodukter', isCorrect: false },
        ],
        solution: 'Tradisjonell resirkulering (downcycling) fører ofte til at materialkvaliteten synker for hver syklus — f.eks. papir som blir grøtaktig. Cradle-to-cradle handler om å designe produkter fra starten slik at materialene kan sirkulere i enten biologiske eller tekniske kretsløp uten kvalitetstap. Det er et designprinsipp, ikke bare en avfallshåndteringsmetode.',
      },
    },
    {
      id: 'eb2-4-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-2-oppg-3',
        number: '4.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en av de fem sirkulære forretningsmodellene (produkt som tjeneste, gjenbruk og videresalg, reparasjon og oppgradering, deling og utlån, eller materialgjenvinning). Forklar hvordan en elevbedrift eller oppstartsbedrift kunne brukt denne modellen. Beskriv produktet/tjenesten, målgruppen og inntektsmodellen.',
        hints: ['Tenk på hva slags avfall eller ubrukte ressurser som finnes i nærmiljøet ditt.', 'Produkt-som-tjeneste kan være alt fra verktøy til festklær.'],
        solution: 'Eksempel: Deling og utlån — en elevbedrift som lager en lokal utlånsapp for verktøy og utstyr i nabolaget. Produkt: App/nettside der naboer kan registrere verktøy de vil låne ut (drill, sirkelsag, telt, ski-wax-utstyr). Målgruppe: Huseiere og leietakere i nabolaget som trenger utstyr sjelden. Inntektsmodell: 10 % provisjon på hver utlånsavtale + premium-abonnement med forsikring. Sirkulær verdi: Utstyr som ellers står ubrukt 95 % av tiden, utnyttes av flere, noe som reduserer behov for nyproduksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-2-oppg-4',
        number: '4.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser en bransje du er interessert i (f.eks. mat, elektronikk, klær, bygg) og beskriv hvordan hele verdikjeden kunne blitt sirkulær. Bruk cradle-to-cradle-prinsippene og identifiser hvilke kretsløp (biologisk eller teknisk) som er aktuelle for de ulike materialene.',
        hints: ['Start med å kartlegge den lineære verdikjeden: råvarer → produksjon → distribusjon → bruk → avfallshåndtering.', 'Tenk på hvert ledd: Hva kan forbedres? Hvilke materialer kan sirkulere?'],
        solution: 'Eksempel med matbransjen: Råvarer: Regenerativt landbruk erstatter konvensjonelt (bygger opp jordsmonnet). Produksjon: Matavfall fra foredling brukes som dyrefôr eller kompost (biologisk kretsløp). Emballasje: Kompostérbar emballasje (biologisk kretsløp) eller gjenfyllbare beholdere (teknisk kretsløp). Distribusjon: Returemballasje, elektrisk transport. Bruk/konsum: Matsvinn-apper (Too Good To Go) for overskuddsmat. Etter bruk: Matavfall til biogass og kompost (biologisk kretsløp), emballasje returneres. C2C-analyse: Maten selv hører til biologisk kretsløp, mens emballasje og logistikk-utstyr hører til teknisk kretsløp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-2-oppg-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter hvilke barrierer som hindrer overgangen til sirkulærøkonomi, og foreslå tiltak som myndigheter, bedrifter og forbrukere kan gjennomføre for å akselerere overgangen.',
        hints: ['Tenk på økonomiske, teknologiske, kulturelle og regulatoriske barrierer.', 'Vurder hvem som har mest ansvar — og mest makt — til å drive endring.'],
        solution: 'Barrierer: (1) Økonomiske — nye jomfruelige materialer er ofte billigere enn resirkulerte fordi miljøkostnader ikke er priset inn. (2) Teknologiske — mange produkter er ikke designet for demontering og gjenvinning. (3) Kulturelle — forbrukere foretrekker nytt fremfor brukt, og «bruk-og-kast»-mentaliteten er dypt forankret. (4) Regulatoriske — lovverk er tilpasset lineær økonomi. Tiltak: Myndigheter — utvidet produsentansvar, avgifter på deponi og forbrenning, støtte til sirkulær forskning. Bedrifter — investere i sirkulært design, ta tilbake brukte produkter, samarbeide i verdikjeden. Forbrukere — velge kvalitet over kvantitet, reparere, kjøpe brukt, etterspørre bærekraftige produkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-2-oppg-6',
        number: '4.2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar begrepene «downcycling» og «upcycling» med eksempler. Hvorfor er upcycling mer i tråd med sirkulærøkonomi-prinsippet enn downcycling?',
        hints: ['Downcycling = materialet mister kvalitet. Upcycling = materialet får høyere verdi.'],
        solution: 'Downcycling betyr at materialet resirkuleres til et produkt med lavere kvalitet eller verdi. Eksempel: Kontorpapir som resirkuleres til grovere papp. For hver syklus synker kvaliteten til materialet ender som avfall. Upcycling betyr at avfallsmaterialer brukes til å skape produkter med høyere verdi enn det opprinnelige. Eksempel: Kasserte bildekk som blir til designmøbler, eller sjøplast som blir til eksklusive solbriller. Upcycling er mer i tråd med sirkulærøkonomi fordi det holder materialer i kretsløp med høy verdi, gir økonomisk incentiv til å samle inn avfall, og unngår den gradvise kvalitetsnedgangen som gjør downcycling til en forsinket vei mot deponi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.2

- **Sirkulærøkonomi** er et alternativ til lineær «bruk-og-kast»-økonomi der produkter og materialer holdes i bruk så lenge som mulig.
- **Tre grunnprinsipper:** Design bort avfall, hold produkter i bruk, regenerer naturlige systemer.
- **Cradle-to-cradle** skiller mellom biologisk kretsløp (nedbrytbare materialer tilbake til naturen) og teknisk kretsløp (materialer som sirkulerer i produksjonssystemet).
- **Fem sirkulære forretningsmodeller:** Produkt som tjeneste, gjenbruk/videresalg, reparasjon/oppgradering, deling/utlån og materialgjenvinning/upcycling.
- Overgangen til sirkulærøkonomi representerer en stor forretningsmulighet for entreprenører som kan løse avfalls- og ressursutfordringer.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sirkulærøkonomi', definition: 'Økonomisk system der produkter og materialer holdes i bruk så lenge som mulig og avfall er designet bort.' },
    { term: 'Cradle-to-Cradle (C2C)', definition: 'Designrammeverk der alle materialer kan gå tilbake i enten biologisk eller teknisk kretsløp uten kvalitetstap.' },
    { term: 'Upcycling', definition: 'Å bruke avfallsmaterialer til å skape produkter med høyere verdi enn det opprinnelige materialet.' },
    { term: 'Produkt som tjeneste', definition: 'Forretningsmodell der kunden betaler for bruk, ikke eierskap — bedriften beholder eierskapet og ansvaret.' },
  ],
};

// ============================================================================
// KAPITTEL 4.3: Sosialt entreprenørskap
// ============================================================================

export const CHAPTER_ENTREBED_2_4_3: TextbookChapter = {
  id: 'entrebed-2-4-3',
  courseId: 'entrebed-2',
  chapterNumber: '4.3',
  title: 'Sosialt entreprenørskap',
  description: 'Samfunnsutfordringer som forretningsmuligheter, impact investing, B-corp-sertifisering og hybrid verdiskaping.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte korleis berekraft kan integrerast i forretningsmodellar og strategiar',
    'vurdere korleis FNs berekraftsmål kan koplast til forretningsutvikling',
  ],
  content: [
    {
      id: 'eb2-4-3-intro',
      type: 'text',
      content: `## Sosialt entreprenørskap — forretning med samfunnsformål

Hva om du kunne starte en bedrift som både tjener penger og løser et viktig samfunnsproblem? Det er kjernen i **sosialt entreprenørskap** — en tilnærming der gründere bruker forretningsverktøy og markedsmekanismer for å skape positiv sosial eller miljømessig endring.

Sosiale entreprenører skiller seg fra tradisjonelle gründere ved at **samfunnsmålet** er den primære drivkraften — ikke bare profitten. Men de skiller seg også fra veldedighetsorganisasjoner ved at de bruker **bærekraftige forretningsmodeller** som genererer inntekter, i stedet for å være avhengige av donasjoner.

Sosialt entreprenørskap har vokst kraftig de siste tiårene, drevet av stadig større oppmerksomhet rundt ulikhet, klimaendringer og sosiale utfordringer. I Norge finnes det en voksende bevegelse av sosiale entreprenører som løser alt fra utenforskap til matsvinn.

**I dette kapittelet skal du lære:**
- Hva sosialt entreprenørskap er og hva som skiller det fra tradisjonelt entreprenørskap
- Ulike modeller for sosial verdiskaping
- Hva impact investing og B-corp er
- Eksempler på norske og internasjonale sosiale entreprenører`,
    },
    {
      id: 'eb2-4-3-def-1',
      type: 'definition',
      title: 'Sosialt entreprenørskap',
      content: `**Sosialt entreprenørskap** er en tilnærming der gründere utvikler innovative, bærekraftige forretningsmodeller for å løse sosiale eller miljømessige utfordringer.

**Kjennetegn:**
- **Samfunnsformål først:** Den primære drivkraften er å løse et samfunnsproblem, ikke å maksimere profitt
- **Bærekraftig forretningsmodell:** Bedriften genererer egne inntekter gjennom salg av varer eller tjenester — den er ikke avhengig av donasjoner
- **Innovativ tilnærming:** Sosiale entreprenører finner nye løsninger på gamle problemer
- **Skalerbarhet:** Målet er ofte å skalere løsningen for å nå flest mulig
- **Målbar sosial effekt:** Bedriften måler sin samfunnseffekt (impact), ikke bare finansielle resultater

**Tre modeller for sosialt entreprenørskap:**

1. **Ren sosial virksomhet:** All profitt reinvesteres i det sosiale formålet. Eksempel: Fretex (Frelsesarmeen) — overskudd fra butikkene finansierer sosialt arbeid.

2. **Hybrid modell:** Kombinerer kommersielle inntekter med sosial effekt. Bedriften tjener penger, men har et tydelig samfunnsformål som driver strategien. Eksempel: Too Good To Go — tjener penger på å redde mat fra å kastes.

3. **Sosialt bevisst kommersielt selskap:** En fullt kommersiell bedrift som bevisst integrerer sosiale mål i forretningsmodellen. Eksempel: TOMS Shoes med «one for one»-modellen.`,
    },
    {
      id: 'eb2-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Sosiale entreprenører i Norge',
      problem: 'Gi tre eksempler på norske sosiale entreprenører og forklar hvordan de kombinerer forretning med samfunnsformål.',
      solution: `**1. Lyk-z & Daughters**
- **Samfunnsutfordring:** Unge som faller utenfor arbeidslivet
- **Løsning:** Restaurant og cateringvirksomhet som ansetter unge som har droppet ut av skole eller arbeidsliv, og gir dem opplæring og arbeidserfaring
- **Forretningsmodell:** Inntekter fra restaurant og catering. Støttes også delvis av kommunale tilskudd
- **Impact:** Hundrevis av unge har fått arbeidserfaring og mange har gått videre til fast jobb eller utdanning

**2. Too Good To Go**
- **Samfunnsutfordring:** Matsvinn — ca. 390 000 tonn mat kastes hvert år i Norge
- **Løsning:** App der butikker, restauranter og bakerieer selger overskuddsmat til redusert pris
- **Forretningsmodell:** Provisjon på hvert salg gjennom appen (bedriften tar en andel av prisen)
- **Impact:** Over 10 millioner «poser» reddet bare i Norge, til en verdi av hundrevis av millioner kroner

**3. Fretex**
- **Samfunnsutfordring:** Utenforskap og arbeidsledighet blant sårbare grupper
- **Løsning:** Bruktbutikk-kjede som gir arbeidstrening og praksisplasser
- **Forretningsmodell:** Salg av brukte klær, møbler og gjenstander. Overskuddet går til Frelsesarmeens sosiale arbeid
- **Impact:** Over 90 butikker, hundrevis av praksisplasser årlig, og enorme mengder klær og gjenstander gjenbrukt`,
    },
    {
      id: 'eb2-4-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-3-oppg-1',
        number: '4.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner sosialt entreprenørskap?',
        options: [
          { id: 'a', text: 'At bedriften bruker innovative forretningsmodeller for å løse sosiale eller miljømessige utfordringer', isCorrect: true },
          { id: 'b', text: 'At bedriften er en veldedighetsorganisasjon som samler inn donasjoner', isCorrect: false },
          { id: 'c', text: 'At bedriften utelukkende fokuserer på å maksimere aksjonærenes avkastning', isCorrect: false },
          { id: 'd', text: 'At bedriften er eid av det offentlige og finansiert over statsbudsjettet', isCorrect: false },
        ],
        solution: 'Sosialt entreprenørskap kjennetegnes av at gründere bruker innovative, bærekraftige forretningsmodeller for å løse samfunnsproblemer. Til forskjell fra veldedighet genererer sosiale bedrifter egne inntekter. Til forskjell fra rent kommersielle bedrifter er samfunnsformålet den primære drivkraften, ikke profittmaksimering.',
      },
    },
    {
      id: 'eb2-4-3-def-2',
      type: 'definition',
      title: 'Impact investing og B-Corp',
      content: `**Impact investing** (effektinvesteringer) er investeringer som gjøres med intensjon om å skape målbar positiv sosial eller miljømessig effekt — i tillegg til finansiell avkastning.

**Kjennetegn ved impact investing:**
- **Dobbelt bunnlinje:** Investoren forventer både finansiell avkastning og positiv samfunnseffekt
- **Intensjonalitet:** Den sosiale/miljømessige effekten er et bevisst mål, ikke en bivirkning
- **Målbarhet:** Effekten måles og rapporteres systematisk
- **Markedsstørrelse:** Globalt impact investing-marked er anslått til over 1 000 milliarder USD og vokser raskt

**Eksempler:** Investering i fornybar energi i utviklingsland, rimelige boliger, helsetjenester for underbetjente grupper, utdanningsteknologi.

---

**B-Corp** (Benefit Corporation) er en sertifisering gitt av den ideelle organisasjonen B Lab til bedrifter som oppfyller strenge krav til sosial og miljømessig prestasjon, åpenhet og ansvarlighet.

**Krav for B-Corp-sertifisering:**
- Score minst 80 av 200 poeng på B Impact Assessment (omfattende evaluering av miljø, arbeidstakere, lokalsamfunn, kunder og selskapsstyring)
- Endre vedtektene til å inkludere hensyn til alle interessenter, ikke bare aksjonærer
- Bestå en åpen gjennomsiktighetsprosess

**Norske B-Corp-bedrifter:** Hurtigruten, Epleslang, Bikuben og flere. Globalt finnes det over 7 000 sertifiserte B-Corp-bedrifter i mer enn 90 land.`,
    },
    {
      id: 'eb2-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Impact investing — Katapult',
      problem: 'Forklar hvordan det norske investeringsselskapet Katapult praktiserer impact investing.',
      solution: `**Katapult** er et norsk impact-investeringsselskap grunnlagt i 2017 som investerer i teknologiselskaper som løser verdens største utfordringer.

**Investeringsstrategi:**
- Investerer i oppstartsbedrifter som bruker teknologi til å løse sosiale og miljømessige problemer
- Fokusområder inkluderer klimateknologi, helseteknologi, matproduksjon og inkluderende finans
- Krever at alle porteføljeselskaper måler og rapporterer sin sosiale og miljømessige effekt

**Eksempler på porteføljeselskaper:**
- *SolarSack:* Solcelledrevet vannrensing for utviklingsland — gir rent drikkevann uten elektrisitet
- *Empower:* Plattform som gjør plastinnsamling lønnsomt i utviklingsland ved å gi plastinnsamlere rettferdig betaling
- *FarmRaise:* Digital plattform som hjelper småbønder i USA med å søke om støtte til bærekraftig landbruk

**Resultater:**
- Porteføljen har tiltrukket milliarder i oppfølgingsinvesteringer
- Dokumentert målbar sosial og miljømessig effekt på tvers av porteføljeselskapene
- Viser at impact investing kan levere både avkastning og samfunnsnytte

**Nøkkellæring:** Katapult demonstrerer at investorer ikke trenger å velge mellom avkastning og samfunnseffekt — de kan oppnå begge deler.`,
    },
    {
      id: 'eb2-4-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-3-oppg-2',
        number: '4.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedforskjellen mellom impact investing og tradisjonell investering?',
        options: [
          { id: 'a', text: 'Impact investing gir aldri finansiell avkastning', isCorrect: false },
          { id: 'b', text: 'Impact investing har en bevisst intensjon om å skape målbar positiv sosial eller miljømessig effekt — i tillegg til finansiell avkastning', isCorrect: true },
          { id: 'c', text: 'Impact investing er en form for veldedighet uten forventning om å få pengene tilbake', isCorrect: false },
          { id: 'd', text: 'Impact investing skjer kun i utviklingsland', isCorrect: false },
        ],
        solution: 'Hovedforskjellen er intensjonaliteten: ved impact investing er den sosiale eller miljømessige effekten et bevisst mål, ikke en tilfeldig bivirkning. Investoren forventer både finansiell avkastning OG positiv samfunnseffekt. I motsetning til veldedighet er det en investering med forventet avkastning, og i motsetning til tradisjonell investering er samfunnseffekten en eksplisitt del av investeringsmandatet.',
      },
    },
    {
      id: 'eb2-4-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-3-oppg-3',
        number: '4.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser en samfunnsutfordring i ditt nærmiljø eller i Norge generelt. Beskriv en sosial forretningsidé som kunne bidratt til å løse denne utfordringen. Forklar forretningsmodellen (hvordan bedriften tjener penger) og den forventede sosiale effekten.',
        hints: ['Tenk på utfordringer som ensomhet blant eldre, utenforskap blant unge, matsvinn, plastforurensning, tilgang til psykisk helsehjelp osv.', 'En god sosial forretningsidé har tydelig sammenheng mellom inntektsmodell og samfunnseffekt.'],
        solution: 'Eksempel: Utfordring — ensomhet blant eldre. Forretningsidé — «Generasjonskoble» — en plattform som kobler studenter som trenger rimelig bolig med eldre som har ledig rom. Studenten får billig bolig mot å tilbringe tid med den eldre (måltider, samtaler, hjelp med teknologi). Inntektsmodell: Abonnementsavgift fra begge parter + provisjon på formidling. Sosial effekt: Redusert ensomhet, rimelige boliger for studenter, og økt trygghet for eldre. Målbar impact: Antall match, selvrapportert livskvalitet, reduksjon i helsetjenestebehov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-3-oppg-4',
        number: '4.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter forskjellene mellom en tradisjonell veldedighetsorganisasjon, en sosial bedrift (hybrid modell) og en B-Corp-sertifisert kommersiell bedrift. Hvilke fordeler og ulemper har hver modell? Hvilken modell mener du er best egnet til å skape langvarig sosial endring, og hvorfor?',
        hints: ['Vurder finansiell bærekraft, skalerbarhet, demokratisk kontroll og evne til å tiltrekke talent.', 'Det finnes ikke ett riktig svar — det avhenger av konteksten.'],
        solution: 'Veldedighetsorganisasjon: Fordeler — tydelig sosialt formål, skattefordeler, tilgang på donasjoner og frivillighet. Ulemper — avhengig av donasjoner (ustabil finansiering), begrenset skalerbarhet, kan miste fokus ved å «jakte» på funderingsmidler. Sosial bedrift (hybrid): Fordeler — bærekraftig inntektsmodell, tydelig samfunnsformål, kan tiltrekke impact-investorer. Ulemper — vanskelig å balansere profitt og formål, kan oppleve «mission drift». B-Corp: Fordeler — kommersiell kraft med sertifisert sosialt ansvar, tiltrekker bærekraftsbevisste kunder og ansatte. Ulemper — fremdeles aksjonærdrevet, sertifiseringskostnader, risiko for «B-washing». For langvarig endring er hybridmodellen ofte best fordi den kombinerer finansiell bærekraft med tydelig forpliktelse til samfunnsformålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-3-oppg-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk en B-Corp-sertifisert bedrift (norsk eller internasjonal) og beskriv hva bedriften gjør, hvorfor den valgte å bli B-Corp-sertifisert, og hvilke tiltak den har gjennomført innen miljø, sosiale forhold og selskapsstyring.',
        hints: ['Sjekk bcorporation.net for en liste over sertifiserte bedrifter.', 'Se etter bedriftens B Impact Score og sammenlign med andre.'],
        solution: 'Eksempel: Patagonia (amerikansk B-Corp). Hva: Friluftsklær og -utstyr. Hvorfor B-Corp: Formalisere selskapets mangeårige forpliktelse til miljøansvar og sikre at verdiene overlever eierskifter. Miljø: 1 % av omsetningen doneres til miljøorganisasjoner, bruker resirkulerte materialer, reparerer klær gratis. Sosialt: Fair Trade-sertifisert produksjon, støtte til lokale miljøgrupper, fleksible arbeidsordninger for ansatte. Styring: Grunnlegger Yvon Chouinard overførte eierskapet til en klimastiftelse i 2022. B Impact Score: 151,4 (av 200) — langt over minstekravet på 80.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-3-oppg-6',
        number: '4.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: «Sosialt entreprenørskap høres fint ut, men i virkeligheten er det umulig å tjene gode penger og løse samfunnsproblemer på samme tid.» Bruk eksempler og fagbegreper i svaret ditt.',
        hints: ['Finn eksempler på sosiale entreprenører som er lønnsomme.', 'Vurder også eksempler der sosiale bedrifter har slitt med å balansere profitt og formål.'],
        solution: 'En god drøfting presenterer argumenter for begge sider. For påstanden: Mission drift er en reell risiko — press fra investorer kan undergrave det sosiale formålet. Mange sosiale bedrifter sliter med å nå skala fordi de konkurrerer med bedrifter uten samme kostnadsbelastning. Mot påstanden: Too Good To Go er verdsatt til milliarder og redder millioner av måltider. Katapult viser at impact investing kan levere god avkastning. B-Corp-bedrifter som Patagonia er mer lønnsomme enn mange konkurrenter. Impact investing-markedet vokser eksplosivt, noe som viser at investorer ser muligheter. Forskning viser at formålsdrevne bedrifter ofte har mer lojale kunder og ansatte. Konklusjon: Det er utfordrende, men fullt mulig å kombinere profitt og formål — spesielt når samfunnseffekten er integrert i forretningsmodellen snarere enn en tilleggskostnad.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.3

- **Sosialt entreprenørskap** bruker innovative forretningsmodeller for å løse sosiale og miljømessige utfordringer — med bærekraftig inntektsmodell.
- Tre modeller: ren sosial virksomhet, hybrid modell og sosialt bevisst kommersielt selskap.
- **Impact investing** er investeringer som bevisst sikter mot å skape målbar positiv samfunnseffekt i tillegg til finansiell avkastning.
- **B-Corp** er en sertifisering som bekrefter at en bedrift oppfyller strenge krav til sosial og miljømessig prestasjon.
- Norske eksempler som Too Good To Go, Fretex og Katapult viser at sosialt entreprenørskap fungerer i praksis.
- Utfordringen er å balansere samfunnsformål og lønnsomhet — men forskning og praksis viser at dette er fullt mulig.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sosialt entreprenørskap', definition: 'Tilnærming der gründere bruker bærekraftige forretningsmodeller for å løse sosiale eller miljømessige utfordringer.' },
    { term: 'Impact investing', definition: 'Investeringer med intensjon om å skape målbar positiv sosial/miljømessig effekt i tillegg til finansiell avkastning.' },
    { term: 'B-Corp', definition: 'Sertifisering fra B Lab som bekrefter at en bedrift oppfyller strenge krav til sosial og miljømessig prestasjon.' },
    { term: 'Mission drift', definition: 'Risiko for at en sosial bedrift gradvis nedprioriterer sitt samfunnsformål til fordel for profitt.' },
  ],
};

// ============================================================================
// KAPITTEL 4.4: Samfunnsansvar (CSR)
// ============================================================================

export const CHAPTER_ENTREBED_2_4_4: TextbookChapter = {
  id: 'entrebed-2-4-4',
  courseId: 'entrebed-2',
  chapterNumber: '4.4',
  title: 'Samfunnsansvar (CSR)',
  description: 'Bedriftens samfunnsansvar, bærekraftsrapportering, interessentanalyse og åpenhetsloven som rammeverk for ansvarlig forretningsdrift.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere samanhengen mellom bedrifta sitt samfunnsansvar og langsiktig verdiskaping',
    'drøfte korleis berekraft kan integrerast i forretningsmodellar og strategiar',
  ],
  content: [
    {
      id: 'eb2-4-4-intro',
      type: 'text',
      content: `## Bedriftens samfunnsansvar

I hvilken grad har en bedrift ansvar for mer enn å tjene penger til eierne? Dette spørsmålet har blitt stadig mer aktuelt i takt med globalisering, klimaendringer og økende forventninger fra samfunnet. Svaret de fleste bedrifter, investorer og myndigheter har landet på, er klart: bedrifter har et ansvar som strekker seg langt utover den økonomiske bunnlinjen.

**Corporate Social Responsibility (CSR)** — eller samfunnsansvar — handler om hvordan bedrifter tar ansvar for sin påvirkning på samfunn, miljø og mennesker. CSR har utviklet seg fra å være en frivillig «nice to have» til å bli en strategisk nødvendighet og i økende grad et lovkrav.

I Norge har denne utviklingen akselerert med innføringen av **åpenhetsloven** (2022), som pålegger alle større bedrifter å gjennomføre aktsomhetsvurderinger og rapportere om menneskerettigheter og arbeidsforhold i leverandørkjeden.

**I dette kapittelet skal du lære:**
- Hva CSR er og hvordan det har utviklet seg
- Interessentmodellen og interessentanalyse
- Krav til bærekraftsrapportering (CSRD, GRI)
- Åpenhetsloven og dens konsekvenser for norske bedrifter`,
    },
    {
      id: 'eb2-4-4-def-1',
      type: 'definition',
      title: 'CSR — Corporate Social Responsibility',
      content: `**CSR** (Corporate Social Responsibility / bedriftens samfunnsansvar) er bedriftens ansvar for sin påvirkning på samfunn, miljø og interessenter utover det som kreves av lov og forskrift.

**Fire dimensjoner av CSR (Carrolls pyramide):**

**1. Økonomisk ansvar (grunnlaget)**
Bedriften må være lønnsom — uten inntekter kan den ikke bidra med noe. Økonomisk ansvar omfatter å skape verdier, arbeidsplasser og betale skatt.

**2. Juridisk ansvar**
Bedriften må følge gjeldende lover og regler — arbeidsmiljøloven, skattelovgivning, forurensningsforskriften osv.

**3. Etisk ansvar**
Bedriften bør gjøre det som er riktig og rettferdig, selv om det ikke er lovpålagt. Dette inkluderer å betale rettferdige lønninger, sikre gode arbeidsforhold hos leverandører og unngå skadelige produkter.

**4. Filantropisk ansvar (toppen)**
Bedriften bidrar til samfunnet gjennom sponsing, donasjoner og frivillig engasjement — utover det som forventes.

**Strategisk CSR vs. filantropisk CSR:**
- *Filantropisk CSR:* Bedriften donerer penger eller tid til gode formål — men det er løsrevet fra kjernevirksomheten.
- *Strategisk CSR:* Samfunnsansvaret er integrert i bedriftens strategi og kjernevirksomhet. Det skaper verdi for både bedriften og samfunnet.`,
    },
    {
      id: 'eb2-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Interessentmodellen — hvem har bedriften ansvar overfor?',
      problem: 'Bruk interessentmodellen til å identifisere de viktigste interessentene for en norsk dagligvarekjede, og beskriv hva hver interessent forventer av bedriften.',
      solution: `**Interessentmodellen** viser alle grupper som påvirker eller påvirkes av bedriftens virksomhet.

**Interne interessenter:**
- **Eiere/aksjonærer:** Forventer økonomisk avkastning, verdivekst og ansvarlig drift
- **Ansatte:** Forventer rettferdige lønninger, godt arbeidsmiljø, utviklingsmuligheter og trygg arbeidsplass
- **Ledelsen:** Forventer klare mål, tilstrekkelige ressurser og handlingsrom

**Eksterne interessenter:**
- **Kunder:** Forventer kvalitetsvarer til riktig pris, trygg mat, god service og bærekraftige alternativer
- **Leverandører:** Forventer rettferdige innkjøpsbetingelser, langsiktige relasjoner og rettidig betaling
- **Lokalsamfunn:** Forventer arbeidsplasser, skatteinntekter, minimal forurensning og engasjement
- **Myndigheter:** Forventer at bedriften følger lover, betaler skatt og rapporterer korrekt
- **Miljøorganisasjoner:** Forventer redusert emballasje, kutt i matsvinn, bærekraftig verdikjede
- **Medier:** Forventer åpenhet og gir oppmerksomhet til både gode og dårlige praksiser
- **Konkurrenter:** Forventer fair konkurranse i tråd med konkurranselovgivningen

**Interessentanalyse:**
Bedriften bør kartlegge alle interessenter, vurdere deres makt og legitimitet, og prioritere hvem den skal lytte mest til. Motstridende forventninger er uunngåelig — f.eks. kan aksjonærer ønske lave kostnader mens ansatte ønsker høyere lønn.`,
    },
    {
      id: 'eb2-4-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-4-oppg-1',
        number: '4.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de fire nivåene i Carrolls CSR-pyramide, fra bunn til topp?',
        options: [
          { id: 'a', text: 'Økonomisk, juridisk, etisk og filantropisk ansvar', isCorrect: true },
          { id: 'b', text: 'Miljø, sosial, økonomisk og politisk ansvar', isCorrect: false },
          { id: 'c', text: 'Profitt, mennesker, planet og formål', isCorrect: false },
          { id: 'd', text: 'Juridisk, etisk, økonomisk og teknologisk ansvar', isCorrect: false },
        ],
        solution: 'Carrolls CSR-pyramide har fire nivåer: (1) Økonomisk ansvar — bedriften må være lønnsom. (2) Juridisk ansvar — bedriften må følge lover og regler. (3) Etisk ansvar — bedriften bør gjøre det som er riktig, selv om det ikke er lovpålagt. (4) Filantropisk ansvar — bedriften bidrar til samfunnet gjennom donasjoner og frivillig engasjement.',
      },
    },
    {
      id: 'eb2-4-4-def-2',
      type: 'definition',
      title: 'Bærekraftsrapportering og åpenhetsloven',
      content: `**Bærekraftsrapportering** er systematisk rapportering om bedriftens miljømessige, sosiale og styringsmessige (ESG) resultater og påvirkning.

**Viktige rammeverk:**

**CSRD (Corporate Sustainability Reporting Directive)**
EUs direktiv som pålegger store og børsnoterte bedrifter å rapportere detaljert om bærekraft. Fra 2025 gjelder det for store norske bedrifter. Rapporteringen skal følge ESRS (European Sustainability Reporting Standards) og revideres av uavhengig revisor.

**GRI (Global Reporting Initiative)**
Verdens mest brukte frivillige standard for bærekraftsrapportering. GRI gir retningslinjer for hva bedrifter bør rapportere om innen miljø, sosiale forhold, økonomi og styring.

---

**Åpenhetsloven (2022)**
Norsk lov som pålegger alle større bedrifter (og noen mindre) å:
1. **Gjennomføre aktsomhetsvurderinger** — kartlegge og vurdere faktiske og potensielle negative konsekvenser for menneskerettigheter og anstendige arbeidsforhold i egen virksomhet og leverandørkjede
2. **Iverksette tiltak** for å stanse, forebygge eller begrense negative konsekvenser
3. **Rapportere** om aktsomhetsvurderingene i en offentlig redegjørelse
4. **Svare på informasjonsforespørsler** — alle kan be en bedrift om informasjon om dens arbeid med menneskerettigheter og arbeidsforhold

**Hvem omfattes?** Alle bedrifter som oppfyller minst to av tre kriterier: over 50 ansatte, over 70 mill. kr i omsetning, over 35 mill. kr i balanse.`,
    },
    {
      id: 'eb2-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Interessentanalyse for en bedrift',
      problem: 'Gjennomfør en enkel interessentanalyse for en klesbutikk-kjede ved å kategorisere interessentene etter makt og interesse.',
      solution: `**Makt/interesse-matrisen:**

Interessentene kategoriseres i fire grupper basert på deres **makt** (evne til å påvirke bedriften) og **interesse** (grad av engasjement):

**Høy makt + Høy interesse → Nøkkelinteressenter (må styres aktivt)**
- Eiere/aksjonærer: Bestemmer strategi, forventer avkastning
- Store kunder/innkjøpere: Stor kjøpekraft, stiller bærekraftskrav
- Arbeidstilsynet/myndigheter: Regulerer og kontrollerer

**Høy makt + Lav interesse → Hold fornøyde**
- Bankforbindelsen: Kan stramme inn kreditt, men er normalt passive
- Store leverandører: Viktige for drift, men blander seg sjelden inn i strategi

**Lav makt + Høy interesse → Hold informerte**
- Ansatte i butikkene: Sterkt engasjerte, men begrenset formell makt
- Miljøorganisasjoner: Følger med og kan påvirke omdømmet
- Lokalsamfunnet: Berørt av butikkdrift, men har begrenset direkte innflytelse

**Lav makt + Lav interesse → Overvåk**
- Allmennheten: Sjelden engasjerte, men kan mobiliseres av medieoppslag
- Akademikere/forskere: Studerer bransjen, men har begrenset direkte påvirkning

**Strategisk bruk:** Matrisen hjelper bedriften med å prioritere kommunikasjon og tiltak mot de viktigste interessentene. Nøkkelinteressenter bør involveres i strategiske beslutninger.`,
    },
    {
      id: 'eb2-4-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-4-oppg-2',
        number: '4.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedkravet i åpenhetsloven?',
        options: [
          { id: 'a', text: 'At bedrifter må publisere alle regnskapstall på nettsiden sin', isCorrect: false },
          { id: 'b', text: 'At større bedrifter må gjennomføre aktsomhetsvurderinger og rapportere om menneskerettigheter og arbeidsforhold i virksomheten og leverandørkjeden', isCorrect: true },
          { id: 'c', text: 'At bedrifter må betale minst 5 % av overskuddet til veldedige formål', isCorrect: false },
          { id: 'd', text: 'At alle bedrifter må bli B-Corp-sertifiserte innen 2030', isCorrect: false },
        ],
        solution: 'Åpenhetsloven (2022) pålegger større norske bedrifter å gjennomføre aktsomhetsvurderinger for å kartlegge risiko for brudd på menneskerettigheter og anstendige arbeidsforhold i egen virksomhet og leverandørkjede. Bedriftene må iverksette tiltak, rapportere offentlig og svare på informasjonsforespørsler fra hvem som helst.',
      },
    },
    {
      id: 'eb2-4-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-4-oppg-3',
        number: '4.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en interessentanalyse for en bedrift du velger selv. Identifiser minst 6 interessenter, beskriv deres forventninger til bedriften, og plasser dem i en makt/interesse-matrise. Forklar hvilke interessenter bedriften bør prioritere og hvorfor.',
        hints: ['Start med å liste opp alle grupper som berøres av bedriftens virksomhet.', 'Vurder hvem som har mest makt til å påvirke bedriften, og hvem som har mest interesse.'],
        solution: 'En god besvarelse velger en konkret bedrift, identifiserer minst 6 interessenter med tydelige forventninger, og plasserer dem logisk i makt/interesse-matrisen. Eksempel med Hurtigruten: (1) Aksjonærer — høy makt, høy interesse (nøkkelinteressent). (2) Turister/passasjerer — høy interesse, moderat makt. (3) Miljødirektoratet — høy makt, varierende interesse. (4) Kystsamfunn — høy interesse, lav formell makt. (5) Ansatte — høy interesse, moderat makt. (6) Medier — moderat makt, varierende interesse. Prioritet: Aksjonærer og miljømyndigheter har mest direkte makt, men kystsamfunnene bør lyttes til fordi deres goodwill er avgjørende for bedriftens legitimitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-4-oppg-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Undersøk en norsk bedrifts bærekraftsrapport eller redegjørelse etter åpenhetsloven (mange bedrifter publiserer disse på nettsiden sin). Vurder: (a) Hvilke temaer dekker rapporten? (b) Er informasjonen konkret og målbar, eller vag og generell? (c) Hva kunne vært bedre?',
        hints: ['Søk etter «bærekraftsrapport» eller «redegjørelse åpenhetsloven» på bedriftens nettside.', 'Se etter konkrete tall, mål og tiltak — ikke bare fine ord.'],
        solution: 'En god besvarelse analyserer en reell rapport kritisk. Eksempel: Norsk Hydro Bærekraftsrapport 2024. (a) Dekker klimautslipp, biologisk mangfold, arbeidsmiljø, menneskerettigheter i leverandørkjede, selskapsstyring. (b) Styrker: Konkrete utslippstall med historikk, tydelige mål med årstall, tredjepartsverifisering. Svakheter: Vag om leverandørkjede i enkelte regioner, mangler detaljert informasjon om lokale konsekvenser. (c) Forbedringer: Mer detaljert om sosiale konsekvenser for lokalsamfunn, tydeligere kobling mellom tiltak og resultater, mer om biologisk mangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-4-oppg-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom strategisk CSR og filantropisk CSR med eksempler. Argumenter for hvorfor strategisk CSR ofte gir større positiv samfunnseffekt enn ren filantropi.',
        hints: ['Filantropisk CSR: Bedriften gir bort penger. Strategisk CSR: Samfunnsansvaret er bygget inn i forretningsmodellen.', 'Tenk på skalerbarhet og langsiktighet.'],
        solution: 'Filantropisk CSR: Bedriften donerer penger eller ressurser til gode formål som er løsrevet fra kjernevirksomheten. Eksempel: En bank som sponser en lokal fotballklubb. Det er positivt, men effekten er begrenset og forsvinner hvis bedriften slutter å donere. Strategisk CSR: Samfunnsansvaret er integrert i bedriftens strategi og skaper verdi for både bedriften og samfunnet. Eksempel: Stormberg som ansetter folk med hull i CV-en — dette løser en sosial utfordring (utenforskap), styrker merkevaren (omtale), og bedriften får motiverte ansatte. Strategisk CSR gir større effekt fordi: (1) den er bærekraftig — bedriften tjener på det og vil fortsette. (2) Den skalerer — jo mer bedriften vokser, jo større effekt. (3) Den integreres i daglig drift, ikke bare i en donasjonssjekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-4-oppg-6',
        number: '4.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft Milton Friedmans påstand: «Bedriftens eneste sosiale ansvar er å øke sin profitt.» Sammenlign med Carrolls CSR-pyramide og interessentmodellen. Hvem mener du har rett, og hva er konsekvensene av hvert syn for bedrifters oppførsel?',
        hints: ['Friedman mente at samfunnsproblemer bør løses av myndigheter, ikke bedrifter.', 'Tenk på eksempler der profittmaksimering har ført til negative samfunnskonsekvenser — og omvendt.'],
        solution: 'Friedmans syn (aksjonærmodellen): Bedriftens eneste ansvar er å skape profitt for eierne innenfor lovens rammer. Samfunnsproblemer bør løses av myndighetene, ikke bedrifter. Fordel: Tydelig ansvarsdeling. Ulempe: Ignorerer at bedrifter kan påvirke samfunnet negativt uten å bryte loven (eksempel: tobakksindustrien markedsførte lovlig til barn i utviklingsland). Carrolls pyramide og interessentmodellen: Bedriften har ansvar overfor alle interessenter — ikke bare aksjonærer. CSR inkluderer etisk ansvar utover det juridiske. Fordel: Mer helhetlig, langsiktig verdiskaping. Ulempe: Vanskeligere å måle og prioritere. I dag er konsensus at Friedmans syn er utilstrekkelig — klimakrisen, ulikhet og globaliseringens utfordringer krever at bedrifter tar et bredere ansvar. Åpenhetsloven og CSRD representerer en formalisering av denne utviklingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.4

- **CSR** (Corporate Social Responsibility) er bedriftens ansvar for sin påvirkning på samfunn, miljø og interessenter.
- **Carrolls pyramide** har fire nivåer: økonomisk, juridisk, etisk og filantropisk ansvar.
- **Interessentmodellen** identifiserer alle grupper som påvirker eller påvirkes av bedriften. En **makt/interesse-matrise** hjelper med å prioritere.
- **Strategisk CSR** er integrert i bedriftens kjernevirksomhet og skaper verdi for både bedrift og samfunn.
- **Åpenhetsloven** (2022) pålegger større norske bedrifter aktsomhetsvurderinger for menneskerettigheter og arbeidsforhold.
- **CSRD** og **GRI** er rammeverk for bærekraftsrapportering som gir standardiserte krav til hva og hvordan bedrifter skal rapportere.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'CSR (Corporate Social Responsibility)', definition: 'Bedriftens ansvar for sin påvirkning på samfunn, miljø og interessenter utover lovkrav.' },
    { term: 'Carrolls CSR-pyramide', definition: 'Modell med fire nivåer: økonomisk, juridisk, etisk og filantropisk ansvar.' },
    { term: 'Interessentmodellen', definition: 'Modell som identifiserer alle grupper som påvirker eller påvirkes av bedriftens virksomhet.' },
    { term: 'Åpenhetsloven', definition: 'Norsk lov (2022) som krever aktsomhetsvurderinger for menneskerettigheter og arbeidsforhold i virksomhet og leverandørkjede.' },
  ],
};

// ============================================================================
// KAPITTEL 4.5: FNs bærekraftsmål og forretning
// ============================================================================

export const CHAPTER_ENTREBED_2_4_5: TextbookChapter = {
  id: 'entrebed-2-4-5',
  courseId: 'entrebed-2',
  chapterNumber: '4.5',
  title: 'FNs bærekraftsmål og forretning',
  description: 'Hvordan bedrifter kan koble forretningsstrategi til FNs bærekraftsmål (SDG-ene), vesentlighetsanalyse og bærekraftig forretningsutvikling.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere korleis FNs berekraftsmål kan koplast til forretningsutvikling',
    'drøfte korleis berekraft kan integrerast i forretningsmodellar og strategiar',
  ],
  content: [
    {
      id: 'eb2-4-5-intro',
      type: 'text',
      content: `## FNs bærekraftsmål — et felles veikart

I 2015 vedtok FNs 193 medlemsland **17 bærekraftsmål** (Sustainable Development Goals / SDG-ene) som skal nås innen 2030. Målene dekker alt fra fattigdomsbekjempelse og god helse til ren energi, anstendig arbeid og klimatiltak.

Selv om bærekraftsmålene er rettet mot land og myndigheter, har næringslivet en avgjørende rolle i å nå dem. FN anslår at det trengs investeringer på 5–7 billioner USD årlig for å nå målene — langt mer enn offentlige budsjetter kan dekke. Bedrifter er derfor uunnværlige partnere.

For entreprenører er bærekraftsmålene også en **mulighetsguide**: hvert mål representerer et massivt uløst behov — og der det finnes uløste behov, finnes det forretningsmuligheter. Bedrifter som kobler strategien sin til bærekraftsmålene, kan tiltrekke investorer, kunder og talent som deler det samme engasjementet.

**I dette kapittelet skal du lære:**
- Hva FNs 17 bærekraftsmål er og hvorfor de er relevante for næringslivet
- Hvordan bedrifter kan velge hvilke mål de skal prioritere
- Hva en vesentlighetsanalyse er
- Hvordan man kobler forretningsstrategi til SDG-ene i praksis`,
    },
    {
      id: 'eb2-4-5-def-1',
      type: 'definition',
      title: 'FNs bærekraftsmål (SDG-ene)',
      content: `**FNs 17 bærekraftsmål** (Sustainable Development Goals / SDG-ene) er en global plan vedtatt i 2015 for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030.

**De 17 målene:**
1. Utrydde fattigdom
2. Utrydde sult
3. God helse og livskvalitet
4. God utdanning
5. Likestilling mellom kjønnene
6. Rent vann og gode sanitærforhold
7. Ren energi til alle
8. Anstendig arbeid og økonomisk vekst
9. Industri, innovasjon og infrastruktur
10. Mindre ulikhet
11. Bærekraftige byer og lokalsamfunn
12. Ansvarlig forbruk og produksjon
13. Stoppe klimaendringene
14. Livet i havet
15. Livet på land
16. Fred, rettferdighet og velfungerende institusjoner
17. Samarbeid for å nå målene

**Hvert mål har delmål og indikatorer** — totalt 169 delmål og 231 indikatorer som gjør det mulig å måle fremgang konkret.

**For bedrifter er SDG-ene relevante fordi de:**
- Identifiserer verdens største uløste behov (= forretningsmuligheter)
- Gir et felles språk for å kommunisere bærekraftsarbeid til kunder, investorer og ansatte
- Hjelper bedrifter med å prioritere innsats og måle effekt
- Kobler bedriftens strategi til et globalt rammeverk som gir legitimitet`,
    },
    {
      id: 'eb2-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Koble forretningsstrategi til SDG-ene',
      problem: 'Hvordan kan en norsk teknologibedrift som utvikler app-baserte helseløsninger koble sin strategi til relevante bærekraftsmål?',
      solution: `**Bedrift:** Norsk oppstartsbedrift som har utviklet en app for digital psykisk helsehjelp.

**Primære SDG-er:**

**Mål 3: God helse og livskvalitet**
- Direkte kobling: Appen gir tilgang til psykisk helsehjelp for mennesker som ellers ikke ville fått det
- Delmål 3.4: Redusere for tidlig dødelighet av ikke-smittsomme sykdommer og fremme mental helse
- Tiltak: Gratis basisversjon for å sikre bred tilgang

**Mål 10: Mindre ulikhet**
- Kobling: Digital helsehjelp reduserer ulikhet i tilgang — uavhengig av bosted, økonomi og ventelister
- Tiltak: Tilpasset innhold for ulike språk og kulturelle bakgrunner

**Sekundære SDG-er:**

**Mål 8: Anstendig arbeid og økonomisk vekst**
- Kobling: Bedre psykisk helse reduserer sykefravær og øker produktivitet
- Tiltak: Bedriftsversjon som tilbys til arbeidsgivere

**Mål 9: Industri, innovasjon og infrastruktur**
- Kobling: Innovativ bruk av teknologi for å løse et samfunnsproblem
- Tiltak: Bruk av AI for personalisert behandling

**Strategisk kobling:**
- Bedriften rapporterer årlig mot SDG-indikatorene (antall brukere, geografisk spredning, brukerundersøkelser)
- SDG-koblingen brukes i kommunikasjon med investorer, offentlige innkjøpere og partnere
- Tydelig kobling mellom forretningsmodell og samfunnseffekt styrker merkevaren`,
    },
    {
      id: 'eb2-4-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-5-oppg-1',
        number: '4.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange bærekraftsmål har FN vedtatt, og hvilket år skal de nås?',
        options: [
          { id: 'a', text: '17 mål som skal nås innen 2030', isCorrect: true },
          { id: 'b', text: '10 mål som skal nås innen 2025', isCorrect: false },
          { id: 'c', text: '20 mål som skal nås innen 2050', isCorrect: false },
          { id: 'd', text: '15 mål som skal nås innen 2035', isCorrect: false },
        ],
        solution: 'FN vedtok 17 bærekraftsmål (SDG-ene) i 2015, med frist for å nå dem innen 2030. Målene har totalt 169 delmål og 231 indikatorer. De dekker et bredt spekter fra fattigdomsbekjempelse til klimatiltak og rettferdige institusjoner.',
      },
    },
    {
      id: 'eb2-4-5-def-2',
      type: 'definition',
      title: 'Vesentlighetsanalyse (materialitetsanalyse)',
      content: `En **vesentlighetsanalyse** (materialitetsanalyse) er en systematisk prosess der bedriften identifiserer og prioriterer de bærekraftstemaene som er mest relevante — både for bedriftens forretning og for dens interessenter.

**Hvorfor vesentlighetsanalyse?**
Ingen bedrift kan jobbe med alle 17 bærekraftsmål like intensivt. En vesentlighetsanalyse hjelper bedriften med å velge de 3–5 målene der den kan gjøre størst forskjell og som er mest relevante for virksomheten.

**Steg i en vesentlighetsanalyse:**

**1. Identifiser potensielle temaer**
List opp alle bærekraftstemaer som kan være relevante for bedriften — basert på bransje, verdikjede, geografi og interessenters forventninger.

**2. Vurder fra to perspektiver (dobbel vesentlighet)**
- *Innside-ut:* Hvordan påvirker bedriften miljø og samfunn? (Impact)
- *Utside-inn:* Hvordan påvirker bærekraftstemaer bedriftens økonomi? (Finansiell risiko/mulighet)

**3. Involver interessentene**
Spør kunder, ansatte, investorer, leverandører og lokalsamfunn om hva de mener er viktigst.

**4. Prioriter og visualiser**
Plasser temaene i en vesentlighetsmatrise med to akser: «Viktighet for interessenter» og «Viktighet for bedriften». Temaer øverst til høyre er de mest vesentlige.

**5. Integrer i strategi**
De mest vesentlige temaene kobles til konkrete mål, tiltak og KPI-er.`,
    },
    {
      id: 'eb2-4-5-example-2',
      type: 'example',
      title: 'Eksempel: Vesentlighetsanalyse for en matprodusent',
      problem: 'Gjennomfør en forenklet vesentlighetsanalyse for en norsk produsent av ferdigmat og identifiser de mest relevante bærekraftsmålene.',
      solution: `**Steg 1: Identifisere relevante temaer**
Basert på verdikjeden (råvarer → produksjon → emballering → distribusjon → forbruk):
- Klimagassutslipp fra produksjon og transport
- Matsvinn i produksjon og hos forbruker
- Emballasje og plasthåndtering
- Dyrevelferd og bærekraftig landbruk
- Ansattes arbeidsmiljø og helse
- Ernæring og folkehelse
- Leverandørkjede og rettferdig handel
- Vannforbruk i produksjonen

**Steg 2: Dobbel vesentlighet**
*Innside-ut (bedriftens påvirkning):* Størst negativ påvirkning er klimagassutslipp, emballasje og matsvinn.
*Utside-inn (påvirkning på bedriften):* Størst finansiell risiko er råvarepriser (påvirket av klima), regulering av emballasje og endrede forbrukervaner.

**Steg 3: Prioritering (mest vesentlige temaer)**
1. Matsvinn (høy impact + høy forretningsrelevans)
2. Emballasje og plastreduksjon (høy impact + regulatorisk risiko)
3. Klimagassutslipp (høy impact + omdømmerisiko)
4. Ernæring og folkehelse (moderat impact + stor markedsmulighet)

**Steg 4: Koble til SDG-er**
- SDG 12: Ansvarlig forbruk og produksjon (matsvinn, emballasje)
- SDG 13: Stoppe klimaendringene (utslippsreduksjon)
- SDG 2: Utrydde sult (ernæring, matsvinn)
- SDG 3: God helse og livskvalitet (sunn og næringsrik mat)`,
    },
    {
      id: 'eb2-4-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-5-oppg-2',
        number: '4.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er formålet med en vesentlighetsanalyse i bærekraftsarbeid?',
        options: [
          { id: 'a', text: 'Å beregne bedriftens totale klimagassutslipp', isCorrect: false },
          { id: 'b', text: 'Å identifisere og prioritere de bærekraftstemaene som er mest relevante for bedriften og dens interessenter', isCorrect: true },
          { id: 'c', text: 'Å rangere FNs 17 bærekraftsmål fra viktigst til minst viktig', isCorrect: false },
          { id: 'd', text: 'Å sammenligne bedriftens bærekraftsprestasjon med konkurrentene', isCorrect: false },
        ],
        solution: 'En vesentlighetsanalyse hjelper bedriften med å identifisere og prioritere de bærekraftstemaene som er mest relevante — vurdert fra to perspektiver: bedriftens påvirkning på miljø/samfunn (innside-ut) og bærekraftstemaers påvirkning på bedriftens økonomi (utside-inn). Resultatet er at bedriften kan fokusere ressursene på de 3–5 temaene der den kan gjøre størst forskjell.',
      },
    },
    {
      id: 'eb2-4-5-text-1',
      type: 'text',
      content: `## Fra SDG-er til strategi — fem steg

SDG Compass, utviklet av GRI, UN Global Compact og WBCSD, gir bedrifter en steg-for-steg-guide for å integrere bærekraftsmålene i forretningsstrategien:

### 1. Forstå bærekraftsmålene
Sett deg inn i de 17 målene og deres delmål. Forstå hva de betyr og hvordan de er relevante for din bransje og verdikjede.

### 2. Definer prioriteringer
Gjennomfør en vesentlighetsanalyse for å identifisere hvilke mål som er mest relevante for bedriften — både i form av impact og forretningsmuligheter.

### 3. Sett mål
Formuler konkrete, tidsbestemte mål knyttet til de prioriterte SDG-ene. Målene bør være ambisiøse nok til å drive reell endring, men realistiske nok til å være gjennomførbare. Bruk delmålene og indikatorene som inspirasjon.

### 4. Integrer i virksomheten
Bærekraftsmålene må bli en del av daglig drift — ikke bare en rapport. Integrer dem i forretningsplanen, produktutviklingen, innkjøpspolitikken, HR-strategien og markedsføringen.

### 5. Rapporter og kommuniser
Mål fremgangen, rapporter transparent og kommuniser resultatene til interessentene. Bruk anerkjente rammeverk som GRI eller ESRS.

### Vanlige feil ved SDG-kobling
- **SDG-vasking:** Bedriften bruker SDG-logoene i markedsføring uten å faktisk bidra til målene
- **Kirsebærplukking:** Bedriften velger de «enkleste» målene i stedet for de mest relevante
- **Mangel på målbarhet:** Bedriften kobler seg til mål uten å sette konkrete delmål og indikatorer`,
    },
    {
      id: 'eb2-4-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-5-oppg-3',
        number: '4.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en bransje eller bedriftstype (f.eks. byggebransjen, fiskeoppdrett, IT-bransjen, restaurantbransjen). Identifiser de tre mest relevante bærekraftsmålene for denne bransjen, og forklar hvorfor akkurat disse målene er viktigst. Beskriv minst ett konkret tiltak bedriften kan gjennomføre for hvert mål.',
        hints: ['Tenk på hele verdikjeden: råvarer, produksjon, distribusjon, forbruk og avfall.', 'Vurder både negativ påvirkning (hva bransjen må redusere) og positiv påvirkning (hva bransjen kan bidra med).'],
        solution: 'Eksempel med byggebransjen: (1) SDG 11 Bærekraftige byer og lokalsamfunn — bransjen bygger bokstavelig talt byene våre. Tiltak: Passivhus-standard, grønne tak, universell utforming. (2) SDG 13 Stoppe klimaendringene — sementproduksjon står for 8 % av globale CO2-utslipp. Tiltak: Lavkarbonbetong, massivtre som alternativ, gjenbruk av byggematerialer. (3) SDG 12 Ansvarlig forbruk og produksjon — enorme mengder byggavfall. Tiltak: Sirkulær rivning (demontering fremfor riving), materialdatabank, standardiserte moduler for gjenbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-5-oppg-4',
        number: '4.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en forenklet vesentlighetsanalyse for din egen elevbedrift eller en fiktiv bedrift. (a) List opp minst 8 relevante bærekraftstemaer. (b) Vurder hvert tema fra dobbelt vesentlighetsperspektiv (innside-ut og utside-inn). (c) Velg de 3–4 mest vesentlige temaene og koble dem til konkrete SDG-er. (d) Foreslå ett SMART-mål for hvert prioritert tema.',
        hints: ['Bruk gjerne en tabell for å strukturere analysen.', 'Husk dobbel vesentlighet: Hvordan påvirker bedriften verden, og hvordan påvirker verden bedriften?'],
        solution: 'En god besvarelse gjennomfører systematisk alle fire steg. Eksempel for en fiktiv sykkelverksted-oppstart: (a) Temaer: klimagassutslipp, avfallshåndtering, kjemikaliebruk, ansattes arbeidsmiljø, inkludering, kundetilgang, leverandørkjede, lokal mobilitet. (b) Innside-ut: Størst impact på lokal mobilitet og avfallshåndtering. Utside-inn: Størst risiko fra leverandørkjede (metaller) og regulering. (c) Prioritert: Lokal mobilitet → SDG 11, Avfall → SDG 12, Inkludering → SDG 10. (d) SMART-mål: «Reparere 500 sykler innen desember 2026 for å redusere nysalg av sykler i lokalområdet» (SDG 12).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-5-oppg-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar begrepet «SDG-vasking» og gi et eksempel. Hva kan bedrifter gjøre for å unngå SDG-vasking og sikre at koblingen til bærekraftsmålene er troverdig?',
        hints: ['SDG-vasking er lignende grønnvasking, men spesifikt knyttet til bærekraftsmålene.', 'Troverdighet handler om målbarhet, åpenhet og konkrete tiltak.'],
        solution: 'SDG-vasking oppstår når bedrifter bruker FNs bærekraftsmål-logoer i markedsføring og rapporter uten at det finnes reelle, målbare tiltak bak. Eksempel: Et oljeselskap som hevder å bidra til SDG 13 (Stoppe klimaendringene) bare fordi det har investert en liten brøkdel av budsjettet i fornybar energi, mens kjernevirksomheten fortsatt er olje og gass. For å unngå SDG-vasking bør bedrifter: (1) Gjennomføre en reell vesentlighetsanalyse for å velge relevante mål. (2) Sette konkrete, målbare delmål med tidsfrister. (3) Rapportere transparent om fremgang — inkludert der man ikke har nådd målene. (4) Få ekstern verifisering av rapporteringen. (5) Erkjenne negativ påvirkning i tillegg til positiv — troverdighet krever ærlighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-4-5-oppg-6',
        number: '4.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «FNs bærekraftsmål er for ambisiøse til å nås innen 2030 — de er fine idealer, men urealistiske i praksis.» Vurder argumenter for og mot, og diskuter næringslivets rolle i å bidra til målene.',
        hints: ['Se på status for måloppnåelse — hvor langt har verden kommet?', 'Vurder om det er bedre å ha ambisiøse mål man nesten når, enn beskjedne mål man når enkelt.'],
        solution: 'For påstanden: Halvtidsrapporten (2023) viste at kun 15 % av delmålene var i rute. COVID-19, krig og økonomisk krise har satt fremgangen tilbake. Mange mål krever politisk vilje som mangler. Mot påstanden: Målene har mobilisert enorm oppmerksomhet og ressurser. Selv om ikke alle mål nås fullt ut, har retningen vært riktig — fattigdommen er redusert, tilgang til utdanning har økt, fornybar energi har eksplodert. Ambisiøse mål inspirerer til handling som beskjedne mål aldri ville utløst. Næringslivets rolle: Bedrifter er avgjørende fordi de kontrollerer ressurser, innovasjon og arbeidsplasser. Bærekraftsmålene representerer markedsmuligheter verdt billioner. De mest fremsynte bedriftene (som Ørsted, som gikk fra kull til havvind) viser at SDG-ene kan drive lønnsom omstilling. Men næringslivet kan ikke gjøre det alene — det kreves samarbeid mellom myndigheter, sivilsamfunn og bedrifter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-4-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.5

- **FNs 17 bærekraftsmål (SDG-ene)** er en global plan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030.
- For bedrifter representerer SDG-ene både et **ansvar** og en **forretningsmulighet** — hvert mål identifiserer et massivt uløst behov.
- En **vesentlighetsanalyse** hjelper bedriften med å velge de 3–5 målene der den kan gjøre størst forskjell, vurdert fra dobbelt vesentlighetsperspektiv.
- **SDG Compass** gir en steg-for-steg-guide: forstå målene, definer prioriteringer, sett mål, integrer i virksomheten, rapporter og kommuniser.
- **SDG-vasking** oppstår når bedrifter bruker SDG-logoer uten reelle tiltak — troverdighet krever målbarhet, åpenhet og konkrete resultater.
- Næringslivet er en uunnværlig partner for å nå bærekraftsmålene — men det krever reell integrering i strategi og drift, ikke bare fine ord i årsrapporten.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'FNs bærekraftsmål (SDG-ene)', definition: '17 globale mål vedtatt i 2015 for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringer innen 2030.' },
    { term: 'Vesentlighetsanalyse', definition: 'Systematisk prosess for å identifisere og prioritere de bærekraftstemaene som er mest relevante for bedriften og dens interessenter.' },
    { term: 'SDG Compass', definition: 'Guide utviklet av GRI, UN Global Compact og WBCSD for å integrere bærekraftsmålene i forretningsstrategien.' },
    { term: 'SDG-vasking', definition: 'Når bedrifter bruker SDG-logoer i markedsføring uten reelle, målbare tiltak bak.' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const ENTREBED_2_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_ENTREBED_2_4_1,
  CHAPTER_ENTREBED_2_4_2,
  CHAPTER_ENTREBED_2_4_3,
  CHAPTER_ENTREBED_2_4_4,
  CHAPTER_ENTREBED_2_4_5,
];
