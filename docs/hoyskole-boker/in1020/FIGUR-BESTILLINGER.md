# Figurbestillinger — IN1020

Figurene bestilles her av kapittelforfatterne og bygges i figurfasen. Filene
legges i `public/images/textbook/in1020/` og MÅ lastes opp med
`npx tsx scripts/upload-media-storage.ts` før deploy — ellers 404 i produksjon.

**Stil:** streker og akser `#6b7280`, norsk tekst, transparent bakgrunn,
viewBox ca. 480×360 (kretser gjerne 560×280), monospace på bitstrenger,
mnemonics og adresser. Signalnavn (A, B, C, F) settes i samme skriftsnitt som
brødteksten.

## Regel 0 — kretsen skal kunne leses UTEN figuren

IN1020s tyngste figurbehov er kretsanalyse (sjanger D): «skriv det boolske
uttrykket F for kretsen». Løsningen på plattformen er **portlisten** — kretsen
beskrives som en presis, nummerert liste over porter med navngitte
mellomsignaler:

```text
Port 1: AND med inngangene A og B      -> mellomsignal P
Port 2: NOT med inngangen C            -> mellomsignal Q
Port 3: OR  med inngangene P og Q      -> utgangen F
```

Dette er **entydig**, kan søkes i, kan skjermleses og kan rettes. En oppgave
formulert slik trenger ingen figur, og fasiten kan skrives fullt ut
(`F = A·B + C′`). Portlisten er derfor standardformen i alle drilloppgaver,
prøver og øvingseksamener.

Figurene under er **tillegg** som gjør de sentrale eksemplene lettere å se —
ikke erstatninger for portlisten. Reglene fra plattformen:

- Kapitlet skal være lesbart FØR figuren finnes: hver figurplassering har
  allerede en portliste/beskrivelse som står på egne ben.
- **Ber en oppgave- eller prøvetekst om at leseren skal «lese kretsen»,
  «se figuren» eller «tegne», SKAL løsningen vise en faktisk SVG** — også inne
  i `collapsible`-er (nøstede `image`-blokker rendres, men MÅ ha `id` og `src`
  som peker på en opplastet fil). Er figuren ikke bygget ennå, formuleres
  oppgaven om til portlisteform. Ingen løfter uten dekning.
- `alt` beskriver figuren bokstavelig og rendres **rått som HTML-attributt**:
  ingen LaTeX, ingen markdown, ingen backticks der.
- `caption` rendres i inline-modus: `$…$` virker, men ikke markdown og ikke
  backticks.
- En figur viser bare det kapitlet har lært bort — del figuren ved behov.
- Sannhetskravet: en figur som viser noe annet enn kapitlets fasit, er feil
  uansett hvor pen den er. Sjekk figuren mot kapitlet den wires inn i.
- **Ikke tegn ikke-pensum.** Ingen figurer av Karnaugh-diagram, multiplekser,
  dekoder, flip-flop eller OSI-7-lagsmodellen — de er utenfor/nedtonet i
  pensum, og en figur ville signalisere det motsatte.

## Bestillinger

| Kapittel | Filnavn | Beskrivelse |
|---|---|---|
| 2.1 | `portsymboler.svg` | De sju portsymbolene (AND, OR, XOR, NAND, NOR, XNOR, NOT) med navn under hvert symbol og det boolske uttrykket til høyre. Boblen på NAND/NOR/XNOR/NOT tydelig markert — det er den leseren skal kjenne igjen. |
| 2.2 | `krets-eksempel-1.svg` | Kretsen i kapitlets gjennomgangseksempel: tre innganger (A, B, C), tre porter, mellomsignalene navngitt på ledningene, utgangen merket F. Skal stemme eksakt med portlisten i teksten. |
| 2.3 | `krets-drill-a.svg`, `krets-drill-b.svg` | To drillkretser på eksamensnivå (fire porter hver, ulik topologi). Bestilles kun hvis drilloppgavene formuleres som «les kretsen»; ellers holder portlisten. |
| 2.4 | `von-neumann.svg` | Von Neumann-oppsettet: CPU-boks med ALU, registre og kontrollenhet inni, minneboks utenfor, databuss/adressebuss som toveis piler. Poenget figuren skal gjøre synlig: ALU-en ligger INNE i CPU-en, og kode og data deler samme minne. |
| 2.5 | `minnehierarki.svg` | Pyramide med register → cache → RAM → disk, med to akser i margen: «raskere, dyrere, mindre» opp og «tregere, billigere, større» ned. Ingen tallverdier på aksene. |
| 2.6 | `abstraksjonsstigen.svg` | Stige/trapp fra instruksjon (øverst) ned via pipeline, register, logiske porter/invertere, transistor, logiske verdier til volt (nederst). Rekkefølgen ER pensum — figuren må stemme med kap. 2.6 nøyaktig. |
| 3.3 | `nokkelretning-hemmelig.svg` | Alice → Bob: melding krypteres med Bobs OFFENTLIGE nøkkel, dekrypteres med Bobs PRIVATE. Nøklene fargekodet, retningen markert med pil. |
| 3.4 | `nokkelretning-signatur.svg` | Samme oppsett speilvendt: Alice signerer med SIN PRIVATE nøkkel, Bob validerer med Alices OFFENTLIGE. Skal kunne legges ved siden av forrige figur og vise kontrasten. |
| 4.1 | `tcpip-lagene.svg` | De fire lagene (applikasjon, transport, nettverk, link) som stablede bokser med ansvarsstikkord til høyre og eksempelprotokoller til venstre. Ruting plassert tydelig i nettverkslaget. |
| 4.2 | `subnett-oktett.svg` | Den delvise oktetten som 8 bit i to rader (IP-oktett over, maske-oktett under) med nettdel og vertsdel skilt av en loddrett strek, og AND-resultatet i en tredje rad. |

Alle bestillinger er **valgfrie forbedringer** unntatt `krets-drill-a/b.svg`,
som er obligatoriske dersom drilloppgavene i kap. 2.3 sier «les kretsen i
figuren». Velger forfatteren portlisteform der, kan de strykes.
