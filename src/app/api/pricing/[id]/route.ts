import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Pricing from "@/models/Pricing";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: Params
) {
  await connectDB();

  const { id } = await params;

  const pricing = await Pricing.findById(id);

  return NextResponse.json({
    success: true,
    data: pricing,
  });
}

export async function PUT(
  request: Request,
  { params }: Params
) {
  await connectDB();

  const { id } = await params;

  const body = await request.json();

  const pricing =
    await Pricing.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

  return NextResponse.json({
    success: true,
    data: pricing,
  });
}

export async function DELETE(
  request: Request,
  { params }: Params
) {
  await connectDB();

  const { id } = await params;

  await Pricing.findByIdAndDelete(id);

  return NextResponse.json({
    success: true,
  });
}