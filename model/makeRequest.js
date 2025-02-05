const mongoose = require("mongoose");

const makeRequestSchema = new mongoose.Schema({
    title: String,
    text: String,
})

const makeRequestModel = mongoose.model("MakeRequest", makeRequestSchema)
module.exports = makeRequestModel