'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 400); // Super rápido
    }, 800); // 0.8 segundos de carga inicial

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-50 bg-[#04050a] flex items-center justify-center transition-opacity duration-400 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center scale-110 animate-pulse">
        <Image 
          src="/assets/images/Logo.webp" 
          alt="Niko Sai Logo" 
          width={130} 
          height={45} 
          className="object-contain"
        />
        <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#af926e] to-transparent" />
      </div>
    </div>
  );
}