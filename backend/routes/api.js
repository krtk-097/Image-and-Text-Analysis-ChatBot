const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { analyzeImage } = require("../controllers/analyzeController");

router.post("/analyze", upload.single("image"), analyzeImage);
router.get("/", (req, res) => {
  res.json("Hello");
});

module.exports = router;
