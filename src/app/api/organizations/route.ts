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

// GET: List approved organizations
export async function GET() {
  try {
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("organizations")
      .select("id, name")
      .eq("status", "approved")
      .order("name", { ascending: true });

    if (error) {
      console.error("[Organizations] Database error:", error);
      return NextResponse.json(
        { error: "Kunne ikke hente organisasjoner" },
        { status: 500 }
      );
    }

    return NextResponse.json({ organizations: data || [] });
  } catch (error) {
    console.error("[Organizations] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}

// POST: Request new organization (teachers only)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Du må være logget inn" },
        { status: 401 }
      );
    }

    // Only teachers and admins can request new organizations
    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Kun lærere kan opprette nye organisasjoner" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { name } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Organisasjonsnavn må være minst 2 tegn" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Check if organization already exists
    const { data: existing } = await supabase
      .from("organizations")
      .select("id, name, status")
      .ilike("name", name.trim())
      .maybeSingle();

    if (existing) {
      if (existing.status === "approved") {
        return NextResponse.json(
          { error: "Denne organisasjonen finnes allerede", organization: existing },
          { status: 409 }
        );
      } else if (existing.status === "pending") {
        return NextResponse.json(
          { error: "Det finnes allerede en forespørsel om denne organisasjonen" },
          { status: 409 }
        );
      }
    }

    // Create new organization request
    const { data, error } = await supabase
      .from("organizations")
      .insert({
        name: name.trim(),
        status: "pending",
        created_by: session.user.id,
      })
      .select()
      .single();

    if (error) {
      console.error("[Organizations] Insert error:", error);
      return NextResponse.json(
        { error: "Kunne ikke opprette forespørsel" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Forespørsel sendt! En administrator vil godkjenne organisasjonen.",
      organization: data,
    });
  } catch (error) {
    console.error("[Organizations] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}
