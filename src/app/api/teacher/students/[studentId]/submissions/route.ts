import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ studentId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    const { studentId } = await params;
    const supabase = getSupabaseAdmin();

    // Verifiser at læreren har tilgang til denne eleven via en klasse
    const { data: teacherClasses } = await supabase
      .from("class_memberships")
      .select("class_id")
      .eq("user_id", session.user.id)
      .eq("role", "teacher");

    if (!teacherClasses || teacherClasses.length === 0) {
      return NextResponse.json({ message: "Ingen klasser funnet" }, { status: 403 });
    }

    const classIds = teacherClasses.map((c) => c.class_id);

    // Sjekk om eleven er i en av lærerens klasser
    const { data: studentMembership } = await supabase
      .from("class_memberships")
      .select("class_id")
      .eq("user_id", studentId)
      .eq("role", "student")
      .in("class_id", classIds)
      .limit(1);

    if (!studentMembership || studentMembership.length === 0) {
      return NextResponse.json({ message: "Eleven er ikke i dine klasser" }, { status: 403 });
    }

    // Hent elevinformasjon
    const { data: studentData, error: studentError } = await supabase
      .from("users")
      .select("id, name, email, avatar_url")
      .eq("id", studentId)
      .single();

    if (studentError || !studentData) {
      return NextResponse.json({ message: "Elev ikke funnet" }, { status: 404 });
    }

    // Hent elevens besvarelser
    const { data: submissions, error: submissionsError } = await supabase
      .from("textbook_submissions")
      .select("*")
      .eq("student_id", studentId)
      .order("updated_at", { ascending: false });

    if (submissionsError) {
      console.error("Error fetching submissions:", submissionsError);
      return NextResponse.json({ message: "Kunne ikke hente besvarelser" }, { status: 500 });
    }

    return NextResponse.json({
      student: {
        id: studentData.id,
        name: studentData.name,
        email: studentData.email,
        avatarUrl: studentData.avatar_url,
      },
      submissions: (submissions || []).map((s) => ({
        id: s.id,
        exerciseId: s.exercise_id,
        chapterId: s.chapter_id,
        courseId: s.course_id,
        submissionType: s.submission_type,
        content: s.content,
        imageUrl: s.image_url,
        canvasData: s.canvas_data,
        teacherFeedback: s.teacher_grade_feedback,
        isCorrect: s.is_correct,
        createdAt: s.created_at,
        updatedAt: s.updated_at,
      })),
    });
  } catch (error) {
    console.error("Student submissions error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
