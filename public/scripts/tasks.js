
$(document).ready(function() {
  console.log("hi");

  const createTaskElement = function(task) {
    const $taskContainer = $(`
      <li>${task.task_description}</li>
    `);
    // Categorize the task based on its category ID
    if (task.category_id === 1) {
      $(".card-contents.movies").prepend($taskContainer);
    } else if (task.category_id === 2) {
      $(".card-contents.books").prepend($taskContainer);
    } else if (task.category_id === 4) {
      $(".card-contents.restaurants").prepend($taskContainer);
    } else if (task.category_id === 3) {
      $(".card-contents.products").prepend($taskContainer);
    } else {
      $(".card-contents.uncategorized").prepend($taskContainer);
    }
  };


  const renderTasks = function(tasks) {
    console.log("tasks", tasks);
    for (let task of tasks) {
      //console.log("task", task);
      createTaskElement(task);
    }
  };

  const loadTasks = function() {
    console.log("loading tasks");
    $.ajax("/api/taskRoutes", { method: "GET" })// front end is visiting the site in the background, response from db --> tasksRoutes.js(server) --> db query
      .then(function(tasks) {//pushed to front end as array/object(depending on format from server)
        //console.log("success", tasks);
        renderTasks(tasks);
      });
  };
  //load tasks wtihout needing to press intial submit
  //loadTasks();

  //Delete task
  const deleteTask = function(taskID) {
    console.log("Deleting task with ID:", taskID);

    // Send a DELETE request to the server
    $.ajax(`/api/taskRoutes/`, {
      method: "DELETE"
    })
      .then(function(response) {
        console.log("Task deleted successfully:", response);
        // Reload the tasks after deletion
        loadTasks();
      })
      .catch(function(error) {
        console.log("Error deleting task:", error);
      });
  };
  deleteTask();





  //add tasks function
  $("#task-form").on("submit", function(event) {
    event.preventDefault();// to prevent the default form submission behaviour.
    const text = $(this).serialize().replaceAll('%20', ' ');
    console.log("input text", text);
    $.ajax({
      type: "POST",
      url: "/api/taskRoutes",
      data: text,
      success: function() {//can respond newTask -> with the post request so that i can save one trip.
        $.ajax("/api/taskRoutes", { method: "GET" })
          .then(function(input) {
            console.log("sucesss", input);
            const latestPost = input[input.length - 1];
            createTaskElement(latestPost);
          });
      }
    });
  });
});
