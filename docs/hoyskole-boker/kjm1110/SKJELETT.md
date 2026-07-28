# Bokskjelett: KJM1110 / KJM1111 Organisk kjemi I (UiO) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (UiO-arkivet vår 2010 – vår 2018: 14 distinkte avholdelser inkl.
> konteeksamener; alle sett 2014–2018 lest grundig med løsningsforslag, eldre sett
> temaregistrert). Alle oppgaver, strukturcase, spektraldata og formuleringer i boka
> skal være NYSKREVNE (se §6). Reaksjonsligninger, mekanismer, IUPAC-regler,
> Hückels regel og standard fagbegreper er ikke opphavsrettslig beskyttet og brukes fritt.
>
> **Kjemisk presisjon er kritisk.** Mekanismer, reagenser, spektroskopiske signalverdier
> og produktprediksjoner forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk
> i fase 6. Strukturer og mekanismer må kunne konstrueres aktivt uten oppslagsverk — dette
> er en eksamen der **alt tegnes fra hukommelsen**, med kun molekylbyggesett + kalkulator.
>
> **Nedlagt-status / etterfølger (ufravikelig — settes i Del 0):** KJM1110 er **nedlagt**
> (sist undervist v2017, siste eksamen v2019) og **erstattet av KJM1111 Organisk kjemi I**.
> Faget lever nesten uendret videre under ny kode; pensumet (struktur, stereokjemi,
> mekanismer, spektroskopi, nomenklatur, syntese) er stabilt og gjenbrukbart. Kalibreringen
> i denne boka bygger på **KJM1110-arkivet 2010–2018**. **Byggefasen bør skaffe og
> verifisere mot KJM1111-sett (2018→)** før boka meldes helt ferdig; alle frekvenser er
> merket «per 2010–2018-arkivet». Kurs-id beholdes teknisk som `kjm1110`, men tittelen
> profilerer begge koder.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `kjm1110` (beholdes teknisk; emnet er nedlagt) |
| Tittel | **Organisk kjemi I (KJM1110 / KJM1111) — eksamensrettet (UiO)** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | UiO. Visningsnavn i `institusjoner.ts`: «KJM1110 / KJM1111 Organisk kjemi I». |
| Arketype | **Regnefag / kjemi-konstruksjon-hybrid** (primær: `DNA-regnefag.md` for makrostruktur + drill + øvingseksamener; men faget er overveiende **konstruksjon/tegning** — låner faktakontrakt + prosedyre-momentlister fra kj2050/nokut-afb-mønsteret for reaksjons-/mekanismekapitlene, kombinert med DNA-regnefags example/exercise for den ene regnesjangeren, utbytte). Se §2 «Arketypetilpasning». |
| Antall kapitler | **37** (Del 0: 2 · temadeler 1–9: 31 · eksamenstrening Del 10: 4) |
| Estimert totaltid | **~2 190 min ≈ 36,5 timer** (per kapittel under) |
| Quiz totalt | **564** (krav ≥500) |
| Flashcards totalt | **744** (reaksjons-/mekanisme-/signalrikt fag → høy tetthet; mål 650–800; krav ≥500) |

**Pitch (ett avsnitt):** KJM1110/KJM1111-eksamen er blant de mest forutsigbare settene i
hele høyskolearkivet — og et av de mest *ferdighetsdrevne*. 4 timers skriftlig
skoleeksamen, **kun molekylbyggesett + kalkulator**: ingen pensumbok, formelsamling
eller reaksjonsoversikt. **Alle oppgaver er konstruksjonssvar** — kandidaten *tegner*
strukturformler, *tegner* mekanismer med krumme piler (elektronparforskyvningspiler),
*navngir* forbindelser og *forklarer* med ord. Det er **ikke** en flervalgseksamen. Settet
har 8–12 likt vektede oppgaver etter en fast mal, og **fire søyler bærer hvert eneste
sett**: (1) **strukturoppklaring fra ¹H NMR + IR (+ MS)** som fast oppgave 1, (2)
**IUPAC-navnsetting** av fem forbindelser, (3) **aromatisitetsvurdering** (Hückel), og (4)
**flertrinns-syntese** («angi reagenser og mellomprodukter»). Det store konseptuelle
tyngdepunktet er **stereokjemi** (kiralitet, R/S, E/Z, meso, konformasjon, optisk
aktivitet), og en felles **«pilegrammatikk»** for mekanismer (SN1/SN2, E1/E2,
karbokation-omleiring, ester/acetal) går igjen på tvers av temaene. Den eneste rene
regnedelen er én **% utbytte-beregning** per sett. Boka er bygd baklengs fra det sensor
faktisk premierer: **korrekte strukturformler og krumme piler** (tegn, ikke beskriv),
**stabilitetsresonnement** som standardbegrunnelse, **spektralsvar koblet mot hver enkelt
dataobservasjon**, og **entydige** IUPAC-navn med stereodeskriptorer.

**Kritisk plattformbetingelse (gjelder HELE boka) — tekstnotasjonsregelen:** Plattformen
kan **ikke tegne grafiske strukturformler eller mekanismepiler**. Faget er samtidig
gjennomgående visuelt. Boka løser dette med en **konsekvent tekstnotasjon** (etablert i
kap. 0.2 og brukt overalt):

- **Strukturer** angis med **SMILES** som maskinlesbar kanon, ALLTID ledsaget av
  **IUPAC-navn + kondensert formel + kort ordbeskrivelse** av skjelettet, slik at leseren
  kan rekonstruere tegningen. Eksempel: «2-brombutan, kondensert $\text{CH}_3\text{CHBrCH}_2\text{CH}_3$,
  SMILES `CC(Br)CC` — en firekarbons rettkjede med brom på C2».
- **Krumme piler** i mekanismer beskrives med et fast, nummerert tekstformat: hver pil
  angis som **«[opphav: elektronpar/binding] → [mål: atom/binding]»** med hva den *gjør*.
  Eksempel: «**Pil 1:** ensomt elektronpar på nukleofilen O → karbonylkarbonet C (ny
  C–O-binding). **Pil 2:** C=O-π-bindingen → oksygenet (blir ensomt par, negativ ladning)».
  Retning går ALLTID fra elektronrikt (nukleofil/binding) mot elektronfattig (elektrofil).
- **Stereokjemi**: R/S, E/Z og cis/trans skrives inline; kile/strek (fram/bak) beskrives i
  ord («Br på kile mot betrakter, H på strek bort fra betrakter»). Fischer- og
  stolkonformasjon beskrives systematisk (aksial/ekvatorial, opp/ned).
- **Spektraldata** i oppgaver oppgis som **strukturert DATA-blokk**: bruttoformel/(m/z),
  liste av IR-bånd (cm⁻¹) og NMR-signaler (δ, integral, multiplisitet). All matematikk og
  alle formler i LaTeX (`$...$`).

Denne notasjonen er selve broen mellom en tegneeksamen og en tekstplattform, og skal
brukes uendret i alle 37 kapitler.

**Kritisk hjelpemiddel-regel (gjelder HELE boka):** Hjelpemidler = **molekylbyggesett +
enkel kalkulator, INGENTING annet**. Kandidaten får **ikke** pensumbok, reaksjonsoversikt
eller formelsamling. Alt av reaksjoner, reagenser, mekanismer, navnsettingsregler og
tolkningsprinsipper må sitte i hodet. Molekylbyggesettet er tillatt fordi stereokjemi
(stolkonformasjon, R/S, meso) vanskelig lar seg vurdere uten en fysisk 3D-modell — boka
skal derfor eksplisitt trene **modell-resonnement** i stereokapitlene. **Det ENESTE faste
vedlegget er:** (i) en **¹H NMR-skiftverditabell** (δ per protontype), (ii) en
**IR-absorpsjonstabell** (bølgetall cm⁻¹ per funksjonell gruppe) og (iii)
**periodesystemet** (atommasser til utbytteberegningen). Selve *tolkningen* må sitte;
tabellene gir bare referanseverdiene. **Boka skal trykke NMR- og IR-tabellen som et fast
referanseoppslag (i kap. 5.1/5.2, gjengitt i Del 0) og trene aktiv bruk av dem** — fordi
kandidaten møter nøyaktig disse på eksamen.

**Kritisk notasjonsregel (emnets faste apparat):** Krumme piler = dobbelthodet pil (to
elektroner), fiskekrok = ett elektron (radikaler). **Grad av umettethet (DoU)**:
$\text{DoU} = \dfrac{2C + 2 + N - H - X}{2}$ (X = halogen; O teller ikke) — **kritisk
førstesteg i all strukturoppklaring**. **n+1-regelen** for ¹H NMR-multiplisitet (n
ekvivalente naboprotoner → n+1 topper); integralforhold ↔ antall protoner. Hückels regel:
aromatisk ↔ planar, syklisk, sammenhengende p-system med **4n+2** π-elektroner;
antiaromatisk ved 4n. Stereodeskriptorer: R/S (CIP), E/Z, cis/trans, meso, racemat.
Prediksjonsregler: **Zaitsev** (mest substituerte alken ved E1/E2), **Markovnikov**
(H til det mest hydrogenrike C), **anti-addisjon** ($\text{Br}_2$). Mol-regning:
$n = m/M$, begrensende reaktant, **% utbytte** $= 100\,\% \cdot n_\text{produkt}/n_\text{teoretisk}$,
molmasser fra periodesystemet. Alle tallsvar med **enhet** og **~3 signifikante siffer**
(sensor-krav — boka modellerer dette i utbytteeksemplene).

**Bevisst nedprioritert (begrunnes i Del 0):** ren **massespektrometri** utover
molekylion → molekylformel (ingen fragmenteringsanalyse i dybden); **NMR utover ¹H**
(¹³C nevnes kort, aldri egen oppgave); **radikalkjemi/radikalsubstitusjon** (marginal i
arkivet); **avansert MO-teori** (kun det Hückel-relevante). Disse skal IKKE bygges tungt på.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): strukturforståelse og
funksjonelle grupper før navnsetting; stereokjemi og resonans/stabilitet før spektroskopi
og mekanismer; mekanismer og karbonylkjemi før flertrinns-syntesen som binder alt sammen.
Frekvensen styrer *omfanget*, ikke rekkefølgen: 100 %-temaene får flest kapitler, eget
drillkapittel og høyest kvote.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og håndverk | 2 | perfekt (meta) | Formen (tegneeksamen, kun byggesett+kalkulator), tekstnotasjonen, temafrekvensene og sensorkravene må etableres FØR fagstoffet. **Tegne-/begrunnelseshåndverket (kap. 0.2) er unikt kritisk** fordi plattformen ikke tegner og fordi «tegn + begrunn med stabilitet» er sensors gjennomgående krav. |
| 1 | Struktur, binding og funksjonelle grupper | 3 | grunnlag/perfekt (funk.grupper) | Hybridisering (sp³/sp²/sp), strukturrepresentasjon + **DoU**, og **funksjonelle grupper** (gjenkjenning + prioritet) er fundamentet for IUPAC, spektroskopi, syre-base og syntese. Funksjonell-gruppe-repertoaret er forutsetning for 100 %-temaene. |
| 2 | IUPAC-navnsetting (drill) | 3 | perfekt (100 %) | Én av fire bærebjelker (**14/14**). Egen del + drillkapittel. «Entydige navn» krever stereodeskriptorer → forlengelse i Del 3 (dokumentert avhengighet). |
| 3 | Stereokjemi | 4 | perfekt (93 %) | Det **konseptuelle tyngdepunktet** og den hyppigste feilkilden. Kiralitet/R-S, diastereomer/meso/E-Z/optisk aktivitet, **konformasjon↔E2**, + drillkapittel («tegn alle isomerer»). Molekylmodell-resonnement eksplisitt. |
| 4 | Syre-base, resonans og stabilitet | 2 | kunne (64 %) | Resonans (tegn alle strukturer, bidrag) og syre-base (pKa, stabilitet av korresponderende base) — bærebjelker i *begrunnelsesspråket* som resten av boka bruker, og forutsetning for aromatisitet (Del 6). |
| 5 | Spektroskopi og strukturoppklaring | 5 | perfekt (100 %) | **Fast oppgave 1 i hvert sett (14/14).** Flaggskipsdelen: IR, ¹H NMR, MS som verktøy → integrert strukturoppklaringsrutine → eget drillkapittel. Overtren tolkning mot vedleggstabellene; DoU først, alltid. |
| 6 | Aromatisitet, Hückel og EAS | 3 | perfekt (aromatisitet 100 %) / kunne (EAS) | Aromatisitetsvurdering i **14/14**. Hückel + heteroaromater («opptatt» elektronpar, pyrrol/pyridin, kobling til basisitet) + elektrofil aromatisk substitusjon med dirigering. |
| 7 | Reaksjonsmekanismer med krumme piler | 5 | perfekt (pilehåndverk) / kunne | Karbokation+omleiring (57 %), SN1/SN2 (36–50 %), E1/E2+Zaitsev (57 %), addisjon/ozonolyse (21–36 %), energidiagram (36 %). Felles **pilegrammatikk** premieres i seg selv. |
| 8 | Karbonylkjemi: Grignard, ester og acetal | 3 | perfekt (ester/acetal 79 %) / kunne (Grignard) | Ester/acetal-danning og -hydrolyse med mekanisme (**11/14**), Grignard-syntese (43–64 %), og settets **eneste faste regnesjanger**: % utbytte (eget regnekapittel). |
| 9 | Flertrinns-syntese (drill) | 3 | perfekt (93 %) | Én av fire bærebjelker (**13/14**). Reaksjonsrepertoar (verktøykasse) → retrosyntese → synteseoppgave-drill («reagenser + mellomprodukter»). |
| 10 | Eksamenstrening | 4 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–K) + **3 komplette øvingseksamener** (8–12 konstruksjonsoppgaver, kun byggesett+kalkulator, med spektraltabell-oppslag). |

Rasjonale: 100 %-temaene (strukturoppklaring, IUPAC, aromatisitet, syntese) og det tunge
stereokjemi-temaet får flest kapitler, egne drillkapitler og høyest kvote; mekanisme-
håndverket får en samlet del fordi «pilegrammatikken» er en overførbar ferdighet;
utbytteberegningen får ett fokusert regnekapittel. **Nesten hele bredden testes hvert
sett** — prioriteringen styrer dybde og drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og håndverk |
| 1 | Struktur, binding og funksjonelle grupper |
| 2 | IUPAC-navnsetting |
| 3 | Stereokjemi |
| 4 | Syre-base, resonans og stabilitet |
| 5 | Spektroskopi og strukturoppklaring |
| 6 | Aromatisitet, Hückel og elektrofil aromatisk substitusjon |
| 7 | Reaksjonsmekanismer med krumme piler |
| 8 | Karbonylkjemi: Grignard, ester og acetal |
| 9 | Flertrinns-syntese |
| 10 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Strukturoppklaring fra spektre (opg 1, alltid: DoU → IR → NMR → struktur, begrunn mot
hver observasjon) · **B** IUPAC-navnsetting (entydige navn til 5 forbindelser, med
stereodeskriptorer) · **C** Flertrinns-syntese (angi reagenser + mellomprodukter; mekanisme
trengs ikke) · **D** Mekanisme med krumme piler (ester/acetal sur+basisk, karbokation-
omleiring, SN1, E1) · **E** Stereokjemi (tegn alle isomerer; kiral/akiral/meso; R/S + E/Z;
optisk aktivitet av blanding) · **F** Konformasjonsanalyse (stolkonformasjoner, mest stabil,
kobling til E2-hastighet: mentyl/neomentyl) · **G** Aromatisitet & resonans (Hückel 4n+2;
tegn resonansstrukturer; opptatt vs. basisk elektronpar) · **H** Syre-base i organiske
molekyler (ranger surhet/basisitet; begrunn via stabilitet av korresponderende base) · **I**
Reaksjonsprediksjon / hovedprodukt (EAS-dirigering, Zaitsev, Markovnikov, anti-addisjon) ·
**J** Grignard-syntese med utbytte (reagens + karbonyl → alkohol; tørr eter; racemisk
produkt; **% utbytte**) · **K** Energidiagram (G mot reaksjonsforløp, to-trinns med
hastighetsbestemmende første trinn; ΔG‡, ΔG°, intermediat, overgangstilstand).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Tegn, ikke beskriv.** Poeng ligger i korrekte strukturformler, korrekte krumme piler
   og korrekte intermediater — ikke i en ordforklaring alene. (I boka: alltid SMILES +
   struktur + mekanisme i tekstnotasjonen fra kap. 0.2.)
2. **Begrunnelse er obligatorisk.** Nesten hver oppgave sier «grunngi/forklar kort». Riktig
   svar uten begrunnelse gir sterkt redusert uttelling. **Standardbegrunnelsen er
   stabilitetsresonnement:** «X foretrekkes fordi den korresponderende basen / karbokationet
   / anionet er resonansstabilisert / mest substituert / minst sterisk hindret».
3. **«Entydig» IUPAC-navn:** stereodeskriptorer (R/S, E/Z) og lokanter må være med og korrekte.
4. **Spektroskopi koblet til HVER observasjon:** regn DoU først; IR-bånd → funksjonell gruppe;
   antall NMR-signaler → symmetri/ekvivalente protontyper; integraler → H-forhold;
   multiplisitet → naboprotoner (n+1); skift → elektronisk miljø. Sensor vil se at kandidaten
   *bruker alle de oppgitte dataene*.
5. **Krumme piler med korrekt retning og opphav.** Pilen starter ved et elektronpar/en binding
   og peker mot der elektronene går (mot elektrofilt senter). Katalysatoren (H⁺) skal
   **gjendannes** til slutt i syrekatalyserte mekanismer; alle intermediater med.
6. **Fullstendighet i stereokjemi:** ved «tegn alle isomerer» trekkes det for hver manglende
   eller feilaktig duplisert isomer; **meso-former må ikke glemmes**.
7. **Utbytte:** korrekt begrensende reaktant, molmasser fra periodesystemet, svar i **% av
   teoretisk** med **~3 signifikante siffer**, enheter (g, mol, g/mol) underveis.
8. **Pragmatisk sensur:** fasitene godtar eksplisitt alternative gyldige svar («her finnes
   flere muligheter») og til og med teknisk upresise syntesetrinn så lenge de bygger på
   pensumreaksjoner. **Boka bør formidle både den enkle og den strengt korrekte ruten.**

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** Ufullstendig stereoisomer-telling — glemmer **meso**-former, teller enantiomerpar
dobbelt, eller ser ikke at to tegninger er samme molekyl. **Den vanligste poengtapskilden.**
· **F2** Feil pileretning — tegner piler fra elektrofil mot nukleofil (motsatt), eller
«flytter atomer» i stedet for elektronpar. · **F3** Glemmer å regne **umettethetsgrad
(DoU)** før strukturforslag → foreslår struktur som ikke stemmer med formelen. · **F4** Svar
**uten begrunnelse** på «mest sur/stabil/reaktiv» — riktig valg, null/halv uttelling. ·
**F5** Feil **EAS-dirigering** — forveksler aktiverende/deaktiverende med o,p-/meta-dirigering
(NB: **halogener er deaktiverende MEN o,p-dirigerende**); håndterer to-substituent-samspill
feil. · **F6** **Konformasjon–reaktivitet:** overser at E2 krever **antiperiplanar** (aksial)
utgående gruppe → feil konklusjon om mentyl- vs. neomentylklorid-hastighet. · **F7**
**Basisk vs. opptatt elektronpar på N** — regner amid-N eller pyrrol-N som basisk selv om
elektronparet er delokalisert / del av aromatsystemet. · **F8** **Utbytte:** feil
begrensende reaktant, regner mot feil komponent, eller slurver med molmasse. · **F9**
**Manglende stereodeskriptor** i IUPAC-navn (svaret er da ikke «entydig»). · **F10**
Glemmer at **Grignard-produktet er racemisk** (ikke optisk aktivt) når et nytt stereosenter
dannes ved angrep på et plant karbonyl.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag / kjemi-konstruksjon-hybrid, ikke rent regnefag.** DNA-regnefag forutsetter at
   eksamen består av regne-/utledningsoppgaver med entydige svar. KJM1110 er **overveiende
   konstruksjon/tegning**: 8–12 oppgaver der de aller fleste er «tegn struktur/mekanisme,
   navngi, forklar», med **én** fast regnesjanger (% utbytte, sjanger J). Boka bruker derfor
   **to kapittel-DNA-varianter** (under): et **konstruksjons-/mekanismekapittel-DNA**
   (faktakontrakt + reaksjons-/mekanismekontrakt + konstruksjons-/tegneprosedyre + typiske
   feil — lånt fra fakta/pugg- og prosedyre-mønsteret i kj2050/nokut-afb) for flertallet av
   kapitlene, og et **regnekapittel/drill-DNA** (DNA-regnefags example/exercise med
   gjennomregnet case, DATA-boks for molmasser, `solution` + `hints`) for utbyttekapitlet
   (8.3) og drillkapitlene. **Fra DNA-regnefag beholdes:** makrostrukturen (Del 0 eksamenskart
   → temadeler etter avhengighet → eksamenstrening), øvingseksamenene, drillkapittel for
   bærebjelke-sjangrene, og prioritering etter frekvens.
2. **«Symbol- og formelliste» → «Reaksjons- og signalliste».** README-kravet om en
   `collapsible` rett etter Forkunnskaper omtolkes for et konstruksjonsfag (jf. prompt/README):
   hvert delkapittel får en `collapsible` **«Reaksjons- og signalliste»** som samler de
   **reaksjonstypene/reagensene**, **mekanismestegene** og **spektroskopiske signalene**
   (IR-bånd, NMR-skift) kapitlet krever utenat — pluss de få reelle formlene (DoU, n+1,
   Hückel 4n+2, % utbytte) med markering av hva som **gis i vedleggstabellen/DATA-blokken**
   vs. hva som **må sitte**. For rene regnekapitler (8.3) fungerer lista som en klassisk
   symbol-/formelliste.
3. **Flashcards tungt vektet og reaksjons-/signalrike (744, mål 650–800).** Fordi eksamen er
   uten oppslagsverk og premierer reaksjoner, mekanismer og spektraltolkning, er faget svært
   flashcard-egnet: **reaksjon↔reagens↔produkt**-kort (alken + $\text{Br}_2$ → vicinal
   dibromid, anti), **funksjonell gruppe↔IR-bånd↔NMR-skift**-kort (karbonyl → ~1715 cm⁻¹;
   aldehyd-H → δ 9,7–10,0), **mekanismesteg**-kort (SN2 → ryggangrep, inversjon),
   **stereobegrep**-kort (meso = intern speilplan, akiral tross stereosentre),
   **navnsettingsregel**-kort, **aromatisitetskriterie**-kort (Hückel 4n+2), og
   **prediksjonsregel**-kort (Zaitsev/Markovnikov/dirigering). Derfor er flashcard-summen
   bevisst **høy (744)** — se kvotesammendraget. **Quiz** driller nabobegrep-distraktorer
   (SN1/SN2, E1/E2, iodometri-lignende par: aktiverende/deaktiverende vs. o,p/meta,
   enantiomer/diastereomer, aromatisk/antiaromatisk, R/S, Markovnikov/anti-Markovnikov,
   basisk/opptatt elektronpar) og spektraltolkningstrinn.
4. **Drillkapitler for bærebjelke-sjangrene (i tråd med DNA-regnefag).** IUPAC (2.3),
   stereokjemi (3.4), strukturoppklaring (5.5) og flertrinns-syntese (9.3) får hvert sitt
   **drillkapittel** rett etter teorien, fordi disse er de mest resirkulerte og mekaniserbare
   sjangrene. Strukturoppklaring får i tillegg en hel egen del (Del 5) fordi den er fast
   oppgave 1 i **14/14** sett.
5. **Plattform-tekstnotasjon som gjennomgående konvensjon (avvik/tillegg).** Fordi plattformen
   ikke tegner grafisk, etableres i kap. 0.2 en fast **SMILES + struktur-/mekanisme-tekstnotasjon**
   (se §1) som ALLE kapitler bruker. Dette er lærebokens viktigste tilpasning og skal
   verifiseres i fase 6 (hvert mekanismekapittel har nummererte krumme piler i det avtalte
   formatet; hver struktur har SMILES + navn + kondensert formel).
6. **Ingen oppdiktede signaler eller feilaktige mekanismer.** Usikre spektralverdier,
   reagenser, produktprediksjoner og mekanismedetaljer merkes `(verifiser)`. Der en spektral
   referanseverdi oppgis illustrativt, markeres den som «fra vedleggstabellen» (typisk
   intervall), aldri som en eksakt puggeverdi utover tabellintervallene i §6 i analysen.

### Kapittel-DNA A — konstruksjons-/mekanismekapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–K) temaet inngår i, og hva
   sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner IKKE på
   frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav), etterfulgt av `collapsible` **Reaksjons- og signalliste** (reaksjonstyper/
   reagenser, mekanismesteg, IR-/NMR-signaler, med markering av hva som gis i
   vedleggstabellen vs. må sitte).
3. `text` **Oversikt/motivasjon** — kort (maks 2–3 avsnitt): hva temaet tester, når det
   opptrer. Ikke et dannelsesfag.
4. `definition` **Faktakontrakt** — kjernebegreper, reagensroller, regler, definisjoner i
   emnets terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `theorem`/`text` **Reaksjons-/mekanismekontrakt** — de sentrale reaksjonene/mekanismene i
   tekstnotasjon (nummererte krumme piler; intermediater; regenerering av katalysator),
   eller **konstruksjonskontrakt** (strukturer/isomerer/resonansstrukturer som skal kunne
   tegnes), i emnets notasjon.
6. `text` **Konstruksjons-/tegneprosedyre** — algoritmisk «slik tegner/løser du» som
   nummererte trinn (f.eks. R/S: 1) finn de fire gruppene, 2) CIP-prioriter, 3) laveste bak,
   4) roter 1→2→3, med/mot klokka). Ett trinn = ett sensor-moment.
7. `warning` **Typiske feil** — feilkodene (F1–F10) som gjelder temaet.
8. `example` × 2–4 **Modellsvar** — første enkelt, siste på **eksamensnivå** og modellert på
   en reell sjanger (A–K). Løsningen skrives slik en A-besvarelse ser ut: SMILES + struktur +
   nummererte piler + eksplisitt stabilitetsbegrunnelse.
9. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels), 2–4
   eksamensklone (vanskelig, samme sjanger/vekt som reelle oppgaver, nyskrevne molekyler/
   data). Alle med `solution` (tegnet i tekstnotasjon) + `hints`. Hver oppgave merket med
   sjangerkode og hva sensor premierer.
10. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter (reaksjoner, regler, begreper)
    fra kapitlet og forutgående kapitler det bygger på.

### Kapittel-DNA B — regnekapittel/drill (utbytte 8.3 + drillkapitlene 2.3/3.4/5.5/9.3/10.1)

1. `tip` **Eksamensvinkel** — hvilke varianter av sjangeren som har forekommet.
2. `text` **Forkunnskaper** + `collapsible` **Reaksjons-/signalliste** (for utbytte:
   klassisk symbol-/formelliste — $n=m/M$, begrensende reaktant, $\%\text{utbytte}$, med
   markering av at molmasser hentes fra periodesystemet).
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte for sjangeren (nummererte trinn).
4. `example` **Gjennomregnet/gjennomtegnet eksamenscase** med sensor-margnotater om hva som
   gir uttelling ved hvert steg (for utbytte: DATA-boks med molmasser, enhet, siffer,
   racemisk-kommentar der relevant).
5. `warning` **Typiske feil** (feilkodene for sjangeren).
6. `exercise` × 8–15 varianter på eksamensnivå, alle med `solution` + `hints`.

Eksamenstrenings- og øvingseksamenskapitlene (Del 10) har egne oppsett — se §3 og §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–K) + prioritetsklasse
> (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2010–2018-arkivet». **Faktakontrakt** =
> begreper/regler/definisjoner som SKAL med (flashcard-kilden). **Reaksjons-/mekanismekontrakt**
> = reaksjonene/mekanismene kapitlet krever aktivt, i tekstnotasjon. **Konstruksjonskontrakt**
> = strukturer/isomerer/resonansstrukturer som skal kunne tegnes. **Spektraltabellbruk**
> (Del 5) = hvordan vedleggstabellene brukes. **Kvote** = quiz/flashcards. Kryssbok-lenkene
> er verifisert mot eksisterende kjemi1-/kjemi2-kapitler (7. juli 2026).

### Del 0 — Eksamenskart og håndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes KJM1110 / KJM1111
**id:** `kjm1110-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (tegneeksamen, kun molekylbyggesett + kalkulator), de fire
  bærebjelkene, temafrekvensene, de åtte sensorkravene, nedlagt-/etterfølger-forbeholdet og
  vedleggsapparatet (NMR-/IR-tabell + periodesystem) — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2010–2018). Skal formidle: (a) **formen** —
  4 timers skriftlig skoleeksamen (3 t i 2010), **8–12 likt vektede konstruksjonsoppgaver**,
  ALT tegnes/forklares (ingen flervalg), hjelpemidler = **kun molekylbyggesett + enkel
  kalkulator**; fra 2017 poeng per deloppgave (~60 p), men jevn fordeling. (b) **de fire
  bærebjelkene** (100 %-nære): strukturoppklaring fra ¹H NMR+IR(+MS) (opg 1, 14/14),
  IUPAC-navnsetting (14/14), aromatisitet/Hückel (14/14), flertrinns-syntese (13/14) — pluss
  det tunge stereokjemi-temaet (13/14). (c) **temafrekvens-tabellen** (gjenganger-score av
  14 avholdelser): se §2/analysen §2. (d) **de åtte sensorkravene** (§2). (e) **vedlegget** —
  ¹H NMR-skifttabell + IR-tabell + periodesystem er det ENESTE oppslaget; tolkningen må
  sitte. Gjengi tabellene her som fast referanse (fulltrykk i 5.1/5.2). (f) **tekstnotasjonen**
  — vis at boka bruker SMILES + struktur + nummererte krumme piler fordi plattformen ikke
  tegner (henvis til 0.2). (g) **nedlagt-/etterfølger-forbeholdet** — KJM1110 nedlagt (siste
  eksamen v2019), erstattet av KJM1111 med nesten identisk pensum; kalibreringen bygger på
  2010–2018-arkivet; **byggefasen bør skaffe/verifisere mot KJM1111-sett**. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen A–K presenteres som studentens sjekkliste med
  frekvens per sjanger; prognosen for neste sett (nesten sikkert: strukturoppklaring (opg 1),
  IUPAC ×5, aromatisitetsvurdering, flertrinns-syntese, minst én stereokjemi-oppgave, minst
  én mekanisme med krumme piler; trolig ester/acetal eller karbokation-omleiring, syre-base
  eller EAS, og én Grignard/utbytte). Leseplan: Del 1 → 2 → 3 er kjernen; 100 %-delene
  (2, 3, 5, 6, 9) er «perfekt»-tunge. **Gjengangermolekylene** nevnes eksplisitt som
  drillmål: mentylklorid/neomentylklorid (stolkonformasjon + E2), heksaklorsykloheksan/lindan
  (stereoisomerer + E2), syklopentandiol (kiralitet/meso), pyrrol/furan/syklopentadien
  (aromatisitet/surhet), 2-metylsykloheksanol + HBr (karbokation-omleiring). Ingen
  forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 4-timers
  mal med opg 1 strukturoppklaring + IUPAC + aromatisitet + syntese + stereokjemi + mekanisme
  — sett opp tidsbudsjett og rekkefølge» og «avgjør av en oppgavetekst hvilke data du kan
  vente (m/z? IR-bånd? NMR-integraler?)».
- **Typiske feil:** Metafeilene: pugge spektralverdier som uansett gis i vedleggstabellen i
  stedet for å drille *tolkningsrutinen*; beskrive i stedet for å tegne (sensorkrav 1);
  droppe begrunnelsen (sensorkrav 2, F4); tro at arkivfrekvensene er ferske (les
  nedlagt-forbeholdet — bygg mot KJM1111).
- **Kvote:** 10 quiz / 10 flashcards (formfakta, bærebjelkene, temafrekvens, sensorkravene,
  sjangerkodene, vedleggsapparatet).

#### Kapittel 0.2: Tegne- og begrunnelseshåndverket
**id:** `kjm1110-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-0-1`

- **Kapitteltype:** håndverkskapittel (meta — plattformnotasjon + begrunnelsesspråk).
- **Description:** De to ferdighetene som gir poeng på hver eneste oppgave: å *tegne* (her:
  skrive strukturer og krumme piler i bokas faste tekstnotasjon) og å *begrunne* med
  **stabilitetsresonnement**. Kapitlet etablerer notasjonen resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 2, 5 på tvers av alle sjangre A–K).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; [Kovalent binding](/kjemi1/kjemi1-3-2),
  [Introduksjon til organisk kjemi](/kjemi1/kjemi1-10-1) (Lewis-strukturer,
  strekformler). `collapsible` **Reaksjons- og signalliste:** notasjonssymbolene (krum pil =
  2 e⁻, fiskekrok = 1 e⁻; δ+/δ−; formelle ladninger; kile/strek).
- **Faktakontrakt (flashcard-kilde):** **SMILES-grunnregler** (kjeder, forgrening med
  parentes, ringlukking med tall, ladning/isotop, dobbel/trippel `=`/`#`) — nok til å lese
  og skrive enkle strukturer; **kondensert vs. skjelett vs. Lewis**; **krum pil**
  (dobbelthodet, fra elektronpar/binding mot elektrofilt senter) vs. **fiskekrok** (radikal);
  **formell ladning** $= \text{gruppeelektroner} - \text{ensomme} - \tfrac{1}{2}\text{bindingselektroner}$;
  **stabilitetsresonnementets tre standardgrunner:** (i) resonansstabilisering (delokalisert
  ladning), (ii) mest substituert / hyperkonjugasjon (karbokation-/alken-stabilitet), (iii)
  minst sterisk hindret / induktiv effekt. **Begrunnelsesmalen:** «X foretrekkes fordi
  [korresponderende base/kation/anion] er mer stabil, fordi [resonans/substitusjon/sterikk]».
- **Reaksjons-/mekanismekontrakt (bokas tekstnotasjon — normativ):** vis det faste
  pileformatet på ett enkelt eksempel (f.eks. protonering av en alkohol): **Pil 1:** ensomt
  par på O → H⁺ (ny O–H-binding). Etabler at hver mekanisme i boka skrives som en nummerert
  pilesekvens med intermediater og til slutt regenerert katalysator.
- **Konstruksjons-/tegneprosedyre:** (1) skriv bruttoformel og regn DoU; (2) tegn skjelett/
  SMILES; (3) marker funksjonelle grupper; (4) for mekanisme: nummerer pilene fra
  elektronrikt mot elektronfattig; (5) skriv stabilitetsbegrunnelsen med malen.
- **Typiske feil:** F2 (pileretning), F4 (svar uten begrunnelse); i tillegg: skrive en
  struktur uten å sjekke valens (fire bindinger på C), utelate ensomme par som deltar.
- **Modellsvar:** «Skriv 2-metylpropan-2-ol i SMILES og kondensert form, og forklar hvorfor
  det tertiære karbokationet fra denne alkoholen er mer stabilt enn et primært» (mal-
  begrunnelse); «Tegn (i tekstnotasjon) de to pilene i protonering av vann og angi opphav/mål».
- **Kvote:** 12 quiz / 16 flashcards.

### Del 1 — Struktur, binding og funksjonelle grupper *(prioritet: GRUNNLAG / PERFEKT for funk.grupper)*

#### Kapittel 1.1: Hybridisering, binding og molekylgeometri i karbonforbindelser
**id:** `kjm1110-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-0-2`

- **Kapitteltype:** konstruksjonskapittel (grunnlag).
- **Description:** sp³/sp²/sp-hybridisering, σ-/π-binding, bindingsvinkler og -lengder, og
  hvordan hybridiseringen styrer geometri, surhet (sp-CH mer sur) og planaritet — fundamentet
  for stereokjemi og aromatisitet.
- **Eksamensbelegg:** Ikke egen oppgave, men forutsetning for aromatisitet (planaritet,
  sp²-p-system), stereokjemi (sp³ = tetraedrisk stereosenter) og syre-base (s-karakter).
  Inngår i G, E, H. Prioritet: grunnlag.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Atomets oppbygging](/kjemi1/kjemi1-1-1),
  [Elektronkonfigurasjon](/kjemi1/kjemi1-1-2), [Kovalent binding](/kjemi1/kjemi1-3-2).
  `collapsible` **Reaksjons- og signalliste:** hybridiseringsapparatet (sp³ 109,5°, sp² 120°,
  sp 180°; σ vs. π; s-karakter ↔ elektronegativitet/surhet).
- **Faktakontrakt (flashcard-kilde):** **sp³** (4 σ, tetraedrisk, 109,5°), **sp²** (3 σ + 1 π,
  trigonal plan, 120°), **sp** (2 σ + 2 π, lineær, 180°); σ- vs. π-binding (rotasjon fri om σ,
  låst om π → grunnlag for E/Z); bindingslengde/-styrke-trend (C≡C < C=C < C–C i lengde);
  **s-karakter** øker → sterkere elektrontiltrekning (sp-C–H mest sur, brukes i syre-base);
  p-orbital vinkelrett på sp²-planet (grunnlag for konjugasjon/aromatisitet).
- **Konstruksjonskontrakt:** angi hybridisering til hvert C/N/O i en gitt struktur; forutsi
  geometri og bindingsvinkler; identifisere plane vs. ikke-plane deler.
- **Typiske feil:** blande hybridisering med geometri; glemme π-bindingens rotasjonssperre
  (kobles til E/Z i 3.2); regne ensomme par feil ved geometri.
- **Modellsvar:** «Angi hybridisering og geometri rundt hvert av de tre karbonene i propenal
  (akrolein), og forklar hvorfor molekylet er plant» (kobler til konjugasjon).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 1.2: Strukturrepresentasjon og grad av umettethet (DoU)
**id:** `kjm1110-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-1-1`

- **Kapitteltype:** konstruksjonskapittel (grunnlag, med minicalc).
- **Description:** Å oversette mellom Lewis-, kondensert-, skjelett- og SMILES-form, og å
  regne **grad av umettethet** fra en bruttoformel — det obligatoriske førstesteget i all
  strukturoppklaring (sjanger A).
- **Eksamensbelegg:** DoU er *kritisk førstesteg* i strukturoppklaring (sjanger A, opg 1,
  14/14). Manglende DoU er typisk feil F3. Prioritet: grunnlag → men konseptuelt **perfekt**
  (bærer Del 5). Sjangre: A.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Isomeri](/kjemi1/kjemi1-10-3),
  [Mol og molmasse](/kjemi1/kjemi1-5-1). `collapsible` **Reaksjons- og signalliste:**
  DoU-formelen, konverteringsregler mellom representasjonene.
- **Faktakontrakt (flashcard-kilde):** **DoU** $= \dfrac{2C+2+N-H-X}{2}$ (X = halogen; O og
  S teller ikke); tolkning: 1 DoU = én ring **eller** én π-binding; **4 DoU er sterkt
  indikativt for en benzenring** (3 π + 1 ring); regler for kondensert ↔ skjelett ↔ SMILES;
  underforståtte H på karbon i skjelettformel; konstitusjons-/strukturisomeri (samme formel,
  ulik konnektivitet).
- **Reaksjons-/mekanismekontrakt (minicalc):** regn DoU fra en gitt formel; foreslå hvilke
  strukturtrekk et gitt DoU tillater (0 = mettet asyklisk; 1 = én alken/ring; 4 = trolig
  aromat). Konverter en struktur fram og tilbake mellom formene.
- **Konstruksjons-/tegneprosedyre:** (1) tell C, H, N, X i formelen; (2) sett inn i
  DoU-formelen; (3) tolk tallet (ringer/π); (4) skisser mulige skjeletter; (5) skriv SMILES.
- **Typiske feil:** **F3** (glemme DoU før strukturforslag); regne O/X inn feil i formelen;
  forveksle konstitusjonsisomer med stereoisomer (skilles i Del 3).
- **Modellsvar:** «En forbindelse har bruttoformel $\text{C}_4\text{H}_8\text{O}$. Regn DoU
  og list minst tre konstitusjonsisomerer med hver sin funksjonelle gruppe (SMILES + navn)»
  (direkte Del 5-forberedelse).
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 1.3: Funksjonelle grupper — gjenkjenning og prioritet
**id:** `kjm1110-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-1-2`

- **Kapitteltype:** konstruksjonskapittel (perfekt — flashcard-tungt referanserepertoar).
- **Description:** Hele repertoaret av funksjonelle grupper med struktur, SMILES-mønster,
  karakteristiske IR-/NMR-signaler og **prioritetsrekkefølge** for suffiks i IUPAC — verktøyet
  bak navnsetting, spektroskopi og syntese.
- **Eksamensbelegg:** Forutsetning for de fire bærebjelkene (B, A, C) — man må kjenne igjen
  gruppene for å navngi, tolke spektre og planlegge syntese. Prioritet: perfekt (grunnlag for
  100 %-temaene). Sjangre: B, A, C, I.
- **Forkunnskaper/kryssbok:** kap. 1.2; [Funksjonelle grupper](/kjemi1/kjemi1-10-2),
  [Organiske forbindelser og nomenklatur](/kjemi2/kjemi2-8-1),
  [Alkoholer, aldehyder og ketoner](/kjemi2/kjemi2-8-2),
  [Karboksylsyrer og estere](/kjemi2/kjemi2-8-3),
  [Aminer og amider](/kjemi2/kjemi2-8-4). `collapsible` **Reaksjons- og signalliste:**
  gruppe → SMILES-mønster → typisk IR-bånd → typisk NMR-skift (fra vedleggstabellene).
- **Faktakontrakt (flashcard-kilde — stor):** alle sentrale grupper med struktur, SMILES og
  karakteristisk signal: **alkan/alken/alkyn** (C=C ~1650 cm⁻¹, vinylisk H δ 4,5–6,5),
  **aromat** (aromatisk H δ 6,5–8,0), **halogenid**, **alkohol** (O–H bred ~3400 cm⁻¹),
  **eter** (O–CH δ 3,3–4,5), **aldehyd** (C=O ~1725 cm⁻¹, CHO δ 9,7–10,0), **keton**
  (C=O ~1715 cm⁻¹), **karboksylsyre** (O–H meget bred 2500–3100, C=O ~1710, COOH δ 11–12),
  **ester** (C=O ~1740), **amid** (C=O ~1650, N–H 3300–3500), **amin** (N–H 3300–3500),
  **nitril** (C≡N 2210–2260); **prioritetsrekkefølge for hovedgruppe** (karboksylsyre >
  ester > amid > nitril > aldehyd > keton > alkohol > amin > alken/alkyn) — bestemmer
  suffiks i IUPAC.
- **Konstruksjonskontrakt:** identifiser alle funksjonelle grupper i en kompleks struktur;
  ranger dem etter IUPAC-prioritet; koble hver gruppe til dens forventede IR-/NMR-signal.
- **Typiske feil:** blande aldehyd/keton (aldehyd har CHO-proton δ ~9,7); glemme at
  karboksylsyre slår ester i prioritet; forveksle amid- og amin-N (kobles til F7 i Del 6).
- **Modellsvar:** «Gitt en struktur med både en OH- og en COOH-gruppe: hvilken bestemmer
  suffikset, og hvilke to IR-bånd forventer du?»
- **Kvote:** 18 quiz / 30 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A hybridisering/geometri · 1.B strukturrepresentasjon +
DoU-regning · 1.C funksjonelle grupper + prioritet + signalkobling · 1.D samlet
grunnlagsprøve på eksamensnivå).

### Del 2 — IUPAC-navnsetting *(prioritet: PERFEKT — 14/14)*

> **Dokumentert avhengighet:** «Entydige» navn krever stereodeskriptorer (R/S, E/Z), som
> først innføres i Del 3. Del 2 dekker **konstitusjonell** navnsetting fullt ut (hovedkjede,
> lokanter, substituenter, suffikser, multipler) og markerer eksplisitt at stereodeskriptorer
> legges til i Del 3 (framoverlenke). **Stereo-navnsetting fullføres i drillkapittel 3.4**
> («entydige navn med R/S og E/Z»). Denne todelingen speiler at eksamens navnsettingsoppgave
> nesten alltid inneholder minst én stereodeskriptor.

#### Kapittel 2.1: IUPAC-systematikken — hovedkjede, lokanter og substituenter
**id:** `kjm1110-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-1-3`

- **Kapitteltype:** konstruksjonskapittel (perfekt).
- **Description:** Kjernealgoritmen for IUPAC-navn: velg lengste kjede med
  høyest-prioritets-gruppe, nummerer for lavest lokantsett, alfabetiser og multipliser
  substituenter, sett riktig suffiks.
- **Eksamensbelegg:** Én av fire bærebjelker (sjanger B, 14/14). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.3; [Organiske forbindelser og nomenklatur](/kjemi2/kjemi2-8-1),
  [Navnsetting av uorganiske forbindelser](/kjemi1/kjemi1-1-4) (grunnprinsipp).
  `collapsible` **Reaksjons- og signalliste:** navnsettingsalgoritmen som nummererte regler +
  stamnavn C1–C10 + vanlige substituentnavn.
- **Faktakontrakt (flashcard-kilde):** stamnavn met/et/prop/but/pent/heks/hept/okt/non/dek;
  **regel 1** lengste kjede som inneholder høyest-prioritets funksjonell gruppe = hovedkjede;
  **regel 2** nummerer slik at hovedgruppen (så substituentene) får lavest lokant(sett);
  **regel 3** substituenter alfabetiseres (di/tri teller ikke i alfabetisering); **regel 4**
  suffiks fra høyest-prioritets gruppe (–syre, –oat, –amid, –nitril, –al, –on, –ol, –amin),
  resten som prefiks; sykloalkan-prefiks; vanlige substituenter (metyl, etyl, halogen som
  fluor/klor/brom/jod, nitro, hydroksy-som-prefiks).
- **Konstruksjons-/tegneprosedyre (algoritmen):** (1) finn høyest-prioritets funksjonell
  gruppe; (2) velg lengste kjede som inneholder den; (3) nummerer for lavest lokantsett;
  (4) navngi og lokant-merk substituenter, alfabetiser; (5) sett suffiks; (6) sett sammen.
- **Typiske feil:** velge feil hovedkjede (ikke lengste med hovedgruppe); nummerere fra feil
  ende; alfabetisere feil; glemme lokant på suffiks.
- **Modellsvar:** «Navngi $\text{CH}_3\text{CH(CH}_3\text{)CH}_2\text{CH}_2\text{OH}$
  (SMILES `CC(C)CCO`) trinn for trinn etter algoritmen» (→ 4-metylpentan-1-ol).
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 2.2: Funksjonell gruppe-prioritet og sammensatte navn
**id:** `kjm1110-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-2-1`

- **Kapitteltype:** konstruksjonskapittel (perfekt).
- **Description:** Navnsetting når flere funksjonelle grupper konkurrerer, med ringer,
  umettethet og flere substituenter — de vanskeligere av de fem forbindelsene A–E.
- **Eksamensbelegg:** Sjanger B (de vanskeligste av de fem). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1; kap. 1.3 (prioritetsrekkefølgen).
  `collapsible` **Reaksjons- og signalliste:** full prioritetsstige for suffiks + prefiks-navn
  for grupper som ikke får suffiks (okso-, hydroksy-, amino-, alkoksy-).
- **Faktakontrakt (flashcard-kilde):** hovedgruppe-suffiks vs. underordnet-gruppe-prefiks
  (COOH som suffiks –syre, men som prefiks karboksy-; OH suffiks –ol / prefiks hydroksy-;
  C=O keton suffiks –on / prefiks okso-; NH₂ suffiks –amin / prefiks amino-; OR alltid
  prefiks alkoksy-); en/yn-endelser med lokant og prioritet ved lik lokant (dobbelt før
  trippel); benzen-avledede navn (fenyl, benzyl, styren/toluen som beholdte navn `(verifiser
  omfang)`); ring vs. kjede som hovedstruktur.
- **Konstruksjonskontrakt:** navngi molekyler med 2–3 funksjonelle grupper, ring + kjede,
  og umettethet; angi hvilken gruppe som blir suffiks og hvorfor.
- **Typiske feil:** la feil gruppe bli suffiks (COOH slår OH); glemme okso-/hydroksy-prefiks
  for de underordnede gruppene; feil ende-lokant ved en/yn.
- **Modellsvar:** «Navngi en forbindelse med både keton og karboksylsyre (f.eks.
  4-oksopentansyre, SMILES `CC(=O)CCC(=O)O`) og forklar prioritetsvalget».
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 2.3: Navnsettingsdrill — fem forbindelser på eksamensnivå
**id:** `kjm1110-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-2-2`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Den resirkulerte navnsettingsoppgaven: gi entydige IUPAC-navn til fem
  tegnede forbindelser A–E, drillet i mange varianter. Konstitusjonell fullstendighet her;
  stereodeskriptorer legges til etter Del 3 (framoverlenke + repetisjon i 3.4).
- **Eksamensbelegg:** Sjanger B, 14/14 — fem forbindelser per sett. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2. `collapsible` **Reaksjons- og signalliste:**
  navnsettingsalgoritmen i kortform + prioritetsstige.
- **Løsningsoppskrift:** algoritmen fra 2.1 anvendt mekanisk på hver forbindelse, med
  sjekkliste for «entydig» (lokant på suffiks? alle substituenter? stereodeskriptor der
  relevant — legges til etter Del 3?).
- **Gjennomtegnet case:** fem varierte forbindelser (alkohol, forgrenet alkan, syklisk keton,
  karboksylsyre med substituent, umettet) navngitt trinn for trinn med sensor-margnotater om
  hva som gjør navnet «entydig».
- **Typiske feil:** **F9** (manglende stereodeskriptor — flagges, fullføres i 3.4); feil
  hovedkjede/lokant; glemme suffikslokant.
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A hovedkjede/lokant/substituent · 2.B funksjonell
gruppe-prioritet + sammensatte navn · 2.C fem-forbindelser-drill (konstitusjonell) · 2.D
samlet navnsettingsprøve på eksamensnivå, med framoverlenke til stereo-navn i 3.4).

### Del 3 — Stereokjemi *(prioritet: PERFEKT — 13/14, hyppigste feilkilde)*

#### Kapittel 3.1: Kiralitet, stereosentre og R/S (CIP)
**id:** `kjm1110-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-2-2`

- **Kapitteltype:** konstruksjonskapittel (perfekt).
- **Description:** Kiralitet, stereosenter, enantiomerer og speilbilder, og CIP-algoritmen
  for å tildele R/S — grunnferdigheten i stereokjemi og i entydige navn.
- **Eksamensbelegg:** Sjanger E (13/14); R/S-tildeling er fast delkrav. Molekylbyggesett
  brukes til å se speilbilder. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1 (sp³ tetraeder), kap. 2.1 (navn);
  [Isomeri](/kjemi1/kjemi1-10-3). `collapsible` **Reaksjons- og signalliste:**
  CIP-prioritetsreglene + stereobegrepene.
- **Faktakontrakt (flashcard-kilde):** **kiral** (ikke-superponerbar på speilbildet) vs.
  **akiral**; **stereosenter** (sp³-C med fire ulike grupper); **enantiomerer** (speilbilder,
  identiske fysiske egenskaper unntatt optisk rotasjon og reaksjon med andre kirale);
  **CIP-prioritet** (høyest atomnummer først; ved likhet, gå utover til første forskjell;
  dobbeltbinding = duplisert atom); **R/S** (laveste prioritet bakover, 1→2→3 med klokka = R,
  mot = S); antall stereoisomerer $\le 2^n$ (n = stereosentre).
- **Konstruksjons-/tegneprosedyre (R/S):** (1) identifiser de fire gruppene på stereosenteret;
  (2) CIP-prioriter (1 høyest, 4 lavest); (3) orienter med 4 bakover (kile/strek-resonnement
  eller byggesett); (4) roter 1→2→3; (5) med klokka = R, mot = S.
- **Typiske feil:** feil CIP-prioritet (glemme å gå utover ved likhet); glemme å snu svaret
  når laveste gruppe peker mot betrakteren; kalle et molekyl kiralt uten fire ulike grupper.
- **Modellsvar:** «Tildel R/S til stereosenteret i 2-brombutan (SMILES `CC(Br)CC`), og
  forklar CIP-rangeringen Br > C(etyl) > C(metyl) > H» (byggesett-resonnement beskrevet).
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 3.2: Diastereomerer, meso, E/Z og optisk aktivitet
**id:** `kjm1110-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-3-1`

- **Kapitteltype:** konstruksjonskapittel (perfekt — signaturferdighet).
- **Description:** Flere stereosentre (diastereomerer, meso-former med internt speilplan),
  E/Z om dobbeltbindinger, og hvordan man avgjør optisk aktivitet av en blanding (racemat vs.
  rent enantiomer) — nettopp der studenter oftest bommer.
- **Eksamensbelegg:** Sjanger E (13/14); «tegn alle isomerer, angi meso/kiral, avgjør optisk
  aktivitet» er kjernen. Meso-glemsel er typisk feil F1 (den vanligste). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1; kap. 1.1 (π-bindingens rotasjonssperre → E/Z).
  `collapsible` **Reaksjons- og signalliste:** E/Z-CIP-regelen, meso-kriteriet,
  racemat-begrepet.
- **Faktakontrakt (flashcard-kilde):** **diastereomerer** (stereoisomerer som ikke er
  speilbilder; ulike fysiske egenskaper); **meso-forbindelse** (har stereosentre, men er
  **akiral** pga. internt speilplan → optisk inaktiv); **E/Z** (CIP på hver
  dobbeltbindings-C: høyest-prioritet på samme side = Z, motsatt = E); **cis/trans** (for
  ringer/enkle alkener); **racemat** (50:50 enantiomerblanding → optisk inaktiv, «utvendig
  kompensasjon»); optisk aktivitet krever **overskudd av ett enantiomer**; $2^n$-regelen med
  fradrag for meso-sammenfall.
- **Konstruksjons-/tegneprosedyre:** (1) tell stereosentre og dobbeltbindinger; (2) generer
  alle kombinasjoner ($2^n$); (3) fjern meso-dubletter (internt speilplan); (4) grupper i
  enantiomerpar og diastereomerer; (5) avgjør optisk aktivitet av gitt blanding.
- **Typiske feil:** **F1** (glemme meso, doble opp enantiomerpar, samme molekyl to ganger);
  kalle racemat optisk aktivt; feil E/Z ved CIP.
- **Modellsvar:** «Tegn alle stereoisomerer av 2,3-diklorbutan (SMILES `CC(Cl)C(Cl)C`),
  angi hvilke som er enantiomerer og hvilken som er meso, og avgjør om en 1:1-blanding av de
  to kirale er optisk aktiv» (klassisk meso-case).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 3.3: Konformasjonsanalyse — stolkonformasjon og koblingen til E2
**id:** `kjm1110-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-3-2`

- **Kapitteltype:** konstruksjonskapittel (perfekt — signaturcase).
- **Description:** De to stolkonformasjonene til substituert sykloheksan (aksial/ekvatorial),
  hvilken som er mest stabil, og den premierte koblingen til **E2-hastighet** (antiperiplanar
  krav → aksial utgående gruppe) — mentyl/neomentylklorid.
- **Eksamensbelegg:** Sjanger F (≈50–64 %, undertalt maskinelt); mentyl/neomentyl og
  heksaklorsykloheksan er gjengangermolekyler. Konformasjon–E2-koblingen er typisk feil F6.
  Prioritet: perfekt. (E2-*mekanismen* selv dekkes i 7.3 — her ligger konformasjons-
  resonnementet.)
- **Forkunnskaper/kryssbok:** kap. 3.2; kap. 1.1 (tetraeder). `collapsible` **Reaksjons- og
  signalliste:** stol/vippe-konformasjon, aksial/ekvatorial, ringflipp, antiperiplanar-kravet
  for E2.
- **Faktakontrakt (flashcard-kilde):** **stolkonformasjon** (mest stabil for sykloheksan);
  **aksial vs. ekvatorial**; **ringflipp** bytter aksial↔ekvatorial; **store grupper foretrekker
  ekvatorial** (mindre 1,3-diaksial sterisk hindring) → styrer mest stabil konformasjon; **E2
  krever antiperiplanar** geometri → utgående gruppe og β-H må begge være **aksiale**; derfor
  eliminerer en isomer der Cl kun kan bli aksial ved en ugunstig ringflipp *langsommere* (jf.
  mentyl- vs. neomentylklorid); trans-diaksial addisjon/eliminasjon-prinsippet.
- **Konstruksjons-/tegneprosedyre:** (1) tegn begge stolkonformasjoner (beskriv hvilke
  substituenter som er aksiale/ekvatoriale i hver); (2) avgjør mest stabil (flest store
  grupper ekvatorialt); (3) for E2: sjekk om utgående gruppe kan bli aksial med
  antiperiplanar β-H; (4) konkluder om hastighet/produkt.
- **Typiske feil:** **F6** (overser antiperiplanar/aksial-kravet); tro at mest stabil
  konformasjon alltid gir raskest E2 (ofte motsatt); glemme ringflipp.
- **Modellsvar:** «Forklar med stolkonformasjoner hvorfor neomentylklorid gjennomgår E2
  raskere enn mentylklorid, og hvilket alken hver gir» (byggesett-resonnement beskrevet;
  kobles til Zaitsev i 7.3).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 3.4: Stereokjemi-drill — tegn alle isomerer og gi entydige stereonavn
**id:** `kjm1110-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-3-3`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Overtrening av «tegn alle stereoisomerer + klassifiser» og av **entydige
  IUPAC-navn med R/S og E/Z** — her fullføres navnsettings-avhengigheten fra Del 2.
- **Eksamensbelegg:** Sjanger E + B (stereodel). Fullstendighet premieres; F1 og F9 er
  hovedfeilene. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.3, kap. 2.3 (navnsettingsalgoritmen).
  `collapsible` **Reaksjons- og signalliste:** meso-/enantiomer-/diastereomer-kriteriene +
  stereodeskriptor-innsetting i navn.
- **Løsningsoppskrift:** isomer-telling ($2^n$ minus meso) → klassifisering → optisk aktivitet
  → sett R/S og E/Z inn i det konstitusjonelle navnet (fra 2.3) for et **entydig** navn.
- **Gjennomtegnet case:** flere klassiske systemer (syklopentandiol, 2,3-diklorbutan,
  vinsyre-lignende) med full isomer-oversikt og entydige navn, med sensor-margnotater.
- **Typiske feil:** **F1** (ufullstendig telling), **F9** (manglende stereodeskriptor i navn).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A kiralitet + R/S · 3.B diastereomer/meso/E-Z/optisk
aktivitet · 3.C konformasjon + E2-kobling · 3.D «tegn alle isomerer + entydige stereonavn»
på eksamensnivå).

### Del 4 — Syre-base, resonans og stabilitet *(prioritet: KUNNE — 64 %/64 %, kjernebegrunnelse)*

#### Kapittel 4.1: Resonans — tegn alle strukturer og vurder bidrag
**id:** `kjm1110-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-1-3`

- **Kapitteltype:** konstruksjonskapittel (kunne → konseptuelt perfekt; bærer Del 6 og
  begrunnelsesspråket).
- **Description:** Å tegne alle gyldige resonansstrukturer, tildele formelle ladninger, og
  rangere bidragene — grunnlaget for stabilitetsresonnement, aromatisitet og syre-base.
- **Eksamensbelegg:** Sjanger G (resonans 9/14, nedre grense); «tegn alle resonansstrukturer,
  gi formelle ladninger, forklar stabilisering». Underbygger de fleste begrunnelser (sensorkrav 2).
  Prioritet: kunne → konseptuelt perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.3, kap. 0.2 (krum pil, formell ladning);
  [Kovalent binding](/kjemi1/kjemi1-3-2). `collapsible` **Reaksjons- og signalliste:**
  resonanspil (dobbelthodet ↔), regler for gyldige resonansstrukturer, bidragsrangering.
- **Faktakontrakt (flashcard-kilde):** **resonans** (én forbindelse, flere Lewis-bilder som
  deler elektrondelokalisering; ikke likevekt); regler: kun elektroner flyttes (π/ensomme par),
  aldri atomer; bevar totalt antall elektroner; oktett respekteres; **bidragsrangering** (flere
  bindinger + full oktett + minst ladningsseparasjon + negativ ladning på mest elektronegative
  atom = større bidrag); **delokalisering stabiliserer**; formell ladning-regningen fra 0.2.
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** vis resonansflytting med nummererte piler
  (f.eks. karboksylat: **Pil:** C=O-π → O; **Pil:** C–O⁻ ensomt par → C=O — de to O blir
  ekvivalente). Etabler at «resonansstabilisert» = spredt ladning.
- **Konstruksjons-/tegneprosedyre:** (1) finn flyttbare elektroner (π, ensomme par nær π/
  ladning); (2) flytt med piler mot elektronfattig senter; (3) tegn ny struktur, sett formelle
  ladninger; (4) ranger bidrag; (5) konkluder om (av)stabilisering.
- **Typiske feil:** flytte atomer (F2-slektning); bryte oktett på 2.-periode-atomer; kalle
  resonans en likevekt; glemme bidragsrangering.
- **Modellsvar:** «Tegn resonansstrukturene til acetat-ionet og forklar hvorfor de to
  C–O-bindingene er like lange» (kobles til syrestyrke i 4.2).
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 4.2: Syre-base i organiske molekyler — stabilitet av korresponderende base
**id:** `kjm1110-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-4-1`

- **Kapitteltype:** konstruksjonskapittel (kunne).
- **Description:** Å rangere surhet/basisitet og **alltid begrunne via stabiliteten til den
  korresponderende basen/syren** (resonans, induktiv effekt, aromatisering av anionet,
  hybridisering) — sensors standardbegrunnelse i praksis.
- **Eksamensbelegg:** Sjanger H (9/14, nedre grense); «hvilken er mest sur/basisk, grunngi».
  Svar uten begrunnelse er typisk feil F4. Syklopentadien (aromatisk anion) og
  substituenteffekter (NO₂ vs. OCH₃) er faste. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1 (resonans), kap. 1.1 (s-karakter);
  [Syrer og baser - definisjoner](/kjemi1/kjemi1-9-1),
  [Svake syrer og baser](/kjemi1/kjemi1-9-3). `collapsible` **Reaksjons- og signalliste:**
  pKa-begrepet, de fire stabiliseringsfaktorene, konjugert syre/base.
- **Faktakontrakt (flashcard-kilde):** **surhet ↔ stabilitet av konjugert base** (mer stabil
  base = sterkere syre = lavere pKa); fire faktorer: (1) **resonans** (karboksylat >> alkoksid);
  (2) **induktiv** (elektrontiltrekkende grupper som Cl/NO₂ stabiliserer anion → mer sur;
  avtar med avstand); (3) **aromatisering** (syklopentadien er uvanlig sur fordi anionet blir
  aromatisk, 6 π); (4) **hybridisering/atom** (sp-C–H mer sur; nedover i gruppen mer sur);
  **basisitet ↔ tilgjengelighet av elektronparet** (amid-N og pyrrol-N lite basiske, koble
  til F7/Del 6); pKa-holdepunkter (karboksylsyre ~4–5, fenol ~10, alkohol ~16, alkan ~50)
  `(verifiser eksakte pKa)`.
- **Reaksjons-/mekanismekontrakt:** for hvert par, tegn den konjugerte basen og dens
  resonans-/induktiv-stabilisering; ranger og begrunn med malen fra 0.2.
- **Konstruksjons-/tegneprosedyre:** (1) fjern H⁺ → tegn konjugert base; (2) vurder resonans-
  /induktiv-/aromatiserings-/hybridiseringsstabilisering; (3) mer stabil base = mer sur;
  (4) skriv begrunnelsen eksplisitt.
- **Typiske feil:** **F4** (svar uten begrunnelse); rangere på selve syren i stedet for
  konjugert base; glemme aromatiserings-effekten (syklopentadien); regne amid/pyrrol-N basisk (F7).
- **Modellsvar:** «Ranger surheten til etanol, eddiksyre og syklopentadien, og begrunn hver
  via den korresponderende basen» (resonans vs. aromatisering).
- **Kvote:** 16 quiz / 22 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A resonansstrukturer + formelle ladninger + bidrag · 4.B
syre-base-rangering med stabilitetsbegrunnelse · 4.C substituenteffekter (induktiv/resonans,
NO₂ vs. OCH₃) · 4.D samlet «stabilitet som begrunnelse»-prøve på eksamensnivå).

### Del 5 — Spektroskopi og strukturoppklaring *(prioritet: PERFEKT — 14/14, fast oppgave 1)*

#### Kapittel 5.1: IR-spektroskopi — funksjonelle grupper mot vedleggstabellen
**id:** `kjm1110-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-1-3`

- **Kapitteltype:** konstruksjonskapittel (perfekt — spektraltolkning).
- **Description:** Å lese en IR-absorpsjonsliste og koble hvert bånd til en funksjonell gruppe
  ved hjelp av vedleggstabellen — særlig karbonyl, O–H og C=C/aromat.
- **Eksamensbelegg:** Del av sjanger A (opg 1, 14/14): IR gir funksjonelle grupper. Sensorkrav 4.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.3; [Spektroskopi](/kjemi1/kjemi1-2-2) (generelt
  prinsipp: lys ↔ energinivåer — NB dekker atomspektre, ikke IR-detaljene).
  `collapsible` **Reaksjons- og signalliste — IR-tabellen (fast vedlegg, gjengis her i
  fulltekst):** sp³ C–H 2850–2960 · sp C–H ~3300 · C=C 1640–1680 · C≡C 2100–2260 · alkohol
  O–H 3400–3650 (bred) · karboksylsyre O–H 2500–3100 (meget bred) · amin/amid N–H 3300–3500 ·
  nitril C≡N 2210–2260 · **karbonyl C=O 1670–1780 (sterk)** (aldehyd/keton ~1715–1725, ester
  ~1740, amid ~1650, syre ~1710). Marker: **verdiene gis på eksamen; tolkningen må sitte.**
- **Faktakontrakt (flashcard-kilde):** hva IR måler (bindingsvibrasjoner, bølgetall ∝
  bindingsstyrke/atommasse); **diagnostiske bånd**: bred O–H, meget bred syre-O–H, sterk C=O
  (og hvordan posisjonen skiller ester/keton/amid), N–H, C≡N/C≡C, fravær av C=O; «fingerprint»-
  regionen brukes ikke i detalj.
- **Spektraltabellbruk:** gitt en båndliste → slå opp i tabellen → tildel funksjonell gruppe →
  noter hva som er utelukket (f.eks. ingen bred O–H → ikke alkohol/syre).
- **Konstruksjons-/tegneprosedyre:** (1) se etter C=O (område + eksakt posisjon → gruppe);
  (2) se etter bred O–H (alkohol vs. syre); (3) N–H; (4) C≡; (5) konkluder om
  gruppe(r), koble til DoU.
- **Typiske feil:** blande ester/keton/amid-C=O (posisjon); overse at syre-O–H er meget bred
  og overlapper C–H; tolke fingerprint-topper.
- **Modellsvar:** «En forbindelse ($\text{C}_3\text{H}_6\text{O}$) viser sterkt bånd ved 1715
  cm⁻¹ og ingen bred O–H. Hvilken funksjonell gruppe, og hvilke to strukturer er mulige?»
  (keton/aldehyd; kobles til NMR i 5.2).
- **Kvote:** 16 quiz / 28 flashcards.

#### Kapittel 5.2: ¹H NMR — skift, integral og multiplisitet (n+1)
**id:** `kjm1110-5-2` · **number:** 5.2 · **estimatedMinutes:** 65 · **prerequisites:** `kjm1110-5-1`

- **Kapitteltype:** konstruksjonskapittel (perfekt — spektraltolkning, flaggskip).
- **Description:** Å lese et ¹H NMR-spektrum: antall signaler (symmetri/ekvivalente
  protontyper), integraler (H-forhold), multiplisitet (n+1 fra naboprotoner) og kjemisk skift
  mot vedleggstabellen — kjernen i strukturoppklaring.
- **Eksamensbelegg:** Del av sjanger A (opg 1, 14/14); NMR er den tyngste tolkningsdelen.
  Sensorkrav 4 (koble til hver observasjon). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1, kap. 1.3 (funksjonelle grupper), kap. 3.1 (ekvivalens
  ↔ symmetri). `collapsible` **Reaksjons- og signalliste — ¹H NMR-skifttabellen (fast vedlegg,
  gjengis her i fulltekst):** alkyl 0,7–1,8 · allylisk 1,6–2,2 · aromatisk metyl 2,4–2,7 ·
  O–CH/eter 3,3–4,5 · vinylisk 4,5–6,5 · aromatisk 6,5–8,0 · aldehyd 9,7–10,0 · karboksylsyre
  11–12. Pluss **n+1-regelen** og integral↔H-forhold. Marker: **skiftverdiene gis; tolkningen
  må sitte.**
- **Faktakontrakt (flashcard-kilde):** **antall signaler** = antall kjemisk uekvivalente
  protontyper (symmetri reduserer); **integral** ∝ antall protoner (gir forhold, ikke absolutt
  tall); **multiplisitet** ved **n+1-regelen** (n ekvivalente naboprotoner → n+1 topper:
  singlett/dublett/triplett/kvartett); **kjemisk skift** ↔ elektronisk miljø (avskjerming;
  nær elektronegative atomer/π → høyere δ); typiske mønstre (etyl = triplett + kvartett;
  isopropyl = dublett + septett).
- **Spektraltabellbruk:** for hvert signal → skift (miljø) + integral (antall H) +
  multiplisitet (antall naboer); sett sammen til delstrukturer.
- **Konstruksjons-/tegneprosedyre:** (1) tell signaler → symmetri; (2) les integraler →
  H-forhold; (3) les multiplisitet → naboprotoner (n+1); (4) plasser hvert signal mot
  skifttabellen → miljø; (5) sett sammen delstrukturene.
- **Typiske feil:** lese integral som absolutt antall (det er forhold); telle naboprotoner
  feil (n+1); glemme at symmetriekvivalente H gir ett signal; feil δ-tolkning.
- **Modellsvar:** «Gitt $\text{C}_3\text{H}_6\text{O}$, sterkt IR ved 1715 cm⁻¹, og NMR: én
  singlett ved δ 2,1 (integral 6H). Hvilken struktur, og hvorfor bare ett NMR-signal?»
  (aceton — symmetri; kobles til 5.4).
- **Kvote:** 18 quiz / 30 flashcards.

#### Kapittel 5.3: Massespektrometri — molekylion, m/z og molekylformel
**id:** `kjm1110-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `kjm1110-1-2`

- **Kapitteltype:** konstruksjonskapittel (kunne → perfekt i integrasjon; ny fra 2014).
- **Description:** Å bruke molekylionets m/z til å bestemme molekylmasse og (sammen med
  grunnstoffdata) molekylformel og DoU — det nyere førstesteget i strukturoppklaring.
- **Eksamensbelegg:** MS i strukturoppgaven fra 2014 (3/14, stigende); gir molekylformel før
  struktur. Del av sjanger A. Prioritet: kunne (men integreres i 100 %-oppgaven).
- **Forkunnskaper/kryssbok:** kap. 1.2 (DoU, molekylformel), [Mol og molmasse](/kjemi1/kjemi1-5-1).
  `collapsible` **Reaksjons- og signalliste:** M⁺-ion, m/z, isotopmønster (M+2 for Cl/Br),
  DoU fra formel.
- **Faktakontrakt (flashcard-kilde):** **molekylion M⁺** (m/z = molekylmasse); jevn/odde masse
  og **nitrogenregelen** (odde M → odde antall N); **M+2-mønster** (Cl ~1:0,32 `(verifiser
  ratio)`, Br ~1:1) avslører halogen; hovedbruk: m/z → molmasse → sammen med grunnstoff-
  informasjon → molekylformel → DoU. Fragmentering nevnes kort, ikke drillet.
- **Spektraltabellbruk:** m/z(M⁺) + evt. IR/NMR-hint om grunnstoffer → foreslå molekylformel;
  regn DoU.
- **Konstruksjons-/tegneprosedyre:** (1) les M⁺ = molmasse; (2) sjekk nitrogenregel og
  M+2 (halogen); (3) foreslå molekylformel; (4) regn DoU (bru til 5.1/5.2).
- **Typiske feil:** forveksle M⁺ med et fragment; overse M+2 for halogen; hoppe over DoU (F3).
- **Modellsvar:** «M⁺ = 122, ingen N, ingen M+2. Kombinert med 4 DoU og aromatisk NMR:
  foreslå molekylformel og angi at det trolig er en aromat» (→ $\text{C}_8\text{H}_{10}\text{O}$-
  type resonnement).
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 5.4: Strukturoppklaring — den integrerte rutinen (opg 1)
**id:** `kjm1110-5-4` · **number:** 5.4 · **estimatedMinutes:** 65 · **prerequisites:** `kjm1110-5-3`

- **Kapitteltype:** konstruksjonskapittel (perfekt — kjerneoppgaven).
- **Description:** Å sette IR + ¹H NMR (+ MS) sammen til et strukturforslag som begrunnes
  **punkt for punkt mot hver dataobservasjon** — akkurat slik oppgave 1 løses.
- **Eksamensbelegg:** Sjanger A, opg 1, **14/14**. Sensor premierer at strukturen forklares
  mot hver observasjon, ikke bare et riktig sluttsvar; flere gyldige strukturer godtas
  (sensorkrav 8). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.3 (IR/NMR/MS), kap. 1.2 (DoU), kap. 1.3 (grupper).
  `collapsible` **Reaksjons- og signalliste:** hele rutinen (DoU → IR → NMR → sett sammen →
  sjekk mot alle data) + begge vedleggstabellene i kortform.
- **Faktakontrakt (flashcard-kilde):** rutinen som fast sekvens; «begrunn mot hver
  observasjon» som poengmodell; hvordan man tester et forslag (stemmer det med DoU, alle
  IR-bånd, alle NMR-signaler?); at flere strukturer kan passe → oppgi alternativer.
- **Spektraltabellbruk:** samordnet bruk av begge tabeller + M⁺ på ett fullstendig case.
- **Konstruksjons-/tegneprosedyre (opg 1-oppskriften):** (1) DoU fra formel/M⁺; (2) IR →
  funksjonelle grupper (og hva som utelukkes); (3) NMR → antall H-typer, forhold, naboer,
  miljø; (4) sett sammen delstrukturer så DoU og alle data stemmer; (5) skriv struktur (SMILES
  + navn) og **begrunn hvert bånd/signal eksplisitt**; (6) oppgi evt. alternative gyldige
  strukturer.
- **Typiske feil:** **F3** (glemme DoU); gi sluttsvar uten å koble til hver observasjon
  (sensorkrav 4); ignorere et bånd/signal som ikke passer.
- **Modellsvar:** ett fullstendig case ($\text{C}_4\text{H}_8\text{O}_2$: IR ~1740, NMR
  kvartett+triplett+singlett) løst som en A-besvarelse med observasjon-for-observasjon-
  begrunnelse (→ etylacetat-type).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 5.5: Strukturoppklaringsdrill
**id:** `kjm1110-5-5` · **number:** 5.5 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-5-4`

- **Kapitteltype:** drillkapittel (DNA B — spektraldrill).
- **Description:** 8–15 komplette strukturoppklarings-case (bruttoformel/M⁺ + IR + NMR) på
  eksamensnivå, hver løst med full observasjon-for-observasjon-begrunnelse.
- **Eksamensbelegg:** Sjanger A, opg 1. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.4. `collapsible` **Reaksjons- og signalliste:**
  opg 1-oppskriften + tabellene i kortform.
- **Løsningsoppskrift:** opg 1-oppskriften fra 5.4 anvendt mekanisk; sjekkliste for
  fullstendig databruk.
- **Gjennomtegnet case:** varierte funksjonelle grupper (alkohol, ester, aldehyd, aromat,
  amin), inkl. minst ett med M+2-halogen og minst ett med flere gyldige svar.
- **Typiske feil:** F3, ufullstendig databruk, feil n+1-telling.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A IR-tolkning mot tabellen · 5.B ¹H NMR (skift/integral/
multiplisitet) · 5.C MS + molekylformel + DoU · 5.D fullstendig strukturoppklaring (opg 1)
på eksamensnivå med databegrunnelse).

### Del 6 — Aromatisitet, Hückel og elektrofil aromatisk substitusjon *(prioritet: PERFEKT for aromatisitet — 14/14)*

#### Kapittel 6.1: Aromatisitet, antiaromatisitet og Hückels regel
**id:** `kjm1110-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-4-1`

- **Kapitteltype:** konstruksjonskapittel (perfekt).
- **Description:** Kriteriene for aromatisitet (planar, syklisk, sammenhengende p-system,
  Hückel 4n+2), antiaromatisitet (4n) og ikke-aromatisitet — «er den aromatisk? hvorfor?».
- **Eksamensbelegg:** Sjanger G, aromatisitetsvurdering i **14/14**. «Grunngi» kreves alltid.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1 (resonans/delokalisering), kap. 1.1 (sp², plan p-
  orbital). `collapsible` **Reaksjons- og signalliste:** Hückel 4n+2, de fire kriteriene,
  π-elektrontelling.
- **Faktakontrakt (flashcard-kilde):** **fire kriterier**: (1) syklisk, (2) planar, (3)
  sammenhengende p-system (hver ringatom bidrar med en p-orbital), (4) **4n+2 π-elektroner**
  (Hückel) → **aromatisk** (ekstra stabil); **4n** π-elektroner (og planar) → **antiaromatisk**
  (destabilisert); bryter et kriterium → **ikke-aromatisk**; π-elektrontelling (dobbeltbindinger
  bidrar 2 hver; ensomt par i p-orbital kan bidra 2, jf. pyrrol); eksempler: benzen (6, arom),
  syklobutadien (4, antiarom), syklooktatetraen (8 men ikke-planar → ikke-arom), syklopentadienyl-
  anion (6, arom — jf. surhet 4.2), tropylium-kation (6, arom).
- **Konstruksjons-/tegneprosedyre:** (1) er ringen syklisk og (potensielt) planar? (2) har
  hvert ringatom en p-orbital i et sammenhengende system? (3) tell π-elektroner; (4) 4n+2 →
  aromatisk, 4n → antiaromatisk, ellers ikke-aromatisk; (5) begrunn.
- **Typiske feil:** telle π-elektroner feil; glemme planaritetskravet (syklooktatetraen);
  kalle alt med alternerende bindinger aromatisk uten Hückel-sjekk; svar uten begrunnelse (F4).
- **Modellsvar:** «Er syklopentadienyl-anionet aromatisk? Tell π-elektroner og begrunn»
  (6 π → aromatisk; kobler til hvorfor syklopentadien er surt, 4.2).
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 6.2: Heteroaromater og «opptatt» vs. basisk elektronpar
**id:** `kjm1110-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-6-1`

- **Kapitteltype:** konstruksjonskapittel (perfekt — signaturcase).
- **Description:** Hvorfor pyrrol/furan er aromatiske, hvilket elektronpar på nitrogen som
  inngår i π-systemet (og derfor er «opptatt» og ikke-basisk), og forskjellen pyrrol vs.
  pyridin vs. imidazol.
- **Eksamensbelegg:** Sjanger G, koblet til syre-base (H). Typisk feil F7 (basisk vs. opptatt
  elektronpar). Pyrrol/furan/imidazol er gjengangere. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1, kap. 4.2 (basisitet). `collapsible` **Reaksjons- og
  signalliste:** heteroaromat-p-system, opptatt vs. tilgjengelig elektronpar.
- **Faktakontrakt (flashcard-kilde):** **pyrrol** (N-ensomt par **i** p-systemet → 6 π,
  aromatisk, N **ikke basisk**); **pyridin** (N-ensomt par i sp²-orbital **i planet**, ikke i
  π → basisk; ringen har 6 π fra dobbeltbindingene); **furan** (O bidrar med ett ensomt par til
  π); **imidazol** (to N: ett pyrrol-type, ett pyridin-type → det pyridin-type er basisk);
  regelen: **et elektronpar som er del av aromatsystemet er ikke tilgjengelig for protonering**
  (F7-vaksine); samme logikk for amid-N (delokalisert til C=O → lite basisk).
- **Konstruksjons-/tegneprosedyre:** (1) tegn ringen og p-systemet; (2) avgjør for hvert
  heteroatom om ensomt par ligger i π (opptatt) eller i planet (tilgjengelig); (3) tell π for
  aromatisitet; (4) konkluder om basisitet.
- **Typiske feil:** **F7** (regne pyrrol-N/amid-N som basisk); telle N-ensomt par både i π og
  som basisk; blande pyrrol og pyridin.
- **Modellsvar:** «Forklar hvorfor pyridin er en base, men pyrrol nesten ikke, ut fra hvor
  nitrogenets ensomme par sitter».
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 6.3: Elektrofil aromatisk substitusjon og dirigering
**id:** `kjm1110-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-6-1`

- **Kapitteltype:** mekanismekapittel (kunne).
- **Description:** EAS-mekanismen (elektrofil → arenium-ion → tap av H⁺, rearomatisering) og
  dirigering: aktiverende o,p- vs. deaktiverende meta-, samspill mellom to substituenter, og
  halogenenes særstilling.
- **Eksamensbelegg:** Sjanger I (EAS ≈43–50 %, undertalt); «hva blir hovedproduktet, grunngi».
  Feil dirigering er typisk feil F5. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 6.1 (aromat), kap. 4.1 (resonansstabilisering av arenium),
  kap. 0.2 (krumme piler). `collapsible` **Reaksjons- og signalliste:** EAS-mekanismesteg,
  dirigeringstabell, aktiverende/deaktiverende.
- **Faktakontrakt (flashcard-kilde):** **EAS-mekanisme**: (1) elektrofil dannes; (2)
  aromatring angriper elektrofil → resonansstabilisert **arenium-ion** (mister aromatisitet
  midlertidig); (3) tap av H⁺ → rearomatisering; **aktiverende, o,p-dirigerende** grupper
  (elektrondonerende: –OH, –OR, –NH₂, alkyl); **deaktiverende, meta-dirigerende** (elektron-
  tiltrekkende: –NO₂, –C=O, –COOH, –CN, –SO₃H); **halogener: deaktiverende MEN o,p-dirigerende**
  (induktivt trekker, men ensomt par stabiliserer o,p-arenium) — F5-kjernen; samspill: sterkeste
  aktivator dominerer plasseringen; reaksjonene Friedel–Crafts (alkylering/acylering),
  nitrering, halogenering, sulfonering (som pensumreaksjoner til syntese, Del 9).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** tegn arenium-ionets resonansstrukturer
  for o/p vs. meta og vis hvorfor donor stabiliserer o,p (positiv ladning havner ved
  substituenten).
- **Konstruksjons-/tegneprosedyre:** (1) klassifiser hver substituent (aktiverende/
  deaktiverende, o,p/meta); (2) ved to: la sterkeste aktivator dirigere; (3) tegn arenium-
  resonans for å begrunne; (4) angi hovedprodukt.
- **Typiske feil:** **F5** (forveksle aktiverende/deaktiverende med o,p/meta; feil på halogen);
  glemme sterisk hindring av orto; håndtere to-substituent-samspill feil; svar uten begrunnelse.
- **Modellsvar:** «Hvor nitreres fenol, og hvorfor? Bruk arenium-resonans til å begrunne
  o,p-dirigering» (og kontrast med nitrobenzen → meta).
- **Kvote:** 16 quiz / 24 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A aromatisk/antiaromatisk/ikke-aromatisk + Hückel-telling ·
6.B heteroaromater + opptatt/basisk elektronpar · 6.C EAS-mekanisme + dirigering · 6.D samlet
aromatisitets- og reaksjonsprediksjonsprøve på eksamensnivå).

### Del 7 — Reaksjonsmekanismer med krumme piler *(prioritet: PERFEKT pilehåndverk / KUNNE)*

#### Kapittel 7.1: Karbokationer — stabilitet, dannelse og omleiring
**id:** `kjm1110-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-4-1`

- **Kapitteltype:** mekanismekapittel (perfekt — signaturmekanisme).
- **Description:** Karbokation-stabilitet (tertiær > sekundær > primær; resonans/allyl/benzyl),
  dannelse, og **omleiring** (hydrid-/alkylskift, ringutvidelse 5→6) med krumme piler —
  2-metylsykloheksanol + HBr.
- **Eksamensbelegg:** Sjanger D (karbokation-omleiring 8/14, 57 %). 2-metylsykloheksanol + HBr
  er gjenganger. Sensorkrav 5 (piler). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1 (resonans/hyperkonjugasjon), kap. 0.2 (krumme piler).
  `collapsible` **Reaksjons- og signalliste:** karbokation-stabilitetsrekke, skift-typer,
  ringutvidelse.
- **Faktakontrakt (flashcard-kilde):** **stabilitet** 3° > 2° > 1° > metyl (hyperkonjugasjon
  + induktiv), allyl/benzyl ekstra stabile (resonans); **dannelse** (protonering av OH → tap av
  vann; ionisering av halogenid); **omleiring** = 1,2-hydridskift eller 1,2-alkylskift som gir
  et **mer stabilt** kation; **ringutvidelse** (5→6-ring når det gir mer stabilt/mindre spent
  kation); omleiring skjer bare når den øker stabiliteten.
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** full mekanisme for
  2-metylsykloheksanol + HBr: **Pil 1** ensomt par O → H⁺ (protonering); **Pil 2** C–O-binding
  → O (tap av H₂O, danner 2°-kation); **Pil 3** nabo-C–H(eller C–C)-binding → kation-C
  (1,2-skift → 3°-kation); **Pil 4** Br⁻ ensomt par → kation-C (produkt). Vis at katalysator
  (H⁺) og hvert intermediat er med.
- **Konstruksjons-/tegneprosedyre:** (1) dann kationet (piler); (2) vurder om et 1,2-skift gir
  mer stabilt kation; (3) om ja, tegn skiftet med pil; (4) fang nukleofilen; (5) begrunn med
  stabilitet.
- **Typiske feil:** **F2** (pileretning); omleire når det ikke øker stabilitet; glemme
  ringutvidelse; svar uten stabilitetsbegrunnelse (F4).
- **Modellsvar:** «Tegn mekanismen for 2-metylsykloheksanol + HBr og forklar hvorfor produktet
  kommer fra et omleiret tertiært karbokation».
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 7.2: Nukleofil substitusjon — SN1 og SN2
**id:** `kjm1110-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-7-1`

- **Kapitteltype:** mekanismekapittel (kunne).
- **Description:** SN1 (to trinn, karbokation, racemisering) vs. SN2 (ett trinn, ryggangrep,
  inversjon), og hvordan substrat, nukleofil, utgående gruppe og løsemiddel avgjør hvilken.
- **Eksamensbelegg:** Sjanger D/I (SN1/SN2 ≈36–50 %); mekanisme + reaktivitetsrangering.
  Sensorkrav 5. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.1 (karbokation), kap. 3.1 (R/S — inversjon);
  [Organiske reaksjonstyper](/kjemi2/kjemi2-8-5). `collapsible` **Reaksjons- og
  signalliste:** SN1/SN2-stegene, faktortabellen (substrat/Nu/UG/løsemiddel).
- **Faktakontrakt (flashcard-kilde):** **SN2** (ett trinn, ryggangrep, **inversjon** av
  konfigurasjon, favoriseres av 1°-substrat + sterk nukleofil + aprotisk løsemiddel; hastighet
  ∝ [substrat][Nu]); **SN1** (to trinn via karbokation, **racemisering**, favoriseres av
  3°-substrat + svak nukleofil + protisk løsemiddel; hastighet ∝ [substrat]); god **utgående
  gruppe** = svak base (I⁻ > Br⁻ > Cl⁻); konkurranse mot eliminasjon (Del 7.3).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** SN2: **Pil 1** Nu ensomt par → C
  (baksiden av UG); **Pil 2** C–UG-binding → UG. SN1: **Pil 1** C–UG → UG (kation); **Pil 2**
  Nu → kation-C.
- **Konstruksjons-/tegneprosedyre:** (1) klassifiser substrat (1°/2°/3°); (2) vurder
  nukleofil-styrke og løsemiddel; (3) velg SN1 vs. SN2; (4) tegn mekanismen; (5) angi
  stereokjemi (inversjon/racemisering).
- **Typiske feil:** **F2**; glemme inversjon (SN2)/racemisering (SN1); rangere reaktivitet feil;
  overse eliminasjonskonkurranse.
- **Modellsvar:** «Avgjør om 2-brombutan + OH⁻ (aprotisk) går SN1 eller SN2, tegn mekanismen,
  og angi stereokjemien til produktet».
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 7.3: Eliminasjon — E1, E2, Zaitsev og antiperiplanar
**id:** `kjm1110-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-7-2`

- **Kapitteltype:** mekanismekapittel (kunne → perfekt-nær).
- **Description:** E1 (via karbokation) og E2 (samtidig, antiperiplanar), Zaitsev-produktet,
  og geometrikravet som forklarer mentyl/neomentyl-hastigheten (kobling til 3.3).
- **Eksamensbelegg:** Sjanger I/F (E1/E2 8/14, 57 %); Zaitsev + antiperiplanar. Typisk feil F6.
  Prioritet: kunne (høyfrekvent).
- **Forkunnskaper/kryssbok:** kap. 7.2 (konkurranse SN/E), kap. 3.3 (konformasjon/antiperiplanar).
  `collapsible` **Reaksjons- og signalliste:** E1/E2-steg, Zaitsev, antiperiplanar-krav.
- **Faktakontrakt (flashcard-kilde):** **E2** (ett trinn, base fjerner β-H mens UG går,
  krever **antiperiplanar** β-H og UG; sterk base; hastighet ∝ [substrat][base]); **E1** (to
  trinn via karbokation; svak base/varme; Zaitsev); **Zaitsev-regelen** (mest substituerte,
  mest stabile alken dominerer); Hofmann-unntak ved stor base `(verifiser pensumomfang)`; E2 på
  sykloheksan krever **aksial** UG og aksial β-H (kobler til 3.3/mentyl-neomentyl).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** E2: **Pil 1** base → β-H; **Pil 2**
  C–H-binding → danner C=C; **Pil 3** C–UG-binding → UG. E1: ioniser først (som SN1), så base
  fjerner β-H.
- **Konstruksjons-/tegneprosedyre:** (1) sterk base/1°–2° → E2, svak base/3° → E1; (2) for
  sykloheksan: sjekk aksial UG + antiperiplanar β-H; (3) bruk Zaitsev for hovedprodukt; (4)
  tegn mekanismen.
- **Typiske feil:** **F6** (glemme antiperiplanar/aksial); feil Zaitsev-produkt; blande E1/E2-
  betingelser; F2 (piler).
- **Modellsvar:** «Tegn E2 av 2-brombutan med etoksid, angi hovedproduktet (Zaitsev) og
  begrunn med alken-stabilitet» + kobling tilbake til mentyl/neomentyl (3.3).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 7.4: Addisjon til alken og ozonolyse
**id:** `kjm1110-7-4` · **number:** 7.4 · **estimatedMinutes:** 50 · **prerequisites:** `kjm1110-7-1`

- **Kapitteltype:** mekanismekapittel (kjenne → kunne; syntesenyttig).
- **Description:** Elektrofil addisjon (Markovnikov-hydrohalogenering via karbokation,
  anti-addisjon av $\text{Br}_2$, syrekatalysert hydratisering) og ozonolyse (spalt alken →
  karbonyler; bakoverslutt struktur).
- **Eksamensbelegg:** Sjanger I/A (addisjon 3–5/14, ozonolyse 4/14). Ozonolyse brukes til
  strukturbakslutning. Prioritet: kjenne → kunne (syntese-input).
- **Forkunnskaper/kryssbok:** kap. 7.1 (karbokation → Markovnikov);
  [Alkoholer, aldehyder og ketoner](/kjemi2/kjemi2-8-2). `collapsible` **Reaksjons- og
  signalliste:** Markovnikov, anti-addisjon, ozonolyse-spalting.
- **Faktakontrakt (flashcard-kilde):** **Markovnikov** (H til det C med flest H → mest stabilt
  karbokation styrer); **anti-addisjon** av $\text{Br}_2$ (via bromoniumion → trans-vicinal
  dibromid); **syrekatalysert hydratisering** (Markovnikov-alkohol); **ozonolyse**
  (C=C → to C=O; hver dobbeltbindings-ende blir et karbonyl → bakoverslutt hvilken alken som ga
  produktene); reduktiv (aldehyd/keton) vs. oksidativ opparbeiding `(verifiser
  opparbeidingsdetalj)`.
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** hydrohalogenering: **Pil 1** C=C-π → H (av
  HBr, danner mest stabilt kation); **Pil 2** Br⁻ → kation. Bromonium: **Pil** C=C-π → Br₂,
  bromoniumion, så anti-angrep av Br⁻.
- **Konstruksjons-/tegneprosedyre:** for addisjon: finn mest stabilt kation (Markovnikov),
  tegn piler; for ozonolyse: kutt hver C=C, sett =O på begge ender, slutt bakover til alken.
- **Typiske feil:** feil Markovnikov-regioselektivitet; glemme anti-stereokjemi for $\text{Br}_2$;
  feil bakoverslutning ved ozonolyse; F2.
- **Modellsvar:** «Et ukjent alken gir aceton + propanal ved ozonolyse. Hvilket alken?»
  (bakoverslutning) + «Tegn Markovnikov-produktet av 2-metylpropen + HBr med mekanisme».
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 7.5: Energidiagram og reaksjonskoordinat
**id:** `kjm1110-7-5` · **number:** 7.5 · **estimatedMinutes:** 45 · **prerequisites:** `kjm1110-7-2`

- **Kapitteltype:** konstruksjonskapittel (kunne — diagramsjanger).
- **Description:** Å tegne G mot reaksjonsforløp for en to-trinns eksergon reaksjon der første
  trinn er hastighetsbestemmende, og markere ΔG‡, ΔG°, intermediat og overgangstilstander.
- **Eksamensbelegg:** Sjanger K (energidiagram 5/14, 36 %); kobles til SN1/E1/EAS. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.2 (SN1 to trinn), kap. 6.3 (EAS to trinn);
  [Energi og entalpi](/kjemi1/kjemi1-6-1) (ΔG/ΔH-begrep, generelt),
  [Reaksjonsmekanismer](/kjemi2/kjemi2-7-4) (elementærtrinn, hastighetsbestemmende).
  `collapsible` **Symbol- og formelliste:** G, ΔG‡, ΔG°, overgangstilstand (‡), intermediat.
- **Faktakontrakt (flashcard-kilde):** **overgangstilstand** (energitopp, kan ikke isoleres,
  ‡) vs. **intermediat** (lokal energidal, f.eks. karbokation); **ΔG‡** (aktiveringsbarriere,
  til høyeste topp — styrer hastighet); **ΔG°** (produkt minus reaktant, styrer likevekt);
  **hastighetsbestemmende trinn** = det med høyest topp; to-trinns diagram = to topper med en
  dal (intermediat) mellom; eksergon (produkt lavere enn reaktant).
- **Konstruksjons-/tegneprosedyre (beskriv diagrammet i ord/koordinater):** (1) plasser
  reaktant, intermediat (dal), produkt (lavere); (2) to topper (TS1 høyest = hastighetsbestemmende,
  TS2 lavere); (3) merk ΔG‡ (til TS1) og ΔG° (reaktant→produkt); (4) knytt til mekanismen.
- **Typiske feil:** blande overgangstilstand og intermediat; sette ΔG‡ til feil topp; tegne
  intermediat som en topp; glemme at første trinn er hastighetsbestemmende.
- **Modellsvar:** «Skisser (i koordinater) energidiagrammet for en SN1-reaksjon, merk
  karbokation-intermediatet, de to overgangstilstandene, ΔG‡ og ΔG°».
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A karbokation-stabilitet + omleiring · 7.B SN1/SN2 (mekanisme
+ reaktivitet + stereokjemi) · 7.C E1/E2 + Zaitsev + antiperiplanar · 7.D addisjon/ozonolyse +
energidiagram på eksamensnivå).

### Del 8 — Karbonylkjemi: Grignard, ester og acetal *(prioritet: PERFEKT for ester/acetal — 11/14)*

#### Kapittel 8.1: Karbonylgruppen og Grignard-syntese
**id:** `kjm1110-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-7-2`

- **Kapitteltype:** mekanismekapittel (kunne → perfekt for Grignard).
- **Description:** Karbonylets elektrofile C, nukleofil addisjon, og Grignard-syntese (RMgX +
  karbonyl → alkohol), inkl. rollen til tørr eter og sur opparbeiding, og hvorfor produktet
  ofte er **racemisk**.
- **Eksamensbelegg:** Sjanger J (Grignard 43–64 %, undertalt); reagens + karbonyl → alkohol,
  optisk aktivitet av produktet. Typisk feil F10 (racemisk produkt). Prioritet: perfekt (for
  Grignard-delen).
- **Forkunnskaper/kryssbok:** kap. 7.2 (nukleofil addisjon), kap. 3.1 (nytt stereosenter →
  racemat); [Alkoholer, aldehyder og ketoner](/kjemi2/kjemi2-8-2). `collapsible`
  **Reaksjons- og signalliste:** karbonyl-polaritet, Grignard-stegene, tørr-eter/opparbeiding.
- **Faktakontrakt (flashcard-kilde):** **karbonyl** C=O (C er δ+, elektrofilt; O er δ−);
  **Grignard-reagens** RMgX (nukleofilt/basisk C, lages i **tørr eter** — reagerer voldsomt
  med vann/protoner); produkt fra formaldehyd → 1° alkohol, fra aldehyd → 2°, fra keton → 3°,
  fra ester → 3° (to R); **sur opparbeiding** protonerer alkoksidet til alkohol; **racemisk
  produkt** når et nytt stereosenter dannes ved angrep på et plant karbonyl (angrep like
  sannsynlig fra begge sider → 50:50 → optisk inaktivt).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** **Pil 1** R⁻ (fra RMgX) → karbonyl-C;
  **Pil 2** C=O-π → O (alkoksid); opparbeiding: **Pil** ensomt par O → H⁺ (alkohol).
- **Konstruksjons-/tegneprosedyre:** (1) identifiser Grignard-C (nukleofil) og karbonyl-C
  (elektrofil); (2) tegn addisjon (piler); (3) opparbeid surt; (4) vurder om nytt stereosenter
  → racemat.
- **Typiske feil:** **F10** (glemme racemisk produkt); bruke Grignard i protisk løsemiddel;
  feil alkoholklasse (aldehyd vs. keton vs. ester); F2.
- **Modellsvar:** «Fremstill 2-fenylbutan-2-ol fra et Grignard-reagens + et keton, tegn
  mekanismen, og avgjør om produktet er optisk aktivt» (racemat-argument).
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 8.2: Ester- og acetaldanning/hydrolyse — mekanisme med krumme piler
**id:** `kjm1110-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `kjm1110-8-1`

- **Kapitteltype:** mekanismekapittel (perfekt).
- **Description:** Syrekatalysert esterdanning/-hydrolyse (Fischer, tetraedrisk intermediat),
  basisk esterhydrolyse (forsåpning), og acetaldanning fra aldehyd + alkohol — de mest
  resirkulerte krum-pil-mekanismene, med regenerert katalysator.
- **Eksamensbelegg:** Sjanger D (ester/acetal 11/14, 79 %); «tegn full mekanisme, forklar hvert
  trinn». Sensorkrav 5 (piler + katalysator gjendannes). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 8.1 (karbonyl-addisjon), kap. 0.2 (piler);
  [Karboksylsyrer og estere](/kjemi2/kjemi2-8-3). `collapsible` **Reaksjons- og
  signalliste:** ester-/acetalmekanismenes steg, tetraedrisk intermediat, sur vs. basisk vei.
- **Faktakontrakt (flashcard-kilde):** **syrekatalysert esterdanning** (Fischer): protonering
  av karbonyl → nukleofilt angrep av alkohol → tetraedrisk intermediat →
  protonoverføring/tap av vann → deprotonering → ester + regenerert H⁺ (**likevekt**, drives
  med overskudd/vannfjerning); **basisk hydrolyse (forsåpning)**: OH⁻ angriper → tetraedrisk
  intermediat → utstøt alkoksid → karboksylat (**irreversibel**); **acetaldanning**: aldehyd +
  2 alkohol (syrekat.) → halvacetal → acetal + vann; alt via **tetraedrisk intermediat** ved
  karbonyl.
- **Reaksjons-/mekanismekontrakt (tekstnotasjon — full sekvens):** for Fischer-esterdanning
  skriv alle piler nummerert, med hvert intermediat og **eksplisitt regenerering av H⁺**;
  marker det tetraedriske intermediatet. Vis basisk hydrolyse som separat sekvens (OH⁻ som
  nukleofil, ingen katalysator å gjendanne, irreversibel pga. karboksylat-dannelse).
- **Konstruksjons-/tegneprosedyre:** (1) protoner karbonyl (sur vei) / la OH⁻ angripe (basisk);
  (2) nukleofilt angrep → tetraedrisk intermediat; (3) protonoverføringer; (4) tap av utgående
  gruppe (vann/alkohol); (5) deprotoner / regenerer katalysator.
- **Typiske feil:** **F2** (pileretning); glemme det tetraedriske intermediatet; ikke
  gjendanne H⁺ (sensorkrav 5); blande sur (reversibel) og basisk (irreversibel) vei.
- **Modellsvar:** «Tegn full syrekatalysert mekanisme for eddiksyre + etanol → etylacetat,
  med alle intermediater og regenerert H⁺».
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 8.3: Utbytteberegning — den ene regnesjangeren
**id:** `kjm1110-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-8-1`

- **Kapitteltype:** regnekapittel/drill (DNA B).
- **Description:** Settets eneste rene regnedel: begrensende reaktant → mol → **% utbytte av
  teoretisk**, med molmasser fra periodesystemet og ~3 signifikante siffer — ofte innbakt i en
  Grignard-/synteseoppgave.
- **Eksamensbelegg:** Sjanger J (utbytte 8/14, 57 %); «gratis poeng» for den som kan mol-regning,
  men krever riktig begrensende reaktant og molmasse. Sensorkrav 7. Typisk feil F8. Prioritet:
  perfekt (den faste regnepotten).
- **Forkunnskaper/kryssbok:** [Mol og molmasse](/kjemi1/kjemi1-5-1),
  [Støkiometriske beregninger](/kjemi1/kjemi1-5-3),
  [Syntese og utbytte](/kjemi2/kjemi2-8-6). `collapsible` **Symbol- og formelliste:**
  $n=m/M$, begrensende reaktant, $\%\text{utbytte} = 100\%\cdot n_\text{produkt}/n_\text{teoretisk}$
  (molmasser fra periodesystemet — gis i vedlegget).
- **Løsningsoppskrift:** (1) balanser reaksjonen; (2) regn mol av hver reaktant ($n=m/M$);
  (3) finn begrensende reaktant (minst mol delt på støkiometrisk koeffisient); (4) regn
  teoretisk mol/masse produkt; (5) $\%\text{utbytte}$ fra faktisk/teoretisk; (6) svar med
  enhet og ~3 s.s.
- **Gjennomregnet case (DATA-boks med molmasser):** en Grignard- eller esterdanning der to
  reaktanter er oppgitt i gram → begrensende reaktant → teoretisk → % utbytte (f.eks. svar
  «47,1 %»), med sensor-margnotater på hvert steg (enhet, siffer, riktig komponent).
- **Typiske feil:** **F8** (feil begrensende reaktant / feil komponent / molmasse-slurv);
  for få signifikante siffer eller manglende enhet (sensorkrav 7).
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A karbonyl-addisjon + Grignard (racemat) · 8.B
ester-/acetalmekanisme (sur + basisk, regenerert katalysator) · 8.C utbytteberegning (DATA-boks,
% av teoretisk) · 8.D samlet karbonyl-/syntese-prøve på eksamensnivå med innbakt utbytte).

### Del 9 — Flertrinns-syntese *(prioritet: PERFEKT — 13/14)*

#### Kapittel 9.1: Reaksjonsrepertoaret — verktøykassen
**id:** `kjm1110-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `kjm1110-8-2`

- **Kapitteltype:** konstruksjonskapittel (perfekt — flashcard-tungt reaksjonsregister).
- **Description:** Alle pensumreaksjonene samlet som en verktøykasse (reagens → transformasjon
  → produkt), fordi syntese premieres på å kjenne repertoaret — bokas «reaksjonsbank».
- **Eksamensbelegg:** Sjanger C (13/14); man må ha reaksjonene «i hodet». Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** Del 6–8 (EAS, addisjon/eliminasjon/substitusjon, karbonyl);
  [Organiske reaksjonstyper](/kjemi2/kjemi2-8-5). `collapsible` **Reaksjons- og
  signalliste:** hele reaksjonsbanken (fram- og bakside: transformasjon ↔ reagens).
- **Faktakontrakt (flashcard-kilde — stor):** for hver: reagens + betingelser + produkt +
  funksjonell-gruppe-endring: **halogenering** (alken + HX/X₂; radikal på alkan nevnes),
  **hydratisering/dehydrering** (alken ↔ alkohol), **oksidasjon** (1° alkohol → aldehyd →
  syre; 2° alkohol → keton; reagenser generisk `(verifiser reagensnavn)`), **reduksjon**
  (karbonyl → alkohol), **Grignard** (C–C-bindingsdanning → alkohol), **esterdanning/hydrolyse**,
  **EAS** (nitrering, halogenering, Friedel–Crafts alkyl/acyl, sulfonering), **eliminasjon**
  (alkohol/halogenid → alken), **substitusjon** (SN1/SN2), **ozonolyse** (alken → karbonyler).
- **Konstruksjonskontrakt:** for en gitt ønsket funksjonell-gruppe-endring, oppgi reagenset(ene)
  som utfører den; og motsatt (reagens → forutsi produkt).
- **Typiske feil:** feil oksidasjonsnivå (aldehyd vs. syre); bruke en reaksjon utenfor dens
  substrat; glemme betingelser (tørr eter for Grignard, sur/basisk for hydrolyse).
- **Modellsvar:** «List reagensene som omdanner (a) 1-propanol → propansyre, (b) benzen →
  nitrobenzen, (c) et alken → vicinalt dibromid».
- **Kvote:** 16 quiz / 34 flashcards.

#### Kapittel 9.2: Retrosyntese og synteseplanlegging
**id:** `kjm1110-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-9-1`

- **Kapitteltype:** konstruksjonskapittel (perfekt).
- **Description:** Å planlegge flertrinns-syntese baklengs fra målmolekylet (retrosyntese):
  identifiser nøkkelbindinger, bryt til enklere byggeklosser, og oversett til foroverreaksjoner
  med mellomprodukter.
- **Eksamensbelegg:** Sjanger C (13/14); «angi reagenser og strukturer for mellomprodukter».
  Delvis uttelling per korrekt trinn (sensorkrav 8). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 9.1 (repertoaret), Del 6–8.
  [Syntese og utbytte](/kjemi2/kjemi2-8-6). `collapsible` **Reaksjons- og signalliste:**
  retrosyntese-symbolikk (⇒), disконnektering, byggekloss-tenkning.
- **Faktakontrakt (flashcard-kilde):** **retrosyntese** (analyse baklengs, ⇒ = «lages fra»);
  **disconnection** (bryt en C–C/C–X-binding til synton/byggekloss); C–C-bindingsdannende
  reaksjoner (Grignard, Friedel–Crafts, EAS) er nøkkelen ved forlengelse; funksjonell-
  gruppe-interkonvertering (FGI) mellom trinnene; velg **rekkefølge** (f.eks. dirigering i
  EAS bestemmer i hvilken rekkefølge substituenter settes på).
- **Konstruksjons-/tegneprosedyre:** (1) analyser målmolekylet (funksjonelle grupper, C-skjelett);
  (2) identifiser en nøkkelbinding å bryte; (3) gå baklengs til enklere forløpere; (4) gjenta;
  (5) snu til foroversyntese med reagens + mellomprodukt for hvert trinn.
- **Typiske feil:** feil rekkefølge (EAS-dirigering ignorert, F5); hoppe over et mellomprodukt;
  velge en reaksjon som ikke gir riktig regio-/stereokjemi.
- **Modellsvar:** «Planlegg en syntese av et disubstituert benzenderivat der dirigeringen
  krever riktig rekkefølge, og oppgi reagens + mellomprodukt for hvert trinn».
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 9.3: Synteseoppgave-drill — reagenser og mellomprodukter
**id:** `kjm1110-9-3` · **number:** 9.3 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-9-2`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** 8–15 flertrinns-synteseoppgaver på eksamensnivå: «angi reagenser og
  strukturer for mellomprodukter; mekanisme trengs ikke», hver med full trinnvis fasit.
- **Eksamensbelegg:** Sjanger C (13/14). Delvis uttelling per riktig trinn. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 9.1–9.2, Del 6–8. `collapsible` **Reaksjons- og
  signalliste:** repertoaret + retrosynteseoppskriften i kortform.
- **Løsningsoppskrift:** retrosyntese-oppskriften fra 9.2 anvendt; sjekkliste for hvert trinns
  reagens + mellomprodukt (SMILES + navn).
- **Gjennomtegnet case:** varierte mål (aromatiske, alkohol via Grignard, ester, alken via
  eliminasjon), hver med reagens + mellomprodukt per trinn og sensor-margnotater om delpoeng
  og alternative gyldige ruter (sensorkrav 8).
- **Typiske feil:** manglende mellomprodukt; feil rekkefølge (F5); teknisk feil trinn uten
  pensumdekning.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A reaksjonsrepertoar (reagens ↔ produkt) · 9.B retrosyntese/
planlegging · 9.C flertrinns-synteseoppgaver (reagens + mellomprodukt) · 9.D samlet
synteseprøve på eksamensnivå med dirigeringsrekkefølge).

### Del 10 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 10.1: Sjangerspill — løsningsoppskrifter for A–K
**id:** `kjm1110-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** `kjm1110-9-3`

- **Kapitteltype:** sjangerdrill/konsolidering (DNA B-lignende).
- **Description:** Alle elleve oppgavesjangrene (A–K) med sine løsningsoppskrifter samlet på
  ett sted — studentens hurtigreferanse rett før eksamen.
- **Eksamensbelegg:** Meta (alle sjangre). Sensorkravene 1–8 gjennomgående. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Reaksjons- og signalliste:**
  sjangeroppskriftene + begge spektraltabellene + reaksjonsbanken i kortform.
- **Innhold:** `text` **Sjangerguiden** — for hver sjanger A–K: kjennetegn, løsningsoppskriften
  (fra respektivt kapittel), sensorpremie og vanligste feil (feilkode). `definition`/`collapsible`
  **Hurtigreferanse** (flashcard-kilde): oppskrift-kortene (opg 1-rutinen; R/S-CIP-stegene;
  IUPAC-algoritmen; Hückel-sjekken; pilegrammatikken; utbytteoppskriften). `example` full
  gjennomgang av én oppgave per hovedsjanger. `exercise` = «identifiser sjanger + skisser
  angrepsplan» for blandede oppgavestammer.
- **Typiske feil:** hele F1–F10-katalogen med kobling til forebyggende kapittel.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 10.2: Øvingseksamen 1 (komplett 4-timers sett)
**id:** `kjm1110-10-2` · **number:** 10.2 · **estimatedMinutes:** 90 · **prerequisites:** `kjm1110-10-1`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet sett i 2010–2018-malen: 8–12 likt vektede
  konstruksjonsoppgaver, kun molekylbyggesett + kalkulator, med spektraltabell-oppslag og
  periodesystem tilgjengelig.
- **Innhold:** temafordeling som en «typisk» eksamen: **opg 1 strukturoppklaring** (formel/m/z
  + IR + NMR), **IUPAC ×5** (med minst én stereodeskriptor), **aromatisitetsvurdering**
  (Hückel + begrunnelse), **flertrinns-syntese** (reagenser + mellomprodukter), **én
  stereokjemi-oppgave** (tegn alle isomerer + optisk aktivitet), **én mekanisme med krumme
  piler** (ester/acetal eller karbokation-omleiring), og **én Grignard/utbytte** (% av
  teoretisk). `collapsible` full løsning per oppgave (modellsvar slik sensor vil se det:
  strukturer i SMILES + navn, nummererte piler, eksplisitte stabilitetsbegrunnelser,
  databegrunnelse, prosentsvar med enhet/siffer); `tip` **Sensorblikket** (hvor delpoengene
  faller, hva som skiller bestått fra topp). **Nedlagt-merknad:** malen bygger på 2010–2018;
  verifiser mot KJM1111-sett.
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 10.3: Øvingseksamen 2 (komplett 4-timers sett)
**id:** `kjm1110-10-3` · **number:** 10.3 · **estimatedMinutes:** 90 · **prerequisites:** `kjm1110-10-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre komplette sett med en annen, men fortsatt typisk, profil — speiler at
  konteeksamenene er strukturelt identiske med ordinæreksamen (samme sjangre, varierte
  molekyler).
- **Innhold:** som 10.2, men med tyngre vekt på **konformasjon↔E2** (mentyl/neomentyl-type),
  **EAS-dirigering** (to-substituent-samspill), og en strukturoppklaring **med M+2-halogen**;
  IUPAC med E/Z; syre-base-rangering med resonansbegrunnelse. Full løsning + Sensorblikket.
  Nedlagt-merknad.
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 10.4: Øvingseksamen 3 (komplett 4-timers sett)
**id:** `kjm1110-10-4` · **number:** 10.4 · **estimatedMinutes:** 90 · **prerequisites:** `kjm1110-10-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Tredje komplette sett, vektet mot de tyngste konseptuelle temaene
  (stereokjemi + mekanismer) og med en ozonolyse-bakoverslutning og et energidiagram — for
  bredest mulig sjangerdekning.
- **Innhold:** som 10.2/10.3, med **stereokjemi som tyngste oppgave** (isomer-telling + meso +
  optisk aktivitet), en **karbokation-omleiring med energidiagram**, en **ozonolyse-struktur-
  bakslutning**, og en flertrinns-syntese med dirigeringsrekkefølge. Full løsning +
  Sensorblikket med A/B/C-terskelbeskrivelse. Nedlagt-merknad + eksplisitt oppfordring til å
  regne konteeksamen-varianter (dobler øvingsmengden).
- **Kvote:** 6 quiz / 2 flashcards.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 22 | 26 | 0 (dekkes av øvingseksamenene) |
| 1 | 3 | 50 | 72 | 4 |
| 2 | 3 | 52 | 70 | 4 |
| 3 | 4 | 68 | 88 | 4 |
| 4 | 2 | 32 | 46 | 4 |
| 5 | 5 | 82 | 110 | 4 |
| 6 | 3 | 50 | 72 | 4 |
| 7 | 5 | 74 | 102 | 4 |
| 8 | 3 | 50 | 64 | 4 |
| 9 | 3 | 48 | 68 | 4 |
| 10 | 4 | 36 | 26 | 0 (= 3 øvingseksamener) |
| **Sum** | **37** | **564 ✓ (≥500)** | **744 ✓ (mål 650–800)** | **36 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12 = **22** / 10+16 = **26**
- Del 1: 16+16+18 = **50** / 22+20+30 = **72**
- Del 2: 18+16+18 = **52** / 26+24+20 = **70**
- Del 3: 18+18+16+16 = **68** / 26+24+22+16 = **88**
- Del 4: 16+16 = **32** / 24+22 = **46**
- Del 5: 16+18+14+18+16 = **82** / 28+30+18+20+14 = **110**
- Del 6: 18+16+16 = **50** / 26+22+24 = **72**
- Del 7: 16+16+16+14+12 = **74** / 22+24+22+20+14 = **102**
- Del 8: 16+18+16 = **50** / 24+26+14 = **64**
- Del 9: 16+16+16 = **48** / 34+18+16 = **68**
- Del 10: 18+6+6+6 = **36** / 20+2+2+2 = **26**
- **Totalt: 564 quiz / 744 flashcards.**

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride. Fordelingen
speiler frekvens og natur: de fem tunge delene (Del 3 stereokjemi, Del 5 spektroskopi/
strukturoppklaring, Del 7 mekanismer, Del 2 IUPAC, Del 6 aromatisitet) bærer 326 av 564 quiz
og 442 av 744 flashcards.

**Flashcard-profilen er bevisst høy (744, godt over gulvet 500, i øvre halvdel av 650–800-
målet)** fordi faget er reaksjons-, mekanisme- og signalrikt og eksamen er uten oppslagsverk
utover NMR-/IR-tabellen: hvert delkapittels **Reaksjons- og signalliste** er en naturlig
flashcard-kilde. Korttyper: **reaksjon↔reagens↔produkt** (alken + $\text{Br}_2$ → trans-vicinalt
dibromid; 1° alkohol → aldehyd → syre), **funksjonell gruppe↔IR↔NMR** (karbonyl → C=O
~1715 cm⁻¹; aldehyd-H → δ 9,7–10,0; bred O–H → alkohol/syre), **mekanismesteg** (SN2 →
ryggangrep/inversjon; E2 → antiperiplanar; Fischer → tetraedrisk intermediat + regenerert H⁺),
**stereobegrep** (meso = internt speilplan, akiral; racemat = optisk inaktivt; R/S-CIP),
**aromatisitet** (Hückel 4n+2; pyrrol-N opptatt/ikke basisk), **dirigering** (aktiverende o,p
vs. deaktiverende meta; halogen deaktiverende men o,p), **navnsettingsregler**, og
**prediksjonsregler** (Zaitsev/Markovnikov). **Quiz-profilen** driller nabobegrep-distraktorer
(SN1/SN2, E1/E2, enantiomer/diastereomer, aromatisk/antiaromatisk, aktiverende/deaktiverende
vs. o,p/meta, Markovnikov/anti, basisk/opptatt elektronpar, overgangstilstand/intermediat) +
spektraltolkningstrinn (DoU, n+1, integral-forhold) + utbytte-mekanikk.

### Prøver (4 per temadel, 36 totalt)

Fire prøver per temadel (Del 1–9). Hver prøve speiler eksamensmalen i miniatyr: en blanding av
konstruksjonsoppgaver (tegn struktur/mekanisme, navngi, forklar — med tegnet fasit i
tekstnotasjon), regnesjangeren (utbytte) der den hører hjemme (DATA-boks), og
spektral-/prediksjonsoppgaver. Omfang 25–45 min. Alle oppgaver NYSKREVNE. Prøvekapittel-id
`kjm1110-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 10 har ingen
egen prøve (Del 10s tre øvingseksamener dekker helheten). Prøvetitlene er spesifisert per del
under §3 (Prøve-kvote-linjene).

### Komplette øvingseksamener (3 — kapitlene 10.2–10.4)

Tre nyskrevne 4-timers sett i 2010–2018-malen (kun molekylbyggesett + kalkulator, spektraltabell
+ periodesystem som fast oppslag, 8–12 likt vektede konstruksjonsoppgaver), med ulik men typisk
profil, full modellsvar-fasit (strukturer i SMILES + navn, nummererte krumme piler,
stabilitetsbegrunnelser, databegrunnelse, prosentsvar) og Sensorblikket per oppgave.
**Nedlagt-merknad i alle tre:** malen bygger på KJM1110-arkivet til 2018; byggefasen bør skaffe
og verifisere mot KJM1111-sett. Til sammen dekker de tre settene sjangrene A–K minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t skriftlig, **kun molekylbyggesett + kalkulator**,
   8–12 likt vektede konstruksjonsoppgaver, ALT tegnes), vedleggsapparatet (¹H NMR-tabell +
   IR-tabell + periodesystem) og nedlagt-/etterfølger-forbeholdet (KJM1110 nedlagt, KJM1111
   viderefører; verifiser mot KJM1111-sett) (fra kap. 0.1).
2. **Håndverket** — tegne-/tekstnotasjonen (SMILES + struktur + nummererte krumme piler) og
   begrunnelsesspråket (stabilitetsresonnement: resonansstabilisert / mest substituert / minst
   sterisk hindret) (fra kap. 0.2). Dette gir poeng på hver oppgave.
3. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: *perfekt*
   (strukturoppklaring, IUPAC, aromatisitet, flertrinns-syntese, stereokjemi), *kunne*
   (mekanismer SN/E, karbokation-omleiring, ester/acetal, syre-base/resonans, EAS,
   Grignard/utbytte, konformasjon↔E2), *kjenne* (addisjon/ozonolyse, energidiagram, MS som
   selvstendig element).
4. **Sjangerguiden** — oppgavetypene A–K med løsningsoppskriftene i kortform (opg 1-rutinen;
   IUPAC-algoritmen; R/S-CIP; Hückel-sjekken; pilegrammatikken; retrosyntese-oppskriften;
   utbytteoppskriften) (fra kap. 10.1).
5. **Spektral- og reaksjonsarket** — begge vedleggstabellene (NMR-skift, IR-bånd) + hele
   reaksjonsbanken (fra 5.1/5.2/9.1), siden dette må sitte og bare tabellene deles ut.
6. **Sensorreglene** — de åtte sensorkravene (§2) + karakterskille-listen (bestått: riktige
   strukturer i grove trekk, hovedmekanismene; midtsjikt: korrekte krumme piler + fullstendige
   stereo-isomerlister + begrunnelser; topp: entydige stereonavn, katalysator gjendannet,
   databegrunnelse mot hver observasjon, presise stabilitetsargumenter, korrekt utbytte).
7. **Feilkatalogen** — de ti typiske feilene (F1–F10) samlet, hver med henvisning til kapitlet
   som forebygger den (F1 meso/isomer-telling → 3.2/3.4; F2 pileretning → 0.2/7.x/8.2; F3 DoU
   → 1.2/5.4; F4 begrunnelse → 0.2/4.2; F5 EAS-dirigering → 6.3; F6 antiperiplanar → 3.3/7.3;
   F7 opptatt elektronpar → 6.2/4.2; F8 utbytte → 8.3; F9 stereodeskriptor → 2.3/3.4; F10
   Grignard-racemat → 8.1).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 → 1 → 2 →
   3 (stereokjemi tidlig, den tunge feilkilden) → 4 → 5 (strukturoppklaring drilles og
   repeteres) → 6 → 7 → 8 → 9 (syntese binder alt) → 10; sjangerspillet (10.1) spres utover
   løpet; øvingseksamenene (+ konteeksamen-varianter) de tre siste ukene under tidspress
   (240 min, med spektraltabell + periodesystem ved siden av).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `kjm1110` (mønster `COURSE_BI_OKONOMI`,
   skrives til `textbook-courses-hoyskole.ts`): id `kjm1110`, title «Organisk kjemi I
   (KJM1110 / KJM1111) — eksamensrettet (UiO)», `level: 'Høyskole'`, alle 37 kapitler med
   id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites fra dette
   skjelettet, `sectionNames` fra §2-tabellen (obligatorisk — ellers viser bokforsiden
   «Seksjon N»).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–K, tekstnotasjonen (SMILES + krumme
   piler), begrunnelsesspråket, frekvenstallene, vedleggsapparatet og nedlagt-forbeholdet som
   resten av boka refererer til. **Bygg 0.2 grundig — hele boka bruker notasjonen derfra.**
3. **Del 1 → Del 2 → Del 3** (avhengighetskjeden: struktur/DoU/funk.grupper → IUPAC →
   stereokjemi). Del 3 fullfører navnsettings-avhengigheten (3.4 «entydige stereonavn»).
4. **Del 4 → Del 5** (resonans/syre-base før spektroskopi; 4.1 resonans forutsetter 1.3, og er
   forutsetning for 6.1) → **Del 6** (aromatisitet bygger på 4.1; EAS 6.3 bruker piler fra 0.2)
   → **Del 7 → Del 8** (mekanismer før karbonyl; 8.2 ester/acetal bygger på 8.1 og pile-
   grammatikken i 7.x) → **Del 9** (syntese bruker HELE reaksjonsrepertoaret fra Del 6–8).
5. **Del 10 til slutt** — sjangerspill + tre øvingseksamener gjenbruker HELE boka; bygges av én
   agent som leser hele skjelettet.
6. **Prøver** (`kjm1110-<del>-prove`, chapterNumber `<del>.P`) etter at delens kapitler finnes;
   prøvetitlene er gitt per del i §3.
7. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-staging
   registreres etter hvert som kapitlene ferdigstilles — endelig blokk-/staging-skjema fastsettes
   i BYGGEKONTRAKT.md (fase 3). Kvotene fra kvotesammendraget (§4) er fasit.

Per konstruksjons-/mekanismekapittel gjelder **kapittel-DNA A** (§2): tip Eksamensvinkel → text
Forkunnskaper + collapsible Reaksjons- og signalliste → text Oversikt → definition Faktakontrakt
(flashcard-kilden — toppnivå med title!) → theorem/text Reaksjons-/mekanismekontrakt (eller
konstruksjonskontrakt) → text Konstruksjons-/tegneprosedyre → warning Typiske feil → example
×2–4 → exercise ×6–12 → collapsible Repetisjon. Regnekapitlet (8.3) og drillkapitlene
(2.3/3.4/5.5/9.3/10.1) følger **kapittel-DNA B**. Eksamensvinkel- og Typiske feil-blokkene
fylles med belegget og feilkodene fra dette skjelettet — forfatteren skal IKKE finne på
frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/kjm1110-*.json` parser med `json.load`
      (generer via `json.dump` — LaTeX-`\\`-fellen). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 37 kapittel-id-er har eksisterende content-fil; `number` er
      del-basert («7.3», ALDRI lineær); prosareferanser bruker samme form («kap. 7.3»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-id-er
      registrert slik at toggle rendrer (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **Tekstnotasjonen konsekvent (kritisk plattformtilpasning):** hvert mekanismekapittel har
      krumme piler i det avtalte nummererte formatet («[opphav] → [mål]»), med intermediater og
      **regenerert katalysator** der relevant (8.2, 7.1); hver struktur oppgis som **SMILES +
      IUPAC-navn + kondensert formel/ordbeskrivelse**; ingen forsøk på grafiske tegninger.
- [ ] **Kjemisk presisjon / `(verifiser)`-markeringer:** grep `-i verifiser` — alle markerte
      detaljer (eksakte pKa-holdepunkter, M+2-isotopratio for Cl, ozonolyse-opparbeiding
      (reduktiv/oksidativ), Hofmann-unntakets pensumomfang, beholdte trivialnavn i IUPAC,
      oksidasjonsreagensnavn) fagfellesjekkes i fase 6 mot standard organisk-kjemi-pensum
      (f.eks. Clayden / McMurry / Vollhardt). **INGEN oppdiktede spektralverdier utover
      vedleggstabellenes intervaller** (§6 i analysen); referanseverdier oppgis som «fra
      vedleggstabellen».
- [ ] **Mekanismer korrekte:** hver krum pil starter ved elektronpar/binding og peker mot
      elektrofilt senter (F2-kontroll); SN2 = inversjon, SN1 = racemisering; E2 = antiperiplanar;
      Fischer-ester og acetal via tetraedrisk intermediat med gjendannet H⁺; karbokation-omleiring
      kun når stabiliteten øker. Skrevet i LaTeX ($\text{}$ for arter/formler), ingen unicode-piler.
- [ ] **Stereokjemi-fullstendighet:** «tegn alle isomerer»-oppgaver har komplett $2^n$-liste med
      meso identifisert (F1-kontroll); R/S og E/Z korrekt tildelt (CIP); Grignard-produkter med
      nytt stereosenter merket **racemisk/optisk inaktivt** (F10).
- [ ] **Spektral-tabellbruk:** IR-/NMR-tabellen gjengitt i 5.1/5.2 (og Del 0) og brukt aktivt;
      strukturoppklaringsoppgaver begrunner **mot hver observasjon** (DoU først — F3); n+1 og
      integral-forhold korrekt.
- [ ] **IUPAC-entydighet:** navnsettingsoppgaver har lokant på suffiks, alfabetiserte
      substituenter, og **stereodeskriptorer der relevant** (F9); stereo-navn fullført i 3.4.
- [ ] **Aromatisitet/basisitet:** Hückel 4n+2 anvendt med π-telling og planaritetssjekk; pyrrol-N/
      amid-N behandlet som **ikke basisk** (opptatt elektronpar, F7); EAS-dirigering korrekt,
      inkl. halogen deaktiverende men o,p (F5).
- [ ] **Utbytte-kontrakten:** 8.3 og enhver utbytteoppgave bruker begrensende reaktant, molmasser
      fra periodesystemet (DATA-boks), svar i **% av teoretisk** med **~3 signifikante siffer** og
      enheter underveis (F8, sensorkrav 7).
- [ ] **Kapittel-DNA:** hvert konstruksjons-/mekanismekapittel har Eksamensvinkel-`tip` (frekvens/
      vekt fra dette skjelettet), Forkunnskaper + `collapsible` Reaksjons- og signalliste,
      Faktakontrakt-`definition` (flashcard-kilde, toppnivå med title), Reaksjons-/mekanisme- eller
      konstruksjonskontrakt, Konstruksjons-/tegneprosedyre, Typiske feil-`warning`, ≥2 Modellsvar-
      `example`, 6–12 `exercise` med `solution` (tegnet i tekstnotasjon) + `hints`, Repetisjons-
      `collapsible`; regnekapitlet/drillkapitlene har løsningsoppskrift + gjennomtegnet case +
      8–15 varianter.
- [ ] **Kvotesum:** quiz ≥564 og flashcards ≥744 fordelt per kapittel som i §4 (hardt minimum
      ≥500/≥500, flashcards-mål 650–800); 4 prøver per del for Del 1–9 (36) + 3 øvingseksamener;
      fasit-svaralternativer rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging,
      runtime stokker).
- [ ] **Leserkrav:** Forkunnskaper-blokk med kryssbok-lenker (kun til eksisterende kapitler —
      kjemi1-/kjemi2-lenkene i §3 er verifisert 7. juli 2026) + `collapsible` Reaksjons- og
      signalliste først i hvert kapittel; «bør kjenne til»-stoff (MS-fragmentering, Hofmann,
      ¹³C-NMR) plassert ETTER kjernestoffet og merket; hver oppgave sjangermerket (A–K).
- [ ] **Nedlagt-/etterfølger-forbeholdet synlig:** Del 0 (kap. 0.1) og alle tre øvingseksamener
      sier eksplisitt at KJM1110 er nedlagt (siste eksamen v2019), erstattet av KJM1111 med nesten
      identisk pensum, at kalibreringen bygger på 2010–2018-arkivet, og at byggefasen bør skaffe
      og verifisere mot KJM1111-sett.
- [ ] **Opphavsrett:** alle oppgaver, strukturcase, spektraldata, øvingseksamener og fasitmomenter
      er NYSKREVNE — ingen formuleringer fra UiO-oppgavesett eller løsningsforslag. Reaksjoner,
      mekanismer, IUPAC-regler, Hückel og standard fagbegreper er fritt fagstoff.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld ferdig uten dette.
