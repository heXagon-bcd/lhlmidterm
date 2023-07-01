
$(document).ready(function() {
  console.log("hi");

  const createTaskElement = function(task) {
    const $taskContainer = $(`
    <form class="check-box">
    <div class="form-check">
    <input class="tank-check-input" type="checkbox" value="${task.task_id}" id="${task.task_id}">
    <label class="task-check-label" for="flexCheckDefault">
    ${task.task_description}
    </label>
    </div>
    <form>
    `);
//     const $taskContainer = $(`
//     <li>${task.task_description}</li>
//  `);
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
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(error);
      });
  };
  //load tasks wtihout needing to press intial submit
  loadTasks();


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
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send(error);
          });
      }
    });
  });

  //delete task based on checkmark
  $(document).on("click", ".check-box", function(event) {
    event.preventDefault();
    const $currentElement = $(this);//need to store as this will not be stored
    const id = $currentElement.find('input[type="checkbox"]').attr('id');
    $.ajax({
      type: "DELETE",
      url: "/api/taskRoutes",
      data: `task_id=${id}`,
      success: function() {
        $.ajax("/api/taskRoutes", { method: "GET" })
        .then(function(tasks) {
          $currentElement.remove();
        })
      }
    })
    });
});
