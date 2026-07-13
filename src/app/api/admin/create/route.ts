import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  await connectDB();

  const exist = await Admin.findOne({
    username: "admin",
  });

  if (exist) {
    return NextResponse.json({
      message: "Admin đã tồn tại",
    });
  }

  const password = await bcrypt.hash(
    "123456",
    10
  );

  await Admin.create({
    username: "admin",
    password,
  });

  return NextResponse.json({
    message: "Tạo admin thành công",
  });
}