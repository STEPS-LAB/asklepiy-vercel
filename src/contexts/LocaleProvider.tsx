'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Locale } from '@/types';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>('ua');

  useEffect(() => {
    // Get locale from URL or localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['ua', 'en'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    
    // Update URL with new locale
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(ua|en)/, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  }, [router]);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'ua' ? 'en' : 'ua');
  }, [locale, setLocale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
