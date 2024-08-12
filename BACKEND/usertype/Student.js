// import mongoose from 'mongoose';
const mongoose = require('mongoose');
// define the person schema...
const studentSchema = new mongoose.Schema(
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

//create person model
const S1 = mongoose.model('S1', studentSchema);
module.exports = S1;