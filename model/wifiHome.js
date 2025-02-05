const mongoose = require('mongoose');

const wifiHomeSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,
})

const wifiHomemodel = mongoose.model("WifiHome", wifiHomeSchema)
module.exports = wifiHomemodel;