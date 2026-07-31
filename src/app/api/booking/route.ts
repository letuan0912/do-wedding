import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function GET() {
  try {
    await connectDB();

    const bookings = await Booking.find()
      .sort({
        createdAt: -1,
      })
      .lean();

    return NextResponse.json({
      success: true,
      data: bookings,
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

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const booking = await Booking.create({
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      facebook: body.facebook,
      weddingDate: body.weddingDate,
      service: body.service,
      note: body.note,
    });

    return NextResponse.json({
      success: true,
      data: booking,
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