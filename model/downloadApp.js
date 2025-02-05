const mongoose = require('mongoose')

const DownloadAppSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,
})

const DownloadAppmodel = mongoose.model("DownloadApp", DownloadAppSchema)
module.exports = DownloadAppmodel