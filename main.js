"use strict";

(function(){

//console.log("default function called!");

function todayDate(){
    //console.log("Date Function Called!");

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const dayNames= ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    const tdate = d.getDate();
    const tDate = (tdate>9) ? ''+tdate : '0'+tdate;
    const tMonth = d.getMonth();
    const tday = d.getDay();
    const tyear = d.getFullYear(); 

    
    //console.log(`${dayNames[tday]}, ${monthNames[tMonth]} ${tDate}`);

    document.getElementById("today-date").innerHTML = `${dayNames[tday]}, ${monthNames[tMonth]} ${tDate}`;

}
function todayTime(){

    //console.log("Time Function Called!");

    const t = new Date();
    const thour = t.getHours();
    const tminutes = t.getMinutes();
    const tSeconds = t.getSeconds();
    const tseconds = (tSeconds>9) ? ''+tSeconds : '0'+tSeconds;
    const tm = (thour>12) ? 'PM' : 'AM';

    //console.log(`${thour}:${tminutes} ${tm}`);

    document.getElementById("today-time").innerHTML = `${thour}:${tminutes}:${tseconds} ${tm}`;

}

todayDate();
setInterval(todayTime, 1000);


const addBtn = document.getElementById("addBtn");
const textBox =  document.getElementById("taskbox");
const list = document.getElementById("todoList");

addBtn.addEventListener("click", addTodolist);

function addTodolist(){
    console.log("Todolist function called!");

    if(textBox.value.length === 0){
        return;
    }
    else{
        // console.log("Task added!");
        
        const  newDiv = document.createElement("div"); 
        const  newP = document.createElement("p");
        const newCI = document.createElement("i");
        const newDI = document.createElement("i");

        const taskContainer =  list.appendChild(newDiv)
        const task = taskContainer.appendChild(newP)
        const doneBtn = taskContainer.appendChild(newCI)
        const deleteBtn = taskContainer.appendChild(newDI)

        deleteBtn.className = "fas fa-trash"
        doneBtn.className = "fas fa-check"

        task.className = "task"
        taskContainer.className = "task-container"

        task.innerHTML = textBox.value
        textBox.value = ""

        deleteBtn.addEventListener("click", deleteTask)
        doneBtn.addEventListener("click", doneTask)

        function doneTask(e){
          e.target.parentElement.classList.add("active");
        }

        function deleteTask(e){
            e.target.parentElement.remove()
        }
    }

}

})();




