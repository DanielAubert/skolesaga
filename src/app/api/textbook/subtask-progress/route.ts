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

// GET: Hent lagret fremgang for en oppgave
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ subtaskDetails: {} }, { status: 200 });
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const exerciseId = searchParams.get("exerciseId");
    const studentId = searchParams.get("studentId"); // For lærere som ser på elevfremgang

    if (!courseId || !chapterId || !exerciseId) {
      return NextResponse.json(
        { message: "Mangler påkrevde parametere" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Bestem hvilken bruker vi henter fremgang for
    let targetUserId = session.user.id;

    // Hvis studentId er angitt, verifiser at brukeren er lærer/admin
    if (studentId) {
      if (session.user.role !== "teacher" && session.user.role !== "admin") {
        return NextResponse.json(
          { message: "Ikke autorisert til å se elevfremgang" },
          { status: 403 }
        );
      }
      targetUserId = studentId;
    }

    // Hent eksisterende fremgang
    const { data, error } = await supabase
      .from("exercise_completions")
      .select("subtask_details, is_passed, completed_subtasks, skipped_subtasks")
      .eq("student_id", targetUserId)
      .eq("course_id", courseId)
      .eq("chapter_id", chapterId)
      .eq("exercise_id", exerciseId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching subtask progress:", error);
      return NextResponse.json(
        { message: "Kunne ikke hente fremgang" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      subtaskDetails: data?.subtask_details || {},
      isPassed: data?.is_passed || false,
      completedSubtasks: data?.completed_subtasks || 0,
      skippedSubtasks: data?.skipped_subtasks || 0,
    });
  } catch (error) {
    console.error("Subtask progress GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// POST: Oppdater fremgang for en enkelt deloppgave
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const body = await request.json();
    const {
      courseId,
      chapterId,
      exerciseId,
      subtaskLabel,
      status,
      totalSubtasks,
    } = body;

    if (!courseId || !chapterId || !exerciseId || !subtaskLabel || !status) {
      return NextResponse.json(
        { message: "Mangler påkrevde felt" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Hent eksisterende fremgang
    const { data: existing } = await supabase
      .from("exercise_completions")
      .select("subtask_details, started_at")
      .eq("student_id", session.user.id)
      .eq("course_id", courseId)
      .eq("chapter_id", chapterId)
      .eq("exercise_id", exerciseId)
      .maybeSingle();

    // Oppdater subtask_details
    const currentDetails: SubtaskDetails = existing?.subtask_details || {};
    currentDetails[subtaskLabel] = status;

    // Beregn statistikk
    const completedCount = Object.values(currentDetails).filter(
      (s) => s === "completed"
    ).length;
    const skippedCount = Object.values(currentDetails).filter(
      (s) => s === "skipped"
    ).length;
    const total = totalSubtasks || Object.keys(currentDetails).length;
    const isPassed = completedCount === total && skippedCount === 0;

    // Upsert til databasen
    const { error } = await supabase.from("exercise_completions").upsert(
      {
        student_id: session.user.id,
        course_id: courseId,
        chapter_id: chapterId,
        exercise_id: exerciseId,
        subtask_details: currentDetails,
        total_subtasks: total,
        completed_subtasks: completedCount,
        skipped_subtasks: skippedCount,
        is_passed: isPassed,
        started_at: existing?.started_at || new Date().toISOString(),
        completed_at: new Date().toISOString(),
      },
      {
        onConflict: "student_id,course_id,chapter_id,exercise_id",
      }
    );

    if (error) {
      console.error("Error saving subtask progress:", error);
      return NextResponse.json(
        { message: "Kunne ikke lagre fremgang" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      subtaskDetails: currentDetails,
      completedSubtasks: completedCount,
      skippedSubtasks: skippedCount,
      isPassed,
    });
  } catch (error) {
    console.error("Subtask progress POST error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
