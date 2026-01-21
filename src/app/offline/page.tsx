import { Metadata } from 'next';
import Link from 'next/link';
import { WifiOff, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RefreshButton } from './refresh-button';

export const metadata: Metadata = {
  title: 'Ingen internettforbindelse | Skolesaga',
  description: 'Du er offline. Koble til internett for å fortsette.',
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <WifiOff className="w-12 h-12 text-muted-foreground" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">Ingen internettforbindelse</h1>
        <p className="text-muted-foreground mb-6">
          Det ser ut som du er offline. Sjekk internettforbindelsen din og prøv igjen.
        </p>

        <div className="space-y-3">
          <RefreshButton />

          <Button variant="outline" asChild className="w-full">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Gå til forsiden
            </Link>
          </Button>
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg text-left">
          <h2 className="font-semibold mb-2">Tips for offline-bruk:</h2>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Sider du har besøkt tidligere kan være tilgjengelige offline</li>
            <li>• Installer appen for bedre offline-støtte</li>
            <li>• Lærebokkapitler caches automatisk når du leser dem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
