'use client';

import { ReactNode } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { GeoGebraTableOfContents } from '@/components/geogebra/geogebra-table-of-contents';
import { cn } from '@/lib/utils';

interface GeoGebraLayoutProps {
  children: ReactNode;
  currentChapterId?: string;
  courseId?: string;
  className?: string;
}

export function GeoGebraLayout({ children, currentChapterId, courseId, className }: GeoGebraLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Main content area with sidebar */}
      <div className="flex flex-1">
        {/* Table of Contents Sidebar */}
        <GeoGebraTableOfContents currentChapterId={currentChapterId} courseId={courseId} />

        {/* Main content */}
        <main className={cn(
          "flex-1 bg-gray-100 dark:bg-gradient-to-b dark:from-background dark:via-background dark:to-muted/5",
          "w-full lg:w-auto",
          className
        )}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
