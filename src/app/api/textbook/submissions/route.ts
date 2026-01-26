import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent besvarelser for en elev (egen eller fra lærer)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get("studentId");
    const chapterId = searchParams.get("chapterId");
    const courseId = searchParams.get("courseId");
    const exerciseId = searchParams.get("exerciseId");

    const supabase = getSupabaseAdmin();
    const isTeacher = session.user.role === "teacher" || session.user.role === "admin";

    // Bestem hvilken elev vi henter for
    let targetStudentId = session.user.id;

    if (studentId && studentId !== session.user.id) {
      // Lærer ønsker å se en annen elevs besvarelser
      if (!isTeacher) {
        return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
      }

      // Verifiser at læreren har tilgang til denne eleven (i samme klasse)
      const { data: hasAccess } = await supabase
        .from("class_memberships")
        .select(`
          class_id,
          classes!inner (
            class_memberships!inner (
              user_id,
              role
            )
          )
        `)
        .eq("user_id", session.user.id)
        .eq("role", "teacher");

      // Sjekk om eleven er i en av lærerens klasser
      const { data: studentInClass } = await supabase
        .from("class_memberships")
        .select("class_id")
        .eq("user_id", studentId)
        .eq("role", "student");

      const teacherClassIds = hasAccess?.map((m) => m.class_id) || [];
      const studentClassIds = studentInClass?.map((m) => m.class_id) || [];

      const hasSharedClass = teacherClassIds.some((id) => studentClassIds.includes(id));

      if (!hasSharedClass) {
        return NextResponse.json(
          { message: "Du har ikke tilgang til denne eleven" },
          { status: 403 }
        );
      }

      targetStudentId = studentId;
    }

    // Bygg query
    let query = supabase
      .from("textbook_submissions")
      .select("*")
      .eq("student_id", targetStudentId)
      .order("created_at", { ascending: false });

    if (courseId) {
      query = query.eq("course_id", courseId);
    }

    if (chapterId) {
      query = query.eq("chapter_id", chapterId);
    }

    if (exerciseId) {
      query = query.eq("exercise_id", exerciseId);
    }

    const { data: submissions, error } = await query;

    if (error) {
      console.error("Error fetching submissions:", error);
      return NextResponse.json({ message: "Kunne ikke hente besvarelser" }, { status: 500 });
    }

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error("Submissions GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// POST - Lagre ny besvarelse
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const body = await request.json();
    const {
      exerciseId,
      chapterId,
      courseId,
      submissionType,
      content,
      imageUrl,
      canvasData,
      isCorrect,
      validationResults,
    } = body;

    // Valider påkrevde felt
    if (!exerciseId || !chapterId || !courseId || !submissionType) {
      return NextResponse.json(
        { message: "Mangler påkrevde felt" },
        { status: 400 }
      );
    }

    // Valider submissionType
    const validTypes = ["code", "geogebra-xml", "image", "canvas-drawing", "text", "multiple-choice", "spreadsheet"];
    if (!validTypes.includes(submissionType)) {
      return NextResponse.json(
        { message: "Ugyldig besvarelsestype" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Sjekk om det allerede finnes en besvarelse for denne oppgaven
    const { data: existing } = await supabase
      .from("textbook_submissions")
      .select("id")
      .eq("student_id", session.user.id)
      .eq("exercise_id", exerciseId)
      .eq("chapter_id", chapterId)
      .eq("course_id", courseId)
      .single();

    if (existing) {
      // Oppdater eksisterende besvarelse
      const { data: updated, error: updateError } = await supabase
        .from("textbook_submissions")
        .update({
          submission_type: submissionType,
          content,
          image_url: imageUrl,
          canvas_data: canvasData,
          is_correct: isCorrect,
          validation_results: validationResults,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id)
        .select()
        .single();

      if (updateError) {
        console.error("Error updating submission:", updateError);
        return NextResponse.json({ message: "Kunne ikke oppdatere besvarelse" }, { status: 500 });
      }

      return NextResponse.json({ submission: updated, updated: true });
    }

    // Opprett ny besvarelse
    const { data: submission, error: createError } = await supabase
      .from("textbook_submissions")
      .insert({
        exercise_id: exerciseId,
        chapter_id: chapterId,
        course_id: courseId,
        student_id: session.user.id,
        submission_type: submissionType,
        content,
        image_url: imageUrl,
        canvas_data: canvasData,
        is_correct: isCorrect,
        validation_results: validationResults,
      })
      .select()
      .single();

    if (createError) {
      console.error("Error creating submission:", createError);
      return NextResponse.json({ message: "Kunne ikke lagre besvarelse" }, { status: 500 });
    }

    return NextResponse.json({ submission, created: true }, { status: 201 });
  } catch (error) {
    console.error("Submissions POST error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
