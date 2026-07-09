# Database-skjema for Skolesaga

Skolesaga bruker Supabase (PostgreSQL) for lagring av brukerdata og fremgang.

## Tabeller

### users

Brukerinformasjon for autentiserte brukere.

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  image TEXT,
  role TEXT DEFAULT 'student', -- 'student', 'teacher', 'admin'
  school_id UUID REFERENCES schools(id),
  marketing_consent BOOLEAN NOT NULL DEFAULT false, -- samtykke til markedsførings-e-post (mfl. § 15)
  marketing_consent_at TIMESTAMPTZ, -- når samtykket sist ble endret (dokumentasjonskrav)
  marketing_consent_source TEXT, -- 'signup' eller 'profil'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

Merk: `marketing_consent` styrer kun reklame/nyhetsbrev. Nødvendige meldinger
(vilkårsoppdateringer, kontoinformasjon) kan sendes til alle brukere uavhengig
av dette feltet. E-postlister eksporteres fra `/api/admin/users/export`.

### user_saved_items

Lagrede elementer per bruker: «nylig sett» (Fortsett der du slapp på dashbordet)
og favoritter. Skrives fra `/api/user/saved-items`; besøk spores av
`TrackRecentVisit`-komponenten på bok- og kapittelsider. Maks 10 `recent` per
bruker (beskjæres ved innsetting).

```sql
CREATE TABLE user_saved_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK (kind IN ('favorite','recent')),
  item_type TEXT NOT NULL DEFAULT 'book', -- 'book' | 'chapter'
  item_id TEXT NOT NULL, -- courseId eller courseId/chapterId
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, kind, item_id)
);
```

### schools

Skoler for organisering av lærere og elever.

```sql
CREATE TABLE schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### textbook_submissions

Innsendte svar på oppgaver i lærebøkene.

```sql
CREATE TABLE textbook_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  chapter_id TEXT NOT NULL,
  exercise_id TEXT NOT NULL,
  subtask_id TEXT,
  answer JSONB NOT NULL,
  is_correct BOOLEAN,
  feedback TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_submissions_user ON textbook_submissions(user_id);
CREATE INDEX idx_submissions_chapter ON textbook_submissions(course_id, chapter_id);
```

### textbook_chapter_progress

Fremgang per kapittel per bruker.

```sql
CREATE TABLE textbook_chapter_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  chapter_id TEXT NOT NULL,
  completed_exercises INTEGER DEFAULT 0,
  total_exercises INTEGER DEFAULT 0,
  last_activity TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id, chapter_id)
);

CREATE INDEX idx_chapter_progress_user ON textbook_chapter_progress(user_id);
```

### textbook_subtask_progress

Detaljert fremgang per deloppgave.

```sql
CREATE TABLE textbook_subtask_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  chapter_id TEXT NOT NULL,
  exercise_id TEXT NOT NULL,
  subtask_id TEXT NOT NULL,
  status TEXT DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed'
  attempts INTEGER DEFAULT 0,
  last_attempt TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id, chapter_id, exercise_id, subtask_id)
);

CREATE INDEX idx_subtask_progress_user ON textbook_subtask_progress(user_id);
CREATE INDEX idx_subtask_progress_exercise ON textbook_subtask_progress(course_id, chapter_id, exercise_id);
```

### quiz_results

Resultater fra quiz-modulen.

```sql
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  course_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  answers JSONB NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_quiz_results_user ON quiz_results(user_id);
CREATE INDEX idx_quiz_results_quiz ON quiz_results(quiz_id);
CREATE INDEX idx_quiz_results_course ON quiz_results(course_id);
```

**Migrasjon fra gammel versjon** (hvis tabellen allerede eksisterer):
```sql
ALTER TABLE quiz_results ADD COLUMN IF NOT EXISTS course_id TEXT;
UPDATE quiz_results SET course_id = '' WHERE course_id IS NULL;
ALTER TABLE quiz_results ALTER COLUMN course_id SET NOT NULL;
CREATE INDEX IF NOT EXISTS idx_quiz_results_quiz ON quiz_results(quiz_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_course ON quiz_results(course_id);
```

### content_feedback

Tilbakemeldinger fra brukere («Meld feil eller forbedring»-knappen i kapitlene).
All lesing og skriving går gjennom `/api/feedback` med service role-nøkkel, så
tabellen trenger ingen anon/authenticated-policies — bare aktivert RLS.

```sql
CREATE TABLE content_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL CHECK (category IN ('feil', 'forbedring')),
  message TEXT NOT NULL,
  course_id TEXT,
  chapter_id TEXT,
  chapter_title TEXT,
  page_url TEXT,
  contact_email TEXT,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'ny' CHECK (status IN ('ny', 'under-arbeid', 'lost', 'avvist')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_content_feedback_status ON content_feedback(status);
CREATE INDEX idx_content_feedback_chapter ON content_feedback(chapter_id);

ALTER TABLE content_feedback ENABLE ROW LEVEL SECURITY;
```

## Row Level Security (RLS)

For sikkerhet bør RLS aktiveres på alle tabeller:

```sql
-- Aktiver RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE textbook_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE textbook_chapter_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE textbook_subtask_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- Brukere kan bare se egen data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can view own submissions" ON textbook_submissions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own submissions" ON textbook_submissions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own progress" ON textbook_chapter_progress
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own subtask progress" ON textbook_subtask_progress
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own quiz results" ON quiz_results
  FOR ALL USING (auth.uid() = user_id);

-- Lærere kan se elevenes fremgang
CREATE POLICY "Teachers can view student progress" ON textbook_chapter_progress
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users WHERE id = auth.uid() AND role = 'teacher'
    )
  );
```

## Oppsett i Supabase

1. Opprett et nytt prosjekt på [supabase.com](https://supabase.com)
2. Gå til SQL Editor
3. Kjør SQL-skriptene ovenfor for å opprette tabellene
4. Aktiver Row Level Security og opprett policies
5. Kopier prosjekt-URL og API-nøkler til `.env.local`

## Migrering fra eksisterende database

Hvis du migrerer fra en eksisterende eksamenssett.no database, kan du dele Supabase-instansen. Lærebok-tabellene er separate fra eksamen-tabellene.
