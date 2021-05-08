const Music = require("../models/music");
const Moods = require("../models/moods");
module.exports.index = async (req, res) => {
  // const { mood, song, image, songName } = req.body;

  // let music = await Music.create({
  //   mood: mood,
  //   song: song,
  //   image: image,
  //   songName: songName,
  // });
  // const { mood, dos, donts } = req.body;
  // console.log([...dos]);
  // let moods = await Moods.create({
  //   mood: mood,
  //   dos: [...dos],
  //   donts: [...donts],
  // });
  return res.render("home.ejs");
  // return res.json(201, {
  //   moods: moods,
  // });
};
const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
module.exports.getMood = async (req, res) => {
  let { mood: mood } = req.query;
  let playlist = await Music.find({ mood: mood });
  let moods = await Moods.find({ mood: mood });
  return res.json(200, {
    playlist: playlist,
    moods: moods,
  });
};
