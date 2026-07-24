export interface Pricing {
  _id?: string;

  title: string;
  slug: string;

  category:
    | "studio"
    | "dalat"
    | "phimtruong"
    | "prewedding"
    | "weddingday"
    | "dress";

  shortDescription: string;
  content: string;

  cover: string;
  gallery: string[];

  features: string[];

  price: number;
  oldPrice?: number;

  badge?: string;

  duration?: string;
  deliveryTime?: string;

  locations: string[];

  featured: boolean;
  published: boolean;

  sortOrder: number;

  seoTitle?: string;
  seoDescription?: string;

  createdAt?: string;
  updatedAt?: string;
}