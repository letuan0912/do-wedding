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

  createdAt: string;

  updatedAt: string;
};

export type AlbumCategory = {
  _id: string;

  name: string;

  slug: string;

  sortOrder: number;

  published: boolean;

  createdAt: string;

  updatedAt: string;
};

export type AlbumPagination = {
  page: number;

  limit: number;

  total: number;

  totalPages: number;
};

export type AlbumResponse = {
  success: boolean;

  data: Album[];

  pagination?: AlbumPagination;
};

export type AlbumCategoryResponse = {
  success: boolean;

  data: AlbumCategory[];
};

export type ApiResponse<T> = {
  success: boolean;

  data?: T;

  message?: string;
};