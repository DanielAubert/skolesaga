# Bruksregler for eksamensarkivet

Reglene under er ikke nye. De er prosjektets etablerte posisjon, dokumentert
i `../../../docs/juridisk-kartlegging-losningsforslag.md` (eksamenssett-repoet)
og håndhevet 6. juli 2026, da **343 tredjeparts løsningsforslag ble slettet
fra Supabase storage**.

Dette dokumentet oversetter dem til noe som gjelder for det nedlastede
arkivet, og de ligger som **kolonner i `INDEKS.csv`** — ikke bare her. En
regel som bare står i en README, blir ikke lest når boka skrives.

## Grunnreglene

| | |
|---|---|
| Hoste **eksamensoppgaver** fra **offentlige** institusjoner | ✅ lov |
| Hoste **sensorveiledninger** fra **offentlige** institusjoner | ✅ lov |
| Hoste tredjeparts **løsningsforslag** | ❌ ikke lov |
| **Lenke** til løsningsforslag eksternt | ✅ lov |
| Hoste **egne** løsninger | ✅ lov |

«Offentlige» bærer vekt. Et eksamenssett fra UiO, NTNU eller UDIR er
produsert av et offentlig organ. Et sett fra BI eller en privat høyskole er
et alminnelig åndsverk institusjonen eier — der finnes ingen tilsvarende
åpning. Derfor er private læresteder kartlagt, men ikke lastet ned.

⚠ Forbehold: at eksamensoppgaver fra offentlige institusjoner kan gjengis
fritt, er prosjektets arbeidsgrunnlag slik det er dokumentert og praktisert.
Det er en velbegrunnet posisjon, men den er ikke rettslig prøvd.

## Produktvalget: vi deler ingen fasit

Produkteier har bestemt at **verken løsningsforslag eller sensorveiledninger
deles** — også der hosting ville vært lovlig. Det er strengere enn loven
krever, og det er et bevisst valg.

Det eneste som kan publiseres, er altså **eksamensoppgavene**: 9 152 av
15 741 filer.

Skillet mellom de to fasittypene står likevel i kolonnen `type`, av to
grunner. Juridisk er de ulike, så valget kan endres uten å klassifisere på
nytt. Og de er ulike kilder i arbeidet: sensorveiledningen sier hva sensor
gir poeng for, løsningsforslaget viser én vei fram.

## Den ufravikelige regelen

**Modellbesvarelsene i bøkene er NYSKREVNE.** Vi gjengir aldri et
løsningsforslag ordrett, og presenterer aldri en løsning som «ekte
eksamensbesvarelse». Arkivets fasit brukes til to ting:

1. **å kontrollere at vår egen løsning er riktig**, og
2. **å forstå hva sensor premierer** — hvilke steg som gir poeng, hvor det
   trekkes, hva som regnes som fullstendig svar.

Dette er ikke en juridisk finesse. Det er produktløftet: bøkene er våre,
bygget på fagets faktiske eksamensarkiv.

## Slik ser det ut i `INDEKS.csv`

| kolonne | betydning |
|---|---|
| `type` | `oppgave` · `sensorveiledning` · `losningsforslag` · `pensum` · `temanotat` |
| `bruksklasse` | `apen-institusjonell` (kan publiseres) · `internt-referanse` (skal ikke deles) |
| `bruksklasse_sikkerhet` | `sikker` når kilde-URL avgjorde · `antatt` når vi falt tilbake |
| `type_kilde` | `pdf-verifisert` · `manifest-filnavn` · `filnavn` · `manifest-uspesifisert` |

Fordeling: 9 152 publiserbare eksamensoppgaver, 6 589 interne — hvorav
4 270 løsningsforslag, 1 374 sensorveiledninger, 253 pensum/temanotat, og
resten materiale fra ansattes personlige kurskataloger.

## Personlige kurskataloger

1 209 filer kommer fra ansattes egne kataloger på institusjonens server
(`folk.*`-verter eller `/~bruker/` i stien) framfor fra instituttarkivet.
Der er selve eksamensoppgaven fortsatt en offentlig eksamensoppgave, men et
løsningsforslag skrevet av foreleseren er vedkommendes åndsverk, og en
personlig side er ikke institusjonens forpliktende publisering.

⚠ Vertsnavnet alene holder ikke: `www.idi.ntnu.no/~alfw/` ligger på en
institusjonell vert. Det er `/~` i stien som avslører den.

## Avvist, ikke lastet ned

- **Innloggingsvegger.** Minst fire sider svarte `200 OK` med et
  innloggingsskjema som innhold. Statuskoden lyver; innholdet avgjør.
- **Adgangsbegrenset materiale.** Fire filer svarte 401. Ikke omgått.
- **Studentdelte kopier.** Studocu, CourseHero, `gitlab.stud.idi.ntnu.no`.
- **Private domener utenfor institusjonen.** `dvikan.no`,
  `inf100h22.stromme.me`.
- **Lærebokverk.** `MAT100 pensumkompendium.pdf` (558 sider),
  `inf100v26kursnotater.pdf`.

To lærebokkapitler slapp gjennom og ligger nå i
`_KARANTENE-tredjeparts-laerebok/`: Cormen kap. 30 og Bradley/Hax/Magnanti
kap. 9. De var lenket fra NTNUs eget kursmateriale, men er ikke NTNUs
åndsverk. **Mønster å ta med videre: et arkiv som krypes automatisk, får med
seg det kursmaterialet lenker til.**

## Når du bygger en bok

1. Bruk `TERMINER.csv` for «N av M sett»-påstander — aldri filtellinger.
2. Publiser bare `bruksklasse == 'apen-institusjonell'`.
3. Sjekk `type_kilde`: er den `filnavn`, er typen gjettet og kan være feil.
4. Skriv løsningen selv. Bruk arkivets fasit til å kontrollere den.
