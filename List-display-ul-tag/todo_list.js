//Retrieve document type
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText }); // object literals (literal - chu -> literals : van ban)
    taskInput.value = "";
    displayTasks();
  }
}

//input - type checkbox []
function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    //completed is a property of task and task is value of tasks array
    li.innerHTML = `<input type="checkbox" id="task-${index}"
    ${task.completed ? "checked" : ""}> 
            <label for="task-${index}">${task.text}</label>`;
    //in li tag , take input and add eventlistener to change the completed properties
    li.querySelector("input").addEventListener("change", () =>
      toggleTask(index)
    );
    //add into taskList <ul>
    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  //default is fault ==> then click is completed
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed); //extract with conditions
  // to filter the correct value into a new array
  //if we don't complete -> add a new array -,. is completed => is similar to remove but 
  // it's not truly in the condition , so it's not selected 
  displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
//brier than onclick
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
//In ul , we have li tag . create tasks array to use for each and create li tag into for each
//using innerHTML to add value into li tag with any tag
//task is key and index is value 
//use li.querySelector(tag) to retrieve tag and add eventListener
//task list . appendChild(li)
//end for-ech
