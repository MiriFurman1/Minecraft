import{drawFunc} from './draw.js'
const gameGrid=document.querySelector("#game-grid")
let currentTool;
let inventoryList=document.querySelectorAll("li")
let axe=document.querySelector("#axe")
let pickaxe=document.querySelector("#pickaxe")
let shovel=document.querySelector("#shovel")

const gameFunc=()=>{
    drawFunc()
}

gameFunc()

axe.addEventListener("click",(e)=>{
    currentTool=axe
    console.log(currentTool)
})

pickaxe.addEventListener("click",(e)=>{
    currentTool=pickaxe
    console.log(currentTool)
})

shovel.addEventListener("click",(e)=>{
    currentTool=shovel
    console.log(currentTool)
})
const addToInventory=(material)=>{
    let arrPlace;
    let sliceUntil;
    if(material==="wood"){
        arrPlace=0;
        sliceUntil=6;
    }
    if(material==="rock"){
        arrPlace=1;
        sliceUntil=7;
    }
    if(material==="soil"){
        arrPlace=2;
        sliceUntil=6;
    }
    let Inventory= inventoryList[arrPlace]
    let numOfMaterial=(parseInt(Inventory.innerHTML.slice(sliceUntil,))+1)
    Inventory.innerHTML=Inventory.innerHTML.slice(0,sliceUntil)+numOfMaterial
}
gameGrid.addEventListener("click",(e)=>{

    if ((e.target.classList.contains("tree-leaf")||e.target.classList.contains("tree-stem"))&&currentTool===axe){
        e.target.classList.remove("tree-leaf")
        e.target.classList.remove("tree-stem")
        addToInventory("wood")
    }

    if ((e.target.classList.contains("rock"))&&currentTool===pickaxe){
        e.target.classList.remove("rock")
        addToInventory("rock")
    }

    if ((e.target.classList.contains("ground")||e.target.classList.contains("grass"))&&currentTool===shovel){
        e.target.classList.remove("ground")
        e.target.classList.remove("grass") 
        addToInventory("soil")
    }
})