const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']; //This array will decide the colors to see the hovers

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

//Now we will define the function of setColor 
function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`
}

// Now we will define the function of removeColor 
function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

//Now we will define the function of getRandomColor 
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}