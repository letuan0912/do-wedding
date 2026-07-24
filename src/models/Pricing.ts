import mongoose, { Schema, models, model } from "mongoose";

const PricingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    category: {
      type: String,
      enum: [
        "studio",
        "dalat",
        "phimtruong",
        "prewedding",
        "weddingday",
        "dress",
      ],
      default: "studio",
    },

    shortDescription: {
      type: String,
      default: "",
    },

    content: {
      type: String,
      default: "",
    },

    cover: {
      type: String,
      default: "",
    },

    gallery: {
      type: [String],
      default: [],
    },

    features: {
      type: [String],
      default: [],
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    oldPrice: {
      type: Number,
      default: 0,
    },

    badge: {
      type: String,
      default: "",
    },

    duration: {
      type: String,
      default: "",
    },

    deliveryTime: {
      type: String,
      default: "",
    },

    locations: {
      type: [String],
      default: [],
    },

    featured: {
      type: Boolean,
      default: false,
    },

    published: {
      type: Boolean,
      default: true,
    },

    sortOrder: {
      type: Number,
      default: 0,
    },

    seoTitle: {
      type: String,
      default: "",
    },

    seoDescription: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Pricing ||
  model("Pricing", PricingSchema);