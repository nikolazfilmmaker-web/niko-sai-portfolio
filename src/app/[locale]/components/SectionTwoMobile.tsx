'use client';

import { useState } from 'react';
import { videosList, VideoItem } from '@/data/videosData';
import { useTranslations } from 'next-intl';

export default function SectionTwoMobile() {
  const t = useTranslations('Projects');
  
  // Obtenemos los 12 videos verticales locales
  const mobileVideos = videosList.filter(v => v.aspectRatio === 'vertical');
  
  const [visibleCount, setVisibleCount] = useState(9);
  const [mobileActiveVideo, setMobileActiveVideo] = useState<VideoItem | null>(null);

  const currentVideos = mobileVideos.slice(0, visibleCount);
  const hasMore = visibleCount < mobileVideos.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 9, mobileVideos.length));
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between py-24 px-4 md:hidden relative overflow-hidden">
      
      {/* TÍTULO DE LA SECCIÓN */}
      <div className="text-center px-4 z-10 mb-6">
        <span className="text-[10px] font-extrabold text-[#af926e] tracking-[0.3em] uppercase">{t('tag')}</span>
        <h2 className="text-2xl font-extrabold tracking-tight mt-1 text-white">{t('title')}</h2>
        <p className="text-xs text-gray-400 mt-1">Explora los proyectos en alta definición.</p>
      </div>

      {/* CUADRÍCULA 3x3 CON LOS VIDEOS VERTICALES LOCALES (01.mp4 al 12.mp4) */}
      <div className="w-full max-w-sm mx-auto grid grid-cols-3 gap-3 px-2 my-auto">
        {currentVideos.map((video) => (
          <div 
            key={video.id}
            onClick={() => setMobileActiveVideo(video)}
            className="group relative aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-white/15 cursor-pointer shadow-xl active:scale-95 transition-transform"
          >
            {/* Reproductor automático silencioso usando el videoUrl real del archivo local */}
            <video 
              src={video.videoUrl} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
        ))}
      </div>

      {/* BOTÓN DE PAGINACIÓN */}
      {hasMore && (
        <div className="w-full text-center my-6 z-10">
          <button 
            onClick={loadMore}
            className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold text-[10px] tracking-widest uppercase shadow-lg active:scale-95 transition-all"
          >
            Ver más proyectos ({mobileVideos.length - visibleCount} restantes)
          </button>
        </div>
      )}

      {/* MODAL / CARD EXPANDIDA EN MÓVIL */}
      {mobileActiveVideo && (
        <div className="fixed inset-0 z-50 bg-black/92 backdrop-blur-2xl flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-sm bg-[#07080f]/95 backdrop-blur-3xl border border-white/20 rounded-[32px] p-6 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[92vh]">
            
            <div className="flex justify-between items-center mb-4">
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

            <div className="relative w-full h-[64vh] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl mb-4 flex items-center justify-center">
              <video 
                key={mobileActiveVideo.videoUrl}
                src={mobileActiveVideo.videoUrl} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <a 
              href="https://wa.me/573196922301" 
              target="_blank" 
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-extrabold text-center tracking-wider text-sm shadow-xl shadow-orange-600/30 hover:scale-[1.02] transition-transform"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}