import { NextResponse } from "next/server";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Lazy initialization of Supabase admin client
let supabaseAdmin: SupabaseClient | null = null;

function getSupabaseAdmin(): SupabaseClient {
  if (!supabaseAdmin) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase environment variables");
    }

    supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }
  return supabaseAdmin;
}

export async function POST(request: Request) {
  try {
    const { email, password, name, role = "student" } = await request.json();

    // Valider input
    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "E-post, passord og navn er påkrevd" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Passordet må være minst 6 tegn" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Sjekk om e-post allerede er i bruk
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { message: "E-postadressen er allerede registrert" },
        { status: 400 }
      );
    }

    // Opprett bruker i Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-bekrefter e-post i utvikling
      user_metadata: { name, role },
    });

    if (authError || !authData.user) {
      console.error("Auth error:", authError);
      return NextResponse.json(
        { message: "Kunne ikke opprette bruker" },
        { status: 500 }
      );
    }

    // Opprett bruker i vår users-tabell
    const { error: dbError } = await supabase.from("users").insert({
      id: authData.user.id,
      email,
      name,
      role: role === "teacher" ? "teacher" : "student",
      auth_provider: "email",
      subscription_tier: "free",
    });

    if (dbError) {
      console.error("Database error:", dbError);
      // Rydd opp ved å slette auth-brukeren
      await supabase.auth.admin.deleteUser(authData.user.id);
      return NextResponse.json(
        { message: "Kunne ikke fullføre registrering" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Bruker opprettet", userId: authData.user.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "En feil oppstod under registrering" },
      { status: 500 }
    );
  }
}
