import {getRequestConfig} from 'next-intl/server';
import type {Locale} from '@/types';

export const locales: Locale[] = ['ua', 'en'];
export const defaultLocale: Locale = 'ua';

export default getRequestConfig(async ({locale}) => {
  if (!locale) {
    return {
      locale: defaultLocale,
      messages: (await import(`./locales/${defaultLocale}.json`)).default
    };
  }
  
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});
