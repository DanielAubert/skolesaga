import { NextResponse } from "next/server";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Lazy initialization of Supabase admin client
let supabaseAdmin: SupabaseClient | null = null;

function getSupabaseAdmin(): SupabaseClient {
  if (!supabaseAdmin) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase env vars - URL:", !!supabaseUrl, "Service Key:", !!supabaseServiceKey);
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
    let { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-bekrefter e-post i utvikling
      user_metadata: { name, role },
    });

    // Hvis brukeren allerede finnes i Auth men ikke i users-tabellen,
    // slett og opprett på nytt (kan skje ved ufullstendig opprydding)
    if (authError?.message?.includes("already") && !existingUser) {
      console.log("User exists in Auth but not in users table, recreating...");

      // Finn og slett eksisterende auth-bruker
      const { data: authUsers } = await supabase.auth.admin.listUsers();
      const existingAuthUser = authUsers?.users?.find(u => u.email === email);

      if (existingAuthUser) {
        await supabase.auth.admin.deleteUser(existingAuthUser.id);

        // Prøv å opprette på nytt
        const retryResult = await supabase.auth.admin.createUser({
          email,
          password,
          email_confirm: true,
          user_metadata: { name, role },
        });
        authData = retryResult.data;
        authError = retryResult.error;
      }
    }

    if (authError || !authData?.user) {
      console.error("Auth error:", authError);
      // Gi mer spesifikk feilmelding basert på feiltypen
      let errorMessage = "Kunne ikke opprette bruker";
      if (authError?.message?.includes("already registered") || authError?.message?.includes("already exists")) {
        errorMessage = "E-postadressen er allerede registrert i systemet";
      } else if (authError?.message?.includes("invalid")) {
        errorMessage = "Ugyldig e-postadresse eller passord";
      } else if (authError?.message) {
        errorMessage = `Feil ved registrering: ${authError.message}`;
      }
      return NextResponse.json(
        { message: errorMessage },
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
    const errorMessage = error instanceof Error ? error.message : "En feil oppstod under registrering";
    // Sjekk om det er en miljøvariabel-feil
    if (errorMessage.includes("Missing Supabase")) {
      return NextResponse.json(
        { message: "Server er ikke riktig konfigurert. Kontakt administrator." },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}
