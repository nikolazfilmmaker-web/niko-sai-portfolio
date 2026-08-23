'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NavbarMobile({ locale }: { locale: string }) {
  const t = useTranslations('Navbar');

  return (
    <div className="fixed bottom-5 left-4 right-4 z-40 md:hidden">
      <div className="bg-[#07080f]/80 backdrop-blur-3xl border border-white/15 rounded-full px-5 py-3.5 flex items-center justify-between shadow-[0_15px_40px_rgba(0,0,0,0.9)]">
        
        {/* Inicio */}
        <Link href={`/${locale}`} className="text-gray-400 hover:text-white flex flex-col items-center gap-1 text-[9px] font-extrabold tracking-widest transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          <span>HOME</span>
        </Link>

        {/* Proyectos */}
        <a href="#proyectos" className="text-gray-400 hover:text-white flex flex-col items-center gap-1 text-[9px] font-extrabold tracking-widest transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          <span>{t('projects')}</span>
        </a>

        {/* Selector de Idiomas Profesional (EN / PT / ES) */}
        <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1 rounded-full border border-white/10 text-[10px] font-extrabold">
          <Link href="/en" className={`px-2 py-0.5 rounded-full transition-all ${locale === 'en' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'}`}>EN</Link>
          <Link href="/pt" className={`px-2 py-0.5 rounded-full transition-all ${locale === 'pt' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}>PT</Link>
          <Link href="/es" className={`px-2 py-0.5 rounded-full transition-all ${locale === 'es' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}>ES</Link>
        </div>

        {/* Contacto / WhatsApp */}
        <a href="https://wa.me/573196922301" target="_blank" className="text-gray-400 hover:text-white flex flex-col items-center gap-1 text-[9px] font-extrabold tracking-widest transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          <span>{t('contact')}</span>
        </a>

      </div>
    </div>
  );
}