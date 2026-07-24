import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Album from "@/models/Album";
import slugify from "slugify";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const album = await Album.findById(id);

    if (!album) {
      return NextResponse.json(
        {
          success: false,
          message: "Không tìm thấy Album",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: album,
    });
  } catch (error) {
    console.error("GET Album Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    // Nếu đổi tên Album thì tự tạo slug mới
    if (body.title) {
      body.slug = slugify(body.title, {
        lower: true,
        strict: true,
        locale: "vi",
      });
    }

    const album = await Album.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!album) {
      return NextResponse.json(
        {
          success: false,
          message: "Không tìm thấy Album",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: album,
    });
  } catch (error) {
    console.error("PATCH Album Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Cập nhật Album thất bại",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const album = await Album.findByIdAndDelete(id);

    if (!album) {
      return NextResponse.json(
        {
          success: false,
          message: "Không tìm thấy Album",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Đã xóa Album",
    });
  } catch (error) {
    console.error("DELETE Album Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Xóa Album thất bại",
      },
      {
        status: 500,
      }
    );
  }
}