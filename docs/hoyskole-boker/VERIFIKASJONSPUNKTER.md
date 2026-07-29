# Verifikasjonspunkter — samlet under byggingen, avgjøres i steg 3

Funn fra byggebølgen som IKKE er feil i seg selv, men som krysser agentgrenser
og derfor må avgjøres av en verifiseringsredaktør som ser flere deler samtidig.
Byggelederen fører dem her når de dukker opp, framfor å gripe inn midt i en
bølge og risikere å motarbeide en agent som fortsatt jobber.

Ryddes når steg 3 er ferdig.

---

## med1100

### V1 — «Felle N» i Del 1 mot feilkoderegisteret E1–E26

**Observert 28. juli.** Del 0 lover leseren «et register over de faste fellene,
nummerert E1 til E26», og kap. 0.2 har hele registeret i en collapsible. Del 1
bruker ingen E-koder i det hele tatt — den skriver «Felle 1/2/3» med
fagkonkret innhold (4–5 bokser per kapittel).

**Del 1-agentens begrunnelse:** ingen av de 26 kodene gjelder humanbiologi-
oversiktsstoff. Registeret dekker statistikk (E1–E12), blokk 2-cellebiologi
(E20–E22) og blokk 3-latin (E23–E26). Å tvinge inn en irrelevant kode ville
vært verre enn å la være.

**Byggelederens vurdering:** begrunnelsen holder — dette er ikke en feil.
Men det gjenstår en leseropplevelse å avklare: en student som nettopp har lest
at boka har et nummerert feilregister, møter i neste kapittel unummererte
feller uten forklaring på forskjellen.

**Til verifikatoren:** avgjør ÉN av to:
- (a) «Felle N»-boksene i Del 1 får en åpningssetning som sier at dette er
  kapittellokale feller, til forskjell fra det nummererte registeret som dekker
  de faste eksamensfellene, eller
- (b) Del 0s formulering mykes opp så den ikke lover at hver felle i boka har
  et nummer.

Ikke gjør begge. Ikke innfør nye E-koder — nummereringen er låst til
EKSAMENSANALYSE.md.

### V3 — kapitteltitler som avviker fra skjelettet (byggeleders feil)

**Observert 28. juli.** Byggelederen forkortet kapitteltitler da de ble hentet ut
til agentpromptene, og fire kapitler fikk derfor titler som ikke sto i
skjelettet. Ingen port håndhever kapitteltittel mot SKJELETT.md, så dette gikk
grønt gjennom alle sjekker.

| Kapittel | Avgjort |
|---|---|
| `tdt4110-6-1` | **Rettet til skjelettets.** «gitt `sort_list`» er en utlevert hjelpefunksjon studenten får på eksamen — ikke det samme som Pythons `sorted()`. Tittelen min utelot en eksamensrelevant ting. |
| `tdt4110-6-3` | **Rettet til skjelettets.** «(Big-O)» hører hjemme i tittelen; notasjonen undervises, det er den formelle asymptotiske analysen som er utenfor pensum. |
| `med1100-0-2` | **Beholdt agentens tittel.** Skjelettet sier «minuspoeng-strategien i blokk 2», men kapitlet handler om asymmetrien MELLOM alle tre blokkene — det er nettopp poenget. Agentens tittel er den fagligere. Registrert her så avviket ikke er stille. |
| `med1100-4-4` | **Agenten fulgte skjelettet.** Prompten min sa «binomialfordeling», skjelettet «binomisk fordeling». Riktig håndtert — skjelettet er autoritativt. Ingen handling. |
| `tdt4110-7-2` | **Ikke avgjort.** Fila eies av en agent som fortsatt jobber. Sammenlign mot skjelettet når Del 7 er ferdig. |

---

## tdt4110

### V2 — ⚠ Kap. 1.4 tagger kjørbar Python som ```text og mister portdekning

**Observert 28. juli. Dette er mer enn kosmetikk.**

Begge agentene løste samme problem — interaktiv kode kan verken kjøres av
utskriftsporten eller stå som dødt fragment — men på prinsipielt ulike måter:

| | ` ```text ` brukes til | ` ```python ` brukes til |
|---|---|---|
| Del 2 (2.1, 2.2) | ekte pseudokode («vis valgene», «kall funksjon 1») | all kjørbar kode |
| Del 0+1 (1.4) | **kjørbar Python med `input()`** | resten |

Del 2s bruk er prinsipiell og riktig. Del 0+1s er en omgåelse: `sjekk-kode.py`
punkt 5 krever en «**Utskrift:**»-blokk etter enhver ` ```python `-blokk som
inneholder `print(` i et fasit-/teorifelt, og `input()`-kode kan ikke
produsere en slik utskrift uten stdin. Ved å tagge kilden ` ```text ` slipper
den unna kravet — men da hopper porten også over **punkt 1, kompileringssjekken**.

**Målt konsekvens:** 7 blokker i kap. 1.4 inneholder ekte Python som ingen port
kontrollerer. En skrivefeil der ville nådd leseren.

Agenten begrunnet valget med at in1000 gjør det samme. Det stemmer — in1000 har
20 slike blokker, alle ` ```text `. Men in1900 har 6, alle ` ```python `. De to
ferdige bøkene er altså uenige, og ingen av dem bruker «Kjøring:»-blokker i det
hele tatt. Presedensen avgjør derfor ingenting; begge tdt4110-agentene har
funnet på noe bedre enn den.

**Til verifikatoren:** konverter de kjørbare blokkene i 1.4 til ` ```python `
etter felleskravenes form (definisjon uten `print` på toppnivå → «**Utskrift:**
ingen» → «**Kjøring:**»-blokk med faktisk kjørt dialog). KJØR dem etterpå og
bekreft at `sjekk-kode.py` faktisk kompilerer alle sju. Ekte pseudokode skal
fortsatt være ` ```text `.

Gjelder også 2.1/2.2 hvis samme mønster finnes der, og alt Del 5/7/9 har
skrevet — de bygger etter felleskravene, så de bør allerede være riktige.

---

### V4 — tynn margin i med1100-4-3 oppgave 2 (agentens eget flagg)

**Observert 28. juli.** Oppgave 2 i kap. 4.3 ber om oddsforholdet, mens
odds-begrepet formelt innføres i løkke 2 — altså etter oppgaven.

Del 4-agenten meldte det selv og argumenterte for at det holder: regneprosedyren
og Eksempel 1 rett foran innfører og bruker `OR = ad/bc` eksplisitt, så oppgaven
hviler på stoff som står foran den.

**Byggelederens vurdering:** argumentet holder formelt. Men agenten kalte det
selv «den ene plassen i Del 4 der marginen er tynn», og det er verdt et blikk
fra noen som leser kapitlet i sammenheng.

**Til verifikatoren:** les løkke 1 og 2 i 4.3 som en student uten forkunnskap.
Er odds forstått når oppgave 2 kommer? Hvis ikke, flytt oppgaven bak løkke 2
framfor å skrive om teorien.

---

### V5 — manglende kryssreferanser fra Del 8 til kap. 6.2 og 6.3

**Observert 28. juli.** Del 8-agenten introduserte `Algoritme` og `Big-O` som
egne definisjoner i kap. 8.7, slik at ingen oppgave krever usett forkunnskap.
Den lenket til kap. 6.1, men 6.2 og 6.3 fantes ikke på disk da den skrev.

Begge finnes nå. Kompleksitet (~40 % frekvens) behandles i 6.3, og binærsøk —
det klassiske O(log n)-eksemplet — i 6.2.

**Til verifikatoren:** legg inn `[kap. 6.2](/tdt4110/tdt4110-6-2)` og
`[kap. 6.3](/tdt4110/tdt4110-6-3)` der 8.7 omtaler kompleksitet og søking.
Ikke skriv om definisjonene — de skal stå, siden en student kan lese Del 8
uten å ha lest Del 6.

---

### V8 — JSON-fella: enkel backslash blir kontrolltegn

**Observert 29. juli i tma4135.** Del 5-agenten skrev tittelen

    Likevektsløsningen når $t \to \infty$

med ENKEL backslash i JSON-kilden. JSON tolker `\t` som tabulator, så leseren
fikk `$t<TAB>o \infty$` — en ødelagt overskrift.

`sjekk-latex.py` fanger den som «KONTROLLTEGN \t (TAB)», men bare hvis noen
kjører porten. Del 3+4-agenten fant den i en annen agents fil under sin egen
kjøring, og meldte den framfor å redigere.

**Utsatte LaTeX-kommandoer:** `\to`, `\times`, `\theta`, `\tau`, `\nabla`,
`\neq`, `\beta`, `\rho` — alt som starter med `t`, `n`, `b`, `r`, `f`, `v`.

**Motgiften er å ikke skrive JSON for hånd.** `json.dump` escaper riktig av seg
selv. Regelen er lagt inn i tma4135s byggeprompter; den bør inn i alle
kodefag-/mattefag-kontrakter.

---

## Lukkede punkter

**V1** (med1100 «Felle N» mot E-registeret) — LUKKET 29. juli, **alternativ (a)**.
Del 0s løfte er sant (registeret finnes og er nummerert E1–E26), så det er ikke
formuleringen som skal mykes opp — det er kollisjonen «Felle 1» mot «felle E1»
som må navngis. De fire «Typiske feil»-boksene i 1.1–1.4 har fått én felles
åpningssetning som sier at fellene er kapittellokale og at nummereringen ikke har
noe med E-kodene å gjøre. Del 2–7 har ikke samme sprik (kontrollert: kun Del 1
bruker «Felle N» uten E-kode). **Til Del 8–14-verifikatoren:** samme mønster
finnes i 9.1–9.3 og 10.1–10.4 (6–7 «Felle N» per kapittel) — vurder samme notis.

**V4** (med1100 4.3 oppgave 2 ber om OR før odds er innført) — LUKKET 29. juli.
Lest som en student uten forkunnskap holder ikke marginen: løkke 1 gir riktignok
`OR = ad/bc` i regneprosedyren og i Eksempel 1, men **ordet «odds» er aldri
forklart der** — og «odds» står eksplisitt på kontraktens liste over termer som
skal glosses ved første bruk. Oppgaven er derfor **flyttet bak løkke 2**, rett
etter Eksempel 2. Teorien er urørt. Oppgavenumrene står fortsatt i stigende
rekkefølge (1, 2, 3 …), og den ene framoverpekeren i fasiten («vi tallfester det
i neste løkke») er snudd til en bakoverpeker.

### V7 — ⚠ ÅPEN: CanMEDS-rollen «forvalter» i Del 2 (krever kildeavgjørelse)

**Funnet 29. juli, ikke rettet — bevisst.** Kap. 2.1 tilskriver eksplisitt de sju
legerollene til **CanMEDS**, og lister: medisinsk ekspert · kommunikator ·
samarbeider · **leder** · helseforkjemper · akademiker · **forvalter**.

Ingen CanMEDS-versjon har både «leder» og «forvalter»: 2005 har *Manager*, 2015
erstattet den med *Leader*. Og **begge versjoner har *Professional* /
«profesjonell»**, som boka ikke nevner i det hele tatt. Rollen «forvalter» ser ut
til å være den gamle Manager-rollen, som altså er doblet med «leder», mens den
sjuende rollen mangler.

**Hvorfor det ikke er rettet her:** rettingen er ikke kirurgisk. «Forvalter»
opptrer 20 steder i `med1100-2-1`, 6 i `med1100-2-prove` — og **11 ganger i den
wirete quizen** `src/lib/data/quiz-data-med1100.ts`. Retter man bare
kapittelfilene, får man en ny og verre inkonsistens mot quizen. Og valget krever
et kildesvar verifikatoren ikke har: hvilken rolleliste MED1100 faktisk
underviser.

**Til byggelederen:** avklar mot pensum/emnesiden, og gjør så endringen samlet i
kapittelfiler + quiz. Berørte blokker i 2.1: `nokkelfakta-tekst` (rolletabell +
CanMEDS-raden), `rolle-intro`, `def-canmeds`, `def-rolle-forvalter`,
`def-rolle-helseforkjemper`, `rolle-kobling`, `ex-2`, `oppg-4-e`, `oppg-8-e`,
`warning-feil` pkt. 4, `repetisjon-tekst` pkt. 4–5; i 2.P: `forkunnskaper`,
`p1`-oppgave 4, `p4`-selvdiagnose. Temaet er en gjenganger (legens roller: rundt
12 av 16 sittinger), så det haster.

**V2** (tdt4110 kap. 1.4 tagget kjørbar Python som ```text) — LUKKET 29. juli.
Verifikatoren fant 28 slike blokker i åtte filer, ikke sju i én. 851 → 880
kontrollerte kodeblokker. Regelen som ble brukt: ```text er for det som ikke KAN
kjøres — plassholdere, `<…>`-maler, feilmeldinger, kall-stakker, fragmenter med
udefinerte navn, plantede *syntaks*feil. Semantiske feil kompilerer og skal ha
```python.

**V3** (kapitteltitler) — LUKKET. Alle 47 kontrollert ordrett mot skjelettet.

**V5** (kryssreferanser fra 8.7 til 6.2/6.3) — LUKKET 29. juli. 8 lenker lagt inn
på fire steder; definisjonene står urørt, siden Del 8 skal kunne leses uten Del 6.

### V6 — ⚠ LÆRDOM: en flaky port er farligere enn en rød

`tdt4110-7-6-opg-8` låste fasiten til `False` for
`print(list(set(navn)) == a)`. Svaret avhenger av PYTHONHASHSEED.

**Målt rate: 54 av 300 kjøringer gir `True` — 18 %, altså 1 av 6.** Det stemmer
med teorien: `list(set(...))` gir én av 3! = 6 rekkefølger, og nøyaktig én er
lik `a`. Byggelederens første anslag «hver tredje gang» kom fra 4 av 12 og var
småutvalgsstøy.

**Porten var derfor ikke rød — den var flaky.** `sjekk-sporing.py` feiler bare
når kjøringen tilfeldigvis gir `True`. Målt: 11 av 12 kjøringer grønne. Feilen
ville passert de fleste sluttporter og slått ut sporadisk måneder senere, hos
noen som ikke visste hvorfor.

**Til framtidige bøker:** hash-avhengige uttrykk i fasitkode kan ikke fanges av
en enkelt portkjøring. Sveip eksplisitt etter `list(set(`, `for … in set(`,
`print(set(`, `return set(`, `set(...).pop()` og `join(set(` i KJØRBAR kode —
ikke i prosa, der boka gjerne advarer mot dem. Verifikatoren kjørte i tillegg
`sjekk-utskrift.py` under seks ulike faste seeds over alle 25 filer, 150
filkjøringer, 0 avvik. Det er den sterke kontrollen.

NB: `sjekk-utskrift.py` forbruker filer i datadir-en, så den må regenereres
mellom passene — ellers får du falske `FileNotFoundError`.
