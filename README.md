# Skolesaga

Gratis interaktive lærebøker for norsk skole med øvingsoppgaver, quiz og fremgangsregistrering.

## Funksjoner

- **60+ lærebøker** - Komplette lærebøker for alle fag fra 5. klasse til VG3
- **5000+ oppgaver** - Interaktive øvingsoppgaver med umiddelbar tilbakemelding
- **Python & GeoGebra** - Integrerte verktøy for programmering og visualisering
- **Fremgangsregistrering** - Følg med på utviklingen din
- **Lærerverktøy** - Dashbord for lærere med oversikt over klassens fremgang
- **LK20-tilpasset** - Alt innhold er tilpasset gjeldende læreplan

## Teknologi

- **Framework**: Next.js 15 med App Router og React Server Components
- **UI**: shadcn/ui komponenter med Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Autentisering**: NextAuth.js med Supabase Adapter

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
| `npm run build` | Bygg for produksjon |
| `npm run start` | Start produksjonsserver |
| `npm run lint` | Kjør ESLint |

## Mappestruktur

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── bok/               # Lærebok-sider
│   ├── book/              # Python-lærebok
│   └── geogebra/          # GeoGebra-lærebok
├── components/            # React-komponenter
│   ├── ui/               # shadcn/ui komponenter
│   ├── textbook/         # Lærebok-komponenter
│   └── navigation/       # Navigasjons-komponenter
└── lib/                   # Hjelpefunksjoner og data
    ├── data/             # Lærebok-innhold
    └── auth/             # Autentisering
```

## Lisens

Alle rettigheter forbeholdt © 2025 Skolesaga
