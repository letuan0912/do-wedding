import AlbumCategory from "@/models/AlbumCategory";

const defaultCategories = [
  {
    name: "Studio",
    slug: "studio",
    sortOrder: 1,
    published: true,
  },
  {
    name: "Wedding Day",
    slug: "wedding",
    sortOrder: 2,
    published: true,
  },
  {
    name: "Ngoại cảnh",
    slug: "outdoor",
    sortOrder: 3,
    published: true,
  },
  {
    name: "Đà Lạt",
    slug: "dalat",
    sortOrder: 4,
    published: true,
  },
  {
    name: "Phim Trường",
    slug: "phimtruong",
    sortOrder: 5,
    published: true,
  },
];

export async function seedAlbumCategory() {
  const total =
    await AlbumCategory.countDocuments();

  if (total > 0) return;

  await AlbumCategory.insertMany(
    defaultCategories
  );

  console.log(
    "✓ Seed Album Category completed."
  );
}