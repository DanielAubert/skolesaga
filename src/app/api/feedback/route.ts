import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

const VALID_CATEGORIES = ["feil", "forbedring"];
const VALID_STATUSES = ["ny", "under-arbeid", "lost", "avvist"];

// POST - Send inn tilbakemelding (åpent for alle, rate-limited)
export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`feedback:${ip}`, { limit: 5, windowSeconds: 600 });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { message: "For mange tilbakemeldinger. Prøv igjen om noen minutter." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const category = typeof body.category === "string" ? body.category : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!VALID_CATEGORIES.includes(category)) {
      return NextResponse.json({ message: "Ugyldig kategori" }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json(
        { message: "Beskriv feilen eller forbedringen med minst 10 tegn" },
        { status: 400 }
      );
    }
    if (message.length > 4000) {
      return NextResponse.json({ message: "Meldingen er for lang (maks 4000 tegn)" }, { status: 400 });
    }

    const clip = (value: unknown, max: number) =>
      typeof value === "string" && value.trim() ? value.trim().slice(0, max) : null;

    // Knytt til bruker hvis innlogget (valgfritt - skjemaet er åpent)
    const session = await getServerSession(authOptions);

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("content_feedback").insert({
      category,
      message,
      course_id: clip(body.courseId, 100),
      chapter_id: clip(body.chapterId, 100),
      chapter_title: clip(body.chapterTitle, 300),
      page_url: clip(body.url, 500),
      contact_email: clip(body.email, 200),
      user_id: session?.user?.id || null,
    });

    if (error) {
      console.error("[Feedback] Feil ved lagring:", error);
      return NextResponse.json({ message: "Kunne ikke lagre tilbakemeldingen" }, { status: 500 });
    }

    return NextResponse.json({ message: "Takk for tilbakemeldingen!" }, { status: 201 });
  } catch (error) {
    console.error("[Feedback] Feil:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// GET - Hent tilbakemeldinger (kun admin)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }
    if (session.user.role !== "admin") {
      return NextResponse.json({ message: "Kun admin har tilgang" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "";
    const limit = Math.max(1, Math.min(parseInt(searchParams.get("limit") || "100") || 100, 200));
    const offset = Math.max(0, parseInt(searchParams.get("offset") || "0") || 0);

    if (status && !VALID_STATUSES.includes(status)) {
      return NextResponse.json({ message: "Ugyldig status" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    let query = supabase
      .from("content_feedback")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (status) {
      query = query.eq("status", status);
    }

    const { data: feedback, error, count } = await query;

    if (error) {
      console.error("[Feedback] Feil ved henting:", error);
      return NextResponse.json({ message: "Kunne ikke hente tilbakemeldinger" }, { status: 500 });
    }

    return NextResponse.json({ feedback: feedback || [], total: count || 0, limit, offset });
  } catch (error) {
    console.error("[Feedback] Feil:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// PATCH - Oppdater status (kun admin)
export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }
    if (session.user.role !== "admin") {
      return NextResponse.json({ message: "Kun admin har tilgang" }, { status: 403 });
    }

    const body = await request.json();
    const id = typeof body.id === "string" ? body.id : "";
    const status = typeof body.status === "string" ? body.status : "";

    if (!id || !VALID_STATUSES.includes(status)) {
      return NextResponse.json({ message: "Ugyldig id eller status" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("content_feedback")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (error) {
      console.error("[Feedback] Feil ved oppdatering:", error);
      return NextResponse.json({ message: "Kunne ikke oppdatere status" }, { status: 500 });
    }

    return NextResponse.json({ message: "Status oppdatert" });
  } catch (error) {
    console.error("[Feedback] Feil:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

// DELETE - Slett tilbakemelding (kun admin)
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }
    if (session.user.role !== "admin") {
      return NextResponse.json({ message: "Kun admin har tilgang" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") || "";
    if (!id) {
      return NextResponse.json({ message: "Mangler id" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("content_feedback").delete().eq("id", id);

    if (error) {
      console.error("[Feedback] Feil ved sletting:", error);
      return NextResponse.json({ message: "Kunne ikke slette" }, { status: 500 });
    }

    return NextResponse.json({ message: "Slettet" });
  } catch (error) {
    console.error("[Feedback] Feil:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}
