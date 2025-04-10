const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list");

function addTask() {
    if(inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value =  "";
    saveData();
}

listContainer.addEventListener("click", function(x) {
    if (x.target.tagName === "LI") {
        x.target.classList.toggle("checked");
        saveData();
    }
    else if (x.target.tagName === "SPAN") {
        x.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();
