import { Schema, models, model } from "mongoose";

const ServiceSchema = new Schema(
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
      lowercase: true,
      trim: true,
    },

    // ========= CONTENT =========

    subtitle: {
      type: String,
      default: "",
      trim: true,
    },

    shortDescription: {
      type: String,
      default: "",
      trim: true,
    },

    story: {
      type: String,
      default: "",
    },

    content: {
      type: String,
      default: "",
    },

    price: {
      type: String,
      default: "",
      trim: true,
    },

    // ========= IMAGES =========

    thumbnail: {
      type: String,
      default: "",
    },

    cover: {
      type: String,
      default: "",
    },

    banner: {
      type: String,
      default: "",
    },

    mobileBanner: {
      type: String,
      default: "",
    },

    gallery: {
      type: [String],
      default: [],
    },

    icon: {
      type: String,
      default: "",
    },

    // ========= FEATURES =========

    includes: {
      type: [String],
      default: [],
    },

    // ========= SEO =========

    seoTitle: {
      type: String,
      default: "",
      trim: true,
    },

    seoDescription: {
      type: String,
      default: "",
      trim: true,
    },

    seoKeywords: {
      type: [String],
      default: [],
    },

    // ========= SETTINGS =========

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
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Service ||
  model("Service", ServiceSchema);