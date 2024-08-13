const mongoose = require('mongoose');

const TimetableSchema = new mongoose.Schema({
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    periods: [
        {
            day: {
                type: String,
                required: true,
                enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            },
            startTime: {
                type: String, // Store in "HH:MM" 24-hour format
                required: true,
            },
            endTime: {
                type: String, // Store in "HH:MM" 24-hour format
                required: true,
            },
        },
    ],
});

//create timetable model
const T1 = mongoose.model('T1', TimetableSchema);
module.exports = T1;