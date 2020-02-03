const express = require("express");

const user = require("./user");
const photo = require("./photo");
const game = require("./game");
const attraction = require("./attraction");

const router = express.Router();

router.use("/user", user);
router.use("/photo", photo);
router.use("/game", game);
router.use("/attraction", attraction);

module.exports = router;
