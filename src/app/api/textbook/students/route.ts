import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent alle elever i lærerens klasser
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    // Kun lærere og admin kan se elever
    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const classId = searchParams.get("classId");

    const supabase = getSupabaseAdmin();

    // Hent alle klasser der brukeren er lærer
    const teacherClassesQuery = supabase
      .from("class_memberships")
      .select("class_id")
      .eq("user_id", session.user.id)
      .eq("role", "teacher");

    const { data: teacherClasses, error: teacherError } = await teacherClassesQuery;

    if (teacherError) {
      console.error("Error fetching teacher classes:", teacherError);
      return NextResponse.json({ message: "Kunne ikke hente klasser" }, { status: 500 });
    }

    if (!teacherClasses || teacherClasses.length === 0) {
      return NextResponse.json({ students: [], classes: [] });
    }

    const teacherClassIds = teacherClasses.map((c) => c.class_id);

    // Hvis classId er spesifisert, verifiser at læreren har tilgang
    if (classId && !teacherClassIds.includes(classId)) {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    // Hent klasseinformasjon
    const { data: classes, error: classesError } = await supabase
      .from("classes")
      .select("id, name, grade_level, subject")
      .in("id", teacherClassIds);

    if (classesError) {
      console.error("Error fetching classes:", classesError);
      return NextResponse.json({ message: "Kunne ikke hente klasser" }, { status: 500 });
    }

    // Hent elever i disse klassene
    const targetClassIds = classId ? [classId] : teacherClassIds;

    const { data: studentMemberships, error: studentsError } = await supabase
      .from("class_memberships")
      .select(`
        class_id,
        joined_at,
        users (
          id,
          name,
          email,
          avatar_url
        )
      `)
      .in("class_id", targetClassIds)
      .eq("role", "student");

    if (studentsError) {
      console.error("Error fetching students:", studentsError);
      return NextResponse.json({ message: "Kunne ikke hente elever" }, { status: 500 });
    }

    // Transformer data til et mer brukervennlig format
    const studentsMap = new Map<string, {
      id: string;
      name: string;
      email: string;
      avatarUrl: string | null;
      classes: { id: string; name: string }[];
    }>();

    for (const membership of studentMemberships || []) {
      const user = membership.users as unknown as {
        id: string;
        name: string;
        email: string;
        avatar_url: string | null;
      };

      if (!user) continue;

      const classInfo = classes?.find((c) => c.id === membership.class_id);

      if (studentsMap.has(user.id)) {
        const existing = studentsMap.get(user.id)!;
        if (classInfo) {
          existing.classes.push({ id: classInfo.id, name: classInfo.name });
        }
      } else {
        studentsMap.set(user.id, {
          id: user.id,
          name: user.name,
          email: user.email,
          avatarUrl: user.avatar_url,
          classes: classInfo ? [{ id: classInfo.id, name: classInfo.name }] : [],
        });
      }
    }

    const students = Array.from(studentsMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name, "nb")
    );

    return NextResponse.json({
      students,
      classes: classes || [],
    });
  } catch (error) {
    console.error("Students GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
