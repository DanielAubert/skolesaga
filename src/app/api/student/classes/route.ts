import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent klasser eleven er medlem av
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();

    // Hent klasser der brukeren er elev
    const { data: memberships, error: membershipError } = await supabase
      .from("class_memberships")
      .select(`
        class_id,
        role,
        joined_at,
        classes (
          id,
          name,
          grade_level,
          subject
        )
      `)
      .eq("user_id", session.user.id)
      .eq("role", "student");

    if (membershipError) {
      console.error("Error fetching student classes:", membershipError);
      return NextResponse.json({ message: "Kunne ikke hente klasser" }, { status: 500 });
    }

    // Hent lærerinfo for hver klasse
    const classes = await Promise.all(
      (memberships || []).map(async (m) => {
        const classData = m.classes as unknown as {
          id: string;
          name: string;
          grade_level: string | null;
          subject: string | null;
        } | null;

        if (!classData) {
          return null;
        }

        // Hent læreren for klassen
        const { data: teacherMembership } = await supabase
          .from("class_memberships")
          .select(`
            users (
              name
            )
          `)
          .eq("class_id", classData.id)
          .eq("role", "teacher")
          .single();

        const teacherData = teacherMembership?.users as unknown as { name: string } | null;

        return {
          id: classData.id,
          name: classData.name,
          gradeLevel: classData.grade_level,
          subject: classData.subject,
          teacherName: teacherData?.name || "Ukjent lærer",
          joinedAt: m.joined_at,
        };
      })
    );

    // Filter out null values
    const validClasses = classes.filter((c) => c !== null);

    return NextResponse.json({ classes: validClasses });
  } catch (error) {
    console.error("Student classes error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
