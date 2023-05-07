const mongoose = require("mongoose")
// require("dotenv").config({path:"./Config.env"})

exports.connectDB = async (req , res) => {
    const { connection } = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Mongo Db is connected with ${connection.host}`)
}