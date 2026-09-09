import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Album from "@/models/Album";
import Service from "@/models/Service";
import Contact from "@/models/Contact";
import Booking from "@/models/Booking";

export async function GET() {
  try {
    await connectDB();

    const [
      totalAlbums,
      featuredAlbums,
      publishedAlbums,

      totalServices,
      totalBookings,
      totalContacts,

      latestAlbums,
      latestBookings,
      latestContacts,
    ] = await Promise.all([
      Album.countDocuments(),

      Album.countDocuments({
        featured: true,
      }),

      Album.countDocuments({
        isPublished: true,
      }),

      Service.countDocuments(),

      Booking.countDocuments(),

      Contact.countDocuments(),

      Album.find()
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .lean(),

      Booking.find()
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .lean(),

      Contact.find()
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .lean(),
    ]);

    return NextResponse.json({
      success: true,

      data: {
        totalAlbums,
        featuredAlbums,
        publishedAlbums,

        totalServices,
        totalBookings,
        totalContacts,

        latestAlbums,
        latestBookings,
        latestContacts,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tải Dashboard.",
      },
      {
        status: 500,
      }
    );
  }
}