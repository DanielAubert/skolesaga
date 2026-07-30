# Bruksregler for eksamensarkivet

Skrevet 30. juli 2026 etter beslutning fra produkteier: *«Løsningsforslag
kan beholdes, men vi må bruke dem lovlig.»*

Reglene ligger som en **kolonne i `INDEKS.csv`** (`bruksklasse`), ikke bare
i dette dokumentet. En regel som bare står i en README blir ikke lest når
boka faktisk skrives.

## Den ufravikelige regelen, uansett klasse

**Modellbesvarelsene i bøkene er NYSKREVNE.** Vi gjengir aldri et
løsningsforslag ordrett, og vi presenterer aldri en løsning som «ekte
eksamensbesvarelse». Arkivets løsningsforslag brukes til to ting:

1. **å kontrollere at vår egen løsning er riktig**, og
2. **å forstå hva sensor premierer** — hvilke steg som gir poeng, hvor
   det trekkes, hva som regnes som fullstendig svar.

Dette er ikke en juridisk finesse. Det er selve produktløftet: bøkene er
våre, bygget på fagets faktiske eksamensarkiv.

## De to klassene

### `apen-institusjonell` — 14 045 filer

Eksamensmateriale hentet fra en offentlig institusjons **eget** arkiv.
Grunnlaget er åndsverkloven § 14.

Tillatt: sitere oppgavetekst med kildeangivelse, vise til settet, bygge
statistikk og temafrekvens på det, lenke til institusjonens egen side.

### `internt-referanse` — 545 filer

**Skal ikke gjengis.** Kun til de to formålene øverst.

Tre ting havner her:

| kilde | hvorfor |
|---|---|
| Ansattes **personlige** sider (`folk.*`) | Selve eksamensoppgaven er fortsatt en offentlig eksamensoppgave, men et løsningsforslag skrevet av foreleseren selv er vedkommendes åndsverk. En personlig side er heller ikke institusjonens forpliktende publisering, og kan forsvinne uten varsel. |
| **Pensumlister, formelsamlinger, temanotater** | Undervisningsmateriell, ikke eksamensoppgaver. § 14 dekker dem ikke. |
| Undermapper som `forelesningsnotater`, `ovinger-og-losninger`, `wiki-vedlegg` | Samme grunn — nedlasterne skilte dem ut selv. |

Det gjelder blant annet `PROG1001` og `PROG1003` (185 filer), som i sin
helhet kommer fra en foreleseres personlige NTNU-side. **Faller de bort,
faller de to emnene helt ut av arkivet** — det finnes ingen annen kilde.

## Hva vi har avvist, og hvorfor

Dette er ikke hentet ned i det hele tatt:

- **Innloggingsvegger.** Minst tre sider svarer `200 OK` med et
  innloggingsskjema som innhold — to STV-sett hos UiO og
  `molbio.wiki.uib.no`. Statuskoden lyver; innholdet avgjør. Nedlasteren
  har nå en vakt som leser innholdet.
- **Adgangsbegrenset materiale.** To filer i TMA4130 og to i TMA4125
  svarer 401. Ikke omgått.
- **Studentdelte kopier.** Studocu, CourseHero, `gitlab.stud.idi.ntnu.no`.
- **Private domener utenfor institusjonen.** `dvikan.no`,
  `inf100h22.stromme.me`.
- **Lærebokverk.** `MAT100 pensumkompendium.pdf` (558 sider) og
  `inf100v26kursnotater.pdf`. § 14 dekker ikke lærebøker.

## Når du bygger en bok

1. Bruk `TERMINER.csv` for «N av M sett»-påstander — aldri filtellinger.
2. Filtrer på `bruksklasse == 'apen-institusjonell'` når du siterer.
3. Sjekk `type_kilde`: er den `filnavn`, er typen gjettet fra navnet og
   kan være feil. `pdf-verifisert` er lest ut av selve dokumentet.
4. Skriv løsningen selv. Bruk arkivets fasit til å kontrollere den.
