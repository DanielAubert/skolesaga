'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Library, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function UserTextbookCard() {
  const { data: session, status } = useSession();

  // Ikke vis kortet hvis ikke innlogget
  if (status === 'loading' || !session) {
    return null;
  }

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <Link href="/bok" className="block group">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] duration-300">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              {/* Left side - Content */}
              <div className="flex-1 text-white text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
                  <Star className="w-4 h-4" />
                  Velkommen tilbake, {session.user?.name?.split(' ')[0] || 'elev'}!
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Dine lærebøker
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-6 max-w-xl">
                  Fortsett der du slapp med interaktive lærebøker, oppgaver og fremgangsregistrering.
                </p>

                {/* Features list */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <div className="flex items-center gap-2 text-white/90">
                    <Library className="w-5 h-5" />
                    <span>60+ lærebøker</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-5 h-5" />
                    <span>Spor fremgangen din</span>
                  </div>
                </div>

                <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90 text-lg px-8 group-hover:gap-4 transition-all">
                  Gå til lærebøker
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Right side - Icon */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-40 h-40 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
