'use client';

import { useEffect, useState } from 'react';

/**
 * Spiller en lærebokvideo fra Bunny Stream (samme motor som løsningsfilmene på
 * eksamenssett.no). Embed-URL-en signeres server-side i /api/bunny-embed og
 * lever i 6 timer, så komponenten henter den ved visning, ikke ved bygg.
 */
export function BunnyVideo({ videoId, title, utkast }: { videoId: string; title?: string; utkast?: boolean }) {
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);
  const [feil, setFeil] = useState<string | null>(null);

  useEffect(() => {
    let avbrutt = false;
    setEmbedUrl(null);
    setFeil(null);
    fetch(`/api/bunny-embed?guid=${encodeURIComponent(videoId)}`)
      .then(async (r) => {
        if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || `Feil ${r.status}`);
        return r.json();
      })
      .then((d: { embedUrl: string }) => { if (!avbrutt) setEmbedUrl(d.embedUrl); })
      .catch((e: Error) => { if (!avbrutt) setFeil(e.message); });
    return () => { avbrutt = true; };
  }, [videoId]);

  if (feil) {
    return <p className="text-sm text-muted-foreground">Videoen kunne ikke lastes: {feil}</p>;
  }
  return (
    <div className="mt-3 max-w-2xl">
      {utkast && (
        <span className="inline-block mb-1 rounded bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-200">
          Utkast — ikke godkjent ennå
        </span>
      )}
    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={title || 'Video'}
          loading="lazy"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">Laster video …</div>
      )}
    </div>
    </div>
  );
}
