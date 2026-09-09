import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Banner from "@/models/Banner";

export async function GET() {
  try {
    await connectDB();

    const banner = await Banner.findOne({
      isPublished: true,
    })
      .sort({
        sortOrder: 1,
      })
      .lean();

    return NextResponse.json({
      success: true,
      data: banner,
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