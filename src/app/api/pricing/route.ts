import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Pricing from "@/models/Pricing";

export async function GET() {
  try {
    await connectDB();

    const pricing = await Pricing.find()
      .sort({ sortOrder: 1, createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: pricing,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Lỗi lấy dữ liệu",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const pricing = await Pricing.create(body);

    return NextResponse.json({
      success: true,
      data: pricing,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Tạo gói thất bại",
      },
      {
        status: 500,
      }
    );
  }
}