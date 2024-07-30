const mongoose = require('mongoose');

const { Schema } = mongoose;

const entriesSchema = new Schema({
    swimmer: {
        type: String,
        required: true
    },
    event1: {
        type: String,
    },
    event2: {
        type: String,
    },
    event3: {
        type: String,
    },
    event4: {
        type: String,
    },

})

const Entries = mongoose.model('Entries', entriesSchema);

module.exports = Entries