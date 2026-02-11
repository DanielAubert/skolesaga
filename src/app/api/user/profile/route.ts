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
      .select("name, email, role, organization, birth_year, grade_level, phone, subscription_tier")
      .eq("id", session.user.id)
      .single();

    if (error) {
      console.error("[Profile] Database error:", error);
      return NextResponse.json(
        { error: "Kunne ikke hente profil" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      name: data.name,
      email: data.email,
      role: data.role,
      organization: data.organization,
      birthYear: data.birth_year,
      gradeLevel: data.grade_level,
      phone: data.phone,
      subscriptionTier: data.subscription_tier,
    });
  } catch (error) {
    console.error("[Profile] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}
