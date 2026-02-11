import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent alle lekser opprettet av innlogget lærer
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    const supabase = getSupabaseAdmin();
    const { searchParams } = new URL(request.url);
    const classId = searchParams.get("classId");

    // Hent lekser opprettet av denne læreren
    let query = supabase
      .from("assignments")
      .select(`
        *,
        assignment_targets (
          id,
          class_id,
          student_id
        )
      `)
      .eq("created_by", session.user.id)
      .order("due_date", { ascending: true });

    const { data: assignments, error } = await query;

    if (error) {
      console.error("Error fetching assignments:", error);
      return NextResponse.json({ message: "Kunne ikke hente lekser" }, { status: 500 });
    }

    // Filtrer på klasse-ID hvis angitt
    let filtered = assignments || [];
    if (classId) {
      filtered = filtered.filter((a) =>
        a.assignment_targets?.some((t: { class_id: string | null }) => t.class_id === classId)
      );
    }

    // Hent klassenavn for targets
    const classIds = new Set<string>();
    filtered.forEach((a) => {
      a.assignment_targets?.forEach((t: { class_id: string | null }) => {
        if (t.class_id) classIds.add(t.class_id);
      });
    });

    let classNameMap: Record<string, string> = {};
    if (classIds.size > 0) {
      const { data: classes } = await supabase
        .from("classes")
        .select("id, name")
        .in("id", Array.from(classIds));
      if (classes) {
        classNameMap = Object.fromEntries(classes.map((c) => [c.id, c.name]));
      }
    }

    const enriched = filtered.map((a) => ({
      ...a,
      assignment_targets: a.assignment_targets?.map((t: { id: string; class_id: string | null; student_id: string | null }) => ({
        ...t,
        className: t.class_id ? classNameMap[t.class_id] || null : null,
      })),
    }));

    return NextResponse.json({ assignments: enriched });
  } catch (error) {
    console.error("Assignments GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// POST - Opprett ny lekse
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    const body = await request.json();
    const { title, courseId, chapterIds, exerciseIds, dueDate, description, targets } = body;

    if (!title || !courseId || !chapterIds || chapterIds.length === 0 || !dueDate) {
      return NextResponse.json(
        { message: "Tittel, fag, kapitler og frist er påkrevd" },
        { status: 400 }
      );
    }

    if (!targets || targets.length === 0) {
      return NextResponse.json(
        { message: "Minst én mottaker er påkrevd" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Valider at læreren er medlem av klassene
    const classTargets = targets.filter((t: { type: string }) => t.type === "class");
    if (classTargets.length > 0) {
      const classIds = classTargets.map((t: { classId: string }) => t.classId);
      const { data: memberships } = await supabase
        .from("class_memberships")
        .select("class_id")
        .eq("user_id", session.user.id)
        .eq("role", "teacher")
        .in("class_id", classIds);

      if (!memberships || memberships.length !== classIds.length) {
        return NextResponse.json(
          { message: "Du er ikke lærer i alle valgte klasser" },
          { status: 403 }
        );
      }
    }

    // Opprett leksen
    const { data: assignment, error: createError } = await supabase
      .from("assignments")
      .insert({
        created_by: session.user.id,
        title,
        course_id: courseId,
        chapter_ids: chapterIds,
        exercise_ids: exerciseIds || null,
        due_date: dueDate,
        description: description || null,
      })
      .select()
      .single();

    if (createError || !assignment) {
      console.error("Error creating assignment:", createError);
      return NextResponse.json({ message: "Kunne ikke opprette lekse" }, { status: 500 });
    }

    // Opprett targets
    const targetRows = targets.map((t: { type: string; classId?: string; studentId?: string }) => ({
      assignment_id: assignment.id,
      class_id: t.type === "class" ? t.classId : null,
      student_id: t.type === "student" ? t.studentId : null,
    }));

    const { error: targetError } = await supabase
      .from("assignment_targets")
      .insert(targetRows);

    if (targetError) {
      console.error("Error creating assignment targets:", targetError);
      // Rull tilbake leksen
      await supabase.from("assignments").delete().eq("id", assignment.id);
      return NextResponse.json({ message: "Kunne ikke opprette mottakere" }, { status: 500 });
    }

    return NextResponse.json({ success: true, assignment });
  } catch (error) {
    console.error("Assignment POST error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
