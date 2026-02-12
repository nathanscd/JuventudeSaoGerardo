export interface PhotoItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  size?: 'wide' | 'tall' | 'big';
}

const sizePattern: ('wide' | 'tall' | 'big' | undefined)[] = [
  'tall', undefined, 'wide', 'tall', undefined, 'big', undefined, 'wide', 'tall', undefined, 'wide'
];

export const galleryPhotos: PhotoItem[] = [
  {
    id: 1,
    src: "/Gallery/foto-grupo-1.jpeg", 
    alt: "Momento de Adoração",
    caption: "O céu desceu neste lugar",
    size: 'big'
  },
  {
    id: 2,
    src: "/Gallery/foto-grupo%20(2).jpeg",
    alt: "Louvor Intenso",
    caption: "Entregando tudo a Deus",
    size: 'tall'
  },
  {
    id: 3,
    src: "/Gallery/foto-grupo%20(3).jpeg",
    alt: "",
    caption: "",
    size: 'wide'
  },

  ...Array.from({ length: 57 }, (_, index) => {
    const id = index + 4; 
    
    const size = sizePattern[id % sizePattern.length];

    return {
      id: id,
      src: `/Gallery/foto-grupo%20(${id}).jpeg`, 
      alt: "",
      caption: "",
      size: size
    };
  })
];