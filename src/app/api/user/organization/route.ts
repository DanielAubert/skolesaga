import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase configuration error");
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// GET: Get current user's organization
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Du må være logget inn" },
        { status: 401 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: user, error } = await supabase
      .from("users")
      .select(`
        organization_id,
        organizations:organization_id (
          id,
          name
        )
      `)
      .eq("id", session.user.id)
      .single();

    if (error) {
      console.error("[User Organization] Error fetching user:", error);
      return NextResponse.json(
        { error: "Kunne ikke hente brukerdata" },
        { status: 500 }
      );
    }

    const org = user?.organizations as unknown as { id: string; name: string } | null;

    return NextResponse.json({
      organizationId: user?.organization_id || null,
      organizationName: org?.name || null,
    });
  } catch (error) {
    console.error("[User Organization] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}

// POST: Update user's organization
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Du må være logget inn" },
        { status: 401 }
      );
    }

    // Only teachers and admins can change their organization
    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Kun lærere kan bytte organisasjon" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { organizationId } = body;

    if (!organizationId || typeof organizationId !== "string") {
      return NextResponse.json(
        { error: "Ugyldig organisasjons-ID" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Verify the organization exists and is approved
    const { data: org, error: orgError } = await supabase
      .from("organizations")
      .select("id, name, status")
      .eq("id", organizationId)
      .single();

    if (orgError || !org) {
      return NextResponse.json(
        { error: "Organisasjonen finnes ikke" },
        { status: 404 }
      );
    }

    if (org.status !== "approved") {
      return NextResponse.json(
        { error: "Organisasjonen er ikke godkjent" },
        { status: 400 }
      );
    }

    // Update the user's organization
    const { error: updateError } = await supabase
      .from("users")
      .update({ organization_id: organizationId })
      .eq("id", session.user.id);

    if (updateError) {
      console.error("[User Organization] Error updating user:", updateError);
      return NextResponse.json(
        { error: "Kunne ikke oppdatere organisasjon" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Du er nå medlem av ${org.name}`,
      organizationId: org.id,
      organizationName: org.name,
    });
  } catch (error) {
    console.error("[User Organization] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}
