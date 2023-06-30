const express = require("express");
const database = require("../db/database");
const openai = require("../public/scripts/openai")

const router = express.Router();

//create tasks
router.post("/", (req, res) => {
  // look at database.js  to make sure addTask
  console.log("req.body.task_description", req.body.task_description);
  // database
  //   .addTask(req.body.task_description, openai.categorizeInput(req.body.task_description))
  //   .then((tasks) => {
  //     console.log("show tasks", tasks)
  //     res.send(tasks);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //     res.status(500).send(e);//review doc on status -> if no status delcare, front end ajax will determine as success
  //   });
  openai.categorizeInput(req.body.task_description)
    .then((category) => {
      console.log("category", category);
      return database.addTask(req.body.task_description, category);
    })
    .then((task) => {
      console.log("show tasks", task);
      res.send(task);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});

//retrieve tasks
router.get("/", (req, res) => {
  console.log("req", req.query);
  database
    .getTasksWithUsers("alice@gmail.com")
    .then((tasks) => res.send(tasks))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

//update tasks
router.put("/", (req, res) => {
  res.send("Hi shawn");
});

//delete tasks
router.delete("/", (req, res) => {
  res.send("Hi shawn");
});

module.exports = router;
