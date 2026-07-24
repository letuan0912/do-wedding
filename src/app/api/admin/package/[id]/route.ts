import {
  NextRequest,
  NextResponse,
} from "next/server";

import connectDB from "@/lib/mongodb";

import Package from "@/models/Package";

export async function PATCH(
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

    const body =
      await req.json();

    const { id } =
      await params;

    const updated =
      await Package.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
        }
      );

    if (!updated) {
      return NextResponse.json({
        success: false,
        message:
          "Không tìm thấy gói",
      });
    }

    return NextResponse.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Cập nhật thất bại",
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

    await Package.findByIdAndDelete(
      id
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Xóa thất bại",
      },
      {
        status: 500,
      }
    );
  }
}