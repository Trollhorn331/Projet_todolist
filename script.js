const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("taskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
    taskList.innerHTML = ""; 

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function () {
            deleteTask(i);
        });

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox"
        checkbox.checked = tasks[i].done;
        checkbox.className = "checkbox";

        checkbox.addEventListener("change", function () {
            tasks[i].done = checkbox.checked;
        });

        li.textContent = tasks[i].text;
        li.appendChild(checkbox);
        li.appendChild(deleteBtn)
        taskList.appendChild(li);
    }
}

function addTask() {
    const newTask = taskInput.value;
    if (taskInput.value === "") {
        alert("Veuillez entrer une tâche.")
        return;
    } else {
        tasks.push({ text: newTask, done: false });
        taskInput.value = "";
        renderTasks()
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);

    renderTasks();
}

taskBtn.addEventListener("click", addTask)