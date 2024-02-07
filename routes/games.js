const express = require("express");
const axios = require("axios");
const router = express.Router();

//הגדרת ראוטר שך הרואט שנגדיר באפ
router.get("/", async (req, res) => {
  try {
    const url = "http://fs1.co.il/bus/xbox1.php";
    const resp = await axios.get(url);
    res.json(resp.data);
  } catch (err) {
    console.log(err);
    //502 - שגיאה בשרת
    res.status(502).json({ err: "there problem, try again later" });
  }
});

router.get("/single/:index", async (req, res) => {
  try {
    const index = req.params.index;
    const url = "http://fs1.co.il/bus/xbox1.php";
    const { data } = await axios.get(url);
    res.json(data[index]);
  } catch (err) {
    console.log(err);
    //502 - שגיאה בשרת
    res.status(502).json({ err: "there problem, try again later" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const sQuery = req.query.s.toLowerCase();
    const url = "http://fs1.co.il/bus/xbox1.php";
    const { data } = await axios.get(url);
    const filter_ar = data.filter((item) => {
      return item.Game.toLowerCase().includes(sQuery);
    });
    res.json(filter_ar);
  } catch (err) {
    console.log(err);
    //502 - שגיאה בשרת
    res.status(502).json({ err: "there problem, try again later" });
  }
});
module.exports = router;
