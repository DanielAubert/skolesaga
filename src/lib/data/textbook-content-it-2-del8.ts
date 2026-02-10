/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 2 (IT 2) VG3
 *
 * Seksjon 8: Systemutvikling og prosjekt (Kapittel 8.1–8.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.1: Systemutviklingsmetoder
// ============================================================================

export const CHAPTER_IT_2_8_1: TextbookChapter = {
  id: 'it-2-8-1',
  courseId: 'it-2',
  title: 'Systemutviklingsmetoder',
  chapterNumber: '8.1',
  section: 8,
  content: [
    {
      id: 'it2-8-1-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Når vi utvikler større programvaresystemer, trenger vi strukturerte metoder for å planlegge, organisere og gjennomføre arbeidet. Ulike systemutviklingsmetoder gir oss forskjellige rammeverk for hvordan vi kan jobbe effektivt i team, håndtere endringer og levere kvalitetsprodukter.

I dette kapittelet skal vi se på de mest brukte metodene i moderne programvareutvikling – fra tradisjonelle fossefallsmodeller til smidige metoder som Scrum og Kanban.`,
    },
    {
      id: 'it2-8-1-theory',
      type: 'text',
      title: 'Teori',
      content: `**Fossefallsmodellen (Waterfall)**

Fossefallsmodellen er en tradisjonell, sekvensiell tilnærming der utviklingsprosjektet deles inn i faser som må fullføres i rekkefølge:

1. **Kravspesifikasjon** – Alle krav samles inn og dokumenteres
2. **Design** – Systemarkitektur og detaljert design planlegges
3. **Implementering** – Koden skrives basert på designet
4. **Testing** – Systemet testes mot kravene
5. **Vedlikehold** – Systemet settes i drift og vedlikeholdes

*Fordeler:* Strukturert, god dokumentasjon, klar progresjon, enkel planlegging
*Ulemper:* Lite fleksibel, vanskelig å endre krav underveis, sen tilbakemelding fra brukere

**Smidig/agil utvikling (Agile)**

Agile metoder fokuserer på:
- Iterativ utvikling i korte sykluser (sprints/iterasjoner)
- Tett samarbeid med kunde/bruker
- Rask respons på endringer
- Fungerende programvare fremfor omfattende dokumentasjon
- Kontinuerlig forbedring

*Fordeler:* Fleksibel, tidlig verdi til kunde, bedre risikohåndtering
*Ulemper:* Krever erfarne team, kan være utfordrende å estimere sluttdato

**Scrum**

Scrum er et rammeverk for agil utvikling med følgende roller og elementer:

**Roller:**
- **Product Owner** – Representerer kunden, prioriterer funksjonalitet
- **Scrum Master** – Fasiliterer prosessen, fjerner hindringer
- **Utviklingsteam** – Selvorganiserende team som leverer produktet

**Artefakter:**
- **Product Backlog** – Prioritert liste over all ønsket funksjonalitet
- **Sprint Backlog** – Oppgaver valgt for nåværende sprint
- **Increment** – Fungerende produkt etter hver sprint

**Seremonier:**
- **Sprint Planning** – Planlegging av kommende sprint (1-4 uker)
- **Daily Standup** – Daglig 15-minutters møte
- **Sprint Review** – Demo av ferdig funksjonalitet
- **Sprint Retrospective** – Evaluering av prosess og forbedringspunkter

**Kanban**

Kanban er en metode for å visualisere og optimalisere arbeidsflyt:

- **Kanban-tavle** – Kolonner representerer arbeidsstadier (To Do, In Progress, Testing, Done)
- **Work In Progress (WIP) limits** – Begrenser antall oppgaver i hver kolonne
- **Pull-system** – Team henter nye oppgaver når kapasitet er ledig
- **Kontinuerlig flyt** – Ingen faste sprints, oppgaver flyter gjennom systemet

*Når brukes Kanban:* Support-team, vedlikeholdsarbeid, kontinuerlig leveranse

**DevOps**

DevOps er en kultur og praksis som bryter ned siloen mellom utvikling (Dev) og drift (Ops):

**Prinsipper:**
- Automatisering av bygg, testing og deployment
- Kontinuerlig integrasjon (CI) og kontinuerlig leveranse (CD)
- Infrastruktur som kode
- Monitoring og logging i produksjon
- Rask feedback-loop

**Verktøy:** Git, Jenkins, Docker, Kubernetes, Ansible, Prometheus`,
    },
    {
      id: 'it2-8-1-example',
      type: 'example',
      title: 'Eksempel: Sammenligning av metoder',
      content: `**Scenario:** Et team skal utvikle en nettbutikk

**Med Fossefallsmodellen:**
1. Måned 1-2: Intervjue kunde, skrive komplett kravspesifikasjon
2. Måned 3: Designe databaseskjema og systemarkitektur
3. Måned 4-6: Utvikle komplett løsning
4. Måned 7: Testing av hele systemet
5. Måned 8: Lansering

*Problem:* Kunden ser ikke produktet før måned 7-8. Hvis kravene var misforstått, oppdages det sent.

**Med Scrum:**
Sprint 1 (2 uker): Enkelt produktkatalog med bilder og priser
Sprint 2: Handlekurv og registrering av brukere
Sprint 3: Betalingsintegrasjon (forenklet)
Sprint 4: Ordrehistorikk og kvitteringer
Sprint 5: Søkefunksjonalitet
Sprint 6: Anmeldelser og vurderinger

*Fordel:* Kunden ser fungerende versjon etter 2 uker og kan gi tilbakemelding. Prioriteringer kan justeres underveis.

**Med Kanban:**
Team jobber kontinuerlig med oppgaver:
- [To Do] → [In Progress] → [Code Review] → [Testing] → [Done]
- WIP limit på "In Progress": Max 3 oppgaver samtidig
- Nye bugs og features legges til [To Do] og prioriteres løpende
- Ingen faste sprints, men kontinuerlig leveranse til produksjon

*Egnet for:* Team som må håndtere både nye features og akutte bugs.`,
    },
    {
      id: 'it2-8-1-exercises',
      type: 'text',
      title: 'Oppgaver',
      content: `**Oppgave 1 (Flervalg)**
Hva er hovedforskjellen mellom fossefallsmodellen og agile metoder?

A) Fossefallsmodellen bruker sprints, agile bruker faser
B) Fossefallsmodellen er sekvensiell, agile er iterativ
C) Fossefallsmodellen krever mer erfaring
D) Fossefallsmodellen er alltid raskere

**Oppgave 2 (Flervalg)**
Hvilken rolle i Scrum har ansvar for å prioritere Product Backlog?

A) Scrum Master
B) Utviklingsteam
C) Product Owner
D) CEO

**Oppgave 3**
Forklar kort hva "Daily Standup" er i Scrum, og hvorfor møtet holdes stående.

**Oppgave 4**
Et utviklingsteam jobber med vedlikehold av et eksisterende system. De får både planlagte features og akutte bugs. Hvilken metode (Scrum eller Kanban) ville du anbefalt, og hvorfor?

**Oppgave 5**
Beskriv kort hva WIP-limits er i Kanban, og hvorfor de er nyttige.

**Oppgave 6**
Hva er hovedforskjellen mellom Sprint Review og Sprint Retrospective i Scrum?

**Oppgave 7**
Nevn to fordeler og to ulemper med fossefallsmodellen sammenlignet med agile metoder.

**Oppgave 8**
Forklar kort hva DevOps er, og hvordan det skiller seg fra tradisjonell utvikling.

// --- Samleoppgaver ---

**Samleoppgave 1**
Dere skal utvikle en app for en ungdomsskole der elever kan registrere fravær, se timeplan og motta beskjeder. Skolen har gitt dere en liste med 25 ønsker om funksjonalitet, men budsjettet dekker kun 6 måneders arbeid for et team på 3 personer.

a) Hvilken systemutviklingsmetode ville du valgt? Begrunn svaret.
b) Skissér en plan for de første fire ukene av prosjektet.
c) Hvordan ville du prioritert hvilken funksjonalitet som utvikles først?

**Samleoppgave 2**
Et team bruker Scrum med 2-ukers sprints. I Sprint 3 oppdager de at en teknisk beslutning fra Sprint 1 gjør det svært vanskelig å implementere en viktig feature.

a) Hva er fordelene med at dette oppdages i Sprint 3, fremfor etter 6 måneders utvikling?
b) Forklar hvordan teamet kan håndtere dette problemet i Scrum-rammeverket.
c) Hvilken Scrum-seremoni er mest relevant for å diskutere denne type problemer?`,
    },
  ],
  exercises: [],
  keyTerms: [
    'Fossefallsmodellen',
    'Agil/smidig utvikling',
    'Scrum',
    'Product Owner',
    'Sprint',
    'Kanban',
    'WIP-limits',
    'DevOps',
  ],
  estimatedMinutes: 50,
  prevChapter: 'it-2-7-5',
  nextChapter: 'it-2-8-2',
};

// ============================================================================
// KAPITTEL 8.2: Testing og kvalitetssikring
// ============================================================================

export const CHAPTER_IT_2_8_2: TextbookChapter = {
  id: 'it-2-8-2',
  courseId: 'it-2',
  title: 'Testing og kvalitetssikring',
  chapterNumber: '8.2',
  section: 8,
  content: [
    {
      id: 'it2-8-2-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Testing er en kritisk del av programvareutvikling. Godt testede programmer har færre feil, er enklere å vedlikeholde og gir utviklere trygghet når de gjør endringer. I dette kapittelet skal vi se på ulike typer testing – fra enhetstester av individuelle funksjoner til integrasjonstester av hele systemet.

Vi skal også se på Test-Driven Development (TDD) og betydningen av code review for kvalitetssikring.`,
    },
    {
      id: 'it2-8-2-theory',
      type: 'text',
      title: 'Teori',
      content: `**Testpiramiden**

Testpiramiden viser hvordan ulike typer tester bør balanseres:

\`\`\`
       /\\
      /  \\     E2E tests (få)
     /____\\
    /      \\   Integrasjonstester (middels)
   /________\\
  /          \\ Enhetstester (mange)
 /____________\\
\`\`\`

**Enhetstester (Unit tests)**

Tester én enkelt funksjon eller metode isolert:
- Rask kjøretid (millisekunder)
- Enkle å skrive og vedlikeholde
- Finner bugs tidlig
- Fungerer som dokumentasjon av forventet oppførsel

**Biblioteker:** unittest (Python standard), pytest

**Integrasjonstester**

Tester samspillet mellom flere komponenter:
- Database + backend
- API + frontend
- Flere moduler sammen

**End-to-End (E2E) tester**

Tester hele systemet fra brukerens perspektiv:
- Simulerer ekte brukerscenarier
- Treg kjøretid (sekunder/minutter)
- Mer kompleks å skrive og vedlikeholde
- Gir høyest tillit til at systemet fungerer

**Verktøy:** Selenium, Playwright, Cypress

**Test-Driven Development (TDD)**

TDD er en utviklingsmetode der tester skrives *før* koden:

1. **Red** – Skriv en test som feiler (funksjonen finnes ikke ennå)
2. **Green** – Skriv minimal kode for å få testen til å passere
3. **Refactor** – Forbedre koden uten å endre oppførsel

*Fordeler:*
- Tvinger deg til å tenke på grensesituasjoner
- All kode er testet by design
- Enklere å refaktorere senere

*Ulemper:*
- Tar lenger tid i starten
- Krever disiplin

**Code Review**

Code review er prosessen der andre utviklere leser og kommenterer koden din før den merges:

*Hva ser vi etter:*
- Logiske feil
- Manglende feilhåndtering
- Usikker kode (SQL injection, XSS)
- Dårlig navngiving eller struktur
- Manglende tester

*Best practices:*
- Hold pull requests små (< 400 linjer)
- Vær konstruktiv, ikke personangrep
- Forklar *hvorfor*, ikke bare *hva*
- Anerkjenn god kode

**Testdekningsgrad (Code Coverage)**

Måler hvor stor prosentandel av koden som kjøres av testene:
- 80-90% ansees som godt
- 100% er sjelden nødvendig eller praktisk
- Høy coverage garanterer ikke kvalitet, men lav coverage er et dårlig tegn`,
    },
    {
      id: 'it2-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Enhetstesting med unittest',
      content: `**Funksjon å teste:**

\`\`\`python
# calculator.py

def add(a, b):
    """Legger sammen to tall."""
    return a + b

def divide(a, b):
    """Deler a på b."""
    if b == 0:
        raise ValueError("Kan ikke dele på null")
    return a / b

def is_even(n):
    """Sjekker om et tall er partall."""
    return n % 2 == 0
\`\`\`

**Tester med unittest:**

\`\`\`python
# test_calculator.py
import unittest
from calculator import add, divide, is_even

class TestCalculator(unittest.TestCase):

    def test_add_positive_numbers(self):
        self.assertEqual(add(2, 3), 5)

    def test_add_negative_numbers(self):
        self.assertEqual(add(-2, -3), -5)

    def test_divide_normal(self):
        self.assertEqual(divide(10, 2), 5)

    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            divide(10, 0)

    def test_is_even_true(self):
        self.assertTrue(is_even(4))

    def test_is_even_false(self):
        self.assertFalse(is_even(5))

    def test_is_even_zero(self):
        self.assertTrue(is_even(0))

if __name__ == '__main__':
    unittest.main()
\`\`\`

**Kjøre testene:**
\`\`\`bash
python test_calculator.py -v
\`\`\`

**Output:**
\`\`\`
test_add_negative_numbers (__main__.TestCalculator) ... ok
test_add_positive_numbers (__main__.TestCalculator) ... ok
test_divide_by_zero (__main__.TestCalculator) ... ok
test_divide_normal (__main__.TestCalculator) ... ok
test_is_even_false (__main__.TestCalculator) ... ok
test_is_even_true (__main__.TestCalculator) ... ok
test_is_even_zero (__main__.TestCalculator) ... ok

----------------------------------------------------------------------
Ran 7 tests in 0.001s

OK
\`\`\``,
    },
    {
      id: 'it2-8-2-example-2',
      type: 'example',
      title: 'Eksempel: Enhetstesting med pytest',
      content: `Pytest er et populært alternativ med enklere syntaks:

\`\`\`python
# test_calculator_pytest.py
import pytest
from calculator import add, divide, is_even

def test_add_positive():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-2, -3) == -5

def test_divide_normal():
    assert divide(10, 2) == 5

def test_divide_by_zero():
    with pytest.raises(ValueError, match="Kan ikke dele på null"):
        divide(10, 0)

def test_is_even():
    assert is_even(4) == True
    assert is_even(5) == False
    assert is_even(0) == True

# Parametriserte tester - kjører samme test med forskjellige input
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
    (100, 200, 300),
])
def test_add_parametrized(a, b, expected):
    assert add(a, b) == expected
\`\`\`

**Kjøre pytest:**
\`\`\`bash
pytest test_calculator_pytest.py -v
\`\`\`

**Fordeler med pytest:**
- Enklere syntaks (bare \`assert\`, ikke \`self.assertEqual\`)
- Bedre feilmeldinger
- Parametriserte tester
- Fixtures for oppsett/nedriving`,
    },
    {
      id: 'it2-8-2-example-3',
      type: 'example',
      title: 'Eksempel: TDD i praksis',
      content: `**Oppgave:** Lag en funksjon \`validate_email(email)\` som returnerer True hvis e-post er gyldig.

**Steg 1 (Red) – Skriv test som feiler:**

\`\`\`python
# test_email.py
from email_validator import validate_email

def test_valid_email():
    assert validate_email("bruker@example.com") == True

def test_missing_at_sign():
    assert validate_email("brukerexample.com") == False

def test_missing_domain():
    assert validate_email("bruker@") == False
\`\`\`

Kjører testene → **FEIL** (funksjonen finnes ikke)

**Steg 2 (Green) – Skriv minimal kode:**

\`\`\`python
# email_validator.py
def validate_email(email):
    if '@' not in email:
        return False
    if email.endswith('@'):
        return False
    return True
\`\`\`

Kjører testene → **OK**

**Steg 3 (Refactor) – Forbedre koden:**

\`\`\`python
# email_validator.py
def validate_email(email):
    """Validerer e-postadresse."""
    if '@' not in email:
        return False

    parts = email.split('@')
    if len(parts) != 2:
        return False

    local, domain = parts
    if not local or not domain:
        return False

    if '.' not in domain:
        return False

    return True
\`\`\`

**Steg 4 – Legg til flere tester:**

\`\`\`python
def test_no_dot_in_domain():
    assert validate_email("bruker@example") == False

def test_multiple_at_signs():
    assert validate_email("bru@ker@example.com") == False
\`\`\`

Kjører testene → Oppdager at \`multiple_at_signs\` feiler → Forbedre koden → Gjenta`,
    },
    {
      id: 'it2-8-2-exercises',
      type: 'text',
      title: 'Oppgaver',
      content: `**Oppgave 1 (Flervalg)**
Hva er hovedformålet med enhetstester?

A) Teste hele systemet fra brukerens perspektiv
B) Teste én enkelt funksjon isolert
C) Teste samspillet mellom database og backend
D) Teste sikkerhet og ytelse

**Oppgave 2 (Flervalg)**
I hvilken rekkefølge utføres stegene i Test-Driven Development (TDD)?

A) Green → Red → Refactor
B) Refactor → Red → Green
C) Red → Green → Refactor
D) Red → Refactor → Green

**Oppgave 3**
Forklar kort forskjellen mellom enhetstester og integrasjonstester.

**Oppgave 4**
Skriv en unittest for denne funksjonen:

\`\`\`python
def is_palindrome(text):
    """Sjekker om en tekst er et palindrom."""
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]
\`\`\`

Test med minst tre forskjellige input (inkludert grensesituasjoner).

**Oppgave 5**
En funksjon \`get_grade(score)\` skal returnere karakter basert på poengsum:
- 90-100: "A"
- 80-89: "B"
- 60-79: "C"
- 0-59: "F"

Skriv pytest-tester for denne funksjonen (inkludert grenseverdier).

**Oppgave 6**
Hva er code coverage, og hvorfor er 100% coverage ikke alltid et meningsfullt mål?

**Oppgave 7**
Nevn tre ting du bør se etter når du gjør code review av en kollegas pull request.

**Oppgave 8**
Forklar kort hva "Red-Green-Refactor"-syklusen i TDD betyr.

// --- Samleoppgaver ---

**Samleoppgave 1**
Du har laget en \`BankAccount\`-klasse med metodene \`deposit()\`, \`withdraw()\` og \`get_balance()\`. Withdraw skal kaste en \`InsufficientFundsError\` hvis saldo er for lav.

a) Skriv komplette unittest-tester for alle tre metoder.
b) Inkluder minst én test som verifiserer at riktig exception kastes.
c) Legg til en test for grensesituasjonen der withdraw prøver å ta ut nøyaktig saldoen.

**Samleoppgave 2**
Et team har 70% testdekningsgrad på en Flask-webapplikasjon. Teamlederen krever 95% coverage før lansering.

a) Forklar hvorfor høy testdekningsgrad ikke garanterer feilfri kode.
b) Hvilke deler av en webapplikasjon er mest kritiske å teste grundig?
c) Hva er forskjellen på enhetstester og end-to-end-tester for en slik app?
d) Hvordan kan teamet bruke TDD for ny funksjonalitet fremover?`,
    },
  ],
  exercises: [],
  keyTerms: [
    'Enhetstester (unit tests)',
    'Integrasjonstester',
    'Test-Driven Development (TDD)',
    'unittest',
    'pytest',
    'Code review',
    'Testdekningsgrad (coverage)',
    'Red-Green-Refactor',
  ],
  estimatedMinutes: 55,
  prevChapter: 'it-2-8-1',
  nextChapter: 'it-2-8-3',
};

// ============================================================================
// KAPITTEL 8.3: Versjonskontroll og samarbeid
// ============================================================================

export const CHAPTER_IT_2_8_3: TextbookChapter = {
  id: 'it-2-8-3',
  courseId: 'it-2',
  title: 'Versjonskontroll og samarbeid',
  chapterNumber: '8.3',
  section: 8,
  content: [
    {
      id: 'it2-8-3-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Git er det dominerende verktøyet for versjonskontroll i moderne programvareutvikling. I dette kapittelet går vi dypere inn i avanserte Git-konsepter som branching, merging og pull requests – teknikker som er essensielle for effektivt teamarbeid.

Vi skal også se på GitHub Flow, en populær arbeidsflyt for kontinuerlig leveranse.`,
    },
    {
      id: 'it2-8-3-theory',
      type: 'text',
      title: 'Teori',
      content: `**Branching (Forgreining)**

En branch er en parallell versjon av kodebasen der du kan jobbe isolert uten å påvirke hovedversjonen (main/master).

**Vanlige branching-strategier:**

**Feature branches:**
- Én branch per ny feature
- Navnekonvensjon: \`feature/brukerprofil\`, \`feature/betaling\`
- Merges til main når ferdig

**Bugfix branches:**
- Navnekonvensjon: \`bugfix/login-crash\`, \`fix/null-pointer\`

**Release branches:**
- Forbereder en ny versjon til produksjon
- Navnekonvensjon: \`release/v2.1.0\`

**Hotfix branches:**
- Kritiske feil i produksjon som må fikses umiddelbart
- Navnekonvensjon: \`hotfix/security-patch\`

**Grunnleggende Git branch-kommandoer:**

\`\`\`bash
# Opprett og bytt til ny branch
git checkout -b feature/ny-funksjon

# Vis alle branches
git branch -a

# Bytt til eksisterende branch
git checkout main

# Slett branch (etter merge)
git branch -d feature/gammel-funksjon

# Tvungen sletting (vær forsiktig!)
git branch -D feature/forkastet-ide
\`\`\`

**Merging**

Merging kombinerer endringer fra én branch inn i en annen:

**Fast-forward merge:**
Når target branch ikke har nye commits siden branching:
\`\`\`bash
git checkout main
git merge feature/enkel-endring
\`\`\`

**Three-way merge:**
Når begge branches har nye commits:
- Git lager en merge commit som kombinerer endringene

**Merge conflicts:**
Oppstår når samme linje er endret i begge branches:

\`\`\`bash
git merge feature/konflikt
# CONFLICT (content): Merge conflict in app.py

# Åpne app.py og finn:
<<<<<<< HEAD
def greeting():
    return "Hei"
=======
def greeting():
    return "Hello"
>>>>>>> feature/konflikt
\`\`\`

**Løse konflikten:**
1. Rediger filen manuelt, velg riktig versjon (eller kombiner)
2. Fjern conflict markers (\`<<<<<<<\`, \`=======\`, \`>>>>>>>\`)
3. \`git add app.py\`
4. \`git commit\`

**Rebase (alternativ til merge)**

Rebase flytter dine commits til toppen av en annen branch:
\`\`\`bash
git checkout feature/min-branch
git rebase main
\`\`\`

*Fordel:* Lineær commit-historikk (renere enn merge commits)
*Ulempe:* Omskriver historikk (ikke bruk på public branches!)

**Pull Requests (PR) / Merge Requests (MR)**

En pull request er en forespørsel om å merge din branch til main:

**Typisk PR-flyt:**
1. Lag feature branch og commit endringer
2. Push branch til GitHub: \`git push origin feature/ny-funksjon\`
3. Åpne PR på GitHub
4. Be om code review fra teammedlemmer
5. Diskuter, gjør endringer basert på feedback
6. Når godkjent: Merge til main

**God PR-praksis:**
- Hold PRs små (< 400 linjer kode)
- Skriv beskrivende tittel og oppsummering
- Link til issue/ticket
- Inkluder screenshots for UI-endringer
- Sørg for at CI/CD-tester passerer

**GitHub Flow**

En enkel, branch-basert arbeidsflyt:

1. **Main er alltid deploybar** – All kode i main er produksjonsklar
2. **Lag descriptive branches** – \`feature/user-authentication\`
3. **Commit ofte** – Små, fokuserte commits
4. **Åpne PR tidlig** – Få tilbakemelding underveis
5. **Diskuter og gjennomgå** – Code review før merge
6. **Merge og deploy** – Automatisk deploy til produksjon etter merge

**Git best practices:**

- Commit ofte, push daglig
- Skriv gode commit messages: "Legg til validering av e-post", ikke "fix"
- Pull før du push (unngå konflikter)
- Bruk \`.gitignore\` for å ekskludere autogenererte filer
- ALDRI commit hemmeligheter (API-nøkler, passord)
- Bruk meaningful branch names`,
    },
    {
      id: 'it2-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Feature branch workflow',
      content: `**Scenario:** Du skal legge til en "Glemt passord"-funksjon i en Flask-app.

**Steg 1: Opprett branch**
\`\`\`bash
# Sørg for at main er oppdatert
git checkout main
git pull origin main

# Lag ny feature branch
git checkout -b feature/forgot-password
\`\`\`

**Steg 2: Gjør endringer**
\`\`\`bash
# Rediger nødvendige filer
# app.py, templates/forgot_password.html, etc.

# Commit endringer
git add app.py templates/forgot_password.html
git commit -m "Legg til forgot password-funksjonalitet

- Nytt endepunkt /forgot-password
- E-postvalidering
- Send reset-lenke på e-post
- Testdekning: test_forgot_password.py"
\`\`\`

**Steg 3: Push og åpne PR**
\`\`\`bash
# Push branch til GitHub
git push origin feature/forgot-password

# Gå til GitHub og åpne Pull Request
# Tittel: "Legg til glemt passord-funksjonalitet"
# Beskrivelse:
# "Implementerer forgot password-flow:
# - Bruker oppgir e-post
# - Mottar reset-lenke
# - Kan sette nytt passord
#
# Closes #45"
\`\`\`

**Steg 4: Code review og feedback**
Kollega kommenterer:
"Bør vi ha rate limiting på /forgot-password for å forhindre spam?"

Du gjør endringer:
\`\`\`bash
# Legg til rate limiting
git add app.py
git commit -m "Legg til rate limiting på forgot password (max 3/time)"
git push origin feature/forgot-password
# PR oppdateres automatisk
\`\`\`

**Steg 5: Merge**
Etter godkjenning:
\`\`\`bash
# På GitHub: Klikk "Merge pull request"
# Eller via kommandolinje:
git checkout main
git merge feature/forgot-password
git push origin main

# Slett branch (opprydding)
git branch -d feature/forgot-password
git push origin --delete feature/forgot-password
\`\`\``,
    },
    {
      id: 'it2-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Løse merge conflict',
      content: `**Scenario:** To utviklere har endret samme fil.

**Developer A** (på main):
\`\`\`python
# config.py
DATABASE_URL = "postgresql://localhost/myapp"
DEBUG = False
\`\`\`

**Developer B** (på feature/ny-database):
\`\`\`python
# config.py
DATABASE_URL = "postgresql://localhost/testdb"
DEBUG = True
\`\`\`

**Developer B prøver å merge:**
\`\`\`bash
git checkout main
git pull  # Får Developer A's endringer
git checkout feature/ny-database
git merge main

# Output:
Auto-merging config.py
CONFLICT (content): Merge conflict in config.py
Automatic merge failed; fix conflicts and then commit the result.
\`\`\`

**config.py ser nå slik ut:**
\`\`\`python
<<<<<<< HEAD
DATABASE_URL = "postgresql://localhost/testdb"
DEBUG = True
=======
DATABASE_URL = "postgresql://localhost/myapp"
DEBUG = False
>>>>>>> main
\`\`\`

**Løsning:**
Developer B diskuterer med Developer A og blir enige om riktig løsning:
\`\`\`python
# config.py (konflikt løst)
DATABASE_URL = "postgresql://localhost/myapp"
DEBUG = True  # Beholder DEBUG=True for testing
\`\`\`

**Fullfør merge:**
\`\`\`bash
git add config.py
git commit -m "Merge main og løs konflikt i config.py"
git push origin feature/ny-database
\`\`\``,
    },
    {
      id: 'it2-8-3-exercises',
      type: 'text',
      title: 'Oppgaver',
      content: `**Oppgave 1 (Flervalg)**
Hva er formålet med en feature branch?

A) Å publisere nye versjoner til produksjon
B) Å jobbe på ny funksjonalitet isolert fra main
C) Å fikse kritiske bugs i produksjon
D) Å slette gammel kode

**Oppgave 2 (Flervalg)**
Hva skjer når du kjører \`git merge feature/ny-funksjon\` fra main-branchen?

A) Main slettes og erstattes av feature/ny-funksjon
B) Endringer fra feature/ny-funksjon kombineres med main
C) Feature/ny-funksjon slettes
D) Alle commits i main forsvinner

**Oppgave 3**
Forklar kort hva en merge conflict er, og hvordan du løser den.

**Oppgave 4**
Skriv Git-kommandoene for å:
a) Opprette en ny branch kalt \`feature/login\`
b) Bytte til denne branchen
c) Merge den inn i main
d) Slette branchen etter merge

**Oppgave 5**
Hva er forskjellen mellom \`git merge\` og \`git rebase\`?

**Oppgave 6**
Nevn tre ting som kjennetegner en god pull request.

**Oppgave 7**
Forklar kort hva GitHub Flow er.

**Oppgave 8**
Hvorfor er det viktig å holde pull requests små (under 400 linjer)?

// --- Samleoppgaver ---

**Samleoppgave 1**
Du jobber på et team med 5 utviklere. Dere bruker GitHub Flow. Prosjektet er en nettbutikk.

a) Beskriv steg-for-steg hvordan du ville implementert en ny feature: "Kundeanmeldelser av produkter".
b) Hva gjør du hvis en kollega allerede har endret samme fil du jobber på?
c) Når i prosessen bør du be om code review?
d) Hva gjør du hvis CI/CD-testene feiler på din PR?

**Samleoppgave 2**
Et team opplever følgende situasjon:
- Developer A har jobbet på \`feature/search\` i 2 uker
- Main har fått 50 nye commits i mellomtiden
- Developer A prøver å merge, får 15 merge conflicts

a) Hvorfor oppstod så mange konflikter?
b) Forklar hvordan Developer A kunne unngått dette problemet.
c) Beskriv to strategier for å løse situasjonen nå.
d) Hvilke team-rutiner kunne forebygget problemet?`,
    },
  ],
  exercises: [],
  keyTerms: [
    'Branching',
    'Feature branch',
    'Merging',
    'Merge conflict',
    'Pull request (PR)',
    'GitHub Flow',
    'Rebase',
    'Code review',
  ],
  estimatedMinutes: 60,
  prevChapter: 'it-2-8-2',
  nextChapter: 'it-2-8-4',
};

// ============================================================================
// KAPITTEL 8.4: Dokumentasjon og vedlikehold
// ============================================================================

export const CHAPTER_IT_2_8_4: TextbookChapter = {
  id: 'it-2-8-4',
  courseId: 'it-2',
  title: 'Dokumentasjon og vedlikehold',
  chapterNumber: '8.4',
  section: 8,
  content: [
    {
      id: 'it2-8-4-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `God dokumentasjon er nøkkelen til langsiktig vedlikehold av programvare. Kode leses langt oftere enn den skrives, og godt dokumentert kode gjør det enklere for andre (og deg selv om 6 måneder!) å forstå hva som skjer.

I dette kapittelet skal vi se på ulike former for dokumentasjon – fra kodekommentarer og docstrings til README-filer og teknisk dokumentasjon. Vi skal også diskutere teknisk gjeld og refaktorering.`,
    },
    {
      id: 'it2-8-4-theory',
      type: 'text',
      title: 'Teori',
      content: `**Nivåer av dokumentasjon**

**1. Kodekommentarer**

Inline-kommentarer forklarer *hvorfor*, ikke *hva*:

\`\`\`python
# DÅRLIG: Forklarer det åpenbare
x = x + 1  # Øk x med 1

# BRA: Forklarer hvorfor
x = x + 1  # Kompenserer for zero-indexed arrays
\`\`\`

**Når bruke kommentarer:**
- Kompleks logikk eller algoritmer
- Workarounds for kjente bugs
- Forklare business logic
- TODOs og FIXMEs

**Når IKKE bruke kommentarer:**
- Istedenfor god navngiving
- Forklare selvforklarende kode
- Gammel, utdatert kode (slett i stedet!)

**2. Docstrings**

Docstrings dokumenterer funksjoner, klasser og moduler:

\`\`\`python
def calculate_discount(price, discount_percent, customer_tier):
    """
    Beregner rabattert pris basert på kundekategori.

    Args:
        price (float): Opprinnelig pris i NOK
        discount_percent (float): Rabattprosent (0-100)
        customer_tier (str): Kundekategori ('bronze', 'silver', 'gold')

    Returns:
        float: Rabattert pris

    Raises:
        ValueError: Hvis discount_percent er utenfor 0-100

    Example:
        >>> calculate_discount(1000, 10, 'gold')
        850.0
    """
    if not 0 <= discount_percent <= 100:
        raise ValueError("Discount må være mellom 0 og 100")

    base_discount = price * (discount_percent / 100)

    # Ekstra rabatt basert på tier
    tier_bonus = {'bronze': 0, 'silver': 0.05, 'gold': 0.10}
    extra = price * tier_bonus.get(customer_tier, 0)

    return price - base_discount - extra
\`\`\`

**Docstring-formater:**
- **Google style** (mest lesbar)
- **NumPy style** (for vitenskapelig kode)
- **reStructuredText** (Sphinx-dokumentasjon)

**3. README.md**

Hver repository bør ha en README med:

\`\`\`markdown
# Prosjektnavn

Kort beskrivelse av hva prosjektet gjør.

## Funksjoner
- Feature 1
- Feature 2

## Installasjon
\\\`\\\`\\\`bash
pip install -r requirements.txt
\\\`\\\`\\\`

## Bruk
\\\`\\\`\\\`python
from myapp import MyClass
obj = MyClass()
\\\`\\\`\\\`

## Bidra
Se CONTRIBUTING.md

## Lisens
MIT License
\`\`\`

**4. API-dokumentasjon**

For biblioteker og APIer:
- **Sphinx** (Python) – Genererer HTML fra docstrings
- **JSDoc** (JavaScript)
- **Swagger/OpenAPI** (REST APIs)

**Teknisk gjeld (Technical Debt)**

Teknisk gjeld er kompromisser i koden som gjør fremtidig utvikling vanskeligere:

**Typer teknisk gjeld:**
- **Forsettlig:** "Vi fikser dette etter lansering" (men glemmer det)
- **Uforsettlig:** Dårlig design pga manglende erfaring
- **Miljømessig:** Verktøy/biblioteker som blir utdaterte

**Konsekvenser:**
- Lengre tid på nye features
- Flere bugs
- Vanskelig å onboarde nye utviklere
- Lav motivasjon i teamet

**Håndtere teknisk gjeld:**
- Alloker tid til "refactor sprints"
- Boy Scout Rule: "Leave the code better than you found it"
- Dokumenter kjent gjeld i \`TECH_DEBT.md\`
- Prioriter gjeld som blokkerer nye features

**Refaktorering**

Refaktorering er å forbedre kodestrukturen *uten* å endre funksjonalitet:

**Vanlige refaktoreringer:**
- Endre variabelnavn
- Trekke ut metoder (Extract Method)
- Flytte kode til riktig klasse (Move Method)
- Fjerne duplikat kode (DRY principle)
- Forenkle komplekse if-setninger

**Gylne regel:** Ha tester før refaktorering!

\`\`\`python
# FØR refaktorering
def process(data):
    result = []
    for item in data:
        if item['status'] == 'active' and item['age'] > 18:
            result.append(item['name'].upper())
    return result

# ETTER refaktorering
def process(data):
    return [
        item['name'].upper()
        for item in data
        if is_eligible(item)
    ]

def is_eligible(item):
    """Sjekk om item er eligible for processing."""
    return item['status'] == 'active' and item['age'] > 18
\`\`\`

**Code smells (tegn på dårlig kode):**
- **Long Method** – Funksjoner over 50 linjer
- **God Class** – Klasser som gjør for mye
- **Duplicate Code** – Copy-paste mellom filer
- **Magic Numbers** – Hardkodede tall uten forklaring
- **Long Parameter List** – Funksjoner med > 5 parametere`,
    },
    {
      id: 'it2-8-4-example-1',
      type: 'example',
      title: 'Eksempel: God vs dårlig dokumentasjon',
      content: `**DÅRLIG dokumentasjon:**

\`\`\`python
def calc(a, b, c):
    # Beregner noe
    x = a * b
    if c:
        return x * 1.25
    return x
\`\`\`

*Problemer:*
- Uklare parameternavn (a, b, c)
- Uklar kommentar ("noe")
- Ingen docstring
- Magisk tall (1.25)

**GOD dokumentasjon:**

\`\`\`python
TAX_RATE = 1.25  # Moms 25%

def calculate_price(quantity, unit_price, include_tax):
    """
    Beregner totalpris for en bestilling.

    Args:
        quantity (int): Antall varer
        unit_price (float): Pris per vare i NOK
        include_tax (bool): Om moms skal inkluderes

    Returns:
        float: Totalpris i NOK

    Example:
        >>> calculate_price(5, 100, True)
        625.0
    """
    subtotal = quantity * unit_price

    if include_tax:
        return subtotal * TAX_RATE

    return subtotal
\`\`\``,
    },
    {
      id: 'it2-8-4-example-2',
      type: 'example',
      title: 'Eksempel: Refaktorering av kompleks kode',
      content: `**FØR refaktorering:**

\`\`\`python
def process_order(order):
    # Valider ordre
    if 'items' not in order or len(order['items']) == 0:
        return {'status': 'error', 'msg': 'Ingen varer'}
    if 'customer' not in order or 'email' not in order['customer']:
        return {'status': 'error', 'msg': 'Ugyldig kunde'}

    # Beregn total
    total = 0
    for item in order['items']:
        if 'price' not in item or 'qty' not in item:
            return {'status': 'error', 'msg': 'Ugyldig vare'}
        total += item['price'] * item['qty']

    # Sjekk lager
    for item in order['items']:
        if item['qty'] > item.get('stock', 0):
            return {'status': 'error', 'msg': f"{item['name']} ikke på lager"}

    # Rabatt hvis over 1000kr
    if total > 1000:
        total = total * 0.9

    return {'status': 'success', 'total': total}
\`\`\`

**ETTER refaktorering:**

\`\`\`python
BULK_DISCOUNT_THRESHOLD = 1000
BULK_DISCOUNT_RATE = 0.10

def process_order(order):
    """Prosesserer ordre og returnerer resultat."""
    validation_error = validate_order(order)
    if validation_error:
        return {'status': 'error', 'msg': validation_error}

    total = calculate_total(order['items'])
    total = apply_bulk_discount(total)

    return {'status': 'success', 'total': total}

def validate_order(order):
    """Validerer ordre, returnerer feilmelding eller None."""
    if not order.get('items'):
        return 'Ingen varer'

    customer = order.get('customer', {})
    if not customer.get('email'):
        return 'Ugyldig kunde'

    for item in order['items']:
        if 'price' not in item or 'qty' not in item:
            return 'Ugyldig vare'

        if item['qty'] > item.get('stock', 0):
            return f"{item['name']} ikke på lager"

    return None

def calculate_total(items):
    """Beregner totalpris for alle varer."""
    return sum(item['price'] * item['qty'] for item in items)

def apply_bulk_discount(total):
    """Gir rabatt på store ordrer."""
    if total > BULK_DISCOUNT_THRESHOLD:
        return total * (1 - BULK_DISCOUNT_RATE)
    return total
\`\`\`

*Forbedringer:*
- Mindre funksjoner med tydelige navn
- Konstanter istedenfor magiske tall
- Enklere å teste hver del isolert
- Enklere å forstå hva som skjer`,
    },
    {
      id: 'it2-8-4-exercises',
      type: 'text',
      title: 'Oppgaver',
      content: `**Oppgave 1 (Flervalg)**
Hva er hovedformålet med docstrings?

A) Å forklare hver eneste linje kode
B) Å dokumentere hva funksjoner, klasser og moduler gjør
C) Å gjøre koden lengre
D) Å erstatte variabelnavn

**Oppgave 2 (Flervalg)**
Hva er teknisk gjeld?

A) Penger man skylder til utviklere
B) Kompromisser i koden som gjør fremtidig utvikling vanskeligere
C) Antall bugs i systemet
D) Tid brukt på testing

**Oppgave 3**
Forklar forskjellen mellom kommentarer og docstrings i Python.

**Oppgave 4**
Skriv en god docstring for denne funksjonen:

\`\`\`python
def filter_users(users, min_age, country):
    return [u for u in users if u['age'] >= min_age and u['country'] == country]
\`\`\`

**Oppgave 5**
Hva er "Boy Scout Rule" i programmering?

**Oppgave 6**
Nevn tre "code smells" (tegn på dårlig kode).

**Oppgave 7**
Refaktorer denne funksjonen for bedre lesbarhet:

\`\`\`python
def x(a, b):
    r = []
    for i in a:
        if i > b:
            r.append(i * 2)
    return r
\`\`\`

**Oppgave 8**
Hva bør en god README.md-fil inneholde?

// --- Samleoppgaver ---

**Samleoppgave 1**
Du overtar et prosjekt med denne koden:

\`\`\`python
def f(d):
    t = 0
    for i in d:
        if i['s'] == 'a' and i['p'] > 100:
            t += i['p'] * i['q']
        elif i['s'] == 'b':
            t += i['p'] * i['q'] * 0.8
    if t > 5000:
        t = t * 0.95
    return t
\`\`\`

a) Forklar hva koden gjør (gjett basert på logikken).
b) Refaktorer koden med bedre navn, konstanter og struktur.
c) Legg til passende docstrings.
d) Hvilke "code smells" fant du i originalkoden?

**Samleoppgave 2**
Du leder et team som vedlikeholder en 5 år gammel webapplikasjon. Teamet rapporterer:
- Ny funksjonalitet tar 3x lengre tid enn før
- Mange bugs dukker opp etter hver deploy
- Ingen tør å endre visse deler av koden
- Ingen dokumentasjon finnes

a) Hvilke tegn på teknisk gjeld ser du her?
b) Lag en plan for å adressere problemet over 3 måneder.
c) Hvilke typer dokumentasjon bør prioriteres først?
d) Hvordan kan teamet unngå å samle opp ny teknisk gjeld fremover?`,
    },
  ],
  exercises: [],
  keyTerms: [
    'Kodekommentarer',
    'Docstrings',
    'README',
    'Teknisk gjeld',
    'Refaktorering',
    'Code smells',
    'API-dokumentasjon',
    'Boy Scout Rule',
  ],
  estimatedMinutes: 55,
  prevChapter: 'it-2-8-3',
  nextChapter: 'it-2-8-5',
};

// ============================================================================
// KAPITTEL 8.5: Avsluttende prosjekt – planlegging og gjennomføring
// ============================================================================

export const CHAPTER_IT_2_8_5: TextbookChapter = {
  id: 'it-2-8-5',
  courseId: 'it-2',
  title: 'Avsluttende prosjekt – planlegging og gjennomføring',
  chapterNumber: '8.5',
  section: 8,
  content: [
    {
      id: 'it2-8-5-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Nå er det tid for å bringe alt du har lært sammen i et avsluttende prosjekt! I dette kapittelet skal vi gå gjennom hvordan du planlegger, gjennomfører og presenterer et større IT-prosjekt – fra idé til ferdig løsning.

Dette er din mulighet til å vise kompetanse innen programmering, databaser, nettapplikasjoner, testing, versjonskontroll og systemutvikling.`,
    },
    {
      id: 'it2-8-5-theory',
      type: 'text',
      title: 'Teori',
      content: `**Fase 1: Idégenerering og valg av prosjekt**

**Gode prosjektideer:**
- Løser et reelt problem (ditt eget eller andres)
- Passe omfang (2-6 ukers arbeid)
- Lar deg demonstrere flere kompetansemål
- Noe du er motivert for

**Eksempler på prosjekter:**
- **Treningslogg** – Registrer treningsøkter, visualiser progresjon
- **Budsjettapp** – Spor utgifter, kategoriser, lag rapporter
- **Quiz-platform** – Lag quizer, ta quiz, se highscore
- **Oppskriftsapp** – Søk oppskrifter, handlelistegenerator
- **Bokingsystem** – Book møterom, sportsanlegg, etc.
- **Læringsapp** – Flashcards, spaced repetition
- **Matsvinnapp** – Del overskuddsmat i nabolaget

**Fase 2: Kravspesifikasjon**

Dokumenter hva systemet skal gjøre:

**Funksjonelle krav (features):**
- "Brukere skal kunne registrere seg med e-post og passord"
- "Systemet skal vise de 10 siste treningsøktene"
- "Brukere skal kunne eksportere data til CSV"

**Ikke-funksjonelle krav:**
- Ytelse: "Søk skal returnere resultat på < 1 sekund"
- Sikkerhet: "Passord skal haskes med bcrypt"
- Brukervennlighet: "Appen skal fungere på mobil og desktop"

**MoSCoW-prioritering:**
- **Must have** – Kritisk funksjonalitet
- **Should have** – Viktig, men ikke kritisk
- **Could have** – Nice to have
- **Won't have** – Utenfor scope

**Fase 3: Teknologivalg**

Velg teknologier basert på prosjektets behov:

**Backend:**
- Flask (Python) – Enkel, fleksibel
- Django (Python) – Mer struktur, innebygget admin
- Express.js (Node.js) – JavaScript hele veien

**Database:**
- SQLite – Enkel, lokal
- PostgreSQL – Robust, for produksjon
- MongoDB – NoSQL, fleksibel struktur

**Frontend:**
- HTML/CSS/JavaScript – Klassisk
- React – Moderne, komponentbasert
- Flask Templates – Server-side rendering

**Versjonskontroll:**
- Git + GitHub (alltid!)

**Testing:**
- unittest/pytest (Python)
- Jest (JavaScript)

**Fase 4: Design og arkitektur**

**Database-design:**
- Lag ER-diagram
- Normaliser tabeller
- Definer relasjoner

**Wireframes:**
- Skissér brukergrensesnitt (papir eller Figma)
- Planlegg navigasjon og arbeidsflyt

**Arkitekturdiagram:**
\`\`\`
[Frontend] <--> [Backend API] <--> [Database]
                    |
                    v
              [External APIs]
\`\`\`

**Fase 5: Prosjektplan**

Bruk Kanban eller lag en sprint-plan:

**Eksempel (2-ukers sprints):**

*Sprint 1:*
- Sett opp Git repository
- Lag database-skjema
- Implementer brukerregistrering og innlogging
- Skriv tester for autentisering

*Sprint 2:*
- CRUD-operasjoner for hovedentitet (f.eks. treningsøkter)
- Enkel frontend for å vise og legge til data
- Integrasjonstester

*Sprint 3:*
- Søkefunksjonalitet
- Datavisualisering (grafer)
- CSS-styling

*Sprint 4:*
- Avanserte features (eksport, delefunksjon)
- Bugfixes
- Dokumentasjon

**Fase 6: Gjennomføring**

**Best practices under utvikling:**
- Commit ofte (daglig)
- Skriv tester fortløpende
- Hold kodebasen kjørbar
- Dokumenter underveis
- Be om tilbakemelding tidlig

**Typiske utfordringer:**
- **Scope creep** – Prosjektet vokser ukontrollert
  *Løsning:* Prioriter MoSCoW, dropp "could have"
- **Tekniske problemer** – Sitter fast
  *Løsning:* Google, dokumentasjon, be om hjelp
- **Tidsnød** – For ambisiøst
  *Løsning:* Lever en fungerende MVP (Minimum Viable Product)

**Fase 7: Testing og kvalitetssikring**

**Sjekkliste før innlevering:**
- [ ] Alle kritiske features fungerer
- [ ] Tester passerer (minst 70% coverage)
- [ ] Koden er ryddig og dokumentert
- [ ] README er komplett
- [ ] Ingen hardkodede passord/API-nøkler
- [ ] Appen kjører på en annen maskin (be noen om å teste!)

**Fase 8: Presentasjon**

**Typisk struktur (10-15 minutter):**

1. **Introduksjon** (2 min)
   - Hva er problemet?
   - Hvem er målgruppen?

2. **Demo** (5 min)
   - Vis viktigste funksjonalitet
   - Live demo (ha backup-video!)

3. **Teknisk gjennomgang** (3 min)
   - Arkitektur
   - Interessante tekniske løsninger
   - Utfordringer du løste

4. **Refleksjon** (2 min)
   - Hva lærte du?
   - Hva ville du gjort annerledes?
   - Videre planer?

5. **Q&A** (3 min)

**Presentasjonstips:**
- Øv på forhånd (timekeeper!)
- Start med fungerende kode (reset database før demo)
- Snakk mer om *hvorfor* enn *hva*
- Vis frem kode du er stolt av

**Fase 9: Retrospektiv**

Reflekter over prosjektet:

**Hva gikk bra?**
- God planlegging?
- Effektiv bruk av Git?
- Bra testing?

**Hva kunne vært bedre?**
- Urealistisk scope?
- For lite testing?
- Dårlig tidsbruk?

**Hva lærte du?**
- Tekniske ferdigheter
- Prosjektstyring
- Feilsøking

**Neste gang:**
- Konkrete forbedringspunkter`,
    },
    {
      id: 'it2-8-5-example',
      type: 'example',
      title: 'Eksempel: Prosjektplan for "Treningslogg-app"',
      content: `**Prosjektnavn:** FitTracker

**Beskrivelse:** Webapplikasjon for å logge treningsøkter og visualisere progresjon.

**Kravspesifikasjon (MoSCoW):**

*Must have:*
- Brukerregistrering og innlogging
- Logge treningsøkt (dato, øvelse, sett, reps, vekt)
- Vise historikk over økter
- Søke etter øvelser

*Should have:*
- Visualisere progresjon med grafer (Chart.js)
- Forhåndsdefinerte øvelser (knebøy, markløft, etc.)

*Could have:*
- Eksporter data til CSV
- Del økter med venner
- Mobil-responsiv design

*Won't have:*
- Sosiale features (kommentarer, likes)
- Mobilapp (bare webapp)

**Teknologivalg:**
- Backend: Flask (Python)
- Database: SQLite (PostgreSQL i produksjon)
- Frontend: HTML/CSS/JavaScript + Chart.js
- Testing: pytest
- Versjonskontroll: Git + GitHub

**Database-skjema:**
\`\`\`sql
users (id, username, email, password_hash, created_at)
exercises (id, name, category, description)
workouts (id, user_id, date, duration, notes)
workout_sets (id, workout_id, exercise_id, set_number, reps, weight)
\`\`\`

**Tidsplan (4 uker):**

*Uke 1:*
- Dag 1-2: Sett opp Flask + database
- Dag 3-4: Implementer autentisering (register, login, logout)
- Dag 5: Skriv tester for autentisering

*Uke 2:*
- Dag 1-2: CRUD for workouts (create, read)
- Dag 3: CRUD for workout_sets
- Dag 4-5: Tester + frontend for logging

*Uke 3:*
- Dag 1-2: Søkefunksjon for øvelser
- Dag 3-4: Progresjonsgraf med Chart.js
- Dag 5: Responsiv CSS (mobile-first)

*Uke 4:*
- Dag 1: Eksport til CSV (bonus)
- Dag 2-3: Bugfixes, refaktorering
- Dag 4: Fullstendig README og dokumentasjon
- Dag 5: Forberede presentasjon

**Presentasjonsnotat:**
- Demo: Registrer bruker → Logg økt → Vis graf
- Teknisk høydepunkt: Forklare Chart.js-integrasjon
- Utfordring: Modellere many-to-many mellom workouts og exercises
- Lærdom: Viktigheten av god databasedesign fra start`,
    },
    {
      id: 'it2-8-5-exercises',
      type: 'text',
      title: 'Oppgaver',
      content: `**Oppgave 1 (Flervalg)**
Hva står MoSCoW for i kravspesifikasjon?

A) Most, Should, Could, Won't
B) Must, Should, Could, Won't
C) Maybe, Should, Could, Would
D) Must, Shall, Can, Will

**Oppgave 2 (Flervalg)**
Hva er et MVP (Minimum Viable Product)?

A) Den mest avanserte versjonen av produktet
B) Et produkt med kun de mest kritiske funksjonene
C) Et produkt uten testing
D) Et produkt kun for mobile enheter

**Oppgave 3**
Forklar forskjellen mellom funksjonelle og ikke-funksjonelle krav.

**Oppgave 4**
Du planlegger en quiz-app. Lag en liste med 5 funksjonelle krav (features) og prioriter dem med MoSCoW.

**Oppgave 5**
Hvorfor er det viktig å be noen andre om å teste appen din før innlevering?

**Oppgave 6**
Nevn tre ting en god README-fil for et prosjekt bør inneholde.

**Oppgave 7**
Forklar kort hva "scope creep" er, og hvordan du kan unngå det.

**Oppgave 8**
Hvorfor bør du skrive tester kontinuerlig gjennom prosjektet, istedenfor å vente til slutten?

// --- Samleoppgaver ---

**Samleoppgave 1: Planlegg ditt eget prosjekt**

Velg én av disse idéene (eller lag din egen):
- Bokapp med anmeldelser
- Oppskriftsapp med ingredienser og fremgangsmåte
- Studieplanlegger for fag og innleveringer

a) Skriv en kort beskrivelse (2-3 setninger) av prosjektet.
b) Lag en kravspesifikasjon med 8-10 krav (prioritert med MoSCoW).
c) Velg teknologier (backend, database, frontend).
d) Skissér databaseskjema med minst 3 tabeller.
e) Lag en 4-ukers tidsplan med konkrete oppgaver per uke.

**Samleoppgave 2: Evaluer et fiktivt prosjekt**

En elev har laget en "Matsvinn-app" der folk kan dele overskuddsmat. Appen har:
- Brukerregistrering (e-post + passord i klartekst!)
- Legg ut matannonse (bilde, beskrivelse, lokasjon)
- Se annonser på et kart
- Kommentarfelt (ingen moderering)

Eleven har jobbet alene i 8 uker, ingen versjonskontroll, ingen tester.

a) Hvilke sikkerhetsproblemer ser du?
b) Hvordan kunne bruk av Git ha hjulpet dette prosjektet?
c) Hvilke tester burde vært skrevet?
d) Gi konkrete råd for hvordan eleven kan forbedre koden og prosessen fremover.

**Samleoppgave 3: Forbered en presentasjon**

Du har nettopp fullført "Treningslogg-appen" fra eksempelet.

a) Lag en detaljert agenda for en 12-minutters presentasjon.
b) Hvilke deler av koden ville du vist frem? Hvorfor?
c) Hvilken utfordring ville du fremhevet, og hvordan løste du den?
d) Hva er dine 3 viktigste lærdommer fra prosjektet?`,
    },
  ],
  exercises: [],
  keyTerms: [
    'Kravspesifikasjon',
    'MoSCoW-prioritering',
    'MVP (Minimum Viable Product)',
    'Wireframes',
    'Scope creep',
    'Retrospektiv',
    'Funksjonelle krav',
    'Ikke-funksjonelle krav',
  ],
  estimatedMinutes: 65,
  prevChapter: 'it-2-8-4',
  nextChapter: undefined,
};

// ============================================================================
// EKSPORT
// ============================================================================

export const IT_2_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_2_8_1,
  CHAPTER_IT_2_8_2,
  CHAPTER_IT_2_8_3,
  CHAPTER_IT_2_8_4,
  CHAPTER_IT_2_8_5,
];
