import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

const MAX_RECENT = 10;
const VALID_KINDS = ["favorite", "recent"];

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

// GET - Hent lagrede elementer for innlogget bruker (?kind=favorite|recent)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Du må være logget inn" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const kind = searchParams.get("kind") || "";

    if (kind && !VALID_KINDS.includes(kind)) {
      return NextResponse.json({ error: "Ugyldig kind" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    let query = supabase
      .from("user_saved_items")
      .select("id, kind, item_type, item_id, title, url, updated_at")
      .eq("user_id", session.user.id)
      .order("updated_at", { ascending: false })
      .limit(50);

    if (kind) {
      query = query.eq("kind", kind);
    }

    const { data, error } = await query;

    if (error) {
      console.error("[SavedItems] Database error:", error);
      return NextResponse.json({ error: "Kunne ikke hente elementer" }, { status: 500 });
    }

    return NextResponse.json({ items: data || [] });
  } catch (error) {
    console.error("[SavedItems] Error:", error);
    return NextResponse.json({ error: "En feil oppstod" }, { status: 500 });
  }
}

// POST - Lagre/oppdater et element (upsert på user_id+kind+item_id)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Du må være logget inn" }, { status: 401 });
    }

    const { kind, itemType, itemId, title, url } = await request.json();

    if (
      !VALID_KINDS.includes(kind) ||
      typeof itemId !== "string" || !itemId || itemId.length > 200 ||
      typeof title !== "string" || !title || title.length > 300 ||
      typeof url !== "string" || !url.startsWith("/") || url.length > 300
    ) {
      return NextResponse.json({ error: "Ugyldig forespørsel" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("user_saved_items")
      .upsert(
        {
          user_id: session.user.id,
          kind,
          item_type: typeof itemType === "string" && itemType ? itemType.slice(0, 50) : "book",
          item_id: itemId,
          title,
          url,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,kind,item_id" }
      );

    if (error) {
      console.error("[SavedItems] Upsert error:", error);
      return NextResponse.json({ error: "Kunne ikke lagre" }, { status: 500 });
    }

    // Behold bare de siste MAX_RECENT nylig-besøkte
    if (kind === "recent") {
      const { data: extra } = await supabase
        .from("user_saved_items")
        .select("id")
        .eq("user_id", session.user.id)
        .eq("kind", "recent")
        .order("updated_at", { ascending: false })
        .range(MAX_RECENT, MAX_RECENT + 20);

      if (extra && extra.length > 0) {
        await supabase
          .from("user_saved_items")
          .delete()
          .in("id", extra.map((row) => row.id));
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[SavedItems] Error:", error);
    return NextResponse.json({ error: "En feil oppstod" }, { status: 500 });
  }
}

// DELETE - Fjern et element (?kind=&itemId=)
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Du må være logget inn" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const kind = searchParams.get("kind") || "";
    const itemId = searchParams.get("itemId") || "";

    if (!VALID_KINDS.includes(kind) || !itemId) {
      return NextResponse.json({ error: "Ugyldig forespørsel" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("user_saved_items")
      .delete()
      .eq("user_id", session.user.id)
      .eq("kind", kind)
      .eq("item_id", itemId);

    if (error) {
      console.error("[SavedItems] Delete error:", error);
      return NextResponse.json({ error: "Kunne ikke slette" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[SavedItems] Error:", error);
    return NextResponse.json({ error: "En feil oppstod" }, { status: 500 });
  }
}
