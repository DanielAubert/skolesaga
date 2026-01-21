import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main id="main-content" className="flex-1">
        {/* Quick Access by Year Level Skeleton */}
        <section className="pt-1 pb-2">
          <div className="container max-w-5xl mx-auto px-4">
            <Skeleton className="h-4 w-24 mb-1.5" />
            <div className="flex gap-1.5 max-w-md">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="flex-1">
                  <div className="px-2 py-[2px]">
                    <Skeleton className="h-4 w-full" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Filter Skeleton */}
        <section className="pt-1 pb-2">
          <div className="container max-w-5xl mx-auto px-4">
            <Skeleton className="h-4 w-20 mb-1.5" />
            <div className="flex gap-1.5 flex-wrap max-w-4xl">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <div className="px-2 py-[2px]">
                    <Skeleton className="h-4 w-20" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UDIR Notice Skeleton */}
        <section className="pb-3">
          <div className="container max-w-5xl mx-auto px-4">
            <Skeleton className="h-8 max-w-3xl" />
          </div>
        </section>

        {/* Subject Grid Skeleton */}
        <section id="alle-fag" className="pt-2 pb-8 bg-muted/30">
          <div className="container max-w-5xl mx-auto">
            <Skeleton className="h-8 w-32 mb-6" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="p-6">
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-12 w-12 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
