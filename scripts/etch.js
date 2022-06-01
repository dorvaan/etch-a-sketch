const container = document.querySelector('.container');
let gridside = 16
const gridsize = (600 - (gridside * 2 + 2)) / gridside + "px"

// Build Grid
function buildGrid() {
    for (let i = 1; i < (gridside * gridside) + 1; i++) {
        const div = document.createElement('div');
        div.classList.add('grid')
        div.style.width = gridsize;
        div.addEventListener("mouseover", function (color) {
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);
    }
}
buildGrid();

// Clear Grid & Create New
document.getElementById("button1").onclick = function removeElementsByClass() {
    const elements = document.getElementsByClassName("grid");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    buildGrid();
}