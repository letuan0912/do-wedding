export interface Album {
  id: number;
  slug: string;
  title: string;
  category: "studio" | "outdoor" | "wedding";
  description: string;
  cover: string;
  images: string[];
}

export const albums: Album[] = [
  {
    id: 1,
    slug: "elegant-studio",
    title: "Elegant Studio",
    category: "studio",
    description:
      "Concept studio sang trọng với ánh sáng mềm mại và phong cách tối giản.",

    cover: "/images/album/album1.jpg",

    images: [
      "/images/album/album1.jpg",
      "/images/album/album2.jpg",
      "/images/album/album3.jpg",
    ],
  },

  {
    id: 2,
    slug: "sunset-outdoor",
    title: "Sunset Outdoor",
    category: "outdoor",
    description:
      "Bộ ảnh ngoại cảnh được thực hiện lúc hoàng hôn với tông màu ấm.",

    cover: "/images/album/album4.jpg",

    images: [
      "/images/album/album4.jpg",
      "/images/album/album5.jpg",
      "/images/album/album6.jpg",
    ],
  },

  {
    id: 3,
    slug: "luxury-wedding",
    title: "Luxury Wedding",
    category: "wedding",
    description:
      "Wedding Day với phong cách hiện đại, sang trọng và giàu cảm xúc.",

    cover: "/images/album/album5.jpg",

    images: [
      "/images/album/album5.jpg",
      "/images/album/album6.jpg",
      "/images/album/album1.jpg",
    ],
  },
];