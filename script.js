
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Mark task as completed
    checkbox.addEventListener("change", function() {
        li.classList.toggle("completed", checkbox.checked);
    });

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    // Delete task
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    // Add elements to the task
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Show task in the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
    taskInput.focus();
}

// Add task when button is clicked
addButton.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
