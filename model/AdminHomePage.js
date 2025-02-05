const mongoose = require("mongoose");

const AdminHomeSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,
    button: String,
})

const AdminHomeModel = mongoose.model("AdminHome", AdminHomeSchema)
module.exports = AdminHomeModel