let newSize = 0;
let gridSize = 0;
let newHW = 0;
let HW = 0;

function grid(newSize) {
    if (newSize === 0){
     for (let i = 0; i < 256; i++){
        let grid = document.createElement(`div${i}`);
        grid.className = 'foo';
        grid.style.width = "40px";
        grid.style.height = "40px";
        grid.style.backgroundColor = 'white';
        document.querySelector('.grid').appendChild(grid);
    } 
}  
 else {
        for (let i = 0; i < newSize; i++){
        let grid = document.createElement(`div${i}`);
        grid.className = 'foo';
        grid.style.width = HW;
        grid.style.height = HW;
        grid.style.backgroundColor = 'green';
        document.querySelector('.grid').appendChild(grid);
    } 
}
      let gridBox = document.getElementsByClassName("foo");
        for( let i = 0; i < gridBox.length; i++){
        gridBox[i].addEventListener("mouseover", function(){
        gridBox[i].style.backgroundColor = "red";})
}
}
grid(newSize);

document.querySelector('#dim').addEventListener('click', function(){
    gridSize = parseInt(prompt("Enter a new Grid size from 10 - 100"), 10);
    newSize = gridSize * gridSize;
    newHW = 640/gridSize;
    HW = `${newHW}px`;
    reset();
    grid(newSize);
});

function reset(){
    let remove = document.getElementsByClassName("foo");
    while(remove.length > 0){
        remove[0].remove();
    }
}

    
    
