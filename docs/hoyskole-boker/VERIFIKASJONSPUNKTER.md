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

## Lukkede punkter

*(ingen ennå)*
