const PaymentModel = require("../models/PaymentModel");
const RazorPay = require("../razorpay/RazorPay");
const crypto = require("crypto");
require("dotenv").config({ path: "../config/Config.env" });

exports.Checkout = async (req, res) => {
  const integrAmount = Object.keys(req.body);

  const options = {
    amount: Math.floor(integrAmount[0] * 100),
    currency: "INR",
  };
  try {
    const order = await RazorPay.instance.orders.create(options);
    console.log(order);
    res.status(200).json({
      success: true,
      data: order,
      message: "Order created Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.paymentVerification = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // database comes here
      await PaymentModel.create({
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      });

      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
