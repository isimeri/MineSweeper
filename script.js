const grid = document.querySelector(".board");
const nrFlagsDiv = document.querySelector(".flags-left");
const gameOverMsg = document.querySelector(".game-over-message");
const nrBombs = 20;
const width = 10;
let nrUncovered = 0;
let nrFlags = 0;
let gameOver = false;
let domCellArray = [];

const bombsArray = Array(nrBombs).fill("bomb");
const emptyArray = Array(width*width-nrBombs).fill("empty");

const shuffledArray = shuffleCells();
const gameArray = shuffledArray.map((item, i) => {
    if(item === "bomb"){
        return {
            bomb: true,
            number: null
        }
    } else {
        let data = 0;
        let leftEdge = (i%10 === 0);
        let rightEdge = (i%10 === width - 1);

        if(shuffledArray[i] === "empty"){
            if(!leftEdge && i > 10 && shuffledArray[i - width - 1] === "bomb"){ 
                // top left neigbor is bomb
                data++;
            }
            if(i > 9 && shuffledArray[i - width] === "bomb"){ 
                // top neighbor is bomb
                data++;
            }
            if(!rightEdge && i > 9 && shuffledArray[i - width + 1] === "bomb"){ 
                // top right neighbor is bomb
                data++;
            }
            if(!rightEdge && shuffledArray[i + 1] === "bomb"){
                // right neighbor is bomb
                data++;
            }
            if(!rightEdge && i < 89 && shuffledArray[i + width +1] === "bomb"){
                // bottom right neighbor is bomb
                data++;
            }
            if(i < 90 && shuffledArray[i + width] === "bomb"){
                // bottom neighbor is bomb
                data++;
            }
            if(!leftEdge && i < 90 && shuffledArray[i + width - 1] == "bomb"){
                // bottom left neighbor is bomb
                data++;
            }
            if(!leftEdge && shuffledArray[i - 1] === "bomb"){
                // left neighbor is bomb
                data++;
            }
        }
        return {
            bomb: false,
            number: data
        }
    }
});

function shuffleCells(){
  const shuffled = [...emptyArray, ...bombsArray];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function clickCell(domCell){
    let id = parseInt(domCell.id);
    if(gameOver){
        return;
    }
    if(domCell.classList.contains("uncovered") || domCell.classList.contains("flag")){
        return;
    }
    if(gameArray[id].bomb){
        lose(domCell, id);
        return;
    } else {
        domCell.classList.add('uncovered');
        nrUncovered += 1;
        let data = gameArray[id].number;
        if(data)
            domCell.innerHTML = data;
        if(nrUncovered === width * width - nrBombs){
            
            gameArray.forEach((item, index) => {
                if(item.bomb && !domCellArray[index].classList.contains("flag")){
                    domCellArray[index].classList.add("revealed-bomb");
                    domCellArray[index].innerHTML = `<svg class="bomb-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bomb</title><path d="M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z" /></svg>`;
                }
            });
            win();
            return;
        }
        clickCallback(domCell, id);
    }
}

function addFlag(cell){

    if(gameOver){
        return;
    }
    if(!cell.classList.contains("uncovered")){
        if(!cell.classList.contains("flag") && nrFlags < nrBombs){
            cell.classList.add("flag");
            cell.innerHTML = `<svg class="flag-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>flag-variant</title><path d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3Z" /></svg>`;
            nrFlags++;
            nrFlagsDiv.innerText = `Flags left: ${20 - nrFlags}`;
            checkForWin();
        } else {
            cell.classList.remove("flag");
            cell.innerHTML = "";
            nrFlags--;
            nrFlagsDiv.innerText = `Flags left: ${20 - nrFlags}`;
        }
    }
}

function createBoard(){

    for(let i = 0; i<width*width; i++){
        let cell = document.createElement("div");
        cell.setAttribute("id", i);
        cell.classList.add("cell");
        grid.appendChild(cell);
        domCellArray.push(cell);

        cell.addEventListener("click", function(e){
            if(e.ctrlKey){
                addFlag(cell);
                return;
            }
            clickCell(cell);
        });
        
    }
}

function clickCallback(cell, id){

    let leftEdge = (id%10 === 0);
    let rightEdge = (id%10 === width - 1);
    let data = gameArray[id].number;

    if(data === 0){

        if(!leftEdge && id > 10){
            // click top left neighbor
            clickCell(domCellArray[id - width - 1]);
        }
        if(id > 9){
            // click top neighbor
            clickCell(domCellArray[id - width]);
        }
        if(!rightEdge && id > 9){
            // click top right neighbor
            clickCell(domCellArray[id - width + 1]);
        }
        if(!rightEdge){
            // click right neighbor
            clickCell(domCellArray[id + 1]);
        }
        if(!rightEdge && id < 89){
            // click bottom right neighbor
            clickCell(domCellArray[id + width + 1]);
        }
        if(id < 90){
            // click bottom neighbor
            clickCell(domCellArray[id + width]);
        }
        if(!leftEdge && id < 90){
            // click bottom left neighbor
            clickCell(domCellArray[id + width - 1]);
        }
        if(!leftEdge){
            // click left neighbor
            clickCell(domCellArray[id - 1]);
        }
    }
}

function checkForWin(){

    let foundBomb = 0;
    for(let i = 0; i < domCellArray.length; i++)
    {
        const domCell = domCellArray[i];
        if(gameArray[i].bomb && domCell.classList.contains("flag")){
            foundBomb++;
        }
    }
    if(foundBomb === nrBombs)
    {
        win();
    }
}

function lose(domCell, id){
    gameOver = true;
    gameOverMsg.classList.remove("hidden");
    gameOverMsg.textContent = "You lost...";
    domCell.classList.add("revealed-bomb");
    domCellArray.forEach((c, index) => {
        if(gameArray[index].bomb){
            c.classList.add("revealed-bomb");
            c.innerHTML = `<svg class="bomb-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bomb</title><path d="M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z" /></svg>`;
        }
    });
}

function win(){
    gameOver = true;
    gameOverMsg.classList.remove("hidden");
    gameOverMsg.textContent = "You won!";
}

createBoard();