const mongoose = require('mongoose')

const SetAlarmSchema = new mongoose.Schema({
    name: String,
    text: String,
    imageURL: String,
})

const setAlarmmodel = mongoose.model("SetAlarm", SetAlarmSchema)
module.exports = setAlarmmodel