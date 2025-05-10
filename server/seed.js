const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose.connect("mongodb://localhost:27017/avanya-ai");

const createUser = async () => {
  const hashedPassword = await bcrypt.hash("test123", 10);
  const user = new User({ email: "admin@avanya.com", password: hashedPassword });
  await user.save();
  console.log("User created!");
};

createUser();
