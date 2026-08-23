'use client';

import { useState, use } from 'react';
import { useTranslations } from 'next-intl';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile'; // <--- Importamos el dock móvil
import SectionTwo from './components/SectionTwo';
import InfoModals from './components/InfoModals';
import SplashScreen from './components/SplashScreen';

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale;

  const tHero = useTranslations('Hero');
  const [activeModal, setActiveModal] = useState<'about' | 'contact' | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}
      
      <main className="relative w-full bg-[#04050a] text-white">
        {/* Navbar de PC */}
        <Navbar locale={locale} onOpenModal={(modal) => setActiveModal(modal)} />

        {/* Navbar Flotante Estilo App para Móvil */}
        <NavbarMobile locale={locale} />

        {/* SECCIÓN 1: HERO */}
        <section className="relative w-full h-screen overflow-hidden flex flex-col justify-start items-center pt-28 md:pt-32">
          <video 
            className="fixed top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 object-cover object-[70%_center] md:object-center z-0"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/assets/videos/Banner definitivo.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-[#04050a]/60 via-transparent to-[#04050a]/95 pointer-events-none z-10" />

          <div className="relative z-15 flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-anger text-4xl sm:text-6xl md:text-7xl tracking-wide text-white drop-shadow-2xl mb-1">
              {tHero('title')}
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.25em] md:tracking-[0.35em] text-gray-300 uppercase">
              {tHero('subtitle')}
            </p>
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