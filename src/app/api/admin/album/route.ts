import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Album from "@/models/Album";
import slugify from "slugify";

export async function GET() {
  try {
    await connectDB();

    const albums = await Album.find().sort({
      sortOrder: 1,
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      data: albums,
    });
  } catch (error) {
    console.error("GET Albums Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể lấy danh sách Album",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const slug = slugify(body.title, {
      lower: true,
      strict: true,
      locale: "vi",
    });

    const existed = await Album.findOne({
      slug,
    });

    if (existed) {
      return NextResponse.json(
        {
          success: false,
          message: "Album đã tồn tại",
        },
        {
          status: 400,
        }
      );
    }

    const album = await Album.create({
      title: body.title,
      slug,
      description: body.description ?? "",
      category: body.category ?? "Studio",
      cover: body.cover,
      images: body.images ?? [],
      featured: body.featured ?? false,
      isPublished: body.isPublished ?? true,
      sortOrder: body.sortOrder ?? 0,
    });

    return NextResponse.json({
      success: true,
      data: album,
    });
  } catch (error) {
    console.error("POST Album Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Tạo Album thất bại",
      },
      {
        status: 500,
      }
    );
  }
}