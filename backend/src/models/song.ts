import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
    title: { type: String, requied: true },
    artist: { type: [String], requied: true },
    original: { type: Boolean, requied: true }
});

export const Song = mongoose.model('Song', SongSchema);