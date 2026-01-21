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

interface ExerciseCompletion {
  exercise_id: string;
  subtask_details: SubtaskDetails | null;
  is_passed: boolean;
  completed_subtasks: number;
  skipped_subtasks: number;
}

// GET: Hent all fremgang for et helt kapittel
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ exercises: {} }, { status: 200 });
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const studentId = searchParams.get("studentId"); // For lærere som ser på elevfremgang

    if (!courseId || !chapterId) {
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

    // Hent all fremgang for kapitlet
    const { data, error } = await supabase
      .from("exercise_completions")
      .select("exercise_id, subtask_details, is_passed, completed_subtasks, skipped_subtasks")
      .eq("student_id", targetUserId)
      .eq("course_id", courseId)
      .eq("chapter_id", chapterId);

    if (error) {
      console.error("Error fetching chapter progress:", error);
      return NextResponse.json(
        { message: "Kunne ikke hente fremgang" },
        { status: 500 }
      );
    }

    // Konverter til et objekt med exerciseId som nøkkel
    const exercises: Record<string, { subtaskDetails: SubtaskDetails; isPassed: boolean }> = {};
    let totalCompleted = 0;
    let totalSkipped = 0;
    let totalSubtasks = 0;
    let completedExercises = 0;

    for (const exercise of (data || []) as ExerciseCompletion[]) {
      exercises[exercise.exercise_id] = {
        subtaskDetails: exercise.subtask_details || {},
        isPassed: exercise.is_passed,
      };

      // Tell opp statistikk (ekskluder repetisjonsoppgaver)
      if (!exercise.exercise_id.includes('-rep-')) {
        const details = exercise.subtask_details || {};
        for (const status of Object.values(details)) {
          totalSubtasks++;
          if (status === 'completed') {
            totalCompleted++;
          } else if (status === 'skipped') {
            totalSkipped++;
          }
        }
        if (exercise.is_passed) {
          completedExercises++;
        }
      }
    }

    return NextResponse.json({
      exercises,
      stats: {
        completedSubtasks: totalCompleted,
        skippedSubtasks: totalSkipped,
        totalSubtasks,
        completedExercises,
      }
    });
  } catch (error) {
    console.error("Chapter progress GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
