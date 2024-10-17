import { createTaskItem, showAlert } from "./domUtils.js";

// Add a new task
export function addTask(todoList, newTaskInput) {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") return;

  const taskItem = createTaskItem(taskText); // Create task item with delete button
  todoList.appendChild(taskItem);
  newTaskInput.value = ""; // Clear input

  // Show success alert
  showAlert(
    "success",
    "Task Added",
    `"${taskText}" has been added to your list!`
  );
}

// Delete a task with confirmation
export function deleteTask(todoList, taskItem) {
  const taskText = taskItem.textContent.replace("Hapus", "").trim(); // Get task text

  Swal.fire({
    title: "Are you sure?",
    text: `Do you really want to delete "${taskText}"?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      todoList.removeChild(taskItem); // Remove task
      showAlert(
        "success",
        "Task Deleted",
        `"${taskText}" has been removed from your list.`
      );
    }
  });
}
