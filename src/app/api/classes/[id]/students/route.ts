import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// POST - Add students to a class (teachers only)
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const { id: classId } = await params;

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Ikke innlogget" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();

    // Check that user is a teacher in this class
    const { data: membership } = await supabase
      .from("class_memberships")
      .select("role")
      .eq("class_id", classId)
      .eq("user_id", session.user.id)
      .eq("role", "teacher")
      .single();

    if (!membership) {
      return NextResponse.json({ error: "Ikke autorisert" }, { status: 403 });
    }

    const body = await request.json();
    const { studentIds } = body;

    if (!studentIds || !Array.isArray(studentIds) || studentIds.length === 0) {
      return NextResponse.json(
        { error: "Ingen elever valgt" },
        { status: 400 }
      );
    }

    // Get teacher's organization
    const { data: teacher } = await supabase
      .from("users")
      .select("organization_id")
      .eq("id", session.user.id)
      .single();

    // Verify all students are in the same organization (if teacher has one)
    if (teacher?.organization_id) {
      const { data: students } = await supabase
        .from("users")
        .select("id, organization_id")
        .in("id", studentIds);

      const invalidStudents = students?.filter(
        (s) => s.organization_id !== teacher.organization_id
      );

      if (invalidStudents && invalidStudents.length > 0) {
        return NextResponse.json(
          { error: "Noen elever er ikke i din organisasjon" },
          { status: 400 }
        );
      }
    }

    // Check which students are already in the class
    const { data: existingMemberships } = await supabase
      .from("class_memberships")
      .select("user_id")
      .eq("class_id", classId)
      .in("user_id", studentIds);

    const existingIds = existingMemberships?.map((m) => m.user_id) || [];
    const newStudentIds = studentIds.filter((id: string) => !existingIds.includes(id));

    if (newStudentIds.length === 0) {
      return NextResponse.json({
        success: true,
        added: 0,
        message: "Alle elevene er allerede i klassen",
      });
    }

    // Add new students to class
    const membershipsToInsert = newStudentIds.map((studentId: string) => ({
      class_id: classId,
      user_id: studentId,
      role: "student",
    }));

    const { error } = await supabase
      .from("class_memberships")
      .insert(membershipsToInsert);

    if (error) {
      console.error("[Add Students] Error:", error);
      return NextResponse.json(
        { error: "Kunne ikke legge til elever" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      added: newStudentIds.length,
      alreadyInClass: existingIds.length,
      message: `${newStudentIds.length} elev${newStudentIds.length !== 1 ? "er" : ""} lagt til`,
    });
  } catch (error) {
    console.error("[Add Students] Error:", error);
    return NextResponse.json({ error: "En feil oppstod" }, { status: 500 });
  }
}

// DELETE - Remove a student from a class (teachers only)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const { id: classId } = await params;

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Ikke innlogget" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();

    // Check that user is a teacher in this class
    const { data: membership } = await supabase
      .from("class_memberships")
      .select("role")
      .eq("class_id", classId)
      .eq("user_id", session.user.id)
      .eq("role", "teacher")
      .single();

    if (!membership) {
      return NextResponse.json({ error: "Ikke autorisert" }, { status: 403 });
    }

    const body = await request.json();
    const { studentId } = body;

    if (!studentId) {
      return NextResponse.json(
        { error: "Ingen elev valgt" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("class_memberships")
      .delete()
      .eq("class_id", classId)
      .eq("user_id", studentId);

    if (error) {
      console.error("[Remove Student] Error:", error);
      return NextResponse.json(
        { error: "Kunne ikke fjerne elev" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Elev fjernet fra klassen",
    });
  } catch (error) {
    console.error("[Remove Student] Error:", error);
    return NextResponse.json({ error: "En feil oppstod" }, { status: 500 });
  }
}
