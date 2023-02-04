const gridContainer = document.getElementById('grid-container');
const erase = document.getElementById('clear');
let color = 'black';
let squaresPerSide = 16;


let newSize = document.querySelector('#new-input');
newSize.value = 16;
let labelSize = document.querySelector('#size-label');
labelSize.textContent = newSize.value;
newSize.addEventListener('mousemove', function() {
    labelSize.textContent = newSize.value;
  })
  

const newGrid = document.querySelector('#new');
newGrid.addEventListener('click', function() {
    clear();
    createGrid(newSize.value)
})

erase.addEventListener('click', function(){
    clear();
    createGrid(newSize.value)
})

createGrid(squaresPerSide);
// Function to create grid of squares
function createGrid(squaresPerSide) {
    let squareSize = document.getElementById('grid-container').clientWidth/squaresPerSide;

    for(let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let square = document.createElement('div');
        gridContainer.appendChild(square);
        square.classList.add('square');
        square.style.width = squareSize - 2 + 'px'
        square.style.height = squareSize - 2 + 'px'

    }
}

function removeCells() {
    while(gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
}

function clear() {
    gridContainer.innerHTML = '';
}

function draw(elem, color) {
    if(elem.target.classList == 'square') {
        let drawSquare = elem.target;
        drawSquare.style.backgroundColor = color;
    }
    else {return;};
}

function remove(elem) {
    if  (elem.target.classList == 'square') {
        let removeSquare = elem.target;
        removeSquare.style.backgroundColor = 'white';
    }
}

gridContainer.addEventListener('mousedown', event => {
    if(event.button == 0) {
        drawElem = draw(event, color);
    }
    else if (event.button == 2) {
        removeElem = remove(event)
    }
    
})

// gridContainer.addEventListener('contextmenu', event => {
//     removeElem = remove(event);
//     return false;
// }, false)