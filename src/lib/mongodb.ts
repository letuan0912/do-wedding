import mongoose from "mongoose";

import { seedAlbumCategory } from "./seedAlbumCategory";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable"
  );
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(
      MONGODB_URI,
      {
        autoIndex: true,
      }
    );
  }

  cached.conn = await cached.promise;

  // =========================
  // Seed Album Category
  // =========================

  try {
    await seedAlbumCategory();
  } catch (error) {
    console.error(
      "Seed Album Category:",
      error
    );
  }

  return cached.conn;
}