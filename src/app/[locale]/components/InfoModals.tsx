'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface InfoModalsProps {
  activeModal: 'about' | 'contact' | null;
  onClose: () => void;
}

export default function InfoModals({ activeModal, onClose }: InfoModalsProps) {
  const tAbout = useTranslations('About');
  const tContact = useTranslations('Contact');

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      
      {/* MODAL SOBRE MÍ */}
      {activeModal === 'about' && (
        <div className="relative w-full max-w-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/15 rounded-3xl p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center gap-8 animate-scaleUp">
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white text-lg font-bold w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
          >
            ✕
          </button>

          <div className="flex-shrink-0">
            <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#af926e] shadow-[0_0_20px_rgba(175,146,110,0.4)] relative">
              <Image 
                src="/assets/images/nik.webp" 
                alt="Niko Sai Avatar" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">{tAbout('title')}</h2>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed text-justify mb-6">
              {tAbout('description')}
            </p>
            <a 
              href="https://wa.me/573196922301" 
              target="_blank" 
              className="self-start px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold text-xs tracking-wider shadow-lg hover:bg-white/20 transition-all"
            >
              {tAbout('cta')}
            </a>
          </div>
        </div>
      )}

      {/* MODAL CONTACTO */}
      {activeModal === 'contact' && (
        <div className="relative w-full max-w-lg bg-white/[0.03] backdrop-blur-3xl border border-white/15 rounded-3xl p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col animate-scaleUp">
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white text-lg font-bold w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
          >
            ✕
          </button>

          <h2 className="text-2xl font-extrabold text-white mb-6 tracking-tight text-center">{tContact('title')}</h2>

          <div className="flex flex-col gap-4">
            <a href="https://instagram.com/niko.sai" target="_blank" className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-[#af926e] transition-all">
              <span className="text-xl">📸</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-gray-400 tracking-wider">{tContact('instagram')}</span>
                <span className="text-sm font-extrabold text-white">@niko.sai</span>
              </div>
            </a>

            <a href="https://wa.me/573196922301" target="_blank" className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-[#af926e] transition-all">
              <span className="text-xl">💬</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-gray-400 tracking-wider">{tContact('whatsapp')}</span>
                <span className="text-sm font-extrabold text-white">+57 319 6922301</span>
              </div>
            </a>

            <a href="mailto:nikolaz.filmmaker@gmail.com" className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-[#af926e] transition-all">
              <span className="text-xl">✉️</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-gray-400 tracking-wider">{tContact('email')}</span>
                <span className="text-sm font-extrabold text-white">nikolaz.filmmaker@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      )}

    </div>
  );
}