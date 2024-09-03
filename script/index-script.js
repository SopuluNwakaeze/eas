const masterDiv = document.querySelector("#master-div");

for(var j = 0; j < 16; j++){
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "rows")
    for(var i = 0; i < 16; i++){
        const div = document.createElement("div");
        rowDiv.appendChild(div);
        div.textContent = "test";
        div.setAttribute("class", "cells");
    }
    masterDiv.appendChild(rowDiv)
}
