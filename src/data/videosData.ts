export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  aspectRatio: "horizontal" | "vertical";
  youtubeId: string;
  thumbnail: string;
  software: string[];
}

export const videosList: VideoItem[] = [
  // ==========================================
  // 8 VIDEOS VERTICALES (YOUTUBE SHORTS) - EXCLUSIVOS PARA MÓVIL
  // ==========================================
  {
    id: "01",
    title: "ALINE AMORETTI - PSICÓLOGA",
    subtitle: "CAMPAÑA COMERCIAL",
    description: "Transformamos material audiovisual en contenido visual de alto impacto combinando narrativa cinematográfica y corrección de color avanzada.",
    duration: "00:38",
    aspectRatio: "vertical",
    youtubeId: "ZsDaisQ4Sds",
    thumbnail: "https://img.youtube.com/vi/ZsDaisQ4Sds/hqdefault.jpg",
    software: ["Pr", "Ae", "DaVinci"]
  },
  {
    id: "02",
    title: "DANIELA MORALES",
    subtitle: "VIDEO PROMOCIONAL",
    description: "Edición profesional, ritmo de precisión y diseño de audio inmersivo para cautivar a la audiencia desde el primer segundo.",
    duration: "00:29",
    aspectRatio: "vertical",
    youtubeId: "zdozH5grLeo",
    thumbnail: "https://img.youtube.com/vi/zdozH5grLeo/hqdefault.jpg",
    software: ["Pr", "Ps"]
  },
  {
    id: "03",
    title: "RESTAURANTE VEGANO",
    subtitle: "VIDEO COMERCIAL",
    description: "Motion graphics fluidos y efectos visuales diseñados para elevar la retención en redes sociales y plataformas digitales.",
    duration: "00:27",
    aspectRatio: "vertical",
    youtubeId: "cIRn4olfITc",
    thumbnail: "https://img.youtube.com/vi/cIRn4olfITc/hqdefault.jpg",
    software: ["Ae", "DaVinci"]
  },
  {
    id: "04",
    title: "MODA URBANA - LOOKBOOK",
    subtitle: "REEL COMERCIAL",
    description: "Corrección de color con look cinematográfico, transiciones dinámicas al ritmo de la música y texturas de alta calidad.",
    duration: "00:32",
    aspectRatio: "vertical",
    youtubeId: "fwEQV6E2BYM",
    thumbnail: "https://img.youtube.com/vi/fwEQV6E2BYM/hqdefault.jpg",
    software: ["Pr", "DaVinci", "Ps"]
  },
  {
    id: "05",
    title: "MARCA PERSONAL - FITNESS",
    subtitle: "ASESORÍA DE CONTENIDO",
    description: "Estructura de storytelling optimizada para retener la atención del espectador durante todo el video vertical.",
    duration: "00:40",
    aspectRatio: "vertical",
    // ⚠️ ID INVÁLIDO: tiene 12 caracteres en vez de 11, revisa este link antes de producción
    youtubeId: "CZFplPEqBsg",
    thumbnail: "https://img.youtube.com/vi/CZFplPEqBsg/hqdefault.jpg",
    software: ["Pr", "Ae"]
  },
  {
    id: "06",
    title: "INNOVACIÓN TECNOLÓGICA",
    subtitle: "TEASER RÁPIDO",
    description: "Efectos visuales futuristas, animaciones tipográficas dinámicas y diseño de sonido inmersivo.",
    duration: "00:25",
    aspectRatio: "vertical",
    youtubeId: "SOZonXHpP6M",
    thumbnail: "https://img.youtube.com/vi/SOZonXHpP6M/hqdefault.jpg",
    software: ["Ae", "Ps"]
  },
  {
    id: "07",
    title: "ARTE Y DISEÑO DIGITAL",
    subtitle: "SHOWCASE CREATIVO",
    description: "Exhibición de procesos creativos con un montaje elegante y sofisticado.",
    duration: "00:35",
    aspectRatio: "vertical",
    youtubeId: "aNLS1Ayh8kg",
    thumbnail: "https://img.youtube.com/vi/aNLS1Ayh8kg/hqdefault.jpg",
    software: ["Pr", "DaVinci"]
  },
  {
    id: "08",
    title: "CAFÉ DE ESPECIALIDAD",
    subtitle: "SPOT PUBLICITARIO",
    description: "Tonos cálidos, macros detallados y ritmo pausado pero constante.",
    duration: "00:30",
    aspectRatio: "vertical",
    youtubeId: "wZC3eAYP04Q",
    thumbnail: "https://img.youtube.com/vi/wZC3eAYP04Q/hqdefault.jpg",
    software: ["DaVinci", "Ps"]
  },

  // ==========================================
  // 5 VIDEOS HORIZONTALES (YOUTUBE ESTÁNDAR) - EXCLUSIVOS PARA PC
  // ==========================================
  {
    id: "09",
    title: "LEOPARDO DE 4 CABEZAS - GRECIA",
    subtitle: "CORTOMETRAJE CINEMATOGRÁFICO",
    description: "Forma de leopardo: simboliza la velocidad y la agilidad en las conquistas. Esto describe el avance rápido del Imperio griego bajo Alejandro Magno.",
    duration: "02:15",
    aspectRatio: "horizontal",
    youtubeId: "ObfF0MZxVwg",
    thumbnail: "https://img.youtube.com/vi/ObfF0MZxVwg/hqdefault.jpg",
    software: ["Pr", "Ae", "DaVinci", "Ps"]
  },
  {
    id: "10",
    title: "MANUSCRITO ANTIGUO - MISTERIO",
    subtitle: "VIDEO PROMOCIONAL",
    description: "Una narrativa visual pausada que evoca la lectura de textos antiguos. Corrección de color enfocada en tonos cálidos.",
    duration: "01:30",
    aspectRatio: "horizontal",
    youtubeId: "JaTINE0KHFM",
    thumbnail: "https://img.youtube.com/vi/JaTINE0KHFM/hqdefault.jpg",
    software: ["Pr", "DaVinci"]
  },
  {
    id: "11",
    title: "EL MONJE EN LA CUEVA - LEYENDA",
    subtitle: "PRODUCCIÓN DIGITAL",
    description: "Iluminación cinematográfica controlada, sombras profundas y un diseño de sonido envolvente.",
    duration: "03:45",
    aspectRatio: "horizontal",
    youtubeId: "j6js6LrYclo",
    thumbnail: "https://img.youtube.com/vi/j6js6LrYclo/hqdefault.jpg",
    software: ["Ae", "Ps", "DaVinci"]
  },
  {
    id: "12",
    title: "ARQUITECTURA MODERNA",
    subtitle: "RECORRIDO VISUAL",
    description: "Movimientos de cámara limpios y una paleta de colores minimalista que resalta la geometría de cada espacio.",
    duration: "02:50",
    aspectRatio: "horizontal",
    youtubeId: "zDulhp1_7S8",
    thumbnail: "https://img.youtube.com/vi/zDulhp1_7S8/hqdefault.jpg",
    software: ["DaVinci", "Pr"]
  },
  {
    id: "13",
    title: "MÚSICA Y CONCIERTO",
    subtitle: "AFTERMOVIE",
    description: "Sincronización rítmica perfecta y efectos de luz estroboscópica capturados con montaje dinámico.",
    duration: "03:10",
    aspectRatio: "horizontal",
    youtubeId: "XC0aBiyBNVI",
    thumbnail: "https://img.youtube.com/vi/XC0aBiyBNVI/hqdefault.jpg",
    software: ["Pr", "Ae", "DaVinci"]
  }
];