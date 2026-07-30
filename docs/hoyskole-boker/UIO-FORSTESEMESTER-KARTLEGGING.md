# UiO 1. semester — komplett kartlegging og dekning

Målt 30. juli 2026 mot UiOs egne programsider. Erstatter den ufullstendige lista
i `TODO-OPUS.md`, som selv sa at «en komplett kartlegging … er under arbeid».

## Metode

Alle **67 bachelorprogrammer** og **5 profesjonsstudier** som tar imot ferske
studenter, hentet fra `uio.no/studier/program/<slug>/oppbygging/`. Programmer med
studieretninger som har ulikt 1. semester er ført som separate løp — det gir
**104 løp**.

**Anbefalt studieløp, ikke undervisningssemester.** Et emne kan undervises om
høsten uten å ligge i 1. semester; 3. og 5. semester er også høst. Dette var
allerede dokumentert som fallgruve 25. juli, og kartleggingen bekreftet den:
`historie` har for eksempel *ikke* exphil i 1. semester, den ligger i 2.

⚠ **Studiepoeng ligger i `colspan`, ikke i teksten.** En agent leste HTML-tabellen
direkte i stedet for å stole på sammendrag, og fanget tre feil som ellers hadde
gått gjennom: psykologiemnene er 5 sp (ikke 10), `PED1001` er 20 sp, og
medievitenskaps tabell fyller bare 20 av 30 sp i UiOs egen HTML.

## Dekning i dag

| mål | tall |
|---|---|
| Unike emner i 1. semester (0 sp ekskludert) | **136** |
| Emner vi har bok for | **15 = 11 %** |
| Løp der ALLE 1.-semesteremner er dekket | 10 av 103 = **10 %** |
| Løp der minst ett emne er dekket | 64 av 103 = **62 %** |
| Løp uten ett eneste dekket emne | 39 av 103 = **38 %** |

**Spriket mellom 11 % og 62 % er `EXPHIL03`.** Det ene emnet ligger i 1. semester
i **36 av 104 løp**. Det drar «minst ett emne» kraftig opp uten å dekke noe annet
studenten trenger.

## De tre store treffene

`EXPHIL03` (36 løp), `MAT1100` (16) og `IN1900` (14) er de mest utbredte emnene
ved hele universitetet, og alle tre er dekket. Prioriteringen fra 25. juli traff
riktig.

## Hva som IKKE kan skrives

Av de 121 manglende emnene har **23 materiale i arkivet**. De øvrige **98 har
ingen kilder i det hele tatt** — verken mappe under `Eksamner/UiO/` eller treff i
filnavn andre steder i arkivet.

Det er den harde grensen: uten eksamenssett kan vi ikke lage en eksamensrettet
bok. Å skrive en uten kilder ville brutt det bærende løftet — at boka er bygget
på fagets faktiske eksamensarkiv.

### De største hullene uten kilder

| emne | løp | hva det er |
|---|---|---|
| `HON1000` | 10 | Honours-programmets fellesemne |
| `EXFAC03-SPR` | 6 | Examen facultatum, språk |
| `MAT1105` | 5 | Matematikk for finans og forsikring |
| `EXFAC03-HARK` | 4 | Examen facultatum, historie/kultur |
| `KONS1000` · `MØNA1000` · `MØNA1505` · `EXFAC03-NORD` | 3 hver | konservering, Midtøsten, nordisk exfac |

**Et mønster verdt å se:** fire av de fem største hullene er *examen
facultatum*-varianter. `EXFAC03-SPR`, `SVEXFAC03`, `EXFAC03-HARK` og
`EXFAC03-NORD` dekker til sammen **18 løp**. Samme emnetype som exphil —
obligatorisk innføring, mange studenter, lite konkurranse fra forlagene.
`SVEXFAC03` har kilder; de tre andre har ikke.

### De 23 som KAN skrives

Toppen, sortert på antall løp: `SVEXFAC03` (5), `STV1010` (3), `FIL1005`,
`PSY1250`, `PSY1200`, `SOSANT1050`, `SOS1100`, `STV1400`, `PSYC1202` (2 hver),
deretter 14 emner med ett løp hver — blant dem `BIOS1110`, `IN1140`, `KJM1101`,
`INTER1000`, `STV1200`.

## Hvor vi lander når alt skrivbart er skrevet

| mål | i dag | etter |
|---|---|---|
| Emnedekning | 11 % | **28 %** |
| Løp med ALLE emner dekket | 10 % | **17 %** |
| Løp med minst ett emne | 62 % | **72 %** |
| Løp uten noe | 38 % | **28 %** |

**Taket er 28 % emnedekning.** Resten krever kilder vi ikke har. Vil du forbi
det, må arkivet utvides — ikke bøkene skrives raskere.

## Forbehold

Fire programmer i tallene er **nedlagte** og tar ikke imot nye studenter: `aas`,
`matematikk-informatikk`, `matematikk-okonomi` og `nordisk`. Den reelle dekningen
er marginalt bedre enn tallene viser.

`euram` og flere språkprogrammer har nesten bare valgfrie emner i 1. semester —
italiensk og spansk har ingen fast emnekode i det hele tatt. De kan ikke dekkes
med ett emne uansett hvor mye vi skriver.

Rådataene ligger i `docs/hoyskole-boker/uio-forstesemester.json`.
