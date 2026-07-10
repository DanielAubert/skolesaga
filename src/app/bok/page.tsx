import { redirect } from 'next/navigation';

/**
 * Trinn-velgeren ER nå landingssiden (flyttet til / etter produkteiers ønske,
 * 10. juli 2026). /bok beholdes som redirect så alle eksisterende lenker,
 * breadcrumbs og bokmerker fortsatt virker.
 */
export default function TextbookOverviewPage() {
  redirect('/');
}
