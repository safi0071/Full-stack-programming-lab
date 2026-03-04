const text = document.getElementById("text");

let fontSize = 16;

document.getElementById("increase").onclick = function() {
    fontSize += 2;
    text.style.fontSize = fontSize + "px";
};

document.getElementById("decrease").onclick = function() {
    fontSize -= 2;
    text.style.fontSize = fontSize + "px";
};

document.getElementById("color").onclick = function() {
    text.style.color = text.style.color === "red" ? "black" : "red";
};

document.getElementById("bg").onclick = function() {
    text.style.backgroundColor = text.style.backgroundColor === "yellow" ? "white" : "yellow";
};

document.getElementById("bold").onclick = function() {
    text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
};

document.getElementById("italic").onclick = function() {
    text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
};