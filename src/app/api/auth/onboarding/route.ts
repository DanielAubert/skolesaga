import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

// Create Supabase admin client
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

export async function POST(request: Request) {
  try {
    // Get the session
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Du må være logget inn" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, organization, organizationId, birthYear, gradeLevel, phone } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Navn er påkrevd" },
        { status: 400 }
      );
    }

    // Validate birth year if provided
    if (birthYear !== null && birthYear !== undefined) {
      const year = parseInt(birthYear);
      if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
        return NextResponse.json(
          { error: "Ugyldig fødselsår" },
          { status: 400 }
        );
      }
    }

    // Validate grade level if provided
    const validGradeLevels = ["5", "6", "7", "8", "9", "10", "vg1", "vg2", "vg3", "other"];
    if (gradeLevel && !validGradeLevels.includes(gradeLevel)) {
      return NextResponse.json(
        { error: "Ugyldig klassetrinn" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Update user in database
    const { data, error } = await supabase
      .from("users")
      .update({
        name: name.trim(),
        organization: organization?.trim() || null,
        organization_id: organizationId || null,
        birth_year: birthYear ? parseInt(birthYear) : null,
        grade_level: gradeLevel || null,
        phone: phone?.trim() || null,
        onboarding_completed: true,
        updated_at: new Date().toISOString(),
      })
      .eq("id", session.user.id)
      .select()
      .single();

    if (error) {
      console.error("[Onboarding] Database error:", error);
      return NextResponse.json(
        { error: "Kunne ikke lagre informasjonen" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        organization: data.organization,
        birthYear: data.birth_year,
        gradeLevel: data.grade_level,
        onboardingCompleted: data.onboarding_completed,
      },
    });
  } catch (error) {
    console.error("[Onboarding] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}

// GET: Check if user has completed onboarding
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

    const { data, error } = await supabase
      .from("users")
      .select("onboarding_completed, name, organization, birth_year, grade_level")
      .eq("id", session.user.id)
      .single();

    if (error) {
      console.error("[Onboarding] Database error:", error);
      return NextResponse.json(
        { error: "Kunne ikke hente brukerdata" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      onboardingCompleted: data?.onboarding_completed ?? false,
      hasName: !!data?.name,
      hasOrganization: !!data?.organization,
      hasBirthYear: !!data?.birth_year,
      hasGradeLevel: !!data?.grade_level,
    });
  } catch (error) {
    console.error("[Onboarding] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}
