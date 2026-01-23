"use client";

import Link from 'next/link';
import { UserMenu } from '@/components/auth/user-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/ui/logo';

export function HomeHeader() {
  return (
    <header className="relative container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo size="md" />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/bok" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Lærebøker
          </Link>
          <Link href="/quiz" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Quiz
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
