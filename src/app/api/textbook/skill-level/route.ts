import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import type { Difficulty } from "@/lib/adaptive/types";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent ferdighetsnivå for en elev
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const studentId = searchParams.get("studentId");  // For lærere

    // Bestem hvilken elev vi henter for
    let targetStudentId = session.user.id;

    const supabase = getSupabaseAdmin();

    // Hvis lærer ønsker å se en elevs nivå
    if (studentId && studentId !== session.user.id) {
      const isTeacher = session.user.role === "teacher" || session.user.role === "admin";

      if (!isTeacher) {
        return NextResponse.json({ message: "Ikke autorisert" }, { status: 403 });
      }

      // Verifiser tilgang (forenklet - sjekk at eleven er i en av lærerens klasser)
      const { data: teacherClasses } = await supabase
        .from("class_memberships")
        .select("class_id")
        .eq("user_id", session.user.id)
        .eq("role", "teacher");

      const { data: studentClasses } = await supabase
        .from("class_memberships")
        .select("class_id")
        .eq("user_id", studentId)
        .eq("role", "student");

      const teacherClassIds = teacherClasses?.map(c => c.class_id) || [];
      const studentClassIds = studentClasses?.map(c => c.class_id) || [];
      const hasAccess = teacherClassIds.some(id => studentClassIds.includes(id));

      if (!hasAccess) {
        return NextResponse.json(
          { message: "Du har ikke tilgang til denne eleven" },
          { status: 403 }
        );
      }

      targetStudentId = studentId;
    }

    // Bygg query
    let query = supabase
      .from("textbook_skill_levels")
      .select("*")
      .eq("student_id", targetStudentId);

    if (courseId) {
      query = query.eq("course_id", courseId);
    }

    if (chapterId) {
      // Hent spesifikt kapittel
      query = query.eq("chapter_id", chapterId);
    } else if (courseId) {
      // Hent kurs-nivå (aggregert)
      query = query.is("chapter_id", null);
    }

    const { data: skillLevels, error } = await query;

    if (error) {
      console.error("Error fetching skill levels:", error);
      return NextResponse.json({ message: "Kunne ikke hente ferdighetsnivå" }, { status: 500 });
    }

    // Returner enkelt objekt hvis vi spurte etter spesifikt kapittel/kurs
    if ((courseId && chapterId) || (courseId && !chapterId)) {
      const skillLevel = skillLevels?.[0] || null;
      return NextResponse.json({
        skillLevel,
        recommendedDifficulty: skillLevel?.recommended_difficulty || "medium",
      });
    }

    // Returner alle ferdighetsnivåer
    return NextResponse.json({ skillLevels });
  } catch (error) {
    console.error("Skill level GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// Hent anbefalte oppgaver basert på ferdighetsnivå
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const body = await request.json();
    const { courseId, chapterId, exercises } = body;

    if (!courseId || !exercises || !Array.isArray(exercises)) {
      return NextResponse.json(
        { message: "Mangler påkrevde felt (courseId, exercises)" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Hent ferdighetsnivå
    let query = supabase
      .from("textbook_skill_levels")
      .select("*")
      .eq("student_id", session.user.id)
      .eq("course_id", courseId);

    if (chapterId) {
      query = query.eq("chapter_id", chapterId);
    } else {
      query = query.is("chapter_id", null);
    }

    const { data: skillData } = await query.single();

    const recommendedDifficulty: Difficulty = skillData?.recommended_difficulty || "medium";
    const skillLevel = skillData?.skill_level || 0.5;

    // Marker hvilke oppgaver som er anbefalt
    const recommendedExercises = exercises.map((exercise: {
      id: string;
      difficulty: Difficulty;
      chapterId?: string;
    }) => {
      const isRecommended = exercise.difficulty === recommendedDifficulty;
      let reason: string | undefined;

      if (isRecommended) {
        reason = `Passer ditt nivå (${Math.round(skillLevel * 100)}%)`;
      } else if (exercise.difficulty === "lett" && recommendedDifficulty !== "lett") {
        reason = "For enkel for ditt nivå";
      } else if (exercise.difficulty === "vanskelig" && recommendedDifficulty === "lett") {
        reason = "Anbefales når du har øvd mer";
      }

      return {
        exerciseId: exercise.id,
        chapterId: exercise.chapterId || chapterId,
        difficulty: exercise.difficulty,
        isRecommended,
        reason,
      };
    });

    return NextResponse.json({
      skillLevel: skillData,
      recommendedDifficulty,
      recommendedExercises,
    });
  } catch (error) {
    console.error("Skill level POST error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
