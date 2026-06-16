/**
 * Lærebøker for 7. klasse (unntatt matematikk)
 *
 * Alle fag med kapitler og oppgaver basert på LK20
 */

import type { TextbookCourse } from '@/lib/types/textbook';

// ============================================================================

export const COURSE_NORSK_7: TextbookCourse = {
  id: 'norsk-7',
  title: 'Norsk 7. klasse',
  level: '7. klasse',
  description: 'Norsk for 7. trinn - lesing, skriving, grammatikk og muntlig',
  curriculum: 'LK20',
  icon: '📖',
  chapters: [
    { id: 'norsk-7-1-1', number: '1.1', title: 'Lesestrategier for lengre tekster', description: 'Avanserte lesestrategier.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Lesestrategier', 'Notatteknikk', 'Oppsummering'], competenceGoals: ['bruke varierte lesestrategier'], wip: true, linkedChapterId: 'norsk-7-1-1-narrativ' },
    { id: 'norsk-7-1-2', number: '1.2', title: 'Skjønnlitteratur', description: 'Romaner, noveller og dikt.', estimatedMinutes: 50, exerciseCount: 10, topics: ['Roman', 'Novelle', 'Dikt', 'Litterær analyse'], competenceGoals: ['lese og analysere skjønnlitteratur'], wip: true, linkedChapterId: 'norsk-7-1-2-narrativ' },
    { id: 'norsk-7-1-3', number: '1.3', title: 'Sakprosa og kildekritikk', description: 'Vurdere kilder og informasjon.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Sakprosa', 'Kildekritikk', 'Fakta', 'Meninger'], competenceGoals: ['vurdere kilder kritisk'], wip: true, linkedChapterId: 'norsk-7-1-3-narrativ' },
    { id: 'norsk-7-2-1', number: '2.1', title: 'Argumenterende tekster', description: 'Skrive tekster som argumenterer.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Argumentasjon', 'Påstand', 'Begrunnelse', 'Eksempler'], competenceGoals: ['skrive argumenterende tekster'], wip: true, linkedChapterId: 'norsk-7-2-1-narrativ' },
    { id: 'norsk-7-2-2', number: '2.2', title: 'Kreativ skriving', description: 'Skrive noveller og fortellinger.', estimatedMinutes: 55, exerciseCount: 5, topics: ['Novelle', 'Fortelling', 'Virkemidler', 'Spenning'], competenceGoals: ['skrive kreative tekster'], wip: true, linkedChapterId: 'norsk-7-2-2-narrativ' },
    { id: 'norsk-7-2-3', number: '2.3', title: 'Språk og stil', description: 'Variere språk og setningsoppbygging.', estimatedMinutes: 40, exerciseCount: 10, topics: ['Stil', 'Ordvalg', 'Setningsvariasjon'], competenceGoals: ['variere språk og uttrykksformer'], wip: true, linkedChapterId: 'norsk-7-2-3-narrativ' },
    { id: 'norsk-7-3-1', number: '3.1', title: 'Ordklasser - alle', description: 'Repetisjon og utvidelse av ordklasser.', estimatedMinutes: 50, exerciseCount: 12, topics: ['Ordklasser', 'Substantiv', 'Verb', 'Adjektiv', 'Adverb', 'Pronomen'], competenceGoals: ['kjenne alle ordklassene'], wip: true, linkedChapterId: 'norsk-7-3-1-narrativ' },
    { id: 'norsk-7-3-2', number: '3.2', title: 'Setningsanalyse', description: 'Finne setningsledd.', estimatedMinutes: 45, exerciseCount: 12, topics: ['Subjekt', 'Verbal', 'Objekt', 'Adverbial'], competenceGoals: ['analysere setninger'], wip: true, linkedChapterId: 'norsk-7-3-2-narrativ' },
    { id: 'norsk-7-4-1', number: '4.1', title: 'Debatt og diskusjon', description: 'Delta i debatter med argumenter.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Debatt', 'Argumenter', 'Motargumenter'], competenceGoals: ['delta i debatter'], wip: true, linkedChapterId: 'norsk-7-4-1-narrativ' },
    { id: 'norsk-7-4-2', number: '4.2', title: 'Presentasjonsteknikk', description: 'Holde engasjerende presentasjoner.', estimatedMinutes: 40, exerciseCount: 5, topics: ['Presentasjon', 'Kroppsspråk', 'Visuell støtte'], competenceGoals: ['holde presentasjoner'], wip: true, linkedChapterId: 'norsk-7-4-2-narrativ' },
  ],
};

// ============================================================================

export const COURSE_ENGELSK_7: TextbookCourse = {
  id: 'engelsk-7',
  title: 'English 7th Grade',
  level: '7. klasse',
  description: 'English for 7th grade - reading, writing, speaking and listening',
  curriculum: 'LK20',
  icon: '🇬🇧',
  chapters: [
    { id: 'engelsk-7-1-1', number: '1.1', title: 'Reading Longer Texts', description: 'Read and understand longer stories.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Reading', 'Comprehension', 'Analysis'], competenceGoals: ['lese lengre tekster'], wip: true, linkedChapterId: 'engelsk-7-1-1-narrativ' },
    { id: 'engelsk-7-1-2', number: '1.2', title: 'Vocabulary Building', description: 'Expand vocabulary through context.', estimatedMinutes: 40, exerciseCount: 12, topics: ['Vocabulary', 'Context clues', 'Word formation'], competenceGoals: ['utvide ordforrådet'], wip: true, linkedChapterId: 'engelsk-7-1-2-narrativ' },
    { id: 'engelsk-7-2-1', number: '2.1', title: 'Present Perfect', description: 'Using have/has + past participle.', estimatedMinutes: 50, exerciseCount: 12, topics: ['Present perfect', 'Have/has', 'Past participle'], competenceGoals: ['bruke presens perfektum'], wip: true, linkedChapterId: 'engelsk-7-2-1-narrativ' },
    { id: 'engelsk-7-2-2', number: '2.2', title: 'Future Tenses', description: 'Will, going to, present continuous.', estimatedMinutes: 45, exerciseCount: 12, topics: ['Future', 'Will', 'Going to', 'Plans'], competenceGoals: ['uttrykke fremtid'], wip: true, linkedChapterId: 'engelsk-7-2-2-narrativ' },
    { id: 'engelsk-7-2-3', number: '2.3', title: 'Conditionals', description: 'If-sentences and consequences.', estimatedMinutes: 50, exerciseCount: 10, topics: ['Conditionals', 'If-clauses', 'Consequences'], competenceGoals: ['bruke betingelsessetninger'], wip: true, linkedChapterId: 'engelsk-7-2-3-narrativ' },
    { id: 'engelsk-7-3-1', number: '3.1', title: 'Essay Writing', description: 'Structure and write essays.', estimatedMinutes: 55, exerciseCount: 6, topics: ['Essay', 'Introduction', 'Body', 'Conclusion'], competenceGoals: ['skrive strukturerte tekster'], wip: true, linkedChapterId: 'engelsk-7-3-1-narrativ' },
    { id: 'engelsk-7-3-2', number: '3.2', title: 'Creative Writing', description: 'Write short stories in English.', estimatedMinutes: 50, exerciseCount: 5, topics: ['Creative writing', 'Stories', 'Characters'], competenceGoals: ['skrive kreative tekster'], wip: true, linkedChapterId: 'engelsk-7-3-2-narrativ' },
    { id: 'engelsk-7-4-1', number: '4.1', title: 'Discussions and Debates', description: 'Express opinions and argue.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Discussions', 'Opinions', 'Arguments'], competenceGoals: ['delta i diskusjoner'], wip: true, linkedChapterId: 'engelsk-7-4-1-narrativ' },
    { id: 'engelsk-7-4-2', number: '4.2', title: 'English-Speaking World', description: 'Culture in USA, UK, Australia.', estimatedMinutes: 50, exerciseCount: 8, topics: ['Culture', 'USA', 'UK', 'Australia'], competenceGoals: ['kjenne engelskspråklig kultur'], wip: true, linkedChapterId: 'engelsk-7-4-2-narrativ' },
  ],
};

// ============================================================================

export const COURSE_NATURFAG_7: TextbookCourse = {
  id: 'naturfag-7',
  title: 'Naturfag 7. klasse',
  level: '7. klasse',
  description: 'Naturfag for 7. trinn - kroppen, økologi, fysikk og kjemi',
  curriculum: 'LK20',
  icon: '🔬',
  chapters: [
    { id: 'naturfag-7-1-1', number: '1.1', title: 'Nervesystemet', description: 'Hjerne, ryggmarg og nerver.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Nervesystem', 'Hjerne', 'Sanser', 'Reflekser'], competenceGoals: ['forklare nervesystemet'], wip: true, linkedChapterId: 'naturfag-7-1-1-narrativ' },
    { id: 'naturfag-7-1-2', number: '1.2', title: 'Hormoner og pubertet', description: 'Hormonelle endringer.', estimatedMinutes: 50, exerciseCount: 8, topics: ['Hormoner', 'Pubertet', 'Endringer'], competenceGoals: ['forstå hormonelle endringer'], wip: true, linkedChapterId: 'naturfag-7-1-2-narrativ' },
    { id: 'naturfag-7-2-1', number: '2.1', title: 'Økosystemer', description: 'Samspill i naturen.', estimatedMinutes: 50, exerciseCount: 10, topics: ['Økosystem', 'Næringskjeder', 'Kretsløp'], competenceGoals: ['beskrive økosystemer'], wip: true, linkedChapterId: 'naturfag-7-2-1-narrativ' },
    { id: 'naturfag-7-2-2', number: '2.2', title: 'Biologisk mangfold', description: 'Arter og naturvern.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Artsmangfold', 'Truede arter', 'Naturvern'], competenceGoals: ['forstå biologisk mangfold'], wip: true, linkedChapterId: 'naturfag-7-2-2-narrativ' },
    { id: 'naturfag-7-2-3', number: '2.3', title: 'Klimaendringer', description: 'Årsaker og konsekvenser.', estimatedMinutes: 50, exerciseCount: 8, topics: ['Klima', 'Drivhuseffekt', 'Tiltak'], competenceGoals: ['drøfte klimaendringer'], wip: true, linkedChapterId: 'naturfag-7-2-3-narrativ' },
    { id: 'naturfag-7-3-1', number: '3.1', title: 'Krefter og bevegelse', description: 'Newtons lover.', estimatedMinutes: 50, exerciseCount: 10, topics: ['Kraft', 'Bevegelse', 'Newton', 'Friksjon'], competenceGoals: ['forklare krefter'], wip: true, linkedChapterId: 'naturfag-7-3-1-narrativ' },
    { id: 'naturfag-7-3-2', number: '3.2', title: 'Energi', description: 'Energiformer og energibevaring.', estimatedMinutes: 45, exerciseCount: 10, topics: ['Energi', 'Kinetisk', 'Potensiell', 'Bevaring'], competenceGoals: ['forklare energibevaring'], wip: true, linkedChapterId: 'naturfag-7-3-2-narrativ' },
    { id: 'naturfag-7-4-1', number: '4.1', title: 'Atomer og molekyler', description: 'Stoffers oppbygning.', estimatedMinutes: 50, exerciseCount: 10, topics: ['Atomer', 'Molekyler', 'Periodesystemet'], competenceGoals: ['forklare atomenes oppbygning'], wip: true, linkedChapterId: 'naturfag-7-4-1-narrativ' },
    { id: 'naturfag-7-4-2', number: '4.2', title: 'Kjemiske reaksjoner', description: 'Når stoffer reagerer.', estimatedMinutes: 50, exerciseCount: 10, topics: ['Reaksjoner', 'Reaktanter', 'Produkter'], competenceGoals: ['forklare kjemiske reaksjoner'], wip: true, linkedChapterId: 'naturfag-7-4-2-narrativ' },
  ],
};

// ============================================================================

export const COURSE_SAMFUNNSFAG_7: TextbookCourse = {
  id: 'samfunnsfag-7',
  title: 'Samfunnsfag 7. klasse',
  level: '7. klasse',
  description: 'Samfunnsfag for 7. trinn - historie, geografi og samfunn',
  curriculum: 'LK20',
  icon: '🌍',
  chapters: [
    { id: 'samfunnsfag-7-1-1', number: '1.1', title: 'Opplysningstiden', description: 'Nye ideer om frihet og fornuft.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Opplysningstid', 'Filosofi', 'Menneskerettigheter'], competenceGoals: ['forklare opplysningstiden'], wip: true, linkedChapterId: 'samfunnsfag-7-1-1-narrativ' },
    { id: 'samfunnsfag-7-1-2', number: '1.2', title: 'Den industrielle revolusjonen', description: 'Industrialisering og samfunnsendringer.', estimatedMinutes: 50, exerciseCount: 8, topics: ['Industri', 'Fabrikker', 'Urbanisering'], competenceGoals: ['beskrive industrialiseringen'], wip: true, linkedChapterId: 'samfunnsfag-7-1-2-narrativ' },
    { id: 'samfunnsfag-7-2-1', number: '2.1', title: 'Norges selvstendighet', description: '1814, Grunnloven og unionen.', estimatedMinutes: 50, exerciseCount: 8, topics: ['1814', 'Grunnloven', 'Eidsvoll'], competenceGoals: ['forklare Norges selvstendighet'], wip: true, linkedChapterId: 'samfunnsfag-7-2-1-narrativ' },
    { id: 'samfunnsfag-7-2-2', number: '2.2', title: 'Demokratiets utvikling', description: 'Stemmerett og likestilling.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Stemmerett', 'Likestilling', 'Demokrati'], competenceGoals: ['beskrive demokratiets utvikling'], wip: true, linkedChapterId: 'samfunnsfag-7-2-2-narrativ' },
    { id: 'samfunnsfag-7-3-1', number: '3.1', title: 'Globalisering', description: 'Verden blir mindre.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Globalisering', 'Handel', 'Kultur'], competenceGoals: ['forklare globalisering'], wip: true, linkedChapterId: 'samfunnsfag-7-3-1-narrativ' },
    { id: 'samfunnsfag-7-3-2', number: '3.2', title: 'Fattigdom og ulikhet', description: 'Forskjeller i verden.', estimatedMinutes: 50, exerciseCount: 8, topics: ['Fattigdom', 'Ulikhet', 'Utvikling'], competenceGoals: ['drøfte global ulikhet'], wip: true, linkedChapterId: 'samfunnsfag-7-3-2-narrativ' },
    { id: 'samfunnsfag-7-4-1', number: '4.1', title: 'Klima og miljø', description: 'Globale miljøutfordringer.', estimatedMinutes: 50, exerciseCount: 8, topics: ['Klima', 'Miljø', 'Bærekraft'], competenceGoals: ['drøfte miljøutfordringer'], wip: true, linkedChapterId: 'samfunnsfag-7-4-1-narrativ' },
    { id: 'samfunnsfag-7-4-2', number: '4.2', title: 'Medier og kritisk tenkning', description: 'Vurdere informasjon.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Medier', 'Kildekritikk', 'Fake news'], competenceGoals: ['vurdere medieinnhold kritisk'], wip: true, linkedChapterId: 'samfunnsfag-7-4-2-narrativ' },
  ],
};

// ============================================================================

export const COURSE_KRLE_7: TextbookCourse = {
  id: 'krle-7',
  title: 'KRLE 7. klasse',
  level: '7. klasse',
  description: 'KRLE for 7. trinn - religion, filosofi og etikk',
  curriculum: 'LK20',
  icon: '🕊️',
  chapters: [
    { id: 'krle-7-1-1', number: '1.1', title: 'Kristendommens historie', description: 'Fra urkirken til i dag.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Kirkehistorie', 'Reformasjonen', 'Økumeni'], competenceGoals: ['forklare kristendommens historie'], wip: true, linkedChapterId: 'krle-7-1-1-narrativ' },
    { id: 'krle-7-1-2', number: '1.2', title: 'Kristne retninger', description: 'Katolikker, protestanter og ortodokse.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Katolisisme', 'Protestantisme', 'Ortodoksi'], competenceGoals: ['beskrive kristne retninger'], wip: true, linkedChapterId: 'krle-7-1-2-narrativ' },
    { id: 'krle-7-2-1', number: '2.1', title: 'Hinduisme', description: 'Guder, karma og reinkarnasjon.', estimatedMinutes: 50, exerciseCount: 8, topics: ['Hinduisme', 'Karma', 'Guder'], competenceGoals: ['forklare hinduisme'], wip: true, linkedChapterId: 'krle-7-2-1-narrativ' },
    { id: 'krle-7-2-2', number: '2.2', title: 'Buddhisme', description: 'Buddha og veien til opplysning.', estimatedMinutes: 50, exerciseCount: 8, topics: ['Buddhisme', 'Buddha', 'Nirvana'], competenceGoals: ['forklare buddhisme'], wip: true, linkedChapterId: 'krle-7-2-2-narrativ' },
    { id: 'krle-7-3-1', number: '3.1', title: 'Filosofiske spørsmål', description: 'Hva er rett og galt?', estimatedMinutes: 45, exerciseCount: 6, topics: ['Filosofi', 'Etikk', 'Moral'], competenceGoals: ['reflektere over filosofiske spørsmål'], wip: true, linkedChapterId: 'krle-7-3-1-narrativ' },
    { id: 'krle-7-3-2', number: '3.2', title: 'Menneskerettigheter', description: 'Rettigheter for alle.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Menneskerettigheter', 'FN', 'Rettigheter'], competenceGoals: ['forklare menneskerettigheter'], wip: true, linkedChapterId: 'krle-7-3-2-narrativ' },
    { id: 'krle-7-4-1', number: '4.1', title: 'Etiske dilemmaer', description: 'Vanskelige valg.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Dilemmaer', 'Valg', 'Konsekvenser'], competenceGoals: ['drøfte etiske dilemmaer'], wip: true, linkedChapterId: 'krle-7-4-1-narrativ' },
    { id: 'krle-7-4-2', number: '4.2', title: 'Identitet og tilhørighet', description: 'Hvem er jeg?', estimatedMinutes: 45, exerciseCount: 6, topics: ['Identitet', 'Tilhørighet', 'Mangfold'], competenceGoals: ['reflektere over identitet'], wip: true, linkedChapterId: 'krle-7-4-2-narrativ' },
  ],
};

// ============================================================================

export const COURSE_KUNST_7: TextbookCourse = {
  id: 'kunst-7',
  title: 'Kunst og håndverk 7. klasse',
  level: '7. klasse',
  description: 'Kunst og håndverk for 7. trinn',
  curriculum: 'LK20',
  icon: '🎨',
  chapters: [
    { id: 'kunst-7-1-1', number: '1.1', title: 'Perspektivtegning', description: 'Dybde og rom i bilder.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Perspektiv', 'Dybde', 'Rom'], competenceGoals: ['bruke perspektiv'], wip: true, linkedChapterId: 'kunst-7-1-1-narrativ' },
    { id: 'kunst-7-1-2', number: '1.2', title: 'Portrett og figur', description: 'Tegne mennesker.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Portrett', 'Figur', 'Proporsjoner'], competenceGoals: ['tegne mennesker'], wip: true, linkedChapterId: 'kunst-7-1-2-narrativ' },
    { id: 'kunst-7-2-1', number: '2.1', title: 'Skulptur', description: '3D-forming i ulike materialer.', estimatedMinutes: 55, exerciseCount: 5, topics: ['Skulptur', 'Leire', 'Tre'], competenceGoals: ['lage skulpturer'], wip: true, linkedChapterId: 'kunst-7-2-1-narrativ' },
    { id: 'kunst-7-2-2', number: '2.2', title: 'Tekstil og design', description: 'Sy og designe.', estimatedMinutes: 50, exerciseCount: 5, topics: ['Tekstil', 'Søm', 'Design'], competenceGoals: ['arbeide med tekstil'], wip: true, linkedChapterId: 'kunst-7-2-2-narrativ' },
    { id: 'kunst-7-3-1', number: '3.1', title: 'Digital kunst', description: 'Skape med digitale verktøy.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Digital', 'Bildebehandling', 'Grafikk'], competenceGoals: ['bruke digitale verktøy'], wip: true, linkedChapterId: 'kunst-7-3-1-narrativ' },
    { id: 'kunst-7-3-2', number: '3.2', title: 'Arkitektur', description: 'Bygninger og rom.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Arkitektur', 'Bygninger', 'Modeller'], competenceGoals: ['forstå arkitektur'], wip: true, linkedChapterId: 'kunst-7-3-2-narrativ' },
    { id: 'kunst-7-4-1', number: '4.1', title: 'Kunsthistorie - moderne', description: 'Kunst fra 1900-tallet.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Modernisme', 'Kunsthistorie', 'Retninger'], competenceGoals: ['kjenne moderne kunst'], wip: true, linkedChapterId: 'kunst-7-4-1-narrativ' },
    { id: 'kunst-7-4-2', number: '4.2', title: 'Bærekraftig design', description: 'Gjenbruk og miljø.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Bærekraft', 'Gjenbruk', 'Miljø'], competenceGoals: ['designe bærekraftig'], wip: true, linkedChapterId: 'kunst-7-4-2-narrativ' },
  ],
};

// ============================================================================

export const COURSE_MUSIKK_7: TextbookCourse = {
  id: 'musikk-7',
  title: 'Musikk 7. klasse',
  level: '7. klasse',
  description: 'Musikk for 7. trinn',
  curriculum: 'LK20',
  icon: '🎵',
  chapters: [
    { id: 'musikk-7-1-1', number: '1.1', title: 'Flerstemt sang', description: 'Synge i harmonier.', estimatedMinutes: 45, exerciseCount: 5, topics: ['Flerstemt', 'Harmoni', 'Kor'], competenceGoals: ['synge flerstemt'], wip: true, linkedChapterId: 'musikk-7-1-1-narrativ' },
    { id: 'musikk-7-1-2', number: '1.2', title: 'Stemmepleie', description: 'Ta vare på stemmen.', estimatedMinutes: 40, exerciseCount: 5, topics: ['Stemme', 'Teknikk', 'Pust'], competenceGoals: ['bruke stemmen bevisst'], wip: true, linkedChapterId: 'musikk-7-1-2-narrativ' },
    { id: 'musikk-7-2-1', number: '2.1', title: 'Samspill og band', description: 'Spille sammen.', estimatedMinutes: 50, exerciseCount: 5, topics: ['Samspill', 'Band', 'Rytme'], competenceGoals: ['spille sammen med andre'], wip: true, linkedChapterId: 'musikk-7-2-1-narrativ' },
    { id: 'musikk-7-2-2', number: '2.2', title: 'Akkorder og akkompagnement', description: 'Spille akkorder.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Akkorder', 'Gitar', 'Piano'], competenceGoals: ['akkompagnere sanger'], wip: true, linkedChapterId: 'musikk-7-2-2-narrativ' },
    { id: 'musikk-7-3-1', number: '3.1', title: 'Komponering', description: 'Lage egen musikk.', estimatedMinutes: 55, exerciseCount: 4, topics: ['Komponering', 'Melodi', 'Tekst'], competenceGoals: ['komponere musikk'], wip: true, linkedChapterId: 'musikk-7-3-1-narrativ' },
    { id: 'musikk-7-3-2', number: '3.2', title: 'Musikkteknologi', description: 'Bruke digitale verktøy.', estimatedMinutes: 50, exerciseCount: 5, topics: ['Teknologi', 'Opptak', 'Produksjon'], competenceGoals: ['bruke musikkteknologi'], wip: true, linkedChapterId: 'musikk-7-3-2-narrativ' },
    { id: 'musikk-7-4-1', number: '4.1', title: 'Musikkhistorie', description: 'Fra klassisk til pop.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Historie', 'Sjangre', 'Artister'], competenceGoals: ['kjenne musikkhistorie'], wip: true, linkedChapterId: 'musikk-7-4-1-narrativ' },
    { id: 'musikk-7-4-2', number: '4.2', title: 'Musikk i samfunnet', description: 'Musikkens rolle.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Samfunn', 'Identitet', 'Kultur'], competenceGoals: ['forstå musikkens rolle'], wip: true, linkedChapterId: 'musikk-7-4-2-narrativ' },
  ],
};

// ============================================================================

export const COURSE_MAT_7: TextbookCourse = {
  id: 'mat-7',
  title: 'Mat og helse 7. klasse',
  level: '7. klasse',
  description: 'Mat og helse for 7. trinn',
  curriculum: 'LK20',
  icon: '🍳',
  chapters: [
    { id: 'mat-7-1-1', number: '1.1', title: 'Næringsstoffer i dybden', description: 'Vitaminer, mineraler og energi.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Næringsstoffer', 'Vitaminer', 'Mineraler'], competenceGoals: ['forklare næringsstoffer'], wip: true, linkedChapterId: 'mat-7-1-1-narrativ' },
    { id: 'mat-7-1-2', number: '1.2', title: 'Kosthold og helse', description: 'Sammenheng mellom mat og helse.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Kosthold', 'Helse', 'Livsstil'], competenceGoals: ['forstå kostholdets betydning'], wip: true, linkedChapterId: 'mat-7-1-2-narrativ' },
    { id: 'mat-7-2-1', number: '2.1', title: 'Mattrygghet', description: 'Hygiene og oppbevaring.', estimatedMinutes: 40, exerciseCount: 8, topics: ['Mattrygghet', 'Hygiene', 'Oppbevaring'], competenceGoals: ['praktisere mattrygghet'], wip: true, linkedChapterId: 'mat-7-2-1-narrativ' },
    { id: 'mat-7-2-2', number: '2.2', title: 'Bærekraftig mat', description: 'Miljøvennlige valg.', estimatedMinutes: 45, exerciseCount: 8, topics: ['Bærekraft', 'Miljø', 'Matsvinn'], competenceGoals: ['velge bærekraftig'], wip: true, linkedChapterId: 'mat-7-2-2-narrativ' },
    { id: 'mat-7-3-1', number: '3.1', title: 'Avansert matlaging', description: 'Teknikker og retter.', estimatedMinutes: 55, exerciseCount: 6, topics: ['Teknikker', 'Retter', 'Planlegging'], competenceGoals: ['lage sammensatte måltider'], wip: true, linkedChapterId: 'mat-7-3-1-narrativ' },
    { id: 'mat-7-3-2', number: '3.2', title: 'Internasjonal mat', description: 'Retter fra verden.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Internasjonalt', 'Kulturer', 'Smaker'], competenceGoals: ['lage mat fra ulike kulturer'], wip: true, linkedChapterId: 'mat-7-3-2-narrativ' },
    { id: 'mat-7-4-1', number: '4.1', title: 'Matkultur og tradisjoner', description: 'Mat og identitet.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Kultur', 'Tradisjoner', 'Høytider'], competenceGoals: ['forstå matkultur'], wip: true, linkedChapterId: 'mat-7-4-1-narrativ' },
    { id: 'mat-7-4-2', number: '4.2', title: 'Måltidsplanlegging', description: 'Planlegge ukes meny.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Planlegging', 'Økonomi', 'Variasjon'], competenceGoals: ['planlegge måltider'], wip: true, linkedChapterId: 'mat-7-4-2-narrativ' },
  ],
};

// ============================================================================

export const COURSE_KROPPSOVING_7: TextbookCourse = {
  id: 'kroppsoving-7',
  title: 'Kroppsøving 7. klasse',
  level: '7. klasse',
  description: 'Kroppsøving for 7. trinn',
  curriculum: 'LK20',
  icon: '🏃',
  chapters: [
    { id: 'kroppsoving-7-1-1', number: '1.1', title: 'Styrke og utholdenhet', description: 'Trening av kroppen.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Styrke', 'Utholdenhet', 'Trening'], competenceGoals: ['trene styrke og utholdenhet'], wip: true, linkedChapterId: 'kroppsoving-7-1-1-narrativ' },
    { id: 'kroppsoving-7-1-2', number: '1.2', title: 'Koordinasjon og teknikk', description: 'Bevegelseskvalitet.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Koordinasjon', 'Teknikk', 'Bevegelse'], competenceGoals: ['utvikle bevegelseskompetanse'], wip: true, linkedChapterId: 'kroppsoving-7-1-2-narrativ' },
    { id: 'kroppsoving-7-2-1', number: '2.1', title: 'Lagspill - strategi', description: 'Taktikk i lagspill.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Lagspill', 'Strategi', 'Samarbeid'], competenceGoals: ['bruke strategi i lagspill'], wip: true, linkedChapterId: 'kroppsoving-7-2-1-narrativ' },
    { id: 'kroppsoving-7-2-2', number: '2.2', title: 'Individuelle idretter', description: 'Friidrett og turn.', estimatedMinutes: 50, exerciseCount: 6, topics: ['Friidrett', 'Turn', 'Teknikk'], competenceGoals: ['utøve individuelle idretter'], wip: true, linkedChapterId: 'kroppsoving-7-2-2-narrativ' },
    { id: 'kroppsoving-7-3-1', number: '3.1', title: 'Friluftsliv - planlegging', description: 'Planlegge turer.', estimatedMinutes: 50, exerciseCount: 5, topics: ['Friluftsliv', 'Planlegging', 'Kart'], competenceGoals: ['planlegge friluftsaktiviteter'], wip: true, linkedChapterId: 'kroppsoving-7-3-1-narrativ' },
    { id: 'kroppsoving-7-3-2', number: '3.2', title: 'Orientering', description: 'Kart og kompass.', estimatedMinutes: 45, exerciseCount: 6, topics: ['Orientering', 'Kart', 'Kompass'], competenceGoals: ['bruke kart og kompass'], wip: true, linkedChapterId: 'kroppsoving-7-3-2-narrativ' },
    { id: 'kroppsoving-7-4-1', number: '4.1', title: 'Kropp og selvbilde', description: 'Akseptere kroppen.', estimatedMinutes: 40, exerciseCount: 5, topics: ['Kropp', 'Selvbilde', 'Helse'], competenceGoals: ['reflektere over kropp og selvbilde'], wip: true, linkedChapterId: 'kroppsoving-7-4-1-narrativ' },
    { id: 'kroppsoving-7-4-2', number: '4.2', title: 'Fair play og inkludering', description: 'Alle skal med.', estimatedMinutes: 40, exerciseCount: 5, topics: ['Fair play', 'Inkludering', 'Respekt'], competenceGoals: ['praktisere fair play'], wip: true, linkedChapterId: 'kroppsoving-7-4-2-narrativ' },
  ],
};
