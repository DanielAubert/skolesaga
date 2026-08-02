# Restanse: deloppgaver merket (i), (ii), (iii)

Produkteierregel, ufravikelig: **deloppgaver merkes a), b), c)** — aldri
romertall. `sjekk-bok.py` blokkerer nå på dette når romertallet står i selve
oppgaveteksten (`task`/`problem`), og nevner det rådgivende når det bare står i
fasiten.

Målt 3. august 2026 i live-katalogen: **12 oppgaver i 12 kapitler**, pluss 20
kapitler der romertallet bare står i fasit/hint.

## Hvorfor dette ikke ble batch-rettet

Et automatisk bytte ble skrevet og **forkastet** etter tørrkjøring. Fire
selvstendige feller gjorde resultatet inkonsistent — og delvis rettet er verre
enn urørt, fordi to merkesystemer i samme oppgave er mer forvirrende enn ett
gammeldags:

1. **Delvis erstatning.** Første utkast byttet bare `**(i)**` og linjestart­formen.
   `tma4110-3-1` ville blitt «a) $W_1$ …, (ii) $W_2$ …».
2. **Oppgaven bruker allerede a)-merking** på ett nivå (`tma4135-9-1`) — byttet
   ville gitt to a)-er i samme oppgave.
3. **To nivåer:** `ling1100-11-1` blander parentesbokstaver «(a)» med romertall.
4. **Prosahenvisninger byttet ikke med.** `mat111-uib-3-5` skriver «Koble hver
   beskrivelse av f (i–iii) …» og `utv1000-8-1` skriver «som drøftingsmateriale
   i ledd ii og iii» — uten parenteser. Etter et bytte peker prosaen på
   etiketter som ikke finnes.

I tillegg er flere av filene lagret som **én linje** (`s2-9-1`), så en
`json.dump` med fast innrykk ville gitt diff på hele fila og skjult den
faktiske endringen.

⚠ Forankret erstatning har ødelagt kapittelinnhold i dette repoet tre ganger.
Denne restansen rettes **én oppgave om gangen, med øyne på både oppgave og
fasit**, ikke med et skript.

## Listen

| kapittel | merknad |
|---|---|
| `econ2220-4-4` | rett frem |
| `fil1001-0-1` | rett frem |
| `fil1001-1-1` | rett frem |
| `fil1001-7-3` | rett frem |
| `s2-9-1` | ⚠ fila er én linje — bytt kirurgisk, ikke re-dump |
| `tma4110-1-2` | rett frem |
| `tma4110-3-1` | rett frem |
| `tma4245-10-1` | rett frem |
| `utv1000-1-2` | rett frem |
| `utv1000-8-1` | ⚠ fasiten skriver «i ledd ii og iii» uten parenteser — må med |
| `mat111-uib-3-5` | ⚠ prosahenvisning «(i–iii)» må rettes samtidig |
| `ling1100-11-1` | ⚠ blander «(a)» og romertall — avklar hvilket nivå som er hva |
| `tma4135-9-1` | ⚠ bruker allerede a) på ett nivå |

De 20 med romertall kun i fasit/hint er som regel tilbakevisninger («Ingen feil
— (i)») eller oppramsinger av modellens ledd, ikke deloppgavemerking. De
flagges rådgivende og skal vurderes, ikke rettes mekanisk.
