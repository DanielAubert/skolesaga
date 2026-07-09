import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

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

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Du må være logget inn" },
        { status: 401 }
      );
    }

    // Rate limiting: 5 forsøk per minutt per bruker
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`password:${session.user.id}:${ip}`, { limit: 5, windowSeconds: 60 });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "For mange forsøk. Prøv igjen om litt." },
        { status: 429 }
      );
    }

    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "Både nåværende og nytt passord er påkrevd" },
        { status: 400 }
      );
    }

    if (typeof newPassword !== "string" || newPassword.length < 8) {
      return NextResponse.json(
        { error: "Nytt passord må være minst 8 tegn" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: userRow, error: userError } = await supabase
      .from("users")
      .select("email, auth_provider")
      .eq("id", session.user.id)
      .single();

    if (userError || !userRow) {
      return NextResponse.json(
        { error: "Fant ikke brukeren" },
        { status: 404 }
      );
    }

    if (userRow.auth_provider && userRow.auth_provider !== "email") {
      return NextResponse.json(
        { error: "Kontoen din logger inn via " + (userRow.auth_provider === "google" ? "Google" : "Feide") + " og har ikke eget passord her" },
        { status: 400 }
      );
    }

    // Verifiser nåværende passord
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: userRow.email,
      password: currentPassword,
    });

    if (signInError) {
      return NextResponse.json(
        { error: "Nåværende passord er feil" },
        { status: 400 }
      );
    }

    const { error: updateError } = await supabase.auth.admin.updateUserById(
      session.user.id,
      { password: newPassword }
    );

    if (updateError) {
      console.error("[Password] Update error:", updateError);
      return NextResponse.json(
        { error: "Kunne ikke oppdatere passordet" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Passordet er endret" });
  } catch (error) {
    console.error("[Password] Error:", error);
    return NextResponse.json(
      { error: "En feil oppstod" },
      { status: 500 }
    );
  }
}
