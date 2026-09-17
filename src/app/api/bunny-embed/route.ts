import { NextResponse } from "next/server";
import { signerEmbedUrl } from "@/lib/bunny-stream-token";

/**
 * Signert Bunny Stream-embed for lærebokvideoer (17.9.2026).
 *
 * Skolesaga bruker samme videobibliotek og samme signeringsskjema som
 * eksamenssett.no (`src/lib/bunny-stream-token.ts`): biblioteket har
 * «Embed View Token Authentication» PÅ, så en usignert embed gir 403.
 * Tokenet lever i 6 timer. GUID-en er ikke hemmelig i seg selv — uten
 * token-nøkkelen kan den ikke spilles av.
 *
 * GET /api/bunny-embed?guid=<uuid>  →  { "embedUrl": "https://iframe.mediadelivery.net/embed/<lib>/<guid>?token=…&expires=…" }
 */
const GUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(request: Request) {
  const guid = new URL(request.url).searchParams.get("guid") ?? "";
  if (!GUID.test(guid)) {
    return NextResponse.json({ error: "Ugyldig video-id" }, { status: 400 });
  }
  const embedUrl = signerEmbedUrl(guid, undefined, { autoplay: "false", preload: "true", responsive: "true" });
  if (!embedUrl) {
    return NextResponse.json({ error: "Videobiblioteket er ikke konfigurert" }, { status: 503 });
  }
  return NextResponse.json({ embedUrl }, { headers: { "Cache-Control": "private, no-store" } });
}
