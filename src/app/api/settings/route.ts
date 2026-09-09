import { NextResponse } from "next/server";

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