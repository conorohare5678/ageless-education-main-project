const mongoose = require('mongoose');

const linksSchema = new mongoose.Schema({
    name: String,
    text: String,
    URL: String,
    imageURL: String,
})

const linkPagesmodel = mongoose.model("LinksPages", linksSchema)
module.exports = linkPagesmodel