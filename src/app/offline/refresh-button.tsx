'use client';

import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RefreshButton() {
  return (
    <Button onClick={() => window.location.reload()} className="w-full">
      <RefreshCw className="w-4 h-4 mr-2" />
      Prøv igjen
    </Button>
  );
}
