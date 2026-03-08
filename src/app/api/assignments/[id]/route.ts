import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import { getCourse } from "@/lib/data/textbook-courses";
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

// GET - Hent leksedetaljer med fullføringsstatus per elev
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

    // Hent leksen
    const { data: assignment, error } = await supabase
      .from("assignments")
      .select(`
        *,
        assignment_targets (
          id,
          class_id,
          student_id
        )
      `)
      .eq("id", id)
      .single();

    if (error || !assignment) {
      return NextResponse.json({ message: "Lekse ikke funnet" }, { status: 404 });
    }

    // Sjekk at innlogget bruker er oppretter
    if (assignment.created_by !== session.user.id && session.user.role !== "admin") {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    // Beregn totalt antall deloppgaver fra kapittelinnhold
    const course = getCourse(assignment.course_id);
    let totalSubtasks = 0;

    for (const chapterId of assignment.chapter_ids) {
      const chapter = getChapterContent(chapterId);
      if (chapter) {
        for (const ex of chapter.exercises) {
          if (assignment.exercise_ids && assignment.exercise_ids.length > 0) {
            if (assignment.exercise_ids.includes(ex.id)) {
              totalSubtasks += countExerciseSubtasks(ex);
            }
          } else {
            totalSubtasks += countExerciseSubtasks(ex);
          }
        }
      }
    }

    // Finn alle elever som er mottakere
    const studentIds = new Set<string>();

    for (const target of assignment.assignment_targets || []) {
      if (target.student_id) {
        studentIds.add(target.student_id);
      } else if (target.class_id) {
        const { data: members } = await supabase
          .from("class_memberships")
          .select("user_id")
          .eq("class_id", target.class_id)
          .eq("role", "student");
        members?.forEach((m) => studentIds.add(m.user_id));
      }
    }

    // Hent brukerinfo og fullføring for hver elev
    const studentList = await Promise.all(
      Array.from(studentIds).map(async (studentId) => {
        // Hent brukerinfo
        const { data: user } = await supabase
          .from("users")
          .select("id, name, email")
          .eq("id", studentId)
          .single();

        if (!user) return null;

        // Hent exercise_completions for denne eleven (med deloppgaver)
        let completedSubtaskCount = 0;
        let lastActivity: string | null = null;

        if (assignment.exercise_ids && assignment.exercise_ids.length > 0) {
          const { data: completions } = await supabase
            .from("exercise_completions")
            .select("exercise_id, completed_at, completed_subtasks")
            .eq("student_id", studentId)
            .eq("course_id", assignment.course_id)
            .in("exercise_id", assignment.exercise_ids);

          if (completions) {
            completedSubtaskCount = completions.reduce((sum, c) => sum + (c.completed_subtasks || 0), 0);
            lastActivity = completions.reduce((latest, c) =>
              c.completed_at > (latest || "") ? c.completed_at : latest, "" as string) || null;
          }
        } else {
          const { data: completions } = await supabase
            .from("exercise_completions")
            .select("exercise_id, completed_at, completed_subtasks")
            .eq("student_id", studentId)
            .eq("course_id", assignment.course_id)
            .in("chapter_id", assignment.chapter_ids);

          if (completions) {
            completedSubtaskCount = completions.reduce((sum, c) => sum + (c.completed_subtasks || 0), 0);
            lastActivity = completions.reduce((latest, c) =>
              c.completed_at > (latest || "") ? c.completed_at : latest, "" as string) || null;
          }
        }

        // Bestem status
        const now = new Date();
        const dueDate = new Date(assignment.due_date);
        let status: string;

        if (completedSubtaskCount === 0) {
          status = now > dueDate ? "overdue" : "not_started";
        } else if (completedSubtaskCount >= totalSubtasks) {
          status = lastActivity && new Date(lastActivity) <= dueDate ? "completed" : "completed_late";
        } else {
          status = now > dueDate ? "overdue" : "in_progress";
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          completedSubtasks: completedSubtaskCount,
          totalSubtasks,
          status,
          lastActivity,
        };
      })
    );

    // Hent klassenavn
    const classIds = (assignment.assignment_targets || [])
      .filter((t: { class_id: string | null }) => t.class_id)
      .map((t: { class_id: string }) => t.class_id);

    let classNames: Record<string, string> = {};
    if (classIds.length > 0) {
      const { data: classes } = await supabase
        .from("classes")
        .select("id, name")
        .in("id", classIds);
      if (classes) {
        classNames = Object.fromEntries(classes.map((c) => [c.id, c.name]));
      }
    }

    const validStudents = studentList.filter((s) => s !== null);

    return NextResponse.json({
      assignment: {
        ...assignment,
        assignment_targets: (assignment.assignment_targets || []).map(
          (t: { id: string; class_id: string | null; student_id: string | null }) => ({
            ...t,
            className: t.class_id ? classNames[t.class_id] || null : null,
          })
        ),
      },
      students: validStudents,
      totalSubtasks,
      courseName: course?.title || assignment.course_id,
    });
  } catch (error) {
    console.error("Assignment GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// PATCH - Oppdater lekse (frist, beskrivelse)
export async function PATCH(
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

    // Sjekk eierskap
    const { data: assignment } = await supabase
      .from("assignments")
      .select("created_by")
      .eq("id", id)
      .single();

    if (!assignment || assignment.created_by !== session.user.id) {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    const body = await request.json();
    const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };

    if (body.dueDate) updates.due_date = body.dueDate;
    if (body.description !== undefined) updates.description = body.description;
    if (body.title) updates.title = body.title;

    const { data: updated, error } = await supabase
      .from("assignments")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating assignment:", error);
      return NextResponse.json({ message: "Kunne ikke oppdatere lekse" }, { status: 500 });
    }

    return NextResponse.json({ success: true, assignment: updated });
  } catch (error) {
    console.error("Assignment PATCH error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// DELETE - Slett lekse
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

    // Sjekk eierskap
    const { data: assignment } = await supabase
      .from("assignments")
      .select("created_by")
      .eq("id", id)
      .single();

    if (!assignment || assignment.created_by !== session.user.id) {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    const { error } = await supabase.from("assignments").delete().eq("id", id);

    if (error) {
      console.error("Error deleting assignment:", error);
      return NextResponse.json({ message: "Kunne ikke slette lekse" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Assignment DELETE error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
