import { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Vilkår og ansvarsfraskrivelse | Skolesaga",
  description: "Vilkår for bruk, ansvarsfraskrivelse og juridisk informasjon for Skolesaga.no",
};

export default function VilkarPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <GraduationCap className="h-6 w-6" />
            <span>Skolesaga.no</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbake
          </Link>
        </div>
      </header>

      {/* Content */}
      <main id="main-content" className="container max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Vilkår og ansvarsfraskrivelse</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">

          {/* Generelle vilkår */}
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Generelle vilkår</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Skolesaga.no eies og drives av Studenthjelp Privatundervisning AS
              (org.nr 913 117 387). Tjenesten er gratis å bruke, og det knyttes ingen
              betalingsforpliktelser til å opprette konto.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ved å bruke Skolesaga.no aksepterer du disse vilkårene.
              Dersom du ikke godtar vilkårene, ber vi deg om å ikke benytte tjenesten.
              Vi kan endre vilkårene ved behov. Ved vesentlige endringer varsler vi på
              nettsiden i rimelig tid før endringene trer i kraft, og gjeldende versjon
              er alltid tilgjengelig på denne siden.
            </p>
          </section>

          {/* Ansvarsfraskrivelse */}
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Ansvarsfraskrivelse</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Innholdet på denne nettsiden er ment som en ressurs for læring og forståelse
              av fagstoff på videregående skolenivå og ungdomsskolenivå. Vi tilstreber å gi
              korrekt og oppdatert informasjon, men påtar oss ikke ansvar for eventuelle feil,
              utelatelser eller unøyaktigheter som kan forekomme.
            </p>
          </section>

          {/* KI-deklarasjon */}
          <section id="ki-deklarasjon" className="scroll-mt-20">
            <h2 className="text-xl font-semibold mb-4">3. Innhold utviklet med kunstig intelligens</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Alt innhold på Skolesaga.no er laget med kunstig intelligens, under
              menneskelig produktstyring: lærebøkene, oppgavene, løsningsforslagene og
              quizene er skrevet av Anthropics toppmodeller (Claude Opus og Claude
              Fable), illustrasjoner og bilder er generert med Googles bildemodell
              Nano Banana Pro, og lyd/opplesning er laget med ElevenLabs.
              Innholdet er per i dag ikke manuelt gjennomlest i sin helhet. Kvalitetskontrollen gjøres i stedet systematisk med KI-agenter:
              automatiske valideringsporter, faglige revisjoner (blant annet numerisk
              etterregning av regneeksempler og kontroll av kilder) og simulerte
              lesertester fra ulike studentperspektiver. Hvert kapittel bygges mot
              konkrete kompetansemål i læreplanen (LK20) eller fagets eksamenskrav, og
              struktureres etter et fast teori–eksempel–oppgave-mønster. Innholdet
              oppdateres aktivt etter hvert som nyere KI-modeller blir tilgjengelige —
              fra mindre rettinger til fullstendige omskrivinger. Større oppdateringer
              gjøres som hovedregel mellom semestrene, slik at innholdet holdes stabilt
              gjennom semesteret; alvorlige feil rettes fortløpende.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              KI-generert innhold kan inneholde feil, også der fremstillingen virker sikker.
              Innholdet kvalitetssikres løpende, men er ikke fagfellevurdert på samme måte
              som tradisjonelle læreverk. Bruk derfor Skolesaga som et supplement til
              undervisning og pensumlitteratur, ikke som eneste kilde.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Oppdager du en feil, setter vi stor pris på om du melder fra via
              «Meld feil eller forbedring»-knappen som finnes nederst i hvert kapittel.
              Innmeldte feil rettes fortløpende.
            </p>
          </section>

          {/* Uavhengighet fra institusjoner */}
          <section id="uavhengighet" className="scroll-mt-20">
            <h2 className="text-xl font-semibold mb-4">3.1 Uavhengighet fra utdanningsinstitusjoner</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Skolesaga er en uavhengig, privat læringsressurs. Vi er ikke tilknyttet,
              godkjent av, sponset av eller utarbeidet i samarbeid med Utdanningsdirektoratet
              eller noen utdanningsinstitusjon — herunder universiteter og høyskoler som
              Universitetet i Oslo, NTNU, Handelshøyskolen BI eller andre institusjoner hvis
              emner omtales på plattformen. Emnekoder (f.eks. «EXPHIL03», «JUS1111») og
              institusjonsnavn brukes utelukkende for å identifisere hvilket emne
              læringsstoffet er rettet mot, og innebærer ingen godkjenning fra institusjonen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Innholdet er ikke offisielt studiemateriell. Pensum, læringsutbytte­beskrivelser
              og eksamensordninger fastsettes av institusjonene og kan endres — sjekk alltid
              emnets offisielle sider. Læringsmålene i bøkene er Skolesagas egne formuleringer,
              ikke institusjonenes offisielle. Omtale av eksamensmønstre og temafrekvens bygger
              på analyser av offentlig tilgjengelige eksamensoppgaver og sensorveiledninger,
              og gir ingen garanti for innholdet i fremtidige eksamener.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Innhold i juridiske emner er læringsstoff til eksamensforberedelse og utgjør
              ikke juridisk rådgivning; lover og forskrifter endres, og Lovdata er kilden til
              gjeldende rett. Innhold i helsefaglige emner utgjør tilsvarende ikke helse-
              eller medisinske råd.
            </p>
          </section>

          {/* Ingen garanti */}
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Ingen garanti for nøyaktighet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Innholdet på denne nettsiden tilbys &quot;som det er&quot;, uten garantier av noe slag,
              hverken uttrykte eller underforståtte. Vi garanterer ikke at informasjonen er
              fullstendig, nøyaktig, oppdatert, eller egnet for et bestemt formål. Løsningsforslag
              kan inneholde feil, og vi oppfordrer brukere til å verifisere svar med andre kilder.
            </p>
          </section>

          {/* Ansvarsbegrensning */}
          <section>
            <h2 className="text-xl font-semibold mb-4">5. Ansvarsbegrensning</h2>
            <p className="text-muted-foreground leading-relaxed">
              Skolesaga.no, samt dets eiere, samarbeidspartnere og bidragsytere, kan ikke
              holdes ansvarlig for direkte eller indirekte tap, skader eller kostnader som måtte
              oppstå som følge av bruk av informasjonen på denne nettsiden. Dette inkluderer,
              men er ikke begrenset til:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Feil eller mangler i eksamensoppgaver eller løsningsforslag</li>
              <li>Misforståelser eller feiltolkninger av innhold</li>
              <li>Tekniske feil eller nedetid på nettsiden</li>
              <li>Tap av data eller informasjon</li>
              <li>Konsekvenser av å stole på informasjon fra nettsiden ved eksamen eller prøver</li>
            </ul>
          </section>

          {/* Personlig ansvar */}
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Personlig ansvar for bruk av informasjon</h2>
            <p className="text-muted-foreground leading-relaxed">
              Brukere av denne nettsiden oppfordres til å anvende eget skjønn og kritisk vurdering
              ved bruk av informasjonen som formidles her. All bruk av informasjon skjer på eget
              ansvar. Vi anbefaler alltid å konsultere lærer, pensumlitteratur eller andre
              offisielle kilder for å verifisere informasjon.
            </p>
          </section>

          {/* Opphavsrett */}
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Opphavsrett og immaterielle rettigheter</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Eksamensoppgavene som presenteres på denne nettsiden er hentet fra
              Utdanningsdirektoratet (UDIR) og er offentlig tilgjengelige. Opphavsretten til
              disse oppgavene tilhører UDIR og/eller de respektive oppgaveforfatterne.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Løsningsforslag, forklaringer og annet støttemateriale produsert av Skolesaga.no
              er beskyttet av opphavsrett. Kopiering, distribusjon eller kommersiell bruk av
              dette materialet uten skriftlig samtykke er ikke tillatt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bilder og illustrasjoner fra originaleksamener er fjernet grunnet
              opphavsrettsbegrensninger.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kompetansemålene som gjengis i lærebøkene er hentet fra læreplanverket LK20,
              utarbeidet av Utdanningsdirektoratet og tilgjengeliggjort under{" "}
              <a
                href="https://data.norge.no/nlod/no"
                className="underline hover:text-foreground"
                rel="noopener noreferrer"
                target="_blank"
              >
                Norsk lisens for offentlige data (NLOD)
              </a>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Forsidebilder til enkelte kapitler benyttes fra Unsplash i henhold til
              Unsplash-lisensen. Øvrige illustrasjoner er produsert for Skolesaga.
            </p>
          </section>

          {/* Brukergenerert innhold */}
          <section>
            <h2 className="text-xl font-semibold mb-4">8. Brukergenerert innhold</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dersom nettsiden tillater brukergenerert innhold (kommentarer, bidrag til løsninger,
              etc.), er brukeren selv ansvarlig for innholdet de publiserer. Vi forbeholder oss
              retten til å fjerne innhold som er støtende, ulovlig, eller bryter med våre
              retningslinjer, uten forvarsel.
            </p>
          </section>

          {/* Eksterne lenker */}
          <section>
            <h2 className="text-xl font-semibold mb-4">9. Eksterne lenker</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nettsiden kan inneholde lenker til eksterne nettsider. Vi har ingen kontroll over
              innholdet på disse sidene og påtar oss ikke ansvar for deres innhold,
              personvernpraksis eller tilgjengelighet.
            </p>
          </section>

          {/* Endringer */}
          <section>
            <h2 className="text-xl font-semibold mb-4">10. Endringer og oppdateringer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Innholdet på nettsiden kan oppdateres, endres eller fjernes når som helst uten
              forvarsel. Vi påtar oss ikke ansvar for hvordan oppdateringer påvirker brukernes
              opplevelse eller tolkning av tidligere tilgjengelig informasjon. Dette gjelder
              også endringer i læreplan (f.eks. overgang fra LK06 til LK20) som kan gjøre
              eldre eksamensoppgaver mindre relevante.
            </p>
          </section>

          {/* Tilgjengelighet */}
          <section>
            <h2 className="text-xl font-semibold mb-4">11. Tilgjengelighet og nedetid</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi garanterer ikke kontinuerlig tilgjengelighet til tjenesten. Nettsiden kan
              være utilgjengelig på grunn av vedlikehold, tekniske problemer eller andre
              årsaker. Vi anbefaler å ikke være avhengig av nettsiden som eneste kilde til
              eksamensforberedelse, spesielt rett før eksamen.
            </p>
          </section>

          {/* Brukerkontoer */}
          <section>
            <h2 className="text-xl font-semibold mb-4">12. Brukerkontoer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dersom du oppretter en brukerkonto, er du ansvarlig for å holde
              påloggingsinformasjonen din konfidensiell. Du er ansvarlig for all aktivitet
              som skjer under din konto. Vi forbeholder oss retten til å suspendere eller
              slette kontoer som bryter våre vilkår.
            </p>
          </section>

          {/* Lærerfunksjonalitet */}
          <section>
            <h2 className="text-xl font-semibold mb-4">13. Lærerfunksjonalitet og klasseadministrasjon</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lærere som bruker klassefunksjonaliteten er selv ansvarlige for å informere
              elever og foresatte om bruk av tjenesten i samsvar med skolens retningslinjer
              og gjeldende personvernlovgivning (GDPR). Statistikk og progresjonsdata som
              samles inn skal kun brukes til pedagogiske formål.
            </p>
          </section>

          {/* Aldersgrense */}
          <section>
            <h2 className="text-xl font-semibold mb-4">14. Aldersgrense og mindreårige</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tjenesten er rettet mot elever i grunnskole og videregående skole. Den er
              gratis, og bruk av tjenesten medfører ingen økonomiske forpliktelser for
              brukeren.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Barn under 13 år må ha samtykke fra foresatte for å opprette en privat
              brukerkonto (jf. personopplysningsloven § 5). Når tjenesten brukes gjennom
              skolen, er det skolen som administrerer tilgangen. Vi anbefaler at foresatte
              til alle mindreårige brukere er informert om bruken av tjenesten. Se også
              vår <Link href="/personvern" className="underline hover:text-foreground">personvernerklæring</Link>{" "}
              om barn og unges personvern.
            </p>
          </section>

          {/* Lovvalg */}
          <section>
            <h2 className="text-xl font-semibold mb-4">15. Lovvalg og tvister</h2>
            <p className="text-muted-foreground leading-relaxed">
              Disse vilkårene er underlagt norsk lov. Eventuelle tvister som måtte oppstå
              i forbindelse med bruken av nettsiden skal forsøkes løst i minnelighet. Dersom
              dette ikke lykkes, skal tvisten avgjøres ved norske domstoler.
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-xl font-semibold mb-4">16. Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Har du spørsmål om disse vilkårene eller annen henvendelse, kan du kontakte oss:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Studenthjelp Privatundervisning AS (org.nr 913 117 387)</li>
              <li>Aksel Olsens vei 10B, 1597 Moss</li>
              <li>
                E-post:{" "}
                <a href="mailto:studenthjelp@gmail.com" className="underline hover:text-foreground">
                  studenthjelp@gmail.com
                </a>
              </li>
            </ul>
          </section>

          {/* Sist oppdatert */}
          <section className="pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              Sist oppdatert: 7. juli 2026
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
