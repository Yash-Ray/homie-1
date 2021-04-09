const express = require("express");
const index = require("../controller/index");
const router = express.Router();
router.post("/", index.index);
router.get("/getMood", index.getMood);
module.exports = router;
