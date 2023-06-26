const express = require("express");
// const database = require("../db/database");

const router = express.Router();

router.get('/', (req,res) => {
  res.send('Hi shawn');
})

module.exports = router;
