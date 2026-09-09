import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Banner from "@/models/Banner";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const banner = await Banner.findByIdAndUpdate(
      id,
      {
        title: body.title,
        subtitle: body.subtitle,
        description: body.description,
        image: body.image,
        buttonText: body.buttonText,
        buttonLink: body.buttonLink,
        isPublished: body.isPublished,
        sortOrder: body.sortOrder,
      },
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      data: banner,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể cập nhật Banner",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    await Banner.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể xóa Banner",
      },
      {
        status: 500,
      }
    );
  }
}