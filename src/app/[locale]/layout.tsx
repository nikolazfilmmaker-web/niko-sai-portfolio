import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/routing';
import type { Metadata, Viewport } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Niko Sai | Cinematic Studio',
  description: 'Portafolio profesional de edición y postproducción cinematográfica.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Niko Sai',
  },
  icons: {
    icon: '/assets/images/IcoNiko.png',       // <--- Apuntando a tu nuevo icono de alta definición
    shortcut: '/assets/images/IcoNiko.png',
    apple: '/assets/images/IcoNiko.png',
  },
  // Metadatos para WhatsApp y Redes Sociales (Open Graph)
  openGraph: {
    title: 'Niko Sai | Cinematic Studio',
    description: 'Portafolio profesional de edición y postproducción cinematográfica.',
    url: 'https://www.nikosai.com.co',
    siteName: 'Niko Sai Studio',
    images: [
      {
        url: 'https://www.nikosai.com.co/og-image.webp', 
        width: 1200,
        height: 630,
        alt: 'Niko Sai Cinematic Studio',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#04050a',
  width: 'device-width',
  initialScale: 1,
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