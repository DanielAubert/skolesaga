/**
 * Delte SEO-hjelpere: canonical-URL-er, openGraph-bilder og JSON-LD-byggere.
 *
 * Prinsipp: ALT som havner i strukturerte data skal komme fra ekte data i
 * kursfilene. Mangler et felt dekning, utelates det — vi finner aldri på
 * forfattere, publiseringsdatoer, vurderinger eller priser.
 */
import type { Metadata } from 'next';
import type { TextbookCourse, TextbookChapterMeta } from '@/lib/types/textbook';
import { mediaUrl } from '@/lib/media';

/** Primærvert. Samme base som sitemap/robots bruker. */
export const SITE_URL = 'https://skolesaga.no';

/** Bygger en absolutt URL av en rot-relativ sti. */
export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Absolutt bilde-URL for openGraph/JSON-LD, eller undefined.
 *
 * Mediefiler ligger i Supabase Storage; mediaUrl() oversetter `/images/…`.
 * Returnerer bare noe når resultatet faktisk er absolutt — ellers utelates
 * bildet heller enn å sende en relativ sti som deles-forhåndsvisning ikke kan
 * hente.
 */
export function absoluteImageUrl(path: string | undefined): string | undefined {
  if (!path) return undefined;
  const url = mediaUrl(path);
  return url.startsWith('http') ? url : undefined;
}

/** Minutter → ISO 8601-varighet (PT45M, PT1H30M). Undefined ved ugyldig verdi. */
export function isoDuration(minutes: number | undefined): string | undefined {
  if (!minutes || !Number.isFinite(minutes) || minutes <= 0) return undefined;
  const total = Math.round(minutes);
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h === 0) return `PT${m}M`;
  return m === 0 ? `PT${h}H` : `PT${h}H${m}M`;
}

/**
 * Canonical + openGraph + twitter i ett. `path` er rot-relativ («/bok/1t»).
 * Canonical settes alltid — sider uten egen canonical peker på seg selv.
 */
export function pageMetadata(opts: {
  path: string;
  canonicalPath?: string;
  title: string;
  description: string;
  image?: string;
  ogType?: 'website' | 'article';
}): Pick<Metadata, 'alternates' | 'openGraph' | 'twitter'> {
  const canonical = absoluteUrl(opts.canonicalPath ?? opts.path);
  const image = absoluteImageUrl(opts.image);
  return {
    alternates: { canonical },
    openGraph: {
      type: opts.ogType ?? 'website',
      locale: 'nb_NO',
      siteName: 'Skolesaga',
      url: canonical,
      title: opts.title,
      description: opts.description,
      ...(image ? { images: [{ url: image, alt: opts.title }] } : {}),
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: opts.title,
      description: opts.description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/** Skolesaga som tilbyder — samme identitet som EducationalOrganization i rot-layouten. */
const PROVIDER = {
  '@type': 'EducationalOrganization',
  name: 'Skolesaga',
  url: SITE_URL,
} as const;

/**
 * Løser hvilken URL et kapittel skal peke på som canonical.
 *
 * Narrativkapitler («lesevennlig versjon») er nesten-duplikater av
 * originalkapittelet og skal aldri kanonisere til seg selv. Både de 436
 * narrativene med egen metadata-oppføring og de ~4 800 som getChapterMeta
 * syntetiserer har `isNarrativeVersion: true` + `linkedChapterId` = original-id,
 * så samme regel dekker begge. Finnes ikke originalen i kurset, faller vi
 * tilbake til kapittelet selv — aldri til en URL som ikke finnes.
 */
export function canonicalChapterId(
  course: TextbookCourse,
  chapterMeta: TextbookChapterMeta,
): string {
  if (chapterMeta.isNarrativeVersion && chapterMeta.linkedChapterId) {
    const original = course.chapters.find((c) => c.id === chapterMeta.linkedChapterId);
    if (original) return original.id;
  }
  return chapterMeta.id;
}

/**
 * Beste tilgjengelige delebilde for et kapittel: kapittelets eget bilde, ellers
 * det tilknyttede kapittelets (narrativ-oppføringer har ofte ikke eget bilde),
 * ellers bokas forsidebilde. Returnerer undefined når ingen av dem finnes —
 * vi gjetter aldri på en bildesti.
 */
export function chapterImagePath(
  course: TextbookCourse,
  chapterMeta: TextbookChapterMeta,
): string | undefined {
  if (chapterMeta.coverImage) return chapterMeta.coverImage;
  const linked = chapterMeta.linkedChapterId
    ? course.chapters.find((c) => c.id === chapterMeta.linkedChapterId)
    : undefined;
  return linked?.coverImage ?? course.coverImage;
}

/**
 * JSON-LD for en kursside. Kun felt med dekning i kursdataene.
 *
 * Utelatt med vilje: `offers`/`isAccessibleForFree` (prismodellen er ikke
 * fastsatt i data), `aggregateRating` (ingen vurderinger finnes), `author`,
 * `datePublished`/`dateModified` (kursdataene har ingen datoer).
 */
export function courseJsonLd(course: TextbookCourse, sectionNames: Record<string, string>) {
  const chapters = course.chapters.filter((c) => !c.isNarrativeVersion);
  const totalMinutes = chapters.reduce((sum, c) => sum + (c.estimatedMinutes || 0), 0);
  const workload = isoDuration(totalMinutes);
  const image = absoluteImageUrl(course.coverImage);

  // Seksjonsinndelingen finnes bare når kurset har navngitte seksjoner.
  const sections = Object.entries(sectionNames)
    .map(([num, name]) => {
      const inSection = chapters.filter((c) => c.number.split('.')[0] === num);
      if (inSection.length === 0) return null;
      const minutes = inSection.reduce((sum, c) => sum + (c.estimatedMinutes || 0), 0);
      const time = isoDuration(minutes);
      return {
        '@type': 'Syllabus',
        name,
        ...(time ? { timeRequired: time } : {}),
      };
    })
    .filter((s): s is { '@type': string; name: string; timeRequired?: string } => s !== null);

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    url: absoluteUrl(`/bok/${course.id}`),
    provider: PROVIDER,
    educationalLevel: course.level,
    inLanguage: 'nb',
    ...(image ? { image } : {}),
    ...(sections.length > 0 ? { syllabusSections: sections } : {}),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      name: course.title,
      ...(workload ? { courseWorkload: workload } : {}),
    },
  };
}

/**
 * JSON-LD for en kapittelside.
 *
 * LearningResource (ikke Article): innholdet er et lærebokkapittel med
 * læringsmål, estimert tidsbruk og oppgaver — ikke en journalistisk artikkel
 * med forfatter og publiseringsdato, som Article forventer.
 *
 * Utelatt med vilje: `author`, `datePublished`, `aggregateRating`,
 * `educationalUse`-detaljer utover det dataene faktisk sier.
 */
export function chapterJsonLd(
  course: TextbookCourse,
  chapterMeta: TextbookChapterMeta,
  canonicalUrl: string,
) {
  const time = isoDuration(chapterMeta.estimatedMinutes);
  const image = absoluteImageUrl(chapterMeta.coverImage);
  const goals = chapterMeta.competenceGoals?.filter(Boolean) ?? [];

  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: `${chapterMeta.number} ${chapterMeta.title}`,
    description: chapterMeta.description,
    url: canonicalUrl,
    learningResourceType: 'Lærebokkapittel',
    educationalLevel: course.level,
    inLanguage: 'nb',
    provider: PROVIDER,
    isPartOf: {
      '@type': 'Course',
      name: course.title,
      url: absoluteUrl(`/bok/${course.id}`),
      provider: PROVIDER,
    },
    ...(time ? { timeRequired: time } : {}),
    ...(image ? { image } : {}),
    ...(chapterMeta.topics && chapterMeta.topics.length > 0
      ? { teaches: chapterMeta.topics }
      : {}),
    ...(goals.length > 0 && course.curriculum === 'LK20'
      ? {
          educationalAlignment: goals.map((goal) => ({
            '@type': 'AlignmentObject',
            alignmentType: 'teaches',
            educationalFramework: 'LK20',
            targetName: goal,
          })),
        }
      : {}),
  };
}

/** Serialiserer JSON-LD trygt for innsetting i en <script>-tag. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
