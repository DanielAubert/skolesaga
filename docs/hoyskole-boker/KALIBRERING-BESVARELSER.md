# Kalibreringskorpuset: UiAs eksamensbesvarelser

Hentet 31. juli 2026 med `scripts/hent-besvarelser.py`.
Ligger i `~/Desktop/Eksamner/_KALIBRERING-besvarelser/` — **utenfor**
arkivmappa, med vilje, slik at `sorter-arkiv.py` aldri ser det.

Reglene for hva dette får brukes til står i
[BRUKSREGLER-ARKIV.md](BRUKSREGLER-ARKIV.md). Kort: ingenting publiseres, og
teksten utleveres aldri til en bokskrivende agent — bruken er aggregert.

## Hva som kom ned

| | |
|---|---:|
| Besvarelser i Wayback med status 200 | 314 |
| **Strippet og lagret** | **97** |
| Avkuttet i arkivet (nøyaktig 1 MiB) | 127 |
| Skannet uten tekstlag | 52 |
| Ikke dokument (HTML-feilside e.l.) | 33 |
| Avvist tilkobling trass fire forsøk | 5 |
| Avvist fordi identifikator sto igjen etter stripping | 0 |

**31 % kom gjennom.** Korpuset er 97 besvarelser fra **35 emner**, 1,9 mill.
tegn, median 19 286 tegn per besvarelse. 39 har termin lest ut av
Inspera-toppteksten (V2016–H2018), 17 har karakter fra filnavnet.

Emner med flest: SV-135 (10), EX-102 (6), REL101 (6), IDR138 (5), IS-100 (5),
SY-110 (5), ORG110 (5). Åtte filer står som `UKJENT` fordi verken teksten
eller filnavnet oppga emnekode.

Kontrollert etter henting: **0 gjenværende kandidat- eller gruppenumre i 97
filer, 0 filer med navnefelt, 0 PDF-er igjen på disk.**

## De to tapskategoriene, og hvorfor de ikke er samme sak

**127 filer er avkuttet i selve arkivet.** De er nøyaktig 1 048 576 byte — 1
MiB blankt — og `pdftotext` sier `Couldn't find trailer dictionary`.
Xref-tabellen står i enden av en PDF, så uten den er sidetreet uleselig.
Verken Ghostscript eller pdftotext kommer forbi, og CDX viser bare ett
øyeblikksbilde per fil. De er tapt.

⚠ **Første kjøring meldte disse som «skannet, ingen tekst».** Det var feil
diagnose på 70 filer på rad, og det er en feil som koster: den sender neste
person til OCR i stedet for til spørsmålet om det finnes et annet
øyeblikksbilde. Skriptet skiller nå på byteantallet.

**52 filer er ekte skannet.** Kontrollert mot en post på 6,3 MB som kom ned
hel (7,6 MB) og ga null tegn uten feilmelding fra pdftotext. Det viser
samtidig at 1 MiB ikke er noe tak i vår ende — de avkuttede er kappet ved
fangst, ikke ved henting.

Begge kunne i prinsippet reddes med OCR. Det er ikke gjort, og for de 127
avkuttede ville OCR uansett bare gitt den første tredjedelen av besvarelsen.

## Samtykket

UiA stilte spørsmålet til kandidaten under eksamen, og det står i
besvarelsen:

> «Det forekommer av og til spørsmål om bruk av eksamensbesvarelser til
> undervisnings- og læringsformål. Universitetet trenger kandidatens
> tillatelse til at besvarelsen kan benyttes til dette. **Besvarelsen vil
> være anonym.** Tillater du at din eksamensbesvarelse blir brukt til slikt
> formål?»

⚠ Hvilket svar den enkelte ga, står ikke i teksten. At UiA publiserte nettopp
disse, er grunnen til å tro at de svarte ja. **Det er en slutning, ikke noe vi
har lest.**

Anonymiteten UiA lovte, holdt ikke: hver side bar `Candidate 1621` /
`KANDIDAT 1621`, og gruppeeksamener `Group 2411`. Det er den strippingen
gjenoppretter.

## Hva korpuset kan brukes til

**Kalibrering.** Vi skriver i dag modellbesvarelser uten å vite om vi ligger
langt over det som faktisk gir A. Median her er 19 286 tegn.

**Oppgavesettet på kjøpet.** Inspera-eksporten tar med emnekode, dato,
varighet, tillatte hjelpemidler, merknader og hver oppgave i sin helhet FØR
svaret. For emner der settet aldri ble arkivert, ER besvarelsen settet.

**Termin.** «Starttid 05.10.2018 09:00» i toppteksten er en sikrere
terminkilde enn noe filnavn.

## Hva det IKKE kan brukes til

⚠ **Bare A- og B-besvarelser ble publisert.** Vi kan ikke se hva som skiller A
fra C — bare hvordan et godt svar ser ut, ikke hvor grensa går. En
kalibrering som konkluderer «så mye skal til for A» er derfor riktig; en som
konkluderer «så lite kan du slippe unna med» er det ikke.

⚠ **35 emner er ikke et representativt utvalg.** Tyngdepunktet er samfunnsfag,
religion, idrett og sykepleie. Det finnes nesten ingen realfag her, og
matematikk mangler helt.

## Gjenopptak

```bash
python3 scripts/hent-besvarelser.py --selvtest   # 15 saker, må være grønn
python3 scripts/hent-besvarelser.py              # hopper over det som ligger
```

Skriptet nekter å kjøre hvis selvtesten feiler, og skriver ikke en fil hvis en
identifikator står igjen etter strippingen.
