const drawArea = document.querySelector("#drawArea");
const gridItem = document.querySelectorAll("#drawArea > div");

function createDrawArea(width){
    size = width * width;
    for (let i = 0; i < size; i++ ) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = ((500/width)-2) + "px";
        pixel.style.height = ((500/width)-2) + "px";
        document.getElementById("drawArea").appendChild(pixel);
    }
    
}

createDrawArea(32);