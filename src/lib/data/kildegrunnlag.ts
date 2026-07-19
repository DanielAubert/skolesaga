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
      'Boka er kalibrert mot JUS1111s eksamensarkiv ved UiO: 30 eksamensgjennomføringer 2011–2025 og 32 sensorveiledninger. Typetilfellene, metodekravene og feilkodene i boka er destillert fra det sensorveiledningene faktisk trekker for og belønner.',
    eksamenssett: [
      {
        tittel: '30 eksamensgjennomføringer (2011–2025)',
        detalj:
          'Alle ordinære eksamener høst 2011 – høst 2025 pluss utsatt prøve vår 2020. Årgangene 2018–2025 er lest i sin helhet; 2011–2017 er skumlest for tema- og formatregistrering.',
      },
    ],
    sensorveiledninger: [
      {
        tittel: '32 sensorveiledninger (2011–2025)',
        detalj:
          'Samtlige er lest i sin helhet — inkludert delte veiledninger (del 1/del 2) for årgangene med todelt eksamen. Veiledningene er kilden til bokas sensornøkler og typiske feil.',
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
};

export function getKildegrunnlag(courseId: string): Kildegrunnlag | null {
  return KILDEGRUNNLAG[courseId] ?? null;
}
