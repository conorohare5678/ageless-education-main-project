const mongoose = require("mongoose");

const VolRequestSchema = new mongoose.Schema({
    name: String,
    Organisation: String,
    other: String,
    email: String,
    number: String,
    about: String,

})

const VolRequestModel = mongoose.model("VolRequest", VolRequestSchema)
module.exports = VolRequestModel