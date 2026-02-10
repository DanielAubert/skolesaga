/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 2 (IT 2) VG3
 *
 * Seksjon 7: Sikkerhet, etikk og standarder (Kapittel 7.1–7.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: IT-sikkerhet og trusselmodellering
// ============================================================================

export const CHAPTER_IT_2_7_1: TextbookChapter = {
  id: 'it-2-7-1',
  courseId: 'it-2',
  title: 'IT-sikkerhet og trusselmodellering',
  chapterNumber: 35,
  section: 7,
  content: [
    {
      id: 'it2-7-1-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `IT-sikkerhet handler om å beskytte data, systemer og tjenester mot uønskede hendelser. I en verden der vi utvikler stadig mer komplekse applikasjoner som håndterer sensitiv informasjon, er det avgjørende å forstå hvilke trusler som finnes og hvordan vi kan beskytte oss mot dem.

Trusselmodellering er prosessen med å identifisere potensielle sikkerhetsrisikoer i et system, vurdere deres alvorlighetsgrad, og planlegge mottiltak. Som utvikler er det din oppgave å tenke sikkerhet inn i alle faser av utviklingsarbeidet.`,
    },
    {
      id: 'it2-7-1-theory',
      type: 'text',
      title: 'Trusselaktører og angrepstyper',
      content: `**Trusselaktører** er de som forsøker å kompromittere sikkerheten i et system. Vi skiller mellom:

- **Script kiddies**: Uerfarne angripere som bruker eksisterende verktøy uten dyp forståelse
- **Hacktivist**: Motivert av politiske eller ideologiske formål
- **Organisert kriminalitet**: Profesjonelle grupper som søker økonomisk gevinst
- **Statlige aktører**: Nasjonalstater med store ressurser og avanserte metoder
- **Innsidere**: Ansatte eller tidligere ansatte med legitim tilgang

**Vanlige angrepstyper:**

**1. Phishing og social engineering**
Lure brukere til å gi fra seg sensitiv informasjon ved å utgi seg for å være noen de stoler på.

**2. Malware**
Skadelig programvare som virus, ormer, ransomware og trojanske hester.

**3. DDoS (Distributed Denial of Service)**
Overbelaste et system med trafikk slik at legitime brukere ikke får tilgang.

**4. Man-in-the-middle**
Avlytte eller manipulere kommunikasjon mellom to parter.

**5. Zero-day exploits**
Utnytte sårbarheter som ikke er kjent for produsentene ennå.

**6. Brute force**
Systematisk prøve alle mulige kombinasjoner av passord eller nøkler.`,
    },
    {
      id: 'it2-7-1-owasp',
      type: 'text',
      title: 'OWASP Top 10',
      content: `OWASP (Open Web Application Security Project) er en organisasjon som arbeider for bedre sikkerhet i webapplikasjoner. De publiserer en liste over de ti mest kritiske sikkerhetstrusler, oppdatert hvert fjerde år.

**OWASP Top 10 (2021-versjon):**

**A01: Broken Access Control**
Feil i tilgangskontroll som lar brukere få tilgang til ressurser de ikke skal ha tilgang til.
*Eksempel: Endre bruker-ID i URL for å se andre brukeres data*

**A02: Cryptographic Failures**
Manglende eller svak kryptering av sensitiv data.
*Eksempel: Lagre passord i klartekst*

**A03: Injection**
Innsetting av ondsinnet kode gjennom brukerinput.
*Eksempel: SQL injection, command injection*

**A04: Insecure Design**
Grunnleggende designfeil i sikkerhet.
*Eksempel: Mangel på trusselmodellering*

**A05: Security Misconfiguration**
Feilkonfigurering av sikkerhet i system eller tjenester.
*Eksempel: Standard passord, unødvendige funksjoner aktivert*

**A06: Vulnerable and Outdated Components**
Bruk av komponenter med kjente sårbarheter.
*Eksempel: Gamle biblioteker med sikkerhetshull*

**A07: Identification and Authentication Failures**
Svakheter i autentisering og sesjonshåndtering.
*Eksempel: Svake passordkrav, manglende rate limiting*

**A08: Software and Data Integrity Failures**
Manglende verifisering av integritet i programvare og data.
*Eksempel: Usikre CI/CD-pipelines*

**A09: Security Logging and Monitoring Failures**
Mangelfull logging og overvåkning.
*Eksempel: Ikke oppdage eller varsle om sikkerhetsbrudd*

**A10: Server-Side Request Forgery (SSRF)**
Tvinge server til å gjøre forespørsler til uventede destinasjoner.
*Eksempel: Få server til å aksessere interne systemer*`,
    },
    {
      id: 'it2-7-1-risk',
      type: 'text',
      title: 'Risikovurdering og trusselmodellering',
      content: `**Risikovurdering** handler om å vurdere sannsynlighet og konsekvens av en sikkerhetsrisiko:

**Risiko = Sannsynlighet × Konsekvens**

**Sannsynlighet:**
- Lav: Sjelden eller lite sannsynlig
- Middels: Kan skje av og til
- Høy: Forventes å skje

**Konsekvens:**
- Lav: Minimal påvirkning
- Middels: Merkbar påvirkning
- Høy: Alvorlig påvirkning (økonomisk tap, omdømmetap, personskade)

**STRIDE-modellen** er en metode for trusselmodellering:

- **S**poofing (forfalskning av identitet)
- **T**ampering (manipulering av data)
- **R**epudiation (benektelse av handlinger)
- **I**nformation disclosure (avsløring av informasjon)
- **D**enial of service (tjenestenektangrep)
- **E**levation of privilege (uautorisert tilgang)

**Prosess for trusselmodellering:**

1. **Identifiser verdifulle ressurser**: Hva skal beskyttes?
2. **Lag dataflytdiagram**: Hvordan beveger data seg i systemet?
3. **Identifiser trusler**: Bruk STRIDE eller andre rammeverk
4. **Vurder risiko**: Prioriter trusler basert på risiko
5. **Planlegg mottiltak**: Hvordan redusere eller eliminere risiko?
6. **Verifiser**: Test at mottiltakene fungerer`,
    },
    {
      id: 'it2-7-1-example',
      type: 'example',
      title: 'Eksempel: Trusselmodellering av innloggingssystem',
      content: `La oss gjøre en enkel trusselmodellering av et innloggingssystem:

**1. Verdifulle ressurser:**
- Brukerkontoer
- Brukerdata (personnummer, adresse, betalingsinfo)
- Sesjonstokens

**2. Dataflyt:**
Bruker → Nettleser → Webserver → Database

**3. Identifiserte trusler (STRIDE):**

| Trussel | Type | Sannsynlighet | Konsekvens | Risiko |
|---------|------|---------------|------------|--------|
| Phishing | Spoofing | Middels | Høy | Høy |
| SQL injection | Tampering | Høy | Høy | Kritisk |
| Svakt passord | Elevation | Høy | Høy | Kritisk |
| Sesjonshijacking | Information disclosure | Middels | Høy | Høy |
| Brute force | Spoofing | Høy | Middels | Høy |

**4. Mottiltak:**

- **SQL injection**: Bruk parameteriserte spørringer
- **Svakt passord**: Krav til passordstyrke, 2-faktor autentisering
- **Brute force**: Rate limiting, CAPTCHA etter flere feil forsøk
- **Sesjonshijacking**: HTTPS, secure cookies, kort sesjonlevetid
- **Phishing**: Brukeropplæring, autentiseringsmerke i e-post`,
    },
    {
      id: 'it2-7-1-exercises',
      type: 'exercises',
      title: 'Oppgaver',
      content: `// --- Grunnleggende oppgaver ---

**Oppgave 7.1.1**
Forklar forskjellen mellom en trusselaktør og en angrepstype. Gi eksempler på hver.

**Oppgave 7.1.2**
Hvilke av følgende er eksempler på social engineering?
a) SQL injection
b) Phishing-e-post
c) DDoS-angrep
d) Telefonsvindel der noen utgir seg for å være fra IT-avdelingen

// --- Anvendelse ---

**Oppgave 7.1.3**
Se for deg en nettbutikk som lagrer kundedata inkludert betalingskort.
a) Identifiser tre verdifulle ressurser som må beskyttes
b) Nevn tre trusler fra OWASP Top 10 som er spesielt relevante
c) Foreslå ett konkret mottiltak for hver trussel

**Oppgave 7.1.4**
En applikasjon tillater brukere å laste opp profilbilder. Lag en tabell med tre potensielle trusler ved hjelp av STRIDE-modellen. Vurder sannsynlighet, konsekvens og samlet risiko for hver.

// --- Dybdeforståelse ---

**Oppgave 7.1.5**
Forklar hvorfor "Security Misconfiguration" (A05 i OWASP Top 10) er en vanlig sårbarhet. Gi tre eksempler på feilkonfigurasjoner som kan føre til sikkerhetsbrudd.

**Oppgave 7.1.6**
En utvikler argumenterer for at logging av sikkerhetshendelser ikke er nødvendig siden applikasjonen bruker HTTPS og sterk autentisering. Diskuter denne påstanden.

// --- Samleoppgaver ---

**Oppgave 7.1.7**
Du skal utvikle en bloggplattform der brukere kan publisere innlegg, kommentere og laste opp bilder.

a) Identifiser minst fem verdifulle ressurser
b) Tegn et enkelt dataflytdiagram
c) Bruk STRIDE til å identifisere minst seks ulike trusler
d) Lag en risikovurdering der du vurderer sannsynlighet og konsekvens
e) Foreslå konkrete mottiltak for de tre høyeste risikotrusene

**Oppgave 7.1.8**
Sammenlign og diskuter:
a) Forskjellen mellom å beskytte seg mot "script kiddies" versus "statlige aktører"
b) Hvorfor insider-trusler ofte er vanskeligst å beskytte seg mot
c) Hvordan OWASP Top 10 kan hjelpe utviklere med å prioritere sikkerhetstiltak`,
    },
  ],
  exercises: [],
  keyTerms: [
    'Trusselmodellering',
    'OWASP Top 10',
    'STRIDE-modellen',
    'Risikovurdering',
    'Trusselaktør',
    'Injection',
    'Access Control',
    'DDoS',
  ],
  estimatedMinutes: 50,
  prevChapter: 'it-2-6-5',
  nextChapter: 'it-2-7-2',
};

// ============================================================================
// Kapittel 7.2: Sikker programmering
// ============================================================================

export const CHAPTER_IT_2_7_2: TextbookChapter = {
  id: 'it-2-7-2',
  courseId: 'it-2',
  title: 'Sikker programmering',
  chapterNumber: 36,
  section: 7,
  content: [
    {
      id: 'it2-7-2-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Sikker programmering handler om å skrive kode som er resistent mot angrep. Mange sikkerhetshull oppstår fordi utviklere stoler for mye på brukerinput eller glemmer å implementere grunnleggende sikkerhetstiltak.

I dette kapittelet skal vi se på de vanligste sikkerhetssårbarhetene i webapplikasjoner og hvordan du som utvikler kan beskytte deg mot dem. Vi fokuserer spesielt på input-validering, SQL injection, XSS og CSRF.`,
    },
    {
      id: 'it2-7-2-theory',
      type: 'text',
      title: 'Input-validering: Aldri stol på brukerinput',
      content: `Det viktigste prinsippet i sikker programmering er: **Aldri stol på brukerinput**.

All data som kommer fra brukere - enten det er fra skjemaer, URL-parametere, cookies eller filer - må valideres og saniteres før det brukes.

**Typer validering:**

**1. Klientside-validering (JavaScript)**
- Rask feedback til brukeren
- Kan enkelt omgås
- Aldri stol på denne alene!

**2. Serverside-validering (Python/Node.js)**
- Obligatorisk sikkerhetstiltak
- Kan ikke omgås av brukeren
- Siste forsvarslinje

**3. Database-validering**
- Ekstra lag med sikkerhet
- Constraints og foreign keys

**Valideringsteknikker:**

**Whitelist (tillatte verdier):**
\`\`\`python
# Kun tillat spesifikke verdier
gyldig_sort = ['navn', 'dato', 'pris']
if sortering in gyldig_sort:
    # Sikker å bruke
    sorter_etter(sortering)
\`\`\`

**Type-sjekk:**
\`\`\`python
# Sjekk at input er riktig datatype
alder = request.form.get('alder')
try:
    alder = int(alder)
    if 0 < alder < 120:
        # Gyldig alder
        lagre_alder(alder)
except ValueError:
    return "Ugyldig alder"
\`\`\`

**Lengdebegrensning:**
\`\`\`python
# Begrens lengde på input
navn = request.form.get('navn', '')
if len(navn) > 100:
    return "Navn for langt"
\`\`\`

**Regex-validering:**
\`\`\`python
import re

# Valider e-postformat
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
if re.match(email_pattern, email):
    # Gyldig e-post
    send_email(email)
\`\`\``,
    },
    {
      id: 'it2-7-2-sql-injection',
      type: 'text',
      title: 'SQL Injection',
      content: `SQL injection er en av de mest alvorlige sårbarhetene (A03 i OWASP Top 10). Den oppstår når angripere kan injisere SQL-kode gjennom brukerinput.

**Usikker kode:**

\`\`\`python
# ALDRI gjør dette!
brukernavn = request.form.get('brukernavn')
query = f"SELECT * FROM brukere WHERE brukernavn = '{brukernavn}'"
cursor.execute(query)
\`\`\`

**Angrep:**
Hvis en angriper skriver inn: \`' OR '1'='1\`
Blir spørringen: \`SELECT * FROM brukere WHERE brukernavn = '' OR '1'='1'\`
Dette returnerer alle brukere!

Enda verre: \`'; DROP TABLE brukere; --\`
Dette kan slette hele tabellen.

**Sikker kode med parameteriserte spørringer:**

\`\`\`python
# SQLite (Python)
brukernavn = request.form.get('brukernavn')
cursor.execute(
    "SELECT * FROM brukere WHERE brukernavn = ?",
    (brukernavn,)
)

# PostgreSQL med psycopg2
cursor.execute(
    "SELECT * FROM brukere WHERE brukernavn = %s",
    (brukernavn,)
)
\`\`\`

**Hvorfor dette er sikkert:**
- Databasen skiller mellom SQL-kode og data
- Input behandles alltid som data, aldri som kode
- Spesialtegn escapes automatisk

**ORM (Object-Relational Mapping):**
Bruk av ORM som SQLAlchemy gjør det lettere å unngå SQL injection:

\`\`\`python
from sqlalchemy.orm import Session
from models import Bruker

# Sikkert med ORM
bruker = session.query(Bruker).filter(
    Bruker.brukernavn == brukernavn
).first()
\`\`\``,
    },
    {
      id: 'it2-7-2-xss',
      type: 'text',
      title: 'Cross-Site Scripting (XSS)',
      content: `XSS oppstår når en angriper kan injisere skadelig JavaScript i en webside som andre brukere ser.

**Typer XSS:**

**1. Stored XSS (lagret)**
Ondsinnet kode lagres i database og vises til alle brukere.
*Eksempel: Kommentarfelt på blogg*

**2. Reflected XSS (reflektert)**
Ondsinnet kode sendes som parameter og reflekteres tilbake til brukeren.
*Eksempel: Søkeresultat-side*

**3. DOM-based XSS**
Sårbarheten ligger i klientside JavaScript-kode.

**Eksempel på angrep:**

\`\`\`html
<!-- Usikker visning av brukerinput -->
<p>Velkommen, {{ brukernavn }}</p>
\`\`\`

Hvis brukernavn er: \`<script>alert(document.cookie)</script>\`
Vil scriptet kjøres i nettleseren til alle som ser siden.

**Angriper kan:**
- Stjele cookies og sesjonstokens
- Omdirigere til phishing-sider
- Endre innhold på siden
- Kjøre keyloggers

**Beskyttelse mot XSS:**

**1. Output encoding/escaping:**

\`\`\`python
# Flask escaper automatisk i Jinja2-templates
# Men sørg for at autoescaping er på:
{{ brukernavn }}  # Sikkert

# Ikke bruk |safe uten grunn:
{{ bruker_html|safe }}  # Farlig!
\`\`\`

**HTML-escaping gjør:**
- \`<\` blir til \`&lt;\`
- \`>\` blir til \`&gt;\`
- \`"\` blir til \`&quot;\`
- \`'\` blir til \`&#x27;\`
- \`&\` blir til \`&amp;\`

**2. Content Security Policy (CSP):**

\`\`\`python
# Flask
@app.after_request
def set_csp(response):
    response.headers['Content-Security-Policy'] = \\
        "default-src 'self'; script-src 'self'"
    return response
\`\`\`

Dette hindrer nettleseren i å kjøre inline scripts og scripts fra andre domener.

**3. Sanitering av HTML:**

Hvis du MÅ tillate HTML-input (f.eks. rich text editor):

\`\`\`python
import bleach

# Tillat bare sikre tags
allowed_tags = ['p', 'b', 'i', 'u', 'a']
allowed_attrs = {'a': ['href', 'title']}

ren_html = bleach.clean(
    bruker_html,
    tags=allowed_tags,
    attributes=allowed_attrs,
    strip=True
)
\`\`\``,
    },
    {
      id: 'it2-7-2-csrf',
      type: 'text',
      title: 'Cross-Site Request Forgery (CSRF)',
      content: `CSRF (uttales "sea-surf") er et angrep der en ondsinnet side lurer nettleseren til å sende forespørsler til en annen side der brukeren er innlogget.

**Eksempel på angrep:**

Du er innlogget på bank.no. Du besøker ondsinnet.com som inneholder:

\`\`\`html
<img src="https://bank.no/overforing?til=angriper&belop=10000">
\`\`\`

Nettleseren sender automatisk din innloggede sesjon med forespørselen!

**Beskyttelse: CSRF-tokens**

\`\`\`python
# Flask med Flask-WTF
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class OverforingForm(FlaskForm):
    til_konto = StringField('Til konto')
    belop = StringField('Beløp')
    submit = SubmitField('Overfør')

@app.route('/overforing', methods=['GET', 'POST'])
def overforing():
    form = OverforingForm()
    if form.validate_on_submit():
        # CSRF-token er validert
        # Trygt å utføre overføring
        utfor_overforing(form.til_konto.data, form.belop.data)
    return render_template('overforing.html', form=form)
\`\`\`

**I template:**

\`\`\`html
<form method="POST">
    {{ form.csrf_token }}  <!-- Automatisk CSRF-token -->
    {{ form.til_konto.label }} {{ form.til_konto }}
    {{ form.belop.label }} {{ form.belop }}
    {{ form.submit }}
</form>
\`\`\`

**Hvordan CSRF-token fungerer:**

1. Server genererer unikt, hemmelig token for hver sesjon
2. Token inkluderes i alle skjemaer som hidden field
3. Ved POST-forespørsel sjekker server at token matcher
4. Ondsinne sider kan ikke kjenne til tokenet

**Andre CSRF-beskyttelser:**

- **SameSite cookies**: Forhindrer sending av cookies på cross-site forespørsler
- **Double Submit Cookie**: Send token både som cookie og i form
- **Custom headers**: Krever X-Requested-With header for API-kall`,
    },
    {
      id: 'it2-7-2-review',
      type: 'text',
      title: 'Sikker kodegjennomgang',
      content: `**Sjekkliste for sikker kode:**

**Input-håndtering:**
- [ ] All brukerinput valideres på server-side
- [ ] Whitelist brukes der mulig
- [ ] Type og lengde sjekkes
- [ ] Feilmeldinger avslører ikke sensitiv info

**Database:**
- [ ] Parameteriserte spørringer brukes konsekvent
- [ ] Minste privilegium-prinsippet (database-bruker har kun nødvendige rettigheter)
- [ ] Sensitive data krypteres

**Autentisering og autorisasjon:**
- [ ] Passord hashes (aldri lagret i klartekst)
- [ ] Sesjoner har timeout
- [ ] Autorisasjon sjekkes for hver handling
- [ ] Brute force-beskyttelse implementert

**Output:**
- [ ] All output escapes/encodes
- [ ] CSP-header satt
- [ ] Ingen sensitive data i HTML-kommentarer eller JavaScript

**CSRF-beskyttelse:**
- [ ] CSRF-tokens på alle state-changing operasjoner
- [ ] SameSite cookies brukes

**HTTPS og transport:**
- [ ] All kommunikasjon over HTTPS
- [ ] Secure og HttpOnly flags på cookies
- [ ] HSTS-header aktivert

**Dependencies:**
- [ ] Alle avhengigheter er oppdaterte
- [ ] Ingen kjente sårbarheter (bruk \`npm audit\` eller \`pip-audit\`)

**Logging og overvåkning:**
- [ ] Sikkerhetshendelser logges
- [ ] Ingen passord eller tokens i logger
- [ ] Varsling ved mistenkelig aktivitet`,
    },
    {
      id: 'it2-7-2-example',
      type: 'example',
      title: 'Eksempel: Sikker bloggkommentar-funksjon',
      content: `La oss implementere en sikker funksjon for å legge til bloggkommentarer:

\`\`\`python
from flask import Flask, request, render_template, redirect, session
from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length
import sqlite3
import bleach
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'din-hemmelige-nøkkel-her'

class KommentarForm(FlaskForm):
    innhold = TextAreaField(
        'Kommentar',
        validators=[
            DataRequired(message='Kommentar kan ikke være tom'),
            Length(min=1, max=1000, message='Kommentar må være mellom 1-1000 tegn')
        ]
    )
    submit = SubmitField('Legg til kommentar')

def get_db():
    conn = sqlite3.connect('blogg.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/innlegg/<int:innlegg_id>', methods=['GET', 'POST'])
def vis_innlegg(innlegg_id):
    # Sjekk at bruker er innlogget
    if 'bruker_id' not in session:
        return redirect('/login')

    form = KommentarForm()

    if form.validate_on_submit():
        # CSRF-token er allerede validert av Flask-WTF

        # Hent og valider input
        innhold = form.innhold.data

        # Sanitér HTML (tillat kun sikre tags)
        allowed_tags = ['p', 'b', 'i', 'u', 'br']
        ren_innhold = bleach.clean(
            innhold,
            tags=allowed_tags,
            strip=True
        )

        # Bruk parameterisert spørring (SQL injection-beskyttelse)
        db = get_db()
        try:
            db.execute(
                """
                INSERT INTO kommentarer (innlegg_id, bruker_id, innhold, opprettet)
                VALUES (?, ?, ?, ?)
                """,
                (innlegg_id, session['bruker_id'], ren_innhold, datetime.now())
            )
            db.commit()

            # Logg hendelsen (for overvåkning)
            app.logger.info(
                f"Kommentar lagt til av bruker {session['bruker_id']} "
                f"på innlegg {innlegg_id}"
            )

        except sqlite3.Error as e:
            # Ikke avslør database-detaljer til bruker
            app.logger.error(f"Database-feil: {e}")
            return "En feil oppstod. Prøv igjen senere.", 500
        finally:
            db.close()

        return redirect(f'/innlegg/{innlegg_id}')

    # Hent innlegg og kommentarer
    db = get_db()
    innlegg = db.execute(
        "SELECT * FROM innlegg WHERE id = ?",
        (innlegg_id,)
    ).fetchone()

    if not innlegg:
        return "Innlegg ikke funnet", 404

    kommentarer = db.execute(
        """
        SELECT k.*, b.brukernavn
        FROM kommentarer k
        JOIN brukere b ON k.bruker_id = b.id
        WHERE k.innlegg_id = ?
        ORDER BY k.opprettet DESC
        """,
        (innlegg_id,)
    ).fetchall()
    db.close()

    return render_template(
        'innlegg.html',
        innlegg=innlegg,
        kommentarer=kommentarer,
        form=form
    )

if __name__ == '__main__':
    # I produksjon: Ikke bruk debug=True, bruk HTTPS
    app.run(debug=False, ssl_context='adhoc')
\`\`\`

**Sikkerhetstiltak implementert:**

1. **CSRF-beskyttelse**: Flask-WTF validerer automatisk token
2. **Input-validering**: WTForms validators sjekker lengde og innhold
3. **XSS-beskyttelse**: Bleach saniterer HTML
4. **SQL injection-beskyttelse**: Parameteriserte spørringer
5. **Autentisering**: Sjekker at bruker er innlogget
6. **Error handling**: Skjuler tekniske detaljer for bruker
7. **Logging**: Logger hendelser for overvåkning
8. **HTTPS**: SSL-context i produksjon`,
    },
    {
      id: 'it2-7-2-exercises',
      type: 'exercises',
      title: 'Oppgaver',
      content: `// --- Grunnleggende oppgaver ---

**Oppgave 7.2.1**
Forklar hvorfor klientside-validering alene ikke er tilstrekkelig for sikkerhet.

**Oppgave 7.2.2**
Hva er forskjellen mellom whitelist og blacklist validering? Hvilken er mest sikker og hvorfor?

// --- Anvendelse ---

**Oppgave 7.2.3**
Se på denne koden:
\`\`\`python
søk = request.args.get('q')
query = f"SELECT * FROM produkter WHERE navn LIKE '%{søk}%'"
cursor.execute(query)
\`\`\`

a) Forklar hvorfor denne koden er usikker
b) Skriv om koden til å bruke parameterisert spørring
c) Vis et eksempel på hvordan en angriper kan utnytte sårbarheten

**Oppgave 7.2.4**
En bruker kan skrive inn sitt navn i et skjema som vises på en profilside.
a) Gi et eksempel på XSS-payload som kan være farlig
b) Forklar hvordan HTML-escaping beskytter mot dette
c) Skriv Python-kode (Flask) som viser navnet sikkert i en template

// --- Dybdeforståelse ---

**Oppgave 7.2.5**
Forklar forskjellen mellom SQL injection og XSS. Hvilken type data kompromitteres i hvert angrep, og hvor kjøres den ondsinnede koden?

**Oppgave 7.2.6**
En nettbutikk har følgende skjema for å endre e-postadresse:
\`\`\`html
<form method="POST" action="/endre-epost">
    <input type="email" name="ny_epost">
    <button type="submit">Endre</button>
</form>
\`\`\`

a) Forklar hvordan dette er sårbart for CSRF
b) Vis hvordan en angriper kan utnytte det
c) Implementer CSRF-beskyttelse med Flask-WTF

// --- Samleoppgaver ---

**Oppgave 7.2.7**
Du skal lage en funksjon der brukere kan laste opp og vise profilbilder.

a) Identifiser minst fem sikkerhetshensyn du må ta
b) Skriv kode for validering av opplastede filer
c) Forklar hvordan du beskytter mot:
   - XSS (hvis filnavn vises)
   - Path traversal (../../etc/passwd)
   - Farlige filtyper (.exe, .php)
   - Store filer (DoS)

**Oppgave 7.2.8**
Gjør en sikkerhetsvurdering av denne koden:

\`\`\`python
@app.route('/slett-bruker')
def slett_bruker():
    bruker_id = request.args.get('id')
    db.execute(f"DELETE FROM brukere WHERE id = {bruker_id}")
    return "Bruker slettet"
\`\`\`

a) Identifiser ALLE sikkerhetsproblemene
b) Forklar konsekvensene av hvert problem
c) Skriv om funksjonen til å være sikker`,
    },
  ],
  exercises: [],
  keyTerms: [
    'Input-validering',
    'SQL injection',
    'Parameteriserte spørringer',
    'XSS (Cross-Site Scripting)',
    'CSRF (Cross-Site Request Forgery)',
    'HTML-escaping',
    'Sanitering',
    'CSRF-token',
  ],
  estimatedMinutes: 60,
  prevChapter: 'it-2-7-1',
  nextChapter: 'it-2-7-3',
};

// ============================================================================
// Kapittel 7.3: Kryptering og autentisering i praksis
// ============================================================================

export const CHAPTER_IT_2_7_3: TextbookChapter = {
  id: 'it-2-7-3',
  courseId: 'it-2',
  title: 'Kryptering og autentisering i praksis',
  chapterNumber: 37,
  section: 7,
  content: [
    {
      id: 'it2-7-3-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Kryptering og autentisering er grunnleggende byggesteiner i moderne IT-sikkerhet. I dette kapittelet skal vi se på hvordan vi praktisk implementerer sikker lagring av passord, bruker HTTPS, og håndterer autentiseringstokens.

Vi går fra teori til praktisk kode, med fokus på biblioteker og teknikker du vil møte som utvikler.`,
    },
    {
      id: 'it2-7-3-theory',
      type: 'text',
      title: 'Hashing av passord',
      content: `**Regel nummer én: Aldri lagre passord i klartekst!**

Når en bruker registrerer seg eller endrer passord, skal du hashe passordet før det lagres i databasen. En hash-funksjon er enveisendes - du kan ikke gjenskape det originale passordet fra hashen.

**Hva er forskjellen på hashing og kryptering?**

- **Kryptering**: Toveis, kan dekrypteres med nøkkel
- **Hashing**: Enveis, kan ikke reverseres

**Dårlige tilnærminger (IKKE bruk disse):**

\`\`\`python
# USIKKERT - ikke bruk MD5 eller SHA-1
import hashlib
hash = hashlib.md5(passord.encode()).hexdigest()

# USIKKERT - ikke bruk SHA-256 uten salt
hash = hashlib.sha256(passord.encode()).hexdigest()
\`\`\`

**Hvorfor er dette usikkert?**

1. **For raske**: Angripere kan teste milliarder av passord per sekund
2. **Rainbow tables**: Forhåndsgenererte tabeller med hash → passord
3. **Ingen salt**: Identiske passord gir identiske hasher

**Riktig tilnærming: bcrypt**

\`\`\`python
import bcrypt

# Registrering: Hash passord
passord = "mitt_hemmelige_passord"
salt = bcrypt.gensalt()  # Generer tilfeldig salt
hash = bcrypt.hashpw(passord.encode(), salt)

# Lagre hash i database (ikke passordet!)
lagre_i_database(brukernavn, hash)

# Innlogging: Verifiser passord
innlogget_passord = "mitt_hemmelige_passord"
hash_fra_database = hent_fra_database(brukernavn)

if bcrypt.checkpw(innlogget_passord.encode(), hash_fra_database):
    print("Riktig passord!")
else:
    print("Feil passord!")
\`\`\`

**Hvorfor bcrypt er sikkert:**

1. **Treg**: Tar bevisst lang tid (konfigurerbar "work factor")
2. **Salt inkludert**: Hver hash er unik selv for identiske passord
3. **Adaptive**: Kan øke vanskelighetsgrad etter hvert som datamaskiner blir raskere

**Eksempel med kostnads-faktor:**

\`\`\`python
# Høyere cost = tregere, men sikrere
# Standard: 12 (2^12 iterasjoner = 4096)
# Øk med 1 for hver dobling av tid

salt = bcrypt.gensalt(rounds=14)  # Tregere, sikrere
hash = bcrypt.hashpw(passord.encode(), salt)
\`\`\``,
    },
    {
      id: 'it2-7-3-https',
      type: 'text',
      title: 'HTTPS og transport-sikkerhet',
      content: `**HTTP vs HTTPS:**

- **HTTP**: Kommunikasjon i klartekst, kan avlyttes
- **HTTPS**: Kryptert med TLS/SSL

**Hva HTTPS beskytter mot:**

1. **Avlytting**: Ingen kan lese dataene underveis
2. **Manipulering**: Ingen kan endre dataene
3. **Identitetsforfalskning**: Verifiserer at du snakker med riktig server

**Hvordan HTTPS fungerer:**

1. **Handshake**: Klient og server blir enige om krypteringsmetode
2. **Sertifikat-validering**: Server beviser identitet med digitalt sertifikat
3. **Nøkkelutveksling**: Genererer symmetriske nøkler for sesjon
4. **Kryptert kommunikasjon**: All data krypteres med sesjonsnøkkel

**Implementere HTTPS i Flask:**

\`\`\`python
# For utvikling: Selvskrevet sertifikat
from flask import Flask

app = Flask(__name__)

if __name__ == '__main__':
    # Genererer selvskrevet sertifikat
    app.run(ssl_context='adhoc', debug=True)
\`\`\`

**For produksjon: Let's Encrypt**

Let's Encrypt gir gratis SSL-sertifikater. Med Certbot:

\`\`\`bash
# Installer Certbot
sudo apt install certbot python3-certbot-nginx

# Få sertifikat
sudo certbot --nginx -d eksempel.no
\`\`\`

**Tvinge HTTPS:**

\`\`\`python
from flask import Flask, redirect, request

app = Flask(__name__)

@app.before_request
def redirect_to_https():
    if not request.is_secure and not app.debug:
        url = request.url.replace('http://', 'https://', 1)
        return redirect(url, code=301)
\`\`\`

**HTTP Strict Transport Security (HSTS):**

Forteller nettleseren å ALDRI bruke HTTP, kun HTTPS:

\`\`\`python
@app.after_request
def set_hsts(response):
    response.headers['Strict-Transport-Security'] = \\
        'max-age=31536000; includeSubDomains'
    return response
\`\`\`

**Sikre cookies:**

\`\`\`python
# Sett cookies kun over HTTPS
response.set_cookie(
    'sesjon_id',
    value=sesjon_token,
    secure=True,      # Kun send over HTTPS
    httponly=True,    # Ikke tilgjengelig for JavaScript
    samesite='Lax'    # CSRF-beskyttelse
)
\`\`\``,
    },
    {
      id: 'it2-7-3-tokens',
      type: 'text',
      title: 'Autentiseringstokens',
      content: `For moderne webapplikasjoner og API-er brukes ofte tokens for autentisering i stedet for sesjoner.

**Session-basert vs Token-basert:**

**Session-basert (tradisjonell):**
- Server lagrer sesjonsinformasjon
- Cookie med sesjons-ID sendes til klient
- Server slår opp sesjonsdata for hver forespørsel

**Token-basert (moderne):**
- All informasjon i selve tokenet
- Ingen server-side sesjon nødvendig
- Fungerer bra i distribuerte systemer og API-er

**Generere sikre tokens:**

\`\`\`python
import secrets

# Generer kryptografisk sikker tilfeldig token
token = secrets.token_urlsafe(32)  # 32 bytes = 256 bits
print(token)  # Eksempel: "Xy3K9f2Lm_4Nq7Rw5Ts..."

# Lagre i database med bruker-ID
lagre_token(bruker_id, token)
\`\`\`

**Bruke token for autentisering:**

\`\`\`python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/profil')
def hent_profil():
    # Les token fra header
    token = request.headers.get('Authorization')

    if not token:
        return jsonify({'error': 'Mangler token'}), 401

    # Fjern "Bearer " prefix hvis det finnes
    if token.startswith('Bearer '):
        token = token[7:]

    # Valider token
    bruker = finn_bruker_fra_token(token)

    if not bruker:
        return jsonify({'error': 'Ugyldig token'}), 401

    # Token er gyldig
    return jsonify({
        'brukernavn': bruker.brukernavn,
        'epost': bruker.epost
    })
\`\`\`

**Token expiry (utløpstid):**

\`\`\`python
from datetime import datetime, timedelta

def opprett_token(bruker_id):
    token = secrets.token_urlsafe(32)
    expires = datetime.now() + timedelta(hours=24)

    lagre_token(bruker_id, token, expires)
    return token

def valider_token(token):
    token_data = hent_token_data(token)

    if not token_data:
        return None

    if datetime.now() > token_data.expires:
        # Token har utgått
        slett_token(token)
        return None

    return token_data.bruker_id
\`\`\`

**Refresh tokens:**

For lengre økter brukes ofte to tokens:

- **Access token**: Kort levetid (15 min), brukes for API-kall
- **Refresh token**: Lang levetid (30 dager), brukes til å få ny access token

\`\`\`python
def login(brukernavn, passord):
    # Valider kredentialer
    bruker = verifiser_bruker(brukernavn, passord)

    if not bruker:
        return None

    # Generer tokens
    access_token = generer_access_token(bruker.id)  # 15 min
    refresh_token = generer_refresh_token(bruker.id)  # 30 dager

    return {
        'access_token': access_token,
        'refresh_token': refresh_token,
        'expires_in': 900  # 15 minutter i sekunder
    }

@app.route('/api/refresh', methods=['POST'])
def refresh():
    refresh_token = request.json.get('refresh_token')

    bruker_id = valider_refresh_token(refresh_token)

    if not bruker_id:
        return jsonify({'error': 'Ugyldig refresh token'}), 401

    # Generer ny access token
    ny_access_token = generer_access_token(bruker_id)

    return jsonify({
        'access_token': ny_access_token,
        'expires_in': 900
    })
\`\`\``,
    },
    {
      id: 'it2-7-3-oauth',
      type: 'text',
      title: 'OAuth 2.0 - Innlogging med tredjepart',
      content: `OAuth 2.0 er en standard for å gi applikasjoner tilgang til brukerdata uten å dele passord. Du har sikkert sett "Logg inn med Google" eller "Logg inn med Facebook".

**Hvordan OAuth fungerer:**

1. **Bruker** klikker "Logg inn med Google"
2. **Din app** omdirigerer til Google
3. **Bruker** logger inn på Google og godkjenner tilgang
4. **Google** omdirigerer tilbake med autorisasjonskode
5. **Din app** bytter kode mot access token
6. **Din app** bruker token til å hente brukerinfo fra Google

**Fordeler:**

- Bruker slipper å lage nytt passord
- Din app lagrer ikke passord
- Bruker kan tilbakekalle tilgang når som helst
- Mindre ansvar for deg som utvikler

**OAuth-flyt (forenklet):**

\`\`\`python
from flask import Flask, redirect, request, session
import requests

app = Flask(__name__)
app.secret_key = 'din-hemmelige-nøkkel'

# Registrer app hos Google Cloud Console
CLIENT_ID = 'din-google-client-id'
CLIENT_SECRET = 'din-google-client-secret'
REDIRECT_URI = 'http://localhost:5000/callback'

@app.route('/login')
def login():
    # Steg 1: Omdiriger til Google
    google_auth_url = (
        'https://accounts.google.com/o/oauth2/v2/auth'
        f'?client_id={CLIENT_ID}'
        f'&redirect_uri={REDIRECT_URI}'
        '&response_type=code'
        '&scope=openid email profile'
    )
    return redirect(google_auth_url)

@app.route('/callback')
def callback():
    # Steg 2: Motta autorisasjonskode
    code = request.args.get('code')

    # Steg 3: Bytt kode mot token
    token_response = requests.post(
        'https://oauth2.googleapis.com/token',
        data={
            'code': code,
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'redirect_uri': REDIRECT_URI,
            'grant_type': 'authorization_code'
        }
    )

    token_data = token_response.json()
    access_token = token_data['access_token']

    # Steg 4: Bruk token til å hente brukerinfo
    userinfo_response = requests.get(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        headers={'Authorization': f'Bearer {access_token}'}
    )

    bruker = userinfo_response.json()

    # Lagre brukerinfo i sesjon
    session['bruker'] = {
        'email': bruker['email'],
        'navn': bruker['name']
    }

    return redirect('/dashboard')
\`\`\`

**Viktige sikkerhetshensyn med OAuth:**

1. **Bruk HTTPS**: Alltid i produksjon
2. **Valider state parameter**: Beskyttelse mot CSRF
3. **Lagre ikke access tokens i localStorage**: Bruk httpOnly cookies
4. **Begrens scope**: Be kun om de tilgangene du trenger`,
    },
    {
      id: 'it2-7-3-example',
      type: 'example',
      title: 'Eksempel: Komplett autentiseringssystem',
      content: `Her er et komplett eksempel på autentisering med bcrypt, sikre tokens og HTTPS:

\`\`\`python
from flask import Flask, request, jsonify, make_response
import bcrypt
import secrets
from datetime import datetime, timedelta
import sqlite3

app = Flask(__name__)

def get_db():
    conn = sqlite3.connect('brukere.db')
    conn.row_factory = sqlite3.Row
    return conn

# ===== REGISTRERING =====

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()

    # Valider input
    brukernavn = data.get('brukernavn', '').strip()
    passord = data.get('passord', '')

    if len(brukernavn) < 3:
        return jsonify({'error': 'Brukernavn må være minst 3 tegn'}), 400

    if len(passord) < 8:
        return jsonify({'error': 'Passord må være minst 8 tegn'}), 400

    # Hash passord
    salt = bcrypt.gensalt()
    passord_hash = bcrypt.hashpw(passord.encode(), salt)

    # Lagre i database
    db = get_db()
    try:
        db.execute(
            'INSERT INTO brukere (brukernavn, passord_hash) VALUES (?, ?)',
            (brukernavn, passord_hash)
        )
        db.commit()
    except sqlite3.IntegrityError:
        return jsonify({'error': 'Brukernavn allerede i bruk'}), 409
    finally:
        db.close()

    return jsonify({'message': 'Bruker opprettet'}), 201

# ===== INNLOGGING =====

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    brukernavn = data.get('brukernavn')
    passord = data.get('passord')

    # Hent bruker fra database
    db = get_db()
    bruker = db.execute(
        'SELECT * FROM brukere WHERE brukernavn = ?',
        (brukernavn,)
    ).fetchone()
    db.close()

    # Sjekk om bruker eksisterer og passord er riktig
    if not bruker or not bcrypt.checkpw(
        passord.encode(),
        bruker['passord_hash']
    ):
        # Samme feilmelding for begge tilfeller (sikkerhet)
        return jsonify({'error': 'Ugyldig brukernavn eller passord'}), 401

    # Generer tokens
    access_token = secrets.token_urlsafe(32)
    refresh_token = secrets.token_urlsafe(32)

    # Lagre tokens med utløpstid
    db = get_db()
    access_expires = datetime.now() + timedelta(minutes=15)
    refresh_expires = datetime.now() + timedelta(days=30)

    db.execute(
        '''
        INSERT INTO tokens (bruker_id, access_token, refresh_token,
                           access_expires, refresh_expires)
        VALUES (?, ?, ?, ?, ?)
        ''',
        (bruker['id'], access_token, refresh_token,
         access_expires, refresh_expires)
    )
    db.commit()
    db.close()

    # Returner tokens
    response = make_response(jsonify({
        'access_token': access_token,
        'refresh_token': refresh_token,
        'expires_in': 900
    }))

    # Sett sikker cookie med refresh token
    response.set_cookie(
        'refresh_token',
        value=refresh_token,
        max_age=30*24*60*60,  # 30 dager
        secure=True,           # Kun HTTPS
        httponly=True,         # Ikke JavaScript-tilgjengelig
        samesite='Strict'      # CSRF-beskyttelse
    )

    return response

# ===== BESKYTT RUTE =====

def krever_autentisering(f):
    """Decorator for å kreve gyldig token"""
    def wrapper(*args, **kwargs):
        auth_header = request.headers.get('Authorization')

        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({'error': 'Mangler autentisering'}), 401

        token = auth_header[7:]  # Fjern "Bearer "

        # Valider token
        db = get_db()
        token_data = db.execute(
            '''
            SELECT t.*, b.brukernavn
            FROM tokens t
            JOIN brukere b ON t.bruker_id = b.id
            WHERE t.access_token = ? AND t.access_expires > ?
            ''',
            (token, datetime.now())
        ).fetchone()
        db.close()

        if not token_data:
            return jsonify({'error': 'Ugyldig eller utgått token'}), 401

        # Legg til bruker i request
        request.bruker = token_data
        return f(*args, **kwargs)

    wrapper.__name__ = f.__name__
    return wrapper

@app.route('/api/profil')
@krever_autentisering
def profil():
    return jsonify({
        'brukernavn': request.bruker['brukernavn']
    })

# ===== REFRESH TOKEN =====

@app.route('/api/refresh', methods=['POST'])
def refresh():
    refresh_token = request.cookies.get('refresh_token')

    if not refresh_token:
        return jsonify({'error': 'Mangler refresh token'}), 401

    # Valider refresh token
    db = get_db()
    token_data = db.execute(
        'SELECT * FROM tokens WHERE refresh_token = ? AND refresh_expires > ?',
        (refresh_token, datetime.now())
    ).fetchone()

    if not token_data:
        return jsonify({'error': 'Ugyldig refresh token'}), 401

    # Generer ny access token
    ny_access_token = secrets.token_urlsafe(32)
    ny_expires = datetime.now() + timedelta(minutes=15)

    db.execute(
        'UPDATE tokens SET access_token = ?, access_expires = ? WHERE id = ?',
        (ny_access_token, ny_expires, token_data['id'])
    )
    db.commit()
    db.close()

    return jsonify({
        'access_token': ny_access_token,
        'expires_in': 900
    })

if __name__ == '__main__':
    app.run(ssl_context='adhoc', debug=False)
\`\`\``,
    },
    {
      id: 'it2-7-3-exercises',
      type: 'exercises',
      title: 'Oppgaver',
      content: `// --- Grunnleggende oppgaver ---

**Oppgave 7.3.1**
Forklar forskjellen mellom hashing og kryptering. Hvorfor bruker vi hashing for passord?

**Oppgave 7.3.2**
Hva er "salt" i kontekst av passord-hashing, og hvorfor er det viktig?

// --- Anvendelse ---

**Oppgave 7.3.3**
Skriv Python-kode som:
a) Tar imot et passord fra bruker
b) Hasher det med bcrypt
c) Verifiserer passordet mot hashen

**Oppgave 7.3.4**
En webapplikasjon bruker HTTP (ikke HTTPS). Listen opp minst fire sikkerhetsproblemer dette medfører.

**Oppgave 7.3.5**
Forklar hvordan en "Bearer token" fungerer i en HTTP-forespørsel. Vis et eksempel på en Authorization header.

// --- Dybdeforståelse ---

**Oppgave 7.3.6**
Sammenlign session-basert og token-basert autentisering:
a) Hvor lagres autentiseringsinformasjonen?
b) Hvilke fordeler og ulemper har hver tilnærming?
c) Hvilken egner seg best for en REST API? Hvorfor?

**Oppgave 7.3.7**
En utvikler lagrer access tokens i localStorage i nettleseren. Forklar hvorfor dette er usikkert og hva som er et bedre alternativ.

// --- Samleoppgaver ---

**Oppgave 7.3.8**
Implementer et komplett registrerings- og innloggingssystem:

a) Lag en database-tabell for brukere med kolonnene:
   - id (primærnøkkel)
   - brukernavn (unik)
   - passord_hash
   - opprettet (timestamp)

b) Skriv en /register endpoint som:
   - Validerer brukernavn (3-20 tegn, kun alfanumerisk)
   - Validerer passord (min 8 tegn, må inneholde tall og bokstav)
   - Hasher passord med bcrypt
   - Lagrer bruker i database

c) Skriv en /login endpoint som:
   - Verifiserer kredentialer
   - Genererer en sikker token ved vellykket innlogging
   - Returnerer token til klient

d) Implementer en @krever_login decorator som:
   - Sjekker om token er tilstede i Authorization header
   - Validerer token mot database
   - Gir tilgang til beskyttet rute hvis gyldig

**Oppgave 7.3.9**
OAuth 2.0 security:
a) Forklar hva "state" parameteret i OAuth er og hvorfor det er viktig
b) Hvorfor skal aldri CLIENT_SECRET eksponeres i frontend-kode?
c) Hva er forskjellen på "scope" og "claims" i OAuth/OpenID Connect?
d) Hvordan kan du sikre at callback URL ikke kan kapres?`,
    },
  ],
  exercises: [],
  keyTerms: [
    'Hashing',
    'bcrypt',
    'Salt',
    'HTTPS/TLS',
    'Access token',
    'Refresh token',
    'OAuth 2.0',
    'Bearer token',
  ],
  estimatedMinutes: 55,
  prevChapter: 'it-2-7-2',
  nextChapter: 'it-2-7-4',
};

// ============================================================================
// Kapittel 7.4: Personvern, GDPR og dataetikk
// ============================================================================

export const CHAPTER_IT_2_7_4: TextbookChapter = {
  id: 'it-2-7-4',
  courseId: 'it-2',
  title: 'Personvern, GDPR og dataetikk',
  chapterNumber: 38,
  section: 7,
  content: [
    {
      id: 'it2-7-4-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Som utvikler har du et stort ansvar når du bygger systemer som håndterer personopplysninger. GDPR (General Data Protection Regulation) er EUs personvernforordning som gir strenge regler for hvordan persondata skal behandles.

I Norge heter loven Personopplysningsloven, som implementerer GDPR. Brudd på loven kan føre til bøter på opptil 4% av global omsetning eller 20 millioner euro - det som er høyest.

Men personvern handler ikke bare om å følge loven. Det handler om å respektere brukernes rettigheter og bygge tillit.`,
    },
    {
      id: 'it2-7-4-theory',
      type: 'text',
      title: 'GDPR i praksis for utviklere',
      content: `**Hva er personopplysninger?**

Personopplysninger er all informasjon som kan knyttes til en identifiserbar person:

**Direkte identifikasjon:**
- Navn, personnummer, fødselsdato
- E-postadresse, telefonnummer
- Foto, fingeravtrykk, stemmeopptak

**Indirekte identifikasjon:**
- IP-adresse
- Cookie-ID
- Stedsinformasjon
- Kombinasjon av data (alder + bosted + yrke)

**Særlige kategorier (ekstra beskyttelse):**
- Helse
- Politisk oppfatning
- Religion
- Fagforeningsmedlemskap
- Seksuell orientering
- Genetiske/biometriske data

**Grunnprinsipper i GDPR:**

**1. Lovlighet, rettferdighet og åpenhet**
Brukere skal vite hva data brukes til.

**2. Formålsbegrensning**
Innsamle data kun for spesifikke formål.

**3. Dataminimering**
Samle inn kun det som er nødvendig.

**4. Riktighet**
Hold data oppdatert og korrekt.

**5. Lagringsbegrensning**
Behold data kun så lenge det er nødvendig.

**6. Integritet og konfidensialitet**
Beskytt data mot uautorisert tilgang.

**7. Ansvarplikt**
Kunne dokumentere at du følger reglene.

**Lovlig behandlingsgrunnlag:**

For å behandle personopplysninger må du ha ett av disse grunnlagene:

1. **Samtykke**: Bruker har gitt eksplisitt tillatelse
2. **Avtale**: Nødvendig for å oppfylle en avtale
3. **Rettslig forpliktelse**: Lovpålagt
4. **Vitale interesser**: Nødvendig for å beskytte liv
5. **Offentlig interesse**: Utføre offentlig oppgave
6. **Legitime interesser**: Avveining mot brukers rettigheter`,
    },
    {
      id: 'it2-7-4-privacy-by-design',
      type: 'text',
      title: 'Privacy by Design',
      content: `**Privacy by Design** betyr å bygge personvern inn i systemet fra starten, ikke legge det til etterpå.

**7 prinsipper:**

**1. Proaktiv, ikke reaktiv**
Forebygg problemer før de oppstår.

**2. Personvern som standardinnstilling**
Brukere skal være beskyttet automatisk, uten å måtte konfigurere noe.

\`\`\`python
# Eksempel: Standard-settings
default_settings = {
    'profile_visibility': 'friends',  # IKKE 'public'
    'data_sharing': False,             # IKKE True
    'notifications': 'minimal'         # IKKE 'all'
}
\`\`\`

**3. Personvern bygget inn i design**
Ikke et tillegg, men en integrert del.

**4. Full funksjonalitet**
Ikke kompromiss mellom personvern og funksjonalitet - du kan ha begge.

**5. Sikkerhet gjennom hele livssyklusen**
Fra innsamling til sletting.

**6. Synlighet og gjennomsiktighet**
Brukere skal kunne se hva som skjer med dataene deres.

**7. Respekt for brukerens personvern**
Brukervennlig og brukerorientert.

**Praktiske tiltak:**

**Dataminimering i praksis:**

\`\`\`python
# DÅRLIG: Samler unødvendig data
class BrukerRegistrering:
    def __init__(self):
        self.fornavn = ""
        self.etternavn = ""
        self.fodselsdato = ""
        self.personnummer = ""
        self.adresse = ""
        self.postnummer = ""
        self.telefon = ""
        self.epost = ""

# BEDRE: Kun det nødvendige
class BrukerRegistrering:
    def __init__(self):
        self.brukernavn = ""
        self.epost = ""
        # Resten er valgfritt eller hentes når nødvendig
\`\`\`

**Anonymisering og pseudonymisering:**

\`\`\`python
import hashlib

# Pseudonymisering: Kan reverseres med nøkkel
def pseudonymiser(bruker_id, secret_key):
    return hashlib.sha256(
        f"{bruker_id}{secret_key}".encode()
    ).hexdigest()

# Anonymisering: Kan ikke reverseres
def anonymiser_data(bruker_data):
    return {
        'alder': bruker_data['alder'] // 10 * 10,  # Aldersgruppe
        'postnummer': bruker_data['postnummer'][:2] + '00',  # Område
        'kjonn': bruker_data['kjonn']
        # Fjern navn, personnummer, etc.
    }
\`\`\``,
    },
    {
      id: 'it2-7-4-samtykke',
      type: 'text',
      title: 'Samtykke og informasjonsplikt',
      content: `**Gyldig samtykke må være:**

1. **Frivillig**: Ikke tvunget eller vilkår for tjeneste (hvis ikke nødvendig)
2. **Spesifikt**: For hvert formål
3. **Informert**: Bruker vet hva de samtykker til
4. **Utvetydig**: Aktiv handling, ikke forhåndsavkrysset
5. **Tilbaketrekkbart**: Lett å trekke tilbake

**Dårlige eksempler:**

\`\`\`html
<!-- IKKE GYLDIG: Forhåndsavkrysset -->
<input type="checkbox" name="samtykke" checked>
Jeg godtar vilkårene

<!-- IKKE GYLDIG: Uklart -->
<input type="checkbox" name="samtykke">
Jeg godtar at mine data kan brukes
\`\`\`

**Gode eksempler:**

\`\`\`html
<!-- GYLDIG: Spesifikt og utvetydig -->
<input type="checkbox" name="nyhetsbrev">
Jeg vil motta nyhetsbrev med produktoppdateringer (valgfritt)

<input type="checkbox" name="markedsforing" required>
Jeg godtar at mine kontaktopplysninger lagres for å kunne kontakte meg om min ordre (nødvendig)
\`\`\`

**Implementere samtykke:**

\`\`\`python
from datetime import datetime

class Samtykke:
    def __init__(self, bruker_id):
        self.bruker_id = bruker_id
        self.samtykker = {}

    def gi_samtykke(self, formal, beskrivelse):
        self.samtykker[formal] = {
            'gitt': datetime.now(),
            'beskrivelse': beskrivelse,
            'tilbakekalt': None
        }

        # Logg for å dokumentere
        logg_samtykke(self.bruker_id, formal, 'GITT')

    def trekk_tilbake_samtykke(self, formal):
        if formal in self.samtykker:
            self.samtykker[formal]['tilbakekalt'] = datetime.now()
            logg_samtykke(self.bruker_id, formal, 'TILBAKEKALT')

            # Slett data knyttet til dette formålet
            slett_data_for_formal(self.bruker_id, formal)

    def har_samtykke(self, formal):
        if formal not in self.samtykker:
            return False

        samtykke = self.samtykker[formal]
        return samtykke['tilbakekalt'] is None
\`\`\`

**Informasjonsplikt (personvernerklæring):**

Du MÅ informere brukere om:

1. **Hvem** er behandlingsansvarlig (din bedrift)
2. **Hva** samler du inn (hvilke data)
3. **Hvorfor** (formål med behandlingen)
4. **Hvordan** (behandlingsgrunnlag - samtykke, avtale, etc.)
5. **Hvor lenge** (lagringstid)
6. **Hvem andre** får tilgang (databehandlere, tredjeparter)
7. **Rettigheter** (innsyn, sletting, etc.)

**Cookie-samtykke:**

\`\`\`html
<div id="cookie-banner">
    <p>Vi bruker cookies for å forbedre din opplevelse.</p>

    <button onclick="acceptEssential()">Kun nødvendige</button>
    <button onclick="acceptAll()">Aksepter alle</button>
    <button onclick="showSettings()">Innstillinger</button>

    <a href="/personvern">Les mer</a>
</div>

<script>
function acceptEssential() {
    // Lagre kun nødvendige cookies
    setCookie('consent', 'essential', 365);
    hideBanner();
}

function acceptAll() {
    // Lagre alle cookies
    setCookie('consent', 'all', 365);
    // Aktiver sporingsscripts
    enableAnalytics();
    hideBanner();
}
</script>
\`\`\``,
    },
    {
      id: 'it2-7-4-rettigheter',
      type: 'text',
      title: 'Brukernes rettigheter',
      content: `GDPR gir brukere en rekke rettigheter som du må støtte i systemet ditt:

**1. Rett til innsyn**
Brukere kan be om kopi av alle data du har om dem.

\`\`\`python
@app.route('/api/min-data', methods=['GET'])
@krever_autentisering
def eksporter_mine_data():
    bruker_id = request.bruker['id']

    # Samle alle data om bruker
    data = {
        'profil': hent_profil(bruker_id),
        'innlegg': hent_innlegg(bruker_id),
        'kommentarer': hent_kommentarer(bruker_id),
        'aktivitetslogg': hent_aktivitet(bruker_id),
        'samtykker': hent_samtykker(bruker_id)
    }

    # Returner som JSON
    return jsonify(data)
\`\`\`

**2. Rett til retting**
Brukere kan kreve at feil data rettes.

\`\`\`python
@app.route('/api/profil', methods=['PUT'])
@krever_autentisering
def oppdater_profil():
    bruker_id = request.bruker['id']
    nye_data = request.get_json()

    # Valider og oppdater
    oppdater_bruker(bruker_id, nye_data)

    return jsonify({'message': 'Profil oppdatert'})
\`\`\`

**3. Rett til sletting ("rett til å bli glemt")**
Brukere kan be om at data slettes.

\`\`\`python
@app.route('/api/slett-konto', methods=['DELETE'])
@krever_autentisering
def slett_konto():
    bruker_id = request.bruker['id']

    # Slett alle data
    slett_profil(bruker_id)
    slett_innlegg(bruker_id)
    slett_kommentarer(bruker_id)
    slett_tokens(bruker_id)

    # Anonymiser data som må beholdes (f.eks. fakturahistorikk)
    anonymiser_fakturaer(bruker_id)

    # Logg sletting
    logg_sletting(bruker_id)

    return jsonify({'message': 'Konto slettet'})
\`\`\`

**4. Rett til dataportabilitet**
Brukere kan få data i maskinlesbart format for å flytte til annen tjeneste.

\`\`\`python
@app.route('/api/eksporter', methods=['GET'])
@krever_autentisering
def eksporter_data():
    bruker_id = request.bruker['id']

    # Eksporter i standard format (JSON)
    data = hent_alle_data(bruker_id)

    # Returner som nedlastbar fil
    response = make_response(jsonify(data))
    response.headers['Content-Disposition'] = \\
        'attachment; filename=mine-data.json'

    return response
\`\`\`

**5. Rett til innsigelse**
Brukere kan protestere mot visse typer behandling.

**6. Rett til begrensning**
Brukere kan kreve at behandling begrenses mens en sak undersøkes.`,
    },
    {
      id: 'it2-7-4-example',
      type: 'example',
      title: 'Eksempel: GDPR-kompatibel brukersletting',
      content: `Her er et komplett eksempel på hvordan du implementerer brukersletting i henhold til GDPR:

\`\`\`python
from datetime import datetime
from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def logg_hendelse(hendelse_type, bruker_id, detaljer):
    """Logger GDPR-relevante hendelser for dokumentasjon"""
    db = sqlite3.connect('gdpr_logg.db')
    db.execute(
        '''
        INSERT INTO gdpr_logg (tidspunkt, type, bruker_id, detaljer)
        VALUES (?, ?, ?, ?)
        ''',
        (datetime.now(), hendelse_type, bruker_id, detaljer)
    )
    db.commit()
    db.close()

@app.route('/api/slett-konto', methods=['DELETE'])
@krever_autentisering
def slett_konto():
    bruker_id = request.bruker['id']

    # Be om bekreftelse
    bekreftelse = request.json.get('bekreftelse')
    if bekreftelse != 'JEG VIL SLETTE MIN KONTO':
        return jsonify({
            'error': 'Må bekrefte sletting'
        }), 400

    db = sqlite3.connect('app.db')
    cursor = db.cursor()

    try:
        # 1. Slett profil og kontaktinfo
        cursor.execute('DELETE FROM profiler WHERE bruker_id = ?', (bruker_id,))
        logg_hendelse('SLETT', bruker_id, 'Profil slettet')

        # 2. Slett innhold opprettet av bruker
        cursor.execute('DELETE FROM innlegg WHERE bruker_id = ?', (bruker_id,))
        cursor.execute('DELETE FROM kommentarer WHERE bruker_id = ?', (bruker_id,))
        logg_hendelse('SLETT', bruker_id, 'Innhold slettet')

        # 3. Slett filer (profilbilde, opplastinger)
        filer = cursor.execute(
            'SELECT filsti FROM filer WHERE bruker_id = ?',
            (bruker_id,)
        ).fetchall()

        for fil in filer:
            slett_fil_fra_disk(fil[0])

        cursor.execute('DELETE FROM filer WHERE bruker_id = ?', (bruker_id,))
        logg_hendelse('SLETT', bruker_id, f'{len(filer)} filer slettet')

        # 4. Slett autentisering
        cursor.execute('DELETE FROM tokens WHERE bruker_id = ?', (bruker_id,))
        cursor.execute('DELETE FROM sesjoner WHERE bruker_id = ?', (bruker_id,))

        # 5. Trekk tilbake alle samtykker
        cursor.execute(
            '''
            UPDATE samtykker
            SET tilbakekalt = ?
            WHERE bruker_id = ? AND tilbakekalt IS NULL
            ''',
            (datetime.now(), bruker_id)
        )
        logg_hendelse('SAMTYKKE_TRUKKET', bruker_id, 'Alle samtykker trukket')

        # 6. Anonymiser data som må beholdes
        # (f.eks. bestillinger for regnskapsloven - 5 års oppbevaringsplikt)
        cursor.execute(
            '''
            UPDATE bestillinger
            SET navn = 'SLETTET BRUKER',
                epost = 'slettet@example.com',
                adresse = NULL,
                telefon = NULL,
                ip_adresse = NULL
            WHERE bruker_id = ?
            ''',
            (bruker_id,)
        )
        logg_hendelse('ANONYMISER', bruker_id, 'Bestillinger anonymisert')

        # 7. Slett selve brukerkontoen (sist, pga foreign keys)
        cursor.execute('DELETE FROM brukere WHERE id = ?', (bruker_id,))
        logg_hendelse('SLETT', bruker_id, 'Brukerkonto slettet')

        db.commit()

        # 8. Varsle andre systemer (f.eks. nyhetsbrev-tjeneste)
        fjern_fra_nyhetsbrevliste(request.bruker['epost'])

        # 9. Send bekreftelse på e-post (før data slettes!)
        send_sletting_bekreftelse(request.bruker['epost'])

        return jsonify({
            'message': 'Konto og data slettet',
            'tidspunkt': datetime.now().isoformat()
        })

    except Exception as e:
        db.rollback()
        app.logger.error(f"Feil ved sletting av bruker {bruker_id}: {e}")
        return jsonify({'error': 'Kunne ikke slette konto'}), 500

    finally:
        db.close()

@app.route('/api/data-eksport', methods=['GET'])
@krever_autentisering
def data_eksport():
    """Implementerer rett til dataportabilitet"""
    bruker_id = request.bruker['id']

    db = sqlite3.connect('app.db')
    db.row_factory = sqlite3.Row

    # Samle all data
    profil = db.execute(
        'SELECT * FROM profiler WHERE bruker_id = ?',
        (bruker_id,)
    ).fetchone()

    innlegg = db.execute(
        'SELECT * FROM innlegg WHERE bruker_id = ?',
        (bruker_id,)
    ).fetchall()

    kommentarer = db.execute(
        'SELECT * FROM kommentarer WHERE bruker_id = ?',
        (bruker_id,)
    ).fetchall()

    samtykker = db.execute(
        'SELECT * FROM samtykker WHERE bruker_id = ?',
        (bruker_id,)
    ).fetchall()

    db.close()

    # Konverter til JSON-vennlig format
    data = {
        'eksportert': datetime.now().isoformat(),
        'profil': dict(profil) if profil else None,
        'innlegg': [dict(i) for i in innlegg],
        'kommentarer': [dict(k) for k in kommentarer],
        'samtykker': [dict(s) for s in samtykker]
    }

    # Logg eksport
    logg_hendelse('EKSPORT', bruker_id, 'Data eksportert')

    response = make_response(jsonify(data))
    response.headers['Content-Disposition'] = \\
        'attachment; filename=mine-data.json'

    return response
\`\`\``,
    },
    {
      id: 'it2-7-4-exercises',
      type: 'exercises',
      title: 'Oppgaver',
      content: `// --- Grunnleggende oppgaver ---

**Oppgave 7.4.1**
Forklar forskjellen mellom personopplysninger og særlige kategorier personopplysninger. Gi tre eksempler på hver.

**Oppgave 7.4.2**
Hvilke av følgende er eksempler på gyldig samtykke etter GDPR?
a) Forhåndsavkrysset avkryssingsboks
b) Bruker må krysse av for å godta
c) "Ved å fortsette å bruke tjenesten godtar du..."
d) Tydelig "Ja"-knapp som må klikkes

// --- Anvendelse ---

**Oppgave 7.4.3**
En nettbutikk samler inn følgende data ved registrering:
- Navn, adresse, telefon, e-post
- Fødselsdato
- Betalingskortinformasjon
- Favorittfarge
- Inntekt
- Politisk parti

a) Hvilke data er nødvendige for formålet (å selge varer)?
b) Hvilke data krever spesielt behandlingsgrunnlag?
c) Foreslå hvordan dataminimering kan anvendes

**Oppgave 7.4.4**
Skriv en personvernerklæring (kort versjon) for en blogg-app. Inkluder:
- Hvilke data som samles inn
- Hvorfor
- Hvor lenge de lagres
- Brukerens rettigheter

// --- Dybdeforståelse ---

**Oppgave 7.4.5**
Forklar "Privacy by Design" prinsippet. Hvordan skiller det seg fra å legge til personvernfunksjoner etter at systemet er ferdig utviklet?

**Oppgave 7.4.6**
En app tilbyr gratis versjon hvis bruker godtar personlig reklame, eller betalt versjon uten reklame. Er dette gyldig samtykke for personlig reklame i gratisversjonen? Forklar.

// --- Samleoppgaver ---

**Oppgave 7.4.7**
Design og implementer et GDPR-kompatibelt samtykke-system:

a) Lag en database-tabell for å lagre samtykker
b) Implementer funksjonalitet for:
   - Gi samtykke til ulike formål
   - Trekke tilbake samtykke
   - Vise oversikt over aktive samtykker
c) Sørg for at alle samtykker logges med tidspunkt
d) Implementer automatisk sletting av data når samtykke trekkes tilbake

**Oppgave 7.4.8**
Sammenlign personvernhensyn i to scenarier:

**Scenario A: Helsapp**
- Lagrer daglige treningsøkter, puls, vekt
- Synkroniserer med eksterne enheter
- Tilbyr personlige treningsanbefalinger

**Scenario B: Sosial medie-app**
- Brukere deler bilder og tekst
- Viser annonser basert på brukeradferd
- Deler data med annonsepartnere

For hver app:
a) Identifiser hvilke data som er personopplysninger
b) Vurder om noe er særlige kategorier
c) Foreslå behandlingsgrunnlag for hver type data
d) Diskuter hvilke privacy by design-tiltak som er viktige
e) Beskriv hvordan du implementerer brukerens rett til sletting`,
    },
  ],
  exercises: [],
  keyTerms: [
    'GDPR',
    'Personopplysninger',
    'Samtykke',
    'Privacy by Design',
    'Dataminimering',
    'Rett til sletting',
    'Dataportabilitet',
    'Behandlingsgrunnlag',
  ],
  estimatedMinutes: 60,
  prevChapter: 'it-2-7-3',
  nextChapter: 'it-2-7-5',
};

// ============================================================================
// Kapittel 7.5: Etikk og samfunnsansvar i IT
// ============================================================================

export const CHAPTER_IT_2_7_5: TextbookChapter = {
  id: 'it-2-7-5',
  courseId: 'it-2',
  title: 'Etikk og samfunnsansvar i IT',
  chapterNumber: 39,
  section: 7,
  content: [
    {
      id: 'it2-7-5-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Teknologi er ikke nøytral. Valgene vi tar som utviklere påvirker samfunn, økonomi og individers liv. I dette kapittelet skal vi utforske etiske dilemmaer i IT-bransjen og diskutere utvikleres samfunnsansvar.

Som utvikler har du makt - makt til å påvirke hvordan millioner av mennesker kommuniserer, får tilgang til informasjon, og tar beslutninger. Med denne makten følger et ansvar for å handle etisk.`,
    },
    {
      id: 'it2-7-5-theory',
      type: 'text',
      title: 'AI-etikk og algoritmisk bias',
      content: `**Algoritmisk bias** oppstår når et datasystem systematisk produserer urettferdige resultater.

**Eksempler på algoritmisk bias:**

**1. Amazon rekrutteringsverktøy (2018)**
Amazon utviklet en AI for å vurdere CV-er. Problemet? Den diskriminerte mot kvinner fordi den var trent på historiske data der de fleste ansatte var menn.

**2. Ansiktsgjenkjenning**
Studier viser at ansiktsgjenkjenning fungerer dårligere for personer med mørk hudfarge, spesielt kvinner. Dette kan føre til feilaktige identifiseringer i kriminaletterforskning.

**3. COMPAS (kriminalitetsrisiko)**
Algoritme brukt i amerikansk rettssystem for å vurdere sannsynlighet for tilbakefall. Undersøkelser fant at den feilaktig klassifiserte svarte mistenkte som høyrisiko dobbelt så ofte som hvite.

**Hvordan oppstår bias?**

**Treningsdata:**
- Data gjenspeiler historisk diskriminering
- Underrepresenterte grupper i datasettet
- Skjeve utvalg

**Algoritmeutforming:**
- Valg av features kan favorisere visse grupper
- Optimalisering for feil metrикk
- Manglende testing på diverse data

**Fortolkning og bruk:**
- Blindt stole på algoritmens output
- Ignorere kontekst
- Mangel på menneskellig oversikt

**Hvordan bekjempe bias:**

\`\`\`python
# Eksempel: Sjekke for kjønnsbias i en modell

import pandas as pd
from sklearn.metrics import confusion_matrix

# Evaluer modell separat for hver gruppe
def evaluer_rettferdighet(modell, X_test, y_test, sensitiv_attributt):
    """
    Evaluerer om modellen gir like gode resultater
    for ulike grupper
    """
    resultater = {}

    for gruppe in X_test[sensitiv_attributt].unique():
        # Filtrer data for denne gruppen
        maske = X_test[sensitiv_attributt] == gruppe
        X_gruppe = X_test[maske]
        y_gruppe = y_test[maske]

        # Prediker
        y_pred = modell.predict(X_gruppe)

        # Beregn metrics
        cm = confusion_matrix(y_gruppe, y_pred)

        # True Positive Rate (sensitivitet)
        tpr = cm[1,1] / (cm[1,1] + cm[1,0])

        # False Positive Rate
        fpr = cm[0,1] / (cm[0,1] + cm[0,0])

        resultater[gruppe] = {
            'tpr': tpr,
            'fpr': fpr,
            'antall': len(y_gruppe)
        }

    return resultater

# Kjør evaluering
rettferdighet = evaluer_rettferdighet(
    min_modell,
    X_test,
    y_test,
    'kjonn'
)

# Sjekk om det er store forskjeller
for gruppe, metrics in rettferdighet.items():
    print(f"{gruppe}:")
    print(f"  True Positive Rate: {metrics['tpr']:.2%}")
    print(f"  False Positive Rate: {metrics['fpr']:.2%}")
\`\`\`

**Etiske prinsipper for AI:**

1. **Transparens**: Forklar hvordan algoritmen fungerer
2. **Rettferdighet**: Behandle alle grupper likt
3. **Ansvarplikt**: Noen må være ansvarlig for konsekvenser
4. **Personvern**: Beskytt sensitive data
5. **Sikkerhet**: Forhindre misbruk
6. **Menneskelig kontroll**: Mennesker må ha siste ord`,
    },
    {
      id: 'it2-7-5-digital-divide',
      type: 'text',
      title: 'Digital ulikhet',
      content: `**Digital ulikhet** (digital divide) refererer til ulik tilgang til og evne til å bruke digital teknologi.

**Dimensjoner av digital ulikhet:**

**1. Tilgangsulikhet**
- Manglende internettilgang (spesielt på landsbygda)
- Dyre enheter og dataabonnement
- Ustabil eller treg forbindelse

**2. Kompetanseulikhet**
- Manglende digital kompetanse
- Språkbarrierer
- Tilgjengelighetsproblemer for personer med funksjonsnedsettelser

**3. Bruksulikhet**
- Forskjeller i hvordan teknologi brukes
- Noen bruker internett til læring og jobbutvikling
- Andre kun til underholdning

**Konsekvenser:**

- **Utdanning**: Digital hjemmeundervisning ekskluderer elever uten utstyr
- **Arbeid**: Mange jobber krever digitale ferdigheter
- **Tjenester**: Bank, helse, offentlige tjenester blir digitale
- **Demokrati**: Digital deltakelse i samfunnsdebatten

**Som utvikler kan du:**

**1. Bygge tilgjengelige løsninger**

\`\`\`html
<!-- God tilgjengelighet -->
<button
  aria-label="Lukk vindu"
  onclick="close()"
>
  <span aria-hidden="true">&times;</span>
</button>

<img
  src="diagram.png"
  alt="Flytdiagram som viser dataflyt fra bruker til database"
>

<!-- Støtt tastaturnavigasjon -->
<div
  tabindex="0"
  role="button"
  onkeypress="handleKeyPress(event)"
>
  Klikkbar
</div>
\`\`\`

**2. Optimalisere for treg forbindelse**

\`\`\`python
# Flask: Komprimer responser
from flask_compress import Compress

app = Flask(__name__)
Compress(app)

# Bruk effektive bildeformater
# WebP i stedet for PNG/JPEG
# SVG for ikoner i stedet for PNG
\`\`\`

**3. Støtte flere språk**

\`\`\`python
# Flask-Babel for internasjonalisering
from flask_babel import Babel, gettext

babel = Babel(app)

# I kode
print(gettext('Velkommen'))

# I template
{{ _('Velkommen') }}
\`\`\`

**4. Offline-first design**

\`\`\`javascript
// Service Worker for offline-funksjonalitet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Returner fra cache hvis tilgjengelig
        return response || fetch(event.request);
      })
  );
});
\`\`\``,
    },
    {
      id: 'it2-7-5-opensource',
      type: 'text',
      title: 'Åpen kildekode og kunnskapsdeling',
      content: `**Åpen kildekode** (open source) betyr at kildekoden er fritt tilgjengelig for alle å se, bruke og modifisere.

**Hvorfor åpen kildekode er viktig:**

**1. Transparens**
Alle kan se hva programvaren faktisk gjør. Viktig for sikkerhet og tillit.

**2. Samarbeid**
Utviklere over hele verden kan bidra til forbedringer.

**3. Læring**
Nybegynnere kan lære av eksisterende kode.

**4. Innovasjon**
Bygge videre på eksisterende løsninger i stedet for å starte fra scratch.

**5. Demokratisering**
Teknologi tilgjengelig for alle, ikke bare de med råd til dyre lisenser.

**Populære open source-lisenser:**

**MIT License (permissiv):**
- Kan bruke koden til hva som helst
- Må inkludere opprinnelig lisens
- Ingen garanti

**GNU GPL (copyleft):**
- Må dele videre under samme lisens
- Derivater må også være open source
- Beskytter mot "closed fork"

**Apache 2.0:**
- Som MIT, men med patent-beskyttelse
- Populær i bedriftssammenheng

**Hvordan bidra til open source:**

\`\`\`bash
# 1. Fork et prosjekt på GitHub
# 2. Klon din fork
git clone https://github.com/ditt-brukernavn/prosjekt.git

# 3. Lag en branch for din endring
git checkout -b fikse-bug-123

# 4. Gjør endringer og commit
git add .
git commit -m "Fiks bug #123: Riktig validering av e-post"

# 5. Push til din fork
git push origin fikse-bug-123

# 6. Opprett Pull Request på GitHub
\`\`\`

**Etiske hensyn:**

**1. Bidra konstruktivt**
- Vær høflig i kommentarer
- Følg prosjektets bidragsretningslinjer
- Respekter vedlikeholdernes tid

**2. Gi kreditt**
- Attribution (gi kreditt til opphavspersoner)
- Ikke klaim andres arbeid som ditt

**3. Respekter lisenser**
- Forstå lisensens krav
- Ikke bryt lisensvilkår

**4. Sikkerhet**
- Rapporter sårbarheter ansvarlig (ikke offentlig)
- Gi vedlikeholdere tid til å fikse før offentliggjøring`,
    },
    {
      id: 'it2-7-5-sustainability',
      type: 'text',
      title: 'Bærekraftig IT',
      content: `IT-sektoren står for økende miljøpåvirkning. Som utviklere har vi ansvar for å lage mer bærekraftig teknologi.

**Miljøpåvirkning fra IT:**

**1. Energiforbruk**
- Datasentre bruker 1-2% av verdens elektrisitet
- Kryptovaluta-mining er spesielt energikrevende
- Video-streaming står for ~1% av globale CO2-utslipp

**2. Elektronisk avfall**
- Smarttelefoner, laptoper, servere kastes
- Inneholder giftige materialer
- Dårlig resirkulering

**3. Produksjon**
- Utvinning av sjeldne jordarter
- Høyt vannforbruk
- Arbeidforhold i fabrikker

**Bærekraftig utvikling i praksis:**

**1. Effektiv kode**

\`\`\`python
# INEFFEKTIVT: N+1 query problem
users = User.query.all()
for user in users:
    print(user.profil.navn)  # Hver iterasjon kjører egen query

# EFFEKTIVT: Eager loading
users = User.query.options(
    joinedload(User.profil)
).all()
for user in users:
    print(user.profil.navn)  # Kun én query totalt
\`\`\`

**2. Optimaliser bilder**

\`\`\`python
from PIL import Image

def optimaliser_bilde(input_sti, output_sti, maks_bredde=1200):
    """Reduser bildestørrelse for web"""
    img = Image.open(input_sti)

    # Behold aspect ratio
    if img.width > maks_bredde:
        ratio = maks_bredde / img.width
        ny_hoyde = int(img.height * ratio)
        img = img.resize((maks_bredde, ny_hoyde), Image.LANCZOS)

    # Komprimer
    img.save(output_sti, optimize=True, quality=85)
\`\`\`

**3. Caching**

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def hent_bruker(bruker_id):
    """Cache database-oppslag"""
    return db.query(User).get(bruker_id)
\`\`\`

**4. Lazy loading**

\`\`\`html
<!-- Last bilder kun når de kommer i viewporten -->
<img src="bilde.jpg" loading="lazy" alt="Beskrivelse">
\`\`\`

**5. Velg grønn hosting**
Mange webhoteller bruker fornybar energi:
- Google Cloud
- AWS (øker andel fornybar energi)
- Grønne alternativer som Greenhost

**6. Lang levetid på enheter**
- Støtt eldre nettlesere/enheter der mulig
- Progressive enhancement
- Ikke krev årlig oppgradering

**7. Dark mode**
OLED-skjermer bruker mindre strøm med mørke farger:

\`\`\`css
@media (prefers-color-scheme: dark) {
  body {
    background: #000;
    color: #fff;
  }
}
\`\`\``,
    },
    {
      id: 'it2-7-5-example',
      type: 'example',
      title: 'Eksempel: Etisk sjekkliste for utvikling',
      content: `Her er en praktisk sjekkliste du kan bruke i utviklingsprosjekter:

**ETISK SJEKKLISTE FOR IT-PROSJEKTER**

**Personvern og data:**
- [ ] Samler vi kun data vi faktisk trenger?
- [ ] Har vi gyldig behandlingsgrunnlag for alle data?
- [ ] Er personvernerklæringen klar og forståelig?
- [ ] Kan brukere enkelt slette sin konto?
- [ ] Krypterer vi sensitive data?
- [ ] Logger vi kun det nødvendige (ingen passord/tokens)?

**Tilgjengelighet:**
- [ ] Fungerer siden med skjermleser?
- [ ] Kan alt nås med tastatur (uten mus)?
- [ ] Er kontrasten høy nok (WCAG AA)?
- [ ] Støttes eldre nettlesere/enheter?
- [ ] Fungerer siden med treg internett?
- [ ] Støtter vi flere språk?

**Rettferdighet og inkludering:**
- [ ] Har vi testet med diverse brukere?
- [ ] Diskriminerer algoritmen mot noen grupper?
- [ ] Er standardinnstillinger "safe" for alle?
- [ ] Unngår vi stereotyper i UI/innhold?

**Sikkerhet:**
- [ ] Validerer vi all brukerinput?
- [ ] Bruker vi HTTPS overalt?
- [ ] Har vi implementert rate limiting?
- [ ] Logger vi sikkerhetshendelser?
- [ ] Er avhengigheter oppdaterte?

**Bærekraft:**
- [ ] Er koden optimalisert for ytelse?
- [ ] Bruker vi lazy loading for tunge ressurser?
- [ ] Er bilder/video komprimert?
- [ ] Har vi implementert caching?
- [ ] Støtter vi offline-bruk der relevant?

**Transparens:**
- [ ] Forklarer vi hvordan algoritmer fungerer?
- [ ] Er vilkår og betingelser forståelige?
- [ ] Informerer vi om endringer i tjenesten?
- [ ] Kan brukere eksportere sine data?

**Samfunnsansvar:**
- [ ] Motarbeider løsningen spredning av desinformasjon?
- [ ] Har vi vurdert misbrukspotensial?
- [ ] Bidrar vi til open source-fellesskapet?
- [ ] Behandler vi leverandører og partnere rettferdig?

**Eksempel på bruk:**

\`\`\`python
# Før du deployer et nytt feature:

def pre_deployment_review():
    """
    Etisk gjennomgang før deployment
    """

    print("ETISK GJENNOMGANG")
    print("=" * 50)

    sjekkliste = [
        ("Personvern", [
            "Samler kun nødvendig data",
            "Har gyldig behandlingsgrunnlag",
            "Klar personvernerklæring"
        ]),
        ("Tilgjengelighet", [
            "Testet med skjermleser",
            "Tastaturnavigasjon fungerer",
            "God kontrast (WCAG AA)"
        ]),
        ("Sikkerhet", [
            "Input-validering implementert",
            "HTTPS enforced",
            "Rate limiting på plass"
        ])
    ]

    for kategori, punkter in sjekkliste:
        print(f"\\n{kategori}:")
        for punkt in punkter:
            svar = input(f"  [ ] {punkt}? (j/n): ")
            if svar.lower() != 'j':
                print(f"      ⚠️  ADVARSEL: Må addresseres før deployment")

    print("\\n" + "=" * 50)
    print("Gjennomgang fullført. Vurder alle advarsler før deployment.")

# Kjør før hvert deployment
if __name__ == "__main__":
    pre_deployment_review()
\`\`\``,
    },
    {
      id: 'it2-7-5-exercises',
      type: 'exercises',
      title: 'Oppgaver',
      content: `// --- Grunnleggende oppgaver ---

**Oppgave 7.5.1**
Forklar hva algoritmisk bias er. Gi et eksempel på hvordan det kan oppstå selv om utviklerne ikke har diskriminerende intensjoner.

**Oppgave 7.5.2**
Nevn tre dimensjoner av digital ulikhet og forklar hvordan hver påvirker folks deltakelse i samfunnet.

// --- Anvendelse ---

**Oppgave 7.5.3**
En AI-modell skal brukes til å godkjenne lån i en bank. Den er trent på historiske data fra de siste 20 årene.

a) Hvilke potensielle bias-problemer kan oppstå?
b) Hvordan kan du teste om modellen er rettferdig for ulike grupper?
c) Foreslå tiltak for å redusere bias

**Oppgave 7.5.4**
Du utvikler en videostrømmetjeneste. Listen opp fem konkrete tiltak du kan ta for å:
a) Redusere miljøpåvirkning
b) Forbedre tilgjengelighet
c) Beskytte brukerens personvern

// --- Dybdeforståelse ---

**Oppgave 7.5.5**
Diskuter dilemmaet: En app kan gi svært nyttige helseråd ved å analysere brukerdata i detalj, men det krever innsamling av sensitiv informasjon. Hvordan balanserer du nytte mot personvern?

**Oppgave 7.5.6**
Sammenlign open source-lisensene MIT og GPL:
a) Hva er hovedforskjellene?
b) I hvilke situasjoner passer hver best?
c) Diskuter etiske argumenter for og imot copyleft-lisenser

// --- Samleoppgaver ---

**Oppgave 7.5.7**
Case-studie: Ansiktsgjenkjenning i skolen

En skole vurderer å implementere ansiktsgjenkjenning for automatisk frammøteregistrering.

**Fordeler:**
- Spar tid (ingen manuell registrering)
- Forhindre skulk
- Bedre sikkerhet (kun autoriserte kommer inn)

**Utfordringer:**
- Personvern (biometriske data)
- Overvåkningsfølelse
- Potensial for misbruk
- Tekniske feil (feilidentifikasjon)
- Kostnad

Skriv en rapport som dekker:
a) GDPR-hensyn: Er det lovlig? Hvilket behandlingsgrunnlag?
b) Etiske dilemmaer: Veier fordelene opp for ulempene?
c) Alternativer: Finnes bedre løsninger?
d) Sikkerhetstiltak: Hvis implementert, hvordan beskyttes data?
e) Din konklusjon: Bør skolen gå videre med dette?

**Oppgave 7.5.8**
Utvikle retningslinjer for etisk AI-utvikling:

Forestill deg at du skal lage et dokument som din bedrift skal følge når de utvikler AI-systemer. Dokumentet skal dekke:

a) **Utviklingsfasen:**
   - Hvordan sikre diverse treningsdata
   - Når og hvordan teste for bias
   - Dokumentasjonskrav

b) **Deployment:**
   - Krav til transparens overfor brukere
   - Menneskelig oversikt (human-in-the-loop)
   - Overvåkning av modellen i produksjon

c) **Ansvar:**
   - Hvem er ansvarlig hvis AI gjør feil?
   - Hvordan håndtere klager
   - Når skal AI-systemet revideres eller tas ned?

d) **Konkrete eksempler:**
   - Gi eksempler på situasjoner der hvert prinsipp er viktig
   - Lag en sjekkliste som kan brukes i praksis`,
    },
  ],
  exercises: [],
  keyTerms: [
    'Algoritmisk bias',
    'AI-etikk',
    'Digital ulikhet',
    'Tilgjengelighet',
    'Åpen kildekode',
    'Bærekraftig IT',
    'Samfunnsansvar',
    'Transparens',
  ],
  estimatedMinutes: 65,
  prevChapter: 'it-2-7-4',
  nextChapter: 'it-2-8-1',
};

// ============================================================================
// Eksport av alle kapitler i Seksjon 7
// ============================================================================

export const IT_2_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_2_7_1,
  CHAPTER_IT_2_7_2,
  CHAPTER_IT_2_7_3,
  CHAPTER_IT_2_7_4,
  CHAPTER_IT_2_7_5,
];
