'use client';

import { ReactNode } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { TableOfContents } from '@/components/book/table-of-contents';
import { cn } from '@/lib/utils';

interface BookLayoutProps {
  children: ReactNode;
  currentChapterId?: string;
  className?: string;
}

export function BookLayout({ children, currentChapterId, className }: BookLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Main content area with sidebar */}
      <div className="flex flex-1">
        {/* Table of Contents Sidebar */}
        <TableOfContents currentChapterId={currentChapterId} />

        {/* Main content */}
        <main className={cn(
          "flex-1 bg-gray-100 dark:bg-gradient-to-b dark:from-background dark:via-background dark:to-muted/5",
          "w-full lg:w-auto", // Full width on mobile, auto on desktop
          className
        )}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
