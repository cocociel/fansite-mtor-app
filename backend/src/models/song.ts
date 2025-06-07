const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    artists: {
        type: [String],
        required: true,
    },
    url: {
        type: String,
        required: false,
    },
    original: {
        type: Boolean,
        required: false,
    },
    postDate: {
        type: Date,
        required: false,
    },
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;