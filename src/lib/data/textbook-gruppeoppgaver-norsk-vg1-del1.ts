/* eslint-disable */
// @ts-nocheck

/**
 * Gruppeoppgaver og prosjektarbeid for Norsk VG1 - Del 1 (Kapittel 1-4)
 *
 * Inneholder:
 * - Kapittel 1: Retorikk og sakprosa (1.1-1.6)
 * - Kapittel 2: Skjønnlitteratur (2.1-2.8)
 * - Kapittel 3: Flerkulturell litteratur (3.1-3.5)
 * - Kapittel 4: Språk og identitet (4.1-4.5)
 *
 * For hvert kapittel:
 * - 2 gruppeoppgaver for 3-4 elever
 * - 1 prosjektforslag med vurderingskriterier
 * - Rollekort for samarbeid
 */

export interface Gruppeoppgave {
  id: string;
  tittel: string;
  beskrivelse: string;
  antallElever: number;
  tidsbruk: string;
  maal: string[];
  materiell?: string[];
  steg?: string[];
}

export interface Prosjekt {
  tittel: string;
  beskrivelse: string;
  vurderingskriterier: string[];
  tidsramme: string;
  leveranser?: string[];
  tips?: string[];
}

export interface Rollekort {
  rolle: string;
  ansvar: string;
}

export interface KapittelGruppeoppgaver {
  gruppeoppgaver: Gruppeoppgave[];
  prosjekt: Prosjekt;
  rollekort: Rollekort[];
}

export const GRUPPEOPPGAVER_NORSK_VG1_DEL1 = {
  // ============================================================================
  // KAPITTEL 1: RETORIKK OG SAKPROSA
  // ============================================================================
  kapittel1: {
    gruppeoppgaver: [
      {
        id: 'norsk-vg1-kap1-gruppe1',
        tittel: 'Retorikkverksted: Analyser og debatter',
        beskrivelse: `Gruppen skal analysere en aktuell mediedebatt og presentere funnene for klassen.

**Del 1 - Analyse (30 min):**
Velg en aktuell samfunnsdebatt fra media (f.eks. klimapolitikk, skolestruktur, sosiale medier). Finn to til tre innlegg med ulike synspunkter. Analyser bruken av etos, patos og logos i hvert innlegg.

**Del 2 - Diskusjon (20 min):**
Diskuter i gruppen:
- Hvilke retoriske strategier er mest effektive?
- Hvem når best frem til målgruppen, og hvorfor?
- Finnes det feilslutninger eller manipulerende retorikk?

**Del 3 - Presentasjon (10 min):**
Presenter funnene for klassen med konkrete eksempler fra tekstene.`,
        antallElever: 4,
        tidsbruk: '60 minutter',
        maal: [
          'Identifisere og forklare retoriske appellformer i autentiske tekster',
          'Vurdere effektiviteten av ulike retoriske strategier',
          'Samarbeide om analyse og presentasjon',
        ],
        materiell: [
          'Tilgang til aviser/nettaviser',
          'Analyseskjema for retorisk analyse',
          'Presentasjonsverktøy',
        ],
        steg: [
          'Velg debattema og finn relevante innlegg',
          'Fordel innleggene mellom gruppemedlemmene',
          'Gjennomfør individuell analyse',
          'Diskuter funnene i fellesskap',
          'Forbered og gjennomfør presentasjon',
        ],
      },
      {
        id: 'norsk-vg1-kap1-gruppe2',
        tittel: 'Kildedetektivene: Kritisk kildevurdering',
        beskrivelse: `Gruppen skal undersøke en påstand som spres i sosiale medier eller nettaviser, og vurdere kildene kritisk.

**Oppgave:**
1. Læreren gir gruppen en påstand (f.eks. om helse, miljø eller samfunn)
2. Finn 4-5 kilder som omtaler påstanden
3. Bruk TRAFO-modellen på hver kilde:
   - **T**roverdighet: Hvem står bak?
   - **R**elevans: Er kilden relevant for påstanden?
   - **A**ktualitet: Hvor ny er informasjonen?
   - **F**ormål: Hva er hensikten med kilden?
   - **O**bjektivitet: Er fremstillingen balansert?

4. Lag en «kilderapport» som vurderer påstandens sannhetsgehalt
5. Presenter rapporten som en kort muntlig fremføring

**Refleksjon:** Diskuter hvordan kritisk kildevurdering er viktig i en tid med falske nyheter og desinformasjon.`,
        antallElever: 3,
        tidsbruk: '45 minutter',
        maal: [
          'Anvende TRAFO-modellen systematisk',
          'Skille mellom primær- og sekundærkilder',
          'Vurdere kilders pålitelighet og relevans',
          'Formidle funn skriftlig og muntlig',
        ],
        materiell: [
          'TRAFO-analyseskjema',
          'Tilgang til internett',
          'Mal for kilderapport',
        ],
      },
    ],
    prosjekt: {
      tittel: 'Retorikk i praksis: Kampanje for endring',
      beskrivelse: `Gruppen skal planlegge og gjennomføre en informasjons- eller overtalelseskampanje om et selvvalgt tema.

**Prosjektbeskrivelse:**
Velg et tema dere brenner for (f.eks. miljø, psykisk helse, mobbing, lokalsamfunn). Utvikle en kampanje som bruker retoriske virkemidler bevisst for å nå ut til en bestemt målgruppe.

**Kampanjen skal inneholde:**
1. **Analyse av målgruppen:** Hvem vil dere nå, og hva vet dere om dem?
2. **Retorisk strategi:** Hvordan vil dere bruke etos, patos og logos?
3. **Tre ulike tekster/produkter:**
   - Et debattinnlegg eller en kronikk
   - En plakat, infografikk eller sosiale medier-post
   - En kort tale eller video (2-3 minutter)
4. **Kildeliste:** Dokumenter kildene dere har brukt
5. **Refleksjonsnotat:** Forklar de retoriske valgene dere har gjort

**Presentasjon:** Gruppen presenterer kampanjen for klassen og begrunner valgene.`,
      vurderingskriterier: [
        'Klar og velbegrunnet målgruppeanalyse',
        'Bevisst og effektiv bruk av appellformene etos, patos og logos',
        'Kvalitet og kreativitet i de tre produktene',
        'Korrekt og etterrettelig kildebruk',
        'Reflektert begrunnelse av retoriske valg',
        'God samarbeidsprosess og jevn arbeidsfordeling',
        'Tydelig og engasjerende presentasjon',
      ],
      tidsramme: '2-3 uker (ca. 8-10 skoletimer + hjemmearbeid)',
      leveranser: [
        'Debattinnlegg/kronikk (400-600 ord)',
        'Visuelt produkt (plakat/infografikk/SoMe-post)',
        'Tale eller video (2-3 minutter)',
        'Kildeliste i APA-format',
        'Refleksjonsnotat (300-500 ord per elev)',
      ],
      tips: [
        'Start med å kartlegge hva målgruppen allerede vet og mener om temaet',
        'Velg retoriske virkemidler som passer til målgruppen og mediet',
        'Test ut produktene på noen i målgruppen og juster basert på tilbakemeldinger',
      ],
    },
    rollekort: [
      {
        rolle: 'Ordstyrer',
        ansvar: 'Leder diskusjonen, sørger for at alle kommer til orde, holder gruppen på sporet og oppsummerer beslutninger.',
      },
      {
        rolle: 'Sekretær',
        ansvar: 'Noterer viktige punkter, beslutninger og ideer. Holder oversikt over oppgavens ulike deler og frister.',
      },
      {
        rolle: 'Tidtaker',
        ansvar: 'Holder øye med tiden, varsler når det er tid for å gå videre til neste del, sørger for at gruppen holder tidsrammen.',
      },
      {
        rolle: 'Kildeansvarlig',
        ansvar: 'Holder oversikt over kilder som brukes, sjekker at alle påstander er dokumentert, lager kildeliste.',
      },
    ],
  },

  // ============================================================================
  // KAPITTEL 2: SKJØNNLITTERATUR
  // ============================================================================
  kapittel2: {
    gruppeoppgaver: [
      {
        id: 'norsk-vg1-kap2-gruppe1',
        tittel: 'Litterær samtale: Novelletolkning i gruppe',
        beskrivelse: `Gruppen skal gjennomføre en strukturert litterær samtale om en novelle og presentere ulike tolkninger.

**Forberedelse (individuelt før timen):**
Les novellen som læreren har valgt ut (f.eks. «Karen» av Kielland, «Faderen» av Bjørnson, eller en samtidstekst).

**Gruppesamtale (40 min):**
1. **Førsteinntrykk (10 min):** Del umiddelbare reaksjoner. Hva grep dere? Hva forvirret dere?

2. **Analysefokus (20 min):** Gå gjennom SVIRP-modellen:
   - **S**ammenhengen: Når og hvor foregår handlingen?
   - **V**inkelen: Hvem forteller? Hva vet fortelleren?
   - **I**nnholdet: Hva skjer? Hva er konflikten?
   - **R**olle/karakter: Hvordan utvikler hovedpersonen seg?
   - **P**oenget: Hva er novellens tema og budskap?

3. **Tolkning (10 min):** Sammenlign tolkninger. Kan novellen tolkes på ulike måter?

**Presentasjon (15 min):**
Presenter én felles tolkning og én alternativ tolkning for klassen.`,
        antallElever: 4,
        tidsbruk: '55 minutter',
        maal: [
          'Anvende SVIRP-modellen på en novelle',
          'Utvikle og begrunne egne tolkninger',
          'Lytte til og vurdere andres tolkninger',
          'Presentere litterær analyse muntlig',
        ],
        materiell: [
          'Novellen som skal analyseres',
          'SVIRP-analyseskjema',
          'Notatark for tolkninger',
        ],
        steg: [
          'Les novellen individuelt før timen',
          'Del førsteinntrykk i gruppen',
          'Gå systematisk gjennom SVIRP-modellen',
          'Diskuter ulike tolkninger',
          'Forbered presentasjon med felles og alternativ tolkning',
        ],
      },
      {
        id: 'norsk-vg1-kap2-gruppe2',
        tittel: 'Diktverksted: Fra analyse til kreativ skriving',
        beskrivelse: `Gruppen skal analysere dikt og deretter skrive egne dikt inspirert av analysene.

**Del 1 - Analyse (25 min):**
Gruppen får tildelt 3-4 dikt med ulike temaer og virkemidler (f.eks. romantiske naturlyriker, modernistiske dikt, og samtidsdikt).

For hvert dikt:
- Identifiser sentrale virkemidler (rim, rytme, metaforer, symboler, kontraster)
- Diskuter stemning og tema
- Vurder hvordan formen støtter innholdet

**Del 2 - Kreativ skriving (20 min):**
Skriv et gruppedikt der dere:
- Velger ett tema som engasjerer gruppen
- Bruker minst tre virkemidler fra diktene dere analyserte
- Lar hvert gruppemedlem bidra med minst én strofe

**Del 3 - Deling (15 min):**
Les opp gruppediktet for klassen og forklar hvilke virkemidler dere har brukt og hvorfor.`,
        antallElever: 3,
        tidsbruk: '60 minutter',
        maal: [
          'Identifisere og forklare litterære virkemidler i lyrikk',
          'Forstå sammenhengen mellom form og innhold',
          'Anvende litterære virkemidler i egen skriving',
          'Samarbeide kreativt',
        ],
        materiell: [
          'Utvalgte dikt (3-4 stykker)',
          'Oversikt over litterære virkemidler',
          'Skriveark',
        ],
      },
    ],
    prosjekt: {
      tittel: 'Litterær forestilling: Fra tekst til scene',
      beskrivelse: `Gruppen skal dramatisere en novelle eller et utdrag fra en roman og presentere det for klassen.

**Prosjektbeskrivelse:**
Velg en skjønnlitterær tekst (novelle, romanutdrag eller dikt) og transformer den til en scenisk fremføring. Prosjektet kombinerer litterær analyse med kreativ formidling.

**Prosjektet skal inneholde:**
1. **Tekstvalg og analyse:**
   - Velg en tekst med dramatisk potensial
   - Analyser teksten med fokus på karakterer, konflikter og tematikk
   - Identifiser nøkkelscener som egner seg for dramatisering

2. **Dramatisering:**
   - Skriv et manus basert på teksten (kan forkortes/tilpasses)
   - Planlegg iscenesettelse, rekvisitter og eventuell musikk/lyd
   - Fordel roller og øv på fremføringen

3. **Fremføring (8-12 minutter):**
   - Introduser teksten kort for publikum
   - Gjennomfør dramatiseringen
   - Avslutt med en kort refleksjon over valg dere har gjort

4. **Skriftlig del:**
   - Litterær analyse av originalteksten (felles, 600-800 ord)
   - Individuelt refleksjonsnotat om prosessen (200-300 ord per elev)`,
      vurderingskriterier: [
        'Grundig og innsiktsfull analyse av originalteksten',
        'Kreativ og teksttro dramatisering',
        'God forståelse av karakterer og konflikter',
        'Engasjerende og tydelig fremføring',
        'Reflektert begrunnelse av dramaturgiske valg',
        'Kvalitet på det skriftlige arbeidet',
        'Samarbeid og arbeidsfordeling i gruppen',
      ],
      tidsramme: '2-3 uker (ca. 8-10 skoletimer + øvingstid)',
      leveranser: [
        'Manus for dramatiseringen',
        'Scenisk fremføring (8-12 minutter)',
        'Felles litterær analyse (600-800 ord)',
        'Individuelle refleksjonsnotater (200-300 ord)',
      ],
      tips: [
        'Velg en tekst med tydelige konflikter og interessante karakterer',
        'Tenk på hvordan dere kan bruke stemme, kroppsspråk og rom for å formidle stemning',
        'Øv flere ganger - god fremføring krever forberedelse',
        'Det er lov å tolke teksten kreativt, men valgene må kunne begrunnes',
      ],
    },
    rollekort: [
      {
        rolle: 'Regissør',
        ansvar: 'Har overordnet ansvar for den kunstneriske visjonen, koordinerer øvinger og tar avgjørelser om iscenesettelse.',
      },
      {
        rolle: 'Manuskriptansvarlig',
        ansvar: 'Leder arbeidet med å skrive og tilpasse manus, sørger for at alle har oppdaterte versjoner.',
      },
      {
        rolle: 'Analyseansvarlig',
        ansvar: 'Leder den litterære analysen, sørger for at dramatiseringen er tro mot tekstens tematikk og virkemidler.',
      },
      {
        rolle: 'Produsent',
        ansvar: 'Holder oversikt over praktiske detaljer som rekvisitter, kostymer, tid og sted for øvinger.',
      },
    ],
  },

  // ============================================================================
  // KAPITTEL 3: FLERKULTURELL LITTERATUR
  // ============================================================================
  kapittel3: {
    gruppeoppgaver: [
      {
        id: 'norsk-vg1-kap3-gruppe1',
        tittel: 'Kulturmøter i litteraturen',
        beskrivelse: `Gruppen skal sammenligne tekster som tematiserer kulturmøter og identitet.

**Forberedelse:**
Hver gruppemedlem leser én tekst fra pensumlisten over flerkulturell litteratur (f.eks. tekster av Maria Amelie, Zeshan Shakar, Gulraiz Sharif, eller samiske forfattere som Nils-Aslak Valkeapää).

**Gruppearbeid (45 min):**
1. **Presentasjon av tekster (20 min):**
   - Hver elev presenterer sin tekst kort (handling, hovedperson, tema)
   - Fokuser på hvordan kulturmøter skildres

2. **Sammenligning (15 min):**
   - Hvilke fellestrekk finner dere i måten kulturmøter fremstilles på?
   - Hvilke forskjeller ser dere?
   - Hvordan påvirker forfatterens bakgrunn teksten?

3. **Diskusjon (10 min):**
   - Hva lærer vi om kulturmøter gjennom litteraturen?
   - Hvordan kan litteratur bidra til forståelse på tvers av kulturer?

**Presentasjon:**
Lag en visuell oversikt (plakat, presentasjon eller tankekart) som viser likheter og forskjeller mellom tekstene.`,
        antallElever: 4,
        tidsbruk: '60 minutter (+ forberedende lesing)',
        maal: [
          'Lese og analysere flerkulturell litteratur',
          'Sammenligne ulike perspektiver på kulturmøter',
          'Reflektere over litteraturens rolle i et flerkulturelt samfunn',
          'Presentere sammenlignende analyse visuelt',
        ],
        materiell: [
          'Utvalgte tekster fra flerkulturell litteratur',
          'Analyseskjema for kulturmøter',
          'Materiell til visuell presentasjon',
        ],
      },
      {
        id: 'norsk-vg1-kap3-gruppe2',
        tittel: 'Samisk kulturarv: Fra joik til samtidslitteratur',
        beskrivelse: `Gruppen skal utforske samisk litteratur og kulturuttrykk, med fokus på joikens rolle.

**Del 1 - Utforskning (20 min):**
Undersøk samiske kulturuttrykk:
- Lytt til 2-3 joiker (tradisjonelle og moderne)
- Les et utdrag fra samisk litteratur (f.eks. Nils-Aslak Valkeapää, Sigbjørn Skåden, eller Máret Ánne Sara)
- Les om samenes historie og kulturelle rettigheter

**Del 2 - Analyse og diskusjon (25 min):**
- Hvordan brukes joik som kulturuttrykk? Hva formidler den?
- Hvilke temaer går igjen i samisk litteratur?
- Hvordan reflekteres samenes historie i samtidslitteraturen?
- Hvilken plass har samisk kultur i det norske samfunnet?

**Del 3 - Kreativ oppgave (15 min):**
Lag en kort presentasjon eller en kreativ tekst (dikt, refleksjon) inspirert av det dere har lært om samisk kultur og litteratur.`,
        antallElever: 3,
        tidsbruk: '60 minutter',
        maal: [
          'Få kunnskap om samisk litteratur og kulturuttrykk',
          'Forstå joikens betydning som kulturuttrykk',
          'Reflektere over samenes plass i norsk kultur og historie',
          'Uttrykke egen forståelse kreativt',
        ],
        materiell: [
          'Joikopptak (tradisjonelle og moderne)',
          'Tekstutdrag fra samisk litteratur',
          'Bakgrunnsinformasjon om samisk historie',
          'Skriveark for kreativ oppgave',
        ],
      },
    ],
    prosjekt: {
      tittel: 'Stemmer fra mange kulturer: Antologi og muntlig fremføring',
      beskrivelse: `Gruppen skal lage en mini-antologi med tekster som representerer ulike kulturelle stemmer, og presentere den for klassen.

**Prosjektbeskrivelse:**
Utforsk mangfoldet i norsk og internasjonal litteratur ved å samle tekster som gir stemme til ulike kulturelle erfaringer. Prosjektet kombinerer lesing, analyse og kreativ formidling.

**Prosjektet skal inneholde:**
1. **Tekstutvalg og research:**
   - Velg 4-6 tekster (noveller, dikt, romanutdrag) fra ulike kulturer
   - Minst én tekst skal være fra samisk litteratur
   - Minst én tekst skal være fra norsk flerkulturell litteratur
   - Minst én tekst skal være fra internasjonal litteratur i oversettelse

2. **Analyse og kontekstualisering:**
   - Skriv en kort introduksjon til hver tekst (bakgrunn, forfatter, kontekst)
   - Analyser hvordan kulturell identitet og kulturmøter tematiseres
   - Reflekter over hva tekstene til sammen forteller om kulturelt mangfold

3. **Antologi:**
   - Sett sammen tekstene i en redigert samling med introduksjoner
   - Skriv et forord som forklarer utvalget og sammenhengene

4. **Muntlig presentasjon (15-20 min):**
   - Les høyt utdrag fra tekstene (fordelt mellom gruppemedlemmene)
   - Presenter analyser og refleksjoner
   - Inviter til samtale om tekstene`,
      vurderingskriterier: [
        'Godt begrunnet og variert tekstutvalg',
        'Innsiktsfulle introduksjoner og analyser',
        'Forståelse for kulturell kontekst og perspektiver',
        'Kvalitet på antologiens oppbygging og forord',
        'Engasjerende og reflektert muntlig presentasjon',
        'God høytlesning og formidling',
        'Samarbeid og arbeidsfordeling',
      ],
      tidsramme: '3-4 uker (ca. 10-12 skoletimer + hjemmearbeid)',
      leveranser: [
        'Antologi med 4-6 tekster og introduksjoner',
        'Forord (400-600 ord)',
        'Muntlig presentasjon med høytlesning (15-20 min)',
        'Individuell refleksjon over prosessen (200-300 ord)',
      ],
      tips: [
        'Velg tekster som faktisk interesserer dere - engasjement smitter',
        'Undersøk forfatternes bakgrunn for å forstå konteksten bedre',
        'Øv på høytlesning - tempo, pauser og innlevelse gjør stor forskjell',
        'Tenk på rekkefølgen av tekstene - hvordan kan de snakke sammen?',
      ],
    },
    rollekort: [
      {
        rolle: 'Redaktør',
        ansvar: 'Har overordnet ansvar for antologiens helhet, sørger for sammenheng mellom tekstene og kvalitet på det skriftlige.',
      },
      {
        rolle: 'Forskningsansvarlig',
        ansvar: 'Leder arbeidet med å finne bakgrunnsinformasjon om forfattere og kulturell kontekst.',
      },
      {
        rolle: 'Formidlingsansvarlig',
        ansvar: 'Planlegger den muntlige presentasjonen, fordeler leseoppdrag og sørger for god høytlesning.',
      },
      {
        rolle: 'Dokumentarist',
        ansvar: 'Holder oversikt over kilder, lager kildeliste og dokumenterer arbeidsprosessen.',
      },
    ],
  },

  // ============================================================================
  // KAPITTEL 4: SPRÅK OG IDENTITET
  // ============================================================================
  kapittel4: {
    gruppeoppgaver: [
      {
        id: 'norsk-vg1-kap4-gruppe1',
        tittel: 'Dialektdetektivene: Utforsk språkmangfoldet',
        beskrivelse: `Gruppen skal undersøke dialektmangfoldet i Norge og presentere funnene.

**Del 1 - Kartlegging (20 min):**
- Kartlegg dialektene som finnes i klassen/gruppen
- Finn eksempler på dialektord og uttrykk som skiller seg fra bokmål/nynorsk
- Undersøk kjennetegn ved minst to norske dialekter (f.eks. trøndersk, bergensk, nordnorsk, østlandsk)

**Del 2 - Språkholdninger (20 min):**
- Diskuter holdninger til dialekter: Hvilke dialekter har høy/lav status?
- Hvorfor tror dere noen dialekter har høyere status enn andre?
- Bør man bevare dialekter, eller er det naturlig at de endrer seg?

**Del 3 - Presentasjon (15 min):**
- Lag en dialektoversikt med eksempler
- Presenter et dialektord eller -uttrykk for klassen (gjerne med lydeksempel)
- Del refleksjoner om språkholdninger

**Bonusoppgave:** Intervju en person fra en annen del av landet om deres dialekt.`,
        antallElever: 4,
        tidsbruk: '55 minutter',
        maal: [
          'Få kunnskap om dialektmangfoldet i Norge',
          'Reflektere over språkholdninger og språklig identitet',
          'Forstå sammenhengen mellom språk og tilhørighet',
          'Presentere språklig kunnskap på en engasjerende måte',
        ],
        materiell: [
          'Dialektkart over Norge',
          'Ressurser om norske dialekter',
          'Opptaksutstyr for eventuelt intervju',
        ],
        steg: [
          'Kartlegg dialekter i gruppen',
          'Undersøk kjennetegn ved utvalgte dialekter',
          'Diskuter språkholdninger',
          'Lag presentasjon med eksempler',
          'Presenter for klassen',
        ],
      },
      {
        id: 'norsk-vg1-kap4-gruppe2',
        tittel: 'Språk i endring: Før og nå',
        beskrivelse: `Gruppen skal undersøke hvordan norsk språk har endret seg, og diskutere fremtidens norsk.

**Del 1 - Historisk språkendring (15 min):**
- Studer teksteksempler fra ulike perioder (f.eks. norrønt, 1800-tall, 1950-tall, i dag)
- Identifiser endringer i ordforråd, grammatikk og rettskriving
- Diskuter: Hva driver språkendringer?

**Del 2 - Språk i dag (20 min):**
- Samle eksempler på nye ord og uttrykk (anglisismer, slang, sosiale medier-språk)
- Undersøk hvordan teknologi påvirker språket (emojier, forkortelser, nye kommunikasjonsformer)
- Diskuter: Er språkendringer positivt eller negativt?

**Del 3 - Fremtidens norsk (15 min):**
- Spekul: Hvordan tror dere norsk vil se ut om 50 år?
- Lag en liste med «fremtidsord» - ord dere tror vil bli viktige
- Diskuter: Bør vi beskytte språket mot endringer, eller la det utvikle seg fritt?

**Presentasjon:** Del de mest interessante funnene og diskusjonene med klassen.`,
        antallElever: 3,
        tidsbruk: '50 minutter',
        maal: [
          'Forstå hvordan og hvorfor språk endrer seg over tid',
          'Identifisere aktuelle språkendringer i norsk',
          'Reflektere over forholdet mellom språkbevaring og språkutvikling',
          'Diskutere språkpolitiske spørsmål',
        ],
        materiell: [
          'Teksteksempler fra ulike perioder',
          'Ordlister over nye ord',
          'Ressurser om språkhistorie og språkendring',
        ],
      },
    ],
    prosjekt: {
      tittel: 'Språkportrett: Min språklige identitet',
      beskrivelse: `Hver elev i gruppen lager et individuelt språkportrett, og gruppen presenterer og sammenligner portrettene.

**Prosjektbeskrivelse:**
Utforsk din egen språklige identitet og sett den i sammenheng med språkmangfoldet i Norge. Prosjektet kombinerer selvrefleksjon med språkvitenskapelig kunnskap.

**Individuell del - Språkportrettet:**
1. **Min språklige bakgrunn:**
   - Hvilke språk/dialekter snakker du?
   - Hvilke språk/dialekter hører du hjemme/i familien?
   - Har du tilgang til minoritetsspråk?

2. **Min språklige hverdag:**
   - Hvordan varierer språket ditt i ulike situasjoner?
   - Hvilke språk/varianter bruker du på sosiale medier, med venner, med familie?
   - Hvordan påvirker språkvalg hvem du er og hvordan du oppfattes?

3. **Refleksjon:**
   - Hva betyr språk for din identitet?
   - Hvordan har språket ditt endret seg gjennom livet?
   - Hvordan tror du språket ditt vil utvikle seg fremover?

4. **Visuelt uttrykk:**
   - Lag et visuelt språkportrett (tegning, kollasj, digital presentasjon)
   - Vis de ulike språkene/variantene du bruker og hvor de hører hjemme i livet ditt

**Gruppedel:**
- Presenter portrettene for hverandre
- Sammenlign og diskuter likheter og forskjeller
- Reflekter over hva gruppens språkportretter til sammen forteller om språkmangfold`,
      vurderingskriterier: [
        'Grundig og ærlig selvrefleksjon over egen språklig identitet',
        'Bruk av fagbegreper fra kapittelet (dialekt, sosiolekt, kodeveksling, etc.)',
        'Kreativt og gjennomtenkt visuelt uttrykk',
        'Evne til å se egen språkbruk i en større sammenheng',
        'Kvalitet på den skriftlige refleksjonen',
        'Innsiktsfull sammenligning i gruppedelen',
        'God muntlig presentasjon av eget portrett',
      ],
      tidsramme: '2 uker (ca. 6-8 skoletimer + hjemmearbeid)',
      leveranser: [
        'Visuelt språkportrett',
        'Skriftlig refleksjon (500-700 ord)',
        'Muntlig presentasjon av eget portrett (5-7 minutter)',
        'Kort grupperefleksjon over sammenligning (muntlig eller skriftlig)',
      ],
      tips: [
        'Vær ærlig i refleksjonen - det finnes ikke «riktige» svar',
        'Tenk bredt: dialekt, sosiolekt, fagspråk, netspråk, fremmedspråk teller alle',
        'Intervju gjerne familiemedlemmer om deres språklige bakgrunn',
        'Det visuelle portrettet kan være abstrakt eller konkret - velg det som passer deg',
      ],
    },
    rollekort: [
      {
        rolle: 'Prosessleder',
        ansvar: 'Sørger for at alle holder fremdriften, koordinerer gruppemøter og sikrer at alle får presentert sitt arbeid.',
      },
      {
        rolle: 'Faglig støtte',
        ansvar: 'Hjelper med å finne relevante fagbegreper, sørger for at refleksjonene er forankret i pensum.',
      },
      {
        rolle: 'Kreativ veileder',
        ansvar: 'Gir innspill på de visuelle uttrykkene, hjelper med ideer til utforming av språkportretter.',
      },
      {
        rolle: 'Sammenligningsansvarlig',
        ansvar: 'Leder arbeidet med å sammenligne portrettene, identifiserer mønstre og trekker linjer mellom gruppens portretter.',
      },
    ],
  },
};

// Hjelpefunksjon for å hente gruppeoppgaver for et spesifikt kapittel
export function getGruppeoppgaverForKapittel(kapittelNummer: 1 | 2 | 3 | 4): KapittelGruppeoppgaver {
  const kapittelKey = `kapittel${kapittelNummer}` as keyof typeof GRUPPEOPPGAVER_NORSK_VG1_DEL1;
  return GRUPPEOPPGAVER_NORSK_VG1_DEL1[kapittelKey];
}

// Hjelpefunksjon for å hente alle gruppeoppgaver
export function getAlleGruppeoppgaver(): Gruppeoppgave[] {
  return [
    ...GRUPPEOPPGAVER_NORSK_VG1_DEL1.kapittel1.gruppeoppgaver,
    ...GRUPPEOPPGAVER_NORSK_VG1_DEL1.kapittel2.gruppeoppgaver,
    ...GRUPPEOPPGAVER_NORSK_VG1_DEL1.kapittel3.gruppeoppgaver,
    ...GRUPPEOPPGAVER_NORSK_VG1_DEL1.kapittel4.gruppeoppgaver,
  ];
}

// Hjelpefunksjon for å hente alle prosjekter
export function getAlleProsjekter(): Prosjekt[] {
  return [
    GRUPPEOPPGAVER_NORSK_VG1_DEL1.kapittel1.prosjekt,
    GRUPPEOPPGAVER_NORSK_VG1_DEL1.kapittel2.prosjekt,
    GRUPPEOPPGAVER_NORSK_VG1_DEL1.kapittel3.prosjekt,
    GRUPPEOPPGAVER_NORSK_VG1_DEL1.kapittel4.prosjekt,
  ];
}
