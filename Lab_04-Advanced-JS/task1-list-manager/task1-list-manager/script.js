const addBtn = document.getElementById("addBtn");
const input = document.getElementById("itemInput");
const list = document.getElementById("itemList");

addBtn.addEventListener("click", function () {

    const value = input.value.trim();

    if (value === "") {
        alert("Please enter an item");
        return;
    }

    const li = document.createElement("li");
    li.textContent = value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});