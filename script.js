// ✅ GOAL:
// Build a simple mini-form where the user types a task into an input field,
// clicks a button, and sees the task appear on the page below.

// ✅ STEPS:
// 1. Create an input field and a button in your HTML.
// 2. When the button is clicked, grab the value from the input.
// 3. Create a new <li> element with that value.
// 4. Add the <li> to a <ul> in the HTML.
// 5. Clear the input field after submission.

// ✅ BONUS (Optional):
// - If input is empty, do nothing or show an alert.
// - Add a class for styling each <li> item.

let input = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

function addTask() {
    console.log(input.value);

    let value = input.value.trim();
    
    if (value === "") {
        alert("Please write something!");
        return;
    }

    let newTask = document.createElement("li");
    newTask.textContent = input.value;
    taskList.appendChild(newTask);
    input.value = ""
    
}