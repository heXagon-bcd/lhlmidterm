const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '',
  host: 'localhost',
  database: 'midterm'
});


const getTasksWithUsers = function (email) {
  const queryString = `
  select *
  from tasks t
  join users u on t.user_id = u.id
  where u.username = $1;
  `
  return pool
    .query(queryString, [email])
    .then( (result) => {
      console.log("getTaskswithUsers", result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const addTask = function (task_description, category) {//expecting a string -> doenst carry where its coming from.
console.log("add task - task desc, cat", task_description, category)
if(!task_description){
  throw new Error("task description can't be blank!")
}
if(!category) {
  throw new Error("this category hasn't been filled")
}
 const queryString = `
 INSERT INTO tasks (task_description, user_id, category_id) VALUES ($1, 1, $2)
 RETURNING *;
 `
 return pool
 .query(queryString, [task_description, category])
 .then( (result) => {
  console.log("add task", result.rows);
   return result.rows;
 })
//wont actually thorw an erroor on front end because we're catching the error in this funct- router wont see the response.
//  .catch((err) => {
//    console.log(err.message);
//  });
}

const editTask = function (user) {

}

const changeTask = function (user) {

}

// console.log(getTasksWithUsers('alice@gmail.com', 1))
// console.log(addTask("i want to bike", 5))

module.exports = {
  getTasksWithUsers,
  addTask,
};
