import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Album from "@/models/Album";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await connectDB();

    const [
      totalAlbums,
      featuredAlbums,
      publishedAlbums,
      totalContacts,
    ] = await Promise.all([
      Album.countDocuments(),
      Album.countDocuments({ featured: true }),
      Album.countDocuments({ isPublished: true }),
      Contact.countDocuments(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        totalAlbums,
        featuredAlbums,
        publishedAlbums,
        totalContacts,
      },
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