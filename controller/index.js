const Music = require("../models/music");
module.exports.index = async (req, res) => {
  const { mood, playlist, image } = req.body;
  let music = await Music.create({
    mood: mood,
    playlist: playlist,
    image: image,
  });
  return res.json(201, {
    music: music,
  });
};
const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
module.exports.getMood = async (req, res) => {
  // let { mood: mood } = req.body;
  // mood = capitalizeFirstLetter(mood);
  // let playlist = await Music.findOne({ mood: mood });
  // return res.json(200, {
  //   playlist: playlist,
  // });
  return res.send("welcome");
};
