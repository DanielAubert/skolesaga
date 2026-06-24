# Revisor-pakke: nordsamisk matte 1T, kapittel 1 (1t-1-1 … 1t-1-9)

Til deg som er nordsamisktalende og hjelper oss å kvalitetssikre. Tekstene er
**KI-utkast** forankret i den offisielle matte-termbasen (mattesatnelistu). Terminologi
og matematikk er kontrollert; det som gjenstår er **språklig** kvalitetssikring —
særlig bøying/kasus, konstruerte sammensetninger og naturlig flyt.

## Slik retter du (viktig — gjør rettingene nyttige for *alle* framtidige kapitler)

Hver side har innrapportering: **marker teksten** (eller trykk ⚑ i avsnittet) → fyll ut
skjemaet. Feltene styrer hvordan rettingen gjenbrukes:

| Felt | Hva du skriver |
|---|---|
| **Feil (nordsamisk)** | ordet/formen slik det står nå |
| **Riktig (nordsamisk)** | slik det skal være |
| **Kategori** | terminologi / staving / morfologi (bøying) / sammensetning / syntaks / ordvalg |
| **«Gjelder globalt»** | ✅ **kun** for faste ord/termer og stavemåter som skal være likt overalt |
| **Regel / lærdom** | for bøyings-/setningsmønstre: skriv *regelen*, ikke bare ordet |

**Tommelfingerregel som gir mest verdi:**
- **Term eller fast stavemåte** (f.eks. «polynomdivisjon = …») → huk av **«Gjelder globalt»**.
  Da legges rettingen i en ordliste som **automatisk** retter samme ord i alle senere kapitler.
- **Bøying/kasus eller setning** (f.eks. «čuokkis bøyes čuokk→čuogg») → IKKE globalt, men
  skriv **regelen** i «Regel/lærdom». Disse blir eksempler som lærer modellen riktig mønster.
- **Ordvalg/flyt** (gyldig ord, men feil/unaturlig her) → rapporter med kort notat. Dette er
  det verktøyene *ikke* fanger, og der din morsmålskompetanse betyr mest.

Fargene i teksten viser hvor KI-en er usikker: 🟠 = litt usikker (trolig bøyingsform),
🔴 = svært usikker (konstruert ord, eller markert «(no: …)» fordi vi ikke fant samisk term).

---

## Det som mest sannsynlig trenger retting, per kapittel

### 1t-1-1 Fortegn og regnerekkefølge — *nesten ren*
- Ingen usikre samiske ord. De eneste flaggene er den **engelske huskeregelen** «Please Excuse
  My Dear Aunt Sally (PEMDAS)» som står slik i bokmål-originalen. **Vurdér:** finnes en bedre
  samisk huskeregel for regnerekkefølgen, eller bør den engelske bli stående?
- Bekreft gjerne: `nubbiruohtas` (kvadratrot) og `nubbi-` der Divvun foreslår `nuppi-` — vi har
  fulgt termbasen. Si fra hvis termbasen er utdatert her.

### 1t-1-2 Potenser — *ren*
- 🔴 «(no: heltallseksponenter)» — vi mangler samisk term for **heltallseksponent**. Foreslå term (globalt).

### 1t-1-3 Algebra
- 🔴 `algebrálaš` (algebraisk) — konstruert adjektiv, ikke i termbasen. Riktig form? (globalt)
- 🟠 `bustáviiguin` / `bustáviid` (bokstav, komitativ/akkusativ pl.) → Divvun foreslår
  `bustávaiguin` / `bustávaid`. Bekreft kasusformen (regel: diftong-bøying av *bustávva*).

### 1t-1-4 Brøkregning
- 🔴 Termer vi mangler (foreslå, globalt): **utvide (brøk)**, **faktorisere**, **minste felles nevner**.
- 🟠/grammatikk: bekreft `jorggu cuovka` (omvendt brøk) — termbasen vinner over Divvun her.

### 1t-1-5 Faktorisering og kvadratsetningene
- 🔴 `konjugatláhka` (konjugatsetningen) — konstruert. Riktig term? (globalt)
- 🔴 `Álgologu-buvttat` / `álgologu-buvttadit` (primtallsfaktorisere) — konstruert sammensetning + imperativ.
- 🟠 `Čoavde` → `Čoavdde` (imperativ «løs»), `lađasa` → `lađđasa` (ledd, gradering đ→đđ), `algebralaš`.

### 1t-1-6 Rasjonale uttrykk
- 🔴 «(no: konjugatsetningen)» — samme term som i 1.5 (definér én gang, globalt).
- 🟠 `Čoahkkáigeasa` (imperativ «trekk sammen») → Divvun vil ha `Čoahkkáigease`. Bekreft imperativform.
- 🟠 `čoavddusa` (kasus av løsning), `algebralaš`.
- **Ordvalg å sjekke:** brukes verbet `buvttat` riktig for «faktorisere», eller skal det være `buvttadit`?

### 1t-1-7 Mengdelære — *mest å gå gjennom*
- 🔴 Termer vi mangler (globalt): **mengde(lære)**, **disjunkte**. (Vi bruker `doahkki` for mengde —
  bekreft, og bekreft graderingen `doahkki`→`doahki` i bøyde former.)
- 🟠 Gjennomgående **gradering** å bekrefte (én regel dekker mange): `čuokkis` → `čuogg-` i bøying
  (`loahppačuokkážiid` → `loahppačuoggážiid`, `čuokkážiid` → `čuoggážiid`).
- 🟠 `lohkosáhcus` → `lohkosáhccus` (tallinje, gradering c→cc), `áhtaid` → `áhtiid` (element pl.),
  `Geahčemeahttuna` (kasus av «uendelig»), `bissehuvvá` → `bissehuvvo`.

### 1t-1-8 Polynomdivisjon (intro)
- 🔴 Termer vi mangler (globalt): **polynomdivisjon**, **lang divisjon**.
- 🟠 `algebralaš`.
- **Kasus å sjekke:** konstruksjoner som «Juoge $x^2$ $x$:in» / «$(x^2+5x+6)$:s» (tall-symbol + kasusendelse).

### 1t-1-9 Polynomdivisjon (lineær divisor) — *mest å gå gjennom*
- 🔴 Termer vi mangler (globalt): **polynomdivisjon**, **faktorteoremet**, **restteoremet**,
  **nullpunkt(er)**, **heltallskoeffisienter**, **uten rest**, **lineær (divisor)**.
- 🟠 `nullačuokkáža` / `Nullačuokkážiid` osv. → samme `čuokkis`-gradering som 1.7
  (`nullačuoggáža`). `lađasa` → `lađđasa`. `fáktorastimii` (bøying av faktorisering),
  `juohkkekeahttá`, `ođđasitčállimii` → `ođđasiidčállimii`.
- Bekreft `gorri` (kvotient) og `juohkki` (divisor) — termbase-ord Divvun stusser på.

---

## Gjentakende mønstre (størst gevinst å rette først)

Disse går igjen på tvers av kapitler — én avgjørelse fikser mange steder:
1. **`čuokkis`-gradering** (čuokk→čuogg i bøyde former): 1.7 + 1.9, ~12 forekomster. Én regel.
2. **`algebralaš`** (algebraisk): 1.3, 1.5, 1.6, 1.8. Én term globalt.
3. **Manglende termer** som går igjen: *konjugatsetning* (1.5, 1.6), *polynomdivisjon* (1.8, 1.9).
   Definér hver én gang globalt → auto-rettes overalt.
4. **`nubbi`/`nuppi`** og **`lea`/`leat`**-flagg fra GramDivvun: oftest bekreft at termbasen
   vinner (ingen retting) — gå raskt gjennom.
