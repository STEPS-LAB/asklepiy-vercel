import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from './src/i18n';

export {locales, defaultLocale};

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as typeof locales[number])) {
    // Fallback to default locale instead of 404
    return {
      locale: defaultLocale,
      messages: (await import(`./src/i18n/locales/${defaultLocale}.json`)).default
    };
  }

  return {
    locale,
    messages: (await import(`./src/i18n/locales/${locale}.json`)).default
  };
});
