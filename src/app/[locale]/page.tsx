'use client';

import { useState, use } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import SectionTwo from './components/SectionTwo';
import InfoModals from './components/InfoModals';
import SplashScreen from './components/SplashScreen';

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale;

  const tHero = useTranslations('Hero');
  const [activeModal, setActiveModal] = useState<'about' | 'contact' | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToProjects = () => {
    const section = document.getElementById('proyectos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}
      
      <main className="relative w-full bg-[#04050a] text-white">
        {/* Navbar de PC */}
        <Navbar locale={locale} onOpenModal={(modal) => setActiveModal(modal)} />

        {/* SECCIÓN 1: HERO ESTÁTICO (Con Logo fijo en móvil y videomobile.mp4) */}
        <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between items-center text-center px-4 pt-20 pb-12 md:pt-36 md:pb-20 bg-black">
        

          {/* VIDEO MÓVIL 1:1 (Carga estrictamente videomobile.mp4) */}
          <video 
            className="fixed top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-contain z-0 md:hidden bg-black"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/assets/videos/videomobile.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>

          {/* VIDEO PC HORIZONTAL */}
          <video 
            className="fixed top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 object-cover hidden md:block z-0"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/assets/videos/Banner definitivo.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-[#04050a]/40 via-transparent to-[#04050a]/90 pointer-events-none z-10" />

          {/* TÍTULO */}
          <div className="relative z-15 flex flex-col items-center justify-center max-w-4xl mx-auto mt-12 md:mt-0">
            <h1 className="font-anger text-3xl sm:text-5xl md:text-7xl tracking-wide text-white drop-shadow-2xl mb-1">
              {tHero('title')}
            </h1>
            <p className="text-[9px] sm:text-xs md:text-sm font-light tracking-[0.2em] md:tracking-[0.35em] text-gray-300 uppercase">
              {tHero('subtitle')}
            </p>
          </div>

          {/* BOTÓN "VER PORTAFOLIO" */}
          <div className="relative z-15 pb-16 md:pb-2">
            <button 
              onClick={scrollToProjects}
              className="px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-extrabold text-[11px] tracking-[0.2em] uppercase shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Ver Portafolio
            </button>
          </div>
        </section>

        {/* SECCIÓN 2: VISOR DE PROYECTOS */}
        <SectionTwo />

        {/* MODALES FLOTANTES */}
        <InfoModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
      </main>
    </>
  );
}