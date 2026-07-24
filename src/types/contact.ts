export type ContactStatus = "pending" | "done";

export type Contact = {
  _id: string;

  name: string;

  phone: string;

  email: string;

  message: string;

  status: ContactStatus;

  createdAt?: string;

  updatedAt?: string;
};