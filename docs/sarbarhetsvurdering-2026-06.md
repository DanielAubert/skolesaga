# Sårbarhetsvurdering før lansering — juni 2026

Gjennomgang av alt innhold på Skolesaga med tanke på de to farligste angrepsvinklene
ved en offentlig lansering: **opphavsrettskrav** (fra forlag/rettighetshavere) og
**faktafeil** (viral kritikk fra lærere/medier). Se også
[lanseringstekst-utkast.md](lanseringstekst-utkast.md) for annonseringsstrategi.

## Omfang (det en kritiker vil se)

| Hva | Antall |
|---|---|
| Bøker/kurs | 142 |
| Kapittelfiler (inkl. narrative versjoner) | ~6 500 |
| Oppgaver | 34 299 |
| Flervalgsoppgaver | 10 921 |
| Egenproduserte bilder | 1 376 |
| Egenproduserte SVG-figurer | 501 |

Dekning: 5.–10. klasse (alle fag), VG1–VG3 fellesfag og programfag, fremmedspråk
(fransk, spansk, tysk nivå 1–3), yrkesfag (restaurant- og matfag, frisør/blomster, IT m.fl.).

## Opphavsrett — LAV til MODERAT risiko

### Det som er ryddig (verifisert)

- **Litterære sitater følger sitatretten** (åndsverkloven § 29):
  - «Til ungdommen» (Nordahl Grieg) gjengis i sin helhet — **lovlig**, Grieg døde 1943,
    diktet falt i det fri 1.1.2014.
  - «Du må ikke sove» (Øverland, vernet til utgangen av 2038): kun to linjer sitert,
    i litteraturhistorisk analysekontekst — innenfor sitatretten.
  - «Det er den draumen» (Hauge, vernet til 2064): bevisst avkortet til første linje + «...».
  - «Femme noire» (Senghor, vernet til 2071) og Césaire-referanser: tre verselinjer
    med påfølgende analyse — innenfor sitatretten.
- **De fleste «utdrag fra»-forekomster er oppgaveinstruksjoner** («finn et utdrag og
  analyser»), ikke gjengitt tekst.
- **Ingen sangtekster gjengitt.** Karpe (19 filer), Fosse (22 filer), Vesaas (21 filer)
  m.fl. er kun *omtalt* faktabasert — biografisk og analytisk omtale er ikke vernet.
- **Bildene er egenproduserte** (KI-generert + egne SVG-er). Ingen nedlastingsspor i
  metadata. Lav risiko.

### Restrisiko (kan ikke verifiseres lokalt)

1. **Strukturlikhet med eksisterende læreverk** — kapittelinndeling, oppgaveformuleringer
   og eksempelvalg som ligner Gyldendal/Aschehoug/Cappelen Damm. Det er her forlagene
   vil lete først. **Tiltak**: manuell sammenlikning av 2–3 fag mot de største læreverkene
   før lansering.
2. **Treningsdata-argumentet** — forlagene kan hevde at KI-modellen er trent på deres
   bøker. Juridisk uavklart terreng; kan ikke forebygges, bare møtes med at alt innhold
   er originalformulert.
3. **KI-genererte bilder** kan utilsiktet ligne eksisterende verk eller kjente
   illustrasjonsstiler.
4. **UDIR-eksamensmateriell**: opphavsrett tilhører UDIR; bilder fra originaleksamener
   er fjernet (allerede håndtert, dekket i vilkår § 7).

## Faktafeil — MODERAT til HØY risiko (største eksponering)

- **Stikkprøver ser faglig solide ut** (naturfag 10, historie VG), men ~6 500 filer kan
  ikke menneskeverifiseres av én person. Må møtes med *prosess* (feilrapportering +
  rask retting), ikke påstand om feilfrihet.
- **87 % av oppgavene har løsningsforslag** (30 130 av 34 299). 4 169 oppgaver mangler —
  fullfør eller merk «løsning kommer».
- **Kun 14 % har maskinverifiserbart svar** (5 104) — systematisk svarvalidering finnes
  i praksis bare i matematikkbøkene.
- **10 921 flervalgsoppgaver med fasit er det mest sårbare punktet.** Én feil fasit er
  en perfekt viral skjermdump. **Tiltak**: KI-kryssvalidering (en annen modell verifiserer
  hver fasit) før lansering.

## Strukturelle hull (status)

| Hull | Status |
|---|---|
| Ingen KI-deklarasjon | ✅ **Fikset juni 2026**: vilkår § 3, footer-lenke og deklarasjon m/lenke nederst i hvert kapittel |
| Ingen feilrapportering | ✅ **Fikset juni 2026**: «Meld feil eller forbedring»-knapp i alle kapitler → `content_feedback`-tabell → admin-side (`/dashboard/admin/feedback`) med «Kopier til Claude» |
| 0 % nynorsk | ⛔ Åpent. Parallellutgavekravet i opplæringslova gjør at skoler formelt ikke kan ta bøkene i bruk som læremiddel. Posisjonér som *supplement* inntil videre; målrørsla vil uansett påpeke det |
| Manglende løsningsforslag (13 %) | ⛔ Åpent |
| Flervalgsfasit ikke kryssvalidert | ⛔ Åpent |
| Ingen navngitt utgiver/ansvarlig | ⛔ Åpent. Anonymt = «useriøst» i norsk skolekontekst |
| Offentlig rettelogg | ⛔ Åpent (lovet i lanseringstekst-utkastet) |

## Interessentanalyse (kortversjon)

Full versjon i samtalelogg juni 2026; hovedpunkter:

- **Foreldre/elever**: mest positive; deler organisk. Tåler ikke faktafeil i det barna lærer av.
- **Lærere**: avgjørende og splittet — sterk skepsis til «KI-generert» uten navngitt
  fagansvarlig; LK20-mappingen per kapittel er sterkeste kort.
- **Rektorer/skoleeiere**: forsiktige; tenker WCAG (lovpålagt), GDPR/DPIA og innkjøpsansvar.
  Forvent stille uoffisiell bruk før offisiell adopsjon.
- **Udir**: ingen godkjenningsordning for læremidler (avskaffet 2000) — kan ikke stoppe
  noe, men parallellutgavekravet (nynorsk) er reelt.
- **Forlagene**: hardeste reaksjon, men ikke offentlig først — stille gransking for
  opphavsrettsbrudd, kvalitetsangrep via proxy, politisk lobbyvirksomhet
  (jf. NDLA-historikken med ESA-klager).
- **Utdanningsforbundet/lærerutdannere**: prinsipiell kritikk om fagdidaktisk
  kvalitetssikring.
- **Media**: saken skriver seg selv uansett vinkel; den første feilen en faglærer finner
  blir overskriften.
- **NDLA/politikere**: «hvis én person med KI kan lage dette, hvorfor koster NDLA
  millioner?» — gjør deg til brikke i et større spill.

## Anbefalt rekkefølge videre

1. Kryssvalider flervalgsfasit (størst viral risiko, automatiserbart).
2. Fullfør/merk manglende løsningsforslag.
3. Navngi utgiver + rekruttér 1–2 faglærere som fagkonsulenter for utvalgte fag.
4. Manuell strukturlikhet-sjekk mot 2–3 kommersielle læreverk.
5. Offentlig rettelogg (kan være enkel side generert fra `content_feedback` med status «løst»).
6. Nynorsk-plan (start med ett fag som pilot).
