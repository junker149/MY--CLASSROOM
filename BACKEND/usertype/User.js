// const { Schema } = mongoose;
const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// define the person schema...
const principalSchema = new mongoose.Schema(
   {
      email: {
         type: String,
         required: true,
         unique: true
      },
      password:{
         type : String,
         required:true
      },
      role: {
        type: String,
        enum: ['Principal', 'Teacher', 'Student'],
        required: true
      }
   });

//create person model
const P1 = mongoose.model('P1', principalSchema);
module.exports = P1;