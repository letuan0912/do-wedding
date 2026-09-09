import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(
  req: NextRequest,
  { params }: Props
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const booking = await Booking.findByIdAndUpdate(
      id,
      {
        status: body.status,
      },
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      data: booking,
    });
  } catch (error) {
    console.error(error);

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

export async function DELETE(
  req: NextRequest,
  { params }: Props
) {
  try {
    await connectDB();

    const { id } = await params;

    await Booking.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

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