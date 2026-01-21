import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

interface SubtaskDetails {
  [label: string]: "completed" | "skipped" | "pending";
}

interface CreateCompletionRequest {
  exerciseId: string;
  chapterId: string;
  courseId: string;
  totalSubtasks: number;
  completedSubtasks: number;
  skippedSubtasks: number;
  subtaskDetails?: SubtaskDetails;
  startedAt?: string;
}

// GET - Hent fullførte oppgaver for en elev
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const limit = parseInt(searchParams.get("limit") || "100");

    const supabase = getSupabaseAdmin();

    let query = supabase
      .from("exercise_completions")
      .select("*")
      .eq("student_id", session.user.id)
      .order("completed_at", { ascending: false })
      .limit(limit);

    if (courseId) {
      query = query.eq("course_id", courseId);
    }

    if (chapterId) {
      query = query.eq("chapter_id", chapterId);
    }

    const { data: completions, error } = await query;

    if (error) {
      console.error("Error fetching completions:", error);
      return NextResponse.json({ message: "Kunne ikke hente fullførte oppgaver" }, { status: 500 });
    }

    return NextResponse.json({ completions });
  } catch (error) {
    console.error("Completions GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// POST - Registrer fullført "Løs oppgaven"
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const body: CreateCompletionRequest = await request.json();
    const {
      exerciseId,
      chapterId,
      courseId,
      totalSubtasks,
      completedSubtasks,
      skippedSubtasks,
      subtaskDetails,
      startedAt,
    } = body;

    // Valider påkrevde felt
    if (!exerciseId || !chapterId || !courseId || totalSubtasks === undefined) {
      return NextResponse.json(
        { message: "Mangler påkrevde felt" },
        { status: 400 }
      );
    }

    // Beregn om oppgaven er bestått (alle deloppgaver fullført uten å hoppe over)
    const isPassed = completedSubtasks === totalSubtasks && skippedSubtasks === 0;

    const supabase = getSupabaseAdmin();

    // Upsert - oppdater hvis oppgaven allerede er fullført før
    const { data: completion, error } = await supabase
      .from("exercise_completions")
      .upsert(
        {
          student_id: session.user.id,
          exercise_id: exerciseId,
          chapter_id: chapterId,
          course_id: courseId,
          total_subtasks: totalSubtasks,
          completed_subtasks: completedSubtasks,
          skipped_subtasks: skippedSubtasks,
          subtask_details: subtaskDetails || {},
          is_passed: isPassed,
          started_at: startedAt ? new Date(startedAt).toISOString() : null,
          completed_at: new Date().toISOString(),
        },
        {
          onConflict: "student_id,course_id,chapter_id,exercise_id",
        }
      )
      .select()
      .single();

    if (error) {
      console.error("Error creating completion:", error);
      return NextResponse.json({ message: "Kunne ikke lagre fullføring" }, { status: 500 });
    }

    return NextResponse.json({
      completion,
      isPassed,
    }, { status: 201 });
  } catch (error) {
    console.error("Completions POST error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
