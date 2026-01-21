'use client';

import { Download, Check, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePWA } from './pwa-provider';

interface InstallButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  showText?: boolean;
  className?: string;
}

export function InstallButton({
  variant = 'default',
  size = 'default',
  showText = true,
  className,
}: InstallButtonProps) {
  const { isInstallable, isInstalled, installApp } = usePWA();

  // Ikke vis noe hvis appen allerede er installert
  if (isInstalled) {
    return (
      <Button variant="ghost" size={size} className={className} disabled>
        <Check className="w-4 h-4" />
        {showText && <span className="ml-2">Installert</span>}
      </Button>
    );
  }

  // Ikke vis noe hvis installasjon ikke er tilgjengelig
  if (!isInstallable) {
    return null;
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={installApp}
      className={className}
    >
      <Download className="w-4 h-4" />
      {showText && <span className="ml-2">Installer app</span>}
    </Button>
  );
}

// Alternativ banner-versjon for bunnen av siden
export function InstallBanner() {
  const { isInstallable, isInstalled, installApp } = usePWA();

  if (isInstalled || !isInstallable) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Smartphone className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="font-semibold">Installer Skolesaga</p>
            <p className="text-sm opacity-90">Få raskere tilgang og offline-støtte</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={installApp}
          >
            Installer
          </Button>
        </div>
      </div>
    </div>
  );
}
