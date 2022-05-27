const container = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 6%;";  
    container.appendChild(div);
  }


// const grid = document.createElement('div');
// grid.classList.add('grid');
// grid.textContent = 'This is the glorious text-content!';
// container.appendChild(grid);