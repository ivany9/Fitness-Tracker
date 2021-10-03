const router = require('express').Router();
const db=require("../models");



router.get("/api/workouts", (req, res) => {

  
   db.Workout.aggregate([
    {
      $addFields: {
        totalDuration:{$sum :"$exercises.duration"},
      
      }
    }
    ]) 
      
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      
  })

})


  

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




router.get("/api/workouts/range", (req, res) => {


    db.Workout.aggregate(
      [
        {
          $match: {
            day: {
               $gte: new Date(new Date().setDate(new Date().getDate() - 8)),
               $lte: new Date(new Date().setDate(new Date().getDate()-1)),
                }}
               

         }, {
          $addFields: {
            totalDuration:{$sum :"$exercises.duration"},
                      }  }
             ]
           )

  .then(dbWorkout => {
      res.json(dbWorkout);

      console.log(new Date(new Date().setDate(new Date().getDate() - 7)));
      console.log(new Date(new Date().setDate(new Date().getDate()-0)));
    })
    .catch(err => {
      res.json(err);
    });
});



module.exports=router;