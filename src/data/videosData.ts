export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  aspectRatio: "horizontal" | "vertical";
  youtubeId?: string;
  videoUrl?: string;
  thumbnail: string;
  software: string[];
}

export const videosList: VideoItem[] = [
  // ==========================================
  // 12 VIDEOS VERTICALES (9:16) EXCLUSIVOS PARA MÓVIL
  // ==========================================
  {
    id: "01",
    title: "ALINE AMORETTI - PSICÓLOGA",
    subtitle: "CAMPAÑA COMERCIAL",
    description: "Transformamos material audiovisual en contenido visual de alto impacto combinando narrativa cinematográfica y corrección de color avanzada.",
    duration: "00:38",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/01.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "Ae", "DaVinci"]
  },
  {
    id: "02",
    title: "DANIELA MORALES",
    subtitle: "VIDEO PROMOCIONAL",
    description: "Edición profesional, ritmo de precisión y diseño de audio inmersivo para cautivar a la audiencia desde el primer segundo.",
    duration: "00:29",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/02.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "Ps"]
  },
  {
    id: "03",
    title: "RESTAURANTE VEGANO",
    subtitle: "VIDEO COMERCIAL",
    description: "Motion graphics fluidos y efectos visuales diseñados para elevar la retención en redes sociales y plataformas digitales.",
    duration: "00:27",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/03.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Ae", "DaVinci"]
  },
  {
    id: "04",
    title: "MODA URBANA - LOOKBOOK",
    subtitle: "REEL COMERCIAL",
    description: "Corrección de color con look cinematográfico, transiciones dinámicas al ritmo de la música y texturas de alta calidad.",
    duration: "00:32",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/04.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "DaVinci", "Ps"]
  },
  {
    id: "05",
    title: "MARCA PERSONAL - FITNESS",
    subtitle: "ASESORÍA DE CONTENIDO",
    description: "Estructura de storytelling optimizada para retener la atención del espectador durante todo el video vertical.",
    duration: "00:40",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/05.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "Ae"]
  },
  {
    id: "06",
    title: "INNOVACIÓN TECNOLÓGICA",
    subtitle: "TEASER RÁPIDO",
    description: "Efectos visuales futuristas, animaciones tipográficas dinámicas y diseño de sonido inmersivo.",
    duration: "00:25",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/06.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Ae", "Ps"]
  },
  {
    id: "07",
    title: "ARTE Y DISEÑO DIGITAL",
    subtitle: "SHOWCASE CREATIVO",
    description: "Exhibición de procesos creativos con un montaje elegante y sofisticado.",
    duration: "00:35",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/07.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "DaVinci"]
  },
  {
    id: "08",
    title: "CAFÉ DE ESPECIALIDAD",
    subtitle: "SPOT PUBLICITARIO",
    description: "Tonos cálidos, macros detallados y ritmo pausado pero constante.",
    duration: "00:30",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/08.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["DaVinci", "Ps"]
  },
  {
    id: "09",
    title: "EVENTO CORPORATIVO",
    subtitle: "RESUMEN EN REEL",
    description: "Cobertura dinámica con cortes precisos y energía constante.",
    duration: "00:45",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/09.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr"]
  },
  {
    id: "10",
    title: "BIENESTAR Y SALUD",
    subtitle: "CARRUSEL INFORMATIVO",
    description: "Animación de gráficos explicativos y subtítulos dinámicos de alta retención.",
    duration: "00:33",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/10.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Ae", "Pr"]
  },
  {
    id: "11",
    title: "ARQUITECTURA MODERNA",
    subtitle: "RECORRIDO VISUAL",
    description: "Movimientos de cámara limpios y una paleta de colores minimalista.",
    duration: "00:38",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/11.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["DaVinci"]
  },
  {
    id: "12",
    title: "MÚSICA Y CONCIERTO",
    subtitle: "AFTERMOVIE",
    description: "Sincronización rítmica perfecta y efectos de luz estroboscópica.",
    duration: "00:50",
    aspectRatio: "vertical",
    videoUrl: "/assets/videos/12.mp4",
    thumbnail: "/assets/images/sec2.png",
    software: ["Pr", "Ae", "DaVinci"]
  },

  // ==========================================
  // VIDEOS HORIZONTALES (16:9) EXCLUSIVOS PARA PC (YOUTUBE)
  // ==========================================
  {
    id: "13",
    title: "LEOPARDO DE 4 CABEZAS - GRECIA",
    subtitle: "CORTOMETRAJE CINEMATOGRÁFICO",
    description: "Forma de leopardo: Simboliza la velocidad y la agilidad en las conquistas. Esto describe el avance rápido del Imperio griego bajo Alejandro Magno.",
    duration: "02:15",
    aspectRatio: "horizontal",
    youtubeId: "UhthGfXIMkw",
    thumbnail: "https://img.youtube.com/vi/UhthGfXIMkw/hqdefault.jpg",
    software: ["Pr", "Ae", "DaVinci", "Ps"]
  },
  {
    id: "14",
    title: "MANUSCRITO ANTIGUO - MISTERIO",
    subtitle: "VIDEO PROMOCIONAL",
    description: "Una narrativa visual pausada que evoca la lectura de textos antiguos. Corrección de color enfocada en tonos cálidos.",
    duration: "01:30",
    aspectRatio: "horizontal",
    youtubeId: "UhthGfXIMkw",
    thumbnail: "https://img.youtube.com/vi/UhthGfXIMkw/hqdefault.jpg",
    software: ["Pr", "DaVinci"]
  },
  {
    id: "15",
    title: "EL MONJE EN LA CUEVA - LEYENDA",
    subtitle: "PRODUCCIÓN DIGITAL",
    description: "Iluminación cinematográfica controlada, sombras profundas y un diseño de sonido envolvente.",
    duration: "03:45",
    aspectRatio: "horizontal",
    youtubeId: "UhthGfXIMkw",
    thumbnail: "https://img.youtube.com/vi/UhthGfXIMkw/hqdefault.jpg",
    software: ["Ae", "Ps", "DaVinci"]
  }
];