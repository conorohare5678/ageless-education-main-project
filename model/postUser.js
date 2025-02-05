const mongoose = require('mongoose');

const postUserSchema = new mongoose.Schema({
    volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo', required: true },
    name: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const PostModel = mongoose.model('Post', postUserSchema);

module.exports = PostModel;
