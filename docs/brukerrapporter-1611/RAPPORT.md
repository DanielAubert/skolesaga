# Brukerrapporter på Skolesaga – behandlet 16.11.2026

Oppdraget nevnte åtte rapporter, men listet sju. Alle sju er behandlet her.

Felles for alle kapittelrettingene:
- Hver retting er gjort i vanlig og lesevennlig (narrativ) versjon, på både bokmål og nynorsk (`chapters/nn/…`).
- Nynorskfilene har teksten to steder, i innholdet og i oversettelsesminnet `_meta.tm`. Begge er rettet, så tallet
  «2 forekomster» per nn-retting er riktig.
- `_meta.sourceHash` er ikke endret. Kjøres `translate-nynorsk.mjs` på nytt, oversetter skriptet bare de endrede
  bokmålsstrengene på nytt.
- JSON er validert etter hver retting (`bytt.py` laster fila før den lagres). Id-er og struktur er beholdt.

---

## 1. tysk-3, 6.3 Nachkriegszeit – okkupasjonssonene

**Melding (11.11.2026):** «I begynnelsen: USA okkuperte sør-øst, ikke sør-vest»

**Avgjørelse: brukeren har rett.**

**Rotårsak:** Lista oppga både den amerikanske og den franske sonen som «Sør-vest». Den franske sonen sto også med
feilskrivingen «Rhinland-Pfalz».

**Kilde:** Store norske leksikon (curl 16.11.2026):
- snl.no/Bayern: «Etter krigen ble Bayern innlemmet i den amerikanske okkupasjonssonen».
- snl.no/Hessen: «Delstaten Hessen ble dannet i 1945 av den amerikanske militærregjeringen».
- snl.no/Baden-Württemberg: «Württemberg-Baden (amerikansk sone), Baden (det vil si Sør-Baden, fransk sone) og
  Württemberg-Hohenzollern (fransk sone)».
- snl.no/Rheinland-Pfalz: dannet «i den franske okkupasjonssonen».

Den amerikanske sonen lå dermed i sørøst og midt i landet, og den franske sonen i sørvest langs grensen til Frankrike.
Saarland og Bremen er utelatt med vilje: Saarland hadde en særstatus, og SNL-artikkelen er uklar på årstallet.

**Endret:**
- `tysk-3-6-3.json` (intro):
  - før: Amerikansk «Sør-vest (Bayern, Hessen, etc.)» / Britisk «Nord-vest» / Fransk «Sør-vest (Rhinland-Pfalz, etc.)»
  - etter: Amerikansk «Sørøst og midt i landet (Bayern, Hessen, nordlige Baden og Württemberg)» / Britisk «Nordvest» /
    Fransk «Sørvest, langs grensen til Frankrike (Rheinland-Pfalz, sørlige Baden og Württemberg)»
- `nn/tysk-3-6-3.json`: samme retting på nynorsk («Søraust …», «nordlege/sørlege»).
- `tysk-3-6-3-narrativ.json`:
  - før: «en amerikansk i sørvest, … en fransk i sørvest»
  - etter: «en amerikansk i sørøst og midt i landet, … en fransk i sørvest langs grensen til Frankrike»
- `nn/tysk-3-6-3-narrativ.json`: tilsvarende.

**Søkt i hele Skolesaga** etter «amerikansk … sørvest»: ingen andre treff.

**Ikke rettet (funnet av maskinportene, fantes fra før):**
- Quizspørsmålene i `nn/tysk-3-6-3-narrativ.json` står på bokmål («Hva var Stasi?» o.l.).
- `90.000` står med punktum som tusenskille.

---

## 2. naturfag-6, 2.3 Næringskjeder og økosystemer – feil antall oppgaver

**Melding (10.11.2026):** «Det var 9 oppgaver det står at det skulle være 8 oppgaver»

**Avgjørelse: brukeren har rett.**

**Rotårsak:** Tallet i kapittelhodet («8 oppgaver») og i fremgangslinja («x / 8 oppgaver») står ikke i kapittelfila.
Det er et håndskrevet tall, `exerciseCount`, i metadataen (`src/lib/data/textbook-courses-6.ts`). Tallet blir aldri
avstemt mot innholdet. Den lesevennlige versjonen har ingen egen metadataoppføring, så `getChapterMeta`
(`textbook-courses.ts`) bygger den fra originalkapitlet og arver tallet derfra.

For naturfag-6 2.3 ser det slik ut:
- Vanlig versjon: 3 oppgaver og 5 repetisjonsoppgaver, altså 8, og tallet stemmer.
- Lesevennlig versjon: tre quizer med 3 spørsmål hver, altså 9, men siden viste 8.

**Måling i hele `chapters/`:** skriptet `docs/brukerrapporter-1611/tell_oppgaver.py` teller oppgavene i hver fil på
samme måte som visningen gjør. Det teller exercises-lista, oppgaveblokker i innholdet og oppgaver i sammenleggbare
blokker, og en sekvensiell quiz telles per spørsmål. Tallet sammenlignes så med `exerciseCount`.

| | antall |
|---|---|
| kapitler i metadataen | 7 652 |
| kapittelfiler telt | 13 217 |
| filer med avvik | **6 699** |
| – vanlige versjoner | 1 773 (553 der tallet var for høyt, 1 220 der det var for lavt) |
| – lesevennlige versjoner | 4 926 (tallet er arvet) |

Fordelt på metadatafil: matte 300/617 (vanlig/narrativ), valgfag 443/1113, vg1 159/511, vg2 159/265, vg3 136/145,
yrkesfag 119/565, språk 46/591, 10 79/303, 9 5/320, 8 46/308, 7 73/51, 6 83/74, 5 81/63, høyskole 44/–.
Hele lista ligger i `avvik-oppgavetall-for-retting.tsv`.

**Endret (samme rotårsak, mekanisk retting):**
1. `src/components/textbook/textbook-chapter-view.tsx`: ny funksjon `tellOppgaver()` teller oppgavene fra innholdet
   som vises. Kapittelhodet og fremgangslinja bruker det talte tallet når kapitlet har innhold, og ellers
   `exerciseCount` fra metadataen. Dette retter alle 6 699 tilfellene på kapittelsidene, også de lesevennlige
   versjonene, som ikke har egen metadata.
2. `src/lib/data/textbook-courses-{5,6,7,8,9,10,hoyskole,matte,spraak,valgfag,vg1,vg2,vg3,yrkesfag}.ts`:
   `exerciseCount` er satt lik det talte tallet i 1 773 oppføringer (`synk_meta.py`). Dette tallet brukes også på
   kurssiden, i trinnoversiktene og i dialogen for lekser.
   - Kontroll: bare tallet er endret, 1 773 linjer inn og 1 773 ut, og ellers identiske linjer.
   - Etter retting: 0 avvik for vanlige versjoner.
   - 216 kapitler har ingen synlige oppgaver i fila og står nå med `exerciseCount: 0`.

**Merknad, ikke rettet:**
- Fremgangsregnskapet teller ikke repetisjonsoppgaver (`-rep-`), og en sekvensiell quiz lagrer svar per spørsmål
  (`<id>__q<n>`). Fremgangslinja kan derfor ikke alltid nå 100 %. Dette er en egen designsak og var slik også før
  denne rettingen.
- Oppgaveblokker der feltene står rett på blokka (uten `exercise`-objekt) rendres ikke av `ContentBlockRenderer`.
  De telles derfor heller ikke.

---

## 3. norsk-6, 2.3 Rettskriving og tegnsetting – ukedager og måneder

**Melding (2.11.2026):** «I punktet punktum og stor bokstav står det at ukedager og måneder skal skrives med stor
bokstav. Det gjelder ikke i norsk rettskriving.»

**Avgjørelse: brukeren har rett.**

**Rotårsak:** Regelboksen i kapitlet lister «I ukedager og måneder (mandag, januar)» under **stor** bokstav. Feilen
er gjentatt fire steder i den lesevennlige versjonen: i regelteksten, i fasiten til quizspørsmålet «Når bruker du stor
bokstav?» og i oppsummeringen.

**Kilde:**
- Bokmålsordboka (Språkrådet og UiB, ord.uib.no) har oppslagsordene «mandag» og «januar» med liten forbokstav.
- Språkrådets egne regelsider (sprakradet.no) svarer HTTP 403 på automatisk henting og er ikke lest direkte.
- Kapitlet `norsk-8-2-3` har fra før riktig regel («Liten forbokstav brukes ved: Måneder og ukedager»).

**Endret:**
- `norsk-6-2-3.json`:
  - før: punktet «- I ukedager og måneder (mandag, januar)» i lista for stor bokstav
  - etter: punktet er tatt ut av lista, og en ny linje er lagt under: «**Liten bokstav** brukes i ukedager og måneder
    (mandag, januar).»
- `norsk-6-2-3-narrativ.json`, tre steder:
  - regeltekst, før: «… i navn på land (Norge, Sverige) og i ukedager og måneder (mandag, januar).»
  - regeltekst, etter: «… og i navn på land (Norge, Sverige). Ukedager og måneder skriver du derimot med liten bokstav
    (mandag, januar).»
  - quizfasit, før: «… personer, steder, land, ukedager og måneder.»
  - quizfasit, etter: «… personer, steder og land. Ukedager og måneder skrives med liten bokstav.»
  - oppsummering, etter: «… personer, steder og land – men ikke i ukedager og måneder.»
- `nn/norsk-6-2-3.json` og `nn/norsk-6-2-3-narrativ.json`: de samme rettingene på nynorsk.
- **Samme feilklasse i et annet norsk-kurs:**
  - `norsk-9-3-1.json`, før: «**Ukedager**: Tirsdag, onsdag, …» (stor T midt i en oppramsing etter kolon)
  - etter: «tirsdag, onsdag, …»
  - `nn/norsk-9-3-1.json`: samme retting («tysdag»).

**Søkt** i alle `norsk-*`-kapitler (bm og nn) og i quiz- og kortdata etter «stor bokstav» sammen med
ukedag/måned, og etter ukedager og månedsnavn med stor forbokstav midt i en setning:
- Ingen andre feil.
- Treffene på «August Strindberg» og «Sæterjentens Søndag» er riktige (navn og verktittel).
- At tyske månedsnavn skrives med stor bokstav, er riktig for tysk.

---

## 4. samfunnsfag-6, 2.3 Verdensdelene – «ALT er feil»

**Melding (12.10.2026):** «ALT er feil»

**Avgjørelse: delvis.** Hovedinnholdet er riktig. SNL bekrefter:
- at det er sju verdensdeler, og at det er slik norsk regner dem;
- rekkefølgen etter størrelse;
- at Asia er størst og mest folkerik;
- at Afrika er nest størst og har 54 land;
- at Andesfjellene er verdens lengste fjellkjede;
- at Antarktis ikke har fastboende;
- at Australia er både land og kontinent.

Jeg fant likevel en reell faktafeil og noen upresise formuleringer.

**Kilder (SNL, curl 16.11.2026):**
- snl.no/verdensdel: «Jorden deles inn i sju verdensdeler», med størrelsestabell.
- snl.no/Sahara: «Jordens største varme ørken».
- snl.no/Andesfjellene: «verdens lengste fjellkjede».
- snl.no/Russland: «ligger i Øst-Europa og Nord-Asia», «verdens største land i utstrekning».
- snl.no/verdensdel: «Europa er Jordens nest minste verdensdel».
- snl.no/regnskog_-_samfunn: Amazonas er nevnt først blant de tre største regnskogsområdene.
- snl.no/Brasília og snl.no/Himalaya: skrivemåter.

**Endret (bm + nn, vanlig + narrativ):**

| Hva | Før | Etter |
|---|---|---|
| Sahara (3 + 4 steder bm, også quizspørsmålet R2/Quiz 1 og fasit) | «verdens største ørken» | «verdens største varme ørken». Uten «varme» var svaralternativet «I Antarktis» faglig riktig, fordi Antarktis regnes som en (kald) ørken. |
| Europa i lista | «Liten, men viktig» (verdiutsagn) | «Nest minst» |
| Russland | «strekker seg inn i Europa» / «så stort at det strekker seg inn i Europa» | «ligger både i Asia og Europa» / «verdens største land og ligger både i Asia og Europa» |
| Fjellkjede | «Himalayas» | «Himalaya» |
| Hovedstad | «Brasilia» | «Brasília» |
| Grammatikk | «Unik dyreliv» | «Unikt dyreliv» |

Filer: `samfunnsfag-6-2-3.json`, `samfunnsfag-6-2-3-narrativ.json`, `nn/samfunnsfag-6-2-3.json`,
`nn/samfunnsfag-6-2-3-narrativ.json`.

**Ikke endret:**
- «Kenguru og koala, som ikke lever vilt noe annet sted i verden» står. Påstanden er grov, men forsvarlig på 6. trinn,
  fordi kenguruer utenfor Australia lever på Ny-Guinea, som også hører til Oseania.
- Kapitlet har ingen bilder eller kart.
- Visningen: se avsnittet «Bygg og visning» nederst.

**Samme Sahara-feil andre steder:** `nn/naturfag-8-6-2-narrativ.json` («den største ørkenen i verda») og
`naturfag-8-6-2-narrativ.json` («verdens storste oken»). Disse er ikke rettet, av to grunner:
- Det er et annet kurs.
- Bokmålsfila er gjennomgående æøå-strippet. `sjekk.py` gir 106 funn («vaer», «atmosfaeren», «pa» …), og fila bør
  derfor rettes i en egen runde.

---

## 5. krle-8, 3.1 Jødedommens historie – «bør skrives av et menneske»

**Melding (8.10.2026):** «Jeg tror det hadde vært bedre om ett menneske hadde skrevet det. Det er ikke bra at dere
bruker KI for ingen grunn, det er mange mennesker med masse kunnskap om temaet som kunne skrevet det.»

**Avgjørelse:** Ønsket kan ikke gjennomføres i kapittelfila. Jeg leste kapitlet kritisk som et signal og fant faktisk
upresise og ensidige formuleringer, typisk KI-preg og én påstand om «et godt svar». Kapitlet er ikke skrevet om.
Rettingene er punktvise.

**Kilder (SNL, curl 16.11.2026):**
- snl.no/jødedom kaller jødedommen «en monoteistisk religion» og sier ikke at den er den eldste. Om gudsnavnet:
  JHVH «uttales aldri av jøder», «leses derfor Adonai», og «Ortodokse jøder omtaler Gud gjerne som ha-Shem (Navnet)».
- snl.no/jom_kippur: «den helligste og mest alvorstunge dagen i det jødiske religiøse året».
- snl.no/Tempelhøyden og snl.no/Vestmuren: Tempelhøyden regnes som jødedommens helligste sted, mens Vestmuren er
  «jødedommens helligste bønne– og pilegrimssted».
- snl.no/Palestinakrigen_i_1948–1949: «I alt flyktet cirka 750 000 palestinere».
- snl.no/sionisme: «Ultraortodokse ledere var sterke motstandere av den politiske sionismens idé».

**Endret (bm + nn, vanlig + narrativ der teksten finnes):**

| Funn | Før | Etter |
|---|---|---|
| Omstridt superlativ (5 steder, også i beskrivelsen) | «verdens eldste monoteistiske religion» | «en av verdens eldste monoteistiske religioner» |
| Selvmotsigelse (Abraham «4000 år siden» i teksten, ca. 1800 f.Kr. på tidslinja) | oppsummering: «røtter tilbake til Abraham for rundt 3500 år siden» | «røtter som ifølge tradisjonen går tilbake til Abraham for rundt 4000 år siden» |
| Gudsnavnet | «(på hebraisk kalt JHVH eller HaShem)» | JHVH skrives, men uttales ikke; man sier *Adonai* («Herren») eller *HaShem* («Navnet») |
| Pesach | «jødenes viktigste høytid» | «en av jødenes viktigste høytider» (jom kippur er den helligste dagen) |
| Vestmuren (2 steder) | «det helligste stedet i jødedommen» | «jødedommens helligste bønnested» |
| Sinai | «er det viktigste øyeblikket i jødisk historie» (vanlig versjon) | «regnes i jødisk tradisjon som det viktigste øyeblikket i historien» |
| 1948 / Nakba | «hundretusener ble fordrevet» | «rundt 750 000 palestinere flyktet eller ble fordrevet fra hjemmene sine» |
| Generalisering | «For jøder var dette oppfyllelsen …» / «drøm for jødene» | «For mange jøder …» / «drøm for mange jøder» |
| Tidslinje | «Ca. 1250 f.Kr.: Moses og utvandringen fra Egypt» | «… ifølge tradisjonen» |
| Grammatikk | «Juda, ett av de tolv stammene» | «Juda, én av de tolv stammene» |
| Påstandsregelen | «En god besvarelse drøfter …», «En god tidslinje kan …» | «Prøv å drøfte …», «Tidslinjen kan for eksempel inneholde …» |
| Generalisering | «(alle gutter lærte å lese …)» | «(gutter lærte tidlig å lese …)» |
| KI-preg | «utrolig motstandskraft» (4 steder) | «stor motstandskraft» |

Filer: `krle-8-3-1.json`, `krle-8-3-1-narrativ.json`, `nn/krle-8-3-1.json`, `nn/krle-8-3-1-narrativ.json`.

**Ikke endret:**
- Ellers er tonen saklig. Omtalen av Nakba og Israel–Palestina er balansert, og «utvalgt folk» er forklart med
  forbehold.
- Gjentakelsen «enorm innflytelse» står, fordi den ikke er feil.
- Kapitlet er ikke skrevet om, og ingen menneskelig fagperson har lest det.

---

## 6. spansk-1, 3.2 Los posesivos – vuestro mangler

**Meldinger (6.10.2026):** «det mangler linje om nuestro/a og nuestros/as», og deretter «nei jeg mente det mangler
linje om Vuestro/a og Vuestros/as til vosotros»

**Avgjørelse: brukeren har rett** (den andre meldingen). Nuestro sto allerede i tabellen.

**Rotårsak:**
- Oversiktstabellen hoppet over vosotros/as. Resten av kurset bøyer verb med vosotros (f.eks. `spansk-1-7-4`), så
  tabellen var ufullstendig.
- Tabellen «Nøkkelbegreper» i oppsummeringen var meningsløs («yo | mi», «nuestra | nuestra madre» i kolonnene
  Spansk | Norsk).

**Kilde:**
- es.wiktionary.org/wiki/vuestro, som siterer RAE (DLC 1914): «Pronombre posesivo de segunda persona, cuya índole
  gramatical es idéntica a la de primera persona "nuestro"». Det betyr at vuestro bøyes i kjønn og tall som nuestro.
- RAE (rae.es, dle.rae.es) svarer HTTP 403 og er ikke lest direkte.
- At Latin-Amerika bruker ustedes i stedet for vosotros, står allerede i kurset selv.

**Endret:**
- `spansk-1-3-2.json`:
  - ny tabellrad «| vosotros/as | vuestro/vuestra | vuestros/vuestras | deres (til flere du snakker med) |»
  - «Viktig»-notatet: «Men **nuestro** og **vuestro** endrer seg i både tall og kjønn»
  - innledningen nevner «deres»
  - ny boks «Vuestro/vuestra» med fire eksempler og en merknad om ustedes/su i Latin-Amerika
  - nytt punkt i oppsummeringen
  - nøkkelbegrep-tabellen er erstattet med en riktig tabell (mi/mis, tu/tus, su/sus, nuestro …, vuestro … med norsk
    betydning)
- `spansk-1-3-2-narrativ.json`: vuestro er lagt inn i oversikten, i avsnittet om bøying i kjønn og tall (med
  eksempler og merknad om Latin-Amerika) og i oppsummeringen.
- `nn/…`: tilsvarende på nynorsk («dykkar»).

**Oppgaver og fasit:** stemmer med den utfylte oversikten. Ingen oppgave forutsatte vuestro, og ingen fasit ble feil.
Jeg la ikke til nye oppgaver, fordi det ville endre id-er og struktur. Ingen andre spansk-kapitler har en
eiendomsordtabell uten vuestro.

---

## 7. mat-8, 8.4 Forbrukermakt – plantebasert kost mangler

**Melding (9.8.2026):** avsnittet «Andre former for bevisst forbruk» nevner matsvinn og lokalt produsert mat, men ikke
det å spise i all hovedsak plantebasert (viser til EAT-Lancet-rapporten).

**Avgjørelse: delvis.**
- Brukeren har rett i at avsnittet manglet det viktigste klimagrepet, og i at kortreist mat ble omtalt uten forbehold.
- Matsvinn og kortreist mat er likevel faglig forsvarlige eksempler og er beholdt. Matsvinn er et nasjonalt mål og
  FNs bærekraftsmål 12.3 (SNL «matsvinn»), og Helsedirektoratet nevner lavere transportutslipp og mindre matsvinn som
  fordeler ved lokalprodusert frukt og grønt.
- Boka har allerede plantebasert kost i kapittel 5.2 *Bærekraftige matvalg*, så 8.4 viser nå dit.

**Kilder:**
- Helsedirektoratet, «Kostråd for befolkningen» (2024), helsedirektoratet.no/faglige-rad/kostradene-og-naeringsstoffer/
  kostrad-for-befolkningen: «Velg oftere fisk og sjømat, bønner og linser enn rødt kjøtt», «hovedsakelig plantebasert
  måltid». Helsenorge: rødt kjøtt «350 gram per uke eller lavere».
- Helsedirektoratet og Miljødirektoratet, «Gode valg for klima og miljø innen kostrådene»:
  - «Følger du kostrådene spiser du ikke bare sunt. Du gjør også et godt valg for klima og miljø.»
  - «Kjøtt fra drøvtyggere som storfe og lam er matvarer med de høyeste klimagassutslippene.»
  - «Bønner, linser og erter er blant matvarene med lavest klimagassutslipp.»
  - «Importerte frukt og grønnsaker har likevel lave klimagassutslipp sammenlignet med andre matvaregrupper.»
- Læreplan i mat og helse MHE01-03 (data.udir.no: `status_publisert`, `erstattes-av` tom, `siste-eksamen` null; MHE01-02
  er utgått). Kompetansemål etter 10. trinn: «utforske klimaavtrykket til matvarer og gjere greie for korleis matval og
  matforbruk kan påverke miljøet, klimaet og matsikkerheita».
- EAT-Lancet-rapporten er ikke lest og ikke brukt som kilde.

**Endret:**
- `mat-8-8-4.json`, «Andre former for bevisst forbruk»:
  - kortreist mat har fått ett forbehold: transport er bare én del av klimaavtrykket, og importert frukt og grønt har
    lave utslipp
  - nytt punkt «**Mer mat fra planteriket:**» (5 setninger): hva vi spiser betyr ofte mer enn hvor maten kommer fra,
    storfe og lam har høye utslipp og belgfrukter, grønt, korn og poteter lave; kostrådenes «mest mat fra
    planteriket» og «fisk, bønner og linser oftere enn rødt kjøtt»; at et kosthold i tråd med kostrådene ifølge
    Helsedirektoratet og Miljødirektoratet i stor grad er klimavennlig; henvisning til kapittel 5.2
  - oppsummeringen nevner «mer mat fra planteriket»
- `mat-8-8-4-narrativ.json`: tilsvarende i fortellingen og oppsummeringen. Der står det at kostrådene er gitt av
  helsegrunner, med klimaet som en gevinst.
- `nn/…`: tilsvarende på nynorsk.

**Ikke endret:** Matsvinn og kortreist mat står. Kapitlet er ikke gjort til et debattinnlegg, og det er ingen
anbefaling om å bli vegetarianer.

---

## Porter og kontroller

- **æøå:** `python3 ~/eksamenssett/scripts/aeoa/sjekk.py` gir 0 funn på alle 26 endrede kapittelfiler.
- **Maskinportene:** `scripts/audit/maskin.py … --narrativ --staving av` gir 73 funn (vanskegrad, svar-mangler,
  stegnummer, nn-bokmål, desimalpunktum). Alle ligger i blokker jeg ikke har rørt og fantes fra før. Ingen JSON-, KaTeX-,
  bm/nn-struktur- eller fasitfeil. Kjørt med `--staving av`, så hunspell-cachen ikke ble skrevet. Cachefilene er
  kontrollert urørt med md5.
- **Påstandsporten:** `scripts/paastander/sjekk.py` gir ingen funn i krle-filene. I mat-8-8-4 flagger den 5 eldre
  [EMPIRI]-setninger om økologisk mat («Forskning viser liten forskjell …»), som jeg ikke har rørt.

## Bygg og visning

Bygget er kjørt i en ren kopi i `adhv-box:~/skolesaga-brukerrapporter-1611`:
- Kopien er laget med `git archive HEAD` og de 41 endrede filene lagt over. md5 er kontrollert, og alle 41 filer er
  identiske med Mac-en.
- `node_modules` er kopiert fra `skolesaga-sjekk-2810`, som har samme `package-lock.json`.
- `.env.local` har bare `NEXT_PUBLIC_*` og plassholdere.
- Kjørt med `nice -n 10` ved last 15,8.

Resultat:
- `npm run build` (med prebuild): **BUILD EXIT 0**
- `npx tsc --noEmit`: **TSC EXIT 0**. Den første tsc-kjøringen før bygget ga EXIT 2, men bare fordi `_dates.json`
  lages av prebuild.
- Repoet har ingen tester (ingen test-skript i `package.json`).

Visningskontroll mot `next start` på noden (port 3157, startet med `node-tjener.sh`), rendret HTML lest med curl:
- `/naturfag-6/naturfag-6-2-3-narrativ` viser nå «9 oppgaver» og «0 / 9 oppgaver». Den vanlige versjonen viser
  fortsatt 8.
- Alle de nye tekstene finnes i rendret HTML: «Sørøst og midt», «Liten bokstav», «største varme ørken», «Adonai»,
  «vuestros/vuestras», «Mer mat fra planteriket».

Skjermbilder med `scripts/dev/se-siden.sh`:
- Verktøyet stoppet på tidsgrensen (900 s, treg node) etter 14 av 32 bilder, og det ble ingen rapport.json med
  konsollfeil eller sidelengs rulling.
- Bildene tar bare toppen av siden.
- Sett: naturfag-6 2.3 lesevennlig (PC lys), som viser «9 oppgaver» og «0 / 9 oppgaver», og samfunnsfag-6 2.3
  lesevennlig (PC lys), der toppen ser normal ut, uten tomme blokker.
- Tatt, men ikke sett: tysk-3 6.3 og norsk-6 2.3 (PC og mobil).
- Ikke tatt: krle-8, spansk-1, mat-8, og samfunnsfag på mobil.
- Serveren er stoppet (`node-tjener.sh stopp skolesaga-br1611`).

## Filer til `git commit --only`

```
src/components/textbook/textbook-chapter-view.tsx
src/lib/data/textbook-courses-5.ts
src/lib/data/textbook-courses-6.ts
src/lib/data/textbook-courses-7.ts
src/lib/data/textbook-courses-8.ts
src/lib/data/textbook-courses-9.ts
src/lib/data/textbook-courses-10.ts
src/lib/data/textbook-courses-hoyskole.ts
src/lib/data/textbook-courses-matte.ts
src/lib/data/textbook-courses-spraak.ts
src/lib/data/textbook-courses-valgfag.ts
src/lib/data/textbook-courses-vg1.ts
src/lib/data/textbook-courses-vg2.ts
src/lib/data/textbook-courses-vg3.ts
src/lib/data/textbook-courses-yrkesfag.ts
src/lib/data/chapters/tysk-3-6-3.json
src/lib/data/chapters/tysk-3-6-3-narrativ.json
src/lib/data/chapters/nn/tysk-3-6-3.json
src/lib/data/chapters/nn/tysk-3-6-3-narrativ.json
src/lib/data/chapters/norsk-6-2-3.json
src/lib/data/chapters/norsk-6-2-3-narrativ.json
src/lib/data/chapters/nn/norsk-6-2-3.json
src/lib/data/chapters/nn/norsk-6-2-3-narrativ.json
src/lib/data/chapters/norsk-9-3-1.json
src/lib/data/chapters/nn/norsk-9-3-1.json
src/lib/data/chapters/samfunnsfag-6-2-3.json
src/lib/data/chapters/samfunnsfag-6-2-3-narrativ.json
src/lib/data/chapters/nn/samfunnsfag-6-2-3.json
src/lib/data/chapters/nn/samfunnsfag-6-2-3-narrativ.json
src/lib/data/chapters/krle-8-3-1.json
src/lib/data/chapters/krle-8-3-1-narrativ.json
src/lib/data/chapters/nn/krle-8-3-1.json
src/lib/data/chapters/nn/krle-8-3-1-narrativ.json
src/lib/data/chapters/spansk-1-3-2.json
src/lib/data/chapters/spansk-1-3-2-narrativ.json
src/lib/data/chapters/nn/spansk-1-3-2.json
src/lib/data/chapters/nn/spansk-1-3-2-narrativ.json
src/lib/data/chapters/mat-8-8-4.json
src/lib/data/chapters/mat-8-8-4-narrativ.json
src/lib/data/chapters/nn/mat-8-8-4.json
src/lib/data/chapters/nn/mat-8-8-4-narrativ.json
docs/brukerrapporter-1611/RAPPORT.md
docs/brukerrapporter-1611/tell_oppgaver.py
docs/brukerrapporter-1611/synk_meta.py
docs/brukerrapporter-1611/avvik-oppgavetall-for-retting.tsv
```

Ikke ta med: `scripts/audit/cache/hunspell-*.json`, `x` i repo-rota (feilplassert curl-utdata, se UTGATTE-FILER) og de
andre ~850 ucommittede kapittelfilene fra andre sesjoner.
