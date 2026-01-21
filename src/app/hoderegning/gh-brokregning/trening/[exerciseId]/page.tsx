import { notFound } from 'next/navigation';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { HoderegningExerciseTrainer } from '@/components/hoderegning/exercise-trainer';
import { getHoderegningExercise, brokregningExercises } from '@/lib/data/hoderegning-exercises';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ exerciseId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { exerciseId } = await params;
  const exercise = getHoderegningExercise('brokregning', exerciseId);

  return {
    title: exercise ? `${exercise.name} - Brøkregning - Hoderegning` : 'Trening - Brøkregning',
    description: exercise?.description || 'Tren på brøkregning',
  };
}

export async function generateStaticParams() {
  return brokregningExercises.map((ex) => ({
    exerciseId: ex.id,
  }));
}

export default async function BrokregningTreningPage({ params }: PageProps) {
  const { exerciseId } = await params;
  const exercise = getHoderegningExercise('brokregning', exerciseId);

  if (!exercise) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <div className="container py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/hoderegning">Hoderegning</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/hoderegning/gh-brokregning">Brøkregning</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Oppgave {exercise.number}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">
              Oppgave {exercise.number}: {exercise.name}
            </h1>
            <p className="text-muted-foreground">{exercise.task}</p>
          </div>

          <HoderegningExerciseTrainer
            exercise={exercise}
            moduleId="brokregning"
            moduleName="Brøkregning"
            backLink="/hoderegning/gh-brokregning"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
