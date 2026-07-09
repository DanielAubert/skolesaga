import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent alle brukere (kun admin)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ message: "Kun admin har tilgang" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const search = (searchParams.get("search") || "").slice(0, 100);
    const role = searchParams.get("role") || "";
    const limit = Math.max(1, Math.min(parseInt(searchParams.get("limit") || "50") || 50, 100));
    const offset = Math.max(0, parseInt(searchParams.get("offset") || "0") || 0);

    // Valider rolle-parameter
    const VALID_ROLES = ["", "student", "teacher", "admin"];
    if (!VALID_ROLES.includes(role)) {
      return NextResponse.json({ message: "Ugyldig rolle" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    const consent = searchParams.get("consent") || "";
    if (!["", "yes", "no"].includes(consent)) {
      return NextResponse.json({ message: "Ugyldig samtykke-filter" }, { status: 400 });
    }

    let query = supabase
      .from("users")
      .select("id, email, name, role, avatar_url, auth_provider, created_at, organization_id, marketing_consent, marketing_consent_at", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`);
    }

    if (role) {
      query = query.eq("role", role);
    }

    if (consent) {
      query = query.eq("marketing_consent", consent === "yes");
    }

    const { data: users, error, count } = await query;

    if (error) {
      console.error("[Admin] Feil ved henting av brukere:", error);
      return NextResponse.json({ message: "Kunne ikke hente brukere" }, { status: 500 });
    }

    // Totalt antall med markedsføringssamtykke (uavhengig av filtre)
    const { count: consentCount } = await supabase
      .from("users")
      .select("id", { count: "exact", head: true })
      .eq("marketing_consent", true);

    return NextResponse.json({
      users: users || [],
      total: count || 0,
      marketingConsentTotal: consentCount || 0,
      limit,
      offset,
    });
  } catch (error) {
    console.error("[Admin] Feil:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
