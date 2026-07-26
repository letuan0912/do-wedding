import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/mongodb";
import Package from "@/models/Package";

export async function PUT(
  req: NextRequest,
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

    const body = await req.json();

    const { id } = await params;

    if (
      !body.title ||
      !body.slug ||
      !body.serviceId
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Vui lòng nhập đầy đủ thông tin.",
        },
        {
          status: 400,
        }
      );
    }

    const existed =
      await Package.findOne({
        slug: body.slug,
        _id: {
          $ne: id,
        },
      });

    if (existed) {
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

    const updated =
      await Package.findByIdAndUpdate(
        id,
        {
          ...body,
          price:
            Number(body.price) || 0,
          salePrice:
            Number(body.salePrice) ||
            0,
          deposit:
            Number(body.deposit) ||
            0,
          sortOrder:
            Number(
              body.sortOrder
            ) || 0,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updated) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Không tìm thấy gói dịch vụ.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Cập nhật thành công.",
      data: updated,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Không thể cập nhật gói.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
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

    const { id } =
      await params;

    const deleted =
      await Package.findByIdAndDelete(
        id
      );

    if (!deleted) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Không tìm thấy gói dịch vụ.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Đã xóa gói dịch vụ.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Không thể xóa gói.",
      },
      {
        status: 500,
      }
    );
  }
}