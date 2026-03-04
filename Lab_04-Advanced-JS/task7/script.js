const list = document.getElementById("list");
let draggedItem = null;

list.addEventListener("dragstart", function(e) {
    draggedItem = e.target;
    e.target.classList.add("dragging");
});

list.addEventListener("dragend", function(e) {
    e.target.classList.remove("dragging");
});

list.addEventListener("dragover", function(e) {
    e.preventDefault();
    const afterElement = e.target;
    if (afterElement && afterElement !== draggedItem) {
        list.insertBefore(draggedItem, afterElement);
    }
});