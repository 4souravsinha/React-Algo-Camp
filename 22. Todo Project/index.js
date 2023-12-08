let newTaskValue = ""
const setNewTaskValue = (e) => {
    newTaskValue = e.target.value;
    console.log(newTaskValue)
}

function toggleAddTaskButton(e){
    const addTaskButton = document.getElementById("add-task-btn")
    if(e.target.value){
        addTaskButton.removeAttribute('disabled')
        console.log("enabled")
    }else{
        addTaskButton.setAttribute('disabled' , true)
        console.log('disabled')
    }
}

const updateInputField = ()=>{
    const inputField = document.getElementById("task-input")
    inputField.value = newTaskValue
}

const addTasks = (e)=>{
    if(newTaskValue=="") return;
    const parentDiv = document.getElementById("todo-data")
    const newelement = document.createElement('div');
    const totalTasks = document.getElementsByClassName('todo-no').length
    newelement.innerHTML = `
    <div class="flex justify-between items-center border-l-2 border-r-2 border-b-2 border-gray-300 p-2 mt-0 space-x-4 list-todo-heading h-full">
        <div class="basis-1/6 text-center text-xl border-r-2 border-gray-300 todo-no">
            ${totalTasks}
        </div>
        <div class="grow text-center text-xl border-r-2 border-gray-300 todo-detail">
            ${newTaskValue}
        </div>
        <div class="basis-1/6 text-center text-xl border-r-2 border-gray-300 todo-item">
            In progress
        </div>
        <div class="basis-1/6 text-center text-xl todo-action">
            <button class="border-2 border-red-500 bg-red-500 text-white p-1 rounded-lg hover:bg-red-700">
                Delete
            </button>
            <button class="border-2 border-green-500 bg-green-500 text-white p-1 rounded-lg hover:bg-green-700 ml-2">
                Finished
            </button>
        </div>
    </div>`;
    newTaskValue=""
    updateInputField()
    // toggleAddTaskButton()
    parentDiv.appendChild(newelement) 
    console.log("done")
}