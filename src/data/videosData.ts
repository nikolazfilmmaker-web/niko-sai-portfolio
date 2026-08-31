export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  aspectRatio: "horizontal" | "vertical";
  videoUrl?: string;   // CDN propio (evyniko.com) — usado por los verticales de móvil
  youtubeId?: string;  // YouTube estándar — usado por los horizontales de PC
  thumbnail: string;
  software: string[];
}

export const videosList: VideoItem[] = [
  // ==========================================
  // 12 VIDEOS VERTICALES (CDN PROPIO evyniko.com) - EXCLUSIVOS PARA MÓVIL
  // ==========================================
  {
    id: "01",
    title: "",
    subtitle: "",
    description: "Transformamos material audiovisual en contenido visual de alto impacto combinando narrativa cinematográfica y corrección de color avanzada.",
    duration: "00:38",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/01.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "Ae", "DaVinci"]
  },
  {
    id: "02",
    title: "",
    subtitle: "",
    description: "Edición profesional, ritmo de precisión y diseño de audio inmersivo para cautivar a la audiencia desde el primer segundo.",
    duration: "00:29",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/02.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "Ps"]
  },
  {
    id: "03",
    title: "",
    subtitle: "",
    description: "Motion graphics fluidos y efectos visuales diseñados para elevar la retención en redes sociales y plataformas digitales.",
    duration: "00:27",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/03.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Ae", "DaVinci"]
  },
  {
    id: "04",
    title: "",
    subtitle: "",
    description: "Corrección de color con look cinematográfico, transiciones dinámicas al ritmo de la música y texturas de alta calidad.",
    duration: "00:32",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/04.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "DaVinci", "Ps"]
  },
  {
    id: "05",
    title: "",
    subtitle: "",
    description: "Estructura de storytelling optimizada para retener la atención del espectador durante todo el video vertical.",
    duration: "00:40",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/05.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "Ae"]
  },
  {
    id: "06",
    title: "",
    subtitle: "",
    description: "Efectos visuales futuristas, animaciones tipográficas dinámicas y diseño de sonido inmersivo.",
    duration: "00:25",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/06.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Ae", "Ps"]
  },
  {
    id: "07",
    title: "",
    subtitle: "",
    description: "Exhibición de procesos creativos con un montaje elegante y sofisticado.",
    duration: "00:35",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/07.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "DaVinci"]
  },
  {
    id: "08",
    title: "",
    subtitle: "",
    description: "Tonos cálidos, macros detallados y ritmo pausado pero constante.",
    duration: "00:30",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/08.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["DaVinci", "Ps"]
  },
  {
    id: "09",
    title: "",
    subtitle: "",
    description: "Cobertura dinámica con cortes precisos y energía constante durante todo el evento.",
    duration: "00:45",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/09.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr"]
  },
  {
    id: "10",
    title: "",
    subtitle: "",
    description: "Animación de gráficos explicativos y subtítulos dinámicos de alta retención.",
    duration: "00:33",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/10.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Ae", "Pr"]
  },
  {
    id: "11",
    title: "",
    subtitle: "",
    description: "Movimientos de cámara limpios y una paleta de colores minimalista.",
    duration: "00:38",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/11.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["DaVinci"]
  },
  {
    id: "12",
    title: "",
    subtitle: "",
    description: "Sincronización rítmica perfecta y efectos de luz estroboscópica.",
    duration: "00:50",
    aspectRatio: "vertical",
    videoUrl: "https://evyniko.com/assets/videos/videos_verticales/12.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "Ae", "DaVinci"]
  },

  // ==========================================
  // 5 VIDEOS HORIZONTALES (YOUTUBE ESTÁNDAR) - EXCLUSIVOS PARA PC
  // ==========================================
  {
    id: "13",
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
    id: "14",
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
    id: "15",
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
    id: "16",
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
    id: "17",
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