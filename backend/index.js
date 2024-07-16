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
    origin: ["https://image-and-text-analysis-chat-bot-server.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
