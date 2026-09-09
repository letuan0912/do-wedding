import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Review from "@/models/Review";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(
  req: NextRequest,
  { params }: Props
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const review = await Review.findByIdAndUpdate(
      id,
      {
        name: body.name,
        location: body.location,
        content: body.content,
        avatar: body.avatar,
        image: body.image,
        rating: body.rating,
        published: body.published,
        sortOrder: body.sortOrder,
      },
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      data: review,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể cập nhật đánh giá.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: Props
) {
  try {
    await connectDB();

    const { id } = await params;

    await Review.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Đã xóa đánh giá.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể xóa đánh giá.",
      },
      {
        status: 500,
      }
    );
  }
}