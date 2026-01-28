import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import { computeNextReview } from "@/lib/flashcard/spaced-repetition";
import type { FlashcardRating } from "@/lib/flashcard/spaced-repetition";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

interface ReviewRequest {
  courseId: string;
  definitionId: string;
  chapterId: string;
  rating: FlashcardRating;
}

// POST - Lagre flashcard-vurdering
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const body: ReviewRequest = await request.json();
    const { courseId, definitionId, chapterId, rating } = body;

    // Valider påkrevde felt
    if (!courseId || !definitionId || !chapterId || !rating) {
      return NextResponse.json(
        { message: "Mangler påkrevde felt" },
        { status: 400 }
      );
    }

    if (!['hard', 'ok', 'easy'].includes(rating)) {
      return NextResponse.json(
        { message: "Ugyldig vurdering" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Hent eksisterende fremgang (om noe)
    const { data: existing } = await supabase
      .from("flashcard_progress")
      .select("*")
      .eq("user_id", session.user.id)
      .eq("definition_id", definitionId)
      .single();

    // Beregn nye SM-2-verdier
    const current = existing
      ? {
          intervalDays: existing.interval_days,
          easeFactor: existing.ease_factor,
          repetitions: existing.repetitions,
        }
      : null;

    const result = computeNextReview(current, rating);
    const now = new Date().toISOString();

    // Rating-tellere
    const easyCount = (existing?.easy_count ?? 0) + (rating === 'easy' ? 1 : 0);
    const okCount = (existing?.ok_count ?? 0) + (rating === 'ok' ? 1 : 0);
    const hardCount = (existing?.hard_count ?? 0) + (rating === 'hard' ? 1 : 0);
    const totalReviews = (existing?.total_reviews ?? 0) + 1;

    // Upsert i flashcard_progress
    const { error } = await supabase
      .from("flashcard_progress")
      .upsert(
        {
          user_id: session.user.id,
          course_id: courseId,
          definition_id: definitionId,
          chapter_id: chapterId,
          interval_days: result.intervalDays,
          ease_factor: result.easeFactor,
          repetitions: result.repetitions,
          next_review_at: result.nextReviewAt,
          last_reviewed_at: now,
          total_reviews: totalReviews,
          easy_count: easyCount,
          ok_count: okCount,
          hard_count: hardCount,
          updated_at: now,
        },
        { onConflict: "user_id,definition_id" }
      );

    if (error) {
      console.error("Error saving flashcard review:", error);
      return NextResponse.json(
        { message: "Kunne ikke lagre vurdering" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      result: {
        intervalDays: result.intervalDays,
        easeFactor: result.easeFactor,
        repetitions: result.repetitions,
        nextReviewAt: result.nextReviewAt,
        totalReviews,
      },
    }, { status: 200 });
  } catch (error) {
    console.error("Flashcard review POST error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
