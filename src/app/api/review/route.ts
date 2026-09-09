import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Review from "@/models/Review";

export async function GET() {
  try {
    await connectDB();

    const reviews = await Review.find({
      published: true,
    })
      .sort({
        sortOrder: 1,
        createdAt: -1,
      })
      .lean();

    return NextResponse.json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không tải được đánh giá.",
      },
      {
        status: 500,
      }
    );
  }
}