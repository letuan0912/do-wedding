import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await connectDB();

    const totalContacts = await Contact.countDocuments();

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const todayContacts = await Contact.countDocuments({
      createdAt: {
        $gte: startOfToday,
      },
    });

    const latestContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5);

    return NextResponse.json({
      success: true,

      totalContacts,

      todayContacts,

      pendingContacts: totalContacts,

      completedContacts: 0,

      latestContacts,
    });
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