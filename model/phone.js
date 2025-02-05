const mongoose = require("mongoose");

const PhoneSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,
})

const PhoneModel = mongoose.model("Phone", PhoneSchema)
module.exports = PhoneModel