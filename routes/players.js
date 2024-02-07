const express = require("express");
const router = express.Router();
const { PlayerModel } = require("../models/playerModel");

//הגדרת ראוטר שך הרואט שנגדיר באפ
router.get("/", async (req, res) => {
  try {
    const data = await PlayerModel.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err: "there problem, try again later" });
  }
  //   res.json({ msg: "players work" });
});

module.exports = router;
