const addButton = document.querySelector("#addButton");
const inputTask = document.querySelector("#inputTask");
const taskList = document.querySelector("#taskList");
const form = document.querySelector("#taskForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = inputTask.value;
    if (!task) {
        alert("Please write down a task");
    } else {
        const newLi = document.createElement("li");
        const toDoContent = document.createElement("span");
        toDoContent.innerText = task;
        newLi.append(toDoContent);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "delete";
        deleteButton.className = "delete-btn";
        newLi.appendChild(deleteButton);
        deleteButton.addEventListener("click", deleting);

        const editButton = document.createElement("button");
        editButton.innerText = "EDIT";
        editButton.className = "edit-btn";
        newLi.appendChild(editButton);
        editButton.addEventListener("click", (e) => editing(e.target.parentElement));

        taskList.append(newLi);
    }
    inputTask.value = "";
});

function deleting() {
    let forDelete = this.parentElement;
    taskList.removeChild(forDelete);
}

function editing(liTag) {
    let liContent = liTag.querySelector("span");

    let input = document.createElement("input");
    input.type = "text";
    input.value = liContent.textContent;
    liTag.append(input);
    input.focus();
    input.addEventListener("blur", () => {
        liContent.innerHTML = input.value;
        input.remove();
    });
}