const mongoose = require("mongoose");
//const Points = require("./model/points");


const UserDetailsScehma = new mongoose.Schema(
  {
    id: String,
    firstName: String,
    lastName: String,
    userName: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);