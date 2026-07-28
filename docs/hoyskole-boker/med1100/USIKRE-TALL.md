# Usikre tall og påstander — med1100

Logg etter BYGGEKONTRAKT §M3. Hver verdi som ikke lar seg belegge i standard
pensumlitteratur, føres her med kapittel-id, verdien, kilden og status. Et
usikkert tall skal ALDRI være fasit i quiz, flashcard eller prøve.

| Kapittel | Verdi / påstand | Hvor den kommer fra | Status |
|---|---|---|---|
| med1100-0-1 | Poenggivingen for «velg to» i blokk 3 (om begge må være riktige for uttelling) | Ligger i oppsettet i eksamenssystemet, ikke dokumentert i oppgavesettene (analysen §4, blokk 3) | Omtalt som **antatt konvensjon**, aldri som fastslått, i kap. 0.1 (definisjonen «Velg-to-oppgaven») og kap. 0.2 (kredittregel 5 og oppgave 8). Er ikke fasit noe sted. |
| med1100-0-2 | Poenggivingen for «velg to» i blokk 3 | Samme som over | Samme håndtering; se kredittregel 5. |
| med1100-1-1 | Meiosens detaljerte fasetall (varighet og navngitte underfaser i profase I) | Skjelettets faktakontrakt for kap. 1.1 markerer detaljert fasetall som uverifisert | **Utelatt som kjernestoff.** Nøkkelfaktalisten nevner underfasenavnene som en «bør kjenne til»-notis og sier eksplisitt at boka ikke går inn i fasenavn eller varighet. Ingen tallverdi brukt; ikke fasit noe sted. |
| med1100-1-2 | Normal arteriell blod-pH **7,35–7,45** | Skjelettets faktakontrakt for kap. 1.2 (merket usikker der) | **Belagt** i standard fysiologipensum som veletablert normalverdi. Skrevet UTEN forbehold, jf. §M3 siste kulepunkt. Brukt som fasit i quiz og i prøve 2, oppgave 4. |
| med1100-1-2 | CO₂-transportens fordeling **~10 % oppløst / ~20 % Hb-bundet / ~70 % bikarbonat** | Eldre eksamenssett (2021–2022), merket `(verifiser)` i EKSAMENSANALYSE.md §6 | **Usikker.** Står i prosa og i nøkkelfaktalisten med standardforbeholdet «Tallet er hentet fra eldre eksamenssett og er ikke kontrollert mot gjeldende pensum — sjekk pensumboka før du pugger det.» Prosentandelene er IKKE fasit noe sted: quiz, oppgave 6 og prøve 2 spør kun etter **rekkefølgen** (bikarbonat størst, oppløst minst), som er standard fysiologi. |
| med1100-1-2 | Hvilenivåer: slagvolum ~70–90 mL, hjertefrekvens ~60–80 slag/min, minuttvolum ~5 L/min | Standard fysiologipensum | **Belagt**, men brukt kun som **rimelighetssjekk** (størrelsesorden), ikke som fasit. Alle tallverdier i regneoppgavene er nyskrevne og valgt for at regnestykkene skal gå opp. |
| med1100-1-3 | **~99 %** av filtrert vann reabsorberes, og glukose reabsorberes **~100 %** | Eldre eksamenssett; oppført i BYGGEKONTRAKT §M4-lista | **Usikker.** Prosentandelene står kun i nøkkelfaktalisten, med standardforbeholdet. De er IKKE fasit noe sted. Det kvalitative faktumet «under normale forhold finnes det praktisk talt ikke glukose i urinen» er belagt i standard fysiologipensum og brukes i stedet der oppgavene trenger et sikkert svar. |


---

## Del 2 og Del 3 (atferdsfag + samfunnsmedisin)

| Kapittel | Verdi | Hvor den kommer fra | Status |
|---|---|---|---|
| med1100-3-3 | Ikke-smittsomme sykdommers andel av global død, ~74 % | EKSAMENSANALYSE.md §6 (Samfunnsmedisin – nøkkeltall), merket *(verifiser)* | Merket i prosa (Nøkkelfakta-listen + eget tallfakta-avsnitt). IKKE fasit noe sted. Venter fagfellesjekk mot gjeldende pensum. |
| med1100-3-3 | Offentlig andel av helsefinansieringen i Norge, ~85 % | EKSAMENSANALYSE.md §6 (Samfunnsmedisin – nøkkeltall), merket *(verifiser)* | Merket i prosa (Nøkkelfakta-listen + eget tallfakta-avsnitt). IKKE fasit noe sted. Venter fagfellesjekk mot gjeldende pensum. |

## Belagte tall i Del 2–3 (brukt UTEN forbehold)

| Kapittel | Verdi | Belegg |
|---|---|---|
| med1100-3-3 | Iskemisk hjertesykdom er ledende dødsårsak globalt og nasjonalt | Standard folkehelsestoff, ikke merket usikkert i EKSAMENSANALYSE.md |
| med1100-3-3 | Forvaltningsnivåene: kommune = fastlege/allment, fylkeskommune = tannhelse, stat/helseforetak = spesialisthelsetjeneste | Standard fagstoff, ikke merket usikkert i analysen |
| med1100-3-1, 3-2, 3-3 | Alle tallverdier i regneeksempler, oppgaver og prøver | NYSKREVNE, fiktive kalibreringer. Hver enkelt etterregnet med python3 før den ble skrevet inn. Ingen av dem er normalverdier eller prevalenser fra virkeligheten. |
| med1100-2-1, 2-2 | Ingen tallverdier utover frekvenstall fra skjelettet | Frekvenstallene (14/16, 12/16, 11/16, 10/16, 6/16, 5/16) er tatt ORDRETT fra SKJELETT.md og er ikke omregnet |

---

## Del 4 (medisinsk statistikk med regning)

**Ingen usikre tall i Del 4.** Ingen av de ti verdiene på §M4-lista hører til denne
delen, og kapitlene 4.1–4.5 og 4.P inneholder **ingen prevalens, insidens eller
normalverdi fra virkeligheten**. Ingen kapittelfil i Del 4 bruker
standardforbeholdet, fordi det ikke er noe å ta forbehold om.

### Belagte konstanter i Del 4 (brukt UTEN forbehold)

| Kapittel | Verdi | Belegg |
|---|---|---|
| 4.1, 4.2, 4.3 | Kritisk verdi **1,96** (tosidig 5 %), 1,645 (90 %), 2,576 (99 %) | Standard kvantiler i standardnormalfordelingen. Ligger i den utdelte formelsamlingen/tabellsamlingen i blokk 1 (§B1). Etterregnet med `scipy.stats.norm`. |
| 4.1, 4.2 | $t$-tabellen, tosidig 5 %: 2,262 (df 9) · 2,201 (11) · 2,145 (14) · 2,131 (15) · 2,093 (19) · 2,064 (24) · 2,045 (29) · 2,021 (40) · 2,000 (60) · 1,980 (120) | Standard $t$-kvantiler. Hver verdi etterregnet med `scipy.stats.t.ppf(0.975, df)` før den ble skrevet inn. |
| 4.3 | Kritisk $\chi^2$ = **3,84** (1 fg, 5 %) og 6,63 (1 %); sammenhengen $\chi^2 = z^2$ og $1{,}96^2 = 3{,}8416$ | Standard kji-kvadratkvantiler; etterregnet med `scipy.stats.chi2`. |
| 4.4 | Styrkekonstant $k \approx 10{,}5$ (90 % styrke) og $k \approx 7{,}9$ (80 %) ved tosidig 5 % | Standardformel $k = (z_{\alpha/2}+z_\beta)^2$. Etterregnet: $(1{,}96+1{,}2816)^2 = 10{,}51$ og $(1{,}96+0{,}8416)^2 = 7{,}85$. Verdiene er også oppgitt i skjelettets faktakontrakt for 4.4. |
| 4.4 | Normaltilnærmingsbetingelsen $np \ge 5$ og $n(1-p) \ge 5$ | Standard lærebokkriterium, samme som i 4.1. |
| 4.5 | $V_c = 1 - 1/R_0$ og $R_{\text{eff}} = R_0 \cdot S$; $P(\text{minst én falsk positiv}) = 1-(1-\alpha)^m$; Bonferroni $\alpha/m$ | Standard epidemiologiske og statistiske formler. Alle utregnede verdier (75 %, 80 %, 91,7 %, 44,4 %, 66,7 %; 23/40/54/64/87 %) etterregnet med python3. |
| 4.1–4.5, 4.P | **Alle** tallverdier i regneeksempler, oppgaver og prøver | NYSKREVNE, fiktive kalibreringer, valgt for at regnestykkene skal gå opp. Hvert eneste tall — konfidensgrenser, teststatistikker, χ², OR, RR, PR, RD, utvalgsstørrelser, binomiske forventninger, Kaplan-Meier-produkter og flokkimmunitetsterskler — er etterregnet med python3/scipy før det ble skrevet inn. Ingen av dem er en prevalens, insidens, normalverdi eller dose fra virkeligheten. |
| 4.5 | Reproduksjonstallene $R_0 = 12$, 5, 4, 3 og 1,8 | **Konstruerte, ikke hentet fra litteratur.** Merket i teksten som «et tenkt smittsomt agens» og «alle reproduksjonstall er konstruerte for regningens skyld», nettopp for å unngå å knytte et tall til et virkelig smittestoff. Brukt kun som regnegrunnlag. |

### Frekvenstall i Del 4

Alle frekvenspåstander i Eksamensvinkel-tipene er tatt **ORDRETT** fra SKJELETT.md
med blokk 1s nevner 16, og er ikke omregnet til prosent (§B5): KI ~15/16 (4.1) ·
hypotesetest ~15/16, t-test ~11/16, p-verdi ~9/16 (4.2) · 2×2 med kji-kvadrat
~12/16 og effektmål med tolkning ~12/16 (4.3) · utvalgsstørrelse/styrke ~10/16 og
binomisk fordeling ~7/16 (4.4) · R₀/flokkimmunitet ~6/16, Kaplan-Meier ~6/16,
regresjon/korrelasjon ~6/16, statistisk mot klinisk signifikans ~5/16, multippel
testing ~3/16 (4.5).

Én kildepåstand i 4.3 er blokk-scopet etter kildereglene: «sensorveiledningen i
blokk 1-settene H25 og V26 godtar begge veier» (om kji-kvadrat mot z-test).

---

## Del 5 (histologi og vevstolkning)

**Ingen usikre tall i Del 5.** Kapitlene 5.1, 5.2 og 5.P inneholder ingen
normalverdi, ingen dose og ingen prevalens — stoffet er rent kvalitativt
(fargelogikk, morfologiske kjennetegn, vevstyper). Ingen kapittelfil i Del 5
bruker standardforbeholdet, fordi det ikke er noe å ta forbehold om.

### Belagte påstander i Del 5 (brukt UTEN forbehold)

| Kapittel | Påstand | Belegg |
|---|---|---|
| 5.1 | Hematoksylin er basisk og binder negativt ladde molekyler (DNA/RNA) → blått; eosin er surt og binder positivt ladde molekyler (cytoplasmaprotein, kollagen) → rosa; PAS farger karbohydrater (mucin, basalmembran, glykogen) → magentarødt | Standard histologisk fargelære, jf. skjelettets faktakontrakt for 5.1. Ikke merket usikkert i EKSAMENSANALYSE.md |
| 5.1 | Epiteltypene og deres typiske lokalisasjoner; serøst mot mukøst endestykke (cytoplasmafarge, kjerneform, lumenvidde, PAS) | Standard histologi, jf. skjelettets faktakontrakt |
| 5.2 | Eukromatin lyst/aktivt mot heterokromatin mørkt/inaktivt; mye ruER + stor nukleolus = høy proteinsyntese; osmiumsyre farger lipid (myelin); de tre muskeltypenes kjennetegn; ben forkalket med canaliculi mot brusk uforkalket og karløst | Standard histologi/celle­biologi, jf. skjelettets faktakontrakt for 5.2 |
| 5.1, 5.2, 5.P | Alle bildebeskrivelser, case og modellbesvarelser | NYSKREVNE. Ingen beskrivelse er hentet fra et virkelig preparat, og de fire SVG-figurene er skjematiske tegninger merket som sådan (§G1) |

### «Ikke forventet»-stoff plassert som kjenne-til (§M5)

| Kapittel | Stoff | Håndtering |
|---|---|---|
| 5.1 | Fargekjemien bak hematoksylin (oksidasjon til hematein, metallbeis) og navnene på spesialfargingene ved siden av HE og PAS | Står som «bør kjenne til, ikke pugge» sist i Nøkkelfakta-listen, med henvisning til pensumboka. Ikke fasit noe sted |
| 5.2 | Ribosomets subenheter og sedimentasjonstall; mtDNAs lengde og genantall | Står som «bør kjenne til, ikke pugge» sist i Nøkkelfakta-listen. Ingen tallverdi oppgitt, og det er ikke fasit noe sted. Dette er stoff sensorveiledningene i blokk 2-settene eksplisitt markerer som ikke forventet |

---

## Del 6 (metabolisme og biokjemi)

### Verdi som er håndtert etter §M3 / §M5

| Kapittel | Verdi | Hvor den kommer fra | Status |
|---|---|---|---|
| med1100-6-2 | Samlet ATP-utbytte ved fullstendig oksidasjon av palmitat (og av glukose) | Lærebøker oppgir ulike totaltall, fordi de bruker forskjellige omregningsfaktorer fra NADH og FADH₂ til ATP | **Utelatt som tallverdi.** Boka oppgir bevisst *intet* totaltall. Nøkkelfakta-listen sier eksplisitt at lærebøker oppgir ulike tall og hvorfor, og at oppgave G ber om **tellingen** av acetyl-CoA, FADH₂ og NADH — ikke om et totalt ATP-tall. Ingen tallverdi brukt; ikke fasit noe sted |

### Belagte tall og formler i Del 6 (brukt UTEN forbehold)

| Kapittel | Verdi | Belegg |
|---|---|---|
| 6.1 | Glykolyse netto **2 ATP + 2 NADH + 2 pyruvat** per glukose (2 investert, 4 høstet); anaerobt til laktat **2 ATP og 0 NADH** | Standard biokjemi og skjelettets faktakontrakt for 6.1. Regnskapet etterregnet ledd for ledd |
| 6.1 | Glukoneogenesen koster **6 høyenergifosfat per glukose** (4 ATP + 2 GTP) pluss 2 NADH; **2 pyruvat → 1 glukose** | Standard biokjemi. Alle skalerte utregninger (12 mmol laktat → 6,0 mmol glukose → 36 mmol NTP) etterregnet med python3 |
| 6.1 | F2,6BP aktiverer PFK-1 og hemmer FBPase-1; insulin hever, glukagon senker; glukose-6-fosfatase **kun i lever og nyrebark**; pentosefosfatshunten gir NADPH, ikke ATP | Standard biokjemi og skjelettets faktakontrakt |
| 6.2 | β-oksidasjon: **1 acetyl-CoA + 1 FADH₂ + 1 NADH per runde**; runder $= n_C/2 - 1$; acetyl-CoA $= n_C/2$; aktivering koster tilsvarende **2 ATP, én gang per fettsyre** (ATP → AMP) | Standard biokjemi og skjelettets faktakontrakt for 6.2. Alle tabellrader (C12–C20) og alle oppgavesvar etterregnet med python3 |
| 6.2 | Malonyl-CoA hemmer CPT-1; leverglykogen → blodglukose, muskelglykogen → muskelen selv; insulin/glukagon-bryteren | Standard biokjemi og skjelettets faktakontrakt |
| 6.3 | Michaelis-Menten $V_0 = V_{\max}[S]/(K_m+[S])$; Lineweaver-Burk med y-skjæring $1/V_{\max}$, x-skjæring $-1/K_m$, stigningstall $K_m/V_{\max}$; $k_{\text{cat}} = V_{\max}/[E]_T$; kompetitiv ↑Km/=Vmax, ikke-kompetitiv ↓Vmax/=Km | Standard enzymkinetikk og skjelettets faktakontrakt for 6.3 |
| 6.4 | Molare masser: NaCl **58,44**, KCl **74,55**, glukose **180,16** g/mol | Standard kjemiske standardverdier |
| 6.4 | Osmotisk aktive partikler: glukose og urea 1, NaCl og KCl 2, CaCl₂ 3 | Følger direkte av formelenhetenes oppløsning i ioner |
| 6.4 | Osmolariteten i kroppens egne væsker ligger **rundt 0,3 osmol/L** | Standard fysiologipensum. Brukt **kun som kontroll av størrelsesorden** i regneoppgaver, aldri som fasit på et spørsmål |

### Konstruerte undervisningsverdier (merket i teksten)

| Kapittel | Verdier | Håndtering |
|---|---|---|
| 6.3 | Alle Km-, Vmax-, kcat- og hemmerverdier (Km 2,0/6,0 mM, Vmax 100/50, kcat 200 min⁻¹ osv.) | **Konstruerte undervisningsverdier**, merket som det i kapitlets Oversikt, i figurteksten og i hver enkelt oppgavetekst. De er ikke målinger fra noe virkelig enzym og er aldri knyttet til et navngitt enzym. Alle avlesninger og kontrollregninger etterregnet med python3 |
| 6.4 | Alle stoffer («stoff X», «stoff Y», «stoff Z», «stoff W», «stoff M», «stoff Q»), doser, konsentrasjoner og molare masser i regneeksemplene | **Oppdiktede stoffer og konstruerte verdier**, merket som det i den innledende forbeholdsboksen og i hver oppgavetekst. Ingen tallverdi er hentet fra et virkelig legemiddel. Alle utregninger etterregnet med python3 |
| 6.1, 6.2, 6.P | Alle stoffmengder i regneoppgavene (mmol glukose, mmol laktat, mmol fettsyre) | NYSKREVNE kalibreringer, valgt for at regnestykkene skal gå opp. Etterregnet med python3 |

### Helsefaglig forbehold (§H2)

Den stående forbeholdsnotisen står ordrett i **kap. 6.4**, som egen `warning`-blokk
rett etter Eksamensvinkel-tipen, med en tilleggsavsnitt om hvorfor akkurat det
kapitlet trenger den ekstra tydelig: regnestykkene ligner doseringsregning, men
tester enhetskonvertering og forholdsregning i eksamensformat.

### Frekvenstall i Del 5–6

Alle frekvenspåstander i Eksamensvinkel-tipene er tatt **ORDRETT** fra SKJELETT.md
med blokk 2s nevner 14, og er ikke omregnet til prosent (§B5): histologi
oppgave A **14/14** med vekttall 9–12 (5.1, 5.2) · metabolisme oppgave G
**14/14** med vekttall 14–22 (6.1, 6.2) · enzymkinetikk oppgave F **~13/14** med
opptil 18 vekttall (6.3) · konsentrasjons-/doseringsregning **14/14** med 2–3
vekttall (6.4).

Kildepåstandene om sensorveiledninger er blokk-scopet: «sensorveiledningene som
ligger i blokk 2-settene (2022h–2025h)» — brukt i 6.1, 6.3 og 6.4 om at det ikke
trekkes for følgefeil, at enhetskonvertering er poenggivende, og at enzymnavn i
parentes ikke forventes.


---

## Del 11 og Del 12 (mikrobiologi + blod og hematologi)

| Kapittel | Verdi / påstand | Hvor den kommer fra | Status |
|---|---|---|---|
| med1100-12-1, 12-2 | Nøytrofilens halveringstid i blod, **under ett døgn** | EKSAMENSANALYSE-linja i skjelettets faktakontrakt for kap. 12.1, der verdien er merket usikker | **Usikker.** Står i prosa (definisjonen «Nøytrofil granulocytt») og i Nøkkelfakta-listen, hver gang med standardforbeholdet «Tallet er hentet fra eldre eksamenssett og er ikke kontrollert mot gjeldende pensum — sjekk pensumboka før du pugger det.» Tallet er IKKE fasit noe sted: quiz, oppgave 12.1-4 og prøve 1 spør bare etter det kvalitative — at omløpstiden er **kort**, og at margen derfor må produsere kontinuerlig. |
| med1100-12-2 | Hvor mye **hemostase** faktisk testes i blokk 3 | Skjelettets Del 12-innledning markerer dekningen som uverifisert («virker underrepresentert i uttrekket») | **Ingen frekvenspåstand skrevet.** Eksamensvinkelen i kap. 12.2 sier eksplisitt at hemostase er sparsomt representert i det leste materialet, at flere blokk 3-filer bare inneholder deler av settet, og at dekningen derfor verken kan tallfestes eller avskrives. Ingen «N av M»-påstand brukt for hemostase. |
| med1100-12-1 | Differensialtellingens **prosentområder** for de fem hvite celletypene | Standard hematologipensum; områdene varierer mellom laboratorier | **Bevisst utelatt som tallverdier.** Boka oppgir bare **rekkefølgen** (nøytrofile flest, så lymfocytter, monocytter, eosinofile, basofile færrest) og sier at prosentområdene varierer mellom laboratorier. Rekkefølgen er fasit i quiz og prøve; ingen prosentverdi er det. |
| med1100-11-2 | Resistensprosenter, MIC-verdier og doser | — | **Ingen slike tall finnes i kapitlet.** Kapitlet er skrevet rent mekanistisk: angrepspunkt og resistensmekanisme, uten en eneste tallverdi. Ingen dose, ingen konsentrasjon, ingen andel resistente. |

## Belagte tall i Del 11–12 (brukt UTEN forbehold)

| Kapittel | Verdi | Belegg |
|---|---|---|
| med1100-12-1 | Erytrocyttens levetid **omtrent 120 døgn** | Veletablert normalverdi i standard fysiologi- og hematologipensum; ikke merket usikker i skjelettet |
| med1100-12-1 | Trombocyttens levetid **omtrent en uke til ti døgn** | Standard hematologipensum. Oppgitt som et spenn, ikke som en eksakt verdi, og ikke brukt som fasit i quiz eller prøve |
| med1100-12-1 | Hematopoiesens lokalisasjon gjennom livet (plommesekk → lever og milt → benmarg; hos den voksne aksialt skjelett + proksimale ender av lårben og overarmsben) | Standard fagstoff, oppført i skjelettets faktakontrakt uten usikkerhetsmerking. Brukt som fasit |
| med1100-12-2 | Blod-pH **7,35–7,45** (referert fra [kap. 1.2](/med1100/med1100-1-2)) | Allerede belagt i denne loggen for kap. 1.2. Brukt kun som repetisjon i Forkunnskaper-blokken, ikke som fasit i Del 12 |
| med1100-12-2 | Hemoglobinets **fire** bindingsseter for oksygen | Standard fagstoff. Brukt som fasit |
| med1100-12-2 | P50 og andre tallverdier på metningskurven | **Ikke brukt.** Figuren `bohr-kurven.svg` har bevisst umerkede akser, og teksten sier det: kurvens form og forskyvningsretning er fasit, ingen tallverdi |
| med1100-11-1, 11-2, 11-3 | Frekvenstallene «3 av 3 leste sittinger» (pneumokokk-kapsel, antibiotikamekanismer) og «2 av 2 leste sittinger» (normalflora/mikrobiom) | Tatt ORDRETT fra SKJELETT.md. Ikke omregnet til prosent og ikke slått sammen med andre nevnere (§B5) |
| med1100-11-1, 11-2, 11-3, 12-1, 12-2 | Alle case, preparatbeskrivelser og bakterie-/virusstammer | NYSKREVNE og fiktive. Ingen ekte pasient, intet ekte prøvemateriale, ingen oppdiktede latinske navn — artsnavnene som brukes (*Streptococcus pneumoniae*, *Staphylococcus aureus*, *Neisseria meningitidis*, *Mycoplasma*, *Candida albicans*) er standard fagstoff |

---

## Del 7 og Del 8 (molekylærbiologi/genetikk + signalering/cellesyklus/celledød)

Ingen verdi i disse to delene er hentet fra en kilde som er merket usikker i
`EKSAMENSANALYSE.md`, og ingen av dem er en normalverdi, prevalens eller
mutasjonsrate fra virkeligheten. Alle tallverdier i regneeksempler, oppgaver og
prøver er **nyskrevne, fiktive kalibreringer**, valgt for at regnestykkene skal
gå opp, og hver enkelt etterregnet med `python3` før den ble skrevet inn.

| Kapittel | Verdi / påstand | Hvor den kommer fra | Status |
|---|---|---|---|
| med1100-7-1 | Alle lengder i genstruktur-regningen (mRNA 2 148 nt, startposisjon 212, 573 aminosyrer, gen 24 600 bp, 19 eksoner osv.) | NYSKREVNE, fiktive kalibreringer | **Ikke usikre tall** — de er konstruerte oppgavedata, ikke måleverdier. Hver utregning etterregnet med python3. Ingen av dem framstilles som et virkelig gen. |
| med1100-7-2 | Alle slektstrær, personer og bærerfrekvenser (1 av 50, 1 av 25) | NYSKREVNE, fiktive | **Ikke usikre tall.** Bærerfrekvensene er **oppgitt i oppgaveteksten** og eksplisitt merket som oppdiktede. Kapitlet slår fast at alle slektstrær og personer er oppdiktet, og at innholdet ikke er genetisk veiledning (§H7). |
| med1100-7-3 | Hardy-Weinberg-eksemplene (prevalens 1/10 000 → q = 0,01, 2pq = 0,0198; 1/2 500; 1/1 600; 160 av 250 000) | Det faste regneeksempelet i SKJELETT.md §3 (kap. 7.3) pluss egne varianter | **Ikke usikre tall.** Dette er illustrasjonstall for en matematisk sammenheng, ikke forekomsttall for noen virkelig tilstand — og kapitlet sier det eksplisitt («alle tallverdiene i dette kapitlet er oppdiktede»). Alle utregninger etterregnet med python3, inkludert seleksjonsformelen q′ = q/(1+q) over fem generasjoner. |
| med1100-8-1 | Forsterkningseksempelet 20 · 500 · 100 = 1 000 000 | NYSKREVET | **Eksplisitt merket i teksten** som «et regneeksempel med fiktive, tydelig merkede tall … tallene er oppdiktede og skal ikke pugges». Poenget er at leddene ganges, ikke tallverdiene. Er IKKE fasit i quiz, flashcard eller prøve. |
| med1100-8-3 | Nukleosomavstanden **~200 basepar**, som gir DNA-stigemønsteret | SKJELETT.md §3 (kap. 8.3) faktakontrakt: «DNA-stigemønster = fragmenter i n × ~200 bp (nukleosomavstand)». Ikke merket usikker der. | **Belagt** som veletablert standard i pensumlitteraturen i cellebiologi. Skrevet UTEN forbehold, jf. §M3 siste kulepunkt, og alltid med tilde («rundt 200 basepar») og med det den er avstanden mellom. Brukt i quiz kun i spørsmål om **mekanismen** (at CAD kutter mellom nukleosomene), ikke som et tall som skal gjengis. |

## Frekvenspåstander i Del 7 og Del 8 (blokk 2, nevner 14)

Tatt **ORDRETT** fra `SKJELETT.md` §3 og ikke omregnet. Blokk 2 har nevner 14
(14 sittinger 2022h–2025h), jf. BYGGEKONTRAKT §B5.

| Kapittel | Påstand i boka | Skjelettets Eksamensbelegg |
|---|---|---|
| 7.1 | «rundt 11 av de 14 leste sittingene» (molekylærmetoder) · «rundt 8 av de 14» (genstruktur-regning) | Molekylærmetoder ~11/14; genstruktur-regning ~8/14 |
| 7.2 | «14 av de 14 leste sittingene» | Oppgave E genetikk **14/14** |
| 7.3 | «rundt 7 av de 14 leste sittingene» | Hardy-Weinberg-beregning (2pq) ~7/14 |
| 7.4 | «rundt 11 av de 14» (meiose/kromosomavvik) · «rundt 7 av de 14» (epigenetikk) | Meiose/kromosomavvik ~11/14; epigenetikk ~7/14 |
| 8.1 | «14 av de 14 leste sittingene» · «rundt 4 av de 14» (kjernereseptorklasser) | Oppgave C signalering **14/14**; kjernereseptor klasse 1/2 + domener ~4/14 |
| 8.2 | «rundt 14 av de 14 leste sittingene» | Oppgave B **~14/14** |
| 8.3 | «rundt 13 av de 14 leste sittingene» | Del av oppgave B **~13/14** |

## Poengmodellen for negativ retting (Del 7 og Del 8)

Modellen $+0{,}5$ / $-0{,}5$ / $0$ med laveste oppgavesum 0 er tatt fra
BYGGEKONTRAKT §B2 og §S1 regel 2. Forventningsverdiene som er regnet ut i
kap. 7.4, 8.1 og 8.2 (0,20 ved 70 % sikkerhet; 0 ved myntkast; −0,17 ved blind
gjetning blant tre klasser) er **egne utregninger på den oppgitte modellen**,
etterregnet med python3. De er ikke observerte tall fra oppgavesett.
