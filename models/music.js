const mongoose = require("mongoose");

const playListSchema = new mongoose.Schema(
  {
    song: {
      type: String,
    },
    image: {
      type: String,
    },
    mood: {
      type: String,
    },
    songName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const playList = mongoose.model("playList", playListSchema);
module.exports = playList;
