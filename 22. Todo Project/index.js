let newTaskValue = ""
const setNewTaskValue = (e) => {
    newTaskValue = e.target.value;
    console.log(newTaskValue)
}

function toggleAddTaskButton(){
    const addTaskButton = document.getElementById("add-task-btn")
    if(newTaskValue){
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

function deleteHandle(e){
    const rowToDelete = e.target.parentNode.parentNode;
    rowToDelete.remove();
    const todoData = document.getElementById('todo-data');
    const todoRows = todoData.getElementsByClassName('todo-row');
    for(let i=0;i<todoRows.length;i++){
        todoRows[i].getElementsByClassName('todo-no')[0].innerHTML = i+1;
    }
}

const addTasks = (e)=>{
    if(newTaskValue=="") return;
    const parentDiv = document.getElementById("todo-data")
    const newelement = document.createElement('div');
    const totalTasks = document.getElementsByClassName('todo-no').length
    newelement.innerHTML = `
    <div class="flex justify-between items-center border-l-2 border-r-2 border-b-2 border-gray-300 p-2 mt-0 space-x-4 h-full todo-row">
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
            <button class="border-2 border-red-500 bg-red-500 text-white p-1 rounded-lg hover:bg-red-700" onclick="deleteHandle(event)">
                Delete
            </button>
            <button class="border-2 border-green-500 bg-green-500 text-white p-1 rounded-lg hover:bg-green-700 ml-2">
                Finished
            </button>
        </div>
    </div>`;
    parentDiv.appendChild(newelement) 
    newTaskValue=""
    updateInputField()
    toggleAddTaskButton()
    console.log("done")
}