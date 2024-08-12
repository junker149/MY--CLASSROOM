const mongoose = require('mongoose');

// define the person schema...
const teacherSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true
      },
      age: {
         type: Number
      },
      work: {
         type: String,
         enum: ['chef', 'manager', 'waiter'],
         required: true
      },
      mobile: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true,
         unique: true

      },
      address: {
         type: String,
         required: true
      },
      salary: {
         type: Number,
         required: true
      }
   })

//create Teacher model
const T1 = mongoose.model('T1', teacherSchema);
module.exports = T1;