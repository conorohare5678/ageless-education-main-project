const mongoose = require('mongoose');

const trainingPagesSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,
})

const trainingPagesmodel = mongoose.model("TrainingPages", trainingPagesSchema)
module.exports = trainingPagesmodel