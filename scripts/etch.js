const container = document.querySelector('.container');

// Build Grid
for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.classList.add('grid')
    div.style.cssText = "border: 1px solid black; width: 35.125px";  
    container.appendChild(div);
  }

  //Color Grid
let grid = document.getElementsByClassName("grid");

grid.addEventListener("mouseover", fuction(gridColor), {
    gridColor.target.style.color = "gray";
}


)


// const grid = document.createElement('div');
// grid.classList.add('grid');
// grid.textContent = 'This is the glorious text-content!';
// container.appendChild(grid);