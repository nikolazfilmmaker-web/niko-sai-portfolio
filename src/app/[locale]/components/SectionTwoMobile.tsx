'use client';

import { useState } from 'react';
import { videosList, VideoItem } from '@/data/videosData';
import { useTranslations } from 'next-intl';

export default function SectionTwoMobile() {
  const t = useTranslations('Projects');
  
  // Filtramos exclusivamente los 12 videos verticales para el carrusel móvil
  const mobileVideos = videosList.filter(v => v.aspectRatio === 'vertical');
  const [mobileActiveVideo, setMobileActiveVideo] = useState<VideoItem | null>(null);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between py-24 px-4 md:hidden relative overflow-hidden">
      
      {/* TÍTULO DE LA SECCIÓN */}
      <div className="text-center px-4 z-10 mb-2">
        <span className="text-[10px] font-extrabold text-[#af926e] tracking-[0.3em] uppercase">{t('tag')}</span>
        <h2 className="text-2xl font-extrabold tracking-tight mt-1 text-white">{t('title')}</h2>
        <p className="text-xs text-gray-400 mt-1">Desliza horizontalmente para explorar las obras.</p>
      </div>

      {/* CARRUSEL TÁCTIL HORIZONTAL CON SCROLL SNAP (Muestra los 12 videos) */}
      <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-none flex items-center gap-6 px-[15vw] py-8 snap-x snap-mandatory scroll-smooth my-auto">
        {mobileVideos.map((video) => (
          <div 
            key={video.id}
            onClick={() => setMobileActiveVideo(video)}
            className="relative flex-shrink-0 w-[70vw] max-w-[260px] aspect-[9/16] bg-black rounded-[32px] border-2 border-white/20 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.9)] snap-center flex flex-col justify-between overflow-hidden group active:scale-95 transition-transform duration-300"
          >
            {/* Miniatura de fondo */}
            <div className="absolute inset-0 z-0">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            </div>

            {/* Cabecera */}
            <div className="relative z-10 flex justify-between items-center p-4">
              <span className="text-[9px] font-bold text-[#af926e] tracking-wider uppercase">{video.subtitle}</span>
              <span className="text-[9px] font-bold text-gray-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">9:16</span>
            </div>

            {/* Pie de tarjeta */}
            <div className="relative z-10 p-4 pb-5 flex flex-col gap-2">
              <h3 className="text-xs font-extrabold text-white line-clamp-2 uppercase tracking-wide">{video.title}</h3>
              <span className="self-start text-[10px] text-amber-200 font-extrabold bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-md">
                ▶ Toca para ver video
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* INDICADOR SUTIL DE SWIPE */}
      <div className="text-center z-10 text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">
        ← Desliza horizontalmente ({mobileVideos.length} proyectos) →
      </div>

      {/* MODAL / CARD EXPANDIDA EN MÓVIL (Con z-[9999] para que tape absolutamente todo y no se cruce) */}
      {mobileActiveVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-sm bg-[#07080f]/95 backdrop-blur-3xl border border-white/20 rounded-[32px] p-5 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto">
            
            <div className="flex justify-between items-center mb-3">
              <div>
                <span className="text-[10px] font-bold text-[#af926e] tracking-wider uppercase block">{mobileActiveVideo.subtitle}</span>
                <h3 className="text-sm font-extrabold text-white truncate max-w-[220px]">{mobileActiveVideo.title}</h3>
              </div>
              <button 
                onClick={() => setMobileActiveVideo(null)}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-base font-bold shadow-lg"
              >
                ✕
              </button>
            </div>

            {/* Reproductor de video local .mp4 vertical */}
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl mb-4">
              <video 
                key={mobileActiveVideo.videoUrl}
                src={mobileActiveVideo.videoUrl} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 mb-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-1">{t('description')}</h4>
              <p className="text-[11px] text-gray-200 leading-relaxed text-justify">{mobileActiveVideo.description}</p>
            </div>

            <a 
              href="https://wa.me/573196922301" 
              target="_blank" 
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-extrabold text-center tracking-wider text-xs shadow-xl"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}