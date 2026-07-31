# Arkivrunden 31. juli 2026, kveld

Åtte agenter kartla offentlige læresteder; jeg lastet ned og rettet opp.

## Arkivet etter runden

| | Morgen | Kveld |
|---|---:|---:|
| Filer | 24 769 | **29 745** |
| Eksamensterminer | 12 653 | **14 631** |
| Emner | 2 733 | **3 687** |
| Type lest ut av teksten | 68 % | 57 % |

Andelen tekstverifisert type FALT, og det er ikke en tilbakegang: HVLs og
UiAs eldre arkiv er skannede sett uten tekstlag, så nevneren vokste raskere
enn telleren. 44 % av terminene har fasit.

## Nedlastet

| | Nye filer |
|---|---:|
| HVL (HiB + HSH, nedlagte verter) | 1 673 |
| Nord/HiNN — gjenkjøring | 384 |
| UiT / HiN / HiF | 300 |
| HiA — gjenkjøring | 258 |
| USN — gjenkjøring | 178 |
| UiS / Høgskolen i Stavanger | 122 |
| UiA (mellomlager, sortert) | 85 |
| NMBU | 70 |
| UiA-besvarelser (eget kalibreringskorpus) | 97 |

## ⚠ Fire feil i mine egne verktøy, alle med samme signatur

Ingen av dem gav feilmelding. Alle så ut som ferdig arbeid.

### 1. «0 B» var ikke en manglende fil — 1 015 rader

`hent-wayback.py` prøvde én gang. Internet Archive avviser tilkoblinger på
TCP-nivå når den er belastet: curl gir `rc=7` og null byte, og loggen skrev
«for liten (0 B)» — som ser ut akkurat som en fil som ikke finnes. 648 rader
i Nord/INN og 367 i UiA falt slik.

Fire tilfeldig valgte ble prøvd på nytt. **Alle fire kom ned**, og
`FasitH2002.pdf` var 178 kB.

Etter fiksen: Nord/HiNN-gjenkjøringen hadde **null** 0-byte-feil og hentet
384 filer. USN og HiA endte begge på null feilede. **Til sammen 820 filer.**

Gjentak skjer bare når svaret UTEBLE (`rc≠0`). Et lite svar er et ekte lite
svar — å prøve om igjen på en 30-byte omdirigeringsstubb koster et minutt per
rad og gir aldri noe.

### 2. Fiksen ble ikke båret over til den andre henteren

`last-ned-eksamener.py` bruker `urlopen`, ikke curl, og fikk ikke gjentaket.
UiA-runden endte med **1 810 «Connection refused» mot 39 ekte 404**, og ga 44
filer av 1 815 sider.

**Lærdommen er ikke om curl eller urlopen: har to hentere samme svakhet, må
rettelsen skje begge steder samtidig.**

### 3. Fire jobber sto i vranglås i 58 minutter

Fire kjørescript ventet på `while pgrep -f "hent-wayback.py"`. Strengen står i
hver av deres EGNE kommandolinjer, så hver matchet alle de andre og seg selv.
Tomme logger, ingen feilmelding, ingenting skjedde fra 11:42 til 12:40.

Nå kjører alt fra én sekvensiell driver uten venteløkker.

### 4. «Skannet» var feil diagnose på 127 filer

Besvarelseshenteren meldte «skannet, ingen tekst» om filer som var **nøyaktig
1 048 576 byte** — 1 MiB blankt — der `pdftotext` sa `Couldn't find trailer
dictionary`. Wayback-crawleren kappet dem ved fangst.

Kontrollert fra begge sider: en post på 6,3 MB kom ned hel (7,6 MB) og gav
null tegn uten feilmelding, altså ekte skannet. 1 MiB er ikke noe tak i vår
ende.

Filene er tapt uansett, men **en logg som sier «skannet» sender neste person
til OCR i stedet for til spørsmålet om det finnes et annet øyeblikksbilde.**

## To vernemekanismer som kom til

**Studentbesvarelser.** UiA publiserte inntil tre per emne per semester,
«fortrinnsvis besvarelser vurdert til karakteren A eller B». Begge hentere
stanser dem nå og teller opp hvor mange. Se `BRUKSREGLER-ARKIV.md` og
`KALIBRERING-BESVARELSER.md`.

**Personlige kataloger i `/home/`-form.** `PERSONLIG_STI` kjente bare
`/~bruker/`. HSH la ansattes kataloger på `www.hsh.no/home/<initialer>/` —
ingen tilde, institusjonell vert, og likevel en personlig side. 191
dokumenter ville blitt ført som instituttarkiv.

## UiA: lenker er ikke bevarte filer

Kartleggingen fant 1 447 emnesider med tusenvis av lenker. Men målt på de 165
sidene som ble krøpet: **av 157 lenkede oppgavedokumenter finnes 20 i
Wayback — 13 %.** Å krype de resterende 1 282 sidene ville gitt ~325 filer,
ikke ~4 000.

Samme mønster hos HVL: 4 799 lenker, 1 195 bevart (25 %).

**Regel å arve: tell hva CDX HAR, ikke hva sidene LENKER TIL.**

UiAs 2 301 arkiverte filer under `/content/download/` ble derfor hentet
direkte fra CDX til et **mellomlager**. Bare 9 % har emnekode i filnavnet, og
blant «Oppgave.pdf»-filene ligger årsrapporter, likestillingsplaner og en
veiledning i å installere Office 365. `sorter-uia-mellomlager.py` leste
forsida på alle 1 287 og flyttet inn 85 i 54 emner. De 1 202 andre ligger
igjen i mellomlageret.

Tre tørrkjøringer, tre nye feil — alle funnet ved å se på hva som faktisk ble
godtatt, ingen synlig i koden:

- Praksis-vurderingsrapporter kom inn fordi skjemaet sier «Vurderingsform».
- Terminregelen la til 30 filer (UiA navnga sett «BE-414 2019 V__R.pdf», uten
  ordet «oppgave») — men åtte var falske: **`FALL2013`, `SPRING2019`,
  `VÅR14`, `MASTER09`, `UIA2016`**. De lager en emnemappe for et emne som
  ikke finnes og som ingen senere leter etter.
- Fem til: en fransk studieguide, en eksamensPLAN, et honorarskjema for
  sensorer, en brukerveiledning.

## Gjenstår

1. **HiA er ikke utharvet.** `fag.hia.no` har 1 473 CDX-rader mot 152 i
   kildelista, `fag.grm.hia.no` 657 mot 139.
2. **Rekjør alle prefiks-spurte Wayback-verter med `matchType=domain`.**
3. **1 202 filer i UiA-mellomlageret** — forkastet, men ikke slettet.
4. Ikke prøvd: samas.no, phs.no, hiho.no, dhs.no, mhs.no.
5. 4 576 filer uten tolkbar termin, 1 705 kryssreferanser.
