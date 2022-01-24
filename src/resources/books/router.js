const express = require("express");

const { createOne, getAllFiction } = require("./controller");

const router = express.Router();

router.post("/", createOne);

router.get("/fiction", getAllFiction);

module.exports = router;
