const container = document.querySelector('.container');

// Build Grid
for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.classList.add('grid')
    div.style.cssText = "border: 1px solid black; width: 35.125px";
    div.addEventListener("mouseover", function(color){
       // div.style.cssText = "border: 1px solid black; width: 35.125px; background-color: black;"    
       div.style.backgroundColor = "black";
        })
    container.appendChild(div);
}




//Color Grid

// const grid = document.querySelector('.grid');
// grid.addEventListener("mouseenter", grid.style.cssText = "background-color: gray;");

