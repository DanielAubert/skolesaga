'use client';

import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

interface PrintModeButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function PrintModeButton({
  className,
  variant = 'outline',
  size = 'default'
}: PrintModeButtonProps) {
  const handlePrint = () => {
    // Trigger browser print dialog
    window.print();
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handlePrint}
      className={`min-h-[44px] sm:min-h-0 ${className}`}
      title="Print eller eksporter til PDF"
    >
      <Printer className="h-4 w-4 mr-2" />
      <span className="hidden sm:inline">Print kapittel</span>
      <span className="sm:hidden">Print</span>
    </Button>
  );
}
