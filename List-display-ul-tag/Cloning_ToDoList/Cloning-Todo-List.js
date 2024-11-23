//Retrieve element
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

//Array to contain tasks
let tasks = [];

addTaskBtn.addEventListener("click", addTask());
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText == "") return;

  //Display after pushing from input tag
  tasks.push({ text: taskText }); // object literals (literal - chu -> literals : van ban)
  taskInput.value = "";

  //here
  displayTasks();
}

function displayTasks() {
  //retrieve and refine into the new value
  taskList.innerHTML = "hello";
  tasks.forEach((task , index)=>{
    const li = document.createElement("li");

    li.innerHTML = `<input type="checkbox" id="task-${index}"  ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () =>
      toggleTask(index)
    );
  })

  taskList.appendChild(li);
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
  }