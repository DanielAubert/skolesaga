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

// GET: Get current searchable_as_student status
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Du må være logget inn" },
        { status: 401 }
      );
    }

    // Only teachers can use this feature
    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Kun lærere har tilgang til denne funksjonen" },
        { status: 403 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: user, error } = await supabase
      .from("users")
      .select("searchable_as_student")
      .eq("id", session.user.id)
      .single();

    if (error) {
      // If column doesn't exist, return false (feature not available yet)
      if (error.message?.includes("searchable_as_student")) {
        return NextResponse.json({
          searchable: false,
          columnMissing: true,
        });
      }
      console.error("[Searchable] Error fetching user:", error);
      return NextResponse.json(
        { error: "Kunne ikke hente brukerdata" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      searchable: user?.searchable_as_student ?? false,
    });
  } catch (error) {
    console.error("[Searchable] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}

// POST: Toggle searchable_as_student status
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Du må være logget inn" },
        { status: 401 }
      );
    }

    // Only teachers can use this feature
    if (session.user.role !== "teacher" && session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Kun lærere har tilgang til denne funksjonen" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { searchable } = body;

    if (typeof searchable !== "boolean") {
      return NextResponse.json(
        { error: "Ugyldig verdi for searchable" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: user, error } = await supabase
      .from("users")
      .update({ searchable_as_student: searchable })
      .eq("id", session.user.id)
      .select("searchable_as_student")
      .single();

    if (error) {
      // If column doesn't exist, inform user that migration is needed
      if (error.message?.includes("searchable_as_student")) {
        return NextResponse.json(
          { error: "Denne funksjonen krever en databaseoppdatering. Kontakt administrator." },
          { status: 503 }
        );
      }
      console.error("[Searchable] Error updating user:", error);
      return NextResponse.json(
        { error: "Kunne ikke oppdatere innstilling" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      searchable: user?.searchable_as_student ?? false,
      message: searchable
        ? "Du er nå søkbar som elev"
        : "Du er ikke lenger søkbar som elev",
    });
  } catch (error) {
    console.error("[Searchable] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}
