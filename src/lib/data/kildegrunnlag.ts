/**
 * Kildegrunnlag per høyskolebok: hvilke eksamenssett, sensorveiledninger og
 * andre kilder boka faktisk er bygget på — vist på /bok/<courseId>/kildegrunnlag.
 *
 * SANNFERDIGHETS-KONTRAKT (ufravikelig, fra produkteier):
 * - Innholdet her er destillert fra bokas EKSAMENSANALYSE.md §8 «Kildeliste»
 *   (docs/hoyskole-boker/<courseId>/) og skal stemme EKSAKT med arkivet.
 * - Sensorveiledninger listes KUN der de faktisk finnes; hull i arkivet
 *   (årganger uten veiledning, manglende sett) deklareres ærlig i `forbehold`.
 * - Ingen påstander om kilder som ikke er lest.
 *
 * Ved ny bok (wiring-fasen i BYGGEPLAN): legg til en oppføring her — hentet
 * fra analysens kildeliste, aldri diktet.
 */

export interface KildeGruppe {
  tittel: string;
  detalj: string;
}

export interface Kildegrunnlag {
  courseId: string;
  institusjon: string;
  /** Kort avsnitt: hva boka er kalibrert mot. */
  sammendrag: string;
  eksamenssett: KildeGruppe[];
  sensorveiledninger: KildeGruppe[];
  andreKilder: KildeGruppe[];
  /** Ærlige hull og forbehold i arkivet — deklareres alltid. */
  forbehold: string[];
  /** Når eksamensanalysen ble gjennomført. */
  analysedato: string;
}

const KILDEGRUNNLAG: Record<string, Kildegrunnlag> = {
  exphil03: {
    courseId: 'exphil03',
    institusjon: 'Universitetet i Oslo (UiO) — Institutt for filosofi, idé- og kunsthistorie og klassiske språk (IFIKK)',
    sammendrag:
      'Boka er kalibrert mot EXPHIL03s eksamensarkiv ved UiO: 40 unike oppgavesett fra vår 2017 til høst 2025 og 8 sensorveiledninger fra 2021–2025. Analysen kartla temafrekvens, oppgavesjangre og hva sensorveiledningene faktisk belønner — og boka er bygget rundt akkurat det.',
    eksamenssett: [
      {
        tittel: '40 unike oppgavesett (vår 2017 – høst 2025)',
        detalj:
          '15 selvstudium-eksamener (skoleeksamen), 16 seminarvariant-sett og 9 utsatte prøver. Settene fra og med vår 2021 (dagens pensumregime) er lest grundig; eldre sett er brukt til sjanger- og temaregistrering.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '8 sensorveiledninger (2021–2025)',
        detalj:
          'H2021 (seminar), H2024 (to varianter), V2025 (tre, inkl. utsatt prøve) og H2025 (selvstudium + seminar). Disse er kjernen i analysen: de definerer vurderingspunktene per spørsmål, firepunktslisten for drøftingsdelen og terskelen for bestått.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for EXPHIL03',
        detalj: 'Omskrevet sammendrag av emnesiden (læringsmål, eksamensform, pensumregime). Emnestatus verifisert aktiv i 2026.',
      },
      {
        tittel: 'Pensumverket «Vite, være, gjøre» (VVG)',
        detalj:
          'Bokas tenker-galleri og kapittelhenvisninger følger pensumverket slik eksamensdokumentene navngir det. Pensumtekstene refereres (tenker, verk, begrep) — de siteres aldri i lengde.',
      },
    ],
    forbehold: [
      'Sensorveiledninger finnes i arkivet kun for årgangene 2021–2025. For eldre årganger er sensorlogikken utledet av oppgaveformuleringene alene.',
      'Fra og med vår 2021 gjelder dagens pensum (VVG). Eldre sett har et annet tenker-galleri og er kun brukt til sjanger- og strukturlæring, ikke til temavekting.',
      'Alle oppgaver og eksempler i boka er nyskrevne. Eksamensarkivet er brukt som mønster (sjangre, temavekting, vurderingskriterier) — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },

  econ1310: {
    courseId: 'econ1310',
    institusjon: 'Universitetet i Oslo (UiO) — Økonomisk institutt',
    sammendrag:
      'Boka er kalibrert mot ECON1310s eksamensarkiv ved UiO: 22 ordinære eksamenssett (vår 2015 – høst 2025), 9 utsatt-eksamener og 21 sensorveiledninger/løsningsforslag. Analysen er kvantitativ der kildene tillater det — temafrekvens og oppgavevekting i boka speiler arkivet.',
    eksamenssett: [
      {
        tittel: '22 ordinære eksamenssett (vår 2015 – høst 2025)',
        detalj:
          'Settene fra 2018–2025 (16 stk) er lest grundig oppgave for oppgave; settene fra 2015–2017 (6 stk) er skumlest for temaregistrering.',
      },
      {
        tittel: '9 utsatt-eksamener (2020–2025)',
        detalj: 'Skumlest for temaregistrering, med tilhørende sensorveiledninger der de finnes i arkivet.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '21 sensorveiledninger/løsningsforslag (2015–2025)',
        detalj:
          '16 sensorveiledninger for perioden vår 2018 – høst 2025 (for vår 2020 og vår 2021 i form av løsningsforslag) og 5 fra 2015–2017. Lest grundig — de definerer hva sensor belønner per oppgavetype.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for ECON1310',
        detalj: 'Omskrevet sammendrag av emnesiden (læringsmål, eksamensform). Emnestatus verifisert aktiv i 2026.',
      },
    ],
    forbehold: [
      'Sensorveiledning for vår 2016 finnes ikke i arkivet.',
      'To filer i arkivet (vår/høst 2021) hadde ombyttede filnavn; analysen omtaler settene etter faktisk innhold.',
      'Alle oppgaver og tall i boka er nyskrevne. Arkivet er brukt som mønster (modeller, sjangre, temavekting) — aldri ordrett. Modelligningene er standard faglig notasjon.',
    ],
    analysedato: 'juli 2026',
  },

  jus1111: {
    courseId: 'jus1111',
    institusjon: 'Universitetet i Oslo (UiO) — Det juridiske fakultet',
    sammendrag:
      'Boka er kalibrert mot JUS1111s eksamensarkiv ved UiO: 30 eksamensgjennomføringer 2011–2025 og 21 sensorveiledninger. Typetilfellene, metodekravene og feilkodene i boka er destillert fra det sensorveiledningene faktisk trekker for og belønner.',
    eksamenssett: [
      {
        tittel: '30 eksamensgjennomføringer (2011–2025)',
        detalj:
          'Alle ordinære eksamener høst 2011 – høst 2025 pluss utsatt prøve vår 2020. Årgangene 2018–2025 er lest i sin helhet; 2011–2017 er skumlest for tema- og formatregistrering.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '21 sensorveiledninger (2011–2025)',
        detalj:
          'Samtlige er lest i sin helhet — inkludert delte veiledninger (del 1/del 2) for årgangene med todelt eksamen. Veiledningene er kilden til bokas sensornøkler og typiske feil. Tallet er kontrollert mot arkivet 25. juli 2026; en tidligere versjon oppga 32.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for JUS1111',
        detalj: 'Omskrevet sammendrag av emnesiden. Emnestatus verifisert aktiv i 2026.',
      },
      {
        tittel: 'Lovdata',
        detalj:
          'Lovhenvisninger og domsreferanser i boka er kontrollert mot Lovdata av en egen verifikasjonsagent — inkludert lovendringer etter at eksamenssettene ble gitt (bl.a. forbrukerkjøpsloven 2024).',
      },
    ],
    forbehold: [
      'Høst 2013 mangler sensorveiledning i arkivet; den årgangen er rekonstruert fra oppgaveteksten alene.',
      'Oppgavesettet for høst 2015 mangler i arkivet; temaene er hentet fra sensorveiledningen.',
      'Karakterbeskrivelsene A–F i eldre veiledninger gjelder til og med 2019; fra 2020 vurderes emnet bestått/ikke bestått.',
      'Alle praktikumsoppgaver i boka er nyskrevne (nye parter, fakta og formuleringer). Arkivet er brukt som mønster — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },

  stv1100: {
    courseId: 'stv1100',
    institusjon: 'Universitetet i Oslo (UiO) — Institutt for statsvitenskap (ISV)',
    sammendrag:
      'Boka er kalibrert mot det tilgjengelige eksamensarkivet for STV1100 ved UiO: 10 distinkte dokumenter som dekker 2016–2025 — 7 sensorveiledninger og 3 rene oppgavesett. Arkivet er lite men rikt: veiledningene gjengir også oppgavesettene og forklarer vurderingen i detalj.',
    eksamenssett: [
      {
        tittel: 'Oppgavesett for 8 gjennomføringer (2016–2025)',
        detalj:
          '3 rene oppgavesett (utdrag høst 2016, høst 2018 ordinær og utsatt) pluss oppgavesettene for 2019, 2020, høst 2022, 2023 og 2025 slik de gjengis i sin helhet i sensorveiledningene.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '7 sensorveiledninger (2018–2025)',
        detalj:
          'Høst 2018 (ordinær og utsatt), 2019, 2020, høst 2022, 2023 og 2025. Disse er kjernen i analysen — de viser hvilke momenter sensor ser etter per oppgave og hvordan drøfting vektes mot gjengivelse.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for STV1100',
        detalj: 'Omskrevet sammendrag av emnesiden. Emnestatus verifisert aktiv i 2026.',
      },
      {
        tittel: 'Pensumreferanser slik veiledningene navngir dem',
        detalj:
          'Grunnboka Malnes & Midgaard, «Politisk filosofi», og primærtekstene (Platon, Machiavelli, Rawls, Berlin, Pettit, Mill, Nussbaum m.fl.) refereres slik sensorveiledningene selv gjør — de siteres aldri i lengde.',
      },
    ],
    forbehold: [
      'Arkivet har ingen sensorveiledninger for 2016, 2017, 2021 og 2024 — de årgangene inngår ikke i sensor-kalibreringen.',
      'Ingen dokumenter i arkivet oppgir poenggrenser; karakter settes ved helhetlig skjønn, og boka sier dette der det er relevant.',
      'Alle oppgaver og eksempler i boka er nyskrevne. Arkivet er brukt som mønster (sjangre, temavekting, vurderingsmomenter) — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },
  psy1010: {
    courseId: 'psy1010',
    institusjon: 'Universitetet i Oslo (UiO) — Psykologisk institutt',
    sammendrag:
      'Boka er kalibrert mot PSY1010s eksamensarkiv ved UiO: 29 eksamenssett fra 2008 til 2025 (inkludert to utsatte prøver) og 10 sensorveiledninger fra 2018–2025. Emnet samkjøres med PSYC1100 (profesjonsstudiet) med identiske oppgavesett, så arkivet dekker begge. Temavekting, oppgavesjangre og tolkningskravene i boka speiler det arkivet faktisk viser.',
    eksamenssett: [
      {
        tittel: '29 eksamenssett (2008–2025, inkl. to utsatte prøver)',
        detalj:
          'Settene fra 2015–2025 er lest i sin helhet; 2008–2014 er skumlest for temaregistrering. Årene 2020–2022 var hjemmeeksamen med åpen bok — regimeforskjellen er tatt hensyn til i kalibreringen.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '10 sensorveiledninger (2018–2025)',
        detalj:
          'Alle lest grundig — de er kjernen i analysen og viser hva sensor belønner per oppgavetype: begrepsredegjørelse, tolkning av statistiske resultater og små regneoppgaver med oppgitte formler.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for PSY1010',
        detalj: 'Omskrevet sammendrag av emnesiden (læringsmål, eksamensform). Emnestatus verifisert aktiv i 2026.',
      },
      {
        tittel: 'Pensumreferanser slik veiledningene navngir dem',
        detalj:
          'Bordens & Abbott (forskningsmetode) og Kvale & Brinkmann (kvalitativt intervju) refereres slik sensorveiledningene selv gjør — de siteres aldri i lengde.',
      },
    ],
    forbehold: [
      'Egne oppgave-PDF-er for vår 2024 og vår 2025 mangler i arkivet; de fullstendige oppgavetekstene står i sensorveiledningene for de årene.',
      'Sensorveiledninger finnes kun for 2018–2025. For eldre årganger er sensorlogikken utledet av oppgaveformuleringene alene.',
      'Én arkivfil (vår 2022) har trykkfeil i dokumentoverskriften («våren 2021»); innholdet er verifisert mot riktig årgang.',
      'Alle oppgaver, caser og tall i boka er nyskrevne. Arkivet er brukt som mønster (sjangre, temavekting, vurderingskrav) — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },
  fil1001: {
    courseId: 'fil1001',
    institusjon: 'Universitetet i Oslo (UiO) — Institutt for filosofi, idé- og kunsthistorie og klassiske språk (IFIKK)',
    sammendrag:
      'Boka er kalibrert mot FIL1001s eksamensarkiv ved UiO: 22 filer som utgjør 21 unike oppgavesett fra 2005 til 2024 — 18 ordinære og 3 utsatte prøver. Arkivet inneholder nøyaktig én sensorveiledning, for høsten 2018, og ingen løsningsforslag i det hele tatt. Temafrekvensene, sjangerkodene S1–S5 og feilkatalogen #1–#10 er utledet av settene selv.',
    eksamenssett: [
      {
        tittel: '18 ordinære oppgavesett (H2005 – H2024)',
        detalj:
          'H2005, H2006, V2008–V2018, H2018, H2019, H2022, H2023 og H2024. V2017 finnes i både bokmåls- og nynorskutgave, men er ett sett og telles én gang. Alle frekvenspåstander i boka har nevner 21 og er talt mot settene.',
      },
      {
        tittel: '3 utsatte prøver (H2018, V2018, H2021)',
        detalj:
          'Utsatt eksamen har samme form og vekt som ordinær, og inngår derfor i frekvenstellingen på lik linje. H2021-settet bærer i tillegg sensorveiledningen, se under.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: 'Én sensorveiledning: høsten 2018',
        detalj:
          'Den ligger på siste side av det utsatte H2021-settet, ikke som eget dokument, og gir fem kjennetegn på et godt svar. Den er den eneste som finnes for emnet, og boka omtaler den konsekvent i entall. Sensorkravene i eksamenskartet hviler på denne veiledningen, på oppgavenes egne instruksjonsverb og på UiOs generelle kvalitative karakterbeskrivelser A–F.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for FIL1001',
        detalj:
          'Omskrevet sammendrag, kontrollert 26. juli 2026: 10 studiepoeng, 4-timers digital skoleeksamen i Inspera, ingen hjelpemidler, karakterskala A–F. Besvarelsen kan skrives på norsk, svensk, dansk eller engelsk.',
      },
    ],
    forbehold: [
      'Arkivet har verken fasit eller løsningsforslag for FIL1001 — mappene finnes, men er tomme. Alle modellbesvarelser i boka er derfor nyskrevet av oss, og er merket som det hvert eneste sted de forekommer. Ingen av dem er en ekte kandidatbesvarelse.',
      'Eksamensoppgaver og sensorveiledninger fra offentlige institusjoner er unntatt opphavsrett etter åndsverkloven § 14. Alt innhold i boka er likevel omskrevet med egne ord; ingen oppgavetekst er gjengitt ordrett.',
      'Koblinger til pensumlitteraturen (Conee & Sider, Kim) er merket med ⚠ fordi utgave og kapittelinndeling varierer. Boka oppgir aldri sidetall — ingen er attestert i arkivet.',
      'Frekvenstallet for qualia-komplekset ble målt til 12 av 21 sett ved gjennomgang av selve oppgavesettene 26. juli 2026. Grunnlagsdokumentet oppga 14; boka bruker 12.',
    ],
    analysedato: 'juli 2026',
  },

  in1000: {
    courseId: 'in1000',
    institusjon: 'Universitetet i Oslo (UiO) — Institutt for informatikk (IFI)',
    sammendrag:
      'Boka er kalibrert mot IN1000s eksamensarkiv ved UiO: 27 filer fra 2014 til 2024 — 8 avsluttende oppgavesett, 3 fulle løsningsforslag og 4 prøveeksamener med fasit. UiO publiserer løsningsforslag for dette emnet, ikke sensorveiledninger. Sjangerkatalogen A–I, feilkatalogen #1–#16 og temavektingen speiler hva settene faktisk tester.',
    eksamenssett: [
      {
        tittel: '8 avsluttende oppgavesett (H2014 – H2024)',
        detalj:
          'H2014, H2015, H2017, H2018, H2020, H2022, H2023 og H2024. De seks moderne settene bærer frekvenstallene i boka, og nevneren står oppgitt hver gang («N av 6 moderne sett»). H2015-settet er fra da emnet het INF1001.',
      },
      {
        tittel: '4 prøveeksamener med fasit (2016, 2017, 2020, 2022)',
        detalj:
          'Fagets egne prøveeksamener. De bekrefter at strukturen har vært stabil, og er brukt til formregistrering snarere enn til frekvensvekting.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: 'Ingen sensorveiledninger — UiO publiserer løsningsforslag',
        detalj:
          'Arkivet inneholder ingen sensorveiledninger for IN1000. Det som finnes, er fulle løsningsforslag med kode (H2014, H2015, H2018) og fasit til de moderne settene. Boka utleder derfor føringsstandarden av løsningsforslagenes kodestil og av poengfordelingen i settene — ikke av sensormerknader, og den påstår ingen steder noe annet.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for IN1000',
        detalj:
          'Omskrevet sammendrag, brukt til å avgrense pensum. Emnet har et bevisst smalt pensum: ingen import, ingen arv, ingen rekursjon — og boka holder seg innenfor.',
      },
    ],
    forbehold: [
      'Løsningsforslagene er faglærerskrevne og opphavsrettsbeskyttet. De er brukt som fasitkilde for å kontrollere våre egne, nyskrevne løsninger — ingenting er gjengitt ordrett.',
      'H2015-settet er fra INF1001, forgjengeren til IN1000. Det er brukt til sjangerregistrering, ikke til frekvensprognosene.',
      'Poengspennet for den store modelleringsoppgaven oppgis som 47–50 i tabellene og 47–55 i prosaen i vårt eget grunnlagsdokument. Boka bruker konsekvent 47–50, men avviket er ikke avklart mot settene.',
      'Alle oppgaver, datafiler og kontekster i boka er nyskrevne. All Python-kode er kjørt, og hver utskrift i boka er den maskinen faktisk gir.',
    ],
    analysedato: 'juli 2026',
  },

  in1020: {
    courseId: 'in1020',
    institusjon: 'Universitetet i Oslo (UiO) — Institutt for informatikk (IFI)',
    sammendrag:
      'Boka er kalibrert mot IN1020s eksamensarkiv ved UiO: oppgavesett fra seks moderne årganger, med fagets egne løsningsforslag. For høsten 2023 finnes i tillegg en publisert sensorveiledning i tre deler, med poenggiving og begrunnelse per oppgave — den eneste i arkivet. Temavekting, oppgavesjangre og svarformene F1–F4 speiler hva settene faktisk tester.',
    eksamenssett: [
      {
        tittel: 'Oppgavesett fra seks moderne årganger',
        detalj:
          'Digital eksamen med tung vekt på flervalg og matche-oppgaver. Settene finnes på bokmål og engelsk. Frekvenstallene i boka er talt mot disse seks, og nevneren står oppgitt hver gang («N av 6 moderne sett»).',
      },
    ],
    sensorveiledninger: [
      {
        tittel: 'Én publisert sensorveiledning: H2023',
        detalj:
          'Sensorveiledningen for høsten 2023 er den eneste i arkivet, og den er lest grundig. Den er i tre deler med poenggiving og begrunnelse per oppgave, og er kilden til bokas viktigste stilregel: at hvert galt svaralternativ skal begrunnes, fordi eksamen har negativ poenggiving. Merk at selve oppgavesettet fra det året ikke ligger i arkivet.',
      },
    ],
    andreKilder: [
      {
        tittel: 'Fagets egne løsningsforslag',
        detalj:
          'Løsningsforslag følger flere av settene og er brukt som fasitkilde. De er faglærerskrevne og opphavsrettsbeskyttet — ingenting er gjengitt ordrett, og alle løsninger i boka er nyskrevne.',
      },
      {
        tittel: 'UiOs emnebeskrivelse for IN1020',
        detalj: 'Omskrevet sammendrag, brukt til å avgrense pensum.',
      },
    ],
    forbehold: [
      'Kun H2023 har publisert sensorveiledning. For de øvrige årgangene bygger vurderingen av hva som gir uttelling på løsningsforslagene og på oppgavenes egen poengfordeling — ikke på sensormerknader.',
      'Oppgavesettet fra H2023 mangler i arkivet, selv om sensorveiledningen for det året finnes.',
      'Kretser og nettverkstopologi er skrevet som strukturerte lister, ikke tegninger. Det er et bevisst valg: ingen oppgave lover en figur boka ikke har.',
      'Alle oppgaver, tall og kontekster i boka er nyskrevne. De tre øvingseksamenene i Del 5 er våre egne, ikke offisielle UiO-sett, og det står eksplisitt i kapitlene.',
    ],
    analysedato: 'juli 2026',
  },

  econ1100: {
    courseId: 'econ1100',
    institusjon: 'Universitetet i Oslo (UiO) — Økonomisk institutt',
    sammendrag:
      'Boka er kalibrert mot ECON1100s eksamensarkiv ved UiO: 16 eksamenssett fra vår 2018 til høst 2025 — 9 ordinære og 7 utsatte. 14 av dem har offisiell sensorveiledning; de to eldste utsatt-settene har bare henholdsvis et løsningsforslag og oppgaveteksten alene. Dekningen er likevel uvanlig god, og lar oss skille profilen på ordinær og utsatt eksamen fra hverandre. Temavekting, oppgavesjangre og den faste dramaturgien i settene speiler hva arkivet faktisk tester.',
    eksamenssett: [
      {
        tittel: '9 ordinære skoleeksamener (V2018, H2018 – H2025)',
        detalj:
          'Én ordinær eksamen per høst, pluss vårsettet V2018. Settene fra H2020 og senere følger en stabilisert mal med fem oppgaver og fast dramaturgi; de er lest i detalj. V2018-settene er minst representative — integrasjonstunge, med andrederiverte allerede i oppgave 1 — og er skummet for formhistorikk.',
      },
      {
        tittel: '7 utsatte eksamener (V2018-utsatt, H2020 – H2025-utsatt)',
        detalj:
          'ECON1100 har utsatt eksamen hvert år i tillegg til den ordinære. De utsatte settene har en litt annen profil — produsentteori og kostnadsminimering går oftere igjen der — og boka trener begge variantene. Merk at H2020-utsatt bare finnes som oppgavetekst: verken sensorveiledning eller løsningsforslag foreligger for det settet.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '14 offisielle sensorveiledninger (av 16 sett)',
        detalj:
          'Alle 9 ordinære sett og de 5 utsatte fra H2021 til H2025 har offisiell sensorveiledning fra Økonomisk institutt, og alle er lest grundig. De siste åtte årgangene er gjennomgått i detalj, de eldste skummet. Veiledningene gjentar de generelle merknadene nesten ordrett hvert år, og det er dem boka bygger føringsstandarden på: en konklusjon uten begrunnelse gir null, og hvert steg skal vises.',
      },
      {
        tittel: 'V2018-utsatt: løsningsforslag, ikke sensorveiledning',
        detalj:
          'For det utsatte settet våren 2018 foreligger et løsningsforslag med utregninger, men ingen sensorveiledning med poenggiving og merknader. Det er brukt til fasitkontroll, ikke til å utlede hva sensor belønner.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for ECON1100',
        detalj:
          'Omskrevet sammendrag, verifisert aktiv for 2026. Brukt til å avgrense pensum og forankre at emnet er obligatorisk i fem økonomiprogram.',
      },
    ],
    forbehold: [
      'V2018-settene er formmessig utdaterte: eksamen ble lagt om til dagens femoppgavers mal fra H2020. De teller derfor lite i frekvensprognosene, og boka er kalibrert mot H2021–H2025.',
      'Arkivmappen inneholder flere kopier av samme sett under ulike filnavn. Analysen bygger på de organiserte undermappe-versjonene, ikke rotnivået.',
      'De tre øvingseksamenene i Del 11 er nyskrevne av oss — de er ikke offisielle UiO-sett, og det står eksplisitt i kapitlene.',
      'Alle oppgaver, tall og kontekster i boka er nyskrevne. Arkivet er brukt som mønster for sjangre, temavekting og føringskrav — aldri gjengitt ordrett. Sensorformuleringer er parafrasert.',
    ],
    analysedato: 'juli 2026',
  },

  econ1210: {
    courseId: 'econ1210',
    institusjon: 'Universitetet i Oslo (UiO) — Økonomisk institutt',
    sammendrag:
      'Boka er kalibrert mot ECON1210s eksamensarkiv ved UiO: 16 ordinære eksamenssett (vår 2018 – høst 2025), 10 utsatt-eksamener og til sammen 22 sensorveiledninger. Analysen er kvantitativ der kildene tillater det — temavekting og oppgavesjangre i boka speiler hva arkivet faktisk tester og hvor tungt.',
    eksamenssett: [
      {
        tittel: '16 ordinære eksamenssett (vår 2018 – høst 2025)',
        detalj: 'Alle lest grundig, oppgave for oppgave — vår og høst hvert år fra 2018 til 2025.',
      },
      {
        tittel: '10 utsatt-eksamener (2018–2025)',
        detalj: 'Lest for tema- og formatregistrering, med tilhørende sensorveiledninger der de finnes.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '22 sensorveiledninger (2018–2025)',
        detalj:
          '16 for de ordinære settene (vår 2018 – høst 2025) og 6 for utsatt-eksamenene. Flere er fulle fasiter med tallsvar og figurer, andre er momentlister — begge typer er brukt til å kalibrere hva sensor belønner per oppgavetype.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for ECON1210',
        detalj: 'Omskrevet sammendrag av emnesiden (læringsmål, eksamensform). Emnestatus verifisert aktiv i 2026.',
      },
      {
        tittel: 'Pensumreferanser slik veiledningene navngir dem',
        detalj:
          'Krugman & Wells og CORE «The Economy — Microeconomics» (bl.a. anleggsmodellen fra kap. 8.4), samt NOU 2015:15 «Grønn skattekommisjon». Pensum refereres (forfatter, verk, modell) — det siteres aldri i lengde.',
      },
    ],
    forbehold: [
      'Utsatt-sett før 2023 mangler sensorveiledning i arkivet.',
      'Noen eldre sett (vår 2018, høst 2020, vår 2021) oppgir ikke oppgavevekter; der er vektingen markert som ikke oppgitt.',
      'Alle oppgaver, tall og caser i boka er nyskrevne. Arkivet er brukt som mønster (modeller, sjangre, temavekting) — aldri ordrett. Modellsammenhengene er standard faglig notasjon.',
    ],
    analysedato: 'juli 2026',
  },
  mat1100: {
    courseId: 'mat1100',
    institusjon: 'Universitetet i Oslo (UiO) — Matematisk institutt',
    sammendrag:
      'Boka er kalibrert mot MAT1100s eksamensarkiv ved UiO: 21 slutteksamener (høst 2003 – høst 2023, én eksamen per år) og 16 midtveiseksamener (høst 2003 – høst 2018), med løsningsforslag/fasiter for 18 av slutteksamenene. Temavekting, oppgavesjangre og føringsstandarden i boka speiler hva arkivet faktisk tester — inkludert de to komplementære eksamensformene (flervalg midtveis, begrunnet langsvar til slutt).',
    eksamenssett: [
      {
        tittel: '21 slutteksamener (H2003–H2023)',
        detalj:
          'Settene 2016–2023 er lest grundig, oppgave for oppgave; 2003–2015 er lest for tema- og sjangerregistrering. MAT1100 undervises kun om høsten — alle sett er desembereksamener.',
      },
      {
        tittel: '16 midtveiseksamener (H2003–H2018)',
        detalj:
          'H2012–H2018 er lest grundig med opptelling av alle 138 flervalgsspørsmål (temafordeling og distraktormønstre); H2003–H2011 er skumlest.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: 'Løsningsforslag/fasiter for 18 slutteksamener (2003–2020) — ikke sensorveiledninger i egentlig forstand',
        detalj:
          'Arkivet har løsningsforslag og fasiter, ikke egne sensorveiledninger: 2012–2020 er lest svært grundig (de definerer føringsstandarden boka lærer bort — teoremnavning, føringsbokser og regelen om at ubegrunnede svar gir 0 poeng), 2003–2011 er skumlest.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for MAT1100',
        detalj:
          'Omskrevet sammendrag av emnesiden (læringsmål, pensumtemaer, eksamensform). Temaer som kreves i emnebeskrivelsen, men mangler arkivbelegg (rekker, differensialligninger, Taylor), dekkes i boka med ærlig merket eksamensvinkel.',
      },
    ],
    forbehold: [
      'Det finnes ingen fasit for slutteksamenene 2021–2023; metodekravene der er utledet fra oppgavetekstene og kontinuiteten i fasitpraksis 2012–2020.',
      'Midtveisarkivet stopper i H2018, og midtveiseksamenene mangler fasit i arkivet.',
      'Arkivet stopper i 2023 — nyere sett kan ha endret temabildet; frekvensprognosene i boka tar dette forbeholdet eksplisitt.',
      'Alle oppgaver, tall og kontekster i boka er nyskrevne. Arkivet er brukt som mønster (sjangre, temavekting, føringskrav) — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },

  'mat111-uib': {
    courseId: 'mat111-uib',
    institusjon: 'Universitetet i Bergen (UiB) — Matematisk institutt',
    sammendrag:
      'Boka er kalibrert mot MAT111s eksamensarkiv ved UiB: 34 lesbare ordinære eksamenssett med løsningsforslag fra 2003 til 2020 (to fulle sett per år — vår og høst, med samme temaprofil), samt 5 midtsemesterprøver 2003–2005 og 14 pensumlister. Temafrekvens, oppgavesjangre (A–N), åpen bok-føringsstandarden og settets faste dramaturgi (åpning med komplekse tall, avslutning med anvendt differensiallikning) speiler hva arkivet faktisk tester.',
    eksamenssett: [
      {
        tittel: '34 sett med løsningsforslag (2003–2020)',
        detalj:
          'Samtlige årganger 2003–2020, vår + høst. Oppgavesettene fra de siste ~8 årene (2013–2020) er lest grundig oppgave for oppgave; eldre sett er lest for form- og temaregistrering. Løsningsforslagene for alle 34 sett er lest, de mest detaljerte (H2016–H2019, med eksplisitte merknadsavsnitt om hva som ga trekk og full pott) tettest.',
      },
      {
        tittel: '5 midtsemesterprøver (2003–2005)',
        detalj:
          'Kun brukt til formhistorikk — ordningen opphørte etter 2005; MAT111 vurderes siden med én avsluttende 5-timers skoleeksamen (åpen bok) som teller 100 %.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: 'Løsningsforslag for alle 34 sett — ikke sensorveiledninger i egentlig forstand',
        detalj:
          'Arkivet har løsningsforslag/fasiter, ikke egne sensorveiledninger. Fasitene H2016–H2019 inneholder eksplisitte merknadsavsnitt om fasitpraksis (hva som ga trekk/full pott) — de definerer føringsstandarden boka lærer bort: teoremnavning, føringsbokser, eksplisitt lim-notasjon og «vis utregningen, ikke slå opp».',
      },
    ],
    andreKilder: [
      {
        tittel: '14 pensumlister (2003–2019) og UiBs emnebeskrivelse (2026)',
        detalj:
          'Pensumlistene daterer pensumskiftene (uendelige rekker og flervariabelt stoff ut ~2006; stabil Adams & Essex-liste 2006–2019). Emnebeskrivelsen av 2026 er omskrevet sammendrag og begrunner at uendelige rekker dekkes som pensumpliktig stoff tross manglende arkivbelegg.',
      },
    ],
    forbehold: [
      'Arkivet stopper i 2020, og H2020-fasiten er bildebasert og ulesbar — H2020 er analysens eneste hull. Sett fra 2021 og senere er ikke lest; frekvensprognosene tar dette forbeholdet eksplisitt.',
      'Uendelige rekker har 0 arkivforekomster etter 2005, men står i emnebeskrivelsen av 2026 — de dekkes som pensumpliktig stoff med ærlig merket eksamensvinkel.',
      'Fasiten V2005 er delvis OCR-korrupt; katalogiseringen av det settet er rekonstruert fra formlene.',
      'Alle oppgaver, tall og kontekster i boka er nyskrevne. Arkivet er brukt som mønster (sjangre, temavekting, føringskrav) — aldri ordrett. Adams & Essex refereres, aldri siteres i lengde.',
    ],
    analysedato: 'juli 2026',
  },

  in1900: {
    courseId: 'in1900',
    institusjon: 'Universitetet i Oslo (UiO) — Institutt for informatikk (IFI)',
    sammendrag:
      'Boka er kalibrert mot IN1900s eksamensarkiv ved UiO: 76 PDF-filer som dekker H2007–H2025, både midtveis- og avsluttende eksamen, med UiOs egne løsningsforslag. Sju avsluttende sett fra H2018–H2025 er lest grundig oppgave for oppgave sammen med fasitene. Temafrekvens, oppgavesjangrene (A–N), poengfordelingen og den faste todelingen mellom flervalg og fritekst-koding speiler hva arkivet faktisk tester.',
    eksamenssett: [
      {
        tittel: '7 avsluttende sett lest grundig med løsningsforslag (H2018, H2020–H2025)',
        detalj:
          'Avsluttende eksamen er 4 timer i Inspera, teller 75 %, og har 13–16 spørsmål som blander flervalg/matche med fritekst-koding. Settene er lest oppgave for oppgave sammen med de offisielle løsningsforslagene. Merk at H2020 var hjemmeeksamen med en spørsmålspool større enn det én kandidat fikk — det er hensyntatt i frekvenstellingen.',
      },
      {
        tittel: '9 eldre avsluttende sett skumlest (H2007–H2019)',
        detalj:
          'Brukt til form- og temaregistrering, ikke til frekvensvekting. De dokumenterer overgangen fra papir til digital eksamen og at det faglige innholdet er kontinuerlig gjennom navneskiftet fra INF1100.',
      },
      {
        tittel: 'Midtveiseksamen: H2025 lest grundig, 9 sett skumlest (H2007–H2024)',
        detalj:
          'Midtveis teller 25 %, er ren flervalg med 20 spørsmål og maks 25 poeng. H2025 med løsningsforslag er lest grundig som representativt for formatet 2018–2025, kontrollert mot H2019 for endringen i negativ scoring. Et parallellemne-sett (MAT-IN1105 H2020) er lest for variantregistrering.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: 'Offisielle løsningsforslag — ikke sensorveiledninger i egentlig forstand',
        detalj:
          'UiO publiserer løsningsforslag, ikke egne sensorveiledninger. Fasitene bærer likevel gjentatte sensursignaler som boka lærer bort: kort og idiomatisk kode framfor lange programmer, rimelige antagelser er tillatt men må dokumenteres i kommentar, og åpenbare skrivefeil i oppgaveteksten hensyntas ved retting (eksplisitt dokumentert for H2018 O3.2 og H2024 O14). Poenggivningen er ikke tallfestet like eksplisitt som i samfunnsfag.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for IN1900',
        detalj:
          'Omskrevet sammendrag, brukt til å avgrense hva som faktisk testes. Den forankrer også vurderingsformen: to digitale eksamener i Inspera uten hjelpemidler, karakterskala A–F, all kode i Python 3.',
      },
    ],
    forbehold: [
      'Emnet het INF1100 til rundt 2016 og IN1900 fra 2017; settene fra 2017–2020 bærer begge navn. Faglig innhold er kontinuerlig, men de eldste settene er brukt til sjangerregistrering, ikke til frekvensprognosene.',
      'Det utleverte ODESolver-hierarkiet har byttet API underveis: f(u,t) og solve(time_points) i 2020–2022, f(t,u) og solve(t_span, N) fra 2023. Boka lærer den nyeste signaturen og nevner den eldre eksplisitt, siden eldre eksamensoppgaver bruker den.',
      'Siste oppgave i hvert avsluttende sett skal ikke besvares — den er bare feltet der midtveispoengene legges inn. Boka trener ikke på den.',
      'Alle oppgaver, tall og kontekster i boka er nyskrevne. Arkivet er brukt som mønster for sjangre og temavekting, aldri gjengitt ordrett. Kodemønstrene er standard Python-idiomer.',
    ],
    analysedato: 'juli 2026',
  },

  tma4245: {
    courseId: 'tma4245',
    institusjon: 'Norges teknisk-naturvitenskapelige universitet (NTNU) — Institutt for matematiske fag',
    sammendrag:
      'Boka er kalibrert mot eksamensarkivet for TMA4245 Statistikk og tvillingemnet TMA4240 (samme pensum, felles kontinuasjonseksamen): rundt 49 eksamenssett fra 2009 til mai 2026, der 26 sett fra 2016–2026 er lest grundig sammen med løsningsforslagene. Temafrekvens, oppgavesjangre og den store kjedeoppgaven (modell → ML-estimator → egenskaper → konfidensintervall → test → styrke) speiler arkivet.',
    eksamenssett: [
      {
        tittel: '26 sett lest grundig med løsningsforslag (2016 – mai 2026)',
        detalj:
          'Ordinære vårsett (TMA4245), desember-sett (TMA4240 — tvillingemnet med samme pensum) og august-kont (felles for begge emner). Perioden 2020–2026 er komplett; 2016–2019 dekkes av åtte sett der løsningsforslagene er skumlest.',
      },
      {
        tittel: '~19 sett skumlest for temaregistrering (2009–2015)',
        detalj:
          'Brukt kun til langsiktig tema- og sjangerfrekvens, ikke til detaljkalibrering. Frekvensene for denne perioden er nedre anslag.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: 'Løsningsforslag (ikke offisielle sensorveiledninger)',
        detalj:
          'Arkivet inneholder løsningsforslag til de fleste sett 2016–2026 — de definerer notasjonskrav, mellomregnings-standard og hva et fullt svar inneholder. Egne offisielle sensorveiledninger finnes ikke i arkivet, og boka påberoper seg ingen.',
      },
    ],
    andreKilder: [
      {
        tittel: 'NTNUs emnebeskrivelse for TMA4245',
        detalj: 'Omskrevet sammendrag av emnesiden (læringsmål, eksamensform, hjelpemidler). Emnet er verifisert aktivt per juli 2026.',
      },
    ],
    forbehold: [
      'Arkivet har ikke offisielle sensorveiledninger — sensorlogikken er utledet av løsningsforslagene og oppgaveformuleringene.',
      'Enkelte arkivfiler 2017–2020 er omstokket i forhold til filnavnene (bl.a. et duplikat av mai 2017-settet); analysen bygger på faktisk innhold, ikke filnavn. Vårsettet 2019 er ikke selvstendig verifisert, og temaregistreringen for sommersettene 2015 har lav konfidens og inngår kun med lav vekt.',
      'Desember-settene er formelt TMA4240-eksamener; pensum og oppgavetradisjon er felles, og de behandles som fullverdige mønstre for TMA4245.',
      'Alle oppgaver, tall og kontekster i boka er nyskrevne. Arkivet er brukt som mønster (temavekting, sjangre, notasjonskrav) — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },

  mat1110: {
    courseId: 'mat1110',
    institusjon: 'Universitetet i Oslo (UiO) — Matematisk institutt',
    sammendrag:
      'Boka er kalibrert mot MAT1110s eksamensarkiv ved UiO: 22 oppgavesett fra 2004 til 2025 (ordinære sett samt tre V2025-sett) og de tre offisielle løsningsforslagene som finnes — alle fra V2025. Analysen dokumenterer regimeskiftet 2025 (vektoranalyse inn, egenverdier og potensrekker ut), og boka er bygget rundt begge regimer: det nye som hovedspor, det gamle som beredskap.',
    eksamenssett: [
      {
        tittel: '5 eksamenssett lest grundig (2018–2025)',
        detalj:
          'Ordinær 2025, 2024, 2022, 2019 og 2018, oppgave for oppgave, sammen med den utdelte formelsamlingen (lest i sin helhet). I tillegg prøveeksamen og kontinuasjonseksamen V2025.',
      },
      {
        tittel: '15 eldre sett kartlagt oppgave for oppgave (2004–2017, 2021)',
        detalj:
          'Brukt til temaregistrering per deloppgave — grunnlaget for frekvenstallene i boka (dobbeltintegral 95 %, potensrekker 85 %, egenverdier 70 % osv.).',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '3 offisielle løsningsforslag (alle V2025)',
        detalj:
          'Ordinær eksamen 30. mai 2025, kontinuasjon 12. august 2025 og prøveeksamen mai 2025 — fulle fasiter. Disse definerer føringsstandarden boka lærer bort (merkede radoperasjoner, teoremnavn, fortegns- og orienteringskontroll, eksakte svar).',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for MAT1110',
        detalj: 'Omskrevet sammendrag av emnesiden (læringsmål, vurderingsform: midtsemestereksamen 1/3 + avsluttende eksamen 2/3, obligatoriske innleveringer).',
      },
      {
        tittel: 'Utdelt formelsamling',
        detalj: 'Formelsamlingen som deles ut på eksamen (vedlagt 2022-settet) er lest i sin helhet — boka skiller konsekvent mellom det formelsamlingen gir og det som må kunnes.',
      },
    ],
    forbehold: [
      'Offisielle løsningsforslag finnes kun for de tre V2025-settene. For eldre sett (egenverdier, potensrekker, kontraksjon, variabelskifte) er metodekravene utledet fra oppgavetekstene og faglig etablert standard — ikke sensor-verifisert.',
      'Arkivet mangler ordinære sett for 2020 og 2023, og inneholder ingen midtsemestereksamener — midtveissimuleringen i boka er kalibrert på pensumvinduet, ikke på dokumentert oppgavefordeling.',
      'Regimeskiftet 2025 (vektoranalyse inn, egenverdier/potensrekker ut) hviler på ett årskull (tre V2025-sett) og må reverifiseres mot første framtidige ordinære sett.',
      'Alle oppgaver, tall og caser i boka er nyskrevne. Arkivet er brukt som mønster (sjangre, temavekting, føringsstandard) — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },

  stk1110: {
    courseId: 'stk1110',
    institusjon: 'Universitetet i Oslo (UiO) — Matematisk institutt',
    sammendrag:
      'Boka er kalibrert mot STK1110s eksamensarkiv ved UiO: 22 avsluttende skoleeksamener fra 2004 til 2025 (emnet undervises hver høst — alle sett er høsteksamener) med 19 offisielle løsningsforslag 2007–2025. Analysen er kvantitativ (temafrekvens per deloppgave over alle 22 sett), og bokas tre søyler — estimeringsteori, hypotesetesting/konfidensintervall og lineær regresjon — speiler den faste tredelingen arkivet dokumenterer.',
    eksamenssett: [
      {
        tittel: '11 sett lest grundig med løsningsforslag (H2015–H2025)',
        detalj:
          'Oppgaver og løsningsforslag lest oppgave for oppgave — disse definerer sjangerkatalogen A–P, den kjededelte oppgavemalen og sensorkravene boka drilles mot.',
      },
      {
        tittel: '8 sett skumlest med løsningsforslag (H2007–H2014)',
        detalj: 'Brukt til tema- og sjangerregistrering i frekvenstabellene, ikke til detaljkalibrering.',
      },
      {
        tittel: '3 eldre sett (H2004–H2006)',
        detalj:
          'H2005 og H2006 er lest på oppgavenivå (uten løsningsforslag i arkivet). H2004 forelå kun som skannet bilde og er registrert med lav vekt.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '19 offisielle løsningsforslag (2007–2025) — ikke sensorveiledninger i egentlig forstand',
        detalj:
          'Arkivet har løsningsforslag, ikke egne sensorveiledninger. Forslagene 2015–2025 er lest grundig — de er utledningsdrevne og konsise og definerer standarden boka lærer bort: full ML-kjede med bekreftet maksimum, komplett testrituale med nivå-utledning, riktige frihetsgrader og presis tolkning av R-utskrift.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for STK1110',
        detalj:
          'Omskrevet sammendrag av emnesiden (læringsmål, eksamensform, hjelpemidler). Emnet er verifisert aktivt (undervises hver høst, t.o.m. høst 2026, per juli 2026).',
      },
    ],
    forbehold: [
      'Arkivet har ikke offisielle sensorveiledninger — sensorlogikken er utledet av løsningsforslagene (2007–2025) og oppgaveformuleringene.',
      'Løsningsforslag mangler for H2004–H2006, og H2004-settet forelå kun som skannet bilde uten maskinlesbar tekst.',
      'Løsningsforslaget for 2015 har «STK1100» i toppteksten, men innholdet er utvetydig STK1110-inferens — antatt trykkfeil; analysen bygger på faktisk innhold.',
      'Alle oppgaver, tall og kontekster i boka er nyskrevne. Arkivet er brukt som mønster (sjangre, temavekting, sensorkrav) — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },
  mat1120: {
    courseId: 'mat1120',
    institusjon: 'Universitetet i Oslo (UiO) — Matematisk institutt',
    sammendrag:
      'Boka er kalibrert mot MAT1120s eksamensarkiv ved UiO: sju fullstendige sett med tilhørende offisielle løsningsforslag (H2018–H2024). Formatet er usedvanlig stabilt — hvert sett er en 4-timers skriftlig skoleeksamen med nøyaktig 10 deloppgaver som teller likt (10 p hver), gruppert i 4–5 hovedoppgaver, karakter A–F, ingen flervalg, alt fullt begrunnet langsvar. Det definerende trekket er vedlegget: formelt ingen hjelpemidler, men hvert sett kommer med en Matlab-utskrift (rref/poly/eig) eller (fra H2024) et ark med ferdige reduserte trappeformer — studenten leser pivoter, karakteristisk polynom og egenverdier ut av vedlegget i stedet for å radredusere for hånd.',
    eksamenssett: [
      {
        tittel: '7 eksamenssett lest oppgave for oppgave (H2018–H2024)',
        detalj:
          'Alle sju settene i arkivet, hver deloppgave sammen med det utdelte vedlegget (Matlab-utskrift rref/poly/eig 2018–2022; ferdige RREF-ark fra 2024). Grunnlaget for de fem faste søylene og temafrekvensene i boka.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '7 offisielle løsningsforslag (H2018–H2024)',
        detalj:
          'Ett fullstendig offisielt løsningsforslag per sett. Disse definerer føringsstandarden boka lærer bort: vedleggssitering framfor manuell radreduksjon, Col A-basis fra opprinnelige pivotkolonner, P/D matchet søyle for søyle, ortonormale kolonner i P ved ortogonal diagonalisering, diagonaliserbarhet begrunnet med multiplisitet, eksakte svar.',
      },
    ],
    andreKilder: [
      {
        tittel: 'UiOs emnebeskrivelse for MAT1120',
        detalj:
          'Omskrevet sammendrag av emnesiden (læringsmål, pensum forankret i David C. Lay: Linear Algebra and Its Applications, vurderingsform: én avsluttende 4-timers skoleeksamen, to godkjente obligatoriske innleveringer kreves for å gå opp).',
      },
    ],
    forbehold: [
      'Vedleggsformatet skiftet fra Matlab-utskrift (2018–2022) til rene RREF-ark (H2024). Boka trener begge (samme funksjon), og kap. 0.1 ber studenten verifisere formatet mot nyeste sett.',
      'H2020 var hjemmeeksamen (pandemi-avvik), men innhold og struktur var uendret.',
      'Determinant-regneregler, matriseinvers-mekanikk, Cramer og likningssystem-parameteranalyse forutsettes fra MAT1100/MAT1110 og testes ikke som egne temaer — der et konkret metodevalg er faglig standard snarere enn dokumentert i løsningsforslagene, er det merket i teksten.',
      'Alle oppgaver, matriser, tall og caser i boka er nyskrevne. Arkivet er brukt som mønster (sjangre, temavekting, føringsstandard) — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },
  tma4110: {
    courseId: 'tma4110',
    institusjon: 'Norges teknisk-naturvitenskapelige universitet (NTNU) — Institutt for matematiske fag',
    sammendrag:
      'Boka er kalibrert mot eksamensarkivet for TMA4110/TMA4115 «Matematikk 3»: rundt 55 karakteriserte sett fra 2004 til 2025, der settene fra 2017–2025 er lest oppgave for oppgave sammen med de offisielle løsningsforslagene. Temafrekvens, oppgavesjangre og sensorkulturen (4 timer, ~10 likt vektede deloppgaver, «alle svar skal begrunnes», siste oppgave = bevis) speiler arkivet direkte. Boka dekker den klassiske kjernen — lineær algebra, elementære komplekse tall og differensiallikninger.',
    eksamenssett: [
      {
        tittel: 'Sett lest oppgave for oppgave med løsningsforslag (2017–2025)',
        detalj:
          'Ordinære vår- og høstsett for TMA4110 og tvillingkoden TMA4115, med offisielle løsningsforslag (bl.a. H2024, H2023, H2019, H2021, V2025, kont-2025, V2024, V2022). Disse definerer notasjonskrav (Lays Col/Nul/rang, PDP⁻¹), føringsstandarden og hva et fullt begrunnet svar inneholder.',
      },
      {
        tittel: '~30 eldre sett skumlest for tema- og sjangerfrekvens (2004–2016)',
        detalj:
          'Brukt til den langsiktige temafrekvensen (komplekse tall 95 %, egenverdier/diagonalisering 95 %, Col/Nul/basis/rang 89 %, abstrakt vektorrom 82 %, 2. ordens ODE 82 %, Gram–Schmidt 80 %, Gauss 78 %). Frekvensene for denne perioden er nedre anslag.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: 'Offisielle løsningsforslag (ikke egne sensorveiledninger)',
        detalj:
          'Arkivet inneholder offisielle løsningsforslag til de fleste sett 2017–2025 — de definerer mellomregnings-standarden, teoremnavning og hva som gir full uttelling. Egne separate sensorveiledninger finnes ikke i arkivet, og boka påberoper seg ingen.',
      },
    ],
    andreKilder: [
      {
        tittel: 'NTNUs emnebeskrivelse og semesterplan',
        detalj:
          'Omskrevet sammendrag av emnesiden og semesterplanen (læringsmål, vurderingsform, hjelpemiddelkode). Brukt til å dokumentere kodeforbeholdet: NTNU-reformen har spredt denne klassiske kjernen på nye emnekoder (TMA4101/TMA4106/TMA4111 m.fl.), og hjelpemiddelkoden er skjerpet fra C til E.',
      },
      {
        tittel: 'Innholdsforbilder mat1110 (UiO) og tma4135 (NTNU)',
        detalj:
          'Brukt til å kalibrere føringsstandard og NTNU-sensorkultur for de tilstøtende temaene. Selve pensuminnholdet i denne boka er hentet fra TMA4110/TMA4115-arkivet.',
      },
    ],
    forbehold: [
      'Arkivet har ikke egne offisielle sensorveiledninger — sensorlogikken er utledet av de offisielle løsningsforslagene og oppgaveformuleringene.',
      'KODEFORBEHOLD: arkivet er merket TMA4110/TMA4115, men NTNU-reformen har fordelt dette stoffet på nye emnekoder. Studenten må selv verifisere hvilken kode som eier stoffet i inneværende semester — matematikken er identisk uansett kodeetikett.',
      'Hjelpemidler skiftet fra kode C (enkel kalkulator) i arkivet til kode E (ingen) i reformkodene. Boka er kalibrert mot det strengere kravet E.',
      'Pandemiårene (2020–2021, deler av 2022) avvek med hjemme-eksamen og flervalgsdeler; boka kalibreres mot normalårsmalen uten flervalg.',
      'Alle oppgaver, tall, matriser og kontekster i boka er nyskrevne. Arkivet er brukt som mønster (temavekting, sjangre, notasjons- og føringsstandard) — aldri ordrett.',
    ],
    analysedato: 'juli 2026',
  },
};

export function getKildegrunnlag(courseId: string): Kildegrunnlag | null {
  return KILDEGRUNNLAG[courseId] ?? null;
}
