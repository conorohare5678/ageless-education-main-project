const mongoose = require('mongoose')

const textMessageSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,
})

const textMessageModel = mongoose.model("TextMessage", textMessageSchema)
module.exports = textMessageModel