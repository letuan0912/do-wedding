import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Album from "@/models/Album";

export async function PATCH(req: Request) {
  try {
    await connectDB();

    const { id, field, value } = await req.json();

    if (!["featured", "isPublished"].includes(field)) {
      return NextResponse.json(
        {
          success: false,
          message: "Field không hợp lệ",
        },
        {
          status: 400,
        }
      );
    }

    const album = await Album.findByIdAndUpdate(
      id,
      {
        [field]: value,
      },
      {
        new: true,
      }
    );

    if (!album) {
      return NextResponse.json(
        {
          success: false,
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