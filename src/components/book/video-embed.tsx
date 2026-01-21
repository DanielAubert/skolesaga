'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export interface VideoEmbedProps {
  url: string;
  title?: string;
  description?: string;
  aspectRatio?: '16:9' | '4:3';
}

function getVideoId(url: string): { platform: 'youtube' | 'vimeo' | null; id: string | null } {
  // YouTube patterns
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/
  ];

  for (const pattern of youtubePatterns) {
    const match = url.match(pattern);
    if (match) {
      return { platform: 'youtube', id: match[1] };
    }
  }

  // Vimeo patterns
  const vimeoPattern = /vimeo\.com\/(\d+)/;
  const vimeoMatch = url.match(vimeoPattern);
  if (vimeoMatch) {
    return { platform: 'vimeo', id: vimeoMatch[1] };
  }

  return { platform: null, id: null };
}

export function VideoEmbed({
  url,
  title,
  description,
  aspectRatio = '16:9'
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoInfo = getVideoId(url);

  if (!videoInfo.platform || !videoInfo.id) {
    return (
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-400">Ugyldig video-URL</CardTitle>
          <CardDescription>
            URL-en støttes ikke. Vennligst bruk en YouTube eller Vimeo URL.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const embedUrl = videoInfo.platform === 'youtube'
    ? `https://www.youtube.com/embed/${videoInfo.id}?rel=0`
    : `https://player.vimeo.com/video/${videoInfo.id}`;

  const paddingBottom = aspectRatio === '16:9' ? '56.25%' : '75%';

  return (
    <Card>
      {(title || description) && (
        <CardHeader>
          {title && (
            <div className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-primary" />
              <CardTitle>{title}</CardTitle>
            </div>
          )}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={title || description ? '' : 'pt-6'}>
        <div className="relative w-full overflow-hidden rounded-lg bg-muted" style={{ paddingBottom }}>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="h-16 w-16 text-muted-foreground animate-pulse" />
            </div>
          )}
          <iframe
            src={embedUrl}
            title={title || 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      </CardContent>
    </Card>
  );
}
