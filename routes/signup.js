/** @format */

var express = require("express");
const axios = require("axios");
var router = express.Router();
var { User } = require("../models");

/* POST users listing. */
router.get("/", function (req, res, next) {
	const user = User.create({
		wallet_address: req.query.wallet_address,
		discord_id: req.query.discord_id,
	});
	console.log(user);
});

module.exports = router;
