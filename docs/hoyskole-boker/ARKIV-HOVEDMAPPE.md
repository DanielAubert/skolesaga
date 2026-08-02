# Eksamensarkivet — hovedmappa

**`~/Desktop/Eksamner/` er hovedmappa.** Alt kildemateriale bøkene bygges på,
ligger her. Ingen andre steder. Målt 2. august 2026:

| | |
|---|---|
| Filer | **50 262** (uten symlenker, uten `_sortering/`) |
| Diskbruk | **16 GB** |
| Struktur | én mappe per **institusjon** på toppnivå, emnekode under |

Mappa er ikke i git og skal ikke være det.

## Strukturen etter sorteringen (2. august 2026)

Produkteier har sortert arkivet fra én stor nedlastingsmappe til
**institusjonsmapper på toppnivå**, med emnekode som undermappe:

```
Eksamner/
├── UiO/            13 716 filer i 1 249 emnemapper   ← desidert størst
│   └── JUS1211/    eksamen/ + oppgavesett + veiledninger
├── NTNU/           11 994
├── USN/             4 025
├── OsloMet/         2 709
├── UiA/             2 133
├── HVL/             2 090
├── HiØ/             1 407
├── UiT/               678      HINN/ 658     NIH/ 603     NMBU/ 595
├── UiS/               454      UiB/  310     NHH/ 273     NOKUT/ 226
├── Nord/              211      BI/   166     Ansgar/ 37   Volda/ 26
├── HiMolde/             6      Kristiania/ 4
└── Usorterte eksamner/ 1 670   ← restpost, ikke tom ennå
```

**Understrek-mapper er arbeidsmapper, ikke kildemateriale:**

| mappe | hva det er |
|---|---|
| `_nedlastet-2026-07-30/` | **indeksene og manifestene** — se under. 4 956 filer igjen: institutt­arkiver som ennå ikke er sortert ut, karantene og gråsone |
| `_sortering/` | **14 441 symlenker.** Teller ALDRI som egne filer — dobbelttelling |
| `_MELLOMLAGER-uia/` | UiA-henting under arbeid |
| `_KALIBRERING-besvarelser/` | 100 filer, kalibreringsmateriale |
| `_kvalitetskontroll-skript/` | skript |

## ⚠ Indeksene ble bygget FØR sorteringen

Dette er det viktigste å vite når du slår opp noe:

`_nedlastet-2026-07-30/INDEKS.csv` (29 746 rader) har **`mappe` = emnekode**,
ikke institusjon. Det finnes **ingen institusjonskolonne**. Radene er fortsatt
gyldige for emnekode, år, sesong, termin, type, juridisk status, md5 og
`kilde_url` — men de sier ikke lenger *hvor* fila ligger.

**Slik finner du en fil i dag:** søk etter emnekoden under institusjonsmappene,
ikke etter stien i indeksen.

`FLYTTELOGG-2026-07-30.csv` (30 822 rader) dokumenterer selve flyttingen og er
broen mellom gammel og ny plassering hvis du trenger den.

Andre nøkkelfiler i `_nedlastet-2026-07-30/`:

- **`TERMINER.csv`** — grunnlaget for ALLE «N av M sett»-påstander i bøkene.
  Bokmål, nynorsk og engelsk er tre filer av samme eksamen; termin er enheten,
  aldri filtellingen.
- `INNHOLD.md` / `INNHOLD.json` — generert innholdsfortegnelse
- `BRUKSREGLER.md` — hva som kan hostes og ikke
- `MANIFEST-*.csv` — én per henterunde, med `kilde_url`

## ⚠ To målte defekter i TERMINER.csv (funnet 2. august 2026)

Termindataene er grunnlaget for ALLE «N av M sett»-påstander i bøkene. To feil
er verifisert, og begge gjør at tallet kan bli for lavt eller bety noe annet
enn det ser ut til.

**1. `har_fasit=ja` betyr «har sensorveiledning», ikke fasit.**

Kolonnen er internt konsistent — de 6 497 ja-radene er nøyaktig de med
`losningsfiler > 0`. Problemet er hva klassifikatoren regner som løsningsfil:
den teller **sensorveiledninger**. For JFEXFAC04 er 35 av 38 rader merket
`har_fasit=ja`, mens arkivet inneholder **null** løsningsforslag for emnet —
det som finnes er 37 sensorveiledninger.

**Konsekvens:** «N terminer med fasit» hentet rett fra kolonnen er misvisende.
Tell sensorveiledning og løsningsforslag hver for seg, og si hvilket du mener.
Bøkene som er bygget, gjør dette riktig fordi kontraktene ble skrevet ved å
lese filene — ikke ved å stole på kolonnen.

**2. 1 332 rader har «U» i terminfeltet — sammenslåtte eller ukjente sesonger.**

De fordeler seg på **577 emner**, og i hvert eneste tilfelle finnes året BARE
som U-rad. Der emnet har hatt både vår- og høsteksamen samme år, er de to
slått til én termin, og terminantallet blir for lavt.

Verifisert tilfelle: JFEXFAC04 har **38 rader mot 40 faktiske terminer**.
`2015U` dekker to distinkte eksamener (V2015 og H2015), og **V2017 mangler
helt** — både oppgavesettet og sensorveiledningen ligger i mappa, men
veiledningsfila har ingen årstall i navnet, og oppgavesettet står ikke i
`INDEKS.csv` i det hele tatt.

**Konsekvens:** for emner med to eksamener i året kan terminantallet være
underestimert. Tell mappa når tallet skal inn i en bok, og bruk indeksen som
utgangspunkt — ikke som fasit.

## Tre regler som gjelder alt arbeid med arkivet

**Termin, ikke fil.** TMA4110 har over 200 filer og 34 terminer. Enhver
«N av M sett»-påstand skal bygge på `TERMINER.csv`.

⚠ Og nevnerens **innhold** teller, ikke bare antallet: i utv1000 hvilte «6 av
19 sett» på en liste der den fjerde oppføringen var en *sensorveiledning*, ikke
et oppgavesett.

**Ingenting herfra publiseres.** Verken eksamensoppgaver, sensorveiledninger
eller løsningsforslag deles på skolesaga.no. Arkivet er kildemateriale for å
SKRIVE bøker. Jussen er avklart, ikke uklar — se
`eksamenssett/docs/juridisk-kartlegging-losningsforslag.md`.

**Filnavn lyver i begge retninger.** I én runde var 276 filer som het
«eksamen…» løsningsforslag, og 83 som het «…svar» var oppgavesett. Bruk
`type`-kolonnen i indeksen, ikke filnavnet.

## Se også

- `ARKIV-NESTE-STEG.md` — hva som gjenstår å høste, de 17 fellene, manifestkravet
- `BRUKSREGLER-ARKIV.md` — bruksreglene i detalj
- `EKSAMENSJAKT-2026-07-30.md` og `ARKIVRUNDE-*.md` — henterundenes resultater
