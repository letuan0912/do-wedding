export type Service = {
  _id: string;

  title: string;

  slug: string;

  description: string;

  content: string;

  price: number;

  cover: string;

  gallery: string[];

  featured: boolean;

  published: boolean;

  sortOrder: number;

  createdAt?: string;

  updatedAt?: string;
};