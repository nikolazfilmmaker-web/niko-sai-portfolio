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
              rel="noopener noreferrer"
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
            <a
              href="https://instagram.com/niko.sai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-[#af926e] hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5.5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-gray-400 tracking-wider uppercase">{tContact('instagram')}</span>
                <span className="text-sm font-extrabold text-white">@niko.sai</span>
              </div>
            </a>

            <a
              href="https://wa.me/573196922301"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-[#af926e] hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.14h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.22-8.24 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-gray-400 tracking-wider uppercase">{tContact('whatsapp')}</span>
                <span className="text-sm font-extrabold text-white">+57 319 6922301</span>
              </div>
            </a>
          </div>
        </div>
      )}

    </div>
  );
}