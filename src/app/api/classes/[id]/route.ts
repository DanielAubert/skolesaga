import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent klassedetaljer inkludert elever
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = await params;

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();

    // Sjekk at brukeren har tilgang til klassen
    const { data: membership } = await supabase
      .from("class_memberships")
      .select("role")
      .eq("class_id", id)
      .eq("user_id", session.user.id)
      .single();

    if (!membership) {
      return NextResponse.json({ message: "Ikke tilgang til denne klassen" }, { status: 403 });
    }

    // Hent klasseinfo
    const { data: classData, error: classError } = await supabase
      .from("classes")
      .select("*")
      .eq("id", id)
      .single();

    if (classError || !classData) {
      return NextResponse.json({ message: "Klasse ikke funnet" }, { status: 404 });
    }

    // Hent alle medlemmer med brukerinfo
    const { data: members, error: membersError } = await supabase
      .from("class_memberships")
      .select(`
        role,
        joined_at,
        users (
          id,
          name,
          email,
          avatar_url
        )
      `)
      .eq("class_id", id);

    if (membersError) {
      console.error("Error fetching members:", membersError);
    }

    // Hent progresjon for hver elev (siste 7 dager)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const studentsWithProgress = await Promise.all(
      (members || [])
        .filter((m) => m.role === "student")
        .map(async (m) => {
          // m.users is a single object (not array) when selected via foreign key
          const userData = m.users as unknown as {
            id: string;
            name: string;
            email: string;
            avatar_url: string | null;
          } | null;

          if (!userData) {
            return null;
          }

          // Hent exercise_completions (siste 7 dager)
          const { data: completions } = await supabase
            .from("exercise_completions")
            .select("is_passed")
            .eq("student_id", userData.id)
            .gte("completed_at", sevenDaysAgo.toISOString());

          const totalAttempts = completions?.length || 0;
          const correctAttempts = completions?.filter((c) => c.is_passed === true).length || 0;

          // Hent training_sessions (siste 7 dager)
          const { data: sessions } = await supabase
            .from("training_sessions")
            .select("questions_answered, questions_correct, time_spent_ms")
            .eq("student_id", userData.id)
            .gte("created_at", sevenDaysAgo.toISOString());

          const totalQuestions = sessions?.reduce((sum, s) => sum + (s.questions_answered || 0), 0) || 0;
          const correctQuestions = sessions?.reduce((sum, s) => sum + (s.questions_correct || 0), 0) || 0;
          const totalTimeMs = sessions?.reduce((sum, s) => sum + (s.time_spent_ms || 0), 0) || 0;

          return {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            avatarUrl: userData.avatar_url,
            joinedAt: m.joined_at,
            stats: {
              totalAttempts,
              correctAttempts,
              correctRate: totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0,
              totalQuestions,
              correctQuestions,
              questionCorrectRate: totalQuestions > 0 ? Math.round((correctQuestions / totalQuestions) * 100) : 0,
              totalTimeMinutes: Math.round(totalTimeMs / 60000),
            },
          };
        })
    );

    // Filter out null values
    const validStudents = studentsWithProgress.filter((s) => s !== null);

    const teachers = (members || [])
      .filter((m) => m.role === "teacher")
      .map((m) => {
        // m.users is a single object (not array) when selected via foreign key
        const userData = m.users as unknown as {
          id: string;
          name: string;
          email: string;
          avatar_url: string | null;
        } | null;

        if (!userData) {
          return null;
        }

        return {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          avatarUrl: userData.avatar_url,
        };
      })
      .filter((t) => t !== null);

    return NextResponse.json({
      class: classData,
      students: validStudents,
      teachers,
      isTeacher: membership.role === "teacher",
    });
  } catch (error) {
    console.error("Class detail error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// DELETE - Slett klasse (kun lærere)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = await params;

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();

    // Sjekk at brukeren er lærer i klassen
    const { data: membership } = await supabase
      .from("class_memberships")
      .select("role")
      .eq("class_id", id)
      .eq("user_id", session.user.id)
      .eq("role", "teacher")
      .single();

    if (!membership) {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    // Slett klassen (cascade vil slette medlemskap)
    const { error } = await supabase.from("classes").delete().eq("id", id);

    if (error) {
      console.error("Error deleting class:", error);
      return NextResponse.json({ message: "Kunne ikke slette klasse" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete class error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
