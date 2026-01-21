import { notFound } from 'next/navigation';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { HoderegningExerciseTrainer } from '@/components/hoderegning/exercise-trainer';
import { getHoderegningExercise, faktoriseringExercises } from '@/lib/data/hoderegning-exercises';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ exerciseId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { exerciseId } = await params;
  const exercise = getHoderegningExercise('faktorisering', exerciseId);

  return {
    title: exercise ? `${exercise.name} - Faktorisering - Hoderegning` : 'Trening - Faktorisering',
    description: exercise?.description || 'Tren på faktorisering',
  };
}

export async function generateStaticParams() {
  return faktoriseringExercises.map((ex) => ({
    exerciseId: ex.id,
  }));
}

export default async function FaktoriseringTreningPage({ params }: PageProps) {
  const { exerciseId } = await params;
  const exercise = getHoderegningExercise('faktorisering', exerciseId);

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
                <BreadcrumbLink href="/hoderegning/gh-faktorisering">Faktorisering</BreadcrumbLink>
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
            moduleId="faktorisering"
            moduleName="Faktorisering"
            backLink="/hoderegning/gh-faktorisering"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
