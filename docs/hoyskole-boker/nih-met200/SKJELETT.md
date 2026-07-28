# Bokskjelett: MET200 Forskningsmetode (Norges idrettshøgskole, NIH) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-filer (her: **DNA-drøfting** for Del 0–1 + design-drøfting, **DNA-regnefag**
> for statistikk-tolkningen i Del 3). Unntak: øvingseksamen-/prøve-/
> modellbesvarelseskapitler følger sin egen arketype (komplett sett først,
> løsninger i collapsibles). Kvotene og innholdskontraktene i dette skjelettet er
> uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIH-arkivet 2023/24–2025/26: **6 komplette sett med full
> sensorveiledning** — tre studieår, hver med ordinær + utsatt eksamen). Alle
> oppgaver, talleksempler og case i boka skal være NYSKREVNE (se §6): endre tall,
> kontekst og formuleringer. Fagbegreper, statistiske metoder, evidenspyramiden og
> kausalitetskriterier er ikke opphavsrettslig beskyttet og brukes fritt.
>
> **Faglig presisjon er kritisk.** Dette er et **puggbart, definisjonstungt fag** der
> sensorveiledningene er svært eksplisitte fasiter (§4 i analysen). Sensor belønner
> **presise, pensumnære definisjoner** og trekker for forvekslede kjernebegreper.
> Statistiske påstander (fortegn, tolkning av p-verdi/R², retning på koeffisienter)
> forfatteren er usikker på, merkes `(verifiser)`.
>
> **Kildeforbehold (settes i Del 0, gjentas i øvingseksamenene):** Arkivet dekker tre
> hele studieår (2023/24–2025/26) med både ordinær og utsatt eksamen og **full
> sensorveiledning for alle seks sett** — et uvanlig komplett, men kort grunnlag.
> Emneansvarlig (Jostein Steene-Johannessen `(verifiser)`) og pensum har vært uendret
> gjennom hele perioden, så temaprofilen er stabil. Ingen sett eldre enn 2023/24
> finnes. Alle frekvenser er merket «per 2023/24–2025/26-arkivet».
>
> **Eksamensform-forbehold (ufravikelig — verifisert mot NIHs emneside 2026-07-11):**
> MET200 (10 studiepoeng) er **aktivt** og undervises hver høst, som del av flere
> gjeldende bachelorprogrammer ved NIH (Sport Management 2024–2027, Trenerrollen og
> idrettspsykologi 2026–2029, Trening helse og prestasjon 2025–2028, Friluftslivsfag).
> **Merk et avvik mellom arkiv og gjeldende emneside:** de seks settene i arkivet er
> rene **4-timers skriftlige skoleeksamener** (WISEflow, kun kalkulator). NIHs
> gjeldende emneside (H2024) oppgir derimot en **todelt vurdering**: en gradert
> **gruppeoppgave (25 %)** + en gradert **skriftlig 4-timers skoleeksamen (75 %)**,
> med **kalkulator OG formelsamling utdelt** som hjelpemidler `(verifiser — ny
> formelsamling siden arkivsettene, som ikke hadde formelark)`. Boka kalibreres mot
> **den skriftlige skoleeksamenen** (75 % av karakteren og hele det puggbare
> kunnskapskravet analysen kartlegger); gruppeoppgaven omtales i Del 0 som eget
> vurderingselement, men endrer ikke fagets kunnskapskrav — bare innleveringsformen.
> **Byggefasen bør verifisere gjeldende hjelpemiddelregime og formelsamlingens
> innhold** før boka meldes helt ferdig.
>
> **Kryssreferanse (uten lenke — bygges parallelt):** **MET402 «Kvantitativ metode»**
> (NIH master) bygges av en annen agent samtidig. MET200 er det grunnleggende
> bachelor-metodefaget som MET402 utvider med ANOVA, multippel/multivariat regresjon
> og mer avansert design. Del 3s siste kapittel peker framover i prosa (uten
> markdown-lenke, siden MET402-boka ennå ikke finnes). Ikke gjenta MET402-stoff her.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-met200` |
| Tittel | **MET200 Forskningsmetode (NIH) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole (NIH). Visningsnavn i `institusjoner.ts`: «MET200 Forskningsmetode». |
| Arketype | **Hybrid: drøfting + regnefag** (`DNA-drofting.md` + `DNA-regnefag.md`). Primær forbilder: **econ2130** (statistikk-/inferensstruktur — regnefag-arketypen for Del 3) og **svmet1010** (kvalitativ metode + drøftingsmal for Del 1). Se §2 «Arketypetilpasning». |
| Antall kapitler | **21** (Del 0: 2 · Del 1 kvalitativ: 4 · Del 2 kvantitativ/design: 5 · Del 3 statistikk: 7 · Del 4 eksamenstrening: 3) |
| Estimert totaltid | **~955 min ≈ 16 timer** (per kapittel under) |
| Quiz totalt | **512** (krav ≥500) |
| Flashcards totalt | **574** (definisjonstungt forvekslingsfag → høy tetthet; krav ≥500) |

**Pitch (ett avsnitt):** MET200-eksamen er blant de mest forutsigbare i hele
høyskolearkivet. Den skriftlige delen er en 4-timers skoleeksamen med **kun
kalkulator (og nå formelsamling)** — ingen PC, ingen pensumbok. Settet har en
**urokkelig tredelt struktur** som speiles av bokas hoveddeler: **Del 1 Kvalitativ
metode (15 poeng)**, **Del 2 Kvantitativ metode / studiedesign (15 poeng)** og
**Del 3 Statistikk (20 poeng, tyngst vektet)**. Sju temaer treffer **100 % av
settene** og utgjør fagets harde kjerne: (1) kausalitet + kausalitetskriterier +
hvorfor RCT er gullstandard, (2) tolke en lineær regresjonstabell, (3) forutsetningene
for lineær regresjon, (4) validitet og reliabilitet, (5) studiedesign og
evidenspyramiden, (6) hypotesetest med p-verdi, (7) kvalitativt intervju (særlig
semistrukturert). Alt er kledd i **sportsvitenskapelig kontekst** (VO₂maks og alder,
korsbåndsrehabilitering, stillesittende tid hos eldre, MVPA hos barn). Statistikken er
**avlesnings- og tolkningsorientert, ikke regnetung**: kandidaten leser ferdige
regresjons- og t-testtabeller, tolker p-verdi mot α, setter inn i $Y = a + bX$ og
regner prosent — ingen håndutledning av testobservatorer. Boka er bygd baklengs fra
det sensor faktisk premierer: **presise, pensumnære definisjoner** (upresise
omskrivinger trekker), **riktig tolkning i kontekst** (enhet og retning kreves), og
**par-drilling av de mest forvekslede begrepene** (validitet↔reliabilitet, parret↔uparret
t-test, type I↔type II, populasjon↔utvalg, R²↔r).

**Kritisk plattformbetingelse — statistikktabeller i tekst:** Del 3 bygger tungt på at
kandidaten skal lese ferdige regnearkutskrifter (regresjon, t-test). Plattformen
gjengir tabeller som markdown-/tekst-tabeller i `text`- eller `example`-blokker. Hver
tabelloppgave skal (a) presentere tabellen i ren markdown, (b) oppgi variabelens enhet
eksplisitt i oppgaveteksten (jf. DNA-regnefag «Enhets- og konvensjonsvalg»), og (c) i
fasiten tolke koeffisienten **med enhet og retning** («VO₂maks synker med 0,42
ml/kg/min per leveår»), ikke abstrakt. All matematikk i LaTeX (`$...$`). Norsk bokmål.

**Kritisk hjelpemiddel-regel:** Den skriftlige eksamenen tillater **kun kalkulator**
(arkivsettene) — nå trolig **kalkulator + formelsamling** (gjeldende emneside,
`(verifiser)`). Kandidaten får **ikke** PC, pensumbok eller egne notater. Alle
definisjoner, kausalitetskriterier, forutsetningslister og tolkningsregler må sitte i
hodet. Boka bygger derfor **puggbare hoderutiner**, ikke oppslagskunnskap — høy
flashcard-tetthet på definisjoner og forvekslingspar er berettiget.

**Bevisst nedprioritert (begrunnes i Del 0):** **Regnetunge** statistiske teknikker
(håndberegning av testobservator, konfidensintervall fra formel, ANOVA, multippel/
multivariat regresjon) — disse testes IKKE i MET200 (de hører til MET402). Boka trener
**tolkning av ferdige tall**, ikke utledning. Nisjetemaene (type I/II-feil,
seleksjonsskjevhet, metaanalyse-definisjon, residual/feilledd, observasjon som metode)
får korte definisjonsavsnitt («bør kjenne til»), ikke egne kapitler.

---

## 2. Makrostruktur

Rekkefølgen speiler eksamenens tredeling (Del 1 kval. → Del 2 kvant./design → Del 3
statistikk), men innad i hver del følger kapitlene faglig avhengighet. Frekvensen
styrer *omfanget* (kvote og drilldybde), ikke rekkefølgen: de sju 100 %-temaene og det
tyngst vektede statistikkfeltet får høyest kvote og egne drill-/tolkningskapitler;
lavfrekvent stoff får korte avsnitt.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og metodehåndverk | 2 | perfekt (meta) | Formen (tredelt skriftlig skoleeksamen 15/15/20 p, kun kalkulator/formelsamling, gruppeoppgave som eget element), sjangerkatalogen (A–I), begrepsvaksinen, temafrekvensene, sensorkravene og kildeforbeholdet må etableres FØR fagstoffet. |
| 1 | Kvalitativ metode | 4 | perfekt (Del 1 = 15 p; intervju 6/6) | Vitenskapsteori (deduktiv/induktiv, formål), intervjutyper (semistrukturert 6/6), utvalgsstrategier + observasjon + temaanalyse, kvalitativ kvalitet + design-drøfting (H2024-typen). Speiler eksamenens Del 1. |
| 2 | Kvantitativ metode og studiedesign | 5 | perfekt (Del 2 = 15 p; 3 temaer 6/6) | Studiedesign/evidenspyramiden (6/6), kausalitet + RCT (6/6, fagets mest stilte), validitet/reliabilitet (6/6), populasjon/utvalg/generaliserbarhet (5/6), forskningsetikk + forskningsprosess + metaanalyse. |
| 3 | Statistikk | 7 | perfekt (Del 3 = 20 p, TYNGST; 3 temaer 6/6) | Variabeltyper + deskriptiv, normalfordeling/KI, hypotesetest + p-verdi (6/6), t-test (6/6), korrelasjon, lineær regresjon (6/6 signatur — tolke tabell) + regresjonsforutsetninger (6/6) + regresjonsdrill. Flest kapitler og høyest kvote. |
| 4 | Eksamenstrening | 3 | perfekt (meta) | Sjangerspill + begrepsvaksine-bank (forvekslingspar), design-drøftingsverksted + kald bank, 2 komplette øvingseksamener (15/15/20 p) med sensorkommentert fasit. |

Rasjonale: Del 3 (statistikk) er tyngst vektet på eksamen (20 av 50 p) OG mest
forutsigbar → flest kapitler (7) og høyest kvote. De sju 100 %-temaene fordeler seg på
Del 1 (intervju), Del 2 (kausalitet/RCT, design, validitet, hypotesetest ligger dels
her dels i Del 3) og Del 3 (regresjon ×2, hypotesetest). Kvalitativ del er smal og
roterende (fem faste undertemaer) → fire kapitler holder. Nesten hele bredden testes
hvert sett — prioriteringen styrer dybde og drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og metodehåndverk |
| 1 | Kvalitativ metode |
| 2 | Kvantitativ metode og studiedesign |
| 3 | Statistikk |
| 4 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

Sjangerkodene skrives ALLTID ut i klarspråk ved første bruk (jf. DNA-drøfting
«sjargong»). De ni sjangrene som faktisk går igjen:

**A** Definisjons-/redegjørelsesspørsmål (DEF — presis pensumnær definisjon i én–to
setninger, ofte + konkret idrettsfaglig eksempel) · **B** Listespørsmål (LISTE — «nevn
og beskriv kort N typer/kriterier»; full pott krever ALLE punkter) · **C**
Studiedesign-plassering og -valg (DESIGN — koble forskningsspørsmål til riktig design i
evidenspyramiden) · **D** Kausalitet og RCT (KAUS — definer kausalitet + kriteriene +
hvorfor RCT er gullstandard + skisser RCT i riktig rekkefølge; fagets mest stilte, 6/6)
· **E** Kvalitativ metode — begreper og intervju (KVAL — skille intervjutyper, forklare
semistrukturert) · **F** Kvalitativ design-drøfting (DRØFT — gjør rede for og drøft et
komplett kvalitativt opplegg på et case; den største kvalitative oppgaven) · **G**
Statistisk testvalg + hypoteseoppsett (HYP — sette opp H₀/H₁, velge parret vs. uparret
t-test, nevne forutsetning) · **H** Tolke ferdig statistikkutskrift (TOLK — lese
t-test-/regresjonstabell, tolke i kontekst med enhet og retning) · **I** Deskriptiv
statistikk og variabeltyper (DESK — klassifisere variabler, velge riktig deskriptiv
statistikk, normalfordeling).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Alle etterspurte elementer med.** For listespørsmål (B) teller antall korrekte
   punkter direkte; for kausalitet/RCT (D) kreves *alle tre* kriteriene og RCT-momentene
   **i riktig rekkefølge**.
2. **Presise, pensumnære definisjoner.** Upresise omskrivinger («måler noe riktig» i
   stedet for «måler det man faktisk ønsker å måle») gir trekk. Treff lærebøkenes
   (Thrane; Leseth & Tellmann) begrepsbruk.
3. **Riktig tolkning i kontekst.** Regresjons-/t-testsvar må uttrykkes i variabelens
   faktiske enhet og retning, ikke bare abstrakt («b er negativ»).
4. **Begrunnelse, ikke bare konstatering** — særlig i design-drøftingen (F) og i
   «hvorfor RCT?»/«hvorfor er rekkefølgen viktig?»-spørsmålene.
5. **Refleksjon over usikkerhet** (A-markør): de beste svarene knytter statistisk
   signifikans til effektstørrelse og praktisk/klinisk relevans (eksplisitt i H2025 — en
   signifikant, men liten b bør vurderes i lys av effektstørrelse).
6. **Presisjon > mengde.** Korte, korrekte, avgrensede definisjoner belønnes mer enn
   lange, vage utlegninger. **Del 3 (statistikk) veier tyngst** (20/50 p) og er mest
   forutsigbar — å sikre statistikkpoengene er den mest effektive veien til god karakter.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** **Validitet ↔ reliabilitet forvekslet** (validitet = måler det man faktisk vil
måle; reliabilitet = stabile, reproduserbare målinger; reliabilitet er forutsetning for
validitet, ikke omvendt). **Vanligste forvekslingsfeil.** · **#2** **Kausalitet fra feil
design** (påstår årsak–virkning fra tverrsnitt; forklarer ikke hvorfor randomisering
løser konfunder-problemet). · **#3** **Ufullstendige kriterie-/momentlister** (nevner to
av tre kausalitetskriterier; glemmer et RCT-moment; hopper over et steg i
forskningsprosessen). · **#4** **Feil t-test** (parret = samme personer to ganger
forvekslet med uparret = to ulike grupper). · **#5** **P-verdi-feiltolkning** («p-verdien
er sannsynligheten for at H₀ er sann» — feil; p = sannsynligheten for data minst så
ekstreme *gitt* at H₀ er sann; p < α → forkast H₀). · **#6** **R²-feiltolkning** (R² =
andel av variasjonen i Y forklart av X, i prosent — ikke sammenhengens «riktighet» eller
korrelasjonens fortegn). · **#7** **Koeffisient uten enhet/retning** («b = −0,42» uten «…
synker med 0,42 ml/kg/min per år»). · **#8** **Type I ↔ type II ombyttet** (type I =
feilaktig forkaste sann H₀ = falsk positiv; type II = feilaktig beholde falsk H₀ = falsk
negativ). · **#9** **Feil deskriptiv statistikk til variabeltypen** (gjennomsnitt/SD på
skjevfordelte/kategoriske data i stedet for median/kvartiler eller antall/prosent). ·
**#10** **Glemmer regresjonsforutsetningene** (full pott krever lineær sammenheng *og* de
tre residualkravene: konstant varians, uavhengighet, normalfordeling). · **#11**
**Semistrukturert intervju forklart som fast spørreskjema** (mister fleksibel oppfølging
og dybde). · **#12** **Design-drøfting uten begrunnelse** (ren komponentliste) eller uten
forskningsetikk der caset krever det. · **#13** **Populasjon ↔ utvalg / generaliserbarhet
upresist** (utvalg må være representativt, tilstrekkelig stort, med høy deltakelse). ·
**#14** **Ignorerer effektstørrelse/praktisk relevans** («signifikant, altså viktig» uten
å vurdere at en liten b eller lav R² kan være klinisk irrelevant).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Hybrid drøfting + regnefag — econ2130/svmet1010-mønsteret.** MET200 er tredelt: Del
   1 (kvalitativ) og design-drøftingen (F) er ren **drøfting** (DNA-drofting: begreper med
   pensumforankring, drøftingsstruktur, modellbesvarelser på karakternivåer), mens Del 3
   (statistikk) er **regnefag i tolkningsvariant** (DNA-regnefag: løsningsoppskrifter,
   drillkapitler, øvingseksamener — men fasiten er *tolkning av ferdige tall*, ikke
   utledning). Del 2 er en blanding: kausalitet/RCT, design og validitet drilles som
   definisjons-/redegjørelsessjangre (drøfting-nær), men med regnefagets faste
   løsningsoppskrifter. **Fra DNA-regnefag** beholdes: Del 0-eksamenskart,
   temadeler-etter-avhengighet, drillkapittel (regresjon 3.7), øvingseksamener,
   frekvensstyrt vekting, formel-minimum-side, matematisk sannhetskontroll for
   statistiske påstander. **Fra DNA-drøfting** beholdes: begrep-med-pensumforankring,
   binær selvrettingsrubrikk for design-drøftingen, modellbesvarelser på flere
   karakternivåer (A/B/C), pensumkart per kapittel, «hvem eier hva»-kort.
2. **«Symbol- og formelliste» brukt kun i statistikk-kapitlene.** README-kravet om en
   `collapsible` symbol-/formelliste gjelder Del 3 (der Y, a, b, R², r, α, p, H₀, H₁, SD,
   IQR, t opptrer). Kvalitative kapitler (Del 1) og rene definisjonskapitler er
   symbolfrie → unntaket i README gjelder; de får i stedet et **pensumkart** (forfatter →
   begrep) som collapsible, jf. DNA-drøfting.
3. **Flashcards tungt vektet på forvekslingspar (574).** Faget er definisjonstungt og
   fasitpreget, og eksamen er uten oppslagsverk → svært flashcard-egnet. **Kjernekort:**
   begrep↔definisjon (validitet, reliabilitet, kausalitet, R², p-verdi, semistrukturert
   intervju …), **forvekslingspar-kort** (validitet vs. reliabilitet, parret vs. uparret,
   type I vs. type II, populasjon vs. utvalg, R² vs. r, Pearson vs. Spearman, deduktiv vs.
   induktiv), **listekort** (kausalitetskriteriene; RCT-momentene i rekkefølge;
   forskningsprosessens steg; de fem utvalgsstrategiene; evidenspyramidens nivåer;
   regresjonsforutsetningene), og **tolkningskort** (b med enhet/retning; R² som forklart
   variasjon; 68/95/99,7-regelen). **Quiz-profilen** driller nabobegrep-distraktorer
   (SN validitet/reliabilitet, parret/uparret, type I/II, tverrsnitt/kohort/RCT, r/R²,
   Pearson/Spearman) — men distraktorer skal ALDRI gjengi bokas egne presiseringer som
   «galt» svar (jf. README «Distraktorer straffer aldri grundig lesing»).
4. **Drillkapittel for regresjonstolkning (3.7).** Regresjonstabellen er fagets
   signaturoppgave (6/6, samme datasett gjenbrukt) → eget drillkapittel med
   løsningsoppskrift + gjennomtolket case + 8–15 tabelltolkings-varianter.
   Design-drøftingen (F) får et eget verksted-kapittel (4.2) med binær selvrettingsrubrikk.
5. **Sportsvitenskapelig innramming gjennomgående (NIH-signatur).** Hvert talleksempel
   og case kles i idretts-/helsefaglig kontekst (VO₂maks–alder, korsbånd/håndball,
   stillesittende tid hos eldre, MVPA hos barn, KMI, motorisk utvikling) slik NIH selv
   gjør — men oppgavene er nyskrevne (endre tall/kontekst). De faste eksempeldatasettene i
   arkivet (§ under) gjenbrukes som treningscase med endrede tall.
6. **NIH-klyngen — forkunnskaps-kryssreferanser, ikke dybdegjentakelse.** Ved faglig
   overlapp med bygde søsken-skjeletter lenkes det til dem i Forkunnskaper-blokken (jf.
   README). Relevante søsken: **nih-thp202** (Treningsfysiologi) og **nih-idr109**
   (Treningslære) for VO₂maks-/MVPA-/treningsfysiologisk kontekst i eksempler; **nih-ma460**
   (Exercise Biology and Sport Performance Analysis I, master) som beslektet
   analyse-/metodeemne. Lenkeform: `[tittel](/nih-thp202/nih-thp202-X-Y)` — kun til
   kapitler som finnes; merk `(verifiser lenke)` der usikkert. Boka gjentar IKKE
   fysiologisk dybde fra thp202/idr109; den bruker treningsfysiologien som *kontekst* for
   metode-/statistikkeksempler.
7. **Bro mot MET402 (uten lenke).** Siste statistikk-kapittel (3.7) og Del 0 peker
   framover i prosa: MET200 dekker enkel lineær regresjon, én-variabels t-test og
   korrelasjon; MET402 (master) utvider til ANOVA, multippel/multivariat regresjon og mer
   avansert design. MET402-boka bygges parallelt av en annen agent — omtales i prosa, ingen
   markdown-lenke (kapitlene finnes ikke ennå).

### Faste eksempeldatasett (fra analysen §6 — gjenbrukes som treningscase, med ENDREDE tall)

Disse resirkuleres i arkivet og er direkte eksamensrelevante som mønster. I boka brukes
de som mal, men **tall og kontekst endres** (opphavsrett, §6):

- **VO₂maks vs. alder:** b = −0,42 ml/kg/min per år, R² = 0,29, n = 133 `(verifiser tall)`
- **Stor aktivitetsstudie:** n ≈ 904/863, b = −0,38, R² = 0,33 `(verifiser tall)`
- **Stillesittende tid over aldersspenn:** parret t-test, t = −9,86 `(verifiser tall)`
- **MVPA hos 6-åringer, gutter vs. jenter:** uparret t-test, t = 8,92, diff 14,4 min `(verifiser)`
- **MVPA vs. KMI hos 15-åringer:** b = −0,05, R² = 0,08 `(verifiser tall)`

### Kapittel-DNA A — temakapittel (drøfting-nær: Del 0–1 + kvalitative/definisjonstunge deler av Del 2)

Følger **DNA-drofting** temakapittel-oppsettet. Obligatorisk blokk-rekkefølge:

1. `tip` **Eksamensvinkel** — frekvens/vekt, sjangre (A–I) temaet inngår i, typiske
   (omskrevne) oppgaveformuleringer. Fylles fra skjelettets Eksamensbelegg — forfatteren
   finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + evt. kryssbok-lenker til
   NIH-søsken. Etterfulgt av `collapsible` **Pensumkart** (forfatter/verk → begreper de
   «eier»; Leseth & Tellmann for kvalitativt, Thrane for kvantitativt/statistikk).
3. `text` **Temaet i fagets landskap** — kort motivasjon (maks 2–3 avsnitt); for de mest
   abstrakte temaene: et hverdagsanker FØR begrepsapparatet (jf. README).
4. `definition` **Kjernebegreper** — hvert begrep presist definert (åpner med ord, ikke
   formel) OG pensumforankret (hvem bruker det slik). **Toppnivå med `title` —
   flashcard-kilden.**
5. `text` **Posisjoner/nyanser** — der pensum rommer nyanser (f.eks. hva som gjør
   semistrukturert intervju utbredt; hva som skiller kvalitativ validitet fra kvantitativ).
6. `example` × 1–3 **Anvendelse** — temaet brukt på et konkret idrettscase, skrevet slik
   en god besvarelse ville gjort det, med sportskontekst.
7. `warning` **Typiske feil** — feilkodene (#1–#14) som gjelder temaet.
8. `exercise` × 4–8 — 2–3 begreps-/kontrollspørsmål (A/B-sjanger), 1–2 kortdrøftinger
   (med disposisjonsforslag som løsning), 1–2 eksamenslike (E/F/D-sjanger, løsning =
   momentliste + disposisjon). Alle med `hints` (første hint = hjemmelen/første grep).
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående.

**Læringsløkke per begrep (UFRAVIKELIG):** blokkene 4–8 veksler i løkker (begrep →
anvendt eksempel → oppgave på samme begrep, inline), ikke tre samlede bolker.

### Kapittel-DNA B — statistikk-tolkningskapittel (regnefag-nær: Del 3)

Følger **DNA-regnefag** teorikapittel, men fasiten er *tolkning*:

1. `tip` **Eksamensvinkel** (frekvens/vekt/sjanger G/H/I).
2. `text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (ALLE symboler/formler
   i delkapitlet — Y, a, b, R², r, α, p, H₀, H₁, SD, IQR, t; per delkapittel; plasseres
   SIST, åpner med «Oppslagsverk — alt her forklares underveis i kapitlet»). I tunge, sene
   kapitler: «Sist du var her»-oppfrisking av 2–3 nøkkelformler.
3. `text` **Motivasjon** — hvilket spørsmål metoden besvarer (kort).
4. `definition`/`theorem` — begreper/regler i emnets notasjon (åpner med ord).
5. `text` **Tolkningsoppskrift** — algoritmisk «slik leser og tolker du tabellen» som
   nummererte trinn (ett trinn = ett sensor-moment), avsluttet med enhet-og-retning-kravet.
6. `warning` **Typiske feil** (#5, #6, #7, #9, #10 der relevant).
7. `example` × 2–4 — første enkelt, siste på eksamensnivå (H-sjanger, gjennomtolket tabell
   med sportskontekst).
8. `exercise` × 6–12 — stigende, alle med `solution` + `hints`; ender på eksamensklone.
9. `collapsible` **Repetisjonsoppgaver** — 4–6 fra tidligere statistikk-kapitler.

**Matematisk sannhetskontroll (UFRAVIKELIG — DNA-regnefag §):** enhver påstand om
fortegn/retning/tolkning i eksempeltabeller etterregnes numerisk (python3) FØR den
skrives — særlig at koeffisientfortegn, R²-verdi, p-vs-α-konklusjon og prediksjon via
$Y = a + bX$ er konsistente i hvert konstruerte datasett. Distraktorer i regresjons-/
p-verdi-quiz skal treffe de reelle feiltolkningene (#5, #6), ikke straffe grundig lesing.

### Kapittel-DNA C — drill-/verksted-/øvingseksamen (Del 4 + 3.7)

Regresjonsdrill (3.7) og eksamenstreningen (Del 4) følger DNA-regnefag drillkapittel-/
øvingseksamen-oppsett (løsningsoppskrift → gjennomtolket case med sensor-margnotater →
8–15 varianter / komplett sett med sensorkommentert fasit i collapsibles).
Design-drøftingsverkstedet (4.2) følger DNA-drøfting sjangerkapittel + binær
selvrettingsrubrikk + modellbesvarelser på karakternivåer.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt (per 2023/24–2025/26-arkivet) +
> sjangerkoder (A–I) + prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta).
> **Innholdskontrakt / Begrepskontrakt** = begreper/regler/lister som SKAL med
> (flashcard-kilden), med pensumforankring der relevant. **Kvote** = quiz/flashcards.
> Kryssbok-lenker peker på eksisterende NIH-søsken (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og metodehåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes MET200
**id:** `nih-met200-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart (Del 0-pakken).
- **Description:** Eksamensformen (tredelt skriftlig skoleeksamen 15/15/20 p, 4 timer, kun
  kalkulator/formelsamling; gruppeoppgaven som eget vurderingselement), de sju
  100 %-temaene, temafrekvenstabellen, sjangerkatalogen A–I, sensorkravene, feilregisteret
  og kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2023/24–2025/26). Skal formidle: (a) **formen** —
  4 t skriftlig skoleeksamen (WISEflow), tre faste deler (kval. 15 p + kvant. 15 p + stat.
  20 p; H2023 hadde stat. 25 p / 55 totalt), poengdifferensierte kortsvar (1–7 p),
  hjelpemidler = kun kalkulator (arkiv) / kalkulator + formelsamling (gjeldende emneside,
  `(verifiser)`), + gruppeoppgave 25 % som eget element; (b) **de sju 100 %-temaene**;
  (c) **temafrekvenstabellen** (av 6 sett) — se §2/analysen §2; (d) **sensorkravene** (§2);
  (e) **kildeforbeholdet** — 6 sett med full sensorveiledning, tre studieår, ingen sett før
  2023/24; (f) **eksamensform-forbeholdet** (arkiv vs. gjeldende todelt vurdering);
  (g) **bro mot MET402** i prosa. Prioritet: perfekt (meta).
- **Innholdskontrakt (Del 0-pakken, README «Leserkrav»):** (a) **«Slik leser du denne boka»-boks**
  (`text`/`tip`, IKKE `definition`): karakterskalaen A–F (C er en god og vanlig karakter,
  jf. README «Karakter-realisme»), en kompakt liste over sjangerkodene A–I skrevet fullt ut,
  og at typiske feil har et samlet register (#1–#14); ramme inn at gruppeoppgaven er 25 %,
  skoleeksamen 75 %. (b) **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager
  (kapittelrekkefølge + timeanslag bygd av summerte `estimatedMinutes`, prioriter Del 3 +
  de sju 100 %-temaene) + presisering om at tidsanslagene er lesetid (skriv-øving ×1,5).
  (c) **kildenote** for frekvens-/sensor-empirien (2023/24–2025/26, 6 sett, full
  sensorveiledning; forbehold om at nye sett kan endre bildet) — fra analysen, ALDRI
  oppdiktet. (d) **prosedyre-/sjangeroversiktskort på ÉN side** (sjanger A–I → én linjes
  oppskrift → tidsbudsjett → vanligste feil). (e) **deltidsrute**: 10–12-ukers plan
  (~8 t/uke) med øvingseksamener fordelt på flere økter. (f) **«lese mye, skrive lite»-boks**:
  legitim leserute + råd om å skrive minst én øvingseksamen for hånd på tid. Ingen
  forkunnskapsblokk (metakapittel).
- **Sjangre/oppgavetyper:** 3–4 refleksjonsoppgaver: «gitt en tredelt 4-timers mal — sett
  opp tidsbudsjett per del (15/15/20 p)», «avgjør av en oppgavetekst hvilken sjanger (A–I)
  den er og hva sensor premierer».
- **Typiske feil:** Metafeilene: tro at arkivfrekvensene beskriver gruppeoppgaven (de gjelder
  skoleeksamenen); overse formelsamlingen (`verifiser` gjeldende regime); prioritere ned
  Del 3 (den er tyngst OG mest forutsigbar); pugge uten å øve tolkning i kontekst.
- **Kvote:** 14 quiz / 14 flashcards (formfakta, de sju temaene, temafrekvens, sjangerkodene,
  sensorkravene, feilregisteret, kildeforbeholdet, MET402-broen).

#### Kapittel 0.2: Metodehåndverket — definisjonspresisjon, begrunnelse og begrepsvaksine
**id:** `nih-met200-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met200-0-1`

- **Kapitteltype:** håndverkskapittel (meta — svarskriving + forvekslingsvaksine).
- **Description:** De tre ferdighetene som gir poeng på hver oppgave: å **definere presist og
  pensumnært** (sensorkrav 2), å **begrunne, ikke bare konstatere** (sensorkrav 4), og å
  ikke forveksle kjernebegreper. Etablerer begrepsvaksine-tabellen (forvekslingsparene) som
  resten av boka refererer.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 2, 4 på tvers av alle sjangre A–I;
  forvekslingsfeilene #1, #4, #6, #8, #13 er de hyppigste poengtapskildene). Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1. `collapsible` **Pensumkart:** Thrane (2018),
  *Kvantitativ metode: En praktisk tilnærming* (Del 2–3) + Leseth & Tellmann (2018),
  *Hvordan lese kvalitativ forskning?* (Del 1) `(verifiser utgave/tittel)`.
- **Begrepskontrakt (flashcard-kilde):** **svarmalen for definisjonsspørsmål** (A): presis
  kjernedefinisjon i ord + ett konkret idrettsfaglig eksempel; **svarmalen for
  listespørsmål** (B): riktig antall + kort korrekt forklaring per punkt (full pott krever
  ALLE); **begrunnelsesmalen** (D/F): «X velges fordi …» — konstatering uten begrunnelse gir
  redusert uttelling; **begrepsvaksine-tabellen (de sentrale forvekslingsparene):** validitet
  vs. reliabilitet (#1), parret vs. uparret t-test (#4), type I vs. type II-feil (#8),
  populasjon vs. utvalg (#13), R² vs. r (#6), Pearson vs. Spearman, deduktiv vs. induktiv,
  aktiverende «signifikant» vs. «viktig» (#14). Hvert par med den korte, skarpe forskjellen.
- **Tekst — svarhåndverk:** hvordan en kortsvarsbesvarelse disponeres på 4 timer (tidsbudsjett
  per del); hvordan A-markøren «refleksjon over usikkerhet/effektstørrelse» flettes inn.
- **Typiske feil:** #1, #4, #8 (forvekslingene selv); upresis definisjon som mister sensors
  nøkkelord; ren komponentliste uten begrunnelse (#12).
- **Sjangre/oppgavetyper:** «skriv en presis definisjon + idrettseksempel for [begrep]»;
  «para begrepet med sitt forvekslingspar og skriv den skarpe forskjellen».
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 4).

### Del 1 — Kvalitativ metode *(prioritet: PERFEKT — eksamenens Del 1, 15 p; intervju 6/6)*

#### Kapittel 1.1: Vitenskapsteori og kvalitativ forskningslogikk
**id:** `nih-met200-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met200-0-2`

- **Kapitteltype:** temakapittel (DNA A).
- **Description:** Deduktiv vs. induktiv tilnærming og teoriens rolle; kvalitativ forsknings
  formål (forstå erfaring/mening, ikke måle utbredelse); problemstillingens rolle. Fundamentet
  for hele Del 1 og for design-drøftingen (1.4).
- **Eksamensbelegg:** Deduktiv/induktiv (V2026u, 1/6, nytt/master-brofag ⭐⭐); kvalitativ
  formål + teoribruk i analysen (H2025, 1/6 ⭐). Sjangre: A, F. Prioritet: kunne (grunnlag for
  design-drøftingen).
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Pensumkart:** Leseth & Tellmann —
  deduktiv/induktiv tilnærming, teoriens rolle, problemstilling.
- **Begrepskontrakt (flashcard-kilde):** **deduktiv** (fra teori → hypotese → data;
  teoritestende) vs. **induktiv** (fra data → mønster → teori; teoriutviklende) tilnærming;
  **abduksjon** kort (bør kjenne til); **kvalitativ forsknings formål** (dybde, mening,
  kontekst — ikke frekvens/generalisering); **problemstilling** (åpen, utforskende vs.
  hypoteseformulert); teoriens rolle i analysen (rammeverk vs. sensitiverende begreper).
- **Posisjoner/nyanser:** når velger man induktiv vs. deduktiv design; hvordan teori kan styre
  eller emergere i analysen.
- **Case-forslag:** en studie av hvordan unge svømmere opplever overgangen fra bredde til
  satsning (induktiv); en teoritestende studie av mestringsforventning i et treningsmiljø
  (deduktiv).
- **Typiske feil:** #12 (kvalitativ forskning fremstilt med kvantitativ logikk — teller/måler
  i stedet for å forstå); blande deduktiv/induktiv.
- **Kvote:** 24 quiz / 30 flashcards.

#### Kapittel 1.2: Det kvalitative forskningsintervjuet
**id:** `nih-met200-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met200-1-1`

- **Kapitteltype:** temakapittel (DNA A).
- **Description:** Intervjutypene (strukturert/semistrukturert/ustrukturert + fokusgruppe) og
  hvorfor semistrukturert er standarden. Fagets mest stilte kvalitative tema.
- **Eksamensbelegg:** Kvalitativt intervju **6/6 = 100 %** ⭐⭐⭐ (H2023 design, V2024u, H2024,
  V2025u, H2025, V2026u); semistrukturert stilt i minst fire sett, ofte nesten identisk fasit.
  Sjangre: A, B, E. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Pensumkart:** Leseth & Tellmann —
  intervjutyper, semistrukturert intervju, temaguide.
- **Begrepskontrakt (flashcard-kilde):** **strukturert intervju** (fast spørsmålsrekkefølge,
  standardisert — nær spørreskjema); **semistrukturert intervju** (fast temaguide MEN fleksibel
  rekkefølge og oppfølging → dybde + retning samtidig); **ustrukturert intervju** (åpen samtale
  rundt tema); **fokusgruppe** (gruppedynamikk, samhandling); intervjuguide/temaguide;
  oppfølgingsspørsmål. Hvorfor semistrukturert er utbredt (to fordeler: struktur som sikrer at
  temaene dekkes + fleksibilitet som gir dybde).
- **Posisjoner/nyanser:** når passer fokusgruppe vs. individuelt intervju; forholdet
  intervjuguide ↔ fleksibilitet.
- **Case-forslag:** semistrukturert intervju om treneres opplevelse av utøverpress; fokusgruppe
  om lagkultur.
- **Typiske feil:** #11 (semistrukturert forklart som fast spørreskjema — mister fleksibel
  oppfølging/dybde); nevne intervjutyper uten å forklare skillet.
- **Kvote:** 28 quiz / 34 flashcards.

#### Kapittel 1.3: Utvalg, observasjon og analyse i kvalitativ forskning
**id:** `nih-met200-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met200-1-2`

- **Kapitteltype:** temakapittel (DNA A).
- **Description:** De fem navngitte utvalgsstrategiene, observasjon som metode, og
  temaanalyse/koding (koding → kategorisering). De tre roterende kvalitative undertemaene
  utenom intervju.
- **Eksamensbelegg:** Utvalgsstrategier (V2025u, H2025, 2/6 ⭐⭐); temaanalyse/koding (V2024u,
  1/6 ⭐); observasjon som metode (V2026u, 1/6 ⭐). Sjangre: B, E, F. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Pensumkart:** Leseth & Tellmann —
  utvalgsstrategier, observasjon (strukturert/ustrukturert), temaanalyse.
- **Begrepskontrakt (flashcard-kilde):** **fem utvalgsstrategier** — ekstrem/avvikende,
  maksimal variasjon, homogent/minimal variasjon, snøball, teoribasert (hver med kort kriterium
  og når den passer); **observasjon** (strukturert vs. ustrukturert; deltakende vs.
  ikke-deltakende); **temaanalyse** (koding = merke datautdrag med koder → kategorisering =
  gruppere koder til temaer); systematikk og transparens i analysen.
- **Posisjoner/nyanser:** hvordan utvalgsstrategien følger av problemstillingen; observasjon som
  supplement til intervju.
- **Case-forslag:** maksimal-variasjon-utvalg av utøvere på ulike nivåer; ustrukturert
  observasjon av treningsøkt; temaanalyse av intervjuutskrifter om motivasjon.
- **Typiske feil:** nevne færre enn etterspurt antall utvalgsstrategier (#3); blande koding og
  kategorisering; observasjon uten systematikk.
- **Kvote:** 24 quiz / 30 flashcards.

#### Kapittel 1.4: Kvalitativ kvalitet og design-drøfting
**id:** `nih-met200-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met200-1-3`

- **Kapitteltype:** temakapittel + drøftings-verksted (DNA A + binær selvrettingsrubrikk).
- **Description:** Kvalitet i kvalitativ forskning (validitet/gyldighet, reliabilitet/
  pålitelighet, transparens, systematikk, innlevelse) OG den samlede design-drøftingen
  (H2024-typen): gjør rede for og drøft et komplett kvalitativt opplegg på et case. Den største
  kvalitative oppgaven.
- **Eksamensbelegg:** Kvalitativ kvalitet (H2023, V2024u, H2024, H2025 implisitt, 4/6 = 67 % ⭐⭐);
  kvalitativ design-drøfting (H2024, 7 p — eneste store sammenhengende, ⭐⭐). Sjangre: A, F.
  Prioritet: **perfekt** (design-drøftingen er den differensierende kvalitative oppgaven).
- **Forkunnskaper/kryssbok:** kap. 1.1–1.3 (drøftingen integrerer hele Del 1); forskningsetikk
  fra kap. 2.5 refereres (deltar i drøftingens sjekkliste). `collapsible` **Pensumkart:** Leseth
  & Tellmann — begrepsvaliditet, indre/ytre validitet, gyldighet, transparens.
- **Begrepskontrakt (flashcard-kilde):** **kvalitativ validitet/gyldighet** (måler/undersøker
  man det man vil?), **reliabilitet/pålitelighet** (konsistens i innsamling/analyse),
  **transparens** (åpenhet om metode/valg), **systematikk**, **innlevelse**; begrepsvaliditet,
  indre/ytre validitet i kvalitativ forstand; generalisering i kvalitativ forskning
  (overførbarhet, ikke statistisk).
- **Drøftingsakser:** deduktivt vs. induktivt design; hvilken utvalgsstrategi og hvorfor; valg
  av metode (intervju/observasjon); analyse (temaanalyse); kvalitetsvurdering; forskningsetikk.
- **Binær selvrettingsrubrikk (0/1, jf. DNA-drøfting):** ☐ relevant problemstilling formulert?
  ☐ deduktivt/induktivt design begrunnet? ☐ navngitt utvalgsstrategi? ☐ metodevalg begrunnet?
  ☐ analysemetode nevnt? ☐ kvalitetsvurdering (validitet/overførbarhet)? ☐ forskningsetikk
  adressert? Prøvefasitene refererer rubrikken.
- **Case-forslag:** «design en kvalitativ studie av hvordan unge svømmere opplever overgangen
  til satsning»; «undervisning om egentrening i vgs.» (H2024-nær, med endret case).
- **Typiske feil:** #12 (komponentliste uten begrunnelse; mangler forskningsetikk der caset
  krever det); uklar/manglende problemstilling; ingen kobling problemstilling→metode→analyse.
- **Kvote:** 26 quiz / 28 flashcards.

**Prøve-kvote Del 1:** **4 prøver** (kan trygt deles over flere kvelder — én prøve per økt):
1.A vitenskapsteori (deduktiv/induktiv + kvalitativt formål) · 1.B intervjutyper +
semistrukturert · 1.C utvalgsstrategier + observasjon + temaanalyse · 1.D samlet Del 1-prøve på
eksamensnivå (inkl. én design-drøfting, F-sjanger). Hver med selvdiagnose-sjekkliste etter fasit.

### Del 2 — Kvantitativ metode og studiedesign *(prioritet: PERFEKT — eksamenens Del 2, 15 p; 3 temaer 6/6)*

#### Kapittel 2.1: Studiedesign og evidenspyramiden
**id:** `nih-met200-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met200-0-2`

- **Kapitteltype:** temakapittel (DNA A).
- **Description:** Evidenspyramiden og de sentrale designene (tverrsnitt, case-kontroll, kohort,
  RCT, systematiske oversikter/metaanalyse), og hvordan man kobler et forskningsspørsmål til
  riktig design.
- **Eksamensbelegg:** Studiedesign/evidenspyramiden **6/6 = 100 %** ⭐⭐⭐. Sjangre: B, C.
  Prioritet: **perfekt**. Fast delspørsmål: koble spørsmål → design (størrelse/risikogruppe →
  tverrsnitt; kausal sammenheng over tid → kohort; effekt av intervensjon → RCT).
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Pensumkart:** Thrane — evidenspyramiden,
  designtyper. Idrettskontekst hentes fra [nih-thp202](/nih-thp202/nih-thp202-1-1)
  `(verifiser lenke)` / [nih-idr109](/nih-idr109/nih-idr109-1-1) `(verifiser lenke)` — uten
  fysiologisk dybdegjentakelse.
- **Begrepskontrakt (flashcard-kilde):** **evidenspyramiden** nedenfra: kasusrapport/
  ekspertvurdering → **tverrsnitt** (måler på ett tidspunkt; assosiasjon/utbredelse) →
  **case-kontroll** (starter fra utfall, ser bakover) → **kohort** (følger grupper over tid;
  kausal retning) → **RCT** (randomisert intervensjon vs. kontroll; gullstandard for effekt) →
  **systematisk oversikt/metaanalyse** (syntese av flere studier); hver designs styrke/svakhet;
  design-til-spørsmål-koblingen som fast øvingstype.
- **Case-forslag:** «vil undersøke om 12-ukers styrketrening gir økt beintetthet — hvilket
  design?» (RCT); «hvor mange unge idrettsutøvere har lav jerntilførsel?» (tverrsnitt).
- **Typiske feil:** #2 (kausalitet fra tverrsnitt); plassere design feil i pyramiden; velge
  design uten å begrunne mot forskningsspørsmålet.
- **Kvote:** 28 quiz / 32 flashcards.

#### Kapittel 2.2: Kausalitet og randomiserte kontrollerte studier (RCT)
**id:** `nih-met200-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met200-2-1`

- **Kapitteltype:** temakapittel (DNA A) — fagets mest stilte oppgave.
- **Description:** Kausalitet og kausalitetskriteriene, og hvorfor RCT er gullstandarden for
  årsak–virkning, inkludert å skissere et RCT-design i riktig rekkefølge.
- **Eksamensbelegg:** Kausalitet + kausalitetskriterier + hvorfor RCT **6/6 = 100 %** ⭐⭐⭐ —
  **fagets mest stilte oppgave**. Sjanger: D. Prioritet: **perfekt**. RCT-momentene kreves ofte
  i riktig rekkefølge for full pott (eksplisitt sensorkrav).
- **Forkunnskaper/kryssbok:** kap. 2.1 (design/evidenspyramiden). `collapsible` **Pensumkart:**
  Thrane — kausalitetskriterier, konfundering, RCT-momenter.
- **Begrepskontrakt (flashcard-kilde):** **kausalitet** (nødvendig/tilstrekkelig årsak til en
  senere virkning); **kausalitetskriteriene:** (i) **tidsrelasjon** (eksponering før utfall),
  (ii) **samvariasjon/sammenheng**, (iii) **utelukking av alternative forklaringer
  (konfundere)**; **konfunderende faktor**; **randomisering** (gjør gruppene like ved baseline,
  kontrollerer kjente OG ukjente konfundere); **RCT-momentene i rekkefølge:** inklusjons-/
  eksklusjonskriterier → baselinetest → randomisering til intervensjon/kontroll →
  intervensjonsperiode → post-test.
- **Tolkningsoppskrift (D-sjangeren, jf. DNA-regnefag løsningsoppskrift):** (1) definer
  kausalitet; (2) list ALLE tre kriteriene; (3) forklar hvorfor RCT oppfyller dem
  (randomisering → like grupper → kontroll for konfundere; intervensjon→utfall → riktig
  tidsrekkefølge); (4) skissér RCT i riktig rekkefølge.
- **Case-forslag:** RCT av et 8-ukers intervalltreningsprogram på VO₂maks
  (kontekst-kryssref. thp202, uten fysiologisk dybde); hvorfor en tverrsnittstudie ikke kan vise
  årsak.
- **Typiske feil:** #2 (kausalitet fra svakt design; forklarer ikke hvorfor randomisering løser
  konfunder-problemet); #3 (nevner to av tre kriterier; glemmer et RCT-moment; feil rekkefølge).
- **Kvote:** 30 quiz / 34 flashcards.

#### Kapittel 2.3: Validitet, reliabilitet og måleteori
**id:** `nih-met200-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met200-0-2`

- **Kapitteltype:** temakapittel (DNA A).
- **Description:** Validitet (måler man det man faktisk vil måle) og reliabilitet (stabile,
  reproduserbare målinger), skillet mellom dem, og måleteori (kriterievaliditet mot
  gullstandard, test–retest, kalibrering). Fagets hyppigste forvekslingsfelle.
- **Eksamensbelegg:** Validitet (og reliabilitet) **6/6 = 100 %** ⭐⭐⭐ — definisjon + eksempel.
  Sjanger: A. Prioritet: **perfekt**. Forveksling validitet↔reliabilitet er #1 (vanligste
  poengtapskilde).
- **Forkunnskaper/kryssbok:** kap. 0.2 (begrepsvaksinen). `collapsible` **Pensumkart:** Thrane —
  validitet, reliabilitet, kriterievaliditet, test–retest.
- **Begrepskontrakt (flashcard-kilde):** **validitet** (måler man det man faktisk ønsker å
  måle? — gyldighet); **reliabilitet** (gir metoden stabile, reproduserbare målinger? —
  pålitelighet); **skillet** (reliabilitet er en forutsetning for validitet, men ikke omvendt —
  en reliabel metode kan måle feil ting konsistent); **kriterievaliditet** (mot gullstandard);
  **indre validitet** (er sammenhengen i studien reell?) vs. **ytre validitet** (kan den
  generaliseres? — kobles til 2.4); **test–retest-reliabilitet**; kalibrering, standardiserte
  prosedyrer.
- **Case-forslag:** en VO₂maks-test som er reliabel men ikke valid for utholdenhet i en spesifikk
  idrett; en subjektiv anstrengelsesskala (Borg) — validitet vs. reliabilitet.
- **Typiske feil:** **#1** (validitet ↔ reliabilitet forvekslet — den vanligste); upresis
  definisjon («måler noe riktig» i stedet for «måler det man faktisk vil måle»).
- **Kvote:** 28 quiz / 32 flashcards.

#### Kapittel 2.4: Populasjon, utvalg og generaliserbarhet
**id:** `nih-met200-2-4` · **number:** 2.4 · **estimatedMinutes:** 40 · **prerequisites:** `nih-met200-2-3`

- **Kapitteltype:** temakapittel (DNA A).
- **Description:** Populasjon vs. utvalg, representativitet, generaliserbarhet/ekstern validitet,
  utvalgsstørrelsens rolle og seleksjonsskjevhet.
- **Eksamensbelegg:** Populasjon/utvalg/generaliserbarhet/ekstern validitet **5/6 = 83 %** ⭐⭐⭐;
  seleksjonsskjevhet (H2024, 1/6 ⭐). Sjangre: A, B. Prioritet: kunne (høy — differensierer).
- **Forkunnskaper/kryssbok:** kap. 2.3 (ekstern validitet knyttes hit). `collapsible`
  **Pensumkart:** Thrane — populasjon/utvalg, representativitet, ekstern validitet, seleksjon.
- **Begrepskontrakt (flashcard-kilde):** **populasjon** (hele gruppen man vil uttale seg om) vs.
  **utvalg** (de faktisk undersøkte); **representativitet** (utvalget speiler populasjonen);
  **generaliserbarhet/ekstern validitet** (kan funnene overføres til populasjonen?);
  **utvalgsstørrelsens effekt** (større n → mindre usikkerhet); **deltakelsesgrad/frafall**;
  **seleksjonsskjevhet** (systematisk skjev seleksjon av deltakere → skjevt utvalg).
- **Case-forslag:** en treningsstudie kun på friske eliteutøvere — hvorfor kan den ikke
  generaliseres til mosjonister? (ytre validitet + seleksjon).
- **Typiske feil:** **#13** (populasjon ↔ utvalg / generaliserbarhet upresist); tro at et stort
  utvalg alene sikrer representativitet.
- **Kvote:** 24 quiz / 28 flashcards.

#### Kapittel 2.5: Forskningsetikk, forskningsprosessen og metaanalyse
**id:** `nih-met200-2-5` · **number:** 2.5 · **estimatedMinutes:** 40 · **prerequisites:** `nih-met200-2-1`

- **Kapitteltype:** temakapittel (DNA A) — samler tre roterende Del 2-temaer.
- **Description:** Forskningsetiske prinsipper (informert samtykke, REK/Sikt, personvern,
  autonomi–velgjørenhet–rettferdighet), den kvantitative forskningsprosessens steg, og
  metaanalyse som definisjon.
- **Eksamensbelegg:** Forskningsetikk (V2024u, H2024 i design, V2025u, H2025, 4/6 = 67 % ⭐⭐);
  kvantitativ forskningsprosess (H2024, H2025, 2/6 ⭐⭐); metaanalyse-definisjon (V2024u, V2026u,
  2/6 ⭐⭐). Sjangre: A, B. Prioritet: kunne/kjenne.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Pensumkart:** Thrane + Canvas —
  forskningsetikk, forskningsprosess; metaanalyse (fra 2.1s evidenspyramide-topp).
- **Begrepskontrakt (flashcard-kilde):** **informert samtykke**, **rett til å trekke seg**,
  **minimal risiko/ikke-skade**, **REK/Sikt-godkjenning** `(verifiser rolledeling REK vs.
  Sikt)`, **personvern/datasikkerhet**; de **tre etiske hovedprinsippene** (autonomi/samtykke,
  velgjørenhet–ikke-skade, rettferdighet); **forskningsprosessens steg** (problemstilling →
  design → datainnsamling → analyse → rapport — rekkefølgen premieres); **metaanalyse**
  (statistisk syntese av flere studiers resultater).
- **Case-forslag:** etisk vurdering av en treningsstudie med mindreårige utøvere (samtykke,
  personvern); stegene i en kvantitativ studie av egentrening.
- **Typiske feil:** #3 (nevner færre etiske prinsipper enn etterspurt; hopper over et
  prosess-steg / feil rekkefølge); blande REK og Sikt `(verifiser)`.
- **Kvote:** 22 quiz / 24 flashcards.

**Prøve-kvote Del 2:** **4 prøver** (én prøve per økt): 2.A studiedesign + evidenspyramiden ·
2.B kausalitet + RCT (D-sjanger, full mekanisme i rekkefølge) · 2.C validitet/reliabilitet +
populasjon/utvalg · 2.D samlet Del 2-prøve på eksamensnivå (etikk + prosess + metaanalyse
inkludert). Selvdiagnose-sjekkliste etter hver fasit.

### Del 3 — Statistikk *(prioritet: PERFEKT — eksamenens Del 3, 20 p TYNGST; 3 temaer 6/6)*

#### Kapittel 3.1: Variabeltyper og deskriptiv statistikk
**id:** `nih-met200-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met200-0-2`

- **Kapitteltype:** statistikk-tolkningskapittel (DNA B).
- **Description:** Klassifisere variabler (nominal/ordinal/diskret/kontinuerlig) og velge riktig
  deskriptiv statistikk (gjennomsnitt+SD / median+IQR / antall+prosent), inkludert gjennomsnitt
  vs. median og robusthet mot ekstremverdier.
- **Eksamensbelegg:** Variabeltyper + riktig deskriptiv statistikk **5/6 = 83 %** ⭐⭐⭐;
  gjennomsnitt vs. median + robusthet (V2024u, H2024, V2026u, 3/6 = 50 % ⭐⭐). Sjanger: I.
  Prioritet: **perfekt** (grunnlaget for hele Del 3).
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Symbol- og formelliste:** gjennomsnitt
  $\bar{x}$, standardavvik SD, median, kvartiler/IQR, n — «Oppslagsverk — alt her forklares
  underveis i kapitlet.»
- **Begrepskontrakt (flashcard-kilde):** **nominal** (kategorier uten rangorden — kjønn,
  idrettsgren; deskriptiv: antall/prosent), **ordinal** (rangert — skadegrad, Borg-skala;
  median/kvartiler), **diskret/kontinuerlig numerisk** (alder, VO₂maks; gjennomsnitt+SD hvis
  tilnærmet normalfordelt, median+IQR hvis skjevfordelt); **gjennomsnitt** vs. **median**
  (medianen er robust mot ekstremverdier); **standardavvik SD**; **kvartiler/IQR**.
- **Tolkningsoppskrift:** (1) klassifiser variabelen; (2) velg deskriptiv statistikk etter type
  OG fordeling; (3) begrunn valget.
- **Case-forslag:** klassifiser variablene i et idrettsdatasett (kjønn, skadegrad, VO₂maks,
  treningsmengde) og velg deskriptiv statistikk for hver.
- **Typiske feil:** **#9** (gjennomsnitt/SD på skjevfordelte/kategoriske data); blande ordinal og
  kontinuerlig; bruke gjennomsnitt der ekstremverdier krever median.
- **Kvote:** 26 quiz / 30 flashcards.

#### Kapittel 3.2: Normalfordeling, spredning og konfidensintervall
**id:** `nih-met200-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met200-3-1`

- **Kapitteltype:** statistikk-tolkningskapittel (DNA B).
- **Description:** Normalfordelingens kjennetegn og 68/95/99,7-regelen, skjevfordeling, og
  tolkning av 95 % konfidensintervall (inneholder det 0?).
- **Eksamensbelegg:** Normalfordeling + 68/95/99,7-regelen (V2024u, V2025u, H2025, V2026u, 4/6 =
  67 % ⭐⭐); konfidensintervall — tolke (V2025u, 1/6 ⭐, stigende). Sjangre: I, H. Prioritet:
  kunne (høy).
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:** normalfordeling,
  $\bar{x}$, SD, 68/95/99,7-regelen, 95 % KI, 0 som referanse — «Oppslagsverk …».
- **Begrepskontrakt (flashcard-kilde):** **normalfordeling** (symmetrisk, klokkeformet, definert
  av gjennomsnitt + SD); **68/95/99,7-regelen** (≈68 % innen ±1 SD, ≈95 % innen ±2 SD, ≈99,7 %
  innen ±3 SD); **skjevfordeling** (høyre-/venstreskjev → median foretrekkes); **konfidensintervall
  (95 % KI)** for en differanse (tolkes via om intervallet inneholder 0 — inneholder det 0, er
  forskjellen ikke statistisk signifikant på 5 %-nivå).
- **Tolkningsoppskrift (KI):** (1) les intervallgrensene; (2) sjekk om 0 ligger innenfor;
  (3) konkluder om signifikans + tolk i kontekst.
- **Case-forslag:** hvor stor andel av utøverne ligger innen ±2 SD i VO₂maks; tolk et 95 % KI for
  forskjell i treningseffekt (inneholder 0?).
- **Typiske feil:** feil bruk av 68/95/99,7-regelen (bytte om SD-grensene); tolke et KI som
  inneholder 0 som signifikant.
- **Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 3.3: Hypotesetesting: H₀/H₁, p-verdi og feiltyper
**id:** `nih-met200-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met200-3-2`

- **Kapitteltype:** statistikk-tolkningskapittel (DNA B).
- **Description:** Sette opp H₀/H₁, signifikansnivå α = 0,05, tolke p-verdi mot α, og type I- vs.
  type II-feil. Fundamentet for t-test og regresjon.
- **Eksamensbelegg:** Hypotesetest (H₀/H₁ + tolke p-verdi mot α) **6/6 = 100 %** ⭐⭐⭐; type I-/
  type II-feil (H2023, 1/6 ⭐). Sjanger: G. Prioritet: **perfekt**. P-verdi-feiltolkning (#5) er
  en hyppig stryk-markør.
- **Forkunnskaper/kryssbok:** kap. 3.2. `collapsible` **Symbol- og formelliste:** H₀, H₁, α, p,
  signifikansnivå, type I/II — «Oppslagsverk …».
- **Begrepskontrakt (flashcard-kilde):** **nullhypotese H₀** (ingen forskjell/sammenheng);
  **alternativhypotese H₁** (forskjell/sammenheng); **signifikansnivå α = 0,05**; **p-verdi**
  (sannsynligheten for å observere data minst så ekstreme *gitt* at H₀ er sann — IKKE
  sannsynligheten for at H₀ er sann); **beslutningsregel** (p < α → forkast H₀); **ensidig vs.
  tosidig test**; **type I-feil** (feilaktig forkaste sann H₀ = falsk positiv); **type II-feil**
  (feilaktig beholde falsk H₀ = falsk negativ); teststyrke (bør kjenne til).
- **Tolkningsoppskrift:** (1) formuler H₀/H₁ i kontekst; (2) les p-verdien; (3) sammenlign med
  α = 0,05; (4) konkluder (forkast/behold H₀) og tolk i kontekst; (5) A-markør: vurder
  effektstørrelse/praktisk relevans.
- **Case-forslag:** sett opp H₀/H₁ for om et treningsprogram endrer hvilepuls; tolk p = 0,03 mot
  α = 0,05.
- **Typiske feil:** **#5** (p-verdi = «sannsynligheten for at H₀ er sann»); **#8** (type I ↔ type
  II ombyttet); **#14** (konkluderer «signifikant, altså viktig» uten effektstørrelse).
- **Kvote:** 30 quiz / 32 flashcards.

#### Kapittel 3.4: t-test — testvalg og tabelltolkning
**id:** `nih-met200-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met200-3-3`

- **Kapitteltype:** statistikk-tolkningskapittel (DNA B).
- **Description:** Velge parret vs. uparret t-test, nevne forutsetning for parametrisk test, og
  tolke en ferdig t-test-tabell (gjennomsnitt, t-Stat, p, konklusjon). Mann–Whitney som
  ikke-parametrisk alternativ.
- **Eksamensbelegg:** t-test (valg, forutsetning, tolke tabell) **~6/6** ⭐⭐⭐. Sjangre: G, H.
  Prioritet: **perfekt**. Parret↔uparret-forveksling (#4) testes gjentatte ganger.
- **Forkunnskaper/kryssbok:** kap. 3.3 (hypotesetest). `collapsible` **Symbol- og formelliste:**
  t, t-Stat, p, parret/uparret, Mann–Whitney — «Oppslagsverk …». **«Sist du var her»:** frisk
  opp H₀/H₁ og p<α-regelen fra 3.3 (2–3 linjer).
- **Begrepskontrakt (flashcard-kilde):** **parret (avhengig) t-test** (samme personer målt to
  ganger — f.eks. før/etter treningsleir); **uparret (uavhengig) t-test** (to ulike grupper —
  f.eks. gutter vs. jenter); **forutsetning for parametrisk test** (tilnærmet normalfordelt
  responsvariabel *eller* minst ~30 per gruppe); **Mann–Whitney** (ikke-parametrisk alternativ
  ved ikke-normalitet); tolke t-tabell (retning + størrelse på gjennomsnittsforskjell +
  konklusjon fra p).
- **Tolkningsoppskrift:** (1) identifiser om målingene er på samme personer (parret) eller to
  grupper (uparret); (2) velg test + nevn forutsetning; (3) les gjennomsnittsforskjell,
  t-Stat og p; (4) konkluder i kontekst med retning og enhet.
- **Case-forslag:** parret t-test på hvilepuls før/etter treningsleir (samme 40 utøvere); uparret
  t-test på MVPA gutter vs. jenter (endre tall fra arkivets t = 8,92).
- **Typiske feil:** **#4** (parret ↔ uparret forvekslet); glemme forutsetningen; **#7**
  (gjennomsnittsforskjell uten enhet/retning).
- **Kvote:** 28 quiz / 30 flashcards.

#### Kapittel 3.5: Korrelasjon
**id:** `nih-met200-3-5` · **number:** 3.5 · **estimatedMinutes:** 40 · **prerequisites:** `nih-met200-3-2`

- **Kapitteltype:** statistikk-tolkningskapittel (DNA B).
- **Description:** Korrelasjonskoeffisienten r (styrke og retning, lineær), Pearson (normalfordelt)
  vs. Spearman (skjevfordelt/ordinal), og forutsetningen om to numeriske variabler. Broen til
  regresjon (3.6).
- **Eksamensbelegg:** Korrelasjon (r, Pearson/Spearman, forutsetninger) **4/6 = 67 %** ⭐⭐.
  Sjangre: H, I. Prioritet: kunne. Forveksling r ↔ R² (#6) er en hyppig regresjonsfelle (kobles
  til 3.6).
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2. `collapsible` **Symbol- og formelliste:** r,
  Pearson, Spearman, −1 ≤ r ≤ 1 — «Oppslagsverk …».
- **Begrepskontrakt (flashcard-kilde):** **korrelasjonskoeffisient r** (−1 ≤ r ≤ 1; styrke =
  tallverdi, retning = fortegn); **Pearson** (lineær korrelasjon mellom to tilnærmet
  normalfordelte numeriske variabler) vs. **Spearman** (rangkorrelasjon; skjevfordelte/ordinale
  data); **forutsetning** (to numeriske variabler, lineær sammenheng for Pearson); korrelasjon ≠
  kausalitet (kobles til 2.2); **r vs. R²** (R² = r² for enkel lineær regresjon — kobles til 3.6).
- **Tolkningsoppskrift:** (1) sjekk variabeltyper/fordeling → velg Pearson/Spearman; (2) les r
  (styrke + retning); (3) tolk i kontekst, presiser at korrelasjon ikke er kausalitet.
- **Case-forslag:** korrelasjon mellom treningsmengde og VO₂maks; når velge Spearman (skjevfordelt
  skadedata).
- **Typiske feil:** **#6** (r ↔ R² forvekslet); tolke korrelasjon som kausalitet; feil valg
  Pearson/Spearman.
- **Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 3.6: Enkel lineær regresjon — tolke tabellen
**id:** `nih-met200-3-6` · **number:** 3.6 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met200-3-5`

- **Kapitteltype:** statistikk-tolkningskapittel (DNA B) — fagets signaturoppgave.
- **Description:** Tolke en ferdig lineær regresjonstabell: koeffisienten b (endring i Y per enhet
  X, med enhet og retning), skjæringspunkt a, R² (andel forklart variasjon), konklusjon fra
  p-verdi/signifikans-F, og prediksjon via $Y = a + bX$ (inkl. endring over N år).
- **Eksamensbelegg:** Lineær regresjon: tolke tabell **6/6 = 100 %** ⭐⭐⭐ — **fagets signaturoppgave**;
  regresjonsprediksjon (H2024, V2025u impl., V2026u, 3/6 = 50 % ⭐⭐); residual/feilledd (H2023,
  1/6 ⭐). Sjanger: H. Prioritet: **perfekt**. Samme datasett (VO₂maks–alder) gjenbrukt i ~4/6 sett.
- **Forkunnskaper/kryssbok:** kap. 3.5 (korrelasjon), 3.3 (p-verdi). `collapsible` **Symbol- og
  formelliste:** $Y = a + bX$, Y (responsvariabel), X (forklaringsvariabel), a (skjæringspunkt),
  b (stigningstall/koeffisient), R² (forklart variasjon), residual/feilledd, signifikans-F, p —
  «Oppslagsverk …». **«Sist du var her»:** frisk opp r vs. R² (fra 3.5) og p<α-regelen.
- **Begrepskontrakt (flashcard-kilde):** **regresjonslikning $Y = a + bX$**; **responsvariabel Y**
  vs. **forklaringsvariabel X**; **koeffisient b** (endring i Y per enhet X — enhet OG retning
  kreves); **skjæringspunkt a**; **R²** (andel av variasjonen i Y forklart av X, i prosent — IKKE
  sammenhengens «riktighet»); **residual/feilledd** (avvik mellom observert og predikert Y);
  **signifikans-F/p** (er sammenhengen statistisk signifikant?); **prediksjon** (sett X inn i
  $Y = a + bX$; endring over N år = b·N).
- **Tolkningsoppskrift (H-sjangeren):** (1) les koeffisienten b → tolk «Y endres med b [enhet] per
  enhet X», med retning; (2) les R² → «X forklarer R²·100 % av variasjonen i Y»; (3) les p/
  signifikans-F → konkluder om sammenhengen er signifikant; (4) prediker: sett X inn i
  $Y = a + bX$, eller regn endring over N år; (5) A-markør: vurder effektstørrelse (liten b/lav
  R² kan være klinisk irrelevant selv om signifikant).
- **Case-forslag (endrede tall fra arkivets VO₂maks–alder, b = −0,42, R² = 0,29):** «regresjonen
  gir b = [ny verdi] (p < 0,001), R² = [ny verdi] for VO₂maks mot alder — tolk b, forklar R²,
  konkluder, og prediker VO₂maks for en 50-åring».
- **Typiske feil:** **#7** (b uten enhet/retning); **#6** (R² feiltolket som sammenhengens
  «riktighet»/korrelasjonsfortegn); **#5** (p-verdi feiltolket); **#14** (ignorerer effektstørrelse).
- **Kvote:** 32 quiz / 34 flashcards.

#### Kapittel 3.7: Regresjonsforutsetninger og regresjonsdrill
**id:** `nih-met200-3-7` · **number:** 3.7 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met200-3-6`

- **Kapitteltype:** drill-/tolkningskapittel (DNA C — drillvariant) + bro mot MET402.
- **Description:** Forutsetningene for lineær regresjon (lineær sammenheng + tre residualkrav) OG
  en samlet drill av regresjonstabell-tolkning (H-sjangeren) på eksamensnivå. Avslutter med bro
  mot MET402 (multippel/multivariat regresjon, ANOVA).
- **Eksamensbelegg:** Forutsetninger for lineær regresjon **6/6 = 100 %** ⭐⭐⭐; samlet
  regresjonstolkning (jf. 3.6, 6/6). Sjanger: H. Prioritet: **perfekt**. Full pott krever ALLE
  forutsetningene (#10).
- **Forkunnskaper/kryssbok:** kap. 3.6 (regresjonstolkning). `collapsible` **Symbol- og
  formelliste:** residual, konstant varians (homoskedastisitet), uavhengighet, normalfordeling av
  residualer, lineær sammenheng — «Oppslagsverk …». **«Sist du var her»:** frisk opp
  $Y = a + bX$, b-tolkning med enhet, R² (fra 3.6).
- **Begrepskontrakt (flashcard-kilde):** **regresjonens fire forutsetninger:** (1) **lineær
  sammenheng** mellom X og Y; (2) **konstant varians** i residualene (homoskedastisitet);
  (3) **uavhengighet** mellom residualene; (4) **normalfordelte residualer**; hvordan hver sjekkes
  kvalitativt (residualplott — bør kjenne til). **Bro mot MET402 (prosa):** MET200 dekker enkel
  lineær regresjon (én X); MET402 utvider til multippel regresjon (flere X), ANOVA og multivariat
  analyse — grunnmuren herfra tas med videre. Ingen markdown-lenke (MET402-boka bygges parallelt).
- **Løsningsoppskrift (drill):** algoritmisk tolkning av en regresjonstabell (b→R²→p→prediksjon) +
  sjekk av forutsetningene.
- **Gjennomtolket eksamenscase** med sensor-margnotater (hva gir uttelling ved hvert steg).
- **Kald bank (jf. README «Difficulty-spredning»):** 8–10 tabelltolkings-varianter UTEN hint, kun
  momentliste-fasit, tydelig merket «kald bank» (uvante datasett/vinklinger — negativ vs. positiv b,
  lav vs. høy R², prediksjon utenfor datarommet med forbehold).
- **Typiske feil:** **#10** (nevner ikke alle fire forutsetningene — full pott krever lineær + tre
  residualkrav); forveksle forutsetningene med tolkningen.
- **Kvote:** 28 quiz / 28 flashcards.

**Prøve-kvote Del 3:** **4 prøver** (én prøve per økt — Del 3 er tyngst, del over flere kvelder):
3.A variabeltyper + deskriptiv + normalfordeling/KI · 3.B hypotesetest (H₀/H₁, p-verdi, feiltyper) +
t-test (parret/uparret) · 3.C korrelasjon + regresjonstolkning (b/R²/prediksjon, H-sjanger) ·
3.D regresjonsforutsetninger + samlet Del 3-prøve på eksamensnivå. Selvdiagnose-sjekkliste etter hver.

### Del 4 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 4.1: Sjangerspill og begrepsvaksine-bank
**id:** `nih-met200-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met200-3-7`

- **Kapitteltype:** sjangerkapittel + repetisjonsbank (DNA C/drøfting).
- **Description:** Løsningsoppskrifter for alle ni sjangre (A–I) på ÉN side hver (sjanger → trinn →
  tidsbudsjett → vanligste feil), pluss den samlede begrepsvaksine-banken (forvekslingsparene) og
  «hvem eier hva»-kortet (case → begrep → poeng) for repetisjon.
- **Eksamensbelegg:** Metakapittel — dekker alle sjangre A–I og feilkodene #1–#14. Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka (Del 0–3). `collapsible` **Samlet oppslagskort** (jf.
  README): begrepsvaksine-tabellen (forvekslingspar → skarp forskjell) + sjangerkort A–I i én
  printbar tabell + de faste listene (kausalitetskriterier, RCT-momenter, forskningsprosess,
  utvalgsstrategier, evidenspyramide, regresjonsforutsetninger). Åpner med begrepsbank-notisen
  («repetisjonsstoff — hopp trygt over ved førstegangslesing»).
- **Innhold:** Sjangerspill: for hver sjanger A–I én løsningsoppskrift + gjennomskrevet
  minieksempel med sensorblikk. Begrepsvaksine-drill: par-øvelser på de forvekslede begrepene
  (varierte fasit-mønstre, jf. README — aldri «alle a»).
- **Sjangre/oppgavetyper:** «gitt en oppgavetekst — hvilken sjanger (A–I) og hvilken løsningsoppskrift?»;
  par-drilling av forvekslingsbegreper.
- **Typiske feil:** alle #1–#14 samlet (dette er feilregisteret).
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 4.2: Design-drøftingsverksted og kald bank
**id:** `nih-met200-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met200-1-4`, `nih-met200-2-5`

- **Kapitteltype:** sjangerverksted (DNA drøfting sjangerkapittel) + kald bank.
- **Description:** Grundig verksted for den kvalitative design-drøftingen (F-sjangeren,
  H2024-typen): oppskrift, gjennomskrevet modellbesvarelse på karakternivåer (A/B/C), binær
  selvrettingsrubrikk, og en kald bank med uvante case uten hint.
- **Eksamensbelegg:** Design-drøfting (F, H2024, 7 p — den differensierende kvalitative oppgaven).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 1.1–1.4 (hele kvalitativ del), 2.5 (forskningsetikk).
  `collapsible` **Pensumkart** samlet for kvalitativ del.
- **Innhold (DNA-drøfting modellbesvarelse):** (1) oppskrift med tidsbudsjett; (2) `collapsible`
  **A-besvarelse** (full tekst med margnotater «her: begrep + forankring», «her: begrunnelse løfter
  til A»; pausepunkt-markører mellom seksjoner); (3) `collapsible` **kommentert C-besvarelse**
  (korrekt men flat komponentliste uten begrunnelse — ÆRLIG merket C, jf. README); (4)
  `collapsible` **autentisk B-besvarelse** (ekte studentspråk, litt rotete men god, med 2–3 grep
  som skiller den fra A); (5) `tip` **Sensorblikket** (momentliste + binær selvrettingsrubrikk fra
  1.4). Minst én modellbesvarelse konkluderer SKARPT (A-konklusjonsvariasjon).
- **Kald bank:** 6–8 nyskrevne design-case (uvante idrettskontekster) UTEN hint, momentliste-fasit,
  merket «kald bank».
- **Sjangre/oppgavetyper:** F (design-drøfting) i flere varianter.
- **Typiske feil:** #12 (komponentliste uten begrunnelse; mangler forskningsetikk); uklar
  problemstilling.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 4.3: Øvingseksamener med sensorkommentert fasit
**id:** `nih-met200-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-met200-4-1`, `nih-met200-4-2`

- **Kapitteltype:** øvingseksamen (DNA C — øvingseksamen).
- **Description:** To komplette nyskrevne øvingseksamener med eksamenens tredeling og vekting
  (Del 1 kval. 15 p + Del 2 kvant. 15 p + Del 3 stat. 20 p = 50 p, 4 timer), som speiler
  temafordelingen i analysen §2. Løsningsforslag i `collapsible` per oppgave, skrevet som
  A-besvarelse, med `tip`-notat om delpoeng/vekting.
- **Eksamensbelegg:** Metakapittel — en «typisk» eksamen (de sju 100 %-temaene + roterende
  Del 1-tema + tabelltolkning), ikke en uvanlig. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. Deklareres som «2 øvingseksamener à ~4 t — kan trygt
  deles over flere kvelder / fordeles på flere søndager (deltidsrute)».
- **Innhold:** Sett 1 og Sett 2, hver med Del 1 (kval.: intervju + design-drøfting), Del 2 (kvant.:
  kausalitet/RCT + design + validitet + etikk), Del 3 (stat.: variabeltyper/deskriptiv +
  hypotesetest/t-test + regresjonstabell-tolkning). Fasit som A-besvarelse med sensorkommentar +
  selvdiagnose-sjekkliste + delpoeng. Minst ett tabelltolkings-datasett (endrede tall fra arkivets
  faste sett). Bestått-på-marginen-eksempel for minst én oppgave (jf. README «Karakter-realisme»).
- **Typiske feil:** tidsstyring (bruke for mye tid på Del 1 og for lite på Del 3 som veier tyngst);
  hoppe over begrunnelse under tidspress.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 4:** øvingseksamenene ER prøvene for Del 4 (2 komplette sett = ≥4 fullverdige
deloppgave-prøver på tvers av de tre eksamensdelene; sjangerspill (4.1) og design-verkstedet (4.2)
gir i tillegg sjangervis prøving). Dekker prøvekravet for de meta-kapitlene.

---

## 4. Kvotesammendrag og summeringskontroll

Per-kapittel-kvotene fra §3, summert per del (kontrollregnet før totalen):

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 (14/14) · 0.2 (16/20) | **30** | **34** |
| 1 | 1.1 (24/30) · 1.2 (28/34) · 1.3 (24/30) · 1.4 (26/28) | **102** | **122** |
| 2 | 2.1 (28/32) · 2.2 (30/34) · 2.3 (28/32) · 2.4 (24/28) · 2.5 (22/24) | **132** | **150** |
| 3 | 3.1 (26/30) · 3.2 (24/26) · 3.3 (30/32) · 3.4 (28/30) · 3.5 (24/26) · 3.6 (32/34) · 3.7 (28/28) | **192** | **206** |
| 4 | 4.1 (22/28) · 4.2 (18/20) · 4.3 (16/14) | **56** | **62** |
| **SUM** | **21 kapitler** | **512** | **574** |

**Summeringskontroll (regnet per kapittel):**
Quiz: 14+16 + 24+28+24+26 + 28+30+28+24+22 + 26+24+30+28+24+32+28 + 22+18+16 = **512** ✅ (≥500)
Flashcards: 14+20 + 30+34+30+28 + 32+34+32+28+24 + 30+26+32+30+26+34+28 + 28+20+14 = **574** ✅ (≥500)

Del-summene 30+102+132+192+56 = 512 (quiz) og 34+122+150+206+62 = 574 (fc) stemmer med
per-kapittel-summen. **Kvotegulv oppfylt: 512 ≥ 500 quiz og 574 ≥ 500 flashcards.**
Del 3 (statistikk) har høyest kvote (192/206), i tråd med at den er tyngst vektet på eksamen.

**Prøvekontroll:** 4 prøver Del 1 + 4 prøver Del 2 + 4 prøver Del 3 + øvingseksamener/sjangerspill
Del 4 = **≥4 prøver per temadel** (kravet oppfylt for hver av de tre eksamensdelene; Del 0 og Del 4
er metadeler dekket av øvingseksamenene).

---

## 5. Byggemerknader for forfatter-agenten

- **Arketype-splitt:** Del 0–1 + de kvalitative/definisjonstunge delene av Del 2 bygges etter
  **Kapittel-DNA A** (drøfting-nær); Del 3 etter **Kapittel-DNA B** (statistikk-tolkning); 3.7 +
  Del 4 etter **Kapittel-DNA C** (drill/verksted/øvingseksamen). Se §2.
- **Sportskontekst gjennomgående, men INGEN fysiologisk dybdegjentakelse** — bruk NIH-søsken
  (nih-thp202, nih-idr109) som kontekst via kryssref., ikke som innhold. Verifiser lenkene finnes.
- **Alle tall/case nyskrives** (§6-analogt): endre verdiene i de faste eksempeldatasettene (§2);
  ALDRI gjengi arkivets oppgavetekster eller sensorveiledninger ordrett.
- **Statistiske påstander etterregnes numerisk** (DNA-regnefag matematisk sannhetskontroll) FØR de
  skrives — særlig konsistens mellom b, R², p og prediksjon i hvert konstruerte datasett.
- **Usikre faktapåstander** (emneansvarlig, pensumutgaver, REK/Sikt-rolledeling, gjeldende
  hjelpemiddelregime/formelsamling, de faste tallverdiene, kryssref.-lenker) er merket
  `(verifiser)` — behold merkingen til fase 6-verifikasjon.
- **competenceGoals** skrives som Skolesagas egne, eksamensforankrede mål (destillert fra analysen)
  — ALDRI kopi av NIHs offisielle læringsutbytte; sjangerkoder/feilkoder aldri kald i læringsmål.
- **Registrer emnet** i `src/app/trinn/hoyere/institusjoner.ts` under Norges idrettshøgskole
  med visningsnavn «MET200 Forskningsmetode»; sjekk at `hoyskole-disclaimer.tsx`-heuristikken
  treffer (metode-/statistikkfag — ikke jus/helse, men verifiser).
