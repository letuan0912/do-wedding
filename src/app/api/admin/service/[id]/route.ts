import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import Package from "@/models/Package";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    if (!body.title || !body.slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Vui lòng nhập đầy đủ thông tin.",
        },
        {
          status: 400,
        }
      );
    }

    const existed = await Service.findOne({
      slug: body.slug,
      _id: { $ne: id },
    });

    if (existed) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug đã tồn tại.",
        },
        {
          status: 409,
        }
      );
    }

    const service = await Service.findByIdAndUpdate(
      id,
      {
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
},
      {
        new: true,
        runValidators: true,
      }
    );

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Không tìm thấy dịch vụ.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Cập nhật dịch vụ thành công.",
      data: service,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể cập nhật dịch vụ.",
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

    const service = await Service.findById(id);

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Không tìm thấy dịch vụ.",
        },
        {
          status: 404,
        }
      );
    }

    const packageCount = await Package.countDocuments({
      serviceId: id,
    });

    if (packageCount > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Không thể xóa. Dịch vụ đang có ${packageCount} gói dịch vụ.`,
          packageCount,
        },
        {
          status: 409,
        }
      );
    }

    await Service.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Đã xóa dịch vụ.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể xóa dịch vụ.",
      },
      {
        status: 500,
      }
    );
  }
}