export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Chụp Ảnh Cưới",
    description: "Studio • Ngoại cảnh • Concept cao cấp",
    image: "/images/service1.png",
    href: "/dich-vu",
  },
  {
    id: 2,
    title: "Trang Phục Cưới",
    description: "Váy cưới và vest cao cấp",
    image: "/images/service2.jpg",
    href: "/dich-vu",
  },
  {
    id: 3,
    title: "Wedding Day",
    description: "Quay phim và chụp hình ngày cưới",
    image: "/images/service3.jpg",
    href: "/dich-vu",
  },
];