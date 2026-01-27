import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// POST - Bli med i en klasse med invitasjonskode
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { inviteCode } = await request.json();

    if (!inviteCode) {
      return NextResponse.json({ message: "Invitasjonskode er påkrevd" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    // Finn klassen med denne invitasjonskoden
    const { data: classData, error: classError } = await supabase
      .from("classes")
      .select("*")
      .eq("invite_code", inviteCode.toUpperCase())
      .single();

    if (classError || !classData) {
      return NextResponse.json({ message: "Ugyldig invitasjonskode" }, { status: 404 });
    }

    // Sjekk om brukeren allerede er medlem
    const { data: existingMembership } = await supabase
      .from("class_memberships")
      .select("id")
      .eq("class_id", classData.id)
      .eq("user_id", session.user.id)
      .single();

    if (existingMembership) {
      return NextResponse.json({ message: "Du er allerede medlem av denne klassen" }, { status: 400 });
    }

    // Legg til brukeren som elev
    const { error: joinError } = await supabase.from("class_memberships").insert({
      class_id: classData.id,
      user_id: session.user.id,
      role: "student",
    });

    if (joinError) {
      console.error("Error joining class:", joinError);
      return NextResponse.json({ message: "Kunne ikke bli med i klassen" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      class: {
        id: classData.id,
        name: classData.name,
        gradeLevel: classData.grade_level,
        subject: classData.subject,
      },
    });
  } catch (error) {
    console.error("Join class error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
