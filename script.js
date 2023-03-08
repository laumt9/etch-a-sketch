const gridContainer = document.getElementById('gridContainer');

//Event listeners for user input
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    clearGrid();
})

const blackBtn = document.getElementById('black');
blackBtn.addEventListener('click', () => {
    resetGrid(); 
    createGrid()
})

const rgbBtn = document.getElementById('rgb');
rgbBtn.addEventListener('click', () => {
    resetGrid(); 
    rgbGrid();
})

const slider = document.getElementById('slider');
slider.addEventListener('input', () => {
    updateDimensions();
});

const sliderBtn = document.getElementById('sliderBtn');
sliderBtn.addEventListener('click', () => {
    resetGrid(); 
    createGrid();
});

//Creates default 16x16 grid
function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('square');
        square.classList.add('square');
        gridContainer.appendChild(square);
        gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
        square.addEventListener('mouseover', () => {    
            square.style.backgroundColor = 'black';
        });
    };
    return;
}

//Creates grid from user input
function createGrid() {
    let userInput = updateDimensions();
    for (let i = 0; i < (userInput * userInput); i++) {
        const square = document.createElement('square');
        square.classList.add('square');
        gridContainer.appendChild(square)
        gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 2fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 2fr)`;
        square.addEventListener('mouseover', () => {    
            square.style.backgroundColor = 'black';
        });
    }
}

//Creates grid with RGB brush
function rgbGrid() {
    let userInput = updateDimensions();
    for (let i = 0; i < (userInput * userInput); i++) {
        const square = document.createElement('square');
        square.classList.add('square');
        gridContainer.appendChild(square)
        gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 2fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 2fr)`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
    }
}

//Generates random color
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
}

//Clears current grid
function clearGrid () {
    let userInput = updateDimensions()
    const square = gridContainer.children;
    for (let i = 0; i < (userInput * userInput); i++) {
        square[i].style.backgroundColor = 'white';
    }
}

//Removes previous grid
function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

//Updates dimensions div
function updateDimensions() {
    const sliderValue = document.getElementById('slider').value;
    const dimensions = document.getElementById('dimensions');
    dimensions.textContent = (sliderValue + " x " + sliderValue);
    return(sliderValue);
}

defaultGrid();