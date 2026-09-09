import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const exist = await Admin.findOne({
      username: "admin",
    });

    if (exist) {
      return NextResponse.json({
        success: true,
        message: "Đã có tài khoản.",
      });
    }

    const password =
      await bcrypt.hash(
        "123456",
        10
      );

    await Admin.create({
      username: "admin",
      password,
      name: "Administrator",
    });

    return NextResponse.json({
      success: true,
      message:
        "Khởi tạo Admin thành công.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}