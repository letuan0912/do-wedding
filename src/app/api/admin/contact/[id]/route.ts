import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

// Đánh dấu đã xử lý
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const contact = await Contact.findByIdAndUpdate(
      id,
      {
        status: "done",
      },
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("PATCH Contact Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Cập nhật thất bại",
      },
      {
        status: 500,
      }
    );
  }
}

// Xóa liên hệ
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    await Contact.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Đã xóa liên hệ",
    });
  } catch (error) {
    console.error("DELETE Contact Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Xóa thất bại",
      },
      {
        status: 500,
      }
    );
  }
}