import { createHmac } from "node:crypto";

/**
 * Pseudonym bruker-id i trafikkloggen (Daniel 20.10.2026: «Finnes det forresten noen måte vi faktisk
 * kan måle unike brukere på siden og hvor mange ganger hver bruker er innom?»).
 *
 * HMAC-SHA256(user_id, SIDEVISNING_HASH_NOKKEL), forkortet til 32 hex-tegn (128 bit). Samme bruker gir
 * alltid samme verdi, ulike brukere ulike verdier, og uten nøkkelen kan verdien ikke føres tilbake til
 * kontoen. Skolesaga bruker SAMME nøkkel som eksamenssett.no, så samme konto får samme verdi på begge
 * sidene (overlappen telles i skolesaga_trafikk). Beregnes BARE på serveren (/api/sidevisning), fra id-en i den dekodede JWT-en — aldri fra noe
 * klienten sender. Mangler nøkkelen (eller er den for kort), er svaret null og loggingen går som før.
 *
 * Bytter man nøkkelen, får alle nye id-er: tellingen av unike brukere starter da på nytt.
 */
export const HASH_NOKKEL_ENV = "SIDEVISNING_HASH_NOKKEL";
const MIN_NOKKEL_LENGDE = 32;

export function brukerHash(brukerId: string | null | undefined, nokkel = process.env[HASH_NOKKEL_ENV]): string | null {
  if (!brukerId || !nokkel || nokkel.length < MIN_NOKKEL_LENGDE) return null;
  return createHmac("sha256", nokkel).update(brukerId).digest("hex").slice(0, 32);
}
