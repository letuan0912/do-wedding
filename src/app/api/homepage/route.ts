import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import HomePage from "@/models/HomePage";

export async function GET() {
  try {
    await connectDB();

    let homepage = await HomePage.findOne().lean();

    if (!homepage) {
      const created = await HomePage.create({
        heroBadge: "Nghệ Thuật Kể Chuyện Bằng Hình Ảnh",
        heroTitle1: "Mỗi Khoảnh Khắc",
        heroHighlight: "Đều Là",
        heroTitle2: "Một Kiệt Tác.",
        heroDescription:
          "Lưu giữ những khoảnh khắc chân thật bằng ánh sáng, cảm xúc và ngôn ngữ điện ảnh để mỗi bộ ảnh trở thành một tác phẩm vượt thời gian.",

        heroBackground: "",
        heroPoster: "",
        heroVideo: "",

        heroPrimaryButtonText: "Đặt lịch tư vấn",
        heroPrimaryButtonLink: "/lien-he",

        heroSecondaryButtonText: "Xem Showreel",
        heroSecondaryButtonLink: "#",

        aboutSubtitle: "DO WEDDING",
        aboutTitle: "Mỗi Cặp Đôi Đều Có Một Câu Chuyện Riêng",
        aboutDescription:
          "Chúng tôi tin rằng mỗi ánh nhìn, mỗi nụ cười và từng khoảnh khắc đều xứng đáng được lưu giữ bằng những khung hình giàu cảm xúc. DO WEDDING đồng hành cùng bạn để kể lại câu chuyện tình yêu theo cách chân thật và tinh tế nhất.",

        aboutImage1: "",
        aboutImage2: "",

        timelineSubtitle: "QUY TRÌNH",
        timelineTitle:
          "Đồng Hành Cùng Bạn Từ Ý Tưởng Đến Kỷ Niệm",

        timelineSteps: [
          {
            number: "01",
            title: "Tư Vấn",
            description:
              "Lắng nghe mong muốn, tư vấn concept, địa điểm và gói dịch vụ phù hợp.",
          },
          {
            number: "02",
            title: "Lên Concept",
            description:
              "Xây dựng ý tưởng, lựa chọn trang phục, makeup và chuẩn bị lịch trình.",
          },
          {
            number: "03",
            title: "Chụp & Quay",
            description:
              "Thực hiện buổi chụp với đội ngũ nhiếp ảnh và quay phim chuyên nghiệp.",
          },
          {
            number: "04",
            title: "Hậu Kỳ",
            description:
              "Chỉnh màu, retouch ảnh và dựng Wedding Film theo phong cách điện ảnh.",
          },
          {
            number: "05",
            title: "Bàn Giao",
            description:
              "Hoàn thiện album, video và bàn giao toàn bộ sản phẩm đúng tiến độ.",
          },
        ],
      });

      homepage = created.toObject();
    }

    return NextResponse.json({
      success: true,
      data: homepage,
    });
  } catch (error: any) {
    console.error("HOMEPAGE API ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Có lỗi xảy ra",
        stack:
          process.env.NODE_ENV === "development"
            ? error?.stack
            : undefined,
      },
      {
        status: 500,
      }
    );
  }
}