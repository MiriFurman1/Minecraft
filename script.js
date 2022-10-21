const gameGrid=document.querySelector("#game-grid")
let numberOfColumns=getComputedStyle(gameGrid).gridTemplateColumns.split(' ').length
const makeGridDivs=()=>{

    for(i=1;i<=20;i++){//rows
        for(j=1;j<=numberOfColumns;j++){ //columns
            let cell=document.createElement("div")
            cell.classList.add("cell"+`${i}`+`${j}`)
            gameGrid.appendChild(cell)
        }
    }
}

const drawGround=()=>{
    
    for(i=16;i<=20;i++){//rows
        for(j=1;j<=numberOfColumns;j++){ //columns
            let currentCell=document.querySelector(".cell"+`${i}`+`${j}`)
            currentCell.style.gridRowStart=i
            currentCell.classList.add("ground")

        }
    } 
}
const drawGrass=()=>{
        for(j=1;j<=numberOfColumns;j++){ //columns
            let currentCell=document.querySelector(".cell15"+`${j}`) // grass can be only on row 15
            currentCell.classList.add("grass")

        }
    
}
const drawRocks=(rocksNum)=>{ //number on rocks can be changed
    for(let k=0;k<rocksNum;k++){
        let j=Math.floor((Math.random()*20))+1 //rocks can be on all columns
        let i=Math.floor((Math.random()*6))+14 //rocks can be only on row 14 or lower
        let currentCell=document.querySelector(".cell"+`${i}`+`${j}`)
        currentCell.classList.add("rock")
        currentCell.classList.remove("ground")
    }

}
const drawStem=()=>{
    for(let i=7;i<15;i++){
        for(let j=10;j<12;j++){
            let currentCell=document.querySelector(".cell"+`${i}`+`${j}`)
            currentCell.classList.add("tree-stem")
        }
    }
}

const drawLeaf=()=>{
    for(let i=4;i<7;i++){
        for(let j=8;j<14;j++){
            let currentCell=document.querySelector(".cell"+`${i}`+`${j}`)
            currentCell.classList.add("tree-leaf")
        }
    }
    for(let i=2;i<4;i++){
        for(let j=9;j<13;j++){
            let currentCell=document.querySelector(".cell"+`${i}`+`${j}`)
            currentCell.classList.add("tree-leaf")
        }
    }
}
const drawTree=()=>{
drawStem()
drawLeaf()

}
const drawFunc=()=>{
    makeGridDivs()
    drawGround()
    drawGrass()
    drawRocks(10)
    drawTree()
}

const gameFunc=()=>{
    drawFunc()
}

gameFunc()
