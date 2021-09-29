const router = require('express').Router();
//const Workout= require("../models/WorkoutSchema");
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

  router.post("/api/workouts", ({body}, res) => {
    db.Exercise.create(body)
      .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { excersices: _id } }, { new: true }))
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


  
router.post("/api/workouts", (req, res) => {

  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});




module.exports=router;