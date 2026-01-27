import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase configuration error");
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// GET: List students in the same organization as the teacher
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Du må være logget inn" },
        { status: 401 }
      );
    }

    // Only teachers and admins can view organization students
    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Kun lærere har tilgang" },
        { status: 403 }
      );
    }

    const supabase = getSupabaseAdmin();

    // First get the teacher's organization
    const { data: teacher, error: teacherError } = await supabase
      .from("users")
      .select("organization_id")
      .eq("id", session.user.id)
      .single();

    if (teacherError) {
      console.error("[Organization Students] Error fetching teacher:", teacherError);
      return NextResponse.json(
        { error: "Kunne ikke hente brukerdata" },
        { status: 500 }
      );
    }

    if (!teacher?.organization_id) {
      return NextResponse.json({
        students: [],
        message: "Du er ikke tilknyttet en organisasjon",
      });
    }

    // Get all students in the same organization
    // Also include teachers who have opted in to be searchable as students
    // Try with searchable_as_student column first, fall back if column doesn't exist
    let students;
    let studentsError;

    // First try with the new column
    const result = await supabase
      .from("users")
      .select(`
        id,
        name,
        email,
        grade_level,
        role,
        searchable_as_student,
        created_at
      `)
      .eq("organization_id", teacher.organization_id)
      .or("role.eq.student,and(role.eq.teacher,searchable_as_student.eq.true)")
      .neq("id", session.user.id)
      .order("name", { ascending: true });

    if (result.error?.message?.includes("searchable_as_student")) {
      // Column doesn't exist yet, fall back to simple query (students only)
      console.log("[Organization Students] searchable_as_student column not found, using fallback query");
      const fallbackResult = await supabase
        .from("users")
        .select(`
          id,
          name,
          email,
          grade_level,
          role,
          created_at
        `)
        .eq("organization_id", teacher.organization_id)
        .eq("role", "student")
        .neq("id", session.user.id)
        .order("name", { ascending: true });

      students = fallbackResult.data;
      studentsError = fallbackResult.error;
    } else {
      students = result.data;
      studentsError = result.error;
    }

    if (studentsError) {
      console.error("[Organization Students] Error fetching students:", studentsError);
      return NextResponse.json(
        { error: "Kunne ikke hente elever" },
        { status: 500 }
      );
    }

    // Get organization name
    const { data: org } = await supabase
      .from("organizations")
      .select("name")
      .eq("id", teacher.organization_id)
      .single();

    // Get class memberships for these students
    const studentIds = students?.map(s => s.id) || [];
    const classMemberships: Record<string, string[]> = {};

    if (studentIds.length > 0) {
      const { data: memberships } = await supabase
        .from("class_memberships")
        .select(`
          user_id,
          classes!inner(id, name)
        `)
        .in("user_id", studentIds);

      if (memberships) {
        for (const m of memberships) {
          const userId = m.user_id;
          const classData = m.classes as unknown as { id: string; name: string } | null;
          const className = classData?.name;
          if (!classMemberships[userId]) {
            classMemberships[userId] = [];
          }
          if (className) {
            classMemberships[userId].push(className);
          }
        }
      }
    }

    // Enrich students with class info
    const enrichedStudents = (students || []).map((student: Record<string, unknown>) => ({
      id: student.id,
      name: student.name,
      email: student.email,
      grade_level: student.grade_level,
      created_at: student.created_at,
      classes: classMemberships[student.id as string] || [],
      isTeacher: student.role === "teacher" && student.searchable_as_student === true,
    }));

    return NextResponse.json({
      students: enrichedStudents,
      organizationName: org?.name || null,
      totalCount: enrichedStudents.length,
    });
  } catch (error) {
    console.error("[Organization Students] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}
