const mongoose = require('mongoose');

const { Schema } = mongoose;

const meetSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    deadline: {
        type: String
    },
    invitational: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Meet = mongoose.model('Meet', meetSchema);

module.exports = Meet