const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema= new Schema({
 
       day: {
    type: Date,
    default: Date.now,

         },

    excercises:[
     {
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
        default:0,
        
      },
    
      weight:{
        
         type:Number,
         default:0,
             },
    
      reps:{
         type:Number,
         default:0,
           },
     
        sets:{
            type:Number,
            default:0,
             },
          
           distance:{
            type:Number,
            default:0,
           }
          
          }

      

    ]



        });

const Workout = mongoose.model("Workout ", WorkoutSchema);

module.exports = Workout ;