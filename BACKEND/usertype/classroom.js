const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    schedule: [
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
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

// module.exports = mongoose.model('Classroom', ClassroomSchema);


//create person model
const C1 = mongoose.model('C1', ClassroomSchema);
module.exports = C1;