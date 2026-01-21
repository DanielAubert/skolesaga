import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import {
  calculateSkillLevel,
  generateFeedback,
  type ExerciseAttempt,
} from "@/lib/adaptive";
import type {
  CreateAttemptRequest,
  TextbookExerciseAttempt,
  Difficulty,
} from "@/lib/adaptive/types";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent oppgaveforsøk for en elev
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const limit = parseInt(searchParams.get("limit") || "50");

    const supabase = getSupabaseAdmin();

    let query = supabase
      .from("textbook_exercise_attempts")
      .select("*")
      .eq("student_id", session.user.id)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (courseId) {
      query = query.eq("course_id", courseId);
    }

    if (chapterId) {
      query = query.eq("chapter_id", chapterId);
    }

    const { data: attempts, error } = await query;

    if (error) {
      console.error("Error fetching attempts:", error);
      return NextResponse.json({ message: "Kunne ikke hente forsøk" }, { status: 500 });
    }

    return NextResponse.json({ attempts });
  } catch (error) {
    console.error("Attempts GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// POST - Registrer nytt oppgaveforsøk og oppdater ferdighetsnivå
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const body: CreateAttemptRequest = await request.json();
    const {
      exerciseId,
      chapterId,
      courseId,
      difficulty,
      exerciseType,
      isCorrect,
      attemptCount = 1,
      timeSpentMs,
      stepsData,
    } = body;

    // Valider påkrevde felt
    if (!exerciseId || !chapterId || !courseId || !difficulty || !exerciseType || isCorrect === undefined) {
      return NextResponse.json(
        { message: "Mangler påkrevde felt" },
        { status: 400 }
      );
    }

    // Valider difficulty
    const validDifficulties: Difficulty[] = ["lett", "medium", "vanskelig"];
    if (!validDifficulties.includes(difficulty)) {
      return NextResponse.json(
        { message: "Ugyldig vanskelighetsgrad" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // 1. Lagre forsøket
    const { data: attempt, error: attemptError } = await supabase
      .from("textbook_exercise_attempts")
      .insert({
        student_id: session.user.id,
        exercise_id: exerciseId,
        chapter_id: chapterId,
        course_id: courseId,
        difficulty,
        exercise_type: exerciseType,
        is_correct: isCorrect,
        attempt_count: attemptCount,
        time_spent_ms: timeSpentMs,
        steps_data: stepsData,
      })
      .select()
      .single();

    if (attemptError) {
      console.error("Error creating attempt:", attemptError);
      return NextResponse.json({ message: "Kunne ikke lagre forsøk" }, { status: 500 });
    }

    // 2. Hent alle forsøk for dette kapitlet for å beregne nytt ferdighetsnivå
    const { data: allAttempts, error: fetchError } = await supabase
      .from("textbook_exercise_attempts")
      .select("*")
      .eq("student_id", session.user.id)
      .eq("course_id", courseId)
      .eq("chapter_id", chapterId)
      .order("created_at", { ascending: false })
      .limit(100);

    if (fetchError) {
      console.error("Error fetching attempts:", fetchError);
      // Fortsett selv om vi ikke kan hente historikk
    }

    // 3. Beregn ferdighetsnivå
    const exerciseAttempts: ExerciseAttempt[] = (allAttempts || [attempt]).map((a: TextbookExerciseAttempt) => ({
      difficulty: a.difficulty as Difficulty,
      isCorrect: a.is_correct,
      attemptCount: a.attempt_count,
      createdAt: new Date(a.created_at),
    }));

    const skillResult = calculateSkillLevel(exerciseAttempts);

    // 4. Oppdater eller opprett ferdighetsnivå for kapitlet
    const { data: skillLevel, error: skillError } = await supabase
      .from("textbook_skill_levels")
      .upsert(
        {
          student_id: session.user.id,
          course_id: courseId,
          chapter_id: chapterId,
          skill_level: skillResult.skillLevel,
          recommended_difficulty: skillResult.recommendedDifficulty,
          total_attempts: skillResult.totalAttempts,
          correct_attempts: skillResult.correctAttempts,
          streak_current: skillResult.streakCurrent,
          streak_longest: skillResult.streakLongest,
        },
        {
          onConflict: "student_id,course_id,chapter_id",
        }
      )
      .select()
      .single();

    if (skillError) {
      console.error("Error updating skill level:", skillError);
    }

    // 5. Oppdater også kurs-nivå (aggregert)
    const { data: allCourseAttempts } = await supabase
      .from("textbook_exercise_attempts")
      .select("*")
      .eq("student_id", session.user.id)
      .eq("course_id", courseId)
      .order("created_at", { ascending: false })
      .limit(200);

    if (allCourseAttempts && allCourseAttempts.length > 0) {
      const courseExerciseAttempts: ExerciseAttempt[] = allCourseAttempts.map((a: TextbookExerciseAttempt) => ({
        difficulty: a.difficulty as Difficulty,
        isCorrect: a.is_correct,
        attemptCount: a.attempt_count,
        createdAt: new Date(a.created_at),
      }));

      const courseSkillResult = calculateSkillLevel(courseExerciseAttempts);

      await supabase
        .from("textbook_skill_levels")
        .upsert(
          {
            student_id: session.user.id,
            course_id: courseId,
            chapter_id: null,  // Null = kurs-nivå
            skill_level: courseSkillResult.skillLevel,
            recommended_difficulty: courseSkillResult.recommendedDifficulty,
            total_attempts: courseSkillResult.totalAttempts,
            correct_attempts: courseSkillResult.correctAttempts,
            streak_current: courseSkillResult.streakCurrent,
            streak_longest: courseSkillResult.streakLongest,
          },
          {
            onConflict: "student_id,course_id,chapter_id",
          }
        );
    }

    // 6. Generer tilbakemelding
    const feedback = generateFeedback(skillResult);

    return NextResponse.json({
      attempt,
      skillLevel: skillLevel || {
        skill_level: skillResult.skillLevel,
        recommended_difficulty: skillResult.recommendedDifficulty,
      },
      feedback,
    }, { status: 201 });
  } catch (error) {
    console.error("Attempts POST error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
