import { Schema, model, models } from "mongoose";

const AlbumCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    sortOrder: {
      type: Number,
      default: 0,
    },

    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const AlbumCategory =
  models.AlbumCategory ||
  model(
    "AlbumCategory",
    AlbumCategorySchema
  );

export default AlbumCategory;