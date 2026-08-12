import type { QuizQuestion } from './quiz-data';

const quizData_econ1100: Record<string, QuizQuestion[]> = {
  'econ1100-0-1': [
    {
      question: "Hvordan vurderes ECON1100?",
      options: ["Én skriftlig skoleeksamen på tre timer, karakter A–F", "To skriftlige eksamener som teller femti prosent hver", "En hjemmeeksamen med bestått eller ikke bestått", "Løpende vurdering av de obligatoriske innleveringene"],
      explanation: "Hele karakteren avgjøres av sluttprøven; obligene er kun et adgangskrav (to av tre må være godkjent). Det finnes ingen midtveiseksamen.",
    },
    {
      question: "Hva er alltid Oppgave 1 på eksamen?",
      options: ["En derivasjonsoppgave med tre–fire funksjoner", "En sant eller usant-oppgave med begrunnelse", "En optimering under bibetingelse med Lagrange", "En funksjonsdrøfting med skisse og tangent"],
      explanation: "Derivasjonsoppgaven åpner alle 16 settene i arkivet. Sant/usant er alltid Oppgave 2, mens optimering og drøfting hører til storoppgavene 3 til 5.",
    },
    {
      question: "Hvor mange av de 16 settene har en sant eller usant-oppgave?",
      options: ["16 av 16 — den er alltid Oppgave 2", "13 av 16 — den mangler i noen utsatte sett", "9 av 16 — bare i de ordinære settene", "6 av 16 — den kom først etter 2020"],
      explanation: "Både derivasjonsoppgaven og sant/usant-oppgaven står i samtlige sett. Til sammen bærer de to 35–45 prosent av poengene, og de er de mest mekaniske i settet.",
    },
    {
      question: "Hvor mange poeng gir et riktig, men ubegrunnet svar på et sant/usant-punkt?",
      options: ["Null poeng, uansett hvor riktig konklusjonen er", "Halvparten av poengene for det aktuelle delpunktet", "Full uttelling, siden konklusjonen faktisk stemmer", "Det avhenger av hvor vanskelig påstanden er"],
      explanation: "Sensorregelen om begrunnelse er utvetydig og gjentas i alle 16 veiledningene. Dette er feil #9 i registeret, og den dyreste enkeltfeilen i faget.",
    },
    {
      question: "Hvilket tema forekommer IKKE i noen av de 16 settene?",
      options: ["Lineær algebra og matriser", "Optimering under bibetingelse", "Nivåkurver og implisitt derivasjon", "Elastisitet og regnereglene for den"],
      explanation: "Lineær algebra har null forekomster gjennom hele arkivet 2018–2025. De tre andre ligger på henholdsvis 81, 75 og 69 prosent av settene.",
    },
    {
      question: "Hvordan fordeles poengene innenfor én oppgave?",
      options: ["Likt mellom delpunktene", "Etter hvor lang tid hvert punkt tar", "Med størst vekt på siste delpunkt", "Etter hvor mye tekst svaret krever"],
      explanation: "Lik fordeling oppgis i sensorveiledningen hvert år. Det betyr at et vanskelig delpunkt ikke er verdt mer enn et lett — bruker du overtid på ett, betaler du med et annet.",
    },
    {
      question: "Hva sier sensorreglene om følgefeil?",
      options: ["De straffes ikke når du bygger riktig på eget resultat", "De gir trekk hver gang det feilaktige tallet brukes videre", "De fører til at hele oppgaven vurderes på nytt fra bunnen", "De teller bare når sluttsvaret blir åpenbart urimelig"],
      explanation: "Du trekkes der feilen oppsto, ikke i de senere punktene. Unntaket er hvis feilen gjør resten vesentlig lettere — derfor skal du aldri stoppe opp fordi et mellomsvar ser rart ut.",
    },
    {
      question: "Funksjonsdrøfting med én variabel ligger på 8 av 16 sett. Hvorfor bør den likevel prioriteres høyt?",
      options: ["Fordi den er med i alle seks ordinære sett siden 2020", "Fordi den alltid er den best betalte oppgaven i settet", "Fordi den erstattet sant/usant-oppgaven fra og med 2020", "Fordi den bare forekommer på de utsatte eksamenene"],
      explanation: "Nevneren avgjør hvordan tallet skal leses: 50 prosent av alle sett, men 100 prosent av de ordinære siden 2020. Produsentteori er motsatt — sjelden ordinært, hyppig på utsatt.",
    },
    {
      question: "Hva er den korrekte måten å vise at en funksjon har sitt laveste punkt på randen av definisjonsområdet?",
      options: ["Argumentere med definisjonsområdets endepunkt og fortegnet på $f'$", "Sette inn flere $x$-verdier og se at de gir større funksjonsverdi", "Regne ut den andrederiverte i punktet og sjekke at den er positiv", "Vise at den førstederiverte er null nøyaktig i randpunktet"],
      explanation: "Innsetting av tallverdier «beviser» ingenting og gir bare delvis uttelling — det er feil #1. Randpunkter har normalt ikke $f'=0$, så den siste testen er heller ikke aktuell.",
    },
    {
      question: "Hvorfor gir det null uttelling å bruke $f''(0)=0$ til å avgjøre om $x=0$ er et minimum for $f(x)=x^{4}$?",
      options: ["Fordi testen er inkonklusiv når den andrederiverte er null", "Fordi $x^{4}$ ikke er deriverbar to ganger i null", "Fordi $x=0$ ligger utenfor definisjonsområdet til $x^{4}$", "Fordi den andrederiverte bare gjelder for funksjoner av to variabler"],
      explanation: "Andrederiverttesten sier ingenting når den gir null; du må vise global konveksitet ($f''(x)=12x^{2}\\ge0$ overalt) eller bruke fortegnet på $f'$. Funksjonen er både deriverbar og definert i null.",
    },
    {
      question: "Hvordan klassifiserer du kandidatpunkter i en oppgave med bibetingelse?",
      options: ["Ved å sammenligne funksjonsverdiene i punktene", "Ved å regne ut en andreordensbetingelse for bibetingelsen", "Ved å sjekke fortegnet på hjelpevariabelen $\\lambda$", "Ved å derivere bibetingelsen to ganger og lese av fortegnet"],
      explanation: "Andreordensbetingelse under bibetingelse er bekreftet ikke pensum, og skal ikke brukes. Fortegnet på $\\lambda$ har en annen tolkning, nemlig som skyggepris.",
    },
    {
      question: "Hva sier tidsanslagene på kapitlene i denne boka?",
      options: ["Lesetid — regner du for hånd, legg på rundt halvparten", "Samlet tid inkludert alle oppgaver, prøver og øvingseksamener", "Tiden en gjennomsnittsstudent bruker på å pugge kapitlet utenat", "Antall minutter kapitlet tar på forelesning ved universitetet"],
      explanation: "Anslagene gjelder kjernestoffet lest gjennom med eksemplene. Prøvekapitlene og oppgaveregningen kommer i tillegg, og begrepsbankene er repetisjonsstoff utenom.",
    },
  ],
  'econ1100-1-1': [
    {
      question: "Hva er den deriverte av $f(x)=x^{-2}$?",
      options: ["$-2x^{-3}$", "$-2x^{-1}$", "$2x^{-3}$", "$-\\tfrac12 x^{-3}$"],
      explanation: "Potensregelen: eksponenten $-2$ flyttes ned som faktor, og den nye eksponenten er $-2-1=-3$. Alternativet $-2x^{-1}$ hever eksponenten i stedet for å senke den; $2x^{-3}$ mister minusen fra eksponenten.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\sqrt{x}$?",
      options: ["$\\dfrac{1}{2\\sqrt{x}}$", "$\\dfrac{1}{\\sqrt{x}}$", "$2\\sqrt{x}$", "$\\dfrac{\\sqrt{x}}{2}$"],
      explanation: "Skriv $\\sqrt{x}=x^{1/2}$; potensregelen gir $\\tfrac12x^{-1/2}=\\frac{1}{2\\sqrt{x}}$. Alternativet $\\frac{1}{\\sqrt{x}}$ glemmer faktoren $\\tfrac12$, som er den vanligste varianten av feilen.",
    },
    {
      question: "Kvotientregelen har telleren $u'v-uv'$. Hva skjer hvis du bytter om leddene?",
      options: ["Hele svaret får feil fortegn", "Svaret blir riktig, men uforenklet", "Bare nevneren blir feil", "Svaret gjelder bare for $x>0$"],
      explanation: "$uv'-u'v=-(u'v-uv')$, så hele uttrykket skifter fortegn. Dette er feil #12, den vanligste enkeltfeilen i Oppgave 1. Rekkefølgen påvirker verken nevneren eller definisjonsområdet.",
    },
    {
      question: "Deriver $f(x)=(2x-1)\\sqrt{x}$. Hva er det forenklede svaret?",
      options: ["$\\dfrac{6x-1}{2\\sqrt{x}}$", "$\\dfrac{2x-1}{2\\sqrt{x}}$", "$\\dfrac{6x+1}{2\\sqrt{x}}$", "$\\dfrac{4x-1}{2\\sqrt{x}}$"],
      explanation: "Produktregelen gir $2\\sqrt{x}+\\frac{2x-1}{2\\sqrt{x}}$, og felles nevner $2\\sqrt{x}$ gir $\\frac{4x+2x-1}{2\\sqrt{x}}$. Alternativet $\\frac{2x-1}{2\\sqrt{x}}$ glemmer første ledd; $\\frac{4x-1}{2\\sqrt{x}}$ skriver om første ledd feil.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}e^{2x}$?",
      options: ["$2e^{2x}$", "$e^{2x}$", "$2xe^{2x}$", "$e^{2x}\\ln 2$"],
      explanation: "Kjerneregelen: eksponentialfunksjonen står urørt, ganget med den deriverte av eksponenten, altså $2$. Å svare $e^{2x}$ glemmer kjernefaktoren; $e^{2x}\\ln2$ blander inn $a^{x}$-regelen, som gjelder når grunntallet er noe annet enn $e$.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\ln(x^{2}+1)$?",
      options: ["$\\dfrac{2x}{x^{2}+1}$", "$\\dfrac{1}{x^{2}+1}$", "$\\dfrac{x^{2}+1}{2x}$", "$\\dfrac{2x}{(x^{2}+1)^{2}}$"],
      explanation: "Regelen er $\\frac{d}{dx}\\ln g=\\frac{g'}{g}$, med $g'=2x$. Alternativet $\\frac{1}{x^{2}+1}$ glemmer kjernefaktoren; svaret $\\frac{2x}{(x^{2}+1)^{2}}$ kvadrerer nevneren, noe bare kvotientregelen gjør.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\,3^{x}$?",
      options: ["$3^{x}\\ln 3$", "$x\\,3^{x-1}$", "$3^{x}$", "$\\dfrac{3^{x}}{\\ln 3}$"],
      explanation: "Når grunntallet er en konstant og eksponenten er $x$, gjelder $\\frac{d}{dx}a^{x}=a^{x}\\ln a$. Alternativet $x\\,3^{x-1}$ bruker potensregelen, som forutsetter at grunntallet er variabelen — ikke omvendt.",
    },
    {
      question: "Hvorfor blir midtleddet i $\\dfrac{d}{dx}\\!\\left(-\\dfrac{5}{x^{2}}\\right)$ positivt?",
      options: ["Minusen foran og minusen fra eksponenten opphever hverandre", "Fordi $x^{2}$ alltid er positiv uansett $x$", "Fordi konstanten $5$ må stå utenfor derivasjonen", "Fordi brøker alltid deriveres med kvotientregelen"],
      explanation: "Leddet er $-5x^{-2}$, og potensregelen gir $-5\\cdot(-2)x^{-3}=+10x^{-3}$. At $x^{2}>0$ sier ikke noe om fortegnet på den deriverte, og konstantregelen alene forklarer ikke fortegnsskiftet.",
    },
    {
      question: "Hva er den deriverte av $f(x)=(x^{2}+3x)^{5}$?",
      options: ["$5(x^{2}+3x)^{4}(2x+3)$", "$5(x^{2}+3x)^{4}$", "$5(2x+3)^{4}$", "$4(x^{2}+3x)^{5}(2x+3)$"],
      explanation: "Potens av en funksjon: $n g^{n-1}g'$, altså eksponenten ned, ny eksponent $4$, ganget med $g'=2x+3$. Svaret $5(x^{2}+3x)^{4}$ glemmer kjernefaktoren, og $5(2x+3)^{4}$ deriverer innmaten og setter den i parentesen.",
    },
    {
      question: "En funksjon er $f(x)=\\dfrac{3x-1}{x^{2}}$. Hvilken vei gir minst fortegnsrisiko?",
      options: ["Dele opp i $3x^{-1}-x^{-2}$ og bruke potensregelen", "Bruke kvotientregelen med $u=3x-1$ og $v=x^{2}$", "Bruke produktregelen på $(3x-1)$ og $x^{2}$", "Bruke kjerneregelen med $x^{2}$ som kjerne"],
      explanation: "Når nevneren er en ren potens av $x$, kan brøken deles i ledd med negative eksponenter, og da slipper man kvotientregelens teller helt. Kvotientregelen gir samme svar, men er den varianten fortegnsfeilene oppstår i.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\big(x\\ln x\\big)$?",
      options: ["$\\ln x+1$", "$\\ln x$", "$\\dfrac{1}{x}$", "$x\\ln x+1$"],
      explanation: "Produktregelen gir $1\\cdot\\ln x+x\\cdot\\frac1x=\\ln x+1$. Alternativet $\\ln x$ glemmer andre ledd; $\\frac1x$ deriverer bare den ene faktoren og dropper den andre helt.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\sqrt{4x^{2}+1}$ på forenklet form?",
      options: ["$\\dfrac{4x}{\\sqrt{4x^{2}+1}}$", "$\\dfrac{8x}{\\sqrt{4x^{2}+1}}$", "$\\dfrac{1}{2\\sqrt{4x^{2}+1}}$", "$\\dfrac{4x}{2\\sqrt{4x^{2}+1}}$"],
      explanation: "Kjerneregelen gir $\\frac{8x}{2\\sqrt{4x^{2}+1}}$, som forkortes til $\\frac{4x}{\\sqrt{4x^{2}+1}}$. Svaret $\\frac{4x}{2\\sqrt{4x^{2}+1}}$ er riktig, men uforenklet — og manglende åpenbar forenkling koster uttelling.",
    },
    {
      question: "Hva betyr det at $f''(x)>0$ i et intervall?",
      options: ["Den deriverte vokser, så grafen krummer oppover", "Funksjonen vokser, så grafen stiger mot høyre", "Funksjonen er positiv i hele intervallet", "Den deriverte er null i hele intervallet"],
      explanation: "Den andrederiverte måler endringen i $f'$, altså krumningen. At $f$ selv vokser, avgjøres av $f'>0$, og fortegnet på $f$ er en helt annen sak.",
    },
    {
      question: "Hva er den deriverte av $f(x)=x^{0{,}4}$?",
      options: ["$0{,}4x^{-0{,}6}$", "$0{,}4x^{0{,}6}$", "$0{,}4x^{1{,}4}$", "$x^{-0{,}6}$"],
      explanation: "Potensregelen gjelder for alle reelle eksponenter: ned som faktor, og ny eksponent $0{,}4-1=-0{,}6$. Svarene $0{,}4x^{0{,}6}$ og $0{,}4x^{1{,}4}$ senker ikke eksponenten korrekt, og $x^{-0{,}6}$ glemmer faktoren foran.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\ln\\!\\left(\\dfrac{x}{x+1}\\right)$ for $x>0$?",
      options: ["$\\dfrac{1}{x(x+1)}$", "$\\dfrac{1}{x}+\\dfrac{1}{x+1}$", "$\\dfrac{x+1}{x}$", "$\\dfrac{1}{(x+1)^{2}}$"],
      explanation: "Logaritmeregelen gir $\\ln x-\\ln(x+1)$, som deriveres til $\\frac1x-\\frac1{x+1}=\\frac{1}{x(x+1)}$. Svaret $\\frac{1}{x}+\\frac{1}{x+1}$ har pluss i stedet for minus — det svarer til $\\ln(x(x+1))$, altså et produkt, ikke en brøk.",
    },
    {
      question: "Hvilken forenkling forventer sensor av svaret $2xe^{-2x}-2x^{2}e^{-2x}$?",
      options: ["Sett fellesfaktoren utenfor: $2xe^{-2x}(1-x)$", "Gang ut alle ledd og sorter etter potenser av $x$", "Skriv om til $\\dfrac{2x-2x^{2}}{e^{2x}}$ og stopp der", "Ingen — uttrykket er allerede på enkleste form"],
      explanation: "Faktorisert form lar deg lese av fortegnet direkte, siden $e^{-2x}>0$ alltid. Brøkformen er ekvivalent, men skjuler nettopp den avlesningen; uttrykket er heller ikke ferdig forenklet som det står.",
    },
    {
      question: "I hvor mange av de 16 eksamenssettene i arkivet er Oppgave 1 en derivasjonsoppgave?",
      options: ["16 av 16 — den er alltid åpningsoppgaven", "12 av 16 — den mangler i de eldste settene", "9 av 16 — bare i de ordinære settene", "5 av 16 — den veksler med en drøftingsoppgave"],
      explanation: "Arkivet består av 9 ordinære og 7 utsatte sett, og derivasjonsoppgaven åpner alle 16. Nevneren 9 gjelder bare de ordinære settene, og 7 bare de utsatte — si alltid hvilken nevner du bruker.",
    },
    {
      question: "Hvorfor kan ikke $\\dfrac{d}{dx}x^{x}$ regnes med potensregelen?",
      options: ["Fordi eksponenten ikke er en konstant", "Fordi grunntallet må være $e$ for at regelen skal gjelde", "Fordi funksjonen ikke er definert for $x>0$", "Fordi produktregelen alltid går foran potensregelen"],
      explanation: "Potensregelen forutsetter konstant eksponent, og $a^{x}$-regelen forutsetter konstant grunntall — i $x^{x}$ varierer begge. Metoden som løser det, logaritmisk derivasjon, kommer i kapittel 1.4. Funksjonen er for øvrig godt definert for $x>0$.",
    },
  ],
  'econ1100-1-2': [
    {
      question: "Hva betyr det å finne $f'_x$ for en funksjon $f(x,y)$?",
      options: ["Derivere mht. $x$ mens $y$ behandles som en konstant", "Derivere mht. $x$ og deretter sette inn verdien av $y$", "Derivere mht. begge variablene og legge sammen svarene", "Derivere mht. $x$ etter at $y$ er skrevet om til $x$"],
      explanation: "Partiell derivasjon betyr at én variabel varierer og resten står stille. De andre alternativene beskriver enten totalderivasjon eller substitusjon, som er noe helt annet.",
    },
    {
      question: "La $f(x,y)=x^{2}y+x^{2}+2y^{2}$. Hva er $f'_x$?",
      options: ["$2xy+2x$", "$2xy+2x+4y$", "$x^{2}+2x$", "$2xy+2x+2y^{2}$"],
      explanation: "Leddet $2y^{2}$ inneholder ingen $x$ og forsvinner. Svarene som ender på $+4y$ eller $+2y^{2}$, tar med $y$-leddet som om det var en variabel, som er den vanligste feilen på denne oppgavetypen.",
    },
    {
      question: "La $f(x,y)=x^{2}y+x^{2}+2y^{2}$. Hva er $f'_y$?",
      options: ["$x^{2}+4y$", "$2xy+4y$", "$x^{2}+2x+4y$", "$x^{2}y+4y$"],
      explanation: "Mht. $y$ gir $x^{2}y$ leddet $x^{2}$, leddet $x^{2}$ forsvinner, og $2y^{2}$ blir $4y$. Svaret $x^{2}+2x+4y$ lar $x^{2}$-leddet overleve som $2x$, selv om det ikke inneholder $y$.",
    },
    {
      question: "Skrivemåten $\\partial f/\\partial x$ betyr det samme som",
      options: ["$f'_x$ — den partiellderiverte mht. $x$", "$f''_{xx}$ — den andrederiverte mht. $x$", "$f'_x+f'_y$ — den samlede endringen i $f$", "$f'_x\\cdot f'_y$ — produktet av de to deriverte"],
      explanation: "De to skrivemåtene er helt likestilte, og sensor bruker begge. Tegnet $\\partial$ er bare et signal om at funksjonen har flere variabler enn den du deriverer mht.",
    },
    {
      question: "La $g(x,y)=\\dfrac{y^{2}}{x+2y}$. Hva er $g'_x$?",
      options: ["$-\\dfrac{y^{2}}{(x+2y)^{2}}$", "$\\dfrac{y^{2}}{(x+2y)^{2}}$", "$-\\dfrac{2y}{(x+2y)^{2}}$", "$\\dfrac{2y}{x+2y}$"],
      explanation: "Telleren er konstant mht. $x$, så $g=y^{2}(x+2y)^{-1}$ gir $-y^{2}(x+2y)^{-2}$. Fortegnet må være negativt: øker $x$, blir nevneren større og brøken mindre.",
    },
    {
      question: "La $f(x,y)=\\dfrac{xy}{x+y}$. Hva er $f'_x$ på forenklet form?",
      options: ["$\\dfrac{y^{2}}{(x+y)^{2}}$", "$\\dfrac{x^{2}}{(x+y)^{2}}$", "$\\dfrac{xy}{(x+y)^{2}}$", "$\\dfrac{y}{(x+y)^{2}}$"],
      explanation: "Kvotientregelen gir $\\frac{y(x+y)-xy}{(x+y)^{2}}=\\frac{y^{2}}{(x+y)^{2}}$. Alternativet med $x^{2}$ er svaret på $f'_y$ — funksjonen er symmetrisk, så det er lett å bytte om de to.",
    },
    {
      question: "Hva er $\\big(\\ln(x^{2}+y)\\big)'_y$?",
      options: ["$\\dfrac{1}{x^{2}+y}$", "$\\dfrac{2x}{x^{2}+y}$", "$\\dfrac{y}{x^{2}+y}$", "$\\dfrac{1}{(x^{2}+y)^{2}}$"],
      explanation: "Regelen er $g'_y/g$, og $g'_y=1$ her. Svaret $\\frac{2x}{x^{2}+y}$ er $f'_x$, og $\\frac{1}{(x^{2}+y)^{2}}$ kvadrerer nevneren, noe bare kvotientregelen ville gjort.",
    },
    {
      question: "Hva er $\\big(e^{3xy}\\big)'_x$?",
      options: ["$3y\\,e^{3xy}$", "$3x\\,e^{3xy}$", "$3xy\\,e^{3xy}$", "$e^{3xy}$"],
      explanation: "Eksponentens deriverte mht. $x$ er $3y$, og den blir faktoren foran. Svaret $3x\\,e^{3xy}$ er derivasjon mht. $y$; $e^{3xy}$ alene glemmer kjernefaktoren helt.",
    },
    {
      question: "For $Q=AK^{\\alpha}L^{\\beta}$ er den partiellderiverte $Q'_K$ lik",
      options: ["$\\alpha AK^{\\alpha-1}L^{\\beta}$", "$\\alpha AK^{\\alpha}L^{\\beta-1}$", "$\\alpha\\beta AK^{\\alpha-1}L^{\\beta}$", "$AK^{\\alpha-1}L^{\\beta}$"],
      explanation: "Potensregelen på $K$-faktoren, med $L^{\\beta}$ som konstant faktor. Uttrykket kan også skrives $\\alpha Q/K$, en form som sparer mye regning senere i boka.",
    },
    {
      question: "Hva sier Youngs teorem?",
      options: ["At $f''_{xy}=f''_{yx}$ for funksjonene i dette faget", "At $f'_x=f'_y$ når funksjonen er symmetrisk", "At $f''_{xx}$ og $f''_{yy}$ alltid har samme fortegn", "At $f''_{xy}$ er null når $f$ er et polynom"],
      explanation: "Rekkefølgen du deriverer i, spiller ingen rolle for resultatet. Teoremet skal brukes, ikke bevises — og det er bokas beste kontrollregning på Oppgave 1.",
    },
    {
      question: "La $f(x,y)=x^{2}\\ln y$. Hva er $f''_{xy}$?",
      options: ["$\\dfrac{2x}{y}$", "$2\\ln y$", "$-\\dfrac{x^{2}}{y^{2}}$", "$\\dfrac{x^{2}}{y}$"],
      explanation: "Først $f'_x=2x\\ln y$, så derivert mht. $y$ gir $2x/y$. Svaret $2\\ln y$ er $f''_{xx}$, $-\\frac{x^{2}}{y^{2}}$ er $f''_{yy}$, og $\\frac{x^{2}}{y}$ er $f'_y$.",
    },
    {
      question: "Hvorfor forsvinner leddet $5y$ når $f(x,y)=3x^{2}+5y-7$ deriveres mht. $x$?",
      options: ["Fordi leddet ikke inneholder $x$ og derfor er en konstant", "Fordi $y$ alltid er mindre enn $x$ i slike funksjoner", "Fordi konstantleddet $-7$ allerede dekker $y$-bidraget", "Fordi $5y$ må deriveres mht. $y$ i et eget regnestykke"],
      explanation: "Når $y$ holdes fast, er $5y$ et fast tall, og et fast tall har derivert null. Det er ingen antakelse om størrelsesforhold mellom variablene inne i bildet.",
    },
    {
      question: "Hva er $\\big(y\\,e^{xy}\\big)'_x$?",
      options: ["$y^{2}e^{xy}$", "$y\\,e^{xy}$", "$e^{xy}(1+xy)$", "$xy\\,e^{xy}$"],
      explanation: "Faktoren $y$ er konstant mht. $x$, og eksponentens deriverte er $y$, så vi får $y\\cdot y\\,e^{xy}$. Svaret $e^{xy}(1+xy)$ er derivasjon mht. $y$, der produktregelen faktisk trengs.",
    },
    {
      question: "Hva forteller fortegnet på $f''_{xx}$?",
      options: ["Om funksjonen krummer opp eller ned i $x$-retningen", "Om funksjonen vokser eller avtar i $x$-retningen", "Om funksjonen har toppunkt eller bunnpunkt i punktet", "Om de to variablene forsterker eller motvirker hverandre"],
      explanation: "Andreordens derivert måler krumning, ikke vekst — vekst avleses av $f'_x$. Å avgjøre topp- eller bunnpunkt i to variabler krever alle de andrederiverte samlet, som i Del 6.",
    },
    {
      question: "En bedrift har $Q(K,L)=10K^{0{,}4}L^{0{,}6}$. Hva er $Q'_L$ i punktet $(100,100)$?",
      options: ["$6$", "$4$", "$10$", "$0{,}6$"],
      explanation: "$Q'_L=6(K/L)^{0{,}4}$, og med $K=L$ blir parentesen 1. Verdien 4 er $Q'_K$ i samme punkt, og $0{,}6$ er bare eksponenten uten koeffisienten $10$.",
    },
    {
      question: "Hva er den økonomiske tolkningen av $Q'_L$ for en produktfunksjon?",
      options: ["Grenseproduktet — produksjonsøkningen av én arbeider til", "Gjennomsnittsproduktet — produksjonen delt på antall arbeidere", "Lønnskostnaden knyttet til den siste ansatte arbeideren", "Den samlede produksjonen når arbeidskraften dobles"],
      explanation: "Den partiellderiverte måler endring per enhet, ikke nivå. Gjennomsnittsproduktet er $Q/L$, og lønnskostnaden er en pris fra markedet, ikke noe som ligger i produktfunksjonen.",
    },
    {
      question: "Hva er $f'_y$ når $f(x,y)=\\ln(x^{2}+xy)$, ferdig forenklet?",
      options: ["$\\dfrac{1}{x+y}$", "$\\dfrac{x}{x^{2}+xy}$", "$\\dfrac{2x+y}{x^{2}+xy}$", "$\\dfrac{x}{x+y}$"],
      explanation: "$g'_y=x$, så $f'_y=\\frac{x}{x(x+y)}=\\frac{1}{x+y}$. Svaret $\\frac{x}{x^{2}+xy}$ er riktig, men uforenklet — og manglende åpenbar forenkling koster uttelling. $\\frac{2x+y}{x^{2}+xy}$ er $f'_x$.",
    },
    {
      question: "Hvorfor er kryssderiverten nyttig som kontroll på eksamen?",
      options: ["Fordi ulike svar de to veiene avslører en feil lenger opp", "Fordi sensor gir egne poeng for å regne den ut to ganger", "Fordi den alltid er null når førsteordens deriverte er riktige", "Fordi den erstatter behovet for å forenkle sluttsvaret"],
      explanation: "Youngs teorem garanterer likhet, så et avvik betyr at noe er galt lenger opp. Kontrollen gir ingen ekstra poeng i seg selv — verdien ligger i at den fanger feil før innlevering.",
    },
    {
      question: "Hvilken påstand om $f(x,y)=\\dfrac{xy}{x+y}$ er riktig?",
      options: ["Funksjonen er symmetrisk, så $f'_y$ fås ved å bytte om $x$ og $y$ i $f'_x$", "Funksjonen er symmetrisk, så $f'_x$ og $f'_y$ er identiske uttrykk", "Funksjonen er ikke symmetrisk, siden telleren og nevneren er ulike", "Symmetri gjelder bare for polynomer, ikke for brøkuttrykk"],
      explanation: "Symmetri betyr $f(x,y)=f(y,x)$, og da bytter også de deriverte plass — men de blir ikke like: $f'_x=\\frac{y^{2}}{(x+y)^{2}}$ mot $f'_y=\\frac{x^{2}}{(x+y)^{2}}$. Argumentet må sies eksplisitt for å gi uttelling.",
    },
    {
      question: "I hvor mange av de 16 settene i arkivet blir andreordens deriverte eksplisitt etterspurt i Oppgave 1?",
      options: ["3 av 16 — bare i det gamle formatet fra 2018", "16 av 16 — de spørres om hver eneste gang", "9 av 16 — i alle de ordinære settene", "0 av 16 — de er ikke pensum i det hele tatt"],
      explanation: "Andreordens deriverte etterspørres direkte i de tre settene med gammelt format: V2018, H2018 og V2018-utsatt. De er likevel nødvendige senere i boka, blant annet til klassifisering av stasjonære punkter.",
    },
    {
      question: "La $f(x,y)=(x^{2}+y^{2})^{3}$. Hva er $f'_x$?",
      options: ["$6x(x^{2}+y^{2})^{2}$", "$3(x^{2}+y^{2})^{2}$", "$6x(x^{2}+y^{2})^{3}$", "$2x(x^{2}+y^{2})^{2}$"],
      explanation: "Kjerneregelen: $3(x^{2}+y^{2})^{2}$ ganget med kjernens deriverte $2x$. Svaret $3(x^{2}+y^{2})^{2}$ glemmer kjernefaktoren, og $6x(x^{2}+y^{2})^{3}$ senker ikke eksponenten.",
    },
    {
      question: "Hvilken fremgangsmåte gir minst arbeid når du skal finne $f''_{xy}$?",
      options: ["Velge rekkefølgen der første steg gir enklest uttrykk", "Alltid derivere mht. $x$ først, siden notasjonen skrives slik", "Regne begge veier og velge det korteste svaret til slutt", "Forenkle $f$ til ett ledd før noen derivasjon utføres"],
      explanation: "Youngs teorem gir samme svar uansett rekkefølge, så du står fritt til å velge den enkleste veien. Å regne begge veier er en god kontroll, men koster tid du sjelden har på eksamen.",
    },
  ],
  'econ1100-1-3': [
    {
      question: "La $z=f(x,y)$ der $x=x(t)$ og $y=y(t)$. Hva er $\\dfrac{dz}{dt}$?",
      options: ["$f'_x\\dfrac{dx}{dt}+f'_y\\dfrac{dy}{dt}$", "$f'_x\\dfrac{dx}{dt}\\cdot f'_y\\dfrac{dy}{dt}$", "$f'_x+f'_y$", "$\\dfrac{dx}{dt}+\\dfrac{dy}{dt}$"],
      explanation: "Hver indre variabel gir ett bidrag, og bidragene legges sammen. Svaret som ganger de to bidragene i stedet for å summere dem, tar feil regneart, og svarene $f'_x+f'_y$ og $\\frac{dx}{dt}+\\frac{dy}{dt}$ glemmer den ene av de to faktorene i hvert ledd.",
    },
    {
      question: "Hvor mange ledd har kjerneregelen når $G(x,y)$ har to indre variabler?",
      options: ["To — ett per indre variabel", "Ett — ett per ytre variabel", "Fire — alle kombinasjoner av variabler", "Tre — to indre og én ytre"],
      explanation: "Antall ledd følger antall veier inn til funksjonen, altså antall indre variabler. Antall ytre variabler bestemmer i stedet hvor mange slike formler du må sette opp.",
    },
    {
      question: "Hva er feil #5 i bokas feilregister?",
      options: ["Å ikke substituere tilbake for de indre variablene", "Å utelate ett ledd i differensialet til en funksjon", "Å bruke potensregelen når eksponenten er variabel", "Å glemme definisjonsområdet før man leter etter ekstrempunkter"],
      explanation: "Sluttsvaret skal stå i de variablene oppgaven spør om, ikke i hjelpevariablene. De andre alternativene er reelle feil i registeret, men har andre numre og hører hjemme i Del 3, 1.4 og Del 4.",
    },
    {
      question: "La $G(x,y)=x^{2}+3xy$ med $x=2s+t$ og $y=s-t$. Hva er $\\partial G/\\partial s$ uttrykt ved $x$ og $y$?",
      options: ["$7x+6y$", "$2x+3y$", "$4x+6y$", "$2x+3y+3x$"],
      explanation: "Kjerneregelen gir $(2x+3y)\\cdot 2+3x\\cdot 1=4x+6y+3x$. Svaret $2x+3y$ er bare $G'_x$ uten kjernefaktorene, og $2x+3y+3x$ er riktig utgangspunkt, men uforenklet.",
    },
    {
      question: "Samme oppgave: hva blir $\\partial G/\\partial s$ etter tilbakesubstitusjon?",
      options: ["$20s+t$", "$14s+7t$", "$20s-t$", "$7s+6t$"],
      explanation: "$7(2s+t)+6(s-t)=14s+7t+6s-6t=20s+t$. Svaret $14s+7t$ har bare tatt med bidraget fra $x$, og $20s-t$ har fortegnsfeil i $t$-leddet.",
    },
    {
      question: "Hva er totalderiverten $\\dfrac{df}{dx}$ når $f=f(x,y)$ og $y=y(x)$?",
      options: ["$f'_x+f'_y\\,y'(x)$", "$f'_x\\cdot f'_y\\,y'(x)$", "$f'_x\\,y'(x)$", "$f'_x+f'_y$"],
      explanation: "Første ledd er den direkte effekten, andre den indirekte gjennom $y$. Svaret $f'_x+f'_y$ glemmer at $y$ endrer seg i en bestemt takt med $x$, nemlig $y'(x)$.",
    },
    {
      question: "Når er den partiellderiverte $f'_x$ og totalderiverten $df/dx$ like?",
      options: ["Når $f'_y=0$ eller $y'(x)=0$", "Når $f$ er symmetrisk i $x$ og $y$", "Når $f$ er en Cobb-Douglas-funksjon", "Aldri — de er per definisjon forskjellige"],
      explanation: "De er like nøyaktig når det indirekte leddet forsvinner, altså når $f$ ikke reagerer på $y$, eller $y$ ikke reagerer på $x$. Symmetri og funksjonsform har ingenting med saken å gjøre.",
    },
    {
      question: "La $z=xy^{2}$ med $x=t^{2}$ og $y=e^{t}$. Hva er $dz/dt$ på forenklet form?",
      options: ["$2te^{2t}(1+t)$", "$2te^{2t}$", "$2t^{2}e^{2t}$", "$e^{2t}(2t+t^{2})$"],
      explanation: "Kjerneregelen gir $y^{2}\\cdot2t+2xy\\cdot e^{t}=2te^{2t}+2t^{2}e^{2t}$, som faktoriseres. Svarene $2te^{2t}$ og $2t^{2}e^{2t}$ er hvert sitt enkeltledd; $e^{2t}(2t+t^{2})$ er nesten riktig, men mangler faktoren 2 i andre ledd.",
    },
    {
      question: "Hvorfor må sluttsvaret uttrykkes i $s$ og $t$ og ikke i $x$ og $y$?",
      options: ["Fordi $x$ og $y$ er hjelpevariabler oppgaven ikke spør om", "Fordi $x$ og $y$ ikke er deriverbare størrelser i seg selv", "Fordi kjerneregelen bare gjelder for de ytre variablene", "Fordi $x$ og $y$ alltid er null i det aktuelle punktet"],
      explanation: "Oppgaven spør om følsomheten overfor $s$ og $t$, så svaret må stå i disse. De indre variablene er fullt deriverbare, og de er selvsagt ikke null — de er bare mellomledd.",
    },
    {
      question: "La $G=e^{xy}$ med $x=s-t$ og $y=s+t$. Hva er $\\partial G/\\partial t$?",
      options: ["$-2t\\,e^{s^{2}-t^{2}}$", "$2t\\,e^{s^{2}-t^{2}}$", "$2s\\,e^{s^{2}-t^{2}}$", "$(x-y)e^{s^{2}+t^{2}}$"],
      explanation: "Kjerneregelen gir $(x-y)e^{xy}$, og $x-y=-2t$ mens $xy=s^{2}-t^{2}$. Svaret $2s\\,e^{s^{2}-t^{2}}$ er derivasjon mht. $s$, og $(x-y)e^{s^{2}+t^{2}}$ har både uforenklet form og feil eksponent.",
    },
    {
      question: "Hva er den indre deriverte $\\partial y/\\partial t$ når $y=s-t$?",
      options: ["$-1$", "$1$", "$s$", "$-t$"],
      explanation: "Mht. $t$ er $s$ konstant, og $-t$ deriveres til $-1$. Denne minusen er en av de vanligste kildene til fortegnsfeil i hele oppgavetypen — skriv den eksplisitt opp før du setter sammen.",
    },
    {
      question: "Hvordan kan du kontrollere svaret når de indre funksjonene er konkrete uttrykk?",
      options: ["Sette inn for de indre variablene først og derivere direkte etterpå", "Regne den kryssderiverte og sjekke at den er symmetrisk", "Sette alle indre deriverte lik 1 og sammenligne svarene", "Sjekke at antall ledd er lik antall ytre variabler"],
      explanation: "De to veiene må gi samme svar, så innsetting er en fullgod kontroll — men bare med konkrete uttrykk. Kryssderiverten kontrollerer noe annet (andreordens deriverte), og leddtellingen følger de indre, ikke de ytre, variablene.",
    },
    {
      question: "En bedrift har kostnad $K=x^{2}w$ der lønnen avhenger av produksjonen: $w=10+\\tfrac12x$. Hva er $dK/dx$?",
      options: ["$20x+\\tfrac32x^{2}$", "$20x+x^{2}$", "$2xw$", "$20x+\\tfrac12x^{2}$"],
      explanation: "Totalderiverten er $2xw+x^{2}\\cdot\\tfrac12$, og etter innsetting blir det $20x+x^{2}+\\tfrac12x^{2}$. Svaret $20x+x^{2}$ er bare den direkte effekten $K'_x$, som undervurderer grensekostnaden.",
    },
    {
      question: "I totalderiverten $df/dx=f'_x+f'_y\\,y'(x)$ kalles andre ledd",
      options: ["den indirekte effekten — $x$ flytter $y$, som flytter $f$", "den direkte effekten — $x$ virker rett inn på $f$", "restleddet — feilen i den lineære tilnærmingen", "krysseffekten — endringen i $f'_x$ når $y$ øker"],
      explanation: "Andre ledd fanger virkningen som går via mellomleddet $y$. Krysseffekten er noe annet, nemlig den kryssderiverte $f''_{xy}$, og restledd hører til lineær approksimasjon i Del 3.",
    },
    {
      question: "La $G(x,y)$ være generell, med $x=s+2t$ og $y=s-t$. Hva er $\\partial G/\\partial t$?",
      options: ["$2G'_x-G'_y$", "$G'_x+G'_y$", "$2G'_x+G'_y$", "$G'_x-2G'_y$"],
      explanation: "Bidragene har faktorene $\\partial x/\\partial t=2$ og $\\partial y/\\partial t=-1$. Svaret $G'_x+G'_y$ er derivasjon mht. $s$, og svarene $2G'_x+G'_y$ og $G'_x-2G'_y$ bytter om hvilken faktor som hører til hvilken indre variabel.",
    },
    {
      question: "Når svaret inneholder ukjente deriverte som $G'_x$, betyr det at",
      options: ["svaret er ferdig — formen er ikke oppgitt, så $G'_x$ skal stå", "du mangler et regnesteg og må derivere $G'_x$ videre", "oppgaven er feilstilt og ikke kan besvares", "du må anta en konkret form for $G$ og regne videre med den"],
      explanation: "Med generelle funksjoner er symbolske deriverte selve svaret. Å anta en konkret form er direkte feil — da besvarer du en annen og lettere oppgave enn den som ble stilt.",
    },
    {
      question: "Hvorfor tegne et avhengighetsdiagram før du regner?",
      options: ["Det viser hvor mange bidrag summen skal ha", "Det gir fortegnet på de partiellderiverte direkte", "Det erstatter behovet for tilbakesubstitusjon til slutt", "Det avgjør om du skal skrive $d$ eller $\\partial$ i svaret"],
      explanation: "Piler fra den ytre variabelen til hver indre viser antall veier, og dermed antall ledd. Fortegn må fortsatt regnes ut, og tilbakesubstitusjonen må uansett gjøres.",
    },
    {
      question: "Hva sier sensor om delpunktet med indre variabler i Oppgave 1?",
      options: ["At det gir lite uttelling hvis man ikke setter tilbake for de indre variablene", "At man alltid bør sette inn først og hoppe over kjerneregelen", "At kjerneregelen kan erstattes med differensialet i to variabler", "At notasjonen $\\partial$ må brukes for å få full uttelling"],
      explanation: "Tilbakesubstitusjon er det uttalte kravet — resten er metodefrihet. Innsetting først er lov når det lar seg gjøre, men er umulig med generelle funksjoner, og notasjonsvalget alene avgjør ingen poeng.",
    },
  ],
  'econ1100-1-4': [
    {
      question: "Hvorfor kan ikke potensregelen brukes på $x^{x}$?",
      options: ["Fordi eksponenten ikke er en konstant", "Fordi grunntallet ikke er tallet $e$", "Fordi funksjonen ikke er definert for $x>0$", "Fordi $x^{x}$ ikke er deriverbar noe sted"],
      explanation: "Potensregelen forutsetter fast eksponent. Funksjonen er både definert og deriverbar for $x>0$, og kravet om grunntallet $e$ hører til en helt annen regel.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}x^{x}$ for $x>0$?",
      options: ["$x^{x}(\\ln x+1)$", "$x\\cdot x^{x-1}$", "$x^{x}\\ln x$", "$x^{x}(\\ln x-1)$"],
      explanation: "Logaritmisk derivasjon gir begge virkningene. Svaret $x\\cdot x^{x-1}$ er potensregelen og $x^{x}\\ln x$ er $a^{x}$-regelen — hver av dem fanger bare ett av de to leddene i det riktige svaret.",
    },
    {
      question: "Hva er første steg i logaritmisk derivasjon av $y=f(x)^{g(x)}$?",
      options: ["Ta $\\ln$ på begge sider: $\\ln y=g\\ln f$", "Derivere begge sider direkte med produktregelen", "Skrive uttrykket om til $f(x)\\cdot g(x)$ og derivere", "Sette $g(x)$ lik en konstant og bruke potensregelen"],
      explanation: "Logaritmen flytter eksponenten ned som faktor, og da blir høyresiden et vanlig produkt. Å behandle eksponenten som konstant er nettopp feilen metoden er laget for å unngå.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\ln y$ når $y$ er en funksjon av $x$?",
      options: ["$\\dfrac{y'}{y}$", "$\\dfrac{1}{y}$", "$y'\\ln y$", "$\\dfrac{1}{y'}$"],
      explanation: "Kjerneregelen på $\\ln$ med innmat $y$ gir innmatens deriverte delt på innmaten. Svaret $\\frac{1}{y}$ glemmer kjernefaktoren $y'$, som er selve grunnen til at metoden virker.",
    },
    {
      question: "Hva glemmes oftest i steg 3 av logaritmisk derivasjon?",
      options: ["Å gange opp med $y$ etter at $y'/y$ er funnet", "Å bruke kjerneregelen inne i logaritmen", "Å sjekke at eksponenten faktisk er variabel", "Å skrive svaret på felles brøkstrek til slutt"],
      explanation: "Etter derivasjonen står du igjen med den relative endringen, ikke den deriverte. Å levere klammen alene er halvferdig — de andre alternativene er også reelle feller, men i andre steg.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}(2x)^{2x}$?",
      options: ["$2(2x)^{2x}(\\ln(2x)+1)$", "$(2x)^{2x}(\\ln(2x)+1)$", "$2x(2x)^{2x-1}$", "$(2x)^{2x}\\ln(2x)$"],
      explanation: "$\\ln y=2x\\ln(2x)$ gir $y'/y=2\\ln(2x)+2$. Svaret $(2x)^{2x}(\\ln(2x)+1)$ mangler faktoren 2, $2x(2x)^{2x-1}$ bruker potensregelen, og $(2x)^{2x}\\ln(2x)$ mangler leddet fra grunntallet.",
    },
    {
      question: "Hvilket krav må grunntallet oppfylle for at logaritmisk derivasjon skal være lovlig?",
      options: ["$f(x)>0$, siden vi tar logaritmen av det", "$f(x)\\ne 1$, siden $\\ln 1=0$ gir en triviell likning", "$f(x)$ må være en potens av $x$", "$f(x)$ må være voksende i hele området"],
      explanation: "Logaritmen er bare definert for positive tall. At $\\ln 1=0$ er helt uproblematisk, og det stilles ingen krav til funksjonsform eller monotoni.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}x^{\\sqrt{x}}$ for $x>0$?",
      options: ["$x^{\\sqrt{x}}\\cdot\\dfrac{\\ln x+2}{2\\sqrt{x}}$", "$x^{\\sqrt{x}}\\cdot\\dfrac{\\ln x}{2\\sqrt{x}}$", "$\\sqrt{x}\\cdot x^{\\sqrt{x}-1}$", "$x^{\\sqrt{x}}\\cdot\\dfrac{\\ln x+1}{\\sqrt{x}}$"],
      explanation: "$\\ln y=\\sqrt{x}\\ln x$ gir $\\frac{\\ln x}{2\\sqrt{x}}+\\frac{1}{\\sqrt{x}}$, som slås sammen til $\\frac{\\ln x+2}{2\\sqrt{x}}$. Svaret med bare $\\frac{\\ln x}{2\\sqrt{x}}$ i parentesen har glemt det andre leddet fra produktregelen.",
    },
    {
      question: "For $y=x^{a(x)}$ med $a$ deriverbar er $y'$ lik",
      options: ["$x^{a(x)}\\left[a'(x)\\ln x+\\dfrac{a(x)}{x}\\right]$", "$x^{a(x)}\\left[a'(x)\\ln x-\\dfrac{a(x)}{x}\\right]$", "$a(x)\\,x^{a(x)-1}\\,a'(x)$", "$x^{a(x)}\\left[a'(x)\\ln x+a(x)\\ln x\\right]$"],
      explanation: "Produktregelen på $a(x)\\ln x$ gir to ledd med pluss mellom. Setter du $a(x)=x$, må formelen reduseres til $x^{x}(\\ln x+1)$ — det gjør bare svaret der andre ledd er $\\frac{a(x)}{x}$.",
    },
    {
      question: "Hvilken metode forventer sensor på et delpunkt med $x^{x}$-type i Oppgave 1?",
      options: ["Logaritmisk derivasjon", "Potensregelen med kjerneregel", "Omskriving til en Cobb-Douglas-form", "Numerisk tilnærming med differansekvoten"],
      explanation: "Metodevalget er det oppgaven tester, og logaritmisk derivasjon er den forventede veien. Omskriving til $e^{g\\ln f}$ er en gyldig variant, men de andre alternativene fører ikke frem i det hele tatt.",
    },
    {
      question: "La $z=(xy)^{xy}$. Hva er $z'_x$?",
      options: ["$(xy)^{xy}\\,y\\,(\\ln(xy)+1)$", "$(xy)^{xy}\\,x\\,(\\ln(xy)+1)$", "$(xy)^{xy}\\,(\\ln(xy)+1)$", "$(xy)^{xy}\\,y\\ln(xy)$"],
      explanation: "$\\ln z=xy\\ln(xy)$ derivert mht. $x$ gir $y\\ln(xy)+y$. Svaret med faktoren $x$ i stedet for $y$ er derivasjon mht. $y$ — funksjonen er symmetrisk, så det er lett å forveksle de to.",
    },
    {
      question: "Hva er den relative endringen $y'/y$ et uttrykk for?",
      options: ["Endringen i $y$ som andel av nivået, altså prosentvis vekst", "Endringen i $y$ per enhets endring i $y$ selv", "Den andrederiverte av $\\ln y$ med hensyn på $x$", "Forholdet mellom eksponenten og grunntallet i uttrykket"],
      explanation: "$y'/y$ er nettopp den deriverte av $\\ln y$, og måler vekst i prosent. Størrelsen dukker opp igjen som byggekloss når elastisitet innføres i Del 2.",
    },
    {
      question: "Skal $y$ stå igjen i det ferdige svaret etter logaritmisk derivasjon?",
      options: ["Nei — steg 4 er å sette inn $y=f(x)^{g(x)}$", "Ja, men bare når eksponenten er en generell funksjon $a(x)$", "Ja — uttrykket $y'/y$ er selve fasiten på denne oppgavetypen", "Nei — $y$ skal erstattes med sin egen deriverte $y'$"],
      explanation: "Et svar som inneholder $y$, uttrykker den deriverte ved seg selv og er ikke ferdig — steg 3 gir bare $y'/y$, og steg 4 er å gange opp og sette inn. Alternativet som stopper ved $y'/y$, er nettopp den vanligste halvferdige besvarelsen. Med generell eksponent skal derimot $a(x)$ og $a'(x)$ bli stående, siden formen ikke er oppgitt.",
    },
    {
      question: "Hvilken av disse krever IKKE logaritmisk derivasjon?",
      options: ["$g(x)=x^{3}\\cdot 2^{x}$", "$f(x)=x^{2x}$", "$h(x)=(x^{2}+1)^{x}$", "$k(x)=x^{\\ln x}$"],
      explanation: "I $x^{3}\\cdot 2^{x}$ står de to funksjonene ved siden av hverandre, ikke oppå hverandre — produktregelen med potensregel og $a^{x}$-regel holder. De tre andre har variabelen i eksponenten på samme potens.",
    },
    {
      question: "Hvor har $x^{x}$ sitt bunnpunkt?",
      options: ["I $x=e^{-1}$, der $\\ln x+1=0$", "I $x=1$, der $x^{x}=1$", "I $x=e$, der $\\ln x=1$", "Ingen steder — funksjonen vokser overalt"],
      explanation: "Fasiten $x^{x}(\\ln x+1)$ er null når $\\ln x=-1$, og faktoren $x^{x}$ er positiv, så fortegnet følger klammen. Funksjonen faller altså først og stiger deretter.",
    },
    {
      question: "En likeverdig alternativ metode er å skrive om uttrykket til",
      options: ["$e^{\\,g(x)\\ln f(x)}$ og bruke kjerneregelen", "$f(x)\\cdot e^{g(x)}$ og bruke produktregelen", "$\\ln\\big(f(x)^{g(x)}\\big)$ og derivere det", "$g(x)^{f(x)}$ og bytte om rollene"],
      explanation: "Identiteten $a=e^{\\ln a}$ gir $f^{g}=e^{g\\ln f}$, og kjerneregelen fører frem til samme svar. De andre omskrivingene er rett og slett ikke like det opprinnelige uttrykket.",
    },
    {
      question: "La $z=(3xy)^{x}$. Hvorfor krever $z'_x$ og $z'_y$ ulike metoder?",
      options: ["Fordi eksponenten er variabel fra $x$, men konstant fra $y$", "Fordi $y$ bare står i grunntallet og derfor kan ignoreres", "Fordi logaritmisk derivasjon aldri virker i to variabler", "Fordi $z$ ikke er symmetrisk i de to variablene"],
      explanation: "Metodevalget avhenger av hvilken variabel du deriverer med hensyn på. Mht. $y$ er $x$ en fast eksponent, så det er en ren potens med kjerne — logaritmisk derivasjon virker fint også der, men er unødvendig.",
    },
    {
      question: "Hvordan kan du raskt kontrollere en fasit fra logaritmisk derivasjon?",
      options: ["Sette inn $x=1$ og sammenligne med differansekvoten", "Sjekke at klammen inneholder nøyaktig ett ledd", "Kontrollere at funksjonen ikke lenger står som faktor", "Bekrefte at svaret er uavhengig av $\\ln$-uttrykk"],
      explanation: "I $x=1$ forsvinner alle $\\ln x$-ledd, så uttrykket blir enkelt å sammenligne med et tall. Fasiten skal tvert imot ha funksjonen som faktor og som regel to ledd i klammen.",
    },
  ],
  'econ1100-1-5': [
    {
      question: "Hva er $\\dfrac{d}{dx}\\big[x\\,k(x)\\big]$ når $k$ er deriverbar?",
      options: ["$k(x)+x\\,k'(x)$", "$x\\,k'(x)$", "$k'(x)$", "$k(x)\\,k'(x)+x$"],
      explanation: "Produktregelen gir «derivert ganger urørt pluss urørt ganger derivert». Svarene $x\\,k'(x)$ og $k'(x)$ tar bare med ett av de to leddene, som er den vanligste feilen her.",
    },
    {
      question: "Hva betyr det at oppgaven sier at $k$ er «deriverbar»?",
      options: ["At $k'(x)$ finnes og reglene kan brukes", "At $k$ er voksende i hele definisjonsområdet sitt", "At $k$ kan skrives om til et polynom av lav grad, som $ax+b$", "At $k'(x)$ er en konstant vi bare ikke kjenner verdien av"],
      explanation: "Antakelsen gir eksistensen av den deriverte og ingenting mer. Verken monotoni, funksjonsform eller at $k'$ skulle være konstant, følger av den.",
    },
    {
      question: "Er $k(p)+p\\,k'(p)$ et ferdig svar?",
      options: ["Ja — de symbolske deriverte er fasiten", "Nei — man må anta en form for $k$ og regne videre", "Nei — $k'$ må erstattes med et tall før innlevering", "Ja, men bare hvis $k$ er en polynomfunksjon"],
      explanation: "Uten oppgitt funksjonsform er et symbolsk uttrykk det ferdige svaret. Å anta en konkret form besvarer en annen og lettere oppgave, og gir derfor mindre uttelling.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\,g\\big(u(x)\\big)$?",
      options: ["$g'\\big(u(x)\\big)\\,u'(x)$", "$g'(x)\\,u'(x)\\,u(x)$", "$g'\\big(u(x)\\big)+u'(x)\\,u(x)$", "$g\\big(u'(x)\\big)$"],
      explanation: "Kjerneregelen krever at $g'$ evalueres i $u(x)$ og ganges med kjernens deriverte. Å skrive $g'(x)$ er en meningsfeil: den deriverte skal måles der kjernen faktisk befinner seg.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\ln k(x)$ når $k(x)>0$?",
      options: ["$\\dfrac{k'(x)}{k(x)}$", "$\\dfrac{1}{k(x)}$", "$k'(x)\\ln k(x)$", "$\\dfrac{k(x)}{k'(x)}$"],
      explanation: "Regelen $\\frac{g'}{g}$ gjelder uendret med ukjent innmat. Svaret $\\frac{1}{k(x)}$ glemmer kjernefaktoren, som er nøyaktig samme felle som med konkrete funksjoner.",
    },
    {
      question: "Hva er $\\dfrac{d^{2}}{dx^{2}}\\big[x\\,k(x)\\big]$?",
      options: ["$2k'(x)+x\\,k''(x)$", "$k'(x)+2x\\,k''(x)$", "$x\\,k''(x)+k(x)$", "$2k'(x)$"],
      explanation: "Deriverer du $k(x)+xk'(x)$, gir første ledd $k'$ og andre ledd $k'+xk''$. Svaret $k'(x)+2x\\,k''(x)$ har glemt at det kommer et $k'$ fra hvert av de to leddene.",
    },
    {
      question: "Hva er den vanligste feilen ved andregangs derivasjon av symbolske uttrykk?",
      options: ["Å behandle $k'(x)$ som en konstant", "Å bruke produktregelen i stedet for kvotientregelen", "Å evaluere den deriverte i feil punkt", "Å glemme å forenkle sluttsvaret til én felles brøkstrek"],
      explanation: "$k'$ er en funksjon av $x$ og deriveres videre til $k''$. Feilen er lett å gjøre nettopp fordi $k'$ ser ut som et symbol snarere enn en funksjon.",
    },
    {
      question: "Hva er $\\dfrac{\\partial}{\\partial x}h(y)$ når $h$ er deriverbar?",
      options: ["$0$, siden $h(y)$ ikke inneholder $x$", "$h'(y)$, som er den vanlige deriverte", "$h'(y)\\cdot y'$, etter kjerneregelen", "$h(y)$, siden funksjonen står urørt"],
      explanation: "Mht. $x$ er $h(y)$ en konstant, og konstanter har derivert null. Svaret $h'(y)\\cdot y'$ ville krevd at $y$ selv var en funksjon av $x$, noe oppgaven ikke sier.",
    },
    {
      question: "En bedrift har inntekt $R(p)=p\\,k(p)$. Hva betyr leddet $p\\,k'(p)$ i $R'(p)$?",
      options: ["Inntektsvirkningen av at salget faller", "Inntekten fra de enhetene som allerede selges", "Den samlede inntekten ved den nye, høyere prisen $p$", "Kostnaden ved å produsere den siste solgte enheten"],
      explanation: "$k'(p)$ er mengdeendringen per krone, og hver av de enhetene ville gitt prisen $p$. Leddet $k(p)$ er derimot inntekten fra det bestående salget, og kostnader inngår ikke i inntektsfunksjonen i det hele tatt.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\left(\\dfrac{k(x)}{x}\\right)$?",
      options: ["$\\dfrac{x\\,k'(x)-k(x)}{x^{2}}$", "$\\dfrac{k(x)-x\\,k'(x)}{x^{2}}$", "$\\dfrac{k'(x)}{x}$", "$\\dfrac{k'(x)-k(x)}{x^{2}}$"],
      explanation: "Kvotientregelen: derivert teller ganger nevner, minus teller ganger derivert nevner. Svaret med telleren $k(x)-x\\,k'(x)$ har byttet om leddene, som gir feil fortegn på hele svaret — feil #12.",
    },
    {
      question: "Hvordan kan du kontrollere et symbolsk svar uten fasit?",
      options: ["Sette inn den enkleste funksjonen og regne begge veier", "Sjekke at antall ledd er likt antall ukjente funksjoner", "Derivere svaret én gang til og se om du kommer tilbake", "Kontrollere at ingen ukjente deriverte står igjen i svaret"],
      explanation: "Setter du for eksempel $k(x)=x$, kan du regne både formelen og det direkte uttrykket og sammenligne. De ukjente deriverte skal tvert imot bli stående i det ferdige svaret.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\big(k(x)\\big)^{2}$?",
      options: ["$2k(x)\\,k'(x)$", "$2k(x)$", "$2k'(x)$", "$\\big(k'(x)\\big)^{2}$"],
      explanation: "Potens av en funksjon: $n g^{n-1}g'$ med $n=2$. Svaret $2k(x)$ glemmer kjernefaktoren, og $\\big(k'(x)\\big)^{2}$ kvadrerer den deriverte i stedet for å bruke kjerneregelen.",
    },
    {
      question: "Hva er $\\dfrac{\\partial}{\\partial y}\\big[b(x,y)\\,h(y)\\big]$?",
      options: ["$b'_{y}\\,h(y)+b(x,y)\\,h'(y)$", "$b'_{y}(x,y)\\,h'(y)$", "$b(x,y)\\,h'(y)$", "$b'_{x}\\,h(y)+b(x,y)\\,h'(y)$"],
      explanation: "Begge faktorene varierer med $y$, så produktregelen gjelder med partiellderivert av $b$. Svaret $b'_{y}(x,y)\\,h'(y)$ ganger de deriverte i stedet for å bruke produktregelen, og svaret med $b'_{x}$ deriverer $b$ mht. feil variabel.",
    },
    {
      question: "Hvorfor bruker økonomisk teori generelle funksjoner i stedet for konkrete formler?",
      options: ["Fordi konklusjonene da gjelder hele klasser av modeller", "Fordi konkrete funksjoner sjelden lar seg derivere i praksis", "Fordi symbolske uttrykk alltid gir enklere regnestykker", "Fordi eksamen ikke tillater bruk av tallverdier"],
      explanation: "En konklusjon utledet fra $k'(p)<0$ gjelder for enhver etterspørselsfunksjon med den egenskapen. Konkrete funksjoner er fullt deriverbare, og symbolsk regning er ofte tyngre, ikke lettere.",
    },
    {
      question: "Et overskudd er $\\pi(N)=p\\,F(N)-wN$ med $p$ og $w$ konstante. Hva er $\\pi'(N)$?",
      options: ["$p\\,F'(N)-w$", "$p\\,F'(N)-wN$", "$F'(N)-w$", "$p\\,F(N)-w$"],
      explanation: "Konstanten $p$ står utenfor, $F$ deriveres til $F'$, og $wN$ deriveres til $w$. Svaret $p\\,F'(N)-wN$ har glemt å derivere det siste leddet i det hele tatt.",
    },
  ],
  'econ1100-1-6': [
    {
      question: "Første steg i løsningsoppskriften for Oppgave 1 er å",
      options: ["identifisere hvilken metode funksjonen krever", "derivere mht. den første variabelen i uttrykket", "forenkle funksjonen til en sum av potenser", "sjekke definisjonsområdet til hele uttrykket"],
      explanation: "Metodevalget avgjør alt som følger, og tar ti sekunder. Forenkling og definisjonsområde er nyttige grep, men de kommer etter at du vet hvilken vei du skal.",
    },
    {
      question: "Du får $f(x)=\\dfrac{3x-2}{x^{3}}$. Hvilken vei er raskest og tryggest?",
      options: ["Dele opp i $3x^{-2}-2x^{-3}$ og bruke potensregelen", "Bruke kvotientregelen med $u=3x-2$ og $v=x^{3}$ som vanlig", "Bruke kjerneregelen med $x^{3}$ som kjerne", "Bruke logaritmisk derivasjon på hele uttrykket"],
      explanation: "Når nevneren er en ren potens av $x$, kan brøken deles i ledd med negative eksponenter. Kvotientregelen gir samme svar, men flere sjanser til fortegnsfeil (feil #12).",
    },
    {
      question: "Hvor mye tid bør Oppgave 1 ta på en tre timers eksamen?",
      options: ["20–25 minutter, siden delpunktene er mekaniske", "45–50 minutter, siden den er verdt flest poeng", "5–10 minutter, siden alt er ren pugg", "60 minutter, siden den bør kontrollregnes to ganger"],
      explanation: "Oppgaven er verdt 15–25 poeng, altså rundt 36 minutter «rettmessig» tid, men den kan gjøres raskere fordi den er mekanisk. Overskuddet er ren gevinst til storoppgavene.",
    },
    {
      question: "Hva er det siste du skal gjøre med et delpunkt der indre variabler inngår?",
      options: ["Substituere tilbake til de opprinnelige variablene", "Regne den kryssderiverte som obligatorisk kontroll", "Angi definisjonsområdet til de indre funksjonene", "Sette de indre deriverte lik 1 og forenkle"],
      explanation: "Manglende tilbakesubstitusjon er feil #5 og gir trekk selv om regningen frem dit er riktig. Kryssderivert er en god, men frivillig, kontroll.",
    },
    {
      question: "Hva sier sensor om følgefeil?",
      options: ["De straffes ikke — bygg videre på eget mellomresultat", "De gir trekk hver gang de forplanter seg videre", "De medfører at hele oppgaven vurderes som ubesvart", "De teller bare hvis sluttsvaret blir helt urimelig"],
      explanation: "Regner du korrekt videre på et feil mellomresultat, får du uttelling for den delen. Unntaket er når feilen gjør resten vesentlig lettere — derfor skal du aldri stoppe opp fordi et tall ser rart ut.",
    },
    {
      question: "Hvordan fordeles poengene innenfor én oppgave på ECON1100-eksamen?",
      options: ["Likt mellom delpunktene", "Etter hvor lang tid hvert delpunkt tar", "Med mest vekt på det siste delpunktet", "Etter hvor mange linjer besvarelsen fyller"],
      explanation: "Sensorveiledningene oppgir hvert år lik fordeling mellom delpunktene. Det betyr at et delpunkt du står fast på, ikke er verdt mer enn de andre — gå videre når tiden er brukt opp.",
    },
    {
      question: "Hvilket delpunkt krever logaritmisk derivasjon?",
      options: ["$g(x)=(x+1)^{x}$", "$g(x)=(x+1)^{4}$", "$g(x)=4^{x+1}$", "$g(x)=\\ln(x+1)$"],
      explanation: "Bare i det første er både grunntall og eksponent variable. Nummer to løses med potensregelen, nummer tre med $a^{x}$-regelen, og det siste med regelen $\\frac{g'}{g}$.",
    },
    {
      question: "Hva er $f'_y$ når $f(x,y)=\\dfrac{y}{x^{2}+y}$?",
      options: ["$\\dfrac{x^{2}}{(x^{2}+y)^{2}}$", "$\\dfrac{1}{(x^{2}+y)^{2}}$", "$\\dfrac{-2xy}{(x^{2}+y)^{2}}$", "$\\dfrac{x^{2}+2y}{(x^{2}+y)^{2}}$"],
      explanation: "Kvotientregelen gir $\\frac{(x^{2}+y)-y}{(x^{2}+y)^{2}}$, og telleren ryddes til $x^{2}$. Svaret $\\frac{-2xy}{(x^{2}+y)^{2}}$ er $f'_x$, som deriveres med en helt annen metode.",
    },
    {
      question: "La $G(s,t)=x-y^{2}$ med $x=st$ og $y=s-t$. Hva er $\\partial G/\\partial t$?",
      options: ["$3s-2t$", "$s-2t$", "$3t-2s$", "$s+2t$"],
      explanation: "Kjerneregelen gir $1\\cdot s+(-2y)\\cdot(-1)=s+2y$, og $y=s-t$ gir $3s-2t$. Svaret $3t-2s$ er derivasjon mht. $s$ — den vanligste forvekslingen i dette delpunktet.",
    },
    {
      question: "Hva er den beste kontrollen når du har regnet ut $f'_x$ og $f'_y$?",
      options: ["Regne den kryssderiverte begge veier og sammenligne", "Sette begge deriverte lik null og løse likningssystemet", "Sammenligne fortegnene på de to deriverte", "Kontrollere at begge inneholder like mange ledd"],
      explanation: "Youngs teorem garanterer at $f''_{xy}=f''_{yx}$, så et avvik avslører en feil lenger opp. Å sette de deriverte lik null hører til optimering, ikke kontroll.",
    },
    {
      question: "Hva menes med «åpenbar forenkling» slik sensor bruker uttrykket?",
      options: ["Sett fellesfaktorer utenfor og forkort brøker", "Gang ut alle parenteser og sorter etter potenser av variabelen", "Skriv alltid svaret som én enkelt brøk med felles nevner", "Reduser svaret til et tall der det overhodet er mulig"],
      explanation: "Kravet er at strukturen skal være synlig, ikke at regningen skal være maksimal. Å gange ut $5(x^{2}+3x)^{4}(2x+3)$ er tidsbruk uten uttelling.",
    },
    {
      question: "Hva er $R'(x)$ når $R(x)=\\dfrac{k(x)}{x}$ og $k$ er deriverbar?",
      options: ["$\\dfrac{x\\,k'(x)-k(x)}{x^{2}}$", "$\\dfrac{k(x)-x\\,k'(x)}{x^{2}}$", "$\\dfrac{k'(x)}{x^{2}}$", "$\\dfrac{k'(x)-k(x)}{x}+k'(x)$"],
      explanation: "Kvotientregelen med $u=k(x)$ og $v=x$. Svaret med telleren $k(x)-x\\,k'(x)$ har byttet om leddene, som snur fortegnet på hele svaret — feil #12 i sin symbolske form.",
    },
  ],
  'econ1100-10-1': [
    {
      question: "Hva er kriteriet for at $f$ har en invers på et intervall?",
      options: ["At $f'$ har konstant fortegn der", "At $f'$ er positiv i ett punkt", "At $f$ er kontinuerlig der", "At $f''$ har konstant fortegn der"],
      explanation: "Konstant fortegn gir streng monotoni, og da treffes hver verdi nøyaktig én gang. Ett punkt sier ingenting om resten, og krumningen er irrelevant for eksistensen.",
    },
    {
      question: "Hva er $g'(y)$ når $g$ er inversen til $f$?",
      options: ["$\\dfrac{1}{f'(x)}$ der $y=f(x)$", "$f'(x)$ der $y=f(x)$", "$\\dfrac{1}{f'(y)}$ direkte", "$-\\dfrac{1}{f'(x)}$ der $y=f(x)$"],
      explanation: "Kjerneregelen på identiteten $g(f(x))=x$ gir $g'(f(x))f'(x)=1$. De to vanligste fellene er å glemme å snu brøken og å sette $y$ inn i $f'$ i stedet for $x$.",
    },
    {
      question: "$f(x)=x^{3}+2x$ og $f(1)=3$. Hva er $g'(3)$?",
      options: ["$\\tfrac15$", "$5$", "$\\tfrac{1}{29}$", "$\\tfrac13$"],
      explanation: "$f'(x)=3x^{2}+2$ gir $f'(1)=5$, og inversen har den omvendte verdien. Alternativet $1/29$ setter $y=3$ inn i $f'$ i stedet for $x=1$.",
    },
    {
      question: "Har $f(x)=x^{2}$ en invers på hele $\\mathbb{R}$?",
      options: ["Nei — $f'$ skifter fortegn i null", "Ja — $x^{2}$ er alltid positiv", "Ja — kvadratrota er inversen", "Nei — $f$ er ikke deriverbar i null"],
      explanation: "$f'(x)=2x$ er negativ til venstre og positiv til høyre, og $f(1)=f(-1)=1$ viser at baklengs lesning ikke er entydig. På $[0,\\infty)$ finnes inversen derimot.",
    },
    {
      question: "Har en strengt avtakende funksjon en invers?",
      options: ["Ja — kriteriet er konstant fortegn", "Nei — bare voksende funksjoner har det", "Ja — men bare på positive tall", "Nei — inversen blir ikke en funksjon"],
      explanation: "Konstant negativt fortegn på $f'$ gir like entydig baklengs lesning som positivt. Inversen er da selv avtakende, og $g'(y)=1/f'(x)$ blir negativ.",
    },
    {
      question: "Hvorfor er $f(x)=x^{3}$ strengt voksende selv om $f'(0)=0$?",
      options: ["Fordi fortegnet ikke skifter", "Fordi $f''(0)=0$ også", "Fordi $f$ er en odde funksjon", "Fordi $f(0)=0$"],
      explanation: "$f'(x)=3x^{2}$ er positiv overalt utenom i det ene punktet der den er null. Streng monotoni krever at fortegnet ikke skifter, ikke at den deriverte aldri er null.",
    },
    {
      question: "$f(x)=x^{2}-4x$ på $[2,\\infty)$. Hva er inversen?",
      options: ["$g(y)=2+\\sqrt{4+y}$", "$g(y)=2-\\sqrt{4+y}$", "$g(y)=\\sqrt{y+4}$", "$g(y)=4+\\sqrt{2+y}$"],
      explanation: "ABC-formelen gir $x=2\\pm\\sqrt{4+y}$, og minus-roten forkastes fordi den gir $x\\le 2$. Å begrunne forkastingen med definisjonsområdet er selve poenget her.",
    },
    {
      question: "Hva blir $g'$ hvis $f$ er bratt i punktet?",
      options: ["Slak — brøken snus", "Like bratt som $f$", "Brattere enn $f$", "Null i punktet"],
      explanation: "Speilingen om linja $y=x$ bytter om «bortover» og «oppover». Formelen $g'(y)=1/f'(x)$ gjør nettopp dette til en regneregel.",
    },
    {
      question: "Hva er den vanligste feilen i et IN-delpunkt?",
      options: ["Å sjekke monotoni bare i ett punkt", "Å derivere $f$ feil", "Å glemme definisjonsmengden til $g$", "Å bruke ABC-formelen"],
      explanation: "Kriteriet gjelder hele definisjonsområdet, og en funksjon kan godt vokse der du ser og likevel mangle invers. Fortegnsargumentet må skrives ut i full bredde for å gi uttelling.",
    },
    {
      question: "$f(x)=x^{4}+x$. Har $f$ invers på hele $\\mathbb{R}$?",
      options: ["Nei — $f'=4x^{3}+1$ skifter fortegn", "Ja — $x^{4}$ er alltid positiv", "Ja — $f'=4x^{3}+1$ er alltid positiv", "Nei — $f$ er ikke deriverbar"],
      explanation: "Den deriverte er negativ for $x$ under $-(1/4)^{1/3}$ og positiv over. At $x^{4}$ er positiv sier ingenting — det er $f'$ som avgjør monotonien.",
    },
    {
      question: "Hva sier identiteten $g(f(x))=x$?",
      options: ["At fram og tilbake gir deg tilbake starten", "At $g$ og $f$ er like funksjoner", "At $g$ er den deriverte av $f$", "At $f$ er strengt voksende"],
      explanation: "Identiteten er definisjonen på invers, og derivert med kjerneregelen gir den hele formelen $g'(y)=1/f'(x)$. Den sier ingenting om monotoni i seg selv.",
    },
    {
      question: "$F(N)=50\\sqrt N$ er en produktfunksjon. Hva betyr inversen $G(Y)$?",
      options: ["Hvor mange ansatte som trengs for $Y$", "Hvor mye som produseres med $Y$ ansatte", "Hva produksjonen koster ved $Y$ enheter", "Hvor mye hver ansatt produserer"],
      explanation: "Inversen leser sammenhengen baklengs: mengden er gitt, bemanningen skal bestemmes. Derfor er $G'(Y)=1/F'(N)$ arbeidskraftbehovet per enhet på marginen.",
    },
    {
      question: "Hvordan er krumningen til inversen når $f$ er voksende og konkav?",
      options: ["$g$ er voksende og konveks", "$g$ er voksende og konkav", "$g$ er avtakende og konveks", "$g$ har ingen bestemt krumning"],
      explanation: "Formelen $g''(y)=-f''(x)/[f'(x)]^{3}$ gir positivt fortegn når $f''<0$ og $f'>0$. Paret $\\ln x$ og $e^{y}$ er standardeksempelet på nettopp dette.",
    },
  ],
  'econ1100-10-2': [
    {
      question: "Hva er $\\int x^{n}\\,dx$?",
      options: ["$\\dfrac{x^{n+1}}{n+1}+C$ når $n\\ne -1$", "$\\dfrac{x^{n+1}}{n+1}+C$ for alle $n$", "$nx^{n-1}+C$ for alle $n$", "$\\dfrac{x^{n-1}}{n-1}+C$ når $n\\ne 1$"],
      explanation: "Legg til én på eksponenten og del på den nye. Unntaket $n=-1$ ville gitt null i nevneren, og nettopp det unntaket er det eksamen tester oftest.",
    },
    {
      question: "Hva er $\\int x^{-1}\\,dx$?",
      options: ["$\\ln\\lvert x\\rvert+C$", "$\\dfrac{x^{0}}{0}+C$", "$-x^{-2}+C$", "$\\dfrac{1}{2}x^{-2}+C$"],
      explanation: "Potensregelen bryter sammen for $n=-1$, og logaritmen tar over. Absoluttverditegnet hører med fordi $1/x$ også er definert for negative $x$.",
    },
    {
      question: "Hva er $\\int e^{-3x}\\,dx$?",
      options: ["$-\\tfrac13 e^{-3x}+C$", "$\\tfrac13 e^{-3x}+C$", "$-3e^{-3x}+C$", "$-\\tfrac13 e^{-3x+1}+C$"],
      explanation: "Regelen er $\\tfrac1k e^{kx}$, og med $k=-3$ blir faktoren negativ. Kontroller ved å derivere: kjerneregelen henter fram faktoren $-3$ som forkorter mot $-\\tfrac13$.",
    },
    {
      question: "Hva er $\\int_1^9\\frac{1}{\\sqrt x}\\,dx$?",
      options: ["$4$", "$2$", "$6$", "$16$"],
      explanation: "Den antideriverte er $2\\sqrt x$, og innsetting gir $6-2$. Svaret 6 glemmer å trekke fra nedre grense, som er den vanligste slurvefeilen.",
    },
    {
      question: "Hvorfor faller integrasjonskonstanten bort i et bestemt integral?",
      options: ["Den trekkes fra seg selv", "Fordi $C$ alltid settes til null", "Fordi grensene er tall", "Fordi den deriverte av $C$ er null"],
      explanation: "Uttrykket er $F(b)+C-(F(a)+C)$, og de to konstantene kansellerer. At den deriverte av en konstant er null er grunnen til at $C$ finnes, ikke til at den forsvinner.",
    },
    {
      question: "Hva er den raskeste kontrollen på en antiderivert?",
      options: ["Deriver den og sammenlign", "Sett inn $x=0$ og sjekk", "Sjekk at svaret er positivt", "Regn integralet en gang til"],
      explanation: "Får du integranden tilbake, er den antideriverte riktig. Kontrollen tar fem sekunder og fanger nesten alle fortegn- og eksponentfeil.",
    },
    {
      question: "Hva er arealet mellom $f(x)=2x$ og $g(x)=x^{2}$?",
      options: ["$\\tfrac43$", "$-\\tfrac43$", "$4$", "$\\tfrac83$"],
      explanation: "Kurvene møtes i 0 og 2, og linja ligger øverst, så arealet er $\\int_0^2(2x-x^2)dx$. Et negativt svar betyr at rekkefølgen er snudd — areal er aldri negativt.",
    },
    {
      question: "Kurven ligger under $x$-aksen på deler av intervallet. Hva må du gjøre?",
      options: ["Dele opp ved nullpunktene", "Bytte fortegn på hele integralet", "Integrere absoluttverdien direkte", "Bruke bare den positive delen"],
      explanation: "Integralet regner med fortegn, mens arealet er positivt overalt. Derfor må hvert delintervall med fast fortegn regnes for seg og tallverdiene legges sammen.",
    },
    {
      question: "Hvilke integrasjonsteknikker er pensum i ECON1100?",
      options: ["Ingen — bare elementære antideriverte", "Substitusjon, men ikke delvis integrasjon", "Delvis integrasjon, men ikke substitusjon", "Både substitusjon og delvis integrasjon"],
      explanation: "Alle tre teknikkene har null forekomster i de 16 settene. Ser et integral ut til å kreve dem, har du sannsynligvis lest oppgaven feil.",
    },
    {
      question: "Hva er $\\int_1^{e}\\frac1x\\,dx$?",
      options: ["$1$", "$e-1$", "$e$", "$\\tfrac1e$"],
      explanation: "Den antideriverte er $\\ln x$, og $\\ln e-\\ln 1=1-0$. Svaret $e-1$ bruker den antideriverte til $e^{x}$ i stedet, som er en nær og vanlig felle.",
    },
    {
      question: "Hva betyr $\\int_0^{q}C'(x)\\,dx$ økonomisk?",
      options: ["De variable kostnadene ved $q$", "Grensekostnaden ved akkurat $q$ enheter", "De faste kostnadene i produksjonen", "Gjennomsnittskostnaden per enhet"],
      explanation: "Grensekostnaden integreres opp igjen til kostnadsnivået, minus det som påløper ved null produksjon. De faste kostnadene er nettopp integrasjonskonstanten.",
    },
    {
      question: "Hva er første grep når integranden er $\\dfrac{1}{x^{3}}$?",
      options: ["Skriv den som $x^{-3}$", "Bruk logaritmeregelen", "Sett $u=x^{3}$ og substituer", "Del opp i to brøker"],
      explanation: "På potensform gjelder potensregelen direkte, og svaret blir $-\\tfrac12 x^{-2}+C$. Logaritmeregelen gjelder bare eksponenten $-1$, ikke alle negative eksponenter.",
    },
  ],
  'econ1100-10-3': [
    {
      question: "Når konvergerer $\\sum_{t=0}^{\\infty}ar^{t}$?",
      options: ["Bare når $\\lvert r\\rvert<1$", "Bare når $r>0$", "Bare når $a<1$", "Alltid, uansett $r$"],
      explanation: "Leddene må krympe raskt nok til at halen blir ubetydelig, og det krever tallverdi under 1. Startleddet $a$ påvirker summens størrelse, aldri om den finnes.",
    },
    {
      question: "Hva er $\\sum_{t=0}^{\\infty}ar^{t}$ når $\\lvert r\\rvert<1$?",
      options: ["$\\dfrac{a}{1-r}$", "$\\dfrac{a}{r-1}$", "$\\dfrac{1}{1-r}$", "$\\dfrac{a}{1+r}$"],
      explanation: "Nevneren er $1-r$, ikke $r-1$. Kontroll: med $0<r<1$ skal summen være større enn første ledd, og den snudde nevneren ville gitt et negativt tall.",
    },
    {
      question: "Hva er $\\sum_{t=0}^{\\infty}(0{,}8)^{t}$?",
      options: ["$5$", "$1{,}25$", "$0{,}8$", "$4$"],
      explanation: "Her er $a=1$ og $r=0{,}8$, så summen er $1/0{,}2$. Alternativet $1{,}25$ kommer av å regne $1/0{,}8$ og glemme at nevneren er $1-r$.",
    },
    {
      question: "Konvergerer $\\sum_{t=0}^{\\infty}5(-0{,}5)^{t}$?",
      options: ["Ja — tallverdien er $0{,}5<1$", "Nei — kvotienten er negativ", "Nei — leddene veksler fortegn", "Ja — men bare for partall $t$"],
      explanation: "Kravet gjelder tallverdien, ikke fortegnet. Leddene veksler fortegn og krymper, og delsummene svinger seg inn mot $5/1{,}5=10/3$.",
    },
    {
      question: "Konvergerer $\\sum_{i=0}^{\\infty}2^{i}$?",
      options: ["Nei — $\\lvert r\\rvert=2>1$", "Ja — summen er $-1$", "Ja — summen er $2$", "Nei — men bare fordi $a=1$"],
      explanation: "Leddene $1,2,4,8,\\dots$ vokser i stedet for å krympe. Sumformelen ville gitt $-1$, og et negativt tall som sum av positive ledd er selve varselsignalet.",
    },
    {
      question: "Hva er $a$ i rekka $\\sum_{t=2}^{\\infty}(0{,}9)^{t}$?",
      options: ["$0{,}81$", "$0{,}9$", "$1$", "$2$"],
      explanation: "Startleddet er alltid det første leddet som faktisk er med, altså $(0{,}9)^{2}$. Kvotienten forblir $0{,}9$ — startpunktet endrer $a$, aldri $r$.",
    },
    {
      question: "Hva er $\\sum_{k=1}^{n}k$?",
      options: ["$\\dfrac{n(n+1)}{2}$", "$\\dfrac{n(n-1)}{2}$", "$\\dfrac{n^{2}}{2}$", "$n(n+1)$"],
      explanation: "Antall tall ganget med gjennomsnittet av det første og det siste. Kontroller med $n=3$: formelen gir 6, og $1+2+3=6$.",
    },
    {
      question: "Hvor mange ledd har $\\sum_{t=0}^{n}ar^{t}$?",
      options: ["$n+1$", "$n$", "$n-1$", "$2n$"],
      explanation: "Summen starter på $t=0$, så tellingen begynner ved null. Det er derfor den endelige sumformelen har $r^{n+1}$ i telleren og ikke $r^{n}$.",
    },
    {
      question: "Hva er nåverdien av $z$ kroner hver periode i all framtid?",
      options: ["$\\dfrac{z}{1-\\beta}$ når $0<\\beta<1$", "$\\dfrac{z}{\\beta}$ når $0<\\beta<1$", "$\\dfrac{z}{1+\\beta}$ for enhver $\\beta$", "$z\\beta$ når $0<\\beta<1$"],
      explanation: "Strømmen er en geometrisk rekke med kvotient $\\beta$, og sumformelen gjelder når $\\beta$ er under 1. Er $\\beta\\ge 1$, divergerer rekka og nåverdien er ikke endelig.",
    },
    {
      question: "Hvorfor halveres nåverdien når $\\beta$ går fra $0{,}95$ til $0{,}90$?",
      options: ["Fordi nevneren $1-\\beta$ dobles", "Fordi $\\beta$ faller med fem prosent", "Fordi antall perioder halveres", "Fordi beløpet $z$ må justeres ned"],
      explanation: "Nevneren går fra $0{,}05$ til $0{,}10$, altså dobbelt så stor, og brøken halveres. Nær 1 gir små endringer i $\\beta$ dramatiske utslag.",
    },
    {
      question: "Hva er kvotienten i $\\sum_{t=0}^{\\infty}\\left(\\dfrac{x}{2}\\right)^{t}$?",
      options: ["$\\dfrac{x}{2}$", "$x$", "$\\dfrac12$", "$\\dfrac{2}{x}$"],
      explanation: "Kvotienten er hele uttrykket som opphøyes i $t$, også når det inneholder en variabel. Konvergenskravet blir da $\\lvert x\\rvert<2$.",
    },
    {
      question: "Hva er tryggeste metode på en sum med fire eller fem ledd?",
      options: ["Skriv den ut ledd for ledd", "Bruk den geometriske sumformelen", "Bruk formelen for heltallssummer", "Regn ut grenseverdien først"],
      explanation: "Fem ledd tar femten sekunder å legge sammen, og du unngår enhver formelfeil. Negative ledd og nulledd er dessuten lette å overse i hoderegning.",
    },
  ],
  'econ1100-11-1': [
    {
      question: "Hva gir en riktig konklusjon uten begrunnelse i sant/usant?",
      options: ["Null poeng", "Halv uttelling", "Full uttelling", "Ett poeng av fem"],
      explanation: "Sensor honorerer argumentet, ikke svaret — det er feil #9 og fagets viktigste enkeltregel. Motsatt gir et riktig ført argument med regnefeil fortsatt uttelling.",
    },
    {
      question: "Hva er raskeste vei til å felle en gal generell påstand?",
      options: ["Ett konkret motbevis", "Et generelt bevis for det motsatte", "En henvisning til teorikapitlet", "En liste over unntak"],
      explanation: "En generell påstand faller på ett enkelt eksempel, og det er både raskere å skrive og like mye verdt. En henvisning uten eget argument er ubegrunnet.",
    },
    {
      question: "Hvor mange ledd har $df$ når $f$ har to variabler?",
      options: ["To", "Ett", "Tre", "Det avhenger av punktet"],
      explanation: "Differensialet har ett ledd per variabel: $df=f'_x\\,dx+f'_y\\,dy$. Å utelate det ene er feil #4, og skjer typisk når man tror den ene variabelen «ikke endrer seg».",
    },
    {
      question: "$f(x,y)=x^{2}y^{3}$. Hvilken grad er den homogen av?",
      options: ["5", "6", "2", "3"],
      explanation: "Innsetting av $tx,ty$ gir $t^{2}t^{3}=t^{5}$. For rene potensfunksjoner er graden summen av eksponentene, ikke produktet.",
    },
    {
      question: "Hva ganges $f$ med når begge variabler dobles og $f$ er homogen av grad $k$?",
      options: ["$2^{k}$", "$2k$", "$k^{2}$", "$2+k$"],
      explanation: "Definisjonen $f(tx,ty)=t^{k}f$ med $t=2$ gir faktoren $2^{k}$. Med $k=0{,}6$ er $2^{k}\\approx 1{,}52$ mot $2k=1{,}2$ — helt ulike svar.",
    },
    {
      question: "Hva følger av $f''(a)=0$ alene?",
      options: ["Ingenting", "At $a$ er et vendepunkt", "At $a$ er et ekstrempunkt", "At $f$ er lineær nær $a$"],
      explanation: "$x^{4}$ har $f''(0)=0$ og globalt minimum, mens $x^{3}$ har $f''(0)=0$ og vendepunkt. Til vendepunkt kreves at $f''$ skifter fortegn.",
    },
    {
      question: "Kan en voksende funksjon ha avtakende derivert?",
      options: ["Ja — $\\sqrt x$ er et eksempel", "Nei — $f'$ må vokse med $f$", "Ja, men bare på negative tall", "Nei — det bryter med monotoni"],
      explanation: "$f'(1)=\\tfrac12$ og $f'(4)=\\tfrac14$ for kvadratrota, som likevel vokser overalt. Monotoni styres av $f'$, krumning av $f''$, og de to er uavhengige.",
    },
    {
      question: "Hva er $\\mathrm{El}_x f$ for $f(x)=7x^{2{,}5}$?",
      options: ["$2{,}5$", "$7$", "$17{,}5$", "$1{,}5$"],
      explanation: "For en ren potens $Cx^{a}$ er elastisiteten eksponenten $a$, og konstanten forsvinner. Alternativet $1{,}5$ leser av eksponenten i den deriverte i stedet.",
    },
    {
      question: "Hva er $\\mathrm{El}_x(fg)$ når $\\mathrm{El}_x f=2$ og $\\mathrm{El}_x g=3$?",
      options: ["$5$", "$6$", "$1$", "$\\tfrac23$"],
      explanation: "Elastisiteter legges sammen for produkter, akkurat som eksponenter. Alternativet 6 multipliserer dem, som er den vanligste fellen her.",
    },
    {
      question: "Hva er $\\int x^{-1}\\,dx$?",
      options: ["$\\ln\\lvert x\\rvert+C$", "$\\dfrac{x^{0}}{0}+C$", "$-x^{-2}+C$", "$\\dfrac{1}{2}x^{-2}+C$"],
      explanation: "Potensregelen krever $n\\ne -1$, siden nevneren $n+1$ ellers blir null. Logaritmen dekker nettopp det unntaket, og absoluttverdien hører med.",
    },
    {
      question: "Hva er $\\int e^{-2x}\\,dx$?",
      options: ["$-\\tfrac12 e^{-2x}+C$", "$\\tfrac12 e^{-2x}+C$", "$-2e^{-2x}+C$", "$-\\tfrac12 e^{-2x+1}+C$"],
      explanation: "Regelen er $\\tfrac1k e^{kx}$, og med $k=-2$ blir faktoren negativ. Kontroller ved derivasjon: det påståtte $+\\tfrac12$ gir integranden med feil fortegn.",
    },
    {
      question: "Når konvergerer $\\sum_{t=0}^{\\infty}ar^{t}$?",
      options: ["Når $\\lvert r\\rvert<1$", "Når $r>0$", "Når $a<1$", "Når $r<1$"],
      explanation: "Kravet gjelder tallverdien, så $r=-0{,}5$ konvergerer mens $r=-1{,}2$ ikke gjør det. Alternativet «$r<1$» ville feilaktig godtatt alle negative kvotienter.",
    },
    {
      question: "Hva er varselsignalet på at sumformelen er brukt ulovlig?",
      options: ["Negativ sum av positive ledd", "Summen er større enn første ledd", "Kvotienten er en brøk", "Summen er et desimaltall"],
      explanation: "Divergerer rekka, gir formelen likevel et tall — for $\\sum 2^{i}$ blir det $-1$. Alle leddene er positive, så et negativt svar er umulig.",
    },
    {
      question: "Hva er helningen til nivåkurven $F(x,y)=c$?",
      options: ["$-\\dfrac{F'_x}{F'_y}$", "$\\dfrac{F'_x}{F'_y}$", "$-\\dfrac{F'_y}{F'_x}$", "$\\dfrac{F'_y}{F'_x}$"],
      explanation: "Fra $dF=F'_x\\,dx+F'_y\\,dy=0$ følger minustegnet direkte. Uten det blir en fallende nivåkurve stigende, og det er en av arkivets hyppigste påstander.",
    },
    {
      question: "Hva sier omhyllingsteoremet?",
      options: ["$\\dfrac{dV}{da}=\\dfrac{\\partial L^*}{\\partial a}$", "$\\dfrac{dV}{da}=\\dfrac{\\partial F^*}{\\partial a}$", "$\\dfrac{dV}{da}=\\lambda\\dfrac{\\partial g}{\\partial a}$", "$\\dfrac{dV}{da}=\\dfrac{\\partial L^*}{\\partial\\lambda}$"],
      explanation: "Lagrange-funksjonen deriveres partielt mht. parameteren og evalueres i optimum. Å bruke $F$ i stedet for $L$ mister bidraget fra bibetingelsen.",
    },
    {
      question: "Må du finne $x^*$ eksplisitt for å bruke omhyllingsteoremet?",
      options: ["Nei — det er hele poenget", "Ja — ellers er $L^*$ udefinert", "Ja — men bare ved to variabler", "Nei — men $\\lambda$ må være kjent"],
      explanation: "Leddene fra $dx^*/da$ ganges med $\\partial L/\\partial x$, som er null i optimum, og faller derfor bort. Å reutlede teoremet er en feil, ikke en dyd.",
    },
    {
      question: "$f$ er homogen av grad $k$. Hvilken grad har $f'_x$?",
      options: ["$k-1$", "$k$", "$k+1$", "$k/2$"],
      explanation: "Derivasjon senker homogenitetsgraden med én. For $f=x^{2}y^{3}$ med $k=5$ er $f'_x=2xy^{3}$ homogen av grad 4.",
    },
    {
      question: "Hva sier Eulers relasjon?",
      options: ["$xf'_x+yf'_y=kf$", "$xf'_x+yf'_y=f$", "$f'_x+f'_y=kf$", "$xf'_x\\cdot yf'_y=kf$"],
      explanation: "Relasjonen gjelder for enhver funksjon homogen av grad $k$. Varianten med $f$ i stedet for $kf$ på høyresiden er spesialtilfellet $k=1$, som er riktig bare da.",
    },
    {
      question: "$f$ er konveks. Hvor ligger den lineære approksimasjonen?",
      options: ["Under den sanne verdien", "Over den sanne verdien", "Nøyaktig på kurven", "Over til venstre, under til høyre"],
      explanation: "En konveks funksjon ligger over alle sine tangenter, og approksimasjonen ER tangenten. Det gjelder i begge retninger fra punktet, ikke bare den ene.",
    },
    {
      question: "Hva betyr det at nivåkurvens helning er uendret langs en stråle fra origo?",
      options: ["At $F$ er homogen", "At $F$ er lineær", "At $F$ er konveks", "At $F'_y$ er konstant"],
      explanation: "Begge partiellderiverte har da grad $k-1$, og faktoren $t^{k-1}$ forkortes bort i brøken. Det er samme grunn til at faktorforholdet i kostnadsminimering er uavhengig av produksjonskravet.",
    },
  ],
  'econ1100-11-2': [
    {
      question: "Hvor mange minutter bør du sette av til Oppgave 2 i et 100-poengs sett?",
      options: ["Rundt 45", "Rundt 20", "Rundt 60", "Rundt 30"],
      explanation: "Oppgave 2 er verdt 25 poeng av 100, altså en firedel av de 180 minuttene. Den er dessuten den eneste der en riktig konklusjon uten begrunnelse gir null.",
    },
    {
      question: "Hvilken metode kreves for å derivere $g(x)=x^{3x}$?",
      options: ["Logaritmisk derivasjon", "Potensregelen brukt direkte", "Eksponentialregelen brukt direkte", "Kvotientregelen for brøker"],
      explanation: "Både grunntall og eksponent inneholder $x$, så verken potens- eller eksponentialregelen gjelder alene. Å ta logaritmen først gjør uttrykket til et produkt.",
    },
    {
      question: "Hva må stå i sluttsvaret på en multivariabel kjerneregeloppgave?",
      options: ["De opprinnelige variablene", "Den indre funksjonen $u$ alene", "Bare den ytre deriverte", "Et rent numerisk svar"],
      explanation: "Tilbakesubstitusjon er eksplisitt krav — å la $u$ stå igjen er feil #5. Skriv $F'(x^{2}y^{3})$, ikke $F'(u)$.",
    },
    {
      question: "Hva er tangeringsbetingelsen i $\\max\\ 2\\ln x+\\ln y$ under $4x+2y=36$?",
      options: ["$\\dfrac{2y}{x}=2$", "$\\dfrac{y}{2x}=2$", "$\\dfrac{2x}{y}=2$", "$\\dfrac{2y}{x}=\\dfrac12$"],
      explanation: "Deling av de to førsteordensbetingelsene gir $\\tfrac{2/x}{1/y}$ lik prisforholdet $\\tfrac42$. Løsningen blir $y=x$, og innsatt i budsjettet gir det $x^*=y^*=6$.",
    },
    {
      question: "Hvordan begrunnes et globalt randminimum riktig?",
      options: ["Definisjonsområdet og fortegnet på $f'$", "Innsetting av flere tallverdier", "Utregning av $f''$ i randpunktet", "At $f'=0$ i randpunktet"],
      explanation: "Innsetting av tallverdier «beviser» ingenting og er feil #1 — den gir bare delvis uttelling. At $f'=0$ på randen er dessuten ikke nødvendig for et randminimum.",
    },
  ],
  'econ1100-11-3': [
    {
      question: "$f(x,y)=x^{3}-3x+y^{2}$. Hvor mange stasjonære punkter har $f$?",
      options: ["To", "Ett", "Tre", "Ingen"],
      explanation: "$f'_y=2y=0$ gir $y=0$, og $f'_x=3x^{2}-3=0$ gir $x=\\pm 1$. Å bare oppgi den positive roten er den vanligste feilen i denne oppgavetypen.",
    },
    {
      question: "Hva betyr $D<0$ i Hesse-klassifiseringen?",
      options: ["Sadelpunkt", "Lokalt minimum", "Lokalt maksimum", "Ingen konklusjon"],
      explanation: "Negativ determinant gir sadelpunkt uansett fortegn på $f''_{xx}$, så den trenger ikke sjekkes. Det er $D=0$ som gir ingen konklusjon.",
    },
    {
      question: "Hva er $\\mathrm{El}_x f$ for $f(x)=\\left(3x^{2}\\right)^{4}$?",
      options: ["$8$", "$4$", "$2$", "$12$"],
      explanation: "Skrevet om er $f=81x^{8}$, så elastisiteten er eksponenten. Kjerneregelen gir samme svar: $\\mathrm{El}_u g\\cdot\\mathrm{El}_x u=4\\cdot 2$.",
    },
    {
      question: "Hva er $\\lambda$ i et kostnadsminimeringsproblem?",
      options: ["Grensekostnaden $dC/d\\bar Y$", "Kostnadsandelen til kapital", "Grenseproduktet av arbeid", "Prisforholdet $r/w$ i optimum"],
      explanation: "Multiplikatoren er skyggeprisen på produksjonskravet — hva én enhet mer koster. Samme omhyllingslogikk som grensenytten av inntekt i konsumentproblemet.",
    },
    {
      question: "Etterspørselen har $\\mathrm{El}_p x=-1{,}5$. Hva skjer med omsetningen når prisen stiger?",
      options: ["Den faller", "Den stiger", "Den er uendret", "Det avhenger av prisnivået"],
      explanation: "Omsetningens elastisitet er $1+\\mathrm{El}_p x=-0{,}5$, altså negativ. Mengden faller mer i prosent enn prisen stiger, så nedgangen i mengde dominerer.",
    },
  ],
  'econ1100-11-4': [
    {
      question: "$F(K,L)=\\left(K^{1/3}+L^{1/3}\\right)^{3}$. Hva er $\\sigma$?",
      options: ["$-\\tfrac32$", "$-\\tfrac23$", "$\\tfrac32$", "$-3$"],
      explanation: "Her er $\\gamma=\\tfrac13$, og $1/(\\gamma-1)=1/(-\\tfrac23)$. Alternativet $-\\tfrac23$ setter inn nevneren uten å snu brøken.",
    },
    {
      question: "Hvorfor er $K/L$ uavhengig av $\\bar Y$ for CES-teknologi?",
      options: ["Kravet inngår ikke i betingelsen", "Fordi $\\alpha$ alltid er lik 1", "Fordi kostnaden er homogen av grad 1", "Fordi isokvantene er rette linjer"],
      explanation: "Betingelsen $(K/L)^{\\gamma-1}=r/w$ inneholder bare priser og $\\gamma$. Skalaparameteren og hele parentesen forkortes bort når grenseproduktene deles.",
    },
    {
      question: "$F(K,L)=K^{0{,}3}L^{0{,}5}$. Hva skjer ved dobling av begge faktorer?",
      options: ["Produksjonen ganges med $2^{0{,}8}$", "Produksjonen dobles nøyaktig", "Produksjonen ganges med $1{,}6$", "Produksjonen blir firedoblet"],
      explanation: "Homogenitetsgraden er $0{,}3+0{,}5=0{,}8$, og faktoren er $2^{k}\\approx 1{,}74$. Alternativet $1{,}6$ bruker $2k$, som er den vanligste tallfeilen her.",
    },
    {
      question: "Hva sier Eulers relasjon for en produktfunksjon homogen av grad $k$?",
      options: ["$K F'_K+L F'_L=kF$", "$K F'_K+L F'_L=F$", "$F'_K+F'_L=kF$", "$K F'_K\\cdot L F'_L=kF$"],
      explanation: "Varianten $K F'_K+L F'_L=F$, uten $k$ på høyresiden, er spesialtilfellet $k=1$, som er riktig bare ved konstant skalautbytte. Da fordeles hele produktet på faktorene etter grenseprodukt.",
    },
    {
      question: "Hvordan begrunnes symmetri i et $n$-variabelproblem med like priser?",
      options: ["Alle FOB har samme form", "Ved å prøve seg fram med tallverdier", "Med andreordensbetingelse under bibetingelse", "Fordi nyttefunksjonen er konkav"],
      explanation: "Hver betingelse gir $x_i=1/(\\lambda p)$, et uttrykk uten indeks. Andreordensbetingelse under bibetingelse er dessuten ikke pensum og skal aldri brukes.",
    },
  ],
  'econ1100-2-1': [
    {
      question: "Hva er definisjonen av elastisitet?",
      options: ["$\\mathrm{El}_x f=\\frac{x}{f}f'(x)$", "$\\mathrm{El}_x f=\\frac{f}{x}f'(x)$", "$\\mathrm{El}_x f=f'(x)$", "$\\mathrm{El}_x f=\\frac{x}{f'(x)}$"],
      explanation: "Den deriverte skaleres med forholdet $x/f$, og det er skaleringen som gjør tallet enhetsløst. Svaret $\\mathrm{El}_x f=f'(x)$ er den vanligste feilen: å stoppe ved den deriverte.",
    },
    {
      question: "Hva er $\\mathrm{El}_x(5x^{3})$?",
      options: ["$3$", "$15$", "$5$", "$15x^{2}$"],
      explanation: "Potensregelen gir eksponenten, og konstanten stryker seg mot seg selv i brøken. Tallet $15$ blander sammen konstanten og eksponenten.",
    },
    {
      question: "Hva er $\\mathrm{El}_x f$ når $f(x)=\\frac{3}{x^{2}}$?",
      options: ["$-2$", "$2$", "$-3$", "$-6$"],
      explanation: "Skrevet om er $f=3x^{-2}$, så eksponenten er $-2$. Fortegnet er negativt fordi funksjonen avtar.",
    },
    {
      question: "Hva er $\\mathrm{El}_x(f\\cdot g)$?",
      options: ["$\\mathrm{El}_x f+\\mathrm{El}_x g$", "$\\mathrm{El}_x f\\cdot\\mathrm{El}_x g$", "$\\mathrm{El}_x f-\\mathrm{El}_x g$", "$f\\,\\mathrm{El}_x g+g\\,\\mathrm{El}_x f$"],
      explanation: "Prosentvise endringer legges sammen ved multiplikasjon, akkurat som logaritmer. Svaret $f\\,\\mathrm{El}_x g+g\\,\\mathrm{El}_x f$ er den vanlige produktregelen for derivasjon, ikke for elastisitet.",
    },
    {
      question: "Hva er $\\mathrm{El}_x(f/g)$?",
      options: ["$\\mathrm{El}_x f-\\mathrm{El}_x g$", "$\\mathrm{El}_x f+\\mathrm{El}_x g$", "$\\mathrm{El}_x f/\\mathrm{El}_x g$", "$-\\mathrm{El}_x f+\\mathrm{El}_x g$"],
      explanation: "Minustegnet er obligatorisk, og rekkefølgen er teller minus nevner. Å bytte om er en av fellene i sant/usant-oppgaven.",
    },
    {
      question: "Finnes det en sumregel $\\mathrm{El}(f+g)=\\mathrm{El}\\,f+\\mathrm{El}\\,g$?",
      options: ["Nei, reglene er multiplikative", "Ja, den følger av produktregelen", "Ja, men bare for potensfunksjoner", "Nei, men differansen virker"],
      explanation: "For $x^{2}+x^{4}$ i $x=1$ blir elastisiteten $3$, mens regelen ville gitt $6$. Summens elastisitet ligger mellom de to, vektet etter leddstørrelse.",
    },
    {
      question: "Hva betyr $\\mathrm{El}_p q=-2$?",
      options: ["Mengden faller to prosent per prosent", "Mengden faller to enheter per krone", "Mengden halveres når prisen dobles", "Mengden faller to kroner per prosent"],
      explanation: "Elastisitet er prosent per prosent og har ingen enhet. Å lese den som enheter per enhet er å forveksle den med den deriverte.",
    },
    {
      question: "Når kalles etterspørselen elastisk?",
      options: ["Når tallverdien er større enn 1", "Når elastisiteten er positiv", "Når tallverdien er mindre enn 1", "Når elastisiteten er null"],
      explanation: "Ved tallverdi over 1 faller mengden mer enn prisen stiger, og omsetningen synker. Under 1 er etterspørselen uelastisk og omsetningen stiger.",
    },
    {
      question: "Har en rett etterspørselslinje konstant elastisitet?",
      options: ["Nei, den varierer med punktet", "Ja, den er alltid $-1$", "Ja, den er lik stigningstallet", "Nei, den er konstant lik null"],
      explanation: "For $q=100-2p$ er elastisiteten $-2/3$ i $p=20$ og $-4$ i $p=40$. Bare potensfunksjoner har konstant elastisitet.",
    },
    {
      question: "Hva er $\\mathrm{El}_K Q$ når $Q=AK^{\\alpha}L^{\\beta}$?",
      options: ["$\\alpha$", "$\\alpha+\\beta$", "$\\alpha A$", "$\\alpha-1$"],
      explanation: "Mht. $K$ er $AL^{\\beta}$ en konstant faktor, så potensregelen gir eksponenten. Summen $\\alpha+\\beta$ er homogenitetsgraden, en annen størrelse.",
    },
    {
      question: "Hva er $\\mathrm{El}_{p_1}x^*$ når $x^*=m/(2p_1)$?",
      options: ["$-1$", "$1$", "$-2$", "$0$"],
      explanation: "Etterspørselen er proporsjonal med $p_1^{-1}$, så eksponenten er $-1$. Det tilsvarer at utgiften $p_1x^*$ er konstant.",
    },
    {
      question: "Hva er $\\mathrm{El}_m x^*$ når $x^*=m/(2p_1)$?",
      options: ["$1$", "$-1$", "$1/2$", "$0$"],
      explanation: "Uttrykket er proporsjonalt med $m$ opphøyd i én, så eksponenten leses av. Dobler du inntekten, dobles kjøpt mengde.",
    },
    {
      question: "Hva er elastisiteten til utgiften $p_1x^*$ mht. $p_1$ når $x^*=m/(2p_1)$?",
      options: ["$0$", "$1$", "$-1$", "$2$"],
      explanation: "Produktregelen gir $1+(-1)=0$, altså at utgiften er konstant. Innsetting bekrefter det: $p_1x^*=m/2$.",
    },
    {
      question: "Hva er $\\mathrm{El}_x f$ når $f$ er en konstant funksjon?",
      options: ["$0$", "$1$", "Udefinert", "Lik konstanten"],
      explanation: "En konstant kan skrives $Cx^{0}$, så eksponenten er null. Det gir mening: en størrelse som ikke endrer seg, har ingen prosentvis respons.",
    },
    {
      question: "Hva er $\\mathrm{El}_x\\big(5x^{3}(x+2)\\big)$?",
      options: ["$3+\\frac{x}{x+2}$", "$3-\\frac{x}{x+2}$", "$15+\\frac{x}{x+2}$", "$3+\\frac{x+2}{x}$"],
      explanation: "Produktregelen gir potensleddet $3$ pluss elastisiteten til $x+2$, som er $x/(x+2)$. Svaret $3-\\frac{x}{x+2}$ bruker kvotientregelen på et produkt.",
    },
    {
      question: "Hvorfor forsvinner konstanten $C$ i potensregelen?",
      options: ["Den stryker seg i brøken $x/f$", "Den deriveres bort", "Den er alltid lik én", "Den inngår ikke i $f'$"],
      explanation: "Regningen gir $\\frac{x}{Cx^{a}}\\cdot Cax^{a-1}$, der $C$ står i både teller og nevner. Elastisitet måler relativ endring og er derfor blind for måleenhet.",
    },
    {
      question: "Hva er den vanligste feilen når elastisitet skal regnes ut?",
      options: ["Å glemme faktoren $x/f$", "Å derivere feil", "Å bruke feil fortegn på $x$", "Å skrive svaret som en brøk"],
      explanation: "Kandidaten regner $f'(x)$ og stopper der, men da mangler skaleringen til prosenter. Svaret får da helt andre enheter enn en elastisitet skal ha.",
    },
    {
      question: "Hva er $\\mathrm{El}_{p_2}x^*$ når $x^*=m/(2p_1)$?",
      options: ["$0$", "$-1$", "$1$", "$-1/2$"],
      explanation: "Prisen $p_2$ står ikke i uttrykket, så elastisiteten er null. Dette er en spesiell egenskap ved logaritmisk Cobb-Douglas-nytte, ikke en generell regel.",
    },
  ],
  'econ1100-2-2': [
    {
      question: "Hva er kjerneregelen for elastisiteter?",
      options: ["$\\mathrm{El}_x f=\\mathrm{El}_u g\\cdot\\mathrm{El}_x u$", "$\\mathrm{El}_x f=\\mathrm{El}_x g\\cdot\\mathrm{El}_x u$", "$\\mathrm{El}_x f=\\mathrm{El}_u g+\\mathrm{El}_x u$", "$\\mathrm{El}_x f=\\mathrm{El}_u g/\\mathrm{El}_x u$"],
      explanation: "Elastisitetene ganges sammen langs kjeden, og den ytre tas mht. $u$. Svaret som legger sammen $\\mathrm{El}_u g$ og $\\mathrm{El}_x u$, forveksler kjerneregelen med produktregelen, der elastisiteter legges sammen.",
    },
    {
      question: "Hvilken variabel tas den ytre elastisiteten med hensyn på?",
      options: ["Den indre funksjonen $u$", "Den opprinnelige variabelen $x$", "Den ytre funksjonen $g$", "Begge deler samtidig"],
      explanation: "Den ytre funksjonen har $u$ som argument, ikke $x$. Å bytte om indeksene er den vanligste feilen i sjangeren.",
    },
    {
      question: "Hvilket steg står utledningen og faller på?",
      options: ["Å gange med $u/u$", "Å derivere to ganger", "Å sette $u=x$", "Å bruke logaritmeregler"],
      explanation: "Multiplikasjon med noe som er lik én gir de $u$-ene som trengs for å bygge to elastisiteter. Uten det grepet lar ikke uttrykket seg gruppere.",
    },
    {
      question: "Hva starter utledningen med?",
      options: ["Definisjonen på elastisitet", "Formelen som skal bevises", "Potensregelen for elastisitet", "Den vanlige kjerneregelen"],
      explanation: "Et bevis om elastisiteter må begynne med hva elastisitet er; resten er omskrivning. Å starte med det som skal vises, er sirkelargumentasjon.",
    },
    {
      question: "Hva er $\\mathrm{El}_x\\big(x^{2}\\big)^{4}$?",
      options: ["$8$", "$6$", "$2$", "$4$"],
      explanation: "Kjerneregelen gir $4\\cdot 2$, og potensregelen på $x^{8}$ bekrefter det. De to veiene må stemme overens.",
    },
    {
      question: "Hva er $\\mathrm{El}_x\\ln\\big(x^{3}\\big)$ for $x>1$?",
      options: ["$1/\\ln x$", "$3/\\ln x$", "$3$", "$1/(3\\ln x)$"],
      explanation: "Kjerneregelen gir $3/\\ln(x^{3})$, som forenkles til $1/\\ln x$. Svaret $3/\\ln x$ har glemt tilbakesubstitusjonen og forenklingen.",
    },
    {
      question: "Hva er $\\mathrm{El}_u g$ når $g(u)=\\ln u$?",
      options: ["$1/\\ln u$", "$1/u$", "$\\ln u$", "$u/\\ln u$"],
      explanation: "Definisjonen gir $\\frac{u}{\\ln u}\\cdot\\frac1u$, der $u$ stryker seg. Svaret $1/u$ er den deriverte, ikke elastisiteten.",
    },
    {
      question: "Hva er $\\mathrm{El}_x\\big(x^{2}+4\\big)$?",
      options: ["$\\frac{2x^{2}}{x^{2}+4}$", "$2$", "$\\frac{2x}{x^{2}+4}$", "$\\frac{x^{2}+4}{2x^{2}}$"],
      explanation: "En sum er ikke en ren potens, så definisjonen må brukes: $\\frac{x}{x^{2}+4}\\cdot 2x$. Å lese av «eksponenten 2» er feil, men uttrykket nærmer seg 2 for store $x$.",
    },
    {
      question: "Hva mangler i svaret $\\mathrm{El}_x f=3/\\ln u$?",
      options: ["Tilbakesubstitusjon", "En faktor $x$", "Et minustegn", "En derivasjon til"],
      explanation: "Sluttsvaret skal stå i den opprinnelige variabelen. Dette er samme krav som i den vanlige kjerneregelen, feilkatalogens #5.",
    },
    {
      question: "Gjelder kjerneregelen bare for potensfunksjoner?",
      options: ["Nei, den gjelder generelt", "Ja, bare for potenser", "Ja, bare når $u$ er en potens", "Nei, bare for logaritmer"],
      explanation: "Utledningen bruker bare definisjonen og den vanlige kjerneregelen. Kravene er deriverbarhet og at $u$ og $g(u)$ ikke er null.",
    },
    {
      question: "Hva er $\\mathrm{El}_x f$ for en kjede med tre ledd?",
      options: ["$\\mathrm{El}_v g\\cdot\\mathrm{El}_u v\\cdot\\mathrm{El}_x u$", "$\\mathrm{El}_v g+\\mathrm{El}_u v+\\mathrm{El}_x u$", "$\\mathrm{El}_x g\\cdot\\mathrm{El}_x v\\cdot\\mathrm{El}_x u$", "$\\mathrm{El}_v g\\cdot\\mathrm{El}_x u$"],
      explanation: "Regelen brukes to ganger etter hverandre, og faktorene ganges sammen. Svaret $\\mathrm{El}_v g\\cdot\\mathrm{El}_x u$ hopper over mellomleddet.",
    },
    {
      question: "Reklame har elastisitet $1/2$ på kjennskap, som har elastisitet $3$ på etterspørsel. Hva er $\\mathrm{El}_R D$?",
      options: ["$1{,}5$", "$3{,}5$", "$6$", "$0{,}5$"],
      explanation: "Kjerneregelen gir $3\\cdot\\frac12$. Svaret $3{,}5$ legger sammen i stedet for å gange, som er produktregelen og ikke kjerneregelen.",
    },
    {
      question: "Hva gir en fire prosents økning når elastisiteten er $1{,}5$?",
      options: ["Omtrent seks prosent", "Omtrent fire prosent", "Omtrent to og en halv prosent", "Nøyaktig seks prosent"],
      explanation: "Anslaget er elastisiteten ganget med prosentendringen, altså $1{,}5\\cdot 4$. Eksakt regning gir $6{,}06$ prosent, så ordet «omtrent» hører med.",
    },
    {
      question: "Hva forventer sensor i en «vis at»-oppgave?",
      options: ["At utledningen føres ut", "At formelen oppgis", "At svaret kontrolleres numerisk", "At det tegnes en figur"],
      explanation: "Ber oppgaven om et bevis, er formelen alene ikke et svar. Regelen er den samme som i sant/usant-oppgaven: begrunnelsen bærer poengene.",
    },
  ],
  'econ1100-3-1': [
    {
      question: "Hva er differensialet til $f(x,y)$ av to variabler?",
      options: ["$df=f'_x\\,dx+f'_y\\,dy$", "$df=f'_x\\,dx$", "$df=f'_x\\,dy+f'_y\\,dx$", "$df=f'_x\\cdot f'_y\\,dx\\,dy$"],
      explanation: "Antall ledd er likt antall variabler, og hver derivert hører sammen med sin egen differensial. Svaret $df=f'_x\\,dx$ utelater $y$-leddet (feil #4), og $df=f'_x\\,dy+f'_y\\,dx$ har byttet om hvilken differensial som følger hvilken derivert.",
    },
    {
      question: "La $f(x,y)=x^{2}y$. Hva er $df$?",
      options: ["$2xy\\,dx+x^{2}\\,dy$", "$2xy\\,dx$", "$x^{2}\\,dx+2xy\\,dy$", "$2xy\\,dx+2xy\\,dy$"],
      explanation: "Her er $f'_x=2xy$ og $f'_y=x^{2}$, og begge ledd skal med. Svaret $2xy\\,dx$ alene er nettopp den påstanden eksamen bruker som felle, og $x^{2}\\,dx+2xy\\,dy$ har byttet om de to partiellderiverte.",
    },
    {
      question: "Hva er forskjellen på $df$ og $\\Delta f$?",
      options: ["$df$ følger tangenten, $\\Delta f$ følger kurven", "$df$ er alltid mindre enn $\\Delta f$", "$df$ gjelder to variabler, $\\Delta f$ bare én", "$df$ er eksakt, $\\Delta f$ er en tilnærming"],
      explanation: "$df$ er den lineære tilnærmingen langs tangenten; $\\Delta f$ er den faktiske endringen på funksjonen. Hvilken som er størst avhenger av krumningen, og det er $\\Delta f$ som er den eksakte størrelsen.",
    },
    {
      question: "Hvorfor er påstanden «$df=2xy\\,dx$» usann for $f(x,y)=x^{2}y$?",
      options: ["Fordi leddet $x^{2}\\,dy$ mangler helt", "Fordi $f'_x$ er regnet ut feil i uttrykket", "Fordi $dx$ skulle vært erstattet med $\\Delta x$", "Fordi differensialet aldri kan ha bare positive ledd"],
      explanation: "Den partiellderiverte $f'_x=2xy$ er riktig, men bidraget fra $y$ er utelatt — feil #4. Uttrykket stemmer bare i spesialtilfellet $dy=0$, og det står ingenting om i påstanden.",
    },
    {
      question: "Hva gir null poeng på et sant/usant-punkt om differensialer?",
      options: ["Å svare «usant» uten å vise noen utregning", "Å regne ut differensialet med én liten regnefeil", "Å skrive svaret på en annen, men ekvivalent form", "Å bygge videre på et galt mellomresultat fra forrige punkt"],
      explanation: "Ber oppgaven om begrunnelse, er selve begrunnelsen poengbæreren, og et bart ja eller nei gir null. Små regnefeil, ekvivalente former og følgefeil straffes derimot lite eller ikke.",
    },
    {
      question: "Hva er $d(\\ln u)$ når $u$ er et uttrykk i $x$ og $y$?",
      options: ["$\\dfrac{du}{u}$", "$\\dfrac{1}{u}$", "$u\\,du$", "$\\dfrac{du}{u^{2}}$"],
      explanation: "Regelen $g'/g$ blir til $du/u$ på differensialform. Svaret $\\frac{1}{u}$ glemmer differensialet til innmaten, som er nøyaktig samme felle som å glemme kjerneregelen.",
    },
    {
      question: "La $f(x,y)=e^{xy}$. Hva er $df$?",
      options: ["$e^{xy}\\big(y\\,dx+x\\,dy\\big)$", "$e^{xy}\\big(dx+dy\\big)$", "$e^{xy}\\,xy\\big(dx+dy\\big)$", "$xy\\,e^{xy-1}\\big(dx+dy\\big)$"],
      explanation: "Regelen $e^{u}\\,du$ med $u=xy$ gir $du=y\\,dx+x\\,dy$. Svaret $e^{xy}(dx+dy)$ glemmer de indre deriverte, og $xy\\,e^{xy-1}(dx+dy)$ bruker potensregelen på en eksponentialfunksjon.",
    },
    {
      question: "Hvor mange ledd har differensialet til $f(x,y,z)$?",
      options: ["Tre — ett per variabel", "To — de to viktigste variablene", "Ett — den samlede endringen", "Seks — ett per variabelpar"],
      explanation: "Mønsteret er ett ledd per variabel, uansett hvor mange det er. Å telle variabler mot ledd er den raskeste kontrollen du har på oppgavetypen.",
    },
    {
      question: "Hva blir differensialet av $F(x,y)$ når du beveger deg langs nivåkurven $F(x,y)=c$?",
      options: ["$dF=0$, siden funksjonsverdien er konstant", "$dF=c$, siden verdien er lik konstanten", "$dF=F'_x\\,dx$, siden $y$ ikke endres", "$dF$ er udefinert langs en nivåkurve"],
      explanation: "Konstant funksjonsverdi betyr null samlet endring, og det gir likningen $F'_x\\,dx+F'_y\\,dy=0$. Nettopp den likningen løses for $dy/dx$ når nivåkurvens helning skal finnes.",
    },
    {
      question: "En bedrift har $Q'_K=16$ og $Q'_L=25$. Hva er $dQ$ når $dK=1$ og $dL=-0{,}5$?",
      options: ["$3{,}5$", "$-3{,}5$", "$28{,}5$", "$41$"],
      explanation: "Regnestykket er $16\\cdot 1+25\\cdot(-0{,}5)=16-12{,}5$. Svaret $28{,}5$ glemmer fortegnet på $dL$, og $41$ legger sammen grenseproduktene uten å gange med skrittene.",
    },
    {
      question: "Hva betyr leddet $f'_x\\,dx$ i differensialet?",
      options: ["Effekten per enhet ganget med antall enheter", "Den totale endringen i funksjonen", "Den prosentvise endringen i variabelen $x$", "Endringen i $x$ når $f$ holdes konstant"],
      explanation: "$f'_x$ er grenseeffekten og $dx$ er hvor mye størrelsen faktisk flytter seg. Den totale endringen krever begge ledd, og prosentvis endring krever at man deler på nivåene.",
    },
    {
      question: "Hva er $df$ for $f(x,y)=\\dfrac{x}{y}$ med $y\\ne 0$?",
      options: ["$\\dfrac{dx}{y}-\\dfrac{x}{y^{2}}\\,dy$", "$\\dfrac{dx}{y}+\\dfrac{x}{y^{2}}\\,dy$", "$\\dfrac{dx}{dy}$", "$\\dfrac{dx-dy}{y^{2}}$"],
      explanation: "Her er $f'_x=1/y$ og $f'_y=-x/y^{2}$, så minusen er innholdet i regnestykket: øker $y$, faller brøken. Svaret med pluss foran $\\frac{x}{y^{2}}\\,dy$ har mistet fortegnet, som er den klassiske kvotientfellen (feil #12).",
    },
    {
      question: "Hva sier den relative formen $df/f$?",
      options: ["Endringen i $f$ som andel av nivået", "Endringen i $f$ målt i samme enhet som $f$", "Hvor mye $f$ endres når $x$ dobles", "Forholdet mellom de to partiellderiverte"],
      explanation: "Å dele på funksjonsverdien gjør endringen enhetsløs og lesbar som prosent. Det er nettopp denne formen som gir broen videre til elastisitet.",
    },
    {
      question: "For $Q=AK^{\\alpha}L^{\\beta}$: hva er $dQ/Q$?",
      options: ["$\\alpha\\,\\dfrac{dK}{K}+\\beta\\,\\dfrac{dL}{L}$", "$\\alpha\\,dK+\\beta\\,dL$", "$\\dfrac{\\alpha}{K}+\\dfrac{\\beta}{L}$", "$(\\alpha+\\beta)\\,\\dfrac{dK+dL}{K+L}$"],
      explanation: "På relativ form er eksponentene selv omregningsfaktorene mellom prosenter. Svaret $\\alpha\\,dK+\\beta\\,dL$ blander absolutt og relativ endring, og $\\frac{\\alpha}{K}+\\frac{\\beta}{L}$ har mistet differensialene helt.",
    },
    {
      question: "Oppgaven sier at en størrelse «faller med $0{,}5$». Hva settes inn?",
      options: ["$dy=-0{,}5$", "$dy=0{,}5$, og minusen legges til i svaret", "$dy=0{,}5$, siden differensialer er positive", "$dy=1/0{,}5$, siden fallet er en brøkdel"],
      explanation: "Differensialene bærer fortegn, og regnestykket gjør resten. Å både sette inn et negativt tall og snu leddet manuelt er en dobbeltbokføring som gir feil svar.",
    },
    {
      question: "Når er $df$ og $\\Delta f$ nøyaktig like store?",
      options: ["Når funksjonen er lineær", "Når skrittene $dx$ og $dy$ er små nok", "Når funksjonen er konveks i punktet", "Når begge partiellderiverte er positive"],
      explanation: "Bare en flate uten krumning følger sin egen tangent eksakt. Små skritt gjør avviket lite, men aldri null, og krumningens fortegn styrer bare retningen på avviket.",
    },
  ],
  'econ1100-3-2': [
    {
      question: "Hva er den lineære approksimasjonen til $f(x,y)$ rundt $(x_0,y_0)$?",
      options: ["$f(x_0,y_0)+f'_x\\,(x-x_0)+f'_y\\,(y-y_0)$", "$f'_x\\,(x-x_0)+f'_y\\,(y-y_0)$", "$f(x_0,y_0)+f'_x\\,(x-x_0)$", "$f(x_0,y_0)+f'_x\\,(y-y_0)+f'_y\\,(x-x_0)$"],
      explanation: "Tre ledd: startverdien og ett bidrag per variabel. Svaret uten leddet $f(x_0,y_0)$ har mistet startverdien og er egentlig differensialet, mens svaret der $f'_x$ ganges med $(y-y_0)$, har byttet om hvilken parentes som følger hvilken derivert.",
    },
    {
      question: "Hva blir den lineære approksimasjonen når du setter inn selve basispunktet?",
      options: ["Nøyaktig $f(x_0,y_0)$", "Null, siden alle ledd forsvinner", "Omtrent $f(x_0,y_0)$, med en liten feil", "Verdien av differensialet $df$ i punktet"],
      explanation: "Begge korreksjonsleddene blir null, og startverdien blir stående. Dette er den raskeste kontrollen på at uttrykket er skrevet riktig, og den avslører uttrykk som mangler startverdien.",
    },
    {
      question: "Hvorfor er «$f(x,y)\\approx 16(x-1)+12(y-2)$» galt når $f(1,2)=8$?",
      options: ["Fordi startverdien 8 mangler i uttrykket", "Fordi koeffisientene 16 og 12 er byttet om", "Fordi parentesene skulle vært $(1-x)$ og $(2-y)$", "Fordi approksimasjonen krever et fjerde kryssledd"],
      explanation: "Uttrykket er differensialet, altså den anslåtte endringen, ikke den anslåtte verdien. Setter du inn basispunktet, gir det 0 i stedet for 8, og feilen er lett å se.",
    },
    {
      question: "En funksjon er konveks i hele området. Hva sier det om anslaget?",
      options: ["Anslaget er for lavt", "Anslaget er for høyt", "Anslaget er eksakt riktig", "Retningen kan ikke avgjøres uten tall"],
      explanation: "Konveksitet betyr at kurven bøyer oppover og tangenten ligger under den. Kurveverdien er dermed større enn tangentverdien, så tilnærmingen underestimerer.",
    },
    {
      question: "Hvordan skal fortegnet på approksimasjonsfeilen begrunnes på eksamen?",
      options: ["Med fortegnet på den andrederiverte", "Ved å regne ut den eksakte verdien og sammenligne", "Ved å prøve to ulike skrittlengder", "Med fortegnet på den førstederiverte i punktet"],
      explanation: "Krumningen bestemmer hvilken side av kurven tangenten ligger på, og det er argumentet sensor ser etter. Å sammenligne med fasiten er ikke et argument, siden fasiten ikke er tilgjengelig på eksamen.",
    },
    {
      question: "Hva er den lineære approksimasjonen til $\\sqrt{x}$ rundt $x_0=25$?",
      options: ["$5+\\tfrac{1}{10}(x-25)$", "$5+\\tfrac{1}{5}(x-25)$", "$5+\\tfrac{1}{10}\\,x$", "$\\tfrac{1}{10}(x-25)$"],
      explanation: "Her er $f(25)=5$ og $f'(25)=1/(2\\cdot 5)=1/10$. Svaret $5+\\tfrac{1}{5}(x-25)$ glemmer faktoren $\\tfrac12$, mens $5+\\tfrac{1}{10}\\,x$ har rotet med parentesen og $\\tfrac{1}{10}(x-25)$ mangler startverdien.",
    },
    {
      question: "Hvordan vokser approksimasjonsfeilen med skrittlengden?",
      options: ["Omtrent med kvadratet av skrittet", "Proporsjonalt med skrittet", "Uavhengig av skrittet", "Omtrent med kvadratroten av skrittet"],
      explanation: "Halveres skrittet, blir feilen omtrent en fjerdedel. Det er derfor metoden er svært god lokalt og raskt blir upålitelig over lange intervaller.",
    },
    {
      question: "Hvilken standardtilnærming gjelder rundt $u=0$?",
      options: ["$\\ln(1+u)\\approx u$", "$\\ln(1+u)\\approx 1+u$", "$\\ln(1+u)\\approx \\tfrac{1}{1+u}$", "$\\ln(1+u)\\approx u-1$"],
      explanation: "Med $f(0)=0$ og $f'(0)=1$ blir approksimasjonen bare $u$. Svaret $\\ln(1+u)\\approx\\tfrac{1}{1+u}$ forveksler funksjonen med sin egen deriverte, mens $1+u$ og $u-1$ har feil startverdi.",
    },
    {
      question: "En konkav nyttefunksjon approksimeres lineært. Hva skjer?",
      options: ["Gevinsten ved en økning overvurderes", "Gevinsten ved en økning undervurderes", "Anslaget treffer eksakt for små skritt", "Fortegnet på anslaget snur"],
      explanation: "Konkavitet betyr avtakende grensenytte, mens tangenten antar konstant grensenytte. Tangenten ligger derfor over kurven, og anslaget blir for høyt.",
    },
    {
      question: "$Q(25,16)=800$, $Q'_K=16$ og $Q'_L=25$. Hva er anslaget for $Q(26\\,;\\,15{,}5)$?",
      options: ["$803{,}5$", "$828{,}5$", "$800$", "$841$"],
      explanation: "Regnestykket er $800+16\\cdot 1+25\\cdot(-0{,}5)$. Svaret $828{,}5$ glemmer fortegnet på endringen i $L$, og $841$ legger sammen alt uten å gange med skrittene.",
    },
    {
      question: "Hva er sammenhengen mellom $df$ og den lineære approksimasjonen?",
      options: ["Approksimasjonen er startverdien pluss $df$", "Approksimasjonen er $df$ delt på startverdien", "De er to navn på nøyaktig samme uttrykk", "$df$ er approksimasjonen målt i prosent"],
      explanation: "$df$ anslår endringen, approksimasjonen anslår den nye verdien. Forskjellen er nettopp startverdien $f(x_0,y_0)$, og å blande dem er den vanligste feilen i sjangeren.",
    },
    {
      question: "Hva skal brukes som basispunkt når oppgaven oppgir $(x_0,y_0)$?",
      options: ["Nøyaktig det oppgitte punktet", "Det nærmeste punktet med pene tall", "Punktet der funksjonen er størst", "Punktet du selv skal anslå verdien i"],
      explanation: "Er basispunktet oppgitt, er det en del av oppgaven og skal brukes. Å velge et penere punkt besvarer en annen oppgave, og å bruke selve målpunktet gir null korreksjon.",
    },
    {
      question: "Påstand: «Tilnærmingen $(1+u)^{1/2}\\approx 1+u/2$ overestimerer for $u>0$.» Hva gjelder?",
      options: ["Sann, siden funksjonen er konkav", "Usann, siden funksjonen er konveks", "Sann, men bare for $u$ over 1", "Usann, siden tilnærmingen alltid treffer eksakt"],
      explanation: "Den andrederiverte er negativ for alle $u>-1$, så kurven bøyer nedover og tangenten ligger over. For $u=0{,}08$ gir formelen 1,04 mot eksakt 1,0392.",
    },
    {
      question: "Hva er $f'_y$ evaluert i basispunktet, i motsetning til generelt?",
      options: ["Et tall, ikke et uttrykk i $x$ og $y$", "Et uttrykk som fortsatt inneholder $x$ og $y$", "Den deriverte av startverdien $f(x_0,y_0)$", "Det samme som $f'_x$ når funksjonen er symmetrisk"],
      explanation: "Koeffisientene i approksimasjonen er faste tall, regnet ut i punktet. Lar man dem stå som uttrykk i $x$ og $y$, er formelen ikke lenger lineær og har mistet poenget.",
    },
    {
      question: "En student anslår $g(20)$ med approksimasjon rundt $x_0=10$. Hva er hovedinnvendingen?",
      options: ["Skrittet er for langt til at anslaget er pålitelig", "Formelen krever at $x$ er mindre enn $x_0$", "Approksimasjonen gjelder bare for to variabler", "Den deriverte kan ikke brukes utenfor basispunktet"],
      explanation: "Metoden er lokal, og feilen vokser omtrent kvadratisk med avstanden. Regnestykket er lovlig, men resultatet har liten verdi over et så langt intervall.",
    },
    {
      question: "Hvorfor er $\\ln(1{,}03)$ så nær $0{,}03$?",
      options: ["Fordi $\\ln(1+u)$ har stigning 1 i $u=0$", "Fordi logaritmen alltid gir prosentvis endring eksakt", "Fordi $\\ln 1=0$ og resten kan ses bort fra", "Fordi 3 prosent er innenfor avrundingsfeilen"],
      explanation: "Med $f(0)=0$ og $f'(0)=1$ er tangenten linjen $y=u$. Sammenfallet er en tilnærming, ikke en identitet: eksakt er $\\ln(1{,}03)=0{,}02956$.",
    },
  ],
  'econ1100-4-1': [
    {
      question: "Hva betyr $f'(x)>0$ på et intervall?",
      options: ["Funksjonen vokser der", "Funksjonen er konveks der", "Funksjonen er positiv der", "Funksjonen har et toppunkt der"],
      explanation: "Fortegnet på førstederiverte gir vekstretningen, ikke krumningen og ikke funksjonsverdien. Konveksitet leses av $f''$, og et toppunkt krever at $f'$ er null.",
    },
    {
      question: "Hva er et stasjonærpunkt?",
      options: ["Et punkt der $f'=0$", "Et punkt der $f=0$", "Et punkt der $f''=0$", "Et punkt der funksjonen skifter fortegn"],
      explanation: "Tangenten er vannrett der den deriverte er null. At $f$ selv er null, betyr at kurven krysser $x$-aksen, og $f''=0$ er kandidat til vendepunkt.",
    },
    {
      question: "Hvorfor kreves en fortegnslinje i drøftingsoppgaven?",
      options: ["Den er selve begrunnelsen sensor krever", "Den erstatter derivasjonen av $f$", "Den gir raskere svar enn innsetting", "Den kreves bare når $f'$ er kvadratisk"],
      explanation: "Intervaller som bare oppgis, gir lite uttelling — det er feil #10. Skjemaet viser hvorfor, og det er metoden som bærer poengene.",
    },
    {
      question: "$f'(x)=3(x+1)(x-3)$. Hvor er $f'$ negativ?",
      options: ["For $-1<x<3$", "For $x<-1$", "For $x>3$", "For $x<-1$ og $x>3$"],
      explanation: "Et andregradsuttrykk med positiv ledende koeffisient er negativt mellom røttene og positivt utenfor. Området $x<-1$ og $x>3$ er nettopp der uttrykket er positivt.",
    },
    {
      question: "Hva betyr det at diskriminanten $b^{2}-4ac$ er negativ?",
      options: ["Uttrykket skifter aldri fortegn", "Uttrykket er negativt overalt", "Uttrykket har to like røtter", "Uttrykket er null i nøyaktig ett punkt"],
      explanation: "Uten reelle nullpunkter finnes det ingen steder å skifte fortegn. Hvilket fortegn det er, avgjøres av $a$, og to like røtter svarer til diskriminant lik null.",
    },
    {
      question: "Kan en funksjon vokse og samtidig være konkav?",
      options: ["Ja, den stiger da saktere og saktere", "Nei, vekst krever positiv andrederivert", "Bare i punkter der $f'=0$", "Bare for lineære funksjoner"],
      explanation: "Kvadratrotfunksjonen har $f'>0$ og $f''<0$ i hele definisjonsområdet. Vekst og krumning er uavhengige egenskaper, og alle fire kombinasjoner forekommer.",
    },
    {
      question: "Hva sier $f''(x)<0$ om funksjonen?",
      options: ["Den er konkav der", "Den avtar der", "Den er negativ der", "Den har et bunnpunkt der"],
      explanation: "Negativ andrederivert betyr at grafen bøyer nedover og at stigningen avtar. Om funksjonen går opp eller ned, avgjøres av $f'$, ikke av $f''$.",
    },
    {
      question: "Hva brukes ABC-formelen til i en drøftingsoppgave?",
      options: ["Å finne nullpunktene til $f'$", "Å finne nullpunktene til $f$", "Å avgjøre om et punkt er et toppunkt", "Å regne ut andrederiverte raskere"],
      explanation: "Den deriverte av en tredjegradsfunksjon er kvadratisk, og røttene blir skillepunktene i skjemaet. Nullpunktene til $f$ selv trengs først når grafen skal skisseres.",
    },
    {
      question: "$\\pi'(x)=-3(x-1)(x-5)$. Hvor vokser overskuddet?",
      options: ["For $1<x<5$", "For $x<1$ og $x>5$", "For $x>5$", "For $x<1$"],
      explanation: "Minus tre snur fortegnet i hele skjemaet, så uttrykket er positivt mellom røttene. Å glemme minusen foran er den vanligste feilen i denne oppgavetypen.",
    },
    {
      question: "$f'(x)=4x^{2}(x-3)$. Hva skjer i $x=0$?",
      options: ["$f'$ er null uten å skifte fortegn", "$f'$ skifter fra positiv til negativ", "$f'$ skifter fra negativ til positiv", "$f'$ er udefinert"],
      explanation: "Faktoren $4x^{2}$ er aldri negativ, så fortegnet styres helt av $(x-3)$. Et nullpunkt der en faktor står i annen potens, gir ingen fortegnsveksling.",
    },
    {
      question: "Hva er den økonomiske lesningen av $f'>0$ og $f''<0$?",
      options: ["Avtakende grenseutbytte", "Stordriftsfordeler som øker med produksjonen", "Fallende total produksjon", "Konstant grenseprodukt"],
      explanation: "Produksjonen øker, men hver ekstra enhet gir mindre enn den forrige. Grenseproduktet er $f'$, og at det faller, er nettopp $f''<0$.",
    },
    {
      question: "Hvor ligger vendepunktet til en tredjegradsfunksjon?",
      options: ["Midt mellom topp- og bunnpunktet", "I det samme punktet som toppunktet", "Der funksjonen krysser $x$-aksen", "I punktet der $f'$ er størst"],
      explanation: "Fordi $f''$ er lineær, ligger nullpunktet dens nøyaktig midt mellom røttene til $f'$. Det er en nyttig kontroll på at skjemaet er riktig regnet.",
    },
    {
      question: "$f(x)=\\ln x-x$. Hva er definisjonsområdet?",
      options: ["$x>0$", "Alle reelle tall", "$x\\ge 0$", "$x>1$"],
      explanation: "Logaritmen er bare definert for positive tall, og null er ikke med. Å oppgi definisjonsområdet først er en billig poengfangst når $\\ln$ eller rot inngår.",
    },
    {
      question: "En funksjon har ingen stasjonærpunkter. Hva følger?",
      options: ["Den er voksende overalt eller avtakende overalt", "Den er konveks i hele definisjonsområdet", "Den har minst ett vendepunkt", "Den kan ikke være deriverbar"],
      explanation: "En kontinuerlig $f'$ kan ikke gå fra positiv til negativ uten å være null underveis. Krumningen sier dette ingenting om.",
    },
    {
      question: "$K''(x)=6(x-4)$ for en kostnadsfunksjon. Hva skjer i $x=4$?",
      options: ["Grensekostnaden slutter å falle og begynner å stige", "Totalkostnaden slutter å stige", "Kostnaden er på sitt laveste", "Bedriften går i balanse"],
      explanation: "Andrederiverte til $K$ er den deriverte av grensekostnaden $K'$, så fortegnsskiftet gjelder $K'$. Totalkostnaden kan godt fortsette å stige gjennom punktet.",
    },
    {
      question: "Hva viser omskrivingen $x^{2}-8x+20=(x-4)^{2}+4$?",
      options: ["At uttrykket er positivt for alle $x$", "At uttrykket har røttene 4 og $-4$", "At uttrykket har minimum i $x=20$", "At uttrykket skifter fortegn i $x=4$"],
      explanation: "Et kvadrat er aldri negativt, så summen er minst 4. Kvadratkomplettering gir dermed fortegnsargumentet på én linje, uten diskriminant.",
    },
    {
      question: "Hvorfor holder det ikke å teste tre tallverdier i $f'$?",
      options: ["Tre tall dekker ikke tre hele intervaller", "Innsetting gir ofte feil fortegn", "Metoden krever minst fem testpunkter", "Tallverdier kan ikke settes inn i en derivert"],
      explanation: "Innsetting er en god kontroll, men ikke et argument — konklusjonen gjelder alle punkter i intervallet. Faktoriseringen er det som dekker hele området.",
    },
    {
      question: "$g(x)=f(x)+cx$ der $f''<0$. Hva gjelder for $g''$?",
      options: ["$g''=f''<0$, uansett $c$", "$g''=f''+c$, så fortegnet avhenger av $c$", "$g''=c$, siden $f''$ forsvinner", "$g''=0$ når $c$ er positiv"],
      explanation: "Et lineært ledd forsvinner ved andregangs derivasjon. Å legge til en rett linje flytter veksten, men rører ikke krumningen.",
    },
  ],
  'econ1100-4-2': [
    {
      question: "Hva vet du om $x=a$ når $f'(a)=0$?",
      options: ["At tangenten er vannrett der", "At funksjonen har et toppunkt der", "At funksjonen har et bunnpunkt der", "At krumningen skifter der"],
      explanation: "Et stasjonærpunkt er en kandidat, ikke en konklusjon. Funksjonen $x^{3}$ har $f'(0)=0$ uten å ha verken topp eller bunn der.",
    },
    {
      question: "$f'(a)=0$ og $f''(a)<0$. Hva følger?",
      options: ["Lokalt maksimum i $a$", "Lokalt minimum i $a$", "Vendepunkt i $a$", "Ingen konklusjon uten mer informasjon"],
      explanation: "Negativ andrederivert betyr konkav kurve, og en vannrett tangent på en nedoverbøyd kurve er en topp. Testen gir bare lokal informasjon, ikke global.",
    },
    {
      question: "$f'(a)=0$ og $f''(a)=0$. Hva følger?",
      options: ["Testen gir ingen konklusjon", "Punktet er ikke et ekstrempunkt", "Punktet er et vendepunkt", "Punktet er et sadelpunkt"],
      explanation: "Testen har ikke svart, og det er ikke det samme som at svaret er nei. Både $x^{3}$ og $x^{4}$ har $f''(0)=0$, med helt ulike konklusjoner.",
    },
    {
      question: "Hvorfor kan $f''(0)=0$ ikke brukes til å avvise minimum for $f(x)=x^{4}$?",
      options: ["Fordi $f''(x)=12x^{2}\\ge 0$ overalt gir global konveksitet", "Fordi $f''$ må regnes ut med kjerneregelen her", "Fordi $x=0$ ikke er et stasjonærpunkt", "Fordi fjerdegradspolynomer ikke har ekstrempunkter"],
      explanation: "Konveksitet i hele definisjonsområdet gir at kurven ligger over den vannrette tangenten, altså globalt minimum. Sensor gir null uttelling for konklusjoner trukket fra $f''(0)=0$.",
    },
    {
      question: "Hva kreves for at $a$ skal være et vendepunkt?",
      options: ["At $f''$ skifter fortegn i $a$", "At $f''(a)=0$, uansett fortegn rundt", "At $f'(a)=0$ og tangenten er vannrett", "At $f$ selv skifter fortegn i punktet $a$"],
      explanation: "Nullpunktet er nødvendig, men ikke tilstrekkelig. For $x^{4}$ er $f''(0)=0$ mens $f''$ er positiv på begge sider, så punktet er ikke et vendepunkt (feil #7).",
    },
    {
      question: "$f'(x)=3x^{2}$. Hva slags punkt er $x=0$?",
      options: ["Stasjonærpunkt uten ekstremverdi", "Lokalt minimum", "Lokalt maksimum", "Punkt der funksjonen er udefinert"],
      explanation: "Den deriverte er positiv på begge sider og bare null i selve punktet, så det er ingen fortegnsveksling. Funksjonen vokser gjennom punktet med en flat hylle.",
    },
    {
      question: "Hva sier førstederiverttesten når $f'$ går fra minus til pluss?",
      options: ["Bunnpunkt", "Toppunkt", "Vendepunkt", "Ingen ekstremverdi"],
      explanation: "Funksjonen faller inn mot punktet og stiger ut igjen, altså er verdien lavest der. Testen virker også når andrederiverttesten gir null.",
    },
    {
      question: "$f''(x)\\ge 0$ for alle $x$ og $f'(a)=0$. Hva følger?",
      options: ["$a$ er et globalt minimum", "$a$ er et lokalt, men ikke globalt minimum", "$a$ er et vendepunkt", "Ingenting, siden $f''(a)$ kan være null"],
      explanation: "En konveks funksjon ligger over alle sine tangenter, og tangenten i et stasjonærpunkt er vannrett. Argumentet virker uansett hva $f''(a)$ er.",
    },
    {
      question: "$f'(x)=12x^{2}(x-1)$. Hva slags punkt er $x=0$?",
      options: ["Stasjonærpunkt uten fortegnsskifte i $f'$", "Lokalt maksimum, siden $f'$ er null der", "Lokalt minimum, siden faktoren er kvadrert", "Punkt der $f'$ ikke er definert i det hele tatt"],
      explanation: "Faktoren $12x^{2}$ er aldri negativ, så fortegnet styres av $(x-1)$, som er negativ på begge sider av null. Funksjonen faller gjennom punktet.",
    },
    {
      question: "Hva er forskjellen på lokalt og globalt ekstrempunkt?",
      options: ["Lokalt gjelder nabopunktene, globalt hele definisjonsområdet", "Lokalt gjelder $f'$, globalt gjelder $f''$", "Lokalt gjelder polynomer, globalt gjelder alle funksjoner", "Lokalt krever at $f''\\ne 0$, globalt at $f''=0$"],
      explanation: "Andrederiverttesten gir bare lokal informasjon. En global konklusjon krever et argument om hele området, som grenseoppførsel eller global krumning.",
    },
    {
      question: "Hvilket argument gir full uttelling for at $x^{4}$ har minimum i null?",
      options: ["At $f''(x)=12x^{2}\\ge 0$ for alle $x$", "At $f''(0)=0$", "At $f(0)$ er mindre enn $f(1)$ og $f(-1)$", "At grafen ser slik ut"],
      explanation: "Global konveksitet dekker hele definisjonsområdet i én linje. Å sette inn noen få tallverdier «beviser» ingenting, og $f''(0)=0$ er nettopp den testen som ikke svarte.",
    },
    {
      question: "Kan et punkt være både stasjonærpunkt og vendepunkt?",
      options: ["Ja, da har grafen en flat hylle", "Nei, de to utelukker hverandre", "Bare hvis funksjonen er et polynom", "Bare hvis $f''$ er konstant"],
      explanation: "Funksjonen $x^{3}$ i null har begge deler: vannrett tangent og fortegnsskifte i $f''$. Kombinasjonen gjentar seg hver gang $f'$ har et nullpunkt uten fortegnsveksling.",
    },
    {
      question: "$f(x)=x^{4}-2x^{2}+3$. Hvor mange globale minimumspunkter har den?",
      options: ["To, i $x=-1$ og $x=1$", "Ett, i $x=0$", "Ett, i $x=1$", "Ingen, siden funksjonen vokser uten grense"],
      explanation: "Omskrivingen $(x^{2}-1)^{2}+2$ viser at verdien er minst 2, med likhet nøyaktig når $x^{2}=1$. Punktet $x=0$ er et lokalt maksimum, ikke et minimum.",
    },
    {
      question: "Hva varsler en kvadrert faktor i $f'$?",
      options: ["At $f''$ blir null i det nullpunktet", "At funksjonen har to ekstrempunkter der", "At $f'$ skifter fortegn to ganger der", "At funksjonen er udefinert der"],
      explanation: "En dobbel rot i $f'$ gir både $f'=0$ og $f''=0$ i samme punkt, så testen vil svikte. Faktoren er aldri negativ, så fortegnet skifter heller ikke der.",
    },
    {
      question: "Hvilken slutning er gyldig?",
      options: ["Ekstrempunkt i det indre gir stasjonærpunkt", "Stasjonærpunkt medfører alltid ekstrempunkt", "Vendepunkt medfører stasjonærpunkt", "Stasjonærpunkt medfører vendepunkt"],
      explanation: "Pilen går bare én vei: en topp eller bunn i det indre må ha vannrett tangent. Motsatt vei finnes motsvar, som $x^{3}$ i null.",
    },
    {
      question: "$f(x)=3x^{4}-4x^{3}$ har $f''(0)=0$. Hva er $x=0$?",
      options: ["Stasjonærpunkt uten ekstremverdi, og vendepunkt", "Globalt minimum for hele funksjonen", "Lokalt maksimum med konkav krumning rundt", "Verken stasjonærpunkt eller vendepunkt her"],
      explanation: "Her er $f'(x)=12x^{2}(x-1)$ negativ på begge sider, så det er ingen ekstremverdi. Men $f''=12x(3x-2)$ skifter fortegn i null, så punktet er et vendepunkt.",
    },
    {
      question: "Hvorfor er $(0,3)$ bare et lokalt maksimum for $f(x)=x^{4}-2x^{2}+3$?",
      options: ["Fordi funksjonen vokser uten grense utover", "Fordi $f''(0)$ er null", "Fordi punktet ligger på $y$-aksen", "Fordi det finnes to bunnpunkter i nærheten"],
      explanation: "Et fjerdegradspolynom med positiv ledende koeffisient går mot uendelig i begge retninger, så det finnes høyere verdier lenger ute. Andrederiverttesten sier ingenting om dette.",
    },
    {
      question: "Hva er den korrekte reaksjonen på $f''(a)=0$ i et stasjonærpunkt?",
      options: ["Bytte til førstederiverttesten eller global krumning", "Konkludere at punktet ikke er et ekstrempunkt", "Konkludere at punktet er et vendepunkt", "Regne ut $f'''(a)$ og bruke fortegnet der"],
      explanation: "Testen har ikke svart, så metoden må byttes. Både førstederiverttesten og global krumning er fullgode veier videre og gir full uttelling.",
    },
  ],
  'econ1100-4-3': [
    {
      question: "Hva er definisjonsområdet til $f(x)=\\ln(x-2)$?",
      options: ["$x>2$", "$x\\ge 2$", "$x>0$", "$x\\ne 2$"],
      explanation: "Logaritmen krever strengt positivt argument, altså $x-2>0$. Ulikheten er streng, så randpunktet 2 er ikke med i området.",
    },
    {
      question: "Hvorfor gir det bare delvis uttelling å sette inn tallverdier?",
      options: ["Fordi noen få punkter ikke dekker hele området", "Fordi innsetting nesten alltid gir gale svar her", "Fordi sensor krever utregning med kalkulator", "Fordi funksjonsverdier ikke kan sammenlignes"],
      explanation: "Et globalt ekstrempunkt er en påstand om uendelig mange punkter, og tre tall sier ingenting om resten. Dette er feil #1 i bokas feilregister.",
    },
    {
      question: "Hva består randargumentet av?",
      options: ["Endepunktet i området pluss fortegnet på $f'$", "Funksjonsverdiene i tre punkter du velger selv", "Andrederiverte satt inn i selve randpunktet", "Grafen tegnet med riktig krumning og retning"],
      explanation: "Fortegnspåstanden dekker hele området på én linje, og det er derfor argumentet er et bevis. Andrederiverte sier ingenting om randen.",
    },
    {
      question: "$f(x)=\\sqrt{x}$ på $[0,\\infty)$. Hvorfor er $x=0$ et globalt minimum?",
      options: ["Fordi $f'>0$ for alle $x>0$ og 0 er første punkt", "Fordi $f'(0)=0$ og tangenten dermed er vannrett", "Fordi $f(0)$ er mindre enn både $f(1)$ og $f(4)$", "Fordi funksjonen er konkav i hele definisjonsområdet"],
      explanation: "Funksjonen vokser fra venstre kant og utover, så ingen verdi kan være lavere. Den deriverte er ikke engang definert i null, og konkaviteten er irrelevant her.",
    },
    {
      question: "Hvor kan et globalt ekstrempunkt ligge?",
      options: ["I stasjonærpunkter, på randen, eller der $f'$ mangler", "Bare i de punktene der den deriverte er lik null", "Bare på randen av selve definisjonsområdet til $f$", "Bare i punkter der $f''$ skifter fortegn underveis"],
      explanation: "Alle tre gruppene må sjekkes. Å lete bare etter stasjonærpunkter er den vanligste grunnen til at randløsninger overses (feil #6).",
    },
    {
      question: "Er $x=0$ en kandidat til ekstrempunkt for $f(x)=x-\\ln x$ på $(0,\\infty)$?",
      options: ["Nei, funksjonen er ikke definert der", "Ja, siden verdiene går mot uendelig der", "Ja, det er jo randpunktet i området", "Nei, siden $f'(0)$ er negativ der"],
      explanation: "Området er åpent i null, så funksjonen har ingen verdi der og punktet kan ikke være et ekstrempunkt. At verdiene stiger i nærheten, endrer ikke dette.",
    },
    {
      question: "Hva garanterer en kontinuerlig funksjon på $[a,b]$?",
      options: ["Både globalt maksimum og globalt minimum finnes", "At det finnes minst ett stasjonærpunkt i det indre", "At funksjonen er monoton på hele intervallet", "At begge ekstremverdiene ligger på randen"],
      explanation: "Resultatet krever både at intervallet er lukket og at det er begrenset. Det sier at ekstremverdiene finnes, ikke hvor de ligger.",
    },
    {
      question: "$\\pi'(x)=3(x-1)(x+1)$ på $[0,3]$. Hvilke røtter er kandidater?",
      options: ["Bare $x=1$", "Både $x=1$ og $x=-1$", "Bare $x=-1$", "Ingen, siden $\\pi'$ ikke er null i randpunktene"],
      explanation: "Roten $x=-1$ ligger utenfor det oppgitte intervallet og skal forkastes. Samme disiplin kreves i Lagrange-oppgavene, der det har feilkode #11.",
    },
    {
      question: "Når er sammenligning av funksjonsverdier et gyldig argument?",
      options: ["På et lukket område med komplett kandidatliste", "Alltid, så lenge alle utregningene er riktige", "Bare når funksjonen er et polynom av lav grad", "Aldri — det er alltid feil #1 i feilregisteret"],
      explanation: "Med alle stasjonærpunkter og begge endepunkter på listen er sammenligningen en avslutning, ikke et bevisforsøk. Forskjellen ligger i om listen er komplett.",
    },
    {
      question: "Hva er en hjørneløsning i økonomisk språk?",
      options: ["Alt brukes på ett gode og null på det andre", "Optimum ligger et sted midt inne i budsjettet", "Bedriften går akkurat i balanse ved optimum", "Grensenytten er lik null i optimumspunktet"],
      explanation: "Aktøren presses helt ut til kanten av det mulige. Matematisk er det samme sak som randløsningen: optimum ligger der området slutter.",
    },
    {
      question: "$f(x)=\\sqrt{9-x}$. Er $x=9$ med i definisjonsområdet?",
      options: ["Ja, roten er definert når argumentet er null", "Nei, roten krever et strengt positivt argument", "Nei, funksjonen går mot uendelig i det punktet", "Ja, men bare hvis $f'$ også er definert der"],
      explanation: "Kravet er $9-x\\ge 0$, altså $x\\le 9$ med likhet tillatt. Punktet er derfor et ekte randpunkt og kan være et ekstrempunkt.",
    },
    {
      question: "$f'(x)<0$ for alle $x>0$ på $[0,\\infty)$. Hva følger?",
      options: ["$x=0$ er et globalt maksimum", "$x=0$ er et globalt minimum", "Funksjonen har ingen ekstrempunkter", "Minimum ligger et stykke ute til høyre"],
      explanation: "Funksjonen avtar fra venstre kant og utover, så ingen verdi kan være høyere enn $f(0)$. Noe globalt minimum finnes derimot ikke, siden funksjonen fortsetter å falle.",
    },
    {
      question: "Hva er første steg i enhver funksjonsdrøfting?",
      options: ["Å bestemme definisjonsområdet", "Å derivere funksjonen to ganger", "Å sette den deriverte lik null", "Å tegne en skisse av grafen"],
      explanation: "Uten området vet du ikke hvor du skal lete, og du risikerer svar som ligger utenfor. Å hoppe over dette steget er feil #6.",
    },
    {
      question: "$\\pi(x)=8\\ln x-2x$ for $x>0$ har $\\pi'(4)=0$. Hvilket argument viser globalt maksimum?",
      options: ["At $\\pi''(x)=-8/x^{2}<0$ i hele området", "At $\\pi(4)$ overgår $\\pi(1)$ og $\\pi(10)$", "At $\\pi'(4)=0$, så punktet er stasjonært", "At $\\pi$ er definert for alle positive $x$"],
      explanation: "Global konkavitet gjør ethvert stasjonærpunkt til et globalt maksimum. Sammenligning av tre verdier dekker bare tre punkter, og et stasjonærpunkt alene sier ingenting.",
    },
    {
      question: "Kan et globalt minimum ligge der $f'$ ikke er definert?",
      options: ["Ja, det er en egen kandidatgruppe", "Nei, ekstrempunkter krever deriverbarhet", "Bare hvis funksjonen er kontinuerlig der", "Bare på områder som ikke er begrenset"],
      explanation: "For $\\sqrt{x}$ i null er den deriverte udefinert, og likevel ligger minimum nettopp der. Kandidatlisten har derfor tre grupper, ikke to.",
    },
    {
      question: "Hvorfor er «$f$ vokser fra $x=0$» et sterkere argument enn tre innsatte verdier?",
      options: ["Fordi fortegnet gjelder alle punkter i området", "Fordi argumentet er langt kortere å skrive ned", "Fordi det bruker den andrederiverte i stedet", "Fordi man da slipper å derivere funksjonen selv"],
      explanation: "Én utregnet fortegnspåstand dekker uendelig mange punkter, mens innsetting dekker like mange som antall tall. Forskjellen er metodisk, ikke et spørsmål om grundighet.",
    },
  ],
  'econ1100-4-4': [
    {
      question: "Hva er stigningstallet til tangentlinjen i $x_1$?",
      options: ["$f'(x_1)$", "$f(x_1)$", "$f''(x_1)$", "$f(x_1)/x_1$"],
      explanation: "Funksjonsverdien gir høyden på tangenten, den deriverte gir hellingen. Å bytte om de to er den vanligste enkeltfeilen i dette delpunktet.",
    },
    {
      question: "Hva vektlegger sensor mest ved en skisse?",
      options: ["At den stemmer med dine egne utregninger", "At den er tegnet nøyaktig etter målestokk", "At alle desimaler er riktig avsatt", "At den er tegnet med linjal og passer"],
      explanation: "Konsistens med fortegnsskjemaet er det som gir uttelling, ikke tegneferdighet. En grov skisse som stemmer, slår en pen skisse som ikke gjør det.",
    },
    {
      question: "Hva betyr et dobbelt nullpunkt for grafen?",
      options: ["Grafen berører aksen uten å krysse", "Grafen krysser aksen to ganger", "Grafen har et vendepunkt der", "Grafen er udefinert i punktet"],
      explanation: "Faktoren i annen potens er positiv på begge sider, så funksjonen skifter ikke fortegn. Kurven kommer ned til aksen og snur.",
    },
    {
      question: "Grafen til $f'$ ligger under $x$-aksen. Hva følger for $f$?",
      options: ["$f$ avtar der", "$f$ er negativ der", "$f$ er konkav der", "$f$ har et bunnpunkt der"],
      explanation: "Posisjonen til $f'$-kurven gir vekstretningen til $f$. Funksjonsverdiene til $f$ kan ikke leses ut av grafen til den deriverte i det hele tatt.",
    },
    {
      question: "Grafen til $f'$ har et bunnpunkt i $x=1$. Hva har $f$ der?",
      options: ["Et vendepunkt", "Et bunnpunkt", "Et toppunkt", "Et nullpunkt"],
      explanation: "Bunnpunkt på $f'$-kurven betyr at $f''$ skifter fra negativ til positiv, altså at krumningen snur. Et bunnpunkt for $f$ krever derimot at $f'$ krysser aksen.",
    },
    {
      question: "Hvordan kontrollerer du en tangentlikning?",
      options: ["Sett $x=x_1$ inn og se om du får $f(x_1)$", "Deriver tangentlikningen og sammenlign med $f$", "Sjekk at stigningstallet er positivt", "Se om linja krysser $x$-aksen ett sted"],
      explanation: "Tangenten berører grafen i berøringspunktet, så verdiene må stemme der. Kontrollen tar fem sekunder og fanger både fortegnsfeil og forveksling av $f$ og $f'$.",
    },
    {
      question: "Hva er nullpunktene til $f(x)=x^{3}-3x^{2}$?",
      options: ["$x=0$ og $x=3$", "$x=0$ og $x=2$", "$x=3$ alene", "$x=-3$ og $x=3$"],
      explanation: "Faktoriseringen $x^{2}(x-3)$ gir de to røttene, der null er dobbel. Punktene 0 og 2 er derimot stasjonærpunktene, som kommer fra $f'$.",
    },
    {
      question: "Hva er tangentlinjen til $f(x)=x^{3}-3x^{2}$ i $x=3$?",
      options: ["$y=9x-27$", "$y=9x$", "$y=0$", "$y=27x-9$"],
      explanation: "Her er $f(3)=0$ og $f'(3)=27-18=9$, satt inn i punktformelen. Svaret $y=0$ kommer av å bruke funksjonsverdien som stigningstall.",
    },
    {
      question: "Hvor ligger vendepunktet til en tredjegradsfunksjon?",
      options: ["Midt mellom topp- og bunnpunktet", "I samme punkt som toppunktet", "Der grafen krysser $y$-aksen", "Midt mellom de to ytterste nullpunktene"],
      explanation: "Fordi $f''$ er lineær, ligger nullpunktet dens midt mellom røttene til $f'$. Det er en rask kontroll på at skjemaet er riktig regnet.",
    },
    {
      question: "To funksjoner har samme deriverte. Hva skiller dem?",
      options: ["Bare et konstantledd", "Vekstintervallene sine", "Krumningen sin", "Antall ekstrempunkter"],
      explanation: "Formen ligger fast, men den loddrette plasseringen gjør det ikke. Derfor kan funksjonsverdier aldri leses ut av en graf over den deriverte.",
    },
    {
      question: "Hva er tangentlinjen i et stasjonærpunkt?",
      options: ["En vannrett linje", "En loddrett linje", "En linje med stigningstall 1", "En linje gjennom origo"],
      explanation: "Stigningstallet er $f'(a)=0$, så linja er $y=f(a)$. Det er nettopp innholdet i ordet stasjonær: funksjonen står stille der.",
    },
    {
      question: "$f'$-kurven krysser $x$-aksen fra positiv til negativ. Hva har $f$?",
      options: ["Et toppunkt", "Et bunnpunkt", "Et vendepunkt", "En loddrett tangent"],
      explanation: "Funksjonen stiger inn mot punktet og faller ut igjen, altså er verdien høyest der. Det er førstederiverttesten lest av en graf.",
    },
    {
      question: "Hva skal gjøres først når nullpunktene til et polynom skal finnes?",
      options: ["Se etter en felles faktor", "Bruke ABC på hele uttrykket", "Derivere polynomet", "Tegne en skisse av grafen"],
      explanation: "Felles faktor reduserer graden og gir ofte hele svaret uten videre regning. ABC brukes deretter på det som blir igjen.",
    },
    {
      question: "En skisse viser at $f$ vokser på $(0,2)$, men skjemaet ditt sier $f'<0$ der. Hva gjør du?",
      options: ["Finner feilen — skisse og skjema må stemme overens", "Beholder skissen, siden den ser riktigere ut", "Beholder begge og lar sensor velge", "Bytter fortegn i skissen uten å sjekke skjemaet"],
      explanation: "Motstriden betyr at det er en regnefeil et sted, og skissen har dermed gjort deg en tjeneste. En skisse som strider mot egne funn, koster poengene for delpunktet.",
    },
  ],
  'econ1100-4-5': [
    {
      question: "Hva er steg 1 i drøftingsalgoritmen?",
      options: ["Å bestemme definisjonsområdet", "Å derivere funksjonen to ganger", "Å finne alle nullpunktene til $f$", "Å tegne en foreløpig skisse av grafen"],
      explanation: "Uten området vet du ikke hvor du skal lete, og røtter utenfor det må forkastes. Å hoppe over steget er feil #6.",
    },
    {
      question: "Hvilke to steg skiller besvarelsene mest?",
      options: ["Klassifisering og sjekk av randen", "Derivasjon og faktorisering av $f'$", "Skisse og tangentlinje til slutt", "Nullpunkter og definisjonsområdet"],
      explanation: "Nesten alle klarer å derivere og faktorisere. Langt færre håndterer et $f''=0$ riktig eller husker å undersøke randen.",
    },
    {
      question: "Hva varsler en kvadrert faktor i $f'$?",
      options: ["At $f''=0$ der og fortegnet ikke skifter", "At funksjonen har to ekstrempunkter der", "At $f'$ skifter fortegn to ganger i punktet", "At funksjonen ikke er deriverbar i punktet"],
      explanation: "Et dobbelt nullpunkt i $f'$ gir både $f'=0$ og $f''=0$ i samme punkt, så andrederiverttesten svikter. Faktoren er aldri negativ, så fortegnet snur heller ikke.",
    },
    {
      question: "$f'(x)=(x-1)^{2}(x-4)$. Hva er $x=1$?",
      options: ["Stasjonærpunkt uten ekstremverdi", "Lokalt minimum for funksjonen", "Lokalt maksimum for funksjonen", "Et punkt der $f$ er udefinert"],
      explanation: "Faktoren i annen potens er aldri negativ, så $f'$ følger $(x-4)$ og er negativ på begge sider. Uten fortegnsveksling finnes ingen ekstremverdi.",
    },
    {
      question: "Hva gjør du når $f''(a)=0$ i et stasjonærpunkt?",
      options: ["Bytter til fortegnsskifte eller global krumning", "Konkluderer at punktet ikke er noe ekstrempunkt", "Konkluderer at punktet må være et vendepunkt", "Regner ut den tredjederiverte og ser på fortegnet"],
      explanation: "Testen har ikke svart, og det er ikke et svar. Å konkludere fra $f''(a)=0$ er feil #2 og gir null uttelling.",
    },
    {
      question: "Når er sammenligning av funksjonsverdier lovlig?",
      options: ["På lukket område med komplett kandidatliste", "Alltid, så lenge utregningene er riktige", "Bare når funksjonen er et polynom av lav grad", "Aldri — det er alltid feil #1 i registeret"],
      explanation: "Med alle stasjonærpunkter og begge endepunkter på listen er sammenligningen en avslutning, ikke et bevisforsøk. Uten komplett liste er det feil #1.",
    },
    {
      question: "Hvor mange vendepunkter har et tredjegradspolynom?",
      options: ["Nøyaktig ett", "Null eller ett", "Null, ett eller to", "Alltid to"],
      explanation: "Andrederiverte er lineær med stigningstall forskjellig fra null, så den har ett nullpunkt og skifter fortegn der. For fjerdegrad er svaret null, ett eller to.",
    },
    {
      question: "$f$ har like grad og positiv ledende koeffisient. Hva følger?",
      options: ["$f$ har et globalt minimum", "$f$ har et globalt maksimum", "$f$ har både globalt maks og min", "$f$ har verken maks eller min"],
      explanation: "Funksjonen går mot uendelig i begge retninger, så et globalt minimum finnes blant stasjonærpunktene. Noe globalt maksimum finnes derimot ikke.",
    },
    {
      question: "$\\pi'(x)=-3(x-2)(x-6)$. Hvor vokser overskuddet?",
      options: ["For $2<x<6$", "For $x<2$ og $x>6$", "For $x>6$ alene", "For $x<2$ alene"],
      explanation: "Minus tre snur fortegnet i hele skjemaet, så uttrykket er positivt mellom røttene. Å glemme minusen foran er den vanligste feilen i økonomiske drøftinger.",
    },
    {
      question: "Hvordan skal ABC-røtter til $f''$ oppgis i svaret?",
      options: ["Eksakt, som $\\frac{1\\pm\\sqrt7}{3}$", "Med to desimaler, som $1{,}22$", "Avrundet til nærmeste hele tall", "Som intervall rundt hver rot"],
      explanation: "Eksakt form er en del av kravet om åpenbar forenkling. Desimalene er nyttige for å plassere kontrolltall, men de er ikke selve svaret.",
    },
    {
      question: "Hvilke to signaler varsler at oppgaven inneholder en felle?",
      options: ["$\\ln$ eller rot, og en $x^{4}$-type", "Negative koeffisienter og brøkledd", "Store tall og uvanlig mange ledd", "At oppgaven har over fire delpunkter"],
      explanation: "Logaritme og rot varsler definisjonsområde og rand; fjerdegradsledd varsler at andrederiverttesten kan svikte. Begge er signaler du kan lese før du regner.",
    },
    {
      question: "Hvorfor er førstederiverttesten ofte gratis i drillen?",
      options: ["Fordi fortegnsskjemaet allerede står fra steg 2", "Fordi den ikke krever at man deriverer i det hele tatt", "Fordi den bare gjelder for polynomer av lav grad", "Fordi den erstatter sjekken av definisjonsområdet"],
      explanation: "Klassifiseringen kan leses rett av tabellen uten å regne $f''$ i det hele tatt. Andrederiverttesten er raskere når $f''$ allerede er kjent, men den svikter når den gir null.",
    },
  ],
  'econ1100-5-1': [
    {
      question: "Hva er helningen til nivåkurven $F(x,y)=c$?",
      options: ["$y'=-\\dfrac{F'_x}{F'_y}$", "$y'=\\dfrac{F'_x}{F'_y}$", "$y'=-\\dfrac{F'_y}{F'_x}$", "$y'=F'_x\\cdot F'_y$"],
      explanation: "Den frie variabelens deriverte står i telleren, og minustegnet kommer fra at bidragene i $dF$ skal oppheve hverandre. Svaret $y'=\\frac{F'_x}{F'_y}$ mister minusen og snur konklusjonen om kurven stiger eller faller.",
    },
    {
      question: "Hvorfor er $dF=0$ langs en nivåkurve?",
      options: ["Fordi funksjonsverdien holdes konstant der", "Fordi begge partiellderiverte er null der", "Fordi $dx$ og $dy$ begge er null der", "Fordi kurven alltid er en rett linje"],
      explanation: "Nivåkurven er definert ved $F(x,y)=c$, så verdien endrer seg ikke når vi går langs den. Skrittene $dx$ og $dy$ er derimot ikke null — de er nettopp det vi beveger oss med.",
    },
    {
      question: "Hvilken betingelse kreves for at helningsformelen skal gjelde?",
      options: ["$F'_y\\ne 0$", "$F'_x\\ne 0$", "$F'_x$ og $F'_y$ må ha samme fortegn", "$F$ må være strengt voksende i begge variabler"],
      explanation: "Utledningen deler på $F'_y$, så nevneren kan ikke være null. Er $F'_y=0$, står kurven loddrett og helningen finnes ikke.",
    },
    {
      question: "For $xy=12$ med $x,y>0$: hva er $y'$?",
      options: ["$-\\dfrac{y}{x}$", "$\\dfrac{y}{x}$", "$-\\dfrac{x}{y}$", "$-\\dfrac{1}{x}$"],
      explanation: "Her er $F'_x=y$ og $F'_y=x$, så formelen gir $-y/x$. Svaret $-\\frac{x}{y}$ har byttet om teller og nevner, noe som gir feil tall i alle punkter unntatt på diagonalen.",
    },
    {
      question: "$F'_x>0$ og $F'_y>0$. Hva gjelder for nivåkurven?",
      options: ["Den faller", "Den stiger", "Den er vannrett", "Fortegnet kan ikke avgjøres"],
      explanation: "Positiv teller delt på positiv nevner gir et positivt tall, og minusen foran gjør helningen negativ. Økonomisk: er begge goder ønsket, må mer av det ene kompenseres med mindre av det andre.",
    },
    {
      question: "Hva skjer med et $y$-ledd ved implisitt derivasjon mht. $x$?",
      options: ["Det gir en ekstra faktor $y'$", "Det behandles som en konstant og gir null", "Det gir en ekstra faktor $x'$", "Det deriveres mht. $y$ i stedet"],
      explanation: "Siden $y=y(x)$, krever kjerneregelen faktoren $y'$ hver gang $y$ deriveres. Å behandle $y$ som konstant er den vanligste feilen i metoden.",
    },
    {
      question: "Hva blir $\\dfrac{d}{dx}\\big(y^{2}\\big)$ når $y$ er en funksjon av $x$?",
      options: ["$2y\\,y'$", "$2y$", "$2y'$", "$y^{2}y'$"],
      explanation: "Kjerneregelen på en potens av $y$ gir $2y$ ganget med den indre deriverte $y'$. Svaret $2y$ har glemt faktoren $y'$ og har dermed regnet som om $y$ var den frie variabelen.",
    },
    {
      question: "Hva er en indifferenskurve?",
      options: ["Nivåkurven til en nyttefunksjon", "Nivåkurven til en produktfunksjon", "Linjen som viser konsumentens budsjett", "Kurven der grensenytten er null"],
      explanation: "Alle knipper på samme indifferenskurve gir samme nytte, derav navnet. Nivåkurven til en produktfunksjon heter isokvant, og budsjettlinjen er noe annet igjen.",
    },
    {
      question: "Hva er den marginale substitusjonsraten?",
      options: ["Tallverdien av indifferenskurvens helning", "Forholdet mellom prisene i markedet", "Endringen i nytte når inntekten øker", "Helningen på budsjettlinjen"],
      explanation: "MRS er $U'_x/U'_y$, altså hvor mye av $y$ konsumenten gir fra seg for én enhet $x$. Den sier hva konsumenten selv synes, ikke hva markedet krever.",
    },
    {
      question: "Hva kjennetegner optimum i konsumentens tilpasning?",
      options: ["MRS er lik prisforholdet $p_1/p_2$", "MRS er lik null i optimumspunktet", "Indifferenskurven skjærer budsjettlinjen", "Nyttefunksjonen har et stasjonærpunkt der"],
      explanation: "Konsumentens eget bytteforhold er da lik markedets, og indifferenskurven tangerer budsjettlinjen. En kurve som skjærer budsjettlinjen, kan alltid forbedres ved å flytte seg langs den.",
    },
    {
      question: "For $U=x^{\\alpha}y^{\\beta}$: hva er indifferenskurvens helning?",
      options: ["$-\\dfrac{\\alpha y}{\\beta x}$", "$-\\dfrac{\\beta y}{\\alpha x}$", "$-\\dfrac{\\alpha}{\\beta}$", "$-\\dfrac{\\alpha x}{\\beta y}$"],
      explanation: "Deriverer man begge veier og forkorter potensene, blir eksponentforholdet stående sammen med $y/x$. Svaret $-\\frac{\\beta y}{\\alpha x}$ har byttet om eksponentene, som gir omvendt bytteforhold.",
    },
    {
      question: "Hva skjer med nivåkurvene hvis $F$ erstattes med $F^{3}$?",
      options: ["Kurvene og helningen er uendret", "Kurvene blir tre ganger så bratte", "Kurvene flytter seg utover fra origo", "Helningen blir opphøyd i tredje"],
      explanation: "Faktoren $3F^{2}$ opptrer i både teller og nevner og forkortes bort. Enhver strengt voksende omforming bevarer både kurvene og helningen, bare med nytt navn på nivået.",
    },
    {
      question: "Nivåkurvene til $F(x,y)=2x+3y$ er",
      options: ["Parallelle rette linjer", "Hyperbler i første kvadrant", "Konsentriske sirkler om origo", "Rette linjer som møtes i origo"],
      explanation: "Formelen gir $y'=-2/3$ uansett punkt og nivå, altså samme helning overalt. Ulikt nivå gir bare ulikt konstantledd, ikke ulik retning.",
    },
    {
      question: "En student regner ut helningen i punktet $(2,5)$ på kurven $xy=12$. Hva er problemet?",
      options: ["Punktet ligger ikke på kurven", "Helningen finnes ikke i det punktet", "Formelen krever positive eksponenter", "Kurven har loddrett tangent der"],
      explanation: "Produktet er $10$, ikke $12$, så punktet ligger på en annen nivåkurve. Kontroller alltid at punktet oppfyller likningen før du regner ut noe der.",
    },
    {
      question: "Hvilke to metoder gir helningen, og hvordan vurderer sensor dem?",
      options: ["Formelen og implisitt derivasjon, som likeverdige", "Bare formelen; implisitt derivasjon gir mindre uttelling", "Bare implisitt derivasjon; formelen må utledes hver gang", "Formelen for lineære kurver, implisitt derivasjon ellers"],
      explanation: "Begge veier godtas fullt ut, og de gir alltid samme svar. Formelen er raskest, mens den implisitte veien er den beste uavhengige kontrollen.",
    },
    {
      question: "Ved implisitt derivasjon av $xy+y^{2}=20$ får man",
      options: ["$y+x\\,y'+2y\\,y'=0$", "$y+x\\,y'+2y=0$", "$x\\,y'+2y\\,y'=0$", "$y'+2y\\,y'=0$"],
      explanation: "Leddet $xy$ krever produktregelen og gir $y+xy'$, mens $y^{2}$ gir $2yy'$. Svaret $y+x\\,y'+2y=0$ har glemt faktoren $y'$ på det siste leddet.",
    },
    {
      question: "Kurven $x^{2}+y^{2}=25$ i punktet $(5,0)$ har",
      options: ["Loddrett tangent, så $y'$ finnes ikke", "Vannrett tangent med $y'=0$", "Helning $-1$ som i alle punkter", "To ulike helninger samtidig"],
      explanation: "Der er $F'_y=2y=0$, så nevneren i formelen forsvinner. Kurven vender om i punktet, og $y$ er ikke en funksjon av $x$ i nærheten av det.",
    },
    {
      question: "Hva betyr det at MRS faller når $x$ øker langs kurven?",
      options: ["Bytteforholdet blir mindre gunstig for mer $x$", "Nytten faller når forbruket av $x$ øker", "Kurven skifter fra fallende til stigende", "Prisen på gode $x$ må ha gått opp"],
      explanation: "Med mye $x$ fra før er konsumenten villig til å gi fra seg stadig mindre $y$ for én enhet til. Nytten holder seg konstant langs kurven, og prisene inngår ikke i MRS i det hele tatt.",
    },
  ],
  'econ1100-5-2': [
    {
      question: "Hva er $\\dfrac{d}{dx}\\,y$ langs en nivåkurve?",
      options: ["$y'$, siden $y$ er en funksjon av $x$", "$0$, siden $y$ er en konstant der", "$1$, som for enhver variabel", "$F'_y$, den partiellderiverte"],
      explanation: "På kurven bestemmer $x$ verdien av $y$, så $y$ deriveres til $y'$. Å behandle $y$ som konstant er fagets feil #3, og den koster uttelling selv når fortegnet blir riktig.",
    },
    {
      question: "For $xy=c$ med $x,y>0$: hva er $y''$?",
      options: ["$\\dfrac{2y}{x^{2}}$", "$\\dfrac{y}{x^{2}}$", "$-\\dfrac{y}{x^{2}}$", "$\\dfrac{2}{x^{2}}$"],
      explanation: "Kvotientregelen på $-y/x$ med $y'=-y/x$ satt inn gir $2y/x^{2}$. Svaret $\\frac{y}{x^{2}}$ er nettopp det man får hvis $y$ behandles som en konstant — samme fortegn, men feil metode.",
    },
    {
      question: "Hva betyr $y''>0$ i hele området for en fallende nivåkurve?",
      options: ["Kurven er konveks der", "Kurven er konkav der", "Kurven skifter retning der", "Kurven er en rett linje der"],
      explanation: "Positiv andrederivert betyr at kurven bøyer oppover, med bunnen inn mot origo. En fallende konveks kurve er bratt til venstre og flater ut mot høyre.",
    },
    {
      question: "Hvorfor er feil #3 særlig lumsk?",
      options: ["Den gir ofte riktig fortegn på svaret", "Den gir alltid null som svar", "Den oppdages bare med kalkulator", "Den rammer bare oppgaver med logaritmer"],
      explanation: "For $xy=c$ gir både riktig og gal metode et positivt uttrykk, så konklusjonen «konveks» blir riktig uansett. Men metoden bærer poengene, og sensor ser at $y'$ aldri ble satt inn.",
    },
    {
      question: "Hva må gjøres etter at $y'$ er derivert én gang til?",
      options: ["Sette inn uttrykket for $y'$ og forenkle", "Derivere en tredje gang for kontroll", "Sette inn et konkret punkt med én gang", "Bytte om teller og nevner i brøken"],
      explanation: "Et svar som fremdeles inneholder $y'$, er et mellomresultat, ikke en fasit. Innsettingen er dessuten det som gjør fortegnsdrøftingen mulig, siden $y'$ i seg selv ikke har opplagt fortegn.",
    },
    {
      question: "For nivåkurven $x+\\ln y=3$ er $y'=-y$. Hva er $y''$?",
      options: ["$y$", "$-y$", "$0$", "$-y'$ uten videre forenkling"],
      explanation: "Deriverer man $-y$ mht. $x$, gir det $-y'$, og med $y'=-y$ blir svaret $y$. Svaret $0$ er resultatet hvis $y$ behandles som konstant, og ville betydd at kurven er en rett linje.",
    },
    {
      question: "Hva er $\\dfrac{d}{dx}\\,y^{2}$ langs en nivåkurve?",
      options: ["$2y\\,y'$", "$2y$", "$2y'$", "$y^{2}y'$"],
      explanation: "Kjerneregelen gir $2y$ ganget med den indre deriverte $y'$. Svaret $2y$ glemmer faktoren $y'$ og har dermed regnet som om $y$ var uavhengig av $x$.",
    },
    {
      question: "Kurven $x^{2}+y^{2}=25$ i første kvadrant har $y''=-25/y^{3}$. Hva følger?",
      options: ["Kurven er konkav der", "Kurven er konveks der", "Kurven er en rett linje der", "Krumningen skifter fortegn der"],
      explanation: "For $y>0$ er nevneren positiv, så hele uttrykket er negativt. Sirkelbuen buer utover fra origo — motsatt av indifferenskurvens form.",
    },
    {
      question: "Hva er den økonomiske lesningen av $y''>0$ på en indifferenskurve?",
      options: ["Avtakende marginal substitusjonsrate", "Økende marginal substitusjonsrate", "Konstant nytte langs kurven", "Fallende nytte når $x$ øker"],
      explanation: "At $y'$ vokser fra sterkt negativ mot svakt negativ, betyr at $\\lvert y'\\rvert$ avtar. Konsumenten gir fra seg stadig mindre $y$ for én enhet $x$ til. Nytten er konstant langs kurven uansett krumning.",
    },
    {
      question: "En student regner $y''$ i punktet $(2,3)$, får et positivt tall og konkluderer at kurven er konveks overalt. Hva er galt?",
      options: ["Ett punkt sier ingenting om resten av kurven", "Andrederiverten kan ikke regnes ut i et punkt", "Konveksitet krever at $y'$ også er positiv", "Punktet må ligge på $y$-aksen for at det skal gjelde"],
      explanation: "Krumning er en egenskap ved et område, og fortegnet kan skifte. På $x^{3}+y=c$ er $y''=-6x$, som er positiv til venstre for origo og negativ til høyre.",
    },
    {
      question: "Hvordan forenkles $y''=-\\dfrac{x^{2}+4y^{2}}{16y^{3}}$ på kurven $x^{2}+4y^{2}=25$?",
      options: ["$y''=-\\dfrac{25}{16y^{3}}$", "$y''=-\\dfrac{25}{16y}$", "$y''=-\\dfrac{1}{16y^{3}}$", "$y''=-\\dfrac{x^{2}}{16y^{3}}$"],
      explanation: "Telleren er nøyaktig kurvens venstreside, som er lik 25 der. Grepet gjør fortegnet umiddelbart lesbart og teller som den åpenbare forenklingen sensor krever.",
    },
    {
      question: "Hvilken regel brukes når $y'=-F'_x/F'_y$ skal deriveres videre?",
      options: ["Kvotientregelen, med kjerneregelen inne i den", "Bare produktregelen på teller og nevner", "Bare kjerneregelen på hele brøken", "Potensregelen etter omskriving til én potens"],
      explanation: "Uttrykket er en brøk der begge deler avhenger av $x$ og $y$, så kvotientregelen gjelder. Kjerneregelen kommer i tillegg fordi $y$ selv er en funksjon av $x$.",
    },
    {
      question: "En fallende kurve har $y''<0$. Hvordan ser den ut?",
      options: ["Slak til venstre, brattere mot høyre", "Bratt til venstre, slakere mot høyre", "Like bratt hele veien", "Først fallende, deretter stigende"],
      explanation: "Negativ andrederivert betyr at helningen avtar, altså blir mer negativ mot høyre. Beskrivelsen «bratt til venstre, slakere mot høyre» passer den konvekse kurven, som er standardformen på indifferenskurver.",
    },
    {
      question: "For $x^{2}y^{3}=c$ er $y'=-\\dfrac{2y}{3x}$. Hva er $y''$ i første kvadrant?",
      options: ["$\\dfrac{10y}{9x^{2}}$", "$\\dfrac{2y}{3x^{2}}$", "$-\\dfrac{10y}{9x^{2}}$", "$\\dfrac{4y}{9x^{2}}$"],
      explanation: "Kvotientregelen gir $-\\tfrac23\\cdot\\frac{y'x-y}{x^{2}}$, og med $y'x=-\\tfrac{2y}{3}$ blir telleren $-\\tfrac{5y}{3}$. Resultatet er positivt, altså er kurven konveks der.",
    },
    {
      question: "Hva er den beste kontrollen på et $y''$-svar?",
      options: ["Løse likningen for $y$ og derivere to ganger", "Sjekke at svaret ikke inneholder $y$", "Kontrollere at $y''$ har motsatt fortegn av $y'$", "Se om uttrykket kan skrives uten brøkstrek"],
      explanation: "Den eksplisitte veien er en helt uavhengig regning og avslører både feil #3 og fortegnsfeil. At svaret inneholder $y$ er helt normalt, og fortegnene på $y'$ og $y''$ henger ikke sammen.",
    },
  ],
  'econ1100-6-1': [
    {
      question: "Hva er førsteordensbetingelsene i fri optimering av $f(x,y)$?",
      options: ["$f'_x=0$ og $f'_y=0$", "$f'_x=0$ og $f''_{xx}=0$", "$f'_x=f'_y$ og $f''_{xy}=0$", "$f'_x+f'_y=0$ og $D=0$"],
      explanation: "Begge partiellderiverte må være null samtidig — flaten er da vannrett i begge akseretninger. Svaret $f'_x=f'_y$ blander sammen «like» og «null», en vanlig lesefeil.",
    },
    {
      question: "Hvordan skrives Hesse-determinanten?",
      options: ["$D=f''_{xx}f''_{yy}-(f''_{xy})^2$", "$D=f''_{xx}f''_{yy}+(f''_{xy})^2$", "$D=f''_{xx}f''_{yy}-f''_{xy}$", "$D=f''_{xx}+f''_{yy}-(f''_{xy})^2$"],
      explanation: "Kryssleddet kvadreres og trekkes fra. Svaret med pluss foran kryssleddet har feil fortegn, og $D=f''_{xx}f''_{yy}-f''_{xy}$ har glemt kvadratet — begge er dokumenterte regnefeil i sjangeren.",
    },
    {
      question: "Hva betyr $D<0$ i et stasjonærpunkt?",
      options: ["Punktet er et sadelpunkt", "Punktet er et lokalt maksimum", "Punktet er et lokalt minimum", "Testen gir ikke noe svar"],
      explanation: "Negativ determinant betyr at flaten krummer motsatt vei i to retninger. Da trengs ingen sjekk av $f''_{xx}$ — den er uten betydning når $D<0$.",
    },
    {
      question: "Hva må sjekkes i tillegg når $D>0$?",
      options: ["Fortegnet på $f''_{xx}$", "Fortegnet på $f''_{xy}$", "Om $f'_x$ er større enn $f'_y$", "Om punktet ligger i første kvadrant"],
      explanation: "$D>0$ sier at punktet er et ekstrempunkt, men ikke om det er topp eller bunn. Fortegnet på $f''_{xy}$ er uten betydning, siden kryssleddet kvadreres i $D$.",
    },
    {
      question: "Hva er riktig konklusjon når $D=0$ i kandidatpunktet?",
      options: ["Testen er inkonklusiv her", "Punktet er et sadelpunkt", "Punktet er et vendepunkt", "Punktet er et globalt minimum"],
      explanation: "Alle tre utfall er mulige når $D=0$, så testen skiller dem ikke. Å skrive at testen ikke gir svar er et korrekt svar; å gjette gir ingen uttelling.",
    },
    {
      question: "Hvorfor holder det ikke å se på $f''_{xx}$ alene?",
      options: ["Den ser bare krumningen langs én retning", "Den er alltid null i et stasjonærpunkt", "Den er alltid lik $f''_{yy}$ i et ekstrempunkt", "Den kan ikke regnes ut uten $f''_{xy}$"],
      explanation: "I $f(x,y)=x^2-y^2$ er $f''_{xx}=2>0$, men origo er et sadelpunkt. Krumning oppover langs $x$-aksen sier ingenting om de andre retningene.",
    },
    {
      question: "Hvor mange stasjonærpunkter har $f(x,y)=x^2y+x^2+2y^2$?",
      options: ["Tre", "Ett", "To", "Fire"],
      explanation: "$f'_x=2x(y+1)$ gir grenene $x=0$ og $y=-1$; den første gir ett punkt, den andre to. Svarer man «ett», har man delt på $2x$ i stedet for å faktorisere.",
    },
    {
      question: "Hva blir $f''_{xy}$ når $f(x,y)=x^2y+x^2+2y^2$?",
      options: ["$2x$", "$2y+2$", "$4$", "$x^2$"],
      explanation: "Deriver $f'_x=2xy+2x$ mht. $y$, og alle ledd uten $y$ faller bort. Svaret $2y+2$ er $f''_{xx}$ og $4$ er $f''_{yy}$ — begge for samme funksjon.",
    },
    {
      question: "Hva er den vanligste måten å miste et kandidatpunkt på?",
      options: ["Å dele på en faktor i stedet for å faktorisere", "Å regne $D$ i feil kandidatpunkt", "Å bruke $f''_{yy}$ i stedet for $f''_{xx}$", "Å derivere i feil rekkefølge i $f''_{xy}$"],
      explanation: "Deling forutsetter at faktoren ikke er null, og da forsvinner hele grenen der den er null. De to andre feilgrepene er uskadelige: $f''_{yy}$ i stedet for $f''_{xx}$ gir samme konklusjon når $D>0$, og Youngs teorem gjør rekkefølgen i $f''_{xy}$ likegyldig.",
    },
    {
      question: "Hva sier Youngs teorem om de kryssderiverte?",
      options: ["$f''_{xy}=f''_{yx}$", "$f''_{xy}=-f''_{yx}$", "$f''_{xy}=f''_{xx}f''_{yy}$", "$f''_{xy}=0$ i et stasjonærpunkt"],
      explanation: "Rekkefølgen spiller ingen rolle når de andrederiverte er kontinuerlige. Derfor trengs bare én av dem, og regner du ut begge, har du en gratis kontroll.",
    },
    {
      question: "Hva blir $D$ for $f(x,y)=x^3+y^3-9xy$ i punktet $(3,3)$?",
      options: ["$243$", "$81$", "$-81$", "$324$"],
      explanation: "Med $f''_{xx}=6x$, $f''_{yy}=6y$ og $f''_{xy}=-9$ blir $D=36xy-81=324-81$. Svaret $324$ har glemt å trekke fra kryssleddet.",
    },
    {
      question: "Hva slags punkt er $(0,0)$ for $f(x,y)=x^3+y^3-9xy$?",
      options: ["Sadelpunkt", "Lokalt minimum", "Lokalt maksimum", "Ikke et stasjonærpunkt"],
      explanation: "Der er $D=36\\cdot 0-81=-81<0$. Det andre stasjonærpunktet, $(3,3)$, er derimot et lokalt minimum — samme funksjon gir altså ulike utfall.",
    },
    {
      question: "Hvorfor er et lokalt minimum ikke uten videre globalt?",
      options: ["Testen ser bare på krumningen i selve punktet", "Fordi $D$ alltid er negativ langt fra punktet", "Fordi globale punkter må ligge på randen", "Fordi $f''_{xy}$ endrer fortegn utenfor punktet"],
      explanation: "Andrederiverttesten er en lokal test og sier bare noe om nabolaget. Et globalt utsagn krever at betingelsene holder i hele definisjonsområdet.",
    },
    {
      question: "Hva forteller fortegnet på $f''_{xy}$ økonomisk?",
      options: ["Om variablene er substitutter eller komplementer", "Om punktet er et maksimum eller et minimum", "Om funksjonen er homogen av positiv grad", "Om grenseavkastningen er positiv eller negativ"],
      explanation: "Negativ kryssderivert betyr at mer av det ene senker grenseavkastningen av det andre. For selve klassifiseringen teller likevel bare tallverdien, siden kryssleddet kvadreres.",
    },
    {
      question: "Hva er kandidatpunktet til $\\pi(x,y)=100x+80y-2x^2-2xy-2y^2$?",
      options: ["$(20,10)$", "$(10,20)$", "$(25,15)$", "$(20,20)$"],
      explanation: "Betingelsene $2x+y=50$ og $x+2y=40$ har entydig løsning $x=20$, $y=10$. Svaret $(10,20)$ bytter om koordinatene, som skjer hvis man løser feil likning for feil variabel.",
    },
    {
      question: "Hva skiller fri optimering fra Lagrange-oppgaven i lesningen av teksten?",
      options: ["Om det finnes en bindende likning i oppgaven", "Om funksjonen har to eller flere variabler", "Om det spørres om maksimum eller minimum", "Om funksjonen inneholder et kryssledd"],
      explanation: "En bibetingelse $g(x,y)=m$ sender oppgaven til Del 8 og multiplikatoren; uten den brukes Hesse-determinanten. Antall variabler og valget mellom maks og min avgjør ikke hvilken metode som gjelder.",
    },
  ],
  'econ1100-6-2': [
    {
      question: "Hva må gjelde for at et lokalt minimum skal være globalt?",
      options: ["At $f''_{xx}\\ge 0$ og $D\\ge 0$ i hele området", "At $f''_{xx}\\ge 0$ og $D\\ge 0$ i kandidatpunktet", "At $f''_{xy}=0$ i hele definisjonsområdet", "At funksjonen bare har ett stasjonærpunkt"],
      explanation: "Konveksitet må holde overalt, ikke bare der du står — i kandidatpunktet holder betingelsene allerede. Ett stasjonærpunkt er heller ingen garanti; det kan være et sadelpunkt.",
    },
    {
      question: "Når kan klassifiseringen uten videre utvides til hele planet?",
      options: ["Når alle tre andrederiverte er konstanter", "Når $D$ er større enn ti i punktet", "Når funksjonen ikke har noe kryssledd", "Når kandidatpunktet ligger i origo"],
      explanation: "Konstante andrederiverte betyr at $D$ og $f''_{xx}$ har samme verdi i hvert punkt. Uten kryssledd kan $f''_{xx}$ likevel inneholde $x$, som i $x^3-3x+y^2$.",
    },
    {
      question: "Hva skal til for å motbevise at et minimum er globalt?",
      options: ["Ett punkt med lavere funksjonsverdi", "At $D$ er negativ et sted i planet", "At funksjonen har flere stasjonærpunkter", "At kryssderiverten skifter fortegn"],
      explanation: "En påstand som gjelder for alle punkter, faller på ett eneste moteksempel. At $D$ er negativ et annet sted, sier bare at det stedet er et sadelpunkt — ikke at verdien der er lavere.",
    },
    {
      question: "Hvorfor kan innsetting av tallverdier ikke brukes til å bevise globalitet?",
      options: ["Fordi noen få punkter aldri dekker hele området", "Fordi funksjonsverdier ikke kan sammenlignes direkte", "Fordi bare stasjonærpunkter har lov til å sammenlignes", "Fordi andrederiverttesten da blir inkonklusiv"],
      explanation: "Dette er feil #1: et utsagn om alle punkter krever et argument om alle punkter. Motsatt vei er innsetting derimot fullgodt, siden ett moteksempel er nok.",
    },
    {
      question: "Hva er kravet på $D$ for at $f$ skal være konkav?",
      options: ["$D\\ge 0$ overalt", "$D\\le 0$ overalt", "$D=0$ overalt", "$D$ skifter fortegn"],
      explanation: "Kravet på $D$ er det samme for konveks og konkav; det er fortegnet på $f''_{xx}$ som skiller dem. Negativ $D$ betyr sadelpunkt, ikke krumning nedover.",
    },
    {
      question: "Hva er stasjonærpunktet til $f(x,y)=2x^2+y^2+2xy-8x-6y$?",
      options: ["$(1,2)$", "$(2,1)$", "$(2,0)$", "$(0,3)$"],
      explanation: "Betingelsene $2x+y=4$ og $x+y=3$ gir $x=1$, $y=2$. Svaret $(2,1)$ bytter om koordinatene, som skjer hvis man løser feil betingelse for feil variabel.",
    },
    {
      question: "Hva slags punkt er $(0,0)$ for $f(x,y)=x^2+3xy+y^2$?",
      options: ["Sadelpunkt", "Globalt minimum", "Lokalt minimum", "Testen gir ikke svar"],
      explanation: "Her er $D=2\\cdot 2-3^2=-5<0$ i hele planet. At $f''_{xx}$ og $f''_{yy}$ begge er positive, holder ikke når kryssleddet er sterkere.",
    },
    {
      question: "Hvorfor er det lokale minimumet til $f(x,y)=x^3-6xy+3y^2$ ikke globalt?",
      options: ["Fordi $f''_{xx}=6x$ er negativ for $x<0$", "Fordi funksjonen har to stasjonærpunkter", "Fordi kryssleddet $-6xy$ er negativt", "Fordi $D=36x-36$ er null i $x=1$"],
      explanation: "Konveksitet krever $f''_{xx}\\ge 0$ overalt, og det brytes i hele venstre halvplan. Konkret er $f(-10,-10)=-1300$, langt under verdien $-4$ i kandidatpunktet.",
    },
    {
      question: "Hva er $D$ for $f(x,y)=x^3-12xy+8y^3$?",
      options: ["$288xy-144$", "$288xy+144$", "$288xy-12$", "$48xy-144$"],
      explanation: "Med $f''_{xx}=6x$, $f''_{yy}=48y$ og $f''_{xy}=-12$ blir $D=288xy-(-12)^2$. Svaret $288xy-12$ har glemt å kvadrere kryssleddet, og $288xy+144$ har feil fortegn.",
    },
    {
      question: "Hvor mange globale maksimumspunkter har $f(x,y)=4xy-x^4-y^4$?",
      options: ["To", "Ett", "Tre", "Ingen"],
      explanation: "Både $(1,1)$ og $(-1,-1)$ gir verdien $2$, som er den største. Verdien er entydig, men stedet trenger ikke være det — origo er derimot et sadelpunkt.",
    },
    {
      question: "Hva bør konklusjonen si når bare andrederiverttesten er brukt?",
      options: ["At punktet er et lokalt ekstrempunkt", "At punktet er et globalt ekstrempunkt", "At funksjonen er konveks i hele planet", "At det ikke finnes andre kandidatpunkter"],
      explanation: "Testen bruker bare informasjon fra selve punktet, så bare det lokale utsagnet er belagt. Å skrive «globalt» krever et eget argument om hele definisjonsområdet.",
    },
    {
      question: "Hva følger av at det eneste stasjonærpunktet er et sadelpunkt?",
      options: ["Funksjonen har ingen indre ekstrempunkter", "Funksjonen har et globalt minimum på randen", "Testen må gjentas med $f''_{yy}$", "Funksjonen er konveks i hele planet"],
      explanation: "Et indre ekstrempunkt må oppfylle førsteordensbetingelsene, og her gjør bare sadelpunktet det. Å bytte til $f''_{yy}$ hjelper ikke, siden $D<0$ avgjør saken alene.",
    },
    {
      question: "Hvilket steg i oppskriften skiller sjiktene på eksamen?",
      options: ["Steg 4 — lokalt eller globalt", "Steg 1 — å finne kandidatpunktene", "Steg 2 — å derivere to ganger", "Steg 3 — å regne ut determinanten"],
      explanation: "De tre første stegene er mekaniske og beherskes bredt; det siste krever et argument om hele området. Sensorveiledningene kommenterer nettopp dette i to av settene i arkivet.",
    },
    {
      question: "Hva er det lokale minimumet til $C(x,y)=x^2+xy+y^2-6x-9y+40$ verdt?",
      options: ["$19$", "$21$", "$40$", "$-19$"],
      explanation: "Kandidatpunktet er $(1,4)$, og innsetting gir $1+4+16-6-36+40$. Konstantleddet $40$ må være med — å glemme det er den vanligste regnefeilen her.",
    },
  ],
  'econ1100-7-1': [
    {
      question: "Hva betyr det at $f$ er homogen av grad $k$?",
      options: ["$f(tx,ty)=t^{k}f(x,y)$ for alle $t$", "$f(tx,ty)=kf(x,y)$ for alle $t>0$", "$f(x+t,y+t)=t^{k}f(x,y)$ for alle $t$", "$f(tx,y)=t^{k}f(x,y)$ for alle $t$"],
      explanation: "Alle variablene skaleres med samme faktor, og kravet gjelder for enhver positiv $t$. Svaret $f(tx,y)=t^{k}f(x,y)$ skalerer bare den ene variabelen, som er noe helt annet.",
    },
    {
      question: "Hva er homogenitetsgraden til $f(x,y)=Ax^{\\alpha}y^{\\beta}$?",
      options: ["$\\alpha+\\beta$", "$\\alpha\\beta$", "$A\\alpha\\beta$", "$\\alpha-\\beta$"],
      explanation: "Skalering gir $t^{\\alpha}t^{\\beta}=t^{\\alpha+\\beta}$, altså eksponentsummen. Den multiplikative konstanten $A$ spiller ingen rolle.",
    },
    {
      question: "Med hvilken faktor ganges en grad-3-homogen funksjon når begge variablene dobles?",
      options: ["$8$", "$6$", "$3$", "$2$"],
      explanation: "Faktoren er $2^{k}=2^{3}$, ikke $2k=6$. Dette er den vanligste enkeltfeilen i sjangeren.",
    },
    {
      question: "Hva betyr $k<1$?",
      options: ["Avtakende skalautbytte", "Tiltakende skalautbytte", "Konstant skalautbytte", "At funksjonen avtar"],
      explanation: "En proporsjonal økning i alle innsatsfaktorer gir mindre enn proporsjonal økning i produksjonen. At funksjonen avtar er noe helt annet, og styres av fortegnet på de deriverte.",
    },
    {
      question: "Er $f(x,y)=x^{2}+y^{3}$ homogen?",
      options: ["Nei, ulik grad i leddene", "Ja, av grad 2 fra første ledd", "Ja, av grad 3 fra andre ledd", "Ja, av grad 5 fra eksponentsummen"],
      explanation: "Skalering gir $t^{2}x^{2}+t^{3}y^{3}$, og ingen felles faktor lar seg trekke ut. En sum er homogen bare når alle ledd har samme grad.",
    },
    {
      question: "Hva er graden til $f(x,y)=x^{1/3}y^{1/2}$?",
      options: ["$5/6$", "$1/6$", "$2/5$", "$1/5$"],
      explanation: "Eksponentsummen er $\\tfrac13+\\tfrac12=\\tfrac26+\\tfrac36$. Graden trenger ikke være et helt tall.",
    },
    {
      question: "Hva er graden til $\\big(K^{\\gamma}+L^{\\gamma}\\big)^{\\alpha/\\gamma}$?",
      options: ["$\\alpha$", "$\\gamma$", "$\\alpha/\\gamma$", "$\\alpha+\\gamma$"],
      explanation: "Skalering gir $t^{\\gamma}$ inne i parentesen, og opphøyd i $\\alpha/\\gamma$ blir det $t^{\\alpha}$. Faktoren $\\gamma$ stryker seg mot seg selv.",
    },
    {
      question: "Hva er graden til $f(x,y)=x^{3}/y$?",
      options: ["$2$", "$3$", "$4$", "$1$"],
      explanation: "For en brøk trekkes nevnerens grad fra tellerens, altså $3-1$. Mønsteret er det samme som i kvotientregelen for elastisiteter.",
    },
    {
      question: "Er $f(x,y)=x^{2}y+3$ homogen?",
      options: ["Nei, konstantleddet hindrer det", "Ja, av grad 3 som produktleddet", "Ja, av grad 4 med konstanten med", "Ja, av grad 1 fordi 3 er konstant"],
      explanation: "Konstanten blir stående uendret under skalering, mens resten ganges med $t^{3}$. Et konstantledd ulik null utelukker alltid homogenitet.",
    },
    {
      question: "Hva skjer med $f$ når alle variabler kuttes med 30 prosent og $k=0{,}9$?",
      options: ["Den ganges med $0{,}7^{0{,}9}$", "Den ganges med $0{,}7\\cdot 0{,}9$", "Den faller med 30 prosent", "Den ganges med $0{,}9^{0{,}7}$"],
      explanation: "Regelen $t^{k}$ gjelder også for $t<1$, her med $t=0{,}7$. Resultatet er omtrent $0{,}726$, altså et fall på 27 og ikke 30 prosent.",
    },
    {
      question: "Hvordan påvirker en multiplikativ konstant homogenitetsgraden?",
      options: ["Ikke i det hele tatt", "Den legges til graden", "Den ganges med graden", "Den gjør funksjonen ikke-homogen"],
      explanation: "Konstanten trekkes ut sammen med $t^{k}$ og påvirker ingenting. Både $x^{2}y$ og $100x^{2}y$ har grad 3.",
    },
    {
      question: "Er homogenitetsgraden det samme som $\\mathrm{El}_K Q$?",
      options: ["Nei, den er elastisitetssummen", "Ja, de er alltid identiske", "Ja, når begge eksponentene er like store", "Nei, den er produktet av dem"],
      explanation: "Elastisiteten holder den andre faktoren fast; homogenitetsgraden endrer begge. For $AK^{\\alpha}L^{\\beta}$ er de $\\alpha$ mot $\\alpha+\\beta$, og de faller bare sammen i det degenererte tilfellet $\\beta=0$, der arbeidskraft ikke inngår.",
    },
    {
      question: "Hva skjer med graden når en homogen funksjon opphøyes i $n$?",
      options: ["Den ganges med $n$", "Den legges til $n$", "Den er uendret", "Den deles på $n$"],
      explanation: "Skalering gir $\\big(t^{k}g\\big)^{n}=t^{nk}g^{n}$. En kvadratrot er tilfellet $n=\\tfrac12$ og halverer derfor graden.",
    },
    {
      question: "Holder det å teste homogenitet med $t=2$?",
      options: ["Nei, kravet gjelder alle $t>0$", "Ja, det er nok", "Ja, hvis svaret blir et helt tall", "Nei, man må teste med $t=1$"],
      explanation: "Én verdi kan stemme ved et sammentreff uten at funksjonen er homogen. Testen skal føres symbolsk med $t$ stående.",
    },
  ],
  'econ1100-7-2': [
    {
      question: "Hva sier Eulers teorem?",
      options: ["$xf'_x+yf'_y=kf$", "$xf'_x+yf'_y=f$", "$f'_x+f'_y=kf$", "$xf'_x\\cdot yf'_y=kf$"],
      explanation: "Variablene er vekter på sine egne partiellderiverte, og summen er graden ganget med funksjonen. Varianten med $f$ i stedet for $kf$ på høyresiden er spesialtilfellet $k=1$.",
    },
    {
      question: "Hvilken grad har $f'_x$ når $f$ er homogen av grad $k$?",
      options: ["$k-1$", "$k$", "$k+1$", "$k/2$"],
      explanation: "Kjerneregelen gir en faktor $t$ som deles bort, og det senker graden med én. Å skrive $k$ her er den vanligste feilen i påstandstypen.",
    },
    {
      question: "Hvordan utledes Eulers relasjon?",
      options: ["Deriver identiteten mht. $t$ og sett $t=1$", "Deriver identiteten mht. $x$ og del på $t$", "Sett $t=0$ i identiteten", "Deriver funksjonen to ganger"],
      explanation: "Identiteten gjelder for alle $t$, så begge sider har like deriverte. Å derivere identiteten mht. $x$ og dele på $t$ er utledningen for homogene deriverte, ikke for Euler.",
    },
    {
      question: "Hvorfor er valget $t=1$ lov i Euler-beviset?",
      options: ["Fordi identiteten gjelder alle $t$", "Fordi $t$ per definisjon er 1", "Fordi $f$ er kontinuerlig", "Fordi $k$ er positiv"],
      explanation: "Vi står fritt til å velge den verdien som gjør uttrykket enklest. Setningen om at $t$ kan velges fritt hører med i besvarelsen.",
    },
    {
      question: "Gjelder Eulers relasjon bare når $k=1$?",
      options: ["Nei, den gjelder for enhver grad", "Ja, bare ved konstant skalautbytte", "Ja, bare når $k>0$", "Nei, bare når $k$ er heltall"],
      explanation: "Utledningen bruker en vilkårlig $k$ hele veien. Det er bare den økonomiske tolkningen om faktorandeler som krever $k=1$.",
    },
    {
      question: "Hva er graden til $f''_{xx}$ når $f$ har grad $k$?",
      options: ["$k-2$", "$k-1$", "$k$", "$k/2$"],
      explanation: "Teoremet brukes to ganger, og hver derivasjon senker graden med én. For $x^{3}y^{2}$ har $f''_{xx}=6xy^{2}$ eksponentsum 3, som er $5-2$.",
    },
    {
      question: "Hva sier grad null om grenseproduktene ved konstant skalautbytte?",
      options: ["De er uendret", "De dobles ved dobling", "De halveres ved dobling", "De går mot null"],
      explanation: "Grad null betyr at faktoren $t^{0}=1$, så verdien er den samme. Grenseproduktene avhenger bare av forholdet mellom faktorene.",
    },
    {
      question: "Hva er $\\dfrac{K\\,Q'_K}{Q}$ for $Q=AK^{\\alpha}L^{\\beta}$?",
      options: ["$\\alpha$", "$\\beta$", "$\\alpha+\\beta$", "$\\alpha/\\beta$"],
      explanation: "Regningen gir $\\alpha AK^{\\alpha}L^{\\beta}/Q=\\alpha$. Dette er samme uttrykk som produksjonselastisiteten $\\mathrm{El}_K Q$.",
    },
    {
      question: "Hva følger av Euler ved konstant skalautbytte?",
      options: ["Faktorandelene summerer til én", "Grenseproduktene er like", "Produksjonen er konstant", "Kapitalandelen er alltid en halv"],
      explanation: "Med $k=1$ blir $KQ'_K+LQ'_L=Q$, og delt på $Q$ gir det $\\alpha+\\beta=1$. Andelene trenger ikke være like store.",
    },
    {
      question: "Hva er forskjellen på Eulers relasjon og homogenitetsdefinisjonen?",
      options: ["Euler følger av definisjonen", "De er to navn på det samme", "Definisjonen følger av Euler", "Euler gjelder bare i ett punkt"],
      explanation: "Definisjonen handler om skalering av argumentene, Euler om de deriverte i et fast punkt. Å bruke Euler som definisjon er en klassisk feil.",
    },
    {
      question: "Hvorfor faller graden med én i utledningen for $f'_x$?",
      options: ["Fordi vi deler på faktoren $t$", "Fordi vi setter $t=1$", "Fordi $f'_x$ er mindre enn $f$", "Fordi eksponenten deriveres"],
      explanation: "Kjerneregelen produserer en faktor $t$ på venstresiden, og den flyttes over. Nettopp den flyttingen spiser opp én potens.",
    },
    {
      question: "Verifiser: $f=x^{2}y$ har $xf'_x+yf'_y$ lik hva?",
      options: ["$3x^{2}y$", "$2x^{2}y$", "$x^{2}y$", "$6x^{2}y$"],
      explanation: "Regningen gir $2x^{2}y+x^{2}y$, og graden er 3. Det stemmer med $kf$ når $k=3$.",
    },
  ],
  'econ1100-8-1': [
    {
      question: "Hva er Lagrange-funksjonen for $\\max F(x,y)$ under $g(x,y)=m$?",
      options: ["$L=F-\\lambda(g-m)$", "$L=F-\\lambda(g+m)$", "$L=F\\cdot\\lambda(g-m)$", "$L=g-\\lambda(F-m)$"],
      explanation: "Parentesen skal være null nøyaktig når bibetingelsen holder, og målfunksjonen står utenfor. Svaret $L=g-\\lambda(F-m)$ bytter om $F$ og $g$ — den dyreste lesefeilen i sjangeren.",
    },
    {
      question: "Hvor mange betingelser inngår i FOB-systemet?",
      options: ["Tre, medregnet bibetingelsen", "To, uten bibetingelsen", "Fire, med andrederiverte", "Én, bare bibetingelsen"],
      explanation: "Tre ukjente ($x$, $y$ og $\\lambda$) krever tre likninger. Dropper man bibetingelsen, er systemet underbestemt og har uendelig mange løsninger.",
    },
    {
      question: "Hva gir $\\partial L/\\partial\\lambda=0$?",
      options: ["Bibetingelsen $g=m$ tilbake", "En helt ny betingelse på $x$", "Verdien av multiplikatoren", "Tangeringsbetingelsen direkte"],
      explanation: "Multiplikatoren opptrer bare i det siste leddet, så den deriverte er $-(g-m)$. Derfor godtar sensor at man dropper den, så lenge bibetingelsen faktisk brukes.",
    },
    {
      question: "Hva er FOB (1) for $L=\\ln x+\\ln y-\\lambda(p_1x+p_2y-m)$?",
      options: ["$\\dfrac1x-\\lambda p_1=0$", "$\\dfrac1x-\\lambda p_2=0$", "$\\ln x-\\lambda p_1=0$", "$-\\dfrac{1}{x^2}-\\lambda p_1=0$"],
      explanation: "Den deriverte av $\\ln x$ er $1/x$, og leddet $-\\lambda p_1x$ bidrar med $-\\lambda p_1$. Svaret med $-\\dfrac{1}{x^2}$ deriverer én gang for mye.",
    },
    {
      question: "Hva er $\\lambda$ i Lagrange-metoden?",
      options: ["En ukjent som systemet bestemmer", "En parameter oppgaveteksten gir", "Alltid prisforholdet $p_1/p_2$", "Den deriverte av målfunksjonen"],
      explanation: "Multiplikatoren løses ut sammen med $x^*$ og $y^*$. Den får en tolkning som skyggepris senere, men den er aldri gitt på forhånd.",
    },
    {
      question: "Hvilken funksjon står i parentesen ved kostnadsminimering under et produksjonskrav?",
      options: ["Produktfunksjonen", "Kostnadsfunksjonen", "Nyttefunksjonen", "Budsjettlinjen"],
      explanation: "Kostnaden er det som minimeres, altså målfunksjonen, og produksjonskravet er bibetingelsen. Rollene er speilvendt av nyttemaksimering.",
    },
    {
      question: "Hvorfor er $\\lambda>0$ når $U'_x>0$ og $p_1>0$?",
      options: ["Fordi $\\lambda=U'_x/p_1$ er en positiv brøk", "Fordi $\\lambda$ per definisjon er positiv", "Fordi budsjettet $m$ er positivt", "Fordi nytten er en voksende funksjon av $\\lambda$"],
      explanation: "FOB (1) løst for $\\lambda$ gir en brøk med positiv teller og positiv nevner. Fortegnet følger av regningen, ikke av en definisjon.",
    },
    {
      question: "Hva følger av at FOB er nødvendige, men ikke tilstrekkelige?",
      options: ["Kandidatpunktet kan være av hvilket som helst slag", "Løsningen finnes alltid, men er ikke entydig", "Bibetingelsen må sjekkes en gang til til slutt", "Multiplikatoren kan bli negativ i et maksimum"],
      explanation: "Situasjonen er den samme som for $f'(a)=0$ i én variabel. Å skille kandidatene krever at funksjonsverdiene sammenlignes.",
    },
    {
      question: "Hvilket signalord peker ut bibetingelsen i en oppgavetekst?",
      options: ["«gitt at» eller «kravet er»", "«så stor som mulig»", "«maksimer nytten»", "«finn den beste fordelingen»"],
      explanation: "Bibetingelsen har alltid en fast tallverdi eller parameter på høyre side. De tre andre uttrykkene peker ut målfunksjonen.",
    },
    {
      question: "Hvorfor krever $\\ln x$ at kandidatpunktet har $x>0$?",
      options: ["Fordi logaritmen mangler verdi for $x\\le 0$", "Fordi nytten alltid må være positiv", "Fordi prisene i modellen er positive", "Fordi budsjettet ellers ikke går opp"],
      explanation: "Definisjonsområdet settes av funksjonsuttrykket selv, uavhengig av modellens økonomi. Røtter med $x\\le 0$ skal derfor forkastes.",
    },
    {
      question: "Hva er FOB (2) for $L=x^{1/2}y^{1/2}-\\lambda(2x+3y-60)$?",
      options: ["$\\tfrac12 x^{1/2}y^{-1/2}-3\\lambda=0$", "$\\tfrac12 x^{-1/2}y^{1/2}-3\\lambda=0$", "$\\tfrac12 x^{1/2}y^{-1/2}-2\\lambda=0$", "$x^{1/2}y^{-1/2}-3\\lambda=0$"],
      explanation: "Deriveres mht. $y$, er $x^{1/2}$ en konstant faktor og eksponenten på $y$ faller med én. Svaret $\\tfrac12 x^{-1/2}y^{1/2}-3\\lambda=0$ deriverer mht. feil variabel, og varianten med $-2\\lambda$ henter feil pris.",
    },
    {
      question: "Gir $L=F-\\lambda(g-m)$ og $L=F+\\lambda(m-g)$ samme løsning?",
      options: ["Ja, uttrykkene er identiske", "Nei, $x^*$ blir forskjellig", "Nei, bare $y^*$ blir lik", "Ja, men $\\lambda$ skifter fortegn"],
      explanation: "Ganges minustegnet inn, står de to uttrykkene likt ledd for ledd. Det er $L=F+\\lambda(g-m)$ som snur fortegnet på multiplikatoren.",
    },
    {
      question: "Hvordan kontrollerer du et oppgitt kandidatpunkt $(x^*,y^*,\\lambda)$?",
      options: ["Setter det inn i alle tre betingelsene", "Setter det inn i målfunksjonen", "Deriverer $L$ en gang til", "Regner ut $D=L''_{xx}L''_{yy}-(L''_{xy})^2$"],
      explanation: "Punktet skal oppfylle FOB (1), FOB (2) og bibetingelsen samtidig. Kontrollen tar et minutt og fanger nesten alle regnefeil.",
    },
    {
      question: "Hva gir deling av FOB (1) på FOB (2)?",
      options: ["$F'_x/F'_y=g'_x/g'_y$", "$F'_x\\cdot F'_y=\\lambda$", "$F'_x+F'_y=g'_x+g'_y$", "$\\lambda=F'_x/g'_y$"],
      explanation: "Multiplikatoren står som faktor på begge sider og forsvinner i brøken. Resultatet er tangeringsbetingelsen, som løser problemet videre.",
    },
    {
      question: "Hva betyr $U'_x/U'_y=p_1/p_2$ geometrisk?",
      options: ["Kurvene tangerer hverandre", "Budsjettlinjen går gjennom origo", "Indifferenskurven er konveks", "Budsjettet er brukt opp"],
      explanation: "De to kurvene har samme helning i optimumspunktet. At budsjettet er brukt opp, er derimot innholdet i bibetingelsen, ikke i tangeringen.",
    },
    {
      question: "Hva er en indre løsning?",
      options: ["Et optimum med $x^*>0$ og $y^*>0$", "Et optimum midt på budsjettlinjen", "Et punkt der $\\lambda=0$", "Et punkt inne i målfunksjonen"],
      explanation: "Lagranges betingelser er laget for optimum inne i definisjonsområdet. Ligger optimum på kanten, gjelder randargumentet i stedet.",
    },
    {
      question: "En oppgave sier «minimer kostnaden gitt at produksjonen er 40». Hva er $g$?",
      options: ["Produktfunksjonen, satt lik 40", "Kostnadsfunksjonen, satt lik 40", "Summen av faktorprisene", "Differansen kostnad minus produksjon"],
      explanation: "Kravet på 40 hører til produksjonen, så det er produktfunksjonen som bindes. Kostnaden er det som skal bli minst, altså målfunksjonen.",
    },
    {
      question: "Hva skjer hvis bibetingelsen glemmes i FOB-systemet?",
      options: ["Det blir flere ukjente enn likninger", "Multiplikatoren blir null", "Løsningen blir et minimum i stedet", "Målfunksjonen må deriveres to ganger"],
      explanation: "To likninger kan ikke bestemme tre ukjente entydig. Bibetingelsen er den likningen som knytter kandidatpunktet til den faktiske rammen.",
    },
  ],
  'econ1100-8-2': [
    {
      question: "Hvordan elimineres $\\lambda$ raskest fra FOB-systemet?",
      options: ["Ved å dele én FOB på den andre", "Ved å sette $\\lambda=0$ i begge to", "Ved å legge de to FOB sammen", "Ved å derivere FOB en gang til"],
      explanation: "Multiplikatoren står som faktor på begge sider og forsvinner i brøken. Å sette $\\lambda=0$ er ulovlig — den er positiv i standardproblemene.",
    },
    {
      question: "Hva blir tangeringsbetingelsen for $\\max\\ \\ln x+\\ln y$ under $p_1x+p_2y=m$?",
      options: ["$y/x=p_1/p_2$", "$y/x=p_2/p_1$", "$xy=p_1p_2$", "$x/y=p_1p_2$"],
      explanation: "Deling av FOB gir $(1/x)/(1/y)=p_1/p_2$, altså $y/x=p_1/p_2$. Svaret $y/x=p_2/p_1$ er den snudde brøken, den vanligste regnefeilen i steget.",
    },
    {
      question: "Hva er $x^*$ for $\\max\\ \\ln x+\\ln y$ under $p_1x+p_2y=m$?",
      options: ["$m/(2p_1)$", "$m/(2p_2)$", "$m/p_1$", "$2m/p_1$"],
      explanation: "Tangeringsbetingelsen gir like utgifter på hvert gode, altså $p_1x=m/2$. Svaret $m/p_1$ glemmer at halve budsjettet går til det andre godet.",
    },
    {
      question: "Hva er $\\lambda$ for $\\max\\ \\ln x+\\ln y$ under $p_1x+p_2y=m$?",
      options: ["$2/m$", "$m/2$", "$1/m$", "$2m$"],
      explanation: "FOB (1) gir $\\lambda=1/(p_1x^*)$, og med $x^*=m/(2p_1)$ blir det $2/m$. Prisene faller ut, slik at bare inntekten står igjen.",
    },
    {
      question: "Hva må gjøres etter at tangeringsbetingelsen er funnet?",
      options: ["Sette den inn i bibetingelsen", "Derivere den mht. prisene", "Sammenligne den med $\\lambda$", "Kontrollere at $\\lambda$ er null"],
      explanation: "Tangeringsbetingelsen er én likning med to ukjente og beskriver en hel kurve. Bibetingelsen plukker ut det ene punktet på den.",
    },
    {
      question: "Hva er budsjettandelen på gode 1 for nytten $a\\ln x+b\\ln y$?",
      options: ["$a/(a+b)$", "$b/(a+b)$", "$ap_1/m$", "$a/b$"],
      explanation: "Utgiften blir $p_1x^*=am/(a+b)$, så andelen av budsjettet er $a/(a+b)$. Andelen avhenger bare av vektene, ikke av prisene.",
    },
    {
      question: "Hva skjer med utgiften $p_1x^*$ når $p_1$ dobles, med nytten $\\ln x+\\ln y$?",
      options: ["Den er uendret", "Den dobles", "Den halveres", "Den firedobles"],
      explanation: "Mengden halveres, siden $x^*=m/(2p_1)$, så produktet $p_1x^*=m/2$ holder seg. Dette er kjennetegnet ved Cobb-Douglas-nytte.",
    },
    {
      question: "Hva gjør du med en rot som gir $y<0$ når nytten inneholder $\\ln y$?",
      options: ["Forkaster den med begrunnelse", "Beholder den som andre optimum", "Bytter fortegn og går videre", "Setter $y=0$ i stedet"],
      explanation: "Roten ligger utenfor definisjonsområdet, og begrunnelsen må stå på arket. Dette er feilkatalogens #11, og den koster poeng hvert år.",
    },
    {
      question: "Hva blir $x_1^*$ ved $\\min\\ c_1x_1+c_2x_2$ under $x_1^{1/2}x_2^{1/2}=\\bar Q$?",
      options: ["$\\bar Q\\sqrt{c_2/c_1}$", "$\\bar Q\\sqrt{c_1/c_2}$", "$\\bar Q c_2/c_1$", "$\\bar Q\\sqrt{c_1c_2}$"],
      explanation: "Tangeringsbetingelsen $c_1x_1=c_2x_2$ satt inn i produksjonskravet gir dette. Merk at prisene står byttet om: den dyre faktoren brukes minst.",
    },
    {
      question: "Hva er den minimale kostnaden $C^*$ i samme problem?",
      options: ["$2\\bar Q\\sqrt{c_1c_2}$", "$\\bar Q\\sqrt{c_1c_2}$", "$2\\bar Q(c_1+c_2)$", "$\\bar Q(c_1+c_2)/2$"],
      explanation: "Hvert av de to leddene blir $\\bar Q\\sqrt{c_1c_2}$, og summen er det dobbelte. At leddene er like, er nettopp tangeringsbetingelsen.",
    },
    {
      question: "Hva er $\\lambda$ i et kostnadsminimeringsproblem?",
      options: ["Grensekostnaden $dC^*/d\\bar Q$", "Den totale kostnaden $C^*$", "Forholdet $c_1/c_2$", "Gjennomsnittskostnaden $C^*/\\bar Q$"],
      explanation: "Multiplikatoren måler hva én enhet mer produksjon koster. For Cobb-Douglas med like eksponenter er både grense- og gjennomsnittskostnad $2\\sqrt{c_1c_2}$, og grunnen er at teknologien har konstant skalautbytte — ikke at tallene tilfeldigvis møtes.",
    },
    {
      question: "Hva er tangeringsbetingelsen i produsentbildet?",
      options: ["$F'_1/F'_2=c_1/c_2$", "$F'_1/F'_2=c_2/c_1$", "$F'_1\\cdot F'_2=c_1c_2$", "$F'_1+F'_2=c_1+c_2$"],
      explanation: "Forholdet mellom grenseproduktene settes lik forholdet mellom faktorprisene. Indeks 1 skal stå i telleren på begge sider.",
    },
    {
      question: "Gir $x^{1/2}y^{1/2}$ og $\\ln x+\\ln y$ samme optimale $x^*$?",
      options: ["Ja, den ene er en voksende omforming", "Nei, potensformen gir større $x^*$", "Nei, logaritmeformen gir større $x^*$", "Ja, men bare når $p_1=p_2$"],
      explanation: "Siden $\\ln(x^{1/2}y^{1/2})=\\frac12(\\ln x+\\ln y)$, rangerer de to funksjonene punktene likt. Multiplikatoren $\\lambda$ blir derimot ulik, fordi den måler endring i nytteverdien selv.",
    },
    {
      question: "Har $U=\\sqrt{x}+\\sqrt{y}$ faste budsjettandeler?",
      options: ["Nei, andelene avhenger av prisene", "Ja, alltid halvparten på hvert gode", "Ja, andelene følger eksponentene", "Nei, det finnes ingen løsning"],
      explanation: "Faste andeler er en Cobb-Douglas-egenskap, og en sum av kvadratrøtter er ikke Cobb-Douglas. Her blir $x^*=mp_2/(p_1(p_1+p_2))$, som avhenger av begge prisene.",
    },
    {
      question: "$\\max\\ \\ln x+\\ln y$ under $5x+2y=100$. Hva er $x^*$?",
      options: ["$10$", "$20$", "$25$", "$50$"],
      explanation: "Formelen $x^*=m/(2p_1)$ gir $100/10=10$. Verdien $25$ er $y^*$, som følger av $m/(2p_2)$.",
    },
    {
      question: "Hvordan kontrolleres et ferdig Lagrange-svar?",
      options: ["Ved innsetting i alle tre betingelsene", "Ved å derivere målfunksjonen på nytt", "Ved å sjekke at $\\lambda$ er et helt tall", "Ved å tegne indifferenskurven"],
      explanation: "Alle tre betingelsene skal holde eksakt i det oppgitte punktet. Kontrollen tar under et minutt og fanger nesten alle regnefeil.",
    },
    {
      question: "Hva betyr det geometrisk at $\\mathrm{MRS}=p_1/p_2$ i optimum?",
      options: ["Indifferenskurven berører budsjettlinjen", "Indifferenskurven krysser budsjettlinjen", "Budsjettlinjen er vannrett der", "Indifferenskurven er en rett linje"],
      explanation: "De to kurvene har samme helning i punktet, altså tangering. Krysser de hverandre, kan konsumenten bytte seg til høyere nytte for samme penger.",
    },
    {
      question: "Hva er igjen å gjøre hvis svaret ditt er $x^*=\\dfrac{m/2}{p_1}$?",
      options: ["Forenkle til $m/(2p_1)$", "Sette inn tall for $m$", "Derivere mht. $p_1$", "Kontrollere fortegnet på $\\lambda$"],
      explanation: "Åpenbar forenkling kreves for full uttelling, også når uttrykket er riktig. Sensor trekker for uforenklede sluttsvar i denne sjangeren.",
    },
  ],
  'econ1100-8-3': [
    {
      question: "Hva sier omhyllingsteoremet?",
      options: ["$dV/da=\\partial L^*/\\partial a$", "$dV/da=\\partial F^*/\\partial a$", "$dV/da=\\lambda\\,\\partial g/\\partial a$", "$dV/da=\\partial L^*/\\partial\\lambda$"],
      explanation: "Lagrange-funksjonen deriveres partielt mht. parameteren og evalueres i optimum. Å bruke $F$ i stedet for $L$ mister bidraget fra bibetingelsen.",
    },
    {
      question: "Hva er $dU^*/dm$ i et nyttemaksimeringsproblem?",
      options: ["$\\lambda$", "$-\\lambda$", "$\\lambda x^*$", "$1/\\lambda$"],
      explanation: "Inntekten står i bibetingelsen med fortegn slik at den partiellderiverte blir $+\\lambda$. Fortegnet er positivt fordi mer budsjett gjør konsumenten bedre stilt.",
    },
    {
      question: "Hva er $dU^*/dp_1$?",
      options: ["$-\\lambda x^*$", "$\\lambda x^*$", "$-\\lambda y^*$", "$-x^*/\\lambda$"],
      explanation: "Prisen står i leddet $-\\lambda p_1x$, som gir $-\\lambda x$ evaluert i optimum. Svaret $-\\lambda y^*$ bruker mengden av feil gode.",
    },
    {
      question: "Hvorfor faller leddene fra $dx^*/da$ bort i omhyllingsteoremet?",
      options: ["Fordi $L'_x=0$ i optimum", "Fordi $x^*$ ikke avhenger av $a$", "Fordi $\\lambda$ er konstant", "Fordi $F$ er lineær i $x$"],
      explanation: "Bidragene ganges med de partiellderiverte av $L$, som er null i optimum. At $x^*$ ikke skulle avhenge av parameteren er galt — den gjør vanligvis nettopp det.",
    },
    {
      question: "Hva er forskjellen på $dU^*/dm$ og $\\partial U/\\partial m$?",
      options: ["Den første er $\\lambda$, den andre er null", "De er to navn på samme tall", "Den første er null, den andre er $\\lambda$", "Begge er lik $x^*$"],
      explanation: "Inntekten står ikke i nyttefunksjonen $U(x,y)$, bare i bibetingelsen. Stjernen markerer at optimeringen allerede er utført.",
    },
    {
      question: "Hva kalles $\\lambda$ i en økonomisk tolkning?",
      options: ["Skyggeprisen på rammen", "Prisen på gode 1 i markedet", "Grenseproduktet av kapital", "Budsjettandelen til gode 1"],
      explanation: "Den måler hva én enhet ekstra av rammen er verdt, uten at noe marked har satt prisen. I kostnadsminimering er samme tall grensekostnaden.",
    },
    {
      question: "Hva er $\\lambda$ for $\\max\\ \\ln x+\\ln y$ under $p_1x+p_2y=m$?",
      options: ["$2/m$", "$m/2$", "$2/p_1$", "$2p_1/m$"],
      explanation: "FOB gir $\\lambda=1/(p_1x^*)$ med $x^*=m/(2p_1)$, altså $2/m$. Prisene faller ut, så bare inntekten står igjen.",
    },
    {
      question: "Faller skyggeprisen når budsjettet vokser, med nytten $\\ln x+\\ln y$?",
      options: ["Ja, $\\lambda=2/m$ avtar i $m$", "Nei, $\\lambda$ er konstant", "Ja, men bare når $p_1=p_2$", "Nei, $\\lambda$ vokser med $m$"],
      explanation: "Formelen viser det direkte: $m=100$ gir $0{,}02$, $m=400$ gir $0{,}005$. Dette er avtakende grensenytte av inntekt.",
    },
    {
      question: "Hva er $dC^*/d\\bar Q$ i et kostnadsminimeringsproblem?",
      options: ["Grensekostnaden $\\lambda$", "Totalkostnaden $C^*$", "Faktormengden $x_1^*$", "Gjennomsnittskostnaden"],
      explanation: "Produksjonskravet står i bibetingelsen, så svaret er multiplikatoren. Faktormengden er derimot svaret når man deriverer mht. en faktorpris.",
    },
    {
      question: "Hva er $dC^*/dc_1$ når $c_1$ er en faktorpris i målfunksjonen?",
      options: ["$x_1^*$", "$\\lambda$", "$-\\lambda x_1^*$", "$c_1x_1^*$"],
      explanation: "Derivasjon av $c_1x_1+c_2x_2$ mht. $c_1$ gir $x_1$, satt inn i optimum. Multiplikatoren er ikke med, siden parameteren ikke står i bibetingelsen.",
    },
    {
      question: "Hva forventer sensor at du gjør med omhyllingsteoremet?",
      options: ["Bruker det direkte uten å utlede det", "Utleder det med kjerneregel først", "Kontrollerer det numerisk hver gang", "Sjekker andreordensbetingelsen etterpå"],
      explanation: "Direkte bruk er den forventede veien og gir full uttelling. En reutledning er ikke galt, men den koster tid uten å gi ekstra poeng.",
    },
    {
      question: "Hvorfor er $dU^*/dp_i$ negativ?",
      options: ["Fordi høyere pris er verre for konsumenten", "Fordi $\\lambda$ er negativ i et maksimum", "Fordi $x_i^*$ kan være negativ", "Fordi bibetingelsen har minus foran $m$"],
      explanation: "Både $\\lambda$ og $x_i^*$ er positive, så minustegnet kommer fra formelen selv. Fortegnet lar seg kontrollere mot intuisjonen på ett sekund.",
    },
    {
      question: "Er $\\Delta U^*=\\lambda\\,\\Delta m$ en eksakt likhet?",
      options: ["Nei, det er en marginal tilnærming", "Ja, alltid", "Ja, når $\\lambda$ er konstant", "Nei, den gjelder bare for $\\Delta m<0$"],
      explanation: "Multiplikatoren er stigningstallet i punktet, akkurat som i lineær approksimasjon. For små endringer er tilnærmingen god, for store er den grov.",
    },
    {
      question: "En bedrift bruker 20 enheter arbeid. Lønna stiger med én krone. Hva skjer med minimumskostnaden?",
      options: ["Den stiger med omtrent 20", "Den stiger med omtrent 1", "Den er uendret", "Den stiger med omtrent $\\lambda$"],
      explanation: "Omhyllingsteoremet gir $dC^*/dw=N^*=20$. Bedriften vil tilpasse seg, men tilpasningen gir ingen gevinst av første orden.",
    },
    {
      question: "Hva må gjøres etter at $\\partial L/\\partial a$ er regnet ut?",
      options: ["Sette inn optimum", "Derivere en gang til", "Sammenligne med bibetingelsen", "Løse for $\\lambda$ på nytt"],
      explanation: "Stjernen i $\\partial L^*/\\partial a$ betyr at $x$ og $y$ erstattes med $x^*$ og $y^*$. Et svar som fortsatt inneholder $x$ og $y$, er ikke ferdig.",
    },
  ],
  'econ1100-8-4': [
    {
      question: "Hvordan klassifiseres kandidatpunkter under en bibetingelse i ECON1100?",
      options: ["Ved å sammenligne funksjonsverdier", "Ved en andreordensbetingelse", "Ved fortegnet på multiplikatoren", "Ved Hesse-determinanten $D$"],
      explanation: "Førsteordensbetingelsene gir alle kandidatene, og rangeringen av verdiene avgjør. Hesse-determinanten hører til fri optimering, ikke betinget.",
    },
    {
      question: "Hva sier sensorveiledningen om andreordensbetingelse under bibetingelse?",
      options: ["At studentene ikke har lært den", "At den gir full uttelling", "At den kreves ved klassifisering", "At den erstatter bibetingelsen"],
      explanation: "Den er uttrykkelig ikke pensum, og skal derfor ikke brukes som løsningsvei. Klassifisering gjøres ved verdisammenligning i stedet.",
    },
    {
      question: "Hva er $x_i^*$ for $\\max\\sum\\ln x_i$ under $p\\sum x_i=m$?",
      options: ["$m/(np)$", "$m/p$", "$np/m$", "$m/(n+p)$"],
      explanation: "Symmetrien gir $n$ like verdier, og bibetingelsen $pnx=m$ løses for $x$. Svaret $m/p$ glemmer faktoren $n$, den vanligste feilen her.",
    },
    {
      question: "Hva er $\\lambda$ i samme problem?",
      options: ["$n/m$", "$m/n$", "$1/(np)$", "$np/m$"],
      explanation: "Betingelsen $1/x_i=\\lambda p$ med $x_i^*=m/(np)$ gir $\\lambda=n/m$. Skyggeprisen vokser med antall varer å fordele pengene på.",
    },
    {
      question: "Hva kreves for at symmetriargumentet skal gi full uttelling?",
      options: ["At det begrunnes, ikke bare påstås", "At alle $n$ betingelsene skrives ut", "At $\\lambda$ regnes ut først", "At notasjonen bruker summetegn"],
      explanation: "To setninger holder: betingelsene er identiske, og løst for $x_i$ står ingen $i$ igjen. Å skrive ut alle betingelsene er tvert imot unødvendig.",
    },
    {
      question: "Hva blir $x_i^*$ når prisene er ulike i $\\max\\sum\\ln x_i$ under $\\sum p_ix_i=m$?",
      options: ["$m/(np_i)$", "$m/(np)$", "$m/p_i$", "$np_i/(2m)$"],
      explanation: "Betingelsen gir $x_i=1/(\\lambda p_i)$, og hver utgift blir $1/\\lambda=m/n$. Mengdene blir altså ulike, mens beløpene er like.",
    },
    {
      question: "Hva forventer sensor i en $n$-variabel-oppgave?",
      options: ["Én generell betingelse for $x_i$", "Alle $n$ betingelsene skrevet ut", "En tabell over kandidatpunktene", "At $n$ først settes lik 2"],
      explanation: "Den generelle formen med «for $i=1,\\dots,n$» viser at strukturen er sett. Å skrive ut alle betingelsene tar tid uten å gi mer uttelling.",
    },
    {
      question: "Når gir verdisammenligningen en global konklusjon?",
      options: ["Når kurven er lukket og begrenset", "Alltid, uansett bibetingelse", "Bare når det finnes ett kandidatpunkt", "Bare når $\\lambda>0$"],
      explanation: "Da finnes både største og minste punkt, og de ligger blant kandidatene. På en ubegrenset kurve kan ytterpunkter mangle helt.",
    },
    {
      question: "Hva gir $2x(y-\\lambda)=0$?",
      options: ["$x=0$ eller $y=\\lambda$", "Bare tilfellet $x=0$", "Bare tilfellet $y=\\lambda$", "Ingen løsning når $\\lambda>0$"],
      explanation: "Et produkt er null når én av faktorene er det, og begge grener må undersøkes. Å hoppe over den ene er en vanlig måte å miste kandidater på.",
    },
    {
      question: "Hva er største verdi av $f=xy$ på $x^2+y^2=8$?",
      options: ["$4$", "$8$", "$-4$", "$2$"],
      explanation: "Kandidatene er $(\\pm2,\\pm2)$ med verdier $4$ og $-4$, og den største er $4$. Verdien $8$ er selve radiuskvadratet, ikke en funksjonsverdi.",
    },
    {
      question: "Har $\\max\\ x+y$ under $xy=4$ en global maksimumsverdi?",
      options: ["Nei, hyperbelen er ubegrenset", "Ja, verdien er $4$", "Ja, verdien er $-4$", "Nei, det finnes ingen kandidatpunkter"],
      explanation: "Langs $y=4/x$ vokser $x+4/x$ over alle grenser når $x\\to\\infty$. Punktet $(2,2)$ er et lokalt minimum på den positive grenen, ikke et maksimum.",
    },
    {
      question: "Hvor mange likninger har et $n$-variabelt Lagrange-system?",
      options: ["$n+1$", "$n$", "$2n$", "$n-1$"],
      explanation: "Én betingelse per variabel pluss bibetingelsen. Ukjente er $x_1,\\dots,x_n$ og $\\lambda$, altså like mange.",
    },
    {
      question: "Hva er $x_i^*$ når $Q=(x_1\\cdots x_n)^{1/n}$ skal nå $\\bar Q$ med like faktorpriser?",
      options: ["$\\bar Q$ for alle $i$", "$\\bar Q/n$ for alle $i$", "$n\\bar Q$ for alle $i$", "$\\bar Q^{1/n}$ for alle $i$"],
      explanation: "Symmetrien gir like verdier, og da er $Q=(x^n)^{1/n}=x$. Produksjonskravet leses dermed rett av.",
    },
    {
      question: "Hvorfor faller den samlede gevinsten $n\\ln(m/(np))$ når $n$ synker med fast $m$?",
      options: ["Fordi logaritmen er konkav", "Fordi prisen $p$ stiger", "Fordi $\\lambda$ blir negativ", "Fordi budsjettet blir mindre"],
      explanation: "Første enhet i hver sektor er verdt mer enn den sjette, så spredning lønner seg. Budsjettet er uendret — det er fordelingen som blir dårligere.",
    },
    {
      question: "Hva er den vanligste regnefeilen i symmetriske $n$-variabel-oppgaver?",
      options: ["At faktoren $n$ glemmes", "At $\\lambda$ settes lik null", "At logaritmen deriveres feil", "At prisene byttes om i brøken"],
      explanation: "Med $n$ like verdier blir summen $n$ ganger den ene, og det er lett å skrive bare én. Kontrollen $pnx_i^*=m$ fanger det på tre sekunder.",
    },
  ],
  'econ1100-8-5': [
    {
      question: "Hva er steg 1 i løsningsoppskriften for en LG-oppgave?",
      options: ["Identifisere $F$ og $g$", "Derivere målfunksjonen", "Finne verdien av $\\lambda$", "Sette opp et fortegnsskjema"],
      explanation: "Uten å vite hva som er $F$ og hva som er $g$, blir alt som følger galt. Definisjonsområdet skrives ned i samme steg.",
    },
    {
      question: "Hva er $x^*$ for $\\max\\ \\ln x+\\ln y$ under $3x+5y=90$?",
      options: ["$15$", "$9$", "$18$", "$30$"],
      explanation: "Formelen $x^*=m/(2p_1)$ gir $90/6=15$. Verdien $9$ er $y^*$, som kommer av $m/(2p_2)$.",
    },
    {
      question: "Hva er $x^*$ for $\\max\\ 2\\ln x+3\\ln y$ under $4x+5y=100$?",
      options: ["$10$", "$12$", "$20$", "$25$"],
      explanation: "Budsjettandelen er $a/(a+b)=2/5$, altså 40 kroner, delt på prisen 4. Verdien $12$ er $y^*$.",
    },
    {
      question: "Hva blir tangeringsbetingelsen for $\\max\\ x^{1/3}y^{2/3}$ under $x+4y=90$?",
      options: ["$x=2y$", "$y=2x$", "$x=4y$", "$x=y$"],
      explanation: "Deling av FOB gir $\\frac12\\cdot\\frac{y}{x}=\\frac14$, altså $x=2y$. Svaret $x=4y$ forveksler tangeringsbetingelsen med prisforholdet alene.",
    },
    {
      question: "Har $U=\\sqrt{x}+\\sqrt{y}$ faste budsjettandeler?",
      options: ["Nei, andelene avhenger av prisene", "Ja, halvparten på hvert av godene", "Ja, andelene er alltid $1/3$ og $2/3$", "Nei, det finnes ikke noe optimum"],
      explanation: "Faste andeler kjennetegner Cobb-Douglas, og en sum av kvadratrøtter er noe annet. For $x+4y=20$ blir andelene $4/5$ og $1/5$.",
    },
    {
      question: "Hva er den minimale kostnaden når $Q=x_1^{1/2}x_2^{1/2}$, $c_1=2$, $c_2=8$ og $\\bar Q=10$?",
      options: ["$80$", "$40$", "$100$", "$160$"],
      explanation: "Formelen $C^*=2\\bar Q\\sqrt{c_1c_2}$ gir $2\\cdot 10\\cdot 4=80$. Verdien $40$ er utgiften på én av de to faktorene.",
    },
    {
      question: "Hva er $\\lambda$ i det samme kostnadsproblemet?",
      options: ["$8$", "$4$", "$16$", "$80$"],
      explanation: "Formelen $\\lambda=2\\sqrt{c_1c_2}$ gir $2\\cdot 4=8$, altså grensekostnaden. Totalkostnaden $80$ er noe annet enn kostnaden per ekstra enhet.",
    },
    {
      question: "Hva er $x_i^*$ når fire likestilte tiltak deler 96 millioner til pris 3 per enhet?",
      options: ["$8$", "$24$", "$32$", "$12$"],
      explanation: "Symmetrien gir $x_i^*=m/(np)=96/12=8$. Verdien $24$ kommer av å glemme faktoren $n$ i bibetingelsen.",
    },
    {
      question: "Hvordan begrunnes symmetri i en $n$-variabel-oppgave?",
      options: ["Løst for $x_i$ står ingen $i$ igjen", "Ved å regne ut alle $n$ verdiene", "Ved at $\\lambda$ er positiv", "Ved at alle prisene er positive"],
      explanation: "De $n$ betingelsene er identiske likninger i hver sin variabel. To setninger holder, men de må stå der.",
    },
    {
      question: "Hvilken rot forkastes i $\\max\\ \\ln x+\\ln y$ under $x+y^2=27$?",
      options: ["$y=-3$, fordi $\\ln y$ krever $y>0$", "$y=3$, fordi den ikke løser FOB (2)", "$x=18$, fordi den bryter bibetingelsen", "Ingen — begge røttene er gyldige"],
      explanation: "Definisjonsområdet utelukker den negative roten, og forkastingen må skrives ut. Dette er feilkatalogens #11.",
    },
    {
      question: "Hva er største verdi av $f=2x+3y$ på $x^2+y^2=13$?",
      options: ["$13$", "$-13$", "$5$", "$26$"],
      explanation: "Kandidatene er $(2,3)$ og $(-2,-3)$ med verdier $13$ og $-13$. Sirkelen er lukket og begrenset, så rangeringen gir et globalt svar.",
    },
    {
      question: "Hva skjer med tangeringsbetingelsen hvis $U$ erstattes med $\\ln U$?",
      options: ["Den blir uendret", "Den snus om", "Den får en faktor $1/U$", "Den blir uløselig"],
      explanation: "Kjerneregelen gir faktoren $1/U$ i både teller og nevner, og den stryker seg. Nyttetall er en rangering, så optimum flytter seg ikke.",
    },
    {
      question: "Hvilket fortegn har $dC^*/dc_2$ i et kostnadsminimeringsproblem?",
      options: ["Positivt, det er $x_2^*$", "Negativt, det er $-x_2^*$", "Null, kostnaden er uendret", "Positivt, det er $\\lambda$"],
      explanation: "Dyrere innsatsfaktorer gir høyere kostnad, og størrelsen er mengden bedriften bruker. Minustegnet hører til prisderiverte i konsumentproblemet.",
    },
    {
      question: "Hva bør du gjøre hvis elimineringen blir rotete etter fem minutter?",
      options: ["Sjekke om en brøk er snudd", "Begynne på en annen oppgave", "Sette $\\lambda=1$", "Bruke en andreordensbetingelse"],
      explanation: "Snudd brøk i tangeringsbetingelsen er den vanligste årsaken til at regningen løper løpsk. Indeks 1 skal stå i telleren på begge sider.",
    },
  ],
  'econ1100-9-1': [
    {
      question: "Hva er førsteordensbetingelsen for $\\max_N\\ pF(N)-wN$?",
      options: ["$p\\,F'(N)=w$", "$F'(N)=w$", "$p\\,F(N)=w$", "$p\\,F'(N)=wN$"],
      explanation: "Profitten deriveres: $\\pi'(N)=pF'(N)-w=0$. Distraktoren $F'(N)=w$ er den vanligste fellen — den sammenligner en varemengde med kroner. $pF(N)=w$ mangler derivasjonen helt.",
    },
    {
      question: "Hva krever andreordensbetingelsen i profittmaksimeringen?",
      options: ["At $F''(N)\\le 0$", "At $F''(N)\\ge 0$", "At $F'(N)\\le 0$", "At $pF'(N)\\ge 0$"],
      explanation: "$\\pi''(N)=pF''(N)$, og med $p>0$ styres fortegnet av $F''$ alene. $F''\\ge 0$ ville gitt konveks profitt og dermed minimum; $F'\\le 0$ ville betydd at flere arbeidere gir mindre produksjon.",
    },
    {
      question: "Avhenger andreordensbetingelsen av produktprisen $p$?",
      options: ["Nei — $\\pi''=pF''$ har fortegn fra $F''$", "Ja — høy $p$ gjør betingelsen oppfylt", "Ja — betingelsen lyder $pF''\\le p$", "Nei — men den avhenger av lønna $w$"],
      explanation: "Med $p>0$ er $\\pi''\\le 0$ nøyaktig når $F''\\le 0$: betingelsen er en egenskap ved teknologien. Prisen avgjør hvor kandidatpunktet ligger, ikke om det er et maksimum; $w$ faller helt bort i andrederiverten.",
    },
    {
      question: "Hva er $N^*$ når $F(N)=AN^{a}$ med $0<a<1$?",
      options: ["$\\left(\\frac{paA}{w}\\right)^{\\frac{1}{1-a}}$", "$\\left(\\frac{w}{paA}\\right)^{\\frac{1}{1-a}}$", "$\\left(\\frac{paA}{w}\\right)^{\\frac{1}{a-1}}$", "$\\left(\\frac{pA}{w}\\right)^{\\frac{1}{1-a}}$"],
      explanation: "Fra $paAN^{a-1}=w$ følger $N^{1-a}=paA/w$. De to midterste snur brøken eller eksponenten — begge gir en etterspørsel som stiger med lønna. Den siste glemmer faktoren $a$ fra derivasjonen.",
    },
    {
      question: "$F(N)=10\\sqrt N$, $p=20$ og $w=5$. Hva er $N^*$?",
      options: ["$N^*=400$", "$N^*=20$", "$N^*=100$", "$N^*=1600$"],
      explanation: "Betingelsen $100/\\sqrt N=5$ gir $\\sqrt N=20$, altså $N=400$. Alternativet 20 stopper ved $\\sqrt N$ uten å kvadrere, og 100 forveksler telleren med svaret.",
    },
    {
      question: "Hva er $\\mathrm{El}_w N^*$ for teknologien $F(N)=AN^{a}$?",
      options: ["$-\\dfrac{1}{1-a}$", "$-\\dfrac{1}{1+a}$", "$\\dfrac{1}{1-a}$", "$-(1-a)$"],
      explanation: "Etterspørselen er $N^*=Cw^{-1/(1-a)}$, og potensregelen leser elastisiteten av som eksponenten. Positivt fortegn ville betydd at bedriften ansetter flere når lønna stiger.",
    },
    {
      question: "Hvilken lønnselastisitet gir teknologien $F(N)=3N^{2/3}$?",
      options: ["$-3$", "$-2$", "$-\\tfrac23$", "$-\\tfrac13$"],
      explanation: "Formelen $-1/(1-a)$ med $a=2/3$ gir $-1/(1/3)=-3$. Alternativet $-2/3$ leser av eksponenten i produktfunksjonen i stedet for i etterspørselsfunksjonen, som er den vanligste forvekslingen.",
    },
    {
      question: "Hva kalles størrelsen $p\\,F'(N)$?",
      options: ["Grenseinntektsproduktet", "Gjennomsnittsproduktet", "Grenseproduktet", "Grensekostnaden"],
      explanation: "Det er verdien i kroner av det den neste arbeideren produserer. Grenseproduktet er $F'(N)$ alene, målt i varemengde, og gjennomsnittsproduktet er $F(N)/N$.",
    },
    {
      question: "Hvorfor har $F(N)=AN$ ingen indre profittmaksimum?",
      options: ["Fordi $\\pi=(pA-w)N$ er lineær i $N$", "Fordi $F'(N)$ ikke lar seg regne ut", "Fordi $F''(N)>0$ for alle $N>0$", "Fordi $N$ må være et positivt tall"],
      explanation: "Grenseproduktet er konstant, så betingelsen blir $pA=w$ og inneholder ikke $N$ i det hele tatt. $F''=0$ her, ikke positiv — det er fraværet av avtakende grenseprodukt som ødelegger, ikke konveksitet.",
    },
    {
      question: "Lønna stiger. Hvilken begrunnelse for at $N^*$ faller holder?",
      options: ["$F'(N^*)=w/p$ stiger, og $F'$ er avtakende", "$F'(N^*)=w/p$ stiger, og $F'$ er voksende", "$w$ står med minus i $\\pi$, altså faller $N^*$", "Profitten faller, så sysselsettingen følger med ned"],
      explanation: "Argumentet går gjennom monotonien til $F'$: høyere $w/p$ krever høyere grenseprodukt, og det fås bare ved lavere $N$. At profitten faller er sant, men sier ingenting om $N^*$ — det er ikke en begrunnelse.",
    },
    {
      question: "Hva utgjør lønnskostnaden $wN^*$ når $F(N)=AN^{a}$?",
      options: ["$a\\cdot pF(N^*)$", "$(1-a)\\,pF(N^*)$", "$pF(N^*)$", "$a\\cdot F(N^*)$"],
      explanation: "Innsatt fra betingelsen blir $wN^*=paA(N^*)^{a}$, altså andelen $a$ av salgsinntekten. Andelen $1-a$ er profittens del, og $a\\cdot F(N^*)$ har mistet prisen $p$.",
    },
    {
      question: "Hva er den maksimale profitten for $F(N)=AN^{a}$?",
      options: ["$(1-a)\\,pA(N^*)^{a}$", "$a\\,pA(N^*)^{a}$", "$(1-a)\\,pA(N^*)^{a-1}$", "$(1-a)\\,wA(N^*)^{a}$"],
      explanation: "Salgsinntekten er $pA(N^*)^{a}$ og lønnskostnaden andelen $a$ av den, så resten er $1-a$. Svaret $a\\,pA(N^*)^{a}$ bytter om de to andelene, mens varianten med eksponenten $a-1$ og varianten med $w$ i stedet for $p$ roter med henholdsvis eksponenten og prisen.",
    },
    {
      question: "Hva er førsteordensbetingelsene når bedriften bruker både $K$ og $N$?",
      options: ["$p\\,F'_K=r$ og $p\\,F'_N=w$", "$p\\,F'_K=w$ og $p\\,F'_N=r$", "$F'_K=r$ og $F'_N=w$", "$p\\,F'_K=p\\,F'_N$ og $r=w$"],
      explanation: "Hver faktor får sin egen betingelse: grenseinntektsproduktet skal møte faktorens egen pris. Svaret $p\\,F'_K=w$ og $p\\,F'_N=r$ bytter om $r$ og $w$, og svaret uten $p$ foran glemmer prisen slik at mengder settes lik kroner.",
    },
    {
      question: "$F(K,N)=K^{1/4}N^{1/4}$, $p=24$ og $r=w=3$. Hva blir $K^*$ og $N^*$?",
      options: ["$K^*=N^*=4$", "$K^*=N^*=2$", "$K^*=N^*=16$", "$K^*=4$ og $N^*=16$"],
      explanation: "Divisjon av de to betingelsene gir $N=K$, og innsatt følger $6K^{-1/2}=3$, altså $K^{1/2}=2$. Alternativet 2 stopper før kvadreringen; symmetrien i eksponentene utelukker ulike verdier.",
    },
    {
      question: "Hva skal Hesse-kontrollen vise i tovariabel-profittmaksimeringen?",
      options: ["$D>0$ og $\\pi''_{KK}<0$", "$D<0$ og $\\pi''_{KK}<0$", "$D>0$ og $\\pi''_{KK}>0$", "$D=0$ og $\\pi''_{KN}>0$"],
      explanation: "$D=\\pi''_{KK}\\pi''_{NN}-(\\pi''_{KN})^2>0$ utelukker sadelpunkt, og negativ $\\pi''_{KK}$ skiller maksimum fra minimum. $D<0$ gir sadelpunkt, og $D=0$ gir ingen konklusjon.",
    },
    {
      question: "Hvordan kontrollerer du at $N^*$ er riktig regnet ut?",
      options: ["Sett $N^*$ inn i $p\\,F'(N)=w$", "Sjekk at $F(N^*)$ er et positivt tall", "Sjekk at $\\pi(N^*)$ er større enn $w$", "Sjekk at $F'(N^*)$ er større enn $w$"],
      explanation: "Kontrollen som alltid virker er å sette svaret tilbake i betingelsen det kom fra. De andre tester størrelser som kan være riktige uten at $N^*$ er det — i optimum er dessuten $F'(N^*)=w/p$, ikke større enn $w$.",
    },
    {
      question: "Kan $\\pi^*>0$ selv om den siste arbeideren akkurat betaler for seg?",
      options: ["Ja — de tidligere arbeiderne tilførte mer enn $w$", "Nei — i optimum er profitten alltid nøyaktig null", "Ja — fordi prisen $p$ alltid er større enn lønna $w$", "Nei — med mindre grenseproduktet er voksende i $N$"],
      explanation: "Grenseproduktet er avtakende, så $F'(N)>F'(N^*)$ for alle $N<N^*$: alt før den siste enheten ga mer enn den kostet. Sammenligningen av $p$ og $w$ er meningsløs — de måler ulike ting.",
    },
  ],
  'econ1100-9-2': [
    {
      question: "Hva er tangeringsbetingelsen i kostnadsminimering?",
      options: ["$\\dfrac{MP_K}{MP_L}=\\dfrac{r}{w}$", "$\\dfrac{MP_K}{MP_L}=\\dfrac{w}{r}$", "$\\dfrac{MP_K}{MP_L}=\\dfrac{K}{L}$", "$MP_K\\cdot MP_L=r\\cdot w$"],
      explanation: "Deling av de to førsteordensbetingelsene gir kapitalens grenseprodukt over kapitalens pris på begge sider. Den snudde brøken er den vanligste fellen — den ville fått bedriften til å bruke mer av den dyre faktoren.",
    },
    {
      question: "Hva er en isokvant?",
      options: ["En nivåkurve for produktfunksjonen", "En linje med konstant kostnad", "En kurve med konstant faktorprisforhold", "En kurve med konstant profitt"],
      explanation: "Isokvanten samler alle kombinasjoner som gir samme produksjon, altså $F(K,L)=\\bar Y$. Kurven med konstant kostnad er isokostlinjen, som er rett og ikke krum.",
    },
    {
      question: "Hva er helningen til isokostlinjen $rK+wL=c$ i et diagram med $L$ vannrett?",
      options: ["$-w/r$", "$-r/w$", "$-rw$", "$-c/r$"],
      explanation: "Løser du for $K$, får du $K=c/r-(w/r)L$. Gir du fra deg én enhet arbeid, sparer du $w$ kroner, og for dem får du $w/r$ enheter kapital.",
    },
    {
      question: "Hva er faktorforholdet $K/L$ i optimum for $F=K^{a}L^{b}$?",
      options: ["$\\dfrac{a}{b}\\cdot\\dfrac{w}{r}$", "$\\dfrac{b}{a}\\cdot\\dfrac{w}{r}$", "$\\dfrac{a}{b}\\cdot\\dfrac{r}{w}$", "$\\dfrac{a}{b}\\cdot\\dfrac{w}{r}\\cdot\\bar Y$"],
      explanation: "Tangeringsbetingelsen $\\tfrac{a}{b}\\cdot\\tfrac{L}{K}=\\tfrac{r}{w}$ løses for $K/L$. Eksponenten $a$ følger $w$ kryssvis, og produksjonskravet inngår ikke — det bestemmer nivået, ikke blandingen.",
    },
    {
      question: "$F=K^{1/2}L^{1/2}$, $r=4$, $w=9$ og $\\bar Y=60$. Hva er $K^*$?",
      options: ["$K^*=90$", "$K^*=40$", "$K^*=60$", "$K^*=135$"],
      explanation: "Betingelsen gir $L=\\tfrac49 K$, og innsatt blir $\\tfrac23 K=60$. Svaret 40 er $L^*$ — å bytte om de to er lett når eksponentene er like store.",
    },
    {
      question: "Hva skjer med $K^*$ og $L^*$ hvis både $r$ og $w$ dobles?",
      options: ["Ingenting — bare prisforholdet betyr noe", "Begge halveres, siden alt er dyrere", "Begge dobles, siden budsjettet må opp", "$K^*$ faller og $L^*$ stiger"],
      explanation: "Mengdene avhenger av prisene bare gjennom $r/w$, og den brøken er uendret. Kostnaden dobles derimot: etterspørselen er homogen av grad 0 i prisene, kostnadsfunksjonen av grad 1.",
    },
    {
      question: "Hva er kostnadsandelen til kapital for $F=K^{a}L^{b}$?",
      options: ["$\\dfrac{a}{a+b}$", "$\\dfrac{b}{a+b}$", "$\\dfrac{a}{b}$", "$\\dfrac{ar}{a+b}$"],
      explanation: "Tangeringsbetingelsen gir $wL^*=\\tfrac{b}{a}rK^*$, og andelen følger direkte. Svaret $\\frac{b}{a+b}$ er arbeidskraftens andel, og prisene inngår ikke — de påvirker mengdene, ikke andelene.",
    },
    {
      question: "Hva blir $MP_K/MP_L$ for CES-teknologien $\\left(K^{\\gamma}+L^{\\gamma}\\right)^{\\alpha/\\gamma}$?",
      options: ["$\\left(\\dfrac{K}{L}\\right)^{\\gamma-1}$", "$\\left(\\dfrac{K}{L}\\right)^{\\gamma}$", "$\\dfrac{\\alpha}{\\gamma}\\left(\\dfrac{K}{L}\\right)^{\\gamma-1}$", "$\\left(\\dfrac{L}{K}\\right)^{\\gamma-1}$"],
      explanation: "Både $\\alpha$ og hele parentesen er felles faktorer og forkortes bort. At $\\alpha$ blir stående er den vanligste slurvefeilen, og $\\left(\\frac{L}{K}\\right)^{\\gamma-1}$ snur faktorforholdet.",
    },
    {
      question: "Hva er substitusjonselastisiteten for CES-teknologien?",
      options: ["$\\sigma=\\dfrac{1}{\\gamma-1}$", "$\\sigma=\\dfrac{1}{1+\\gamma}$", "$\\sigma=\\gamma-1$", "$\\sigma=\\dfrac{\\alpha}{\\gamma-1}$"],
      explanation: "Den leses av som eksponenten i $K/L=(r/w)^{1/(\\gamma-1)}$. Kontrollen er grensetilfellet $\\gamma\\to 0$, som skal gi tallverdi 1 — Cobb-Douglas. Skalaparameteren $\\alpha$ inngår ikke.",
    },
    {
      question: "CES-teknologi med $\\gamma=\\tfrac12$. Hva er $\\sigma$?",
      options: ["$-2$", "$-\\tfrac12$", "$2$", "$-\\tfrac23$"],
      explanation: "Formelen $1/(\\gamma-1)$ med $\\gamma=1/2$ gir $1/(-1/2)=-2$. Alternativet $-1/2$ setter inn $\\gamma$ i stedet for å regne ut nevneren først.",
    },
    {
      question: "Hvilken $\\gamma$-verdi gir Cobb-Douglas som grensetilfelle?",
      options: ["$\\gamma\\to 0$", "$\\gamma=1$", "$\\gamma\\to-\\infty$", "$\\gamma=\\tfrac12$"],
      explanation: "Grensen $\\gamma\\to 0$ gir tallverdi 1 på substitusjonselastisiteten, som er nettopp Cobb-Douglas. $\\gamma=1$ gir perfekte substitutter med rett isokvant, og $\\gamma\\to-\\infty$ gir ingen substitusjon.",
    },
    {
      question: "Hvordan vokser kostnaden med $\\bar Y$ når $F$ er homogen av grad $k$?",
      options: ["Som $\\bar Y^{1/k}$", "Som $\\bar Y^{k}$", "Som $k\\bar Y$", "Som $\\bar Y^{k-1}$"],
      explanation: "Skal produksjonen ganges med $t$, må faktorene ganges med $t^{1/k}$, og kostnaden følger mengdene. Å bruke $k$ i stedet for $1/k$ snur konklusjonen om stordriftsfordeler helt om.",
    },
    {
      question: "Teknologien har $k=\\tfrac75$. Hva skjer med kostnaden når produksjonen dobles?",
      options: ["Den ganges med $2^{5/7}\\approx 1{,}64$", "Den ganges med $2^{7/5}\\approx 2{,}64$", "Den ganges med $\\tfrac75\\cdot 2=2{,}8$", "Den ganges med nøyaktig $2$"],
      explanation: "Kostnadseksponenten er $1/k=5/7$, ikke $k$. Med $k>1$ er det økende skalautbytte, så kostnaden må vokse saktere enn produksjonen — alle de tre andre svarene er større enn 2 eller lik 2.",
    },
    {
      question: "Hva forteller en høy tallverdi på $\\sigma$?",
      options: ["At faktorene lett erstatter hverandre", "At teknologien har stordriftsfordeler", "At produksjonskravet er høyt satt", "At kapital er dyrere enn arbeid"],
      explanation: "Substitusjonselastisiteten måler hvor mye faktorforholdet svarer på prisforholdet. Skalautbyttet styres av $\\alpha$ og er en helt uavhengig egenskap i CES-familien.",
    },
    {
      question: "Hvilken begrunnelse holder for at $K/L$ er uavhengig av $\\bar Y$?",
      options: ["Produksjonskravet inngår ikke i tangeringsbetingelsen", "Fordi $K^*$ og $L^*$ begge er proporsjonale med $\\bar Y$", "Fordi kostnadsandelene er faste tall", "Fordi kostnaden er homogen av grad 1"],
      explanation: "Betingelsen $MP_K/MP_L=r/w$ inneholder bare priser og eksponenter, så forholdet er låst uten at kravet nevnes. Proporsjonaliteten gjelder bare ved konstant skalautbytte og er derfor et for smalt argument.",
    },
    {
      question: "Hva er den økonomiske tolkningen av $\\lambda$ i kostnadsminimeringen?",
      options: ["Grensekostnaden $dC/d\\bar Y$", "Kostnadsandelen til kapital", "Grenseproduktet av arbeid", "Prisforholdet $r/w$ i optimum"],
      explanation: "Multiplikatoren måler hva det koster å måtte levere én enhet mer, altså skyggeprisen på produksjonskravet. Det er samme omhyllingslogikk som i kap. 8.3, men målt i kroner per produsert enhet.",
    },
    {
      question: "Hva mangler hvis du stopper etter å ha funnet $K/L$?",
      options: ["Innsettingen i produksjonskravet", "Utregningen av grenseproduktene", "Kontrollen av andreordensbetingelsen", "Beregningen av substitusjonselastisiteten"],
      explanation: "Faktorforholdet gir bare blandingen, ikke nivået — oppgaven er ubesvart uten $F(K,L)=\\bar Y$. Det er samme felle som å glemme budsjettbetingelsen i konsumentproblemet.",
    },
  ],
  'econ1100-9-3': [
    {
      question: "Hva er $dN^*/dw$ når $pF'(N^*)=w$?",
      options: ["$\\dfrac{1}{p\\,F''(N^*)}$", "$\\dfrac{1}{F''(N^*)}$", "$\\dfrac{p}{F''(N^*)}$", "$-\\dfrac{1}{p\\,F''(N^*)}$"],
      explanation: "Implisitt derivasjon gir $pF''(N^*)\\cdot dN^*/dw=1$. Prisen står i nevneren fordi den er med i venstresiden; det ekstra minustegnet i $-\\frac{1}{p\\,F''(N^*)}$ ville snudd fortegnet til positivt.",
    },
    {
      question: "Hvorfor er $dN^*/dw$ negativ?",
      options: ["Fordi $F''<0$ i et maksimum", "Fordi lønna $w$ alltid er positiv", "Fordi grenseproduktet $F'$ er positivt", "Fordi profitten faller når $w$ stiger"],
      explanation: "Nevneren $pF''$ er negativ nettopp fordi maksimum krever avtakende grenseprodukt. At profitten faller er sant, men sier ingenting om retningen på sysselsettingen.",
    },
    {
      question: "Hva går galt hvis du behandler $N^*$ som en konstant i derivasjonen?",
      options: ["Du får $0=1$", "Du får riktig svar med feil fortegn", "Du får $dN^*/dw=0$", "Du får $F''=0$"],
      explanation: "Venstresiden blir konstant, så den deriverte er null, mens høyresiden gir 1. Umuligheten er selve varselsignalet om at kjerneregelen mangler — samme forglemmelse som feil #3.",
    },
    {
      question: "Hva er fortegnet på $dN^*/dp$ når $F'>0$ og $F''<0$?",
      options: ["Positivt", "Negativt", "Null", "Ubestemt uten mer informasjon"],
      explanation: "Uttrykket er $-F'(N^*)/(pF''(N^*))$: negativ teller delt på negativ nevner. Høyere produktpris gjør den neste arbeiderens produksjon mer verdt, så bedriften utvider.",
    },
    {
      question: "$F(N)=6N^{2/3}$, $p=2$, $w=4$. Hva er $N^*$?",
      options: ["$N^*=8$", "$N^*=2$", "$N^*=4$", "$N^*=16$"],
      explanation: "Betingelsen $8N^{-1/3}=4$ gir $N^{1/3}=2$. Alternativet 2 stopper ved $N^{1/3}$ uten å opphøye i tredje potens.",
    },
    {
      question: "Hva er $\\mathrm{El}_w N^*$ uttrykt ved teknologien alene?",
      options: ["$\\dfrac{F'(N^*)}{N^*F''(N^*)}$", "$\\dfrac{F''(N^*)}{N^*F'(N^*)}$", "$\\dfrac{pF'(N^*)}{N^*F''(N^*)}$", "$\\dfrac{F'(N^*)}{F''(N^*)}$"],
      explanation: "Sett $w=pF'(N^*)$ inn i $\\tfrac{w}{N^*}\\cdot\\tfrac{dN^*}{dw}$, og $p$ forkortes bort. At prisen forsvinner er hele poenget: elastisiteten avhenger bare av teknologien.",
    },
    {
      question: "$F(N)=AN^{a}$ med $a=\\tfrac13$. Er faktoretterspørselen elastisk?",
      options: ["Ja — tallverdien er $\\tfrac32$", "Nei — tallverdien er $\\tfrac13$", "Nei — tallverdien er $\\tfrac23$", "Ja — tallverdien er $3$"],
      explanation: "Elastisiteten er $-1/(1-a)=-3/2$, og tallverdien over 1 betyr elastisk. Alternativene som oppgir $a$ eller $1-a$ leser av feil sted i uttrykket.",
    },
    {
      question: "En arbeidsgiveravgift $t$ legges på lønna. Hvordan endres førsteordensbetingelsen?",
      options: ["$pF'(N)=w(1+t)$", "$pF'(N)=w-t$", "$p(1+t)F'(N)=w$", "$pF'(N)=wt$"],
      explanation: "Avgiften øker bedriftens kostnad per enhet arbeid, og bare den. Å legge faktoren på produktprisen ville derimot beskrevet en avgift på salget, som virker motsatt vei.",
    },
    {
      question: "Hva er $\\mathrm{El}_w K^*$ i betinget faktoretterspørsel for $F=K^{a}L^{b}$?",
      options: ["$\\dfrac{b}{a+b}$", "$-\\dfrac{b}{a+b}$", "$\\dfrac{a}{a+b}$", "$-\\dfrac{a}{a+b}$"],
      explanation: "Kapitalbruken stiger når arbeid blir dyrere, så fortegnet er positivt — bedriften bytter faktor langs isokvanten. Uttrykket med $a$ i telleren er elastisiteten for arbeidskraften i stedet.",
    },
    {
      question: "Hvorfor stiger $K^*$ når $w$ stiger, mens $N^*$ falt i profittmaksimeringen?",
      options: ["Fordi produksjonen er låst av $\\bar Y$", "Fordi kapital alltid er billigere enn arbeid", "Fordi kostnadsfunksjonen er homogen av grad 1", "Fordi tangeringsbetingelsen snur fortegn"],
      explanation: "Med et bindende produksjonskrav er substitusjon den eneste tilpasningen som finnes. I profittmaksimering kan bedriften i tillegg krympe hele produksjonen, og da dominerer den effekten.",
    },
    {
      question: "Hva skjer med $K^*$ og $L^*$ når både $r$ og $w$ dobles?",
      options: ["Ingenting — de er homogene av grad 0", "Begge dobles — de er homogene av grad 1", "Begge halveres — de er homogene av grad $-1$", "Bare $K^*$ endres, siden $r$ steg"],
      explanation: "Tangeringsbetingelsen inneholder prisene bare gjennom $r/w$, som er uendret, og produksjonskravet inneholder ingen priser. Kostnaden dobles derimot, siden den er homogen av grad 1.",
    },
    {
      question: "Teknologien er homogen av grad $k$. Hvordan skalerer $K^*$ med $\\bar Y$?",
      options: ["Som $\\bar Y^{1/k}$", "Som $\\bar Y^{k}$", "Alltid proporsjonalt med $\\bar Y$", "Som $k\\bar Y$"],
      explanation: "Skal produksjonen ganges med $t$, må faktorene ganges med $t^{1/k}$. Proporsjonalitet gjelder bare i spesialtilfellet $k=1$, altså konstant skalautbytte.",
    },
    {
      question: "Hva blir $dN^*/dw$ hvis $F''(N^*)=0$?",
      options: ["Udefinert — nevneren er null", "Null, siden $F''$ står i telleren", "Uendelig stor, men negativ", "Lik $1/p$ etter forkorting"],
      explanation: "Divisjon med null er ikke tillatt. Det er ikke bare et teknisk problem: med konstant grenseprodukt finnes ingen indre løsning å drive komparativ statikk på i det hele tatt.",
    },
    {
      question: "Hvilken kontroll avslører raskest en feil i en Cobb-Douglas-utregning?",
      options: ["Kostnadsandelene mot eksponentene", "At begge mengder er positive tall", "At kostnaden er større enn null", "At $K^*$ er ulik $L^*$ i verdi"],
      explanation: "Andelen $rK^*/C$ skal bli $a/(a+b)$, og avvik peker rett på regnefeilen. De andre er oppfylt av nesten enhver utregning, riktig eller gal.",
    },
    {
      question: "Hva betyr formuleringen «bestem fortegnet på $dN^*/dw$» i en oppgavetekst?",
      options: ["At argumentet er svaret, ikke tallverdien", "At du skal regne ut den eksakte verdien", "At du skal tegne en figur av $N^*(w)$", "At du skal sette inn to lønnsverdier"],
      explanation: "Sensor ber om fortegnsanalysen: hvilke ledd som er positive og negative, og hvorfor. Å sette inn tallverdier er den samme fellen som feil #1 i randløsningsargumentet.",
    },
    {
      question: "Hvorfor kan førsteordensbetingelsen deriveres med hensyn på $w$?",
      options: ["Fordi den holder for enhver verdi av $w$", "Fordi $N^*$ er konstant i $w$", "Fordi $F$ er deriverbar to ganger", "Fordi $w$ står alene på høyresiden"],
      explanation: "Betingelsen er en identitet i parameteren — bedriften tilpasser seg slik at den holder uansett lønn. At $F$ er glatt er nødvendig, men det er identiteten som gjør grepet lovlig.",
    },
  ],
};

export default quizData_econ1100;
