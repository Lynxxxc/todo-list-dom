// Create a new task item with a delete button
export function createTaskItem(taskText) {
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  // Add toggle completed functionality (use checkbox instead of strikethrough)
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete-checkbox");
  checkbox.addEventListener("change", () => {
    taskItem.classList.toggle("completed"); // Toggle completed class
  });
  taskItem.prepend(checkbox);

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.classList.add("delete-btn");
  taskItem.appendChild(deleteButton);

  return taskItem;
}

// Show a SweetAlert notification
export function showAlert(icon, title, text) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 1500,
  });
}
