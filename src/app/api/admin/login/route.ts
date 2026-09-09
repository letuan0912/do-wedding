import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    const {
      username,
      password,
    } = await req.json();

    const admin =
      await Admin.findOne({
        username,
      });

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Sai tài khoản hoặc mật khẩu.",
        },
        {
          status: 401,
        }
      );
    }

    const match =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!match) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Sai tài khoản hoặc mật khẩu.",
        },
        {
          status: 401,
        }
      );
    }

    const response =
      NextResponse.json({
        success: true,
      });

    response.cookies.set(
      "admin-token",
      admin._id.toString(),
      {
        httpOnly: true,
        path: "/",
        maxAge:
          60 * 60 * 24 * 7,
      }
    );

    return response;

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Có lỗi xảy ra.",
      },
      {
        status: 500,
      }
    );
  }
}