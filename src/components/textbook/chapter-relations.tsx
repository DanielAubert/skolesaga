import Link from 'next/link';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface RelatedChapter {
  id: string;
  number: string;
  title: string;
}

export interface ChapterRelationsProps {
  courseId: string;
  prerequisites: RelatedChapter[];
  dependents: RelatedChapter[];
  className?: string;
}

function ChapterPill({ courseId, chapter }: { courseId: string; chapter: RelatedChapter }) {
  return (
    <Link
      href={`/${courseId}/${chapter.id}`}
      className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-sm hover:border-sky-400 dark:hover:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-colors"
      title={chapter.title}
    >
      <span className="font-mono text-xs text-sky-600 dark:text-sky-400">{chapter.number}</span>
      <span className="text-zinc-700 dark:text-zinc-300 truncate max-w-[200px]">{chapter.title}</span>
    </Link>
  );
}

export function ChapterRelations({ courseId, prerequisites, dependents, className }: ChapterRelationsProps) {
  if (prerequisites.length === 0 && dependents.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        'rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40 p-4 my-6',
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <Layers className="h-4 w-4" />
        Kapitlets plass i kurset
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {prerequisites.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 mb-2 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              <ArrowLeft className="h-3.5 w-3.5" />
              Bygger på
            </div>
            <div className="flex flex-wrap gap-2">
              {prerequisites.map((c) => (
                <ChapterPill key={c.id} courseId={courseId} chapter={c} />
              ))}
            </div>
          </div>
        )}
        {dependents.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 mb-2 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Brukes videre i
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
            <div className="flex flex-wrap gap-2">
              {dependents.map((c) => (
                <ChapterPill key={c.id} courseId={courseId} chapter={c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
