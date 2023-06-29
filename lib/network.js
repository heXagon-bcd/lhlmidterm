function listAllTasks(params) {
  let url = "/api/taskRoutes/get";
  if (params) {
    url += "?" + params;
  }
  return $.ajax({
    url,
  });
}
