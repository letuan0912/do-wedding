import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Album from "@/models/Album";
import slugify from "slugify";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const page = Math.max(
      Number(searchParams.get("page")) || 1,
      1
    );

    const limit = Math.max(
      Number(searchParams.get("limit")) || 10,
      1
    );

    const keyword =
      searchParams.get("search")?.trim() || "";

    const category =
      searchParams.get("category") || "";

    const query: any = {};

    if (keyword) {
      query.title = {
        $regex: keyword,
        $options: "i",
      };
    }

    if (category) {
      query.category =
        category.toLowerCase();
    }

    const total =
      await Album.countDocuments(query);

    const albums = await Album.find(query)
      .sort({
        sortOrder: 1,
        createdAt: -1,
      })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json({
      success: true,

      data: albums,

      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(
          total / limit
        ),
      },
    });

  } catch (error) {

    console.error(
      "GET Albums:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Không thể tải Album.",
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

    const body =
      await req.json();

    const slug = slugify(
      body.title,
      {
        lower: true,
        strict: true,
        locale: "vi",
      }
    );

    const existed =
      await Album.findOne({
        slug,
      });

    if (existed) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Album đã tồn tại.",
        },
        {
          status: 400,
        }
      );
    }

    const album =
      await Album.create({

        title:
          body.title.trim(),

        slug,

        description:
          body.description ?? "",

        category:
          (
            body.category ??
            "studio"
          ).toLowerCase(),

        cover:
          body.cover,

        images:
          body.images ?? [],

        featured:
          body.featured ??
          false,

        isPublished:
          body.isPublished ??
          true,

        sortOrder:
          body.sortOrder ??
          0,

      });

    return NextResponse.json({
      success: true,
      data: album,
    });

  } catch (error) {

    console.error(
      "POST Album:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Không thể tạo Album.",
      },
      {
        status: 500,
      }
    );

  }

}