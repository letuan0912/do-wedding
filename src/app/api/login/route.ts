import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

const JWT_SECRET =
  process.env.JWT_SECRET || "dowedding-secret";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { username, password } = await req.json();

    const admin = await Admin.findOne({
      username,
    });

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Sai tài khoản hoặc mật khẩu",
        },
        {
          status: 401,
        }
      );
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Sai tài khoản hoặc mật khẩu",
        },
        {
          status: 401,
        }
      );
    }

    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const response = NextResponse.json({
      success: true,
      message: "Đăng nhập thành công",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error(error);

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