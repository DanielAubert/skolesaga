'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserMenu } from '@/components/auth/user-menu';
import { Logo } from '@/components/ui/logo';

export function TextbookHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo - alltid Skolesaga som går til hovedsiden */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Logo size="sm" />
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/bok" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Lærebøker
            </Link>
            <Link href="/quiz" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Quiz
            </Link>
          </nav>

          {/* Høyre side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
