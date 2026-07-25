# Figurbestillinger — IN1900

Figurene bestilles her av kapittelforfatterne og bygges i figurfasen. Filene
legges i `public/images/textbook/in1900/` og MÅ lastes opp med
`npx tsx scripts/upload-media-storage.ts` før deploy — ellers 404 i produksjon.

**Stil:** akser `#6b7280`, norsk tekst, transparent bakgrunn, viewBox ca.
480×360, merkede akser og punkter med stiplede hjelpelinjer. Kode i figurer
settes i monospace.

## Figurbehovet i et kodefag er LAVT — les dette før du bestiller

Kode er ikke figur. En kodeblokk med kjørt utskrift (BYGGEKONTRAKT §K3–K4) er
bokas hovedillustrasjon, og den skal ALDRI erstattes av et bilde av kode: et
bilde kan ikke kopieres, ikke søkes i, ikke skjermleses og ikke rettes.
**Bestill aldri en figur som bare viser kode eller utskrift.**

Fire figurtyper er faktisk nyttige her:

1. **Sporingsdiagram / flytdiagram for kodesporing (sjanger A).** Ikke en
   gjengivelse av koden, men *mekanismen*: en løkke tegnet som en sløyfe med
   betingelsen på utgangen, eller sporingstavlen visualisert som en tidslinje av
   variabeltilstander. Relevant i kap. 1.3 (løkker), 1.7 (drillens
   sporingsmetode) og 2.2 (hvilken exception som utløses først — en flyt fra
   linje til linje med det første feilpunktet markert). Sporingstavlen SELV
   skrives som markdown-tabell i fasiten, ikke som figur.
2. **Minnemodell og aliasing.** Bokser-og-piler: navn som peker på objekter.
   Nyttig for feilkode #23 (`b = a` gir to navn på samme liste), for lister mot
   NumPy-arrays (kap. 4.1: `+` konkatenerer mot `+` elementvis), for nøstede
   lister (kap. 1.2), for nøstede dictionaries (kap. 1.5/8.1: ytre nøkkel →
   indre ordbok) og for `self`-attributter i en instans (kap. 5.1).
3. **Plott produsert av kode som står i boka.** ODE-løsninger, differenslikning-
   baner, fasekurver, konvergenskurver. **Regel: figuren skal genereres av
   nøyaktig den koden leseren ser** — samme parametre, samme antall steg, samme
   akseetiketter og samme legende. Generatorskriptet legges i
   `scripts/hoyskolebok/gen-in1900-figurer.py` og skriver SVG direkte
   (matplotlib er IKKE installert i byggemiljøet — enten installeres det i
   figurfasen, eller SVG-en skrives for hånd/med et lite eget skript slik de
   andre bøkenes figurgeneratorer gjør). Bildeteksten sier hvilken kodeblokk i
   kapitlet som lager figuren.
4. **Klassehierarki-diagram.** Ett per bok er nok: `ODESolver` med subklassene
   `ForwardEuler`, `RungeKutta4` og en egen `advance`-subklasse, med pil «arver
   fra» og en note om at bare `advance` skrives selv (kap. 7.2/7.4). Eventuelt
   ett tilsvarende for `Parabel`/`Linje`-arven i kap. 5.3.

Alt annet dekkes bedre av **figur-i-ord**: en presis beskrivelse av hva plottet
viser (akser, kurver, retning, legende), slik en A-besvarelse forklarer plottet
sitt på en hjelpemiddelfri eksamen. Skjelettet krever dette eksplisitt i
kap. 4.3, og det er dessuten selve ferdigheten som testes — kandidaten kan ikke
kjøre koden på eksamen og må kunne beskrive figuren.

## Regler for bestillinger

- Kapitlet skal være lesbart FØR figuren finnes: hvert figursvar har allerede en
  figur-i-ord som står på egne ben. Når SVG-en er bygget, wires `image`-blokken
  inn på stedet figur-i-ord-teksten står.
- Ber en oppgave- eller prøvetekst om «tegn»/«skisser»/«plott», skal
  løsningsforslaget vise figuren — også inne i `collapsible`-er (nøstede
  `image`-blokker rendres, men MÅ ha `id` og `src` som peker på en opplastet
  fil).
- `alt` beskriver figuren bokstavelig; `caption` skreddersys per plassering og
  oppgir aldri tallverdier aksene ikke har merket.
- En figur viser bare det kapitlet har lært bort — del figuren ved behov.
- Sannhetskravet: en figur som viser en annen oppførsel enn kapitlets kjørte
  kode og fasit, er feil uansett hvor pen den er. Sjekk figuren mot kapitlet den
  skal wires inn i, ikke mot bestillingsteksten alene.

## Bestillinger

| Kapittel | Filnavn | Beskrivelse |
|---|---|---|
| | | |
