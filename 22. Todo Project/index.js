let newTaskValue = "";
const setNewTaskValue = (e) => {
  newTaskValue = e.target.value;
  console.log(newTaskValue);
};
let tasks = [];
function toggleAddTaskButton() {
  const addTaskButton = document.getElementById("add-task-btn");
  if (newTaskValue) {
    addTaskButton.removeAttribute("disabled");
    console.log("enabled");
  } else {
    addTaskButton.setAttribute("disabled", true);
    console.log("disabled");
  }
}

const updateInputField = () => {
  const inputField = document.getElementById("task-input");
  inputField.value = newTaskValue;
};

function deleteHandle(e) {
  const rowToDelete = e.target.parentNode.parentNode;
  tasks.splice(rowToDelete.getAttribute("data-task-id"), 1);
  renderTasks();
}

function sortTasks(){
    tasks.sort((a,b) => {
        if(a.status === b.status) return 0;
        if(a.status === "Finished") return 1;
        return -1;
    })
}
function finishHandle(e){
    const rowToFinish = e.target.parentNode.parentNode;
    if(tasks[rowToFinish.getAttribute("data-task-id")].status === "Finished"){
        tasks[rowToFinish.getAttribute("data-task-id")].status = "In progress";
        tasks[rowToFinish.getAttribute("data-task-id")].finishButton = "Finish";
        //sort tasks on the basis of status
        sortTasks();
        renderTasks();
        return;
    }
    tasks[rowToFinish.getAttribute("data-task-id")].status = "Finished";
    tasks[rowToFinish.getAttribute("data-task-id")].finishButton = "Restart";
    sortTasks();
    renderTasks();
}

function editHandle(e){
    alert("Feature coming soon...");
}

function handlePendingTasks(){
    alert("Feature coming soon...");
}

const addTasks = (e) => {
  if (newTaskValue == "") return;
  tasks.push({
    task: newTaskValue,
    status: "In progress",
    finishButton: "Finish",

  });
  renderTasks();
  newTaskValue = "";
  updateInputField();
  toggleAddTaskButton();
};

const renderTasks = () => {
  const parentDiv = document.getElementById("todo-data");
  const tempTasks = Array.from(parentDiv.getElementsByClassName("todo-row"));
  tempTasks.forEach((task) => task.remove());
  tasks.forEach((task, index) => {
    let newelement = document.createElement("div");
    newelement.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "border-l-2",
      "border-r-2",
      "border-b-2",
      "border-gray-300",
      "p-2",
      "mt-0",
      "space-x-4",
      "h-full",
      "todo-row"
    );
    newelement.innerHTML = `
        <div class="basis-1/6 text-center text-xl border-r-2 border-gray-300 todo-no">
            ${index + 1}
        </div>
        <div class="grow text-center text-xl border-r-2 border-gray-300 todo-detail">
            ${task.task}
        </div>
        <div class="basis-1/6 text-center text-xl border-r-2 border-gray-300 todo-status text-green-400">
            ${task.status}
        </div>
        <div class="basis-1/6 text-center text-xl todo-action">
            <button class="border-2 border-red-500 bg-red-500 text-white p-1 rounded-lg hover:bg-red-700" onclick="deleteHandle(event)">
                Delete
            </button>
            <button class="border-2 border-green-500 bg-green-500 text-white p-1 rounded-lg hover:bg-green-700 ml-2" onclick="finishHandle(event)">
                ${task.finishButton}
            </button>
            <button class="border-2 border-blue-500 bg-blue-500 text-white p-1 rounded-lg hover:bg-blue-700 ml-2" onclick="editHandle(event)">
                Edit
            </button>
        </div>
        `;
    newelement.setAttribute("data-task-id", index);
    const finishButton = newelement.getElementsByClassName("todo-action")[0]
      .children[1];
    const todoStatus = newelement.getElementsByClassName("todo-status")[0];
    if (task.status === "Finished") {
        finishButton.classList.remove("bg-green-500");
        finishButton.classList.add("bg-yellow-500");
        finishButton.classList.remove("hover:bg-green-700");
        finishButton.classList.add("hover:bg-yellow-700");
        finishButton.classList.remove("border-green-500");
        finishButton.classList.add("border-yellow-500");
        todoStatus.classList.remove("text-green-400");
        todoStatus.classList.add("text-yellow-400");
    }
    parentDiv.appendChild(newelement);
  });
};
