import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Banner from "@/models/Banner";

export async function GET() {
  try {
    await connectDB();

    const banners = await Banner.find()
      .sort({
        sortOrder: 1,
        createdAt: -1,
      })
      .lean();

    return NextResponse.json({
      success: true,
      data: banners,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tải Banner",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const banner = await Banner.create({
      title: body.title,
      subtitle: body.subtitle,
      description: body.description,
      image: body.image,
      buttonText: body.buttonText,
      buttonLink: body.buttonLink,
      isPublished: body.isPublished,
      sortOrder: body.sortOrder,
    });

    return NextResponse.json({
      success: true,
      data: banner,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tạo Banner",
      },
      {
        status: 500,
      }
    );
  }
}