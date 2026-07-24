export type Package = {
  _id: string;

  title: string;

  slug: string;

  serviceId: string;

  category: string;

  description: string;

  price: number;

  salePrice?: number;

  deposit?: number;

  badge?: string;

  duration?: string;

  deliveryTime?: string;

  features: string[];

  featured: boolean;

  published: boolean;

  sortOrder: number;

  createdAt?: string;

  updatedAt?: string;
};