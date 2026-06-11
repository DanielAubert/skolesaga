# Skolesaga

Gratis interaktive lærebøker for norsk skole med øvingsoppgaver, quiz og fremgangsregistrering.

## Funksjoner

- **140+ lærebøker** - Komplette lærebøker for alle fag fra 5. klasse til VG3, inkludert programfag og yrkesfag
- **5200+ kapitler** - Teori, eksempler og oppgaver tilpasset LK20-kompetansemålene
- **32 500+ oppgaver** - Interaktive øvingsoppgaver med umiddelbar tilbakemelding og algebraisk svarvalidering
- **900+ narrative kapitler** - Fortellende kapittelversjoner med quiz og lydbok
- **Quiz og flashcards** - Kapittelquizer, gigaquiz og flashcards med repetisjonssystem
- **Python & GeoGebra** - Egne lærebøker med Python i nettleseren (Pyodide) og GeoGebra-øvelser
- **Fremgangsregistrering** - Følg med på utviklingen din per kapittel, oppgave og ferdighetsnivå
- **Lærerverktøy** - Dashbord for lærere med klasser, oppgavetildeling og oversikt over elevenes fremgang
- **Selvtester** - Personlighetstest, læringsstil, yrkesinteresser, hoderegningstrening og poengkalkulator
- **LK20-tilpasset** - Alt innhold er knyttet til gjeldende læreplan med kompetansemål per kapittel

## Teknologi

- **Framework**: Next.js 16 med App Router, React 19 og Turbopack
- **UI**: shadcn/ui komponenter med Tailwind CSS v4
- **Matematikk**: KaTeX og MathLive for visning og input, mathjs for svarvalidering
- **Programmering**: Pyodide (Python i nettleseren) med Monaco-editor
- **Database**: Supabase (PostgreSQL)
- **Autentisering**: NextAuth.js med Supabase Adapter (Google og Feide OAuth)

## Kom i gang

### 1. Installer avhengigheter

```bash
npm install
```

### 2. Konfigurer miljøvariabler

Kopier `.env.example` til `.env.local` og fyll inn verdiene:

```bash
cp .env.example .env.local
```

Nødvendige variabler:
- `NEXT_PUBLIC_SUPABASE_URL` - Din Supabase prosjekt-URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Din Supabase anon nøkkel
- `SUPABASE_SERVICE_ROLE_KEY` - Din Supabase service role nøkkel (for server-side)
- `NEXTAUTH_SECRET` - En tilfeldig streng for kryptering av sessions
- `NEXTAUTH_URL` - URL til applikasjonen (f.eks. http://localhost:3000)

Valgfrie variabler:
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` - Google OAuth-innlogging
- `FEIDE_CLIENT_ID` / `FEIDE_CLIENT_SECRET` - Feide OAuth-innlogging
- `ANTHROPIC_API_KEY` - AI-retting av prøver
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics

### 3. Sett opp Supabase

Se `docs/database-schema.md` for database-skjema og oppsett.

### 4. Start utviklingsserver

```bash
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

## Kommandoer

| Kommando | Beskrivelse |
|----------|-------------|
| `npm run dev` | Start utviklingsserver med Turbopack |
| `npm run build` | Bygg for produksjon (kjører først `scripts/combine-chapters.js` som slår sammen kapitteldata) |
| `npm run start` | Start produksjonsserver |
| `npm run lint` | Kjør ESLint |
| `npx tsc --noEmit` | Typesjekk uten å generere filer |

## Mappestruktur

```
src/
├── app/                        # Next.js App Router
│   ├── page.tsx               # Landing page
│   ├── bok/                   # Lærebøker (bok/[courseId]/[chapterId])
│   │                          #   med quiz, trening, flashcards og kompetansemål
│   ├── book/                  # Python-lærebok
│   ├── geogebra/              # GeoGebra-lærebok
│   ├── quiz/                  # Quiz-oversikt og gigaquiz
│   ├── dashboard/             # Dashbord for elev, lærer og admin
│   ├── test-deg-selv/         # Selvtester (personlighet, læringsstil m.m.)
│   ├── hoderegning/           # Hoderegningstrening
│   ├── poengkalkulator/       # Poengkalkulator for vitnemål
│   └── api/                   # API-ruter (fremgang, klasser, oppgaver m.m.)
├── components/                 # React-komponenter
│   ├── ui/                    # shadcn/ui komponenter
│   ├── textbook/              # Lærebok-komponenter (oppgavetyper, grafer m.m.)
│   ├── navigation/            # Navigasjons-komponenter
│   └── ...                    # Dashbord-, quiz- og layout-komponenter
└── lib/                        # Hjelpefunksjoner og data
    ├── data/                  # Lærebok-innhold
    │   ├── chapters/          # Kapittelfiler (JSON, inkl. narrative versjoner)
    │   └── textbook-courses-*.ts  # Kursdefinisjoner per trinn/fagområde
    └── auth/                  # Autentisering

scripts/                        # Verktøy for innholdsproduksjon
                                # (kapittelgenerering, forsidebilder, lydbøker)
docs/                           # Database-skjema og innholdsdokumentasjon
public/
├── images/                     # Forsidebilder og illustrasjoner
└── audio/                      # Lydbok-segmenter (1T, 2P, historie)
```

## Lisens

Alle rettigheter forbeholdt © 2026 Skolesaga
