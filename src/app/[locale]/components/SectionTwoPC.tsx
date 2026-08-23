'use client';

import { useState } from 'react';
import { videosList, VideoItem } from '@/data/videosData';
import { useTranslations } from 'next-intl';

interface VideoWithLikes extends VideoItem {
  views: string;
  likes: number;
}

export default function SectionTwoPC() {
  const t = useTranslations('Projects');

  const horizontalVideos: VideoWithLikes[] = videosList
    .filter(v => v.aspectRatio === 'horizontal')
    .map((v, index) => ({
      ...v,
      views: `${(15.2 + index * 2.4).toFixed(1)}K`,
      likes: 450 + index * 35
    }));

  const [videos, setVideos] = useState<VideoWithLikes[]>(horizontalVideos);
  const [activeVideo, setActiveVideo] = useState<VideoWithLikes | null>(null);
  const [userLiked, setUserLiked] = useState<{ [key: string]: boolean }>({});

  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setVideos(prev => prev.map(v => {
      if (v.id === id) {
        const isLiked = userLiked[id];
        setUserLiked({ ...userLiked, [id]: !isLiked });
        return { ...v, likes: isLiked ? v.likes - 1 : v.likes + 1 };
      }
      return v;
    }));
  };

  return (
    <div className="hidden md:flex w-full min-h-screen items-center justify-center">
      {!activeVideo ? (
        <div className="w-full flex flex-col items-center animate-fadeIn py-20">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold text-[#af926e] tracking-[0.35em] uppercase">{t('tag')}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-white">{t('title')}</h2>
            <p className="text-xs md:text-sm text-gray-400 mt-2">{t('subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-8">
            {videos.map((video) => (
              <div 
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-3 border border-white/10 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[#af926e] transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black mb-4">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  <button 
                    onClick={(e) => handleLike(e, video.id)}
                    className={`absolute top-3 right-3 px-3 py-1.5 rounded-full backdrop-blur-xl border flex items-center gap-1.5 text-xs font-bold transition-all ${
                      userLiked[video.id] 
                        ? 'bg-rose-500/20 border-rose-500 text-rose-400' 
                        : 'bg-black/40 border-white/20 text-white hover:bg-black/60'
                    }`}
                  >
                    <span>{userLiked[video.id] ? '❤️' : '🤍'}</span>
                    <span>{video.likes}</span>
                  </button>
                </div>

                <div className="px-2 pb-2 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-extrabold text-[#af926e] tracking-wider uppercase mb-1 block">{video.subtitle}</span>
                    <h3 className="text-sm md:text-base font-extrabold text-white group-hover:text-amber-200 transition-colors line-clamp-1">{video.title}</h3>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-xs text-gray-400 font-bold">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      {video.views} {t('views')}
                    </span>
                    <span className="text-emerald-400 font-extrabold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">4K ULTRA HD</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* VISOR GIGANTE CENTRADO + SIDEBAR A LA DERECHA */
        <div className="w-full h-screen flex items-center justify-between animate-fadeIn pt-16">
          
          <div className="flex-grow h-full flex flex-col justify-center py-4 px-8 items-center gap-4">
            
            <div className="relative w-full max-w-[1350px] aspect-video rounded-3xl overflow-hidden border border-white/15 bg-black shadow-[0_35px_80px_rgba(0,0,0,0.95)]">
              <iframe 
                key={activeVideo.youtubeId || activeVideo.videoUrl}
                src={activeVideo.youtubeId ? `https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1` : activeVideo.videoUrl} 
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="w-full max-w-[1350px] flex items-center justify-between gap-4">
              <button 
                className="text-gray-400 hover:text-white transition-colors p-2"
                onClick={() => {
                  const currentIndex = horizontalVideos.findIndex(v => v.id === activeVideo.id);
                  const prevIndex = (currentIndex - 1 + horizontalVideos.length) % horizontalVideos.length;
                  setActiveVideo(horizontalVideos[prevIndex]);
                }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>

              <div className="flex items-center gap-3 overflow-x-auto px-2 scrollbar-none">
                {horizontalVideos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`relative flex-shrink-0 w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeVideo.id === video.id ? 'border-[#af926e] scale-105 shadow-lg shadow-[#af926e]/30' : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-1.5">
                      <span className="text-[10px] font-bold text-white truncate">{video.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button 
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  onClick={() => {
                    const currentIndex = horizontalVideos.findIndex(v => v.id === activeVideo.id);
                    const nextIndex = (currentIndex + 1) % horizontalVideos.length;
                    setActiveVideo(horizontalVideos[nextIndex]);
                  }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                <button 
                  onClick={() => setActiveVideo(null)}
                  className="p-3.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-white/10 shadow-lg ml-2"
                  title="Volver a la cuadrícula"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
              </div>
            </div>

          </div>

          <div className="w-[400px] h-full flex-shrink-0 bg-white/[0.02] backdrop-blur-3xl border-l border-white/10 p-8 flex flex-col justify-between shadow-2xl rounded-l-3xl">
            <div className="overflow-y-auto pr-1 scrollbar-thin flex-grow pt-4">
              <h3 className="text-2xl font-extrabold text-orange-500 tracking-wider uppercase mb-4">
                {activeVideo.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-3 text-xs text-gray-400 font-bold uppercase">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-extrabold text-center tracking-wider text-sm shadow-xl shadow-orange-600/30 hover:scale-[1.02] transition-transform mt-4 flex-shrink-0"
            >
              {t('cta')}
            </a>
          </div>

        </div>
      )}
    </div>
  );
}