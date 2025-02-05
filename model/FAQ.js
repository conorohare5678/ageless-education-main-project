const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,
})

const FAQModel = mongoose.model("FAQ", FAQSchema)
module.exports = FAQModel