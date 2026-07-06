import type { QuizQuestion } from './quiz-data';

const quizData_econ1310: Record<string, QuizQuestion[]> = {
  'econ1310-0-1': [
    {
      question: "Hvor stor andel av settet utgjør den store modelloppgaven i den faste ECON1310-malen fra V2023?",
      options: ["50–60 %", "20–30 %", "20–25 %", "10 %"],
      explanation: "Modelloppgaven er den tyngst vektede delen og utgjør 50–60 %. Kortsvarsdelen er 20–30 % og den verbale drøftingen/casen 20–25 %.",
    },
    {
      question: "Hvilke to temaer har 100 % forekomst på de 22 analyserte eksamenssettene?",
      options: ["Keynes-modellen/multiplikator og Phillips-kurven", "Finanspolitikk og nasjonalregnskap", "Valutakurs og arbeidsmarked", "Likviditetsfelle og Ricardiansk ekvivalens"],
      explanation: "Keynes-modellen/multiplikator og Phillips-kurven kommer i alle sett (100 %). Finanspolitikk (77 %) og nasjonalregnskap (68 %) er hyppige, men ikke garantert. Likviditetsfelle (18 %) og Ricardiansk ekvivalens (14 %) er sjeldne nivå 3-temaer.",
    },
    {
      question: "Hvordan behandler ECON1310-eksamen IS-LM, AD-AS og Solow-modellen?",
      options: ["De har 0 forekomster på 22 sett og er bevisst utelatt fra eksamenskjernen", "De er de tre mest testede modellene", "De inngår alltid i den store modelloppgaven", "De testes bare i den verbale drøftingsdelen"],
      explanation: "IS-LM, AD-AS og Solow har null forekomster på alle settene og er bevisst holdt utenfor. ECON1310 bruker i stedet trelikningsmodellen IS-RR-PK og Phillips-kurven for tilbudssiden.",
    },
    {
      question: "En kortsvarsoppgave ber om «fortegnet på $\\Delta Y$». Hva gir best uttelling ifølge sensorens metaregler?",
      options: ["Svare kort med fortegnet og en linje begrunnelse", "Levere en halv side full utledning for å vise alt du kan", "Sette opp diagrammet i stedet for å svare med ord", "Drøfte alle mulige politikkresponser på sjokket"],
      explanation: "Metaregel 1 sier: ikke svar på mer enn det spørres om. En full utledning gir null ekstra uttelling og stjeler tid. Svar knapt og presist, og gå videre.",
    },
    {
      question: "Hva er sensorens regel for den verbale drøftingsoppgaven (sjanger L)?",
      options: ["Den skrives uten matematikk, med økonomisk resonnement i ord", "Den skal underbygges med minst tre utledede ligninger", "Den skal alltid ende i en tallfestet multiplikator", "Den skal bruke IS-LM-diagrammet for å vise likevekten"],
      explanation: "Metaregel 5: drøftingen skrives uten matematikk. Ligninger i et sjanger L-svar leses som at du ikke forsto at oppgaven var verbal. Poenget er mekanismer forklart i ord.",
    },
    {
      question: "Hvilken oppgavesjanger er alltid tyngst vektet fordi den er kjernen i den store modelloppgaven?",
      options: ["E — komparativ statikk («vis matematisk»)", "C — telleregel", "B — BNP-klassifisering", "A — kortsvar/begrepsavklaring"],
      explanation: "Sjanger E, komparativ statikk der du «viser matematisk» virkningen av en eksogen endring, er selve kjernen i modelloppgaven og alltid tyngst vektet. Telleregel (C) og BNP-klassifisering (B) er små kortsvarssjangre.",
    },
    {
      question: "Hva kjennetegner en A/B-besvarelse sammenlignet med en C/D-besvarelse?",
      options: ["Fortegnsubestemthet, dekomponering, kobling på tvers og liten-åpen-økonomi-perspektiv", "Bare at flere regnesteg er tatt med", "At svaret er levert med farger og pene diagrammer", "At alle oppgaver er besvart, uansett kvalitet"],
      explanation: "C/D betyr korrekt multiplikator og riktige skift. A/B krever i tillegg mer presis økonomisk tenkning: fortegnsubestemthet, dekomponering, kobling mellom modellene og liten-åpen-økonomi-perspektiv — ikke nødvendigvis flere regnesteg.",
    },
    {
      question: "Du har 240 minutter og en del som vektes 25 %. Hvor mye tid bør den delen få ifølge metaregelen om tidsprioritering?",
      options: ["Cirka 60 minutter", "Cirka 120 minutter", "Cirka 90 minutter", "Cirka 30 minutter"],
      explanation: "Metaregel 4: prioriter tiden etter vektene. $0{,}25 \\cdot 240 = 60$ minutter. Vektene fungerer som tidsbudsjett.",
    },
    {
      question: "Hva er det mest sannsynlige innholdet i den store modelloppgaven på neste sett, ifølge prognosen?",
      options: ["Et etterspørselssjokk gjennom tilvekstform → følgestørrelser → diagram, ev. et kostnadssjokk til slutt", "En ren utledning av Solow-vekstmodellen", "En AD-AS-analyse av et tilbudssjokk", "En IS-LM-analyse av pengepolitikk"],
      explanation: "Prognosen er et etterspørselssjokk ført gjennom tilvekstform, videre til følgestørrelser og diagram, muligens avsluttet med et kostnadssjokk. Solow, AD-AS og IS-LM er bevisst utenfor eksamenskjernen.",
    },
    {
      question: "Hvordan bør leseplanen prioritere Del 2 (Keynes/multiplikator) og Del 5 (Phillips-kurven / IS-RR-PK)?",
      options: ["De må sitte perfekt — det er 100 %-temaene og hjertet i modelloppgaven", "De må bare kunnes på oversiktsnivå", "De er nivå 3-temaer man tar helt til slutt", "De kan hoppes over hvis man kan drøftingsdelen"],
      explanation: "Del 2 og Del 5 er «må perfekt»: de dekker 100 %-temaene og er kjernen i den tyngst vektede modelloppgaven. Del 1/3/4/6 er «må kunne», mens likviditetsfelle og Ricardiansk ekvivalens er nivå 3.",
    },
  ],
  'econ1310-1-1': [
    {
      question: "Hva viser generalbudsjettligningen $Y = C + I + G + X - Q$?",
      options: ["Hvordan samlet produksjon (BNP) fordeler seg på anvendelser i en åpen økonomi", "Hvordan statens budsjett fordeler seg på utgiftsposter", "Hvordan husholdningenes inntekt fordeler seg på konsum og sparing", "Hvordan BNP fordeler seg mellom lønn og kapitalavkastning"],
      explanation: "Generalbudsjettligningen viser anvendelsessiden av BNP: produksjonen $Y$ går til konsum, investering, offentlige kjøp og nettoeksport.",
    },
    {
      question: "Hva blir generalbudsjettligningen i en lukket økonomi?",
      options: ["$Y = C + I + G$", "$Y = C + I + G + X$", "$Y = C + I + G - Q$", "$Y = C + S$"],
      explanation: "I en lukket økonomi er det ingen handel med utlandet, så eksport $X$ og import $Q$ faller bort.",
    },
    {
      question: "Hvordan regner vi ut bruttoproduktet i en næring?",
      options: ["Produksjonsverdi minus produktinnsats", "Produksjonsverdi pluss produktinnsats", "Produktinnsats minus produksjonsverdi", "Produksjonsverdi minus lønnskostnader"],
      explanation: "Bruttoprodukt = produksjonsverdi − produktinnsats. Vi trekker fra produktinnsatsen for å unngå dobbelttelling.",
    },
    {
      question: "Hvorfor trekker vi fra produktinnsatsen når vi regner BNP fra produksjonssiden?",
      options: ["For å unngå å telle den samme verdien flere ganger (dobbelttelling)", "Fordi produktinnsats ikke er reell produksjon", "Fordi produktinnsats regnes som import", "For å justere for prisstigning"],
      explanation: "Produktinnsatsen er allerede skapt som verdi i andre næringer. Uten fradraget teller vi den to ganger.",
    },
    {
      question: "Hva måler BNP?",
      options: ["Verdien av all produksjon innenfor landets grenser i løpet av et år", "Inntekten som tilfaller landets innbyggere", "Bare produksjonen i markedsrettede næringer", "Verdien av landets samlede formue"],
      explanation: "BNP er knyttet til geografi: all produksjon *innenfor* landets grenser, uansett hvem som eier produksjonsfaktorene.",
    },
    {
      question: "Hvilke tre sider kan BNP måles fra?",
      options: ["Produksjonssiden, inntektssiden og anvendelsessiden", "Tilbudssiden, etterspørselssiden og pengesiden", "Privat sektor, offentlig sektor og utlandet", "Konsum, sparing og investering"],
      explanation: "BNP kan måles fra produksjons-, inntekts- og anvendelsessiden, som per definisjon gir samme tall.",
    },
    {
      question: "Hva er sammenhengen mellom BNP og BNI?",
      options: ["BNI = BNP + netto formuesinntekter og lønn fra utlandet", "BNI = BNP − offentlige kjøp", "BNI = BNP + import − eksport", "BNI = BNP − produktinnsats"],
      explanation: "BNI korrigerer BNP for netto formuesinntekter og lønn fra utlandet, og måler inntekten som tilfaller innbyggerne.",
    },
    {
      question: "Et land har BNP på 4 000 mrd. og netto formuesinntekter fra utlandet på 120 mrd. Hva er BNI?",
      options: ["4 120 mrd.", "3 880 mrd.", "4 000 mrd.", "120 mrd."],
      explanation: "BNI = BNP + netto formuesinntekter = $4000 + 120 = 4120$ mrd.",
    },
    {
      question: "Hva skiller BNP fra BNI mest presist?",
      options: ["BNP måler produksjon innenfor grensene; BNI måler inntekt til innbyggerne", "BNP inkluderer offentlig sektor; BNI gjør ikke det", "BNP er før skatt; BNI er etter skatt", "BNP gjelder étt år; BNI gjelder flere år"],
      explanation: "BNP er et geografisk produksjonsmål; BNI er et inntektsmål for landets innbyggere.",
    },
    {
      question: "Hva er disponibel inntekt for Norge?",
      options: ["BNI korrigert for netto løpende overføringer til og fra utlandet", "BNP minus skatt", "Husholdningenes inntekt etter skatt", "BNP pluss statens budsjettoverskudd"],
      explanation: "Disponibel inntekt for Norge er BNI justert for netto løpende overføringer over landegrensene – det landet samlet kan bruke til konsum og sparing.",
    },
    {
      question: "Hvordan verdsettes offentlig ikke-markedsrettet produksjon i BNP?",
      options: ["Til faktorinnsatsen (kostnadene ved å produsere tjenesten)", "Til markedsprisen for tilsvarende private tjenester", "Den holdes utenfor BNP fordi den er gratis", "Til det brukerne ville vært villige til å betale"],
      explanation: "Uten marked finnes ingen markedspris, så verdien settes lik faktorinnsatsen – i hovedsak lønn, produktinnsats og kapitalslit.",
    },
    {
      question: "Hvorfor inngår gratis sykehustjenester likevel i BNP?",
      options: ["Fordi de er reell produksjon og en del av landets verdiskaping", "Fordi staten betaler moms på dem", "Fordi de finansieres over skatteseddelen", "De inngår ikke – kun markedsrettet produksjon teller"],
      explanation: "Ikke-markedsrettet produksjon er reell verdiskaping og skal med i BNP, verdsatt til kostnadene.",
    },
    {
      question: "En kommune driver en gratis grunnskole. Hvordan får skolen verdi i BNP?",
      options: ["Verdien settes lik kostnadene (lønn, produktinnsats, kapitalslit)", "Verdien settes lik det private skoler tar i skolepenger", "Skolen får ingen verdi siden tjenesten er gratis", "Verdien settes lik statens overføringer til kommunen"],
      explanation: "Som andre ikke-markedsrettede offentlige tjenester verdsettes skolen til faktorinnsatsen – kostnadene ved å drive den.",
    },
    {
      question: "Hva er potensielt BNP?",
      options: ["Produksjonen ved langsiktig opprettholdbar utnyttelse av arbeidskraft og kapital", "Det høyeste BNP økonomien noen gang kan nå", "Gjennomsnittlig BNP de siste ti årene", "BNP i det året med lavest arbeidsledighet"],
      explanation: "Potensielt BNP er et bærekraftig nivå uten press på pris- og lønnsvekst – ikke et maksimum.",
    },
    {
      question: "Hva kan øke potensielt BNP?",
      options: ["Arbeidsinnvandring", "En kortvarig økning i etterspørselen", "Høyere prisstigning", "En midlertidig renteøkning"],
      explanation: "Potensielt BNP øker ved større tilgang på produksjonsfaktorer eller høyere produktivitet – for eksempel arbeidsinnvandring, mer kapital eller produktivitetsvekst.",
    },
    {
      question: "Hva er produksjonsgapet?",
      options: ["Forskjellen mellom faktisk BNP og potensielt BNP", "Forskjellen mellom BNP og BNI", "Forskjellen mellom eksport og import", "Forskjellen mellom sparing og investering"],
      explanation: "Produksjonsgapet måler hvor langt faktisk BNP ligger fra potensielt BNP; positivt gap tyder på høgkonjunktur.",
    },
    {
      question: "Hva kjennetegner en realinvestering?",
      options: ["Den øker beholdningen av realkapital, som bygninger og maskiner", "Den er kjøp av aksjer og obligasjoner", "Den flytter bare kjøpekraft mellom aktører", "Den er innskudd i banken"],
      explanation: "Realinvestering øker realkapitalen. Kjøp av fordringer er derimot finansinvestering.",
    },
    {
      question: "Hva er en finansinvestering?",
      options: ["Kjøp av finansielle fordringer som aksjer, obligasjoner eller bankinnskudd", "Kjøp av maskiner og bygninger", "Bygging av ny infrastruktur", "Offentlig kjøp av varer og tjenester"],
      explanation: "En finansinvestering er kjøp av fordringer og skaper ingen ny realkapital i seg selv.",
    },
    {
      question: "Inngår en finansinvestering (for eksempel aksjekjøp) direkte i BNP?",
      options: ["Nei, den skaper ingen ny produksjon eller realkapital", "Ja, den regnes som en del av investeringene $I$", "Ja, den regnes som konsum $C$", "Ja, den regnes som offentlige kjøp $G$"],
      explanation: "BNP måler produksjon. En finansinvestering flytter bare kjøpekraft mellom aktører og er ikke ny produksjon.",
    },
    {
      question: "Hva er summen av alle sektorenes netto finansinvesteringer i en lukket økonomi?",
      options: ["Null", "Lik samlet realinvestering", "Lik BNP", "Lik samlet sparing"],
      explanation: "Enhver fordring er en annens gjeld, så summert over alle innenlandske sektorer blir netto finansinvesteringer null.",
    },
    {
      question: "Hva følger av at netto finansinvesteringer er null i en lukket økonomi?",
      options: ["Samlet sparing er lik samlet realinvestering: $S = I$", "Samlet sparing er null", "Samlet realinvestering er null", "Eksport er lik import"],
      explanation: "Når ingen kan låne til eller fra utlandet, må all innenlandsk sparing finansiere innenlandsk realinvestering, så $S = I$.",
    },
    {
      question: "En åpen økonomi har $C = 2000$, $I = 500$, $G = 700$, $X = 900$ og $Q = 600$. Hva er BNP?",
      options: ["3 500", "4 700", "2 900", "3 800"],
      explanation: "$Y = C + I + G + X - Q = 2000 + 500 + 700 + 900 - 600 = 3500$.",
    },
    {
      question: "Hvorfor trekkes importen $Q$ fra i generalbudsjettligningen?",
      options: ["Fordi importerte varer inngår i $C$, $I$ og $G$ uten å være innenlandsk produksjon", "Fordi import alltid er større enn eksport", "Fordi import er en finansinvestering", "Fordi import ikke skaper inntekt i det hele tatt"],
      explanation: "$C$, $I$ og $G$ inneholder importerte varer. Siden BNP kun skal måle innenlandsk produksjon, må importen trekkes fra.",
    },
    {
      question: "Hva regnes IKKE som en del av offentlige kjøp $G$?",
      options: ["Overføringer som pensjoner og stønader", "Kommunens kjøp av skoletjenester", "Statens kjøp av forsvarsmateriell", "Offentlig investering i veier"],
      explanation: "$G$ er kjøp av varer og tjenester. Overføringer er ikke kjøp av produksjon og inngår derfor ikke i $G$.",
    },
    {
      question: "Hva er den vanligste feilen når man skriver kortsvar (sjanger A) om nasjonalregnskap?",
      options: ["Å skrive utflytende og for langt – 2–3 presise setninger holder", "Å bruke for få formler", "Å ta med for mange tall", "Å svare på nynorsk"],
      explanation: "På sjanger A gir lengre svar ikke ekstra uttelling. To–tre presise setninger er målet.",
    },
  ],
  'econ1310-1-2': [
    {
      question: "En familie kjøper en brukt leilighet for 4 000 000 kr. Hvor mye av dette inngår i BNP?",
      options: ["0 kr — leiligheten ble produsert i en tidligere periode", "4 000 000 kr som realinvestering", "4 000 000 kr som konsum", "2 000 000 kr, halvparten av verdien"],
      explanation: "Bruktsalg produserer ingenting nytt i perioden, så selve boligverdien inngår ikke i BNP.",
    },
    {
      question: "Eiendomsmegleren tar 2 % provisjon ved salg av en bolig til 4 000 000 kr. Hva inngår i BNP?",
      options: ["80 000 kr som konsum — en produsert tjeneste", "0 kr — det er bare et gebyr", "80 000 kr som realinvestering", "4 080 000 kr, både bolig og honorar"],
      explanation: "Meglerhonoraret ($2\\% \\cdot 4\\,000\\,000 = 80\\,000$) er en formidlingstjeneste produsert i perioden og inngår som konsum.",
    },
    {
      question: "Et byggefirma selger et nytt bolighus til en familie for 5 000 000 kr. Hvordan klassifiseres dette?",
      options: ["Realinvestering (I): 5 000 000 kr", "Konsum (C): 5 000 000 kr", "Inngår ikke — det er et boligsalg", "Offentlig kjøp (G): 5 000 000 kr"],
      explanation: "Nye boliger regnes som realinvestering, ikke konsum, selv om en husholdning kjøper.",
    },
    {
      question: "En investor kjøper aksjer for 300 000 kr. Hvor mye inngår i BNP?",
      options: ["0 kr — det er en formuesomplassering", "300 000 kr som realinvestering", "300 000 kr som konsum", "300 000 kr som import"],
      explanation: "Kjøp av verdipapirer bytter bare formuens form; ingen ny produksjon, så det inngår ikke i BNP.",
    },
    {
      question: "Investoren betaler 600 kr i kurtasje for aksjekjøpet. Hva skjer med kurtasjen?",
      options: ["Den inngår som konsum — en produsert meglertjeneste", "Den inngår ikke, som resten av aksjehandelen", "Den inngår som realinvestering", "Den trekkes fra som import"],
      explanation: "Kurtasjen er betaling for en finansiell tjeneste utført i perioden og inngår i BNP.",
    },
    {
      question: "En norsk husholdning kjøper en strømmetjeneste fra en utenlandsk tilbyder for 1 800 kr. Hvordan føres beløpet?",
      options: ["Som import (Q) — en egen post som trekkes fra", "Som negativt konsum, altså minus 1 800 kr i C", "Som eksport (X)", "Det inngår ikke i noen post"],
      explanation: "Tjenesten er produsert i utlandet og føres som import — en egen post, aldri som «minus konsum».",
    },
    {
      question: "Et norsk selskap eksporterer fisk for 10 000 000 kr til utlandet. Hvor mye inngår i BNP?",
      options: ["10 000 000 kr — full verdi som eksport", "0 kr, fordi kjøperen er utenlandsk", "5 000 000 kr, halvparten av verdien", "10 000 000 kr som import"],
      explanation: "Eksport inngår til full verdi fordi produksjonen skjedde innenlands, uansett hvem som kjøper.",
    },
    {
      question: "En kommune betaler en lærer 600 000 kr i årslønn. Hvordan klassifiseres dette i BNP?",
      options: ["Offentlig konsum (G): 600 000 kr", "Inngår ikke — lønn er bare en overføring", "Konsum (C): 600 000 kr", "Realinvestering (I): 600 000 kr"],
      explanation: "Offentlig tjenesteproduksjon uten markedspris verdsettes til produksjonskostnaden, her lønnen, og føres som offentlig konsum.",
    },
    {
      question: "En bruktbilforhandler kjøper en bil for 150 000 kr og selger den for 175 000 kr. Hva inngår i BNP?",
      options: ["Forhandleravansen på 25 000 kr som konsum", "Hele salgsverdien på 175 000 kr", "0 kr — alt er bruktsalg", "150 000 kr, forhandlerens innkjøpspris"],
      explanation: "Selve bilen er brukt og teller ikke, men avansen (25 000 kr) er forhandlerens produserte tjeneste og inngår.",
    },
    {
      question: "Bedrift A selger en brukt maskin direkte til bedrift B for 300 000 kr uten mellommann. Hvor mye inngår i BNP?",
      options: ["0 kr — bruktsalg uten produsert tjeneste", "300 000 kr som realinvestering", "300 000 kr som konsum", "150 000 kr som avanse"],
      explanation: "Maskinen ble produsert tidligere og det finnes ingen mellommann/tjeneste, så ingenting inngår.",
    },
    {
      question: "Et offentlig sykehus har drifts- og lønnskostnader på 80 000 000 kr og behandler pasienter gratis. Hva inngår i BNP?",
      options: ["80 000 000 kr som offentlig konsum", "0 kr — tjenesten er gratis for pasienten", "80 000 000 kr som realinvestering", "80 000 000 kr som konsum (C)"],
      explanation: "Ikke-markedsrettede offentlige tjenester verdsettes til produksjonskostnad og føres som offentlig konsum (G).",
    },
    {
      question: "En familie steller sin egen hage. Tilsvarende gartnerarbeid ville kostet 15 000 kr. Hva inngår i BNP?",
      options: ["0 kr — ubetalt egenproduksjon teller ikke", "15 000 kr som konsum", "15 000 kr som offentlig konsum", "15 000 kr, verdien av arbeidet"],
      explanation: "Ubetalt husarbeid/egenproduksjon omsettes ikke i markedet og regnes ikke med i BNP.",
    },
    {
      question: "En nordmann kjøper en ny bil importert fra utlandet for 400 000 kr. Hva blir nettobidraget til norsk BNP (se bort fra norsk avanse)?",
      options: ["0 kr — konsum inn, import ut", "400 000 kr som konsum", "400 000 kr som realinvestering", "−400 000 kr, fordi det er import"],
      explanation: "Beløpet føres som konsum (+400 000) og trekkes ut som import (−400 000), så nettobidraget til norsk BNP er 0.",
    },
    {
      question: "Hvorfor trekkes import fra i uttrykket $Y = C + I + G + X - Q$?",
      options: ["Fordi C, I, G og X inneholder varer produsert i utlandet", "Fordi import reduserer husholdningenes konsum", "Fordi import er en form for sparing", "Fordi importvarer er dyrere enn innenlandske"],
      explanation: "BNP skal bare måle innenlandsk produksjon, så den importerte delen som ligger i C, I, G og X må trekkes ut.",
    },
    {
      question: "Hva er det avgjørende spørsmålet når du skal avgjøre om en transaksjon inngår i BNP?",
      options: ["Produseres noe nytt i perioden?", "Er beløpet stort nok?", "Er det en husholdning som betaler?", "Skjer betalingen med kort eller kontant?"],
      explanation: "BNP måler verdiskaping i inneværende periode; om det produseres noe nytt nå avgjør alltid klassifiseringen.",
    },
    {
      question: "Hvilket beløp gjelder som forhandlerens verdiskaping når en brukt vare selges videre med fortjeneste?",
      options: ["Avansen — differansen mellom salgs- og innkjøpspris", "Hele salgsverdien", "Hele innkjøpsprisen", "0 kr, siden varen er brukt"],
      explanation: "Ved videresalg av brukte varer er det avansen, ikke hele salgsverdien, som utgjør den produserte tjenesten.",
    },
    {
      question: "En investor selger obligasjoner for 500 000 kr og betaler 250 kr i gebyr. Hva inngår i BNP?",
      options: ["250 kr (gebyret) som konsum; obligasjonssalget teller ikke", "500 000 kr som formuesomplassering", "500 250 kr, hele beløpet", "0 kr, både salg og gebyr faller utenfor"],
      explanation: "Salg av verdipapirer er formuesomplassering (0 kr), men gebyret er en produsert finansiell tjeneste som inngår.",
    },
    {
      question: "Hva kreves for at et svar på klassifiseringsoppgaven skal gi full uttelling?",
      options: ["Kategori, beløp og en kort begrunnelse", "Bare et ja eller nei", "Bare riktig kategori", "Bare riktig beløp"],
      explanation: "Oppgaven krever eksplisitt både kategori, kronebeløp og begrunnelse; «ja» uten beløp gir ikke full uttelling.",
    },
    {
      question: "En familie får bygget et nytt hus for 6 000 000 kr og selger sitt gamle hus for 4 000 000 kr via megler med 1,5 % provisjon. Hva er samlet bidrag til BNP?",
      options: ["6 060 000 kr — nybygg pluss meglerhonorar", "10 000 000 kr — begge boligverdiene", "6 000 000 kr — bare nybygget", "10 060 000 kr — alt til sammen"],
      explanation: "Nybygget (6 000 000, realinvestering) og meglerhonoraret ($1{,}5\\% \\cdot 4\\,000\\,000 = 60\\,000$, konsum) teller; salget av det gamle huset gir 0.",
    },
    {
      question: "Hva er den vanligste feilen i klassifiseringsoppgaven?",
      options: ["Å glemme at honoraret/avansen inngår selv når objektet ikke gjør det", "Å ta med for mange transaksjoner", "Å regne eksport til full verdi", "Å føre offentlige tjenester som konsum"],
      explanation: "Typisk tap av poeng: man ser at bruktbolig/aksje ikke teller, men glemmer at den tilknyttede tjenesten (honorar, kurtasje, avanse) inngår.",
    },
  ],
  'econ1310-1-3': [
    {
      question: "Hva er pengenes tre funksjoner?",
      options: ["Betalingsmiddel, måleenhet og verdioppbevaring", "Betalingsmiddel, kredittformidling og verdioppbevaring", "Måleenhet, verdioppbevaring og styringsrente", "Betalingsmiddel, pant og risikopremie"],
      explanation: "Penger defineres gjennom tre funksjoner: betalingsmiddel (byttemiddel), måleenhet (verdimål) og verdioppbevaring (verdilager).",
    },
    {
      question: "Hva betyr det at penger fungerer som måleenhet?",
      options: ["At priser og verdier uttrykkes i en felles enhet, så verdier kan sammenlignes", "At penger aksepteres som oppgjør ved kjøp og salg", "At penger kan spares og brukes senere", "At penger gir eierandel i selskaper"],
      explanation: "Som måleenhet (verdimål) gjør penger at vi kan uttrykke priser i en felles enhet og sammenligne verdien av ulike varer direkte.",
    },
    {
      question: "Hvilken pengefunksjon svekkes av høy inflasjon?",
      options: ["Verdioppbevaring", "Betalingsmiddel", "Måleenhet", "Kredittformidling"],
      explanation: "Ved høy inflasjon taper pengene kjøpekraft over tid, slik at funksjonen som verdioppbevaring svekkes.",
    },
    {
      question: "Hva er en obligasjon?",
      options: ["Et omsettelig, rentebærende gjeldsbrev der investoren er kreditor", "En eierandel i et selskap med rett til utbytte", "Et innskudd i sentralbanken", "En sikkerhet långiveren får i en eiendel"],
      explanation: "En obligasjon er et omsettelig, rentebærende gjeldsbrev. Investoren låner utsteder penger og er kreditor, ikke eier.",
    },
    {
      question: "Hva er en aksje?",
      options: ["En eierandel i et selskap med rett til utbytte og stemmerett", "Et rentebærende gjeldsbrev med fast tilbakebetaling", "Et lån fra banken til en bedrift", "En obligasjon utstedt av staten"],
      explanation: "En aksje er en eierandel som gir rett til utbytte, stemmerett og begrenset ansvar, men usikker avkastning.",
    },
    {
      question: "Hvem får dekket kravene sine først når en bedrift går konkurs?",
      options: ["Obligasjonseierne, fordi de er kreditorer", "Aksjonærene, fordi de er eiere", "Aksjonærene, fordi de har stemmerett", "Obligasjonseierne, fordi de har begrenset ansvar"],
      explanation: "Kreditorer, som obligasjonseiere, har prioritet foran eierne. Aksjonærene kommer sist og taper ofte hele innskuddet.",
    },
    {
      question: "Hva er hovedforskjellen mellom gjeldsfinansiering og egenkapitalfinansiering?",
      options: ["Gjeld gir kreditor med renteplikt uten eierandel; egenkapital gir ny eier uten renteplikt", "Gjeld gir eierandel; egenkapital gir fast rente", "Gjeld skal ikke tilbakebetales; egenkapital skal tilbakebetales", "Gjeld utvanner eierne; egenkapital gir fast renteforpliktelse"],
      explanation: "Gjeld er lån med fast renteplikt uten eierrettigheter, mens egenkapital gir nye eiere uten renteplikt, men med utvanning av eierandel.",
    },
    {
      question: "Hvorfor regnes en statsobligasjon som en investering med lav risiko?",
      options: ["Fordi staten har svært høy kredittverdighet og lav sjanse for mislighold", "Fordi den gir eierandel i staten", "Fordi den alltid gir høyest mulig rente", "Fordi den er sikret med pant i statens eiendommer"],
      explanation: "Staten kan skattlegge og har liten sannsynlighet for mislighold, så investoren får med stor sikkerhet rente og hovedstol tilbake — derfor lav risiko og lav rente.",
    },
    {
      question: "Hva er bankenes viktigste rolle i finanssystemet?",
      options: ["Kredittformidling: å kanalisere sparing fra innskytere til låntakere", "Å fastsette styringsrenten", "Å utstede statsobligasjoner", "Å bestemme inflasjonsmålet"],
      explanation: "Bankenes hovedoppgave er kredittformidling: de tar imot innskudd og låner pengene videre ut til husholdninger og bedrifter.",
    },
    {
      question: "Hva er styringsrenten?",
      options: ["Renten bankene får på innskudd i sentralbanken opp til en kvote", "Den faste renten en obligasjonsutsteder betaler eierne", "Bankens utlånsrente til publikum", "Forskjellen mellom utlåns- og innskuddsrente"],
      explanation: "Styringsrenten (folio-/reserverenten) er renten bankene får på innskudd i sentralbanken og sentralbankens viktigste pengepolitiske virkemiddel.",
    },
    {
      question: "Hva skjer med markedsrentene når sentralbanken hever styringsrenten?",
      options: ["De stiger, fordi bankenes finansiering blir dyrere", "De faller, fordi bankene får mer penger", "De påvirkes ikke av styringsrenten", "De faller, fordi kredittrisikoen synker"],
      explanation: "Høyere styringsrente gjør bankenes finansiering dyrere, og de velter kostnaden over på kundene ved å heve utlåns- og innskuddsrentene.",
    },
    {
      question: "Hva er kupongrenten på en obligasjon?",
      options: ["Den faste renten utstederen betaler til obligasjonseierne", "Sentralbankens styringsrente", "Bankens rentemargin", "Renten aksjonærene får på utbytte"],
      explanation: "Kupongrenten er den faste renten utsteder betaler eierne underveis. Den må ikke forveksles med styringsrenten.",
    },
    {
      question: "Hva er pant i forbindelse med et lån?",
      options: ["En sikkerhet långiveren får i en eiendel ved mislighold", "Det ekstra rentepåslaget for risiko", "En eierandel i låntakerens selskap", "Renten långiveren betaler til låntakeren"],
      explanation: "Pant er en sikkerhet långiveren kan overta og selge dersom låntakeren ikke betaler. God pant senker risikoen og dermed renten.",
    },
    {
      question: "Hva er risikopremien i en lånerente?",
      options: ["Påslaget långiveren krever som kompensasjon for risikoen for tap", "Den delen av renten som går til staten som skatt", "Sentralbankens styringsrente", "Forskjellen mellom to statsobligasjoner"],
      explanation: "Risikopremien er påslaget i renten som kompenserer for kredittrisikoen. Høyere risiko for mislighold gir høyere risikopremie.",
    },
    {
      question: "Hvorfor har et forbrukslån uten pant høyere rente enn et boliglån med pant?",
      options: ["Fordi manglende sikkerhet gir høyere kredittrisiko og dermed høyere risikopremie", "Fordi forbrukslån alltid er kortere", "Fordi styringsrenten er høyere for forbrukslån", "Fordi boliglån gir banken eierandel i boligen"],
      explanation: "Uten pant har långiveren ingen sikkerhet ved mislighold, så kredittrisikoen er høyere og risikopremien — og dermed renten — settes høyere.",
    },
    {
      question: "Hva menes med rentedifferansen (rentemarginen) til en bank?",
      options: ["Forskjellen mellom bankens utlånsrente og innskuddsrente", "Forskjellen mellom styringsrenten og inflasjonen", "Forskjellen mellom kupongrente og styringsrente", "Forskjellen mellom to bankers styringsrenter"],
      explanation: "Rentedifferansen er forskjellen mellom utlåns- og innskuddsrente, og dekker bankens kostnader, tap og fortjeneste.",
    },
    {
      question: "Hva innebærer begrenset ansvar for en aksjonær?",
      options: ["At aksjonæren i verste fall kan tape det innskutte beløpet, men ikke mer", "At aksjonæren garanterer for all selskapets gjeld", "At aksjonæren har fast krav på rente", "At aksjonæren får dekket kravet sitt før kreditorene"],
      explanation: "Begrenset ansvar betyr at aksjonæren kun risikerer det innskutte beløpet og ikke hefter for selskapets øvrige gjeld.",
    },
    {
      question: "For et ungt vekstselskap med usikre inntekter og lite pant — hvilken finansieringsform er ofte best egnet?",
      options: ["Egenkapital, fordi den ikke gir fast renteforpliktelse", "Gjeld, fordi den gir lavest mulig rente", "Statsobligasjoner, fordi de har lav risiko", "Gjeld, fordi eierne da unngår utvanning"],
      explanation: "Uten sikre inntekter og pant blir en fast renteforpliktelse risikabel. Egenkapital gir ingen renteplikt, og de nye eierne deler risikoen.",
    },
    {
      question: "Hva menes med at penger fungerer som betalingsmiddel?",
      options: ["At de aksepteres som oppgjør ved kjøp og salg", "At de brukes til å måle og sammenligne verdier", "At de kan spares og brukes senere", "At de gir rett til utbytte i et selskap"],
      explanation: "Som betalingsmiddel aksepteres penger som oppgjør ved handel, og fjerner behovet for dobbelt sammenfall av ønsker i en bytteøkonomi.",
    },
    {
      question: "Hva kjennetegner en kreditor sammenlignet med en eier?",
      options: ["Kreditor har krav på rente og tilbakebetaling, men ingen eierrettigheter", "Kreditor har stemmerett og krav på utbytte", "Kreditor får dekket kravet sist ved konkurs", "Kreditor eier en andel av selskapet"],
      explanation: "En kreditor (for eksempel obligasjonseier) har lånt bort penger med krav på rente og tilbakebetaling, prioritet foran eierne, men ingen eierrettigheter.",
    },
  ],
  'econ1310-1-4': [
    {
      question: "Hvilke tre vilkår må være oppfylt for at en person skal regnes som arbeidsledig i AKU?",
      options: ["Uten inntektsgivende arbeid, har aktivt søkt siste fire uker, og kan tiltre raskt", "Uten inntektsgivende arbeid og ønsker seg jobb", "Registrert som arbeidssøker hos NAV og mottar dagpenger", "Uten fast jobb, men kan ha korttidsengasjementer"],
      explanation: "Alle tre AKU-vilkårene må gjelde samtidig: uten inntektsgivende arbeid, aktivt søkt de siste fire ukene og tilgjengelig til å tiltre raskt. Å bare 'ønske seg jobb' eller å være NAV-registrert er ikke tilstrekkelig.",
    },
    {
      question: "Hva består arbeidsstyrken av?",
      options: ["Sysselsatte + arbeidsledige", "Hele befolkningen i arbeidsdyktig alder", "Bare de sysselsatte", "Sysselsatte + personer utenfor arbeidsstyrken"],
      explanation: "Arbeidsstyrken er summen av de sysselsatte og de arbeidsledige — de som tilbyr arbeidskraft. Personer utenfor arbeidsstyrken inngår ikke.",
    },
    {
      question: "Hvordan beregnes arbeidsledighetsraten?",
      options: ["Arbeidsledige delt på arbeidsstyrken", "Arbeidsledige delt på hele befolkningen", "Arbeidsledige delt på antall sysselsatte", "Sysselsatte delt på arbeidsstyrken"],
      explanation: "Ledighetsraten er de arbeidsledige som andel av arbeidsstyrken (sysselsatte + arbeidsledige). Å dele på hele befolkningen er en klassisk feil som gir et for lavt tall.",
    },
    {
      question: "En økonomi har 2 400 000 sysselsatte og 100 000 arbeidsledige. Hva er arbeidsledighetsraten?",
      options: ["4,0 %", "4,2 %", "10,0 %", "2,4 %"],
      explanation: "Arbeidsstyrken = 2 400 000 + 100 000 = 2 500 000. u = 100 000 / 2 500 000 = 0,04 = 4,0 %.",
    },
    {
      question: "I en økonomi er 1 800 000 sysselsatte og 200 000 arbeidsledige. Hva er ledighetsraten?",
      options: ["10,0 %", "11,1 %", "9,0 %", "20,0 %"],
      explanation: "Arbeidsstyrken = 1 800 000 + 200 000 = 2 000 000. u = 200 000 / 2 000 000 = 0,10 = 10,0 %. (11,1 % ville man fått ved feilaktig å dele på sysselsatte.)",
    },
    {
      question: "Befolkningen i arbeidsdyktig alder er 5 000 000, arbeidsstyrken er 3 000 000 og 150 000 er arbeidsledige. Hva er ledighetsraten?",
      options: ["5,0 %", "3,0 %", "2,9 %", "6,0 %"],
      explanation: "Ledighetsraten deler på arbeidsstyrken, ikke befolkningen: u = 150 000 / 3 000 000 = 0,05 = 5,0 %. Å dele på befolkningen (5 mill.) ville gitt feilaktige 3,0 %.",
    },
    {
      question: "Hva kjennetegner friksjonsledighet?",
      options: ["Den skyldes at det tar tid å matche arbeidssøkere med ledige stillinger", "Den skyldes at samlet etterspørsel svikter i en lavkonjunktur", "Den skyldes at de lediges kompetanse ikke passer jobbene som finnes", "Den forsvinner helt når økonomien er i full sysselsetting"],
      explanation: "Friksjonsledighet oppstår på grunn av søketid — det tar tid å finne hverandre. Den finnes selv ved full sysselsetting, og skiller seg fra konjunkturledighet (etterspørselssvikt) og strukturledighet (mismatch).",
    },
    {
      question: "Hva er hovedårsaken til strukturledighet?",
      options: ["Mismatch mellom de lediges kvalifikasjoner/bosted og jobbenes krav", "Svak samlet etterspørsel i en lavkonjunktur", "At det tar noen uker å bytte fra én jobb til en annen", "At det offentlige kutter i arbeidsmarkedstiltak"],
      explanation: "Strukturledighet skyldes et mismatch — de lediges kompetanse eller geografi passer ikke jobbene som finnes. Etterspørselssvikt gir derimot konjunkturledighet, og kort jobbytte gir friksjonsledighet.",
    },
    {
      question: "Hva forårsaker konjunkturledighet?",
      options: ["Etterspørselssvikt i en lavkonjunktur, der Y < Y^n", "At arbeidssøkere mangler riktig kompetanse for de ledige jobbene", "At det tar tid å søke og få en ny jobb", "At likevektsledigheten stiger over tid"],
      explanation: "Konjunkturledighet skyldes at samlet etterspørsel og produksjon faller under det normale nivået (Y < Y^n), slik at bedriftene trenger færre ansatte. Den stiger i nedgangstider og faller i oppgangstider.",
    },
    {
      question: "En hjørnesteinsbedrift legges ned, og de oppsagte har kompetanse det ikke lenger er etterspørsel etter. Hvilken ledighetstype er dette?",
      options: ["Strukturledighet", "Konjunkturledighet", "Friksjonsledighet", "Likevektsledighet"],
      explanation: "Dette er et kvalifikasjonsmismatch mellom de lediges kompetanse og etterspørselen — altså strukturledighet. Det forveksles ofte med konjunkturledighet, men her er årsaken mismatch, ikke etterspørselssvikt.",
    },
    {
      question: "Hva er likevektsledigheten (u^n)?",
      options: ["Ledighetsnivået økonomien vender tilbake til når Y = Y^n, bestående av friksjons- og strukturledighet", "Ledigheten som oppstår kun under en dyp lavkonjunktur", "Ledigheten målt av NAV framfor av AKU", "Nivået der arbeidsledigheten er null"],
      explanation: "Likevektsledigheten u^n (naturlig ledighet) er 'gulvet' i ledigheten som består når konjunkturledigheten er borte og Y = Y^n. Den utgjøres av friksjons- og strukturledighet og er ikke null.",
    },
    {
      question: "Ved normal drift (Y = Y^n) er ledigheten 3 %. I en lavkonjunktur stiger den til 7 %. Hvor stor er konjunkturledigheten?",
      options: ["4 %", "7 %", "3 %", "10 %"],
      explanation: "Konjunkturledigheten er faktisk ledighet minus likevektsledighet: 7 % − 3 % = 4 %. Likevektsledigheten (3 %) blir stående igjen selv i gode tider.",
    },
    {
      question: "Hvorfor kan AKU-ledigheten avvike fra NAV-registrert ledighet?",
      options: ["AKU fanger opp alle som oppfyller ILO-vilkårene, mens NAV bare teller dem som har registrert seg som arbeidssøkere", "AKU teller bare dem som mottar dagpenger, mens NAV teller alle uten jobb", "AKU måler ledighet blant unge, mens NAV måler blant eldre", "Det er ingen reell forskjell; tallene er alltid like"],
      explanation: "AKU er en utvalgsundersøkelse som fanger opp alle som oppfyller ILO-vilkårene, uansett registrering. NAV-tallet teller bare registrerte arbeidssøkere. Derfor er AKU-tallet vanligvis høyere og internasjonalt sammenlignbart.",
    },
    {
      question: "En person ønsker jobb, men har ikke søkt aktivt på et halvt år. Hvordan klassifiseres vedkommende i AKU?",
      options: ["Utenfor arbeidsstyrken", "Arbeidsledig", "Sysselsatt", "Undersysselsatt"],
      explanation: "Uten aktivt jobbsøk siste fire uker er ikke 'aktivt søkt'-kriteriet oppfylt. Da regnes personen som utenfor arbeidsstyrken, ikke som arbeidsledig — selv om vedkommende ønsker seg jobb.",
    },
    {
      question: "Hva måler yrkesdeltakelsen (arbeidsstyrkeandelen)?",
      options: ["Arbeidsstyrken som andel av befolkningen i arbeidsdyktig alder", "Arbeidsledige som andel av arbeidsstyrken", "Sysselsatte som andel av arbeidsstyrken", "Arbeidsledige som andel av befolkningen"],
      explanation: "Yrkesdeltakelsen er arbeidsstyrken (sysselsatte + arbeidsledige) delt på befolkningen i arbeidsdyktig alder, og viser hvor stor del av befolkningen som tilbyr arbeidskraft. Arbeidsledige delt på arbeidsstyrken er derimot ledighetsraten.",
    },
  ],
  'econ1310-1-5': [
    {
      question: "Den nominelle kronekursen $E$ er notert som kroner per euro og stiger fra 11 til 12. Hva har skjedd?",
      options: ["Kronen har svekket seg (depresiert)", "Kronen har styrket seg (appresiert)", "Realkursen er nødvendigvis uendret", "Euroen har svekket seg mot kronen"],
      explanation: "Med prisnotering (kr per euro) betyr en høyere $E$ at hver euro koster flere kroner — altså en svakere krone (depresiering). Det vanligste fortegnsfeilet er å tolke høyere $E$ som sterkere krone.",
    },
    {
      question: "Hva måler realvalutakursen $R = \\frac{E \\cdot P^*}{P}$?",
      options: ["Prisen på utenlandske varer relativt til norske i felles valuta (konkurranseevnen)", "Kun antall kroner per enhet utenlandsk valuta", "Rentedifferansen mot utlandet", "Norges Banks styringsrente justert for inflasjon"],
      explanation: "Realkursen setter prisen på en utenlandsk varekurv omregnet til kroner ($E \\cdot P^*$) opp mot den norske ($P$), og måler dermed konkurranseevnen. Den nominelle kursen alene er bare $E$.",
    },
    {
      question: "Kronen svekker seg. Hva skjer med importprisene og norsk inflasjon?",
      options: ["Importvarer blir dyrere i kroner, og inflasjonen presses opp (importert inflasjon)", "Importvarer blir billigere, og inflasjonen faller", "Importprisene er upåvirket av kursen", "Bare eksportprisene endres, ikke importprisene"],
      explanation: "En svakere krone gjør utenlandske varer dyrere i kroner. Dette løfter prisnivået — importert inflasjon — som i modellen er et kostnadssjokk $z^\\pi > 0$.",
    },
    {
      question: "I hvilket ledd i modellapparatet inngår importert inflasjon fra en kronesvekkelse?",
      options: ["Som et kostnadssjokk $z^\\pi$ i Phillips-kurven", "Som et etterspørselssjokk $z^C$ i konsumligningen", "Som et investeringssjokk $z^I$", "Som et skattesjokk $z^T$"],
      explanation: "Importert inflasjon kommer fra kostnadssiden (dyrere importvarer) uavhengig av produksjonsgapet, og er derfor et $z^\\pi$-sjokk i Phillips-kurven — ikke et etterspørselssjokk.",
    },
    {
      question: "En kronesvekkelse bedrer eksportkonkurransen. Hvorfor?",
      options: ["Norske varer blir billigere målt i utenlandsk valuta", "Norske varer blir dyrere for utlendinger", "Importvarer blir billigere", "Rentenivået i Norge faller automatisk"],
      explanation: "Når kronen svekkes, koster norske varer færre enheter utenlandsk valuta for utenlandske kjøpere. Det gjør norsk eksport mer konkurransedyktig og øker eksportetterspørselen.",
    },
    {
      question: "Hvilke tre størrelser inngår i realvalutakursen?",
      options: ["Nominell kurs $E$, utenlandsk prisnivå $P^*$ og norsk prisnivå $P$", "Bare nominell kurs $E$ og styringsrenten", "Norsk og utenlandsk rente samt inflasjonsmålet", "Eksport $X$, import $Q$ og BNP $Y$"],
      explanation: "Realkursen $R = \\frac{E \\cdot P^*}{P}$ krever alle tre: nominell kurs og begge prisnivåer. Derfor kan realkursen endres selv om $E$ ligger fast.",
    },
    {
      question: "Norsk inflasjon er høyere enn utlandets, mens den nominelle kursen $E$ ligger fast. Hva skjer med konkurranseevnen?",
      options: ["Den svekkes (realkursen faller, real appresiering)", "Den bedres (realkursen stiger)", "Den er upåvirket fordi $E$ er uendret", "Den kan ikke endres uten at renten endres"],
      explanation: "Høyere norsk $P$ i nevneren gjør $R = \\frac{E \\cdot P^*}{P}$ mindre. Norske varer blir relativt dyrere — konkurranseevnen svekkes selv med uendret nominell kurs.",
    },
    {
      question: "Hva sier trilemmaet i pengepolitikken?",
      options: ["Et land kan ha høyst to av: fast kurs, fri kapitalbevegelse og selvstendig pengepolitikk", "Et land må alltid velge fast kurs framfor flytende", "Inflasjon, ledighet og vekst kan ikke stabiliseres samtidig", "Renten, valutakursen og skatten må settes samtidig"],
      explanation: "Trilemmaet (den umulige treenigheten) sier at fast kurs, fri kapital og selvstendig pengepolitikk ikke kan oppnås samtidig — bare to av de tre.",
    },
    {
      question: "Hvilke to hjørner av trilemmaet har Norge valgt?",
      options: ["Fri kapitalbevegelse og selvstendig pengepolitikk (dermed flytende kurs)", "Fast kurs og selvstendig pengepolitikk", "Fast kurs og fri kapitalbevegelse", "Kapitalkontroll og fast kurs"],
      explanation: "Norge har fri kapitalflyt og en selvstendig inflasjonsstyrende sentralbank. Da må den tredje — fast kurs — oppgis, så Norge har flytende kurs.",
    },
    {
      question: "Norges Bank hever renten relativt til utlandet. Hva skjer normalt med kronen?",
      options: ["Kronen appresierer fordi kapital strømmer inn", "Kronen depresierer fordi kapital strømmer ut", "Kursen påvirkes ikke av renteforskjeller", "Kronen svekkes fordi eksporten faller"],
      explanation: "En høyere rentedifferanse gjør kroneplasseringer mer attraktive, kapital strømmer inn, etterspørselen etter kroner stiger og kronen appresierer ($E$ faller).",
    },
    {
      question: "Hva menes med at Norge er en «liten åpen økonomi»?",
      options: ["Vi handler mye med utlandet og tar verdensrente og verdenspriser som gitt", "Vi har lukket økonomi uten utenrikshandel", "Vi bestemmer verdensrenten gjennom Norges Bank", "Vi har fast valutakurs mot euro"],
      explanation: "En liten åpen økonomi handler mye internasjonalt, men er for liten til å påvirke verdensmarkedets priser og renter. Renten virker i stor grad gjennom valutakursen.",
    },
    {
      question: "Hvorfor bryr Norges Bank seg om kronekursen selv med et rent inflasjonsmål?",
      options: ["Kursen påvirker både importert inflasjon og eksportkonkurransen, altså begge sentralbankens hensyn", "Kursen bestemmer skattenivået", "Sentralbanken har som mål å holde kursen fast", "Kursen påvirker kun statsbudsjettet"],
      explanation: "Kronekursen virker både på inflasjonen (via importpriser) og på produksjonen (via eksport). Begge inngår i sentralbankens vurdering, derfor er kursen relevant.",
    },
    {
      question: "Realkursen $R = \\frac{E \\cdot P^*}{P}$ stiger (real depresiering). Hva betyr det for konkurranseevnen?",
      options: ["Norske varer blir relativt billigere — konkurranseevnen bedres", "Norske varer blir relativt dyrere — konkurranseevnen svekkes", "Konkurranseevnen er uendret", "Importen blir automatisk dyrere enn eksporten"],
      explanation: "Når $R$ stiger, blir utenlandske varer relativt dyrere og norske relativt billigere i felles valuta — det bedrer konkurranseevnen.",
    },
    {
      question: "Et land vil ha både fast kurs og fri kapitalbevegelse. Hva må det gi opp?",
      options: ["Den selvstendige pengepolitikken (renten må forsvare kursen)", "Fri kapitalbevegelse", "Inflasjonsmålet, men beholder renteautonomien", "Ingenting — alle tre kan kombineres"],
      explanation: "Med fast kurs og fri kapital må renten brukes til å forsvare kursen. Da mister landet muligheten til å sette renten etter innenlandske konjunkturhensyn.",
    },
    {
      question: "En turist fra Norge kjøper varer i utlandet. Hvordan påvirker en svakere krone denne handelen?",
      options: ["Varene blir dyrere i kroner fordi importprisene stiger", "Varene blir billigere i kroner", "Kursen har ingen betydning for utenlandshandel", "Varene inngår i norsk eksport"],
      explanation: "En svakere krone (høyere $E$) gjør at samme utenlandske prisbeløp koster flere kroner. Norske kjøp i utlandet blir dyrere — samme mekanisme som for import.",
    },
    {
      question: "Hvilket begrep beskriver forholdet mellom et lands eksport- og importpriser?",
      options: ["Bytteforholdet (terms of trade)", "Realrenten", "Produksjonsgapet", "Reserverenten"],
      explanation: "Bytteforholdet er forholdet mellom eksport- og importpriser. Det bedres når eksportprisene stiger relativt til importprisene, og påvirkes av valutakursen.",
    },
    {
      question: "Norsk inflasjon er 4 %, utlandets er 1 %, og realkursen holdes konstant. Hva må ha skjedd med den nominelle kursen $E$?",
      options: ["$E$ har steget med om lag 3 % (nominell depresiering)", "$E$ har falt med om lag 3 % (nominell appresiering)", "$E$ er uendret", "$E$ har steget med om lag 5 %"],
      explanation: "Uendret realkurs krever at nominell kurs endres om lag med inflasjonsforskjellen: $\\frac{\\Delta E}{E} \\approx 4\\% - 1\\% = 3\\%$. En kronesvekkelse på 3 % motvirker den høyere norske inflasjonen (relativ kjøpekraftsparitet).",
    },
    {
      question: "Hva er den vanligste tabben på eksamen når man analyserer valutakurs?",
      options: ["Å snu fortegnet på $E$ (blande sterkere krone og høyere $E$)", "Å bruke Holden-notasjon", "Å nevne både import- og eksportkanalen", "Å regne realkursen med alle tre prisstørrelsene"],
      explanation: "Sensor deler ofte poeng nettopp på fortegnet: sterkere krone betyr lavere $E$, ikke høyere. Å skrive benevningen «kr per euro» hjelper mot feilen.",
    },
    {
      question: "Et land med fast kurs og fri kapital er i lavkonjunktur. Hvilket stabiliseringsverktøy må det lene seg på?",
      options: ["Finanspolitikken, siden renten er bundet til kursforsvaret", "Selvstendige rentekutt", "Devaluering hver gang ledigheten stiger", "Ingen — landet kan ikke stabilisere økonomien"],
      explanation: "Med fast kurs og fri kapital er pengepolitikken bundet (trilemmaet). Renten kan ikke kuttes fritt, så landet må bruke finanspolitikken — som dessuten virker sterkere når renteresponsen uteblir.",
    },
    {
      question: "Hva er en effektiv (importvektet) valutakurs?",
      options: ["Et veid gjennomsnitt av kronens kurs mot handelspartnernes valutaer", "Kursen mot kun amerikanske dollar", "Den kursen som gir realkurs lik 1", "Styringsrenten omregnet til utenlandsk valuta"],
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
      options: ["Modellen er determinert (entydig løsbar)", "Modellen er åpen", "Modellen er ustabil", "Multiplikatoren er lik 1"],
      explanation: "Determinert = like mange uavhengige ligninger som endogene variabler, altså én løsning per endogen variabel.",
    },
    {
      question: "Hva avgjør om modellen beskriver en åpen eller lukket økonomi?",
      options: ["Om den inneholder eksport-/importledd ($X$ og $Q$)", "Om renten $i$ er med", "Om skatten er endogen", "Om $z$-leddene er positive"],
      explanation: "Åpen/lukket avgjøres kun av handelsleddene. Rente eller endogen skatt endrer ikke dette.",
    },
    {
      question: "Hvorfor må $c_1 < 1$?",
      options: ["Husholdningene sparer en del av hver ekstra krone, så ikke alt lekker tilbake i konsum", "Fordi renten alltid er positiv", "Fordi importen må være mindre enn eksporten", "Fordi $G$ er eksogen"],
      explanation: "$c_1<1$ betyr sparelekkasje, som gjør multiplikatoren endelig og stabilitetsvilkåret oppfylt.",
    },
    {
      question: "Hva er $z^C$ i konsumfunksjonen $C = z^C + c_1(Y-T) - c_2(i-\\pi^e)$?",
      options: ["Et eksogent konsumskift (konsumsjokk) uavhengig av inntekt og rente", "Den marginale konsumtilbøyeligheten", "En endogen variabel modellen bestemmer", "Skattesatsen"],
      explanation: "$z^C$ er det eksogene skiftleddet — stemning/forventninger/formue. En endring $\\Delta z^C$ er et konsumsjokk.",
    },
    {
      question: "For full uttelling ved tolkning av $c_2>0$ i konsumfunksjonen, hvilke kanaler må nevnes?",
      options: ["Substitusjonseffekt, inntektseffekt og gjeldskanalen", "Bare substitusjonseffekten", "Bare importlekkasjen", "Akseleratoren og skattelekkasjen"],
      explanation: "Sensor krever alle tre: substitusjon, inntektseffekt og gjeldskanalen (norske husholdninger har netto gjeld).",
    },
    {
      question: "Hva er den økonomiske begrunnelsen for $b_1 > 0$?",
      options: ["Høyere produksjon krever mer kapasitet og gir lettere finansiering, så investeringene stiger med $Y$", "Høyere rente øker investeringene", "Skatten faller når $Y$ stiger", "Importen øker med inntekten"],
      explanation: "$b_1$ er akseleratoren: aktivitetsnivået trekker investeringene opp via kapasitetsbehov og inntjening.",
    },
    {
      question: "Hvilken av disse er en eksogen størrelse i standardmodellen?",
      options: ["$G$ (offentlige kjøp)", "$Y$ (BNP)", "$C$ (konsum)", "$T$ (skatt, endogen variant)"],
      explanation: "$G$ fastsettes utenfor modellen. $Y$, $C$ og endogen $T$ bestemmes av modellen.",
    },
    {
      question: "Hva betyr det at renten $i$ blir endogen (f.eks. via en renteregel)?",
      options: ["Det trengs en ekstra ligning for at modellen fortsatt skal være determinert", "Modellen blir automatisk åpen", "Multiplikatoren blir lik 1", "Skatten blir eksogen"],
      explanation: "En ny endogen variabel krever en ny ligning (renteregelen), slik at telleregelen fortsatt går opp.",
    },
    {
      question: "Hva er realrenten i modellen?",
      options: ["$i - \\pi^e$", "$i + \\pi^e$", "$i \\cdot \\pi^e$", "$\\pi^e - i$"],
      explanation: "Realrenten er nominell rente minus forventet inflasjon, $i-\\pi^e$, og styrer konsum og investeringer.",
    },
    {
      question: "Hvorfor gjør en endring i renten ikke en modell åpen?",
      options: ["Åpen/lukket avgjøres kun av om det finnes handelsledd ($X$, $Q$)", "Fordi renten alltid er eksogen", "Fordi renten inngår i skattefunksjonen", "Fordi renten er en endogen variabel"],
      explanation: "Rente kan finnes i både åpen og lukket modell; bare eksport/import avgjør åpenhet.",
    },
    {
      question: "Hva er disponibel inntekt i modellen?",
      options: ["$Y - T$", "$Y + T$", "$Y - C$", "$Y - G$"],
      explanation: "Disponibel inntekt er inntekt etter nettoskatt, $Y-T$, som konsumet bygger på.",
    },
    {
      question: "Med endogen skatt $T = z^T + tY$, hvor mye øker disponibel inntekt når $Y$ øker med én krone?",
      options: ["$(1-t)$ kroner", "Én krone", "$t$ kroner", "$c_1$ kroner"],
      explanation: "$Y - T = (1-t)Y - z^T$, så én krone mer $Y$ gir $(1-t)$ kroner mer disponibel inntekt.",
    },
    {
      question: "Hva kjennetegner den forenklede modellvarianten?",
      options: ["$c_2 = b_2 = 0$, altså ingen renteeffekter", "$c_1 = 1$", "Ingen offentlige kjøp", "Skatten er endogen"],
      explanation: "Forenklet variant setter renteeffektene $c_2$ og $b_2$ til null; renten holdes fast.",
    },
    {
      question: "Hvilken feil gjør en student som teller $z^C$, $z^I$ og $z^T$ som endogene variabler?",
      options: ["$z$-leddene er eksogene skiftledd, ikke endogene", "Ingen feil — de er endogene", "De skulle telles som ligninger", "De skulle regnes som parametre"],
      explanation: "$z$-leddene mates inn utenfra og skal aldri telles som endogene i telleregelen.",
    },
    {
      question: "Hva uttrykker parameteren $t$?",
      options: ["Andelen av en inntektsøkning som trekkes inn som skatt", "Den marginale konsumtilbøyeligheten", "Investeringsakseleratoren", "Realrenten"],
      explanation: "$t$ er den effektive marginale skattesatsen og skattesystemets konjunkturfølsomhet.",
    },
    {
      question: "Hvorfor kalles $t$ en automatisk stabilisator?",
      options: ["Skatteinngangen endrer seg med konjunkturene uten politiske vedtak og demper svingninger", "Fordi den øker multiplikatoren", "Fordi den gjør modellen åpen", "Fordi den fjerner rentens virkning"],
      explanation: "$tY$-leddet trekker automatisk inn mer skatt i oppgang og mindre i nedgang, som demper svingningene.",
    },
    {
      question: "I den åpne modellen med $Q = aY$, hva representerer $a$?",
      options: ["Marginal importtilbøyelighet — en lekkasje ut av innenlandsk etterspørsel", "Den marginale konsumtilbøyeligheten", "Eksportandelen", "Skattesatsen"],
      explanation: "$a$ er økningen i import per krone inntekt; en del av etterspørselen lekker til utlandet.",
    },
    {
      question: "Hva er forskjellen på $z^T$ og $t$ i skattefunksjonen $T = z^T + tY$?",
      options: ["$z^T$ er det eksogene skattenivået; $t$ er den endogene satsen som kobler skatt til inntekt", "De betyr det samme", "$z^T$ er en endogen variabel; $t$ er eksogen inntekt", "$z^T$ er renten; $t$ er tiden"],
      explanation: "$z^T$ er nivået myndighetene setter; $t$ knytter skatten til inntektsnivået.",
    },
    {
      question: "En modell inneholder eksport $X$ og import $Q = aY$. Hva kan du umiddelbart konkludere?",
      options: ["Modellen er for en åpen økonomi", "Modellen er lukket", "Modellen er underbestemt", "Multiplikatoren er lik 1"],
      explanation: "Handelsledd ($X$ og $Q$) betyr at modellen beskriver en åpen økonomi.",
    },
  ],
  'econ1310-2-2': [
    {
      question: "Hva er multiplikatoren i den lukkede modellen med endogen skatt og fast rente?",
      options: ["$m = \\dfrac{1}{1 - c_1(1-t) - b_1}$", "$m = \\dfrac{1}{1 - c_1 - b_1}$", "$m = 1 - c_1(1-t) - b_1$", "$m = \\dfrac{c_1}{1 - c_1(1-t)}$"],
      explanation: "Utledningen gir $\\Delta Y = \\frac{1}{1 - c_1(1-t) - b_1}\\Delta z$. Skatten kommer inn som $c_1(1-t)$.",
    },
    {
      question: "Hva sier stabilitetsvilkåret?",
      options: ["$1 - c_1(1-t) - b_1 > 0$", "$c_1 > 1$", "$b_1 > c_1$", "$t > c_1$"],
      explanation: "Nevneren må være positiv for at multiplikatoren skal være positiv og endelig.",
    },
    {
      question: "Hvorfor er $m > 1$?",
      options: ["Det opprinnelige sjokket utløser runder av økt konsum og investering; 1 delt på et tall mellom 0 og 1 er større enn 1", "Fordi renten er fast", "Fordi skatten er endogen", "Fordi modellen er lukket"],
      explanation: "Nevneren er mellom 0 og 1, så $m>1$; multiplikatorprosessen forsterker det opprinnelige sjokket.",
    },
    {
      question: "Hva er den direkte effekten (lag 1) av et positivt $\\Delta G$?",
      options: ["Offentlige kjøp øker etterspørselen krone for krone; produksjonen stiger umiddelbart med $\\Delta G$", "Skatten stiger automatisk", "Investeringene faller", "Renten kuttes"],
      explanation: "Førsterundeeffekten er den umiddelbare, direkte etterspørselsøkningen fra sjokket selv.",
    },
    {
      question: "Hva demper multiplikatorprosessen?",
      options: ["Skattelekkasjen $t$ (og sparingen)", "Akseleratoren $b_1$", "Den marginale konsumtilbøyeligheten $c_1$ alene", "Renten $i$"],
      explanation: "Høyere $t$ trekker mer inn som skatt, mindre til nytt konsum → mindre multiplikator.",
    },
    {
      question: "Hva forsterker multiplikatorprosessen?",
      options: ["Akseleratoren $b_1$", "Skattesatsen $t$", "Sparingen $1-c_1$", "Importen $a$"],
      explanation: "$b_1$ gjør at investeringene stiger med aktiviteten og legger til ekstra etterspørsel i hver runde.",
    },
    {
      question: "Hva er skattemultiplikatoren?",
      options: ["$\\dfrac{-c_1}{1 - c_1(1-t) - b_1}$", "$\\dfrac{1}{1 - c_1(1-t) - b_1}$", "$\\dfrac{c_1}{1 - c_1(1-t) - b_1}$", "$\\dfrac{-1}{1 - c_1(1-t) - b_1}$"],
      explanation: "Skatten virker via konsumet med faktor $-c_1$; derfor telleren $-c_1$.",
    },
    {
      question: "Hvorfor er skattemultiplikatoren tallmessig svakere enn utgiftsmultiplikatoren?",
      options: ["Skatten virker bare indirekte via konsumet, og bare andelen $c_1<1$ av en skattekrone slår ut i konsum", "Fordi skatt alltid er negativ", "Fordi renten holdes fast", "Fordi modellen er lukket"],
      explanation: "En utgiftskrone virker direkte (faktor 1), en skattekrone bare via $c_1<1$ av konsumet.",
    },
    {
      question: "Et negativt konsumsjokk, $\\Delta z^C < 0$. Hva skjer med BNP?",
      options: ["BNP faller ($\\Delta Y = m\\,\\Delta z^C < 0$)", "BNP stiger", "BNP er uendret", "Fortegnet kan ikke bestemmes"],
      explanation: "$m>0$ og $\\Delta z^C<0$ gir $\\Delta Y<0$.",
    },
    {
      question: "En skatteøkning, $\\Delta z^T > 0$. Hva skjer med BNP?",
      options: ["BNP faller, fordi telleren er $-c_1\\Delta z^T < 0$", "BNP stiger", "BNP er uendret", "BNP dobles"],
      explanation: "Skattemultiplikatoren gir motsatt fortegn av $\\Delta z^T$: økt skatt senker BNP.",
    },
    {
      question: "Hva kan du fastsette om et sjokks virkning uten tallverdier for parametrene?",
      options: ["Fortegnet på $\\Delta Y$, via stabilitetsvilkåret", "Den nøyaktige størrelsen på $m$", "Om $m$ er over eller under 2", "Ingenting"],
      explanation: "Uten tall kan bare fortegnet fastsettes; størrelsen på $m$ krever parameterverdier.",
    },
    {
      question: "Hva blir summen $1 + k + k^2 + \\dots$ når $k = c_1(1-t)+b_1$ og $0<k<1$?",
      options: ["$\\dfrac{1}{1-k} = m$", "$1-k$", "$k$", "$\\dfrac{k}{1-k}$"],
      explanation: "Geometrisk rekke: summen er $1/(1-k) = 1/(1 - c_1(1-t) - b_1) = m$.",
    },
    {
      question: "Hva skjer med multiplikatoren når skattesatsen $t$ øker?",
      options: ["Den blir mindre", "Den blir større", "Den er uendret", "Den blir negativ"],
      explanation: "Høyere $t$ senker $c_1(1-t)$, øker nevneren og reduserer $m$ — skattelekkasjen demper.",
    },
    {
      question: "Hva skjer med multiplikatoren når akseleratoren $b_1$ øker?",
      options: ["Den blir større", "Den blir mindre", "Den er uendret", "Den blir 1"],
      explanation: "Høyere $b_1$ senker nevneren $1 - c_1(1-t) - b_1$ og øker $m$.",
    },
    {
      question: "Hvorfor faller de faste leddene bort når vi går til tilvekstform?",
      options: ["Konstantene endrer seg ikke, så bare endringene i de eksogene størrelsene gjenstår", "Fordi de er negative", "Fordi de inngår i renten", "Fordi $c_1<1$"],
      explanation: "På endringsform ($\\Delta$) forsvinner nivåkonstantene; bare $\\Delta$-ledd står igjen.",
    },
    {
      question: "Hva er disponibel inntekt uttrykt ved $Y$ med endogen skatt $T = z^T + tY$?",
      options: ["$(1-t)Y - z^T$", "$Y - z^T$", "$(1+t)Y$", "$tY - z^T$"],
      explanation: "$Y - T = Y - z^T - tY = (1-t)Y - z^T$.",
    },
    {
      question: "Hva menes med at et negativt sjokk «forsterker seg selv»?",
      options: ["Lavere produksjon gir lavere inntekt, som gir lavere konsum og investering, som gir lavere produksjon — runde etter runde", "At renten kuttes automatisk", "At skatten øker", "At importen faller"],
      explanation: "Multiplikatorprosessen virker nedover; nedgangen forplanter seg i runder, men konvergerer pga. lekkasjer.",
    },
    {
      question: "En krone i skattelette vs. en krone i økte offentlige kjøp — hvilken gir størst BNP-utslag?",
      options: ["Økte offentlige kjøp (virker direkte krone for krone)", "Skatteletten", "De er alltid like", "Kommer an på renten"],
      explanation: "G-multiplikatoren $m$ er større enn skattemultiplikatoren $c_1 m$ fordi $c_1<1$.",
    },
    {
      question: "Hva er første steg i utledningen på tilvekstform?",
      options: ["Sette atferdsligningene for $C$, $I$ og $T$ inn i $Y = C+I+G$", "Regne ut renten", "Finne likevektsledigheten", "Tegne IS-RR-PK-diagrammet"],
      explanation: "Man substituerer atferdsligningene inn i likevektsbetingelsen og samler $Y$-ledd.",
    },
    {
      question: "Hvorfor gir korrekt algebra uten mekanismeforklaring ikke full uttelling?",
      options: ["Sensor krever at mekanismen forklares i to lag (direkte effekt + runder med demper/forsterker)", "Fordi algebra alltid er feil", "Fordi renten mangler", "Fordi skatten er endogen"],
      explanation: "Mekanismeforklaringen i ord er et eksplisitt sensorkrav ved siden av regningen.",
    },
    {
      question: "Hvilke sjokk behandles med den fulle utgiftsmultiplikatoren $m$?",
      options: ["$\\Delta z^C$, $\\Delta z^I$ og $\\Delta G$", "Bare $\\Delta z^T$", "Bare $\\Delta G$", "Bare renteendringer"],
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
      options: ["Nei — telleren $\\Delta z^I - c_1\\Delta z^T$ er positivt minus positivt, altså ubestemt", "Ja, alltid positivt", "Ja, alltid negativt", "Ja, alltid null"],
      explanation: "Investeringsløftet trekker opp, skattestramningen ned; nettofortegnet avhenger av størrelsene.",
    },
    {
      question: "Hva betyr det at $c_1(1-t) + b_1 < 1$ (stabilitetsvilkåret)?",
      options: ["Mindre enn hele inntektskronen kommer tilbake som ny etterspørsel, så rundene dør ut", "At renten er null", "At skatten er eksogen", "At multiplikatoren er negativ"],
      explanation: "Tilbakekoblingen er under 1, så den geometriske rekken konvergerer og $m$ er endelig.",
    },
    {
      question: "Et positivt investeringssjokk $\\Delta z^I > 0$. Hvilken rolle spiller akseleratoren?",
      options: ["Den økte produksjonen trekker med seg ytterligere investeringer ($b_1$ per krone $Y$), som forsterker multiplikatoren", "Den demper virkningen", "Den gjør sjokket eksogent", "Den øker skatten"],
      explanation: "$b_1$ kobler investeringer til aktivitetsnivået og legger ekstra etterspørsel til hver runde.",
    },
    {
      question: "Hvorfor er det galt å bruke utgiftsmultiplikatoren $m$ direkte på et skattesjokk?",
      options: ["Skatten virker via konsumet med faktor $-c_1$, ikke krone for krone", "Fordi $m$ alltid er negativ", "Fordi skatt er eksogen", "Fordi renten er fast"],
      explanation: "Skattesjokk krever skattemultiplikatoren $-c_1/(1 - c_1(1-t) - b_1)$.",
    },
    {
      question: "Hva er nettoeffekten på BNP av et utgiftssjokk sammenlignet med selve sjokket?",
      options: ["Større enn sjokket, fordi $m>1$", "Nøyaktig lik sjokket", "Mindre enn sjokket", "Alltid null"],
      explanation: "Multiplikatorrundene legger til utover den direkte effekten, så $|\\Delta Y| = m|\\Delta z| > |\\Delta z|$.",
    },
    {
      question: "Hva er en typisk feil ved besvarelse av et sjanger E-spørsmål?",
      options: ["Å oppgi bare den direkte effekten uten multiplikatorrundene", "Å tegne to paneler", "Å bruke Holden-notasjon", "Å fastsette fortegnet"],
      explanation: "Å glemme rundene (eller omvendt førsterundeeffekten) er blant de vanligste trekkene.",
    },
    {
      question: "En skattelette $\\Delta z^T < 0$. Hva skjer med BNP?",
      options: ["BNP stiger, fordi $-c_1\\Delta z^T > 0$", "BNP faller", "BNP er uendret", "Fortegnet er ubestemt"],
      explanation: "Med $\\Delta z^T<0$ blir telleren $-c_1\\Delta z^T$ positiv, så $\\Delta Y>0$ — skattelette løfter BNP.",
    },
  ],
  'econ1310-2-3': [
    {
      question: "Hva er den generelle framgangsmåten for å finne en følgestørrelse?",
      options: ["Sett multiplikatoruttrykket $\\Delta Y = m\\,\\Delta z$ inn i størrelsens definisjon og signér", "Tegn IS-RR-PK-diagrammet", "Løs modellen for nivået på $Y$", "Regn ut likevektsledigheten"],
      explanation: "Følgestørrelser finnes mekanisk: definisjon på tilvekstform → sett inn $\\Delta Y$ → signér.",
    },
    {
      question: "Hva er konsumendringen ved et konsumsjokk $\\Delta z^C$ (med $\\Delta z^T = 0$)?",
      options: ["$\\Delta C = \\Delta z^C + c_1(1-t)\\,\\Delta Y$", "$\\Delta C = c_1(1-t)\\,\\Delta Y$", "$\\Delta C = \\Delta z^C$", "$\\Delta C = t\\,\\Delta Y$"],
      explanation: "$\\Delta C$ har en direkte del ($\\Delta z^C$) og en indirekte del ($c_1(1-t)\\Delta Y$).",
    },
    {
      question: "Hva er skatteinngangen på tilvekstform?",
      options: ["$\\Delta T = \\Delta z^T + t\\,\\Delta Y$", "$\\Delta T = t\\,\\Delta Y$ alltid", "$\\Delta T = c_1\\,\\Delta Y$", "$\\Delta T = \\Delta z^T$"],
      explanation: "$T = z^T + tY$ gir $\\Delta T = \\Delta z^T + t\\,\\Delta Y$ — direkte pluss endogent ledd.",
    },
    {
      question: "Hva er budsjettbalansen $B$?",
      options: ["$B = T - G$", "$B = G - T$", "$B = Y - C$", "$B = S - I$"],
      explanation: "Budsjettbalansen (overskudd) er skatteinntekter minus offentlige kjøp, $B = T - G$.",
    },
    {
      question: "Hvorfor er fortegnet på $\\Delta B$ ofte ubestemt ved $\\Delta G < 0$?",
      options: ["Utgiftskuttet trekker balansen opp, mens det endogene skattebortfallet ($t\\,\\Delta Y < 0$) trekker den ned", "Fordi renten endres", "Fordi skatten er eksogen", "Fordi importen faller"],
      explanation: "To motstridende ledd: mindre utgifter vs. mindre skatteinngang fra lavere BNP.",
    },
    {
      question: "Hva er total sparing?",
      options: ["$S = Y - C - C^G$", "$S = Y - T - C$", "$S = Y - G$", "$S = T - G$"],
      explanation: "Total sparing er BNP minus alt konsum, privat $C$ og offentlig $C^G$.",
    },
    {
      question: "Hva er privat sparing?",
      options: ["$S^P = Y - T - C$", "$S^P = Y - C - C^G$", "$S^P = T - G$", "$S^P = Y - G$"],
      explanation: "Privat sparing er husholdningenes disponible inntekt minus deres konsum.",
    },
    {
      question: "Hva er det viktig å skille i sparingsoppgaver (eksplisitt karakterskille V2018)?",
      options: ["Privat sparing $S^P = Y-T-C$ fra total sparing $S = Y-C-C^G$", "Konsum fra investering", "Rente fra inflasjon", "Eksport fra import"],
      explanation: "Å blande de to sparebegrepene er et eksplisitt karakterskille.",
    },
    {
      question: "Hva sier spareparadokset?",
      options: ["En økt sparelyst ($\\Delta z^C<0$) kan senke BNP så mye at samlet sparing ikke øker", "At sparing alltid øker BNP", "At skatt øker sparingen", "At renten bestemmer sparingen"],
      explanation: "Forsøk på å spare mer senker inntekten og dermed sparegrunnlaget — samlet sparing øker ikke.",
    },
    {
      question: "I lukket økonomi, hvilken likhet gjelder alltid mellom sparing og investering?",
      options: ["$S = I$", "$S = C$", "$S = G$", "$S = T$"],
      explanation: "Samlet sparing er lik samlet realinvestering i en lukket økonomi.",
    },
    {
      question: "Ved et positivt $\\Delta G$, hva skjer med skatteinngangen?",
      options: ["Den stiger ($\\Delta T = t\\,\\Delta Y > 0$)", "Den faller", "Den er uendret", "Fortegnet er ubestemt"],
      explanation: "BNP stiger, så det endogene skatteleddet $t\\,\\Delta Y$ er positivt.",
    },
    {
      question: "Hvorfor øker skatteinngangen mindre enn en satsøkning isolert skulle tilsi?",
      options: ["Skatteøkningen senker $Y$, så det indirekte leddet $t\\,\\Delta Y < 0$ demper", "Fordi renten kuttes", "Fordi importen øker", "Fordi $c_1 > 1$"],
      explanation: "Endogen dempning: lavere inntektsgrunnlag reduserer skatteinngangen på marginen.",
    },
    {
      question: "Hva er den direkte komponenten i $\\Delta C$ ved et konsumsjokk?",
      options: ["$\\Delta z^C$", "$c_1(1-t)\\Delta Y$", "$t\\,\\Delta Y$", "$\\Delta G$"],
      explanation: "Den direkte komponenten er det eksogene forbruksskiftet $\\Delta z^C$.",
    },
    {
      question: "Hva er den indirekte komponenten i $\\Delta C$?",
      options: ["$c_1(1-t)\\,\\Delta Y$", "$\\Delta z^C$", "$-c_1\\Delta z^T$", "$t\\,\\Delta Y$"],
      explanation: "Den indirekte komponenten skyldes inntektsendringen: $c_1(1-t)\\Delta Y$.",
    },
    {
      question: "Ved et positivt $\\Delta G$ er $\\Delta B = (t\\,m - 1)\\Delta G$. Hva blir fortegnet?",
      options: ["$\\Delta B < 0$ (balansen forverres), fordi $t\\,m < 1$", "$\\Delta B > 0$", "$\\Delta B = 0$", "Ubestemt"],
      explanation: "$t\\,m < 1$ gir negativ faktor; med $\\Delta G > 0$ blir $\\Delta B < 0$ — skatteinngangen dekker bare en del av utgiftene.",
    },
    {
      question: "Hva er total sparing på tilvekstform ved et sjokk med $\\Delta z^C = 0$ og fast $C^G$?",
      options: ["$\\Delta S = [1 - c_1(1-t)]\\,\\Delta Y$", "$\\Delta S = c_1(1-t)\\,\\Delta Y$", "$\\Delta S = t\\,\\Delta Y$", "$\\Delta S = \\Delta Y$"],
      explanation: "$\\Delta S = \\Delta Y - \\Delta C = \\Delta Y - c_1(1-t)\\Delta Y = [1 - c_1(1-t)]\\Delta Y$.",
    },
    {
      question: "Hva representerer faktoren $1 - c_1(1-t)$ i $\\Delta S$?",
      options: ["Den delen av en inntektskrone som ikke går til privat konsum (spares eller skattlegges)", "Den marginale konsumtilbøyeligheten", "Multiplikatoren", "Skattesatsen alene"],
      explanation: "Det er andelen av inntektsøkningen som ikke konsumeres.",
    },
    {
      question: "Ved en skatteøkning $\\Delta z^T > 0$, hva skjer med privat konsum?",
      options: ["Det faller, både direkte (lavere disponibel inntekt) og indirekte (lavere BNP)", "Det stiger", "Det er uendret", "Bare den direkte effekten virker"],
      explanation: "$\\Delta C = c_1(1-t)\\Delta Y - c_1\\Delta z^T$, begge ledd negative, så konsumet faller.",
    },
    {
      question: "Hva er en klassisk feil ved utledning av $\\Delta C$ ved et konsumsjokk?",
      options: ["Å glemme den direkte komponenten $\\Delta z^C$", "Å ta med skattesatsen", "Å bruke multiplikatoren", "Å signere resultatet"],
      explanation: "$\\Delta C$ har både direkte ($\\Delta z^C$) og indirekte ($c_1(1-t)\\Delta Y$) del.",
    },
    {
      question: "I den enkle modellen uten akselerator ($b_1 = 0$), hva blir $\\Delta S$ ved $\\Delta z^C < 0$?",
      options: ["$\\Delta S = 0$ (uendret)", "$\\Delta S > 0$", "$\\Delta S < 0$ alltid", "$\\Delta S = \\Delta z^C$"],
      explanation: "Med $[1 - c_1(1-t)]m = 1$ blir $\\Delta S = 0$ — spareparadoksets rene form.",
    },
    {
      question: "Hva er nettoinnsparingen på budsjettet ved et utgiftskutt $\\Delta G < 0$?",
      options: ["$(1 - t\\,m)|\\Delta G|$ — mindre enn selve kuttet", "Nøyaktig $|\\Delta G|$", "$m\\,|\\Delta G|$", "Null"],
      explanation: "Det endogene skattebortfallet spiser $t\\,m|\\Delta G|$ av innsparingen, så netto er $(1-t\\,m)|\\Delta G| < |\\Delta G|$.",
    },
    {
      question: "Hvorfor virker det å kutte utgifter i en nedgang «prosyklisk»?",
      options: ["Kuttet senker BNP ytterligere og forsterker nedgangen", "Fordi det øker BNP", "Fordi renten kuttes", "Fordi importen faller"],
      explanation: "Innstramming i nedgang trekker $Y$ enda lenger ned — det forsterker konjunkturen i stedet for å motvirke.",
    },
    {
      question: "Hva må man gjøre når fortegnet på en totaleffekt er ubestemt?",
      options: ["Vise de motstridende leddene og resonnere om hva som er rimelig", "Alltid velge positivt fortegn", "Alltid velge negativt fortegn", "Hoppe over deloppgaven"],
      explanation: "Riktig svar påpeker fortegnsubestemtheten og resonnerer — ikke gjette et bestemt fortegn.",
    },
    {
      question: "Ved et sjokk uten skattenivåendring, hva er skatteinngangen?",
      options: ["$\\Delta T = t\\,\\Delta Y$", "$\\Delta T = \\Delta z^T$", "$\\Delta T = c_1\\,\\Delta Y$", "$\\Delta T = 0$"],
      explanation: "Med $\\Delta z^T = 0$ gjenstår bare det endogene leddet $t\\,\\Delta Y$.",
    },
    {
      question: "Hva er sammenhengen mellom spareparadokset og $S = I$?",
      options: ["Siden $z^I$ er uendret, kan samlet sparing ikke endres — den må følge investeringene", "At sparing alltid overstiger investeringer", "At renten utligner sparing og investering", "At skatt bestemmer investeringene"],
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
      options: ["Importlekkasjen $+a$ øker nevneren, så brøken blir mindre", "Importen øker samlet etterspørsel og forsterker rundene", "Skattesatsen $t$ blir høyere i åpen økonomi", "Investeringsakseleratoren $b_1$ forsvinner i åpen økonomi"],
      explanation: "En del av hver ekstra krone i inntekt går til import og skaper ikke innenlandsk inntekt i neste runde. Denne lekkasjen ($+a$ i nevneren) svekker multiplikatorrundene, så totalmultiplikatoren blir mindre.",
    },
    {
      question: "Hva legger en motsyklisk G-regel $G = z^G - gY$ til i multiplikatorens nevner?",
      options: ["Leddet $+g$", "Leddet $-g$", "Leddet $+g^2$", "Ingenting; regelen påvirker bare budsjettet"],
      explanation: "Med $\\Delta G = -g\\Delta Y$ flyttes $-g\\Delta Y$ over til venstre side og gir $+g$ i nevneren. Regelen virker som en ekstra demping og gjør multiplikatoren enda mindre.",
    },
    {
      question: "Hvorfor kalles endogen skatt ($t > 0$) en automatisk stabilisator?",
      options: ["Den trekker inn mer skatt i oppgang og mindre i nedgang uten nye vedtak, og demper svingningene", "Den øker multiplikatoren og forsterker konjunkturene", "Den holder budsjettbalansen konstant til enhver tid", "Den fjerner behovet for pengepolitikk"],
      explanation: "Leddet $c_1(1-t)$ er mindre enn $c_1$, så multiplikatoren blir mindre med endogen skatt. Skattesystemet demper automatisk sjokk uten politiske vedtak — det er definisjonen på en automatisk stabilisator.",
    },
    {
      question: "Hva skjer med multiplikatoren hvis en endogen skatt gjøres eksogen ($t = 0$)?",
      options: ["Den blir større, fordi skattelekkasjen forsvinner fra nevneren", "Den blir mindre, fordi skatten nå er fast", "Den blir uendret, siden skattenivået er det samme", "Den blir negativ"],
      explanation: "Med $t = 0$ blir nevneren $1 - c_1 - b_1$ i stedet for $1 - c_1(1-t) - b_1$. Siden $c_1(1-t) < c_1$, er nevneren nå mindre og multiplikatoren større. Å fjerne stabilisatoren gjør økonomien mer følsom for sjokk.",
    },
    {
      question: "Et eksportfall ($\\Delta X < 0$) i en åpen økonomi. Hva blir fortegnet på $\\Delta Y$?",
      options: ["Negativt, fordi multiplikatoren er positiv og sjokket negativt", "Positivt, fordi import trekkes fra i likevekten", "Ubestemt uten tallverdier", "Null, fordi eksport og import nettes ut"],
      explanation: "Stabilitetsvilkåret $1 - c_1(1-t) - b_1 + a > 0$ gir positiv multiplikator. Et negativt eksportsjokk gir dermed $\\Delta Y < 0$: BNP faller.",
    },
    {
      question: "Rangeringen av de tre multiplikatorene er:",
      options: ["$m_{\\text{lukket}} > m_{\\text{åpen}} > m_{\\text{regel}}$", "$m_{\\text{regel}} > m_{\\text{åpen}} > m_{\\text{lukket}}$", "$m_{\\text{åpen}} > m_{\\text{lukket}} > m_{\\text{regel}}$", "Alle tre er like store"],
      explanation: "Fra lukket til åpen legges $+a$ til nevneren; fra åpen til regel legges $+g$ til. Flere lekkasjeledd → større nevner → mindre multiplikator. Derfor er den lukkede størst og regelvarianten minst.",
    },
    {
      question: "Hva er prisen for stabiliseringen under en motsyklisk G-regel?",
      options: ["Budsjettbalansen blir endogen — underskudd i nedgang", "Multiplikatoren blir større", "Renten må heves", "Inflasjonen faller under målet"],
      explanation: "$\\Delta B = (t+g)\\Delta Y - \\Delta z^G$. Ved et negativt sjokk faller $Y$, skatten synker og $G$ økes automatisk samtidig → budsjettunderskudd. Stabiliseringen finansieres over budsjettet.",
    },
    {
      question: "Hvorfor virker et årlig krav om budsjettbalanse ($\\Delta G = \\Delta T$) prosyklisk i en nedgang?",
      options: ["Fallende skatteinngang tvinger fram kutt i $G$, som forsterker fallet", "Det tvinger fram økte offentlige kjøp, som forsterker oppgangen", "Det holder BNP helt konstant", "Det øker multiplikatoren i nedgangstider"],
      explanation: "I nedgang er $\\Delta T = t\\Delta Y < 0$. Balansekravet krever $\\Delta G = \\Delta T < 0$, altså kutt i offentlige kjøp — som senker etterspørselen ytterligere og forsterker nedgangen.",
    },
    {
      question: "Hva er den balanserte budsjettmultiplikatoren i den enkle lukkede modellen?",
      options: ["1 — BNP øker like mye som utgiftsøkningen", "0 — skatt og utgift nulles ut", "$\\frac{1}{1-c_1}$", "Negativ, fordi skatten demper konsumet"],
      explanation: "Med $\\Delta G = \\Delta T$ blir $\\Delta Y(1-c_1) = (1-c_1)\\Delta G$, altså $\\Delta Y = \\Delta G$. $G$ virker krone for krone, mens skatteøkningen bare demper konsumet med $c_1 < 1$; nettoeffekten er 1.",
    },
    {
      question: "En student omtaler importlekkasje i en lukket modell. Hva er feilen?",
      options: ["En lukket modell har ingen import — bare variantens egne mekanismer skal brukes", "Ingen feil; import finnes i alle modeller", "Importlekkasjen skulle vært $+g$, ikke $+a$", "Skattelekkasjen skulle vært nevnt i stedet, som er det samme"],
      explanation: "En sentral sensorregel (§5.2) er å bruke bare variantens egne ledd. En lukket modell har $Y = C + I + G$ uten import, så det finnes ingen importlekkasje å omtale.",
    },
    {
      question: "Hva måler den marginale importandelen $a$ i $Q = aY$?",
      options: ["Andelen av en ekstra krone i inntekt som brukes på import", "Det totale importnivået i kroner", "Skattesatsen på importvarer", "Andelen av eksporten som er innenlandsk produsert"],
      explanation: "$a$ er den marginale importtilbøyeligheten: hvor mye av hver ekstra inntektskrone som lekker ut til import. Høyere $a$ gir større importlekkasje og mindre multiplikator.",
    },
    {
      question: "Et positivt eksportsjokk i en åpen økonomi med endogen skatt gir hvilken virkning på budsjettbalansen (eksogen $G$)?",
      options: ["Balansen forbedres, fordi skatteinngangen stiger med aktiviteten", "Balansen forverres, fordi $G$ må økes", "Balansen er uendret", "Balansen blir negativ uansett"],
      explanation: "$\\Delta B = \\Delta T - \\Delta G = t\\Delta Y$ (siden $\\Delta G = 0$). Sjokket løfter $Y$, så $\\Delta T > 0$ og budsjettet forbedres — den endogene skatten trekker inn mer i oppgangen.",
    },
    {
      question: "Hvorfor gir et autonomt ønske om mer import ($\\Delta z^Q > 0$) lavere BNP?",
      options: ["Import er en lekkasje: etterspørsel vris fra innenlandske til utenlandske varer", "Import øker samlet etterspørsel og løfter BNP", "Import øker skatteinngangen direkte", "Import senker importandelen $a$"],
      explanation: "Import inngår med negativt fortegn i $Y = C + I + G + X - Q$. Et autonomt importskift trekker innenlandsk produksjon og inntekt ned: $\\Delta Y = \\frac{-1}{1-c_1(1-t)-b_1+a}\\Delta z^Q < 0$.",
    },
    {
      question: "Hva er stabilitetsvilkåret i den åpne modellen?",
      options: ["$1 - c_1(1-t) - b_1 + a > 0$", "$1 - c_1(1-t) - b_1 + a < 0$", "$c_1(1-t) + b_1 > a$", "$a > b_1$"],
      explanation: "Nevneren må være positiv for at multiplikatoren skal være positiv og endelig. Vilkåret $1 - c_1(1-t) - b_1 + a > 0$ brukes til å fastsette fortegnet på $\\Delta Y$.",
    },
    {
      question: "En modell med både eksogen $T$ og eksogen $G$ rammes av et konsumsjokk. Hva skjer med budsjettbalansen $B = T - G$?",
      options: ["Den er uendret, fordi verken $T$ eller $G$ reagerer på $Y$", "Den forbedres, fordi skatten stiger", "Den forverres, fordi utgiftene stiger", "Den blir null"],
      explanation: "Når både $T$ og $G$ er eksogene, endres de ikke av et $Y$-drevet sjokk. $\\Delta B = \\Delta T - \\Delta G = 0$. En typisk feil (H2020) er å tro at balansen svinger her.",
    },
    {
      question: "Hva skjer med et sjokks BNP-utslag når en motsyklisk G-regel innføres?",
      options: ["Utslaget blir mindre, fordi regelen legger dempingen $+g$ til nevneren", "Utslaget blir større, fordi $G$ nå er aktiv", "Utslaget blir uendret", "Utslaget snur fortegn"],
      explanation: "Regelen øker $G$ automatisk når $Y$ faller (og motsatt), som demper hver multiplikatorrunde. Nevneren får leddet $+g$, multiplikatoren blir mindre, og BNP-utslaget dempes.",
    },
    {
      question: "Hva er forskjellen på en balansert budsjettøkning og et årlig balansekrav?",
      options: ["Den aktive balanserte økningen er ekspansiv (multiplikator $\\geq 1$); balansekravet som reagerer på fallende skatt er prosyklisk", "De er identiske", "Balansekravet er ekspansivt; den aktive økningen er kontraktiv", "Begge har multiplikator lik null"],
      explanation: "En aktiv $\\Delta G = \\Delta T$-økning løfter BNP (Haavelmo, multiplikator 1). Et passivt krav om balanse hvert år tvinger derimot fram kutt i nedgang og forsterker svingningen — det er prosyklisk.",
    },
    {
      question: "Et eksportsjokk og et innenlandsk investeringssjokk av samme størrelse i en åpen modell. Hvordan er BNP-utslagene?",
      options: ["Like store, fordi begge virker gjennom samme multiplikator $m_{\\text{åpen}}$", "Eksportsjokket gir større utslag, fordi eksport ikke lekker", "Investeringssjokket gir alltid null utslag", "Eksportsjokket snur fortegnet"],
      explanation: "Alle autonome etterspørselsledd — enten det er $\\Delta X$ eller $\\Delta z^I$ — samles i $\\Delta z$ og virker gjennom samme multiplikator $\\frac{1}{1-c_1(1-t)-b_1+a}$. Samme størrelse gir samme utslag.",
    },
    {
      question: "Hvilken variant har den minste multiplikatoren?",
      options: ["Åpen økonomi med endogen skatt og motsyklisk G-regel", "Lukket økonomi med eksogen skatt", "Lukket økonomi med endogen skatt", "Åpen økonomi uten G-regel"],
      explanation: "Nevneren har flest lekkasjeledd her: $1 - c_1(1-t) - b_1 + a + g$. Import ($a$), skatt ($t$) og G-regel ($g$) demper alle. Størst nevner → minst multiplikator.",
    },
    {
      question: "Hvorfor er skattemultiplikatoren mindre (i tallverdi) enn G-multiplikatoren?",
      options: ["Skattekutt virker bare indirekte via konsumet ($c_1 < 1$), mens $G$ virker krone for krone", "Skatt lekker ikke til sparing", "G-multiplikatoren har $a$ i telleren", "Skattemultiplikatoren har feil fortegn i nevneren"],
      explanation: "G-multiplikatoren har $1$ i telleren, skattemultiplikatoren $-c_1$. Offentlige kjøp treffer etterspørselen direkte; et skattekutt øker bare disponibel inntekt, og bare andelen $c_1$ av den brukes.",
    },
    {
      question: "Konjunkturavhengige overføringer (som dagpenger) virker i modellen som:",
      options: ["En automatisk stabilisator, lik effekten av skattesatsen $t$", "En diskresjonær engangsendring", "Et rent kostnadssjokk", "En importlekkasje"],
      explanation: "Overføringer som øker i nedgang og faller i oppgang forsterker den automatiske stabiliseringen — de virker som en negativ komponent av nettoskatten og demper svingningene uten nye vedtak.",
    },
    {
      question: "Hva menes med at budsjettet blir «endogent» under en motsyklisk G-regel?",
      options: ["Budsjettbalansen bestemmes av aktivitetsnivået i stedet for å ligge fast", "Budsjettet vedtas av Stortinget hvert år", "Budsjettet er alltid i balanse", "Renten bestemmer budsjettet"],
      explanation: "Med $G = z^G - gY$ avhenger både $G$ og $T$ av $Y$, så $\\Delta B = (t+g)\\Delta Y - \\Delta z^G$. Balansen svinger med konjunkturene — den er blitt en endogen størrelse.",
    },
    {
      question: "En liten åpen økonomi er mindre følsom for innenlandske etterspørselssjokk enn en lukket. Hvorfor?",
      options: ["Importlekkasjen demper multiplikatoren, så sjokk slår svakere ut i BNP", "Eksporten fjerner alle innenlandske sjokk", "Renten justeres automatisk", "Skattesatsen er alltid høyere i åpen økonomi"],
      explanation: "Importlekkasjen $+a$ i nevneren gjør multiplikatoren mindre. En del av etterspørselsendringene lekker ut til utlandet, så innenlandske sjokk gir mindre BNP-utslag — men det bremser også innenlandsk finanspolitikk.",
    },
    {
      question: "I den åpne modellen: hvilke ledd samles i $\\Delta z$ (den autonome etterspørselsendringen)?",
      options: ["$\\Delta z^C, \\Delta z^I, \\Delta z^G$ og $\\Delta z^X$ — alle autonome etterspørselsskift", "Bare $\\Delta z^C$", "$c_1, b_1$ og $a$", "Skattesatsen $t$ og importandelen $a$"],
      explanation: "Multiplikatoren $\\frac{1}{1-c_1(1-t)-b_1+a}$ multipliseres med summen av alle autonome (eksogene) etterspørselsskift. Parametrene $c_1, b_1, t, a$ hører hjemme i nevneren, ikke i $\\Delta z$.",
    },
  ],
  'econ1310-2-5': [
    {
      question: "Hva er første steg i løsningsoppskriften for en «vis matematisk»-oppgave?",
      options: ["Klassifisere modellen: tell ligninger og endogene, avgjør åpen/lukket og endogen/eksogen skatt", "Regne ut følgestørrelsene", "Tegne IS-RR-PK-diagrammet", "Konkludere med et tallsvar"],
      explanation: "Algoritmen starter med klassifisering (sjanger C-åpningen). Du må vite hvilken modellvariant du er i før du kan velge riktig multiplikator og hvilke mekanismer som gjelder.",
    },
    {
      question: "Hvorfor gir ikke korrekt algebra alene full uttelling på sjanger E?",
      options: ["Sensor krever mekanismeforklaring i ord — både direkte effekt og multiplikatorrunder", "Algebra teller ikke i makroøkonomi", "Man må alltid oppgi tallverdier", "Man må tegne et diagram i tillegg"],
      explanation: "§5.7 i sensorveiledningene: matematikk uten ord gir ikke full uttelling. Den to-lags mekanismeforklaringen (direkte + runder, med dempere/forsterker) er selve sensorkravet.",
    },
    {
      question: "Hvordan fastsetter man fortegnet på $\\Delta Y$ etter et sjokk?",
      options: ["Påberop stabilitetsvilkåret (nevneren $> 0$, så $m > 0$) og les av fortegnet på $\\Delta z$", "Anta alltid at BNP stiger", "Regn ut tallverdien først", "Fortegnet kan aldri fastsettes uten data"],
      explanation: "Stabilitetsvilkåret garanterer positiv multiplikator. Da følger fortegnet på $\\Delta Y$ direkte av fortegnet på det autonome sjokket $\\Delta z$ (for skattesjokk snus det av telleren $-c_1$).",
    },
    {
      question: "Et negativt investeringssjokk ($\\Delta z^I < 0$) i lukket økonomi med endogen skatt. Hva blir $\\Delta Y$?",
      options: ["Negativ — positiv multiplikator ganger negativt sjokk", "Positiv — investeringer løfter alltid BNP", "Null", "Ubestemt"],
      explanation: "$\\Delta Y = \\frac{1}{1-c_1(1-t)-b_1}\\Delta z^I$. Nevneren er positiv (stabilitetsvilkår), så $m > 0$; et negativt sjokk gir $\\Delta Y < 0$.",
    },
    {
      question: "Hva er skattemultiplikatoren i den lukkede modellen med endogen skatt?",
      options: ["$\\frac{-c_1}{1 - c_1(1-t) - b_1}$", "$\\frac{1}{1 - c_1(1-t) - b_1}$", "$\\frac{c_1}{1 - c_1(1-t) - b_1}$", "$\\frac{-1}{1 - c_1(1-t) - b_1}$"],
      explanation: "Telleren er $-c_1$: en skatteøkning senker disponibel inntekt og dermed konsumet med andelen $c_1$. Negativt fortegn (skatt opp → BNP ned) og svakere enn G-multiplikatoren fordi $c_1 < 1$.",
    },
    {
      question: "Hvorfor øker skatteinngangen med mindre enn en satsøkning isolert skulle tilsi?",
      options: ["$\\Delta T = \\Delta z^T + t\\Delta Y$; BNP-fallet gir $t\\Delta Y < 0$ som demper satsøkningen", "Fordi skatt aldri påvirker BNP", "Fordi $t$ blir negativ", "Fordi konsumet stiger"],
      explanation: "En skatteøkning senker aktiviteten ($\\Delta Y < 0$), som reduserer skattegrunnlaget. Det endogene leddet $t\\Delta Y$ trekker skatteinngangen ned og motvirker deler av satsøkningen.",
    },
    {
      question: "Hva er budsjettvirkningen $\\Delta B$ av en økning i offentlige kjøp ($\\Delta G > 0$)?",
      options: ["$\\Delta B < 0$ — budsjettet svekkes, fordi $t \\cdot m < 1$", "$\\Delta B > 0$ — budsjettet forbedres alltid", "$\\Delta B = 0$ — alltid balansert", "$\\Delta B = \\Delta G$"],
      explanation: "$\\Delta B = t\\Delta Y - \\Delta G = (tm - 1)\\Delta G$. Siden $tm < 1$ (den økte skatten dekker bare en brøkdel av utgiftsøkningen), er $\\Delta B < 0$: budsjettet svekkes.",
    },
    {
      question: "Hvorfor kan $\\Delta B$ etter et kutt i offentlige kjøp ($\\Delta G < 0$) være fortegnsubestemt i en generell modell?",
      options: ["Skattefallet ($t\\Delta Y < 0$) forverrer, mens utgiftskuttet ($-\\Delta G > 0$) forbedrer — de trekker hver sin vei", "Fordi budsjettbalansen aldri kan beregnes", "Fordi kutt i $G$ ikke påvirker BNP", "Fordi skattesatsen er ukjent"],
      explanation: "To motstridende ledd: kuttet forbedrer balansen direkte, men den svakere aktiviteten senker skatteinngangen. Nettoeffekten avhenger av parametrene og skal flagges eksplisitt — toppkandidat-markøren.",
    },
    {
      question: "Spareparadokset: hva skjer med samlet sparing når husholdningene vil spare mer ($\\Delta z^C < 0$)?",
      options: ["Den kan falle, fordi lavere BNP senker inntekten og dermed sparingen ($S = I = z^I + b_1 Y$)", "Den stiger alltid like mye som spareønsket", "Den blir null", "Den er upåvirket"],
      explanation: "Forbrukskuttet senker BNP. I lukket økonomi er $S = I = z^I + b_1 Y$, så $\\Delta S = b_1\\Delta Y < 0$. Det som er rasjonelt for den enkelte, senker samlet sparing — paradokset.",
    },
    {
      question: "Et eksportfall gir mindre BNP-utslag i åpen enn i lukket økonomi. Hvorfor?",
      options: ["Importlekkasjen $+a$ i nevneren gjør den åpne multiplikatoren mindre", "Eksport teller dobbelt i åpen økonomi", "Renten justeres i åpen økonomi", "Skattesatsen er høyere i åpen økonomi"],
      explanation: "Den åpne nevneren $1-c_1(1-t)-b_1+a$ er større enn den lukkede, så multiplikatoren er mindre. En del av etterspørselsfallet lekker ut via lavere import, som demper hver runde.",
    },
    {
      question: "To autonome sjokk av samme kronestørrelse, $\\Delta z^I$ og $\\Delta z^C$, i samme modell. BNP-utslagene er:",
      options: ["Like store — begge går gjennom samme multiplikator", "$\\Delta z^I$ gir alltid størst utslag", "$\\Delta z^C$ gir alltid størst utslag", "Motsatte fortegn"],
      explanation: "Alle autonome etterspørselsledd samles i $\\Delta z$ og multipliseres med samme $m$. Samme kronestørrelse gir identisk BNP-utslag uansett hvilket $z$-ledd sjokket treffer.",
    },
    {
      question: "Hvilken skatteregime gir størst BNP-utslag av et gitt sjokk?",
      options: ["Eksogen skatt ($t = 0$) — ingen skattelekkasje i rundene", "Endogen skatt ($t > 0$) — sterkest forsterkning", "Begge gir likt utslag", "Avhenger av sjokkets fortegn"],
      explanation: "Med $t = 0$ er nevneren $1-c_1-b_1$, mindre enn $1-c_1(1-t)-b_1$ → større multiplikator. Uten skattelekkasje sirkulerer mer av hver krone videre. Endogen skatt er en automatisk stabilisator.",
    },
    {
      question: "Hva menes med å regne følgestørrelser «ved innsetting»?",
      options: ["Sette multiplikatoruttrykket for $\\Delta Y$ inn i definisjonene av $C$, $T$, $B$, $S$ og signere", "Sette inn tallverdier for parametrene", "Sette opp diagrammet på nytt", "Bytte ut $\\Delta z$ med $\\Delta Y$"],
      explanation: "Sjanger F: man tar det utledede $\\Delta Y = m\\Delta z$ og setter det inn i f.eks. $\\Delta C = \\Delta z^C + c_1(1-t)\\Delta Y$, $\\Delta T = t\\Delta Y$, og fastsetter fortegnet på hver.",
    },
    {
      question: "En G-økning gir større BNP-utslag enn en like stor skattelette. Hvorfor?",
      options: ["G virker krone for krone; skatteletten bare via konsumet ($c_1 < 1$, resten spares)", "Skattelette virker direkte på etterspørselen", "G har en importlekkasje som skattelette ikke har", "De gir alltid like store utslag"],
      explanation: "G-multiplikatorens teller er $1$, skattemultiplikatorens er $c_1 < 1$. Offentlige kjøp treffer etterspørselen direkte; et skattekutt øker bare disponibel inntekt, og bare andelen $c_1$ av den brukes.",
    },
    {
      question: "I en åpen modell med motsyklisk G-regel: hva er nevneren i multiplikatoren?",
      options: ["$1 - c_1(1-t) - b_1 + a + g$", "$1 - c_1(1-t) - b_1$", "$1 - c_1(1-t) - b_1 + a$", "$1 - c_1(1-t) - b_1 - a - g$"],
      explanation: "Importlekkasjen legger $+a$ og G-regelen legger $+g$ til nevneren. Dette er den minste multiplikatoren av variantene, fordi flest lekkasjeledd demper.",
    },
    {
      question: "Hva innebærer sensorregelen «bruk kun variantens egne mekanismer»?",
      options: ["Ikke omtal skatte-, import- eller renteeffekter som ikke finnes i den oppgitte modellen", "Bruk alltid alle mekanismer for sikkerhets skyld", "Utelat mekanismeforklaringen helt", "Bytt modell hvis oppgaven blir vanskelig"],
      explanation: "§5.2: en forenklet variant uten skatt har ingen skattelekkasje å omtale; en lukket modell har ingen importlekkasje. Å dra inn fremmede mekanismer gir trekk (eksplisitt advart mot i H2022).",
    },
    {
      question: "En kombinasjonsoppgave med $\\Delta X < 0$ og $\\Delta z^I > 0$. Når stiger BNP netto?",
      options: ["Når $\\Delta z^I > |\\Delta X|$ — investeringsløftet overgår eksportfallet", "Alltid, siden investeringer stiger", "Aldri, siden eksport faller", "Bare hvis skatten er eksogen"],
      explanation: "De autonome leddene summeres i $\\Delta z = \\Delta z^I + \\Delta X$ og multipliseres med den positive multiplikatoren. Nettofortegnet på $\\Delta Y$ følger fortegnet på summen.",
    },
    {
      question: "Hva er forskjellen på privat sparing og total sparing?",
      options: ["Privat sparing er $S^P = Y - T - C$; total sparing er $S = Y - C - C^G$", "De er alltid like", "Privat sparing inkluderer offentlig konsum", "Total sparing trekker fra skatt"],
      explanation: "§5.5 er en klassisk feilkilde: $S^P = Y - T - C$ (etter skatt) er ikke det samme som total sparing $S = Y - C - C^G$. De må holdes fra hverandre i følgestørrelsesregningen.",
    },
    {
      question: "Hvorfor er determinerthetstesten (sjanger C) standardåpningen på en modelloppgave?",
      options: ["Den bekrefter at likevekten er entydig bestemt — antall ligninger = antall endogene", "Den gir flest poeng av alle deloppgaver", "Den erstatter multiplikatorutledningen", "Den avgjør inflasjonen"],
      explanation: "Man teller og navngir de endogene variablene og sjekker at det er like mange ligninger. Billige, sikre poeng (3–8 %) som må sitte, og som avklarer hvilken variant man arbeider i.",
    },
    {
      question: "Hva demper og hva forsterker multiplikatorrundene i en åpen økonomi med endogen skatt?",
      options: ["Demper: skattelekkasje $t$ og importlekkasje $a$. Forsterker: investeringsakselerator $b_1$", "Demper: $b_1$. Forsterker: $t$ og $a$", "Alt demper; ingenting forsterker", "Renten demper; alt annet forsterker"],
      explanation: "Skatt og import trekker kroner ut av kretsløpet i hver runde (dempere), mens investeringsakseleratoren $b_1$ gjør at høyere aktivitet trekker med seg mer investering (forsterker). Renten er fast her.",
    },
  ],
  'econ1310-3-1': [
    {
      question: "Hvorfor gir én krone i økte offentlige kjøp mer BNP enn én krone i skattelette?",
      options: ["G går direkte inn i etterspørselen, mens skattelette bare virker indirekte via konsum (andel $c_1 < 1$)", "Skattelette går direkte inn i etterspørselen, mens G virker indirekte", "De gir nøyaktig samme BNP-effekt", "G finansieres av oljefondet og teller derfor dobbelt"],
      explanation: "Offentlige kjøp er selv en etterspørselspost — hele kronen starter multiplikatorprosessen. Et skattekutt blir bare til etterspørsel i den grad husholdningene konsumerer det, altså andelen $c_1 < 1$; resten spares.",
    },
    {
      question: "Hvordan ser G-multiplikatoren ut i lukket økonomi med endogen skatt (rente fast)?",
      options: ["$\\frac{1}{1 - c_1(1-t) - b_1}$", "$\\frac{c_1}{1 - c_1(1-t) - b_1}$", "$\\frac{-c_1}{1 - c_1(1-t) - b_1}$", "$\\frac{1}{1 - c_1(1-t) - b_1 + a}$"],
      explanation: "G-multiplikatoren har telleren 1 fordi hele G-sjokket går inn i etterspørselen. Telleren $c_1$ hører til skattemultiplikatoren, og $+a$ i nevneren hører til åpen økonomi.",
    },
    {
      question: "Hvorfor er skattemultiplikatoren mindre i tallverdi enn G-multiplikatoren?",
      options: ["Fordi telleren er $c_1 < 1$ i stedet for 1 — bare andelen $c_1$ av en skatteendring blir etterspørsel", "Fordi skatt har en helt annen nevner", "Fordi skatt virker gjennom investeringene i stedet for konsumet", "Fordi skattemultiplikatoren er positiv og G-multiplikatoren negativ"],
      explanation: "De har samme nevner, men skattemultiplikatoren har telleren $c_1$ (i tallverdi) mens G har 1. Siden $0 < c_1 < 1$, blir skatt svakest — resten av skatteendringen slår ut i sparing.",
    },
    {
      question: "Hva blir nettoeffekten på BNP av å øke G og finansiere det med en like stor eksogen skatteøkning?",
      options: ["Positiv — den balanserte budsjettmultiplikatoren $\\frac{1-c_1}{1 - c_1(1-t) - b_1}$ er større enn null", "Null, fordi G-økningen og skatteøkningen opphever hverandre", "Negativ, fordi skatt virker sterkere enn G", "Alltid nøyaktig lik $c_1$"],
      explanation: "Utledningen gir $\\Delta Y = \\frac{(1-c_1)\\Delta G}{1 - c_1(1-t) - b_1} > 0$. G løfter med full krone, skatten demper bare med andelen $c_1$, så differansen $(1-c_1)$ er positiv.",
    },
    {
      question: "I den enkleste modellen uten skattelekkasje og investeringsakselerator ($t = 0$, $b_1 = 0$) er den balanserte budsjettmultiplikatoren lik:",
      options: ["1", "0", "$c_1$", "$\\frac{1}{1-c_1}$"],
      explanation: "$\\frac{1-c_1}{1 - c_1} = 1$. Dette er den klassiske balanserte budsjettmultiplikatoren: en G-økning fullfinansiert av skatt løfter BNP med nøyaktig beløpet i den enkleste modellen.",
    },
    {
      question: "Hva er en automatisk stabilisator?",
      options: ["Et trekk ved budsjettet som demper konjunktursvingninger uten nye politiske vedtak", "Et engangsvedtak om økt G i en krise", "En regel om at budsjettet alltid skal balanseres", "Sentralbankens rentesetting"],
      explanation: "Automatiske stabilisatorer, som den endogene skatten $t$, demper svingninger av seg selv — skatteinngangen $tY$ stiger i oppgang og faller i nedgang uten at noe må vedtas.",
    },
    {
      question: "Hvilken parameter er den viktigste automatiske stabilisatoren i Keynes-modellen?",
      options: ["Skattesatsen $t$ i den endogene skatten $T = z^T + tY$", "Den marginale konsumtilbøyeligheten $c_1$", "Investeringsakseleratoren $b_1$", "Den eksogene skatten $z^T$"],
      explanation: "Skattesatsen $t$ gjør skatteinngangen konjunkturfølsom: den trekker inn kjøpekraft i oppgang og slipper til kjøpekraft i nedgang, helt automatisk.",
    },
    {
      question: "Hva skjer med multiplikatoren når skattesatsen $t$ øker?",
      options: ["Den blir mindre — skattelekkasjen demper hver multiplikatorrunde", "Den blir større fordi staten får mer penger", "Den er upåvirket av $t$", "Den blir negativ"],
      explanation: "En høyere $t$ gjør leddet $c_1(1-t)$ mindre, altså nevneren $1 - c_1(1-t) - b_1$ større og multiplikatoren mindre. Sterkere automatisk stabilisering gir svakere konjunkturutslag.",
    },
    {
      question: "Hva er forskjellen på automatisk og diskresjonær finanspolitikk?",
      options: ["Automatiske stabilisatorer virker uten vedtak; diskresjonær politikk krever aktive beslutninger", "Automatisk politikk krever vedtak, diskresjonær ikke", "Det er ingen forskjell — begrepene er synonyme", "Automatisk politikk gjelder bare skatt, diskresjonær bare G"],
      explanation: "Automatiske stabilisatorer (som $t$) demper svingninger av seg selv. Diskresjonær politikk er bevisste vedtak om å endre G eller skattesatser, og møter besluttnings- og virkningslag.",
    },
    {
      question: "Hva er besluttningslaget ved diskresjonær finanspolitikk?",
      options: ["Tiden fra et behov oppstår til tiltaket faktisk vedtas", "Tiden fra vedtaket til det virker i økonomien", "Tiden det tar for skatten å bli betalt inn", "Forsinkelsen i sentralbankens rentebeslutninger"],
      explanation: "Besluttningslaget er tiden det tar å utrede, behandle og vedta et tiltak. Virkningslaget kommer i tillegg — fra vedtak til effekt i økonomien.",
    },
    {
      question: "Landet vil stramme inn budsjettet med minst mulig BNP-skade. Hvilket virkemiddel bør velges?",
      options: ["Skatteøkning, fordi skatt virker svakest på etterspørselen per krone", "G-kutt, fordi det gir størst innsparing", "Begge gir nøyaktig samme BNP-skade", "Rentekutt fra sentralbanken"],
      explanation: "Speilvendt av stimulans-argumentet: et G-kutt fjerner en full krone fra etterspørselen, en skatteøkning bare andelen $c_1$. Skatt gir derfor minst aktivitetsskade per innsparte krone.",
    },
    {
      question: "Hvorfor kalles det å kutte G i en nedgangskonjunktur for å balansere budsjettet 'prosyklisk'?",
      options: ["Fordi det forsterker nedgangen i stedet for å dempe den", "Fordi det demper nedgangen ekstra effektivt", "Fordi det bare påvirker inflasjonen", "Fordi det øker den automatiske stabiliseringen"],
      explanation: "Når skatteinntektene faller i en nedgang og staten kutter G for å balansere budsjettet, trekkes etterspørselen ytterligere ned — politikken forsterker konjunkturbevegelsen (prosyklisk).",
    },
    {
      question: "Et skattekutt på 100 kr med $c_1 = 0{,}8$: hvor mye øker konsumet i første runde?",
      options: ["80 kr (andelen $c_1$ av kuttet)", "100 kr (hele kuttet)", "20 kr", "0 kr — skatt påvirker ikke konsum"],
      explanation: "Husholdningene bruker andelen $c_1 = 0{,}8$ av den økte disponible inntekten på konsum: $0{,}8 \\cdot 100 = 80$ kr. De resterende 20 kr spares (sparelekkasjen).",
    },
    {
      question: "Hva er sparelekkasjen ved et skattekutt?",
      options: ["Den delen $(1 - c_1)$ av den økte disponible inntekten som spares i stedet for å konsumeres", "Den delen som betales tilbake som skatt", "Hele skattekuttet", "Investeringene som følger av høyere BNP"],
      explanation: "Bare $c_1$ av et skattekutt blir konsum; andelen $(1 - c_1)$ spares. Denne sparelekkasjen er grunnen til at skatt virker svakere enn G.",
    },
    {
      question: "Hvorfor forsterker investeringsakseleratoren $b_1$ multiplikatorprosessen?",
      options: ["Fordi høyere aktivitet trekker med seg mer investering, som løfter etterspørselen ytterligere", "Fordi den demper skattelekkasjen", "Fordi den gjør skattemultiplikatoren negativ", "Fordi den bare påvirker importen"],
      explanation: "Med $I = z^I + b_1 Y$ øker investeringene når $Y$ stiger. Det legger til ekstra etterspørsel i hver multiplikatorrunde, og gjør nevneren mindre — altså multiplikatoren større.",
    },
    {
      question: "Hva menes med ekspansiv finanspolitikk?",
      options: ["Økt G eller skattelette som løfter samlet etterspørsel", "Kutt i G eller skatteøkning som demper etterspørselen", "At sentralbanken kutter renten", "At budsjettet alltid holdes i balanse"],
      explanation: "Ekspansiv finanspolitikk øker samlet etterspørsel — typisk brukt i lavkonjunktur. Kontraktiv finanspolitikk (kutt i G eller skatteøkning) demper etterspørselen.",
    },
    {
      question: "Hvilket argument taler for å la automatiske stabilisatorer ta mye av konjunkturjobben?",
      options: ["De virker umiddelbart, uten besluttnings- og virkningslag", "De opphever alltid sjokket fullstendig", "De krever hyppige politiske vedtak", "De er alltid sterkere enn aktiv finanspolitikk"],
      explanation: "Automatiske stabilisatorer virker med en gang, uten forsinkelser fra vedtak og iverksetting. Ulempen er at de bare demper, ikke opphever, så store sjokk kan kreve aktiv politikk i tillegg.",
    },
    {
      question: "En eksportsvikt trekker BNP ned. Hvordan virker den endogene skatten som støtdemper?",
      options: ["Skatteinngangen $tY$ faller automatisk, slik at disponibel inntekt og konsum faller mindre", "Skatteinngangen øker og forsterker fallet", "Skatten er uendret fordi den er eksogen", "Sentralbanken senker skatten ved vedtak"],
      explanation: "Når $Y$ faller, faller $tY$ automatisk. Husholdningene beholder en større andel av inntektsfallet som disponibel inntekt, slik at konsum- og BNP-fallet dempes — uten noe vedtak.",
    },
    {
      question: "Hva sier stabilitetsvilkåret $1 - c_1(1-t) - b_1 > 0$ om multiplikatoren?",
      options: ["Nevneren er positiv og mindre enn 1, slik at multiplikatoren er positiv og større enn 1", "Multiplikatoren er negativ", "Multiplikatoren er nøyaktig lik 1", "Multiplikatoren er udefinert"],
      explanation: "Vilkåret garanterer en positiv nevner mindre enn 1 (siden $c_1(1-t) + b_1 > 0$), slik at $m = \\frac{1}{1 - c_1(1-t) - b_1} > 1$. Fortegnet skal alltid fastsettes eksplisitt.",
    },
    {
      question: "Hva er budsjettbalansen $B$, og hvordan endres den på tilvekstform?",
      options: ["$B = T - G$, og $\\Delta B = \\Delta T - \\Delta G$", "$B = G - T$, og $\\Delta B = \\Delta G - \\Delta T$", "$B = Y - C$, og $\\Delta B = \\Delta Y - \\Delta C$", "$B = C + I + G$"],
      explanation: "Budsjettbalansen er skatteinntekter minus offentlige kjøp, $B = T - G$. På endringsform blir $\\Delta B = \\Delta T - \\Delta G$, som brukes til å analysere hvordan finanspolitiske tiltak slår ut på over-/underskuddet.",
    },
  ],
  'econ1310-3-2': [
    {
      question: "Hva sier handlingsregelen om bruk av oljepenger?",
      options: ["Bruken skal over tid tilsvare forventet realavkastning av SPU (om lag 3 %), målt ved det strukturelle oljekorrigerte underskuddet", "Nøyaktig 3 % av fondet skal brukes hvert eneste år", "Hele den årlige oljeinntekten skal brukes over statsbudsjettet", "Fondet skal tømmes gradvis over 20 år"],
      explanation: "Regelen knytter bruken til forventet realavkastning (~3 %) over tid, målt ved det strukturelle underskuddet. Den vanligste feilen er å si «3 % hvert år» — regelen er konjunkturfleksibel.",
    },
    {
      question: "Hvorfor er formuleringen «over tid» sentral i handlingsregelen?",
      options: ["Fordi man kan bruke mindre enn 3 % i oppgang og mer i nedgang, slik at politikken jevner ut konjunkturene", "Fordi 3 % skal brukes presist hvert år uansett konjunktur", "Fordi fondet bare vokser over tid", "Fordi regelen bare gjaldt fram til 2017"],
      explanation: "«Over tid» gir konjunkturfleksibilitet: mindre bruk i gode tider, mer i dårlige. Slik virker finanspolitikken konjunkturutjevnende i stedet for prosyklisk.",
    },
    {
      question: "Hva er Statens pensjonsfond utland (SPU)?",
      options: ["Fondet der statens netto kontantstrøm fra petroleumsvirksomheten plasseres, investert i utlandet", "Statens driftskonto for løpende utgifter", "Et fond som bare investerer i norsk industri", "Norges Banks valutareserver"],
      explanation: "SPU («oljefondet») samler statens oljeinntekter og investerer dem i utlandet, både for avkastning og for å skjerme fastlandsøkonomien mot for stor og svingende oljepengebruk.",
    },
    {
      question: "Hvorfor investeres SPU i utlandet framfor i norsk økonomi?",
      options: ["For å skjerme fastlandsøkonomien mot for stort press på etterspørsel, kostnader og kronekurs", "Fordi norske investeringer er forbudt ved lov", "Fordi utenlandske investeringer aldri kan tape verdi", "For å slippe å betale skatt"],
      explanation: "Ved å plassere pengene ute unngår man at hele oljeinntekten løftes rett inn i norsk økonomi, noe som ellers ville presset opp etterspørsel, kostnadsnivå og kronekurs (hollandsk syke).",
    },
    {
      question: "Hva er det oljekorrigerte underskuddet?",
      options: ["Det faktiske budsjettunderskuddet utenom petroleumsinntektene, som svinger med konjunkturen", "Det konjunkturrensede underskuddet som regelen styrer etter", "Fondets samlede verdi", "Overskuddet på handelsbalansen"],
      explanation: "Det oljekorrigerte underskuddet er det faktiske hullet i budsjettet når man ser bort fra oljeinntektene. Det svinger med konjunkturen — skatteinntekter faller i nedgang og utgifter stiger.",
    },
    {
      question: "Hva er det strukturelle oljekorrigerte underskuddet?",
      options: ["Det oljekorrigerte underskuddet renset for konjunktursvingninger — den underliggende oljepengebruken", "Det faktiske underskuddet i det aktuelle året", "Underskuddet inkludert alle oljeinntekter", "Fondets forventede avkastning"],
      explanation: "Det strukturelle tallet fjerner konjunktureffekten og viser den underliggende, politisk bestemte bruken. Det er dette handlingsregelen måler mot 3 %-banen.",
    },
    {
      question: "Hvorfor styrer finanspolitikken etter det strukturelle framfor det faktiske underskuddet?",
      options: ["For å unngå prosyklisk politikk — det faktiske underskuddet svinger med konjunkturen", "Fordi det strukturelle tallet alltid er større", "Fordi det faktiske underskuddet ikke kan måles", "Fordi EU krever det"],
      explanation: "Det faktiske (oljekorrigerte) underskuddet stiger automatisk i nedgang. Styrte man etter det, måtte man kuttet i nedgang — prosyklisk. Det strukturelle tallet renser bort konjunktureffekten.",
    },
    {
      question: "Hvorfor ble bruksbanen i handlingsregelen nedjustert fra 4 % til 3 % i 2017?",
      options: ["Fordi forventet realavkastning i finansmarkedene hadde falt", "Fordi fondet ble mindre", "Fordi oljeprisen steg", "Fordi Norge gikk ut av regelen"],
      explanation: "Anslaget for forventet realavkastning ble justert ned i takt med lavere avkastningsnivå i markedene. For å bevare fondets realverdi måtte innfasingen tilpasses, fra 4 % til om lag 3 %.",
    },
    {
      question: "Hva innebærer det at bare realavkastningen av fondet brukes?",
      options: ["Fondets realverdi holdes i prinsippet uendret, slik at også framtidige generasjoner får glede av det", "At fondet tømmes over tid", "At avkastningen reinvesteres i sin helhet", "At bruken øker hvert år uansett"],
      explanation: "Ved å bruke kun realavkastningen (justert for prisstigning) bevares fondets realverdi. Dette er begrunnet i generasjonshensynet — oljeformuen er midlertidig og skal fordeles rettferdig.",
    },
    {
      question: "Hva menes med «hollandsk syke» i debatten om oljepengebruk?",
      options: ["At store oljeinntekter via høyt kostnadsnivå og sterk krone svekker og fortrenger konkurranseutsatt industri", "At oljeprisen faller og gir budsjettunderskudd", "At fondet taper penger i utlandet", "At skattene blir for høye"],
      explanation: "Rask innfasing av oljepenger løfter innenlandsk kostnadsnivå og styrker kronen, noe som svekker eksportindustrien. Dette er et sentralt motargument mot for høy oljepengebruk.",
    },
    {
      question: "Hvordan virker handlingsregelen sammen med de automatiske stabilisatorene?",
      options: ["Den lar det faktiske underskuddet svinge med konjunkturen, slik at skattelekkasjen $t$ får virke fritt", "Den opphever de automatiske stabilisatorene", "Den krever innstramming hver gang skatteinntektene faller", "Den erstatter behovet for skatt"],
      explanation: "Ved å styre det strukturelle underskuddet lar regelen det faktiske underskuddet svinge — større i nedgang. De automatiske stabilisatorene (den endogene skatten $t$) får dermed dempe svingningene uten motsyklisk innstramming.",
    },
    {
      question: "En regjering vil bruke langt mer enn realavkastningen for å finansiere et velferdsløft nå. Hvilket hovedhensyn taler mot dette?",
      options: ["Generasjonshensynet — det tærer på fondets realverdi og reduserer hva framtidige generasjoner kan bruke", "At skattene da må settes til null", "At fondet må flyttes til Norge", "At renten automatisk faller"],
      explanation: "Å bruke mer enn realavkastningen tærer på fondets realverdi. Generasjonshensynet — rettferdig fordeling av en midlertidig formue — er et hovedargument for å holde seg til avkastningen.",
    },
    {
      question: "Hva er finanspolitisk handlingsrom?",
      options: ["Rommet til å øke utgifter eller senke skatter uten å bryte handlingsregelen", "Størrelsen på oljefondet", "Sentralbankens rentemargin", "Forskjellen mellom BNP og BNI"],
      explanation: "Handlingsrommet er hvor mye myndighetene kan bruke innenfor regelen. Stor oljepengebruk i dag reduserer handlingsrommet i framtiden.",
    },
    {
      question: "Hva er fastlands-BNP?",
      options: ["BNP utenom olje- og gassvirksomhet og utenriks sjøfart", "Samlet BNP inkludert oljesektoren", "Bare offentlig sektors verdiskaping", "Fondets avkastning"],
      explanation: "Fastlands-BNP måler den underliggende norske økonomien uten oljesektorens store, svingende og midlertidige bidrag, og gir et bedre bilde av konjunktursituasjonen.",
    },
    {
      question: "Hvorfor er rask innfasing av oljepenger et problem i en liten åpen økonomi?",
      options: ["Den løfter etterspørsel og kostnadsnivå og styrker kronen, som svekker konkurranseutsatt eksportsektor", "Den senker alltid inflasjonen", "Den har ingen realøkonomiske virkninger", "Den styrker eksportsektoren"],
      explanation: "I en liten åpen økonomi virker økt etterspørsel og sterkere krone direkte på konkurranseevnen. Rask innfasing gir hollandsk syke, derfor argumentet for gradvis innfasing.",
    },
  ],
  'econ1310-4-1': [
    {
      question: "Hva uttrykker priskurven $\\frac{W}{P} = \\frac{A}{1+\\mu}$?",
      options: ["Hvilken reallønn bedriftenes prissetting tillater", "Hvilken reallønn fagforeningene krever ved gitt ledighet", "Sammenhengen mellom inflasjon og ledighet", "Hvor mye BNP øker ved et etterspørselssjokk"],
      explanation: "Priskurven følger av at bedriftene setter pris som påslag over lønnskostnad; reallønnen som blir igjen til arbeiderne er $\\frac{A}{1+\\mu}$.",
    },
    {
      question: "Hvorfor er priskurven vannrett i $(u, W/P)$-diagrammet?",
      options: ["Fordi reallønnen bedriftene tillater er uavhengig av ledigheten", "Fordi reallønnen stiger med ledigheten", "Fordi lønnskravene faller med ledigheten", "Fordi påslaget øker med ledigheten"],
      explanation: "$\\frac{A}{1+\\mu}$ inneholder ikke $u$, så prissettingen gir samme reallønnstak uansett ledighet.",
    },
    {
      question: "Hvorfor faller lønnskurven i ledigheten $u$?",
      options: ["Fordi høyere ledighet svekker arbeidstakernes forhandlingsmakt og dermed lønnskravet", "Fordi høyere ledighet hever produktiviteten", "Fordi bedriftene tar høyere påslag når ledigheten er høy", "Fordi prisene faller når ledigheten stiger"],
      explanation: "Ledighet disiplinerer lønnskravene: er mange ledige, tør ikke arbeiderne kreve like mye.",
    },
    {
      question: "Hva er likevektsledigheten $u^n$?",
      options: ["Ledigheten der lønns- og priskurven krysser, uten pris- og lønnspress", "Ledigheten når hele arbeidsstyrken er sysselsatt", "Den høyeste ledigheten økonomien kan tåle", "Ledigheten som følger av et negativt etterspørselssjokk"],
      explanation: "I skjæringen er lønnsforhandlingenes krav akkurat forenlig med det prissettingen tillater — den eneste ledigheten uten press.",
    },
    {
      question: "Fagforeningene styrkes varig ($z^W$ øker). Hva skjer med den langsiktige reallønnen?",
      options: ["Den er uendret — priskurven låser den", "Den stiger varig", "Den faller varig", "Den blir null"],
      explanation: "$z^W$ flytter bare lønnskurven; priskurven står stille, så reallønnen i den nye skjæringen er den samme.",
    },
    {
      question: "Fagforeningene styrkes varig ($z^W$ øker). Hva skjer med likevektsledigheten $u^n$?",
      options: ["Den stiger", "Den faller", "Den er uendret", "Den blir negativ"],
      explanation: "Lønnskurven skyves opp; ny skjæring med den uendrede priskurven ligger lenger til høyre → høyere $u^n$.",
    },
    {
      question: "Hva skjer med reallønn og $u^n$ når bedriftenes påslag $\\mu$ faller (mer konkurranse)?",
      options: ["Høyere reallønn og lavere $u^n$", "Lavere reallønn og høyere $u^n$", "Uendret reallønn og lavere $u^n$", "Høyere reallønn og høyere $u^n$"],
      explanation: "Lavere $\\mu$ løfter priskurven; skjæringen med lønnskurven flyttes opp og til venstre → høyere reallønn OG lavere ledighet.",
    },
    {
      question: "Hvilken variabel skifter lønnskurven?",
      options: ["$z^W$ (lønnspresset)", "$\\mu$ (påslaget)", "$A$ alene", "Produksjonsgapet"],
      explanation: "$z^W$ samler alt som hever lønnskravet ved gitt ledighet; $\\mu$ og $A$ flytter derimot priskurven.",
    },
    {
      question: "En sjenerøs ledighetstrygd (høy kompensasjonsgrad) virker i modellen som...",
      options: ["økt lønnspress ($z^W \\uparrow$), som hever $u^n$", "lavere påslag, som senker $u^n$", "høyere produktivitet, som hever reallønnen", "et positivt etterspørselssjokk"],
      explanation: "Høy kompensasjonsgrad hever reservasjonslønna og lønnskravet → lønnskurven opp → høyere likevektsledighet.",
    },
    {
      question: "Hva menes med at bedriftene driver påslagsprising?",
      options: ["De setter prisen som et påslag $\\mu$ over marginalkostnaden", "De setter prisen lik marginalkostnaden", "De setter prisen lik konkurrentenes", "De setter prisen etter styringsrenten"],
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
      options: ["senke lønnspresset $z^W$, slik at $u^n$ faller", "heve påslaget $\\mu$", "heve reallønnen varig", "skifte priskurven ned"],
      explanation: "Koordinering demper samlet lønnskrav → lønnskurven ned → lavere $u^n$, med uendret langsiktig reallønn.",
    },
    {
      question: "En student konkluderer med at sterkere fagforeninger gir varig høyere reallønn. Hva er feilen?",
      options: ["Reallønnen låses av priskurven, som ikke flytter seg — bare $u^n$ endres", "Reallønnen faller alltid ved sterkere fagforeninger", "Fagforeninger påvirker ikke lønn i det hele tatt", "Priskurven flytter seg opp, ikke lønnskurven"],
      explanation: "$z^W$ skifter lønnskurven, ikke priskurven; siden priskurven bestemmer reallønnen, er den uendret.",
    },
    {
      question: "Hvor i $(u, W/P)$-diagrammet ligger reallønnen i likevekt?",
      options: ["På priskurvens nivå, i skjæringen med lønnskurven", "Alltid over priskurven", "Alltid under lønnskurven ved $u = 0$", "Der lønnskurven møter den loddrette aksen"],
      explanation: "Likevekten er skjæringspunktet, og reallønnen der er nettopp priskurvens verdi $\\frac{A}{1+\\mu}$.",
    },
    {
      question: "Hva er reallønnen $W/P$ et uttrykk for?",
      options: ["Kjøpekraften i lønna — hvor mye varer lønna rekker til", "Den nominelle kronelønna", "Skatten på arbeid", "Bedriftenes overskudd"],
      explanation: "Nominell lønn delt på prisnivå måler hva lønna faktisk kan kjøpe.",
    },
    {
      question: "Ligger faktisk ledighet lavere enn $u^n$, hva skjer ifølge modellen?",
      options: ["Lønnskravet overstiger priskurvens tak, og pris-/lønnspresset driver ledigheten tilbake mot $u^n$", "Ingenting — økonomien blir værende der", "Reallønnen faller permanent", "$u^n$ synker til det nye nivået"],
      explanation: "Ved $u < u^n$ er arbeiderne så sterke at kravet overstiger prissettingens tak → prisøkning → tilbake mot $u^n$.",
    },
    {
      question: "En større skattekile på arbeid virker i modellen typisk som...",
      options: ["økt lønnspress som kan heve $u^n$", "lavere påslag som senker $u^n$", "et positivt produktivitetssjokk", "et etterspørselssjokk på kort sikt"],
      explanation: "Arbeiderne krever høyere bruttolønn for å opprettholde netto → lønnskurven opp → høyere likevektsledighet.",
    },
    {
      question: "Hvilket av tiltakene senker $u^n$ ved å løfte priskurven (ikke lønnskurven)?",
      options: ["Sterkere konkurranse i produktmarkedene (lavere $\\mu$)", "Mer sjenerøs ledighetstrygd", "Sterkere fagforeninger", "Høyere minstelønn"],
      explanation: "Konkurransepolitikk senker påslaget $\\mu$ → priskurven opp → lavere $u^n$ og høyere reallønn. De øvrige hever $z^W$.",
    },
    {
      question: "Hvorfor er lønns- og priskurvemodellen fundamentet for Phillips-kurven?",
      options: ["Fordi den bestemmer $u^n$ og $Y^n$, som avvik måles fra i Phillips-kurven", "Fordi den gir styringsrenten direkte", "Fordi den erstatter Keynes-modellen på kort sikt", "Fordi den bestemmer valutakursen"],
      explanation: "Produksjonsgapet i Phillips-kurven er $\\frac{Y-Y^n}{Y^n}$, og $Y^n$ (via $u^n$) fastsettes nettopp her.",
    },
  ],
  'econ1310-4-2': [
    {
      question: "Hvordan skrives Phillips-kurven i Holden-form?",
      options: ["$\\pi = \\pi^e + \\beta\\frac{Y-Y^n}{Y^n} + z^\\pi$", "$\\pi = \\pi^e - \\beta\\frac{Y-Y^n}{Y^n} + z^\\pi$", "$\\pi = \\beta(Y - Y^n) + z^\\pi$", "$Y = Y^n + \\beta(\\pi - \\pi^e)$"],
      explanation: "Inflasjonen er forventet inflasjon pluss et positivt bidrag fra det relative produksjonsgapet pluss kostnadssjokket.",
    },
    {
      question: "Hva er første ledd i kausalkjeden bak $\\beta$ etter et høyere produksjonsgap?",
      options: ["Lavere ledighet", "Høyere marginalkostnad", "Høyere inflasjon", "Svakere krone"],
      explanation: "Økt produksjon krever mer arbeidskraft, så ledigheten faller under $u^n$.",
    },
    {
      question: "Hvilket ledd i kausalkjeden hoppes oftest over ifølge sensor?",
      options: ["Marginalkostnad → pris settes som påslag over marginalkostnad", "Lavere ledighet → sterkere forhandlingsmakt", "Høyere gap → lavere ledighet", "Høyere lønn → høyere inflasjon direkte"],
      explanation: "Uten leddet marginalkostnad→påslagsprising henger kjeden i løse lufta; det er broen fra lønn til pris.",
    },
    {
      question: "Hva fanger $z^\\pi$ i Phillips-kurven?",
      options: ["Kostnadssjokk som energi, importpriser og råvarer", "Forventet inflasjon", "Produksjonsgapet", "Sentralbankens styringsrente"],
      explanation: "$z^\\pi$ er skiftvariabelen for kostnadsdrevet inflasjon uavhengig av innenlandsk gap.",
    },
    {
      question: "Hva betyr det at $\\beta > 0$?",
      options: ["Et positivt produksjonsgap presser inflasjonen opp", "Inflasjonen er alltid positiv", "Ledigheten øker med inflasjonen", "Forventningene er forankret"],
      explanation: "$\\beta$ er helningen; positiv $\\beta$ betyr at høyere gap gir høyere inflasjon.",
    },
    {
      question: "Hva er produksjonsgapet i Phillips-kurven?",
      options: ["$\\frac{Y-Y^n}{Y^n}$ — det relative avviket fra potensielt BNP", "$Y - Y^n$ i kroner", "$\\frac{Y^n}{Y}$", "Avviket mellom faktisk og forventet inflasjon"],
      explanation: "Gapet normaliseres med $Y^n$ og er dimensjonsløst; å utelate nevneren er en klassisk feil.",
    },
    {
      question: "Hvorfor gir lav ledighet høyere lønnsvekst i kausalkjeden?",
      options: ["Fordi knapp arbeidskraft styrker arbeidstakernes forhandlingsmakt", "Fordi bedriftene får høyere påslag", "Fordi produktiviteten faller", "Fordi importprisene stiger"],
      explanation: "Med få ledige står arbeiderne sterkt i forhandlingene og presser fram høyere lønn.",
    },
    {
      question: "En svakere krone gir dyrere import. Hvor treffer det Phillips-kurven?",
      options: ["Som et positivt kostnadssjokk $z^\\pi$", "Som høyere $\\pi^e$", "Som et positivt produksjonsgap", "Som lavere $\\beta$"],
      explanation: "Importert inflasjon er en kostnadsøkning utenfra og løftes inn via $z^\\pi$ (kobling til kap. 1.5).",
    },
    {
      question: "Hva er forskjellen på $z^\\pi$ og $\\pi^e$?",
      options: ["$z^\\pi$ er en faktisk kostnadsøkning utenfra; $\\pi^e$ er forventet prisvekst innbakt i atferd", "De er to navn på det samme", "$z^\\pi$ er forventninger; $\\pi^e$ er kostnader", "$z^\\pi$ gjelder ledighet, $\\pi^e$ gjelder produksjon"],
      explanation: "Å blande de to er en av de hyppigst påpekte feilene; de krever ulik pengepolitisk respons.",
    },
    {
      question: "Under hvilken markedsform veltes høyere marginalkostnad over i prisene?",
      options: ["Monopolistisk konkurranse (påslagsprising)", "Fullkommen konkurranse", "Planøkonomi", "Rent monopol uten kostnader"],
      explanation: "Bedriftene setter pris som påslag $\\mu$ over marginalkostnad; derfor blir høyere lønnskostnad til høyere pris.",
    },
    {
      question: "Et rent etterspørselssjokk (høyere $Y$) gjør hva med Phillips-kurven i $(Y,\\pi)$-diagrammet?",
      options: ["Flytter økonomien langs kurven til høyere $Y$ og høyere $\\pi$", "Skifter kurven opp", "Skifter kurven ned", "Gjør kurven brattere"],
      explanation: "$Y$ står på aksen, så en endring i $Y$ gir bevegelse langs kurven, ikke et skift.",
    },
    {
      question: "Et positivt kostnadssjokk ($z^\\pi \\uparrow$) gjør hva med Phillips-kurven?",
      options: ["Skifter hele kurven opp", "Flytter økonomien langs kurven", "Skifter kurven ned", "Endrer bare helningen $\\beta$"],
      explanation: "$z^\\pi$ er et konstantledd; høyere $z^\\pi$ løfter inflasjonen ved ethvert $Y$ → kurven skifter opp.",
    },
    {
      question: "Hvorfor er et kostnadssjokk vanskeligere for sentralbanken enn et etterspørselssjokk?",
      options: ["Inflasjon og produksjon trekker motsatt vei, så det oppstår en målkonflikt", "Fordi renten ikke virker på kostnader", "Fordi produksjonsgapet forsvinner", "Fordi forventningene alltid faller"],
      explanation: "Ved kostnadssjokk stiger $\\pi$ mens $Y$ faller; å bekjempe inflasjonen forsterker fallet i produksjon.",
    },
    {
      question: "Hva menes med at inflasjonsforventningene er «forankret»?",
      options: ["$\\pi^e$ ligger stabilt rundt inflasjonsmålet fordi aktørene stoler på sentralbanken", "At inflasjonen er null", "At renten er bundet", "At produksjonsgapet er lukket"],
      explanation: "Forankring demper gjennomslaget fra midlertidige kostnadssjokk og hindrer lønns-pris-spiraler.",
    },
    {
      question: "I ledighetsversjonen $\\pi = \\pi^e - b(u-u^n) + z^\\pi$, hvorfor er fortegnet foran gapet negativt?",
      options: ["Fordi lav ledighet ($u<u^n$) gir høy inflasjon", "Fordi høy ledighet gir høy inflasjon", "Fordi $b<0$", "Fordi forventningene faller"],
      explanation: "Ledighet og produksjon beveger seg motsatt; PK er stigende i $(Y,\\pi)$ men fallende i $(u,\\pi)$.",
    },
    {
      question: "Hva er marginalkostnad i denne sammenhengen?",
      options: ["Kostnaden ved å produsere én enhet til, dominert av lønnskostnad per enhet", "Den totale lønnssummen i økonomien", "Sentralbankens rente", "Prisen minus påslaget alltid lik null"],
      explanation: "Marginalkostnaden er bindeleddet: høyere lønnsvekst → høyere marginalkostnad → høyere pris via påslag.",
    },
    {
      question: "Hva skjer med inflasjonen ved et negativt produksjonsgap ($Y<Y^n$), alt annet likt?",
      options: ["Den faller — motsatt kausalkjede demper lønns- og prispresset", "Den stiger", "Den er uendret", "Den blir lik forventningene uansett"],
      explanation: "Mer ledighet → svakere forhandlingsmakt → lavere lønnsvekst → lavere marginalkostnad → svakere prispress.",
    },
    {
      question: "Hva er en lønns-pris-spiral?",
      options: ["Høye forventninger gir høye lønnskrav som gir høye priser som bekrefter forventningene", "At lønn og pris alltid er konstante", "At sentralbanken senker renten hvert år", "At produksjonsgapet lukkes automatisk"],
      explanation: "En selvforsterkende prosess som særlig oppstår når $\\pi^e$ ikke er forankret.",
    },
    {
      question: "Hvilken rolle spiller $\\pi^e$ når produksjonsgapet er null og $z^\\pi = 0$?",
      options: ["Inflasjonen blir lik $\\pi^e$", "Inflasjonen blir null", "Inflasjonen blir lik $\\beta$", "Inflasjonen blir uendelig"],
      explanation: "Uten gap og kostnadssjokk er $\\pi = \\pi^e$; forventningene er basislinjen.",
    },
    {
      question: "Hvorfor er Phillips-kurven fundamentet for RR-kurven i Del 5?",
      options: ["Fordi PK bakes inn i renteregelen, slik at gapet påvirker renten via en indirekte kanal", "Fordi PK bestemmer valutakursen", "Fordi PK erstatter Keynes-modellen", "Fordi PK gir multiplikatoren"],
      explanation: "Renteregelen med PK innsatt gir gap-koeffisienten $d_1\\beta + d_2$ (kap. 5.1).",
    },
    {
      question: "En student skriver kjeden «høyere BNP → høyere lønn → lavere ledighet → inflasjon». Hva er hovedfeilen?",
      options: ["Årsaksretningen ledighet/lønn er snudd, og flere ledd mangler", "$z^\\pi$ er utelatt, ellers riktig", "Ingenting, kjeden er korrekt", "Forventningene skulle stått først"],
      explanation: "Lav ledighet er en følge av høy aktivitet (ikke av lønn), og forhandlingsmakt + marginalkostnad + påslag mangler.",
    },
    {
      question: "Hva er produksjonsgapets referanse $Y^n$?",
      options: ["Potensielt BNP — produksjonen ved likevektsledigheten $u^n$", "Fjorårets BNP", "Maksimal produksjonskapasitet på svært kort sikt", "Sentralbankens inflasjonsmål"],
      explanation: "$Y^n$ er nivået fra lønns-/priskurvemodellen (kap. 4.1) og fastsetter gapets nullpunkt.",
    },
    {
      question: "Hvis $Y^n$ faller (f.eks. ved økt $z^W$ i arbeidsmarkedet), hva skjer med Phillips-kurven?",
      options: ["Den skifter, fordi et gitt $Y$ nå gir et større positivt gap", "Ingenting", "Den blir flatere", "Den forsvinner"],
      explanation: "Lavere $Y^n$ endrer gapet $\\frac{Y-Y^n}{Y^n}$ ved gitt $Y$, så kurven flytter seg.",
    },
    {
      question: "Hva sier Phillips-kurven om avveiningen på lang sikt?",
      options: ["Når $\\pi^e$ tilpasser seg faktisk inflasjon, lukkes gapet og avveiningen forsvinner", "Avveiningen blir sterkere over tid", "Produksjonen kan holdes vilkårlig høy med høy inflasjon", "Ledigheten forsvinner på lang sikt"],
      explanation: "På lang sikt vender økonomien tilbake til $Y^n$; bare inflasjonsnivået, ikke produksjonen, avhenger av politikken.",
    },
    {
      question: "Hvorfor bør du sjekke aksene før du tegner Phillips-kurven?",
      options: ["Fordi den er stigende i $(Y,\\pi)$ men fallende i $(u,\\pi)$", "Fordi den alltid er vannrett", "Fordi aksene ikke betyr noe", "Fordi den alltid er fallende uansett akse"],
      explanation: "Feil akse gir feil helning; produksjonsversjonen stiger, ledighetsversjonen faller.",
    },
  ],
  'econ1310-4-3': [
    {
      question: "Hva er kjernen i frontfagsmodellen?",
      options: ["Konkurranseutsatt industri forhandler først og setter en ramme de andre følger", "Skjermet sektor forhandler først og setter rammen", "Staten fastsetter alle lønninger sentralt", "Hver bedrift forhandler helt isolert"],
      explanation: "Industriens lønnsevne, bundet av internasjonal konkurranse, blir normen for hele oppgjøret.",
    },
    {
      question: "Hvorfor er det den konkurranseutsatte sektoren som setter frontfagsrammen?",
      options: ["Fordi den ikke kan velte høye lønninger over i prisene uten å tape markedsandeler", "Fordi den har flest ansatte", "Fordi den er skjermet fra utlandet", "Fordi den bestemmer styringsrenten"],
      explanation: "Dens lønnsevne er bundet av konkurransen mot utlandet, så den er en disiplinerende norm.",
    },
    {
      question: "Hvordan senker koordinert lønnsdannelse likevektsledigheten $u^n$?",
      options: ["Den demper lønnspresset $z^W$, så lønnskurven skyves ned og skjæringen flyttes til venstre", "Den løfter priskurven", "Den hever lønnspresset $z^W$", "Den øker påslaget $\\mu$"],
      explanation: "Lavere $z^W$ gir lavere skjæringspunkt-ledighet i lønns-/priskurvemodellen.",
    },
    {
      question: "Hva skjer med den langsiktige reallønnen ved koordinert lønnsdannelse?",
      options: ["Den er uendret — priskurven låser den; gevinsten er lavere ledighet", "Den stiger varig", "Den faller varig", "Den blir lik null"],
      explanation: "Koordinering senker $u^n$ (mer sysselsetting), men reallønnen bestemmes fortsatt av priskurven.",
    },
    {
      question: "Hva er rollen til Det tekniske beregningsutvalget (TBU)?",
      options: ["Å legge fram et felles tallgrunnlag som forankrer forventningene og gjør rammen troverdig", "Å fastsette styringsrenten", "Å bestemme skattenivået", "Å forby lønnsøkninger"],
      explanation: "Omforent faktagrunnlag reduserer strid og letter moderasjon — et smøremiddel for koordineringen.",
    },
    {
      question: "Hva kjennetegner skjermet sektor?",
      options: ["Den produserer for hjemmemarkedet uten direkte utenlandsk konkurranse", "Den selger mest til utlandet", "Den setter alltid frontfagsrammen", "Den har ingen ansatte"],
      explanation: "Skjermet sektor kan lettere velte lønn over i priser, og bindes derfor til industriens ramme.",
    },
    {
      question: "Hvilken forutsetning må holde for at frontfagsmodellen skal virke?",
      options: ["Sterke, sentraliserte organisasjoner med høy organisasjonsgrad", "Lav organisasjonsgrad", "At skjermet sektor ignorerer rammen", "At renten holdes fast"],
      explanation: "Organisasjonene må kunne binde medlemmene til rammen; faller organisasjonsgraden, svekkes modellen.",
    },
    {
      question: "Hva er en vanlig svakhet ved frontfagsmodellen?",
      options: ["Rammen kan være for stram for sektorer med høy produktivitetsvekst eller arbeidskraftmangel", "Den hever alltid reallønnen for mye", "Den gjør ledigheten permanent høyere", "Den fjerner behovet for TBU"],
      explanation: "En felles ramme kan hindre nødvendig lønnsdifferensiering og omstilling.",
    },
    {
      question: "Hva skjer med $u^n$ hvis koordineringen forvitrer (fallende organisasjonsgrad, utbrytere)?",
      options: ["$z^W$ stiger, lønnskurven skyves opp, og $u^n$ stiger igjen", "$u^n$ faller ytterligere", "$u^n$ blir null", "Reallønnen stiger"],
      explanation: "Uten disiplin forhandler gruppene mer isolert og mindre moderat → høyere lønnspress → høyere ledighet.",
    },
    {
      question: "Hva er den vanligste feilen i en drøfting av frontfagsmodellen (sjanger L)?",
      options: ["Ren opplisting uten avveining, eller å bruke matematisk modell der det er uønsket", "Å nevne konkurranseutsatt sektor", "Å koble til lønns- og priskurvemodellen verbalt", "Å drøfte forutsetningene"],
      explanation: "Sjanger L krever verbal drøfting med avveining for og mot; regnemodell er eksplisitt uønsket.",
    },
  ],
  'econ1310-5-1': [
    {
      question: "Hva sier renteregelen at sentralbanken gjør når produksjonsgapet blir positivt (høykonjunktur)?",
      options: ["Hever renten", "Senker renten", "Holder renten uendret", "Endrer inflasjonsmålet"],
      explanation: "Renteregelen $i = z^i + d_1(\\pi-\\pi^*) + d_2\\frac{Y-Y^n}{Y^n}$ har $d_2 > 0$, så et positivt gap trekker renten opp.",
    },
    {
      question: "Hva måler parameteren $d_1$ i renteregelen?",
      options: ["Vekten sentralbanken legger på inflasjonsavviket", "Vekten på produksjonsgapet", "Phillips-kurvens helning", "Marginal konsumtilbøyelighet"],
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
      options: ["$d_1\\beta + d_2$", "$d_1 + d_2$", "$d_1\\beta$", "$\\beta + d_2$"],
      explanation: "De to gap-leddene $d_1\\beta\\frac{Y-Y^n}{Y^n}$ og $d_2\\frac{Y-Y^n}{Y^n}$ trekkes sammen til $(d_1\\beta+d_2)\\frac{Y-Y^n}{Y^n}$.",
    },
    {
      question: "Hva representerer den indirekte kanalen $d_1\\beta$ i gap-koeffisienten?",
      options: ["Renteresponsen på den inflasjonen som produksjonsgapet skaper via Phillips-kurven", "Renteresponsen på selve aktivitetsnivået", "En dobbelttelling som bør fjernes", "Effekten av valutakursen"],
      explanation: "Gapet presser inflasjonen opp med $\\beta$, og sentralbanken svarer med $d_1$ — derfor $d_1\\beta$ via inflasjonen.",
    },
    {
      question: "Hva representerer den direkte kanalen $d_2$ i gap-koeffisienten?",
      options: ["Sentralbankens respons på aktivitetsnivået i seg selv, uavhengig av inflasjonen", "Responsen på inflasjonen gapet skaper", "Phillips-kurvens forventningsledd", "Skattemultiplikatoren"],
      explanation: "$d_2$ er gapet slik det står eksplisitt i renteregelen — realøkonomisk hensyn i fleksibel inflasjonsstyring.",
    },
    {
      question: "Er summen $d_1\\beta + d_2$ en dobbelttelling av produksjonsgapets effekt?",
      options: ["Nei — $d_2$ er respons på aktiviteten, $d_1\\beta$ er respons på inflasjonen aktiviteten skaper", "Ja, gapet telles to ganger og $d_1\\beta$ bør strykes", "Ja, men bare når $\\beta > 1$", "Nei, fordi de to leddene alltid er like store"],
      explanation: "To distinkte mekanismer — realøkonomisk hensyn og inflasjonshensyn — utløst av samme gap; ingen dobbelttelling.",
    },
    {
      question: "Skifter et rent positivt etterspørselssjokk ($\\Delta z^C > 0$) RR-kurven?",
      options: ["Nei — det flytter økonomien langs RR fordi PK er bakt inn i kurven", "Ja, det skifter RR opp", "Ja, det skifter RR ned", "Bare hvis skattesatsen er null"],
      explanation: "Etterspørselssjokk endrer $Y$, ikke interceptleddene. Sentralbanken beveger seg oppover langs uendret RR.",
    },
    {
      question: "Hvilket av disse skifter RR-kurven?",
      options: ["Et kostnadssjokk $\\Delta z^\\pi$", "Et konsumsjokk $\\Delta z^C$", "Et investeringssjokk $\\Delta z^I$", "Et offentlig kjøp-sjokk $\\Delta G$"],
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
      options: ["Høyere aktivitet gir større gap, som løfter renten både direkte ($d_2$) og via inflasjonen ($d_1\\beta$)", "Fordi høyere BNP alltid senker inflasjonen", "Fordi importlekkasjen øker", "Fordi skattesatsen faller"],
      explanation: "Gap-koeffisienten $(d_1\\beta+d_2) > 0$ gjør at renten stiger med $Y$ gjennom begge kanaler.",
    },
    {
      question: "Hva er $z^i$ i renteregelen?",
      options: ["Et pengepolitisk sjokk — renteendring som ikke skyldes gap eller inflasjonsavvik", "Inflasjonsmålet", "Produksjonsgapet", "Realrenten"],
      explanation: "$z^i$ er det eksogene interceptleddet; $\\Delta z^i > 0$ er en kontraktiv innstramming.",
    },
    {
      question: "Hva kjennetegner en sentralbank med høy $d_1$ i forhold til $d_2$?",
      options: ["Den er «haukete» og prioriterer inflasjonsmålet framfor realøkonomien", "Den bryr seg mest om sysselsettingen", "Den holder alltid renten konstant", "Den har ikke inflasjonsmål"],
      explanation: "Stor $d_1$/liten $d_2$ betyr kraftig respons på inflasjonsavvik, mindre på produksjonsgap.",
    },
    {
      question: "Hvorfor må $d_1 > 1$ for at renteøkninger skal virke dempende?",
      options: ["Slik at også realrenten $(i-\\pi^e)$ stiger når inflasjonen stiger", "Slik at nominell rente holdes konstant", "Slik at produksjonsgapet lukkes automatisk", "Slik at $z^i$ blir null"],
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
      options: ["Både $d_1 > 0$ og $d_2 > 0$ — inflasjonsmålet er anker, men realøkonomien teller også", "Bare $d_1 > 0$, $d_2 = 0$", "Bare $d_2 > 0$, $d_1 = 0$", "Verken $d_1$ eller $d_2$ er positiv"],
      explanation: "Fleksibel = vekt på både inflasjon og realøkonomi, speilet i to positive vekter.",
    },
    {
      question: "Hva skjer med RR-kurven hvis potensielt BNP $Y^n$ øker?",
      options: ["RR (og PK) skifter fordi gap-normaliseringen endres", "Ingenting, $Y^n$ inngår ikke i RR", "RR blir horisontal", "Bare IS-kurven skifter"],
      explanation: "$Y^n$ inngår i gapet $\\frac{Y-Y^n}{Y^n}$; en økning gjør gapet mindre for gitt $Y$ og flytter både RR og PK.",
    },
    {
      question: "Hvilken normalisering er det viktig å ha med i produksjonsgapet?",
      options: ["Å dele på $Y^n$: gapet er $\\frac{Y-Y^n}{Y^n}$, ikke bare $Y - Y^n$", "Å dele på $\\pi^*$", "Å multiplisere med $d_1$", "Å trekke fra $z^i$"],
      explanation: "Renten reagerer på det relative gapet; å utelate $Y^n$-normaliseringen er en typisk feil.",
    },
    {
      question: "Hvorfor bakes Phillips-kurven inn i renteregelen når vi lager RR?",
      options: ["Fordi sentralbanken reagerer på inflasjonen, som selv avhenger av produksjonsgapet", "For å fjerne $z^\\pi$ fra modellen", "For å gjøre RR fallende", "For å eliminere $d_2$"],
      explanation: "Ved å substituere PK fanger RR at gapet virker på renten både direkte og via inflasjonen — kilden til $d_1\\beta$.",
    },
    {
      question: "Et positivt etterspørselssjokk inntreffer. Hva gjør sentralbanken i RR-diagrammet?",
      options: ["Beveger seg oppover langs uendret RR og setter høyere rente", "Skifter hele RR opp", "Skifter hele RR ned", "Gjør ingenting med renten"],
      explanation: "Høyere $Y$ gir større gap; sentralbanken setter høyere rente ved å bevege seg langs kurven, ikke ved å flytte den.",
    },
    {
      question: "Hvilken av disse er IKKE et ledd i RR-interceptet?",
      options: ["$(d_1\\beta+d_2)\\frac{Y-Y^n}{Y^n}$", "$z^i$", "$d_1(\\pi^e-\\pi^*)$", "$d_1 z^\\pi$"],
      explanation: "Gap-leddet er selve helningsleddet (avhenger av $Y$); de tre andre er interceptledd som skifter kurven når de endres.",
    },
    {
      question: "Realrenten som styrer konsum og investeringer i modellen er:",
      options: ["$i - \\pi^e$ (nominell rente minus forventet inflasjon)", "$i + \\pi^e$", "$i - \\pi^*$", "$d_1 i$"],
      explanation: "Konsum ($c_2$) og investering ($b_2$) avhenger av realrenten $i - \\pi^e$; derfor er $d_1 > 1$ viktig.",
    },
  ],
  'econ1310-5-2': [
    {
      question: "Hvilke akser har det øvre panelet i IS-RR-PK-diagrammet?",
      options: ["$(Y, i)$ — BNP og rente", "$(Y, \\pi)$ — BNP og inflasjon", "$(i, \\pi)$ — rente og inflasjon", "$(u, W/P)$ — ledighet og reallønn"],
      explanation: "Øvre panel er $(Y,i)$-rommet med fallende IS og stigende RR; nedre panel er $(Y,\\pi)$ med PK.",
    },
    {
      question: "Hvilke akser har det nedre panelet?",
      options: ["$(Y, \\pi)$ — BNP og inflasjon", "$(Y, i)$ — BNP og rente", "$(\\pi, i)$", "$(Y^n, u^n)$"],
      explanation: "Nedre panel er $(Y,\\pi)$-rommet med den stigende Phillips-kurven; det deler $Y$-aksen med øvre panel.",
    },
    {
      question: "Hvorfor er IS-kurven fallende?",
      options: ["Høyere rente demper konsum og investeringer og dermed BNP", "Høyere rente øker BNP", "Høyere BNP senker renten", "Høyere inflasjon senker renten"],
      explanation: "Renten virker via realrenten på $c_2$ og $b_2$; høy rente hører sammen med lav $Y$.",
    },
    {
      question: "Hvorfor er RR-kurven stigende?",
      options: ["Høyere BNP gir større gap og høyere inflasjon, som sentralbanken svarer på med høyere rente", "Høyere BNP gir lavere rente", "Renten er alltid konstant", "PK er fallende"],
      explanation: "Gap-koeffisienten $(d_1\\beta+d_2) > 0$ gjør at renten stiger med $Y$ langs RR.",
    },
    {
      question: "Hvilken kurve skifter ved et etterspørselssjokk?",
      options: ["IS-kurven", "RR-kurven", "Phillips-kurven", "Lønnskurven"],
      explanation: "Etterspørselssjokk ($z^C$, $z^I$, $z^T$, $G$) treffer IS; RR og PK står stille.",
    },
    {
      question: "Skifter RR-kurven ved et rent etterspørselssjokk?",
      options: ["Nei — økonomien beveger seg langs den uendrede RR", "Ja, RR skifter opp", "Ja, RR skifter ned", "Bare hvis inflasjonen er over målet"],
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
      options: ["Renten reduserer BNP-utslaget, men et restutslag blir stående i ny likevekt B", "Renten fjerner hele sjokket", "Renten forsterker sjokket", "Renten holdes fast"],
      explanation: "Ny likevekt B ligger der skiftet IS møter uendret RR — sjokket dempes, men oppheves ikke.",
    },
    {
      question: "Hvorfor kan ikke sentralbanken bringe BNP helt tilbake til utgangsnivået etter et etterspørselssjokk?",
      options: ["Da måtte den forlate RR-kurven, som er dens egen reaksjonsregel", "Fordi renten ikke kan endres", "Fordi IS ikke skifter", "Fordi inflasjonen er fast"],
      explanation: "Likevekten må ligge på RR; full nøytralisering ville krevd at sentralbanken gikk av sin egen kurve.",
    },
    {
      question: "Hva er den vanligste feilen i grafisk analyse av etterspørselssjokk ifølge sensor?",
      options: ["Å glemme sentralbankens respons langs RR (analysere som om renten var fast)", "Å tegne to paneler", "Å markere likevektspunktene", "Å skifte IS"],
      explanation: "Renteresponsen langs RR er nivå-1-innsikten; å utelate den koster mye uttelling.",
    },
    {
      question: "Hva må alltid markeres i figuren for full uttelling?",
      options: ["Både utgangslikevekt A og ny likevekt B, i begge paneler", "Bare punkt B", "Bare øvre panel", "Kun RR-kurven"],
      explanation: "A-standarden krever riktig kurveskift, riktig retning og begge likevektspunkter i begge paneler.",
    },
    {
      question: "Hvor leser vi av inflasjonen i diagrammet?",
      options: ["I nedre panel, på Phillips-kurven ved det aktuelle BNP-nivået", "I øvre panel, på RR", "I øvre panel, på IS", "På den vannrette aksen"],
      explanation: "BNP bestemmes øverst; deretter gir PK i nedre panel tilhørende inflasjon.",
    },
    {
      question: "Hva skjer med BNP-utslaget hvis renten holdes fast i stedet for å følge renteregelen?",
      options: ["Utslaget blir større fordi rentedempingen uteblir", "Utslaget blir mindre", "Utslaget blir null", "BNP endres ikke"],
      explanation: "Med fast rente (vannrett RR) virker multiplikatoren fritt; ingen rentedemping gir større svingninger.",
    },
    {
      question: "Hvordan tegnes fast rente i diagrammet?",
      options: ["RR erstattes av en vannrett linje ved den låste renten", "RR blir loddrett", "IS blir vannrett", "PK forsvinner"],
      explanation: "Fast rente betyr at $i = \\bar{i}$ uansett $Y$, altså en horisontal RR-linje.",
    },
    {
      question: "Et skattekutt ($\\Delta z^T < 0$) er hvilken type sjokk, og hvilken vei skifter IS?",
      options: ["Positivt etterspørselssjokk — IS til høyre", "Negativt etterspørselssjokk — IS til venstre", "Kostnadssjokk — PK opp", "Pengepolitisk sjokk — RR opp"],
      explanation: "Skattekutt løfter disponibel inntekt og konsum → IS høyre, $Y$, $i$ og $\\pi$ opp.",
    },
    {
      question: "Hvorfor er skattekuttets virkning svakere enn en tilsvarende økning i offentlige kjøp?",
      options: ["Bare andelen $c_1 < 1$ av skattelettelsen brukes; resten spares", "Skatt virker direkte, G indirekte", "G lekker mer enn skatt", "De er alltid like sterke"],
      explanation: "Skatteendring virker via konsumet ($c_1 < 1$), mens offentlige kjøp treffer etterspørselen krone for krone.",
    },
    {
      question: "Hvorfor gir et etterspørselssjokk ingen målkonflikt for sentralbanken?",
      options: ["Produksjonsgap og inflasjon trekker samme vei, så renten kan reagere entydig", "Fordi inflasjonen ikke endres", "Fordi BNP ikke endres", "Fordi renten er fast"],
      explanation: "Ved negativt sjokk faller både $Y$ og $\\pi$ → senk renten; ett instrument tjener begge mål.",
    },
    {
      question: "Hvordan responderer sentralbanken på et positivt etterspørselssjokk?",
      options: ["Beveger seg oppover langs RR og hever renten", "Skifter RR opp", "Senker renten", "Skifter PK opp"],
      explanation: "Høyere $Y$ og $\\pi$ langs uendret RR gir høyere rente; kurven skiftes ikke.",
    },
    {
      question: "Hva bestemmer størrelsen på IS-skiftet ved et etterspørselssjokk?",
      options: ["Keynes-multiplikatoren ganget med sjokket", "Bare sjokket alene", "Renteregelens $d_1$", "Phillips-kurvens $\\beta$"],
      explanation: "IS forskyves horisontalt med $\\Delta Y = m \\cdot \\Delta z$ ved gitt rente.",
    },
    {
      question: "I hvilket panel bestemmes BNP direkte?",
      options: ["Øvre panel, som skjæringen IS = RR", "Nedre panel, på PK", "Begge deler like mye", "Ingen av dem"],
      explanation: "BNP og rente bestemmes i øvre panel; inflasjonen leses deretter av i nedre.",
    },
    {
      question: "Hva betyr det å forveksle «bevegelse langs kurven» med «skift av kurven»?",
      options: ["F.eks. feilaktig å skifte RR ved et etterspørselssjokk i stedet for å bevege seg langs den", "Å tegne begge paneler", "Å markere A og B", "Å bruke riktig akse"],
      explanation: "Etterspørselssjokk flytter økonomien langs RR; å skifte RR er en klassisk og kostbar feil.",
    },
    {
      question: "En aktiv renteregel gjør konjunktursvingningene:",
      options: ["mindre enn de ville vært ved fast rente", "større enn ved fast rente", "helt lik som ved fast rente", "irrelevante for inflasjonen"],
      explanation: "Motsyklisk rente demper etterspørselssjokk, så en renteregel virker konjunkturstabiliserende.",
    },
    {
      question: "Ved et negativt etterspørselssjokk ligger ny likevekt B:",
      options: ["nede til venstre for A i øvre panel", "oppe til høyre for A", "rett over A", "på PK-kurven"],
      explanation: "IS venstre langs stigende RR gir lavere $Y$ og lavere $i$ — B ligger nede til venstre.",
    },
    {
      question: "Hva forbereder analysen av fast rente oss på i kap. 5.6?",
      options: ["Likviditetsfellen, der renten ikke kan settes lavere og finanspolitikken virker sterkere", "At renteregelen alltid nøytraliserer sjokk fullstendig", "At Phillips-kurven blir vannrett", "At produksjonsgapet forsvinner"],
      explanation: "Ved nullgrensen oppfører økonomien seg som ved fast rente; finanspolitikk får sterkere effekt.",
    },
  ],
  'econ1310-5-3': [
    {
      question: "Hvilke kurver skifter ved et positivt kostnadssjokk, og hvilken ligger fast?",
      options: ["PK og RR skifter opp, IS ligger fast", "Bare IS skifter", "Bare PK skifter", "IS og RR skifter, PK ligger fast"],
      explanation: "Kostnadssjokket $z^\\pi$ står i PK- og RR-interceptet; etterspørselen (IS) er uberørt.",
    },
    {
      question: "Hva kaller vi kombinasjonen høyere inflasjon og lavere produksjon som følger av et positivt kostnadssjokk?",
      options: ["Stagflasjon", "Deflasjon", "Konjunkturoppgang", "Likviditetsfelle"],
      explanation: "Stagflasjon = stagnasjon (fallende $Y$) + inflasjon (stigende $\\pi$) samtidig.",
    },
    {
      question: "Hva skjer med $Y$, $i$ og $\\pi$ ved et positivt kostnadssjokk?",
      options: ["$\\pi$ opp, $Y$ ned, $i$ opp", "Alle opp", "Alle ned", "$\\pi$ ned, $Y$ opp, $i$ ned"],
      explanation: "PK og RR opp, IS fast → høyere rente, lavere BNP, høyere inflasjon (stagflasjon).",
    },
    {
      question: "Hvor mye skifter RR-kurven opp ved et kostnadssjokk $\\Delta z^\\pi$?",
      options: ["$d_1\\Delta z^\\pi$", "$d_2\\Delta z^\\pi$", "$\\beta\\Delta z^\\pi$", "RR skifter ikke"],
      explanation: "$z^\\pi$ inngår i RR-interceptet som $d_1 z^\\pi$; sentralbanken svarer på kostnadsinflasjonen med vekten $d_1$.",
    },
    {
      question: "Hvorfor gir et kostnadssjokk en målkonflikt for sentralbanken?",
      options: ["Fordi inflasjon og produksjon trekker i motsatt retning", "Fordi begge trekker samme vei", "Fordi renten ikke kan endres", "Fordi IS skifter"],
      explanation: "$\\pi \\uparrow$ men $Y \\downarrow$: å bekjempe inflasjonen forsterker BNP-fallet, og omvendt.",
    },
    {
      question: "Hvorfor gir et etterspørselssjokk IKKE en målkonflikt?",
      options: ["Fordi produksjonsgap og inflasjon trekker samme vei", "Fordi de trekker motsatt vei", "Fordi PK er fast", "Fordi RR skifter"],
      explanation: "Ved negativt etterspørselssjokk faller både $Y$ og $\\pi$; rentekutt løfter begge — ett grep, ingen konflikt.",
    },
    {
      question: "Hva uttrykker forholdet $d_1/d_2$ ved et kostnadssjokk?",
      options: ["Hvordan sentralbanken avveier inflasjonsmål mot produksjon i målkonflikten", "Størrelsen på kostnadssjokket", "Phillips-kurvens helning", "Multiplikatoren"],
      explanation: "$d_1$ (inflasjonsvekt) og $d_2$ (produksjonsvekt) bestemmer hvor mye inflasjon vs. BNP-fall sentralbanken godtar.",
    },
    {
      question: "Hva er nettovirkningen på inflasjonen av et positivt kostnadssjokk?",
      options: ["Formelt ubestemt, men rimelig at $\\pi$ stiger, mindre enn sjokket", "Alltid nøyaktig lik sjokket", "Alltid negativ", "Alltid null"],
      explanation: "PK-skiftet drar $\\pi$ opp, BNP-fallet drar ned; netto er fortegnsubestemt, men $\\pi$ stiger normalt mindre enn $\\Delta z^\\pi$.",
    },
    {
      question: "Hva skjer med $Y$, $i$ og $\\pi$ ved et negativt kostnadssjokk (f.eks. strømprisfall)?",
      options: ["$\\pi$ ned, $Y$ opp, $i$ ned", "Alle opp", "Alle ned", "$\\pi$ opp, $Y$ ned, $i$ opp"],
      explanation: "PK og RR ned, IS fast → lavere rente, høyere BNP, lavere inflasjon — en «gladnyhet».",
    },
    {
      question: "Hvilken feil advarer sensor mot ved tegning av et negativt kostnadssjokk?",
      options: ["Å la inflasjonen ende høyere enn utgangspunktet (selvmotsigende)", "Å skifte PK ned", "Å holde IS fast", "Å senke renten"],
      explanation: "Et negativt kostnadssjokk senker prispresset; inflasjonen må ende lavere. Feilen kommer av gale proporsjoner.",
    },
    {
      question: "Hvordan behandles importert inflasjon (etter kronesvekkelse) i modellen?",
      options: ["Som et positivt kostnadssjokk $\\Delta z^\\pi > 0$", "Som et positivt etterspørselssjokk (IS høyre)", "Som et pengepolitisk sjokk", "Som en økning i $Y^n$"],
      explanation: "Dyrere import presser prisnivået opp uavhengig av gapet → kostnadssjokk som skifter PK og RR.",
    },
    {
      question: "Hva er den mest fremhevede karakterskillende innsikten i Del 5 ifølge sensorveiledningene?",
      options: ["Skillet mellom etterspørselssjokk og kostnadssjokk", "Utledning av multiplikatoren", "BNP-klassifisering", "Handlingsregelen"],
      explanation: "Skillet (samme vei vs. motsatt vei; IS vs. PK/RR) skiller A/B fra C/D.",
    },
    {
      question: "En økning i inflasjonsforventningene ($\\Delta\\pi^e > 0$) virker som:",
      options: ["Et kostnadssjokk: PK og RR opp, $Y$ ned, $\\pi$ og $i$ opp", "Et etterspørselssjokk: IS høyre", "Et rentekutt", "En økning i $Y^n$"],
      explanation: "$\\pi^e$ står i både PK- og RR-interceptet, så virkningen er identisk med et kostnadssjokk.",
    },
    {
      question: "Hvorfor er godt forankrede inflasjonsforventninger verdifulle?",
      options: ["De hindrer at forventningsdrevne kostnadssjokk selvforsterker inflasjonen", "De øker multiplikatoren", "De gjør IS brattere", "De fjerner produksjonsgapet"],
      explanation: "Uforankrede forventninger virker som stadige kostnadssjokk i en selvforsterkende spiral.",
    },
    {
      question: "En økning i potensielt BNP ($\\Delta Y^n > 0$) skal analyseres via:",
      options: ["PK og RR (tilbudssidesjokk), ikke IS", "IS alene", "Bare RR", "Ingen kurver skifter"],
      explanation: "$Y^n$ endrer gap-normaliseringen og treffer PK/RR; etterspørselen er uendret, så IS skifter ikke.",
    },
    {
      question: "Hva betyr det at et kostnadssjokk gir 'stagflasjon' for sentralbankens verktøy?",
      options: ["Ett rentevåpen kan ikke løse to problemer som trekker motsatt vei", "Renten kan løse begge problemer samtidig", "Finanspolitikken må brukes i stedet", "Inflasjonen forsvinner av seg selv"],
      explanation: "Med inflasjon opp og produksjon ned må sentralbanken prioritere; renten kan ikke stabilisere begge fullt ut.",
    },
    {
      question: "Ved et positivt kostnadssjokk ligger ny likevekt B i øvre panel:",
      options: ["oppe til venstre for A (høyere $i$, lavere $Y$)", "oppe til høyre for A", "nede til høyre for A", "rett under A"],
      explanation: "Fast, fallende IS krysser den høyere RR ved lavere $Y$ og høyere $i$.",
    },
    {
      question: "Hvorfor stiger inflasjonen normalt mindre enn kostnadssjokket selv?",
      options: ["Fordi rentehevingen og BNP-fallet demper prispresset delvis", "Fordi PK ikke skifter", "Fordi RR er fast", "Fordi $\\beta = 0$"],
      explanation: "PK-skiftet løfter $\\pi$, men den lavere aktiviteten trekker $\\pi$ nedover langs den nye PK.",
    },
    {
      question: "Hvilken av disse er et tilbudssidesjokk?",
      options: ["Et kostnadssjokk $\\Delta z^\\pi$", "Et konsumsjokk $\\Delta z^C$", "Et offentlig kjøp-sjokk $\\Delta G$", "Et skattekutt $\\Delta z^T$"],
      explanation: "Kostnadssjokk (sammen med $\\pi^e$ og $Y^n$) treffer pris-/produksjonssiden; de tre andre er etterspørselssjokk.",
    },
    {
      question: "En vanlig feil er å skifte bare PK ved et kostnadssjokk. Hva glemmer man da?",
      options: ["At RR skifter sammen med PK (sentralbankens reaksjon i øvre panel)", "At IS skifter", "At $Y$ er konstant", "At inflasjonen faller"],
      explanation: "Kostnadssjokket står også i RR-interceptet ($d_1 z^\\pi$); glemmer man RR-skiftet, mister man renteøkningen og BNP-fallet.",
    },
  ],
  'econ1310-5-4': [
    {
      question: "Hvor mye må sentralbanken heve renten for å nøytralisere et investeringssjokk $\\Delta z^I$ (for $\\Delta Y = 0$)?",
      options: ["$\\Delta i = \\dfrac{\\Delta z^I}{c_2 + b_2}$", "$\\Delta i = \\dfrac{\\Delta z^I}{b_2}$", "$\\Delta i = \\dfrac{\\Delta z^I}{c_2}$", "$\\Delta i = (c_2+b_2)\\,\\Delta z^I$"],
      explanation: "Renten virker gjennom begge kanaler, $c_2$ (konsum) og $b_2$ (investering), så nevneren er den samlede rentekanalen $c_2 + b_2$.",
    },
    {
      question: "Hvorfor faller multiplikatoren $1/D$ ut av nøytraliseringsbetingelsen?",
      options: ["Den ganger hele klammen i tilvekstuttrykket, så $\\Delta Y = 0$ krever bare at klammen er null", "Fordi $D = 1$ ved nøytralisering", "Fordi sjokket alltid er lik multiplikatoren", "Fordi renten er bundet"],
      explanation: "$\\Delta Y = \\frac{1}{D}[\\ldots]$; skal $\\Delta Y = 0$, holder det at klammen er null — $D$-verdien trengs aldri.",
    },
    {
      question: "Hvor mye må skatten endres for å holde konsumet uendret etter et konsumsjokk $\\Delta z^C$?",
      options: ["$\\Delta z^T = \\dfrac{\\Delta z^C}{c_1}$", "$\\Delta z^T = c_1\\,\\Delta z^C$", "$\\Delta z^T = \\Delta z^C$", "$\\Delta z^T = \\dfrac{\\Delta z^C}{1-c_1}$"],
      explanation: "Skatt demper konsumet bare med andelen $c_1$ per krone, så det trengs $1/c_1$ kroner skatt per krone konsumsjokk.",
    },
    {
      question: "Hvorfor må en skatteøkning som nøytraliserer et konsumsjokk være større enn selve sjokket?",
      options: ["Fordi $c_1 < 1$: bare andelen $c_1$ av hver skattekrone reduserer konsumet, resten tas fra sparing", "Fordi skatt virker direkte og fullt ut på etterspørselen", "Fordi multiplikatoren forstørrer skatten", "Fordi renten samtidig heves"],
      explanation: "Med $c_1 < 1$ er $1/c_1 > 1$, så skatteøkningen overstiger sjokket.",
    },
    {
      question: "Ved bundet rente ($\\Delta i = 0$) og et forventningssjokk $\\Delta\\pi^e$: hvor mye må offentlige kjøp endres for $\\Delta Y = 0$?",
      options: ["$\\Delta G = -(c_2+b_2)\\,\\Delta\\pi^e$", "$\\Delta G = (c_2+b_2)\\,\\Delta\\pi^e$", "$\\Delta G = -\\dfrac{\\Delta\\pi^e}{c_2+b_2}$", "$\\Delta G = -c_1\\,\\Delta\\pi^e$"],
      explanation: "Et $\\Delta\\pi^e > 0$ senker realrenten og stimulerer etterspørselen med $(c_2+b_2)\\Delta\\pi^e$; G må kuttes tilsvarende.",
    },
    {
      question: "Hvorfor kan et rent etterspørselssjokk nøytraliseres fullstendig med ett virkemiddel?",
      options: ["Produksjonsgapet og inflasjonsgapet trekker samme vei, så ett virkemiddel lukker begge samtidig", "Fordi etterspørselssjokk aldri påvirker inflasjonen", "Fordi renteregelen automatisk nuller det", "Fordi $c_2 + b_2 = 1$"],
      explanation: "Ved etterspørselssjokk er begge gap positive (eller begge negative) — ingen målkonflikt.",
    },
    {
      question: "Hvorfor er full nøytralisering av et kostnadssjokk prinsipielt umulig?",
      options: ["Inflasjons- og produksjonsgapet trekker motsatt vei, så ett virkemiddel ikke kan nulle begge", "Fordi kostnadssjokk ikke påvirker renten", "Fordi $c_2 + b_2 = 0$ ved kostnadssjokk", "Fordi finanspolitikken er utelukket"],
      explanation: "Kostnadssjokk gir stagflasjon: $\\pi$ opp, $Y$ ned. Å lukke det ene gapet forverrer det andre.",
    },
    {
      question: "Hva består 'rentekanalen' av i modellen?",
      options: ["Summen $c_2 + b_2$ — rentens virkning på både konsum og investering", "Bare $b_2$ — rentens virkning på investering", "Bare $c_2$ — rentens virkning på konsum", "Multiplikatoren $1/D$"],
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
      options: ["Diskresjonær er en bevisst beregnet dose mot et mål; regelbasert er renteregelens automatiske respons", "Diskresjonær gjelder bare finanspolitikk", "Regelbasert nøytraliserer alltid fullt", "De gir alltid samme rente"],
      explanation: "Dimensjonering finner den diskresjonære dosen ($\\Delta i = \\Delta z/(c_2+b_2)$), ikke det renteregelen ville gitt.",
    },
    {
      question: "Hvorfor setter sentralbanken renten gradvis i praksis, selv om modellen tillater full nøytralisering i ett steg?",
      options: ["Usikkerhet om økonomiens tilstand og parametre, hensyn til troverdighet og finansiell stabilitet", "Fordi loven forbyr store rentesteg", "Fordi multiplikatoren er ukjent for offentligheten", "Fordi finanspolitikken alltid virker først"],
      explanation: "Gradvishet begrunnes i usikkerhet, forventningsforankring/troverdighet og finansiell stabilitet.",
    },
    {
      question: "Et negativt etterspørselssjokk $\\Delta z^I = -40$ ved nullgrensen ($\\Delta i = 0$), $c_2+b_2 = 0{,}5$. Hvor mye må G økes for $\\Delta Y = 0$?",
      options: ["$40$", "$20$", "$80$", "$-40$"],
      explanation: "Med $\\Delta i = 0$ blir klammen $\\Delta z^I + \\Delta G = 0$, så $\\Delta G = 40$.",
    },
    {
      question: "Hvorfor er finanspolitikken sterkere ved nullgrensen?",
      options: ["Rentedempingen (RR-responsen) uteblir, så en G-økning motvirkes ikke av høyere rente", "Fordi skatt da virker direkte", "Fordi multiplikatoren blir mindre enn 1", "Fordi renten da settes negativ automatisk"],
      explanation: "Ved bundet rente er den motvirkende renteresponsen borte, så finanspolitikkens fulle utslag består.",
    },
    {
      question: "Hva gir sensor uttelling for i en dimensjoneringsoppgave?",
      options: ["Riktig parameterkombinasjon i nevneren, riktig fortegn, OG forklaring på hvorfor nøytralisering er mulig", "Bare det numeriske svaret", "En lang verbal drøfting uten regning", "At du også tegner IS-RR-PK-diagrammet"],
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
      question: "Hva er aksene i det øvre panelet i IS-RR-PK-diagrammet?",
      options: ["$(Y, i)$ — BNP og rente", "$(Y, \\pi)$ — BNP og inflasjon", "$(u, \\pi)$ — ledighet og inflasjon", "$(i, \\pi)$ — rente og inflasjon"],
      explanation: "Øvre panel er $(Y, i)$ med fallende IS og stigende RR; nedre panel er $(Y, \\pi)$ med Phillips-kurven.",
    },
    {
      question: "Hvorfor faller IS-kurven?",
      options: ["Høyere rente demper konsum og investering, så etterspurt $Y$ blir lavere", "Høyere rente øker etterspørselen", "Høyere $Y$ tvinger renten opp", "Fordi Phillips-kurven er bakt inn"],
      explanation: "IS viser vareetterspørselen: en høyere realrente reduserer $C$ (via $c_2$) og $I$ (via $b_2$).",
    },
    {
      question: "Hvorfor stiger RR-kurven i $Y$?",
      options: ["Renteregelen hever renten når $Y$ øker, både via $d_2$ og via $d_1\\beta$", "Fordi høyere rente gir høyere $Y$", "Fordi IS er fallende", "Fordi inflasjonen er konstant"],
      explanation: "RR-helningen er $d_1\\beta + d_2$: direkte gap-respons pluss inflasjonskanalen.",
    },
    {
      question: "Et positivt etterspørselssjokk gir hvilket fortegnsmønster?",
      options: ["$Y\\uparrow$, $i\\uparrow$, $\\pi\\uparrow$ (alle samme vei)", "$Y\\uparrow$, $i\\downarrow$, $\\pi\\downarrow$", "$Y\\downarrow$, $i\\uparrow$, $\\pi\\uparrow$", "$Y\\uparrow$, $i\\uparrow$, $\\pi\\downarrow$"],
      explanation: "IS høyre langs stigende RR: alt opp. Ingen målkonflikt fordi gapene trekker samme vei.",
    },
    {
      question: "Hvilke kurver skifter ved et positivt kostnadssjokk ($\\Delta z^\\pi > 0$)?",
      options: ["Både PK og RR skifter opp; IS ligger fast", "Bare IS skifter venstre", "Bare PK skifter opp", "Bare RR skifter opp"],
      explanation: "PK skifter opp med $\\Delta z^\\pi$, RR med $d_1\\Delta z^\\pi$. IS er uendret.",
    },
    {
      question: "Et positivt kostnadssjokk gir hvilket fortegnsmønster?",
      options: ["$Y\\downarrow$, $i\\uparrow$, $\\pi\\uparrow$ (stagflasjon)", "$Y\\uparrow$, $i\\uparrow$, $\\pi\\uparrow$", "$Y\\downarrow$, $i\\downarrow$, $\\pi\\downarrow$", "$Y\\uparrow$, $i\\downarrow$, $\\pi\\uparrow$"],
      explanation: "Inflasjon opp, produksjon ned — motsatt vei, derav målkonflikten.",
    },
    {
      question: "Hva menes med at renteregelen 'demper, men ikke nøytraliserer' et etterspørselssjokk?",
      options: ["Rentens respons trekker BNP-utslaget delvis tilbake, men nuller det ikke", "Renten fjerner sjokket fullstendig", "Renten forsterker sjokket", "Renten holdes fast"],
      explanation: "Renten settes etter $d_1, d_2$, ikke etter kravet $\\Delta Y = 0$, så noe utslag består.",
    },
    {
      question: "Hva skjer med $Y$-utslaget av et etterspørselssjokk hvis renten holdes fast i stedet for å følge renteregelen?",
      options: ["Utslaget blir større fordi rentedempingen uteblir", "Utslaget blir mindre", "Utslaget blir null", "Utslaget snur fortegn"],
      explanation: "Fast rente = vannrett RR; uten den motvirkende renteendringen slår sjokket fullt gjennom.",
    },
    {
      question: "Hvilken feil advarer sensor mot ved et negativt kostnadssjokk?",
      options: ["Å tegne inflasjonen høyere enn utgangspunktet — det er selvmotsigende", "Å skifte IS", "Å markere begge likevektspunkter", "Å kutte renten"],
      explanation: "Et negativt kostnadssjokk må ende med $\\pi$ under A; motsatt bryter forholdet mellom RR-helning og RR-skift.",
    },
    {
      question: "Hvordan behandles et forventningssjokk $\\Delta\\pi^e > 0$ i diagrammet?",
      options: ["Som et kostnadssjokk: PK og RR skifter opp, $Y\\downarrow$, $i\\uparrow$, $\\pi\\uparrow$", "Som et etterspørselssjokk: bare IS skifter", "Bare PK skifter, RR står fast", "Ingen kurver skifter"],
      explanation: "$\\pi^e$ inngår i både PK og RR, så begge skifter opp — samme mønster som $z^\\pi > 0$.",
    },
    {
      question: "Hva skjer i diagrammet når potensielt BNP øker ($\\Delta Y^n > 0$)?",
      options: ["PK og RR skifter mot høyre; $Y\\uparrow$, $i\\downarrow$, $\\pi\\downarrow$", "IS skifter venstre", "Bare RR skifter opp", "Ingenting endres"],
      explanation: "Høyere $Y^n$ reduserer gapet ved gitt $Y$, så PK og RR flytter høyre — et gunstig tilbudssidesjokk.",
    },
    {
      question: "Hvordan skal et kombinasjonssjokk ($\\Delta X < 0$ og $\\Delta z^\\pi > 0$) analyseres?",
      options: ["Hvert sjokk for seg, deretter samlet", "Som ett samlet etterspørselssjokk", "Som ett samlet kostnadssjokk", "Man velger det største og ignorerer det andre"],
      explanation: "Del opp: ett IS-skift og ett PK/RR-skift; legg dem sammen til slutt.",
    },
    {
      question: "Ved kombinasjonen $\\Delta X < 0$ og $\\Delta z^\\pi > 0$: hva er entydig?",
      options: ["BNP faller entydig; rente og inflasjon er fortegnsubestemte", "Renten stiger entydig", "Inflasjonen faller entydig", "Alt er entydig bestemt"],
      explanation: "Begge sjokk trekker $Y$ ned; på $i$ og $\\pi$ trekker de motsatt vei, så disse er ubestemte.",
    },
    {
      question: "Hvorfor gir kostnadssjokk en målkonflikt, men ikke etterspørselssjokk?",
      options: ["Ved kostnadssjokk trekker produksjons- og inflasjonsgapet motsatt vei", "Fordi kostnadssjokk ikke påvirker renten", "Fordi etterspørselssjokk ikke påvirker inflasjonen", "Fordi RR da er vannrett"],
      explanation: "Motsatt-vei-gap kan ikke lukkes med ett virkemiddel; samme-vei-gap kan.",
    },
    {
      question: "Et eksportfall i åpen økonomi ($\\Delta X < 0$) — hvilken kurve skifter?",
      options: ["IS skifter venstre (eksport er et etterspørselsledd)", "RR skifter opp", "PK skifter ned", "Ingen kurve skifter"],
      explanation: "Eksport inngår i vareetterspørselen, så et fall er et negativt etterspørselssjokk som flytter IS venstre.",
    },
    {
      question: "Hvorfor er $Y$-utslaget av et skattekutt svakere enn av en like stor $G$-økning?",
      options: ["Skattekutt virker bare indirekte via konsumet, og bare andelen $c_1 < 1$ brukes", "Skattekutt skifter RR i stedet for IS", "Skattekutt hever renten mer", "$G$-økning demper multiplikatoren"],
      explanation: "$G$ virker krone for krone; skattekutt bare gjennom konsumandelen $c_1$, resten spares.",
    },
    {
      question: "Hva er A-besvarelsens minstekrav til selve figuren?",
      options: ["Riktig kurve, riktig retning og begge likevektspunkter (A og B) markert", "Perfekt kurvefasong og eksakte tallverdier", "Bare det øvre panelet", "En verbal beskrivelse uten figur"],
      explanation: "Kurvefasong er underordnet (H2022); det som teller er riktig skift og markerte likevekter, pluss mekanismen i ord.",
    },
    {
      question: "Ved et negativt etterspørselssjokk: hva gjør sentralbanken langs RR?",
      options: ["Kutter renten, som demper fallet i BNP", "Hever renten, som forsterker fallet", "Holder renten fast", "Skifter RR nedover"],
      explanation: "Lavere gap og inflasjon $\\Rightarrow$ renteregelen kutter renten; vi beveger oss nedover langs uendret RR.",
    },
    {
      question: "Hvilket panel leser du av først, og hvordan kobles panelene?",
      options: ["Finn likevekts-$Y$ i øvre panel, les samme $Y$ nedover til PK for $\\pi$", "Finn $\\pi$ først, så $Y$ i øvre panel", "Panelene er uavhengige", "Nedre panel har $i$ på loddrett akse"],
      explanation: "Panelene deler $Y$-aksen: likevekts-$Y$ fra øvre panel bestemmer punktet på PK i nedre panel.",
    },
  ],
  'econ1310-5-6': [
    {
      question: "Hva innebærer fleksibel inflasjonsstyring?",
      options: ["Sentralbanken styrer mot inflasjonsmålet, men vektlegger også å stabilisere realøkonomien", "Sentralbanken bryr seg kun om inflasjonen", "Sentralbanken har ikke noe fast inflasjonsmål", "Sentralbanken styrer valutakursen fast"],
      explanation: "«Fleksibel» = banken aksepterer midlertidige inflasjonsavvik for å skåne produksjon og sysselsetting; speiles av $d_1$ og $d_2$ begge positive.",
    },
    {
      question: "Hvilke parametre i renteregelen speiler henholdsvis inflasjonsmål og realøkonomisk hensyn?",
      options: ["$d_1$ (inflasjonsavvik) og $d_2$ (produksjonsgap)", "$c_1$ og $c_2$", "$\\beta$ og $\\mu$", "$b_1$ og $b_2$"],
      explanation: "Renteregelen: $i = z^i + d_1(\\pi-\\pi^*) + d_2\\frac{Y-Y^n}{Y^n}$.",
    },
    {
      question: "Hvorfor setter sentralbanken renten gradvis?",
      options: ["Usikkerhet om økonomien, hensyn til troverdighet og finansiell stabilitet", "Fordi loven krever små steg", "Fordi renteregelen gir ett fast tall", "Fordi finanspolitikken alltid virker først"],
      explanation: "De tre standardgrunnene for gradvishet.",
    },
    {
      question: "Hva er rentens transmisjonsmekanisme?",
      options: ["Kjeden fra styringsrenten via markedsrenter til konsum, investering og valutakurs", "Sentralbankens valg av inflasjonsmål", "Skattesystemets virkning på BNP", "Forholdet mellom aksjer og obligasjoner"],
      explanation: "Styringsrenten smitter til markedsrentene og videre til realøkonomien, med et virkningslag.",
    },
    {
      question: "Hvordan virker valutakurskanalen ved en renteøkning i en liten åpen økonomi?",
      options: ["Høyere rente styrker kronen, gjør import billigere og eksport dyrere", "Høyere rente svekker kronen og øker eksporten", "Renten påvirker ikke valutakursen", "Kronen styrkes bare ved lavere rente"],
      explanation: "Høyere rente enn utlandet trekker kapital inn og styrker kronen; billigere import demper inflasjonen.",
    },
    {
      question: "Hva er en likviditetsfelle?",
      options: ["Styringsrenten er nær nullgrensen og kan ikke settes vesentlig lavere, så rentekutt slutter å virke", "Bankene har for mye reserver", "Inflasjonen er over målet", "Kronen er for sterk"],
      explanation: "Ved nullgrensen mister sentralbanken sitt vanlige virkemiddel for å stimulere.",
    },
    {
      question: "Hvorfor kan ikke styringsrenten settes vesentlig under null?",
      options: ["Aktørene ville da holdt kontanter (null avkastning) i stedet for å plassere til negativ rente", "Fordi inflasjonen ville eksplodert", "Fordi loven forbyr det fullstendig", "Fordi bankene da slutter å låne ut helt"],
      explanation: "Kontantalternativet setter en effektiv nedre grense for renten.",
    },
    {
      question: "Hva er kvantitative lettelser (QE)?",
      options: ["Sentralbanken kjøper verdipapirer for å presse ned lange renter og tilføre likviditet", "Et ordinært kutt i styringsrenten", "En økning i skattene", "Et løfte om høyere rente"],
      explanation: "QE er et ukonvensjonelt virkemiddel ved nullgrensen — ikke det samme som et vanlig rentekutt.",
    },
    {
      question: "Hva er forward guidance?",
      options: ["Sentralbanken kommuniserer forpliktende om fremtidig rentebane for å påvirke forventningene i dag", "Sentralbanken kjøper aksjer", "Et krav om balansert budsjett", "En fast valutakurs"],
      explanation: "Ved å love vedvarende lav rente påvirkes de lange rentene allerede nå.",
    },
    {
      question: "Hvorfor er finanspolitikken kraftigere ved nullgrensen?",
      options: ["Renteresponsen uteblir (RR flat), så en G-økning slår fullt gjennom uten motvirkende renteoppgang", "Fordi skatt da virker direkte på etterspørselen", "Fordi multiplikatoren blir mindre", "Fordi renten da settes negativ"],
      explanation: "Samme logikk som fast-rente-analysen i kap. 5.2: uten rentedemping blir utslaget større.",
    },
    {
      question: "Hva er den vanligste feilen i en pengepolitisk drøftingsoppgave (sjanger L)?",
      options: ["Å trekke inn matematisk modell i en verbal drøfting", "Å bruke fagbegreper", "Å veie argumenter for og imot", "Å definere nøkkelbegrepene"],
      explanation: "Sjanger L er verbal; ligninger og utledninger er eksplisitt uønsket.",
    },
    {
      question: "Hva forankrer inflasjonsforventningene $\\pi^e$?",
      options: ["Et troverdig inflasjonsmål", "En svak krone", "Et budsjettunderskudd", "En høy reserverente"],
      explanation: "Når aktørene tror på målet, holder de $\\pi^e$ nær det, noe som gjør målet lettere å nå.",
    },
    {
      question: "Hva er hovedforskjellen mellom kvantitative lettelser og et ordinært rentekutt?",
      options: ["QE er kjøp av verdipapirer ved nullgrensen; rentekutt er en endring i styringsrenten", "De er det samme", "QE hever renten", "Rentekutt tilfører aldri likviditet"],
      explanation: "Å blande de to er en typisk feil — QE brukes når rentekutt ikke lenger er mulig.",
    },
    {
      question: "Hvorfor bryr en liten åpen økonomi som Norge seg ekstra om valutakursen i pengepolitikken?",
      options: ["Fordi renten virker vesentlig via kronekursen og bytteforholdet, ikke bare via lånerenten", "Fordi Norge har fast valutakurs", "Fordi valutakursen ikke påvirker inflasjonen", "Fordi eksporten er ubetydelig"],
      explanation: "Stor utenrikshandel gjør valutakurskanalen kraftig og rask — et toppkandidat-moment i casene.",
    },
    {
      question: "Hva er reserverenten?",
      options: ["Renten bankene får på innskudd (reserver) i sentralbanken", "Renten på statsobligasjoner", "Utlånsrenten til husholdninger", "Inflasjonsmålet"],
      explanation: "Reserverenten er sentralbankens operative styringsrente og gulv for de korte markedsrentene.",
    },
  ],
  'econ1310-6-1': [
    {
      question: "Hvordan vurderer sensor drøftingsoppgaven (sjanger L)?",
      options: ["Som en momentliste der veide, relevante argumenter gir uttelling — ikke standpunktet", "Etter om studenten lander på det «riktige» svaret", "Etter hvor mange ligninger studenten klarer å utlede", "Kun etter lengden på svaret"],
      explanation: "Drøftingen rettes mot en liste relevante momenter; flere konklusjoner godtas, og bredde og pensumforankring avgjør — ikke standpunktet.",
    },
    {
      question: "Hva er sensors hyppigst gjentatte metaregel?",
      options: ["Ikke svar på mer enn du blir spurt om", "Skriv alltid en tydelig konklusjon", "Ta med en matematisk modell for å vise forståelse", "Bruk minst én figur i hvert svar"],
      explanation: "Overflødig drøfting gir null ekstra uttelling og stjeler tid; å avgrense svaret til spørsmålet er den viktigste regelen.",
    },
    {
      question: "Hvilket verktøy hører IKKE hjemme i en drøftingsoppgave?",
      options: ["En matematisk utledning", "Fagbegreper", "En figur (fra 2021)", "Et strukturert for/mot-resonnement"],
      explanation: "Matematisk modell/utledning er eksplisitt uønsket hvert år; figurer er derimot tillatt fra 2021.",
    },
    {
      question: "Hvorfor har de fleste land lagt konjunkturansvaret til sentralbanken?",
      options: ["Pengepolitikken er rask, uavhengig og rendyrket", "Finanspolitikken har ingen virkningslag", "Sentralbanken kan vedta skatteendringer raskt", "Renten treffer bare bestemte sektorer presist"],
      explanation: "Renten kan endres løpende (rask), settes uavhengig av valghensyn, og stabilisering er sentralbankens eneste oppgave (rendyrket).",
    },
    {
      question: "I hvilken situasjon er finanspolitikken det sterkeste stabiliseringsverktøyet?",
      options: ["Ved nullgrensen, fordi renteresponsen uteblir", "I en normal høykonjunktur", "Alltid, fordi den virker umiddelbart", "Aldri — pengepolitikk er alltid best"],
      explanation: "Ved nullgrensen ligger renten fast, så et finanspolitisk løft motvirkes ikke av en renteøkning; hele multiplikatorvirkningen slår igjennom.",
    },
    {
      question: "Hva kjennetegner de lange lagene i finanspolitikken?",
      options: ["Beslutnings- og virkningslag gjør aktiv finanspolitikk treg", "At renten reagerer med forsinkelse", "At skatt alltid er eksogen", "At budsjettet balanseres automatisk"],
      explanation: "Utredning, budsjettbehandling og gjennomføring tar tid (beslutningslag), og tiltaket virker først etterpå (virkningslag).",
    },
    {
      question: "Hva er en likviditetsfelle?",
      options: ["Styringsrenten er ved nullgrensen mens økonomien trenger mer stimulans", "Inflasjonen er langt over målet og renten høy", "Bankene nekter å låne ut tross høy rente", "Statskassen er tom"],
      explanation: "Ved nullgrensen kan sentralbanken ikke kutte mer, og ordinær pengepolitikk mister kraft.",
    },
    {
      question: "Hvilket verktøy bruker sentralbanken ved nullgrensen?",
      options: ["Kvantitative lettelser og forward guidance", "En kraftig heving av styringsrenten", "Endring av inntektsskatten", "Vedtak om økte offentlige kjøp"],
      explanation: "Kjøp av verdipapirer (QE) og troverdige løfter om lav rente lenge (forward guidance) er ekstraordinære pengepolitiske verktøy — de siste to er finanspolitikk.",
    },
    {
      question: "Hva sier Ricardiansk ekvivalens?",
      options: ["Et lånefinansiert skattekutt stimulerer ikke, fordi husholdningene sparer det til framtidig skatt", "Skattekutt virker alltid dobbelt så sterkt som G-økninger", "Renten nøytraliserer all finanspolitikk", "Import lekker ut av multiplikatoren"],
      explanation: "Fremadskuende husholdninger motregner den framtidige skatteøkningen som må betjene gjelden, og sparer hele kuttet.",
    },
    {
      question: "Hvorfor svikter Ricardiansk ekvivalens ofte i praksis?",
      options: ["Kredittbeskrankninger, kort horisont og generasjonsskifte", "Fordi renten er fast", "Fordi skatt alltid er endogen", "Fordi importlekkasjen er stor"],
      explanation: "Kredittbeskrankede bruker kuttet nå, mange sparer ikke for fjerne skatter, og deler av regningen faller på andre generasjoner.",
    },
    {
      question: "Hva skjer med den langsiktige reallønnen når arbeidstakernes forhandlingsmakt øker varig?",
      options: ["Den er uendret — priskurven låser reallønnen; bare $u^n$ stiger", "Den stiger varig", "Den faller varig", "Den svinger, men $u^n$ er uendret"],
      explanation: "Lønnskurven skifter opp og hever likevektsledigheten, men reallønnen bestemmes av priskurven ($A$ og $\\mu$) og er uendret.",
    },
    {
      question: "Hvordan påvirker koordinert lønnsdannelse (frontfag) likevektsledigheten?",
      options: ["Den senkes, fordi lavere lønnspress ($z^W$ ned) skifter lønnskurven ned", "Den heves, fordi lønningene presses opp", "Den er uendret", "Den blir negativ"],
      explanation: "Koordinering demper lønnspresset, lønnskurven skifter ned, og $u^n$ faller — med uendret langsiktig reallønn.",
    },
    {
      question: "Hva menes med fleksibel inflasjonsstyring?",
      options: ["Sentralbanken vekter både inflasjonsmålet og realøkonomien ($d_1$ og $d_2$)", "Inflasjonsmålet endres fritt fra år til år", "Renten settes utelukkende etter inflasjonen", "Renten holdes alltid fast"],
      explanation: "Vekten på både inflasjonsavvik ($d_1$) og produksjonsgap ($d_2$) i renteregelen speiler den fleksible styringen.",
    },
    {
      question: "Hva er en automatisk stabilisator?",
      options: ["En mekanisme som demper svingninger uten nye vedtak, som endogen skatt", "Et vedtak Stortinget gjør i hver nedgang", "En renteendring fra sentralbanken", "Et engangstilskudd til bedrifter"],
      explanation: "Endogen skatt $T=z^T+tY$ og motsykliske overføringer virker umiddelbart uten vedtak, i motsetning til diskresjonær politikk.",
    },
    {
      question: "Når skal du gi en konklusjon i en drøftingsoppgave?",
      options: ["Bare når oppgaven eksplisitt ber om det", "Alltid, uansett formulering", "Aldri", "Bare hvis du rekker det"],
      explanation: "Ber ikke oppgaven om en konklusjon, er det bortkastet tid — og i casene noen ganger trekk — å gi en.",
    },
    {
      question: "Hvorfor styrkes pengepolitikkens gjennomslag i en liten åpen økonomi?",
      options: ["Renten virker også via valutakurskanalen (kurs og bytteforhold)", "Fordi finanspolitikken er avskaffet", "Fordi importen er null", "Fordi inflasjonsmålet er høyere"],
      explanation: "En renteendring flytter valutakursen, som påvirker import- og eksportpriser — en ekstra transmisjonskanal.",
    },
    {
      question: "Hva er en «strekkoppgave»?",
      options: ["En deloppgave som bygger på løst berørt stoff og brukes til å skille toppkarakterer", "En oppgave som må løses med matematikk", "En oppgave uten riktig svar", "En oppgave verdt 0 poeng"],
      explanation: "Sensor vurderer resonnementet mildt (f.eks. Ricardiansk ekvivalens) og bruker den til å differensiere de beste.",
    },
    {
      question: "En student svarer på «Gjør rede for likviditetsfellen. Ikke drøft finanspolitikk» ved å drøfte begge deler. Hva er problemet?",
      options: ["Den ekstra drøftingen gir null uttelling og bryter «svar bare på det du spørres om»", "Ingenting — mer stoff gir alltid mer poeng", "At studenten glemte en figur", "At studenten burde regnet på det"],
      explanation: "Å svare på mer enn spurt gir ingen ekstra uttelling og stjeler tid; oppgaven forbød uttrykkelig finanspolitikk-drøftingen.",
    },
    {
      question: "Hvilket argument taler MOT å legge alt konjunkturansvar på pengepolitikken?",
      options: ["Renten treffer bredt og mister kraft ved nullgrensen", "Renten kan endres for raskt", "Sentralbanken er for politisk", "Finanspolitikk har ingen virkningslag"],
      explanation: "Pengepolitikken treffer likt og bredt og blir tannløs ved nullgrensen, der finanspolitikk virker sterkere.",
    },
    {
      question: "Hva er kjernen i en god drøfting, ifølge sensor?",
      options: ["Struktur, bredde og pensumforankring — for og mot veid mot hverandre", "Et sterkt, ensidig standpunkt", "Så mange momenter som mulig uten veiing", "En lang matematisk utledning"],
      explanation: "Balansert for/mot, forankret i pensumbegreper, slår et bestemt standpunkt; ren opplisting uten veiing gir lav uttelling.",
    },
  ],
  'econ1310-6-2': [
    {
      question: "Hva er første steg i løsningsoppskriften for et rollecase?",
      options: ["Lage en situasjonsdiagnose i modellens språk (hvilke sjokk, hvilket gap)", "Gi en anbefaling med en gang", "Sette opp og utlede multiplikatoren", "Tegne IS-RR-PK-diagrammet"],
      explanation: "Du oversetter først scenariet til modellens sjokkvariabler og fortegn på gapet; det styrer hvilke hensyn som er relevante.",
    },
    {
      question: "Kreves en konklusjon (anbefaling) i et rollecase?",
      options: ["Nei — konklusjon kreves aldri, og forbys noen ganger eksplisitt", "Ja, alltid", "Bare hvis du er sentralbanksjef", "Bare i rådgiver-caset"],
      explanation: "Oppgaven ber om en avveining av alle hensyn; H2025 ba uttrykkelig om å IKKE gi en anbefaling.",
    },
    {
      question: "Hvilket perspektiv gir topputtelling i case?",
      options: ["Liten-åpen-økonomi-perspektivet (rente ↔ valutakurs ↔ bytteforhold)", "En detaljert algebraisk utledning", "En lengst mulig momentliste", "Å ignorere valutakursen"],
      explanation: "Å knytte rentebeslutningen til valutakurs og bytteforhold er en fast toppkandidat-markør i casene.",
    },
    {
      question: "Hva inngår i hensynskatalogen et case skal drøftes mot?",
      options: ["Inflasjonsmål, produksjonsgap, valutakurs, finansiell stabilitet, budsjett, stabilisatorer", "Bare inflasjonsmålet", "Bare budsjettbalansen", "Kun multiplikatorens størrelse"],
      explanation: "En systematisk gjennomgang av den faste hensynskatalogen sikrer bredden sensor krever.",
    },
    {
      question: "Hvorfor gir et kostnadssjokk sentralbanken en målkonflikt?",
      options: ["Inflasjon og produksjon trekker motsatt vei (inflasjon opp, produksjon ned)", "Fordi begge gap peker samme vei", "Fordi renten er fast", "Fordi budsjettet er i balanse"],
      explanation: "Ved stagflasjon taler det negative gapet for kutt mens inflasjonen over målet taler for innstramming — renten kan ikke nå begge mål.",
    },
    {
      question: "Et case beskriver overoppheting (positivt gap, inflasjon over målet). Hvilket valg er åpenbart feil?",
      options: ["Å kutte renten / føre ekspansiv politikk", "Å heve renten", "Å la automatiske stabilisatorer virke", "Å stramme til finanspolitisk"],
      explanation: "Ved overoppheting taler både gap og inflasjon for innstramming; rentekutt regnes som et åpenbart feil politikkvalg.",
    },
    {
      question: "Hva er en typisk feil i case-besvarelser?",
      options: ["Å dikte inn forutsetninger utover caseteksten", "Å holde seg til caseteksten", "Å veie hensyn for og mot", "Å nevne finansiell stabilitet"],
      explanation: "Å legge til egne tall eller antakelser trekker; man skal holde seg strengt til det som står.",
    },
    {
      question: "Caset nevner høy husholdningsgjeld og fallende boligpriser. Hvilket hensyn må med?",
      options: ["Finansiell stabilitet", "Telleregelen", "Multiplikatorens størrelse", "Realvalutakurs-beregning"],
      explanation: "Høy gjeld og boligprisfall er et finansiell-stabilitet-hensyn som kan tale mot aggressive rentekutt.",
    },
    {
      question: "En handelskonflikt gir eksportfall og dyrere import samtidig. Hvordan behandles det?",
      options: ["Som to sjokk ($\\Delta X<0$ og $\\Delta z^\\pi>0$) analysert hver for seg", "Som ett rent etterspørselssjokk", "Som ett rent kostnadssjokk", "Som en endring i telleregelen"],
      explanation: "Én hendelse kan romme to sjokk; de må skilles og veies før nettoeffekten drøftes.",
    },
    {
      question: "Hva gjør et rentekutt i en liten åpen økonomi via valutakurskanalen?",
      options: ["Svekker valutaen — bedrer eksporten, men løfter importprisene", "Styrker valutaen og senker importprisene", "Har ingen effekt på valutaen", "Fjerner budsjettunderskuddet"],
      explanation: "Lavere rente svekker kronen, som styrker eksportkonkurransen men forsterker importert inflasjon.",
    },
    {
      question: "Hvorfor gir et rent etterspørselssjokk INGEN målkonflikt for sentralbanken?",
      options: ["Inflasjons- og produksjonsgap trekker samme vei", "Fordi renten er fast", "Fordi PK skifter", "Fordi budsjettet balanseres"],
      explanation: "Ved etterspørselssjokk peker begge gap samme vei, så én renterespons løser begge — motsatt av kostnadssjokk.",
    },
    {
      question: "Hva er forskjellen på automatiske stabilisatorer og diskresjonære tiltak?",
      options: ["Stabilisatorer virker umiddelbart uten vedtak; diskresjonære krever vedtak og har lag", "Diskresjonære virker umiddelbart, stabilisatorer har lag", "De er det samme", "Stabilisatorer gjelder bare pengepolitikk"],
      explanation: "Endogen skatt og trygd demper automatisk; aktive tiltak må vedtas og har beslutnings-/virkningslag, men kan målrettes.",
    },
    {
      question: "Sentralbanken har varslet et rentekutt, men inflasjonen kommer inn uventet sterkt. Hva er nøkkelspørsmålet?",
      options: ["Om inflasjonsoverraskelsen er midlertidig eller smitter til forventningene $\\pi^e$", "Om budsjettet er i balanse", "Om multiplikatoren er over 1", "Om modellen er determinert"],
      explanation: "Er presset varig / forankret i høyere $\\pi^e$, taler det mot kutt; er det midlertidig, kan sentralbanken se gjennom det.",
    },
    {
      question: "Hva menes med situasjonsdiagnose i et case?",
      options: ["Å oversette scenariet til sjokk, gap-fortegn og inflasjonens forhold til målet", "Å gi den endelige anbefalingen", "Å regne ut skattemultiplikatoren", "Å tegne lønns- og priskurven"],
      explanation: "Diagnosen er modell-oversettelsen som avgjør hvilke hensyn og virkemidler som er relevante.",
    },
    {
      question: "Hva er en riktig avslutning på et case som ber deg IKKE anbefale noe?",
      options: ["En veid oppsummering av hensynene, uten å velge et virkemiddel", "En tydelig anbefaling om å kutte renten", "En matematisk utledning av multiplikatoren", "En påstand uten begrunnelse"],
      explanation: "Uten forespørsel om anbefaling skal svaret vise avveiningen for og mot — ikke ende i et valg.",
    },
  ],
  'econ1310-6-3': [
    {
      question: "«Forbrukertilliten stuper og folk vil spare mer.» Hvilket sjokk?",
      options: ["$\\Delta z^C<0$ (etterspørselssjokk, skifter IS)", "$\\Delta z^\\pi>0$ (kostnadssjokk, skifter PK/RR)", "$\\Delta Y^n<0$ (potensialsjokk)", "$\\Delta \\pi^e>0$ (forventningssjokk)"],
      explanation: "Lavere forbruk uavhengig av inntekt er et negativt konsumsjokk som skifter IS mot venstre; RR skifter ikke.",
    },
    {
      question: "«Energiprisene stiger kraftig.» Hvilket sjokk, og hvilke kurver skifter?",
      options: ["$\\Delta z^\\pi>0$ — skifter PK og RR opp", "$\\Delta z^C>0$ — skifter IS", "$\\Delta G>0$ — skifter IS", "$\\Delta X<0$ — skifter IS"],
      explanation: "Høyere energipriser er et kostnadssjokk i prispåslaget; det skifter PK og (siden PK er bakt inn i RR) også RR.",
    },
    {
      question: "Hvorfor skifter et rent etterspørselssjokk IKKE RR-kurven?",
      options: ["Phillips-kurven er bakt inn i RR; bare $z^\\pi$, $\\pi^e$ og $Y^n$ skifter RR", "Fordi renten er fast", "Fordi IS ikke finnes i modellen", "Fordi etterspørselssjokk ikke påvirker $Y$"],
      explanation: "RR inneholder allerede Phillips-kurven, så bare det som skifter PK (kostnad, forventning, potensial) skifter RR.",
    },
    {
      question: "«Kronen svekker seg og importvarer blir dyrere.» Hvilket sjokk?",
      options: ["$\\Delta z^\\pi>0$ (importert inflasjon, kostnadssjokk)", "$\\Delta z^C>0$ (etterspørselssjokk)", "$\\Delta z^I>0$ (etterspørselssjokk)", "$\\Delta Y^n>0$ (potensialsjokk)"],
      explanation: "Dyrere import er importert inflasjon — et positivt kostnadssjokk som virker via prispåslaget, ikke etterspørselen.",
    },
    {
      question: "«Regjeringen satser stort på forsvar og samferdsel.» Hvilket sjokk?",
      options: ["$\\Delta G>0$ (etterspørselssjokk, skifter IS mot høyre)", "$\\Delta z^\\pi>0$ (kostnadssjokk)", "$\\Delta \\pi^e>0$ (forventningssjokk)", "$\\Delta Y^n<0$ (potensialsjokk)"],
      explanation: "Offentlig satsing er økte offentlige kjøp $G$ — et etterspørselssjokk som skifter IS mot høyre.",
    },
    {
      question: "«Stor arbeidsinnvandring øker arbeidsstyrken varig.» Hvilket sjokk?",
      options: ["$\\Delta Y^n>0$ (potensialsjokk)", "$\\Delta z^C>0$ (etterspørselssjokk)", "$\\Delta z^\\pi<0$ (kostnadssjokk)", "$\\Delta G>0$ (etterspørselssjokk)"],
      explanation: "Økt varig arbeidsstyrke hever potensielt BNP $Y^n$; det påvirker gap-leddet, ikke etterspørselen direkte.",
    },
    {
      question: "Hva er forskjellen på $z^\\pi$ og $\\pi^e$?",
      options: ["$z^\\pi$ er et faktisk kostnads-/prispåslag; $\\pi^e$ er forventet inflasjon", "De er identiske", "$z^\\pi$ er forventninger; $\\pi^e$ er et kostnadssjokk", "Begge er etterspørselssjokk"],
      explanation: "Begge skifter Phillips-kurven, men $z^\\pi$ er et realisert kostnadssjokk mens $\\pi^e$ er forventningskanalen.",
    },
    {
      question: "En handelskonflikt gir både eksportfall og dyrere import. Hva er riktig?",
      options: ["Det er to sjokk — $\\Delta X<0$ (IS) og $\\Delta z^\\pi>0$ (PK/RR) — analysert hver for seg", "Det er ett rent etterspørselssjokk", "Det er ett rent kostnadssjokk", "Ingen kurver skifter"],
      explanation: "Én hendelse kan romme flere sjokk; her ett etterspørselssjokk og ett kostnadssjokk som må skilles.",
    },
    {
      question: "Hvilken huskeregel gjelder for hva et sjokk treffer?",
      options: ["Etterspørselssjokk skifter IS; kostnads-/forventnings-/potensialsjokk skifter PK (og RR)", "Alle sjokk skifter RR", "Alle sjokk skifter bare IS", "Sjokk skifter aldri kurvene"],
      explanation: "$z^C, z^I, z^T, G, X$ treffer IS; $z^\\pi, \\pi^e, Y^n$ treffer PK og dermed RR.",
    },
    {
      question: "Hva bør du alltid gjøre FØR du analyserer en aktualitetsoppgave?",
      options: ["Oversette nyhetsbildet til riktig sjokkvariabel og fastslå type", "Skrive konklusjonen først", "Regne ut multiplikatoren", "Tegne lønns- og priskurven"],
      explanation: "Feil oversettelse gir feil analyse uansett hvor god algebraen er; identifiser sjokket og typen først.",
    },
  ],
  'econ1310-7-1': [
    {
      question: "Hvordan verdsettes offentlig, ikke-markedsrettet produksjon (som forsvar og skole) i BNP?",
      options: ["Til faktorinnsatsen, altså kostnadene (i hovedsak lønn)", "Til markedsprisen tjenestene ville hatt om de ble solgt", "Den holdes utenfor BNP siden den ikke omsettes", "Til den prisen brukerne betaler i egenandeler"],
      explanation: "Uten markedspris verdsettes offentlig tjenesteproduksjon til faktorinnsatsen (kostnadene). Det er derfor den likevel inngår i BNP.",
    },
    {
      question: "Hva er forskjellen mellom BNP og BNI?",
      options: ["BNP måler produksjon innenlands; BNI legger til netto formuesinntekt og lønn fra utlandet", "BNP legger til netto formuesinntekt fra utlandet; BNI måler bare innenlands produksjon", "BNP er før skatt, BNI er etter skatt", "BNP gjelder privat sektor, BNI hele økonomien"],
      explanation: "BNI = BNP + netto formuesinntekter og lønn fra utlandet, og måler inntekten til landets innbyggere uansett hvor produksjonen skjer.",
    },
    {
      question: "Et meglerhonorar ved salg av en brukt bolig – inngår det i BNP?",
      options: ["Ja, honoraret er en nyprodusert tjeneste, selv om boligen ikke inngår", "Nei, alt ved bruktboligsalg står utenfor BNP", "Ja, både boligverdien og honoraret inngår", "Nei, bare hvis megleren er offentlig ansatt"],
      explanation: "Selve bruktboligen er ikke ny produksjon, men meglertjenesten produseres i perioden og inngår derfor i BNP.",
    },
    {
      question: "I en lukket økonomi er netto finansinvesteringer for alle sektorer samlet lik:",
      options: ["Null, fordi enhver fordring er en annen sektors gjeld", "Lik samlet realinvestering $I$", "Lik budsjettunderskuddet", "Positiv, siden husholdningene sparer"],
      explanation: "Alle fordringer motsvares av gjeld innenlands, så summen er null. Det gir også $S = I$.",
    },
    {
      question: "Hva er potensielt BNP?",
      options: ["Produksjonen ved langsiktig opprettholdbar utnyttelse av arbeidskraft og kapital", "Det høyeste BNP økonomien noen gang har hatt", "BNP i et år uten arbeidsledighet overhodet", "Summen av alt landet kan produsere hvis alle jobber døgnet rundt"],
      explanation: "Potensielt BNP er nivået ved bærekraftig faktorutnyttelse; det øker f.eks. ved arbeidsinnvandring eller produktivitetsvekst.",
    },
    {
      question: "Hvilke er pengenes tre funksjoner?",
      options: ["Betalingsmiddel, måleenhet/verdimål og verdioppbevaring", "Betalingsmiddel, kredittgiver og skattegrunnlag", "Sparing, investering og konsum", "Verdivekst, verdioppbevaring og forsikring"],
      explanation: "Penger fungerer som byttemiddel, felles prisenhet og lager for kjøpekraft over tid.",
    },
    {
      question: "Hva kjennetegner en obligasjon sammenlignet med en aksje for investoren?",
      options: ["Obligasjonseieren er kreditor med avtalt rente og prioritet foran eierne ved konkurs", "Obligasjonseieren er medeier med stemmerett og utbytte", "Obligasjonseieren står bakerst i konkurskøen", "Obligasjonen gir eierandel, aksjen gir bare rente"],
      explanation: "En obligasjon er et gjeldsbrev: investoren er kreditor, får rente og dekkes før aksjonærene ved konkurs.",
    },
    {
      question: "Hvorfor har en statsobligasjon typisk lavere rente enn en bedriftsobligasjon?",
      options: ["Staten har høyere kredittverdighet, så risikopremien er lavere", "Staten betaler alltid ut utbytte i tillegg til rente", "Bedrifter er fritatt for å betale risikopremie", "Statsobligasjoner har lengre løpetid og derfor lavere rente"],
      explanation: "Renten inneholder en risikopremie for misligholdsrisiko; statens lave konkursrisiko gir lav premie.",
    },
    {
      question: "Hvilke kriterier må være oppfylt for å regnes som arbeidsledig i AKU?",
      options: ["Uten inntektsgivende arbeid, aktivt søkt siste fire uker, og kan tiltre raskt", "Registrert hos NAV og mottar dagpenger", "Uten arbeid i minst tolv måneder", "Uten arbeid og over 25 år gammel"],
      explanation: "AKU krever at man er uten arbeid, har søkt aktivt siste fire uker og kan begynne raskt. «Aktivt søkt» glemmes ofte.",
    },
    {
      question: "Ledighetsraten $u$ beregnes som:",
      options: ["Arbeidsledige delt på arbeidsstyrken", "Arbeidsledige delt på hele befolkningen", "Arbeidsledige delt på antall sysselsatte", "Sysselsatte delt på arbeidsstyrken"],
      explanation: "$u = \\frac{\\text{arbeidsledige}}{\\text{arbeidsstyrken}}$, der arbeidsstyrken er sysselsatte pluss ledige – ikke hele befolkningen.",
    },
    {
      question: "Hva kjennetegner konjunkturledighet?",
      options: ["Den skyldes for lav samlet etterspørsel når $Y < Y^n$", "Den skyldes at arbeidssøkere mangler riktig kompetanse", "Den skyldes normal søketid mellom jobber", "Den er den ledigheten økonomien alltid vender tilbake til"],
      explanation: "Konjunkturledighet oppstår ved etterspørselssvikt (produksjon under potensialet) og forsvinner når aktiviteten tar seg opp.",
    },
    {
      question: "Hva måler realvalutakursen $\\frac{E \\cdot P^*}{P}$?",
      options: ["Konkurranseevnen – prisen på utenlandske varer målt i norske varer", "Antall kroner per euro alene", "Forskjellen mellom norsk og utenlandsk rente", "Landets samlede eksportinntekter"],
      explanation: "Realvalutakursen kombinerer nominell kurs og prisnivåene og uttrykker konkurranseevnen; den kan endres selv med fast $E$.",
    },
    {
      question: "En svakere krone (høyere $E$) gir typisk:",
      options: ["Dyrere import og importert inflasjon, men bedret eksportkonkurranse", "Billigere import og lavere inflasjon", "Dyrere eksport og svekket eksportkonkurranse", "Ingen virkning på inflasjonen"],
      explanation: "Høyere $E$ hever importprisene (positivt $z^\\pi$) og gjør norsk eksport billigere ute – begge kanaler skal med.",
    },
    {
      question: "Hva sier trilemmaet i pengepolitikken?",
      options: ["Man kan ikke ha fast kurs, fri kapitalbevegelse og selvstendig pengepolitikk samtidig – velg to", "Man kan ikke ha lav inflasjon, lav ledighet og vekst samtidig", "Man kan ikke ha både finans- og pengepolitikk aktiv samtidig", "Man kan ikke ha handel med mer enn to land samtidig"],
      explanation: "Trilemmaet: fast valutakurs, fri kapitalflyt og selvstendig rente – bare to av tre er mulig. Norge har flytende kurs og selvstendig rente.",
    },
    {
      question: "Når er en modell determinert?",
      options: ["Når antall ligninger er lik antall endogene variabler", "Når alle variabler er eksogene", "Når den er en åpen økonomi", "Når renten er tatt med"],
      explanation: "Determinerthet krever like mange ligninger som endogene variabler; da har modellen en entydig løsning.",
    },
    {
      question: "Hvilken av disse er en eksogen variabel i Keynes-modellen?",
      options: ["Skiftvariabelen $z^C$", "Samlet produksjon $Y$", "Skatteinngangen $T$", "Privat konsum $C$"],
      explanation: "$z$-leddene er eksogene skiftvariabler, mens $Y$, $C$ og $T$ bestemmes inne i modellen (endogene).",
    },
    {
      question: "Hvorfor antar vi $0 < c_1 < 1$ for den marginale konsumtilbøyeligheten?",
      options: ["Konsum øker med inntekt, men husholdningene sparer en del av hver ekstra krone", "Konsum faller alltid når inntekten øker", "Fordi renten alltid er positiv", "Fordi skatten alltid er mindre enn inntekten"],
      explanation: "$c_1$ er konsumøkningen per krone ekstra inntekt: positiv fordi konsum stiger, under 1 fordi noe spares.",
    },
    {
      question: "Hva er den viktigste automatiske stabilisatoren i modellen?",
      options: ["Den endogene skatten $tY$, som demper svingninger uten vedtak", "Diskresjonære krisepakker vedtatt av Stortinget", "Sentralbankens rentekutt", "Handlingsregelens 3-prosentbane"],
      explanation: "Endogen skatt tapper mer i oppgang og mindre i nedgang, og demper konjunktursvingninger uten politiske vedtak.",
    },
    {
      question: "Hvorfor løfter én krone i økte offentlige kjøp BNP mer enn én krone i skattelette?",
      options: ["G virker direkte krone for krone; skattelette virker bare via konsumet med faktor $c_1 < 1$", "Skattelette virker direkte, mens G virker via konsumet", "De gir nøyaktig samme virkning på BNP", "Skattelette lekker aldri til sparing"],
      explanation: "Offentlige kjøp treffer etterspørselen fullt ut første runde; en skattelette spares delvis ($1-c_1$), så G-multiplikatoren er størst.",
    },
    {
      question: "Hva er skattelekkasjen i multiplikatorprosessen?",
      options: ["Andelen av inntektsøkningen som tappes til skatt ($t$) i hver runde", "At staten låner for å finansiere skattekutt", "At skatteinntektene forsvinner til utlandet", "At sparingen øker mer enn skatten"],
      explanation: "I hver multiplikatorrunde trekkes $tY$ ut som skatt, slik at mindre driver videre konsum – det gjør multiplikatoren mindre.",
    },
    {
      question: "Hva sier handlingsregelen for bruk av oljeinntekter?",
      options: ["Over tid skal om lag forventet realavkastning (3 %) av SPU brukes, målt ved strukturelt underskudd", "Nøyaktig 3 % av fondet skal brukes hvert eneste år", "Alle løpende oljeinntekter skal brukes fortløpende", "Fondet skal aldri tæres på i nedgangstider"],
      explanation: "Regelen gjelder over tid, styres etter det strukturelle (konjunkturrensede) underskuddet og åpner for mer bruk i nedgang.",
    },
    {
      question: "Forskjellen på oljekorrigert og strukturelt oljekorrigert underskudd er at det strukturelle er:",
      options: ["Konjunkturrenset – justert for hvor økonomien er i syklusen", "Det faktiske underskuddet uten justering", "Inkludert oljeinntektene", "Alltid større enn det oljekorrigerte"],
      explanation: "Det oljekorrigerte er faktisk underskudd uten olje; det strukturelle er konjunkturrenset og er størrelsen handlingsregelen styrer etter.",
    },
    {
      question: "Hva er riktig rekkefølge i Phillips-kurvens kausalkjede bak $\\beta$?",
      options: ["Høyere gap → lavere ledighet → sterkere forhandlingsmakt → høyere lønn → høyere marginalkostnad → påslag → høyere inflasjon", "Høyere gap → høyere rente → lavere lønn → lavere inflasjon", "Lavere gap → lavere ledighet → høyere lønn → høyere inflasjon", "Høyere gap → lavere marginalkostnad → lavere pris → lavere inflasjon"],
      explanation: "Kjeden går fra aktivitet via arbeidsmarked og lønn til marginalkostnad og prispåslag – marginalkostnad → påslag glemmes ofte.",
    },
    {
      question: "Hva menes med fleksibel inflasjonsstyring?",
      options: ["Sentralbanken vekter både inflasjonsmålet og realøkonomien ($d_1$ og $d_2$)", "Sentralbanken bryr seg bare om inflasjonen og ignorerer produksjonen", "Inflasjonsmålet endres fritt fra år til år", "Renten holdes fast uansett inflasjon"],
      explanation: "Fleksibel inflasjonsstyring legger vekt på både inflasjon og realøkonomi og bringer inflasjonen til målet over tid, ikke umiddelbart.",
    },
    {
      question: "Hvorfor virker finanspolitikk sterkere i en likviditetsfelle?",
      options: ["Renten er ved nedre grense, så den vanlige rentedempingen uteblir", "Fordi skattene automatisk faller til null", "Fordi sentralbanken hever renten kraftig", "Fordi husholdningene slutter å spare"],
      explanation: "Ved nullgrensen kan ikke renten kuttes videre for å motvirke stimulansen, så finanspolitikkens fulle virkning slår gjennom.",
    },
  ],
};

export default quizData_econ1310;
