import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import HomePage from "@/models/HomePage";

export async function GET() {
  try {
    await connectDB();

    let homepage = await HomePage.findOne().lean();

    if (!homepage) {
      const created = await HomePage.create({
        // =========================
        // HERO
        // =========================
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

        // =========================
        // ABOUT
        // =========================
        aboutSubtitle: "DO WEDDING",

        aboutTitle: "Mỗi Cặp Đôi Đều Có Một Câu Chuyện Riêng",

        aboutDescription:
          "Chúng tôi tin rằng mỗi ánh nhìn, mỗi nụ cười và từng khoảnh khắc đều xứng đáng được lưu giữ bằng những khung hình giàu cảm xúc. DO WEDDING đồng hành cùng bạn để kể lại câu chuyện tình yêu theo cách chân thật và tinh tế nhất.",

        aboutImage1: "",

        aboutImage2: "",
      });

      homepage = created.toObject();
    }

    return NextResponse.json({
      success: true,
      data: homepage,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra.",
      },
      {
        status: 500,
      }
    );
  }
}