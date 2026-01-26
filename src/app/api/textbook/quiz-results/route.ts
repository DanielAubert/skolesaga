import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

interface QuizAnswer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
}

interface CreateQuizResultRequest {
  quizId: string; // chapterId
  courseId: string;
  score: number;
  totalQuestions: number;
  answers: QuizAnswer[];
}

// GET - Hent quiz-resultater for en bruker
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const quizId = searchParams.get("quizId"); // chapterId
    const courseId = searchParams.get("courseId");
    const studentId = searchParams.get("studentId"); // For lærere

    const supabase = getSupabaseAdmin();

    // Hvis studentId er gitt, sjekk at bruker er lærer
    let targetUserId = session.user.id;
    if (studentId) {
      const { data: user } = await supabase
        .from("users")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (user?.role !== "teacher" && user?.role !== "admin") {
        return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
      }
      targetUserId = studentId;
    }

    let query = supabase
      .from("quiz_results")
      .select("*")
      .eq("user_id", targetUserId)
      .order("completed_at", { ascending: false });

    if (quizId) {
      query = query.eq("quiz_id", quizId);
    }

    if (courseId) {
      query = query.eq("course_id", courseId);
    }

    const { data: results, error } = await query;

    if (error) {
      console.error("Error fetching quiz results:", error);
      return NextResponse.json({ message: "Kunne ikke hente quiz-resultater" }, { status: 500 });
    }

    // Returner det nyeste resultatet for hver quiz
    if (quizId && results && results.length > 0) {
      const latestResult = results[0];
      return NextResponse.json({
        result: {
          score: latestResult.score,
          total: latestResult.total_questions,
          percentage: Math.round((latestResult.score / latestResult.total_questions) * 100),
          completedAt: latestResult.completed_at,
        },
      });
    }

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Quiz results GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// POST - Lagre quiz-resultat
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const body: CreateQuizResultRequest = await request.json();
    const { quizId, courseId, score, totalQuestions, answers } = body;

    // Valider påkrevde felt
    if (!quizId || !courseId || score === undefined || !totalQuestions) {
      return NextResponse.json(
        { message: "Mangler påkrevde felt" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Sett inn nytt resultat (vi beholder historikk, ikke upsert)
    const { data: result, error } = await supabase
      .from("quiz_results")
      .insert({
        user_id: session.user.id,
        quiz_id: quizId,
        course_id: courseId,
        score,
        total_questions: totalQuestions,
        answers: answers || [],
        completed_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating quiz result:", error);
      return NextResponse.json({ message: "Kunne ikke lagre quiz-resultat" }, { status: 500 });
    }

    const percentage = Math.round((score / totalQuestions) * 100);

    return NextResponse.json({
      result: {
        id: result.id,
        score,
        total: totalQuestions,
        percentage,
        completedAt: result.completed_at,
      },
    }, { status: 201 });
  } catch (error) {
    console.error("Quiz results POST error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
