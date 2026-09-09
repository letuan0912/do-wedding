export type Banner = {
  _id: string;

  title: string;
  subtitle: string;
  description: string;

  image: string;
  buttonText: string;
  buttonLink: string;

  isPublished: boolean;
  sortOrder: number;

  createdAt?: string;
  updatedAt?: string;
};