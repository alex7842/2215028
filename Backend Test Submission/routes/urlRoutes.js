const express = require("express");
const { createShortUrl, getOriginalUrl,getAllUrl } = require("../controller/urlController");

const router = express.Router();

//Create 
router.post("/shorten", createShortUrl);

//Get 
router.get("/:shortId", getOriginalUrl);
router.get("/get", getAllUrl);
module.exports = router;
