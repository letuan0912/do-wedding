export interface Service {
  id: number;

  slug: string;

  title: string;

  subtitle: string;

  description: string;

  story: string;

  price: string;

  cover: string;

  gallery: string[];

  includes: string[];

  featured: boolean;
}

export const services: Service[] = [
  {
    id: 1,

    slug: "studio",

    title: "Chụp Ảnh Cưới",

    subtitle: "Studio • Outdoor • Luxury",

    description:
      "Lưu giữ câu chuyện tình yêu bằng phong cách sang trọng, cảm xúc và hiện đại.",

    story:
      "Gói chụp ảnh cưới được thiết kế dành cho các cặp đôi mong muốn lưu giữ những khoảnh khắc tự nhiên, sang trọng và giàu cảm xúc. Đội ngũ DO Wedding sẽ đồng hành từ khâu lên ý tưởng, lựa chọn trang phục, makeup đến quá trình chụp và hậu kỳ nhằm tạo nên một bộ ảnh mang dấu ấn riêng của mỗi cặp đôi.",

    price: "Từ 5.900.000đ",

    cover: "/images/service1.png",

    gallery: [
      "/images/service1.png",
      "/images/album/album1.jpg",
      "/images/album/album2.jpg",
      "/images/album/album3.jpg",
    ],

    includes: [
      "Tư vấn concept miễn phí",
      "Lựa chọn địa điểm chụp",
      "Makeup & Hair chuyên nghiệp",
      "Chỉnh sửa ảnh cao cấp",
      "Bàn giao ảnh Full HD",
      "Album ảnh cao cấp",
    ],

    featured: true,
  },

  {
    id: 2,

    slug: "bridal-dress",

    title: "Váy Cưới Cao Cấp",

    subtitle: "Luxury Collection",

    description:
      "Kho váy cưới, vest và phụ kiện được tuyển chọn với nhiều phong cách hiện đại.",

    story:
      "DO Wedding sở hữu bộ sưu tập váy cưới và vest cưới đa dạng, từ phong cách tối giản đến sang trọng. Tất cả đều được lựa chọn kỹ lưỡng nhằm giúp cô dâu và chú rể tự tin nhất trong ngày trọng đại.",

    price: "Liên hệ",

    cover: "/images/service2.jpg",

    gallery: [
      "/images/service2.jpg",
      "/images/album/album4.jpg",
      "/images/album/album5.jpg",
      "/images/album/album6.jpg",
    ],

    includes: [
      "Thử váy không giới hạn",
      "Vest cao cấp",
      "Phụ kiện cưới",
      "Tư vấn stylist",
      "Điều chỉnh theo số đo",
      "Hỗ trợ trong ngày cưới",
    ],

    featured: false,
  },

  {
    id: 3,

    slug: "wedding-day",

    title: "Wedding Day",

    subtitle: "Photo • Cinema",

    description:
      "Quay phim và chụp ảnh ngày cưới theo phong cách điện ảnh cao cấp.",

    story:
      "Đội ngũ nhiếp ảnh gia và quay phim sẽ theo sát toàn bộ ngày cưới để ghi lại những khoảnh khắc chân thật nhất. Từ lễ gia tiên, lễ cưới đến tiệc tối đều được lưu giữ bằng hình ảnh và thước phim đầy cảm xúc.",

    price: "Liên hệ",

    cover: "/images/service3.jpg",

    gallery: [
      "/images/service3.jpg",
      "/images/album/album1.jpg",
      "/images/album/album5.jpg",
      "/images/album/album6.jpg",
    ],

    includes: [
      "Quay phim 4K",
      "Chụp ảnh Wedding Day",
      "Flycam",
      "Highlight Film",
      "Album ảnh ngày cưới",
      "Bàn giao toàn bộ dữ liệu",
    ],

    featured: false,
  },
];