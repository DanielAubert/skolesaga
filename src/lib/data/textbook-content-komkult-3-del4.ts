/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 3 (VG3) - Del 4: Mediekritikk og kildekritikk
 *
 * Kapittel 4.1–4.5
 *
 * LK20-kompetansemål:
 * - analysere og vurdere ulike medietekster kritisk
 * - vurdere kilders troverdighet og relevans
 * - drøfte utfordringer knyttet til desinformasjon og algoritmestyrt mediepåvirkning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Kritisk medieanalyse
// ============================================================================

export const CHAPTER_KOMKULT3_4_1: TextbookChapter = {
  id: 'komkult3-4-1',
  courseId: 'komkult-3',
  chapterNumber: '4.1',
  title: 'Kritisk medieanalyse',
  description: 'Medietekstanalyse, vinkling, framing og dagsordenfunksjonen. Du lærer å analysere hvordan medier konstruerer virkelighetsbilder gjennom bevisste og ubevisste valg.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere og vurdere ulike medietekster kritisk',
  ],
  keyTerms: [
    { term: 'Medietekstanalyse', definition: 'Systematisk undersøkelse av hvordan et medieinnhold er bygget opp, hvilke virkemidler som brukes, og hvilke budskap som formidles eksplisitt og implisitt.' },
    { term: 'Vinkling', definition: 'Den bestemte innfallsvinkelen en journalist eller redaksjon velger når de dekker en sak, som påvirker hvilke sider av saken som fremheves eller tones ned.' },
    { term: 'Framing', definition: 'Måten en sak rammes inn på i mediene, som styrer hvordan publikum oppfatter og forstår saken. Rammene bestemmer hva som er relevant, hvem som er ansvarlig, og hvilke løsninger som virker naturlige.' },
    { term: 'Dagsordenfunksjonen', definition: 'Medienes evne til å påvirke hva folk tenker på og diskuterer, ved å velge hvilke saker som får oppmerksomhet og hvor mye plass de får.' },
    { term: 'Redaksjonell vinkling', definition: 'Den overordnede tilnærmingen et mediehus har til dekningen av en sak, påvirket av redaksjonens verdier, prioriteringer og målgruppe.' },
  ],
  content: [
    {
      id: 'kk3-4-1-intro',
      type: 'text',
      content: `## Hvordan mediene former virkelighetsbildet

Mediene presenterer aldri virkeligheten som den «er». Enhver nyhetssak, dokumentar eller artikkel er resultatet av en rekke valg: Hva skal dekkes? Hvem får uttale seg? Hvilket perspektiv velges? Hvilke bilder brukes?

I dette kapittelet skal du lære:
- Hva medietekstanalyse innebærer og hvordan du gjennomfører den
- Hvordan vinkling og framing påvirker vår forståelse av saker
- Hva dagsordenfunksjonen betyr for demokratiet
- Hvordan du kan bli en mer kritisk mediebruker`,
    },
    {
      id: 'kk3-4-1-def-1',
      type: 'definition',
      title: 'Medietekstanalyse',
      content: `**Medietekstanalyse** er en systematisk metode for å undersøke hvordan et medieinnhold er konstruert. Analysen ser på innhold, form og kontekst: Hva sies? Hvordan sies det? I hvilken sammenheng formidles det? Målet er å avdekke både eksplisitte budskap (det som sies direkte) og implisitte budskap (det som ligger mellom linjene).`,
    },
    {
      id: 'kk3-4-1-text-1',
      type: 'text',
      content: `### Sentrale spørsmål i medietekstanalyse

Når du analyserer en medietekst, bør du stille deg følgende spørsmål:

**Innhold og budskap**
- Hva er hovedbudskapet?
- Hvilke fakta presenteres, og hvilke utelates?
- Hvem kommer til orde, og hvem blir ikke hørt?
- Hvilke kilder brukes, og er de troverdige?

**Form og virkemidler**
- Hvilken sjanger er teksten? (nyhetssak, kommentar, feature, reklame)
- Hvilke språklige virkemidler brukes? (metaforer, ladede ord, retoriske spørsmål)
- Hvilke visuelle virkemidler brukes? (bilder, grafikk, layout)
- Hvordan er teksten strukturert?

**Kontekst**
- Hvem er avsender, og hva er avsenderens formål?
- Hvem er målgruppen?
- I hvilken samfunnskontekst publiseres teksten?
- Hvordan dekker andre medier den samme saken?`,
    },
    {
      id: 'kk3-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av en nyhetsoverskrift',
      problem: 'To ulike aviser dekker den samme hendelsen – en demonstrasjon mot regjeringens klimapolitikk. Avis A skriver: «Tusenvis i klimamarsj: – Vi krever handling nå!» Avis B skriver: «Klimaaktivister lammet trafikken i hovedstaden.» Analyser forskjellene.',
      solution: `**Avis A – vinklingen:**
- Fremhever antall deltakere («tusenvis»), som gir inntrykk av bred folkelig støtte
- Bruker ordet «klimamarsj», som har positiv valør (fredelig, demokratisk)
- Sitatet «Vi krever handling nå!» gir demonstrantene en stemme og legitimitet

**Avis B – vinklingen:**
- Fokuserer på konsekvensene for andre (trafikken ble lammet)
- Bruker ordet «aktivister», som kan oppleves mer negativt enn «demonstranter»
- Ordet «lammet» er et sterkt, negativt ladet verb som fremhever forstyrrelsene

**Konklusjon:** Begge overskriftene beskriver samme hendelse, men formidler svært ulike inntrykk. Avis A rammet inn saken som demokratisk engasjement, mens Avis B rammet den inn som et ordensproblem. Ingen av versjonene er «usann», men vinklingen styrer leserens oppfatning.`,
    },
    {
      id: 'kk3-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        task: 'Hva handler medietekstanalyse om?',
        options: [
          { id: 'a', text: 'Å telle antall ord i en nyhetssak', isCorrect: false },
          { id: 'b', text: 'Å systematisk undersøke innhold, form og kontekst i medieinnhold', isCorrect: true },
          { id: 'c', text: 'Å vurdere om journalisten har gode skriveferdigheter', isCorrect: false },
          { id: 'd', text: 'Å sammenligne papiravis og nettavis', isCorrect: false },
        ],
        solution: 'Medietekstanalyse handler om å systematisk undersøke hvordan et medieinnhold er konstruert – hva som sies (innhold), hvordan det sies (form) og i hvilken sammenheng det formidles (kontekst).',
      },
    },
    {
      id: 'kk3-4-1-def-2',
      type: 'definition',
      title: 'Vinkling og framing',
      content: `**Vinkling** handler om hvilken innfallsvinkel mediene velger når de dekker en sak. Valg av vinkling bestemmer hvilke aspekter av saken som fremheves og hvilke som tones ned.

**Framing** (innramming) er et bredere begrep som beskriver hvordan mediene «rammer inn» en sak. Rammeverket bestemmer hvordan vi forstår saken: hva problemet er, hvem som er ansvarlig, og hvilke løsninger som virker naturlige. Begrepet ble utviklet av medieforskerne Erving Goffman og Robert Entman.`,
    },
    {
      id: 'kk3-4-1-text-2',
      type: 'text',
      content: `### Dagsordenfunksjonen

Medieforskerne Maxwell McCombs og Donald Shaw introduserte begrepet **dagsordenfunksjonen** (agenda-setting) i 1972. Teorien hevder at mediene ikke nødvendigvis forteller oss *hva* vi skal mene, men påvirker *hva vi tenker på*.

**Hvordan virker dagsordenfunksjonen?**
- Saker som får mye medieoppmerksomhet, oppleves som viktigere av publikum
- Saker som ikke dekkes, forblir «usynlige» i den offentlige debatten
- Rekkefølge og plassering signaliserer viktighet (forsiden vs. side 12)
- Gjentatt dekning over tid former oppfatningen av hva som er «viktige saker»

**Hvem setter dagsorden?**
- Redaksjoner og redaktører velger hvilke saker som prioriteres
- Politikere og maktpersoner forsøker å sette dagsorden gjennom mediestrategier
- Interesseorganisasjoner og PR-byråer arbeider for å få sine saker på dagsorden
- Sosiale medier har endret dagsordenfunksjonen – enkeltpersoner kan nå løfte saker som tradisjonelle medier har oversett

**Dagsordenfunksjonens betydning for demokratiet:**
En informert offentlighet er en forutsetning for et fungerende demokrati. Hvis mediene systematisk overser viktige temaer, eller prioriterer underholdning fremfor samfunnskritisk journalistikk, svekkes demokratiet.`,
    },
    {
      id: 'kk3-4-1-example-2',
      type: 'example',
      title: 'Eksempel: Dagsordenfunksjonen i praksis',
      content: `**Situasjon:** I en valgkamp får innvandringspolitikk dominerende mediedekning, mens klimapolitikk, utdanning og helse får mindre plass.

**Konsekvens:** Velgerundersøkelser viser at innvandring klatrer på listen over «de viktigste sakene» for velgerne – ikke nødvendigvis fordi problemet har blitt større, men fordi mediedekningen gjør det mer synlig.

**Analyse:** Mediene har brukt sin dagsordenfunksjon til å definere innvandring som den viktigste saken. Partier som har innvandring som kjernesak får mer oppmerksomhet, mens partier med andre saker faller i bakgrunnen.

**Refleksjon:** Det betyr ikke at mediene bevisst manipulerer – men summen av redaksjonelle valg (hva er «godt stoff»?, hva skaper klikk?) påvirker den offentlige debatten og demokratiske prosesser.`,
    },
    {
      id: 'kk3-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-1-ex-2',
        number: '4.1.2',
        type: 'classic',
        task: 'Velg en aktuell nyhetssak og finn to ulike nyhetsartikler om den. Analyser hvordan de to artiklene vinkler saken forskjellig. Se på overskrift, kildebruk, ordvalg og bildebruk.',
        hints: ['Sammenlign for eksempel en tabloidavis og en allmennkringkaster', 'Vær oppmerksom på hvilke sider av saken som fremheves i hver artikkel'],
        solution: 'Et godt svar inneholder: 1) Beskrivelse av saken og de to artiklene, 2) Analyse av overskrifter (ordvalg, vinkling), 3) Sammenligning av kildebruk (hvem uttaler seg?), 4) Vurdering av språklige virkemidler (ladede ord, metaforer), 5) Analyse av bildebruk (hvilke bilder er valgt og hvorfor?), 6) Konklusjon om hvordan de ulike vinklingene påvirker leserens oppfatning.',
      },
    },
    {
      id: 'kk3-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-1-ex-3',
        number: '4.1.3',
        type: 'multiple-choice',
        task: 'Hva innebærer medienes dagsordenfunksjon?',
        options: [
          { id: 'a', text: 'Mediene bestemmer hva folk skal mene om politiske saker', isCorrect: false },
          { id: 'b', text: 'Mediene påvirker hva folk tenker på ved å velge hvilke saker som får oppmerksomhet', isCorrect: true },
          { id: 'c', text: 'Mediene lager en liste over saker politikerne må diskutere i Stortinget', isCorrect: false },
          { id: 'd', text: 'Mediene samarbeider med regjeringen om å bestemme nyhetsagendaen', isCorrect: false },
        ],
        solution: 'Dagsordenfunksjonen innebærer at mediene påvirker hva folk tenker på og opplever som viktige saker, gjennom å velge hvilke temaer som får oppmerksomhet og hvor mye plass de får.',
      },
    },
    {
      id: 'kk3-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Medietekstanalyse** undersøker innhold, form og kontekst i medieinnhold
- **Vinkling** handler om hvilken innfallsvinkel som velges – det påvirker hvilke sider av en sak som fremheves
- **Framing** er hvordan mediene rammer inn en sak, noe som styrer publikums forståelse
- **Dagsordenfunksjonen** betyr at mediene påvirker hva vi tenker på, mer enn hva vi mener
- Kritisk medieanalyse er en viktig demokratisk ferdighet i informasjonssamfunnet`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan dagsordenfunksjonen har endret seg med fremveksten av sosiale medier. Har enkeltpersoner fått større makt til å sette dagsorden? Begrunn svaret ditt med eksempler.',
        hints: ['Tenk på virale hashtags og kampanjer', 'Vurder også om algoritmene påvirker hvilke saker som blir synlige'],
        solution: 'Et godt svar diskuterer: Tradisjonelt hadde redaktører stor makt over dagsorden (portvaktfunksjonen). Sosiale medier har delvis demokratisert dette: Enkelthendelser kan bli virale uten at tradisjonelle medier dekker dem først (f.eks. #MeToo). Samtidig har algoritmene til plattformene overtatt deler av portvaktfunksjonen – de bestemmer hva som vises i feeden din basert på engasjement, ikke nyhetsverdi. Sensasjonelt innhold kan dermed dominere over viktig, men «kjedelig» samfunnsstoff. Konklusjonen bør nyansere: Enkeltpersoner har fått større mulighet til å løfte saker, men algoritmene skaper nye former for usynliggjøring.',
      },
    },
    {
      id: 'kk3-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-1-ex-5',
        number: '4.1.5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En avis dekker en streik med overskriften «Fagforeningsboss truer med kaos». Hvilken framing brukes her?',
        options: [
          { id: 'a', text: 'Streiken rammes inn som en demokratisk rettighet og forhandlingsstrategi', isCorrect: false },
          { id: 'b', text: 'Streiken rammes inn som en konflikt der fagforeningslederen er en trussel mot orden og stabilitet', isCorrect: true },
          { id: 'c', text: 'Streiken rammes inn som et saklig arbeidstvistspørsmål', isCorrect: false },
          { id: 'd', text: 'Streiken rammes inn som et resultat av dårlig politisk ledelse', isCorrect: false },
        ],
        solution: 'Overskriften rammer inn streiken som en trussel mot orden. Ordet «boss» har negative assosiasjoner (maktmisbruk), «truer» gjør fagforeningslederen til aggressor, og «kaos» signaliserer at konsekvensene er farlige. En alternativ framing kunne vært «Fagforeningen kjemper for bedre vilkår» – same sak, helt annet inntrykk.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Kildekritikk i praksis
// ============================================================================

export const CHAPTER_KOMKULT3_4_2: TextbookChapter = {
  id: 'komkult3-4-2',
  courseId: 'komkult-3',
  chapterNumber: '4.2',
  title: 'Kildekritikk i praksis',
  description: 'TONE-kriteriene, vurdering av troverdighet, og skillet mellom primær- og sekundærkilder. Du lærer praktiske metoder for å vurdere om en kilde er pålitelig.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere kilders troverdighet og relevans',
  ],
  keyTerms: [
    { term: 'Kildekritikk', definition: 'Systematisk vurdering av kilders troverdighet, relevans og kvalitet. En grunnleggende metode for å skille pålitelig informasjon fra upålitelig.' },
    { term: 'TONE-kriteriene', definition: 'Fire kriterier for kildekritikk: Troverdighet (er kilden pålitelig?), Objektivitet (er fremstillingen balansert?), Nøyaktighet (er informasjonen korrekt?) og Egnethet (er kilden relevant for formålet?).' },
    { term: 'Primærkilde', definition: 'En førstehåndskilde som gir direkte tilgang til hendelsen eller informasjonen, for eksempel et originalt forskningsarbeid, øyevitneskildring eller offentlig dokument.' },
    { term: 'Sekundærkilde', definition: 'En kilde som gjengir, tolker eller bygger på primærkilder, for eksempel en lærebok, nyhetsartikkel eller oppslagsverk.' },
    { term: 'Tendens', definition: 'En kildes forutinntatthet eller skjevhet, som kan skyldes avsenderens interesser, ideologi, finansiering eller formål.' },
  ],
  content: [
    {
      id: 'kk3-4-2-intro',
      type: 'text',
      content: `## Å vurdere kilders pålitelighet

I en verden med enorme mengder informasjon er kildekritikk en av de viktigste ferdighetene du kan ha. Hvem står bak informasjonen? Hva er formålet? Er opplysningene korrekte? Disse spørsmålene må stilles hver gang du bruker en kilde – enten det er til en skoleoppgave, i en politisk debatt eller når du leser nyheter.

I dette kapittelet skal du lære:
- Hva kildekritikk innebærer og hvorfor det er viktig
- Hvordan du bruker TONE-kriteriene til å vurdere kilder
- Forskjellen mellom primær- og sekundærkilder
- Praktiske metoder for å avsløre upålitelige kilder`,
    },
    {
      id: 'kk3-4-2-def-1',
      type: 'definition',
      title: 'Kildekritikk',
      content: `**Kildekritikk** er den systematiske vurderingen av kilders troverdighet, relevans og kvalitet. Begrepet stammer fra historiefaget, der forskere tidlig utviklet metoder for å vurdere om gamle dokumenter var ekte og pålitelige. I dag er kildekritikk like viktig i møte med nyheter, sosiale medier, nettsider og akademiske tekster.`,
    },
    {
      id: 'kk3-4-2-text-1',
      type: 'text',
      content: `### TONE-kriteriene

TONE er et hjelpemiddel for systematisk kildekritikk. Bokstavene står for:

**T – Troverdighet**
- Hvem er avsender? Hva er personens eller organisasjonens bakgrunn og kompetanse?
- Har avsenderen relevant fagkunnskap?
- Er kilden anerkjent på feltet?
- Finnes det interessekonflikter som kan påvirke fremstillingen?

**O – Objektivitet**
- Er fremstillingen balansert, eller fremmes et bestemt synspunkt?
- Presenteres ulike sider av saken?
- Er språket nøytralt, eller brukes ladede og emosjonelle ord?
- Skilles det tydelig mellom fakta og meninger?

**N – Nøyaktighet**
- Er opplysningene korrekte og etterprøvbare?
- Oppgis kilder og referanser?
- Samsvarer informasjonen med andre pålitelige kilder?
- Er det faktafeil, overdrivelser eller forenklinger?

**E – Egnethet**
- Er kilden relevant for det du undersøker?
- Er informasjonen oppdatert nok?
- Er kilden på riktig nivå (faglig vs. populærvitenskapelig)?
- Dekker kilden temaet tilstrekkelig?`,
    },
    {
      id: 'kk3-4-2-example-1',
      type: 'example',
      title: 'Eksempel: TONE-kriteriene i bruk',
      problem: 'Du skal skrive en oppgave om klimaendringer og finner en artikkel på nettsiden til et oljeselskap som hevder at klimaendringene er overdrevet. Vurder kilden ved hjelp av TONE-kriteriene.',
      solution: `**T – Troverdighet:** Oljeselskapet har fagkompetanse på energi, men har en sterk økonomisk interesse i å tone ned klimatrusselen. Dette svekker troverdigheten i denne sammenhengen.

**O – Objektivitet:** Artikkelen presenterer sannsynligvis ett perspektiv og er ikke balansert. Oljeselskapets forretningsmodell avhenger av fossilt brensel, noe som gir en klar tendens.

**N – Nøyaktighet:** Enkeltpåstander kan være korrekte, men kan være tatt ut av sammenheng eller presentere et ufullstendig bilde. Mangler det referanser til uavhengig forskning?

**E – Egnethet:** Kilden er ikke egnet som hovedkilde i en oppgave om klimavitenskap. Den kan derimot brukes som eksempel på hvordan næringsinteresser kommuniserer om klima.

**Konklusjon:** Kilden har lav troverdighet og objektivitet i denne sammenhengen. Bruk heller FNs klimapanel (IPCC), fagfellevurdert forskning eller anerkjente vitenskapelige institusjoner.`,
    },
    {
      id: 'kk3-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        task: 'Hva står bokstaven «O» for i TONE-kriteriene?',
        options: [
          { id: 'a', text: 'Originalitet – er kilden unik?', isCorrect: false },
          { id: 'b', text: 'Omfang – er kilden omfattende nok?', isCorrect: false },
          { id: 'c', text: 'Objektivitet – er fremstillingen balansert?', isCorrect: true },
          { id: 'd', text: 'Offentlighet – er kilden offentlig tilgjengelig?', isCorrect: false },
        ],
        solution: 'O står for Objektivitet og handler om hvorvidt kilden presenterer en balansert fremstilling. Man vurderer om ulike sider av saken presenteres, om språket er nøytralt, og om det skilles mellom fakta og meninger.',
      },
    },
    {
      id: 'kk3-4-2-def-2',
      type: 'definition',
      title: 'Primærkilder og sekundærkilder',
      content: `**Primærkilder** er førstehåndskilder som gir direkte tilgang til hendelser eller informasjon. Eksempler er originale forskningsartikler, statistikk fra offisielle registre, intervjuer med øyenvitner, historiske dokumenter, lovtekster og offentlige rapporter.

**Sekundærkilder** er kilder som gjengir, tolker eller bygger på primærkilder. Eksempler er lærebøker, nyhetsartikler, oppslagsverk, anmeldelser og populærvitenskapelige fremstillinger.

En tredje kategori er **tertiærkilder**, som sammenfatter sekundærkilder, for eksempel leksikon og bibliografier.`,
    },
    {
      id: 'kk3-4-2-text-2',
      type: 'text',
      content: `### Primærkilde vs. sekundærkilde – når brukes hva?

**Primærkilder** bør brukes når du:
- Trenger nøyaktige tall og data
- Vil sitere direkte fra originale tekster
- Analyserer et bestemt verk eller dokument
- Ønsker å unngå «stille post»-effekten der informasjon forvrenges gjennom flere ledd

**Sekundærkilder** er nyttige når du:
- Trenger en oversikt over et tema
- Vil se hvordan eksperter tolker primærmateriale
- Ikke har tilgang til primærkilden
- Trenger kontekst og bakgrunnsinformasjon

**Viktig:** En kilde kan være primær i én sammenheng og sekundær i en annen. En nyhetsartikkel er en sekundærkilde hvis du studerer hendelsen den rapporterer om, men en primærkilde hvis du studerer mediedekningen av hendelsen.`,
    },
    {
      id: 'kk3-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Primær- og sekundærkilde i praksis',
      content: `**Oppgave:** Du skriver en tekst om ungdommers medievaner.

**Primærkilder du kan bruke:**
- Medietilsynets rapport «Barn og medier» med originale undersøkelsesdata
- Statistisk sentralbyrå (SSB) sine tall om mediebruk
- Egne intervjuer med ungdommer

**Sekundærkilder du kan bruke:**
- Nyhetsartikler som omtaler rapporten «Barn og medier»
- En lærebok om mediepedagogikk
- Et populærvitenskapelig foredrag om mediebruk

**Vurdering:** Primærkildene gir deg de mest nøyaktige tallene og funnene. Sekundærkildene kan gi deg nyttig kontekst og tolkning, men informasjonen kan være forenklet eller vinklet. Best praksis er å bruke primærkildene som grunnlag og sekundærkildene som støtte.`,
    },
    {
      id: 'kk3-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-2-ex-2',
        number: '4.2.2',
        type: 'classic',
        task: 'Velg en påstand du har sett i sosiale medier eller i en nyhetsartikkel. Bruk TONE-kriteriene til å vurdere kilden. Skriv en kort vurdering der du bruker alle fire kriteriene.',
        hints: ['Gå systematisk gjennom T, O, N og E', 'Vurder om kilden er primær eller sekundær'],
        solution: 'Et godt svar: 1) Beskriver påstanden og kilden tydelig. 2) Vurderer Troverdighet – hvem er avsender, hva er kompetansen? 3) Vurderer Objektivitet – er fremstillingen balansert? 4) Vurderer Nøyaktighet – kan opplysningene bekreftes av andre kilder? 5) Vurderer Egnethet – er kilden relevant og oppdatert? 6) Gir en samlet konklusjon om kildens pålitelighet.',
      },
    },
    {
      id: 'kk3-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-2-ex-3',
        number: '4.2.3',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er en primærkilde hvis du skal skrive om resultatene av Stortingsvalget 2025?',
        options: [
          { id: 'a', text: 'En kommentar i VG som analyserer valgresultatet', isCorrect: false },
          { id: 'b', text: 'En lærebok i samfunnskunnskap som beskriver det norske valgsystemet', isCorrect: false },
          { id: 'c', text: 'De offisielle valgresultatene fra valgdirektoratet.no', isCorrect: true },
          { id: 'd', text: 'Et innlegg på sosiale medier fra en politisk kommentator', isCorrect: false },
        ],
        solution: 'De offisielle valgresultatene fra valgdirektoratet.no er en primærkilde fordi de gir direkte tilgang til de faktiske tallene. De andre alternativene er sekundærkilder som tolker eller omtaler resultatene.',
      },
    },
    {
      id: 'kk3-4-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kildekritikk** er systematisk vurdering av kilders troverdighet, relevans og kvalitet
- **TONE-kriteriene** gir deg et praktisk verktøy: Troverdighet, Objektivitet, Nøyaktighet og Egnethet
- **Primærkilder** gir direkte tilgang til informasjonen, mens **sekundærkilder** gjengir og tolker
- En kilde kan være primær i én sammenheng og sekundær i en annen
- Kildekritikk er en grunnleggende ferdighet for å navigere i informasjonssamfunnet`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor det er viktig å skille mellom primær- og sekundærkilder. Gi et eksempel der bruk av kun sekundærkilder kan føre til feilaktig informasjon.',
        hints: ['Tenk på «stille post»-effekten', 'Vurder hvordan informasjon kan endre seg gjennom flere ledd'],
        solution: 'Primærkilder gir direkte tilgang til informasjonen, mens sekundærkilder tolker og gjengir. Informasjon kan forvrenges gjennom flere ledd – som i «stille post». Eksempel: En forsker publiserer en studie som viser at «moderat kaffeforbruk kan ha positive helseeffekter i noen grupper». En nyhetsartikkel skriver «Kaffe er sunt!». En blogg gjengir dette som «Forskere anbefaler å drikke mye kaffe». Ved å gå tilbake til primærkilden (den originale studien) ville man sett at budskapet var langt mer nyansert enn det som ble formidlet gjennom sekundær- og tertiærkildene.',
      },
    },
    {
      id: 'kk3-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-2-ex-5',
        number: '4.2.5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Du finner en artikkel om helsekost på nettsiden til et firma som selger kosttilskudd. Artikkelen hevder at deres produkt «er vitenskapelig bevist å forebygge sykdom». Hvilket TONE-kriterium er mest relevant å undersøke først?',
        options: [
          { id: 'a', text: 'Egnethet – er kilden relevant for temaet?', isCorrect: false },
          { id: 'b', text: 'Nøyaktighet – stemmer de vitenskapelige påstandene?', isCorrect: false },
          { id: 'c', text: 'Troverdighet – avsenderens interessekonflikt som selger av produktet', isCorrect: true },
          { id: 'd', text: 'Objektivitet – er artikkelen balansert i sin fremstilling?', isCorrect: false },
        ],
        solution: 'Det mest presserende spørsmålet er Troverdighet: Avsenderen har en åpenbar interessekonflikt fordi de selger produktet de skriver om. Dette betyr ikke at informasjonen nødvendigvis er feil, men at du bør søke uavhengige kilder for å verifisere påstandene. Alle TONE-kriteriene er relevante, men interessekonflikten er det viktigste utgangspunktet her.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Desinformasjon og falske nyheter
// ============================================================================

export const CHAPTER_KOMKULT3_4_3: TextbookChapter = {
  id: 'komkult3-4-3',
  courseId: 'komkult-3',
  chapterNumber: '4.3',
  title: 'Desinformasjon og falske nyheter',
  description: 'Typer desinformasjon, troll-fabrikker, konspirasjonsteorier og deepfakes. Du lærer å gjenkjenne og forstå ulike former for villedende informasjon.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte utfordringer knyttet til desinformasjon og algoritmestyrt mediepåvirkning',
  ],
  keyTerms: [
    { term: 'Desinformasjon', definition: 'Bevisst feilaktig eller villedende informasjon som spres med hensikt om å villede, skade eller manipulere.' },
    { term: 'Misinformasjon', definition: 'Feilaktig informasjon som spres uten bevisst intensjon om å villede. Avsenderen tror selv at informasjonen er sann.' },
    { term: 'Trollfabrikk', definition: 'Organisasjoner som systematisk produserer og sprer desinformasjon på nettet, ofte på oppdrag fra statlige aktører eller andre interessegrupper, ved hjelp av falske profiler og koordinerte kampanjer.' },
    { term: 'Konspirasjonsteori', definition: 'En forklaring som hevder at viktige hendelser skyldes hemmelige planer utformet av mektige grupper, ofte i strid med etablert kunnskap og uten tilstrekkelig bevisgrunnlag.' },
    { term: 'Deepfake', definition: 'Kunstig intelligens-generert lyd eller video der en persons ansikt, stemme eller handlinger er manipulert til å si eller gjøre noe de aldri har gjort.' },
  ],
  content: [
    {
      id: 'kk3-4-3-intro',
      type: 'text',
      content: `## Når informasjonen lyver

Falsk og villedende informasjon har alltid eksistert, men digitale medier har gjort det mulig å spre desinformasjon raskere, billigere og mer effektivt enn noensinne. Desinformasjon truer tilliten til demokratiske institusjoner, vitenskap og medier.

I dette kapittelet skal du lære:
- Forskjellen mellom desinformasjon og misinformasjon
- Ulike typer falsk og villedende informasjon
- Hva trollfabrikker er og hvordan de opererer
- Kjennetegn ved konspirasjonsteorier
- Hva deepfakes er og hvilke trusler de utgjør`,
    },
    {
      id: 'kk3-4-3-def-1',
      type: 'definition',
      title: 'Desinformasjon vs. misinformasjon',
      content: `**Desinformasjon** er bevisst feilaktig eller villedende informasjon som spres med hensikt om å villede, skade eller manipulere. Avsenderen vet at informasjonen er feil.

**Misinformasjon** er feilaktig informasjon som spres uten bevisst intensjon om å villede. Avsenderen tror selv at informasjonen er sann og deler den i god tro.

**Malinformasjon** er en tredje kategori: sann informasjon som bevisst deles for å skade, for eksempel ved å ta opplysninger ut av sin kontekst eller lekke privat informasjon.

Skillet er viktig fordi det handler om intensjon: En bestemor som deler en falsk helsepåstand på Facebook fordi hun tror den er sann, driver med misinformasjon. Et PR-byrå som bevisst fabrikkerer falske forskningsresultater, driver med desinformasjon.`,
    },
    {
      id: 'kk3-4-3-text-1',
      type: 'text',
      content: `### Typer desinformasjon

Desinformasjon kan ta mange former:

**Fabrikkert innhold**
- Helt oppdiktede nyhetsartikler, ofte med troverdig layout
- Falske nettsider som imiterer ekte nyhetsmedier
- Forfalsket statistikk og «forskning»

**Manipulert innhold**
- Ekte bilder eller videoer som er redigert eller tatt ut av kontekst
- Sitat som er forkortet, forvrengt eller diktet opp
- Grafikk og diagrammer som er designet for å villede (f.eks. misvisende akser)

**Villedende kontekst**
- Ekte informasjon presentert i feil sammenheng
- Gamle nyheter som sirkulerer som om de er nye
- Selektiv bruk av fakta som gir et skjevt bilde

**Falsk tilknytning**
- Overskrifter som ikke samsvarer med innholdet (clickbait)
- Utsagn tillagt personer som ikke har sagt det
- Logoer og merker brukt uten tillatelse for å gi inntrykk av troverdighet`,
    },
    {
      id: 'kk3-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Manipulert kontekst',
      problem: 'Et bilde av en overfylt strand sirkulerer på sosiale medier med teksten: «Folk gir blaffen i klimakrisen – strandene er fullere enn noen gang!» Bildet viser seg å være fra en strandfestival i Brasil i 2018.',
      solution: `**Analyse:**
Dette er et eksempel på villedende kontekst. Bildet er ekte, men brukes i en helt annen sammenheng enn den opprinnelige:

- **Originalkontekst:** Et folksomt arrangement på en brasiliansk strand i 2018
- **Ny kontekst:** Brukt for å hevde at folk ikke bryr seg om klimaendringer

**Virkemidler:** Bildet trigger en emosjonell reaksjon (frustrasjon eller sinne). Teksten gir en tolkning som virker logisk ved første blikk, men som er basert på en falsk premiss.

**Hvordan avsløre det:**
- Omvendt bildesøk (Google Images / TinEye) avslører originalkilden
- Sjekk om det er en dato på bildet
- Se etter kontekstinformasjon (skilt, klær, vær som ikke stemmer)
- Spør deg: Hvem tjener på at dette budskapet spres?`,
    },
    {
      id: 'kk3-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom desinformasjon og misinformasjon?',
        options: [
          { id: 'a', text: 'Desinformasjon spres bevisst for å villede, mens misinformasjon spres i god tro', isCorrect: true },
          { id: 'b', text: 'Desinformasjon er alltid politisk motivert, mens misinformasjon handler om helse', isCorrect: false },
          { id: 'c', text: 'Desinformasjon finnes bare på internett, mens misinformasjon spres i tradisjonelle medier', isCorrect: false },
          { id: 'd', text: 'Det er ingen reell forskjell – begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'Forskjellen handler om intensjon. Desinformasjon spres bevisst av noen som vet at informasjonen er feil, mens misinformasjon spres av noen som tror informasjonen er sann. Resultatet kan være det samme – feilaktig informasjon som spres – men årsaken og ansvaret er ulikt.',
      },
    },
    {
      id: 'kk3-4-3-def-2',
      type: 'definition',
      title: 'Trollfabrikker',
      content: `**Trollfabrikker** er organisasjoner der ansatte systematisk produserer og sprer desinformasjon på nettet. Det mest kjente eksempelet er den russiske Internet Research Agency (IRA) i St. Petersburg, som ble avslørt i forbindelse med det amerikanske presidentvalget i 2016. Trollfabrikkene bruker hundrevis av falske profiler på sosiale medier til å spre propaganda, polarisere debatter, og undergrave tillit til demokratiske institusjoner.`,
    },
    {
      id: 'kk3-4-3-text-2',
      type: 'text',
      content: `### Trollfabrikker og koordinert påvirkning

**Hvordan opererer trollfabrikker?**
- Oppretter hundrevis eller tusenvis av falske profiler på sosiale medier
- Profilene bygger opp troverdighet over tid ved å dele ufarlig innhold
- Når profilene har nok følgere, begynner de å spre desinformasjon
- Bruker koordinerte kampanjer der mange profiler forsterker det samme budskapet
- Utnytter eksisterende konflikter og splittelser i samfunnet

**Konspirasjonsteorier – kjennetegn:**
- Hevder at mektige grupper i hemmelighet kontrollerer hendelser
- Er ofte immune mot motbevis («motbeviset er bare en del av konspirasjonen»)
- Forenkler komplekse hendelser til én enkel forklaring
- Appellerer til mistillit mot myndigheter, eksperter og medier
- Spres ofte i lukkede nettforum og grupper
- Kan ha en kjerne av reelle bekymringer, men trekker urimelige konklusjoner

**Hvorfor tror folk på konspirasjonsteorier?**
- Behov for å finne mening i kaotiske eller skremmende hendelser
- Mistillit til autoriteter og institusjoner
- Følelsen av å ha «gjennomskuet» noe andre ikke ser
- Sosial tilhørighet i grupper som deler den samme overbevisningen
- Algoritmene på sosiale medier forsterker innholdet`,
    },
    {
      id: 'kk3-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Deepfake-teknologi',
      content: `**Hva er deepfakes?**
Deepfakes er AI-generert lyd eller video der en persons ansikt eller stemme er manipulert til å si eller gjøre noe de aldri har gjort. Teknologien bruker maskinlæring og nevrale nettverk til å lage stadig mer realistiske forfalskninger.

**Eksempel:** I 2022 dukket det opp en deepfake-video av Ukrainas president Zelenskyj der han tilsynelatende ba ukrainske soldater om å legge ned våpnene. Videoen ble raskt avslørt fordi ansiktsbevegelsene ikke var helt naturlige og uttalelsene brøt med alt Zelenskyj hadde sagt tidligere.

**Trusler fra deepfakes:**
- Politisk manipulasjon – falske taler og uttalelser fra ledere
- Svindel – falske videosamtaler der noen utgir seg for å være andre
- Sjikane – manipulerte bilder og videoer brukt til å skade enkeltpersoner
- Undergraving av tillit – «liars dividend»: folk kan avvise ekte videobevis som deepfakes

**Hvordan gjenkjenne deepfakes:**
- Se etter unaturlige ansiktsbevegelser og blunking
- Sjekk om lys og skygger stemmer
- Lytt etter unaturlig stemme og tonefall
- Vurder om innholdet virker sannsynlig i konteksten`,
    },
    {
      id: 'kk3-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-3-ex-2',
        number: '4.3.2',
        type: 'classic',
        task: 'Forklar hva en trollfabrikk er og beskriv hvordan den opererer. Hvorfor er trollfabrikker en trussel mot demokratiet?',
        hints: ['Tenk på falske profiler og koordinerte kampanjer', 'Vurder effekten på tillit og polarisering'],
        solution: 'En trollfabrikk er en organisasjon som systematisk produserer og sprer desinformasjon via falske profiler på nettet. De opererer ved å: 1) Opprette mange falske profiler som gradvis bygger troverdighet, 2) Bruke koordinerte kampanjer der mange profiler forsterker samme budskap, 3) Utnytte eksisterende konflikter for å polarisere debatten. Trollfabrikker truer demokratiet fordi de: undergraver tilliten til medier og institusjoner, forsterker samfunnssplittelse, manipulerer offentlig debatt med falsk informasjon, og kan påvirke valg og politiske prosesser.',
      },
    },
    {
      id: 'kk3-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-3-ex-3',
        number: '4.3.3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en konspirasjonsteori?',
        options: [
          { id: 'a', text: 'Den bygger på grundig, fagfellevurdert forskning', isCorrect: false },
          { id: 'b', text: 'Den presenterer alltid flere mulige forklaringer', isCorrect: false },
          { id: 'c', text: 'Den hevder at mektige grupper i hemmelighet kontrollerer hendelser, og er ofte immun mot motbevis', isCorrect: true },
          { id: 'd', text: 'Den publiseres alltid i anerkjente medier', isCorrect: false },
        ],
        solution: 'Konspirasjonsteorier kjennetegnes av at de hevder hemmelig kontroll av hendelser, forenkler komplekse fenomener, og er ofte immune mot motbevis – motbevis tolkes som «bevis» for at konspirasjonen er enda dypere. De appellerer til mistillit mot autoriteter og gir en følelse av å ha gjennomskuet noe.',
      },
    },
    {
      id: 'kk3-4-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Desinformasjon** spres bevisst for å villede, mens **misinformasjon** spres i god tro
- Desinformasjon kan ta mange former: fabrikkert innhold, manipulert materiale, villedende kontekst og falsk tilknytning
- **Trollfabrikker** er organisasjoner som systematisk sprer desinformasjon via falske profiler
- **Konspirasjonsteorier** forenkler komplekse hendelser og er ofte immune mot motbevis
- **Deepfakes** er AI-generert lyd eller video som kan brukes til manipulasjon
- Kunnskap om desinformasjon er en forutsetning for å være en kritisk og informert borger`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvilke utfordringer deepfake-teknologi skaper for demokratiet og den offentlige debatten. Hva kan samfunnet gjøre for å møte disse utfordringene?',
        hints: ['Tenk på «liars dividend» – at folk kan avvise ekte videobevis som deepfakes', 'Vurder både teknologiske og samfunnsmessige løsninger'],
        solution: 'Utfordringer: 1) Politisk manipulasjon – falske videoer av politikere kan påvirke valg. 2) Undergraving av tillit – når alt kan forfalskes, kan folk avvise ekte bevismateriale. 3) Personlige krenkelser – deepfakes kan brukes til sjikane og utpressing. 4) Svindel og bedrageri – falske videosamtaler i forretningssammenheng. Mulige tiltak: Teknologiske løsninger som AI-baserte deteksjonsverktøy og digitale vannmerker. Juridiske tiltak som strengere lovgivning mot spredning av deepfakes. Utdanning i mediekritikk fra ung alder. Medienes ansvar for å verifisere innhold. Plattformenes ansvar for å merke og fjerne manipulert innhold.',
      },
    },
    {
      id: 'kk3-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-3-ex-5',
        number: '4.3.5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva menes med «malinformasjon»?',
        options: [
          { id: 'a', text: 'Feilaktig informasjon som spres av ondsinnede hackere', isCorrect: false },
          { id: 'b', text: 'Sann informasjon som bevisst deles for å skade, for eksempel ved å ta den ut av kontekst', isCorrect: true },
          { id: 'c', text: 'Informasjon som er forbudt ved lov å dele', isCorrect: false },
          { id: 'd', text: 'Informasjon som spres gjennom datavirus og skadevare', isCorrect: false },
        ],
        solution: 'Malinformasjon er sann informasjon som bevisst deles for å skade noen. Eksempler er å lekke privat informasjon, ta uttalelser ut av kontekst, eller dele gamle opplysninger som om de er nye – alt med hensikt å skade en person, organisasjon eller sak.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Algoritmer og filterbobler
// ============================================================================

export const CHAPTER_KOMKULT3_4_4: TextbookChapter = {
  id: 'komkult3-4-4',
  courseId: 'komkult-3',
  chapterNumber: '4.4',
  title: 'Algoritmer og filterbobler',
  description: 'Personalisering, ekkokamre, plattformøkonomi og oppmerksomhetsøkonomi. Du lærer hvordan algoritmene styrer hva du ser på nettet, og hvilke konsekvenser det har.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte utfordringer knyttet til desinformasjon og algoritmestyrt mediepåvirkning',
  ],
  keyTerms: [
    { term: 'Algoritme', definition: 'Et sett med regler og instruksjoner som en datamaskin følger for å løse en oppgave. På sosiale medier bestemmer algoritmer hva som vises i brukerens feed, basert på data om brukerens atferd.' },
    { term: 'Filterboble', definition: 'En tilstand der en bruker kun eksponeres for informasjon og synspunkter som bekrefter det vedkommende allerede mener, fordi algoritmene filtrerer bort annet innhold. Begrepet ble lansert av Eli Pariser i 2011.' },
    { term: 'Ekkokammer', definition: 'Et lukket informasjonsmiljø der de samme synspunktene gjentas og forsterkes, uten at alternative perspektiver slipper til. Ligner filterboble, men handler mer om sosiale dynamikker i grupper.' },
    { term: 'Plattformøkonomi', definition: 'Den økonomiske modellen til digitale plattformer (som Meta, Google, TikTok) der inntektene primært kommer fra å selge brukernes oppmerksomhet og data til annonsører.' },
    { term: 'Oppmerksomhetsøkonomi', definition: 'Et økonomisk system der menneskelig oppmerksomhet er den knappe ressursen som konkurreres om. Plattformene optimaliserer for å holde brukerne engasjert så lenge som mulig.' },
  ],
  content: [
    {
      id: 'kk3-4-4-intro',
      type: 'text',
      content: `## Når algoritmene bestemmer hva du ser

Hver gang du åpner sosiale medier, gjør en nettsøk eller besøker en nettavis, er innholdet du ser tilpasset deg. Algoritmene bak plattformene analyserer din atferd – hva du klikker på, liker, deler og bruker tid på – og bruker denne informasjonen til å vise deg mer av det du sannsynligvis vil engasjere deg i.

I dette kapittelet skal du lære:
- Hvordan algoritmer styrer informasjonsflyten din
- Hva filterbobler og ekkokamre er, og hvordan de oppstår
- Hva plattformøkonomi og oppmerksomhetsøkonomi innebærer
- Hvilke konsekvenser algoritmestyrt informasjon har for individ og samfunn`,
    },
    {
      id: 'kk3-4-4-def-1',
      type: 'definition',
      title: 'Algoritme (i mediesammenheng)',
      content: `En **algoritme** i mediesammenheng er et dataprogrammert system som bestemmer hvilket innhold som vises til hvem, og i hvilken rekkefølge. Algoritmene er designet for å maksimere brukerengasjement – altså å få deg til å bruke mest mulig tid på plattformen. De analyserer enorme mengder data om din atferd for å forutsi hva du vil klikke på, like eller dele.`,
    },
    {
      id: 'kk3-4-4-text-1',
      type: 'text',
      content: `### Hvordan personalisering fungerer

**Data som brukes:**
- Hva du klikker på og hvor lenge du ser på det
- Hva du liker, kommenterer og deler
- Hvem du følger og interagerer med
- Din geografiske plassering
- Din alder, kjønn og andre demografiske data
- Hva lignende brukere engasjerer seg i

**Konsekvenser av personalisering:**
- Du ser mer av det du allerede interesserer deg for
- Innhold som provoserer sterke følelser (sinne, frykt, begeistring) prioriteres
- Nyanserte og moderate synspunkter kan forsvinne til fordel for ekstremt innhold
- Du kan få inntrykk av at «alle» mener det samme som deg
- Det er vanskelig å vite hva du *ikke* ser

**Positivt med personalisering:**
- Relevant innhold er lettere å finne
- Spart tid – slipper å lete gjennom irrelevant informasjon
- Bedre brukeropplevelse for underholdning og hobby
- Kan koble deg med likesinnede mennesker`,
    },
    {
      id: 'kk3-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Filterbobler i praksis',
      problem: 'To venner søker på «klimaendringer» i Google samtidig. Person A har tidligere lest mange artikler om klimaaktivisme. Person B har nylig lest artikler som er skeptiske til klimatiltak. Hva kan de forvente å se?',
      solution: `**Person A** vil sannsynligvis se:
- Artikler fra miljøorganisasjoner og klimaforskere
- Nyheter om nye klimarapporter og konsekvenser av global oppvarming
- Innhold om klimaaktivisme og grønn omstilling

**Person B** vil sannsynligvis se:
- Artikler som fokuserer på kostnadene ved klimatiltak
- Debattinnlegg som er kritiske til klimapolitikken
- Innhold som vektlegger usikkerheten i klimamodeller

**Analyse:** Begge søkte på nøyaktig det samme, men algoritmene tilpasser resultatene til deres tidligere atferd. Over tid kan dette forsterke eksisterende oppfatninger og gjøre det vanskeligere for de to vennene å forstå hverandres synspunkter. Dette er filterbobleeffekten.

**Viktig nyansering:** Forskning viser at filterboblene ikke er så tette som først antatt – folk eksponeres for mer variert innhold enn Pariser fryktet. Men tendensen til at algoritmene forsterker eksisterende interesser og holdninger er reell.`,
    },
    {
      id: 'kk3-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        task: 'Hva er en filterboble?',
        options: [
          { id: 'a', text: 'Et antivirusprogram som filtrerer bort farlig innhold', isCorrect: false },
          { id: 'b', text: 'En tilstand der algoritmene kun viser deg innhold som bekrefter det du allerede mener', isCorrect: true },
          { id: 'c', text: 'En sosial medie-gruppe med strengt moderert innhold', isCorrect: false },
          { id: 'd', text: 'En nettleser-innstilling som blokkerer reklame', isCorrect: false },
        ],
        solution: 'En filterboble oppstår når algoritmene på nettet tilpasser innholdet du ser basert på din tidligere atferd, slik at du primært eksponeres for synspunkter og informasjon som bekrefter det du allerede mener. Begrepet ble lansert av Eli Pariser i 2011.',
      },
    },
    {
      id: 'kk3-4-4-def-2',
      type: 'definition',
      title: 'Oppmerksomhetsøkonomi',
      content: `**Oppmerksomhetsøkonomi** beskriver et økonomisk system der menneskelig oppmerksomhet er den knappe ressursen det konkurreres om. Sosiale medieplattformer tjener penger på å selge brukerdata og annonser – jo lenger du er på plattformen, jo mer tjener de. Derfor er algoritmene optimalisert for å holde deg engasjert, ikke nødvendigvis for å gi deg den mest nøyaktige eller nyttige informasjonen.`,
    },
    {
      id: 'kk3-4-4-text-2',
      type: 'text',
      content: `### Plattformøkonomi og maktkonsentrasjon

De store teknologiplattformene (Meta, Google, Amazon, Apple, TikTok/ByteDance) har enorm makt over informasjonsflyten. Denne makten reiser viktige spørsmål:

**Forretningsmodellen:**
- Plattformene tilbyr «gratis» tjenester, men betaling skjer med brukerdata
- Annonseinntekter er hovedinntektskilden – de selger tilgang til din oppmerksomhet
- Jo mer data de har, jo bedre kan de målrette annonser og innhold
- Engasjement (tid brukt, klikk, delinger) er den viktigste suksessmålingen

**Demokratiske utfordringer:**
- Private selskaper kontrollerer den offentlige samtalen
- Algoritmene er ikke transparente – vi vet ikke nøyaktig hvordan de fungerer
- Innhold som provoserer sterke følelser spres raskere enn nøktern informasjon
- Plattformene har begrenset demokratisk ansvar
- Regulering varierer mellom land og henger ofte etter den teknologiske utviklingen

**Ekkokamre og polarisering:**
Et **ekkokammer** ligner en filterboble, men oppstår mer gjennom sosiale dynamikker: man omgir seg med likesinnede og avviser informasjon fra «utenfor». Sosiale medier kan forsterke dette ved å belønne ekstremt innhold med mer synlighet, noe som kan bidra til samfunnspolarisering.`,
    },
    {
      id: 'kk3-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Oppmerksomhetsøkonomien i praksis',
      content: `**Situasjon:** En ungdom åpner TikTok for å se «bare ett minutt». En time senere sitter hun fremdeles og scroller.

**Hva skjer?**
- Algoritmene har over tid lært hva hun liker og viser henne svært målrettet innhold
- Korte videoer gir raske dopaminutslipp som gjør det vanskelig å stoppe
- «Endless scroll»-designet fjerner naturlige stoppunkter (ingen «neste side»-knapp)
- Push-varsler lokker henne tilbake når hun forlater appen

**Oppmerksomhetsøkonomien:** TikToks forretningsmodell avhenger av at brukerne bruker mest mulig tid på plattformen. Algoritmene er designet for å maksimere engasjement, ikke nødvendigvis for å gi brukeren det mest meningsfulle innholdet.

**Refleksjon:** Plattformene bruker innsikt fra atferdspsykologi (variable belønninger, sosial bekreftelse, FOMO) for å gjøre tjenestene så «vanedannende» som mulig. Dette er et bevisst designvalg – det kalles «persuasive design».`,
    },
    {
      id: 'kk3-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-4-ex-2',
        number: '4.4.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom en filterboble og et ekkokammer. Gi et eksempel på hver.',
        hints: ['Filterboble handler om algoritmenes rolle, ekkokammer handler mer om sosiale dynamikker', 'Tenk på både teknologiske og menneskelige mekanismer'],
        solution: 'En filterboble oppstår når algoritmene tilpasser informasjonen du ser basert på din atferd, slik at du primært eksponeres for bekreftende innhold. Eksempel: Google-søk gir ulike resultater til ulike brukere basert på deres søkehistorikk. Et ekkokammer oppstår gjennom sosiale dynamikker der man omgir seg med likesinnede og avviser avvikende synspunkter. Eksempel: En lukket Facebook-gruppe der medlemmene deler samme politiske syn og aktivt avviser informasjon som utfordrer gruppens virkelighetsforståelse. Hovedforskjellen: filterbobler er teknologidrevet, ekkokamre er sosialt drevet – men de forsterker hverandre.',
      },
    },
    {
      id: 'kk3-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-4-ex-3',
        number: '4.4.3',
        type: 'multiple-choice',
        task: 'Hva er den viktigste inntektskilden for sosiale medier som Meta (Facebook/Instagram) og Google?',
        options: [
          { id: 'a', text: 'Abonnementsinntekter fra brukerne', isCorrect: false },
          { id: 'b', text: 'Salg av programvare og apper', isCorrect: false },
          { id: 'c', text: 'Annonseinntekter basert på brukerdata og oppmerksomhet', isCorrect: true },
          { id: 'd', text: 'Offentlig støtte fra myndigheter', isCorrect: false },
        ],
        solution: 'Sosiale medieplattformer tjener hovedsakelig penger på annonseinntekter. De samler inn data om brukernes atferd og selger målrettede annonseplasseringer til annonsører. Jo mer tid brukerne bruker på plattformen, jo mer data samles inn og jo flere annonser kan vises.',
      },
    },
    {
      id: 'kk3-4-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Algoritmer** styrer informasjonsflyten på digitale plattformer og tilpasser innholdet til den enkelte bruker
- **Filterbobler** oppstår når algoritmene begrenser informasjonstilgangen din til bekreftende innhold
- **Ekkokamre** er sosiale miljøer der de samme synspunktene gjentas og forsterkes
- **Plattformøkonomien** er basert på å selge brukernes oppmerksomhet og data til annonsører
- **Oppmerksomhetsøkonomien** gjør at plattformene optimaliserer for engasjement, ikke nøyaktighet
- Bevissthet om disse mekanismene er nødvendig for å ta informerte valg som mediebruker`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Algoritmene på sosiale medier er en trussel mot demokratiet.» Presenter argumenter både for og mot, og gi din egen vurdering.',
        hints: ['Tenk på filterbobler, polarisering og desinformasjon', 'Men vurder også mulighetene sosiale medier gir for deltakelse og ytringsfrihet'],
        solution: 'For-argumenter: Algoritmene prioriterer engasjement over nøyaktighet, noe som gir desinformasjon og polariserende innhold fortrinn. Filterbobler kan hindre borgere i å få et nyansert bilde av samfunnet. Private selskaper har uforholdsmessig makt over den offentlige samtalen. Mot-argumenter: Sosiale medier gir flere stemmer tilgang til offentligheten. Marginaliserte grupper kan organisere seg og bli hørt. Borgerne får tilgang til mer informasjon enn noensinne. Filterboblene er ikke så tette som fryktet. Vurdering: Algoritmene er verken entydig gode eller onde, men mangelen på transparens og regulering er problematisk. Demokratiet trenger borgere som forstår hvordan algoritmene fungerer.',
      },
    },
    {
      id: 'kk3-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-4-ex-5',
        number: '4.4.5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva menes med «persuasive design» i sammenheng med sosiale medier?',
        options: [
          { id: 'a', text: 'Design som gjør plattformen enkel å bruke for eldre', isCorrect: false },
          { id: 'b', text: 'Bevisste designvalg som utnytter psykologiske mekanismer for å holde brukere engasjert', isCorrect: true },
          { id: 'c', text: 'Design som gjør det lettere å dele politiske meninger', isCorrect: false },
          { id: 'd', text: 'Visuelt tiltalende design med fine farger og animasjoner', isCorrect: false },
        ],
        solution: 'Persuasive design handler om bevisste designvalg som utnytter psykologiske mekanismer – som variable belønninger (man vet aldri hva neste scroll gir), sosial bekreftelse (likes), FOMO (fear of missing out) og endless scroll – for å gjøre plattformene så vanedannende som mulig og holde brukerne på plattformen lengst mulig.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Faktasjekk og verifisering
// ============================================================================

export const CHAPTER_KOMKULT3_4_5: TextbookChapter = {
  id: 'komkult3-4-5',
  courseId: 'komkult-3',
  chapterNumber: '4.5',
  title: 'Faktasjekk og verifisering',
  description: 'Faktisk.no, bildesøk, verifiseringsmetoder og lateral reading. Du lærer praktiske teknikker for å sjekke om informasjon stemmer.',
  estimatedMinutes: 18,
  competenceGoals: [
    'vurdere kilders troverdighet og relevans',
    'analysere og vurdere ulike medietekster kritisk',
  ],
  keyTerms: [
    { term: 'Faktasjekk', definition: 'Systematisk verifisering av påstander, utsagn og informasjon opp mot pålitelige kilder. Utføres av spesialiserte redaksjoner som Faktisk.no i Norge.' },
    { term: 'Lateral reading', definition: 'En verifiseringsmetode der man forlater kilden og søker informasjon om den i andre, uavhengige kilder, istedenfor å vurdere kilden bare ut fra dens eget innhold.' },
    { term: 'Omvendt bildesøk', definition: 'En teknikk der man bruker et bilde som søkeord for å finne originalkilden, andre versjoner av bildet, og konteksten det opprinnelig ble publisert i.' },
    { term: 'Faktisk.no', definition: 'Norges uavhengige faktasjekktjeneste, etablert i 2017 som et samarbeid mellom flere norske mediehus. Sjekker påstander i offentlig debatt og gir dem en vurdering fra «helt sant» til «helt feil».' },
    { term: 'SIFT-metoden', definition: 'En rask verifiseringsmetode med fire steg: Stop (stopp opp), Investigate the source (undersøk kilden), Find better coverage (finn bedre dekning), Trace claims (spor påstander tilbake til originalen).' },
  ],
  content: [
    {
      id: 'kk3-4-5-intro',
      type: 'text',
      content: `## Praktisk verifisering av informasjon

I de forrige kapitlene har du lært om kildekritikk, desinformasjon og algoritmers påvirkning. Men kunnskap om problemene er ikke nok – du trenger også praktiske verktøy for å sjekke om informasjonen du møter, faktisk stemmer.

I dette kapittelet skal du lære:
- Hva faktasjekk er og hvordan faktasjekktjenester arbeider
- Hvordan du bruker omvendt bildesøk for å verifisere bilder
- Hva lateral reading er og hvorfor det er mer effektivt enn vertikal lesning
- Praktiske steg for å verifisere informasjon raskt (SIFT-metoden)`,
    },
    {
      id: 'kk3-4-5-def-1',
      type: 'definition',
      title: 'Faktasjekk',
      content: `**Faktasjekk** er systematisk verifisering av påstander, utsagn og informasjon opp mot pålitelige kilder. Profesjonelle faktasjekktjenester som Faktisk.no i Norge, Snopes i USA og Full Fact i Storbritannia undersøker påstander i offentlig debatt, politiske uttalelser, virale innlegg og medienes dekning. De gir påstandene en vurdering – for eksempel «helt sant», «delvis sant» eller «helt feil» – og dokumenterer bakgrunnen for vurderingen.`,
    },
    {
      id: 'kk3-4-5-text-1',
      type: 'text',
      content: `### Faktisk.no – Norges faktasjekktjeneste

Faktisk.no ble etablert i 2017 som et samarbeid mellom VG, Dagbladet, NRK og TV 2. Tjenesten er redaksjonelt uavhengig fra eierne.

**Slik arbeider Faktisk.no:**
1. Identifiserer påstander som er viktige, konkrete og verifiserbare
2. Kontakter den som har fremsatt påstanden for kommentar
3. Undersøker påstanden grundig mot offisielle kilder, statistikk og eksperter
4. Publiserer en grundig gjennomgang med alle kilder synlige
5. Gir påstanden en vurdering på en skala fra «helt sant» til «helt feil»

**Hvorfor er faktasjekk viktig for demokratiet?**
- Holder politikere og andre maktpersoner ansvarlige for det de sier
- Gir borgerne et grunnlag for å vurdere påstander i den offentlige debatten
- Motvirker spredning av feilinformasjon
- Fremmer en kultur der det er viktig å ha dekning for det man hevder

**Begrensninger:**
- Faktasjekktjenestene kan bare sjekke et begrenset antall påstander
- Noen påstander er vanskeligere å verifisere enn andre
- Faktasjekk endrer ikke nødvendigvis holdningene til dem som allerede tror på feilinformasjon
- Faktasjekktjenestenes egen metode og uavhengighet kan diskuteres`,
    },
    {
      id: 'kk3-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Omvendt bildesøk',
      problem: 'Du ser et sjokkerende bilde på sosiale medier som viser en dramatisk oversvømmelse. Teksten sier at det er fra en norsk by «i dag». Hvordan kan du verifisere om bildet stemmer?',
      solution: `**Steg 1: Omvendt bildesøk**
- Høyreklikk på bildet og velg «Søk med Google Lens» eller gå til images.google.com
- Last opp bildet eller lim inn URL-en
- Sjekk resultatene: Har bildet dukket opp tidligere? I en annen sammenheng?

**Steg 2: Sjekk metadataene**
- Noen bilder har EXIF-data som viser når og hvor de er tatt
- Bruk verktøy som Jeffrey's EXIF Viewer for å sjekke dette

**Steg 3: Kontekstuell analyse**
- Stemmer det med faktisk vær og forhold i den norske byen?
- Rapporterer noen norske nyhetsmedier om en oversvømmelse der?
- Sjekk yr.no for værdata på den aktuelle dagen

**Resultat i dette eksempelet:** Omvendt bildesøk viser at bildet opprinnelig ble publisert i 2021 og er fra en oversvømmelse i Tyskland. Bildet er ekte, men brukt i feil kontekst – et typisk eksempel på villedende kontekst-desinformasjon.`,
    },
    {
      id: 'kk3-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        task: 'Hva er «lateral reading» som verifiseringsmetode?',
        options: [
          { id: 'a', text: 'Å lese en tekst fra venstre til høyre, linje for linje', isCorrect: false },
          { id: 'b', text: 'Å forlate kilden og søke informasjon om den i andre, uavhengige kilder', isCorrect: true },
          { id: 'c', text: 'Å lese kommentarfeltet under en artikkel for å vurdere troverdigheten', isCorrect: false },
          { id: 'd', text: 'Å lese artikkelen baklengs for å finne skjulte budskap', isCorrect: false },
        ],
        solution: 'Lateral reading innebærer at du forlater kilden og åpner nye faner for å søke informasjon om avsenderen og påstandene i uavhengige kilder. Istedenfor å bruke lang tid på å vurdere en nettside basert på dens eget innhold (vertikal lesning), sjekker du raskt hva andre sier om kilden.',
      },
    },
    {
      id: 'kk3-4-5-def-2',
      type: 'definition',
      title: 'SIFT-metoden',
      content: `**SIFT-metoden** er en rask, praktisk verifiseringsmetode utviklet av Mike Caulfield:

**S – Stop** (Stopp opp): Før du leser videre, deler eller reagerer – stopp opp og tenk. Vet du noe om denne kilden fra før?

**I – Investigate the source** (Undersøk kilden): Hvem står bak? Hva er deres bakgrunn, kompetanse og formål? Bruk lateral reading.

**F – Find better coverage** (Finn bedre dekning): Søk etter andre, mer pålitelige kilder som dekker det samme temaet. Bekreftes påstanden av anerkjente kilder?

**T – Trace claims** (Spor påstander): Finn originalkilden til påstanden. Er den gjengitt korrekt, eller har den endret seg gjennom flere ledd?`,
    },
    {
      id: 'kk3-4-5-text-2',
      type: 'text',
      content: `### Lateral reading vs. vertikal lesning

Forskning ved Stanford University viser at profesjonelle faktasjekkere bruker **lateral reading** – de forlater kilden raskt og sjekker hva andre sier om den. Studenter og akademikere bruker derimot ofte **vertikal lesning** – de leser grundig gjennom selve kilden og vurderer den basert på dens eget innhold.

**Vertikal lesning** (mindre effektiv):
- Bruker lang tid på å lese gjennom hele artikkelen
- Vurderer om nettsiden «ser profesjonell ut»
- Sjekker om det finnes referanser i teksten
- Problem: En veldesignet nettside med falsk innhold kan lure selv kritiske lesere

**Lateral reading** (mer effektiv):
- Åpner nye faner og søker etter informasjon om kilden
- Sjekker hva Wikipedia, nyhetsmedier og eksperter sier om avsenderen
- Ser om påstandene bekreftes av uavhengige kilder
- Fordel: Du bruker andres kunnskap og kompetanse til å vurdere kilden

**Praktiske verifiseringsverktøy:**
- **Google Images / TinEye** – omvendt bildesøk
- **Faktisk.no / Snopes** – sjekk om påstanden er faktasjekket
- **Wikipedia** – rask bakgrunnssjekk av organisasjoner og personer
- **archive.org (Wayback Machine)** – sjekk eldre versjoner av nettsider
- **whois.no** – sjekk hvem som eier et domene`,
    },
    {
      id: 'kk3-4-5-example-2',
      type: 'example',
      title: 'Eksempel: SIFT-metoden i praksis',
      problem: 'Du ser et innlegg på sosiale medier som hevder at «en ny studie viser at skjermbruk gjør barn dummere». Innlegget lenker til en artikkel på en nettside du ikke kjenner. Bruk SIFT-metoden.',
      solution: `**S – Stop:** Du stopper opp. Du kjenner ikke nettsiden, og påstanden er dramatisk. Du bør undersøke nærmere før du stoler på den.

**I – Investigate the source:** Du søker på nettsidens navn. Det viser seg å være en blogg drevet av en person uten relevant fagbakgrunn, som selger «digital detox»-kurs.

**F – Find better coverage:** Du søker etter «skjermbruk barn forskning» i nyhetssøk og akademiske databaser. Du finner at forskningen er mer nyansert: noe skjermbruk kan ha negative effekter, men det avhenger av type, mengde og kontekst. Ingen seriøse forskere bruker ordet «dummere».

**T – Trace claims:** Du forsøker å finne den originale studien det refereres til. Den originale studien handlet om én spesifikk type skjermbruk i én aldersgruppe, og konkluderte med moderate sammenhenger – ikke at skjermbruk «gjør barn dummere».

**Konklusjon:** Påstanden er en kraftig forenkling og overdrivelse av det forskningen faktisk viser. Kilden har en økonomisk interesse i å overdramatisere, og originalstudien støtter ikke den sterke påstanden.`,
    },
    {
      id: 'kk3-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-5-ex-2',
        number: '4.5.2',
        type: 'classic',
        task: 'Forklar hva lateral reading er og hvorfor forskning viser at det er mer effektivt enn vertikal lesning for å vurdere kilders troverdighet.',
        hints: ['Tenk på forskjellen mellom å lese en kilde grundig og å sjekke hva andre sier om kilden', 'Vurder hva en veldesignet, men useriøs nettside kan lure oss til å tro'],
        solution: 'Lateral reading betyr at man forlater kilden og søker informasjon om den i andre, uavhengige kilder – man «leser sidelengs» istedenfor nedover. Forskning ved Stanford University viser at profesjonelle faktasjekkere er mye raskere og mer treffsikre enn studenter fordi de bruker lateral reading. Vertikal lesning (å lese grundig gjennom selve kilden) er mindre effektiv fordi: 1) En nettside kan se profesjonell ut selv om innholdet er useriøst, 2) Det tar lang tid å lese hele teksten, 3) Man vurderer kilden basert på dens egen fremstilling. Lateral reading er mer effektivt fordi man bruker andres kunnskap til å raskt avdekke kildens bakgrunn, interesser og troverdighet.',
      },
    },
    {
      id: 'kk3-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-5-ex-3',
        number: '4.5.3',
        type: 'multiple-choice',
        task: 'Hva er det første steget i SIFT-metoden?',
        options: [
          { id: 'a', text: 'Find better coverage – finn bedre dekning', isCorrect: false },
          { id: 'b', text: 'Investigate – undersøk kilden', isCorrect: false },
          { id: 'c', text: 'Trace – spor påstanden tilbake', isCorrect: false },
          { id: 'd', text: 'Stop – stopp opp og tenk før du reagerer', isCorrect: true },
        ],
        solution: 'Det første steget i SIFT er «Stop» – stopp opp og tenk. Før du leser videre, deler eller reagerer emosjonelt, bør du spørre deg selv: Kjenner jeg denne kilden? Er dette for godt (eller for sjokkerende) til å være sant? Denne pausen er avgjørende for å unngå å spre feilinformasjon impulsstyrt.',
      },
    },
    {
      id: 'kk3-4-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Faktasjekk** er systematisk verifisering av påstander, utført av tjenester som **Faktisk.no**
- **Omvendt bildesøk** lar deg finne originalkilden til et bilde og avsløre manipulert kontekst
- **Lateral reading** er mer effektivt enn vertikal lesning fordi du sjekker hva uavhengige kilder sier om avsenderen
- **SIFT-metoden** gir fire praktiske steg: Stop, Investigate, Find better coverage, Trace claims
- Verifiseringsverktøy som Google Images, Faktisk.no, Wikipedia og Wayback Machine er gratis og tilgjengelige for alle`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en påstand du har sett på sosiale medier den siste uken. Bruk SIFT-metoden til å verifisere den. Dokumenter hvert steg og hva du fant.',
        hints: ['Gå systematisk gjennom alle fire stegene', 'Bruk gjerne omvendt bildesøk og faktasjekktjenester som verktøy'],
        solution: 'Et godt svar dokumenterer: 1) Stop – beskrivelse av påstanden og første reaksjon. 2) Investigate – hva fant du ut om kilden? Hvem står bak, hva er deres bakgrunn og mulige motiver? 3) Find better coverage – hva sier andre, mer pålitelige kilder om det samme temaet? 4) Trace – fant du originalkilden? Er påstanden gjengitt korrekt? 5) Konklusjon – er påstanden sann, delvis sann eller falsk? Var det lett eller vanskelig å verifisere?',
      },
    },
    {
      id: 'kk3-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft i hvilken grad faktasjekktjenester som Faktisk.no kan motvirke spredningen av falsk informasjon. Hva er styrkene og svakhetene ved faktasjekk som virkemiddel?',
        hints: ['Tenk på hvem som faktisk leser faktasjekker', 'Vurder om faktasjekk endrer meningene til dem som allerede tror på feilinformasjon'],
        solution: 'Styrker: Faktasjekktjenester gir befolkningen et verktøy for å vurdere påstander, holder maktpersoner ansvarlige, og bidrar til en kultur der det kreves dekning for det man hevder. De dokumenterer kildene sine og er transparente om metoden. Svakheter: De kan bare sjekke et begrenset antall påstander. Forskning viser at faktasjekk har begrenset effekt på dem som allerede tror på feilinformasjonen (backfire-effekten). Noen anklager faktasjekktjenestene for politisk slagside. Faktasjekk spres saktere enn den opprinnelige feilinformasjonen. Samlet vurdering: Faktasjekk er et viktig, men ikke tilstrekkelig virkemiddel. Det må kombineres med mediekritisk utdanning, regulering av plattformene, og styrking av den generelle tilliten til vitenskapelige og journalistiske institusjoner.',
      },
    },
    {
      id: 'kk3-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-4-5-ex-6',
        number: '4.5.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilken verifiseringsmetode bør du bruke først når du ser et dramatisk bilde på sosiale medier som du mistenker kan være tatt ut av kontekst?',
        options: [
          { id: 'a', text: 'Lese kommentarene under innlegget for å se om noen har korrigert det', isCorrect: false },
          { id: 'b', text: 'Omvendt bildesøk for å finne originalkilden og den opprinnelige konteksten', isCorrect: true },
          { id: 'c', text: 'Sjekke om innlegget har mange likes, noe som indikerer at det er ekte', isCorrect: false },
          { id: 'd', text: 'Sende bildet til en venn og spørre om de tror det er ekte', isCorrect: false },
        ],
        solution: 'Omvendt bildesøk (via Google Images eller TinEye) er det mest effektive førstesteget. Det kan raskt avsløre om bildet har dukket opp i en annen kontekst, er gammelt, eller er manipulert. Kommentarfelt er upålitelige, og antall likes sier ingenting om sannhetsgehalten.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT3_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT3_4_1,
  CHAPTER_KOMKULT3_4_2,
  CHAPTER_KOMKULT3_4_3,
  CHAPTER_KOMKULT3_4_4,
  CHAPTER_KOMKULT3_4_5,
];
