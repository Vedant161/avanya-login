const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/avanya-ai", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
