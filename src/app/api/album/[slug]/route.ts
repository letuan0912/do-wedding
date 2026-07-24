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

    const album = await Album.findOne({
      slug,
      isPublished: true,
    });

    if (!album) {
      return NextResponse.json(
        {
          success: false,
          message: "Không tìm thấy Album",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: album,
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