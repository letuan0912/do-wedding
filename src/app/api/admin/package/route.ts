import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Package from "@/models/Package";

export async function GET() {
  try {
    await connectDB();

    const packages = await Package.find()
      .populate("serviceId", "title slug")
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
        message: "Không thể tải danh sách gói dịch vụ.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      title,
      slug,
      serviceId,
      price,
    } = body;

    if (!title || !slug || !serviceId) {
      return NextResponse.json(
        {
          success: false,
          message: "Vui lòng nhập đầy đủ thông tin bắt buộc.",
        },
        {
          status: 400,
        }
      );
    }

    const existed = await Package.findOne({
      slug,
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

    const packageItem =
      await Package.create({
        ...body,
        price: Number(price) || 0,
        salePrice:
          Number(body.salePrice) || 0,
        deposit:
          Number(body.deposit) || 0,
        sortOrder:
          Number(body.sortOrder) || 0,
      });

    return NextResponse.json(
      {
        success: true,
        message: "Thêm gói dịch vụ thành công.",
        data: packageItem,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tạo gói dịch vụ.",
      },
      {
        status: 500,
      }
    );
  }
}