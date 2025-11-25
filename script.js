const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("taskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
    taskList.innerHTML = ""; 

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];
        taskList.appendChild(li);
    }
}

function addTask() {
    const newTask = taskInput.value;
    if (taskInput.value === "") {
        alert("Veuillez entrer une tâche.")
        return;
    } else {
        tasks.push(newTask);
        taskInput.value = "";
        renderTasks()
    }
}

taskBtn.addEventListener("click", addTask)