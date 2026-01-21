import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET - Hent en spesifikk besvarelse
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { id } = await params;
    const supabase = getSupabaseAdmin();

    const { data: submission, error } = await supabase
      .from("textbook_submissions")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !submission) {
      return NextResponse.json({ message: "Besvarelse ikke funnet" }, { status: 404 });
    }

    // Sjekk tilgang
    const isOwner = submission.student_id === session.user.id;
    const isTeacher = session.user.role === "teacher" || session.user.role === "admin";

    if (!isOwner && !isTeacher) {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    // Hvis lærer, verifiser at de har tilgang til eleven
    if (!isOwner && isTeacher) {
      const { data: teacherClasses } = await supabase
        .from("class_memberships")
        .select("class_id")
        .eq("user_id", session.user.id)
        .eq("role", "teacher");

      const { data: studentClasses } = await supabase
        .from("class_memberships")
        .select("class_id")
        .eq("user_id", submission.student_id)
        .eq("role", "student");

      const teacherClassIds = teacherClasses?.map((m) => m.class_id) || [];
      const studentClassIds = studentClasses?.map((m) => m.class_id) || [];

      const hasSharedClass = teacherClassIds.some((id) => studentClassIds.includes(id));

      if (!hasSharedClass) {
        return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
      }
    }

    return NextResponse.json({ submission });
  } catch (error) {
    console.error("Submission GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// PATCH - Oppdater besvarelse (elev: innhold, lærer: kommentar)
export async function PATCH(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const supabase = getSupabaseAdmin();

    // Hent eksisterende besvarelse
    const { data: submission, error: fetchError } = await supabase
      .from("textbook_submissions")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !submission) {
      return NextResponse.json({ message: "Besvarelse ikke funnet" }, { status: 404 });
    }

    const isOwner = submission.student_id === session.user.id;
    const isTeacher = session.user.role === "teacher" || session.user.role === "admin";

    // Sjekk tilgang
    if (!isOwner && !isTeacher) {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    // Hvis lærer, verifiser at de har tilgang til eleven
    if (!isOwner && isTeacher) {
      const { data: teacherClasses } = await supabase
        .from("class_memberships")
        .select("class_id")
        .eq("user_id", session.user.id)
        .eq("role", "teacher");

      const { data: studentClasses } = await supabase
        .from("class_memberships")
        .select("class_id")
        .eq("user_id", submission.student_id)
        .eq("role", "student");

      const teacherClassIds = teacherClasses?.map((m) => m.class_id) || [];
      const studentClassIds = studentClasses?.map((m) => m.class_id) || [];

      const hasSharedClass = teacherClassIds.some((id) => studentClassIds.includes(id));

      if (!hasSharedClass) {
        return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
      }
    }

    // Bygg oppdateringsobjekt basert på rolle
    const updateData: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };

    if (isOwner) {
      // Elev kan oppdatere innholdet
      if (body.content !== undefined) updateData.content = body.content;
      if (body.imageUrl !== undefined) updateData.image_url = body.imageUrl;
      if (body.canvasData !== undefined) updateData.canvas_data = body.canvasData;
      if (body.isCorrect !== undefined) updateData.is_correct = body.isCorrect;
      if (body.validationResults !== undefined) updateData.validation_results = body.validationResults;
    }

    if (isTeacher && !isOwner) {
      // Lærer kan legge til kommentar
      if (body.teacherFeedback !== undefined) {
        updateData.teacher_grade_feedback = body.teacherFeedback;
        updateData.teacher_graded_at = new Date().toISOString();
        updateData.teacher_graded_by = session.user.id;
      }
    }

    // Utfør oppdatering
    const { data: updated, error: updateError } = await supabase
      .from("textbook_submissions")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (updateError) {
      console.error("Error updating submission:", updateError);
      return NextResponse.json({ message: "Kunne ikke oppdatere besvarelse" }, { status: 500 });
    }

    return NextResponse.json({ submission: updated });
  } catch (error) {
    console.error("Submission PATCH error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// DELETE - Slett besvarelse (kun eier)
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { id } = await params;
    const supabase = getSupabaseAdmin();

    // Hent besvarelsen for å sjekke eierskap
    const { data: submission, error: fetchError } = await supabase
      .from("textbook_submissions")
      .select("student_id")
      .eq("id", id)
      .single();

    if (fetchError || !submission) {
      return NextResponse.json({ message: "Besvarelse ikke funnet" }, { status: 404 });
    }

    // Kun eier kan slette
    if (submission.student_id !== session.user.id) {
      return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
    }

    const { error: deleteError } = await supabase
      .from("textbook_submissions")
      .delete()
      .eq("id", id);

    if (deleteError) {
      console.error("Error deleting submission:", deleteError);
      return NextResponse.json({ message: "Kunne ikke slette besvarelse" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission DELETE error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
