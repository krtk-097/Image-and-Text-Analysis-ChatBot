const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");
const apiRoutes = require("./routes/api");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
