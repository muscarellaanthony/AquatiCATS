const mongoose = require('mongoose');

const { Schema } = mongoose;

const swimmerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    birthdate: {
        type: String,
        required: true,
    },
});

const Swimmer = mongoose.model('Swimmer', swimmerSchema);

module.exports = Swimmer;
