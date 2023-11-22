const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        //Adding tasks
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //Add cross at side
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    //To make checked or unchecked
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //To delete a task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();