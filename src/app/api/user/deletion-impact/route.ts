import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";
import { getEksamenssettImpact } from "@/lib/eksamenssett-impact";

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

// GET - Hva mer slettes hvis innlogget bruker sletter kontoen sin?
// Kontoen er felles med eksamenssett.no, så kjøp/abonnement der ryker også.
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Du må være logget inn" },
        { status: 401 }
      );
    }

    const supabase = getSupabaseAdmin();
    const impact = await getEksamenssettImpact(supabase, session.user.id);

    return NextResponse.json({
      eksamenssett: {
        hasActivity: impact.hasActivity,
        details: impact.details.map(({ label, count }) => ({ label, count })),
      },
    });
  } catch (error) {
    console.error("[DeletionImpact] Error:", error);
    return NextResponse.json({ error: "En feil oppstod" }, { status: 500 });
  }
}
