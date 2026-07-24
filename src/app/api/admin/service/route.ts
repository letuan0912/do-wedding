import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET() {
  try {
    await connectDB();

    const services = await Service.find().sort({
      sortOrder: 1,
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      data: services,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tải danh sách dịch vụ",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const service = await Service.create(body);

    return NextResponse.json({
      success: true,
      data: service,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tạo dịch vụ",
      },
      {
        status: 500,
      }
    );
  }
}