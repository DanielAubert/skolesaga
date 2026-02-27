'use client';

import { useState } from 'react';
import type { GigaquizConfig } from '@/lib/data/gigaquiz-data-historie';
import { DiagnostiskClient } from './diagnostisk-client';
import { GigaquizClient } from './gigaquiz-client';

export function QuizWrapper({ config }: { config: GigaquizConfig }) {
  const [mode, setMode] = useState<'diagnostisk' | 'klassisk'>('diagnostisk');

  if (mode === 'klassisk') {
    return <GigaquizClient config={config} />;
  }

  return (
    <DiagnostiskClient
      config={config}
      onSwitchToClassic={() => setMode('klassisk')}
    />
  );
}
