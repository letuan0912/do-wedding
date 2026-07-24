import mongoose, {
  Schema,
  models,
  model,
} from "mongoose";

const PackageSchema = new Schema(
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
      trim: true,
    },

    serviceId: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    category: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    salePrice: {
      type: Number,
      default: 0,
    },

    deposit: {
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

    features: {
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
  },
  {
    timestamps: true,
  }
);

export default models.Package ||
  model("Package", PackageSchema);