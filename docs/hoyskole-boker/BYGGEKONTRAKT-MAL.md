# Byggekontrakt-mal (generisk) — instansieres per fag i fase 3

Når et fag skal bygges: kopier denne til `<emne>/BYGGEKONTRAKT.md`, erstatt
`<emne>`/`<EMNEKODE>` og fyll inn fagspesifikk stil-seksjon fra SKJELETTETS
identitetsseksjon (notasjonsregler, forbudt-termer, arketypesærtrekk).
Referanse-instansieringer: `econ1310/BYGGEKONTRAKT.md` (regnefag),
`jus1111/BYGGEKONTRAKT.md` (jus).

## Underoverskrifter — ALDRI byggespråk (nytt 1. august 2026)

Læringsløkke er **byggeplanens** ord for hvordan et kapittel settes sammen.
Det er ikke et ord leseren skal se. Likevel endte 3 048 overskrifter i 780
filer som «## Løkke 3 — Varians og standardavvik», og en student som blar
gjennom boka møtte en nummerert struktur ingen har forklart henne.

**Overskriften skal si hva avsnittet handler om, og ingenting annet:**

```
✗ ## Løkke 1 — Reformbølgen og hva den faktisk besto av (~14 min)
✓ ## Reformbølgen og hva den faktisk besto av (~14 min)

✗ ## Løkke 3: Eulers teorem
✓ ## Eulers teorem
```

Tidsanslaget `(~14 min)` skal stå — det er nyttig for leseren.

Samme regel gjelder alt annet internt stillas: **Bolk N**, **Blokk N**,
**Runde N**, **Sekvens N**, **Modul N**, **Iterasjon N**. Trenger du å vise
til et tidligere avsnitt, vis til det ved **navn**, ikke ved nummer — «da vi
så på arbeid–energi-setningen», ikke «i Løkke 2». Nummeret forsvinner i det
øyeblikket noen setter inn et avsnitt til.

⚠ **Fagord som ligner byggespråk skal stå.** I programmeringsfagene er
«løkke» et sentralt fagbegrep: `for-løkke`, `while-løkke`, «løkka kjører
til betingelsen er usann». `in1900` alene har 770 slike. Rydding i
overskrifter må derfor forankres på syntaks — `## Løkke <tall> — ` og
`## Løkke <tall>: ` — aldri på ordet alene. Jf. minnet «Forankret
erstatning»: søk-og-erstatt over kapitteldata har ødelagt innhold tre
ganger.

### Fire former forankringen må dekke — alle fire har sluppet gjennom

Ryddingen 1.–2. august gikk i fire runder fordi hver runde bare fant sin
egen form. Sjekk **alle fire** før du erklærer en bok ren:

| form | eksempel | hvorfor den slapp unna |
|---|---|---|
| tall i overskrift | `## Løkke 3 — Varians` | — (fanget først) |
| **liten forbokstav i prosa** | «Repeter løkke 2 og 3» | søket krevde stor L; 820 treff i 297 filer |
| **bokstav i stedet for tall** | `## Løkke B — Subsumsjonen` | mønsteret krevde siffer; 109 i jus1111 + econ1310 |
| **tabellkolonne uten tall** | `\| Løkke \| Innhold \| Tid \|` | ordet står alene, uten nummer etter |

Den siste er farligst i programmeringsbøkene: `in2010` hadde
kapitteloversikter med kolonnehodet `| Løkke |` rett over prosa om ytre
løkker i DFS — byggespråk og fagord på samme skjerm.

Kjør denne før ferdigmelding, og forvent **null** treff utenfor ekte
fagbruk:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/
```

**Overskrift og kryssreferanse må ryddes i SAMME operasjon.** Stripper du
overskriftene først, blir «se løkke D» hengende og peker i tomme lufta —
og en referanse som peker på ingenting er verre enn byggespråket den
erstattet. Bygg et oppslagskart bokstav/tall → navn *før* du rører
overskriftene.

⚠ Ryddingen avdekket to referanser som pekte feil **allerede før** vi rørte
dem: `jus1111-1-3` viste til «løkke B» i et kapittel som hopper fra A til
C, og `fil1001-2-1` viste til et avsnitt om det Machianske svaret der
innholdet gjaldt Leibniz. Nummererte kryssreferanser råtner stille — det
er selve grunnen til at de skal være navn.

## Ja/nei-lister i prøvekapitler kan feilmåles som flervalg

⚠ **Produkteierregelen står ved lag:** deloppgaver merkes **a), b), c)** med
liten bokstav, på egen linje og i fet — se README «Listemerking med små
bokstaver» og «Deloppgaver på egen linje». Den regelen er ufravikelig, og
ingenting her overstyrer den.

Men vær oppmerksom på ett tilfelle: `sjekk-statiskflervalg.py` kjenner igjen et
flervalg på at det står `a)` `b)` `c)` `d)` under et nummerert spørsmål. En
**ja/nei-liste** merket a)–e) i et prøvekapittel kan derfor bli lest som et
flervalg — og hvis prøven har en kompakt fasitliste («1b · 2d · 3a») som
tilfeldigvis parer, måles «ja» som fasit i alle.

**Der en slik liste er et sett med selvstendige påstander og ikke deloppgaver
av én oppgave, er romertall (i), (ii), (iii) et gyldig valg** — det er ikke
listemerking av deloppgaver, men nummerering av påstander. Vurder det når du
skriver ja/nei-drill.

Hvis du beholder a)–e): sjekk tallet porten gir mot en manuell telling før du
«retter» noe. En agent oppdaget dette ved å merke at porten *ville* feilmåle
listene den skulle skrive, og sa fra i stedet for å levere tall den ikke kunne
stå inne for.

## Linjeskift midt i inline-matte gir rå LaTeX til leseren

Plattformens rendrer matcher `$([^$\n]+?)$`. Et **linjeskift inne i et
`$…$`-uttrykk** gjør at mønsteret ikke treffer, og studenten ser rå LaTeX:

```
✗  $\Theta(n^3\lg n) + O(n^3) +
   \Theta(n^2\lg^2 n)$
✓  $\Theta(n^3\lg n) + O(n^3) + \Theta(n^2\lg^2 n)$
```

Feilen sprer seg: når det første uttrykket ikke lukkes riktig, parer porten
feil dollartegn, og en helt vanlig prosasetning lenger nede blir flagget som
matte. Tre meldte avvik i `tdt4120-1-3` viste seg å være to linjeskift.

**Bryt lange uttrykk med `$$…$$` på egen linje i stedet** — der er linjeskift
lov.

## Tiltale og deiksis — si aldri hvor leseren har vært (nytt 2. august 2026)

Forkunnskapsblokka oppsummerer **et annet kapittel**. Da kan den ikke si
«her». Husmalen gjorde det likevel, i 526 blokker over 524 filer:

```
✗ **Sist du var her, sto dette:** en eksamensoppgave har to ledd …
✓ **Dette sto der:** en eksamensoppgave har to ledd …
```

Verst i `inter1000-1-1`, som er det **første** kapitlet i sin fagsøyle og
tre linjer lenger nede skriver «Det bygger ikke på noen av de andre
søylene, og du kan lese det uten å ha vært innom historie, økonomi eller
folkerett». Leseren blir altså først fortalt at hun har vært her før, og
straks etter at hun ikke trenger å ha vært noe sted.

**Regelen:** en lærebok vet ikke hva leseren har gjort. Den vet hva som
står i sine egne kapitler. Skriv om innholdet, ikke om lesehistorikken:

| ✗ | ✓ |
|---|---|
| Sist du var her … | Dette sto der … / Kort oppfrisket … |
| Sist du var her (fra kap. 3.2): | Fra kap. 3.2: |
| Sist du var her lærte du at … | I det kapitlet lærte du at … |
| Som du husker fra … | I kap. X står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. X … |

Samme regel rammer «som du sikkert husker», «du har jo allerede sett»,
«dette kan du fra før» — alt som gjør en påstand om leseren i stedet for
om stoffet. En student som hopper rett til kapittel 5.3 fordi det er det
hun skal ha eksamen i, skal ikke møte en bok som later som de har møttes.

`sjekk-bok.py` flagger dette rådgivende.

⚠ **Én form overlevde første rydding: overskriften.** 246 kapitler i ni bøker
hadde fortsatt `## Forkunnskaper — sist du var her` — med liten forbokstav,
midt i en overskrift. Første runde søkte etter `**Sist du var her**` og fant
den ikke. Overskriften sier uansett allerede hva blokka er, så den skal bare
være `## Forkunnskaper`.

⚠ **Og porten selv hadde en ordgrensefeil:** uten `(?<![a-zæøå])` foran «som»
treffer mønsteret «der·som du husker», som er en helt vanlig betingelse.
13 av 14 treff i nynorsk-laget var nettopp det. En rådgivende port som roper
ulv, blir ignorert — og da forsvinner de ekte treffene i støyen.

## `description` er REN TEKST — markdown havner i Google-treffet (nytt 2. august 2026)

Kapitlenes `description` rendres **aldri** som markdown. Verifisert mot
prod-server: feltet havner uendret i `<meta name="description">`,
`og:description` og `twitter:description` — altså i søketreffet og i
lenkeforhåndsvisningen — og i den synlige kroppen. KaTeX rendrer 1217 uttrykk
ellers på kapittelsiden, men ikke ett i beskrivelsen.

122 kapitler i 17 bøker viste derfor dette i Google:

```
✗ Den harmoniske svingelikningen, egenfrekvens $\omega_0=\sqrt{k/m}$ …
✓ Den harmoniske svingelikningen, egenfrekvens ω₀=√(k/m) …

✗ … fyll tabellen og **rekonstruér** løsningen.
✓ … fyll tabellen og rekonstruér løsningen.
```

Skriv matte som lesbar tekst: `ω₀=√(k/m)`, `xⁿ`, `Δf`, `χ²₂ₙ`, `0/0`, `∞`,
`E = Δmc²`. Ingen `$…$`, ingen `**fet**`, ingen backticks.

⚠ **Metadataen må konverteres for seg.** `description` i
`textbook-courses*.ts` er ofte skrevet SELVSTENDIG, ikke kopiert fra
kapittelfila — `econ1100-3-1` hadde to helt forskjellige setninger. Retter du
bare kapittelfila, står den andre igjen.

`sjekk-bok.py` blokkerer nå på dette.

## BOKCONFIG `description` — HARDT FORMATKRAV (nytt 1. august 2026)

Kursforsiden parser dette feltet og splitter det i tre visuelle elementer:
en kort ingress, en «Bygget på …»-boks med lenke til kildegrunnlaget, og
emne-chips. Parseren i `src/app/[courseId]/page.tsx` krever nøyaktig dette
mønsteret:

```
<ingress> — kalibrert mot <kalibrering>: <tema>, <tema>, <tema> og <tema>
```

**Matcher ikke teksten, faller HELE beskrivelsen ut som én grå tekstblokk.**
Det skjedde med 25 av 26 høyskolebøker: STV1400 endte med en 1 734 tegns
setning som fylte halve skjermen og var praktisk talt uleselig.

| ledd | krav | eksempel |
|---|---|---|
| ingress | **maks ~90 tegn**, én setning, ingen temaliste | `Eksamensrettet lærebok for ECON1310 ved UiO` |
| kalibrering | hva boka er bygget på, uten «bygget på»-ord | `eksamenssettene 2015–2025` |
| temaer | **3–6 stykker**, komma- eller «og»-separert, hver 2–5 ord | `Keynes-modellen på tilvekstform, Phillips-kurven, IS-RR-PK og finanspolitikk` |

**Samlet lengde skal være under 250 tegn.** Er den over, har du skrevet
innholdsfortegnelse i stedet for beskrivelse.

Regler som følger av dette:

- **Ikke ramse opp pensum.** Beskrivelsen er en salgslinje, ikke et sammendrag.
  Velg de tre til seks temaene en student kjenner igjen emnet på.
- **Ikke legg eksamensform, vekting, karakterskala eller kildetall i temalista.**
  Kildetallene hører i `kildegrunnlag.ts`, som har sin egen side og lenkes
  automatisk fra boksen. Eksamensformen hører i kapittel 0.1.
- **Ingen semikolon, tankestrek eller kolon inne i leddene** — de bryter
  parseren. Bare det ene ` — ` og det ene `: ` som skiller leddene.
- Sannferdighetskravet gjelder fortsatt: kalibreringsleddet må stemme med
  `EKSAMENSANALYSE.md`. Men det skal stå kort («34 eksamenssett fra 2003 til
  2025»), ikke som en oppramsing av filtyper og forbehold.

## Deloppgaver merkes a), b), c) — aldri romertall (nytt 3. august 2026)

Produkteierregel, ufravikelig. Brutt i første SVMET1010-bygg: kap. 0.1 hadde
«**(i)** Gjør kort rede for begrepet …» med fire bestillinger, og fasiten
refererte til dem med samme romertall.

`sjekk-bok.py` blokkerer når romertallet står i **oppgaveteksten**, og nevner
det rådgivende når det bare står i fasiten — der er det som regel en
tilbakevisning («Ingen feil — (i)») eller en oppramsing av modellens ledd.

⚠ **Retter du dette, må oppgave OG fasit rettes samtidig.** Ellers peker
fasiten på etiketter som ikke finnes. Og se etter prosahenvisninger uten
parenteser: «som drøftingsmateriale i ledd ii og iii» byttes ikke av et søk
etter `(ii)`.

⚠ Regelen gjelder DELOPPGAVER. En prosedyre som nummererer sine sju steg
«(i) faktoriser modulusen; (ii) skriv gcd-sjekken …» er ikke deloppgaver, og
en sjekkliste over hva en drøfting skal inneholde er det heller ikke.

Restansen i live-katalogen: `docs/hoyskole-boker/RESTANSE-romertall-deloppgaver.md`.

## To hardkodinger i plattformen skjelettet må rette seg etter (nytt 3. aug 2026)

**1. Prøvekapitler får beskrivelsen «Fire prøver …» automatisk.**
`wire-bok.py` linje 94 genererer den, og den kan ikke overstyres fra
skjelettet. Planlegger du tre øvingseksamener i et prøvekapittel, får leseren
en beskrivelse som ikke stemmer. SVEXFAC03 løste det ved å legge én
flervalgsprøve foran de tre eksamenene, så det faktisk ER fire.

**2. Kursbeskrivelsens temaliste splittes på BÅDE komma og « og ».**
Parseren i `src/app/[courseId]/page.tsx` gjør
`m[3].split(/,\s*|\s+og\s+/)`. Et tema som selv inneholder «og» sprekker
derfor i to meningsløse chips:

```
✗ «definisjons- og språkteori, rett og moral»
    → chips: «definisjons-», «språkteori», «rett», «moral»
✗ «rasjonalitet og menneskemodeller»
    → chips: «rasjonalitet», «menneskemodeller»
✓ «normtypelæren, definisjonslæren, lovtekstanalyse»
```

Begge bøkene som ble skrevet 3. august traff denne uavhengig av hverandre.
**Test alltid BOKCONFIG-strengen mot parserens egen regex** før du melder
ferdig.

⚠ Og tittelen avgjør om jus-forbeholdet vises: `erJus()` i
`hoyskole-disclaimer.tsx` krever `^jus` i kurs-id-en ELLER
`\brett(s\w*)?\b|juridisk` i tittelen. «JFEXFAC04 Examen facultatum (jus)»
traff ingen av delene — Lovdata-forbeholdet ville falt bort på et emne der
lovtekstanalyse er signaturoppgaven.

⚠⚠ **Og ordgrensen biter hardere enn den ser ut.** «JUROFF1500 **Strafferett**
for ikke-jurister» treffer HELLER IKKE — `\brett` krever ordgrense, og i
«Strafferett» står «rett» rett etter en «e». En strafferettsbok ville altså
mistet Lovdata-forbeholdet sitt. Løsningen der ble å skrive «… — juridisk
innføring for ikke-jurister», som treffer på `juridisk`.

**Test tittelen mot regexen, ikke mot magefølelsen:**

```python
import re
erJus = lambda cid, t: bool(re.search(r'^jus', cid, re.I)
                            or re.search(r'\brett(s\w*)?\b|juridisk', t, re.I))
```

Endrer noen tittelen senere, forsvinner forbeholdet stille — ingen port
fanger det.

## LENGDE-TELL måler skjevhet i BEGGE retninger (nytt 6. august 2026)

Fasiten skal verken være systematisk **lengst** eller systematisk **kortest**.
Sjansenivået er 25 % ved fire alternativer; taket er 35 % — i hver retning.

⚠ **Rådet «forleng distraktorene» er utilstrekkelig alene, og kan gjøre skaden
verre.** Målt i EXFAC03-SPR: agentene fulgte rådet, boka havnet på 21 %
fasit-lengst — men **ni filer lå over taket i motsatt retning**, opptil 80 %
fasit-kortest. En student kunne scoret langt over sjansenivå ved å velge det
korteste alternativet.

**Det operasjonelle kravet er rotasjon, ikke retning:**

- Metrikken teller **strengt** lengste og strengt korteste. Å skrive
  distraktorene «nesten like lange» hjelper ikke — et forsøk der fasiten var
  8 tegn lengre ga fortsatt 100 %.
- Sikt mot at fasiten er lengst i omtrent én av fire spørsmål, kortest i
  omtrent én av fire, og i midten resten.
- **Roter hvilket alternativ som er lengst.** Da lander banken på 25 % begge
  veier — verifisert.

⚠ **Rotårsaken, målt i EXFAC03-SPR:** skjevheten er ikke tilfeldig. Distraktorene
får gjerne en påhengt begrunnelsesklausul («…, siden leddsetningen sier noe om
under hvilke omstendigheter vedtaket ble fattet»), mens fasiten skrives stramt —
ofte som en bar etikett («SUBJEKT», «ADVERBIAL»). Da blir fasiten kortest nesten
per konstruksjon.

**Hovedgrepet er derfor å fjerne fyll fra distraktorene**, ikke å blåse opp
fasiten. Klausulene gjør sjelden nær-feilen mer troverdig. Der fasiten likevel
er for knapp, fyll den med ekte fagstoff hentet fra forklaringen som allerede
står der: «SUBJEKT» → «SUBJEKT, siden hele leddsetningen kan byttes mot «det»
foran verbalet».

## Ytterpunktene er ikke nok — mål RANG og STUBBER (nytt 10. august 2026)

⚠ **Å ligge under 35 % i begge retninger beviser ingenting.** Ytterpunktmålingen
ser bare rang 1 og rang 4. Den er blind for alt imellom, og det er der de fleste
lekkasjene faktisk sitter.

Målt i EXFAC03-HARK Del 6: fasiten lå på lengderang 3 i **62–95 %** av
spørsmålene, og porten sa grønt. Katalogmålingen samme dag: **86 av 190 filer**
passerer den gamle porten og klumper seg likevel på én rang. Verst er econ1310 —
fasiten er nest lengst i **87 % av 562 spørsmål** og aldri lengst; gammel port
målte 0 % «eneste lengst» og ga full godkjenning. «Kryss av det nest lengste»
gir 87 % rett uten fagkunnskap. Det er en større lekkasje enn «velg det lengste».

**Tre uavhengige mål — en fil kan være grønn på to og rød på det tredje:**

| mål | hva det fanger | tak |
|---|---|---|
| ytterpunkt | fasiten systematisk lengst *eller* kortest | 35 % hver vei |
| **rang** | fasiten klumper seg på én av de fire lengderangene | 40 % |
| **stubbe** | ett alternativ er strykbart på form før det leses | 40 % |

Kjør `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs <emne>` (etter wiring) —
den rapporterer alle tre. `--streng` gir exit 1.

**Stubbe** er et alternativ under halvparten av snittlengden til de tre andre.
Runtime stokker rekkefølgen, så selve sloten lekker ingenting — men et alternativ
som er åpenbart for tynt til å kunne være svaret, gjør spørsmålet til trevalg:
gjetteren går fra 25 % til 33 %. Grunnlinjen i katalogen er median 25 % av
spørsmålene, verste fil 83 %.

**Grepet som virker, verifisert på 66 distraktorer i HARK Del 6:** gjør den gale
påstanden mer **spesifikk** — ikke legg på fyllord. «En feil i tellingen» →
«En feil i tellingen, som skyldes at materialet er ujevnt avskrevet i de eldste
årgangene». Distraktoren blir samtidig bedre, fordi den nå sier eksplisitt det
steget forklaringen retter. Ingen `explanation` måtte endres.

**To maskinelle garantier som må stå i ethvert revisjonsskript:**

1. Sammenlign alle `options[0]` før og etter og assertér at ingen fasit er rørt.
   Da kan ingen forklaring komme i utakt med svaret sitt.
2. Assertér at hver ny distraktorlengde er **under** sin fasit. Ellers forrykker
   oppskrivingen rangfordelingen som bivirkning, og du bytter én lekkasje mot
   en annen.

⚠ **Ved lik lengde skal vekten fordeles, ikke tildeles.** 21 % av alle
firevalgsspørsmål i katalogen har en distraktor med nøyaktig samme tegnlengde som
fasiten. Første utkast av rangmålingen ga fasiten beste rang ved likhet, og det
blåste opp rang 1 og tømte rang 4 — `bi-okonomi` sto som rød på det artefaktet
alene. Deler fasiten lengde med k−1 andre, fordeles 1/k på hver aktuelle rang.

Mål begge tall per fil før ferdigmelding. `quiz-lengdesjekk.mjs` leser
`quiz-data-<emne>.ts` og virker først etter wiring, så bruk et staging-skript
med samme metrikk under bygging.

## Fire regler som stopper lengdelekkasjen ved kilden (nytt 10. august 2026)

Rettingen av 86 quizbanker avdekket at **byggeløypa selv produserer defekten**.
Våre to nyeste bøker, `svexfac03` og `exfac03-spr`, hadde den like fullt. Målt i
dem, og gyldig for alle bøker:

**1. Trekk antallet lengre distraktorer per spørsmål — ikke ha én vane.**
`svexfac03` la inn nøyaktig ÉN lengre distraktor i 40 % av spørsmålene;
`exfac03-spr` nøyaktig TO i 41 %. Samme defekt, motsatt innstilling. Antallet
skal variere fritt mellom 0 og 3, ca. 25 % hver.

**2. Behandle alle fire alternativene likt.** Får fasiten et forklarende
haleledd («…, siden …»), skal alle fire ha det — ellers ingen. I `exfac03-spr`
satt **150 av 162 distraktor-stubber på `options[3]`**: malen ga to distraktorer
et haleledd og lot den siste stå som bar etikett. Den ene vanen produserer
*både* rangklyngen og stubbraten — to lange over fasiten, én bar under.

**3. Skriv aldri en distraktor til fasitens NØYAKTIGE tegntall.** Det er ikke
nøytralt. `svexfac03` hadde 189 av 910 spørsmål (21 %) med en distraktor på
eksakt fasitlengde. Da den strikte fordelingen var eksakt 25/25/25/25, leste den
tie-vektede målingen fortsatt 21/26/24/29 — uavgjort-vekten fordeles på flere
ranger og trekker målingen oppover. Det tok 100 ekstra nedkortinger å lukke.
⚠ Konsekvens: en fil kan se balansert ut i en rå telling og likevel felle porten.

**4. Siter alternativets TEKST i forklaringen, aldri plasseringen.**
16 forklaringer i de to bøkene sa «de to neste» eller «den siste distraktoren».
Rekkefølgen stokkes ved kjøretid, så de peker på et tilfeldig alternativ.
Rotårsaken er den samme som lengdevanen: forfatteren ser en rekkefølge leseren
aldri får se.

Portene som håndhever dette: `quiz-lengdesjekk.mjs` (ytterpunkt, rang, stubbe),
`rangmaal.mjs` (rang per fil OG per kapittel), `sjekk-tvilling.mjs` (to
alternativer som sier det samme), `sjekk-alternativref.py` (posisjonsreferanser).

## SKJELETT.md må være v3 — tre feller wire-bok stopper på (nytt 2. august 2026)

`wire-bok.py` parser skjelettet med to mønstre, og finner den ingen kapitler,
stopper den på `assert`. SVMET1010 lå i den eldre formen (`**Kap. 3.1 — Tittel**`
+ `` `id: … · number …` ``) og ga **0 treff av 30 kapitler**.

```
#### Kapittel 3.1: Deltakerroller: Fangen-kontinuumet
**id:** `svmet1010-3-1` · **number:** 3.1 · **estimatedMinutes:** 75 · **prerequisites:** `svmet1010-1-1`

- **Kapitteltype:** tema.
- **Description:** Rollekontinuumet fra ikke-deltakende observatør til «go native».

**Belegg:** …
```

Tre ting som har gått galt i praksis:

1. **`prerequisites` MÅ stå i backticks.** Parseren plukker dem med
   `` re.findall(rf"`({emne}-\d+-\d+)`", …) `` — uten backticks finnes de ikke.
   «ingen» skrives uten (gjelder kun kap. 0.1).
2. **Tom linje etter `- **Description:**`.** Uten den blør beskrivelsen rett
   inn i `**Belegg:**`-blokka, fordi parserens lookahead krever `- **`, ikke
   `**`. Det er samme mekanisme som ga **53 avkuttede kursbeskrivelser**
   tidligere.
3. **Aldri prosa-forkunnskaper.** Tre eksamenstreningskapitler i SVMET1010 hadde
   `prerequisites: Del 1–8`. Forkunnskapskjeden styrer rekkefølgen i boka, så
   den må peke på en konkret kapittel-id — bruk siste kapittel i den øverste
   delen det vises til.

Og: kapittelfilas eget `description` **overstyrer** skjelettet (parseren
foretrekker kapittelfila), så fyll det alltid ut ordrett begge steder.

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`.
IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
— wiring gjøres sentralt (fase 5). Generer JSON via python `json.dump`.

## Kapittel-JSON (toppnivå)
`{ id, courseId: '<emne>', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …»],
content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt — referanse: econ1310-2-1.json)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`, `\\` i JSON)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**
  (flashcards genereres KUN fra toppnivå definition-blokker med title)
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: []}}` (+subTasks ved
  behov). ALDRI solutionVideo/allowsUpload/allowsCanvasDrawing/answer.
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}`
Blokk-id-er: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

## Obligatorisk kapittelstruktur
Per arketypens kapittel-DNA (DNA-regnefag/DNA-jus/DNA-drofting) og skjelettets
per-kapittel-kontrakt. Alltid, i denne rekkefølgen først i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens, vekt, sjangre — fra skjelettet)
2. `text` **Forkunnskaper** (kapitler i boka + kryssbok-lenker
   `[tittel](/<courseId>/<chapterId>)` — KUN til kapitler som finnes i
   `src/lib/data/chapters/`; «kan leses uten forkunnskaper» hvis ingen)
Og SIST i kapitlet: `collapsible` **Symbol- og formelliste** (title «Symbol-
og formelliste», buttonText «Vis symboler og formler»): første linje
«Oppslagsverk — alt her forklares underveis i kapitlet.», deretter
markdown-tabell `| Symbol | Betydning |` + «**Formler i dette
delkapitlet:**» med display-LaTeX + tolkning. ALLE symboler/formler brukt i
delkapitlet — per delkapittel, ikke arv. Unntak kun for helt symbolfrie
kapitler. (Studentpanel: symbolvegg i døråpningen skremmer — listen er
oppslag, ikke inngang.) Collapsibles skal ALDRI være tomme — `content` er
feltnavnet og skal ha blokker (ikke `text`).
Og alltid: `warning` **Typiske feil** (fra skjelettet) + begrepsbank-
definisjoner til flashcard-kvoten (hver stor begrepsbank åpner med
standard-notisen «flashcard-/repetisjonsstoff — hopp trygt over ved
førstegangslesing; tidsanslaget gjelder kjernestoffet») + `collapsible`
repetisjon (teorikapitler).

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»)
- Kun eksamensrelevant stoff; «kjenne til» sist og merket.
- Korte avsnitt (2–4 setninger), «du»-form, konkret norsk knagg før
  formalisme — presisjon vinner ved tvil.
- Hver oppgave synlig eksamensforankret («(Eksamenssjanger X — …)») eller
  åpenbart relevant.
- **Læringsløkke Teori → Eksempel → Oppgave:** `content[]` veksler teori
  (`text`/`definition`/`theorem`) → `example` → `exercise` i gjentatte små
  løkker gjennom delkapitlet, IKKE all teori øverst og alle oppgaver samlet
  nederst. `exercise`-blokkene plasseres INLINE i `content[]` rett etter
  eksempelet/teorien de hører til (plattformen renderer inline oppgaver).
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en regel, en
  formel eller en metode som ikke er introdusert tidligere i kapitlet (t.o.m.
  eksempelet rett foran) eller i et tidligere kapittel referert i Forkunnskaper-
  blokken. Bygg oppgaveprogresjonen bit for bit.
- **Deloppgaver på egen linje, fet merking:** deloppgaver a), b), c) i `task`/
  `solution` skal HVER starte på egen linje med merket i fet — format
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst.
  (Bruk ikke `subTasks`-feltet — det kobler inn egen fremdriftslogikk.)
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER kode (sjanger-/
  oppgavekode, feilkode #N, karakterbokstav) og all karaktersjargong («C-stoff»/
  «A-markør») + insider-term forklares i klarspråk ved FØRSTE bruk; ingen kald
  kode i `competenceGoals`/læringsmål eller i aller første tekstboks. Del 0 skal
  ha en **«Slik leser du denne boka»-orienteringsboks (type `text`/`tip`, ALDRI
  `definition` — ville endret flashcard-kvoten)** med karakter-/vurderingsskala +
  kompakt kodeliste + at feil har et samlet register. Karaktersjargong som
  motsier eksamensformen (f.eks. «A-kandidat» ved bestått/ikke-bestått) unngås
  eller rammes inn.
- **Stokket flervalg i prøvetekster:** statiske flervalg i prøve-collapsibles
  har stokkede fasit-bokstaver (ALDRI «alle a»); prøve-tipen sier hvor
  flervalget bor (inline/quiz). Quiz-filene beholder options[0]-invarianten.
- **Del 0-pakken:** «Lite tid?»-boks (hurtigrute 3–5 dager + ukeplan fra
  summerte `estimatedMinutes`) + kildenote for frekvens-empirien (hvilke
  sett/veiledninger, årstall, forbehold — fra EKSAMENSANALYSE.md, aldri
  oppdiktet) + prosedyre-/sjangerkort på ÉN side (kortet selv, ikke lenkeliste).
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/<emne>/<emne>-X-Y)`; død «se kapittel»-tekst
  er FORBUDT (aldri lenker i title-felt).
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  «Prioritet: perfekt» FORBUDT (skriv «høyeste prioritet»); «Gapet til A» =
  oppgraderingsmeny; modellbesvarelser ærlig merket (en «C-besvarelse» ER C) +
  minst én autentisk B-/midtnivå-besvarelse; bestått/ikke-bestått-fag: én
  «bestått-på-marginen»-besvarelse.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; lett
  innstegsoppgave (difficulty lett, ren gjengivelse) tidlig i teorikapitler
  der første oppgave ellers er full eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med
  hverdagsanker før apparatet; eksempler er verdens-caser, ikke «en medstudent
  skriver …»-metaeksempler.
- **Tidsbudsjett-konsistens:** avvik mellom deklarert oppgavetid og sum
  deltider forklares (skrivetid vs. total). «Lite tid?»-boksen sier at
  anslagene er LESEtid (×1,5 ved håndskriving).
- **Hint + difficulty-spredning (bølge 4+5):** alle exercises har utfylte
  `hints` (første = hjemmel/formel/første grep, ALDRI konklusjonen); boka har
  noen «(krevende)»-merkede oppgaver + én merket kald bank UTEN hint (fasit =
  momentliste) i eksamenstreningsdelen.
- **Fasitmønster-variasjon (bølge 4):** gjelder ALLE ensartede fasitlister —
  aldri «alle a», aldri «alle felle»/«alle riktig». Distraktorer gjengir ALDRI
  bokas egne nyanser som «galt» svar (ev. nær-sanne distraktorer forklares
  eksplisitt i fasit-kommentaren).
- **Meta-fasit forbudt (bølge 4):** «en A-besvarelse ville ha drøftet …»
  erstattes av faktisk utskrevet drøftelse. Minst én modellbesvarelse lander
  SKARPT (ikke alle på samme kompromissform).
- **Signalbokser ETTER oppgaven (bølge 4):** varsel om hva en drilloppgave
  tester står etter oppgaven/som collapsible hint, aldri foran.
- **Frekvenstall = telte belegg (bølge 4):** «N av M sett» skal stemme eksakt
  med belegg-listen som følger. **Sannferdige kildepåstander (UFRAVIKELIG, fra
  produkteier):** kildenoten, beskrivelsen og all omtale av grunnlaget nevner
  KUN kildetyper som faktisk finnes i fagets arkiv — skriv aldri
  «sensorveiledninger» hvis arkivet bare har oppgavesett/løsningsforslag;
  modellbesvarelser omtales som nyskrevne, aldri som ekte studentbesvarelser. Faglige påstander verifiseres FØR skriving
  (arketype-DNA: regnefag → numerisk parametersjekk av fortegnspåstander;
  jus → Lovdata + dommer med 1–2 setninger faktum).
- **Øktmerking + prøvedeling + feilkode-gloss (bølge 5):** kapitler > 45 min
  har tidsanslag per løkke/pausepunkt-markører; lange modellbesvarelser har
  «— naturlig pausepunkt —»; feilkoder glosses ved første bruk PER KAPITTEL;
  tunge kapitler har «Sist du var her»-forkunnskapsblokk som VISER
  nøkkelformler/kjerneregler; Del 0 har deltidsrute (10–12 uker) og «lese mye,
  skrive lite»-boks; boka har sitt samlede oppslagskort (jus: hjemmelskart;
  drøfting: «hvem eier hva»-kort; regnefag: formel-minimum).

## Prøvekapitler
Id `<emne>-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver til del
<del>: <deltittel>»: `tip` (dekning + tidsbruk) + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med oppgaver og
full fasit (jus/drøfting: «må-punkter / pluss-punkter / feller»-struktur).
Tip/description deklarerer «N prøver à ~X min» + «kan trygt deles over flere
kvelder — én prøve per økt» (aldri bare totalsum). Flervalg i prøve-
collapsibles: stokkede fasit-bokstaver (aldri «alle a») og prøve-tipen sier
hvor flervalget bor; riktig/galt-/felleprøver blander reelle og feller (aldri
«alle felle»). Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐).
Kap-referanser i fasitene som markdown-lenker. Ingen quiz/begrepsbank.

## Quiz
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{question, options: [4 stk — options[0] ALLTID riktig], explanation}]`.
Kvote per kapittel = skjelettets kvotesammendrag (AUTORITATIVT — aldri
overstyr). Distraktorer = reelle feller fra analysen.

## Opphavsrett (ufravikelig)
Alle oppgaver/case/faktum NYSKREVNE (egne tall, parter, kontekster) —
eksamenssjangrene er malen, aldri originaloppgavene. Pensum refereres,
aldri siteres i lengde. Referanser fag-agenten er usikker på merkes
`(verifiser)` og løses i fase 6 (jus: mot Lovdata).

## Fagspesifikk stil (FYLLES INN per fag fra skjelettets identitetsseksjon)
- Notasjonsstandard: …
- Forbudt-termer (grep-sjekkes): …
- Arketypesærtrekk (modellbesvarelser/figur-i-ord/R-kode/…): …

## Kvalitetskrav før ferdigmelding (per agent)
1. `python3 json.load` på hver fil; 2. kvotetelling mot skjelettet
(definitions + quiz); 3. fagets forbudt-termer-grep = 0; 4. kryssbok-lenker
peker på eksisterende filer; 5. **læringsløkke**: `content[]` veksler
teori→eksempel→oppgave i løkker med `exercise`-blokker inline (ikke all teori
topp / alle oppgaver bunn); 6. **forkunnskapsdekning**: gå gjennom hver
`exercise` og bekreft at den bare hviler på stoff introdusert tidligere i
kapitlet eller i en refererte forkunnskap — ingen usett begrep/regel/formel;
7. **nybegynner-inngang**: alle koder/karaktersjargong/insider-termer forklart ved
første bruk, ingen kald kode i competenceGoals/første tekstboks, og Del 0 har
«Slik leser du denne boka»-orienteringsboksen (type `text`/`tip`, ALDRI
`definition`) med skala + kodeliste + feilregister; 8. **prøve-flervalg**:
fasitmønsteret sjekket — riktig svar varierer posisjon (aldri «alle a»);
9. grep «Prioritet: perfekt» = 0; 10. **ingen tom collapsible** (feltet heter
`content` og skal ha blokker — aldri `text`-nøkkel eller tom array);
11. kap-referanser i fasiter/forkunnskaper er markdown-lenker til
eksisterende filer; 12. **Del 0-pakken** på plass («Lite tid?»-boks m/
lesetid-setningen, kildenote for frekvens-empiri, prosedyrekort, deltidsrute,
«lese mye, skrive lite»-boks) og begrepsbank-notisene står
først i hver stor bank; 13. **tidsbudsjett**: deklarert oppgavetid vs. sum
deltider forklart der de avviker; 14. **juridiske deklarasjoner**: innholdet
fremstiller seg ALDRI som offisielt/institusjons-tilknyttet og lover aldri
eksamensutfall (uavhengighets-/rådgivningsdeklarasjonene vises automatisk av
plattformen — se README «Juridiske deklarasjoner»; ved wiring: registrer i
institusjoner.ts og sjekk jus-/helse-heuristikken i hoyskole-disclaimer.tsx);
15. **fasitmønster** sjekket i ALLE ensartede fasitlister (flervalg,
riktig/galt, feller) — riktig svar varierer, aldri «alle a»/«alle felle»;
16. **hints** utfylt på alle exercises (unntatt merket kald bank), første hint
røper aldri konklusjonen; 17. **frekvenstall** = antall listede belegg (tell
hver «N av M»-påstand); 18. grep for meta-fasit («en A-besvarelse ville»,
«ville ha drøftet») = 0 — drøftelsene er utskrevet; 19. **øktmerking**:
kapitler > 45 min har løkke-tidsanslag/pausepunkter og prøvekapitler
deklarerer «N prøver à ~X min» + deling; 20. **feilkode-gloss** ved første
bruk per kapittel; 21. regnefag: alle fortegns-/entydighetspåstander
parametersjekket numerisk (jf. DNA-regnefag «Matematisk sannhetskontroll»);
jus: dommer har kort faktum ved første omtale.
