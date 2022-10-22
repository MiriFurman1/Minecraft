import{drawFunc} from './draw.js'
const gameGrid=document.querySelector("#game-grid")
let currentTool;
let inventoryList=document.querySelectorAll("li")
let icons=document.querySelector("#inventory")
let tools=document.querySelector(".tools")
let numOfMaterial;
let materialArr=[0,0,0];
let arrPlace;
let row;
let column;

const gameFunc=()=>{
    drawFunc()
    removeElements()
    selectMaterial()
    chooseTools()
    addMaterialToBoard()
    restart()
}

gameFunc()

function chooseTools(){
    tools.addEventListener("click",(e)=>{
        currentTool=e.target
    })
}


const manageInventory=(material,action)=>{
    
    if(material==="wood"||material==="tree-stem"){
        arrPlace=0;
    }
    if(material==="rock"){
        arrPlace=1;
    }
    if(material==="soil"||material=="ground"){
        arrPlace=2;
    }

    let Inventory= inventoryList[arrPlace]
    if(action==="add"){
        numOfMaterial=parseInt(Inventory.innerHTML)+1
        Inventory.innerHTML=numOfMaterial
        materialArr[arrPlace]=numOfMaterial
    }
    if(action==="remove"){
        numOfMaterial=parseInt(Inventory.innerHTML)-1
        Inventory.innerHTML=numOfMaterial
        materialArr[arrPlace]=numOfMaterial
    }


}

function removeElements(){
    gameGrid.addEventListener("click",(e)=>{

        if ((e.target.classList.contains("tree-leaf")||e.target.classList.contains("tree-stem"))&&currentTool===axe){
            e.target.classList.remove("tree-leaf")
            e.target.classList.remove("tree-stem")
            e.target.classList.add("to-fill")
            manageInventory("wood","add")
        }
    
        if ((e.target.classList.contains("rock"))&&currentTool===pickaxe){
            e.target.classList.remove("rock")
            manageInventory("rock","add")
            e.target.classList.add("to-fill")
        }
    
        if ((e.target.classList.contains("ground")||e.target.classList.contains("grass"))&&currentTool===shovel){
            e.target.classList.remove("ground")
            e.target.classList.remove("grass") 
            e.target.classList.add("to-fill")
            manageInventory("soil","add")
        }
    })
}

function selectMaterial(){
    icons.addEventListener("click",(e)=>{
        if(e.target.classList.contains('wood-available')){
            currentTool="tree-stem"
            arrPlace=0;
        }
        if(e.target.classList.contains('stone-available')){
            currentTool="rock"
            arrPlace=1;
        }
        if(e.target.classList.contains('soil-available')){
            currentTool="ground"
            arrPlace=2;
        }
        
    })
}

function addMaterialToBoard(){


    gameGrid.addEventListener("click",(e)=>{
        let currentLocation=e.target
        
        if(currentLocation.classList.contains("to-fill")&&((currentTool=="rock")||(currentTool=="ground")||(currentTool=="tree-stem"))){
            if(materialArr[arrPlace]>0&&!currentLocation.classList.contains("rock")){
                e.target.classList.add(currentTool)
                manageInventory(currentTool,"remove")
                let cellName= currentLocation.classList[0]
                    row=cellName.split("-")[1]
                    column=cellName.split("-")[2]
                    let newRowToFill=row-1
                    let currentCell=document.querySelector(".cell"+'-'+`${newRowToFill}`+'-'+`${column}`) 
                    currentCell.classList.add("to-fill")
            }
        }
    })
}

function restart(){
    const restartBtn=document.querySelector("#restart")
    restartBtn.addEventListener("click",(e)=>{
        window.location='/'
    })
}

