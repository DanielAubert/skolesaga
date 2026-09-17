/**
 * Oversetter lokale mediestier (/audio/..., /images/...) til Supabase Storage-URL-er.
 *
 * Mediefilene ligger i Storage-bucketen «media» med samme mappestruktur som de
 * hadde under public/. Innholdsdataene (kapittel-JSON, kursfiler) beholder de
 * relative stiene — oversettelsen skjer kun ved rendring, via denne funksjonen.
 *
 * Basen utledes fra NEXT_PUBLIC_SUPABASE_URL (finnes allerede i alle miljøer),
 * så ingen ny miljøvariabel trengs. For å rulle tilbake til lokal servering:
 * legg filene tilbake i public/ og la denne funksjonen returnere path uendret.
 */
const MEDIA_BASE = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media`
  : '';

export function mediaUrl(path: string): string {
  if (!path || !MEDIA_BASE) return path;
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  if (path.startsWith('/audio/') || path.startsWith('/images/')) {
    // Versjonsstempel per bygg (17.9.2026): figurer byttes med samme filnavn, og nettleseren viste gamle kopier
    const v = process.env.NEXT_PUBLIC_MEDIA_VERSION;
    return `${MEDIA_BASE}${path}${v ? `?v=${v}` : ''}`;
  }
  return path;
}
