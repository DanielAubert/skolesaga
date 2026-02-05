#!/usr/bin/env python3
"""
Script to add oppsummering (summary) blocks to chapters in textbook-content-helseoppvekst-vg1.ts
"""

import re

# Oppsummering content for each chapter
oppsummering_blocks = {
    # Chapter 1-4: Etikk og verdier
    "hov1-1-4-6": {
        "id": "helseoppvekst-vg1-1-4-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Etikk handler om a reflektere systematisk over hva som er riktig og galt
- De fire etiske prinsippene: velgjorenhet, ikke-skade, autonomi og rettferdighet
- En etisk refleksjonsmodell hjelper deg a tenke systematisk i vanskelige situasjoner

**Sentrale begreper:**
- Etisk dilemma: Situasjon der alle handlingsalternativer har bade positive og negative sider
- Autonomiprinsippet: Respekt for brukerens rett til selvbestemmelse
- Velgjorenhetsprinsippet: Plikten til a handle til beste for brukeren
- Samtykkekompetanse: Evnen til a forstaa og ta beslutninger om egen behandling

**Tips for praksis:**
- Bruk en refleksjonsmodell nar du star overfor vanskelige valg
- Diskuter etiske dilemmaer med kolleger og veileder
- Respekter alltid brukerens rett til a ta egne valg"""
    },
    # Chapter 2-3: Kosthold og ernaering
    "hov1-2-3-6": {
        "id": "helseoppvekst-vg1-2-3-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Kostholdet er en av de viktigste faktorene for god helse
- Makronaeringsstoffer (karbohydrater, proteiner, fett) gir energi og byggemateriale
- Ernaeringsbehovet endres gjennom livets ulike faser

**Sentrale begreper:**
- Naeringsstoffer: Stoffer kroppen trenger for a fungere
- Makronaeringsstoffer: Karbohydrater, proteiner og fett
- Mikronaeringsstoffer: Vitaminer og mineraler
- Underernering: Utilstrekkelig naeringsinntak over tid

**Tips for praksis:**
- Vaer oppmerksom pa tegn til underernering hos eldre
- Dokumenter matinntak og vekt regelemessig
- Skap trivselige maltidssituasjoner"""
    },
    # Chapter 2-4: Fysisk aktivitet
    "hov1-2-4-6": {
        "id": "helseoppvekst-vg1-2-4-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Fysisk aktivitet forebygger sykdom og styrker bade fysisk og psykisk helse
- Voksne anbefales minst 150 minutter moderat aktivitet per uke
- Aktivitet ma tilpasses den enkeltes funksjonsniva og preferanser

**Sentrale begreper:**
- Fysisk aktivitet: Enhver kroppslig bevegelse som oker energiforbruket
- Hverdagsaktivitet: Ustrukturert aktivitet i dagliglivet
- Balansetrening: Viktig for fallforebygging hos eldre

**Tips for praksis:**
- Finn aktiviteter brukeren liker for a oke motivasjon
- Start forsiktig og ok gradvis
- Gjor aktiviteten sosial og lystbetont"""
    },
    # Chapter 2-5: Psykisk helse
    "hov1-2-5-6": {
        "id": "helseoppvekst-vg1-2-5-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Psykisk helse handler om hvordan vi tenker, foler og har det med oss selv
- Alle beveger seg mellom god og darlig psykisk helse gjennom livet
- Egenomsorg og sosiale relasjoner er viktig for god psykisk helse

**Sentrale begreper:**
- Psykisk helse: Velvare der man kan mestre hverdagen og bidra i samfunnet
- Stress: Kroppens reaksjon pa utfordringer og krav
- Angst: Overdreven frykt eller bekymring
- Depresjon: Vedvarende tristhet og tap av interesse

**Tips for praksis:**
- Lytt aktivt og vis at du bryr deg
- Vaer oppmerksom pa faresignaler
- Kjenn til hjelpeinstanser og henvis ved behov"""
    },
    # Chapter 3-2: Taushetsplikt
    "hov1-3-2-6": {
        "id": "helseoppvekst-vg1-3-2-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Taushetsplikt innebarer at du ikke kan dele opplysninger om brukere med uvedkommende
- GDPR og personopplysningsloven regulerer behandling av personopplysninger
- Det finnes unntak fra taushetsplikten, blant annet meldeplikt til barnevernet

**Sentrale begreper:**
- Taushetsplikt: Plikt til a tie om personlige opplysninger fra arbeidet
- Personvern: Retten til a bestemme over egne personopplysninger
- Sensitive personopplysninger: Helseopplysninger, etnisitet, religion

**Tips for praksis:**
- Snakk aldri om brukere pa offentlige steder
- Del kun nodvendig informasjon med kolleger
- Ved tvil om du kan dele informasjon, spor din leder"""
    },
    # Chapter 3-3: HMS
    "hov1-3-3-5": {
        "id": "helseoppvekst-vg1-3-3-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- HMS handler om a skape trygge og gode arbeidsforhold
- Risikovurdering identifiserer farer og tiltak for a redusere risiko
- Ergonomi og riktige arbeidsteknikker forebygger belastningsskader

**Sentrale begreper:**
- HMS: Helse, miljo og sikkerhet
- Risikovurdering: Systematisk gjennomgang av farer pa arbeidsplassen
- Ergonomi: Tilpasse arbeidet til mennesket
- Verneombud: Ansattes representant i HMS-saker

**Tips for praksis:**
- Bruk hjelpemidler ved tunge loft
- Meld fra om avvik og farlige forhold
- Ta vare pa din egen helse og sikkerhet"""
    },
    # Chapter 3-4: Dokumentasjon
    "hov1-3-4-5": {
        "id": "helseoppvekst-vg1-3-4-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Dokumentasjon sikrer forsvarlig behandling og god informasjonsflyt
- EPJ (elektronisk pasientjournal) brukes i de fleste helsevirksomheter
- Det som ikke er dokumentert regnes juridisk som ikke utfort

**Sentrale begreper:**
- Pasientjournal: Samling av opplysninger om en pasient
- EPJ: Elektronisk pasientjournal
- Journalforingsplikt: Lovpalagt plikt til a dokumentere helsehjelp

**Tips for praksis:**
- Dokumenter saklig, konkret og tydelig
- Skriv ned observasjoner sa raskt som mulig
- Unnga personlige meninger i journalen"""
    },
    # Chapter 4-1: Barns utvikling 0-6
    "hov1-4-1-6": {
        "id": "helseoppvekst-vg1-4-1-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Barns utvikling skjer pa flere omrader: fysisk, motorisk, spraklig, kognitiv og sosial-emosjonell
- Trygg tilknytning til omsorgspersoner er grunnleggende for god utvikling
- Det finnes store individuelle forskjeller i nar barn nar ulike milepaler

**Sentrale begreper:**
- Tilknytning: Det folelsesmessige bandet mellom barn og omsorgspersoner
- Cefalokaudal utvikling: Fra hodet og nedover
- Spraakeksplosjon: Rask okning i ordforrad rundt 2-3 ar

**Tips for praksis:**
- Vaer en trygg og tilgjengelig voksen
- La barn utforske i eget tempo
- Stimuler gjennom lek og daglige aktiviteter"""
    },
    # Chapter 4-2: Barns utvikling 6-12
    "hov1-4-2-5": {
        "id": "helseoppvekst-vg1-4-2-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Skolealderen preges av laering, utvikling av sosiale ferdigheter og vennskap
- Barn i denne alderen kan tenke logisk om konkrete ting (Piaget)
- Mestringsopplevelser er viktig for a utvikle god selvfolelse

**Sentrale begreper:**
- Konkret-operasjonelt stadium: Evne til logisk tenkning om konkrete ting
- Konservasjon: Forstae at mengder forblir like selv om formen endres
- Arbeidssomhet vs mindreverd: Eriksons utviklingsfase for denne alderen

**Tips for praksis:**
- Gi anerkjennelse og positiv tilbakemelding
- Stott inkludering og forebygg mobbing
- Legg til rette for fysisk aktivitet og lek"""
    },
    # Chapter 4-3: Ungdomsutvikling
    "hov1-4-3-6": {
        "id": "helseoppvekst-vg1-4-3-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Ungdomstiden preges av store fysiske, psykiske og sosiale forandringer
- Identitetsutvikling er en sentral oppgave i denne perioden
- Venner og jevnaldrende blir den viktigste referansegruppen

**Sentrale begreper:**
- Identitet: Hvem du er, hva du star for og hvor du horer til
- Prefrontal korteks: Hjernedel for impulskontroll, ikke ferdig utviklet for i 20-arene
- Gruppepress: Sosialt press fra jevnaldrende

**Tips for praksis:**
- Gi rom for utforskning uten a domme
- Vaer tilgjengelig og lyttende
- Kjenn til faresignaler for psykisk uhelse"""
    },
    # Chapter 4-4: Voksenliv og aldring
    "hov1-4-4-6": {
        "id": "helseoppvekst-vg1-4-4-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Voksenlivet deles inn i tidlig, midtre og sen voksen alder
- Fysiske endringer skjer gradvis fra 30-arsalderen
- Godt sosialt nettverk og mestringsstrategier er viktig for livskvalitet

**Sentrale begreper:**
- Midtlivskrise: Periode med indre uro og tvil, vanlig mellom 40-55 ar
- Menopause: Overgangsalderen hos kvinner
- Work-life balance: Balanse mellom arbeid og privatliv

**Tips for praksis:**
- Stott mennesker gjennom livsoverganger
- Anerkjenn at endring er en naturlig del av livet
- Fremme fysisk aktivitet og sosial kontakt"""
    },
    # Chapter 4-5: Eldre og aldringsprosessen
    "hov1-4-5-6": {
        "id": "helseoppvekst-vg1-4-5-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Aldring er en naturlig prosess som pavirker alle kroppens funksjoner
- Demens er en sykdom, ikke en naturlig del av aldring
- Livskvalitet handler om mer enn fravar av sykdom

**Sentrale begreper:**
- Demens: Hjernesykdommer som gir tap av kognitive funksjoner
- Osteoporose: Beinskjorhet som oker risiko for brudd
- Polyfarmasi: Bruk av mange medisiner samtidig
- Ageisme: Diskriminering basert pa alder

**Tips for praksis:**
- Fremme meningsfull aktivitet og sosial kontakt
- Respekter eldres verdighet og selvbestemmelse
- Vaer oppmerksom pa tegn pa underernering og depresjon"""
    },
    # Chapter 5-1: Omsorg for barn
    "hov1-5-1-6": {
        "id": "helseoppvekst-vg1-5-1-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Barn har behov for trygghet, kjaerlighet og forutsigbarhet
- Omsorgssvikt kan ha alvorlige konsekvenser for barns utvikling
- Ansatte har meldeplikt til barnevernet ved bekymring

**Sentrale begreper:**
- Omsorgssvikt: Nar barn ikke far dekket grunnleggende behov
- Barnekonvensjonen: FNs konvensjon om barns rettigheter
- Meldeplikt: Lovpalagt plikt til a melde bekymring til barnevernet

**Tips for praksis:**
- Vaer en trygg og tilgjengelig voksen
- Kjenn til tegn pa omsorgssvikt
- Ta bekymringer pa alvor og meld fra"""
    },
    # Chapter 5-2: Omsorg for eldre
    "hov1-5-2-6": {
        "id": "helseoppvekst-vg1-5-2-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Personsentrert omsorg setter brukerens behov og livshistorie i sentrum
- ADL-kartlegging gir grunnlag for individuell tilpassing av hjelp
- Fallforebygging og ernaering er viktige fokusomrader

**Sentrale begreper:**
- Personsentrert omsorg: Tilnaerming utviklet av Tom Kitwood
- ADL: Aktiviteter i dagliglivet
- IADL: Instrumentelle aktiviteter som matlaging og handling

**Tips for praksis:**
- Bli kjent med brukerens livshistorie og preferanser
- Stott selvstendighet fremfor a gjore ting for brukeren
- Ivareta verdighet i alle omsorgshandlinger"""
    },
    # Chapter 5-3: Omsorg for mennesker med funksjonsnedsettelser
    "hov1-5-3-6": {
        "id": "helseoppvekst-vg1-5-3-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Funksjonshemming oppstar i motet mellom individet og samfunnets barrierer
- Selvbestemmelse er en grunnleggende rettighet for alle
- Universell utforming gjor samfunnet tilgjengelig for alle

**Sentrale begreper:**
- Funksjonsnedsettelse: Tap av eller skade pa en kroppsfunksjon
- CRPD: FN-konvensjonen om rettigheter for mennesker med nedsatt funksjonsevne
- Universell utforming: Design som fungerer for alle

**Tips for praksis:**
- Se personen forst, funksjonsnedsettelsen deretter
- Stott personens egne valg
- Spor hvordan personen onsker a fa hjelp"""
    },
    # Chapter 5-4: ADL
    "hov1-5-4-6": {
        "id": "helseoppvekst-vg1-5-4-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- ADL omfatter aktiviteter for a ta vare pa seg selv og leve selvstendig
- PADL er grunnleggende egenomsorg, IADL er mer sammensatte aktiviteter
- Kartlegging gir grunnlag for individuell tilpassing

**Sentrale begreper:**
- PADL: Personlig ADL som spising, pakeledning og hygiene
- IADL: Instrumentell ADL som matlaging og okonomihandtering
- Barthel-indeks: Kartleggingsverktoy for ADL-funksjon

**Tips for praksis:**
- Fremme selvstendighet gjennom hjelp til selvhjelp
- Gi brukeren tid til a gjore ting selv
- Sett realistiske mal sammen med brukeren"""
    },
    # Chapter 5-5: Forstehjelp
    "hov1-5-5-6": {
        "id": "helseoppvekst-vg1-5-5-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Forstehjelp er hjelpen som gis for profesjonell hjelp ankommer
- ABCDE-prinsippet gir systematisk tilnaerming til akutt syke
- HLR: 30 brystkompresjoner og 2 innblasinger

**Sentrale begreper:**
- ABCDE: Airway, Breathing, Circulation, Disability, Exposure
- HLR: Hjerte-lunge-redning
- Stabilt sideleie: For bevisstlose som puster normalt

**Tips for praksis:**
- Ov forstehjelp regelemessig
- Hold deg rolig i akutte situasjoner
- Ring 113 ved alvorlige hendelser"""
    },
    # Chapter 6-1: Tverrfaglig samarbeid
    "hov1-6-1-5": {
        "id": "helseoppvekst-vg1-6-1-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Tverrfaglig samarbeid gir brukeren et helhetlig tilbud
- Ansvarsgrupper koordinerer tjenester til brukere med sammensatte behov
- Individuell plan er et verktoy for a koordinere langvarige tjenester

**Sentrale begreper:**
- Tverrfaglig samarbeid: Fagpersoner med ulik kompetanse jobber sammen
- Ansvarsgruppe: Tverrfaglig gruppe rundt en bruker
- Individuell plan: Koordineringsverktoy for langvarige tjenester

**Tips for praksis:**
- Respekter andre yrkesgruppers kompetanse
- Kommuniser tydelig og del nodvendig informasjon
- Hold brukeren i sentrum for samarbeidet"""
    },
    # Chapter 6-2: Kulturforstaelse
    "hov1-6-2-6": {
        "id": "helseoppvekst-vg1-6-2-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Kulturell kompetanse er viktig for a gi god omsorg til alle
- Unnga stereotypisering - mot hver person som et individ
- Bruk profesjonell tolk ved sprakbarrierer

**Sentrale begreper:**
- Kulturell kompetanse: Evne til a samhandle effektivt pa tvers av kulturer
- Etnosentrisme: A vurdere andre kulturer ut fra sin egen
- Diskriminering: Ulik behandling basert pa kjennetegn

**Tips for praksis:**
- Spor brukeren om preferanser og behov
- Vaer bevisst egne fordommer
- Vis respekt for ulike tradisjoner"""
    },
    # Chapter 6-3: Velferdsteknologi
    "hov1-6-3-6": {
        "id": "helseoppvekst-vg1-6-3-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Velferdsteknologi skal styrke evnen til a klare seg selv i hverdagen
- Teknologien skal supplere, ikke erstatte, menneskelig omsorg
- Etiske hensyn som personvern og samtykke er viktige

**Sentrale begreper:**
- Velferdsteknologi: Teknologi for trygghet, sikkerhet og deltakelse
- Trygghetsalarm: Vanlig form for velferdsteknologi
- GPS-sporing: For personer som kan ga seg bort

**Tips for praksis:**
- Forklar teknologien tydelig for brukeren
- Sjekk at teknologien fungerer som den skal
- Husk den menneskelige kontakten"""
    },
    # Chapter 7-1: Praksis
    "hov1-7-1-6": {
        "id": "helseoppvekst-vg1-7-1-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Praksis gir mulighet til a anvende teori i virkelige situasjoner
- Profesjonell atferd inkluderer punktlighet, respekt og a folge rutiner
- Refleksjon og praksislogg er nokler til god laering

**Sentrale begreper:**
- Profesjonell atferd: Oppforsel i trad med yrkets verdier og normer
- Praksislogg: Skriftlig refleksjon over praksiserfaringer
- Veileder: Stoettespiller og ressurs pa arbeidsplassen

**Tips for praksis:**
- Vaer aktiv og still sporsmaal
- Skriv praksislogg for a reflektere over erfaringer
- Ta imot tilbakemeldinger konstruktivt"""
    },
    # Chapter 7-2: Videre utdanning
    "hov1-7-2-6": {
        "id": "helseoppvekst-vg1-7-2-oppsummering",
        "content": """## Oppsummering

**Hovedpunkter:**
- Etter VG1 kan du velge mellom flere VG2-retninger
- Med fagbrev far du yrkeskompetanse og mulighet for autorisasjon
- Pabygging gir mulighet for studier pa hoyskoleniva

**Sentrale begreper:**
- Fagbrev: Bevis pa yrkeskompetanse etter laerlingtid og fagprove
- Laerling: Opplaering i bedrift med lonn
- Pabygging: Gir generell studiekompetanse

**Tips for praksis:**
- Tenk gjennom hva du liker og trives med
- Snakk med fagpersoner om deres hverdag
- Husk at mange bytter retning underveis"""
    },
}

def add_oppsummering_to_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    changes_made = 0

    for last_block_id, oppsummering in oppsummering_blocks.items():
        # Find pattern: the last content block before exercises
        # Pattern: id: 'last_block_id' followed by content, then ],\n  exercises:

        # Create the oppsummering block to insert
        opp_block = f'''    {{
      id: '{oppsummering["id"]}',
      type: 'note',
      title: 'Oppsummering',
      content: `{oppsummering["content"]}`,
    }},'''

        # Check if oppsummering already exists for this chapter
        if oppsummering["id"] in content:
            print(f"Skipping {oppsummering['id']} - already exists")
            continue

        # Find the pattern: id: 'last_block_id' ... },\n  ],\n  exercises:
        # Use a regex to find the block and insert after it
        pattern = rf"(id: '{last_block_id}'[^}}]+}},\n  \],\n  exercises:)"

        # Alternative pattern for cases where the closing is different
        pattern2 = rf"(id: '{last_block_id}'[^}}]+}},\n    }},\n  \],\n  exercises:)"

        if re.search(pattern, content):
            replacement = f"id: '{last_block_id}'"
            # Find the block and add after it
            # This is complex, let's try a simpler approach
            pass

        # Simpler approach: find the exercises start after the last block
        # Pattern: find "    },\n  ],\n  exercises:" after the last_block_id

        # Find position of last_block_id
        pos = content.find(f"id: '{last_block_id}'")
        if pos == -1:
            print(f"Could not find {last_block_id}")
            continue

        # Find the next occurrence of "],\n  exercises:" after this position
        exercises_pattern = "],\n  exercises:"
        exercises_pos = content.find(exercises_pattern, pos)
        if exercises_pos == -1:
            print(f"Could not find exercises after {last_block_id}")
            continue

        # Find the position of the closing brace before exercises
        # Look backwards from exercises_pos to find "},\n  ]"
        closing_pos = content.rfind("},\n  ]", pos, exercises_pos + len(exercises_pattern))
        if closing_pos == -1:
            closing_pos = content.rfind("},\n    },\n  ]", pos, exercises_pos + len(exercises_pattern))

        if closing_pos == -1:
            print(f"Could not find closing brace for {last_block_id}")
            continue

        # Insert the oppsummering block after the closing brace
        insert_pos = closing_pos + 2  # After "},"

        content = content[:insert_pos] + "\n" + opp_block + content[insert_pos:]
        changes_made += 1
        print(f"Added oppsummering for {oppsummering['id']}")

    # Write the modified content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\nTotal changes made: {changes_made}")

if __name__ == "__main__":
    import sys
    filepath = sys.argv[1] if len(sys.argv) > 1 else "src/lib/data/textbook-content-helseoppvekst-vg1.ts"
    add_oppsummering_to_file(filepath)
