# Bokskjelett: KJ1020 / TKJ4103 Organisk kjemi grunnkurs (NTNU) — eksamensrettet lærebok

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NTNU-arkivet 2001–2012: 17 avholdelser, ni sett nærlest oppgave for
> oppgave, kun ett løsningsforslag (mai 2003), åtte rene skann bekreftet samme mal). Alle
> oppgaver, molekyleksempler, mekanismecase og formuleringer i boka skal være NYSKREVNE
> (se §6). Reaksjonsligninger, mekanismer, IUPAC-regler, Hückels regel, CIP og standard
> fagbegreper er ikke opphavsrettslig beskyttet og brukes fritt.
>
> **Kjemisk presisjon er kritisk.** Mekanismer, reagenser, produktprediksjoner og de få
> spektroskopiske detaljene forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk
> i fase 6. Strukturer og mekanismer må kunne konstrueres aktivt uten oppslagsverk — dette
> er en eksamen der **alt tegnes fra hukommelsen**, med kun molekylbyggesett.
>
> **Kodeovergang / etterfølger-profilering (ufravikelig — settes i Del 0) (verifiser mot
> NTNUs emnesider ved bygging):** KJ1020 «Organisk kjemi» (15 studiepoeng) er **avviklet fra
> og med høst 2025** og **erstattet av TKJ4103 «Organisk kjemi grunnkurs» (7,5 studiepoeng)**.
> TKJ4103 lister KJ1020 (og KJ1021) som avviklede forgjengere med full studiepoengreduksjon.
> Faglig kjerne, eksamensform (4 t skriftlig, bokstavkarakter) og hjelpemiddelregime (kun
> molekylbyggesett) videreføres nesten uendret; hovedforskjellen er at studiepoengtallet er
> halvert (det gamle 15-sp-emnet omfattet et tungt laboratoriekurs som nå er skilt ut).
> **Læreboken bygges mot TKJ4103 som gjeldende etterfølger**, men KJ1020-eksamenstradisjonen
> (2001–2012) som kartlegges her er direkte overførbar. Kurs-id beholdes teknisk som
> `kj1020`; tittelen profilerer begge koder. Alle frekvenser er merket «per KJ1020-arkivet
> 2001–2012». **Byggefasen bør skaffe og verifisere mot eventuelle TKJ4103-sett (H2025→)**
> før boka meldes helt ferdig.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `kj1020` (beholdes teknisk; emnet er avviklet og erstattet av TKJ4103) |
| Tittel | **KJ1020 / TKJ4103 Organisk kjemi grunnkurs (NTNU) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «KJ1020 / TKJ4103 Organisk kjemi grunnkurs». |
| Arketype | **Regnefag i mønster-drill-variant** (primær: `DNA-regnefag.md` for makrostruktur + drill + øvingseksamener). Faget er **ikke tallregnende** — fasiten er TEGNET (strukturer, krumme piler, stereokjemi) med **kvalitativ stabilitetsbegrunnelse**, ikke tallutledninger. Se §2 «Arketypetilpasning». |
| Nærmeste forbilde | `docs/hoyskole-boker/kjm1110/SKJELETT.md` (UiO Organisk kjemi I) — mekanisme-/stereokjemi-apparatet gjenbrukes, men rebalansert (se §2 og analysen §9). |
| Antall kapitler | **40** (Del 0: 2 · temadeler 1–11: 34 · eksamenstrening Del 12: 4) |
| Estimert totaltid | **~2 345 min ≈ 39 timer** (per kapittel under) |
| Quiz totalt | **608** (krav ≥500 — GULV, ikke mål) |
| Flashcards totalt | **808** (reaksjons-/mekanismerikt fag uten oppslagsverk → høy tetthet; krav ≥500) |

**Pitch (ett avsnitt):** KJ1020/TKJ4103-eksamen er blant de mest forutsigbare og mest
*ferdighetsdrevne* settene i høyskolearkivet. 4 timers skriftlig skoleeksamen, **kun
molekylbyggesett** — ingen pensumbok, formelsamling eller reaksjonsoversikt. **Alle
oppgaver er konstruksjonssvar:** kandidaten *tegner* strukturformler, *tegner* mekanismer
med krumme piler (elektronparforskyvning), *navngir* forbindelser, *tegner* stol- og
Newman-konformasjoner og *begrunner* med ord. Det er **ikke** en flervalgseksamen. Settet
har alltid **fem likt strukturerte oppgaver** (~100 p, jevnt fordelt per deloppgave). **Fem
mekanisme-søyler bærer nesten hvert sett**: (1) **SN1/SN2/E1/E2** (100 %), (2) **elektrofil
aromatisk substitusjon + dirigering** (89 %), (3) **karbonylkondensasjon aldol/Claisen–Schmidt**
(89 %), (4) **Grignard-syntese** (89 %) og (5) **Diels–Alder/dien-kjemi** (89 %, norbornadien
fast) — med **stereokjemi** (kiralitet/R-S/I-K-E-D/konformasjon, 89 %) som det store
konseptuelle tyngdepunktet tett bak. Én felles **«pilegrammatikk»** går igjen på tvers av
reaksjonene. Boka er bygd baklengs fra det sensor faktisk premierer: **korrekte
strukturformler og krumme piler** (tegn, ikke beskriv) og **stabilitetsresonnement** som
standardbegrunnelse — «foretrekkes fordi det korresponderende karbokationet/anionet/alkenet
er mest substituert / resonansstabilisert / minst sterisk hindret». NTNU rammer nesten hver
oppgave inn i et **autentisk legemiddel eller naturstoff** (Naproxen, Ibuprofen, Paracetamol,
Tamoxifen, atenolol, tyroksin, fytol, muskarin, vitamin A) — den innrammingen brukes
gjennomgående, men med NYSKREVNE molekyler.

**Kritisk plattformbetingelse (gjelder HELE boka) — tekstnotasjonsregelen:** Plattformen kan
**ikke tegne grafiske strukturformler eller mekanismepiler**. Faget er samtidig gjennomgående
visuelt. Boka løser dette med en **konsekvent tekstnotasjon** (etablert i kap. 0.2 og brukt
overalt):

- **Strukturer** angis med **SMILES** som maskinlesbar kanon, ALLTID ledsaget av **IUPAC-navn +
  kondensert formel + kort ordbeskrivelse** av skjelettet, slik at leseren kan rekonstruere
  tegningen. Eksempel: «3-bromsyklohepta-1,4-dien, kondensert antydet, SMILES `BrC1CC=CCC=C1`
  — en sjukarbons ring med to dobbeltbindinger og brom på det allyliske C3».
- **Krumme piler** i mekanismer beskrives med et fast, nummerert tekstformat: hver pil angis
  som **«[opphav: elektronpar/binding] → [mål: atom/binding]»** med hva den *gjør*. Eksempel:
  «**Pil 1:** ensomt elektronpar på nukleofilen O → karbonylkarbonet C (ny C–O-binding).
  **Pil 2:** C=O-π-bindingen → oksygenet (blir ensomt par, negativ ladning)». Retning går
  ALLTID fra elektronrikt (nukleofil/binding) mot elektronfattig (elektrofil).
- **Stereokjemi**: R/S, E/Z og cis/trans skrives inline; kile/strek (fram/bak) beskrives i ord
  («Br på kile mot betrakter, H på strek bort fra betrakter»). Newman- og stolkonformasjon
  beskrives systematisk (aksial/ekvatorial, gauche/anti, opp/ned).
- **Fiskekrok** (enkelthodet pil = ett elektron) brukes til radikaltrinn (NBS allylisk
  bromering). All matematikk/kjemisk formel i LaTeX (`$...$`).

Denne notasjonen er selve broen mellom en tegneeksamen og en tekstplattform, og skal brukes
uendret i alle 40 kapitler.

**Kritisk hjelpemiddel-regel (gjelder HELE boka):** Hjelpemidler = **molekylbyggesett og
INGENTING annet** (2003-settet tillot ikke engang det). Kandidaten får **ikke** pensumbok,
reaksjonsoversikt, formelsamling eller — i motsetning til UiOs KJM1110 — **noen NMR-/IR-
vedleggstabell eller periodesystem**. Alt av reaksjoner, reagenser, mekanismer,
navnsettingsregler og de få spektroskopiske tolkningsprinsippene må sitte i hodet.
Molekylbyggesettet er tillatt fordi stereokjemi (stolkonformasjon, R/S, meso, cis/trans)
vanskelig lar seg vurdere uten en fysisk 3D-modell — boka skal derfor eksplisitt trene
**modell-resonnement** i stereokapitlene. **Dette er den styrende rammen: boka må bygge
automatiserte hoderutiner, ikke oppslagskunnskap.**

**Kritisk notasjonsregel (emnets faste apparat):** Krumme piler = dobbelthodet pil (to
elektroner), fiskekrok = ett elektron (radikaler). Stereodeskriptorer: R/S (CIP-prioritet),
E/Z, cis/trans, meso, racemat, enantiomer vs. diastereomer. Prediksjonsregler: **Markovnikov**
(H til det mest hydrogenrike C → mest stabilt karbokation styrer), **Zaitsev** (mest
substituerte/stabile alken ved E1/E2), **anti-addisjon** ($\text{Br}_2$ via bromoniumion),
**Hückels 4n+2** for aromatisitet, **o,p-/meta-dirigering** (aktiverende vs. deaktiverende),
**kinetisk vs. termodynamisk kontroll** (1,2- vs. 1,4-addisjon til dien). Syre-base:
pKa-tenkning, resonans-/induktiv stabilisering av konjugert base, aromatisering av anion
(syklopentadien pKa ≈ 16), FeCl₃ som enol/fenol-indikator. **NMR (nedtonet):** n+1-regelen for
¹H-multiplisitet, integral ↔ antall protoner, kjemisk skift som miljøindikator — løses på
kvalitativ mønstergjenkjenning, IKKE tabelloppslag (ingen tabell gis). **Ingen kvantitativ
utbytte-/støkiometriregning** (til forskjell fra KJM1110): faget er rendyrket kvalitativt.

**Bevisst nedprioritert (begrunnes i Del 0):** **IR-spektroskopi** (aldri testet i arkivet —
kan utelates som eksamenstema); **strukturoppklaring av UiO-typen** (finnes ikke her);
**massespektrometri** utover ett molekylion→identifikasjon-case (marginal, kun 2003);
**¹H NMR utover splittingsmønster + gjenkjenning av tre trivielle spektre**; **utbytte-/
regnedelen** (nærmest fraværende). Disse skal IKKE bygges tungt på — se Del 10 (kort
spektroskopidel) og §2 «Arketypetilpasning».

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): struktur/binding/funksjonelle
grupper og nomenklatur før stereokjemi; stereokjemi og karbokation-kjemi før mekanismene;
resonans/aromatisitet/syre-base før elektrofil aromatisk substitusjon; karbonyl-grunnkjemi og
Grignard før kondensasjonene; hele reaksjonsrepertoaret før flertrinns-syntesen som binder alt
sammen. Frekvensen fra analysen §2 styrer *omfanget*, ikke rekkefølgen: de fem mekanisme-
topptemaene og stereokjemi får flest kapitler, egne drillkapitler og høyest kvote.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og håndverk | 2 | perfekt (meta) | Formen (tegneeksamen, kun molekylbyggesett, fem oppgaver), tekstnotasjonen, temafrekvensene, sensorkravene og kodeovergangen må etableres FØR fagstoffet. **Tegne-/begrunnelseshåndverket (0.2) er unikt kritisk** fordi plattformen ikke tegner og fordi «tegn + begrunn med stabilitet» er sensors gjennomgående krav. |
| 1 | Struktur, binding, funksjonelle grupper og nomenklatur | 3 | grunnlag | Hybridisering, strukturrepresentasjon + funksjonelle grupper + umettethet, og IUPAC-navnsetting er fundamentet for stereokjemi, mekanismer og syntese. Funksjonell-gruppe-repertoaret er forutsetning for alle topptemaene. |
| 2 | Stereokjemi | 5 | perfekt (89 %) | Det **konseptuelle tyngdepunktet** og den hyppigste feilkilden. Kiralitet/R-S, diastereomer/meso/E-Z/optisk aktivitet, **I/K/E/D-klassifisering** (NTNU-signatur, eget kapittel), **konformasjon↔E2**, + drillkapittel. Molekylmodell-resonnement eksplisitt. |
| 3 | Substitusjon og eliminasjon: SN1/SN2/E1/E2 | 4 | perfekt (**100 %**) | Det ENESTE 100 %-temaet — bæres av hvert sett. Karbokation + omleiring, SN1/SN2 (allyl/benzyl-anomalien), E1/E2 + Zaitsev + antiperiplanar, + eget drillkapittel. Størst av mekanismedelene. |
| 4 | Resonans, aromatisitet og syre-base | 3 | kunne/grunnlag | Resonans (begrunnelsesspråkets grunnlag), aromatisitet/Hückel (44 %, syklopentadien-anionet) og syre-base i organiske molekyler (67 %, «begrunn via stabilitet av konjugert base»). Forutsetning for EAS (Del 5) og kondensasjon (Del 8). |
| 5 | Elektrofil aromatisk substitusjon og dirigering | 3 | perfekt (89 %) | Én av fem bærebjelker (8/9). EAS-mekanisme, dirigering (aktiverende/deaktiverende, o,p vs. meta, halogen-særstilling, to-substituent-samspill) + eget dirigerings-drillkapittel. |
| 6 | Alkohol-, eter- og karbonyl-grunnkjemi | 3 | kunne | Alkohol/eter + Williamson-etersyntese (THF-danning), karbonyl + hemiacetal/acetal + nukleofil acyl-substitusjon (Fischer), og oksidasjon/reduksjon + enol/keto-tautomeri (etylacetoacetat/FeCl₃). Byggekloss-repertoar for Grignard, kondensasjon og syntese. |
| 7 | Grignard og organometallisk syntese | 2 | perfekt (89 %) | Én av fem bærebjelker (8/9). Grignard-addisjon (racemat-innsikt, tørr eter, sur opparbeiding) + drillkapittel (retrosyntese karbonyl + Grignard → alkohol; 1-fenyl-1-propanol). |
| 8 | Karbonylkondensasjon: aldol og Claisen–Schmidt | 3 | perfekt (89 %) | Én av fem bærebjelker (8/9). **Full mekanisme premieres** (enolat → angrep → dehydrering). Aldol, Claisen–Schmidt (pseudoionon/mesityloksid), intramolekylær + drillkapittel. |
| 9 | Addisjon til alken og dien-kjemi: Diels–Alder | 4 | perfekt (89 %) | Én av fem bærebjelker (D–A 8/9; norbornadien fast). Elektrofil alken-addisjon (67 %, + omleiring), 1,2-/1,4-addisjon til konjugert dien (78 %, kinetisk/termodynamisk), Diels–Alder + norbornadien + benzyn, + dien-drillkapittel. Plassert per prompt-makroorden (etter kondensasjon); karbokation fra Del 3 er eneste harde forkunnskap — se avvik 7. |
| 10 | Spektroskopi (nedtonet): NMR og MS | 2 | kjenne | **Kraftig nedtonet** (analysen §9): INGEN IR, ingen strukturoppklaring. Kun ¹H NMR-splittingsmønster + gjenkjenning av tre trivielle spektre, og ett MS molekylion-case. To korte kapitler. |
| 11 | Flertrinns-syntese og retrosyntese | 2 | perfekt (67 %) | Reaksjonsrepertoaret (verktøykasse, flashcard-tungt) → retrosyntese + synteseoppgave-drill («reagenser + mellomprodukter A–D»). Delvis uttelling per trinn. |
| 12 | Eksamenstrening | 4 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–K) + **3 komplette øvingseksamener** (fem oppgaver, tegn/begrunn, kun molekylbyggesett). |

Rasjonale: de fem mekanisme-topptemaene (Del 3, 5, 7, 8, 9) og det tunge stereokjemi-temaet
(Del 2) får flest kapitler, egne drillkapitler og høyest kvote; **spektroskopi (Del 10) er
bevisst en fotnote** (2 korte kapitler mot KJM1110s fulle 5-kapittelsdel); **ingen egen
regne-/utbyttedel** (i motsetning til KJM1110). «Tegn og begrunn med stabilitet» er den
gjennomgående aksen på tvers av alle delene.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og håndverk |
| 1 | Struktur, binding, funksjonelle grupper og nomenklatur |
| 2 | Stereokjemi |
| 3 | Substitusjon og eliminasjon: SN1/SN2/E1/E2 |
| 4 | Resonans, aromatisitet og syre-base |
| 5 | Elektrofil aromatisk substitusjon og dirigering |
| 6 | Alkohol-, eter- og karbonyl-grunnkjemi |
| 7 | Grignard og organometallisk syntese |
| 8 | Karbonylkondensasjon: aldol og Claisen–Schmidt |
| 9 | Addisjon til alken og dien-kjemi: Diels–Alder |
| 10 | Spektroskopi: NMR og MS |
| 11 | Flertrinns-syntese og retrosyntese |
| 12 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Isomer-klassifisering (I/K/E/D — identisk/konstitusjons-/enantiomer-/diastereomer for
molekylpar) · **B** Kiralitet og R/S (marker stereosentre, kiral/akiral/meso, CIP-konfigurasjon,
tell/tegn alle stereoisomerer) · **C** IUPAC-navnsetting med stereodeskriptorer (begge veier;
«entydig») · **D** Stolkonformasjon (tegn begge stolformer, mest stabil, koble til E2/reaktivitet)
· **E** SN/E-prediksjon med mekanisme (produkt + SN1/SN2/E1/E2; reaktivitetsrangering;
allyl/benzyl-anomalien; stereokjemi) · **F** Addisjon til alken/dien (Markovnikov, anti-Br₂,
hydratisering; 1,2-/1,4- med kinetisk/termodynamisk kontroll) · **G** Diels–Alder/dien-syntese
(D–A-produkt; dien+dienofil; norbornadien; benzyn) · **H** Karbonylkondensasjon (full mekanisme
aldol/Claisen–Schmidt med dehydrering) · **I** Grignard-syntese (karbonyl + Grignard → gitt
alkohol; mekanisme; tørr eter/opparbeiding; racemat) · **J** Syre-base i organiske molekyler
(sureste/mest basiske H; resonansstrukturer for anionet; ranger; syklopentadien-anomalien) ·
**K** Flertrinns-syntese/transformasjon (reagenser + mellomprodukter A–D; retrosyntese).
*(Periferal sjanger: NMR — forutsi splittingsmønster / koble tre spektre til brometan/
1-brompropan/2-brompropan; fast, men lavt vektet — Del 10.)*

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Tegn, ikke beskriv.** Poeng ligger i korrekte strukturformler, korrekte krumme piler og
   korrekte intermediater — ikke i en ordforklaring alene. (I boka: alltid SMILES + struktur +
   mekanisme i tekstnotasjonen fra kap. 0.2.) Det håndskrevne 2003-fasitet er tegnede strukturer
   + kortfattet begrunnelse, ikke lange resonnementer.
2. **Begrunnelse er obligatorisk.** «Forklar hvorfor / begrunn / grunngi» går igjen i nesten
   hver deloppgave. **Riktig valg UTEN begrunnelse gir sterkt redusert uttelling** (egen
   warning i hvert relevant kapittel). **Standardbegrunnelsen er stabilitetsresonnement:** «X
   foretrekkes fordi det korresponderende karbokationet / anionet / alkenet er mest
   substituert / resonansstabilisert / minst sterisk hindret».
3. **Poeng jevnt per deloppgave.** Marginmarkeringene viser at ingen enkeltpunkt bærer mye
   alene; helheten teller. Det lønner seg å svare på alt framfor å perfeksjonere ett punkt.
4. **«Entydig» IUPAC-navn:** stereodeskriptorer (R/S, E/Z, cis/trans) og lokanter må være med
   og korrekte.
5. **Krumme piler med korrekt retning og opphav.** Pilen starter ved et elektronpar/en binding
   og peker mot det elektrofile senteret. I syrekatalyserte mekanismer skal katalysatoren
   **gjendannes**; i kondensasjoner skal **hele forløpet** (enolat → angrep → dehydrering) være
   med.
6. **Fullstendighet i stereokjemi:** ved «tegn alle stereoisomerer» eller «tegn begge alkener»
   trekkes det for hver manglende eller feilaktig duplisert isomer; **meso-former må ikke
   glemmes**. Riktig I/K/E/D krever presis skjelning mellom enantiomer og diastereomer.
7. **Delvis uttelling i synteser.** Korrekte enkelttrinn premieres selv om hele ruten ikke er
   komplett; men reagensene må være reelle pensumreaksjoner.
8. **Konformasjon–reaktivitet skal kobles.** Å tegne riktig stolform teller lite hvis
   konklusjonen om stabilitet/E2-hastighet mangler.

> **Kildeforbehold (fra analysen §4):** sensorlogikken er utledet av oppgaveformuleringer,
> marginpoeng på skann og ett løsningsforslag (2003) — ikke av en rekke sensorveiledninger.
> Sensorkravene over er derfor merket **(verifiser)** som helhet og bør fagfellesjekkes mot
> standard organisk-kjemi-vurderingspraksis i fase 6.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** **Enantiomer vs. diastereomer forvekslet** i I/K/E/D, og ufullstendig stereoisomer-
telling (glemmer meso, teller enantiomerpar dobbelt, ser ikke at to tegninger er samme
molekyl). **Den vanligste poengtapskilden.** · **F2** **Feil pileretning** — piler tegnet fra
elektrofil mot nukleofil (motsatt), eller «flytting av atomer» i stedet for elektronpar. ·
**F3** **Feil dirigering ved EAS** — forveksler aktiverende/deaktiverende med o,p-/meta-
dirigering (**halogener er deaktiverende, men o,p-dirigerende**); håndterer to-substituent-
samspill feil. · **F4** **Svar uten begrunnelse** på «hvilken er mest sur/stabil/reaktiv» —
riktig valg, men halv eller null uttelling (stabilitetsresonnement mangler). · **F5** **Glemmer
karbokation-omleiring** ved HX-addisjon/dehydrering der et hydrid-/metylskift gir et mer
stabilt kation → feil hovedprodukt. · **F6** **Blander kinetisk og termodynamisk produkt** i
1,2-/1,4-addisjonen til dien, eller får ikke fram hvorfor 1,4-produktet er mest stabilt (mest
substituert alken). · **F7** **Ufullstendig kondensasjonsmekanisme** — hopper over
enolat-dannelsen eller dehydreringen til det α,β-umettede produktet. · **F8**
**Konformasjon–E2-koblingen** — overser at E2 krever *antiperiplanar* (aksial) utgående gruppe
→ feil konklusjon om hastighet/produkt. · **F9** **Ikke-basisk/ikke-surt heteroatom-elektronpar**
— regner amid-N eller delokalisert elektronpar som basisk/reaktivt. · **F10** **Manglende
stereodeskriptor** i IUPAC-navn (ikke «entydig»), og **feil valg av karbonyl/Grignard-
kombinasjon** (glemmer at nytt stereosenter dannet ved angrep på plant karbonyl gir racemat).

### Arketypetilpasning (dokumenterte hybridvalg og avvik fra DNA-regnefag)

1. **Regnefag i mønster-drill-variant, IKKE tallregnende.** DNA-regnefag forutsetter regne-/
   utledningsoppgaver med entydige tallsvar. KJ1020 har **så godt som ingen kvantitativ
   regning** (analysen §2: «regnedelen er nærmest fraværende», ingen fast utbytteberegning).
   Alle svar er **konstruksjonssvar**: tegn strukturer/mekanismer/stereokjemi og begrunn
   kvalitativt. **Fra DNA-regnefag beholdes:** makrostrukturen (Del 0 eksamenskart → temadeler
   etter avhengighet → eksamenstrening), øvingseksamenene, drillkapittel for bærebjelke-
   sjangrene, og prioritering etter frekvens. **Avviket** (dokumentert): DNA-regnefags
   `example`/`exercise` med gjennomregnet tallcase erstattes av **gjennomtegnet mekanisme-/
   struktur-case** med margnotater om hva som gir uttelling (stabilitetsbegrunnelse), og det
   finnes **intet eget regnekapittel** (KJM1110s utbyttekapittel 8.3 har ingen motpart her).
2. **«Symbol- og formelliste» → «Reaksjons- og mekanismeliste».** README-kravet om en
   `collapsible` rett etter Forkunnskaper omtolkes for et konstruksjonsfag: hvert delkapittel
   får en `collapsible` **«Reaksjons- og mekanismeliste»** som samler **reaksjonstypene/
   reagensene**, **mekanismestegene (krumme piler)**, **stereo-/prediksjonsreglene** og de få
   NMR-mønstrene kapitlet krever utenat — pluss markering av at **ingen tabell/formelsamling
   gis på eksamen** (alt må sitte, molekylbyggesett er eneste hjelpemiddel).
3. **Flashcards tungt vektet og reaksjonsrike (808, godt over gulvet 500).** Fordi eksamen er
   uten oppslagsverk og premierer reaksjoner og mekanismer, er faget svært flashcard-egnet:
   **reaksjon↔betingelse↔produkt**-kort (alken + $\text{Br}_2$ → trans-vicinal dibromid, anti;
   dien + dienofil → Diels–Alder-addukt; aldehyd + enolat → β-hydroksykarbonyl → α,β-umettet),
   **mekanismesteg**-kort (SN2 → ryggangrep/inversjon; E2 → antiperiplanar; aldol → enolat →
   angrep → dehydrering), **stereobegrep**-kort (meso = internt speilplan, akiral; racemat =
   optisk inaktivt), **dirigering**-kort (aktiverende o,p vs. deaktiverende meta; halogen
   deaktiverende men o,p), **stabilitetsregel**-kort (3° > 2° > 1° karbokation; Markovnikov;
   Zaitsev; Hückel 4n+2) og **reagensrolle**-kort (tørr eter for Grignard; FeCl₃ enol-indikator;
   base for enolat). **Quiz** driller nabobegrep-distraktorer (SN1/SN2, E1/E2, enantiomer/
   diastereomer, aromatisk/antiaromatisk, aktiverende/deaktiverende vs. o,p/meta, Markovnikov/
   anti, kinetisk/termodynamisk, 1,2/1,4).
4. **Drillkapitler for bærebjelke-sjangrene (i tråd med DNA-regnefag).** Stereokjemi (2.5),
   SN/E (3.4), EAS-dirigering (5.3), Grignard (7.2), kondensasjon (8.3), dien-kjemi (9.4) og
   syntese (11.2) får hvert sitt **drillkapittel** rett etter teorien, fordi disse er de mest
   resirkulerte og mekaniserbare sjangrene i arkivet.
5. **Plattform-tekstnotasjon som gjennomgående konvensjon (avvik/tillegg).** Som KJM1110:
   fordi plattformen ikke tegner grafisk, etableres i kap. 0.2 en fast **SMILES + struktur-/
   mekanisme-tekstnotasjon** (se §1) som ALLE kapitler bruker. Verifiseres i fase 6.
6. **Autentiske legemiddelmolekyler som gjennomgående innramming (NTNU-signatur).** Naproxen,
   Ibuprofen, Paracetamol, Tamoxifen, atenolol (Tenormin), tyroksin, fytol, muskarin, vitamin A
   brukes som kontekst rundt oppgavene — men alle **oppgaver og molekylvarianter er NYSKREVNE**
   (analysen §1/§8: molekyleksemplene resirkuleres i arkivet, men boka lager egne varianter).
7. **Diels–Alder/dien-kjemi plassert som Del 9 (avvik fra streng faglig avhengighet — bevisst).**
   Elektrofil alken-addisjon (9.1) bygger faglig på karbokation (Del 3) og kunne kommet like
   etter Del 3. Den plasseres likevel samlet med 1,2-/1,4-dien og Diels–Alder som én sammenhengende
   **π-addisjon/dien-del** (per prompt-makroorden, etter kondensasjon), fordi de tre deler
   allylkation-/perisyklisk apparat og fordi Diels–Alder er ett av de fem topptemaene som fortjener
   en samlet, tung del rett før syntesen (Del 11) som bruker repertoaret. Eneste harde forkunnskap
   er karbokation-stabilitet (Del 3.1), som er dekket i god tid. Dokumentert her per DNA-kravet om
   å begrunne avvik fra ren avhengighetsrekkefølge.
8. **Ingen oppdiktede mekanismer eller spektralverdier.** Usikre reagenser, produktprediksjoner,
   mekanismedetaljer og de få NMR-mønstrene merkes `(verifiser)`. Ingen NMR-/IR-tabellverdier
   presenteres som pugg — arkivet gir ingen tabell, og NMR løses på kvalitativ
   mønstergjenkjenning.

### Kapittel-DNA A — konstruksjons-/mekanismekapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–K) temaet inngår i, og hva
   sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner IKKE på
   frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav), etterfulgt av `collapsible` **Reaksjons- og mekanismeliste** (reaksjonstyper/
   reagenser, mekanismesteg, stereo-/prediksjonsregler, evt. NMR-mønster — med markering av at
   ingenting gis på eksamen).
3. `text` **Oversikt/motivasjon** — kort (maks 2–3 avsnitt): hva temaet tester, når det
   opptrer. Ikke et dannelsesfag.
4. `definition` **Faktakontrakt** — kjernebegreper, reagensroller, regler, definisjoner i emnets
   terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `theorem`/`text` **Reaksjons-/mekanismekontrakt** — de sentrale reaksjonene/mekanismene i
   tekstnotasjon (nummererte krumme piler; intermediater; regenerert katalysator), eller
   **konstruksjonskontrakt** (strukturer/isomerer/resonansstrukturer som skal kunne tegnes).
6. `text` **Konstruksjons-/tegneprosedyre** — algoritmisk «slik tegner/løser du» som nummererte
   trinn. Ett trinn = ett sensor-moment.
7. `warning` **Typiske feil** — feilkodene (F1–F10) som gjelder temaet, alltid inkl. F4 (svar
   uten stabilitetsbegrunnelse) der begrunnelse kreves.
8. `example` × 2–4 **Modellsvar** — første enkelt, siste på **eksamensnivå** og modellert på en
   reell sjanger (A–K). Løsningen skrives slik en A-besvarelse ser ut: SMILES + struktur +
   nummererte piler + eksplisitt stabilitetsbegrunnelse. Ramm gjerne inn i et autentisk
   legemiddel/naturstoff (nyskrevet variant).
9. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels), 2–4 eksamensklone
   (vanskelig, samme sjanger/vekt som reelle oppgaver, nyskrevne molekyler). Alle med `solution`
   (tegnet i tekstnotasjon) + `hints`. Hver oppgave merket med sjangerkode og hva sensor premierer.
10. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående kapitler.

### Kapittel-DNA B — drillkapittel (2.5, 3.4, 5.3, 7.2, 8.3, 9.4, 11.2, 12.1)

1. `tip` **Eksamensvinkel** — hvilke varianter av sjangeren som har forekommet.
2. `text` **Forkunnskaper** + `collapsible` **Reaksjons- og mekanismeliste** (sjangerens
   nøkkelreaksjoner/regler i kortform).
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte for sjangeren (nummererte trinn),
   f.eks. SN/E: «1) klassifiser substrat 1°/2°/3°, 2) nukleofil vs. base, 3) protisk/aprotisk,
   4) velg mekanisme, 5) tegn piler, 6) angi stereokjemi, 7) begrunn med stabilitet».
4. `example` **Gjennomtegnet eksamenscase** med sensor-margnotater om hva som gir uttelling ved
   hvert steg (bygget rundt gjengangermolekylene fra analysen §1/§7, nyskrevne varianter).
5. `warning` **Typiske feil** (feilkodene for sjangeren).
6. `exercise` × 8–15 varianter på eksamensnivå, alle med `solution` (tegnet) + `hints`.

Eksamenstrenings- og øvingseksamenskapitlene (Del 12) har egne oppsett — se §3 og §4.

---
