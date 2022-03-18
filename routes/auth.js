/** @format */

var express = require("express");
const axios = require("axios");
var router = express.Router();

/* GET auth listing. */
router.get("/", function (req, res, next) {
	axios
		.get(
			`https://public-api.solscan.io/account/tokens?account=${req.query.wallet_address}`
		)
		.then(({ data }) => {
			const result = data;
			for (i = 0; i < result.length; i++) {
				if (result[i].tokenAddress == req.query.tokenAddress) {
					return res.status(200).send([{ isMember: true }]);
				}
			}
			return res.status(200).send([{ isMember: false }]);
		});
});

module.exports = router;
