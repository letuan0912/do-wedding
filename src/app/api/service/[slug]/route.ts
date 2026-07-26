import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Service from "@/models/Service";
import Package from "@/models/Package";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

    const service = await Service.findOne({
      slug,
      published: true,
    }).lean();

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

    const packages = await Package.find({
      serviceId: service._id,
      published: true,
    })
      .sort({
        sortOrder: 1,
        createdAt: -1,
      })
      .lean();

    return NextResponse.json({
      success: true,
      data: {
        service,
        packages,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra.",
      },
      {
        status: 500,
      }
    );
  }
}