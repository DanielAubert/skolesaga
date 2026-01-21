import { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Vilkår og ansvarsfraskrivelse | Skolesaga",
  description: "Vilkår for bruk, ansvarsfraskrivelse og juridisk informasjon for Skolesaga.no",
};

export default function VilkarPage() {
  return (
    <div className="min-h-screen bg-background">
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
      <main className="container max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Vilkår og ansvarsfraskrivelse</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">

          {/* Generelle vilkår */}
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Generelle vilkår</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ved å bruke Skolesaga.no aksepterer du disse vilkårene i sin helhet.
              Dersom du ikke godtar vilkårene, ber vi deg om å ikke benytte tjenesten.
              Vi forbeholder oss retten til å endre disse vilkårene når som helst uten forvarsel.
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

          {/* Ingen garanti */}
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Ingen garanti for nøyaktighet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Innholdet på denne nettsiden tilbys &quot;som det er&quot;, uten garantier av noe slag,
              hverken uttrykte eller underforståtte. Vi garanterer ikke at informasjonen er
              fullstendig, nøyaktig, oppdatert, eller egnet for et bestemt formål. Løsningsforslag
              kan inneholde feil, og vi oppfordrer brukere til å verifisere svar med andre kilder.
            </p>
          </section>

          {/* Ansvarsbegrensning */}
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Ansvarsbegrensning</h2>
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
            <h2 className="text-xl font-semibold mb-4">5. Personlig ansvar for bruk av informasjon</h2>
            <p className="text-muted-foreground leading-relaxed">
              Brukere av denne nettsiden oppfordres til å anvende eget skjønn og kritisk vurdering
              ved bruk av informasjonen som formidles her. All bruk av informasjon skjer på eget
              ansvar. Vi anbefaler alltid å konsultere lærer, pensumlitteratur eller andre
              offisielle kilder for å verifisere informasjon.
            </p>
          </section>

          {/* Opphavsrett */}
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Opphavsrett og immaterielle rettigheter</h2>
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
            <p className="text-muted-foreground leading-relaxed">
              Bilder og illustrasjoner fra originaleksamener er fjernet grunnet
              opphavsrettsbegrensninger.
            </p>
          </section>

          {/* Brukergenerert innhold */}
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Brukergenerert innhold</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dersom nettsiden tillater brukergenerert innhold (kommentarer, bidrag til løsninger,
              etc.), er brukeren selv ansvarlig for innholdet de publiserer. Vi forbeholder oss
              retten til å fjerne innhold som er støtende, ulovlig, eller bryter med våre
              retningslinjer, uten forvarsel.
            </p>
          </section>

          {/* Eksterne lenker */}
          <section>
            <h2 className="text-xl font-semibold mb-4">8. Eksterne lenker</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nettsiden kan inneholde lenker til eksterne nettsider. Vi har ingen kontroll over
              innholdet på disse sidene og påtar oss ikke ansvar for deres innhold,
              personvernpraksis eller tilgjengelighet.
            </p>
          </section>

          {/* Endringer */}
          <section>
            <h2 className="text-xl font-semibold mb-4">9. Endringer og oppdateringer</h2>
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
            <h2 className="text-xl font-semibold mb-4">10. Tilgjengelighet og nedetid</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi garanterer ikke kontinuerlig tilgjengelighet til tjenesten. Nettsiden kan
              være utilgjengelig på grunn av vedlikehold, tekniske problemer eller andre
              årsaker. Vi anbefaler å ikke være avhengig av nettsiden som eneste kilde til
              eksamensforberedelse, spesielt rett før eksamen.
            </p>
          </section>

          {/* Brukerkontoer */}
          <section>
            <h2 className="text-xl font-semibold mb-4">11. Brukerkontoer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dersom du oppretter en brukerkonto, er du ansvarlig for å holde
              påloggingsinformasjonen din konfidensiell. Du er ansvarlig for all aktivitet
              som skjer under din konto. Vi forbeholder oss retten til å suspendere eller
              slette kontoer som bryter våre vilkår.
            </p>
          </section>

          {/* Lærerfunksjonalitet */}
          <section>
            <h2 className="text-xl font-semibold mb-4">12. Lærerfunksjonalitet og klasseadministrasjon</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lærere som bruker klassefunksjonaliteten er selv ansvarlige for å informere
              elever og foresatte om bruk av tjenesten i samsvar med skolens retningslinjer
              og gjeldende personvernlovgivning (GDPR). Statistikk og progresjonsdata som
              samles inn skal kun brukes til pedagogiske formål.
            </p>
          </section>

          {/* Aldersgrense */}
          <section>
            <h2 className="text-xl font-semibold mb-4">13. Aldersgrense</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tjenesten er primært rettet mot elever i ungdomsskole og videregående skole.
              For brukere under 16 år anbefales det at foresatte er informert om bruken av
              tjenesten, spesielt ved opprettelse av brukerkonto.
            </p>
          </section>

          {/* Lovvalg */}
          <section>
            <h2 className="text-xl font-semibold mb-4">14. Lovvalg og tvister</h2>
            <p className="text-muted-foreground leading-relaxed">
              Disse vilkårene er underlagt norsk lov. Eventuelle tvister som måtte oppstå
              i forbindelse med bruken av nettsiden skal forsøkes løst i minnelighet. Dersom
              dette ikke lykkes, skal tvisten avgjøres ved norske domstoler.
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-xl font-semibold mb-4">15. Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Har du spørsmål om disse vilkårene eller annen henvendelse, kan du kontakte
              oss på e-post. Se kontaktinformasjon på nettsiden.
            </p>
          </section>

          {/* Sist oppdatert */}
          <section className="pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              Sist oppdatert: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
