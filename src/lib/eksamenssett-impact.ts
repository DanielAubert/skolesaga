import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * Databasen deles med eksamenssett.no (se CLAUDE.md). Sletting av en rad i
 * `users` sletter kontoen for BEGGE tjenester — inkludert kjøp og abonnement
 * på eksamenssett.no. Denne sjekken avdekker slik aktivitet før sletting.
 */

export interface EksamenssettImpactDetail {
  table: string;
  label: string;
  count: number;
}

export interface EksamenssettImpact {
  hasActivity: boolean;
  details: EksamenssettImpactDetail[];
}

const PURCHASE_TABLES: { table: string; label: string }[] = [
  { table: "unlocked_courses", label: "opplåste kurs" },
  { table: "user_credits", label: "kreditter" },
  { table: "teacher_subscriptions", label: "lærerabonnement" },
  { table: "vipps_pending_payments", label: "Vipps-betalinger" },
  { table: "refund_requests", label: "refusjonssaker" },
];

export async function getEksamenssettImpact(
  supabase: SupabaseClient,
  userId: string
): Promise<EksamenssettImpact> {
  const results = await Promise.all(
    PURCHASE_TABLES.map(async ({ table, label }) => {
      const { count, error } = await supabase
        .from(table)
        .select("id", { count: "exact", head: true })
        .eq("user_id", userId);

      if (error) {
        // Tabellen kan mangle i enkelte miljøer – da er det ingen aktivitet der
        return null;
      }
      return count && count > 0 ? { table, label, count } : null;
    })
  );

  const details = results.filter(
    (r): r is EksamenssettImpactDetail => r !== null
  );

  return { hasActivity: details.length > 0, details };
}
