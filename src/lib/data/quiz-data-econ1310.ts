import type { QuizQuestion } from './quiz-data';

const quizData_econ1310: Record<string, QuizQuestion[]> = {
  'econ1310-0-1': [
    {
      question: "Hvor stor andel av settet utgjør den store modelloppgaven i den faste ECON1310-malen fra V2023?",
      options: ["50–60 %", "omtrent 20–30 %", "20–25 %", "10 %"],
      explanation: "Modelloppgaven er den tyngst vektede delen og utgjør 50–60 %. Kortsvarsdelen er 20–30 % og den verbale drøftingen/casen 20–25 %.",
    },
    {
      question: "Hvilke to temaer har 100 % forekomst på de 22 analyserte eksamenssettene?",
      options: ["Keynes-modellen/multiplikator og Phillips-kurven", "Finanspolitikk og nasjonalregnskapets tall", "Valutakurs og arbeidsmarked i alle 22 sett", "Likviditetsfelle og Ricardiansk ekvivalens, som begge har 100 % forekomst på de 22 settene"],
      explanation: "Keynes-modellen/multiplikator og Phillips-kurven kommer i alle sett (100 %). Finanspolitikk (77 %) og nasjonalregnskap (68 %) er hyppige, men ikke garantert. Likviditetsfelle (18 %) og Ricardiansk ekvivalens (14 %) er sjeldne nivå 3-temaer.",
    },
    {
      question: "Hvordan behandler ECON1310-eksamen IS-LM, AD-AS og Solow-modellen?",
      options: ["De har 0 forekomster på 22 sett og er bevisst utelatt fra eksamenskjernen", "De er de tre mest testede modellene i eksamenskjernen", "De inngår alltid i den store modelloppgaven som tilbudssidens sentrale vekstmodeller", "De testes bare i den verbale drøftingsdelen, aldri i den matematiske modelloppgaven"],
      explanation: "IS-LM, AD-AS og Solow har null forekomster på alle settene og er bevisst holdt utenfor. ECON1310 bruker i stedet trelikningsmodellen IS-RR-PK og Phillips-kurven for tilbudssiden.",
    },
    {
      question: "En kortsvarsoppgave ber om «fortegnet på $\\Delta Y$». Hva gir best uttelling ifølge sensorens metaregler?",
      options: ["Svare kort med fortegnet og en linje begrunnelse", "Levere en halv side full utledning for å vise alt du kan", "Sette opp hele IS-RR-PK-diagrammet i stedet for å svare med ord på fortegnet", "Drøfte alle politikkresponser på sjokket"],
      explanation: "Metaregel 1 sier: ikke svar på mer enn det spørres om. En full utledning gir null ekstra uttelling og stjeler tid. Svar knapt og presist, og gå videre.",
    },
    {
      question: "Hva er sensorens regel for den verbale drøftingsoppgaven (sjanger L)?",
      options: ["Den skrives uten matematikk, med økonomisk resonnement i ord", "Den skal underbygges med minst tre utledede ligninger, slik at hvert verbale poeng er matematisk forankret", "Den skal alltid ende i en tallfestet multiplikator", "Den skal bruke IS-LM-diagrammet for å vise likevekten i pengemarkedet"],
      explanation: "Metaregel 5: drøftingen skrives uten matematikk. Ligninger i et sjanger L-svar leses som at du ikke forsto at oppgaven var verbal. Poenget er mekanismer forklart i ord.",
    },
    {
      question: "Hvilken oppgavesjanger er alltid tyngst vektet fordi den er kjernen i den store modelloppgaven?",
      options: ["E — komparativ statikk («vis matematisk»)", "C — telleregel", "B — BNP-klassifisering av transaksjoner i nasjonalregnskapet", "A — kortsvar/begrepsavklaring med presise definisjoner"],
      explanation: "Sjanger E, komparativ statikk der du «viser matematisk» virkningen av en eksogen endring, er selve kjernen i modelloppgaven og alltid tyngst vektet. Telleregel (C) og BNP-klassifisering (B) er små kortsvarssjangre.",
    },
    {
      question: "Hva kjennetegner en A/B-besvarelse sammenlignet med en C/D-besvarelse?",
      options: ["Fortegnsubestemthet, dekomponering, kobling på tvers og liten-åpen-økonomi-perspektiv", "Bare at flere regnesteg er tatt med, slik at en lengre utledning av multiplikatoren alene løfter karakteren", "At svaret er levert med farger, pene diagrammer og en fullstendig matematisk utledning av hvert steg", "At alle oppgaver er besvart, uansett kvalitet, slik at bredden i besvarelsen teller mer enn presisjonen"],
      explanation: "C/D betyr korrekt multiplikator og riktige skift. A/B krever i tillegg mer presis økonomisk tenkning: fortegnsubestemthet, dekomponering, kobling mellom modellene og liten-åpen-økonomi-perspektiv — ikke nødvendigvis flere regnesteg.",
    },
    {
      question: "Du har 240 minutter og en del som vektes 25 %. Hvor mye tid bør den delen få ifølge metaregelen om tidsprioritering?",
      options: ["Cirka 60 minutter", "Rundt 120 min", "Rundt 90 min", "Rundt 30 min"],
      explanation: "Metaregel 4: prioriter tiden etter vektene. $0{,}25 \\cdot 240 = 60$ minutter. Vektene fungerer som tidsbudsjett.",
    },
    {
      question: "Hva er det mest sannsynlige innholdet i den store modelloppgaven på neste sett, ifølge prognosen?",
      options: ["Et etterspørselssjokk gjennom tilvekstform → følgestørrelser → diagram, ev. et kostnadssjokk til slutt", "En ren utledning av Solow-vekstmodellen med konvergens mot steady state og den gylne sparingsregelen for kapital", "En AD-AS-analyse av et tilbudssjokk, der den kortsiktige tilbudskurven skiftes og virkningen på pris og produksjon leses av", "En IS-LM-analyse av pengepolitikk, der pengemengden økes og likevekten i pengemarkedet bestemmer renten og dermed BNP"],
      explanation: "Prognosen er et etterspørselssjokk ført gjennom tilvekstform, videre til følgestørrelser og diagram, muligens avsluttet med et kostnadssjokk. Solow, AD-AS og IS-LM er bevisst utenfor eksamenskjernen.",
    },
    {
      question: "Hvordan bør leseplanen prioritere Del 2 (Keynes/multiplikator) og Del 5 (Phillips-kurven / IS-RR-PK)?",
      options: ["De må sitte perfekt — det er 100 %-temaene og hjertet i modelloppgaven", "De må bare kunnes på oversiktsnivå", "De er nivå 3-temaer man tar helt til slutt", "De kan hoppes over hvis man behersker drøftingsdelen"],
      explanation: "Del 2 og Del 5 er «må perfekt»: de dekker 100 %-temaene og er kjernen i den tyngst vektede modelloppgaven. Del 1/3/4/6 er «må kunne», mens likviditetsfelle og Ricardiansk ekvivalens er nivå 3.",
    },
  ],
  'econ1310-1-1': [
    {
      question: "Hva viser generalbudsjettligningen $Y = C + I + G + X - Q$?",
      options: ["Hvordan samlet produksjon (BNP) fordeler seg på anvendelser i en åpen økonomi", "Hvordan statens budsjett fordeler seg på utgiftsposter", "Hvordan husholdningenes inntekt fordeler seg på konsum og sparing", "Hvordan BNP fordeler seg mellom lønn til arbeidskraften og avkastning til eierne av kapitalen"],
      explanation: "Generalbudsjettligningen viser anvendelsessiden av BNP: produksjonen $Y$ går til konsum, investering, offentlige kjøp og nettoeksport.",
    },
    {
      question: "Hva blir generalbudsjettligningen i en lukket økonomi?",
      options: ["$Y = C + I + G$", "$Y = C + I + G + X$", "$Y = C + I + G - Q$", "$Y = C + S$"],
      explanation: "I en lukket økonomi er det ingen handel med utlandet, så eksport $X$ og import $Q$ faller bort.",
    },
    {
      question: "Hvordan regner vi ut bruttoproduktet i en næring?",
      options: ["Produksjonsverdi minus produktinnsats", "Produksjonsverdi pluss samlet produktinnsats", "Produktinnsats minus produksjonsverdi, der innsatsvarene er hovedstørrelsen", "Produksjonsverdi minus lønnskostnader, siden det er lønningene som skal trekkes fra"],
      explanation: "Bruttoprodukt = produksjonsverdi − produktinnsats. Vi trekker fra produktinnsatsen for å unngå dobbelttelling.",
    },
    {
      question: "Hvorfor trekker vi fra produktinnsatsen når vi regner BNP fra produksjonssiden?",
      options: ["For å unngå å telle den samme verdien flere ganger (dobbelttelling)", "Fordi produktinnsats ikke er reell verdiskaping", "Fordi produktinnsats regnes som import", "For å justere for prisstigning"],
      explanation: "Produktinnsatsen er allerede skapt som verdi i andre næringer. Uten fradraget teller vi den to ganger.",
    },
    {
      question: "Hva måler BNP?",
      options: ["Verdien av all produksjon innenfor landets grenser i løpet av et år", "Inntekten landets innbyggere tjener, uansett hvor i verden", "Bare produksjonen i markedsrettede næringer", "Verdien av landets samlede formue ved årets utgang"],
      explanation: "BNP er knyttet til geografi: all produksjon *innenfor* landets grenser, uansett hvem som eier produksjonsfaktorene.",
    },
    {
      question: "Hvilke tre sider kan BNP måles fra?",
      options: ["Produksjonssiden, inntektssiden og anvendelsessiden", "Tilbuds-, etterspørsels- og pengemarkedssiden", "Privat sektor, offentlig sektor og utlandet", "Konsum, sparing og investering"],
      explanation: "BNP kan måles fra produksjons-, inntekts- og anvendelsessiden, som per definisjon gir samme tall.",
    },
    {
      question: "Hva er sammenhengen mellom BNP og BNI?",
      options: ["BNI = BNP + netto formuesinntekter og lønn fra utlandet", "BNI = BNP − offentlige kjøp, slik at statens kjøp av varer og tjenester trekkes ut av inntektsmålet", "BNI = BNP + import − eksport − lønn til utlandet", "BNI = BNP − produktinnsats, slik at næringenes bruk av innsatsvarer trekkes fra en gang til"],
      explanation: "BNI korrigerer BNP for netto formuesinntekter og lønn fra utlandet, og måler inntekten som tilfaller innbyggerne.",
    },
    {
      question: "Et land har BNP på 4 000 mrd. og netto formuesinntekter fra utlandet på 120 mrd. Hva er BNI?",
      options: ["4 120 mrd.", "om lag 3 880 mrd.", "4 000 mrd.", "120 mrd."],
      explanation: "BNI = BNP + netto formuesinntekter = $4000 + 120 = 4120$ mrd.",
    },
    {
      question: "Hva skiller BNP fra BNI mest presist?",
      options: ["BNP måler produksjon innenfor grensene; BNI måler inntekt til innbyggerne", "BNP teller offentlig sektor; BNI bare privat verdiskaping", "BNP er før skatt; BNI er etter skatt, slik at forskjellen mellom dem er skattene staten krever inn", "BNP gjelder étt år, mens BNI summerer inntekten over flere år og derfor dekker et lengre tidsrom"],
      explanation: "BNP er et geografisk produksjonsmål; BNI er et inntektsmål for landets innbyggere.",
    },
    {
      question: "Hva er disponibel inntekt for Norge?",
      options: ["BNI korrigert for netto løpende overføringer til og fra utlandet", "BNP minus skatt, slik at det landet kan bruke er produksjonen fratrukket skattene staten krever inn", "Husholdningenes inntekt etter skatt og stønader", "BNP pluss statens budsjettoverskudd og netto overføringer fra utlandet"],
      explanation: "Disponibel inntekt for Norge er BNI justert for netto løpende overføringer over landegrensene – det landet samlet kan bruke til konsum og sparing.",
    },
    {
      question: "Hvordan verdsettes offentlig ikke-markedsrettet produksjon i BNP?",
      options: ["Til faktorinnsatsen (kostnadene ved å produsere tjenesten)", "Til markedsprisen for tilsvarende private tjenester i samme bransje", "Den holdes utenfor BNP fordi den er gratis og dermed mangler en markedspris å verdsette produksjonen til", "Til det brukerne ville vært villige til å betale – en anslått betalingsvilje framfor faktiske kostnader"],
      explanation: "Uten marked finnes ingen markedspris, så verdien settes lik faktorinnsatsen – i hovedsak lønn, produktinnsats og kapitalslit.",
    },
    {
      question: "Hvorfor inngår gratis sykehustjenester likevel i BNP?",
      options: ["Fordi de er reell produksjon og en del av landets verdiskaping", "Fordi staten betaler moms på dem, og momsen gir tjenestene en registrert markedsverdi i BNP", "Fordi de finansieres over skatteseddelen, og skatteinntektene er det som gir tjenestene verdi i BNP", "De inngår ikke – bare markedsrettet produksjon teller"],
      explanation: "Ikke-markedsrettet produksjon er reell verdiskaping og skal med i BNP, verdsatt til kostnadene.",
    },
    {
      question: "En kommune driver en gratis grunnskole. Hvordan får skolen verdi i BNP?",
      options: ["Verdien settes lik kostnadene (lønn, produktinnsats, kapitalslit)", "Verdien settes lik private skolers skolepenger", "Skolen får ingen verdi siden tjenesten er gratis", "Verdien settes lik statens overføringer til kommunen"],
      explanation: "Som andre ikke-markedsrettede offentlige tjenester verdsettes skolen til faktorinnsatsen – kostnadene ved å drive den.",
    },
    {
      question: "Hva er potensielt BNP?",
      options: ["Produksjonen ved langsiktig opprettholdbar utnyttelse av arbeidskraft og kapital", "Det høyeste BNP økonomien noen gang kan nå ved full utnyttelse av alle ressurser i økonomien", "Gjennomsnittlig BNP de siste ti årene, slik at potensialet blir et historisk snitt av faktisk produksjon", "BNP i det året med lavest arbeidsledighet, slik at potensialet settes lik toppnivået fra sterkeste høykonjunktur"],
      explanation: "Potensielt BNP er et bærekraftig nivå uten press på pris- og lønnsvekst – ikke et maksimum.",
    },
    {
      question: "Hva kan øke potensielt BNP?",
      options: ["Arbeidsinnvandring", "En kortvarig økning i etterspørselen", "Høyere prisstigning, som løfter produksjonskapasiteten varig", "En midlertidig renteøkning"],
      explanation: "Potensielt BNP øker ved større tilgang på produksjonsfaktorer eller høyere produktivitet – for eksempel arbeidsinnvandring, mer kapital eller produktivitetsvekst.",
    },
    {
      question: "Hva er produksjonsgapet?",
      options: ["Forskjellen mellom faktisk BNP og potensielt BNP", "Forskjellen mellom BNP og BNI per innbygger", "Forskjellen mellom eksport og import, slik at gapet måler nettoeksporten i økonomien", "Forskjellen mellom samlet sparing og samlet realinvestering"],
      explanation: "Produksjonsgapet måler hvor langt faktisk BNP ligger fra potensielt BNP; positivt gap tyder på høgkonjunktur.",
    },
    {
      question: "Hva kjennetegner en realinvestering?",
      options: ["Den øker beholdningen av realkapital, som bygninger og maskiner", "Den er kjøp av aksjer og obligasjoner, slik at verdipapirkjøp regnes som økt realkapital", "Den flytter bare kjøpekraft mellom aktører i økonomien", "Den er innskudd i banken, slik at sparepenger på konto teller som ny realkapital i økonomien"],
      explanation: "Realinvestering øker realkapitalen. Kjøp av fordringer er derimot finansinvestering.",
    },
    {
      question: "Hva er en finansinvestering?",
      options: ["Kjøp av finansielle fordringer som aksjer, obligasjoner eller bankinnskudd", "Kjøp av maskiner og bygninger", "Bygging av ny infrastruktur", "Offentlig kjøp av varer og tjenester (G)"],
      explanation: "En finansinvestering er kjøp av fordringer og skaper ingen ny realkapital i seg selv.",
    },
    {
      question: "Inngår en finansinvestering (for eksempel aksjekjøp) direkte i BNP?",
      options: ["Nei, den skaper ingen ny produksjon eller realkapital", "Ja, den regnes som en del av bruttoinvesteringene $I$ i BNP", "Ja, den regnes som husholdningenes konsum $C$", "Ja, den regnes som offentlige kjøp $G$ og teller med på anvendelsessiden av BNP"],
      explanation: "BNP måler produksjon. En finansinvestering flytter bare kjøpekraft mellom aktører og er ikke ny produksjon.",
    },
    {
      question: "Hva er summen av alle sektorenes netto finansinvesteringer i en lukket økonomi?",
      options: ["Null", "Lik samlet realinvestering", "Lik BNP", "Lik samlet sparing"],
      explanation: "Enhver fordring er en annens gjeld, så summert over alle innenlandske sektorer blir netto finansinvesteringer null.",
    },
    {
      question: "Hva følger av at netto finansinvesteringer er null i en lukket økonomi?",
      options: ["Samlet sparing er lik samlet realinvestering: $S = I$", "Samlet sparing er null; alt konsumeres", "Samlet realinvestering er null", "Eksport er lik import, slik at handelen med utlandet balanserer i en lukket økonomi"],
      explanation: "Når ingen kan låne til eller fra utlandet, må all innenlandsk sparing finansiere innenlandsk realinvestering, så $S = I$.",
    },
    {
      question: "En åpen økonomi har $C = 2000$, $I = 500$, $G = 700$, $X = 900$ og $Q = 600$. Hva er BNP?",
      options: ["3 500", "om lag 4 700", "2 900", "3 800"],
      explanation: "$Y = C + I + G + X - Q = 2000 + 500 + 700 + 900 - 600 = 3500$.",
    },
    {
      question: "Hvorfor trekkes importen $Q$ fra i generalbudsjettligningen?",
      options: ["Fordi importerte varer inngår i $C$, $I$ og $G$ uten å være innenlandsk produksjon", "Fordi import alltid er større enn eksport, slik at fradraget retter opp et permanent handelsunderskudd", "Fordi import er en finansinvestering, og finansinvesteringer skaper ingen produksjon og må derfor trekkes fra", "Fordi importerte varer ikke skaper innenlandsk verdiskaping"],
      explanation: "$C$, $I$ og $G$ inneholder importerte varer. Siden BNP kun skal måle innenlandsk produksjon, må importen trekkes fra.",
    },
    {
      question: "Hva regnes IKKE som en del av offentlige kjøp $G$?",
      options: ["Overføringer som pensjoner og stønader", "Kommunens kjøp av skoletjenester og læremidler", "Statens kjøp av forsvarsmateriell, siden militært utstyr ikke er kjøp av produksjon", "Offentlig investering i veier"],
      explanation: "$G$ er kjøp av varer og tjenester. Overføringer er ikke kjøp av produksjon og inngår derfor ikke i $G$.",
    },
    {
      question: "Hva er den vanligste feilen når man skriver kortsvar (sjanger A) om nasjonalregnskap?",
      options: ["Å skrive utflytende og for langt – 2–3 presise setninger holder", "Å bruke for få formler i definisjonen, slik at svaret blir svakt fordi den matematiske utledningen mangler", "Å ta med for mange talleksempler, slik at kortsvaret trekkes ned av konkrete regnestykker", "Å blande sammen BNP og BNI i selve definisjonen"],
      explanation: "På sjanger A gir lengre svar ikke ekstra uttelling. To–tre presise setninger er målet.",
    },
  ],
  'econ1310-1-2': [
    {
      question: "En familie kjøper en brukt leilighet for 4 000 000 kr. Hvor mye av dette inngår i BNP?",
      options: ["0 kr — leiligheten ble produsert i en tidligere periode", "4 000 000 kr som realinvestering i bolig", "4 000 000 kr som konsum", "2 000 000 kr, altså halvparten av verdien, siden selger og kjøper deler verdiskapingen"],
      explanation: "Bruktsalg produserer ingenting nytt i perioden, så selve boligverdien inngår ikke i BNP.",
    },
    {
      question: "Eiendomsmegleren tar 2 % provisjon ved salg av en bolig til 4 000 000 kr. Hva inngår i BNP?",
      options: ["80 000 kr som konsum — en produsert tjeneste", "0 kr — provisjonen er bare et gebyr, ikke produksjon av noe nytt", "80 000 kr som realinvestering, siden honoraret knytter seg til kjøp av en bolig", "4 080 000 kr — hele boligverdien pluss meglerhonoraret regnes som produksjon i perioden"],
      explanation: "Meglerhonoraret ($2\\% \\cdot 4\\,000\\,000 = 80\\,000$) er en formidlingstjeneste produsert i perioden og inngår som konsum.",
    },
    {
      question: "Et byggefirma selger et nytt bolighus til en familie for 5 000 000 kr. Hvordan klassifiseres dette?",
      options: ["Realinvestering (I): 5 000 000 kr", "Konsum (C): 5 000 000 kr", "Inngår ikke — rent boligsalg", "Offentlig kjøp (G): 5 000 000 kr, siden boligbygging er regulert av det offentlige"],
      explanation: "Nye boliger regnes som realinvestering, ikke konsum, selv om en husholdning kjøper.",
    },
    {
      question: "En investor kjøper aksjer for 300 000 kr. Hvor mye inngår i BNP?",
      options: ["0 kr — det er en formuesomplassering", "300 000 kr som realinvestering", "300 000 kr som konsum", "300 000 kr som import"],
      explanation: "Kjøp av verdipapirer bytter bare formuens form; ingen ny produksjon, så det inngår ikke i BNP.",
    },
    {
      question: "Investoren betaler 600 kr i kurtasje for aksjekjøpet. Hva skjer med kurtasjen?",
      options: ["Den inngår som konsum — en produsert meglertjeneste", "Den inngår ikke, som resten av aksjehandelen", "Den inngår som realinvestering, siden kurtasjen er en del av kjøpet av aksjene", "Den trekkes fra som import, fordi meglertjenesten kjøpes fra en utenlandsk børs"],
      explanation: "Kurtasjen er betaling for en finansiell tjeneste utført i perioden og inngår i BNP.",
    },
    {
      question: "En norsk husholdning kjøper en strømmetjeneste fra en utenlandsk tilbyder for 1 800 kr. Hvordan føres beløpet?",
      options: ["Som import (Q) — en egen post som trekkes fra", "Som negativt konsum, altså minus 1 800 kr i posten C", "Som eksport (X)", "Det inngår ikke i noen post, siden tjenesten verken produseres eller konsumeres i Norge"],
      explanation: "Tjenesten er produsert i utlandet og føres som import — en egen post, aldri som «minus konsum».",
    },
    {
      question: "Et norsk selskap eksporterer fisk for 10 000 000 kr til utlandet. Hvor mye inngår i BNP?",
      options: ["10 000 000 kr — full verdi som eksport", "0 kr, fordi kjøperen er utenlandsk", "5 000 000 kr, halve verdien", "10 000 000 kr som import"],
      explanation: "Eksport inngår til full verdi fordi produksjonen skjedde innenlands, uansett hvem som kjøper.",
    },
    {
      question: "En kommune betaler en lærer 600 000 kr i årslønn. Hvordan klassifiseres dette i BNP?",
      options: ["Offentlig konsum (G): 600 000 kr", "Inngår ikke — lønn er bare en overføring", "Konsum (C): 600 000 kr", "Realinvestering (I): 600 000 kr, siden kommunen bygger opp undervisningskapasitet"],
      explanation: "Offentlig tjenesteproduksjon uten markedspris verdsettes til produksjonskostnaden, her lønnen, og føres som offentlig konsum.",
    },
    {
      question: "En bruktbilforhandler kjøper en bil for 150 000 kr og selger den for 175 000 kr. Hva inngår i BNP?",
      options: ["Forhandleravansen på 25 000 kr som konsum", "Hele salgsverdien på 175 000 kr", "0 kr — alt er bruktsalg", "150 000 kr i innkjøpspris"],
      explanation: "Selve bilen er brukt og teller ikke, men avansen (25 000 kr) er forhandlerens produserte tjeneste og inngår.",
    },
    {
      question: "Bedrift A selger en brukt maskin direkte til bedrift B for 300 000 kr uten mellommann. Hvor mye inngår i BNP?",
      options: ["0 kr — bruktsalg uten produsert tjeneste", "300 000 kr som realinvestering", "300 000 kr som konsum", "150 000 kr som avanse"],
      explanation: "Maskinen ble produsert tidligere og det finnes ingen mellommann/tjeneste, så ingenting inngår.",
    },
    {
      question: "Et offentlig sykehus har drifts- og lønnskostnader på 80 000 000 kr og behandler pasienter gratis. Hva inngår i BNP?",
      options: ["80 000 000 kr som offentlig konsum", "0 kr — tjenesten er gratis for pasienten", "80 000 000 kr som realinvestering i sykehusets drift og bemanning", "80 000 000 kr som privat konsum (C), verdsatt til produksjonskostnaden"],
      explanation: "Ikke-markedsrettede offentlige tjenester verdsettes til produksjonskostnad og føres som offentlig konsum (G).",
    },
    {
      question: "En familie steller sin egen hage. Tilsvarende gartnerarbeid ville kostet 15 000 kr. Hva inngår i BNP?",
      options: ["0 kr — ubetalt egenproduksjon teller ikke", "15 000 kr som konsum", "15 000 kr som offentlig konsum", "15 000 kr i beregnet verdi"],
      explanation: "Ubetalt husarbeid/egenproduksjon omsettes ikke i markedet og regnes ikke med i BNP.",
    },
    {
      question: "En nordmann kjøper en ny bil importert fra utlandet for 400 000 kr. Hva blir nettobidraget til norsk BNP (se bort fra norsk avanse)?",
      options: ["0 kr — konsum inn, import ut", "400 000 kr som konsum", "400 000 kr som realinvestering i varige forbruksgoder", "−400 000 kr, fordi det er import"],
      explanation: "Beløpet føres som konsum (+400 000) og trekkes ut som import (−400 000), så nettobidraget til norsk BNP er 0.",
    },
    {
      question: "Hvorfor trekkes import fra i uttrykket $Y = C + I + G + X - Q$?",
      options: ["Fordi C, I, G og X inneholder varer produsert i utlandet", "Fordi import reduserer husholdningenes konsum", "Fordi import er en form for sparing", "Fordi importvarer er dyrere enn innenlandske og dermed blåser opp verdien av $C$, $I$ og $G$"],
      explanation: "BNP skal bare måle innenlandsk produksjon, så den importerte delen som ligger i C, I, G og X må trekkes ut.",
    },
    {
      question: "Hva er det avgjørende spørsmålet når du skal avgjøre om en transaksjon inngår i BNP?",
      options: ["Produseres noe nytt i perioden?", "Er beløpet stort nok?", "Er det en husholdning som betaler regningen?", "Skjer betalingen med kort eller kontant?"],
      explanation: "BNP måler verdiskaping i inneværende periode; om det produseres noe nytt nå avgjør alltid klassifiseringen.",
    },
    {
      question: "Hvilket beløp gjelder som forhandlerens verdiskaping når en brukt vare selges videre med fortjeneste?",
      options: ["Avansen — differansen mellom salgs- og innkjøpspris", "Hele salgsverdien, altså hele beløpet kjøperen betaler forhandleren", "Hele innkjøpsprisen, altså beløpet forhandleren selv betalte for varen", "0 kr, siden varen er brukt og talt med før"],
      explanation: "Ved videresalg av brukte varer er det avansen, ikke hele salgsverdien, som utgjør den produserte tjenesten.",
    },
    {
      question: "En investor selger obligasjoner for 500 000 kr og betaler 250 kr i gebyr. Hva inngår i BNP?",
      options: ["250 kr (gebyret) som konsum; obligasjonssalget teller ikke", "500 000 kr som formuesomplassering", "500 250 kr, altså hele beløpet inkludert både obligasjonssalget og gebyret", "0 kr, både obligasjonssalget og gebyret faller helt utenfor BNP"],
      explanation: "Salg av verdipapirer er formuesomplassering (0 kr), men gebyret er en produsert finansiell tjeneste som inngår.",
    },
    {
      question: "Hva kreves for at et svar på klassifiseringsoppgaven skal gi full uttelling?",
      options: ["Kategori, beløp og en kort begrunnelse", "Bare ja eller nei på om det inngår", "Bare riktig kategori, uten beløp eller begrunnelse", "Bare riktig beløp, uten kategori eller begrunnelse"],
      explanation: "Oppgaven krever eksplisitt både kategori, kronebeløp og begrunnelse; «ja» uten beløp gir ikke full uttelling.",
    },
    {
      question: "En familie får bygget et nytt hus for 6 000 000 kr og selger sitt gamle hus for 4 000 000 kr via megler med 1,5 % provisjon. Hva er samlet bidrag til BNP?",
      options: ["6 060 000 kr — nybygg pluss meglerhonorar", "10 000 000 kr — begge boligverdiene til sammen", "6 000 000 kr — bare nybygget", "10 060 000 kr — begge boligverdiene og meglerhonoraret til sammen"],
      explanation: "Nybygget (6 000 000, realinvestering) og meglerhonoraret ($1{,}5\\% \\cdot 4\\,000\\,000 = 60\\,000$, konsum) teller; salget av det gamle huset gir 0.",
    },
    {
      question: "Hva er den vanligste feilen i klassifiseringsoppgaven?",
      options: ["Å glemme at honoraret/avansen inngår selv når objektet ikke gjør det", "Å ta med for mange transaksjoner", "Å regne eksport til full verdi", "Å føre offentlige tjenester som privat konsum (C)"],
      explanation: "Typisk tap av poeng: man ser at bruktbolig/aksje ikke teller, men glemmer at den tilknyttede tjenesten (honorar, kurtasje, avanse) inngår.",
    },
  ],
  'econ1310-1-3': [
    {
      question: "Hva er pengenes tre funksjoner?",
      options: ["Betalingsmiddel, måleenhet og verdioppbevaring", "Betalingsmiddel, kreditt og verdilager", "Måleenhet, verdioppbevaring og styringsrente som sentralbankens virkemiddel", "Betalingsmiddel, pant og risikopremie"],
      explanation: "Penger defineres gjennom tre funksjoner: betalingsmiddel (byttemiddel), måleenhet (verdimål) og verdioppbevaring (verdilager).",
    },
    {
      question: "Hva betyr det at penger fungerer som måleenhet?",
      options: ["At priser og verdier uttrykkes i en felles enhet, så verdier kan sammenlignes", "At penger aksepteres som endelig oppgjør ved ethvert kjøp", "At penger kan spares i dag og brukes senere, slik at kjøpekraft flyttes fra én periode til en annen", "At penger gir eierandel i selskaper, med rett til utbytte og stemmerett på generalforsamlingen"],
      explanation: "Som måleenhet (verdimål) gjør penger at vi kan uttrykke priser i en felles enhet og sammenligne verdien av ulike varer direkte.",
    },
    {
      question: "Hvilken pengefunksjon svekkes av høy inflasjon?",
      options: ["Verdioppbevaring", "Byttemiddelet", "Måleenhet", "Kredittgiving"],
      explanation: "Ved høy inflasjon taper pengene kjøpekraft over tid, slik at funksjonen som verdioppbevaring svekkes.",
    },
    {
      question: "Hva er en obligasjon?",
      options: ["Et omsettelig, rentebærende gjeldsbrev der investoren er kreditor", "En eierandel i et selskap med fast rett til utbytte og tilbakebetaling", "Et innskudd i sentralbanken som bankene får styringsrente på opp til en kvote", "En sikkerhet långiveren får i en eiendel"],
      explanation: "En obligasjon er et omsettelig, rentebærende gjeldsbrev. Investoren låner utsteder penger og er kreditor, ikke eier.",
    },
    {
      question: "Hva er en aksje?",
      options: ["En eierandel i et selskap med rett til utbytte og stemmerett", "Et rentebærende gjeldsbrev med fast kupong, der hovedstolen betales tilbake ved forfall", "Et lån banken gir en bedrift, der banken mottar renter og avdrag, men ingen eierandel", "En obligasjon utstedt av staten, med fast rente og innløsning til pålydende ved forfall"],
      explanation: "En aksje er en eierandel som gir rett til utbytte, stemmerett og begrenset ansvar, men usikker avkastning.",
    },
    {
      question: "Hvem får dekket kravene sine først når en bedrift går konkurs?",
      options: ["Obligasjonseierne, fordi de er kreditorer", "Aksjonærene, fordi eierne har prioritet foran kreditorene i boet", "Aksjonærene, fordi stemmeretten gir dem førsteprioritet på selskapets midler", "Obligasjonseierne – begrenset ansvar"],
      explanation: "Kreditorer, som obligasjonseiere, har prioritet foran eierne. Aksjonærene kommer sist og taper ofte hele innskuddet.",
    },
    {
      question: "Hva er hovedforskjellen mellom gjeldsfinansiering og egenkapitalfinansiering?",
      options: ["Gjeld gir kreditor med renteplikt uten eierandel; egenkapital gir ny eier uten renteplikt", "Gjeld gir eierandel; egenkapital gir fast rente", "Gjeld gir ingen renteplikt; egenkapital skal tilbakebetales med renter", "Gjeld utvanner eierne; egenkapital gir fast renteforpliktelse"],
      explanation: "Gjeld er lån med fast renteplikt uten eierrettigheter, mens egenkapital gir nye eiere uten renteplikt, men med utvanning av eierandel.",
    },
    {
      question: "Hvorfor regnes en statsobligasjon som en investering med lav risiko?",
      options: ["Fordi staten har svært høy kredittverdighet og lav sjanse for mislighold", "Fordi den gir investoren en eierandel i staten", "Fordi den alltid gir høyest mulig rente, slik at investoren får både lav risiko og størst avkastning", "Fordi den alltid er sikret med pant i statens eiendommer"],
      explanation: "Staten kan skattlegge og har liten sannsynlighet for mislighold, så investoren får med stor sikkerhet rente og hovedstol tilbake — derfor lav risiko og lav rente.",
    },
    {
      question: "Hva er bankenes viktigste rolle i finanssystemet?",
      options: ["Kredittformidling: å kanalisere sparing fra innskytere til låntakere", "Å fastsette styringsrenten og inflasjonsmålet", "Å utstede statsobligasjonene som finansierer underskuddet på statsbudsjettet", "Å bestemme inflasjonsmålet som pengepolitikken skal styre mot på mellomlang sikt"],
      explanation: "Bankenes hovedoppgave er kredittformidling: de tar imot innskudd og låner pengene videre ut til husholdninger og bedrifter.",
    },
    {
      question: "Hva er styringsrenten?",
      options: ["Renten bankene får på innskudd i sentralbanken opp til en kvote", "Den faste renten en obligasjonsutsteder betaler eierne", "Bankens utlånsrente til publikum", "Forskjellen mellom utlåns- og innskuddsrente"],
      explanation: "Styringsrenten (folio-/reserverenten) er renten bankene får på innskudd i sentralbanken og sentralbankens viktigste pengepolitiske virkemiddel.",
    },
    {
      question: "Hva skjer med markedsrentene når sentralbanken hever styringsrenten?",
      options: ["De stiger, fordi bankenes finansiering blir dyrere", "De faller, fordi bankene da får tilført mer reserver og penger", "De påvirkes ikke; bankene setter dem fritt", "De faller, fordi høyere styringsrente senker kredittrisikoen og dermed risikopremien i utlånsrenten"],
      explanation: "Høyere styringsrente gjør bankenes finansiering dyrere, og de velter kostnaden over på kundene ved å heve utlåns- og innskuddsrentene.",
    },
    {
      question: "Hva er kupongrenten på en obligasjon?",
      options: ["Den faste renten utstederen betaler til obligasjonseierne", "Sentralbankens styringsrente, som bankene får på innskudd i sentralbanken opp til en kvote", "Bankens rentemargin, forskjellen mellom bankens utlånsrente og innskuddsrente", "Renten aksjonærene får utbetalt på utbyttet"],
      explanation: "Kupongrenten er den faste renten utsteder betaler eierne underveis. Den må ikke forveksles med styringsrenten.",
    },
    {
      question: "Hva er pant i forbindelse med et lån?",
      options: ["En sikkerhet långiveren får i en eiendel ved mislighold", "Det ekstra rentepåslaget for risiko", "En eierandel i låntakerens selskap", "Renten långiveren betaler låntakeren"],
      explanation: "Pant er en sikkerhet långiveren kan overta og selge dersom låntakeren ikke betaler. God pant senker risikoen og dermed renten.",
    },
    {
      question: "Hva er risikopremien i en lånerente?",
      options: ["Påslaget långiveren krever som kompensasjon for risikoen for tap", "Den delen av renten staten krever inn som skatt", "Sentralbankens styringsrente", "Forskjellen mellom to statsobligasjoner"],
      explanation: "Risikopremien er påslaget i renten som kompenserer for kredittrisikoen. Høyere risiko for mislighold gir høyere risikopremie.",
    },
    {
      question: "Hvorfor har et forbrukslån uten pant høyere rente enn et boliglån med pant?",
      options: ["Fordi manglende sikkerhet gir høyere kredittrisiko og dermed høyere risikopremie", "Fordi forbrukslån alltid er kortere", "Fordi styringsrenten er høyere for forbrukslån", "Fordi boliglån gir banken eierandel i boligen til lånet er nedbetalt"],
      explanation: "Uten pant har långiveren ingen sikkerhet ved mislighold, så kredittrisikoen er høyere og risikopremien — og dermed renten — settes høyere.",
    },
    {
      question: "Hva menes med rentedifferansen (rentemarginen) til en bank?",
      options: ["Forskjellen mellom bankens utlånsrente og innskuddsrente", "Forskjellen mellom styringsrenten og den løpende inflasjonen", "Forskjellen mellom kupongrenten på obligasjoner og sentralbankens styringsrente", "Forskjellen mellom to bankers styringsrenter"],
      explanation: "Rentedifferansen er forskjellen mellom utlåns- og innskuddsrente, og dekker bankens kostnader, tap og fortjeneste.",
    },
    {
      question: "Hva innebærer begrenset ansvar for en aksjonær?",
      options: ["At aksjonæren i verste fall kan tape det innskutte beløpet, men ikke mer", "At aksjonæren personlig hefter for hele selskapets gjeld", "At aksjonæren har fast krav på rente", "At aksjonæren får dekket kravet sitt før kreditorene"],
      explanation: "Begrenset ansvar betyr at aksjonæren kun risikerer det innskutte beløpet og ikke hefter for selskapets øvrige gjeld.",
    },
    {
      question: "For et ungt vekstselskap med usikre inntekter og lite pant — hvilken finansieringsform er ofte best egnet?",
      options: ["Egenkapital, fordi den ikke gir fast renteforpliktelse", "Gjeld, fordi lånerenten alltid blir lavere enn avkastningskravet til nye eiere", "Statsobligasjoner, fordi de har lav risiko og sikker avkastning", "Gjeld, fordi eierne da unngår at eierandelen blir utvannet av nye aksjonærer"],
      explanation: "Uten sikre inntekter og pant blir en fast renteforpliktelse risikabel. Egenkapital gir ingen renteplikt, og de nye eierne deler risikoen.",
    },
    {
      question: "Hva menes med at penger fungerer som betalingsmiddel?",
      options: ["At de aksepteres som oppgjør ved kjøp og salg", "At de måler og sammenligner verdier", "At de kan spares og brukes senere", "At de gir rett til utbytte i et selskap"],
      explanation: "Som betalingsmiddel aksepteres penger som oppgjør ved handel, og fjerner behovet for dobbelt sammenfall av ønsker i en bytteøkonomi.",
    },
    {
      question: "Hva kjennetegner en kreditor sammenlignet med en eier?",
      options: ["Kreditor har krav på rente og tilbakebetaling, men ingen eierrettigheter", "Kreditor har stemmerett og krav på utbytte", "Kreditor får dekket kravet sist, etter aksjonærene", "Kreditor eier en andel av selskapet"],
      explanation: "En kreditor (for eksempel obligasjonseier) har lånt bort penger med krav på rente og tilbakebetaling, prioritet foran eierne, men ingen eierrettigheter.",
    },
  ],
  'econ1310-1-4': [
    {
      question: "Hvilke tre vilkår må være oppfylt for at en person skal regnes som arbeidsledig i AKU?",
      options: ["Uten inntektsgivende arbeid, har aktivt søkt siste fire uker, og kan tiltre raskt", "Uten inntektsgivende arbeid og ønsker seg jobb, uten at det kreves aktiv søking siste fire uker", "Registrert som arbeidssøker hos NAV, mottar dagpenger og har stått uten arbeid i minst fire sammenhengende uker", "Uten fast jobb, men kan ha korttidsengasjementer, og regnes som ledig selv om timene er lønnet"],
      explanation: "Alle tre AKU-vilkårene må gjelde samtidig: uten inntektsgivende arbeid, aktivt søkt de siste fire ukene og tilgjengelig til å tiltre raskt. Å bare 'ønske seg jobb' eller å være NAV-registrert er ikke tilstrekkelig.",
    },
    {
      question: "Hva består arbeidsstyrken av?",
      options: ["Sysselsatte + arbeidsledige", "Hele befolkningen i arbeidsdyktig alder", "Bare de sysselsatte", "Sysselsatte + personer utenfor arbeidsstyrken"],
      explanation: "Arbeidsstyrken er summen av de sysselsatte og de arbeidsledige — de som tilbyr arbeidskraft. Personer utenfor arbeidsstyrken inngår ikke.",
    },
    {
      question: "Hvordan beregnes arbeidsledighetsraten?",
      options: ["Arbeidsledige delt på arbeidsstyrken", "Arbeidsledige delt på hele befolkningen, også dem som står utenfor arbeidsstyrken", "Arbeidsledige delt på antall sysselsatte", "Sysselsatte over arbeidsstyrken"],
      explanation: "Ledighetsraten er de arbeidsledige som andel av arbeidsstyrken (sysselsatte + arbeidsledige). Å dele på hele befolkningen er en klassisk feil som gir et for lavt tall.",
    },
    {
      question: "En økonomi har 2 400 000 sysselsatte og 100 000 arbeidsledige. Hva er arbeidsledighetsraten?",
      options: ["4,0 %", "4,2 %", "10,0 %", "2,4 %"],
      explanation: "Arbeidsstyrken = 2 400 000 + 100 000 = 2 500 000. u = 100 000 / 2 500 000 = 0,04 = 4,0 %.",
    },
    {
      question: "I en økonomi er 1 800 000 sysselsatte og 200 000 arbeidsledige. Hva er ledighetsraten?",
      options: ["10,0 %", "om lag 11,1 %", "9,0 %", "20,0 %"],
      explanation: "Arbeidsstyrken = 1 800 000 + 200 000 = 2 000 000. u = 200 000 / 2 000 000 = 0,10 = 10,0 %. (11,1 % ville man fått ved feilaktig å dele på sysselsatte.)",
    },
    {
      question: "Befolkningen i arbeidsdyktig alder er 5 000 000, arbeidsstyrken er 3 000 000 og 150 000 er arbeidsledige. Hva er ledighetsraten?",
      options: ["5,0 %", "3,0 %", "om lag 2,9 %", "6,0 %"],
      explanation: "Ledighetsraten deler på arbeidsstyrken, ikke befolkningen: u = 150 000 / 3 000 000 = 0,05 = 5,0 %. Å dele på befolkningen (5 mill.) ville gitt feilaktige 3,0 %.",
    },
    {
      question: "Hva kjennetegner friksjonsledighet?",
      options: ["Den skyldes at det tar tid å matche arbeidssøkere med ledige stillinger", "Den skyldes at samlet etterspørsel svikter i en lavkonjunktur, slik at $Y$ faller under $Y^n$", "Den skyldes at de lediges kompetanse og bosted ikke passer de ledige jobbene som finnes", "Den forsvinner helt når økonomien er i full sysselsetting, slik at søketid ikke gir ledighet ved $Y = Y^n$"],
      explanation: "Friksjonsledighet oppstår på grunn av søketid — det tar tid å finne hverandre. Den finnes selv ved full sysselsetting, og skiller seg fra konjunkturledighet (etterspørselssvikt) og strukturledighet (mismatch).",
    },
    {
      question: "Hva er hovedårsaken til strukturledighet?",
      options: ["Mismatch mellom de lediges kvalifikasjoner/bosted og jobbenes krav", "Svak samlet etterspørsel i en lavkonjunktur", "At det tar noen uker med søking å bytte jobb", "At det offentlige kutter i arbeidsmarkedstiltak"],
      explanation: "Strukturledighet skyldes et mismatch — de lediges kompetanse eller geografi passer ikke jobbene som finnes. Etterspørselssvikt gir derimot konjunkturledighet, og kort jobbytte gir friksjonsledighet.",
    },
    {
      question: "Hva forårsaker konjunkturledighet?",
      options: ["Etterspørselssvikt i en lavkonjunktur, der Y < Y^n", "At arbeidssøkere mangler riktig kompetanse for de ledige jobbene", "At det tar tid å søke og få en ny jobb, slik at søketiden i seg selv skaper ledigheten", "At likevektsledigheten stiger over tid"],
      explanation: "Konjunkturledighet skyldes at samlet etterspørsel og produksjon faller under det normale nivået (Y < Y^n), slik at bedriftene trenger færre ansatte. Den stiger i nedgangstider og faller i oppgangstider.",
    },
    {
      question: "En hjørnesteinsbedrift legges ned, og de oppsagte har kompetanse det ikke lenger er etterspørsel etter. Hvilken ledighetstype er dette?",
      options: ["Strukturledighet", "Konjunkturledighet, siden nedleggelsen svekker samlet etterspørsel", "Friksjonsledighet, siden de oppsagte trenger søketid før de får ny jobb", "Likevektsledighet, siden ledigheten består selv når $Y = Y^n$"],
      explanation: "Dette er et kvalifikasjonsmismatch mellom de lediges kompetanse og etterspørselen — altså strukturledighet. Det forveksles ofte med konjunkturledighet, men her er årsaken mismatch, ikke etterspørselssvikt.",
    },
    {
      question: "Hva er likevektsledigheten (u^n)?",
      options: ["Ledighetsnivået økonomien vender tilbake til når Y = Y^n, bestående av friksjons- og strukturledighet", "Ledigheten som oppstår kun under en dyp lavkonjunktur når samlet etterspørsel svikter og produksjonen faller under sitt normale nivå", "Ledigheten målt av NAV framfor av AKU, altså registrerte arbeidssøkere", "Nivået der ledigheten er null, altså uten friksjons- og strukturledighet"],
      explanation: "Likevektsledigheten u^n (naturlig ledighet) er 'gulvet' i ledigheten som består når konjunkturledigheten er borte og Y = Y^n. Den utgjøres av friksjons- og strukturledighet og er ikke null.",
    },
    {
      question: "Ved normal drift (Y = Y^n) er ledigheten 3 %. I en lavkonjunktur stiger den til 7 %. Hvor stor er konjunkturledigheten?",
      options: ["4 %", "7 %", "3 %", "10 %"],
      explanation: "Konjunkturledigheten er faktisk ledighet minus likevektsledighet: 7 % − 3 % = 4 %. Likevektsledigheten (3 %) blir stående igjen selv i gode tider.",
    },
    {
      question: "Hvorfor kan AKU-ledigheten avvike fra NAV-registrert ledighet?",
      options: ["AKU fanger opp alle som oppfyller ILO-vilkårene, mens NAV bare teller dem som har registrert seg som arbeidssøkere", "AKU teller bare dem som mottar dagpenger, mens NAV teller alle uten arbeid uansett aktiv søking", "AKU måler ledighet blant unge, mens NAV måler blant eldre", "Det er ingen reell forskjell; tallene er alltid like"],
      explanation: "AKU er en utvalgsundersøkelse som fanger opp alle som oppfyller ILO-vilkårene, uansett registrering. NAV-tallet teller bare registrerte arbeidssøkere. Derfor er AKU-tallet vanligvis høyere og internasjonalt sammenlignbart.",
    },
    {
      question: "En person ønsker jobb, men har ikke søkt aktivt på et halvt år. Hvordan klassifiseres vedkommende i AKU?",
      options: ["Utenfor arbeidsstyrken", "Arbeidsledig etter ILO-kriteriene", "Sysselsatt", "Undersysselsatt, siden vedkommende ønsker jobb uten å ha søkt aktivt"],
      explanation: "Uten aktivt jobbsøk siste fire uker er ikke 'aktivt søkt'-kriteriet oppfylt. Da regnes personen som utenfor arbeidsstyrken, ikke som arbeidsledig — selv om vedkommende ønsker seg jobb.",
    },
    {
      question: "Hva måler yrkesdeltakelsen (arbeidsstyrkeandelen)?",
      options: ["Arbeidsstyrken som andel av befolkningen i arbeidsdyktig alder", "Arbeidsledige som andel av arbeidsstyrken, altså av sysselsatte pluss arbeidsledige", "Sysselsatte som andel av hele befolkningen i arbeidsdyktig alder (sysselsettingsraten)", "Arbeidsledige som andel av hele befolkningen"],
      explanation: "Yrkesdeltakelsen er arbeidsstyrken (sysselsatte + arbeidsledige) delt på befolkningen i arbeidsdyktig alder, og viser hvor stor del av befolkningen som tilbyr arbeidskraft. Arbeidsledige delt på arbeidsstyrken er derimot ledighetsraten.",
    },
  ],
  'econ1310-1-5': [
    {
      question: "Den nominelle kronekursen $E$ er notert som kroner per euro og stiger fra 11 til 12. Hva har skjedd?",
      options: ["Kronen har svekket seg (depresiert)", "Kronen har styrket seg (appresiert), siden hver euro nå veksles inn i flere kroner", "Realkursen er nødvendigvis uendret, siden prisnivåene $P$ og $P^*$ ikke er endret", "Euroen har svekket seg og blitt mindre verdt i kroner"],
      explanation: "Med prisnotering (kr per euro) betyr en høyere $E$ at hver euro koster flere kroner — altså en svakere krone (depresiering). Det vanligste fortegnsfeilet er å tolke høyere $E$ som sterkere krone.",
    },
    {
      question: "Hva måler realvalutakursen $R = \\frac{E \\cdot P^*}{P}$?",
      options: ["Prisen på utenlandske varer relativt til norske i felles valuta (konkurranseevnen)", "Kun antall kroner per enhet utenlandsk valuta", "Rentedifferansen mot utlandet, altså hvor mye høyere den norske nominelle renten er enn den utenlandske", "Styringsrenten justert for forventet inflasjon, altså realrenten"],
      explanation: "Realkursen setter prisen på en utenlandsk varekurv omregnet til kroner ($E \\cdot P^*$) opp mot den norske ($P$), og måler dermed konkurranseevnen. Den nominelle kursen alene er bare $E$.",
    },
    {
      question: "Kronen svekker seg. Hva skjer med importprisene og norsk inflasjon?",
      options: ["Importvarer blir dyrere i kroner, og inflasjonen presses opp (importert inflasjon)", "Importvarer blir billigere i kroner, og inflasjonen presses ned via lavere importpriser (importert deflasjon)", "Importprisene er upåvirket av kursen, fordi utenlandske varer er priset i kroner og går uendret inn i konsumprisindeksen", "Bare eksportprisene endres, ikke importprisene, så kronesvekkelsen treffer eksportinntektene og lar prisnivået hjemme ligge"],
      explanation: "En svakere krone gjør utenlandske varer dyrere i kroner. Dette løfter prisnivået — importert inflasjon — som i modellen er et kostnadssjokk $z^\\pi > 0$.",
    },
    {
      question: "I hvilket ledd i modellapparatet inngår importert inflasjon fra en kronesvekkelse?",
      options: ["Som et kostnadssjokk $z^\\pi$ i Phillips-kurven", "Som et etterspørselssjokk $z^C$", "Som et investeringssjokk $z^I$", "Som et skattesjokk $z^T$"],
      explanation: "Importert inflasjon kommer fra kostnadssiden (dyrere importvarer) uavhengig av produksjonsgapet, og er derfor et $z^\\pi$-sjokk i Phillips-kurven — ikke et etterspørselssjokk.",
    },
    {
      question: "En kronesvekkelse bedrer eksportkonkurransen. Hvorfor?",
      options: ["Norske varer blir billigere målt i utenlandsk valuta", "Norske varer blir dyrere for utlendinger målt i deres egen valuta", "Importvarer blir billigere i kroner, og den frigjorte kjøpekraften løfter eksportnæringene", "Rentenivået i Norge faller automatisk når kronen svekkes, og billigere lån gjør eksportbedriftene lønnsomme"],
      explanation: "Når kronen svekkes, koster norske varer færre enheter utenlandsk valuta for utenlandske kjøpere. Det gjør norsk eksport mer konkurransedyktig og øker eksportetterspørselen.",
    },
    {
      question: "Hvilke tre størrelser inngår i realvalutakursen?",
      options: ["Nominell kurs $E$, utenlandsk prisnivå $P^*$ og norsk prisnivå $P$", "Bare nominell kurs $E$ og styringsrenten", "Norsk og utenlandsk nominell rente samt inflasjonsmålet", "Eksport $X$, import $Q$ og BNP $Y$"],
      explanation: "Realkursen $R = \\frac{E \\cdot P^*}{P}$ krever alle tre: nominell kurs og begge prisnivåer. Derfor kan realkursen endres selv om $E$ ligger fast.",
    },
    {
      question: "Norsk inflasjon er høyere enn utlandets, mens den nominelle kursen $E$ ligger fast. Hva skjer med konkurranseevnen?",
      options: ["Den svekkes (realkursen faller, real appresiering)", "Den bedres (realkursen stiger, depresiering)", "Den er upåvirket fordi $E$ er uendret, og bare den nominelle kursen betyr noe for konkurranseevnen", "Den kan ikke endres uten at Norges Bank endrer styringsrenten"],
      explanation: "Høyere norsk $P$ i nevneren gjør $R = \\frac{E \\cdot P^*}{P}$ mindre. Norske varer blir relativt dyrere — konkurranseevnen svekkes selv med uendret nominell kurs.",
    },
    {
      question: "Hva sier trilemmaet i pengepolitikken?",
      options: ["Et land kan ha høyst to av: fast kurs, fri kapitalbevegelse og selvstendig pengepolitikk", "Et land må alltid velge fast valutakurs framfor flytende for å sikre fri kapitalbevegelse og prisstabilitet", "Inflasjon, ledighet og vekst kan ikke stabiliseres samtidig, så myndighetene må gi opp minst ett av de tre målene", "Renten, valutakursen og skatten må settes samtidig, slik at penge- og finanspolitikken alltid vedtas i én og samme pakke"],
      explanation: "Trilemmaet (den umulige treenigheten) sier at fast kurs, fri kapital og selvstendig pengepolitikk ikke kan oppnås samtidig — bare to av de tre.",
    },
    {
      question: "Hvilke to hjørner av trilemmaet har Norge valgt?",
      options: ["Fri kapitalbevegelse og selvstendig pengepolitikk (dermed flytende kurs)", "Fast valutakurs og selvstendig pengepolitikk med kapitalkontroll", "Fast kurs og fri kapitalbevegelse (dermed ingen egen rentesetting)", "Kapitalkontroll og fast kurs, altså at kapitalstrømmene begrenses for å holde kronen stabil mot euro"],
      explanation: "Norge har fri kapitalflyt og en selvstendig inflasjonsstyrende sentralbank. Da må den tredje — fast kurs — oppgis, så Norge har flytende kurs.",
    },
    {
      question: "Norges Bank hever renten relativt til utlandet. Hva skjer normalt med kronen?",
      options: ["Kronen appresierer fordi kapital strømmer inn", "Kronen depresierer fordi kapital strømmer ut av landet", "Kursen påvirkes ikke av renteforskjeller, siden kapitalstrømmene styres av handelen alene", "Kronen svekkes fordi eksporten faller"],
      explanation: "En høyere rentedifferanse gjør kroneplasseringer mer attraktive, kapital strømmer inn, etterspørselen etter kroner stiger og kronen appresierer ($E$ faller).",
    },
    {
      question: "Hva menes med at Norge er en «liten åpen økonomi»?",
      options: ["Vi handler mye med utlandet og tar verdensrente og verdenspriser som gitt", "Vi har lukket økonomi uten utenrikshandel, slik at verdensrenten og verdensprisene ikke berører norsk økonomi", "Vi er så store at vi bestemmer verdensrenten og verdensprisene gjennom Norges Bank", "Vi har fast valutakurs mot euro, slik at Norges Bank binder kronen og holder importprisene stabile"],
      explanation: "En liten åpen økonomi handler mye internasjonalt, men er for liten til å påvirke verdensmarkedets priser og renter. Renten virker i stor grad gjennom valutakursen.",
    },
    {
      question: "Hvorfor bryr Norges Bank seg om kronekursen selv med et rent inflasjonsmål?",
      options: ["Kursen påvirker både importert inflasjon og eksportkonkurransen, altså begge sentralbankens hensyn", "Kursen bestemmer skattenivået, siden Norges Bank må tilpasse skattesatsene til kronekursen for å nå inflasjonsmålet", "Sentralbanken har som mål å holde kursen fast, slik at kursmålet erstatter inflasjonsmålet", "Kursen påvirker kun oljeinntektene i statsbudsjettet, ikke inflasjonen"],
      explanation: "Kronekursen virker både på inflasjonen (via importpriser) og på produksjonen (via eksport). Begge inngår i sentralbankens vurdering, derfor er kursen relevant.",
    },
    {
      question: "Realkursen $R = \\frac{E \\cdot P^*}{P}$ stiger (real depresiering). Hva betyr det for konkurranseevnen?",
      options: ["Norske varer blir relativt billigere — konkurranseevnen bedres", "Norske varer blir relativt dyrere i felles valuta — konkurranseevnen svekkes", "Konkurranseevnen er uendret, siden en høyere $R$ løfter norske og utenlandske priser like mye", "Importen blir automatisk dyrere enn eksporten"],
      explanation: "Når $R$ stiger, blir utenlandske varer relativt dyrere og norske relativt billigere i felles valuta — det bedrer konkurranseevnen.",
    },
    {
      question: "Et land vil ha både fast kurs og fri kapitalbevegelse. Hva må det gi opp?",
      options: ["Den selvstendige pengepolitikken (renten må forsvare kursen)", "Fri kapitalbevegelse, slik at landet må innføre kapitalkontroll for å beholde både fast kurs og egen rente", "Inflasjonsmålet, men landet beholder full renteautonomi og pengepolitisk selvstyre", "Ingenting — fast kurs, fri kapitalbevegelse og egen rentesetting kan kombineres samtidig"],
      explanation: "Med fast kurs og fri kapital må renten brukes til å forsvare kursen. Da mister landet muligheten til å sette renten etter innenlandske konjunkturhensyn.",
    },
    {
      question: "En turist fra Norge kjøper varer i utlandet. Hvordan påvirker en svakere krone denne handelen?",
      options: ["Varene blir dyrere i kroner fordi importprisene stiger", "Varene blir billigere i kroner", "Kursen betyr ingenting for hva varene koster", "Varene inngår i norsk eksport"],
      explanation: "En svakere krone (høyere $E$) gjør at samme utenlandske prisbeløp koster flere kroner. Norske kjøp i utlandet blir dyrere — samme mekanisme som for import.",
    },
    {
      question: "Hvilket begrep beskriver forholdet mellom et lands eksport- og importpriser?",
      options: ["Bytteforholdet (terms of trade)", "Realrenten", "Produksjonsgapet mellom faktisk og potensiell BNP", "Reserverenten, altså renten sentralbanken betaler på bankenes reserver"],
      explanation: "Bytteforholdet er forholdet mellom eksport- og importpriser. Det bedres når eksportprisene stiger relativt til importprisene, og påvirkes av valutakursen.",
    },
    {
      question: "Norsk inflasjon er 4 %, utlandets er 1 %, og realkursen holdes konstant. Hva må ha skjedd med den nominelle kursen $E$?",
      options: ["$E$ har steget med om lag 3 % (nominell depresiering)", "$E$ har falt med om lag 3 % (appresiering)", "$E$ er uendret", "$E$ har steget med om lag 5 %"],
      explanation: "Uendret realkurs krever at nominell kurs endres om lag med inflasjonsforskjellen: $\\frac{\\Delta E}{E} \\approx 4\\% - 1\\% = 3\\%$. En kronesvekkelse på 3 % motvirker den høyere norske inflasjonen (relativ kjøpekraftsparitet).",
    },
    {
      question: "Hva er den vanligste tabben på eksamen når man analyserer valutakurs?",
      options: ["Å snu fortegnet på $E$ (blande sterkere krone og høyere $E$)", "Å glemme prisnivåene og bruke bare nominell kurs", "Å nevne importkanalen for prisene, men glemme eksportkanalen som virker på produksjonen", "Å forveksle bytteforholdet med realvalutakursen $R$"],
      explanation: "Sensor deler ofte poeng nettopp på fortegnet: sterkere krone betyr lavere $E$, ikke høyere. Å skrive benevningen «kr per euro» hjelper mot feilen.",
    },
    {
      question: "Et land med fast kurs og fri kapital er i lavkonjunktur. Hvilket stabiliseringsverktøy må det lene seg på?",
      options: ["Finanspolitikken, siden renten er bundet til kursforsvaret", "Selvstendige rentekutt, siden sentralbanken fritt kan senke renten uten å true den faste kursen", "Devaluering av valutakursen hver gang ledigheten stiger over likevektsnivået", "Ingen — landet kan ikke stabilisere økonomien"],
      explanation: "Med fast kurs og fri kapital er pengepolitikken bundet (trilemmaet). Renten kan ikke kuttes fritt, så landet må bruke finanspolitikken — som dessuten virker sterkere når renteresponsen uteblir.",
    },
    {
      question: "Hva er en effektiv (importvektet) valutakurs?",
      options: ["Et veid gjennomsnitt av kronens kurs mot handelspartnernes valutaer", "Kursen mot kun amerikanske dollar, siden mesteparten av verdenshandelen faktureres i dollar", "Den kursen som gir realkurs lik 1, altså der norske og utenlandske priser er like i felles valuta", "Norges Banks styringsrente omregnet til et veid gjennomsnitt av utenlandsk valuta"],
      explanation: "En effektiv valutakurs veier sammen kronens kurs mot flere handelspartnere til én indeks, og gir et samlet bilde av om kronen er sterk eller svak — bedre enn kursen mot én enkelt valuta.",
    },
  ],
  'econ1310-2-1': [
    {
      question: "Hvilke størrelser er de endogene variablene i den lukkede modellen $Y=C+I+G$, $C=z^C+c_1(Y-T)$, $I=z^I+b_1Y$, $T=z^T+tY$?",
      options: ["$Y$, $C$, $I$ og $T$", "$z^C$, $z^I$, $z^T$ og $G$", "$c_1$, $b_1$, $t$ og $G$", "$Y$, $G$, $i$ og $z^C$"],
      explanation: "Endogene variabler bestemmes av modellen selv og har hver sin ligning: $Y$, $C$, $I$ og $T$. $z$-ledd, $G$ og parametrene er eksogene.",
    },
    {
      question: "Hva forteller telleregelen oss når antall ligninger er lik antall endogene variabler?",
      options: ["Modellen er determinert (entydig løsbar)", "Modellen er åpen", "Modellen er ustabil", "Multiplikatoren er alltid lik 1"],
      explanation: "Determinert = like mange uavhengige ligninger som endogene variabler, altså én løsning per endogen variabel.",
    },
    {
      question: "Hva avgjør om modellen beskriver en åpen eller lukket økonomi?",
      options: ["Om den inneholder eksport-/importledd ($X$ og $Q$)", "Om renten $i$ inngår i modellen, siden rentekanalen kobler økonomien til utlandet", "Om skatten er endogen, altså om $T$ bestemmes av $Y$ gjennom skatteleddet $tY$", "Om alle de eksogene $z$-leddene er positive"],
      explanation: "Åpen/lukket avgjøres kun av handelsleddene. Rente eller endogen skatt endrer ikke dette.",
    },
    {
      question: "Hvorfor må $c_1 < 1$?",
      options: ["Husholdningene sparer en del av hver ekstra krone, så ikke alt lekker tilbake i konsum", "Fordi renten alltid er positiv, og en positiv rente krever at $c_1$ er mindre enn 1 for at konsumet skal bli positivt", "Fordi importlekkasjen alltid må være mindre enn eksportinntektene for at handelsbalansen skal gå opp", "Fordi $G$ er eksogen, og eksogene offentlige kjøp krever at $c_1$ holdes under 1 for at ligningen skal kunne løses"],
      explanation: "$c_1<1$ betyr sparelekkasje, som gjør multiplikatoren endelig og stabilitetsvilkåret oppfylt.",
    },
    {
      question: "Hva er $z^C$ i konsumfunksjonen $C = z^C + c_1(Y-T) - c_2(i-\\pi^e)$?",
      options: ["Et eksogent konsumskift (konsumsjokk) uavhengig av inntekt og rente", "Den marginale konsumtilbøyeligheten", "En endogen variabel modellen selv bestemmer", "Skattesatsen, altså andelen av inntekten som trekkes inn som skatt før konsumet bestemmes"],
      explanation: "$z^C$ er det eksogene skiftleddet — stemning/forventninger/formue. En endring $\\Delta z^C$ er et konsumsjokk.",
    },
    {
      question: "For full uttelling ved tolkning av $c_2>0$ i konsumfunksjonen, hvilke kanaler må nevnes?",
      options: ["Substitusjonseffekt, inntektseffekt og gjeldskanalen", "Bare substitusjonseffekten av renteendringen", "Bare importlekkasjen, altså at renteendringen kun virker gjennom importen av forbruksvarer", "Akseleratoren, import- og skattelekkasjen"],
      explanation: "Sensor krever alle tre: substitusjon, inntektseffekt og gjeldskanalen (norske husholdninger har netto gjeld).",
    },
    {
      question: "Hva er den økonomiske begrunnelsen for $b_1 > 0$?",
      options: ["Høyere produksjon krever mer kapasitet og gir lettere finansiering, så investeringene stiger med $Y$", "Høyere rente øker investeringene fordi bedriftene da får bedre tilgang på lån og billigere finansiering av nye prosjekter", "Skatten faller når $Y$ stiger, slik at høyere produksjon frigjør midler bedriftene bruker på nye investeringer", "Importen øker med inntekten, og det er denne importlekkasjen som gjør at investeringene stiger med produksjonen $Y$"],
      explanation: "$b_1$ er akseleratoren: aktivitetsnivået trekker investeringene opp via kapasitetsbehov og inntjening.",
    },
    {
      question: "Hvilken av disse er en eksogen størrelse i standardmodellen?",
      options: ["$G$ (offentlige kjøp)", "$Y$ (BNP)", "$C$ (konsum)", "$T$ (skatten)"],
      explanation: "$G$ fastsettes utenfor modellen. $Y$, $C$ og endogen $T$ bestemmes av modellen.",
    },
    {
      question: "Hva betyr det at renten $i$ blir endogen (f.eks. via en renteregel)?",
      options: ["Det trengs en ekstra ligning for at modellen fortsatt skal være determinert", "Modellen blir automatisk åpen fordi renten kobler den til utenlandske kapitalmarkeder og verdensrenten", "Multiplikatoren blir lik 1, fordi renteregelen nøytraliserer hele virkningen av et etterspørselssjokk", "Skatten blir eksogen, fordi renteregelen overtar stabiliseringen og satsen $t$ dermed faller ut av modellen"],
      explanation: "En ny endogen variabel krever en ny ligning (renteregelen), slik at telleregelen fortsatt går opp.",
    },
    {
      question: "Hva er realrenten i modellen?",
      options: ["$i - \\pi^e$", "$i + \\pi^e$", "$i \\cdot \\pi^e$", "$\\pi^e - i$"],
      explanation: "Realrenten er nominell rente minus forventet inflasjon, $i-\\pi^e$, og styrer konsum og investeringer.",
    },
    {
      question: "Hvorfor gjør en endring i renten ikke en modell åpen?",
      options: ["Åpen/lukket avgjøres kun av om det finnes handelsledd ($X$, $Q$)", "Fordi renten alltid er eksogen og settes utenfor modellen, og eksogene størrelser kan ikke gjøre en modell åpen", "Fordi renten inngår i skattefunksjonen og dermed bestemmer skatteinntektene direkte", "Fordi renten er en endogen variabel som modellen selv bestemmer, og endogene variabler påvirker ikke åpenheten"],
      explanation: "Rente kan finnes i både åpen og lukket modell; bare eksport/import avgjør åpenhet.",
    },
    {
      question: "Hva er disponibel inntekt i modellen?",
      options: ["$Y - T$", "$Y + T$ (bruttoinntekt pluss overføringer)", "$Y - C$", "$Y - G$"],
      explanation: "Disponibel inntekt er inntekt etter nettoskatt, $Y-T$, som konsumet bygger på.",
    },
    {
      question: "Med endogen skatt $T = z^T + tY$, hvor mye øker disponibel inntekt når $Y$ øker med én krone?",
      options: ["$(1-t)$ kroner", "Én krone, uavhengig av skattesatsen", "$t$ kroner", "$c_1$ kroner"],
      explanation: "$Y - T = (1-t)Y - z^T$, så én krone mer $Y$ gir $(1-t)$ kroner mer disponibel inntekt.",
    },
    {
      question: "Hva kjennetegner den forenklede modellvarianten?",
      options: ["$c_2 = b_2 = 0$, altså ingen renteeffekter", "$c_1 = 1$", "Ingen offentlige kjøp, altså $G = 0$", "Skatten er endogen"],
      explanation: "Forenklet variant setter renteeffektene $c_2$ og $b_2$ til null; renten holdes fast.",
    },
    {
      question: "Hvilken feil gjør en student som teller $z^C$, $z^I$ og $z^T$ som endogene variabler?",
      options: ["$z$-leddene er eksogene skiftledd, ikke endogene", "Ingen feil — $z$-leddene er endogene variabler som modellen selv bestemmer", "De skulle telles som ligninger i modellen", "De skulle regnes som parametre på linje med $c_1$ og $t$, ikke som skiftledd"],
      explanation: "$z$-leddene mates inn utenfra og skal aldri telles som endogene i telleregelen.",
    },
    {
      question: "Hva uttrykker parameteren $t$?",
      options: ["Andelen av en inntektsøkning som trekkes inn som skatt", "Marginal konsumtilbøyelighet", "Investeringsakseleratoren", "Realrenten"],
      explanation: "$t$ er den effektive marginale skattesatsen og skattesystemets konjunkturfølsomhet.",
    },
    {
      question: "Hvorfor kalles $t$ en automatisk stabilisator?",
      options: ["Skatteinngangen endrer seg med konjunkturene uten politiske vedtak og demper svingninger", "Fordi den øker multiplikatoren, slik at et etterspørselssjokk gir større utslag i $Y$ og jevner ut konjunkturene", "Fordi den gjør modellen åpen ved å koble skatten til importen", "Fordi den fjerner rentens virkning på konsum og investeringer, slik at $Y$ blir upåvirket av renteendringer"],
      explanation: "$tY$-leddet trekker automatisk inn mer skatt i oppgang og mindre i nedgang, som demper svingningene.",
    },
    {
      question: "I den åpne modellen med $Q = aY$, hva representerer $a$?",
      options: ["Marginal importtilbøyelighet — en lekkasje ut av innenlandsk etterspørsel", "Den marginale konsumtilbøyeligheten, altså hvor mye konsumet øker per krone inntekt", "Eksportandelen, altså hvor stor del av $Y$ som selges ut", "Skattesatsen, altså andelen av en inntektsøkning som det offentlige trekker inn som skatt"],
      explanation: "$a$ er økningen i import per krone inntekt; en del av etterspørselen lekker til utlandet.",
    },
    {
      question: "Hva er forskjellen på $z^T$ og $t$ i skattefunksjonen $T = z^T + tY$?",
      options: ["$z^T$ er det eksogene skattenivået; $t$ er den endogene satsen som kobler skatt til inntekt", "De betyr det samme — begge er skattesatser myndighetene fastsetter", "$z^T$ er endogen; $t$ er eksogen inntekt utenfra", "$z^T$ er styringsrenten, mens $t$ er antall år skatten løper over"],
      explanation: "$z^T$ er nivået myndighetene setter; $t$ knytter skatten til inntektsnivået.",
    },
    {
      question: "En modell inneholder eksport $X$ og import $Q = aY$. Hva kan du umiddelbart konkludere?",
      options: ["Modellen er for en åpen økonomi", "Modellen er lukket, siden importleddet $Q = aY$ bare er innenlandsk etterspørsel", "Modellen er underbestemt og mangler en ligning", "Multiplikatoren er lik 1 fordi importlekkasjen nøyaktig oppveier konsumet"],
      explanation: "Handelsledd ($X$ og $Q$) betyr at modellen beskriver en åpen økonomi.",
    },
  ],
  'econ1310-2-2': [
    {
      question: "Hva er multiplikatoren i den lukkede modellen med endogen skatt og fast rente?",
      options: ["$m = \\dfrac{1}{1 - c_1(1-t) - b_1}$", "$m = \\dfrac{1}{1 - c_1 - b_1}$", "$m = 1 - c_1(1-t) - b_1$", "$m = \\dfrac{c_1}{1 - c_1(1-t) - b_1}$"],
      explanation: "Utledningen gir $\\Delta Y = \\frac{1}{1 - c_1(1-t) - b_1}\\Delta z$. Skatten kommer inn som $c_1(1-t)$.",
    },
    {
      question: "Hva sier stabilitetsvilkåret?",
      options: ["$1 - c_1(1-t) - b_1 > 0$", "$c_1 > 1$", "$b_1 > c_1$ alltid", "$t > c_1$"],
      explanation: "Nevneren må være positiv for at multiplikatoren skal være positiv og endelig.",
    },
    {
      question: "Hvorfor er $m > 1$?",
      options: ["Det opprinnelige sjokket utløser runder av økt konsum og investering; 1 delt på et tall mellom 0 og 1 er større enn 1", "Fordi renten holdes fast av sentralbanken, slik at ingen renteoppgang demper etterspørselen underveis, og det alene er nok til at $m$ blir større enn 1", "Fordi skatten er endogen og trekker inn stadig mer kjøpekraft, slik at hver runde i multiplikatorprosessen blir større enn den forrige og summen overstiger én", "Fordi modellen er lukket og uten import, slik at ingen del av etterspørselen lekker ut til utlandet, og en lukket økonomi gir derfor alltid $m > 1$"],
      explanation: "Nevneren er mellom 0 og 1, så $m>1$; multiplikatorprosessen forsterker det opprinnelige sjokket.",
    },
    {
      question: "Hva er den direkte effekten (lag 1) av et positivt $\\Delta G$?",
      options: ["Offentlige kjøp øker etterspørselen krone for krone; produksjonen stiger umiddelbart med $\\Delta G$", "Skatten stiger automatisk med inntekten allerede i første runde, slik at disponibel inntekt og konsum faller før produksjonen rekker å øke", "Investeringene faller allerede i første runde fordi offentlige kjøp fortrenger private, slik at økningen i $Y$ blir mindre enn $\\Delta G$", "Renten kuttes umiddelbart av sentralbanken, og det er dette rentefallet, ikke selve $\\Delta G$, som utgjør førsterundeeffekten på etterspørselen"],
      explanation: "Førsterundeeffekten er den umiddelbare, direkte etterspørselsøkningen fra sjokket selv.",
    },
    {
      question: "Hva demper multiplikatorprosessen?",
      options: ["Skattelekkasjen $t$ (og sparingen)", "Akseleratoren $b_1$", "Konsumtilbøyeligheten $c_1$", "Renten $i$"],
      explanation: "Høyere $t$ trekker mer inn som skatt, mindre til nytt konsum → mindre multiplikator.",
    },
    {
      question: "Hva forsterker multiplikatorprosessen?",
      options: ["Akseleratoren $b_1$", "Skattesatsen $t$, som gir mer offentlig etterspørsel i hver runde", "Sparingen $1-c_1$ per inntektskrone", "Importen $a$"],
      explanation: "$b_1$ gjør at investeringene stiger med aktiviteten og legger til ekstra etterspørsel i hver runde.",
    },
    {
      question: "Hva er skattemultiplikatoren?",
      options: ["$\\dfrac{-c_1}{1 - c_1(1-t) - b_1}$", "$\\dfrac{1}{1 - c_1(1-t) - b_1}$", "$\\dfrac{c_1}{1 - c_1(1-t) - b_1}$ (positiv)", "$\\dfrac{-1}{1 - c_1(1-t) - b_1}$"],
      explanation: "Skatten virker via konsumet med faktor $-c_1$; derfor telleren $-c_1$.",
    },
    {
      question: "Hvorfor er skattemultiplikatoren tallmessig svakere enn utgiftsmultiplikatoren?",
      options: ["Skatten virker bare indirekte via konsumet, og bare andelen $c_1<1$ av en skattekrone slår ut i konsum", "Fordi skatt alltid er negativ i nasjonalregnskapet, og et negativt fortegn gjør utslaget tallmessig mindre enn for en utgiftskrone", "Fordi renten holdes fast av sentralbanken, slik at bare utgiftskronen får virke gjennom multiplikatorrundene mens skattekronen stanser", "Fordi modellen er lukket og uten importlekkasje, slik at hele skatteøkningen blir værende i det innenlandske kretsløpet i stedet for å påvirke etterspørselen"],
      explanation: "En utgiftskrone virker direkte (faktor 1), en skattekrone bare via $c_1<1$ av konsumet.",
    },
    {
      question: "Et negativt konsumsjokk, $\\Delta z^C < 0$. Hva skjer med BNP?",
      options: ["BNP faller ($\\Delta Y = m\\,\\Delta z^C < 0$)", "BNP stiger", "BNP er uendret, siden lavere konsum motsvares krone for krone av høyere sparing", "Fortegnet kan ikke bestemmes uten tallverdier for parametrene"],
      explanation: "$m>0$ og $\\Delta z^C<0$ gir $\\Delta Y<0$.",
    },
    {
      question: "En skatteøkning, $\\Delta z^T > 0$. Hva skjer med BNP?",
      options: ["BNP faller, fordi telleren er $-c_1\\Delta z^T < 0$", "BNP stiger av økt offentlig etterspørsel", "BNP er uendret", "BNP dobles"],
      explanation: "Skattemultiplikatoren gir motsatt fortegn av $\\Delta z^T$: økt skatt senker BNP.",
    },
    {
      question: "Hva kan du fastsette om et sjokks virkning uten tallverdier for parametrene?",
      options: ["Fortegnet på $\\Delta Y$, via stabilitetsvilkåret", "Den nøyaktige tallverdien på multiplikatoren $m$ og på $\\Delta Y$", "Om $m$ er over eller under 2, siden stabilitetsvilkåret setter en øvre grense for multiplikatoren", "Ingenting"],
      explanation: "Uten tall kan bare fortegnet fastsettes; størrelsen på $m$ krever parameterverdier.",
    },
    {
      question: "Hva blir summen $1 + k + k^2 + \\dots$ når $k = c_1(1-t)+b_1$ og $0<k<1$?",
      options: ["$\\dfrac{1}{1-k} = m$", "$1-k$", "$k$", "$\\dfrac{k}{1-k}$ når $0<k<1$"],
      explanation: "Geometrisk rekke: summen er $1/(1-k) = 1/(1 - c_1(1-t) - b_1) = m$.",
    },
    {
      question: "Skattesatsen $t$ senkes. Hva skjer med multiplikatoren?",
      options: ["Den blir større — mindre skattelekkasje per runde", "Den blir mindre — staten mister skatteinntekter, så offentlig etterspørsel faller i hver runde", "Den er uendret — $t$ inngår ikke i multiplikatoren, som bare bestemmes av $c_1$ og akseleratoren $b_1$", "Den blir negativ — lavere skattesats snur fortegnet på multiplikatoren"],
      explanation: "Lavere $t$ hever $c_1(1-t)$, senker nevneren $1 - c_1(1-t) - b_1$ og øker $m$ — mer av hver inntektskrone går videre som konsum i hver runde.",
    },
    {
      question: "Hva skjer med multiplikatoren når akseleratoren $b_1$ øker?",
      options: ["Den blir større", "Den blir mindre fordi investeringene lekker ut", "Den er uendret — $b_1$ påvirker bare investeringsnivået, ikke nevneren", "Den blir 1"],
      explanation: "Høyere $b_1$ senker nevneren $1 - c_1(1-t) - b_1$ og øker $m$.",
    },
    {
      question: "Hvorfor faller de faste leddene bort når vi går til tilvekstform?",
      options: ["Konstantene endrer seg ikke, så bare endringene i de eksogene størrelsene gjenstår", "Fordi de er negative", "Fordi de ligger i renteleddet og trekkes fra i realrenten $i-\\pi^e$", "Fordi $c_1<1$"],
      explanation: "På endringsform ($\\Delta$) forsvinner nivåkonstantene; bare $\\Delta$-ledd står igjen.",
    },
    {
      question: "Hva er disponibel inntekt uttrykt ved $Y$ med endogen skatt $T = z^T + tY$?",
      options: ["$(1-t)Y - z^T$", "$Y - z^T$", "$(1+t)Y$", "$tY - z^T$"],
      explanation: "$Y - T = Y - z^T - tY = (1-t)Y - z^T$.",
    },
    {
      question: "Hva menes med at et negativt sjokk «forsterker seg selv»?",
      options: ["Lavere produksjon gir lavere inntekt, som gir lavere konsum og investering, som gir lavere produksjon — runde etter runde", "At renten kuttes automatisk av sentralbanken hver gang produksjonen faller, slik at pengepolitikken forsterker nedgangen i stedet for å dempe den gjennom lavere lånekostnader", "At skatten øker automatisk med satsen $t$ i hver runde av nedgangen, slik at disponibel inntekt faller ytterligere og konsumet trekkes ned runde etter runde", "At importen faller når etterspørselen svikter, slik at lekkasjen ut av kretsløpet forsvinner og hele nedgangen blir liggende igjen i innenlandsk etterspørsel"],
      explanation: "Multiplikatorprosessen virker nedover; nedgangen forplanter seg i runder, men konvergerer pga. lekkasjer.",
    },
    {
      question: "En krone i skattelette vs. en krone i økte offentlige kjøp — hvilken gir størst BNP-utslag?",
      options: ["Økte offentlige kjøp (virker direkte krone for krone)", "Skatteletten, fordi husholdningene bruker hele den frigjorte skattekronen på konsum med én gang", "De er alltid like, siden begge kronene går inn i modellen med den samme multiplikatoren $m$", "Det kommer an på hvor mye renten endres samtidig"],
      explanation: "G-multiplikatoren $m$ er større enn skattemultiplikatoren $c_1 m$ fordi $c_1<1$.",
    },
    {
      question: "Hva er første steg i utledningen på tilvekstform?",
      options: ["Sette atferdsligningene for $C$, $I$ og $T$ inn i $Y = C+I+G$", "Regne ut renten fra rentereglen først, slik at $i$ er bestemt før atferdsligningene settes inn", "Finne likevektsledigheten og deretter beregne produksjonsgapet i modellen", "Tegne IS-RR-PK-diagrammet først og lese av skiftene, og deretter bruke avlesningen som utgangspunkt for algebraen"],
      explanation: "Man substituerer atferdsligningene inn i likevektsbetingelsen og samler $Y$-ledd.",
    },
    {
      question: "Hvorfor gir korrekt algebra uten mekanismeforklaring ikke full uttelling?",
      options: ["Sensor krever at mekanismen forklares i to lag (direkte effekt + runder med demper/forsterker)", "Fordi algebra alltid er feil svarform i makroøkonomi, og bare en verbal drøfting teller når sensor gir uttelling", "Fordi renten mangler i utledningen, og et svar uten rentereglen gir aldri full uttelling uansett hvor godt mekanismen forklares", "Fordi skatten er endogen og mekanismen derfor bare kan uttrykkes korrekt i nivåform, ikke på tilvekstform med $\\Delta$"],
      explanation: "Mekanismeforklaringen i ord er et eksplisitt sensorkrav ved siden av regningen.",
    },
    {
      question: "Hvilke sjokk behandles med den fulle utgiftsmultiplikatoren $m$?",
      options: ["$\\Delta z^C$, $\\Delta z^I$ og $\\Delta G$", "Bare $\\Delta z^T$", "Bare $\\Delta G$", "Bare renteendringer og skattesjokk"],
      explanation: "Utgiftssjokk treffer etterspørselen direkte og bruker $m$; skattesjokk bruker skattemultiplikatoren.",
    },
    {
      question: "I mekanismen lag 2: hvor stor andel av tapt inntekt kutter husholdningene konsumet med?",
      options: ["$c_1(1-t)$ per krone", "$c_1$ per krone", "$t$ per krone", "$b_1$ per krone"],
      explanation: "Etter skatt er konsumresponsen $c_1(1-t)$ per krone endret inntekt.",
    },
    {
      question: "Hva er lekkasjeandelen i multiplikatoren?",
      options: ["$1 - c_1(1-t) - b_1$ (nevneren)", "$c_1(1-t) + b_1$", "$c_1$", "$t$"],
      explanation: "Nevneren er nettoandelen som forlater kretsløpet; jo større, desto mindre $m$.",
    },
    {
      question: "To sjokk samtidig: $\\Delta z^I > 0$ og $\\Delta z^T > 0$. Kan fortegnet på $\\Delta Y$ bestemmes uten tall?",
      options: ["Nei — telleren $\\Delta z^I - c_1\\Delta z^T$ er positivt minus positivt, altså ubestemt", "Ja, alltid positivt, fordi et investeringssjokk og et skattesjokk begge løfter samlet etterspørsel og trekker BNP oppover uansett størrelse", "Ja, alltid negativt, fordi skattesjokket virker med faktor $c_1$ på hele inntekten og derfor alltid overdøver investeringssjokket", "Ja, alltid null, fordi et positivt investeringssjokk og et positivt skattesjokk alltid opphever hverandre i telleren"],
      explanation: "Investeringsløftet trekker opp, skattestramningen ned; nettofortegnet avhenger av størrelsene.",
    },
    {
      question: "Hva betyr det at $c_1(1-t) + b_1 < 1$ (stabilitetsvilkåret)?",
      options: ["Mindre enn hele inntektskronen kommer tilbake som ny etterspørsel, så rundene dør ut", "At renten er null, slik at ingen renteutgifter tapper kretsløpet og hver runde kan føre hele inntektskronen videre", "At skatten er eksogen, slik at $t$ ikke lenger inngår i tilbakekoblingen og skatteinngangen er uavhengig av produksjonen", "At multiplikatoren blir negativ fordi tilbakekoblingen overstiger én og hver runde blir mindre enn den forrige med motsatt fortegn"],
      explanation: "Tilbakekoblingen er under 1, så den geometriske rekken konvergerer og $m$ er endelig.",
    },
    {
      question: "Et positivt investeringssjokk $\\Delta z^I > 0$. Hvilken rolle spiller akseleratoren?",
      options: ["Den økte produksjonen trekker med seg ytterligere investeringer ($b_1$ per krone $Y$), som forsterker multiplikatoren", "Den demper virkningen, fordi $b_1$ trekker investeringene ned igjen når produksjonen stiger, slik at hver runde blir svakere enn den forrige", "Den gjør sjokket eksogent ved at $b_1$ flytter investeringene ut av modellen, slik at $\\Delta z^I$ virker uten å påvirke rundene som følger", "Den øker skatteinngangen automatisk gjennom $tY$-leddet, slik at disponibel inntekt faller og konsumresponsen forsterker sjokket ytterligere i hver runde"],
      explanation: "$b_1$ kobler investeringer til aktivitetsnivået og legger ekstra etterspørsel til hver runde.",
    },
    {
      question: "Hvorfor er det galt å bruke utgiftsmultiplikatoren $m$ direkte på et skattesjokk?",
      options: ["Skatten virker via konsumet med faktor $-c_1$, ikke krone for krone", "Fordi $m$ alltid er negativ når skatten er endogen", "Fordi skatt er eksogen i modellen og derfor ikke kan gis noen egen multiplikator", "Fordi renten er fast, slik at $m$ bare gjelder sjokk som virker gjennom rentekanalen"],
      explanation: "Skattesjokk krever skattemultiplikatoren $-c_1/(1 - c_1(1-t) - b_1)$.",
    },
    {
      question: "Hva er nettoeffekten på BNP av et utgiftssjokk sammenlignet med selve sjokket?",
      options: ["Større enn sjokket, fordi $m>1$", "Nøyaktig lik sjokket, siden multiplikatoren er 1", "Mindre enn sjokket, fordi lekkasjene gjør $m<1$", "Alltid null"],
      explanation: "Multiplikatorrundene legger til utover den direkte effekten, så $|\\Delta Y| = m|\\Delta z| > |\\Delta z|$.",
    },
    {
      question: "Hva er en typisk feil ved besvarelse av et sjanger E-spørsmål?",
      options: ["Å oppgi bare den direkte effekten uten multiplikatorrundene", "Å bruke tilvekstform i stedet for nivåform, slik at konstantleddene forsvinner og svaret mangler nivåtall", "Å forklare mekanismen i ord i tillegg til å vise algebraen fullt ut", "Å samle alle $Y$-leddene på venstre side før multiplikatoren utledes, slik at nevneren blir stående feil"],
      explanation: "Å glemme rundene (eller omvendt førsterundeeffekten) er blant de vanligste trekkene.",
    },
    {
      question: "En skattelette $\\Delta z^T < 0$. Hva skjer med BNP?",
      options: ["BNP stiger, fordi $-c_1\\Delta z^T > 0$", "BNP faller", "BNP er uendret", "Fortegnet er ubestemt uten tall"],
      explanation: "Med $\\Delta z^T<0$ blir telleren $-c_1\\Delta z^T$ positiv, så $\\Delta Y>0$ — skattelette løfter BNP.",
    },
  ],
  'econ1310-2-3': [
    {
      question: "Hva er den generelle framgangsmåten for å finne en følgestørrelse?",
      options: ["Sett multiplikatoruttrykket $\\Delta Y = m\\,\\Delta z$ inn i størrelsens definisjon og signér", "Tegn IS-RR-PK-diagrammet og les av følgestørrelsen som den loddrette forskyvningen av kurvene etter sjokket", "Løs modellen for nivået på $Y$ og sett dette nivået inn i størrelsens definisjon i stedet for tilveksten $\\Delta Y$", "Deriver størrelsens definisjon med hensyn på renten $i$ og sett multiplikatoren $m = 1/(1-c_1)$ inn i stedet"],
      explanation: "Følgestørrelser finnes mekanisk: definisjon på tilvekstform → sett inn $\\Delta Y$ → signér.",
    },
    {
      question: "Hva er konsumendringen ved et konsumsjokk $\\Delta z^C$ (med $\\Delta z^T = 0$)?",
      options: ["$\\Delta C = \\Delta z^C + c_1(1-t)\\,\\Delta Y$", "$\\Delta C = c_1(1-t)\\,\\Delta Y$", "$\\Delta C = \\Delta z^C$", "$\\Delta C = \\Delta z^C + c_1\\,\\Delta Y - c_1 t\\,\\Delta z^T$"],
      explanation: "$\\Delta C$ har en direkte del ($\\Delta z^C$) og en indirekte del ($c_1(1-t)\\Delta Y$).",
    },
    {
      question: "Hva er skatteinngangen på tilvekstform?",
      options: ["$\\Delta T = \\Delta z^T + t\\,\\Delta Y$", "$\\Delta T = t\\,\\Delta Y$ alltid", "$\\Delta T = \\Delta z^T + c_1(1-t)\\,\\Delta Y$", "$\\Delta T = \\Delta z^T$"],
      explanation: "$T = z^T + tY$ gir $\\Delta T = \\Delta z^T + t\\,\\Delta Y$ — direkte pluss endogent ledd.",
    },
    {
      question: "Hva er budsjettbalansen $B$?",
      options: ["$B = T - G$", "$B = G - T$", "$B = Y - C$", "$B = S^P - I - G$"],
      explanation: "Budsjettbalansen (overskudd) er skatteinntekter minus offentlige kjøp, $B = T - G$.",
    },
    {
      question: "Hvorfor er fortegnet på $\\Delta B$ ofte ubestemt ved $\\Delta G < 0$?",
      options: ["Utgiftskuttet trekker balansen opp, mens det endogene skattebortfallet ($t\\,\\Delta Y < 0$) trekker den ned", "Fordi renten endres, og de endrede renteutgiftene til staten trekker budsjettbalansen motsatt vei av selve utgiftskuttet", "Fordi skatten er eksogen, slik at skatteinngangen ligger fast og fortegnet på $\\Delta B$ må avgjøres av utgiftssiden alene", "Fordi et lavere BNP hever den endogene skatteinngangen $t\\,\\Delta Y > 0$ og dermed forbedrer budsjettbalansen entydig"],
      explanation: "To motstridende ledd: mindre utgifter vs. mindre skatteinngang fra lavere BNP.",
    },
    {
      question: "Hva er total sparing?",
      options: ["$S = Y - C - C^G$", "$S = Y - T - C$", "$S = Y - G$", "$S = Y - C - C^G + (T - G)$"],
      explanation: "Total sparing er BNP minus alt konsum, privat $C$ og offentlig $C^G$.",
    },
    {
      question: "Hva er privat sparing?",
      options: ["$S^P = Y - T - C$", "$S^P = Y - C - C^G$", "$S^P = T - G$", "$S^P = Y - G$"],
      explanation: "Privat sparing er husholdningenes disponible inntekt minus deres konsum.",
    },
    {
      question: "Hva er det viktig å skille i sparingsoppgaver (eksplisitt karakterskille V2018)?",
      options: ["Privat sparing $S^P = Y-T-C$ fra total sparing $S = Y-C-C^G$", "Konsum fra investering, altså å skille husholdningenes konsum $C$ fra bedriftenes investeringer $I$", "Rente fra inflasjon, altså å skille den nominelle renten $i$ fra inflasjonen $\\pi$", "Disponibel inntekt $Y-T$ fra samlet sparing, som begge alltid er identiske størrelser i lukket økonomi"],
      explanation: "Å blande de to sparebegrepene er et eksplisitt karakterskille.",
    },
    {
      question: "Hva sier spareparadokset?",
      options: ["En økt sparelyst ($\\Delta z^C<0$) kan senke BNP så mye at samlet sparing ikke øker", "At sparing alltid løfter BNP, fordi den finansierer investeringene", "At høyere skatt automatisk øker husholdningenes sparing", "At økt sparelyst hever investeringene $z^I$, så samlet sparing stiger"],
      explanation: "Forsøk på å spare mer senker inntekten og dermed sparegrunnlaget — samlet sparing øker ikke.",
    },
    {
      question: "I lukket økonomi, hvilken likhet gjelder alltid mellom sparing og investering?",
      options: ["$S = I$", "$S = C$", "$S = G$", "$S = I + (G - T)$"],
      explanation: "Samlet sparing er lik samlet realinvestering i en lukket økonomi.",
    },
    {
      question: "Ved et positivt $\\Delta G$, hva skjer med skatteinngangen?",
      options: ["Den stiger ($\\Delta T = t\\,\\Delta Y > 0$)", "Den faller", "Den er uendret, siden skatteinngangen bare avhenger av satsen $t$ og ikke av BNP", "Den faller, fordi det endogene leddet $t\\,\\Delta Y$ blir negativt når BNP øker"],
      explanation: "BNP stiger, så det endogene skatteleddet $t\\,\\Delta Y$ er positivt.",
    },
    {
      question: "Hvorfor øker skatteinngangen mindre enn en satsøkning isolert skulle tilsi?",
      options: ["Skatteøkningen senker $Y$, så det indirekte leddet $t\\,\\Delta Y < 0$ demper", "Fordi renten kuttes, og statens lavere renteutgifter spiser opp mesteparten av den økte skatteinngangen", "Fordi importen øker, slik at en større del av inntekten lekker ut av landet og aldri blir skattlagt", "Fordi den direkte satsøkningen $\\Delta z^T$ automatisk hever konsumet og trekker inntektsgrunnlaget opp"],
      explanation: "Endogen dempning: lavere inntektsgrunnlag reduserer skatteinngangen på marginen.",
    },
    {
      question: "Hva er den direkte komponenten i $\\Delta C$ ved et konsumsjokk?",
      options: ["$\\Delta z^C$", "$c_1(1-t)\\Delta Y$", "$t\\,\\Delta Y$", "$\\Delta G$"],
      explanation: "Den direkte komponenten er det eksogene forbruksskiftet $\\Delta z^C$.",
    },
    {
      question: "Hva er den indirekte komponenten i $\\Delta C$?",
      options: ["$c_1(1-t)\\,\\Delta Y$", "$\\Delta z^C$", "$-c_1\\Delta z^T$", "$c_1(1-t)\\,\\Delta Y + \\Delta z^C$"],
      explanation: "Den indirekte komponenten skyldes inntektsendringen: $c_1(1-t)\\Delta Y$.",
    },
    {
      question: "Ved et positivt $\\Delta G$ er $\\Delta B = (t\\,m - 1)\\Delta G$. Hva blir fortegnet med kursets standardforutsetning $t\\,m < 1$ (modellen uten akselerator)?",
      options: ["$\\Delta B < 0$ — balansen forverres", "$\\Delta B > 0$ — økt aktivitet gir full inndekning", "$\\Delta B = 0$ — tiltaket er selvfinansierende", "Ubestemt — fortegnet kan gå begge veier selv med $t\\,m < 1$"],
      explanation: "Med $t\\,m < 1$ er faktoren $(t\\,m - 1)$ negativ, så $\\Delta B < 0$ — skatteinngangen dekker bare en del av utgiftene. Merk at $t\\,m < 1$ er en parameterforutsetning: med sterk akselerator kan $t\\,m > 1$, og da snur fortegnet.",
    },
    {
      question: "Hva er total sparing på tilvekstform ved et sjokk med $\\Delta z^C = 0$ og fast $C^G$?",
      options: ["$\\Delta S = [1 - c_1(1-t)]\\,\\Delta Y$", "$\\Delta S = c_1(1-t)\\,\\Delta Y$", "$\\Delta S = t\\,\\Delta Y$", "$\\Delta S = [1 - c_1(1-t)]\\,\\Delta Y + \\Delta z^C$"],
      explanation: "$\\Delta S = \\Delta Y - \\Delta C = \\Delta Y - c_1(1-t)\\Delta Y = [1 - c_1(1-t)]\\Delta Y$.",
    },
    {
      question: "Hva representerer faktoren $1 - c_1(1-t)$ i $\\Delta S$?",
      options: ["Den delen av en inntektskrone som ikke går til privat konsum (spares eller skattlegges)", "Den marginale konsumtilbøyeligheten $c_1$, altså konsumandelen av en inntektskrone", "Multiplikatoren, altså faktoren inntekten øker med per krone i sjokk", "Den delen av inntektskronen som lekker ut til import, altså importandelen $a$"],
      explanation: "Det er andelen av inntektsøkningen som ikke konsumeres.",
    },
    {
      question: "Ved en skatteøkning $\\Delta z^T > 0$, hva skjer med privat konsum?",
      options: ["Det faller, både direkte (lavere disponibel inntekt) og indirekte (lavere BNP)", "Det stiger", "Det er uendret, siden privat konsum bare avhenger av BNP $Y$ og ikke av skatteleddet $z^T$ i konsumfunksjonen", "Det stiger, fordi den lavere skatteinngangen $t\\,\\Delta Y$ automatisk løfter husholdningenes disponible inntekt"],
      explanation: "$\\Delta C = c_1(1-t)\\Delta Y - c_1\\Delta z^T$, begge ledd negative, så konsumet faller.",
    },
    {
      question: "Hva er en klassisk feil ved utledning av $\\Delta C$ ved et konsumsjokk?",
      options: ["Å glemme den direkte komponenten $\\Delta z^C$", "Å ta med skattesatsen $t$ i det indirekte leddet $c_1(1-t)\\Delta Y$", "Å bruke multiplikatoren $\\frac{1}{1-c_1(1-t)}$ når $\\Delta Y$ skal finnes", "Å regne med at hele multiplikatoren $\\frac{1}{1-c_1(1-t)}$ virker direkte på konsumet"],
      explanation: "$\\Delta C$ har både direkte ($\\Delta z^C$) og indirekte ($c_1(1-t)\\Delta Y$) del.",
    },
    {
      question: "I den enkle modellen uten akselerator ($b_1 = 0$), hva blir $\\Delta S$ ved $\\Delta z^C < 0$?",
      options: ["$\\Delta S = 0$ (uendret)", "$\\Delta S > 0$", "$\\Delta S < 0$ alltid", "$\\Delta S = [1-c_1(1-t)]\\,\\Delta z^C < 0$"],
      explanation: "Med $[1 - c_1(1-t)]m = 1$ blir $\\Delta S = 0$ — spareparadoksets rene form.",
    },
    {
      question: "Hva er nettoinnsparingen på budsjettet ved et utgiftskutt $\\Delta G < 0$ i modellen uten akselerator (der $t\\,m < 1$)?",
      options: ["$(1 - t\\,m)|\\Delta G|$ — mindre enn selve kuttet", "$|\\Delta G|$ — hele kuttet spares inn", "$m\\,|\\Delta G|$ — multiplikatoren forsterker innsparingen", "Null — det endogene skattebortfallet $t\\,m|\\Delta G|$ spiser alltid hele kuttet"],
      explanation: "Det endogene skattebortfallet spiser $t\\,m|\\Delta G|$ av innsparingen, så netto er $(1-t\\,m)|\\Delta G| < |\\Delta G|$. Forutsetningen $t\\,m < 1$ gjelder modellen uten akselerator; med sterk akselerator kan balansen til og med forverres av kuttet.",
    },
    {
      question: "Hvorfor virker det å kutte utgifter i en nedgang «prosyklisk»?",
      options: ["Kuttet senker BNP ytterligere og forsterker nedgangen", "Fordi kuttet øker BNP og demper nedgangen", "Fordi sentralbanken kutter renten samtidig", "Fordi lavere BNP hever skatteinngangen automatisk"],
      explanation: "Innstramming i nedgang trekker $Y$ enda lenger ned — det forsterker konjunkturen i stedet for å motvirke.",
    },
    {
      question: "Hva må man gjøre når fortegnet på en totaleffekt er ubestemt?",
      options: ["Vise de motstridende leddene og resonnere om hva som er rimelig", "Alltid velge positivt fortegn, siden multiplikatoren $m$ er positiv i alle tilfeller", "Alltid velge negativt fortegn, siden det dempende leddet alltid dominerer i modellen", "Sette inn standardverdier for parametrene og la multiplikatorens fortegn avgjøre totaleffekten alene"],
      explanation: "Riktig svar påpeker fortegnsubestemtheten og resonnerer — ikke gjette et bestemt fortegn.",
    },
    {
      question: "Ved et sjokk uten skattenivåendring, hva er skatteinngangen?",
      options: ["$\\Delta T = t\\,\\Delta Y$", "$\\Delta T = \\Delta z^T$", "$\\Delta T = c_1\\,\\Delta Y$", "$\\Delta T = 0$"],
      explanation: "Med $\\Delta z^T = 0$ gjenstår bare det endogene leddet $t\\,\\Delta Y$.",
    },
    {
      question: "Hva er sammenhengen mellom spareparadokset og $S = I$?",
      options: ["Siden $z^I$ er uendret, kan samlet sparing ikke endres — den må følge investeringene", "At sparing alltid overstiger investeringer, slik at økt sparelyst gir et overskudd som ikke motsvares av $I$", "At renten utligner sparing og investering, slik at $S = I$ gjenopprettes uten at BNP behøver å endres", "At økt sparelyst automatisk løfter investeringene $z^I$ via en lavere rente, slik at $S = I$ alltid stiger"],
      explanation: "I lukket økonomi er $S=I$; uendret investeringsvilje betyr uendret samlet sparing tross økt sparelyst.",
    },
  ],
  'econ1310-2-4': [
    {
      question: "Hva blir multiplikatoren i en åpen økonomi med endogen skatt og fast rente (import $Q = aY$)?",
      options: ["$\\frac{1}{1 - c_1(1-t) - b_1 + a}$", "$\\frac{1}{1 - c_1(1-t) - b_1}$", "$\\frac{1}{1 - c_1(1-t) - b_1 - a}$", "$\\frac{1}{1 - c_1(1-t) - b_1 + a + g}$"],
      explanation: "Importlekkasjen legger leddet $+a$ til i nevneren, ikke $-a$ (import er en lekkasje ut av kretsløpet). Uten $+a$ har man den lukkede multiplikatoren; med $+g$ i tillegg har man G-regel-varianten.",
    },
    {
      question: "Hvorfor er den åpne multiplikatoren mindre enn den lukkede?",
      options: ["Importlekkasjen $+a$ øker nevneren, så brøken blir mindre", "Importen øker samlet innenlandsk etterspørsel og forsterker hver multiplikatorrunde", "Skattesatsen $t$ blir automatisk høyere i åpen økonomi og trekker $c_1(1-t)$ ned i nevneren", "Investeringsakseleratoren $b_1$ forsvinner fra nevneren i åpen økonomi, så nevneren blir større"],
      explanation: "En del av hver ekstra krone i inntekt går til import og skaper ikke innenlandsk inntekt i neste runde. Denne lekkasjen ($+a$ i nevneren) svekker multiplikatorrundene, så totalmultiplikatoren blir mindre.",
    },
    {
      question: "Hva legger en motsyklisk G-regel $G = z^G - gY$ til i multiplikatorens nevner?",
      options: ["Leddet $+g$", "Leddet $-g$", "Leddet $+g^2$", "Ingenting; regelen påvirker bare budsjettet"],
      explanation: "Med $\\Delta G = -g\\Delta Y$ flyttes $-g\\Delta Y$ over til venstre side og gir $+g$ i nevneren. Regelen virker som en ekstra demping og gjør multiplikatoren enda mindre.",
    },
    {
      question: "Hvorfor kalles endogen skatt ($t > 0$) en automatisk stabilisator?",
      options: ["Den trekker inn mer skatt i oppgang og mindre i nedgang uten nye vedtak, og demper svingningene", "Den øker multiplikatoren og forsterker konjunkturene", "Den holder budsjettbalansen konstant til enhver tid", "Den øker $c_1(1-t)$ i nevneren og gjør hver multiplikatorrunde kraftigere"],
      explanation: "Leddet $c_1(1-t)$ er mindre enn $c_1$, så multiplikatoren blir mindre med endogen skatt. Skattesystemet demper automatisk sjokk uten politiske vedtak — det er definisjonen på en automatisk stabilisator.",
    },
    {
      question: "Hva skjer med multiplikatoren hvis en endogen skatt gjøres eksogen ($t = 0$)?",
      options: ["Den blir større, fordi skattelekkasjen forsvinner fra nevneren", "Den blir mindre, fordi hele skatten nå ligger i $z^T$", "Den blir uendret, siden det samlede skattenivået er det samme og nevneren i multiplikatoren ligger fast", "Den blir mindre, fordi en fast skatt fjerner den automatiske stabilisatoren og gjør nevneren større"],
      explanation: "Med $t = 0$ blir nevneren $1 - c_1 - b_1$ i stedet for $1 - c_1(1-t) - b_1$. Siden $c_1(1-t) < c_1$, er nevneren nå mindre og multiplikatoren større. Å fjerne stabilisatoren gjør økonomien mer følsom for sjokk.",
    },
    {
      question: "Et eksportfall ($\\Delta X < 0$) i en åpen økonomi. Hva blir fortegnet på $\\Delta Y$?",
      options: ["Negativt, fordi multiplikatoren er positiv og sjokket negativt", "Positivt, fordi importen trekkes fra i likevekten $Y=C+I+G+X-Q$, slik at et eksportfall løfter $Y$", "Ubestemt uten tallverdier, siden fortegnet på multiplikatoren ikke kan avgjøres av modellen alene", "Positivt, fordi et eksportfall senker importlekkasjen $a$ og dermed løfter den innenlandske multiplikatoren"],
      explanation: "Stabilitetsvilkåret $1 - c_1(1-t) - b_1 + a > 0$ gir positiv multiplikator. Et negativt eksportsjokk gir dermed $\\Delta Y < 0$: BNP faller.",
    },
    {
      question: "Rangeringen av de tre multiplikatorene er:",
      options: ["$m_{\\text{lukket}} > m_{\\text{åpen}} > m_{\\text{regel}}$", "$m_{\\text{regel}} > m_{\\text{åpen}} > m_{\\text{lukket}}$", "$m_{\\text{åpen}} > m_{\\text{lukket}} > m_{\\text{regel}}$", "Alle tre variantene har nøyaktig samme multiplikator siden nevnerne er identiske"],
      explanation: "Fra lukket til åpen legges $+a$ til nevneren; fra åpen til regel legges $+g$ til. Flere lekkasjeledd → større nevner → mindre multiplikator. Derfor er den lukkede størst og regelvarianten minst.",
    },
    {
      question: "Hva er prisen for stabiliseringen under en motsyklisk G-regel?",
      options: ["Budsjettbalansen blir endogen — underskudd i nedgang", "Multiplikatoren blir større ved motsyklisk $G$", "Renten må heves, fordi en motsyklisk G-regel krever strammere pengepolitikk ved siden av", "Multiplikatoren blir større av leddet $-g$"],
      explanation: "$\\Delta B = (t+g)\\Delta Y - \\Delta z^G$. Ved et negativt sjokk faller $Y$, skatten synker og $G$ økes automatisk samtidig → budsjettunderskudd. Stabiliseringen finansieres over budsjettet.",
    },
    {
      question: "Hvorfor virker et årlig krav om budsjettbalanse ($\\Delta G = \\Delta T$) prosyklisk i en nedgang?",
      options: ["Fallende skatteinngang tvinger fram kutt i $G$, som forsterker fallet", "Det tvinger fram økte offentlige kjøp, som forsterker oppgangen", "Det holder BNP helt konstant, fordi kuttet i $G$ oppveies krone for krone av den lavere skatten", "Det tvinger fram en økning i offentlige kjøp $G$ når skatten faller, og motvirker dermed nedgangen aktivt"],
      explanation: "I nedgang er $\\Delta T = t\\Delta Y < 0$. Balansekravet krever $\\Delta G = \\Delta T < 0$, altså kutt i offentlige kjøp — som senker etterspørselen ytterligere og forsterker nedgangen.",
    },
    {
      question: "Hva er den balanserte budsjettmultiplikatoren i den enkle lukkede modellen?",
      options: ["1 — BNP øker like mye som utgiftsøkningen", "0 — skatt og utgift nulles ut", "$\\frac{1}{1-c_1}$", "0 — skatteøkningen nuller ut utgiften"],
      explanation: "Med $\\Delta G = \\Delta T$ blir $\\Delta Y(1-c_1) = (1-c_1)\\Delta G$, altså $\\Delta Y = \\Delta G$. $G$ virker krone for krone, mens skatteøkningen bare demper konsumet med $c_1 < 1$; nettoeffekten er 1.",
    },
    {
      question: "En student omtaler importlekkasje i en lukket modell. Hva er feilen?",
      options: ["En lukket modell har ingen import — bare variantens egne mekanismer skal brukes", "Ingen feil; import finnes i alle modeller, også i den lukkede varianten der $Y = C + I + G$ gjelder", "Importlekkasjen skulle vært skrevet som leddet $+g$ i nevneren, og ikke som importandelen $+a$", "Skattelekkasjen skulle vært omtalt i stedet, siden $t$ og importandelen $a$ er nøyaktig samme lekkasje"],
      explanation: "En sentral sensorregel (§5.2) er å bruke bare variantens egne ledd. En lukket modell har $Y = C + I + G$ uten import, så det finnes ingen importlekkasje å omtale.",
    },
    {
      question: "Hva måler den marginale importandelen $a$ i $Q = aY$?",
      options: ["Andelen av en ekstra krone i inntekt som brukes på import", "Det totale importnivået i kroner, altså hvor mye landet til sammen importerer i løpet av et år", "Skattesatsen på importvarer, altså toll og avgifter staten krever inn per importert krone", "Det samlede importnivået $Q$ i kroner, altså totalimporten og ikke den marginale importtilbøyeligheten"],
      explanation: "$a$ er den marginale importtilbøyeligheten: hvor mye av hver ekstra inntektskrone som lekker ut til import. Høyere $a$ gir større importlekkasje og mindre multiplikator.",
    },
    {
      question: "Et positivt eksportsjokk i en åpen økonomi med endogen skatt gir hvilken virkning på budsjettbalansen (eksogen $G$)?",
      options: ["Balansen forbedres, fordi skatteinngangen stiger med aktiviteten", "Balansen forverres, fordi $G$ må økes aktivt for å møte den økte etterspørselen fra utlandet", "Balansen er uendret, fordi skatteinngangen $T$ ikke reagerer på det høyere aktivitetsnivået", "Balansen forverres, fordi den økte aktiviteten trekker med seg høyere offentlige kjøp $G$ automatisk"],
      explanation: "$\\Delta B = \\Delta T - \\Delta G = t\\Delta Y$ (siden $\\Delta G = 0$). Sjokket løfter $Y$, så $\\Delta T > 0$ og budsjettet forbedres — den endogene skatten trekker inn mer i oppgangen.",
    },
    {
      question: "Hvorfor gir et autonomt ønske om mer import ($\\Delta z^Q > 0$) lavere BNP?",
      options: ["Import er en lekkasje: etterspørsel vris fra innenlandske til utenlandske varer", "Import øker samlet etterspørsel og løfter BNP", "Import øker skatteinngangen direkte", "Import øker samlet etterspørsel, siden $Q$ inngår med positivt fortegn"],
      explanation: "Import inngår med negativt fortegn i $Y = C + I + G + X - Q$. Et autonomt importskift trekker innenlandsk produksjon og inntekt ned: $\\Delta Y = \\frac{-1}{1-c_1(1-t)-b_1+a}\\Delta z^Q < 0$.",
    },
    {
      question: "Hva er stabilitetsvilkåret i den åpne modellen?",
      options: ["$1 - c_1(1-t) - b_1 + a > 0$", "$1 - c_1(1-t) - b_1 + a < 0$", "$c_1(1-t) + b_1 > a$", "$c_1(1-t) + b_1 - a > 1$ for stabilitet"],
      explanation: "Nevneren må være positiv for at multiplikatoren skal være positiv og endelig. Vilkåret $1 - c_1(1-t) - b_1 + a > 0$ brukes til å fastsette fortegnet på $\\Delta Y$.",
    },
    {
      question: "En modell med både eksogen $T$ og eksogen $G$ rammes av et konsumsjokk. Hva skjer med budsjettbalansen $B = T - G$?",
      options: ["Den er uendret, fordi verken $T$ eller $G$ reagerer på $Y$", "Den forbedres, fordi skatten stiger når det høyere konsumet gir større omsetning og inntekt", "Den forverres, fordi de offentlige utgiftene $G$ stiger med det høyere aktivitetsnivået", "Den forbedres, fordi den endogene skatteinngangen $t\\,\\Delta Y$ stiger med det høyere BNP-nivået"],
      explanation: "Når både $T$ og $G$ er eksogene, endres de ikke av et $Y$-drevet sjokk. $\\Delta B = \\Delta T - \\Delta G = 0$. En typisk feil (H2020) er å tro at balansen svinger her.",
    },
    {
      question: "Hva skjer med et sjokks BNP-utslag når en motsyklisk G-regel innføres?",
      options: ["Utslaget blir mindre, fordi regelen legger dempingen $+g$ til nevneren", "Utslaget blir større, fordi $G$ nå er en aktiv størrelse som forsterker hver multiplikatorrunde", "Utslaget blir uendret, fordi en G-regel bare flytter $z^G$ og ikke rører nevneren i multiplikatoren", "Utslaget blir større, fordi den aktive G-regelen legger leddet $-g$ til i nevneren og hever multiplikatoren"],
      explanation: "Regelen øker $G$ automatisk når $Y$ faller (og motsatt), som demper hver multiplikatorrunde. Nevneren får leddet $+g$, multiplikatoren blir mindre, og BNP-utslaget dempes.",
    },
    {
      question: "Hva er forskjellen på en balansert budsjettøkning og et årlig balansekrav?",
      options: ["Den aktive balanserte økningen er ekspansiv (multiplikator $\\geq 1$); balansekravet som reagerer på fallende skatt er prosyklisk", "De er identiske, siden begge innebærer at $\\Delta G = \\Delta T$ og derfor gir nøyaktig samme virkning på BNP, enten endringen er vedtatt aktivt eller følger av et årlig balansekrav", "Balansekravet er ekspansivt fordi lavere skatteinntekter tillater økt bruk; den aktive økningen er kontraktiv", "Balansekravet er ekspansivt fordi det gir økte offentlige kjøp i nedgang, mens Haavelmo-økningen er kontraktiv"],
      explanation: "En aktiv $\\Delta G = \\Delta T$-økning løfter BNP (Haavelmo, multiplikator 1). Et passivt krav om balanse hvert år tvinger derimot fram kutt i nedgang og forsterker svingningen — det er prosyklisk.",
    },
    {
      question: "Et eksportsjokk og et innenlandsk investeringssjokk av samme størrelse i en åpen modell. Hvordan er BNP-utslagene?",
      options: ["Like store, fordi begge virker gjennom samme multiplikator $m_{\\text{åpen}}$", "Eksportsjokket gir større utslag, fordi eksportkronene ikke lekker ut igjen og derfor treffer innenlandsk inntekt fullt ut", "Investeringssjokket gir alltid null utslag, fordi $\\Delta z^I$ ikke regnes med i den autonome etterspørselsendringen $\\Delta z$", "Eksportsjokket gir større utslag, fordi eksporten ikke rammes av importlekkasjen $+a$ slik investeringene gjør"],
      explanation: "Alle autonome etterspørselsledd — enten det er $\\Delta X$ eller $\\Delta z^I$ — samles i $\\Delta z$ og virker gjennom samme multiplikator $\\frac{1}{1-c_1(1-t)-b_1+a}$. Samme størrelse gir samme utslag.",
    },
    {
      question: "Hvilken variant har den minste multiplikatoren?",
      options: ["Åpen økonomi med endogen skatt og motsyklisk G-regel", "Lukket økonomi med eksogen skatt, der nevneren bare er $1 - c_1 - b_1$", "Lukket økonomi med endogen skatt, der nevneren er $1 - c_1(1-t) - b_1$ uten importledd", "Lukket økonomi med eksogen skatt, fordi den mangler både importlekkasje og skattelekkasje i nevneren"],
      explanation: "Nevneren har flest lekkasjeledd her: $1 - c_1(1-t) - b_1 + a + g$. Import ($a$), skatt ($t$) og G-regel ($g$) demper alle. Størst nevner → minst multiplikator.",
    },
    {
      question: "Hvorfor er skattemultiplikatoren mindre (i tallverdi) enn G-multiplikatoren?",
      options: ["Skattekutt virker bare indirekte via konsumet ($c_1 < 1$), mens $G$ virker krone for krone", "Skatt lekker ikke til sparing, så hele kuttet blir brukt", "G-multiplikatoren har importandelen $a$ i telleren, og $a$ overstiger $c_1$", "Fordi G-multiplikatoren har $a$ i telleren, mens skattemultiplikatoren har $t$"],
      explanation: "G-multiplikatoren har $1$ i telleren, skattemultiplikatoren $-c_1$. Offentlige kjøp treffer etterspørselen direkte; et skattekutt øker bare disponibel inntekt, og bare andelen $c_1$ av den brukes.",
    },
    {
      question: "Konjunkturavhengige overføringer (som dagpenger) virker i modellen som:",
      options: ["En automatisk stabilisator, lik effekten av skattesatsen $t$", "En diskresjonær engangsendring som bare virker den ene gangen den utbetales, og ikke senere", "Et rent kostnadssjokk som skifter Phillips-kurven og løfter inflasjonen uten å røre etterspørselen", "En diskresjonær finanspolitisk engangsendring som må vedtas politisk i hvert enkelt statsbudsjett"],
      explanation: "Overføringer som øker i nedgang og faller i oppgang forsterker den automatiske stabiliseringen — de virker som en negativ komponent av nettoskatten og demper svingningene uten nye vedtak.",
    },
    {
      question: "Hva menes med at budsjettet blir «endogent» under en motsyklisk G-regel?",
      options: ["Budsjettbalansen bestemmes av aktivitetsnivået i stedet for å ligge fast", "Budsjettet vedtas av Stortinget hvert år, og ordet endogent viser bare til den politiske behandlingen", "Budsjettet er alltid i balanse, fordi G-regelen justerer $G$ nøyaktig i takt med skatteinngangen $tY$", "Budsjettet vedtas av Stortinget hvert år og er derfor en eksogen størrelse uavhengig av konjunkturene"],
      explanation: "Med $G = z^G - gY$ avhenger både $G$ og $T$ av $Y$, så $\\Delta B = (t+g)\\Delta Y - \\Delta z^G$. Balansen svinger med konjunkturene — den er blitt en endogen størrelse.",
    },
    {
      question: "En liten åpen økonomi er mindre følsom for innenlandske etterspørselssjokk enn en lukket. Hvorfor?",
      options: ["Importlekkasjen demper multiplikatoren, så sjokk slår svakere ut i BNP", "Eksporten fjerner alle innenlandske sjokk", "Renten justeres automatisk i en åpen økonomi og nøytraliserer innenlandske etterspørselssjokk før de treffer BNP", "Eksporten nøytraliserer alle innenlandske sjokk via $X - Q$"],
      explanation: "Importlekkasjen $+a$ i nevneren gjør multiplikatoren mindre. En del av etterspørselsendringene lekker ut til utlandet, så innenlandske sjokk gir mindre BNP-utslag — men det bremser også innenlandsk finanspolitikk.",
    },
    {
      question: "I den åpne modellen: hvilke ledd samles i $\\Delta z$ (den autonome etterspørselsendringen)?",
      options: ["$\\Delta z^C, \\Delta z^I, \\Delta z^G$ og $\\Delta z^X$ — alle autonome etterspørselsskift", "Bare $\\Delta z^C$", "$c_1, b_1$ og $a$", "Parametrene $c_1, b_1, t$ og importandelen $a$, som hører hjemme i nevneren"],
      explanation: "Multiplikatoren $\\frac{1}{1-c_1(1-t)-b_1+a}$ multipliseres med summen av alle autonome (eksogene) etterspørselsskift. Parametrene $c_1, b_1, t, a$ hører hjemme i nevneren, ikke i $\\Delta z$.",
    },
  ],
  'econ1310-2-5': [
    {
      question: "Hva er første steg i løsningsoppskriften for en «vis matematisk»-oppgave?",
      options: ["Klassifisere modellen: tell ligninger og endogene, avgjør åpen/lukket og endogen/eksogen skatt", "Regne ut følgestørrelsene $\\Delta C$, $\\Delta T$ og $\\Delta B$ først, og lese modellvarianten ut av dem etterpå", "Tegne IS-RR-PK-diagrammet først og lese multiplikatorens fortegn av kurveskiftet", "Sette opp multiplikatoren $\\frac{1}{1-c_1(1-t)}$ og regne ut $\\Delta Y$ først"],
      explanation: "Algoritmen starter med klassifisering (sjanger C-åpningen). Du må vite hvilken modellvariant du er i før du kan velge riktig multiplikator og hvilke mekanismer som gjelder.",
    },
    {
      question: "Hvorfor gir ikke korrekt algebra alene full uttelling på sjanger E?",
      options: ["Sensor krever mekanismeforklaring i ord — både direkte effekt og multiplikatorrunder", "Algebra gir null poeng; hele uttellingen ligger i den språklige framstillingen", "Man må alltid oppgi tallverdier: uten et konkret tall for $\\Delta Y$ regnes svaret som ufullstendig, uansett hvor godt mekanismen er forklart", "Fordi bare den verbale drøftingen av fortegn gir uttelling i makroøkonomi"],
      explanation: "§5.7 i sensorveiledningene: matematikk uten ord gir ikke full uttelling. Den to-lags mekanismeforklaringen (direkte + runder, med dempere/forsterker) er selve sensorkravet.",
    },
    {
      question: "Hvordan fastsetter man fortegnet på $\\Delta Y$ etter et sjokk?",
      options: ["Påberop stabilitetsvilkåret (nevneren $> 0$, så $m > 0$) og les av fortegnet på $\\Delta z$", "Anta alltid at BNP stiger: multiplikatoren er positiv, så $\\Delta Y > 0$ uansett hvilket fortegn det autonome sjokket $\\Delta z$ har", "Regn ut tallverdien for $\\Delta Y$ først, siden fortegnet ikke lar seg lese av uttrykket før parameterverdiene er satt inn", "Regn ut hele tallverdien for multiplikatoren først, siden fortegnet ellers er ukjent"],
      explanation: "Stabilitetsvilkåret garanterer positiv multiplikator. Da følger fortegnet på $\\Delta Y$ direkte av fortegnet på det autonome sjokket $\\Delta z$ (for skattesjokk snus det av telleren $-c_1$).",
    },
    {
      question: "Et negativt investeringssjokk ($\\Delta z^I < 0$) i lukket økonomi med endogen skatt. Hva blir $\\Delta Y$?",
      options: ["Negativ — positiv multiplikator ganger negativt sjokk", "Positiv — investeringer løfter alltid BNP", "Null", "Positiv — lavere import løfter BNP netto"],
      explanation: "$\\Delta Y = \\frac{1}{1-c_1(1-t)-b_1}\\Delta z^I$. Nevneren er positiv (stabilitetsvilkår), så $m > 0$; et negativt sjokk gir $\\Delta Y < 0$.",
    },
    {
      question: "Hva er skattemultiplikatoren i den lukkede modellen med endogen skatt?",
      options: ["$\\frac{-c_1}{1 - c_1(1-t) - b_1}$", "$\\frac{1}{1 - c_1(1-t) - b_1}$", "$\\frac{-c_1}{1 - c_1(1-t) - b_1 + a}$", "$\\frac{-1}{1 - c_1(1-t) - b_1}$"],
      explanation: "Telleren er $-c_1$: en skatteøkning senker disponibel inntekt og dermed konsumet med andelen $c_1$. Negativt fortegn (skatt opp → BNP ned) og svakere enn G-multiplikatoren fordi $c_1 < 1$.",
    },
    {
      question: "Skatten heves, men inngangen øker mindre enn ventet. Hvilket ledd i $\\Delta T = \\Delta z^T + t\\Delta Y$ forklarer det?",
      options: ["Det endogene leddet $t\\Delta Y$: aktiviteten faller, så skattegrunnlaget krymper", "Det direkte leddet $\\Delta z^T$: satsøkningen virker ikke fullt ut, fordi bare en del av den vedtatte satsen slår inn i inngangen", "Ingen av leddene: inngangen følger alltid satsen krone for krone, siden skattegrunnlaget $Y$ ligger fast etter et skattesjokk", "Det direkte leddet $\\Delta z^T$ virker ikke fullt ut, fordi satsøkningen automatisk dempes av konsumveksten"],
      explanation: "Skatteøkningen senker BNP ($\\Delta Y < 0$), og det endogene leddet $t\\Delta Y$ blir negativt. Grunnlagseffekten motvirker dermed en del av satsøkningen — dekomponeringen er et fast karakterskille.",
    },
    {
      question: "Hva er budsjettvirkningen $\\Delta B$ av en økning i offentlige kjøp ($\\Delta G > 0$) i modellen uten akselerator?",
      options: ["$\\Delta B < 0$ — budsjettet svekkes, fordi $t \\cdot m < 1$", "$\\Delta B > 0$ — den økte aktiviteten gir full skattemessig inndekning av utgiften", "$\\Delta B = 0$ — skatteveksten $t\\Delta Y$ balanserer utgiften nøyaktig, slik at $t \\cdot m = 1$", "$\\Delta B = \\Delta G$ — utgiften belaster fullt ut"],
      explanation: "$\\Delta B = t\\Delta Y - \\Delta G = (tm - 1)\\Delta G$. Uten akselerator gjelder $tm < 1$ (den økte skatten dekker bare en brøkdel av utgiftsøkningen), så $\\Delta B < 0$. Med sterk akselerator kan $tm > 1$ — derfor er fortegnet ubestemt i den generelle modellen.",
    },
    {
      question: "Hvorfor kan $\\Delta B$ etter et kutt i offentlige kjøp ($\\Delta G < 0$) være fortegnsubestemt i en generell modell?",
      options: ["Skattefallet ($t\\Delta Y < 0$) forverrer, mens utgiftskuttet ($-\\Delta G > 0$) forbedrer — de trekker hver sin vei", "Fordi budsjettbalansen aldri lar seg beregne: verken skatteinngangen $t\\Delta Y$ eller utgiftsendringen $\\Delta G$ kan tallfestes i en generell modell", "Fordi et kutt i $G$ ikke påvirker BNP: aktivitetsnivået er bestemt uavhengig av etterspørselen, så bare utgiftssiden av balansen endrer seg", "Fordi et kutt i offentlige kjøp $G$ verken påvirker BNP eller den endogene skatteinngangen $t\\,\\Delta Y$, slik at balansen alltid forbedres"],
      explanation: "To motstridende ledd: kuttet forbedrer balansen direkte, men den svakere aktiviteten senker skatteinngangen. Nettoeffekten avhenger av parametrene og skal flagges eksplisitt — toppkandidat-markøren.",
    },
    {
      question: "Spareparadokset: hva skjer med samlet sparing når husholdningene vil spare mer ($\\Delta z^C < 0$)?",
      options: ["Den kan falle, fordi lavere BNP senker inntekten og dermed sparingen ($S = I = z^I + b_1 Y$)", "Den stiger alltid like mye som spareønsket", "Den blir null", "Den stiger like mye som spareønsket, siden $z^I$ tilpasser seg passivt"],
      explanation: "Forbrukskuttet senker BNP. I lukket økonomi er $S = I = z^I + b_1 Y$, så $\\Delta S = b_1\\Delta Y < 0$. Det som er rasjonelt for den enkelte, senker samlet sparing — paradokset.",
    },
    {
      question: "Et eksportfall gir mindre BNP-utslag i åpen enn i lukket økonomi. Hvorfor?",
      options: ["Importlekkasjen $+a$ i nevneren gjør den åpne multiplikatoren mindre", "Eksport teller dobbelt i åpen økonomi: sjokket inngår både i $X$ og i importleddet, slik at det regnes med to ganger", "Renten justeres automatisk i åpen økonomi, slik at pengepolitikken nøytraliserer en del av eksportfallet", "Fordi eksportinntektene teller dobbelt i en åpen økonomi og dermed forsterker hver multiplikatorrunde"],
      explanation: "Den åpne nevneren $1-c_1(1-t)-b_1+a$ er større enn den lukkede, så multiplikatoren er mindre. En del av etterspørselsfallet lekker ut via lavere import, som demper hver runde.",
    },
    {
      question: "To autonome sjokk av samme kronestørrelse, $\\Delta z^I$ og $\\Delta z^C$, i samme modell. BNP-utslagene er:",
      options: ["Like store — begge går gjennom samme multiplikator", "$\\Delta z^I$ gir alltid størst utslag, fordi investeringssjokk får sin egen, større multiplikator", "$\\Delta z^C$ gir størst utslag i BNP via $c_1$", "$\\Delta z^I$ gir størst utslag, fordi investeringer utløser en ekstra akseleratorrunde via $b_1$"],
      explanation: "Alle autonome etterspørselsledd samles i $\\Delta z$ og multipliseres med samme $m$. Samme kronestørrelse gir identisk BNP-utslag uansett hvilket $z$-ledd sjokket treffer.",
    },
    {
      question: "Hvilken skatteregime gir størst BNP-utslag av et gitt sjokk?",
      options: ["Eksogen skatt ($t = 0$) — ingen skattelekkasje i rundene", "Endogen skatt ($t > 0$) — sterkest forsterkning, fordi skatteinngangen $t\\Delta Y$ pumpes tilbake i hver runde", "Begge gir likt utslag, siden skattesatsen $t$ ikke inngår i nevneren $1 - c_1 - b_1$", "Endogen skatt ($t > 0$) — den automatiske stabilisatoren forsterker hver multiplikatorrunde kraftig"],
      explanation: "Med $t = 0$ er nevneren $1-c_1-b_1$, mindre enn $1-c_1(1-t)-b_1$ → større multiplikator. Uten skattelekkasje sirkulerer mer av hver krone videre. Endogen skatt er en automatisk stabilisator.",
    },
    {
      question: "Hva menes med å regne følgestørrelser «ved innsetting»?",
      options: ["Sette multiplikatoruttrykket for $\\Delta Y$ inn i definisjonene av $C$, $T$, $B$, $S$ og signere", "Sette inn tallverdier for parametrene og få et rent tall for $\\Delta Y$", "Sette opp IS-RR-PK-diagrammet på nytt for hver følgestørrelse", "Sette tallverdiene for $c_1$, $t$ og $b_1$ inn i selve multiplikatorbrøken"],
      explanation: "Sjanger F: man tar det utledede $\\Delta Y = m\\Delta z$ og setter det inn i f.eks. $\\Delta C = \\Delta z^C + c_1(1-t)\\Delta Y$, $\\Delta T = t\\Delta Y$, og fastsetter fortegnet på hver.",
    },
    {
      question: "En G-økning gir større BNP-utslag enn en like stor skattelette. Hvorfor?",
      options: ["G virker krone for krone; skatteletten bare via konsumet ($c_1 < 1$, resten spares)", "Skattelette virker direkte på etterspørselen: hele beløpet brukes umiddelbart, så telleren i skattemultiplikatoren er $1$", "$G$ har en importlekkasje som skatteletten ikke har, og andelen $a$ av offentlige kjøp forsvinner derfor ut i hver runde", "Skatteletten virker direkte på samlet etterspørsel, mens $G$ bare øker husholdningenes disponible inntekt"],
      explanation: "G-multiplikatorens teller er $1$, skattemultiplikatorens er $c_1 < 1$. Offentlige kjøp treffer etterspørselen direkte; et skattekutt øker bare disponibel inntekt, og bare andelen $c_1$ av den brukes.",
    },
    {
      question: "I en åpen modell med motsyklisk G-regel: hva er nevneren i multiplikatoren?",
      options: ["$1 - c_1(1-t) - b_1 + a + g$", "$1 - c_1(1-t) - b_1$", "$1 - c_1(1-t) - b_1 + a$", "$1-c_1(1-t)-b_1-a-g$"],
      explanation: "Importlekkasjen legger $+a$ og G-regelen legger $+g$ til nevneren. Dette er den minste multiplikatoren av variantene, fordi flest lekkasjeledd demper.",
    },
    {
      question: "Hva innebærer sensorregelen «bruk kun variantens egne mekanismer»?",
      options: ["Ikke omtal skatte-, import- eller renteeffekter som ikke finnes i den oppgitte modellen", "Bruk alltid alle mekanismer for sikkerhets skyld — omtale av lekkasjer modellen ikke inneholder, kan aldri trekke ned besvarelsen", "Utelat mekanismeforklaringen helt: sensor vurderer bare ligningene og fortegnet, så omtale av lekkasjene i modellen er overflødig", "Ta alltid med både skatte-, import- og renteeffekter for sikkerhets skyld, uansett hvilken variant oppgaven gjelder"],
      explanation: "§5.2: en forenklet variant uten skatt har ingen skattelekkasje å omtale; en lukket modell har ingen importlekkasje. Å dra inn fremmede mekanismer gir trekk (eksplisitt advart mot i H2022).",
    },
    {
      question: "En kombinasjonsoppgave med $\\Delta X < 0$ og $\\Delta z^I > 0$. Når stiger BNP netto?",
      options: ["Når $\\Delta z^I > |\\Delta X|$ — investeringsløftet overgår eksportfallet", "Alltid, siden investeringssjokket er positivt: et positivt $\\Delta z^I$ løfter BNP uansett hvor stort eksportfallet er", "Aldri, siden eksportfallet $\\Delta X < 0$ alltid dominerer summen $\\Delta z$, uansett størrelsen på investeringsløftet", "Alltid, siden et positivt investeringssjokk går gjennom en større multiplikator enn eksportsjokket gjør"],
      explanation: "De autonome leddene summeres i $\\Delta z = \\Delta z^I + \\Delta X$ og multipliseres med den positive multiplikatoren. Nettofortegnet på $\\Delta Y$ følger fortegnet på summen.",
    },
    {
      question: "Hva er forskjellen på privat sparing og total sparing?",
      options: ["Privat sparing er $S^P = Y - T - C$; total sparing er $S = Y - C - C^G$", "De er alltid like: både skatten $T$ og det offentlige konsumet $C^G$ trekkes fra i begge sparebegrepene", "Privat sparing inkluderer det offentlige konsumet $C^G$, slik at den regnes ut som $S^P = Y - T - C - C^G$", "Privat sparing inkluderer det offentlige konsumet $C^G$, mens total sparing kun trekker fra skatten $T$"],
      explanation: "§5.5 er en klassisk feilkilde: $S^P = Y - T - C$ (etter skatt) er ikke det samme som total sparing $S = Y - C - C^G$. De må holdes fra hverandre i følgestørrelsesregningen.",
    },
    {
      question: "Hvorfor er determinerthetstesten (sjanger C) standardåpningen på en modelloppgave?",
      options: ["Den bekrefter at likevekten er entydig bestemt — antall ligninger = antall endogene", "Den gir flest poeng av alle deloppgaver", "Den erstatter multiplikatorutledningen", "Den erstatter utledningen: determinerthet gir fortegnet på $\\Delta Y$"],
      explanation: "Man teller og navngir de endogene variablene og sjekker at det er like mange ligninger. Billige, sikre poeng (3–8 %) som må sitte, og som avklarer hvilken variant man arbeider i.",
    },
    {
      question: "Hva demper og hva forsterker multiplikatorrundene i en åpen økonomi med endogen skatt?",
      options: ["Demper: skattelekkasje $t$ og importlekkasje $a$. Forsterker: investeringsakselerator $b_1$", "Demper: akseleratoren $b_1$ bremser hver runde. Forsterker: skatten $t$ og importen $a$ pumper kroner tilbake i kretsløpet", "Alt demper; ingenting forsterker: både skatten $t$, importen $a$ og akseleratoren $b_1$ trekker kroner ut av hver runde", "Demper: investeringsakseleratoren $b_1$. Forsterker: både skattelekkasjen $t$ og importlekkasjen $a$"],
      explanation: "Skatt og import trekker kroner ut av kretsløpet i hver runde (dempere), mens investeringsakseleratoren $b_1$ gjør at høyere aktivitet trekker med seg mer investering (forsterker). Renten er fast her.",
    },
  ],
  'econ1310-3-1': [
    {
      question: "Hvorfor gir én krone i økte offentlige kjøp mer BNP enn én krone i skattelette?",
      options: ["G går direkte inn i etterspørselen, mens skattelette bare virker indirekte via konsum (andel $c_1 < 1$)", "Skattelette går direkte inn i etterspørselen, mens G bare virker via konsumandelen $c_1$", "De gir nøyaktig samme BNP-effekt, fordi hele kronen ender opp som etterspørsel i begge tilfeller og multipliseres med samme multiplikator", "G finansieres av oljefondet og teller dobbelt, mens skattekutt bare flytter penger"],
      explanation: "Offentlige kjøp er selv en etterspørselspost — hele kronen starter multiplikatorprosessen. Et skattekutt blir bare til etterspørsel i den grad husholdningene konsumerer det, altså andelen $c_1 < 1$; resten spares.",
    },
    {
      question: "Hvordan ser G-multiplikatoren ut i lukket økonomi med endogen skatt (rente fast)?",
      options: ["$\\frac{1}{1 - c_1(1-t) - b_1}$", "$\\frac{c_1}{1 - c_1(1-t) - b_1}$", "$\\frac{-c_1}{1 - c_1(1-t) - b_1}$", "$\\frac{1}{1 - c_1(1-t) - b_1 + a}$"],
      explanation: "G-multiplikatoren har telleren 1 fordi hele G-sjokket går inn i etterspørselen. Telleren $c_1$ hører til skattemultiplikatoren, og $+a$ i nevneren hører til åpen økonomi.",
    },
    {
      question: "Med $c_1 = 0{,}8$: hvor stor er skattemultiplikatoren i tallverdi sammenlignet med G-multiplikatoren?",
      options: ["80 % av G-multiplikatoren — telleren er $c_1$ i stedet for 1", "Like stor — de har samme teller og nevner", "125 % — skatt virker sterkere, telleren er 1", "20 % av G-multiplikatoren — bare spareandelen teller"],
      explanation: "De to har samme nevner, men skattemultiplikatoren har telleren $c_1 = 0{,}8$ der G-multiplikatoren har 1. I tallverdi blir skattevirkningen dermed 80 % av G-virkningen — resten av skatteendringen slår ut i sparing.",
    },
    {
      question: "Hva blir nettoeffekten på BNP av å øke G og finansiere det med en like stor eksogen skatteøkning?",
      options: ["Positiv — den balanserte budsjettmultiplikatoren $\\frac{1-c_1}{1 - c_1(1-t) - b_1}$ er større enn null", "Null, fordi G-økningen og den like store skatteøkningen alltid opphever hverandre krone for krone i denne modellen", "Negativ, fordi skatteøkningen trekker ut en full krone mens G-økningen bare virker med andelen $c_1$, slik at differansen blir negativ", "Alltid nøyaktig lik $c_1$, siden bare konsumandelen av den ekstra kronen blir stående igjen når budsjettet holdes i balanse"],
      explanation: "Utledningen gir $\\Delta Y = \\frac{(1-c_1)\\Delta G}{1 - c_1(1-t) - b_1} > 0$. G løfter med full krone, skatten demper bare med andelen $c_1$, så differansen $(1-c_1)$ er positiv.",
    },
    {
      question: "I den enkleste modellen uten skattelekkasje og investeringsakselerator ($t = 0$, $b_1 = 0$) er den balanserte budsjettmultiplikatoren lik:",
      options: ["1", "0", "$c_1$", "$\\frac{1}{1-c_1}$"],
      explanation: "$\\frac{1-c_1}{1 - c_1} = 1$. Dette er den klassiske balanserte budsjettmultiplikatoren: en G-økning fullfinansiert av skatt løfter BNP med nøyaktig beløpet i den enkleste modellen.",
    },
    {
      question: "Hva er en automatisk stabilisator?",
      options: ["Et trekk ved budsjettet som demper konjunktursvingninger uten nye politiske vedtak", "Et engangsvedtak i Stortinget om å øke G i en krise, slik at etterspørselen løftes når konjunkturen svikter", "En regel om at budsjettet alltid skal balanseres, også midt i en dyp lavkonjunktur med høy ledighet", "Sentralbankens rentesetting, altså at styringsrenten settes ned i nedgangstider og opp i oppgangstider av seg selv"],
      explanation: "Automatiske stabilisatorer, som den endogene skatten $t$, demper svingninger av seg selv — skatteinngangen $tY$ stiger i oppgang og faller i nedgang uten at noe må vedtas.",
    },
    {
      question: "Hvilken parameter er den viktigste automatiske stabilisatoren i Keynes-modellen?",
      options: ["Skattesatsen $t$ i den endogene skatten $T = z^T + tY$", "Den marginale konsumtilbøyeligheten $c_1$", "Investeringsakseleratoren $b_1$", "Den eksogene skatten $z^T$"],
      explanation: "Skattesatsen $t$ gjør skatteinngangen konjunkturfølsom: den trekker inn kjøpekraft i oppgang og slipper til kjøpekraft i nedgang, helt automatisk.",
    },
    {
      question: "Hva skjer med multiplikatoren når skattesatsen $t$ øker?",
      options: ["Den blir mindre — skattelekkasjen demper hver multiplikatorrunde", "Den blir større fordi staten får mer skatteinntekter å bruke og pumpe ut i hver runde", "Den er upåvirket av $t$, fordi skattesatsen bare flytter kroner mellom stat og husholdninger uten å endre nevneren", "Den blir negativ, fordi en høyere $t$ gjør leddet $c_1(1-t)$ større enn 1 og dermed nevneren mindre enn null"],
      explanation: "En høyere $t$ gjør leddet $c_1(1-t)$ mindre, altså nevneren $1 - c_1(1-t) - b_1$ større og multiplikatoren mindre. Sterkere automatisk stabilisering gir svakere konjunkturutslag.",
    },
    {
      question: "Hva er forskjellen på automatisk og diskresjonær finanspolitikk?",
      options: ["Automatiske stabilisatorer virker uten vedtak; diskresjonær politikk krever aktive beslutninger", "Automatisk politikk krever aktive vedtak i hvert enkelt tilfelle, mens diskresjonær politikk virker av seg selv uten beslutningslag", "Det er ingen forskjell — begrepene er synonyme, og skattesatsen $t$ og vedtatte endringer i G virker på nøyaktig samme måte", "Automatisk politikk gjelder skatt og G, diskresjonær bare styringsrenten"],
      explanation: "Automatiske stabilisatorer (som $t$) demper svingninger av seg selv. Diskresjonær politikk er bevisste vedtak om å endre G eller skattesatser, og møter besluttnings- og virkningslag.",
    },
    {
      question: "Hva er besluttningslaget ved diskresjonær finanspolitikk?",
      options: ["Tiden fra et behov oppstår til tiltaket faktisk vedtas", "Tiden fra vedtak til tiltaket virker", "Tiden det tar for skatten å bli betalt inn", "Forsinkelsen i sentralbankens rentebeslutninger"],
      explanation: "Besluttningslaget er tiden det tar å utrede, behandle og vedta et tiltak. Virkningslaget kommer i tillegg — fra vedtak til effekt i økonomien.",
    },
    {
      question: "Landet vil stramme inn budsjettet med minst mulig BNP-skade. Hvilket virkemiddel bør velges?",
      options: ["Skatteøkning, fordi skatt virker svakest på etterspørselen per krone", "G-kutt, fordi det fjerner en full krone fra etterspørselen og gir størst innsparing", "Begge gir nøyaktig samme BNP-skade, siden en spart krone er en spart krone enten den tas fra G eller fra husholdningene", "Rentekutt fra sentralbanken, som strammer inn budsjettbalansen uten å koste aktivitet i økonomien"],
      explanation: "Speilvendt av stimulans-argumentet: et G-kutt fjerner en full krone fra etterspørselen, en skatteøkning bare andelen $c_1$. Skatt gir derfor minst aktivitetsskade per innsparte krone.",
    },
    {
      question: "Hvorfor kalles det å kutte G i en nedgangskonjunktur for å balansere budsjettet 'prosyklisk'?",
      options: ["Fordi det forsterker nedgangen i stedet for å dempe den", "Fordi kuttet i G demper nedgangen ekstra effektivt og trekker etterspørselen opp mot utgangspunktet igjen", "Fordi et G-kutt bare påvirker inflasjonen og lar samlet etterspørsel og BNP være uendret", "Fordi det øker den automatiske stabiliseringen og motvirker nedgangen"],
      explanation: "Når skatteinntektene faller i en nedgang og staten kutter G for å balansere budsjettet, trekkes etterspørselen ytterligere ned — politikken forsterker konjunkturbevegelsen (prosyklisk).",
    },
    {
      question: "Et skattekutt på 100 kr med $c_1 = 0{,}8$: hvor mye øker konsumet i første runde?",
      options: ["80 kr (andelen $c_1$ av kuttet)", "100 kr (hele kuttet)", "20 kr", "0 kr — skatt gir ikke konsum"],
      explanation: "Husholdningene bruker andelen $c_1 = 0{,}8$ av den økte disponible inntekten på konsum: $0{,}8 \\cdot 100 = 80$ kr. De resterende 20 kr spares (sparelekkasjen).",
    },
    {
      question: "Hva er sparelekkasjen ved et skattekutt?",
      options: ["Den delen $(1 - c_1)$ av den økte disponible inntekten som spares i stedet for å konsumeres", "Den delen $(1 - c_1)$ som betales tilbake til staten som skatt $tY$", "Hele skattekuttet, siden ingenting av det konsumeres", "Investeringene som følger av høyere BNP"],
      explanation: "Bare $c_1$ av et skattekutt blir konsum; andelen $(1 - c_1)$ spares. Denne sparelekkasjen er grunnen til at skatt virker svakere enn G.",
    },
    {
      question: "Hvorfor forsterker investeringsakseleratoren $b_1$ multiplikatorprosessen?",
      options: ["Fordi høyere aktivitet trekker med seg mer investering, som løfter etterspørselen ytterligere", "Fordi den demper skattelekkasjen: investeringene $b_1 Y$ dekker den skatten husholdningene ellers ville betalt i hver runde", "Fordi den gjør skattemultiplikatoren negativ og dermed demper hver eneste multiplikatorrunde merkbart", "Fordi den bare påvirker importen, slik at $b_1$ virker gjennom utenrikshandelen og ikke gjennom innenlandsk etterspørsel"],
      explanation: "Med $I = z^I + b_1 Y$ øker investeringene når $Y$ stiger. Det legger til ekstra etterspørsel i hver multiplikatorrunde, og gjør nevneren mindre — altså multiplikatoren større.",
    },
    {
      question: "Hva menes med ekspansiv finanspolitikk?",
      options: ["Økt G eller skattelette som løfter samlet etterspørsel", "Kutt i G eller skatteøkning som demper samlet etterspørsel i en høykonjunktur", "At sentralbanken kutter styringsrenten for å løfte samlet etterspørsel i en lavkonjunktur", "At budsjettet alltid holdes i balanse, slik at G og skatteinntektene følger hverandre år for år"],
      explanation: "Ekspansiv finanspolitikk øker samlet etterspørsel — typisk brukt i lavkonjunktur. Kontraktiv finanspolitikk (kutt i G eller skatteøkning) demper etterspørselen.",
    },
    {
      question: "Hvilket argument taler for å la automatiske stabilisatorer ta mye av konjunkturjobben?",
      options: ["De virker umiddelbart, uten besluttnings- og virkningslag", "De opphever alltid sjokket fullstendig", "De krever hyppige politiske vedtak", "De er alltid sterkere enn diskresjonær politikk"],
      explanation: "Automatiske stabilisatorer virker med en gang, uten forsinkelser fra vedtak og iverksetting. Ulempen er at de bare demper, ikke opphever, så store sjokk kan kreve aktiv politikk i tillegg.",
    },
    {
      question: "En eksportsvikt trekker BNP ned. Hvordan virker den endogene skatten som støtdemper?",
      options: ["Skatteinngangen $tY$ faller automatisk, slik at disponibel inntekt og konsum faller mindre", "Skatteinngangen $tY$ øker automatisk når $Y$ faller, og forsterker dermed hele nedgangen ytterligere", "Skatteinngangen er uendret fordi hele skatten er eksogen $z^T$, slik at budsjettet ikke demper eksportsvikten", "Sentralbanken senker skattesatsen $t$ ved eget vedtak når eksporten svikter, slik at disponibel inntekt holdes oppe"],
      explanation: "Når $Y$ faller, faller $tY$ automatisk. Husholdningene beholder en større andel av inntektsfallet som disponibel inntekt, slik at konsum- og BNP-fallet dempes — uten noe vedtak.",
    },
    {
      question: "Hva sier stabilitetsvilkåret $1 - c_1(1-t) - b_1 > 0$ om multiplikatoren?",
      options: ["Nevneren er positiv og mindre enn 1, slik at multiplikatoren er positiv og større enn 1", "Multiplikatoren er negativ fordi nevneren blir mindre enn null", "Multiplikatoren er nøyaktig lik 1, fordi vilkåret gjør nevneren $1 - c_1(1-t) - b_1$ lik 1 uansett parameterverdier", "Multiplikatoren er udefinert, siden vilkåret ikke sier noe om fortegnet til nevneren"],
      explanation: "Vilkåret garanterer en positiv nevner mindre enn 1 (siden $c_1(1-t) + b_1 > 0$), slik at $m = \\frac{1}{1 - c_1(1-t) - b_1} > 1$. Fortegnet skal alltid fastsettes eksplisitt.",
    },
    {
      question: "Hva er budsjettbalansen $B$, og hvordan endres den på tilvekstform?",
      options: ["$B = T - G$, og $\\Delta B = \\Delta T - \\Delta G$", "$B = G - T$, og på tilvekstform $\\Delta B = \\Delta G - \\Delta T$", "$B = Y - C$, og $\\Delta B = \\Delta Y - \\Delta C$", "$B = C + I + G$"],
      explanation: "Budsjettbalansen er skatteinntekter minus offentlige kjøp, $B = T - G$. På endringsform blir $\\Delta B = \\Delta T - \\Delta G$, som brukes til å analysere hvordan finanspolitiske tiltak slår ut på over-/underskuddet.",
    },
  ],
  'econ1310-3-2': [
    {
      question: "Hva sier handlingsregelen om bruk av oljepenger?",
      options: ["Bruken skal over tid tilsvare forventet realavkastning av SPU (om lag 3 %), målt ved det strukturelle oljekorrigerte underskuddet", "Nøyaktig 3 % av fondet skal brukes hvert eneste år", "Hele den årlige oljeinntekten skal brukes direkte over statsbudsjettet hvert år", "Fondet skal tømmes gradvis over 20 år, med like store uttak hvert år"],
      explanation: "Regelen knytter bruken til forventet realavkastning (~3 %) over tid, målt ved det strukturelle underskuddet. Den vanligste feilen er å si «3 % hvert år» — regelen er konjunkturfleksibel.",
    },
    {
      question: "Hvorfor er formuleringen «over tid» sentral i handlingsregelen?",
      options: ["Fordi man kan bruke mindre enn 3 % i oppgang og mer i nedgang, slik at politikken jevner ut konjunkturene", "Fordi handlingsregelen krever at nøyaktig 3 % av fondsverdien tas ut hvert eneste budsjettår, enten økonomien er i oppgang eller nedgang", "Fordi fondet bare vokser over tid, slik at 3 %-banen stiger hvert år", "Fordi «over tid» bare viser til perioden fram til 2017, da uttaksbanen ble senket fra 4 % til 3 %, og formuleringen har ingen betydning i dag"],
      explanation: "«Over tid» gir konjunkturfleksibilitet: mindre bruk i gode tider, mer i dårlige. Slik virker finanspolitikken konjunkturutjevnende i stedet for prosyklisk.",
    },
    {
      question: "Hva er Statens pensjonsfond utland (SPU)?",
      options: ["Fondet der statens netto kontantstrøm fra petroleumsvirksomheten plasseres, investert i utlandet", "Statens driftskonto for løpende utgifter, der oljeinntektene står til de brukes over statsbudsjettet samme år", "Et statlig fond som utelukkende investerer statens oljeinntekter i norsk fastlandsindustri og infrastruktur", "Norges Banks valutareserver, altså beholdningen sentralbanken holder for å kunne gripe inn i valutamarkedet"],
      explanation: "SPU («oljefondet») samler statens oljeinntekter og investerer dem i utlandet, både for avkastning og for å skjerme fastlandsøkonomien mot for stor og svingende oljepengebruk.",
    },
    {
      question: "Hvorfor investeres SPU i utlandet framfor i norsk økonomi?",
      options: ["For å skjerme fastlandsøkonomien mot for stort press på etterspørsel, kostnader og kronekurs", "Fordi loven forbyr fondet å investere i norsk økonomi, uansett hvor god avkastningen i Norge måtte være", "Fordi utenlandske investeringer aldri kan tape verdi", "For å slippe å betale skatt på avkastningen i Norge"],
      explanation: "Ved å plassere pengene ute unngår man at hele oljeinntekten løftes rett inn i norsk økonomi, noe som ellers ville presset opp etterspørsel, kostnadsnivå og kronekurs (hollandsk syke).",
    },
    {
      question: "Hva er det oljekorrigerte underskuddet?",
      options: ["Det faktiske budsjettunderskuddet utenom petroleumsinntektene, som svinger med konjunkturen", "Det konjunkturrensede, strukturelle underskuddet handlingsregelen styrer etter, glattet for skattesvingninger over konjunkturen", "Fondets samlede markedsverdi ved utgangen av året", "Overskuddet på handelsbalansen, altså eksportinntekter minus importutgifter, der petroleumseksporten utgjør hoveddelen"],
      explanation: "Det oljekorrigerte underskuddet er det faktiske hullet i budsjettet når man ser bort fra oljeinntektene. Det svinger med konjunkturen — skatteinntekter faller i nedgang og utgifter stiger.",
    },
    {
      question: "Hva er det strukturelle oljekorrigerte underskuddet?",
      options: ["Det oljekorrigerte underskuddet renset for konjunktursvingninger — den underliggende oljepengebruken", "Det faktiske oljekorrigerte underskuddet i det aktuelle året, medregnet konjunktursvingninger", "Underskuddet medregnet statens petroleumsinntekter, altså den totale budsjettbalansen", "Fondets forventede realavkastning på 3 % av fondsverdien"],
      explanation: "Det strukturelle tallet fjerner konjunktureffekten og viser den underliggende, politisk bestemte bruken. Det er dette handlingsregelen måler mot 3 %-banen.",
    },
    {
      question: "Hvorfor styrer finanspolitikken etter det strukturelle framfor det faktiske underskuddet?",
      options: ["For å unngå prosyklisk politikk — det faktiske underskuddet svinger med konjunkturen", "Fordi det strukturelle tallet alltid er større og gir mer handlingsrom", "Fordi det faktiske underskuddet ikke kan måles", "Fordi EUs budsjettregler pålegger Norge å styre etter det strukturelle og ikke det faktiske underskuddet"],
      explanation: "Det faktiske (oljekorrigerte) underskuddet stiger automatisk i nedgang. Styrte man etter det, måtte man kuttet i nedgang — prosyklisk. Det strukturelle tallet renser bort konjunktureffekten.",
    },
    {
      question: "Hvorfor ble bruksbanen i handlingsregelen nedjustert fra 4 % til 3 % i 2017?",
      options: ["Fordi forventet realavkastning i finansmarkedene hadde falt", "Fordi fondet ble mindre etter store tap i finansmarkedene under uroen", "Fordi oljeprisen steg, slik at fondet fikk større inntekter enn bruksbanen forutsatte", "Fordi Norge gikk ut av handlingsregelen og erstattet den med et fast utgiftstak"],
      explanation: "Anslaget for forventet realavkastning ble justert ned i takt med lavere avkastningsnivå i markedene. For å bevare fondets realverdi måtte innfasingen tilpasses, fra 4 % til om lag 3 %.",
    },
    {
      question: "Hva innebærer det at bare realavkastningen av fondet brukes?",
      options: ["Fondets realverdi holdes i prinsippet uendret, slik at også framtidige generasjoner får glede av det", "At fondet tømmes over tid, fordi også kapitalen brukes", "At hele avkastningen reinvesteres, mens bare oljeinntekten brukes", "At oljepengebruken øker med et fast beløp hvert år, uavhengig av avkastningen"],
      explanation: "Ved å bruke kun realavkastningen (justert for prisstigning) bevares fondets realverdi. Dette er begrunnet i generasjonshensynet — oljeformuen er midlertidig og skal fordeles rettferdig.",
    },
    {
      question: "Hva menes med «hollandsk syke» i debatten om oljepengebruk?",
      options: ["At store oljeinntekter via høyt kostnadsnivå og sterk krone svekker og fortrenger konkurranseutsatt industri", "At et kraftig fall i oljeprisen gir varig underskudd og tvinger fram store utgiftskutt", "At fondets plasseringer i utlandet taper verdi, slik at oljepengebruken må kuttes", "At skattene blir for høye fordi oljepengebruken må finansieres med skatt"],
      explanation: "Rask innfasing av oljepenger løfter innenlandsk kostnadsnivå og styrker kronen, noe som svekker eksportindustrien. Dette er et sentralt motargument mot for høy oljepengebruk.",
    },
    {
      question: "Hvordan virker handlingsregelen sammen med de automatiske stabilisatorene?",
      options: ["Den lar det faktiske underskuddet svinge med konjunkturen, slik at skattelekkasjen $t$ får virke fritt", "Den opphever de automatiske stabilisatorene, fordi det strukturelle underskuddet må holdes fast også når skatteinntektene $t$ svinger med konjunkturen", "Den krever innstramming i budsjettet hver gang skatteinntektene faller i en konjunkturnedgang, altså prosyklisk", "Den erstatter behovet for skatt, siden oljepengebruken alene dekker utgiftene og den endogene skatten $t$ dermed blir overflødig"],
      explanation: "Ved å styre det strukturelle underskuddet lar regelen det faktiske underskuddet svinge — større i nedgang. De automatiske stabilisatorene (den endogene skatten $t$) får dermed dempe svingningene uten motsyklisk innstramming.",
    },
    {
      question: "En regjering vil bruke langt mer enn realavkastningen for å finansiere et velferdsløft nå. Hvilket hovedhensyn taler mot dette?",
      options: ["Generasjonshensynet — det tærer på fondets realverdi og reduserer hva framtidige generasjoner kan bruke", "At skattene da må settes til null og hele tjenestetilbudet finansieres av fondet alene", "At fondet da må flyttes hjem og plasseres i norske aksjer og obligasjoner", "At renten automatisk faller når fondsbruken øker"],
      explanation: "Å bruke mer enn realavkastningen tærer på fondets realverdi. Generasjonshensynet — rettferdig fordeling av en midlertidig formue — er et hovedargument for å holde seg til avkastningen.",
    },
    {
      question: "Hva er finanspolitisk handlingsrom?",
      options: ["Rommet til å øke utgifter eller senke skatter uten å bryte handlingsregelen", "Størrelsen på oljefondet målt som andel av fastlands-BNP i det aktuelle budsjettåret", "Sentralbankens rentemargin, altså avstanden mellom styringsrenten og bankenes utlånsrente", "Forskjellen mellom BNP og BNI, altså inntektene nordmenn tjener ute fratrukket utlendingers inntekter i Norge"],
      explanation: "Handlingsrommet er hvor mye myndighetene kan bruke innenfor regelen. Stor oljepengebruk i dag reduserer handlingsrommet i framtiden.",
    },
    {
      question: "Hva er fastlands-BNP?",
      options: ["BNP utenom olje- og gassvirksomhet og utenriks sjøfart", "Samlet BNP inkludert olje- og gassvirksomhet og utenriks sjøfart", "Bare offentlig sektors verdiskaping, altså stat og kommune uten privat næringsliv", "Fondets avkastning, altså den delen av verdiskapingen som kommer fra SPU"],
      explanation: "Fastlands-BNP måler den underliggende norske økonomien uten oljesektorens store, svingende og midlertidige bidrag, og gir et bedre bilde av konjunktursituasjonen.",
    },
    {
      question: "Hvorfor er rask innfasing av oljepenger et problem i en liten åpen økonomi?",
      options: ["Den løfter etterspørsel og kostnadsnivå og styrker kronen, som svekker konkurranseutsatt eksportsektor", "Den senker alltid inflasjonen, fordi økt offentlig etterspørsel presser prisene ned", "Den har ingen realøkonomiske virkninger fordi pengene uansett brukes i utlandet", "Den styrker eksportsektoren fordi kronen svekkes og eksporten blir billigere ute"],
      explanation: "I en liten åpen økonomi virker økt etterspørsel og sterkere krone direkte på konkurranseevnen. Rask innfasing gir hollandsk syke, derfor argumentet for gradvis innfasing.",
    },
  ],
  'econ1310-4-1': [
    {
      question: "Hva uttrykker priskurven $\\frac{W}{P} = \\frac{A}{1+\\mu}$?",
      options: ["Hvilken reallønn bedriftenes prissetting tillater", "Hvilken reallønn fagforeningene krever ved gitt ledighet", "Sammenhengen mellom inflasjon og ledighet", "Hvor mye BNP øker ved et etterspørselssjokk, altså multiplikatorvirkningen av økt samlet etterspørsel"],
      explanation: "Priskurven følger av at bedriftene setter pris som påslag over lønnskostnad; reallønnen som blir igjen til arbeiderne er $\\frac{A}{1+\\mu}$.",
    },
    {
      question: "Hvorfor er priskurven vannrett i $(u, W/P)$-diagrammet?",
      options: ["Fordi reallønnen bedriftene tillater er uavhengig av ledigheten", "Fordi reallønnen bedriftene tillater stiger med $u$", "Fordi lønnskravene faller jevnt med ledigheten $u$, og det er lønnskravet som bestemmer priskurvens forløp", "Fordi påslaget $\\mu$ vokser med ledigheten $u$, og et voksende påslag legger priskurven vannrett i diagrammet"],
      explanation: "$\\frac{A}{1+\\mu}$ inneholder ikke $u$, så prissettingen gir samme reallønnstak uansett ledighet.",
    },
    {
      question: "Hvorfor faller lønnskurven i ledigheten $u$?",
      options: ["Fordi høyere ledighet svekker arbeidstakernes forhandlingsmakt og dermed lønnskravet", "Fordi høyere ledighet hever produktiviteten", "Fordi bedriftene tar høyere påslag $\\mu$ og løfter priskurven ved høy ledighet", "Fordi prisene faller når ledigheten stiger"],
      explanation: "Ledighet disiplinerer lønnskravene: er mange ledige, tør ikke arbeiderne kreve like mye.",
    },
    {
      question: "Hva er likevektsledigheten $u^n$?",
      options: ["Ledigheten der lønns- og priskurven krysser, uten pris- og lønnspress", "Ledigheten når hele arbeidsstyrken er sysselsatt", "Den høyeste ledigheten økonomien kan tåle", "Ledigheten som følger av et negativt etterspørselssjokk"],
      explanation: "I skjæringen er lønnsforhandlingenes krav akkurat forenlig med det prissettingen tillater — den eneste ledigheten uten press.",
    },
    {
      question: "Fagforeningene styrkes varig ($z^W$ øker). Hva skjer med den langsiktige reallønnen?",
      options: ["Den er uendret — priskurven låser den", "Den stiger varig fordi lønnskurven skyves oppover", "Den faller varig, fordi et høyere $z^W$ presser priskurven og dermed reallønnstaket nedover", "Den blir null"],
      explanation: "$z^W$ flytter bare lønnskurven; priskurven står stille, så reallønnen i den nye skjæringen er den samme.",
    },
    {
      question: "Fagforeningene styrkes varig ($z^W$ øker). Hva skjer med likevektsledigheten $u^n$?",
      options: ["Den stiger", "Den faller", "Den er uendret", "Den blir negativ"],
      explanation: "Lønnskurven skyves opp; ny skjæring med den uendrede priskurven ligger lenger til høyre → høyere $u^n$.",
    },
    {
      question: "Hva skjer med reallønn og $u^n$ når bedriftenes påslag $\\mu$ faller (mer konkurranse)?",
      options: ["Høyere reallønn og lavere $u^n$", "Lavere reallønn og høyere $u^n$, fordi et lavere påslag $\\mu$ senker priskurven", "Uendret reallønn og lavere $u^n$, siden $\\mu$ bare flytter lønnskurven", "Høyere reallønn og høyere $u^n$, fordi den høyere reallønnen presser flere ut av arbeid"],
      explanation: "Lavere $\\mu$ løfter priskurven; skjæringen med lønnskurven flyttes opp og til venstre → høyere reallønn OG lavere ledighet.",
    },
    {
      question: "Hvilken variabel skifter lønnskurven?",
      options: ["$z^W$ (lønnspresset)", "$\\mu$ (påslaget)", "$A$ alene", "Produksjonsgapet"],
      explanation: "$z^W$ samler alt som hever lønnskravet ved gitt ledighet; $\\mu$ og $A$ flytter derimot priskurven.",
    },
    {
      question: "En sjenerøs ledighetstrygd (høy kompensasjonsgrad) virker i modellen som...",
      options: ["økt lønnspress ($z^W \\uparrow$), som hever $u^n$", "lavere påslag $\\mu$ i prissettingen, som løfter priskurven og senker $u^n$", "høyere produktivitet $A$, som hever reallønnen og senker $u^n$", "et positivt etterspørselssjokk, som løfter samlet etterspørsel og produksjonen $Y$"],
      explanation: "Høy kompensasjonsgrad hever reservasjonslønna og lønnskravet → lønnskurven opp → høyere likevektsledighet.",
    },
    {
      question: "Hva menes med at bedriftene driver påslagsprising?",
      options: ["De setter prisen som et påslag $\\mu$ over marginalkostnaden", "De setter prisen lik marginalkostnaden uten noe påslag $\\mu$ i det hele tatt", "De setter prisen lik konkurrentenes markedspris", "De setter prisen etter styringsrenten Norges Bank fastsetter, ikke etter egne kostnader"],
      explanation: "Under monopolistisk konkurranse har bedriftene markedsmakt og legger et påslag $\\mu > 0$ oppå kostnaden.",
    },
    {
      question: "Hva skjer med potensielt BNP $Y^n$ når $u^n$ stiger?",
      options: ["Det faller", "Det stiger", "Det er uendret", "Det blir negativt"],
      explanation: "Høyere likevektsledighet betyr at færre er i arbeid i den langsiktige likevekten → lavere $Y^n$.",
    },
    {
      question: "Hvilken markedsform ligger til grunn for priskurven?",
      options: ["Monopolistisk konkurranse", "Fullkommen konkurranse", "Rent monopol", "Planøkonomi"],
      explanation: "Bedriftene selger differensierte produkter og har nok markedsmakt til å sette pris over marginalkostnad (påslag $\\mu$).",
    },
    {
      question: "Koordinert lønnsdannelse (à la frontfaget) virker i modellen ved å...",
      options: ["senke lønnspresset $z^W$, slik at $u^n$ faller", "heve påslaget $\\mu$ og løfte priskurven", "heve den langsiktige reallønnen varig", "skifte priskurven nedover, slik at reallønnstaket $\\frac{A}{1+\\mu}$ blir liggende lavere"],
      explanation: "Koordinering demper samlet lønnskrav → lønnskurven ned → lavere $u^n$, med uendret langsiktig reallønn.",
    },
    {
      question: "En student konkluderer med at sterkere fagforeninger gir varig høyere reallønn. Hva er feilen?",
      options: ["Reallønnen låses av priskurven, som ikke flytter seg — bare $u^n$ endres", "Reallønnen faller alltid ved sterkere fagforeninger fordi lønnskurven skyves nedover", "Fagforeninger påvirker ikke lønn i det hele tatt, verken lønnskravet $z^W$ ved gitt ledighet eller reallønnen", "Priskurven flytter seg opp, ikke lønnskurven, når $z^W$ øker"],
      explanation: "$z^W$ skifter lønnskurven, ikke priskurven; siden priskurven bestemmer reallønnen, er den uendret.",
    },
    {
      question: "Hvor i $(u, W/P)$-diagrammet ligger reallønnen i likevekt?",
      options: ["På priskurvens nivå, i skjæringen med lønnskurven", "Alltid over priskurven, siden lønnskravet i likevekt overstiger reallønnstaket $\\frac{A}{1+\\mu}$", "Alltid under lønnskurven ved $u = 0$, altså der arbeidstakernes lønnskrav er aller høyest", "Der lønnskurven møter den loddrette aksen ved null ledighet"],
      explanation: "Likevekten er skjæringspunktet, og reallønnen der er nettopp priskurvens verdi $\\frac{A}{1+\\mu}$.",
    },
    {
      question: "Hva er reallønnen $W/P$ et uttrykk for?",
      options: ["Kjøpekraften i lønna — hvor mye varer lønna rekker til", "Den nominelle kronelønna uten prisnivået $P$", "Skatten $t$ på arbeidsinntekten", "Bedriftenes overskudd per produsert enhet"],
      explanation: "Nominell lønn delt på prisnivå måler hva lønna faktisk kan kjøpe.",
    },
    {
      question: "Ligger faktisk ledighet lavere enn $u^n$, hva skjer ifølge modellen?",
      options: ["Lønnskravet overstiger priskurvens tak, og pris-/lønnspresset driver ledigheten tilbake mot $u^n$", "Ingenting skjer — økonomien blir liggende på det nye, lavere ledighetsnivået for godt", "Reallønnen faller permanent, mens ledigheten blir liggende under $u^n$", "$u^n$ synker til det nye ledighetsnivået, så gapet lukkes uten prispress"],
      explanation: "Ved $u < u^n$ er arbeiderne så sterke at kravet overstiger prissettingens tak → prisøkning → tilbake mot $u^n$.",
    },
    {
      question: "En større skattekile på arbeid virker i modellen typisk som...",
      options: ["økt lønnspress som kan heve $u^n$", "lavere påslag $\\mu$, som løfter priskurven og senker $u^n$", "et positivt produktivitetssjokk, som hever $A$ og løfter priskurven", "et etterspørselssjokk som bare virker på produksjonen på kort sikt"],
      explanation: "Arbeiderne krever høyere bruttolønn for å opprettholde netto → lønnskurven opp → høyere likevektsledighet.",
    },
    {
      question: "Hvilket av tiltakene senker $u^n$ ved å løfte priskurven (ikke lønnskurven)?",
      options: ["Sterkere konkurranse i produktmarkedene (lavere $\\mu$)", "Mer sjenerøs ledighetstrygd (høyere $z^W$)", "Sterkere fagforeninger, som løfter priskurven og dermed reallønnstaket", "Høyere minstelønn, som løfter priskurven og senker $u^n$ uten å røre $z^W$"],
      explanation: "Konkurransepolitikk senker påslaget $\\mu$ → priskurven opp → lavere $u^n$ og høyere reallønn. De øvrige hever $z^W$.",
    },
    {
      question: "Hvorfor er lønns- og priskurvemodellen fundamentet for Phillips-kurven?",
      options: ["Fordi den bestemmer $u^n$ og $Y^n$, som avvik måles fra i Phillips-kurven", "Fordi den gir styringsrenten direkte, slik at Phillips-kurven kan leses av fra rentebanen", "Fordi den erstatter Keynes-modellen fullstendig", "Fordi den bestemmer valutakursen, og det er kronekursen Phillips-kurven måler avvik fra"],
      explanation: "Produksjonsgapet i Phillips-kurven er $\\frac{Y-Y^n}{Y^n}$, og $Y^n$ (via $u^n$) fastsettes nettopp her.",
    },
  ],
  'econ1310-4-2': [
    {
      question: "Hvordan skrives Phillips-kurven i Holden-form?",
      options: ["$\\pi = \\pi^e + \\beta\\frac{Y-Y^n}{Y^n} + z^\\pi$", "$\\pi = \\pi^e - \\beta\\frac{Y-Y^n}{Y^n} + z^\\pi + \\mu$", "$\\pi = \\beta(Y - Y^n) + z^\\pi$", "$Y = Y^n + \\beta(\\pi - \\pi^e)$"],
      explanation: "Inflasjonen er forventet inflasjon pluss et positivt bidrag fra det relative produksjonsgapet pluss kostnadssjokket.",
    },
    {
      question: "Hva er første ledd i kausalkjeden bak $\\beta$ etter et høyere produksjonsgap?",
      options: ["Lavere ledighet", "Høyere marginalkostnad", "Høyere inflasjon — prisene stiger først, før arbeidsmarkedet reagerer", "Krona faller"],
      explanation: "Økt produksjon krever mer arbeidskraft, så ledigheten faller under $u^n$.",
    },
    {
      question: "Hvilket ledd i kausalkjeden hoppes oftest over ifølge sensor?",
      options: ["Marginalkostnad → pris settes som påslag over marginalkostnad", "Lavere ledighet → sterkere forhandlingsmakt → høyere lønn", "Høyere gap → lavere ledighet", "Høyere lønn → høyere inflasjon direkte"],
      explanation: "Uten leddet marginalkostnad→påslagsprising henger kjeden i løse lufta; det er broen fra lønn til pris.",
    },
    {
      question: "Hva fanger $z^\\pi$ i Phillips-kurven?",
      options: ["Kostnadssjokk som energi, importpriser og råvarer", "Forventet inflasjon, altså $\\pi^e$ som aktørene legger til grunn i lønns- og prissettingen", "Produksjonsgapet $\\frac{Y-Y^n}{Y^n}$, altså det innenlandske etterspørselspresset", "Sentralbankens styringsrente og pengepolitikk"],
      explanation: "$z^\\pi$ er skiftvariabelen for kostnadsdrevet inflasjon uavhengig av innenlandsk gap.",
    },
    {
      question: "Hva betyr det at $\\beta > 0$?",
      options: ["Et positivt produksjonsgap presser inflasjonen opp", "Inflasjonen er alltid positiv, uansett hvilket fortegn produksjonsgapet har", "Ledigheten øker automatisk sammen med inflasjonen langs kurven", "Forventningene er forankret, slik at $\\pi^e$ ligger fast på inflasjonsmålet"],
      explanation: "$\\beta$ er helningen; positiv $\\beta$ betyr at høyere gap gir høyere inflasjon.",
    },
    {
      question: "Hva er produksjonsgapet i Phillips-kurven?",
      options: ["$\\frac{Y-Y^n}{Y^n}$ — det relative avviket fra potensielt BNP", "$Y - Y^n$ i kroner", "$\\frac{Y^n}{Y}$", "Avviket mellom faktisk og forventet inflasjon $\\pi-\\pi^e$"],
      explanation: "Gapet normaliseres med $Y^n$ og er dimensjonsløst; å utelate nevneren er en klassisk feil.",
    },
    {
      question: "Hvorfor gir lav ledighet høyere lønnsvekst i kausalkjeden?",
      options: ["Fordi knapp arbeidskraft styrker arbeidstakernes forhandlingsmakt", "Fordi bedriftene da får et høyere påslag $\\mu$", "Fordi produktiviteten faller når ledigheten er lav, slik at lønnskostnaden per enhet stiger", "Fordi importprisene stiger når ledigheten er lav og løfter lønnsveksten utenfra via $z^\\pi$"],
      explanation: "Med få ledige står arbeiderne sterkt i forhandlingene og presser fram høyere lønn.",
    },
    {
      question: "En svakere krone gir dyrere import. Hvor treffer det Phillips-kurven?",
      options: ["Som et positivt kostnadssjokk $z^\\pi$", "Som høyere $\\pi^e$", "Som et positivt produksjonsgap", "Som lavere $\\beta$"],
      explanation: "Importert inflasjon er en kostnadsøkning utenfra og løftes inn via $z^\\pi$ (kobling til kap. 1.5).",
    },
    {
      question: "Hva er forskjellen på $z^\\pi$ og $\\pi^e$?",
      options: ["$z^\\pi$ er en faktisk kostnadsøkning utenfra; $\\pi^e$ er forventet prisvekst innbakt i atferd", "De er to navn på det samme: både $z^\\pi$ og $\\pi^e$ betegner kostnadsdrevet prisvekst utenfra i modellen", "$z^\\pi$ er forventningene aktørene legger til grunn, mens $\\pi^e$ er den faktiske kostnadsøkningen utenfra", "$z^\\pi$ gjelder ledigheten, mens $\\pi^e$ gjelder produksjonsgapet"],
      explanation: "Å blande de to er en av de hyppigst påpekte feilene; de krever ulik pengepolitisk respons.",
    },
    {
      question: "Under hvilken markedsform veltes høyere marginalkostnad over i prisene?",
      options: ["Monopolistisk konkurranse (påslagsprising)", "Fullkommen konkurranse, der prisen settes lik marginalkostnaden i hvert marked", "Planøkonomi", "Rent monopol uten marginalkostnader i det hele tatt"],
      explanation: "Bedriftene setter pris som påslag $\\mu$ over marginalkostnad; derfor blir høyere lønnskostnad til høyere pris.",
    },
    {
      question: "Et rent etterspørselssjokk (høyere $Y$) gjør hva med Phillips-kurven i $(Y,\\pi)$-diagrammet?",
      options: ["Flytter økonomien langs kurven til høyere $Y$ og høyere $\\pi$", "Skifter hele Phillips-kurven opp til et høyere inflasjonsnivå permanent", "Skifter hele kurven ned, slik at inflasjonen blir lavere ved uendret produksjon $Y$", "Gjør kurven brattere ved at helningen $\\beta$ øker, uten at økonomien flytter seg"],
      explanation: "$Y$ står på aksen, så en endring i $Y$ gir bevegelse langs kurven, ikke et skift.",
    },
    {
      question: "Et positivt kostnadssjokk ($z^\\pi \\uparrow$) gjør hva med Phillips-kurven?",
      options: ["Skifter hele kurven opp", "Flytter økonomien langs kurven", "Skifter kurven ned", "Endrer bare helningen $\\beta$"],
      explanation: "$z^\\pi$ er et konstantledd; høyere $z^\\pi$ løfter inflasjonen ved ethvert $Y$ → kurven skifter opp.",
    },
    {
      question: "Hvorfor er et kostnadssjokk vanskeligere for sentralbanken enn et etterspørselssjokk?",
      options: ["Inflasjon og produksjon trekker motsatt vei, så det oppstår en målkonflikt", "Fordi renten ikke virker på kostnader og importpriser", "Fordi produksjonsgapet forsvinner", "Fordi forventningene alltid faller"],
      explanation: "Ved kostnadssjokk stiger $\\pi$ mens $Y$ faller; å bekjempe inflasjonen forsterker fallet i produksjon.",
    },
    {
      question: "Hva menes med at inflasjonsforventningene er «forankret»?",
      options: ["$\\pi^e$ ligger stabilt rundt inflasjonsmålet fordi aktørene stoler på sentralbanken", "At inflasjonen er null og forventningene $\\pi^e$ derfor også er null", "At styringsrenten er bundet til et fast nivå, slik at $\\pi^e$ ikke kan bevege seg over tid", "At produksjonsgapet $\\frac{Y-Y^n}{Y^n}$ er lukket, og at det er dette som holder $\\pi^e$ i ro"],
      explanation: "Forankring demper gjennomslaget fra midlertidige kostnadssjokk og hindrer lønns-pris-spiraler.",
    },
    {
      question: "I ledighetsversjonen $\\pi = \\pi^e - b(u-u^n) + z^\\pi$, hvorfor er fortegnet foran gapet negativt?",
      options: ["Fordi lav ledighet ($u<u^n$) gir høy inflasjon", "Fordi høy ledighet ($u>u^n$) gir inflasjon", "Fordi $b<0$", "Fordi forventningene faller"],
      explanation: "Ledighet og produksjon beveger seg motsatt; PK er stigende i $(Y,\\pi)$ men fallende i $(u,\\pi)$.",
    },
    {
      question: "Hva er marginalkostnad i denne sammenhengen?",
      options: ["Kostnaden ved å produsere én enhet til, dominert av lønnskostnad per enhet", "Den totale lønnssummen i økonomien delt på antall enheter", "Sentralbankens styringsrente, altså kostnaden bedriften betaler for å låne til én enhet til", "Prisen minus påslaget $\\mu$, som alltid er lik null fordi påslaget spiser opp hele prisen"],
      explanation: "Marginalkostnaden er bindeleddet: høyere lønnsvekst → høyere marginalkostnad → høyere pris via påslag.",
    },
    {
      question: "Hva skjer med inflasjonen ved et negativt produksjonsgap ($Y<Y^n$), alt annet likt?",
      options: ["Den faller — motsatt kausalkjede demper lønns- og prispresset", "Den stiger", "Den er uendret, fordi et negativt produksjonsgap ikke slår inn i lønnsveksten i det hele tatt", "Den blir liggende lik forventningene $\\pi^e$ uansett gapets fortegn"],
      explanation: "Mer ledighet → svakere forhandlingsmakt → lavere lønnsvekst → lavere marginalkostnad → svakere prispress.",
    },
    {
      question: "Hva er en lønns-pris-spiral?",
      options: ["Høye forventninger gir høye lønnskrav som gir høye priser som bekrefter forventningene", "At lønningene og prisene alltid holder seg konstante, slik at forventningene $\\pi^e$ aldri endrer seg", "At sentralbanken senker renten hvert år, og at det er rentekuttene som driver lønns- og prisveksten", "At produksjonsgapet lukkes automatisk uten at priser eller lønninger endrer seg"],
      explanation: "En selvforsterkende prosess som særlig oppstår når $\\pi^e$ ikke er forankret.",
    },
    {
      question: "Hvilken rolle spiller $\\pi^e$ når produksjonsgapet er null og $z^\\pi = 0$?",
      options: ["Inflasjonen blir lik $\\pi^e$", "Inflasjonen blir null når produksjonsgapet er null", "Inflasjonen blir liggende lik $\\beta$ ved lukket gap", "Inflasjonen blir uendelig fordi $\\pi^e$ forsterker seg selv"],
      explanation: "Uten gap og kostnadssjokk er $\\pi = \\pi^e$; forventningene er basislinjen.",
    },
    {
      question: "Hvorfor er Phillips-kurven fundamentet for RR-kurven i Del 5?",
      options: ["Fordi PK bakes inn i renteregelen, slik at gapet påvirker renten via en indirekte kanal", "Fordi PK bestemmer valutakursen, og kursen gir renten i renteregelen", "Fordi PK erstatter Keynes-modellen og bestemmer multiplikatoren på kort sikt", "Fordi PK gir multiplikatoren som bestemmer $\\Delta Y$"],
      explanation: "Renteregelen med PK innsatt gir gap-koeffisienten $d_1\\beta + d_2$ (kap. 5.1).",
    },
    {
      question: "En student skriver kjeden «høyere BNP → høyere lønn → lavere ledighet → inflasjon». Hva er hovedfeilen?",
      options: ["Årsaksretningen ledighet/lønn er snudd, og flere ledd mangler", "$z^\\pi$ er utelatt, men ellers er kjeden riktig", "Ingenting, kjeden er korrekt", "Forventningene skulle stått først"],
      explanation: "Lav ledighet er en følge av høy aktivitet (ikke av lønn), og forhandlingsmakt + marginalkostnad + påslag mangler.",
    },
    {
      question: "Hva er produksjonsgapets referanse $Y^n$?",
      options: ["Potensielt BNP — produksjonen ved likevektsledigheten $u^n$", "Fjorårets faktiske BNP, slik at gapet måler veksten fra i fjor til i år", "Maksimal produksjonskapasitet på svært kort sikt, ved null ledighet", "Sentralbankens inflasjonsmål, omregnet til det BNP-nivået som gir måloppnåelse"],
      explanation: "$Y^n$ er nivået fra lønns-/priskurvemodellen (kap. 4.1) og fastsetter gapets nullpunkt.",
    },
    {
      question: "Hvis $Y^n$ faller (f.eks. ved økt $z^W$ i arbeidsmarkedet), hva skjer med Phillips-kurven?",
      options: ["Den skifter, fordi et gitt $Y$ nå gir et større positivt gap", "Ingenting", "Den blir flatere fordi helningen $\\beta$ avtar", "Den forsvinner"],
      explanation: "Lavere $Y^n$ endrer gapet $\\frac{Y-Y^n}{Y^n}$ ved gitt $Y$, så kurven flytter seg.",
    },
    {
      question: "Hva sier Phillips-kurven om avveiningen på lang sikt?",
      options: ["Når $\\pi^e$ tilpasser seg faktisk inflasjon, lukkes gapet og avveiningen forsvinner", "Avveiningen blir sterkere over tid, fordi $\\pi^e$ aldri tilpasser seg den faktiske inflasjonen", "Produksjonen kan holdes vilkårlig høy over $Y^n$ på lang sikt med tilstrekkelig høy inflasjon", "Ledigheten forsvinner på lang sikt, slik at $u$ går mot null og produksjonen blir liggende over $Y^n$"],
      explanation: "På lang sikt vender økonomien tilbake til $Y^n$; bare inflasjonsnivået, ikke produksjonen, avhenger av politikken.",
    },
    {
      question: "Hvorfor bør du sjekke aksene før du tegner Phillips-kurven?",
      options: ["Fordi den er stigende i $(Y,\\pi)$ men fallende i $(u,\\pi)$", "Fordi den alltid er vannrett", "Fordi aksene ikke betyr noe", "Fordi den alltid er fallende uansett akser"],
      explanation: "Feil akse gir feil helning; produksjonsversjonen stiger, ledighetsversjonen faller.",
    },
  ],
  'econ1310-4-3': [
    {
      question: "Hva er kjernen i frontfagsmodellen?",
      options: ["Konkurranseutsatt industri forhandler først og setter en ramme de andre følger", "Skjermet sektor forhandler først og setter rammen for de andre", "Staten fastsetter alle lønninger sentralt, slik at rammen bestemmes politisk framfor i forhandlinger mellom partene", "Hver bedrift forhandler helt isolert, slik at ingen felles ramme binder de øvrige oppgjørene i arbeidslivet"],
      explanation: "Industriens lønnsevne, bundet av internasjonal konkurranse, blir normen for hele oppgjøret.",
    },
    {
      question: "Hvorfor er det den konkurranseutsatte sektoren som setter frontfagsrammen?",
      options: ["Fordi den ikke kan velte høye lønninger over i prisene uten å tape markedsandeler", "Fordi den har flest ansatte, og størrelsen på sektoren er alene nok til å gjøre den til lønnsleder i oppgjøret", "Fordi den er skjermet fra utlandet og kan velte lønnsvekst over i prisene", "Fordi den bestemmer styringsrenten, og pengepolitikken er dermed det som fastsetter rammen for lønnsveksten"],
      explanation: "Dens lønnsevne er bundet av konkurransen mot utlandet, så den er en disiplinerende norm.",
    },
    {
      question: "Hvordan senker koordinert lønnsdannelse likevektsledigheten $u^n$?",
      options: ["Den demper lønnspresset $z^W$, så lønnskurven skyves ned og skjæringen flyttes til venstre", "Den løfter priskurven, slik at reallønnen stiger og $u^n$ faller", "Den hever lønnspresset $z^W$, og høyere lønnspress gir lavere ledighet", "Den øker påslaget $\\mu$, så priskurven skyves opp og $u^n$ stiger"],
      explanation: "Lavere $z^W$ gir lavere skjæringspunkt-ledighet i lønns-/priskurvemodellen.",
    },
    {
      question: "Hva skjer med den langsiktige reallønnen ved koordinert lønnsdannelse?",
      options: ["Den er uendret — priskurven låser den; gevinsten er lavere ledighet", "Den stiger varig fordi koordinering hever reallønnen ut over priskurvens tak", "Den faller varig, fordi koordinert moderasjon presser reallønnen ned under nivået priskurven gir", "Den blir lik null, fordi koordineringen fjerner hele reallønnen priskurven ellers ville bestemt"],
      explanation: "Koordinering senker $u^n$ (mer sysselsetting), men reallønnen bestemmes fortsatt av priskurven.",
    },
    {
      question: "Hva er rollen til Det tekniske beregningsutvalget (TBU)?",
      options: ["Å legge fram et felles tallgrunnlag som forankrer forventningene og gjør rammen troverdig", "Å fastsette styringsrenten og dermed binde frontfagsrammen", "Å bestemme skattenivået partene legger til grunn i lønnsoppgjøret", "Å forby lønnsøkninger, slik at utvalget med bindende vedtak stanser lønnsvekst det ikke finner dekning for"],
      explanation: "Omforent faktagrunnlag reduserer strid og letter moderasjon — et smøremiddel for koordineringen.",
    },
    {
      question: "Hva kjennetegner skjermet sektor?",
      options: ["Den produserer for hjemmemarkedet uten direkte utenlandsk konkurranse", "Den selger mest til utlandet og møter internasjonal konkurranse", "Den setter alltid frontfagsrammen de andre følger", "Den har ingen ansatte, og lønnsdannelsen der spiller derfor ingen rolle i oppgjøret"],
      explanation: "Skjermet sektor kan lettere velte lønn over i priser, og bindes derfor til industriens ramme.",
    },
    {
      question: "Hvilken forutsetning må holde for at frontfagsmodellen skal virke?",
      options: ["Sterke, sentraliserte organisasjoner med høy organisasjonsgrad", "Lav organisasjonsgrad, slik at få medlemmer i forbundene er det som gjør rammen bindende", "At skjermet sektor ignorerer rammen og forhandler fram egne tillegg uavhengig av industrien", "At renten holdes fast slik at frontfagsrammen settes uavhengig av pengepolitikken"],
      explanation: "Organisasjonene må kunne binde medlemmene til rammen; faller organisasjonsgraden, svekkes modellen.",
    },
    {
      question: "Hva er en vanlig svakhet ved frontfagsmodellen?",
      options: ["Rammen kan være for stram for sektorer med høy produktivitetsvekst eller arbeidskraftmangel", "Den hever alltid reallønnen for mye, slik at koordineringen presser reallønnen over nivået priskurven setter", "Den gjør likevektsledigheten $u^n$ permanent høyere ved å skyve lønnskurven varig oppover i modellen", "Den fjerner behovet for TBU, siden en felles ramme gjør et omforent tallgrunnlag for oppgjøret overflødig"],
      explanation: "En felles ramme kan hindre nødvendig lønnsdifferensiering og omstilling.",
    },
    {
      question: "Hva skjer med $u^n$ hvis koordineringen forvitrer (fallende organisasjonsgrad, utbrytere)?",
      options: ["$z^W$ stiger, lønnskurven skyves opp, og $u^n$ stiger igjen", "$u^n$ faller, fordi lønnskurven skyves nedover", "$u^n$ blir null fordi alt lønnspress forsvinner", "Reallønnen stiger, mens $u^n$ ligger fast"],
      explanation: "Uten disiplin forhandler gruppene mer isolert og mindre moderat → høyere lønnspress → høyere ledighet.",
    },
    {
      question: "Hva er den vanligste feilen i en drøfting av frontfagsmodellen (sjanger L)?",
      options: ["Ren opplisting uten avveining, eller å bruke matematisk modell der det er uønsket", "Å nevne konkurranseutsatt sektor, siden drøftingen skal holde industriens rolle utenfor for å bli god", "Å koble drøftingen til lønns- og priskurvemodellen med en fullstendig matematisk utledning", "Å drøfte forutsetningene, siden en avveining av premissene trekker svaret bort fra det oppgaven ber om"],
      explanation: "Sjanger L krever verbal drøfting med avveining for og mot; regnemodell er eksplisitt uønsket.",
    },
  ],
  'econ1310-5-1': [
    {
      question: "Hva sier renteregelen at sentralbanken gjør når produksjonsgapet blir positivt (høykonjunktur)?",
      options: ["Hever renten", "Senker renten, siden $d_2 < 0$ lar et positivt gap trekke renten ned", "Holder renten uendret", "Endrer inflasjonsmålet"],
      explanation: "Renteregelen $i = z^i + d_1(\\pi-\\pi^*) + d_2\\frac{Y-Y^n}{Y^n}$ har $d_2 > 0$, så et positivt gap trekker renten opp.",
    },
    {
      question: "Hva måler parameteren $d_1$ i renteregelen?",
      options: ["Vekten sentralbanken legger på inflasjonsavviket", "Vekten på produksjonsgapet, altså renteøkningen per prosentpoeng gap $\\frac{Y-Y^n}{Y^n}$", "Phillips-kurvens helning, altså hvor sterkt gapet slår ut i inflasjonen", "Marginal konsumtilbøyelighet, altså hvor mye konsumet øker per krone i økt disponibel inntekt"],
      explanation: "$d_1$ er renteøkningen per prosentpoeng inflasjonsavvik $(\\pi-\\pi^*)$; stor $d_1$ = «hauk».",
    },
    {
      question: "Hva måler parameteren $d_2$ i renteregelen?",
      options: ["Vekten sentralbanken legger på produksjonsgapet", "Vekten på inflasjonsavviket", "Importlekkasjen", "Skattelekkasjen"],
      explanation: "$d_2$ er renteresponsen per prosentpoeng produksjonsgap — vekten på realøkonomien i fleksibel inflasjonsstyring.",
    },
    {
      question: "Hva får vi når vi setter Phillips-kurven inn i renteregelen?",
      options: ["RR-kurven", "IS-kurven", "Lønnskurven", "Priskurven"],
      explanation: "Substitusjon av PK for $\\pi$ gir RR-kurven $i = z^i + d_1(\\pi^e-\\pi^*) + d_1 z^\\pi + (d_1\\beta+d_2)\\frac{Y-Y^n}{Y^n}$.",
    },
    {
      question: "Hvilken koeffisient står foran produksjonsgapet i RR-kurven?",
      options: ["$d_1\\beta + d_2$", "$d_1 + d_2$ (summen av begge rentevektene)", "$d_1\\beta$", "$\\beta + d_2$"],
      explanation: "De to gap-leddene $d_1\\beta\\frac{Y-Y^n}{Y^n}$ og $d_2\\frac{Y-Y^n}{Y^n}$ trekkes sammen til $(d_1\\beta+d_2)\\frac{Y-Y^n}{Y^n}$.",
    },
    {
      question: "Hva representerer den indirekte kanalen $d_1\\beta$ i gap-koeffisienten?",
      options: ["Renteresponsen på den inflasjonen som produksjonsgapet skaper via Phillips-kurven", "Renteresponsen på selve aktivitetsnivået, altså leddet $d_2$ som står eksplisitt i renteregelen", "En dobbelttelling av produksjonsgapet som bør fjernes, siden gapet alt virker gjennom leddet $d_2$", "Effekten av valutakursen på importprisene, som forsterker gap-koeffisienten i renteregelen"],
      explanation: "Gapet presser inflasjonen opp med $\\beta$, og sentralbanken svarer med $d_1$ — derfor $d_1\\beta$ via inflasjonen.",
    },
    {
      question: "Hva representerer den direkte kanalen $d_2$ i gap-koeffisienten?",
      options: ["Sentralbankens respons på aktivitetsnivået i seg selv, uavhengig av inflasjonen", "Responsen på inflasjonen gapet skaper via Phillips-kurven", "Phillips-kurvens forventningsledd $\\pi^e$, uavhengig av gapet", "Skattemultiplikatoren, altså hvor mye BNP faller når skattesatsen $t$ settes ett prosentpoeng opp"],
      explanation: "$d_2$ er gapet slik det står eksplisitt i renteregelen — realøkonomisk hensyn i fleksibel inflasjonsstyring.",
    },
    {
      question: "Er summen $d_1\\beta + d_2$ en dobbelttelling av produksjonsgapets effekt?",
      options: ["Nei — $d_2$ er respons på aktiviteten, $d_1\\beta$ er respons på inflasjonen aktiviteten skaper", "Ja, gapet telles to ganger, så $d_1\\beta$ bør strykes fra koeffisienten", "Ja, men bare når $\\beta > 1$, for da blir inflasjonskanalen $d_1\\beta$ større enn den direkte responsen $d_2$", "Nei, fordi $d_1\\beta$ og $d_2$ alltid er nøyaktig like store"],
      explanation: "To distinkte mekanismer — realøkonomisk hensyn og inflasjonshensyn — utløst av samme gap; ingen dobbelttelling.",
    },
    {
      question: "Skifter et rent positivt etterspørselssjokk ($\\Delta z^C > 0$) RR-kurven?",
      options: ["Nei — det flytter økonomien langs RR fordi PK er bakt inn i kurven", "Ja, det skifter RR opp fordi høyere etterspørsel løfter renteregelens intercept", "Ja, det skifter RR ned fordi høyere etterspørsel senker renteregelens intercept $z^i$", "Bare hvis skattesatsen $t$ er null, for da slår etterspørselssjokket fullt ut i renteregelens intercept"],
      explanation: "Etterspørselssjokk endrer $Y$, ikke interceptleddene. Sentralbanken beveger seg oppover langs uendret RR.",
    },
    {
      question: "Hvilket av disse skifter RR-kurven?",
      options: ["Et kostnadssjokk $\\Delta z^\\pi$", "Et konsumsjokk $\\Delta z^C$", "Et investeringssjokk $\\Delta z^I$, som løfter RR-interceptet direkte", "Et offentlig kjøp-sjokk $\\Delta G$, som inngår i RR-interceptet"],
      explanation: "$z^\\pi$ står i RR-interceptet ($d_1 z^\\pi$) og flytter RR med $d_1\\Delta z^\\pi$; de tre andre er etterspørselssjokk som ikke skifter RR.",
    },
    {
      question: "Hvor mye skifter RR-kurven ved et kostnadssjokk $\\Delta z^\\pi$?",
      options: ["$d_1\\Delta z^\\pi$", "$d_2\\Delta z^\\pi$", "$\\beta\\Delta z^\\pi$", "$(d_1\\beta+d_2)\\Delta z^\\pi$"],
      explanation: "Kostnadssjokket inngår i interceptet som $d_1 z^\\pi$, så RR flyttes opp med $d_1\\Delta z^\\pi$.",
    },
    {
      question: "Hva er helningen til RR-kurven i $(Y,i)$-rommet?",
      options: ["$\\frac{d_1\\beta+d_2}{Y^n}$", "$d_1 + d_2$", "$\\frac{d_1}{d_2}$", "$\\beta Y^n$"],
      explanation: "Deriverer man RR mhp. $Y$ får man $\\frac{d_1\\beta+d_2}{Y^n} > 0$ — RR er stigende.",
    },
    {
      question: "Hvorfor er RR-kurven stigende i BNP?",
      options: ["Høyere aktivitet gir større gap, som løfter renten både direkte ($d_2$) og via inflasjonen ($d_1\\beta$)", "Fordi høyere BNP alltid senker inflasjonen via Phillips-kurven, slik at sentralbanken setter en lavere styringsrente", "Fordi importlekkasjen øker med BNP, slik at en stadig større del av etterspørselen lekker ut og renten må heves", "Fordi skattesatsen faller når BNP stiger, slik at renten må settes høyere"],
      explanation: "Gap-koeffisienten $(d_1\\beta+d_2) > 0$ gjør at renten stiger med $Y$ gjennom begge kanaler.",
    },
    {
      question: "Hva er $z^i$ i renteregelen?",
      options: ["Et pengepolitisk sjokk — renteendring som ikke skyldes gap eller inflasjonsavvik", "Inflasjonsmålet, altså nivået $\\pi^*$ som sentralbanken styrer inflasjonen mot på mellomlang sikt", "Produksjonsgapet, altså det relative avviket $\\frac{Y-Y^n}{Y^n}$ mellom faktisk og potensielt BNP", "Realrenten, altså nominell styringsrente korrigert for forventet inflasjon $\\pi^e$ i perioden"],
      explanation: "$z^i$ er det eksogene interceptleddet; $\\Delta z^i > 0$ er en kontraktiv innstramming.",
    },
    {
      question: "Hva kjennetegner en sentralbank med høy $d_1$ i forhold til $d_2$?",
      options: ["Den er «haukete» og prioriterer inflasjonsmålet framfor realøkonomien", "Den bryr seg mest om sysselsettingen og legger dermed mindre vekt på inflasjonsmålet", "Den holder alltid renten konstant, siden en høy $d_1$ låser styringsrenten uansett hvor stort inflasjonsavviket er", "Den har ikke inflasjonsmål, for et høyt forhold $d_1/d_2$ betyr at renten settes uten anker for inflasjonen"],
      explanation: "Stor $d_1$/liten $d_2$ betyr kraftig respons på inflasjonsavvik, mindre på produksjonsgap.",
    },
    {
      question: "Hvorfor må $d_1 > 1$ for at renteøkninger skal virke dempende?",
      options: ["Slik at også realrenten $(i-\\pi^e)$ stiger når inflasjonen stiger", "Slik at nominell rente holdes konstant", "Slik at gapet lukkes uten at realrenten $(i-\\pi^e)$ endres", "Slik at $z^i$ blir null, altså at det pengepolitiske sjokket forsvinner fra renteregelen når $d_1 > 1$"],
      explanation: "Bare når renten heves mer enn inflasjonen steg, stiger realrenten — ellers ville pengepolitikken ikke bitt.",
    },
    {
      question: "Hvilket ledd i RR-kurven inneholder inflasjonsforventningene?",
      options: ["$d_1(\\pi^e - \\pi^*)$", "$(d_1\\beta+d_2)\\frac{Y-Y^n}{Y^n}$", "$d_1 z^\\pi$", "$z^i$"],
      explanation: "Forventningsavviket $d_1(\\pi^e-\\pi^*)$ står i interceptet; en økning i $\\pi^e$ skifter RR opp med $d_1\\Delta\\pi^e$.",
    },
    {
      question: "En sentralbank har $d_1 = 2$, $d_2 = 0{,}3$ og Phillips-kurve med $\\beta = 0{,}5$. Hva er gap-koeffisienten?",
      options: ["$1{,}3$", "$2{,}3$", "$0{,}8$", "$1{,}0$"],
      explanation: "$d_1\\beta + d_2 = 2\\cdot0{,}5 + 0{,}3 = 1{,}0 + 0{,}3 = 1{,}3$.",
    },
    {
      question: "Hva betyr fleksibel inflasjonsstyring i renteregel-språk?",
      options: ["Både $d_1 > 0$ og $d_2 > 0$ — inflasjonsmålet er anker, men realøkonomien teller også", "Bare $d_1 > 0$ og $d_2 = 0$ — bare inflasjonsmålet teller", "Bare $d_2 > 0$, $d_1 = 0$", "Verken $d_1$ eller $d_2$ er positiv"],
      explanation: "Fleksibel = vekt på både inflasjon og realøkonomi, speilet i to positive vekter.",
    },
    {
      question: "Hva skjer med RR-kurven hvis potensielt BNP $Y^n$ øker?",
      options: ["RR (og PK) skifter fordi gap-normaliseringen endres", "Ingenting, $Y^n$ inngår ikke i RR", "RR blir horisontal, siden et større $Y^n$ fjerner rentens avhengighet av BNP", "Bare IS-kurven skifter, siden $Y^n$ kun inngår i etterspørselsligningen"],
      explanation: "$Y^n$ inngår i gapet $\\frac{Y-Y^n}{Y^n}$; en økning gjør gapet mindre for gitt $Y$ og flytter både RR og PK.",
    },
    {
      question: "Hvilken normalisering er det viktig å ha med i produksjonsgapet?",
      options: ["Å dele på $Y^n$: gapet er $\\frac{Y-Y^n}{Y^n}$, ikke bare $Y - Y^n$", "Å dele på $\\pi^*$", "Å multiplisere gapet med rentevekten $d_1$", "Å trekke fra $z^i$"],
      explanation: "Renten reagerer på det relative gapet; å utelate $Y^n$-normaliseringen er en typisk feil.",
    },
    {
      question: "Hvorfor bakes Phillips-kurven inn i renteregelen når vi lager RR?",
      options: ["Fordi sentralbanken reagerer på inflasjonen, som selv avhenger av produksjonsgapet", "For å fjerne kostnadssjokket $z^\\pi$ fra modellen", "For å gjøre RR fallende, siden Phillips-kurven gir en negativ sammenheng mellom gapet og renten", "For å eliminere $d_2$, slik at bare $d_1\\beta$ står igjen"],
      explanation: "Ved å substituere PK fanger RR at gapet virker på renten både direkte og via inflasjonen — kilden til $d_1\\beta$.",
    },
    {
      question: "Et positivt etterspørselssjokk inntreffer. Hva gjør sentralbanken i RR-diagrammet?",
      options: ["Beveger seg oppover langs uendret RR og setter høyere rente", "Skifter hele RR opp fordi etterspørselssjokket løfter renteregelens intercept", "Skifter hele RR ned, siden etterspørselssjokket senker renteregelens intercept", "Gjør ingenting med renten, siden renteregelen bare reagerer på inflasjonsavviket"],
      explanation: "Høyere $Y$ gir større gap; sentralbanken setter høyere rente ved å bevege seg langs kurven, ikke ved å flytte den.",
    },
    {
      question: "Hvilken av disse er IKKE et ledd i RR-interceptet?",
      options: ["$(d_1\\beta+d_2)\\frac{Y-Y^n}{Y^n}$", "$z^i$", "$d_1(\\pi^e-\\pi^*)$", "$d_1 z^\\pi$"],
      explanation: "Gap-leddet er selve helningsleddet (avhenger av $Y$); de tre andre er interceptledd som skifter kurven når de endres.",
    },
    {
      question: "Realrenten som styrer konsum og investeringer i modellen er:",
      options: ["$i - \\pi^e$ (nominell rente minus forventet inflasjon)", "$i + \\pi^e$", "$i - \\pi^*$ (nominell rente minus inflasjonsmålet)", "$d_1 i$"],
      explanation: "Konsum ($c_2$) og investering ($b_2$) avhenger av realrenten $i - \\pi^e$; derfor er $d_1 > 1$ viktig.",
    },
  ],
  'econ1310-5-2': [
    {
      question: "Hvilke akser har det øvre panelet i IS-RR-PK-diagrammet?",
      options: ["$(Y, i)$ — BNP og rente", "$(Y, \\pi)$-rommet", "$(i, \\pi)$ — rente og inflasjon", "$(u, W/P)$ — ledighet og reallønn"],
      explanation: "Øvre panel er $(Y,i)$-rommet med fallende IS og stigende RR; nedre panel er $(Y,\\pi)$ med PK.",
    },
    {
      question: "Hvilke akser har det nedre panelet?",
      options: ["$(Y, \\pi)$ — BNP og inflasjon", "$(Y, i)$ — BNP og rente", "$(\\pi, i)$", "$(Y^n, u^n)$"],
      explanation: "Nedre panel er $(Y,\\pi)$-rommet med den stigende Phillips-kurven; det deler $Y$-aksen med øvre panel.",
    },
    {
      question: "Hvorfor er IS-kurven fallende?",
      options: ["Høyere rente demper konsum og investeringer og dermed BNP", "Høyere rente øker BNP fordi sparing gir konsum", "Høyere BNP senker renten, så produksjonen styrer", "Høyere inflasjon senker renten, og det er denne negative koblingen mellom $\\pi$ og $i$ som gjør IS fallende"],
      explanation: "Renten virker via realrenten på $c_2$ og $b_2$; høy rente hører sammen med lav $Y$.",
    },
    {
      question: "Hvorfor er RR-kurven stigende?",
      options: ["Høyere BNP gir større gap og høyere inflasjon, som sentralbanken svarer på med høyere rente", "Høyere BNP gir lavere rente fordi større skatteinntekter kutter statens lånebehov", "Renten er alltid konstant fordi sentralbanken holder $i$ fast uansett produksjonsnivå, slik at gap-koeffisienten $(d_1\\beta+d_2)$ ikke virker inn", "Phillips-kurven er fallende, så høyere BNP gir lavere inflasjon som renten motvirker"],
      explanation: "Gap-koeffisienten $(d_1\\beta+d_2) > 0$ gjør at renten stiger med $Y$ langs RR.",
    },
    {
      question: "Hvilken kurve skifter ved et etterspørselssjokk?",
      options: ["IS-kurven", "RR-kurven", "Phillips-kurven", "Lønnskurven"],
      explanation: "Etterspørselssjokk ($z^C$, $z^I$, $z^T$, $G$) treffer IS; RR og PK står stille.",
    },
    {
      question: "Skifter RR-kurven ved et rent etterspørselssjokk?",
      options: ["Nei — økonomien beveger seg langs den uendrede RR", "Ja, RR skifter opp fordi etterspørselen løfter renteregelens intercept", "Ja, RR skifter ned fordi etterspørselssjokket trekker renteregelens intercept nedover ved hvert BNP-nivå", "Bare hvis inflasjonen er over målet — da, og bare da, flytter et etterspørselssjokk hele RR-kurven"],
      explanation: "PK er bakt inn i RR; etterspørselssjokk endrer ikke interceptleddene, så RR står stille.",
    },
    {
      question: "Et positivt etterspørselssjokk inntreffer. Hva skjer med $Y$, $i$ og $\\pi$?",
      options: ["Alle stiger", "Alle faller", "$Y$ opp, $i$ og $\\pi$ ned", "$Y$ ned, $i$ og $\\pi$ opp"],
      explanation: "IS høyre langs stigende RR gir høyere $Y$ og $i$; høyere $Y$ gir høyere $\\pi$ på PK.",
    },
    {
      question: "Et negativt etterspørselssjokk inntreffer. Hva skjer med $Y$, $i$ og $\\pi$?",
      options: ["Alle faller", "Alle stiger", "$Y$ ned, $i$ opp", "Bare $\\pi$ endres"],
      explanation: "IS venstre langs stigende RR gir lavere $Y$ og $i$; lavere $Y$ gir lavere $\\pi$.",
    },
    {
      question: "Hva menes med at sentralbanken «demper, men ikke nøytraliserer» et etterspørselssjokk?",
      options: ["Renten reduserer BNP-utslaget, men et restutslag blir stående i ny likevekt B", "Renten fjerner hele sjokket, så BNP havner i utgangspunktet igjen", "Renten forsterker sjokket fordi den beveger seg medsyklisk langs RR", "Renten holdes fast, så hele IS-skiftet slår ut i BNP"],
      explanation: "Ny likevekt B ligger der skiftet IS møter uendret RR — sjokket dempes, men oppheves ikke.",
    },
    {
      question: "Hvorfor kan ikke sentralbanken bringe BNP helt tilbake til utgangsnivået etter et etterspørselssjokk?",
      options: ["Da måtte den forlate RR-kurven, som er dens egen reaksjonsregel", "Fordi renten ikke kan endres når økonomien allerede ligger på RR-kurven", "Fordi IS ikke skifter ved et etterspørselssjokk, slik at BNP allerede ligger fast på utgangsnivået", "Fordi inflasjonen er fast, og sentralbanken derfor mangler rom til å endre renten nok til å hente BNP tilbake"],
      explanation: "Likevekten må ligge på RR; full nøytralisering ville krevd at sentralbanken gikk av sin egen kurve.",
    },
    {
      question: "Hva er den vanligste feilen i grafisk analyse av etterspørselssjokk ifølge sensor?",
      options: ["Å glemme sentralbankens respons langs RR (analysere som om renten var fast)", "Å tegne to paneler i stedet for ett samlet diagram, slik at IS-RR og Phillips-kurven havner i hver sin figur", "Å markere likevektspunktene i feil panel og lese av inflasjonen på RR i stedet for PK", "Å skifte IS"],
      explanation: "Renteresponsen langs RR er nivå-1-innsikten; å utelate den koster mye uttelling.",
    },
    {
      question: "Hva må alltid markeres i figuren for full uttelling?",
      options: ["Både utgangslikevekt A og ny likevekt B, i begge paneler", "Bare punkt B", "Bare øvre panel, ikke inflasjonen", "Kun RR-kurven"],
      explanation: "A-standarden krever riktig kurveskift, riktig retning og begge likevektspunkter i begge paneler.",
    },
    {
      question: "Hvor leser vi av inflasjonen i diagrammet?",
      options: ["I nedre panel, på Phillips-kurven ved det aktuelle BNP-nivået", "I øvre panel, der RR-kurven krysser den fallende IS-kurven ved likevekt", "I øvre panel, på IS-kurven, ved den renten sentralbanken har satt for det aktuelle BNP-nivået", "På den vannrette aksen, der inflasjonen kan leses av direkte i begge panelene"],
      explanation: "BNP bestemmes øverst; deretter gir PK i nedre panel tilhørende inflasjon.",
    },
    {
      question: "Hva skjer med BNP-utslaget hvis renten holdes fast i stedet for å følge renteregelen?",
      options: ["Utslaget blir større fordi rentedempingen uteblir", "Utslaget blir mindre fordi den faste renten fortsatt demper multiplikatoren", "Utslaget blir null, fordi et etterspørselssjokk ikke kan flytte BNP når renten ligger fast", "BNP endres ikke i det hele tatt; med låst rente blir likevekten liggende på utgangsnivået"],
      explanation: "Med fast rente (vannrett RR) virker multiplikatoren fritt; ingen rentedemping gir større svingninger.",
    },
    {
      question: "Hvordan tegnes fast rente i diagrammet?",
      options: ["RR erstattes av en vannrett linje ved den låste renten", "RR blir loddrett ved det fastlåste BNP-nivået sentralbanken sikter mot", "IS blir vannrett, slik at BNP ligger på samme nivå uansett hvilken rente sentralbanken velger", "Phillips-kurven forsvinner fra diagrammet, siden inflasjonen ikke lenger bestemmes når renten er låst"],
      explanation: "Fast rente betyr at $i = \\bar{i}$ uansett $Y$, altså en horisontal RR-linje.",
    },
    {
      question: "Et skattekutt ($\\Delta z^T < 0$) er hvilken type sjokk, og hvilken vei skifter IS?",
      options: ["Positivt etterspørselssjokk — IS til høyre", "Negativt sjokk — IS til venstre", "Kostnadssjokk — PK opp", "Pengepolitisk sjokk — RR opp"],
      explanation: "Skattekutt løfter disponibel inntekt og konsum → IS høyre, $Y$, $i$ og $\\pi$ opp.",
    },
    {
      question: "Hvorfor er skattekuttets virkning svakere enn en tilsvarende økning i offentlige kjøp?",
      options: ["Bare andelen $c_1 < 1$ av skattelettelsen brukes; resten spares", "Skatt virker direkte på etterspørselen, mens offentlige kjøp bare virker indirekte via konsumet", "Offentlige kjøp lekker mer ut av etterspørselen enn en skattelettelse gjør, krone for krone", "De er alltid like sterke, fordi en krone i skattelettelse og en krone i offentlige kjøp gir samme multiplikator"],
      explanation: "Skatteendring virker via konsumet ($c_1 < 1$), mens offentlige kjøp treffer etterspørselen krone for krone.",
    },
    {
      question: "Hvorfor gir et etterspørselssjokk ingen målkonflikt for sentralbanken?",
      options: ["Produksjonsgap og inflasjon trekker samme vei, så renten kan reagere entydig", "Fordi inflasjonen ikke endres når etterspørselen skifter", "Fordi BNP ligger fast, så bare inflasjonen må styres av renten", "Fordi renten ligger fast uansett gap og inflasjon"],
      explanation: "Ved negativt sjokk faller både $Y$ og $\\pi$ → senk renten; ett instrument tjener begge mål.",
    },
    {
      question: "Hvordan responderer sentralbanken på et positivt etterspørselssjokk?",
      options: ["Beveger seg oppover langs RR og hever renten", "Skifter RR opp fordi etterspørselen løfter renteregelens intercept", "Senker renten, slik at et positivt etterspørselssjokk møtes med lettere pengepolitikk", "Skifter Phillips-kurven opp, slik at inflasjonen stiger uten at renten må endres"],
      explanation: "Høyere $Y$ og $\\pi$ langs uendret RR gir høyere rente; kurven skiftes ikke.",
    },
    {
      question: "Hva bestemmer størrelsen på IS-skiftet ved et etterspørselssjokk?",
      options: ["Keynes-multiplikatoren ganget med sjokket", "Bare sjokket alene, $\\Delta z$, uten at multiplikatoren virker inn på skiftets bredde", "Renteregelens inflasjonsvekt $d_1$ ganget med produksjonsgapet", "Phillips-kurvens helning $\\beta$, som bestemmer hvor langt IS forskyves vannrett"],
      explanation: "IS forskyves horisontalt med $\\Delta Y = m \\cdot \\Delta z$ ved gitt rente.",
    },
    {
      question: "I hvilket panel bestemmes BNP direkte?",
      options: ["Øvre panel, som skjæringen IS = RR", "Nedre panel, på PK-kurven", "Begge deler like mye", "Ingen av dem"],
      explanation: "BNP og rente bestemmes i øvre panel; inflasjonen leses deretter av i nedre.",
    },
    {
      question: "Hva betyr det å forveksle «bevegelse langs kurven» med «skift av kurven»?",
      options: ["F.eks. feilaktig å skifte RR ved et etterspørselssjokk i stedet for å bevege seg langs den", "Å tegne begge paneler, men feilaktig skifte Phillips-kurven ved et rent etterspørselssjokk i nedre panel", "Å markere både utgangslikevekt A og ny likevekt B i figuren, i stedet for å nøye seg med å tegne selve kurveskiftet", "Å bruke riktig akse i hvert panel, altså å sette $Y$ vannrett og $i$ eller $\\pi$ loddrett når figuren tegnes"],
      explanation: "Etterspørselssjokk flytter økonomien langs RR; å skifte RR er en klassisk og kostbar feil.",
    },
    {
      question: "En aktiv renteregel gjør konjunktursvingningene:",
      options: ["mindre enn de ville vært ved fast rente", "større enn ved fast rente, fordi renteregelen forsterker sjokkene medsyklisk", "helt like store som ved fast rente, siden renteendringene ikke påvirker etterspørselen", "irrelevante for inflasjonen, som bestemmes uavhengig av konjunktursvingningene"],
      explanation: "Motsyklisk rente demper etterspørselssjokk, så en renteregel virker konjunkturstabiliserende.",
    },
    {
      question: "Ved et negativt etterspørselssjokk ligger ny likevekt B:",
      options: ["nede til venstre for A i øvre panel", "oppe til høyre for A", "rett over A", "på PK-kurven"],
      explanation: "IS venstre langs stigende RR gir lavere $Y$ og lavere $i$ — B ligger nede til venstre.",
    },
    {
      question: "Hva forbereder analysen av fast rente oss på i kap. 5.6?",
      options: ["Likviditetsfellen, der renten ikke kan settes lavere og finanspolitikken virker sterkere", "At renteregelen alltid nøytraliserer etterspørselssjokk fullstendig slik at BNP holdes helt uendret", "At Phillips-kurven blir vannrett, slik at et etterspørselssjokk endrer BNP uten å endre inflasjonen i det hele tatt", "At produksjonsgapet forsvinner, fordi økonomien ved fast rente alltid vender tilbake til det naturlige BNP-nivået"],
      explanation: "Ved nullgrensen oppfører økonomien seg som ved fast rente; finanspolitikk får sterkere effekt.",
    },
  ],
  'econ1310-5-3': [
    {
      question: "Hvilke kurver skifter ved et positivt kostnadssjokk, og hvilken ligger fast?",
      options: ["PK og RR skifter opp, IS ligger fast", "Bare IS skifter, mens Phillips-kurven og renteregelen ligger fast", "Bare PK skifter opp, mens renteregelen ligger fast sammen med IS", "IS og RR skifter opp, mens Phillips-kurven ligger fast"],
      explanation: "Kostnadssjokket $z^\\pi$ står i PK- og RR-interceptet; etterspørselen (IS) er uberørt.",
    },
    {
      question: "Hva kaller vi kombinasjonen høyere inflasjon og lavere produksjon som følger av et positivt kostnadssjokk?",
      options: ["Stagflasjon", "Deflasjon", "Konjunkturoppgang", "Likviditetsfelle"],
      explanation: "Stagflasjon = stagnasjon (fallende $Y$) + inflasjon (stigende $\\pi$) samtidig.",
    },
    {
      question: "Hva skjer med $Y$, $i$ og $\\pi$ ved et positivt kostnadssjokk?",
      options: ["$\\pi$ opp, $Y$ ned, $i$ opp", "Alle opp", "Alle ned", "$\\pi$, $i$ ned, $Y$ opp"],
      explanation: "PK og RR opp, IS fast → høyere rente, lavere BNP, høyere inflasjon (stagflasjon).",
    },
    {
      question: "Hvor mye skifter RR-kurven opp ved et kostnadssjokk $\\Delta z^\\pi$?",
      options: ["$d_1\\Delta z^\\pi$", "$d_2\\Delta z^\\pi$", "$\\beta\\Delta z^\\pi$", "RR skifter ikke"],
      explanation: "$z^\\pi$ inngår i RR-interceptet som $d_1 z^\\pi$; sentralbanken svarer på kostnadsinflasjonen med vekten $d_1$.",
    },
    {
      question: "Hvorfor gir et kostnadssjokk en målkonflikt for sentralbanken?",
      options: ["Fordi inflasjon og produksjon trekker i motsatt retning", "Fordi både inflasjon og produksjon trekker i samme retning etter sjokket", "Fordi renten ikke kan endres når kostnadssjokket først har truffet prisene", "Fordi IS skifter, slik at det er etterspørselen og ikke prissiden som må stabiliseres"],
      explanation: "$\\pi \\uparrow$ men $Y \\downarrow$: å bekjempe inflasjonen forsterker BNP-fallet, og omvendt.",
    },
    {
      question: "Hvorfor gir et etterspørselssjokk IKKE en målkonflikt?",
      options: ["Fordi produksjonsgap og inflasjon trekker samme vei", "Fordi produksjonsgap og inflasjon her trekker i motsatt retning", "Fordi Phillips-kurven ligger fast ved et etterspørselssjokk", "Fordi renteregelen RR skifter og dermed fjerner avveiningen for sentralbanken"],
      explanation: "Ved negativt etterspørselssjokk faller både $Y$ og $\\pi$; rentekutt løfter begge — ett grep, ingen konflikt.",
    },
    {
      question: "Hva uttrykker forholdet $d_1/d_2$ ved et kostnadssjokk?",
      options: ["Hvordan sentralbanken avveier inflasjonsmål mot produksjon i målkonflikten", "Størrelsen på kostnadssjokket", "Phillips-kurvens helning $\\beta$", "Multiplikatoren fra etterspørselssjokk til BNP"],
      explanation: "$d_1$ (inflasjonsvekt) og $d_2$ (produksjonsvekt) bestemmer hvor mye inflasjon vs. BNP-fall sentralbanken godtar.",
    },
    {
      question: "Hva er nettovirkningen på inflasjonen av et positivt kostnadssjokk?",
      options: ["Entydig positiv — $\\pi$ stiger, men mindre enn sjokket, fordi rentesvaret bare demper", "Fortegnsubestemt — BNP-fallet kan mer enn oppveie PK-skiftet, slik at $\\Delta\\pi$ blir negativ når $d_2$ er stor", "Nøyaktig lik sjokket — rentesvaret påvirker ikke inflasjonen", "Negativ — renteøkningen mer enn nøytraliserer kostnadssjokket, slik at prisnivået faller samlet"],
      explanation: "Utledningen gir $\\Delta\\pi = \\frac{1+\\alpha d_2}{1+\\alpha(d_1\\beta+d_2)}\\Delta z^\\pi > 0$: brøken ligger mellom 0 og 1, så inflasjonen stiger entydig, men mindre enn sjokket. Å behandle nettoinflasjonen som fortegnsubestemt er en typisk feil — BNP-fallet demper, men snur aldri fortegnet.",
    },
    {
      question: "Hva skjer med $Y$, $i$ og $\\pi$ ved et negativt kostnadssjokk (f.eks. strømprisfall)?",
      options: ["$\\pi$ ned, $Y$ opp, $i$ ned", "Alle opp", "Alle ned", "$\\pi$, $i$ opp, $Y$ ned"],
      explanation: "PK og RR ned, IS fast → lavere rente, høyere BNP, lavere inflasjon — en «gladnyhet».",
    },
    {
      question: "Hvilken feil advarer sensor mot ved tegning av et negativt kostnadssjokk?",
      options: ["Å la inflasjonen ende høyere enn utgangspunktet (selvmotsigende)", "Å skifte Phillips-kurven ned, men samtidig heve renten", "Å holde IS fast, som om lavere strømpriser ikke virker", "Å senke renten når prispresset avtar, i stedet for å holde styringsrenten uendret"],
      explanation: "Et negativt kostnadssjokk senker prispresset; inflasjonen må ende lavere. Feilen kommer av gale proporsjoner.",
    },
    {
      question: "Hvordan behandles importert inflasjon (etter kronesvekkelse) i modellen?",
      options: ["Som et positivt kostnadssjokk $\\Delta z^\\pi > 0$", "Som et positivt etterspørselssjokk som skifter IS-kurven mot høyre", "Som et pengepolitisk sjokk der sentralbanken selv endrer renteregelen", "Som en økning i potensielt BNP $Y^n$ og dermed i produksjonskapasiteten"],
      explanation: "Dyrere import presser prisnivået opp uavhengig av gapet → kostnadssjokk som skifter PK og RR.",
    },
    {
      question: "Hva er den mest fremhevede karakterskillende innsikten i Del 5 ifølge sensorveiledningene?",
      options: ["Skillet mellom etterspørselssjokk og kostnadssjokk", "Utledning av Keynes-multiplikatoren", "BNP-klassifisering: å skille nominelt fra realt BNP og bruttoprodukt fra BNP", "Handlingsregelen for bruken av oljeinntekter over statsbudsjettet"],
      explanation: "Skillet (samme vei vs. motsatt vei; IS vs. PK/RR) skiller A/B fra C/D.",
    },
    {
      question: "En økning i inflasjonsforventningene ($\\Delta\\pi^e > 0$) virker som:",
      options: ["Et kostnadssjokk: PK og RR opp, $Y$ ned, $\\pi$ og $i$ opp", "Et etterspørselssjokk som skifter IS mot høyre", "Et rentekutt", "En økning i $Y^n$"],
      explanation: "$\\pi^e$ står i både PK- og RR-interceptet, så virkningen er identisk med et kostnadssjokk.",
    },
    {
      question: "Hvorfor er godt forankrede inflasjonsforventninger verdifulle?",
      options: ["De hindrer at forventningsdrevne kostnadssjokk selvforsterker inflasjonen", "De øker Keynes-multiplikatoren, slik at hver krone i etterspørsel gir større utslag i BNP", "De gjør IS brattere slik at renteregelens gjennomslag på BNP blir merkbart kraftigere", "De fjerner produksjonsgapet, slik at $Y$ alltid er lik $Y^n$"],
      explanation: "Uforankrede forventninger virker som stadige kostnadssjokk i en selvforsterkende spiral.",
    },
    {
      question: "En økning i potensielt BNP ($\\Delta Y^n > 0$) skal analyseres via:",
      options: ["PK og RR (tilbudssidesjokk), ikke IS", "IS alene, via etterspørselen", "Bare RR", "Ingen kurver skifter"],
      explanation: "$Y^n$ endrer gap-normaliseringen og treffer PK/RR; etterspørselen er uendret, så IS skifter ikke.",
    },
    {
      question: "Hva betyr det at et kostnadssjokk gir 'stagflasjon' for sentralbankens verktøy?",
      options: ["Ett rentevåpen kan ikke løse to problemer som trekker motsatt vei", "Renten kan løse begge problemene på samme tid", "Finanspolitikken må brukes i stedet, siden renten ikke virker under stagflasjon", "Inflasjonen forsvinner av seg selv når kostnadssjokket ebber ut, uten rentehevinger"],
      explanation: "Med inflasjon opp og produksjon ned må sentralbanken prioritere; renten kan ikke stabilisere begge fullt ut.",
    },
    {
      question: "Ved et positivt kostnadssjokk ligger ny likevekt B i øvre panel:",
      options: ["oppe til venstre for A (høyere $i$, lavere $Y$)", "oppe til høyre for A, med både høyere $i$ og høyere $Y$", "nede til høyre for A, med lavere $i$ og høyere $Y$ enn i A", "rett under A"],
      explanation: "Fast, fallende IS krysser den høyere RR ved lavere $Y$ og høyere $i$.",
    },
    {
      question: "Hvorfor stiger inflasjonen normalt mindre enn kostnadssjokket selv?",
      options: ["Fordi rentehevingen og BNP-fallet demper prispresset delvis", "Fordi bare renteregelen reagerer, ikke Phillips-kurven", "Fordi RR-kurven ikke skifter ved sjokket", "Fordi $\\beta = 0$"],
      explanation: "PK-skiftet løfter $\\pi$, men den lavere aktiviteten trekker $\\pi$ nedover langs den nye PK.",
    },
    {
      question: "Hvilken av disse er et tilbudssidesjokk?",
      options: ["Et kostnadssjokk $\\Delta z^\\pi$", "Et konsumsjokk $\\Delta z^C$", "Et sjokk i $\\Delta G$", "Et skattekutt $\\Delta z^T$"],
      explanation: "Kostnadssjokk (sammen med $\\pi^e$ og $Y^n$) treffer pris-/produksjonssiden; de tre andre er etterspørselssjokk.",
    },
    {
      question: "En vanlig feil er å skifte bare PK ved et kostnadssjokk. Hva glemmer man da?",
      options: ["At RR skifter sammen med PK (sentralbankens reaksjon i øvre panel)", "At IS skifter", "At produksjonen $Y$ holdes konstant fordi bare Phillips-kurven skifter", "At inflasjonen faller, fordi renteøkningen mer enn nøytraliserer PK-skiftet"],
      explanation: "Kostnadssjokket står også i RR-interceptet ($d_1 z^\\pi$); glemmer man RR-skiftet, mister man renteøkningen og BNP-fallet.",
    },
  ],
  'econ1310-5-4': [
    {
      question: "Hvor mye må sentralbanken heve renten for å nøytralisere et investeringssjokk $\\Delta z^I$ (for $\\Delta Y = 0$)?",
      options: ["$\\Delta i = \\dfrac{\\Delta z^I}{c_2 + b_2}$", "$\\Delta i = \\dfrac{\\Delta z^I}{b_2}$", "$\\Delta i = \\dfrac{\\Delta z^I}{c_2}$", "$\\Delta i = \\dfrac{\\Delta z^I}{c_2 + b_2 + d_2\\beta}$"],
      explanation: "Renten virker gjennom begge kanaler, $c_2$ (konsum) og $b_2$ (investering), så nevneren er den samlede rentekanalen $c_2 + b_2$.",
    },
    {
      question: "Hvorfor faller multiplikatoren $1/D$ ut av nøytraliseringsbetingelsen?",
      options: ["Den ganger hele klammen i tilvekstuttrykket, så $\\Delta Y = 0$ krever bare at klammen er null", "Fordi multiplikatoren $1/D$ alltid blir nøyaktig lik 1 idet sentralbanken nøytraliserer sjokket fullt", "Fordi sjokket alltid er nøyaktig like stort som multiplikatoren $1/D$, slik at de to opphever hverandre", "Fordi renten er bundet, slik at multiplikatoren $1/D$ ikke lenger inngår i tilvekstuttrykket for $\\Delta Y$"],
      explanation: "$\\Delta Y = \\frac{1}{D}[\\ldots]$; skal $\\Delta Y = 0$, holder det at klammen er null — $D$-verdien trengs aldri.",
    },
    {
      question: "Hvor mye må skatten endres for å holde konsumet uendret etter et konsumsjokk $\\Delta z^C$?",
      options: ["$\\Delta z^T = \\dfrac{\\Delta z^C}{c_1}$", "$\\Delta z^T = c_1\\,\\Delta z^C$", "$\\Delta z^T = \\Delta z^C$", "$\\Delta z^T = \\dfrac{\\Delta z^C}{1-c_1}$"],
      explanation: "Skatt demper konsumet bare med andelen $c_1$ per krone, så det trengs $1/c_1$ kroner skatt per krone konsumsjokk.",
    },
    {
      question: "Hvorfor må en skatteøkning som nøytraliserer et konsumsjokk være større enn selve sjokket?",
      options: ["Fordi $c_1 < 1$: bare andelen $c_1$ av hver skattekrone reduserer konsumet, resten tas fra sparing", "Fordi skatt virker direkte og fullt ut på etterspørselen, slik at hele skattekronen forsvinner fra konsumet", "Fordi den endogene skatten $tY$ forsterker hver multiplikatorrunde og gjør at skattedosen må være mindre enn selve sjokket", "Fordi renten heves, og rentekanalen $c_2 + b_2$ gjør dosen større"],
      explanation: "Med $c_1 < 1$ er $1/c_1 > 1$, så skatteøkningen overstiger sjokket.",
    },
    {
      question: "Ved bundet rente ($\\Delta i = 0$) og et forventningssjokk $\\Delta\\pi^e$: hvor mye må offentlige kjøp endres for $\\Delta Y = 0$?",
      options: ["$\\Delta G = -(c_2+b_2)\\,\\Delta\\pi^e$", "$\\Delta G = (c_2+b_2)\\,\\Delta\\pi^e$", "$\\Delta G = -\\dfrac{\\Delta\\pi^e}{c_2+b_2}$", "$\\Delta G = -c_1\\,\\Delta\\pi^e$"],
      explanation: "Et $\\Delta\\pi^e > 0$ senker realrenten og stimulerer etterspørselen med $(c_2+b_2)\\Delta\\pi^e$; G må kuttes tilsvarende.",
    },
    {
      question: "Hvorfor kan et rent etterspørselssjokk nøytraliseres fullstendig med ett virkemiddel?",
      options: ["Produksjonsgapet og inflasjonsgapet trekker samme vei, så ett virkemiddel lukker begge samtidig", "Fordi et etterspørselssjokk bare flytter Phillips-kurven og lar produksjonsgapet stå urørt", "Fordi renteregelen automatisk nuller det", "Fordi $c_2 + b_2 = 1$"],
      explanation: "Ved etterspørselssjokk er begge gap positive (eller begge negative) — ingen målkonflikt.",
    },
    {
      question: "Hvorfor er full nøytralisering av et kostnadssjokk prinsipielt umulig?",
      options: ["Inflasjons- og produksjonsgapet trekker motsatt vei, så ett virkemiddel ikke kan nulle begge", "Fordi kostnadssjokk ikke påvirker renten, og sentralbanken derfor mangler et virkemiddel mot inflasjonen", "Fordi rentekanalen $c_2 + b_2 = 0$ ved kostnadssjokk, slik at renteendringer ikke flytter etterspørselen", "Fordi et kostnadssjokk bare treffer IS-kurven og dermed krever to helt separate finanspolitiske grep"],
      explanation: "Kostnadssjokk gir stagflasjon: $\\pi$ opp, $Y$ ned. Å lukke det ene gapet forverrer det andre.",
    },
    {
      question: "Hva består 'rentekanalen' av i modellen?",
      options: ["Summen $c_2 + b_2$ — rentens virkning på både konsum og investering", "Bare $b_2$ — rentens virkning på investeringene, ettersom konsumet er helt renteufølsomt i modellen", "Bare $c_2$ — rentens virkning på konsumet, ettersom investeringene er helt renteufølsomme i modellen", "Multiplikatoren $1/D$, ettersom rentens virkning går gjennom multiplikatorrundene og ikke via $c_2$ og $b_2$"],
      explanation: "En høyere realrente demper konsum ($c_2$) og investering ($b_2$); samlet virkning er $c_2 + b_2$.",
    },
    {
      question: "En dimensjoneringsoppgave gjelder $\\Delta z^I = 30$, $c_2 = 0{,}3$, $b_2 = 0{,}2$. Hvor mye heves renten for $\\Delta Y = 0$?",
      options: ["$60$", "$15$", "$6$", "$150$"],
      explanation: "$\\Delta i = 30/(0{,}3+0{,}2) = 30/0{,}5 = 60$.",
    },
    {
      question: "Et konsumsjokk $\\Delta z^C = 20$ skal nøytraliseres med skatt, $c_1 = 0{,}8$. Hva blir $\\Delta z^T$?",
      options: ["$25$", "$16$", "$20$", "$100$"],
      explanation: "$\\Delta z^T = 20/0{,}8 = 25$ — større enn sjokket fordi $c_1 < 1$.",
    },
    {
      question: "Hva er forskjellen på diskresjonær og regelbasert (automatisk) rentesetting?",
      options: ["Diskresjonær er en bevisst beregnet dose mot et mål; regelbasert er renteregelens automatiske respons", "Diskresjonær politikk gjelder bare finanspolitikk, mens renten alltid er regelbasert", "Regelbasert respons nøytraliserer alltid sjokket fullt, siden regelen sikter mot $\\Delta Y = 0$", "De gir alltid samme rente, siden renteregelen er utledet av den diskresjonære dosen"],
      explanation: "Dimensjonering finner den diskresjonære dosen ($\\Delta i = \\Delta z/(c_2+b_2)$), ikke det renteregelen ville gitt.",
    },
    {
      question: "Hvorfor setter sentralbanken renten gradvis i praksis, selv om modellen tillater full nøytralisering i ett steg?",
      options: ["Usikkerhet om økonomiens tilstand og parametre, hensyn til troverdighet og finansiell stabilitet", "Fordi sentralbankloven forbyr rentesteg større enn et kvart prosentpoeng om gangen, uansett sjokkets størrelse", "Fordi multiplikatorens størrelse er ukjent for offentligheten", "Fordi finanspolitikken alltid virker før renten og tvinger sentralbanken til å avvente Stortingets budsjettvedtak"],
      explanation: "Gradvishet begrunnes i usikkerhet, forventningsforankring/troverdighet og finansiell stabilitet.",
    },
    {
      question: "Et negativt etterspørselssjokk $\\Delta z^I = -40$ ved nullgrensen ($\\Delta i = 0$), $c_2+b_2 = 0{,}5$. Hvor mye må G økes for $\\Delta Y = 0$?",
      options: ["$40$", "$20$", "$80$", "$-40$"],
      explanation: "Med $\\Delta i = 0$ blir klammen $\\Delta z^I + \\Delta G = 0$, så $\\Delta G = 40$.",
    },
    {
      question: "Hvorfor er finanspolitikken sterkere ved nullgrensen?",
      options: ["Rentedempingen (RR-responsen) uteblir, så en G-økning motvirkes ikke av høyere rente", "Fordi skatt da virker direkte på konsumet uten omvei om renten", "Fordi multiplikatoren faller under 1 når renten er bundet til null", "Fordi renten ved nullgrensen settes negativ og dermed forsterker offentlige kjøp"],
      explanation: "Ved bundet rente er den motvirkende renteresponsen borte, så finanspolitikkens fulle utslag består.",
    },
    {
      question: "Hva gir sensor uttelling for i en dimensjoneringsoppgave?",
      options: ["Riktig parameterkombinasjon i nevneren, riktig fortegn, OG forklaring på hvorfor nøytralisering er mulig", "Bare det numeriske svaret, uten fortegn og begrunnelse", "En lang verbal drøfting av transmisjonskanalene uten oppsett av nøytraliseringsbetingelsen", "At du tegner IS-RR-PK-diagrammet, uansett om nevneren og fortegnet mangler"],
      explanation: "Alle tre kreves: nevner, fortegn og begrunnelse (samme-vei-gapene, at $1/D$ faller ut).",
    },
  ],
  'econ1310-5-5': [
    {
      question: "Hvilke kurver skifter ved et rent etterspørselssjokk?",
      options: ["Bare IS", "Bare RR", "Både IS og RR", "Bare Phillips-kurven"],
      explanation: "Phillips-kurven er bakt inn i RR, så et etterspørselssjokk flytter bare IS; sentralbanken svarer langs en fast RR.",
    },
    {
      question: "Du skal tegne IS-RR-PK-diagrammet. Hvilken størrelse hører hjemme på den loddrette aksen i øvre panel?",
      options: ["Renten $i$ — øvre panel er $(Y, i)$-rommet med IS og RR", "Inflasjonen $\\pi$ — øvre panel er $(Y, \\pi)$-rommet, der IS-kurven er tegnet", "Ledigheten $u$ — øvre panel er $(Y, u)$-rommet, siden lønnsdannelsen fastsetter RR", "Prisnivået $P$ — fordi det bestemmer realrenten som forskyver hele IS-kurven"],
      explanation: "Øvre panel har BNP $Y$ vannrett og renten $i$ loddrett (fallende IS, stigende RR); inflasjonen hører til nedre panel, $(Y, \\pi)$, med Phillips-kurven.",
    },
    {
      question: "Hvilken mekanisme gir IS-kurven dens negative helning?",
      options: ["Realrentens demping av konsum ($c_2$) og investering ($b_2$)", "Sentralbankens renterespons på gapene ($d_2$)", "Lønnspresset som stiger når ledigheten faller ($\\beta$)", "Skattelekkasjen som tapper hver multiplikatorrunde ($t$)"],
      explanation: "IS viser vareetterspørselen: en høyere realrente reduserer $C$ via $c_2$ og $I$ via $b_2$, så høy rente hører sammen med lav $Y$. Renterespons ($d_2$) og lønnspress ($\\beta$) hører til RR og PK.",
    },
    {
      question: "RR-kurvens helning er $d_1\\beta + d_2$. Hva står de to leddene for?",
      options: ["Inflasjonskanalen $d_1\\beta$ pluss den direkte gap-responsen $d_2$", "IS-kurvens helning $d_1\\beta$ pluss utgiftsmultiplikatoren $d_2$, altså to størrelser fra etterspørselssiden", "To ledd som trekker renten hver sin vei når $Y$ stiger: $d_1\\beta$ hever renten, mens $d_2$ drar den ned", "Kostnadssjokket $d_1\\beta$ pluss forventningsleddet $d_2$ fra Phillips-kurven"],
      explanation: "Når $Y$ stiger, hever sentralbanken renten både fordi gapet øker direkte ($d_2$) og fordi høyere gap gir høyere inflasjon via PK, som renteregelen svarer på ($d_1\\beta$). Begge ledd trekker samme vei — derfor stiger RR.",
    },
    {
      question: "Et positivt etterspørselssjokk gir hvilket fortegnsmønster?",
      options: ["$Y\\uparrow$, $i\\uparrow$, $\\pi\\uparrow$ (alle samme vei)", "$Y\\uparrow$, $i\\downarrow$, $\\pi\\downarrow$", "$Y\\downarrow$, $i\\uparrow$, $\\pi\\uparrow$", "$Y\\uparrow$, $i\\uparrow$, $\\pi\\downarrow$"],
      explanation: "IS høyre langs stigende RR: alt opp. Ingen målkonflikt fordi gapene trekker samme vei.",
    },
    {
      question: "Hvilke kurver skifter ved et positivt kostnadssjokk ($\\Delta z^\\pi > 0$)?",
      options: ["Både PK og RR skifter opp; IS ligger fast", "Bare IS skifter venstre fordi kostnadssjokket demper vareetterspørselen direkte", "Bare PK skifter opp, RR ligger fast", "Bare RR skifter opp, ikke PK og IS"],
      explanation: "PK skifter opp med $\\Delta z^\\pi$, RR med $d_1\\Delta z^\\pi$. IS er uendret.",
    },
    {
      question: "Et positivt kostnadssjokk gir hvilket fortegnsmønster?",
      options: ["$Y\\downarrow$, $i\\uparrow$, $\\pi\\uparrow$ (stagflasjon)", "$Y\\uparrow$, $i\\uparrow$, $\\pi\\uparrow$ (oppgang)", "$Y\\downarrow$, $i\\downarrow$, $\\pi\\downarrow$", "$Y\\uparrow$, $i\\downarrow$, $\\pi\\uparrow$"],
      explanation: "Inflasjon opp, produksjon ned — motsatt vei, derav målkonflikten.",
    },
    {
      question: "Hvorfor blir det stående et rest-utslag i BNP etter at sentralbanken har respondert på et etterspørselssjokk?",
      options: ["Renteregelen reagerer på gap og inflasjon ($d_1, d_2$), ikke på kravet $\\Delta Y = 0$", "Fordi sentralbanken alltid venter et kvartal før den reagerer", "Fordi renteendringen forsterker etterspørselssjokket i stedet for å dempe det langs RR-kurven", "Fordi Phillips-kurven hindrer renten i å påvirke BNP"],
      explanation: "Ny likevekt ligger der skiftet IS krysser den uendrede RR. Siden renten settes etter regelen — ikke etter et mål om null utslag — dempes sjokket, men nøytraliseres ikke.",
    },
    {
      question: "Ranger BNP-utslaget av samme etterspørselssjokk under renteregel og under fast rente:",
      options: ["Størst ved fast rente — renteregelen demper utslaget", "Størst ved renteregel — renten forsterker sjokket", "Nøyaktig likt — renten påvirker bare inflasjonen og ikke $Y$-utslaget av sjokket", "Null ved fast rente — sjokket absorberes fullt ut av prisene langs Phillips-kurven"],
      explanation: "Fast rente tegnes som vannrett RR: uten den motvirkende renteendringen slår multiplikatoren fullt gjennom, og utslaget blir større enn under renteregelen.",
    },
    {
      question: "Etter et negativt kostnadssjokk tegner en student ny likevekt med høyere inflasjon enn i utgangspunktet A. Hva er galt?",
      options: ["Figuren er selvmotsigende — et negativt kostnadssjokk må ende med $\\pi$ under A", "Ingenting — inflasjonen kan gå begge veier ved kostnadssjokk", "Studenten skulle skiftet IS i stedet for PK og RR", "Studenten skulle latt renten stå uendret i figuren"],
      explanation: "Sensor advarer eksplisitt mot dette: forholdet mellom RR-helning og RR-skift gjør at et negativt kostnadssjokk alltid gir lavere inflasjon i ny likevekt. Høyere $\\pi$ i figuren avslører en logisk brist.",
    },
    {
      question: "Hvordan behandles et forventningssjokk $\\Delta\\pi^e > 0$ i diagrammet?",
      options: ["Som et kostnadssjokk: PK og RR skifter opp, $Y\\downarrow$, $i\\uparrow$, $\\pi\\uparrow$", "Som et etterspørselssjokk der bare IS-kurven skifter mens sentralbanken svarer langs en fast RR", "Bare PK skifter opp, mens RR står fast fordi renten ikke reagerer", "Ingen kurver skifter, fordi $\\pi^e$ er eksogent"],
      explanation: "$\\pi^e$ inngår i både PK og RR, så begge skifter opp — samme mønster som $z^\\pi > 0$.",
    },
    {
      question: "Hva skjer i diagrammet når potensielt BNP øker ($\\Delta Y^n > 0$)?",
      options: ["PK og RR skifter mot høyre; $Y\\uparrow$, $i\\downarrow$, $\\pi\\downarrow$", "IS skifter venstre, så BNP faller når $Y^n$ øker", "Bare RR skifter opp fordi høyere potensielt BNP tvinger renteregelen til å stramme kraftig til", "Ingenting endres, siden $Y^n$ ikke inngår i kurvene"],
      explanation: "Høyere $Y^n$ reduserer gapet ved gitt $Y$, så PK og RR flytter høyre — et gunstig tilbudssidesjokk.",
    },
    {
      question: "Hvordan skal et kombinasjonssjokk ($\\Delta X < 0$ og $\\Delta z^\\pi > 0$) analyseres?",
      options: ["Hvert sjokk for seg, deretter samlet", "Som ett samlet etterspørselssjokk, altså bare et IS-skift", "Som ett samlet kostnadssjokk, altså bare et skift i PK", "Man velger det største sjokket og ignorerer det minste"],
      explanation: "Del opp: ett IS-skift og ett PK/RR-skift; legg dem sammen til slutt.",
    },
    {
      question: "Ved kombinasjonen $\\Delta X < 0$ og $\\Delta z^\\pi > 0$: hva er entydig?",
      options: ["BNP faller entydig; rente og inflasjon er fortegnsubestemte", "Renten stiger entydig, mens BNP er ubestemt", "Inflasjonen faller entydig fordi kostnadssjokket domineres av etterspørselsfallet", "Både BNP, rente og inflasjon er entydig bestemt"],
      explanation: "Begge sjokk trekker $Y$ ned; på $i$ og $\\pi$ trekker de motsatt vei, så disse er ubestemte.",
    },
    {
      question: "Fullfør regelen: «Ett rentevåpen kan møte begge gap bare når …»",
      options: ["… gapene trekker samme vei — altså ved etterspørselssjokk, ikke kostnadssjokk", "… inflasjonen er nøyaktig på målet i utgangspunktet", "… renteregelen har $d_1 = d_2$, så gapene veies likt", "… sjokket treffer både PK og RR samtidig, akkurat slik et rent kostnadssjokk gjør det"],
      explanation: "Ved etterspørselssjokk peker produksjons- og inflasjonsgapet samme vei, så én renterespons hjelper begge. Ved kostnadssjokk trekker de motsatt vei — det er målkonflikten.",
    },
    {
      question: "Et eksportfall i åpen økonomi ($\\Delta X < 0$) — hvilken kurve skifter?",
      options: ["IS skifter venstre (eksport er et etterspørselsledd)", "RR skifter opp fordi eksportfallet tvinger sentralbanken til å heve renten", "PK skifter ned, mens IS ligger fast", "Ingen kurve skifter; eksport er eksogen"],
      explanation: "Eksport inngår i vareetterspørselen, så et fall er et negativt etterspørselssjokk som flytter IS venstre.",
    },
    {
      question: "Et skattekutt og en $G$-økning på samme beløp skifter IS ulikt langt. Hva er forholdet mellom skiftene?",
      options: ["Skattekuttets IS-skift er $c_1$ ganger $G$-skiftet — bare konsumandelen blir etterspørsel", "Skiftene er nøyaktig like lange — beløpet er det samme", "Skattekuttets skift er $1/c_1$ ganger $G$-skiftet, ettersom skatt alltid virker sterkest på etterspørselen", "Skattekuttet skifter RR, ikke IS, så skiftene kan ikke sammenlignes"],
      explanation: "$G$ treffer etterspørselen krone for krone, mens av skatteletten blir bare andelen $c_1 < 1$ konsum (resten spares). IS-skiftet ved skattekutt er derfor $c_1$ ganger $G$-skiftet.",
    },
    {
      question: "Hva er A-besvarelsens minstekrav til selve figuren?",
      options: ["Riktig kurve, riktig retning og begge likevektspunkter (A og B) markert", "Perfekt kurvefasong og eksakte tallverdier", "Bare det øvre panelet må tegnes; nedre panel med Phillips-kurven kan utelates helt", "En verbal beskrivelse av kurveskiftene helt uten selve figuren og likevektspunktene"],
      explanation: "Kurvefasong er underordnet (H2022); det som teller er riktig skift og markerte likevekter, pluss mekanismen i ord.",
    },
    {
      question: "Ved et negativt etterspørselssjokk: hva gjør sentralbanken langs RR?",
      options: ["Kutter renten, som demper fallet i BNP", "Hever renten, som forsterker fallet i BNP ytterligere", "Holder renten fast langs RR", "Skifter hele RR-kurven nedover"],
      explanation: "Lavere gap og inflasjon $\\Rightarrow$ renteregelen kutter renten; vi beveger oss nedover langs uendret RR.",
    },
    {
      question: "Hvilket panel leser du av først, og hvordan kobles panelene?",
      options: ["Finn likevekts-$Y$ i øvre panel, les samme $Y$ nedover til PK for $\\pi$", "Finn $\\pi$ i nedre panel først, så $Y$ i øvre panel", "Panelene er uavhengige, så likevekts-$Y$ i øvre panel styrer ikke avlesningen av $\\pi$ i nedre panel", "Nedre panel har renten $i$ på den loddrette aksen og deler ikke $Y$-akse med øvre panel"],
      explanation: "Panelene deler $Y$-aksen: likevekts-$Y$ fra øvre panel bestemmer punktet på PK i nedre panel.",
    },
  ],
  'econ1310-5-6': [
    {
      question: "Hva innebærer fleksibel inflasjonsstyring?",
      options: ["Sentralbanken styrer mot inflasjonsmålet, men vektlegger også å stabilisere realøkonomien", "Sentralbanken bryr seg kun om inflasjonen og setter renten utelukkende etter avviket fra målet, uten vekt på produksjonsgapet", "Sentralbanken har ikke noe fast inflasjonsmål, men velger nytt mål hvert år ut fra hvordan produksjon og sysselsetting utvikler seg", "Sentralbanken styrer valutakursen fast og lar inflasjonen flyte helt fritt rundt et implisitt mål"],
      explanation: "«Fleksibel» = banken aksepterer midlertidige inflasjonsavvik for å skåne produksjon og sysselsetting; speiles av $d_1$ og $d_2$ begge positive.",
    },
    {
      question: "Hvilke parametre i renteregelen speiler henholdsvis inflasjonsmål og realøkonomisk hensyn?",
      options: ["$d_1$ (inflasjonsavvik) og $d_2$ (produksjonsgap)", "$c_1$ og $c_2$", "$\\beta$ (lønnsfølsomhet) og $\\mu$ (påslag)", "$b_1$ og $b_2$"],
      explanation: "Renteregelen: $i = z^i + d_1(\\pi-\\pi^*) + d_2\\frac{Y-Y^n}{Y^n}$.",
    },
    {
      question: "Hvorfor setter sentralbanken renten gradvis?",
      options: ["Usikkerhet om økonomien, hensyn til troverdighet og finansiell stabilitet", "Fordi sentralbankloven pålegger banken å endre styringsrenten med høyst 0,25 prosentpoeng på hvert rentemøte", "Fordi renteregelen gir ett fast tall for styringsrenten, og banken må bevege seg dit i like store steg fra møte til møte", "Fordi finanspolitikken alltid virker først, så sentralbanken må vente på Stortingets budsjettvedtak"],
      explanation: "De tre standardgrunnene for gradvishet.",
    },
    {
      question: "Hva er rentens transmisjonsmekanisme?",
      options: ["Kjeden fra styringsrenten via markedsrenter til konsum, investering og valutakurs", "Sentralbankens fastsettelse av inflasjonsmålet, i Norge 2 % over tid, og kommunikasjonen av målet til markedet", "Skattesystemets virkning på BNP gjennom endogen skatt $tY$", "Forholdet mellom aksjer og obligasjoner som styrer hvordan sentralbanken fastsetter inflasjonsmålet"],
      explanation: "Styringsrenten smitter til markedsrentene og videre til realøkonomien, med et virkningslag.",
    },
    {
      question: "Hvordan virker valutakurskanalen ved en renteøkning i en liten åpen økonomi?",
      options: ["Høyere rente styrker kronen, gjør import billigere og eksport dyrere", "Høyere rente svekker kronen, gjør eksporten billigere og øker dermed nettoeksporten", "Renten påvirker ikke valutakursen, siden kronekursen i en liten åpen økonomi styres av oljeprisen og ikke av rentedifferansen", "Kronen styrkes bare ved lavere rente, fordi lav rente gjør norske verdipapirer mer attraktive og trekker kapital inn i landet"],
      explanation: "Høyere rente enn utlandet trekker kapital inn og styrker kronen; billigere import demper inflasjonen.",
    },
    {
      question: "Hva er en likviditetsfelle?",
      options: ["Styringsrenten er nær nullgrensen og kan ikke settes vesentlig lavere, så rentekutt slutter å virke", "Bankene har så mye reserver at pengemarkedsrenten faller under reserverenten og renteregelen slutter å virke", "At inflasjonen ligger varig over målet, slik at renten må holdes høy", "Kronen er så sterk at sentralbanken må kjøpe valuta"],
      explanation: "Ved nullgrensen mister sentralbanken sitt vanlige virkemiddel for å stimulere.",
    },
    {
      question: "Hvorfor kan ikke styringsrenten settes vesentlig under null?",
      options: ["Aktørene ville da holdt kontanter (null avkastning) i stedet for å plassere til negativ rente", "Fordi inflasjonen ville eksplodert når renten faller under null", "Fordi sentralbankloven setter et absolutt forbud mot negativ styringsrente, slik at Norges Bank rettslig må stoppe på null", "Fordi bankene da slutter helt å låne ut ettersom negativ rente gjør all utlånsvirksomhet ulønnsom"],
      explanation: "Kontantalternativet setter en effektiv nedre grense for renten.",
    },
    {
      question: "Hva er kvantitative lettelser (QE)?",
      options: ["Sentralbanken kjøper verdipapirer for å presse ned lange renter og tilføre likviditet", "Et ordinært kutt i styringsrenten på et vanlig rentemøte", "En økning i skattene for å trekke inn likviditet", "Et bindende løfte om høyere styringsrente framover for å forankre inflasjonsforventningene"],
      explanation: "QE er et ukonvensjonelt virkemiddel ved nullgrensen — ikke det samme som et vanlig rentekutt.",
    },
    {
      question: "Hva er forward guidance?",
      options: ["Sentralbanken kommuniserer forpliktende om fremtidig rentebane for å påvirke forventningene i dag", "Sentralbanken kjøper aksjer og eiendom for å heve formuesprisene", "Et krav om at statsbudsjettet skal balansere hvert eneste år", "En fast valutakurs som sentralbanken forsvarer med renten"],
      explanation: "Ved å love vedvarende lav rente påvirkes de lange rentene allerede nå.",
    },
    {
      question: "Hvorfor er finanspolitikken kraftigere ved nullgrensen?",
      options: ["Renteresponsen uteblir (RR flat), så en G-økning slår fullt gjennom uten motvirkende renteoppgang", "Fordi skatteletten virker fullt ut på etterspørselen uten sparelekkasje", "Fordi multiplikatoren blir mindre når styringsrenten ligger på null", "Fordi renten da settes negativ og forsterker G-økningen"],
      explanation: "Samme logikk som fast-rente-analysen i kap. 5.2: uten rentedemping blir utslaget større.",
    },
    {
      question: "Hva er den vanligste feilen i en pengepolitisk drøftingsoppgave (sjanger L)?",
      options: ["Å trekke inn matematisk modell i en verbal drøfting", "Å bruke fagbegreper i den verbale drøftingen", "Å veie relevante argumenter for og imot uten å lande på ett bestemt standpunkt", "Å definere nøkkelbegrepene innledningsvis"],
      explanation: "Sjanger L er verbal; ligninger og utledninger er eksplisitt uønsket.",
    },
    {
      question: "Hva forankrer inflasjonsforventningene $\\pi^e$?",
      options: ["Et troverdig inflasjonsmål", "En svak krone", "Et vedvarende statlig budsjettunderskudd", "En høy reserverente"],
      explanation: "Når aktørene tror på målet, holder de $\\pi^e$ nær det, noe som gjør målet lettere å nå.",
    },
    {
      question: "Hva er hovedforskjellen mellom kvantitative lettelser og et ordinært rentekutt?",
      options: ["QE er kjøp av verdipapirer ved nullgrensen; rentekutt er en endring i styringsrenten", "De er det samme, bare med ulike navn på tiltaket", "QE hever de lange rentene, mens et rentekutt senker dem", "Rentekutt tilfører aldri likviditet, mens QE i praksis hever styringsrenten for å dempe inflasjonen"],
      explanation: "Å blande de to er en typisk feil — QE brukes når rentekutt ikke lenger er mulig.",
    },
    {
      question: "Hvorfor bryr en liten åpen økonomi som Norge seg ekstra om valutakursen i pengepolitikken?",
      options: ["Fordi renten virker vesentlig via kronekursen og bytteforholdet, ikke bare via lånerenten", "Fordi Norge har fast valutakurs som renten må forsvare", "Fordi valutakursen ikke påvirker inflasjonen", "Fordi eksporten er ubetydelig, så kronekursen påvirker verken inflasjonen eller produksjonen nevneverdig"],
      explanation: "Stor utenrikshandel gjør valutakurskanalen kraftig og rask — et toppkandidat-moment i casene.",
    },
    {
      question: "Hva er reserverenten?",
      options: ["Renten bankene får på innskudd (reserver) i sentralbanken", "Renten staten betaler på langsiktige statsobligasjoner i markedet", "Utlånsrenten bankene tar av husholdninger", "Inflasjonsmålet, altså den prisveksten sentralbanken sikter mot på mellomlang sikt"],
      explanation: "Reserverenten er sentralbankens operative styringsrente og gulv for de korte markedsrentene.",
    },
  ],
  'econ1310-6-1': [
    {
      question: "Hvordan vurderer sensor drøftingsoppgaven (sjanger L)?",
      options: ["Som en momentliste der veide, relevante argumenter gir uttelling — ikke standpunktet", "Etter om studenten lander på det «riktige» svaret", "Etter hvor mange ligninger og formelle utledninger studenten klarer å presse inn i svaret", "Kun etter lengden på svaret, slik at et langt svar alltid gir høyere uttelling enn et kort og presist"],
      explanation: "Drøftingen rettes mot en liste relevante momenter; flere konklusjoner godtas, og bredde og pensumforankring avgjør — ikke standpunktet.",
    },
    {
      question: "Hva er sensors hyppigst gjentatte metaregel?",
      options: ["Ikke svar på mer enn du blir spurt om", "Skriv alltid en tydelig konklusjon til slutt, uansett hva oppgaven spør om", "Ta med en matematisk modell for å vise forståelse", "Bruk minst én figur i hvert svar, også når oppgaven ikke ber om noen figur"],
      explanation: "Overflødig drøfting gir null ekstra uttelling og stjeler tid; å avgrense svaret til spørsmålet er den viktigste regelen.",
    },
    {
      question: "Hvilket verktøy hører IKKE hjemme i en drøftingsoppgave?",
      options: ["En matematisk utledning", "Fagbegreper", "En figur (fra 2021)", "For/mot-resonnement"],
      explanation: "Matematisk modell/utledning er eksplisitt uønsket hvert år; figurer er derimot tillatt fra 2021.",
    },
    {
      question: "Hvorfor har de fleste land lagt konjunkturansvaret til sentralbanken?",
      options: ["Pengepolitikken er rask, uavhengig og rendyrket", "Finanspolitikken har ingen virkningslag, så skatteendringer treffer økonomien umiddelbart", "Sentralbanken kan vedta skatteendringer raskere enn Stortinget rekker å behandle budsjettet", "Renten treffer bare noen få utvalgte sektorer svært presist"],
      explanation: "Renten kan endres løpende (rask), settes uavhengig av valghensyn, og stabilisering er sentralbankens eneste oppgave (rendyrket).",
    },
    {
      question: "I hvilken situasjon er finanspolitikken det sterkeste stabiliseringsverktøyet?",
      options: ["Ved nullgrensen, fordi renteresponsen uteblir", "I en normal høykonjunktur", "Alltid, fordi den virker umiddelbart", "Aldri, pengepolitikken virker best"],
      explanation: "Ved nullgrensen ligger renten fast, så et finanspolitisk løft motvirkes ikke av en renteøkning; hele multiplikatorvirkningen slår igjennom.",
    },
    {
      question: "Hva kjennetegner de lange lagene i finanspolitikken?",
      options: ["Beslutnings- og virkningslag gjør aktiv finanspolitikk treg", "At renten reagerer med forsinkelse, mens skatteendringer virker helt umiddelbart", "At skatten alltid er eksogen, slik at den kan endres uten budsjettbehandling i Stortinget", "At budsjettet balanseres automatisk uten vedtak"],
      explanation: "Utredning, budsjettbehandling og gjennomføring tar tid (beslutningslag), og tiltaket virker først etterpå (virkningslag).",
    },
    {
      question: "Renten er på null og økonomien trenger fortsatt stimulans. Hva kalles denne situasjonen?",
      options: ["En likviditetsfelle — nullgrensen hindrer videre rentekutt", "Stagflasjon — inflasjon og ledighet stiger samtidig", "Ricardiansk ekvivalens — husholdningene sparer alt", "En målkonflikt — gapene trekker hver sin vei"],
      explanation: "Ved nullgrensen kan sentralbanken ikke kutte mer, og ordinær pengepolitikk mister kraft — det er likviditetsfellen. Da blir finanspolitikken det sterkeste verktøyet.",
    },
    {
      question: "Hvilket verktøy bruker sentralbanken ved nullgrensen?",
      options: ["Kvantitative lettelser og forward guidance", "En kraftig heving av styringsrenten godt over null for å få fart på etterspørselen", "Endring av inntektsskatten, slik at husholdningene får mer å bruke", "Vedtak om kraftig økte offentlige kjøp og investeringer"],
      explanation: "Kjøp av verdipapirer (QE) og troverdige løfter om lav rente lenge (forward guidance) er ekstraordinære pengepolitiske verktøy — de siste to er finanspolitikk.",
    },
    {
      question: "Hva sier Ricardiansk ekvivalens?",
      options: ["Et lånefinansiert skattekutt stimulerer ikke, fordi husholdningene sparer det til framtidig skatt", "Et skattekutt virker alltid dobbelt så sterkt som en like stor økning i offentlige kjøp", "At renteresponsen nøytraliserer all finanspolitikk, uansett finansiering", "Import lekker ut av multiplikatoren, så skattekuttet virker svakere"],
      explanation: "Fremadskuende husholdninger motregner den framtidige skatteøkningen som må betjene gjelden, og sparer hele kuttet.",
    },
    {
      question: "Hvorfor svikter Ricardiansk ekvivalens ofte i praksis?",
      options: ["Kredittbeskrankninger, kort horisont og generasjonsskifte", "Fordi renten er fast og sparingen dermed låst", "Fordi skatten alltid er endogen gjennom leddet $tY$", "Fordi importlekkasjen er så stor at hele skattekuttet lekker rett ut av landet"],
      explanation: "Kredittbeskrankede bruker kuttet nå, mange sparer ikke for fjerne skatter, og deler av regningen faller på andre generasjoner.",
    },
    {
      question: "Hva skjer med den langsiktige reallønnen når arbeidstakernes forhandlingsmakt øker varig?",
      options: ["Den er uendret — priskurven låser reallønnen; bare $u^n$ stiger", "Den stiger varig, i takt med forhandlingsmakten", "Den faller varig, fordi lønnskurven skyves oppover", "Den svinger på kort sikt, mens likevektsledigheten $u^n$ forblir helt uendret"],
      explanation: "Lønnskurven skifter opp og hever likevektsledigheten, men reallønnen bestemmes av priskurven ($A$ og $\\mu$) og er uendret.",
    },
    {
      question: "Hvordan påvirker koordinert lønnsdannelse (frontfag) likevektsledigheten?",
      options: ["Den senkes, fordi lavere lønnspress ($z^W$ ned) skifter lønnskurven ned", "Den heves, fordi koordinering presser lønningene opp og skifter lønnskurven oppover", "Den er uendret, siden $z^W$ ikke flytter seg", "Den blir negativ, siden lønnspresset forsvinner helt"],
      explanation: "Koordinering demper lønnspresset, lønnskurven skifter ned, og $u^n$ faller — med uendret langsiktig reallønn.",
    },
    {
      question: "Hva menes med fleksibel inflasjonsstyring?",
      options: ["Sentralbanken vekter både inflasjonsmålet og realøkonomien ($d_1$ og $d_2$)", "Inflasjonsmålet endres fritt fra år til år etter konjunkturen", "Renten settes utelukkende etter inflasjonsavviket, helt uten hensyn til produksjonsgapet", "Renten holdes alltid fast, slik at verken inflasjonsavviket eller produksjonsgapet påvirker den"],
      explanation: "Vekten på både inflasjonsavvik ($d_1$) og produksjonsgap ($d_2$) i renteregelen speiler den fleksible styringen.",
    },
    {
      question: "Hvorfor regnes dagpengeordningen som en automatisk stabilisator?",
      options: ["Utbetalingene stiger av seg selv i nedgang og holder kjøpekraften oppe, uten nye vedtak", "Fordi Stortinget vedtar høyere satser i hver nedgang", "Fordi sentralbanken justerer dagpengesatsene i takt med styringsrenten gjennom hele konjunktursykelen", "Fordi utbetalingene er like store uansett konjunktur"],
      explanation: "Når ledigheten stiger, øker dagpengeutbetalingene automatisk og demper fallet i disponibel inntekt og konsum — samme logikk som den endogene skatten $T=z^T+tY$, og uten beslutningslag.",
    },
    {
      question: "Når skal du gi en konklusjon i en drøftingsoppgave?",
      options: ["Bare når oppgaven eksplisitt ber om det", "Alltid, uansett formulering", "Aldri", "Bare hvis du har god tid igjen mot slutten av eksamen"],
      explanation: "Ber ikke oppgaven om en konklusjon, er det bortkastet tid — og i casene noen ganger trekk — å gi en.",
    },
    {
      question: "Hvorfor styrkes pengepolitikkens gjennomslag i en liten åpen økonomi?",
      options: ["Renten virker også via valutakurskanalen (kurs og bytteforhold)", "Fordi finanspolitikken er avskaffet", "Fordi importen er null i en liten åpen økonomi, slik at renten treffer all etterspørsel innenlands", "Fordi inflasjonsmålet alltid settes høyere"],
      explanation: "En renteendring flytter valutakursen, som påvirker import- og eksportpriser — en ekstra transmisjonskanal.",
    },
    {
      question: "Hva er en «strekkoppgave»?",
      options: ["En deloppgave som bygger på løst berørt stoff og brukes til å skille toppkarakterer", "En oppgave som alltid må løses med en formell matematisk modell for å gi full uttelling", "En oppgave uten noe riktig svar, der alle besvarelser teller likt", "En oppgave verdt 0 poeng som ikke teller i karakteren"],
      explanation: "Sensor vurderer resonnementet mildt (f.eks. Ricardiansk ekvivalens) og bruker den til å differensiere de beste.",
    },
    {
      question: "En student svarer på «Gjør rede for likviditetsfellen. Ikke drøft finanspolitikk» ved å drøfte begge deler. Hva er problemet?",
      options: ["Den ekstra drøftingen gir null uttelling og bryter «svar bare på det du spørres om»", "Ingenting — mer stoff gir alltid mer poeng", "At studenten glemte å tegne en figur av likviditetsfellen, og at det er figuren som mangler", "At drøftingen burde vært forankret i en matematisk modell"],
      explanation: "Å svare på mer enn spurt gir ingen ekstra uttelling og stjeler tid; oppgaven forbød uttrykkelig finanspolitikk-drøftingen.",
    },
    {
      question: "Hvilket argument taler MOT å legge alt konjunkturansvar på pengepolitikken?",
      options: ["Renten treffer bredt og mister kraft ved nullgrensen", "Renten kan endres for raskt", "Sentralbanken er for politisk", "Finanspolitikk har ingen virkningslag og treffer økonomien helt umiddelbart"],
      explanation: "Pengepolitikken treffer likt og bredt og blir tannløs ved nullgrensen, der finanspolitikk virker sterkere.",
    },
    {
      question: "Hva er kjernen i en god drøfting, ifølge sensor?",
      options: ["Struktur, bredde og pensumforankring — for og mot veid mot hverandre", "Et sterkt, ensidig standpunkt som slås fast tidlig og forsvares uten motargumenter", "Så mange momenter som mulig uten veiing", "En lang matematisk utledning som viser full formell forståelse av modellapparatet"],
      explanation: "Balansert for/mot, forankret i pensumbegreper, slår et bestemt standpunkt; ren opplisting uten veiing gir lav uttelling.",
    },
  ],
  'econ1310-6-2': [
    {
      question: "Hva er første steg i løsningsoppskriften for et rollecase?",
      options: ["Lage en situasjonsdiagnose i modellens språk (hvilke sjokk, hvilket gap)", "Gi en konkret politikkanbefaling om rente eller offentlige kjøp med en gang, før sjokk og gap er kartlagt", "Sette opp og utlede skattemultiplikatoren og bruke den før du har stilt diagnosen", "Tegne IS-RR-PK-diagrammet før diagnosen er stilt"],
      explanation: "Du oversetter først scenariet til modellens sjokkvariabler og fortegn på gapet; det styrer hvilke hensyn som er relevante.",
    },
    {
      question: "Kreves en konklusjon (anbefaling) i et rollecase?",
      options: ["Nei — konklusjon kreves aldri, og forbys noen ganger eksplisitt", "Ja, alltid", "Bare hvis du spiller sentralbanksjef og skal forsvare rentebeslutningen offentlig", "Bare i rådgiver-caset, der oppdragsgiveren venter en klar anbefaling til slutt"],
      explanation: "Oppgaven ber om en avveining av alle hensyn; H2025 ba uttrykkelig om å IKKE gi en anbefaling.",
    },
    {
      question: "Hvilket perspektiv gir topputtelling i case?",
      options: ["Liten-åpen-økonomi-perspektivet (rente ↔ valutakurs ↔ bytteforhold)", "En detaljert algebraisk utledning av multiplikatoren uten å nevne valutakurskanalen", "En lengst mulig momentliste der alle tenkelige hensyn ramses opp uten prioritering eller vekting", "Å holde seg strengt til lukket økonomi og se bort fra både valutakursen og bytteforholdet i vurderingen"],
      explanation: "Å knytte rentebeslutningen til valutakurs og bytteforhold er en fast toppkandidat-markør i casene.",
    },
    {
      question: "Hva inngår i hensynskatalogen et case skal drøftes mot?",
      options: ["Inflasjonsmål, produksjonsgap, valutakurs, finansiell stabilitet, budsjett, stabilisatorer", "Bare inflasjonsmålet, siden renten styrer resten", "Bare budsjettbalansen og utviklingen i statens gjeld", "Kun multiplikatorens størrelse og skattelekkasjen, siden bare finanspolitikken teller"],
      explanation: "En systematisk gjennomgang av den faste hensynskatalogen sikrer bredden sensor krever.",
    },
    {
      question: "Hvorfor gir et kostnadssjokk sentralbanken en målkonflikt?",
      options: ["Inflasjon og produksjon trekker motsatt vei (inflasjon opp, produksjon ned)", "Fordi begge gap peker samme vei, så renten løser begge målene samtidig", "Fordi renten er fast og ikke kan brukes mot sjokket", "Fordi budsjettet er i balanse og dermed binder rentesettingen"],
      explanation: "Ved stagflasjon taler det negative gapet for kutt mens inflasjonen over målet taler for innstramming — renten kan ikke nå begge mål.",
    },
    {
      question: "Et case beskriver overoppheting (positivt gap, inflasjon over målet). Hvilket valg er åpenbart feil?",
      options: ["Å kutte renten / føre ekspansiv politikk", "Å heve renten", "Å la de automatiske stabilisatorene virke fritt uten renterespons", "Å stramme til finanspolitisk"],
      explanation: "Ved overoppheting taler både gap og inflasjon for innstramming; rentekutt regnes som et åpenbart feil politikkvalg.",
    },
    {
      question: "Hva er en typisk feil i case-besvarelser?",
      options: ["Å dikte inn forutsetninger utover caseteksten", "Å holde seg strengt til caseteksten og alle dens oppgitte tallverdier", "Å veie hensyn for og mot i stedet for å lande på ett entydig svar", "Å nevne finansiell stabilitet ved siden av inflasjon og produksjon"],
      explanation: "Å legge til egne tall eller antakelser trekker; man skal holde seg strengt til det som står.",
    },
    {
      question: "Caset nevner høy husholdningsgjeld og fallende boligpriser. Hvilket hensyn må med?",
      options: ["Finansiell stabilitet", "Telleregelen, altså regelen for hvordan BNP telles", "Multiplikatorens størrelse", "Realvalutakurs-beregning, altså å regne om nominell kurs med prisnivåene"],
      explanation: "Høy gjeld og boligprisfall er et finansiell-stabilitet-hensyn som kan tale mot aggressive rentekutt.",
    },
    {
      question: "En handelskonflikt gir eksportfall og dyrere import samtidig. Hvordan behandles det?",
      options: ["Som to sjokk ($\\Delta X<0$ og $\\Delta z^\\pi>0$) analysert hver for seg", "Som ett rent etterspørselssjokk der begge kurvene IS og RR skifter samtidig", "Som ett rent kostnadssjokk, uten eksportfall", "Som én endring i telleregelen for BNP-beregningen"],
      explanation: "Én hendelse kan romme to sjokk; de må skilles og veies før nettoeffekten drøftes.",
    },
    {
      question: "Hva gjør et rentekutt i en liten åpen økonomi via valutakurskanalen?",
      options: ["Svekker valutaen — bedrer eksporten, men løfter importprisene", "Styrker valutaen og senker importprisene, så importert inflasjon avtar merkbart", "Har ingen effekt på valutaen", "Fjerner budsjettunderskuddet"],
      explanation: "Lavere rente svekker kronen, som styrker eksportkonkurransen men forsterker importert inflasjon.",
    },
    {
      question: "Hvorfor gir et rent etterspørselssjokk INGEN målkonflikt for sentralbanken?",
      options: ["Inflasjons- og produksjonsgap trekker samme vei", "Fordi renten holdes fast langs RR", "Fordi PK skifter, men ikke IS", "Fordi budsjettet balanseres automatisk av de endogene skatteinntektene"],
      explanation: "Ved etterspørselssjokk peker begge gap samme vei, så én renterespons løser begge — motsatt av kostnadssjokk.",
    },
    {
      question: "Hva er forskjellen på automatiske stabilisatorer og diskresjonære tiltak?",
      options: ["Stabilisatorer virker umiddelbart uten vedtak; diskresjonære krever vedtak og har lag", "Diskresjonære virker umiddelbart uten beslutningslag, mens stabilisatorene må vedtas i Stortinget", "De er det samme, begge må vedtas i Stortinget", "Stabilisatorer gjelder bare pengepolitikk"],
      explanation: "Endogen skatt og trygd demper automatisk; aktive tiltak må vedtas og har beslutnings-/virkningslag, men kan målrettes.",
    },
    {
      question: "Sentralbanken har varslet et rentekutt, men inflasjonen kommer inn uventet sterkt. Hva er nøkkelspørsmålet?",
      options: ["Om inflasjonsoverraskelsen er midlertidig eller smitter til forventningene $\\pi^e$", "Om budsjettet er i balanse når renten kuttes", "Om multiplikatoren er over 1 slik at finanspolitikken alene lukker hele produksjonsgapet", "Om modellen er determinert med de gitte parameterverdiene"],
      explanation: "Er presset varig / forankret i høyere $\\pi^e$, taler det mot kutt; er det midlertidig, kan sentralbanken se gjennom det.",
    },
    {
      question: "Hva menes med situasjonsdiagnose i et case?",
      options: ["Å oversette scenariet til sjokk, gap-fortegn og inflasjonens forhold til målet", "Å gi den endelige anbefalingen", "Å regne ut skatte- og budsjettmultiplikatoren først", "Å tegne lønns- og priskurven"],
      explanation: "Diagnosen er modell-oversettelsen som avgjør hvilke hensyn og virkemidler som er relevante.",
    },
    {
      question: "Hva er en riktig avslutning på et case som ber deg IKKE anbefale noe?",
      options: ["En veid oppsummering av hensynene, uten å velge et virkemiddel", "En tydelig anbefaling om å kutte renten", "En matematisk utledning av multiplikatoren som avslutter med et konkret rentevalg", "En påstand uten begrunnelse, altså en konklusjon som ikke veier hensynene mot hverandre"],
      explanation: "Uten forespørsel om anbefaling skal svaret vise avveiningen for og mot — ikke ende i et valg.",
    },
  ],
  'econ1310-6-3': [
    {
      question: "«Forbrukertilliten stuper og folk vil spare mer.» Hvilket sjokk?",
      options: ["$\\Delta z^C<0$ (etterspørselssjokk, skifter IS)", "$\\Delta z^\\pi>0$ (kostnadssjokk)", "$\\Delta Y^n<0$ (potensialsjokk)", "$\\Delta \\pi^e>0$ (forventningssjokk)"],
      explanation: "Lavere forbruk uavhengig av inntekt er et negativt konsumsjokk som skifter IS mot venstre; RR skifter ikke.",
    },
    {
      question: "«Energiprisene stiger kraftig.» Hvilket sjokk, og hvilke kurver skifter?",
      options: ["$\\Delta z^\\pi>0$ — skifter PK og RR opp", "$\\Delta z^C>0$ — skifter IS og RR", "$\\Delta G>0$ — skifter IS", "$\\Delta X<0$ — skifter IS"],
      explanation: "Høyere energipriser er et kostnadssjokk i prispåslaget; det skifter PK og (siden PK er bakt inn i RR) også RR.",
    },
    {
      question: "Hvorfor skifter et rent etterspørselssjokk IKKE RR-kurven?",
      options: ["Phillips-kurven er bakt inn i RR; bare $z^\\pi$, $\\pi^e$ og $Y^n$ skifter RR", "Fordi renten ligger fast på styringsrentenivået, slik at RR-kurven er vannrett og ikke kan skifte ved noe sjokk", "Fordi IS-kurven ikke inngår i modellen, bare RR og PK, og etterspørselssjokk treffer derfor Phillips-kurven i stedet", "Fordi et etterspørselssjokk bare påvirker $Y$ og aldri prisdannelsen i modellen"],
      explanation: "RR inneholder allerede Phillips-kurven, så bare det som skifter PK (kostnad, forventning, potensial) skifter RR.",
    },
    {
      question: "«Kronen svekker seg og importvarer blir dyrere.» Hvilket sjokk?",
      options: ["$\\Delta z^\\pi>0$ (importert inflasjon, kostnadssjokk)", "$\\Delta z^C>0$ (etterspørselssjokk som skifter IS mot venstre)", "$\\Delta z^I>0$ (investeringssjokk som skifter IS, ikke en kostnadseffekt)", "$\\Delta Y^n>0$ (potensialsjokk)"],
      explanation: "Dyrere import er importert inflasjon — et positivt kostnadssjokk som virker via prispåslaget, ikke etterspørselen.",
    },
    {
      question: "«Regjeringen satser stort på forsvar og samferdsel.» Hvilket sjokk?",
      options: ["$\\Delta G>0$ (etterspørselssjokk, skifter IS mot høyre)", "$\\Delta z^\\pi>0$ (kostnadssjokk)", "$\\Delta \\pi^e>0$ (forventningssjokk)", "$\\Delta Y^n<0$ (potensialsjokk)"],
      explanation: "Offentlig satsing er økte offentlige kjøp $G$ — et etterspørselssjokk som skifter IS mot høyre.",
    },
    {
      question: "«Stor arbeidsinnvandring øker arbeidsstyrken varig.» Hvilket sjokk?",
      options: ["$\\Delta Y^n>0$ (potensialsjokk)", "$\\Delta z^C>0$ (IS-sjokk)", "$\\Delta z^\\pi<0$ (kostnadssjokk som senker prisveksten)", "$\\Delta G>0$ (etterspørselssjokk fra økte offentlige kjøp)"],
      explanation: "Økt varig arbeidsstyrke hever potensielt BNP $Y^n$; det påvirker gap-leddet, ikke etterspørselen direkte.",
    },
    {
      question: "«Strømprisen hopper i dag» og «husholdningene tror prisveksten blir høy neste år» — hvilke størrelser treffer de to nyhetene?",
      options: ["Strømprishoppet er et realisert kostnadssjokk $z^\\pi$; troen på høy prisvekst treffer $\\pi^e$", "Begge er $z^\\pi$-sjokk siden begge gjelder priser", "Begge er $\\pi^e$-sjokk siden begge gjelder framtiden", "Strømprisen treffer $\\pi^e$ mens forventningene treffer $z^\\pi$, og begge går inn i IS-kurven i modellen"],
      explanation: "Faktiske kostnadsøkninger går inn i $z^\\pi$, mens forventet inflasjon går inn i $\\pi^e$. Begge skifter Phillips-kurven (og RR), men de er ulike kanaler og må ikke blandes.",
    },
    {
      question: "En handelskonflikt gir både eksportfall og dyrere import. Hva er riktig?",
      options: ["Det er to sjokk — $\\Delta X<0$ (IS) og $\\Delta z^\\pi>0$ (PK/RR) — analysert hver for seg", "Det er ett rent etterspørselssjokk der både IS-kurven og RR-kurven skifter i samme retning samtidig", "Det er ett rent kostnadssjokk som bare skifter PK og RR", "Ingen kurver skifter, siden de to effektene opphever hverandre"],
      explanation: "Én hendelse kan romme flere sjokk; her ett etterspørselssjokk og ett kostnadssjokk som må skilles.",
    },
    {
      question: "Hvilken huskeregel gjelder for hva et sjokk treffer?",
      options: ["Etterspørselssjokk skifter IS; kostnads-/forventnings-/potensialsjokk skifter PK (og RR)", "Alle sjokk skifter RR, også rene etterspørselssjokk", "Alle sjokk skifter bare IS, fordi RR-kurven per definisjon alltid ligger fast i denne modellen", "Sjokk skifter aldri kurvene, de flytter bare punktet langs dem"],
      explanation: "$z^C, z^I, z^T, G, X$ treffer IS; $z^\\pi, \\pi^e, Y^n$ treffer PK og dermed RR.",
    },
    {
      question: "Hva bør du alltid gjøre FØR du analyserer en aktualitetsoppgave?",
      options: ["Oversette nyhetsbildet til riktig sjokkvariabel og fastslå type", "Skrive konklusjonen først og tilpasse analysen etterpå", "Regne ut multiplikatoren og nettoeffekten på BNP før sjokket er identifisert", "Tegne lønns- og priskurven for langsiktig likevekt"],
      explanation: "Feil oversettelse gir feil analyse uansett hvor god algebraen er; identifiser sjokket og typen først.",
    },
  ],
  'econ1310-7-1': [
    {
      question: "Hvordan verdsettes offentlig, ikke-markedsrettet produksjon (som forsvar og skole) i BNP?",
      options: ["Til faktorinnsatsen, altså kostnadene (i hovedsak lønn)", "Til markedsprisen tjenestene ville hatt om de ble solgt på markedet", "Den holdes helt utenfor BNP, siden tjenestene ikke omsettes i et marked og dermed mangler pris", "Til den prisen brukerne betaler i egenandeler og gebyrer, slik at gratis tjenester teller null"],
      explanation: "Uten markedspris verdsettes offentlig tjenesteproduksjon til faktorinnsatsen (kostnadene). Det er derfor den likevel inngår i BNP.",
    },
    {
      question: "Hva er forskjellen mellom BNP og BNI?",
      options: ["BNP måler produksjon innenlands; BNI legger til netto formuesinntekt og lønn fra utlandet", "BNP legger til netto formuesinntekt fra utlandet; BNI måler bare innenlands produksjon over tid", "BNP er verdiskapingen målt før skatt, mens BNI er den samme verdiskapingen etter at skatten til staten er trukket fra", "BNP gjelder privat sektor, mens BNI også omfatter offentlig sektor"],
      explanation: "BNI = BNP + netto formuesinntekter og lønn fra utlandet, og måler inntekten til landets innbyggere uansett hvor produksjonen skjer.",
    },
    {
      question: "Et meglerhonorar ved salg av en brukt bolig – inngår det i BNP?",
      options: ["Ja, honoraret er en nyprodusert tjeneste, selv om boligen ikke inngår", "Nei, alt ved bruktboligsalg står utenfor BNP", "Ja, både boligverdien og honoraret regnes som ny produksjon i perioden fullt ut", "Nei, bare hvis megleren er offentlig ansatt"],
      explanation: "Selve bruktboligen er ikke ny produksjon, men meglertjenesten produseres i perioden og inngår derfor i BNP.",
    },
    {
      question: "I en lukket økonomi er netto finansinvesteringer for alle sektorer samlet lik:",
      options: ["Null, fordi enhver fordring er en annen sektors gjeld", "Lik samlet realinvestering $I$ i økonomien", "Lik budsjettunderskuddet, siden statens gjeld er den eneste fordringen uten en innenlandsk motpost", "Positiv, siden husholdningene sparer mer enn foretakene investerer"],
      explanation: "Alle fordringer motsvares av gjeld innenlands, så summen er null. Det gir også $S = I$.",
    },
    {
      question: "Hvilket produksjonsnivå betegner potensielt BNP $Y^n$?",
      options: ["Nivået som kan opprettholdes over tid uten press i pris- og lønnsdannelsen", "Toppnivået økonomien når i en sterk høykonjunktur", "Gjennomsnittlig BNP over den siste tiårsperioden", "Nivået der arbeidsledigheten er lik null"],
      explanation: "Potensielt BNP er nivået ved bærekraftig utnyttelse av arbeidskraft og kapital — ikke et maksimum. Det øker f.eks. ved arbeidsinnvandring eller produktivitetsvekst.",
    },
    {
      question: "Hvilke er pengenes tre funksjoner?",
      options: ["Betalingsmiddel, måleenhet/verdimål og verdioppbevaring", "Betalingsmiddel, kredittgiver og skattegrunnlag", "Sparing, investering og konsum", "Verdivekst, verdioppbevaring og forsikring mot framtidig inflasjon"],
      explanation: "Penger fungerer som byttemiddel, felles prisenhet og lager for kjøpekraft over tid.",
    },
    {
      question: "Hva kjennetegner en obligasjon sammenlignet med en aksje for investoren?",
      options: ["Obligasjonseieren er kreditor med avtalt rente og prioritet foran eierne ved konkurs", "Obligasjonseieren er medeier med stemmerett, utbytte og full oppside ved kursvekst i selskapet", "Obligasjonseieren står bakerst i konkurskøen", "Obligasjonen gir eierandel, aksjen gir bare rente"],
      explanation: "En obligasjon er et gjeldsbrev: investoren er kreditor, får rente og dekkes før aksjonærene ved konkurs.",
    },
    {
      question: "Hvorfor har en statsobligasjon typisk lavere rente enn en bedriftsobligasjon?",
      options: ["Staten har høyere kredittverdighet, så risikopremien er lavere", "Staten betaler alltid ut utbytte i tillegg til rente", "Bedrifter er fritatt for å betale risikopremie", "Statsobligasjoner har alltid lengre løpetid og gir derfor automatisk lavere rente"],
      explanation: "Renten inneholder en risikopremie for misligholdsrisiko; statens lave konkursrisiko gir lav premie.",
    },
    {
      question: "Hvilke kriterier må være oppfylt for å regnes som arbeidsledig i AKU?",
      options: ["Uten inntektsgivende arbeid, aktivt søkt siste fire uker, og kan tiltre raskt", "Registrert som arbeidssøker hos NAV og mottar dagpenger hver eneste måned uten avbrudd", "Uten arbeid sammenhengende i minst tolv måneder", "Uten inntektsgivende arbeid og over 25 år gammel"],
      explanation: "AKU krever at man er uten arbeid, har søkt aktivt siste fire uker og kan begynne raskt. «Aktivt søkt» glemmes ofte.",
    },
    {
      question: "Ledighetsraten $u$ beregnes som:",
      options: ["Arbeidsledige delt på arbeidsstyrken", "Arbeidsledige delt på hele befolkningen, medregnet barn og pensjonister", "Arbeidsledige delt på antall sysselsatte", "Sysselsatte over arbeidsstyrken"],
      explanation: "$u = \\frac{\\text{arbeidsledige}}{\\text{arbeidsstyrken}}$, der arbeidsstyrken er sysselsatte pluss ledige – ikke hele befolkningen.",
    },
    {
      question: "Hva kjennetegner konjunkturledighet?",
      options: ["Den skyldes for lav samlet etterspørsel når $Y < Y^n$", "Den skyldes at arbeidssøkerne mangler den kompetansen de ledige stillingene krever", "Den skyldes normal søketid mellom jobber", "Den er den ledigheten økonomien alltid vender tilbake til"],
      explanation: "Konjunkturledighet oppstår ved etterspørselssvikt (produksjon under potensialet) og forsvinner når aktiviteten tar seg opp.",
    },
    {
      question: "Hva fanger realvalutakursen $\\frac{E \\cdot P^*}{P}$ opp, som den nominelle kursen $E$ alene ikke gjør?",
      options: ["Konkurranseevnen — prisforholdet mellom utenlandske og norske varer i felles valuta", "Hvor mange kroner en euro koster på et gitt tidspunkt", "Rentedifferansen mellom Norge og handelspartnerne", "Verdien av landets samlede eksport målt i utenlandsk valuta"],
      explanation: "Ved å kombinere nominell kurs med begge prisnivåene måler realkursen konkurranseevnen — den kan derfor endres selv om $E$ ligger helt fast, når inflasjonen hjemme og ute er ulik.",
    },
    {
      question: "En svakere krone (høyere $E$) gir typisk:",
      options: ["Dyrere import og importert inflasjon, men bedret eksportkonkurranse", "Billigere import og dermed lavere importert inflasjon", "Dyrere eksport, svekket eksportkonkurranse og lavere importert inflasjon", "Ingen virkning på inflasjonen, siden kursen $E$ bare påvirker mengdene og ikke prisene"],
      explanation: "Høyere $E$ hever importprisene (positivt $z^\\pi$) og gjør norsk eksport billigere ute – begge kanaler skal med.",
    },
    {
      question: "Et land ønsker fast valutakurs, fri kapitalflyt og selvstendig rentesetting på én gang. Hva sier trilemmaet?",
      options: ["Umulig — høyst to av de tre målene kan oppnås samtidig", "Fullt mulig så lenge sentralbanken er troverdig nok til å forsvare kursmålet", "Mulig, men bare for små åpne økonomier som Norge, der kapitalstrømmene er lette å styre", "Umulig — et land kan bare velge ett av de tre målene og må gi opp begge de andre"],
      explanation: "Trilemmaet (den umulige treenigheten): fast kurs, fri kapitalbevegelse og selvstendig pengepolitikk kan ikke kombineres — velg to. Norge har valgt fri kapital og selvstendig rente, og dermed flytende kurs.",
    },
    {
      question: "Når er en modell determinert?",
      options: ["Når antall ligninger er lik antall endogene variabler", "Når alle variabler er eksogene og modellen ikke har noen løsning", "Når den er en åpen økonomi", "Når renten er tatt med som endogen"],
      explanation: "Determinerthet krever like mange ligninger som endogene variabler; da har modellen en entydig løsning.",
    },
    {
      question: "Hvilken av disse er en eksogen variabel i Keynes-modellen?",
      options: ["Skiftvariabelen $z^C$", "Samlet produksjon $Y$ i likevekt", "Skatteinngangen $T$, som fastsettes utenfor modellen", "Privat konsum $C$, som er gitt utenfor modellen"],
      explanation: "$z$-leddene er eksogene skiftvariabler, mens $Y$, $C$ og $T$ bestemmes inne i modellen (endogene).",
    },
    {
      question: "Hvorfor antar vi $0 < c_1 < 1$ for den marginale konsumtilbøyeligheten?",
      options: ["Konsum øker med inntekt, men husholdningene sparer en del av hver ekstra krone", "Konsum faller alltid når inntekten øker, så $c_1 < 0$", "Fordi renten alltid er positiv, og en positiv rente tvinger $c_1$ til å ligge mellom null og én", "Fordi skatten alltid er mindre enn inntekten og konsumet dermed stiger krone for krone"],
      explanation: "$c_1$ er konsumøkningen per krone ekstra inntekt: positiv fordi konsum stiger, under 1 fordi noe spares.",
    },
    {
      question: "Hva er den viktigste automatiske stabilisatoren i modellen?",
      options: ["Den endogene skatten $tY$, som demper svingninger uten vedtak", "Diskresjonære krisepakker som Stortinget vedtar og setter i verk uten tidsforsinkelse", "Sentralbankens rentekutt i nedgangstider", "Handlingsregelens 3-prosentbane"],
      explanation: "Endogen skatt tapper mer i oppgang og mindre i nedgang, og demper konjunktursvingninger uten politiske vedtak.",
    },
    {
      question: "Hvorfor løfter én krone i økte offentlige kjøp BNP mer enn én krone i skattelette?",
      options: ["G virker direkte krone for krone; skattelette virker bare via konsumet med faktor $c_1 < 1$", "Skattelette virker direkte krone for krone, mens G bare virker indirekte via konsumet med lekkasje", "De gir nøyaktig samme virkning på BNP, siden begge er én krone", "Skattelette lekker aldri til sparing, hele kuttet blir konsum"],
      explanation: "Offentlige kjøp treffer etterspørselen fullt ut første runde; en skattelette spares delvis ($1-c_1$), så G-multiplikatoren er størst.",
    },
    {
      question: "Hva er skattelekkasjen i multiplikatorprosessen?",
      options: ["Andelen av inntektsøkningen som tappes til skatt ($t$) i hver runde", "At staten låner for å finansiere skattekutt", "At skatteinntektene forsvinner ut av landet og aldri kommer tilbake i kretsløpet", "At sparingen øker mer enn skatten"],
      explanation: "I hver multiplikatorrunde trekkes $tY$ ut som skatt, slik at mindre driver videre konsum – det gjør multiplikatoren mindre.",
    },
    {
      question: "Hva sier handlingsregelen for bruk av oljeinntekter?",
      options: ["Over tid skal om lag forventet realavkastning (3 %) av SPU brukes, målt ved strukturelt underskudd", "Nøyaktig 3 % av fondsverdien skal brukes hvert år, uavhengig av konjunkturene", "Alle løpende oljeinntekter skal brukes fortløpende", "Fondet skal aldri tæres på i nedgangstider"],
      explanation: "Regelen gjelder over tid, styres etter det strukturelle (konjunkturrensede) underskuddet og åpner for mer bruk i nedgang.",
    },
    {
      question: "Forskjellen på oljekorrigert og strukturelt oljekorrigert underskudd er at det strukturelle er:",
      options: ["Konjunkturrenset – justert for hvor økonomien er i syklusen", "Det faktiske underskuddet uten justering", "Inkludert oljeinntektene, altså statens netto kontantstrøm fra petroleumsvirksomheten", "Alltid større enn det oljekorrigerte underskuddet uansett konjunktursituasjon"],
      explanation: "Det oljekorrigerte er faktisk underskudd uten olje; det strukturelle er konjunkturrenset og er størrelsen handlingsregelen styrer etter.",
    },
    {
      question: "Hva er riktig rekkefølge i Phillips-kurvens kausalkjede bak $\\beta$?",
      options: ["Høyere gap → lavere ledighet → sterkere forhandlingsmakt → høyere lønn → høyere marginalkostnad → påslag → høyere inflasjon", "Høyere gap → høyere rente → lavere lønn → lavere inflasjon", "Lavere gap → lavere ledighet → høyere lønn → høyere inflasjon", "Høyere gap → lavere marginalkostnad → lavere lønnspress → lavere pris → lavere prispåslag → lavere inflasjon"],
      explanation: "Kjeden går fra aktivitet via arbeidsmarked og lønn til marginalkostnad og prispåslag – marginalkostnad → påslag glemmes ofte.",
    },
    {
      question: "Hva skiller fleksibel inflasjonsstyring fra en streng variant som bare ser på inflasjonen?",
      options: ["Den fleksible vekter også realøkonomien ($d_2 > 0$), ikke bare inflasjonsavviket", "Den fleksible lar inflasjonsmålet variere fritt fra år til år", "Den fleksible bruker valutakursen som operativt nominelt anker i stedet for styringsrenten", "Den fleksible holder renten fast og styrer bare med kommunikasjon"],
      explanation: "Fleksibel inflasjonsstyring legger vekt på både inflasjonsavvik ($d_1$) og produksjonsgap ($d_2$), og bringer inflasjonen til målet over tid i stedet for umiddelbart.",
    },
    {
      question: "Hvorfor virker finanspolitikk sterkere i en likviditetsfelle?",
      options: ["Renten er ved nedre grense, så den vanlige rentedempingen uteblir", "Fordi skattene automatisk faller til null", "Fordi sentralbanken hever renten kraftig og forsterker finanspolitikkens virkning", "Fordi husholdningene slutter å spare"],
      explanation: "Ved nullgrensen kan ikke renten kuttes videre for å motvirke stimulansen, så finanspolitikkens fulle virkning slår gjennom.",
    },
  ],
  'econ1310-7-2': [
    {
      question: "Hvordan er øvingseksamen 1 vektet mellom de tre oppgavene?",
      options: ["Kortsvar 20 %, modelloppgave 60 %, teoridrøfting 20 %", "Kortsvar 40 %, modelloppgave 40 %, teoridrøfting 20 % av settet", "Kortsvar 25 %, modelloppgave 50 %, teoridrøfting 25 % av settet", "20 % kortsvar, 40 % modelloppgave, 40 % drøfting"],
      explanation: "Post-2023-malen gir modelloppgaven 60 % og de to andre 20 % hver — derfor skal oppgave 2 ha klart mest tid (144 min).",
    },
    {
      question: "Hva er riktig lengde på et kortsvar i oppgave 1?",
      options: ["1–3 setninger — lengre svar gir ikke mer uttelling", "Minst en halv side med utfyllende eksempler og en figur", "Ett ord eller én formel er tilstrekkelig", "5–10 setninger per delspørsmål, pluss en illustrerende figur i margen som viser sammenhengen"],
      explanation: "Kortsvarene skal ha definisjon pluss begrunnelse på 1–3 setninger; overflødig tekst gir ikke trekk, men koster tid.",
    },
    {
      question: "Hva kreves for full uttelling per kortsvar-delspørsmål?",
      options: ["Definisjon pluss den etterspurte begrunnelsen eller kontrasten", "En presis definisjon av begrepet, uten noe mer", "En figur som illustrerer begrepet grafisk", "En matematisk utledning som viser begrepet formelt"],
      explanation: "Ren definisjon uten begrunnelse gir omtrent halv skår ifølge delpoeng-notatet for oppgave 1.",
    },
    {
      question: "I modelloppgaven for Nordvik: hvilke fire variabler er endogene?",
      options: ["$Y$, $C$, $I$ og $T$", "$Y$, $G$, $i$ og $\\pi^e$", "$z^C$, $z^I$, $z^T$ og $G$", "$C$, $I$, $G$ og $i$"],
      explanation: "Modellen har fire ligninger og fire endogene ($Y, C, I, T$); $G$, $i$, $\\pi^e$ og $z$-leddene er eksogene — modellen er determinert.",
    },
    {
      question: "Med $c_1 = 0{,}8$, $t = 0{,}25$ og $b_1 = 0{,}1$: hva blir multiplikatoren $m$?",
      options: ["$m = 1/0{,}3 \\approx 3{,}33$", "$m = 1/0{,}45 \\approx 2{,}22$", "$m = 1/0{,}7 \\approx 1{,}43$", "$m = 1/0{,}25 = 4{,}00$"],
      explanation: "Nevneren er $1 - 0{,}8(1-0{,}25) - 0{,}1 = 1 - 0{,}6 - 0{,}1 = 0{,}3$, så $m \\approx 3{,}33$.",
    },
    {
      question: "Investeringsviljen i Nordvik faller med 30 mrd. ($\\Delta z^I = -30$). Hva blir $\\Delta Y$ med fast rente?",
      options: ["Om lag $-100$ mrd.", "Nøyaktig $-30$ mrd.", "Om lag $-67$ mrd.", "Om lag $-150$ mrd."],
      explanation: "$\\Delta Y = m\\,\\Delta z^I = 3{,}33 \\cdot (-30) \\approx -100$ mrd. — sjokket forsterkes gjennom multiplikatorrundene.",
    },
    {
      question: "Hva demper multiplikatorrundene etter det negative investeringssjokket i Nordvik?",
      options: ["Skattelekkasjen: en del ($t=0{,}25$) av hvert inntektsfall motsvares av lavere skatt", "Investeringsakseleratoren $b_1$, som gjør at investeringene følger aktiviteten i hver runde", "At offentlige kjøp $G$ øker automatisk når produksjonen faller, slik at utgiftsveksten motvirker fallet i hver runde", "At sentralbanken kutter renten i hver multiplikatorrunde"],
      explanation: "Endogen skatt gjør at disponibel inntekt faller mindre enn BNP i hver runde — den automatiske stabilisatoren i arbeid. ($b_1$ forsterker; renten er fast i deloppgaven.)",
    },
    {
      question: "Hvordan endres skatteinngangen og budsjettbalansen av sjokket ($\\Delta Y = -100$, $\\Delta G = 0$)?",
      options: ["$\\Delta T = -25$ og $\\Delta B = -25$ — budsjettet forverres", "$\\Delta T = -25$ og $\\Delta B = +25$ — budsjettet bedres, siden lavere skatteinngang teller som en innsparing", "$\\Delta T = -100$ og $\\Delta B = -100$ — skatten følger BNP krone for krone", "$\\Delta T = 0$ og $\\Delta B = 0$, siden $G$ er uendret og skatteinngangen ikke avhenger av BNP-nivået"],
      explanation: "$\\Delta T = t\\,\\Delta Y = 0{,}25 \\cdot (-100) = -25$ og $\\Delta B = \\Delta T - \\Delta G = -25$: nedgangen tapper skatteinntektene mens utgiftene ligger fast.",
    },
    {
      question: "Hvorfor er fortegnet på $\\Delta B$ entydig i denne oppgaven?",
      options: ["Bare skatteinngangen endres ($\\Delta G = 0$), så balansen følger $\\Delta T$ alene", "Fordi budsjettbalansen alltid forverres like mye som BNP faller ved negative sjokk, uavhengig av skattesatsen $t$", "Fordi skattesatsen $t$ er større enn den marginale konsumtilbøyeligheten $c_1$, slik at skatteleddet dominerer balansen", "Fordi multiplikatoren $m$ blir negativ når sjokket er negativt, og et entydig fortegn på $\\Delta B$ følger av det"],
      explanation: "Ved en $G$-endring trekker to krefter hver sin vei, men her er $\\Delta G = 0$: $\\Delta B = \\Delta T < 0$ uten motpost — et motsyklisk underskudd.",
    },
    {
      question: "Hvilken kurve skifter i IS-RR-PK-diagrammet når investeringsviljen faller eksogent?",
      options: ["IS skifter mot venstre; RR og PK ligger fast", "RR og PK skifter begge opp, mens IS-kurven ligger fast", "Både IS-kurven og RR-kurven skifter mot venstre, siden svakere investeringsvilje også senker $Y^n$", "PK skifter opp, mens IS-kurven og RR-kurven ligger fast"],
      explanation: "Et rent etterspørselssjokk endrer verken $z^\\pi$, $\\pi^e$ eller $Y^n$ — derfor ligger RR (med PK bakt inn) fast.",
    },
    {
      question: "Hva blir resultatet for $Y$, $i$ og $\\pi$ etter det negative investeringssjokket under renteregelen?",
      options: ["$Y\\downarrow$, $i\\downarrow$, $\\pi\\downarrow$", "$Y\\downarrow$, $i\\uparrow$, $\\pi\\uparrow$ — som ved et kostnadssjokk", "$Y\\downarrow$, $i\\downarrow$, $\\pi\\uparrow$", "$Y\\uparrow$, $i\\downarrow$, $\\pi\\downarrow$"],
      explanation: "IS skifter venstre: langs RR kutter sentralbanken renten, og lavere $Y$ gir en bevegelse langs PK ned til lavere inflasjon.",
    },
    {
      question: "Hvorfor demper — men opphever ikke — sentralbankens rentekutt nedgangen?",
      options: ["Den reagerer bare gradvis langs RR og veier også inflasjonshensynet", "Rentekuttet virker ikke på konsumet eller investeringene i det hele tatt", "Renten er ved nullgrensen og kan ikke kuttes mer", "RR-kurven skifter nøyaktig like mye som IS-kurven, så effekten nulles ut"],
      explanation: "Lavere realrente stimulerer konsum ($c_2$) og investering ($b_2$), men ny likevekt B har fortsatt lavere BNP enn utgangspunktet A.",
    },
    {
      question: "Hva ville skjedd med BNP-fallet dersom renten var holdt fast i stedet for å følge renteregelen?",
      options: ["Det ville blitt større, fordi rentedempingen uteblir", "Det ville blitt mindre, fordi en fast rente i seg selv stabiliserer", "Det ville blitt nøyaktig likt — renten påvirker ikke BNP i modellen", "BNP ville steget i stedet for å falle, siden renten ligger fast"],
      explanation: "Med fast rente uteblir stimulansen fra rentekuttet via $c_2$ og $b_2$, og hele multiplikatorvirkningen av sjokket slår gjennom.",
    },
    {
      question: "Hva kreves for full skår på den tunge regnedeloppgaven (c) i modelloppgaven?",
      options: ["Korrekt algebra, eksplisitt fortegn og mekanismeforklaring i to lag", "Korrekt tallsvar med tydelig oppstilling og riktig benevning alene, uten noen forklaring av mekanismene", "En figur som viser skiftet i begge paneler med likevektene A og B markert, i stedet for utregningen", "Kontrollregning av svaret med to uavhengige metoder som gir samme tallverdi for $\\Delta Y$"],
      explanation: "Ren utregning uten ord gir ikke full uttelling — både førsterundeeffekten og multiplikatorrundene må forklares.",
    },
    {
      question: "Hvilken rolle spiller en figur i teoridrøftingen (oppgave 3)?",
      options: ["Den er tillatt (fast fra 2021), men gir ingen uttelling alene", "Den er obligatorisk for full skår på drøftingen", "Den er forbudt i drøftinger og gir trekk hvis den tas med", "Den erstatter kravet om korrekte fagbegreper i drøftingen"],
      explanation: "Sensor honorerer struktur, fagbegreper og avveining; matematiske modeller gir ikke uttelling i drøftingen og stjeler bare tid.",
    },
    {
      question: "Hva er den økonomiske begrunnelsen for antakelsen $b_1 > 0$ i investeringsfunksjonen?",
      options: ["Høyere aktivitet gir større kapasitetsbehov og lettere finansiering (akseleratoren)", "Høyere rente gir alltid høyere investeringer fordi bankene tjener mer", "Investeringene er upåvirket av konjunkturene og bestemmes bare av renten", "Bedriftene investerer mer når skatteinngangen til staten øker"],
      explanation: "Dette er investeringsakseleratoren: $b_1$ fanger at investeringene stiger med aktivitetsnivået $Y$.",
    },
    {
      question: "Hva sier stabilitetsvilkåret i multiplikatoranalysen?",
      options: ["Nevneren $1 - c_1(1-t) - b_1$ må være positiv, slik at $m > 0$", "Multiplikatoren $m$ må være mindre enn 1 for at prosessen skal konvergere", "Skattesatsen $t$ må være lik null for at modellen skal ha en løsning", "Konsumtilbøyeligheten $c_1$ må være større enn 1"],
      explanation: "Med parameterverdiene er nevneren $0{,}3 > 0$, så prosessen konvergerer og $m = 1/0{,}3 \\approx 3{,}33$.",
    },
  ],
  'econ1310-7-3': [
    {
      question: "Hva fremhever sensor oftest som karakterskille i dette settet (jf. oppgave 4)?",
      options: ["Skillet mellom etterspørsels- og kostnadssjokk", "Evnen til å huske handlingsregelens prosentsats presist", "Antall figurer og diagrammer i besvarelsen totalt sett", "Hvor raskt kortsvarsoppgaven i starten besvares, altså tempoet gjennom settets innledende punkter"],
      explanation: "Kostnadssjokket i oppgave 4 er kjernen i settet; å skille sjokktypene riktig er det sensor oftest trekker frem som karakterskille.",
    },
    {
      question: "Hva må hvert svar i BNP-klassifiseringsoppgaven (sjanger B) inneholde?",
      options: ["Kategori, beløp og en kort begrunnelse", "Kun et tydelig ja eller nei per transaksjon", "Kategori og en lengre teoretisk utledning av nasjonalregnskapets definisjoner, men uten beløp", "Beløp og en figur over strømmene"],
      explanation: "Ja/nei uten beløp gir ikke full skår — beløpet er eksplisitt etterspurt (2 % per transaksjon).",
    },
    {
      question: "En familie kjøper en nybygd enebolig for 6 mill. kr. Hvordan klassifiseres dette?",
      options: ["Realinvestering på 6 mill. kr — nyprodusert realkapital inngår i BNP", "Privat konsum på 6 mill. kr, siden familien selv skal bo i boligen og kjøpet dermed dekker et forbruksbehov", "Utenfor BNP — boligkjøp er en ren formuesomplassering mellom sektorer, uten nyprodusert verdi i regnskapet", "Import på 6 mill. kr, siden byggevarene som regel er utenlandske og hele kjøpesummen dermed føres som import"],
      explanation: "En nybygd bolig er boliginvestering i nasjonalregnskapet, ikke konsum — det er nyprodusert realkapital.",
    },
    {
      question: "Aksjekjøp for 50 000 kr med 300 kr i kurtasje — hva inngår i BNP?",
      options: ["Bare kurtasjen på 300 kr, som betaler for en produsert meglertjeneste", "Hele beløpet på 50 300 kr — både aksjene og tjenesten", "Ingenting — begge delene er finansielle transaksjoner utenfor BNP", "Bare aksjekjøpet på 50 000 kr, ført som konsum av verdipapirer"],
      explanation: "Aksjekjøpet er en formuesomplassering utenfor BNP, men meglertjenesten produseres i perioden og inngår.",
    },
    {
      question: "En turist fra Sørvik kjøper klær for 8 000 kr i utlandet. Hva er nettobidraget til Sørviks BNP?",
      options: ["Null — konsumet ($+8\\,000$) motsvares av import ($-8\\,000$)", "$+8\\,000$ kr, ført som privat konsum i nasjonalregnskapet uten noen motpost på importsiden", "$-8\\,000$ kr, siden pengene forlater landet for godt og føres som negativt konsum i regnskapet", "$+8\\,000$ kr, ført som eksport av reisetjenester til utlandet og dermed et positivt bidrag"],
      explanation: "Klærne er produsert i utlandet; import føres som egen fradragspost, ikke som «negativt konsum».",
    },
    {
      question: "En huseier maler sitt eget hus; malingen kostet 5 000 kr i butikken. Hva gjelder for BNP?",
      options: ["Arbeidet er utenfor BNP; malingen ble talt da den ble produsert og solgt", "Både arbeidet og malingen gir nye bidrag til BNP i inneværende år", "Arbeidet verdsettes til markedspris for tilsvarende malertjenester og inngår", "Malingen trekkes fra BNP som et mellomprodukt i husholdningens produksjon, slik at nettobidraget blir negativt"],
      explanation: "Eget, ubetalt arbeid omsettes ikke i et marked og inngår ikke i BNP; malingen gir ikke noe nytt bidrag her.",
    },
    {
      question: "Hvordan ser priskurven og lønnskurven ut i $(u, W/P)$-diagrammet?",
      options: ["Priskurven er flat (uavhengig av $u$); lønnskurven faller i $u$", "Begge kurvene stiger med økende ledighet $u$, slik at både framforhandlet og betalt reallønn øker", "Priskurven faller i $u$, mens lønnskurven er flat og uavhengig av ledigheten", "Begge kurvene er flate og uavhengige av $u$, men de ligger på ulike reallønnsnivåer i diagrammet"],
      explanation: "Priskurven $\\frac{A}{1+\\mu}$ fastsetter reallønnen bedriftene betaler; høyere ledighet disiplinerer lønnskravene langs lønnskurven.",
    },
    {
      question: "Hva bestemmer likevektsledigheten $u^n$ i lønns- og priskurvemodellen?",
      options: ["Skjæringspunktet mellom lønnskurven og priskurven", "Skjæringspunktet mellom IS-kurven og RR-kurven, altså der renten og BNP bestemmes samtidig", "Det ledighetsnivået der inflasjonen er lik null, altså der prisene i økonomien står helt stille", "Sentralbankens vekter $d_1$ og $d_2$ i renteregelen, som fastsetter ledigheten på lang sikt"],
      explanation: "$u^n$ er den eneste ledigheten der framforhandlet reallønn er lik den reallønnen bedriftene faktisk betaler.",
    },
    {
      question: "Hvilken kurve skifter når arbeidstakersidens forhandlingsposisjon styrkes varig ($z^W$ opp)?",
      options: ["Lønnskurven skifter opp; priskurven ligger fast", "Priskurven skifter opp, mens lønnskurven ligger fast i diagrammet", "Begge kurvene skifter opp like mye", "Ingen av kurvene — bare ledigheten $u$ endres langs kurvene"],
      explanation: "Verken $\\mu$ eller $A$ endres, så priskurven ligger fast; det nye skjæringspunktet gir høyere likevektsledighet $u^n$.",
    },
    {
      question: "Hvorfor kan ikke arbeidstakerne varig presse reallønnen over $\\frac{A}{1+\\mu}$?",
      options: ["Bedriftene hever prisene når lønningene stiger, så reallønnen faller tilbake", "Lovverket setter et tak på hvor høy reallønnen i økonomien kan bli", "Sentralbanken fastsetter reallønnen direkte via renteregelen", "Produktiviteten $A$ faller automatisk like mye som lønningene stiger"],
      explanation: "Med gitt påslag veltes lønnsøkninger over i prisene; det eneste som «gir etter», er ledigheten, som stiger til den på nytt disiplinerer kravene.",
    },
    {
      question: "Hva er det klassiske feilgrepet i deloppgaven om varig sterkere forhandlingsmakt?",
      options: ["Å konkludere med varig høyere reallønn", "Å la priskurven ligge fast i diagrammet når forhandlingsmakten øker varig", "Å konkludere med at likevektsledigheten stiger", "Å tegne lønnskurven fallende i ledigheten i stedet for å skifte den utover"],
      explanation: "Reallønnen er låst av priskurven på lang sikt; det er likevektsledigheten $u^n$ som øker, ikke reallønnen.",
    },
    {
      question: "Hva betyr høyere $u^n$ for potensielt BNP og Phillips-kurven?",
      options: ["$Y^n$ faller, og økonomien tåler mindre aktivitet før inflasjonspress oppstår", "$Y^n$ stiger, og inflasjonspresset dempes fordi flere går ledige og lønnskravene faller", "$Y^n$ er upåvirket — arbeidsmarkedet inngår ikke i potensielt BNP", "Phillips-kurven blir flatere fordi helningen $\\beta$ faller"],
      explanation: "Flere står varig utenfor produksjon; lavere $Y^n$ gjør produksjonsgapet mindre negativt (eller mer positivt) for et gitt faktisk $Y$.",
    },
    {
      question: "Hva blir den åpne multiplikatoren med $c_1=0{,}8$, $t=0{,}25$, $b_1=0{,}1$ og $a=0{,}15$?",
      options: ["$1/0{,}45 \\approx 2{,}22$", "$1/0{,}30 \\approx 3{,}33$", "$1/0{,}60 \\approx 1{,}67$", "$1/0{,}15 \\approx 6{,}67$"],
      explanation: "Nevneren er $1 - c_1(1-t) - b_1 + a = 0{,}45$; importleddet $+a$ gjør den større enn i den lukkede modellen (0,30).",
    },
    {
      question: "Hvorfor er multiplikatoren mindre i en åpen økonomi enn i en lukket?",
      options: ["En del av hver inntektsøkning lekker ut til import i stedet for innenlandsk etterspørsel", "Eksporten faller automatisk når BNP stiger", "Skattesatsen er systematisk høyere i åpne økonomier enn i lukkede", "Valutakursen nøytraliserer alle etterspørselssjokk i en åpen økonomi"],
      explanation: "Importlekkasjen $a$ demper multiplikatorprosessen på samme måte som skattelekkasjen $t$ — bare gjennom utenrikshandelen.",
    },
    {
      question: "Hvilke kurver skifter ved et kostnadssjokk ($\\Delta z^\\pi > 0$) i IS-RR-PK?",
      options: ["PK skifter opp med $\\Delta z^\\pi$ og RR opp med $d_1\\Delta z^\\pi$; IS ligger fast", "Bare IS skifter — mot venstre, fordi dyrere import svekker etterspørselen", "Bare PK skifter opp; RR og IS ligger fast", "Alle tre kurvene skifter opp med nøyaktig samme beløp"],
      explanation: "Sjokket virker via prissettingen (tilbudssiden); siden PK er bakt inn i renteregelen, hever sentralbanken renten for enhver $Y$.",
    },
    {
      question: "Hva blir utfallet av kostnadssjokket for $Y$, $i$ og $\\pi$?",
      options: ["$i\\uparrow$, $Y\\downarrow$, $\\pi\\uparrow$ — stagflasjon", "$i\\downarrow$, $Y\\uparrow$, $\\pi\\downarrow$ — oppgang", "$i\\uparrow$, $Y\\uparrow$, $\\pi\\uparrow$ — overoppheting", "$i\\downarrow$, $Y\\downarrow$, $\\pi\\downarrow$ — nedkjøling"],
      explanation: "Fallende produksjon og stigende inflasjon samtidig; inflasjonen stiger likevel mindre enn selve sjokket fordi renteøkningen demper prispresset.",
    },
    {
      question: "Hva skjer om sentralbanken i stedet holder renten fast under kostnadssjokket?",
      options: ["BNP faller mindre, men inflasjonen stiger mer", "BNP faller mer, og inflasjonen stiger også mer, siden fast rente forsterker sjokket på begge fronter", "Både BNP og inflasjonen blir uendret", "BNP faller mindre, og inflasjonen stiger mindre fordi fast rente demper begge virkningene"],
      explanation: "Uten innstramming uteblir rentedempingen av etterspørselen — renteøkningen langs RR er det som «kjøper» lavere inflasjon mot lavere produksjon.",
    },
    {
      question: "Hvilke forutsetninger må holde for at frontfagsmodellen skal gi varig lavere ledighet?",
      options: ["Etterlevelse av rammen, et representativt frontfag og et felles troverdig tallgrunnlag", "At reallønnen stiger varig i alle sektorer samtidig, slik at ingen taper på rammen", "At sentralbanken fastsetter lønnsrammen for partene i hvert eneste oppgjør", "At frontfaget hentes fra en skjermet sektor"],
      explanation: "Uten lojalitet forsvinner koordineringsgevinsten, rammen må passe sektorer med andre forhold, og et TBU-aktig tallgrunnlag forankrer forventningene.",
    },
  ],
  'econ1310-7-4': [
    {
      question: "Hva kjennetegner vektingen i post-2024-malen (øvingseksamen 3)?",
      options: ["Differensiert deloppgavevekting — (b), (c) og (e) i modelloppgaven teller særlig mye", "Alle deloppgavene teller nøyaktig like mye, så tiden skal fordeles jevnt fra (a) til (e) i alle oppgavene", "Kortsvarsoppgaven teller 50 % alene og skal ha mest tid, mens modelloppgaven og rollecaset deler resten", "Rollecaset teller 60 % og modelloppgaven 20 %, så caset skal prioriteres foran regne- og diagramarbeidet"],
      explanation: "Vektingen er 25/50/25, og sensor har markert at regne- og diagramdeloppgavene (b, c, e) veier tyngst — prioriter tiden deretter.",
    },
    {
      question: "Hva krever sensor av rollecase-notatet i oppgave 3?",
      options: ["Alle relevante hensyn for og imot — men uttrykkelig ingen konkret anbefaling", "En tydelig anbefaling av ett virkemiddel, med begrunnelse", "En matematisk modellering av situasjonen i caset med utledninger", "Et fullstendig IS-RR-PK-diagram med begge paneler, alle skift markert og ny likevekt avlest, som hoveddelen av notatet"],
      explanation: "Gir du en anbefaling, trekkes det; åpenbart gale politikkvalg regnes likevel som feil.",
    },
    {
      question: "Hva uttrykker generalbudsjettligningen $Y = C + I + G$?",
      options: ["Alt som produseres, blir konsumert, investert eller kjøpt av det offentlige", "At statsbudsjettets balanse alltid er lik null i en lukket økonomi", "At BNP er alle inntekter fratrukket skatter og overføringer", "At produksjonen bestemmes av tilbudssiden alene på lang sikt"],
      explanation: "Samlet produksjon (BNP) i en lukket økonomi er lik samlet anvendelse: privat konsum, private realinvesteringer og offentlige kjøp.",
    },
    {
      question: "Hva skiller realinvestering fra finansinvestering med hensyn til BNP?",
      options: ["Realinvestering (nyprodusert realkapital) inngår; finansinvestering (formuesomplassering) står utenfor", "Begge typer inngår i BNP med sitt fulle beløp, siden begge er investeringer", "Finansinvestering inngår i BNP fordi den gir avkastning, mens realinvestering står utenfor", "Ingen av dem inngår i BNP — investeringer regnes ikke som produksjon"],
      explanation: "Maskiner, bygg og boliger er produksjon; aksjer, obligasjoner og innskudd er kjøp av fordringer og ikke produksjon.",
    },
    {
      question: "Hva betyr kalibreringen $c_2 + b_2 = 15$ i modelloppgaven for Østmark?",
      options: ["Ett prosentpoeng høyere rente demper samlet etterspørsel med 15 mrd. kr", "Renten kan maksimalt heves med 15 prosentpoeng i løpet av modellperioden før modellen bryter sammen", "Multiplikatoren i modellen er lik 15 når renten holdes fast", "Konsumet og investeringene utgjør til sammen 15 % av BNP i utgangspunktet, slik at $c_2+b_2$ er en andelsstørrelse"],
      explanation: "Renteendringer måles i prosentpoeng og svarene kommer i milliarder kroner — en annen kalibrering enn i prøve 5.D, der tallene blir store.",
    },
    {
      question: "Østmark øker offentlige kjøp varig med 45 mrd. Hva blir $\\Delta Y$ med fast rente?",
      options: ["$3{,}33 \\cdot 45 = 150$ mrd.", "$45$ mrd. krone for krone", "$0{,}3 \\cdot 45 = 13{,}5$ mrd.", "$2{,}22 \\cdot 45 \\approx 100$ mrd."],
      explanation: "Nevneren er $1 - 0{,}8(1-0{,}25) - 0{,}1 = 0{,}30$, så $m \\approx 3{,}33$ og $\\Delta Y = 150$ mrd.",
    },
    {
      question: "Hva blir $\\Delta T$ og $\\Delta C$ når $\\Delta Y = 150$ mrd.?",
      options: ["$\\Delta T = 37{,}5$ mrd. og $\\Delta C = 90$ mrd.", "$\\Delta T = 45$ mrd. og $\\Delta C = 150$ mrd.", "$\\Delta T = 37{,}5$ mrd. og $\\Delta C = 120$ mrd.", "$\\Delta T = 25$ mrd. og $\\Delta C = 90$ mrd."],
      explanation: "$\\Delta T = t\\,\\Delta Y = 0{,}25\\cdot 150 = 37{,}5$ og $\\Delta C = c_1(1-t)\\Delta Y = 0{,}8\\cdot 0{,}75\\cdot 150 = 90$.",
    },
    {
      question: "Hvorfor kan ikke fortegnet på $\\Delta B$ ved en G-økning avgjøres uten tallverdier generelt?",
      options: ["Økt skatteinngang trekker balansen opp, utgiftsøkningen trekker den ned — utfallet avhenger av parameterne", "Budsjettbalansen $B$ inngår ikke i modellen og kan derfor ikke beregnes", "Skatten er eksogen i modellen og påvirkes derfor ikke av at BNP endres gjennom multiplikatorrundene", "Multiplikatoren kan være både positiv og negativ ved en økning i offentlige kjøp"],
      explanation: "Her finansierer skatteinngangen bare 37,5 av de 45 mrd., så $\\Delta B = 37{,}5 - 45 = -7{,}5$ mrd. — budsjettet svekkes, men mindre enn utgiftsøkningen.",
    },
    {
      question: "Hva gjør forsvarssatsingen med IS-RR-PK-diagrammet?",
      options: ["IS skifter mot høyre; RR og PK ligger fast — $Y\\uparrow$, $i\\uparrow$, $\\pi\\uparrow$", "RR skifter opp; IS fast — $Y\\downarrow$, $i\\uparrow$", "PK skifter opp; IS og RR ligger begge fast — bare $\\pi$ endres", "IS skifter mot venstre — $Y\\downarrow$, $i\\downarrow$ og $\\pi\\downarrow$"],
      explanation: "Et positivt etterspørselssjokk skifter bare IS; sentralbanken hever renten langs RR, og høyere $Y$ gir bevegelse langs PK opp til høyere inflasjon.",
    },
    {
      question: "Forsvarssatsing og kostnadssjokk treffer samtidig. På hvilken størrelse trekker de motsatt vei?",
      options: ["BNP — etterspørselssjokket løfter $Y$, kostnadssjokket demper $Y$", "Inflasjonen — etterspørselssjokket trekker $\\pi$ opp, kostnadssjokket ned", "Renten — etterspørselssjokket trekker $i$ opp, mens kostnadssjokket trekker den ned", "Ingen — begge sjokkene trekker alle størrelsene samme vei"],
      explanation: "På inflasjonen og renten trekker begge sjokkene opp; nettovirkningen på BNP er ubestemt og avhenger av sjokkenes relative størrelse.",
    },
    {
      question: "Hvordan skal kombinasjonssjokket i deloppgave (e) analyseres for full skår?",
      options: ["Som to sjokk — hver for seg først, deretter lagt sammen", "Som ett samlet nettosjokk helt fra begynnelsen av analysen, der de to sjokkene summeres før diagrammet tegnes", "Bare det største av de to sjokkene skal analyseres i diagrammet", "Ved å regne multiplikatoren på nytt for hvert sjokk"],
      explanation: "Delpoeng-notatet presiserer at kombinasjonssjokket må analyseres som to sjokk, ikke ett.",
    },
    {
      question: "Hvilken renteøkning nøytraliserer BNP-virkningen av $\\Delta G = 45$ når $c_2+b_2 = 15$?",
      options: ["$\\Delta i = 45/15 = 3$ prosentpoeng", "$\\Delta i = 15/45 \\approx 0{,}33$ prosentpoeng", "$\\Delta i = 3{,}33 \\cdot 3 = 10$ prosentpoeng", "$\\Delta i = 150/15 = 10$ prosentpoeng, altså $m\\Delta G$ delt på $c_2+b_2$"],
      explanation: "$\\Delta Y = m[\\Delta G - (c_2+b_2)\\Delta i] = 0$ gir $\\Delta i = \\frac{\\Delta G}{c_2+b_2} = 3$ prosentpoeng — multiplikatoren kanselleres og inngår ikke.",
    },
    {
      question: "Hvorfor er full rentenøytralisering mulig for et etterspørselssjokk, men ikke for et kostnadssjokk?",
      options: ["Ved etterspørselssjokk trekker begge gap samme vei; ved kostnadssjokk krever $Y$ og $\\pi$ motsatte renteresponser", "Kostnadssjokk påvirker ikke inflasjonen, bare produksjonen og sysselsettingen, så det finnes ikke noe inflasjonsavvik å nøytralisere", "Renten virker ikke på samlet etterspørsel når sjokket kommer fra kostnadssiden av økonomien", "Multiplikatoren er lik null når økonomien rammes av et kostnadssjokk"],
      explanation: "Ett virkemiddel kan ikke treffe to mål som drar hver sin vei: å gjenopprette $Y$ krever rentekutt, å dempe $\\pi$ krever renteøkning.",
    },
    {
      question: "Hvordan diagnostiseres situasjonen i Vestmark med modellens begreper?",
      options: ["Et negativt etterspørselssjokk (bolig/gjeld) kombinert med et kostnadssjokk (svak valuta)", "Et rent positivt etterspørselssjokk fra boligmarkedet", "Et rent kostnadssjokk uten noen etterspørselskomponent i det hele tatt", "Et positivt potensialsjokk som løfter $Y^n$ varig gjennom økt arbeidsstyrke"],
      explanation: "Fallende boligpriser og bremsende boliginvesteringer gir $\\Delta z^I<0$, mens den svake valutaen holder importprisene oppe ($\\Delta z^\\pi>0$) — motstridende signaler.",
    },
    {
      question: "Hvorfor kompliserer den høye husholdningsgjelden i Vestmark sentralbankens rentevalg?",
      options: ["Både renteøkning (gjeldsbyrde, boligprisfall) og for lav rente (ny gjeldsoppbygging) er risikable", "Gjelden gjør at renteendringer ikke lenger virker på husholdningenes etterspørsel", "Høy gjeld innebærer at renten må settes til null umiddelbart for å unngå mislighold", "Gjelden er bare relevant for finanspolitikken og angår ikke pengepolitikken"],
      explanation: "Finansiell stabilitet ligger over hele caset og gjør begge ytterpunkter i rentesettingen risikable.",
    },
    {
      question: "Hva er en fordel ved å la de automatiske stabilisatorene virke i Vestmark?",
      options: ["De demper nedgangen løpende uten vedtaks- og virkningslag", "De bringer inflasjonen tilbake til målet umiddelbart uten vedtak", "De styrker valutakursen direkte gjennom skattesystemets utforming", "De reduserer husholdningenes gjeld automatisk"],
      explanation: "Skattesystemet demper allerede nedgangen uten nye vedtak; ulempen er at det kan være utilstrekkelig i en dyp nedtur.",
    },
    {
      question: "Hva regnes som feil i rollecaset selv om ingen anbefaling skal gis?",
      options: ["Åpenbart gale politikkvalg — som kraftig ekspansjon uten å nevne inflasjonsrisikoen", "Å drøfte fordeler og ulemper ved hvert handlingsalternativ", "Å trekke inn liten-åpen-økonomi-perspektivet med valutakurskanalen i drøftingen", "Å omtale finansiell stabilitet som et selvstendig hensyn i notatet"],
      explanation: "Utenomsnakk og inndiktede forutsetninger trekker også; hensynskatalogen skal dekkes uten at notatet ender i et valg.",
    },
  ],
};

export default quizData_econ1310;
