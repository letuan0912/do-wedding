import { NextRequest, NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Package from "@/models/Package";

export async function GET() {
  try {
    await connectDB();

    const packages =
      await Package.find()
        .populate("serviceId", "title")
        .sort({
          sortOrder: 1,
          createdAt: -1,
        });

    return NextResponse.json({
      success: true,
      data: packages,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Lỗi tải dữ liệu",
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

    const exist =
      await Package.findOne({
        slug: body.slug,
      });

    if (exist) {
      return NextResponse.json({
        success: false,
        message: "Slug đã tồn tại",
      });
    }

    const packageItem =
      await Package.create(body);

    return NextResponse.json({
      success: true,
      data: packageItem,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Thêm thất bại",
      },
      {
        status: 500,
      }
    );
  }
}