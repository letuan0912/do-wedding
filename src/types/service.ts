export type Service = {
  _id: string;

  // ========= BASIC =========

  title: string;
  slug: string;

  subtitle: string;

  shortDescription: string;

  story: string;

  content: string;

  price: string;

  

  // ========= IMAGES =========

  thumbnail: string;

  cover: string;

  banner: string;

  mobileBanner: string;

  gallery: string[];

  icon: string;

  // ========= FEATURES =========

  includes: string[];

  // ========= SEO =========

  seoTitle: string;

  seoDescription: string;

  seoKeywords: string[];

  // ========= SETTINGS =========

  featured: boolean;

  published: boolean;

  sortOrder: number;

  // ========= EXTRA =========

  packageCount?: number;

  createdAt?: string;

  updatedAt?: string;
};