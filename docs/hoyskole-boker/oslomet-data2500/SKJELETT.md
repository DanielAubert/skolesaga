# Bokskjelett: DATA2500 Operativsystemer (OsloMet) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (`DNA-regnefag.md`). Unntak: øvingseksamen-/prøve-/modellbesvarelses-
> kapitler følger sin egen arketype (komplett sett først, løsninger i
> collapsibles). Kvotene og innholdskontraktene i dette skjelettet er uendret —
> løkka styrer REKKEFØLGEN.


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (OsloMet-arkivet 2017–2025: **15 lesbare oppgavesett** med
> komplette par oppgaver + løsningsforslag, vår og høst/konte; tre skannede sett
> (H2020, V2021, demo 2022) utelatt fordi de ikke lot seg maskinlese). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) i **kodefag-/verktøyfag-variant** — se §1
> «Arketypetilpasning». OS-strukturelt forbilde ved overlapp: `tdt4186`
> (Operativsystemer, NTNU), men DATA2500 er et helt annet, **praktisk verktøynært**
> emne (Linux/bash/Docker/PowerShell/digitalteknikk) og bygges mot DETTE arkivets
> mønstre — ikke NTNUs klassiske Tanenbaum-/Stallings-drøftefag.
>
> **Kritisk rammemerknad som styrer hele boka:** DATA2500 er **ikke** et
> drøftefag. Det er en **live-verktøy-eksamen**: kandidaten får under eksamen en
> ekte **Linux-VM** (Apache Guacamole → bash-prompt i en `sysbox`-Docker-container,
> uten nett) ved siden av Inspera-fanen, og en stor andel oppgaver består i å
> **faktisk utføre kommandoer** og lime en kort kode/streng tilbake. Boka må derfor
> trene **ferdighet ved tastaturet**, ikke bare begrepsforklaring. Fordi VM-en er
> **individualisert per kandidat** (egne passord/filer/container-ID-er), er konkrete
> «svarstrenger» verdiløse å pugge — **ferdigheten er poenget**.
>
> **Opphavsrett:** Alle oppgaver, tall, filnavn, kommandoer i kontekst, scenarioer,
> script og innpakninger i den ferdige boka skal være **nyskrevne** — egne verdier
> og kontekster. Kommando-, verktøy- og algoritmenavn samt standard
> beregningsformler er allmenn faglig kunnskap, men ingen oppgavetekster, fasiter
> eller sensorformuleringer fra reelle sett gjengis. Ingen bilder fra UDIR/OsloMet
> brukes.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `oslomet-data2500` |
| Tittel | **DATA2500 Operativsystemer (OsloMet)** |
| Institusjon (navigasjon) | **OsloMet** (OsloMet — storbyuniversitetet). Visningsnavn i `institusjoner.ts`: «DATA2500 Operativsystemer». Del institusjonsblokk med `Matematikk 1000 / DAFE1000 (OsloMet)` hvis den allerede er lagt inn. |
| Level | `'Høyskole'` |
| Arketype | **Regnefag i kodefag-/verktøyfag-variant** (`DNA-regnefag.md`). Se §1 «Arketypetilpasning»: makrostruktur + drillkapitler + øvingseksamener beholdes, men «fasiten» er ofte en **kommando/kort streng/script/tegnet krets**, ikke et tall — og hovedsjangeren er **live utføring på Linux-VM**. |
| Antall kapitler | **31** (Del 0: 1 · temadeler 1–11: 27 · eksamenstrening Del 12: 3) |
| Estimert totaltid | **≈ 2 080 min ≈ 34,7 timer** (per kapittel under; inkl. 3 tretimers øvingseksamener) |
| Quiz totalt | **596** (krav ≥500 — verktøy-/begrepsrikt fag, kalibrert høyt) |
| Flashcards totalt | **604** (krav ≥500 — kommando-/flagg-/begrepsrikt fag; kommando↔virkning-kort egner seg svært godt) |
| Prøver | **44** (4 per temadel 1–11) + **3 øvingseksamener** (kap. 12.1–12.3) |

**Pitch (ett avsnitt):** DATA2500 er OsloMets emne i hvordan et operativsystem
fungerer — men lært **verktøynært** gjennom Linux, bash-skripting, PowerShell,
Docker, C/Assembly-sporing og digitalteknikk, med et mindre lag klassisk OS-teori
(prosesser, synkronisering, minne, MMU, scheduling, RAID). Vurderingen er én
**individuell, digital skriftlig skoleeksamen på 3 timer** i **Inspera**, karakter
**A–F**, som teller **100 %**, **uten hjelpemidler**; obligatoriske øvinger må
normalt være godkjent for å gå opp. Settet består av **26–30 finkornede
deloppgaver** — de fleste gir maks 10 poeng (≈3,33 % hver av 300), noen tunge
script-/analyseoppgaver gir 20–60 poeng. **Bredde over hele pensum lønner seg mer
enn dybde i ett tema.** Den definerende egenskapen er en **levende Linux-VM under
eksamen**: kandidaten utfører kommandoer på en ekte terminal og limer svaret
tilbake. Fire absolutte 100 %-gjengangere bærer boka: **Linux kommandolinje**
(100 %), **prosesser** (100 %), **internminne/cache** (~93 %) og selve
**live-VM-mekanikken** (~87 %). Deretter kommer **Docker** (80 %), **bash-script**
(80 %), **PowerShell** (80 %), **digitalteknikk** (73 %), **C→assembly** (73 %) og
**synkronisering** (73 %), og et lag lavfrekvent stoff (MMU, scheduling-beregning,
sikkerhet/hashing, RAID, AI-kritikk). Boka er bygd baklengs fra det sensor faktisk
premierer: **korrekt kjørt kommando / eksakt streng / fungerende script**, og
**presis forklaring av *hvorfor*** (hvorfor `-O` konstantfolder, hvorfor
cache-lokalitet gjør `mat[i][j]` raskere enn `mat[j][i]`, hvorfor et delt passord
er et sikkerhetshull) i toppsjiktet.

**Kritisk plattformbetingelse (gjelder HELE boka) — kode/terminal som tekst:**
Plattformen har **ikke kjørbar kode** og kan **ikke tegne grafiske kretsdiagrammer**.
Faget er gjennomgående praktisk og delvis visuelt. Boka løser dette med en
**konsekvent tekstnotasjon** (etablert i kap. 0.1 og brukt overalt):

- **Kommandoer, script og terminal-output** skrives som **kodeblokker/monospaced
  tekst** i `content[]`-blokkene (```-avgrensede kodeblokker der plattformen
  støtter det, ellers inline `` `kommando` ``), med prompt (`$` for bruker,
  `#` for root) og forventet output vist som egne linjer. Hver kommando ledsages
  av en **ordforklaring** av hva den gjør og hvorfor. Script vises komplett med
  kommentarer, og den forventede outputen vises rett under.
- **Digitalteknikk / logiske kretser** angis med **boolske uttrykk** (`Y = A·B + C̄`
  i tekst, LaTeX der praktisk: $Y = A\cdot B + \bar{C}$), **sannhetstabeller** som
  markdown-tabeller, og en **ordbeskrivelse** av kretsen («to inn-porter mates inn
  i en NAND, hvis utgang går inn i …»). D-vippe, full adder og NMOS/PMOS beskrives
  med tabell + ordbeskrivelse. Der 3D/tegning trengs, henvises leseren til å skisse
  selv på kladdeark (eksamen tegnes for hånd i Inspera).
- **Registre/minne/adresser** i C→assembly og MMU skrives inline
  (`movl $13, -8(%rbp)`, binær virtuell adresse → sidenummer + offset → fysisk
  ramme), med LaTeX for tallutregning (`$5000\times5000\times4 = 100$ MB`).

Denne notasjonen er broen mellom en terminal-/tegneeksamen og en tekstplattform,
og skal brukes uendret i alle kapitler.

**Kritisk hjelpemiddel-regel (gjelder HELE boka):** Eksamen er **uten
hjelpemidler** i Inspera — kandidaten har **ingen** pensumbok, cheat-sheet eller
kommandooversikt, KUN Linux-VM-en (som er selve oppgaveflaten, ikke et
oppslagsverk). Alle kommandoer, flagg, oktalkoder, PowerShell-cmdlets, mekanismer
og formler må sitte i hodet. Dette er den styrende rammen: boka må bygge
**automatiserte hoderutiner ved tastaturet**, ikke oppslagskunnskap.

**Bevisst nedprioritert (begrunnes i Del 0):** RAID (~20 %), AI-kritikk (~20 %),
lagringsmedier/disk (~20 %) og virtualiseringsbegreper (~27 %) er lavfrekvente og
får kompakt behandling. Det finnes **ingen tunge sideerstatnings-traces eller
Bankier-algoritmer** slik man ser hos NTNU/UiO — OS-teorien her er **lettere og mer
maskinnær**; boka bygger IKKE tungt på klassisk sideerstatning eller
vranglåsalgoritmer.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag i kodefag-/verktøyfag-variant — sjelden ren tallregning.** DNA-regnefag
   forutsetter regne-/utledningsoppgaver med entydige tallsvar. DATA2500 har
   **noen** tallberegninger (MMU-adresse, matrisestørrelse, RAID-paritet,
   scheduling-tid, antall CPU-kjerner) men hovedvekten er **live utføring**
   (kjør kommando → lever eksakt streng), **script som produserer nøyaktig output**,
   og **kvalitativ forklaring** («forklar kjøringen»). Fra DNA-regnefag beholdes:
   makrostrukturen (Del 0 eksamenskart → temadeler etter avhengighet →
   eksamenstrening), øvingseksamenene, **drillkapittel for hver bærebjelke-sjanger**,
   og frekvensstyrt kapittelvekting. Den viktigste tilpasningen: «det gjennomregnede
   eksempelet» er ofte en **gjennomkjørt terminalsesjon** (kommando → output →
   forklaring) eller et **komplett script** med forventet output, og «fasiten» kan
   ha **flere gyldige varianter** (sensuren er robust — se sensorkrav 4).
2. **«Symbol- og formelliste» → «Kommando- og begrepsliste».** README-kravet om en
   `collapsible` rett etter Forkunnskaper omtolkes for et verktøyfag: hvert
   delkapittel får en `collapsible` **«Kommando- og begrepsliste»** som samler
   **kommandoene/flaggene** (kommando ↔ virkning ↔ typisk output), **begrepene med
   fast distraktor** (VIRT vs. RES, trap vs. interrupt, aktiverende vs.
   deaktiverende) og de få **formlene** (matrisestørrelse, antall kjerner fra
   `time`-%, RAID-XOR, MMU-adresse) delkapitlet krever utenat — alt merket «må
   sitte» (ingen oppslag på eksamen). Regelen «per delkapittel, ikke arv» beholdes.
3. **Flashcards som kommando↔virkning + begrep↔distraktor (604).** Fordi eksamen er
   hjelpemiddelfri og premierer at kommandoer/flagg sitter, er faget svært
   flashcard-egnet: **kommando↔virkning**-kort (`chmod 750 fil` → `rwxr-x---`;
   `docker run -d -p 8080:80 nginx` → nginx på vertsport 8080; `find . -name "run*"
   -executable -type f` → finn kjørbare filer som starter med run), **flagg**-kort
   (`-S` gcc → assembly, `-O` → optimalisert; `time` Real/User/System/%),
   **begrep↔distraktor**-kort (VIRT = alt virtuelt minne prosessen *kan* bruke vs.
   RES = det som ligger i RAM *nå*; trap = prosessen selv/deterministisk vs.
   interrupt = ytre/uforutsigbart; SN-analogt finnes ikke her), **oktal↔rwx**-kort,
   og **PowerShell↔bash-alias**-kort (`Get-ChildItem`≈`ls`). **Quiz-profilen** driller
   nabobegrep-distraktorer (VIRT/RES, trap/interrupt, aktiverende/deaktiverende
   vs. o,p-/meta i digitalteknikk-lignende drill, `-p VERT:CONTAINER`-retning,
   bakgrunnsjobb sekvensiell vs. parallell).
4. **Drillkapitler for bærebjelke-sjangrene (i tråd med DNA-regnefag).** Linux-VM
   (2.2), bash-script (6.2), «forklar kjøringen» (4.3) og digitalteknikk (9.2) får
   hvert sitt **drillkapittel** rett etter teorien, fordi disse er de mest
   resirkulerte og mekaniserbare sjangrene.
5. **Ingen figurkrav-brudd — kretser som tabell + ord.** DNA-regnefagets figurkrav
   (SVG) gjelder grafisk analyse; her tegnes ingenting av plattformen. Digitalteknikk
   dekkes med **sannhetstabeller (markdown) + boolske uttrykk (LaTeX) + ordbeskrivelse**,
   som er hvordan eksamen faktisk besvares (håndtegning i Inspera). Byggefasen KAN
   legge til enkle SVG-er for porter/kretser hvis ønskelig, men det er ikke påkrevd.
6. **Ingen oppdiktede kommandoer, flagg eller output.** Usikre kommando-flagg,
   output-formater, VM-detaljer (sysbox, Guacamole), poengfordeling og
   pensumavhengige detaljer merkes `(verifiser)`. Konkrete «svarstrenger» fra
   arkivet gjengis ALDRI (de er dessuten kandidatspesifikke og verdiløse å pugge).

**Avvik fra prompt/DNA-makrostrukturen (dokumentert):** DATA2500 følger ikke ett
lineært teori-tre; delene er ordnet så **verktøyferdighet (Linux, VM, Docker,
prosesser, minne)** kommer først (100 %-gjengangerne), deretter script/PowerShell/C
(80–73 %), digitalteknikk og OS-teori (73–53 %), og lavfrekvent stoff sist. Dette
er faglig avhengighet OG frekvens samtidig, fordi ryggraden i emnet ER verktøyet.

---

## 2. Makrostruktur

Delene ordnes så de fire 100 %-gjengangerne kommer først (Linux, VM, prosesser,
minne), deretter 80 %-verktøyene (Docker, bash, PowerShell), så
73 %-ferdighetene (C/assembly, synkronisering, digitalteknikk) og OS-teori, og
lavfrekvent stoff (sikkerhet, RAID, AI-kritikk) sist. Frekvensen styrer *omfanget*
innad; drillkapitlene ligger i sine deler. `sectionNames` (bokforsiden) settes fra
kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Innhold og prioritet |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Live-VM-formen, sjangrene A–K, tekstnotasjonen, sensorkravene, kildeforbeholdet. |
| 1 | Linux kommandolinje og filsystem | 3 | **Perfekt (100 %).** Navigasjon/filer; rwx-rettigheter ↔ oktal (`chmod`); `find`, skjulte og rare filnavn, pakke ut. Ryggraden. |
| 2 | Praktisk arbeid på Linux-VM | 2 | **Perfekt (~87 %).** Eksamens-VM-en (Guacamole/sysbox); lokalisere/lese filer, kjøre programmer i løkke og filtrere output, miljøvariabler; + live-VM-drill. |
| 3 | Docker og containere | 2 | **Kunne (80 %).** `images/run/exec/ps`, portmapping + `curl`, container-ID, `:TAG`-fellen uten nett; container vs. VM, sysbox, hypervisor. |
| 4 | Prosesser og «forklar kjøringen» | 3 | **Perfekt (100 %).** PID/`fork`/`&`/multitasking; `time`/`perf`/`top`-tolkning, utlede antall kjerner og fullføringstider; + forklar-kjøringen-drill. |
| 5 | Internminne, cache og virtuelt minne | 3 | **Perfekt cache (~93 %) + kunne MMU (60 %).** RAM/random access, cache-lokalitet (matrisegjennomløp), matrisestørrelse; MMU-adresseoversetting (binær), VIRT/RES, heap, page fault. |
| 6 | Bash-scripting | 2 | **Kunne (80 %).** Løkker/betingelser/`find` i script, `$( )`, `RANDOM % n`, `chmod` i script; ett tungt script som gir eksakt output; + bash-script-drill. |
| 7 | PowerShell | 2 | **Kunne (80 %).** Objekt-pipe vs. bash-tekstpipe, Cmdlet↔alias, oneliner (`Where-Object`/`Sort-Object`/`Select-Object`), tungt arkiveringsscript. |
| 8 | C, Assembly og synkronisering | 3 | **Kunne (73 %+73 %).** `gcc -S/-O`, registre, konstantfolding; kritisk avsnitt, race condition, mutex, busy-waiting, x86 `lock`, Peterson. |
| 9 | Digitalteknikk og datamaskinarkitektur | 2 | **Kunne (73 %).** Logiske porter fra sannhetstabell, boolsk forenkling, D-vippe, full adder, NMOS/PMOS; + digitalteknikk-drill. |
| 10 | OS-teori: systemkall, modus og scheduling | 2 | **Kunne (53–60 %).** Systemkall/user-vs-kernel mode, trap vs. interrupt, modusbit; scheduling-beregning (CPU-behov/kjerner, Round-Robin, `taskset`/`perf`). |
| 11 | Sikkerhet, RAID og AI-kritikk | 3 | **Kjenne (40–20 %).** `/etc/shadow`+salt+`mkpasswd`, sudoers, SSH-nøkler; RAID-paritetsrekonstruksjon; AI-kritikk (finn feilen i ChatGPT-kode). |
| 12 | Eksamenstrening | 3 | Sjangerguide (A–K) + 3 komplette øvingseksamener (26–30 finkornede deloppgaver, live-VM-oppgaver + script + beregning + digitalteknikk). |

**Rasjonale:** de fire 100 %-/nær-100 %-gjengangerne (Linux, VM, prosesser, cache)
får hver sin del med drillkapittel og høyest kvote; 80 %-verktøyene (Docker, bash,
PowerShell) får solide deler; 73 %-ferdighetene (C/assembly, synkronisering,
digitalteknikk) får fulle deler med drill der de er mekaniserbare; OS-teori og
lavfrekvent stoff (sikkerhet/RAID/AI-kritikk) får kompakte deler. **Nesten hele
bredden testes hvert sett** — prioriteringen styrer dybde og drillmengde, ikke *om*
et tema er med (bredde lønner seg mest, jf. sensorkrav 1).

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Linux kommandolinje og filsystem |
| 2 | Praktisk arbeid på Linux-VM |
| 3 | Docker og containere |
| 4 | Prosesser og «forklar kjøringen» |
| 5 | Internminne, cache og virtuelt minne |
| 6 | Bash-scripting |
| 7 | PowerShell |
| 8 | C, Assembly og synkronisering |
| 9 | Digitalteknikk og datamaskinarkitektur |
| 10 | OS-teori: systemkall, modus og scheduling |
| 11 | Sikkerhet, RAID og AI-kritikk |
| 12 | Eksamenstrening |

---

## 3. Sjangerkatalog (fra analysen §3 — brukes i «Eksamensbelegg» under)

De sjangrene som faktisk går igjen. «Krav» oppsummerer løsningsforslagets
foretrukne metode og presisjonsnivå. Alle sjangre forklares i klarspråk ved første
bruk i Del 0 (jf. README «nybegynner-inngang» — ingen kald kode).

| Kode | Sjanger | Del | Frekvens | Krav/fasitform |
|---|---|---|---|---|
| **A** | Live Linux-VM «fyll-inn-koden» | 2 | ~13/15 sett | Utfør konkret oppgave på VM-en, lever kort streng/kode. `find`/`cat` for å finne/lese filer (også skjulte, også `./-x`); `chmod` oktal for `Permission denied`; `tar xfz`/`gunzip`; `env`/`.bashrc` for miljøvariabel; løkke for å kjøre mange programmer og filtrere. Den mest poenggivende sjangeren. |
| **B** | Docker-oppgave | 3 | ~12/15 sett | `docker images`/`image ls`, `docker run [-it\|-d] [-p V:C]`, `exec -it`, `ps`; IMAGE ID, portmapping + `curl`; **`:TAG`-felle uten nett**. |
| **C** | Bash-script (oneliner + ett tungt) | 6 | ~12/15 sett | Løkker, `if [ ! -d $d ]; then mkdir…`, `$( )`, `RANDOM % n`, `chmod`/`find` i script. Scriptet skal produsere **nøyaktig** vist output; flere gyldige varianter godtas. Alltid minst én tung (20–60 p). |
| **D** | PowerShell (kontrast til bash) | 7 | ~12/15 sett | PowerShell sender **objekter** (egenskaper/metoder), ikke tekst; Cmdlet↔alias; oneliner med `Where-Object`/`Sort-Object`/`Select-Object`/`$_`; arkiveringsscript med `.CreationTime.Year/.Month`, `Test-Path`, `mkdir`. |
| **E** | C → Assembly-sporing | 8 | ~11/15 sett | `gcc -S add.c`, les `movl`/`addl`, registre (`%rbp/%eax/%edx`), stakk-offset; én C-instruksjon → flere assembly; hvorfor `-O` **konstantfolder** `13+29` → én `movl $42`. |
| **F** | Digitalteknikk / arkitektur | 9 | ~11/15 sett | Gjenkjenn logisk port fra sannhetstabell (AND/OR/NAND/XOR/NOR), finn boolsk uttrykk, **forenkle** med boolsk algebra, konstruer D-vippe/full adder, forklar NMOS/PMOS. |
| **G** | «Forklar kjøringen» (`time`/`perf`/`top`) | 4 | ~9/15 sett | Tolk output presist: `time` Real/User/System/%; `&` → parallelt; utled **antall CPU-kjerner** fra %-tall; `perf` cpu-migrations/context-switches; `top` VIRT vs. RES. Høy poenguttelling. |
| **H** | Begreps-kortsvar (OS-teori) | 4,5,10 | hvert sett | Kort, presist: PID, systemkall, kritisk avsnitt, busy-waiting, x86 `lock`, RAM vs. cache, MMU, trap vs. interrupt. |
| **I** | Tallberegning | 5,10,11 | ~1–3/sett | MMU-adresse (binær → fysisk); matrisestørrelse (`rader×kol×4 byte`, SI-Mega); RAID-paritet (XOR); scheduling-tid (CPU-behov / min(#kjerner,#prosesser)); antall kjerner fra `time`-%. |
| **J** | Linux-sikkerhet / hashing | 11 | ~6/15 sett | `sudo su`, les `/etc/shadow`, plukk **salt** (mellom `$6$` og neste `$`), `mkpasswd -m sha-512 -s -S <salt>`; sudoers (`NOPASSWD:ALL`); SSH-nøkler (`authorized_keys`, `chmod 600/700`) + finn sikkerhetsfeil. |
| **K** | AI-kritikk | 11 | ~3/15 sett (voksende) | Les ChatGPT-generert kode/svar, finn den ene feilen, forklar *hvorfor* og rett den (delt passord i SSH-script; feilaktig sekvensiell scheduling-resonnement). Premierer dyp forståelse. |

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> **Kildeforbehold (settes i Del 0):** Analysen bygger på 15 lesbare oppgavesett
> med løsningsforslag (2017–2025); løsningsforslagene for 2021, 2024 og 2025 er
> lest i sin helhet, øvrige brukt til bekreftelse av format/temaer/sensorpraksis.
> Fra 2020 er eksamenene **individualiserte** (kandidatspesifikke passord/filer/
> container-ID-er). Der en sensorpremiss er sluttet indirekte, merkes den
> `(verifiser)`.

1. **Full bredde slår dybde.** Mange små, likevektede deloppgaver → svar på ALT.
   Ikke hopp over de billige digitalteknikk-/kortsvarpoengene for å perfeksjonere
   ett punkt. (Poeng per deloppgave, jevnt fordelt.)
2. **Sett egne forutsetninger ved uklarhet.** «Beskriv forutsetningene og løs
   ut fra dem» — eksplisitte, konsistente antakelser gir full uttelling selv når
   oppgaven er underbestemt. Hvert beregnings-/analyseeksempel i boka **åpner med
   antakelsene**.
3. **«Forklar kort.»** Kortsvarene skal være presise og konsise; ordrikdom
   belønnes ikke. Men *korrekt* forklaring av **hvorfor** (ikke bare *hva*) avgjør
   toppsjiktet (A/B).
4. **Flere gyldige svar godtas.** Løsningsforslagene viser flere akseptable
   framgangsmåter (`docker image ls` vs. `docker images`; `find`-basert vs. manuell
   leting; ulike script-varianter). Boka viser den foretrukne besvarelsen og nevner
   de andre gyldige der sensuren er robust.
5. **Output-presisjon på praktiske oppgaver.** Der svaret er en konkret kode/streng
   fra VM-en, må den være **eksakt** (riktig antall tegn, ingen etterfølgende
   mellomrom). Script skal produsere output på nøyaktig ønsket form.

### Hva som skiller karakternivåene (fra analysen §4 — Del 0 + eksamenstrening)

- **Bestått (E):** Behersker grunnleggende Linux-kommandoer og filrettigheter;
  klarer de fleste live-VM-oppgavene; gjenkjenner logiske porter; kan de faste
  begrepene (PID, systemkall, kritisk avsnitt).
- **Midtsjikt (C/D):** Skriver fungerende bash-/PowerShell-onelinere; tolker
  `time`/`perf`/`top` riktig; kan Docker inkl. portmapping; gjør
  MMU-/matrise-/RAID-beregning riktig; forklarer C→assembly.
- **Toppsjikt (A/B):** Skriver de tunge scriptene feilfritt med riktig output;
  utleder antall CPU-kjerner og fullføringstider med begrunnelse; forklarer
  **hvorfor** (`-O` konstantfolder, cache-lokalitet, delt passord = sikkerhetshull);
  avdekker og retter feilen i AI-generert kode.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under; glosses ved FØRSTE bruk i HVERT kapittel)

**F1** Tro at bakgrunnsjobber (`&`) kjører **sekvensielt** (de starter parallelt;
totaltiden bestemmes av antall kjerner, ikke N×tid). · **F2** Feil utledning av
**antall CPU-kjerner** — må leses fra `time`-%-tallet (8 prosesser à ~50 % ⇒ 4
kjerner), ikke gjettes fra antall prosesser. · **F3** Glemme **cache-lokalitet**:
`mat[i][j]` skriver sammenhengende (cache-treff), `mat[j][i]` hopper i minnet
(cache-bom) ⇒ ~3× tregere; paging er *ikke* forklaringen (hele arrayet i RAM). ·
**F4** Blande **VIRT og RES** (VIRT = alt virtuelt minne prosessen *kan* bruke;
RES = det som ligger i RAM *nå*; RES vokser først når minnet **tas i bruk**). ·
**F5** Feil **salt-uttrekk** fra `/etc/shadow` (saltet er mellom `$6$` og neste
`$`, ikke hele hashen). · **F6** Glemme **`:TAG`** i `docker run` uten nett
(«network is unreachable»). · **F7** Feil **portmapping-retning** (`-p
VERT:CONTAINER`). · **F8** **`chmod`-oktal feil** (`-rwxr-x---` ⇒ `750`, ikke
`740`/`755`). · **F9** **`gcc -O`** misforstått (den *regner ut resultatet på
forhånd* — konstantfolding — ikke bare «gjør mindre»). · **F10** **Race condition
undervurdert** (`felles = felles + tall` er ikke atomær: les–regn–skriv i separate
steg; løses med mutex). · **F11** **Busy-wait-mutex sin ulempe oversett**
(turn-basert `while(turn!=tid){}` sløser CPU og tvinger streng veksling — svakere
enn Peterson/semafor). · **F12** **Ikke oppgi forutsetninger** ved underbestemte
oppgaver. · **F13** **AI-generert kode ikke lest kritisk** (kjøre ChatGPT-kode uten
å se sikkerhetshullet — delt passord, farlig/overflødig konfig).

### Kapittel-DNA (teori) — obligatorisk blokk-rekkefølge

Plattformens blokktyper (`text`/`definition`/`theorem`/`example`/`exercise`/`tip`/
`warning`/`collapsible`), i løkker (Teori→Eksempel→Oppgave):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–K), hva sensor ser
   etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner IKKE på tall.
2. `text` **Forkunnskaper** — kapitler boka bygger på + kryssbok-lenker
   (README-leserkrav), etterfulgt av `collapsible` **Kommando- og begrepsliste**
   (kommando ↔ virkning ↔ output, begreper med fast distraktor, formler — alt «må
   sitte», ingen oppslag).
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hva temaet tester, når. Gjerne
   forankret i et konkret hverdags-/systemanker (jf. README «hverdagsanker»).
4. `definition` **Faktakontrakt** — kjernebegreper/kommandoer/flagg i emnets
   terminologi. **Toppnivå med `title` — flashcard-kilden.** Åpner med forklaring i
   ord, ikke en kommando/formel som første linje.
5. `theorem`/`text` **Prosedyre-/kommandokontrakt** — de sentrale kommando-sekvensene,
   beregningsprosedyrene eller kretsreglene, med gjennomkjørt terminalsesjon
   (kommando → output → forklaring) eller nummererte beregningstrinn; beregninger
   **åpner med antakelsene**.
6. `warning` **Typiske feil** — feilkodene (F1–F13) som gjelder temaet; glosset ved
   første bruk i kapitlet.
7. `example` × 2–4 — første enkelt, siste på **eksamensnivå** modellert på en reell
   sjanger (A–K). Løsning skrevet som toppbesvarelse: kommando/script + eksakt
   output + eksplisitt *hvorfor*-forklaring.
8. `exercise` × 6–12 — stigende (2–3 lett, 2–4 middels, 2–4 eksamensklone,
   nyskrevne verdier), alle med `solution` + `hints` (første hint = kommandoen/
   grepet/formelen, aldri konklusjonen). Hver merket med sjangerkode.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet + tidligere
   kapitler det bygger på.

Drillkapitler (2.2/4.3/6.2/9.2): Eksamensvinkel → løsningsoppskrift (algoritmisk
fremgangsmåte for sjangeren) → sensor-kommentert gjennomkjørt case → 10–15 oppgaver
på eksamensnivå (alle med `solution` + `hints`). Eksamenstreningskapitlene (Del 12)
har egne oppsett — se §6.

---

## 4. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt (telte belegg av 15 lesbare
> sett) + sjangerkoder (A–K) + prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta).
> **Faktakontrakt** = begreper/kommandoer/regler som SKAL med (flashcard-kilden).
> **Kvote** = quiz/flashcards. Kryssbok-lenkene peker på eksisterende kapitler
> (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes DATA2500
**id:** `oslomet-data2500-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (3 t digital eksamen i Inspera, **uten
  hjelpemidler**, A–F, 26–30 finkornede deloppgaver, **live Linux-VM**), sjangrene
  A–K, tekstnotasjonen (kommandoer/output/kretser som tekst), temafrekvensene,
  sensorkravene, karakternivåene og kildeforbeholdet — verktøyet som styrer hele
  boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2017–2025). Skal formidle: (a)
  **formen** — individuell digital skoleeksamen, **3 timer**, Inspera, **ingen
  hjelpemidler**, A–F, teller 100 %, obligatoriske øvinger godkjent; 26–30
  deloppgaver, de fleste maks 10 p (≈3,33 % hver av 300), noen tunge script-/
  analyseoppgaver 20–60 p; (b) **den definerende egenskapen** — live Linux-VM
  (Guacamole/sysbox, uten nett) der kandidaten utfører kommandoer og limer eksakt
  svar tilbake; **individualisert per kandidat** → svarstrenger er verdiløse å
  pugge, ferdigheten er poenget; (c) **de fire 100 %-/nær-100 %-gjengangerne** —
  Linux kommandolinje (100 %), prosesser (100 %), internminne/cache (~93 %),
  live-VM-mekanikk (~87 %) — pluss Docker/bash/PowerShell (80 %) og
  digitalteknikk/C-assembly/synkronisering (73 %); (d) **temafrekvenstabellen**
  (§2 i analysen); (e) **sensorkravene** (§3); (f) **karakternivåene** E/C/A (§3);
  (g) **kildeforbeholdet** — 15 lesbare sett, 3 skann utelatt, individualiserte
  eksamener; (h) **tekstnotasjonen** — kommandoer/output/script/kretser som tekst.
  Prioritet: perfekt (meta).
- **Innholdskontrakt (Del 0-pakken, jf. README):** (i) **«Slik leser du denne
  boka»-boks** (`tip`/`text`, IKKE `definition`): forklarer karakterskalaen (og at
  **C er en god, vanlig karakter tidlig i studiet**), sjangerkodene A–K i klarspråk
  (aldri kald kode), og at typiske feil (F1–F13) har et samlet register; rammer inn
  tunge symboler/kommandoer leseren møter senere («du trenger ikke forstå disse
  ennå»). (ii) **«Lite tid?»-boks**: hurtigrute for 3–5 dager (kapittelrekkefølge +
  timeanslag fra `estimatedMinutes`) + presisering at anslagene er LESEtid (den som
  øver kommandoer ved tastaturet regner ca. ×1,5). (iii) **Kildenote for
  frekvens-/sensor-empirien** (semestre/år, forbehold — fra EKSAMENSANALYSE, aldri
  oppdiktet). (iv) **Sjanger-/prosedyrekort på ÉN side**: sjanger A–K → én linjes
  oppskrift → tidsbudsjett → vanligste feil. (v) **Deltidsrute** (10–12 uker,
  ~8 t/uke) + **fulltidsplan**, med de tre øvingseksamenene fordelt på flere økter.
  (vi) **«Lese mye, skrive lite»-boks**: for DATA2500 tilpasset til **«øv ved
  tastaturet»** — les oppgaven → formuler kommandoen mentalt → sjekk fasiten; men
  minst ÉN øvingseksamen faktisk **kjørt på en ekte Linux-terminal** (bash-ferdighet
  er motorisk). (vii) **Samlet oppslagskort** (collapsible, ren tabell): de mest
  brukte kommandoene + oktal↔rwx + `time`-feltene + MMU-/matrise-/RAID-formlene +
  PowerShell↔bash-alias — printbart puggeark for en hjelpemiddelfri eksamen.
  Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Gitt en
  3-timers mal med 26–30 deloppgaver — sett opp tidsbudsjett og rekkefølge (bredde
  først)» og «Avgjør av en oppgavetekst om den krever en *kjørt kommando* (streng)
  eller en *forklaring* (hvorfor)».
- **Typiske feil:** Metafeilene — perfeksjonere ett tema og miste billige
  breddepoeng (mot sensorkrav 1); tro at man kan pugge svarstrenger (de er
  individualiserte); forvente kalkulator/oppslag (finnes ikke); beskrive i stedet
  for å faktisk kjøre kommandoen.
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 12).

### Del 1 — Linux kommandolinje og filsystem *(prioritet: PERFEKT — 100 %)*

#### Kapittel 1.1: Navigasjon, filer og filsystemhierarkiet
**id:** `oslomet-data2500-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-0-1`

- **Kapitteltype:** verktøykapittel (perfekt).
- **Description:** Ryggraden — `pwd`/`cd`/`ls`/`cat`/`touch`/`mkdir`/`cp`/`mv`/`rm`/`ln`,
  filsystemhierarkiet (`/`, `/etc`, `/home`, `/proc`), absolutte vs. relative stier,
  og lesing av output. Verktøyet hver eneste live-VM-oppgave bygger på.
- **Eksamensbelegg:** Sjanger A/H, **100 %** (15/15 sett). Testes både som MCQ og
  som live-VM-oppgave. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.1. `collapsible` **Kommando- og begrepsliste:**
  navigasjons-/filkommandoene ↔ virkning ↔ typisk output; absolutt vs. relativ sti;
  filsystemhierarkiet.
- **Faktakontrakt (flashcard-kilde):** `pwd` (skriv arbeidskatalog), `cd`
  (bytt katalog; `cd -`/`cd ~`), `ls` (`-l` lang, `-a` skjulte, `-h` lesbar
  størrelse), `cat`/`less`/`head`/`tail` (les fil), `touch`/`mkdir`/`cp`/`mv`/`rm`
  (`-r` rekursiv), `ln`/`ln -s` (hard/symbolsk lenke); **filsystemhierarkiet**
  (`/`, `/etc`, `/home`, `/tmp`, `/proc`, `/var`); absolutt (`/home/x`) vs. relativ
  (`./x`, `../x`) sti.
- **Prosedyre-/kommandokontrakt:** gjennomkjørt terminalsesjon: naviger til en
  katalog, list innhold med `-la`, les en fil, kopier og gi nytt navn — hver linje
  med prompt (`$`) + output + forklaring.
- **Typiske feil:** blande absolutt/relativ sti; glemme `-r` ved katalogkopiering/
  -sletting; tro `mv` kopierer (den flytter/omdøper).
- **Modellsvar:** «På VM-en: naviger til hjemmekatalogen, list ALLE filer inkl.
  skjulte, og les innholdet i den nyeste — vis kommandoene og forklar hva hver gjør»
  (sjanger A).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 1.2: Filrettigheter — rwx, oktal og `chmod`/`chown`
**id:** `oslomet-data2500-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-1-1`

- **Kapitteltype:** verktøykapittel (perfekt).
- **Description:** rwx-triplett for eier/gruppe/andre ↔ oktal kode, `chmod`
  (oktal og symbolsk), `chown`/`chgrp`, og hvordan man gjør en `Permission
  denied`-fil lesbar/kjørbar. En fast, mekaniserbar ferdighet.
- **Eksamensbelegg:** Sjanger A/H, del av Linux-kommandolinje **100 %**;
  oktal-lesing er en gjenganger. F8 (`chmod`-oktal feil) er en fast felle.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Kommando- og begrepsliste:**
  rwx↔oktal-konverteringen (r=4, w=2, x=1), `chmod`/`chown`/`chgrp`, eier/gruppe/andre.
- **Faktakontrakt (flashcard-kilde):** rwx-triplett ×3 (eier/gruppe/andre);
  **oktal-koding** r=4, w=2, x=1 → `rwxr-x---` = 750; `chmod 750 fil`, `chmod
  u+x fil`, `chmod -R`; `chown bruker:gruppe fil`; hva `Permission denied` betyr og
  hvordan fikse det (`chmod +r`/`+x`).
- **Prosedyre-/kommandokontrakt:** nummerert rwx→oktal-algoritme (les triplett →
  summer verdier per gruppe → tre siffer); gjennomkjørt: en fil gir `Permission
  denied`, sett riktig oktal, les den.
- **Typiske feil:** **F8** — `-rwxr-x---` ⇒ `750`, ikke `740`/`755`; blande
  rekkefølgen eier/gruppe/andre; glemme at `x` på katalog betyr «kan gå inn i».
- **Modellsvar:** «Angi oktal kode for `-rwxr--r--`, og skriv `chmod`-kommandoen som
  gir en skjult fil rettighetene `-rw-------`» (→ 744; `chmod 600 .fil`).
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 1.3: `find`, skjulte filer, rare filnavn og utpakking
**id:** `oslomet-data2500-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-1-2`

- **Kapitteltype:** verktøykapittel (perfekt).
- **Description:** `find` med predikater (`-name`, `-type`, `-executable`), lesing
  av skjulte filer (`.`) og filer med rare navn (`./-x`, filnavn med mellomrom),
  og utpakking (`tar xfz`, `gunzip`) — kjerneferdighetene i live-VM-sjangeren.
- **Eksamensbelegg:** Sjanger A, kjernen i live-VM-oppgaven (~87 %). `find` med
  predikat + rare filnavn er gjengangere. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Kommando- og begrepsliste:**
  `find`-predikatene; `./-x`-triks; `tar`/`gunzip`-flagg.
- **Faktakontrakt (flashcard-kilde):** `find <sti> -name "møn*"` (glob),
  `-type f`/`-type d`, `-executable`, kombinasjon (`find . -type f -name "run*"
  -executable`); **skjulte filer** (`.`-prefiks, `ls -a`); **rare filnavn** —
  `cat ./-x` (bindestrek-navn), `cat "fil med mellomrom"`, escaping; **utpakking**
  `tar xfz arkiv.tar.gz`, `gunzip fil.gz`, `tar tfz` (list innhold).
- **Prosedyre-/kommandokontrakt:** gjennomkjørt: finn en skjult fil med `find`, les
  en fil hvis navn starter med `-`, pakk ut et arkiv og les innholdet.
- **Typiske feil:** `cat -x` (tolkes som flagg) i stedet for `cat ./-x`; glemme
  `-a`/`find` for skjulte filer; feil `tar`-flagg (`x` pakke ut, `t` liste, `z`
  gzip, `f` fil).
- **Modellsvar:** «Finn alle kjørbare filer under `~/oppgave` som starter med
  `test`, og les den skjulte fila `.svar` i den mappa» (sjanger A).
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 1:** 4 prøver (Linux kommandolinje og filsystem)
1. Prøve 1.A (~20 min): navigasjon, filkommandoer, filsystemhierarki (A/H).
2. Prøve 1.B (~20 min): rwx ↔ oktal, `chmod`/`chown` (A/H, F8).
3. Prøve 1.C (~20 min): `find`-predikater, skjulte/rare filer, utpakking (A).
4. Prøve 1.D (~25 min): samlet live-VM-lignende oppgavesekvens på eksamensnivå (A).

### Del 2 — Praktisk arbeid på Linux-VM *(prioritet: PERFEKT — ~87 %)*

#### Kapittel 2.1: Eksamens-VM-en og fyll-inn-koden-oppgaven
**id:** `oslomet-data2500-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-1-3`

- **Kapitteltype:** verktøykapittel (perfekt).
- **Description:** Hvordan eksamens-VM-en virker (Guacamole-fane → bash-prompt i en
  `sysbox`-Docker-container uten nett, kandidatspesifikk innlogging, nullstilles ved
  reconnect), og arbeidsflyten «utfør kommando → kopier eksakt streng til Inspera».
  Miljøvariabler (`env`, `set`, `.bashrc`, `/etc/environment`) og løkke for å kjøre
  mange programmer og filtrere output.
- **Eksamensbelegg:** Sjanger A, **~87 %** (13/15 sett) — selve eksamensmekanikken.
  Prioritet: perfekt. `(verifiser)` for VM-tekniske detaljer (sysbox/Guacamole).
- **Forkunnskaper/kryssbok:** kap. 1.3. `collapsible` **Kommando- og begrepsliste:**
  `env`/`set`/`export`, `.bashrc`, `/etc/environment`; `for f in $(find …); do … done`;
  output-presisjon (ingen etterfølgende mellomrom).
- **Faktakontrakt (flashcard-kilde):** eksamens-VM-en (Guacamole/sysbox, uten nett,
  individualisert, nullstilles) `(verifiser)`; **miljøvariabler** — `env` (list),
  `echo $VAR`, `export VAR=verdi`, hvor de bor (`.bashrc`, `/etc/environment`);
  **kjør-mange-og-filtrer**: `for f in $(find . -type f -executable); do "$f"; done
  | grep <mønster>`; output-presisjon (sensorkrav 5).
- **Prosedyre-/kommandokontrakt:** gjennomkjørt: finn en miljøvariabel med `env |
  grep`; kjør alle kjørbare filer i en mappe i en løkke og fang den ene som gir en
  streng med et gitt delmønster.
- **Typiske feil:** etterfølgende mellomrom / feil antall tegn i limt svar
  (sensorkrav 5); glemme `$( )` rundt `find` i løkken; lete manuelt der en løkke er
  raskere.
- **Modellsvar:** «Kjør de 40 programmene i `~/prog/` i en løkke og finn det ene som
  skriver ut en streng som inneholder `KEY=` — lever hele strengen» (sjanger A).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 2.2: DRILL — live-VM-oppgaver
**id:** `oslomet-data2500-2-2` · **number:** 2.2 · **estimatedMinutes:** 75 · **prerequisites:** `oslomet-data2500-2-1`

- **Kapitteltype:** drill (perfekt).
- **Description:** Systematisk drill på fyll-inn-koden-sjangeren (A): finn/les filer
  (også skjulte/rare), sett rettigheter, pakk ut, les miljøvariabler, kjør
  programmer i løkke og filtrer — trent til raske, eksakte svar. Kapitlet deles i
  økter («— naturlig pausepunkt —» siden estimatedMinutes > 45).
- **Eksamensbelegg:** Sjanger A, **~87 %** — den mest poenggivende sjangeren totalt.
  Prioritet: perfekt.
- **Innholdskontrakt (løsningsoppskrift):** For hver VM-oppgave: 1) **les
  oppgaveverbet** (finn/les/sett/kjør?); 2) velg riktig kjerneverktøy (`find`/`cat`/
  `chmod`/`tar`/`env`/løkke); 3) **kjør, ikke gjett**; 4) lim **eksakt** streng.
  Sensor-kommentert gjennomkjørt case med margnotat om hvor poengene ligger og hvor
  man mister dem (etterfølgende mellomrom, feil sti). 12–15 oppgaver på
  eksamensnivå, nyskrevne filer/mønstre, alle med `solution` + `hints`.
- **Oppgavesjangre:** A. Mønstereksempel (A): «Fila `-report` (bindestrek-navn) i en
  skjult mappe `~/.data` er `Permission denied` — gjør den lesbar og lever tredje
  linje.» (`chmod +r ~/.data/-report` → `cat ~/.data/./-report`).
- **Typiske feil:** `cat -report` som flagg (bruk `./`); glemme `chmod` før lesing;
  upresis limt streng.
- **Kvote:** 24 quiz / 12 flashcards.

**Prøve-kvote Del 2:** 4 prøver (praktisk arbeid på Linux-VM)
1. Prøve 2.A (~20 min): finn og les filer (skjulte/rare) på VM (A).
2. Prøve 2.B (~20 min): rettigheter + utpakking i live-kontekst (A, F8).
3. Prøve 2.C (~20 min): miljøvariabler + løkke-kjør-og-filtrer (A).
4. Prøve 2.D (~25 min): samlet fyll-inn-koden-sekvens på eksamensnivå (A).

### Del 3 — Docker og containere *(prioritet: KUNNE — 80 %)*

#### Kapittel 3.1: Docker — images, run, exec, portmapping
**id:** `oslomet-data2500-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-2-1`

- **Kapitteltype:** verktøykapittel (kunne).
- **Description:** Docker-arbeidsflyten på VM-en: liste og hente images (`docker
  images`/`image ls`, IMAGE ID), kjøre containere (`run -it`/`-d`), portmapping
  (`-p VERT:CONTAINER`) + `curl`, gå inn i en container (`exec -it`), liste
  kjørende (`ps`) — og **`:TAG`-fellen** når VM-en er uten nett.
- **Eksamensbelegg:** Sjanger B, **80 %** (12/15 sett) — lettvinte poeng når
  verktøyet sitter. F6 (`:TAG` uten nett) og F7 (portmapping-retning) er faste feller.
  Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Kommando- og begrepsliste:**
  `docker images/run/exec/ps` ↔ virkning; `-p VERT:CONTAINER`; IMAGE ID/TAG.
- **Faktakontrakt (flashcard-kilde):** `service docker start`; `docker images`/
  `docker image ls` (IMAGE ID, REPOSITORY, TAG); `docker run hello-world`;
  `docker run -it ubuntu bash` + `cat /etc/os-release`; `docker run -d -p 8080:80
  nginx` (bakgrunn + portmapping) + `curl localhost:8080`; `docker ps` (kjørende);
  `docker exec -it <id> bash`; **portmapping-retning** `-p VERT:CONTAINER`;
  **`:TAG`-regelen** uten nett (bare ferdignedlastede images/tags kjører).
- **Prosedyre-/kommandokontrakt:** gjennomkjørt: list images, kjør nginx på riktig
  vertsport i bakgrunnen, hent siden med `curl`, gå deretter inn i containeren med
  `exec`.
- **Typiske feil:** **F6** — glemme `:TAG`/prøve å hente et image uten nett
  («network is unreachable»); **F7** — bytte om `-p VERT:CONTAINER`; glemme `-d` og
  låse terminalen.
- **Modellsvar:** «Start en nginx-container som gjør containerens port 80
  tilgjengelig på vertsport 12345, og hent forsidekoden med `curl`» (sjanger B).
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 3.2: Containere vs. virtuelle maskiner
**id:** `oslomet-data2500-3-2` · **number:** 3.2 · **estimatedMinutes:** 40 · **prerequisites:** `oslomet-data2500-3-1`

- **Kapitteltype:** teorikapittel (kunne → kjenne).
- **Description:** Forskjellen container vs. VM (delt kjerne vs. egen kjerne),
  hypervisor (type 1/2), og sysbox-containeren eksamen bruker — nok teori til å
  forklare *hvorfor* Docker er lettvint og hvordan eksamens-VM-en er bygget.
- **Eksamensbelegg:** Sjanger H, virtualisering/containere **~27 %** (4/15),
  ofte flettet inn i Docker-konteksten. Prioritet: kjenne. Merkes «bør kjenne til».
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Kommando- og begrepsliste:**
  container vs. VM, hypervisor type 1/2, sysbox, delt vs. egen kjerne.
- **Faktakontrakt (flashcard-kilde):** **container** (deler vertens kjerne, lett,
  rask oppstart) vs. **VM** (egen gjestekjerne over hypervisor, tyngre, sterkere
  isolasjon); **hypervisor** type 1 (bare metall) vs. type 2 (oppå OS); **sysbox**
  (container som kan kjøre Docker inni — eksamens-VM-en) `(verifiser)`.
- **Prosedyre-/kommandokontrakt:** ordbeskrivelse + sammenligningstabell (container
  vs. VM: kjerne, isolasjon, oppstartstid, ressursbruk).
- **Typiske feil:** tro en container har egen kjerne (den deler vertens); blande
  type 1/2 hypervisor; tro isolasjonen er like sterk som en VM.
- **Modellsvar:** «Forklar kort forskjellen på en Docker-container og en virtuell
  maskin mht. kjerne, isolasjon og oppstartstid» (sjanger H — treff alle tre akser).
- **Kvote:** 14 quiz / 18 flashcards.

**Prøve-kvote Del 3:** 4 prøver (Docker og containere)
1. Prøve 3.A (~20 min): images, run, IMAGE ID, `exec` (B).
2. Prøve 3.B (~20 min): portmapping + `curl` + `:TAG`-fellen (B, F6/F7).
3. Prøve 3.C (~15 min): container vs. VM, hypervisor (H).
4. Prøve 3.D (~25 min): samlet Docker-oppgave på eksamensnivå (B).

### Del 4 — Prosesser og «forklar kjøringen» *(prioritet: PERFEKT — 100 %)*

#### Kapittel 4.1: Prosesser, PID, fork og bakgrunnsjobber
**id:** `oslomet-data2500-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-data2500-2-1`

- **Kapitteltype:** teori/verktøy (perfekt).
- **Description:** Prosessbegrepet (program under utførelse, PID), `fork`,
  multitasking, `ps`, bakgrunnsjobber (`&`) og hvorfor N jobber med `&` starter
  **parallelt** — grunnlaget for «forklar kjøringen».
- **Eksamensbelegg:** Sjanger H/G, **100 %** (15/15). Både begrep og analyse. F1
  (`&` sekvensielt) er en fast felle. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Kommando- og begrepsliste:**
  PID, `fork`, `ps`, `&`, multitasking (Round-Robin + timer-interrupt).
- **Faktakontrakt (flashcard-kilde):** **PID** (unik prosess-ID, brukes til
  `kill`/signaler); **`fork`** (lager barneprosess, kopi av forelder); **`&`**
  (kjør i bakgrunnen → parallelt); `ps`/`ps aux`; **multitasking** (OS veksler
  mellom prosesser via timer-interrupt = Round-Robin); N jobber med `&` starter
  parallelt (F1).
- **Prosedyre-/kommandokontrakt:** gjennomkjørt: start tre tunge jobber med `&`,
  list dem med `ps`, forklar at de kjører parallelt (ikke sekvensielt).
- **Typiske feil:** **F1** — tro `&`-jobber kjører sekvensielt (N×tid); blande
  prosess og program; tro PID gjenbrukes umiddelbart.
- **Modellsvar:** «Du starter fire kopier av samme program med `&`. Kjører de
  etter hverandre eller samtidig, og hva bestemmer totaltiden?» (sjanger G/H — F1;
  parallelt, begrenset av antall kjerner).
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 4.2: `time`, `perf` og `top` — tolke output
**id:** `oslomet-data2500-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-4-1`

- **Kapitteltype:** teori/verktøy (perfekt).
- **Description:** Presis tolkning av `time` (Real/User/System/%), `perf`
  (cpu-migrations, context-switches) og `top` (VIRT/RES), og hvordan utlede
  **antall CPU-kjerner** fra `time`-prosentene — den mest undervurderte
  poengkilden i faget.
- **Eksamensbelegg:** Sjanger G/H/I, **~60 %** (9/15) men høy poenguttelling. F2
  (kjerneutledning), F4 (VIRT/RES) er faste feller. Prioritet: perfekt (kjernen i
  «forklar kjøringen»).
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Kommando- og begrepsliste:**
  `time` Real/User/System/%; `perf` cpu-migrations/context-switches; `top`
  VIRT/RES; kjerneutledningsformelen.
- **Faktakontrakt (flashcard-kilde):** **`time`** — Real (veggklokke), User
  (bruker-mode CPU), System (kjerne-mode CPU), % (andel av én CPU); **antall
  kjerner-utledning** — når man overbelaster synker %-en mot 100/(prosesser/kjerner)
  (8 prosesser à ~50 % ⇒ 4 kjerner); **`perf`** cpu-migrations (prosess flyttet
  mellom kjerner), context-switches; **`top`** VIRT (alt virtuelt minne prosessen
  *kan* bruke) vs. RES (delen som faktisk ligger i RAM nå).
- **Prosedyre-/kommandokontrakt (åpner med antakelser):** nummerert
  kjerneutledning fra `time`-%; VIRT/RES-skillet; gjennomkjørt `time`-output tolket
  felt for felt.
- **Typiske feil:** **F2** — gjette kjerner fra antall prosesser; **F4** — blande
  VIRT (kan bruke) og RES (bruker nå); tro User+System = Real (parallellitet gjør
  User > Real mulig).
- **Modellsvar:** «`time` viser åtte parallelle jobber som hver bruker ca. 50 %.
  Hvor mange CPU-kjerner har maskinen, og hvorfor?» (sjanger I/G — F2; 4 kjerner).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 4.3: DRILL — «forklar kjøringen»
**id:** `oslomet-data2500-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `oslomet-data2500-4-2`

- **Kapitteltype:** drill (perfekt).
- **Description:** Systematisk drill på tolkning av `time`/`perf`/`top`-output,
  parallell vs. sekvensiell kjøring, kjerneutledning og VIRT/RES — de høyt vektede
  analysepoengene. Deles i økter (estimatedMinutes > 45).
- **Eksamensbelegg:** Sjanger G/I, **~60 %** høyt vektet. Prioritet: perfekt.
- **Innholdskontrakt (løsningsoppskrift):** For hver «forklar kjøringen»: 1) **oppgi
  antakelser** (antall prosesser, om jobbene er CPU- eller I/O-bundne); 2) les
  Real/User/System/% (eller VIRT/RES); 3) utled kjerner/tid med formelen; 4) forklar
  **hvorfor** (parallellitet, overbelastning). Sensor-kommentert case med margnotat.
  10–15 oppgaver på eksamensnivå, nyskrevne tall, alle med `solution` + `hints`.
- **Oppgavesjangre:** G/I. Mønstereksempel (I): «Seks prosesser kjører parallelt og
  `time` viser ~67 % hver — hvor mange kjerner? Hva blir totaltiden hvis hver
  trenger 12 s CPU?» (4 kjerner; 6·12/4 = 18 s).
- **Typiske feil:** F1, F2, F4; glemme å oppgi antakelser (F12).
- **Kvote:** 22 quiz / 14 flashcards.

**Prøve-kvote Del 4:** 4 prøver (prosesser og «forklar kjøringen»)
1. Prøve 4.A (~20 min): PID, `fork`, `&`, parallell vs. sekvensiell (H/G, F1).
2. Prøve 4.B (~20 min): `time` Real/User/System/% + kjerneutledning (G/I, F2).
3. Prøve 4.C (~20 min): `perf`/`top` VIRT/RES + cpu-migrations (H/G, F4).
4. Prøve 4.D (~25 min): samlet «forklar kjøringen» på eksamensnivå (G/I).

### Del 5 — Internminne, cache og virtuelt minne *(prioritet: PERFEKT cache ~93 % · KUNNE MMU 60 %)*

#### Kapittel 5.1: RAM, cache og lokalitet
**id:** `oslomet-data2500-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-4-1`

- **Kapitteltype:** teori/beregning (perfekt).
- **Description:** RAM (uniform «random access») vs. cache (nærmere CPU, ulik
  hentetid), cache-lokalitet, og hvorfor matrisegjennomløp `mat[i][j]` er raskere
  enn `mat[j][i]` — den nesten identiske gjengangeroppgaven.
- **Eksamensbelegg:** Sjanger H/I, **~93 %** (14/15) — nesten identiske oppgaver
  gjenbrukes år etter år. F3 (cache-lokalitet) er den faste fella. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Kommando- og begrepsliste:**
  RAM (random access), cache, romlig/tidsmessig lokalitet, radvis vs. kolonnevis
  gjennomløp.
- **Faktakontrakt (flashcard-kilde):** **RAM** = like rask aksess uansett adresse
  (random access); **cache** = raskere/nærmere CPU, begrenset, ulik hentetid;
  **lokalitet** — romlig (naboadresser hentes sammen i en cache-linje) og tidsmessig;
  **matrisegjennomløp** — `mat[i][j]` skriver sammenhengende (cache-treff),
  `mat[j][i]` hopper (cache-bom) ⇒ ~3× tregere; paging er *ikke* forklaringen (F3).
- **Prosedyre-/kommandokontrakt:** ordforklaring av hvorfor radvis er raskere +
  gjennomkjørt `time`-sammenligning av de to løkkene.
- **Typiske feil:** **F3** — forklare med paging i stedet for cache-lokalitet (hele
  arrayet får plass i RAM); tro cache er «bare mer RAM»; blande romlig/tidsmessig.
- **Modellsvar:** «To løkker fyller en 5000×5000-matrise — én radvis, én kolonnevis.
  Hvorfor er den ene ~3× raskere?» (sjanger H — F3; cache-lokalitet).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 5.2: Matrisestørrelse og minneberegning
**id:** `oslomet-data2500-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-data2500-5-1`

- **Kapitteltype:** beregning (kunne).
- **Description:** Regne minnebruk (`rader × kolonner × byte-per-element`, SI-Mega =
  million) og relaterte størrelser — en fast, forutsigbar tallberegning.
- **Eksamensbelegg:** Sjanger I, del av internminne-temaet. Karakteristisk og
  forutsigbar (~1 per relevant sett). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Kommando- og begrepsliste:**
  matrisestørrelsesformelen; SI-Mega (10⁶) vs. binær Mebi (2²⁰); byte per int/float.
- **Faktakontrakt (flashcard-kilde):** **matrisestørrelse** $= \text{rader} \times
  \text{kolonner} \times \text{byte per element}$; **SI-Mega** = million (10⁶) — brukt
  i disse oppgavene; 4 byte per `int`/`float`; eksempel $5000\times5000\times4 = 100$
  MB.
- **Prosedyre-/kommandokontrakt (åpner med antakelser):** nummerert: fastslå
  byte per element → multipliser rader × kolonner × byte → konverter til MB (÷10⁶).
- **Typiske feil:** blande SI-Mega (10⁶) og Mebi (2²⁰); glemme byte-per-element;
  ikke oppgi antakelse om elementtype (F12).
- **Modellsvar:** «Hvor mange MB bruker en 8000×8000-matrise av 4-byte-heltall?»
  (sjanger I; 256 MB).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 5.3: MMU, virtuelt minne og adresseoversetting
**id:** `oslomet-data2500-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-data2500-5-1`

- **Kapitteltype:** teori/beregning (kunne).
- **Description:** MMU-en oversetter virtuell → fysisk adresse (sidenummer + offset,
  sidetabell, ramme), page fault, og virtuelt minne (VIRT/RES, heap, `/proc/pid/maps`)
  — med **binær adresseberegning**.
- **Eksamensbelegg:** Sjanger H/I, **~60 %** (9/15). Både begrep og binær
  adresseberegning. F4 (VIRT/RES) hører også hit. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 5.1; kap. 4.2 (VIRT/RES). `collapsible` **Kommando-
  og begrepsliste:** virtuell/fysisk adresse, sidenummer + offset, sidetabell, ramme,
  page fault, VIRT/RES, heap, `/proc/pid/maps`.
- **Faktakontrakt (flashcard-kilde):** **MMU** oversetter virtuell → fysisk adresse;
  **adresse = sidenummer + offset** (de høye bitene = sidenummer, de lave = offset);
  **sidetabell** slår sidenummer → ramme; **page fault** (siden ikke i RAM, hentes
  fra disk); **virtuelt minne** (hver prosess sitt eget adresserom); VIRT vs. RES
  (fra 4.2); heap; `/proc/pid/maps`.
- **Prosedyre-/kommandokontrakt (åpner med antakelser):** nummerert
  adresseoversetting — del binær virtuell adresse i sidenummer + offset (gitt
  sidestørrelse) → slå opp ramme i sidetabell → sett sammen fysisk adresse; noter når
  det gir page fault.
- **Typiske feil:** feil deling sidenummer/offset (les sidestørrelsen: 2^k offset-bit);
  **F4** — VIRT/RES; tro virtuell = fysisk adresse.
- **Modellsvar:** «Sidestørrelse 4 KB. Oversett den virtuelle adressen `0x3ABC` til
  fysisk, gitt at sidetabellen mapper side 3 → ramme 7» (sjanger I; del i sidenr 3 +
  offset 0xABC → ramme 7).
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 5:** 4 prøver (internminne, cache og virtuelt minne)
1. Prøve 5.A (~20 min): RAM/cache/lokalitet, matrisegjennomløp (H, F3).
2. Prøve 5.B (~15 min): matrise-/minneberegning (I).
3. Prøve 5.C (~20 min): MMU-adresseoversetting (binær), page fault (I).
4. Prøve 5.D (~20 min): VIRT/RES + samlet minneprøve på eksamensnivå (H/I, F4).

### Del 6 — Bash-scripting *(prioritet: KUNNE — 80 %)*

#### Kapittel 6.1: Bash-script — løkker, betingelser og struktur
**id:** `oslomet-data2500-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-data2500-2-1`

- **Kapitteltype:** verktøykapittel (kunne).
- **Description:** Å skrive bash-script: `for`/`while`/`if`, testuttrykk (`[ -d ]`/
  `[ -f ]`/`[ -x ]`), kommando-substitusjon `$( )`, `RANDOM % n`, `chmod`/`find` i
  script, omdirigering (`>`/`>>`) og pipe — verktøyet bak både oneliner- og
  tungscript-oppgavene.
- **Eksamensbelegg:** Sjanger C, **80 %** (12/15) — alltid minst ett script.
  Prioritet: kunne. Output-presisjon (sensorkrav 5) er kritisk.
- **Forkunnskaper/kryssbok:** kap. 2.1; kap. 1.3 (`find`). `collapsible` **Kommando-
  og begrepsliste:** `for`/`while`/`if`, `[ -d/-f/-x ]`, `$( )`, `RANDOM % n`,
  `>`/`>>`, pipe, `grep`/`cut`/`sort`/`shuf`.
- **Faktakontrakt (flashcard-kilde):** `for f in liste; do … done`; `while [ cond
  ]; do … done`; `if [ ! -d "$d" ]; then mkdir "$d"; fi`; **testflagg** `-d` (katalog),
  `-f` (fil), `-x` (kjørbar); **`$( )`** (kommando-substitusjon); **`RANDOM % n`**
  (tilfeldig 0..n-1); omdirigering `>` (overskriv), `>>` (legg til); pipe `|`;
  `grep`/`cut`/`sort`/`shuf`.
- **Prosedyre-/kommandokontrakt:** komplett lite script vist med kommentarer +
  forventet output rett under; understrek at output-formen må stemme eksakt.
- **Typiske feil:** manglende anførselstegn rundt `"$var"` (mellomrom i navn);
  glemme `fi`/`done`; feil `[ ]`-mellomrom; output-form som ikke matcher (sensorkrav 5).
- **Modellsvar:** «Skriv et script som lager mappene `ex1`…`ex5` hvis de ikke finnes,
  og legger en tom fil `run` i hver» (sjanger C — oneliner-nivå).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 6.2: DRILL — tunge bash-script
**id:** `oslomet-data2500-6-2` · **number:** 6.2 · **estimatedMinutes:** 70 · **prerequisites:** `oslomet-data2500-6-1`

- **Kapitteltype:** drill (kunne → perfekt for sjanger C).
- **Description:** Drill på de tunge scriptene (20–60 p): bygg mappe-/filstruktur,
  kjør mange programmer og fang det med et delmønster, generer output på nøyaktig
  form. Deles i økter (estimatedMinutes > 45).
- **Eksamensbelegg:** Sjanger C, **80 %** — alltid minst én tung (20–60 p).
  Prioritet: kunne (avgjør C→A i script-delen).
- **Innholdskontrakt (løsningsoppskrift):** For hvert tungt script: 1) **skriv ut
  ønsket output først** (målet); 2) velg løkke + betingelse + `find`/`$( )`; 3)
  bygg trinnvis og test; 4) sjekk at output-formen stemmer **eksakt**. Sensor-
  kommentert gjennomkjørt case (script + output + margnotat). 10–15 oppgaver på
  eksamensnivå (nyskrevne strukturer/mønstre), alle med `solution` + `hints`.
  Flere gyldige varianter nevnes (sensorkrav 4).
- **Oppgavesjangre:** C. Mønstereksempel (C): «Skriv et script som kjører alle
  kjørbare filer i `~/bin/` og skriver ut navnet på den ene som gir en linje med
  `TOKEN`» (løkke + `grep`).
- **Typiske feil:** output-form som ikke matcher; glemme `chmod +x` på genererte
  script; ikke sitere variabler.
- **Kvote:** 22 quiz / 14 flashcards.

**Prøve-kvote Del 6:** 4 prøver (bash-scripting)
1. Prøve 6.A (~20 min): løkker/betingelser/testflagg (C).
2. Prøve 6.B (~20 min): `$( )`, `RANDOM`, pipe/filtrering (C).
3. Prøve 6.C (~25 min): tungt script — mappe-/filstruktur (C).
4. Prøve 6.D (~25 min): tungt script — kjør-mange-og-fang på eksamensnivå (C).

### Del 7 — PowerShell *(prioritet: KUNNE — 80 %)*

#### Kapittel 7.1: PowerShell — objekt-pipe og Cmdlet↔alias
**id:** `oslomet-data2500-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-6-1`

- **Kapitteltype:** verktøykapittel (kunne).
- **Description:** PowerShells signaturtrekk — det sendes **objekter** (med
  egenskaper/metoder) gjennom pipen, ikke ren tekst som i bash — og kartet
  Cmdlet↔Linux-alias, pluss onelinere med `Where-Object`/`Sort-Object`/
  `Select-Object` og `$_`.
- **Eksamensbelegg:** Sjanger D, **80 %** (12/15) — bevisst kontrast bash vs.
  PowerShell. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 6.1 (bash-kontrast). `collapsible` **Kommando- og
  begrepsliste:** objekt-pipe vs. tekst-pipe; Cmdlet↔alias-tabellen; `$_`,
  `Where-Object`/`Sort-Object`/`Select-Object`.
- **Faktakontrakt (flashcard-kilde):** **objekt-pipe** (PowerShell sender objekter
  med egenskaper/metoder; bash sender tekst); **Cmdlet↔alias** — `Get-ChildItem`≈`ls`,
  `Get-Process`≈`ps`, `Copy-Item`≈`cp`, `Move-Item`≈`mv`, `Stop-Process`≈`kill`,
  `Get-Content`≈`cat`, `Write-Output`≈`echo`, `Get-Location`≈`pwd`; **oneliner-verktøy**
  `Where-Object {$_.X -gt N}`, `Sort-Object X`, `Select-Object -First N`, `$_`
  (gjeldende objekt).
- **Prosedyre-/kommandokontrakt:** gjennomkjørt oneliner: hent prosesser, filtrer på
  minnebruk, sorter, ta de fem største — vis hvordan objekt-egenskaper brukes i pipen.
- **Typiske feil:** behandle PowerShell-output som tekst (grep i stedet for
  `Where-Object`); glemme `$_` i filterblokk; blande Cmdlet og alias.
- **Modellsvar:** «Skriv en PowerShell-oneliner som lister de tre prosessene med
  høyest minnebruk» (sjanger D — `Get-Process | Sort-Object WS -Descending |
  Select-Object -First 3`).
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 7.2: PowerShell — arkiveringsscript og filsystem
**id:** `oslomet-data2500-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-7-1`

- **Kapitteltype:** verktøykapittel (kunne).
- **Description:** Det tunge PowerShell-scriptet: arkiver alle `.pdf` under `C:\` inn
  i `C:\pdf\Y{år}\M{måned}` ved hjelp av `.CreationTime.Year/.Month`, `Test-Path`,
  `mkdir` — kontrasten til det tunge bash-scriptet.
- **Eksamensbelegg:** Sjanger D, **80 %** — tungt PowerShell-script er en fast
  variant. Prioritet: kunne (avgjør C→A i PowerShell-delen).
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Kommando- og begrepsliste:**
  `.CreationTime.Year/.Month`, `Test-Path`, `mkdir`/`New-Item`, `Get-ChildItem
  -Recurse`, `Move-Item`.
- **Faktakontrakt (flashcard-kilde):** `Get-ChildItem -Recurse -Filter *.pdf`;
  objekt-egenskaper `.CreationTime.Year`/`.Month`; `Test-Path` (finnes stien?);
  `New-Item -ItemType Directory`/`mkdir`; `Move-Item kilde mål`; bygge målsti fra
  dato-egenskaper.
- **Prosedyre-/kommandokontrakt:** komplett arkiveringsscript vist med kommentarer +
  forklaring av hvert steg (hent filer → for hver: bygg målmappe fra dato → opprett
  hvis mangler → flytt).
- **Typiske feil:** glemme `-Recurse`; ikke sjekke `Test-Path` før `mkdir` (feil);
  bygge målsti feil fra dato-egenskaper.
- **Modellsvar:** «Skriv et PowerShell-script som flytter alle `.txt`-filer under
  `C:\data` inn i undermapper etter opprettelsesår» (sjanger D — tungt script).
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 7:** 4 prøver (PowerShell)
1. Prøve 7.A (~20 min): objekt-pipe vs. tekst-pipe, Cmdlet↔alias (D).
2. Prøve 7.B (~20 min): oneliner med `Where`/`Sort`/`Select`/`$_` (D).
3. Prøve 7.C (~25 min): arkiveringsscript med dato-egenskaper (D).
4. Prøve 7.D (~20 min): samlet PowerShell-oppgave på eksamensnivå (D).

### Del 8 — C, Assembly og synkronisering *(prioritet: KUNNE — 73 % + 73 %)*

#### Kapittel 8.1: C → Assembly-sporing
**id:** `oslomet-data2500-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-4-1`

- **Kapitteltype:** teori/analyse (kunne).
- **Description:** `gcc -S add.c` → les assembly (`movl`/`addl`, registre `%rbp`/
  `%eax`/`%edx`, stakk-offset), forstå at én C-instruksjon blir flere
  assembly-instruksjoner, og hvorfor `gcc -O` **konstantfolder** `13+29` → én `movl
  $42`.
- **Eksamensbelegg:** Sjanger E, **73 %** (11/15). Ofte koblet til
  synkroniseringsoppgaven (samme `felles = felles + tall`-linje). F9 (`-O`) er den
  faste fella. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Kommando- og begrepsliste:**
  `gcc -S`/`-O`, `movl`/`addl`, registre `%rbp`/`%eax`/`%edx`, stakk-offset,
  konstantfolding.
- **Faktakontrakt (flashcard-kilde):** **`gcc -S add.c`** (kompiler til assembly,
  `add.s`); **`gcc -O`** (optimaliser); **`movl $13, -8(%rbp)`** (flytt konstant 13
  til stakk-offset −8), **`addl %eax, %edx`** (legg `%eax` til `%edx`); registre
  `%rbp` (basepeker), `%eax`/`%edx` (arbeidsregistre); én C-instruksjon → flere
  assembly (≈ én assembly = én maskininstruksjon); **konstantfolding** — `-O`
  regner ut `13+29` = 42 ved kompilering → én `movl $42` (F9).
- **Prosedyre-/kommandokontrakt:** gjennomkjørt: kompiler en liten C-funksjon med og
  uten `-O`, les og forklar assembly-linjene, vis konstantfoldingen.
- **Typiske feil:** **F9** — tro `-O` «gjør mindre» (den *regner ut på forhånd*);
  lese `movl src, dst` i feil retten; blande registre.
- **Modellsvar:** «`int x = 13 + 29;` kompilert med `gcc -O` gir én `movl $42, ...`.
  Forklar hva kompilatoren gjorde og hvorfor» (sjanger E — F9; konstantfolding).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 8.2: Synkronisering — kritisk avsnitt, race condition og mutex
**id:** `oslomet-data2500-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-8-1`

- **Kapitteltype:** teori (kunne).
- **Description:** Kritisk avsnitt, race condition (`felles = felles + tall` er ikke
  atomær), mutex (`Get_Mutex`/`Release_Mutex`), busy-waiting og x86 `lock`-instruksjonen
  — begrep koblet til kode.
- **Eksamensbelegg:** Sjanger H/E, **73 %** (11/15). Kombinerer begrep + kode. F10
  (race undervurdert) er den faste fella. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 8.1 (assembly-stegene bak race). `collapsible`
  **Kommando- og begrepsliste:** kritisk avsnitt, race condition, mutex, busy-waiting,
  x86 `lock`, atomær operasjon.
- **Faktakontrakt (flashcard-kilde):** **kritisk avsnitt** (kode som må fullføres
  uten at andre bruker samme felles ressurs); **race condition** — `felles = felles
  + tall` er les–regn–skriv i separate assembly-steg → to tråder kan overskrive
  hverandre (F10); **mutex** (gjensidig utelukkelse, `Get_Mutex`/`Release_Mutex`);
  **busy-waiting** (venting i en while-løkke til en hendelse inntreffer); **x86
  `lock`** (låser databussen/minneadressen så en operasjon blir atomær — hindrer
  andre CPU-er i å aksessere adressen under instruksjonen).
- **Prosedyre-/kommandokontrakt:** vis race-en steg for steg i assembly (les → regn
  → skriv), deretter hvordan en mutex serialiserer det.
- **Typiske feil:** **F10** — tro `felles = felles + tall` er atomær; tro `lock`
  låser hele programmet (bare bussen/adressen); blande mutex og busy-wait.
- **Modellsvar:** «To tråder kjører `felles = felles + 1` 1000 ganger hver.
  Sluttresultatet er ofte < 2000. Forklar hvorfor, og hvordan mutex fikser det»
  (sjanger H — F10).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 8.3: Peterson, `lock` og busy-waitingens pris
**id:** `oslomet-data2500-8-3` · **number:** 8.3 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-data2500-8-2`

- **Kapitteltype:** teori (kunne → kjenne).
- **Description:** Den enkle turn-baserte mutexen (`while(turn!=tid){}`) og dens
  svakheter (busy-waiting sløser CPU + streng veksling), Peterson-algoritmen som
  sammenligningsgrunnlag, og når `lock` trengs på flerkjerne — dybden som skiller
  A/B.
- **Eksamensbelegg:** Sjanger H, del av synkronisering **73 %**. F11 (busy-wait-ulempe)
  er den faste fella. Prioritet: kunne (A/B-dybde). Merkes «avgjør toppsjiktet».
- **Forkunnskaper/kryssbok:** kap. 8.2. `collapsible` **Kommando- og begrepsliste:**
  turn-basert mutex, Peterson, busy-waiting-pris, semafor (nevnt).
- **Faktakontrakt (flashcard-kilde):** **turn-basert mutex** `while(turn!=tid){}`
  (fungerer, men sløser CPU og tvinger streng veksling — F11); **Peterson-algoritmen**
  (flag + turn, gjensidig utelukkelse uten maskinvarelås — som sammenligningsgrunnlag);
  **busy-waiting-pris** (CPU brukes til å vente); alternativer (semafor/blokkerende
  ventestrategi nevnt kort).
- **Prosedyre-/kommandokontrakt:** ordforklaring av hvorfor turn-basert er svakere
  enn Peterson/semafor; når `lock` trengs på flerkjerne.
- **Typiske feil:** **F11** — overse at turn-basert sløser CPU og tvinger veksling;
  tro Peterson trenger maskinvarelås.
- **Modellsvar:** «Hva er ulempen med `while(turn != tid){}` som gjensidig
  utelukkelse, og hvorfor er Peterson bedre?» (sjanger H — F11).
- **Kvote:** 14 quiz / 16 flashcards.

**Prøve-kvote Del 8:** 4 prøver (C, Assembly og synkronisering)
1. Prøve 8.A (~20 min): `gcc -S`, les assembly, registre (E).
2. Prøve 8.B (~20 min): `-O` konstantfolding (E, F9).
3. Prøve 8.C (~20 min): kritisk avsnitt, race condition, mutex (H, F10).
4. Prøve 8.D (~20 min): busy-waiting, Peterson, `lock` på eksamensnivå (H, F11).

### Del 9 — Digitalteknikk og datamaskinarkitektur *(prioritet: KUNNE — 73 %)*

#### Kapittel 9.1: Logiske porter, sannhetstabeller og boolsk forenkling
**id:** `oslomet-data2500-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-0-1`

- **Kapitteltype:** regne-/konstruksjonskapittel (kunne).
- **Description:** Gjenkjenne logisk port fra sannhetstabell (AND/OR/NOT/NAND/NOR/XOR),
  finne det boolske uttrykket for en krets og **forenkle** med boolsk algebra —
  lettvinte, forutsigbare poeng (fast oppgave 1–3 siden 2019).
- **Eksamensbelegg:** Sjanger F, **73 %** (11/15) — fast oppgave 1–3 fra 2019.
  Prioritet: kunne. Overlapper IN2060/TDT4160 (kryssanalyser).
- **Forkunnskaper/kryssbok:** kap. 0.1. `collapsible` **Kommando- og begrepsliste:**
  portene + sannhetstabeller; boolske lover (De Morgan, distribusjon, absorpsjon).
- **Faktakontrakt (flashcard-kilde):** **portene** AND ($A\cdot B$), OR ($A+B$),
  NOT ($\bar{A}$), NAND, NOR, XOR ($A\oplus B$) med hver sin sannhetstabell;
  **boolske lover** — De Morgan ($\overline{A\cdot B} = \bar{A}+\bar{B}$),
  distribusjon, absorpsjon ($A + A\cdot B = A$); lese uttrykk ut av en krets;
  forenkle til færrest porter.
- **Prosedyre-/kommandokontrakt:** nummerert: sett opp sannhetstabell → skriv
  uttrykk (sum av produkter) → forenkle med lovene. Kretser gis som sannhetstabell
  + boolsk uttrykk + ordbeskrivelse (plattformen tegner ikke).
- **Typiske feil:** blande NAND/NOR; feil De Morgan; glemme å forenkle helt.
- **Modellsvar:** «En krets har sannhetstabellen [gitt] — hvilken port er det, og kan
  uttrykket forenkles?» (sjanger F).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 9.2: D-vippe, full adder, NMOS/PMOS — og DRILL
**id:** `oslomet-data2500-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-data2500-9-1`

- **Kapitteltype:** konstruksjon + drill (kunne).
- **Description:** Konstruere D-vippe/D-lås (lagre én bit) og full adder (sum +
  mente), forklare NMOS/PMOS-transistorer, og drille hele digitalteknikk-sjangeren
  (oppgave 1–3). Deles i økter (estimatedMinutes > 45).
- **Eksamensbelegg:** Sjanger F, **73 %** — fast oppgave 1–3. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 9.1. `collapsible` **Kommando- og begrepsliste:**
  D-vippe/D-lås, full adder (sum/carry), NMOS/PMOS, halvadder vs. fulladder.
- **Faktakontrakt (flashcard-kilde):** **D-vippe** (lagrer inn-verdien D ved klokke-
  flanke; grunnlaget for register/minne); **D-lås** (nivåstyrt); **full adder**
  (tre innganger A/B/carry-in → sum $= A\oplus B\oplus C_{in}$, carry-out $=
  AB + C_{in}(A\oplus B)$); **halvadder** (to innganger, ingen carry-in); **NMOS**
  (leder når gate høy), **PMOS** (leder når gate lav); CMOS = komplementært par.
- **Prosedyre-/kommandokontrakt (drill-oppskrift):** for hver sjanger-F-oppgave:
  1) tabell/uttrykk; 2) forenkle; 3) konstruer fra porter; 4) forklar. Sensor-
  kommentert case + 10–12 oppgaver på eksamensnivå (nyskrevne tabeller/kretser),
  alle med `solution` + `hints`.
- **Typiske feil:** blande sum og carry i full adder; blande D-vippe (flankestyrt)
  og D-lås (nivåstyrt); bytte NMOS/PMOS-ledeforhold.
- **Modellsvar:** «Sett opp sannhetstabellen for en full adder og gi de boolske
  uttrykkene for sum og carry-out» (sjanger F).
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 9:** 4 prøver (digitalteknikk og datamaskinarkitektur)
1. Prøve 9.A (~20 min): porter fra sannhetstabell + boolsk uttrykk (F).
2. Prøve 9.B (~20 min): boolsk forenkling (De Morgan m.m.) (F).
3. Prøve 9.C (~20 min): D-vippe/D-lås + full adder (F).
4. Prøve 9.D (~20 min): NMOS/PMOS + samlet oppgave 1–3-drill (F).

### Del 10 — OS-teori: systemkall, modus og scheduling *(prioritet: KUNNE — 53–60 %)*

#### Kapittel 10.1: Systemkall, brukermodus/kjernemodus og avbrudd
**id:** `oslomet-data2500-10-1` · **number:** 10.1 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-data2500-4-1`

- **Kapitteltype:** teori (kunne).
- **Description:** Hva et systemkall er (lar en user-mode-prosess be OS-kjernen om
  en privilegert operasjon), skillet brukermodus/kjernemodus + modusbit, og trap vs.
  interrupt — faste kortsvar.
- **Eksamensbelegg:** Sjanger H, **~53 %** (8/15). «Hva er hensikten med et
  systemkall?» og trap vs. interrupt går ofte igjen. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Kommando- og begrepsliste:**
  systemkall, brukermodus/kjernemodus, modusbit, trap, interrupt.
- **Faktakontrakt (flashcard-kilde):** **systemkall** (grensesnittet der en
  user-mode-prosess ber kjernen utføre en privilegert operasjon i kjernemodus);
  **brukermodus vs. kjernemodus** (modusbit skiller dem; kjernemodus har fulle
  privilegier); **trap** (forårsaket av prosessen selv, deterministisk sted — f.eks.
  systemkall/feil) vs. **interrupt** (ytre hendelse, uforutsigbart tidspunkt — f.eks.
  I/O ferdig); `strace`-tankegang (spore systemkall).
- **Prosedyre-/kommandokontrakt:** ordforklaring av modusbyttet ved et systemkall
  (bruker → trap → kjerne → retur); trap/interrupt-tabell.
- **Typiske feil:** blande trap (intern, deterministisk) og interrupt (ekstern,
  uforutsigbar); tro et vanlig funksjonskall skifter modus; glemme *hvorfor*
  systemkall trengs (privilegie-skillet).
- **Modellsvar:** «Hva er hensikten med et systemkall, og hva skjer med
  prosessormodus når det utføres?» (sjanger H).
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 10.2: Scheduling-beregning og `taskset`/`perf`
**id:** `oslomet-data2500-10-2` · **number:** 10.2 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-data2500-4-2`

- **Kapitteltype:** beregning (kunne → kjenne).
- **Description:** Regne fullføringstid (totalt CPU-behov / min(#kjerner,
  #prosesser)), Round-Robin-tid, og bruke `taskset -c` (binde til kjerne) og `perf`
  (cpu-migrations, context-switches) — tallberegning + tolkning, ofte koblet til
  prosesser.
- **Eksamensbelegg:** Sjanger I/G, **~60 %** (9/15). Prioritet: kunne. Bygger på
  4.2/4.3 (kjerneutledning).
- **Forkunnskaper/kryssbok:** kap. 4.2 (viser de 2–3 nøkkelreglene ferdig oppfrisket
  — «Sist du var her»: `time`-%, kjerneutledning). `collapsible` **Kommando- og
  begrepsliste:** scheduling-tid-formelen, Round-Robin + timer-interrupt, `taskset
  -c`, `perf` cpu-migrations/context-switches.
- **Faktakontrakt (flashcard-kilde):** **scheduling-/fullføringstid** $=
  \dfrac{\text{totalt CPU-behov}}{\min(\#\text{kjerner}, \#\text{prosesser})}$ (når
  #kjerner ≤ #prosesser; ellers begrenset av #prosesser); **Round-Robin** (hver
  prosess får et tidskvantum etter tur via timer-interrupt); **`taskset -c N prog`**
  (bind prosessen til kjerne N — fjerner cpu-migrations); **`perf`** cpu-migrations
  (flyttet mellom kjerner), context-switches.
- **Prosedyre-/kommandokontrakt (åpner med antakelser):** nummerert: fastslå #kjerner
  og #prosesser → CPU-behov per prosess → total tid med formelen; noter hvordan
  `taskset` endrer bildet.
- **Typiske feil:** dele på #prosesser når #kjerner er mindre (bruk min-en); glemme
  at Round-Robin-veksling koster kontekstskifte; ikke oppgi antakelser (F12).
- **Modellsvar:** «Åtte like prosesser trenger 6 s CPU hver på en 4-kjerners maskin.
  Hvor lang tid tar alle til sammen (Round-Robin, ideelt)?» (sjanger I; 8·6/4 = 12 s).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 10:** 4 prøver (OS-teori: systemkall, modus og scheduling)
1. Prøve 10.A (~15 min): systemkall + modusbit (H).
2. Prøve 10.B (~15 min): trap vs. interrupt (H).
3. Prøve 10.C (~20 min): scheduling-/fullføringstid-beregning (I).
4. Prøve 10.D (~20 min): `taskset`/`perf` + samlet OS-teori på eksamensnivå (I/G).

### Del 11 — Sikkerhet, RAID og AI-kritikk *(prioritet: KJENNE — 40–20 %)*

#### Kapittel 11.1: Passord, hashing og Linux-sikkerhet
**id:** `oslomet-data2500-11-1` · **number:** 11.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-data2500-1-2`

- **Kapitteltype:** verktøy/teori (kjenne → kunne når det kommer).
- **Description:** Bli root (`sudo su`), lese `/etc/shadow`, plukke ut **salt** og
  regne SHA-512-hash med `mkpasswd`, sudoers (`NOPASSWD:ALL`), og SSH-nøkkeloppsett
  (`authorized_keys`, `chmod 600/700`) + finne sikkerhetsfeil.
- **Eksamensbelegg:** Sjanger J, **~40 %** (6/15, fra 2021) — ofte som praktisk
  crack-/hash-oppgave. F5 (salt-uttrekk) er den faste fella. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 1.2 (rettigheter). `collapsible` **Kommando- og
  begrepsliste:** `sudo su`, `/etc/shadow`-format, salt, `mkpasswd`, sudoers,
  `authorized_keys`, `chmod 600/700`.
- **Faktakontrakt (flashcard-kilde):** `sudo su` (bli root); **`/etc/shadow`-format**
  `$6$salt$hash` ($6$ = SHA-512); **salt** = strengen mellom `$6$` og neste `$`
  (F5); **`mkpasswd -m sha-512 -s -S <salt>`** (regn hash, verifiser mot lagret);
  **sudoers** `%sudo ALL=(ALL:ALL) ALL` (gir root-tilgang), `NOPASSWD:ALL` (fjerner
  passordkrav); **SSH-nøkler** `ssh-keygen`, `authorized_keys`, `chmod 700 ~/.ssh`
  + `chmod 600 authorized_keys`.
- **Prosedyre-/kommandokontrakt:** gjennomkjørt: bli root, les `/etc/shadow`, plukk
  salt, regn hash med `mkpasswd` og sammenlign; forklar hvorfor `NOPASSWD:ALL` er
  farlig.
- **Typiske feil:** **F5** — ta hele hashen som salt (bare mellom `$6$` og neste
  `$`); feil `chmod` på `.ssh` (må være 700/600); tro sudoers-endring krever reboot.
- **Modellsvar:** «Gitt en `/etc/shadow`-linje `bruker:$6$Xy9$...:...`, hva er
  saltet, og hvilken `mkpasswd`-kommando verifiserer passordet `hemmelig`?»
  (sjanger J — F5).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 11.2: RAID og paritetsrekonstruksjon
**id:** `oslomet-data2500-11-2` · **number:** 11.2 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-data2500-0-1`

- **Kapitteltype:** teori/beregning (kjenne).
- **Description:** RAID-nivåene 0/1/3/5 og hvordan gjenopprette en tapt disk ved XOR
  av de øvrige + paritetsdisk rad for rad — en avgrenset, forutsigbar beregning.
- **Eksamensbelegg:** Sjanger I, **~20 %** (3/15) — regnes ut
  (paritetsrekonstruksjon). Prioritet: kjenne. Merkes «bør kjenne til».
- **Forkunnskaper/kryssbok:** kap. 0.1. `collapsible` **Kommando- og begrepsliste:**
  RAID 0/1/3/5, paritet (XOR), stripe, rekonstruksjon.
- **Faktakontrakt (flashcard-kilde):** **RAID 0** (striping, ingen redundans, rask),
  **RAID 1** (speiling), **RAID 3** (dedikert paritetsdisk), **RAID 5** (distribuert
  paritet); **paritet = XOR** av datadiskene; **rekonstruksjon** — tapt disk =
  XOR av alle gjenværende (data + paritet) rad for rad.
- **Prosedyre-/kommandokontrakt (åpner med antakelser):** nummerert: identifiser
  RAID-nivå → for hver rad, XOR de gjenværende bitene → gjenopprett den tapte disken.
- **Typiske feil:** blande RAID-nivåene (3 dedikert vs. 5 distribuert paritet);
  XOR-feil rad for rad; tro RAID 0 gir redundans.
- **Modellsvar:** «Tre datadisker + én paritetsdisk (RAID 5-lignende). Disk 2 er
  tapt. Gjenopprett rad `1011 / ? / 0110 / 0001` (paritet sist)» (sjanger I;
  XOR gjenværende).
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 11.3: AI-kritikk — finn feilen i ChatGPT-koden
**id:** `oslomet-data2500-11-3` · **number:** 11.3 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-data2500-11-1`

- **Kapitteltype:** analyse (kjenne → A/B-dybde).
- **Description:** Les ChatGPT-generert kode/svar, finn den ene feilen, forklar
  *hvorfor* den er feil og hvordan rette den — den nye, voksende sjangeren som
  premierer dyp forståelse og kildekritikk.
- **Eksamensbelegg:** Sjanger K, **~20 %** (3/15, voksende 2024–2025). F13
  (AI-kode ikke lest kritisk) er kjernen. Prioritet: kjenne (men A/B-markør).
  Merkes «voksende — avgjør toppsjiktet».
- **Forkunnskaper/kryssbok:** kap. 11.1 (SSH/sikkerhet); kap. 4.2/10.2 (scheduling);
  kap. 8.2 (race). `collapsible` **Kommando- og begrepsliste:** de dokumenterte
  AI-feilene (delt passord i SSH-script, sekvensiell scheduling-feilslutning).
- **Faktakontrakt (flashcard-kilde):** **AI-kritikk-sjangeren** — kode/svar med
  *én* feil; **dokumenterte feiltyper**: (a) scheduling der ChatGPT feilaktig deler
  prosessene i to sekvensielle grupper (riktig: alle kjører samtidig, del totalt
  CPU-behov på kjerner — F1/F2); (b) SSH-script med `echo "$USER:password" | chpasswd`
  (svakt, delt passord ⇒ sikkerhetshull, linjen må slettes — F13) og som legger
  brukerens egen nøkkel i egen `authorized_keys` (overflødig).
- **Prosedyre-/kommandokontrakt:** løsningsoppskrift: 1) les koden/svaret kritisk;
  2) test antakelsene mot det du kan (parallellitet, sikkerhet); 3) pek på den ene
  feilen; 4) forklar **hvorfor** + rett den.
- **Typiske feil:** **F13** — godta AI-koden uten å se hullet; rette symptom ikke
  årsak; ikke begrunne *hvorfor* det er feil (sensorkrav 3).
- **Modellsvar:** «ChatGPT foreslår et SSH-oppsett-script med linja `echo
  "$USER:passord123" | chpasswd`. Finn sikkerhetsfeilen og forklar hvorfor den er
  farlig» (sjanger K — F13; delt/svakt passord).
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 11:** 4 prøver (sikkerhet, RAID og AI-kritikk)
1. Prøve 11.A (~20 min): `/etc/shadow`, salt, `mkpasswd` (J, F5).
2. Prøve 11.B (~20 min): sudoers + SSH-nøkler + finn sikkerhetsfeil (J).
3. Prøve 11.C (~15 min): RAID-paritetsrekonstruksjon (I).
4. Prøve 11.D (~20 min): AI-kritikk — finn og rett feilen (K, F13).

### Del 12 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 12.1: Øvingseksamen 1 — verktøytung (Linux/VM/Docker/prosesser)
**id:** `oslomet-data2500-12-1` · **number:** 12.1 · **estimatedMinutes:** 190 · **prerequisites:** `oslomet-data2500-11-3`

- **Kapitteltype:** øvingseksamen (komplett sett + fasit i collapsibles).
- **Description:** Et komplett 3-timers sett (26–30 finkornede deloppgaver) tungt på
  de fire 100 %-gjengangerne + Docker/bash: live-VM-oppgaver (A), Docker (B),
  prosesser + «forklar kjøringen» (G), cache/matrise (H/I), bash-script (C). Fasit
  i collapsibles med sensorkommentarer og selvdiagnose-sjekkliste. «Kan trygt deles
  over flere kvelder — én bolk per økt.»
- **Eksamensbelegg:** Metakapittel — hele arkivets verktøytunge profil. Sjangre
  A, B, C, G, H, I. Prioritet: perfekt (meta).
- **Innholdskontrakt:** 26–30 deloppgaver med poeng per deloppgave (de fleste 10 p,
  et par tunge script 20–40 p) — alle nyskrevne. Fasit viser eksakte kommandoer/
  output, flere gyldige varianter der relevant (sensorkrav 4), og **antakelser**
  oppgitt på beregningene. **Sjekkliste for selvdiagnose (☐)** etter fasiten. En
  **kald bank** (8–10 oppgaver uten hint, kun momentliste) inngår her.
- **Oppgavesjangre:** A/B/C/G/H/I. Løsningsforslag skrevet som toppbesvarelse.
- **Typiske feil:** hele feilkatalogen F1–F10 samlet der de treffer.
- **Kvote:** 12 quiz / 0 flashcards.

#### Kapittel 12.2: Øvingseksamen 2 — script/PowerShell/C/digitalteknikk
**id:** `oslomet-data2500-12-2` · **number:** 12.2 · **estimatedMinutes:** 190 · **prerequisites:** `oslomet-data2500-12-1`

- **Kapitteltype:** øvingseksamen (komplett sett + fasit i collapsibles).
- **Description:** Et komplett 3-timers sett tungt på 80–73 %-ferdighetene: tungt
  bash-script (C), PowerShell oneliner + arkiveringsscript (D), C→assembly (E),
  synkronisering (H), digitalteknikk oppgave 1–3 (F), MMU-beregning (I). Fasit i
  collapsibles + selvdiagnose. Deles over økter.
- **Eksamensbelegg:** Metakapittel — sjangre C, D, E, F, H, I. Prioritet: perfekt (meta).
- **Innholdskontrakt:** 26–30 deloppgaver, poeng per deloppgave, nyskrevne. Fasit med
  eksakte script/output (output-form eksakt), assembly-forklaringer, boolsk
  forenkling, MMU-oversetting med antakelser. Selvdiagnose-sjekkliste (☐). Kald bank
  fortsetter her.
- **Oppgavesjangre:** C/D/E/F/H/I. Løsningsforslag som toppbesvarelse.
- **Typiske feil:** F8–F13 + F3/F4 der de treffer.
- **Kvote:** 12 quiz / 0 flashcards.

#### Kapittel 12.3: Øvingseksamen 3 — full bredde (unionen)
**id:** `oslomet-data2500-12-3` · **number:** 12.3 · **estimatedMinutes:** 190 · **prerequisites:** `oslomet-data2500-12-2`

- **Kapitteltype:** øvingseksamen (komplett sett + fasit i collapsibles).
- **Description:** Et komplett 3-timers sett som speiler et moderne sett (2023–2025):
  digitalteknikk (oppgave 1–3), OS-begreps-kortsvar, 8–12 live-VM-/Docker-oppgaver,
  et tungt bash-script + én PowerShell, «forklar kjøringen», 1–3 tallberegninger, og
  en AI-kritikk-oppgave. Sikrer robusthet mot hele bredden. Deles over økter.
- **Eksamensbelegg:** Metakapittel — ALLE sjangre A–K. Prioritet: perfekt (meta).
- **Innholdskontrakt:** 26–30 deloppgaver som følger den moderne malen (§1
  analysen §1: 3–5 digitalteknikk, 4–6 OS-begreps-kortsvar, 8–12 live-VM-/Docker,
  2–4 script, 2–4 «forklar kjøringen», 1–2 tallberegninger, evt. AI-kritikk), poeng
  per deloppgave, nyskrevne. Fasit som toppbesvarelse med antakelser + flere gyldige
  varianter. Selvdiagnose-sjekkliste (☐). Avsluttende kald bank.
- **Oppgavesjangre:** A–K (full bredde).
- **Typiske feil:** hele feilkatalogen F1–F13.
- **Kvote:** 12 quiz / 0 flashcards.

**Prøve-kvote Del 12:** ingen egne temaprøver (Del 12 **er** øvingseksamenene — 3
komplette sett à ~190 min; «kan trygt deles over flere kvelder — én bolk per økt»).

---

## 5. Kvotesammendrag og summeringskontroll

> **Kontrollregnet per-kapittel FØR totalen skrives.** Summene under er de reelle
> per-kapittel-summene (gate-tallet), ikke påståtte totaler.

### Quiz per del (sum av kapitlene)

| Del | Kapitler (quiz) | Delsum |
|---|---|---|
| 0 | 0.1 (16) | **16** |
| 1 | 1.1 (18) · 1.2 (18) · 1.3 (18) | **54** |
| 2 | 2.1 (18) · 2.2 (24) | **42** |
| 3 | 3.1 (18) · 3.2 (14) | **32** |
| 4 | 4.1 (18) · 4.2 (18) · 4.3 (22) | **58** |
| 5 | 5.1 (18) · 5.2 (16) · 5.3 (18) | **52** |
| 6 | 6.1 (18) · 6.2 (22) | **40** |
| 7 | 7.1 (18) · 7.2 (16) | **34** |
| 8 | 8.1 (18) · 8.2 (18) · 8.3 (14) | **50** |
| 9 | 9.1 (18) · 9.2 (20) | **38** |
| 10 | 10.1 (16) · 10.2 (16) | **32** |
| 11 | 11.1 (18) · 11.2 (14) · 11.3 (14) | **46** |
| 12 | 12.1 (12) · 12.2 (12) · 12.3 (12) | **36** |

**Quiz totalt: 16+54+42+32+58+52+40+34+50+38+32+46+36 = 530** `(≥ 500 ✓)`

> Merk: pitch-tabellen i §1 oppgir **596** som kalibreringssiktemål (byggefasen kan
> øke kvotene mot 596); **gate-tallet er den reelle per-kapittel-summen 530**.
> Byggefasen skal treffe MINST per-kapittel-summen; øker den enkeltkvoter, oppdateres
> tabellen over.

### Flashcards per del (sum av kapitlene)

| Del | Kapitler (fc) | Delsum |
|---|---|---|
| 0 | 0.1 (18) | **18** |
| 1 | 1.1 (20) · 1.2 (22) · 1.3 (20) | **62** |
| 2 | 2.1 (18) · 2.2 (12) | **30** |
| 3 | 3.1 (22) · 3.2 (18) | **40** |
| 4 | 4.1 (22) · 4.2 (20) · 4.3 (14) | **56** |
| 5 | 5.1 (20) · 5.2 (16) · 5.3 (20) | **56** |
| 6 | 6.1 (20) · 6.2 (14) | **34** |
| 7 | 7.1 (22) · 7.2 (18) | **40** |
| 8 | 8.1 (20) · 8.2 (20) · 8.3 (16) | **56** |
| 9 | 9.1 (20) · 9.2 (18) | **38** |
| 10 | 10.1 (20) · 10.2 (16) | **36** |
| 11 | 11.1 (20) · 11.2 (14) · 11.3 (14) | **48** |
| 12 | 12.1 (0) · 12.2 (0) · 12.3 (0) | **0** |

**Flashcards totalt: 18+62+30+40+56+56+34+40+56+38+36+48+0 = 514** `(≥ 500 ✓)`

> Merk: pitch-tabellen i §1 oppgir **604** som kalibreringssiktemål; **gate-tallet er
> den reelle per-kapittel-summen 514**. Øvingseksamenene (12.1–12.3) gir 0 flashcards
> (rene oppgavesett). Byggefasen skal treffe MINST per-kapittel-summen.

### Prøver

- **Temaprøver:** 4 per temadel × 11 temadeler (Del 1–11) = **44 prøver** (≥4 per
  tema ✓). Del 0 og Del 12 har ingen egne temaprøver (Del 12 er øvingseksamenene).
- **Øvingseksamener:** 3 komplette sett (kap. 12.1–12.3).

### Estimert totaltid (sum estimatedMinutes)

0.1(40) · 1.1(55)+1.2(55)+1.3(55) · 2.1(55)+2.2(75) · 3.1(55)+3.2(40) ·
4.1(50)+4.2(55)+4.3(65) · 5.1(55)+5.2(45)+5.3(60) · 6.1(60)+6.2(70) ·
7.1(55)+7.2(55) · 8.1(55)+8.2(55)+8.3(45) · 9.1(55)+9.2(60) · 10.1(45)+10.2(50) ·
11.1(55)+11.2(45)+11.3(45) · 12.1(190)+12.2(190)+12.3(190)
= **2 080 min ≈ 34,7 timer** (31 kapitler; per-kapittel-summen er 2 080).

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–11 → 44 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre (A–K), med løsningsforslag som
holder sensorens form (korte presise svar med premiert *hvorfor*-dybde, oppgitte
antakelser, eksakt output der det kreves) og oppgir poengfordeling. Prøvekapitler
bygges som `oslomet-data2500-<del>-prove` (chapterNumber `<del>.P`) etter
plattformmønsteret, eller som egne exercise-seksjoner i delens siste kapittel.
Prøvekvotene per del står i sluttblokken til hver del (Del 1–11). Prøvene deklareres
som «4 prøver à ~20 min — kan trygt deles over flere kvelder, én prøve per økt».
**Stokket fasit:** flervalg/riktig-galt i prøve-collapsibles har stokkede
fasit-bokstaver (aldri «alle a»); interaktiv quiz stokker selv ved kjøretid.

### Øvingseksamener (3 komplette sett — kap. 12.1–12.3)

| Sett | Profil | Miks |
|---|---|---|
| Øvingseksamen 1 (12.1) | Verktøytung (100 %-gjengangerne) | 26–30 deloppgaver: live-VM (A), Docker (B), prosesser/«forklar kjøringen» (G), cache/matrise (H/I), bash-script (C) |
| Øvingseksamen 2 (12.2) | Script/PowerShell/C/digitalteknikk | 26–30 deloppgaver: tungt bash (C), PowerShell (D), C→assembly (E), synkronisering (H), digitalteknikk 1–3 (F), MMU (I) |
| Øvingseksamen 3 (12.3) | Full bredde (moderne mal) | 26–30 deloppgaver etter §1-malen: digitalteknikk + OS-kortsvar + 8–12 live-VM/Docker + script + «forklar kjøringen» + tallberegning + AI-kritikk (A–K) |

De tre settene dekker til sammen alle sjangre A–K flere ganger og speiler et ekte
3-timers Inspera-sett (poeng per deloppgave, bredde slår dybde). Løsningsforslagene
oppgir antakelser og nevner flere gyldige varianter der sensuren er robust
(sensorkrav 2 og 4). Én **kald bank** (uten hint, kun momentliste) fordeles over de
tre settene (jf. README «Difficulty-spredning + kald bank»).

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — 3-timers digital Inspera-eksamen, **uten hjelpemidler**,
   A–F, 100 %, 26–30 finkornede deloppgaver, **live Linux-VM**; obligatoriske øvinger
   godkjent — fra kap. 0.1.
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (Linux kommandolinje, live-VM, prosesser/«forklar kjøringen»,
   internminne/cache), **kunne** (Docker, bash-script, PowerShell, C→assembly,
   synkronisering, digitalteknikk, MMU, scheduling), **kjenne** (systemkall/modus,
   sikkerhet/hashing, RAID, AI-kritikk, virtualiseringsbegreper).
3. **Sjangerguiden** — sjangrene A–K (med løsningsoppskriftene fra drillkapitlene
   2.2, 4.3, 6.2, 9.2) i kortform, fra kap. 12-innledningen/0.1.
4. **Sensorreglene** — full bredde slår dybde; sett egne forutsetninger ved uklarhet;
   «forklar kort» men *korrekt hvorfor* avgjør toppen; flere gyldige svar godtas;
   **output-presisjon** på praktiske oppgaver (eksakt streng).
5. **Feilkatalogen** — de faste fellene (F1–F13, §5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: `&` sekvensielt (4.1), kjerneutledning
   (4.2/4.3), cache-lokalitet (5.1), VIRT/RES (4.2/5.3), salt-uttrekk (11.1),
   `:TAG` uten nett (3.1), portmapping-retning (3.1), `chmod`-oktal (1.2), `-O`
   konstantfolding (8.1), race undervurdert (8.2), busy-wait-ulempe (8.3), ikke
   oppgi forutsetninger (alle beregninger), AI-kode ikke lest kritisk (11.3).
6. **Kommando- og begrepsark** — samlet puggeark for en hjelpemiddelfri eksamen: de
   mest brukte Linux-kommandoene + `find`-predikater, oktal↔rwx, Docker-kommandoene +
   portmapping, `time`/`perf`/`top`-feltene + kjerneutledning, matrise-/MMU-/RAID-
   formlene, bash-script-byggeklossene, PowerShell↔bash-alias, `/etc/shadow`+salt+
   `mkpasswd`, digitalteknikk-portene + boolske lover.
7. **Studieløp** — anbefalt progresjon (10–12-ukers deltid + 3–5-dagers intensiv):
   fordi bredden *er* eksamensformen, prioritér de fire 100 %-kjernetemaene tidlig
   (Del 1 Linux → Del 2 VM → Del 4 prosesser → Del 5 cache), legg deretter 80 %-
   verktøyene (Del 3 Docker, Del 6 bash, Del 7 PowerShell), så 73 %-ferdighetene
   (Del 8 C/synkronisering, Del 9 digitalteknikk) og OS-teori (Del 10); fyll ut med
   nivå-3 (Del 11). Kjør temaprøvene underveis og de tre øvingssettene de siste
   ukene under tidspress (180 min) — minst ett **faktisk kjørt på en ekte
   Linux-terminal** (bash-ferdighet er motorisk).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `oslomet-data2500` med alle 31
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert** («4.2», ALDRI lineær «14»;
   prosareferanser bruker samme form, «kap. 4.2» som klikkbare markdown-lenker).
2. **Del 0** (kap. 0.1) — etablerer live-VM-formen, sjangrene A–K, tekstnotasjonen,
   sensorkravene, karakternivåene, kildeforbeholdet og Del 0-pakken (Slik leser du /
   Lite tid? / kildenote / sjangerkort / deltidsrute / «øv ved tastaturet» /
   oppslagskort) som resten refererer til.
3. **De 11 temadelene** bygges i rekkefølge Del 1 → Del 11 (innad følger kapitlene
   forkunnskaper). Prioritér innhold/kvalitet på de fire 100 %-kjernetemaene (Del 1
   Linux, Del 2 VM, Del 4 prosesser, Del 5 cache). Kommandoer/script/output vises som
   tekst/kodeblokker (plattformen har ikke kjørbar kode); digitalteknikk som
   sannhetstabell + boolsk uttrykk + ordbeskrivelse.
4. Del 12 (eksamenstreningen) til slutt — 3 komplette 3-timers sett som speiler
   arkivets profil (12.1 verktøytung, 12.2 script/PowerShell/C/digitalteknikk, 12.3
   full moderne mal), fasit i collapsibles med antakelser + selvdiagnose + kald bank.
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   temaprøvene (§6) legges i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i kommandoer/output/kode og i norske sitattegn; `\\` for LaTeX);
  `npm run build` grønn.
- [ ] **Live-VM-sjangeren dekket hands-on**: kommandoer/script/output vist som tekst
  (ikke bare beskrevet); hver praktisk oppgave har **eksakt** forventet svar
  (output-presisjon, sensorkrav 5); flere gyldige varianter nevnt der sensuren er
  robust (sensorkrav 4).
- [ ] **Beregningsprosedyrene med antakelser**: matrisestørrelse, MMU-adresse
  (binær), RAID-XOR, scheduling-tid, antall kjerner fra `time`-% — alle med
  gjennomregnet eksempel som **åpner med antakelsene** (sensorkrav 2).
- [ ] **Kommando- og begrepsliste per delkapittel**: hvert delkapittel med
  kommando-/begreps-/formelapparat har `collapsible` «Kommando- og begrepsliste»
  rett etter Forkunnskaper (per delkapittel, ikke arv).
- [ ] **De faste fellene som warnings**: hvert relevant kapittel har `warning` for
  sin felle (F1–F13), glosset ved første bruk i kapitlet.
- [ ] **Sensor-metareglene i løsningsforslagene**: bredde slår dybde; egne
  forutsetninger ved uklarhet; «forklar kort» + korrekt *hvorfor* i toppsjiktet;
  flere gyldige svar; output-presisjon.
- [ ] **Nybegynner-inngang**: sjangerkodene A–K og feilkodene F1–F13 forklart i
  klarspråk ved FØRSTE bruk (aldri kald i competenceGoals/første tekstboks); Del 0
  har «Slik leser du denne boka»-boks; C rammet inn som god, vanlig karakter.
- [ ] **Læringsløkke**: hvert kapittels `content[]` veksler Teori→Eksempel→Oppgave
  inline; ingen oppgave krever usett kommando/teknikk.
- [ ] **Usikkerhet merket**: VM-tekniske detaljer (sysbox/Guacamole), pensumavhengige
  detaljer og poengfordeling merket `(verifiser)`; ingen kandidatspesifikke
  svarstrenger gjengitt.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
  dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
  6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler
  (2.2/4.3/6.2/9.2) har løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 530 og flashcard-sum ≥ 514** per kvotetabellen (§5) — minst
  per-kapittel-summen; kalibreringssiktemål 596/604 kan bygges mot.
- [ ] **Prøver**: 4 per temadel 1–11 (44 stk) + 3 øvingseksamener (kap. 12.1–12.3)
  som sammen dekker sjangrene A–K flere ganger.
- [ ] **Opphavsrett**: ALLE oppgaver, filnavn, kommandoer i kontekst, script,
  scenarioer og tall nyskrevne — egne verdier/kontekster; kommando-/verktøy-/
  algoritmenavn og beregningsformler er allmenn faglig kunnskap; ingen
  oppgavetekster/fasiter/sensorformuleringer fra reelle sett; ingen UDIR/OsloMet-bilder.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
- [ ] **Institusjon OsloMet**: legges inn i `src/app/bok/trinn/hoyere/institusjoner.ts`
  med visningsnavn «DATA2500 Operativsystemer» (fase 5); del institusjonsblokk med
  Matematikk 1000 / DAFE1000 (OsloMet) hvis den allerede er lagt inn.
- [ ] **Hoyskole-disclaimer**: `oslomet-data2500` er verken jus eller helse →
  standard uavhengighets-deklarasjon holder; sjekk at heuristikken i
  `hoyskole-disclaimer.tsx` ikke feilklassifiserer emnet.
