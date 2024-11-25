'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import SkeletonToggleDarkmode from '@/components/fragments/skeleton-toggle-darkmode';

export default function ToggleDarkmode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      setTheme('light');
    }
  }, [setTheme]);

  return (
    <>
      {mounted ? (
        <div className='flex items-center space-x-2'>
          <Switch
            id='dark-mode'
            checked={theme === 'dark'}
            onCheckedChange={() =>
              setTheme(theme === 'light' ? 'dark' : 'light')
            }
          />
          <Label htmlFor='dark-mode'>Dark Mode</Label>
        </div>
      ) : (
        <SkeletonToggleDarkmode />
      )}
    </>
  );
}
