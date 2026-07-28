# Bokskjelett: FIN 3521 Finansiering av bedrifter — eksamensrettet lærebok

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


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (5 komplette skoleeksamenssett: Høst 2024, Vår 2025, Høst 2025 og to udaterte
> `FIN 35211`-sett; **ingen sensorveiledninger** — sensorkrav og karakterskiller
> er utledet av oppgavetekstenes instruksjoner og standard finansfaglig
> rettingspraksis, og merkes `(verifiser)` i den ferdige boka). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Nærmeste forbilder:
> `econ2500` (regnetung corporate finance) og `bok3423-bi` (samme institusjon,
> BI-format med «vis utregning»). **Kalibrer faglig utelukkende mot
> FIN 3521-analysen** — econ2500/bok3423-bi er **format**-forbilder, ikke faglige.
>
> **Alle mønstereksempler i skjelettet har nyskrevne tallverdier og egne,
> fiktive selskapsnavn.** Forfatteren varierer dem videre — aldri kopiere inn
> tall/kontekst fra reelle sett (ikke Sofa, Art Technologies, Scan-Oil, Nordic
> Solutions, NorTron, Fantasy, Marine Shipping, Alkro, ABC/DEF, TROY/BRA,
> Poki/Ikop/Compete, Scandic, Aluma). Pensumlitteratur (Berk & DeMarzo) refereres,
> aldri siteres i lengde.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `fin3521-bi` |
| Tittel | **FIN 3521 Finansiering av bedrifter** |
| Level | `'Høyskole'` |
| Institusjon | **Handelshøyskolen BI** (videregående corporate finance; 7,5 ECTS) |
| Arketype | Regnefag (formeldrillende «videregående corporate finance» — MM-formalisme, utbytte, M&A, derivater) |
| Antall kapitler | **30** (2 eksamenskart/håndverk + 24 tema/drill + 4 eksamenstrening) + 6 prøvekapitler |
| Estimert totaltid | **≈ 30 timer** (uten prøver) |
| Quiz totalt | **536** (krav ≥500) |
| Flashcards totalt | **586** (krav ≥500) |

**Pitch (ett avsnitt):** FIN 3521 er BIs **kurs 2 i corporate finance** — det
starter der BØK 3423 (investeringsanalyse) slapp, på **finansieringssiden**.
Vurderingen er **én ren individuell skriftlig skoleeksamen som teller 100 %** —
**ingen todeling, intet Excel-/gruppecase** (motsatt BØK 3423). Settet har
**3–4 oppgaver / 100 poeng**, løses med **BI-godkjent kalkulator + ordbok på
rutet ark**, og — helt avgjørende — **uten formelsamling**. Tre temaer bærer
faget og forekommer i praksis i hvert eneste sett: **(1) utbyttepolitikk**
(dividende vs. tilbakekjøp, ex-dividende), **(2) effektiv dividendeskattesats**
($\tau^*_d$), og **(3) kapitalstruktur/rekapitalisering under Modigliani–Miller
med skatt** ($V_L = V_U + t_c D$, gjeldsfinansiert tilbakekjøp, Miller-
personskatt). **Fusjoner og oppkjøp (M&A)** er en fast fjerdeoppgave (80 %), og
et roterende femte spor er enten **opsjoner/sikring** eller **ren
kapitalstrukturteori**. Alt ligger i en gjennomgående **Modigliani–Miller-
perfekt-marked-ramme**. Boka bygges rundt disse søylene, driller formelapparatet
til det sitter **utenat** (fordi ingenting deles ut), og trener sensorens faste
feller — særlig de tre som skiller toppkarakteren.

**Kritisk regel #1 — «Forklarende beregninger forventes vist» (gjelder HELE
boka).** Hvert sett gjentar: *«Forklarende beregninger forventes vist …
manglende utregninger kan medføre poengtrekk.»* Rene tallsvar straffes — også når
svaret er riktig. Konsekvens: (i) hvert løsningsforslag skrives som en
A-besvarelse der formelen settes opp **eksplisitt før innsetting**, ett steg per
linje, med **enhet** (kr/mill./%) og en **konklusjon**; (ii) kalkulatorens
funksjoner nevnes bare som kontroll, aldri som løsning; (iii) delspørsmål som ber
om *«forklar kort og konsist»* eller *«gi en kort begrunnelse»* skal ende i en
**økonomisk tolkning** (hva $\tau^*_d$-fortegnet betyr, hvorfor kursen er uendret
ved tilbakekjøp i perfekt marked), ikke bare tallet; (iv) beslutningsoppgaver
skal ende i en **anbefaling** («bør ABC velge aksjeoppgjøret?», «hva bør
kaffeleverandøren gjøre?»).

**Kritisk regel #2 — INTET formelark: ALT formelapparat må pugges (gjelder HELE
boka).** Dette er bokas viktigste strukturinnsikt. Der BØK 3423 hadde et
porteføljeformelark og ECON2500 hadde det i minnet, deler FIN 3521 ut
**ingenting** utover kalkulator og ordbok. Derfor får **hvert teori- og
drillkapittel en «Pugge-boks»** (blokktype `definition` med tittelen
**«Pugge-boks — memorér disse formlene»**), plassert rett etter kapitlets teori,
som lister nøyaktig de formlene kapitlet krever utenat, med en huskeregel/mnemonic
per formel. Symbol- og formellisten (collapsible, per delkapittel) forklarer
symbolene; **Pugge-boksen** er drillverktøyet. De formlene som MÅ sitte utenat
(fra analysens §6):

| Formel | Uttrykk |
|---|---|
| MM prop. I med selskapsskatt | $V_L = V_U + t_c D$; skatteskjold på evig gjeld $= t_c D$ |
| Unlevered verdi | $V_U = \dfrac{\text{EBIT}(1-t_c)}{r_U}$ |
| MM prop. II med skatt | $r_E = r_U + \dfrac{D}{E}(r_U - r_D)(1-t_c)$ |
| WACC etter skatt | $\text{WACC} = \dfrac{E}{V}r_E + \dfrac{D}{V}r_D(1-t_c)$ |
| Miller-modell (personskatt) | $V_L = V_U + \left[1 - \dfrac{(1-t_c)(1-t_E)}{(1-t_D)}\right]D$ |
| CAPM | $r_E = r_f + \beta_E\,(E[r_m]-r_f)$ |
| Ex-dividende (perfekt marked) | $P_{ex} = P_{cum} - \text{DIV}$ |
| Ex-dividende med skatt | fall $= \dfrac{\text{DIV}(1-t_d)}{1-t_g}$ |
| Effektiv dividendeskattesats | $\tau^*_d = \dfrac{t_d - t_g}{1 - t_g}$ |
| M&A kombinert verdi | $V_{AT} = V_A + V_T + S - K$ ($S$ = synergi, $K$ = transaksjons-/overgangskostnad) |
| M&A netto nåverdi og premie | $\text{NNV} = S - \text{premie}$; premie $= (\text{pris} - \text{frittstående verdi per aksje})\cdot N_T$ |
| M&A aksjeoppgjør (simultant) | $P_{ny} = \dfrac{V_A + V_T + S}{N_A + x\,N_T}$ |
| Binomisk risikonøytral prising | $p = \dfrac{(1+r_f) - d}{u - d}$; verdi $= \dfrac{p\,C_u + (1-p)\,C_d}{1+r_f}$ |
| Put-call-paritet | $C - P = S_0 - K e^{-r_f T} = (F - K)e^{-r_f T}$, $F = S_0 e^{r_f T}$ |
| Risikonøytral state-prising | $V = \dfrac{E[CF]}{1+r_f}$; EK $= \dfrac{E[\max(CF - D,\,0)]}{1+r_f}$; gjeld $= \dfrac{E[\min(CF,\,D)]}{1+r_f}$ |

**Kritisk regel #3 — Modigliani–Miller perfekt marked er den gjennomgående
rammen (gjelder HELE boka).** Nesten hver numerisk oppgave sier «anta perfekt
MM-kapitalmarked», ofte «kun selskaps-(ett-ledds)skatt». Forutsetningene er
**ikke pynt** — de skal **brukes aktivt** i argumentasjonen: «aksjekursen er
uendret ved tilbakekjøp til virkelig verdi fordi markedet er perfekt», «dividende
og tilbakekjøp er ekvivalente fordi ingen skatt/transaksjonskostnader». Hvert
løsningsforslag som hviler på en MM-forutsetning skal **si det eksplisitt**.

**Kritisk regel #4 — INGEN flervalg (gjelder HELE boka).** Der BØK 3423 har
flervalgsbolker med straffscoring, består FIN 3521 utelukkende av **langsvars
regneoppgaver + korte teori-/drøftingsspørsmål**. **Boka skal ikke trene
flervalg for dette faget** — quiz brukes som begreps-/formeldrill, ikke som
eksamenssjanger-simulering. Teori-/drøftingsspørsmål besvares **«kort og
konsist»** (3–6 setninger) — å skrive langt gir ikke ekstra uttelling.

**Kritisk regel #5 — De tre fellene som skiller toppkarakteren (egne
warnings).** Analysens karakternivå-skille (§4) sier at A/B-besvarelser skiller
seg fra midtsjiktet på tre punkter. Disse skal ha en **dedikert `warning`-blokk**
i hovedkapitlet sitt, gjentas i Del 0 og i sluttstrategien (kap. 7.1):

1. **Aksjeoppgjør i M&A løst SIMULTANT** (kap. 5.3): antall nye aksjer og kursen
   på det sammenslåtte selskapet bestemmes samtidig — vederlaget må verdsettes
   til kursen **etter** sammenslåingen, ikke kursen før (utvanning/sirkularitet).
2. **Riktig FORTEGNSTOLKNING av $\tau^*_d$** (kap. 4.3): $\tau^*_d > 0$ betyr at
   dividende er skattemessig **ugunstig** (preferanse for tilbakekjøp), $\le 0$
   betyr dividendepreferanse. Teller og nevner må ikke byttes om.
3. **RISIKONØYTRAL opsjonsprising** (kap. 6.2/6.4): bruk **risikonøytrale**
   sannsynligheter ($p$), aldri de virkelige/objektive sannsynlighetene, og
   diskontér med risikofri rente.

**Kritisk notasjonsregel (gjelder HELE boka).** Standard corporate finance-
notasjon (Berk & DeMarzo-tradisjonen); norsk bokmål med engelsk fagterminologi i
parentes ved første forekomst (debt-to-value ratio, protective put, put-call
parity, Trade-Off Theory osv.), slik settene gjør:

| Symbol | Betydning |
|---|---|
| $V_U$, $V_L$, $V$ | verdi av ugiret (unlevered) selskap, giret (levered) selskap, $V = E + D$ |
| $E$, $D$ | markedsverdi egenkapital, markedsverdi (rentebærende) gjeld |
| EBIT | driftsresultat før renter og skatt |
| $t_c$ | selskapsskattesats (ett-ledds) |
| $t_E$, $t_D$ | personlig skatt på egenkapitalinntekt (aksje), personlig skatt på renteinntekt (Miller-modellen) |
| $t_d$, $t_g$ | personlig dividendeskatt, personlig kapitalgevinstskatt |
| $\tau^*_d$ | effektiv dividendeskattesats |
| $r_U$, $r_E$, $r_D$ | ugiret kapitalkostnad, egenkapitalkostnad, gjeldskostnad (lånerente) |
| $r_f$, $r_m$, WACC | risikofri rente, markedsavkastning, vektet gjennomsnittlig kapitalkostnad |
| $\beta_E$, $\beta_U$ | egenkapitalbeta (levered), aktivabeta (unlevered/asset beta) |
| $P_{cum}$, $P_{ex}$, DIV | aksjekurs med utbytte, kurs ex-dividende, dividende per aksje |
| $S$, $K$, $N_A$, $N_T$, $x$ | (M&A) synergi, transaksjonskostnad, antall oppkjøper-aksjer, antall målaksjer, bytteforhold |
| $S_0$, $K$, $u$, $d$, $p$, $C$, $P$, $F$, $T$ | (opsjoner) spotpris, innløsningskurs, opp-/ned-faktor, risikonøytral sannsynlighet, call, put, forwardpris, tid til forfall |
| $CF$ | (state-prising) kontantstrøm i et gitt utfall |

Skriv rentestørrelser i prosent i teksten (9 %) og desimal i formlene (0,09).
**Merk `$S$-dobbeltbruk`:** i Del 5 (M&A) er $S$ = synergi; i Del 6 (opsjoner) er
$S_0$ = spotpris. De ligger i ulike delkapitler med egne symbol-lister, så det er
entydig — men forfatteren skal aldri bruke bare «$S$» for spotpris (alltid $S_0$).
Tilsvarende: $D$ = gjeld, men dividende per aksje er alltid **DIV** (aldri «$D$»).

**Arbeidsdeling mot BØK 3423 (kritisk for bokprofil).** FIN 3521 og BØK 3423 er
**komplementære, nesten ikke-overlappende**. De deler bare CAPM fullt ut (og her
er beta som regel **gitt**, så CAPM er lettere enn i BØK 3423). Boka skal
**bygge videre på — ikke gjenta** — BØK 3423:

| BØK 3423 (kurs 1 — dekkes IKKE på nytt) | FIN 3521 (kurs 2 — dette er boka) |
|---|---|
| Kontantstrøm-konstruksjon fra resultatbudsjett (saldoavskrivning, arbeidskapital, sunk cost) | MM-formalisme (prop. I/II med skatt, Miller-personskatt) |
| NPV/IRR som lønnsomhetskriterium | Utbyttepolitikk / effektiv dividendeskattesats |
| WACC-konstruksjon som egen oppgave; porteføljeteori/effisient front | Fusjoner og oppkjøp (kontant- vs. aksjeoppgjør) |
| Excel-DCF-gruppecase + flervalg med straffscoring | Opsjoner / derivater / sikring (aldri i BØK 3423) |
| Full DCF/multippel-verdsettelse | Verdsettelse via MM-relasjoner og risikonøytral state-prising |

**Forbudte temaer (0 forekomster / BØK 3423-stoff — ta med maks én
avgrensningssetning i Del 0):** full DCF- eller multippelverdsettelse (EV/EBITDA,
P/E), porteføljeoptimering/effisient front, kontantstrøm-konstruksjon fra
resultatbudsjett, saldoavskrivning, flervalg med straffscoring, Excel-case. Disse
er BØK 3423-territorium og skal **ikke** dukke opp som oppgaver i FIN 3521-boka.
En student som har lest BØK 3423-boka kan tidsverdi, NPV/IRR og CAPM-mekanikk —
FIN 3521 forutsetter dette, men **repeterer det kompakt** (Del 1) siden
formelarket forsvinner.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: prerequisites, ikke frekvens);
frekvensen styrer *omfanget*. `sectionNames` = den beskrivende tittelen per del
(vises som «Kapittel N: …» på bokforsiden). **`number` er del-basert («2.3»),
aldri lineær** — bokforsiden grupperer på `number.split('.')[0]`. Prosareferanser
i innholdet bruker samme form («kap. 2.3»).

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart og formelpugg-håndverket (intet formelark) | 2 | — | Prioriteringsverktøy + «vis beregning»-føring + at ALT pugges (fagets viktigste strukturinnsikt) + de tre toppkarakter-fellene. Kjerne i studieguiden. |
| 1 | Repetisjon: tidsverdi, avkastningskrav og CAPM | 2 | KUNNE (fundament) | Formelarket forsvinner: kompakt repetisjon av tidsverdi/evig strøm/effektiv rente og CAPM (beta oftest gitt). Bygger på BØK 3423, gjentas ikke i bredde. |
| 2 | Kapitalstruktur under Modigliani–Miller | 7 | **PERFEKT** (STOR, 100 %) | Rekapitalisering under MM med skatt i hvert sett, 20–40 p — ofte tyngst vektet. MM I/II uten+med skatt, $V_L = V_U + t_c D$, gjeldsfinansiert tilbakekjøp, Miller-personskatt. Teori + drill. |
| 3 | Kapitalstrukturteori: imperfeksjoner og drøfting | 2 | KUNNE (40 %) | Roterende teorispor: Trade-Off, Limits to the Use of Debt (fire begrep), pecking order, dividend puzzle. «Kort og konsist» drøfting, ikke essay. |
| 4 | Utbyttepolitikk og dividendebeskatning | 5 | **PERFEKT** (STOR, 100 %) | Fagets to mest gjennomgående ferdigheter: utbytteirrelevans/ex-dividende/tilbakekjøp OG effektiv dividendeskattesats. Teori + drill. |
| 5 | Fusjoner og oppkjøp (M&A) | 4 | **PERFEKT** (80 %) | Fast fjerdeoppgave, 20–35 p. Synergi/premie/NNV, kontant- vs. aksjeoppgjør (**simultant** — utvanningsfellen). Teori + drill. |
| 6 | Opsjoner, sikring og risikonøytral prising | 4 | KUNNE (40 %) | Roterende spor: protective put, collar, binomisk (risikonøytral) prising, put-call-paritet, egenkapital som opsjon på eiendelene. Skiller FIN 3521 fra BØK 3423. |
| 7 | Eksamenstrening | 4 | — | Strategi + samlet formeloversikt (alt pugges) + sjangerguide + 3 komplette øvingseksamener (3–4 oppgaver, kalkulator, **intet formelark**). |

**Sjangerkoder** (brukt i «Oppgavesjangre» under; introduseres i Del 0 som
studentens sjekkliste):
`A` kapitalstruktur/rekapitalisering under MM med skatt ($V_L$, $r_E$, gjeldsfinansiert tilbakekjøp) ·
`B` Miller-modellen med personskatt (effektiv skattefordel av gjeld) ·
`C` utbyttepolitikk: dividende vs. tilbakekjøp, ex-dividende, indifferens i perfekt marked ·
`D` effektiv dividendeskattesats $\tau^*_d$, skatteklientell, dividend-capture ·
`E` M&A kontantoppgjør (synergi, premie, maks pris, markedspris etter) ·
`F` M&A aksjeoppgjør løst simultant (utvanning, bytteforhold) ·
`G` opsjoner/sikring: protective put, collar, binomisk, put-call, forward/termin ·
`H` risikonøytral state-verdsettelse (egenkapital som opsjon på eiendelene) ·
`I` kapitalstrukturteori-drøfting (Trade-Off, Limits to debt, pecking order, dividend puzzle) ·
`J` repetisjon: tidsverdi / CAPM / effektiv rente (fundament).

**Avvik fra DNA-malen (dokumentert):**
1. **Del 0 har to kapitler, ikke ett, OG hvert teori-/drillkapittel har en
   «Pugge-boks».** DNA legger opp til ett eksamenskart og et «på formelarket / må
   pugges»-skille. FIN 3521 har **intet formelark** — derfor får kap. 0.2 ansvar
   for føringshåndverket og selve pugge-strategien, og skillet «arket vs. pugges»
   erstattes av at **alt pugges**: hvert kapittel avslutter teorien med en
   Pugge-boks (`definition` «Pugge-boks — memorér disse formlene»). Å etablere
   føringsstandarden, pugge-metoden og de tre fellene tidlig gjør resten billigere.
2. **Egen kort repetisjonsdel (Del 1) til tross for at tidsverdi/CAPM knapt
   testes isolert.** Grunnen er at **formelarket forsvinner**: studenten som kommer
   fra BØK 3423 må ha tidsverdi, evig strøm, effektiv rente og CAPM i fingrene før
   MM-regningen. Holdt **slank (2 kapitler)** og eksplisitt merket «repetisjon —
   bygger på BØK 3423, ikke ny teori».
3. **Drillkapitlene ligger inne i temadelene sine** (2.7, 4.5, 5.4), ikke samlet i
   siste del — dette er 80–100 %-gjengangersjangre som må automatiseres rett etter
   teorien. Del 7 beholder strategi/formeloversikt og de tre øvingseksamenene.
4. **Del 2 (kapitalstruktur) er bokas STØRSTE del (7 kapitler).** Ren frekvens:
   rekapitalisering under MM med skatt er i hvert sett og ofte tyngst vektet, og
   det er her formelapparatet er størst (prop. I og II, uten og med skatt, WACC,
   gjeldsfinansiert tilbakekjøp, Miller-personskatt). Én byggeagent skal ha hele
   delen (den deler tallgrunnlag og notasjon på tvers av kapitlene).
5. **Ingen full DCF-/multippelverdsettelse og ingen porteføljeteori** (0
   forekomster; BØK 3423-stoff) — nevnes med én avgrensningssetning i Del 0. Der
   emnebeskrivelsen lover DCF/CAPM tungt, tester arkivet i stedet MM-relasjoner og
   $\tau^*_d$; boka følger arkivet, ikke emnebeskrivelsen (analysens §6).
6. **Opsjoner/derivater får egen del (Del 6, 4 kapitler) til tross for 40 %
   frekvens**, fordi de er **billige å beherske og gir stor uttelling når de
   kommer**, og fordi de (sammen med Miller-personskatt og simultant aksjeoppgjør)
   er et A/B-differensierende toppkarakter-tema. Det er også det som skarpest
   skiller FIN 3521 fra BØK 3423.

Kryssbok-lenker peker på **bi-okonomi** (Matematikk for økonomer — verifisert
bygget: `bi-okonomi-4-1` Renter og renteberegning, `-4-2` Nåverdi og
fremtidsverdi, `-4-3` Annuiteter, `-4-5` Investeringsanalyse). Lenkeform:
`[tittel](/bi-okonomi/bi-okonomi-4-2)`. **Lenk kun til disse verifiserte
id-ene.** BØK 3423-boka (`bok3423-bi`) er komplementær «kurs 1», men er ennå
**ikke bygget** — den skal **omtales i tekst** som forkunnskapskilde (NPV/IRR,
WACC, CAPM-mekanikk, kontantstrøm-konstruksjon), men det skal **ikke lenkes** til
den før den finnes (unngå døde lenker).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Prioritetsklasser: **PERFEKT** (nivå 1) /
**KUNNE** (nivå 2) / **KJENNE** (nivå 3). Hvert teori-/drillkapittel har
(spesifiseres i BYGGEKONTRAKT): Eksamensvinkel-`tip`, Forkunnskaper-`text` +
Symbol- og formelliste-`collapsible`, Motivasjon, `definition`/`theorem` i emnets
notasjon, utledning med intuisjon der eksamen krever «kunne utlede», 2–4
eksempler (siste på eksamensnivå), **Pugge-boks** (`definition` «Pugge-boks —
memorér disse formlene»), Typiske feil-`warning`, 6–12 øvinger med `solution` +
`hints`, og repetisjons-`collapsible`. Her angis innholdet blokkene skal dekke.

---

### Del 0 — Eksamenskart og formelpugg-håndverket (intet formelark)

#### Kapittel 0.1: Eksamenskartet — slik testes FIN 3521

- **id:** `fin3521-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (100 % individuell skoleeksamen, intet formelark), de fem søylene, temafrekvensene, sensorreglene, de tre toppkarakter-fellene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 5 sett. Skal gjengi: (i) **formen** — ren individuell skriftlig skoleeksamen, 100 % av karakteren, ingen todeling, intet Excel-/gruppecase; 3–4 oppgaver / 100 poeng; BI-godkjent kalkulator + tospråklig ordbok, rutet ark, **ingen formelsamling og ingen rentetabeller**; ingen flervalg. (ii) **temafrekvens-tabellen** (av 5 sett): utbyttepolitikk 5/5, effektiv dividendeskattesats 5/5, kapitalstruktur/rekapitalisering under MM med skatt 5/5, M&A 4/5, MM prop. II 3–4/5, Miller-personskatt 2/5, opsjoner/sikring 2/5, kapitalstrukturteori-drøfting 2/5, CAPM eksplisitt 1/5, risikonøytral state-verdsettelse 1/5. (iii) **den faste dramaturgien** — et representativt sett: O1/O3 kapitalstruktur (MM med skatt, 20–40 p), én utbyttepolitikk-/dividendeskatt-oppgave, én M&A-oppgave (kontant vs. aksje), én roterende (opsjoner ELLER kapitalstrukturteori ELLER state-prising). (iv) **sensorens metaregler** (se kap. 0.2). (v) **avgrensningen** — én setning: full DCF-/multippelverdsettelse, porteføljeteori, kontantstrøm-konstruksjon og flervalg forekommer **aldri** (BØK 3423-stoff), studenten kan trygt nedprioritere dem. (vi) karakterskillene (E/C-D/A-B) og de tre A/B-fellene.
- **Forkunnskaper:** ingen. Ingen symboler av betydning (metakapittel) — kort formelliste kan utelates.
- **Innholdskontrakt:** Sjangerkatalogen A–J presenteres som studentens sjekkliste med typisk plassering og vekt. Karakterskillene (utledet, merk `(verifiser)`): **bestått (E)** = riktig MM prop. I-verdi ($V_U + t_c D$), riktig $P_{ex} = P_{cum} - \text{DIV}$ i perfekt marked, riktig CAPM-innsetting, riktig grunnoppsett for M&A-NNV; **midtsjikt (C/D)** = korrekt $\tau^*_d$ med riktig teller/nevner og fortegnstolkning, korrekt MM prop. II med $(1-t_c)$-faktoren, korrekt gjeldsfinansiert tilbakekjøp (kurs stiger med $t_c D/$aksjer); **toppsjikt (A/B)** = løser aksjeoppgjør i M&A **simultant** (unngår sirkularitetsfellen), mestrer **Miller-modellen med personskatt** og tolker den effektive skattefordelen, priser opsjoner **risikonøytralt** og kobler put-call-paritet til collar, drøfter Trade-Off/Limits-to-debt presist knyttet til tall. Avslutt med **leseplan**: Del 2, 4, 5 = «må perfekt»; Del 1, 3, 6 = «må kunne»; Del 7 = sluttrening. Introduser de **tre fellene** eksplisitt (aksjeoppgjør simultant / $\tau^*_d$-fortegn / risikonøytral prising).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt at oppgave 1 teller 40 % og du har 240 minutter — sett opp et tidsbudsjett» og «hvorfor gir et riktig $V_L$-tall uten oppsatt formel likevel poengtrekk?».
- **Typiske feil:** Metafeilene: bruke like mye tid på en 15-poengsoppgave som en 40-poengsoppgave; hoppe over konklusjonen/økonomisk tolkning; tro at kalkulatorsvaret alene gir uttelling; anta at det finnes et formelark (det gjør det ikke — pugg!).
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 0.2: «Vis beregning» og formelpugg — alt må memoreres

- **id:** `fin3521-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `fin3521-bi-0-1` · **kapitteltype:** teori (metaregel)
- **description:** Fagets to ufravikelige regler operasjonalisert: hvordan skrive ut beregningen slik sensor krever, og en pugge-strategi for hele formelapparatet siden det ikke finnes noe formelark.
- **Eksamensbelegg:** Metaregel-kapittel bygget på setningen som står på hvert sett («forklarende beregninger forventes vist … manglende utregninger kan medføre poengtrekk») og på fraværet av formelsamling. Fagets sterkeste enkeltsignal + den viktigste strukturinnsikten. Prioritet: **PERFEKT** (bærer karakteren i alle sjangre).
- **Forkunnskaper:** ingen. **Symbol- og formelliste (collapsible):** den samlede pugge-oversikten fra §1 (alle 15 formelgruppene), gruppert etter del.
- **Innholdskontrakt:** **(A) Føringsstandarden**: hvert løsningsforslag skrives som A-besvarelse — sett opp formelen eksplisitt FØR innsetting, ett steg per linje, marker sluttsvaret med **enhet** (kr/mill./%) og en **konklusjon/økonomisk tolkning**; kalkulatoren nevnes bare som kontroll. To kontrastpar «samme matematikk, ulik føring» (én lav-uttellings og én full-scorings versjon, med margnotater). **(B) Pugge-oversikten** (`theorem`-blokk): alle formlene fra §1 skrevet ut og gruppert (kapitalstruktur, utbytte/dividendeskatt, M&A, opsjoner/state-prising, repetisjon), med den eksplisitte beskjeden: **ingenting av dette deles ut — alt må sitte utenat.** **(C) Pugge-metoden**: hvordan bruke Pugge-boksene i hvert kapittel + flashcards (formel↔bruk) til aktiv gjenkalling; huskeregler for de vanskeligste (Miller-klammeuttrykket, $\tau^*_d$-fortegnet, binomisk $p$). **(D) MM-forutsetningene**: hvordan «perfekt marked / kun selskapsskatt» brukes aktivt i argumentasjonen. **(E) De tre fellene** repetert som sjekkpunkt. **(F) Konklusjonskravet**: hver oppgave ender i en anbefaling eller økonomisk tolkning.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under gir riktig $V_L$-tall, men ville tapt poeng. Pek på de to føringsmanglene (formel ikke satt opp; kun kalkulatorsvar) og skriv den om til full uttelling.»
- **Typiske feil:** Oppgi svar uten beregning (poengtrekk); vise til kalkulatortaster i stedet for formel; tro at et formelark finnes; glemme enhet, konklusjon og MM-forutsetning i begrunnelsen.
- **Quiz: 16 · Flashcards: 32** (hele formelapparatet skrevet ut som formel↔bruk-kort — flashcard-gull siden alt skal pugges)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Repetisjon: tidsverdi, avkastningskrav og CAPM *(prioritet: KUNNE — fundament; bygger på BØK 3423, ikke ny teori)*

#### Kapittel 1.1: Tidsverdi, evig strøm og effektiv rente — kompakt repetisjon

- **id:** `fin3521-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** `fin3521-bi-0-2` · **kapitteltype:** teori (repetisjon)
- **description:** Rask oppfriskning av verktøyene FIN 3521 forutsetter: nåverdi, evig strøm $C/r$ (grunnlaget for $V_U$), annuitet og effektiv vs. nominell rente — fordi formelarket forsvinner.
- **Eksamensbelegg:** Ikke testet isolert, men fundament under alt: evig strøm bak $V_U = \text{EBIT}(1-t_c)/r_U$ og bak state-prising; effektiv rente bak binomisk/put-call-diskontering. Formlene **må pugges**. Prioritet: **KUNNE** (fundament).
- **Forkunnskaper:** Forutsetter grunnkurset (BØK 3423: NPV/IRR/diskontering — omtales i tekst). Bygger på [Renter og renteberegning](/bi-okonomi/bi-okonomi-4-1), [Nåverdi og fremtidsverdi](/bi-okonomi/bi-okonomi-4-2) og [Annuiteter](/bi-okonomi/bi-okonomi-4-3). **Symbol- og formelliste:** $C_t$, $r$, $t$, $n$, evig strøm, annuitet, $r_{nom}$, $r_{eff}$, $m$ — alle **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: nåverdi $\sum C_t/(1+r)^t$; **evig strøm** $\text{NV}=C/r$ (og hvorfor uendelig mange ledd gir endelig sum — kritisk for $V_U$); voksende evig $C_1/(r-g)$; annuitet $\frac{C}{r}(1-(1+r)^{-n})$; effektiv rente $r_{eff}=(1+r_{nom}/m)^m-1$; kontinuerlig forrentning $e^{rT}$ (grunnlag for put-call). **Regnekjede (nyskrevet):** et selskap har evig EBIT-basert kontantstrøm på 84 mill./år, $r_U = 12\,\%$: ugiret verdi $= 84/0{,}12 = 700$ mill. kr. Effektiv rente av 8 % nominell med kvartalsvis tilskriving: $(1{,}02)^4 - 1 = 8{,}24\,\%$.
- **Oppgavesjangre:** J. Mønstereksempel: «Et selskap gir en evigvarende kontantstrøm på 60 mill. kr per år etter skatt. Avkastningskravet er 10 %. Regn ut selskapsverdien, og forklar hvorfor den evige strømmen har en endelig nåverdi.»
- **Typiske feil:** Bruke $C/r$ på en endelig strøm; bruke nominell rente der effektiv kreves; glemme $r>g$ i voksende evig; oppgi svar uten enhet.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.2: CAPM, beta og avkastningskrav — kompakt repetisjon

- **id:** `fin3521-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `fin3521-bi-1-1` · **kapitteltype:** teori (repetisjon)
- **description:** CAPM til å finne $r_U$/$r_E$ når beta er gitt, og koblingen til MM prop. II — det eneste temaet FIN 3521 deler med BØK 3423, her som regel med beta oppgitt.
- **Eksamensbelegg:** CAPM eksplisitt i 1/5 sett (Nordic Solutions), men er verktøyet som gir $r_U$/$r_E$ inn i kapitalstrukturregningen (Del 2). Beta er **oftest gitt** — derfor lettere enn i BØK 3423. Formelen **må pugges**. Prioritet: **KUNNE** (fundament for Del 2).
- **Forkunnskaper:** Bygger på kap. 1.1 (avkastningskrav). CAPM-mekanikk og beta-estimering forutsettes kjent fra BØK 3423 (omtales i tekst). **Symbol- og formelliste:** $r_f$, $r_m$, $E[r_m]-r_f$ (markedspremie), $\beta_E$, $\beta_U$, $r_E$, $r_U$ — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: CAPM $r_E = r_f + \beta_E(E[r_m]-r_f)$; forskjellen på **aktivabeta $\beta_U$** (forretningsrisiko) og **egenkapitalbeta $\beta_E$** (forretnings- + finansiell risiko); at $r_U$ finnes ved å sette CAPM med $\beta_U$ (eller som WACC uten skatt). Kort forvarsel om at $\beta_E$ vokser med gjeldsgraden — utledes fullt i Del 2. **Regnekjede (nyskrevet):** $r_f = 3\,\%$, markedspremie 5 %, $\beta_U = 0{,}9$: ugiret krav $r_U = 3 + 0{,}9\cdot5 = 7{,}5\,\%$. Med $\beta_E = 1{,}3$: $r_E = 3 + 1{,}3\cdot5 = 9{,}5\,\%$.
- **Oppgavesjangre:** J. Mønstereksempel: «Risikofri rente er 3 %, markedets risikopremie 6 %, og selskapets aktivabeta er 0,8. Regn ut det ugirede avkastningskravet $r_U$ med CAPM, og forklar hva $r_U$ representerer.»
- **Typiske feil:** Forveksle $\beta_U$ og $\beta_E$; bruke markedsavkastningen $r_m$ i stedet for premien $(r_m - r_f)$; regne CAPM med prosent og desimal om hverandre.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 1:** 4 prøver (1.A nåverdi/evig strøm + $V_U$-oppsett, J; 1.B annuitet + effektiv rente, J; 1.C CAPM forlengs med gitt beta + $r_U$-tolkning, J; 1.D blandet fundament på oppspill mot MM-regning, J).

---

### Del 2 — Kapitalstruktur under Modigliani–Miller *(prioritet: PERFEKT — bokas STØRSTE del, 100 %)*

#### Kapittel 2.1: MM proposisjon I uten skatt — kapitalstruktur-irrelevans

- **id:** `fin3521-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `fin3521-bi-1-2` · **kapitteltype:** teori
- **description:** Grunnresultatet: i et perfekt marked er selskapsverdien uavhengig av kapitalstrukturen — «kaken endres ikke av hvordan du deler den».
- **Eksamensbelegg:** Fundamentet under all kapitalstrukturregning (100 %). Selv når oppgaven har skatt, forventes MM-logikken (arbitrasjeargumentet, «perfekt marked») uttrykt. Prioritet: **PERFEKT** (fundament).
- **Forkunnskaper:** Bygger på kap. 1.2. **Symbol- og formelliste:** $V_U$, $V_L$, $V=E+D$ — **(må pugges)**; MM-forutsetningene (perfekt marked, ingen skatt/konkurskostnad/asymmetri).
- **Innholdskontrakt:** DEFINISJON + UTLEDNING (kreves «kunne begrunne»): MM prop. I uten skatt $V_L = V_U$; **arbitrasjeargumentet** (hjemmelaget giring — investoren kan replikere enhver kapitalstruktur selv, så selskapet skaper ingen verdi ved å gire). Intuisjon: verdien bestemmes av eiendelenes kontantstrøm, ikke av finansieringsmiksen. **Pugge-boks:** $V_L = V_U$; forutsetningene. **Regnekjede (nyskrevet):** et 100 % egenkapitalfinansiert selskap er verdt 600 mill. kr. Det tar opp 200 mill. i gjeld og deler ut provenyet. I perfekt marked uten skatt: $V_L = V_U = 600$; nå $E = 400$, $D = 200$ — total uendret.
- **Oppgavesjangre:** A. Mønstereksempel: «Vis, med arbitrasjeargumentet, at et selskaps verdi er uendret om det finansieres 100 % med egenkapital eller 50/50 med gjeld, gitt perfekt marked uten skatt.»
- **Typiske feil:** Tro at gjeld «billigere enn egenkapital» øker verdien (ignorerer at $r_E$ stiger); glemme å nevne den aktive MM-forutsetningen; blande inn skatt der oppgaven sier «uten skatt».
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.2: MM proposisjon II uten skatt — egenkapitalkost og gjeldsgrad

- **id:** `fin3521-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `fin3521-bi-2-1` · **kapitteltype:** teori
- **description:** Hvorfor egenkapitalkostnaden stiger lineært med gjeldsgraden — og hvorfor WACC likevel er konstant uten skatt.
- **Eksamensbelegg:** MM prop. II er direkte eller implisitt i 3–4/5 sett (egenkapitalkost som funksjon av $D/E$). Uten-skatt-versjonen er byggesteinen for med-skatt-versjonen (kap. 2.4). Formelen **må pugges**. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 2.1 og CAPM (1.2). **Symbol- og formelliste:** $r_U$, $r_E$, $r_D$, $D/E$, WACC — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON + UTLEDNING: MM prop. II uten skatt $r_E = r_U + \frac{D}{E}(r_U - r_D)$; utledes fra at $r_U = \frac{E}{V}r_E + \frac{D}{V}r_D$ (WACC uten skatt $= r_U$, konstant). Intuisjon: mer gjeld ⇒ egenkapitalen bærer mer finansiell risiko ⇒ eierne krever høyere avkastning, akkurat nok til å holde WACC uendret. Kobling til beta: $\beta_E = \beta_U(1 + D/E)$ (uten gjeldsbeta). **Pugge-boks:** prop. II uten skatt + WACC $= r_U$ + beta-relasjonen. **Regnekjede (nyskrevet):** $r_U = 9\,\%$, $r_D = 5\,\%$, $D/E = 0{,}5$: $r_E = 9 + 0{,}5(9-5) = 11\,\%$. Sjekk: WACC $= \frac{2}{3}\cdot11 + \frac{1}{3}\cdot5 = 9\,\% = r_U$. ✓
- **Oppgavesjangre:** A. Mønstereksempel: «Et selskap har ugiret kapitalkostnad 8 %, gjeldskost 4 % og gjeldsandel $D/V = 0{,}4$. Regn ut egenkapitalkostnaden med MM prop. II uten skatt, og bekreft at WACC er lik $r_U$.»
- **Typiske feil:** Bruke $D/V$ i stedet for $D/E$ i prop. II; glemme at WACC skal komme ut lik $r_U$ (kontrollen); bruke gjeldens pålydende i stedet for markedsverdi.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.3: MM med selskapsskatt — skatteskjold og $V_L = V_U + t_c D$

- **id:** `fin3521-bi-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `fin3521-bi-2-2` · **kapitteltype:** teori
- **description:** Hvorfor gjeld skaper verdi når renter er fradragsberettiget: skatteskjoldet, og formelen for det girede selskapets verdi.
- **Eksamensbelegg:** Kjerneformelen i hvert kapitalstruktursett (100 %) — $V_L = V_U + t_c D$ med skatteskjold $t_c D$ på evigvarende gjeld. Ofte tyngst vektet. Formlene **må pugges**. Prioritet: **PERFEKT** (STØRST).
- **Forkunnskaper:** Bygger på kap. 2.1–2.2 og evig strøm (1.1). **Symbol- og formelliste:** $t_c$, EBIT, $V_U = \text{EBIT}(1-t_c)/r_U$, skatteskjold $= t_c D$, $V_L = V_U + t_c D$ — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON + UTLEDNING: rentefradraget gir en årlig skattebesparelse $t_c \cdot r_D D$; på **evigvarende** gjeld er nåverdien $\frac{t_c r_D D}{r_D} = t_c D$. Derav $V_L = V_U + t_c D$. Ugiret verdi $V_U = \frac{\text{EBIT}(1-t_c)}{r_U}$. Intuisjon: staten «subsidierer» gjeld gjennom fradraget. **Pugge-boks:** $V_U = \text{EBIT}(1-t_c)/r_U$; skatteskjold $= t_c D$; $V_L = V_U + t_c D$. **Regnekjede (nyskrevet):** EBIT 120 mill./år (evig), $t_c = 22\,\%$, $r_U = 10\,\%$: $V_U = 120\cdot0{,}78/0{,}10 = 936$ mill. Selskapet tar opp $D = 300$ mill. evig gjeld: skatteskjold $= 0{,}22\cdot300 = 66$; $V_L = 936 + 66 = 1002$ mill. kr.
- **Oppgavesjangre:** A. Mønstereksempel: «Et selskap har evigvarende EBIT på 90 mill. kr, $t_c = 22\,\%$, $r_U = 9\,\%$. Regn ut $V_U$. Selskapet utsteder deretter 250 mill. kr evig gjeld — regn ut skatteskjoldet og $V_L$.»
- **Typiske feil:** Glemme $(1-t_c)$-faktoren i $V_U$; bruke $r_D$ i stedet for $r_U$ i $V_U$; tro at skatteskjoldet avhenger av $r_D$ (på evig gjeld gjør det ikke — det er $t_c D$); bruke gjeldens pålydende ≠ markedsverdi.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 2.4: MM proposisjon II med skatt og WACC

- **id:** `fin3521-bi-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `fin3521-bi-2-3` · **kapitteltype:** teori
- **description:** Egenkapitalkostnaden og WACC når skatteskjoldet er med: den fulle prop. II-formelen med $(1-t_c)$-faktoren, løst både forlengs og baklengs.
- **Eksamensbelegg:** Egenkapitalkost via prop. II er en fast delkomponent (3–4/5). $(1-t_c)$-faktoren er en klassisk C/D-felle. Formlene **må pugges**. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 2.3. **Symbol- og formelliste:** $r_E$, $r_U$, $r_D$, $t_c$, $D/E$, $E/V$, $D/V$, WACC — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON: MM prop. II med skatt $r_E = r_U + \frac{D}{E}(r_U - r_D)(1-t_c)$; WACC etter skatt $\text{WACC} = \frac{E}{V}r_E + \frac{D}{V}r_D(1-t_c)$. Vis at WACC nå faller når gjeldsgraden øker (fordi skatteskjoldet senker effektiv gjeldskost). Løs prop. II **baklengs** (finn $r_U$ fra observert $r_E$). **Pugge-boks:** begge formlene, med huskeregel «$(1-t_c)$ på BÅDE prop. II-leddet og på gjeldsleddet i WACC». **Regnekjede (nyskrevet):** $r_U = 10\,\%$, $r_D = 5\,\%$, $t_c = 22\,\%$, $D/E = 0{,}6$: $r_E = 10 + 0{,}6(10-5)(0{,}78) = 10 + 2{,}34 = 12{,}34\,\%$. Med $E/V = 0{,}625$, $D/V = 0{,}375$: WACC $= 0{,}625\cdot12{,}34 + 0{,}375\cdot5\cdot0{,}78 = 7{,}71 + 1{,}46 = 9{,}17\,\%$.
- **Oppgavesjangre:** A. Mønstereksempel: «$r_U = 11\,\%$, $r_D = 6\,\%$, $t_c = 22\,\%$, gjeldsandel $D/E = 0{,}5$. Regn ut $r_E$ med MM prop. II med skatt og deretter WACC. Kommentér hvorfor WACC er lavere enn $r_U$.»
- **Typiske feil:** Glemme $(1-t_c)$-faktoren i prop. II (gir for høy $r_E$); glemme $(1-t_c)$ på gjeldsleddet i WACC; forveksle $D/E$ og $D/V$; bruke pålydende i stedet for markedsverdi.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.5: Gjeldsfinansiert tilbakekjøp og rekapitalisering

- **id:** `fin3521-bi-2-5` · **number:** 2.5 · **estimatedMinutes:** 60 · **prerequisites:** `fin3521-bi-2-4` · **kapitteltype:** teori
- **description:** Den mest testede kapitalstrukturoppgaven: et selskap tar opp evig gjeld for å kjøpe tilbake aksjer — hva skjer med selskapsverdi, aksjekurs og antall aksjer?
- **Eksamensbelegg:** Selve rekapitaliserings-oppgaven i hvert kapitalstruktursett (100 %), 20–40 p — ofte oppgave 1 eller 3. Aksjekurs-effekten er en fast C/D-felle. Prioritet: **PERFEKT** (STØRST).
- **Forkunnskaper:** Bygger på kap. 2.3–2.4. **Symbol- og formelliste:** $V_U$, $V_L$, $t_c D$, aksjekurs, antall aksjer, gjeldsproveny — **(må pugges)**.
- **Innholdskontrakt:** REGNEPROSEDYRE (drilles): (1) $V_U$ og $V_L = V_U + t_c D$; (2) **aksjekursen stiger ved kunngjøring** med skatteskjoldet fordelt per aksje: ny kurs $= P_{gammel} + t_c D / N_{aksjer}$ (i **rent** MM uten skatt er kursen **uendret**); (3) selskapet kjøper tilbake til den **nye** kursen: antall tilbakekjøpte $= D / P_{ny}$; (4) egenkapital etter $= V_L - D$. **Warning:** kursen **faller ikke** — dette er felle #4 i analysen. **Pugge-boks:** kunngjøringssprang $= t_c D/N$; antall tilbakekjøpt $= D/P_{ny}$. **Regnekjede (nyskrevet):** 100 % EK-selskap, $V_U = 800$ mill., 40 mill. aksjer ⇒ kurs 20 kr. $t_c = 22\,\%$; det utstedes 200 mill. evig gjeld. Skatteskjold $= 44$; $V_L = 844$. Ny kurs $= 20 + 44/40 = 21{,}10$ kr. Tilbakekjøpt $= 200/21{,}10 = 9{,}48$ mill. aksjer; igjen $= 30{,}52$ mill.; EK $= 844 - 200 = 644$ mill.; kontroll $644/30{,}52 = 21{,}10$ kr. ✓
- **Oppgavesjangre:** A. Mønstereksempel: «Et 100 % egenkapitalfinansiert selskap er verdt 500 mill. kr med 25 mill. aksjer. Det tar opp 150 mill. kr evig gjeld ($t_c = 22\,\%$) for å kjøpe tilbake aksjer. Regn ut ny selskapsverdi, ny aksjekurs og antall tilbakekjøpte aksjer. Forklar hvorfor kursen ikke faller.»
- **Typiske feil:** Anta at kursen **faller** ved tilbakekjøp (den er uendret i rent MM, stiger med skatteskjoldet med skatt); kjøpe tilbake til gammel kurs; glemme å legge skatteskjoldet til kursen før tilbakekjøpet; blande antall aksjer før/etter.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.6: Miller-modellen med personskatt — effektiv skattefordel av gjeld

- **id:** `fin3521-bi-2-6` · **number:** 2.6 · **estimatedMinutes:** 55 · **prerequisites:** `fin3521-bi-2-5` · **kapitteltype:** teori
- **description:** Når også eiere og långivere beskattes personlig: hvordan den effektive skattefordelen av gjeld reduseres (eller forsvinner), og Miller-klammeuttrykket.
- **Eksamensbelegg:** Miller-modellen med personskatt i 2/5 sett (Nordic Solutions, NorTron), et A/B-differensierende toppkarakter-tema. Klammeuttrykket er en klassisk felle. Formelen **må pugges**. Prioritet: **PERFEKT** (toppkarakter-skille).
- **Forkunnskaper:** Bygger på kap. 2.3 ($V_L = V_U + t_c D$ er spesialtilfellet $t_E = t_D$). **Symbol- og formelliste:** $t_c$, $t_E$ (personlig aksjeinntektsskatt), $t_D$ (personlig renteskatt), klammeuttrykket — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON + UTLEDNING (intuisjon per steg): Miller $V_L = V_U + \left[1 - \frac{(1-t_c)(1-t_E)}{1-t_D}\right]D$. Klammeuttrykket er den **effektive skattefordelen per gjeldskrone**. Grensetilfeller: $t_E = t_D$ ⇒ klammen $= t_c$ (tilbake til $V_L = V_U + t_c D$); når personlig renteskatt er høy nok kan fordelen bli **null eller negativ**. **Warning:** ikke forveksle $t_E$ (egenkapital) og $t_D$ (gjeld); klammen er $1 - \frac{(1-t_c)(1-t_E)}{1-t_D}$, ikke omvendt. **Pugge-boks:** hele formelen + grensetilfellet + huskeregel «tre (1−t)-faktorer: $t_c$ og $t_E$ i telleren, $t_D$ i nevneren». **Regnekjede (nyskrevet):** $t_c = 22\,\%$, $t_E = 15\,\%$ (aksje), $t_D = 30\,\%$ (rente). Klamme $= 1 - \frac{0{,}78\cdot0{,}85}{0{,}70} = 1 - 0{,}947 = 0{,}053$. Med $D = 400$: skattefordel $= 0{,}053\cdot400 = 21{,}3$ mill. — langt mindre enn $t_c D = 88$ mill.
- **Oppgavesjangre:** B. Mønstereksempel: «$t_c = 22\,\%$, personlig skatt på aksjeinntekt $t_E = 20\,\%$, på renteinntekt $t_D = 35\,\%$. Regn ut den effektive skattefordelen per gjeldskrone med Miller-modellen, og sammenlign med $t_c$. Hva forteller resultatet om gjeldens verdi?»
- **Typiske feil:** Bytte om $t_E$ og $t_D$; sette opp klammeuttrykket feil (invertere brøken); glemme at $t_E = t_D$ gir tilbake $t_c D$; tolke en liten/negativ fordel som regnefeil i stedet for et reelt resultat.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.7: Drill — kapitalstruktur og rekapitalisering under MM

- **id:** `fin3521-bi-2-7` · **number:** 2.7 · **estimatedMinutes:** 80 · **prerequisites:** `fin3521-bi-2-6` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele MM-repertoaret: velg riktig formel, sett den opp, regn selskapsverdi/egenkapitalkost/aksjekurs, og konkludér — på eksamensnivå.
- **Eksamensbelegg:** Dekker sjanger A + B (100 %), fagets tyngste enkeltdel. «Vis beregning» og «bruk MM-forutsetningene aktivt» drilles eksplisitt. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 2.1–2.6. **Symbol- og formelliste:** hele MM-apparatet, alt **(må pugges)**.
- **Innholdskontrakt:** **Løsningsoppskrift**: 1) finn $V_U = \text{EBIT}(1-t_c)/r_U$; 2) skatteskjold $t_c D$ ⇒ $V_L$ (evt. Miller-klamme ved personskatt); 3) $r_E$ via prop. II med skatt; 4) WACC-kontroll; 5) ved rekapitalisering: kunngjøringssprang $t_c D/N$, antall tilbakekjøpt $D/P_{ny}$; 6) konklusjon + MM-forutsetning eksplisitt. **Gjennomregnet eksamens-case** (sammensatt a–e) med sensor-margnotater om hvor delpoengene sitter (formeloppsett, $(1-t_c)$-faktor, kurs-effekt). 10–14 nyskrevne oppgaver som roterer hele katalogen: $V_L$-regning, prop. II forlengs/baklengs, gjeldsfinansiert tilbakekjøp, Miller-personskatt. Alle med `solution` + `hints`.
- **Oppgavesjangre:** A, B. Mønstereksempel (full a–e-kjede): «(a) $V_U$ fra EBIT. (b) $V_L$ etter 300 mill. gjeld. (c) $r_E$ og WACC. (d) ny aksjekurs og antall tilbakekjøpt. (e) hvordan endres $V_L$ hvis eiere/långivere også personbeskattes (Miller)?»
- **Typiske feil:** Hele §2-repertoaret samlet: $(1-t_c)$-faktoren, kurs faller-feilen, $D/E$ vs. $D/V$, pålydende vs. markedsverdi, Miller-klammen, manglende MM-forutsetning i begrunnelsen.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (2.A $V_U$ + $V_L = V_U + t_c D$ med konklusjon, A; 2.B MM prop. II med skatt + WACC forlengs/baklengs, A; 2.C gjeldsfinansiert tilbakekjøp — kurs, antall aksjer, EK etter, A; 2.D Miller-personskatt + full rekapitalisering på eksamensnivå, A+B).

---

### Del 3 — Kapitalstrukturteori: imperfeksjoner og drøfting *(prioritet: KUNNE — roterende drøftingsspor, 40 %)*

#### Kapittel 3.1: Trade-Off Theory — skatteskjold vs. konkurskostnader

- **id:** `fin3521-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 40 · **prerequisites:** `fin3521-bi-2-3` · **kapitteltype:** teori (drøfting)
- **description:** Hvorfor selskaper ikke girer seg maksimalt selv om skatteskjoldet lokker: avveiningen mot forventede konkurs- og finansielle nødkostnader, og den optimale gjeldsgraden.
- **Eksamensbelegg:** Trade-Off Theory som drøftingsspørsmål i 2/5 sett (`FIN 35211_QP` O3a). Svaret forventes «kort og konsist» (3–6 setninger), gjerne knyttet til tall/skatteskjold. Prioritet: **KUNNE**.
- **Forkunnskaper:** Bygger på kap. 2.3 (skatteskjold). **Symbol- og formelliste:** $t_c D$ (skatteskjoldets nåverdi), forventet konkurskostnad $=$ sannsynlighet $\times$ tapsandel — konseptuelt (få formler).
- **Innholdskontrakt:** DEFINISJON: giret verdi $= V_U + \text{PV(skatteskjold)} - \text{PV(finansielle nødkostnader)}$; **optimal gjeldsgrad** der marginal skattefordel $=$ marginal forventet nødkostnad. Direkte vs. indirekte konkurskostnader; hvorfor bransjer med volatil kontantstrøm/immaterielle eiendeler girer mindre. **Pugge-boks:** trade-off-relasjonen i ord + «optimum ved marginal likhet». **Drøftingseksempel** skrevet som A-besvarelse: kompakt for/mot, forankret i skatteskjoldet fra Del 2.
- **Oppgavesjangre:** I. Mønstereksempel: «Forklar kort og konsist, ut fra Trade-Off Theory, hvorfor et selskap med stabil kontantstrøm typisk velger høyere gjeldsgrad enn et vekstselskap med usikre inntekter.»
- **Typiske feil:** Skrive langt (gir ikke ekstra uttelling); glemme konkurskostnad-siden (kun skatteskjold); ikke knytte til optimal gjeldsgrad/marginal avveining.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.2: Limits to the Use of Debt — asymmetri, agentkostnader, signalisering, pecking order

- **id:** `fin3521-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `fin3521-bi-3-1` · **kapitteltype:** teori (drøfting)
- **description:** De fire markedsimperfeksjonene som begrenser gjeldsbruk utover Trade-Off, pluss pecking order-teorien og markedstiming — kort forklart og knyttet til kapitalstrukturvalg.
- **Eksamensbelegg:** «Limits to the Use of Debt» i 2/5 sett (Vår 2025 O2). Krever de fire begrepene forklart «kort og konsist» og koblet til valg. Prioritet: **KUNNE**.
- **Forkunnskaper:** Bygger på kap. 3.1. **Symbol- og formelliste:** konseptuelt (ingen formler) — begrepene informasjonsasymmetri, agentkostnad, signalisering, markedstiming, pecking order.
- **Innholdskontrakt:** DEFINISJONER (hver 1–2 setninger, eksamensklart): **informasjonsasymmetri** (ledelsen vet mer enn markedet); **agentkostnader** av gjeld (risikoskifting/underinvestering) og av egenkapital; **signalisering** (gjeldsopptak/utbytte som signal om framtidig inntjening); **markedstiming** (emittere når egenkapitalen er «dyr»); **pecking order** (intern finansiering → gjeld → egenkapital sist). Hvordan hver begrenser eller vrir kapitalstrukturvalget bort fra Trade-Off-optimum. **Pugge-boks:** de fire/fem begrepene med ett stikkord hver. **Drøftingseksempel** som A-besvarelse: kompakt gjennomgang av de fire begrepene.
- **Oppgavesjangre:** I. Mønstereksempel: «Forklar kort og konsist hvordan informasjonsasymmetri og signalisering kan få et lønnsomt selskap til å foretrekke gjeld framfor ny egenkapital (pecking order).»
- **Typiske feil:** Blande sammen begrepene; skrive essay i stedet for kompakt; ikke koble til kapitalstruktur-/finansieringsvalg; forveksle pecking order med Trade-Off.
- **Quiz: 18 · Flashcards: 26**

**Prøve-kvote Del 3:** 4 prøver (3.A Trade-Off: optimal gjeldsgrad forklart kort, I; 3.B de fire «Limits»-begrepene definert og koblet, I; 3.C pecking order vs. Trade-Off — forskjell, I; 3.D blandet kapitalstrukturteori-drøfting «kort og konsist» på eksamensnivå, I).

---

### Del 4 — Utbyttepolitikk og dividendebeskatning *(prioritet: PERFEKT — STOR, 100 %)*

#### Kapittel 4.1: Utbytteirrelevans i perfekt marked — dividende vs. tilbakekjøp

- **id:** `fin3521-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `fin3521-bi-2-1` · **kapitteltype:** teori
- **description:** Hvorfor utbyttepolitikk er irrelevant for aksjonærenes formue i et perfekt marked — og hvorfor dividende og tilbakekjøp da er to sider av samme sak.
- **Eksamensbelegg:** Utbyttepolitikk (dividende vs. tilbakekjøp, indifferens) i hvert sett (5/5). «Vis at aksjonæren er indifferent» er en fast delkomponent. Prioritet: **PERFEKT** (STØRST).
- **Forkunnskaper:** Bygger på kap. 2.1 (MM-logikk). **Symbol- og formelliste:** $P_{cum}$, $P_{ex}$, DIV, antall aksjer, samlet formue — **(må pugges)**; MM-forutsetningene.
- **Innholdskontrakt:** DEFINISJON + UTLEDNING: i perfekt marked er samlet aksjonærformue lik enten selskapet betaler dividende (kurs faller, kontanter i hånd) eller kjøper tilbake (kurs uendret, færre aksjer). **Vis ekvivalensen eksplisitt** (formue før = formue etter i begge tilfeller). Hvorfor tilbakekjøp reduserer antall aksjer, ikke kursen (til virkelig verdi). **Pugge-boks:** dividende: formue $= P_{ex} + \text{DIV}$; tilbakekjøp: kurs uendret, antall $\downarrow$ med beløp/kurs; begge gir samme formue. **Regnekjede (nyskrevet):** selskap verdt 400 mill., 20 mill. aksjer (kurs 20). Betaler 40 mill. dividende: DIV $= 2$ kr, $P_{ex} = 18$, formue per aksje $= 18 + 2 = 20$. Alternativt tilbakekjøp 40 mill.: kurs 20, kjøper 2 mill. aksjer, 18 mill. igjen à 20 = samme verdi. Aksjonæren er indifferent.
- **Oppgavesjangre:** C. Mønstereksempel: «Et selskap verdt 600 mill. kr med 30 mill. aksjer skal dele ut 60 mill. kr — enten som dividende eller som tilbakekjøp. Vis at en aksjonær med 1 000 aksjer er like rik i begge tilfeller (perfekt marked).»
- **Typiske feil:** Tro at tilbakekjøp øker kursen «per automatikk»; glemme dividenden i formuesregnskapet; ikke nevne den aktive perfekt-marked-forutsetningen; blande antall aksjer før/etter tilbakekjøp.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.2: Ex-dividende: kursfall uten og med skatt

- **id:** `fin3521-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `fin3521-bi-4-1` · **kapitteltype:** teori
- **description:** Hvor mye aksjekursen faller på ex-dividende-dagen — nøyaktig lik dividenden i perfekt marked, men skattejustert når dividende og gevinst beskattes ulikt.
- **Eksamensbelegg:** Ex-dividende-fall (med og uten skatt) i praksis hvert sett (Marine Shipping, Fantasy). Skattejusteringen er springbrettet til $\tau^*_d$ (kap. 4.3). Formlene **må pugges**. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 4.1. **Symbol- og formelliste:** $P_{cum}$, $P_{ex}$, DIV, $t_d$ (dividendeskatt), $t_g$ (gevinstskatt) — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON + UTLEDNING: perfekt marked $P_{ex} = P_{cum} - \text{DIV}$ (arbitrasje: kjøpe cum, motta dividende, selge ex — ingen gratis lunsj). **Med skatt:** en marginal investor er indifferent når fallet dekker dividenden **etter skatt** relativt til gevinst etter skatt: fall $= \frac{\text{DIV}(1-t_d)}{1-t_g}$. Intuisjon: dividende og gevinst beskattes ulikt, så kursen justerer for skatteforskjellen. **Pugge-boks:** $P_{ex} = P_{cum} - \text{DIV}$ (perfekt); fall $= \text{DIV}\frac{1-t_d}{1-t_g}$ (med skatt). **Regnekjede (nyskrevet):** $P_{cum} = 150$ kr, DIV $= 8$ kr. Perfekt: $P_{ex} = 142$. Med $t_d = 35\,\%$, $t_g = 22\,\%$: fall $= 8\cdot\frac{0{,}65}{0{,}78} = 6{,}67$ kr ⇒ $P_{ex} = 143{,}33$ kr.
- **Oppgavesjangre:** C/D. Mønstereksempel: «En aksje handles til 120 kr cum-dividende og betaler 6 kr i utbytte. Regn ut ex-dividende-kursen (a) i perfekt marked, og (b) når dividende beskattes med 30 % og kapitalgevinst med 22 %.»
- **Typiske feil:** Bruke perfekt-marked-fallet når skatt er oppgitt; invertere skattefaktoren ($\frac{1-t_g}{1-t_d}$); glemme at fallet er **mindre** enn DIV når $t_d > t_g$; regnefeil i brøken.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.3: Effektiv dividendeskattesats $\tau^*_d$ og fortegnstolkning

- **id:** `fin3521-bi-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `fin3521-bi-4-2` · **kapitteltype:** teori
- **description:** Fagets mest gjennomgående enkeltferdighet: den effektive dividendeskattesatsen som måler skattemessig (u)gunst ved dividende — og den kritiske fortegnstolkningen.
- **Eksamensbelegg:** $\tau^*_d$ i alle fem sett i en eller annen form — fagets mest gjennomgående regneferdighet. Fortegnstolkningen er **toppkarakter-felle #2**. Formelen **må pugges**. Prioritet: **PERFEKT** (STØRST + A/B-skille).
- **Forkunnskaper:** Bygger på kap. 4.2 (ex-dividende med skatt). **Symbol- og formelliste:** $t_d$, $t_g$, $\tau^*_d$ — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON + UTLEDNING: $\tau^*_d = \frac{t_d - t_g}{1 - t_g}$ (utledet fra ex-dividende-fallet i 4.2). **FORTEGNSTOLKNING (kritisk):** $\tau^*_d > 0$ ⇒ dividende skattemessig **ugunstig** ⇒ preferanse for tilbakekjøp/kapitalgevinst; $\tau^*_d = 0$ ⇒ indifferent; $\tau^*_d < 0$ ⇒ dividendepreferanse. **Warning (felle #2):** teller er $t_d - t_g$ (ikke omvendt), og $\tau^*_d > 0$ betyr dividende **ugunstig**, ikke gunstig. **Pugge-boks:** formelen + fortegnstabellen + huskeregel «dividende dyrere enn gevinst ⇒ $\tau^*_d > 0$ ⇒ velg tilbakekjøp». **Regnekjede (nyskrevet):** $t_d = 35\,\%$, $t_g = 22\,\%$: $\tau^*_d = \frac{0{,}35-0{,}22}{0{,}78} = 0{,}167 = 16{,}7\,\% > 0$ ⇒ dividende ugunstig, investoren foretrekker tilbakekjøp.
- **Oppgavesjangre:** D. Mønstereksempel: «Dividende beskattes med 31,68 % og kapitalgevinst med 22 %. Regn ut den effektive dividendeskattesatsen, og forklar hva fortegnet betyr for investorens valg mellom dividende og tilbakekjøp.»
- **Typiske feil (felle #2):** Bytte teller og nevner; **feiltolke fortegnet** ($\tau^*_d > 0$ som dividendegunst); glemme skattejusteringen fra 4.2; ikke gi den økonomiske tolkningen (bare tallet).
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 4.4: Skatteklientell og dividend-capture

- **id:** `fin3521-bi-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `fin3521-bi-4-3` · **kapitteltype:** teori
- **description:** Hvorfor ulike investorkategorier har ulik effektiv dividendeskatt (klientell), og hvordan man finner den maksimale dividendeskatten som gjør en «kjøp-for-dividende»-strategi lønnsom.
- **Eksamensbelegg:** Skatteklientell (per investorkategori) og dividend-capture i flere sett (investorkategoriene V2025 O3, ABC O4, `FIN 35211_QP 1`). Selskaps-andelsbeskatning er en fast felle. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 4.3. **Symbol- og formelliste:** $\tau^*_d$ per kategori, selskaps-andel av skattepliktig dividende, indifferensbetingelse for dividend-capture — **(må pugges)**.
- **Innholdskontrakt:** REGNEPROSEDYRE: (1) **Skatteklientell** — regn $\tau^*_d$ for person, pensjonsfond ($t_d = t_g = 0$ ⇒ $\tau^*_d = 0$) og selskap (beskattes ofte kun for en **andel** av mottatt dividende, f.eks. 3 % skattepliktig ⇒ effektiv $t_d$ svært lav); hvilket klientell foretrekker hva. (2) **Dividend-capture / maks dividendeskatt** — sett indifferens $(P_{cum} - P_{ex}) = \frac{\text{DIV}(1-t_d)}{1-t_g}$ og løs for $t_d$ som gjør «kjøp cum, motta dividende, selg ex»-strategien akkurat lønnsom. **Pugge-boks:** kategori-tabellen + indifferensbetingelsen. **Regnekjede (nyskrevet):** et selskap mottar dividende men skattlegges kun for 3 % av den til $t_c = 22\,\%$ ⇒ effektiv $t_d = 0{,}03\cdot0{,}22 = 0{,}66\,\%$; med $t_g = 22\,\%$ på gevinst blir $\tau^*_d = \frac{0{,}0066-0{,}22}{0{,}78} < 0$ ⇒ selskapet foretrekker dividende.
- **Oppgavesjangre:** D. Mønstereksempel: «Regn ut effektiv dividendeskattesats for (a) en person ($t_d = 35\,\%$, $t_g = 22\,\%$), (b) et pensjonsfond (skattefritt), og (c) et selskap som beskattes for 3 % av mottatt dividende. Hvilket klientell foretrekker dividende?»
- **Typiske feil:** Ikke justere for at selskaper beskattes for kun en **andel** av dividenden; feil indifferensbetingelse i dividend-capture; glemme at pensjonsfond gir $\tau^*_d = 0$; blande kategoriene.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.5: Drill — utbyttepolitikk og dividendeskatt

- **id:** `fin3521-bi-4-5` · **number:** 4.5 · **estimatedMinutes:** 75 · **prerequisites:** `fin3521-bi-4-4` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele utbytte-/dividendeskatt-repertoaret: ex-dividende, indifferens, $\tau^*_d$, klientell og dividend-capture — på eksamensnivå.
- **Eksamensbelegg:** Dekker sjanger C + D (100 % — fagets to mest gjengangende ferdigheter). «Vis beregning» + fortegnstolkning drilles eksplisitt. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 4.1–4.4. **Symbol- og formelliste:** hele utbytte-apparatet, alt **(må pugges)**.
- **Innholdskontrakt:** **Løsningsoppskrift**: 1) perfekt marked? ⇒ $P_{ex} = P_{cum} - \text{DIV}$; 2) skatt? ⇒ skattejustert fall; 3) $\tau^*_d$ + fortegnstolkning; 4) klientell/andelsbeskatning; 5) dividend-capture-indifferens; 6) konklusjon (hvilket klientell/valg). **Gjennomregnet eksamens-case** (a–e) med sensor-margnotater (fortegn, teller/nevner, andelsbeskatning). 10–14 nyskrevne oppgaver som roterer katalogen. Alle med `solution` + `hints`.
- **Oppgavesjangre:** C, D. Mønstereksempel (full a–e): «(a) ex-dividende-kurs uten skatt; (b) med skatt; (c) $\tau^*_d$ og fortegn; (d) samme for et selskap med andelsbeskatning; (e) maks $t_d$ for lønnsom dividend-capture.»
- **Typiske feil:** Hele §4-repertoaret: fortegnsfeil på $\tau^*_d$, invertert skattefaktor, glemt andelsbeskatning, perfekt-fall der skatt kreves, manglende tolkning/konklusjon.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (4.A ex-dividende uten/med skatt, C/D; 4.B dividende vs. tilbakekjøp — indifferens i perfekt marked, C; 4.C $\tau^*_d$ + fortegnstolkning + klientell, D; 4.D dividend-capture + andelsbeskatning på eksamensnivå, D).

---

### Del 5 — Fusjoner og oppkjøp (M&A) *(prioritet: PERFEKT — fast fjerdeoppgave, 80 %)*

#### Kapittel 5.1: Synergi, kombinert verdi, NNV og premie

- **id:** `fin3521-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `fin3521-bi-2-1` · **kapitteltype:** teori
- **description:** Grunnrelasjonene i et oppkjøp: hva det sammenslåtte selskapet er verdt, hva oppkjøperen tjener (NNV), og hva premien til selger er.
- **Eksamensbelegg:** M&A i 4/5 sett (fast fjerdeoppgave, 20–35 p). Grunnoppsettet (kombinert verdi, NNV, premie) er E-nivå-kravet. Formlene **må pugges**. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 2.1 (verdsettelse i perfekt marked). **Symbol- og formelliste:** $V_A$ (oppkjøper), $V_T$ (mål), $S$ (synergi), $K$ (transaksjonskostnad), $N_A$, $N_T$, premie, NNV — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON: kombinert verdi $V_{AT} = V_A + V_T + S - K$; oppkjøperens netto nåverdi $\text{NNV} = S - \text{premie}$; premie $= (\text{betalt pris} - \text{målets frittstående verdi per aksje})\cdot N_T$. Intuisjon: synergien er kaken som skapes; premien er hvor mye av den som gis til selger; NNV er resten. **Warning:** ikke bland målets **frittstående verdi** med **prisen som betales**; husk å trekke fra $K$ (overgangs-/transaksjonskostnad). **Pugge-boks:** de tre relasjonene. **Regnekjede (nyskrevet):** $V_A = 900$, $V_T = 300$, synergi $S = 80$, $K = 10$ mill. Kombinert $= 900 + 300 + 80 - 10 = 1270$. Betaler 340 for målet (frittstående 300): premie $= 40$; NNV $= 80 - 40 - 10 = 30$ mill. (synergi minus premie minus kostnad).
- **Oppgavesjangre:** E. Mønstereksempel: «Oppkjøper er verdt 800 mill., målet 250 mill., forventet synergi 60 mill., transaksjonskostnad 5 mill. Oppkjøper betaler 290 mill. kontant. Regn ut premien og oppkjøperens NNV.»
- **Typiske feil:** Blande frittstående verdi og betalt pris i premien; glemme transaksjonskostnaden; regne NNV uten å trekke fra premien; feil antall målaksjer.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 5.2: Kontantoppgjør — maks pris og markedspris etter

- **id:** `fin3521-bi-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `fin3521-bi-5-1` · **kapitteltype:** teori
- **description:** Når oppkjøpet betales med kontanter: den høyeste prisen oppkjøper kan betale uten å tape (NNV = 0), og oppkjøper-aksjens kurs etter oppkjøpet.
- **Eksamensbelegg:** Kontantoppgjør i M&A-oppgavene (Poki/Ikop, ABC/DEF). Maks pris (all gevinst til selger) og markedspris etter er faste delspørsmål. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 5.1. **Symbol- og formelliste:** maks kontantpris per målaksje, markedspris per oppkjøper-aksje etter — **(må pugges)**.
- **Innholdskontrakt:** REGNEPROSEDYRE: **maks kontantpris per målaksje** $= \text{målets frittstående kurs} + S/N_T$ (all synergi til selger ⇒ NNV = 0); **markedspris per oppkjøper-aksje etter** $= \frac{V_A + V_T + S - \text{kontant betalt}}{N_A}$ (målets verdi $V_T$ og synergien kommer inn i det kombinerte selskapet, kontantene forlater det; antall oppkjøper-aksjer uendret). **Pugge-boks:** begge relasjonene. **Regnekjede (nyskrevet):** $V_A = 600$ mill. med $N_A = 30$ mill. aksjer (kurs 20); mål frittstående $V_T = 200$ mill. med $N_T = 10$ mill. aksjer (kurs 20); synergi 50 mill. Maks kontantpris $= 20 + 50/10 = 25$ kr/aksje. Betaler 22 kr (220 mill.): oppkjøper-kurs etter $= \frac{V_A + V_T + S - \text{kontant}}{N_A} = \frac{600+200+50-220}{30} = \frac{630}{30} = 21{,}0$ kr.
- **Oppgavesjangre:** E. Mønstereksempel: «Oppkjøper (kurs 40 kr, 20 mill. aksjer) kjøper et mål (kurs 30 kr, 8 mill. aksjer) med synergi 48 mill. kontant. Regn ut maks kontantpris per målaksje og oppkjøper-kursen etter et bud på 34 kr/aksje.»
- **Typiske feil:** Glemme å inkludere målets verdi i selskapet etter oppgjør; trekke fra kontant uten å legge til $V_T + S$; regne maks pris uten synergi per målaksje; fortegnsfeil.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: Aksjeoppgjør løst simultant — utvanning og bytteforhold

- **id:** `fin3521-bi-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `fin3521-bi-5-2` · **kapitteltype:** teori
- **description:** Toppkarakter-oppgaven: når vederlaget er aksjer, avhenger kursen på det sammenslåtte selskapet av hvor mange nye aksjer som utstedes — og motsatt. Løs simultant.
- **Eksamensbelegg:** Aksjeoppgjør i M&A (ABC/DEF, TROY/BRA, Compete-Ikop) — **toppkarakter-felle #1** (sirkularitet/utvanning). Maks bytteforhold er fast delspørsmål. Formelen **må pugges**. Prioritet: **PERFEKT** (A/B-skille).
- **Forkunnskaper:** Bygger på kap. 5.1–5.2. **Symbol- og formelliste:** $x$ (antall oppkjøper-aksjer per målaksje), $N_A$, $N_T$, $P_{ny}$ (kurs på sammenslått selskap) — **(må pugges)**.
- **Innholdskontrakt:** REGNEPROSEDYRE (drilles): antall nye aksjer $= x\,N_T$; kursen på sammenslått selskap $P_{ny} = \frac{V_A + V_T + S}{N_A + x\,N_T}$ — **kursen og aksjeantallet bestemmes samtidig**. Vederlaget skal verdsettes til $P_{ny}$, IKKE til kursen før oppkjøpet. **Maks bytteforhold** finnes ved å kreve at oppkjøper-aksjonærenes verdi etter $\ge$ verdi før: $N_A\cdot P_{ny} \ge V_A$, løst for $x$. **Warning (felle #1):** å verdsette aksjevederlaget til kursen **før** oppkjøpet ignorerer utvanningen — dette er den enkeltfellen som oftest skiller A/B fra resten. **Pugge-boks:** $P_{ny}$-formelen (simultan) + maks-bytteforhold-betingelsen. **Regnekjede (nyskrevet):** $V_A = 900$ (30 mill. aksjer, kurs 30), $V_T = 300$, $S = 60$. Bytteforhold $x = 0{,}9$ oppkjøper-aksjer per målaksje, $N_T = 10$ mill. Nye aksjer $= 9$ mill. $P_{ny} = \frac{900+300+60}{30+9} = \frac{1260}{39} = 32{,}31$ kr. Vederlagets verdi $= 9\cdot32{,}31 = 290{,}8$ mill. (ikke $9\cdot30 = 270$ — det er fellen).
- **Oppgavesjangre:** F. Mønstereksempel: «Oppkjøper (900 mill., 30 mill. aksjer) kjøper et mål (300 mill., 12 mill. aksjer) med synergi 90 mill. via aksjebytte 0,8:1. Regn ut kursen på det sammenslåtte selskapet, og finn det maksimale bytteforholdet oppkjøperen kan tilby uten å tape.»
- **Typiske feil (felle #1):** Verdsette vederlaget til kursen **før** oppkjøpet (ignorere utvanning/sirkularitet); regne $P_{ny}$ med gammelt aksjeantall; feil maks-bytteforhold-betingelse; glemme synergien i telleren.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 5.4: Drill — M&A (kontant vs. aksjeoppgjør)

- **id:** `fin3521-bi-5-4` · **number:** 5.4 · **estimatedMinutes:** 75 · **prerequisites:** `fin3521-bi-5-3` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele M&A-repertoaret: synergi/premie/NNV, kontant maks pris + kurs etter, aksjeoppgjør simultant + bytteforhold — og valget mellom oppgjørsformene.
- **Eksamensbelegg:** Dekker sjanger E + F (80 %). Simultant aksjeoppgjør (felle #1) og premie-fellen drilles eksplisitt. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 5.1–5.3. **Symbol- og formelliste:** hele M&A-apparatet, alt **(må pugges)**.
- **Innholdskontrakt:** **Løsningsoppskrift**: 1) kombinert verdi $V_A + V_T + S - K$; 2) synergi og premie; 3) kontant: maks pris $= $ frittstående $+ S/N_T$, kurs etter; 4) aksje: $P_{ny}$ **simultant**, vederlag til $P_{ny}$, maks bytteforhold; 5) sammenlign oppgjørsformene og **anbefal**. **Gjennomregnet eksamens-case** (a–e) med sensor-margnotater (særlig utvanningsfellen). 10–14 nyskrevne oppgaver som roterer katalogen (kontant og aksje). Alle med `solution` + `hints`.
- **Oppgavesjangre:** E, F. Mønstereksempel (full a–e): «(a) kombinert verdi og synergi; (b) NNV ved kontantbud på X; (c) maks kontantpris; (d) kurs på sammenslått selskap ved aksjebytte y:1 (simultant); (e) bør oppkjøper velge kontant eller aksje — begrunn.»
- **Typiske feil:** Hele §5-repertoaret: utvanningsfellen (felle #1), premie vs. frittstående verdi, glemt transaksjonskostnad, kurs etter uten $V_T + S$, manglende anbefaling.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (5.A synergi + premie + NNV med konklusjon, E; 5.B kontantoppgjør — maks pris + kurs etter, E; 5.C aksjeoppgjør løst simultant + maks bytteforhold, F; 5.D full M&A-oppgave med valg kontant vs. aksje på eksamensnivå, E+F).

---

### Del 6 — Opsjoner, sikring og risikonøytral prising *(prioritet: KUNNE — roterende spor, 40 %; A/B-skille)*

#### Kapittel 6.1: Sikringsstrategier — protective put, collar og forward

- **id:** `fin3521-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `fin3521-bi-1-1` · **kapitteltype:** teori
- **description:** Hvordan bedrifter sikrer prisrisiko med opsjoner og terminkontrakter: protective put for nedsidebeskyttelse, collar for nullkostnad, og forward for å låse pris — med utbetalingsdiagram.
- **Eksamensbelegg:** Sikringsstrategier i 2/5 sett (Scandic, kaffe). Utbetalingsdiagram og «hva bør sikreren gjøre?» er faste. Prioritet: **KUNNE** (A/B-skille).
- **Forkunnskaper:** Bygger på kap. 1.1 (nåverdi). **Symbol- og formelliste:** $S_0$ (spotpris), $K$ (innløsningskurs), $C$, $P$, $F$ (forwardpris), premie, utbetaling ved forfall — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON: **protective put** (long aksje + long put) — gulv på $K$, behold oppside, koster putpremien; **collar / costless collar** (long put + short call) — nuller nettokostnad ved å gi fra seg oppside over call-strike; **forward/termin** — låser pris $F$, ingen premie, ingen oppside. Tegn/beskriv **utbetalingsdiagram** ved forfall for hver. **Pugge-boks:** de tre strategienes payoff i ord + når hver brukes. **Regnekjede (nyskrevet):** en produsent eier en råvare verdt 80 kr/enhet, kjøper put med $K = 75$ (premie 3): nettoverdi ved forfall $= \max(S_T, 75) - 3$. Legger til short call $K = 90$ (premie 3): costless collar, verdi låst mellom 72 og 87.
- **Oppgavesjangre:** G. Mønstereksempel: «En eksportør vil sikre en fremtidig inntekt mot prisfall, men beholde noe oppside. Beskriv en protective put og en costless collar for posisjonen, og tegn utbetalingsdiagrammet for begge ved forfall.»
- **Typiske feil:** Blande long/short i collar; glemme premien i nettoutbetalingen; tegne payoff feil (put vs. call); tro at forward gir oppside.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 6.2: Binomisk risikonøytral opsjonsprising

- **id:** `fin3521-bi-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `fin3521-bi-6-1` · **kapitteltype:** teori
- **description:** Å prise en opsjon i en ett-stegs binomisk modell med risikonøytrale sannsynligheter — og hvorfor man ikke bruker de virkelige sannsynlighetene.
- **Eksamensbelegg:** Binomisk prising i opsjonssettene (Scandic O3c). **Toppkarakter-felle #3** (risikonøytral vs. virkelig sannsynlighet). Formlene **må pugges**. Prioritet: **KUNNE** (A/B-skille).
- **Forkunnskaper:** Bygger på kap. 6.1 og effektiv rente (1.1). **Symbol- og formelliste:** $u$, $d$ (opp/ned-faktor), $r_f$, $p$ (risikonøytral sannsynlighet), $C_u$, $C_d$, opsjonsverdi — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON + UTLEDNING (intuisjon): risikonøytral sannsynlighet $p = \frac{(1+r_f) - d}{u - d}$; opsjonsverdi $= \frac{p\,C_u + (1-p)\,C_d}{1+r_f}$. Hvorfor $p$ ikke er den virkelige sannsynligheten (replikerende portefølje / ingen arbitrasje gjør de faktiske oddsene irrelevante). **Warning (felle #3):** bruk ALDRI den objektive/virkelige sannsynligheten; diskontér med risikofri rente, ikke med et risikojustert krav. **Pugge-boks:** $p$-formelen + verdiformelen + «risikonøytral, ikke virkelig; diskontér med $r_f$». **Regnekjede (nyskrevet):** $S_0 = 100$, $u = 1{,}2$ (opp til 120), $d = 0{,}9$ (ned til 90), $r_f = 2\,\%$ per periode. Call med $K = 100$: $C_u = 20$, $C_d = 0$. $p = \frac{1{,}02 - 0{,}9}{1{,}2 - 0{,}9} = \frac{0{,}12}{0{,}30} = 0{,}40$. Verdi $= \frac{0{,}40\cdot20 + 0{,}60\cdot0}{1{,}02} = \frac{8}{1{,}02} = 7{,}84$.
- **Oppgavesjangre:** G. Mønstereksempel: «En aksje på 50 kr går enten opp til 65 eller ned til 40 neste kvartal. Risikofri kvartalsrente er 1,5 %. Regn ut den risikonøytrale sannsynligheten og verdien av en kjøpsopsjon med innløsningskurs 50.»
- **Typiske feil (felle #3):** Bruke virkelige sannsynligheter; diskontere med feil (risikojustert) rente; regnefeil i $p$-formelen (bytte $u$ og $d$); glemme $(1-p)$-leddet.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 6.3: Put-call-paritet og koblingen til collar

- **id:** `fin3521-bi-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `fin3521-bi-6-2` · **kapitteltype:** teori
- **description:** Den arbitrasjefrie sammenhengen mellom kjøps- og salgsopsjon, spotpris og forwardpris — og hvordan den forklarer costless collar.
- **Eksamensbelegg:** Put-call-paritet i opsjonssettene (Scandic O3e: $F = K$ gir $C = P$). Formelen **må pugges**. Prioritet: **KUNNE**.
- **Forkunnskaper:** Bygger på kap. 6.1–6.2. **Symbol- og formelliste:** $C$, $P$, $S_0$, $K$, $r_f$, $T$, $F = S_0 e^{r_f T}$ — **(må pugges)**.
- **Innholdskontrakt:** DEFINISJON + UTLEDNING: put-call-paritet $C - P = S_0 - K e^{-r_f T} = (F - K)e^{-r_f T}$ med $F = S_0 e^{r_f T}$; utledet fra at long call + short put = long forward. Spesialtilfelle $F = K$ ⇒ $C = P$. Kobling til **collar**: en collar er en kombinasjon av opsjonsposisjoner som pariteten priser konsistent. **Pugge-boks:** paritetsformelen + $F = S_0 e^{r_f T}$ + $F=K \Rightarrow C=P$. **Regnekjede (nyskrevet):** $S_0 = 79$ kr, $r_f = 3\,\%$, $T = 1$: $F = 79\cdot e^{0{,}03} = 81{,}4$ kr. Med $K = 81{,}4$: $C - P = (81{,}4 - 81{,}4)e^{-0{,}03} = 0$ ⇒ $C = P$.
- **Oppgavesjangre:** G. Mønstereksempel: «Spotprisen er 60 kr, risikofri rente 4 % og løpetid ett år. Regn ut forwardprisen, og bruk put-call-paritet til å finne verdien av en put når en call med samme innløsningskurs 60 koster 5 kr.»
- **Typiske feil:** Fortegnsfeil i pariteten ($C - P$ vs. $P - C$); glemme diskonteringen av $K$; forveksle $F$ og $S_0$; bruke enkel i stedet for kontinuerlig rente når oppgaven ber om det.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.4: Risikonøytral state-verdsettelse — egenkapital som opsjon på eiendelene

- **id:** `fin3521-bi-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `fin3521-bi-6-2` · **kapitteltype:** teori
- **description:** Å verdsette egenkapital og risikabel gjeld når selskapets fremtidige verdi er usikker: egenkapital er en kjøpsopsjon på eiendelene, gjeld er «trygg gjeld minus en salgsopsjon».
- **Eksamensbelegg:** Risikonøytral state-verdsettelse i 1/5 sett (Aluma) — «bør kjenne til», men et rent A/B-tema når det kommer (30 p). Bruker samme risikonøytrale logikk som 6.2 (felle #3). Formlene **må pugges**. Prioritet: **KUNNE/KJENNE**.
- **Forkunnskaper:** Bygger på kap. 6.2 (risikonøytral prising). **Symbol- og formelliste:** $CF$ (kontantstrøm per utfall), $D$ (gjeldens pålydende), $r_f$, egenkapital $= \max(CF - D, 0)$, gjeld $= \min(CF, D)$ — **(må pugges)**.
- **Innholdskontrakt:** REGNEPROSEDYRE: state-avhengige kontantstrømmer (f.eks. fire like sannsynlige konjunkturutfall) + nullkupong-gjeld til pålydende $D$. $V_\text{eiendeler} = \frac{E[CF]}{1+r_f}$; $V_\text{EK} = \frac{E[\max(CF - D, 0)]}{1+r_f}$ (egenkapital = **kjøpsopsjon** på eiendelene); $V_\text{gjeld} = \frac{E[\min(CF, D)]}{1+r_f}$. **Effektivt avkastningskrav på gjelden** $= D/V_\text{gjeld} - 1$ (> $r_f$ fordi gjelden er risikabel). **Kontroll:** $V_\text{gjeld} + V_\text{EK} = V_\text{eiendeler}$. **Warning:** bruk risikonøytrale (eller oppgitte like) sannsynligheter og diskontér med $r_f$ (felle #3-familien). **Pugge-boks:** de tre verdiuttrykkene + kontrollen + effektivt gjeldskrav. **Regnekjede (nyskrevet):** eiendelsverdi neste år: 200, 150, 100, 60 (like sannsynlig), $r_f = 5\,\%$, gjeld pålydende 120. $E[CF] = 127{,}5$ ⇒ eiendeler $= 121{,}4$. EK-utfall: 80, 30, 0, 0 ⇒ $E = 27{,}5$ ⇒ $V_\text{EK} = 26{,}2$. Gjeld: 120, 120, 100, 60 ⇒ $E = 100$ ⇒ $V_\text{gjeld} = 95{,}2$. Kontroll $26{,}2 + 95{,}2 = 121{,}4$. ✓ Effektivt gjeldskrav $= 120/95{,}2 - 1 = 26{,}1\,\%$.
- **Oppgavesjangre:** H. Mønstereksempel: «Et selskaps eiendeler er neste år verdt 180, 120 eller 70 (like sannsynlig). Gjelden har pålydende 100, risikofri rente 4 %. Regn ut verdien av egenkapitalen og gjelden, og det effektive avkastningskravet på gjelden.»
- **Typiske feil (felle #3-familie):** Bruke virkelige sannsynligheter uten justering; glemme $\max(\cdot,0)$/$\min(\cdot)$-strukturen; diskontere med feil rente; ikke sjekke $V_\text{gjeld} + V_\text{EK} = V_\text{eiendeler}$.
- **Quiz: 18 · Flashcards: 20**

**Prøve-kvote Del 6:** 4 prøver (6.A protective put + collar med utbetalingsdiagram, G; 6.B binomisk risikonøytral prising, G; 6.C put-call-paritet + forwardpris, G; 6.D risikonøytral state-verdsettelse — egenkapital/gjeld/effektivt krav, H).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Strategi, samlet formeloversikt (alt pugges) og sjangerguide

- **id:** `fin3521-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `fin3521-bi-0-1` · **kapitteltype:** eksamensstrategi
- **description:** Sluttoppsummering: tidsbudsjett for en 3–4-oppgavers skoleeksamen, hele formelapparatet på én oversikt (alt må pugges — intet formelark), sjangerguidens løsningsoppskrifter i kortform, og de tre toppkarakter-fellene.
- **Eksamensbelegg:** Metakapittel — bygger på hele boka. Prioritet: — (studieguidekjerne).
- **Forkunnskaper:** Bygger på alle deler. **Symbol- og formelliste:** samlet formeloversikt for hele faget — **alt merket (må pugges)** (det finnes intet formelark).
- **Innholdskontrakt:** **(A) Den samlede pugge-oversikten** — alle formlene fra §1/Pugge-boksene på én tabell (kapitalstruktur, utbytte/dividendeskatt, M&A, opsjoner/state-prising, repetisjon), med beskjeden: ingenting deles ut. **(B) Sjangerguiden** — løsningsoppskriftene fra drillkapitlene (2.7, 4.5, 5.4) + prosedyrene i 6.x i kortform, sjanger A–J. **(C) Tidsbudsjett** — vektstyrt for et 3–4-oppgavers sett på 100 poeng (tyngste kapitalstruktur-/M&A-oppgave først; teori «kort og konsist» sist). **(D) De tre fellene** (aksjeoppgjør simultant / $\tau^*_d$-fortegn / risikonøytral prising) som siste sjekkpunkt. **(E) Sensorreglene** + karakterskillene samlet, merket `(verifiser)`. **(F) Feilkatalogen** — de ti typiske feilene med henvisning til forebyggende kapittel.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Et sett har O1 kapitalstruktur (35 %), O2 utbytte/dividendeskatt (30 %), O3 M&A (25 %), O4 teori (10 %) på 240 minutter — sett opp et tidsbudsjett og en pugge-sjekkliste.»
- **Typiske feil:** Feil tidsprioritering; anta at formler deles ut; hoppe over de tre fellene; skrive langt på «kort og konsist»-teori.
- **Quiz: 14 · Flashcards: 28**

#### Kapittel 7.2: Øvingseksamen 1 — kapitalstruktur + utbytte + M&A + teori

- **id:** `fin3521-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 120 · **prerequisites:** `fin3521-bi-7-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett skoleeksamen etter fagets standardmal: fire oppgaver / 100 poeng — kapitalstruktur (MM med skatt), utbyttepolitikk/dividendeskatt, M&A (kontant vs. aksje) og en kort kapitalstrukturteori-oppgave. Kalkulator + ordbok, intet formelark.
- **Eksamensbelegg:** Speiler en typisk FIN 3521-eksamen (den mest sannsynlige profilen). Miks: O1 rekapitalisering under MM med skatt (35 %) + O2 ex-dividende/tilbakekjøp/$\tau^*_d$ (30 %) + O3 M&A kontant + aksjeoppgjør simultant (25 %) + O4 Trade-Off/Limits-teori (10 %). Prioritet: — (sluttrening).
- **Forkunnskaper:** Bygger på Del 1–6. **Symbol- og formelliste:** hele apparatet (alt pugges).
- **Innholdskontrakt:** Komplett sett med nyskrevne oppgaver som speiler temafordelingen (analysens §2), oppgitt poengvekt per delspørsmål, `collapsible`-løsningsforslag per oppgave skrevet som A-besvarelse med `tip`-notat om delpoeng/vekting. Formeloppsett vist eksplisitt overalt; MM-forutsetningene brukt aktivt; hver oppgave ender i konklusjon/tolkning.
- **Oppgavesjangre:** A, C, D, E, F, I. Mønstereksempel: hele settet.
- **Typiske feil:** Tidssprekk på O1; kalkulatorsvar uten beregning; utvanningsfellen i O3; fortegnsfeil på $\tau^*_d$ i O2; manglende konklusjoner.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.3: Øvingseksamen 2 — Miller-personskatt + dividendeklientell + M&A + opsjoner

- **id:** `fin3521-bi-7-3` · **number:** 7.3 · **estimatedMinutes:** 120 · **prerequisites:** `fin3521-bi-7-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett skoleeksamen som trener toppkarakter-temaene: Miller-modellen med personskatt, dividendeskatt med skatteklientell, M&A-aksjeoppgjør, og en opsjons-/sikringsoppgave.
- **Eksamensbelegg:** Speiler et sett med de tyngre A/B-komponentene (Nordic Solutions/NorTron-profilen + Scandic-opsjoner). Miks: O1 MM + Miller-personskatt (30 %) + O2 dividendeskatt tre investorkategorier + dividend-capture (25 %) + O3 M&A aksjeoppgjør simultant + bytteforhold (25 %) + O4 protective put/collar/binomisk/put-call (20 %). Prioritet: — (sluttrening; sikter høyt).
- **Forkunnskaper:** Bygger på Del 1–6. **Symbol- og formelliste:** hele apparatet.
- **Innholdskontrakt:** Komplett nyskrevet sett som dekker de A/B-differensierende temaene, oppgitt vekt, `collapsible`-løsningsforslag som A-besvarelse med `tip`-delpoengnotat. Alle tre fellene demonstrert (aksjeoppgjør simultant, $\tau^*_d$-fortegn, risikonøytral prising). Utbetalingsdiagram beskrevet i O4.
- **Oppgavesjangre:** A, B, D, F, G. Mønstereksempel: hele settet.
- **Typiske feil:** Miller-klammen invertert; andelsbeskatning glemt; utvanningsfellen; virkelige sannsynligheter i binomisk prising.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 3 — roterende spor: state-verdsettelse + sikring + kapitalstrukturteori

- **id:** `fin3521-bi-7-4` · **number:** 7.4 · **estimatedMinutes:** 120 · **prerequisites:** `fin3521-bi-7-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett skoleeksamen som trener det roterende femte sporet og bredden: risikonøytral state-verdsettelse, terminsikring, kapitalstruktur og en ren teori-/drøftingsoppgave.
- **Eksamensbelegg:** Speiler et sett med det sjeldnere roterende sporet (Aluma-state-prising + kaffe-termin + `FIN 35211_QP`-teori). Miks: O1 kapitalstruktur/rekapitalisering (30 %) + O2 risikonøytral state-verdsettelse — egenkapital som opsjon (25 %) + O3 forward/termin-sikring med og uten kontrakt (25 %) + O4 dividend puzzle + Trade-Off «kort og konsist» (20 %). Prioritet: — (sluttrening).
- **Forkunnskaper:** Bygger på Del 1–6. **Symbol- og formelliste:** hele apparatet.
- **Innholdskontrakt:** Komplett nyskrevet sett som dekker bredden (state-prising, sikring, teori), oppgitt vekt, `collapsible`-løsningsforslag med delpoengnotat. Risikonøytral logikk (felle #3) og «kort og konsist»-teori demonstrert; hver beslutningsoppgave ender i anbefaling.
- **Oppgavesjangre:** A, H, G, I. Mønstereksempel: hele settet.
- **Typiske feil:** Virkelige sannsynligheter i state-prising; manglende $V_\text{gjeld}+V_\text{EK}$-kontroll; skrive essay på teori; manglende anbefaling i sikringsoppgaven.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen (eksamenstreningsdel — inneholder selv de komplette settene).

---

## 4. Summeringskontroll (quiz/flashcards)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 14+16 = **30** | 16+32 = **48** |
| 1 | 1.1–1.2 | 20+20 = **40** | 22+22 = **44** |
| 2 | 2.1–2.7 | 20+20+22+20+22+20+18 = **142** | 22+22+26+22+22+24+12 = **150** |
| 3 | 3.1–3.2 | 18+18 = **36** | 24+26 = **50** |
| 4 | 4.1–4.5 | 20+20+22+20+18 = **100** | 22+22+26+22+12 = **104** |
| 5 | 5.1–5.4 | 20+20+22+18 = **80** | 22+20+24+12 = **78** |
| 6 | 6.1–6.4 | 20+20+18+18 = **76** | 22+22+20+20 = **84** |
| 7 | 7.1–7.4 | 14+6+6+6 = **32** | 28+0+0+0 = **28** |
| **Sum** | **30 kap.** | **536 ≥ 500 ✓** | **586 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Tettheten er skalert til fagets natur (jf. PRODUKSJONSLOYPE «≥500 er et gulv»):**
FIN 3521 er et **rent puggefag på formelsiden** — det deles ikke ut noe formelark,
så **hver formel må memoreres**. Derfor er **flashcard-summen (586) løftet over
quiz-summen (536)**: flashcards er den direkte treningsformen for formelpugg
(formel↔bruk), og de begrepsrike drøftingskapitlene (3.1/3.2) og formelpugg-
kapitlene (0.2 med 32, 7.1 med 28) bærer ekstra kort. Quiz-tettheten følger
frekvens: de tre perfekt-delene (2, 4, 5) bærer 322 av 536 quiz, med **Del 2
(kapitalstruktur) som den tyngste enkeltdelen (142 quiz)** fordi den er fagets
største og har det bredeste formelapparatet. Regnetunge drillkapitler (2.7, 4.5,
5.4) har lav flashcard-kvote (12) siden ferdigheten sitter i oppgaver; de tre
øvingseksamenene (7.2–7.4) har kun quiz. Boka har 30 kapitler (midt i DNA-vinduet
20–35); et rent regnefag med relativt konsentrert begrepsside trenger ikke fylle
opp mot 700, men flashcards er bevisst holdt høyt fordi memorering av formler er
selve eksamensferdigheten her.

---

## 5. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag,
formeloppsett vist eksplisitt, enhet i svaret og konklusjon/økonomisk tolkning.
Bygges som `fin3521-bi-<del>-prove` (chapterNumber `<del>.P`). Omfang i minutter.
De fire prøvene per del er spesifisert i «**Prøve-kvote Del N**»-linjene under hver
del i §3 (sjangre og innhold angitt der). Del 0 og Del 7 har ingen prøver (metadel
/ eksamenstreningsdel som selv rommer de komplette settene).

### Øvingseksamener (3 komplette skoleeksamener — kap. 7.2–7.4)

| Sett | Profil den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.2) | Standardmal | Kapitalstruktur MM 35 % + utbytte/dividendeskatt 30 % + M&A kontant+aksje 25 % + teori 10 % |
| Øvingseksamen 2 (kap. 7.3) | A/B-tung (Nordic Solutions/Scandic) | MM + Miller-personskatt 30 % + dividendeklientell/capture 25 % + M&A aksjeoppgjør 25 % + opsjoner/sikring 20 % |
| Øvingseksamen 3 (kap. 7.4) | Roterende spor (Aluma/kaffe) | Kapitalstruktur 30 % + risikonøytral state-verdsettelse 25 % + forward/termin-sikring 25 % + dividend puzzle/Trade-Off-teori 20 % |

Til sammen dekker de tre settene samtlige sentrale sjangre A–J minst én gang, og
de tre toppkarakter-fellene (simultant aksjeoppgjør, $\tau^*_d$-fortegn,
risikonøytral prising) trenes i minst to av settene hver. Alle sett er
**penn-og-papir med kalkulator + ordbok og intet formelark** — ingen todeling,
intet Excel-/gruppecase.

---

## 6. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kap. 7.1 + kapitlenes
Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — ren individuell skoleeksamen (100 %, 3–4 oppgaver /
   100 poeng, kalkulator + ordbok, rutet ark, **intet formelark**, ingen
   flervalg), den faste dramaturgien og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   **perfekt** (Del 2 kapitalstruktur, Del 4 utbytte/dividendeskatt, Del 5 M&A),
   **kunne** (Del 1 repetisjon, Del 3 kapitalstrukturteori, Del 6 opsjoner/
   sikring), **kjenne** (Del 6.4 state-verdsettelse; DCF/multipler/portefølje =
   utelatt, BØK 3423-stoff).
3. **Sjangerguiden** — de ti oppgavetypene A–J med løsningsoppskriftene fra
   drillkapitlene (2.7, 4.5, 5.4) og 6.x-prosedyrene i kortform (fra kap. 7.1).
4. **Pugge-oversikten (intet formelark)** — hele formelapparatet på én oversikt,
   fra Pugge-boksene: MM I/II uten+med skatt, $V_L = V_U + t_c D$, WACC,
   Miller-personskatt, CAPM, ex-dividende uten/med skatt, $\tau^*_d$, M&A
   (kombinert verdi/NNV/premie/aksjeoppgjør simultant), binomisk, put-call-
   paritet, risikonøytral state-prising — **alt merket «må pugges»**.
5. **Sensorreglene** — «forklarende beregninger forventes vist» (rene tallsvar =
   poengtrekk), konklusjon/økonomisk tolkning kreves, MM-forutsetningene brukes
   aktivt, «kort og konsist» på teori — pluss karakterskillene (E/C-D/A-B) og de
   tre A/B-fellene, alt merket `(verifiser)`.
6. **Feilkatalogen** — de ti typiske feilene (fra analysen §5), hver med
   henvisning til forebyggende kapittel: (1) aksjeoppgjør verdsatt til kurs før
   oppkjøpet (5.3), (2) premie blandet med frittstående verdi (5.1), (3) glemt
   $(1-t_c)$-faktor i prop. II (2.4), (4) aksjekurs faller ved tilbakekjøp (2.5),
   (5) $\tau^*_d$-fortegn/teller-nevner (4.3), (6) selskaps-andelsbeskatning
   glemt (4.4), (7) Miller-klammen invertert (2.6), (8) virkelige sannsynligheter
   i binomisk prising (6.2/6.4), (9) kalkulatorsvar uten formeloppsett (0.2),
   (10) MM-forutsetningene ikke brukt aktivt (0.2/2.1).
7. **Studieløp** — anbefalt progresjon (8-ukers og 3-ukers intensivvariant):
   Del 0 → Del 1 (repetisjon) → Del 2 (STØRST) → Del 4 → Del 5 → Del 3 → Del 6;
   prøvene underveis, de tre øvingseksamenene de siste ukene under tidspress
   (vektstyrt tidsbudsjett), med daglig formelpugg fra Pugge-boksene.

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `fin3521-bi` med alle 30
   kapitler (id/number/title/description/estimatedMinutes/topics/
   competenceGoals/prerequisites/linkedChapterId) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`. `sectionNames`
   = del-nummer → seksjonstitlene i §2-tabellen.
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–J, føringsstandarden,
   pugge-strategien (intet formelark) og de tre fellene som resten refererer til.
3. **Fundament + perfekt-delene i avhengighetsrekkefølge**: Del 1 (repetisjon) →
   Del 2 (kapitalstruktur — **bokas største del, én agent for hele delen**) →
   Del 3 (kapitalstrukturteori) → Del 4 (utbytte/dividendeskatt) → Del 5 (M&A).
4. Del 6 (opsjoner/sikring/state-prising) → Del 7 (strategi + øvingseksamenene til
   slutt — de gjenbruker alt).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§5) bygges som `fin3521-bi-<del>-prove`-
   kapitler etter hver temadel 1–6.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
  konsistente subskript ($V_U$, $V_L$, $r_E$, $r_U$, $r_D$, $t_c$, $t_E$, $t_D$,
  $t_d$, $t_g$, $\tau^*_d$, $P_{cum}$, $P_{ex}$, $S_0$).
- [ ] **Pugge-boks i hvert teori-/drillkapittel**: en `definition`-blokk «Pugge-boks
  — memorér disse formlene» med kapitlets formler + huskeregel; ingen formel
  merkes «på arket» (det finnes intet formelark — alt pugges).
- [ ] **De tre fellene har hver en egen `warning`**: simultant aksjeoppgjør (5.3),
  $\tau^*_d$-fortegn (4.3), risikonøytral prising (6.2/6.4) — pluss repetert i
  kap. 0.1/0.2 og 7.1.
- [ ] **MM-perfekt-marked-rammen brukt aktivt**: hvert løsningsforslag som hviler
  på en MM-forutsetning sier det eksplisitt.
- [ ] **Notasjonskonsistens**: tekstsøk over alle fin3521-bi-filer — $D$ = gjeld,
  dividende per aksje alltid **DIV** (aldri «$D$»); spotpris alltid $S_0$, synergi
  $S$ (kun Del 5). **Forbudte termer** (BØK 3423-stoff): «effisient front»,
  «porteføljeoptimering», «saldoavskrivning», «flervalg», «Excel-case», full
  DCF-/multippel-verdsettelse (EV/EBITDA, P/E) utover Del 0-avgrensningens ene
  setning.
- [ ] **Tallregning overalt**: hver regneoppgave har eksplisitt formeloppsett →
  innsatte tall → svar med **enhet** (kr/mill./%) → **konklusjon/økonomisk
  tolkning**. Teori-/drøftingsoppgaver besvart «kort og konsist» (3–6 setninger).
- [ ] **Ingen flervalg**: quiz brukes som begreps-/formeldrill, ikke som
  eksamenssjanger-simulering med straffscoring.
- [ ] **Fellene drillet**: hver av de ti typiske feilene (§6.6) har minst én
  advarsel + én eksamensklone-oppgave i forebyggende kapittel.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
  herfra), Typiske feil-`warning`, Forkunnskaper-`text` + Symbol- og
  formelliste-`collapsible`, Motivasjon, `definition`/`theorem`, Pugge-boks, 2–4
  eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`,
  repetisjons-`collapsible`; drillkapitler har løsningsoppskrift + sensor-
  kommentert case + 10–14 oppgaver.
- [ ] **Quiz-sum ≥ 536 og flashcard-sum ≥ 586** per kvotetabellen (§4).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener (3–4 oppgaver,
  kalkulator, **intet formelark**) som sammen dekker sjangrene A–J.
- [ ] **Kryssbok-lenker**: alle `/bi-okonomi/...`-lenker peker på eksisterende
  kapitler (`bi-okonomi-4-1`, `-4-2`, `-4-3` er verifisert). **Ikke** lenk til
  `bok3423-bi` (ikke bygget ennå) — omtal den kun i tekst.
- [ ] **Arbeidsdeling mot BØK 3423 respektert**: FIN 3521-boka gjentar ikke
  NPV/IRR/WACC-konstruksjon/kontantstrøm/portefølje; den repeterer kun kompakt
  tidsverdi/CAPM (Del 1) og bygger videre på finansieringssiden.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne selskapsnavn, egne tall,
  egne scenarioer; **ikke** Sofa, Art Technologies, Scan-Oil, Nordic Solutions,
  NorTron, Fantasy, Marine Shipping, Alkro, ABC/DEF, TROY/BRA, Poki/Ikop/Compete,
  Scandic, Aluma; ingen formuleringer fra reelle sett; pensumlitteratur (Berk &
  DeMarzo) refereres, aldri siteres i lengde. Sensorkrav uten fasitbelegg merkes
  `(verifiser)` (arkivet har ingen sensorveiledninger).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
</content>
