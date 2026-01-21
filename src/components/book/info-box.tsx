'use client';

import { ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, AlertTriangle, Lightbulb, BookOpen, CheckCircle2 } from 'lucide-react';

type InfoBoxType = 'info' | 'warning' | 'tip' | 'note' | 'success';

export interface InfoBoxProps {
  type?: InfoBoxType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const infoBoxConfig = {
  info: {
    icon: Info,
    className: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950',
    iconClassName: 'text-blue-600 dark:text-blue-400',
    titleClassName: 'text-blue-900 dark:text-blue-200'
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-amber-300 bg-amber-50 dark:border-amber-600 dark:bg-amber-900/30',
    iconClassName: 'text-amber-600 dark:text-amber-400',
    titleClassName: 'text-amber-900 dark:text-amber-300'
  },
  tip: {
    icon: Lightbulb,
    className: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950',
    iconClassName: 'text-yellow-600 dark:text-yellow-400',
    titleClassName: 'text-yellow-900 dark:text-yellow-200'
  },
  note: {
    icon: BookOpen,
    className: 'border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950',
    iconClassName: 'text-purple-600 dark:text-purple-400',
    titleClassName: 'text-purple-900 dark:text-purple-200'
  },
  success: {
    icon: CheckCircle2,
    className: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950',
    iconClassName: 'text-green-600 dark:text-green-400',
    titleClassName: 'text-green-900 dark:text-green-200'
  }
};

const defaultTitles = {
  info: 'Informasjon',
  warning: 'Viktig',
  tip: 'Tips',
  note: 'Merk',
  success: 'Suksess'
};

export function InfoBox({
  type = 'info',
  title,
  children,
  className = ''
}: InfoBoxProps) {
  const config = infoBoxConfig[type];
  const Icon = config.icon;
  const displayTitle = title || defaultTitles[type];

  return (
    <Alert className={`${config.className} ${className}`}>
      <Icon className={`h-4 w-4 shrink-0 ${config.iconClassName}`} />
      <AlertTitle className={`text-sm sm:text-base ${config.titleClassName}`}>{displayTitle}</AlertTitle>
      <AlertDescription className="mt-2 text-sm sm:text-base">
        {children}
      </AlertDescription>
    </Alert>
  );
}
