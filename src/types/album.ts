export type Album = {
  _id: string;

  title: string;

  slug: string;

  description: string;

  category: string;

  cover: string;

  images: string[];

  featured: boolean;

  isPublished: boolean;

  sortOrder: number;

  createdAt?: string;

  updatedAt?: string;
};