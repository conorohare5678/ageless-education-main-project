const mongoose = require('mongoose');

const howToBlogSchema = new mongoose.Schema({
    name: String,
    text: String,
})

const howToBlogmodel = mongoose.model("HowToBlog", howToBlogSchema)
module.exports = howToBlogmodel

