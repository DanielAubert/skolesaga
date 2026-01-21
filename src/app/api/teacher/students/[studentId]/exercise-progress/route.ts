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
    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");

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

    // Hent fullførte oppgaver ("Løs oppgaven")
    let completionsQuery = supabase
      .from("exercise_completions")
      .select("*")
      .eq("student_id", studentId)
      .order("completed_at", { ascending: false });

    if (courseId) {
      completionsQuery = completionsQuery.eq("course_id", courseId);
    }
    if (chapterId) {
      completionsQuery = completionsQuery.eq("chapter_id", chapterId);
    }

    const { data: completions, error: completionsError } = await completionsQuery;

    if (completionsError) {
      console.error("Error fetching completions:", completionsError);
    }

    // Hent treningsøkter ("Tren")
    let trainingsQuery = supabase
      .from("training_sessions")
      .select("*")
      .eq("student_id", studentId)
      .order("created_at", { ascending: false });

    if (courseId) {
      trainingsQuery = trainingsQuery.eq("course_id", courseId);
    }
    if (chapterId) {
      trainingsQuery = trainingsQuery.eq("chapter_id", chapterId);
    }

    const { data: trainingSessions, error: trainingsError } = await trainingsQuery;

    if (trainingsError) {
      console.error("Error fetching training sessions:", trainingsError);
    }

    // Beregn statistikk
    const totalCompleted = completions?.length || 0;
    const totalPassed = completions?.filter(c => c.is_passed).length || 0;
    const totalTrainingSessions = trainingSessions?.length || 0;
    const seriousAttempts = trainingSessions?.filter(t => t.is_serious_attempt).length || 0;

    // Grupper treningsøkter per oppgave for å vise antall
    const trainingCountByExercise: Record<string, { total: number; serious: number }> = {};
    trainingSessions?.forEach(session => {
      const key = `${session.course_id}/${session.chapter_id}/${session.exercise_id}`;
      if (!trainingCountByExercise[key]) {
        trainingCountByExercise[key] = { total: 0, serious: 0 };
      }
      trainingCountByExercise[key].total++;
      if (session.is_serious_attempt) {
        trainingCountByExercise[key].serious++;
      }
    });

    // Beregn kapittelnivå-fremgang
    interface ChapterStats {
      completedSubtasks: number;
      skippedSubtasks: number;
      totalSubtasks: number;
      completedExercises: number;
      totalExercises: number;
      lastActivity: string | null;
    }

    const chapterProgress: Record<string, Record<string, ChapterStats>> = {};

    completions?.forEach(completion => {
      const { course_id, chapter_id, exercise_id } = completion;

      // Hopp over repetisjonsoppgaver i statistikken
      if (exercise_id.includes('-rep-')) {
        return;
      }

      if (!chapterProgress[course_id]) {
        chapterProgress[course_id] = {};
      }
      if (!chapterProgress[course_id][chapter_id]) {
        chapterProgress[course_id][chapter_id] = {
          completedSubtasks: 0,
          skippedSubtasks: 0,
          totalSubtasks: 0,
          completedExercises: 0,
          totalExercises: 0,
          lastActivity: null,
        };
      }

      const stats = chapterProgress[course_id][chapter_id];
      const details = completion.subtask_details || {};

      for (const status of Object.values(details)) {
        stats.totalSubtasks++;
        if (status === 'completed') {
          stats.completedSubtasks++;
        } else if (status === 'skipped') {
          stats.skippedSubtasks++;
        }
      }

      stats.totalExercises++;
      if (completion.is_passed) {
        stats.completedExercises++;
      }

      // Spor siste aktivitet
      if (!stats.lastActivity || new Date(completion.completed_at) > new Date(stats.lastActivity)) {
        stats.lastActivity = completion.completed_at;
      }
    });

    return NextResponse.json({
      student: {
        id: studentData.id,
        name: studentData.name,
        email: studentData.email,
        avatarUrl: studentData.avatar_url,
      },
      completions: (completions || []).map(c => ({
        id: c.id,
        exerciseId: c.exercise_id,
        chapterId: c.chapter_id,
        courseId: c.course_id,
        totalSubtasks: c.total_subtasks,
        completedSubtasks: c.completed_subtasks,
        skippedSubtasks: c.skipped_subtasks,
        subtaskDetails: c.subtask_details || {},
        isPassed: c.is_passed,
        startedAt: c.started_at,
        completedAt: c.completed_at,
      })),
      trainingSessions: (trainingSessions || []).map(t => ({
        id: t.id,
        exerciseId: t.exercise_id,
        chapterId: t.chapter_id,
        courseId: t.course_id,
        questionsAnswered: t.questions_answered,
        questionsCorrect: t.questions_correct,
        timeSpentMs: t.time_spent_ms,
        isSeriousAttempt: t.is_serious_attempt,
        startedAt: t.started_at,
        endedAt: t.ended_at,
        createdAt: t.created_at,
      })),
      trainingCountByExercise,
      chapterProgress,
      summary: {
        totalExercisesCompleted: totalCompleted,
        totalExercisesPassed: totalPassed,
        passRate: totalCompleted > 0 ? Math.round((totalPassed / totalCompleted) * 100) : 0,
        totalTrainingSessions,
        seriousTrainingAttempts: seriousAttempts,
      },
    });
  } catch (error) {
    console.error("Exercise progress error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
