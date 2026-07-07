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

// Tabeller med brukerdata. Kolonnenavnet varierer mellom tabellene,
// og enkelte tabeller finnes ikke i alle miljøer – feil tolereres per tabell.
const USER_DATA_TABLES: { table: string; column: string }[] = [
  { table: "textbook_submissions", column: "student_id" },
  { table: "textbook_submissions", column: "user_id" },
  { table: "textbook_chapter_progress", column: "user_id" },
  { table: "textbook_subtask_progress", column: "user_id" },
  { table: "textbook_exercise_attempts", column: "student_id" },
  { table: "textbook_skill_levels", column: "student_id" },
  { table: "skill_levels", column: "student_id" },
  { table: "exercise_completions", column: "student_id" },
  { table: "exercise_completions", column: "user_id" },
  { table: "flashcard_progress", column: "user_id" },
  { table: "quiz_results", column: "user_id" },
  { table: "training_sessions", column: "student_id" },
  { table: "class_memberships", column: "user_id" },
  { table: "content_feedback", column: "user_id" },
];

// GET - Eksporter alle personopplysninger om innlogget bruker (GDPR art. 15/20)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Du må være logget inn" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();
    const userId = session.user.id;

    const { data: user, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (userError || !user) {
      return NextResponse.json({ error: "Fant ikke brukeren" }, { status: 404 });
    }

    const relatedData: Record<string, unknown[]> = {};
    for (const { table, column } of USER_DATA_TABLES) {
      const { data, error } = await supabase.from(table).select("*").eq(column, userId);
      if (!error && data && data.length > 0) {
        relatedData[table] = [...(relatedData[table] ?? []), ...data];
      }
    }

    const exportPayload = {
      eksportertDato: new Date().toISOString(),
      beskrivelse:
        "Kopi av personopplysningene Skolesaga har lagret om deg (GDPR art. 15 og 20).",
      konto: user,
      laeringsdata: relatedData,
    };

    return new NextResponse(JSON.stringify(exportPayload, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Disposition": 'attachment; filename="skolesaga-mine-data.json"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("[UserData] Eksport feilet:", error);
    return NextResponse.json({ error: "En feil oppstod" }, { status: 500 });
  }
}

// DELETE - Slett egen konto og alle tilhørende data (GDPR art. 17)
export async function DELETE() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Du må være logget inn" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();
    const userId = session.user.id;

    for (const { table, column } of USER_DATA_TABLES) {
      const { error } = await supabase.from(table).delete().eq(column, userId);
      if (error) {
        console.warn(`[UserData] Kunne ikke slette fra ${table}.${column}:`, error.message);
      }
    }

    const { error: deleteUserError } = await supabase
      .from("users")
      .delete()
      .eq("id", userId);

    if (deleteUserError) {
      console.error("[UserData] Feil ved sletting av bruker:", deleteUserError);
      return NextResponse.json({ error: "Kunne ikke slette kontoen" }, { status: 500 });
    }

    try {
      const { error: authDeleteError } = await supabase.auth.admin.deleteUser(userId);
      if (authDeleteError) {
        console.warn("[UserData] Kunne ikke slette fra Supabase Auth:", authDeleteError.message);
      }
    } catch (authError) {
      console.warn("[UserData] Supabase Auth-sletting feilet:", authError);
    }

    console.log(`[UserData] Bruker slettet egen konto: ${userId}`);

    return NextResponse.json({
      success: true,
      message: "Kontoen din og alle tilhørende data er slettet",
    });
  } catch (error) {
    console.error("[UserData] Sletting feilet:", error);
    return NextResponse.json({ error: "En feil oppstod" }, { status: 500 });
  }
}
