let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = total - completed;

  document.getElementById("totalTasks").textContent = total;
  document.getElementById("completedTasks").textContent = completed;
  document.getElementById("remainingTasks").textContent = remaining;
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear the list

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.className = "task";
    taskElement.style.color =
      task.priority === "high"
        ? "red"
        : task.priority === "medium"
        ? "orange"
        : "green";
    taskElement.innerHTML = `
        <span class="${
          task.completed ? "completed" : ""
        }" onclick="toggleCompletion(${index})">${task.title} (${
      task.priority
    })</span>
      <button onclick="deleteTask(${index})">Delete</button>
       `;
    taskList.appendChild(taskElement);
  });
  updateStats();
}

function addTask() {
  const taskTitle = document.getElementById("taskTitle").value;
  const taskPriority = document.getElementById("taskPriority").value;

  if (taskTitle.trim() === "") {
    alert("Please enter a task title");
    return;
  }

  const newTask = {
    title: taskTitle,
    priority: taskPriority,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  // Clear the input fields
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskPriority").value = "low";
}

function toggleCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial render
renderTasks();
