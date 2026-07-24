import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Album from "@/models/Album";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  try {
    await connectDB();

    const { slug } = await params;

    const current = await Album.findOne({
      slug,
    });

    if (!current) {
      return NextResponse.json({
        success: true,
        data: [],
      });
    }

    const albums = await Album.find({
      category: current.category,
      slug: {
        $ne: slug,
      },
      isPublished: true,
    })
      .limit(3)
      .sort({
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      data: albums,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}