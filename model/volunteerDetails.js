const mongoose = require("mongoose");


const volunteerDetailsScehma = new mongoose.Schema(
    {
        id: String,
        firstName: String,
        lastName: String,
        userName: { type: String, unique: true },
        password: String,
        userType: String,
    },
    {
        collection: "volunteerInfo",
    }
);

const VolunteerModel = mongoose.model("Volunteer", volunteerDetailsScehma);
module.exports = VolunteerModel;