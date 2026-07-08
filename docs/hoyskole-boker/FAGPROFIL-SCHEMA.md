# Fagprofil-skjema (datalag for læringsressurser)

Én JSON-fil per høyskolefag i `src/lib/data/fagprofil/<slug>.json`.
Ekstrahert fra fagets EKSAMENSANALYSE.md (+ skjelettets Del 0 ved behov).
Konsumeres av eksamenssimulatoren (scoring/tid), SRS, og senere AI-sensor.
Norsk bokmål i alle verdier. Ingen påfunn — alt skal være belagt i analysen;
usikkert innhold legges i `verifiser`-listen i stedet.

```json
{
  "courseId": "econ4310",
  "tittel": "ECON4310 Macroeconomic Theory",
  "institusjon": "UiO",
  "arketype": "regnefag/essay-hybrid",
  "eksamensform": {
    "beskrivelse": "3 timers skriftlig skoleeksamen (Inspera)",
    "varighetMinutter": 180,
    "sprak": "engelsk",
    "hjelpemidler": "ingen",
    "struktur": "Part A metodologi-essay (1/3) + Part B og C modelloppgaver (1/3 hver)"
  },
  "scoring": {
    "karakterskala": "A–F",
    "minuspoeng": false,
    "minuspoengRegel": null,
    "bestaattKrav": null,
    "terskler": null
  },
  "sensornokler": [
    "Løsninger uten sporbar utledning gir ikke poeng — poeng per FOC-steg",
    "Euler-ligningen skal utledes, ikke postuleres"
  ],
  "typiskeFeil": [
    "Postulere Euler-ligningen i stedet for å utlede den fra Lagrange-problemet"
  ],
  "sjangre": ["essay", "regne"],
  "kilde": "docs/hoyskole-boker/econ4310/EKSAMENSANALYSE.md",
  "verifiser": ["Formatet etter H2023-omleggingen bør bekreftes mot neste sett"]
}
```

## Feltregler
- `varighetMinutter`: tall eller `null` (ukjent/varierende — forklar i beskrivelse).
- `sprak`: "norsk" | "engelsk" | "norsk/engelsk".
- `scoring.minuspoeng`: true KUN når analysen dokumenterer det; regel i
  `minuspoengRegel` (f.eks. "−0,5 per feil kryss, blankt gir 0").
- `terskler`: objekt eller null, f.eks. `{"A": "17/20 på flervalgsdelen"}`.
- `bestaattKrav`: f.eks. "begge deler må bestås", "bestått/ikke bestått —
  modelleringsoppgave må besvares", ellers null.
- `sensornokler`/`typiskeFeil`: 3–8 punkter hver, de VIKTIGSTE fra analysens
  §4/§5, komprimert til én setning per punkt.
- `sjangre`: delmengde av ["flervalg","regne","essay","praktikum",
  "kodeskriving","kodesporing","tegning","case","identifikasjon","muntlig",
  "domsanalyse"].
- For fag med to koder (econ3120/4120) eller etterfølger-profilering: bruk
  bok-sluggen som courseId og nevn koden(e) i tittel.
- Gyldig JSON (json.load skal passere), UTF-8, ingen kommentarer.
