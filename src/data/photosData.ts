// Certifique-se que o caminho é: src/data/photosData.ts

// O ERRO ESTAVA PROVAVELMENTE AQUI (Faltava o 'export' antes de interface)
export interface PhotoItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  size?: 'wide' | 'tall' | 'big';
}

export const galleryPhotos: PhotoItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop",
    alt: "Grupo reunido",
    caption: "Noite de Adoração • O céu desceu 🔥",
    size: 'big'
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop",
    alt: "Banda tocando",
    caption: "Ministério de Música entregando tudo.",
  },
  // ... adicione as outras fotos aqui
];