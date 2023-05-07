const express = require("express");
const { Checkout, paymentVerification } = require("../controllers/PaymentController");

const router = express.Router();

router.route("/checkout").post(Checkout);

router.route("/paymentverification").post(paymentVerification);

module.exports = router;
