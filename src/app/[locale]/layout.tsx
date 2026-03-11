import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactQueryProvider, LocaleProvider, AuthProvider, UIProvider } from '@/contexts';
import { LayoutContent } from '@/components/layout';
import { PageTitle } from './PageTitle';
import '../../styles/globals.css';

export function generateStaticParams() {
  return [{ locale: 'ua' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: urlLocale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!['ua', 'en'].includes(urlLocale)) {
    notFound();
  }

  // Use getLocale which respects our i18n config (cookie > URL > default)
  const locale = await getLocale() as 'ua' | 'en';
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <meta name="description" content="Провідний приватний медичний центр України з інноваційними підходами до лікування та діагностики." />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <LocaleProvider initialLocale={locale}>
              <AuthProvider>
                <UIProvider>
                  <PageTitle />
                  <LayoutContent>{children}</LayoutContent>
                </UIProvider>
              </AuthProvider>
            </LocaleProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
