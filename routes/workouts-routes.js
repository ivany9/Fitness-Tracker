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
   
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
          $inc: { totalDuration: req.body.duration },
          $push: { exercises: req.body }
      },
      { new: true }).then(dbWorkout => {
          res.json(dbWorkout);
      }).catch(err => {
          res.json(err);
      });

});

  
  router.post("/api/workouts", ({body}, res) => {
    
  db.Workout.create(body)
     .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});




module.exports=router;