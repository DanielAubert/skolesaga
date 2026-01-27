import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent alle klasser for innlogget lærer
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    const supabase = getSupabaseAdmin();

    // Hent klasser der brukeren er lærer
    const { data: memberships, error: membershipError } = await supabase
      .from("class_memberships")
      .select(`
        class_id,
        role,
        classes (
          id,
          name,
          grade_level,
          subject,
          invite_code,
          created_at
        )
      `)
      .eq("user_id", session.user.id)
      .eq("role", "teacher");

    if (membershipError) {
      console.error("Error fetching classes:", membershipError);
      return NextResponse.json({ message: "Kunne ikke hente klasser" }, { status: 500 });
    }

    // Hent antall elever per klasse
    const classes = await Promise.all(
      (memberships || []).map(async (m) => {
        // m.classes is a single object (not array) when selected via foreign key
        const classData = m.classes as unknown as {
          id: string;
          name: string;
          grade_level: string | null;
          subject: string | null;
          invite_code: string | null;
          created_at: string;
        } | null;

        if (!classData) {
          return null;
        }

        const { count } = await supabase
          .from("class_memberships")
          .select("*", { count: "exact", head: true })
          .eq("class_id", classData.id)
          .eq("role", "student");

        return {
          ...classData,
          studentCount: count || 0,
        };
      })
    );

    // Filter out null values
    const validClasses = classes.filter((c) => c !== null);

    return NextResponse.json({ classes: validClasses });
  } catch (error) {
    console.error("Classes error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// POST - Opprett ny klasse
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    const { name, gradeLevel, subject } = await request.json();

    if (!name) {
      return NextResponse.json({ message: "Klassenavn er påkrevd" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    // Sørg for at brukeren finnes i users-tabellen
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("id", session.user.id)
      .maybeSingle();

    if (!existingUser) {
      // Opprett brukeren hvis den ikke finnes
      const { error: createUserError } = await supabase.from("users").insert({
        id: session.user.id,
        email: session.user.email,
        name: session.user.name || session.user.email?.split("@")[0],
        role: session.user.role || "teacher",
        subscription_tier: "free",
        auth_provider: "email",
      });

      if (createUserError) {
        console.error("Error creating user:", createUserError);
        return NextResponse.json({ message: "Kunne ikke opprette bruker" }, { status: 500 });
      }
    }

    // Generer invitasjonskode
    const inviteCode = generateInviteCode();

    // Opprett klassen med invitasjonskode
    const { data: newClass, error: createError } = await supabase
      .from("classes")
      .insert({
        name,
        grade_level: gradeLevel || null,
        subject: subject || null,
        school_id: session.user.schoolId || null,
        invite_code: inviteCode,
      })
      .select()
      .single();

    if (createError) {
      console.error("Error creating class:", createError);
      return NextResponse.json({ message: "Kunne ikke opprette klasse" }, { status: 500 });
    }

    // Legg til læreren som medlem av klassen
    const { error: membershipError } = await supabase.from("class_memberships").insert({
      class_id: newClass.id,
      user_id: session.user.id,
      role: "teacher",
    });

    if (membershipError) {
      console.error("Error adding teacher to class:", membershipError);
      // Slett klassen hvis vi ikke kunne legge til læreren
      await supabase.from("classes").delete().eq("id", newClass.id);
      return NextResponse.json({ message: "Kunne ikke fullføre opprettelse" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      class: {
        ...newClass,
        inviteCode: newClass.invite_code,
        studentCount: 0,
      },
    });
  } catch (error) {
    console.error("Create class error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// Generer en 6-tegns invitasjonskode med kryptografisk sikker random
function generateInviteCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Unngår forvirrende tegn
  const randomBytes = crypto.getRandomValues(new Uint8Array(6));
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(randomBytes[i] % chars.length);
  }
  return code;
}
