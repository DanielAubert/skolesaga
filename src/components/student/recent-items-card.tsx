"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@/lib/auth/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { History, ChevronRight, BookOpen } from "lucide-react";

interface SavedItem {
  id: string;
  kind: string;
  item_type: string;
  item_id: string;
  title: string;
  url: string;
  updated_at: string;
}

function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return "nå nettopp";
  if (minutes < 60) return `${minutes} min siden`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} t siden`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "i går";
  if (days < 7) return `${days} dager siden`;
  return new Date(iso).toLocaleDateString("nb-NO");
}

/**
 * «Fortsett der du slapp» – de sist besøkte bøkene/kapitlene,
 * lagret i databasen slik at listen følger brukeren på tvers av enheter.
 */
export function RecentItemsCard() {
  const { isAuthenticated } = useUser();
  const [items, setItems] = useState<SavedItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;

    let cancelled = false;
    fetch("/api/user/saved-items?kind=recent")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.items) {
          setItems(data.items.slice(0, 5));
        }
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated]);

  if (!loaded || items.length === 0) return null;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <History className="h-5 w-5" />
          Fortsett der du slapp
        </CardTitle>
        <CardDescription>Det du har jobbet med sist</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="flex items-center justify-between gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <BookOpen className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="font-medium text-sm truncate">{item.title}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-muted-foreground">
                  {relativeTime(item.updated_at)}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
