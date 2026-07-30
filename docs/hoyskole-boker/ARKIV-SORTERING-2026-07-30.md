# Sortering av eksamensarkivet: metode og feller

Skrevet 30. juli 2026. Hører sammen med `EKSAMENSJAKT-2026-07-30.md`
(hva som finnes) og `ARKIV-KVALITETSKONTROLL-2026-07-30.md` (hva som ble
lastet ned). Dette dokumentet handler om hvordan råfilene blir til noe en
bok kan bygges på.

Verktøy: `scripts/sorter-arkiv.py`. Ikke-destruktivt — det flytter og
omdøper ingenting, men skriver fire oversikter ved siden av arkivet:

| fil | innhold |
|---|---|
| `INDEKS.csv` | én rad per fil: emnekode, termin, type, språk, md5, dublett |
| `TERMINER.csv` | én rad per (emne, termin): har vi oppgave? har vi fasit? |
| `KRYSSREFERANSER.csv` | filer som bærer en annen emnekode enn arkivet de lå i |
| `_SORTERT.md` | lesbart sammendrag per emne |

## Det bærende skillet: termin, ikke fil

Bokmål, nynorsk og engelsk er **tre filer av samme eksamen**. `TMA4110`
har 201 filer og 34 terminer. En bok som teller filer bommer med en
faktor på seks.

Alle «N av M sett»-påstander skal derfor bygge på `TERMINER.csv`, aldri
på filtellinger. Det gjelder også markedsføringstekst.

Kontinuasjonseksamen føres som **egen termin** (`K`), ikke som en variant
av vår eller høst. Den har egne oppgaver.

## Selvtesten er ikke pynt

Skriptet nekter å kjøre hvis selvtesten feiler. Den består av 44 ekte
filnavn hentet fra arkivet, med fasit skrevet for hånd. Den fanget **åtte
feil som ellers hadde gått rett inn i bøkene**. To av dem var alvorlige:

**`TFY4165` sto med 0 % fasitdekning.** NTNUs fysikkarkiv koder typen som
én bokstav foran filnavnet: `E_` for eksamen, `L_` for løsning. Uten den
regelen ble alle 47 løsningsforslag talt som oppgaver. Emnet har i
virkeligheten 100 %. Samme feilklasse rammet 121 filer i `TMA4245`, der
arkivet koder type **og språk** som én sluttbokstav (`eksAug09l` =
løsning, `…b` = bokmål, `…n` = nynorsk, `…e` = engelsk).

**`TMA4240` og `TMA4245` deler eksamensarkiv** — 118 av 121 filer er
bit-identiske. Med global deduplisering ble det ene emnet strøket ned til
tre terminer, som om arkivet var tomt. Deduplisering må skje **per emne**:
samme eksamen kan legitimt høre til to fag.

## Ni feller i filnavnene, alle funnet i faktiske data

1. **Filnavnet er ikke filnavnet.** Mattewikien lagrer som
   `fetch.php_tok_…_media_<flatet URL>`. Å gjette hvor det ekte navnet
   begynner er umulig når navnet selv har understreker. Verre: navnet
   ligger i **spørrestrengen**, ikke i stien — leser man siste
   sti-segment, heter alle 196 filene «fetch.php». Løsningen er å dekode
   `media`-parameteren fra `MANIFEST*.csv`.

2. **Arkivkode ≠ eksamenskode.** En fil i `TMA4110`s arkiv kan være en
   `TMA4115`-eksamen. Siste kodeforekomst i filnavnet er eksamenens.

3. **`\b` virker ikke** mot koder mellom understreker — `_` er et
   ordtegn, så `\bTMA4110\b` matcher ikke `_TMA4110_`. Dette ga én runde
   med tall som var rent oppspinn. Bruk `(?<![A-Za-z0-9])`.

4. **Lengste alternativ først**, ellers spiser `MA\d{4}` halen av
   `TMA4110` og gir emnekoden `MA4110`, som ikke finnes.

5. **Emnekoden må strykes før terminen tolkes.** `tma4110h13eng` er høst
   2013, men kodens sifre står rett foran `h` og blokkerer tilbakeblikket.
   Koden er dessuten full av sifre som ligner årstall.

6. **Emnekoder blir lest som årstall.** `JUR1590` ga «5590». 33 terminer
   fikk umulige år, den verste «9501». Årstall utenfor 1980–2027 forkastes
   nå, og letingen fortsetter i stedet for å returnere tallet.

7. **Måneden må prøves før sesongbokstaven.** `eksNov17n` inneholder
   `v17`, og med sesongmønsteret først ble november lest som vår.

8. **Filnavnet vinner over mappa.** `TMA4135-05k.pdf` lå på 2004h-sida og
   ble ført som 2004H. Kontinuasjonseksamener arkiveres ofte på forrige
   semesters side. Terminen hentes fra URL-stien bare når filnavnet ikke
   gir noe.

9. **Bestemt form.** `varen-2026` og `hosten-2025` er vanlig hos UiO og
   dekkes ikke av et mønster som bare kan `vår`/`høst`.

## Kryssreferanser avgjøres av mennesker, ikke av skriptet

Når en fil bærer en annen emnekode enn arkivet den lå i, er det som regel
**ikke** en feil: NTNU har endret emnekoder over tid, og wikien
krysslenker slektskapet (`SIF5017` er dagens `TMA4135`, `FY1005` er
dagens `TFY4165`). Men skriptet **slår ikke fast** hva som er samme fag —
det ville vært en påstand det ikke har grunnlag for. Alle tilfeller føres
i `KRYSSREFERANSER.csv` for menneskelig avgjørelse.

## Hva som IKKE er sortert inn

`_TILLEGG-forelesningsnotater/` ligger utenfor emnestrukturen og telles
ikke som eksamenssett. Merk forbeholdet der: forelesningsnotater har ikke
nødvendigvis samme frie stilling etter åndsverkloven § 14 som
eksamensoppgaver fra offentlige institusjoner. Behandles som internt
referansemateriale.

`_INSTITUTTARKIV-*` er hele instituttarkiv, ikke enkeltemner — se
kvalitetskontrollen for hvorfor de er døpt om.

## Kjent begrensning

Rundt 600 filer har ingen tolkbar termin. De fleste er reelt udaterte
(`formelark.pdf`, `eksempeleksamen_1.pdf`, `ntnueksamen_bokmal.pdf`).
Noen kunne trolig vært reddet ved å lese datoen inne i PDF-en, men det er
ikke gjort — og de er derfor **ikke** talt som terminer. Tallene i
`TERMINER.csv` er dermed et gulv, ikke et tak.
