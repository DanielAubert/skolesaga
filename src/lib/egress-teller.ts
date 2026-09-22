/**
 * EGRESSTELLER — melder inn hvor mye medie-proxyen henter fra Supabase Storage
 * (Daniel 22.9.2026: «gjør det så jeg slipper kjipe overraskelser»).
 *
 * HVORFOR DENNE FINNES: vakten på eksamenssett leser en Prometheus-måler på
 * databasenoden. Storage teller IKKE med der — målt 22.9.2026 rørte en 3,5 MB
 * lydfil hentet rett fra Storage ikke måleren i det hele tatt. Og det var
 * nettopp Storage som sprakk kvoten: versjonsmerket i medie-URL-ene var
 * byggetidspunktet, så hver utrulling ga nye adresser til 2,5 GB bilder og lyd
 * og tømte CDN-mellomlageret.
 *
 * Denne proxyen er eneste vei inn til `media`-bøtta, så den kan telle selv.
 *
 * ØVRE GRENSE, IKKE EKSAKT TALL: proxyen henter oppstrøms med `force-cache`,
 * og Next kan svare fra sitt eget datalager uten å gå til Supabase. Vi kan
 * ikke se forskjell på de to utenfra, så tallet her er alt proxyen har hentet
 * — aldri mindre enn den faktiske Storage-trafikken, ofte litt mer. For en
 * vakt er det riktig vei å bomme: den roper litt for tidlig, aldri for sent.
 * Tallet vises derfor som «lager (øvre grense)» på adminsiden.
 *
 * KOSTNAD: bytene samles i minnet og meldes inn på ett RPC-kall, høyst én
 * gang i minuttet per instans. Vakten skal ikke bli en trafikkpost selv.
 * Instansen kan forsvinne med noen usendte bytes i buffret — det er et lite
 * tap vi tar framfor ett databasekall per bilde.
 */

const FLUSH_INTERVALL_MS = 60_000;
/** Meld inn straks hvis buffret passerer dette, så en storm ikke gjemmer seg i et minutt. */
const FLUSH_GRENSE_BYTES = 50_000_000;

let buffretBytes = 0;
let buffretTreff = 0;
let sistSendt = 0;
let sender = false;

async function send(bytes: number, treff: number): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const nokkel = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !nokkel) return;

  const svar = await fetch(`${url}/rest/v1/rpc/egress_lager_meld`, {
    method: 'POST',
    headers: {
      apikey: nokkel,
      Authorization: `Bearer ${nokkel}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ p_bytes: bytes, p_treff: treff }),
    cache: 'no-store',
    signal: AbortSignal.timeout(8_000),
  });
  if (!svar.ok) throw new Error(`egress_lager_meld svarte ${svar.status}`);
}

/**
 * Registrerer bytes hentet fra Storage. Kalles uten `await` — verken
 * innmeldingen eller en feil i den skal forsinke eller velte et bilde.
 */
export function tellLagerbytes(bytes: number): void {
  if (!Number.isFinite(bytes) || bytes <= 0) return;
  buffretBytes += bytes;
  buffretTreff += 1;

  const naa = Date.now();
  const forFullt = buffretBytes >= FLUSH_GRENSE_BYTES;
  if (sender || (naa - sistSendt < FLUSH_INTERVALL_MS && !forFullt)) return;

  const bytesUt = buffretBytes;
  const treffUt = buffretTreff;
  buffretBytes = 0;
  buffretTreff = 0;
  sistSendt = naa;
  sender = true;

  void send(bytesUt, treffUt)
    .catch((err) => {
      // Legg bytene tilbake i buffret, så en forbigående feil ikke sletter
      // målingen — da hadde vakten sett et trafikkfall som ikke fant sted.
      buffretBytes += bytesUt;
      buffretTreff += treffUt;
      console.warn('[egressteller] kunne ikke melde inn:', err instanceof Error ? err.message : err);
    })
    .finally(() => {
      sender = false;
    });
}
