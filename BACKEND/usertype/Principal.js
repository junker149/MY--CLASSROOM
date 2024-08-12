// const { Schema } = mongoose;
const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// define the person schema...
const principalSchema = new mongoose.Schema(
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
const P1 = mongoose.model('P1', principalSchema);
module.exports = P1;