const gameGrid=document.querySelector("#game-grid")
let numberOfColumns=getComputedStyle(gameGrid).gridTemplateColumns.split(' ').length

const makeGridDivs=()=>{
    for(let i=1;i<=20;i++){//rows
        for(let j=1;j<=numberOfColumns;j++){ //columns
            let cell=document.createElement("div")
            cell.classList.add("cell"+'-'+`${i}`+'-'+`${j}`)
            gameGrid.appendChild(cell)
        }
    }
}

const drawGround=()=>{
    for(let i=16;i<=20;i++){//rows
        for(let j=1;j<=numberOfColumns;j++){ //columns
            let currentCell=document.querySelector(".cell"+'-'+`${i}`+'-'+`${j}`)
            currentCell.style.gridRowStart=i
            currentCell.classList.add("ground")
        }
    } 
}
const drawGrass=()=>{
        for(let j=1;j<=numberOfColumns;j++){ //columns
            let currentCell=document.querySelector(".cell-15"+'-'+`${j}`) // grass can be only on row 15
            currentCell.classList.add("grass")
        }
}

const drawRocks=(rocksNum)=>{ //number on rocks can be changed
    for(let k=0;k<rocksNum;k++){
        let j=Math.floor((Math.random()*numberOfColumns))+1 //rocks can be on all columns
        let i=Math.floor((Math.random()*6))+14 //rocks can be only on row 14 or lower
        let currentCell=document.querySelector(".cell"+'-'+`${i}`+'-'+`${j}`)
        if(currentCell.classList.contains("tree-stem")||currentCell.classList.contains("rock")){
            k-- //if the rock is on something else,rerun the loop
        }
        else{
            currentCell.classList.add("rock")
            currentCell.classList.remove("ground")
            currentCell.classList.remove("grass")
        }
    }

}
const drawStem=()=>{
    for(let i=7;i<15;i++){
        for(let j=6;j<8;j++){
            let currentCell=document.querySelector(".cell"+'-'+`${i}`+'-'+`${j}`)
            currentCell.classList.add("tree-stem")
        }
    }
}

const drawLeaf=()=>{
    for(let i=4;i<7;i++){
        for(let j=4;j<10;j++){
            let currentCell=document.querySelector(".cell"+'-'+`${i}`+'-'+`${j}`)
            currentCell.classList.add("tree-leaf")
        }
    }
    for(let i=2;i<4;i++){
        for(let j=5;j<9;j++){
            let currentCell=document.querySelector(".cell"+'-'+`${i}`+'-'+`${j}`)
            currentCell.classList.add("tree-leaf")
        }
    }
}
const drawCloud=()=>{
    for(let i=2;i<3;i++){
        for(let j=2;j<4;j++){
            let currentCell=document.querySelector(".cell"+'-'+`${i}`+'-'+`${j}`)
            currentCell.classList.add("cloud")
        }
    }
    for(let i=2;i<4;i++){
        for(let j=15;j<17;j++){
            let currentCell=document.querySelector(".cell"+'-'+`${i}`+'-'+`${j}`)
            if(currentCell){
                currentCell.classList.add("cloud")
            }
            
        }
    }
    for(let i=3;i<5;i++){
        for(let j=25;j<28;j++){
            let currentCell=document.querySelector(".cell"+'-'+`${i}`+'-'+`${j}`)
            if(currentCell){
                currentCell.classList.add("cloud")
            }
        }
    }
}


const randomSky=()=>{
    const gameGrid=document.querySelector("#game-grid")
    const colorArr=["#F1B4E6","#F0EFEB","#EEF1FF","#AEEE91","#B39FCB","#A3CC9F","#B5F8FF","#90F5DA","#E490F5"]
    let randomColor=Math.floor(Math.random()*8)
    console.log(randomColor)
    gameGrid.style.backgroundColor=colorArr[randomColor];
}

const placeAboveGround=()=>{
    for(let j=1;j<numberOfColumns;j++){
        let currentCell=document.querySelector(".cell-14"+'-'+`${j}`) 
            currentCell.classList.add("to-fill")
    }
    
}
const drawTree=()=>{
drawStem()
drawLeaf()
}

export function drawFunc(){
    makeGridDivs()
    randomSky()
    drawGround()
    drawGrass()
    drawTree()
    drawCloud()
    setTimeout(() =>drawRocks(10), 50); 
    placeAboveGround()
}