// Global variables for grid
let squaresPerSide = 16;
let totalSquares = squaresPerSide *  squaresPerSide;
let squareColor = 'deeppink';

let square = document.createElement('div');

// Get container for grid elements
const container = document.getElementById('container');
container.style.display = 'grid';

const resetButton = document.getElementById('remakeGridButton');
resetButton.addEventListener('click', function () {remakeGrid()});

const createGrid = () => {
    declareGridColumns();
    declareGridRows();
    for(let i = (squaresPerSide*squaresPerSide); i > 0; i--){
       createAndAppendSquare();
    }
}
const declareGridColumns = () => {
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
}

const declareGridRows = () => {
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
}

const createAndAppendSquare = () => {
    let square = document.createElement('div');
    square.id = 'square';
    square.addEventListener('mouseenter', function () {square.className = squareColor});
    container.appendChild(square);
}

const remakeGrid = () => {
    squaresPerSide = prompt('How many squares per side?');
    if(squaresPerSide > 100){
        squaresPerSide = 100;
        alert('Maximum number of squares is 100');
    }
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    createGrid();
}

// Functions for changing color of brush
const changeToPink = () => {
    let everyCell = container.children;
    for(let i = (everyCell.length - 1); i >= 0; i--){
        everyCell[i].removeEventListener('mouseenter', function () {square.className = squareColor});
        squareColor = "deeppink";
        everyCell[i].addEventListener('mouseenter', function () {square.className = squareColor});
    }
}
const changeToViolet = () => {
    let everyCell = container.children;
    for(let i = (everyCell.length - 1); i >= 0; i--){
        everyCell[i].removeEventListener('mouseenter', function () {square.className = squareColor});
        squareColor = "blueviolet";
        everyCell[i].addEventListener('mouseenter', function () {square.className = squareColor});
    }
}
const changeToBlue = () => {
    let everyCell = container.children;
    for(let i = (everyCell.length - 1); i >= 0; i--){
        everyCell[i].removeEventListener('mouseenter', function () {square.className = squareColor});
        squareColor = "blue";
        everyCell[i].addEventListener('mouseenter', function () {square.className = squareColor});
    }
}


// Buttons for changing color of brush
const pinkButton = document.getElementById('pinkButton');
pinkButton.addEventListener('click', changeToPink);

const violetButton =  document.getElementById('violetButton');
violetButton.addEventListener('click', changeToViolet);

const  blueButton = document.getElementById('blue');
blueButton.addEventListener('click', changeToBlue);


createGrid();