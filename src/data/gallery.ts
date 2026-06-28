export type GalleryItem = {
  id: number;
  title: string;
  category: "Studio" | "Outdoor" | "Pre Wedding";
  image: string;
};

export const gallery = [
  {
    id: 1,
    title: "Studio Luxury",
    category: "Studio",
    image: "/images/gallery/gallery-1.jpg",
  },

  {
    id: 2,
    title: "Đà Lạt",
    category: "Outdoor",
    image: "/images/gallery/gallery-2.jpg",
  },

  {
    id: 3,
    title: "Hồ Cốc",
    category: "Outdoor",
    image: "/images/gallery/gallery-3.jpg",
  },

  {
    id: 4,
    title: "Vintage",
    category: "Studio",
    image: "/images/gallery/gallery-4.jpg",
  },

  {
    id: 5,
    title: "Pre Wedding",
    category: "Pre Wedding",
    image: "/images/gallery/gallery-5.jpg",
  },

  {
    id: 6,
    title: "Luxury Concept",
    category: "Studio",
    image: "/images/gallery/gallery-6.jpg",
  },

  {
    id: 7,
    title: "Sunset",
    category: "Outdoor",
    image: "/images/gallery/gallery-7.jpg",
  },

  {
    id: 8,
    title: "Minimal",
    category: "Studio",
    image: "/images/gallery/gallery-8.jpg",
  },
];