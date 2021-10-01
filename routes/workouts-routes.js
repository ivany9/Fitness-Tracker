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

  router.put("/api/workouts/:id",({body},res) => {
   
      db.Work.create(body)
        .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { excercises: _id } }, { new: true }))
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
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