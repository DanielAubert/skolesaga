import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

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

    // Hent lærerens klasser
    const { data: teacherClasses } = await supabase
      .from("class_memberships")
      .select("class_id")
      .eq("user_id", session.user.id)
      .eq("role", "teacher");

    if (!teacherClasses || teacherClasses.length === 0) {
      return NextResponse.json({
        totalStudents: 0,
        activeToday: 0,
        weeklyCompletions: 0,
        averagePassRate: 0,
        recentActivity: [],
      });
    }

    const classIds = teacherClasses.map((c) => c.class_id);

    // Hent alle elever i lærerens klasser
    const { data: studentMemberships } = await supabase
      .from("class_memberships")
      .select("user_id")
      .in("class_id", classIds)
      .eq("role", "student");

    if (!studentMemberships || studentMemberships.length === 0) {
      return NextResponse.json({
        totalStudents: 0,
        activeToday: 0,
        weeklyCompletions: 0,
        averagePassRate: 0,
        recentActivity: [],
      });
    }

    const studentIds = [...new Set(studentMemberships.map((s) => s.user_id))];
    const totalStudents = studentIds.length;

    // Beregn datoer
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

    // Hent fullføringer fra denne uken
    const { data: weeklyCompletions } = await supabase
      .from("exercise_completions")
      .select("id, student_id, is_passed, completed_at")
      .in("student_id", studentIds)
      .gte("completed_at", weekAgo);

    // Hent aktive elever i dag
    const { data: todayCompletions } = await supabase
      .from("exercise_completions")
      .select("student_id")
      .in("student_id", studentIds)
      .gte("completed_at", todayStart);

    const { data: todayTraining } = await supabase
      .from("training_sessions")
      .select("student_id")
      .in("student_id", studentIds)
      .gte("created_at", todayStart);

    // Kombinér unike aktive elever i dag
    const activeStudentsToday = new Set([
      ...(todayCompletions || []).map((c) => c.student_id),
      ...(todayTraining || []).map((t) => t.student_id),
    ]);

    // Beregn gjennomsnittlig beståttprosent
    const totalCompletions = weeklyCompletions?.length || 0;
    const passedCompletions = weeklyCompletions?.filter((c) => c.is_passed).length || 0;
    const averagePassRate = totalCompletions > 0
      ? Math.round((passedCompletions / totalCompletions) * 100)
      : 0;

    // Hent siste aktivitet (kombinér fullføringer og treningsøkter)
    const { data: recentCompletions } = await supabase
      .from("exercise_completions")
      .select(`
        id,
        student_id,
        exercise_id,
        chapter_id,
        course_id,
        is_passed,
        completed_at,
        total_subtasks,
        completed_subtasks
      `)
      .in("student_id", studentIds)
      .order("completed_at", { ascending: false })
      .limit(10);

    const { data: recentTraining } = await supabase
      .from("training_sessions")
      .select(`
        id,
        student_id,
        exercise_id,
        chapter_id,
        course_id,
        questions_answered,
        questions_correct,
        is_serious_attempt,
        created_at
      `)
      .in("student_id", studentIds)
      .order("created_at", { ascending: false })
      .limit(10);

    // Hent elevnavn
    const { data: students } = await supabase
      .from("users")
      .select("id, name")
      .in("id", studentIds);

    const studentNameMap = new Map(students?.map((s) => [s.id, s.name]) || []);

    // Kombiner og sorter aktivitet
    const recentActivity = [
      ...(recentCompletions || []).map((c) => ({
        id: c.id,
        type: "completion" as const,
        studentId: c.student_id,
        studentName: studentNameMap.get(c.student_id) || "Ukjent",
        exerciseId: c.exercise_id,
        chapterId: c.chapter_id,
        courseId: c.course_id,
        isPassed: c.is_passed,
        completedSubtasks: c.completed_subtasks,
        totalSubtasks: c.total_subtasks,
        timestamp: c.completed_at,
      })),
      ...(recentTraining || []).map((t) => ({
        id: t.id,
        type: "training" as const,
        studentId: t.student_id,
        studentName: studentNameMap.get(t.student_id) || "Ukjent",
        exerciseId: t.exercise_id,
        chapterId: t.chapter_id,
        courseId: t.course_id,
        questionsAnswered: t.questions_answered,
        questionsCorrect: t.questions_correct,
        isSeriousAttempt: t.is_serious_attempt,
        timestamp: t.created_at,
      })),
    ]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10);

    return NextResponse.json({
      totalStudents,
      activeToday: activeStudentsToday.size,
      weeklyCompletions: totalCompletions,
      averagePassRate,
      recentActivity,
    });
  } catch (error) {
    console.error("Teacher stats error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
