const masterDiv = document.querySelector("#master-div");
const resetButton = document.querySelector(".reset-button");
const promptButton = document.querySelector(".prompt-button");

for(var j = 0; j < 16; j++){
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "rows")
    for(var i = 0; i < 16; i++){
        const div = document.createElement("div");
        rowDiv.appendChild(div);
        div.setAttribute("class", "cells");
    }
    masterDiv.appendChild(rowDiv)
}

promptButton.addEventListener("click", function(e){
    var value = window.prompt("Hello, Please Enter a Number From 10-100 ","10");
    if(isNaN(Number(value)) === true || 10 > Number(value) || Number(value) > 100){    
        value = null;
        alert("Hello, Please Enter a Number From 10-100 Next Time");  
    }
    
    if(isNaN(Number(value)) === false && value != null){
        console.log(isNaN(Number(value)))
        console.log(Number(value))
        while(masterDiv.hasChildNodes()){
        masterDiv.removeChild(masterDiv.firstChild)
        }
        for(var j = 0; j < value; j++){
            const rowDiv = document.createElement("div");
            rowDiv.setAttribute("class", "rows")
            for(var i = 0; i < value; i++){
                const div = document.createElement("div");
                rowDiv.appendChild(div);
                div.setAttribute("class", "cells");
            }
            masterDiv.appendChild(rowDiv)
        }
    }
    const divs = document.querySelectorAll(".cells")
    divs.forEach((div) => {div.addEventListener("mouseover", function(e){
    div.setAttribute("class", "hovered-cell")
});
})
});

const divs = document.querySelectorAll(".cells")
divs.forEach((div) => {div.addEventListener("mouseover", function(e){
    div.setAttribute("class", "hovered-cell")
});
})

resetButton.addEventListener("click", function(e){
    console.log(e);
    divs.forEach((div) => {div.setAttribute("class","cells")});
});





