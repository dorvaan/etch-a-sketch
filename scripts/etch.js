const container = document.querySelector('.container');
let gridSide = 16


// Build Grid
function buildGrid() {
    const cellsize = (600 - (gridSide * 2 + 2)) / gridSide + "px"
    for (let i = 1; i < (gridSide * gridSide) + 1; i++) {
        const div = document.createElement('div');
        div.classList.add('grid')
        div.style.width = cellsize;
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
    gridSide = prompt("How many squares per side?")
    buildGrid();
}