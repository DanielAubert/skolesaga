"use client";

import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { UserMenu } from '@/components/auth/user-menu';
import { ThemeToggle } from '@/components/theme-toggle';

export function HomeHeader() {
  return (
    <header className="relative container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="rounded-lg bg-primary/10 p-2 transition-all group-hover:bg-primary/20">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl">Skolesaga</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/bok" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Lærebøker
          </Link>
          <Link href="/book" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Python
          </Link>
          <Link href="/geogebra" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            GeoGebra
          </Link>
          <ThemeToggle />
          <UserMenu />
        </div>
      </nav>
    </header>
  );
}
