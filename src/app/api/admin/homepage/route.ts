import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import HomePage from "@/models/HomePage";

export async function PUT(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    let homepage = await HomePage.findOne();

    if (!homepage) {
      homepage = await HomePage.create({});
    }

    Object.assign(homepage, body);

    await homepage.save();

    return NextResponse.json({
      success: true,
      data: homepage,
      message: "Cập nhật trang chủ thành công.",
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