function homework81(ref="index_hw8.html") {

    let grid_1 = document.getElementById("grid-1");  
    for (let i = 0; i < grid_1.children.length; i+=2) {
        grid_1.children[i].style.background = "#aff0ad";
        }
    console.log(grid_1)
}

function homework82() {
    
    let grid_1 = document.getElementById("grid-1");  
    for (let i = 1; i < grid_1.children.length; i+=2) {
        grid_1.children[i].classList.add("grid-item-background");
        }
    console.log(grid_1)
}

function homework83() {
    
    function toggleClass(element, className) {
        
        console.log(element.classList)
        console.log(typeof(element.classList))

        if (element.classList.contains(className)) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
        console.log(element.classList)
    }

    let grid_1 = document.getElementById("grid-1");  
    for (let i = 0; i < grid_1.children.length; i++) {
        toggleClass(grid_1.children[i], "grid-item-background")
        }
    console.log(grid_1)
}

function homework84() {
    
    let text = prompt('Input text to be added:')

    let element = document.getElementsByClassName("text-placeholder")[0]
    element.innerText = text;
    
    if (text.indexOf("1") != -1) {
        element.classList.add("numeric")
    }
    
    console.log(element)
}
