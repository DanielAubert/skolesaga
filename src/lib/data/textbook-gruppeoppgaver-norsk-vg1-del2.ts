/* eslint-disable */
// @ts-nocheck

/**
 * Gruppeoppgaver og prosjektarbeid for Norsk VG1 - Kapittel 5-8
 *
 * Kapittel 5: Skriving og kommunikasjon (5.1-5.4)
 * Kapittel 6: Sammensatte tekster og medier (6.1-6.3)
 * Kapittel 7: Samisk språk og kultur (7.1-7.3)
 * Kapittel 8: Grammatikk og rettskriving (8.1-8.4)
 *
 * For hvert kapittel:
 * - 2 gruppeoppgaver for 3-4 elever
 * - 1 prosjektforslag med vurderingskriterier
 * - Rollekort for samarbeid
 */

// ============================================================================
// TYPER
// ============================================================================

interface Gruppeoppgave {
  id: string;
  tittel: string;
  beskrivelse: string;
  antallElever: string;
  tidsramme: string;
  maal: string[];
  aktiviteter: string[];
  ressurser: string[];
  vurdering: string[];
  kompetansemaal: string[];
}

interface Prosjekt {
  id: string;
  tittel: string;
  beskrivelse: string;
  varighet: string;
  maal: string[];
  faser: {
    fase: string;
    aktiviteter: string[];
    leveranse: string;
  }[];
  vurderingskriterier: {
    kriterie: string;
    beskrivelse: string;
    lav: string;
    middels: string;
    hoy: string;
  }[];
  kompetansemaal: string[];
}

interface Rollekort {
  id: string;
  rolle: string;
  beskrivelse: string;
  ansvar: string[];
  tips: string[];
}

interface KapittelGruppearbeid {
  gruppeoppgaver: Gruppeoppgave[];
  prosjekt: Prosjekt;
  rollekort: Rollekort[];
}

// ============================================================================
// KAPITTEL 5: SKRIVING OG KOMMUNIKASJON
// ============================================================================

const KAPITTEL_5_GRUPPEOPPGAVER: Gruppeoppgave[] = [
  {
    id: 'norsk-vg1-5-gruppe-1',
    tittel: 'Muntlig presentasjon - Debatt om sosiale medier',
    beskrivelse: 'Gruppen skal forberede og gjennomføre en strukturert debatt om sosiale mediers innvirkning på ungdoms kommunikasjon. To elever argumenterer for positive effekter, to for negative.',
    antallElever: '4 elever',
    tidsramme: '2 skoletimer (90 min)',
    maal: [
      'Øve på muntlig argumentasjon og presentasjon',
      'Lære å lytte aktivt og respondere på motargumenter',
      'Utvikle kritisk tenkning om digitale medier',
    ],
    aktiviteter: [
      'Fordel roller: to "for" og to "mot" sosiale medier',
      'Hver side forbereder 3-4 hovedargumenter med eksempler',
      'Gjennomfør debatten med innlegg, replikker og oppsummering',
      'Klassen stemmer over hvem som argumenterte best',
      'Reflekter sammen over hva som gjorde argumentene overbevisende',
    ],
    ressurser: [
      'Artikler om sosiale medier og ungdom',
      'Statistikk over sosiale medier-bruk i Norge',
      'Debattregler og struktur fra kapittel 5.1',
    ],
    vurdering: [
      'Argumentenes kvalitet og relevans',
      'Bruk av retoriske virkemidler (etos, patos, logos)',
      'Evne til å respondere på motargumenter',
      'Samarbeid og rollefordeling i gruppen',
    ],
    kompetansemaal: [
      'bruke retoriske appellformer og virkemidler',
      'lytte til andre, bygge opp saklig argumentasjon og bruke relevante og saklige argumenter i diskusjoner',
    ],
  },
  {
    id: 'norsk-vg1-5-gruppe-2',
    tittel: 'Kreativ skriveworkshop - Fortellinger fra ulike perspektiver',
    beskrivelse: 'Gruppen skal sammen skrive en fortelling der hvert medlem bidrar med kapitler fra ulike karakterers perspektiv. Historien skal utforske et felles tema fra flere synsvinkler.',
    antallElever: '3-4 elever',
    tidsramme: '3 skoletimer (135 min)',
    maal: [
      'Utvikle kreative skriveferdigheter',
      'Øve på perspektivbytte og karakterutvikling',
      'Samarbeide om en felles tekst',
    ],
    aktiviteter: [
      'Bli enige om et tema og en grunnleggende handling',
      'Hver elev får ansvar for én karakter og skriver fra deres perspektiv',
      'Les opp bidragene og gi konstruktiv tilbakemelding',
      'Rediger sammen for å skape sammenheng',
      'Presenter den ferdige fortellingen for klassen',
    ],
    ressurser: [
      'Skriverammer for fortelling fra kapittel 5.2',
      'Eksempler på perspektivbytte i litteraturen',
      'Sjekkliste for karakterutvikling',
    ],
    vurdering: [
      'Kreativitet og originalitet',
      'Konsistens i karakterfremstilling',
      'Språklig kvalitet og variasjon',
      'Evne til å integrere delene til en helhet',
    ],
    kompetansemaal: [
      'skrive kreative tekster med bruk av ulike virkemidler',
      'gi konstruktive tilbakemeldinger på tekster',
    ],
  },
];

const KAPITTEL_5_PROSJEKT: Prosjekt = {
  id: 'norsk-vg1-5-prosjekt',
  tittel: 'Digital fagartikkel med multimodale elementer',
  beskrivelse: 'Gruppen skal produsere en digital fagartikkel om et selvvalgt tema knyttet til språk og kommunikasjon. Artikkelen skal kombinere tekst, bilder, grafikk og eventuelt video/lyd.',
  varighet: '2-3 uker',
  maal: [
    'Utvikle ferdigheter i fagskriving og kildebruk',
    'Lære å kombinere ulike modaliteter effektivt',
    'Samarbeide om research, skriving og redigering',
  ],
  faser: [
    {
      fase: 'Planlegging (uke 1)',
      aktiviteter: [
        'Velg tema innen språk og kommunikasjon',
        'Fordel arbeidsoppgaver og roller',
        'Gjennomfør research og samle kilder',
        'Lag disposisjon for artikkelen',
      ],
      leveranse: 'Prosjektplan med tema, rollefordeling og disposisjon',
    },
    {
      fase: 'Produksjon (uke 2)',
      aktiviteter: [
        'Skriv førsteutkast av artikkelen',
        'Produser eller finn passende bilder/grafikk',
        'Gi hverandre tilbakemelding underveis',
        'Revidér og forbedre teksten',
      ],
      leveranse: 'Førsteutkast av artikkelen med multimodale elementer',
    },
    {
      fase: 'Ferdigstilling (uke 3)',
      aktiviteter: [
        'Sluttrediger artikkelen',
        'Formater og design den digitale presentasjonen',
        'Skriv kildeliste etter APA-standard',
        'Forbered muntlig presentasjon',
      ],
      leveranse: 'Ferdig digital artikkel og muntlig presentasjon',
    },
  ],
  vurderingskriterier: [
    {
      kriterie: 'Faglig innhold',
      beskrivelse: 'Kvalitet på research, kildebruk og faglig dybde',
      lav: 'Overfladisk behandling, få kilder, manglende faglig forankring',
      middels: 'God behandling av tema, relevante kilder, tilfredsstillende dybde',
      hoy: 'Grundig og innsiktsfull behandling, varierte og troverdige kilder, kritisk refleksjon',
    },
    {
      kriterie: 'Tekstkvalitet',
      beskrivelse: 'Struktur, språk og sjangertrekk',
      lav: 'Uklar struktur, språklige feil, manglende fagartikkeltrekk',
      middels: 'Logisk struktur, godt språk, tydelige sjangertrekk',
      hoy: 'Elegant struktur, presist og variert språk, bevisst bruk av sjangertrekk',
    },
    {
      kriterie: 'Multimodalt samspill',
      beskrivelse: 'Integrering av tekst, bilde og andre modaliteter',
      lav: 'Modalitetene henger ikke sammen, bilder er tilfeldige',
      middels: 'God sammenheng mellom modaliteter, bilder støtter teksten',
      hoy: 'Effektivt samspill, modalitetene forsterker hverandre, kreativ bruk av medier',
    },
    {
      kriterie: 'Samarbeid',
      beskrivelse: 'Gruppens samarbeidsprosess og rollefordeling',
      lav: 'Ujevn arbeidsinnsats, dårlig kommunikasjon',
      middels: 'Alle bidrar, tilfredsstillende samarbeid',
      hoy: 'Godt fordelt arbeid, konstruktiv kommunikasjon, alle bidrar aktivt',
    },
  ],
  kompetansemaal: [
    'skrive fagartikler som greier ut og drøfter',
    'bruke kilder på en kritisk og etterprøvbar måte',
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
  ],
};

const KAPITTEL_5_ROLLEKORT: Rollekort[] = [
  {
    id: 'norsk-vg1-5-rolle-1',
    rolle: 'Prosjektleder',
    beskrivelse: 'Koordinerer arbeidet og sørger for fremdrift',
    ansvar: [
      'Lede møter og holde oversikt over tidsplan',
      'Sørge for at alle vet hva de skal gjøre',
      'Samle inn og sette sammen delene',
      'Kommunisere med lærer ved behov',
    ],
    tips: [
      'Lag en tydelig tidsplan med milepæler',
      'Start hvert møte med statusoppdatering',
      'Vær løsningsorientert når problemer oppstår',
    ],
  },
  {
    id: 'norsk-vg1-5-rolle-2',
    rolle: 'Researcher',
    beskrivelse: 'Har hovedansvar for kildesøk og faktagrunnlag',
    ansvar: [
      'Finne relevante og troverdige kilder',
      'Lage oversikt over viktig bakgrunnsinformasjon',
      'Sjekke at påstander i teksten er faktabaserte',
      'Skrive kildeliste etter APA-standard',
    ],
    tips: [
      'Bruk akademiske databaser og troverdige nettsider',
      'Noter alltid kildeinformasjon med en gang',
      'Vurdér kildenes troverdighet kritisk',
    ],
  },
  {
    id: 'norsk-vg1-5-rolle-3',
    rolle: 'Skribent',
    beskrivelse: 'Har hovedansvar for tekstproduksjon og språk',
    ansvar: [
      'Skrive hovedteksten basert på gruppens research',
      'Sørge for konsistent stil og godt språk',
      'Redigere og korrekturlese',
      'Tilpasse teksten til fagartikkelsjangeren',
    ],
    tips: [
      'Bruk skriverammer og eksempler fra læreboka',
      'Les teksten høyt for å oppdage feil',
      'Variér setningslengde og ordvalg',
    ],
  },
  {
    id: 'norsk-vg1-5-rolle-4',
    rolle: 'Mediedesigner',
    beskrivelse: 'Har ansvar for visuelle elementer og design',
    ansvar: [
      'Finne eller lage passende bilder og grafikk',
      'Designe layout for den digitale artikkelen',
      'Sørge for godt samspill mellom tekst og bilde',
      'Sjekke opphavsrett på bilder',
    ],
    tips: [
      'Velg bilder som forsterker budskapet',
      'Hold designet rent og oversiktlig',
      'Bruk kilder med åpne lisenser (Creative Commons)',
    ],
  },
];

// ============================================================================
// KAPITTEL 6: SAMMENSATTE TEKSTER OG MEDIER
// ============================================================================

const KAPITTEL_6_GRUPPEOPPGAVER: Gruppeoppgave[] = [
  {
    id: 'norsk-vg1-6-gruppe-1',
    tittel: 'Reklamekampanje-analyse',
    beskrivelse: 'Gruppen skal analysere en reklamekampanje fra TV, sosiale medier eller print. Analyser hvordan ulike modaliteter (tekst, bilde, lyd, video) samspiller for å påvirke målgruppen.',
    antallElever: '3-4 elever',
    tidsramme: '2 skoletimer (90 min)',
    maal: [
      'Utvikle kritisk medieforståelse',
      'Lære å analysere multimodale tekster',
      'Forstå hvordan reklame påvirker',
    ],
    aktiviteter: [
      'Velg en reklamekampanje å analysere (film, plakat, sosiale medier)',
      'Identifiser og beskriv alle modaliteter som brukes',
      'Analyser samspillet mellom modalitetene',
      'Diskuter målgruppe, budskap og retoriske virkemidler',
      'Lag en presentasjon med analyse og vurdering',
    ],
    ressurser: [
      'Analysemodell for sammensatte tekster fra kapittel 6.1',
      'Begrepsliste: forankring, avløsning, kontrast',
      'Eksempler på reklameanalyse',
    ],
    vurdering: [
      'Grundighet i identifisering av modaliteter',
      'Kvalitet på analyse av samspill',
      'Bruk av fagbegreper',
      'Evne til kritisk vurdering',
    ],
    kompetansemaal: [
      'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
      'gjøre rede for retoriske appellformer og språklige virkemidler',
    ],
  },
  {
    id: 'norsk-vg1-6-gruppe-2',
    tittel: 'Filmscene-analyse i grupper',
    beskrivelse: 'Gruppen skal analysere en filmscene med fokus på filmspråk og virkemidler. Undersøk hvordan kameraføring, lyd, lys og klipp skaper mening og stemning.',
    antallElever: '3-4 elever',
    tidsramme: '2 skoletimer (90 min)',
    maal: [
      'Lære grunnleggende filmanalyse',
      'Forstå filmens virkemidler',
      'Utvikle visuell lesekompetanse',
    ],
    aktiviteter: [
      'Se filmscenen flere ganger med fokus på ulike elementer',
      'Analyser: kameravinkler, lyssetting, lyd/musikk, klipping',
      'Diskuter hvordan virkemidlene skaper stemning og mening',
      'Relater til filmens tema og budskap',
      'Presenter analysen med klipp fra filmen',
    ],
    ressurser: [
      'Filmanalyseverktøy fra kapittel 6.2',
      'Begrepsliste: mise-en-scène, diegetisk lyd, montasje',
      'Utvalgte filmscener egnet for analyse',
    ],
    vurdering: [
      'Identifisering av filmspråklige virkemidler',
      'Evne til å tolke virkningen av virkemidlene',
      'Bruk av relevant fagterminologi',
      'Samarbeid og presentasjon',
    ],
    kompetansemaal: [
      'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
      'bruke fagbegreper i analyse av tekster',
    ],
  },
];

const KAPITTEL_6_PROSJEKT: Prosjekt = {
  id: 'norsk-vg1-6-prosjekt',
  tittel: 'Lag en multimodal kampanje',
  beskrivelse: 'Gruppen skal planlegge og produsere en kampanje for en god sak (miljø, mobbing, psykisk helse o.l.). Kampanjen skal bestå av plakat, kort video og innlegg til sosiale medier.',
  varighet: '3-4 uker',
  maal: [
    'Anvende kunnskap om multimodale tekster i egen produksjon',
    'Utvikle kreative og kommunikative ferdigheter',
    'Lære om målgruppetenkning og strategisk kommunikasjon',
  ],
  faser: [
    {
      fase: 'Konseptutvikling (uke 1)',
      aktiviteter: [
        'Velg sak og definer målgruppe',
        'Research om temaet og lignende kampanjer',
        'Utvikle konsept og budskap',
        'Planlegg de tre kampanjeelementene',
      ],
      leveranse: 'Kampanjekonsept med målgruppe, budskap og skisser',
    },
    {
      fase: 'Produksjon (uke 2-3)',
      aktiviteter: [
        'Design og lag kampanjeplakat',
        'Produser kort video (30-60 sekunder)',
        'Skriv tekst til sosiale medier-innlegg',
        'Gi hverandre tilbakemelding og revidér',
      ],
      leveranse: 'Ferdig plakat, video og tekstutkast',
    },
    {
      fase: 'Ferdigstilling og presentasjon (uke 4)',
      aktiviteter: [
        'Finpuss alle produktene',
        'Skriv refleksjonsnotat om prosess og valg',
        'Forbered presentasjon av kampanjen',
        'Presenter for klassen og motta tilbakemelding',
      ],
      leveranse: 'Komplett kampanje, refleksjonsnotat og presentasjon',
    },
  ],
  vurderingskriterier: [
    {
      kriterie: 'Konsept og budskap',
      beskrivelse: 'Klarhet i budskap og relevans for målgruppen',
      lav: 'Uklart budskap, manglende målgruppetilpasning',
      middels: 'Tydelig budskap, tilfredsstillende målgruppetilpasning',
      hoy: 'Slagkraftig budskap, gjennomtenkt målgruppetilpasning',
    },
    {
      kriterie: 'Multimodal kompetanse',
      beskrivelse: 'Bruk av og samspill mellom modaliteter',
      lav: 'Modalitetene henger dårlig sammen, teknisk svakt',
      middels: 'Godt samspill, tilfredsstillende teknisk kvalitet',
      hoy: 'Effektivt og kreativt samspill, god teknisk kvalitet',
    },
    {
      kriterie: 'Kreativitet og originalitet',
      beskrivelse: 'Nyskapende og engasjerende uttrykk',
      lav: 'Lite originalt, kopierer kjente kampanjer',
      middels: 'Noen originale elementer, engasjerende',
      hoy: 'Kreativt og originalt, fanger oppmerksomhet',
    },
    {
      kriterie: 'Refleksjon',
      beskrivelse: 'Bevissthet om egne valg og virkemidler',
      lav: 'Overfladisk refleksjon, mangler fagbegreper',
      middels: 'God refleksjon med bruk av fagbegreper',
      hoy: 'Innsiktsfull refleksjon, kritisk vurdering av egne valg',
    },
  ],
  kompetansemaal: [
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
    'bruke ulike kilder på en kritisk og etterprøvbar måte',
    'skrive kreative tekster med bruk av ulike virkemidler',
  ],
};

const KAPITTEL_6_ROLLEKORT: Rollekort[] = [
  {
    id: 'norsk-vg1-6-rolle-1',
    rolle: 'Kreativ leder',
    beskrivelse: 'Har ansvar for det kreative konseptet og helheten',
    ansvar: [
      'Lede idédugnader og kreative prosesser',
      'Sørge for at alle elementer har felles visuelt uttrykk',
      'Ta beslutninger om stil, farger og tone',
      'Kvalitetssikre det estetiske',
    ],
    tips: [
      'Lag et moodboard med inspirasjon',
      'Tenk på konsistens på tvers av alle plattformer',
      'Vær åpen for andres ideer, men ta avgjørelser',
    ],
  },
  {
    id: 'norsk-vg1-6-rolle-2',
    rolle: 'Videoprodusent',
    beskrivelse: 'Har hovedansvar for videoinnholdet',
    ansvar: [
      'Skrive manus og planlegge videoinnhold',
      'Filme eller animere videoen',
      'Redigere med lyd, musikk og effekter',
      'Sikre god teknisk kvalitet',
    ],
    tips: [
      'Hold videoen kort og konsis (30-60 sek)',
      'Start med det viktigste - fang oppmerksomheten',
      'Bruk musikk og lyd bevisst',
    ],
  },
  {
    id: 'norsk-vg1-6-rolle-3',
    rolle: 'Grafisk designer',
    beskrivelse: 'Har ansvar for plakat og visuelt design',
    ansvar: [
      'Designe kampanjeplakat',
      'Velge og bearbeide bilder',
      'Sørge for lesbarhet og visuell appell',
      'Tilpasse design til ulike formater',
    ],
    tips: [
      'Bruk designprogrammer som Canva eller Figma',
      'Hold designet enkelt og slagkraftig',
      'Test at teksten er lesbar på avstand',
    ],
  },
  {
    id: 'norsk-vg1-6-rolle-4',
    rolle: 'Tekstforfatter',
    beskrivelse: 'Har ansvar for tekst og budskap',
    ansvar: [
      'Skrive slagord og kampanjetekst',
      'Formulere innlegg til sosiale medier',
      'Sørge for konsistent tone og stil',
      'Tilpasse tekst til ulike plattformer',
    ],
    tips: [
      'Skriv kort og slagkraftig',
      'Bruk aktivt språk og direkte tiltale',
      'Test tekstene på andre for å sjekke effekten',
    ],
  },
];

// ============================================================================
// KAPITTEL 7: SAMISK SPRÅK OG KULTUR
// ============================================================================

const KAPITTEL_7_GRUPPEOPPGAVER: Gruppeoppgave[] = [
  {
    id: 'norsk-vg1-7-gruppe-1',
    tittel: 'Utforskning av samisk kulturarv',
    beskrivelse: 'Gruppen skal utforske et aspekt ved samisk kultur (joik, duodji, reindrift, fortellertradisjon) og presentere funnene for klassen med fokus på kulturens betydning i dag.',
    antallElever: '3-4 elever',
    tidsramme: '2-3 skoletimer (90-135 min)',
    maal: [
      'Øke kunnskapen om samisk kultur og historie',
      'Utvikle respekt for urfolks kulturarv',
      'Lære å formidle kulturell kunnskap',
    ],
    aktiviteter: [
      'Velg et kulturelt tema: joik, duodji, reindrift eller fortellertradisjon',
      'Research med fokus på historisk bakgrunn og nåtidig betydning',
      'Finn eksempler: lyd, bilder, video, tekster',
      'Lag en engasjerende presentasjon',
      'Inkluder refleksjon over kulturens plass i Norge i dag',
    ],
    ressurser: [
      'Sametingets nettsider og ressurser',
      'NRK Sápmi artikler og videoer',
      'Lærebokens kapittel om samisk kultur (7.1-7.3)',
      'Dokumentarer om samisk kultur',
    ],
    vurdering: [
      'Dybde og nøyaktighet i informasjonen',
      'Evne til å formidle kulturell betydning',
      'Respektfull og balansert fremstilling',
      'Kreativitet i presentasjonen',
    ],
    kompetansemaal: [
      'utforske og reflektere over språklig variasjon og flerspråklighet i Norge',
      'gjøre rede for historiske språkendringer i Norge fra norrønt til moderne norsk',
    ],
  },
  {
    id: 'norsk-vg1-7-gruppe-2',
    tittel: 'Fornorskning og forsoning - Diskusjonsgruppe',
    beskrivelse: 'Gruppen skal sette seg inn i fornorskingshistorien og sannings- og forsoningskommisjonens arbeid, og forberede en strukturert klassediskusjon.',
    antallElever: '4 elever',
    tidsramme: '2 skoletimer (90 min)',
    maal: [
      'Forstå fornorskingspolitikkens konsekvenser',
      'Reflektere over forsoning og rettferdighet',
      'Utvikle evne til nyansert diskusjon',
    ],
    aktiviteter: [
      'Les om fornorskingspolitikken og dens virkninger',
      'Studer sannings- og forsoningskommisjonens rapport',
      'Forbered diskusjonsspørsmål om ansvar, forsoning og veien videre',
      'Led en klassediskusjon med ulike perspektiver',
      'Oppsummer lærdommene i en kort rapport',
    ],
    ressurser: [
      'Sannings- og forsoningskommisjonens rapport',
      'Artikler om fornorskingspolitikken',
      'Personlige fortellinger fra samer, kvener og skogfinner',
      'Regjeringens unnskyldning og oppfølging',
    ],
    vurdering: [
      'Forståelse av historisk kontekst',
      'Evne til å fasilitere respektfull diskusjon',
      'Nyansert behandling av komplekst tema',
      'Kvalitet på oppsummering',
    ],
    kompetansemaal: [
      'utforske og reflektere over språklig variasjon og flerspråklighet i Norge',
      'lytte til andre, bygge opp saklig argumentasjon og bruke relevante og saklige argumenter i diskusjoner',
    ],
  },
];

const KAPITTEL_7_PROSJEKT: Prosjekt = {
  id: 'norsk-vg1-7-prosjekt',
  tittel: 'Samisk litteratur og stemmer i dag',
  beskrivelse: 'Gruppen skal utforske samisk litteratur og kultur gjennom å analysere verk av samiske forfattere/artister og lage en multimedial presentasjon som løfter fram samiske stemmer i norsk offentlighet.',
  varighet: '2-3 uker',
  maal: [
    'Bli kjent med samisk litteratur og kunst',
    'Forstå samisk perspektiv i norsk sammenheng',
    'Utvikle kulturell bevissthet og respekt',
  ],
  faser: [
    {
      fase: 'Utforskning (uke 1)',
      aktiviteter: [
        'Oversikt over samiske forfattere og artister',
        'Velg 2-3 verk å fordype dere i',
        'Research om forfatterne/artistene og deres bakgrunn',
        'Les/lytt til verkene og noter førsteinntrykk',
      ],
      leveranse: 'Oversikt over valgte verk med begrunnelse',
    },
    {
      fase: 'Analyse og tolkning (uke 2)',
      aktiviteter: [
        'Analyser verkene med fokus på tema og virkemidler',
        'Undersøk kulturell og historisk kontekst',
        'Diskuter hva verkene formidler om samisk erfaring',
        'Planlegg presentasjonsform',
      ],
      leveranse: 'Skriftlig analyse av verkene',
    },
    {
      fase: 'Presentasjon (uke 3)',
      aktiviteter: [
        'Lag multimedial presentasjon (video, lydcollage, utstilling)',
        'Inkluder egne refleksjoner og lærdommer',
        'Presenter for klassen',
        'Skriv individuell refleksjon',
      ],
      leveranse: 'Multimedial presentasjon og individuell refleksjon',
    },
  ],
  vurderingskriterier: [
    {
      kriterie: 'Kulturforståelse',
      beskrivelse: 'Innsikt i samisk kultur og perspektiver',
      lav: 'Overfladisk forståelse, stereotypier',
      middels: 'God forståelse, respektfull fremstilling',
      hoy: 'Dyp innsikt, nyansert og sensitiv fremstilling',
    },
    {
      kriterie: 'Litterær analyse',
      beskrivelse: 'Kvalitet på analyse av de valgte verkene',
      lav: 'Overfladisk beskrivelse, mangler tolkning',
      middels: 'God analyse med relevante observasjoner',
      hoy: 'Innsiktsfull analyse med selvstendig tolkning',
    },
    {
      kriterie: 'Multimedial presentasjon',
      beskrivelse: 'Kreativitet og kvalitet i presentasjonen',
      lav: 'Lite engasjerende, svak teknisk kvalitet',
      middels: 'Engasjerende presentasjon, god kvalitet',
      hoy: 'Kreativ og gripende, høy kvalitet',
    },
    {
      kriterie: 'Refleksjon',
      beskrivelse: 'Personlig og faglig refleksjon over læring',
      lav: 'Overfladisk, mangler personlig engasjement',
      middels: 'Gjennomtenkt refleksjon med noen innsikter',
      hoy: 'Dyp refleksjon som viser personlig utvikling',
    },
  ],
  kompetansemaal: [
    'utforske og reflektere over språklig variasjon og flerspråklighet i Norge',
    'analysere og tolke skjønnlitteratur på bokmål og nynorsk',
    'bruke kilder på en kritisk og etterprøvbar måte',
  ],
};

const KAPITTEL_7_ROLLEKORT: Rollekort[] = [
  {
    id: 'norsk-vg1-7-rolle-1',
    rolle: 'Kulturhistoriker',
    beskrivelse: 'Har ansvar for historisk kontekst og bakgrunn',
    ansvar: [
      'Research samisk historie og fornorskingspolitikken',
      'Sette verkene i historisk kontekst',
      'Forklare kulturelle referanser',
      'Sikre historisk nøyaktighet',
    ],
    tips: [
      'Bruk primærkilder når mulig',
      'Vær sensitiv for vanskelige temaer',
      'Koble fortid til nåtid',
    ],
  },
  {
    id: 'norsk-vg1-7-rolle-2',
    rolle: 'Litterær analytiker',
    beskrivelse: 'Har hovedansvar for analyse av de litterære verkene',
    ansvar: [
      'Lede analysen av tema og virkemidler',
      'Identifisere sentrale motiver og symboler',
      'Koble til litterære tradisjoner',
      'Skrive den skriftlige analysen',
    ],
    tips: [
      'Les verkene flere ganger',
      'Se etter gjentakende motiver',
      'Tenk på hva som gjør stemmen unik',
    ],
  },
  {
    id: 'norsk-vg1-7-rolle-3',
    rolle: 'Medieprodusent',
    beskrivelse: 'Har ansvar for den multimediale presentasjonen',
    ansvar: [
      'Planlegge presentasjonsformen',
      'Samle lyd, bilde og video',
      'Redigere og sette sammen presentasjonen',
      'Sikre god teknisk kvalitet',
    ],
    tips: [
      'Bruk autentisk materiale der mulig',
      'La verkene tale for seg selv',
      'Tenk på publikums opplevelse',
    ],
  },
  {
    id: 'norsk-vg1-7-rolle-4',
    rolle: 'Refleksjonskoordinator',
    beskrivelse: 'Har ansvar for refleksjon og personlig vinkling',
    ansvar: [
      'Lede refleksjonssamtaler i gruppen',
      'Dokumentere læringsprosessen',
      'Formulere hva gruppen har lært',
      'Koordinere individuelle refleksjoner',
    ],
    tips: [
      'Still åpne spørsmål til gruppen',
      'Noter tanker underveis i prosessen',
      'Koble til egne erfaringer med respekt',
    ],
  },
];

// ============================================================================
// KAPITTEL 8: GRAMMATIKK OG RETTSKRIVING
// ============================================================================

const KAPITTEL_8_GRUPPEOPPGAVER: Gruppeoppgave[] = [
  {
    id: 'norsk-vg1-8-gruppe-1',
    tittel: 'Grammatikk-quiz-konkurranse',
    beskrivelse: 'Gruppen skal lage en interaktiv quiz om setningsanalyse og ordklasser, og deretter utfordre andre grupper. Lær gjennom å lage og løse oppgaver.',
    antallElever: '3-4 elever',
    tidsramme: '2 skoletimer (90 min)',
    maal: [
      'Repetere og befeste grammatikkunnskaper',
      'Lære gjennom å forklare for andre',
      'Gjøre grammatikk engasjerende',
    ],
    aktiviteter: [
      'Lag 15-20 quiz-spørsmål om setningsanalyse og ordklasser',
      'Varier mellom ulike oppgavetyper (flervalg, finn feilen, analyser)',
      'Test quizen på hverandre og juster vanskelighetsgrad',
      'Utfordre andre grupper i quiz-konkurranse',
      'Diskuter svarene og forklar reglene',
    ],
    ressurser: [
      'Lærebokens grammatikkapitler (8.1-8.4)',
      'Quizverktøy som Kahoot eller Quizlet',
      'Oversikt over ordklasser og setningsledd',
    ],
    vurdering: [
      'Faglig korrekthet i spørsmålene',
      'Variasjon og kreativitet',
      'Evne til å forklare grammatiske regler',
      'Engasjement og samarbeid',
    ],
    kompetansemaal: [
      'bruke grammatisk kunnskap til å analysere og vurdere egen og andres tekst',
      'gjøre rede for setningsoppbygging og bruke dette i egen skriving',
    ],
  },
  {
    id: 'norsk-vg1-8-gruppe-2',
    tittel: 'Korrekturlesing og tekstforbedring',
    beskrivelse: 'Gruppen skal arbeide som et redaksjonsteam og forbedre tekster med språklige feil. Øv på å identifisere, kategorisere og rette feil.',
    antallElever: '3-4 elever',
    tidsramme: '2 skoletimer (90 min)',
    maal: [
      'Utvikle ferdigheter i korrekturlesing',
      'Anvende grammatikkunnskaper praktisk',
      'Lære å gi konstruktiv tilbakemelding på språk',
    ],
    aktiviteter: [
      'Få utdelt tekster med innlagte feil',
      'Identifiser feilene og kategoriser dem (rettskriving, tegnsetting, grammatikk)',
      'Rett feilene og begrunn endringene',
      'Sammenlign løsningene med andre grupper',
      'Diskuter vanlige feiltyper og hvordan unngå dem',
    ],
    ressurser: [
      'Tekster med innlagte feil fra lærer',
      'Rettskrivingsregler og grammatikkoversikt',
      'Korrekturmerker og symboler',
    ],
    vurdering: [
      'Evne til å identifisere feil',
      'Korrekthet i rettingene',
      'Begrunnelser for endringer',
      'Systematikk og samarbeid',
    ],
    kompetansemaal: [
      'bruke grammatisk kunnskap til å analysere og vurdere egen og andres tekst',
      'mestre rettskriving og tegnsetting',
    ],
  },
];

const KAPITTEL_8_PROSJEKT: Prosjekt = {
  id: 'norsk-vg1-8-prosjekt',
  tittel: 'Lag en grammatikkhåndbok for ungdom',
  beskrivelse: 'Gruppen skal lage en brukervennlig og engasjerende grammatikkhåndbok rettet mot jevnaldrende. Håndboken skal forklare grammatiske regler på en forståelig måte med eksempler fra ungdomsspråk.',
  varighet: '2-3 uker',
  maal: [
    'Fordype seg i grammatiske emner',
    'Lære å forklare fagstoff pedagogisk',
    'Produsere nyttig læringsressurs',
  ],
  faser: [
    {
      fase: 'Planlegging (uke 1)',
      aktiviteter: [
        'Velg grammatiske emner å dekke',
        'Fordel ansvar for ulike deler',
        'Bestem format (digital, print, video)',
        'Research og samle eksempler',
      ],
      leveranse: 'Innholdsfortegnelse og rollefordeling',
    },
    {
      fase: 'Produksjon (uke 2)',
      aktiviteter: [
        'Skriv forklaringer med eksempler',
        'Lag øvingsoppgaver til hvert emne',
        'Design layout og visuelt uttrykk',
        'Gi hverandre tilbakemelding',
      ],
      leveranse: 'Førsteutkast av alle deler',
    },
    {
      fase: 'Ferdigstilling (uke 3)',
      aktiviteter: [
        'Revidér basert på tilbakemelding',
        'Test håndboken på medelever',
        'Gjør siste justeringer',
        'Presenter for klassen',
      ],
      leveranse: 'Ferdig grammatikkhåndbok og presentasjon',
    },
  ],
  vurderingskriterier: [
    {
      kriterie: 'Faglig innhold',
      beskrivelse: 'Korrekthet og dekning av grammatiske emner',
      lav: 'Feil i forklaringene, ufullstendig dekning',
      middels: 'Korrekt innhold, god dekning av emner',
      hoy: 'Presist og grundig, utfyllende dekning',
    },
    {
      kriterie: 'Pedagogisk formidling',
      beskrivelse: 'Evne til å forklare på en forståelig måte',
      lav: 'Vanskelig å forstå, dårlige eksempler',
      middels: 'Forståelig med gode eksempler',
      hoy: 'Svært tilgjengelig, kreative og relevante eksempler',
    },
    {
      kriterie: 'Design og brukervennlighet',
      beskrivelse: 'Visuelt uttrykk og navigasjon',
      lav: 'Rotete, vanskelig å finne frem',
      middels: 'Oversiktlig, funksjonelt design',
      hoy: 'Gjennomført design, lett å bruke',
    },
    {
      kriterie: 'Øvingsoppgaver',
      beskrivelse: 'Kvalitet på oppgaver for øving',
      lav: 'Få eller dårlige oppgaver',
      middels: 'Varierte og nyttige oppgaver',
      hoy: 'Engasjerende oppgaver med fasit og forklaring',
    },
  ],
  kompetansemaal: [
    'bruke grammatisk kunnskap til å analysere og vurdere egen og andres tekst',
    'gjøre rede for setningsoppbygging og bruke dette i egen skriving',
    'mestre rettskriving og tegnsetting',
  ],
};

const KAPITTEL_8_ROLLEKORT: Rollekort[] = [
  {
    id: 'norsk-vg1-8-rolle-1',
    rolle: 'Grammatikkekspert',
    beskrivelse: 'Har ansvar for faglig korrekthet',
    ansvar: [
      'Sikre at alle forklaringer er korrekte',
      'Finne gode eksempler på grammatiske fenomener',
      'Forklare vanskelige konsepter',
      'Kvalitetssikre det faglige innholdet',
    ],
    tips: [
      'Dobbeltsjekk regler i læreboken eller ordbok',
      'Bruk eksempler fra ulike teksttyper',
      'Forklar hvorfor reglene er som de er',
    ],
  },
  {
    id: 'norsk-vg1-8-rolle-2',
    rolle: 'Pedagog',
    beskrivelse: 'Har ansvar for at stoffet er forståelig',
    ansvar: [
      'Sørge for enkelt og klart språk',
      'Teste forklaringene på andre',
      'Legge til tips og huskefraser',
      'Strukturere progressjonen i stoffet',
    ],
    tips: [
      'Tenk på hva som var vanskelig for deg å forstå',
      'Bruk analogier og hverdagseksempler',
      'Start med det enkle, bygg opp kompleksitet',
    ],
  },
  {
    id: 'norsk-vg1-8-rolle-3',
    rolle: 'Oppgavemaker',
    beskrivelse: 'Har ansvar for øvingsoppgaver',
    ansvar: [
      'Lage varierte øvingsoppgaver',
      'Lage fasit med forklaringer',
      'Teste at oppgavene fungerer',
      'Tilpasse vanskelighetsgrad',
    ],
    tips: [
      'Lag oppgaver på ulike nivåer',
      'Inkluder både drill-oppgaver og mer åpne oppgaver',
      'Bruk eksempler fra ungdomsspråk og populærkultur',
    ],
  },
  {
    id: 'norsk-vg1-8-rolle-4',
    rolle: 'Designer',
    beskrivelse: 'Har ansvar for layout og visuelt uttrykk',
    ansvar: [
      'Designe håndbokens utseende',
      'Lage oversiktlige tabeller og figurer',
      'Sikre god lesbarhet',
      'Organisere innholdet logisk',
    ],
    tips: [
      'Bruk farger for å skille kategorier',
      'Lag tydelig hierarki med overskrifter',
      'Tenk på at det skal være lett å slå opp',
    ],
  },
];

// ============================================================================
// EKSPORT
// ============================================================================

export const GRUPPEOPPGAVER_NORSK_VG1_DEL2 = {
  kapittel5: {
    tittel: 'Skriving og kommunikasjon',
    delkapitler: ['5.1 Muntlig kommunikasjon', '5.2 Kreativ skriving', '5.3 Fagartikkel', '5.4 Skriveprosessen'],
    gruppeoppgaver: KAPITTEL_5_GRUPPEOPPGAVER,
    prosjekt: KAPITTEL_5_PROSJEKT,
    rollekort: KAPITTEL_5_ROLLEKORT,
  },
  kapittel6: {
    tittel: 'Sammensatte tekster og medier',
    delkapitler: ['6.1 Sammensatte tekster', '6.2 Film som tekst', '6.3 Sosiale medier'],
    gruppeoppgaver: KAPITTEL_6_GRUPPEOPPGAVER,
    prosjekt: KAPITTEL_6_PROSJEKT,
    rollekort: KAPITTEL_6_ROLLEKORT,
  },
  kapittel7: {
    tittel: 'Samisk språk og kultur',
    delkapitler: ['7.1 Samisk språk og historie', '7.2 Samisk litteratur', '7.3 Samisk kultur i dag'],
    gruppeoppgaver: KAPITTEL_7_GRUPPEOPPGAVER,
    prosjekt: KAPITTEL_7_PROSJEKT,
    rollekort: KAPITTEL_7_ROLLEKORT,
  },
  kapittel8: {
    tittel: 'Grammatikk og rettskriving',
    delkapitler: ['8.1 Setningsanalyse', '8.2 Ordklasser', '8.3 Tegnsetting', '8.4 Rettskriving'],
    gruppeoppgaver: KAPITTEL_8_GRUPPEOPPGAVER,
    prosjekt: KAPITTEL_8_PROSJEKT,
    rollekort: KAPITTEL_8_ROLLEKORT,
  },
};

// Hjelpefunksjoner for å hente spesifikke deler
export function getGruppeoppgaverForKapittel(kapittelNummer: number) {
  const key = `kapittel${kapittelNummer}` as keyof typeof GRUPPEOPPGAVER_NORSK_VG1_DEL2;
  return GRUPPEOPPGAVER_NORSK_VG1_DEL2[key]?.gruppeoppgaver || [];
}

export function getProsjektForKapittel(kapittelNummer: number) {
  const key = `kapittel${kapittelNummer}` as keyof typeof GRUPPEOPPGAVER_NORSK_VG1_DEL2;
  return GRUPPEOPPGAVER_NORSK_VG1_DEL2[key]?.prosjekt || null;
}

export function getRollekortForKapittel(kapittelNummer: number) {
  const key = `kapittel${kapittelNummer}` as keyof typeof GRUPPEOPPGAVER_NORSK_VG1_DEL2;
  return GRUPPEOPPGAVER_NORSK_VG1_DEL2[key]?.rollekort || [];
}

export function getAlleGruppeoppgaver() {
  return [
    ...KAPITTEL_5_GRUPPEOPPGAVER,
    ...KAPITTEL_6_GRUPPEOPPGAVER,
    ...KAPITTEL_7_GRUPPEOPPGAVER,
    ...KAPITTEL_8_GRUPPEOPPGAVER,
  ];
}

export function getAlleProsjekter() {
  return [
    KAPITTEL_5_PROSJEKT,
    KAPITTEL_6_PROSJEKT,
    KAPITTEL_7_PROSJEKT,
    KAPITTEL_8_PROSJEKT,
  ];
}

export function getAlleRollekort() {
  return [
    ...KAPITTEL_5_ROLLEKORT,
    ...KAPITTEL_6_ROLLEKORT,
    ...KAPITTEL_7_ROLLEKORT,
    ...KAPITTEL_8_ROLLEKORT,
  ];
}
