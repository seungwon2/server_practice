/** @format */

var express = require("express");
var router = express.Router();
var { User } = require("../models");

/* GET users listening */

router.get("/", async function (req, res, next) {
	let user_info;
	await User.findAll({
		where: { wallet_address: req.query.wallet_address },
	})
		.then((result) => {
			// console.log(result);
			user_info = result;
		})

		.catch((error) => {
			console.log(error);
		});

	return user_info[0].dataValues;
});

module.exports = router;
