"use client";

import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, ExternalLink, FileSpreadsheet, Calculator } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/ui/logo";

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b glass shadow-sm" role="banner">
      <nav className="container flex h-16 items-center" aria-label="Hovednavigasjon">
        <Link href="/" className="mr-6 hover:opacity-80 transition-opacity">
          <Logo size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/bok" className={navigationMenuTriggerStyle()}>
                  Lærebøker
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/book" className={navigationMenuTriggerStyle()}>
                  Python
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/geogebra" className={navigationMenuTriggerStyle()}>
                  GeoGebra
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/hoderegning" className={navigationMenuTriggerStyle()}>
                  Hoderegning
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme Toggle - Desktop and Mobile */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-nav">
          <nav className="flex flex-col space-y-3 p-4" aria-label="Mobil navigasjon">
            <Link
              href="/bok"
              className="flex items-center text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Lærebøker
            </Link>
            <Link
              href="/book"
              className="flex items-center text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Python
            </Link>
            <Link
              href="/geogebra"
              className="flex items-center text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calculator className="mr-2 h-4 w-4" />
              GeoGebra
            </Link>
            <Link
              href="/hoderegning"
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hoderegning
            </Link>
            <a
              href="/formelhefte-matematikk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Formelhefte Matematikk
              <ExternalLink className="ml-auto h-3 w-3" />
            </a>
            <a
              href="/excel-formelhefte.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Excel Formelhefte
              <ExternalLink className="ml-auto h-3 w-3" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}