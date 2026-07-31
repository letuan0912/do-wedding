import mongoose, { Schema, models, model } from "mongoose";

const BookingSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    weddingDate: {
      type: String,
      default: "",
    },

    service: {
      type: String,
      default: "",
    },

    note: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Booking ||
  model("Booking", BookingSchema);