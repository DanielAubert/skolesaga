'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserMenu } from '@/components/auth/user-menu';

interface TextbookHeaderProps {
  showBackLink?: boolean;
  backHref?: string;
  backLabel?: string;
}

export function TextbookHeader({
  showBackLink = false,
  backHref = '/bok',
  backLabel = 'Bøker'
}: TextbookHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo / tilbake */}
          <Link
            href={showBackLink ? backHref : '/bok'}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            <span className="font-semibold">
              {showBackLink ? backLabel : 'Lærebøker'}
            </span>
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
