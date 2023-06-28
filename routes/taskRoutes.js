const express = require("express");
const database = require("../db/database");

const router = express.Router();

//create tasks
router.post('/', (req,res) => {
  database
    .addTask(req.body)
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
})
//retrieve tasks
router.get('/', (req,res) => {
  console.log("req", req.query)
  database
  .getTasksWithUsers('alice@gmail.com')
  .then((tasks) => res.send(tasks))
  .catch((e) => {
    console.error(e);
    res.send(e);
  });
})

//update tasks
router.put('/', (req,res) => {
  res.send('Hi shawn');
})

//delete tasks
router.delete('/', (req,res) => {
  res.send('Hi shawn');
})


module.exports = router;
