import { NextResponse } from "next/server";
import slugify from "slugify";

import { connectDB } from "@/lib/mongodb";

import AlbumCategory from "@/models/AlbumCategory";

export async function GET() {

  try {

    await connectDB();

    const categories =
      await AlbumCategory.find({
        published: true,
      })
        .sort({
          sortOrder: 1,
          name: 1,
        })
        .lean();

    return NextResponse.json({
      success: true,
      data: categories,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Không thể tải danh mục.",
      },
      {
        status: 500,
      }
    );

  }

}

export async function POST(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

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
      });

    if (existed) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Danh mục đã tồn tại.",
        },
        {
          status: 400,
        }
      );

    }
        const category =
      await AlbumCategory.create({

        name:
          body.name.trim(),

        slug,

        sortOrder:
          body.sortOrder ?? 0,

        published:
          body.published ??
          true,

      });

    return NextResponse.json({

      success: true,

      data: category,

    });

  } catch (error) {

    console.error(
      "Create AlbumCategory:",
      error
    );

    return NextResponse.json(

      {
        success: false,
        message:
          "Không thể tạo danh mục.",
      },

      {
        status: 500,
      }

    );

  }

}