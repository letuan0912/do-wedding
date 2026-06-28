export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  image: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Minh & Linh",
    location: "TP. Hồ Chí Minh",
    avatar: "/images/avatar1.jpg",
    image: "/images/album/album1.jpg",
    content:
      "Đội ngũ cực kỳ chuyên nghiệp. Bộ ảnh đẹp hơn cả mong đợi, mọi khoảnh khắc đều được lưu giữ rất tự nhiên.",
  },
  {
    id: 2,
    name: "Khánh & Vy",
    location: "Đồng Nai",
    avatar: "/images/avatar2.jpg",
    image: "/images/album/album2.jpg",
    content:
      "Concept cực đẹp, ekip vui vẻ và chỉnh ảnh rất nhanh. Chúng mình thật sự rất hài lòng.",
  },
  {
    id: 3,
    name: "Tuấn & Hân",
    location: "Bình Dương",
    avatar: "/images/avatar3.jpg",
    image: "/images/album/album3.jpg",
    content:
      "Nếu cưới thêm lần nữa thì vẫn chọn DO WEDDING. Một trải nghiệm tuyệt vời từ đầu đến cuối.",
  },
];