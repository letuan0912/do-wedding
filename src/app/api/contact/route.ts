import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

// Lấy danh sách khách hàng
export async function GET() {
  try {
    await connectDB();

    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("Mongo Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Có lỗi xảy ra",
      },
      {
        status: 500,
      }
    );
  }
}

// Gửi thông tin liên hệ
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const contact = await Contact.create({
      name: body.name,
      phone: body.phone,
      email: body.email,
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Mongo Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Có lỗi xảy ra",
      },
      {
        status: 500,
      }
    );
  }
}