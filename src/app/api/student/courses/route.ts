import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// GET - Hent elevens valgte fag
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Ikke innlogget" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();

    // Hent bruker-ID
    const { data: user } = await supabase
      .from("users")
      .select("id, selected_courses")
      .eq("email", session.user.email)
      .single();

    if (!user) {
      return NextResponse.json({ error: "Bruker ikke funnet" }, { status: 404 });
    }

    return NextResponse.json({
      courses: user.selected_courses || [],
    });
  } catch (error) {
    console.error("Error fetching student courses:", error);
    return NextResponse.json(
      { error: "Kunne ikke hente fag" },
      { status: 500 }
    );
  }
}

// POST - Legg til fag
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Ikke innlogget" }, { status: 401 });
    }

    const { courseId } = await request.json();

    if (!courseId) {
      return NextResponse.json({ error: "Mangler courseId" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    // Hent eksisterende fag
    const { data: user } = await supabase
      .from("users")
      .select("id, selected_courses")
      .eq("email", session.user.email)
      .single();

    if (!user) {
      return NextResponse.json({ error: "Bruker ikke funnet" }, { status: 404 });
    }

    const currentCourses: string[] = user.selected_courses || [];

    // Sjekk om faget allerede er lagt til
    if (currentCourses.includes(courseId)) {
      return NextResponse.json({ message: "Faget er allerede lagt til", courses: currentCourses });
    }

    // Legg til faget
    const updatedCourses = [...currentCourses, courseId];

    const { error: updateError } = await supabase
      .from("users")
      .update({ selected_courses: updatedCourses })
      .eq("id", user.id);

    if (updateError) {
      console.error("Error updating courses:", updateError);
      return NextResponse.json(
        { error: "Kunne ikke legge til fag" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Fag lagt til",
      courses: updatedCourses,
    });
  } catch (error) {
    console.error("Error adding course:", error);
    return NextResponse.json(
      { error: "Kunne ikke legge til fag" },
      { status: 500 }
    );
  }
}

// DELETE - Fjern fag
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Ikke innlogget" }, { status: 401 });
    }

    const { courseId } = await request.json();

    if (!courseId) {
      return NextResponse.json({ error: "Mangler courseId" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    // Hent eksisterende fag
    const { data: user } = await supabase
      .from("users")
      .select("id, selected_courses")
      .eq("email", session.user.email)
      .single();

    if (!user) {
      return NextResponse.json({ error: "Bruker ikke funnet" }, { status: 404 });
    }

    const currentCourses: string[] = user.selected_courses || [];

    // Fjern faget
    const updatedCourses = currentCourses.filter((id) => id !== courseId);

    const { error: updateError } = await supabase
      .from("users")
      .update({ selected_courses: updatedCourses })
      .eq("id", user.id);

    if (updateError) {
      console.error("Error updating courses:", updateError);
      return NextResponse.json(
        { error: "Kunne ikke fjerne fag" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Fag fjernet",
      courses: updatedCourses,
    });
  } catch (error) {
    console.error("Error removing course:", error);
    return NextResponse.json(
      { error: "Kunne ikke fjerne fag" },
      { status: 500 }
    );
  }
}
