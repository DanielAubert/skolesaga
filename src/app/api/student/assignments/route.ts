import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import { getCourse, getChapterMeta } from "@/lib/data/textbook-courses";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
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

    // Beregn fullføring for hver lekse
    const enriched = await Promise.all(
      (assignments || []).map(async (a) => {
        const course = getCourse(a.course_id);
        let totalExercises = 0;

        if (a.exercise_ids && a.exercise_ids.length > 0) {
          totalExercises = a.exercise_ids.length;
        } else if (course) {
          for (const chapterId of a.chapter_ids) {
            const chapter = getChapterMeta(a.course_id, chapterId);
            if (chapter) {
              totalExercises += chapter.exerciseCount;
            }
          }
        }

        // Hent fullføring
        let completedCount = 0;

        if (a.exercise_ids && a.exercise_ids.length > 0) {
          const { data: completions } = await supabase
            .from("exercise_completions")
            .select("exercise_id")
            .eq("student_id", userId)
            .eq("course_id", a.course_id)
            .in("exercise_id", a.exercise_ids)
            .eq("is_passed", true);

          const uniqueExercises = new Set(completions?.map((c) => c.exercise_id));
          completedCount = uniqueExercises.size;
        } else {
          const { data: completions } = await supabase
            .from("exercise_completions")
            .select("exercise_id")
            .eq("student_id", userId)
            .eq("course_id", a.course_id)
            .in("chapter_id", a.chapter_ids)
            .eq("is_passed", true);

          const uniqueExercises = new Set(completions?.map((c) => c.exercise_id));
          completedCount = uniqueExercises.size;
        }

        // Bestem status
        const now = new Date();
        const dueDate = new Date(a.due_date);
        let status: string;

        if (completedCount === 0) {
          status = now > dueDate ? "overdue" : "not_started";
        } else if (completedCount >= totalExercises) {
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
          completedExercises: completedCount,
          totalExercises,
          percentComplete: totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0,
        };
      })
    );

    return NextResponse.json({ assignments: enriched });
  } catch (error) {
    console.error("Student assignments error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
