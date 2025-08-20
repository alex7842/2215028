const express = require("express");
const { createShortUrl, getOriginalUrl } = require("../controller/urlController");

const router = express.Router();

//Create 
router.post("/shorten", createShortUrl);

//Get 
router.get("/:shortId", getOriginalUrl);

module.exports = router;
