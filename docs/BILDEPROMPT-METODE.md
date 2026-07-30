# Slik lages forsidebildene

Metode for å generere forsidebilder til fag og institusjoner med
`scripts/generate-cover-image.ts` (Gemini). Skrevet 30. juli 2026 etter de fire
institusjonsbildene, så samme resultat kan gjentas for nye fag.

## Hvor bildet vises — og hvorfor det styrer komposisjonen

Ett bilde per fag brukes to steder:

| bruk | mål | forhold |
|---|---|---|
| Fagkort på institusjonssiden | ~430 × 192 CSS-px | ca. 2,2:1 |
| Hero på fagsiden `/[courseId]` | maks 1200 × 384 CSS-px | ca. 3,1:1 |

Begge bruker `object-cover`, så **bildet beskjæres ulikt de to stedene**. Kortet
klipper i bredden, heroet klipper i høyden.

> **Konsekvens:** alt som MÅ være synlig — særlig fagnavnet — skal ligge i det
> midtre båndet, godt innenfor både topp/bunn og sider. Generer i **21:9**
> (2,33:1), som er et kompromiss der begge beskjæringer blir små.

Og det viktigste enkeltpoenget:

> **På fagsiden vises INGEN tekstlig tittel når det finnes forsidebilde** —
> `<h1>` er `sr-only`. Fagnavnet i bildet er da den eneste tittelen leseren ser.
> Det må være riktig stavet og godt lesbart.

## Fem ufravikelige regler

Disse skal stå ordrett i hver prompt:

1. **Ingen logoer, våpenskjold, segl eller emblemer.** Å skrive «UiO» eller
   «MAT1100» på et Skolesaga-kort sier hvilket innhold kortet leder til. Et
   institusjonsemblem ville antydet at lærestedet står bak tjenesten.
2. **Ingen tekst utover navnet/emnekoden.** Ingen tall, formler, ligninger,
   akseetiketter, skilt eller lesbare bokrygger. Dette er den viktigste regelen
   mot **faglige feil**: en bildemodell som skriver en formel, skriver den før
   eller siden feil, og da står feilen på forsiden av faget.
3. **Ingen gjenkjennelige personer.** Figurer er forenklede.
4. **Stilisert illustrasjon, ikke fotorealisme**, så bildet ikke kan forveksles
   med et offisielt foto fra lærestedet.
5. **Bygninger er evokative, ikke kopier** av ett bestemt verk. (Åvl. § 32
   tillater fri avbildning av bygninger, men stilisering holder god margin.)

## Oppskrift for én prompt

**Steg 1 — forankre faget.** Les bokas `BOKCONFIG.json` (`description`) og
`SKJELETT.md`. Motivet skal vise noe faget *faktisk* handler om. En
statistikkbok skal ikke illustreres med reagensrør.

**Steg 2 — velg ÉN konkret vits.** Ikke generell «morsom stemning», men én
situasjon man kan se. De fire som virket:

| fag/sted | vitsen |
|---|---|
| UiO | student sovner under et skjevt boktårn; kråke med blyant ser dømmende på |
| BI | vekstkurven bryter ut av diagrammet og stikker av oppover, jaget av en figur med skvulpende kaffe |
| UiB | én leser uanfektet under paraply mens naboens har vrengt seg; gjennomvåt måke med verdighet |
| NTNU | papirfly brettet av en teknisk tegning; robot som høflig rekker fram en altfor stor skiftenøkkel |

Fellestrekket: humoren ligger i en **handling**, ikke i en stil. Og den er
vennlig — den ler med studenten, ikke av faget.

**Steg 3 — plasser komposisjonen.**
- motivet til **høyre**
- **rolig flate nede til venstre** (kortet har tekst der)
- navnet/emnekoden **sentrert**, som åpen tekst

**Steg 4 — forby logo-lockup eksplisitt.** Første BI-forsøk satte «BI» i en mørk
boks, som leste som et merke. Skriv derfor ut:

> The letters must NOT sit inside a box, badge, plaque, sign, shield or coloured
> rectangle, and must not be arranged as a logo lockup — they are open type over
> the illustration, nothing behind them.

**Steg 5 — velg palett** som matcher kortets gradient, så bildet ikke slår mot
resten av siden.

## Om tekst i bildet

Bildemodeller staver ustabilt, og **norske tegn er verst** — `ø`, `æ` og `å`
går ofte i stykker. Derfor:

- **Institusjoner:** bruk kortformen (`UiO`, `BI`, `UiB`, `NTNU`). Kort og rent
  ASCII — alle fire ble riktige på første forsøk.
- **Fag:** bruk **emnekoden** (`MAT1100`, `IN2010`), ikke det fulle fagnavnet.
  Kodene er korte, versale og uten norske tegn. Fagnavnet står som HTML på
  kortet uansett.
- Sjekk stavingen i det ferdige bildet før du går videre. Er den gal, regenerer —
  det er billigere enn å leve med den.

## Teknisk oppskrift

```bash
npx tsx scripts/generate-cover-image.ts \
  --prompt "$(cat prompt.txt)" \
  --output public/images/subjects/<id>.png \
  --aspect-ratio 21:9 --size 4K
```

**Behold PNG-masteren.** Jeg slettet dem etter webp-konvertering 30. juli, og
måtte oppskalere da hero-versjonen trengtes. Gemini lagrer ikke det den
genererer — verifisert mot API-et: `/files` og `/cachedContents` er tomme.
Bildet finnes bare der du la det.

Deretter to derivater med `sharp`:

| fil | bredde | bruk |
|---|---|---|
| `<id>.webp` | 1600 px | kort |
| `<id>-hero.webp` | 2800 px | hero |

`webp({quality: 82})` gir 43–64 kB fra 2,3–2,7 MB PNG. Må du oppskalere, bruk
`kernel: lanczos3` + `sharpen({sigma: 0.6})` — flat vektorstil med store
ensfargede flater tåler det godt, fotografier gjør det ikke.

**Til slutt, ufravikelig:** `npx tsx scripts/upload-media-storage.ts`.
`/images/*` omdirigeres til Supabase Storage siden mediene er ute av git. Filer
som bare ligger lokalt gir **400** for leseren. Verifiser med
`curl -L -o /dev/null -w '%{http_code}'` gjennom appen, ikke bare at fila finnes.

## Sjekkliste før du er ferdig

- [ ] Navnet/emnekoden er riktig stavet i bildet
- [ ] Ingen andre tall, formler eller tekst i bildet
- [ ] Ingen boks eller plakett bak bokstavene
- [ ] Motivet stemmer med hva faget faktisk handler om
- [ ] Rolig flate nede til venstre
- [ ] Navnet ligger i midtbåndet, så det overlever begge beskjæringer
- [ ] PNG-masteren er tatt vare på
- [ ] Lastet opp til Storage og verifisert 200 gjennom appen
