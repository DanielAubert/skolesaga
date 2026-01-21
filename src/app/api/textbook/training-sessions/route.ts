import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

interface CreateTrainingSessionRequest {
  exerciseId: string;
  chapterId: string;
  courseId: string;
  questionsAnswered: number;
  questionsCorrect: number;
  timeSpentMs: number;
  startedAt: string;
}

// Beregn om det er et seriøst forsøk:
// (>= 2 spørsmål OG >= 60 sekunder) ELLER (> 4 spørsmål)
function isSeriousAttempt(questionsAnswered: number, timeSpentMs: number): boolean {
  return (questionsAnswered >= 2 && timeSpentMs >= 60000) || questionsAnswered > 4;
}

// GET - Hent treningsøkter for en elev
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const exerciseId = searchParams.get("exerciseId");
    const onlySerious = searchParams.get("onlySerious") === "true";
    const limit = parseInt(searchParams.get("limit") || "100");

    const supabase = getSupabaseAdmin();

    let query = supabase
      .from("training_sessions")
      .select("*")
      .eq("student_id", session.user.id)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (courseId) {
      query = query.eq("course_id", courseId);
    }

    if (chapterId) {
      query = query.eq("chapter_id", chapterId);
    }

    if (exerciseId) {
      query = query.eq("exercise_id", exerciseId);
    }

    if (onlySerious) {
      query = query.eq("is_serious_attempt", true);
    }

    const { data: sessions, error } = await query;

    if (error) {
      console.error("Error fetching training sessions:", error);
      return NextResponse.json({ message: "Kunne ikke hente treningsøkter" }, { status: 500 });
    }

    // Beregn statistikk
    const totalSessions = sessions?.length || 0;
    const seriousAttempts = sessions?.filter(s => s.is_serious_attempt).length || 0;
    const totalQuestionsAnswered = sessions?.reduce((sum, s) => sum + s.questions_answered, 0) || 0;
    const totalQuestionsCorrect = sessions?.reduce((sum, s) => sum + s.questions_correct, 0) || 0;

    return NextResponse.json({
      sessions,
      stats: {
        totalSessions,
        seriousAttempts,
        totalQuestionsAnswered,
        totalQuestionsCorrect,
        accuracy: totalQuestionsAnswered > 0
          ? Math.round((totalQuestionsCorrect / totalQuestionsAnswered) * 100)
          : 0,
      },
    });
  } catch (error) {
    console.error("Training sessions GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// POST - Registrer ny treningsøkt
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const body: CreateTrainingSessionRequest = await request.json();
    const {
      exerciseId,
      chapterId,
      courseId,
      questionsAnswered,
      questionsCorrect,
      timeSpentMs,
      startedAt,
    } = body;

    // Valider påkrevde felt
    if (!exerciseId || !chapterId || !courseId || questionsAnswered === undefined) {
      return NextResponse.json(
        { message: "Mangler påkrevde felt" },
        { status: 400 }
      );
    }

    // Beregn om det er et seriøst forsøk
    const isSerious = isSeriousAttempt(questionsAnswered, timeSpentMs);

    const supabase = getSupabaseAdmin();

    const { data: trainingSession, error } = await supabase
      .from("training_sessions")
      .insert({
        student_id: session.user.id,
        exercise_id: exerciseId,
        chapter_id: chapterId,
        course_id: courseId,
        questions_answered: questionsAnswered,
        questions_correct: questionsCorrect,
        time_spent_ms: timeSpentMs,
        is_serious_attempt: isSerious,
        started_at: startedAt ? new Date(startedAt).toISOString() : new Date().toISOString(),
        ended_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating training session:", error);
      return NextResponse.json({ message: "Kunne ikke lagre treningsøkt" }, { status: 500 });
    }

    // Hent oppdatert statistikk for denne oppgaven
    const { data: exerciseSessions } = await supabase
      .from("training_sessions")
      .select("*")
      .eq("student_id", session.user.id)
      .eq("exercise_id", exerciseId);

    const stats = {
      totalSessions: exerciseSessions?.length || 1,
      seriousAttempts: exerciseSessions?.filter(s => s.is_serious_attempt).length || (isSerious ? 1 : 0),
    };

    return NextResponse.json({
      session: trainingSession,
      isSeriousAttempt: isSerious,
      stats,
    }, { status: 201 });
  } catch (error) {
    console.error("Training sessions POST error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
