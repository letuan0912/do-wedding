import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Review from "@/models/Review";

export async function GET() {
  try {
    await connectDB();

    const reviews = await Review.find()
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

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    const body = await req.json();

    const review = await Review.create({
      name: body.name,

      location: body.location ?? "",

      content: body.content,

      avatar: body.avatar ?? "",

      image: body.image ?? "",

      rating: body.rating ?? 5,

      published:
        body.published ?? true,

      sortOrder:
        Number(body.sortOrder) || 0,
    });

    return NextResponse.json(
      {
        success: true,
        data: review,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tạo đánh giá.",
      },
      {
        status: 500,
      }
    );
  }
}