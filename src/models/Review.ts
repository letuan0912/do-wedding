import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "",
    },

    content: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 5,
    },

    published: {
      type: Boolean,
      default: true,
    },

    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Review ||
  model("Review", ReviewSchema);