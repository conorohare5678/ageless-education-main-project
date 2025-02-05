const mongoose = require("mongoose");

const AdminDetailsSchema = new mongoose.Schema({
    name: String,
    userName: { type: String, unqiue: true },
    password: String,
    type: String,
})

const AdminDetailsModel = mongoose.model("AdminDetails", AdminDetailsSchema)
module.exports = AdminDetailsModel