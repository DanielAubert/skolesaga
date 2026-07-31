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

## Produktvalget: ingenting herfra publiseres

**Ingenting i arkivet deles på skolesaga.no** — heller ikke
eksamensoppgavene, og heller ikke sensorveiledningene, som begge ville vært
lovlige å hoste. Arkivet er kildemateriale for å SKRIVE bøker, ikke innhold
som skal serveres.

Det er strengere enn loven krever, og det er et bevisst valg.

Per 30. juli 2026 er det også faktisk tilstand: ingen arkivfil er lastet opp
til Supabase, ingen ligger i repoet, og verken `src/` eller `public/`
refererer til arkivmappa. Alt ligger lokalt.

Skillene i klassifiseringen står likevel, fordi produktvalget kan endres —
og da skal ingen måtte klassifisere 15 000 filer på nytt.

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

To akser, holdt fra hverandre med vilje. Blandes de, blir den juridiske
vurderingen verdiløs — og den er nettopp det som trengs den dagen
produktvalget endres.

| kolonne | betydning |
|---|---|
| `deles_pa_nett` | **`nei` for alt.** Produktvalget. |
| `juridisk_status` | Hva vi LOVLIG kunne: `kan-hostes-lovlig` · `kan-ikke-hostes` |
| `status_sikkerhet` | `sikker` når kilde-URL avgjorde · `antatt` når vi falt tilbake |
| `type` | `oppgave` · `sensorveiledning` · `losningsforslag` · `pensum` · `temanotat` |
| `type_kilde` | `pdf-verifisert` · `manifest-filnavn` · `filnavn` · `manifest-uspesifisert` |

Fordeling: 9 844 oppgaver, 1 374 sensorveiledninger, 4 270 løsningsforslag,
253 pensum/temanotat. Juridisk kunne 10 526 vært hostet; 5 215 ikke.

## Personlige kurskataloger

1 209 filer kommer fra ansattes egne kataloger på institusjonens server
(`folk.*`-verter eller `/~bruker/` i stien) framfor fra instituttarkivet.
Der er selve eksamensoppgaven fortsatt en offentlig eksamensoppgave, men et
løsningsforslag skrevet av foreleseren er vedkommendes åndsverk, og en
personlig side er ikke institusjonens forpliktende publisering.

⚠ Vertsnavnet alene holder ikke: `www.idi.ntnu.no/~alfw/` ligger på en
institusjonell vert. Det er `/~` i stien som avslører den.

## ⚠ Personopplysninger: den ene tingen som aldri skal inn

Funnet 31. juli 2026, to steder uavhengig av hverandre, på én dag:

- `hinesna.no/eksamen/moduler/**/RPT0001.HTM` — 211 sider som ser ut som et
  institusjonsarkiv, med emnekode og dato i stien. Innholdet er
  **studentnummer og karakterer**.
- `www.cs.oslomet.no/~ulfu/AlgDat/**/resultater.txt` — én i HVER
  eksamensmappe, med **studentresultater**.

Begge lå midt blant ekte eksamensoppgaver, og begge ville blitt dratt inn av
et filter som bare ser på filnavn. Ingen av dem er i arkivet; begge ble
stanset fordi noen åpnet én fil før mappa ble tatt med.

Dette er ikke en kvalitetssak, det er en personvernsak. Et arkiv av
eksamensoppgaver har ingen grunn til å inneholde hvem som fikk hvilken
karakter, og prosjektet har ingen behandlingsgrunnlag for det.

**Regelen: åpne én fil fra hver nye mappe før mappa tas med.** Og la
`resultat`, `karakter`, `sensur`, `RPT` og `kandidat` være stoppord som
krever manuell godkjenning, uansett hvor eksamensaktig stien ser ut.

## Studentbesvarelser: hentet som strippet tekst, aldri som fil

Universitetet i Agder publiserte i mange år inntil tre eksamensbesvarelser per
emne per semester, side om side med oppgavesettene — *«fortrinnsvis
besvarelser vurdert til karakteren A eller B»*, med deres egne ord. I et
utvalg på 292 PDF-er fra arkivet var 135 slike. 314 av dem svarer fortsatt
`200` i Wayback.

**UiA innhentet samtykke, og lovte anonymitet.** Det står i besvarelsene selv,
som et spørsmål stilt til kandidaten under eksamen:

> «Det forekommer av og til spørsmål om bruk av eksamensbesvarelser til
> undervisnings- og læringsformål. Universitetet trenger kandidatens
> tillatelse til at besvarelsen kan benyttes til dette. **Besvarelsen vil være
> anonym.** Tillater du at din eksamensbesvarelse blir brukt til slikt formål?»

Undervisning og læring er nøyaktig vårt formål. Men løftet om anonymitet holdt
ikke helt: besvarelsene er Inspera-eksporter, og hver eneste side bærer
`Candidate 1621` / `KANDIDAT 1621` — for gruppeeksamener `Group 2411` — og
enkelte filnavn har både kandidatnummer og karakter (`MA-216 5114 A
besvarelse.pdf`).

⚠ Hvilket svar den enkelte ga på samtykkespørsmålet, står ikke i teksten. At
UiA publiserte nettopp disse, er grunnen til å tro at de svarte ja. Det er en
slutning, ikke noe vi har lest.

**Derfor henter vi teksten, ikke fila.** `scripts/hent-besvarelser.py` laster
ned PDF-en, trekker ut teksten, fjerner kandidat- og gruppenummeret, skriver
teksten — og **sletter PDF-en**. Identifikatoren finnes ikke i korpuset, og da
er ikke spørsmålet om dette er en personopplysning lenger et spørsmål.

Materialet ligger i `~/Desktop/Eksamner/_KALIBRERING-besvarelser/`, **utenfor**
arkivmappa, slik at `sorter-arkiv.py` aldri ser det og aldri kan telle en
besvarelse som et eksamenssett. Manifestet har ingen kolonne for
kandidatnummer — det finnes ingen grunn til å skrive ned det vi nettopp brukte
arbeid på å fjerne.

### Reglene for bruk

1. **Ingenting herfra publiseres.** Gjelder alt i arkivet, og i særlig grad
   dette.
2. **Teksten utleveres aldri til en bokskrivende agent.** Det er den operative
   risikoen, ikke den juridiske: ligger et A-svar i korpuset, kan en agent
   lene seg på det, og den ufravikelige regelen er at modellbesvarelsene i
   bøkene er nyskrevne. Bruken er aggregert — ett kalibreringsnotat per fag.
3. Aldri i `INDEKS.csv` som `oppgave`.

### Hva vi får, og hva vi ikke får

Kalibrering: vi skriver i dag modellbesvarelser uten å vite om vi ligger langt
over det som faktisk gir A. Og oppgavesettet på kjøpet — Inspera-eksporten tar
med emnekode, dato, varighet, tillatte hjelpemidler og hver oppgave i sin
helhet før svaret, så for emner der settet aldri ble arkivert, ER besvarelsen
settet.

⚠ Bare A- og B-besvarelser ble publisert. Vi kan derfor ikke se hva som
skiller A fra C — bare hvordan et godt svar ser ut, ikke hvor grensa går.

⚠ En stor andel er skannet uten tekstlag. Der er det ingenting å strippe og
ingenting å lese, og de forkastes.

### Fellene i strippingen

- **Gruppeeksamen stempler `Group`, ikke `Candidate`.** Første kjøring skrev en
  HEL904-besvarelse med `Group 2411 / GRUPPE / 2411` i behold og meldte
  «0 kandidatnummer fjernet» — stille tap av nøyaktig det slaget vi ellers
  advarer mot.
- **`gruppe` er også et alminnelig ord.** «Vi kan dele muskulaturen inn i tre
  grupper», «fokusgrupper». Mønsteret krever derfor et tall rett etter ordet.
- **Emnekoden står i teksten, ikke i filnavnet.** Over halvparten heter bare
  `Besvarelse 1 - Del 1.pdf`. Første kjøring merket dem alle `UKJENT` — et
  korpus uten emnekode er nesten verdiløst til kalibrering, siden hele poenget
  er å sammenlikne med VÅR bok i SAMME fag.
- **Strippingen er målrettet, ikke bred.** Vi finner først hvilke tall som ER
  kandidatnumre, og fjerner så nøyaktig de. Å stryke alle firesifrede tall
  ville ødelagt fagteksten — årstall, beløp og måleverdier er også tall.
- **Skriptet kontrollerer seg selv** og skriver ikke fila hvis en identifikator
  står igjen etter strippingen.

## Produkteiervalg 31. juli 2026: USNs glemte katalog

`https://web01.usn.no/eksamen/` er en åpen Apache-katalogindeks med **3 487
eksamensoppgaver fra 468 emner (2008H–2017V)**. Ingen innlogging, ingen 401,
og `robots.txt` sperrer bare en annen sti. Juridisk faller det inn under
prosjektets etablerte posisjon: eksamensoppgaver fra en offentlig institusjon.

**Produkteier valgte likevel å la den ligge.**

Grunnen er at USNs egen nettside sier ordrett at *«Seksjon for eksamen har
ikke anledning til å gi ut tidligere eksamensoppgaver»*, og katalogen er ikke
lenket fra usn.no noe sted. Den ser ut som en tjeneste fra Høgskolen i
Telemark som ble med over i fusjonen og aldri ble tatt ned.

At en glemt server fortsatt svarer, er ikke det samme som at institusjonen
publiserer. Vi tar bare de 768 dokumentene fra vertsnavn som er *nedlagt* —
der finnes ingen institusjon som kan ha en mening lenger.

Kildelista ligger i behold som
`usn-kilder-LAGT-BORT-produkteiervalg.csv`, slik at valget kan gjøres om
uten å måtte kartlegge på nytt.

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
2. **Publiser ingenting herfra.** Arkivet er kilde, ikke innhold.
3. Sjekk `type_kilde`: er den `filnavn`, er typen gjettet og kan være feil.
4. Skriv løsningen selv. Bruk arkivets fasit til å kontrollere den.
