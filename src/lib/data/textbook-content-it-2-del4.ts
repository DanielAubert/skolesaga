/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 2 (IT 2) VG3
 *
 * Seksjon 4: API-er og nettverksprogrammering (Kapittel 4.1–4.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Hva er et API?
// ============================================================================

export const CHAPTER_IT_2_4_1: TextbookChapter = {
  id: 'it-2-4-1',
  courseId: 'it-2',
  title: 'Hva er et API?',
  chapterNumber: '4.1',
  section: 4,
  content: [
    {
      id: 'it2-4-1-intro',
      type: 'text',
      title: 'Introduksjon til API-er',
      content: `Når du bruker en værapp på mobilen, spiller musikk på Spotify, eller deler en Instagram-post, kommuniserer appen med servere på internett for å hente og sende data. Dette skjer gjennom noe som kalles et **API** (Application Programming Interface).

Et API er i praksis et grensesnitt som lar to programmer snakke sammen. I stedet for at mennesker klikker på knapper i et brukergrensesnitt, sender programmer forespørsler til hverandre og utveksler data automatisk.

I dette kapittelet skal vi se på hva et API er, hvordan REST API-er fungerer, og hvordan data typisk utveksles i JSON-format.`
    },
    {
      id: 'it2-4-1-def-1',
      type: 'definition',
      title: 'API (Application Programming Interface)',
      content: `Et **API** er et sett av regler og protokoller som lar ulike programmer kommunisere med hverandre. Et API definerer hvordan forespørsler skal sendes, hvilke data som kan utveksles, og hvilket format som brukes.

**REST API** (Representational State Transfer) er en arkitekturstil for API-er som bruker HTTP-protokollen og standard metoder som GET, POST, PUT og DELETE.`
    },
    {
      id: 'it2-4-1-text-1',
      type: 'text',
      title: 'Hvordan fungerer et API?',
      content: `La oss bruke en restaurant-analogi:

**Restaurant = Server med API**
- Menyen = API-dokumentasjonen (liste over hva du kan bestille)
- Servitøren = API-et (tar imot bestillingen og leverer maten)
- Kjøkkenet = Server/database (lager maten/dataene)
- Du = Klientprogrammet (bestiller mat/data)

Du velger noe fra menyen, forteller servitøren hva du vil ha, servitøren går til kjøkkenet, og kommer tilbake med maten. Du trenger ikke vite hvordan kjøkkenet lager maten, bare hva du kan bestille og hvordan du bestiller det.

På samme måte sender et program en **forespørsel** til et API, API-et henter data fra databasen, og sender tilbake et **svar** med dataene.`
    },
    {
      id: 'it2-4-1-def-2',
      type: 'definition',
      title: 'HTTP-metoder',
      content: `REST API-er bruker HTTP-metoder for å utføre ulike operasjoner:

- **GET**: Hente data (lese)
- **POST**: Sende ny data (opprette)
- **PUT**: Oppdatere eksisterende data
- **DELETE**: Slette data

Disse kalles også CRUD-operasjoner: Create, Read, Update, Delete.`
    },
    {
      id: 'it2-4-1-ex-1',
      type: 'example',
      title: 'Eksempel: Værmeldinger-API',
      content: `La oss se på et eksempel med et værmeldings-API:

**Endepunkt**: \`https://api.weatherapi.com/v1/current.json\`

**Forespørsel**:
\`\`\`
GET https://api.weatherapi.com/v1/current.json?key=ABC123&q=Oslo
\`\`\`

Her er:
- \`GET\` = HTTP-metoden (vi vil hente data)
- \`https://api.weatherapi.com/v1/current.json\` = endepunktet
- \`?key=ABC123&q=Oslo\` = parametre (API-nøkkel og sted)

**Svar (JSON)**:
\`\`\`json
{
  "location": {
    "name": "Oslo",
    "country": "Norway"
  },
  "current": {
    "temp_c": 12.5,
    "condition": {
      "text": "Partly cloudy"
    }
  }
}
\`\`\`

Programmet ditt kan nå bruke disse dataene til å vise været i appen.`
    },
    {
      id: 'it2-4-1-text-2',
      type: 'text',
      title: 'API-endepunkter',
      content: `Et API består av flere **endepunkter** (endpoints), som er spesifikke URL-er som utfører ulike funksjoner.

**Eksempel fra et sosiale medier-API**:
- \`GET /users/123\` – Hent bruker med ID 123
- \`GET /users/123/posts\` – Hent alle poster fra bruker 123
- \`POST /posts\` – Opprett ny post
- \`PUT /posts/456\` – Oppdater post med ID 456
- \`DELETE /posts/456\` – Slett post med ID 456

Hvert endepunkt har:
- En **URL** (adressen)
- En **HTTP-metode** (GET, POST, osv.)
- **Parametre** (valgfri data som sendes med)
- Et **svar** (data som returneres)`
    },
    {
      id: 'it2-4-1-def-3',
      type: 'definition',
      title: 'JSON (JavaScript Object Notation)',
      content: `**JSON** er et tekstbasert dataformat som brukes til å utveksle data mellom programmer. JSON er lett å lese for både mennesker og maskiner, og er standard for de fleste moderne API-er.

**Struktur**:
- Data organiseres i nøkkel-verdi-par: \`"navn": "verdi"\`
- Objekter skrives med krøllparenteser: \`{ }\`
- Lister skrives med hakeparenteser: \`[ ]\`
- Støtter strings, tall, boolske verdier, null, objekter og lister`
    },
    {
      id: 'it2-4-1-ex-2',
      type: 'example',
      title: 'Eksempel: JSON-struktur',
      content: `Her er et eksempel på JSON-data fra et API:

\`\`\`json
{
  "student": {
    "navn": "Emma Hansen",
    "alder": 18,
    "aktiv": true,
    "karakterer": [5, 4, 6, 5],
    "kontakt": {
      "epost": "emma@example.com",
      "telefon": "12345678"
    }
  }
}
\`\`\`

**Forklaring**:
- \`"navn"\` er en string
- \`"alder"\` er et tall
- \`"aktiv"\` er en boolsk verdi
- \`"karakterer"\` er en liste med tall
- \`"kontakt"\` er et nestet objekt

Dette formatet er enkelt å parse (tolke) i Python med \`json\`-modulen.`
    },
    {
      id: 'it2-4-1-text-3',
      type: 'text',
      title: 'API-dokumentasjon',
      content: `Alle gode API-er har **dokumentasjon** som forklarer:
- Hvilke endepunkter som finnes
- Hvilke HTTP-metoder som støttes
- Hvilke parametre som kreves
- Hvilket format svaret har
- Eksempler på bruk
- Autentisering (hvis nødvendig)

**Eksempel på dokumentasjon**:
\`\`\`
Endepunkt: GET /books/{id}
Beskrivelse: Hent informasjon om en bok

Parametre:
  - id (required): Bokens ID-nummer

Svar (200 OK):
{
  "id": 123,
  "title": "1984",
  "author": "George Orwell",
  "year": 1949
}

Feilkoder:
  - 404: Bok ikke funnet
  - 500: Serverfeil
\`\`\`

Før du bruker et API, bør du alltid lese dokumentasjonen nøye.`
    },
    {
      id: 'it2-4-1-text-4',
      type: 'text',
      title: 'Autentisering og API-nøkler',
      content: `Mange API-er krever **autentisering** for å sikre at bare autoriserte brukere får tilgang. Den vanligste metoden er å bruke en **API-nøkkel**.

**Hvorfor API-nøkler?**
- Hindre misbruk (for mange forespørsler)
- Spore hvem som bruker API-et
- Begrense tilgang til betalte funksjoner
- Sikkerhet (hindre uautorisert tilgang)

**Bruk av API-nøkkel**:
API-nøkkelen sendes vanligvis som en parameter eller i HTTP-headeren:

\`\`\`
GET https://api.example.com/data?api_key=DIN_HEMMELIGE_NØKKEL
\`\`\`

eller

\`\`\`
GET https://api.example.com/data
Headers: {
  "Authorization": "Bearer DIN_HEMMELIGE_NØKKEL"
}
\`\`\`

**Viktig**: Behandle API-nøkler som passord – del dem aldri offentlig!`
    },
    {
      id: 'it2-4-1-ex-3',
      type: 'example',
      title: 'Praktisk eksempel: Forskjellige API-er',
      content: `Her er noen populære API-er du kan eksperimentere med:

**1. JSONPlaceholder** (gratis test-API):
- URL: \`https://jsonplaceholder.typicode.com\`
- Endepunkter: \`/posts\`, \`/users\`, \`/comments\`
- Krever ingen API-nøkkel
- Perfekt for øving

**2. Open-Meteo** (værmeldinger):
- URL: \`https://api.open-meteo.com\`
- Gratis og ingen API-nøkkel nødvendig
- Værdata for hele verden

**3. REST Countries**:
- URL: \`https://restcountries.com/v3.1\`
- Informasjon om alle land
- Gratis uten API-nøkkel

**4. The Dog API**:
- URL: \`https://dog.ceo/api\`
- Tilfeldige hundebilder
- Gratis og morsomt

Disse er gode å starte med når du lærer API-programmering!`
    }
  ],
  exercises: [
    {
      id: 'it2-4-1-oppg-1',
      type: 'multiple-choice',
      question: 'Hva er et API?',
      options: [
        'Et grensesnitt som lar to programmer kommunisere',
        'En type database',
        'Et programmeringsspråk',
        'En nettleser'
      ],
      correctAnswer: 0,
      explanation: 'API står for Application Programming Interface og er et grensesnitt som lar programmer snakke sammen.'
    },
    {
      id: 'it2-4-1-oppg-2',
      type: 'multiple-choice',
      question: 'Hvilken HTTP-metode brukes for å hente data fra et API?',
      options: [
        'POST',
        'GET',
        'DELETE',
        'PUT'
      ],
      correctAnswer: 1,
      explanation: 'GET brukes for å hente (lese) data fra et API.'
    },
    {
      id: 'it2-4-1-oppg-3',
      type: 'classic',
      question: 'Forklar med egne ord hva JSON er og hvorfor det brukes i API-er.',
      answer: 'JSON (JavaScript Object Notation) er et tekstbasert dataformat som brukes til å utveksle data mellom programmer. Det er lett å lese for både mennesker og maskiner, strukturert med nøkkel-verdi-par, og er standard for moderne API-er fordi det er enkelt å parse i de fleste programmeringsspråk.'
    },
    {
      id: 'it2-4-1-oppg-4',
      type: 'multiple-choice',
      question: 'Hva er formålet med en API-nøkkel?',
      options: [
        'Å gjøre API-et raskere',
        'Å autentisere brukeren og hindre misbruk',
        'Å formatere JSON-data',
        'Å kryptere data'
      ],
      correctAnswer: 1,
      explanation: 'API-nøkler brukes for å identifisere og autentisere brukeren, hindre misbruk og spore API-bruk.'
    },
    {
      id: 'it2-4-1-oppg-5',
      type: 'classic',
      question: 'Du skal bruke et nytt API. Hvilke tre ting bør du sjekke i dokumentasjonen først?',
      answer: 'De tre viktigste tingene å sjekke er: 1) Hvilke endepunkter som finnes og hva de gjør, 2) Hvilke parametre som kreves og er valgfrie, 3) Om API-et krever autentisering (API-nøkkel) og hvordan den skal sendes.'
    },
    {
      id: 'it2-4-1-oppg-6',
      type: 'classic',
      question: 'Forklar forskjellen mellom et endepunkt og en HTTP-metode med eksempler.',
      answer: 'Et endepunkt er en spesifikk URL i API-et som utfører en funksjon, f.eks. "/users/123". HTTP-metoden beskriver hva du vil gjøre med den ressursen: GET /users/123 henter bruker 123, POST /users oppretter ny bruker, PUT /users/123 oppdaterer bruker 123, og DELETE /users/123 sletter bruker 123.'
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-4-1-oppg-7',
      type: 'classic',
      question: 'Du skal bygge en værapp. Beskriv hvordan appen vil bruke et vær-API for å vise værmeldingen for Oslo. Inkluder endepunkt, HTTP-metode og hvilke data som returneres.',
      answer: 'Appen sender en GET-forespørsel til værAPI-ets endepunkt, f.eks. GET https://api.weatherapi.com/v1/current.json?key=ABC123&q=Oslo. API-et returnerer JSON-data med værdata som temperatur, vindhastighet og værbeskrivelse. Appen parser JSON-dataene og viser dem i brukergrensesnittet.'
    },
    {
      id: 'it2-4-1-oppg-8',
      type: 'classic',
      question: 'Sammenlign REST API med et biblioteksystem: Identifiser klienten, serveren, endepunktene og HTTP-metodene.',
      answer: 'Klient = deg/bibliotekets brukere. Server = biblioteksystemet. Endepunkter = ulike tjenester (søk bok, lån bok, lever bok). HTTP-metoder: GET = søke etter bok, POST = registrere ny bok, PUT = oppdatere bokinfo, DELETE = fjerne bok fra systemet. API-dokumentasjon = bibliotekets regler og rutiner.'
    }
  ],
  keyTerms: [
    'API (Application Programming Interface)',
    'REST API',
    'HTTP-metoder (GET, POST, PUT, DELETE)',
    'Endepunkt',
    'JSON (JavaScript Object Notation)',
    'API-nøkkel',
    'Autentisering',
    'API-dokumentasjon'
  ],
  learningGoals: [
    'Forklare hva et API er og hvorfor det brukes',
    'Beskrive REST-arkitekturen og HTTP-metoder',
    'Forstå JSON-formatet og dets struktur',
    'Lese og forstå API-dokumentasjon',
    'Forklare betydningen av API-nøkler og autentisering'
  ],
  estimatedMinutes: 60,
  prevChapter: 'it-2-3-5',
  nextChapter: 'it-2-4-2'
};

// ============================================================================
// Kapittel 4.2: Hente data fra API-er
// ============================================================================

export const CHAPTER_IT_2_4_2: TextbookChapter = {
  id: 'it-2-4-2',
  courseId: 'it-2',
  title: 'Hente data fra API-er',
  chapterNumber: '4.2',
  section: 4,
  content: [
    {
      id: 'it2-4-2-intro',
      type: 'text',
      title: 'Innhenting av data fra API-er',
      content: `Nå som vi vet hva et API er, skal vi lære å bruke det i Python. For å kommunisere med API-er bruker vi **requests**-biblioteket, som gjør det enkelt å sende HTTP-forespørsler og motta svar.

I dette kapittelet skal vi:
- Installere og bruke requests-biblioteket
- Sende GET-forespørsler til API-er
- Håndtere svar og feilmeldinger
- Arbeide med API-nøkler
- Parse JSON-data`
    },
    {
      id: 'it2-4-2-text-1',
      type: 'text',
      title: 'Installere requests',
      content: `**requests** er ikke inkludert i standard Python, så vi må installere det først.

**Installasjon**:
\`\`\`bash
pip install requests
\`\`\`

Når det er installert, kan vi importere det i Python-programmet vårt:
\`\`\`python
import requests
\`\`\`

Dette gir oss tilgang til alle funksjonene vi trenger for å kommunisere med API-er.`
    },
    {
      id: 'it2-4-2-ex-1',
      type: 'example',
      title: 'Eksempel: Din første API-forespørsel',
      content: `La oss hente data fra JSONPlaceholder, et gratis test-API:

\`\`\`python
import requests

# Send GET-forespørsel til API-et
response = requests.get('https://jsonplaceholder.typicode.com/posts/1')

# Sjekk statuskoden
print(f"Statuskode: {response.status_code}")

# Hent JSON-data
data = response.json()

# Vis dataene
print(f"Tittel: {data['title']}")
print(f"Innhold: {data['body']}")
\`\`\`

**Output**:
\`\`\`
Statuskode: 200
Tittel: sunt aut facere repellat provident...
Innhold: quia et suscipit suscipit recusandae...
\`\`\`

**Forklaring**:
- \`requests.get()\` sender en GET-forespørsel
- \`response.status_code\` gir HTTP-statuskoden (200 = OK)
- \`response.json()\` konverterer JSON-svaret til en Python-dictionary`
    },
    {
      id: 'it2-4-2-def-1',
      type: 'definition',
      title: 'HTTP-statuskoder',
      content: `HTTP-statuskoder forteller oss om forespørselen var vellykket eller ikke:

**2xx – Suksess**:
- **200 OK**: Forespørselen var vellykket
- **201 Created**: Ny ressurs ble opprettet

**4xx – Klientfeil**:
- **400 Bad Request**: Ugyldig forespørsel
- **401 Unauthorized**: Mangler autentisering
- **404 Not Found**: Ressursen finnes ikke

**5xx – Serverfeil**:
- **500 Internal Server Error**: Serverfeil
- **503 Service Unavailable**: Tjenesten er utilgjengelig

Vi bør alltid sjekke statuskoden før vi behandler dataene.`
    },
    {
      id: 'it2-4-2-ex-2',
      type: 'example',
      title: 'Eksempel: Håndtere statuskoder',
      content: `Her er hvordan vi kan sjekke om forespørselen var vellykket:

\`\`\`python
import requests

url = 'https://jsonplaceholder.typicode.com/posts/1'
response = requests.get(url)

if response.status_code == 200:
    print("Suksess! Data mottatt.")
    data = response.json()
    print(data)
elif response.status_code == 404:
    print("Feil 404: Ressursen finnes ikke.")
else:
    print(f"Noe gikk galt. Statuskode: {response.status_code}")
\`\`\`

**Eller bruk try-except**:
\`\`\`python
import requests

try:
    response = requests.get(url, timeout=5)
    response.raise_for_status()  # Kaster exception hvis statuskode er 4xx eller 5xx
    data = response.json()
    print(data)
except requests.exceptions.HTTPError as e:
    print(f"HTTP-feil: {e}")
except requests.exceptions.ConnectionError:
    print("Kunne ikke koble til serveren.")
except requests.exceptions.Timeout:
    print("Forespørselen tok for lang tid.")
except requests.exceptions.RequestException as e:
    print(f"Feil: {e}")
\`\`\`

Dette er god praksis for å håndtere feil på en elegant måte.`
    },
    {
      id: 'it2-4-2-text-2',
      type: 'text',
      title: 'Query-parametre',
      content: `Mange API-er lar deg sende **query-parametre** for å filtrere eller tilpasse dataene du får tilbake.

**Eksempel-URL med parametre**:
\`\`\`
https://api.example.com/search?q=python&limit=10
\`\`\`

Her er:
- \`q=python\` en parameter som søker etter "python"
- \`limit=10\` en parameter som begrenser resultatet til 10 treff

**I requests**:
Du kan sende parametre på to måter:

**1. I URL-en direkte**:
\`\`\`python
response = requests.get('https://api.example.com/search?q=python&limit=10')
\`\`\`

**2. Som en dictionary (anbefalt)**:
\`\`\`python
params = {
    'q': 'python',
    'limit': 10
}
response = requests.get('https://api.example.com/search', params=params)
\`\`\`

Den andre metoden er mer lesbar og håndterer spesialtegn automatisk.`
    },
    {
      id: 'it2-4-2-ex-3',
      type: 'example',
      title: 'Eksempel: Værdata med parametre',
      content: `La oss hente værdata for Oslo fra Open-Meteo API:

\`\`\`python
import requests

# Base-URL
url = 'https://api.open-meteo.com/v1/forecast'

# Parametre
params = {
    'latitude': 59.91,      # Oslo
    'longitude': 10.75,
    'current_weather': True
}

# Send forespørsel
response = requests.get(url, params=params)

if response.status_code == 200:
    data = response.json()
    weather = data['current_weather']

    print(f"Temperatur: {weather['temperature']}°C")
    print(f"Vindhastighet: {weather['windspeed']} km/t")
    print(f"Værkode: {weather['weathercode']}")
else:
    print(f"Feil: {response.status_code}")
\`\`\`

**Output**:
\`\`\`
Temperatur: 12.5°C
Vindhastighet: 15.2 km/t
Værkode: 3
\`\`\`

Her sendte vi latitude og longitude som parametre for å få værdata for en spesifikk lokasjon.`
    },
    {
      id: 'it2-4-2-text-3',
      type: 'text',
      title: 'Bruke API-nøkler',
      content: `Mange API-er krever en API-nøkkel for å få tilgang. Dette gjøres vanligvis på én av to måter:

**1. Som query-parameter**:
\`\`\`python
params = {
    'api_key': 'DIN_HEMMELIGE_NØKKEL',
    'q': 'Oslo'
}
response = requests.get(url, params=params)
\`\`\`

**2. I HTTP-headeren**:
\`\`\`python
headers = {
    'Authorization': 'Bearer DIN_HEMMELIGE_NØKKEL'
}
response = requests.get(url, headers=headers)
\`\`\`

**Sikkerhetstips**:
- Lagre aldri API-nøkler direkte i koden hvis den deles offentlig
- Bruk miljøvariabler eller konfigurasjonsfiler
- Legg konfigurasjonsfiler til \`.gitignore\` hvis du bruker Git

**Bruke miljøvariabler**:
\`\`\`python
import os

api_key = os.getenv('MY_API_KEY')  # Hent fra miljøvariabel
params = {'api_key': api_key}
\`\`\`

Dette holder nøklene trygge og utenfor koden.`
    },
    {
      id: 'it2-4-2-ex-4',
      type: 'example',
      title: 'Eksempel: Hente flere poster',
      content: `La oss hente en liste med poster fra et API:

\`\`\`python
import requests

url = 'https://jsonplaceholder.typicode.com/posts'
response = requests.get(url)

if response.status_code == 200:
    posts = response.json()  # Liste med dictionaries

    print(f"Antall poster: {len(posts)}")
    print("\\nFørste 3 poster:")

    for post in posts[:3]:
        print(f"\\nID: {post['id']}")
        print(f"Tittel: {post['title']}")
        print(f"Innhold: {post['body'][:50]}...")  # Første 50 tegn
else:
    print(f"Feil: {response.status_code}")
\`\`\`

**Output**:
\`\`\`
Antall poster: 100

Første 3 poster:

ID: 1
Tittel: sunt aut facere repellat...
Innhold: quia et suscipit suscipit recusandae...

ID: 2
Tittel: qui est esse
Innhold: est rerum tempore vitae...

ID: 3
Tittel: ea molestias quasi...
Innhold: et iusto sed quo iure...
\`\`\`

Her får vi en liste med 100 poster, og vi viser bare de 3 første.`
    },
    {
      id: 'it2-4-2-text-4',
      type: 'text',
      title: 'Behandle JSON-data',
      content: `Når vi får JSON-data fra et API, konverteres det til Python-datastrukturer:

**JSON → Python**:
- JSON-objekt → Python dictionary
- JSON-liste → Python list
- JSON-string → Python str
- JSON-tall → Python int/float
- JSON boolean → Python bool
- JSON null → Python None

**Tilgang til data**:
\`\`\`python
data = response.json()

# Dictionary-tilgang
print(data['key'])
print(data['nested']['value'])

# Liste-tilgang
print(data['items'][0])

# Iterer over liste
for item in data['items']:
    print(item['name'])
\`\`\`

**Sjekk om nøkkel eksisterer**:
\`\`\`python
if 'key' in data:
    print(data['key'])
else:
    print("Nøkkelen finnes ikke")

# Eller bruk .get() med default-verdi
value = data.get('key', 'default')
\`\`\`

Dette unngår feil hvis nøkkelen mangler i JSON-dataene.`
    },
    {
      id: 'it2-4-2-ex-5',
      type: 'example',
      title: 'Praktisk eksempel: Land-info-søk',
      content: `La oss lage et program som henter informasjon om land:

\`\`\`python
import requests

def hent_land_info(landnavn):
    """Hent informasjon om et land fra REST Countries API"""
    url = f'https://restcountries.com/v3.1/name/{landnavn}'

    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()

        data = response.json()
        land = data[0]  # Første treff

        # Hent relevant info
        navn = land['name']['common']
        hovedstad = land.get('capital', ['Ukjent'])[0]
        befolkning = land['population']
        region = land['region']

        # Språk (kan være flere)
        sprak = ', '.join(land.get('languages', {}).values())

        # Vis info
        print(f"\\nLand: {navn}")
        print(f"Hovedstad: {hovedstad}")
        print(f"Befolkning: {befolkning:,}")
        print(f"Region: {region}")
        print(f"Språk: {sprak}")

    except requests.exceptions.HTTPError:
        print("Fant ikke landet.")
    except requests.exceptions.RequestException as e:
        print(f"Feil ved henting av data: {e}")

# Test programmet
hent_land_info('Norway')
hent_land_info('Japan')
\`\`\`

**Output**:
\`\`\`
Land: Norway
Hovedstad: Oslo
Befolkning: 5,379,475
Region: Europe
Språk: Norwegian Nynorsk, Norwegian Bokmål, Sami

Land: Japan
Hovedstad: Tokyo
Befolkning: 125,836,021
Region: Asia
Språk: Japanese
\`\`\`

Dette viser hvordan vi kan hente og behandle strukturert data fra et API.`
    }
  ],
  exercises: [
    {
      id: 'it2-4-2-oppg-1',
      type: 'multiple-choice',
      question: 'Hvilken kommando installerer requests-biblioteket?',
      options: [
        'python install requests',
        'pip install requests',
        'import requests',
        'npm install requests'
      ],
      correctAnswer: 1,
      explanation: 'pip install requests er kommandoen for å installere requests-biblioteket i Python.'
    },
    {
      id: 'it2-4-2-oppg-2',
      type: 'multiple-choice',
      question: 'Hva betyr HTTP-statuskode 404?',
      options: [
        'Suksess',
        'Serverfeil',
        'Ressursen finnes ikke',
        'Mangler autentisering'
      ],
      correctAnswer: 2,
      explanation: '404 Not Found betyr at ressursen du spurte etter ikke finnes på serveren.'
    },
    {
      id: 'it2-4-2-oppg-3',
      type: 'classic',
      question: 'Forklar hva response.json() gjør og når du skal bruke det.',
      answer: 'response.json() konverterer JSON-dataene i API-svaret til et Python-objekt (vanligvis en dictionary eller liste). Du bruker det etter en vellykket GET-forespørsel for å få dataene i et format du kan arbeide med i Python.'
    },
    {
      id: 'it2-4-2-oppg-4',
      type: 'multiple-choice',
      question: 'Hvordan sender du query-parametre med requests?',
      options: [
        'requests.get(url, query=params)',
        'requests.get(url, params=params)',
        'requests.get(url, data=params)',
        'requests.get(url + params)'
      ],
      correctAnswer: 1,
      explanation: 'params-parameteren brukes for å sende query-parametre som en dictionary.'
    },
    {
      id: 'it2-4-2-oppg-5',
      type: 'classic',
      question: 'Skriv Python-kode som sender en GET-forespørsel til https://api.example.com/data og skriver ut statuskoden.',
      answer: `import requests

response = requests.get('https://api.example.com/data')
print(f"Statuskode: {response.status_code}")`
    },
    {
      id: 'it2-4-2-oppg-6',
      type: 'classic',
      question: 'Hvorfor bør du bruke try-except når du jobber med API-er? Nevn minst tre typer feil som kan oppstå.',
      answer: 'Try-except er viktig fordi mange ting kan gå galt: 1) HTTP-feil (4xx, 5xx statuskoder), 2) Nettverksfeil (ingen internettforbindelse), 3) Timeout (serveren svarer ikke i tide), 4) JSON-parsing-feil (ugyldig JSON-format). Feilhåndtering gjør programmet mer robust.'
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-4-2-oppg-7',
      type: 'classic',
      question: 'Lag et Python-program som henter en tilfeldig hundebildeURL fra https://dog.ceo/api/breeds/image/random og skriver ut URL-en. Inkluder feilhåndtering.',
      answer: `import requests

try:
    response = requests.get('https://dog.ceo/api/breeds/image/random', timeout=5)
    response.raise_for_status()

    data = response.json()
    print(f"Hundebilde: {data['message']}")

except requests.exceptions.HTTPError as e:
    print(f"HTTP-feil: {e}")
except requests.exceptions.RequestException as e:
    print(f"Nettverksfeil: {e}")`
    },
    {
      id: 'it2-4-2-oppg-8',
      type: 'classic',
      question: 'Du skal lage et program som henter værdatafor flere byer (Oslo, Bergen, Trondheim) fra et API. Beskriv hvordan du ville strukturert programmet og hvilke funksjoner du ville laget.',
      answer: `Jeg ville strukturert programmet slik:

1. En funksjon hent_vaer(by, lat, lon) som tar imot by-navn og koordinater, sender GET-forespørsel med requests, håndterer feil, og returnerer værdata.

2. En dictionary med byer og koordinater:
byer = {
    'Oslo': (59.91, 10.75),
    'Bergen': (60.39, 5.32),
    'Trondheim': (63.43, 10.39)
}

3. En hovedløkke som itererer over byene, kaller hent_vaer() for hver, og viser resultatene formatert.

4. Try-except for å håndtere nettverksfeil og ugyldige svar.`
    }
  ],
  keyTerms: [
    'requests-biblioteket',
    'GET-forespørsel',
    'HTTP-statuskoder',
    'Query-parametre',
    'response.json()',
    'API-nøkkel',
    'Headers',
    'Exception-håndtering'
  ],
  learningGoals: [
    'Bruke requests-biblioteket til å hente data fra API-er',
    'Sende GET-forespørsler med parametre',
    'Håndtere HTTP-statuskoder og feilmeldinger',
    'Parse JSON-data til Python-objekter',
    'Bruke API-nøkler på en sikker måte'
  ],
  estimatedMinutes: 65,
  prevChapter: 'it-2-4-1',
  nextChapter: 'it-2-4-3'
};

// ============================================================================
// Kapittel 4.3: Dataformater – JSON og XML
// ============================================================================

export const CHAPTER_IT_2_4_3: TextbookChapter = {
  id: 'it-2-4-3',
  courseId: 'it-2',
  title: 'Dataformater – JSON og XML',
  chapterNumber: '4.3',
  section: 4,
  content: [
    {
      id: 'it2-4-3-intro',
      type: 'text',
      title: 'Introduksjon til dataformater',
      content: `Når programmer skal utveksle data, trenger de et felles format som begge forstår. De to mest brukte formatene for datautveksling er **JSON** (JavaScript Object Notation) og **XML** (eXtensible Markup Language).

I dette kapittelet skal vi se nærmere på:
- Hvordan JSON og XML er strukturert
- Parsing (lesing) av JSON og XML i Python
- Serialisering (skriving) av data til JSON
- Når du bør velge JSON vs XML
- Arbeid med nestede datastrukturer`
    },
    {
      id: 'it2-4-3-def-1',
      type: 'definition',
      title: 'Parsing og serialisering',
      content: `**Parsing** betyr å lese og tolke data fra et format (som JSON eller XML) til Python-objekter (dictionaries, lister osv.).

**Serialisering** betyr å konvertere Python-objekter til et tekstformat (som JSON eller XML) som kan lagres eller sendes over nettverket.

- **JSON → Python**: Parsing
- **Python → JSON**: Serialisering`
    },
    {
      id: 'it2-4-3-text-1',
      type: 'text',
      title: 'JSON i Python',
      content: `Python har en innebygd **json**-modul som gjør det enkelt å arbeide med JSON-data.

**Viktige funksjoner**:
- \`json.loads()\` – Parse JSON-string til Python-objekt
- \`json.dumps()\` – Serialiser Python-objekt til JSON-string
- \`json.load()\` – Les JSON fra fil
- \`json.dump()\` – Skriv JSON til fil

**JSON-typer → Python-typer**:
\`\`\`
JSON          Python
------------------
object    →   dict
array     →   list
string    →   str
number    →   int/float
true      →   True
false     →   False
null      →   None
\`\`\``
    },
    {
      id: 'it2-4-3-ex-1',
      type: 'example',
      title: 'Eksempel: Parse JSON-string',
      content: `La oss parse en JSON-string til et Python-objekt:

\`\`\`python
import json

# JSON-string
json_data = '''
{
  "navn": "Emma Hansen",
  "alder": 18,
  "fag": ["Matematikk", "IT", "Fysikk"],
  "aktiv": true,
  "karakter": null
}
'''

# Parse JSON til Python dictionary
student = json.loads(json_data)

# Nå kan vi jobbe med det som et vanlig Python-objekt
print(f"Navn: {student['navn']}")
print(f"Alder: {student['alder']}")
print(f"Fag: {', '.join(student['fag'])}")
print(f"Aktiv: {student['aktiv']}")
print(f"Type: {type(student)}")
\`\`\`

**Output**:
\`\`\`
Navn: Emma Hansen
Alder: 18
Fag: Matematikk, IT, Fysikk
Aktiv: True
Type: <class 'dict'>
\`\`\`

JSON-objektet ble konvertert til en Python dictionary.`
    },
    {
      id: 'it2-4-3-ex-2',
      type: 'example',
      title: 'Eksempel: Serialiser til JSON',
      content: `Nå skal vi konvertere et Python-objekt til JSON:

\`\`\`python
import json

# Python dictionary
student = {
    'navn': 'Lars Olsen',
    'alder': 17,
    'fag': ['Norsk', 'Engelsk', 'Historie'],
    'aktiv': True,
    'karakter': None
}

# Konverter til JSON-string
json_string = json.dumps(student)
print(json_string)

# Med formatering for bedre lesbarhet
json_formatert = json.dumps(student, indent=2, ensure_ascii=False)
print("\\nFormatert:")
print(json_formatert)
\`\`\`

**Output**:
\`\`\`
{"navn": "Lars Olsen", "alder": 17, "fag": ["Norsk", "Engelsk", "Historie"], "aktiv": true, "karakter": null}

Formatert:
{
  "navn": "Lars Olsen",
  "alder": 17,
  "fag": [
    "Norsk",
    "Engelsk",
    "Historie"
  ],
  "aktiv": true,
  "karakter": null
}
\`\`\`

**Parametre**:
- \`indent=2\`: Legger til innrykk for lesbarhet
- \`ensure_ascii=False\`: Beholder norske tegn (æ, ø, å)`
    },
    {
      id: 'it2-4-3-ex-3',
      type: 'example',
      title: 'Eksempel: Lese og skrive JSON-filer',
      content: `Her er hvordan vi arbeider med JSON-filer:

\`\`\`python
import json

# Data vi vil lagre
data = {
    'skole': 'Oslo Videregående',
    'elever': [
        {'navn': 'Emma', 'alder': 18, 'trinn': 'VG3'},
        {'navn': 'Lars', 'alder': 17, 'trinn': 'VG2'},
        {'navn': 'Sara', 'alder': 16, 'trinn': 'VG1'}
    ],
    'antall': 3
}

# Skriv til fil
with open('skoledata.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Data lagret til skoledata.json")

# Les fra fil
with open('skoledata.json', 'r', encoding='utf-8') as f:
    innlest_data = json.load(f)

print(f"\\nSkole: {innlest_data['skole']}")
print(f"Antall elever: {innlest_data['antall']}")

for elev in innlest_data['elever']:
    print(f"- {elev['navn']} ({elev['trinn']})")
\`\`\`

**Output**:
\`\`\`
Data lagret til skoledata.json

Skole: Oslo Videregående
Antall elever: 3
- Emma (VG3)
- Lars (VG2)
- Sara (VG1)
\`\`\`

Dette er nyttig for å lagre konfigurasjoner eller data lokalt.`
    },
    {
      id: 'it2-4-3-text-2',
      type: 'text',
      title: 'Nestede JSON-strukturer',
      content: `JSON kan ha **nestede** objekter og lister, som gjør det mulig å representere komplekse datastrukturer.

**Eksempel på nestet JSON**:
\`\`\`json
{
  "skole": "Oslo VGS",
  "klasser": [
    {
      "navn": "3A",
      "elever": [
        {"navn": "Emma", "karakterer": [5, 6, 5]},
        {"navn": "Lars", "karakterer": [4, 5, 6]}
      ]
    }
  ]
}
\`\`\`

**Tilgang til nestede data**:
\`\`\`python
data = json.loads(json_string)

# Tilgang til nestet data
klasse_navn = data['klasser'][0]['navn']
første_elev = data['klasser'][0]['elever'][0]['navn']
første_karakter = data['klasser'][0]['elever'][0]['karakterer'][0]

print(f"Klasse: {klasse_navn}")
print(f"Første elev: {første_elev}")
print(f"Første karakter: {første_karakter}")
\`\`\`

Du navigerer gjennom strukturen ved å bruke \`[]\` for lister og \`['key']\` for dictionaries.`
    },
    {
      id: 'it2-4-3-def-2',
      type: 'definition',
      title: 'XML (eXtensible Markup Language)',
      content: `**XML** er et markup-språk som brukes til å strukturere data. XML bruker tags (lignende HTML) for å organisere informasjon.

**Eksempel**:
\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<student>
  <navn>Emma Hansen</navn>
  <alder>18</alder>
  <fag>
    <fag>Matematikk</fag>
    <fag>IT</fag>
  </fag>
</student>
\`\`\`

**Egenskaper**:
- Mer verbose (ordrik) enn JSON
- Støtter attributter: \`<elev id="123">\`
- Brukes mye i eldre systemer og bedriftsapplikasjoner
- Støtter kommentarer: \`<!-- kommentar -->\``
    },
    {
      id: 'it2-4-3-ex-4',
      type: 'example',
      title: 'Eksempel: Parse XML i Python',
      content: `Python har en innebygd modul for XML: \`xml.etree.ElementTree\`

\`\`\`python
import xml.etree.ElementTree as ET

# XML-data
xml_data = '''
<?xml version="1.0"?>
<skole>
  <elev id="1">
    <navn>Emma Hansen</navn>
    <alder>18</alder>
    <karakter>5</karakter>
  </elev>
  <elev id="2">
    <navn>Lars Olsen</navn>
    <alder>17</alder>
    <karakter>6</karakter>
  </elev>
</skole>
'''

# Parse XML
root = ET.fromstring(xml_data)

# Iterer over elever
for elev in root.findall('elev'):
    elev_id = elev.get('id')  # Hent attributt
    navn = elev.find('navn').text
    alder = elev.find('alder').text
    karakter = elev.find('karakter').text

    print(f"ID: {elev_id} - {navn}, {alder} år, karakter: {karakter}")
\`\`\`

**Output**:
\`\`\`
ID: 1 - Emma Hansen, 18 år, karakter: 5
ID: 2 - Lars Olsen, 17 år, karakter: 6
\`\`\`

XML er mer komplisert å jobbe med enn JSON, men nødvendig for mange API-er og datasystemer.`
    },
    {
      id: 'it2-4-3-text-3',
      type: 'text',
      title: 'JSON vs XML',
      content: `**JSON**:
✅ Enklere og mer kompakt
✅ Lettere å lese for mennesker
✅ Naturlig mapping til Python-objekter
✅ Standard for moderne web-API-er
✅ Raskere å parse
❌ Ingen støtte for kommentarer
❌ Ingen dokumentskjemaer (XSD)

**XML**:
✅ Støtter attributter
✅ Støtter kommentarer
✅ Skjemavalidering (XSD, DTD)
✅ Bedre for dokumentorientert data
❌ Mer verbose (tar mer plass)
❌ Vanskeligere å parse
❌ Mindre egnet for web-API-er

**Tommelfingerregel**:
- Bruk **JSON** for moderne web-API-er og enkle datastrukturer
- Bruk **XML** når du må (eldre systemer, SOAP, RSS-feeds)`
    },
    {
      id: 'it2-4-3-ex-5',
      type: 'example',
      title: 'Praktisk eksempel: Værdata med JSON',
      content: `La oss hente værdata fra et API og lagre det som JSON:

\`\`\`python
import requests
import json
from datetime import datetime

def hent_og_lagre_vaer(by):
    """Hent værdata og lagre til JSON-fil"""
    url = 'https://api.open-meteo.com/v1/forecast'
    params = {
        'latitude': 59.91 if by == 'Oslo' else 60.39,
        'longitude': 10.75 if by == 'Oslo' else 5.32,
        'current_weather': True
    }

    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()

        # Lag strukturert data
        vaerdata = {
            'by': by,
            'tidspunkt': datetime.now().isoformat(),
            'temperatur': data['current_weather']['temperature'],
            'vindhastighet': data['current_weather']['windspeed'],
            'vaerkode': data['current_weather']['weathercode']
        }

        # Lagre til fil
        filnavn = f'{by.lower()}_vaer.json'
        with open(filnavn, 'w', encoding='utf-8') as f:
            json.dump(vaerdata, f, indent=2, ensure_ascii=False)

        print(f"Værdata for {by} lagret i {filnavn}")
        return vaerdata
    else:
        print(f"Kunne ikke hente værdata: {response.status_code}")
        return None

# Test
oslo_vaer = hent_og_lagre_vaer('Oslo')
if oslo_vaer:
    print(f"\\nTemperatur i Oslo: {oslo_vaer['temperatur']}°C")
\`\`\`

Dette viser praktisk bruk av både API-kall og JSON-filhåndtering.`
    }
  ],
  exercises: [
    {
      id: 'it2-4-3-oppg-1',
      type: 'multiple-choice',
      question: 'Hva betyr "parsing" av JSON-data?',
      options: [
        'Å sende JSON over nettverket',
        'Å konvertere JSON-tekst til Python-objekter',
        'Å kryptere JSON-data',
        'Å komprimere JSON-filer'
      ],
      correctAnswer: 1,
      explanation: 'Parsing betyr å tolke/konvertere JSON-tekst til Python-objekter som dictionaries og lister.'
    },
    {
      id: 'it2-4-3-oppg-2',
      type: 'multiple-choice',
      question: 'Hvilken Python-funksjon konverterer et dictionary til JSON-string?',
      options: [
        'json.loads()',
        'json.dumps()',
        'json.parse()',
        'json.stringify()'
      ],
      correctAnswer: 1,
      explanation: 'json.dumps() serialiserer (konverterer) Python-objekter til JSON-string.'
    },
    {
      id: 'it2-4-3-oppg-3',
      type: 'classic',
      question: 'Gitt JSON-strengen: {"navn": "Emma", "alder": 18, "fag": ["IT", "Matematikk"]}. Skriv Python-kode som parser dette og skriver ut navnet.',
      answer: `import json

json_string = '{"navn": "Emma", "alder": 18, "fag": ["IT", "Matematikk"]}'
data = json.loads(json_string)
print(data['navn'])  # Output: Emma`
    },
    {
      id: 'it2-4-3-oppg-4',
      type: 'multiple-choice',
      question: 'Hva er forskjellen mellom json.loads() og json.load()?',
      options: [
        'json.loads() leser fra string, json.load() leser fra fil',
        'json.loads() leser fra fil, json.load() leser fra string',
        'De gjør det samme',
        'json.loads() er raskere'
      ],
      correctAnswer: 0,
      explanation: 'json.loads() parser en JSON-string, mens json.load() leser og parser JSON fra en fil.'
    },
    {
      id: 'it2-4-3-oppg-5',
      type: 'classic',
      question: 'Forklar forskjellen mellom JSON og XML. Nevn minst to fordeler med JSON.',
      answer: 'JSON er enklere og mer kompakt enn XML. Fordeler med JSON: 1) Lettere å lese for mennesker, 2) Naturlig mapping til Python-objekter (dictionaries/lister), 3) Mindre verbose (tar mindre plass), 4) Raskere å parse, 5) Standard for moderne API-er. XML er mer verbose og komplisert, men støtter attributter og kommentarer.'
    },
    {
      id: 'it2-4-3-oppg-6',
      type: 'classic',
      question: 'Skriv Python-kode som lager et dictionary med minst 3 nøkler og lagrer det til en JSON-fil kalt "data.json" med formatering.',
      answer: `import json

data = {
    'skole': 'Oslo VGS',
    'elever': 450,
    'trinn': ['VG1', 'VG2', 'VG3']
}

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)`
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-4-3-oppg-7',
      type: 'classic',
      question: 'Du har nestet JSON: {"klasse": {"navn": "3A", "elever": [{"navn": "Emma", "alder": 18}, {"navn": "Lars", "alder": 17}]}}. Skriv Python-kode som henter alderen til Lars.',
      answer: `import json

json_string = '{"klasse": {"navn": "3A", "elever": [{"navn": "Emma", "alder": 18}, {"navn": "Lars", "alder": 17}]}}'
data = json.loads(json_string)

# Tilgang til Lars sin alder (andre elev i listen)
lars_alder = data['klasse']['elever'][1]['alder']
print(lars_alder)  # Output: 17`
    },
    {
      id: 'it2-4-3-oppg-8',
      type: 'classic',
      question: 'Lag et Python-program som leser en JSON-fil "elever.json", legger til en ny elev i listen, og lagrer den oppdaterte listen tilbake til filen.',
      answer: `import json

# Les eksisterende data
with open('elever.json', 'r', encoding='utf-8') as f:
    elever = json.load(f)

# Legg til ny elev
ny_elev = {'navn': 'Sara', 'alder': 17, 'trinn': 'VG2'}
elever.append(ny_elev)

# Lagre tilbake
with open('elever.json', 'w', encoding='utf-8') as f:
    json.dump(elever, f, indent=2, ensure_ascii=False)

print(f"Lagt til {ny_elev['navn']}. Totalt {len(elever)} elever.")`
    }
  ],
  keyTerms: [
    'JSON (JavaScript Object Notation)',
    'XML (eXtensible Markup Language)',
    'Parsing',
    'Serialisering',
    'json.loads() og json.dumps()',
    'Nestede datastrukturer',
    'xml.etree.ElementTree',
    'API-dataformater'
  ],
  learningGoals: [
    'Forklare forskjellen mellom JSON og XML',
    'Parse JSON-data til Python-objekter',
    'Serialisere Python-objekter til JSON',
    'Lese og skrive JSON-filer',
    'Arbeide med nestede JSON-strukturer',
    'Parse enkle XML-dokumenter'
  ],
  estimatedMinutes: 60,
  prevChapter: 'it-2-4-2',
  nextChapter: 'it-2-4-4'
};

// ============================================================================
// Kapittel 4.4: Bygge eget API med Flask
// ============================================================================

export const CHAPTER_IT_2_4_4: TextbookChapter = {
  id: 'it-2-4-4',
  courseId: 'it-2',
  title: 'Bygge eget API med Flask',
  chapterNumber: '4.4',
  section: 4,
  content: [
    {
      id: 'it2-4-4-intro',
      type: 'text',
      title: 'Introduksjon til Flask',
      content: `Så langt har vi brukt API-er laget av andre. Nå skal vi lære å bygge våre egne API-er med **Flask**, et enkelt og populært Python-rammeverk for webutvikling.

Med Flask kan vi:
- Lage REST API-er
- Definere endepunkter (ruter)
- Håndtere HTTP-forespørsler (GET, POST, PUT, DELETE)
- Returnere JSON-data
- Bygge backends for webapplikasjoner

I dette kapittelet skal vi lage et enkelt API fra bunnen av.`
    },
    {
      id: 'it2-4-4-text-1',
      type: 'text',
      title: 'Installere Flask',
      content: `Flask er ikke inkludert i standard Python, så vi må installere det først:

\`\`\`bash
pip install flask
\`\`\`

**Verifiser installasjonen**:
\`\`\`python
import flask
print(flask.__version__)
\`\`\`

Flask er et **mikroframework**, som betyr at det er minimalistisk og lett å komme i gang med. Det har ikke masse innebygde funksjoner, men kan utvides med plugins etter behov.`
    },
    {
      id: 'it2-4-4-ex-1',
      type: 'example',
      title: 'Eksempel: Din første Flask-app',
      content: `La oss lage en enkel Flask-applikasjon:

\`\`\`python
from flask import Flask

# Opprett Flask-app
app = Flask(__name__)

# Definer en rute (endepunkt)
@app.route('/')
def hjem():
    return 'Velkommen til mitt API!'

@app.route('/hei/<navn>')
def hei(navn):
    return f'Hei, {navn}!'

# Kjør serveren
if __name__ == '__main__':
    app.run(debug=True, port=5000)
\`\`\`

**Kjør programmet**:
\`\`\`bash
python app.py
\`\`\`

**Test i nettleseren**:
- \`http://localhost:5000/\` → "Velkommen til mitt API!"
- \`http://localhost:5000/hei/Emma\` → "Hei, Emma!"

**Forklaring**:
- \`@app.route()\` er en **decorator** som definerer en URL-rute
- Funksjonen under returnerer hva som skal vises
- \`<navn>\` er en **URL-parameter**
- \`debug=True\` gir bedre feilmeldinger og automatisk restart`
    },
    {
      id: 'it2-4-4-def-1',
      type: 'definition',
      title: 'Flask-ruter og HTTP-metoder',
      content: `En **rute** (route) er en URL-sti som Flask lytter på. Når noen sender en forespørsel til den ruten, kjører Flask den tilknyttede funksjonen.

**HTTP-metoder**:
Du kan spesifisere hvilke HTTP-metoder en rute skal akseptere:

\`\`\`python
@app.route('/data', methods=['GET'])
def hent_data():
    return 'GET-forespørsel'

@app.route('/data', methods=['POST'])
def opprett_data():
    return 'POST-forespørsel'
\`\`\`

Standardmetoden er GET hvis ikke annet er spesifisert.`
    },
    {
      id: 'it2-4-4-ex-2',
      type: 'example',
      title: 'Eksempel: Returnere JSON',
      content: `For å lage et ordentlig API må vi returnere JSON i stedet for tekst:

\`\`\`python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/info')
def info():
    data = {
        'navn': 'Mitt API',
        'versjon': '1.0',
        'forfatter': 'Emma Hansen'
    }
    return jsonify(data)

@app.route('/api/elever')
def elever():
    elever = [
        {'id': 1, 'navn': 'Emma', 'alder': 18},
        {'id': 2, 'navn': 'Lars', 'alder': 17},
        {'id': 3, 'navn': 'Sara', 'alder': 16}
    ]
    return jsonify(elever)

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

**Test**:
\`\`\`bash
curl http://localhost:5000/api/info
curl http://localhost:5000/api/elever
\`\`\`

**Svar**:
\`\`\`json
{
  "navn": "Mitt API",
  "versjon": "1.0",
  "forfatter": "Emma Hansen"
}
\`\`\`

\`jsonify()\` konverterer automatisk Python-objekter til JSON-respons.`
    },
    {
      id: 'it2-4-4-text-2',
      type: 'text',
      title: 'Håndtere GET med parametre',
      content: `Flask lar deg hente **query-parametre** fra URL-en:

**URL-eksempel**:
\`\`\`
http://localhost:5000/sok?q=python&limit=10
\`\`\`

**Hente parametre**:
\`\`\`python
from flask import request

@app.route('/sok')
def sok():
    q = request.args.get('q', '')  # Default: tom string
    limit = request.args.get('limit', 10, type=int)

    return jsonify({
        'sokord': q,
        'limit': limit
    })
\`\`\`

**Test**:
\`\`\`
GET /sok?q=flask&limit=5
\`\`\`

**Svar**:
\`\`\`json
{
  "sokord": "flask",
  "limit": 5
}
\`\`\``
    },
    {
      id: 'it2-4-4-ex-3',
      type: 'example',
      title: 'Eksempel: POST-forespørsler',
      content: `For å motta data fra klienten bruker vi POST:

\`\`\`python
from flask import Flask, request, jsonify

app = Flask(__name__)

# Midlertidig database (liste)
elever = []
neste_id = 1

@app.route('/api/elever', methods=['GET'])
def hent_elever():
    return jsonify(elever)

@app.route('/api/elever', methods=['POST'])
def legg_til_elev():
    global neste_id

    # Hent JSON-data fra forespørselen
    data = request.get_json()

    # Valider data
    if not data or 'navn' not in data:
        return jsonify({'error': 'Navn mangler'}), 400

    # Opprett ny elev
    ny_elev = {
        'id': neste_id,
        'navn': data['navn'],
        'alder': data.get('alder', 0)
    }

    elever.append(ny_elev)
    neste_id += 1

    return jsonify(ny_elev), 201  # 201 Created

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

**Test med curl**:
\`\`\`bash
curl -X POST http://localhost:5000/api/elever \\
  -H "Content-Type: application/json" \\
  -d '{"navn": "Emma", "alder": 18}'
\`\`\`

**Svar**:
\`\`\`json
{
  "id": 1,
  "navn": "Emma",
  "alder": 18
}
\`\`\``
    },
    {
      id: 'it2-4-4-ex-4',
      type: 'example',
      title: 'Eksempel: Komplett CRUD API',
      content: `Her er et fullstendig API med alle CRUD-operasjoner:

\`\`\`python
from flask import Flask, request, jsonify

app = Flask(__name__)

bøker = [
    {'id': 1, 'tittel': '1984', 'forfatter': 'George Orwell'},
    {'id': 2, 'tittel': 'Doppler', 'forfatter': 'Erlend Loe'}
]
neste_id = 3

# CREATE
@app.route('/api/boker', methods=['POST'])
def opprett_bok():
    global neste_id
    data = request.get_json()

    if not data or 'tittel' not in data:
        return jsonify({'error': 'Tittel mangler'}), 400

    ny_bok = {
        'id': neste_id,
        'tittel': data['tittel'],
        'forfatter': data.get('forfatter', 'Ukjent')
    }
    bøker.append(ny_bok)
    neste_id += 1

    return jsonify(ny_bok), 201

# READ (alle)
@app.route('/api/boker', methods=['GET'])
def hent_alle_boker():
    return jsonify(bøker)

# READ (én)
@app.route('/api/boker/<int:bok_id>', methods=['GET'])
def hent_bok(bok_id):
    bok = next((b for b in bøker if b['id'] == bok_id), None)
    if bok:
        return jsonify(bok)
    return jsonify({'error': 'Bok ikke funnet'}), 404

# UPDATE
@app.route('/api/boker/<int:bok_id>', methods=['PUT'])
def oppdater_bok(bok_id):
    bok = next((b for b in bøker if b['id'] == bok_id), None)
    if not bok:
        return jsonify({'error': 'Bok ikke funnet'}), 404

    data = request.get_json()
    bok['tittel'] = data.get('tittel', bok['tittel'])
    bok['forfatter'] = data.get('forfatter', bok['forfatter'])

    return jsonify(bok)

# DELETE
@app.route('/api/boker/<int:bok_id>', methods=['DELETE'])
def slett_bok(bok_id):
    global bøker
    bok = next((b for b in bøker if b['id'] == bok_id), None)
    if not bok:
        return jsonify({'error': 'Bok ikke funnet'}), 404

    bøker = [b for b in bøker if b['id'] != bok_id]
    return jsonify({'message': 'Bok slettet'})

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

Dette er et komplett REST API med alle grunnleggende operasjoner.`
    },
    {
      id: 'it2-4-4-text-3',
      type: 'text',
      title: 'Testing av API med requests',
      content: `Du kan teste ditt eget Flask-API med requests-biblioteket:

\`\`\`python
import requests

# GET alle bøker
response = requests.get('http://localhost:5000/api/boker')
print(response.json())

# POST ny bok
ny_bok = {'tittel': 'Sofies verden', 'forfatter': 'Jostein Gaarder'}
response = requests.post('http://localhost:5000/api/boker', json=ny_bok)
print(response.json())

# PUT (oppdater)
oppdatering = {'tittel': 'Sofies verden (revidert)'}
response = requests.put('http://localhost:5000/api/boker/3', json=oppdatering)
print(response.json())

# DELETE
response = requests.delete('http://localhost:5000/api/boker/3')
print(response.json())
\`\`\`

Dette lar deg automatisere testing av API-et ditt.`
    },
    {
      id: 'it2-4-4-ex-5',
      type: 'example',
      title: 'Praktisk eksempel: Værlogg-API',
      content: `La oss lage et API for å logge værobservasjoner:

\`\`\`python
from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

observasjoner = []
neste_id = 1

@app.route('/api/vaer', methods=['POST'])
def legg_til_observasjon():
    """Registrer ny værobservasjon"""
    global neste_id
    data = request.get_json()

    if not data or 'temperatur' not in data:
        return jsonify({'error': 'Temperatur mangler'}), 400

    observasjon = {
        'id': neste_id,
        'temperatur': data['temperatur'],
        'luftfuktighet': data.get('luftfuktighet'),
        'vindhastighet': data.get('vindhastighet'),
        'tidspunkt': datetime.now().isoformat()
    }

    observasjoner.append(observasjon)
    neste_id += 1

    return jsonify(observasjon), 201

@app.route('/api/vaer', methods=['GET'])
def hent_observasjoner():
    """Hent alle observasjoner, eventuelt filtrert"""
    limit = request.args.get('limit', len(observasjoner), type=int)
    return jsonify(observasjoner[-limit:])

@app.route('/api/vaer/statistikk', methods=['GET'])
def statistikk():
    """Beregn statistikk over observasjoner"""
    if not observasjoner:
        return jsonify({'error': 'Ingen data'}), 404

    temperaturer = [o['temperatur'] for o in observasjoner]

    stats = {
        'antall': len(observasjoner),
        'gjennomsnitt': sum(temperaturer) / len(temperaturer),
        'min': min(temperaturer),
        'max': max(temperaturer)
    }

    return jsonify(stats)

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

**Bruk**:
\`\`\`bash
# Legg til observasjon
curl -X POST http://localhost:5000/api/vaer \\
  -H "Content-Type: application/json" \\
  -d '{"temperatur": 15.5, "luftfuktighet": 65}'

# Hent statistikk
curl http://localhost:5000/api/vaer/statistikk
\`\`\`

Dette viser hvordan du kan bygge et praktisk API for datainnsamling.`
    }
  ],
  exercises: [
    {
      id: 'it2-4-4-oppg-1',
      type: 'multiple-choice',
      question: 'Hva er Flask?',
      options: [
        'En database',
        'Et Python-rammeverk for webutvikling',
        'Et programmeringsspråk',
        'En HTTP-metode'
      ],
      correctAnswer: 1,
      explanation: 'Flask er et mikroframework for Python som gjør det enkelt å bygge webapplikasjoner og API-er.'
    },
    {
      id: 'it2-4-4-oppg-2',
      type: 'multiple-choice',
      question: 'Hva gjør @app.route() i Flask?',
      options: [
        'Starter Flask-serveren',
        'Definerer en URL-rute',
        'Returnerer JSON',
        'Håndterer feil'
      ],
      correctAnswer: 1,
      explanation: '@app.route() er en decorator som knytter en URL-sti til en Python-funksjon.'
    },
    {
      id: 'it2-4-4-oppg-3',
      type: 'classic',
      question: 'Skriv Flask-kode for en rute "/hei" som returnerer JSON: {"melding": "Hei, verden!"}',
      answer: `from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/hei')
def hei():
    return jsonify({'melding': 'Hei, verden!'})`
    },
    {
      id: 'it2-4-4-oppg-4',
      type: 'multiple-choice',
      question: 'Hvordan henter du JSON-data sendt med en POST-forespørsel i Flask?',
      options: [
        'request.json()',
        'request.get_json()',
        'request.data()',
        'request.post()'
      ],
      correctAnswer: 1,
      explanation: 'request.get_json() henter og parser JSON-data fra forespørselens body.'
    },
    {
      id: 'it2-4-4-oppg-5',
      type: 'classic',
      question: 'Forklar hva CRUD står for og hvilke HTTP-metoder som tilsvarer hver operasjon.',
      answer: 'CRUD står for Create, Read, Update, Delete. HTTP-metoder: Create = POST (opprett ny ressurs), Read = GET (hent data), Update = PUT (oppdater eksisterende ressurs), Delete = DELETE (slett ressurs).'
    },
    {
      id: 'it2-4-4-oppg-6',
      type: 'classic',
      question: 'Skriv Flask-kode for en POST-rute "/melding" som mottar JSON med nøkkelen "tekst" og returnerer {"mottatt": teksten}.',
      answer: `@app.route('/melding', methods=['POST'])
def melding():
    data = request.get_json()
    if not data or 'tekst' not in data:
        return jsonify({'error': 'Tekst mangler'}), 400
    return jsonify({'mottatt': data['tekst']})`
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-4-4-oppg-7',
      type: 'classic',
      question: 'Lag et Flask API med én liste "oppgaver" (tom ved start) og to ruter: GET /oppgaver (returner alle) og POST /oppgaver (legg til ny oppgave med "tittel").',
      answer: `from flask import Flask, request, jsonify

app = Flask(__name__)
oppgaver = []
neste_id = 1

@app.route('/oppgaver', methods=['GET'])
def hent_oppgaver():
    return jsonify(oppgaver)

@app.route('/oppgaver', methods=['POST'])
def legg_til_oppgave():
    global neste_id
    data = request.get_json()

    if not data or 'tittel' not in data:
        return jsonify({'error': 'Tittel mangler'}), 400

    ny_oppgave = {
        'id': neste_id,
        'tittel': data['tittel'],
        'fullfort': False
    }
    oppgaver.append(ny_oppgave)
    neste_id += 1

    return jsonify(ny_oppgave), 201

if __name__ == '__main__':
    app.run(debug=True)`
    },
    {
      id: 'it2-4-4-oppg-8',
      type: 'classic',
      question: 'Utvid Flask API-et fra forrige oppgave med en DELETE-rute "/oppgaver/<id>" som sletter oppgaven med gitt ID og returnerer feilmelding hvis ID ikke finnes.',
      answer: `@app.route('/oppgaver/<int:oppgave_id>', methods=['DELETE'])
def slett_oppgave(oppgave_id):
    global oppgaver

    # Finn oppgaven
    oppgave = next((o for o in oppgaver if o['id'] == oppgave_id), None)

    if not oppgave:
        return jsonify({'error': 'Oppgave ikke funnet'}), 404

    # Fjern oppgaven
    oppgaver = [o for o in oppgaver if o['id'] != oppgave_id]

    return jsonify({'melding': f'Oppgave {oppgave_id} slettet'})`
    }
  ],
  keyTerms: [
    'Flask',
    'Rute (route)',
    'Decorator (@app.route)',
    'jsonify()',
    'request.get_json()',
    'HTTP-metoder (GET, POST, PUT, DELETE)',
    'REST API',
    'CRUD-operasjoner'
  ],
  learningGoals: [
    'Installere og sette opp Flask',
    'Definere ruter og endepunkter',
    'Håndtere GET og POST-forespørsler',
    'Returnere JSON-data',
    'Bygge et komplett CRUD API',
    'Teste API med requests-biblioteket'
  ],
  estimatedMinutes: 70,
  prevChapter: 'it-2-4-3',
  nextChapter: 'it-2-4-5'
};

// ============================================================================
// Kapittel 4.5: Nettverkskommunikasjon
// ============================================================================

export const CHAPTER_IT_2_4_5: TextbookChapter = {
  id: 'it-2-4-5',
  courseId: 'it-2',
  title: 'Nettverkskommunikasjon',
  chapterNumber: '4.5',
  section: 4,
  content: [
    {
      id: 'it2-4-5-intro',
      type: 'text',
      title: 'Introduksjon til nettverkskommunikasjon',
      content: `Når programmer kommuniserer over nettverk – enten lokalt eller over internett – bruker de **protokoller** for å sikre at data sendes og mottas korrekt. Den grunnleggende modellen for nettverkskommunikasjon er **klient-server-arkitekturen**.

I dette kapittelet skal vi se på:
- TCP/IP-modellen
- Klient-server-arkitektur
- Sockets (nettverkskommunikasjon på lavt nivå)
- HTTP-protokollen i praksis
- Portnumre og IP-adresser`
    },
    {
      id: 'it2-4-5-def-1',
      type: 'definition',
      title: 'Klient-server-modellen',
      content: `**Klient-server** er en arkitektur der:
- **Klienten** sender forespørsler (eksempel: nettleser, app)
- **Serveren** mottar forespørsler og sender svar (eksempel: webserver, API-server)

**Eksempler**:
- Du (klient) ber om en nettside → Webserveren (server) sender HTML
- Spotify-appen (klient) ber om en sang → Spotify-serveren (server) streamer musikk
- Python-program (klient) spør API → API-server (server) sender JSON-data

Serveren er alltid i gang og venter på forespørsler, mens klienten starter kommunikasjonen.`
    },
    {
      id: 'it2-4-5-text-1',
      type: 'text',
      title: 'TCP/IP-modellen',
      content: `Internett bygger på **TCP/IP-protokollstakken**, som har fire lag:

**4. Applikasjonslaget**:
- HTTP, HTTPS, FTP, SMTP, DNS
- Det programmet ditt jobber med direkte

**3. Transportlaget**:
- **TCP** (Transmission Control Protocol): Pålitelig, ordnet levering
- **UDP** (User Datagram Protocol): Raskere, men upålitelig
- Håndterer portnumre (port 80 = HTTP, port 443 = HTTPS)

**2. Internetlaget**:
- **IP** (Internet Protocol): Adressering og ruting
- IP-adresser (IPv4: 192.168.1.1, IPv6)

**1. Linklaget**:
- Fysisk overføring (Ethernet, Wi-Fi)
- Ikke noe du programmerer direkte

**Når du sender data**:
1. Applikasjonslaget pakker data (f.eks. HTTP-forespørsel)
2. TCP deler opp i segmenter og legger til portnummer
3. IP legger til IP-adresser
4. Data sendes fysisk over nettverket`
    },
    {
      id: 'it2-4-5-def-2',
      type: 'definition',
      title: 'TCP vs UDP',
      content: `**TCP (Transmission Control Protocol)**:
✅ Pålitelig – garanterer at data kommer frem
✅ Ordnet – data kommer i riktig rekkefølge
✅ Feilsjekking – oppdager og retter feil
❌ Tregere – mye overhead
**Bruksområder**: HTTP, e-post, filoverføring

**UDP (User Datagram Protocol)**:
✅ Raskere – mindre overhead
✅ Enklere – ingen forbindelsesoppsett
❌ Upålitelig – data kan gå tapt
❌ Ingen rekkefølge-garanti
**Bruksområder**: Videostreaming, gaming, DNS

**Tommelfingerregel**: Bruk TCP når data må være korrekt, UDP når hastighet er viktigere.`
    },
    {
      id: 'it2-4-5-text-2',
      type: 'text',
      title: 'IP-adresser og portnumre',
      content: `**IP-adresse**: Identifiserer en enhet på nettverket
- IPv4: \`192.168.1.10\` (4 deler, 0-255)
- IPv6: \`2001:0db8:85a3::8a2e:0370:7334\` (lengre, flere adresser)
- \`127.0.0.1\` eller \`localhost\` = din egen maskin

**Portnummer**: Identifiserer en tjeneste/applikasjon på enheten
- 0-65535 (totalt 65536 porter)
- 0-1023: Velkjente porter (well-known ports)
  - 80: HTTP
  - 443: HTTPS
  - 22: SSH
  - 21: FTP
- 1024-49151: Registrerte porter
- 49152-65535: Dynamiske/private porter

**Adresse-format**:
\`\`\`
IP:PORT
192.168.1.10:8080
localhost:5000
example.com:80
\`\`\`

En server kan ha mange tjenester på samme IP, men ulike porter.`
    },
    {
      id: 'it2-4-5-def-3',
      type: 'definition',
      title: 'Sockets',
      content: `En **socket** er et endepunkt for nettverkskommunikasjon. Det er grensesnittet mellom applikasjonen din og nettverket.

**Typer**:
- **Stream socket** (TCP): Pålitelig, toveis datastrøm
- **Datagram socket** (UDP): Upålitelig, meldingsbasert

En socket identifiseres av:
- IP-adresse
- Portnummer
- Protokoll (TCP/UDP)

Python har en innebygd \`socket\`-modul for lavnivå nettverksprogrammering.`
    },
    {
      id: 'it2-4-5-ex-1',
      type: 'example',
      title: 'Eksempel: Enkel TCP-server',
      content: `La oss lage en enkel TCP-server som lytter på en port:

\`\`\`python
import socket

# Opprett socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind til adresse og port
host = 'localhost'
port = 9999

server_socket.bind((host, port))

# Lytt etter tilkoblinger (maks 5 i kø)
server_socket.listen(5)
print(f"Server lytter på {host}:{port}")

while True:
    # Aksepter tilkobling
    client_socket, address = server_socket.accept()
    print(f"Tilkobling fra {address}")

    # Motta data
    data = client_socket.recv(1024).decode('utf-8')
    print(f"Mottatt: {data}")

    # Send svar
    melding = f"Echo: {data}"
    client_socket.send(melding.encode('utf-8'))

    # Lukk tilkobling
    client_socket.close()
\`\`\`

**Forklaring**:
- \`AF_INET\` = IPv4
- \`SOCK_STREAM\` = TCP
- \`bind()\` binder socket til IP og port
- \`listen()\` gjør serveren klar til å motta tilkoblinger
- \`accept()\` venter på klient (blokkerer)
- \`recv(1024)\` mottar opptil 1024 bytes`
    },
    {
      id: 'it2-4-5-ex-2',
      type: 'example',
      title: 'Eksempel: Enkel TCP-klient',
      content: `Her er en klient som kobler til serveren:

\`\`\`python
import socket

# Opprett socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Koble til server
host = 'localhost'
port = 9999

client_socket.connect((host, port))
print(f"Koblet til {host}:{port}")

# Send data
melding = "Hei fra klienten!"
client_socket.send(melding.encode('utf-8'))

# Motta svar
svar = client_socket.recv(1024).decode('utf-8')
print(f"Svar fra server: {svar}")

# Lukk forbindelse
client_socket.close()
\`\`\`

**Kjøring**:
1. Start serveren først (kjør server.py)
2. Start klienten (kjør client.py)

**Output (server)**:
\`\`\`
Server lytter på localhost:9999
Tilkobling fra ('127.0.0.1', 54321)
Mottatt: Hei fra klienten!
\`\`\`

**Output (klient)**:
\`\`\`
Koblet til localhost:9999
Svar fra server: Echo: Hei fra klienten!
\`\`\``
    },
    {
      id: 'it2-4-5-text-3',
      type: 'text',
      title: 'HTTP-protokollen i praksis',
      content: `**HTTP** (HyperText Transfer Protocol) er applikasjonsprotokollenfor webben. Den bygger på TCP.

**HTTP-forespørsel består av**:
1. **Startlinje**: Metode, URL, HTTP-versjon
2. **Headers**: Metadata (Content-Type, User-Agent, osv.)
3. **Tom linje**
4. **Body**: Data (for POST/PUT)

**Eksempel**:
\`\`\`http
GET /api/users HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json

\`\`\`

**HTTP-respons består av**:
1. **Statuslinje**: HTTP-versjon, statuskode, statusmelding
2. **Headers**: Metadata
3. **Tom linje**
4. **Body**: Innhold (HTML, JSON, osv.)

**Eksempel**:
\`\`\`http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 53

{"id": 1, "navn": "Emma", "alder": 18}
\`\`\``
    },
    {
      id: 'it2-4-5-ex-3',
      type: 'example',
      title: 'Eksempel: HTTP-forespørsel med sockets',
      content: `La oss sende en rå HTTP-forespørsel med sockets:

\`\`\`python
import socket

def http_request(host, path='/'):
    """Send HTTP GET-forespørsel med socket"""
    # Opprett socket
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Koble til server (port 80 for HTTP)
    s.connect((host, 80))

    # Lag HTTP-forespørsel
    request = f"GET {path} HTTP/1.1\\r\\n"
    request += f"Host: {host}\\r\\n"
    request += "Connection: close\\r\\n"
    request += "\\r\\n"

    # Send forespørsel
    s.send(request.encode('utf-8'))

    # Motta svar
    response = b''
    while True:
        chunk = s.recv(4096)
        if not chunk:
            break
        response += chunk

    # Lukk socket
    s.close()

    # Dekod og returner
    return response.decode('utf-8', errors='ignore')

# Test
response = http_request('example.com', '/')
print(response[:500])  # Første 500 tegn
\`\`\`

**Output**:
\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1256
...

<!doctype html>
<html>
<head>
    <title>Example Domain</title>
...
\`\`\`

Dette viser hvordan HTTP egentlig fungerer under panseret – det er bare tekstmeldinger sendt over TCP!`
    },
    {
      id: 'it2-4-5-text-4',
      type: 'text',
      title: 'Hvorfor requests er bedre enn sockets',
      content: `Som du ser av forrige eksempel, er det mye arbeid å håndtere HTTP med rå sockets. Derfor bruker vi **requests**-biblioteket:

**Med sockets** (lavnivå):
- Må lage HTTP-forespørsel manuelt
- Må parse HTTP-svar manuelt
- Må håndtere encoding/decoding
- Må håndtere HTTPS separat (SSL/TLS)
- Mye kode for enkle oppgaver

**Med requests** (høynivå):
- Enkel API: \`requests.get(url)\`
- Automatisk parsing av JSON
- Automatisk håndtering av HTTPS
- Innebygd støtte for cookies, sessions, osv.
- Få linjer kode

**Når bruke hva?**
- **requests**: Når du jobber med HTTP/API-er (99% av tilfellene)
- **sockets**: Når du lager egne protokoller eller trenger full kontroll

For webutvikling og API-bruk: **Alltid bruk requests**.`
    },
    {
      id: 'it2-4-5-ex-4',
      type: 'example',
      title: 'Praktisk eksempel: Chat-server',
      content: `La oss lage en enkel chat-server som kan håndtere flere klienter:

\`\`\`python
import socket
import threading

klienter = []

def haandter_klient(client_socket, address):
    """Håndter en klient i egen tråd"""
    print(f"{address} koblet til")

    while True:
        try:
            # Motta melding
            melding = client_socket.recv(1024).decode('utf-8')
            if not melding:
                break

            print(f"{address}: {melding}")

            # Send til alle andre klienter
            for klient in klienter:
                if klient != client_socket:
                    klient.send(f"{address}: {melding}".encode('utf-8'))

        except:
            break

    # Fjern klient og lukk
    klienter.remove(client_socket)
    client_socket.close()
    print(f"{address} koblet fra")

def start_server():
    """Start chat-server"""
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(('localhost', 9999))
    server.listen(5)

    print("Chat-server startet på localhost:9999")

    while True:
        client_socket, address = server.accept()
        klienter.append(client_socket)

        # Start ny tråd for hver klient
        thread = threading.Thread(target=haandter_klient, args=(client_socket, address))
        thread.start()

start_server()
\`\`\`

**Chat-klient**:
\`\`\`python
import socket
import threading

def motta_meldinger(s):
    """Motta meldinger i egen tråd"""
    while True:
        try:
            melding = s.recv(1024).decode('utf-8')
            if melding:
                print(f"\\n{melding}")
        except:
            break

# Koble til server
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('localhost', 9999))

# Start tråd for å motta meldinger
thread = threading.Thread(target=motta_meldinger, args=(s,))
thread.start()

# Send meldinger
while True:
    melding = input()
    s.send(melding.encode('utf-8'))
\`\`\`

Dette viser praktisk bruk av sockets for sanntidskommunikasjon.`
    }
  ],
  exercises: [
    {
      id: 'it2-4-5-oppg-1',
      type: 'multiple-choice',
      question: 'Hva er en klient i klient-server-modellen?',
      options: [
        'Serveren som sender data',
        'Programmet som sender forespørsler',
        'Databasen som lagrer data',
        'Nettverket som overfører data'
      ],
      correctAnswer: 1,
      explanation: 'Klienten er programmet (f.eks. nettleser eller app) som sender forespørsler til serveren.'
    },
    {
      id: 'it2-4-5-oppg-2',
      type: 'multiple-choice',
      question: 'Hvilken protokoll garanterer at data kommer frem i riktig rekkefølge?',
      options: [
        'UDP',
        'TCP',
        'HTTP',
        'IP'
      ],
      correctAnswer: 1,
      explanation: 'TCP (Transmission Control Protocol) er pålitelig og garanterer ordnet levering av data.'
    },
    {
      id: 'it2-4-5-oppg-3',
      type: 'classic',
      question: 'Forklar forskjellen mellom TCP og UDP. Når vil du bruke hver av dem?',
      answer: 'TCP er pålitelig, garanterer ordnet levering og feilsjekking, men er tregere. Bruk TCP når data må være korrekt (HTTP, e-post, filoverføring). UDP er raskere men upålitelig, data kan gå tapt. Bruk UDP når hastighet er viktigere enn 100% nøyaktighet (videostreaming, gaming, DNS).'
    },
    {
      id: 'it2-4-5-oppg-4',
      type: 'multiple-choice',
      question: 'Hva er standardporten for HTTP?',
      options: [
        '22',
        '443',
        '80',
        '8080'
      ],
      correctAnswer: 2,
      explanation: 'Port 80 er standardporten for HTTP. Port 443 brukes for HTTPS (kryptert HTTP).'
    },
    {
      id: 'it2-4-5-oppg-5',
      type: 'classic',
      question: 'Forklar hva en socket er og hvordan den brukes i nettverksprogrammering.',
      answer: 'En socket er et endepunkt for nettverkskommunikasjon – grensesnittet mellom applikasjonen og nettverket. En socket identifiseres av IP-adresse, portnummer og protokoll (TCP/UDP). Serveren lager en socket og lytter på en port, mens klienten lager en socket og kobler til serverens socket. Data sendes så frem og tilbake mellom de to socketene.'
    },
    {
      id: 'it2-4-5-oppg-6',
      type: 'classic',
      question: 'Nevn de fire lagene i TCP/IP-modellen og forklar kort hva hvert lag gjør.',
      answer: '1) Applikasjonslaget: Protokoller som HTTP, FTP, SMTP som programmet bruker direkte. 2) Transportlaget: TCP/UDP håndterer pålitelig/upålitelig levering og portnumre. 3) Internetlaget: IP håndterer adressering og ruting mellom nettverk. 4) Linklaget: Fysisk overføring av data (Ethernet, Wi-Fi).'
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-4-5-oppg-7',
      type: 'classic',
      question: 'Beskriv steg for steg hva som skjer når du skriver "google.com" i nettleseren din, fra du trykker Enter til siden vises. Inkluder DNS, TCP, HTTP og IP.',
      answer: '1) DNS-oppslag: Nettleseren spør DNS-server om IP-adressen til google.com. 2) TCP-forbindelse: Nettleseren oppretter TCP-forbindelse til Googles server på port 80/443. 3) HTTP-forespørsel: Nettleseren sender GET / HTTP/1.1 over TCP-forbindelsen. 4) IP-ruting: IP-pakker sendes gjennom internett fra din IP til Googles IP. 5) HTTP-svar: Googles server sender HTML-kode tilbake. 6) Rendering: Nettleseren viser HTML-en som en nettside.'
    },
    {
      id: 'it2-4-5-oppg-8',
      type: 'classic',
      question: 'Du skal lage en chat-applikasjon. Vil du bruke TCP eller UDP? Forklar valget ditt og beskriv hvordan klient-server-arkitekturen ville sett ut.',
      answer: 'Jeg ville brukt TCP fordi chat-meldinger må komme frem i riktig rekkefølge og uten tap. Arkitektur: Chat-serveren lytter på en port (f.eks. 9999). Når en bruker kobler til, opprettes en ny TCP-socket for den klienten. Serveren holder en liste over alle tilkoblede klienter. Når en klient sender en melding, mottar serveren den og sender den videre til alle andre tilkoblede klienter. Serveren fungerer som mellommann som distribuerer meldinger.'
    }
  ],
  keyTerms: [
    'Klient-server-arkitektur',
    'TCP/IP-modellen',
    'TCP (Transmission Control Protocol)',
    'UDP (User Datagram Protocol)',
    'Socket',
    'IP-adresse',
    'Portnummer',
    'HTTP-protokollen'
  ],
  learningGoals: [
    'Forklare klient-server-modellen',
    'Beskrive TCP/IP-modellens lag',
    'Forklare forskjellen mellom TCP og UDP',
    'Forstå IP-adresser og portnumre',
    'Bruke sockets for nettverkskommunikasjon',
    'Forklare hvordan HTTP fungerer over TCP'
  ],
  estimatedMinutes: 65,
  prevChapter: 'it-2-4-4',
  nextChapter: 'it-2-5-1'
};

// ============================================================================
// Export array
// ============================================================================

export const IT_2_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_2_4_1,
  CHAPTER_IT_2_4_2,
  CHAPTER_IT_2_4_3,
  CHAPTER_IT_2_4_4,
  CHAPTER_IT_2_4_5
];
