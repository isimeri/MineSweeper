document.addEventListener("DOMContentLoaded", () => {

    const grid = document.querySelector(".grid-container");
    const nrFlagsDiv = document.querySelector(".flags-left");
    const nrBombs = 20;
    const width = 10;
    let nrUncovered = 0;
    let nrFlags = 0;
    let gameOver = false;
    let cellArray = [];

    const bombsArray = Array(nrBombs).fill("bomb");
    const emptyArray = Array(width*width-nrBombs).fill("empty");
    const gameArray = emptyArray.concat(bombsArray);
    const shuffledArray = gameArray.sort(() => {return Math.random() - 0.5;});


    function clickCell(cell){
        let id = parseInt(cell.id);
        if(gameOver){
            return;
        }
        if(cell.classList.contains("uncovered")||cell.classList.contains("flag")){
            return;
        }
        if(cell.classList.contains("bomb")){
            uLost(cell);
            //gameOver = true;
            return;
        }else{
            cell.classList.add('uncovered');
            nrUncovered++;
            let data = cell.getAttribute("data");
            if(data!==0)
                cell.innerHTML = data;
            if(nrUncovered===width*width-nrBombs){
                gameOver=true;
                cellArray.forEach(cell => {
                    if(cell.classList.contains("bomb") && !cell.classList.contains("flag")){
                        cell.classList.add("revealedBomb");
                        cell.innerHTML = "💣";
                    }
                })
                alert("u r winnar wow");
                return;
            }
            clickCallback(cell, id);
        }
    }

    function addFlag(cell){

        if(gameOver){
            return;
        }
        if(!cell.classList.contains("uncovered") && nrFlags < nrBombs){
            if(!cell.classList.contains("flag")){
                cell.classList.add("flag");
                cell.innerHTML = "🚩"
                nrFlags++;
                nrFlagsDiv.innerText = `Flags left: ${20-nrFlags}`;
                checkForWin();
            }else{
                cell.classList.remove("flag");
                cell.innerHTML = "";
                nrFlags--;
                nrFlagsDiv.innerText = `Flags left: ${20 - nrFlags}`;
            }
        }
    }

    function uLost(cell){
        gameOver = true;
        alert("u lost lmao, this is so sad");
        cell.classList.add("revealedBomb");
        cellArray.forEach(cell => {
            if(cell.classList.contains("bomb")){
                cell.classList.add("revealedBomb");
                cell.innerHTML = "💣";
            }
        })
    }


    function createBoard(){

        for(let i = 0; i<width*width; i++){
            let cell = document.createElement("div");
            cell.setAttribute("id", i);
            cell.classList.add("cell");
            cell.classList.add(shuffledArray[i]);
            grid.appendChild(cell);
            cellArray.push(cell);

            $(cell).on("click", function(e){
                e.preventDefault();
                if(e.ctrlKey){
                    addFlag(cell);
                }
            });
            cell.addEventListener("click", function(e){
                if(e.ctrlKey){
                    return;
                }
                clickCell(cell);
            });
            
        }

        for(let i = 0; i<cellArray.length; i++){
            let leftEdge = (i%10===0);
            let rightEdge = (i%10===width-1);
            let cell = cellArray[i];
            //console.log("yo ",cell);
            if(cellArray[i].classList.contains("empty")){

                let data = 0;
                if(!leftEdge && i > 10 && shuffledArray[i - width - 1] === "bomb"){ //top left neigbor
                    data++;
                }
                if(i > 9 && shuffledArray[i - width] === "bomb"){ //top neighbor
                    data++;
                }
                if(!rightEdge && i > 9 && shuffledArray[i - width + 1] === "bomb"){ // top right neighbor
                    data++;
                }
                if(!rightEdge && shuffledArray[i + 1] === "bomb"){   //right neighbor
                    data++;
                }
                if(!rightEdge && i < 89 && shuffledArray[i + width +1] === "bomb"){ //bottom right neighbor
                    data++;
                }
                if(i < 90 && shuffledArray[i + width] === "bomb"){    //bottom neighbor
                    data++;
                }
                if(!leftEdge && i < 90 && shuffledArray[i + width - 1] == "bomb"){ //bottom left neighbor
                    data++;
                }
                if(!leftEdge && shuffledArray[i - 1] === "bomb"){    //left neighbor
                    data++;
                }
                cellArray[i].setAttribute("data", data);
            }
        }
    }


    function clickCallback(cell, id){

        let leftEdge = (id%10===0);
        let rightEdge = (id%10===width-1);
        let data = parseInt(cell.getAttribute("data"));
        //console.log("estem in callback");
        //console.log(`data${data} left edge${leftEdge} id ${id}`);
        if(data === 0){
            //console.log("suntem in iful mare");
            if(!leftEdge && id > 10){   //top left neighbor
                //console.log("mesaj in plm");
                clickCell(cellArray[id - width - 1]);
            }
            if(id > 9){ //top neighbor
                clickCell(cellArray[id - width]);
            }
            if(!rightEdge && id > 9){ // top right neighbor
                clickCell(cellArray[id - width + 1]);
            }
            if(!rightEdge){   //right neighbor
                clickCell(cellArray[id + 1]);
            }
            if(!rightEdge && id < 89){ //bottom right neighbor
                clickCell(cellArray[id + width + 1]);
            }
            if(id < 90){    //bottom neighbor
                clickCell(cellArray[id + width]);
            }
            if(!leftEdge && id < 90){ //bottom left neighbor
                clickCell(cellArray[id + width - 1]);
            }
            if(!leftEdge){    //left neighbor
                clickCell(cellArray[id - 1]);
            }
        }
    }
    
    function checkForWin(){

        let foundBomb = 0;
        for(let i = 0; i < cellArray.length; i++)
        {
            if(cell.classList.contains("bomb") && cell.classList.contains("flag")){
                foundBomb++;
            }
        }
        if(foundBomb==nrBombs)
        {
            gameOver=true;
            alert("u r winnar wow");
        }
    }
    createBoard();


});

