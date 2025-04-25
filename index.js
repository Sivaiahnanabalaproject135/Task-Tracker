function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskList = document.getElementById("task-list");
    
    if (taskInput.value === "") {
        alert("Please enter the task");
        return;
    }
    
    var listItem = document.createElement('li');
    listItem.innerText = taskInput.value;

    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'task-buttons'; // Corrected class name

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    var completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.onclick = function() {
        listItem.classList.toggle('complete');
    };

    buttonContainer.append(deleteButton);
    buttonContainer.append(completeButton);
    listItem.append(buttonContainer);
    taskList.appendChild(listItem); // Ensure the listItem is appended to the taskList
    taskInput.value = ""; // Clear the input field
}