import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import { getEksamenssettImpact } from "@/lib/eksamenssett-impact";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

// DELETE - Slett en bruker og all tilhørende data
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    // Kun admin kan slette brukere
    if (session.user.role !== "admin") {
      return NextResponse.json({ message: "Kun admin kan slette brukere" }, { status: 403 });
    }

    const { userId } = await params;

    if (!userId) {
      return NextResponse.json({ message: "Mangler bruker-ID" }, { status: 400 });
    }

    // Kan ikke slette seg selv
    if (userId === session.user.id) {
      return NextResponse.json({ message: "Du kan ikke slette din egen bruker" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    // Hent brukerinfo først
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("id, email, name, role")
      .eq("id", userId)
      .single();

    if (userError || !user) {
      return NextResponse.json({ message: "Bruker ikke funnet" }, { status: 404 });
    }

    // Kontoen er felles med eksamenssett.no. Har brukeren kjøp/abonnement der,
    // kreves eksplisitt bekreftelse (?force=true) før sletting.
    const { searchParams } = new URL(request.url);
    const force = searchParams.get("force") === "true";

    const impact = await getEksamenssettImpact(supabase, userId);

    if (impact.hasActivity && !force) {
      return NextResponse.json(
        {
          message: "Brukeren har kjøp eller abonnement på eksamenssett.no",
          requiresConfirmation: true,
          impact: impact.details,
        },
        { status: 409 }
      );
    }

    console.log(`[Admin] Sletter bruker: ${user.id}${impact.hasActivity ? " (med eksamenssett.no-aktivitet, force bekreftet)" : ""}`);

    // Slett relaterte data i riktig rekkefølge (foreign key constraints)
    const deletions = [
      { table: "exercise_completions", column: "student_id" },
      { table: "textbook_submissions", column: "student_id" },
      { table: "training_sessions", column: "student_id" },
      { table: "skill_levels", column: "student_id" },
      { table: "class_memberships", column: "user_id" },
    ];

    for (const { table, column } of deletions) {
      const { error } = await supabase
        .from(table)
        .delete()
        .eq(column, userId);

      if (error) {
        console.warn(`[Admin] Kunne ikke slette fra ${table}:`, error.message);
        // Fortsett selv om noen tabeller feiler (de finnes kanskje ikke)
      } else {
        console.log(`[Admin] Slettet fra ${table}`);
      }
    }

    // Slett fra users-tabellen
    const { error: deleteUserError } = await supabase
      .from("users")
      .delete()
      .eq("id", userId);

    if (deleteUserError) {
      console.error("[Admin] Feil ved sletting av bruker:", deleteUserError);
      return NextResponse.json(
        { message: "Kunne ikke slette bruker" },
        { status: 500 }
      );
    }

    // Prøv å slette fra Supabase Auth (kan feile hvis bruker ikke finnes der)
    try {
      const { error: authDeleteError } = await supabase.auth.admin.deleteUser(userId);
      if (authDeleteError) {
        console.warn("[Admin] Kunne ikke slette fra Supabase Auth:", authDeleteError.message);
      } else {
        console.log("[Admin] Slettet fra Supabase Auth");
      }
    } catch (authError) {
      console.warn("[Admin] Supabase Auth sletting feilet:", authError);
    }

    console.log(`[Admin] Bruker slettet: ${user.id}`);

    return NextResponse.json({
      success: true,
      message: "Brukeren er slettet",
    });
  } catch (error) {
    console.error("[Admin] Feil ved sletting:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// PATCH - Oppdater brukerrolle
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ message: "Kun admin kan endre roller" }, { status: 403 });
    }

    const { userId } = await params;
    const body = await request.json();
    const { role } = body;

    if (!role || !["student", "teacher", "admin"].includes(role)) {
      return NextResponse.json({ message: "Ugyldig rolle" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    const { data: user, error } = await supabase
      .from("users")
      .update({ role })
      .eq("id", userId)
      .select("id, email, name, role")
      .single();

    if (error) {
      console.error("[Admin] Feil ved oppdatering av rolle:", error);
      return NextResponse.json({ message: "Kunne ikke oppdatere rolle" }, { status: 500 });
    }

    console.log(`[Admin] Rolle oppdatert: ${user.id} -> ${role}`);

    return NextResponse.json({
      success: true,
      message: `Rolle oppdatert til ${role}`,
      user,
    });
  } catch (error) {
    console.error("[Admin] Feil:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// GET - Hent brukerinfo (for admin)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ message: "Kun admin" }, { status: 403 });
    }

    const { userId } = await params;
    const supabase = getSupabaseAdmin();

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (error || !user) {
      return NextResponse.json({ message: "Bruker ikke funnet" }, { status: 404 });
    }

    // Hent statistikk
    const [completions, submissions, memberships] = await Promise.all([
      supabase.from("exercise_completions").select("id", { count: "exact" }).eq("student_id", userId),
      supabase.from("textbook_submissions").select("id", { count: "exact" }).eq("student_id", userId),
      supabase.from("class_memberships").select("class_id, role, classes(name)").eq("user_id", userId),
    ]);

    return NextResponse.json({
      user,
      stats: {
        exerciseCompletions: completions.count || 0,
        submissions: submissions.count || 0,
        classes: memberships.data || [],
      },
    });
  } catch (error) {
    console.error("[Admin] Feil:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
