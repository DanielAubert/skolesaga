import type { ReactNode } from 'react';
import { kapittelMetadata } from '../kapittel-metadata';

// Serverkomponent med metadata for en klientside. Se ../kapittel-metadata.ts.
export const metadata = kapittelMetadata('8-2');

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
