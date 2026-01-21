'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export interface VideoLinkProps {
  url: string;
  youtubeId?: string;
  title?: string;
  description?: string;
}

export function VideoLink({
  url,
  youtubeId,
  title = "Se video",
  description
}: VideoLinkProps) {
  // If we have a YouTube ID, embed the video
  if (youtubeId) {
    return (
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
        <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-3">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg shrink-0">
              <PlayCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
              {description && (
                <CardDescription className="mt-1 text-sm sm:text-base">{description}</CardDescription>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-2 sm:pt-3">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </CardContent>
      </Card>
    );
  }

  // Fallback to link button if no YouTube ID
  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
      <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-green-500/10 rounded-lg shrink-0">
            <PlayCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
            {description && (
              <CardDescription className="mt-1 text-sm sm:text-base">{description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-2 sm:pt-3">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Button className="w-full min-h-[48px] sm:min-h-0" size="lg">
            <PlayCircle className="h-5 w-5 mr-2" />
            Se video
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
