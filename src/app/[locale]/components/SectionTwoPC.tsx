'use client';

import { useEffect, useState } from 'react';
import { videosList, VideoItem } from '@/data/videosData';
import { useTranslations } from 'next-intl';

export default function SectionTwoPC() {
  const t = useTranslations('Projects');

  const [videos] = useState<VideoItem[]>(videosList);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeVideo = activeIndex !== null ? videos[activeIndex] : null;

  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + videos.length) % videos.length);
  };

  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % videos.length);
  };

  // Cerrar con ESC + navegar con flechas del teclado
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div className="hidden md:flex w-full min-h-screen items-center justify-center relative">

      {/* ========================================== */}
      {/* GALERÍA GRID — ESTILO REELS / INSTAGRAM      */}
      {/* ========================================== */}
      <div className="w-full flex flex-col items-center animate-fadeIn py-24">
        <div className="text-center mb-14">
          <span className="text-xs font-extrabold text-[#af926e] tracking-[0.35em] uppercase">{t('tag')}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-white">{t('title')}</h2>
          <p className="text-xs md:text-sm text-gray-400 mt-2">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full max-w-[1700px] px-12">
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-[9/16] w-full rounded-[28px] overflow-hidden cursor-pointer bg-neutral-900 border border-white/10 hover:border-[#af926e]/70 shadow-[0_25px_50px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_65px_rgba(0,0,0,0.7)]"
            >
              {/* Miniatura real: primer fotograma del propio .mp4 (fragmento #t=0.5) */}
              <video
                src={`${video.videoUrl}#t=0.5`}
                preload="metadata"
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay minimalista, siempre visible en la parte inferior + refuerzo al hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/10 group-hover:from-black/85 group-hover:via-black/20 transition-all duration-500 flex flex-col justify-between p-4">
                <span className="self-end text-[10px] font-extrabold text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full">
                  {video.duration}
                </span>

                <div className="flex items-center justify-center flex-grow">
                  <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <span className="text-xs font-bold text-white/90 tracking-wide uppercase">
                  Proyecto {video.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* MODAL INMERSIVO — VIDEO + SIDEBAR            */}
      {/* ========================================== */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/85 animate-fadeIn">

          {/* Botón cerrar — flotante, elegante, estilo Awwwards */}
          <button
            onClick={() => setActiveIndex(null)}
            className="fixed top-8 right-8 z-[60] w-12 h-12 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:rotate-90 transition-all duration-500 shadow-2xl"
            title="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flecha izquierda */}
          <button
            onClick={goPrev}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-2xl"
            title="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Flecha derecha */}
          <button
            onClick={goNext}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-2xl"
            title="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="w-full max-w-6xl h-[90vh] flex items-stretch gap-8 px-8">

            {/* PLAYER VERTICAL */}
            <div className="flex-grow h-full flex flex-col items-center justify-center gap-4">
              <div className="relative h-full aspect-[9/16] rounded-3xl overflow-hidden border border-white/15 bg-black shadow-[0_35px_80px_rgba(0,0,0,0.95)]">
                <video
                  key={activeVideo.videoUrl}
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tira de miniaturas inferior */}
              <div className="flex items-center gap-3 overflow-x-auto max-w-full px-2 scrollbar-none">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative flex-shrink-0 w-12 aspect-[9/16] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeIndex === index
                        ? 'border-[#af926e] scale-110 shadow-lg shadow-[#af926e]/30'
                        : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <video
                      src={`${video.videoUrl}#t=0.5`}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* SIDEBAR DE DETALLES */}
            <div className="w-[380px] h-full flex-shrink-0 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
              <div className="overflow-y-auto pr-1 scrollbar-thin flex-grow">
                <span className="text-[10px] font-extrabold text-[#af926e] tracking-[0.3em] uppercase mb-2 block">
                  Proyecto {activeVideo.id}
                </span>

                <h3 className="text-2xl font-extrabold text-white tracking-wide mb-4">
                  {activeVideo.title || `Reel ${activeVideo.id}`}
                </h3>

                <div className="flex items-center gap-2 mb-3 text-xs text-gray-400 font-bold uppercase">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('description')}
                </div>

                <p className="text-xs text-gray-300 leading-relaxed text-justify mb-8">
                  {activeVideo.description}
                </p>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">🎥</div>
                    <span className="text-xs font-extrabold tracking-wide text-white">Cinematic Editing</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">🎨</div>
                    <span className="text-xs font-extrabold tracking-wide text-white">Colorgrading</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">🔊</div>
                    <span className="text-xs font-extrabold tracking-wide text-white">Sound Design</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">✨</div>
                    <span className="text-xs font-extrabold tracking-wide text-white">AI Video Generation</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/573196922301"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-extrabold text-center tracking-wider text-sm shadow-xl shadow-orange-600/30 hover:scale-[1.02] transition-transform mt-4 flex-shrink-0"
              >
                {t('cta')}
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}