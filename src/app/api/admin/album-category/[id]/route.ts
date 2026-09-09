import { NextResponse } from "next/server";
import slugify from "slugify";

import { connectDB } from "@/lib/mongodb";

import Album from "@/models/Album";
import AlbumCategory from "@/models/AlbumCategory";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    await connectDB();

    const { id } = await params;

    const category =
      await AlbumCategory.findById(id);

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Không tìm thấy danh mục.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error(
      "GET AlbumCategory:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Có lỗi xảy ra.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    await connectDB();

    const { id } = await params;

    const body =
      await req.json();

    if (!body.name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Tên danh mục không được để trống.",
        },
        {
          status: 400,
        }
      );
    }

    const slug = slugify(
      body.name,
      {
        lower: true,
        strict: true,
        locale: "vi",
      }
    );

    const existed =
      await AlbumCategory.findOne({
        slug,
        _id: {
          $ne: id,
        },
      });

    if (existed) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Tên danh mục đã tồn tại.",
        },
        {
          status: 400,
        }
      );
    }

    const category =
      await AlbumCategory.findByIdAndUpdate(
        id,
        {
          name: body.name.trim(),
          slug,
          sortOrder:
            body.sortOrder ?? 0,
          published:
            body.published ??
            true,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Không tìm thấy danh mục.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error(
      "PATCH AlbumCategory:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Không thể cập nhật danh mục.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    await connectDB();

    const { id } = await params;

    const category =
      await AlbumCategory.findById(id);

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Không tìm thấy danh mục.",
        },
        {
          status: 404,
        }
      );
    }

    const used =
      await Album.countDocuments({
        category: category.slug,
      });

    if (used > 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            `Không thể xóa. Danh mục đang được ${used} Album sử dụng.`,
        },
        {
          status: 400,
        }
      );
    }

    await category.deleteOne();

    return NextResponse.json({
      success: true,
      message:
        "Đã xóa danh mục.",
    });
  } catch (error) {
    console.error(
      "DELETE AlbumCategory:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Không thể xóa danh mục.",
      },
      {
        status: 500,
      }
    );
  }
}