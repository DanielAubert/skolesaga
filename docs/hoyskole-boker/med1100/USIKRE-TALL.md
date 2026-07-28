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
