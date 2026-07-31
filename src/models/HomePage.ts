import { Schema, models, model } from "mongoose";

const HomePageSchema = new Schema(
  {
    counter1Number: {
  type: Number,
  default: 500,
},
counter1Suffix: {
  type: String,
  default: "+",
},
counter1Label: {
  type: String,
  default: "Cặp đôi",
},

counter2Number: {
  type: Number,
  default: 8,
},
counter2Suffix: {
  type: String,
  default: "+",
},
counter2Label: {
  type: String,
  default: "Năm kinh nghiệm",
},

counter3Number: {
  type: Number,
  default: 1200,
},
counter3Suffix: {
  type: String,
  default: "+",
},
counter3Label: {
  type: String,
  default: "Album hoàn thành",
},

counter4Number: {
  type: Number,
  default: 100,
},
counter4Suffix: {
  type: String,
  default: "%",
},
counter4Label: {
  type: String,
  default: "Khách hài lòng",
},
    // =====================================
    // HERO
    // =====================================

    heroBadge: {
      type: String,
      default: "",
      trim: true,
    },

    heroTitle1: {
      type: String,
      default: "",
      trim: true,
    },

    heroHighlight: {
      type: String,
      default: "",
      trim: true,
    },

    heroTitle2: {
      type: String,
      default: "",
      trim: true,
    },

    heroDescription: {
      type: String,
      default: "",
    },

    heroPrimaryButtonText: {
      type: String,
      default: "",
      trim: true,
    },

    heroPrimaryButtonLink: {
      type: String,
      default: "",
      trim: true,
    },

    heroSecondaryButtonText: {
      type: String,
      default: "",
      trim: true,
    },

    heroSecondaryButtonLink: {
      type: String,
      default: "",
      trim: true,
    },

    heroBackground: {
      type: String,
      default: "",
    },

    heroVideo: {
      type: String,
      default: "",
    },

    heroPoster: {
      type: String,
      default: "",
    },

    // =====================================
    // ABOUT
    // =====================================

    aboutSubtitle: {
      type: String,
      default: "",
      trim: true,
    },

    aboutTitle: {
      type: String,
      default: "",
      trim: true,
    },

    aboutDescription: {
      type: String,
      default: "",
    },

    aboutImage1: {
      type: String,
      default: "",
    },

    aboutImage2: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default models.HomePage ||
  model("HomePage", HomePageSchema);