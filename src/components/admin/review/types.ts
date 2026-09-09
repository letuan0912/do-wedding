export interface Review {
  _id: string;

  name: string;

  location: string;

  content: string;

  avatar: string;

  image: string;

  rating: number;

  published: boolean;

  sortOrder: number;

  createdAt: string;
}