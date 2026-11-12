function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please write a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");

    li.innerHTML = taskValue + ' <button onclick="removeTask(this)">Delete</button>';
    ul.appendChild(li);

    taskInput.value = "";
}

function removeTask(element) {
    var li = element.parentElement;
    li.remove();
}