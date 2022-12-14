const DEFAULT_SIZE = 16;

const drawArea = document.querySelector("#drawArea");
const pixels = document.querySelectorAll("#drawArea > div");
const btnSize = document.querySelector("#btnSize");
const btnClear = document.querySelector("#btnClear");


function createDrawArea(width){
    numOfPixels = width * width;
    for (let i = 0; i < numOfPixels; i++ ) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = ((800/width)-2) + "px";
        pixel.style.height = ((800/width)-2) + "px";
        pixel.addEventListener('mouseover', () => {
            pixel.classList.add("colored");
        })
        document.getElementById("drawArea").appendChild(pixel);
    }
    
}

function removeDrawArea() {
    const oldPixels = document.getElementsByClassName("pixel");
    while (oldPixels.length > 0) {
        oldPixels[0].parentNode.removeChild(oldPixels[0]);
    }
}

function changeGridSize(size) {
    let oldSize = size;
    size = prompt("Enter number of pixels for each side: (max 100)");
    size = parseInt(size);
    if ((size <= 100) && (size >= 1)) {
        removeDrawArea();
        createDrawArea(size);
    }
    else {
        alert("Invalid entry. Please try again.");
        size = oldSize;
    }
    return size;
}

let size = DEFAULT_SIZE;

createDrawArea(size);

btnSize.addEventListener('click', () => {
    size = changeGridSize(size);
})  

btnClear.addEventListener('click', () => {
    removeDrawArea();
    createDrawArea(size);
})