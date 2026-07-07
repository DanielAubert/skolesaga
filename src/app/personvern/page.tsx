import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Les om hvordan Skolesaga.no behandler dine personopplysninger og ivaretar ditt personvern.",
};

export default function PersonvernPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main id="main-content" className="flex-1">
        <div className="container py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Personvernerklæring</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Personvernerklæring</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground">
              Sist oppdatert: 7. juli 2026
            </p>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Behandlingsansvarlig</h2>
              <p>
                Skolesaga.no eies og drives av <strong>Studenthjelp Privatundervisning AS</strong>,
                org.nr 913 117 387, Aksel Olsens vei 10B, 1597 Moss. Spørsmål om personvern kan
                rettes til{" "}
                <a href="mailto:studenthjelp@gmail.com" className="underline">
                  studenthjelp@gmail.com
                </a>.
              </p>
              <p className="mt-3">
                Når du oppretter en konto som privatperson, er Studenthjelp Privatundervisning AS
                (heretter «Skolesaga») behandlingsansvarlig for personopplysningene dine.
              </p>
              <p className="mt-3">
                Når tjenesten tas i bruk gjennom en skole eller kommune/fylkeskommune, er{" "}
                <strong>skoleeier (kommunen/fylkeskommunen) behandlingsansvarlig</strong>, og
                Skolesaga opptrer som <strong>databehandler</strong> på skoleeiers vegne. Behandlingen
                reguleres da av en egen databehandleravtale mellom skoleeier og Skolesaga.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Hvilke opplysninger behandler vi?</h2>

              <h3 className="text-lg font-medium mt-6 mb-3">2.1 Kontoopplysninger</h3>
              <p>
                Når du logger inn (med e-post/passord, Google eller Feide), lagrer vi opplysninger
                knyttet til kontoen din på våre servere:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Navn og e-postadresse</li>
                <li>Feide-ID (ved innlogging med Feide – vi henter ikke gruppe- eller klasselister fra Feide)</li>
                <li>Rolle (elev, lærer eller administrator) og klassetrinn</li>
                <li>Skole/organisasjon, fødselsår og eventuelt telefonnummer, dersom du selv oppgir dette ved registrering</li>
                <li>Eventuelt profilbilde fra innloggingsleverandøren</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3">2.2 Lærings- og aktivitetsdata</h3>
              <p>
                For innloggede brukere lagrer vi opplysninger om bruken av læremiddelet, slik at du
                (og din lærer, dersom du er knyttet til en klasse) kan følge fremgangen din:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Fremgang og fullføring av kapitler og øvingsoppgaver</li>
                <li>Quiz-resultater, oppgaveforsøk og innleveringer</li>
                <li>Treningsøkter og flashcard-repetisjoner</li>
                <li>Klassemedlemskap og oppgaver tildelt av lærer</li>
                <li>Tilbakemeldinger du sender inn på innhold</li>
              </ul>
              <p className="mt-3">
                Er du elev i en klasse, kan læreren din se din fremgang, dine resultater og dine
                innleveringer.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">2.3 Lokal lagring (localStorage)</h3>
              <p>
                Noe informasjon lagres kun lokalt i nettleseren din og sendes ikke til våre servere –
                for eksempel tema-valg (mørk/lys modus), kode skrevet i Python-editoren, og fremgang
                for deg som ikke er innlogget. Dette kan du når som helst slette ved å tømme
                nettleserens data.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">2.4 Analyseverktøy</h3>
              <p>
                Vi bruker Vercel Analytics, et personvernvennlig analyseverktøy som ikke bruker
                informasjonskapsler, ikke samler personidentifiserende informasjon, og kun samler
                aggregerte, anonyme data om sidevisninger.
              </p>
              <p className="mt-3">
                Vi bruker også Google Analytics for aggregert statistikk om bruken av nettstedet.
                Verktøyet er satt opp uten informasjonskapsler: samtykke til lagring er slått av
                som standard, og IP-adresser anonymiseres før behandling. Google Analytics leveres
                av Google, og opplysningene kan behandles på servere utenfor EØS – overføringen er
                sikret gjennom EU-U.S. Data Privacy Framework og EUs standard
                personvernbestemmelser (SCC). Behandlingsgrunnlaget er vår berettigede interesse i
                å forstå og forbedre bruken av tjenesten (GDPR art. 6(1)(f)).
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">2.5 Selvtester (personlighetstest, IQ-test m.m.)</h3>
              <p>
                Resultater fra selvtestene på nettstedet (personlighetstest, IQ-test, EQ-test,
                enneagram, læringsstil og yrkesinteresser) beregnes utelukkende i nettleseren din.
                De lagres ikke hos oss, knyttes ikke til kontoen din og deles ikke med noen –
                resultatet forsvinner når du forlater siden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Behandlingsgrunnlag</h2>
              <p>
                For privatbrukere behandler vi kontoopplysninger for å oppfylle avtalen om å levere
                tjenesten (GDPR art. 6(1)(b)). Når tjenesten brukes gjennom en skole, er
                behandlingsgrunnlaget skoleeiers utførelse av en oppgave i allmennhetens interesse /
                offentlig myndighetsutøvelse innenfor opplæringen (GDPR art. 6(1)(e), jf.
                opplæringslova).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Hvor lagres opplysningene?</h2>
              <p>
                Personopplysningene lagres i databasen vår hos Supabase, i et datasenter
                <strong> innenfor EU/EØS (Stockholm, Sverige)</strong>. Enkelte av våre
                tjenesteleverandører er amerikansk-eide; der det kan forekomme tilgang fra land
                utenfor EØS, sikres overføringen med EUs standard personvernbestemmelser (SCC) og
                supplerende tiltak.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Databehandlere og tredjeparter</h2>
              <p>
                Vi selger ikke personopplysninger og deler dem ikke for markedsføring. Vi benytter
                følgende databehandlere/tjenesteleverandører for å levere tjenesten:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Supabase</strong> – database, innlogging og fillagring (EU/EØS)</li>
                <li><strong>Vercel</strong> – drift og hosting av nettstedet</li>
                <li><strong>Feide / Sikt</strong> – innlogging for skolebrukere</li>
                <li><strong>Google</strong> – dersom du velger å logge inn med Google-konto</li>
                <li><strong>YouTube / Vimeo</strong> – ved avspilling av innebygde videoer gjelder deres egne personvernregler</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Lagringstid</h2>
              <p>
                Vi lagrer opplysningene så lenge du har en aktiv konto. Sletter du kontoen din,
                slettes kontoopplysningene og læringsdataene dine permanent. For skolebrukere
                slettes eller tilbakeleveres opplysningene i tråd med databehandleravtalen med
                skoleeier. Du kan når som helst slette kontoen din selv fra profilsiden, eller
                kontakte oss for å få den slettet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Dine rettigheter</h2>
              <p>
                I henhold til personopplysningsloven og GDPR har du rett til innsyn, retting,
                sletting, begrensning, dataportabilitet og å protestere mot behandlingen. Du kan også
                klage til Datatilsynet.
              </p>
              <p className="mt-3">
                Innsyn og dataportabilitet kan du utøve selv: på profilsiden kan du laste ned en
                kopi av alle opplysningene vi har lagret om deg, og du kan slette kontoen din og
                alle tilhørende data permanent.
              </p>
              <p className="mt-3">
                Er du elev eller lærer som bruker tjenesten gjennom skolen din, retter du henvendelser
                om disse rettighetene til skolen/skoleeier, som er behandlingsansvarlig. Bruker du
                tjenesten som privatperson, kan du kontakte oss på{" "}
                <a href="mailto:studenthjelp@gmail.com" className="underline">
                  studenthjelp@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Barn og unges personvern</h2>
              <p>
                Skolesaga er laget for barn og unge, og vi tar deres personvern på særlig alvor.
                Vi samler kun inn det som er nødvendig for å levere tjenesten, viser ingen
                annonser, og selger eller deler aldri opplysninger om barn.
              </p>
              <p className="mt-3">
                Barn under 13 år som ønsker å opprette en privat konto, må ha samtykke fra
                foresatte (jf. personopplysningsloven § 5). Når tjenesten brukes gjennom skolen,
                er det skolen/skoleeier som har ansvaret for behandlingen, og samtykke fra
                foresatte er da ikke grunnlaget for behandlingen.
              </p>
              <p className="mt-3">
                Foresatte kan når som helst kontakte oss for innsyn i, retting eller sletting av
                opplysninger om egne barn.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">9. Sikkerhet</h2>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>All trafikk er kryptert med HTTPS/TLS, og data lagres kryptert</li>
                <li>Rollebasert tilgangsstyring og tilgangskontroll på databasenivå</li>
                <li>Vi samler kun de opplysningene som er nødvendige (dataminimering)</li>
                <li>Databehandleravtaler med alle våre leverandører</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">10. Informasjonskapsler (cookies)</h2>
              <p>
                Vi bruker kun teknisk nødvendige informasjonskapsler, blant annet for å holde deg
                innlogget og huske tema-valg. Vi bruker ikke informasjonskapsler for sporing,
                markedsføring eller annonsering.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">11. Endringer og kontakt</h2>
              <p>
                Vi kan oppdatere denne personvernerklæringen ved behov, og vesentlige endringer vil
                bli kommunisert på nettsiden.
              </p>
              <p className="mt-3">
                Har du spørsmål om personvern, kan du kontakte oss:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Studenthjelp Privatundervisning AS (org.nr 913 117 387)</li>
                <li>Aksel Olsens vei 10B, 1597 Moss</li>
                <li>
                  E-post:{" "}
                  <a href="mailto:studenthjelp@gmail.com" className="underline">
                    studenthjelp@gmail.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
