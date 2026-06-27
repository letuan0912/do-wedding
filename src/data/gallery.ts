export interface GalleryItem {
  id: number;
  title: string;
  category: "studio" | "outdoor" | "wedding";
  image: string;
}

export const gallery: GalleryItem[] = [
  {
    id: 1,
    title: "Elegant Studio",
    category: "studio",
    image: "/images/album/album1.jpg",
  },
  {
    id: 2,
    title: "Classic Love",
    category: "studio",
    image: "/images/album/album2.jpg",
  },
  {
    id: 3,
    title: "Sunset Outdoor",
    category: "outdoor",
    image: "/images/album/album3.jpg",
  },
  {
    id: 4,
    title: "Forest Story",
    category: "outdoor",
    image: "/images/album/album4.jpg",
  },
  {
    id: 5,
    title: "Luxury Wedding",
    category: "wedding",
    image: "/images/album/album5.jpg",
  },
  {
    id: 6,
    title: "Dream Wedding",
    category: "wedding",
    image: "/images/album/album6.jpg",
  },
];