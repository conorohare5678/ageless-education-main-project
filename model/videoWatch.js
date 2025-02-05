const mongoose = require('mongoose')

const VideoWatchSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,
})

const VideoWatchModel = mongoose.model("VideoWatch", VideoWatchSchema)
module.exports = VideoWatchModel