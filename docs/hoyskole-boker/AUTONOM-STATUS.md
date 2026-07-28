# Autonom byggekjøring — tdt4110 + med1100

**Startet:** 28. juli 2026. Produkteier på ferie, sjekker inn via remote.
**Oppdateres av:** byggelederen (hovedøkta), etter hver fullførte fase.

Fokus valgt av produkteier: **høstsemesterfag**. Begge emnene er 1. semester
og undervises til høsten — belegg i valgnotatet nederst.

---

## Status

| Fase | `tdt4110` | `med1100` |
|---|---|---|
| Steg 0 — skjelettport | ✅ OK (39 kap) | ✅ OK (50 kap) |
| Steg 0 — BOKCONFIG.json | ✅ | ✅ |
| Steg 0 — BYGGEKONTRAKT.md | ⏳ | ⏳ |
| Steg 1 — byggebølge | — | — |
| Steg 2 — wiring | — | — |
| Steg 3 — verifisering | — | — |
| Steg 4 — sluttport + deploy | — | — |

Tegnforklaring: ✅ ferdig · ⏳ pågår · ⛔ blokkert · — ikke startet

---

## Omfang

| | `tdt4110` | `med1100` |
|---|---|---|
| Lærested | NTNU | UiO |
| Kapitler | 39 | 50 |
| Prøvekapitler | 8 (del 1–8) | 13 (del 1–13) |
| Filer totalt | 47 | 63 |
| Quiz-kvote (gulv) | 662 | 706 |
| Flashcard-kvote (gulv) | 558 | 734 |
| Arkiv | 33 filer (19 fritt) | 42 filer (alle fritt) |

---

## Logg

**28. juli** — Steg 0 startet. Skjelettportene grønne for begge.
BOKCONFIG skrevet. Byggekontrakter under arbeid.

**28. juli, før start** — Fant at byggeplanen og alle 170 skjeletter fortsatt
instruerte agentene til å skrive `](/bok/<emne>/…)` og redigere
`src/app/bok/trinn/`. `docs/` lå utenfor globet da `/bok`-prefikset ble
fjernet 27. juli. Malene er inndata til byggeagentene, så begge bøkene ville
fått døde interne lenker gjennom hele verket. 1 639 instruksjoner i 174 filer
rettet (commit `3b0fe5e7e`) FØR byggingen startet.

---

## Åpne risikoer

- **`tdt4110` har tynt arkiv:** 19 brukbare oppgavesett (2014–2019) pluss 14
  vernede løsningsforslag som kun er fasitkilde. På nivå med `fil1001` (22
  filer), som ble en god bok — men det er den tynneste av kandidatene. Holder
  det ikke kvalitetskravene, stoppes boka og rapporteres. Innholdet fylles
  ALDRI med oppdiktet stoff for å nå en kvote.
- **`med1100` er et medisinfag:** boka er eksamensforberedelse, aldri
  helseråd eller klinisk veiledning. Kravet står i byggekontrakten.
  Medisinske normalverdier fra eldre sett (2021–2022) er `(verifiser)`-merket
  i analysen og skal forbli merket til de er kontrollert.

## Grenser for den autonome kjøringen

Byggelederen stopper og venter på produkteier ved:
- betalt API (Anthropic/ElevenLabs/Gemini)
- endringer i den delte Supabase-databasen
- kilder klassifisert `SJEKK-MANUELT` eller `INTERNT-CC-NC`
- en rød port som ikke lar seg få grønn — da rulles arbeidet tilbake
- feil som treffer produksjon — da reverteres deployen

---

## Valgnotat: hvorfor disse to

Målt mot eksamensarkivet, ikke bare emnebeskrivelsene:

| Emne | Volum | Eksamenssett i arkivet |
|---|---|---|
| `tdt4110` | ~1 375 plasser | **16 høst, 0 vår** |
| `med1100` | 275 plasser | høst + vår, 1. semester |

**`nokut-afb` ble valgt bort** til tross for størst volum (~6 000 kandidater/år).
Filnavnene viser at hovedsesjonen er i april: 14 sett i april/mai mot 10 i
desember. Den er et vårfag i praksis og hører hjemme før jul, ikke nå.

`econ2130` («emnet gis kun om våren»), `in1010` og `econ1410` er ute av samme
grunn — analysene og settene viser rene vårfag.
