// Elementos del DOM
const addTaskButton = document.getElementById("addTaskButton");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

// Función para agregar una nueva tarea
function addTask() {
    const taskText = newTaskInput.value.trim();

    // Validar que no esté vacío
    if (taskText === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Crear un nuevo elemento de la lista
    const li = document.createElement("li");
    li.textContent = taskText;

    // Crear botón para eliminar la tarea
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    // Añadir el botón al elemento de la lista
    li.appendChild(deleteButton);

    // Añadir la tarea a la lista
    taskList.appendChild(li);

    // Limpiar el campo de entrada
    newTaskInput.value = "";
}

// Event listener para el botón de agregar tarea
addTaskButton.addEventListener("click", addTask);

// Permitir agregar tarea con la tecla Enter
newTaskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
