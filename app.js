window.addEventListener("load", () => {
    const form = document.querySelector("#todo-form");
    const input = document.querySelector("#add-input");
    const listElements = document.querySelector("#tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value ;

        if (!task) {
            alert("Please Add a Task")
            return;
        }

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const contentElement = document.createElement("div");
        contentElement.classList.add("content");

        taskElement.appendChild(contentElement)

        const inputElement = document.createElement("input");
        inputElement.classList.add("text");
        inputElement.type = "text";
        inputElement.value = task;
        inputElement.setAttribute("readonly", "readonly")

        contentElement.appendChild(inputElement);

        const actionsElement = document.createElement("div");
        actionsElement.classList.add("actions");
        
        const editButtonElement = document.createElement("button");
        editButtonElement.classList.add("edit");
        editButtonElement.innerHTML = "Edit";

        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.classList.add("delete");
        deleteButtonElement.innerHTML = "Delete";

        actionsElement.appendChild(editButtonElement);
        actionsElement.appendChild(deleteButtonElement);

        taskElement.appendChild(actionsElement);
        listElements.appendChild(taskElement);

        input.value= ""

        editButtonElement.addEventListener("click", ()=> {
            if (editButtonElement.innerHTML.toLocaleLowerCase()== "edit") {
                inputElement.removeAttribute("readonly");
                inputElement.focus();
                editButtonElement.innerHTML="Save"
            } else {
                inputElement.setAttribute("readonly", "readonly");
                editButtonElement.innerHTML="Edit"
            }
        })

        deleteButtonElement.addEventListener("click", (e)=> {
            listElements.removeChild(taskElement)
        })
    })
})