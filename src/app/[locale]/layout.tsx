import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/routing';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Niko Sai | Cinematic Studio',
  description: 'Portafolio profesional de edición y postproducción cinematográfica.',
  icons: {
    icon: '/assets/images/Logo.webp',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-[#04050a] text-white antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}