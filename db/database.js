const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});


const getTasksWithUsers = function(email) {
  const queryString = `
  select *
  from tasks t
  join users u on t.user_id = u.id
  where u.username = $1;
  `;
  return pool
    .query(queryString, [email])
    .then((result) => {
      console.log("getTaskswithUsers", result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addTask = function(task_description) {
  const queryString = `
 INSERT INTO tasks (name, user_id, category_id) VALUES ($1, 1, 5)
 RETURNING *;
 `;
  return pool
    .query(queryString, [task_description])
    .then((result) => {
      console.log("add task", result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const editTask = function(user) {

};

const changeTask = function(user) {

};

console.log(getTasksWithUsers('alice@gmail.com'));

module.exports = {
  getTasksWithUsers,
  addTask,
};
