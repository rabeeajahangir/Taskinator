var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
buttonEl.addEventListener("click", function(){
    alert("button clicked");
});

taskItemEl = document.createElement("li");
taskItemEl.textContent = "hello";
taskItemEl;

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl= document.querySelector("#tasks-to-do");

buttonEl.addEventLsitener("click", function() {
    var listItemEl = document.createElement("li");
    listItenEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);

});
var createTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItenEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl)
};

buttonEl.addEventListener("click", createTaskHandler);