const mongoose = require('mongoose');

const { Schema } = mongoose;   

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },

});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;