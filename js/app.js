import { API } from "./API.js";
import { Task } from "./Task.js";
import { Storage } from "./Storage.js";
import { UI } from "./UI.js";

async function refresh() {
  let tasks = Storage.getTask();

  if (tasks.length === 0) {
    tasks = await API();
  }
  UI.renderListTask(tasks);
  UI.renderStatistic(tasks);
}

//Add Task
document.getElementById("task-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("task-input").value;
  const task = new Task(Date.now(), title);
  Storage.addTask(task);
  UI.clearForm();
  refresh();
});

//Toggle and Delete Task
document.getElementById("task-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete")) {
    const id = Number(e.target.closest("li").dataset.id);
    Storage.deleteTask(id);
    refresh();
  }
  if (e.target.classList.contains("btn-toggle")) {
    const id = Number(e.target.closest("li").dataset.id);
    Storage.toggleStatusTask(id);
    refresh();
  }
});

//Filter Task
document.querySelector(".filters").addEventListener("click", (e) => {
  const filterBtn = e.target.closest("[data-filter]");
  if (!filterBtn) return;

  const tasks = Storage.getTask();
  const filterValue = filterBtn.getAttribute("data-filter");

  const filtered = UI.filterTask(tasks, filterValue);

  UI.renderListTask(filtered);
  UI.renderStatistic(filtered);
});
refresh();
