# Eksamensanalyse: DATA2500 Operativsystemer (OsloMet)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på OsloMets eget
> eksamensarkiv for DATA2500 (tidligere kodenavn **DATS2500 / ITPE2500**),
> med komplette par av oppgavesett + løsningsforslag for både vår- og
> høstsemester (konte) i årene **2017–2025**. Til sammen er 15 lesbare
> oppgavesett og et titalls løsningsforslag gjennomgått; de tre skannede
> settene (høst 2020, vår 2021, demo/peksamen 2022) er utelatt fordi de ikke
> lot seg maskinlese uten tung OCR. **Alt innhold er omskrevet med egne ord** —
> ingen oppgavetekster, løsningsforslag eller sensorkommentarer er gjengitt
> ordrett. Analysen er kvantitativ der arkivet tillater det.
>
> **Viktig rammemerknad:** DATA2500 ved OsloMet er *ikke* et klassisk
> Tanenbaum-/Stallings-drøftefag slik OS-emner ofte er (jf. TDT4186 ved NTNU).
> Det er et **praktisk, verktøynært operativsystem-emne** bygget rundt Linux,
> bash-skripting, PowerShell, Docker, C/Assembly-sporing og digitalteknikk —
> med et mindre lag klassisk OS-teori (prosesser, synkronisering, minne, MMU,
> scheduling, RAID). Eksamen kjøres digitalt i **Inspera** og gir kandidaten
> tilgang til en ekte **Linux-VM (Apache Guacamole → terminal)** som brukes til
> å løse oppgaver «live». Læreboka må derfor trene *ferdighet ved tastaturet*,
> ikke bare begrepsforklaring.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

Individuell, digital skriftlig skoleeksamen på **3 timer**, karakterskala
**A–F**, teller **100 %**. **Ingen hjelpemidler** tillatt (koden er konstant
gjennom hele arkivet 2017–2025). Eksamen leveres i **Inspera**. Emnet er 10
studiepoeng og inngår i bachelor i informasjonsteknologi (Teknologiske fag,
Fakultet for teknologi, kunst og design). Obligatoriske innleveringer/øvinger
underveis må normalt være godkjent for å gå opp; hele karakteren avgjøres på
slutteksamen.

**Poengsystem:** Settet består av mange **korte deloppgaver** — typisk 26–30
nummererte oppgaver. De fleste deloppgavene gir **maks 10 poeng** og bidrar
**3,33 %** hver til en total som maksimalt er **300 poeng**. Noen få tunge
skript- eller analyseoppgaver gir **20, 30, 40, 50 eller 60 poeng** (de store
skript-oppgavene teller ofte «10 % totalt» hver). Dette er en helt annen
struktur enn den vekt-per-hovedoppgave-modellen man ser i tradisjonelle
OS-emner: her er poengene **finkornet og jevnt fordelt**, og bredde over hele
pensum lønner seg mer enn dybde i ett tema.

### Den definerende egenskapen — en levende Linux-VM under eksamen

Fra ca. 2020 og framover får kandidaten under eksamen tilgang til en **ekte
Linux-VM** via en «Apache Guacamole»-fane ved siden av Inspera-fanen. Man
logger inn med et kandidatspesifikt brukernavn/passord og får et bash-prompt i
en `sysbox`-Docker-container (samme type VM som ble brukt i undervisningen, men
uten nett-tilgang). En stor andel oppgaver består i å **faktisk utføre
kommandoer på denne VM-en** og lime svaret (en kort kode/streng) tilbake i
Inspera:

- finn innholdet i en fil, en skjult fil eller en fil med rar (`-x`) tittel
- sett/les filrettigheter med `chmod` (oktal notasjon)
- bli root (`sudo su`), les `/etc/shadow`, hent ut *salt*, regn ut hash med
  `mkpasswd`
- list Docker-images, kjør `hello-world`, kjør en `ubuntu`-container, start en
  nginx-webserver på riktig port og hent koden med `curl`
- `find` med predikat (`-executable -type f -name "run*"`), kjør 108
  programmer i en løkke og fang den ene som gir en streng med et gitt
  delmønster
- kjør et generert bash-script (f.eks. et ChatGPT-generert SSH-oppsett) og
  demonstrer at det virker / avdekk en sikkerhetsfeil i det

Fordi VM-en nullstilles ved reconnect og er **individualisert per kandidat**
(egne passord, filer, container-ID-er — se appendiks i fasitene), er svarene
umulige å dele mellom kandidater. Dette er selve pedagogiske grepet i emnet:
**du må kunne verktøyet, ikke gjenkjenne et fasitsvar.**

### Historisk utvikling av formatet

| Periode | Kode | Signaturtrekk |
|---|---|---|
| 2017–2019 | DATS2500 / ITPE2500 | Grupperte hovedoppgaver 1–6 med deloppgaver a–g. Tunge **skript-oppgaver**: bash `traceroute.sh` via `ping`+`ttl` (60 p), PowerShell-arkiveringsscript (40 p). Mye C/Assembly-sporing, mutex/serialisering, PowerShell-vs-bash. |
| 2020–2021 | DATA2500 | Overgang til **flat nummerering (1..N)** og **live Linux-VM** via Docker/Guacamole. Passord-hash + salt (`/etc/shadow`, `mkpasswd`), sudoers, `taskset`/`perf` (cpu-migrations, context-switches). |
| 2022–2025 | DATA2500 | Modent format: **datamaskinarkitektur** (logiske porter, D-vippe, full adder, boolsk forenkling) fast som oppgave 1–3; tett integrasjon av Linux-VM/Docker; **RAID-paritetsrekonstruksjon**; **MMU-adresseoversetting** (binær→fysisk); scheduling-tidsberegning; og **AI-kritikk** («ChatGPT tar feil — forklar hvorfor»). |

Merk kontinuiteten: enkelte deloppgaver er nesten **ordrett gjenbrukt** over
mange år — cache/RAM-«random access»-MCQ-en og matrise-lokalitetsoppgaven
(`mat[i][j]` vs. `mat[j][i]`) er praktisk talt identiske i 2017 og 2025. Den
som pugger arkivet vinker gjennom faste poeng.

### Oppgavesjangre i settet (typisk fordeling)

Et moderne sett (2023–2025) inneholder grovt:
- **3–5 flervalgs-/kortsvar** i digitalteknikk (porter, kretsforenkling,
  D-vippe, full adder)
- **4–6 begreps-kortsvar** i OS-teori (PID, systemkall, kritisk avsnitt,
  busy-waiting, `lock`-instruksjonen, RAM, cache, MMU)
- **8–12 praktiske Linux-VM-/Docker-oppgaver** (fyll-inn-koden)
- **2–4 bash-/PowerShell-skript** (én liten oneliner + én stor)
- **2–4 «forklar kjøringen»-oppgaver** (`time`, `perf`, `top` VIRT/RES,
  cpu-migrations)
- **1–2 tallberegninger** (MMU-adresse, matrisestørrelse i MB, RAID-paritet,
  scheduling-tid, antall CPU-kjerner ut fra `time`-prosenter)

---

## 2. Temafrekvens

Basert på de 15 lesbare settene (2017–2025). Cellen angir i hvor mange sett
temaet forekommer i minst én oppgave. Fordi hvert sett har mange små
deloppgaver, treffer kjernetemaene nesten hvert sett; **gjenganger-scoren måler
bredde/sikkerhet, ikke poengvekt**.

| Tema | Sett (av 15) | Score | Merknad |
|---|---|---|---|
| **Linux kommandolinje & filsystem** (`ls/cd/chmod/find/cat`, rettigheter, skjulte filer) | 15 | **100 %** | Ryggraden. Testes både som MCQ og som live VM-oppgave |
| **Praktisk Linux-VM-oppgave** (finn kode i fil / kjør program / hent streng) | 13 | **~87 %** | Fast fra 2020; selve eksamensmekanikken |
| **Docker** (`images/run/exec/ps`, portmapping, container-ID, nginx/curl) | 12 | **80 %** | Fast fra 2020; høyfrekvent og lettvint når man kan verktøyet |
| **Prosesser** (PID, `fork`, bakgrunnsjobb `&`, `time`-tolkning, multitasking) | 15 | **100 %** | Både begrep og «forklar kjøringen»-analyse |
| **Internminne / cache / RAM** (random access, cache-lokalitet, matrisegjennomløp) | 14 | **~93 %** | Nesten identiske oppgaver gjenbrukes år etter år |
| **C og Assembly-sporing** (`gcc -S`/`-O`, `movl/addl`, registre, optimalisering) | 11 | **73 %** | C-instruksjon → assembly; hvorfor `-O` gir kortere kode |
| **Datamaskinarkitektur / digitalteknikk** (porter, sannhetstabell, D-vippe, full adder, boolsk forenkling, NMOS/PMOS) | 11 | **73 %** | Fast oppgave 1–3 fra 2019 og framover |
| **Synkronisering & serialisering** (kritisk avsnitt, mutex, `lock`, busy-waiting, race condition, Peterson) | 11 | **73 %** | Kombinerer begrep + kode (`felles = felles ± tall`) |
| **PowerShell** (Cmdlets vs. Linux-alias, objekt-pipe, oneliner, arkiveringsscript) | 12 | **80 %** | Bevisst kontrast bash vs. PowerShell |
| **Bash-scripting** (løkker, betingelser, `find` i script, generering av mapper/filer) | 12 | **80 %** | Alltid minst ett tungt script (20–60 p) |
| **MMU & virtuelt minne** (adresseoversetting, page fault, VIRT/RES i `top`, `/proc/pid/maps`, heap) | 9 | **60 %** | Både begrep og **binær adresseberegning** |
| **CPU/kjerner & scheduling** (antall cores ut fra `time`-%, `taskset`, `perf`, Round-Robin-tid, cpu-migrations) | 9 | **60 %** | Tallberegning + tolkning; ofte kombinert med prosesser |
| **Systemkall & modusbit** (user vs. kernel mode, trap vs. interrupt, `strace`-tankegang) | 8 | **53 %** | «Hva er hensikten med et systemkall?» går ofte igjen |
| **Passord, hashing & Linux-sikkerhet** (`/etc/shadow`, salt, `mkpasswd`, sudoers, SSH-nøkler, chmod-feil) | 6 | **40 %** | Fra 2021; ofte som praktisk crack-/hash-oppgave |
| **RAID** (nivåer 0/1/3/5, paritetsrekonstruksjon) | 3 | **20 %** | Regnes ut (gjenopprett tapt disk fra paritet) |
| **Virtualisering & containere** (VM vs. container, hypervisor, sysbox) | 4 | **27 %** | Ofte flettet inn i Docker-konteksten |
| **AI-kritikk** (ChatGPT-generert kode/svar med feil — finn og forklar) | 3 | **20 %** | Nytt, økende (2024–2025); tester dyp forståelse |
| **Lagringsmedier / disk** (HDD/SSD, jiffie, tidsstempel) | 3 | **20 %** | Lavfrekvent kortsvar |

**Viktigste funn:**

1. **Verktøyferdighet er selve eksamensformen.** Linux-kommandolinje (100 %),
   praktisk VM-oppgave (~87 %), Docker (80 %), bash (80 %) og PowerShell (80 %)
   dominerer. En kandidat som «kan OS-teorien» men ikke behersker terminalen
   vil stryke store deler av settet. Læreboka **må** derfor være hands-on:
   kjørbare eksempler, ikke bare forklaringer.

2. **Fire absolutte 100 %-gjengangere:** Linux kommandolinje, prosesser,
   internminne/cache og (praktisk talt) den live VM-mekanikken. Disse *kommer
   garantert*.

3. **«Forklar kjøringen»-sjangeren er undervurdert.** Svært mange poeng henter
   man ved å tolke output fra `time` (Real/User/System/%), `perf`
   (cpu-migrations, context-switches), `top` (VIRT/RES) og bakgrunnsjobber
   (`&`). Dette krever presis mental modell av scheduler, CPU-kjerner og
   minnehåndtering — ikke pugg.

4. **Digitalteknikk er stabilt inne** (73 %, fast oppgave 1–3 siden 2019):
   logiske porter fra sannhetstabell, kretsforenkling med boolsk algebra,
   D-vippe/full adder-konstruksjon, NMOS/PMOS. Dette er OsloMets bro mellom
   maskinvare og OS og overlapper tett med **IN2060/TDT4160** (se § 8).

5. **Tallberegninger finnes, men er få og karakteristiske:** MMU-adresse
   (binær virtuell → fysisk), matrisestørrelse i MB, RAID-paritet, antall CPU
   ut fra `time`-prosenter, Round-Robin-fullføringstid. Ingen tunge
   sideerstatnings-traces eller Bankier-algoritmer slik man ser hos NTNU/UiO —
   OS-teorien her er **lettere og mer maskinnær**.

6. **AI-kritikk er en ny, voksende sjanger** (2024–2025): kandidaten får
   ChatGPT-generert kode eller svar som inneholder én feil (usikker
   password-linje, feil scheduling-resonnement) og skal finne, forklare og
   rette feilen. Dette premierer *dyp* forståelse og kildekritikk.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen. «Krav» oppsummerer løsningsforslagets
foretrukne metode og presisjonsnivå.

### A. Live Linux-VM «fyll-inn-koden»
- **Krav:** Utfør en konkret oppgave på VM-en og lever en kort streng/kode.
  Ferdigheter som testes: `find`/`cat` for å lokalisere og lese filer (også
  skjulte, også med rare navn som `-x` → `cat ./-x`); `chmod` med oktal kode
  for å gjøre en `Permission denied`-fil lesbar; `tar xfz`/`gunzip` for å
  pakke ut; `env`/`set`/`.bashrc`/`/etc/environment` for å finne en
  miljøvariabel; løkker (`for f in $(find ...); do ...; done`) for å kjøre
  mange programmer og filtrere output.
- **Frekvens:** ~13 sett. Den mest poenggivende sjangeren totalt.

### B. Docker-oppgave
- **Krav:** `service docker start`; `docker images`/`docker image ls` for å
  liste og hente IMAGE ID; `docker run hello-world`; `docker run -it ubuntu
  bash` + les `/etc/os-release`; `docker run -d -p VERT:CONTAINER image` for
  riktig portmapping + `curl localhost`; `docker ps`/`docker exec -it`.
  Vanlig felle: glemme `:TAG` når VM-en ikke har nett (kan bare kjøre
  ferdignedlastede images).
- **Frekvens:** ~12 sett.

### C. Bash-script (liten oneliner + ett tungt script)
- **Krav:** Løkker, `if [ ! -d $dir ]; then mkdir ... fi`, `$(kommando)`,
  `RANDOM % n`, `chmod` i script, `find` med predikat inne i script.
  Klassiske store oppgaver: `traceroute.sh` bygget av `ping -c1 -t$ttl`
  (60 p), script som lager mappe-/filstruktur (`ex/ex$i`), script som kjører
  108 programmer og fanger den som gir et delmønster.
- **Krav (presisjon):** Scriptet skal produsere *nøyaktig* det viste outputet.
  Sensor godtar flere gyldige varianter, men output-formen må stemme.
- **Frekvens:** ~12 sett; alltid minst én tung (20–60 p).

### D. PowerShell (kontrast til bash)
- **Krav:** Kjenne at PowerShell sender **objekter** (med egenskaper/metoder)
  gjennom pipen, ikke ren tekst som bash. Mappe Cmdlets ↔ Linux-alias
  (`Get-ChildItem`≈`ls`, `Get-Process`≈`ps`, `Copy-Item`≈`cp`, …). Skrive
  onelinere med `Where-Object`/`Sort-Object`/`Select-Object` og `$_`.
  Tungt script: arkivér alle `.pdf` under `C:\` inn i `C:\pdf\Y{år}\M{måned}`
  ved hjelp av `.CreationTime.Year/.Month`, `Test-Path`, `mkdir`.
- **Frekvens:** ~12 sett.

### E. C → Assembly-sporing
- **Krav:** Kjør `gcc -S add.c`, les `movl $13,-8(%rbp)` / `addl %eax,...`,
  forklar hva instruksjonene gjør og hvor resultatet havner. Forstå at én
  C-instruksjon kan bli flere assembly-instruksjoner (og at én
  assembly-instruksjon ≈ én maskininstruksjon). Forklare hvorfor `gcc -O`
  **konstantfolder** `felles+tall` til én `movl $42,%edx` (kompilatoren regner
  ut resultatet på forhånd).
- **Frekvens:** ~11 sett. Ofte koblet til synkroniserings-oppgaven (samme
  `felles = felles + tall`-linje viser hvorfor en race oppstår).

### F. Digitalteknikk / datamaskinarkitektur
- **Krav:** Gjenkjenne logisk port fra sannhetstabell (OR/AND/NAND/XOR/NOR),
  finne det boolske uttrykket for en krets, **forenkle** med boolsk algebra,
  konstruere D-vippe/D-lås, full adder, forklare NMOS/PMOS. Ren fakta- og
  regneferdighet — lettvinte, forutsigbare poeng.
- **Frekvens:** ~11 sett (fast oppgave 1–3 fra 2019).

### G. «Forklar kjøringen» (time / perf / top)
- **Krav:** Tolke output presist. `time`: Real (veggklokke), User (bruker-mode),
  System (kjerne-mode), % (andel av én CPU). Bakgrunnsjobb `&` → kjører
  parallelt; N sekvensielle kjøringer tar N×tiden, N parallelle på nok kjerner
  tar ~1×tiden. Utlede **antall CPU-kjerner** ut fra at %-en synker mot
  100/(prosesser/kjerner) når man overbelaster (f.eks. 8 prosesser à 50 % ⇒
  4 kjerner). `perf`: cpu-migrations og context-switches. `top`: VIRT (alt
  virtuelt minne prosessen kan bruke) vs. RES (delen som faktisk ligger i RAM).
- **Frekvens:** ~9 sett; høy poenguttelling.

### H. Begreps-kortsvar (OS-teori)
- **Krav:** Kort, presist. Gjengangere: **PID** (unik prosess-ID, brukes til
  `kill`/signaler); **systemkall** (lar en user-mode-prosess be OS-kjernen
  utføre privilegerte operasjoner i kernel mode); **kritisk avsnitt** (kode som
  må fullføres uten at andre prosesser bruker samme felles ressurs);
  **busy-waiting** (venting i en while-løkke til en hendelse inntreffer);
  **x86 `lock`** (låser databussen/minneadressen så en operasjon blir atomær —
  presist: hindrer andre CPU-er i å aksessere adressen under instruksjonen);
  **RAM** (like rask aksess uansett adresse); **cache** (raskere/nærmere CPU
  ⇒ ulik hentetid); **trap vs. interrupt** (trap = forårsaket av prosessen
  selv, deterministisk sted; interrupt = ytre hendelse, uforutsigbart
  tidspunkt).
- **Frekvens:** hver eneste sett, flere per sett.

### I. Tallberegning
- **Krav:** **MMU-adresse:** del virtuell adresse i sidenummer + offset, slå
  opp i sidetabell, sett sammen fysisk ramme + offset (kan gi *page fault*).
  **Matrisestørrelse:** `5000×5000×4 byte = 100 MB` (SI-Mega = million).
  **RAID-paritet:** gjenopprett tapt disk ved XOR av de øvrige + paritetsdisk
  rad for rad. **Scheduling-tid:** totalt CPU-behov / antall kjerner (når
  #kjerner ≤ #prosesser), ellers begrenset av antall prosesser.
- **Frekvens:** ~1–3 per sett, karakteristiske og forutsigbare.

### J. Linux-sikkerhet / hashing
- **Krav:** Bli root (`sudo su`), lese `/etc/shadow`, plukke ut **salt**
  (strengen mellom `$6$` og neste `$`), regne SHA-512-hash med
  `mkpasswd -m sha-512 -s -S <salt>` og verifisere mot lagret hash;
  «crack med ordbok»; forklare hvorfor `%sudo ALL=(ALL:ALL) ALL` gir
  root-tilgang og `NOPASSWD:ALL` fjerner passordkravet; SSH-nøkkeloppsett
  (`authorized_keys`, `chmod 600/700`) og finne sikkerhetsfeil i det.
- **Frekvens:** ~6 sett (fra 2021).

### K. AI-kritikk
- **Krav:** Les ChatGPT-generert kode/svar, finn den ene feilen, forklar
  *hvorfor* den er feil og hvordan rette den. Dokumenterte tilfeller:
  scheduling-svaret der ChatGPT feilaktig deler prosessene i to sekvensielle
  grupper (riktig: alle kjører samtidig, del totalt CPU-behov på kjerner); et
  SSH-script som setter `echo "$USER:password" | chpasswd` (svak, delt passord
  ⇒ sikkerhetshull; linjen må slettes) og som legger brukerens egen nøkkel i
  egen `authorized_keys` (overflødig).
- **Frekvens:** ~3 sett (voksende).

---

## 4. Sensorens krav

### Faste metaregler (gjentas i settene)
1. **«Les nøye gjennom oppgavene og besvar alle spørsmålene.»** Fordi settet
   har mange små, likevektede deloppgaver, er full dekning viktigere enn dybde
   i én. Ikke hopp over de billige digitalteknikk-/kortsvarpoengene.
2. **«Sett gjerne egne forutsetninger dersom oppgaveteksten er uklar; beskriv
   forutsetningene og løs oppgaven ut fra dem.»** Eksplisitte, konsistente
   antakelser gir full uttelling selv når oppgaven er underbestemt.
3. **«Forklar kort.»** Kortsvarene skal være presise og konsise. Ordrikdom
   belønnes ikke, men *korrekt* forklaring av *hvorfor* (ikke bare *hva*)
   avgjør toppsjiktet.
4. **Flere gyldige svar godtas.** Løsningsforslagene viser gjennomgående flere
   akseptable framgangsmåter (f.eks. `docker image ls` vs. `docker images`;
   `find`-basert vs. manuell leting; ulike script-varianter). Sensuren er
   robust for konsistent, korrekt resonnement.
5. **Output-presisjon på praktiske oppgaver.** Der svaret er en konkret kode/
   streng fra VM-en, må den være **eksakt** (riktig antall tegn, ikke
   etterfølgende mellomrom). Script skal produsere output på nøyaktig ønsket
   form.

### Hva som skiller karakternivåene
- **Bestått (E):** Behersker grunnleggende Linux-kommandoer og filrettigheter;
  klarer de fleste live-VM-oppgavene; gjenkjenner logiske porter; kan de faste
  begrepene (PID, systemkall, kritisk avsnitt).
- **Midtsjikt (C/D):** Skriver fungerende bash-/PowerShell-onelinere; tolker
  `time`/`perf`/`top`-output riktig; kan Docker-oppgavene inkl. portmapping;
  gjør MMU-/matrise-/RAID-beregning riktig; forklarer C→assembly.
- **Toppsjikt (A/B):** Skriver de tunge scriptene feilfritt og med riktig
  output; utleder antall CPU-kjerner og fullføringstider korrekt med
  begrunnelse; forklarer *hvorfor* (hvorfor `-O` konstantfolder, hvorfor
  cache-lokalitet gjør `mat[i][j]` raskere enn `mat[j][i]`, hvorfor delt
  password er et sikkerhetshull); avdekker og retter feilen i AI-generert kode.

---

## 5. Typiske feil (eksplisitt eller implisitt i løsningsforslagene)

1. **Tro at bakgrunnsjobber (`&`) kjører sekvensielt.** N kjøringer med `&`
   starter parallelt; totaltiden bestemmes av antall kjerner, ikke av N×tid.
   (Selve poenget i ChatGPT-kritikk-oppgaven.)
2. **Feil utledning av antall CPU-kjerner.** Man må lese %-tallet fra `time`:
   8 prosesser à ~50 % ⇒ 4 kjerner; 6 prosesser à ~67 % ⇒ 4 kjerner. Å gjette
   ut fra antall prosesser alene er feil.
3. **Glemme cache-lokalitet.** `mat[i][j]` skriver sammenhengende i minnet
   (cache-treff), `mat[j][i]` hopper 20000 byte per element (nesten bare
   cache-bom) ⇒ ~3× tregere. Paging er *ikke* forklaringen (hele arrayet får
   plass i RAM).
4. **Blande VIRT og RES.** VIRT = alt virtuelt minne prosessen *kan* bruke;
   RES = det som faktisk ligger i RAM *nå*. VIRT endres når minne deklareres/
   `malloc`-es; RES endres først når minnet **tas i bruk**.
5. **Feil salt-uttrekk fra `/etc/shadow`.** Saltet er strengen mellom `$6$` og
   neste `$` — ikke hele hashen. Feil salt ⇒ feil `mkpasswd`-resultat.
6. **Glemme `:TAG` i `docker run` uten nett.** VM-en har ikke nett; bare
   ferdignedlastede images/tags kan kjøres, ellers «network is unreachable».
7. **Feil portmapping-retning.** `-p VERT:CONTAINER` — for nginx på 12345 må
   man mappe vertsporten til containerens 12345, ikke omvendt.
8. **`chmod`-oktal feil.** F.eks. `-rwxr-x---` ⇒ `750`, ikke `740`/`755`.
   Å lese/skrive rwx-triplett til oktal er en fast ferdighet.
9. **`gcc -O`-optimalisering misforstått.** `-O` konstantfolder `13+29` til
   `42` allerede ved kompilering ⇒ fire instruksjoner blir til én. Å tro at
   koden «gjør mindre» er upresist; den regner ut resultatet på forhånd.
10. **Race condition undervurdert.** `felles = felles + tall` er ikke atomær
    (les–regn–skriv i separate assembly-steg); to tråder kan overskrive
    hverandres oppdatering. Løses med mutex (`Get_Mutex`/`Release_Mutex`).
11. **Busy-wait-mutex sin ulempe oversett.** Den enkle `while(turn!=tid){}`-
    løsningen (turn-basert) sløser CPU (busy-waiting) og tvinger streng
    veksling — svakere enn Peterson/semafor.
12. **Ikke oppgi forutsetninger** ved underbestemte oppgaver — gir tap selv
    når resonnementet ellers er riktig.
13. **AI-generert kode ikke lest kritisk.** Å kjøre ChatGPT-kode uten å se
    sikkerhetshullet (delt passord, overflødig/farlig konfig) er nettopp det
    oppgaven straffer.

---

## 6. Begreps-, notasjons- og beregningsapparat

Læreboka bør bruke praktisk Linux-/OS-terminologi og de mekanismene oppgavene
faktisk krever — verktøyferdighet forankret i teori.

### Linux / bash
- Navigasjon og filer: `pwd cd ls chmod chown find cat touch mkdir cp mv rm ln`;
  skjulte filer (`.`), rare filnavn (`./-x`); `tar xfz`, `gunzip`.
- Rettigheter: rwx-triplett ↔ oktal (`chmod 750`), eier/gruppe/andre.
- Prosesser: `ps`, jobber i bakgrunnen (`&`), `time` (Real/User/System/%),
  `taskset -c`, `perf` (cpu-migrations, context-switches), `top` (VIRT/RES).
- Miljø: `env`, `set`, `.bashrc`, `/etc/environment`.
- Bruker/sikkerhet: `sudo su`, `/etc/shadow`, `/etc/sudoers`, `groups`,
  salt + `mkpasswd -m sha-512 -s -S`, SSH-nøkler (`ssh-keygen`,
  `authorized_keys`, `chmod 600/700`).
- Skripting: `for/while/if`, `[ -d ]`/`[ -x ]`/`[ -f ]`, `$( )`, `RANDOM % n`,
  `>`/`>>`, pipe `|`, `grep/cut/sort/shuf`.

### PowerShell
- Objekt-pipe (egenskaper/metoder) vs. bash tekst-pipe.
- Cmdlets ↔ alias: `Get-ChildItem`(ls), `Get-Process`(ps), `Copy-Item`(cp),
  `Move-Item`(mv), `Stop-Process`(kill), `Get-Content`(cat),
  `Write-Output`(echo), `Get-Location`(pwd).
- `Where-Object {$_...}`, `Sort-Object`, `Select-Object -first`,
  `.CreationTime.Year/.Month`, `Test-Path`, `mkdir`.

### Docker / virtualisering
- `docker images`/`image ls`, `run [-it|-d] [-p V:C]`, `exec -it`, `ps`;
  IMAGE ID, TAG, portmapping; container vs. VM; sysbox-containere; hypervisor.

### C / Assembly / datamaskinarkitektur
- `gcc [-S] [-O]`, `movl/addl`, registre (`%rbp`, `%eax`, `%edx`), stakk-offset;
  konstantfolding; C-instruksjon → flere assembly-instruksjoner.
- Logiske porter (AND/OR/NOT/NAND/NOR/XOR), sannhetstabell, boolsk forenkling,
  D-vippe/D-lås, full adder, NMOS/PMOS.

### OS-teori og beregninger
- Prosess/PID/fork, user vs. kernel mode, systemkall, trap vs. interrupt,
  modusbit, context switch, multitasking (Round-Robin + timer-interrupt).
- Synkronisering: kritisk avsnitt, race condition, mutex/lock, busy-waiting,
  x86 `lock`, Peterson-algoritmen (som sammenligningsgrunnlag).
- Minne: RAM (uniform aksess), cache + lokalitet, MMU (virtuell→fysisk
  adresseoversetting, sidetabell, offset, page fault), virtuelt minne
  (VIRT/RES, heap, `/proc/pid/maps`).
- **Beregninger:** MMU-adresse (binær); matrisestørrelse (`rader×kol×4 byte`,
  SI-Mega); RAID-paritet (XOR-rekonstruksjon, nivå 0/1/3/5); scheduling-tid
  (totalt CPU-behov / min(#kjerner, #prosesser)); antall kjerner ut fra
  `time`-prosenter.

---

## 7. Prognose og prioritering

> **Forbehold:** Arkivet er ferskt og sammenhengende (2017–2025, både vår og
> konte). Emnet er **aktivt** (emneplan for høst 2025/2026), og faglærertilfanget
> har vært stabilt — samme praktiske profil gjennom hele perioden. Dette gir
> høy prognosesikkerhet. Hovedrisikoen er at *andelen* AI-kritikk og
> live-VM-oppgaver fortsetter å øke på bekostning av rene MCQ-er.

### Nivå 1 — må beherskes perfekt (100 %- eller nær-100 %-gjengangere)
1. **Linux kommandolinje & filsystem** — `find/cat/chmod/ls/cd`, rettigheter
   (oktal), skjulte/rare filer. Ryggraden i hvert sett.
2. **Praktisk Linux-VM-arbeid** — lokalisere og lese filer, kjøre programmer i
   løkke og filtrere output, pakke ut arkiver, lese miljøvariabler.
3. **Docker** — liste/kjøre images, portmapping + `curl`, `exec` inn i
   container, container-ID. Lettvinte poeng når verktøyet sitter.
4. **Prosesser & «forklar kjøringen»** — PID, `&`, `time`-tolkning, utlede
   antall kjerner og fullføringstider.
5. **Internminne/cache** — random access, cache-lokalitet (matrisegjennomløp).
   Nesten identiske oppgaver gjenbrukes; garanterte poeng.

### Nivå 2 — må kunne (avgjør C→A)
6. **Bash-scripting** — løkker/betingelser/`find` i script; ett tungt script
   som produserer eksakt output.
7. **PowerShell** — objekt-pipe, Cmdlet↔alias, oneliner + arkiveringsscript.
8. **C → Assembly-sporing** — `gcc -S/-O`, registre, konstantfolding.
9. **Synkronisering** — kritisk avsnitt, race condition, mutex, busy-waiting,
   `lock`.
10. **Digitalteknikk** — porter, boolsk forenkling, D-vippe, full adder.
11. **MMU & virtuelt minne** — adresseoversetting (binær), VIRT/RES, heap.
12. **Systemkall & modusbit** — user/kernel mode, trap vs. interrupt.

### Nivå 3 — bør kjenne (lavfrekvent, men lettvint når det kommer)
13. **Passord/hashing & Linux-sikkerhet** — salt, `mkpasswd`, sudoers, SSH.
14. **RAID** — paritetsrekonstruksjon (nivå 0/1/3/5).
15. **AI-kritikk** — finn og forklar feilen i ChatGPT-generert kode/svar.
16. **Scheduling-beregning** — CPU-behov/kjerner, Round-Robin, `taskset/perf`.
17. **Lagringsmedier / virtualiseringsbegreper** — HDD/SSD, container vs. VM.

**Prognose for neste ordinære/konte-eksamen:** 26–30 finkornede deloppgaver i
Inspera, 3 timer, ingen hjelpemidler, med **live Linux-VM**. Forvent garantert:
2–4 digitalteknikk-oppgaver (oppgave 1–3); 4–6 OS-begreps-kortsvar (PID,
systemkall, kritisk avsnitt, RAM/cache, MMU); 8–12 praktiske Linux-VM-/Docker-
oppgaver; minst ett tungt bash-script og én PowerShell-oppgave; 1–2 «forklar
`time`/`perf`/`top`»-oppgaver; 1–3 tallberegninger (MMU, matrise, RAID eller
scheduling). Sannsynlig: C→assembly-sporing; synkronisering/`lock`; en
sikkerhets-/hashing-oppgave; og — økende — en AI-kritikk-oppgave. Den som kan
**verktøyene ved tastaturet OG teorien bak dem** (hvorfor, ikke bare hva) er
robust mot hele bredden.

---

## 8. Kildeliste og krysslenking

Alle filer ligger i `~/Desktop/Eksamner/OsloMet/DATA2500/`.

**Oppgavesett + løsningsforslag gjennomgått (komplette par, 2017–2025):**
`eksamenH2017/fasitH2017`, `eksamenV2018/fasitV2018`, `eksamenH2018/fasitH2018`,
`eksamenV2019/fasitV2019`, `eksamenH2019/fasitH2019`, `eksamenV2020/fasitV2020`,
`eksamenH2021/fasitH2021`, `eksamenV2022/fasitV2022`, `eksamenH2022/fasitH2022`,
`eksamenV2023/fasitV2023`, `eksamenH2023/fasitH2023`, `eksamenV2024/fasitV2024`,
`eksamenH2024/fasitH2024`, `eksamenV2025/fasitV2025`, `eksamenH2025/fasitH2025`.
`allInkFasit.pdf` er en samlefasit brukt til kryssjekk. Løsningsforslagene for
2021, 2024 og 2025 er lest i sin helhet (inkl. per-kandidat-appendiks);
øvrige er brukt til bekreftelse av format, temaer og sensorpraksis.

**Utelatt (rene skann uten maskinlesbar tekst):** `eksamenH2020.pdf`,
`eksamenV2021.pdf`, `peksamen2022.pdf` (demo). Innholdet er dekket indirekte via
tilstøtende års sett.

**Emnefakta:** DATA2500 «Operativsystemer», 10 sp, OsloMet, Teknologiske fag.
Ekvivalent med **DATS2500 / ITPE2500** (gammel kode i 2017-settene). 3 timers
individuell digital eksamen i Inspera, ingen hjelpemidler, karakter A–F, aktivt
emne (emneplan høst 2025/2026).

**Krysslenking til beslektede analyser i porteføljen:**
- **IN2060 (Digitalteknikk og datamaskinarkitektur, UiO)** — sterk overlapp med
  digitalteknikk-delen (logiske porter, sannhetstabeller, D-vipper, full adder,
  boolsk forenkling). Gjenbruk begreps- og figurapparat derfra for oppgave 1–3.
  Se `docs/hoyskole-boker/in2060/EKSAMENSANALYSE.md`.
- **TDT4160 (Datamaskiner og digitalteknikk, NTNU)** — overlappende
  maskinvare-/assembly-/minnehierarki-stoff (cache, MMU, registre).
  Se `docs/hoyskole-boker/tdt4160/EKSAMENSANALYSE.md`.
- **TDT4186 (Operativsystemer, NTNU)** — samme OS-kjernebegreper (prosesser,
  tråder, scheduling, synkronisering, minne, virtuelt minne), men NTNU vekter
  klassisk teori/beregning (sideerstatning, Bankier) mye tyngre, mens DATA2500
  vekter **praktisk Linux/Docker/skripting**. Komplementære; DATA2500-boka kan
  låne teoriforklaringene og legge til den praktiske verktøydimensjonen.
  Se `docs/hoyskole-boker/tdt4186/EKSAMENSANALYSE.md`.

**Merknader om kildene:**
- **Stabil, praktisk profil.** Hele arkivet (2017–2025) deler samme
  verktøynære profil; ingen radikal faglærer-/pensumsplittelse slik man ser i
  enkelte NTNU-OS-arkiv. Prognosesikkerheten er derfor høy.
- **Individualiserte eksamener.** Fra 2020 er svarene kandidatspesifikke
  (egne passord/filer/container-ID-er, jf. appendiks i fasitene). Konkrete
  «svarstrenger» er derfor uten verdi å pugge; ferdigheten er poenget.
- **Opphavsrett.** Alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett.
  Kommando-, verktøy- og algoritmenavn samt standard beregningsformler er
  allmenn faglig kunnskap.
