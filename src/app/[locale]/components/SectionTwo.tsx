'use client';

import SectionTwoMobile from './SectionTwoMobile';
import SectionTwoPC from './SectionTwoPC';

export default function SectionTwo() {
  return (
    <section 
      id="proyectos" 
      className="relative w-full min-h-screen text-white overflow-hidden select-none scroll-smooth"
      style={{
        backgroundImage: `url('/assets/images/sec2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#07080f'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#04050a]/70 via-[#07080f]/80 to-[#04050a]/90 backdrop-blur-[2px] pointer-events-none z-0" />

      <div className="relative z-10 w-full h-full">
        <SectionTwoMobile />
        <SectionTwoPC />
      </div>
    </section>
  );
}