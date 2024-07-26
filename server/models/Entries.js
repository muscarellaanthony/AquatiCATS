const mongoose = require('mongoose');

const { Schema } = mongoose;

const entriesSchema = new Schema({
    swimmer: {
        type: String,
        required: true
    },
    events: [
        {
            type: String
        }
    ]

})

const Entries = mongoose.model('Entries', entriesSchema);

module.exports = Entries