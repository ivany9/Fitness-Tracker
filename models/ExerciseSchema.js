const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "String is Required"
        },

  name: {
    type: String,
    unique: true
        },

 duration: {
    type: Number,
    required:true,
    
  },

  weight:{
    
     type:Number,
     required:true,
         },

  reps:{
     type:Number,
      required:true,
       },
 
    sets:{
        type:Number,
         required:true,
         },
      
       distance:{
        type:Number,
         required:false,
       }
      

  });
  
  


const Exercise = mongoose.model("Exercise", ExcerciseSchema );

module.exports = Exercise;