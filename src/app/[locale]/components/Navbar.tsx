'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  locale: string;
  onOpenModal: (modal: 'about' | 'contact') => void;
}

export default function Navbar({ locale, onOpenModal }: NavbarProps) {
  const t = useTranslations('Navbar');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // EFECTO: Detectar el scroll para desvanecer el navbar al bajar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    if (isOpen) {
      htmlEl.style.overflow = 'hidden';
      bodyEl.style.overflow = 'hidden';
    } else {
      htmlEl.style.overflow = 'unset';
      bodyEl.style.overflow = 'unset';
    }

    return () => {
      htmlEl.style.overflow = 'unset';
      bodyEl.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden animate-fadeIn" 
        />
      )}

      {/* NAVBAR CON TRANSICIÓN DE DESVANECIMIENTO (opacity-0 cuando se hace scroll) */}
      <header className={`fixed top-0 left-0 w-full h-20 px-6 md:px-12 flex items-center justify-between z-50 transition-opacity duration-500 bg-gradient-to-b from-[#04050a]/90 via-[#04050a]/40 to-transparent ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}>
        
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <Image 
            src="/assets/images/Logo.webp" 
            alt="Niko Sai Logo" 
            width={80} 
            height={20} 
            className="object-contain h-[20px] md:h-[24px] w-auto transition-transform group-hover:scale-105"
          />
          <span className="text-sm font-extrabold tracking-wider text-white">NIKO SAI</span>
        </Link>

        {/* Menú PC */}
        <nav className="hidden md:flex items-center gap-10 font-['Plus_Jakarta_Sans'] font-bold text-xs tracking-[0.2em]">
          <button onClick={() => onOpenModal('about')} className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
            {t('about')}
          </button>
          <a href="#proyectos" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
            {t('projects')}
          </a>
          <button onClick={() => onOpenModal('contact')} className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
            {t('contact')}
          </button>
        </nav>

        {/* Idiomas y Hamburguesa */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-white/[0.04] backdrop-blur-2xl rounded-full p-1 border border-white/10 shadow-xl text-[11px] font-bold">
            <Link href="/en" className={`px-3.5 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 ${locale === 'en' ? 'bg-white text-black shadow-lg' : 'text-gray-300 hover:text-white'}`}><span>🇺🇸</span> EN</Link>
            <Link href="/pt" className={`px-3.5 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 ${locale === 'pt' ? 'bg-white text-black shadow-lg' : 'text-gray-300 hover:text-white'}`}><span>🇧🇷</span> PT</Link>
            <Link href="/es" className={`px-3.5 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 ${locale === 'es' ? 'bg-white text-black shadow-lg' : 'text-gray-300 hover:text-white'}`}><span>🇪🇸</span> ES</Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 text-white focus:outline-none z-50 shadow-2xl"
          >
            <div className="w-4 h-3.5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 transform origin-left ${isOpen ? 'rotate-45 translate-x-0.5' : ''}`} />
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 transform origin-left ${isOpen ? '-rotate-45 translate-x-0.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Menú Móvil */}
        {isOpen && (
          <div className="absolute top-24 left-6 right-6 z-50 bg-black/40 backdrop-blur-3xl border border-white/15 rounded-[32px] py-10 px-8 flex flex-col items-center gap-7 md:hidden shadow-[0_30px_90px_rgba(0,0,0,0.9)] animate-fadeIn">
            <button onClick={() => { onOpenModal('about'); setIsOpen(false); }} className="text-gray-200 hover:text-white text-sm font-bold tracking-[0.25em] uppercase">
              {t('about')}
            </button>
            <a href="#proyectos" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-white text-sm font-bold tracking-[0.25em] uppercase">
              {t('projects')}
            </a>
            <button onClick={() => { onOpenModal('contact'); setIsOpen(false); }} className="text-gray-200 hover:text-white text-sm font-bold tracking-[0.25em] uppercase">
              {t('contact')}
            </button>

            <div className="w-full h-[1px] bg-white/10 my-1" />

            <div className="flex items-center gap-3 w-full justify-center">
              <Link href="/en" onClick={() => setIsOpen(false)} className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 ${locale === 'en' ? 'bg-white text-black' : 'text-gray-300 bg-white/5'}`}><span>🇺🇸</span> EN</Link>
              <Link href="/pt" onClick={() => setIsOpen(false)} className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 ${locale === 'pt' ? 'bg-white text-black' : 'text-gray-300 bg-white/5'}`}><span>🇧🇷</span> PT</Link>
              <Link href="/es" onClick={() => setIsOpen(false)} className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 ${locale === 'es' ? 'bg-white text-black' : 'text-gray-300 bg-white/5'}`}><span>🇪🇸</span> ES</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}