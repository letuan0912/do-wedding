export interface Album {
  id: number;
  slug: string;

  title: string;
  category: "studio" | "outdoor" | "wedding";

  description: string;
  story: string;

  cover: string;
  images: string[];

  video: string;

  location: string;
  date: string;

  photographer: string;
  makeup: string;

  concept: string;

  featured: boolean;
}

export const albums: Album[] = [
  {
    id: 1,

    slug: "elegant-studio",

    title: "Elegant Studio",

    category: "studio",

    description:
      "Concept studio sang trọng với ánh sáng mềm mại và phong cách tối giản.",

    story:
      "Một bộ ảnh mang phong cách tối giản, tập trung vào cảm xúc tự nhiên và ánh sáng mềm để lưu giữ những khoảnh khắc đẹp nhất.",

    cover: "/images/album/album1.jpg",

    video: "/video/wedding/elegant.mp4",

    images: [
      "/images/album/album1.jpg",
      "/images/album/album2.jpg",
      "/images/album/album3.jpg",
    ],

    location: "TP. Hồ Chí Minh",

    date: "2026",

    photographer: "DO Wedding",

    makeup: "DO Makeup",

    concept: "Luxury Minimal",

    featured: true,
  },

  {
    id: 2,

    slug: "sunset-outdoor",

    title: "Sunset Outdoor",

    category: "outdoor",

    description:
      "Bộ ảnh ngoại cảnh được thực hiện lúc hoàng hôn với tông màu ấm.",

    story:
      "Không gian thiên nhiên kết hợp ánh hoàng hôn tạo nên những khung hình điện ảnh và đầy cảm xúc.",

    cover: "/images/album/album4.jpg",

    video: "/video/wedding/elegant.mp4",

    images: [
      "/images/album/album4.jpg",
      "/images/album/album5.jpg",
      "/images/album/album6.jpg",
    ],

    location: "Đà Lạt",

    date: "2026",

    photographer: "DO Wedding",

    makeup: "DO Makeup",

    concept: "Sunset Outdoor",

    featured: false,
  },

  {
    id: 3,

    slug: "luxury-wedding",

    title: "Luxury Wedding",

    category: "wedding",

    description:
      "Wedding Day với phong cách hiện đại, sang trọng và giàu cảm xúc.",

    story:
      "Ngày cưới được ghi lại theo phong cách điện ảnh, tập trung vào cảm xúc chân thật của cô dâu và chú rể.",

    cover: "/images/album/album5.jpg",

    video: "/video/wedding/elegant.mp4",

    images: [
      "/images/album/album5.jpg",
      "/images/album/album6.jpg",
      "/images/album/album1.jpg",
    ],

    location: "TP. Hồ Chí Minh",

    date: "2026",

    photographer: "DO Wedding",

    makeup: "DO Makeup",

    concept: "Luxury Wedding",

    featured: false,
  },
];