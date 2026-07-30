# Faglig riktighet — hva vi faktisk vet, og hva vi ikke vet

Målt 30. juli 2026. Skrevet fordi faglig riktighet er det viktigste, og fordi
det er den ene tingen porteføljen ikke har noe samlet mål på.

## Hovedfunnet, sagt rett ut

**79 av 112 bøker har ingen faglig kontroll i det hele tatt.** De har grønne
porter, men portene måler *form*: at LaTeX rendrer, at fasiten ikke ligger på
samme plass, at koden kjører. Ingen av dem sier om innholdet er sant.

| evidensgrunnlag | bøker | hva det faktisk er |
|---|---|---|
| Lese-audit (menneskelesing) | 4 | `jus1111`, `exphil03`, `stv1100`, `econ1310` — lest lineært som nybegynner, hver oppgave forsøkt løst med bare bakoverstoff |
| Ungdomsskole-review | 3 | 403 funn, tier A+B fikset, merget som PR #1 |
| Byggekontrakt + egen sluttport | 26 | byggeagentens maskinkontroller (507, 887, 674, 321, 123 …) |
| **Ingen** | **79** | grønne formporter, ingenting mer |

## Hvorfor det ikke finnes ett verktøy som måler dette

Jeg forsøkte å bygge et: en korpusvid kontroll som etterregner alle rent
numeriske likhetskjeder i matten. Grepet er hentet fra byggeagentenes egne
sluttporter, som fant 5 reelle feil i tfy4115 og 5 i ma1301 Del 2+3.

Det virker ikke korpusvidt, og hvorfor er verdt å vite:

| kalibreringsrunde | «avvik» | hva de viste seg å være |
|---|---|---|
| naiv | 27 i `1t` alene | distraktoralternativer — bevisst gale svar |
| + hopp over `options` | 12 i `1t` | `$-1 = 0$`, brukt for å vise at en likning ikke har løsning |
| + feilmarkører | 1 668 | `\sqrt{36}\cdot\sqrt{2} = 6\sqrt{2}` — eksakt brøksammenligning av irrasjonale tall |
| + toleranse | 1 297 | `\left(\frac{3}{11}\right)` — **Legendre-symbol**, ikke en brøk |
| + notasjonsfilter | 1 054 | `15^4 = 113` — **modulær aritmetikk**, modulusen står utenfor formelen |

`ma1301` gikk fra 246 «avvik» til 8, og **alle 8 er falske positive**: modulær
aritmetikk der modulusen er oppgitt i teksten rundt. Bokas egen sluttport, med
887 kontroller, hadde rett. Min tok feil.

**Lærdommen:** i hvert fag betyr `=` noe fagavhengig. Kongruenser, Legendre- og
Jacobi-symboler, asymptotisk notasjon, matriser, intervaller. En universell
kontroll kan ikke vite hvilken. Det er nettopp derfor byggeagentene skrev
**skreddersydde** sluttporter per bok framfor én felles — og det var riktig valg,
ikke dobbeltarbeid.

De 1 054 gjenstående kandidatene korpusvidt er derfor **ikke** en feilliste. De er
råmateriale som må leses av noen som kan faget.

## Hva som faktisk måler faglig riktighet

Tre ting, i stigende kostnad og treffsikkerhet:

**1. Fagspesifikk sluttport, skrevet av den som skriver boka.** Leser
tallpåstander rett ut av de ferdige JSON-filene og regner dem om. Fanget i denne
runden: fem feil i tfy4115 Del 6+7 som byggeskriptet ikke kunne se, fire i
tfy4115 Del 4+5 (blant dem en Steiner-korreksjon beskrevet i gal retning), fem i
ma1301 Del 2+3 (blant dem en forvekslet krypterings-/dekrypteringsretning i RSA).
26 bøker har dette. De 86 andre har det ikke.

**2. Symbolsk utledning fra førsteprinsipper.** To fysikkfeil i tfy4115-skjelettet
var *plausible* og overlevde lesing: elastisk støt med feil fortegn i
$(m-M)/(m+M)$, og rakettlikningen med $e^{+\Delta v/u}$. Begge falt først da noen
utledet dem med sympy fra bevaringslovene.

**3. Menneskelesing.** Ungdomsskole-reviewen fant **403 funn** i bøker som
passerte alle porter. Det er den eneste metoden som fanger at et resonnement er
galt, at en definisjon er upresis, eller at en lovhenvisning er foreldet.
Lese-auditen fant motstridende doktrine i `jus1111` — en representantregel der
boka og quizen lærte bort hver sin ting.

## Anbefaling

Prioriteringen bør følge **eksponering × fravær av evidens**, ikke bokstørrelse
alene:

1. **`1p`, `1t`, `2p`, `10`, `9`, `8`** — matte og ungdomsskole. Størst
   lesertall, og regnefag er der en feil er entydig gal og lettest å oppdage av
   en elev. `8` topper kandidatlista med 315 numeriske kandidater.
2. **`fys1`, `fys1001`, `fysikk2`, `fys1100`** — 175 kandidater til sammen, og
   fysikk er faget der plausible fortegnsfeil overlever lesing.
3. **`med1100`** — 24 kandidater, men medisinske normalverdier har en egen
   risiko. `docs/hoyskole-boker/med1100/USIKRE-TALL.md` finnes alt.
4. **De 79 uten noen faglig kontroll** — her er en lesende revisor per bok den
   eneste veien. Ungdomsskole-modellen (403 funn) er malen.

## Forbehold om dette dokumentet

Kandidattallene måler hvor mye **maskinsjekkbar** matte en bok har, ikke hvor
mange feil den har. En humaniorabok får null kandidater uten at det sier noe om
riktigheten. Rangeringen over er derfor et sted å begynne, ikke en dom.
