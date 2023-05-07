const Razorpay = require("razorpay");
require('dotenv').config({path:"../config/Config.env"})

exports.instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  // key_id: "rzp_test_yBOIyYhTduQsgP",
  key_secret: process.env.RAZORPAY_API_SECRET,
  // key_secret: "P7KSCqmRzjq1wEcNRc54uQ2B",
});