const mongoose = require('mongoose')

const pictureSchema = new mongoose.Schema({
    name: String,
    text: String,
})

const pictureModel = mongoose.model("picture", pictureSchema)
module.exports = pictureModel