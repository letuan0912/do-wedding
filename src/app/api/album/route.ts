import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Album from "@/models/Album";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const page = Math.max(
      Number(searchParams.get("page")) || 1,
      1
    );

    const limit = Math.max(
      Number(searchParams.get("limit")) || 9,
      1
    );

    const category =
      searchParams.get("category") || "all";

    const search =
      searchParams.get("search")?.trim() || "";

    const sort =
      searchParams.get("sort") || "newest";

    const query: Record<string, unknown> = {
      isPublished: true,
    };

    if (category !== "all") {
      query.category = category;
    }

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    let sortOption: Record<string, 1 | -1> = {
      createdAt: -1,
    };

    switch (sort) {
      case "oldest":
        sortOption = {
          createdAt: 1,
        };
        break;

      case "featured":
        query.featured = true;
        sortOption = {
          createdAt: -1,
        };
        break;

      default:
        sortOption = {
          createdAt: -1,
        };
    }

    const total = await Album.countDocuments(query);

    const albums = await Album.find(query)
      .sort(sortOption)
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
        totalPages: Math.max(
          Math.ceil(total / limit),
          1
        ),
      },
    });
  } catch (error) {
    console.error("Album API:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tải danh sách album.",
      },
      {
        status: 500,
      }
    );
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const album = await Album.create({
      title: body.title,
      slug: slugify(body.title),
      description: body.description,
      category: body.category,
      cover: body.cover,
      images: body.images,
      featured: body.featured ?? false,
      isPublished: body.isPublished ?? true,
      sortOrder: body.sortOrder ?? 0,
    });

    return NextResponse.json({
      success: true,
      data: album,
    });
  } catch (error) {
    console.error("Create Album:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tạo Album.",
      },
      {
        status: 500,
      }
    );
  }
}