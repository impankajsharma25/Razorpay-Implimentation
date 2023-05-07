const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: "./config/Config.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PaymentRoutes = require("./routes/PaymentRoutes");

app.use("/api", PaymentRoutes);

app.get("/api/getKey" ,  (req , res) => {
    res.status(200).json({ key : process.env.RAZORPAY_API_KEY })
})

module.exports = app;
