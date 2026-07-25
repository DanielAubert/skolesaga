# Kildekontroll: bøkenes påstander mot eksamensarkivet

Bøkene forteller studenten hva de bygger på — «16 eksamenssett med offisielle
sensorveiledninger», «49 sett med løsningsforslag». Påstandene vises på
`/bok/<emne>/kildegrunnlag` og gjentas i metakapitlet. **Ingen hadde kontrollert
dem mot arkivet før 25. juli 2026.** Da viste tre av nitten seg å være feil.

Kjør kontrollen slik:

```bash
python3 scripts/sjekk-kildepaastand.py            # alle bygde bøker
python3 scripts/sjekk-kildepaastand.py econ1100   # ett emne
```

## Hva som er lov — kort

Grunnlaget er **åndsverkloven § 14**: eksamensoppgaver og sensorveiledninger fra
offentlige institusjoner er offentlig myndighetsutøvelse og har ikke opphavsrett.
Studentbesvarelser, lærebøker og faglærerskrevne løsningsforslag har vern.
Fullstendig drøfting: `~/Desktop/Eksamner/juridisk-eksamensoppgaver-opphavsrett.md`.

Arkivet er allerede sortert etter dette i `~/Desktop/Eksamner/_sortering/`, med
begrunnelse per fil i `manifest.csv`. Skriptet leser den klassifiseringen — det
gjetter ikke ut fra filnavn.

| Kategori | Antall | Status |
|---|---|---|
| `PUB-OPPGAVE` | 11 802 | fritt (§ 14) |
| `PUB-SENSORVEIL` | 1 659 | fritt (§ 14) |
| `INTERNT-LF` | 2 815 | **vernet** — fasitkilde, aldri gjengi |
| `INTERNT-VEDLEGG` | 202 | kode, obliger, formelsamlinger |
| `SJEKK-MANUELT` | 163 | privat institusjon eller studentbesvarelse |
| `KOMBINERT-RENS` | 68 | løsningsdel må fjernes først |
| `INTERNT-CC-NC` | 6 | **CC BY-NC-SA — forbyr kommersiell bruk** |

## Resultat 25. juli 2026

**Juridisk: rent.** Ingen av de 19 bygde bøkene berører CC-NC-materiale, private
institusjoner eller studentbesvarelser. Alle bygger på `PUB-OPPGAVE` og
`PUB-SENSORVEIL`, eventuelt med `INTERNT-LF` som fasitkilde — som er lovlig så
lenge løsningene i boka er nyskrevne.

**Sannferdighet: tre feil funnet og rettet.**

| Bok | Påsto | Arkivet har | Rettet til |
|---|---|---|---|
| `econ1100` | 16 sett **med** sensorveiledning | 16 sett, 14 veiledninger | «16 sett, hvorav 14 med offisiell sensorveiledning» |
| `jus1111` | 32 sensorveiledninger | 21 | 21 |
| `fys1001` | 49 sett med «løsningsforslag/sensorveiledninger» | 49 løsningsforslag, **0 veiledninger** | «49 med løsningsforslag», med presisering av at arkivet ikke har sensorveiledninger for emnet |

De to første sto også i kapitlene som vises til studenter — econ1100 i 21
formuleringer over 22 filer, jus1111 i to i metakapitlet. Alle er rettet, og
**kilden til feilen — EKSAMENSANALYSE.md — er rettet i samme slengen**, ellers
ville neste agent skrevet påstanden inn igjen.

Kontrollert og korrekt: `econ1210` (22 = 22), `econ2220` (11 = 11),
`psy1010` (10 = 10), `in1900` (0 veiledninger, sier korrekt «UiO publiserer
løsningsforslag»), `in1020` (nøyaktig én, H2023, omtalt i entall).
`exphil03` og `econ1310` oppgir færre enn arkivet har — understated, altså
ufarlig.

## Framover: BI-bøkene bør vente

Køen har **13 BI-bøker**, og åtte av dem matcher emnekoder som ligger i
`SJEKK-MANUELT` fordi BI er en privat stiftelse der § 14-grunnlaget er svakere:

`fin3521-bi` · `jur3420-bi` · `met1190-bi` · `met2910-bi` · `met2911-bi` ·
`met2920-bi` · `org3620-bi` · `str3605-bi`

Arkivets egen README sier det rett ut: «Få en advokat til å bekrefte
grensedragningen før publisering i stor skala.» Ingen av dem står i Tier 1, så
det koster ingenting å vente på avklaringen.

## To ting som ikke er kontrollert

**Tredjepartsinnhold inne i oppgavesettene.** Bilder, artikkelutdrag og
litterære tekster har selvstendig vern selv når settet er fritt — samme grunn
som UDIR fjerner bilder. Sorteringen flagger særlig NIH, psykologi og
samfunnsfag. Bøkene våre tegner egne figurer, så risikoen er lav, men det er
ikke systematisk verifisert.

**Ordrett gjengivelse.** Analysene lover «alt innhold er omskrevet med egne
ord». Det er ikke maskinelt kontrollert mot PDF-ene. For oppgaver spiller det
juridisk liten rolle (§ 14), men for de 2 815 løsningsforslagene ville ordrett
gjengivelse vært et brudd — og for alle kilder ville det brutt løftet i
analysene.

## Lærdommen

Feilen var ikke at analysene løy, men at **ingen ledd i kjeden kontrollerte mot
kilden**. Analysene ble skrevet av agenter som leste arkivet, kildegrunnlaget ble
skrevet fra analysene, og kapitlene fra kildegrunnlaget. Hvert ledd stolte på det
forrige. Det er samme mønster som ga fem uskrevne kodeutskrifter i IN1900 og tre
figurer som viste feil funksjon i ECON1100.

Kjør skriptet ved hver ny bok, før wiring.
