import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Setting from "@/models/Setting";

export async function GET() {
  try {
    await connectDB();

    let setting = await Setting.findOne();

    if (!setting) {
      setting = await Setting.create({});
    }

    return NextResponse.json({
      success: true,
      data: setting,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tải cài đặt.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    let setting = await Setting.findOne();

    if (!setting) {
      setting = await Setting.create(body);
    } else {
      Object.assign(setting, body);

      await setting.save();
    }

    return NextResponse.json({
      success: true,
      data: setting,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể lưu cài đặt.",
      },
      {
        status: 500,
      }
    );
  }
}