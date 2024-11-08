const masterDiv = document.querySelector("#master-div");
const resetButton = document.querySelector(".reset-button");

for(var j = 0; j < 16; j++){
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "rows")
    for(var i = 0; i < 16; i++){
        const div = document.createElement("div");
        rowDiv.appendChild(div);
        //div.textContent = i;
        div.setAttribute("class", "cells");
    }
    masterDiv.appendChild(rowDiv)
}

const divs = document.querySelectorAll(".cells")
divs.forEach((div) => {div.addEventListener("mouseover", function(e){
    div.setAttribute("class", "hovered-cell")
});
})

resetButton.addEventListener("click", function(e){
    console.log(e);
    divs.forEach((div) => {div.setAttribute("class","cells")});
});


