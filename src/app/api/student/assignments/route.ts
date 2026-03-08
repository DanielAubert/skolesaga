import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import { getChapterContent } from "@/lib/data/textbook-content";
import type { TextbookExercise } from "@/lib/types/textbook";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// Count trainable subtasks for an exercise (matches exercise-trainer logic)
function countExerciseSubtasks(exercise: TextbookExercise): number {
  if (exercise.multipleChoiceOptions?.length && (!exercise.subTasks || exercise.subTasks.length === 0)) {
    return 1;
  }
  const answerable = exercise.subTasks?.filter(
    st => st.answer !== undefined || st.expressionAnswer !== undefined || st.multipleChoiceOptions
  ) || [];
  return answerable.length > 0 ? answerable.length : 1;
}

// GET - Hent alle aktive lekser for innlogget elev
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();
    const userId = session.user.id;

    // Finn klasser eleven er med i
    const { data: memberships } = await supabase
      .from("class_memberships")
      .select("class_id")
      .eq("user_id", userId)
      .eq("role", "student");

    const classIds = memberships?.map((m) => m.class_id) || [];

    // Finn assignment_targets som gjelder denne eleven
    // (direkte student_id ELLER via klasse)
    let targetAssignmentIds: string[] = [];

    if (classIds.length > 0) {
      const { data: classTargets } = await supabase
        .from("assignment_targets")
        .select("assignment_id, class_id")
        .in("class_id", classIds);
      if (classTargets) {
        targetAssignmentIds.push(...classTargets.map((t) => t.assignment_id));
      }
    }

    const { data: studentTargets } = await supabase
      .from("assignment_targets")
      .select("assignment_id")
      .eq("student_id", userId);

    if (studentTargets) {
      targetAssignmentIds.push(...studentTargets.map((t) => t.assignment_id));
    }

    // Fjern duplikater
    targetAssignmentIds = [...new Set(targetAssignmentIds)];

    if (targetAssignmentIds.length === 0) {
      return NextResponse.json({ assignments: [] });
    }

    // Hent leksene
    const { data: assignments, error } = await supabase
      .from("assignments")
      .select(`
        *,
        assignment_targets (
          class_id
        )
      `)
      .in("id", targetAssignmentIds)
      .order("due_date", { ascending: true });

    if (error) {
      console.error("Error fetching student assignments:", error);
      return NextResponse.json({ message: "Kunne ikke hente lekser" }, { status: 500 });
    }

    // Hent lærernavn
    const teacherIds = [...new Set((assignments || []).map((a) => a.created_by))];
    let teacherNames: Record<string, string> = {};
    if (teacherIds.length > 0) {
      const { data: teachers } = await supabase
        .from("users")
        .select("id, name")
        .in("id", teacherIds);
      if (teachers) {
        teacherNames = Object.fromEntries(teachers.map((t) => [t.id, t.name]));
      }
    }

    // Hent klassenavn
    const allClassIds = new Set<string>();
    (assignments || []).forEach((a) => {
      a.assignment_targets?.forEach((t: { class_id: string | null }) => {
        if (t.class_id) allClassIds.add(t.class_id);
      });
    });

    let classNames: Record<string, string> = {};
    if (allClassIds.size > 0) {
      const { data: classes } = await supabase
        .from("classes")
        .select("id, name")
        .in("id", Array.from(allClassIds));
      if (classes) {
        classNames = Object.fromEntries(classes.map((c) => [c.id, c.name]));
      }
    }

    // Beregn fullføring for hver lekse (basert på deloppgaver)
    const enriched = await Promise.all(
      (assignments || []).map(async (a) => {
        // Beregn totalt antall deloppgaver fra kapittelinnhold
        let totalSubtasks = 0;

        for (const chapterId of a.chapter_ids) {
          const chapter = getChapterContent(chapterId);
          if (chapter) {
            for (const ex of chapter.exercises) {
              if (a.exercise_ids && a.exercise_ids.length > 0) {
                if (a.exercise_ids.includes(ex.id)) {
                  totalSubtasks += countExerciseSubtasks(ex);
                }
              } else {
                totalSubtasks += countExerciseSubtasks(ex);
              }
            }
          }
        }

        // Hent fullføring (deloppgaver)
        let completedSubtaskCount = 0;

        if (a.exercise_ids && a.exercise_ids.length > 0) {
          const { data: completions } = await supabase
            .from("exercise_completions")
            .select("exercise_id, completed_subtasks")
            .eq("student_id", userId)
            .eq("course_id", a.course_id)
            .in("exercise_id", a.exercise_ids);

          if (completions) {
            completedSubtaskCount = completions.reduce((sum, c) => sum + (c.completed_subtasks || 0), 0);
          }
        } else {
          const { data: completions } = await supabase
            .from("exercise_completions")
            .select("exercise_id, completed_subtasks")
            .eq("student_id", userId)
            .eq("course_id", a.course_id)
            .in("chapter_id", a.chapter_ids);

          if (completions) {
            completedSubtaskCount = completions.reduce((sum, c) => sum + (c.completed_subtasks || 0), 0);
          }
        }

        // Bestem status
        const now = new Date();
        const dueDate = new Date(a.due_date);
        let status: string;

        if (completedSubtaskCount === 0) {
          status = now > dueDate ? "overdue" : "not_started";
        } else if (completedSubtaskCount >= totalSubtasks) {
          status = "completed";
        } else {
          status = now > dueDate ? "overdue" : "in_progress";
        }

        // Finn klassenavn (første klasse som eleven er med i)
        const relevantClassId = a.assignment_targets?.find(
          (t: { class_id: string | null }) => t.class_id && classIds.includes(t.class_id)
        )?.class_id;

        return {
          id: a.id,
          title: a.title,
          courseId: a.course_id,
          chapterIds: a.chapter_ids,
          dueDate: a.due_date,
          description: a.description,
          teacherName: teacherNames[a.created_by] || "Ukjent lærer",
          className: relevantClassId ? classNames[relevantClassId] || null : null,
          status,
          completedSubtasks: completedSubtaskCount,
          totalSubtasks,
          percentComplete: totalSubtasks > 0 ? Math.round((completedSubtaskCount / totalSubtasks) * 100) : 0,
        };
      })
    );

    return NextResponse.json({ assignments: enriched });
  } catch (error) {
    console.error("Student assignments error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
