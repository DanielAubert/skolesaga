import type { QuizQuestion } from './quiz-data';

const quizData_juroff1500: Record<string, QuizQuestion[]> = {
  'juroff1500-0-1': [
    {
      question: "Hvilken form har eksamen i JUROFF1500 fra og med høsten 2026?",
      options: ["Fire timers digital skoleeksamen i Inspera, med Lovdata Pro i eksamensmodus og krav om korrekte kildehenvisninger", "Fire timers hjemmeeksamen i Inspera med fri tilgang til alle kilder, slik det var fra høsten 2020 til høsten 2025", "Fem timers skoleeksamen med seks til ti nummererte kortsvarsspørsmål, slik formen var fram til høsten 2019", "Fire timers digital skoleeksamen uten hjelpemidler, der lovteksten deles ut som papirvedlegg til oppgaven"],
      explanation: "Formen fra høsten 2026 er fire timers digital skoleeksamen med åpen bok: Lovdata Pro i eksamensmodus pluss alt skriftlig materiale på papir, og med krav om korrekte kildehenvisninger. Hjemmeeksamensformen er den forrige, ikke den gjeldende, og kortsvarsformen på fem timer sluttet i 2019. At eksamen skulle være uten hjelpemidler er direkte i strid med at hele emnet er bygget rundt å navigere ekte lovtekst.",
    },
    {
      question: "Hvor mange eksamensterminer er JUROFF1500-boka kalibrert mot?",
      options: ["34 terminer, fra våren 2005 til høsten 2025", "32 terminer, som er de terminene der oppgavesettet ligger i selve materialsamlingen", "42 terminer, som svarer til antallet oppgavesett-filer materialet inneholder", "28 terminer, som er de terminene der eksamen hadde form av korte spørsmål"],
      explanation: "Nevneren i alle frekvenstall i boka er 34 terminer, fra våren 2005 til høsten 2025. Tallet 32 er antall terminer med oppgavesett i selve arkivet — de to øvrige er lest fra UiOs egne sider. Tallet 42 er et filtall og ikke et termintall, fordi ti filpar er samme sett i to filformater. Tallet 28 er kortsvarsregimet alene.",
    },
    {
      question: "Hva kjennetegner lovanalyseoppgaven, og hva er sjangerfeilen i den?",
      options: ["Du får et paragrafnummer og skal tolke bestemmelsen i fem trinn; sjangerfeilen er å konstruere et faktum og subsumere under det", "Du får et faktum med navngitte parter og skal finne problemstillingene selv; sjangerfeilen er å gjengi regelen uten å bruke den", "Du får et begrepspar og skal formulere forskjellen i én setning; sjangerfeilen er å definere begrepene hver for seg", "Du får flere underspørsmål som skal bindes sammen; sjangerfeilen er å besvare dem enkeltvis uten å vise sammenhengen"],
      explanation: "Lovanalysen gir deg en navngitt bestemmelse og ber deg bryte den ned i vilkår: gjerningsperson, objektive vilkår, det sentrale substantivet, verbet og skyldkravet. Det finnes ikke noe faktum, så det å dikte opp et saksforhold er nettopp sjangerfeilen. De tre øvrige beskriver praktikum, sammenlikningsvarianten av kortsvaret og systematiseringsoppgaven.",
    },
    {
      question: "Hvor mange av de 34 terminene er skrevet til straffeloven av 1902?",
      options: ["20 terminer, altså alle fra våren 2005 til og med høsten 2015", "14 terminer, altså alle fra våren 2016 og fram til den siste høsteksamenen i 2025", "6 terminer, altså de terminene som hadde hjemmeeksamen med teori og praktikum", "28 terminer, altså alle terminene der eksamen besto av korte, nummererte spørsmål"],
      explanation: "Straffeloven 2005 trådte i kraft ved årsskiftet 2015/2016, og de 20 terminene fram til og med høsten 2015 er derfor skrevet til den gamle loven. De 14 øvrige er skrevet til gjeldende lov. Tallet 6 gjelder hjemmeeksamensterminene og tallet 28 kortsvarsregimet — begge er andre inndelinger av det samme materialet.",
    },
    {
      question: "Hvilken oppgaveform dominerer i 28 av 34 terminer?",
      options: ["Kortsvarsspørsmålet, der du gir en avgrenset framstilling av ett begrep uten at det finnes noe faktum", "Praktikumsoppgaven, der du får en historie med navngitte parter og skal finne problemstillingene selv", "Systematiseringsoppgaven, der flere underspørsmål skal settes inn i sin naturlige sammenheng", "Teorioppgaven, der du skriver en bred og sammenhengende framstilling med innledning og sammenfatning"],
      explanation: "Kortsvarsspørsmålet dominerer de 28 terminene i kortsvarsregimet, med seks til ti slike spørsmål på fem timer. Praktikum finnes ikke i materialet før høsten 2020, teorioppgaven hører til de samme seks siste terminene, og systematiseringsoppgaven opptrer bare én gang.",
    },
    {
      question: "En medstudent sier at forsett må være prøvd i 30 av 34 terminer, siden skyldlæren er det. Hva er galt?",
      options: ["Klyngetallet er en union av flere temaer, og forsett alene er prøvd i 13 av 34 terminer", "Klyngetallet gjelder bare kortsvarsregimet, mens forsett også er prøvd i hjemmeeksamensterminene", "Klyngetallet teller antall spørsmål og ikke antall terminer, slik at nevneren blir en annen", "Klyngetallet gjelder bare de terminene der det finnes en sensorveiledning, altså de seks siste"],
      explanation: "Riktig svar er at et klyngetall er en union: skyldlæren er til stede i 30 av 34 terminer fordi minst ett av temaene forsett, uaktsomhet, rus, tilregnelighet eller villfarelse var oppe. Forsett alene er prøvd i 13 av 34 terminer. De tre øvrige forklaringene endrer nevneren eller telleenheten, men klyngetallet bruker nøyaktig samme nevner og samme telleenhet som enkelttallene.",
    },
    {
      question: "Hva er en sensorveiledning i dette emnet, og hvor mange finnes det?",
      options: ["Et notat fra oppgaveforfatteren til sensor om hva oppgaven tester; det finnes 6 sensorveiledninger, alle fra høsten 2020 og senere", "Et dokument med løsning som UiO publiserer sammen med selve oppgaven; det finnes én slik for hver av de 34 terminene", "En modellbesvarelse skrevet av en kandidat som fikk toppkarakter; det finnes seks slike, én for hver av de siste terminene", "En oversikt over karakterfordelingen etter sensuren; den utarbeides hver termin og ligger på emnesiden sammen med oppgaven"],
      explanation: "En sensorveiledning er et notat fra den som lager oppgaven til den som retter, om hva oppgaven er ment å teste. Det finnes 6 av dem, og de dekker bare høstterminene fra 2020 til 2025 — 28 av 34 terminer har ingen. Materialet inneholder verken løsningsforslag, kandidatbesvarelser eller karakterstatistikk, så de tre øvrige beskriver dokumenter som ikke finnes for dette emnet.",
    },
    {
      question: "Hva er den dyreste konsekvensen av å la ett spørsmål stå ubesvart i et kortsvarssett?",
      options: ["Spørsmålene er likevektede, så ett ubesvart spørsmål er et direkte tap på mellom 10 og 17 % av grunnlaget", "Sensor gir etter fast praksis automatisk stryk når ett spørsmål står ubesvart, uansett kvaliteten på de øvrige svarene", "Besvarelsen vurderes i det nedre sjiktet fordi et ubesvart spørsmål regnes som en metodisk mangel", "Karakteren settes ned med ett trinn per ubesvart spørsmål, etter en fast regel i fakultetets skjema"],
      explanation: "Med seks til ti likevektede spørsmål tilsvarer ett ubesvart spørsmål mellom 10 og 17 % av grunnlaget, og tapet kommer før noen har vurdert kvaliteten på det du faktisk skrev. Materialet gir ikke grunnlag for noen automatisk strykregel, noen regel om nedre sjikt eller noen fast trinnvis nedsettelse — slike mekaniske regler finnes ikke i det som er dokumentert.",
    },
    {
      question: "Hva betyr det at V2015 og H2015 er merket «(ikke i arkivet)»?",
      options: ["Oppgavesettene er publisert av UiO og lest derfra, men ligger ikke i materialsamlingen boka ellers bygger på", "Det ble ikke avholdt eksamen i disse to terminene, og de teller derfor ikke med i nevneren på 34 terminer", "Oppgavesettene finnes, men de er skannet uten tekstlag og kan derfor ikke leses uten særskilte hjelpemidler", "Disse to terminene mangler sensorveiledning, i motsetning til de øvrige terminene fra samme periode"],
      explanation: "De to terminene er publisert av UiO og lest fra UiOs egne sider, men ligger ikke i selve materialsamlingen — derfor merkingen, hver gang de inngår i et frekvenstall. De teller likevel i nevneren på 34 terminer, siden oppgaveteksten foreligger. De to terminene der eksamen ikke finnes publisert i det hele tatt, er høsten 2007 og våren 2010.",
    },
    {
      question: "Hva skiller teorioppgaven fra kortsvarsspørsmålet?",
      options: ["Teorioppgaven er bredere og skal henge sammen som én tekst med innledning, problemstilling og sammenfatning", "Teorioppgaven gir deg et faktum med navngitte parter, mens kortsvaret aldri inneholder et saksforhold", "Teorioppgaven krever at du oppgir korrekte kildehenvisninger, mens kortsvaret bare krever at du nevner loven", "Teorioppgaven har fem faste trinn som skal følges i rekkefølge, mens kortsvaret kan disponeres fritt"],
      explanation: "Teorioppgaven er den brede, sammenhengende formen med innledning, problemstilling, disponerte deler og en sammenfatning, mens kortsvaret er en avgrenset leveranse på 30 til 50 minutter. Verken teorioppgaven eller kortsvaret gir deg et faktum — det gjør praktikum. Kravet om korrekte kildehenvisninger gjelder eksamensformen som helhet fra høsten 2026, og femtrinnsstrukturen hører til lovanalysen.",
    },
    {
      question: "Hvorfor sier boka at oppgavestrukturen fra høsten 2026 ikke er kjent?",
      options: ["Fordi det ikke finnes noe oppgavesett i den nye formen ennå, og en beskrivelse ville vært en gjetning", "Fordi UiO holder strukturen hemmelig fram til eksamensdagen for å hindre at kandidater innretter seg", "Fordi strukturen varierer fra år til år og bestemmes av den enkelte oppgaveforfatteren hver høst", "Fordi den nye formen bare er en midlertidig ordning som skal evalueres før den fastsettes endelig"],
      explanation: "Grunnen er ganske enkelt at ingen sett i den formen finnes ennå, og boka skiller konsekvent mellom det materialet viser og det noen antar. Materialet gir ikke grunnlag for påstander om hemmelighold, om at strukturen skulle variere fritt mellom år, eller om at ordningen er midlertidig.",
    },
    {
      question: "Hvilket tema ligger øverst i frekvenstabellen som eget enkelttema?",
      options: ["Forsøk, som er prøvd i 21 av 34 terminer", "Medvirkning, som er prøvd i 18 av 34 terminer", "Legalitetsprinsippet, som er prøvd i 16 av 34 terminer", "Uaktsomhet, som er prøvd i 15 av 34 terminer"],
      explanation: "Forsøk er materialets mest prøvde enkelttema med 21 av 34 terminer. Medvirkning følger på 18, legalitetsprinsippet på 16 og uaktsomhet på 15 — alle tre er høyfrekvente og hører til det du skal kunne, men ingen av dem ligger øverst. Klyngen juridisk metode har et høyere tall enn alle fire, men den er en samlekategori og ikke et enkelttema.",
    },
    {
      question: "Hva er riktig om sesongmønstre i materialet, for eksempel at nødverge har kommet oftere om høsten?",
      options: ["Mønsteret gjelder bare kortsvarsregimet fram til 2019, og ingen av mønstrene er sterke nok til å bære en prognose", "Mønsteret gjelder hele perioden fra 2005 og framover, og kan brukes til å anslå hvilke temaer som er mest sannsynlige neste høst", "Mønsteret gjelder bare de seks terminene med sensorveiledning, siden det er de eneste som er dokumentert", "Mønsteret er en tilfeldighet i tellingen og skyldes at to terminer mangler helt fra oversikten"],
      explanation: "Sesongmønstrene er hentet fra de 28 terminene i kortsvarsregimet, og fra høsten 2020 finnes bare høstterminer — så mønsteret skiller ikke lenger mellom noe. Ingen av dem er dessuten sterke nok til å bære en prognose. De er tatt med fordi de viser at spørsmål ble rotert mellom semestrene, ikke fordi de sier noe om neste sett.",
    },
    {
      question: "Hvilket av disse spørsmålene er materialets mest gjenbrukte formulering?",
      options: ["Om et straffebud som er skrevet for en aktiv handling kan overtres ved passivitet — ordrett i 7 terminer og med ett ord lagt til i én", "Om hva reelle hensyn er og hvilken vekt slike hensyn kan ha i strafferetten — stilt ordrett eller nær ordrett i alle sine 10 av 34 terminer", "Om hvor den nedre grensen for vold går, og om å gi eksempler på slike krenkelser — stilt i 5 terminer i det gamle lovregimet", "Om hva rettsvillfarelse er og hvilken betydning det har at gjerningspersonen har vært i rettsvillfarelse — stilt i 6 terminer"],
      explanation: "Passivitetsspørsmålet er materialets mest gjenbrukte enkeltformulering: ordrett i 7 terminer og med ett ord lagt til i én, altså til sammen 8 av 34 terminer. Reelle hensyn følger tett med 10 forekomster, men da er hele forekomstantallet talt, ikke antallet ordrette gjentakelser. De to øvrige er gjengangere med lavere tall.",
    },
  ],
  'juroff1500-0-2': [
    {
      question: "Hva betyr «jf.» i en lovhenvisning, og hvor står hovedhjemmelen i kjeden?",
      options: ["Det betyr jamfør, altså sammenhold med, og hovedhjemmelen står først, mens det som følger etter er støtte", "Det betyr jamfør, altså sammenhold med, og hovedhjemmelen står sist i kjeden fordi den er viktigst", "Det er en henvisning til at bestemmelsene er likestilte, og rekkefølgen mellom dem har ingen betydning", "Det betyr at bestemmelsen etter jf. erstatter den foran, fordi den nyeste regelen alltid går foran"],
      explanation: "Riktig svar er at jf. betyr jamfør, altså sammenhold med, og at hovedhjemmelen står først. Det som kommer etter jf. er støtte eller vilkårskilde. Rekkefølgen er altså ikke likegyldig, og henvisningen er en påstand om hvordan bestemmelsene henger sammen — ikke en opplysning om at de er like viktige eller at den ene fortrenger den andre.",
    },
    {
      question: "Hva er «straffeloven § 18 (1) b» skrevet med leddet i ord?",
      options: ["Straffeloven § 18 første ledd bokstav b, der tallet i parentes er leddet", "Straffeloven § 18 første punktum bokstav b, siden tallet i parentes viser til setningen", "Straffeloven § 18 bokstav b annet ledd, siden bokstaven alltid leses før leddangivelsen", "Straffeloven § 18 annet ledd bokstav b, siden nummereringen av ledd starter på null"],
      explanation: "Tallet i parentes er leddet, altså avsnittet, og bokstaven er punktet i oppramsingen inne i det avsnittet. Et punktum er en setning inne i et ledd og skrives ikke i parentes. Leddnummereringen begynner på ett, og rekkefølgen i henvisningen går alltid fra det største nivået til det minste.",
    },
    {
      question: "Hva viser navnet «HR-2019-47-A» til?",
      options: ["Høyesteretts eget saksnummer: avgjørelse nummer 47 i 2019, avsagt i avdeling med fem dommere", "Norsk Retstidende for 2019, side 47, i en sak som ble avgjort av Høyesteretts ankeutvalg", "Høyesteretts avgjørelse fra 2019 der bokstaven til slutt viser hvilket lovkapittel saken gjaldt", "Avgjørelse nummer 47 fra lagmannsretten i 2019, der A angir hvilken lagmannsrett som avgjorde saken"],
      explanation: "HR-formen er Høyesteretts eget saksnummer, brukt fra 2016: nummer 47 i 2019, avdeling A med fem dommere. Bokstaven angir sammensetningen — U er ankeutvalget, S storkammer og P plenum — ikke lovkapittel eller domstol. Formen med årgang og side er Rt.-formen, som ble brukt til og med 2015.",
    },
    {
      question: "Hva skiller kumulative vilkår fra alternative vilkår?",
      options: ["Kumulative vilkår må alle være oppfylt samtidig, mens det holder at ett av de alternative er det", "Kumulative vilkår gjelder objektive forhold, mens alternative vilkår alltid gjelder gjerningspersonens skyld", "Kumulative vilkår står i samme ledd av bestemmelsen, mens alternative vilkår er spredt på flere ledd", "Kumulative vilkår kan veies mot hverandre i en helhetsvurdering, mens alternative vilkår må prøves ett for ett"],
      explanation: "Riktig svar er at kumulative vilkår må være oppfylt samtidig — faller ett bort, faller ansvaret bort — mens det holder at minst ett av flere alternative vilkår er oppfylt. Signalordene er «og» og «eller». Skillet har ingenting med objektiv og subjektiv side å gjøre, og det å veie noe mot hverandre er kjennetegnet på momenter, ikke på vilkår.",
    },
    {
      question: "Hva er strafferammen for tyveri og for grovt tyveri?",
      options: ["Bot eller fengsel inntil 2 år for tyveri, og bot eller fengsel inntil 6 år for grovt tyveri", "Bot eller fengsel inntil 1 år for tyveri, og bot eller fengsel inntil 3 år for grovt tyveri", "Fengsel inntil 2 år for tyveri, og fengsel inntil 15 år for grovt tyveri når verdien er betydelig", "Bot for tyveri og fengsel inntil 6 år for grovt tyveri, uten at bot er noe alternativ i grove tilfeller"],
      explanation: "Straffeloven § 321 setter straffen for tyveri til bot eller fengsel inntil 2 år, og § 322 setter straffen for grovt tyveri til bot eller fengsel inntil 6 år. Begge bestemmelsene har bot som alternativ, og strafferammen tredobles ved den grove varianten — den blir ikke skjerpet til femten år, som er nivået for langt alvorligere lovbrudd.",
    },
    {
      question: "Hvordan avgjør straffeloven § 322 om et tyveri er grovt?",
      options: ["Ved en helhetsvurdering der det særlig skal legges vekt på blant annet verdi, innbrudd i bolig og profesjonelt preg", "Ved en fast beløpsgrense fastsatt i loven, slik at ethvert tyveri over grensen alltid regnes som grovt uavhengig av omstendighetene", "Ved at alle de oppregnede momentene må være oppfylt samtidig før tyveriet kan regnes som grovt", "Ved at påtalemyndigheten avgjør spørsmålet når saken tas ut, slik at domstolen er bundet av den vurderingen"],
      explanation: "Bestemmelsen sier at det særlig skal legges vekt på blant annet betydelig verdi, at gjerningspersonen tok seg inn i bolig eller fritidshus, profesjonelt preg, eller at forholdet av andre grunner er særlig farlig eller samfunnsskadelig. Ordet «særlig» viser at listen ikke er uttømmende, og ordet «vekt» at ingen av punktene alene avgjør. Det er altså momenter i en helhetsvurdering, ikke kumulative vilkår og ingen fast beløpsgrense.",
    },
    {
      question: "Hvilken av disse kildehenvisningene er problematisk, og hvorfor?",
      options: ["Et presist domsnavn med presist innhold, i en sak kandidaten ikke har åpnet — fordi den ikke kan forsvares", "En henvisning som sier at Frøberg skriver om temaet i kapitlet om forsøk — fordi den mangler sidetall", "En henvisning til straffeloven § 16 uten leddangivelse — fordi en paragrafhenvisning uten ledd er ugyldig", "En henvisning til et forarbeid kandidaten har lest — fordi forarbeider ikke er tillatt i dette emnet"],
      explanation: "Den farligste henvisningen er den som ser mest profesjonell ut, men som viser til noe kandidaten ikke har lest — anvisningen for høsten 2025 er å ta stikkprøver nettopp der. En upresis, ærlig henvisning til pensum er fullt akseptabel. En paragrafhenvisning uten ledd er upresis, men ikke ugyldig, og forarbeider er lovlige og gir plusspoeng — de kan bare ikke forventes.",
    },
    {
      question: "Hva sier straffeloven § 14?",
      options: ["At strafferettslige reaksjoner bare kan ilegges med hjemmel i lov, slik overskriften også sier", "At straffelovgivningen på handlingstidspunktet anvendes, med unntak for nyere og gunstigere lovgivning", "At et straffebud også rammer den som medvirker til overtredelsen, når ikke annet er bestemt", "At en handling er offentlig når den skjer i nærvær av et større antall personer eller kan iakttas derfra"],
      explanation: "§ 14 har overskriften «Krav om lovhjemmel» og slår fast at strafferettslige reaksjoner bare kan ilegges med hjemmel i lov. Regelen om hvilken lov som gjelder i tid står i § 3, medvirkningsregelen i § 15, og definisjonen av når en handling er offentlig i § 10 — fire ulike bestemmelser som lett blandes tidlig i emnet.",
    },
    {
      question: "Hva er forarbeider, og hvilken status har de i JUROFF1500?",
      options: ["Dokumentene fra lovgivningsprosessen, som utredninger og lovforslag; de gir plusspoeng, men kan ikke forventes", "Domstolenes tidligere avgjørelser i tilsvarende spørsmål; de er bindende for underinstansene og må derfor alltid brukes", "Juridisk teori skrevet av fagpersoner etter at loven trådte i kraft; de er pensum og forutsettes kjent", "Rundskriv fra påtalemyndigheten om hvordan straffebud skal håndheves; de brukes til å tolke ordlyden"],
      explanation: "Forarbeider er dokumentene fra lovgivningsprosessen — utredninger som NOU og lovforslag som Ot.prp. og Prop. L — og de sier hva lovgiver mente med ordlyden. I dette emnet er de uttrykkelig plusspoeng og ikke krav, fordi pensum nesten ikke henviser til dem. Tidligere avgjørelser er rettspraksis, juridisk teori er noe annet igjen, og rundskriv er ikke forarbeider.",
    },
    {
      question: "Hva betyr bokstaven U i et avgjørelsesnavn som HR-2022-2089-U?",
      options: ["At avgjørelsen er truffet av Høyesteretts ankeutvalg, som er satt med tre dommere", "At avgjørelsen er truffet i storkammer, altså med et utvidet antall dommere i saker av prinsipiell art", "At avgjørelsen er upublisert og derfor ikke kan brukes som argument i en besvarelse", "At avgjørelsen gjelder en utenlandsk part og derfor er behandlet etter særskilte saksbehandlingsregler"],
      explanation: "Bokstaven angir hvilken sammensetning som avgjorde saken: U er ankeutvalget med tre dommere, A er avdeling med fem, S er storkammer og P er plenum. Bokstaven sier altså noe om vekt og sammensetning, ikke om publisering eller om partenes forhold.",
    },
    {
      question: "Hvorfor lønner det seg å ta med leddet i en paragrafhenvisning?",
      options: ["Fordi ulike ledd i samme paragraf ofte sier forskjellige ting, slik at leddet peker på selve regelen", "Fordi en henvisning uten ledd regnes som en formell feil og gir trekk etter fakultetets skjema", "Fordi sensor ellers ikke kan finne bestemmelsen, siden Lovdata krever leddangivelse i søket", "Fordi leddangivelsen viser hvilken utgave av loven du har brukt, og dermed hvilket år den er fra"],
      explanation: "Grunnen er innholdsmessig: for eksempel sier § 16 første ledd hva forsøk er, mens annet ledd sier at frivillig tilbaketreden gir straffrihet. En henvisning uten ledd peker på paragrafen, en med ledd peker på regelen. Det finnes ingen regel om automatisk trekk, Lovdata krever ikke leddangivelse for å finne paragrafen, og leddet sier ingenting om lovversjonen.",
    },
    {
      question: "Hvorfor har boka en lukket liste over avgjørelser i stedet for å bruke dem den finner underveis?",
      options: ["Fordi materialet emnet er kalibrert mot navngir nøyaktig tjue avgjørelser, og en uverifisert dom kan koste deg poeng", "Fordi Høyesterett har avsagt så få avgjørelser i strafferetten at listen uansett ville blitt kort og fullstendig", "Fordi avgjørelser fra før 2016 ikke lenger kan brukes, siden Norsk Retstidende har sluttet å komme ut på papir", "Fordi pensum uttrykkelig forbyr studenter å bruke andre avgjørelser enn dem som er gjennomgått i undervisningen"],
      explanation: "Listen er lukket fordi materialet navngir nøyaktig tjue avgjørelser, og boka ikke skal stå inne for noe den ikke kan verifisere. Det er tvert imot uttrykkelig positivt om du selv finner andre relevante avgjørelser, så lenge du sier noe om vekten av dem. Høyesterett avsier mange strafferettslige avgjørelser, og eldre avgjørelser har ikke mistet betydning fordi navneformen er endret.",
    },
    {
      question: "En kandidat skriver «straffeloven § 15 jf. § 321». Hva er galt?",
      options: ["Kjeden er snudd: § 321 er straffebudet og skal stå først, mens § 15 utvider rekkevidden av det", "Kjeden mangler forsøksbestemmelsen, som alltid må stå med når flere personer er involvert i handlingen", "Kjeden bruker jf. der det skulle stått og, siden begge bestemmelsene anvendes samtidig i samme sak", "Kjeden viser til to bestemmelser i ulike deler av loven, og slike kjeder skal alltid deles i to henvisninger"],
      explanation: "Feilen er rekkefølgen. § 321 er straffebudet som beskriver den straffbare handlingen, mens § 15 er en utvidelsesregel som sier at straffebudet også rammer den som medvirker — den rammer ingenting alene. Forsøksbestemmelsen hører bare med hvis handlingen faktisk stanset på forsøksstadiet, og en henvisningskjede skal nettopp bindes sammen med jf. og kan gjerne krysse lovens deler.",
    },
    {
      question: "Hva innebærer kravet om at kildegrunnlaget skal være etterprøvbart?",
      options: ["At kilden er identifisert godt nok til at sensor kan slå den opp og kontrollere at påstanden stemmer", "At alle kilder må være hentet fra Lovdata Pro, siden det er den eneste kilden som er tilgjengelig i eksamensmodus", "At kandidaten må føre en fullstendig litteraturliste til slutt i besvarelsen etter et fastsatt henvisningssystem", "At kilden må være publisert etter at gjeldende straffelov trådte i kraft, slik at den beskriver gjeldende rett"],
      explanation: "Kravet gjelder identifikasjonen: sensor skal kunne slå opp og kontrollere. Anvisningen ble skjerpet i to trinn, og begrunnelsen for stikkprøvene er uttrykkelig at verktøy basert på kunstig intelligens finner på kilder. Det er ikke stilt krav om at kilden må komme fra Lovdata, om litteraturliste eller om utgivelsesår.",
    },
  ],
  'juroff1500-0-3': [
    {
      question: "Hva er den bærende aksen gjennom hele karakterskalaen A til F?",
      options: ["Vurderingsevne og selvstendighet, gradert fra svært god og stor grad ned til manglende", "Kunnskapsmengde og pensumdekning, gradert etter hvor stor del av læringskravene som er dekket", "Språk og formelle ferdigheter, siden fremstillingsevnen avgjør hvordan besvarelsen leses", "Antall rettskilder kandidaten klarer å trekke inn og henvise korrekt til i besvarelsen"],
      explanation: "Det samme ordparet — vurderingsevne og selvstendighet — går igjen på hvert eneste nivå i skalaen, bare med gradert styrke. Kunnskap, språk og kildebruk er også kriterier, men de er andre akser, og ingen av dem gjentas på alle nivåene slik denne gjør.",
    },
    {
      question: "Hvor mange sensorveiledninger finnes for JUROFF1500, og hvilke terminer dekker de?",
      options: ["6 sensorveiledninger, og de dekker høstterminene fra 2020 til og med høsten 2025", "34 veiledninger, altså én for hver av de terminene emnet har vært eksaminert siden 2005", "6 veiledninger, som dekker de seks siste vårterminene før emnet ble lagt om til høsteksamen", "Ingen veiledninger er publisert for emnet, så alt om vurdering er utledet av selve oppgavetekstene"],
      explanation: "Det finnes 6 sensorveiledninger, og de dekker høstterminene fra 2020 til 2025. 28 av 34 terminer har ingen veiledning. Emnet har ikke hatt våreksamen siden 2019, så seks vårterminer er ikke mulig — og veiledningene finnes altså, i motsetning til løsningsforslag og modellbesvarelser.",
    },
    {
      question: "Hva er det eneste som kritiseres i alle seks sensorveiledningene?",
      options: ["Avskrift fra pensum, altså å gjengi læreboka i stedet for å svare på det oppgaven spør om", "Feil konklusjon på det sentrale rettsspørsmålet, siden riktig resultat er det oppgaven måler", "Svak struktur i praktikumsdelen, siden en klar disposisjon er en forutsetning for god metode", "Manglende bruk av forarbeider, siden lovgiverviljen er nødvendig for å tolke en uklar ordlyd"],
      explanation: "Avskrift fra pensum er den eneste kritikken som går igjen i alle seks. Feil konklusjon og svak struktur i praktikum står tvert imot på listen over det som uttrykkelig ikke straffes, og manglende bruk av forarbeider kan ikke kritiseres — det er uttrykkelig sagt at det ikke kan forventes at studentene bruker dem.",
    },
    {
      question: "Hvilken av disse står på listen over det som IKKE straffes?",
      options: ["Feil konklusjon, fordi det er kvaliteten på selve drøftelsen som er avgjørende", "Å skrive seg bort fra det spørsmålet som er stilt, når det går på bekostning av tiden til de andre spørsmålene", "Ufullstendig besvarelse av teorioppgavens deler, som bør vurderes i det nedre sjiktet", "Uetterprøvelig kildegrunnlag, altså at det ikke framgår hvor kandidaten har opplysningene fra"],
      explanation: "Feil konklusjon straffes ikke — det sies uttrykkelig i to av veiledningene og i oppgaveteksten for høsten 2025. De tre øvrige står derimot alle på listen over det som straffes, og de handler alle om at kandidaten ikke har gjort det oppgaven ba om med stoffet.",
    },
    {
      question: "Hva betyr det at en besvarelse skal være «dimensjonert fornuftig»?",
      options: ["At plassen står i forhold til hvor tvilsomt og viktig spørsmålet er — kort om det klare, dybde i det tvilsomme", "At besvarelsen holder seg innenfor et fastsatt antall ord, som oppgis i oppgaveteksten hver termin", "At alle deloppgavene får nøyaktig like mye plass, siden spørsmålene i et sett er likevektede", "At språket er knapt og presist gjennom hele teksten, slik at ingen setning er lengre enn nødvendig"],
      explanation: "Dimensjonering handler om fordelingen av plass etter hvor tvilsomt og viktig noe er, og det er et selvstendig karakterkriterium i metodeaksen. Det finnes ingen ordgrense, og likevektede spørsmål betyr ikke at hvert spørsmål krever like mange ord. En jevnt knapp besvarelse har heller ikke dimensjonert — den har unngått å velge.",
    },
    {
      question: "Hva sier ærlighetsforbeholdet om de seks sensorveiledningene?",
      options: ["At alle seks er skrevet før besvarelsene er lest, så de uttrykker forventninger og ikke observerte feil", "At de er skrevet av forskjellige forfattere, slik at kravene varierer betydelig fra termin til termin", "At de er skrevet etter sensuren og derfor bygger på hvilke feil kandidatene faktisk gjorde det året", "At de bare gjelder praktikumsdelen, siden teorioppgaven vurderes etter fakultetets generelle skjema"],
      explanation: "Alle seks er skrevet før besvarelsene er lest, og to av dem sier det uttrykkelig. Feilregisteret uttrykker derfor hva sensor forventer, ikke hva kandidater faktisk gjorde — nettopp det motsatte av at de skulle bygge på observerte feil. Veiledningene dekker begge deler av settet.",
    },
    {
      question: "Hva er kortsvarsmalens fire trinn?",
      options: ["Hjemmelen, formålet, hovedformene eller vilkårene, og ett eget eksempel", "Problemstilling, hjemmel, tolkning av vilkåret, og subsumsjon med faktums opplysninger", "Gjerningsperson, objektive vilkår, det sentrale substantivet, og det sentrale verbet", "Innledning som avgrenser, problemstilling, disponert framstilling, og en sammenfatning"],
      explanation: "Kortsvarsmalen er hjemmel, formål, hovedformer og eget eksempel, og de tre første er hentet fra det oppgavesettene selv oppgir som formkrav. De øvrige alternativene beskriver praktikumsoppgavens trinn, lovanalysens femtrinnsmetode og teorioppgavens oppbygning — tre andre oppgaveformer med tre andre oppskrifter.",
    },
    {
      question: "En kandidat avslutter hvert svar med «dette kan diskuteres» i stedet for å konkludere. Hva er hovedinnvendingen?",
      options: ["Feil konklusjon straffes ikke, så strategien fjerner ingen risiko og ofrer den vurderingsevnen som måles", "Formuleringen er språklig upresis, og språk er en av de tre aksene i fakultetets vurderingsskjema", "En konklusjon er et formelt krav i alle oppgaveformene, og besvarelser uten konklusjon vurderes som ufullstendige", "Sensor kan ikke se om kandidaten kjenner reglene når resultatet ikke er oppgitt til slutt i drøftelsen"],
      explanation: "Hovedinnvendingen er at strategien beskytter mot noe ufarlig: feil konklusjon straffes ikke. Samtidig fjerner den nettopp det som måles på den bærende aksen, nemlig vurderingsevne. Innvendingen gjelder ikke språket, og det finnes ingen formell regel om at en besvarelse uten konklusjon er ufullstendig.",
    },
    {
      question: "Hva er forskjellen mellom prinsipalt og subsidiært?",
      options: ["Prinsipalt er det du hevder i første rekke, og subsidiært er det du hevder dersom det prinsipale ikke fører fram", "Prinsipalt er hovedregelen i lovteksten; subsidiært er unntaket som følger av et senere ledd i bestemmelsen", "Prinsipalt er påtalemyndighetens anførsel i saken; subsidiært er den anførselen forsvareren gjør gjeldende", "Prinsipalt er det spørsmålet oppgaven stiller; subsidiært er de spørsmålene du selv finner i faktum"],
      explanation: "Riktig svar er at prinsipalt er det du hevder i første rekke, mens subsidiært er det du hevder for det tilfelle at det prinsipale ikke fører fram. Sondringen gjelder anførsler og drøftelsesspor, ikke forholdet mellom hovedregel og unntak, og den er ikke knyttet til hvem som fremsetter påstanden.",
    },
    {
      question: "Hva skiller de sterkeste fra de svakeste besvarelsene på en systematiseringsoppgave?",
      options: ["De sterkeste skriver én sammenhengende oppgave der underspørsmålene bindes sammen; de svakeste svarer enkeltvis", "De sterkeste besvarer samtlige underspørsmål dekkende, mens de svakeste bare besvarer noen av dem og hopper over resten", "De sterkeste bruker rettspraksis på hvert underspørsmål, mens de svakeste bare viser til lovteksten alene", "De sterkeste konkluderer klart på hvert underspørsmål, mens de svakeste lar spørsmålene stå åpne til slutt"],
      explanation: "Det som skiller nivåene, er sammenhengen: de flinkeste skriver én sammenhengende oppgave og setter underspørsmålene inn i sin naturlige sammenheng, mens de svakeste svarer enkeltvis. Begge deler godtas. At alle deler skal besvares, er et krav som gjelder også teorioppgaven og ikke det som skiller nivåene her.",
    },
    {
      question: "Hva innebærer gjenbruksregelen?",
      options: ["At en redegjørelse fra ett underspørsmål gir uttelling videre, men da må den trekkes eksplisitt inn og ikke gjentas", "At du kan bruke det samme eksempelet flere ganger i besvarelsen, så lenge du hver gang oppgir hvor du opprinnelig hentet det fra", "At en tidligere eksamensbesvarelse kan gjenbrukes som mal, siden oppgavene i stor grad gjentar seg over tid", "At du kan vise til pensum i stedet for å skrive ut redegjørelsen, når stoffet allerede er kjent for sensor"],
      explanation: "Gjenbruksregelen gjelder din egen tekst innenfor én besvarelse: en redegjørelse gitt under ett underspørsmål skal gi uttelling også senere, forutsatt at du sier hva du henter og hvorfor det gjør arbeid der. En tom kryssreferanse som «se ovenfor» er ikke gjenbruk, og regelen sier ingenting om gjenbruk av tidligere besvarelser eller om å henvise i stedet for å svare.",
    },
    {
      question: "Hva er det mest lønnsomme enkeltgrepet i et kortsvar, ifølge det veiledningene belønner?",
      options: ["Å skrive én setning om formålet med regelen, siden det både kobler regelen til begrunnelsen og viser selvstendighet", "Å ramse opp så mange rettskildefaktorer som overhodet mulig, siden bredde i kildebruken belønnes uttrykkelig", "Å skrive lengre enn de andre svarene i settet, siden mer stoff gir sensor mer å gi uttelling for", "Å gjengi lovteksten ordrett i sin helhet, siden en presis gjengivelse av ordlyden er utgangspunktet"],
      explanation: "Én setning om formålet treffer to av tingene som uttrykkelig belønnes: at du kobler regelen til begrunnelsen, og at du viser selvstendighet. Bredde i kildebruk belønnes, men ikke som oppramsing. Å skrive lenger enn de andre svarene er tvert imot en dimensjoneringsfeil, og ordrett gjengivelse er nær beslektet med avskrift.",
    },
    {
      question: "Hvorfor sier boka at C er en god og vanlig karakter?",
      options: ["Fordi C beskrives som jevnt god og tilfredsstillende, med god vurderingsevne på de viktigste områdene", "Fordi karakterene fordeles etter en kurve der de fleste kandidatene havner midt på skalaen", "Fordi terskelen for å bestå er satt lavt i et emne som er et støtteemne og ikke et hovedemne", "Fordi sensorene er bedt om å bruke C som utgangspunkt og bare bevege seg opp eller ned derfra"],
      explanation: "Beskrivelsen av C er jevnt god og tilfredsstillende på de fleste områder, med god vurderingsevne og selvstendighet på de viktigste områdene. Det er en beskrivelse av kvalitet, ikke av plassering i et kull — det gjennomføres uttrykkelig ikke aktiv normalfordeling, og det finnes ingen anvisning om å ta utgangspunkt i noen bestemt karakter.",
    },
    {
      question: "Hvilket punkt i praktikumsrubrikken bommer kandidater oftest på?",
      options: ["At subsumsjonen skal bruke de konkrete opplysningene i faktum, og ikke bare gjenta regelen med et navn satt inn", "At problemstillingen skal utledes av lovens vilkår, siden de fleste i stedet henter den fra magefølelsen", "At hjemmelen skal forankres før tolkningen starter, siden rekkefølgen mellom de to sjelden er tydelig", "At det klare skal behandles kort, siden det er vanskelig å vurdere hva som er klart i et ukjent faktum"],
      explanation: "Det punktet folk oftest bommer på, er subsumsjonen: en subsumsjon som ikke nevner en eneste opplysning fra faktum, er en gjentakelse av regelen med et navn satt inn. De tre øvrige punktene er også reelle feilkilder, men rekkefølgen hjemmel, tolkning og subsumsjon er selve metoden, og den er lettere å lære enn å faktisk bruke opplysningene.",
    },
    {
      question: "Hva menes med feil #10 i bokas register?",
      options: ["Å redegjøre for det som er felles i tilfellene, når oppgaven ber om det som er særegent", "Å gjengi pensum i stedet for å svare på det spørsmålet som faktisk er stilt i oppgaven", "Å svare på færre spørsmål enn settet krever, typisk fordi tiden gikk tapt tidlig i settet", "Å oppgi kilder man ikke har lest, for eksempel et domsnavn hentet fra et digitalt hjelpemiddel"],
      explanation: "Feil #10 er å redegjøre for det som er felles når oppgaven ber om det som er særegent — en spesialvariant av å skrive det man kan i stedet for det som er spurt om. Å gjengi pensum er #1, å svare på for få spørsmål er #16, og å oppgi kilder man ikke har er #15.",
    },
    {
      question: "Hva sier veiledningene om kandidater som finner en avgjørelse fra lagmannsretten eller tingretten?",
      options: ["At det honoreres, men at kandidaten samtidig bør si noe om hvilken vekt avgjørelsen har", "At det ikke bør telle med, siden bare Høyesteretts avgjørelser er rettskilder i strafferetten", "At det trekker ned, fordi bruk av underrettspraksis viser manglende forståelse av rettskildelæren", "At det er nøytralt, siden underrettspraksis verken styrker eller svekker en argumentasjon"],
      explanation: "Å finne rettskilder ut over dem undervisningen ga, belønnes uttrykkelig — men den som finner en lagmannsretts- eller tingrettsavgjørelse, bør samtidig si noe om vekten av den. Underrettspraksis er altså et argument som skal veies, ikke noe som er forbudt, verdiløst eller uten betydning.",
    },
  ],
  'juroff1500-1-1': [
    {
      question: "Hvilke tre spørsmål stiller du til hver rettskildefaktor?",
      options: ["Om den er relevant, hvilken slutning som kan trekkes fra den, og hvilken vekt den har mot de andre", "Om den er skriftlig, om den er offentlig tilgjengelig, og om den er publisert av et statlig organ", "Om den er nyere enn loven, om den er skrevet av en jurist, og om den er nevnt i pensumlitteraturen", "Om den er bindende for domstolene, om den er vedtatt av Stortinget, og om den er kunngjort på forhånd"],
      explanation: "De tre spørsmålene er relevans, slutning og vekt: kan man bygge på kilden i det hele tatt, hva følger av den, og hva gjelder når kildene peker hver sin vei. De øvrige beskriver egenskaper enkelte kilder har, men ingen av dem er den generelle framgangsmåten — en rettskilde trenger verken å være skriftlig, ny eller vedtatt av Stortinget for å være relevant.",
    },
    {
      question: "Hva kan en forskrift IKKE gjøre i strafferetten?",
      options: ["Den kan ikke skape et straffebud alene, fordi straffansvar krever hjemmel i formell lov", "Den kan ikke brukes som rettskilde i det hele tatt, fordi den er gitt av forvaltningen og ikke av Stortinget", "Den kan ikke fylle ut innholdet i et vilkår loven stiller", "Den kan ikke endres uten Stortingets samtykke, fordi endringen ville påvirke rekkevidden av et straffebud"],
      explanation: "En forskrift kan ikke bære selve straffetrusselen — den må stå i lov. Derimot kan forskriften fullt lovlig fylle ut innholdet i et vilkår, slik narkotikalisten gjør for straffeloven § 231, og forskrifter er dermed en fullt legitim rettskilde. Forvaltningen kan endre en forskrift innenfor den fullmakten loven gir.",
    },
    {
      question: "Hva er forskjellen på vekt og trinnhøyde?",
      options: ["Vekt er en avveining mellom argumenter, mens trinnhøyde er en rangordning der den høyere regelen går foran ved motstrid", "Vekt gjelder skrevne kilder, mens trinnhøyde gjelder uskrevne kilder som sedvane og alminnelige rettsprinsipper", "Vekt bestemmes av domstolene i den enkelte sak, mens trinnhøyde bestemmes av lovgiver i forarbeidene til loven", "Vekt gjelder forholdet mellom norske kilder, mens trinnhøyde gjelder forholdet mellom norsk rett og folkeretten"],
      explanation: "Trinnhøyde er en rangordning: ved motstrid går Grunnloven foran lov og loven foran forskrift, uten at noe veies. Vekt er derimot en avveining mellom argumenter av samme slag, for eksempel mellom forarbeider og reelle hensyn. Skillet går ikke mellom skrevne og uskrevne kilder, og ingen av mekanismene er forbeholdt folkeretten.",
    },
    {
      question: "Hvorfor er ordlyden ikke bare et utgangspunkt, men også en yttergrense i strafferetten?",
      options: ["Fordi straff krever hjemmel i lov, slik at ansvar ikke kan bygges på noe ordlyden ikke dekker", "Fordi lovteksten alltid er nyere enn forarbeidene, og en nyere regel går foran en eldre ved motstrid", "Fordi domstolene mangler kompetanse til å tolke straffebud, og derfor må holde seg til ordene som står der", "Fordi ordlyden er den eneste kilden som finnes i Lovdata"],
      explanation: "Grunnen er kravet om lovhjemmel, som følger av Grunnloven § 96, EMK art. 7 og straffeloven § 14: ansvar kan ikke bygges på noe utenfor ordene. Det handler verken om lovens alder, om at domstolene ikke kan tolke — de tolker hele tiden — eller om hva som er tilgjengelig under eksamen.",
    },
    {
      question: "Hva kan reelle hensyn gjøre og ikke gjøre i strafferetten?",
      options: ["De kan bære en innskrenkende tolkning til gjerningspersonens gunst, men ikke utvide ansvaret ut over ordlyden", "De kan utvide ansvaret når hensynene er tungtveiende nok, men ikke innskrenke det til gjerningspersonens gunst", "De kan verken utvide eller innskrenke et straffebud, siden strafferetten bygger utelukkende på skrevne kilder", "De kan brukes fritt i begge retninger, siden de teller som en selvstendig rettskildefaktor på linje med de øvrige"],
      explanation: "Asymmetrien er kjernen: legalitetsprinsippet stenger for å bygge straffansvar på hensyn alene, mens det ikke finnes noen tilsvarende skranke mot å bruke hensyn til å tolke et straffebud snevrere til gjerningspersonens gunst. Reelle hensyn er en anerkjent rettskildefaktor, men vekten avhenger altså av hvilken retning argumentet peker.",
    },
    {
      question: "Hva bygger du på når du bruker en høyesterettsavgjørelse som rettskilde?",
      options: ["Premissene, altså begrunnelsen, fordi det er den som sier hva regelen går ut på og virker videre", "Domsslutningen, altså resultatet, fordi det er den delen som er rettskraftig og bindende", "Sammendraget på første side, fordi det gir en autorisert oppsummering av hva avgjørelsen slår fast", "Dissensen, altså mindretallets votum, fordi den viser hvilke argumenter som ble prøvd og forkastet"],
      explanation: "Det er premissene som bærer rettskildeverdien: der sier domstolen hva den mener regelen går ut på, og den uttalelsen gjelder alle senere saker. Resultatet gjelder bare partene, sammendraget er redaksjonelt og ikke en del av avgjørelsen, og en dissens er høyst et argument.",
    },
    {
      question: "Hvordan bør du bruke en lagmannsrettsavgjørelse i en besvarelse?",
      options: ["Som et argument, og med en setning om at avgjørelsen ikke er bindende for senere saker", "Som et prejudikat, siden lagmannsretten er overordnet tingretten og avgjørelsene derfra følges", "Ikke i det hele tatt — bare Høyesterett er rettskilde", "Som en illustrasjon uten rettslig betydning, siden underrettspraksis ikke kan påvirke tolkningen"],
      explanation: "Å finne en avgjørelse ut over dem undervisningen ga, honoreres uttrykkelig — men den som finner en lagmannsretts- eller tingrettsavgjørelse, bør samtidig si noe om vekten av den. Underrettspraksis er altså et argument som skal veies, ikke et prejudikat, men heller ikke noe som er forbudt eller uten betydning.",
    },
    {
      question: "Hvilket tall gjelder samlekategorien juridisk metode og rettskilder?",
      options: ["31 av 34 terminer, som er den høyeste scoren i hele materialet", "8 av 34 terminer, altså rettskildefaktorene som eget tema", "6 av 34 terminer, altså rettspraksis som eget tema i settene", "5 av 34 terminer, som er hvor ofte Grunnloven som rettskilde er prøvd i strafferetten"],
      explanation: "Klyngen juridisk metode og rettskilder er til stede i 31 av 34 terminer og er dermed høyest i materialet. Tallet 8 gjelder rettskildefaktorene som eget tema, 6 gjelder rettspraksis alene og 5 gjelder Grunnloven — alle tre er enkelttall innenfor klyngen, og de må ikke forveksles med klyngetallet.",
    },
    {
      question: "Hva sier lex specialis?",
      options: ["At en regel skrevet for et snevert og bestemt tilfelle går foran en generell regel som også dekker tilfellet", "At en regel av høyere trinn går foran en av lavere trinn, slik at Grunnloven går foran vanlig lov", "At en nyere regel går foran en eldre av samme trinn, siden lovgiver forutsettes å ha villet endre det gamle", "At en regel som er gjentatt i flere lover går foran en regel som bare står ett sted i lovverket"],
      explanation: "Lex specialis handler om nærhet til det konkrete forholdet: den spesielle regelen går foran den generelle, fordi lovgiver har tatt stilling til nettopp dette forholdet. Rangordning etter trinn er lex superior, tidsprinsippet er lex posterior, og gjentakelse i flere lover er ikke et rettskildeprinsipp i det hele tatt.",
    },
    {
      question: "Hva er forholdet mellom EMK og norsk lov?",
      options: ["EMK er gjort til norsk lov gjennom menneskerettsloven og går foran annen lovgivning ved motstrid", "EMK er en folkerettslig forpliktelse som binder staten, men som ikke kan påberopes av borgere for norske domstoler", "EMK gjelder som norsk lov, men står på samme trinn som andre lover, slik at den nyeste regelen går foran", "EMK går foran Grunnloven i norsk rett"],
      explanation: "EMK er inkorporert gjennom menneskerettsloven, som også gir konvensjonen forrang ved motstrid med annen lovgivning. Den kan altså påberopes direkte, og den står ikke på linje med vanlig lov. At den skulle gå foran Grunnloven, følger ikke av inkorporeringen.",
    },
    {
      question: "Hva innebærer det at rettsreglene er fragmentariske?",
      options: ["At de ikke danner et lukket system; det lovgiver ikke har regulert, er ikke forbudt", "At de er spredt på mange ulike lover, slik at samme forhold ofte reguleres flere steder samtidig", "At de stadig endres og sjelden er stabile", "At de er skrevet i knappe vendinger, slik at innholdet må fylles ut av forarbeider og rettspraksis"],
      explanation: "Fragmentarisk betyr at rettsreglene ikke danner et fullstendig og lukket system: loven regulerer det lovgiver så behov for å regulere, og en klanderverdig handling som ingen bestemmelse rammer, er straffri. Det er noe annet enn at reglene er spredt, at de endres, eller at de er knapt formulert — alt dette kan også stemme, men det er ikke det uttrykket betyr.",
    },
    {
      question: "Hvorfor kan ikke sedvane skape straffansvar?",
      options: ["Fordi straff krever hjemmel i lov, og en fast praksis er ikke en lov uansett hvor allment akseptert den er", "Fordi sedvane bare gjelder mellom private parter og aldri i forholdet mellom staten og den enkelte borger", "Fordi sedvane er en uskreven kilde, og bare skrevne rettskilder kan brukes i strafferetten i det hele tatt", "Fordi sedvane alltid vil være eldre enn loven, og den nyere regelen går foran den eldre ved motstrid"],
      explanation: "Begrunnelsen er kravet om lovhjemmel i straffeloven § 14 og Grunnloven § 96: en fast praksis er ikke en lov. Sedvane er likevel en anerkjent rettskilde som kan si noe om hva et ord betyr eller om en handling er rettsstridig, og både reelle hensyn og rettspraksis er uskrevne eller ulovfestede kilder som brukes i strafferetten.",
    },
    {
      question: "Hva slags rettskilde er en lærebok i strafferett?",
      options: ["Juridisk teori, som er et argument og veier i kraft av kvaliteten på begrunnelsen", "En forarbeidskilde, siden fremstillingen bygger på lovgiverviljen slik den er uttrykt i proposisjonene", "En autoritativ kilde på linje med rettspraksis", "Ikke en rettskilde i det hele tatt, siden den bare gjengir hva andre kilder allerede har fastslått"],
      explanation: "En lærebok er juridisk teori: et argument som veier i kraft av begrunnelsen, ikke en autoritet. Den er verken et forarbeid — som er skrevet av lovgiveren selv — eller på linje med rettspraksis, og den er heller ikke uten betydning. Fellen er å gjengi den i stedet for å bruke den, som er den eneste kritikken i alle seks sensorveiledningene.",
    },
    {
      question: "Hva vil det si å harmonisere rettskildene?",
      options: ["Å lete etter en lesning alle kildene tåler, i stedet for å kåre én kilde som vinner", "Å rangere kildene etter trinnhøyde og la den høyeste avgjøre spørsmålet uten videre drøftelse", "Å velge den kilden som er nyest", "Å utelate de kildene som peker i en annen retning enn den konklusjonen man har landet på"],
      explanation: "Harmonisering er å finne en tolkning som alle kildene kan bære, framfor å velge én og forkaste resten. Å la trinnhøyden avgjøre er lex superior, å velge den nyeste er lex posterior, og å utelate kilder som peker feil vei er ikke metode i det hele tatt — det er å skjule et argument.",
    },
    {
      question: "Straffeloven § 14 og § 3 blandes lett. Hva sier hver av dem?",
      options: ["§ 14 sier at reaksjoner krever hjemmel i lov; § 3 sier hvilken lov som gjelder når loven er endret", "§ 14 sier hvilken lov som gjelder i tid; § 3 sier at reaksjoner bare kan ilegges med hjemmel i lov", "§ 14 gjelder straffebudene i lovens andre del; § 3 gjelder de alminnelige bestemmelsene i første del", "§ 14 gjelder forholdet til Grunnloven; § 3 gjelder forholdet til menneskerettskonvensjonene"],
      explanation: "§ 14 har overskriften Krav om lovhjemmel og sier at strafferettslige reaksjoner bare kan ilegges med hjemmel i lov. § 3 regulerer straffelovgivningens virkeområde i tid, altså hvilken lov som gjelder når loven er endret mellom handling og avgjørelse. De svarer på to helt ulike spørsmål, og ingen av dem er avgrenset til bestemte deler av loven eller til bestemte overordnede regelsett.",
    },
    {
      question: "Hva er den vanligste feilen når kandidater skriver om rettskildefaktorene?",
      options: ["Å ramse opp faktorene uten å vise hva én av dem faktisk bidro med i en konkret tolkningstvil", "Å nevne for mange kilder samtidig, siden bredde i kildebruken trekker ned når grundigheten svikter", "Å bruke Grunnloven som argument, siden grunnlovsbestemmelser sjelden er relevante i vanlige straffesaker", "Å begynne i ordlyden framfor i formålet"],
      explanation: "Feilen er å gjengi oppramsingen uten å vise hva kildene gjør — en variant av den mest gjennomgående kritikken i materialet. Bredde i kildebruk belønnes tvert imot uttrykkelig framfor grundighet overalt, Grunnloven er en sentral kilde i strafferetten, og å begynne i ordlyden er nettopp riktig framgangsmåte.",
    },
    {
      question: "Hvor mange terminer er rettskildefaktorer og lovtolkning prøvd i som eget tema?",
      options: ["8 av 34 terminer, altså rettskildefaktorer og lovtolkning som eget tema", "31 av 34 terminer, som gjelder hele klyngen juridisk metode og rettskilder samlet", "6 av 34 terminer, som gjelder rettspraksis behandlet for seg", "10 av 34 terminer, som gjelder reelle hensyn behandlet for seg"],
      explanation: "Rettskildefaktorer og lovtolkning som generelt tema er prøvd i 8 av 34 terminer. Tallet 31 er klyngetallet for hele metodeområdet, 6 gjelder rettspraksis alene og 10 gjelder reelle hensyn alene. Å bruke klyngetallet om et enkelttema er den vanligste måten å produsere et sant tall som sier noe usant.",
    },
    {
      question: "En kandidat skriver at forarbeidene «går foran» ordlyden. Hva er presisjonsfeilen?",
      options: ["Uttrykket beskriver trinnhøyde, mens forholdet mellom ordlyd og forarbeider er en avveining av vekt", "Uttrykket er riktig brukt, siden forarbeidene uttrykker lovgiverviljen og derfor har høyere rang enn ordlyden", "Uttrykket er for svakt, siden forarbeidene alltid er avgjørende", "Uttrykket er upresist fordi forarbeider ikke er en rettskildefaktor, men bare et hjelpemiddel ved tolkning"],
      explanation: "Å «gå foran» beskriver en rangordning mellom trinn, slik Grunnloven går foran lov. Forholdet mellom ordlyd og forarbeider er derimot en avveining, der forarbeidene veier tungt uten å fortrenge noe — og i strafferetten kan de uansett ikke utvide ansvaret ut over ordlyden. Forarbeider er en fullverdig rettskildefaktor.",
    },
    {
      question: "Hvilken av disse er IKKE en rettskildefaktor?",
      options: ["At mange man kjenner, mener at regelen er urimelig og bør endres", "En fast og langvarig praksis som de involverte har oppfattet seg forpliktet av", "En vurdering av hvilken løsning som gir en god og rimelig regel", "En kommentarutgave der en fagperson tar standpunkt til hvordan vilkåret skal forstås"],
      explanation: "En meningsmåling i vennekretsen er ingen rettskilde: den kan ikke etterprøves og bygger ikke på noen begrunnelse. De tre øvrige er henholdsvis sedvane, reelle hensyn og juridisk teori — alle anerkjente kilder, om enn med ulik vekt i strafferetten.",
    },
    {
      question: "Hvorfor er det et poeng at et straffebud kan være bygget i to lag, lov og forskrift?",
      options: ["Fordi loven bærer straffetrusselen mens forskriften kan fylle ut innholdet i et vilkår loven stiller", "Fordi forskriften kan skjerpe strafferammen når forholdene på området endrer seg raskt", "Fordi domstolene bare er bundet av loven, slik at forskriften kan settes til side ved tolkningen", "Fordi forskrifter kunngjøres på en annen måte enn lover og derfor ikke gir samme forutberegnelighet"],
      explanation: "Poenget er arbeidsdelingen: straffetrusselen må stå i lov, mens forskriften kan fylle ut et vilkår — for eksempel hvilke stoffer som regnes som narkotika. Forskriften kan ikke skjerpe strafferammen, og den er bindende så lenge den holder seg innenfor lovens fullmakt, altså ikke noe domstolene fritt setter til side.",
    },
    {
      question: "Hva kjennetegner randsonen i en ordlyd, og hvorfor er den viktig?",
      options: ["Det er tilfellene der det er tvilsomt om ordet dekker forholdet, og det er der hele drøftelsen ligger", "Det er tilfellene der ordlyden er helt klar, og de skal derfor behandles først og grundigst i besvarelsen", "Det er tilfellene lovgiver uttrykkelig har unntatt i forarbeidene, og de faller derfor utenfor uansett", "Det er tilfellene der to bestemmelser overlapper hverandre"],
      explanation: "Randsonen er der det er tvil om ordet dekker forholdet, og det er nettopp der drøftelsen skal ligge — det klare behandles kort. Uttrykkelige unntak i forarbeidene og overlapp mellom bestemmelser er andre spørsmål, som løses med henholdsvis tolkning og konfliktprinsippene.",
    },
    {
      question: "Hva er hovedforskjellen mellom et prejudikat og en avgjørelse fra tingretten?",
      options: ["Prejudikatet er retningsgivende for senere saker; tingrettsavgjørelsen er et argument uten bindende kraft", "Prejudikatet er publisert i Norsk Retstidende; tingrettsavgjørelsen er upublisert og kan derfor ikke siteres", "Prejudikatet gjelder tolkningen av loven; tingrettsavgjørelsen gjelder bare bevisvurderingen i den enkelte sak", "Prejudikatet er avsagt av flere dommere; tingrettsavgjørelsen av én"],
      explanation: "Forskjellen er autoritet: Høyesteretts avgjørelser er retningsgivende for senere saker, mens en tingrettsavgjørelse er et argument som skal veies. Forskjellen ligger ikke i publisering, ikke i at underrettene bare vurderer bevis — de tolker også loven — og ikke i antall dommere alene.",
    },
    {
      question: "Hva er den beste måten å bruke reelle hensyn på i en straffesak der ordlyden er uklar?",
      options: ["Å bruke dem til å velge mellom lesninger ordlyden tåler, og si eksplisitt hvilken vei hensynet trekker", "Å bruke dem til å utvide bestemmelsen til forhold som er like straffverdige som dem ordlyden nevner", "Å nevne at hensyn kan spille inn, uten å ta stilling til hvilken retning de trekker i den konkrete saken", "Å la dem avgjøre spørsmålet alene når de øvrige kildene er tause, siden noe må avgjøre saken"],
      explanation: "Reelle hensyn brukes til å velge mellom lesninger ordlyden tåler, og du skal si hvilken vei hensynet trekker. Å utvide bestemmelsen til nye forhold er analogisk anvendelse til ugunst og stenges av legalitetsprinsippet. Å nevne at hensyn «kan spille inn» uten retning er en av de typiske feilene, og hensyn alene kan ikke bære straffansvar.",
    },
    {
      question: "Hva er formålet med en bestemmelse, og hva kan formålet gjøre i strafferetten?",
      options: ["Det problemet bestemmelsen skulle løse; formålet kan avgjøre valget mellom to lesninger ordlyden tåler", "Den virkningen lovgiver ønsket å oppnå; formålet kan strekke ansvaret til forhold ordlyden ikke dekker", "Den begrunnelsen domstolene har gitt i praksis; formålet erstatter ordlyden når rettspraksis er entydig", "Det hensynet som veier tyngst i saken; formålet avgjør derfor spørsmålet når kildene ellers er tause"],
      explanation: "Formålet er det problemet bestemmelsen skulle løse, og det kan avgjøre valget mellom lesninger ordlyden bærer. Det kan derimot ikke innføre en tredje lesning eller strekke ansvaret ut over ordene — der stenger legalitetsprinsippet. Formålet er lovgivers begrunnelse, ikke domstolenes, og ikke det samme som reelle hensyn.",
    },
  ],
  'juroff1500-1-2': [
    {
      question: "Hva er utvidende tolkning?",
      options: ["At bestemmelsen anvendes på et forhold som ligger i randsonen av ordlyden, altså innenfor det ordene kan bære", "At bestemmelsen anvendes på et forhold ordlyden ikke dekker, fordi hensynene bak den slår til på samme måte", "At et vagt uttrykk får fastlagt hvor grensen går, uten at grensen flyttes i noen retning", "At bestemmelsen ikke anvendes på et forhold som ordlyden dekker"],
      explanation: "Utvidende tolkning holder seg innenfor ordlydens ytre ramme, men går ut over kjernen. Å gå utenfor ordlyden er analogisk tolkning, å fastlegge grensen i et vagt uttrykk er presisering, og å la være å anvende bestemmelsen på noe den dekker er innskrenkende tolkning.",
    },
    {
      question: "Hvilket tolkningsresultat møter en særlig skranke i strafferetten, og i hvilken retning?",
      options: ["Analogisk tolkning til gjerningspersonens ugunst, fordi straff krever hjemmel i lov", "Innskrenkende tolkning til gjerningspersonens gunst, fordi den uthuler lovgivers vilje", "Utvidende tolkning i begge retninger, fordi den flytter ordlydens ytre ramme", "Presiserende tolkning i skjerpende retning"],
      explanation: "Skranken rammer analogi til ugunst: et forhold ordlyden ikke dekker, har ingen lovhjemmel, jf. Grunnloven § 96, EMK art. 7 og straffeloven § 14. Innskrenkende tolkning går i gjerningspersonens favør og møter ingen skranke, utvidende tolkning innenfor ordlyden er lovlig, og en presisering holder seg innenfor ordlyden.",
    },
    {
      question: "Hva er forskjellen på vaghet og flertydighet?",
      options: ["Vaghet er ett ord med én betydning og uskarp ytterkant; flertydighet er ett ord med flere betydninger", "Vaghet oppstår når loven er gammel; flertydighet oppstår når lovgiver har brukt et fremmedord", "Vaghet gjelder substantiver i gjerningsbeskrivelsen; flertydighet gjelder verbene i den samme beskrivelsen", "Vaghet er et problem for domstolene; flertydighet er et problem for lovgiver"],
      explanation: "Skillet ligger i om ordet har én betydning med uskarp kant eller flere betydninger å velge mellom. Det har betydning fordi de to løses med ulike kilder: vaghet gjennom formål og praksis over tid, flertydighet gjennom hva lovgiver mente. Skillet henger verken sammen med lovens alder, med ordklasse eller med hvem som skal løse problemet.",
    },
    {
      question: "En bestemmelse rammer den som «fører motorvogn». Kan den anvendes på beruset ridning?",
      options: ["Nei, fordi en hest ikke er en motorvogn, og å ramme forholdet ville kreve en analogi til ugunst", "Ja, fordi hensynet til andres sikkerhet slår til på samme måte, og formålet med bestemmelsen treffer", "Ja, fordi en hest kan regnes som et framkomstmiddel og dermed ligger i randsonen av ordlyden", "Nei, men bare hvis forarbeidene uttrykkelig sier at ridning ikke skulle rammes"],
      explanation: "En hest har ingen motor, og forholdet ligger derfor utenfor ordlyden — ikke i randsonen. Å ramme det ville forutsette analogisk anvendelse til gjerningspersonens ugunst, som er stengt. At hensynene er de samme, er nettopp det som gjør analogien fristende, og forarbeidene trengs ikke for å komme til svaret.",
    },
    {
      question: "Hva er en presisering?",
      options: ["Å fastlegge hvor grensen går i et vagt uttrykk, uten å flytte grensen i noen retning", "Å erstatte et vagt uttrykk med et mer presist uttrykk hentet fra forarbeidene til bestemmelsen", "Å anvende bestemmelsen på et forhold som ligger like utenfor ordlyden, men innenfor formålet", "Å avgjøre hvilken av to mulige betydninger av et flertydig ord som skal legges til grunn"],
      explanation: "En presisering skjerper et vagt uttrykk uten å flytte grensen, og den holder seg derfor innenfor ordlyden. Den erstatter ikke ordet med et annet, den går ikke utenfor ordlyden — det ville vært analogi — og valget mellom betydninger av et flertydig ord er et annet problem.",
    },
    {
      question: "Hva er en legaldefinisjon?",
      options: ["En definisjon lovgiver selv har skrevet inn i loven, av et ord loven bruker", "En definisjon Høyesterett har fastlagt i en prinsipiell avgjørelse om hvordan ordet skal forstås", "En definisjon som følger av alminnelig juridisk språkbruk og derfor gjelder i alle lover", "En definisjon som står i forarbeidene og forklarer hva lovgiver mente med uttrykket"],
      explanation: "En legaldefinisjon er lovtekst og har lovtekstens vekt — for eksempel straffeloven § 10, som sier hva som menes med offentlig sted. Avklaringer i rettspraksis, i alminnelig juridisk språkbruk og i forarbeider er andre kilder med annen vekt.",
    },
    {
      question: "Hva er kjennetegnet på en antitetisk tolkning?",
      options: ["Man slutter motsetningsvis: fordi bestemmelsen nevner ett tilfelle, gjelder den ikke for de andre", "Man anvender bestemmelsen på et tilfelle den ikke nevner, fordi hensynene er de samme", "Man leser to bestemmelser i sammenheng, slik at den ene begrenser rekkevidden av den andre", "Man legger avgjørende vekt på formålet der ordlyden peker i motsatt retning"],
      explanation: "Antitetisk tolkning er motsetningsslutningen: det som ikke er nevnt, er heller ikke omfattet. Den er det motsatte svaret av analogien på samme spørsmål. Å lese bestemmelser i sammenheng er harmonisering, og å la formålet slå ordlyden er noe annet igjen.",
    },
    {
      question: "Når holder ikke en motsetningsslutning?",
      options: ["Når oppregningen i bestemmelsen er en illustrasjon, typisk signalisert med ordet særlig eller blant annet", "Når bestemmelsen er skrevet kasuistisk, altså med de konkrete tilfellene ramset opp etter hverandre", "Når forarbeidene ikke sier noe om hvilke tilfeller lovgiver mente å ramme med bestemmelsen", "Når bestemmelsen har flere ledd, siden hvert ledd da må tolkes uavhengig av de andre"],
      explanation: "Slutningen forutsetter at oppregningen er uttømmende. Ordene særlig og blant annet viser at den ikke er det. En kasuistisk bestemmelse er derimot nettopp der slutningen er sterkest, og verken taushet i forarbeidene eller antall ledd avgjør spørsmålet.",
    },
    {
      question: "Hva ligger i asymmetrien mellom tolkning til gunst og til ugunst?",
      options: ["Til gunst er verktøykassen åpen; til ugunst er ordlyden en yttergrense og analogi stengt", "Til ugunst kan man tolke utvidende; til gunst kan man bare presisere innenfor ordlyden", "Til gunst kreves hjemmel i lov; til ugunst holder det at formålet med bestemmelsen treffer", "Til gunst avgjør domstolen fritt; til ugunst er domstolen bundet av forarbeidene"],
      explanation: "Asymmetrien går ut på at innskrenkende tolkning, analogi til fordel og reelle hensyn alle kan bære et resultat som går i gjerningspersonens favør, mens ordlyden er en yttergrense den andre veien. Kravet om lovhjemmel gjelder nettopp der noen skal straffes, ikke omvendt.",
    },
    {
      question: "Hvorfor er skillet mellom utvidende og analogisk tolkning praktisk vanskelig?",
      options: ["Fordi ordlydens ytre ramme ikke kan leses av, men må argumenteres fram i det enkelte tilfellet", "Fordi de to tolkningsresultatene har samme rettsvirkning og derfor sjelden trenger å skilles", "Fordi lovgiver sjelden sier hvilket av dem som er ment å gjelde for den enkelte bestemmelsen", "Fordi Høyesterett har uttalt at skillet ikke lenger opprettholdes i norsk strafferett"],
      explanation: "Vanskeligheten ligger i at hva et ord kan bære avhenger av språkbruk og kontekst, slik at plasseringen av grensen er et argumentasjonsspørsmål. Rettsvirkningen er tvert imot helt forskjellig — den ene er lovlig og den andre stengt — og skillet er i høyeste grad opprettholdt.",
    },
    {
      question: "Hva skiller en innskrenkende tolkning fra at vilkåret ikke er oppfylt?",
      options: ["Innskrenkende tolkning forutsetter at ordlyden dekker forholdet, og at man likevel lar være å anvende bestemmelsen", "Innskrenkende tolkning forutsetter at ordlyden ikke dekker forholdet, slik at bestemmelsen uansett ikke rammer", "Innskrenkende tolkning krever hjemmel i lov, mens spørsmålet om vilkåret er oppfylt avgjøres av faktum", "Innskrenkende tolkning kan bare gjøres av lovgiver, mens domstolen avgjør om vilkåret er oppfylt"],
      explanation: "Forskjellen er avgjørende: en innskrenkende tolkning forutsetter at ordlyden faktisk dekker forholdet, og at man likevel lar være. Dekker ordlyden det ikke, er det ingen tolkning i det hele tatt, bare en konstatering. Innskrenkende tolkning trenger ingen særskilt lovhjemmel og gjøres av rettsanvenderen.",
    },
    {
      question: "Hvor mange terminer er en navngitt bestemmelse gitt som analyseobjekt i?",
      options: ["13 av 34 terminer, som er hvor ofte en navngitt bestemmelse er analyseobjekt", "8 av 34 terminer, som er hvor ofte tolkningstemaet er prøvd som eget tema i settene", "31 av 34 terminer, som gjelder klyngen juridisk metode og rettskilder samlet", "6 av 34 terminer, altså de terminene der eksamen hadde form av teori og praktikum"],
      explanation: "En navngitt bestemmelse er gitt som analyseobjekt i 13 av 34 terminer, og hele lovanalyseoppgaven hviler på tolkningsferdigheten. Tallet 8 gjelder tolkningstemaet som eget spørsmål, 31 er klyngetallet for metode, og 6 er antallet terminer i praktikumsregimet.",
    },
    {
      question: "Hva er det første trinnet i femtrinnsmetoden for lovanalyse?",
      options: ["Å avgjøre hvem som kan være gjerningsperson etter bestemmelsen", "Å tolke det sentrale substantivet i gjerningsbeskrivelsen, siden det bærer hva handlingen gjelder", "Å fastslå skyldkravet, siden det avgjør hvor mye som må dekkes av gjerningspersonens forsett", "Å konstruere et typisk saksforhold som bestemmelsen er ment å ramme"],
      explanation: "Metoden begynner med hvem som kan være gjerningsperson — sier bestemmelsen «den som», kan hvem som helst overtre den. Substantivet kommer i trinn tre og skyldkravet i trinn fem. Å konstruere et saksforhold er sjangerfeilen i lovanalysen, siden det ikke finnes noe faktum.",
    },
    {
      question: "Hvorfor må lovtekster tolkes?",
      options: ["Fordi språket er upresist, lovgiver ikke kan forutse alt, og virkeligheten endrer seg raskere enn loven", "Fordi lovgiver bevisst skriver uklart for å gi domstolene et større handlingsrom i den enkelte sak", "Fordi lovene er skrevet av jurister og derfor bruker et fagspråk vanlige lesere ikke behersker", "Fordi lovtekster ofte inneholder motstrid som må ryddes opp i før de kan anvendes"],
      explanation: "De tre grunnene er språkets upresishet, lovgivers manglende forutseenhet og virkelighetens endringstakt. At en bestemmelse må tolkes, er derfor ikke en kritikk av den. Bevisst uklarhet, fagspråk og motstrid finnes, men er ikke de generelle grunnene til at tolkning er nødvendig.",
    },
    {
      question: "Hva er den vanligste feilen når kandidater skriver om tolkningsresultater?",
      options: ["Å klassifisere tolkningen uten å begrunne hvorfor resultatet er forsvarlig", "Å bruke feil navn på tolkningsresultatet, typisk å kalle en analogi for en utvidende tolkning", "Å tolke både substantivet og verbet, når oppgaven bare ber om det ene av dem", "Å begynne i ordlyden i stedet for i formålet med bestemmelsen"],
      explanation: "Feilen er å stoppe ved klassifiseringen: navnet på tolkningsresultatet er et gratis metodepoeng, men begrunnelsen for at resultatet ligger innenfor ordlydens ytre ramme er den andre halvdelen. Å tolke begge ordene er tvert imot riktig, og å begynne i ordlyden er selve utgangspunktet.",
    },
    {
      question: "En bestemmelse rammer den som «slipper løs et dyr på offentlig sted». En fjernstyrt lekebil settes i gang og skremmer folk. Hva blir resultatet?",
      options: ["Bestemmelsen rammer ikke forholdet, fordi en lekebil ikke er et dyr og analogi til ugunst er stengt", "Bestemmelsen rammer forholdet, fordi virkningen for de tilstedeværende er nøyaktig den samme", "Bestemmelsen rammer forholdet etter en utvidende tolkning, siden lekebilen beveger seg av seg selv", "Spørsmålet må løses ved en presisering av hva som ligger i uttrykket offentlig sted"],
      explanation: "En lekebil er ikke et dyr, og ingen språklig lesning gjør den til det — forholdet ligger utenfor ordlyden, ikke i randsonen. At virkningen er den samme, er nettopp det som ville gjort analogien fristende. Tvilen gjelder heller ikke uttrykket offentlig sted.",
    },
    {
      question: "Hva er den alminnelige rettsstridsreservasjonen, sett som tolkningsspørsmål?",
      options: ["En ulovfestet innskrenkende tolkning av straffebud, som er lovlig fordi resultatet går i gjerningspersonens gunst", "En lovfestet straffrihetsgrunn som gjør en ellers straffbar handling fullt lovlig i den konkrete situasjonen", "En utvidende tolkning som lar straffebud ramme forhold som ligger i randsonen av ordlyden", "En regel om at tvil om rettsanvendelsen skal komme tiltalte til gode ved motstrid mellom kildene"],
      explanation: "Reservasjonen er en innskrenkende tolkning av straffebudene, ikke en egen regel ved siden av dem, og den er ulovfestet. Den er lovlig fordi resultatet går i gjerningspersonens favør. En straffrihetsgrunn som nødverge forutsetter derimot at gjerningsbeskrivelsen er oppfylt.",
    },
    {
      question: "Hva betyr det at en bestemmelse er skrevet kasuistisk?",
      options: ["At de konkrete tilfellene som rammes, er ramset opp i selve bestemmelsen", "At bestemmelsen bruker generelle uttrykk som overlater grensedragningen til domstolen", "At bestemmelsen er utformet etter mønster av tidligere avgjørelser i lignende saker", "At bestemmelsen inneholder en legaldefinisjon av de sentrale uttrykkene den bruker"],
      explanation: "Kasuistisk lovgivningsteknikk ramser opp tilfellene og gir høy forutberegnelighet, men fanger bare det som er nevnt. Generelle uttrykk som overlater grensedragningen til domstolen, er den skjønnsmessige teknikken — det motsatte valget.",
    },
    {
      question: "Hvordan bør du behandle et tilfelle som ligger i ordlydens kjerne?",
      options: ["Kort, med én setning, slik at tiden går til det som er tvilsomt", "Grundig, siden det er de klare tilfellene som viser at du behersker bestemmelsen", "Ved å drøfte begge lesningene, siden også kjernetilfeller kan bestrides", "Ved å vise til forarbeidene, siden de bekrefter at kjernen er ment å rammes"],
      explanation: "Det klare behandles kort, og det tvilsomme grundig — det er selve dimensjoneringskriteriet. Å bruke plass på det opplagte er den feilen som beskrives som å stoppe ved det ytre, og som stjeler tid fra der drøftelsen faktisk skulle ligget.",
    },
    {
      question: "Hva er testen på om et spørsmål er reelt tvilsomt?",
      options: ["Om du klarer å skrive ut et godt og reelt argument for begge lesningene", "Om forarbeidene eller rettspraksis uttrykkelig sier at spørsmålet er uavklart", "Om to av rettskildefaktorene peker i ulik retning når de leses isolert", "Om du selv er usikker på hvilket resultat du synes er mest rimelig"],
      explanation: "Testen er om du klarer å skrive ut et godt argument for begge lesninger. Klarer du bare det ene, er spørsmålet ikke tvilsomt og skal behandles kort. Egen usikkerhet, uttrykkelig uavklarthet i kildene og tilsynelatende motstrid er indikasjoner, men ingen av dem er selve testen.",
    },
    {
      question: "Hva skjer når ordlyden dekker forholdet, men formålet taler mot å ramme det?",
      options: ["Formålet kan bære en innskrenkende tolkning, og det er lovlig fordi resultatet går i gjerningspersonens gunst", "Ordlyden går uansett foran her, siden den er den klart tyngste rettskildefaktoren i norsk strafferett", "Formålet kan bare tillegges vekt dersom forarbeidene uttrykkelig støtter den samme lesningen", "Spørsmålet må avgjøres etter lex specialis, siden to regler da peker i hver sin retning"],
      explanation: "Dette er den frie retningen: formålet kan fullt lovlig bære en innskrenkende tolkning, siden resultatet går i gjerningspersonens favør. Motsatt vei — at formålet skulle bære ansvar for noe ordlyden ikke dekker — er stengt. Lex specialis gjelder motstrid mellom to bestemmelser, ikke mellom ordlyd og formål i én.",
    },
    {
      question: "Hvorfor bør du tolke både det sentrale substantivet og det sentrale verbet?",
      options: ["Fordi tvilen ofte ligger i det ene og ikke i det andre, og du finner ikke ut hvilket uten å prøve begge", "Fordi femtrinnsmetoden krever en like grundig behandling av samtlige ord i hele gjerningsbeskrivelsen", "Fordi substantivet avgjør de objektive vilkårene og verbet avgjør skyldkravet i bestemmelsen", "Fordi en tolkning av bare det ene regnes som en analogisk anvendelse av bestemmelsen"],
      explanation: "Grunnen er praktisk: tvilen ligger sjelden der du først ser etter, og du oppdager hvilket ord som bærer den bare ved å prøve begge. Metoden krever ikke like grundig behandling av alt, verbet avgjør ikke skyldkravet, og en delvis tolkning er ikke en analogi.",
    },
  ],
  'juroff1500-1-3': [
    {
      question: "Hva er kjernen i det strafferettslige legalitetsprinsippet?",
      options: ["Ingen kan straffes uten hjemmel i lov som gjaldt da handlingen ble begått", "Enhver skal anses uskyldig inntil det motsatte er bevist ut over enhver rimelig tvil", "Tvil om rettsanvendelsen skal komme tiltalte til gode når kildene peker i ulik retning", "Straffebud skal alltid tolkes strengt etter sin ordlyd, uten rom for utvidende tolkning"],
      explanation: "Kjernen er kravet om lovhjemmel som gjaldt på handlingstidspunktet, jf. Grunnloven § 96, EMK art. 7 og straffeloven § 14. Uskyldspresumsjonen gjelder beviset og er noe annet, tvilsregelen gjelder fakta, og utvidende tolkning innenfor ordlyden er fullt lovlig — det er analogi til ugunst som er stengt.",
    },
    {
      question: "Hvilke tre hensyn begrunner legalitetsprinsippet?",
      options: ["Forutberegnelighet, demokratisk forankring og maktfordeling", "Forutberegnelighet, likhet for loven og hensynet til fornærmede i straffesaken", "Rettferdighet, forholdsmessighet og hensynet til allmennprevensjon i samfunnet", "Demokratisk forankring, effektiv håndheving og hensynet til rettsenhet i Norden"],
      explanation: "De tre er forutberegnelighet, demokratisk forankring og maktfordeling — borgeren skal kunne innrette seg, Stortinget skal bestemme hva som er straffbart, og domstolen skal anvende reglene uten å lage dem. Likhet for loven, forholdsmessighet og effektiv håndheving er reelle hensyn i strafferetten, men de er ikke begrunnelsen for dette prinsippet.",
    },
    {
      question: "I hvor mange terminer er legalitetsprinsippet prøvd?",
      options: ["16 av 34 terminer, og prinsippet er til stede i 5 av de 6 terminene fra høsten 2020", "31 av 34 terminer, som er det høyeste tallet i hele materialet for noe enkelttema", "6 av 34 terminer, altså de terminene der eksamen hadde teori og praktikum", "8 av 34 terminer, som er hvor ofte rettskildefaktorene er prøvd som eget tema"],
      explanation: "Legalitetsprinsippet er prøvd i 16 av 34 terminer, og det som avgjør prioriteringen er at prinsippet er til stede i 5 av de 6 terminene fra høsten 2020. Tallet 31 er klyngetallet for hele metodeområdet, 6 er antallet terminer i praktikumsregimet, og 8 gjelder rettskildefaktorene som eget tema.",
    },
    {
      question: "Hva er forskjellen på klarhetskravet og analogiforbudet?",
      options: ["Klarhetskravet gjelder utformingen av bestemmelsen; analogiforbudet gjelder anvendelsen av den på et forhold utenfor ordlyden", "Klarhetskravet gjelder domstolen; analogiforbudet gjelder lovgiver, som ikke kan vedta bestemmelser med tilbakevirkende kraft", "Klarhetskravet gjelder alvorlige lovbrudd; analogiforbudet gjelder bare bestemmelser med en strafferamme på over ett år", "Klarhetskravet følger av Grunnloven; analogiforbudet følger utelukkende av EMK og har derfor ikke grunnlovs rang"],
      explanation: "Klarhetskravet retter seg først og fremst mot lovgiver og gjelder hvordan bestemmelsen skrives. Analogiforbudet retter seg mot den som anvender bestemmelsen og forbyr å ramme forhold utenfor ordlyden. Begge følger av forutberegnelighetshensynet, begge har forankring både i Grunnloven og i EMK, og ingen av dem er begrenset til bestemte strafferammer.",
    },
    {
      question: "Hva viser Passbåtdommen og Elvebåtdommen sammen?",
      options: ["At randsonen i en ordlyd er tilgjengelig for utvidende tolkning, men at den tar slutt", "At Høyesterett har endret praksis over tid, slik at eldre avgjørelser om samme uttrykk ikke lenger gjelder", "At formålet med bestemmelsen avgjør når to fartøyer er sammenlignbare i strafferettslig forstand", "At beruset føring av mindre fartøyer aldri kan straffes, uansett hvor stor motoren er"],
      explanation: "De to gjelder samme uttrykk og faller ulikt ut: en 17 fots plastbåt med kraftig motor var omfattet, en 14 fots elvebåt med svak motor var det ikke. Sammen tegner de grensen fra begge sider. De viser ikke et praksisskifte — den senere avgjørelsen gjelder et annet fartøy — og de viser tvert imot at formålet ikke er avgjørende når ordlyden tar slutt.",
    },
    {
      question: "Hva var spørsmålet i Rt. 2009 s. 780, Derivatdommen?",
      options: ["Om stoffet GBL kunne regnes som et derivat av GHB, som sto oppført på narkotikalisten", "Om en blogg på internett var omfattet av uttrykket trykt skrift i straffelovens forstand", "Om straffebudet om mishandling i nære relasjoner rammet handlinger mot en tidligere samboer", "Om en liten fritidsbåt var et skip i den daværende bestemmelsen om beruset føring"],
      explanation: "Derivatdommen gjaldt om GBL var et derivat av GHB og dermed omfattet av narkotikalisten. Høyesterett kom til at det ikke var det. De tre øvrige beskriver Ekstrembloggerkjennelsen, Rt. 2011 s. 469 og båtdommene — fire ulike avgjørelser i samme kapittel, som lett blandes.",
    },
    {
      question: "Hva er hovedpoenget i Rt. 2011 s. 469?",
      options: ["At manglende dekning i ordlyden ikke kan repareres av at lovgiver utvilsomt ønsket å ramme forholdet", "At forarbeidene kan bære straffansvar når de er klare og bestemmelsen er ny", "At en utvidende tolkning alltid er tillatt når hensynene bak bestemmelsen slår til", "At en tidligere samboer alltid må likestilles med en tidligere ektefelle i strafferetten"],
      explanation: "Avgjørelsen er den skarpeste illustrasjonen av at et godt formål ikke er nok: alle argumenter for å ramme forholdet var til stede, og likevel kunne ordlyden ikke strekkes. Forarbeider kan ikke bære ansvar utenfor ordlyden, utvidende tolkning forutsetter at forholdet ligger innenfor ordene, og avgjørelsen slår fast det motsatte av at gruppene måtte likestilles.",
    },
    {
      question: "Hva skjedde etter Ekstrembloggerkjennelsen, og hvorfor er det poenget?",
      options: ["Lovgiver endret definisjonen av når en ytring er fremsatt offentlig, og det viser maktfordelingen i arbeid", "Høyesterett fravek avgjørelsen i storkammer få år senere, og det viser at kjennelser veier lite", "Påtalemyndigheten reiste ny sak på et annet grunnlag, og det viser at frifinnelsen var uten betydning", "Menneskerettsdomstolen underkjente resultatet, og det viser at EMK går foran norsk rett ved motstrid"],
      explanation: "Lovgiver endret definisjonen; i dag sier straffeloven § 10 at en ytring også er fremsatt offentlig når den er satt fram på en måte som gjør den egnet til å nå et større antall personer. Det viser hele mekanismen: domstolen sier hva loven er, Stortinget bestemmer hva den skal bli. Det er dette som er innholdet i maktfordelingshensynet.",
    },
    {
      question: "Hvilken retning virker legalitetsprinsippets skranke i?",
      options: ["Bare til gjerningspersonens ugunst; en innskrenkende tolkning møter ingen skranke", "Begge veier likt, slik at både utvidende og innskrenkende tolkning krever særskilt hjemmel", "Bare til gjerningspersonens gunst, siden prinsippet er et vern for staten mot vilkårlige søksmål", "Bare i saker med strafferamme over ett år, siden mindre alvorlige forhold ikke krever samme vern"],
      explanation: "Prinsippet verner borgeren mot staten og virker derfor bare der resultatet går i gjerningspersonens ugunst. Innskrenkende tolkning, analogi til fordel og reelle hensyn er alle frie den andre veien. Å skrive at prinsippet stenger for en innskrenkende tolkning, er å snu mekanismen på hodet.",
    },
    {
      question: "Hva er forskjellen på legalitetsprinsippet og uskyldspresumsjonen?",
      options: ["Legalitetsprinsippet gjelder regelen og om det finnes hjemmel; uskyldspresumsjonen gjelder beviset for at tiltalte gjorde det", "Legalitetsprinsippet gjelder straffesaker; uskyldspresumsjonen gjelder også i sivile saker mellom private parter", "Legalitetsprinsippet følger av EMK; uskyldspresumsjonen følger av Grunnloven og har derfor høyere trinnhøyde", "Legalitetsprinsippet gjelder domstolen; uskyldspresumsjonen gjelder påtalemyndighetens beslutning om å reise tiltale"],
      explanation: "Skillet er mellom rettsanvendelse og bevis: legalitetsprinsippet spør om det finnes hjemmel og hva den dekker, uskyldspresumsjonen om det er godtgjort at tiltalte handlet. Begge er forankret både i Grunnloven og i EMK, og begge gjelder gjennom hele straffesaken. Å blande dem er en av kapitlets vanligste presisjonsfeil.",
    },
    {
      question: "Hvor er uskyldspresumsjonen forankret?",
      options: ["I Grunnloven § 96 annet punktum og i EMK art. 6", "I Grunnloven § 97 og i EMK art. 7, sammen med tilbakevirkningsforbudet", "I straffeloven § 14, som stiller krav om lovhjemmel for alle strafferettslige reaksjoner", "I straffeprosessloven alene, siden presumsjonen er en ren bevisregel uten grunnlovsforankring"],
      explanation: "Presumsjonen står i Grunnloven § 96 annet punktum — enhver har rett til å bli ansett som uskyldig inntil skyld er bevist etter loven — og i EMK art. 6 om rettferdig rettergang. Grunnloven § 97 og EMK art. 7 gjelder tilbakevirkning, og straffeloven § 14 gjelder kravet om lovhjemmel.",
    },
    {
      question: "Hvorfor er straffeloven § 231 forenlig med kravet om lovhjemmel, selv om listen over stoffer står i forskrift?",
      options: ["Fordi straffetrusselen står i loven, mens forskriften bare fyller ut innholdet i ett av vilkårene", "Fordi forskrifter gitt av et departement likestilles med lov når de gjelder helsefarlige stoffer", "Fordi kravet om lovhjemmel bare gjelder strafferammen og ikke gjerningsbeskrivelsen i straffebudet", "Fordi Stortinget etterpå har godkjent listen, slik at den har fått samme trinnhøyde som loven selv"],
      explanation: "Arbeidsdelingen er avgjørende: loven sier at handlingen er straffbar og hva straffen er, mens forskriften utfyller vilkåret om hva som regnes som narkotika. Forskrifter likestilles ikke med lov, kravet om lovhjemmel gjelder hele straffebudet, og en etterfølgende godkjenning ville ikke endret trinnhøyden.",
    },
    {
      question: "Hva er rettsvirkningen når et straffebud ikke dekker forholdet?",
      options: ["Frifinnelse, uansett hvor klanderverdig handlingen er", "Domfellelse etter det nærmeste beslektede straffebudet, dersom hensynene bak det treffer forholdet", "Saken utsettes til lovgiver har tatt stilling til om bestemmelsen bør endres", "Domstolen kan idømme en annen strafferettslig reaksjon enn straff, siden kravet om lovhjemmel bare gjelder straff"],
      explanation: "Rettsvirkningen er frifinnelse. Å domfelle etter et beslektet straffebud ville nettopp vært den analogien som er stengt, saken kan ikke settes på vent i påvente av lovgiver, og kravet om lovhjemmel i straffeloven § 14 gjelder uttrykkelig også de øvrige strafferettslige reaksjonene.",
    },
    {
      question: "Hva sier Grunnloven § 97, og hvordan slår den ut i strafferetten?",
      options: ["At ingen lov må gis tilbakevirkende kraft; du kan ikke straffes etter en lov som kom etter handlingen", "At ingen kan dømmes uten etter lov eller straffes uten etter dom; reaksjonen må ilegges av en domstol", "At strafferettslige reaksjoner bare kan ilegges med hjemmel i lov, også når reaksjonen ikke er straff", "At straffelovgivningen på handlingstidspunktet anvendes, med unntak for nyere og gunstigere lovgivning"],
      explanation: "§ 97 forbyr tilbakevirkende lover, og i strafferetten betyr det at du ikke kan straffes etter en lov som kom etter handlingen. De øvrige beskriver Grunnloven § 96, straffeloven § 14 og straffeloven § 3 — fire bestemmelser som ligger tett på hverandre og lett forveksles.",
    },
    {
      question: "Hva er den mest presise måten å bruke legalitetsprinsippet på i et praktikum?",
      options: ["Si hvor forholdet ligger i forhold til ordlyden, si hva som ville kreves for å ramme det, og forankre", "Redegjør for prinsippets tre sider innledningsvis, slik at rammen er satt før faktum behandles", "Nevn hjemlene i konklusjonen, slik at drøftelsen ikke avbrytes av henvisninger underveis", "Vis til prinsippet hver gang et vilkår drøftes, slik at det er tydelig at rammen holdes gjennom hele svaret"],
      explanation: "Prinsippet er et argument som hører hjemme på ett bestemt punkt: der spørsmålet er om forholdet ligger innenfor eller utenfor ordlyden. En generell innledning om de tre sidene hører til teorioppgaven, hjemlene til slutt forankrer ingenting, og å nevne prinsippet ved hvert vilkår er å bruke plass uten å tilføre noe.",
    },
    {
      question: "Hvorfor kan ikke et godt formål bære straffansvar utenfor ordlyden?",
      options: ["Fordi borgeren da ikke kunne innrettet seg, lovgiver ikke har tatt stilling, og domstolen ville utvidet ansvaret selv", "Fordi formålsbetraktninger regnes som reelle hensyn, som ikke er en rettskildefaktor i strafferetten", "Fordi forarbeidene sjelden sier noe presist om hvilke tilfeller lovgiver mente å ramme med bestemmelsen", "Fordi domstolene mangler kompetanse til å tolke straffebud i lys av formålet med dem"],
      explanation: "Alle tre hensynene bak prinsippet svikter samtidig når man rammer noe loven ikke nevner. Reelle hensyn er en anerkjent rettskildefaktor også i strafferetten, forarbeidene er ofte tydelige nok, og domstolene tolker straffebud i lys av formålet hele tiden — innenfor ordlyden.",
    },
    {
      question: "Hva er spenningen klarhetskravet lever i?",
      options: ["Jo mer presist lovgiver skriver, desto mer faller utenfor; jo mer generelt, desto mindre forutberegnelighet", "Jo strengere domstolene håndhever kravet, desto flere bestemmelser må endres av Stortinget hvert år", "Jo eldre en bestemmelse er, desto vanskeligere er det å avgjøre hva lovgiver mente med ordlyden", "Jo flere rettskilder som er relevante, desto vanskeligere er det for borgeren å finne fram i Lovdata"],
      explanation: "Spenningen er mellom presisjon og rekkevidde: en kasuistisk bestemmelse gir høy forutberegnelighet, men fanger bare det lovgiver tenkte på, mens en skjønnsmessig bestemmelse fanger alt og gir lite å innrette seg etter. De to hensynene kan ikke optimeres samtidig — det er selve drøftingsaksen.",
    },
    {
      question: "Hva bør du si om vekten når du bruker Ekstrembloggerkjennelsen?",
      options: ["At det er en kjennelse fra ankeutvalget avsagt under dissens, og at den derfor veier mindre som prejudikat", "At kjennelser fra ankeutvalget ikke kan brukes som argument i det hele tatt, siden de ikke er prejudikater", "At avgjørelsen er opphevet ved den senere lovendringen og derfor ikke lenger har rettskildeverdi", "At avgjørelsen veier tyngre enn en avdelingsdom, fordi den bygger direkte på Grunnloven og EMK"],
      explanation: "Å si at det er en ankeutvalgskjennelse avsagt under dissens, er nettopp den vurderingen av vekt som belønnes. Kjennelser kan fullt ut brukes som argument, avgjørelsen er ikke opphevet av lovendringen — den beskrev rettstilstanden slik den var — og en kjennelse veier ikke tyngre enn en avdelingsdom fordi den viser til Grunnloven.",
    },
    {
      question: "En kandidat skriver at legalitetsprinsippet stenger for en innskrenkende tolkning. Hva er feilen?",
      options: ["Prinsippet verner borgeren mot staten og virker bare der resultatet går i gjerningspersonens ugunst", "Prinsippet gjelder bare tolkningen av gjerningsbeskrivelsen, ikke av straffrihetsgrunnene i loven", "Prinsippet gjelder bare når bestemmelsen er nyere enn 2005, siden eldre lover ikke omfattes", "Prinsippet stenger for enhver tolkning som avviker fra den naturlige språklige forståelsen"],
      explanation: "Feilen er å behandle prinsippet som symmetrisk. Det er et vern for borgeren og virker bare i én retning: mot ansvar uten hjemmel. En innskrenkende tolkning går i gjerningspersonens favør og møter ingen skranke. Prinsippet er verken begrenset til gjerningsbeskrivelsen, til nyere lover, eller til det som avviker fra vanlig språkbruk.",
    },
    {
      question: "Hva belønnes uttrykkelig når kandidater skriver om legalitetsprinsippet?",
      options: ["Å bruke andre eller flere høyesterettseksempler enn de gjennomgåtte, og samtidig vise forståelse", "Å gjengi alle de fem gjennomgåtte avgjørelsene med fullstendig faktum og domsslutning", "Å bygge framstillingen på forarbeider, siden lovgiverviljen er den tyngste kilden i strafferetten", "Å redegjøre for legalitetsprinsippet slik det gjelder i forvaltningsretten, som en parallell"],
      explanation: "Det som belønnes, er å finne rettskilder ut over dem undervisningen ga, og samtidig vise forståelse — for eksempel ved å si noe om vekten. Å gjengi alle fem avgjørelsene fullstendig er gjengivelse, forarbeider kan ikke forventes brukt i dette emnet, og en lang parallell til forvaltningsretten er å skrive seg bort fra spørsmålet.",
    },
    {
      question: "Hva er kravet om lovhjemmel i straffeloven § 14 avgrenset til?",
      options: ["Det gjelder strafferettslige reaksjoner generelt, ikke bare straff i snever forstand", "Det gjelder bare fengselsstraff og bot, siden andre reaksjoner ikke regnes som straff", "Det gjelder bare lovbrudd med strafferamme på fengsel i mer enn ett år", "Det gjelder bare handlinger begått i Norge, siden loven ellers ville hatt virkning i utlandet"],
      explanation: "Bestemmelsen viser til lovens egen oppregning av reaksjoner, slik at kravet også omfatter reaksjoner som forvaring og overføring til tvungent psykisk helsevern. Det er verken avgrenset til bot og fengsel, til bestemte strafferammer eller til handlingssted.",
    },
    {
      question: "Hvilken av disse tolkningene er stengt av legalitetsprinsippet?",
      options: ["Analogisk anvendelse av et straffebud på et forhold ordlyden ikke dekker, til gjerningspersonens ugunst", "Utvidende tolkning av et straffebud til et forhold i randsonen av ordlyden, i skjerpende retning", "Innskrenkende tolkning av et straffebud som etter ordlyden dekker forholdet", "Presisering av et vagt uttrykk i et straffebud, slik at grensen fastlegges i en konkret sak"],
      explanation: "Bare analogi til ugunst er stengt. Utvidende tolkning innenfor ordlyden er lovlig — Passbåtdommen er eksempelet — innskrenkende tolkning går i gjerningspersonens favør og møter ingen skranke, og en presisering holder seg innenfor ordlyden.",
    },
    {
      question: "Hvorfor er overlappen mellom Grunnloven, EMK og straffeloven ikke sløsing?",
      options: ["Fordi prinsippet dermed ikke kan settes til side ved en vanlig lovendring", "Fordi hver av bestemmelsene gjelder sin egen type lovbrudd, slik at de til sammen dekker hele feltet", "Fordi domstolene må vise til minst tre hjemler for at en frifinnelse skal være rettskraftig", "Fordi de tre bestemmelsene ble vedtatt til ulike tider og derfor gjelder for hver sin periode"],
      explanation: "Poenget med forankring i både Grunnloven, en konvensjon med forrang og selve straffeloven, er at prinsippet ikke kan fjernes ved en alminnelig lovendring. Bestemmelsene gjelder ikke ulike lovbrudd eller ulike perioder, og det finnes ikke noe krav om et minste antall hjemler.",
    },
    {
      question: "Hva er den beste måten å bruke Passbåtdommen på i en drøftelse?",
      options: ["Som motvekt mot påstanden om at straffebud alltid tolkes strengt, siden ordlyden der ble strukket i skjerpende retning", "Som belegg for at formålet med bestemmelsen avgjør når ordlyden kan strekkes til nye tilfeller", "Som belegg for at fritidsbåter alltid regnes som skip i strafferettslig forstand", "Som eksempel på at ankeutvalgets kjennelser kan brukes på linje med avdelingsdommer"],
      explanation: "Avgjørelsen er sterkest som korrektiv: den viser at randsonen er tilgjengelig, og at legalitetsprinsippet ikke er en regel om streng ordlydstolkning. Den sier ikke at formålet er avgjørende — Elvebåtdommen viser det motsatte — den gir ingen generell regel om fritidsbåter, og den er en avdelingsdom, ikke en kjennelse.",
    },
    {
      question: "Hva kjennetegner et godt eget eksempel når du skal vise skranken i arbeid?",
      options: ["At handlingen åpenbart burde vært rammet, men faller utenfor ordlyden", "At handlingen er harmløs, slik at frifinnelse framstår som et rimelig resultat", "At bestemmelsen er hentet fra straffeloven, siden nyskrevne bestemmelser ikke gir gyldige eksempler", "At eksempelet gjelder et forhold som ligger i kjernen av ordlyden og derfor er utvilsomt straffbart"],
      explanation: "Skranken vises bare når den stenger for noe man ellers ville rammet. Et harmløst eksempel viser ingenting, et kjernetilfelle viser ingen grense, og et nyskrevet straffebud er fullt brukbart — det er nettopp det boka bruker i sine øvelser.",
    },
    {
      question: "Hva innebærer det at legalitetsprinsippet er gradert utenfor strafferetten?",
      options: ["Kravet til hjemmel skjerpes med hvor inngripende tiltaket er, og andre kilder kan bære mer av veien", "Prinsippet gjelder ikke i det hele tatt utenfor strafferetten, siden bare straff krever lovhjemmel", "Kravet gjelder bare vedtak fra statlige organer, mens kommunale vedtak følger egne regler", "Prinsippet er strengere utenfor strafferetten, fordi forvaltningen ikke har domstolenes uavhengighet"],
      explanation: "Utenfor strafferetten kreves også hjemmel for inngrep i borgernes rettssfære, men kravet er gradert etter inngrepets styrke, og andre rettskilder kan bære mer. Strafferetten har den strengeste versjonen, ikke den mildeste, og prinsippet gjelder uavhengig av hvilket forvaltningsnivå som treffer vedtaket.",
    },
    {
      question: "Hva bør du gjøre med HR-2017-2333-U og HR-2022-2089-U før eksamen?",
      options: ["Slå dem opp i Lovdata Pro og skrive to setninger om hva hver av dem gjaldt", "Lære dem utenat fra denne boka, som gjengir faktum og resultat i begge", "Se bort fra dem, siden ankeutvalgets kjennelser ikke kan brukes i en besvarelse", "Bruke dem i stedet for de fem gjennomgåtte, siden nyere avgjørelser går foran eldre"],
      explanation: "Boka navngir dem uten å referere innholdet, fordi den bare omtaler avgjørelser den har kontrollert. Å slå dem opp selv er nettopp den øvelsen som belønnes. Kjennelser kan brukes, men de erstatter ikke de gjennomgåtte avgjørelsene — nyere avgjørelser går ikke automatisk foran eldre.",
    },
    {
      question: "Hva er den vanligste dimensjoneringsfeilen i en oppgave om legalitetsprinsippet?",
      options: ["Å bruke like mye plass på de klare tilfellene som på det som ligger i randsonen", "Å behandle prinsippets tre sider i rekkefølge, siden det gjør framstillingen forutsigbar", "Å nevne hjemlene med lov og paragraf, siden det tar plass fra selve drøftelsen", "Å skrive ut begge lesningene i et tvilstilfelle før man lander på ett av dem"],
      explanation: "Feilen er å bruke plass på det opplagte. Det klare behandles med én setning, og tiden går til randsonen. Å behandle de tre sidene i rekkefølge er en god disposisjon, å oppgi hjemlene koster nesten ingenting, og å skrive ut begge lesningene i et tvilstilfelle er nettopp det som gir uttelling.",
    },
  ],
  'juroff1500-1-4': [
    {
      question: "Hva er reelle hensyn som rettskildefaktor?",
      options: ["Vurderinger av hva som gir en god og rimelig regel, brukt som argument når de øvrige rettskildene ikke gir svar alene", "Vurderinger av hvor troverdig den enkelte parten i saken fremstår, brukt som argument når bevisbildet er uklart", "De hensynene lovgiver uttrykkelig har nedfelt i lovens egen formålsbestemmelse eller i forarbeidene", "Den alminnelige rettsoppfatningen i befolkningen slik den kommer til uttrykk i undersøkelser og i offentlig debatt"],
      explanation: "Reelle hensyn er saklige betraktninger om hva som gir en god regel, og de kommer til orde der de øvrige kildene ikke avgjør. Vurderinger av parten hører til bevisvurderingen, hensyn nedfelt i forarbeidene er forarbeider, og hva folk flest mener er ikke i seg selv et rettslig argument om hva regelen betyr.",
    },
    {
      question: "Hva er forskjellen på et tolkningsargument og et rettspolitisk argument?",
      options: ["Tolkningsargumentet hevder noe om hva en eksisterende regel betyr, mens det rettspolitiske hevder noe om hva regelen burde være", "Tolkningsargumentet bygger på lovens ordlyd, mens det rettspolitiske argumentet bygger på hensynene bak den samme loven", "Tolkningsargumentet er tillatt i strafferetten, mens det rettspolitiske argumentet bare er tillatt på de rettsområdene som ikke gjelder straff", "Tolkningsargumentet brukes av domstolene, mens det rettspolitiske argumentet bare brukes i lovforarbeider og utredninger"],
      explanation: "Skillet ligger i hva som hevdes: hva retten er, mot hva den bør være. Begge typer kan bygge på både ordlyd og hensyn, begge er lovlige i strafferetten, og begge kan brukes av hvem som helst — det er påstandstypen, ikke kilden eller avsenderen, som skiller dem.",
    },
    {
      question: "I hvor mange terminer er reelle hensyn prøvd, og hva kjennetegner forekomstene?",
      options: ["10 av 34 terminer, alle ti i arkivet, og spørsmålet er stilt ordrett eller nær ordrett i alle ti", "10 av 34 terminer, jevnt fordelt utover hele perioden, med minst én forekomst i hver av de seks siste", "16 av 34 terminer, med en tydelig økning i forekomster etter at den nye straffeloven trådte i kraft", "6 av 34 terminer, alle med ulik formulering, slik at gjenbruk av gamle svar ikke er mulig i praksis"],
      explanation: "Tallet er ti terminer, alle i arkivet, og formuleringen går nesten ordrett igjen i alle ti — det gjør spørsmålet til materialets nest mest gjenbrukte. Forekomstene stopper likevel etter H2016, og temaet er verken prøvd 16 eller 6 ganger.",
    },
    {
      question: "Hvorfor veier reelle hensyn mindre i strafferetten enn på mange andre rettsområder?",
      options: ["Fordi straffansvar krever hjemmel i lov, slik at et hensyn ikke kan bære ansvar for et forhold ordlyden ikke dekker", "Fordi strafferetten er et lovregulert område der forarbeidene alltid gir svar, slik at hensyn sjelden trengs i det hele tatt", "Fordi Høyesterett har fastsatt at reelle hensyn er den letteste rettskildefaktoren, og at den derfor rangeres nederst", "Fordi hensynene bare kan brukes når partene selv har påberopt dem, og det gjøres sjelden i en straffesak"],
      explanation: "Begrunnelsen er legalitetsprinsippet: et hensyn er ikke en lov, og straff krever hjemmel, jf. Grunnloven § 96, EMK art. 7 og straffeloven § 14. Forarbeidene gir langt fra alltid svar, rangeringen følger ikke av en domsavgjørelse, og hensyn er ikke avhengige av at en part har påberopt dem.",
    },
    {
      question: "Hva menes med asymmetrien i bruken av reelle hensyn i strafferetten?",
      options: ["At hensynene ikke kan bære straffansvar utenfor ordlyden, men fullt ut kan bære en innskrenkende lesning til gjerningspersonens gunst", "At hensynene veier tyngre i saker om alvorlige lovbrudd med høy strafferamme enn i saker om mindre alvorlige forhold", "At hensynene i praksis brukes av påtalemyndigheten i skjerpende retning og av forsvareren i formildende retning i én og samme sak", "At hensynene har full vekt i tolkningen av gjerningsbeskrivelsen, men ingen vekt i tolkningen av straffrihetsgrunnene"],
      explanation: "Skranken virker i én retning: mot straff er den hard, mot frifinnelse finnes den ikke, fordi det er borgeren legalitetsprinsippet verner. Vekten avhenger verken av lovbruddets alvor, av hvem som prosederer, eller av hvilken del av straffebudet som tolkes.",
    },
    {
      question: "Hva er en formålsbetraktning?",
      options: ["Et argument om hva bestemmelsen er ment å oppnå, brukt til å velge mellom lesninger ordlyden tåler", "Et argument om at bestemmelsen bør endres fordi den ikke lenger oppnår det lovgiver den gang ønsket", "Et argument om at bestemmelsen må leses slik at den henger sammen med de nærmeste nabobestemmelsene", "Et argument om at bestemmelsen må kunne håndheves uten bevis for hva gjerningspersonen tenkte"],
      explanation: "Formålsbetraktningen bruker regelens hensikt til å velge lesning, og den er sterk fordi hensikten er lovgivers egen. Å si at regelen bør endres er rettspolitikk, sammenheng med naboreglene er et systemargument, og håndhevbarhet er et praktisk hensyn.",
    },
    {
      question: "Hva er kjennetegnet på et systemargument?",
      options: ["At den ene lesningen gir bedre sammenheng med naboreglene, mens den andre skaper hull eller gjør et vilkår overflødig", "At den ene lesningen er merkbart lettere å håndheve for politiet og påtalemyndigheten enn den andre, og derfor bør foretrekkes", "At den ene lesningen følger av lovens oppbygning slik den er beskrevet i lovens egen formålsbestemmelse", "At den ene lesningen er brukt av Høyesterett tidligere, og at prejudikatlæren derfor taler for å videreføre den"],
      explanation: "Systemargumentet gjelder sammenhengen i regelverket: hull og dobbeltdekning er argumenter mot en lesning. Håndhevbarhet er et praktisk hensyn, en formålsbestemmelse gir en formålsbetraktning, og tidligere praksis er rettspraksis som egen rettskildefaktor.",
    },
    {
      question: "En kandidat skriver: «Det er vanskelig å bevise hva gjerningspersonen tenkte, og derfor kan handlingen ikke være straffbar.» Hva er galt?",
      options: ["Slutningen blander en regel om innhold med et spørsmål om bevis — bevisvansker sier ingenting om hva vilkåret betyr", "Slutningen er riktig i innhold, men hensynet er feil navngitt: dette er en formålsbetraktning og ikke et praktisk hensyn", "Slutningen er riktig, men den hører hjemme i den rettspolitiske delen fordi den gjelder hvordan loven bør utformes", "Slutningen bruker et reelt hensyn i skjerpende retning, og der møter hensynet en hard skranke i legalitetsprinsippet"],
      explanation: "Riktig svar er at bevisvansker ikke er et argument om hva regelen betyr. Omskrevet kan poenget brukes — at en lesning ville kreve bevis for indre forestillinger, kan tale for at lovgiver ikke mente å strekke vilkåret — men da blir konklusjonen svakere, ikke sterkere. Utsagnet trekker dessuten mot frifinnelse, ikke mot straff.",
    },
    {
      question: "Hva gjør at ett reelt hensyn veier tyngre enn et annet?",
      options: ["At det er forankret i en kilde, anerkjent i praksis, knyttet til rettsområdets grunnhensyn og mulig å motsi med et motargument", "At det er nevnt først i besvarelsen, siden rekkefølgen viser hvilket hensyn rettsanvenderen selv mener er viktigst", "At det bygger på en avgjørelse fra Høyesterett, siden vekten av et hensyn følger vekten av kilden det er hentet fra", "At det trekker i samme retning som ordlyden i bestemmelsen, siden et hensyn som peker motsatt vei av ordlyden aldri kan tillegges noen vekt"],
      explanation: "Vekten av et hensyn følger av hvor godt det er begrunnet: forankring, anerkjennelse, sammenheng med grunnhensynene og etterprøvbarhet. Rekkefølgen i teksten betyr ingenting, hensyn er ikke avhengige av en dom, og et hensyn som peker mot ordlyden kan godt tillegges vekt når det trekker mot frifinnelse.",
    },
    {
      question: "Hva er den praktiske forskjellen på et reelt hensyn og en rettsfølelse?",
      options: ["Et reelt hensyn kan formuleres, begrunnes og imøtegås av en motpart, mens rettsfølelsen bare kan bekreftes eller avvises", "Et reelt hensyn er saklig, mens rettsfølelsen alltid er usaklig og derfor aldri kan gjøres om til et brukbart argument", "Et reelt hensyn må være hentet fra lovens forarbeider, mens rettsfølelsen er rettsanvenderens egen umiddelbare reaksjon", "Et reelt hensyn gjelder regelen, mens rettsfølelsen gjelder straffutmålingen og hører derfor til reaksjonslæren"],
      explanation: "Testen er om en motpart kan svare med noe annet enn at hun er uenig. En sterk rettsfølelse er ofte fullt mulig å oversette til et hensyn om likhet eller forutberegnelighet, hensyn trenger ikke stå i forarbeidene, og rettsfølelsen dukker opp i alle deler av faget.",
    },
    {
      question: "Hvor hører den rettspolitiske løftesetningen hjemme i et kortsvar?",
      options: ["Til slutt, etter at spørsmålet er besvart, og merket med en overgang som «Så langt om gjeldende rett»", "I innledningen, slik at leseren ser perspektivet før den rettslige drøftelsen av spørsmålet begynner", "Inne i drøftelsen, som en del av begrunnelsen for hvilken lesning av ordlyden som bør velges", "I hvert av delsvarene, slik at det rettspolitiske perspektivet blir gjennomgående i hele besvarelsen"],
      explanation: "Løftesetningen kommenterer det du allerede har konkludert med, og derfor hører den til slutt med et tydelig merke. Står den i innledningen eller inne i drøftelsen, leses den som en påstand om gjeldende rett — og gjentas den i hvert delsvar, er den blitt en tidstyv.",
    },
    {
      question: "Hvilket kriterium i fakultetets vurderingsskjema gjør det rettspolitiske blikket verdt å trene på?",
      options: ["Blikk for rettspolitiske dimensjoner, som står som innholdskriterium på hvert eneste nivå fra A til F", "Evnen til å dimensjonere besvarelsen fornuftig, som er et selvstendig kriterium og ikke bare et godt råd", "Evnen til å skille prinsipale fra subsidiære problemstillinger, som er et av metodekriteriene i skjemaet", "Evnen til å håndtere et sammensatt rettskildebilde, som veiledningene sier skal gi uttelling framfor grundighet"],
      explanation: "Blikk for rettspolitiske dimensjoner er kriteriet som gjelder her, og det gjentas på alle nivåer med gradert styrke. De tre andre er reelle kriterier i samme skjema eller i veiledningene, men de måler henholdsvis proporsjon, disposisjon og kildebredde.",
    },
    {
      question: "Når blir den rettspolitiske løftesetningen et problem?",
      options: ["Når den vokser ut over to setninger eller gjentas i flere svar, slik at den spiser tid fra spørsmål som ikke er besvart", "Når den brukes i en teorioppgave, siden nettopp den sjangeren utelukkende skal gjøre rede for hva som er gjeldende rett i dag", "Når den bygger på hensyn som ikke er nevnt i lovens forarbeider, siden en påstand da mangler forankring i en kilde", "Når den formuleres i en oppgave som uttrykkelig ber om hensynene for og mot en regel, siden svaret da blir dobbelt"],
      explanation: "Risikoen er tidsbruken: å skrive seg bort fra spørsmålet trekker, særlig når det går ut over de andre svarene i et likevektet sett. En teorioppgave tåler perspektivet godt, hensyn trenger ikke stå i forarbeidene, og der oppgaven ber om hensynene, er rettspolitikken selve svaret.",
    },
    {
      question: "En bestemmelse rammer den som «slipper løs dyr» der allmennheten ferdes. Hva gjør et systemargument her?",
      options: ["Det peker på at loven krever forsett med mindre annet er bestemt, slik at en vid lesning ville smugle inn uaktsomhetsansvar", "Det peker på at faren for turgåere er den samme uansett om frigjøringen var villet, slik at den vide lesningen bør velges", "Det peker på at det er vanskelig å bevise hva bonden ville, slik at ordlyden må leses uten krav om hensikt", "Det peker på at ordlyden i vanlig språkbruk forutsetter hensikt, slik at den snevre lesningen følger av ordene selv"],
      explanation: "Systemargumentet bygger på hvordan loven er bygget: skyldkravet fastsettes av lovgiver og skal ikke skapes ved å strekke et verb. Faren for turgåere er en formålsbetraktning, bevisvanskene er et praktisk hensyn, og påstanden om at ordlyden i vanlig språkbruk forutsetter hensikt, er en ren ordlydstolkning og ikke et hensyn i det hele tatt.",
    },
    {
      question: "Hva skjer i strafferetten når de reelle hensynene står omtrent likt?",
      options: ["Ordlyden avgjør, fordi et forhold som ikke klart er dekket av straffebudet, ikke kan rammes", "Rettsanvenderen står fritt til å velge den lesningen som gir det mest rimelige resultatet i den konkrete saken", "Forarbeidene avgjør, fordi de er den nærmeste kilden når hensynene ikke gir noen retning å gå i", "Spørsmålet må avgjøres av lovgiver, slik at domstolen utsetter saken til bestemmelsen er endret"],
      explanation: "Ved likevekt er det ikke uavgjort: straffansvar krever hjemmel, og det som ikke klart er dekket, rammes ikke. Rettsanvenderen står altså ikke fritt, forarbeidene er ikke en automatisk tiebreaker, og en domstol kan ikke sende spørsmålet fra seg.",
    },
    {
      question: "Hvilken formulering viser at kandidaten bruker hensynet framfor bare å nevne det?",
      options: ["«Hensynet til at bestemmelsen skal kunne håndheves, taler for den vide lesningen, fordi den snevre krever bevis ingen kan skaffe»", "«Reelle hensyn taler her for at bestemmelsen må forstås på den måten som best ivaretar formålet bak den regelen lovgiver har gitt»", "«Både reelle hensyn og forarbeidene er relevante rettskildefaktorer i vurderingen av dette spørsmålet»", "«Reelle hensyn kan spille inn her, siden ordlyden ikke gir noe klart svar på hvordan vilkåret skal forstås»"],
      explanation: "Riktig svar navngir hensynet, sier hvilken vei det trekker og hvorfor det treffer akkurat her. De tre andre nevner at hensyn finnes eller er relevante uten å hevde noe som kan motsies — og det er nettopp feil nummer 5, å stoppe ved klassifiseringen.",
    },
    {
      question: "Hvilken rolle har prevensjonshensynene i et tolkningsspørsmål?",
      options: ["De er reelle hensyn som kan velge mellom lesninger ordlyden tåler, for eksempel når rekkevidden av et vilkår er uklar", "De hører utelukkende til straffutmålingen og har ingen plass i tolkningen av gjerningsbeskrivelsen i et straffebud", "De er selvstendige rettskildefaktorer med samme vekt som forarbeidene, siden de følger av straffesystemets oppbygning", "De kan bære straffansvar også der ordlyden ikke dekker forholdet, fordi allmennprevensjonen ellers ville svikte"],
      explanation: "Allmenn- og individualprevensjon er reelle hensyn og brukes som andre hensyn i tolkningen — de dukker opp lenge før reaksjonslæren. De har ikke samme vekt som forarbeidene, og de bryter ikke skranken mot ansvar utenfor ordlyden.",
    },
    {
      question: "Hva er feil nummer 1 slik den slår ut i dette temaet?",
      options: ["Å gjengi definisjonen av reelle hensyn uten å vise et eneste hensyn i arbeid på en konkret ordlyd", "Å blande hensynet brukt som tolkningsargument med hensynet brukt som argument om hva regelen bør være", "Å nevne et hensyn uten å si hvilken vei det trekker i den tvilen som faktisk foreligger i saken", "Å bruke et paragrafnummer fra en straffelov som ikke lenger gjelder, når hensynet skal forankres"],
      explanation: "Feil nummer 1 er å gjengi pensum i stedet for å svare, og her ser den ut som en korrekt definisjon uten eget eksempel. Å blande de to jobbene er en egen felle, å nevne hensyn uten retning er feil nummer 5, og feil lovvalg er feil nummer 14.",
    },
  ],
  'juroff1500-1-5': [
    {
      question: "Hva er hovedregelen i straffeloven § 3 første ledd?",
      options: ["At straffelovgivningen på handlingstidspunktet anvendes på det aktuelle forholdet", "At straffelovgivningen på tidspunktet for avgjørelsen anvendes på forholdet", "At den av de to lovene som gir det aller mildeste resultatet for den siktede, anvendes", "At den nyeste loven alltid går foran den eldre, slik lex posterior tilsier"],
      explanation: "Utgangspunktet er loven slik den var da handlingen ble begått. Avgjørelsestidspunktets lov brukes bare når unntaket slår til, den mildeste loven gjelder ikke automatisk, og lex posterior løser motstrid mellom regler som begge gjelder — ikke lovvalget i tid.",
    },
    {
      question: "Hvilke vilkår må være oppfylt for at loven på avgjørelsestidspunktet skal anvendes?",
      options: ["At den fører til et gunstigere resultat for den siktede, og at endringen skyldes et endret syn på straffverdighet eller reaksjonsbruk", "At den fører til et gunstigere resultat for den siktede, uansett hva som var grunnen til at loven ble endret", "At endringen skyldes et endret syn på straffverdighet, uansett om utfallet blir strengere eller mildere for den siktede", "At påtalemyndigheten og den siktede er enige om at den nye loven skal legges til grunn i saken"],
      explanation: "Unntaket har to kumulative vilkår, og begge må være oppfylt: gunstigere resultat og endret syn. Ett av dem alene er ikke nok, verken det ene eller det andre, og lovvalget er ikke noe partene kan avtale seg imellom.",
    },
    {
      question: "Hva menes med handlingstidspunktet?",
      options: ["Tidspunktet da gjerningspersonen foretok handlingen, ikke da følgen inntraff eller saken kom for retten", "Tidspunktet da følgen av handlingen inntraff, siden det er da lovbruddet er fullbyrdet i lovens forstand", "Tidspunktet da forholdet ble oppdaget og anmeldt, siden det er da foreldelsesfristen begynner å løpe", "Tidspunktet da tiltale ble tatt ut, siden det er da siktede formelt får kjennskap til anklagen"],
      explanation: "Regelen knytter seg til da handlingen ble foretatt, fordi det er da borgeren skulle kunne innrettet seg. Verken følgen, oppdagelsen eller tiltalen er avgjørende for lovvalget — men de kan ha betydning for andre spørsmål, som foreldelse.",
    },
    {
      question: "Når trådte straffeloven av 2005 i kraft?",
      options: ["1. oktober 2015, og fra nøyaktig samme tid ble straffeloven av 1902 opphevet", "1. januar 2005, altså samme år som Stortinget vedtok den nye straffeloven", "1. januar 2016, slik at hele kalenderåret 2015 fortsatt fulgte den gamle loven", "1. juli 2019, da også flere av bestemmelsene om skyldevne ble endret"],
      explanation: "Datoen er 1. oktober 2015, jf. straffeloven § 411. Loven ble vedtatt i 2005, men trådte først i kraft ti år senere, og i mellomtiden gjaldt den gamle loven fullt ut. Endringene i 2019 gjaldt enkeltbestemmelser, ikke ikrafttredelsen.",
    },
    {
      question: "Tyveribestemmelsen sto i straffeloven 1902 § 257. Hvor står den i dag?",
      options: ["I straffeloven § 321, mens nummeret § 257 i dagens lov handler om noe helt annet", "I straffeloven § 271, som er den bestemmelsen som avløste hele formuesdelen av den gamle loven", "I straffeloven § 257, siden nummeret ble videreført uendret ved lovskiftet i 2015", "I straffeloven § 231, sammen med de øvrige bestemmelsene om vinning og befatning"],
      explanation: "Tyveri står i straffeloven § 321. Nummeret 257 finnes fortsatt i dagens lov, men gjelder menneskehandel — og det er nettopp derfor feilen er farlig. Straffeloven § 271 er kroppskrenkelse, og § 231 er narkotikaovertredelse.",
    },
    {
      question: "Straffeloven 1902 § 228 om legemsfornærmelse svarer i dag til hvilken bestemmelse?",
      options: ["Straffeloven § 271 om kroppskrenkelse, og her er selve begrepet endret sammen med nummeret", "Straffeloven § 273 om kroppsskade, som er den bestemmelsen som dekker alle former for vold", "Straffeloven § 275 om drap, siden voldsbestemmelsene er samlet i én bestemmelse i dagens lov", "Straffeloven § 282 om mishandling i nære relasjoner, som avløste voldsbestemmelsene i 2015"],
      explanation: "Legemsfornærmelse svarer til kroppskrenkelse i straffeloven § 271. Kroppsskade i § 273 er den grovere formen og svarte til den gamle legemsbeskadigelsen, § 275 er drap, og § 282 gjelder mishandling i nære relasjoner.",
    },
    {
      question: "Straffeloven 1902 § 49 om forsøk og § 50 om tilbaketreden er i dag samlet hvor?",
      options: ["I straffeloven § 16, med forsøk i paragrafens første ledd og tilbaketreden i annet ledd", "I straffeloven § 15, som også regulerer medvirkning til det samme lovbruddet", "I straffeloven § 16 og § 17, slik at hver av de gamle bestemmelsene fikk sin egen paragraf", "I straffeloven § 49, siden nummeret ble beholdt da den nye loven trådte i kraft"],
      explanation: "Begge deler ligger i straffeloven § 16, og du må derfor oppgi ledd når du viser til dem. Straffeloven § 15 er medvirkning, § 17 er nødrett, og nummeret 49 ble ikke videreført for forsøk.",
    },
    {
      question: "Hvorfor står 1902 § 219 i omregningstabellen selv om den ikke er prøvd i gammel form?",
      options: ["Fordi den bærer nyansen om at eldre rettskilder fortsatt er relevante der bestemmelsen er videreført uten realitetsendring", "Fordi den er den eneste bestemmelsen fra den gamle loven som fortsatt gjelder ved siden av straffeloven § 282", "Fordi mishandling i nære relasjoner er det eneste temaet der begge lovene må anvendes samtidig i samme sak", "Fordi strafferammen er uendret, og fordi tabellen bare omfatter bestemmelser med samme strafferamme før og nå"],
      explanation: "Bestemmelsen sto i straffeloven 1902 § 219 og står i dag i straffeloven § 282, og den er ikke realitetsendret ut over strafferammen. Derfor er eldre praksis fortsatt relevant. Den gamle loven gjelder ikke ved siden av den nye, og strafferammen er nettopp det som er endret.",
    },
    {
      question: "Hva er farligst ved et paragrafnummer hentet fra et sett skrevet til straffeloven av 1902?",
      options: ["At nummeret kan finnes i dagens lov og gjelde en helt annen bestemmelse, slik at feilen ikke oppdages ved et oppslag", "At nummeret som regel ikke finnes igjen i dagens lov, slik at søket i Lovdata Pro ikke gir noe treff i det hele tatt", "At strafferammen i den gamle bestemmelsen alltid var høyere, slik at svaret blir strengere enn det skulle vært", "At de gamle bestemmelsene var skrevet på et eldre språk, slik at ordlyden er vanskelig å tolke for en nybegynner"],
      explanation: "Risikoen er at nummeret finnes og betyr noe annet — tyveriets gamle nummer 257 gjelder i dag menneskehandel. Et nummer som ikke finnes, oppdager du selv. Strafferammene er endret i begge retninger, og språket er ikke hovedproblemet.",
    },
    {
      question: "Hva krever det andre vilkåret i unntaket i straffeloven § 3 første ledd?",
      options: ["At lovendringen skyldes et endret syn på hvilke handlinger som bør straffes, eller på bruken av strafferettslige reaksjoner", "At lovendringen er vedtatt av Stortinget etter at handlingen ble begått, men før saken kom opp for domstolen", "At lovendringen er gjennomført ved en formell endringslov og ikke bare gjennom en ny forskrift på området", "At lovendringen har vært omtalt i forarbeidene som en endring med virkning for allerede begåtte forhold"],
      explanation: "Vilkåret gjelder grunnen til endringen: den må uttrykke at lovgiver har revurdert straffverdigheten eller reaksjonsbruken. Rent tekniske eller språklige endringer faller utenfor, og verken vedtakelsesmåten eller en uttalelse om tilbakevirkning er det bestemmelsen spør etter.",
    },
    {
      question: "Et sammenhengende straffbart forhold fortsetter etter en lovendring i skjerpende retning. Hva følger av straffeloven § 3 annet ledd?",
      options: ["At handlingstidspunktets lov anvendes på de delene av forholdet som faller på hver sin side av ikrafttredelsen", "At den nye og strengere loven anvendes på hele forholdet, siden det fortsatte etter at endringen trådte i kraft", "At den gamle loven anvendes på hele forholdet, siden forløpet startet mens den fortsatt gjaldt fullt ut", "At forholdet må deles i to selvstendige lovbrudd som pådømmes hver for seg i to atskilte saker"],
      explanation: "Forholdet vurderes etter hver sin lov på hver sin side av ikrafttredelsen, slik at ingen rammes av en skjerpelse for det som allerede var gjort. Verken den nye eller den gamle loven anvendes på hele forløpet, og forholdet blir ikke to selvstendige saker.",
    },
    {
      question: "Hvor mange av terminene er skrevet til straffeloven av 1902?",
      options: ["20 av 34 terminer, som er alle terminene fra V2005 til og med 2015", "28 av 34 terminer, altså alle terminene i det gamle kortsvarsregimet før hjemmeeksamen", "16 av 34 terminer, altså under halvparten av det dokumenterte materialet i emnet", "32 av 34 terminer, altså alle unntatt de to siste terminene med praktikumsoppgave"],
      explanation: "Tallet er tjue terminer, og de dekker perioden fram til lovskiftet. De 28 terminene er kortsvarsregimet, som er en annen inndeling, og de 32 er terminene med arkivert oppgavesett.",
    },
    {
      question: "Hvorfor stenger ikke forbudet mot tilbakevirkning for at en nyere og mildere lov anvendes?",
      options: ["Fordi forbudet verner borgeren mot staten, og derfor bare rammer tilbakevirkning som er til ugunst", "Fordi Grunnloven § 97 bare gjelder sivilrettslige forhold, mens straffesaker reguleres av straffeloven alene", "Fordi forbudet bare gjelder lover som er vedtatt etter at tiltale er tatt ut i den konkrete saken", "Fordi domstolen står fritt til å velge den løsningen som gir det rimeligste resultatet i saken"],
      explanation: "Vernet virker i én retning, og den som ville tjent på den nye loven, trenger ikke vern mot den. Grunnloven § 97 gjelder også strafferetten, forbudet er ikke knyttet til tiltaletidspunktet, og domstolen står ikke fritt — regelen står i straffeloven § 3.",
    },
    {
      question: "Hva er feil #14 i bokas feilregister?",
      options: ["Å bruke feil straffelov, enten ved å bruke et gammelt nummer som gjeldende eller ved å forkaste den gamle loven helt", "Å oppgi kilder man ikke har, typisk paragrafer eller avgjørelser som ikke er blitt slått opp underveis i skrivingen", "Å svare på færre spørsmål enn settet faktisk krever, fordi tiden er brukt opp på de spørsmålene man kunne best", "Å gjengi pensum i stedet for å svare på det spørsmålet oppgaveteksten faktisk stiller kandidaten"],
      explanation: "Feil #14 gjelder lovvalget, og den har to retninger som er like gale. Å oppgi kilder man ikke har, er feil #15, å hoppe over spørsmål er feil #16, og å gjengi pensum er feil #1.",
    },
    {
      question: "En bestemmelse er videreført fra den gamle loven uten realitetsendring. Hva følger av det?",
      options: ["At eldre rettskilder om den tidligere bestemmelsen fortsatt er relevante for tolkningen av den nye", "At det gamle paragrafnummeret fortsatt kan brukes i en besvarelse, siden innholdet er det samme", "At begge lovene gjelder side om side for forhold begått etter at den nye loven trådte i kraft", "At eldre rettskilder må brukes med det uttrykkelige forbeholdet at de gjaldt en bestemmelse som nå er opphevet"],
      explanation: "Er innholdet videreført, sier eldre praksis fortsatt noe om vilkåret, og du kan bruke den så lenge du sier hvorfor. Nummeret skal likevel alltid være dagens, den gamle loven gjelder ikke lenger, og forbeholdet trengs først der innholdet faktisk er endret.",
    },
    {
      question: "Hva er de tre mulige utfallene når du møter en bestemmelse fra den gamle loven?",
      options: ["Opphevet uten motstykke, videreført med endringer, eller videreført uten realitetsendring", "Opphevet, erstattet av en forskrift, eller videreført med nøyaktig samme nummer i den nye loven", "Utgått, omnummerert, eller flyttet til en annen lov enn straffeloven av 2005", "Skjerpet, mildnet, eller uendret, avhengig av hva strafferammen sier i de to lovene"],
      explanation: "De tre utfallene styrer tre ulike arbeidsmåter: hopp over, oversett og les dagens tekst, eller bruk de eldre kildene fritt. Ingen av de gamle straffebestemmelsene ble erstattet av en forskrift alene, og strafferammen avgjør ikke hvilken arbeidsmåte du skal bruke.",
    },
    {
      question: "Hva skal du kunne om et institutt som er utgått?",
      options: ["At det er utgått, og at et spørsmål om det i et gammelt sett derfor ikke er trening du skal bruke tid på", "Vilkårene og grensedragningene, slik at du kan forklare hvorfor lovgiver til slutt valgte å fjerne ordningen", "Hvilken bestemmelse i dagens lov som har overtatt jobben, og hvordan den skiller seg fra den gamle", "Hvordan Høyesterett anvendte det i de siste årene før straffeloven av 2005 trådte i kraft"],
      explanation: "Kunnskapskravet er statusen, ikke innholdet. Har instituttet ingen motstykke i dagens lov, finnes det heller ingen bestemmelse som har overtatt jobben — og eldre praksis om det gir ingen uttelling.",
    },
    {
      question: "Hvilke tre institutter fra den gamle loven er borte, og hvor ofte er de prøvd?",
      options: ["Skillet forbrytelser og forseelser, culpa levissima og «overlegg» — hvert av dem i 3 av 34 terminer", "Skillet forbrytelser og forseelser, dolus eventualis og «overlegg» — hvert av dem i 3 av 34 terminer", "Culpa levissima, rettsstridsreservasjonen og «overlegg» — hvert av dem i 5 av 34 terminer", "Skillet forbrytelser og forseelser, culpa levissima og tilbaketreden — hvert av dem i 2 av 34 terminer"],
      explanation: "De tre er skillet mellom forbrytelser og forseelser, culpa levissima og «overlegg», hvert prøvd i tre terminer. Dolus eventualis, rettsstridsreservasjonen og tilbaketreden er alle levende deler av gjeldende rett og hører til andre deler av boka.",
    },
    {
      question: "Hva sier notasjonsregelen for gamle paragrafnumre?",
      options: ["At et gammelt nummer aldri skrives alene, men alltid med årstallet og dagens nummer ved siden av seg", "At et gammelt nummer aldri skal brukes i det hele tatt, verken i notater eller i en besvarelse", "At et gammelt nummer skal skrives med årstall, men uten dagens nummer, siden det siste er unødvendig", "At et gammelt nummer bare kan brukes når oppgaveteksten selv bruker det, og ellers skal utelates"],
      explanation: "Regelen er at årstallet og dagens nummer alltid følger med, slik at ingen leser nummeret som gjeldende. Å utelate det gamle nummeret helt er unødvendig — du trenger det når du bruker eldre praksis — og uten dagens nummer er henvisningen fortsatt farlig.",
    },
    {
      question: "Hvorfor er straffeloven § 3 og ikke lex posterior avgjørende ved lovskiftet i 2015?",
      options: ["Fordi loven selv har regulert overgangen, og den gamle loven er opphevet framfor å stå i motstrid med den nye", "Fordi lex posterior bare gjelder mellom lover av ulik trinnhøyde, slik at prinsippet ikke passer her", "Fordi lex posterior er et ulovfestet prinsipp som aldri kan anvendes på strafferettens område", "Fordi straffeloven § 3 har grunnlovs rang og derfor går foran de alminnelige tolkningsprinsippene"],
      explanation: "Der loven selv regulerer overgangen, er det den reguleringen som gjelder. Lex posterior gjelder motstrid mellom regler av samme trinnhøyde som begge gjelder, prinsippet er ikke utestengt fra strafferetten, og straffeloven § 3 er en vanlig lovbestemmelse.",
    },
    {
      question: "Hvordan bør en besvarelse åpne når handlingen er begått før en lovendring?",
      options: ["Med å avklare lovvalget uttrykkelig og med hjemmel i straffeloven § 3, før noe materielt vilkår drøftes", "Med å drøfte det mest tvilsomme vilkåret først, slik at lovvalget kan avgjøres når resultatet er kjent", "Med å gjengi ordlyden i begge lovene, slik at leseren selv kan se hvilken som gir det mildeste resultatet", "Med å konstatere at den nye loven gjelder, siden det er den loven som er tilgjengelig i Lovdata Pro"],
      explanation: "Lovvalget er et rettsspørsmål som må avklares før du subsumerer, og det tar én setning med dato og hjemmel. Å drøfte vilkår først snur rekkefølgen, å gjengi begge lovtekstene er tidsbruk uten uttelling, og at en lov er lett tilgjengelig, avgjør ingenting.",
    },
    {
      question: "Hva sier lovanalyserubrikken om hvilken lovtekst analysen skal gjøres på?",
      options: ["At analysen alltid skal gjøres på gjeldende lovtekst, også når oppgaven er hentet fra et gammelt sett", "At analysen skal gjøres på den lovteksten oppgaveteksten navngir, siden det er den oppgaven spør om", "At analysen kan gjøres på begge lovtekstene, så lenge kandidaten sier hvilken av dem som er lagt til grunn", "At analysen skal gjøres på den lovteksten som gir det mildeste resultatet for gjerningspersonen"],
      explanation: "Rubrikken har et eget punkt om at analysen skal gjøres på gjeldende tekst, nettopp fordi bestemmelsen i et gammelt sett ofte er opphevet. Å analysere den gamle teksten trener en ferdighet på en lov du ikke skal svare på, og mildhetsvurderingen hører til lovvalget, ikke til analysen.",
    },
  ],
  'juroff1500-2-1': [
    {
      question: "Hvilke fire straffbarhetsvilkår må være oppfylt for at noen skal kunne straffes, og i hvilken rekkefølge settes de opp?",
      options: ["En handling som rammes av et straffebud, fravær av en straffrihetsgrunn, subjektiv skyld, og skyldevne hos gjerningspersonen", "Et straffebud som rammer handlingen, en påvist årsakssammenheng, et bevist motiv, og en forholdsmessig reaksjon", "En handling som er samfunnsskadelig, en skade som er påvist, et motiv som kan bebreides, og en gjerningsperson over den strafferettslige lavalderen", "En anmeldelse fra den fornærmede, en handling som rammes av et straffebud, forsett hos gjerningspersonen, og en strafferamme som omfatter fengsel"],
      explanation: "Rammen er en handling som rammes av et straffebud, fravær av straffrihetsgrunn, subjektiv skyld og skyldevne. Rekkefølgen er ikke tilfeldig: hvert vilkår forutsetter at det foregående er avklart. Årsakssammenheng er et vilkår inne i enkelte gjerningsbeskrivelser og ikke et selvstendig straffbarhetsvilkår, motivet hører til utmålingen, og en anmeldelse er et prosessuelt spørsmål som ikke sier noe om straffbarheten.",
    },
    {
      question: "Hva betyr det at de fire straffbarhetsvilkårene er kumulative?",
      options: ["At alle fire må være oppfylt samtidig — svikter ett av dem, faller straffansvaret bort for dette forholdet", "At det er nok at ett av de fire vilkårene er oppfylt, siden hvert av dem dekker sin egen side av saken", "At vilkårene veies mot hverandre i en helhetsvurdering, slik at et sterkt utslag på ett vilkår kan veie opp for et svakt utslag på et annet", "At vilkårene må prøves i den rekkefølgen hendelsene faktisk skjedde, og at det er denne rekkefølgen som avgjør hvilket vilkår som blir avgjørende"],
      explanation: "Kumulative vilkår må være oppfylt samtidig, alle sammen, og det holder ikke at tre av fire er på plass. Motsatsen er alternative vilkår, der det er nok at ett er oppfylt. At vilkårene kunne veies mot hverandre, ville gjort dem om til momenter i en helhetsvurdering — og nettopp det å behandle et vilkår som et moment er en av de vanligste metodiske feilene.",
    },
    {
      question: "Hvor i lovverket står de fire straffbarhetsvilkårene samlet?",
      options: ["De står ikke samlet noe sted — de er utledet av straffeloven som system, og er den ordningen rettsvitenskapen og domstolene bruker", "De står samlet i straffeloven § 14, som er den bestemmelsen enhver ansvarsdrøftelse skal begynne i, og som ramser dem opp i rekkefølge", "De står samlet i straffeloven § 20, sammen med reglene om den strafferettslige lavalderen og om utilregnelighet på handlingstidspunktet", "De står i straffelovens innledende kapittel, fordelt på fire ledd i én og samme bestemmelse, slik at hvert ledd bærer sitt eget vilkår"],
      explanation: "Vilkårene er ikke skrevet ned samlet noe sted i straffeloven; de er en systematisering av loven, ikke en lovbestemmelse. Det er verdt å si eksplisitt i en besvarelse. De enkelte vilkårene har derimot hver sin hjemmel: § 14 bærer kravet om lovhjemmel, §§ 17 og 18 er de sentrale straffrihetsgrunnene, § 21 bærer skyldkravet og § 20 skyldevnen.",
    },
    {
      question: "Hva spør det første straffbarhetsvilkåret om, og hvilken bestemmelse bærer kravet om lovhjemmel?",
      options: ["Om det finnes et straffebud som gjør handlingen forbudt, og om handlingen passer på gjerningsbeskrivelsen etter tolkning, jf. straffeloven § 14", "Om handlingen er dekket av et straffebud lest helt bokstavelig, uten at det er rom for verken utvidende eller innskrenkende tolkning, jf. straffeloven § 21", "Om handlingen er så samfunnsskadelig at den bør rammes, og om et forbud ville hatt tilstrekkelig forebyggende virkning, jf. straffeloven § 14", "Om påtalemyndigheten har funnet fram til det straffebudet som har den høyeste strafferammen for forholdet, slik at tiltalen blir riktig, jf. straffeloven § 20"],
      explanation: "Vilkåret spør om det finnes en bestemmelse som gjør handlingen forbudt, og om det som skjedde passer på gjerningsbeskrivelsen etter tolkning. Kravet om lovhjemmel står i straffeloven § 14. Bestemmelsen leses aldri helt bokstavelig — først tolkes de uklare ordene, deretter subsumeres faktum. Om handlingen bør være forbudt, er et rettspolitisk spørsmål og ikke en del av vilkåret.",
    },
    {
      question: "Det andre straffbarhetsvilkåret er formulert negativt: det kreves at det ikke foreligger en straffrihetsgrunn. Hva betyr det for hvordan du behandler vilkåret i en besvarelse?",
      options: ["At du bare drøfter straffrihetsgrunner der faktum gir en foranledning til det — er det ingen holdepunkter for nødverge, skriver du ingenting om nødverge", "At du alltid må gå gjennom nødverge, nødrett og samtykke etter tur, siden fraværet av hver enkelt av dem er et selvstendig vilkår som må prøves", "At du må konkludere med frifinnelse så snart det er tvil om en straffrihetsgrunn, siden vilkåret er formulert til gjerningspersonens gunst i ordlyden", "At du behandler dette spørsmålet før alle de andre, siden en straffrihetsgrunn gjør det unødvendig å ta stilling til om noe straffebud i det hele tatt rammer"],
      explanation: "Fordi vilkåret er formulert som et fravær, drøftes det bare når faktum gir en foranledning. Straffrihetsgrunnene — nødverge etter straffeloven § 18 og nødrett etter § 17 — er ikke en obligatorisk sjekkliste. Rekkefølgen er dessuten fast: først om handlingen er dekket av et straffebud, deretter om den likevel var berettiget. Å snu den er å spørre om en handling var lovlig før man har sagt hva som gjør den ulovlig.",
    },
    {
      question: "Et straffebud sier ingenting om hvilken skyldform som kreves. Hva gjelder da?",
      options: ["Forsett kreves, fordi straffeloven § 21 slår fast at straffelovgivningen bare rammer forsettlige lovbrudd med mindre annet er bestemt", "Uaktsomhet er tilstrekkelig, fordi straffeloven § 23 setter den nedre grensen for skyld i alle tilfeller der straffebudet selv er taust om spørsmålet", "Både forsett og uaktsomhet rammes, fordi et straffebud som ikke sier noe om skyld, er ment å ramme enhver overtredelse av gjerningsbeskrivelsen", "Retten avgjør skyldformen ut fra hvor alvorlig lovbruddet var og hvor stor risikoen var"],
      explanation: "Hovedregelen i straffeloven § 21 gir deg svaret der bestemmelsen tier: forsett er normalkravet, og uaktsomhet er bare straffbart der straffebudet sier det uttrykkelig. Mange kandidater leter forgjeves i selve bestemmelsen etter et skyldkrav som ikke står der. Skyldformen er dessuten ikke noe retten fastsetter etter hvor alvorlig forholdet er — den følger av loven.",
    },
    {
      question: "Hva krever det fjerde straffbarhetsvilkåret, og hvor står regelen?",
      options: ["At gjerningspersonen har skyldevne — han må være over den strafferettslige lavalderen og tilregnelig, jf. straffeloven § 20", "At gjerningspersonen har fylt 18 år, siden det er myndighetsalderen loven bygger hele sin ordning av det strafferettslige ansvaret på, jf. straffeloven § 20", "At gjerningspersonen har forstått rekkevidden av handlingen sin, og at han er i stand til å forklare seg om den i retten, jf. straffeloven § 22", "At gjerningspersonen ikke har handlet under tvang eller press fra andre i tiden forut for handlingen, slik at valget var hans eget, jf. straffeloven § 18"],
      explanation: "Skyldevne etter straffeloven § 20 er det fjerde vilkåret: første ledd fastsetter at den som er under 15 år på handlingstidspunktet, ikke er strafferettslig ansvarlig, og annet ledd gjelder den som er utilregnelig. Lavaldersgrensen er 15 år, ikke myndighetsalderen 18 år. Hva gjerningspersonen forsto av situasjonen, hører til det tredje vilkåret om skyld, og press fra andre er et helt annet spørsmål.",
    },
    {
      question: "Hva følger av at en gjerningsperson mangler skyldevne?",
      options: ["At han ikke kan straffes, men at loven har egne reaksjoner for ham, blant annet overføring til tvungent psykisk helsevern etter straffeloven § 62 og tvungen omsorg etter § 63", "At saken er over uten videre, siden manglende skyldevne stenger for enhver reaksjon rettsordenen kan sette inn, og han derfor går ut av systemet uten oppfølging av noe slag", "At han straffes mildere enn ellers, fordi manglende skyldevne er et formildende moment retten er pålagt å legge vekt på når den utmåler straffen for forholdet", "At forholdet må bedømmes etter reglene om uaktsomhet i stedet, siden den som mangler skyldevne, etter sakens natur ikke kan ha handlet forsettlig"],
      explanation: "At noen ikke kan straffes, betyr ikke at ingenting skjer. Straffeloven har egne reaksjoner for den som mangler skyldevne, blant annet overføring til tvungent psykisk helsevern etter § 62 og tvungen omsorg etter § 63. Skyldevne er dessuten et eget vilkår og ikke et formildende moment ved utmålingen — svikter det, faller straffansvaret helt bort, uansett hvilken skyldform man ellers ville landet på.",
    },
    {
      question: "Hva er forskjellen på et vilkår og et moment i en helhetsvurdering?",
      options: ["Et vilkår må være oppfylt, mens et moment er noe som teller med i en avveining og kan veies opp av andre momenter", "Et vilkår står alltid i lovteksten, mens et moment alltid er ulovfestet og derfor bygger på rettspraksis og på reelle hensyn i den enkelte saken", "Et vilkår gjelder de objektive sidene ved forholdet, mens et moment gjelder de subjektive sidene, altså hva gjerningspersonen visste og ville", "Et vilkår avgjøres av retten, mens et moment er noe partene kan bli enige om seg imellom"],
      explanation: "Skillet er hva som skjer når det ikke slår til: et vilkår som svikter, avgjør saken, mens et moment som taler den ene veien, kan oppveies av momenter som taler den andre. Å behandle et vilkår som et moment er en av de vanligste metodiske feilene. Både vilkår og momenter kan være lovfestede eller ulovfestede, og begge kan gjelde både objektive og subjektive forhold.",
    },
    {
      question: "Hva er subsumsjon?",
      options: ["Å holde det konkrete faktum opp mot det tolkede vilkåret og si om hendelsen er av det slaget regelen snakker om", "Å fastlegge hva et uklart ord i gjerningsbeskrivelsen betyr, ved hjelp av ordlyd, forarbeider, rettspraksis og reelle hensyn", "Å trekke en konklusjon om straffansvar etter at alle fire straffbarhetsvilkårene er gjennomgått og funnet oppfylt i den aktuelle saken", "Å plassere forholdet under det straffebudet som gir den mest passende reaksjonen"],
      explanation: "Subsumsjon er å holde faktum opp mot det tolkede vilkåret. Tolkning er noe annet: den handler om regelen og er generell, mens subsumsjonen handler om denne saken og er konkret. Rekkefølgen er avgjørende — å subsumere uten å ha tolket først er å påstå at noe passer uten å ha sagt hva det skal passe på. Konklusjonen er resultatet av arbeidet, ikke arbeidet selv.",
    },
    {
      question: "Hva hører med til gjerningsbeskrivelsen i et straffebud?",
      options: ["Hvem som kan være gjerningsperson, hvilken handling eller unnlatelse det gjelder, hvilke omstendigheter som må foreligge, og eventuelt hvilken følge som må inntre", "Alt som står i bestemmelsen, inkludert strafferammen og eventuelle regler om grovhet, siden alle disse elementene til sammen avgjør om bestemmelsen er overtrådt", "Beskrivelsen av handlingen sammen med skyldkravet, siden det er summen av det ytre og det indre som utgjør den forbudte oppførselen bestemmelsen rammer", "De ordene i bestemmelsen som er uklare og derfor må tolkes, mens de ordene som har en entydig betydning, følger direkte av alminnelig språkbruk"],
      explanation: "Gjerningsbeskrivelsen er alt som beskriver den forbudte oppførselen: gjerningspersonen, handlingen eller unnlatelsen, omstendighetene og en eventuell følge. Skyldkravet ligger utenfor den — det sier ikke hva som må skje, men hva gjerningspersonen må ha visst eller villet om det som skjer. Strafferammen og grovhetsreglene hører til straffebudet, men ikke til beskrivelsen; de påvirker utmålingen, ikke om handlingen er beskrevet.",
    },
    {
      question: "Hva er forskjellen på inndelingen i objektive og subjektive vilkår, og de fire straffbarhetsvilkårene?",
      options: ["De fire straffbarhetsvilkårene er den ytre rammen for hele ansvarsspørsmålet, mens objektive og subjektive vilkår er en inndeling inne i det enkelte straffebudet", "Objektive og subjektive vilkår er den ytre rammen for hele ansvaret, mens de fire straffbarhetsvilkårene er en inndeling inne i det enkelte straffebudet", "De to inndelingene er to navn på det samme: de to første straffbarhetsvilkårene er de objektive, og de to siste er de subjektive vilkårene i saken", "Objektive vilkår er de som er lovfestet i gjerningsbeskrivelsen, mens subjektive vilkår er de ulovfestede kravene rettspraksis har lagt til i tillegg til ordlyden"],
      explanation: "De to inndelingene ligger på hvert sitt nivå. Firedelingen rammer inn hele ansvarsspørsmålet, mens objektive og subjektive vilkår sorterer bestanddelene inne i ett straffebud: hva som skjedde i den ytre verden, mot hva gjerningspersonen visste, holdt for sannsynlig eller ville. Å blande de to nivåene gir en besvarelse der leseren mister oversikten over hvor i vurderingen man befinner seg.",
    },
    {
      question: "Hva er forskjellen på en hjemmel og en kilde?",
      options: ["Hjemmelen er den rettsregelen kravet eller avgjørelsen bygger på, mens en kilde er noe du har lest for å finne ut hva regelen går ut på", "Hjemmelen er den bestemmelsen påtalemyndigheten bygger tiltalen på, mens kilden er den bestemmelsen retten til slutt velger å dømme etter i saken", "Hjemmelen er den delen av en bestemmelse som angir reaksjonen, mens kilden er den delen som beskriver hvilken oppførsel som er forbudt etter bestemmelsen", "Hjemmelen er alltid en lov, mens en kilde er alt annet enn lov, slik at forskrifter, rettspraksis og forarbeider aldri kan være hjemmel for noe krav"],
      explanation: "En hjemmel er grunnlaget for regelen, angitt med lov, paragraf og ledd. En kilde er noe du har lest for å finne ut hva regelen går ut på — en lærebok, en dom, et forarbeid. Å oppgi læreboka der oppgaven spør om hjemmelen, er å svare på et annet spørsmål. I strafferetten følger det av straffeloven § 14 at reaksjoner bare kan ilegges med hjemmel i lov.",
    },
    {
      question: "Hvorfor er det verdt å begynne analysen av et straffebud med spørsmålet om hvem som kan være gjerningsperson?",
      options: ["Fordi svaret ikke alltid er «hvem som helst» — noen bestemmelser retter seg bare mot en avgrenset krets, og da må ansvaret eventuelt bygges på medvirkning etter straffeloven § 15", "Fordi bestemmelser som åpner med «den som», ikke kan overtres av personer som allerede har en plikt etter en annen lov, og dermed må vike for spesiallovgivningen", "Fordi strafferammen avhenger av hvem gjerningspersonen er, slik at en person med et særlig ansvar rammes av en høyere ramme enn andre for den samme handlingen", "Fordi påtalespørsmålet avgjøres ut fra gjerningspersonens rolle, og fordi bestemmelser rettet mot en avgrenset krets bare forfølges når fornærmede krever det"],
      explanation: "De fleste straffebud åpner med «den som», og da kan hvem som helst rammes. Andre bestemmelser — særdelikter — retter seg bare mot den som har en bestemt stilling, et bestemt ansvar eller en bestemt rolle. Kan personen i faktum ikke rammes direkte, må ansvaret eventuelt bygges på medvirkning etter straffeloven § 15. Strafferammen følger av bestemmelsen selv og varierer ikke med hvem gjerningspersonen er.",
    },
    {
      question: "Strafferammen brukes til mer enn å angi hvor streng straffen kan bli. Hva er et eksempel på det?",
      options: ["Rammen er et vilkår i andre regler: forsøksansvaret etter straffeloven § 16 gjelder bare lovbrudd som kan medføre fengsel i ett år eller mer, og foreldelsesfristene beregnes ut fra rammen", "Rammen avgjør hvilken skyldform straffebudet krever, slik at bestemmelser med høy ramme krever forsett, mens bestemmelser med lav ramme også kan overtres ved uaktsomhet", "Rammen avgjør hvor mye av gjerningsbeskrivelsen skylden må dekke, slik at det ved høye rammer kreves skyld om samtlige elementer og ved lave rammer bare om hovedhandlingen", "Rammen angir hvilken straff retten normalt skal utmåle i den enkelte saken, slik at avvik fra den øvre grensen må begrunnes særskilt i domsgrunnene"],
      explanation: "Strafferammen er ikke bare et tall til slutt; den er et vilkår du må slå opp. Forsøksansvaret etter straffeloven § 16 forutsetter en ramme på fengsel i ett år eller mer, og foreldelsesfristene beregnes ut fra rammen. Rammen sier hva som er mulig, ikke hva som blir resultatet — den utmålte straffen ligger nesten alltid langt under den øvre grensen, og skyldkravet følger av loven, ikke av rammens størrelse.",
    },
    {
      question: "Hva kjennetegner et handlingsdelikt?",
      options: ["At selve handlingen er nok — bestemmelsen krever ingen bestemt følge ut over handlingen selv", "At handlingen må ha ført til en skade, men at det ikke kreves årsakssammenheng mellom handlingen og skaden når følgen først har inntrådt", "At bestemmelsen bare kan overtres ved en aktiv handling, og at den derfor aldri kan anses overtrådt ved passivitet, uansett hvilken plikt gjerningspersonen hadde", "At handlingen må være farlig, slik at den som holder seg innenfor akseptert risiko, går fri"],
      explanation: "I et handlingsdelikt er handlingen nok: å kjøre bil med for høy promille er straffbart uansett om det gikk galt. Du skal vise at handlingen ble foretatt, at den passer på beskrivelsen, og at skylden dekket den — ikke at noe ble skadet. At en bestemmelse er formulert som en aktiv handling, utelukker for øvrig ikke at den kan overtres ved passivitet; det er nettopp det uekte unnlatelsesdeliktet handler om.",
    },
    {
      question: "Hva må vises i tillegg når straffebudet er et følgedelikt?",
      options: ["Årsakssammenheng mellom handlingen og følgen — drapsbestemmelsen i straffeloven § 275 rammer ikke uten at dødsfølgen faktisk inntrådte", "At følgen var påregnelig for en alminnelig fornuftig person i gjerningspersonens situasjon, slik at ansvaret ikke strekkes lenger enn det som var forutsigbart", "At følgen var ønsket av gjerningspersonen, siden et følgedelikt etter sin art forutsetter at han har handlet med hensikt om nettopp dette resultatet", "At handlingen i seg selv var uforsvarlig, siden det er avviket fra det forsvarlige og ikke resultatet som bærer ansvaret i denne typen bestemmelser"],
      explanation: "Et følgedelikt rammer først når handlingen har ført til en bestemt følge, og da må årsakssammenhengen vises som et selvstendig vilkår. Drapsbestemmelsen i straffeloven § 275 er det tydeligste eksempelet. Om følgen var ønsket, er et skyldspørsmål og hører til det tredje straffbarhetsvilkåret, og at handlingen var uforsvarlig, er en uaktsomhetsvurdering — ingen av delene erstatter årsakskravet.",
    },
    {
      question: "Hva kjennetegner et ekte unnlatelsesdelikt, og hva er et eksempel fra gjeldende rett?",
      options: ["Bestemmelsen rammer selv at noe ikke ble gjort — straffeloven § 287 rammer den som unnlater etter evne å hjelpe en person som er i åpenbar fare for å miste livet eller bli påført betydelig skade", "Bestemmelsen er formulert som en aktiv handling, men kan etter omstendighetene overtres ved passivitet, slik straffeloven § 287 viser når hjelpeplikten ikke er oppfylt av den som var til stede", "Bestemmelsen rammer den som har en avtale om å gripe inn og lar være, slik at plikten følger av avtaleforholdet og ikke av selve straffebudets ordlyd i den enkelte saken", "Bestemmelsen rammer bare den som selv har skapt faren og deretter lar være å avverge den, slik at ansvaret alltid forutsetter en forutgående handling fra gjerningspersonen"],
      explanation: "I et ekte unnlatelsesdelikt er passiviteten selve gjerningsbeskrivelsen, og plikten står i bestemmelsen. Straffeloven § 287 er et rent eksempel og rammer med bot eller fengsel inntil seks måneder. Det uekte unnlatelsesdeliktet er noe annet: der er straffebudet formulert som en aktiv handling, og plikten må bygges på et grunnlag utenfor ordlyden — for eksempel avtale eller en forutgående farevoldende handling.",
    },
    {
      question: "Hvordan avgjøres årsakssammenheng i et følgedelikt, og hva løser prøven ikke?",
      options: ["Ved en tenkt prøve — ville følgen inntrådt om handlingen tenkes borte? Prøven sier ingenting om hvor langt ansvaret rekker når årsakskjeden er svært lang eller helt upåregnelig", "Ved en tenkt prøve — ville følgen inntrådt om handlingen tenkes borte? Prøven avgjør samtidig om gjerningspersonen hadde tilstrekkelig skyld med hensyn til den følgen som inntraff", "Ved en vurdering av om følgen var den typiske virkningen av handlingen, slik at atypiske forløp alltid faller utenfor uten at det er nødvendig med noen ytterligere vurdering", "Ved en vurdering av hvor stor del av følgen som skyldtes gjerningspersonen, slik at ansvaret begrenses forholdsmessig når også andre forhold har bidratt til resultatet"],
      explanation: "Utgangspunktet er å tenke handlingen bort og spørre om følgen likevel ville inntrådt. Er svaret nei, er handlingen en årsak. Prøven sier derimot ingenting om hvor langt ansvaret rekker — er kjeden svært lang eller helt upåregnelig, kan ansvaret begrenses, men da er det en rettslig vurdering og ikke en faktisk. Skyld er et selvstendig spørsmål som kommer etter: at noen forårsaket et dødsfall, sier ingenting om forsettet.",
    },
    {
      question: "Hvorfor skal du drøfte subsidiært, når du allerede har funnet at ett vilkår svikter?",
      options: ["Fordi det er drøftelsen som gir uttelling, ikke landingen — stopper du etter det første nei-et, kan halve oppgaven bli ubesvart", "Fordi en konklusjon ikke er bindende før alle fire straffbarhetsvilkårene er gjennomgått, og retten derfor kan komme til at vilkåret likevel var oppfylt", "Fordi du ellers vil ha tatt standpunkt til noe oppgaven ikke ba om, og en besvarelse som konkluderer for tidlig, regnes som ufullstendig av den grunn", "Fordi det er et krav at du unnlater å ta standpunkt der spørsmålet er tvilsomt, slik at leseren selv kan avgjøre hvilken av løsningene som er den beste"],
      explanation: "Subsidiær drøftelse er å skrive «dersom jeg tar feil på det forrige punktet, blir spørsmålet …» og deretter behandle det som følger av den motsatte konklusjonen. Grunnen er at det er drøftelsen som gir uttelling: når en konklusjon stenger resten av oppgaven, mister du all uttelling for det som lå bak. Det er noe helt annet enn å konkludere vagt — du tar standpunkt prinsipalt, og drøfter deretter det andre sporet.",
    },
    {
      question: "Hva ligger i kravet om proporsjon, altså å dimensjonere besvarelsen fornuftig?",
      options: ["Kort om det klare og dybde i det tvilsomme — de uproblematiske vilkårene nevnes, men i én setning hver, med en begrunnelse", "Like mye plass til hvert av de fire straffbarhetsvilkårene, slik at leseren ser at samtlige er prøvd og at ingen av dem er behandlet grundigere enn de øvrige", "At de uproblematiske vilkårene utelates helt, slik at all plassen går til det spørsmålet som faktisk er tvilsomt i den saken oppgaven gjelder", "At besvarelsens lengde tilpasses tidsrammen, ikke tvilen i saken"],
      explanation: "Regelen er kort om det klare, dybde i det tvilsomme, og fakultetets karakterkriterier nevner dimensjoneringen som et selvstendig punkt. Proporsjon er ikke å utelate vilkår: de klare skal nevnes, fordi det nettopp er det som viser at du har sett hele bildet — men med én setning og en grunn, som at gjerningspersonen var 34 år og at faktum ikke gir holdepunkter for utilregnelighet.",
    },
    {
      question: "Hva er forskjellen på ansvarsspørsmålet og utmålingsspørsmålet, og hvorfor må skillet holdes?",
      options: ["Ansvarsspørsmålet er om personen kan straffes, utmålingsspørsmålet hvor mye straff han skal få — momenter som tilståelse, ung alder eller grovhet har ingen plass i ansvarsdrøftelsen", "Ansvarsspørsmålet er om personen faktisk gjorde handlingen, utmålingsspørsmålet om den rammes av et straffebud — og bevisvurderingen hører derfor til ansvarsdelen av saken", "Ansvarsspørsmålet avgjøres av de to første straffbarhetsvilkårene, utmålingsspørsmålet av de to siste, siden skyld og skyldevne først og fremst påvirker reaksjonens lengde", "Ansvarsspørsmålet gjelder forholdet til den fornærmede, utmålingsspørsmålet forholdet til samfunnet — og det er derfor bare det siste som er regulert i straffeloven"],
      explanation: "De fire straffbarhetsvilkårene hører utelukkende til ansvarsspørsmålet. Momenter som at gjerningspersonen tilsto, at han var ung, eller at forholdet var grovt, avgjør hvor mye straff, ikke om det er straffansvar. Et forhold blir ikke straffritt av å være lite alvorlig, og ikke straffbart av å være opprørende. Alle fire vilkårene hører til ansvarsdelen — også skyld og skyldevne.",
    },
  ],
  'juroff1500-2-2': [
    {
      question: "Hva kjennetegner et ekte unnlatelsesdelikt?",
      options: ["At straffebudet selv er formulert som en unnlatelse — ordlyden sier «den som unnlater å …», og passiviteten er dermed selve gjerningsbeskrivelsen", "At straffebudet er formulert som en aktiv handling, men at domstolene har akseptert at det kan overtres ved passivitet når gjerningspersonen hadde en plikt", "At straffebudet rammer den som har en særlig tilknytning til den utsatte, slik at plikten følger av forholdet mellom partene og ikke av bestemmelsens ordlyd", "At straffebudet rammer enhver som var til stede da faren oppsto, uten hensyn til om vedkommende hadde noen særlig foranledning til å gripe inn i situasjonen"],
      explanation: "I det ekte unnlatelsesdeliktet har lovgiver selv bestemt at det å la være skal være straffbart, og plikten står i bestemmelsen. Straffeloven §§ 196 og 287 er eksemplene. Det uekte unnlatelsesdeliktet er noe annet: der er bestemmelsen formulert som en aktiv handling, og ansvaret må bygges på ulovfestet grunnlag. At plikten følger av tilknytningen mellom partene, gjelder nettopp det uekte sporet.",
    },
    {
      question: "Hva vil det si at det foreligger et uekte unnlatelsesdelikt?",
      options: ["At et straffebud som etter ordlyden rammer en aktiv handling, likevel anses overtrådt ved passivitet — på ulovfestet grunnlag og på nærmere vilkår", "At et straffebud som etter ordlyden rammer en unnlatelse, anvendes på en aktiv handling som har hatt den samme virkningen som passiviteten ville hatt", "At et straffebud er overtrådt både ved en handling og ved en etterfølgende unnlatelse, slik at gjerningspersonen rammes av to bestemmelser i konkurrens", "At et straffebud er så uklart formulert at det er tvilsomt om det rammer handling eller unnlatelse, og at tvilen da må komme gjerningspersonen til gode"],
      explanation: "Det uekte unnlatelsesdeliktet er at en bestemmelse skrevet for aktiv handling — «den som dreper», «den som tar» — anses overtrådt ved at noen lot være. Grunnlaget er ulovfestet, og tre kumulative vilkår må være oppfylt. Det er altså ikke en tolkningstvil som løses i gjerningspersonens favør, og det har ingenting med konkurrens mellom flere bestemmelser å gjøre.",
    },
    {
      question: "Hvilket kontrollspørsmål avgjør om du står i det ekte eller det uekte sporet?",
      options: ["Om gjerningsbeskrivelsen sier «den som unnlater» eller beskriver en aktiv handling som å ta, å drepe eller å øve vold", "Om gjerningspersonen faktisk kunne ha grepet inn i situasjonen uten å utsette seg selv eller andre for særlig fare eller oppofrelse av noe slag", "Om straffebudet har en strafferamme på fengsel i ett år eller mer, siden bare de alvorligere bestemmelsene kan overtres ved passivitet", "Om den utsatte hadde noen annen å henvende seg til på stedet"],
      explanation: "Kontrollspørsmålet stilles til ordlyden: sier den «den som unnlater», er deliktet ekte, og hjemmelen er på plass. Beskriver den en aktiv handling og faktum bare gir deg passivitet, står du i det uekte sporet og må bygge de tre vilkårene. Om han kunne grepet inn, er spørsmålet om handleevne, og strafferammen har ingen betydning for hvilket spor du er i.",
    },
    {
      question: "Hvilke tre vilkår må være oppfylt for uekte unnlatelsesansvar?",
      options: ["En handleplikt for nettopp denne personen, årsakssammenheng mellom unnlatelsen og følgen, og at unnlatelsen kan likestilles med den aktive handlingen", "En handleplikt for nettopp denne personen, forsett om følgen som inntraff, og at gjerningspersonen selv hadde skapt den faren som senere slo ut i skade", "En moralsk foranledning til å gripe inn, en påvist skade av et visst omfang, og at inngrepet kunne vært foretatt uten risiko for den som skulle ha handlet", "Et straffebud med uaktsomhetsalternativ, en fare som var åpenbar for enhver, og at ingen andre til stede hadde bedre forutsetninger for å gripe inn"],
      explanation: "De tre vilkårene er handleplikt, årsakssammenheng og likestilling, og de er kumulative. Til sammen smalner de ansvaret inn fra «alle som kunne ha grepet inn» til «den som hadde en særlig grunn til å gripe inn, og hvis unnlatelse er like ille som å gjøre det selv». Forsett er et selvstendig spørsmål under det tredje straffbarhetsvilkåret og hører ikke inn i denne stigen.",
    },
    {
      question: "Hva kreves for at det foreligger en handleplikt i det uekte unnlatelsesdeliktets forstand?",
      options: ["En rettslig plikt til å gripe inn som påhviler nettopp denne personen, med et identifiserbart grunnlag — at det ville vært anstendig å hjelpe, er ikke nok", "En moralsk forpliktelse som en alminnelig samvittighetsfull person ville følt i situasjonen, siden retten her bygger direkte på samfunnets forventninger", "En plikt som følger av straffeloven § 287, siden det er denne bestemmelsen som gjør alle til stede ansvarlige for å hjelpe den som er i fare på stedet", "En plikt som gjelder alle som var i nærheten og som forsto hva som holdt på å skje, uten at det kreves noe som skiller dem fra hverandre"],
      explanation: "Vilkåret er en rettslig plikt med et grunnlag som kan pekes ut, og som treffer nettopp denne personen. Spørsmålet er alltid hvorfor akkurat han hadde plikten når de tjue andre på brygga ikke hadde den. At det ville vært anstendig å gripe inn, er ikke nok. Hjelpeplikten i straffeloven § 287 gjelder riktignok alle, men den er et eget ekte unnlatelsesdelikt med lav strafferamme — noe annet enn handleplikten her.",
    },
    {
      question: "Hva bærer pliktgrunnlaget «særlig tilknytning»?",
      options: ["Avhengigheten — jo mindre den utsatte kan hjelpe seg selv, og jo mer nærliggende det er at nettopp denne personen trer inn, desto sterkere er plikten", "Slektskapet — plikten følger av familiebåndet som sådant, og strekker seg derfor like langt mellom voksne søsken som mellom en forelder og et lite barn", "Nærheten i tid og rom — den som befant seg nærmest den utsatte da faren oppsto, har plikten, og de øvrige tilstedeværende er dermed uten ansvar", "Kunnskapen — den som best forsto hva som var i ferd med å skje, har plikten, uavhengig av hvilket forhold han ellers sto i til den utsatte"],
      explanation: "Det er avhengigheten som bærer plikten, og de klareste tilfellene er foreldre overfor små barn og andre omsorgsforhold. Grensene er uskarpe for samboere, venner på tur og kolleger, og en besvarelse som konstaterer plikt uten å drøfte nærheten, har hoppet over det som var vanskelig. Fysisk nærhet eller fagkunnskap alene skiller ikke denne personen fra andre tilstedeværende.",
    },
    {
      question: "En person tenner et bål i skogkanten på en fullt lovlig og forsvarlig måte, og faren for spredning oppstår likevel. Hva betyr det for handleplikten?",
      options: ["Plikten foreligger uansett — grunnlaget forutgående farevoldende handling gjelder selv om den forutgående handlingen var helt lovlig og uklanderlig", "Plikten faller bort, fordi grunnlaget forutsetter at den forutgående handlingen i seg selv var uforsvarlig eller på annen måte kritikkverdig", "Plikten faller bort, fordi den som har opptrådt forsvarlig, har holdt seg innenfor den risikoen rettsordenen har akseptert på området", "Plikten går over på grunneieren, siden ansvaret for å avverge faren følger den som har rådigheten over stedet der faren oppsto"],
      explanation: "Grunnlaget gjelder selv om den forutgående handlingen var lovlig: den som lovlig og forsvarlig graver en grøft, har likevel plikt til å sikre den. Å blande inn spørsmålet om skyld for selve farevoldingen fører til at man leter etter klanderverdighet der spørsmålet er plikt. Kravet er at handlingen faktisk skapte eller vesentlig økte faren, og at faren fortsatt kan avverges.",
    },
    {
      question: "Hva er det som bærer en handleplikt bygget på avtale?",
      options: ["At noen har innrettet seg — foreldrene reiste fra huset fordi noen hadde sagt ja til å se etter barnet, og den innrettelsen er grunnen til at ansvaret følger med", "At avtalen er bindende som kontrakt etter alminnelige avtalerettslige regler, slik at en ugyldig eller uklar avtale ikke kan bære noe strafferettslig ansvar", "At den som påtok seg oppgaven, fikk betalt for den, siden vederlaget er det som gjør forpliktelsen sterk nok til å bære et ansvar etter et straffebud", "At oppgaven ble påtatt skriftlig, siden en muntlig avtale ikke gir tilstrekkelig klarhet om hva plikten omfatter og hvor langt den strekker seg i tid"],
      explanation: "Det avgjørende er at noen faktisk har påtatt seg oppgaven og at andre har innrettet seg etter det. Om avtalen er bindende som kontrakt, spiller mindre rolle, og verken vederlag eller skriftlighet er vilkår. Plikten går derimot ikke lenger enn det som er påtatt: har hun sagt ja til å se etter barnet inne i huset, har hun ikke uten videre påtatt seg å redde det ut av en elv en kilometer unna.",
    },
    {
      question: "En badevakt er satt til å overvåke et anlegg med flere bassenger. Hva sier pliktgrunnlaget «stilling» om rekkevidden av plikten hennes?",
      options: ["Plikten er avgrenset til rollens område, men strekker seg til hele det anlegget hun er satt til å overvåke — hun kan ikke selv velge bort det dype bassenget", "Plikten gjelder bare det bassenget hun fysisk står ved, siden en handleplikt aldri kan rekke lenger enn til det stedet gjerningspersonen faktisk befinner seg", "Plikten gjelder hele anlegget og dessuten parkeringsplassen utenfor, siden en stilling gir et generelt ansvar for sikkerheten til alle som oppholder seg der", "Plikten gjelder bare når arbeidsavtalen uttrykkelig nevner den aktuelle faren, siden det er avtalen og ikke rollen som er det egentlige grunnlaget"],
      explanation: "Stillingen bærer plikten fordi rollen er innrettet nettopp på å avverge den typen fare som oppsto, og plikten er derfor avgrenset til rollens område — livredderen har plikt i bassenget, ikke på parkeringsplassen. Innenfor det området kan hun ikke selv avgrense den. Arbeidsavtalen understøtter plikten, men det er ryddigst å si at den primært følger av stillingen.",
    },
    {
      question: "Hva er en garantistilling, og hva løser begrepet ikke?",
      options: ["Det er samlebetegnelsen på å ha en pliktutløsende posisjon, men begrepet sier ingenting om rekkevidden — to personer kan begge være i garantistilling og likevel ha plikter av ulik styrke", "Det er en femte, ulovfestet kategori ved siden av de fire pliktgrunnlagene, og den fanger opp de tilfellene som ikke passer inn under noen av dem, typisk der flere personer sto like nær den utsatte", "Det er en betegnelse på at gjerningspersonen har garantert overfor noen at han skal gripe inn, og begrepet løser derfor ikke tilfeller uten et slikt løfte", "Det er navnet på det tredje vilkåret i læren, og begrepet sier dermed alt om hvor langt plikten rekker i det enkelte tilfellet man står overfor"],
      explanation: "Garantistilling er ett ord for det spørsmålet du faktisk skal svare på — var han i en pliktutløsende posisjon, og på hvilket grunnlag? Begrepet sier derimot ingenting om hvor langt plikten rekker, fordi grunnlagene er ulike i styrke. Det er ikke en femte kategori, og det forutsetter ikke noe løfte; både tilknytning, farevolding, avtale og stilling gir garantistilling.",
    },
    {
      question: "Hvordan avgjøres årsakssammenhengen når ansvaret bygger på en unnlatelse?",
      options: ["Ved en hypotetisk prøve der den pliktige handlingen tenkes inn: ville følgen uteblitt dersom han hadde gjort det han skulle?", "Ved den vanlige prøven der handlingen tenkes bort, siden en unnlatelse rettslig sett behandles på nøyaktig samme måte som en aktiv handling", "Ved en vurdering av hvor sannsynlig det var at følgen ville inntre dersom ingen grep inn, siden det er risikoen og ikke forløpet som er avgjørende", "Ved en vurdering av om følgen lå innenfor det pliktgrunnlaget var ment å verne mot, slik at årsaksspørsmålet i realiteten er et spørsmål om plikt"],
      explanation: "Prøven må snus. Ved en aktiv handling tenker man handlingen bort, men ved en unnlatelse er det ingenting å tenke bort — man må i stedet legge den pliktige handlingen inn og se hva som da ville skjedd. Vurderingen er hypotetisk og derfor alltid usikrere. Var den pliktige handlingen umulig å utføre, er det handleevnen som svikter, ikke årsakssammenhengen.",
    },
    {
      question: "Hva krever likestillingsvilkåret, og hvorfor er det nødvendig?",
      options: ["At unnlatelsen er like straffverdig som den aktive handlingen straffebudet beskriver — uten vilkåret ville ethvert handlingsdelikt kunne strekkes til å ramme passivitet", "At gjerningspersonen behandles likt med andre i tilsvarende situasjoner, slik at rettspraksis på området får den forutberegneligheten legalitetsprinsippet krever", "At unnlatelsen har hatt like alvorlige følger som en aktiv handling ville hatt, slik at det er skadeomfanget og ikke handlemåten som avgjør ansvaret", "At straffen for unnlatelsen utmåles likt med straffen for den tilsvarende aktive handlingen, slik at strafferammen i bestemmelsen kan brukes fullt ut"],
      explanation: "Vilkåret krever at unnlatelsen kan sidestilles med den aktive handlingen — at det å la være er like straffverdig som å gjøre det. Uten vilkåret ville et hvilket som helst handlingsdelikt kunne strekkes til å ramme passivitet, og ordlyden ville mistet all styrende kraft. I vurderingen teller hvor sterkt pliktgrunnlaget var, hvor lett det ville vært å gripe inn, hvor nær personen sto faren, og hvor alvorlig følgen var.",
    },
    {
      question: "Hva er forskjellen på handleplikt og handleevne?",
      options: ["Plikten sier hva han skulle ha gjort, evnen hva han kunne ha gjort — begge må være til stede, men de svikter av helt ulike grunner", "Plikten er det objektive vilkåret og evnen det subjektive, slik at plikten hører til gjerningsbeskrivelsen og evnen til skyldvurderingen i det tredje vilkåret", "Plikten gjelder i det uekte unnlatelsesdeliktet og evnen i det ekte, slik at de to aldri kommer opp i den samme drøftelsen av det samme forholdet, uansett hvilket pliktgrunnlag som er aktuelt", "Plikten avgjøres av bestemmelsens ordlyd og evnen av gjerningspersonens forklaring, slik at det bare er det første spørsmålet retten prøver selvstendig"],
      explanation: "Plikten sier hva han skulle, evnen hva han kunne. Handleevnen kan svikte ved fysisk umulighet, ved at inngrepet ville krevd betydelig egen risiko, eller ved at han ikke visste at situasjonen forelå. En livredder uten svømmeferdighet har plikt, men kan mangle evne til akkurat det inngrepet — hvilket ikke fritar henne fra å varsle. Begge spørsmålene kommer opp i begge sporene.",
    },
    {
      question: "Hva rammer straffeloven § 287, og hvem gjelder bestemmelsen for?",
      options: ["Den rammer med bot eller fengsel inntil seks måneder den som unnlater etter evne å hjelpe en person i åpenbar fare for å miste livet eller bli påført betydelig skade, og den gjelder alle", "Den rammer den som unnlater å hjelpe en person han står i et omsorgsforhold til, og den gjelder derfor bare den som er i garantistilling overfor den utsatte", "Den rammer den som unnlater å anmelde et alvorlig lovbrudd han har fått kunnskap om, og den gjelder enhver som holder det for sikkert eller mest sannsynlig at handlingen vil bli begått eller allerede er begått", "Den rammer den som ved sin passivitet har medvirket til at en annen kom til skade, og den gjelder den som hadde et særlig ansvar for at faren ikke slo ut"],
      explanation: "Hjelpeplikten i § 287 gjelder alle: det kreves ingen garantistilling, ingen tilknytning og ingen forutgående handling, bare at man er til stede og kan hjelpe. De to begrensningene ligger i «etter evne» og i at plikten ikke gjelder der den ikke kan oppfylles uten å utsette seg selv eller andre for særlig fare eller oppofrelse. Plikten til å avverge lovbrudd hører derimot i § 196, og passiv medvirkning er en helt annen lære.",
    },
    {
      question: "Hva skiller straffeloven § 196 fra straffeloven § 287?",
      options: ["§ 196 verner mot at et lovbrudd skjer og gjelder bare de lovbruddene bestemmelsen selv lister opp, mens § 287 verner mot at en person kommer til skade, uavhengig av om noen har gjort noe galt", "§ 196 verner mot at en person kommer til skade, mens § 287 verner mot at et lovbrudd blir begått — og bare den siste bestemmelsen forutsetter en gjerningsperson", "§ 196 er et uekte unnlatelsesdelikt fordi plikten må bygges på et grunnlag utenfor ordlyden, mens § 287 er et ekte unnlatelsesdelikt med plikten skrevet inn", "§ 196 gjelder bare offentlige tjenestepersoner med et særlig ansvar for å forebygge kriminalitet, mens § 287 gjelder enhver som er til stede når faren oppstår"],
      explanation: "Straffeloven § 196 pålegger en plikt til gjennom anmeldelse eller på annen måte å søke å avverge nærmere angitte alvorlige lovbrudd, og plikten inntrer først når man holder det for sikkert eller mest sannsynlig at handlingen vil bli eller er begått. § 287 verner personen mot skade, uavhengig av om noen har gjort noe galt — en drukningsulykke uten gjerningsperson utløser § 287, ikke § 196. Begge er ekte unnlatelsesdelikter.",
    },
    {
      question: "Kan et straffebud som retter seg mot en aktiv handling, overtres ved passivitet? Hvilket svar gir uttelling?",
      options: ["Ja, men bare på vilkår — og hele uttellingen ligger i å vise hvilke vilkår, ikke i selve ja-et", "Ja, uten videre — når følgen først har inntrådt, spiller det ingen rolle om den ble forårsaket ved en handling eller ved at gjerningspersonen lot være å gripe inn", "Nei — et straffebud som beskriver en aktiv handling, kan aldri anvendes på passivitet, og den som lot være å gripe inn, kan bare rammes av en egen unnlatelsesbestemmelse", "Det beror på strafferammen i den enkelte bestemmelsen"],
      explanation: "Svaret er ja, men bare på vilkår, og uttellingen ligger i det som kommer etter kommaet. Et rent ja ville gjort enhver som ikke grep inn, ansvarlig etter en bestemmelse skrevet for den som handler. Et rent nei ville betydd at den som har påtatt seg ansvaret for et lite barn, kunne la det sulte uten å rammes av annet enn den generelle hjelpeplikten med sin lave strafferamme. Strafferammen er uten betydning for spørsmålet.",
    },
    {
      question: "Hvilket straffbarhetsvilkår hører unnlatelsesspørsmålet under?",
      options: ["Det første — spørsmålet er om forholdet rammes av et straffebud, altså om bestemmelsen kan anses overtrådt ved passivitet", "Det andre — om passiviteten likevel var berettiget i situasjonen", "Det tredje — spørsmålet handler om hva gjerningspersonen visste og lot være å gjøre, og hører derfor til vurderingen av den subjektive skylden", "Det fjerde — spørsmålet gjelder om personen i det hele tatt kunne holdes ansvarlig for noe han ikke selv satte i gang ved en handling"],
      explanation: "Unnlatelsesspørsmålet hører under det første straffbarhetsvilkåret: rammes forholdet av et straffebud? Den vanligste plasseringsfeilen er å drøfte handleplikten under skyldvilkåret, fordi den «handler om personen». Handleplikten er en objektiv forutsetning for at gjerningsbeskrivelsen er overtrådt, ikke et spørsmål om hva han visste — skylden kommer som et selvstendig spørsmål etterpå.",
    },
    {
      question: "Du møter passivitet i et faktum. I hvilken rekkefølge stiller du kontrollspørsmålene?",
      options: ["Først om et ekte unnlatelsesdelikt rammer direkte, deretter om det aktuelle straffebudet er formulert som en aktiv handling slik at de tre vilkårene må prøves, og til slutt hvilket pliktgrunnlag som forankrer handleplikten", "Først hvilket av de fire pliktgrunnlagene som er aktuelt, deretter om unnlatelsen kan likestilles med en aktiv handling, og til slutt om noen egen unnlatelsesbestemmelse kunne rammet forholdet i stedet for den bestemmelsen du startet i", "Først om gjerningspersonen hadde forsett med hensyn til følgen, deretter om han hadde en plikt til å gripe inn, og til slutt om det fantes andre til stede som kunne handlet i hans sted", "Først om følgen kunne vært avverget, deretter om gjerningspersonen visste om faren, og til slutt om han hadde en avtale eller en stilling som ga ham et særlig ansvar for situasjonen"],
      explanation: "Rekkefølgen er slik fordi det ekte sporet er enklere og ofte overses: en besvarelse som bruker hele plassen på et uekte unnlatelsesansvar som ikke rekker fram, og aldri nevner straffeloven § 287, har oversett den bestemmelsen som faktisk rammer. Skyldspørsmålet kommer først etter at gjerningsbeskrivelsen er avklart, og spørsmålene er en rekkefølge for tenkningen — ikke en liste å skrive av i besvarelsen.",
    },
    {
      question: "Hva er hovedregelen i norsk rett om passivitet, og hvorfor er den verdt å slå fast innledningsvis?",
      options: ["At passivitet ikke er straffbar i seg selv — ansvaret er unntaket, og derfor kreves det alltid en særlig plikt i tillegg", "At passivitet er straffbar når den har ført til skade — ansvaret er hovedregelen, og unntaket gjelder den som ikke kunne handlet i situasjonen", "At passivitet bedømmes mildere enn en tilsvarende aktiv handling — utgangspunktet er ansvar, men med en lavere strafferamme enn bestemmelsen ellers gir", "At passivitet er straffbar for den som var nærmest til å gripe inn — ansvaret plasseres hos én person, og de øvrige til stede går dermed fri"],
      explanation: "Utgangspunktet er at ingen har plikt til å gripe inn i andres liv, og at ansvaret for passivitet er unntaket. Alle mennesker lar til enhver tid være å gjøre uendelig mange ting; skulle passivitet være straffbar i seg selv, ville alle vært ansvarlige for alt de ikke gjorde. En besvarelse som begynner med unntaket, snur bildet — utgangspunktet slås fast i én setning før vilkårene prøves.",
    },
    {
      question: "Hva gjelder for skyldkravet når ansvaret bygger på en unnlatelse?",
      options: ["Det gjelder fullt ut i tillegg, og forsett kreves med mindre annet er bestemt, jf. straffeloven § 21 — skylden må dekke at situasjonen forelå og at han hadde plikten", "Det er dekket av handleplikten, siden den som er i garantistilling, etter sakens natur er klar over både faren og sitt eget ansvar for å avverge den", "Det senkes til uaktsomhet, fordi et ansvar for passivitet ellers ville blitt for strengt i forhold til den som forårsaker den samme følgen aktivt", "Det bortfaller når de tre vilkårene for uekte unnlatelsesansvar er oppfylt, siden likestillingsvilkåret allerede har prøvd om forholdet er straffverdig nok"],
      explanation: "Unnlatelsen løser bare spørsmålet om gjerningsbeskrivelsen er overtrådt; skyldkravet gjelder i tillegg, og hovedregelen i straffeloven § 21 krever forsett med mindre annet er bestemt. At noen objektivt sett var i garantistilling, sier ingenting om hva han visste eller ville. Har han ikke oppfattet situasjonen i det hele tatt, blir spørsmålet om han burde ha oppfattet den — og da kreves et uaktsomhetsalternativ.",
    },
    {
      question: "Hvilket av de tre vilkårene demper spenningen mellom det uekte unnlatelsesansvaret og legalitetsprinsippet?",
      options: ["Likestillingsvilkåret — det begrenser rekkevidden til de tilfellene der unnlatelsen er like straffverdig som handlingen, og hindrer at ordlyden mister styrende kraft", "Handleplikten — den forutsetter et identifiserbart grunnlag, og et slikt grunnlag gir borgeren den samme forutberegneligheten som en lovtekst ville gitt henne på det samme området", "Årsakskravet — det krever at den pliktige handlingen ville avverget følgen, og et så strengt beviskrav gjør at ansvaret sjelden slår inn i praksis", "Ingen av dem — spenningen løses i stedet ved at læren er gammel og godt kjent, slik at forutberegneligheten er ivaretatt gjennom fast praksis"],
      explanation: "Likestillingsvilkåret er den innebygde skranken: det slipper bare gjennom de tilfellene der unnlatelsen er like straffverdig som handlingen, slik at ordlyden ikke mister sin styrende kraft. At læren er fast og gammel, løser derimot ingenting — alder gjør ikke en ulovfestet utvidelse av straffansvar til lovhjemmel. Handleplikten og årsakskravet er nødvendige vilkår, men det er likestillingen som møter selve legalitetsinnvendingen.",
    },
    {
      question: "Hvilket argument taler for at det uekte unnlatelsesansvaret er problematisk sett fra legalitetsprinsippets side?",
      options: ["At det er domstolene og teorien, ikke lovgiver, som har trukket grensene, og at utvidelsen dessuten virker i gjerningspersonens disfavør — nettopp der prinsippet er strengest", "At ansvaret bare kan bygges på straffebud med høy strafferamme, slik at de mindre alvorlige forholdene blir stående uten noen bestemmelse som rammer dem, selv om unnlatelsen der kan være like klanderverdig", "At lovgiver aldri har gitt rene unnlatelsesbestemmelser, slik at hele læren mangler ethvert holdepunkt i lovverket å bygge en analogi på", "At ansvaret krever tre kumulative vilkår, og at et så sammensatt vurderingstema gjør regelen vanskelig for domstolene å anvende ensartet"],
      explanation: "Innvendingen er at grensene er trukket av domstolene og teorien, mens legalitetsprinsippet nettopp er begrunnet i at lovgiver skal bestemme hva som er straffbart — og at utvidelsen virker i gjerningspersonens disfavør. De fire pliktgrunnlagene har dessuten uskarpe konturer. Lovgiver har derimot gitt rene unnlatelsesbestemmelser, blant annet straffeloven §§ 196 og 287, og det er nettopp et argument på den andre siden.",
    },
    {
      question: "Hva er sikkert og hva er omstridt når det gjelder rekkevidden av det uekte unnlatelsesansvaret?",
      options: ["Sikkert er at læren finnes, at de tre vilkårene gjelder, og at kjernetilfellene er innenfor; omstridt er randsonen — hvor nær en relasjon må være, og hvilke straffebud som i det hele tatt kan overtres ved passivitet", "Sikkert er at alle straffebud kan overtres ved passivitet; omstridt er bare hvilken strafferamme som skal legges til grunn ved utmålingen, og om det bør gjøres fradrag fordi gjerningspersonen ikke handlet aktivt", "Sikkert er at bare følgedelikter kan overtres ved passivitet; omstridt er om de tre vilkårene i det hele tatt gjelder når pliktgrunnlaget er en stilling", "Sikkert er at læren er ulovfestet og derfor ikke kan anvendes; omstridt er om lovgiver bør innføre en tilsvarende regel i en egen lovbestemmelse"],
      explanation: "Kjernen er sikker: at læren finnes, at de tre vilkårene gjelder, og at foreldre overfor små barn og den som selv skapte faren, er innenfor. Randsonen er usikker. Fakultetets karakterkriterier fremhever evnen til å skille sikkert fra tvilsomt, og en besvarelse som fremstiller hele læren som avklart, viser mindre oversikt enn en som sier hvor kjernen slutter.",
    },
    {
      question: "Hvordan brukes ordene «passivitet» og «unnlatelse» presist i denne fremstillingen?",
      options: ["Passivitet er det faktiske fraværet av handling, mens unnlatelse er den passiviteten som er rettslig relevant fordi det forelå en plikt til å handle", "Unnlatelse er det faktiske fraværet av handling, mens passivitet er den formen som rammes av et ekte unnlatelsesdelikt med plikten skrevet inn i ordlyden", "Ordene er faste lovfestede termer med hvert sitt definerte innhold, og straffeloven bruker dem konsekvent om hver sin form for manglende inngripen", "Passivitet brukes om den som ikke oppdaget faren, mens unnlatelse brukes om den som oppdaget den og likevel valgte å la være å gripe inn i situasjonen"],
      explanation: "Skillet er ikke en fast lovfestet terminologi, men det gjør fremstillingen presis: enhver unnlatelse er passivitet, men ikke enhver passivitet er en unnlatelse i lovens forstand. Om gjerningspersonen oppdaget faren eller ikke, er derimot et skyldspørsmål — det avgjør om vi står overfor forsett eller uaktsomhet, ikke om passiviteten er rettslig relevant.",
    },
  ],
  'juroff1500-2-3': [
    {
      question: "Hva går den alminnelige rettsstridsreservasjonen ut på?",
      options: ["At et straffebud ikke rammer ethvert forhold som språklig sett dekkes av ordlyden, når forholdet ikke er av den art bestemmelsen tar sikte på", "At et straffebud ikke rammer den som handlet i en nødssituasjon, fordi handlingen da er berettiget selv om ordlyden språklig sett dekker den", "At et straffebud kan anvendes på forhold ordlyden ikke dekker, når hensynene bak bestemmelsen slår til med samme styrke som i kjernetilfellene", "At et straffebud må tolkes strengt etter ordlyden, slik at ethvert forhold som passer språklig, rammes uten hensyn til hva bestemmelsen tar sikte på"],
      explanation: "Reservasjonen er den ulovfestede regelen om at et straffebud ikke rammer alt som språklig sett dekkes av ordlyden. Å bruke bestemmelsen på forhold ordlyden ikke dekker, er derimot analogisk tolkning — speilbildet, og nettopp det legalitetsprinsippet setter en skranke mot. At handlingen var berettiget i en nødssituasjon, er en straffrihetsgrunn, som virker et helt annet sted i vurderingen.",
    },
    {
      question: "Hvorfor kalles reservasjonen «alminnelig»?",
      options: ["Fordi den gjelder for straffebud generelt, uavhengig av om lovteksten selv inneholder et uttrykkelig forbehold i ordlyden", "Fordi den gjelder for alle rettsområder og ikke bare i strafferetten, og derfor er en alminnelig regel om tolkning av lovtekst i norsk rett", "Fordi den bygger på det alminnelige rettferdighetssynet i befolkningen, og fordi domstolene derfor legger vekt på hva folk flest oppfatter som straffverdig", "Fordi den anvendes i de alminnelige domstolene og ikke i særdomstolene, slik at rekkevidden av den varierer med hvilket organ som behandler saken"],
      explanation: "Reservasjonen gjelder straffebud generelt. Enkelte bestemmelser har et uttrykkelig forbehold i ordlyden — ord som «uberettiget», «ulovlig» eller «rettsstridig» — men reservasjonen gjelder også der slike ord mangler. Den bygger på bestemmelsens formål og på reelle hensyn, ikke på en alminnelig rimelighetsoppfatning i befolkningen, og den er ikke avhengig av hvilken domstol som behandler saken.",
    },
    {
      question: "I hvilket av de fire straffbarhetsvilkårene virker rettsstridsreservasjonen, og hvorfor der?",
      options: ["I det første — den er en tolkningsregel og sier hva bestemmelsen betyr, altså om handlingen i det hele tatt er omfattet av straffebudet", "I det andre — den gjør en handling som er dekket av gjerningsbeskrivelsen, lovlig i den konkrete situasjonen den ble foretatt i", "I det tredje — den gjelder gjerningspersonens oppfatning av at handlingen var akseptabel, og fjerner derfor forsettet om overtredelsen", "I det fjerde — den gjelder om gjerningspersonen i det hele tatt kan holdes ansvarlig for handlinger utført innenfor en yrkesutøvelse"],
      explanation: "Reservasjonen virker i det første vilkåret, på tolkningsstadiet, fordi den sier hva bestemmelsen betyr og dermed om handlingen er omfattet. Straffrihetsgrunnene hører i det andre vilkåret og forutsetter at handlingen er omfattet. Reservasjonen er dessuten et objektivt spørsmål om handlingen: at forholdet ikke er rettsstridig, avgjør saken uansett hva gjerningspersonen selv mente.",
    },
    {
      question: "Hva er den avgjørende forskjellen på rettsstridsreservasjonen og en straffrihetsgrunn?",
      options: ["Reservasjonen sier at handlingen aldri var omfattet av bestemmelsen, mens straffrihetsgrunnen sier at den er omfattet, men likevel var lovlig i denne situasjonen", "Reservasjonen sier at handlingen var omfattet, men likevel lovlig, mens straffrihetsgrunnen sier at handlingen aldri var omfattet av bestemmelsen i det hele tatt", "Reservasjonen er lovfestet i straffeloven § 14, mens straffrihetsgrunnene nødverge og nødrett er ulovfestede og bygger på reelle hensyn og på rettspraksis", "Reservasjonen krever at det forelå en konkret faresituasjon, mens straffrihetsgrunnen kan anvendes uten at noe særlig hadde skjedd i den aktuelle situasjonen"],
      explanation: "Reservasjonen sier at handlingen aldri var omfattet; straffrihetsgrunnen — nødverge etter straffeloven § 18 eller nødrett etter § 17 — sier at den er omfattet, men likevel lovlig. Forskjellen er hvor i vurderingen svaret ligger, og vilkårene er ulike: en straffrihetsgrunn krever noe konkret i situasjonen, et angrep eller en fare, mens reservasjonen krever at forholdet er av en annen art enn det bestemmelsen verner mot.",
    },
    {
      question: "Et straffebud bruker ord som «uberettiget», «ulovlig» eller «rettsstridig». Hva betyr det?",
      options: ["At forbeholdet er skrevet inn i teksten og dermed er et objektivt vilkår i gjerningsbeskrivelsen, som må drøftes og som skylden må dekke", "At bestemmelsen ikke kan rammes av den ulovfestede reservasjonen, siden lovgiver har ment å uttømme spørsmålet gjennom sin egen formulering av forbeholdet", "At forbeholdet er en henvisning til straffrihetsgrunnene, slik at nødverge og nødrett må drøftes allerede i det første straffbarhetsvilkåret", "At bestemmelsen bare rammer forhold som strider mot en annen lovbestemmelse, slik at ordet peker ut av straffebudet og over i den øvrige lovgivningen"],
      explanation: "Der forbeholdet står i teksten, er reservasjonen ikke ulovfestet — den er et vilkår i gjerningsbeskrivelsen, som må drøftes og som skylden må dekke etter dekningsprinsippet. Forskjellen fra den ulovfestede varianten er at du får et ord å tolke; uten et slikt ord har du bare bestemmelsens formål og de hensynene den verner, og begrunnelseskravet er derfor strengere.",
    },
    {
      question: "Hva er forholdet mellom rettsstridsreservasjonen og innskrenkende tolkning?",
      options: ["Reservasjonen er i sin form en innskrenkende tolkning, men med en egen begrunnelse — den bygger på at bestemmelsen ikke tar sikte på forhold av denne arten, ikke på konkrete rettskilder", "Reservasjonen er det motsatte av innskrenkende tolkning, siden den lar bestemmelsen ramme mer enn ordlyden isolert sett dekker når hensynene tilsier det og forholdet er like straffverdig som kjernetilfellene", "Reservasjonen og innskrenkende tolkning er to navn på nøyaktig det samme, og det er derfor likegyldig hvilket av uttrykkene du bruker i en besvarelse", "Reservasjonen virker etter at bestemmelsen er ferdig tolket, mens innskrenkende tolkning er et av de stegene som inngår i selve tolkningen av ordlyden"],
      explanation: "Begge virker på tolkningsstadiet, og begge fører til at handlingen aldri var omfattet — men begrunnelsene skiller seg. Ved vanlig innskrenkende tolkning bygger du på konkrete rettskilder som viser at ordlyden favner for vidt; reservasjonen bygger på den mer generelle betraktningen at bestemmelsen ikke tar sikte på forhold av denne arten. Det presise er derfor at den er en form for innskrenkende tolkning med egen begrunnelse.",
    },
    {
      question: "Hvorfor støter ikke rettsstridsreservasjonen mot legalitetsprinsippet, selv om den er ulovfestet?",
      options: ["Fordi den alltid virker til gjerningspersonens gunst — den innsnevrer straffansvaret og utvider det aldri, og forutberegneligheten er dermed ikke krenket", "Fordi den er så innarbeidet i praksis at borgeren må forventes å kjenne den, og fast og gammel praksis oppfyller derfor kravet til hjemmel i lov", "Fordi legalitetsprinsippet bare gjelder for straffebud i straffeloven og ikke for bestemmelser i spesiallovgivningen, der reservasjonen er praktisk viktigst", "Fordi den bare brukes der forarbeidene uttrykkelig åpner for det, slik at innsnevringen i realiteten hviler på lovgivers eget standpunkt i saken"],
      explanation: "Retningen redder den: reservasjonen innsnevrer straffansvaret og utvider det aldri. Legalitetsprinsippet verner borgeren mot å bli straffet for noe hun ikke kunne forutse; det verner ikke staten mot at en bestemmelse tolkes snevrere enn ordlyden. Derfor kan reservasjonen bygges på formål og reelle hensyn uten at man må finne en lovhjemmel for selve innsnevringen — og alder alene gjør ingen ulovfestet regel til lov.",
    },
    {
      question: "Hvorfor behandles analogisk tolkning og rettsstridsreservasjonen så ulikt, når begge endrer rekkevidden av et straffebud?",
      options: ["Fordi analogi i gjerningspersonens disfavør utvider ansvaret ut over det borgeren kunne lese seg til, mens reservasjonen innsnevrer det — det er retningen, ikke teknikken, som er avgjørende", "Fordi analogi bygger på reelle hensyn mens reservasjonen bygger på ordlyden, og ordlyden er den tyngste rettskildefaktoren i strafferetten, slik at en tolkning forankret i den alltid går foran en tolkning forankret i hensyn", "Fordi analogi er forbudt i all norsk rett, mens reservasjonen er tillatt fordi den er utviklet av Høyesterett og ikke av den juridiske teorien", "Fordi analogi brukes på handlinger og reservasjonen på unnlatelser, og fordi de to deliktstypene derfor følger hver sine tolkningsregler"],
      explanation: "Analogi strekker bestemmelsen til forhold ordlyden ikke dekker, og går derfor i disfavør — det er nettopp den formen legalitetsprinsippet setter en skranke mot. Reservasjonen er speilbildet og møter ingen tilsvarende skranke. Å sette de to opp mot hverandre i én setning viser at du har forstått at det ikke er tolkningsteknikken som er avgjørende, men retningen den virker i.",
    },
    {
      question: "En brytetrener legger på et smertefullt grep som ledd i ordinær teknikkinstruksjon. Hva er begrunnelsen for at forholdet faller utenfor en bestemmelse om å påføre en annen smerte?",
      options: ["At idrettsutøvelse innenfor sportens egne regler ikke er det bestemmelsen tar sikte på — men reservasjonen verner aktiviteten, ikke enhver handling som skjer under den", "At utøveren har samtykket til alle grep som kan forekomme under trening, og at samtykket derfor dekker enhver skade som måtte oppstå i løpet av økten, uansett hvor alvorlig den er", "At det ville virke urimelig å straffe en trener som gjør jobben sin, og at domstolene derfor lar slike forhold gå upåtalt selv om ordlyden dekker dem", "At smerten var forbigående og ubetydelig, og at bestemmelsen etter en tolkning bare rammer den smerten som setter varige spor hos den fornærmede"],
      explanation: "Begrunnelsen er at aktiviteten er alminnelig akseptert og at grepet holdt seg innenfor rammene for den. Går treneren langt ut over det teknikkinstruksjonen krever, faller forholdet inn igjen — reservasjonen verner aktiviteten, ikke enhver handling som skjer under den. Samtykket er her mer diffust, siden utøveren neppe har samtykket til akkurat dette grepet, og «det virker urimelig å straffe» er ikke et rettskildeargument.",
    },
    {
      question: "Hvilket kontrollspørsmål skiller reservasjonen fra samtykke?",
      options: ["Ville forholdet fortsatt falle utenfor bestemmelsen dersom den fornærmede uttrykkelig hadde motsatt seg? Er svaret ja, er det reservasjonen som bærer", "Har den fornærmede fått tilstrekkelig informasjon om inngrepet på forhånd? Er svaret ja, er det reservasjonen som bærer, og samtykket kommer bare i tillegg", "Var handlingen utført av en yrkesutøver med formell kompetanse på området? Er svaret ja, er det samtykket som bærer, og reservasjonen får ingen betydning", "Ville den fornærmede lidd større skade uten inngrepet enn med det? Er svaret ja, er det reservasjonen som bærer, siden handlingen da var til hennes eget beste"],
      explanation: "Kontrollspørsmålet er om forholdet fortsatt ville falle utenfor dersom den fornærmede uttrykkelig hadde motsatt seg. Er svaret ja, bærer reservasjonen; er svaret nei, er det samtykket. Sondringen er verdt uttelling fordi de to svikter ulikt: samtykke har grenser og rekker ikke like langt ved alvorlig skade, mens reservasjonens grenser er knyttet til hva aktiviteten rommer. Samtykket kommer fra den enkelte, aksepten fra rettsordenen.",
    },
    {
      question: "Hva er rettskildegrunnlaget for den alminnelige rettsstridsreservasjonen?",
      options: ["Den er ulovfestet, utviklet i rettspraksis og teori, og hviler på en kombinasjon av bestemmelsenes formål og reelle hensyn", "Den er lovfestet i straffelovens alminnelige del, og de enkelte straffebudene viser tilbake til den gjennom ord som «uberettiget» og «rettsstridig»", "Den følger av forarbeidene til straffeloven 2005, der lovgiver uttrykkelig påla domstolene å innsnevre straffebud som favner for vidt etter ordlyden", "Den bygger på internasjonale menneskerettsforpliktelser og på praksis fra Strasbourg"],
      explanation: "Reservasjonen er ulovfestet og utviklet i rettspraksis og teori, med bestemmelsenes formål og reelle hensyn som grunnlag. Det som gjør grunnlaget akseptabelt, er at den virker til gunst og bygger på tolkning av bestemmelsen selv. At den er omstridt, henger sammen med at rekkevidden er uklar og at det er domstolene som avgjør hva et straffebud «tar sikte på».",
    },
    {
      question: "Hva er en holdbar begrunnelse når du påberoper deg reservasjonen i en besvarelse?",
      options: ["En setning om hvilken interesse bestemmelsen verner, og en setning om hvorfor dette forholdet ligger utenfor den interessen", "En setning om at det ville virke urimelig å straffe i et tilfelle som dette, og en setning om at ingen ville anmeldt forholdet i praksis", "En setning om at handlingen er vanlig og utbredt på området, og en setning om at en straffereaksjon derfor ville ramme svært mange personer", "En setning om at ordlyden er uklar, og en setning om at tvil skal komme gjerningspersonen til gode"],
      explanation: "Begrunnelsen skal si hva bestemmelsen tar sikte på, og hvorfor dette forholdet ligger utenfor. At det virker urimelig å straffe, at ingen ville anmeldt, eller at handlingen er vanlig, kan være riktige observasjoner, men ingen av dem sier noe om bestemmelsens rekkevidde. Kravet er strengt nettopp fordi reservasjonen er ulovfestet og lett kan bli et sted å plassere alt man ikke vil straffe.",
    },
    {
      question: "Forarbeidene til et straffebud viser at lovgiver har vurdert nettopp denne typen forhold og likevel valgt å la bestemmelsen ramme dem. Hva betyr det for reservasjonen?",
      options: ["Det er da ikke rom for reservasjonen, og en besvarelse som bruker den likevel, har oversett en tyngre rettskilde", "Det er uten betydning, siden reservasjonen er ulovfestet og derfor ikke kan settes til side av forarbeider til den enkelte bestemmelsen", "Det styrker reservasjonen, siden forarbeidene viser at lovgiver har sett problemet og overlatt den nærmere avgrensningen til domstolene", "Det betyr at forbeholdet må anses innfortolket i ordlyden, slik at spørsmålet i stedet blir et vilkår skylden må dekke i den konkrete saken"],
      explanation: "Reservasjonen bygger på en antakelse om at lovgiver ikke mente å ramme forhold av denne arten — at ordlyden er generell fordi lovgivning må være det, ikke fordi hvert tenkelig tilfelle er vurdert. Viser forarbeidene at antakelsen ikke holder, er det ikke rom for reservasjonen. Det viser samtidig at den ikke er et fritt skjønn, men en tolkningsregel som viker for konkrete holdepunkter.",
    },
    {
      question: "Hva betyr det at et forhold ikke er «rettsstridig», når ordlyden i straffebudet passer på det?",
      options: ["At forholdet ikke er av den arten bestemmelsen er skrevet for å ramme — ordlyden er ikke siste ord, og noe kan passe språklig uten å være rettsstridig", "At forholdet er lovlig fordi gjerningspersonen hadde en berettiget grunn til å handle slik han gjorde i den situasjonen han sto i", "At forholdet er straffbart, men at retten kan la være å idømme straff fordi særlige grunner taler for at reaksjonen bør falle bort", "At gjerningspersonen ikke visste at handlingen var forbudt, og at kravet til subjektiv skyld derfor ikke er oppfylt i den konkrete saken"],
      explanation: "Rettsstrid betyr her å være av den arten bestemmelsen er skrevet for å ramme — det klanderverdige, det bestemmelsen verner mot. Ordet ser ut som et synonym for «ulovlig», men poenget er nettopp at ordlyden ikke er siste ord. Rettsstrid er dessuten et objektivt spørsmål om handlingen; at gjerningspersonen ikke visste at handlingen var forbudt, er et helt annet spørsmål og hører til skyldsiden.",
    },
    {
      question: "Hvor i besvarelsen skal reservasjonen drøftes, og hva er den vanligste plasseringsfeilen?",
      options: ["Inne i det første straffbarhetsvilkåret, etter at ordlyden er lest og før konklusjonen på om handlingen rammes — feilen er å drøfte den sammen med nødverge og nødrett, som om den var en tredje straffrihetsgrunn", "Til slutt i besvarelsen, etter at alle fire straffbarhetsvilkårene er gjennomgått — feilen er å ta den opp allerede i tolkningen av ordlyden, før det er avklart om handlingen i det hele tatt er dekket", "I innledningen, som en generell reservasjon mot at ordlyden leses bokstavelig — feilen er å knytte den til et bestemt vilkår, siden den gjelder hele bestemmelsen under ett", "I skyldsdrøftelsen, sammen med spørsmålet om gjerningspersonen forsto rekkevidden av handlingen — feilen er å behandle den som et objektivt spørsmål om selve handlingen"],
      explanation: "Rekkefølgen er: finn bestemmelsen, les gjerningsbeskrivelsen, tolk de uklare ordene, vurder om forholdet likevel faller utenfor det bestemmelsen tar sikte på, konkluder på første vilkår, og gå deretter videre til straffrihetsgrunnene. Drøftes reservasjonen sammen med nødverge og nødrett, fremstår besvarelsen som om handlingen er dekket av bestemmelsen — hvilket er det motsatte av reservasjonens poeng.",
    },
    {
      question: "Hva er sikkert og hva er tvilsomt når det gjelder rettsstridsreservasjonen?",
      options: ["At reservasjonen finnes, er sikkert; hvor langt den rekker i det enkelte tilfellet, er tvilsomt — og det å skille sikkert fra tvilsomt er et eksplisitt karakterkriterium", "At reservasjonen finnes, er tvilsomt, siden den er ulovfestet; hvor langt den rekker, er derimot avklart gjennom en fast og entydig rettspraksis på området de siste tiårene", "Både at den finnes og hvor langt den rekker, er sikkert, siden lovgiver har skrevet forbeholdet inn i de bestemmelsene der det er behov for det", "Både at den finnes og hvor langt den rekker, er tvilsomt, og en besvarelse bør derfor unngå å bygge på reservasjonen i det hele tatt"],
      explanation: "At regelen finnes, er sikkert; hvor langt den rekker i det enkelte tilfellet, er ikke det. Å si dette eksplisitt er en presisering av hvor sikker regelen er, og fakultetets karakterkriterier fremhever nettopp evnen til å skille sikkert fra tvilsomt. At lovgiver har skrevet forbeholdet inn i enkelte bestemmelser, avklarer bare disse — den ulovfestede varianten gjelder fortsatt for de øvrige.",
    },
  ],
  'juroff1500-3-1': [
    {
      question: "Hva går skyldprinsippet ut på, og hva begrunnes det med?",
      options: ["At ingen skal straffes uten å kunne bebreides — straff er en fordømmelse, og en fordømmelse gir bare mening overfor den som kunne handlet annerledes", "At ingen skal straffes uten at det er ført bevis for at handlingen faktisk fant sted, siden bevistvil etter norsk rett alltid skal komme tiltalte til gode", "At ingen skal straffes strengere enn det handlingen fortjener, siden reaksjonen må stå i et rimelig forhold til hvor alvorlig lovbruddet var", "At ingen skal straffes for noe en annen har gjort, siden strafferettslig ansvar er personlig og ikke kan overføres mellom flere involverte"],
      explanation: "Skyldprinsippet er at det ikke er nok at noen forårsaket en skade; det må være noe å laste vedkommende for. Begrunnelsen er dobbel: straff innebærer en fordømmelse som bare gir mening overfor den som kunne handlet annerledes, og straffetrusselen virker ikke på den som verken visste eller kunne visst. Beviskravet og forholdsmessigheten er riktige regler, men de svarer på andre spørsmål enn skyldprinsippet.",
    },
    {
      question: "Hva sier hovedregelen om skyldform i straffeloven § 21?",
      options: ["At straffelovgivningen bare rammer forsettlige lovbrudd med mindre annet er bestemt — forsett er normalkravet, og uaktsomhet er unntaket", "At straffelovgivningen rammer både forsettlige og uaktsomme lovbrudd med mindre straffebudet uttrykkelig begrenser seg til den ene av skyldformene", "At straffelovgivningen bare rammer uaktsomme lovbrudd der følgen er alvorlig, mens forsettlige lovbrudd rammes uansett hvor stor skaden ble", "At straffelovgivningen rammer det gjerningspersonen burde ha forstått, slik at kravet til skyld fastlegges ut fra hva en alminnelig person ville sett"],
      explanation: "Straffeloven § 21 gjør forsett til normalkravet: uaktsomhet er bare straffbart der straffebudet sier det. Regelen er særlig nyttig fordi den gir deg et svar der bestemmelsen tier — mange leter forgjeves etter et skyldkrav som ikke står i selve straffebudet. Hva gjerningspersonen burde ha forstått, er uaktsomhetens målestokk i § 23, ikke innholdet i hovedregelen.",
    },
    {
      question: "Hva skal til for at uaktsomhet er straffbart?",
      options: ["At straffebudet selv bestemmer det — typisk ved at ordet «uaktsomt» står i gjerningsbeskrivelsen, eller ved et eget ledd eller punktum om uaktsom overtredelse", "At følgen av handlingen ble alvorlig, siden alvorlige følger etter fast praksis utløser ansvar også der gjerningspersonen ikke hadde forsett om dem", "At gjerningspersonen har opptrådt på et område med høy risiko, siden aktsomhetsnormen der er så streng at ethvert avvik gir straffansvar", "At forsett ikke kan bevises, siden uaktsomhet da trer inn som en subsidiær skyldform retten kan bygge på i stedet for den strengere formen"],
      explanation: "Uaktsomhet må være bestemt i straffebudet, jf. hovedregelen i straffeloven § 21. Det skjer ved at ordet «uaktsomt» står i gjerningsbeskrivelsen, ved et eget ledd eller punktum om uaktsom overtredelse, ofte med lavere reaksjon, eller ved at bestemmelsen krever grov uaktsomhet. At forsett ikke kan bevises, gir ikke i seg selv adgang til å bruke en lavere skyldform — mangler uaktsomhetsalternativet, faller ansvaret bort.",
    },
    {
      question: "Hva krever dekningsprinsippet?",
      options: ["At skylden dekker hele gjerningsbeskrivelsen, altså hvert enkelt element i straffebudet, og at den gjør det på handlingstidspunktet", "At skylden dekker hovedtrekkene i det som skjedde, slik at en gjerningsperson som forsto handlingens karakter, også anses å ha forsett om detaljene", "At skylden dekker både gjerningsbeskrivelsen og det forhold at handlingen var ulovlig, siden ansvaret ellers ville rammet den som ikke kjente regelen", "At skylden dekker den følgen som faktisk inntraff, mens omstendighetene rundt handlingen bedømmes objektivt og uavhengig av hva han visste"],
      explanation: "Prinsippet krever skyld for hvert enkelt element — hver omstendighet, hver følge, hvert kjennetegn ved gjenstanden eller personen — og på handlingstidspunktet. Det er en elementvis prøve, ikke en samlet vurdering av hvor klanderverdig personen var. Kunnskap om loven er derimot ikke en del av forsettet, jf. straffeloven § 22 annet ledd, og både omstendigheter og følger må være dekket.",
    },
    {
      question: "Hvorfor bedømmes skylden ut fra situasjonen på handlingstidspunktet?",
      options: ["Fordi senere kunnskap ikke teller: at han i ettertid forsto hva som hadde skjedd, gir ham ikke forsett, og at han senere angret, fjerner ikke et forsett han hadde", "Fordi følgen ofte inntrer lenge etter handlingen, og fordi det da ville vært umulig å fastslå hva gjerningspersonen mente om noe som ennå ikke var skjedd", "Fordi bevisene er sterkest på handlingstidspunktet, og fordi en vurdering av hva han tenkte senere ville hvilt på hans egen forklaring alene", "Fordi straffansvaret foreldes fra handlingstidspunktet, og fordi skyldvurderingen derfor må knyttes til det samme tidspunktet som fristen løper fra"],
      explanation: "Regelen utelukker at senere kunnskap teller, og den virker begge veier: verken etterfølgende innsikt eller etterfølgende anger endrer skylden slik den var da han handlet. Regelen har praktisk betydning ved følgedelikter der følgen inntrer lenge etterpå, og ved vedvarende unnlatelser, der du må bestemme hvilket tidspunkt du vurderer skylden på. Foreldelse er et helt annet spørsmål.",
    },
    {
      question: "Hva er et element i en gjerningsbeskrivelse, og hvordan finner du elementene?",
      options: ["Et element er en enkeltstående bestanddel — en handling, en omstendighet, et kjennetegn eller en følge — og du finner dem ved å lese bestemmelsen langsomt og sette strek under hvert ledd som kan bestrides for seg", "Et element er hvert enkelt ord i bestemmelsen, og du finner dem ved å gå gjennom ordlyden ord for ord og tolke alle sammen i den rekkefølgen de står", "Et element er de vilkårene som er omtvistet i den konkrete saken, og du finner dem ved å lese faktum først og deretter lete etter de opplysningene som skaper tvil om hvordan bestemmelsen skal forstås på nettopp det punktet partene er uenige om", "Et element er hvert enkelt ledd og punktum i bestemmelsen, og du finner dem ved å telle setningene, siden hvert punktum bærer sitt eget selvstendige vilkår"],
      explanation: "Et element er en bestanddel av beskrivelsen som kan bestrides for seg. I setningen «den som tar en gjenstand som tilhører en annen» er det minst tre: at det er en gjenstand, at den tilhører en annen, og at den ble tatt. Oppdelingen gjør at du kan si presist hvor skylden svikter. Ikke ethvert ord er et element, og elementene finnes i bestemmelsen — ikke i faktum.",
    },
    {
      question: "Skylden dekker fire av fem elementer i gjerningsbeskrivelsen, men ikke det femte. Hva blir resultatet?",
      options: ["Forsettskravet svikter for bestemmelsen som helhet, men han kan fortsatt rammes av et uaktsomhetsalternativ dersom straffebudet har et, og uvitenheten selv var uaktsom", "Forsettskravet er oppfylt, siden en samlet vurdering av hvor klanderverdig han var, må bygge på det store flertallet av elementene i beskrivelsen og ikke kan stå og falle med ett enkelt av dem", "Forsettskravet svikter bare for det ene elementet, slik at bestemmelsen anvendes på de fire øvrige og reaksjonen settes ned tilsvarende", "Forsettskravet svikter, og ansvaret faller uansett bort, siden en skyldform ikke kan byttes ut med en annen etter at forsettet er utelukket"],
      explanation: "Dekningsprinsippet er en elementvis prøve, og resultatet kan bli at skylden dekker fire av fem elementer og at ansvaret likevel faller. Men saken er ikke nødvendigvis over: har straffebudet et uaktsomhetsalternativ, blir neste spørsmål om uvitenheten selv var uaktsom, jf. straffeloven § 25. En bestemmelse kan ikke anvendes delvis, og skyld er ikke en helhetsvurdering av klanderverdighet.",
    },
    {
      question: "Hva er forskjellen på skyld og skyldevne?",
      options: ["Skyld gjelder den konkrete handlingen — hva visste og ville han denne gangen — mens skyldevne gjelder personen og om han i det hele tatt kan bære strafferettslig ansvar, jf. straffeloven § 20", "Skyld gjelder personens evne til å forstå rekkevidden av handlinger i sin alminnelighet, mens skyldevne gjelder hva han faktisk forsto i den konkrete situasjonen, altså hva han visste og ville da han handlet", "Skyld gjelder de forsettlige lovbruddene, mens skyldevne gjelder de uaktsomme, siden det bare er ved uaktsomhet man spør hva personen hadde forutsetninger for", "Skyld og skyldevne er to navn på det samme vilkåret, og valget mellom uttrykkene beror på om straffebudet krever forsett eller uaktsomhet i det enkelte tilfellet"],
      explanation: "De to er logisk uavhengige: en fjortenåring kan ha fullt forsett om alt som skjedde og likevel ikke straffes, fordi lavaldersgrensen er absolutt, og en voksen, tilregnelig person kan mangle forsett fordi han tok feil av et element. Skyld er det tredje straffbarhetsvilkåret, skyldevne det fjerde. Å skrive at noen «manglet skyld fordi han var psykotisk», blander to spørsmål materialet tester hver for seg.",
    },
    {
      question: "Hva menes med objektivt straffansvar, og hva gjelder i norsk rett?",
      options: ["Det er ansvar uten krav om skyld, og noe alminnelig objektivt straffansvar finnes ikke i norsk rett — skyldkravet gjelder som utgangspunkt for alle elementer", "Det er ansvar for de objektive vilkårene i gjerningsbeskrivelsen, og det gjelder fullt ut i norsk rett, mens de subjektive vilkårene bare påvirker utmålingen", "Det er ansvar som bygger på en objektiv aktsomhetsnorm, og det gjelder i norsk rett overalt der straffebudet åpner for uaktsom overtredelse av bestemmelsen", "Det er ansvar for foretak i motsetning til enkeltpersoner, og det gjelder i norsk rett bare der lovbruddet er begått på vegne av en virksomhet"],
      explanation: "Objektivt straffansvar er ansvar uten krav om skyld, og noe slikt alminnelig ansvar har vi ikke. Begrepet er likevel verdt å kunne som kontrast: et rent objektivt ansvar ville rammet den uskyldige butikkeieren som uten å vite det solgte en forfalsket vare, og det ville fjernet fordømmelsen som skiller straff fra en avgift. Uaktsomhet er ikke objektivt ansvar — kravet om bebreidelse i straffeloven § 23 er nettopp et skyldkrav.",
    },
    {
      question: "Hva regulerer straffeloven § 24 om uforsettlig følge?",
      options: ["At en følge gjerningspersonen ikke hadde forsett om, inngår i vurderingen av om lovbruddet er grovt, dersom han har opptrådt uaktsomt med hensyn til følgen eller unnlatt etter evne å avverge den", "At en følge gjerningspersonen ikke hadde forsett om, uten videre inngår i vurderingen av om lovbruddet er grovt, siden ansvaret for følger er objektivt i norsk rett og ikke forutsetter noen form for skyld med hensyn til den følgen som inntraff", "At en følge gjerningspersonen ikke hadde forsett om, aldri kan tillegges vekt, slik at bare de følgene forsettet dekket, får betydning for bedømmelsen", "At en følge gjerningspersonen ikke hadde forsett om, gir et selvstendig straffansvar ved siden av hovedforholdet, slik at de to bedømmes i konkurrens"],
      explanation: "Bestemmelsen lar en alvorlig følge få betydning for grovheten uten å kreve forsett om den, men setter et uaktsomhetskrav som nedre grense — ansvaret er dermed ikke objektivt. Regelen skiller seg fra dekningsprinsippet ved at den gjelder følger som ligger utenfor det forsettet dekker, og som bare får betydning for grovhetsvurderingen, ikke for om bestemmelsen i det hele tatt er overtrådt.",
    },
    {
      question: "Hva følger av straffeloven § 22 annet ledd om forholdet mellom forsett og lovkunnskap?",
      options: ["At forsett foreligger selv om lovbryteren ikke er kjent med at handlingen er ulovlig — kunnskap om loven er ikke en del av forsettskravet", "At forsett ikke foreligger dersom lovbryteren var ukjent med at handlingen var ulovlig, siden han da ikke kan sies å ha villet overtre bestemmelsen", "At forsett foreligger bare der lovbryteren kjente den bestemmelsen han overtrådte, siden forsettet ellers ikke kan sies å dekke gjerningsbeskrivelsen", "At forsett foreligger der lovbryteren burde ha kjent regelen, slik at en aktsomhetsvurdering av lovkunnskapen inngår i selve forsettsdrøftelsen"],
      explanation: "Regelen hindrer at den som ikke har lest loven, automatisk mangler forsett; uten den ville uvitenhet lønnet seg. Spørsmålet om uvitenhet om regelen hører i stedet i straffeloven § 26 om rettsuvitenhet, som straffer den som ikke visste at handlingen var ulovlig når uvitenheten er uaktsom. Å ta feil av virkeligheten rammer forsettet direkte; å ta feil av regelen gjør det ikke.",
    },
    {
      question: "Hvilke tre former for forsett angir straffeloven § 22 første ledd?",
      options: ["Å handle med hensikt, å handle med bevissthet om at handlingen sikkert eller mest sannsynlig dekker gjerningsbeskrivelsen, og å holde det for mulig og velge å handle selv om det skulle være tilfellet", "Å handle med hensikt, å handle med bevissthet om at handlingen kan dekke gjerningsbeskrivelsen, og å handle uten å ha vurdert om beskrivelsen kunne bli dekket, selv om risikoen var åpenbar for enhver i samme situasjon", "Å handle med hensikt, å handle grovt uaktsomt, og å handle med bevissthet om at handlingen mest sannsynlig dekker gjerningsbeskrivelsen i straffebudet", "Å ønske følgen, å regne følgen som påregnelig for en alminnelig fornuftig person, og å godta følgen i ettertid når gjerningspersonen ser hva som skjedde"],
      explanation: "De tre formene er hensikt, visshet eller overveiende sannsynlighet, og mulighet kombinert med et valg om å handle likevel. Felles for dem er at gjerningspersonen har et bevisst forhold til at handlingen kan dekke beskrivelsen — og det er nettopp det som skiller forsett fra uaktsomhet. Grov uaktsomhet er en skyldform i § 23, ikke en forsettsform, og etterfølgende godtakelse er ikke forsett i det hele tatt.",
    },
    {
      question: "Hvordan definerer straffeloven § 23 første ledd uaktsomhet?",
      options: ["Som det å handle i strid med kravet til forsvarlig opptreden på et område, og ut fra sine personlige forutsetninger kunne bebreides for det", "Som det å handle i strid med kravet til forsvarlig opptreden på et område, uten at det i tillegg stilles noe krav om at gjerningspersonen kan bebreides", "Som det å handle uten å ha tenkt over risikoen, slik at den som faktisk så faren og handlet likevel, alltid faller utenfor uaktsomhetens område", "Som det å handle på en måte som skaper fare for andre, uavhengig av om det finnes en norm på området som sier hva forsvarlig opptreden krever"],
      explanation: "Definisjonen har to ledd som begge må være oppfylt: det objektive om forsvarlig opptreden på området, og det subjektive om bebreidelse ut fra personlige forutsetninger. Uten det subjektive leddet ville vi hatt et objektivt ansvar. Den som så risikoen og handlet likevel, er dessuten fortsatt innenfor uaktsomheten — det kalles bevisst uaktsomhet, og annet ledd definerer den kvalifiserte formen grov uaktsomhet.",
    },
    {
      question: "Hvilken betydning har motivet for skyldvurderingen?",
      options: ["Ingen — motivet er grunnen til at han handlet, mens forsettet gjelder forholdet til gjerningsbeskrivelsen, og et sympatisk motiv fjerner derfor ikke forsettet", "Avgjørende betydning — den som handlet av et aktverdig motiv, mangler forsett, siden forsettet nettopp gjelder viljen bak den handlingen som ble foretatt", "Betydning bare ved uaktsomhet — motivet inngår da i vurderingen av om gjerningspersonen ut fra sine personlige forutsetninger kan bebreides for avviket", "Betydning bare ved forsøk — motivet avgjør der om gjerningspersonen hadde det fullbyrdelsesforsettet forsøksbestemmelsen krever for at ansvar kan inntre"],
      explanation: "Motivet — pengenød, hevn, sjalusi, medlidenhet — er ikke en del av skyldkravet. Den som stjeler mat for å gi den til noen som sulter, har fullt forsett om at han tar noe som tilhører en annen. Motivet hører til utmålingen. Krever straffebudet selv et bestemt formål, for eksempel et vinningsforsett, er det ikke lenger motiv, men et element skylden må dekke.",
    },
    {
      question: "Hvordan skiller skylden seg når den knytter seg til en omstendighet, sammenliknet med en følge?",
      options: ["Ved omstendigheter spør vi hva han visste eller regnet med om noe som allerede forelå, ved følger hva han regnet med ville skje, vurdert fra handlingstidspunktet", "Ved omstendigheter spør vi hva han regnet med ville skje, ved følger hva han visste om noe som allerede forelå da han foretok den aktuelle handlingen", "Ved omstendigheter kreves forsett, mens det ved følger er tilstrekkelig med uaktsomhet, siden ingen kan ha sikker kunnskap om noe som ennå ikke har skjedd", "Ved omstendigheter er det nok at han burde ha visst, mens det ved følger kreves at han holdt følgen for sikker eller i det minste overveiende sannsynlig"],
      explanation: "Omstendigheter er trekk ved situasjonen som allerede foreligger — at gjenstanden tilhører en annen, at kjøperen er under 18, at området er vernet. Følger er noe som inntrer etter handlingen. Sondringen forteller deg hvordan spørsmålet skal formuleres: «visste hun at området var vernet?» mot «regnet hun med at kjøringen ville skade vegetasjonen?». Skyldkravet er det samme for begge typer elementer.",
    },
    {
      question: "Hva er forskjellen på skyldform og skyldgrad?",
      options: ["Formen er hvilken art skylden har, altså forsett eller uaktsomhet, mens graden er hvor sterk den er innenfor formen — simpel eller grov uaktsomhet, og hensikt som den sterkeste forsettsformen", "Formen er hvor sterk skylden er innenfor arten, mens graden er hvilken art skylden har, altså om det dreier seg om forsett eller om uaktsomhet", "Formen avgjør utmålingen av straffen, mens graden avgjør om straffebudet i det hele tatt er overtrådt i den saken man står overfor", "Formen gjelder de objektive sidene ved handlingen, mens graden gjelder de subjektive, altså hvor klanderverdig gjerningspersonen var da han handlet, og hvor mye han i så fall kunne bebreides for avviket"],
      explanation: "Formen avgjør om straffebudet i det hele tatt er overtrådt; graden avgjør ofte hvilken variant av bestemmelsen som brukes, og den påvirker utmålingen. Rekkefølgen i en besvarelse er først form, deretter grad der bestemmelsen krever en bestemt grad — å konkludere med «grov uaktsomhet» uten først å ha slått fast at det ikke var forsett, er å hoppe over et trinn.",
    },
    {
      question: "Hvor i loven står kravet om bebreidelse uttrykkelig, og hva innebærer begrepet?",
      options: ["I straffeloven § 23 første ledd, som krever at gjerningspersonen «ut fra sine personlige forutsetninger kan bebreides» — bebreidelse er fellesnevneren under begge skyldformene", "I straffeloven § 21, som gjør forsett til hovedregelen og dermed forutsetter at bebreidelsen er sterkere ved forsett enn ved uaktsom overtredelse av det samme straffebudet i den enkelte saken", "I straffeloven § 20, som knytter det strafferettslige ansvaret til alder og tilregnelighet, og som dermed bærer selve bebreidelseskravet i loven", "Kravet står ikke i loven i det hele tatt, men er en ulovfestet grunnsetning domstolene har utviklet ved siden av de lovfestede skyldformene"],
      explanation: "Ved uaktsomhet er bebreidelsen et uttrykkelig vilkår i straffeloven § 23 første ledd. Begrepet er fellesnevneren under begge skyldformene: forsett bebreides fordi gjerningspersonen valgte, uaktsomhet fordi han ikke tok det hensyn han skulle. Den strafferettslige bebreidelsen måles mot en rettslig norm, ikke mot en moralsk — en handling kan være moralsk klanderverdig uten å være uaktsom i lovens forstand.",
    },
    {
      question: "Skyld er noe som foregår i et hode. Hva betyr det for hvordan en skyldsdrøftelse skrives?",
      options: ["At skylden må sluttes av ytre omstendigheter — hva han gjorde, hva han sa, hva han visste fra før, hvor nærliggende følgen var — og ikke bare av hans egen forklaring", "At skylden må bygge på gjerningspersonens egen forklaring, siden ingen andre kan vite hva han tenkte, og siden ytre omstendigheter bare sier noe om handlingen", "At skylden ikke kan avgjøres på eksamen, siden faktum ikke inneholder de bevisene som ville vært nødvendige for å ta stilling til hva han faktisk tenkte", "At skylden må vurderes ut fra hva en alminnelig fornuftig person ville tenkt i samme situasjon, siden den enkeltes indre forhold ikke er tilgjengelige for retten"],
      explanation: "Skylden sluttes av ytre omstendigheter, og den sterke drøftelsen bruker faktums konkrete momenter — tidspunktet, avstanden, forberedelsene, hva han sa til andre. En drøftelse som bare gjengir gjerningspersonens forklaring, er tynn. Å tvile på faktum er derimot ikke din oppgave på eksamen: faktum er gitt, og bevisvurderingen hører til straffeprosessen.",
    },
    {
      question: "Hva er en villfarelse, og hvordan henger den sammen med dekningsprinsippet?",
      options: ["En villfarelse er at gjerningspersonens oppfatning ikke stemmer med virkeligheten eller med rettsstillingen — dekker ikke skylden et element, er det fordi han tok feil av noe", "En villfarelse er at gjerningspersonen har misforstått rekkevidden av straffebudet, og den utelukker forsettet uansett om misforståelsen gjaldt faktum eller den regelen han bygget sin oppfatning på", "En villfarelse er at gjerningspersonen har handlet under en feilaktig oppfatning av hva som er moralsk akseptabelt, og den påvirker bare utmålingen av straffen", "En villfarelse er at retten har lagt et uriktig faktum til grunn, og den får derfor betydning som en ankegrunn og ikke som en del av skyldvurderingen"],
      explanation: "Villfarelsen er den direkte konsekvensen av dekningsprinsippet: dekker ikke skylden et element, er det fordi han tok feil av noe. De to typene virker ulikt — tar han feil av faktum, utelukker det forsettet om det elementet, mens det å ta feil av rettsregelen ikke utelukker ansvaret med mindre uvitenheten var aktsom. Første spørsmål er derfor alltid hva han tok feil av, ikke hvilken virkning villfarelsen har.",
    },
    {
      question: "Hvilken rekkefølge følger skyldsdrøftelsen i en oppgave med faktum?",
      options: ["Finn skyldkravet, del gjerningsbeskrivelsen i elementer, prøv skylden mot hvert element, plasser en eventuell villfarelse som faktisk eller rettslig, og konkluder på form og eventuelt grad", "Konkluder først på skyldformen ut fra helhetsinntrykket av faktum, og bruk deretter elementene i gjerningsbeskrivelsen til å underbygge den konklusjonen du har landet på", "Start med å avgjøre om gjerningspersonen var i villfarelse, gå deretter til skyldkravet i bestemmelsen, og del til slutt gjerningsbeskrivelsen opp i sine enkelte elementer før du konkluderer på skyldformen", "Start med skyldevnen etter straffeloven § 20, gå deretter til skyldformen, og avslutt med å prøve om skylden dekket de elementene som er omtvistet i saken"],
      explanation: "Rekkefølgen hindrer den vanligste svakheten, som er å drøfte forsettet i sin alminnelighet uten målestokk: du kan ikke spørre om han hadde forsett om noe før du har sagt hva han skulle hatt forsett om. Skyldevnen er dessuten et eget, fjerde vilkår som kommer etter skylden. Selve rekkefølgen skal ikke stå i besvarelsen — leseren skal se resultatet av arbeidet, ikke sjekklisten.",
    },
  ],
  'juroff1500-3-2': [
    {
      question: "Hvilke tre former for forsett angir straffeloven § 22 første ledd, og hva har de felles?",
      options: ["Hensikt, bevissthet om at handlingen sikkert eller mest sannsynlig dekker beskrivelsen, og å holde det for mulig og velge å handle likevel — felles er et bevisst forhold til at handlingen kan dekke beskrivelsen", "Hensikt, grov uaktsomhet og simpel uaktsomhet — felles er at gjerningspersonen i alle tre tilfellene kan bebreides ut fra sine egne personlige forutsetninger for å opptre forsvarlig på området", "Ønske om følgen, kunnskap om at følgen var påregnelig, og likegyldighet overfor følgen — felles er at gjerningspersonen har hatt en holdning til utfallet som rettsordenen bedømmer som klanderverdig", "Hensikt, bevissthet om at handlingen kan tenkes å dekke beskrivelsen, og manglende vurdering av risikoen — felles er at gjerningspersonen hadde mulighet til å skaffe seg kunnskap om forholdet før han handlet"],
      explanation: "De tre formene i bokstav a til c er hensikt, visshet eller overveiende sannsynlighet, og mulighet kombinert med et valg om å handle likevel. Fellesnevneren er det bevisste forholdet til at handlingen kan dekke beskrivelsen — og det er nettopp dette som skiller forsett fra uaktsomhet. Uaktsomhet hører i § 23, og likegyldighet er en holdning, ikke et vilkår i loven.",
    },
    {
      question: "Hva kjennetegner hensiktsforsett etter straffeloven § 22 bokstav a?",
      options: ["At gjerningspersonen vil at handlingen skal dekke gjerningsbeskrivelsen — følgen eller omstendigheten er målet med handlingen, eller et nødvendig middel for å nå målet", "At gjerningspersonen har et aktverdig eller klanderverdig formål bak handlingen, slik at det er motivet hans som avgjør om den sterkeste forsettsformen foreligger", "At gjerningspersonen har planlagt handlingen på forhånd, slik at det er forberedelsen og ikke selve viljen som skiller denne formen fra de to øvrige i bestemmelsen", "At gjerningspersonen holder det for sikkert at handlingen vil dekke beskrivelsen, slik at hensikten er den formen som stiller det strengeste kravet til hva han visste"],
      explanation: "Hensiktsforsett er at han vil at handlingen skal dekke beskrivelsen. Motivet — hvorfor han ville det — er noe annet og hører til utmålingen; et sympatisk motiv fjerner ikke hensikten. Planlegging er ikke et vilkår, og kravet om visshet hører til bokstav b. Hensikten bygger på viljen, ikke på kunnskapen. Formen krever heller ikke at han trodde det ville lykkes: den som skyter for å treffe og selv regner med at han sannsynligvis bommer, har likevel hensiktsforsett, og det er nettopp derfor formen er den sterkeste.",
    },
    {
      question: "Hva er visshetsforsett, og hvilket klassiske eksempel illustrerer det?",
      options: ["At gjerningspersonen handler med bevissthet om at handlingen sikkert dekker beskrivelsen — den som sprenger et fly for å svindle et forsikringsselskap, ønsker ikke passasjerenes død, men vet at de dør", "At gjerningspersonen er sikker på at handlingen er ulovlig — den som leser straffebudet før han handler, har dermed den sterkeste formen for forsett loven opererer med", "At gjerningspersonen med sikkerhet vil oppnå det han ønsker — den som velger et middel som er helt egnet til formålet, har dermed forsett også om de virkningene han ikke tenkte på", "At gjerningspersonen er sikker på at handlingen ikke vil bli oppdaget — den som treffer omfattende forholdsregler mot å bli avslørt, viser dermed at han hadde et bevisst forhold til overtredelsen"],
      explanation: "Visshetsforsett foreligger når gjerningspersonen er klar over at det som beskrives, vil skje eller foreligger. Flyeksempelet viser hvorfor formen er nødvendig: uten den ville forsettet vært begrenset til det han ønsket, og enhver kunne fri seg ved å si at følgen var beklagelig. Loven knytter forsettet til hva han visste, ikke til hva han ville — og lovkunnskap er noe helt annet, jf. straffeloven § 22 annet ledd.",
    },
    {
      question: "Hvor ligger terskelen for sannsynlighetsforsett etter straffeloven § 22 bokstav b?",
      options: ["Ved sannsynlighetsovervekt — han må ha holdt det for mer sannsynlig at handlingen dekket beskrivelsen enn at den ikke gjorde det", "Ved en nærliggende og påregnelig risiko — det er nok at følgen var av det slaget en fornuftig person ville regnet med kunne inntre i en situasjon som denne", "Ved enhver mulighet han var klar over — så snart tanken om at det kunne gå galt var i bevisstheten hans, er terskelen i bestemmelsen passert", "Ved en objektivt konstaterbar risiko på over femti prosent, beregnet ut fra hvor ofte en handling av denne typen faktisk fører til den følgen som inntraff"],
      explanation: "Terskelen er sannsynlighetsovervekt: mer sannsynlig at beskrivelsen dekkes enn at den ikke gjør det. Holdt han det bare for mulig, faller han ut av bokstav b, og da må bokstav c prøves. Loven angir ingen prosentgrense — ingen tar stilling til risiko i prosent i handlingsøyeblikket, og vurderingen er derfor kvalitativ og ikke tallfestet.",
    },
    {
      question: "En handling innebar objektivt sett 90 prosent risiko for at følgen ville inntre, men gjerningspersonen trodde feilaktig at risikoen var minimal. Foreligger sannsynlighetsforsett?",
      options: ["Nei — terskelen gjelder hva gjerningspersonen selv regnet med, ikke hva som objektivt var sannsynlig, og spørsmålet blir da i stedet om han var uaktsom", "Ja — når risikoen objektivt sett var så høy, må han anses å ha regnet med følgen, og hans egen forklaring om det motsatte kan da ikke legges til grunn", "Ja — den som tar feil av en risiko som var åpenbar for enhver, bedømmes etter loven som om han hadde den kunnskapen han burde hatt om forholdet", "Nei — men forholdet faller da automatisk inn under dolus eventualis, siden han hadde mulighet til å forstå at følgen kunne inntre dersom han handlet"],
      explanation: "Terskelen er et krav om hva gjerningspersonen selv regnet med. En som feilaktig trodde risikoen var minimal, har ikke sannsynlighetsforsett — men han kan være uaktsom, og det avgjøres etter straffeloven § 23. Dolus eventualis følger heller ikke automatisk: den krever at han faktisk så følgen som mulig og i tillegg innvilget den positivt.",
    },
    {
      question: "I hvilken rekkefølge prøves forsettsformene?",
      options: ["Fra den sterkeste til den svakeste — først hensikt, så visshet eller sannsynlighet, og til slutt dolus eventualis — og du stopper ved den første som er oppfylt", "Fra den svakeste til den sterkeste — først dolus eventualis, så sannsynlighet, og til slutt hensikt — og du fortsetter til du finner den formen som passer best på faktum", "I den rekkefølgen faktum gir holdepunkter for, uten noen fast orden, siden formene er sidestilte alternativer i loven og ikke står i noe innbyrdes styrkeforhold", "Samlet, i én helhetsvurdering av hvor bevisst gjerningspersonen var, siden de tre formene er gradsvarianter av ett og samme kriterium om bevissthet"],
      explanation: "Formene prøves fra den sterkeste til den svakeste, og du stopper ved den første som er oppfylt. Stigen er ikke en samlet vurdering: hver form har sine egne vilkår og er ikke en gradsvariant av ett kriterium. I en besvarelse ser det ut som to korte setninger som avviser hensikt og sannsynlighet med begrunnelse, fulgt av en full drøftelse av den formen som står igjen.",
    },
    {
      question: "Hvorfor skal ikke dolus eventualis drøftes før de to andre formene er avvist?",
      options: ["Fordi formen krever mest arbeid og er mest omstridt — å begynne der er å ta den vanskelige veien til et svar de to andre ofte gir enklere, og det signaliserer at systematikken ikke sitter", "Fordi formen bare kan anvendes subsidiært, slik at retten er avskåret fra å bygge på den dersom påtalemyndigheten ikke uttrykkelig har påberopt seg den i tiltalen", "Fordi formen forutsetter at de to andre er utelukket som et rettslig vilkår, slik at en drøftelse av dolus eventualis uten en slik avvisning er materielt uriktig", "Fordi formen har en lavere strafferamme enn de øvrige, slik at en for tidlig drøftelse av den ville gitt gjerningspersonen en mildere reaksjon enn forholdet tilsier ut fra det han faktisk gjorde"],
      explanation: "Rekkefølgen er både arbeidsbesparende og et signal om systematikk. Det er ikke et rettslig vilkår for bokstav c at de andre formene er formelt avvist, og formene har ingen ulike strafferammer — alle tre oppfyller et krav om forsett. I et praktikum der faktum gir en klar hensikt, er en drøftelse av dolus eventualis bortkastet tid.",
    },
    {
      question: "Hvilke to vilkår må være oppfylt for at det foreligger dolus eventualis etter straffeloven § 22 bokstav c?",
      options: ["At han holdt det for mulig at handlingen dekket gjerningsbeskrivelsen, og at han positivt innvilget følgen ved å velge å handle selv om den skulle inntre", "At han holdt det for mulig at handlingen dekket gjerningsbeskrivelsen, og at risikoen objektivt sett var så stor at en alminnelig fornuftig person ville avstått fra handlingen", "At han holdt det for mulig at handlingen dekket gjerningsbeskrivelsen, og at han unnlot å treffe forholdsregler som ville vært enkle og lite kostbare å gjennomføre", "At han holdt det for mulig at handlingen dekket gjerningsbeskrivelsen, og at han ville handlet på samme måte dersom han hadde visst at følgen kom til å inntre"],
      explanation: "Vilkårene er mulighetsforståelsen og den positive innvilgelsen, og de er atskilte: de prøves hver for seg og med hver sin begrunnelse. Å nøye seg med mulighetsforståelsen er den enkeltfeilen materialet er mest eksplisitt om — nesten alle som gjør noe risikabelt, ser at det kan gå galt. Spørsmålet om hva han ville ha gjort, hører til den hypotetiske innvilgelsesteorien, som norsk rett ikke bygger på.",
    },
    {
      question: "Hva er innholdet i grunnvilkåret i dolus eventualis?",
      options: ["At gjerningspersonen faktisk holdt det for mulig at handlingen dekket beskrivelsen — muligheten må ha vært i bevisstheten hans på handlingstidspunktet", "At følgen objektivt sett var en mulig virkning av handlingen, slik at vilkåret er oppfylt uansett om gjerningspersonen selv hadde tenkt tanken eller ikke", "At gjerningspersonen holdt det for mer sannsynlig enn ikke at handlingen dekket beskrivelsen, slik at terskelen er den samme som i sannsynlighetsforsettet", "At gjerningspersonen burde ha holdt det for mulig at handlingen dekket beskrivelsen, ut fra hva en person med hans erfaring ville sett i den situasjonen"],
      explanation: "Terskelen ligger lavt — det kreves ikke sannsynlighetsovervekt, for da ville vi vært i bokstav b — men det kreves at han faktisk tenkte tanken. En risiko han aldri var innom, er ikke en mulighet han holdt for mulig. Vilkåret gjelder hans oppfatning, ikke virkeligheten: at følgen objektivt var mulig, er ikke nok, og «burde ha sett» er uaktsomhetens målestokk.",
    },
    {
      question: "Hva innebærer tilleggsvilkåret om positiv innvilgelse, og hvordan påvises det?",
      options: ["At han har tatt stilling til muligheten og bestemt seg for å handle selv om den skulle inntre — det påvises av uttalelser som «det får gå som det går», eller sluttes av handlemåten", "At han har vært likegyldig til utfallet — det påvises ved at han ikke har uttrykt noen bekymring for følgen verken før eller etter at handlingen ble foretatt", "At han har ønsket følgen velkommen — det påvises ved at han har hatt en fordel av at den inntraff, eller ved at han uttrykte tilfredshet da han så resultatet", "At han har akseptert risikoen ved å handle på et område han visste var farlig — det påvises ved at han kjente til risikonivået på området fra tidligere erfaring med tilsvarende oppdrag"],
      explanation: "Innvilgelse betyr i klarspråk at han har sagt ja til utfallet på forhånd — ikke at han ønsket det, og ikke at han var likegyldig, men at han valgte å handle med det som en akseptert mulighet. Der uttalelser mangler, må det sluttes av handlemåten: at han fortsatte etter at risikoen ble påpekt, at han unnlot enkle forholdsregler, at han hadde et mål han var villig til å ofre noe for. Likegyldighet er en holdning, ikke et vilkår.",
    },
    {
      question: "Hva går den positive innvilgelsesteori ut på?",
      options: ["At forsett bare foreligger når gjerningspersonen faktisk har tatt stilling til muligheten og innvilget den — det kreves en reell beslutning på handlingstidspunktet", "At forsett foreligger når gjerningspersonen ville ha handlet på samme måte om han hadde visst at følgen ville inntre — det avgjørende er hva han ville ha valgt", "At forsett foreligger når gjerningspersonen har innvilget risikoen ved å begi seg inn i en situasjon der slike følger erfaringsmessig inntreffer med jevne mellomrom", "At forsett foreligger når gjerningspersonen i ettertid har godtatt eller bifalt det som skjedde, slik at hans etterfølgende holdning kaster lys over hva han mente da han handlet"],
      explanation: "Norsk rett bygger på den positive teorien, og straffeloven § 22 bokstav c er utformet etter den med sin formulering om at han velger å handle selv om det skulle være tilfellet. Kravet er en faktisk beslutning på handlingstidspunktet — ikke en tenkt beslutning, og ikke en beslutning han ville tatt. Etterfølgende godtakelse er ikke forsett i det hele tatt, siden skylden måles der og da.",
    },
    {
      question: "Hva er den hypotetiske innvilgelsesteori, og hvorfor gjelder den ikke i norsk rett?",
      options: ["Den spør hva gjerningspersonen ville ha gjort dersom han hadde visst at følgen kom — den bygger på et tenkt hendelsesforløp og på personens karakter, og bryter dermed med skyldprinsippet", "Den spør om gjerningspersonen hadde en hypotetisk mulighet til å avverge følgen — den bygger på en vurdering av handlingsalternativer, og hører derfor hjemme i uaktsomhetslæren", "Den spør om følgen hypotetisk sett kunne inntruffet — den bygger på en objektiv risikovurdering, og bryter dermed med kravet om at forsettet skal gjelde hans egen oppfatning", "Den spør hva en alminnelig fornuftig person ville ha innvilget i samme situasjon — den bygger på en objektiv målestokk, og er derfor i realiteten et uaktsomhetskrav"],
      explanation: "Den hypotetiske varianten spør hva han ville ha gjort, ikke hva han faktisk bestemte, og knytter dermed ansvaret til hva slags menneske han er. Forskjellen er stor i praksis: den hypotetiske fanger langt flere, fordi mange ville handlet likevel uten å ha tatt noen beslutning om det. Kontrasten er verdt å kunne, for det er lett å gli over i den uten å merke det — en drøftelse som ender med at «han ville nok kastet steinen uansett», har byttet teori underveis.",
    },
    {
      question: "Hva skiller dolus eventualis fra bevisst uaktsomhet?",
      options: ["Ikke kunnskapen, for begge ser muligheten — forskjellen er hva de gjør med den: den ene godtar følgen, den andre regner den bort", "Kunnskapen — den som har dolus eventualis, ser muligheten, mens den bevisst uaktsomme ikke har tenkt tanken i det hele tatt før han handlet", "Sannsynligheten — den som har dolus eventualis, regner følgen som mer sannsynlig enn ikke, mens den bevisst uaktsomme anser den som lite trolig", "Alvoret — den som har dolus eventualis, ser for seg en alvorlig følge, mens den bevisst uaktsomme bare ser for seg en mindre skade av forbigående art"],
      explanation: "Begge ser risikoen, og det er derfor grensen er vanskelig. Kontrollspørsmålet er om han godtok følgen eller regnet den bort — er svaret det siste, er han ikke i forsettets område, uansett hvor uforsvarlig avvisningen var. Den som ikke tenkte tanken i det hele tatt, er ubevisst uaktsom, og sannsynlighetsgraden skiller bokstav b fra bokstav c, ikke forsettet fra uaktsomheten.",
    },
    {
      question: "«Jeg tenkte at det kanskje kunne gå galt, men at jeg er såpass rutinert at det ikke ville skje meg.» Hvilken skyldform beskriver utsagnet?",
      options: ["Bevisst uaktsomhet — grunnvilkåret er oppfylt siden han så muligheten, men han innvilget den ikke, han regnet den bort med henvisning til egen rutine", "Dolus eventualis — han så muligheten for at det kunne gå galt, og handlet likevel, og begge vilkårene i bokstav c er dermed oppfylt, siden det å handle på tross av en erkjent risiko nettopp er den beslutningen loven beskriver", "Ubevisst uaktsomhet — han hadde ikke noe reelt forhold til risikoen, siden han avviste den med en begrunnelse som viser at tanken aldri festet seg hos ham", "Sannsynlighetsforsett — han regnet med at noe kunne skje, og en slik bevissthet om risiko oppfyller kravet i bokstav b om at handlingen mest sannsynlig dekker beskrivelsen"],
      explanation: "Dette er et bevisst nær-treff: grunnvilkåret er oppfylt, men tilleggsvilkåret ikke — han har regnet risikoen bort, ikke godtatt den. Den som stopper etter det første vilkåret, konkluderer med forsett her, og det er feil. Han tenkte dessuten tanken, så det er ikke ubevisst uaktsomhet, og han holdt det ikke for mest sannsynlig at det ville gå galt.",
    },
    {
      question: "Hva menes med at forsettet har en kunnskapsside og en viljeside?",
      options: ["Kunnskapssiden er hva han visste eller regnet med, viljesiden hva han ville eller bestemte seg for — i dolus eventualis er kunnskapskravet senket til bare mulighet, og viljekravet til gjengjeld skjerpet til en beslutning", "Kunnskapssiden er hva han visste om loven, viljesiden hva han ville med handlingen — og begge sidene må være dekket for at forsettet skal anses fullstendig, slik at manglende lovkunnskap bryter forsettet på samme måte som manglende vilje", "Kunnskapssiden gjelder de objektive vilkårene i gjerningsbeskrivelsen, viljesiden de subjektive — og skillet svarer dermed til inndelingen inne i det enkelte straffebudet", "Kunnskapssiden gjelder forsettet om følgen, viljesiden forsettet om omstendighetene — og en gjerningsperson kan derfor ha oppfylt den ene siden uten å ha oppfylt den andre"],
      explanation: "Kunnskapssiden bærer visshets- og sannsynlighetsforsettet og er grunnvilkåret i bokstav c; viljesiden bærer hensiktsforsettet og er tilleggsvilkåret i bokstav c. Sondringen forklarer hvorfor dolus eventualis er den formen med to vilkår: kunnskapskravet er senket til det laveste tenkelige nivå, og viljekravet er skjerpet til en uttrykkelig beslutning. Formen er altså ikke bare en svakere versjon av bokstav b.",
    },
    {
      question: "Hvordan formuleres spørsmålet når forsettet skal dekke en følge i et følgedelikt?",
      options: ["«Regnet han med at slaget ville føre til betydelig skade?» — spørsmålet gjelder noe framtidig, vurdert fra handlingstidspunktet, ikke om han visste at han slo", "«Visste han at slaget rammet en annen person?» — spørsmålet gjelder de omstendighetene som allerede forelå da handlingen ble foretatt, ikke det som kom etterpå som en virkning av den handlingen han foretok", "«Ble skaden faktisk forårsaket av slaget?» — spørsmålet gjelder sammenhengen mellom handlingen og følgen, som er kjernen i forsettet ved denne typen bestemmelser", "«Burde han ha forstått at slaget kunne føre til betydelig skade?» — spørsmålet gjelder hva en person med hans forutsetninger ville sett i den aktuelle situasjonen"],
      explanation: "Ved følger spør vi hva han regnet med ville skje, vurdert fra handlingstidspunktet. Det kreves ikke at han forutså det nøyaktige forløpet — at skaden oppsto på en litt annen måte enn han tenkte seg, bryter normalt ikke forsettet, så lenge følgen er av den arten han regnet med. Om handlingen faktisk forårsaket følgen, er et objektivt spørsmål i gjerningsbeskrivelsen som kommer før, og «burde ha forstått» er uaktsomhetens målestokk.",
    },
    {
      question: "Hvorfor er omstendighetene i gjerningsbeskrivelsen dekningsprinsippets prøvestein?",
      options: ["Fordi det nesten alltid er der skylden svikter i praksis — gjerningspersonen vet hva han gjør, men tar feil av en omstendighet ved situasjonen, og da er vi over i faktisk uvitenhet etter straffeloven § 25", "Fordi omstendighetene er de eneste elementene skylden må dekke, mens følgene bedømmes objektivt og derfor ikke krever noen egen vurdering av hva gjerningspersonen regnet med på handlingstidspunktet eller senere i forløpet", "Fordi omstendighetene alltid krever hensiktsforsett, mens de øvrige elementene kan dekkes av en hvilken som helst av de tre formene loven oppstiller i bestemmelsen", "Fordi omstendighetene sjelden er beskrevet i faktum, slik at kandidaten må slutte seg til dem, og fordi tvil om dem derfor må komme gjerningspersonen til gode"],
      explanation: "Det er nesten alltid her skylden svikter: han vet hva han gjør, men tar feil av at gjenstanden tilhørte en annen, at kjøperen var under 18, at området var vernet. Da svikter forsettskravet for det elementet, og vi er over i faktisk uvitenhet etter straffeloven § 25. Alle tre forsettsformene kan for øvrig gjelde omstendigheter — også dolus eventualis kan knytte seg til at han holdt det for mulig at gjenstanden tilhørte en annen.",
    },
    {
      question: "Hva følger av straffeloven § 22 annet ledd for forsettsdrøftelsen?",
      options: ["At du aldri skal drøfte om gjerningspersonen visste at handlingen var forbudt — forsett foreligger selv om han ikke er kjent med at handlingen er ulovlig", "At du alltid skal drøfte om gjerningspersonen visste at handlingen var forbudt, siden lovkunnskapen inngår som et selvstendig element forsettet må dekke", "At du skal drøfte om gjerningspersonen burde ha kjent regelen, siden en aktsomhetsvurdering av lovkunnskapen er en del av forsettsvurderingen i loven", "At du skal drøfte om gjerningspersonen kjente den konkrete bestemmelsen, men ikke om han kjente rekkevidden av den, siden det siste er et rent tolkningsspørsmål"],
      explanation: "Kunnskap om loven er ikke en del av forsettskravet. Uten regelen ville uvitenhet lønnet seg, og den som aldri leste loven, ville stått friest. Spørsmålet hører i stedet i straffeloven § 26 om rettsuvitenhet. Å ta feil av virkeligheten rammer forsettet direkte gjennom dekningsprinsippet; å ta feil av regelen gjør det ikke — og forvekslingen er blant emnets mest utsatte feil.",
    },
    {
      question: "Hvorfor angir loven ingen prosentgrense for hva som er «mest sannsynlig»?",
      options: ["Fordi ingen tar stilling til risiko i prosent i handlingsøyeblikket — vurderingen er kvalitativ: regnet han med at det ville skje, eller regnet han med at det ikke ville skje?", "Fordi grensen varierer med hvor alvorlig følgen er, slik at det kreves lavere sannsynlighet ved alvorlige følger enn ved de mindre inngripende overtredelsene", "Fordi grensen fastsettes av retten i den enkelte sak ut fra bevisene, og fordi en fast tallgrense derfor ville bundet domstolen på en uheldig måte i praksis", "Fordi beviskravet i straffesaker allerede krever at det ikke skal være rimelig tvil, og fordi en egen prosentgrense i forsettsdefinisjonen ville blitt overflødig ved siden av det"],
      explanation: "Å kreve at gjerningspersonen skulle hatt en tallfestet oppfatning, ville være å kreve noe mennesker ikke gjør. For besvarelsen betyr det at du ikke skal oppgi prosenter — en drøftelse som sier at «risikoen var over 50 prosent», later som den har et presisjonsnivå den ikke har. Beviskravet om rimelig tvil er dessuten noe annet: det gjelder bevisvurderingen og hører til straffeprosessen.",
    },
    {
      question: "Hvordan påvises forsett i praksis?",
      options: ["Ved slutninger fra ytre omstendigheter — handlemåten, forberedelsene, uttalelser før og etter, hva han visste fra før, og hvor nærliggende følgen var", "Ved gjerningspersonens egen forklaring om hva han tenkte, siden ingen andre kan ha kunnskap om hva som foregikk i hodet hans i handlingsøyeblikket", "Ved en vurdering av hvor stor risikoen objektivt sett var, siden en høy risiko etter fast praksis medfører at forsettet må anses tilstrekkelig påvist", "Ved sakkyndige vurderinger av gjerningspersonens personlighet, siden det er hans alminnelige holdning til risiko som avgjør hva han bestemte seg for"],
      explanation: "Forsett er en indre tilstand og må sluttes av ytre omstendigheter. Særlig teller det at han fortsatte etter at noen advarte ham, at han valgte et middel egnet til å gi nettopp denne følgen, at han traff eller unnlot å treffe forholdsregler, og hvor åpenbar risikoen var for en i hans situasjon. En drøftelse som bare gjengir hva gjerningspersonen har forklart, er tynn.",
    },
    {
      question: "Hvorfor er tilleggsvilkåret i dolus eventualis særlig vanskelig å bevise?",
      options: ["Fordi det gjelder en faktisk stillingtaken gjerningspersonen tok inne i eget hode og sjelden har uttrykt — og en tiltalt som benekter å ha tatt stilling, er vanskelig å motbevise", "Fordi det gjelder en objektiv vurdering av risikoen, og fordi det sjelden foreligger sakkyndige beregninger av hvor stor faren faktisk var i den aktuelle situasjonen", "Fordi det gjelder en holdning til utfallet, og fordi holdninger etter sin natur endrer seg over tid, slik at den holdningen tiltalte har i retten, sier lite om handlingsøyeblikket", "Fordi det gjelder et forhold påtalemyndigheten ikke har adgang til å føre bevis om, siden spørsmålet om hva tiltalte bestemte seg for, hører til hans forklaringsfrihet"],
      explanation: "Vilkåret krever noe mer enn en holdning — det krever en faktisk stillingtaken. Retten kan likevel finne den ved holdepunkter som gjør det nærliggende at han må ha tatt stilling: at risikoen var påtrengende, at han ble advart, at han hadde et mål han var villig til å ofre noe for. Bevisproblemet er en del av begrunnelsen for at formen er omstridt, fordi anvendelsen lett glir over i hva han ville ha gjort.",
    },
    {
      question: "En tiltalt sier at han ikke ønsket at det skulle gå galt. Hva er det riktige svaret på den innvendingen?",
      options: ["At forsettet knytter seg til forholdet til gjerningsbeskrivelsen, ikke til ønsket — den som vet at følgen kommer og handler likevel, har forsett selv om følgen er dypt uønsket", "At innvendingen er avgjørende dersom den legges til grunn, siden forsettet etter loven forutsetter at gjerningspersonen ville at følgen skulle inntre", "At innvendingen bare har betydning ved hensiktsforsett, mens den ved de to øvrige formene i stedet flytter spørsmålet over til om han var likegyldig til utfallet da han handlet", "At innvendingen må vurderes opp mot hvor alvorlig følgen ble, siden et sterkt uønsket utfall taler for at gjerningspersonen ikke kan ha regnet med at det ville inntre"],
      explanation: "Bare hensiktsforsettet bygger på at han ville følgen; de to andre formene bygger på kunnskap og beslutning. Utsagnet er derfor et riktig utsagn som ikke svarer på spørsmålet. Hverdagsspråket bruker «med vilje» og «med hensikt» om hverandre, og det er nettopp derfor presiseringen er verdt å skrive ut. Likegyldighet er dessuten en sinnstilstand, mens loven krever en beslutning i bokstav c.",
    },
    {
      question: "Hva må forsettet dekke når ansvaret bygger på en unnlatelse?",
      options: ["At situasjonen forelå, at han hadde plikten, og at det å la være ville føre til følgen — og i praksis blir spørsmålet ofte om han var klar over situasjonen i det hele tatt", "Bare at han var klar over at han hadde en plikt, siden selve unnlatelsen ikke er en handling han kan ha hatt noe bevisst forhold til på handlingstidspunktet, verken til situasjonen eller til følgen", "Bare at følgen inntraff, siden unnlatelsesansvaret hviler på likestillingsvilkåret, og siden dette vilkåret allerede har prøvd om forholdet er straffverdig nok", "At han burde ha oppdaget situasjonen, siden ansvaret for passivitet etter sin art bygger på hva gjerningspersonen kunne og skulle ha sett i den situasjonen"],
      explanation: "De samme forsettsformene gjelder, men innholdet forskyves: skylden må dekke at situasjonen forelå, at han hadde plikten, og at passiviteten ville føre til følgen. Den som ikke oppdaget at barnet hadde falt i vannet, har ikke forsett — og da blir spørsmålet om han burde ha oppdaget det, altså uaktsomhet. Ved vedvarende unnlatelser kan forsettet dessuten oppstå underveis, fra det tidspunktet han blir klar over faren.",
    },
    {
      question: "Faktum opplyser at gjerningspersonen lo da han så resultatet. Hva betyr det for forsettsvurderingen?",
      options: ["Det er ikke forsett i seg selv, siden skylden bedømmes på handlingstidspunktet — men opplysningen kan være et bevismoment for hva han tenkte da han handlet", "Det er forsett, siden en etterfølgende godtakelse av utfallet viser at han også i handlingsøyeblikket må ha vært innforstått med at følgen kunne inntre", "Det er uten enhver betydning for saken, siden opplysninger om hva gjerningspersonen gjorde etter handlingen, ikke kan brukes verken som bevis eller ved utmålingen", "Det er dolus eventualis, siden en etterfølgende bifallelse av følgen er nettopp det loven mener med at han velger å handle selv om følgen skulle inntre"],
      explanation: "Etterfølgende forsett er ingen forsettsform — det er en betegnelse på noe som ikke er forsett. Slike opplysninger frister til å bli lest som forsett, men skylden måles på handlingstidspunktet. De kan derimot være bevismomenter for hva han tenkte i handlingsøyeblikket, og de kan ha betydning ved utmålingen. Noe annet er forsett som oppstår midt i et forløp som ennå ikke er avsluttet.",
    },
    {
      question: "Hva er fullbyrdelsesforsett, og hvor har begrepet sin plass?",
      options: ["Det er forsettet om å fullbyrde et lovbrudd, og det er et vilkår i forsøksbestemmelsen i straffeloven § 16 — de vanlige forsettsformene brukes, bare rettet mot en fullbyrdelse som ennå ikke har skjedd", "Det er forsettet om å gjennomføre handlingen fullt ut uten å avbryte den, og det er et vilkår i alle følgedelikter der straffebudet krever at en bestemt følge inntrer", "Det er den sterkeste av forsettsformene, og det kreves i de straffebudene som uttrykkelig bruker formuleringen «med forsett om» å oppnå noe bestemt i gjerningsbeskrivelsen, typisk der lovbruddet forutsetter et bestemt formål", "Det er forsettet slik det foreligger i det øyeblikket lovbruddet er fullbyrdet, og det avgjør derfor hvilket tidspunkt skylden skal bedømmes ut fra i saken"],
      explanation: "Fullbyrdelsesforsettet er et av vilkårene i straffeloven § 16 første ledd: den som har forsett om å fullbyrde et lovbrudd som kan medføre fengsel i ett år eller mer, og som foretar noe som leder direkte mot utføringen, straffes for forsøk. Det er de vanlige forsettsformene som brukes. Skylden bedømmes for øvrig alltid på handlingstidspunktet, ikke på fullbyrdelsestidspunktet.",
    },
    {
      question: "Hvordan spiller forsettsformene og dekningsprinsippet sammen?",
      options: ["Formene sier hvor sterkt forholdet til beskrivelsen må være, dekningsprinsippet hvor mye av beskrivelsen forholdet må omfatte — for hvert element spør du hvilken form som eventuelt foreligger", "Formene erstatter dekningsprinsippet der straffebudet bare krever forsett, siden en konstatert forsettsform da dekker gjerningsbeskrivelsen som helhet i saken", "Dekningsprinsippet erstatter forsettsformene i praktikum, siden det er tilstrekkelig å vise at skylden nådde fram til hvert element uten å navngi hvilken form som forelå i det enkelte tilfellet man står overfor", "De to gjelder hver sin type straffebud: formene gjelder følgedelikter, mens dekningsprinsippet gjelder handlingsdelikter der ingen bestemt følge kreves"],
      explanation: "De to spørsmålene er uavhengige og må begge besvares. Resultatet kan bli ulikt for ulike elementer — hensikt om handlingen, dolus eventualis om følgen. Det som kreves, er at det for hvert element foreligger minst den formen straffebudet krever; der bestemmelsen bare krever forsett, er alle tre formene tilstrekkelige. Å konkludere med at «han hadde dolus eventualis» uten å si om hvilket element, er å svare på halve spørsmålet.",
    },
  ],
  'juroff1500-3-3': [
    {
      question: "Hvordan lyder uaktsomhetsdefinisjonen i straffeloven § 23 første ledd?",
      options: ["Uaktsom er den som handler i strid med kravet til forsvarlig opptreden på et område, og som ut fra sine personlige forutsetninger kan bebreides", "Uaktsom er den som handler i strid med kravet til forsvarlig opptreden på et område, uten at det stilles noe ytterligere krav knyttet til personen selv", "Uaktsom er den som ikke har tenkt over risikoen ved handlingen sin, slik at den som faktisk så faren og handlet likevel, faller utenfor uaktsomhetens område", "Uaktsom er den som volder skade ved en handling som skaper fare for andre"],
      explanation: "Definisjonen har to ledd bundet sammen med et «og», og begge må være oppfylt: det objektive om forsvarlig opptreden på området, og det subjektive om bebreidelse ut fra personlige forutsetninger. Uten det objektive leddet ville normen blitt tilfeldig og personavhengig; uten det subjektive ville vi hatt et objektivt ansvar. Den som så risikoen og handlet likevel, er dessuten bevisst uaktsom — fortsatt innenfor uaktsomheten.",
    },
    {
      question: "Hva spør den objektive siden av uaktsomhetsvurderingen om?",
      options: ["Hva forsvarlig opptreden krever på det aktuelle området — målestokken er ikke gjerningspersonen selv, men normen som gjelder for virksomheten", "Hva gjerningspersonen selv oppfattet som forsvarlig i situasjonen, siden det er hans egen vurdering av risikoen som er utgangspunktet for bedømmelsen", "Hvor stor skaden objektivt sett ble, siden alvoret i den følgen som faktisk inntraff, er det som avgjør hvor strengt handlemåten skal bedømmes", "Om handlingen objektivt sett skapte fare for andre"],
      explanation: "Spørsmålet er hva en forsvarlig handlende ville gjort i denne situasjonen, på dette området. Normen fastlegges av skrevne regler der de finnes, og ellers av alminnelig og fornuftig praksis, sett i lys av risikoen. Uttrykket «på et område» står i loven fordi normen varierer: det som er forsvarlig på et lager, er ikke det samme som på en operasjonsstue. Følgens omfang sier noe om skaden, ikke om avviket.",
    },
    {
      question: "Hva spør den subjektive siden om, og hva teller ikke med?",
      options: ["Om gjerningspersonen ut fra sine personlige forutsetninger kan bebreides — erfaring, opplæring, alder og tidspress teller med, mens det å «ikke tenke over det» ikke gjør det", "Om gjerningspersonen hadde til hensikt å skape fare — hensikten teller med, mens hans erfaring og opplæring er objektive forhold som hører til det første leddet", "Om gjerningspersonen har vist anger i ettertid — angeren teller med som et tegn på at han forsto normen, mens hans forutsetninger på handlingstidspunktet ikke gjør det", "Om gjerningspersonen er alminnelig uforsiktig av natur — legningen teller med, mens de konkrete forholdene i situasjonen faller utenfor den subjektive vurderingen"],
      explanation: "Den subjektive siden gjelder hva som med rimelighet kunne kreves av akkurat denne personen: erfaring, opplæring, fagkunnskap, alder og modenhet, og forhold i situasjonen som gjorde det vanskelig å opptre riktig. At han «ikke tenkte over det», er derimot nettopp det uaktsomheten bebreider, og alminnelig uforsiktighet av natur er ingen unnskyldning. Hensikt hører til forsettet, ikke til uaktsomheten.",
    },
    {
      question: "I hvilken rekkefølge drøftes de to sidene, og hvorfor kan rekkefølgen ikke snus?",
      options: ["Objektivt først, subjektivt etterpå — du kan ikke spørre om noen kan bebreides for et avvik før du har sagt hva han avvek fra", "Subjektivt først, objektivt etterpå — du må vite hvilke forutsetninger gjerningspersonen hadde, før du kan fastlegge hvilken norm som gjelder for akkurat ham", "Samlet, i én vurdering — de to sidene henger så tett sammen at en oppdeling gir en kunstig fremstilling av det som i realiteten er ett spørsmål", "I den rekkefølgen faktum gir holdepunkter for — er de personlige forholdene mest fremtredende, begynner du der, og ellers begynner du i normen"],
      explanation: "Objektivt først: begynner du subjektivt, får du en vurdering av personen uten en norm å måle ham mot. Svikter trinn én, er saken over — har han opptrådt forsvarlig, er han ikke uaktsom, uansett hvor lett det ville vært å gjøre mer. En samledrøftelse blir uunngåelig til meningsdrøfting, fordi de to sidene stiller helt ulike spørsmål.",
    },
    {
      question: "Hva skjer dersom du kommer til at gjerningspersonen ikke avvek fra forsvarlighetsnormen?",
      options: ["Da er saken over — har han opptrådt forsvarlig, er han ikke uaktsom, uansett hvor lett det ville vært å gjøre mer enn han gjorde", "Da må du gå videre til den subjektive siden, siden en person med særlige forutsetninger kan bebreides selv om han holdt seg innenfor den alminnelige normen", "Da må du vurdere om følgen var alvorlig nok til at normen skjerpes, siden aktsomhetskravet i så fall strekkes lenger enn det den vanlige praksisen tilsier", "Da må du vurdere om han hadde et handlingsalternativ som ville vært bedre, siden det å velge det nest beste alternativet i seg selv er et avvik fra normen"],
      explanation: "Trinn én er en terskel: uten avvik fra det forsvarlige er det ingen uaktsomhet, og det subjektive leddet blir uten betydning. Det motsatte gjelder også — svikter trinn to, foreligger et avvik som ikke kan bebreides ham, og uaktsomhet foreligger likevel ikke. Det er nettopp det andre leddet som gjør uaktsomhetsansvaret til et skyldansvar og ikke et objektivt ansvar.",
    },
    {
      question: "Hvorfor står uttrykket «på et område» i uaktsomhetsdefinisjonen?",
      options: ["Fordi normen varierer med området — det som er forsvarlig på et lager, er ikke det samme som på en operasjonsstue, og en drøftelse uten område har ingen målestokk", "Fordi bestemmelsen bare gjelder på de områdene der det finnes skrevne sikkerhetsforskrifter, slik at uaktsomhetsansvaret ellers ikke kan bygges på noen norm", "Fordi ansvaret er begrenset til yrkesutøvelse, slik at handlinger i privatlivet ikke rammes av uaktsomhetsbestemmelser i straffelovgivningen i det hele tatt", "Fordi vurderingen skal knyttes til det geografiske stedet handlingen ble foretatt, siden lokale forhold og lokal praksis er avgjørende for hva som er forsvarlig"],
      explanation: "Normen er relativ og hentes fra det området handlingen tilhører. Å drøfte forsvarlighet uten å si hvilket område normen hentes fra, gir en vurdering uten målestokk. Uaktsomhetsansvar forutsetter ikke skrevne forskrifter — normen kan også bygge på faglige standarder, alminnelig praksis og en risikobetraktning — og det er ikke begrenset til yrkesutøvelse.",
    },
    {
      question: "Hvilken vekt har bransjenormer, monteringsanvisninger og sikkerhetsforskrifter i den objektive vurderingen?",
      options: ["En overtrådt sikkerhetsforskrift gir normalt et avvik uten videre, mens en bransjenorm ikke er bindende, men er et sterkt uttrykk for fagets egen oppfatning av hva som kreves", "Både forskrifter og bransjenormer er bindende rettsregler, slik at ethvert brudd på dem uten videre innebærer at uaktsomhet foreligger i den konkrete saken", "Verken forskrifter eller bransjenormer har vekt i strafferetten, siden aktsomhetsnormen der må fastlegges selvstendig av retten ut fra risikoen i den enkelte sak", "Bransjenormer veier tyngst, siden de er utformet av dem som kjenner arbeidet best, mens forskrifter er politisk vedtatte og derfor mindre presise på området"],
      explanation: "Skrevne regler er de sterkeste holdepunktene, deretter bransjenormer og faglige standarder, og i tillegg kommer risikobetraktningen som alltid er der. En bransjenorm er ikke en rettsregel, men et tungt uttrykk for hva fagfolk på området mener kreves. I en besvarelse skal kilden navngis og innholdet gjengis før avviket konstateres — «han opptrådte uforsvarlig» uten oppgitt norm er en påstand.",
    },
    {
      question: "En regel om støvmasker er brutt, men skaden skyldes et fall. Hva betyr regelbruddet for aktsomhetsvurderingen?",
      options: ["Lite — normen må verne mot den risikoen som faktisk slo til, og bruddet sier derfor ingenting om aktsomheten ved fallet", "Mye — ethvert brudd på en sikkerhetsregel på arbeidsstedet viser at gjerningspersonen har opptrådt uforsvarlig, og dermed er det objektive leddet oppfylt", "Ingenting — brudd på skrevne regler teller ikke i uaktsomhetsvurderingen", "Det avgjørende — bruddet flytter bevisbyrden over på gjerningspersonen, som da må godtgjøre at han ellers opptrådte forsvarlig på arbeidsstedet den dagen"],
      explanation: "Dette er den viktige begrensningen ved skrevne normer: ikke ethvert brudd på en regel er uaktsomhet, fordi regelen kan verne noe annet enn den risikoen som slo til. Brudd på skrevne regler har for øvrig stor vekt der de treffer riktig risiko — de er de sterkeste holdepunktene for hva forsvarlig opptreden krever. Uaktsomhetsvurderingen innebærer heller ingen omvendt bevisbyrde.",
    },
    {
      question: "Hva er tillatt risiko, og hva gjør begrepet i vurderingen?",
      options: ["Det er den faren rettsordenen har akseptert som del av alminnelig virksomhet, og begrepet flytter spørsmålet fra «var handlingen farlig?» til «var handlingen uforsvarlig?»", "Det er den risikoen den skadelidte selv har akseptert ved å delta i aktiviteten, og begrepet gjør at samtykket fra ham utelukker ansvar for den som handlet", "Det er den risikoen som er så liten at den kan ses bort fra, og begrepet gjør at bagatellmessige farer aldri kan bære et uaktsomhetsansvar etter loven", "Det er den risikoen en forsikring dekker, og begrepet gjør at forhold som er dekket av en ansvarsforsikring, faller utenfor det strafferettslige ansvaret"],
      explanation: "Å kjøre bil, drive bygg og anlegg, spille fotball og utføre kirurgi innebærer alle risiko, og likevel er det ikke uaktsomt å gjøre det. Bare risikoen som ligger ut over det aksepterte, kan bære uaktsomhet, og grensen går ved reglene og standardene for aktiviteten. Tillatt risiko er et moment i aktsomhetsvurderingen — noe annet enn rettsstridsreservasjonen, som ligger i det første straffbarhetsvilkåret.",
    },
    {
      question: "Hvorfor må handlingsalternativet navngis i en uaktsomhetsdrøftelse?",
      options: ["Fordi uaktsomhet er brudd på en handlenorm, og en norm uten et konkret alternativ er innholdsløs — «han burde vært mer forsiktig» sier ingenting, «han skulle kontrollert bæreevnen før innfesting» sier alt", "Fordi retten er bundet av det handlingsalternativet påtalemyndigheten har angitt i tiltalen, og fordi en besvarelse som bygger på et annet alternativ enn det tiltalen nevner, dermed faller utenfor den saken oppgaven gjelder", "Fordi alternativet avgjør hvilken strafferamme som kommer til anvendelse, siden bestemmelsene om uaktsomhet gjennomgående har flere ledd med ulike rammer", "Fordi alternativet viser hvor stor skade som kunne vært unngått, og fordi det er skadepotensialet som avgjør om uaktsomheten skal anses som grov"],
      explanation: "Alternativet er det han skulle ha gjort i stedet, og drøftelsen er ikke ferdig før det er navngitt. Det avgjør dessuten om avviket i det hele tatt hadde betydning: var det eneste alternativet like risikabelt, er det vanskelig å bebreide ham for valget. At alternativet ville hindret følgen, er derimot et objektivt spørsmål om årsakssammenheng, som drøftes et annet sted.",
    },
    {
      question: "Hvilke tre momenter styrer hvor streng forsvarlighetsnormen er?",
      options: ["Sannsynligheten for at noe går galt, alvoret i den mulige følgen, og kostnaden ved den forholdsregelen som ville hindret den", "Sannsynligheten for at noe går galt, gjerningspersonens erfaring på området, og hvor lenge den farlige situasjonen fikk vedvare før noe skjedde", "Alvoret i følgen, antallet personer i fare, og vinningen ved handlingen", "Hvor vanlig handlemåten er på området, om gjerningspersonen tidligere er straffet for liknende forhold, og hvor lett skaden lot seg reparere i ettertid"],
      explanation: "De tre momentene virker sammen: jo mer sannsynlig og jo mer alvorlig følgen er, og jo enklere forholdsregelen er, desto strengere er kravet. En triviell forholdsregel mot en alvorlig følge er nesten alltid påkrevet, selv om sannsynligheten er lav. Erfaring hører til den subjektive siden, og sannsynligheten er her et objektivt moment — i straffeloven § 22 bokstav b gjelder den derimot hva gjerningspersonen selv regnet med.",
    },
    {
      question: "Hvordan virker gjerningspersonens personlige forutsetninger inn på bebreidelsen?",
      options: ["Begge veier — manglende opplæring kan svekke bebreidelsen, mens erfaring og fagkunnskap skjerper kravet, fordi han da hadde bedre forutsetninger for å se risikoen", "Bare i formildende retning — forutsetningene kan senke bebreidelsen der personen har lite erfaring, men de kan aldri gjøre kravet strengere enn den alminnelige normen", "Bare i skjerpende retning — forutsetningene brukes til å heve kravet overfor fagfolk, mens manglende erfaring aldri kan tas i betraktning til gjerningspersonens gunst", "Ikke i det hele tatt — forutsetningene hører til den objektive siden, der de brukes til å fastlegge hvilken norm som gjelder på det aktuelle området"],
      explanation: "Forutsetningene virker begge veier: en lærling i første uke kan ha vanskelig for å bebreides for å bryte en norm han ikke har lært, mens en erfaren fagperson kan bebreides for å overse noe en nybegynner ikke kunne sett. Merk at det er bebreidelsen som varierer, ikke normen — normen gjelder arbeidet, ikke personen, og forutsetningene hører derfor til den subjektive siden.",
    },
    {
      question: "Hva gjelder for den som påtar seg en oppgave han ikke har forutsetninger for å utføre forsvarlig?",
      options: ["Manglende kompetanse fritar ikke — bebreidelsen kan i stedet flyttes til beslutningen om å påta seg oppgaven i det hele tatt", "Manglende kompetanse fritar ham, siden den subjektive siden nettopp er ment å skjerme den som ikke hadde forutsetninger for å oppfylle normen på området", "Manglende kompetanse senker normen tilsvarende, slik at han bedømmes etter hva en person med hans kunnskaper kunne ha oppnådd i den samme situasjonen", "Manglende kompetanse er uten betydning, siden uaktsomhetsvurderingen utelukkende bygger på en objektiv norm og ikke tar hensyn til personen som handlet"],
      explanation: "Den som påtar seg en oppgave han ikke har forutsetninger for, kan bebreides for nettopp det. Normen senkes ikke: kravet om å kontrollere bæreevnen gjelder arbeidet, ikke personen. Uaktsomhetsvurderingen tar for øvrig hensyn til personen — det er hele poenget med det subjektive leddet i straffeloven § 23 første ledd — men ikke slik at den som velger å utføre arbeidet, går fri fordi han manglet kunnskap.",
    },
    {
      question: "Hva kreves for at uaktsomheten er grov etter straffeloven § 23 annet ledd?",
      options: ["At handlingen er svært klanderverdig og at det er grunnlag for sterk bebreidelse — begge deler må være til stede, og de speiler de to leddene i første ledd", "At handlingen har ført til en alvorlig følge, siden grovheten etter bestemmelsen måles ut fra hvor stor skaden ble for den som ble rammet av forholdet", "At gjerningspersonen så risikoen og handlet likevel, siden det er den bevisste uaktsomheten som utgjør den kvalifiserte formen bestemmelsen beskriver", "At gjerningspersonen har brutt en skreven sikkerhetsforskrift, siden brudd på slike regler etter fast praksis alltid regnes som grovt uaktsomt i strafferetten"],
      explanation: "«Svært klanderverdig» skjerper den objektive siden — avviket må være markert — og «sterk bebreidelse» skjerper den subjektive. Grovheten krever et eget avsnitt med egen begrunnelse; å legge til ordet «grovt» i konklusjonen er ikke en gradsdrøftelse. At følgen ble alvorlig, sier noe om skaden og ikke om avviket, og bevisst uaktsomhet er en annen inndeling som krysser skillet mellom simpel og grov.",
    },
    {
      question: "Hva kjennetegner et markert avvik, og hva er ikke nok til å konstatere det?",
      options: ["Kjennetegnene er at risikoen var åpenbar, at forholdsregelen var enkel og kjent, at det gjaldt en grunnleggende regel, eller at han ble advart og fortsatte likevel — at følgen ble alvorlig, er derimot ikke nok", "Kjennetegnene er at følgen ble alvorlig og at flere personer ble utsatt for fare — at risikoen var åpenbar for gjerningspersonen, er derimot uten betydning for avvikets størrelse, siden grovheten måles på virkningen og ikke på handlemåten", "Kjennetegnene er at gjerningspersonen handlet med vinnings hensikt eller for å spare tid — at forholdsregelen var enkel, er derimot et moment som taler mot at avviket var markert", "Kjennetegnene er at handlingen ble gjentatt flere ganger over tid — et enkeltstående avvik kan derimot aldri anses markert, uansett hvor stor risikoen var i den situasjonen"],
      explanation: "Et markert avvik ligger klart utenfor det som kan forklares med et øyeblikks uoppmerksomhet, og en advarsel som ble oversett, veier tungt. At følgen ble alvorlig, er derimot ikke nok: alvoret sier noe om skaden, ikke om avviket. Et lite avvik kan gi en stor skade, og et grovt avvik kan gi ingen skade i det hele tatt.",
    },
    {
      question: "Hva er bevisst uaktsomhet?",
      options: ["At gjerningspersonen så risikoen, men regnet den bort — han stolte på at det ville gå bra, at han var dyktig nok, eller at det ikke ville skje akkurat nå", "At gjerningspersonen var bevisst på at handlingen var ulovlig, men likevel valgte å gjennomføre den, slik at uvitenhet om regelen ikke kan påberopes i saken", "At gjerningspersonen bevisst valgte et handlingsalternativ som var mer risikabelt enn nødvendig, uten at han hadde tenkt over hvilken fare valget innebar", "At gjerningspersonen bevisst har unnlatt å skaffe seg den kunnskapen situasjonen krevde, slik at uvitenheten hans selv er noe han kan bebreides for"],
      explanation: "Bevisst uaktsomhet er at han tenkte tanken og avviste den. Formen ligger rett under dolus eventualis, og skillet mellom dem er den vanskeligste grensen i skyldlæren: begge ser muligheten, og forskjellen er hva de gjør med den. Den påvises av opplysninger i faktum om at han nevnte risikoen, vurderte en forholdsregel og lot være, eller var blitt advart. Kunnskap om regelen er et helt annet spørsmål.",
    },
    {
      question: "Hva er ubevisst uaktsomhet, og hvorfor er det likevel skyld?",
      options: ["At han ikke tenkte tanken i det hele tatt, men burde vært det — bebreidelsen ligger nettopp i at han ikke var oppmerksom, og normen omfatter å skaffe seg den kunnskapen situasjonen krever", "At han ikke tenkte tanken i det hele tatt, og det er derfor strengt tatt ikke skyld, men et objektivt ansvar loven har valgt å beholde på de områdene der skadepotensialet er stort nok til å forsvare det", "At han var bevisstløs eller på annen måte ute av stand til å oppfatte situasjonen, og skylden ligger da i at han hadde brakt seg selv i den tilstanden", "At han tenkte tanken uten å feste seg ved den, og skylden ligger i at han ikke undersøkte risikoen nærmere før han valgte å gjennomføre handlingen"],
      explanation: "Bebreidelsen ligger i at han ikke var oppmerksom: kravet til forsvarlig opptreden omfatter å skaffe seg den kunnskapen situasjonen krever, ikke bare å handle riktig på det man tilfeldigvis vet. Formen er praktisk viktigst i yrkessammenheng, der normen sier at man skal kontrollere, undersøke eller lese anvisningen — snekkeren som ikke sjekket bæreveggen, er ubevisst uaktsom. Det er skyld, ikke objektivt ansvar.",
    },
    {
      question: "Hvilket kontrollspørsmål skiller bevisst uaktsomhet fra dolus eventualis, og hvorfor er grensen avgjørende?",
      options: ["Godtok han følgen, eller regnet han den bort? — havner du på uaktsomhetssiden uten at bestemmelsen har et uaktsomhetsalternativ, faller ansvaret helt bort", "Så han risikoen, eller så han den ikke? — havner du på uaktsomhetssiden, blir reaksjonen mildere, men ansvaret består siden ethvert straffebud også rammer uaktsomhet", "Var risikoen stor eller liten? — havner du under sannsynlighetsovervekt, er forsettet utelukket, og forholdet må da bedømmes etter reglene om grov uaktsomhet", "Handlet han i eget interesse eller for andre? — havner du på at han handlet for andre, svekkes bebreidelsen, og forholdet bedømmes da som simpel uaktsomhet"],
      explanation: "Begge ser muligheten; forskjellen er hva de gjør med den. Godtok han følgen, er han i forsettets område etter straffeloven § 22 bokstav c; regnet han den bort, er han det ikke, uansett hvor uforsvarlig avvisningen var. Hovedregelen i § 21 gjør grensen avgjørende: to nesten identiske tankerekker kan gi straffansvar i det ene tilfellet og frifinnelse i det andre.",
    },
    {
      question: "På hvilke måter kan et straffebud gjøre uaktsomhet straffbart?",
      options: ["Ved at ordet «uaktsomt» står i gjerningsbeskrivelsen, ved et eget ledd eller punktum om uaktsom overtredelse med lavere reaksjon, eller ved at bestemmelsen krever kvalifisert uaktsomhet", "Ved at strafferammen er lav, ved at bestemmelsen står i spesiallovgivningen og ikke i straffeloven, eller ved at overtredelsen typisk skjer i yrkesutøvelse der aktsomhetsnormen allerede er streng", "Ved at bestemmelsen ikke sier noe om skyld i det hele tatt, siden hovedregelen da åpner for begge skyldformene og lar retten velge den som passer på faktum", "Ved at forarbeidene forutsetter at uaktsomhet skal rammes, selv om lovteksten selv er taus, siden lovgivers uttalte vilje er den tyngste rettskilden på området"],
      explanation: "Uaktsomhet er bare straffbart der straffebudet bestemmer det, jf. hovedregelen i straffeloven § 21 om at straffelovgivningen bare rammer forsettlige lovbrudd med mindre annet er bestemt. Tier bestemmelsen, er kravet forsett. Før du drøfter uaktsomhet, må du derfor slå fast at bestemmelsen har et uaktsomhetsalternativ — en full uaktsomhetsdrøftelse under et rent forsettsstraffebud er bortkastet arbeid.",
    },
    {
      question: "Gjelder dekningsprinsippet også ved uaktsomhet?",
      options: ["Ja — uaktsomheten må dekke hvert enkelt element i gjerningsbeskrivelsen, slik at spørsmålet er om han var uaktsom med hensyn til det elementet som er omtvistet", "Nei — dekningsprinsippet gjelder bare forsettet, mens uaktsomheten vurderes samlet ut fra hvor uforsvarlig handlemåten var sett under ett i den aktuelle situasjonen", "Ja, men bare når straffebudet krever grov uaktsomhet, siden det er kvalifikasjonen som gjør det nødvendig å knytte skylden til hvert enkelt element i beskrivelsen", "Nei — ved uaktsomhet er det tilstrekkelig at gjerningspersonen kunne bebreides for handlingen som helhet, siden det ikke gir mening å dele opp et «burde»"],
      explanation: "Dekningsprinsippet gjelder uansett skyldform. Spørsmålet er ikke om han var uaktsom i sin alminnelighet, men om han var uaktsom med hensyn til hvert enkelt element: «burde han ha forstått at veggen ikke bar?». En drøftelse som konkluderer med at «han var uaktsom» uten å si om hva, har samme svakhet som en forsettsdrøftelse uten dekningsprinsipp.",
    },
    {
      question: "Hvilken funksjon har straffeloven § 24 om uforsettlig følge?",
      options: ["Den lar en alvorlig følge få betydning for om lovbruddet er grovt, dersom gjerningspersonen har opptrådt uaktsomt med hensyn til følgen eller unnlatt etter evne å avverge den", "Den gjør en alvorlig følge straffbar som et selvstendig forhold, slik at gjerningspersonen dømmes både for handlingen og for den følgen han ikke hadde forsett om", "Den gjør en alvorlig følge straffbar uten noe krav om skyld overhodet, slik at ansvaret for følger er rent objektivt der en handling først er begått forsettlig", "Den utelukker at en følge gjerningspersonen ikke hadde forsett om, får noen betydning, slik at bare de følgene forsettet dekket, kan påvirke bedømmelsen av forholdet"],
      explanation: "Bestemmelsen lar følgen telle i grovhetsvurderingen uten å kreve forsett om den, men setter uaktsomhet som nedre grense — ansvaret er dermed ikke objektivt. Den er praktisk viktig i voldssaker, der gjerningspersonen har forsett om slaget, men ikke om den alvorlige skaden som fulgte. Følgen gir ikke et selvstendig ansvar ved siden av hovedforholdet.",
    },
    {
      question: "Hva er culpa levissima — skyldformen fra straffeloven av 1902 — og hva skal du kunne om den i dag?",
      options: ["Det var en egen, mildere skyldform i straffeloven av 1902, og den er utgått — du skal kunne at den er borte, ingenting mer, siden vilkårene har null pensumverdi", "Det er den laveste graden av uaktsomhet etter gjeldende rett, og du skal kunne vilkårene, siden den brukes der straffebudet ikke krever kvalifisert uaktsomhet", "Det er en betegnelse på ubevisst uaktsomhet i den juridiske teorien, og du skal kunne bruke den som argument der gjerningspersonen ikke tenkte tanken i det hele tatt", "Det er en skyldform som gjelder ved uforsettlige følger, og du skal kunne vilkårene, siden den fortsatt anvendes ved siden av straffeloven § 24 i voldssaker"],
      explanation: "Culpa levissima falt bort med straffeloven 2005 og er ikke gjeldende rett. Å kjenne igjen et utgått institutt er nyttig for den som trener på gamle oppgavesett; å kunne innholdet i det er det ikke. Den uforsettlige følgen behandles i dag etter straffeloven § 24, med uaktsomhet som nedre grense — og ubevisst uaktsomhet er en form innenfor § 23, ikke et navn på den utgåtte skyldformen.",
    },
    {
      question: "Hva følger av straffeloven § 25 om faktisk uvitenhet?",
      options: ["Første ledd sier at enhver bedømmes etter sin oppfatning av den faktiske situasjonen, og annet ledd at handlingen straffes når uvitenheten er uaktsom og uaktsomt lovbrudd er straffbart", "Første ledd sier at enhver bedømmes etter den faktiske situasjonen slik den objektivt var, og annet ledd at en uriktig oppfatning av den bare får betydning i de tilfellene der feiltakelsen var unnskyldelig", "Første ledd sier at uvitenhet om faktum aldri fritar, og annet ledd at uvitenhet om regelen fritar der den er aktsom, slik at de to formene behandles hver for seg", "Første ledd sier at uvitenhet om faktum fritar fullstendig, og annet ledd at ansvaret likevel består der gjerningspersonen hadde en særlig plikt til å undersøke forholdet"],
      explanation: "Regelen er broen mellom villfarelseslæren og uaktsomhetslæren: den som tok feil av et element, har ikke forsett om det — men kan likevel rammes av et uaktsomhetsalternativ dersom feiltakelsen selv var uforsvarlig. Vurderingen gjøres etter § 23: hva krevde forsvarlig opptreden av undersøkelser her, og kan han bebreides for ikke å ha gjort dem? Uvitenhet om regelen hører derimot i § 26.",
    },
    {
      question: "Hva er forskjellen på forsett og uaktsomhet, formulert i én setning?",
      options: ["Forsettet spør hva gjerningspersonen faktisk regnet med og bestemte seg for, uaktsomheten hva han burde ha skjønt og gjort", "Forsettet spør hvor sannsynlig følgen var, uaktsomheten hvor alvorlig den ble — skillet er dermed en gradsforskjell mellom to punkter på den samme skalaen", "Forsettet spør om handlingen var villet, uaktsomheten om den var uheldig", "Forsettet spør om gjerningspersonen kjente regelen, uaktsomheten om han burde ha kjent den — og begge deler avgjøres ut fra hva han visste om loven"],
      explanation: "Forskjellen skal formuleres eksplisitt i én setning, ikke bare antydes gjennom to definisjoner. Skillet er ikke en gradsforskjell i sannsynlighet — det er skillet mellom forsettsformene i straffeloven § 22, ikke mellom forsett og uaktsomhet. Kunnskap om loven er dessuten ikke en del av forsettet, jf. § 22 annet ledd. Det som løfter svaret, er å vise grensetilfellet: både bevisst uaktsomhet og dolus eventualis ser muligheten.",
    },
  ],
  'juroff1500-3-4': [
    {
      question: "Faktum forteller at gjerningspersonen trodde noe annet enn det som var tilfellet. Hvilket spørsmål skal du alltid stille først?",
      options: ["Hva han tok feil av — gjaldt feilen et element i gjerningsbeskrivelsen, eller gjaldt den om handlingen var lovlig?", "Hvilken virkning villfarelsen har — fjerner den forsettet, eller er den bare en selvstendig grunn til frifinnelse?", "Om det var forsvarlig å tro det han trodde, altså om han burde undersøkt situasjonen nærmere før han handlet", "Om straffebudet han har overtrådt, i det hele tatt har et alternativ som rammer uaktsom overtredelse av regelen"],
      explanation: "Riktig svar er å spørre hva han tok feil av. Gjaldt feilen et element i gjerningsbeskrivelsen, er villfarelsen faktisk; gjaldt den om handlingen var lov, er den rettslig. Å svare på virkningen først er nettopp kortslutningen kapitlet advarer mot — da har du valgt regel uten begrunnelse. Aktsomhetsvurderingen og spørsmålet om uaktsomhetsalternativ kommer begge etter at feilen er plassert.",
    },
    {
      question: "Hva slår straffeloven § 25 første ledd fast?",
      options: ["At enhver skal bedømmes etter sin egen oppfatning av den faktiske situasjonen på handlingstidspunktet", "At enhver skal bedømmes etter den faktiske situasjonen slik den i ettertid viser seg å ha vært i virkeligheten", "At enhver skal bedømmes etter hva en alminnelig forsvarlig person ville oppfattet i nøyaktig den samme situasjonen", "At enhver skal bedømmes etter sin egen oppfatning av hvilke rettsregler som gjaldt da han utførte handlingen"],
      explanation: "Riktig svar er at enhver bedømmes etter sin oppfatning av den faktiske situasjonen på handlingstidspunktet — verden slik han trodde den var, ikke slik den faktisk var. Regelen er den lovfestede følgen av dekningsprinsippet. Den bygger verken på hva som viste seg i ettertid eller på hva en gjennomsnittsperson ville oppfattet, og oppfatningen av hvilke regler som gjaldt, hører i straffeloven § 26.",
    },
    {
      question: "Hvilken virkning har faktisk uvitenhet?",
      options: ["Den utelukker forsettet om det elementet feilen gjaldt, slik at et rent forsettsstraffebud ikke kan anvendes", "Den utelukker ansvaret helt, slik at heller ikke noe annet straffebud kan anvendes på det samme forholdet", "Den lar forsettet stå, men gir retten adgang til å frifinne når særlige grunner taler for at han går fri", "Den lar forsettet stå, og virker i stedet som en formildende omstendighet når straffen skal utmåles"],
      explanation: "Riktig svar er at faktisk uvitenhet utelukker forsettet om det elementet feilen gjaldt. Uvitenheten fjerner forsettet, ikke handlingen — er flere straffebud i bildet, kan et annet fortsatt ramme, og gjelder feilen bare ett element, kan andre deler av forholdet stå igjen. Adgangen til å frifinne og betydningen ved utmålingen hører til helt andre regler.",
    },
    {
      question: "Straffeloven § 25 annet ledd åpner uaktsomhetssporet. Hva er det som skal vurderes?",
      options: ["Om selve feiltakelsen var uforsvarlig — burde han undersøkt, spurt eller kontrollert før han handlet?", "Om selve handlingen var uforsvarlig — burde han latt være å gjøre det han gjorde i den situasjonen?", "Om han hadde en rimelig grunn til å tro at handlingen han foretok, var tillatt etter de reglene som gjaldt", "Om en alminnelig lovlydig borger ville hatt den samme oppfatningen av hva loven krevde av ham akkurat der"],
      explanation: "Riktig svar er at det er feiltakelsen som vurderes, ikke handlingen: var det uforsvarlig å tro det han trodde? Vurderingen gjøres etter straffeloven § 23, med en objektiv side om hva forsvarlig opptreden krevde av undersøkelser og en subjektiv side om han kan bebreides for ikke å ha gjort dem. Spørsmålet om han hadde grunn til å tro at handlingen var tillatt, gjelder derimot rettsuvitenhet.",
    },
    {
      question: "Hvordan er hovedregelen i straffeloven § 26 formulert?",
      options: ["Den som er ukjent med at handlingen er ulovlig på grunn av uvitenhet om rettsregler, straffes når uvitenheten er uaktsom", "Den som er ukjent med at handlingen er ulovlig på grunn av uvitenhet om rettsregler, går fri uansett om uvitenheten var uaktsom", "Den som er ukjent med at handlingen er ulovlig, mangler forsett, og kan da bare straffes etter et uaktsomhetsalternativ", "Den som er ukjent med at handlingen er ulovlig, straffes bare når han har hatt til hensikt å omgå det aktuelle regelverket"],
      explanation: "Riktig svar er at han straffes når uvitenheten er uaktsom. Lest baklengs betyr det at lovuvitenhet bare fritar når den var aktsom, og at aktsomheten dermed er unntaket. Uvitenheten fjerner ikke forsettet, jf. straffeloven § 22 annet ledd, og bestemmelsen stiller ikke noe krav om at han skal ha villet omgå regelverket.",
    },
    {
      question: "Hvilken bestemmelse er hjemmelen for at rettsuvitenhet ikke fjerner forsettet?",
      options: ["Straffeloven § 22 annet ledd, som sier at forsett foreligger selv om lovbryteren ikke er kjent med at handlingen er ulovlig", "Straffeloven § 25 første ledd, som sier at enhver skal bedømmes etter sin egen oppfatning av den faktiske situasjonen på handlingstidspunktet", "Straffeloven § 21, som sier at straffelovgivningen bare rammer forsettlige lovbrudd med mindre annet er bestemt", "Straffeloven § 23, som beskriver når en handling er uaktsom og hvordan bebreidelsen skal vurderes konkret"],
      explanation: "Riktig svar er straffeloven § 22 annet ledd: forsett foreligger selv om lovbryteren ikke visste at handlingen var ulovlig. Det er nettopp derfor rettsuvitenheten virker som en selvstendig frifinnelsesgrunn ved siden av skyldkravet, og ikke gjennom det. Bestemmelsen om bedømmelse etter egen oppfatning av situasjonen gjelder faktisk uvitenhet, og de to andre bestemmelsene gjelder henholdsvis skyldformens rekkevidde og selve uaktsomhetsvurderingen.",
    },
    {
      question: "Hvorfor sier kapitlet at ordet «aktsom» har motsatt rolle i straffeloven § 25 annet ledd og i § 26?",
      options: ["I § 25 annet ledd er uaktsomhet et ansvarsgrunnlag som gjør at han kan straffes, mens aktsomhet i § 26 er en frifinnelsesgrunn", "I § 25 annet ledd måles aktsomheten mot en objektiv norm, mens § 26 utelukkende bygger på hva den enkelte selv hadde forutsetninger for å forstå", "I § 25 annet ledd gjelder aktsomheten forholdet på handlingstidspunktet, mens § 26 krever at han også opptrådte aktsomt i tiden etter handlingen", "I § 25 annet ledd avgjør aktsomheten hvor streng straffen blir, mens den i § 26 avgjør om saken i det hele tatt kan reises av påtalemyndigheten"],
      explanation: "Riktig svar er at uaktsomhet i § 25 annet ledd er et ansvarsgrunnlag — er du uaktsom, straffes du for uaktsomhet der bestemmelsen åpner for det — mens aktsomhet i § 26 er en frifinnelsesgrunn: er du aktsom, går du fri. Ordet er det samme, rollen er motsatt. Begge vurderinger knytter seg til handlingstidspunktet, begge har en objektiv og en subjektiv side, og ingen av dem gjelder utmålingen eller påtalespørsmålet.",
    },
    {
      question: "Hva taler for at en rettsuvitenhet var aktsom?",
      options: ["At han har innhentet råd fra en myndighet med ansvar for området, eller at regelen er ny, uklar eller nylig endret", "At han aldri hadde hørt om bestemmelsen, og at han syntes den var urimelig da han først ble kjent med innholdet", "At andre i samme bransje gjør nøyaktig det samme, og at ingen av dem hittil er blitt møtt med noen reaksjon", "At han handlet helt åpent uten å skjule noe, og at han forklarte seg med en gang forholdet ble oppdaget"],
      explanation: "Riktig svar er råd fra en myndighet med ansvar for området, eller at regelen er ny, uklar eller nylig endret; motstridende informasjon fra det offentlige trekker samme vei. At han ikke visste, at han syntes regelen var urimelig, eller at andre gjør det samme, er uttrykkelig ikke nok. At han handlet åpent, er et bevismoment for at troen var reell — ikke et moment som gjør uvitenheten aktsom.",
    },
    {
      question: "En næringsdrivende har fått et uriktig svar fra et offentlig kontor med ansvar for området. Hva sier kapitlet om betydningen av dette?",
      options: ["Det er det momentet som tyngst taler for aktsomhet, men det må fortsatt vurderes om han spurte riktig organ og ga fullstendige opplysninger", "Det gjør uvitenheten aktsom, fordi rettsordenen ikke kan kreve at borgeren skal vite bedre enn det organet som selv forvalter regelen", "Det har ingen selvstendig betydning, fordi enhver selv er ansvarlig for å gjøre seg kjent med de reglene som gjelder for virksomheten hans", "Det veier like tungt som et råd fra en bransjekollega, siden begge deler bare er annenhåndsopplysninger om hva regelen går ut på"],
      explanation: "Riktig svar er at momentet er sterkt, men ikke avgjørende: fire ting må fortsatt vurderes — om han spurte riktig organ, om han ga fullstendige opplysninger, om svaret var konkret nok til å dekke situasjonen, og om han hadde grunn til å tvile på det. Begrunnelsen om at man ikke kan kreve at borgeren vet bedre enn organet, er nettopp derfor rådet veier tungt, men den gjør det ikke til en fasit. Et råd fra en bransjekollega veier langt mindre.",
    },
    {
      question: "Ola tar med seg en sekk fordi han feilaktig tror at treningssenteret eier den. Hvordan behandles en feil om et eierforhold?",
      options: ["Normalt som faktisk uvitenhet etter straffeloven § 25, fordi eierforholdet er et element skylden skulle ha dekket", "Normalt som rettsuvitenhet etter straffeloven § 26, fordi spørsmålet om hvem som eier noe, i seg selv er et rettslig spørsmål", "Som et rent bevisspørsmål, som avgjøres uten at reglene om villfarelse kommer inn i bildet i det hele tatt", "Som en egen mellomkategori der ansvaret faller bort dersom feilen framstår som forståelig ut fra omstendighetene"],
      explanation: "Riktig svar er at slike tilfeller — den uegentlige rettsvillfarelsen — normalt løses som faktisk uvitenhet etter straffeloven § 25. Begrunnelsen er dekningsprinsippet: gjelder feilen et element i gjerningsbeskrivelsen, rekker ikke forsettet dit, uansett om elementet er av rettslig art. At eierforhold er et rettslig spørsmål, er nettopp det som gjør varianten forvekslingsutsatt, men det flytter den ikke til § 26.",
    },
    {
      question: "Hva er kontrollgrepet kapitlet anbefaler for å plassere en villfarelse riktig?",
      options: ["Skriv opp hva gjerningspersonen visste; er alle elementene i gjerningsbeskrivelsen dekket, kan feilen ikke være faktisk", "Skriv opp hva gjerningspersonen burde ha visst om situasjonen; er alt han burde visst dekket, kan feilen ikke være rettslig", "Undersøk om han handlet åpent; gjorde han det, taler mye for at feilen gjaldt regelen og ikke selve situasjonen", "Begynn med virkningen; fritar villfarelsen ham helt, må den ha vært rettslig, og ellers er den faktisk"],
      explanation: "Riktig svar er å liste opp hva gjerningspersonen visste. Er alle elementene i gjerningsbeskrivelsen dekket av kunnskapen hans, kan feilen per definisjon ikke være faktisk — og da er den rettslig. Grepet gjør plasseringen etterprøvbar i stedet for påstått. Å begynne med virkningen er den kortslutningen kapitlet advarer mot, og at han handlet åpent, sier bare noe om troen var reell.",
    },
    {
      question: "En butikkeier selger en aldersbegrenset vare til en kunde han feilaktig tror er over aldersgrensen. Hvordan plasseres feilen?",
      options: ["Som faktisk uvitenhet, fordi han kjenner aldersgrensen og bare tar feil av hvor gammel kunden faktisk var", "Som rettsuvitenhet, fordi aldersgrensen følger av en rettsregel som han har misforstått rekkevidden av", "Som uegentlig rettsvillfarelse, fordi alder er en omstendighet som først får betydning gjennom en rettsregel", "Som ingen villfarelse i det hele tatt, fordi alder er en omstendighet skylden uansett ikke behøver å dekke"],
      explanation: "Riktig svar er faktisk uvitenhet. Selgeren kjenner som regel aldersgrensen; det han tar feil av, er hvor gammel den andre var, altså en faktisk omstendighet som er et element skylden skulle dekket. Drøftelsen havner da som regel i uaktsomhetssporet etter straffeloven § 25 annet ledd, der kontrollplikten er streng fordi kontrollen består i å be om legitimasjon. Merk at enkelte bestemmelser har egne, strengere aktsomhetsregler om alder.",
    },
    {
      question: "En mann tror feilaktig at han blir angrepet, og slår først. Hvordan plasseres villfarelsen?",
      options: ["Som faktisk uvitenhet etter § 25 første ledd — han kjenner nødvergeregelen, men tar feil av om vilkårene forelå", "Som rettsuvitenhet etter § 26 — han tar feil av hvor langt retten til å forsvare seg strekker seg i en slik situasjon", "Som lovlig nødverge etter § 18 første ledd — han bedømmes som om angrepet forelå, og handlingen blir dermed lovlig", "Som villfarelse om årsaksforløpet — han tar feil av hvordan den situasjonen han sto i, faktisk utviklet seg videre"],
      explanation: "Riktig svar er faktisk uvitenhet etter straffeloven § 25 første ledd: han kjenner regelen, men tar feil av om vilkårene foreligger, og bedømmes derfor etter sin oppfatning av situasjonen. Det som gjenstår, er om troen var uaktsom og om straffebudet rammer uaktsomhet. Handlingen blir ikke lovlig etter nødvergebestemmelsen, for den krever et reelt ulovlig angrep — og feil om hvor langt forsvarsretten rekker, ville vært en feil om regelen.",
    },
    {
      question: "En mann vet at angrepet er over, men tror at man alltid har lov til å svare med samme mynt. Hvilken regel gjelder da?",
      options: ["Straffeloven § 26 om rettsuvitenhet, fordi han tar feil av hvor langt retten til å forsvare seg strekker seg", "Straffeloven § 25 første ledd om faktisk uvitenhet, fordi han tar feil av den situasjonen han faktisk befant seg i", "Straffeloven § 18 første ledd om nødverge, fordi han handlet i den tro at forsvaret holdt seg innenfor loven", "Straffeloven § 25 annet ledd om uaktsom uvitenhet, fordi han burde ha undersøkt hvor langt forsvarsretten rakk"],
      explanation: "Riktig svar er straffeloven § 26. Han har rett oppfatning av alt som skjedde — angrepet var over, og det visste han — men tar feil av hva regelen tillater. Det er en feil om regelen, ikke om situasjonen, så bestemmelsen om bedømmelse etter egen oppfatning av faktum passer ikke. Aktsomheten skal riktignok vurderes, men den vurderes etter § 26, der aktsomhet er en frifinnelsesgrunn.",
    },
    {
      question: "Gjerningspersonen regner med at slaget dreper, men det er fallet mot fortauskanten som gjør det. Hva er hovedregelen ved villfarelse om årsaksforløpet?",
      options: ["Slike avvik bryter normalt ikke forsettet, når følgen er av den arten han regnet med og forløpet ikke er helt upåregnelig", "Slike avvik bryter alltid forsettet, fordi skylden også må dekke den nøyaktige måten følgen faktisk inntraff på", "Slike avvik behandles som rettsuvitenhet, fordi spørsmålet om årsakssammenheng er et rettslig og ikke et faktisk spørsmål", "Slike avvik gjør at forholdet må bedømmes som forsøk, fordi følgen ikke inntraff på den måten han hadde tenkt seg"],
      explanation: "Riktig svar er at avvik i årsaksforløpet normalt ikke bryter forsettet. Det kreves ikke at gjerningspersonen forutså det nøyaktige forløpet, så lenge følgen er av den arten han regnet med. Grensen går ved forløp som ligger så langt fra det han forestilte seg at følgen ikke lenger kan sies å være hans verk. Temaet er dessuten et sted man lett skriver seg bort — én til to setninger er riktig dimensjonering.",
    },
    {
      question: "Gjerningspersonen tar feil av en omstendighet som gjør forholdet grovt. Hva blir virkningen?",
      options: ["Han kan straffes for den ordinære overtredelsen, men ikke for den grove, siden skylden må dekke også de omstendighetene som gjør forholdet grovt", "Han kan straffes for den grove overtredelsen likevel, siden de skjerpende omstendighetene er objektive vilkår som skylden ikke behøver å dekke", "Han går fri for hele forholdet, siden skylden hans ikke dekker alle omstendighetene i den bestemmelsen som er brukt mot ham", "Han kan straffes for forsøk på den grove overtredelsen, siden forsettet hans ikke rakk fram til det fullbyrdede forholdet"],
      explanation: "Riktig svar er at ansvaret flyttes til den mildere varianten. Skylden må dekke også de omstendighetene som gjør forholdet grovt, og tar han feil av dem, faller den grove varianten bort — men ikke ansvaret som sådan. Feilen gir altså en presis mellomkonklusjon, ikke et alt eller intet. Unntaket å kjenne er straffeloven § 24 om uforsettlige følger.",
    },
    {
      question: "Hva er unntaket i straffeloven § 24 som kapitlet ber deg kjenne?",
      options: ["At en uforsettlig følge likevel teller i grovhetsvurderingen når gjerningspersonen var uaktsom med hensyn til den", "At en uforsettlig følge aldri teller i grovhetsvurderingen, uansett hvor uforsvarlig gjerningspersonen har opptrådt", "At en uforsettlig følge gjør at hele forholdet må bedømmes etter et uaktsomhetsalternativ dersom et slikt finnes", "At en uforsettlig følge fører til at straffen settes under minstestraffen i det straffebudet som er anvendt i saken"],
      explanation: "Riktig svar er at følgen likevel teller i grovhetsvurderingen når gjerningspersonen var uaktsom med hensyn til den — eller unnlot å avverge den etter å ha blitt oppmerksom på at den kunne inntre. Bestemmelsen er et unntak fra kravet om at skylden skal dekke de skjerpende omstendighetene; den gjør verken hele forholdet til en uaktsomhetssak eller noe med minstestraffen.",
    },
    {
      question: "Hva bestemmer straffeloven § 25 tredje ledd om uvitenhet som skyldes selvforskyldt rus?",
      options: ["Det ses bort fra en slik uvitenhet, og lovbryteren bedømmes som om han hadde vært edru i situasjonen", "En slik uvitenhet fritar på samme måte som annen faktisk uvitenhet om den situasjonen han sto i", "En slik uvitenhet gjør at straffen skjerpes ut over den rammen det aktuelle straffebudet ellers setter", "En slik uvitenhet vurderes etter reglene om rettsuvitenhet, siden han selv er å bebreide for rusinntaket"],
      explanation: "Riktig svar er at det ses bort fra uvitenheten, og at lovbryteren bedømmes som om han var edru; det samme gjelder ved en selvforskyldt utilregnelighetstilstand. Regelen nøytraliserer villfarelsen — uten den ville rusen systematisk fjernet forsettet. Den er ingen skjerpingsregel, og den flytter ikke saken over i reglene om rettsuvitenhet.",
    },
    {
      question: "Hvor i en praktikumsbesvarelse hører de to villfarelsene hjemme?",
      options: ["Faktisk uvitenhet drøftes inne i skyldvilkåret, mens rettsuvitenhet drøftes etter at skyldkravet er konstatert oppfylt", "Begge drøftes inne i skyldvilkåret, siden begge gjelder hva gjerningspersonen faktisk oppfattet da han handlet", "Begge drøftes etter skyldvilkåret, siden begge er selvstendige grunner til at ansvaret likevel kan falle bort", "Faktisk uvitenhet drøftes etter skyldvilkåret, mens rettsuvitenhet hører hjemme under det fjerde straffbarhetsvilkåret"],
      explanation: "Riktig svar er at faktisk uvitenhet hører inne i skyldvilkåret som en del av forsettsdrøftelsen, mens rettsuvitenhet kommer etter at skyldkravet er konstatert oppfylt, som en selvstendig grunn til at ansvaret likevel kan falle bort. Plasseringen viser at du har forstått hvordan de to virker: en besvarelse som drøfter rettsuvitenhet inne i forsettsdrøftelsen, signaliserer at den tror uvitenheten fjerner forsettet.",
    },
    {
      question: "Straffebudet krever forsett og har intet uaktsomhetsalternativ, og gjerningspersonen tok feil av et element. Hva følger av det?",
      options: ["Saken er over når forsettet faller bort, og en drøftelse av om feiltakelsen var uforsvarlig, er uten konsekvens", "Retten må likevel vurdere om feiltakelsen var uforsvarlig, siden uaktsomhet alltid er straffbart ved siden av forsett", "Ansvaret faller bare bort dersom feiltakelsen i tillegg var aktsom, slik regelen om rettsuvitenhet krever av ham", "Forholdet må da behandles etter reglene om rettsuvitenhet, siden det ikke finnes noe uaktsomhetsspor i saken"],
      explanation: "Riktig svar er at saken er over. Finnes det ikke noe uaktsomhetsalternativ, spiller det ingen rolle hvor uforsvarlig feiltakelsen var, og å drøfte aktsomheten er da å drøfte noe uten konsekvens. Én setning som slår fast at uaktsomhetssporet ikke er åpent, er riktig proporsjon. Kravet om aktsomhet hører til rettsuvitenheten, som er noe annet enn den faktiske.",
    },
    {
      question: "En kandidat skriver: «Ola trodde han hadde rett til å holde tilbake sekken, og manglet derfor forsett.» Hvilken feil er dette?",
      options: ["Feil #2 — å blande de to villfarelsene; rettsuvitenhet fjerner ikke forsettet, jf. straffeloven § 22 annet ledd", "Feil #1 — å gjengi et innøvd standardsvar uten å bygge inn et selvvalgt eksempel som viser egen forståelse", "Å drøfte aktsomheten i en sak der straffebudet ikke har noe alternativ som rammer uaktsom overtredelse", "Å behandle en uegentlig rettsvillfarelse som faktisk uvitenhet i stedet for å plassere den i straffeloven § 26"],
      explanation: "Riktig svar er feil #2, å blande de to villfarelsene. Ola visste hva sekken var og hvem den tilhørte, så alle elementene var dekket av forsettet; det han tok feil av, var regelen. Forsett foreligger selv om lovbryteren ikke visste at handlingen var ulovlig. Merk at den uegentlige rettsvillfarelsen nettopp skal behandles som faktisk uvitenhet — det er den motsatte plasseringen som er feil.",
    },
    {
      question: "Hvorfor er terskelen for aktsom rettsuvitenhet lagt høyt?",
      options: ["Fordi uvitenhet ellers ville lønne seg: den som aldri satte seg inn i reglene, ville stått friere enn den som gjorde det", "Fordi de fleste regler er så lette å finne fram til at ingen med rimelighet kan påstå å ha vært ukjent med innholdet", "Fordi uvitenhet om regelverket nesten alltid henger sammen med et ønske om å slippe unna det ansvaret reglene pålegger", "Fordi domstolene ellers måtte ta stilling til hva hver enkelt tiltalt visste, og den bevisvurderingen er de avskåret fra"],
      explanation: "Riktig svar er at uvitenhet ellers ville lønne seg, og at håndhevingen ville blitt avhengig av hva hver enkelt hevdet å ha visst. Det er en bevisst rettspolitisk avveining, ikke en påstand om at alle regler er lette å finne — tvert imot er det nettopp fordi regelverket er omfattende, at § 26 har ventilen for aktsom uvitenhet. Domstolene er heller ikke avskåret fra å vurdere hva noen visste.",
    },
    {
      question: "Hvordan forholder rettsuvitenhetsregelen seg til legalitetsprinsippets krav om forutberegnelighet?",
      options: ["Prinsippet krever at regelen er tilgjengelig og klar, ikke at hver enkelt faktisk har lest den før han handler", "Prinsippet krever at enhver faktisk kjenner regelen før den kan anvendes mot ham i en straffesak for domstolene", "Prinsippet gjelder bare domstolenes tolkning av straffebud og har ingen betydning for villfarelsesspørsmålet", "Prinsippet er satt til side i § 26, fordi hensynet til effektiv håndheving her veier tyngre enn forutberegnelighet"],
      explanation: "Riktig svar er at prinsippet krever tilgjengelighet og klarhet, ikke faktisk kunnskap hos den enkelte — er kravet oppfylt, har borgeren hatt muligheten til å innrette seg. Spenningen er likevel reell ved regler som er svært utilgjengelige, nylig endrede eller motstridende, og det er nettopp der aktsomhetsunntaket slår inn og argumentet fra legalitetsprinsippet har mest kraft.",
    },
    {
      question: "En person mistenker at gjenstanden tilhører en annen, men lar bevisst være å sjekke. Hva sier kapitlet om et slikt tilfelle?",
      options: ["Han er ikke uten videre i god tro, og forholdet kan falle inn under dolus eventualis fordi han valgte å handle likevel", "Han er i god tro så lenge han faktisk ikke visste, og forholdet behandles da som en helt vanlig faktisk uvitenhet", "Han bedømmes etter reglene om rettsuvitenhet, siden det å unnlate å undersøke er noe han kan bebreides for", "Han straffes for uaktsomhet uansett hvordan straffebudet er formulert, siden det å unnlate å sjekke alltid er uforsvarlig"],
      explanation: "Riktig svar er at den bevisste unnlatelsen av å undersøke ikke uten videre gir god tro, og at tilfellet kan falle inn under dolus eventualis: han holdt det for mulig at gjenstanden tilhørte en annen, og tok den likevel. Villfarelsen gjelder en indre tilstand som må sluttes av ytre omstendigheter. Og uaktsomhetsansvar forutsetter alltid at straffebudet faktisk rammer uaktsomhet.",
    },
  ],
  'juroff1500-3-5': [
    {
      question: "Hva går fiksjonsregelen ved selvforskyldt rus ut på?",
      options: ["At den som er i selvforskyldt rus, bedømmes som om han hadde vært edru da handlingen ble begått", "At den som er i selvforskyldt rus, bedømmes strengere enn den edru fordi han selv har skapt tilstanden", "At den som er i selvforskyldt rus, bedømmes etter sin egen oppfatning av situasjonen slik han faktisk så den", "At den som er i selvforskyldt rus, bedømmes etter hvor mye han husker av hendelsen når han er blitt edru igjen"],
      explanation: "Riktig svar er at han bedømmes som om han hadde vært edru. Man ser bort fra rusens virkning og legger til grunn den oppfatningen og den tilstanden en edru person ville hatt — derav navnet fiksjonsregelen. Regelen skjerper ikke straffen, og den bygger verken på hva han faktisk oppfattet eller på hva han i ettertid husker.",
    },
    {
      question: "Hvor er de to sidene av rusfiksjonen hjemlet?",
      options: ["Straffeloven § 25 tredje ledd gjelder skyldsiden, og § 20 fjerde ledd gjelder skyldevnesiden ved selvforskyldt rus", "Straffeloven § 25 første ledd gjelder skyldsiden, og § 20 annet ledd gjelder skyldevnesiden ved selvforskyldt rus", "Straffeloven § 20 fjerde ledd gjelder begge sidene, siden rusen alltid slår ut på skyldevnen før den slår ut på skylden", "Straffeloven § 23 gjelder skyldsiden, og § 20 femte ledd gjelder skyldevnesiden når rusen er selvforskyldt"],
      explanation: "Riktig svar er straffeloven § 25 tredje ledd for skyldsiden — det ses bort fra uvitenhet som følge av selvforskyldt rus — og § 20 fjerde ledd for skyldevnesiden, der den forbigående rusutilregneligheten ikke fritar. En besvarelse som bare nevner den ene, har halve regelen. Første ledd i § 25 og annet ledd i § 20 er nettopp de hovedreglene rusbestemmelsene gjør unntak fra.",
    },
    {
      question: "Når er en rus selvforskyldt?",
      options: ["Når gjerningspersonen kan bebreides for å ha inntatt det berusende middelet i den situasjonen han var i", "Når gjerningspersonen kunne forutsett at han ville komme til å begå et lovbrudd mens han var beruset", "Når gjerningspersonen har inntatt et middel som er ulovlig, eller som er brukt i strid med en forskrivning", "Når gjerningspersonen har blitt vesentlig mer beruset enn han hadde planlagt da han begynte å drikke"],
      explanation: "Riktig svar er at rusen er selvforskyldt når han kan bebreides for selve inntaket. Det kreves ikke at han forutså at han ville begå et lovbrudd — fiksjonsregelen bygger ikke på at rusen var en forberedelse, men på at han står nærmest til å bære følgene. Middelets lovlighet er ikke avgjørende, og at rusen ble sterkere enn ventet, gjør den ikke uforskyldt, fordi bebreidelsen gjelder inntaket og ikke omfanget.",
    },
    {
      question: "Hva er det bebreidelsen ved selvforskyldt rus knytter seg til?",
      options: ["Selve inntaket av middelet, altså om han hadde grunn til å la være å drikke eller ta stoffet", "Selve handlingen han begikk i rusen, altså om en edru person ville ha handlet på samme måte", "Følgene av handlingen, altså om skaden var av en art han med rimelighet kunne ha forutsett", "Både inntaket og handlingen, som må vurderes samlet før rusen kan kalles selvforskyldt i lovens forstand"],
      explanation: "Riktig svar er inntaket. Spørsmålet er om han hadde grunn til å la være å drikke, ta stoffet eller ta medisinen — ikke om han burde forutsett akkurat den handlingen som fulgte. Å skrive «rusen var selvforskyldt» uten å si hva bebreidelsen består i, er den vanligste svakheten i rusdrøftelser, og vurderingen skal forankres i konkrete momenter fra faktum.",
    },
    {
      question: "Hva følger av at en rus er uforskyldt?",
      options: ["Fiksjonsregelen gjelder ikke, og han bedømmes etter hovedreglene i straffeloven § 25 første ledd og § 20 annet ledd", "Fiksjonsregelen gjelder fortsatt, men retten kan sette straffen under minstestraffen i det aktuelle straffebudet", "Han går uansett fri, fordi en uforskyldt rus i seg selv er en selvstendig grunn til frifinnelse etter straffeloven", "Han bedømmes fortsatt som edru på skyldsiden, mens skyldevnen vurderes etter hovedregelen i straffeloven § 20 annet ledd"],
      explanation: "Riktig svar er at fiksjonsregelen ikke gjelder, og at vi faller tilbake på hovedreglene: han bedømmes etter sin egen oppfatning av den faktiske situasjonen, og skyldevnen vurderes på vanlig måte. Det er ikke det samme som automatisk frifinnelse — hovedreglene må fortsatt anvendes på faktum. Og fiksjonen faller bort på begge spor samtidig, ikke bare på det ene.",
    },
    {
      question: "I hvilken rekkefølge skal en rusdrøftelse gjøres?",
      options: ["Først om rusen var selvforskyldt, deretter skyldsiden, og til slutt skyldevnesiden i vilkårenes vanlige orden", "Først skyldevnesiden, deretter skyldsiden, og til slutt om rusen var selvforskyldt eller ikke i det hele tatt", "Først om han hadde forsett i vanlig forstand, deretter om rusen påvirket dette, og til slutt om den var selvforskyldt", "Først om rusen var atypisk, deretter om særlige grunner foreligger, og til slutt om han kan bebreides for inntaket"],
      explanation: "Riktig svar er å begynne med spørsmålet om rusen var selvforskyldt, fordi svaret styrer alt etterpå: er rusen uforskyldt, faller hele fiksjonsapparatet bort. Deretter behandles skyldsiden og til slutt skyldevnesiden, i den rekkefølgen straffbarhetsvilkårene ellers følger. Spørsmålet om atypisk rusvirkning og om særlige grunner kommer inn som ledd i disse vurderingene, ikke foran dem.",
    },
    {
      question: "Kan en person straffes når han var bevisstløs på grunn av rus da handlingen ble begått?",
      options: ["Ja, forutsatt at rusen var selvforskyldt — men hele uttellingen ligger i begrunnelsen, ikke i selve konklusjonen", "Nei, fordi en bevisstløs person verken kan ha forsett eller regnes som tilregnelig i lovens forstand", "Ja, men bare når straffebudet han har overtrådt, i tillegg har et alternativ som rammer uaktsom overtredelse", "Nei, med mindre han på forhånd hadde bestemt seg for å begå handlingen før han inntok det berusende middelet"],
      explanation: "Riktig svar er ja, forutsatt at rusen var selvforskyldt. Uten særreglene ville både skyldkravet og skyldevnevilkåret sviktet, og det er nettopp derfor straffeloven § 25 tredje ledd og § 20 fjerde ledd finnes. Spørsmålet er stilt ordrett i tre terminer, så en ren konklusjon er det svaret alle andre skriver — begrunnelsen og det egne eksempelet er det som gir uttelling.",
    },
    {
      question: "Hvorfor er bevisstløshet et problem i strafferetten, dersom vi ser bort fra rusreglene?",
      options: ["Fordi tilstanden rammer både skyldkravet og skyldevnevilkåret, siden sterk bevissthetsforstyrrelse er et alternativ i § 20 annet ledd", "Fordi tilstanden rammer handlingsvilkåret, siden en bevisstløs person ikke foretar noen viljestyrt handling i lovens forstand, og da svikter allerede det første av de fire vilkårene", "Fordi tilstanden rammer kravet om fravær av straffrihetsgrunner, siden bevisstløshet regnes som en nødrettsliknende situasjon", "Fordi tilstanden gjør bevisføringen umulig, siden den bevisstløse ikke selv kan forklare seg om hva som skjedde"],
      explanation: "Riktig svar er at bevisstløshet rammer begge de to siste straffbarhetsvilkårene samtidig: uten normal oppfatning av situasjonen svikter skylden, og en sterk bevissthetsforstyrrelse er et av alternativene som gjør en person utilregnelig etter straffeloven § 20 annet ledd bokstav b. Det er derfor det trengs to regler — én for hver side — når tilstanden skyldes selvforskyldt rus.",
    },
    {
      question: "Hva betyr reservasjonen «med mindre særlige grunner tilsier det» i straffeloven § 20 fjerde ledd?",
      options: ["At regelen er en hovedregel med et snevert unntak, slik at selvforskyldt rus ikke fritar automatisk i alle tilfeller", "At retten alltid skal vurdere om det er rimelig å straffe den berusede, ut fra hvor alvorlig handlingen var og hvor kraftig rusen var da den ble begått", "At straffen kan settes under minstestraffen når rusen var svært kraftig, selv om ansvaret ellers står fast", "At regelen bare gjelder alkohol, slik at andre rusmidler må vurderes etter de alminnelige reglene om skyldevne"],
      explanation: "Riktig svar er at reservasjonen gjør regelen til en hovedregel med et unntak. En besvarelse som skriver at selvforskyldt rus aldri fritar, gjengir ikke lovteksten korrekt. Terskelen er likevel høy, og du skal ikke bygge en konklusjon på reservasjonen uten holdepunkter i faktum — den er et unntak, ikke et alternativt hovedspor, og den skiller ikke mellom ulike rusmidler.",
    },
    {
      question: "Hva er det motsatte utgangspunktet i straffeloven § 20 femte ledd sammenliknet med fjerde ledd?",
      options: ["I femte ledd er utgangspunktet at han ikke straffes, og straff er unntaket som krever at særlige grunner tilsier det", "I femte ledd er utgangspunktet at han straffes, og fritak er unntaket som krever at særlige grunner tilsier det", "I femte ledd er utgangspunktet at han straffes mildere, siden den underliggende tilstanden regnes som formildende", "I femte ledd er utgangspunktet at spørsmålet avgjøres av sakkyndige, mens retten avgjør spørsmålet etter fjerde ledd"],
      explanation: "Riktig svar er at han i femte ledd som utgangspunkt ikke straffes, og at straff krever særlige grunner — mens fjerde ledd har motsatt utgangspunkt. Femte ledd gjelder den som har en vedvarende tilstand etter annet ledd bokstav a og selvforskyldt fremkaller en utilregnelighetstilstand. Forskjellen er begrunnet i at den underliggende lidelsen ikke er selvforskyldt; bebreidelsen gjelder bare den utløsende handlingen.",
    },
    {
      question: "Hva ligger i ordet «forbigående» i straffeloven § 20 fjerde ledd?",
      options: ["At bestemmelsen gjelder den midlertidige tilstanden rusen skaper, mens varige tilstander reguleres av paragrafens øvrige ledd", "At bestemmelsen bare gjelder når rusen gikk over før saken kom opp for domstolene i den aktuelle straffesaken", "At bestemmelsen gjelder tilstander som varer i mindre enn ett døgn, mens lengre tilstander må vurderes etter hovedregelen i paragrafens annet ledd", "At bestemmelsen bare gjelder når gjerningspersonen har vært beruset ved en enkelt anledning og ikke over tid"],
      explanation: "Riktig svar er at ordet peker på den midlertidige tilstanden rusen skaper; varige tilstander hører under paragrafens øvrige ledd. Ordet setter altså grensen mot de vedvarende tilstandene, ikke en tidsgrense i timer eller døgn, og det sier ingenting om hvor mange ganger personen har vært beruset eller om når saken kommer opp.",
    },
    {
      question: "Gir fiksjonsregelen automatisk forsett når rusen er selvforskyldt?",
      options: ["Nei — ville en edru person i samme situasjon heller ikke oppfattet det avgjørende elementet, foreligger fortsatt ikke forsett", "Ja — når rusen er selvforskyldt, er forsettskravet oppfylt uten at noen ytterligere vurdering er nødvendig", "Ja — men bare når straffebudet krever alminnelig forsett og ikke en kvalifisert form som hensikt", "Nei — fiksjonen gjelder bare skyldevnen, mens forsettet alltid vurderes etter hans faktiske oppfatning av situasjonen slik den var i gjerningsøyeblikket"],
      explanation: "Riktig svar er nei: fiksjonen fjerner rusens virkning, ikke alle andre forhold. Du må stille spørsmålet «hva ville han oppfattet dersom han hadde vært edru?» og bruke svaret som grunnlag for forsettsvurderingen — var det for mørkt til å se, eller manglet opplysningen, ville en edru heller ikke hatt forsett. Fiksjonen virker dessuten på begge spor, både skyld og skyldevne.",
    },
    {
      question: "Hvorfor er det galt å skrive at «han var full, derfor straffes han strengere»?",
      options: ["Fordi fiksjonsregelen gjelder bedømmelsen og ikke utmålingen — den stiller den berusede likt med den edru, ikke dårligere", "Fordi rusen etter loven skal regnes som en formildende omstendighet når straffen for handlingen skal fastsettes", "Fordi rusen bare får betydning når den er uforskyldt, og da alltid i formildende retning for gjerningspersonen", "Fordi rusens betydning for straffen først kan vurderes etter at spørsmålet om skyldevne er endelig avgjort av retten"],
      explanation: "Riktig svar er at fiksjonsregelen sier hvordan gjerningspersonen skal bedømmes, ikke at han skal straffes strengere. Regelen fjerner en fritaksgrunn; den legger ikke noe til. Resultatet er at den berusede stilles likt med den edru. Hva rusen eventuelt betyr ved utmålingen, er et selvstendig spørsmål utenfor ansvarsvilkårene, og å blande det inn i ansvarsdrøftelsen er den samme feilen som ellers i faget.",
    },
    {
      question: "Hvorfor behandles en vanlig villfarelse og en rusbetinget feiloppfatning motsatt?",
      options: ["Fordi det ikke er noe å bebreide ham for ved en vanlig villfarelse, mens han ved selvforskyldt rus selv har satt seg i tilstanden", "Fordi en vanlig villfarelse gjelder faktum, mens en rusbetinget feiloppfatning alltid gjelder innholdet i en rettsregel", "Fordi en vanlig villfarelse må bevises av gjerningspersonen selv, mens rusen kan konstateres ut fra objektive opplysninger om hva han hadde inntatt", "Fordi en vanlig villfarelse bare virker på forsettet, mens rusen virker på både forsettet og de skjerpende omstendighetene"],
      explanation: "Riktig svar er forskjellen i bebreidelse: ved en vanlig villfarelse er det ingenting å bebreide ham for at han oppfattet feil, mens det ved selvforskyldt rus er han selv som har satt seg i tilstanden. Derfor kommer feilen ham til gode etter straffeloven § 25 første ledd, mens det ses bort fra den etter tredje ledd. Kontrollspørsmålet er om feiloppfatningen skyldtes rusen, eller om han ville oppfattet det samme edru.",
    },
    {
      question: "Hva er en atypisk rusvirkning, og hvilken betydning kan den ha?",
      options: ["En reaksjon som avviker vesentlig fra det middelet normalt gir; den kan gjøre rusen uforskyldt eller utgjøre særlige grunner", "En reaksjon som er kraftigere enn hos andre som har inntatt like mye; den gjør rusen uforskyldt i sin helhet", "En reaksjon som skyldes at gjerningspersonen ble mer beruset enn han hadde planlagt; den senker terskelen for særlige grunner etter fjerde ledd", "En reaksjon som gjentar seg hver gang gjerningspersonen inntar middelet; den skjerper bebreidelsen for inntaket"],
      explanation: "Riktig svar er at en atypisk rusvirkning avviker vesentlig fra det middelet normalt gir og var noe han ikke hadde grunn til å regne med. Den kan svekke bebreidelsen for inntaket og dermed gjøre rusen helt eller delvis uforskyldt, og den er det mest nærliggende eksempelet på særlige grunner etter § 20 fjerde ledd. At han ble mer beruset enn planlagt eller reagerte kraftigere enn vennene, er derimot ikke atypisk.",
    },
    {
      question: "Noen har tilsatt et rusmiddel i drikken til en person som også har drukket alkohol frivillig. Hvordan skal dette vurderes?",
      options: ["Rusen må splittes: den delen som skyldes hans eget inntak, er selvforskyldt, og det avgjørende er hva som gjorde ham så beruset", "Rusen er i sin helhet selvforskyldt, fordi han uansett har inntatt alkohol frivillig i den samme situasjonen", "Rusen er i sin helhet uforskyldt, fordi et tilsatt rusmiddel alltid slår ut hele den bebreidelsen han ellers ville hatt for det frivillige inntaket", "Rusen vurderes etter hvor stor andel av promillen som stammet fra hvert av de to midlene på handlingstidspunktet"],
      explanation: "Riktig svar er at rusen må splittes, og at vurderingen knyttes til årsaken til tilstanden: spørsmålet er hva som gjorde ham så beruset som han var. Var det tilsetningen som var avgjørende, taler mye for at den samlede rusen behandles som uforskyldt — men det er en konkret vurdering som må skrives ut, ikke en automatisk løsning i noen av retningene.",
    },
    {
      question: "Hvilken betydning har rusen for uaktsomhetsvurderingen?",
      options: ["Selve det å ruse seg kan være uaktsomt når han vet at han skal utføre noe som krever aktsomhet, som å kjøre bil", "Rusen kan påberopes som en personlig forutsetning som svekker bebreidelsen på den subjektive siden av vurderingen", "Rusen er uten betydning for uaktsomheten, fordi fiksjonsregelen bare gjelder forsettet og ikke uaktsomhetsvurderingen", "Rusen gjør at kravet til forsvarlig opptreden senkes, fordi den berusede har dårligere forutsetninger for å vurdere risiko"],
      explanation: "Riktig svar er at selve rusinntaket kan være uaktsomt når han vet at han skal utføre noe som krever aktsomhet — kjøre bil, passe et barn, betjene en maskin. Da ligger bebreidelsen i inntaket, ikke i det som skjedde etterpå. Å si «jeg var for full til å skjønne det» er nettopp det fiksjonsregelen avskjærer, og den berusede er ikke bedre stilt enn den edru i uaktsomhetssporet.",
    },
    {
      question: "Faktum viser at gjerningspersonen ville handlet nøyaktig likt om han hadde vært edru. Hva følger av det?",
      options: ["Rusen er da uten betydning, og forsettet vurderes helt vanlig uten at fiksjonsregelen skal drøftes i det hele tatt", "Rusen er da uten betydning for skyldsiden, men fiksjonsregelen må fortsatt drøftes på skyldevnesiden i saken", "Rusen er da et skjerpende moment, fordi han beviselig hadde bestemt seg for handlingen før han ble beruset", "Rusen må da likevel drøftes etter fiksjonsregelen, fordi den alltid inngår når faktum opplyser at han var beruset"],
      explanation: "Riktig svar er at rusen da er uten betydning: det er ikke rusen som har fjernet oppfatningen, og forsettet vurderes helt vanlig. Dette er bremsen kapitlet peker på — er rusen uten betydning for hva han oppfattet, skal fiksjonsregelen ikke drøftes. Å drøfte den likevel er å bruke plass på noe uten konsekvens, og faktum sier heller ikke noe om at han hadde bestemt seg på forhånd.",
    },
    {
      question: "Hvilke hensyn begrunner fiksjonsregelen ved selvforskyldt rus?",
      options: ["Prevensjon og en rimelighetsbetraktning: uten regelen ville rus vært en vei ut av ansvar, og han står nærmest til å bære følgene", "Bevishensyn og prosessøkonomi: det ville vært umulig å bevise hva en beruset person faktisk oppfattet i det øyeblikket handlingen ble begått", "Hensynet til gjerningspersonen selv: en klar regel gir ham forutberegnelighet om hva han risikerer ved å drikke", "Hensynet til likebehandling av rusmidler: alle berusende midler må gi samme rettsvirkning uansett hvordan de virker"],
      explanation: "Riktig svar er prevensjon og rimelighet. Uten regelen ville rus vært en vei ut av straffansvar, og den kunne brukes bevisst — man kunne drukket seg til straffrihet. Og mellom gjerningspersonen, som selv har satt seg i tilstanden, og den som ble rammet, står gjerningspersonen nærmest til å bære følgene. Argumentet fra sammenhengen hører med: en stor andel volds- og skadesaker skjer i rus.",
    },
    {
      question: "Hva er det sterkeste motargumentet mot fiksjonsregelen, sett fra skyldprinsippet?",
      options: ["At regelen tilskriver ham en skyld han ikke hadde i gjerningsøyeblikket, og dermed bryter med dekningsprinsippet", "At regelen rammer for få saker til å ha noen reell preventiv virkning på dem som ruser seg regelmessig", "At regelen gjør det umulig å skille mellom den som drakk bevisst og den som ble beruset ved et uhell", "At regelen fører til at rusen behandles som en formildende omstendighet i stedet for en skjerpende ved utmålingen"],
      explanation: "Riktig svar er at bebreidelsen for inntaket ikke er den samme som skyld for handlingen: han hadde ikke forsett om følgen da han tok det første glasset, og fiksjonen tilskriver ham en skyld han ikke hadde. Det bryter med dekningsprinsippet, som krever at skylden dekker gjerningsbeskrivelsen på handlingstidspunktet. Virkningen er dessuten stor, siden rus er til stede i en betydelig andel volds- og skadesaker.",
    },
  ],
  'juroff1500-3-6': [
    {
      question: "Hva er skyldevne, og hvor i straffbarhetsvilkårene hører kravet hjemme?",
      options: ["Evnen til å være strafferettslig ansvarlig, og kravet er det fjerde av de fire kumulative straffbarhetsvilkårene", "Evnen til å forstå at nettopp denne handlingen var forbudt, og kravet er det tredje straffbarhetsvilkåret", "Evnen til å styre handlingene sine i den konkrete situasjonen, og kravet er det andre straffbarhetsvilkåret", "Evnen til å forklare seg om det som skjedde, og kravet hører til straffeprosessen og ikke til straffbarhetsvilkårene"],
      explanation: "Riktig svar er at skyldevne er evnen til å være strafferettslig ansvarlig, og at kravet er det fjerde straffbarhetsvilkåret med hjemmel i straffeloven § 20. Vilkåret spør ikke hva gjerningspersonen gjorde eller tenkte i den konkrete situasjonen, men om han i det hele tatt er en person rettsordenen kan holde ansvarlig. Spørsmålet om hva han visste og ville denne gangen, hører til det tredje vilkåret.",
    },
    {
      question: "Hva er forskjellen mellom skyld og skyldevne?",
      options: ["Skylden gjelder den konkrete handlingen, mens skyldevnen gjelder personen og hans evne til å bære ansvar", "Skylden gjelder personen og hans forutsetninger, mens skyldevnen gjelder den handlingen han faktisk utførte", "Skylden gjelder forsett, mens skyldevnen gjelder uaktsomhet, som to trinn i den samme vurderingen", "Skylden gjelder hva han gjorde, mens skyldevnen bare gjelder om han var over den strafferettslige lavalderen"],
      explanation: "Riktig svar er at skylden gjelder den konkrete handlingen — hva visste og ville han denne gangen? — mens skyldevnen gjelder personen. De to er logisk uavhengige, og alle fire kombinasjoner finnes: en fjortenåring kan ha fullt forsett, og en voksen tilregnelig kan mangle det. Skyldevnen omfatter dessuten mer enn lavalderen, siden utilregnelighet etter annet ledd også hører inn under vilkåret.",
    },
    {
      question: "Hva slår straffeloven § 20 første ledd fast om lavalderen?",
      options: ["At den som på handlingstidspunktet er under 15 år, ikke er strafferettslig ansvarlig, og regelen er absolutt", "At den som på handlingstidspunktet er under 15 år, bare kan straffes når handlingen var nøye planlagt", "At den som på handlingstidspunktet er under 15 år, kan straffes dersom en konkret modenhetsvurdering tilsier det", "At den som på pådømmelsestidspunktet er under 15 år, ikke er strafferettslig ansvarlig for handlinger han har begått"],
      explanation: "Riktig svar er at den som på handlingstidspunktet er under 15 år, ikke er strafferettslig ansvarlig, og at regelen er absolutt. Det gjøres ingen vurdering av modenhet, forståelse eller planlegging — en fjortenåring som handler med full innsikt, er like fritatt som en femåring. En fast grense gir forutsigbarhet, og den knytter seg til handlingstidspunktet, ikke til tidspunktet for pådømmelsen.",
    },
    {
      question: "En gutt fyller 15 år dagen etter at han begikk handlingen. Kan han straffes for den?",
      options: ["Nei, fordi lavaldersvilkåret knytter seg til handlingstidspunktet og ikke til pådømmelsestidspunktet", "Ja, fordi han var over den strafferettslige lavalderen da saken kom opp for domstolen til behandling", "Ja, men bare dersom retten finner at han var moden nok til å forstå rekkevidden av det han gjorde", "Nei, med mindre handlingen er en av dem som har en særlig høy strafferamme etter det aktuelle straffebudet"],
      explanation: "Riktig svar er nei: skyldevnen vurderes ut fra situasjonen på handlingstidspunktet, og den som fylte 15 år dagen etter, kan ikke straffes for handlingen. Grensen er absolutt, så verken modenhet eller lovbruddets alvor endrer resultatet. Det samme utgangspunktet — handlingstidspunktet — gjelder også for utilregnelighet etter paragrafens annet ledd.",
    },
    {
      question: "Hvilke tre alternativer angir straffeloven § 20 annet ledd?",
      options: ["Sterkt avvikende sinnstilstand, sterk bevissthetsforstyrrelse og høygradig psykisk utviklingshemming", "Alvorlig sinnslidelse, bevisstløshet og psykisk utviklingshemming i lettere eller moderat grad hos personen", "Sterkt avvikende sinnstilstand, selvforskyldt rus og høygradig psykisk utviklingshemming hos gjerningspersonen", "Manglende forsett, manglende evne til å styre handlingene og manglende kunnskap om regelen"],
      explanation: "Riktig svar er sterkt avvikende sinnstilstand i bokstav a, sterk bevissthetsforstyrrelse i bokstav b og høygradig psykisk utviklingshemming i bokstav c. Selvforskyldt rus hører ikke hjemme i oppregningen — den er tvert imot unntaket i fjerde ledd. Og lettere eller moderate former for utviklingshemming oppfyller ikke vilkåret, fordi kvalifikasjonsordene setter terskelen.",
    },
    {
      question: "Hvilken betydning har kvalifikasjonsordene «sterkt», «sterk» og «høygradig» i straffeloven § 20 annet ledd?",
      options: ["De setter terskelen: en tilstand som er avvikende, forstyrret eller nedsatt uten å være kvalifisert, oppfyller ikke vilkåret", "De angir hvilke diagnoser som omfattes, slik at bare de aller mest alvorlige diagnosene kan gi fritak for straff etter bestemmelsen", "De er en språklig arv fra eldre lovtekst og er uten selvstendig betydning for vurderingen etter gjeldende rett", "De angir hvor lenge tilstanden må ha vart, slik at kortvarige tilstander faller utenfor de tre alternativene i loven"],
      explanation: "Riktig svar er at kvalifikasjonsordene setter terskelen, og at den er høy i alle tre alternativene. De er ikke pynt: en tilstand som er avvikende, forstyrret eller nedsatt uten å være kvalifisert, oppfyller ikke vilkåret. Loven bruker heller ikke diagnosebetegnelser — det er tilstanden og dens virkning som er avgjørende, og vurderingsmomentene står i tredje ledd.",
    },
    {
      question: "Hva dekker alternativet «sterk bevissthetsforstyrrelse» i straffeloven § 20 annet ledd bokstav b?",
      options: ["Tilstander der kontakten med omgivelsene er vesentlig svekket eller borte, som etter hodeskade eller ved et epileptisk anfall", "Tilstander der personen har en alvorlig psykisk lidelse som gjør at virkelighetsoppfatningen hans er vesentlig forstyrret over tid", "Tilstander der personen er sterkt beruset, slik at rusen alene er nok til å utelukke straffansvaret etter bestemmelsen", "Tilstander der personen har vært utsatt for et sterkt følelsesmessig press og derfor handlet uten å tenke seg om"],
      explanation: "Riktig svar er tilstander der kontakten med omgivelsene er vesentlig svekket eller borte, uten at det nødvendigvis foreligger en psykisk lidelse — typisk etter hodeskade, ved søvnrelaterte tilstander, epileptiske anfall eller akutte forvirringstilstander. Den praktisk viktigste begrensningen er at fritaket ikke gjelder når forstyrrelsen skyldes selvforskyldt rus; da griper fjerde ledd inn. Alvorlige psykiske lidelser hører under bokstav a.",
    },
    {
      question: "Hva er den viktigste begrensningen i alternativet om sterk bevissthetsforstyrrelse?",
      options: ["At fritaket ikke gjelder når forstyrrelsen skyldes selvforskyldt rus, siden straffeloven § 20 fjerde ledd da griper inn", "At fritaket bare gjelder når forstyrrelsen kan dokumenteres med en medisinsk undersøkelse foretatt kort tid etter handlingen", "At fritaket bare gjelder når forstyrrelsen har vart så lenge at den regnes som en vedvarende tilstand hos personen", "At fritaket ikke gjelder når gjerningspersonen har en underliggende psykisk lidelse, siden bokstav a da går foran"],
      explanation: "Riktig svar er rusunntaket. Kraftig rus gir nettopp en sterk bevissthetsforstyrrelse, og uten straffeloven § 20 fjerde ledd ville rusen vært en systematisk vei ut av det fjerde vilkåret. Bestemmelsen krever verken medisinsk dokumentasjon eller at tilstanden er vedvarende — tvert imot gjelder fjerde ledd nettopp den forbigående tilstanden.",
    },
    {
      question: "En person har en moderat psykisk utviklingshemming. Hva følger av alternativet i straffeloven § 20 annet ledd bokstav c?",
      options: ["Vilkåret er ikke oppfylt, siden bare høygradige former omfattes — men tilstanden kan ha betydning for skyldspørsmålet", "Vilkåret er oppfylt, siden enhver psykisk utviklingshemming faller inn under alternativet i bokstav c etter loven", "Vilkåret er ikke oppfylt, og tilstanden er dermed uten enhver betydning for spørsmålet om han kan straffes", "Vilkåret er oppfylt dersom retten finner at tilstanden gjorde ham vesentlig mindre i stand til å styre handlingene sine"],
      explanation: "Riktig svar er at kvalifikasjonen «høygradig» er avgjørende: lettere og moderate former oppfyller ikke vilkåret. Men tilstanden kan likevel ha stor betydning for hvordan personen forsto situasjonen — og dermed for skyldspørsmålet under det tredje vilkåret. Det er altså ikke slik at tilstanden blir uten betydning, den flytter seg bare til et annet vilkår.",
    },
    {
      question: "Hva sier straffeloven § 20 tredje ledd at det skal legges vekt på?",
      options: ["Graden av svikt i virkelighetsforståelse og funksjonsevne hos den det gjelder", "Alvoret i det lovbruddet som er begått, og faren for at han begår nye lovbrudd", "Hvilken diagnose som er stilt, og hvor lenge tilstanden har vart", "Om gjerningspersonen selv kan bebreides for å ha kommet i den tilstanden han var i"],
      explanation: "Riktig svar er graden av svikt i virkelighetsforståelse og funksjonsevne. Bestemmelsen gir vurderingen et innhold, slik at den ikke blir en ren diagnosesortering: to personer med samme diagnose kan falle ulikt ut fordi tilstanden virket ulikt på dem. Lovbruddets alvor og faren for nye lovbrudd hører til vilkårene for særreaksjonene, ikke til utilregnelighetsvurderingen.",
    },
    {
      question: "Hva er innholdet i momentet «svikt i virkelighetsforståelsen»?",
      options: ["I hvilken grad personen oppfattet situasjonen slik den faktisk var, og om oppfatningen var utilgjengelig for korreksjon", "I hvilken grad personen var i stand til å styre handlingene sine og vurdere alternativer i den aktuelle situasjonen", "I hvilken grad personen kjente den rettsregelen han overtrådte, og forsto at handlingen hans var forbudt ved lov", "I hvilken grad personen i ettertid er i stand til å huske og gjøre rede for det som skjedde i det øyeblikket handlingen ble begått"],
      explanation: "Riktig svar er i hvilken grad personen oppfattet situasjonen slik den faktisk var — om han feiltolket omgivelsene grunnleggende, oppfattet trusler som ikke fantes, og om oppfatningen var utilgjengelig for korreksjon. Evnen til å styre handlingene er det andre momentet, funksjonsevnen. Kunnskap om rettsregelen hører til villfarelseslæren, ikke til utilregnelighetsvurderingen.",
    },
    {
      question: "En person brydde seg ikke om følgene av det han gjorde. Er det svikt i funksjonsevnen etter straffeloven § 20 tredje ledd?",
      options: ["Nei, momentet gjelder evnen til å styre handlingene, ikke viljen til å bry seg om hva de fører til", "Ja, fordi den som ikke bryr seg om følgene, ikke er i stand til å innrette seg etter normen loven bygger på", "Ja, dersom likegyldigheten avviker vesentlig fra det som er normalt hos folk flest", "Nei, fordi funksjonsevnen bare vurderes hos den som har fått en diagnose som nevnt i annet ledd bokstav a"],
      explanation: "Riktig svar er nei: momentet gjelder evnen, ikke viljen. Svikt i funksjonsevnen handler om han kunne vurdere alternativer, hadde kontroll over impulser og kunne innrette seg etter det han forsto. At noen ikke brydde seg om følgene, er noe annet. Momentet vurderes dessuten uten at det stilles krav om noen diagnose, siden vurderingen er funksjonell.",
    },
    {
      question: "Hva betyr det at utilregnelighetsvurderingen er funksjonell og ikke diagnostisk?",
      options: ["At det avgjørende er hvordan tilstanden virket på personen, slik at en diagnose verken er tilstrekkelig eller nødvendig", "At det avgjørende er hvilken diagnose som er stilt, mens virkningen på personen bare er et støttemoment i vurderingen", "At vurderingen foretas av sakkyndige alene, siden det er de som kan uttale seg om hvordan tilstanden virket på personen", "At vurderingen bare kan foretas når det foreligger en diagnose som er anerkjent i et medisinsk klassifikasjonssystem"],
      explanation: "Riktig svar er at det avgjørende er hvordan tilstanden virket, slik at en diagnose verken er tilstrekkelig eller nødvendig — to personer med samme diagnose kan falle ulikt ut. Diagnosesystemer er laget for behandling, ikke for ansvarsvurdering. På eksamen skal du derfor ikke stille en diagnose, men bruke momentene i tredje ledd på det faktum forteller om oppfatning og handlemåte, og det er retten som avgjør.",
    },
    {
      question: "Hva bestemmer straffeloven § 20 fjerde ledd?",
      options: ["At den som forbigående er utilregnelig som følge av selvforskyldt rus, ikke fritas for straff med mindre særlige grunner tilsier det", "At den som forbigående er utilregnelig som følge av selvforskyldt rus, alltid fritas for straff på samme måte som etter hovedregelen i annet ledd", "At den som forbigående er utilregnelig som følge av selvforskyldt rus, straffes strengere enn den som var edru i samme situasjon", "At den som forbigående er utilregnelig som følge av uforskyldt rus, likevel kan straffes dersom særlige grunner tilsier det"],
      explanation: "Riktig svar er at den forbigående rusutilregneligheten ikke fritar, med mindre særlige grunner tilsier det. Bestemmelsen er et unntak fra annet ledd, og uten den ville rusen vært en systematisk vei ut av det fjerde vilkåret. Reservasjonen om særlige grunner betyr at regelen ikke er absolutt, men den skjerper ikke straffen, og den gjelder selvforskyldt og ikke uforskyldt rus.",
    },
    {
      question: "Hvordan skiller straffeloven § 20 femte ledd seg fra fjerde ledd?",
      options: ["I femte ledd er utgangspunktet at han ikke straffes, og straff krever særlige grunner — i fjerde ledd er det motsatt", "I femte ledd er utgangspunktet at han straffes, og fritak krever særlige grunner — akkurat som i fjerde ledd", "I femte ledd avgjør sakkyndige spørsmålet, mens retten avgjør det etter fjerde ledd på grunnlag av bevisene i saken", "I femte ledd gjelder regelen bare barn og unge, mens fjerde ledd gjelder voksne lovbrytere over den strafferettslige lavalderen"],
      explanation: "Riktig svar er at utgangspunktet er motsatt: etter femte ledd straffes han ikke, og straff er unntaket som krever særlige grunner. Bestemmelsen gjelder den som har en vedvarende tilstand som nevnt i annet ledd bokstav a og selvforskyldt fremkaller en utilregnelighetstilstand, for eksempel ved å slutte med forskrevet medisin. Forskjellen er begrunnet i at den underliggende tilstanden ikke er selvforskyldt.",
    },
    {
      question: "Hva er den vanligste misforståelsen om hva som skjer med den som ikke kan straffes?",
      options: ["At ingenting skjer — i virkeligheten utelukker manglende skyldevne straff, men ikke enhver reaksjon fra rettsordenen", "At han uten videre overføres til tvungent psykisk helsevern, mens reaksjonen i virkeligheten har egne vilkår", "At han kan holdes erstatningsansvarlig, mens sivilrettslige følger i virkeligheten er helt utelukket i slike tilfeller", "At saken henlegges av påtalemyndigheten, mens den i virkeligheten alltid må behandles av domstolene først"],
      explanation: "Riktig svar er at det er en utbredt misforståelse at «ingenting skjer». At et straffbarhetsvilkår svikter, betyr at straff er utelukket — ikke at rettsordenen ikke reagerer. De tre sporene er særreaksjonene i straffeloven §§ 62 og 63, barnevernstiltak for barn under lavalderen, og sivilrettslige følger som erstatningsansvar, som følger helt egne regler. Særreaksjonene er likevel ikke automatiske.",
    },
    {
      question: "Hva er overføring til tvungent psykisk helsevern etter straffeloven § 62?",
      options: ["En særreaksjon begrunnet i samfunnsvern, ikke straff, med vilkår knyttet til lovbruddets art og faren for nye alvorlige lovbrudd", "En straffart som ilegges i stedet for fengsel når gjerningspersonen har behov for behandling for en psykisk lidelse", "Et sivilrettslig tiltak som helsetjenesten selv beslutter når den finner at pasienten kan være til fare for seg selv eller for andre", "En reaksjon som følger automatisk når retten har kommet til at gjerningspersonen manglet skyldevne ved handlingen"],
      explanation: "Riktig svar er at det er en særreaksjon begrunnet i samfunnsvern og ikke straff, med vilkår knyttet til lovbruddets art og alvor og til faren for nye alvorlige lovbrudd. Den ilegges av retten og gjennomføres i det psykiske helsevernet. Reaksjonen har ingen fastsatt lengde på samme måte som en fengselsstraff, og den er begrunnet framover i fare — ikke bakover i skyld. Den følger heller ikke automatisk av en frifinnelse.",
    },
    {
      question: "Hvilket alternativ i straffeloven § 20 annet ledd korresponderer særlig med tvungen omsorg etter § 63?",
      options: ["Bokstav c om høygradig psykisk utviklingshemming, siden reaksjonen er innrettet mot nettopp denne gruppen", "Bokstav a om sterkt avvikende sinnstilstand, siden reaksjonen er innrettet mot behandling av en alvorlig lidelse", "Bokstav b om sterk bevissthetsforstyrrelse, siden slike tilstander krever tett oppfølging", "Alle tre alternativene likt, siden valget mellom de to særreaksjonene bare beror på hva som er praktisk mulig"],
      explanation: "Riktig svar er bokstav c om høygradig psykisk utviklingshemming. Tvungen omsorg er innrettet mot omsorg og oppfølging framfor behandling av en lidelse, mens bokstav a typisk peker mot tvungent psykisk helsevern etter § 62. Å vise denne koblingen er en sammenheng som demonstrerer systemforståelse, og vilkårene for begge reaksjonene knytter seg til lovbruddets art og faren for nye alvorlige lovbrudd.",
    },
    {
      question: "Hvilken instans møter barn under den strafferettslige lavalderen?",
      options: ["Barnevernet, som møter barnet med tiltak begrunnet i barnets behov og ikke i det lovbruddet som er begått", "Domstolene, som kan ilegge en mildere reaksjon enn straff når lovbryteren er under den strafferettslige lavalderen", "Konfliktrådet, som behandler alle saker der lovbryteren er under den strafferettslige lavalderen", "Påtalemyndigheten, som avgjør om barnet skal møtes med en reaksjon eller om saken skal henlegges uten videre oppfølging"],
      explanation: "Riktig svar er barnevernet, og tiltakene der er begrunnet i barnets behov, ikke i lovbruddet. Det er dette som skiller sporene: straff forutsetter ansvar og innebærer en fordømmelse, mens barnevernstiltak forutsetter et omsorgs- eller hjelpebehov og er begrunnet framover. Ungdom over 15 år kan straffes, men reaksjonssystemet har egne ordninger for unge lovbrytere.",
    },
    {
      question: "Hvor i en praktikumsbesvarelse skal skyldevnen drøftes, og hvor mye plass skal den ha?",
      options: ["Sist av de fire vilkårene, og i de fleste oppgaver holder én begrunnet setning fordi skyldevnen er uproblematisk", "Først av de fire vilkårene når faktum nevner en alder eller en tilstand, og da med et fyldig eget avsnitt", "Inne i skyldvilkåret, siden begge deler gjelder hva gjerningspersonen oppfattet og forsto da han handlet", "Etter at reaksjonsspørsmålet er behandlet, siden skyldevnen først får betydning når reaksjonen skal velges av retten"],
      explanation: "Riktig svar er sist av de fire vilkårene, og med én begrunnet setning når skyldevnen er uproblematisk — for eksempel at gjerningspersonen er 34 år og at faktum ikke gir holdepunkter for en tilstand etter straffeloven § 20 annet ledd. Å begynne med skyldevnen fordi faktum nevner en alder, bryter systematikken, og å drøfte tilstanden inne i skyldvilkåret sletter nettopp det skillet kapitlet handler om.",
    },
    {
      question: "Hvilke to begrunnelser for skyldevnevilkåret går igjen, og hvorfor gir de ulike svar i randsonen?",
      options: ["Nytte og rettferdighet: nyttebegrunnelsen åpner for at grensen trekkes ut fra hva som virker, mens rettferdighetsbegrunnelsen trekker den ut fra hva som kan bebreides", "Nytte og rettferdighet: nyttebegrunnelsen trekker grensen ut fra hva som kan bebreides, mens rettferdighetsbegrunnelsen trekker den ut fra hva som virker preventivt", "Samfunnsvern og forutberegnelighet: samfunnsvernet krever en vid adgang til særreaksjoner, mens forutberegneligheten krever at grensen fastsettes helt presist i lovteksten", "Prevensjon og prosessøkonomi: prevensjonen begrunner selve vilkåret, mens prosessøkonomien begrunner at spørsmålet avgjøres av sakkyndige og ikke av retten"],
      explanation: "Riktig svar er nytte og rettferdighet. Nyttebegrunnelsen er at straffen ikke virker på den som mangler forutsetningene, og den åpner for at samfunnsvernet ivaretas med andre midler og at grensen trekkes ut fra hva som virker. Rettferdighetsbegrunnelsen er at det ville være urimelig å bebreide den som ikke kunne innrettet seg, og den setter grensen ut fra hva som kan bebreides, uavhengig av virkning.",
    },
    {
      question: "Hva er kapitlets største enkeltrisiko, knyttet til feil #14 om å bruke feil regelverk?",
      options: ["Å skrive mot ordlyden slik den var før lovendringen i 2019, siden 13 av de 14 terminene som tester temaet, er fra før H2024", "Å skrive mot straffeloven av 1902, siden de fleste terminene som tester temaet, er skrevet i det gamle lovregimet", "Å bruke bestemmelsene om særreaksjoner i stedet for bestemmelsen om skyldevne når faktum beskriver en psykisk tilstand hos gjerningspersonen", "Å bygge på forarbeidene i stedet for på lovteksten, siden forarbeidene her er eldre enn den gjeldende bestemmelsen"],
      explanation: "Riktig svar er faren for å skrive mot ordlyden slik den var før lovendringen ved lov 21. juni 2019 nr. 48. Temaet er prøvd i 14 av 34 terminer, og 13 av de 14 er skrevet før H2024, så sannsynligheten for å trene på et sett fra det gamle regimet er svært høy. Feil #14 rammer altså ikke bare en opphevet lov — den rammer også en gjeldende bestemmelse i en utgått versjon.",
    },
    {
      question: "Hvilken status har forarbeidet Ot.prp. nr. 90 (2003–2004) kapittel 15.2 i dette emnet?",
      options: ["Det er plusspoeng og ikke krav, fordi pensum nesten ikke henviser til forarbeider i det hele tatt", "Det er et krav på alle karakternivåer, fordi forarbeidet er den sentrale kilden til hva skyldevne betyr", "Det er uten betydning, fordi forarbeider ikke er en rettskildefaktor når lovteksten er klar", "Det er et krav på de høyeste karakternivåene, fordi en A-besvarelse må vise at kandidaten kjenner lovhistorikken"],
      explanation: "Riktig svar er at forarbeider er plusspoeng, ikke krav: det kan ikke forventes at studenter i dette emnet bruker dem, fordi pensum nesten ikke henviser til dem. En besvarelse uten forarbeidshenvisninger kan være helt utmerket. Forarbeider er likevel en rettskildefaktor som kan belyse hva en bestemmelse skal bety, særlig der ordlyden er uklar.",
    },
    {
      question: "Hvilken rollefordeling gjelder mellom sakkyndige og retten i utilregnelighetsspørsmålet?",
      options: ["Sakkyndige uttaler seg om tilstanden, mens retten anvender loven og avgjør spørsmålet om utilregnelighet", "Sakkyndige avgjør om personen var utilregnelig, mens retten tar stilling til hvilken reaksjon som skal ilegges", "Retten avgjør begge deler alene, siden sakkyndig vurdering bare innhentes når partene krever det", "Sakkyndige og retten avgjør spørsmålet i fellesskap, slik at en frifinnelse forutsetter at begge er enige om tilstanden"],
      explanation: "Riktig svar er at sakkyndige uttaler seg om tilstanden, mens retten anvender loven og avgjør. På eksamen er faktum gitt: du skal bruke de opplysningene som står der om hvordan personen oppfattet situasjonen og handlet, og ikke bestride dem. Én setning om at spørsmålet i en virkelig sak ville vært belyst av sakkyndige, er nok — mer er å skrive seg bort.",
    },
  ],
  'juroff1500-4-1': [
    {
      question: "Hvilke tre vilkår stiller straffeloven § 16 første ledd for at det foreligger straffbart forsøk?",
      options: ["Strafferamme på fengsel i 1 år eller mer, forsett om å fullbyrde lovbruddet, og at han har foretatt noe som leder direkte mot utføringen", "Strafferamme på fengsel i 3 år eller mer, forsett eller grov uaktsomhet, og at han har foretatt en handling som er egnet til å volde skade", "At gjerningsbeskrivelsen er delvis oppfylt, at han har handlet med hensikt, og at han ikke frivillig har avstått fra å fullbyrde lovbruddet", "At handlingen er nær i tid, at den har entydig karakter, og at den psykologiske terskelen mot fullbyrdelse allerede er passert"],
      explanation: "Riktig svar er strafferammekravet på fengsel i 1 år eller mer, fullbyrdelsesforsettet og handlingskravet om noe som leder direkte mot utføringen. Kravet om 3 år og grov uaktsomhet er oppdiktet: forsøk krever forsett, aldri uaktsomhet. At gjerningsbeskrivelsen er delvis oppfylt er ikke et vilkår — grensen ligger nettopp før den er oppfylt, og tilbaketreden hører til annet ledd. De tre momentene er verktøy for å avgjøre det tredje vilkåret, ikke selvstendige vilkår.",
    },
    {
      question: "Hva innebærer strafferammekravet i straffeloven § 16 første ledd?",
      options: ["At lovbruddet det er forsøkt på, må ha en øvre lovbestemt strafferamme på fengsel i 1 år eller mer", "At retten i den konkrete saken må komme til at fengsel i minst 1 år er en passende reaksjon", "At forsøket selv må kunne straffes med fengsel i 1 år eller mer etter en konkret vurdering", "At minstestraffen i det aktuelle straffebudet må være fengsel i 1 år eller mer for at forsøk er mulig"],
      explanation: "Riktig svar er at det er den øvre lovbestemte rammen i straffebudet som avgjør, ikke hva retten ville utmålt. Distraktorene bytter ut den lovbestemte rammen med en konkret utmålingsvurdering, som ville gjort spørsmålet umulig å avgjøre før dom, eller med minstestraffen, som de færreste straffebud har i det hele tatt.",
    },
    {
      question: "Hva er fullbyrdelsesforsett?",
      options: ["At forsettet må dekke den fullbyrdede overtredelsen slik straffebudet beskriver den, ikke bare den handlingen han rakk å utføre", "At gjerningspersonen må ha hensiktsforsett, siden de svakere forsettsformene ikke kan bære et ansvar for et ufullbyrdet lovbrudd", "At forsettet må ha vært til stede sammenhengende fra planleggingen begynte og fram til forløpet ble avbrutt", "At forsettet må dekke selve forberedelseshandlingen, siden det er den handlingen gjerningspersonen faktisk foretok"],
      explanation: "Riktig svar er at forsettet må dekke hele den fullbyrdede overtredelsen, altså alle elementene i gjerningsbeskrivelsen. Alle tre forsettsformene kan bære et forsøksansvar, så kravet om hensiktsforsett er for strengt. Kravet om sammenhengende forsett fra planleggingen finnes ikke; skylden vurderes på handlingstidspunktet. Å nøye seg med forsett om forberedelseshandlingen ville gjort det straffbart å kjøpe verktøy.",
    },
    {
      question: "En person bryter seg inn i en garasje for å komme i ly for regnet. Kan han straffes for forsøk på tyveri?",
      options: ["Nei, fordi fullbyrdelsesforsettet ikke dekker vinningselementet i tyveribestemmelsen, og dekningsprinsippet krever at skylden dekker alle elementene", "Ja, fordi han har foretatt noe som leder direkte mot utføringen når han først har tatt seg ulovlig inn i en fremmed bygning han ikke hadde adgang til", "Ja, fordi tyveri har en strafferamme over 1 år, og han har passert forsøkets nedre grense ved å bryte opp døra", "Nei, fordi forsøk på tyveri først foreligger når han har tatt en gjenstand i hånden og er på vei ut av bygningen"],
      explanation: "Riktig svar er at forsettet må dekke hvert element i gjerningsbeskrivelsen, og han manglet forsett om å ta noe. De to bekreftende alternativene stanser ved det ytre forløpet og hopper over skyldkravet, som er nettopp feilen dekningsprinsippet er ment å hindre. Alternativet som først lar forsøk foreligge når han har tatt en gjenstand i hånden og er på vei ut av bygningen, forveksler forsøkets nedre grense med den øvre: å ha gjenstanden i hånden ville nærmet seg fullbyrdelse, ikke forsøk.",
    },
    {
      question: "Hva er ordlydsterskelen for forsøkets nedre grense i straffeloven § 16 første ledd?",
      options: ["At gjerningspersonen har foretatt noe som leder direkte mot utføringen av lovbruddet", "At gjerningspersonen har påbegynt den handlingen gjerningsbeskrivelsen i straffebudet omtaler", "At gjerningspersonen har gjort alt som fra hans side kreves for at følgen skal inntre", "At gjerningspersonen har kommet så nær fullbyrdelsen at forløpet ikke lenger kan avbrytes"],
      explanation: "Riktig svar er ordlyden om å foreta noe som leder direkte mot utføringen. Å påbegynne gjerningsbeskrivelsen ligger for sent: da nærmer man seg fullbyrdelse, og forsøksregelen ville blitt overflødig. Å ha gjort alt som kreves fra hans side beskriver det fullendte forsøket, som er en undergruppe. Kravet om at forløpet ikke lenger kan avbrytes ville utelukket tilbaketreden, som loven uttrykkelig åpner for.",
    },
    {
      question: "Hvorfor er forberedelse som hovedregel straffri?",
      options: ["Fordi strafferetten rammer handlinger og ikke sinnelag, og fordi en plan kan endres helt fram til den settes ut i livet", "Fordi forberedelseshandlinger sjelden lar seg bevise i ettertid, og fordi politiet mangler hjemmel til å etterforske dem på et så tidlig stadium", "Fordi forberedelse aldri er farlig nok til å begrunne straff, uansett hvilket lovbrudd den sikter mot", "Fordi forberedelse alltid ligger så langt fra følgen at gjerningspersonen ennå ikke har utvist forsett"],
      explanation: "Riktig svar er handlingsprinsippet og muligheten for at forløpet snur av seg selv. Bevisvanskene finnes, men er ikke begrunnelsen, og påstanden om manglende etterforskningshjemmel er uriktig. At forberedelse aldri er farlig nok, motsies av at lovgiver har kriminalisert enkelte forberedelseshandlinger særskilt. Og forsett kan foreligge lenge før grensen er passert — det er nettopp derfor handlingskravet trengs.",
    },
    {
      question: "Hvilke tre momenter anga Høyesterett i Rt. 2008 s. 867 avsnitt 20 for grensedragningen?",
      options: ["Den tidsmessige nærheten, handlingenes karakter og den psykologiske forskjellen mellom det som er gjort og det som gjenstår", "Lovbruddets grovhet, gjerningspersonens tidligere vandel og den faren handlingen skapte for utenforstående personer i nærheten av åstedet", "Handlingens ytre farlighet, styrken i gjerningspersonens forsett og hvor lang tid forberedelsene til sammen hadde tatt", "Avstanden i meter til åstedet, antall personer som deltok, og om utstyret som ble brukt var lovlig å inneha"],
      explanation: "Riktig svar er de tre momentene om tidsmessig nærhet, handlingenes karakter og den psykologiske forskjellen. De øvrige alternativene blander inn utmålingsmomenter som grovhet og vandel, eller rene faktumdetaljer som avstand og antall deltakere. Slike forhold kan være relevante bevismessig, men de er ikke det Høyesterett anga som vurderingstema.",
    },
    {
      question: "Hva måler momentet om den tidsmessige nærheten?",
      options: ["Hvor mye som gjenstår før fullbyrdelsen, ikke hvor lang tid forberedelsene allerede har tatt", "Hvor lang tid det er gått siden gjerningspersonen første gang bestemte seg for å begå lovbruddet", "Hvor lenge gjerningspersonen har oppholdt seg på åstedet før forløpet ble avbrutt av andre", "Hvor raskt følgen ville inntrådt dersom gjerningspersonen hadde fått gjennomført handlingen sin"],
      explanation: "Riktig svar er at momentet ser framover: det spør hva som gjenstår, ikke hvor lenge han har holdt på. Alternativet om tiden siden beslutningen er den nærmeste fella, fordi det høres ut som samme spørsmål — men tre måneders planlegging med fem sekunder igjen gir stor nærhet, mens fem minutters planlegging med tre uker igjen gir liten. Oppholdstid på åstedet og følgens hastighet er andre spørsmål.",
    },
    {
      question: "Hva spør momentet om handlingenes karakter etter?",
      options: ["Hvor entydig det gjerningspersonen har gjort, peker mot nettopp det lovbruddet han er tiltalt for å ha forsøkt", "Om handlingen gjerningspersonen har foretatt, i seg selv er ulovlig etter et annet straffebud enn det forsøkte", "Om handlingen er av en slik art at den ville voldt betydelig skade dersom forløpet var blitt gjennomført", "Om gjerningspersonen har brukt redskaper som er egnet til å fullbyrde lovbruddet han hadde forsett om"],
      explanation: "Riktig svar er entydigheten: hvor vanskelig handlingen er å forklare som noe annet enn et ledd i lovbruddet. Handlingens egen lovlighet er ikke avgjørende — Rt. 1939 s. 890 viser at en i seg selv lovlig handling kan være nok. Skadepotensialet og redskapenes egnethet er relevante bevismomenter, men de erstatter ikke spørsmålet om hva handlingen peker mot.",
    },
    {
      question: "Hva måler momentet om den psykologiske forskjellen?",
      options: ["Om det gjenstår et skritt som krever et nytt valg av annen art enn dem gjerningspersonen allerede har tatt", "Hvor fast bestemt gjerningspersonen var på å gjennomføre lovbruddet i det øyeblikket forløpet ble avbrutt av utenforstående", "Om gjerningspersonen hadde en sinnstilstand som kunne påvirke hans evne til å vurdere handlingen", "Hvor stor psykisk belastning gjennomføringen av lovbruddet ville påført den fornærmede i saken"],
      explanation: "Riktig svar er om det gjenstår et valg av annen art, altså en ny og tyngre terskel. Fasthet i forsettet er den nærmeste fella: en svært bestemt person kan ligge utenfor grensen fordi den tunge terskelen fortsatt står igjen. Sinnstilstand hører til skyldevnen i kapitlet om tilregnelighet, og belastningen for fornærmede er et utmålingsmoment.",
    },
    {
      question: "Hvordan skal de tre momentene fra Rt. 2008 s. 867 brukes?",
      options: ["Som tre innfallsvinkler til én samlet vurdering, der de kan trekke i hver sin retning og må veies mot hverandre", "Som tre kumulative vilkår, slik at det ikke foreligger forsøk dersom ett av de tre momentene taler mot det resultatet påtalemyndigheten bygger på", "Som en rangordnet liste der det tidsmessige momentet alltid går foran de to andre ved motstrid", "Som en huskeliste som skal gjengis innledningsvis, før grensen avgjøres ut fra en helhetsvurdering"],
      explanation: "Riktig svar er at momentene er innfallsvinkler til én samlet vurdering og må veies. De er ikke kumulative vilkår — et forløp kan passere grensen selv om ett moment trekker den andre veien. Det finnes heller ingen fast rangordning mellom dem. Og å gjengi dem innledningsvis uten å bruke dem på faktum er nettopp den feilen som består i å gjengi pensum i stedet for å svare.",
    },
    {
      question: "Hvorfor sier boka at forsøkets nedre grense er en sammensatt vurdering og ikke et tidspunkt?",
      options: ["Fordi hvor mye som gjenstår, hvor entydige handlingene er og hvor tung terskelen er, varierer med lovbruddet og forløpet", "Fordi Høyesterett har uttalt at grensen alltid må trekkes senere enn det påtalemyndigheten har lagt til grunn i tiltalebeslutningen sin", "Fordi domstolene i praksis vegrer seg for å konkludere, og heller viser til at spørsmålet beror på skjønn", "Fordi det ikke finnes rettspraksis om spørsmålet, slik at grensen må avgjøres ut fra reelle hensyn alene"],
      explanation: "Riktig svar er at momentene slår ulikt ut fra lovbrudd til lovbrudd og fra forløp til forløp, slik at et klokkeslett i én sak ikke sier noe i en annen. Høyesterett har ikke oppstilt noen presumsjon i tiltaltes favør av den typen alternativet om at grensen alltid må trekkes senere enn det påtalemyndigheten har lagt til grunn i tiltalebeslutningen, beskriver. At vurderingen er sammensatt betyr heller ikke at man skal la være å konkludere. Og rettspraksis finnes: Rt. 2008 s. 867 er hovedavgjørelsen.",
    },
    {
      question: "Hva var faktum i Rt. 2008 s. 867?",
      options: ["En mann hadde avtalt å møte en 14 år gammel jente på et hotell, men hun trakk seg mens de fortsatt var i et publikumsområde", "En mann hadde gått rundt utenfor et forretningslokale med parykk og fyrstikker, og hadde en bensinkanne i bilen", "En mann hadde lokket en jente opp på et loft med seksuelle hensikter, uten at handlingen i seg selv var ulovlig", "En kvinne hadde gjentatte ganger gitt sin ektefelle rottegift, og ringte etter ambulanse først flere timer etter at han mistet bevisstheten"],
      explanation: "Riktig svar er hotellsaken, der Høyesterett i avsnitt 20 anga de tre momentene i grensevurderingen. Parykk og bensinkanne er Rt. 1995 s. 17, og loftet er Rt. 1939 s. 890 — begge avgjørelser om samme tema, men med motsatt utfall av hverandre. Rottegiftsaken gjelder tilbaketreden og hører til kapitlet om forsøkets øvre grense.",
    },
    {
      question: "Hva brukes Rt. 1939 s. 890 til i forsøkslæren?",
      options: ["Som eksempel på at en handling som i seg selv er lovlig, kan være den handlingen som leder direkte mot utføringen", "Som eksempel på at grundig forberedelse med utstyr og forkledning ikke i seg selv passerer den nedre grensen for straffbart forsøk", "Som hjemmel for at de tre momentene skal veies mot hverandre i en samlet vurdering av forløpet", "Som eksempel på at et forsøk er straffbart selv om det aldri kunne ha ført fram til fullbyrdelse"],
      explanation: "Riktig svar er at avgjørelsen viser at en i seg selv lovlig handling kan passere grensen, fordi det er handlingens funksjon i forløpet som teller. Den grundige forberedelsen som ikke var nok, er Rt. 1995 s. 17. Momentlisten kommer fra Rt. 2008 s. 867. Og spørsmålet om det umulige forsøket er et eget tema som hører hjemme i neste kapittel.",
    },
    {
      question: "Hva brukes Rt. 1995 s. 17 til?",
      options: ["Til å vise at omfattende forberedelse ikke er nok, og at den psykologiske forskjellen er et moment i grensedragningen", "Til å vise at den tidsmessige nærheten alene avgjør hvor forsøkets nedre grense skal trekkes, uansett hvilket lovbrudd det gjelder", "Til å vise at forsøkets øvre grense må fastlegges ved en tolkning av det enkelte straffebudet", "Til å vise at frivillig tilbaketreden fra et fullendt forsøk krever at gjerningspersonen avverger følgen"],
      explanation: "Riktig svar er at parykksaken viser begge deler: forberedelsen var omfattende, men det avgjørende skrittet gjensto. At ett moment alene avgjør, er i strid med at vurderingen er sammensatt. Den øvre grensen og tilbaketreden er egne temaer som ikke ble avgjort i denne saken.",
    },
    {
      question: "Hvordan fastlegges forsøkets øvre grense?",
      options: ["Ved å tolke det enkelte straffebudet for å finne når gjerningsbeskrivelsen er oppfylt", "Ved å veie de tre momentene fra Rt. 2008 s. 867 mot hverandre i en samlet vurdering", "Ved å vurdere om gjerningspersonen fortsatt kunne trådt tilbake fra forløpet på det aktuelle tidspunktet", "Ved å avgjøre om følgen av handlingen inntrådte innen rimelig tid etter at forløpet ble avsluttet"],
      explanation: "Riktig svar er at den øvre grensen er en tolkningsoppgave knyttet til straffebudet, og at den derfor ligger ulikt for et handlingsdelikt og et følgedelikt. De tre momentene hører til den nedre grensen, og å bruke dem her er en sjangerfeil. Muligheten for tilbaketreden er en følge av hvor grensen ligger, ikke det som bestemmer den.",
    },
    {
      question: "Hva følger av straffeloven § 80 bokstav b?",
      options: ["At straffen kan settes under minstestraffen eller til en mildere straffart når lovbryteren dømmes for forsøk", "Ved å veie de tre momentene fra Rt. 2008 s. 867 avsnitt 20 mot hverandre i en samlet vurdering av hele hendelsesforløpet", "At forsøk på lovbrudd med en strafferamme under 1 år kan straffes dersom særlige grunner tilsier det", "At retten skal frifinne den som frivillig har avstått fra å fullbyrde lovbruddet han hadde forsett om"],
      explanation: "Riktig svar er at bestemmelsen åpner en mulighet for å gå under minstestraffen eller velge en mildere straffart. Den gir ingen fast rabatt, og den endrer ikke strafferammen oppad. Strafferammekravet i § 16 første ledd kan ikke fravikes etter § 80. Frifinnelse ved frivillig avståelse følger av § 16 annet ledd om tilbaketreden.",
    },
    {
      question: "Kan et lovbrudd som bare krever uaktsomhet, forsøkes?",
      options: ["Nei, fordi straffeloven § 16 første ledd krever forsett om å fullbyrde, og uaktsomhet er fravær av nettopp det forsettet", "Ja, dersom uaktsomheten var grov og lovbruddet hadde en strafferamme på fengsel i 1 år eller mer", "Ja, men bare når gjerningspersonen var klar over risikoen og likevel valgte å handle som han gjorde", "At retten skal frifinne den som frivillig har avstått fra å fullbyrde det lovbruddet han opprinnelig hadde forsett om å gjennomføre"],
      explanation: "Riktig svar er at forsøk forutsetter forsett om fullbyrdelse, og at uaktsomhet nettopp mangler dette. Grov uaktsomhet hjelper ikke, for det er skyldformen og ikke graden som er problemet. Bevisst uaktsomhet, der han er klar over risikoen, er fortsatt uaktsomhet og ikke forsett. Og flere uaktsomme lovbrudd har rammer over 1 år, så alternativet som gjør forsøksansvaret avhengig av at uaktsomheten var grov og strafferammen fengsel i 1 år eller mer, bygger på en uriktig forutsetning.",
    },
    {
      question: "Hva menes med selvstendig kriminalisert forberedelse?",
      options: ["Forberedelseshandlinger som lovgiver har gjort straffbare i egne straffebud, uavhengig av forsøkets nedre grense", "Ja, dersom uaktsomheten var grov og lovbruddet i tillegg hadde en strafferamme på fengsel i 1 år eller mer etter straffebudet", "Forberedelseshandlinger som er straffbare fordi gjerningspersonen har handlet sammen med minst én annen", "Forberedelseshandlinger som først blir straffbare dersom det lovbruddet de siktet mot, senere blir fullbyrdet"],
      explanation: "Riktig svar er at det finnes egne straffebud som rammer visse forberedelseshandlinger, og at slike handlinger da er fullbyrdede overtredelser av sitt eget bud. Å likestille forberedelse med forsøk ved en konkret vurdering ville opphevet grensen § 16 setter. Verken deltakelse av flere eller senere fullbyrdelse er noe vilkår for slike straffebud.",
    },
    {
      question: "Hvordan skal forsøkets nedre grense vurderes når flere personer deltar i samme forløp?",
      options: ["Særskilt for hver enkelt, fordi både forsettet og handlingen etter § 16 første ledd er den enkeltes egne", "Forberedelseshandlinger som er så nær fullbyrdelsen at de etter en konkret vurdering av forløpet må likestilles med forsøk", "Etter den deltakeren som er kommet lengst, siden forløpet er ett og samme hendelsesforløp for alle", "Bare for hovedpersonen, siden de øvrige uansett bare kan straffes etter reglene om medvirkning"],
      explanation: "Riktig svar er at vurderingen gjøres for hver enkelt, fordi vilkårene i § 16 første ledd er knyttet til den enkelte gjerningspersonen. En samlet vurdering for gruppen ville gjort den som satt hjemme, ansvarlig for det de andre gjorde. Og selv om medvirkningsansvaret ofte er aktuelt for de øvrige, skal forsøksvilkårene prøves for hver av dem først.",
    },
    {
      question: "Hva innebærer kravet om proporsjon i en forsøksdrøftelse?",
      options: ["At det klare behandles kort og det tvilsomme grundig, slik at plassen brukes der spørsmålet faktisk byr på tvil", "At hvert av de tre vilkårene i § 16 første ledd får omtrent like mye plass i besvarelsen", "At besvarelsen må være omtrent like lang som det antall minutter oppgaven er tildelt tilsier", "Bare for hovedpersonen i forløpet, siden de øvrige uansett bare kan straffes etter reglene om medvirkning i straffeloven § 15"],
      explanation: "Riktig svar er at drøftelsen dimensjoneres etter tvilen. Å gi alle vilkår like mye plass er nettopp det motsatte, og gjør at det opplagte stjeler tid fra det vanskelige. Å dimensjonere fornuftig er et selvstendig vurderingskriterium ved fakultetet, og det gjelder fordelingen mellom spørsmålene, ikke en fast lengde eller en fast andel.",
    },
    {
      question: "Hva skiller en objektiv fra en subjektiv forsøkslære?",
      options: ["Den objektive legger vekt på hvor nær en reell krenkelse forløpet kom, den subjektive på gjerningspersonens vilje", "Den objektive gjelder følgedelikter, mens den subjektive bare kommer til anvendelse på handlingsdelikter", "At besvarelsen skal ha omtrent like mange ord som det antall minutter oppgaven er tildelt i settet", "At de rettspolitiske betraktningene aldri skal utgjøre mer enn en femdel av den samlede teksten i besvarelsen"],
      explanation: "Riktig svar er at de to lærene vektlegger henholdsvis den ytre farligheten og viljen, og at de derfor trekker grensen på ulike steder. Sondringen følger ikke deliktstypene, og den handler ikke om bevisregler. Norsk rett er et kompromiss: § 16 første ledd krever både forsett om fullbyrdelse og en ytre handling som leder direkte mot utføringen.",
    },
    {
      question: "Hvordan ser den typiske feilen om forsøkets nedre grense ut i en besvarelse?",
      options: ["Som en setning der grensen konstateres passert på et bestemt tidspunkt, uten at momentene brukes på faktum", "Som en setning der grensen konstateres passert etter at alle tre momentene er anvendt og veid mot hverandre", "Som en drøftelse der kandidaten lander på et annet resultat enn det Høyesterett kom til i Rt. 2008 s. 867", "Som en drøftelse der kandidaten tar forbehold om utfallet i stedet for å konkludere klart på spørsmålet"],
      explanation: "Riktig svar er den ubegrunnede konstateringen av et tidspunkt. Å konkludere etter å ha veid momentene er derimot nettopp det oppgaven ber om. Å lande på et annet resultat enn Høyesterett i en annen sak er ikke en feil — konklusjonen er ikke det avgjørende, og både oppgavetekster og veiledninger i materialet sier det uttrykkelig.",
    },
    {
      question: "Hvilken av disse begrunnelsene bærer forsøksansvaret best, slik boka framstiller det?",
      options: ["Allmennprevensjonen, fordi en trussel som bare rammet den vellykkede gjerningspersonen ville virke svakere", "Gjengjeldelsestanken, fordi den knytter straffverdigheten til den skaden som faktisk ble påført fornærmede", "Hensynet til fornærmedes behov for oppreisning, fordi et forsøk ofte oppleves like krenkende som en fullbyrdelse", "Hensynet til rettsenhet, fordi like tilfeller ellers ville blitt behandlet ulikt i de forskjellige lagdømmene"],
      explanation: "Riktig svar er allmennprevensjonen, som forklarer hvorfor strafferammen oppad er den samme som ved fullbyrdelse. Gjengjeldelsestanken har vansker med forsøk nettopp fordi skaden uteble, og må i så fall flytte fokus fra skaden til klanderverdigheten. Oppreisning og rettsenhet er reelle hensyn, men de begrunner ikke selve forsøksansvaret.",
    },
    {
      question: "Hva er svakheten ved å begrunne forsøksstraff utelukkende med allmennprevensjon?",
      options: ["At hensynet taler for å gripe inn stadig tidligere, og dermed ikke forklarer hvorfor forberedelse er straffri", "At hensynet forutsetter at gjerningspersonen kjenner strafferammen for det lovbruddet han forsøker å begå, noe han sjelden gjør", "At hensynet bare gjelder for lovbrudd med en strafferamme på fengsel i mer enn seks år etter loven", "At hensynet ikke lar seg forene med at straffen ved forsøk kan settes under minstestraffen i straffebudet"],
      explanation: "Riktig svar er at allmennprevensjonen trekker mot stadig tidligere inngripen og derfor ikke gir noen grunn til å ha en nedre grense i det hele tatt. Hensynet forutsetter ikke kunnskap om den konkrete rammen, og det er ikke begrenset til bestemte strafferammer. At straffen kan settes lavere ved forsøk, henger sammen med at skaden uteble, og motsier ikke allmennprevensjonen.",
    },
    {
      question: "En person har fått kopiert nøkkelen til en fremmed inngangsdør og står utenfor bygget uten å ha satt nøkkelen i låsen. Hvilket moment taler tydeligst mot at grensen er passert?",
      options: ["Den psykologiske forskjellen, fordi det gjenstår å ta seg ulovlig inn, som er et valg av annen art enn å stå utenfor", "Den tidsmessige nærheten, fordi det ikke er sagt noe om når han hadde tenkt å gjennomføre lovbruddet inne i bygget", "Handlingenes karakter, fordi det å ha en nøkkel er lovlig og derfor aldri kan inngå i en forsøksvurdering", "Strafferammekravet, fordi det ikke er opplyst hvilket lovbrudd han hadde forsett om å fullbyrde i bygget"],
      explanation: "Riktig svar er den psykologiske forskjellen: å ta seg inn er en ny og tyngre terskel enn å stå utenfor. Den tidsmessige nærheten taler snarere for at grensen er nær, siden han allerede er på stedet. At en handling er lovlig, utelukker ikke at den teller — Rt. 1939 s. 890 viser det motsatte. Og strafferammekravet er et eget vilkår, ikke et moment i grensevurderingen.",
    },
  ],
  'juroff1500-4-2': [
    {
      question: "Hvordan fastlegges forsøkets øvre grense?",
      options: ["Ved å tolke det enkelte straffebudet og finne ut når gjerningsbeskrivelsen er oppfylt", "Ved å veie de tre momentene fra Rt. 2008 s. 867 mot hverandre i en samlet vurdering", "Ved å avgjøre om gjerningspersonen fortsatt hadde mulighet til å avbryte forløpet sitt", "Ved å vurdere om handlingen var farlig nok til å begrunne straff for en fullbyrdelse"],
      explanation: "Riktig svar er at den øvre grensen er en ren tolkningsoppgave knyttet til straffebudets gjerningsbeskrivelse. De tre momentene hører til den nedre grensen, og å bruke dem her er en sjangerfeil. Muligheten for å avbryte er en følge av hvor grensen ligger, ikke det som bestemmer den, og handlingens farlighet er et utmålingsmoment.",
    },
    {
      question: "Når er en overtredelse av et handlingsdelikt fullbyrdet?",
      options: ["I det handlingen er utført, siden bestemmelsen ikke krever at noen bestemt følge inntrer", "Når følgen av handlingen har inntrådt, siden ethvert straffebud forutsetter en virkning", "Når gjerningspersonen har gjort alt som fra hans side kreves for at følgen skal inntre", "Når handlingen er avsluttet og gjerningspersonen har forlatt åstedet uten å bli oppdaget"],
      explanation: "Riktig svar er at handlingsdeliktet er fullbyrdet i det handlingen er utført. At følgen må inntre, gjelder følgedelikter, ikke handlingsdelikter. Å ha gjort alt fra sin side beskriver det fullendte forsøket, som er noe annet enn fullbyrdelse. Og om han slapp unna, er uten betydning for om gjerningsbeskrivelsen er oppfylt.",
    },
    {
      question: "Hvorfor kan forsøksstadiet vare lenge i et følgedelikt?",
      options: ["Fordi overtredelsen først er fullbyrdet når følgen inntrer, og det kan skje lenge etter at han har handlet", "Fordi følgedelikter har høyere strafferammer og derfor gir gjerningspersonen bedre tid til å ombestemme seg", "Fordi domstolene i følgedelikter praktiserer en romsligere nedre grense enn i vanlige handlingsdelikter", "Fordi skyldkravet i følgedelikter må være oppfylt gjennom hele forløpet og ikke bare på handlingstidspunktet"],
      explanation: "Riktig svar er tidsrommet mellom handling og følge: i hele mellomrommet foreligger et forsøk. Strafferammen har ingenting med saken å gjøre. Den nedre grensen fastlegges likt uansett deliktstype. Og skylden vurderes på handlingstidspunktet, ikke gjennom hele forløpet.",
    },
    {
      question: "Hvorfor må forsøkets øvre grense avgjøres før spørsmålet om tilbaketreden?",
      options: ["Fordi straffeloven § 16 annet ledd forutsetter at fullbyrdelsen fortsatt ligger foran gjerningspersonen", "Fordi frivillighetskravet bare kan vurderes når man vet hvor lenge gjerningspersonen holdt på med forløpet", "Fordi straffeloven § 16 annet ledd bare gjelder for de lovbruddene som har en strafferamme over ett år", "Fordi retten må fastsette straffen for den fullbyrdede overtredelsen før den kan vurdere en nedsettelse"],
      explanation: "Riktig svar er at begge alternativene i annet ledd — å avstå og å avverge — forutsetter at lovbruddet ennå ikke er fullbyrdet. Frivilligheten måler et valg, ikke varighet. Strafferammekravet ligger i første ledd og gjelder forsøket som sådan. Og tilbaketreden gir straffrihet, ikke en nedsettelse retten skal beregne.",
    },
    {
      question: "Hva er et utjenlig forsøk?",
      options: ["Et forsøk som av objektive grunner aldri kunne ha ført fram, fordi middelet eller objektet ikke duget", "Et forsøk der gjerningspersonen ikke passerte den nedre grensen fordi det gjensto for mange ledd", "Et forsøk der gjerningspersonen manglet forsett om å fullbyrde det lovbruddet han er tiltalt for", "Et forsøk som ble avbrutt av utenforstående før gjerningspersonen rakk å fullbyrde overtredelsen"],
      explanation: "Riktig svar er at utjenligheten ligger i at fullbyrdelse objektivt sett var umulig. At grensen ikke er passert, er straffri forberedelse, og manglende forsett betyr at det ikke foreligger noe forsøk i det hele tatt. Et forsøk som blir avbrutt av andre, er et helt alminnelig forsøk — det er nettopp den typiske forsøkssituasjonen.",
    },
    {
      question: "Er et utjenlig forsøk straffbart etter norsk rett?",
      options: ["Ja, fordi gjerningspersonen bedømmes etter sin egen oppfatning av situasjonen, og vilkårene i § 16 første ledd er oppfylt", "Nei, fordi en handling som umulig kunne ha ført til fullbyrdelse, ikke kan sies å lede direkte mot utføringen av lovbruddet", "Ja, men bare når utjenligheten skyldes objektet og ikke når den skyldes at middelet ikke var virksomt", "Nei, med mindre gjerningspersonen burde ha forstått at middelet han brukte, ikke kunne føre fram"],
      explanation: "Riktig svar er at det utjenlige forsøket er straffbart, og at begrunnelsen er at gjerningspersonen bedømmes etter sin egen oppfatning av situasjonen. Å tro at slike forsøk er straffrie, er en av de typiske feilene registeret fører opp. Skillet mellom utjenlighet i middelet og i objektet er praktisk og ikke rettslig, og hva han burde forstått, er et uaktsomhetsspørsmål som ikke hører hjemme her.",
    },
    {
      question: "En person skyter mot en seng han tror det ligger noen i, men senga er tom. Hva slags tilfelle er dette?",
      options: ["Utjenlighet i objektet, som behandles på samme måte som utjenlighet i middelet og er straffbart", "Utjenlighet i middelet, siden våpenet ikke kunne ramme noen i den situasjonen han faktisk sto i", "Et innbilt lovbrudd, siden han i realiteten bare har skutt i en madrass som tilhører ham selv", "Straffri forberedelse, siden forsøkets nedre grense ikke kan passeres uten et virkelig angrepsobjekt"],
      explanation: "Riktig svar er utjenlighet i objektet: målet var ikke det han trodde. Middelet var i orden — våpenet virket. Et innbilt lovbrudd forutsetter at handlingen er lovlig, mens drap er et straffebud som finnes. Og grensen i § 16 første ledd vurderes etter hans forestilling, så et tomt objekt gjør ikke handlingen til forberedelse.",
    },
    {
      question: "Hva skiller et innbilt lovbrudd fra et utjenlig forsøk?",
      options: ["Ved det innbilte lovbruddet har han tatt feil av retten, ved det utjenlige forsøket har han tatt feil av faktum", "Ved det innbilte lovbruddet har han tatt feil av faktum, ved det utjenlige forsøket har han tatt feil av retten", "Ved det innbilte lovbruddet er handlingen fullbyrdet, mens det utjenlige forsøket alltid stanser på forsøksstadiet", "Ved det innbilte lovbruddet mangler strafferammekravet, mens det utjenlige forsøket mangler handlingskravet"],
      explanation: "Riktig svar er at skillet går mellom å ta feil av retten og å ta feil av verden. Ved det innbilte lovbruddet finnes det ikke noe straffebud han overtrer, og legalitetsprinsippet stenger for straff. Kontrollen er å spørre om handlingen ville vært straffbar dersom verden hadde vært slik han trodde.",
    },
    {
      question: "Hva brukes Rt. 2010 s. 287 til?",
      options: ["Til å vise at utjenlig forsøk er straffbart, og at utjenligheten får betydning ved straffutmålingen", "Til å vise at frivillig tilbaketreden krever et reelt valg mellom flere handlingsalternativer", "Til å vise at en i seg selv lovlig handling kan være den som leder direkte mot utføringen", "Til å vise at den psykologiske forskjellen er et moment ved forsøkets nedre grense"],
      explanation: "Riktig svar er utjenlighetssaken, der innførselen gjaldt et stoff tiltalte trodde var kokain. Frivillighetskravet er presisert i HR-2019-47-A. Påstanden om at dommen viser at en i seg selv lovlig handling kan være den som leder direkte mot utføringen, og påstanden om at den gjelder den psykologiske forskjellen som moment, beskriver begge avgjørelser om forsøkets nedre grense, som hører til forrige kapittel.",
    },
    {
      question: "Hva sier straffeloven § 16 annet ledd?",
      options: ["At den som frivillig avstår fra å fullbyrde lovbruddet eller avverger at det blir fullbyrdet, ikke straffes for forsøk", "At straffen for forsøk kan settes under minstestraffen når gjerningspersonen selv har avbrutt forløpet sitt", "At den som angrer og gjenoppretter skaden etter fullbyrdelsen, kan fritas for straff dersom retten finner grunn til det", "At forsøk bare er straffbart når lovbruddet det er forsøkt på, kan medføre fengsel i mer enn ett år"],
      explanation: "Riktig svar gjengir bestemmelsen: to alternativer, avstå eller avverge, begge med krav om frivillighet, og med straffrihet som virkning. Nedsettelse av straffen for forsøk følger av § 80 bokstav b, ikke av § 16. Anger etter fullbyrdelsen er ikke tilbaketreden. Og strafferammekravet står i første ledd.",
    },
    {
      question: "Hva er et ufullendt forsøk?",
      options: ["Et forsøk der det fortsatt gjenstår noe gjerningspersonen selv må gjøre for at lovbruddet skal fullbyrdes", "Et forsøk der gjerningspersonen har gjort alt fra sin side, men følgen ennå ikke har rukket å inntre", "Et forsøk som ikke har passert den nedre grensen, slik at det fortsatt er tale om straffri forberedelse", "Et forsøk som ble avbrutt av andre før gjerningspersonen fikk anledning til å ombestemme seg selv"],
      explanation: "Riktig svar er at det gjenstår noe han selv må gjøre. Å ha gjort alt fra sin side er nettopp det fullendte forsøket, og de to må ikke byttes om, siden de stiller helt ulike krav til tilbaketreden. Forberedelse ligger under den nedre grensen, og et avbrutt forsøk er et alminnelig forsøk.",
    },
    {
      question: "Hva kreves for at tilbaketreden fra et fullendt forsøk skal føre fram?",
      options: ["At gjerningspersonen frivillig avverger at lovbruddet blir fullbyrdet, altså griper aktivt inn og hindrer følgen", "Et forsøk der gjerningspersonen har gjort alt som fra hans side kreves, men følgen ennå ikke har rukket å inntre", "At gjerningspersonen melder seg for politiet og forklarer seg om forholdet før følgen har inntrådt", "At gjerningspersonen gjør sitt beste for å hindre følgen, uavhengig av om forsøket på å hindre den lykkes"],
      explanation: "Riktig svar er at han må avverge, og at avvergingen må virke. Å avstå er nok bare ved det ufullendte forsøket. Selvmelding er ikke nevnt i bestemmelsen og hjelper ikke i seg selv. Og et mislykket avvergingsforsøk gir ikke straffrihet etter annet ledd, men kan telle ved utmålingen.",
    },
    {
      question: "Hva ligger i frivillighetskravet i straffeloven § 16 annet ledd?",
      options: ["At gjerningspersonen tar et reelt og bevisst valg i en situasjon der han slik han oppfattet den, hadde flere alternativer", "At gjerningspersonen frivillig avstår fra å gjøre noe mer, siden han allerede har gjort alt som fra hans side kreves", "At gjerningspersonen ikke har vært utsatt for noen form for påvirkning fra andre personer underveis i forløpet", "At gjerningspersonen selv tar initiativet til å varsle politiet eller den fornærmede før følgen har inntrådt"],
      explanation: "Riktig svar er at kravet gjelder valgsituasjonen: hadde han et reelt alternativ, og brukte han det? Motivets kvalitet er uten betydning — det stilles uttrykkelig ikke krav om anger. Påvirkning fra andre utelukker ikke frivillighet så lenge valget var hans, og varsling er ikke noe selvstendig vilkår.",
    },
    {
      question: "En person avbryter et innbrudd fordi han hører en bil han tror er politiet, og løper. Er dette frivillig tilbaketreden?",
      options: ["Nei, fordi en panikkartet handling foretatt i frykt for oppdagelse ikke er et reelt valg mellom alternativer", "Ja, fordi han faktisk avsto fra å fullbyrde lovbruddet, og motivet for avståelsen er uten betydning", "Ja, fordi det ikke stilles krav om anger, og frykt for oppdagelse er et like gyldig motiv som ethvert annet", "Nei, fordi tilbaketreden alltid krever at gjerningspersonen aktivt avverger at lovbruddet blir fullbyrdet"],
      explanation: "Riktig svar er at frykten for oppdagelse fjerner valget, og at kravet om et reelt og bevisst valg da ikke er oppfylt. De to bekreftende alternativene forveksler to ting: at motivet ikke prøves moralsk, betyr ikke at ytre tvang er uten betydning. Og avvergingskravet gjelder bare fullendte forsøk.",
    },
    {
      question: "En person avbryter et innbrudd fordi han plutselig husker at en venn bor i bygget. Er dette frivillig tilbaketreden?",
      options: ["Ja, fordi valget fortsatt var hans, og det stilles ikke krav om at tilbaketredenen skjer av anger", "Nei, fordi motivet ikke var anger over lovbruddet, men hensynet til en bestemt person han kjente", "Nei, fordi han ikke avverget noe, og et rent sinnsskifte er ikke nok etter straffeloven § 16 annet ledd", "Ja, men bare dersom han i tillegg varsler den fornærmede eller politiet innen rimelig tid etterpå"],
      explanation: "Riktig svar er at kravet er oppfylt: han hadde fortsatt et alternativ og valgte å la være. Kravet om anger finnes ikke i loven. Ved et ufullendt forsøk er det nettopp nok å avstå, så avvergingskravet er ikke aktuelt. Og noen varslingsplikt oppstiller bestemmelsen ikke.",
    },
    {
      question: "Hva var faktum i HR-2019-47-A?",
      options: ["En kvinne hadde gjentatte ganger gitt ektemannen rottegift, og varslet nødetatene etter flere timer som ledd i en plan", "Nei, fordi motivet ikke var anger over selve lovbruddet, men hensynet til en bestemt person han tilfeldigvis kjente", "En mann hadde innført tre kilo av et stoff han trodde var kokain, men som ikke sto på narkotikalisten", "En mann hadde avtalt å møte en ung jente på et hotell, men hun trakk seg mens de var i et publikumsområde"],
      explanation: "Riktig svar er rottegiftsaken, der Høyesterett presiserte frivillighetskravet ved tilbaketreden. Parykksaken er Rt. 1995 s. 17 og hotellsaken Rt. 2008 s. 867, som begge gjelder forsøkets nedre grense. Innførselen av det uvirksomme stoffet er Rt. 2010 s. 287 om utjenlig forsøk.",
    },
    {
      question: "Hva brukes Rt. 1988 s. 18 til i læren om tilbaketreden?",
      options: ["Til å vise at et avbrudd som skyldes at gjennomføringen ikke lot seg gjøre, ikke er en frivillig tilbaketreden", "Til å vise at det ikke stilles krav om anger, slik at et hvilket som helst motiv oppfyller frivillighetskravet", "Til å vise at avvergingskravet ved fullendte forsøk krever et resultat og ikke bare en innsats fra hans side", "Til å vise at tilbaketreden ikke fjerner ansvaret for andre lovbrudd som er fullbyrdet underveis i forløpet"],
      explanation: "Riktig svar er at avgjørelsen viser at et avbrudd uten valg ikke er tilbaketreden. At anger ikke kreves, og at avvergingen må virke, følger av bestemmelsen og av den senere presiseringen i HR-2019-47-A. Spørsmålet om andre lovbrudd følger av at annet ledd bare gjelder straff for forsøk.",
    },
    {
      question: "Hva er forskjellen på tilbaketreden og anger i ettertid?",
      options: ["Tilbaketreden skjer før fullbyrdelsen og hindrer den, mens anger i ettertid kommer etterpå og bare teller ved utmålingen", "Tilbaketreden krever at gjerningspersonen melder seg selv, mens anger i ettertid kan skje uten kontakt med politiet", "Tilbaketreden gjelder bare ufullendte forsøk, mens anger i ettertid er det som regulerer de fullendte forsøkene", "Tilbaketreden forutsetter at det ikke er voldt noen skade, mens anger i ettertid forutsetter at skaden er gjenopprettet"],
      explanation: "Riktig svar er at tidspunktet avgjør: bare det som stanser forløpet i tide, er tilbaketreden. Selvmelding er ikke noe vilkår. Tilbaketreden gjelder begge forsøksformer, men med ulike krav. Og at det ikke er voldt skade, er ikke et vilkår — det er en følge av at fullbyrdelsen ble hindret.",
    },
    {
      question: "Hva er virkningen av en gyldig tilbaketreden etter straffeloven § 16 annet ledd?",
      options: ["Straffrihet for forsøket, uten at retten har noe skjønn, men uten at ansvaret for andre fullbyrdede lovbrudd faller bort", "Tilbaketreden krever at gjerningspersonen melder seg selv for politiet, mens anger i ettertid kan skje uten slik kontakt", "At retten kan sette straffen under minstestraffen eller til en mildere straffart dersom særlige grunner tilsier det", "At handlingen blir lovlig, på samme måte som når noen forsvarer seg mot et pågående og ulovlig angrep"],
      explanation: "Riktig svar er ubetinget straffrihet for forsøket, og bare for forsøket. Lovbrudd som er fullbyrdet på veien, står uendret. Adgangen til å gå under minstestraffen følger av § 80, ikke av § 16 annet ledd. Og tilbaketreden gjør ikke handlingen lovlig — det er noe en straffrihetsgrunn gjør.",
    },
    {
      question: "Etter hvilken målestokk skal frivilligheten vurderes?",
      options: ["Etter situasjonen slik gjerningspersonen oppfattet den, ikke slik den objektivt sett viste seg å være", "Etter situasjonen slik den objektivt sett var, siden retten ellers ville måtte bygge på tiltaltes egen forklaring", "Etter hva en alminnelig fornuftig person ville ha oppfattet dersom vedkommende sto i samme situasjon", "Etter hva politiet og påtalemyndigheten har lagt til grunn i tiltalebeslutningen i den konkrete saken"],
      explanation: "Riktig svar er gjerningspersonens egen oppfatning. Det er den samme grunntanken som bærer det utjenlige forsøket: han bedømmes etter sitt eget bilde av situasjonen, både når det taler mot ham og når det taler for ham. En objektiv målestokk hører til uaktsomhetsvurderingen, ikke hit.",
    },
    {
      question: "En person har helt bensin utover et gulv, men har ikke tent på. Hva kreves for at han skal gå fri etter § 16 annet ledd?",
      options: ["At han frivillig avstår fra å tenne på, siden forsøket er ufullendt og det gjenstår noe han selv må gjøre", "At han frivillig fjerner bensinen igjen, siden han har skapt en fare som han er forpliktet til å avverge", "At han frivillig varsler naboene eller brannvesenet, siden faren allerede er skapt ved det han har gjort", "At han frivillig melder forholdet til politiet, siden forsøkets nedre grense allerede er passert på dette punktet"],
      explanation: "Riktig svar er at det er nok å avstå, fordi forsøket er ufullendt. De øvrige alternativene innfører krav som hører til det fullendte forsøket eller ikke finnes i loven i det hele tatt. Merk likevel at avståelsen bare fjerner ansvaret for forsøket, og at eventuelle andre lovbrudd står uendret.",
    },
    {
      question: "Hvorfor stiller loven strengere krav til tilbaketreden ved fullendte enn ved ufullendte forsøk?",
      options: ["Fordi han har sluppet forløpet ut av hendene sine, slik at det vil løpe videre av seg selv om ingen griper inn", "Fordi et fullendt forsøk alltid gjelder mer alvorlige lovbrudd enn de forsøkene som ennå er ufullendte", "Fordi bevisspørsmålet er vanskeligere ved fullendte forsøk, og loven derfor krever et objektivt konstaterbart utslag", "Fordi han ved et fullendt forsøk allerede har fullbyrdet gjerningsbeskrivelsen i det aktuelle straffebudet"],
      explanation: "Riktig svar er at forløpet er sluppet løs, og at et sinnsskifte alene da ikke stanser noe. Alvorlighetsgraden har ikke med sondringen å gjøre. Bevishensyn forklarer ikke kravet. Og alternativet om at han ved et fullendt forsøk allerede har fullbyrdet gjerningsbeskrivelsen i straffebudet, blander sammen fullendt forsøk med fullbyrdelse: hadde gjerningsbeskrivelsen vært oppfylt, ville tilbaketreden vært utelukket.",
    },
    {
      question: "Hvordan er den underliggende begrunnelsen for at utjenlige forsøk straffes, best formulert?",
      options: ["Klanderverdigheten er den samme som ved et tjenlig forsøk, og at fullbyrdelsen strandet på noe han ikke visste, er tilfeldig", "Handlingen er objektivt farlig, og faren for at noen skulle bli skadet, var like stor som ved et helt alminnelig forsøk", "Lovgiver har uttrykkelig bestemt i straffeloven § 16 annet ledd at også utjenlige forsøk skal være straffbare", "Domstolene har behov for å kunne straffe alle som har vist vilje til å begå lovbrudd, uansett hvordan de gikk fram"],
      explanation: "Riktig svar er at klanderverdigheten er den samme og at utjenligheten er tilfeldig fra gjerningspersonens side. Det utjenlige forsøket er nettopp ikke objektivt farlig — det er kjernen i motargumentet. Straffbarheten følger av vilkårene i § 16 første ledd, ikke av annet ledd. Og alternativet om at domstolene må kunne straffe alle som har vist vilje til å begå lovbrudd, uansett hvordan de gikk fram, er en beskrivelse av sinnelagsstraff, som er nettopp det innvendingen advarer mot.",
    },
    {
      question: "Hvilken feil er det å behandle et mislykket avvergingsforsøk som en gyldig tilbaketreden?",
      options: ["Å overse at ordlyden knytter straffriheten til at han avverger, slik at innsatsen alene ikke er nok etter bestemmelsen", "Å overse at frivillighetskravet aldri kan være oppfylt når gjerningspersonen først har gjort alt som fra hans side kreves", "Å overse at tilbaketreden bare gjelder for lovbrudd med en strafferamme på fengsel i mer enn seks år", "Å overse at et fullendt forsøk uansett må bedømmes som en fullbyrdet overtredelse av det aktuelle straffebudet"],
      explanation: "Riktig svar er at bestemmelsen krever et resultat: han må faktisk avverge. Frivillighet kan godt foreligge ved fullendte forsøk — det er nettopp der avvergingsalternativet hører hjemme. Det finnes ingen særskilt strafferammegrense for tilbaketreden, og et fullendt forsøk er fortsatt et forsøk, ikke en fullbyrdelse.",
    },
  ],
  'juroff1500-4-3': [
    {
      question: "Hva sier straffeloven § 15?",
      options: ["At et straffebud også rammer den som medvirker til overtredelsen, når ikke annet er bestemt", "At den som medvirker til et lovbrudd, straffes mildere enn den som selv utfører handlingen", "At medvirkning bare er straffbart når det aktuelle straffebudet uttrykkelig nevner medvirkning", "At den som medvirker, bare kan straffes dersom hovedgjerningspersonen også blir straffet for forholdet"],
      explanation: "Riktig svar gjengir bestemmelsen: en fravikelig hovedregel som utvider hvert straffebud til også å ramme bidragsyteren. Bestemmelsen sier ingenting om straffutmålingen, og den snur ikke utgangspunktet slik at medvirkning må nevnes særskilt. At ansvaret skulle falle bort når hovedpersonen går fri, er nettopp det motsatte av at ansvaret er selvstendig.",
    },
    {
      question: "Hva ligger i forbeholdet «når ikke annet er bestemt» i straffeloven § 15?",
      options: ["At lovgiver kan bestemme at et bestemt straffebud ikke skal ramme medvirkning, slik at hovedregelen er fravikelig", "At retten i den enkelte saken kan la være å bruke medvirkningsansvaret når bidraget framstår som helt beskjedent", "At medvirkningsansvaret ikke gjelder når hovedgjerningspersonen er ukjent eller ikke kan pågripes av politiet", "At påtalemyndigheten kan velge å bruke et annet straffebud enn det hovedgjerningen faktisk rammes av"],
      explanation: "Riktig svar er at forbeholdet gjelder lovgivers vilje: en annen bestemmelse kan si noe annet. Forbeholdet gir ikke retten et skjønn i den enkelte sak, og et beskjedent bidrag håndteres gjennom grensen nedad og gjennom utmålingen. At hovedpersonen er ukjent, er nettopp en situasjon hvor medvirkningsansvaret består.",
    },
    {
      question: "Hva er forskjellen på en hovedgjerningsperson og en medvirker?",
      options: ["Hovedgjerningspersonen oppfyller selv gjerningsbeskrivelsen, mens medvirkeren bidrar til at en annen gjør det", "Hovedgjerningspersonen har alltid sterkere skyld enn medvirkeren, og straffes derfor etter en høyere ramme", "Hovedgjerningspersonen er den som ble pågrepet først, mens medvirkeren er den som ble identifisert senere", "Hovedgjerningspersonen har inngått avtalen om lovbruddet, mens medvirkeren bare har utført et enkelt oppdrag for ham"],
      explanation: "Riktig svar er at skillet ligger i om man selv oppfyller gjerningsbeskrivelsen. Skyldstyrken kan godt være motsatt: medvirkeren kan ha fullt forsett der hovedpersonen ikke har noen skyld. Rekkefølgen i etterforskningen er uten rettslig betydning, og det kreves ingen avtale i det hele tatt.",
    },
    {
      question: "Hvilke tre former for medvirkning opererer læren med?",
      options: ["Fysisk medvirkning, psykisk medvirkning og passiv medvirkning, der den siste forutsetter en handleplikt", "Forsettlig medvirkning, uaktsom medvirkning og etterfølgende medvirkning, som alle sammen rammes av § 15", "Direkte medvirkning, indirekte medvirkning og medvirkning ved bruk av et uskyldig redskap", "Hovedmedvirkning, bimedvirkning og passiv medvirkning, som er rangert etter bidragets omfang"],
      explanation: "Riktig svar er den tredelingen materialet forventer: fysisk, psykisk og passiv medvirkning. Skyldformene er en annen inndeling og hører til skyldlæren. Etterfølgende bistand er ikke medvirkning i det hele tatt. Og det finnes ingen rangordning mellom medvirkere etter bidragets størrelse — det slår ut i utmålingen.",
    },
    {
      question: "Hva kjennetegner psykisk medvirkning?",
      options: ["At bidraget virker på hovedpersonens beslutning, for eksempel ved å tilskynde eller styrke et forsett som alt finnes", "At bidraget består i å unnlate å gripe inn mot en hovedgjerning man er fullt klar over at pågår rett foran en", "At bidraget består i å skaffe et redskap eller på annen måte gjøre gjennomføringen praktisk lettere", "At bidraget først får virkning etter at hovedgjerningen er fullbyrdet, typisk ved å skjule utbyttet"],
      explanation: "Riktig svar er at psykisk medvirkning virker på viljen, ikke på gjennomføringen. At forsettet allerede finnes, er ikke til hinder — det er nok å styrke det. Å unnlate å gripe inn er passiv medvirkning, å skaffe redskap er fysisk medvirkning, og bistand etter fullbyrdelsen er ikke medvirkning i det hele tatt.",
    },
    {
      question: "Hva forutsetter passiv medvirkning i tillegg til at gjerningspersonen forholdt seg passiv?",
      options: ["At det foreligger en handleplikt for nettopp denne personen, med grunnlag i tilknytning, forutgående handling, avtale eller stilling", "At vedkommende var til stede på åstedet mens hovedgjerningen pågikk, og at han faktisk så hva som skjedde der", "At vedkommende hadde en reell mulighet til å gripe inn uten selv å bli utsatt for noen personlig risiko", "At vedkommende ved sin blotte tilstedeværelse gjorde det vesentlig lettere for hovedpersonen å gjennomføre lovbruddet sitt"],
      explanation: "Riktig svar er handleplikten, og at den må ha en kilde. Tilstedeværelse og kunnskap er ikke nok i seg selv; uten en plikt til å gripe inn er passiviteten ikke et bidrag. Muligheten til å gripe inn og virkningen av tilstedeværelsen kan være relevante momenter, men de erstatter ikke hjemmelen for plikten.",
    },
    {
      question: "Hvor mye må et medvirkningsbidrag ha betydd for hovedgjerningen?",
      options: ["Det må ha hatt betydning for gjennomføringen, men det kreves ikke at hovedgjerningen ville vært umulig uten det", "Det må ha vært en nødvendig betingelse, slik at hovedgjerningen ikke kunne blitt begått uten nettopp dette bidraget", "Det må ha vært hovedårsaken til at lovbruddet ble begått på den måten og til det tidspunktet det ble begått", "Det er uten betydning hva bidraget har virket, så lenge medvirkeren hadde forsett om hovedgjerningen"],
      explanation: "Riktig svar er at bidraget må ha hatt betydning uten å ha vært nødvendig. Et strengt årsakskrav ville gjort psykisk medvirkning nesten umulig å konstatere. Samtidig finnes det en nedre grense: et bidrag som ikke har virket i det hele tatt, faller utenfor, så alternativet om at det er uten betydning hva bidraget har virket, går for langt.",
    },
    {
      question: "Hva betyr det at medvirkeransvaret er et selvstendig straffansvar?",
      options: ["At medvirkeren bedømmes etter sine egne forutsetninger, sin egen skyld og sine egne straffrihetsgrunner", "At medvirkeren kan straffes selv om det ikke foreligger noen hovedgjerning som oppfyller gjerningsbeskrivelsen", "At medvirkeren straffes etter en egen bestemmelse med sin egen strafferamme, atskilt fra hovedgjerningens ramme", "At medvirkeren bare kan straffes når han har handlet uavhengig av og uten avtale med hovedgjerningspersonen"],
      explanation: "Riktig svar er at selvstendigheten gjelder bedømmelsen av medvirkeren. Ansvaret er likevel ikke løsrevet: en hovedgjerning som oppfyller gjerningsbeskrivelsen, må foreligge. Medvirkeren dømmes etter samme straffebud som hovedgjerningen, ikke etter en egen ramme. Og fravær av avtale er ikke noe vilkår i noen retning.",
    },
    {
      question: "En voksen sender en tolvåring inn i et hus for å hente ut verdisaker. Kan den voksne straffes for medvirkning?",
      options: ["Ja, fordi hovedgjerningen oppfyller gjerningsbeskrivelsen selv om den som utførte den, mangler skyldevne", "Nei, fordi det ikke foreligger noen straffbar hovedgjerning når den som utførte den, er under den kriminelle lavalderen", "Nei, fordi medvirkningsansvaret forutsetter at hovedgjerningspersonen selv kan straffes for det aktuelle forholdet", "Ja, men bare dersom barnet forsto at handlingen var ulovlig og likevel valgte å gjennomføre den frivillig"],
      explanation: "Riktig svar er at skyldevne er et vilkår som gjelder personen, ikke handlingen, og at hovedgjerningen derfor består. De to nektende alternativene bygger på at ansvaret er avledet, og de ville latt den som bruker et barn som redskap, gå fri nettopp fordi han valgte et barn. Hva barnet forsto, er uten betydning for den voksnes ansvar.",
    },
    {
      question: "Hva kreves fortsatt, selv om medvirkeransvaret er selvstendig?",
      options: ["At det foreligger en hovedgjerning som oppfyller gjerningsbeskrivelsen i det aktuelle straffebudet", "At hovedgjerningspersonen er identifisert, slik at retten kan vurdere hans skyld opp mot medvirkerens", "At hovedgjerningspersonen selv kan straffes, ettersom medvirkningsansvaret er avledet av hans ansvar", "At medvirkeren og hovedgjerningspersonen har inngått en avtale om gjennomføringen av lovbruddet"],
      explanation: "Riktig svar er kravet om en hovedgjerning som oppfyller gjerningsbeskrivelsen. Hovedpersonen behøver verken å være identifisert eller å kunne straffes selv — begge deler er nettopp eksempler på selvstendigheten. Og noen avtale kreves ikke.",
    },
    {
      question: "Hva må medvirkerens skyld dekke?",
      options: ["Både hans eget bidrag og hovedgjerningen, i samsvar med dekningsprinsippet", "Bare hans eget bidrag, siden hovedgjerningen er en annen persons handling og skyld", "Bare hovedgjerningen, siden bidraget uansett er en i seg selv lovlig handling", "Hovedgjerningen i alle sine detaljer, herunder tid, sted og hvilket objekt den skulle ramme"],
      explanation: "Riktig svar er at skylden må dekke begge deler. Å nøye seg med bidraget ville gjort det straffbart å låne bort verktøy i god tro, og å nøye seg med hovedgjerningen ville hoppet over hans egen handling. Detaljkunnskap kreves ikke: forsettet må dekke hovedgjerningens art, ikke alle enkeltheter.",
    },
    {
      question: "Hva er eksess i medvirkningslæren?",
      options: ["At hovedgjerningspersonen begår et grovere eller annet lovbrudd enn det medvirkerens forsett dekket", "At medvirkeren yter et vesentlig større bidrag enn det som var avtalt mellom deltakerne på forhånd", "At medvirkeren fortsetter å bidra etter at hovedgjerningen allerede er fullbyrdet av hovedpersonen", "At flere personer medvirker til samme hovedgjerning uten å vite om hverandres bidrag i saken"],
      explanation: "Riktig svar er at eksess gjelder hovedpersonens overskridelse, og at medvirkeren da bare svarer for det hans eget forsett omfattet. De øvrige alternativene beskriver andre forhold: et større bidrag enn avtalt er fortsatt medvirkning, bistand etter fullbyrdelsen er ikke medvirkning, og flere uavhengige medvirkere er en helt vanlig situasjon.",
    },
    {
      question: "To avtaler et innbrudd i et tomt lokale. Hovedpersonen møter en vekter og slår ham ned. Hvordan stiller medvirkeren seg?",
      options: ["Han svarer for innbruddet, men ikke for volden med mindre forsettet hans dekket at vold kunne bli brukt", "Han svarer for begge forhold, siden han har deltatt i et forløp der vold var en påregnelig utvikling", "Han svarer for volden, men ikke for innbruddet, siden hovedpersonen alene utførte selve tyvegodshentingen", "Han svarer verken for innbruddet eller for volden, siden hovedpersonen gikk ut over det som var avtalt"],
      explanation: "Riktig svar er at dette er eksess, og at dekningsprinsippet begrenser ansvaret til det forsettet dekket. At volden var påregnelig, er et uaktsomhetsargument og holder ikke der straffebudet krever forsett. Innbruddet er derimot fullt dekket av avtalen, så ansvaret for det står uendret.",
    },
    {
      question: "Hvordan skal flere medvirkere behandles i en praktikumsoppgave?",
      options: ["Hver for seg og fra bunnen, men slik at det klare får én setning og plassen brukes på det tvilsomme", "Samlet i én drøftelse, med en avsluttende setning om at det samme gjelder for de øvrige deltakerne", "Etter tur, med en full og like lang drøftelse for hver deltaker uansett hva faktum gir av holdepunkter", "Bare for den som har ytt det største bidraget, siden de øvrige uansett dømmes etter samme straffebud"],
      explanation: "Riktig svar er at hver deltaker prøves for seg, men med proporsjon. Å behandle alle under ett er den vanligste strukturfeilen på dette stoffet. Å skrive like langt om alle er den motsatte feilen, og å hoppe over de mindre bidragsyterne er å utelate en del av oppgaven.",
    },
    {
      question: "En jernvarehandel selger en boltesaks over disk, og saksen blir samme natt brukt til et innbrudd. Foreligger medvirkning?",
      options: ["Nei, dette er en nøytral, dagligdags ytelse, og selgeren manglet dessuten forsett om innbruddet", "Ja, fordi bidraget faktisk gjorde innbruddet mulig, og kravet til bidragets betydning er dermed oppfylt", "Ja, fordi den som selger redskaper som er egnet til innbrudd, må undersøke hva kjøperen skal bruke dem til", "Nei, fordi et salg aldri kan utgjøre medvirkning uansett hva selgeren måtte vite om kjøperens planer"],
      explanation: "Riktig svar er at ytelsen er nøytral og at forsettet mangler. Kravet til bidragets betydning er ikke det eneste kravet — bidragets karakter og skylden må også prøves. Det finnes ingen undersøkelsesplikt av den typen alternativet om at selgeren av redskaper egnet til innbrudd må undersøke hva kjøperen skal bruke dem til, beskriver. Og alternativet om at et salg aldri kan utgjøre medvirkning, går for langt: et salg som er tilpasset lovbruddet og ytt med kunnskap, kan være medvirkning.",
    },
    {
      question: "En person tar imot og gjemmer tyvegods dagen etter et innbrudd, uten at noe var avtalt på forhånd. Hva er dette?",
      options: ["Ikke medvirkning til innbruddet, men handlingen kan rammes av et eget straffebud om befatning med utbytte", "Psykisk medvirkning til innbruddet, fordi den som tar imot varene, styrker gjerningspersonens beslutning", "Fysisk medvirkning til innbruddet, fordi oppbevaringen er et konkret og ytre bidrag til gjennomføringen", "Passiv medvirkning til innbruddet, fordi han unnlot å melde fra om lovbruddet da han fikk kjennskap til det"],
      explanation: "Riktig svar er at bistand etter fullbyrdelsen ikke er medvirkning, men at forholdet kan rammes av et eget straffebud. Hadde han lovet hjelpen på forhånd, ville løftet vært psykisk medvirkning — det er tidspunktet for løftet som teller, ikke for hjelpen. Og passiv medvirkning forutsetter en handleplikt, som en tilfeldig mottaker ikke har.",
    },
    {
      question: "En person lover kvelden før at han skal ta imot varene etter innbruddet, og gjør det. Hva er den rettslige betydningen av løftet?",
      options: ["Løftet kan være psykisk medvirkning, fordi det ble gitt før hovedgjerningen og kan ha styrket beslutningen", "Løftet er uten rettslig betydning, fordi selve hjelpen først ble ytt etter at hovedgjerningen var fullbyrdet", "Løftet gjør ham til hovedgjerningsperson, fordi han har deltatt i planleggingen av hele opplegget", "Løftet er fysisk medvirkning, fordi det innebærer at han stiller et oppbevaringssted til rådighet"],
      explanation: "Riktig svar er at tidspunktet for løftet er avgjørende, og at et løfte gitt på forhånd kan virke inn på beslutningen. Å delta i planleggingen gjør ingen til gjerningsperson så lenge han ikke selv oppfyller gjerningsbeskrivelsen. Og virkningen her ligger i påvirkningen av viljen, ikke i en fysisk ytelse under gjennomføringen.",
    },
    {
      question: "Kan man medvirke til et forsøk?",
      options: ["Ja, forutsatt at hovedpersonen har passert forsøkets nedre grense og medvirkerens forsett dekket fullbyrdelsen", "Nei, fordi medvirkningsansvaret forutsetter at hovedgjerningen er fullbyrdet slik straffebudet beskriver den", "Ja, men bare når medvirkeren selv har foretatt noe som leder direkte mot utføringen av lovbruddet", "Nei, fordi straffeloven § 15 og § 16 er to utvidelsesregler som ikke kan anvendes sammen i én og samme sak"],
      explanation: "Riktig svar er at de to utvidelsesreglene kan brukes sammen. Fullbyrdelse kreves ikke — det er nettopp poenget med forsøksansvaret. Og kravet om at medvirkeren selv skal ha foretatt noe som leder direkte mot utføringen, ville gjort ham til gjerningsperson og ikke til medvirker.",
    },
    {
      question: "Hva kreves for at en medvirker som allerede har ytt bidraget sitt, skal kunne tre tilbake?",
      options: ["At han frivillig avverger at lovbruddet blir fullbyrdet, i praksis ved å nøytralisere bidraget eller hindre gjerningen", "At han frivillig avstår fra å yte ytterligere bidrag, siden han da ikke lenger deltar i selve gjennomføringen", "At han melder forholdet til politiet før hovedgjerningen er fullbyrdet av de øvrige deltakerne i saken", "At de øvrige deltakerne selv ombestemmer seg, slik at hovedgjerningen aldri blir gjennomført i det hele tatt"],
      explanation: "Riktig svar er avvergingsalternativet i straffeloven § 16 annet ledd: bidraget virker fortsatt, og å slutte å bidra hjelper ikke. Å melde fra kan være en måte å avverge på, men det er ikke et selvstendig vilkår. Og at de andre trekker seg, er ikke hans tilbaketreden.",
    },
    {
      question: "Kreves det en avtale mellom medvirkeren og hovedgjerningspersonen?",
      options: ["Nei, det er nok at medvirkeren yter et bidrag med forsett om hovedgjerningen, og hovedpersonen behøver ikke vite om det", "Ja, ellers mangler den nødvendige sammenhengen mellom bidraget og den hovedgjerningen som faktisk ble begått", "Ja, med mindre bidraget er fysisk, siden psykisk medvirkning per definisjon forutsetter en forutgående avtale", "Nei, men hovedgjerningspersonen må uansett ha vært klar over at han fikk hjelp fra en annen person"],
      explanation: "Riktig svar er at ingen avtale kreves, og at et hemmelig bidrag kan være medvirkning. Et avtalekrav ville dessuten vært lett å omgå. Merk likevel nyansen: psykisk medvirkning forutsetter at påvirkningen når fram til hovedpersonen, siden den virker på beslutningen hans — men det er ikke det samme som en avtale.",
    },
    {
      question: "Hvor ligger hjemmelen for medvirkerens straffansvar?",
      options: ["I straffeloven § 15 sammen med det straffebudet hovedgjerningen rammes av, og begge skal oppgis", "I det straffebudet hovedgjerningen rammes av alene, siden gjerningsbeskrivelsen også omfatter bidragsytere", "I straffeloven § 15 alene, som er den bestemmelsen medvirkeren dømmes etter i domsslutningen", "I ulovfestet rett, siden straffeloven § 15 ikke sier noe om hva medvirkning nærmere innebærer"],
      explanation: "Riktig svar er at begge hjemlene skal oppgis. Straffebudet alene rekker ikke, fordi gjerningsbeskrivelsen typisk beskriver hovedgjerningspersonen. Paragraf 15 alene rekker heller ikke, siden den ikke inneholder noen gjerningsbeskrivelse. At innholdet i medvirkningsbegrepet er utviklet i praksis, gjør ikke ansvaret ulovfestet.",
    },
    {
      question: "Hvordan henger legalitetsprinsippet sammen med medvirkningsansvaret?",
      options: ["Paragraf 15 er den lovhjemmelen som gjør bidragsyteren straffbar, men bestemmelsen sier ikke hva medvirkning er", "Legalitetsprinsippet er uten betydning for medvirkning, fordi ansvaret følger direkte av gjerningsbeskrivelsen", "Legalitetsprinsippet krever at hvert enkelt straffebud selv nevner medvirkning for at ansvaret skal inntre", "Legalitetsprinsippet innebærer at medvirkningsansvaret bare kan brukes ved de lovbruddene som har høy strafferamme"],
      explanation: "Riktig svar peker på både hjemmelen og spenningen: § 15 gir lovgrunnlaget, men ansvarets ytre grense er utviklet i praksis og teori. Det er nettopp derfor tvil om et perifert bidrag bør komme tiltalte til gode. Kravet om at hvert straffebud selv må nevne medvirkning, er det motsatte av hovedregelen, og strafferammen er uten betydning her.",
    },
    {
      question: "Hvilken begrunnelse bærer medvirkningsansvaret sterkest?",
      options: ["At et lovbrudd ofte er et samarbeid, og at det ville gitt tilfeldig ansvar bare å ramme den som utførte siste ledd", "At bidragsyteren normalt har en større økonomisk vinning av lovbruddet enn den som utfører hovedgjerningen", "At bevissituasjonen ellers ville blitt for vanskelig, siden det sjelden lar seg avgjøre hvem som gjorde hva", "At hensynet til fornærmede krever at flest mulig av de involverte blir holdt ansvarlige for det som faktisk skjedde"],
      explanation: "Riktig svar er hensynet til den reelle deltakelsen, som sammen med forebygging og klanderverdighet bærer regelen. Vinning er ikke et vilkår og ofte ikke tilfelle. Bevishensyn begrunner ikke et materielt ansvar. Og hensynet til fornærmede forklarer ikke hvorfor akkurat bidragsytere skal rammes.",
    },
    {
      question: "Hva er det sterkeste motargumentet mot et vidt medvirkningsansvar?",
      options: ["At den som yter et beskjedent bidrag, i prinsippet dømmes etter samme straffebud som den som utførte hovedgjerningen", "At medvirkeren sjelden har hatt noen reell mulighet til å hindre at hovedgjerningen ble begått av de andre to", "At medvirkningsansvaret gjør det vanskelig for påtalemyndigheten å avgjøre hvem som skal tiltales i saken", "At medvirkeren i motsetning til hovedgjerningspersonen ikke kan tre tilbake fra et forsøk etter straffeloven § 16 annet ledd"],
      explanation: "Riktig svar er at ansvaret kan strekkes langt, og at bidragets omfang bare slår ut ved utmålingen. Muligheten til å hindre lovbruddet er ikke et vilkår for ansvaret. Påtalemessige vanskeligheter er ikke et rettspolitisk argument mot regelen. Og medvirkeren kan nettopp tre tilbake på egne vegne — det er en følge av at ansvaret er selvstendig.",
    },
    {
      question: "Materialet navngir ingen avgjørelse om medvirkning. Hva følger av det for besvarelsen din?",
      options: ["At du skal skrive framstillingen uten domsnavn, siden en henvisning du ikke kan stå inne for, teller negativt", "At du bør finne en avgjørelse selv i Lovdata og gjengi den etter hukommelsen for å styrke framstillingen din", "At medvirkningsspørsmål ikke kan gi toppkarakter, siden rettskildebildet er for tynt til en full drøftelse", "At du må bygge framstillingen på reelle hensyn alene, siden lovteksten her ikke gir tilstrekkelig veiledning"],
      explanation: "Riktig svar er at en framstilling uten domsnavn er fullgod her, og at det å oppgi kilder man ikke har, er en av de feilene registeret fører opp. Å gjengi en avgjørelse etter hukommelsen er nettopp den risikoen. Temaet kan gi toppkarakter uten dom, og lovteksten sammen med de tre formene gir rikelig grunnlag.",
    },
    {
      question: "Hva er den vanligste strukturfeilen i en praktikumsoppgave med flere medvirkere?",
      options: ["Å drøfte hovedgjerningspersonen ferdig og deretter skrive at det samme uten videre gjelder for de øvrige", "Å prøve bidraget, skyldkravet og straffrihetsgrunnene særskilt for hver enkelt av de involverte deltakerne", "Å oppgi både straffebudet og straffeloven § 15 som hjemmel for hver av de medvirkende personene i saken", "Å behandle det som er klart for en deltaker i én setning i stedet for å drøfte samtlige vilkår i full bredde for alle"],
      explanation: "Riktig svar er sammenslåingen av deltakerne, som overser at skyld, bidrag og straffrihetsgrunner er individuelle. De tre øvrige alternativene beskriver nettopp riktig framgangsmåte: særskilt prøving, to hjemler, og proporsjon i dimensjoneringen. Å skrive kort om det klare er ikke en feil, men et selvstendig vurderingskriterium.",
    },
  ],
  'juroff1500-4-4': [
    {
      question: "Hva er det første spørsmålet i tvistepunkt-kartet for den passive medvirkeren?",
      options: ["Om det foreligger en hovedgjerning som rammes av et straffebud", "Om den passive hadde en handleplikt med grunnlag i en av de fire kildene", "Om den passive hadde forsett som dekket både passiviteten og hovedgjerningen", "Om passiviteten kan rammes som et selvstendig unnlatelsesdelikt i seg selv"],
      explanation: "Riktig svar er hovedgjerningen. Uten et lovbrudd å medvirke til er hele medvirkningssporet uten gjenstand. Handleplikten er trinn tre, skyldkravet trinn fire, og det selvstendige unnlatelsesansvaret er trinn seks og drøftes subsidiært.",
    },
    {
      question: "Hva forutsetter passiv medvirkning, til forskjell fra fysisk og psykisk medvirkning?",
      options: ["At det foreligger en rettslig handleplikt for nettopp denne personen", "At den passive var fysisk til stede da hovedgjerningen ble gjennomført", "At den passive hadde en fordel av at hovedgjerningen ble gjennomført", "At hovedgjerningspersonen visste at den passive så hva som foregikk"],
      explanation: "Riktig svar er handleplikten. Uten den er passiviteten straffri uansett hvor klanderverdig den framstår. Tilstedeværelse, egen fordel og hovedpersonens kunnskap kan være momenter i bevisvurderingen, men ingen av dem er vilkår.",
    },
    {
      question: "Hvilke fire kilder kan en handleplikt bygge på?",
      options: ["Særlig tilknytning, forutgående farevoldende handling, avtale og stilling", "Eierskap, slektskap, arbeidsforhold og medlemskap i en organisasjon", "Lov, forskrift, rettspraksis og alminnelige rettsgrunnsetninger om plikt", "Kunnskap om lovbruddet, mulighet til å gripe inn, nærhet i tid og nærhet i sted"],
      explanation: "Riktig svar er de fire kildene læren oppstiller. Eierskap og slektskap er utslag av særlig tilknytning, ikke selvstendige kilder. Rettskildefaktorene er noe annet enn pliktgrunnlagene. Og kunnskap og mulighet er forutsetninger for skyld og årsakssammenheng, ikke grunnlag for plikten.",
    },
    {
      question: "En tilfeldig kunde ser en ansatt i butikken bære varer ut bakdøra og sier ingenting. Er dette straffbart?",
      options: ["Nei, fordi kunden mangler ethvert grunnlag for en handleplikt overfor butikkens varer", "Ja, fordi kunden hadde kunnskap om lovbruddet og en enkel mulighet til å gripe inn", "Ja, fordi enhver som ser et pågående lovbrudd, har en plikt til å varsle den fornærmede", "Nei, men bare fordi verdien av varene var for lav til at forholdet kunne anses som grovt"],
      explanation: "Riktig svar er at pliktgrunnlaget mangler: ingen tilknytning, ingen stilling, ingen avtale og ingen forutgående farevoldende handling. Kunnskap og mulighet er ikke i seg selv nok, og det finnes ingen alminnelig plikt til å varsle. Verdien har ingen betydning for om det foreligger en plikt.",
    },
    {
      question: "Hva kjennetegner en handleplikt som bygger på forutgående farevoldende handling?",
      options: ["At personen selv har gjort noe som skapte eller økte faren for det lovbruddet som senere skjedde", "At personen tidligere har begått lignende lovbrudd og derfor er kjent med hvordan de gjennomføres", "At personen har unnlatt å gripe inn ved en tidligere anledning, slik at plikten skjerpes neste gang", "At personen har inngått en avtale om å hindre nettopp den faren som senere materialiserte seg"],
      explanation: "Riktig svar er at han selv har satt noe i bevegelse, og at plikten oppstår av hans egen tidligere handling. Tidligere lovbrudd og tidligere passivitet skaper ingen plikt. En avtale er en egen og selvstendig kilde, ikke en variant av den farevoldende handlingen.",
    },
    {
      question: "Hva må skylden dekke hos den passive medvirkeren?",
      options: ["Både hans egen passivitet og hovedgjerningen, i samsvar med dekningsprinsippet", "Bare hovedgjerningen, siden passiviteten i seg selv ikke er en handling han kan ha forsett om", "Bare det at han hadde en handleplikt, siden pliktbruddet er det som gjør ham ansvarlig", "Både hovedgjerningen og den skaden den påførte fornærmede i den konkrete saken"],
      explanation: "Riktig svar er at skylden må dekke begge deler. Å nøye seg med hovedgjerningen hopper over hans eget forhold. Kunnskap om plikten er et spørsmål om rettsuvitenhet og noe annet enn forsett om gjerningsbeskrivelsen. Og skaden er bare et element der straffebudet krever en følge.",
    },
    {
      question: "Hva betyr det å drøfte subsidiært?",
      options: ["Å behandle et spørsmål som bare blir aktuelt dersom den prinsipale konklusjonen ikke holder", "Å ta forbehold om konklusjonen fordi rettskildene er uklare på det aktuelle punktet", "Å behandle det minst viktige av spørsmålene til slutt, etter at hovedspørsmålet er avgjort", "Å drøfte et spørsmål kort fordi det er klart, og dermed spare plass til det som er tvilsomt"],
      explanation: "Riktig svar er at subsidiært betyr i annen rekke, altså betinget av at det prinsipale ikke fører fram. Det er ikke det samme som å ta forbehold: du skal fortsatt lande prinsipalt først. Rekkefølgen etter viktighet og dimensjoneringen etter tvil er andre og selvstendige disposisjonsregler.",
    },
    {
      question: "Hvorfor er den subsidiære drøftelsen obligatorisk i dette typetilfellet?",
      options: ["Fordi en konklusjon om at passiviteten ikke er medvirkning, ellers ville avskåret resten av oppgaven", "Fordi retten alltid må ta stilling til alle mulige straffebud som kan ramme et gitt handlingsforløp", "Fordi det selvstendige unnlatelsesansvaret alltid gir et strengere resultat enn medvirkningsansvaret", "Fordi tvistepunkt-kartet har seks trinn og en besvarelse må inneholde like mye om hvert av dem"],
      explanation: "Riktig svar er at konklusjonen ellers stenger resten, og at det selvstendige unnlatelsesansvaret kan føre fram der medvirkningssporet ikke gjør det. Retten har ingen slik plikt til å prøve alt, det selvstendige ansvaret er ikke strengere, og trinnene skal nettopp ikke ha like mye plass.",
    },
    {
      question: "Hva er de tre vilkårene for det uekte unnlatelsesdeliktet?",
      options: ["Handleplikt for denne personen, årsakssammenheng med følgen, og likestilling med den aktive handlingen", "Kunnskap om lovbruddet, mulighet til å gripe inn, og at inngripen kunne skjedd uten personlig risiko", "Handleplikt for denne personen, forsett om hovedgjerningen, og at straffebudet nevner unnlatelse", "Særlig tilknytning til fornærmede, årsakssammenheng med følgen, og at lovbruddet er av en viss grovhet"],
      explanation: "Riktig svar er de tre vilkårene fra læren om unnlatelse. Kunnskap og mulighet hører til skyld og årsak, men er ikke selve vilkårene. At straffebudet nevner unnlatelse, ville gjort det til et ekte unnlatelsesdelikt. Og grovhet er ikke et vilkår i noen retning.",
    },
    {
      question: "Hva ligger i likestillingsvilkåret?",
      options: ["At unnlatelsen etter sin art kan sidestilles med den aktive handlingen straffebudet beskriver", "At den passive skal bedømmes på samme måte som hovedgjerningspersonen ble bedømt i saken", "At alle som hadde en handleplikt i situasjonen, skal behandles likt uansett hvilken rolle de hadde", "At unnlatelsen må ha vært like effektiv som en aktiv handling ville vært for å volde følgen"],
      explanation: "Riktig svar er at unnlatelsen må ligne tilstrekkelig på den aktive handlingen i klanderverdighet og nærhet til gjerningsbeskrivelsen. Vilkåret gjelder forholdet mellom unnlatelse og handling, ikke forholdet mellom personer. Og effektiviteten er et årsaksspørsmål, som er et eget vilkår.",
    },
    {
      question: "Hvorfor er likestillingsvilkåret et selvstendig vilkår?",
      options: ["Fordi handleplikt og årsakssammenheng kan være oppfylt uten at unnlatelsen ligner nok på den aktive handlingen", "Fordi det er det eneste vilkåret som følger direkte av ordlyden i det aktuelle straffebudet", "Fordi det erstatter kravet om årsakssammenheng når straffebudet ikke krever noen bestemt følge", "Fordi det avgjør hvilket av de to sporene, medvirkning eller selvstendig unnlatelse, som skal brukes"],
      explanation: "Riktig svar er at de to andre vilkårene kan være oppfylt uten at dette er det, og at vilkåret derfor gjør et selvstendig arbeid. Ingen av de tre følger direkte av ordlyden — det er nettopp derfor rekkevidden er omstridt. Vilkåret erstatter ikke årsakskravet, og det avgjør ikke sporvalget.",
    },
    {
      question: "En butikkeier ser en ansatt bære ut varer og sier ingenting. Hvilke pliktgrunnlag er nærliggende?",
      options: ["Særlig tilknytning, siden varene er hans egne, og stilling, siden han har ansvar for de ansatte", "Avtale, siden ansettelsesforholdet innebærer en gjensidig plikt til å opptre lojalt overfor hverandre", "Forutgående farevoldende handling, siden han ansatte vedkommende og dermed skapte muligheten", "Ingen av kildene, siden en arbeidsgiver aldri kan holdes strafferettslig ansvarlig for ansattes lovbrudd"],
      explanation: "Riktig svar er tilknytning og stilling, som begge peker på ham konkret. Ansettelsesavtalen forplikter den ansatte, ikke arbeidsgiveren til å hindre tyveri. Å ansette noen er ikke en farevoldende handling. Og et ansvar er ikke utelukket — spørsmålet er om plikten kan hjemles.",
    },
    {
      question: "Den passive griper inn, men først etter at halvparten av tyveriet er gjennomført. Hvordan skal forholdet behandles?",
      options: ["Forholdet må deles: passiviteten vurderes for den delen som ble gjennomført før han grep inn", "Forholdet må ses under ett, og inngripen fører til at ansvaret for hele lovbruddet faller bort", "Forholdet må ses under ett, og inngripen er uten betydning siden lovbruddet uansett ble begått", "Forholdet må vurderes etter reglene om tilbaketreden fra forsøk i straffeloven § 16 annet ledd"],
      explanation: "Riktig svar er at forholdet deles, fordi passiviteten opphørte underveis og bare hadde betydning for den første delen. Å la inngripen frita for alt overser at den kom for sent, og å se helt bort fra den overser at den faktisk virket. Reglene om tilbaketreden gjelder forsøk, og her er hovedgjerningen delvis fullbyrdet.",
    },
    {
      question: "Hvor mange terminer er passivitetsspørsmålet stilt i, slik boka teller det?",
      options: ["Ordrett i 7 terminer og med ett ord lagt til i én til, altså 8 av 34 terminer", "Ordrett i 11 terminer, som er det samme som antallet terminer der unnlatelse er prøvd", "Ordrett i 18 terminer, som er det samme som antallet terminer der medvirkning er prøvd", "Ordrett i 5 terminer, som er det samme som antallet der det selvstendige ansvaret er gitt"],
      explanation: "Riktig svar er 7 pluss én, altså 8 av 34 terminer. Tallet 11 er antallet terminer der unnlatelse er prøvd som tema, og 18 er antallet for medvirkning — ingen av dem gjelder denne ene formuleringen. Tallet 5 gjelder halvdelen om det selvstendige medvirkeransvaret.",
    },
    {
      question: "En passiv medvirker lot være å gripe inn fordi han var redd for hovedpersonen. Hvordan behandles frykten?",
      options: ["Den fjerner ikke forsettet, og den er bare en straffrihetsgrunn dersom vilkårene for en slik grunn er oppfylt", "Den fjerner forsettet, siden en person som handler av frykt, ikke kan sies å ha valgt å forholde seg passiv", "Den er alltid en straffrihetsgrunn, fordi ingen kan kreves å utsette seg selv for fare for å hindre et lovbrudd", "Den er uten enhver betydning i saken, siden motivet for en unnlatelse aldri kan tillegges rettslig vekt"],
      explanation: "Riktig svar er at frykten forklarer motivet, men verken fjerner forsettet eller gir straffrihet med mindre vilkårene faktisk er oppfylt. Den er heller ikke uten betydning: når den ikke når opp som straffrihetsgrunn, kan den telle ved straffutmålingen. Det skillet er verdt å si eksplisitt.",
    },
    {
      question: "Hva er den vanligste feilen i besvarelser om den passive medvirkeren?",
      options: ["Å konstatere at han forholdt seg passiv og konkludere, uten å hjemle handleplikten i en av kildene", "Å gå gjennom alle fire kildene til handleplikt og forklare hvorfor tre av dem ikke passer i saken", "Å drøfte det selvstendige unnlatelsesansvaret subsidiært etter en konklusjon om at det ikke er medvirkning", "Å behandle den passive særskilt fra hovedgjerningspersonen med sin egen skyld og sine egne grunner"],
      explanation: "Riktig svar er den ubegrunnede konstateringen: passiviteten er faktum, plikten er jussen. De tre øvrige alternativene beskriver nettopp riktig framgangsmåte — å prøve alle kildene, å drøfte subsidiært, og å holde deltakerne fra hverandre.",
    },
  ],
  'juroff1500-5-1': [
    {
      question: "Hva er virkningen av en straffrihetsgrunn?",
      options: ["Handlingen blir lovlig, slik at straffbarhetsvilkåret om fravær av straffrihetsgrunn svikter", "Handlingen forblir straffbar, men retten kan velge å la være å ilegge noen reaksjon i saken", "Straffansvaret faller bort av seg selv, uten at retten trenger å foreta noen vurdering av forholdet", "Straffen kan settes under minstestraffen i straffebudet eller til en mildere straffart enn den vanlige"],
      explanation: "Riktig svar er at handlingen blir lovlig. De tre øvrige alternativene beskriver henholdsvis straffritak, straffbortfall og straffnedsettelse — tre andre virkninger som alle forutsetter at handlingen fortsatt er ulovlig. Skillet er en artsforskjell, ikke en gradsforskjell.",
    },
    {
      question: "Hva kjennetegner en straffritaksgrunn?",
      options: ["At handlingen er straffbar, men at retten har adgang til å frita for straff etter en vurdering", "At handlingen blir lovlig, slik at det ikke foreligger noe lovbrudd å reagere mot i det hele tatt", "At straffansvaret faller bort automatisk når en bestemt tid har gått siden lovbruddet ble begått", "At gjerningspersonen mangler skyldevne og derfor ikke kan gjøres strafferettslig ansvarlig for noe"],
      explanation: "Riktig svar er at handlingen er straffbar og at fritaket beror på rettens skjønn. At det er en kan-regel, er selve kjennetegnet. Å gjøre handlingen lovlig er straffrihet, det automatiske bortfallet er straffbortfall, og manglende skyldevne er et eget straffbarhetsvilkår utenfor tredelingen.",
    },
    {
      question: "Hva er hovedeksempelet på en straffbortfallsgrunn?",
      options: ["Foreldelse, jf. straffeloven § 86, der ansvaret faller bort etter en frist knyttet til strafferammen", "Nødverge, jf. straffeloven § 18, der handlingen er lovlig når vilkårene i bestemmelsen er oppfylt", "Overskridelse av nødverge, jf. straffeloven § 81, der retten kan frifinne ved særlige grunner", "Manglende forsett, der skylden ikke dekker alle elementene i straffebudets gjerningsbeskrivelse"],
      explanation: "Riktig svar er foreldelse, der virkningen inntrer av seg selv med tidens gang. Nødverge er en straffrihetsgrunn, overskridelsesregelen i § 81 er en straffritaksgrunn, og manglende forsett rammer et eget straffbarhetsvilkår.",
    },
    {
      question: "Hvilket kontrollspørsmål plasserer en grunn i riktig kategori?",
      options: ["Er handlingen lovlig, eller er den straffbar men ustraffet?", "Er gjerningspersonen tilregnelig, og hadde han forsett om alle elementene?", "Har lovgiver plassert regelen i kapitlet om straffrihetsgrunner i straffeloven?", "Er reaksjonen mildere enn den ville vært uten den aktuelle omstendigheten?"],
      explanation: "Riktig svar er spørsmålet om handlingens lovlighet, fordi alle de praktiske konsekvensene henger i det. Tilregnelighet og forsett er egne straffbarhetsvilkår. Lovens systematikk er ikke avgjørende, siden kategoriene er teoriens. Og en mildere reaksjon er utmåling, ikke kategori.",
    },
    {
      question: "Hvor i straffbarhetsvurderingen virker en straffrihetsgrunn?",
      options: ["I det andre av de fire straffbarhetsvilkårene, altså kravet om fravær av straffrihetsgrunn", "I det første vilkåret, ved at handlingen ikke lenger rammes av straffebudets gjerningsbeskrivelse", "I reaksjonsspørsmålet, altså etter at skyldspørsmålet i saken allerede er avgjort av retten", "I det tredje vilkåret, ved at gjerningspersonen ikke lenger kan sies å ha utvist subjektiv skyld"],
      explanation: "Riktig svar er det andre vilkåret, som er formulert negativt nettopp fordi en straffrihetsgrunn skal fjerne straffbarheten. Å virke i det første vilkåret er rettsstridsreservasjonens rolle. Reaksjonsspørsmålet er der straffritaket virker, og skylden er et selvstendig vilkår.",
    },
    {
      question: "Anders slår i lovlig nødverge. Kan Bjørn, som ble slått, forsvare seg med nødverge?",
      options: ["Nei, fordi straffeloven § 18 forutsetter et ulovlig angrep, og Anders sin handling er lovlig", "Ja, fordi enhver som blir utsatt for vold, har rett til å forsvare seg mot den uansett grunn", "Ja, men bare dersom Bjørn ikke var den som startet den opprinnelige konflikten mellom dem", "Nei, fordi nødverge bare kan påberopes av den som handler først i et hendelsesforløp"],
      explanation: "Riktig svar er at kravet om et ulovlig angrep stenger. Dette er den skarpeste praktiske konsekvensen av at nødverge er en straffrihetsgrunn. At Bjørn startet konflikten, er relevant for om hans eget angrep var ulovlig, men det er ikke det som avgjør her. Og nødverge har ingen regel om hvem som handler først.",
    },
    {
      question: "Hovedpersonens handling er lovlig fordi det foreligger en straffrihetsgrunn. Hva betyr det for en medvirker?",
      options: ["Medvirkeren går også fri, fordi det ikke finnes noen hovedgjerning å medvirke til", "Medvirkeren kan fortsatt straffes, fordi medvirkeransvaret er et selvstendig straffansvar", "Medvirkeren kan straffes bare dersom han visste at hovedpersonen hadde en straffrihetsgrunn", "Medvirkeren kan straffes, men straffen skal settes under minstestraffen i det aktuelle straffebudet"],
      explanation: "Riktig svar er at hele lovbruddet faller bort når handlingen er lovlig. Det selvstendige medvirkeransvaret betyr at medvirkeren bedømmes etter sine egne forutsetninger, ikke at han kan straffes uten en hovedgjerning. Merk nyansen: en straffrihetsgrunn som er knyttet til den enkeltes egen situasjon, virker bare for ham.",
    },
    {
      question: "Hva skjer når et forsvar går lenger enn vilkårene i straffeloven § 18 tillater?",
      options: ["Straffriheten faller bort, men retten kan frifinne etter § 81 dersom særlige grunner tilsier det", "Straffriheten består, siden situasjonen fortsatt sprang ut av et ulovlig angrep fra den andre", "Forholdet foreldes raskere, fordi overskridelser av nødverge behandles etter en kortere frist", "Handlingen blir straffri etter § 80, som gir adgang til å frifinne den som har gått for langt"],
      explanation: "Riktig svar er at straffriheten faller bort, og at det som gjenstår, er adgangen til frifinnelse etter § 81 og til nedsettelse etter § 80. At straffriheten består, er den vanligste feillesningen. Foreldelsesfristene har ingenting med saken å gjøre, og § 80 gir en mildere straff, ikke frifinnelse.",
    },
    {
      question: "Hvilken kategori hører straffeloven § 81 om frifinnelse ved overskridelse i?",
      options: ["Straffritaksgrunn, fordi handlingen forblir straffbar og retten kan velge å frifinne", "Straffrihetsgrunn, fordi resultatet blir at gjerningspersonen frifinnes for forholdet", "Straffbortfallsgrunn, fordi straffansvaret opphører når vilkårene i bestemmelsen er oppfylt", "Ingen av kategoriene, fordi bestemmelsen bare regulerer hvordan straffen skal utmåles"],
      explanation: "Riktig svar er straffritak: kan-formen og forutsetningen om at handlingen er straffbar, plasserer bestemmelsen der. At resultatet blir frifinnelse, er nettopp fella — kategorien følger virkningen for handlingen, ikke utfallet for den tiltalte. Utmålingsregelen er § 80.",
    },
    {
      question: "Er straffnedsettelse etter straffeloven § 80 en av de tre kategoriene i tredelingen?",
      options: ["Nei, det er en utmålingsregel: det ilegges fortsatt en reaksjon, bare en mildere enn ellers", "Ja, det er en straffritaksgrunn, siden bestemmelsen gir retten adgang til å lempe på reaksjonen", "Ja, det er en straffbortfallsgrunn, siden en del av straffansvaret faller bort ved anvendelsen", "Nei, fordi bestemmelsen bare gjelder for lovbrudd som har en lovbestemt minstestraff i loven"],
      explanation: "Riktig svar er at nedsettelse er utmåling og faller utenfor tredelingen. Forskjellen mot straffritak er at det ved nedsettelse fortsatt ilegges straff. Og bestemmelsen gjelder også adgangen til å gå over til en mildere straffart, så den er ikke begrenset til bud med minstestraff.",
    },
    {
      question: "Hvilke av disse hører IKKE hjemme i tredelingen?",
      options: ["Manglende skyldevne, manglende forsett, villfarelse og frifinnelse på grunn av bevistvil", "Nødverge, nødrett, selvtekt og samtykke innenfor grensene i straffeloven § 276", "Foreldelse, overskridelse av nødverge og adgangen til frifinnelse etter straffeloven § 81", "Rettsstridsreservasjonen, nødrett og adgangen til å gå under minstestraffen i straffebudet"],
      explanation: "Riktig svar er den første gruppen: alle fire virker andre steder, i skyldvilkåret, i skyldevnevilkåret eller i bevisvurderingen. Den andre gruppen er straffrihetsgrunner, og den tredje inneholder en straffbortfallsgrunn og en straffritaksgrunn. Den fjerde blander kategoriene og inneholder én utmålingsregel.",
    },
    {
      question: "Hvorfor er ikke manglende skyldevne en straffrihetsgrunn?",
      options: ["Fordi den rammer et eget straffbarhetsvilkår og lar handlingen forbli ulovlig, slik at en medvirker kan straffes", "Fordi den bare gjelder personer under 15 år, og rene aldersgrenser regnes ikke som materielle regler i loven", "Fordi den forutsetter en sakkyndig vurdering, og straffrihetsgrunnene avgjøres av retten alene", "Fordi den bare fører til at straffen settes ned, og ikke til at gjerningspersonen frifinnes helt"],
      explanation: "Riktig svar er at skyldevnen er det fjerde straffbarhetsvilkåret og at handlingen forblir ulovlig. Det er nettopp derfor den voksne som sender et barn inn i et hus, kan straffes for medvirkning. Skyldevne omfatter også utilregnelighet, og virkningen er full frifinnelse for den det gjelder.",
    },
    {
      question: "Hvordan plasseres tilbaketreden fra forsøk etter straffeloven § 16 annet ledd?",
      options: ["Den er ingen straffrihetsgrunn: forsøket var straffbart, og det er ansvaret for forsøket som faller bort", "Den er en straffrihetsgrunn, siden gjerningspersonen etter bestemmelsen ikke straffes for det forsøket han har begått", "Den er en straffritaksgrunn, siden retten etter en vurdering kan la være å ilegge straff for forsøket", "Den er en straffnedsettelsesregel, siden straffen for forsøket settes lavere enn for fullbyrdelsen"],
      explanation: "Riktig svar er at handlingen ikke blir lovlig: forsøket var straffbart i det grensen ble passert, og det er ansvaret som bortfaller. Kontrollspørsmålet gir svaret. Bestemmelsen gir ingen kan-adgang for retten, og nedsettelsesregelen ved forsøk står i § 80 bokstav b.",
    },
    {
      question: "Hva bestemmer straffeloven § 276 om samtykke?",
      options: ["At straff etter §§ 271, 272, 273 og 274 første ledd ikke kommer til anvendelse når den handlingen er rettet mot, har samtykket", "At samtykke fra fornærmede alltid gjør handlingen lovlig, uansett hvor alvorlig skaden på kropp eller helse ble", "At samtykke bare får betydning ved straffutmålingen, og aldri i vurderingen av selve straffbarheten", "At samtykke må være skriftlig og gitt før handlingen for at det skal kunne tillegges rettslig virkning"],
      explanation: "Riktig svar gjengir bestemmelsen. At samtykke alltid frelser, er galt: samtykke til drap eller betydelig skade gir bare adgang til å gå under minstestraffen. At samtykke bare gjelder utmålingen, er også galt for de bestemmelsene § 276 nevner. Og loven stiller ikke noe skriftlighetskrav.",
    },
    {
      question: "Hva skiller nødverge fra selvtekt?",
      options: ["Nødvergen avverger et pågående eller umiddelbart forestående angrep, mens selvtekten gjenoppretter noe som alt har skjedd", "Nødvergen gjelder angrep på person, mens selvtekten bare gjelder inngrep i eiendom og andre formuesverdier man eier", "Nødvergen er en straffrihetsgrunn, mens selvtekten bare gir adgang til å sette straffen ned", "Nødvergen krever at handlingen rettes mot angriperen, mens selvtekten kan rettes mot hvem som helst"],
      explanation: "Riktig svar er tidsforskjellen: er angrepet over, er sporet selvtekt og ikke nødverge. Begge er straffrihetsgrunner. Nødverge gjelder også angrep på eiendom, og selvtekt krever at makten rettes mot den som har endret tilstanden ulovlig.",
    },
    {
      question: "Hva er forskjellen på en handlingsknyttet og en individuell straffrihetsgrunn?",
      options: ["Den handlingsknyttede gjør handlingen lovlig for alle som deltar, mens den individuelle bare virker for den det gjelder", "Den handlingsknyttede er lovfestet i straffeloven, mens den individuelle må utledes av ulovfestede prinsipper i strafferetten", "Den handlingsknyttede virker i skyldvilkåret, mens den individuelle virker i vilkåret om skyldevne hos personen", "Den handlingsknyttede gjelder forsettlige lovbrudd, mens den individuelle bare gjelder de uaktsomme lovbruddene"],
      explanation: "Riktig svar er at skillet går på om grunnen beskriver hva som ble gjort eller hvem som gjorde det og hvorfor. Begge kan være lovfestede. Ingen av dem virker i skyld- eller skyldevnevilkåret, og skillet følger ikke skyldformene.",
    },
    {
      question: "Hvor lang er foreldelsesfristen når den høyeste lovbestemte straffen er fengsel inntil 3 år?",
      options: ["5 år", "2 år", "10 år", "15 år"],
      explanation: "Riktig svar er 5 år, jf. straffeloven § 86 første ledd. Fristen på 2 år gjelder når rammen er bot eller fengsel inntil 1 år, 10 år gjelder ved en ramme på fengsel inntil 10 år, og 15 år ved en ramme på fengsel inntil 15 år. Fristene knytter seg altså til den lovbestemte rammen, ikke til den straffen retten ville utmålt.",
    },
    {
      question: "Hva er det viktigste leddet i sammenlikningssvaret om de tre kategoriene?",
      options: ["At forskjellen formuleres eksplisitt i én setning, i tillegg til at hver kategori defineres", "At alle tre kategoriene defineres presist, siden det er definisjonene spørsmålet ber om", "At så mange hjemler som mulig nevnes, slik at bredden i kunnskapen kommer til syne", "At det tas forbehold om at kategoriene er teoriens og ikke lovgivers egen inndeling"],
      explanation: "Riktig svar er den eksplisitte forskjellssetningen: to korrekte definisjoner er ikke det samme som å si hva som skiller dem. Definisjonene er nødvendige, men de er ikke nok. Bredde i hjemler uten sammenlikning gir ingen uttelling, og forbeholdet er et plusspunkt, ikke kjernen.",
    },
    {
      question: "En handling er foreldet. Er den dermed lovlig?",
      options: ["Nei, handlingen var og forblir ulovlig; det er straffansvaret som har falt bort", "Ja, fordi det ikke lenger kan reageres mot handlingen med noen strafferettslig følge", "Ja, men bare i forhold til den som har begått den, ikke i forhold til eventuelle medvirkere", "Nei, men den regnes som lovlig ved vurderingen av om noen kunne forsvart seg mot den"],
      explanation: "Riktig svar er at handlingen forblir ulovlig og at bare ansvaret er borte. Alternativet om at handlingen regnes som lovlig ved vurderingen av om noen kunne forsvart seg mot den, er den nære fella: fordi handlingen fortsatt er ulovlig, kunne den i sin tid vært møtt med nødverge, og foreldelsen endrer ikke det. Kategorien sier noe om ansvaret, ikke om handlingens karakter.",
    },
    {
      question: "Hva bør du gjøre dersom en oppgave ber om forskjellen på to av de tre kategoriene?",
      options: ["Svare på de to som er etterspurt, og eventuelt nevne den tredje i én setning som avgrensning", "Redegjøre grundig for alle tre, siden en fullstendig framstilling alltid gir høyere uttelling", "Svare bare på den ene av dem og bruke tiden på et grundig eksempel fra rettspraksis", "Begynne med en full gjennomgang av de fire straffbarhetsvilkårene før du besvarer spørsmålet"],
      explanation: "Riktig svar er å svare på det som er spurt om. Å skrive om mer enn oppgaven ber om, koster tid uten uttelling, og materialet kaller det lite skjønnsomt. Å nøye seg med én kategori er å svare halvt, og en full gjennomgang av firedelingen først er å bruke tiden på noe annet.",
    },
  ],
  'juroff1500-5-2': [
    {
      question: "Hvilken bestemmelse hjemler nødvergeretten, og hva sier den om handlingen?",
      options: ["Straffeloven § 18 første ledd, som sier at handlingen er lovlig når vilkårene i bestemmelsen er oppfylt", "Straffeloven § 17, som sier at handlingen er lovlig når en fare avverges og interesseavveiningen går klart ut", "Straffeloven § 19, som sier at handlingen er lovlig når en ulovlig endret tilstand gjenopprettes av den berettigede", "Straffeloven § 81 bokstav b, som sier at retten kan frifinne den som forsvarte seg mot et angrep"],
      explanation: "Riktig svar er straffeloven § 18 første ledd, der ordet «lovlig» står i selve lovteksten. Bestemmelsen om nødrett gjelder en fare som ikke behøver komme fra et menneske, og selvtekt gjelder gjenoppretting av en ulovlig endret tilstand. Adgangen til å frifinne ved overskridelse er en helt annen regel med en annen virkning — den forutsetter at handlingen er straffbar.",
    },
    {
      question: "Hvilken kategori i tredelingen hører nødverge i, og hvordan ser du det av lovteksten?",
      options: ["Straffrihetsgrunn, fordi lovteksten sier at handlingen er lovlig når vilkårene er oppfylt", "Straffritaksgrunn, fordi loven sier at retten kan la være å straffe den som forsvarte seg", "Straffbortfallsgrunn, fordi ansvaret faller bort så snart det angrepet han forsvarte seg mot, er over", "Utmålingsregel, fordi bestemmelsen bare gir adgang til å gå under minstestraffen i det aktuelle straffebudet"],
      explanation: "Riktig svar er straffrihetsgrunn, og du ser det av ordet «lovlig» i straffeloven § 18 første ledd. Handlingen blir lovlig, ikke bare ustraffet. Straffritaket kjennetegnes av en kan-regel om frifinnelse, straffbortfallet av at ansvaret faller bort med tiden, og en utmålingsregel forutsetter at det ilegges en reaksjon.",
    },
    {
      question: "Hvilke fire vilkår arbeider boka med i nødvergedrøftelsen, og hvordan forholder de seg til hverandre?",
      options: ["Ulovlig angrep som pågår eller er nært, forsvar rettet mot angriperen, ikke lenger enn nødvendig, ikke åpenbart uforsvarlig — og alle må være oppfylt", "Ulovlig angrep, forsvar rettet mot angriperen, ikke lenger enn nødvendig og ikke åpenbart uforsvarlig — og det holder at ett av de fire vilkårene er oppfylt", "Ulovlig angrep, fare for skade, forsvar rettet mot angriperen og en interesseavveining der det reddede godet må veie langt tyngst", "Ulovlig angrep som pågår, forsvar rettet mot angriperen og forholdsmessighet — der angrep og retning er absolutte krav, mens forholdsmessigheten bare er et moment"],
      explanation: "Riktig svar er de fire vilkårene, og at de er kumulative: alle må være oppfylt samtidig, og det er nok at ett svikter for at straffriheten faller bort i sin helhet. Derfor drøftes de ett for ett, i rekkefølge. Kravet om at det reddede godet må veie langt tyngst, hører til nødretten, og forholdsmessigheten er et selvstendig vilkår, ikke bare et moment.",
    },
    {
      question: "Et barn under 15 år angriper en voksen. Kan angrepet møtes med nødverge?",
      options: ["Ja, for angrepet er ulovlig selv om det ikke er straffbart for angriperen — men skylden hans er et moment i forsvarlighetsvurderingen", "Nei, for et angrep fra en som ikke kan straffes, er ikke et ulovlig angrep i lovens forstand, og § 18 kommer ikke til anvendelse", "Ja, og angriperens lave alder er uten betydning, siden vilkårene i bestemmelsen utelukkende er objektive og knytter seg til selve angrepet", "Nei, men handlingen kan i stedet være lovlig som nødrett, siden det da er tale om å avverge en fare og ikke et angrep fra et menneske"],
      explanation: "Riktig svar er ja: angrepet må være rettsstridig, men det behøver ikke være straffbart for angriperen. Et angrep fra et barn under den strafferettslige lavalderen eller fra en utilregnelig person er fortsatt ulovlig. Angriperens skyld er derimot et av de tre momentene loven selv navngir i forsvarlighetsvurderingen, og et angrep fra en som ikke forstår hva han gjør, tåler mindre motmakt. Merk også at et angrep verken behøver å være voldelig eller å rette seg mot en person — også et angrep på eiendom kan møtes med nødverge.",
    },
    {
      question: "Må den angrepne vente til slaget har truffet før han kan forsvare seg?",
      options: ["Nei, det holder at angrepet er så nært at det vil ramme om det ikke avverges — det er nok at det er umiddelbart forestående", "Ja, nødvergeretten inntrer først når angrepet faktisk har truffet, siden det ikke er noe å avverge før det punktet", "Nei, og han kan også gripe inn i god tid før angrepet, dersom han har konkrete holdepunkter for at det kommer senere", "Ja, med mindre angriperen har truet ham tidligere, for da regnes angrepet som påbegynt allerede fra trusselen ble framsatt"],
      explanation: "Riktig svar er at angrepet ikke behøver ha truffet: den som ser en knyttneve på vei, trenger ikke vente til slaget lander. Kravet er at angrepet er påbegynt eller umiddelbart forestående. Å gripe inn i god tid før angrepet er derimot preventivt nødverge, som faller utenfor bestemmelsen, og en tidligere trussel gjør ikke i seg selv angrepet påbegynt.",
    },
    {
      question: "Angriperen ligger nede og har gitt opp, og forsvareren slår tre ganger til. Hvordan vurderes de siste slagene?",
      options: ["De er ikke nødverge, for angrepet er over og det er ikke lenger noe å avverge — de er en ny og selvstendig handling", "De er nødverge, for de inngår i det samme sammenhengende forløpet som begynte med angriperens eget ulovlige angrep", "De er nødverge dersom forsvareren fortsatt følte seg truet, siden vilkårene vurderes ut fra hvordan situasjonen framsto for ham", "De er ikke nødverge, men de bedømmes likevel etter § 18 fordi overskridelsen skjedde i umiddelbar tilknytning til angrepet"],
      explanation: "Riktig svar er at nødvergeretten opphører når angrepet er over. Ligger angriperen nede, har gitt opp, snudd eller er fysisk hindret, avverger videre slag ingenting. Merk grensen: et angrep som består av flere slag over noen sekunder, er ikke avsluttet mellom hvert slag — det avgjørende er om forløpet reelt er over. En setning i faktum om hva som skjedde etterpå, er alltid lagt inn med vilje.",
    },
    {
      question: "Hva er preventivt nødverge, og hvordan stiller loven seg til det?",
      options: ["Å gripe inn mot et angrep som ennå ikke er nært, fordi man frykter at det kommer — og det faller utenfor straffeloven § 18", "Å gripe inn mot et angrep som er umiddelbart forestående, før det treffer — og det er lovlig nødverge etter straffeloven § 18", "Å gripe inn mot en angriper som tidligere har angrepet en, for å hindre gjentakelse — og det er lovlig når faren er nærliggende", "Å gripe inn mot et angrep på en tredjeperson i stedet for på seg selv — og det faller utenfor bestemmelsen om nødverge"],
      explanation: "Riktig svar er at preventivt nødverge er å gripe inn mot et angrep som ennå ikke er umiddelbart forestående, og at det faller utenfor § 18: bestemmelsen krever at handlingen foretas for å avverge et angrep, og et angrep som ligger fram i tid, er det ennå ingenting å avverge. En rett til å slå først ut fra frykt ville vært umulig å avgrense. Å forsvare en tredjeperson er derimot lovlig nødverge på vanlige vilkår.",
    },
    {
      question: "Hvilke andre spor kan være aktuelle når maktbruken kommer etter at angrepet er over?",
      options: ["Retorsjon etter straffeloven § 271 annet ledd, som kan gjøre kroppskrenkelsen straffri, eller selvtekt etter § 19", "Nødrett etter straffeloven § 17, som kan gjøre handlingen lovlig når den avverger en fare for videre angrep senere", "Nødverge etter straffeloven § 18 annet ledd, som utvider retten til situasjoner der det ikke pågår noe angrep i det hele tatt", "Straffnedsettelse etter straffeloven § 80 bokstav d, som er den eneste bestemmelsen som fanger opp slike etterfølgende handlinger"],
      explanation: "Riktig svar er retorsjon eller provokasjon etter straffeloven § 271 annet ledd, som kan føre til at kroppskrenkelsen gjøres straffri, og selvtekt etter § 19 dersom handlingen går ut på å gjenopprette en ulovlig endret tilstand. Bestemmelsen i § 18 annet ledd gjelder lovlig pågripelse, ikke gjengjeldelse, og straffnedsettelse er et siste ledd i overskridelsesdrøftelsen, ikke et selvstendig spor.",
    },
    {
      question: "Forsvareren kaster en flaske mot angriperen, men treffer en tilfeldig gjest. Hva følger av kravet om retning?",
      options: ["Nødvergeretten dekker ikke skaden på gjesten, og forholdet må vurderes på et annet grunnlag, for eksempel som nødrett eller som et skyldspørsmål", "Nødvergeretten dekker også skaden på gjesten, siden handlingen samlet sett var rettet mot angriperen og bare bommet på ham i den pressede situasjonen", "Nødvergeretten faller bort i sin helhet, også for den delen av handlingen som var rettet mot angriperen selv i situasjonen", "Nødvergeretten dekker skaden på gjesten dersom forsvareren ikke kunne forutse at noen andre kunne bli truffet av kastet"],
      explanation: "Riktig svar er at nødvergeretten ikke dekker skaden på tredjepersonen. Da må forholdet vurderes på et annet grunnlag — som nødrett etter straffeloven § 17 dersom vilkårene der er oppfylt, eller som et spørsmål om skyld dersom treffet var utilsiktet. Kravet gjelder retningen mot personen; at forsvaret i tillegg volder tilfeldig skade på angriperens eiendom, ligger normalt innenfor.",
    },
    {
      question: "Hva spør nødvendighetskravet i straffeloven § 18 første ledd bokstav b om?",
      options: ["Om midlene: kunne angrepet vært avverget med mindre inngripende maktbruk enn den som faktisk ble brukt?", "Om forholdsmessigheten: står den skaden forsvaret voldte, i et rimelig forhold til det godet som ble angrepet?", "Om motivet: avverget den angrepne angrepet, eller handlet han i sinne over det som hadde skjedd?", "Om tidsrammen: pågikk angrepet fortsatt, eller var det avsluttet da forsvarshandlingen ble foretatt av den angrepne?"],
      explanation: "Riktig svar er at nødvendigheten spør om midlene — hvor mye makt som trengtes. Vurderingen gjøres ut fra situasjonen slik den framsto for den angrepne i øyeblikket, og han behøver ikke velge det teoretisk mest skånsomme alternativet i ettertid. Forholdsmessigheten mellom det angrepne godet og skaden forsvaret voldte, hører til forsvarlighetskravet, som er et selvstendig vilkår. Utgangspunktet er dessuten at den angrepne ikke plikter å vike for et ulovlig angrep, men muligheten til å komme seg unna uten risiko er et moment i vurderingen — og det er situasjonen slik den framsto da handlingen ble foretatt, som teller, ikke det man vet i ettertid.",
    },
    {
      question: "Hvilke tre momenter navngir loven selv i forsvarlighetsvurderingen?",
      options: ["Hvor farlig angrepet er, hva slags interesse angrepet krenker, og angriperens skyld", "Hvor farlig angrepet er, om han kunne flyktet, og hvor mye makt han brukte", "Angrepets varighet, den skaden forsvaret voldte, og forholdet mellom partene fra før", "Hvor farlig angrepet er, hva slags interesse det krenker, og den angrepnes egen skyld"],
      explanation: "Riktig svar er hvor farlig angrepet er, hva slags interesse angrepet krenker, og angriperens skyld. Momentene virker sammen: et farlig angrep mot liv og helse fra en fullt bevisst angriper tåler mye motmakt, mens et beskjedent angrep mot en gjenstand fra en forvirret person tåler lite. Merk at det er angriperens skyld loven nevner, ikke den angrepnes.",
    },
    {
      question: "Hvilken funksjon har terskelordet «åpenbart» i forsvarlighetskravet?",
      options: ["Det gjør at det skal en god del til før grensen er passert, fordi den angrepne står i en presset situasjon og ikke skal måtte beregne finmasket", "Det gjør at forsvaret må være det mest velavveide alternativet i den situasjonen han sto i, siden enhver tvil om maktbruken skal komme angriperen til gode", "Det gjør at kravet bare gjelder når angrepet var rettet mot en gjenstand, mens angrep på person vurderes uten noen terskel", "Det gjør at spørsmålet om forsvarlighet bare skal drøftes når faktum uttrykkelig gir holdepunkter for at forsvaret gikk for langt"],
      explanation: "Riktig svar er at ordet hever terskelen: loven krever ikke at forsvaret var det mest velavveide, og det skal en god del til før grensen er passert. Det er en bevisst avveining fra lovgivers side, fordi den angrepne står i en presset situasjon og ikke skal måtte beregne finmasket. Kravet gjelder uansett hva angrepet var rettet mot, og forsvarligheten skal alltid prøves.",
    },
    {
      question: "Hvorfor er nødvendighet og forsvarlighet to selvstendige vilkår og ikke ett?",
      options: ["Fordi de spør om ulike ting og kan gi ulike svar: et forsvar kan være det eneste som ville stanset angrepet, og likevel være åpenbart uforholdsmessig", "Fordi de gjelder ulike tidspunkter: nødvendigheten vurderes da angrepet startet, mens forsvarligheten vurderes da forsvarshandlingen ble avsluttet", "Fordi de gjelder ulike parter: nødvendigheten vurderes ut fra den angrepnes situasjon, mens forsvarligheten vurderes ut fra angriperens forutsetninger", "Fordi de har ulik rettsvirkning: svikter nødvendigheten, faller straffriheten bort, mens svikt i forsvarligheten bare gir grunnlag for straffnedsettelse"],
      explanation: "Riktig svar er at de spør om ulike ting og kan falle ulikt ut. Var det eneste som kunne stanse tyven, å skyte ham, var skuddet nødvendig — og likevel åpenbart uforsvarlig sett opp mot den interessen som ble angrepet. Begge vurderes ut fra situasjonen da handlingen ble foretatt, og svikt i ett hvilket som helst av vilkårene fjerner straffriheten i sin helhet.",
    },
    {
      question: "Hva regulerer straffeloven § 18 annet ledd?",
      options: ["At regelen i første ledd gjelder tilsvarende for den som iverksetter en lovlig pågripelse eller hindrer at noen unndrar seg frihetsstraff", "At regelen i første ledd gjelder tilsvarende for den som griper inn til fordel for en annen person som blir angrepet av en tredjeperson på et offentlig sted", "At regelen i første ledd bare gjelder når den angrepne ikke hadde noen mulighet til å tilkalle politiet før han måtte handle", "At regelen i første ledd gjelder tilsvarende når den som forsvarer seg, tok feil og trodde at han sto overfor et ulovlig angrep"],
      explanation: "Riktig svar er at annet ledd utvider regelen til den som iverksetter en lovlig pågripelse eller søker å hindre at noen unndrar seg varetektsfengsling eller gjennomføring av frihetsstraff. Ordlyden er ikke begrenset til politiet, og skrankene er de samme: ikke lenger enn nødvendig, og ikke åpenbart ut over det forsvarlige. Nødverge til fordel for andre følger derimot allerede av første ledd.",
    },
    {
      question: "Hvilke ekstra vilkår stiller straffeloven § 18 tredje ledd for nødverge mot offentlig myndighetsutøving?",
      options: ["At myndighetsutøvingen er ulovlig, og at den som gjennomfører den, i tillegg opptrer forsettlig eller grovt uaktsomt", "At myndighetsutøvingen er ulovlig, og at den som rammes, først har forsøkt å klage over inngrepet på ordinær måte", "At myndighetsutøvingen er ulovlig, og at inngrepet innebærer en fare for betydelig skade på liv eller helse hos den som rammes", "At myndighetsutøvingen er ulovlig, og at tjenestepersonen har handlet utenfor det saklige området for sin egen myndighet"],
      explanation: "Riktig svar er at det stilles to ekstra vilkår: inngrepet må være ulovlig, og den som gjennomfører det, må i tillegg ha opptrådt forsettlig eller grovt uaktsomt. Terskelen er altså lagt på grov uaktsomhet, slik at en vanlig feilvurdering ikke kan møtes med makt. Regelen er et unntak som innskrenker nødvergeretten, fordi den som mener seg urettmessig behandlet, skal bruke klage- og domstolsveien.",
    },
    {
      question: "Kan en lovlig nødrettshandling som rammer en uskyldig tredjeperson, møtes med nødverge?",
      options: ["Nei, for straffeloven § 18 krever at angrepet er ulovlig, og dette er den skarpeste konsekvensen av at nødretten er en straffrihetsgrunn", "Ja, for den uskyldige har ikke gjort noe galt, og han må kunne verne seg mot et inngrep som han selv ikke på noen måte har gitt foranledning til", "Ja, men bare når den skaden han selv ville lide, er større enn den skaden nødrettshandlingen var ment å avverge for andre", "Nei, men han kan i stedet påberope seg selvtekt etter straffeloven § 19, siden han da gjenoppretter en ulovlig endret tilstand"],
      explanation: "Riktig svar er nei: bestemmelsen krever et ulovlig angrep, og en lovlig nødrettshandling er nettopp lovlig. Det samme gjelder en lovlig nødvergehandling — angriperen som blir slått ned i lovlig selvforsvar, har ingen rett til å slå tilbake. Motsatt vei gjelder at en handling som er ulovlig men ustraffet, fortsatt er et ulovlig angrep, slik at nødverge er mulig.",
    },
    {
      question: "Forsvaret går ut over det straffeloven § 18 tillater. Hva blir virkningen?",
      options: ["Straffriheten faller bort i sin helhet, og handlingen er dermed et lovbrudd — det finnes ingen delvis nødverge", "Straffriheten består for den delen av forsvaret som var innenfor, mens overskytende maktbruk vurderes som en egen handling", "Straffriheten faller bort, men handlingen regnes likevel som lovlig overfor den som ble rammet", "Straffriheten består, men retten skal da sette straffen under minstestraffen i det straffebudet handlingen rammes av"],
      explanation: "Riktig svar er at straffriheten faller bort i sin helhet: vilkårene er ikke oppfylt, handlingen er ikke lovlig, og det finnes ingen mellomkategori der den er «delvis lovlig». Drøftelsen er likevel ikke ferdig — den fortsetter i straffeloven § 81 om adgangen til å frifinne og eventuelt i § 80 om nedsettelse av straffen.",
    },
    {
      question: "Hva går straffeloven § 81 bokstav b ut på, og hvilken kategori hører den i?",
      options: ["Retten kan frifinne den som har overskredet grensene når særlige grunner tilsier det, og bestemmelsen er en straffritaksgrunn", "Retten kan frifinne den som har overskredet grensene når overskridelsen var beskjeden, og bestemmelsen er en straffrihetsgrunn", "Retten skal frifinne den som har overskredet grensene i en presset situasjon, og bestemmelsen er en straffbortfallsgrunn", "Retten kan sette straffen under minstestraffen ved overskridelse, og bestemmelsen er derfor en ren utmålingsregel i loven"],
      explanation: "Riktig svar er at retten kan frifinne når grensene er overskredet og særlige grunner tilsier frifinnelse, og at bestemmelsen er en straffritaksgrunn. Kjennetegnet er nettopp at handlingen forblir straffbar og at retten kan — ikke må — frifinne. Særlige grunner er et strengt vilkår; det holder ikke at situasjonen var vanskelig. Adgangen til å gå under minstestraffen ligger i § 80 bokstav d.",
    },
    {
      question: "Hva er den praktiske konsekvensen av at et fritak etter straffeloven § 81 bokstav b ikke gjør handlingen lovlig?",
      options: ["Handlingen kunne vært møtt med nødverge av den som ble rammet, og fritaket kommer ikke uten videre en medvirker til gode", "Handlingen kan ikke danne grunnlag for erstatningsansvar, siden retten har kommet til at gjerningspersonen skal frifinnes", "Handlingen må vurderes på nytt etter straffeloven § 80 bokstav d, siden et fritak alltid forutsetter at straffen først er utmålt", "Handlingen regnes som lovlig for alle som deltok, siden frifinnelsen knytter seg til selve handlingen og ikke til personen"],
      explanation: "Riktig svar er at handlingen forblir ulovlig, slik at den kunne vært møtt med nødverge av den som ble rammet — og at fritaket er knyttet til denne personens situasjon og derfor ikke uten videre kommer en medvirker til gode. Det er nettopp her forskjellen mellom straffrihet og straffritak får praktisk betydning, og en straffrihetsgrunn ville virket for alle.",
    },
    {
      question: "En mann tar feil og tror at han blir angrepet, mens noe angrep ikke foreligger. Hvordan løses tilfellet?",
      options: ["Som et spørsmål om skyld, siden vilkårene i § 18 er objektive og en feiloppfatning ikke gjør handlingen lovlig", "Som lovlig nødverge etter § 18, siden vilkårene vurderes ut fra situasjonen slik den framsto for ham i øyeblikket", "Som en overskridelse av nødvergeretten, som behandles etter reglene om straffritak i § 81 bokstav b", "Som nødrett etter § 17, siden han i sin egen oppfatning avverget en fare som truet en interesse han hadde rett til å verne"],
      explanation: "Riktig svar er at tilfellet løses som et spørsmål om skyld: vilkårene er objektive, og forelå det ikke noe ulovlig angrep, kommer § 18 ikke direkte til anvendelse. Trodde han at et angrep forelå, mangler han derimot forsett om å begå et lovbrudd, og reglene om faktisk uvitenhet gjelder. Sporvalget betyr noe — går han fri av manglende forsett, er handlingen fortsatt ulovlig. Ved overskridelse forelå angrepet, men forsvaret gikk for langt.",
    },
    {
      question: "Hva er det raskeste kontrollspørsmålet for å skille nødverge fra nødrett?",
      options: ["Hvem eller hva rammes av handlingen? Rammer den angriperen, er sporet nødverge; rammer den en uskyldig, er sporet nødrett", "Hvor alvorlig var faren? Er faren stor, er sporet nødverge; er den mindre, må forholdet i stedet vurderes som nødrett", "Hvem handlet først? Handlet den som forsvarte seg først, er sporet nødrett; ellers er sporet nødverge etter straffeloven § 18", "Var handlingen nødvendig? Var den nødvendig, er sporet nødverge; var den bare ønskelig, må forholdet vurderes som nødrett"],
      explanation: "Riktig svar er å spørre hvem eller hva som rammes av handlingen. Nødvergen utløses av et ulovlig angrep og rettes mot angriperen, mens nødretten utløses av en fare som ikke behøver komme fra et menneske, og rammer en uskyldig tredjeperson eller et gode. Tersklene er også ulike: nødvergen tåler alt som ikke er åpenbart uforsvarlig, mens nødretten krever at det som reddes, er langt mer verd enn det som ofres.",
    },
    {
      question: "Hva sier kapitlet om bruk av rettspraksis i en nødvergebesvarelse?",
      options: ["Materialet navngir ingen avgjørelse om nødverge, så framstillingen bygger på lovteksten, og du skal ikke oppgi en dom du ikke har lest", "Materialet navngir to sentrale avgjørelser om nødverge, og en sterk besvarelse bør bruke minst én av dem argumentativt", "Rettspraksis er nødvendig her fordi lovteksten er knapp, så du bør vise til en avgjørelse du kjenner fra andre sammenhenger", "Rettspraksis er uten betydning i strafferetten generelt, siden legalitetsprinsippet krever at avgjørelsen bygger på lovteksten alene"],
      explanation: "Riktig svar er at materialet ikke navngir noen avgjørelse om nødverge, og at framstillingen derfor bygger på lovteksten — som er detaljert nok til å bære en full drøftelse, siden bokstav c til og med navngir de tre momentene selv. Å oppgi en dom du ikke har lest, er feil #15, å oppgi kilder man ikke har. Rettspraksis er ellers en sentral rettskildefaktor i faget, men ikke her.",
    },
  ],
  'juroff1500-5-3': [
    {
      question: "Hvilken bestemmelse hjemler nødretten?",
      options: ["Straffeloven § 17, som gjør handlingen lovlig når vilkårene i bestemmelsen er oppfylt", "Straffeloven § 18, som gjør et forsvar mot et ulovlig angrep lovlig på nærmere vilkår", "Straffeloven § 19, som gjør det lovlig å gjenopprette en ulovlig endret tilstand selv", "Straffeloven § 81, som gir retten adgang til å frifinne når særlige grunner tilsier det"],
      explanation: "Riktig svar er straffeloven § 17. Bestemmelsen om nødverge gjelder forsvar mot et ulovlig angrep, bestemmelsen om selvtekt gjelder gjenoppretting av en ulovlig endret tilstand, og frifinnelsesadgangen ved overskridelse er en helt annen regel med en annen virkning.",
    },
    {
      question: "Hvilken kategori i tredelingen hører nødretten i?",
      options: ["Straffrihetsgrunn, fordi lovteksten sier at handlingen er lovlig når vilkårene er oppfylt", "Straffritaksgrunn, fordi retten kan velge å la være å straffe den som handlet i nød", "Straffbortfallsgrunn, fordi ansvaret faller bort når faren som utløste handlingen er over", "Utmålingsregel, fordi nødssituasjonen bare gir adgang til å gå under den vanlige minstestraffen"],
      explanation: "Riktig svar er straffrihetsgrunn, og du ser det av ordet «lovlig» i lovteksten. Straffritaket er kjennetegnet av en kan-regel, straffbortfallet av at ansvaret faller bort med tiden, og utmålingsregelen forutsetter at det ilegges en reaksjon.",
    },
    {
      question: "Hva må foreligge for at nødretten skal komme til anvendelse?",
      options: ["En fare for skade på en interesse loven verner, uansett hvor faren kommer fra", "Et ulovlig angrep fra et menneske som er påbegynt eller umiddelbart forestående", "En ulovlig endret tilstand som den berettigede ønsker å få gjenopprettet raskt", "En trussel om skade som en offentlig myndighet har unnlatt å gripe inn mot i tide"],
      explanation: "Riktig svar er en fare for skade, og kilden til faren er uten betydning. Kravet om et ulovlig angrep hører til nødvergen, den ulovlig endrede tilstanden til selvtekten, og loven stiller ikke noe vilkår om at myndighetene skal ha sviktet.",
    },
    {
      question: "Kan en fare som er skapt av et menneske, gi grunnlag for nødrett?",
      options: ["Ja, kilden til faren er uten betydning; det avgjørende er hvem handlingen rammer", "Nei, en fare skapt av et menneske er et angrep, og da er sporet alltid nødverge", "Ja, men bare dersom den som skapte faren, gjorde det uaktsomt og ikke med forsett", "Nei, nødretten er forbeholdt farer som skyldes naturkrefter, dyr eller tekniske svikt"],
      explanation: "Riktig svar er at kilden er uten betydning. Det er retningen på handlingen som velger bestemmelse: rammer den angriperen, er sporet nødverge, og rammer den en uskyldig, er sporet nødrett. Verken skyldformen bak faren eller dens naturlige opphav er vilkår.",
    },
    {
      question: "Hvilket krav stiller loven til andre måter å avverge faren på?",
      options: ["Faren må ikke kunne avverges på annen rimelig måte enn ved den aktuelle handlingen", "Faren må være umulig å avverge på noen annen tenkelig måte enn den som ble valgt", "Faren må være meldt til politiet eller brannvesenet før handlingen kan foretas lovlig", "Faren må ikke kunne avverges av andre personer som var til stede i samme situasjon"],
      explanation: "Riktig svar er kravet om annen rimelig måte. Ordet «rimelig» gjør at et alternativ som ville tatt for lang tid eller vært uforholdsmessig risikabelt, ikke teller. Loven krever verken varsling som formalitet eller at ethvert tenkelig alternativ er uttømt.",
    },
    {
      question: "Hva krever interesseavveiningen i straffeloven § 17?",
      options: ["At den avvergede skaderisikoen er langt større enn skaderisikoen ved handlingen", "At den avvergede skaderisikoen er noe større enn skaderisikoen ved handlingen selv", "At den avvergede skaden faktisk inntraff, og at den var større enn den voldte skaden", "At handlingen ikke går åpenbart ut over hva som er forsvarlig i den gitte situasjonen"],
      explanation: "Riktig svar er kravet om at skaderisikoen skal være langt større. En knapp overvekt er ikke nok, og det er nettopp prisen for at en uskyldig må tåle tapet. Terskelen om det åpenbart uforsvarlige hører til nødvergen, og det er risikoer som veies, ikke inntrådte skader.",
    },
    {
      question: "Hva består en skaderisiko av?",
      options: ["Sannsynligheten for at skaden inntreffer, sett sammen med hvor stor skaden ville blitt", "Utelukkende omfanget av den skaden som ville inntruffet dersom faren hadde slått til", "Utelukkende sannsynligheten for at skaden ville inntruffet i den aktuelle situasjonen", "Den økonomiske verdien av det godet som sto i fare, beregnet på handlingstidspunktet"],
      explanation: "Riktig svar er at både sannsynlighet og omfang inngår. En liten sannsynlighet for en katastrofe kan derfor veie tyngre enn en stor sannsynlighet for en bagatell. Å se på bare den ene faktoren, eller å redusere det hele til kroner, gjør halve regnestykket.",
    },
    {
      question: "Hvilket kontrollspørsmål skiller nødrett fra nødverge?",
      options: ["Hvem eller hva rammes av handlingen — angriperen eller en uskyldig tredjeperson?", "Hvem eller hva har skapt faren — et menneske, et dyr eller en naturhendelse?", "Hvor alvorlig er det godet som ble reddet, sammenliknet med det som ble ofret?", "Hadde den som handlet, mulighet til å komme seg unna situasjonen på en trygg måte?"],
      explanation: "Riktig svar er spørsmålet om hvem handlingen rammer, fordi de to bestemmelsene er bygget rundt hver sin begrunnelse. Kilden til faren avgjør ikke sporet. Avveiningen og fluktmuligheten er momenter inne i vurderingen, ikke verktøy for å velge hjemmel.",
    },
    {
      question: "Hvorfor er terskelen strengere i nødretten enn i nødvergen?",
      options: ["Fordi den som rammes av en nødrettshandling, er uskyldig og ikke har skapt situasjonen", "Fordi nødrettshandlinger som regel volder større skade enn nødvergehandlinger gjør", "Fordi nødretten er ulovfestet og derfor må anvendes med større varsomhet av domstolene", "Fordi nødretten bare gjelder skade på eiendom, mens nødvergen også verner liv og helse"],
      explanation: "Riktig svar er at den rammede er uskyldig. Angriperen har selv utløst situasjonen og må tåle mye, mens den som bare eier det som ofres, ikke har gjort noe. Nødretten er dessuten lovfestet i straffeloven § 17, og den verner alle de samme interessene som nødvergen.",
    },
    {
      question: "Kan den som rammes av en lovlig nødrettshandling, forsvare seg med nødverge?",
      options: ["Nei, fordi nødverge krever et ulovlig angrep, og en lovlig handling er ikke ulovlig", "Ja, fordi han er uskyldig og derfor har full rett til å verne sine egne interesser", "Ja, men bare når det godet som trues, er mer verd enn det som skulle reddes", "Nei, fordi nødrettshandlinger alltid utføres av offentlige myndigheter i tjeneste"],
      explanation: "Riktig svar er at nødverge er avskåret, siden vilkåret om et ulovlig angrep svikter. Dette er den skarpeste konsekvensen av at nødretten er en straffrihetsgrunn. Uskyld gir ingen selvstendig forsvarsrett, og nødretten gjelder for enhver, ikke bare for myndighetene.",
    },
    {
      question: "Hva blir følgen dersom nødrettshandlingen er ulovlig fordi et vilkår svikter?",
      options: ["Handlingen er da et ulovlig angrep, og den kan møtes med nødverge på vanlige vilkår", "Handlingen forblir lovlig for den som handlet, men gir grunnlag for erstatningsansvar", "Handlingen blir automatisk straffri fordi den som handlet, var i en presset situasjon", "Handlingen kan bare møtes med nødverge dersom den rammer liv eller helse hos noen"],
      explanation: "Riktig svar er at handlingen da er et ulovlig angrep som kan møtes med nødverge. Det er nettopp kategorien som avgjør dette. Straffriheten faller helt bort når et vilkår svikter, og nødvergeretten er ikke begrenset til angrep på person.",
    },
    {
      question: "Hva betyr det at den som handlet, selv har forårsaket nødssituasjonen?",
      options: ["At nødretten ikke er utelukket, men at forholdet inngår i vurderingen av vilkårene", "At nødretten er utelukket, siden regelen bare verner den som er uten skyld i faren", "At nødretten gjelder fullt ut, siden lovteksten ikke nevner hvordan faren oppsto", "At nødretten bare kan påberopes dersom faren ble skapt ved en ren forglemmelse"],
      explanation: "Riktig svar er at forholdet ikke utelukker nødrett, men får betydning i alternativvurderingen og i avveiningen. Lovteksten stiller ikke noe vilkår om at faren skal ha oppstått uten den handlendes medvirkning, men en bevisst konstruert nødssituasjon står svakt.",
    },
    {
      question: "Hvordan løses tilfellet der det ikke forelå noen fare, men den handlende trodde det?",
      options: ["Som et spørsmål om skyld, siden vilkårene i straffeloven § 17 er objektive", "Som nødrett, siden vilkårene vurderes ut fra situasjonen slik den framsto for henne", "Som en overskridelse av nødretten, med adgang til frifinnelse etter særlige grunner", "Som et spørsmål om rettsuvitenhet, siden hun tok feil av hva loven tillater henne"],
      explanation: "Riktig svar er at det løses i skyldlæren. Vilkårene er objektive, så handlingen forblir ulovlig, men villfarelsen kan fjerne forsettet. Vurderingstidspunktet gjelder hvordan de objektive vilkårene bedømmes, og feilen gjelder faktum og ikke innholdet i loven.",
    },
    {
      question: "Hvorfor har det betydning om noen går fri etter § 17 eller på grunn av manglende forsett?",
      options: ["Fordi handlingen bare blir lovlig i det første tilfellet, med virkning for alle andre", "Fordi straffen bare kan settes ned i det første tilfellet, men ikke i det andre", "Fordi bevisbyrden er forskjellig i de to tilfellene, og kravet er strengest ved forsett", "Fordi foreldelsesfristen løper ulikt avhengig av hvilket grunnlag frifinnelsen bygger på"],
      explanation: "Riktig svar er at bare straffrihetsgrunnen gjør handlingen lovlig. Går hun fri fordi forsettet mangler, er handlingen fortsatt ulovlig: den kan møtes med nødverge, og en medvirker som visste bedre, kan straffes. Verken utmåling, bevisbyrde eller foreldelse berøres av skillet.",
    },
    {
      question: "Hva gjelder for tidsrammen i nødretten?",
      options: ["Faren må foreligge nå eller være nært forestående, og retten opphører når faren er over", "Faren må ha inntrådt allerede, siden en fremtidig fare aldri kan avverges lovlig", "Faren må vare i minst så lang tid at myndighetene kunne vært varslet på forhånd", "Faren kan ligge langt fram i tid, så lenge den er sikker og lar seg dokumentere"],
      explanation: "Riktig svar er at faren må være aktuell eller nært forestående. En fare som ligger langt fram, kan normalt møtes på lovlig vis, og da svikter uansett kravet om annen rimelig måte. Retten varer heller ikke lenger enn faren gjør.",
    },
    {
      question: "Ut fra hvilket tidspunkt vurderes vilkårene i straffeloven § 17?",
      options: ["Situasjonen slik den framsto da handlingen ble foretatt, ikke slik den viste seg senere", "Situasjonen slik den i ettertid viste seg å ha vært, når faktum er fullt opplyst", "Situasjonen slik den framsto for den som ble rammet av handlingen i det aktuelle øyeblikket", "Situasjonen slik den ville framstått for en sakkyndig med full oversikt over forholdet"],
      explanation: "Riktig svar er situasjonen på handlingstidspunktet. At faren i ettertid viste seg mindre enn antatt, avgjør ikke saken, og et alternativ hun ikke kjente til, var ikke tilgjengelig for henne. Vurderingen gjøres fra den handlendes ståsted, ikke fra den rammedes.",
    },
    {
      question: "Gjelder nødretten også når man redder en fremmed eller en allmenn interesse?",
      options: ["Ja, ordlyden knytter ikke lovligheten til hvem den truede interessen tilhører", "Nei, nødretten er forbeholdt den som redder sine egne interesser fra en fare", "Ja, men bare når den truede personen selv har bedt om hjelp i den aktuelle situasjonen", "Nei, redning av allmenne interesser er forbeholdt offentlige myndigheter og nødetatene"],
      explanation: "Riktig svar er at nødretten også gjelder til fordel for andre. Lovteksten nevner liv, helse, eiendom eller en annen interesse uten å si hvem den tilhører. Verken en anmodning fra den truede eller en offentlig stilling er vilkår i bestemmelsen.",
    },
    {
      question: "Kan nødretten gjøre det lovlig å bryte en plikt man har?",
      options: ["Ja, bestemmelsen gjelder enhver handling som ellers ville vært straffbar", "Nei, nødretten gjelder bare skade på gjenstander og ikke brudd på plikter", "Ja, men bare når plikten følger av en avtale og ikke av lov eller forskrift", "Nei, plikter kan bare settes til side av den myndigheten som har pålagt dem"],
      explanation: "Riktig svar er at nødretten også kan hjemle et pliktbrudd, siden loven taler generelt om en handling som ellers ville være straffbar. Vilkårene er de samme, og alternativvurderingen er ofte avgjørende. Verken pliktens grunnlag eller et vedtak fra en myndighet er relevant her.",
    },
    {
      question: "Kan overbevisning om at en regel er urimelig, gi grunnlag for nødrett?",
      options: ["Nei, bestemmelsen krever en konkret fare for skade og ikke en oppfatning om urett", "Ja, dersom overbevisningen deles av et flertall og gjelder et alvorlig samfunnsspørsmål", "Ja, fordi reelle hensyn er en rettskildefaktor som kan sette et straffebud til side", "Nei, med mindre den som handlet, først har forsøkt å endre regelen gjennom domstolene"],
      explanation: "Riktig svar er at overbevisning ikke er en fare. Et annet svar ville satt legalitetsprinsippet ut av spill. Foreligger det derimot en konkret og aktuell fare, prøves saken på vanlige vilkår — og da stopper anførselen som regel på kravet om annen rimelig måte.",
    },
    {
      question: "Hva skjer når grensene for nødrett overskrides?",
      options: ["Straffriheten faller bort, men retten kan frifinne når særlige grunner tilsier det", "Straffriheten består delvis, slik at bare den overskytende delen blir straffbar", "Straffansvaret faller bort automatisk, på samme måte som ved foreldelse av et forhold", "Straffen skal alltid settes under minstestraffen i det straffebudet handlingen rammes av"],
      explanation: "Riktig svar er at straffriheten faller bort, og at straffeloven § 81 bokstav b gir retten adgang til å frifinne ved særlige grunner. Det finnes ingen delvis nødrett, virkningen inntrer ikke automatisk, og nedsettelsen etter § 80 bokstav d er en adgang og ikke en plikt.",
    },
  ],
  'juroff1500-5-4': [
    {
      question: "Hvilken virkning har et gyldig samtykke innenfor sitt område?",
      options: ["Handlingen blir lovlig, og straffbarhetsvilkåret om fravær av straffrihetsgrunn svikter", "Handlingen forblir straffbar, men retten kan velge å frita gjerningspersonen for straff", "Straffansvaret faller bort av seg selv, uten at retten trenger å vurdere forholdet nærmere", "Straffen kan settes under minstestraffen i straffebudet eller til en mildere straffart"],
      explanation: "Riktig svar er at handlingen blir lovlig; samtykket er en straffrihetsgrunn. De øvrige svarene beskriver straffritak, straffbortfall og straffnedsettelse — tre andre virkninger som alle forutsetter at handlingen fortsatt er ulovlig.",
    },
    {
      question: "Hvilke bestemmelser dekker straffeloven § 276 første ledd?",
      options: ["Straff etter §§ 271, 272, 273 og 274 første ledd kommer ikke til anvendelse ved samtykke", "Straff etter alle bestemmelsene om voldslovbrudd bortfaller når fornærmede har samtykket", "Straff etter § 271 om kroppskrenkelse bortfaller, men ikke straff etter de øvrige budene", "Straff etter ethvert straffebud som verner den enkeltes fysiske integritet, bortfaller"],
      explanation: "Riktig svar er at bestemmelsen ramser opp §§ 271, 272, 273 og 274 første ledd. Å si at alle voldsbestemmelsene er dekket, er for vidt: drap og betydelig skade faller uttrykkelig utenfor. Å begrense regelen til kroppskrenkelsen er for snevert, siden også de grovere formene under grensen er med.",
    },
    {
      question: "Hva er virkningen av samtykke til drap eller til betydelig skade på kropp eller helse?",
      options: ["Straffen kan settes under minstestraffen eller til en mildere straffart, jf. § 276", "Handlingen blir lovlig på samme måte som ved de mindre alvorlige inngrepene i kroppen", "Retten kan frifinne dersom særlige grunner i den enkelte saken tilsier en frifinnelse", "Samtykket er uten enhver rettslig betydning, og forholdet bedømmes som om det ikke fantes"],
      explanation: "Riktig svar er adgangen til å gå under minstestraffen. Samtykket gir altså ikke straffrihet over grensen, men det er heller ikke uten virkning. Adgangen til å frifinne gjelder overskridelse av nødrett, nødverge og selvtekt, ikke samtykke.",
    },
    {
      question: "Hvem må avgi samtykket for at det skal være gyldig?",
      options: ["En som kan råde over det godet handlingen krenker, og som forstår hva det gjelder", "En som er over 18 år, siden mindreårige ikke kan avgi et rettslig bindende samtykke", "En som selv har foreslått handlingen, slik at initiativet ikke kom fra gjerningspersonen", "En som er registrert som eier av det godet handlingen retter seg mot i saken"],
      explanation: "Riktig svar er kravet om rådighet og forståelse. Alder er et moment i forståelsen, men ikke en fast grense i straffeloven, og hvem som tok initiativet, er uten betydning. Formell registrering er heller ikke noe vilkår.",
    },
    {
      question: "Hva innebærer kravet om at samtykket skal være informert?",
      options: ["Den som samtykker, må vite hva inngrepet innebærer, og skjult risiko er ikke dekket", "Den som samtykker, må ha fått skriftlig informasjon om inngrepet i forkant av handlingen", "Den som samtykker, må ha fått betenkningstid før handlingen kan foretas på lovlig vis", "Den som samtykker, må selv ha erfaring med den aktiviteten inngrepet er en del av"],
      explanation: "Riktig svar er kravet om kunnskap om hva inngrepet innebærer. Jo mer alvorlig inngrepet er, desto mer må være klart. Verken skriftlighet, betenkningstid eller egen erfaring er vilkår i straffeloven.",
    },
    {
      question: "Når må samtykket foreligge?",
      options: ["Før eller senest samtidig med handlingen, siden straffbarheten vurderes der", "Senest når saken kommer for retten, slik at fornærmede kan bekrefte at hun godtok det", "Før handlingen, men det kan ikke trekkes tilbake når handlingen først er påbegynt", "På et hvilket som helst tidspunkt, siden fornærmedes holdning er det avgjørende i saken"],
      explanation: "Riktig svar er at samtykket må foreligge på handlingstidspunktet. En aksept i ettertid er tilgivelse, ikke samtykke. Samtykket kan dessuten trekkes tilbake når som helst, og det som skjer etter tilbakekallet, er ikke dekket.",
    },
    {
      question: "Hva er rammen for et stilltiende samtykke i en idrettskamp?",
      options: ["Aktiviteten selv, slik at handlinger utenfor det spillet består i, ikke er dekket", "Alt som skjer på banen fra kampstart til kampslutt, uansett hva dommeren måtte mene", "Alt utøveren ikke uttrykkelig har motsatt seg overfor motstanderen sin før kampen", "De handlingene som er vanlige i idretten, uansett når i forløpet de blir foretatt"],
      explanation: "Riktig svar er at aktiviteten setter rammen. Et grep innenfor idrettens regler er akseptert; et slag etter fløyta er det ikke. De øvrige svarene strekker samtykket til handlinger ingen har akseptert, eller snur utgangspunktet til at alt er tillatt inntil noe sies.",
    },
    {
      question: "Hva skiller samtykket fra rettsstridsreservasjonen?",
      options: ["Samtykket kommer fra den enkelte og kan trekkes tilbake, mens reservasjonen kommer fra rettsordenen", "Samtykket gjelder bare voldslovbrudd, mens reservasjonen gjelder alle andre straffebud", "Samtykket er lovfestet i alle tilfeller, mens reservasjonen aldri har noen lovforankring", "Samtykket virker i det første straffbarhetsvilkåret, mens reservasjonen virker i det andre"],
      explanation: "Riktig svar er at de har ulik kilde: den ene fra den enkelte, den andre fra rettsordenen. Påstanden om at samtykket virker i det første straffbarhetsvilkåret og reservasjonen i det andre, bytter om på plasseringen — det er reservasjonen som virker i tolkningen av gjerningsbeskrivelsen.",
    },
    {
      question: "Hva bestemmer straffeloven § 271 annet ledd?",
      options: ["At en kroppskrenkelse kan gjøres straffri når den er blitt gjengjeldt, eller selv gjengjelder noe", "At en kroppskrenkelse er lovlig når den gjengjelder en forutgående krenkelse fra fornærmede", "At straffen for en kroppskrenkelse skal settes ned når fornærmede selv har opptrådt grovt", "At påtale for en kroppskrenkelse bare finner sted når allmenne hensyn tilsier forfølgning"],
      explanation: "Riktig svar er at kroppskrenkelsen kan gjøres straffri. Ordlyden gir retten en adgang, ikke en plikt, og den gjør ikke handlingen lovlig. Bestemmelsen fastsetter heller ingen nedsettelsesregel og har ikke noe med påtalespørsmålet å gjøre.",
    },
    {
      question: "Hva beskriver bokstav a i straffeloven § 271 annet ledd?",
      options: ["At kroppskrenkelsen er blitt gjengjeldt med en kroppskrenkelse eller med en kroppsskade", "At kroppskrenkelsen gjengjelder en forutgående krenkelse eller en provoserende ytring", "At kroppskrenkelsen ble begått for å avverge et angrep som var umiddelbart forestående", "At kroppskrenkelsen ble begått av en person som selv var utsatt for en langvarig konflikt"],
      explanation: "Riktig svar er retorsjonstilfellet: den som slo først, har fått igjen. Beskrivelsen av en krenkelse som gjengjelder noe som kom først, treffer derimot provokasjonen i bokstav b, altså samme situasjon sett fra motsatt side. Avverging av et angrep hører til nødvergen, og en langvarig konflikt er ikke noe vilkår.",
    },
    {
      question: "Hva kan utløse fritaksregelen etter bokstav b i straffeloven § 271 annet ledd?",
      options: ["En forutgående kroppskrenkelse, en kroppsskade eller en særlig provoserende ytring", "En hvilken som helst fornærmelse som gjerningspersonen oppfattet som krenkende", "En forutgående krenkelse av eiendom, for eksempel skadeverk på gjerningspersonens ting", "En tidligere dom mot fornærmede for vold mot den som nå har begått kroppskrenkelsen"],
      explanation: "Riktig svar er de tre formene ordlyden selv nevner. Terskelen ligger i ordet «særlig», så en alminnelig fornærmelse er ikke nok. Verken skadeverk på ting eller fornærmedes tidligere forhold står i bestemmelsen.",
    },
    {
      question: "Hvilken kategori i tredelingen hører provokasjon og retorsjon i?",
      options: ["Straffritaksgrunn, siden loven sier at kroppskrenkelsen kan gjøres straffri av retten", "Straffrihetsgrunn, siden gjerningspersonen går fri når vilkårene i loven er oppfylt", "Straffbortfallsgrunn, siden ansvaret faller bort når fornærmede selv har begynt konflikten", "Ingen av kategoriene, siden regelen bare er en formildende omstendighet ved utmålingen"],
      explanation: "Riktig svar er straffritaksgrunn, og du ser det av kan-formen i lovteksten. Handlingen forblir straffbar, så den kan møtes med nødverge og kommer ikke uten videre en medvirker til gode. Bortfall inntrer automatisk, og en formildende omstendighet gir bare en mildere reaksjon.",
    },
    {
      question: "Hvor langt rekker fritaksregelen i straffeloven § 271 annet ledd?",
      options: ["Til kroppskrenkelsen etter § 271, og altså ikke til kroppsskaden etter straffeloven § 273", "Til kroppskrenkelse og kroppsskade, men ikke til de grove formene av disse lovbruddene", "Til alle voldslovbrudd så lenge fornærmede selv har utløst situasjonen med sin atferd", "Til alle lovbrudd der fornærmedes eget forhold har framkalt handlingen fra gjerningspersonen"],
      explanation: "Riktig svar er at bare kroppskrenkelsen kan gjøres straffri. Merk asymmetrien: gjengjeldelsen som utløser regelen etter bokstav a, kan godt være en kroppsskade. Blir følgen av den handlingen som skal fritas, mer alvorlig, er regelen avskåret.",
    },
    {
      question: "Hva ligger i kravet om at handlingen skal gjengjelde det som kom først?",
      options: ["At handlingen framstår som et svar, slik at sammenhengen i tid fortsatt er i behold", "At handlingen kommer i samme øyeblikk som krenkelsen, uten noen form for opphold", "At handlingen er av samme art og omtrent samme alvorlighet som den første krenkelsen", "At handlingen retter seg mot den samme personen som utførte den første krenkelsen"],
      explanation: "Riktig svar er kravet om at sammenhengen i tid er i behold. En kort pause bryter den ikke, men en gjengjeldelse dagen etter er en hevn og ikke et svar. Loven krever verken samtidighet eller at handlingene er like i art og alvor.",
    },
    {
      question: "Hvorfor er nødverge avskåret når krenkelsen allerede er over?",
      options: ["Fordi nødverge forutsetter et angrep som enten pågår eller er umiddelbart forestående", "Fordi nødverge bare kan påberopes av den som ikke selv har bidratt til konflikten", "Fordi nødverge krever at forsvaret retter seg mot en annen enn den som krenket først", "Fordi nødverge er forbeholdt angrep som truer liv og helse, og ikke rene fornærmelser"],
      explanation: "Riktig svar er at det ikke er noe å avverge når angrepet er over. Da er provokasjonssporet i straffeloven § 271 annet ledd det som gjenstår. Nødvergen krever nettopp at forsvaret rettes mot angriperen, og den verner også andre interesser enn liv og helse.",
    },
    {
      question: "Hva skjer med provokasjonen når følgen er for alvorlig for § 271 annet ledd?",
      options: ["Den kan tas i betraktning som formildende omstendighet ved straffutmålingen, jf. § 78", "Den mister enhver betydning, siden fritaksregelen er uttømmende på dette området", "Den gir likevel straffrihet, siden fornærmedes eget forhold fjerner handlingens rettsstrid", "Den fører til at forholdet må vurderes etter reglene om nødverge i straffeloven § 18"],
      explanation: "Riktig svar er at forholdet fanges opp ved straffutmålingen. Virkningen er altså en mildere reaksjon, ikke bortfall av straff. Provokasjonen gjør verken handlingen lovlig eller om saken til et nødvergespørsmål.",
    },
    {
      question: "Hvor sto retorsjonsregelen før den gjeldende straffeloven?",
      options: ["I 1902 § 228 tredje ledd, som i dag svarer til annet ledd i straffeloven § 271", "I 1902-loven, men regelen ble ikke videreført da den gjeldende straffeloven ble vedtatt", "I straffeloven § 271, som ble videreført helt uendret fra den gamle loven av 1902", "I straffeprosessloven, og regelen er senere flyttet til straffelovens alminnelige del"],
      explanation: "Riktig svar er at regelen sto i 1902 § 228 tredje ledd og i dag svarer til straffeloven § 271 annet ledd. Den er videreført i modifisert form, og den fikk både nytt nummer og ny ordlyd. Å skrive av det gamle nummeret er feil nummer 14 i registeret.",
    },
    {
      question: "Hva er den vanligste feilen i oppgaver om provokasjon og retorsjon?",
      options: ["Å skrive at handlingen blir lovlig, når loven bare gir retten adgang til å frita", "Å oppgi hjemmelen med ledd, når bestemmelsen skal siteres uten leddangivelse", "Å drøfte tidsmomentet, som ikke har noen betydning for om regelen kommer til anvendelse", "Å nevne nødvergesporet, som aldri er relevant når det foreligger en provokasjon i saken"],
      explanation: "Riktig svar er å forveksle straffritak med straffrihet; det er feil nummer 4 i registeret. Hjemmelen skal tvert imot oppgis med ledd, tidsmomentet ligger i verbet «gjengjelder», og nødvergesporet skal avvises uttrykkelig når krenkelsen fortsatt pågikk.",
    },
  ],
  'juroff1500-6-1': [
    {
      question: "Hva kjennetegner et prevensjonsargument, til forskjell fra et gjengjeldelsesargument?",
      options: ["Det begrunner straffen med virkningen framover, og faller derfor bort dersom det viser seg at straffen ikke forebygger lovbrudd", "Det begrunner straffen med hva lovbruddet fortjener, og står derfor uavhengig av om straffen forebygger lovbrudd", "Det begrunner straffen med hensynet til fornærmede, og faller derfor bort dersom fornærmede motsetter seg straff", "Det begrunner straffen med lovens ordlyd, og faller derfor bort dersom ordlyden er endret etter handlingen"],
      explanation: "Prevensjonshensyn er fremadrettede: de bygger på at straffen virker, og de mister kraft når virkningen uteblir. Distraktoren om hva lovbruddet fortjener beskriver gjengjeldelsesfamilien, som er nabobegrepet og nettopp den familien som ikke faller på virkningsinnvendingen. De to siste blander inn fornærmedes syn og lovvalg i tid, som er andre spørsmål.",
    },
    {
      question: "Hvilken av disse formuleringene er et individualpreventivt argument?",
      options: ["En streng reaksjon her vil hindre at akkurat denne domfelte begår nye lovbrudd i tiden framover", "En streng reaksjon her vil vise alle andre at samfunnet ser alvorlig på denne typen handlinger", "En streng reaksjon her er det denne handlingen fortjener, uavhengig av hva den fører til senere", "En streng reaksjon her følger av at strafferammen i bestemmelsen er hevet ved en senere lovendring"],
      explanation: "Individualprevensjon er virkningen på den domfelte selv, gjennom avskrekking, uskadeliggjøring eller rehabilitering. Argumentet om å vise alle andre er allmennpreventivt, og det om hva handlingen fortjener er et gjengjeldelsesargument. Det siste er ikke en begrunnelse for straff i det hele tatt, men en opplysning om strafferammen.",
    },
    {
      question: "Hvilke tre kanaler regnes allmennprevensjonen vanligvis å virke gjennom?",
      options: ["Avskrekking, moraldanning og vanedanning, altså frykt for konsekvensen, endret oppfatning av hva som er galt, og lovlydighet som vane", "Avskrekking, uskadeliggjøring og rehabilitering, altså frykt for konsekvensen, hindring under soning og endrede forutsetninger etterpå", "Gjengjeldelse, gjenoppretting og markering, altså balanse for krenkelsen, dekning av tapet og et offentlig signal om alvoret", "Forholdsmessighet, forutberegnelighet og likebehandling, altså riktig nivå, kjent regel og samme reaksjon i like saker"],
      explanation: "Riktig svar er avskrekking, moraldanning og vanedanning. De tre nære distraktorene er hentet fra andre steder i systemet: avskrekking, uskadeliggjøring og rehabilitering er individualprevensjonens tre spor, mens de to siste listene beskriver henholdsvis gjengjeldelsesfamiliens innhold og alminnelige rettsstatskrav.",
    },
    {
      question: "Hvorfor sies gjengjeldelsesfamiliens sterkeste kort å være proporsjonaliteten?",
      options: ["Fordi den ser på skylden og krenkelsen, og derfor har en innebygd øvre grense for hvor streng straffen kan bli", "Fordi den ser på virkningen av straffen, og derfor har en innebygd øvre grense for hvor streng straffen kan bli", "Fordi den ser på gjentakelsesfaren, og derfor gir en innebygd nedre grense for hvor mild straffen kan bli", "Fordi den ser på strafferammen i straffebudet, og derfor gir en innebygd øvre grense som retten ikke kan gå over"],
      explanation: "Gjengjeldelsestanken måler straffen mot skylden og krenkelsen, og derfor følger et tak av selve begrunnelsen. Distraktoren om virkningen beskriver prevensjonsfamilien, som mangler nettopp dette taket. Gjentakelsesfare er et preventivt moment, og strafferammen er en lovbestemt grense, ikke en begrunnelse.",
    },
    {
      question: "Hvilken av disse innvendingene mot straff gjelder tredjepersoner?",
      options: ["At barn og pårørende rammes hardt av en straff de selv ikke har noen del i lovbruddet bak", "At domfelte mister utdanning og arbeid, og at soningserfaringen kan gjøre tilbakefall mer sannsynlig", "At merkelappen følger domfelte lenge etter soning og kan stenge veien tilbake til arbeidslivet", "At soningsplasser og kontroll koster samfunnet penger som kunne vært brukt på forebygging"],
      explanation: "Riktig svar er virkningene for barn og pårørende, som er den innvendingen som gjelder andre enn domfelte selv. De tre øvrige er også ekte innvendinger, men de gjelder henholdsvis skadevirkningene for domfelte, stigmatiseringen og kostnadene ved frihetsberøvelse.",
    },
    {
      question: "Hva innebærer tanken om at straff skal være siste utvei?",
      options: ["At en handling ikke bør kriminaliseres dersom målet kan nås med et mindre inngripende tiltak, som gebyr eller tilbakekall av en tillatelse", "At straffen ikke bør settes strengere enn nødvendig innenfor den strafferammen straffebudet allerede har fastsatt for lovbruddet", "At påtalemyndigheten ikke bør reise tiltale før andre etterforskningsskritt i saken er forsøkt og uttømt", "At retten ikke bør idømme ubetinget fengsel før den har vurdert om betinget fengsel kan brukes i stedet"],
      explanation: "Siste utvei-tanken gjelder selve kriminaliseringen: spørsmålet er om handlingen i det hele tatt skal være straffbar. Den første distraktoren gjelder utmålingen innenfor rammen, som er et annet spørsmål, mens de to siste beskriver påtale- og reaksjonsvalg og ikke lovgiverens beslutning.",
    },
    {
      question: "Hvorfor sies avskrekkingskanalen å bære dårligere enn moraldanningskanalen ved impulshandlinger?",
      options: ["Fordi avskrekking forutsetter at gjerningspersonen faktisk veier risikoen mot utbyttet før han handler", "Fordi avskrekking forutsetter at gjerningspersonen har vært straffet for et liknende forhold tidligere", "Fordi avskrekking forutsetter at strafferammen i den aktuelle bestemmelsen er høyere enn fengsel i to år", "Fordi avskrekking forutsetter at handlingen er begått i fellesskap med minst én annen gjerningsperson"],
      explanation: "Avskrekking bygger på en mottaker som regner på konsekvensene, og det er nettopp den forutsetningen som svikter ved impuls, rus og ung alder. Moraldanning og vanedanning virker uten den forutsetningen. De tre øvrige svarene innfører vilkår som ikke har noe med avskrekkingsmekanismen å gjøre.",
    },
    {
      question: "Hva er forskjellen på et utsagn de lege lata og et utsagn de lege ferenda?",
      options: ["Det første sier hva gjeldende rett er og prøves mot rettskildene, det andre sier hva retten bør være og prøves mot argumentene", "Det første sier hva retten bør være og prøves mot rettskildene, det andre sier hva gjeldende rett er og prøves mot argumentene", "Det første gjelder lovtekst og forskrift, det andre gjelder rettspraksis og forarbeider som kilder til én og samme regel", "Det første gjelder straffebudene i lovens spesielle del, det andre gjelder de alminnelige reglene i lovens første del"],
      explanation: "De lege lata er utsagn om gjeldende rett, de lege ferenda om ønsket rett, og de to prøves mot henholdsvis rettskildene og argumentene. Distraktor to bytter om på nøyaktig dette, som er den vanligste forvekslingen. De to siste beskriver rettskildetyper og lovens inndeling, ikke skillet mellom de to utsagnstypene.",
    },
    {
      question: "Når fungerer et hensyn som tolkningsargument og ikke som rettspolitisk argument?",
      options: ["Når hensynet kan endre hva du konkluderer med om innholdet i den regelen som gjelder i dag", "Når hensynet er hentet fra forarbeidene til bestemmelsen og ikke fra din egen vurdering av saken", "Når hensynet støttes av minst to andre rettskildefaktorer med selvstendig vekt i drøftelsen", "Når hensynet taler for det resultatet som gir den mest rimelige løsningen i den enkelte saken"],
      explanation: "Testen er om hensynet kan flytte konklusjonen om gjeldende rett. Kan det ikke det, er argumentet rettspolitisk og hører hjemme i en egen, merket setning. At hensynet står i forarbeidene eller støttes av flere kilder, sier noe om vekten, ikke om hvilken jobb det gjør, og rimelighet i enkeltsaken er ikke det samme som tolkning av regelen.",
    },
    {
      question: "Hva er kjennetegnet på en rettspolitisk løftesetning som faktisk løfter?",
      options: ["Den kommer etter at spørsmålet er besvart, er merket som vurdering og er knyttet til akkurat den regelen oppgaven gjelder", "Den kommer først i besvarelsen, er merket som vurdering og er knyttet til strafferettens formål i sin alminnelighet", "Den kommer etter at spørsmålet er besvart, er skrevet inn som gjeldende rett og bygger på en navngitt avgjørelse", "Den kommer i stedet for konklusjonen, er merket som vurdering og erstatter drøftelsen av det tvilsomme vilkåret"],
      explanation: "Løftesetningen skal komme etter svaret, være merket som en vurdering og gjelde nettopp den regelen oppgaven handler om. Å plassere den først eller å knytte den til strafferetten generelt gjør den til en innledning uten adresse, og å skrive den inn som gjeldende rett eller la den erstatte konklusjonen er direkte feil.",
    },
    {
      question: "Hvilken varsellampe tyder mest på at du er i ferd med å skrive deg bort fra spørsmålet?",
      options: ["Avsnittet du har skrevet, ville passet uendret inn i en helt annen oppgave om et annet tema", "Avsnittet du har skrevet, inneholder en henvisning til lov og paragraf med angivelse av ledd", "Avsnittet du har skrevet, konkluderer motsatt av det du trodde da du begynte å skrive det", "Avsnittet du har skrevet, er kortere enn de øvrige avsnittene i den samme besvarelsen"],
      explanation: "Den sikreste varsellampen er at teksten er utbyttbar: passer den like godt i en annen oppgave, svarer den ikke på denne. En hjemmelshenvisning er tvert imot et krav, en endret konklusjon er et tegn på reell drøftelse, og et kort avsnitt er ofte riktig dimensjonering.",
    },
    {
      question: "Hvor ofte er straffens begrunnelse og hensynene for og mot straff spurt direkte om i materialet?",
      options: ["I 2 av 34 terminer, nemlig H2024 og H2025, som er de to siste terminene i materialet", "I 2 av 34 terminer, nemlig V2005 og V2006, som er de to første terminene i materialet", "I 19 av 34 terminer, som er tallet for hele samlekategorien reaksjonslæren i materialet", "I 12 av 34 terminer, som er tallet for spørsmål om straffer og strafferettslige reaksjoner"],
      explanation: "Straffens begrunnelse er direkte spurt om i 2 av 34 terminer, og begge er ferske: H2024 og H2025. Tallene 19 og 12 er ekte, men de gjelder henholdsvis samlekategorien reaksjonslæren og spørsmål om straffer og reaksjoner — de er altså riktige tall om noe annet, som er den vanligste måten å bomme på her.",
    },
    {
      question: "Hvorfor er temaet likevel verdt mer enn frekvenstallet alene skulle tilsi?",
      options: ["Fordi fakultetets karakterskjema har blikk for rettspolitiske dimensjoner som kriterium på hvert nivå fra A til F", "Fordi alle de seks sensorveiledningene krever at kandidaten drøfter straffens begrunnelse i hver enkelte oppgave", "Fordi oppgavesettene fra og med H2026 er kunngjort å skulle ha straffens begrunnelse som fast oppgave", "Fordi temaet erstatter kravet om hjemmelshenvisning i de oppgavene der det er nevnt i oppgaveteksten"],
      explanation: "Riktig svar er at vurderingskriteriene etterspør det rettspolitiske blikket på hvert karakternivå, altså langt oftere enn oppgavetekstene gjør. De tre øvrige påstår ting materialet ikke gir belegg for: veiledningene stiller ikke et slikt generelt krav, formen fra H2026 er ikke kjent, og ingen regel fritar noen fra å oppgi hjemmel.",
    },
    {
      question: "Hva sier H2024-veiledningen om kandidater som setter spørsmålet om skyldevne inn i sammenhengen om hvorfor vi straffer?",
      options: ["At de må honoreres for det, og at nytteeffekten av straff er den koblingen som særlig framheves", "At de bør vurderes i det nedre sjiktet, fordi koblingen ligger utenfor det oppgaven etterspør", "At koblingen er uten betydning for karakteren, fordi skyldevnen er et rent lovtolkningsspørsmål", "At koblingen bare teller dersom kandidaten også henviser til forarbeidene om skyldevnereglene"],
      explanation: "Veiledningen sier uttrykkelig at slike kandidater må honoreres, og trekker fram nytteeffekten av straff. Det nedre sjiktet er noe H2022-veiledningen sier om noe helt annet, nemlig teorioppgaver som ikke besvarer alle delene. Og forarbeider er etter H2024 et plusspunkt, aldri et krav.",
    },
  ],
  'juroff1500-6-2': [
    {
      question: "Hvor mange straffer regner straffeloven § 29 opp, og hvilke er de?",
      options: ["Seks: fengsel, forvaring, samfunnsstraff, ungdomsstraff, bot og rettighetstap", "Seks: fengsel, forvaring, samfunnsstraff, ungdomsoppfølging, bot og inndragning", "Fem: fengsel, forvaring, samfunnsstraff, bot og tap av retten til å føre motorvogn", "Fire: fengsel, forvaring, bot og overføring til tvungent psykisk helsevern"],
      explanation: "Oppregningen har seks punkter, og rettighetstapet er det siste. Distraktorene bytter inn reaksjoner som står i § 30 og altså ikke er straff: ungdomsoppfølging, inndragning, tap av førerett og overføring til tvungent psykisk helsevern. Nettopp den forvekslingen er det spørsmålet tester.",
    },
    {
      question: "Hva avgjør om en reaksjon er straff eller en annen strafferettslig reaksjon?",
      options: ["Formålet med reaksjonen, nemlig om den er ment å påføre et onde på grunn av lovbruddet", "Tyngden av inngrepet, nemlig om reaksjonen innebærer frihetsberøvelse av en viss varighet", "Hvem som ilegger reaksjonen, nemlig om det er en domstol eller et forvaltningsorgan som gjør det", "Om reaksjonen føres på rullebladet og dermed får betydning ved en senere straffesak"],
      explanation: "Kriteriet er formålet: straffen er ment å ramme, mens de andre reaksjonene tar sikte på vern, oppfølging eller gjenoppretting. At inngrepet er tungt, avgjør ingenting — overføring til tvungent psykisk helsevern kan vare lenger enn en fengselsstraff og er likevel ikke straff. Verken avgjørelsesorganet eller rullebladvirkningen er kriteriet.",
    },
    {
      question: "Hvilken av disse reaksjonene står i straffeloven § 30 og er altså ikke straff?",
      options: ["Tap av retten til å føre motorvogn, som ilegges i tillegg til eller i stedet for en annen reaksjon", "Rettighetstap, som er tap av en stilling eller av retten til å utøve en bestemt virksomhet", "Samfunnsstraff, som gjennomføres i frihet med et fastsatt timetall og en gjennomføringstid", "Ungdomsstraff, som gjennomføres i konfliktrådet med ungdomsplan og oppfølgingsteam"],
      explanation: "Tap av førerett står i § 30 og er ikke straff, mens rettighetstap, samfunnsstraff og ungdomsstraff alle står i § 29. Forvekslingen mellom rettighetstap og tap av førerett er den nære fellen her: navnene ligner, men hjemlene er ulike.",
    },
    {
      question: "Hva er grunnvilkåret i en betinget dom?",
      options: ["At domfelte ikke begår en ny straffbar handling i prøvetiden, som normalt er to år", "At domfelte gjennomfører et fastsatt antall timer samfunnsnyttig arbeid i prøvetiden", "At domfelte betaler erstatning og oppreisning til fornærmede innenfor prøvetiden", "At domfelte samtykker i dommen og har fast bosted i Norge gjennom hele prøvetiden"],
      explanation: "Grunnvilkåret er negativt formulert: domfelte skal la være å begå nye lovbrudd. Timetall hører til samfunnsstraffen, erstatningsplikt er et særvilkår som kan legges til, og samtykke- og bostedskravet er vilkår for samfunnsstraff etter § 48.",
    },
    {
      question: "Hva er den viktigste forskjellen på betinget fengsel og straffutmålingsutsettelse?",
      options: ["Ved betinget fengsel er en straff fastsatt men ikke fullbyrdet, ved straffutmålingsutsettelse er ingen straff fastsatt", "Ved betinget fengsel er ingen straff fastsatt, ved straffutmålingsutsettelse er straffen fastsatt men ikke fullbyrdet", "Ved betinget fengsel er straffskylden ikke avgjort, ved straffutmålingsutsettelse er straffskylden konstatert", "Ved betinget fengsel gjelder ingen prøvetid, ved straffutmålingsutsettelse løper det alltid en prøvetid"],
      explanation: "Riktig svar er at betinget fengsel innebærer en fastsatt straff som ikke fullbyrdes, mens straffutmålingsutsettelse betyr at retten konstaterer straffskyld uten å fastsette noen straff. Distraktor to bytter om på nøyaktig dette. Straffskylden er konstatert i begge tilfeller, og prøvetid er ikke det som skiller dem.",
    },
    {
      question: "Hvilke vilkår gjelder for samfunnsstraff etter straffeloven § 48?",
      options: ["At det ellers ikke ville blitt idømt strengere straff enn fengsel i ett år, at straffens formål ikke taler mot en reaksjon i frihet, og at lovbryteren samtykker og har bosted i et nordisk land", "At det ellers ikke ville blitt idømt strengere straff enn fengsel i to år, at lovbryteren er ustraffet fra før, og at lovbryteren samtykker og har bosted i et nordisk land", "At lovbryteren var under 18 år på handlingstidspunktet, at straffens formål ikke taler mot en reaksjon i frihet, og at hjelpebehovet er kartlagt gjennom personundersøkelse", "At lovbruddet ikke krenket andres liv, helse eller frihet, at lovbryteren samtykker, og at det foreligger en gjennomføringsplan fra kriminalomsorgen"],
      explanation: "Vilkårene er ettårsgrensen, at hensynet til straffens formål ikke taler mot en reaksjon i frihet, og samtykke pluss bosted i Norge, Danmark, Finland, Island eller Sverige. Ettårsgrensen kan fravikes, blant annet når lovbryteren var under 18 år, men lav alder er ikke i seg selv et vilkår. De øvrige svarene låner vilkår fra forvaringsreglene og fra ungdomsstraffen.",
    },
    {
      question: "Hvilke tre størrelser fastsetter retten når den idømmer samfunnsstraff?",
      options: ["Et timetall mellom 30 og 420 timer, en subsidiær fengselsstraff og en gjennomføringstid", "Et timetall mellom 30 og 420 timer, en prøvetid på to år og et sett med særvilkår", "En gjennomføringstid, en minstetid før løslatelse kan skje og en ytre tidsramme", "En bot, en subsidiær fengselsstraff og en frist for å inngå avtale med konfliktrådet"],
      explanation: "De tre er timetallet, den subsidiære fengselsstraffen og gjennomføringstiden. Prøvetid og særvilkår hører til den betingede dommen, mens minstetid og ytre tidsramme hører til forvaringen. Den subsidiære fengselsstraffen er selve mekanismen som gjør ordningen til et alternativ til soning.",
    },
    {
      question: "Hva er grunnvilkåret for å idømme forvaring etter straffeloven § 40 første ledd?",
      options: ["At fengselsstraff ikke anses tilstrekkelig til å verne andres liv, helse eller frihet, og at lovbruddet er av den typen bestemmelsen regner opp", "At lovbryteren tidligere er dømt til ubetinget fengsel minst to ganger, og at det nye lovbruddet er av samme art som de tidligere", "At lovbryteren nekter å samtykke i samfunnsstraff, og at hensynet til straffens formål taler mot en reaksjon i frihet", "At lovbryteren var utilregnelig på handlingstidspunktet, og at faren for nye alvorlige integritetskrenkelser er nærliggende"],
      explanation: "Grunnvilkåret er at fengselsstraff ikke anses tilstrekkelig til å verne liv, helse eller frihet, kombinert med at lovbruddet hører til den oppregnede typen. Tidligere domfellelser inngår bare i det strengere sporet der det pådømte lovbruddet er mindre alvorlig. Det siste svaret beskriver særreaksjonen i § 62, som forutsetter at straff er utelukket.",
    },
    {
      question: "Hva kreves i tillegg når det lovbruddet som pådømmes i en forvaringssak, er mindre alvorlig?",
      options: ["Tidligere alvorlig lovbrudd av den nevnte typen, nær sammenheng med det nye lovbruddet, og særlig nærliggende tilbakefallsfare", "Tidligere alvorlig lovbrudd av den nevnte typen, samtykke fra domfelte, og en nærliggende fare for gjentakelse av lovbruddet", "Sakkyndig erklæring om utilregnelighet, nær sammenheng med det nye lovbruddet, og nærliggende fare for gjentakelse", "Tidligere dom på samfunnsstraff, brudd på gjennomføringen av denne, og særlig nærliggende fare for nye lovbrudd"],
      explanation: "Det strengere sporet krever alle tre: tidligere alvorlig lovbrudd av den typen bestemmelsen nevner, nær sammenheng mellom det tidligere og det nye, og at tilbakefallsfaren er særlig nærliggende. Samtykke er ikke noe vilkår for forvaring, og utilregnelighet ville tvert imot utelukket straff. Å bruke det milde farekravet her er den vanligste presisjonsfeilen.",
    },
    {
      question: "Hva gjelder om forvaringens varighet?",
      options: ["Retten fastsetter en tidsramme og bør fastsette en minstetid, og rammen kan forlenges når faren består", "Retten fastsetter en fast straffetid som ikke kan endres, på samme måte som ved ordinær fengselsstraff", "Retten fastsetter bare en minstetid, mens den ytre grensen følger direkte av straffebudets strafferamme", "Retten fastsetter en gjennomføringstid og en subsidiær fengselsstraff, slik som ved samfunnsstraff"],
      explanation: "Forvaringen har både en ytre tidsramme og normalt en minstetid, og rammen kan forlenges så lenge faren består. Det er nettopp forlengelsesadgangen som gjør reaksjonen tidsubestemt og omstridt. En ordinær fengselsstraff kan ikke forlenges, og gjennomføringstid med subsidiær straff hører til samfunnsstraffen og ungdomsstraffen.",
    },
    {
      question: "Er forvaring en straff eller en annen strafferettslig reaksjon?",
      options: ["En straff, fordi den er regnet opp i straffeloven § 29 og forutsetter full straffskyld hos lovbryteren", "En annen strafferettslig reaksjon, fordi den er tidsubestemt og begrunnes i faren for nye lovbrudd", "En annen strafferettslig reaksjon, fordi den forutsetter at lovbryteren manglet skyldevne på handlingstidspunktet", "En straff, men bare når den idømmes sammen med en bot eller et rettighetstap i den samme dommen"],
      explanation: "Forvaring står i § 29 og er derfor straff, og den forutsetter full straffskyld — i motsetning til særreaksjonene i § 30, som nettopp krever at straff er utelukket. At reaksjonen er tidsubestemt, endrer ikke plasseringen, og det er den forvekslingen de to midterste svarene bygger på.",
    },
    {
      question: "Hvem kan idømmes overføring til tvungent psykisk helsevern etter straffeloven § 62?",
      options: ["En lovbryter som ikke kan straffes fordi han var utilregnelig, når vernebehovet og gjentakelsesfaren er til stede", "En lovbryter som kan straffes, men der fengselsstraff ikke anses tilstrekkelig til å verne andres liv og helse", "En lovbryter som er psykisk utviklingshemmet i høy grad, uavhengig av om han kunne straffes for handlingen", "En lovbryter som samtykker i behandling, og der behandlingen anses egnet til å redusere gjentakelsesfaren"],
      explanation: "Særreaksjonen er forbeholdt den som ikke kan straffes fordi skyldevnen manglet, og krever i tillegg at reaksjonen er nødvendig for å verne samfunnet og at faren for ny alvorlig integritetskrenkelse er nærliggende. Det andre svaret beskriver forvaring, det tredje hører til tvungen omsorg etter § 63, og samtykke er ikke noe vilkår.",
    },
    {
      question: "Hva skiller tvungen omsorg etter § 63 fra tvungent psykisk helsevern etter § 62?",
      options: ["Tvungen omsorg gjelder den høygradig psykisk utviklingshemmede og gjennomføres i en fagenhet i spesialisthelsetjenesten", "Tvungen omsorg gjelder den som var i en sterkt avvikende sinnstilstand og gjennomføres i det psykiske helsevernet", "Tvungen omsorg gjelder den som var beruset på handlingstidspunktet og gjennomføres i institusjon under kriminalomsorgen", "Tvungen omsorg gjelder mindreårige lovbrytere og gjennomføres i en barnevernsinstitusjon etter barnevernsloven"],
      explanation: "Tvungen omsorg er sporet for den høygradig psykisk utviklingshemmede, med gjennomføring i en fagenhet i spesialisthelsetjenesten. Vilkårene svarer ellers til § 62. Det andre svaret beskriver nettopp § 62, mens rus og lav alder ikke gir grunnlag for noen av de to særreaksjonene.",
    },
    {
      question: "Hva er hovedpoenget med foretaksstraff etter straffeloven § 27?",
      options: ["At foretaket kan straffes selv om ingen enkeltperson har utvist skyld eller har skyldevne", "At daglig leder alltid kan straffes personlig når et straffebud er overtrådt i virksomheten", "At foretaket kan straffes bare når en navngitt ansatt først er dømt for det samme forholdet", "At foretaket kan idømmes fengselsstraff dersom lovbruddet har gitt en betydelig økonomisk fordel"],
      explanation: "Kjernen er at ansvarssubjektet er foretaket, og at ansvaret ikke forutsetter skyld hos et enkeltmenneske. Personlig ansvar for ledelsen er et selvstendig spørsmål som kan komme i tillegg, ikke et vilkår. Og straffen for et foretak er bot, ikke fengsel.",
    },
    {
      question: "Hvilket moment i straffeloven § 28 er et rendyrket prevensjonsargument rettet mot framtiden?",
      options: ["Om foretaket kunne forebygget lovbruddet ved retningslinjer, instruksjon, opplæring eller kontroll", "Om lovbruddet er grovt, og om noen som handlet på vegne av foretaket, har utvist skyld ved det", "Om foretaket har hatt en fordel av lovbruddet, eller kunne ha oppnådd en slik fordel ved det", "Om foretaket tidligere har vært ilagt en reaksjon for et lovbrudd av samme art som dette"],
      explanation: "Forebyggingsmomentet belønner foretak som bygger systemer, og virker derfor framover. Grovhet og skyld er tilbakeskuende gjengjeldelsesmomenter, og fordelsmomentet er en vurdering av den konkrete overtredelsen. At begge begrunnelsesfamiliene står side om side i § 28, er nettopp poenget.",
    },
    {
      question: "Hvorfor skal reaksjonsspørsmålet behandles etter ansvarsspørsmålet?",
      options: ["Fordi reaksjonsvalget forutsetter at du vet hva lovbryteren er ansvarlig for, og hvilken skyldform og alder som gjelder", "Fordi retten er avskåret fra å drøfte reaksjonen før påtalemyndigheten har nedlagt sin endelige påstand i saken", "Fordi straffbarhetsvilkårene bare gjelder for de reaksjonene som er regnet opp i straffeloven § 29", "Fordi reaksjonsvalget ellers ikke kan begrunnes i hensyn, men bare i vilkårene i det aktuelle straffebudet"],
      explanation: "Rekkefølgen er en metoderegel: skyldform, antall forhold, alder og tilregnelighet avgjør både hvilke reaksjoner som er tilgjengelige og hvilke hensyn som bærer. Snus rekkefølgen, resonnerer du fra svaret og bakover. De tre øvrige svarene beskriver forhold som ikke er begrunnelsen for rekkefølgen.",
    },
    {
      question: "Hvorfor er inndragning plassert blant reaksjonene i § 30 og ikke blant straffene?",
      options: ["Fordi formålet er å fjerne utbyttet eller redskapet, ikke å påføre et onde ut over det", "Fordi inndragning bare kan besluttes av påtalemyndigheten og aldri idømmes av en domstol", "Fordi inndragning forutsetter at lovbryteren var utilregnelig på handlingstidspunktet", "Fordi inndragning bare rammer foretak og aldri fysiske personer som har begått et lovbrudd"],
      explanation: "Inndragningen tar sikte på å nøytralisere vinningen, slik at lovbryteren er tilbake der han var. Det er et annet formål enn å ramme, og derfor er reaksjonen ikke straff. De tre øvrige påstandene er uriktige om hvem som beslutter, om skyldevne og om hvem som rammes.",
    },
    {
      question: "Hva sier straffeloven § 33 om fengselsstraff for den som var under 18 år på handlingstidspunktet?",
      options: ["At ubetinget fengsel bare kan idømmes når det er særlig påkrevd, og at straffen ikke kan settes høyere enn 15 år", "At ubetinget fengsel aldri kan idømmes, og at ungdomsstraff derfor er eneste tilgjengelige reaksjon", "At ubetinget fengsel kan idømmes på vanlige vilkår, men at straffen alltid skal settes til det halve", "At ubetinget fengsel bare kan idømmes når lovbryteren samtykker, og at straffen ikke kan overstige to år"],
      explanation: "Terskelen er at ubetinget fengsel må være særlig påkrevd, og maksimum er 15 år for denne gruppen. Fengsel er altså ikke utelukket, bare underlagt en høy terskel. Verken en halveringsregel eller et samtykkekrav finnes i bestemmelsen.",
    },
    {
      question: "Hva sier straffeloven § 29 om tilfeller der flere reaksjoner ilegges samtidig?",
      options: ["At den samlede reaksjonen må stå i et rimelig forhold til lovbruddet", "At bare den strengeste av reaksjonene kan fullbyrdes, mens de øvrige faller bort", "At reaksjonene må ilegges i separate dommer for å kunne gjennomføres samtidig", "At den samlede reaksjonen aldri kan overstige halvparten av straffebudets ramme"],
      explanation: "Bestemmelsen har en forholdsmessighetsregel for den samlede reaksjonen, som er et rent utslag av gjengjeldelsesfamiliens tak. Det finnes ingen regel om at bare den strengeste fullbyrdes, ingen krav om separate dommer, og ingen halveringsgrense.",
    },
    {
      question: "Hvorfor er dette kapitlet skrevet mot lovteksten i Lovdata og ikke mot pensumboka?",
      options: ["Fordi H2024-veiledningen selv sier at læreboka er utdatert på reaksjonslæren, og fordi eksamen har Lovdata Pro i eksamensmodus", "Fordi pensumlitteraturen ikke behandler reaksjonslæren i det hele tatt, slik at boka ellers ville manglet grunnlag", "Fordi sensorveiledningene krever at kandidatene siterer lovteksten ordrett i alle svar om reaksjoner", "Fordi reaksjonslæren ikke inngår i pensum, og fordi temaet derfor bare kan prøves gjennom lovtekstoppgaver"],
      explanation: "Riktig svar er at veiledningen selv dokumenterer pensums etterslep, og at eksamensformen forutsetter at du finner fram i gjeldende lovtekst. Læreboka behandler reaksjonslæren, den er bare utdatert på deler av den, og verken sitatkrav eller pensumavgrensning er belegg for noe her.",
    },
    {
      question: "Hva sier H2024-veiledningen om studenter som bygger på reaksjonsreglene slik de var før endringen?",
      options: ["At det må være greit, fordi pensumlitteraturen er fra 2020 og skrevet før endringen trådte i kraft", "At det skal trekke, fordi kandidatene plikter å holde seg oppdatert på gjeldende lovtekst", "At det bare aksepteres når kandidaten uttrykkelig opplyser at fremstillingen bygger på eldre rett", "At spørsmålet ikke er berørt, fordi ingen av oppgavene i den terminen gjaldt reaksjonslæren"],
      explanation: "Veiledningen sier uttrykkelig at det må være greit at studentene forholder seg til loven slik den var før endringen, nettopp fordi pensumlitteraturen er eldre. Det er karakter-realisme, ikke en oppfordring til å la være å slå opp — denne boka er likevel skrevet mot gjeldende lovtekst.",
    },
    {
      question: "Hvor ofte er straffer og strafferettslige reaksjoner prøvd i materialet?",
      options: ["I 12 av 34 terminer, mens samlekategorien reaksjonslæren scorer 19 av 34 terminer", "I 19 av 34 terminer, mens samlekategorien reaksjonslæren scorer 12 av 34 terminer", "I 24 av 34 terminer, som er tallet for samlekategorien straffrihetsgrunner i materialet", "I 2 av 34 terminer, som er tallet for foretaksstraff alene i de to terminene V2016 og V2017"],
      explanation: "Riktig svar er 12 av 34 terminer for temaet og 19 av 34 terminer for hele samlekategorien. Distraktor to bytter om på de to tallene. Tallet 24 gjelder straffrihetsgrunnene, og tallet 2 gjelder foretaksstraff, som er randsone i dette kapitlet.",
    },
    {
      question: "Hva er forskjellen på ungdomsstraff og ungdomsoppfølging?",
      options: ["Ungdomsstraff er straff etter § 29 med subsidiær fengselsstraff, ungdomsoppfølging er en reaksjon etter § 30", "Ungdomsstraff er en reaksjon etter § 30, ungdomsoppfølging er straff etter § 29 med subsidiær fengselsstraff", "Ungdomsstraff gjennomføres i kriminalomsorgen, ungdomsoppfølging gjennomføres i konfliktrådet med ungdomsplan", "Ungdomsstraff krever samtykke fra ungdommen, ungdomsoppfølging kan ilegges uten noen form for samtykke"],
      explanation: "Ungdomsstraff er en straff med subsidiær fengselsstraff, mens ungdomsoppfølging er en annen strafferettslig reaksjon. Begge gjennomføres i konfliktrådet, så gjennomføringsstedet skiller dem ikke. Og samtykkekravet i ungdomsstraffen er tvert imot tatt bort ved lovendringen i kraft 1. september 2024.",
    },
    {
      question: "Hva er den vanligste systematiske feilen i et svar om forvaring?",
      options: ["Å omtale forvaring som en særreaksjon, når den er en av de seks straffene i straffeloven § 29", "Å omtale forvaring som tidsubestemt, når retten alltid fastsetter en ytre ramme for reaksjonen", "Å omtale forvaring som betinget av personundersøkelse, når slik undersøkelse bare er en anbefaling", "Å omtale forvaring som forbeholdt voldslovbrudd, når bestemmelsen også nevner seksuallovbrudd"],
      explanation: "Å kalle forvaring en særreaksjon er den feilen som velter systematikken, fordi særreaksjonene i § 30 forutsetter at straff er utelukket. Forvaringen er faktisk tidsubestemt i den forstand at rammen kan forlenges, personundersøkelse skal foretas, og bestemmelsen nevner uttrykkelig flere lovbruddstyper enn vold.",
    },
  ],
  'juroff1500-6-3': [
    {
      question: "Hva er den kriminelle lavalderen, og hvilket tidspunkt er avgjørende?",
      options: ["15 år, og det avgjørende er alderen på handlingstidspunktet, jf. straffeloven § 20 første ledd", "15 år, og det avgjørende er alderen på tidspunktet for domsavsigelsen i tingretten eller lagmannsretten", "18 år, og det avgjørende er alderen på handlingstidspunktet, jf. straffeloven § 33 første punktum", "16 år, og det avgjørende er alderen da forholdet ble anmeldt til politiet av fornærmede"],
      explanation: "Lavalderen er 15 år, og den knytter seg til handlingstidspunktet. Domstidspunktet er uten betydning, 18 år er terskelen for de særlige reaksjonsreglene og ikke for ansvaret, og anmeldelsestidspunktet spiller ingen rolle i det hele tatt.",
    },
    {
      question: "Hva skiller lavalderen fra de øvrige utilregnelighetstilstandene i straffeloven § 20?",
      options: ["Lavalderen er en absolutt regel som prøves ved å lese en fødselsdato, mens de øvrige krever en konkret vurdering av graden av svikt", "Lavalderen krever en konkret vurdering av modenhet, mens de øvrige tilstandene er absolutte og prøves ved en sakkyndig erklæring", "Lavalderen gjelder bare for lovbrudd med strafferamme over to år, mens de øvrige tilstandene gjelder for alle lovbrudd", "Lavalderen fritar for straff men ikke for særreaksjon, mens de øvrige tilstandene fritar for begge deler"],
      explanation: "Lavalderen er en regel, ikke en vurdering — den prøves ved å lese en fødselsdato. De øvrige tilstandene krever at det legges vekt på graden av svikt i virkelighetsforståelse og funksjonsevne. Ingen strafferamme begrenser lavalderen, og barnet under 15 år møtes ikke med strafferettslig særreaksjon, men med barnevernstiltak.",
    },
    {
      question: "Hva sier straffeloven § 33 om ubetinget fengsel for den som var under 18 år på handlingstidspunktet?",
      options: ["At det bare kan idømmes når det er særlig påkrevd, og at straffen ikke kan settes høyere enn 15 år", "At det bare kan idømmes når det er strengt nødvendig, og at straffen ikke kan settes høyere enn 10 år", "At det ikke kan idømmes i det hele tatt, slik at ungdomsstraff blir eneste tilgjengelige reaksjon", "At det kan idømmes på vanlige vilkår, men at gjennomføringen alltid skal skje i en egen ungdomsenhet"],
      explanation: "Terskelen er «særlig påkrevd», og maksimum for denne gruppen er 15 år. Fengsel er altså ikke utelukket, bare underlagt en høy terskel som snur utgangspunktet i valget mellom betinget og ubetinget. De øvrige svarene endrer både terskelen, maksimum og selve regelen.",
    },
    {
      question: "Hvilke fire vilkår gjelder for ungdomsstraff etter straffeloven § 52 a første ledd?",
      options: ["Under 18 år på handlingstidspunktet, egnet reaksjon, bosted i Norge, og at straffens formål ikke med tyngde taler mot en reaksjon i frihet", "Under 18 år på handlingstidspunktet, samtykke fra lovbryteren, bosted i Norge, og at straffens formål ikke taler mot en reaksjon i frihet", "Under 15 år på handlingstidspunktet, egnet reaksjon, samtykke fra foresatte, og at barnevernet har vurdert saken først", "Under 18 år på domstidspunktet, egnet reaksjon, bosted i et nordisk land, og at lovbryteren ikke er tidligere straffet"],
      explanation: "Vilkårene er alder på handlingstidspunktet, egnethet, bosted i Norge, og at straffens formål ikke med tyngde taler mot en reaksjon i frihet. Distraktor to gjengir regelen slik den var før 1. september 2024, med samtykkekravet. De to siste flytter aldersgrensen, tidspunktet og bostedskravet.",
    },
    {
      question: "Hva skjedde med samtykkekravet i ungdomsstraffen ved lovendringen som trådte i kraft 1. september 2024?",
      options: ["Det ble tatt bort, og i stedet ble det innført en rett for lovbryteren til å medvirke i egnethetsvurderingen", "Det ble beholdt, men samtykket kan nå gis av foresatte på vegne av lovbryteren dersom han er under 16 år", "Det ble utvidet, slik at også fornærmede må samtykke før ungdomsstraff kan idømmes i saken", "Det ble flyttet til konfliktrådsloven, men innholdet i kravet er uendret fra tidligere rett"],
      explanation: "Samtykkekravet er tatt bort, og motstykket er en ny lovfestet rett til å medvirke i vurderingen av om ungdomsstraff er en egnet reaksjon. Begrunnelsen var at samtykkekravet lot den ungdommen som trengte oppfølgingen mest, velge den bort. De tre øvrige beskriver endringer som ikke er gjort.",
    },
    {
      question: "Hva regulerer straffeloven § 52 a annet ledd?",
      options: ["At ungdomsstraff kan idømmes ved felles straff selv om lovbryteren var over 18 år ved noen av handlingene, når lovbruddene hovedsakelig skjedde før fylte 18 år", "At ungdomsstraff kan idømmes lovbrytere som var over 18 år på handlingstidspunktet, dersom modenheten tilsier at reaksjonen er egnet", "At ungdomsstraff kan kombineres med ubetinget fengselsstraff når hensynet til straffens formål taler mot gjennomføring i frihet", "At ungdomsstraff kan omgjøres til subsidiær fengselsstraff når lovbryteren bryter vilkårene i gjennomføringstiden"],
      explanation: "Annet ledd gjelder felles straff for flere lovbrudd der noen ligger etter 18-årsdagen, med to vilkår: tyngdepunktet må ligge før fylte 18 år, og de senere lovbruddene må være mindre alvorlige. Kombinasjonen med ubetinget fengsel og omgjøringsreglene står andre steder i kapittel 8 a, og ungdomsstraff for den som var over 18 år ved alle handlingene, er utelukket.",
    },
    {
      question: "Hvilken gjennomføringstid fastsetter retten i en dom på ungdomsstraff?",
      options: ["Fra 120 dager til to år, med adgang til inntil tre år når straffen ellers ville vært klart lengre", "Fra seks måneder til to år, med adgang til inntil tre år når straffen ellers ville vært klart lengre", "Fra 30 til 420 timer, med en gjennomføringstid som normalt svarer til den subsidiære fengselsstraffen", "Fra to til fem år, avhengig av hvor lang subsidiær fengselsstraff retten fastsetter i den samme dommen"],
      explanation: "Nedre grense er 120 dager etter endringen i kraft 1. september 2024; før var den seks måneder, som er nettopp den formen pensumlitteraturen fra 2020 beskriver. Timetallet fra 30 til 420 hører til samfunnsstraffen, og det finnes ingen ordning med to til fem år.",
    },
    {
      question: "Hva skjer dersom domfelte bryter vilkårene for ungdomsstraff?",
      options: ["Tingretten kan etter begjæring bestemme at hele eller deler av den subsidiære fengselsstraffen skal fullbyrdes", "Konfliktrådet kan på egen hånd beslutte at ungdommen skal settes i fengsel for resten av gjennomføringstiden", "Reaksjonen faller bort, og saken må i sin helhet behandles på nytt som en ordinær straffesak i tingretten", "Gjennomføringstiden forlenges automatisk med like lang tid som den delen som ikke er gjennomført"],
      explanation: "Bruddmekanismen er at tingretten etter begjæring kan bestemme at den subsidiære fengselsstraffen fullbyrdes, og at det tas hensyn til det som allerede er gjennomført. Konfliktrådet treffer ikke slike avgjørelser, reaksjonen faller ikke bort, og det finnes ingen regel om automatisk forlengelse.",
    },
    {
      question: "Hva er nytt om reaksjonen på vilkårsbrudd etter endringen i kraft 1. september 2024?",
      options: ["At retten kan fastsette elektronisk kontroll i stedet for å omgjøre reaksjonen til fengsel", "At retten kan forlenge gjennomføringstiden med inntil to år uten ny domstolsbehandling av saken", "At påtalemyndigheten kan omgjøre reaksjonen uten at spørsmålet forelegges for noen domstol", "At bruddet automatisk fører til at hele den subsidiære fengselsstraffen skal fullbyrdes"],
      explanation: "Adgangen til elektronisk kontroll gir et mellomtrinn mellom å la bruddet passere og å sende ungdommen i fengsel. De øvrige svarene beskriver ordninger som ikke finnes: verken automatisk forlengelse, omgjøring uten domstol eller automatisk full fullbyrding.",
    },
    {
      question: "Hva er forskjellen på ungdomsstraff og ungdomsoppfølging?",
      options: ["Ungdomsstraff er straff etter § 29 med subsidiær fengselsstraff, ungdomsoppfølging er en annen reaksjon etter § 30", "Ungdomsstraff gjennomføres i kriminalomsorgen, ungdomsoppfølging gjennomføres i konfliktrådet med ungdomsplan", "Ungdomsstraff kan bare idømmes den som er over 16 år, ungdomsoppfølging kan brukes helt ned til lavalderen", "Ungdomsstraff forutsetter samtykke fra ungdommen, ungdomsoppfølging kan ilegges uten noen form for samtykke"],
      explanation: "Skillet ligger i hjemmelen og i bruddkonsekvensen: ungdomsstraffen har en subsidiær fengselsstraff, ungdomsoppfølgingen ikke. Begge gjennomføres i konfliktrådet, så stedet skiller dem ikke. Det finnes ingen 16-årsgrense for ungdomsstraff, og samtykkekravet der er tvert imot tatt bort.",
    },
    {
      question: "Hva sier Grunnloven § 104 annet ledd om barnets beste?",
      options: ["At barnets beste skal være et grunnleggende hensyn ved handlinger og avgjørelser som berører barn", "At barnets beste skal være det avgjørende hensynet ved handlinger og avgjørelser som berører barn", "At barnets beste skal veies mot samfunnsvern bare når lovbruddet har en strafferamme over seks år", "At barnets beste skal vurderes av barnevernet, og at domstolene er bundet av barnevernets vurdering"],
      explanation: "Ordlyden er «et grunnleggende hensyn», ikke «det avgjørende hensynet» — og forskjellen er reell, fordi barnets beste kan veies mot andre hensyn som samfunnsvern. Distraktor to er den vanligste presisjonsfeilen. Ingen strafferammegrense og ingen binding til barnevernets vurdering følger av bestemmelsen.",
    },
    {
      question: "Hvilken terskel gjelder for å idømme forvaring til en lovbryter som var under 18 år på handlingstidspunktet?",
      options: ["Det kreves helt ekstraordinære omstendigheter, altså en langt høyere terskel enn den alminnelige vurderingen", "Det kreves nærliggende fare for gjentakelse, altså samme terskel som for voksne lovbrytere i alvorlige saker", "Det kreves samtykke fra lovbryteren og fra vergen, i tillegg til de alminnelige vilkårene i straffeloven § 40", "Det er utelukket i alle tilfeller, slik at ubetinget fengsel er den strengeste reaksjonen som kan idømmes"],
      explanation: "Terskelen er helt ekstraordinære omstendigheter, og maksimalrammene er dessuten lavere for denne gruppen. Den alminnelige farevurderingen holder altså ikke, samtykke er ikke noe vilkår, og forvaring er ikke utelukket — begge de avgjørelsene materialet navngir, gjaldt lovbrytere under 18 år.",
    },
    {
      question: "Hva gjaldt HR-2017-290-A?",
      options: ["En jente som begikk et drap som 15-åring, og der forvaring ble idømt med tidsramme ni år og seks års minstetid", "En gutt på 17 år som forsøkte å drepe et tilfeldig offer med et stort antall knivstikk, og der forvaring ble idømt", "En 16-åring som fikk ungdomsstraff etter at samtykkekravet i bestemmelsen var falt bort ved lovendring", "En 14-åring som ble plassert i barnevernsinstitusjon uten samtykke etter gjentatte alvorlige lovbrudd"],
      explanation: "HR-2017-290-A gjaldt en jente som begikk drap som 15-åring, med tidsramme ni år og minstetid seks år. Saken om gutten på 17 år og tre måneder med knivstikkene er HR-2019-832-A, altså den andre av de to avgjørelsene materialet navngir om forvaring av barn. De to siste svarene beskriver saker som ikke er blant dem.",
    },
    {
      question: "Hvor står i dag regelen om opphold i barnevernsinstitusjon uten samtykke ved alvorlige atferdsvansker?",
      options: ["I barnevernsloven 2021 § 6-2, som har erstattet den tidligere barnevernloven § 4-24", "I barnevernloven § 4-24, som fortsatt gjelder ved siden av den nye barnevernsloven fra 2021", "I straffeloven § 63 om tvungen omsorg, som også omfatter mindreårige lovbrytere under lavalderen", "I konfliktrådsloven kapittel IV, sammen med reglene om gjennomføring av ungdomsstraff"],
      explanation: "Bestemmelsen står i barnevernsloven 2021 § 6-2, og H2024-veiledningen nevner erstatningen uttrykkelig. Den gamle § 4-24 gjelder ikke lenger ved siden av. Tvungen omsorg er en strafferettslig særreaksjon for den høygradig psykisk utviklingshemmede, og konfliktrådsloven regulerer ungdomsstraffens gjennomføring.",
    },
    {
      question: "Hvilken av disse tingene skal IKKE ha plass når oppgaven ber om det som er særegent for unge lovbrytere?",
      options: ["En generell gjennomgang av de fire straffbarhetsvilkårene, som er de samme for voksne og barn", "Terskelen for ubetinget fengsel i straffeloven § 33, som gjelder bare for den under 18 år", "Vilkårene for ungdomsstraff i kapittel 8 a, som ikke finnes som reaksjonsspor for voksne", "Barnets beste som grunnleggende hensyn etter Grunnloven § 104 i valget av reaksjon"],
      explanation: "De fire straffbarhetsvilkårene er felles for voksne og barn, og en generell gjennomgang av dem er nettopp det H2024-veiledningen kaller lite skjønnsomt i en slik oppgave. De tre øvrige gjelder bare unge lovbrytere og er derfor kjernen i svaret.",
    },
    {
      question: "Hvilken begrunnelse for straff bærer dårligst når lovbryteren er et barn?",
      options: ["Avskrekkingskanalen, fordi den forutsetter at gjerningspersonen veier risiko mot utbytte før han handler", "Rehabiliteringssporet, fordi barn har kortere erfaring med de tiltakene reaksjonen bygger på", "Moraldanningskanalen, fordi barn i mindre grad har utviklet en oppfatning av hva som er galt", "Hensynet til fornærmede, fordi krenkelsen oppleves som mindre alvorlig når gjerningspersonen er ung"],
      explanation: "Avskrekking forutsetter en mottaker som regner på konsekvenser, og det er nettopp den forutsetningen som svikter for barn og unge. Rehabiliteringssporet bærer tvert imot best, fordi utviklingen ikke er avsluttet. Krenkelsen mot fornærmede er den samme uansett gjerningspersonens alder.",
    },
    {
      question: "Hva sier H2024-veiledningen om sammenhengende mot punktvis besvarelse av systematiseringsoppgaven?",
      options: ["At de flinkeste skriver sammenhengende og de svakeste svarer enkeltvis, men at begge deler godtas", "At bare den sammenhengende formen godtas, og at punktvise besvarelser skal vurderes i det nedre sjiktet", "At formen er uten betydning, så lenge alle underspørsmålene er besvart med riktig hjemmel", "At punktvis besvarelse er å foretrekke, fordi den gjør det lettere for sensor å finne svarene"],
      explanation: "Veiledningen sier begge deler: den sammenhengende formen kjennetegner de sterkeste besvarelsene, den punktvise de svakere — og begge godtas. Det er altså ikke likegyldig, men det er heller ikke diskvalifiserende å svare punktvis. Det nedre sjiktet er noe H2022-veiledningen sier om teorioppgaver som ikke besvarer alle delene.",
    },
    {
      question: "Hvordan står det til med bruk av forarbeider på temaet barn og straff?",
      options: ["H2024-veiledningen sier at det ikke kan forventes at studentene bruker forarbeider, fordi pensum nesten ikke henviser til dem", "H2024-veiledningen sier at bruk av forarbeider er et krav, fordi ungdomsstraffens vilkår ikke kan forstås uten dem", "H2024-veiledningen sier ingenting om forarbeider, slik at spørsmålet må avgjøres etter alminnelig rettskildelære", "H2024-veiledningen sier at forarbeider bare kan brukes dersom kandidaten oppgir side- og avsnittsnummer"],
      explanation: "Veiledningen sier uttrykkelig at bruk av forarbeider ikke kan forventes, fordi pensum nesten ikke henviser til dem. Forarbeider er derfor et plusspoeng, ikke et krav. Prop. 135 L er det navngitte forarbeidet til ungdomsstraffen, og én setning om lovgiverens formål er nok.",
    },
    {
      question: "Hvor mange terminer har prøvd temaet barn og straff, og hvilken skiller seg ut?",
      options: ["5 av 34 terminer, og H2024 skiller seg ut som materialets reneste systematiseringsoppgave", "5 av 34 terminer, og V2016 skiller seg ut som materialets eneste praktikum om barn og straff", "2 av 34 terminer, som er tallet for straffens begrunnelse og hensynene for og mot straff", "12 av 34 terminer, som er tallet for spørsmål om straffer og strafferettslige reaksjoner"],
      explanation: "Temaet er prøvd i 5 av 34 terminer, og H2024 oppgave 1 er materialets reneste systematiseringsoppgave, med fem angitte underspørsmål. Tallene 2 og 12 er ekte, men gjelder henholdsvis straffens begrunnelse og spørsmål om straffer og reaksjoner — riktige tall om noe annet.",
    },
    {
      question: "Hva skiller straffeloven § 78 bokstav i fra § 80 når lovbryteren er ung?",
      options: ["Den første er en formildende omstendighet innenfor strafferammen, den andre åpner for å gå under minstestraffen", "Den første åpner for å gå under minstestraffen, den andre er en formildende omstendighet innenfor strafferammen", "Den første gjelder valget mellom betinget og ubetinget fengsel, den andre gjelder valget av straffart", "Den første gjelder lovbrytere under 15 år, den andre gjelder lovbrytere mellom 15 og 18 år"],
      explanation: "§ 78 bokstav i trekker straffen ned innenfor rammen, mens § 80 åpner rammen nedover ved å gi adgang til å gå under minstestraffen eller over til en mildere straffart. Distraktor to bytter om på nøyaktig dette. Valget mellom betinget og ubetinget følger av § 33, og ingen av bestemmelsene gjelder barn under lavalderen.",
    },
    {
      question: "Hvorfor er det viktig å vite at ungdomsstraff er prøvd i V2016 og V2017?",
      options: ["Fordi begge terminene ligger før endringen i kraft 1. september 2024 og altså gjelder en ordning som siden er endret", "Fordi begge terminene har sensorveiledning som forklarer hvordan ungdomsstraffen skal drøftes på eksamen", "Fordi begge terminene stilte spørsmålet som praktikum, slik at oppgaveformen er kjent for temaet", "Fordi begge terminene viser at ungdomsstraff er det hyppigst prøvde temaet i hele reaksjonslæren"],
      explanation: "Poenget er tidfestingen: begge terminene ligger før lovendringen, slik at gamle sett gjelder en ordning som siden er endret. Sensorveiledning finnes bare fra og med H2020, praktikumsformen kom først samme år, og ungdomsstraff er langt fra det hyppigst prøvde temaet i reaksjonslæren.",
    },
    {
      question: "Hva er den vanligste konkrete formen for feil #14 i dette kapitlet?",
      options: ["Å skrive at ungdomsstraff krever samtykke fra lovbryteren, slik regelen lød før 1. september 2024", "Å skrive at den kriminelle lavalderen er 14 år, slik den var etter en tidligere versjon av loven", "Å skrive at forvaring aldri kan idømmes den som var under 18 år på handlingstidspunktet", "Å skrive at barnets beste er det avgjørende hensynet ved avgjørelser som berører barn"],
      explanation: "Samtykkekravet er den endringen pensumlitteraturen fra 2020 ikke kan ha med, og derfor den formen feilen oftest tar. Merk at H2024-veiledningen sier at dette må være greit nettopp av den grunn. De tre øvrige er også feil, men de er ikke utslag av utdatert pensum.",
    },
  ],
  'juroff1500-6-4': [
    {
      question: "Hva er strafferammen?",
      options: ["Den øvre grensen for straff som følger av straffebudets egen ordlyd, for eksempel fengsel inntil 6 år", "Den straffen retten faktisk fastsetter i den enkelte saken etter en konkret helhetsvurdering", "Det straffenivået rettspraksis har lagt seg på for den aktuelle typen lovbrudd over tid", "Den nedre grensen for straff som følger av straffebudets egen ordlyd, der en slik grense finnes"],
      explanation: "Strafferammen er lovgiverens øvre grense i straffebudet. Den straffen retten fastsetter, er straffutmålingen, og nivået i rettspraksis er et moment i utmålingen. Den nedre grensen kalles minstestraff, og bare et lite mindretall av bestemmelsene har en slik.",
    },
    {
      question: "Hva bestemmer strafferammen ut over hvor streng straffen kan bli?",
      options: ["Foreldelsesfristens lengde, adgangen til å forhøye rammen, og ofte hvilke tvangsmidler politiet kan bruke", "Hvilken domstol som skal behandle saken, og om saken skal gå med meddommere eller med fagdommer alene", "Hvilken reaksjonstype retten må velge, slik at fengsel er utelukket under en bestemt rammegrense", "Om lovbruddet skal regnes som et handlingsdelikt eller som et følgedelikt i gjerningsbeskrivelsen"],
      explanation: "Rammen styrer foreldelsesfristen etter § 86, forhøyelsesadgangen etter § 79 og i mange tilfeller tvangsmiddelbruken. Reaksjonsvalget er ikke bundet av rammen på den måten distraktoren beskriver, og skillet mellom handlings- og følgedelikt følger av gjerningsbeskrivelsen, ikke av rammen.",
    },
    {
      question: "Hva er forskjellen på straffeloven § 78 og § 80?",
      options: ["§ 78 gir formildende omstendigheter innenfor rammen, § 80 gir adgang til å gå under minstestraffen", "§ 78 gir adgang til å gå under minstestraffen, § 80 gir formildende omstendigheter innenfor rammen", "§ 78 gjelder lovbrytere under 18 år, § 80 gjelder lovbrytere som har avgitt uforbeholden tilståelse", "§ 78 gjelder valget mellom betinget og ubetinget fengsel, § 80 gjelder valget mellom fengsel og bot"],
      explanation: "§ 78 trekker straffen ned innenfor rammen, mens § 80 åpner rammen nedover ved å gi adgang til å gå under minstestraffen eller over til en mildere straffart. Distraktor to bytter om på nøyaktig dette. Begge bestemmelsene nevner både ung alder og andre forhold, og valget mellom betinget og ubetinget følger av andre regler.",
    },
    {
      question: "Hvor mye kan fengselsstraffen forhøyes etter straffeloven § 79?",
      options: ["Inntil det dobbelte, men aldri med mer enn 6 år og aldri ut over 21 år", "Inntil det dobbelte, men aldri med mer enn 3 år og aldri ut over 15 år", "Inntil halvparten mer, men aldri med mer enn 6 år og aldri ut over 21 år", "Inntil summen av lengstestraffene i alle de straffebudene som er overtrådt"],
      explanation: "Riktig er inntil det dobbelte, med skrankene 6 år ekstra og 21 år totalt, og med en egen grense på 15 år for den som var under 18 år på handlingstidspunktet. Summen av lengstestraffene er et ytterligere tak, ikke selve beregningsmåten — og det er nettopp den forvekslingen alternativet om summen av lengstestraffene i alle de overtrådte straffebudene tester.",
    },
    {
      question: "Hva regulerer straffeloven § 79 bokstav a?",
      options: ["Forhøyet ramme når en lovbryter har begått flere lovbrudd og det skal idømmes en felles straff", "Forhøyet ramme når en tidligere straffet lovbryter begår et nytt lovbrudd av samme art som før", "Forhøyet ramme når lovbruddet er utøvet som ledd i aktivitetene til en organisert kriminell gruppe", "Forhøyet ramme når lovbruddet har satt flere menneskers liv eller helse i alvorlig fare samtidig"],
      explanation: "Bokstav a gjelder flere lovbrudd som pådømmes samlet, med forhøyelsen regnet av lengstestraffen i det strengeste straffebudet. Gjentakelse står i bokstav b og organisert kriminalitet i bokstav c. At lovbruddet har satt liv eller helse i fare, er et skjerpende moment etter § 77 og hever ikke rammen.",
    },
    {
      question: "Hva foreligger når én handling overtrer flere straffebud?",
      options: ["Idealkonkurrens, som er den formen der antallet straffebud er større enn antallet handlinger", "Realkonkurrens, som er den formen der antallet straffebud er større enn antallet handlinger", "Gjentakelse, som gir adgang til forhøyet strafferamme etter straffeloven § 79 bokstav b", "Fortsatt straffbart forhold, slik at foreldelsesfristen løper fra det siste delforholdet"],
      explanation: "Én handling som overtrer flere straffebud, er idealkonkurrens. Realkonkurrens forutsetter flere handlinger. Gjentakelse gjelder et nytt lovbrudd etter en tidligere straff, og spørsmålet om når fristen løper, er et annet spørsmål enn konkurrensformen.",
    },
    {
      question: "Ida bryter seg inn i tre butikker på tre netter. Hvilken konkurrensform er dette?",
      options: ["Realkonkurrens, fordi det er tre handlinger, selv om alle rammes av det samme straffebudet", "Idealkonkurrens, fordi alle tre forholdene rammes av ett og det samme straffebudet i loven", "Ingen konkurrens, fordi forholdene rammes av samme straffebud og derfor utgjør ett forhold", "Realkonkurrens, men bare dersom de tre innbruddene rammes av tre forskjellige straffebud"],
      explanation: "Det er antallet handlinger som avgjør, ikke antallet straffebud, og tre innbrudd er tre handlinger. At de rammes av samme bestemmelse, endrer ingenting. Å telle straffebud i stedet for handlinger er den vanligste feilen på dette temaet, og de tre distraktorene bygger alle på den.",
    },
    {
      question: "Tre lovbrudd med hver sin ramme på fengsel inntil 2 år pådømmes samlet. Hvilken forhøyet ramme gjelder?",
      options: ["Fengsel inntil 4 år, fordi forhøyelsen regnes av lengstestraffen i det strengeste straffebudet", "Fengsel inntil 6 år, fordi rammen ved flere lovbrudd blir summen av lengstestraffene i dem", "Fengsel inntil 8 år, fordi forhøyelsen kan legges til summen av de tre rammene i saken", "Fengsel inntil 2 år, fordi forhøyelse bare er mulig når lovbruddene rammes av ulike straffebud"],
      explanation: "Strengeste ramme er 2 år, doblingen gir 4 år, og verken seksårsgrensen eller 21-årsgrensen er til hinder. Summen av lengstestraffene, altså 6 år, er bare et tak og ikke beregningsmåten. Forhøyelse forutsetter ikke ulike straffebud, bare flere lovbrudd.",
    },
    {
      question: "Hva er felles straff?",
      options: ["Én samlet straff for flere lovbrudd som pådømmes i samme sak, fastsatt med utgangspunkt i det alvorligste", "Summen av de straffene hvert av forholdene ville fått dersom de var pådømt hver for seg", "Den straffen som ilegges flere gjerningspersoner i fellesskap når de har handlet sammen", "Den straffen som fastsettes når både fengsel og bot ilegges for det samme lovbruddet"],
      explanation: "Felles straff er én samlet straff for flere forhold i samme dom, med utgangspunkt i det alvorligste og et påslag for de øvrige som normalt er mindre enn deres selvstendige verdi. Ren addisjon strider mot forholdsmessighetsregelen i § 29. Flere gjerningspersoner får hver sin straff, og kombinasjon av straffarter er noe annet.",
    },
    {
      question: "Hva sier straffeloven § 85 om foreldelse?",
      options: ["At en handling ikke kan straffes når foreldelse er inntrådt etter de påfølgende bestemmelsene", "At en handling ikke er rettsstridig når foreldelse er inntrådt etter de påfølgende bestemmelsene", "At retten kan la være å straffe en handling når det har gått lang tid siden den ble begått", "At påtalemyndigheten kan innstille forfølgningen når saken har ligget ubehandlet i lang tid"],
      explanation: "Bestemmelsen sier at handlingen ikke kan straffes når foreldelse er inntrådt — altså at ansvaret faller bort. Handlingen forblir rettsstridig, og det er nettopp derfor foreldelse er straffbortfall og ikke straffrihet. Verken en skjønnsmessig adgang for retten eller en påtaleregel er innholdet i § 85.",
    },
    {
      question: "Hvilken foreldelsesfrist gjelder for et lovbrudd med strafferamme fengsel inntil 5 år?",
      options: ["10 år, fordi rammen er høyere enn 3 år, og fristen på 5 år gjelder ramme inntil 3 år", "5 år, fordi fristen tilsvarer strafferammen når rammen er angitt i hele antall år", "15 år, fordi rammen er høyere enn 3 år, og neste trinn i bestemmelsen er femtenårsfristen", "2 år, fordi bestemmelsen bare skiller mellom lovbrudd med og uten mulighet for bot"],
      explanation: "Trinnene i § 86 er inntil 1 år, inntil 3 år, inntil 10 år, inntil 15 år og inntil 21 år. En ramme på 5 år ligger over 3 år og faller derfor i tiårstrinnet. At fristen skulle tilsvare rammens tall, er den vanligste regnefeilen på dette temaet, og trinnet på 15 år gjelder først når rammen er høyere enn 10 år.",
    },
    {
      question: "Fra hvilket tidspunkt løper foreldelsesfristen?",
      options: ["Fra den dagen det straffbare forholdet opphørte, med særregel for enkelte lovbrudd mot barn", "Fra den dagen det straffbare forholdet begynte, uansett hvor lenge det senere varte", "Fra den dagen forholdet ble anmeldt til politiet av fornærmede eller av en annen person", "Fra den dagen påtalemyndigheten besluttet å iverksette etterforskning i den aktuelle saken"],
      explanation: "Fristen regnes fra den dagen forholdet opphørte, jf. § 87, og for enkelte lovbrudd mot barn tidligst fra fornærmede fyller 18 år. Ved et forhold som strekker seg over år, er startdagen altså den siste, ikke den første. Verken anmeldelse eller etterforskningsstart er utgangspunktet.",
    },
    {
      question: "Hva avbryter foreldelsesfristen?",
      options: ["At den mistenkte får stilling som siktet i saken, jf. straffeloven § 88", "At forholdet blir anmeldt til politiet av fornærmede eller av en annen person", "At politiet iverksetter etterforskning og innhenter de første forklaringene i saken", "At påtalemyndigheten tar ut tiltale og saken berammes for behandling i tingretten"],
      explanation: "Avbrytelsen skjer ved siktelsen, og den mister virkning dersom forfølgningen innstilles uten omgjøring. Anmeldelse og etterforskningsstart avbryter ikke, og tiltale kommer senere enn siktelsen. Grunnen til at siktelsen er skjæringspunktet, er at forfølgningen da formelt retter seg mot en bestemt person.",
    },
    {
      question: "Hvilken kategori i tredelingen hører foreldelse til?",
      options: ["Straffbortfallsgrunn, fordi et straffansvar som først oppsto, faller bort på grunn av tiden", "Straffrihetsgrunn, fordi handlingen etter fristens utløp må anses som lovlig og ikke rettsstridig", "Straffritaksgrunn, fordi retten kan la være å straffe når det har gått tilstrekkelig lang tid", "Objektivt straffbarhetsvilkår, fordi ansvaret forutsetter at fristen ikke er utløpt på domstidspunktet"],
      explanation: "Foreldelse er straffbortfall: handlingen var straffbar, ansvaret oppsto, og tiden fjerner det i ettertid. En straffrihetsgrunn ville gjort handlingen lovlig fra begynnelsen, og en straffritaksgrunn ville gitt retten et valg. Å plassere foreldelse som straffrihetsgrunn er feil #4 og velter systematikken fra tredelingen.",
    },
    {
      question: "Hvilket hensyn bak foreldelsesreglene gjelder den mistenktes situasjon?",
      options: ["At det er en belastning i seg selv å leve på ubestemt tid med risikoen for straffeforfølgning", "At vitner glemmer og spor forsvinner, slik at risikoen for uriktige domfellelser øker med tiden", "At både allmenn- og individualprevensjonen svekkes når forholdet ligger langt tilbake i tid", "At påtalemyndighetens begrensede kapasitet bør rettes mot de sakene som er ferskest"],
      explanation: "Hensynet til den mistenkte handler om belastningen ved å leve i uvisshet. De tre øvrige er også ekte hensyn bak reglene, men de gjelder henholdsvis bevissituasjonen, det reduserte straffebehovet og ressursbruken.",
    },
    {
      question: "Hva er det sterkeste motargumentet mot foreldelse ved svært alvorlige lovbrudd?",
      options: ["At gjengjeldelses- og rettferdighetshensynene ikke svekkes av at det går tid, og at hensynet til fornærmede står ved lag", "At prevensjonsvirkningen av en dom blir sterkere jo lengre tid som har gått siden lovbruddet ble begått", "At bevisene i alvorlige saker alltid er tekniske og derfor ikke svekkes av tidens gang i det hele tatt", "At påtalemyndigheten har ubegrenset kapasitet i saker som gjelder de mest alvorlige lovbruddene"],
      explanation: "Motargumentet henter kraft fra gjengjeldelsesfamilien: det et grovt overgrep fortjener, endres ikke av tiden, og fornærmedes interesse består. Prevensjonsvirkningen blir tvert imot svakere med tiden, ikke sterkere, og påstandene om at bevis aldri svekkes og at kapasiteten er ubegrenset, er begge for sterke til å bære.",
    },
    {
      question: "Hvordan er de fire terminene som har prøvd konkurrens, fordelt på semester?",
      options: ["Alle fire er høstterminer, nemlig H2009, H2012, H2017 og H2018", "Alle fire er vårterminer, nemlig V2009, V2012, V2017 og V2018", "To er vår- og to er høstterminer, jevnt fordelt over hele perioden", "Tre er høst- og én er vårtermin, med den siste forekomsten i V2019"],
      explanation: "Alle fire forekomstene av konkurrens er høstterminer: H2009, H2012, H2017 og H2018. Merk likevel at et sesongmønster på fire forekomster ikke er sterkt nok til å bære en prognose, og at det fra og med H2020 uansett bare finnes høstterminer.",
    },
    {
      question: "Hva ber H2017 og H2018 begge om når det gjelder konkurrens?",
      options: ["Forskjellen på ideal- og realkonkurrens, altså i sammenlikningsform, og begge ber uttrykkelig om eksempel", "En analyse av et konkret straffebud etter femtrinnsmetoden, med konkurrensspørsmålet som femte trinn", "En praktikumsoppgave der flere lovbrudd skal subsumeres og strafferammen deretter beregnes", "En drøftelse av om reglene om felles straff er forenlige med prinsippet om forholdsmessighet"],
      explanation: "Begge terminene ber om forskjellen på de to konkurrensformene i sammenlikningsform, og begge ber uttrykkelig om eksempel — derfor er et svar uten eget eksempel ufullstendig. Verken lovanalyse, praktikum eller en ren rettspolitisk drøftelse er formen på disse spørsmålene.",
    },
    {
      question: "Hva spurte H2011 om, og hvorfor er det verdt å merke seg i dag?",
      options: ["Om strafferammen i 1902 § 233 første ledd, altså i den gamle drapsbestemmelsen som i dag er straffeloven § 275, og som derfor ikke finnes i gjeldende lov", "Om strafferammen i straffeloven § 275 slik den lyder i dag, og spørsmålet kan derfor besvares direkte ved oppslag i Lovdata", "Om forskjellen mellom ideal- og realkonkurrens, og spørsmålet er derfor det eldste i materialet om det temaet", "Om foreldelsesfristen for drap, og spørsmålet viser at fristen beregnes av rammen og ikke av forventet straff"],
      explanation: "H2011 spurte om strafferammen i den gamle drapsbestemmelsen fra 1902, som i gjeldende rett er § 275. Poenget er at et rent oppslagsspørsmål blir umulig å besvare ved oppslag i dag, fordi paragrafnummeret ikke finnes i Lovdata. Konkurrens og foreldelse ble prøvd i andre terminer.",
    },
    {
      question: "Hvilken av disse er en formildende omstendighet etter straffeloven § 78?",
      options: ["At lovbruddet i betydelig grad er foranlediget av den skadelidtes eget forhold i situasjonen", "At lovbruddet er begått i nærvær av et barn under 15 år som var til stede under handlingen", "At lovbruddet er utøvet som ledd i aktivitetene til en organisert kriminell gruppe over tid", "At lovbryteren tidligere er ilagt straff for et likeartet lovbrudd innenfor de siste seks årene"],
      explanation: "At lovbruddet er foranlediget av skadelidtes forhold, er formildende etter § 78, og bestemmelsen er dermed en slektning av provokasjonsreglene. De tre øvrige virker i motsatt retning: de to første som skjerpende momenter etter § 77, og gjentakelsen dessuten som grunnlag for forhøyet ramme etter § 79 bokstav b.",
    },
  ],
  'juroff1500-7-1': [
    {
      question: "Hva er de fem trinnene i femtrinnsmetoden, i riktig rekkefølge?",
      options: ["Gjerningsperson, objektive vilkår, det sentrale substantivet, det sentrale verbet, skyldkravet", "Skyldkravet, gjerningsperson, objektive vilkår, det sentrale substantivet, det sentrale verbet", "Problemstilling, hjemmel, tolkning av vilkåret, subsumsjon under faktum, konklusjon på spørsmålet", "Ordlyd, forarbeider, rettspraksis, reelle hensyn, konklusjon på tolkningsspørsmålet i saken"],
      explanation: "Rekkefølgen er gjerningsperson, objektive vilkår, substantiv, verb, skyldkrav — og skyldkravet kommer sist fordi det må knyttes til vilkårene som er funnet før. Rekkefølgen problemstilling, hjemmel, tolkning av vilkåret, subsumsjon og konklusjon er praktikumsmetoden, som forutsetter et faktum, og rekkefølgen ordlyd, forarbeider, rettspraksis og reelle hensyn er en rettskildeliste, ikke en analysestruktur.",
    },
    {
      question: "Hva skiller lovanalyseoppgaven fra praktikumsoppgaven?",
      options: ["I lovanalysen finnes det ikke noe faktum, og arbeidet er å tolke bestemmelsen i stedet for å subsumere", "I lovanalysen finnes det et faktum, men det er kortere enn i praktikum og har færre navngitte parter", "I lovanalysen skal konklusjonen alltid være riktig, mens riktig konklusjon ikke kreves i praktikum", "I lovanalysen skal bare de objektive vilkårene behandles, mens praktikum også omfatter skyldkravet"],
      explanation: "Kjerneforskjellen er at lovanalysen ikke har noe faktum: du tolker bestemmelsen og subsumerer ikke. Å konstruere et faktum er sjangerfeilen her. Riktig konklusjon kreves ikke i noen av sjangrene, og skyldkravet er nettopp femte trinn i lovanalysen.",
    },
    {
      question: "Hvorfor kommer skyldkravet sist i femtrinnsmetoden?",
      options: ["Fordi dekningsprinsippet krever at skylden dekker de objektive vilkårene, som må være funnet først", "Fordi skyldkravet er det minst viktige trinnet og derfor kan behandles kort til slutt i analysen", "Fordi skyldevnen må vurderes før skyldkravet, og skyldevnen hører til det fjerde trinnet i metoden", "Fordi skyldkravet alltid er forsett, slik at trinnet kan skrives på én linje uansett bestemmelse"],
      explanation: "Dekningsprinsippet krever at forsettet treffer hvert enkelt objektivt vilkår, og listen over vilkår produseres i trinn 2 til 4. Trinnet er ikke uviktig, skyldevne er et eget straffbarhetsvilkår som ikke hører hjemme i lovanalysen, og skyldkravet er ikke alltid forsett — noen bestemmelser rammer også uaktsomhet.",
    },
    {
      question: "Hvilke vilkår stiller straffeloven § 321?",
      options: ["En gjenstand som tilhører en annen, som tas, med forsett om uberettiget vinning ved tilegnelse", "En gjenstand som tilhører en annen, som tas ved vold eller trusler, med forsett om uberettiget vinning", "En gjenstand av betydelig verdi som tilhører en annen, som tas ved innbrudd i bolig eller fritidshus", "En gjenstand som tilhører en annen, som tas, med den følge at eieren lider et økonomisk tap"],
      explanation: "Vilkårene er gjenstand, at den tilhører en annen, at den tas, og forsett om uberettiget vinning ved å selge, forbruke eller på annen måte tilegne seg den. Vold og trusler hører til ran etter § 327, betydelig verdi og innbrudd er grovhetsmomenter i § 322, og noen følge kreves ikke — tyveri er et handlingsdelikt.",
    },
    {
      question: "Hvilke av vilkårene i straffeloven § 321 er subjektive?",
      options: ["Forsettet om uberettiget vinning og kravet om tilegnelse ved salg, forbruk eller på annen måte", "Kravet om at det må foreligge en gjenstand og kravet om at den må tilhøre en annen person", "Kravet om at gjenstanden må tas og kravet om at den må tilhøre en annen enn gjerningspersonen", "Kravet om at gjenstanden må ha økonomisk verdi og kravet om at eieren må lide et tap ved det"],
      explanation: "Vinningsforsettet og tilegnelseskravet beskriver hva gjerningspersonen hadde i sinne, og er derfor subjektive — de utgjør et subjektivt overskudd ut over det alminnelige skyldkravet. Gjenstand, tilhørighet og borttaking er objektive vilkår, og verken økonomisk verdi eller tap er selvstendige vilkår i bestemmelsen.",
    },
    {
      question: "Når er tyveriet fullbyrdet?",
      options: ["Når gjenstanden er brakt ut av den berettigedes rådighet og inn i gjerningspersonens", "Når gjerningspersonen har solgt eller forbrukt gjenstanden og dermed oppnådd vinningen", "Når eieren har oppdaget tapet og forholdet er anmeldt til politiet av den berettigede", "Når gjerningspersonen har forlatt stedet med gjenstanden uten å bli oppdaget av noen"],
      explanation: "Fullbyrdelsen inntrer når rådigheten er overført; alt før det ligger i forsøksområdet. Salget eller forbruket er en del av det subjektive overskuddet og trenger aldri å skje. Verken oppdagelse, anmeldelse eller flukt fra stedet har noe med fullbyrdelsestidspunktet å gjøre.",
    },
    {
      question: "Hva er det subjektive overskuddet i tyveribestemmelsen?",
      options: ["Forsettet om å skaffe seg eller andre en uberettiget vinning ved å tilegne seg gjenstanden", "Forsettet om å ta gjenstanden ut av den berettigedes rådighet på handlingstidspunktet", "Forsettet om at gjenstanden tilhører en annen enn gjerningspersonen selv på det tidspunktet", "Forsettet om at gjenstanden har en økonomisk verdi som overstiger et bagatellmessig beløp"],
      explanation: "Vinningsforsettet er et krav om en bestemt hensikt ut over forsettet om selve handlingen, og det er dette som skiller tyveriet fra midlertidig bruk av andres ting. Forsett om borttakingen og om tilhørigheten følger av det alminnelige dekningsprinsippet, og noe verdikrav stiller bestemmelsen ikke.",
    },
    {
      question: "Hva skiller straffeloven § 322 fra § 321?",
      options: ["Samme gjerningsbeskrivelse, men med en grovhetsvurdering og en ramme på fengsel inntil 6 år", "En annen gjerningsbeskrivelse, der borttakingen må ha skjedd ved vold eller ved trusler", "Samme gjerningsbeskrivelse, men med uaktsomhet som tilstrekkelig skyldform i annet ledd", "En annen gjerningsbeskrivelse, der gjenstanden må ha vært i gjerningspersonens besittelse"],
      explanation: "Grovt tyveri har samme gjerningsbeskrivelse som § 321, med en grovhetsvurdering lagt oppå og en tredoblet strafferamme. Vold og trusler hører til ran, uaktsomhet er ikke tilstrekkelig i noen av tyveribestemmelsene, og en gjenstand man allerede har lovlig i sin besittelse, kan ikke tas.",
    },
    {
      question: "Hvordan skal momentene i grovhetsvurderingen i § 322 behandles?",
      options: ["De veies mot hverandre, og ingen av dem er alene avgjørende for om tyveriet er grovt", "De er kumulative vilkår, slik at alle må være oppfylt før tyveriet kan regnes som grovt", "De er alternative vilkår, slik at ett oppfylt moment alltid gjør tyveriet grovt uten videre", "De er utmålingsmomenter og har ingen betydning for hvilken bestemmelse som skal anvendes"],
      explanation: "Momentene veies, og ordet «særlig» viser at listen ikke er uttømmende. Å behandle dem som kumulative vilkår krever for mye, og å behandle dem som alternative vilkår krever for lite. De avgjør nettopp hvilken bestemmelse som brukes, i motsetning til de skjerpende omstendighetene i § 77, som gjelder utmålingen.",
    },
    {
      question: "Hvilket av disse er et moment i grovhetsvurderingen etter straffeloven § 322?",
      options: ["At tyveriet er skjedd ved innbrudd i en bolig eller i et fritidshus som tilhører en annen", "At gjerningspersonen tidligere er straffet for et likeartet forhold innenfor de siste seks årene", "At lovbruddet er begått i nærvær av et barn under 15 år som var til stede under handlingen", "At gjerningspersonen var under 18 år på handlingstidspunktet og derfor har redusert skyld"],
      explanation: "Innbrudd i bolig eller fritidshus er uttrykkelig nevnt som grovhetsmoment. Gjentakelse hører til forhøyet ramme etter § 79, barns nærvær er et skjerpende moment i utmålingen etter § 77, og lav alder er en formildende omstendighet etter § 78 — alle tre gjelder andre spørsmål enn grovheten.",
    },
    {
      question: "Hva het tyveribestemmelsen i straffeloven av 1902, og hva heter den i dag?",
      options: ["1902 § 257, som i dag er straffeloven § 321 om tyveri", "1902 § 228, som i dag er straffeloven § 271 om kroppskrenkelse", "1902 § 233, som i dag er straffeloven § 275 om drap", "1902 § 162, som i dag er straffeloven § 231 om narkotikaovertredelse"],
      explanation: "Tyveribestemmelsen var 1902 § 257 og er i dag straffeloven § 321. De tre øvrige parene er også korrekte oversettelser, men de gjelder henholdsvis kroppskrenkelse, drap og narkotikaovertredelse — de er nettopp de andre gamle numrene du vil møte i settene fra før 2015.",
    },
    {
      question: "Hva er notasjonsregelen for paragrafnumre fra straffeloven av 1902?",
      options: ["Årstallet, det gamle nummeret og det gjeldende nummeret skal stå sammen, aldri det gamle nummeret alene", "Det gamle nummeret skal brukes alene når oppgaven er hentet fra et sett skrevet før lovendringen", "Det gamle nummeret skal utelates helt, slik at bare det gjeldende nummeret nevnes i besvarelsen", "Det gamle nummeret skal brukes i besvarelsens innledning og det gjeldende i konklusjonen til slutt"],
      explanation: "Regelen er at årstallet, det gamle og det gjeldende nummeret står sammen. Å bruke det gamle nummeret alene er feil #14, og fra H2026 er det dyrere enn før, fordi eksamen har Lovdata Pro og krav om korrekte kildehenvisninger. Å utelate det gamle nummeret helt er derimot ikke nødvendig — det er en opplysning som viser oversikt.",
    },
    {
      question: "Hva er sjangerfeilen i lovanalyseoppgaven?",
      options: ["Å konstruere et faktum med navngitte personer og deretter subsumere under vilkårene", "Å bruke korte randtilfeller for å vise hvor grensen for et vilkår går i tvilstilfeller", "Å bruke femtrinnsmetodens overskrifter som disposisjon i stedet for løpende tekst", "Å nevne strafferammen i bestemmelsen når oppgaven bare ber om vilkårene som stilles"],
      explanation: "Sjangerfeilen er å dikte opp et faktum og gå over til subsumsjon, fordi oppgaven ba om tolkning. Korte randtilfeller er derimot ønsket, fordi de belyser vilkårets rekkevidde, og både trinnoverskrifter og strafferammen hører naturlig hjemme i en analyse.",
    },
    {
      question: "Hva skiller en parafrase fra en tolkning av et vilkår?",
      options: ["Tolkningen sier noe om rekkevidden, altså hva som faller innenfor og utenfor og hvorfor grensen går der", "Tolkningen bruker flere ord enn ordlyden gjør, slik at innholdet blir tydeligere for leseren", "Tolkningen bygger alltid på en navngitt avgjørelse fra Høyesterett om det aktuelle vilkåret", "Tolkningen konkluderer med om vilkåret er oppfylt i den saken oppgaven gjelder eller ikke"],
      explanation: "Tolkningen sier noe om grensen — hva som er innenfor, hva som er utenfor, og hvorfor. Å bruke flere ord er ikke det samme som å tolke, rettspraksis er ikke tilgjengelig for alle vilkår, og å konkludere om oppfyllelse er subsumsjon og hører til praktikum.",
    },
    {
      question: "Hva er kontrollspørsmålet som viser hva et vilkår gjør?",
      options: ["Hva ville falt utenfor bestemmelsen dersom akkurat dette vilkåret ble strøket?", "Hvilken strafferamme ville gjeldt dersom akkurat dette vilkåret ble strøket?", "Hvilken domstol ville behandlet saken dersom akkurat dette vilkåret ble strøket?", "Hvilken skyldform ville vært tilstrekkelig dersom akkurat dette vilkåret ble strøket?"],
      explanation: "Spørsmålet om hva som ville falt utenfor, avslører hva vilkåret er til for, og gir en tolkning ingen kan parafrasere seg fram til. De tre øvrige spørsmålene gjelder konsekvenser som ikke belyser vilkårets funksjon i gjerningsbeskrivelsen.",
    },
    {
      question: "Hva er utgangspunktet for skyldkravet når et straffebud ikke sier noe om skyld?",
      options: ["Kravet er forsett, fordi straffelovgivningen bare rammer forsettlige lovbrudd med mindre annet er bestemt", "Kravet er uaktsomhet, fordi den mildeste skyldformen legges til grunn når loven ikke sier noe annet", "Kravet er grov uaktsomhet, som er den formen som ligger mellom forsett og simpel uaktsomhet", "Kravet avgjøres av strafferammen, slik at bestemmelser med lav ramme rammer uaktsomme overtredelser"],
      explanation: "Utgangspunktet er forsett når loven ikke sier noe annet. Uaktsomhet må altså være uttrykkelig bestemt, typisk i et eget ledd, og strafferammen avgjør ikke skyldformen — den kan derimot være et argument i tolkningen av andre vilkår.",
    },
    {
      question: "Hvor mange terminer har prøvd tyveri, og hvordan fordeler analyseoppgaven seg?",
      options: ["9 av 34 terminer, med analyseoppgaven i 6 terminer i 1902-form og 2 i gjeldende form, mens H2021 tester tyveri i praktikumsform", "9 av 34 terminer, med analyseoppgaven i 2 terminer i 1902-form og 6 i gjeldende form, mens H2021 tester tyveri i praktikumsform", "6 av 34 terminer, alle med analyseoppgaven i gjeldende form, siden formen først ble tatt i bruk etter 2015", "13 av 34 terminer, som er tallet for hvor mange terminer som har gitt en navngitt bestemmelse som analyseobjekt"],
      explanation: "Tyveri er prøvd i 9 av 34 terminer, og analyseoppgaven fordeler seg på seks terminer i 1902-form og to i gjeldende form, mens H2021 tester temaet som praktikum. Distraktor to bytter om på de to tallene. Tallet 13 er ekte, men gjelder alle terminer med en navngitt bestemmelse som analyseobjekt, uansett straffebud.",
    },
    {
      question: "Hvorfor er det verdt å si i trinn 4 når handlingen er fullbyrdet?",
      options: ["Fordi fullbyrdelsestidspunktet samtidig markerer forsøkets øvre grense og kobler analysen til forsøkslæren", "Fordi fullbyrdelsestidspunktet avgjør hvilken domstol som er stedlig kompetent til å behandle saken", "Fordi fullbyrdelsestidspunktet bestemmer hvilken strafferamme som gjelder for den aktuelle handlingen", "Fordi fullbyrdelsestidspunktet avgjør om gjerningspersonen kan tre tilbake fra forsøket med straffrihet"],
      explanation: "Å plassere fullbyrdelsen er samtidig å plassere forsøkets øvre grense, og det er en kobling få kandidater skriver ut. Verken domstolens stedlige kompetanse eller strafferammen avhenger av tidspunktet, og spørsmålet om tilbaketreden er et eget vilkårsspørsmål i forsøkslæren.",
    },
    {
      question: "Hva er den riktige rekkefølgen når du tolker et vilkår?",
      options: ["Ordlyden først, deretter formålet bak bestemmelsen, og til slutt rettspraksis der den finnes", "Rettspraksis først, deretter ordlyden, og til slutt formålet bak den aktuelle bestemmelsen", "Formålet først, deretter rettspraksis, og til slutt ordlyden som en kontroll av resultatet", "Reelle hensyn først, deretter ordlyden, og til slutt en vurdering av hva som virker rimeligst"],
      explanation: "Ordlyden er utgangspunktet, og i strafferetten dessuten en skranke gjennom legalitetsprinsippet. Deretter kommer formålet, og til slutt rettspraksis der den finnes. Å begynne et annet sted enn i ordlyden snur rettskildelæren på hodet, og rimelighet i seg selv er ikke et tolkningsargument.",
    },
    {
      question: "Hvorfor skal analysen gjøres på gjeldende lovtekst selv når du trener på et gammelt sett?",
      options: ["Fordi den gamle bestemmelsen ikke finnes i Lovdata i dag, og fordi vilkårene kan være endret ved videreføringen", "Fordi gamle oppgavesett ikke er egnet til trening og derfor bør unngås når man forbereder seg", "Fordi sensorveiledningene fra de gamle terminene krever at kandidatene bruker gjeldende nummerering", "Fordi den gamle loven fortsatt gjelder for handlinger begått før 2015 og derfor må holdes atskilt"],
      explanation: "To grunner bærer regelen: nummeret finnes ikke i dagens lov, og vilkårene er ikke alltid videreført uendret. Gamle sett er tvert imot godt treningsmateriale, det finnes ingen sensorveiledning fra terminene før H2020, og virkeområdet i tid er et eget spørsmål som ikke endrer hvilken bestemmelse du skal analysere i en øvingsoppgave.",
    },
    {
      question: "Hva bør avgjøre hvor tyngdepunktet i en lovanalyse legges?",
      options: ["Hvilket vilkår som ville vært omtvistet i en virkelig sak, altså der ordlyden er mest åpen", "Hvilket vilkår som står først i gjerningsbeskrivelsen, siden rekkefølgen viser lovgiverens prioritet", "Hvilket trinn i metoden som har flest underpunkter i den disposisjonen du har satt opp", "Hvilket vilkår som er lettest å skrive mye om, slik at besvarelsen blir tilstrekkelig lang"],
      explanation: "Tyngdepunktet skal ligge der tvilen er, altså der ordlyden er mest åpen og en forsvarer ville angrepet. En analyse som gir like mye plass til alle fem trinnene, har fylt ut et skjema i stedet for å lese bestemmelsen. Verken rekkefølge i teksten eller lengde er relevante kriterier.",
    },
    {
      question: "Hva er feil #5 i dette kapitlets sammenheng?",
      options: ["Å stoppe ved å parafrasere ordlyden i stedet for å tolke vilkårene og si hvor grensene går", "Å bruke feil straffelov ved å analysere en bestemmelse fra 1902-loven som gjeldende rett", "Å oppgi en avgjørelse man ikke har lest, for å styrke tolkningen av et sentralt vilkår", "Å svare på færre delspørsmål enn oppgaven krever, slik at analysen blir ufullstendig"],
      explanation: "Feil #5 er å stoppe ved den ytre klassifiseringen — her å gjenta ordlyden uten å tolke. Å bruke feil straffelov er feil #14, å oppgi kilder man ikke har er feil #15, og å svare på færre spørsmål enn settet krever er feil #16. Alle fire er relevante i dette kapitlet, men bare den første er #5.",
    },
  ],
  'juroff1500-7-2': [
    {
      question: "Hva rammer straffeloven § 271 om kroppskrenkelse?",
      options: ["Den som øver vold mot en annen person, eller som på annen måte krenker denne fysisk", "Den som skader en annens kropp eller helse, eller som volder en varig skade på kroppen", "Den som gjentatt eller alvorlig mishandler noen han lever sammen med i en nær relasjon", "Den som truer en annen med en straffbar handling på en måte som er egnet til å skape frykt"],
      explanation: "Bestemmelsen har to sidestilte alternativer: å øve vold, og på annen måte å krenke noen fysisk. Å skade kroppen eller helsen hører til § 273 om kroppsskade, mishandling i en nær relasjon til § 282, og trusler til en helt annen bestemmelse.",
    },
    {
      question: "Hva avgjør skillet mellom kroppskrenkelse og kroppsskade?",
      options: ["Følgen — kroppsskaden krever at det faktisk er voldt en skade på kroppen eller helsen", "Kraften — kroppsskaden krever at det er brukt vesentlig mer kraft enn ved en krenkelse", "Motivet — kroppsskaden krever at gjerningspersonen handlet med hensikt om å skade noen", "Redskapet — kroppsskaden krever at det er brukt et redskap og ikke bare hendene alene"],
      explanation: "Grensen mellom § 271 og § 273 går på følgen, ikke på handlingen: en lett dytt som gir hjernerystelse er kroppsskade, mens et hardt slag uten følger blir stående som krenkelse. Kraft, motiv og redskap kan ha betydning for grovhetsvurderingen, men de avgjør ikke skillet.",
    },
    {
      question: "Hvilke tre momenter avgjør hvor den nedre grensen for vold går?",
      options: ["Kraftanvendelsens styrke, karakteren av berøringen og konteksten handlingen skjedde i", "Kraftanvendelsens styrke, skadens omfang og den fornærmedes egen opplevelse av krenkelsen", "Gjerningspersonens motiv, den fornærmedes alder og hvor lang tid handlingen varte i alt", "Handlingens offentlighet, partenes innbyrdes relasjon og om det ble brukt et redskap"],
      explanation: "De tre momentene er kraftanvendelsens styrke, karakteren av berøringen og konteksten, og de veies mot hverandre. Skadens omfang hører til skillet mot § 273, mens motiv, alder og redskap først og fremst er utmålings- eller grovhetsmomenter.",
    },
    {
      question: "Hvordan skal de tre momentene i vurderingen av den nedre grensen for vold brukes?",
      options: ["De veies mot hverandre, og ingen av dem er alene avgjørende for hvor grensen skal gå", "De er kumulative vilkår, slik at alle tre må være oppfylt før det foreligger vold", "De brukes i rekkefølge, slik at de to siste bare prøves om det første ikke er oppfylt", "De er alternative vilkår, slik at ett av dem er nok uansett hvordan de to andre slår ut"],
      explanation: "Momentene er momenter og ikke vilkår: de veies mot hverandre, og et grensetilfelle løses ved å si hvilket som veier tyngst. Å behandle dem som kumulative vilkår krever for mye, og å behandle dem som rene alternativer krever for lite.",
    },
    {
      question: "Hvorfor er det å spytte noen i ansiktet en overtredelse av straffeloven § 271?",
      options: ["Fordi det er en fysisk krenkelse etter det andre alternativet, selv om kraften er null", "Fordi enhver berøring av en annens ansikt er vold uansett hvor liten kraft som brukes", "Fordi handlingen er sterkt krenkende, og krenkende hensikt alene oppfyller voldsvilkåret", "Fordi spytt kan overføre smitte, slik at handlingen anses som en skade på den andres helse"],
      explanation: "Riktig svar er at handlingen fanges av det andre handlingsalternativet i § 271, altså å krenke noen fysisk på annen måte, og at man derfor slipper å strekke voldsbegrepet. Krenkende hensikt er ikke et selvstendig vilkår, og noen helseskade er det ikke tale om her.",
    },
    {
      question: "Hvilken betydning har konteksten når handlingen skjer under en fotballkamp?",
      options: ["Terskelen flyttes oppover for den kroppskontakten spillet normalt fører med seg", "Terskelen faller bort helt, slik at handlinger på en idrettsbane ikke kan straffes", "Terskelen flyttes nedover, fordi deltakerne har en særlig plikt til å vise hensyn", "Terskelen er uendret, fordi konteksten bare har betydning ved straffutmålingen"],
      explanation: "Konteksten flytter terskelen oppover for den kontakten aktiviteten forutsetter, men den er ingen fribillett: et slag etter kampslutt ligger utenfor rammen. Konteksten er et tolkningsmoment i vilkåret, ikke bare et utmålingsmoment.",
    },
    {
      question: "Hva er forholdet mellom straffeloven § 271 og § 272?",
      options: ["§ 272 har samme gjerningsbeskrivelse som § 271, men med en grovhetsvurdering lagt oppå", "§ 272 har en egen gjerningsbeskrivelse som stiller andre og strengere krav til handlingen", "§ 272 gjelder når det er voldt en skade, mens § 271 gjelder når ingen skade er oppstått", "§ 272 gjelder gjentatte krenkelser, mens § 271 gjelder den enkeltstående krenkelsen"],
      explanation: "Grov kroppskrenkelse har samme gjerningsbeskrivelse som § 271, og alle vilkårene der må være oppfylt før grovhetsmomentene veies. Skaden skiller § 271 fra § 273, ikke fra § 272, og gjentakelse er et kjennetegn ved mishandlingsbestemmelsen i § 282.",
    },
    {
      question: "Hvordan skal grovhetsmomentene i straffeloven § 272 behandles i en besvarelse?",
      options: ["De veies enkeltvis og samlet, og det sies hvor tungt hvert enkelt moment veier i saken", "De krysses av som en liste, og kroppskrenkelsen er grov når minst tre av dem foreligger", "De er kumulative vilkår, slik at samtlige må være oppfylt før krenkelsen kan kalles grov", "De brukes bare når strafferammen i § 271 ikke gir rom for en tilstrekkelig streng straff"],
      explanation: "Momentene skal veies enkeltvis og samlet, og ordet særlig i lovteksten viser at listen ikke er uttømmende. Å telle momenter eller kreve at alle er oppfylt, er å behandle momenter som vilkår, og å konstatere grovhet uten å prøve dem er feil nummer 5.",
    },
    {
      question: "En person dytter en annen lett, og den andre faller og får hjernerystelse. Hva er det avgjørende tilleggsspørsmålet?",
      options: ["Om forsettet også dekket selve skaden, slik dekningsprinsippet krever i et følgedelikt", "Om dyttet objektivt sett var kraftig nok til å regnes som vold etter de tre momentene", "Om den fornærmede selv medvirket til fallet ved ikke å ta seg for da hun falt bakover", "Om skaden er varig, siden bare varige skader regnes som kroppsskade etter straffeloven"],
      explanation: "Riktig svar er at forsettet må dekke følgen: uten forsett om skaden faller forholdet tilbake til kroppskrenkelse etter § 271. Skaden trenger ikke være varig, og fornærmedes egen opptreden er ikke et vilkår i gjerningsbeskrivelsen.",
    },
    {
      question: "Hvilken kategori hører straffeloven § 271 annet ledd om provokasjon og retorsjon til?",
      options: ["Straffbortfall — handlingen forblir rettsstridig og straffbar, men straffen kan falle bort", "Straffrihet — handlingen blir lovlig, på samme måte som ved nødverge etter § 18", "Straffritak — retten kan sette straffen ned under minstestraffen i bestemmelsen", "Bortfall av skyld, siden gjengjeldelsen skjer i affekt og ikke er overveid av noen"],
      explanation: "Regelen er en straffbortfallsgrunn: handlingen forblir rettsstridig og straffbar, men straffen kan falle bort. Å plassere den som straffrihetsgrunn er feil nummer 4, og den har verken med minstestraff eller med skyldevne å gjøre.",
    },
    {
      question: "Hva skiller provokasjonsalternativet fra retorsjonsalternativet i straffeloven § 271 annet ledd?",
      options: ["Provokasjonen peker bakover mot noe forutgående, mens retorsjonen gjelder gjensidige krenkelser", "Provokasjonen gjelder gjensidige krenkelser, mens retorsjonen bare gjelder forutgående ytringer", "Provokasjonen gjelder fysiske krenkelser, mens retorsjonen bare gjelder krenkelser med ord", "Provokasjonen gir straffbortfall, mens retorsjonen bare gir adgang til å sette straffen ned"],
      explanation: "Riktig svar er at provokasjonen gjelder en krenkelse som er svar på noe forutgående, mens retorsjonen gjelder at partene har krenket hverandre. Begge alternativene ligger i samme ledd og har samme virkning, nemlig at straffen kan falle bort.",
    },
    {
      question: "En mann slår tilbake to minutter etter at den andre har sluttet å slå. Hvilket spor er han i?",
      options: ["Straffbortfall etter § 271 annet ledd, siden angrepet var over da han slo tilbake", "Nødverge etter § 18, siden handlingen er et direkte svar på et forutgående angrep", "Nødrett etter § 17, siden han reddet en interesse som var truet av den andres opptreden", "Straffrihet på grunn av samtykke, siden begge to hadde innlatt seg på en slåsskamp"],
      explanation: "Nødverge forutsetter et pågående eller umiddelbart forestående angrep, og et angrep som er over, faller utenfor. Da er det § 271 annet ledd om gjengjeldelse som eventuelt kan hjelpe, mens nødrett gjelder inngrep mot uskyldige interesser.",
    },
    {
      question: "Rammer straffeloven § 271 rent psykiske krenkelser?",
      options: ["Nei, bestemmelsen krever en fysisk krenkelse, uansett hvor tung belastningen har vært", "Ja, dersom belastningen har vært så alvorlig at den kan sammenliknes med fysisk vold", "Ja, fordi ordet vold etter alminnelig språkbruk også dekker psykisk press og trakassering", "Nei, men bare når krenkelsene er enkeltstående og ikke gjentas over et lengre tidsrom"],
      explanation: "Vold i § 271 forutsetter en fysisk kraftanvendelse eller en fysisk krenkelse, og rent psykiske krenkelser faller utenfor uansett belastning og uansett gjentakelse. Å tro noe annet er feil nummer 11, og de psykiske krenkelsene må eventuelt fanges av § 282.",
    },
    {
      question: "Hvilken bestemmelse rammer rent psykiske krenkelser innenfor en nær relasjon?",
      options: ["Straffeloven § 282 om mishandling i nære relasjoner, når terskelen der er nådd", "Straffeloven § 271 om kroppskrenkelse, siden psykiske krenkelser er en form for vold", "Straffeloven § 273 om kroppsskade, siden psykisk belastning er en skade på helsen", "Straffeloven § 272 om grov kroppskrenkelse, siden psykiske krenkelser er særlig grove"],
      explanation: "Riktig svar er § 282, som også rammer rent psykiske krenkelser, men bare innenfor en avgrenset personkrets og bare når terskelen for mishandling er nådd. Bestemmelsene om kroppskrenkelse og kroppsskade krever alle en fysisk krenkelse.",
    },
    {
      question: "Hva heter bestemmelsen i 1902 § 228 i dagens straffelov?",
      options: ["Straffeloven § 271 om kroppskrenkelse, som avløste den gamle legemsfornærmelsen i loven", "Straffeloven § 273 om kroppsskade, som avløste den gamle legemsbeskadigelsen", "Straffeloven § 282 om mishandling i nære relasjoner, som avløste familievoldsregelen", "Straffeloven § 321 om tyveri, som avløste den gamle bestemmelsen om vinningslovbrudd"],
      explanation: "Legemsfornærmelse i 1902 § 228 er i dag kroppskrenkelse i straffeloven § 271. Kroppsskaden i § 273 avløste 1902 § 229, mens mishandlingsbestemmelsen og tyveribestemmelsen hadde helt andre numre i den gamle loven.",
    },
    {
      question: "Hva heter bestemmelsen i 1902 § 229 i dagens straffelov?",
      options: ["Straffeloven § 273 om kroppsskade, som avløste den gamle legemsbeskadigelsen", "Straffeloven § 271 om kroppskrenkelse, som avløste den gamle legemsfornærmelsen", "Straffeloven § 275 om drap, som avløste den gamle bestemmelsen om forsettlig drap", "Straffeloven § 274 om grov kroppsskade, som avløste regelen om grov mishandling"],
      explanation: "Legemsbeskadigelse i 1902 § 229 er i dag kroppsskade i straffeloven § 273. Kroppskrenkelsen i § 271 avløste 1902 § 228, og drapsbestemmelsen hadde et helt annet nummer i den gamle loven.",
    },
    {
      question: "En besvarelse bygger på 1902 § 228 som om bestemmelsen gjaldt i dag. Hvilken feil er det?",
      options: ["Feil nummer 14 — å bruke feil straffelov, siden bestemmelsen i dag er § 271 i loven", "Feil nummer 11 — å tro at voldsbegrepet også rommer de rent psykiske elementene", "Feil nummer 5 — å stoppe ved den ytre klassifiseringen i stedet for å subsumere", "Feil nummer 15 — å oppgi kilder man ikke har lest og ikke kan etterprøve selv"],
      explanation: "Å bygge på et paragrafnummer fra den gamle loven som om det gjaldt, er feil nummer 14. Feil nummer 11 gjelder valget mellom voldsbestemmelsen og mishandlingsbestemmelsen, feil nummer 5 gjelder manglende subsumsjon, og feil nummer 15 gjelder kildebruken.",
    },
    {
      question: "Hvor ligger tyngdepunktet i en femtrinnsanalyse av straffeloven § 271?",
      options: ["I trinn 4, fordi hele grensedragningen ligger i verbene om å øve vold og krenke fysisk", "I trinn 1, fordi bestemmelsen bare kan overtres av personer i en bestemt relasjon", "I trinn 3, fordi uttrykket en annen person er det vanskeligste vilkåret å avgrense", "I trinn 5, fordi bestemmelsen har et subjektivt overskudd som må behandles for seg"],
      explanation: "Tyngdepunktet ligger i trinn 4, som gjelder det sentrale verbet, fordi det er der ordlyden er vag og de tre momentene hører hjemme. Gjerningspersonkretsen er åpen, uttrykket en annen person er kort å avklare, og bestemmelsen har intet subjektivt overskudd.",
    },
    {
      question: "Hva er skyldkravet i straffeloven §§ 271 og 273?",
      options: ["Forsett, og i § 273 må forsettet også dekke den skaden som faktisk er voldt", "Forsett i § 271, mens § 273 også rammer den som uaktsomt volder en skade", "Uaktsomhet er nok i begge, siden begge bestemmelsene verner den fysiske integriteten", "Grov uaktsomhet i begge, siden simpel uaktsomhet ellers ville rammet dagligdagse uhell"],
      explanation: "Skyldkravet er forsett i begge, siden straffelovgivningen bare rammer forsettlige lovbrudd med mindre annet er bestemt, og dekningsprinsippet gjør at forsettet i § 273 også må omfatte følgen. At gjerningspersonen burde ha forstått at det kunne gå galt, er derfor ikke nok.",
    },
    {
      question: "Hva er strafferammen i straffeloven § 271 om kroppskrenkelse?",
      options: ["Bot eller fengsel inntil 1 år, altså den laveste strafferammen på hele voldsstigen", "Bot eller fengsel inntil 2 år, altså den samme rammen som for simpelt tyveri", "Fengsel inntil 6 år, altså den samme rammen som for kroppsskade etter § 273", "Fengsel inntil 3 år, med adgang til å idømme bot ved de mindre alvorlige forholdene"],
      explanation: "Kroppskrenkelsen har bot eller fengsel inntil 1 år og ligger nederst på stigen. Rammen på 6 år gjelder både grov kroppskrenkelse etter § 272 og kroppsskade etter § 273, og forskjellen mellom rammene er et argument i tolkningen av hvor terskelen ligger.",
    },
    {
      question: "En kandidat skriver: «Dette er vold, og forholdet rammes av § 271.» Hva mangler?",
      options: ["Momentene er ikke veid, og plasseringen på skalaen er ikke begrunnet i faktums momenter", "Hjemmelen er ikke oppgitt, siden paragrafnummeret må stå sammen med lovens navn", "Konklusjonen er for skarp, og en besvarelse bør holde begge muligheter åpne til slutt", "Skyldkravet er behandlet før de objektive vilkårene, som er feil rekkefølge i analysen"],
      explanation: "Riktig svar er at momentene ikke er veid og at plasseringen ikke er begrunnet — det er feil nummer 5, å stoppe ved den ytre klassifiseringen. Hjemmelen er oppgitt, en skarp og begrunnet konklusjon er fullt akseptabel, og skyldkravet er ikke berørt i det hele tatt.",
    },
    {
      question: "Hvilket alternativ i straffeloven § 273 rammer den som holder en annen nede så han ikke får brukt kroppen?",
      options: ["Alternativet om å gjøre en annen fysisk maktesløs, som ikke krever noen skade", "Alternativet om å skade en annens kropp eller helse, siden fastholdingen er en skade", "Alternativet om å fremkalle bevisstløshet eller liknende tilstand hos en annen person", "Ingen av alternativene, siden fastholding uten skade bare kan rammes av § 271"],
      explanation: "Riktig svar er alternativet om å gjøre en annen fysisk maktesløs, som er selvstendig og ikke krever noen skade. Skadealternativet forutsetter en skade på kropp eller helse, og bevisstløshetsalternativet forutsetter at bevisstheten faktisk går tapt.",
    },
  ],
  'juroff1500-7-3': [
    {
      question: "Hva rammer straffeloven § 282 om mishandling i nære relasjoner?",
      options: ["Alvorlig eller gjentatt mishandling av noen i den personkretsen bestemmelsen angir", "Enhver kroppskrenkelse begått mot en person gjerningspersonen bor sammen med i dag", "Enhver gjentatt krenkelse mellom voksne, uavhengig av hvilken relasjon de står i", "Alvorlig fysisk vold i et parforhold, når volden har ført til en skade på kroppen"],
      explanation: "Bestemmelsen krever at fornærmede er innenfor den angitte personkretsen, og at krenkelsene er alvorlige eller gjentatte og samlet utgjør mishandling. Den krever verken skade, samboerskap i dag eller at krenkelsene er fysiske.",
    },
    {
      question: "Hvem er innenfor personkretsen i straffeloven § 282?",
      options: ["Blant andre nåværende og tidligere ektefelle eller samboer, og noen i ens omsorg", "Bare den gjerningspersonen bor sammen med på det tidspunktet krenkelsene skjer", "Enhver som gjerningspersonen har hatt et kjæresteforhold til i løpet av de siste årene", "Bare ektefelle, samboer og egne barn, siden kretsen er uttømmende angitt i loven"],
      explanation: "Kretsen omfatter blant annet nåværende og tidligere ektefelle eller samboer, slektninger i rett opp- og nedstigende linje, noen i husstanden og noen i ens omsorg. At tidligere forhold er dekket, følger uttrykkelig av ordlyden, mens et rent kjæresteforhold uten samboerskap må vurderes mot de øvrige alternativene.",
    },
    {
      question: "Rammer straffeloven § 282 også rent psykiske krenkelser?",
      options: ["Ja, gjennom alternativet om andre krenkelser, men med en skjerpet terskel", "Nei, bestemmelsen krever minst én fysisk krenkelse i tillegg til de psykiske", "Ja, og terskelen er den samme som når krenkelsene er fysiske eller truende", "Nei, psykiske krenkelser må alltid vurderes etter bestemmelsen om trusler"],
      explanation: "Alternativet om andre krenkelser fanger også det rent psykiske, og det er nettopp dette som skiller § 282 fra § 271. Men terskelen er skjerpet: det skal en god del mer til når krenkelsene er rent psykiske.",
    },
    {
      question: "Hva betyr det at vurderingen etter straffeloven § 282 er samlet?",
      options: ["At krenkelsene vurderes under ett, ikke hendelse for hendelse hver for seg", "At alle hendelsene må ha skjedd innenfor samme sammenhengende tidsrom på ett år", "At det er nok at én av hendelsene isolert sett når opp til mishandlingsterskelen", "At retten kan se bort fra hendelser som ikke er tilstrekkelig bevist i saken"],
      explanation: "Krenkelsene vurderes under ett, slik at hendelser som isolert sett ligger under terskelen, samlet kan utgjøre mishandling. Å drøfte hver hendelse for seg og konkludere med at ingen når opp, bommer på hva bestemmelsen rammer.",
    },
    {
      question: "Hva ligger i at «mishandling» er et kvalifiserende ord?",
      options: ["At bare de mer kvalifiserte forholdene omfattes, og at gjentakelse alene ikke er nok", "At bestemmelsen bare rammer de forholdene der fornærmede har fått varige fysiske skader", "At kravet er oppfylt så snart krenkelsene har gjentatt seg over et lengre tidsrom", "At ordet bare har betydning for straffutmålingen og ikke for om vilkåret er oppfylt"],
      explanation: "Ordlyden viser at bestemmelsen bare omfatter de mer kvalifiserte forholdene, og gjentatt kritikkverdig atferd er ikke uten videre mishandling. Å begrunne vilkåret med et antall og et tidsrom er feil nummer 12, og noen skade kreves ikke.",
    },
    {
      question: "En kandidat skriver at fornærmede flyttet tilbake to ganger, og at dette taler mot at krenkelsene var alvorlige. Hva er galt?",
      options: ["Fortsatt kontakt er et typisk trekk ved slike forhold og skal ikke telle mot", "Opplysningen er uten enhver betydning, og den skulle vært utelatt fra faktum", "Utflyttingene beviser tvert imot at terskelen er nådd, og det skulle vært sagt", "Fornærmedes egne handlinger kan aldri trekkes inn i en strafferettslig vurdering"],
      explanation: "Feilen er nummer 13: følelsesmessig tilknytning og avhengighet er nettopp en del av det mønsteret bestemmelsen tar sikte på å ramme. Opplysningen beviser heller ikke det motsatte, og fornærmedes handlinger kan godt være relevante på andre måter.",
    },
    {
      question: "Hva er den metodiske lærdommen av at straffeloven § 282 ikke er realitetsendret fra 1902 § 219?",
      options: ["At rettskildene til den gamle bestemmelsen fortsatt er relevante for denne bestemmelsen", "At straffeloven av 1902 fortsatt gjelder for alle de forholdene som skjer i nære relasjoner", "At paragrafnummeret fra den gamle loven fortsatt kan brukes i en besvarelse i dag", "At avgjørelser om den gamle bestemmelsen ikke lenger har noen vekt overhodet"],
      explanation: "Fordi bestemmelsen er videreført uten realitetsendring ut over strafferammen, har eldre rettskilder fortsatt vekt for nettopp den. Det er ikke en generell regel om 1902-loven, og det gamle paragrafnummeret skal uansett ikke brukes som gjeldende hjemmel.",
    },
    {
      question: "Hvorfor er straffeloven § 271 utelukket når alle krenkelsene i faktum er psykiske?",
      options: ["Fordi både vold og annen fysisk krenkelse forutsetter at noe fysisk har skjedd", "Fordi § 271 bare gjelder mellom personer som ikke står i en nær relasjon", "Fordi § 271 krever at det er voldt en skade på fornærmedes kropp eller helse", "Fordi psykiske krenkelser aldri kan straffes uten at det foreligger en trussel"],
      explanation: "Begge alternativene i § 271 forutsetter noe fysisk, og psykiske krenkelser faller derfor utenfor. Bestemmelsen gjelder også i nære relasjoner, den krever ingen skade, og psykiske krenkelser kan rammes av § 282 når vilkårene der er oppfylt.",
    },
    {
      question: "Hva kjennetegner handlingsmønsteret straffeloven § 282 rammer?",
      options: ["Vedvarenhet, indre sammenheng og en virkning som skaper en tilstand hos fornærmede", "Et fast antall hendelser fordelt over et bestemt minste tidsrom fastsatt i loven", "At hver enkelt hendelse isolert sett rammes av en av de alminnelige bestemmelsene", "At krenkelsene alltid skjer i hjemmet og alltid utføres av den samme personen"],
      explanation: "Mønsteret kjennetegnes av at krenkelsene er vedvarende, henger sammen og skaper en tilstand — ikke av et bestemt antall eller sted. Krenkelser som isolert sett faller under terskelen, teller også med i det samlede bildet.",
    },
    {
      question: "Hva betyr uttrykket «alvorlig eller gjentatt» i straffeloven § 282?",
      options: ["At det er to alternativer, slik at ett av dem er nok for å oppfylle vilkåret", "At begge deler må foreligge, slik at én alvorlig krenkelse aldri er tilstrekkelig", "At gjentakelse kreves i psykiske tilfeller og alvor kreves i de fysiske tilfellene", "At retten velger fritt hvilket av alternativene som skal anvendes i den enkelte sak"],
      explanation: "Ordet «eller» gjør de to til alternativer, slik at en tilstrekkelig alvorlig enkeltkrenkelse innenfor relasjonen kan være nok. Men ingen av alternativene løser terskelspørsmålet: krenkelsene må uansett samlet utgjøre mishandling.",
    },
    {
      question: "Hvorfor er terskelen skjerpet når krenkelsene er rent psykiske?",
      options: ["Fordi grensen mot et bare vanskelig forhold er vanskeligere å trekke uten fysiske krenkelser", "Fordi psykiske krenkelser er mindre alvorlige enn fysiske krenkelser i lovens system", "Fordi psykiske krenkelser bare rammes når de er ledsaget av uttrykkelige trusler om vold", "Fordi bevisbyrden er strengere i saker der det ikke foreligger legeerklæringer i saken"],
      explanation: "Begrunnelsen er at grensen mot det som bare er et dårlig forhold, blir vanskeligere å trekke, og at legalitetsprinsippet krever forutberegnelighet. Psykiske krenkelser er utvilsomt omfattet av bestemmelsen, og noe krav om ledsagende trusler finnes ikke.",
    },
    {
      question: "Hva er strafferammen i straffeloven § 282?",
      options: ["Fengsel inntil 6 år, mens grov mishandling etter § 283 har en langt høyere ramme", "Bot eller fengsel inntil 1 år, altså den samme rammen som for kroppskrenkelse", "Fengsel inntil 15 år, slik at bestemmelsen ligger på nivå med drapsbestemmelsen", "Fengsel inntil 3 år, med adgang til forhøyelse når flere fornærmede er berørt"],
      explanation: "Mishandling har fengsel inntil 6 år, mens grov mishandling etter § 283 har fengsel inntil 15 år. Rammen på ett år gjelder kroppskrenkelse etter § 271, og spranget mellom § 282 og § 283 viser at det grove alternativet er forbeholdt de tyngste forholdene.",
    },
    {
      question: "Når skal du skrive en subsidiær drøftelse av enkelthendelsene i et mishandlingspraktikum?",
      options: ["Når terskelen i § 282 er tvilsom, slik at du ikke står uten svar om sensor lander motsatt", "Aldri, siden den samlede vurderingen helt erstatter enhver vurdering av enkelthendelsene", "Alltid først, siden enkelthendelsene må være straffbare før mønsteret kan vurderes", "Bare når faktum inneholder hendelser som har ført til en skade på kropp eller helse"],
      explanation: "Den subsidiære drøftelsen hører hjemme der terskelen er tvilsom, og den koster få setninger. Enkelthendelsene trenger ikke være straffbare hver for seg for at mønsteret skal rammes, og subsidiaritet er nettopp et grep mot at én konklusjon stenger resten av oppgaven.",
    },
    {
      question: "Hvor mange avgjørelser navngir materialet for temaet mishandling i nære relasjoner?",
      options: ["Fem, og de er de eneste navngitte avgjørelsene i hele den spesielle strafferetten", "Ingen, slik at framstillingen må skrives helt uten henvisning til noen rettspraksis", "Tjue, altså hele domskanonen for emnet, som er samlet i kapitlet om eksamenstrening", "To, som svarer til de to terminene der bestemmelsen har vært prøvd på eksamen"],
      explanation: "Materialet navngir fem avgjørelser her, og dette er det eneste temaet i spesiell strafferett med en navngitt domskanon. De tjue avgjørelsene er hele bokas kanon på tvers av alle temaer.",
    },
    {
      question: "Hva må du gjøre før du bruker en av de fem avgjørelsene argumentativt?",
      options: ["Slå den opp og notere faktum og hva den slår fast, i én setning på hver", "Lære navnet utenat, siden en korrekt henvisning i seg selv gir uttelling", "Kontrollere at den er avsagt etter at straffeloven av 2005 trådte i kraft", "Finne minst to andre avgjørelser som støtter det samme rettslige poenget"],
      explanation: "En avgjørelse du bare kan navnet på, kan navngis, men ikke brukes argumentativt, og en kilde du ikke kan etterprøve, er feil nummer 15. Avgjørelser fra tiden før lovskiftet er fullt relevante her, siden bestemmelsen er videreført uten realitetsendring.",
    },
    {
      question: "Hvilken status har forarbeidene til mishandlingsbestemmelsen på eksamen?",
      options: ["De er et plusspoeng, siden pensum nesten ikke henviser til forarbeider i det hele tatt", "De er et krav, siden en fullstendig rettskildebruk alltid må omfatte forarbeidene", "De er uten betydning, siden bare lovtekst og rettspraksis regnes som rettskilder", "De er et krav i teorioppgaver, men bare et plusspoeng i praktikum og i kortsvarsoppgavene"],
      explanation: "Materialet sier uttrykkelig at det ikke kan forventes at kandidatene bruker forarbeider, fordi pensum nesten ikke henviser til dem — de er derfor et plusspoeng og aldri et krav. Å vise til et forarbeid man ikke har lest, er derimot feil nummer 15.",
    },
    {
      question: "Et mishandlingsforhold strekker seg fra 2012 til 2020. Hva må drøftelsen inneholde?",
      options: ["Lovvalget etter straffeloven § 3, med den observasjon at vilkårene er de samme", "En avvisning av alle hendelser før 2015, siden gjeldende lov ikke gjelder for dem", "En vurdering av om forholdet er foreldet, siden fristen løper fra første hendelse", "En begrunnelse for at bare den strengeste av de to lovene kan brukes på forholdet"],
      explanation: "Lovvalget avgjøres av straffeloven § 3, og poenget her er at vilkårene er de samme på begge sider av lovskiftet fordi bestemmelsen er videreført uten realitetsendring. Hendelser før 2015 faller ikke bort, og hovedregelen er at den mildeste loven anvendes, ikke den strengeste.",
    },
    {
      question: "Hva er forskjellen på feil nummer 11 og feil nummer 12 i dette stoffet?",
      options: ["Feil 11 gjelder valget av bestemmelse, mens feil 12 gjelder terskelen i den valgte", "Feil 11 gjelder terskelen for mishandling, mens feil 12 gjelder valget av hjemmel", "Feil 11 gjelder bevisvurderingen, mens feil 12 gjelder rekkefølgen på vilkårene", "Feil 11 gjelder gamle paragrafnumre, mens feil 12 gjelder manglende subsumsjon"],
      explanation: "Feil nummer 11 er å blande § 271 og § 282 om det psykiske, altså valget av bestemmelse, mens feil nummer 12 er å tro at gjentatt kritikkverdig atferd uten videre er mishandling, altså terskelen. Gamle paragrafnumre er feil nummer 14, og manglende subsumsjon er feil nummer 5.",
    },
  ],
  'juroff1500-7-4': [
    {
      question: "Hva skiller straffeloven § 275 fra § 281?",
      options: ["Skyldkravet — § 275 krever forsett om døden, mens § 281 krever uaktsomhet", "Følgen — § 275 krever at noen dør, mens § 281 rammer også der ingen døde", "Handlingen — § 275 krever et aktivt drapsmiddel, mens § 281 rammer unnlatelser", "Personkretsen — § 275 gjelder nære relasjoner, mens § 281 gjelder alle andre"],
      explanation: "Begge bestemmelsene er følgedelikter der noen dør, og alt som skiller dem, er skyldformen. Verken handlingsmåten eller relasjonen mellom partene er avgjørende, og forskjellen i strafferamme viser hvor mye skyldformen betyr.",
    },
    {
      question: "Hva er strafferammen i straffeloven § 275 om drap?",
      options: ["Fengsel fra 8 inntil 21 år, altså med en uvanlig minstestraff", "Fengsel inntil 6 år, altså den samme rammen som for kroppsskade", "Fengsel inntil 15 år, uten noen minstestraff angitt i bestemmelsen", "Fengsel inntil 21 år, med bot som mulig tillegg i de mildeste sakene"],
      explanation: "Drapsbestemmelsen har fengsel fra 8 inntil 21 år, og minstestraffen er uvanlig — de færreste straffebud har en. Rammen på 6 år gjelder blant annet uaktsom forvoldelse av død etter § 281.",
    },
    {
      question: "Hvor går grensen mellom forsett og uaktsomhet i et dødsfall?",
      options: ["Ved den tredje forsettsformen: om han innfant seg med følgen eller avviste den", "Ved om gjerningspersonen i det hele tatt tenkte på at følgen kunne inntreffe", "Ved om handlingen objektivt sett var farlig nok til å kunne føre til døden", "Ved om gjerningspersonen hadde et motiv for å ville den andres død i saken"],
      explanation: "Riktig svar er at grensen går ved om gjerningspersonen så følgen som mulig og likevel innfant seg med den, eller om han handlet i tillit til at det ville gå bra. At tanken ble tenkt, er ikke nok — det er nettopp bevisst uaktsomhet — og motiv er ikke en del av forsettet.",
    },
    {
      question: "Hva er statusen til begrepet «overlegg» i dagens strafferett?",
      options: ["Det er utgått — kategorien fantes i straffeloven av 1902 og har ingen pensumverdi i dag", "Det er en skjerpende kategori i dagens drapsbestemmelse, og gir en høyere strafferamme", "Det er en av de tre forsettsformene, og ligger nærmest hensiktsforsettet i innhold", "Det er en straffskjerpende omstendighet som er videreført i gjeldende straffelov"],
      explanation: "Kategorien tilhørte straffeloven av 1902 og er ikke videreført; den har ingen pensumverdi i dag. At et drap var planlagt, kan derimot ha betydning ved straffutmålingen innenfor rammen.",
    },
    {
      question: "Hva heter drapsbestemmelsen i 1902 § 233 i dagens straffelov?",
      options: ["Straffeloven § 275, som er den gjeldende bestemmelsen om forsettlig drap", "Straffeloven § 281, som er bestemmelsen om uaktsom forvoldelse av død", "Straffeloven § 274, som er bestemmelsen om grov kroppsskade i dagens lov", "Straffeloven § 271, som er den gjeldende bestemmelsen om kroppskrenkelse"],
      explanation: "Drapsbestemmelsen i den gamle loven er i dag straffeloven § 275. Uaktsom forvoldelse av død er en egen bestemmelse med en helt annen skyldform, og de to voldsbestemmelsene gjelder krenkelser og skader som ikke er dødelige.",
    },
    {
      question: "Hva rammer straffeloven § 231 om narkotikaovertredelse?",
      options: ["Ulovlig tilvirking, innførsel, oppbevaring, overdragelse og annen befatning med narkotika", "Bare innførsel og overdragelse, siden ren oppbevaring reguleres av annen lovgivning", "Bare den befatningen med narkotika som skjer med et vinnings formål for gjerningspersonen", "All befatning med narkotika der kvantumet overstiger det som regnes som egen bruk"],
      explanation: "Bestemmelsen har mange sidestilte handlingsalternativer, og oppbevaring er ett av dem — det kreves verken omsetning eller fortjeneste. Kvantumet har betydning for om overtredelsen er grov, ikke for om bestemmelsen i det hele tatt er overtrådt.",
    },
    {
      question: "Hvilke momenter bærer grovhetsvurderingen etter straffeloven § 232?",
      options: ["Kvantum, stoffets art og graden av organisering, som veies mot hverandre", "Kvantum alene, siden mengden er det eneste objektivt målbare i slike saker", "Gjerningspersonens tidligere domfellelser og hans egen bruk av det samme stoffet", "Kvantum og fortjeneste, siden begge sier noe om alvoret i den enkelte saken"],
      explanation: "De tre momentene er kvantum, art og organisering, og de skal veies mot hverandre. Å gjøre kvantumet til hele svaret er å behandle ett moment som et vilkår, og tidligere domfellelser hører til utmålingen og ikke til grovhetsvurderingen.",
    },
    {
      question: "En kurér vet at han frakter narkotika, men ikke hvilket stoff eller hvor mye. Hva er det springende punktet for om overtredelsen er grov?",
      options: ["Om forsettet også dekket de omstendighetene som gjør overtredelsen grov", "Om kvantumet objektivt sett overstiger den terskelen praksis har lagt til grunn", "Om han fikk betalt for oppdraget, siden betaling viser at han visste om alvoret", "Om han hadde mulighet til å undersøke innholdet før han krysset grensen selv"],
      explanation: "Dekningsprinsippet krever at skylden dekker også de omstendighetene som gjør forholdet grovt, og det er nettopp der tvilen ligger i kurértilfellene. Betaling og undersøkelsesmuligheter er bevismomenter for hva han regnet med, ikke selvstendige vilkår.",
    },
    {
      question: "En narkotikaoppgave avsluttes med spørsmålet «og hvis han var 16 år?». Hvor hører svaret hjemme?",
      options: ["I reaksjonslæren — straffebudet er overtrådt på nøyaktig samme måte som ellers", "I gjerningsbeskrivelsen — bestemmelsen stiller lavere krav overfor unge lovbrytere", "I skyldkravet — en 16-åring kan sjelden ha forsett om at stoffet er narkotika", "I spørsmålet om skyldevne — lav alder utelukker straffansvar helt inntil 18 år"],
      explanation: "Alderen endrer ingenting i straffebudet: en 16-åring er over den kriminelle lavalderen og kan oppfylle både gjerningsbeskrivelsen og skyldkravet. Det som er annerledes, er reaksjonen, og den drøftelsen hører hjemme i reaksjonslæren.",
    },
    {
      question: "Hva heter narkotikabestemmelsen i 1902 § 162 i dagens straffelov?",
      options: ["Straffeloven § 231, med den grove varianten regulert i en egen bestemmelse", "Straffeloven § 232, som er den eneste narkotikabestemmelsen i dagens lov", "Straffeloven § 275, som er den gjeldende bestemmelsen om forsettlig drap", "Straffeloven § 327, som er den gjeldende bestemmelsen om ran og grovt ran"],
      explanation: "Narkotikaovertredelsen ligger i dag i straffeloven § 231, mens den grove varianten er skilt ut i § 232 — strukturen er altså endret selv om temaet er det samme. Drap og ran er helt andre bestemmelser.",
    },
    {
      question: "Hva er ranets to elementer etter straffeloven § 327?",
      options: ["Tilegnelsen med vinningsforsett, og et tvangsmiddel i form av vold eller frykt", "Tilegnelsen med vinningsforsett, og at gjenstanden har en betydelig økonomisk verdi", "Et tvangsmiddel i form av vold, og at fornærmede påføres en skade på kroppen", "Tilegnelsen med vinningsforsett, og at handlingen skjer på et offentlig sted"],
      explanation: "Ranet er krysningen mellom et vinningselement og et tvangselement, og tvangsmiddelet er vold eller det å fremkalle frykt for umiddelbar vold. Verken verdien, skaden eller stedet er vilkår i grunnbestemmelsen.",
    },
    {
      question: "Hva kreves i tillegg til at begge ranets elementer foreligger?",
      options: ["At det er en sammenheng: tvangsmiddelet må være brukt for å oppnå tilegnelsen", "At de skjer samtidig i tid, slik at volden og tilegnelsen faller i samme sekund", "At fornærmede faktisk mister gjenstanden, siden forsøk reguleres av egne regler", "At gjerningspersonen på forhånd har planlagt begge deler som ett samlet forløp"],
      explanation: "Tvangsmiddelet må være et middel for tilegnelsen — den som først slår i en krangel og deretter i en ny beslutning tar lommeboken, har begått to lovbrudd og ikke ett ran. Bestemmelsen omfatter uttrykkelig også det å søke å ta, og planlegging er ikke noe vilkår.",
    },
    {
      question: "Hvorfor er det verdt å kommentere uttrykket «søker å ta» i en analyse av ransbestemmelsen?",
      options: ["Fordi forsøkshandlingen er tatt inn i gjerningsbeskrivelsen og flytter fullbyrdelsen", "Fordi uttrykket viser at bestemmelsen bare rammer de mislykkede ranene og ikke de vellykkede", "Fordi det innebærer at skyldkravet er senket til uaktsomhet i forsøkstilfellene", "Fordi det gjør at strafferammen settes ned når gjerningspersonen ikke fikk noe"],
      explanation: "Ordene gjør at ranet er fullbyrdet selv om gjerningspersonen ikke fikk med seg noe, og det flytter dermed fullbyrdelsestidspunktet i forhold til de alminnelige forsøksreglene. Skyldkravet og strafferammen påvirkes ikke av dette.",
    },
    {
      question: "Hvor ligger tyngdepunktet i en femtrinnsanalyse av ransbestemmelsen?",
      options: ["I trinn 2, fordi bestemmelsen har flere vilkår og ett av dem ikke står som eget ord", "I trinn 1, fordi gjerningspersonkretsen er snevert avgrenset i denne bestemmelsen", "I trinn 3, fordi ordet gjenstand er langt vagere her enn i tyveribestemmelsen", "I trinn 5, fordi ransbestemmelsen er den eneste med et rent uaktsomhetsalternativ"],
      explanation: "Tyngdepunktet ligger i trinn 2: bestemmelsen har mange vilkår, og kravet om sammenheng mellom tvangsmiddel og tilegnelse følger av oppbygningen uten å stå som et eget ord. Kretsen er åpen, gjenstandsbegrepet er det samme som i tyveribestemmelsen, og skyldkravet er forsett med et subjektivt overskudd.",
    },
    {
      question: "Hva skiller ran fra tyveri?",
      options: ["Tvangsmiddelet — ranet krever vold eller frykt for umiddelbar vold i tillegg", "Vinningsforsettet — bare ranet krever forsett om en uberettiget vinning", "Verdien — ranet forutsetter at gjenstanden har en betydelig økonomisk verdi", "Fullbyrdelsen — bare tyveriet er fullbyrdet før gjenstanden faktisk er tatt"],
      explanation: "Begge krever forsett om uberettiget vinning; det som kommer i tillegg ved ran, er tvangsmiddelet. Verdien er et grovhetsmoment, og det er ransbestemmelsen som uttrykkelig omfatter også det å søke å ta gjenstanden.",
    },
    {
      question: "Hva skal du gjøre før du skriver om straffeloven § 291 eller § 297?",
      options: ["Slå opp gjeldende ordlyd i Lovdata, siden området har vært under revisjon", "Bygge på gjengivelsen i pensumlitteraturen, som er kontrollert av fagmiljøet", "Vise til den utredningen som foreslo reform, siden den beskriver gjeldende rett", "Bruke ordlyden slik den var i 2023, siden materialet bygger på nettopp den"],
      explanation: "Riktig svar er å kontrollere gjeldende ordlyd i Lovdata, fordi bestemmelsene har vært gjenstand for revisjon. En utredning beskriver forslag og ikke gjeldende rett, og en eldre gjengivelse er ikke en kilde du kan vise til.",
    },
    {
      question: "Hvilken status har personforvekslingspoenget ved seksuallovbruddene?",
      options: ["Et anerkjent plusspoeng, men toppkarakter skal være mulig helt uten det", "Et krav på toppnivå, siden poenget hører til kjernen i dekningsprinsippet", "Et poeng som bør unngås, siden det ligger utenfor det oppgaven spør om", "Et krav i praktikum, men et plusspoeng i teori- og kortsvarsoppgavene"],
      explanation: "Materialet gir uttrykkelig uttelling til den som problematiserer rekkevidden ved personforveksling, men sier like uttrykkelig at toppkarakter skal være mulig uten det, fordi poenget går ut over det som kan forventes i et emne for ikke-jurister.",
    },
    {
      question: "Hvilke to bestemmelser utgjør randsonen i dette kapitlet?",
      options: ["Trusler i §§ 263 og 264, og hensynsløs atferd i § 266 — ingen av dem hovedtema", "Ran i § 327 og grovt ran i § 328, som begge er analyseobjekt i to terminer", "Drap i § 275 og uaktsom forvoldelse av død i § 281, som er sammenlikningsparet", "Voldtekt i § 291 og seksuell handling uten samtykke i § 297, som er under revisjon"],
      explanation: "Trusler og hensynsløs atferd er randsonestoff som ikke har vært hovedtema i noen termin, men som er de nærmeste naboene når krenkelsen ikke er fysisk. Ransbestemmelsene og drapsparet er derimot kjernestoff i kapitlet.",
    },
    {
      question: "En kandidat skriver: «Ved narkotikaovertredelser er kvantum avgjørende, jf. fast praksis.» Hva er hovedproblemet?",
      options: ["Henvisningen kan ikke etterprøves, og påstanden utelater de øvrige momentene", "Påstanden er riktig, men den burde vært plassert i utmålingsdelen av svaret", "Kvantum er uten betydning for grovheten og hører bare til ved straffutmålingen", "Uttrykket fast praksis kan bare brukes om avgjørelser fra de siste ti årene"],
      explanation: "En henvisning uten kilde er feil nummer 15, å oppgi kilder man ikke har, og påstanden gjør dessuten ett moment til det avgjørende. Kvantum er et sentralt moment i grovhetsvurderingen, men det veies mot stoffets art og gjerningspersonens rolle.",
    },
    {
      question: "Hvilke avgjørelser navngir materialet for drap, narkotika, ran og seksuallovbrudd?",
      options: ["Ingen — mishandling i nære relasjoner er det eneste temaet her med domskanon", "Fem, som er de samme som materialet navngir for mishandling i nære relasjoner", "To, som svarer til de to terminene der ransbestemmelsen var analyseobjekt", "Tjue, altså hele domskanonen, siden den er felles for hele den spesielle delen"],
      explanation: "Materialet navngir ingen avgjørelse for disse temaene, og en henvisning du ikke kan etterprøve, er feil nummer 15. De fem avgjørelsene gjelder mishandling i nære relasjoner, som er det eneste temaet i spesiell strafferett med en navngitt domskanon.",
    },
  ],
  'juroff1500-8-1': [
    {
      question: "Hvilke fire trinn bygger et kortsvar etter malen oppgavesettene selv gir?",
      options: ["Hjemmelen med lov, paragraf og ledd, formålet med regelen i én setning, hovedformene eller vilkårene forklart hver for seg, og til slutt ett eget eksempel", "Innledning som avgrenser temaet, en problemstilling formulert som spørsmål, en sammenhengende drøftelse i disponerte deler, og en sammenfatning til slutt", "Problemstillingen utledet av lovens vilkår, hjemmelen bak den, tolkningen av det tvilsomme vilkåret, og en subsumsjon under faktums konkrete momenter", "En definisjon av begrepet, en gjengivelse av hva pensumlitteraturen skriver om det, en oppramsing av unntakene, og en kort konklusjon til slutt"],
      explanation: "Malen er lest ut av oppgavesettenes egne beskjeder: lovhenvisning skal gis der det er naturlig, og ved generelle spørsmål bør formålet og hovedformene nevnes. Alternativet med innledning og sammenfatning beskriver teorioppgaven, som er en bredere og mer sammenhengende sjanger. Alternativet med subsumsjon beskriver praktikumsoppgaven, som forutsetter et faktum — noe kortsvaret ikke har.",
    },
    {
      question: "Hvor stor del av terminene i JUROFF1500 er rene kortsvarssett?",
      options: ["28 av 34 terminer, altså hele femtimersregimet fra våren 2005 til høsten 2019", "6 av 34 terminer, altså de seks siste, som også er de eneste med sensorveiledning", "16 av 34 terminer, altså om lag halvparten, fordelt jevnt utover hele perioden", "34 av 34 terminer, siden alle sett i emnet består av korte spørsmål uten faktum"],
      explanation: "Riktig svar er 28 av 34 terminer: hele femtimersregimet fra våren 2005 til høsten 2019 er rene kortsvarssett. Tallet 6 av 34 terminer gjelder praktikumsregimet fra høsten 2020, som er noe helt annet — der er det faktum med navngitte parter. Ingen termin er begge deler.",
    },
    {
      question: "Hva er tidsbudsjettet per spørsmål i femtimersregimet med seks til ti spørsmål?",
      options: ["Mellom 30 og 50 minutter per spørsmål, avhengig av hvor mange spørsmål settet har", "Mellom 10 og 15 minutter per spørsmål, fordi spørsmålene er korte og skal besvares kort", "Om lag 90 minutter på hoveddelen, og resten av tiden fordelt på de øvrige spørsmålene", "Ingen tid er oppgitt, fordi spørsmålene har ulik vekt og skal prioriteres fritt av kandidaten"],
      explanation: "Med seks til ti likevektede spørsmål på fem timer blir hvert spørsmål verdt 30–50 minutter. Anslaget på 10–15 minutter undervurderer sjangeren kraftig: et kortsvar skal ha fire trinn og et eget eksempel. Og spørsmålene er nettopp ikke vektet ulikt — det er derfor jevn dimensjonering lønner seg.",
    },
    {
      question: "Hva er den viktigste grunnen til at eksempelet i et kortsvar bør være ditt eget?",
      options: ["Fordi et eksempel du har konstruert selv viser at begrepet gjør arbeid, mens lærebokas eksempel bare viser at du har lest boka", "Fordi det er forbudt å gjengi eksempler fra pensumlitteraturen når hjelpemidlene er åpne under eksamen, og gjengivelse regnes som fusk", "Fordi et eget eksempel alltid blir kortere enn lærebokas og derfor sparer deg for tid i et sett med mange spørsmål", "Fordi sensorveiledningene krever at hvert kortsvar inneholder minst to eksempler, og at minst ett av dem er originalt"],
      explanation: "Riktig svar er at det egne eksempelet er det billigste beviset på forståelse — det er nettopp gjengivelse fra pensum veiledningene sier ikke skal telle særlig når kildene er åpne. Det er ikke forbudt å bruke lærebokas eksempel, og ingen veiledning stiller krav om et bestemt antall eksempler.",
    },
    {
      question: "Hva må stå i et sammenlikningssvar som ikke må stå i et vanlig kortsvar?",
      options: ["Forskjellen mellom de to begrepene formulert eksplisitt i én setning, og et eksempel som ville falt ulikt ut for dem", "En vurdering av hvilket av de to begrepene som er viktigst i praksis, forankret i minst én høyesterettsavgjørelse", "En historisk framstilling av hvordan de to begrepene har utviklet seg fra straffeloven av 1902 og fram til i dag", "En konklusjon om hvilket av de to begrepene som ville rammet det oppgitte faktumet i saken oppgaven gjelder"],
      explanation: "Sammenlikningssvarets signaturgrep er den eksplisitte forskjellssetningen — to riktige definisjoner ved siden av hverandre er ikke en sammenlikning. Alternativet om et faktum bommer på sjangeren: kortsvarsspørsmålet har ikke noe faktum, og å konstruere ett er en egen sjangerfeil.",
    },
    {
      question: "Hva menes med at å dimensjonere besvarelsen fornuftig er et selvstendig vurderingskriterium?",
      options: ["At fordelingen av tid og plass mellom svarene vurderes i seg selv, og ikke bare er et praktisk råd om å rekke alt", "At besvarelsen må ha et bestemt minsteantall ord for hvert spørsmål for i det hele tatt å kunne vurderes", "At sensor trekker for besvarelser som er kortere enn gjennomsnittet blant kandidatene som gikk opp det året", "At kandidaten selv skal oppgi hvor mye tid hun har brukt på hvert av spørsmålene i settet, slik at tiden kan etterprøves"],
      explanation: "Kriteriet står på metodeaksen i fakultetets generelle sensorveiledningsskjema og vurderes som et selvstendig punkt. Det handler om forholdet mellom svarene, ikke om et absolutt lengdekrav — og det finnes verken en ordgrense eller en sammenlikning med årets øvrige kandidater.",
    },
    {
      question: "Hva er kjernen i feil #16 i bokas feilregister?",
      options: ["Å svare på færre spørsmål enn settet krever, slik at et helt spørsmål blir stående ubesvart", "Å svare på flere spørsmål enn settet krever, i håp om å samle poeng på det som ikke er etterspurt", "Å svare uten å oppgi hjemmel, slik at kildegrunnlaget for besvarelsen ikke lar seg etterprøve", "Å svare med feil paragrafnummer fordi henvisningen er hentet fra et gammelt eksamenssett"],
      explanation: "Feil #16 er å la spørsmål stå ubesvart i et sett der alle spørsmål skal besvares. Å oppgi kilder man ikke har er feil #15, og å bruke feil straffelov er feil #14 — begge er reelle feil, men det er andre koder i registeret.",
    },
    {
      question: "Hva kjennetegner en løftesetning til slutt i et kortsvar?",
      options: ["Den peker på noe reelt tvilsomt eller på en spenning i regelen, i stedet for å oppsummere det som allerede står", "Den tar forbehold om at framstillingen kan være ufullstendig fordi tiden var knapp og kildene få", "Den gjentar hovedpoenget i svaret med andre ord, slik at leseren husker konklusjonen til slutt", "Den viser til pensumlitteraturen med forfatter og sidetall, slik at kildegrunnlaget klart framgår"],
      explanation: "Løftesetningen sier hva som er vanskelig og hvorfor. Den er noe annet enn et forbehold, som bare signaliserer usikkerhet, og noe annet enn en oppsummering, som ikke tilfører noe. En sidehenvisning er en kildeangivelse og løfter ikke svaret faglig.",
    },
    {
      question: "Hvilken bestemmelse i dagens straffelov svarer til tyveribestemmelsen som i straffeloven 1902 sto i § 257?",
      options: ["Straffeloven § 321, som rammer den som tar en gjenstand som tilhører en annen, med forsett om uberettiget vinning", "Straffeloven § 271, som rammer den som øver vold mot en annen person eller på annen måte krenker ham fysisk", "Straffeloven § 231, som rammer ulovlig tilvirkning, innførsel, utførsel og oppbevaring av narkotika", "Straffeloven § 275, som rammer den som dreper en annen, og som har en strafferamme på 21 års fengsel"],
      explanation: "Tyveribestemmelsen i straffeloven 1902 § 257 er i dag straffeloven § 321. De tre andre er reelle bestemmelser, men avløser andre gamle paragrafer: § 271 bestemmelsen om legemsfornærmelse, § 231 narkotikabestemmelsen og § 275 drapsbestemmelsen. Poenget er at nummeret aldri lar seg gjette.",
    },
    {
      question: "Et gammelt eksamensspørsmål gjelder culpa levissima. Hva skal du kunne om det?",
      options: ["Bare at skyldformen er bortfalt som selvstendig kategori, slik at spørsmålet er ett du hopper over i treningen", "Vilkårene for skyldformen i detalj, siden den fortsatt brukes ved særlig alvorlige følger etter dagens lov", "Hvordan skyldformen skiller seg fra grov uaktsomhet, siden begge fremdeles er selvstendige skyldformer", "Hvilken strafferamme skyldformen gir etter dagens lov, siden rammen er videreført helt uendret"],
      explanation: "Riktig svar er statusopplysningen: skyldformen er bortfalt som selvstendig kategori, og et spørsmål om den i et gammelt sett har ingen pensumverdi i dag. De tre andre alternativene forutsetter alle at kategorien fortsatt lever — det er nettopp derfor du bare skal kjenne den igjen, ikke kunne den.",
    },
    {
      question: "Hva er den vanligste grunnen til at en kandidat mister et helt spørsmål i et likevektet kortsvarssett?",
      options: ["At hun bruker for mye tid på de spørsmålene hun kan best, slik at tiden til det siste spørsmålet forsvinner", "At hun ikke kjenner stoffet i det spørsmålet som blir stående blankt, og derfor ikke har noe å skrive der", "At hun bruker for lang tid på å lese gjennom hele settet i begynnelsen og aldri henter inn igjen tiden", "At hun skriver for kort på alle spørsmålene og derfor får trekk for manglende dybde i hele besvarelsen"],
      explanation: "Riktig svar er skjevfordelingen: tapet oppstår nesten alltid fordi tiden går til det kandidaten behersker, ikke fordi hun ikke kunne noe om det siste spørsmålet. Selv et halvgodt svar med hjemmel og formål gir uttelling, mens et blankt gir null — og lesetid i starten er en investering, ikke et tap.",
    },
    {
      question: "Hvorfor skriver boka alltid årstallet 1902 og dagens paragraf ved siden av et gammelt paragrafnummer?",
      options: ["Fordi et nummer som ikke finnes i Lovdata koster leseren minutter hun ikke har på en eksamen med åpen lovdatabase", "Fordi opphavsretten krever at kilden til et gammelt eksamensspørsmål oppgis med både årstall og paragrafnummer", "Fordi straffeloven av 1902 fortsatt gjelder fullt ut for alle handlinger begått før 2016 og derfor må siteres presist", "Fordi sensorveiledningene krever at kandidaten oppgir begge paragrafnumrene i besvarelsen sin når hun bruker eldre kilder"],
      explanation: "Grunnen er praktisk: fra høsten 2026 sitter kandidaten med Lovdata Pro åpen, og et paragrafnummer som ikke finnes der, brenner minutter. Det er ikke et opphavsrettsspørsmål, og ingen sensorveiledning ber kandidaten oppgi to numre. At gammel lov kan være relevant for handlinger begått før lovskiftet, er et eget spørsmål om virkeområdet i tid.",
    },
    {
      question: "Hva er forskjellen på et vilkår og en hovedform i et kortsvar?",
      options: ["Et vilkår må være oppfylt for at regelen skal slå til, mens en hovedform er én av flere måter noe kan opptre på", "Et vilkår står i lovteksten, mens en hovedform alltid er utviklet i rettspraksis og derfor har lavere rettskildevekt", "Et vilkår gjelder den objektive siden av straffbarheten, mens en hovedform alltid gjelder den subjektive siden", "Et vilkår kan fravikes ved samtykke fra fornærmede, mens en hovedform er absolutt og aldri kan fravikes"],
      explanation: "Skillet er logisk, ikke kildemessig: vilkår er kumulative krav som alle må være oppfylt, mens hovedformene er alternative uttrykk for samme begrep — medvirkning kan være fysisk, psykisk eller passiv. Både vilkår og hovedformer kan ha grunnlag i lovtekst eller i praksis, og skillet følger verken den objektive og subjektive siden eller adgangen til samtykke.",
    },
    {
      question: "En kandidat får spørsmålet «Hva er rettsuvitenhet?» og skriver tre sider om hele skyldlæren. Hvilken feil er det?",
      options: ["Feil #10 — å svare bredt når spørsmålet er smalt, slik at plassen går til det som ikke er etterspurt", "Feil #2 — å blande rettsuvitenhet og faktisk uvitenhet, som er to helt ulike former for villfarelse", "Feil #16 — å svare på færre spørsmål enn settet krever, slik at et spørsmål blir stående ubesvart", "Feil #15 — å oppgi kilder man ikke har lest, slik at kildegrunnlaget ikke lar seg etterprøve"],
      explanation: "Riktig svar er feil #10: spørsmålet er smalt, og svaret gjelder hele læren begrepet hører hjemme i. Feil #2 ville forutsatt at kandidaten faktisk forvekslet de to villfarelsestypene, noe hun ikke gjør her — hun skriver om for mye, ikke om feil ting.",
    },
  ],
  'juroff1500-8-2': [
    {
      question: "Hvilke fire trinn bygger en teorioppgave?",
      options: ["En innledning som avgrenser, en problemstilling, en sammenhengende framstilling i disponerte deler, og en sammenfatning eller egen vurdering", "Hjemmelen med lov og paragraf, formålet med regelen, hovedformene eller vilkårene forklart hver for seg, og ett eget eksempel til slutt", "En presis problemstilling utledet av lovens vilkår, hjemmelen bak den, en tolkning av vilkåret, og en subsumsjon under faktum", "En oversikt over rettskildene på området, en gjennomgang av vekten deres, en drøftelse av motstriden, og en konklusjon"],
      explanation: "Teorioppgavens fire trinn er innledning, problemstilling, disponert framstilling og sammenfatning. Alternativet med hjemmel og eksempel beskriver kortsvarets firetrinnsmal, og alternativet med subsumsjon beskriver praktikumsoppgaven — som forutsetter et faktum teorioppgaven ikke har.",
    },
    {
      question: "I hvor mange av terminene fra høsten 2020 opptrer teorioppgaven som egen sjanger?",
      options: ["I fem av de seks terminene — alle unntatt den siste, der hele settet var praktisk", "I alle de seks terminene, siden praktikumsregimet alltid har hatt en todelt struktur", "I tre av de seks terminene, altså de tre første, før formen ble forlatt igjen", "I én av de seks terminene, siden systematiseringsoppgaven ellers erstattet den"],
      explanation: "Teorioppgaven finnes i fem av de seks terminene fra høsten 2020; unntaket er den siste, der hele settet var praktisk. Systematiseringsoppgaven derimot opptrer bare én gang, høsten 2024 — den er en variant av teorioppgaven, ikke en erstatning for den.",
    },
    {
      question: "Hva er tilleggskravet i en systematiseringsoppgave sammenliknet med en vanlig teorioppgave?",
      options: ["At underspørsmålene settes inn i sin naturlige sammenheng i stedet for å besvares hver for seg etter tur", "At kandidaten selv velger hvilke av underspørsmålene hun vil besvare, og begrunner utvalget innledningsvis", "At hvert underspørsmål må besvares med nøyaktig samme lengde, slik at dimensjoneringen blir jevn", "At framstillingen må bygge på minst én høyesterettsavgjørelse per underspørsmål som er oppgitt"],
      explanation: "Tilleggskravet er sammenhengen: de flinkeste skriver en sammenhengende oppgave og binder underspørsmålene til hverandre. Kandidaten kan ikke velge bort deler — dekningen er nettopp terskelen — og verken lik lengde eller et minsteantall avgjørelser er noe krav.",
    },
    {
      question: "Hva sier gjenbruksregelen?",
      options: ["At en redegjørelse fra ett underspørsmål gir uttelling også senere, forutsatt at den trekkes eksplisitt inn og ikke gjentas", "At kandidaten kan gjenbruke formuleringer fra pensumlitteraturen så lenge kilden oppgis med forfatter og verk", "At en redegjørelse bare teller én gang, slik at det er likegyldig om den nevnes igjen under et senere underspørsmål", "At et underspørsmål kan besvares ved å vise til et tidligere svar uten å si noe mer om hvordan det gjør arbeid"],
      explanation: "Regelen er at gjenbruk teller — men bare når koblingen skrives ut: «sondringen fra a) gjør arbeid også her, fordi …». En ren henvisning uten å vise hvordan den gjør arbeid, er nettopp det som ikke godtas som et besvart underspørsmål.",
    },
    {
      question: "Hva er materialets skarpeste anvisning om ufullstendige teorioppgaver?",
      options: ["At kandidater som ikke besvarer alle delene dekkende, i utgangspunktet bør vurderes i det nedre sjiktet", "At kandidater som utelater én del, automatisk skal vurderes til stryk uavhengig av resten av besvarelsen", "At kandidater som utelater én del, ikke skal trekkes så lenge de øvrige delene er grundig besvart", "At kandidater selv kan velge bort én del, forutsatt at valget begrunnes i innledningen til oppgaven"],
      explanation: "Anvisningen er at manglende dekning i utgangspunktet plasserer besvarelsen i det nedre sjiktet — det er strengt, men det er ikke automatisk stryk, og det er heller ikke noe kandidaten kan velge seg ut av. Nettopp derfor slår dekning dybde i en flerdelt oppgave.",
    },
    {
      question: "Hvorfor kan ikke vektingen mellom teoridelen og praktikumsdelen antas?",
      options: ["Fordi den har snudd: én fjerdedel på teori i de to første terminene, tre fjerdedeler i 2024, og todelingen forlatt i 2025", "Fordi vektingen alltid har vært hemmelig og først oppgis i sensurbrevet etter at karakterene er fastsatt", "Fordi vektingen fastsettes av den enkelte sensor og derfor varierer mellom kandidatene i samme termin", "Fordi vektingen bare gjelder tidsbruken og ikke har betydning for hvordan besvarelsen faktisk vurderes"],
      explanation: "Vektingen står i oppgaveteksten, men den har snudd fullstendig gjennom perioden og ble til slutt forlatt. Den er verken hemmelig eller sensorbestemt — og den har direkte betydning, siden den forteller deg hvor mye tid hver del er verdt.",
    },
    {
      question: "Hva skiller en sammenfatning fra en oppsummering til slutt i en teorioppgave?",
      options: ["Sammenfatningen trekker én linje gjennom delene eller tar stilling til noe tvilsomt, mens oppsummeringen gjentar det som allerede står", "Sammenfatningen skal alltid inneholde en konklusjon om gjeldende rett, mens oppsummeringen holder seg til å beskrive", "Sammenfatningen står før framstillingen og oppsummeringen etter, slik at leseren vet hva som kommer", "Sammenfatningen brukes i praktikumsoppgaver og oppsummeringen i teorioppgaver, siden sjangrene har ulik avslutning"],
      explanation: "Forskjellen ligger i om avslutningen tilfører noe: sammenfatningen binder eller vurderer, oppsummeringen gjentar. Rekkefølgen er den samme for begge — de står til slutt — og ingen av dem er knyttet til én bestemt sjanger.",
    },
    {
      question: "Hva bør en innledning i en teorioppgave ikke inneholde?",
      options: ["En generell oppvarming om hva strafferett er eller hvorfor temaet er viktig for samfunnet", "En angivelse av hva oppgaven gjelder og hvilket spørsmål framstillingen skal svare på", "En avgrensning mot nabotemaer som leseren ellers kunne trodd var utelatt ved en forglemmelse", "En kort angivelse av hvilket begrepsapparat kandidaten legger til grunn i framstillingen"],
      explanation: "Den generelle oppvarmingen er den eneste av de fire som ikke gjør arbeid — den koster tid og avgrenser ingenting. De tre andre er nettopp innledningens oppgaver: å si hva oppgaven gjelder, hva som ligger utenfor, og hvilke begreper som brukes.",
    },
    {
      question: "Hva er den viktigste grunnen til at problemstillingen bør være din egen formulering?",
      options: ["Fordi den da gir deg disposisjonen og lar deg merke selv når et avsnitt ikke svarer på noe", "Fordi det er et formkrav i oppgavesettene at problemstillingen skal skrives om med egne ord", "Fordi en gjentakelse av oppgaveteksten regnes som avskrift og derfor trekker ned i seg selv", "Fordi sensor ellers ikke kan se hvilken del av oppgaveteksten kandidaten har valgt å besvare"],
      explanation: "Problemstillingen er et arbeidsverktøy: den gir deg disposisjonen og fungerer som en test på hvert avsnitt du skriver. Å gjenta oppgaveteksten er ikke avskrift i registerets forstand, men det gir deg heller ingen hjelp — og det er hjelpen som er poenget.",
    },
    {
      question: "En kandidat besvarer fire underspørsmål ryddig, ett for ett, uten å koble dem sammen. Hvordan skal det bedømmes?",
      options: ["Det godtas — sammenhengen er det som løfter, men den punktvise formen er ikke i seg selv feil", "Det gir stryk, siden systematiseringsoppgaven uttrykkelig krever en sammenhengende framstilling", "Det gir automatisk toppkarakter dersom hvert enkelt underspørsmål er riktig besvart og forankret", "Det bedømmes ikke, siden en punktvis besvarelse regnes som ufullstendig og ikke oppfyller dekningskravet"],
      explanation: "Materialet er tydelig på at begge former godtas: de flinkeste skriver sammenhengende, de svakeste enkeltvis, men den punktvise besvarelsen er dekkende og skal vurderes som sådan. Den mangler bare det som løfter, ikke det som bærer.",
    },
    {
      question: "Hvordan bør tiden fordeles i en teorioppgave vektet med tre fjerdedeler av fire timer?",
      options: ["Om lag femten minutter på disposisjon, rundt to og en halv time på skriving, og et kvarter på gjennomlesning", "Om lag fem minutter på disposisjon og resten på skriving, siden tiden er knapp og disposisjonen kan lages underveis", "Halvparten på disposisjon og halvparten på skriving, siden en bred oppgave krever mest planlegging", "All tid på skriving, siden gjennomlesning ikke gir uttelling når konklusjonen uansett ikke er avgjørende"],
      explanation: "Tre fjerdedeler av fire timer er om lag tre timer, og da er et kvarter på disposisjonen vel anvendt — det er der du bestemmer antall deler og lengden på hver. Å droppe gjennomlesningen er dyrt selv om konklusjonen ikke er avgjørende: det er der du oppdager at en del mangler.",
    },
    {
      question: "Hva er den vanligste grunnen til at et underspørsmål blir stående ubesvart i en flerdelt oppgave?",
      options: ["At kandidaten brukte for lang tid på en tidligere del og oppdaget den siste for sent", "At kandidaten bevisst valgte den bort fordi den var vanskeligst og ville kostet mest tid", "At kandidaten ikke forsto hva underspørsmålet gjaldt og derfor lot det stå åpent", "At kandidaten svarte på det inne i en annen del, men uten å merke svaret med bokstaven"],
      explanation: "Årsaken er nesten alltid tidsstyring: en tidligere del vokste, og den siste ble oppdaget for sent. Å skrive underspørsmålene ut som a), b), c) på hver sin linje i besvarelsen er den enkleste motgiften — da ser du selv umiddelbart at én mangler.",
    },
  ],
  'juroff1500-8-3': [
    {
      question: "Hvilke fem trinn har en drøftelse i et praktikum?",
      options: ["Presis problemstilling, hjemmel, tolkning av vilkåret, subsumsjon under faktums momenter, og konklusjon", "Hjemmelen, formålet med regelen, hovedformene eller vilkårene, et eget eksempel, og en avsluttende løftesetning", "Innledning som avgrenser, problemstilling, sammenhengende framstilling i deler, sammenfatning, og egen vurdering", "Angivelse av gjerningsperson, de objektive vilkårene, tolkning av substantivet, tolkning av verbet, og skyldkravet"],
      explanation: "Femtrinnsmetoden gjelder per problemstilling og ender i en konklusjon som er trinnet som teller minst. Alternativet med eget eksempel beskriver kortsvarsmalen, og alternativet med substantiv og verb beskriver femtrinnsstrukturen i lovanalyseoppgaven — en helt annen sjanger, uten faktum.",
    },
    {
      question: "I hvor mange terminer finnes det et praktikum i JUROFF1500?",
      options: ["6 av 34 terminer, og det er de seks siste — før 2020 finnes ikke ett eneste praktikum", "28 av 34 terminer, altså alle terminene i det gamle femtimersregimet med kortsvar", "16 av 34 terminer, fordelt jevnt gjennom perioden fra 2005 og fram til i dag", "34 av 34 terminer, siden alle sett i emnet inneholder minst ett hendelsesforløp"],
      explanation: "Praktikum finnes i 6 av 34 terminer, alle fra og med høsten 2020. Tallet 28 av 34 terminer gjelder kortsvarsregimet, som er den motsatte sjangeren: der finnes det ikke noe faktum i det hele tatt.",
    },
    {
      question: "Hva skiller en presis problemstilling fra en upresis?",
      options: ["Den presise inneholder et vilkår fra lovteksten og et trekk fra faktum, slik at den ikke kunne stått i en annen oppgave", "Den presise er formulert som en påstand med konklusjonen i seg, slik at leseren vet hvor drøftelsen ender", "Den presise angir hvilken pensumlitteratur spørsmålet bygger på, slik at kildegrunnlaget framgår tidlig", "Den presise er kortere enn tre linjer, mens den upresise strekker seg over et helt avsnitt"],
      explanation: "Testen er om problemstillingen kunne stått i en annen oppgave: er svaret ja, er den for vid. Den skal ha et ord fra lovteksten og et trekk fra faktum. Konklusjonen hører ikke hjemme i problemstillingen, og lengden er ikke kriteriet.",
    },
    {
      question: "Hva er forskjellen på å tolke og å subsumere?",
      options: ["Tolkningen sier hva regelen krever i sin alminnelighet, subsumsjonen sier hva nettopp dette faktumet gjør", "Tolkningen gjelder ordlyden og subsumsjonen gjelder forarbeidene, slik at rettskildene behandles hver for seg", "Tolkningen gjøres av lovgiveren og subsumsjonen av domstolen, slik at kandidaten bare skal gjøre det siste", "Tolkningen gjelder objektive vilkår og subsumsjonen subjektive, slik at skylden alltid behandles til slutt"],
      explanation: "Skillet er mellom regelen og tilfellet: først bestemmer du hva vilkåret betyr, deretter om faktum oppfyller det. Blandes de, får du setninger som «vilkåret er oppfylt fordi han gjorde det», som er en gjentakelse og ikke en begrunnelse.",
    },
    {
      question: "Hva sier rekkefølgeregelen i et praktikum?",
      options: ["At disposisjonen følger de fire straffbarhetsvilkårene, uansett i hvilken rekkefølge hendelsene i faktum skjedde", "At disposisjonen følger hendelsesforløpet, siden leseren da lettest kan følge med i drøftelsen", "At disposisjonen følger rekkefølgen på forsvarerens anførsler, siden de peker ut det som er tvilsomt", "At disposisjonen følger rekkefølgen på paragrafene i loven, slik at framstillingen blir systematisk"],
      explanation: "Rekkefølgen følger straffbarhetsvilkårene. Å disponere etter kronologien er den vanligste strukturfeilen i sjangeren, og å følge anførslene bytter ut vilkårene med partens argumentliste — anførslene er kompass, ikke disposisjon.",
    },
    {
      question: "Når er en subsidiær drøftelse obligatorisk?",
      options: ["Der en konklusjon ellers ville avskåret resten av oppgaven, slik at de øvrige spørsmålene aldri ble drøftet", "Alltid, siden kandidaten aldri kan være sikker på at konklusjonen hennes er den samme som sensors", "Aldri, siden materialet uttrykkelig sier at konklusjonen ikke er avgjørende for vurderingen", "Bare der oppgaveteksten uttrykkelig ber om at kandidaten drøfter subsidiært under en annen forutsetning"],
      explanation: "Subsidiaritet er en beslutning om å gjøre ferdig oppgaven, og den er påkrevd nettopp der en konklusjon stenger resten. Å drøfte alt subsidiært uansett koster tid du ikke har, og at konklusjonen ikke er avgjørende, er et argument for å drøfte videre — ikke for å la være.",
    },
    {
      question: "En kandidat skriver en side om at det å slå noen i ansiktet dekkes av gjerningsbeskrivelsen, og fem linjer om det omstridte skyldspørsmålet. Hvilken feil er det?",
      options: ["Feil #5 — å stoppe ved den ytre klassifiseringen, slik at tiden går til det opplagte", "Feil #1 — å gjengi pensum i stedet for å svare på det oppgaven faktisk spør om", "Feil #16 — å svare på færre spørsmål enn oppgaven krever, slik at et spørsmål blir ubesvart", "Feil #9 — å behandle forsøkets nedre grense som et tidspunkt i stedet for en vurdering"],
      explanation: "Riktig svar er feil #5: proporsjonen er snudd, og det klare har fått plassen til det tvilsomme. Kandidaten har faktisk besvart begge spørsmålene, så det er ikke #16 — problemet er fordelingen, ikke dekningen.",
    },
    {
      question: "Hva varsler en opplysning om at gjerningspersonen var beruset?",
      options: ["At fiksjonsregelen må drøftes, både på skyldsiden og for skyldevnen — ikke at hun går fri", "At skyldevnen mangler, slik at straffansvaret uansett faller bort etter hovedregelen", "At forsettet ikke kan bevises, slik at forholdet i beste fall må bedømmes som uaktsomt", "At straffen skal settes ned, siden rus alltid regnes som en formildende omstendighet"],
      explanation: "Et signal er et spørsmål du må stille, ikke en konklusjon. Selvforskyldt rus fritar nettopp ikke: det ses bort fra uvitenhet som følge av slik rus, og forbigående utilregnelighet på grunn av den fritar ikke uten særlige grunner.",
    },
    {
      question: "Hvordan skal forsvarerens anførsler behandles i en besvarelse?",
      options: ["Hver anførsel oversettes til det vilkåret den treffer, og behandles under det vilkåret", "Anførslene gjennomgås i den rekkefølgen de står, med en vurdering av hver av dem", "Anførslene refereres innledningsvis og legges deretter til side, siden de er partsinnlegg", "Anførslene brukes som disposisjon, siden de peker ut de spørsmålene oppgavegiveren mener er tvilsomme"],
      explanation: "Anførslene er kompass og ikke disposisjon: de peker ut tvistepunktene og gir subsumsjonsmomenter, men de skal prøves rettslig under det vilkåret de treffer. Å følge dem som disposisjon bytter ut straffbarhetsvilkårene med partens argumentliste.",
    },
    {
      question: "Hva er den enkleste målingen på om du faktisk har subsumert?",
      options: ["Å telle hvor mange opplysninger fra faktum som står i drøftelsen din", "Å telle hvor mange paragrafer du har vist til med lov, nummer og ledd", "Å telle hvor mange avsnitt drøftelsen din har sammenlignet med regelgjennomgangen", "Å telle hvor mange ganger du har brukt ordet subsumsjon i teksten din"],
      explanation: "Subsumsjon er å holde det tolkede vilkåret opp mot faktums konkrete trekk, så antallet faktumopplysninger i drøftelsen er den direkte målingen. Antall paragrafer måler forankringen, ikke subsumsjonen — og ordet selv skal helst ikke stå der i det hele tatt.",
    },
    {
      question: "Hvorfor må stigen med straffbarhetsvilkår gjentas for hver gjerningsperson?",
      options: ["Fordi medvirkningsansvaret er selvstendig: hver enkelt vurderes for sin egen handling og sin egen skyld", "Fordi loven krever at det skrives en egen besvarelse for hver tiltalt i samme sak", "Fordi de to som regel har brutt ulike straffebud og derfor må behandles under hver sin paragraf", "Fordi skylden bare kan vurderes samlet dersom begge har vært til stede under hele hendelsen"],
      explanation: "Selvstendigheten er grunnen: skylden kan være forskjellig, og den enes fritak smitter ikke over. Det gjelder også når begge har brutt samme straffebud og vært til stede hele tiden — det er nettopp da sammenblandingen er lettest å begå.",
    },
    {
      question: "Materialet sier at riktig konklusjon ikke kreves. Hva betyr det i praksis?",
      options: ["At to motsatte landinger begge kan nå opp når begge er forankret, tolket og subsumert", "At kandidaten kan la være å konkludere, siden konklusjonen ikke inngår i vurderingen", "At kandidaten bør ta forbehold ved hver konklusjon for å unngå å låse seg til ett svar", "At sensor ikke leser konklusjonene, men bare vurderer hvor mange rettskilder som er brukt"],
      explanation: "Det betyr at kvaliteten på drøftelsen avgjør, og at et vippetilfelle kan landes begge veier. Det betyr ikke at konklusjonen kan utelates — en drøftelse uten landing er ufullstendig — og forbehold ved hver konklusjon svekker snarere enn styrker.",
    },
    {
      question: "Hva er den mest undervurderte kontrollen etter at et praktikum er skrevet?",
      options: ["Å gå tilbake til faktum og se om det står igjen opplysninger som ikke er brukt eller lagt til side", "Å telle antall ord i hver del for å kontrollere at delene er omtrent like lange", "Å sjekke at alle konklusjonene peker i samme retning, slik at besvarelsen er konsistent", "Å legge til en oppsummering til slutt som gjentar hva hvert avsnitt har konkludert med"],
      explanation: "Ubrukte opplysninger i faktum er nesten alltid et spørsmål du har oversett, siden et eksamensfaktum er kortet ned til det som skal brukes. Lik lengde er ikke et mål — proporsjonen skal følge tvilen — og konklusjoner som spriker, er helt normalt i en oppgave med flere spørsmål.",
    },
    {
      question: "Hvorfor sier materialet at sensor må se mildere på klønete struktur i praktikum?",
      options: ["Fordi oppgaveformen er ny og fremmed for kandidatene i et emne for ikke-jurister", "Fordi struktur ikke inngår blant vurderingskriteriene i fakultetets sensorveiledningsskjema", "Fordi hjelpemidlene er åpne og strukturen derfor kan hentes direkte fra pensumlitteraturen", "Fordi praktikumsoppgaver alltid er så omfattende at ingen kandidater rekker å disponere dem"],
      explanation: "Begrunnelsen er nivåforbeholdet: dette er et støtteemne for kandidater uten jusbakgrunn, og sjangeren er fremmed. Struktur er tvert imot et uttrykkelig kriterium i fakultetets skjema — poenget er at terskelen for akkurat denne gruppen ikke skal legges høyt.",
    },
  ],
  'juroff1500-8-4': [
    {
      question: "Hvor mange feil har registeret, og hvor mange sensorveiledninger er de destillert fra?",
      options: ["Seksten feil, destillert fra 6 sensorveiledninger som dekker terminene fra høsten 2020 og framover", "Seksten feil, destillert fra 34 sensorveiledninger som dekker hele perioden fra 2005 og framover", "Tolv feil, destillert fra 6 sensorveiledninger og fra oppgavetekstene i kortsvarsregimet", "Tjue feil, destillert fra de seks sensorveiledningene og fra fakultetets generelle vurderingsskjema"],
      explanation: "Registeret har nøyaktig seksten koder, og kildegrunnlaget er de 6 sensorveiledningene som finnes — alle fra høsten 2020 og senere. Det finnes ikke sensorveiledning for de 28 terminene før det, og fakultetets generelle skjema er en kilde til karakterkriteriene, ikke til feilregisteret.",
    },
    {
      question: "Hva er ærlighetsforbeholdet som skal stå ved dette registeret?",
      options: ["At ingen av veiledningene er skrevet etter at besvarelser er lest, slik at registeret er varslede forventninger og ikke observerte feil", "At veiledningene er skrevet av ulike sensorer og derfor kan motsi hverandre på flere punkter", "At registeret er satt sammen av oss og derfor ikke bygger på materialet i det hele tatt", "At feilene bare gjelder praktikumsoppgaver og derfor ikke har betydning for kortsvarssjangeren"],
      explanation: "Forbeholdet gjelder tidspunktet: veiledningene skrives før besvarelsene leses, og to av dem sier det uttrykkelig. Registeret er altså hva sensor har varslet skal trekke. Det er destillert fra materialet, og flere av feilene rammer nettopp kortsvarssjangeren.",
    },
    {
      question: "Hva skiller feil #1 fra feil #10?",
      options: ["Feil #1 er at fagstoffet ikke gjør arbeid, mens feil #10 er at arbeidet gjøres på det oppgaven avgrenset mot", "Feil #1 gjelder praktikumsoppgaver og feil #10 gjelder teorioppgaver, siden sjangrene har ulike krav", "Feil #1 gjelder for lange besvarelser og feil #10 for korte, siden de to har motsatt årsak", "Feil #1 gjelder gjengivelse av lovtekst og feil #10 gjengivelse av pensumlitteratur"],
      explanation: "Skillet er mellom stoffet og stedet: #1 er at redegjørelsen ikke brukes på noe, #10 er at den brukes på det oppgaven uttrykkelig avgrenset mot. En kandidat kan begå #10 med en helt selvstendig og god framstilling — den er bare ikke bestilt.",
    },
    {
      question: "En kandidat skriver: «Han så at det var mulig at pakken inneholdt narkotika, og dermed foreligger dolus eventualis.» Hvilken feil er det?",
      options: ["Feil #6 — tilleggsvilkåret om at han valgte å handle selv om det skulle være tilfellet, mangler", "Feil #2 — kandidaten blander uvitenhet om faktum med uvitenhet om rettsregelen", "Feil #1 — kandidaten gjengir forsettsdefinisjonen uten å bruke den på saken", "Feil #9 — kandidaten behandler en sammensatt vurdering som om den var et enkelt punkt"],
      explanation: "Riktig svar er feil #6: den tredje forsettsformen krever både at følgen ble holdt for mulig og at gjerningspersonen valgte å handle likevel. Uten tilleggsvilkåret er man i bevisst uaktsomhet. Her subsumeres det faktisk — subsumsjonen er bare halv, så det er ikke #1.",
    },
    {
      question: "Hva er testen for å skille nødverge fra nødrett?",
      options: ["Hvem handlingen rammer: den som selv angriper ulovlig, eller noe som tilhører en som ikke har gjort noe", "Hvor alvorlig faren var: en akutt fare gir nødverge, en mindre akutt fare gir nødrett", "Om faren kom fra et menneske eller fra noe annet, siden bare mennesker kan angripe ulovlig", "Om handlingen var nødvendig: er den nødvendig foreligger nødverge, ellers må nødrett vurderes"],
      explanation: "Testen er hvem handlingen rammer. Det er derfor angriperens skyld er et moment i forsvarlighetsvurderingen i nødvergebestemmelsen, og det er nettopp det momentet som mangler når den rammede er uskyldig. Verken farens alvor, dens kilde eller nødvendigheten avgjør valget av bestemmelse.",
    },
    {
      question: "Hva er testen for å plassere en regel i riktig kategori av de tre — straffrihet, straffritak eller straffbortfall?",
      options: ["Hva som skjer med selve handlingen: blir den lovlig, forblir den straffbar, eller faller adgangen til å straffe bort", "Hvor i loven regelen står: kapittel 3 gir straffrihet, kapittel 4 straffritak og kapittel 15 straffbortfall", "Om regelen bygger på lovtekst eller på ulovfestet rett, siden ulovfestede regler alltid gir straffrihet", "Om gjerningspersonen faktisk slipper straff i den konkrete saken, siden det er virkningen som er avgjørende"],
      explanation: "Skillet går på hva som skjer med handlingen, ikke på hvor regelen står eller hva som skjer med personen i den enkelte sak. Nettopp derfor har sondringen praktisk betydning: er handlingen lovlig, finnes det ingen overtredelse å medvirke til.",
    },
    {
      question: "Hvorfor er tilbaketredenens frivillighet ikke et spørsmål om anger?",
      options: ["Fordi frivillighet gjelder om gjerningspersonen hadde et reelt valg mellom flere handlingsalternativer slik hun så situasjonen", "Fordi anger alltid inntrer i ettertid, mens tilbaketreden alltid må skje mens handlingen fortsatt pågår", "Fordi motivet aldri har betydning i strafferetten, verken for skyld, straffrihet eller straffutmåling", "Fordi anger bare har betydning ved fullbyrdede lovbrudd og aldri ved forsøk på lovbrudd"],
      explanation: "Frivillighet gjelder valget, ikke motivet: det er ikke et krav at tilbaketredenen skjer av anger, og en handling foretatt i frykt for oppdagelse er ikke frivillig selv om den ser ut som en tilbaketreden. Motivet er ikke generelt uten betydning i strafferetten — det er bare uten betydning for dette vilkåret.",
    },
    {
      question: "Hvilke momenter inngår i vurderingen av forsøkets nedre grense?",
      options: ["Den tidsmessige nærheten mellom det som er gjort og det som gjenstår, handlingenes karakter, og den psykologiske forskjellen mellom dem", "Hvor alvorlig lovbruddet er, hvor stor skade det ville voldt, og hvor mye gjerningspersonen hadde forberedt", "Om gjerningspersonen var alene eller flere, om hun hadde med seg redskaper, og om hun hadde en fluktrute", "Om handlingen var påbegynt, om den kunne vært fullført, og om gjerningspersonen hadde tilstrekkelig forsett"],
      explanation: "De tre momentene er tidsmessig nærhet, handlingenes karakter og den psykologiske forskjellen mellom det som er gjort og det som gjenstår. De øvrige alternativene nevner forhold som kan ha betydning i andre sammenhenger, men de er ikke momentene i denne vurderingen — og feilen er nettopp å konstatere grensen uten momenter.",
    },
    {
      question: "Hvorfor skal det ikke telle mot at fornærmede i en mishandlingssak har opprettholdt kontakten?",
      options: ["Fordi følelsesmessig tilknytning og avhengighet er nettopp det bestemmelsen tar sikte på å ramme", "Fordi fornærmedes handlinger aldri kan tillegges vekt i en straffesak mot en annen person", "Fordi kontakten kan ha vært påtvunget, og det er umulig for retten å bringe på det rene", "Fordi bestemmelsen bare gjelder mellom personer som fortsatt bor sammen på pådømmelsestidspunktet"],
      explanation: "Begrunnelsen er at bestemmelsen er laget for relasjoner der tilknytning og avhengighet gjør det vanskelig å bryte ut — fortsatt kontakt er derfor et typisk trekk ved forholdene, ikke et argument mot dem. Det er ikke slik at fornærmedes handlinger aldri kan ha betydning; det er dette momentet som er utpekt som utenforliggende.",
    },
    {
      question: "Hva er de to sidene ved feil #14?",
      options: ["Å bruke et 1902-nummer som gjeldende, og å behandle 1902-loven som opphevet i alle henseender", "Å bruke feil paragraf innenfor riktig lov, og å bruke riktig paragraf innenfor feil kapittel", "Å bruke straffeloven når spesiallovgivningen gjelder, og å bruke spesiallovgivningen når straffeloven gjelder", "Å bruke norsk rett på et utenlandsk forhold, og å bruke utenlandsk rett på et norsk forhold"],
      explanation: "Begge sidene er like gale: nummeret fra den gamle loven finnes ikke i Lovdata, men rettskildene til en videreført bestemmelse er fortsatt relevante for tolkningen av den nye. Lovvalget selv avgjøres av bestemmelsen om straffelovgivningens virkeområde i tid.",
    },
    {
      question: "Hva er varsellampen for feil #15?",
      options: ["Du har en referanse du ikke kunne funnet igjen i Lovdata på to minutter", "Du har oppgitt flere kilder enn oppgaven ba om, slik at framstillingen blir uoversiktlig", "Du har brukt en kilde som er eldre enn ti år, slik at rettstilstanden kan ha endret seg", "Du har henvist til pensumlitteraturen uten å oppgi sidetall for henvisningen"],
      explanation: "Varsellampen gjelder etterprøvbarheten: en referanse du ikke kan gjenfinne, er en referanse sensor kan sjekke — og fra høsten 2026 kreves korrekte kildehenvisninger. Verken antall kilder, kildenes alder eller mangel på sidetall er det feilen handler om.",
    },
    {
      question: "Hva er forskjellen på feil #5 og feil #16?",
      options: ["Feil #5 er en proporsjonsfeil inne i ett svar, mens feil #16 er en dekningsfeil mellom flere svar", "Feil #5 gjelder praktikum og feil #16 gjelder kortsvar, siden sjangrene har ulike tidskrav", "Feil #5 gjelder for korte besvarelser og feil #16 for lange, siden årsakene er motsatte", "Feil #5 gjelder valget av hjemmel og feil #16 valget av hvilke spørsmål som skal besvares"],
      explanation: "Begge er fordelingsfeil, men på ulikt nivå: #5 er at det klare tar plassen fra det tvilsomme inne i ett svar, #16 er at et helt spørsmål blir stående ubesvart. Den ene koster dybden i ett svar, den andre koster hele svaret.",
    },
    {
      question: "En kandidat skriver at trakassering uten fysisk kontakt er «vold» etter kroppskrenkelsesbestemmelsen. Hvilken feil er det?",
      options: ["Feil #11 — vold i den bestemmelsen forutsetter en fysisk kraftanvendelse mot en annens legeme", "Feil #12 — kandidaten tror at gjentatt kritikkverdig atferd uten videre er mishandling", "Feil #13 — kandidaten legger vekt på et forhold ved fornærmede som ikke skal telle", "Feil #4 — kandidaten plasserer regelen i feil kategori av straffrihet og straffritak"],
      explanation: "Riktig svar er feil #11: kroppskrenkelsesbestemmelsen krever et fysisk element, mens mishandlingsbestemmelsen også rammer rent psykiske krenkelser. Feil #12 ville forutsatt at kandidaten hadde valgt riktig bestemmelse og bommet på terskelen i den — her er selve bestemmelsen feil.",
    },
    {
      question: "Hva er den beste motgiften mot feil #1 i et praktikum?",
      options: ["Å telle hvor mange opplysninger fra faktum som faktisk står i drøftelsen din", "Å unngå å bruke pensumlitteraturens begreper og i stedet forklare alt med egne ord", "Å korte ned regelgjennomgangen til under halvparten av besvarelsens samlede lengde", "Å oppgi kilde med forfatter og verk hver gang du gjengir noe fra pensumlitteraturen"],
      explanation: "Målingen er direkte: står det ingen opplysninger fra faktum i drøftelsen, har du skrevet en lærebok. Å unngå fagbegrepene ville gjort besvarelsen dårligere, og en kildeangivelse løser ikke problemet — gjengivelsen er like ubrukt med kilde som uten.",
    },
    {
      question: "Hvorfor er registeret karakterforsikring og ikke karakterløft?",
      options: ["Fordi en besvarelse uten feil, men også uten selvstendig vurdering, lander på C", "Fordi feilene bare påvirker den formelle vurderingen og ikke den faglige delen av karakteren", "Fordi sensor bare bruker registeret til å skille bestått fra ikke bestått, og ikke høyere opp", "Fordi hver enkelt feil gir et fast poengtrekk som er uavhengig av besvarelsens øvrige kvalitet"],
      explanation: "Å unngå feil hindrer at karakteren trekkes ned, men det som løfter, er vurderingsevne og selvstendighet — som er aksen gjennom hele skalaen. Registeret gir verken faste poengtrekk eller en egen formell vurdering; det beskriver hva som er varslet skal koste.",
    },
    {
      question: "Hvilke fire varsellamper lønner det seg å sjekke først, uansett sjanger?",
      options: ["#1, #5, #14 og #16 — gjengivelse, proporsjon, feil straffelov og ubesvarte spørsmål", "#2, #3, #4 og #6 — de fire forvekslingsfeilene, siden de gir svar på et annet spørsmål", "#7, #8, #9 og #11 — de fire feilene som er knyttet til bestemte straffebud og læresetninger", "#11, #12, #13 og #15 — de fire feilene som er hjemlet i den nyeste sensorveiledningen"],
      explanation: "De fire første er valgt fordi de rammer alle sjangre og fordi tre av dem koster ingenting å rette hvis de oppdages i tide. Forvekslingsfeilene er dyre, men de er tema-avhengige — de dukker bare opp der det aktuelle begrepsparet er i spill.",
    },
    {
      question: "Hvorfor skal ikke feilkodene skrives i selve besvarelsen?",
      options: ["Fordi numrene er bokas eget henvisningssystem og ikke fagspråk noen sensor spør etter", "Fordi det regnes som en kildehenvisning og derfor må ledsages av forfatter og sidetall", "Fordi det ville avsløre hvilken lærebok kandidaten har brukt, og det er ikke tillatt", "Fordi kodene endrer nummer fra termin til termin og derfor ville blitt misforstått"],
      explanation: "Numrene er bokas interne henvisninger. Å skrive «her ville jeg unngått feil nummer fem» er dessuten å skrive om sin egen besvarelse i stedet for om saken. Det er ikke forbudt å oppgi hvilken litteratur man har brukt — tvert imot skal kildegrunnlaget framgå.",
    },
    {
      question: "Hva kjennetegner den kalde banken til slutt i kapitlet?",
      options: ["Utdragene kommer uten hint og uten angivelse av hvilken familie feilen tilhører", "Utdragene er hentet fra virkelige besvarelser i stedet for å være skrevet for boka", "Utdragene inneholder flere feil hver, slik at kandidaten må rangere dem etter alvor", "Utdragene skal besvares på tid, med en fast grense på tre minutter per utdrag"],
      explanation: "Den kalde banken fjerner begge ledetrådene — ingen hint, og ingen overskrift som forteller hvilken familie du er i. Det speiler eksamenssituasjonen, der feilen dukker opp i din egen tekst uten etikett. Alle utdragene i kapitlet er skrevet av oss, også de fire siste.",
    },
  ],
  'juroff1500-8-5': [
    {
      question: "Hvorfor er spørsmålet i dette faktumet forsøk og ikke fullbyrdet tyveri?",
      options: ["Fordi ingen gjenstand ble tatt — verktøyet lå bak en låst ståldør som ikke ble åpnet", "Fordi gjerningspersonene aldri kom seg inn på området der verktøyet var lagret", "Fordi verdien av det de skulle ta, ikke er opplyst og gjerningsbeskrivelsen derfor ikke er dekket", "Fordi de kjørte fra stedet før politiet kom, slik at handlingen ble avbrutt utenfra"],
      explanation: "Tyveribestemmelsen krever at noen tar en gjenstand som tilhører en annen, og ingen gjenstand ble tatt. De kom derimot godt inn på området — porten ble åpnet og Mikkel gikk inn i bygget — og verken verdien eller om noen kjørte fra stedet, har betydning for om lovbruddet er fullbyrdet.",
    },
    {
      question: "Hvilke momenter inngår i vurderingen av forsøkets nedre grense?",
      options: ["Den tidsmessige nærheten mellom det gjorte og det gjenstående, handlingenes karakter, og den psykologiske forskjellen mellom dem", "Hvor alvorlig lovbruddet ville vært, hvor stor vinning gjerningspersonen ventet, og hvor godt planlagt handlingen var", "Om gjerningspersonen var alene, om hun hadde med seg redskaper, og om hun hadde sikret seg en fluktmulighet", "Om handlingen kunne ha lyktes, om den ble avbrutt utenfra, og om gjerningspersonen angret i ettertid"],
      explanation: "De tre momentene er tidsmessig nærhet, handlingenes karakter og den psykologiske forskjellen. Planlegging, redskaper og fluktmulighet kan være subsumsjonsmomenter innenfor disse, men de er ikke selve vurderingstemaet — og om handlingen kunne ha lyktes, hører til spørsmålet om utjenlig forsøk.",
    },
    {
      question: "Hva er forskjellen på et ufullendt og et fullendt forsøk?",
      options: ["Ved et ufullendt forsøk gjenstår det noe gjerningspersonen selv må gjøre; ved et fullendt har hun gjort alt sitt og venter på resultatet", "Ved et ufullendt forsøk er den nedre grensen ikke passert, mens den er passert ved et fullendt forsøk", "Ved et ufullendt forsøk mangler fullbyrdelsesforsett, mens forsettet er komplett ved et fullendt forsøk", "Ved et ufullendt forsøk er lovbruddet umulig å gjennomføre, mens det er mulig ved et fullendt forsøk"],
      explanation: "Skillet gjelder hvor langt gjerningspersonen er kommet i sin egen plan, og det avgjør hva en tilbaketreden må bestå i: å avstå er nok ved et ufullendt forsøk, mens et fullendt krever aktiv avverging. Den nedre grensen og forsettet er egne spørsmål som stilles før dette.",
    },
    {
      question: "Hva kreves for at en tilbaketreden skal være frivillig?",
      options: ["Et reelt og bevisst valg i en situasjon der flere handlingsalternativer står åpne slik gjerningspersonen selv ser den", "At tilbaketredenen skjer av anger eller andre høyverdige grunner, slik at motivet er aktverdig", "At gjerningspersonen melder fra til politiet eller til fornærmede før lovbruddet blir oppdaget", "At tilbaketredenen skjer før den nedre grensen er passert, slik at forsøket aldri ble straffbart"],
      explanation: "Frivillighet gjelder valget, ikke motivet: det er uttrykkelig ikke et krav at tilbaketredenen skjer av anger. Melding til politiet er ikke noe vilkår, og skjer tilbaketredenen før den nedre grensen er passert, er det ingen tilbaketreden å vurdere — da forelå det aldri et forsøk.",
    },
    {
      question: "Sander forklarer både at han «ble kvalm» og at han «syntes han hørte en bil». Hvorfor er de to forklaringene rettslig forskjellige?",
      options: ["Kvalmen stengte ingen dør for ham, mens frykt for oppdagelse gjør at alternativene ikke sto åpne slik han så det", "Kvalmen er et fysisk forhold og derfor uten betydning, mens lyden er et bevis som må vurderes av retten", "Kvalmen viser at han angret, og anger er et vilkår for tilbaketreden, mens frykt er et uaktverdig motiv", "Kvalmen kom først og lyden etterpå, og det er den siste årsaken i tid som er rettslig avgjørende"],
      explanation: "Forskjellen ligger i om valget var reelt: et indre ubehag lar alternativene stå åpne, mens frykt for oppdagelse fjerner dem slik gjerningspersonen ser situasjonen. Anger er ikke noe vilkår, og rekkefølgen i tid er ikke avgjørende — det er hva som faktisk drev ham.",
    },
    {
      question: "Hva må være oppfylt for at Nora skal ha forsett i den tredje forsettsformen?",
      options: ["Både at hun holdt det for mulig at bilen skulle brukes til et lovbrudd, og at hun valgte å låne den ut selv om det skulle være tilfellet", "Bare at hun holdt det for mulig at bilen skulle brukes til et lovbrudd, siden mulighetsforståelsen er kjernen i formen", "At hun holdt det for mest sannsynlig at bilen skulle brukes til et lovbrudd, og at hun ikke undersøkte nærmere", "At hun ønsket at lovbruddet skulle skje, og at utlånet av bilen var et bidrag til at det ble gjennomført"],
      explanation: "Den tredje formen har to vilkår: mulighetsforståelsen og den positive innvilgelsen. Stopper man ved det første, er man i bevisst uaktsomhet. Krav om at noe holdes for mest sannsynlig hører til den andre forsettsformen, og et ønske om at lovbruddet skal skje, er hensiktsforsett.",
    },
    {
      question: "Hvilken virkning har Sanders rus for skyldvurderingen?",
      options: ["Ingen — det ses bort fra uvitenhet som følge av selvforskyldt rus, og han bedømmes som om han hadde vært edru", "Rusen utelukker forsett, slik at forholdet i beste fall kan bedømmes som uaktsomt fra hans side", "Rusen gjør ham utilregnelig, slik at straffansvaret faller bort etter reglene om skyldevne", "Rusen er en formildende omstendighet som får betydning ved straffutmålingen, men ikke for skylden"],
      explanation: "Fiksjonsregelen gjør at han bedømmes som edru, så rusen kan ikke forklare bort noe han ellers ville forstått. Vanlig beruselse gjør ingen utilregnelig, og selv forbigående utilregnelighet som følge av selvforskyldt rus fritar ikke uten særlige grunner.",
    },
    {
      question: "Hva var den avgjørende grunnen til at C-besvarelsen ikke ble en B?",
      options: ["Den behandlet de to på stedet under ett og mistet dermed hele spørsmålet om tilbaketreden", "Den var for kort, og lengden alene gjorde at framstillingen ikke kunne vurderes høyere", "Den konkluderte annerledes enn A-besvarelsen på spørsmålet om Noras straffansvar", "Den oppga ikke hvilken pensumlitteratur den bygget på, slik at kildegrunnlaget ikke framgikk"],
      explanation: "Sammenblandingen av de to skjulte at den ene snudde, og dermed forsvant ett av oppgavens to tyngdepunkter — å finne fram til problemstillingene er et selvstendig kriterium. Lengden er ikke problemet, og ulik konklusjon er uten betydning når drøftelsen er god.",
    },
  ],
  'juroff1500-8-6': [
    {
      question: "Hvilke tre hensyn begrunner det strafferettslige legalitetsprinsippet?",
      options: ["Forutberegnelighet for den enkelte, demokratisk forankring av straffebudene, og maktfordeling mellom lovgiver og domstol", "Rettferdig straffutmåling, likebehandling mellom kandidater i samme sak, og effektiv håndheving av straffebudene", "Vern av fornærmede, allmennprevensjon overfor andre borgere, og individualprevensjon overfor gjerningspersonen", "Rettsenhet mellom domstolene, forutsigbar saksbehandling, og adgang til å anke avgjørelser til høyere instans"],
      explanation: "De tre hensynene er forutberegnelighet, demokratisk forankring og maktfordeling, og de peker mot samme resultat fra hver sin kant. De øvrige alternativene nevner reelle hensyn i strafferetten — prevensjonshensynene og rettsenheten — men de begrunner straffen og domstolsordningen, ikke lovkravet.",
    },
    {
      question: "Hvor er legalitetsprinsippet rettslig forankret?",
      options: ["I Grunnloven § 96, i EMK art. 7 og i straffeloven § 14 — altså på tre nivåer", "Bare i Grunnloven § 96, siden et krav av denne typen må ha grunnlovs rang for å binde lovgiveren", "Bare i straffeloven § 14, siden straffeloven er den loven som regulerer straffansvaret", "I ulovfestet rett utviklet av Høyesterett, siden ingen lovtekst uttrykkelig nevner kravet"],
      explanation: "Kravet står tre steder og på tre nivåer, og det er nettopp derfor det ikke kan settes til side av lovgiveren med en alminnelig lov. Grunnloven alene ville gitt rang, men ikke den koblingen til praksis fra menneskerettsdomstolen som konvensjonsbestemmelsen gir.",
    },
    {
      question: "Hva er forskjellen på klarhetskravet og analogiforbudet?",
      options: ["Klarhetskravet gjelder hvordan bestemmelsen er skrevet, mens analogiforbudet gjelder hva rettsanvenderen kan gjøre med den", "Klarhetskravet gjelder straffebud i lov, mens analogiforbudet bare gjelder bestemmelser gitt i forskrift", "Klarhetskravet gjelder til fordel for den tiltalte, mens analogiforbudet gjelder til skade for henne", "Klarhetskravet følger av Grunnloven, mens analogiforbudet bare følger av menneskerettskonvensjonen"],
      explanation: "Skillet går på hvem kravet retter seg mot: lovgiveren skriver bestemmelsen klart nok, rettsanvenderen strekker den ikke ut over det ordlyden bærer. Begge sidene har grunnlag både i Grunnloven og i konvensjonen, og begge verner den tiltalte.",
    },
    {
      question: "Hva skiller utvidende tolkning fra analogisk anvendelse?",
      options: ["Utvidende tolkning holder seg innenfor det ordlyden kan bære, mens analogisk anvendelse går utenfor og begrunner resultatet med likhet", "Utvidende tolkning brukes til fordel for den tiltalte, mens analogisk anvendelse alltid brukes til skade for henne", "Utvidende tolkning gjøres av lovgiveren i forarbeidene, mens analogisk anvendelse gjøres av domstolen i dommen", "Utvidende tolkning bygger på formålet med bestemmelsen, mens analogisk anvendelse bygger på ordlyden alene"],
      explanation: "Grensen går ved ordlyden: det første velger den videste av flere mulige lesninger, det andre går utenfor og begrunner med at forholdet ligner. I strafferetten er det første tillatt med varsomhet, det andre forbudt til skade for den tiltalte — og grensen er ikke skarp, som er nettopp derfor den prøves.",
    },
    {
      question: "Hva viser sammenstillingen av Passbåtdommen og Elvebåtdommen?",
      options: ["At formålet kan strekke et ord som «skip», men ikke ubegrenset — og at de to sakene om samme uttrykk faller ulikt ut", "At Høyesterett har endret syn på om beruselse i sjøtrafikken i det hele tatt kan straffes", "At en liten båt alltid faller utenfor bestemmelser om skip, uansett hvilket formål bestemmelsen har", "At formålsbetraktninger ikke har noen plass i tolkningen av straffebud, siden ordlyden alltid er avgjørende"],
      explanation: "De to sakene gjelder samme ord og faller ulikt ut, og det er avstanden mellom dem som viser hvor grensen ligger. Formålet fikk avgjørende vekt i den ene, men strakk ikke til i den andre — formålsbetraktninger er altså verken uten betydning eller ubegrenset.",
    },
    {
      question: "Hva menes med gjenbruksregelen i en flerdelt oppgave?",
      options: ["At en redegjørelse fra ett underspørsmål gir uttelling også senere, forutsatt at den trekkes eksplisitt inn og ikke gjentas", "At kandidaten kan besvare to underspørsmål samlet dersom de gjelder beslektede temaer i samme oppgave", "At kandidaten kan bruke samme eksempel flere ganger for å spare tid i et batteri av korte spørsmål", "At en redegjørelse teller bare én gang, slik at det ikke lønner seg å nevne den under et senere underspørsmål"],
      explanation: "Regelen er at koblingen må skrives ut: «sondringen fra a) gjør arbeid også her, fordi …». Å gjenta framstillingen bruker tiden to ganger på samme sted, og å slå to underspørsmål sammen uten videre går ut over dekningen, som er terskelen i denne sjangeren.",
    },
    {
      question: "Hva innebærer det å si noe om vekten av en avgjørelse?",
      options: ["Å plassere den i rettskildebildet — hvilken domstol, hvilken sammensetning, hvor sentralt spørsmålet sto, og hvor godt begrunnet den er", "Å oppgi hvor mange ganger avgjørelsen er blitt fulgt opp av senere avgjørelser fra samme domstol", "Å angi hvor lang avgjørelsen er og hvor mange avsnitt som gjelder det spørsmålet oppgaven reiser", "Å ta forbehold om at avgjørelsen kanskje ikke er relevant, slik at leseren vet at kandidaten er usikker"],
      explanation: "Vektangivelsen sier presist hva avgjørelsen kan og ikke kan brukes til — en kjennelse fra ankeutvalget i et fengslingsspørsmål veier mindre enn en dom i avdeling om straffespørsmålet. Det er noe annet enn et forbehold, som bare signaliserer usikkerhet uten å tilføre noe.",
    },
    {
      question: "Hva var den avgjørende grunnen til at C-besvarelsen ikke ble en B?",
      options: ["De tre delene møttes aldri, og de tre dommene sto som en oppramsing uten å gjøre arbeid", "Den utelot ett av de tre underspørsmålene i teorioppgaven og oppfylte derfor ikke dekningskravet", "Den brukte feil hjemmel for legalitetsprinsippet og forvekslet Grunnloven med menneskerettskonvensjonen", "Den konkluderte annerledes enn A-besvarelsen på spørsmålet om hvor skranken går for tolkningen"],
      explanation: "C-besvarelsen dekker alle delene og har riktige hjemler — svakheten er at den viser kunnskap uten å vise sammenheng, og at dommene bare navngis. Dekningen er i orden, og en teorioppgave av denne typen har ingen konklusjon å være uenig i.",
    },
  ],
  'juroff1500-8-7': [
    {
      question: "Hva er kjent om eksamensformen fra høsten 2026, og hva er ikke kjent?",
      options: ["Kjent er fire timers digital skoleeksamen med Lovdata Pro og krav om korrekte kildehenvisninger; ukjent er oppgavestrukturen og vektingen", "Kjent er både oppgavestrukturen og vektingen; ukjent er bare hvilke temaer settet vil dekke det første året", "Kjent er at settet vil bestå av seks til ti korte spørsmål; ukjent er hvor lang tid kandidatene får til rådighet", "Kjent er at hjemmeeksamensformen videreføres; ukjent er om kildehenvisningskravet vil bli håndhevet i praksis"],
      explanation: "Form, varighet, hjelpemidler og kildehenvisningskravet er kjent, mens ingen sett i den nye formen finnes ennå — derfor er verken struktur eller vekting kjent. At settet skulle ha et bestemt antall korte spørsmål, er en antakelse boka ikke har belegg for, og hjemmeeksamensformen er nettopp forlatt.",
    },
    {
      question: "Hvorfor oppgir ikke boka noen vekting mellom de to oppgavene i generalprøven?",
      options: ["Fordi vektingen i materialet har snudd — en fjerdedel på teori, deretter tre fjerdedeler, og til slutt todelingen forlatt — og derfor ikke kan antas", "Fordi vektingen aldri har vært oppgitt i noe sett i dette emnet, og kandidatene alltid har måttet utlede den selv", "Fordi vektingen fastsettes av den enkelte sensor etter at besvarelsene er lest, og derfor varierer mellom kandidatene", "Fordi vektingen ikke har betydning når konklusjonen uansett ikke er avgjørende for vurderingen av besvarelsen"],
      explanation: "Vektingen har snudd fullstendig gjennom praktikumsregimet og ble til slutt forlatt, så den kan ikke antas — det er nettopp derfor du skal lese den ut av oppgaveteksten hver gang. Den har vært oppgitt i flere sett, og den fastsettes av oppgavegiveren, ikke av sensor.",
    },
    {
      question: "Hva innebærer det at et punkt i prioriteringsfasiten er merket «må»?",
      options: ["At punktet bærer bestått — uten det er besvarelsen ikke dekkende på det spørsmålet", "At punktet gir toppkarakter alene dersom det er grundig og godt begrunnet behandlet", "At punktet må behandles først i besvarelsen, før alle punktene som er merket pluss", "At punktet er et sitat fra sensorveiledningen og derfor må gjengis med kildehenvisning"],
      explanation: "Må-punktene er terskelen, pluss-punktene er det som løfter, og feller er det som koster. Rekkefølgen i besvarelsen bestemmes av straffbarhetsvilkårene, ikke av kodene — og kodene er bokas eget verktøy, ikke gjengivelser fra noen kilde.",
    },
    {
      question: "En oppgavetekst viser til en bestemmelse fra straffeloven av 1902. Hva er riktig behandling?",
      options: ["Å slå fast at nummeret ikke gjelder i dag, og samtidig vurdere om de eldre rettskildene fortsatt er relevante for den videreførte bestemmelsen", "Å bruke det gamle nummeret, siden det er dette nummeret oppgaveteksten selv viser til i saken", "Å avvise hele henvisningen som irrelevant, siden straffeloven av 1902 er opphevet i alle henseender", "Å behandle det som et spørsmål om rettsuvitenhet, siden partene har tatt feil av hvilken regel som gjelder"],
      explanation: "Feilen har to sider som er like gale: å bruke det gamle nummeret, og å avvise de eldre kildene. Er bestemmelsen videreført uten realitetsendring, er forarbeider og praksis til den fortsatt relevante for tolkningen. En partsanførsel om feil paragraf er ikke et spørsmål om rettsuvitenhet hos noen gjerningsperson.",
    },
    {
      question: "En person slår fordi hun feilaktig tror hun er i ferd med å bli angrepet. Hvor ligger løsningen?",
      options: ["På skyldsiden: hun bedømmes etter sin oppfatning av den faktiske situasjonen, jf. straffeloven § 25 første ledd", "I nødvergebestemmelsen: straffeloven § 18 anvendes direkte, siden hun handlet for å avverge et angrep", "I rettsuvitenhetsbestemmelsen: straffeloven § 26, siden hun tok feil av hva hun hadde lov til", "I nødrettsbestemmelsen: straffeloven § 17, siden handlingen rammet en som ikke hadde gjort noe galt"],
      explanation: "Uten et objektivt angrep kan nødvergebestemmelsen ikke anvendes direkte — men den mistolkede situasjonen slår inn på skyldsiden gjennom regelen om faktisk uvitenhet. Hun tok feil av situasjonen, ikke av regelen, så rettsuvitenhet er feil inngang, og nødretten gjelder en helt annen type situasjon.",
    },
    {
      question: "Hva følger av straffeloven § 25 annet ledd når en faktisk villfarelse er uaktsom?",
      options: ["Handlingen straffes når uaktsomt lovbrudd er straffbart — altså må det finnes et uaktsomt alternativ som rammer forholdet", "Handlingen straffes alltid, siden uaktsomhet er tilstrekkelig skyld når villfarelsen kunne vært unngått", "Handlingen straffes ikke, siden uvitenheten uansett fjerner forsettet og forsett er hovedregelen", "Handlingen straffes med nedsatt straff etter reglene om formildende omstendigheter ved straffutmålingen"],
      explanation: "Bestemmelsen forutsetter at det finnes et uaktsomt alternativ — er handlingen bare straffbar i forsettlig form, fører uaktsom villfarelse til frifinnelse. Den gir verken automatisk straff eller automatisk frifinnelse, og den gjelder skyldspørsmålet, ikke utmålingen.",
    },
    {
      question: "Hvilke regler slår inn på reaksjonssiden når gjerningspersonen var 17 år på handlingstidspunktet?",
      options: ["Straffeloven § 33 om at ubetinget fengsel bare kan idømmes når det er særlig påkrevd, §§ 78 og 80 om formildende omstendigheter og straffnedsettelse, og kapittel 8 a om ungdomsstraff", "Straffeloven § 20 første ledd om at hun ikke er strafferettslig ansvarlig, slik at spørsmålet om reaksjon ikke oppstår", "Straffeloven § 3 om lovvalg i tid, siden reglene for mindreårige har endret seg flere ganger i perioden", "Straffeloven §§ 86 og 87 om foreldelse, siden fristene løper annerledes for lovbrytere under 18 år"],
      explanation: "Over den kriminelle lavalderen er ansvaret i behold, og alderen flytter seg til reaksjonssiden — der begrensningen i bruk av ubetinget fengsel, straffnedsettelsen og ungdomsstraffen slår inn. Bestemmelsen om lavalder ville bare frita en som var under 15 år.",
    },
    {
      question: "Hva er den mest oversette delen av oppgaveteksten i praktikumsdelen av dette settet?",
      options: ["Setningen om at det også skal tas stilling til hvilken reaksjon som eventuelt kan idømmes", "Opplysningen om at gjerningspersonen tidligere var blitt slått ned på samme sted", "Angivelsen av hvor mange vitner som har forklart seg om hendelsesforløpet", "Opplysningen om hvilken by hendelsen fant sted i og hvilken ukedag det var"],
      explanation: "Reaksjonsspørsmålet står i siste setning og er ett av fem punkter, og det overses lettest av dem som konkluderer med frifinnelse — det føles da unødvendig, men oppgaven ber om det. Forhistorien og vitneforklaringene er derimot subsumsjonsmomenter som de fleste faktisk bruker.",
    },
  ],
};

export default quizData_juroff1500;
