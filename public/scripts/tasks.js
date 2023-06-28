$(document).ready(function () {
  console.log("hi");

  const createTaskElement = function (task) {
    const $taskContainer = $(`
  <p>${task.task_description}</p>
  `);
    $(".card-contents").append($taskContainer);
  };

  const renderTasks = function (tasks) {
    console.log("tasks", tasks);
    for (let task of tasks) {
      console.log("task", task);
      createTaskElement(task);
    }
  };

  const loadTasks = function () {
    console.log("loading tasks");
    $.ajax("/api/taskRoutes", { method: "GET" })
     .then(function (response) {
      console.log("success", response);
      renderTasks(response);
    });
  };

  //load tasks wtihout needing to press intial submit
  loadTasks();
});
