const mongoose = require("mongoose");

const PointsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserInfo'
    },
    points: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model("Points", PointsSchema);