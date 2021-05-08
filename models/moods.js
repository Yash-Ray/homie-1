const mongoose = require("mongoose");

const moodsSchema = new mongoose.Schema(
  {
    mood: {
      type: String,
    },
    dos: [
      {
        type: String,
      },
    ],
    donts: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const moods = mongoose.model("moods", moodsSchema);
module.exports = moods;
