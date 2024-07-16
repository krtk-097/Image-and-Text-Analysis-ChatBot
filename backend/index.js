const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database.js");
const apiRoutes = require("./routes/api.js");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(
  cors({
    origin: ["https://image-and-text-analysis-chatbot-server.onrender.com"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
