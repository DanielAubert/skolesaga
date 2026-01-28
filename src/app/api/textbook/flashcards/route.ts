import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// GET - Hent flashcard-fremgang for innlogget bruker
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");

    if (!courseId) {
      return NextResponse.json(
        { message: "Mangler courseId" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    let query = supabase
      .from("flashcard_progress")
      .select("*")
      .eq("user_id", session.user.id)
      .eq("course_id", courseId);

    if (chapterId) {
      query = query.eq("chapter_id", chapterId);
    }

    const { data: progress, error } = await query;

    if (error) {
      console.error("Error fetching flashcard progress:", error);
      return NextResponse.json(
        { message: "Kunne ikke hente flashcard-fremgang" },
        { status: 500 }
      );
    }

    return NextResponse.json({ progress: progress || [] });
  } catch (error) {
    console.error("Flashcard progress GET error:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
