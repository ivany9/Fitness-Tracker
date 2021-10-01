const router = require('express').Router();
const db=require("../models");



router.get("/api/workouts", (req, res) => {

    console.log("in ");
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.put("/api/workouts/:id",(req,res) => {
   
//db.collection.findOneAndUpdate( filter, update, options )

     console.log(req.body);
     console.log(req.params.id);
    db.Workout.findOneAndUpdate( 
    {_id: req.params.id },{$push:{exercises:req.body}},{new:true})
    
      .then(dbworkout=>{
           res.json(dbworkout);

      })
      .catch(err=>{
        
        res.json(err);   
      })


    }),
  


  
  router.post("/api/workouts", ({body}, res) => {
    
      
    db.Workout.create(body)
    
    .then((dbWorkout => {
      res.json(dbWorkout)
      ;
  })
  ).catch(err => {
      res.json(err);
  });
});




module.exports=router;