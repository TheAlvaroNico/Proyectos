// Elementos del DOM
const addTaskButton = document.getElementById("addTaskButton");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");
const randomSelectButton = document.getElementById("randomSelectButton");

let highlightedTask = null;

// Función para agregar una nueva tarea
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
        if (li === highlightedTask) {
            highlightedTask = null; // Elimina la referencia si la tarea resaltada se elimina
        }
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    newTaskInput.value = "";
}

// Función para seleccionar una tarea aleatoriamente
function selectRandomTask() {
    const tasks = Array.from(taskList.children);

    if (tasks.length === 0) {
        alert("No hay tareas para seleccionar.");
        return;
    }

    // Quitar el resaltado de la tarea anterior
    if (highlightedTask) {
        highlightedTask.classList.remove("highlight");
    }

    // Seleccionar una tarea aleatoria
    const randomIndex = Math.floor(Math.random() * tasks.length);
    highlightedTask = tasks[randomIndex];
    highlightedTask.classList.add("highlight");
}

// Event listeners
addTaskButton.addEventListener("click", addTask);
randomSelectButton.addEventListener("click", selectRandomTask);

newTaskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
