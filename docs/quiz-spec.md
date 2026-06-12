# Felles spesifikasjon: quiz for matematikkbok

## Format og fil
- Quizdata ligger i /Users/danielandreasaubert/eksamenssett/Skolesaga/src/lib/data/quiz-data-<BOK>.ts
- Strukturen er `Record<string, QuizQuestion[]>` der NØKKELEN ER KAPITTEL-ID-EN NØYAKTIG slik den står i kapittel-JSON (f.eks. '5-1-1', 's1-3-2') — sjekk mot filnavnene i src/lib/data/chapters/.
- QuizQuestion: { question: string, options: string[], explanation?: string } — **FØRSTE option er ALLTID riktig svar** (UI-et stokker dem).
- 5 spørsmål per kapittel. options skal ha 4 plausible alternativer (typiske feilsvar som distraktorer).
- LaTeX i strenger: bruk doble backslasher ('$K = K_0 \\cdot (1+r)^n$') eller unicode (²,³,√,⁻) — velg unicode der det er enklere. Escape apostrof i norske ord med \'.
- IKKE slett eller endre eksisterende nøkler (heller ikke gamle med annet id-format — de er legacy og ryddes separat). Legg nye nøkler til rett før avsluttende `};`.
- Eksisterende stil: se quiz-data-1p.ts for tone og vanskelighetsgrad.

## Innhold
- Les kapittelets JSON (tittel, definisjoner, eksempler) og lag spørsmål som dekker kapittelets faktiske innhold: 1-2 begrepsspørsmål, 2-3 regnespørsmål, 1 anvendelse/feilforståelse.
- ALL matematikk skal være korrekt — kontrollregn hvert riktig svar OG sjekk at ingen distraktor ved et uhell også er riktig.

## Validering og avslutning
- Kjør `npx tsc --noEmit` til slutt (rene typefeil i DIN fil må fikses; feil i andres filer ignoreres og rapporteres).
- IKKE rediger quiz-data.ts (imports håndteres sentralt), IKKE kjør npm run build.
- Rapport: antall kapitler dekket, antall spørsmål, eventuelle kapitler hoppet over med grunn.
