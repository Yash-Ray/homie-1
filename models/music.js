const mongoose = require("mongoose");

const playListSchema = new mongoose.Schema(
  {
    playlist: {
      type: String,
    },
    image: {
      type: String,
    },
    mood: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const playList = mongoose.model("playList", playListSchema);
module.exports = playList;
