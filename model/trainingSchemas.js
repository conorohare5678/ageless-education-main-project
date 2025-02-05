const mongoose = require('mongoose')

const browseWebSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,

})

const browseWebmodel = mongoose.model("BrowseWeb", browseWebSchema)
module.exports = browseWebmodel

