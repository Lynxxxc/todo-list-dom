import { addTask, deleteTask } from "./taskManager.js";

const todoForm = document.getElementById("todo-form");
const newTaskInput = document.getElementById("new-task");
const todoList = document.getElementById("todo-list");

// Add event listener to handle task submission
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask(todoList, newTaskInput);
});

// Add event listener to handle task deletion
todoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const taskItem = event.target.parentElement;
    deleteTask(todoList, taskItem);
  }
});
