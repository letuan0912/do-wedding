import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Service from "@/models/Service";
import Package from "@/models/Package";

export async function GET() {
  try {
    await connectDB();

    const services = await Service.find()
      .sort({
        sortOrder: 1,
        createdAt: -1,
      })
      .lean();

    const packageCount =
      await Package.aggregate([
        {
          $group: {
            _id: "$serviceId",
            total: {
              $sum: 1,
            },
          },
        },
      ]);

    const countMap = new Map(
      packageCount.map((i) => [
        String(i._id),
        i.total,
      ])
    );

    const data = services.map((item: any) => ({
      ...item,
      packageCount:
        countMap.get(String(item._id)) || 0,
    }));

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message:
          "Không tải được dịch vụ.",
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

    if (
      !body.title ||
      !body.slug
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Thiếu thông tin.",
        },
        {
          status: 400,
        }
      );
    }

    const exist =
      await Service.findOne({
        slug: body.slug,
      });

    if (exist) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Slug đã tồn tại.",
        },
        {
          status: 409,
        }
      );
    }

    const service = await Service.create({
  title: body.title.trim(),
  slug: body.slug.trim(),

  subtitle: body.subtitle ?? "",

  shortDescription: body.shortDescription ?? "",

  story: body.story ?? "",

  content: body.content ?? "",

  price: body.price ?? "",

  thumbnail: body.thumbnail ?? "",

  cover: body.cover ?? "",

  banner: body.banner ?? "",

  mobileBanner: body.mobileBanner ?? "",

  gallery: body.gallery ?? [],

  includes: body.includes ?? [],

  icon: body.icon ?? "",

  seoTitle: body.seoTitle ?? "",

  seoDescription: body.seoDescription ?? "",

  seoKeywords: body.seoKeywords ?? [],

  featured: !!body.featured,

  published: body.published !== false,

  sortOrder: Number(body.sortOrder) || 0,
});

    return NextResponse.json(
      {
        success: true,
        data: service,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message:
          "Không thể tạo dịch vụ.",
      },
      {
        status: 500,
      }
    );
  }
}