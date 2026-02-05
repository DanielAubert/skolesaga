/* eslint-disable */
// @ts-nocheck

/**
 * Eksamenstrening for Norsk VG1
 *
 * Dette kapitlet gir deg trening i eksamensrelevante oppgavetyper
 * og veiledning for eksamensforberedelse basert på LK20-kompetansemål.
 */

export const EKSAMENSTRENING_NORSK_VG1 = {
  omEksamen: {
    info: `Norskeksamen på VG1 er en lokal gitt eksamen som arrangeres av den enkelte skole.
Eksamen tester din evne til å lese, tolke og skrive tekster innenfor ulike sjangre.
Du skal vise at du kan reflektere over språk, litteratur og kommunikasjon.

Eksamen består vanligvis av en skriftlig del som varer i 5 timer. Du får velge mellom
flere oppgaver, og oppgavene er knyttet til vedlagte tekster eller temaer du har
arbeidet med i løpet av skoleåret.

I LK20 legges det vekt på dybdelæring og tverrfaglige temaer som demokrati og
medborgerskap, bærekraftig utvikling og folkehelse og livsmestring. Disse temaene
kan dukke opp i eksamensoppgavene.`,
    struktur: [
      'Forberedelsesdag: Dagen før eksamen får du tilgang til tekstvedlegg og tema. Du kan forberede deg hjemme eller på skolen, og du kan ta med notater til eksamen.',
      'Skriftlig eksamen (5 timer): Du velger mellom flere oppgaver. Oppgavene kan være kortsvar, langsvar eller en kombinasjon.',
      'Kortsvaroppgaver: Tester evnen til å lese nøyaktig og svare presist. Vanligvis 1-2 sider.',
      'Langsvaroppgaver: Krever mer utdypende svar, analyse eller drøfting. Vanligvis 3-5 sider.',
      'Kreative oppgaver: Kan inkludere skriving av novelle, kåseri eller andre skjønnlitterære tekster.'
    ],
    tips: [
      'Les oppgaveteksten nøye flere ganger før du begynner å skrive.',
      'Lag en disposisjon før du starter på langsvaroppgaver.',
      'Bruk forberedelsesdagen aktivt til å analysere vedleggstekster og lage notater.',
      'Sett av tid til korrekturlesing på slutten av eksamen.',
      'Ha oversikt over fagbegreper og kunne bruke dem i analyse.',
      'Øv på å skrive innenfor tidsrammer.'
    ]
  },

  kortsvar: [
    {
      id: 'k1',
      oppgave: `Les teksten "Sosiale medier og demokratiet" (vedlegg A).

a) Hva er tekstens hovedsynspunkt? (1 setning)
b) Hvilke retoriske virkemidler bruker forfatteren for å overbevise leseren? Gi to eksempler med sitat.
c) Hvem er tekstens målgruppe, og hvordan tilpasser forfatteren språket til denne målgruppen?`,
      losning: `a) Tekstens hovedsynspunkt er at sosiale medier både styrker og truer demokratiet, og at vi trenger bedre regulering og mediekritisk kompetanse.

b) Retoriske virkemidler:
1. Retoriske spørsmål: "Kan vi stole på informasjonen vi finner på nettet?" Dette virkemiddelet engasjerer leseren og får dem til å reflektere over temaet.
2. Patos-appell: "Unge mennesker drukner i desinformasjon" - dette vekker følelser og bekymring hos leseren.

c) Målgruppen er unge voksne og studenter som er aktive på sosiale medier. Forfatteren tilpasser språket ved å:
- Bruke eksempler fra plattformer som TikTok og Instagram
- Ha et uformelt, men saklig språk
- Unngå for komplisert fagterminologi`,
      poeng: 6
    },
    {
      id: 'k2',
      oppgave: `Sammenlign språket i de to tekstene (vedlegg B og C).

a) Pek på to språklige forskjeller mellom tekstene.
b) Hvordan påvirker sjangeren språket i hver av tekstene?
c) Hvilken av tekstene er mest effektiv til å nå sitt formål? Begrunn svaret.`,
      losning: `a) Språklige forskjeller:
1. Ordvalg: Tekst B (kronikken) bruker fagtermer og komplekse setninger, mens tekst C (reklameteksten) bruker korte, slagordaktige setninger og følelsesladde ord.
2. Setningsstruktur: Tekst B har lange, sammensatte setninger med mange leddsetninger. Tekst C har korte, direkte setninger som ofte mangler subjekt ("Opplev friheten!").

b) Sjangeren påvirker språket slik:
- Kronikken (B) skal informere og argumentere, noe som krever et saklig og balansert språk med dokumentasjon og eksempler.
- Reklameteksten (C) skal overtale og selge, noe som krever et appellerende språk med fokus på følelser og fordeler.

c) Tekst C er mest effektiv til å nå sitt formål fordi reklame handler om å skape umiddelbar respons. De korte, slagkraftige setningene og de positive følelsene teksten vekker, gjør at leseren raskt får et positivt inntrykk av produktet.`,
      poeng: 8
    },
    {
      id: 'k3',
      oppgave: `Les diktet "Hjemkomst" av Rolf Jacobsen (vedlegg D).

a) Hvilke litterære virkemidler finner du i diktet? Nevn minst tre med eksempler.
b) Hva kan "hjemkomst" symbolisere i diktet?
c) Hvordan bidrar formen (verselinjer, rytme, rim) til diktets stemning?`,
      losning: `a) Litterære virkemidler:
1. Personifikasjon: "Trærne vinker velkommen" - trærne får menneskelige egenskaper.
2. Metafor: "Veien hjem er et bånd" - veien sammenlignes med noe som binder sammen.
3. Gjentakelse: "Hjem, hjem, hjem" - forsterker lengselen og det sentrale temaet.
4. Besjeling: "Huset puster" - huset får liv og menneskelighet.

b) "Hjemkomst" kan symbolisere:
- Tilhørighet og røtter
- Tilbakevending til barndommen eller fortiden
- Forsoning med seg selv eller familien
- Døden som en slags hjemkomst (eksistensiell tolkning)

c) Formen bidrar til stemningen ved:
- Korte verselinjer skaper pauser som mimer pustende lettelse
- Fravær av enderim gir en uformell, samtaleaktig tone
- Rytmen akselererer mot slutten, som speiler følelsen av å nærme seg hjemmet`,
      poeng: 7
    },
    {
      id: 'k4',
      oppgave: `Forklar følgende begreper og gi et eksempel på hvert:

a) Vinkling
b) Implisitt leser
c) Multimodalitet`,
      losning: `a) Vinkling:
Definisjon: Vinkling handler om hvordan en tekst fremstiller et tema eller en hendelse. Valg av perspektiv, fokus og kildebruk påvirker hvordan leseren oppfatter innholdet.

Eksempel: En nyhetssak om ulvejakten kan vinkles fra bøndenes perspektiv ("Ulven truer livsgrunnlaget vårt") eller fra miljøvernernes perspektiv ("Ulven er truet og trenger vern"). Samme hendelse fremstilles ulikt.

b) Implisitt leser:
Definisjon: Den tenkte leseren som teksten henvender seg til. Forfatteren skriver med en bestemt mottaker i tankene og tilpasser språk, innhold og stil etter denne.

Eksempel: En artikkel i bladet "Illustrert Vitenskap" har en implisitt leser som er nysgjerrig, men ikke ekspert. Derfor forklares vitenskapelige begreper på en tilgjengelig måte.

c) Multimodalitet:
Definisjon: Tekster som kombinerer flere uttrykksformer (modaliteter) som skrift, bilde, lyd, video eller grafikk for å skape mening.

Eksempel: En nettartikkel som kombinerer overskrift, brødtekst, bilder, infografikk og en innebygd video er multimodal. Hver modalitet bidrar med ulik informasjon og effekt.`,
      poeng: 6
    },
    {
      id: 'k5',
      oppgave: `Les utdraget fra novellen (vedlegg E).

a) Beskriv fortellerstemmen i teksten. Er det en jeg-forteller eller tredjepersonsforteller? Er fortelleren pålitelig?
b) Hvordan bruker forfatteren tid i teksten? (tilbakeblikk, frampek, scenisk fremstilling)
c) Hvilket tema tar novellen opp, og hvordan kommer dette til uttrykk?`,
      losning: `a) Fortellerstemme:
Teksten har en jeg-forteller som ser tilbake på en hendelse fra ungdomstiden. Fortelleren er delvis upålitelig fordi:
- Hun innrømmer selv å huske feil: "Eller var det kanskje året etter?"
- Hendelsene filtreres gjennom minnene, som kan være farget av skyldfølelse
- Det er avstand mellom opplevende jeg (ungdommen) og fortellende jeg (voksne)

b) Tidsbruk:
- Tilbakeblikk: Novellen åpner i nåtid, men mesteparten er et tilbakeblikk til sommerferien da fortelleren var 15 år.
- Frampek: "Jeg visste ikke da at dette var siste gang" antyder tragisk utfall og skaper spenning.
- Scenisk fremstilling: Dialogen mellom venninnene er gjengitt direkte med replikker, noe som gjør leseren til et vitne.

c) Tema:
Novellen tar opp temaet vennskap og svik. Dette kommer til uttrykk gjennom:
- Kontrasten mellom den tilsynelatende idyllen og den underliggende spenningen
- Fortellerens skyldfølelse som voksen
- Symbolikken i den knuste koppen - noe verdifullt som ikke kan repareres`,
      poeng: 8
    }
  ],

  langsvar: [
    {
      id: 'l1',
      type: 'Analyseopppgave',
      oppgave: `Analyser teksten "Den digitale generasjonen" (vedlegg F).

I analysen skal du:
- Beskrive tekstens kontekst, formål og målgruppe
- Analysere tekstens argumentasjon og retoriske virkemidler
- Vurdere tekstens troverdighet og effektivitet
- Reflektere over tekstens relevans for dagens samfunn

Bruk fagbegreper i analysen.`,
      losningsforslag: `INNLEDNING
"Den digitale generasjonen" er en kronikk skrevet av medieforsker Kari Nordmann, publisert i Aftenposten 15. mars 2024. Teksten tar for seg hvordan oppvekst med digitale medier påvirker unges identitet, sosiale relasjoner og psykiske helse. I denne analysen vil jeg undersøke tekstens retoriske strategier og vurdere hvor effektivt den formidler sitt budskap.

KONTEKST OG FORMÅL
Teksten er skrevet i konteksten av en pågående samfunnsdebatt om skjermtid og unges mediebruk. Formålet er todelt: å informere om forskningsfunn og å argumentere for en mer nyansert debatt. Kronikken ble publisert i en av Norges største aviser, noe som sikrer bred rekkevidde.

Målgruppen er primært voksne lesere - foreldre, lærere og beslutningstakere - som er bekymret for unges digitale liv. Den implisitte leseren antas å ha en viss bekymring, men også åpenhet for nye perspektiver.

ARGUMENTASJON OG STRUKTUR
Teksten følger en klassisk argumentasjonsstruktur med påstand, begrunnelse og eksempler. Hovedpåstanden er at debatten om skjermtid er for ensidig negativ, og at vi trenger forskning som også viser positive sider ved digital deltakelse.

Forfatteren bruker en konsesjonsstrategi der hun først anerkjenner bekymringene ("Ja, det finnes negative sider ved overdreven skjermbruk"), før hun presenterer sitt hovedargument. Dette bygger troverdighet og viser at hun ikke er naiv.

RETORISKE VIRKEMIDLER
Etos: Forfatteren etablerer troverdighet ved å vise til sin forskning og akademiske bakgrunn. Hun bruker vitenskapelig dokumentasjon og henviser til studier.

Logos: Argumentasjonen bygger på logiske resonnementer og statistikk. Hun presenterer motargumenter og imøtegår dem systematisk.

Patos: Teksten bruker også følelsesappell, særlig når hun beskriver unge som "urettferdig stemplet som avhengige". Dette vekker empati hos leseren.

SPRÅK OG STIL
Språket er saklig og akademisk, men tilgjengelig. Forfatteren unngår fagsjargong og forklarer kompliserte begreper. Setningene varierer i lengde, noe som gir god flyt.

VURDERING
Teksten er effektiv i sin argumentasjon. Konsesjonsstrategien gjør at lesere som i utgangspunktet er skeptiske, likevel kan åpne seg for budskapet. Kildebruken styrker troverdigheten.

En svakhet er at forfatteren har åpenbare interesser i temaet som forsker på feltet. Dette kunne vært adressert mer direkte. Teksten kunne også inkludert flere stemmer, for eksempel ungdommer selv.

KONKLUSJON
"Den digitale generasjonen" er en velskrevet kronikk som lykkes med å nyansere en polarisert debatt. Gjennom god bruk av retoriske virkemidler og en balansert argumentasjon, inviterer teksten til refleksjon snarere enn å provosere. I en tid der debatter ofte er forenklet, er slike tekster viktige bidrag til offentligheten.`,
      vurderingskriterier: [
        'Tydelig og presis beskrivelse av tekstens kontekst, formål og målgruppe',
        'Grundig analyse av argumentasjon med identifikasjon av påstand, begrunnelse og eksempler',
        'Korrekt bruk av fagbegreper (etos, patos, logos, implisitt leser, etc.)',
        'Selvstendig vurdering av tekstens troverdighet og effektivitet',
        'Refleksjon over relevans og aktualitet',
        'God struktur med innledning, hoveddel og konklusjon',
        'Korrekt språk og god flyt'
      ]
    },
    {
      id: 'l2',
      type: 'Drofting',
      oppgave: `"Litteraturen gjør oss til bedre mennesker."

Drøft denne påstanden. I drøftingen skal du:
- Bruke eksempler fra litteraturen du har lest i år
- Vise til relevante synspunkter og forskning
- Komme med egne refleksjoner og vurderinger
- Trekke en begrunnet konklusjon`,
      losningsforslag: `INNLEDNING
Kan det å lese bøker gjøre oss til bedre mennesker? Dette spørsmålet har opptatt filosofer, forfattere og forskere i århundrer. I denne drøftingen vil jeg undersøke påstanden "Litteraturen gjør oss til bedre mennesker" ved å se på argumenter for og imot, og ved å trekke inn eksempler fra litteratur jeg har lest.

ARGUMENTER FOR PÅSTANDEN

Empati og perspektivtaking
Et sentralt argument er at litteratur utvikler vår empatiske evne. Når vi leser om karakterer med andre livserfaringer enn våre egne, øver vi oss på å forstå andres perspektiver. Psykologisk forskning, blant annet studier fra New School for Social Research, viser at lesing av skjønnlitteratur faktisk forbedrer vår evne til å lese andres følelser.

I romanen "Hjerteslag" av Hilde Hagerup følger vi en ungdom som strever med psykiske problemer. Gjennom fortellerstemmen får vi tilgang til tanker og følelser som kan være vanskelige å forstå utenfra. Etter å ha lest denne boken opplevde jeg selv å ha mer forståelse for klassekamerater som sliter.

Moralsk refleksjon
Litteratur stiller oss overfor etiske dilemmaer og tvinger oss til å reflektere over rett og galt. I Henrik Ibsens "Et dukkehjem" utfordres vi til å tenke over kvinners stilling i samfunnet og hva det vil si å være ærlig. Slike tekster gir ikke enkle svar, men de setter i gang tankeprosesser som kan påvirke våre verdier.

ARGUMENTER MOT PÅSTANDEN

Lesing er ikke automatisk dannende
Motargumentet er at lesing i seg selv ikke gjør oss bedre. Historien viser at godt beleste mennesker likevel har begått grusomheter. Nazi-ledere var ofte kulturelt dannede med kjennskap til klassisk litteratur. Dette viser at kunnskap og empati ikke nødvendigvis følger hverandre.

Dessuten finnes det litteratur som fremmer negative verdier - rasistiske tekster, voldsglorifisering og propaganda. Å lese slik litteratur ukritisk kan forsterke negative holdninger snarere enn å motvirke dem.

Begrenset effekt
Selv om lesing kan gi innsikt, er veien fra forståelse til handling lang. Jeg kan føle med en karakter i en roman, men likevel ikke handle annerledes i mitt eget liv. Empati på papiret oversettes ikke automatisk til empati i praksis.

DRØFTING OG EGNE REFLEKSJONER
Etter min mening har begge sider gode poenger. Litteraturen har et potensial til å gjøre oss til bedre mennesker, men dette potensialet realiseres ikke automatisk.

Det avgjørende er hvordan vi leser. Kritisk og reflektert lesing, gjerne i samtale med andre, har større sjanse for å påvirke oss positivt. I norsktimene har vi diskutert tekster i grupper, og disse samtalene har ofte gitt meg nye perspektiver jeg ikke hadde fått ved å lese alene.

Jeg tror også at litteratur er viktigere enn noen gang i en tid med informasjonsoverflod og korte oppmerksomhetsspenn. Romaner tvinger oss til å senke tempoet og gå i dybden. Denne langsomme tenkningen er verdifull.

KONKLUSJON
Påstanden "Litteraturen gjør oss til bedre mennesker" er verken helt sann eller helt usann. Litteratur gir oss verktøy for empati, refleksjon og moralsk tenkning, men disse verktøyene må aktivt brukes. Lesing alene er ikke nok - det krever kritisk bevissthet og vilje til å la tekstene påvirke oss.

Mitt svar på påstanden er derfor: Litteraturen kan gjøre oss til bedre mennesker - hvis vi lar den.`,
      vurderingskriterier: [
        'Klar problemstilling og struktur med innledning, drøfting og konklusjon',
        'Balansert drøfting med argumenter for og imot',
        'Relevante eksempler fra litteraturen med god tekstforståelse',
        'Selvstendige refleksjoner og vurderinger',
        'Begrunnet konklusjon som svarer på problemstillingen',
        'Bruk av kilder og referanser der relevant',
        'Godt og variert språk'
      ]
    },
    {
      id: 'l3',
      type: 'Kreativ skriving',
      oppgave: `Skriv en novelle med tittelen "Vendepunktet".

Novellen skal:
- Ha en tydelig handling med spenningsoppbygging og vendepunkt
- Inneholde minst én virkningsfull litterær teknikk (symbolikk, frampek, gjentakelse e.l.)
- Vise evne til å skape troverdige karakterer og miljø
- Være mellom 700 og 1200 ord`,
      losningsforslag: `VENDEPUNKTET

Det var mandag, og regnet hadde falt i tre dager.

Sara sto ved vinduet i andre etasje og så ned på gaten. Bilene kjørte sakte forbi som våte insekter. Hun telte dem i hodet. Sytten. Atten. Nitten. Det var noe beroligende med å telle, noe som holdt tankene på plass.

Bak henne lå rommet hennes i kaos. Klesstabelen på stolen. Koppene på nattbordet. Bøkene som aldri ble lest ferdig. Hun snudde seg ikke. Det var lettere å se ut.

"Sara?"

Morens stemme var myk og forsiktig, som alltid nå for tiden. Som om Sara var noe som kunne knuse. Kanskje var hun det.

"Ja?"

"Frokost står klar."

Sara svarte ikke. Hun hørte moren bli stående i døråpningen, hørte pusten hennes, hørte alt det usagte mellom dem. Så forsvant skrittene nedover trappen.

*

Det hadde begynt i vår. Eller kanskje hadde det begynt lenge før, men i vår hadde det blitt synlig. Den dagen Live sluttet å svare på meldingene. Den dagen gjengen i kantina hadde flyttet seg da Sara kom med brettet. Den dagen hun hadde sittet på toalettet i friminuttet og scrollet gjennom innlegg der alle andre så lykkelige ut.

Sommeren hadde vært grå. Ikke været - det hadde vært sol og varme og "beste sommeren på år" ifølge nyhetene. Men inni Sara var det grått. Hun hadde sovet mye. Spist lite. Svart på bekymrede spørsmål med "det går fint".

Nå var det høst, og hun var tilbake på skolen, og ingenting hadde forandret seg.

*

"Du må snakke med noen."

Det var tirsdag. Sara satt ved frokostbordet med en brødskive hun ikke kom til å spise. Moren sto ved kjøkkenbenken med kaffen sin og det blikket Sara kjente så godt.

"Jeg snakker jo med deg."

"Du vet hva jeg mener. En profesjonell. Rådgiveren på skolen, kanskje, eller-"

"Nei."

"Sara-"

"Jeg sa nei."

Hun reiste seg. Stolen skrapte mot gulvet. Brødskiven ble liggende.

*

Skolen var det verste. Å gå gjennom gangene og late som. Å smile når noen tilfeldigvis så på henne. Å sitte i timen og prøve å konsentrere seg mens tankene fløt av sted til mørke steder.

I norsktimen snakket læreren om noveller. Om vendepunkter.

"Et vendepunkt er det øyeblikket der noe fundamentalt endrer seg," sa hun. "Der karakteren tar et valg, eller noe skjer som gjør at historien tar en ny retning. Etter vendepunktet kan ingenting være som før."

Sara skrev det ned uten å tenke. Vendepunkt. Hun streket under ordet to ganger.

*

Det var torsdag da det skjedde.

Hun gikk hjem fra skolen den lange veien, gjennom parken der bladene hadde begynt å falle. Benken ved dammen var våt, men hun satte seg likevel. Ender svømte i sirkler på det grå vannet.

Telefonen vibrerte. En melding fra moren. "Når kommer du hjem?"

Sara skulle til å legge den bort da hun hørte gråten.

Den kom fra buskaset bak benken. En lav, hulkende lyd som noen prøvde å dempe. Sara snudde seg.

Mellom grenene skimtet hun et ansikt. En jente, kanskje tretten-fjorten år. Mascara hadde rent nedover kinnene hennes.

Sara nølte. Den enkle løsningen var å late som ingenting. Reise seg og gå. Det var ikke hennes problem. Hun hadde nok med sitt eget.

Men jenta så opp. Øynene deres møttes.

"Sorry," sa jenta og tørket ansiktet med ermet. "Jeg bare-"

"Det er greit."

Sara ble sittende. Hun visste ikke hvorfor. Kanskje fordi jenta minnet henne om noen. Om seg selv.

"Vil du sitte her?"

Jenta nølte, så kom hun ut fra buskene og satte seg på den andre enden av benken. De sa ingenting på en stund. Så begynte jenta å snakke. Om skolen. Om venninner som plutselig ikke var venninner lenger. Om å føle seg usynlig.

Sara lyttet. Hun sa ikke "det går over" eller "du finner nye venner" eller noen av de andre tingene folk pleide å si. Hun bare lyttet.

Til slutt sa hun: "Jeg vet hvordan det er."

Og det var sant.

De satt der til mørket begynte å falle. Så utvekslet de numre og gikk hver sin vei.

*

Den kvelden spiste Sara middag. Hele porsjonen.

Moren sa ingenting, men Sara så lettelsen i øynene hennes.

Senere, på rommet, ryddet hun bort koppene. Det var ikke mye, men det var en begynnelse.

Hun tenkte på vendepunkter. På hvordan det å hjelpe noen andre hadde gjort noe med henne selv. Som om hun ved å se jentas smerte hadde fått tillatelse til å erkjenne sin egen.

Kanskje var det dette moren hadde ment. At man ikke kunne bære alt alene.

Sara tok frem telefonen og skrev en melding. Ikke til jenta fra parken, men til moren:

"Kanskje du har rett. Om å snakke med noen."

Svaret kom med en gang. Et hjerte og tre ord: "Jeg er her."

Utenfor vinduet hadde regnet stanset. Sara la merke til det for første gang på lenge.`,
      vurderingskriterier: [
        'Tydelig handling med oppbygging, vendepunkt og avslutning',
        'Effektiv bruk av minst én litterær teknikk (symbolikk: regn/vær, gjentakelse: vendepunkt-motivet)',
        'Troverdige karakterer med indre liv og utvikling',
        'Godt miljøskildring som støtter stemningen',
        'Variert og presis språkføring',
        'Passende lengde (700-1200 ord)',
        'Original stemme og perspektiv'
      ]
    }
  ],

  vurderingsveiledning: {
    lav: `Karakter 2-3:
Besvarelsen viser noe forståelse for oppgaven, men har mangler på flere områder.

Kjennetegn:
- Innholdet er tynt eller overfladisk
- Strukturen er uklar eller mangelfullt
- Fagbegreper brukes lite eller feil
- Språket har flere feil som forstyrrer lesingen
- Analyser mangler dybde og selvstendighet
- Tekster er korte og lite utviklet

For å forbedre seg bør eleven:
- Øve på å bruke fagbegreper korrekt
- Arbeide med tekststruktur og avsnittsinndeling
- Lese flere eksempeltekster
- Øve på å utdype og begrunne påstander`,
    middels: `Karakter 4:
Besvarelsen viser god forståelse for oppgaven og har flere sterke sider.

Kjennetegn:
- Innholdet er relevant og dekkende
- Strukturen er tydelig med innledning, hoveddel og avslutning
- Fagbegreper brukes stort sett korrekt
- Språket er klart med få feil
- Analyser viser forståelse og noe selvstendighet
- Kreative tekster har handling og karakterer

For å forbedre seg bør eleven:
- Utvikle mer selvstendige tolkninger og vurderinger
- Variere språket mer
- Gå dypere i analyse av virkemidler
- Knytte tekster til kontekst og samfunn`,
    hoy: `Karakter 5-6:
Besvarelsen viser svært god eller fremragende forståelse og kompetanse.

Kjennetegn:
- Innholdet er presist, relevant og viser dybdeforståelse
- Strukturen er gjennomtenkt og effektiv
- Fagbegreper brukes presist og naturlig
- Språket er variert, presist og engasjerende
- Analyser viser selvstendighet, originalitet og evne til å se sammenhenger
- Kreative tekster er velformede med bevisst bruk av virkemidler

Det som skiller 5 fra 6:
- Karakter 6 viser særlig originalitet og modenhet
- Karakter 6 har et språk som er nærmest feilfritt og elegant
- Karakter 6 viser evne til å reflektere på metanivå
- Karakter 6 har ofte et personlig uttrykk som skiller seg ut`
  },

  eksamensstrategi: {
    forberedelse: [
      'Start forberedelsene tidlig - ikke vent til siste uke',
      'Lag en oversikt over alle sjangre og teksttyper dere har jobbet med',
      'Øv på å skrive kortsvar på tid (maks 30 minutter per oppgave)',
      'Skriv minst to fullstendige langsvar før eksamen',
      'Lag deg en liste over fagbegreper med definisjoner og eksempler',
      'Les gjennom tidligere eksamensoppgaver for å bli kjent med formatet',
      'Øv på å analysere tekster systematisk - bruk gjerne et analyseskjema',
      'På forberedelsesdagen: Les vedleggstekstene flere ganger og lag grundige notater',
      'Forbered sitater du kan bruke fra vedleggstekstene',
      'Finn ut hvilke oppgavetyper du er best på - fokuser på disse'
    ],
    gjennomforing: [
      'Les ALLE oppgavene nøye før du velger - bruk 15-20 minutter på dette',
      'Velg oppgaver som passer dine styrker og interesser',
      'Lag en tidsplan: Del opp de 5 timene mellom oppgavene du velger',
      'Start med den oppgaven du føler deg mest trygg på',
      'Bruk 5-10 minutter på å planlegge før du skriver langsvar',
      'Skriv en tydelig innledning som viser at du forstår oppgaven',
      'Bruk avsnitt - ett hovedpoeng per avsnitt',
      'Husk å bruke fagbegreper, men forklar dem gjerne kort',
      'Sett av minst 30 minutter til korrekturlesing på slutten',
      'Ved korrektur: Sjekk særlig kommafeil, særskrivingsfeil og setningsoppbygging',
      'Hvis du står fast: Hopp videre og kom tilbake til oppgaven senere',
      'Husk at det er bedre å levere noe ufullstendig enn ingenting'
    ]
  }
};
