# Fiteness- Tracker


# Deployed 

Find the deployed application here:https://car-enthusiasts.herokuapp.com/

## Description
  
This app is deployed in HEROKU usgin Atlas db,  the technology is mongo, it have one collection called Workout, and four ends points. Each end point have a query that allowes to get the information 
that the user want.

example :
```

router.get("/api/workouts/range", (req, res) => {
db.Workout.aggregate(                                                            aggreate function
      [
        {
          $match: {
            day: {
               $gte: new Date(new Date().setDate(new Date().getDate() - 8)),   mongo keyworks
               $lte: new Date(new Date().setDate(new Date().getDate()-1)),
                }}
               

         }, {
          $addFields: {
            totalDuration:{$sum :"$exercises.duration"},                    
                      }  }
             ]
           )
```

## User Story

As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

 # Technology


```bash
-Node.js
-Express.js
-Mongoose
-MongoDB
-Morgan

```


## Table of Contents

- [Deployed](#Deployed)
- [Description](#Description)
- [User Story](#User-Story)
- [Technology](#technology)
- [Demo](#Demo)
- [Installation](#installation)
- [Usage](#Usage)
- [License](#license)
- [Questions](#Contact-Information)  


### Demo


![coding](https://user-images.githubusercontent.com/83906297/135784857-01989cd5-1b06-450e-a189-088b1a3b1486.gif)

## Installation

-npm Install
-npm run seed.  "optional"

## Usage
 
 ```bash

>npm start
>http://localhost:3000 in the browser

```




# License 
![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")  



## Contact-Information:

    -GitHub Username: ivany9
    -ivany9@gmail.com
