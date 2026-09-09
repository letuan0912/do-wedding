import { Schema, model, models } from "mongoose";

const SettingSchema = new Schema(
  {
    websiteName: {
      type: String,
      default: "DO WEDDING",
    },

    logo: {
      type: String,
      default: "",
    },

    favicon: {
      type: String,
      default: "",
    },

    hotline: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },

    tiktok: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },

    googleMap: {
      type: String,
      default: "",
    },

    footer: {
      type: String,
      default: "",
    },

    copyright: {
      type: String,
      default: "",
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

export default models.Setting ||
  model("Setting", SettingSchema);