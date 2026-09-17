import crypto from "crypto";

/**
 * Signerer Bunny Stream-embed-URL-er server-side.
 *
 * Bakgrunn: `/api/solution-videos` gater OPPSLAGET (hasCourseAccess), men
 * ikke AVSPILLINGEN. Uten token er `iframe.mediadelivery.net/embed/<lib>/<guid>`
 * en evigvarende, delbar lenke — betalingsmuren forsvinner i det GUID-en er
 * ute. Videoen er det første ekte premium-aktivumet paa VGS-loesningssidene
 * (loesnings-HTML-en ligger i /public og er kun klient-blurret), saa den kan
 * ikke arve en beskyttelse som ikke finnes. Den maa baere sin egen.
 *
 * Bunnys oppskrift for embed view token (docs: Stream → Embed View Token
 * Authentication): sha256_hex(token_security_key + video_id + expiration),
 * levert som `?token=<hex>&expires=<unix-sekunder>`.
 *
 * NB: dette er en ANNEN algoritme enn CDN-pullzone-tokenet i
 * `bunny-lyd-token.ts` (base64(md5_raw(noekkel + sti + utloep))) — Stream har
 * sitt eget skjema. Ikke bland dem.
 *
 * Noekkelen er videobibliotekets token-noekkel. I Bunny er den lik bibliotekets
 * API-noekkel; `BUNNY_STREAM_TOKEN_KEY` finnes likevel som eget navn slik at
 * den kan roteres/settes separat uten kodeendring om Bunny skiller dem.
 * Aldri NEXT_PUBLIC_ — lekker noekkelen kan hvem som helst signere selv.
 */

const BUNNY_EMBED_ORIGIN = "https://iframe.mediadelivery.net";

/** Standard levetid: 6 timer — lang nok for en oekt, kort nok til at en delt lenke doer. */
export const STANDARD_LEVETID_SEKUNDER = 6 * 60 * 60;

function bibliotekId(): string | undefined {
  return process.env.BUNNY_LIBRARY_ID || process.env.NEXT_PUBLIC_BUNNY_LIBRARY_ID;
}

function tokenNokkel(): string | undefined {
  return process.env.BUNNY_STREAM_TOKEN_KEY || process.env.BUNNY_STREAM_API_KEY;
}

function cdnVert(): string | undefined {
  return process.env.BUNNY_CDN_HOSTNAME || process.env.NEXT_PUBLIC_BUNNY_CDN_HOSTNAME;
}

/**
 * Raatokenet for en video. Eksportert for testing/verifisering.
 * `utloep` er UNIX-tid i SEKUNDER (ikke millisekunder).
 */
export function embedToken(videoGuid: string, utloep: number, nokkel: string): string {
  return crypto
    .createHash("sha256")
    .update(`${nokkel}${videoGuid}${utloep}`, "utf8")
    .digest("hex");
}

/**
 * Ferdig signert embed-URL for en Bunny Stream-video.
 *
 * Returnerer null naar biblioteket ikke er konfigurert. Mangler token-noekkelen
 * returneres en USIGNERT URL — biblioteket kan ha token-auth avslaatt (da
 * ignoreres tokenet uansett), og da er en fungerende spiller bedre enn ingen.
 * Naar Daniel slaar paa «Embed View Token Authentication» i Bunny-panelet blir
 * signeringen obligatorisk av seg selv: usignerte embeds gir 403.
 */
export function signerEmbedUrl(
  videoGuid: string,
  levetidSekunder: number = STANDARD_LEVETID_SEKUNDER,
  spoerring: Record<string, string> = {
    autoplay: "true",
    preload: "true",
    responsive: "true",
  },
): string | null {
  const lib = bibliotekId();
  if (!lib || !videoGuid) return null;

  const params = new URLSearchParams(spoerring);
  const nokkel = tokenNokkel();
  if (nokkel) {
    const utloep = Math.floor(Date.now() / 1000) + levetidSekunder;
    params.set("token", embedToken(videoGuid, utloep, nokkel));
    params.set("expires", String(utloep));
  }

  return `${BUNNY_EMBED_ORIGIN}/embed/${lib}/${videoGuid}?${params.toString()}`;
}

/**
 * Thumbnail fra Stream-pullzonen. Denne sonen har ZoneSecurityEnabled=false og
 * er beskyttet av referrer-lista (eksamenssett.no, *.eksamenssett.no,
 * localhost), saa den signeres ikke — den lekker heller ingen avspilling.
 */
export function thumbnailUrl(videoGuid: string): string | null {
  const vert = cdnVert();
  if (!vert || !videoGuid) return null;
  return `https://${vert}/${videoGuid}/thumbnail.jpg`;
}
