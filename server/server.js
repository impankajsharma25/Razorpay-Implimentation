const app = require("./app");
const { connectDB } = require("./config/Database");
require("dotenv").config({ path: "./config/Config.env" });

connectDB()

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});



