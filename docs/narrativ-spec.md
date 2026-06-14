# Felles spesifikasjon: narrative versjoner av matematikk-kapitler

## Mål
For hvert tildelt kapittel `<cid>` skal du lage filen
/Users/danielandreasaubert/eksamenssett/Skolesaga/src/lib/data/chapters/<cid>-narrativ.json
— en fortellende, lesevennlig versjon optimalisert for mobil/lytting. INGEN lydblokker (lydbok genereres senere).

## Filformat (kompakt JSON: ensure_ascii=False, separators=(',', ':'))
Toppfelter (kopier mønsteret fra eksisterende, f.eks. 8-1-1-narrativ.json — LES DEN FØRST):
{"id":"<cid>-narrativ","courseId":"<bok>","chapterNumber":"<samme>","title":"<samme som original>","subtitle":"Narrativ versjon","description":"<ny, engasjerende: 'En fortelling om ...'>","estimatedMinutes":<ca 60-70% av original>,"competenceGoals":[<samme>],"linkedChapterId":"<cid>","content":[...],"exercises":[]}

## Innholdsstruktur (la pensum styre antall seksjoner/quizer)
intro (text) → section1 (text) → quiz1 (exercise) → section2 → quiz2 → ... → summary (text)
- ID-er: <cid>-n-intro, <cid>-n-section1, <cid>-n-quiz1, <cid>-n-summary
- Tekstblokker: 150-400 ord, markdown med ## overskrift, prosa (IKKE kulepunktlister), «du/vi»-stil, start med scenario/spørsmål fra elevens hverdag. Matematikk skrives med LaTeX ($...$) som vanlig, men vevd inn i fortellingen.
- ALL faglig substans fra originalkapittelet skal med: definisjoner og eksempler veves inn i prosaen (les originalen nøye). Repetisjonsseksjonen i originalen skal IKKE gjenfortelles.
- summary: avsluttende seksjon med ## overskrift som oppsummerer fortellingen og nøkkelbegrepene i prosa.

## Quiz-format (sekvensiell flervalg)
{"id":"<cid>-n-quiz1","type":"exercise","exercise":{"id":"<cid>-n-quiz1","number":"Quiz 1","type":"multiple-choice","task":"Test deg selv på <tema>:","options":[{"id":"a","text":"placeholder","isCorrect":true}],"questions":[{"id":"<cid>-n-quiz1-q0","task":"...","options":[{"id":"a","text":"...","isCorrect":false},{"id":"b","text":"...","isCorrect":true},{"id":"c","text":"...","isCorrect":false},{"id":"d","text":"...","isCorrect":false}],"solution":"Forklaring."}, ...]}}
- Antall spørsmål per quiz: 2-6, styrt av seksjonens innhold; ett distinkt konsept per spørsmål; VARIER posisjonen til riktig svar (a-d); plausible distraktorer; progressiv vanskelighet.
- All matematikk i quizene skal være kontrollregnet.

## Regler
- Opprett KUN <cid>-narrativ.json-filer for dine tildelte kapitler. IKKE rør originalkapitler, _registry.json, textbook-courses-*.ts eller quiz-filer (registrering gjøres sentralt). IKKE kjør npm run build. IKKE lag lydblokker.
- Les 1-2 eksisterende narrativ-filer fra 8/9/10-bøkene først og match stil og struktur.
- Valider til slutt: json.load på alle nye filer, unike id-er, balansert $-antall, at linkedChapterId og alle påkrevde toppfelter finnes.
- Rapport: antall kapitler, antall quizer/spørsmål totalt, eventuelle problemer.
