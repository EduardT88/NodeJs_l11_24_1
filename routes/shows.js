const express = require("express");
const router = express.Router();
const { showModel } = require("../models/showModel");

//הגדרת ראוטר שך הרואט שנגדיר באפ
router.get("/", async (req, res) => {
  try {
    const data = await showModel.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err: "there problem, try again later" });
  }
});

module.exports = router;
