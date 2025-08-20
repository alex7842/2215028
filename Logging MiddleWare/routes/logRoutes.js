const express = require("express");
const router = express.Router();
const { logData } = require("../controller/logController");

router.post("/", logData);

module.exports = router;