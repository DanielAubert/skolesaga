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
                Skolesaga.no er behandlingsansvarlig for behandlingen av personopplysninger
                som beskrevet i denne personvernerklæringen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Hvilke opplysninger samler vi inn?</h2>

              <h3 className="text-lg font-medium mt-6 mb-3">2.1 Lokal lagring (localStorage)</h3>
              <p>
                Vi bruker nettleserens lokale lagring (localStorage) for å lagre informasjon
                som forbedrer din brukeropplevelse. Dette inkluderer:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Fremgang i øvingsoppgaver og hoderegning</li>
                <li>Dine favoritteksamener</li>
                <li>Nylig viste eksamener</li>
                <li>Kode du har skrevet i Python-editoren</li>
                <li>Innstillinger som mørk/lys modus</li>
              </ul>
              <p className="mt-3">
                <strong>Viktig:</strong> Denne informasjonen lagres kun lokalt i din nettleser og
                sendes aldri til våre servere. Du kan når som helst slette denne informasjonen
                ved å tømme nettleserens data.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">2.2 Analyseverktøy</h3>
              <p>
                Vi bruker Vercel Analytics for å forstå hvordan nettsiden brukes.
                Vercel Analytics er et personvernvennlig analyseverktøy som:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Ikke bruker informasjonskapsler (cookies)</li>
                <li>Ikke samler personidentifiserende informasjon</li>
                <li>Kun samler aggregerte, anonyme data om sidevisninger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Informasjonskapsler (cookies)</h2>
              <p>
                Skolesaga.no bruker kun teknisk nødvendige informasjonskapsler
                for grunnleggende funksjonalitet, som å huske ditt tema-valg (mørk/lys modus).
              </p>
              <p className="mt-3">
                Vi bruker ikke informasjonskapsler for sporing, markedsføring eller annonsering.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Tredjeparter</h2>
              <p>
                Vi deler ikke personopplysninger med tredjeparter, med unntak av:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Vercel:</strong> Vår hostingleverandør som behandler teknisk
                  nødvendig informasjon for å levere nettsiden
                </li>
                <li>
                  <strong>YouTube:</strong> Når du ser videoer embedded fra YouTube,
                  gjelder YouTubes personvernregler
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Dine rettigheter</h2>
              <p>
                I henhold til personopplysningsloven og GDPR har du rett til:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Innsyn i hvilke opplysninger vi har om deg</li>
                <li>Retting av uriktige opplysninger</li>
                <li>Sletting av opplysninger</li>
                <li>Begrensning av behandlingen</li>
                <li>Dataportabilitet</li>
                <li>Å protestere mot behandlingen</li>
              </ul>
              <p className="mt-3">
                Siden vi ikke samler personopplysninger utover det som lagres lokalt i din
                nettleser, kan du selv utøve disse rettighetene ved å tømme nettleserens data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Sikkerhet</h2>
              <p>
                Vi tar personvern på alvor og har implementert følgende tiltak:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>All trafikk er kryptert med HTTPS</li>
                <li>Vi samler kun nødvendig informasjon</li>
                <li>Brukerdata lagres lokalt i nettleseren, ikke på våre servere</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Endringer</h2>
              <p>
                Vi kan oppdatere denne personvernerklæringen ved behov.
                Vesentlige endringer vil bli kommunisert på nettsiden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Kontakt</h2>
              <p>
                Har du spørsmål om personvern eller denne erklæringen,
                kan du kontakte oss via nettsiden.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
