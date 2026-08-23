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
  // Metadatos para WhatsApp y Redes Sociales (Open Graph)
  openGraph: {
    title: 'Niko Sai | Cinematic Studio',
    description: 'Portafolio profesional de edición y postproducción cinematográfica.',
    url: 'https://www.nikosai.com.co',
    siteName: 'Niko Sai Studio',
    images: [
      {
        url: 'https://www.nikosai.com.co/og-image.webp', // Ruta de tu imagen en la carpeta public
        width: 1200,
        height: 630,
        alt: 'Niko Sai Cinematic Studio',
      },
    ],
    locale: 'es_CO',
    type: 'website',
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