'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from '@/contexts';
import { useEffect } from 'react';

const pageTitles: Record<string, { ua: string; en: string }> = {
  '/': { ua: 'Асклепій | Сучасна медицина з турботою про вас', en: 'Asklepiy | Modern Medicine with Care for You' },
  '/about': { ua: 'Про клініку | Асклепій', en: 'About Clinic | Asklepiy' },
  '/contacts': { ua: 'Контакти | Асклепій', en: 'Contacts | Asklepiy' },
  '/doctors': { ua: 'Наші лікарі | Асклепій', en: 'Our Doctors | Asklepiy' },
  '/analyses': { ua: 'Аналізи та обстеження | Асклепій', en: 'Analyses & Examinations | Asklepiy' },
  '/directions': { ua: 'Напрямки медицини | Асклепій', en: 'Medical Directions | Asklepiy' },
  '/news': { ua: 'Новини | Асклепій', en: 'News | Asklepiy' },
  '/dashboard': { ua: 'Панель пацієнта | Асклепій', en: 'Patient Dashboard | Asklepiy' },
  '/declaration': { ua: 'Декларація | Асклепій', en: 'Declaration | Asklepiy' },
  '/screening-40': { ua: 'Check-up 40+ | Асклепій', en: 'Check-up 40+ | Asklepiy' },
  '/asklepiy-rodyna': { ua: 'Асклепій Родина | Сімейна медицина', en: 'Asklepiy Rodyna | Family Medicine' },
};

export function PageTitle() {
  const pathname = usePathname();
  const { locale } = useLocale();

  useEffect(() => {
    // Find matching title (handle dynamic routes)
    let titleData = pageTitles[pathname];
    
    // Handle dynamic routes like /doctors/slug or /way/slug
    if (!titleData) {
      for (const [path, data] of Object.entries(pageTitles)) {
        if (pathname.startsWith(path)) {
          titleData = data;
          break;
        }
      }
    }
    
    // Default title
    if (!titleData) {
      titleData = { ua: 'Асклепій | Медичний центр', en: 'Asklepiy | Medical Center' };
    }

    document.title = locale === 'ua' ? titleData.ua : titleData.en;
  }, [pathname, locale]);

  return null;
}
