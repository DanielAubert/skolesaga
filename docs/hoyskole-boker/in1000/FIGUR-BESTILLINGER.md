# Figurbestillinger — IN1000

Figurene bestilles her av kapittelforfatterne og bygges i figurfasen. Filene
legges i `public/images/textbook/in1000/` og MÅ lastes opp med
`npx tsx scripts/upload-media-storage.ts` før deploy — ellers 404 i produksjon.

**Stil:** akser og rammer `#6b7280`, norsk tekst, transparent bakgrunn, viewBox
ca. 480×360. Kode og variabelnavn i figurer settes i monospace. Piler er tynne
med åpen spiss; objekter tegnes som avrundede bokser.

## Figurbehovet i et kodefag er LAVT — les dette før du bestiller

Kode er ikke figur. En kodeblokk med kjørt utskrift (BYGGEKONTRAKT §K3–K4) er
bokas hovedillustrasjon, og den skal ALDRI erstattes av et bilde av kode: et
bilde kan ikke kopieres, ikke søkes i, ikke skjermleses og ikke rettes.
**Bestill aldri en figur som bare viser kode eller utskrift.**

IN1000 har ingen matematikk å plotte og ingen `matplotlib` i pensum. Det finnes
derfor bare **tre** figurtyper som er faktisk nyttige her — alle tre handler om
det ene begrepet studenter sliter mest med: *hva peker på hva*.

1. **Minnemodell: navn, referanser og objekter (bokser og piler).** Bokas
   viktigste figurtype. Navn tegnes som etiketter til venstre, objekter som
   bokser til høyre, og en pil fra navn til objekt. Relevant for:
   - `b = a` gir to piler til SAMME boks (kap. 5.4, feilkode #2 og #15),
   - rebinding — pila flyttes, den gamle boksen lever videre hvis noe annet
     peker på den (kap. 5.4),
   - et objekt som holder en referanse til et annet objekt
     (`self._eier = person`, kap. 5.4/6.2),
   - «en-til-mange»: én boks med en liste/ordbok som peker på flere
     underobjekter (kap. 6.2 — bokas mest verdifulle figur),
   - `self`-fella: konstruktøren tegnet med én lokal boks som forsvinner ved
     retur, mot `self._x` som blir liggende i instansen (kap. 5.1, feilkode #1).
2. **Sporingstavle som mekanisme (kap. 4.1).** Ikke en gjengivelse av koden,
   men *mekanikken*: en løkke tegnet som en sløyfe med betingelsen på utgangen
   og en liten tabell ved siden som fylles rad for rad. Sporingstavlen SELV
   skrives som markdown-tabell i fasiten, ikke som figur.
3. **Klassekart for en modellering (kap. 6.1/6.5).** Ett per bok er nok: 3–4
   bokser med klassenavn, instansvariabler og metodesignaturer, og en pil
   «holder mange av» mellom container og element. Erstatter aldri teksten —
   modelleringsmetoden skal kunne følges uten figuren.

Alt annet dekkes bedre av **figur-i-ord**: en presis beskrivelse av hvilke
navn som peker på hvilke objekter etter hvert steg. Det er dessuten selve
ferdigheten som testes: kandidaten kan ikke tegne noe inn i Inspera-svarfeltet
og må kunne resonnere om referansene i hodet.

## Regler for bestillinger

- Kapitlet skal være lesbart FØR figuren finnes: hvert figursvar har allerede en
  figur-i-ord som står på egne ben. Når SVG-en er bygget, wires `image`-blokken
  inn på stedet figur-i-ord-teksten står.
- Ber en oppgave- eller prøvetekst om «tegn»/«skisser», skal løsningsforslaget
  vise figuren — også inne i `collapsible`-er (nøstede `image`-blokker rendres,
  men MÅ ha `id` og `src` som peker på en opplastet fil).
- `alt` beskriver figuren bokstavelig og rendres **rått**: ingen LaTeX, ingen
  `$`, ingen backslash, ingen markdown. `caption` skreddersys per plassering.
- En figur viser bare det kapitlet har lært bort — del figuren ved behov. En
  minnemodell i kap. 5.1 kjenner ikke ordbøker av objekter (det kommer i 6.2).
- Sannhetskravet: en figur som viser en annen oppførsel enn kapitlets kjørte
  kode og fasit, er feil uansett hvor pen den er. Sjekk figuren mot kapitlet den
  skal wires inn i, ikke mot bestillingsteksten alene.
- Ingen æ/ø/å i kodetekst inne i figuren (samme regel som i bokas kode); norsk
  brødtekst i figuren er derimot fin.

## Bestillinger

| Kapittel | Filnavn | Beskrivelse |
|---|---|---|
| | | |
