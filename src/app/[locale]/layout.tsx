import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactQueryProvider, LocaleProvider, AuthProvider, UIProvider } from '@/contexts';
import { LayoutContent } from '@/components/layout';
import type { Metadata } from 'next';
import '../../styles/globals.css';

export function generateStaticParams() {
  return [{ locale: 'ua' }, { locale: 'en' }];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'ua' 
      ? 'Асклепій | Сучасна медицина з турботою про вас' 
      : 'Asklepiy | Modern Medicine with Care for You',
    description: locale === 'ua'
      ? 'Провідний приватний медичний центр України з інноваційними підходами до лікування та діагностики.'
      : "Ukraine's leading private clinic with innovative approaches to treatment and diagnostics.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale: urlLocale } = await params;

  if (!['ua', 'en'].includes(urlLocale)) {
    notFound();
  }

  const locale = await getLocale() as 'ua' | 'en';
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <LocaleProvider initialLocale={locale}>
              <AuthProvider>
                <UIProvider>
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
