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

      <main className="flex-1">
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
              Sist oppdatert: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Behandlingsansvarlig</h2>
              <p>
                Når du oppretter en konto som privatperson, er <strong>Skolesaga.no</strong>{" "}
                behandlingsansvarlig for personopplysningene dine.
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
                <li>Feide-ID og skole-/gruppetilhørighet (ved innlogging med Feide)</li>
                <li>Rolle (elev, lærer eller administrator) og klassetrinn</li>
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
                Vi lagrer opplysningene så lenge du har en aktiv konto. For skolebrukere slettes eller
                tilbakeleveres opplysningene i tråd med databehandleravtalen med skoleeier. Du kan be
                om sletting av kontoen din når som helst.
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
                Er du elev eller lærer som bruker tjenesten gjennom skolen din, retter du henvendelser
                om disse rettighetene til skolen/skoleeier, som er behandlingsansvarlig. Bruker du
                tjenesten som privatperson, kan du kontakte oss direkte.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Sikkerhet</h2>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>All trafikk er kryptert med HTTPS/TLS, og data lagres kryptert</li>
                <li>Rollebasert tilgangsstyring og tilgangskontroll på databasenivå</li>
                <li>Vi samler kun de opplysningene som er nødvendige (dataminimering)</li>
                <li>Databehandleravtaler med alle våre leverandører</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">9. Informasjonskapsler (cookies)</h2>
              <p>
                Vi bruker kun teknisk nødvendige informasjonskapsler, blant annet for å holde deg
                innlogget og huske tema-valg. Vi bruker ikke informasjonskapsler for sporing,
                markedsføring eller annonsering.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">10. Endringer og kontakt</h2>
              <p>
                Vi kan oppdatere denne personvernerklæringen ved behov, og vesentlige endringer vil
                bli kommunisert på nettsiden. Har du spørsmål om personvern, kan du kontakte oss via
                nettsiden.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
