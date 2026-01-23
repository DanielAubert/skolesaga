'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: { width: 140, height: 40 },
  md: { width: 180, height: 52 },
  lg: { width: 240, height: 70 },
  xl: { width: 320, height: 92 },
};

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { width, height } = sizeMap[size];

  // Before mounting, show a placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className={className} style={{ width, height }} />
    );
  }

  const isDark = resolvedTheme === 'dark';
  const logoSrc = isDark ? '/logo-dark.png' : '/logo-light.png';

  return (
    <Image
      src={logoSrc}
      alt="Skolesaga"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
    />
  );
}

// Icon-only version (uses the tree icon)
export function LogoIcon({ className = '', size = 'md' }: LogoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { height: iconSize } = sizeMap[size];

  if (!mounted) {
    return (
      <div
        className={`${className}`}
        style={{ width: iconSize, height: iconSize }}
      />
    );
  }

  return (
    <Image
      src="/logo-icon.png"
      alt="Skolesaga"
      width={iconSize}
      height={iconSize}
      className={`object-contain ${className}`}
      priority
    />
  );
}
