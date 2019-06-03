import {addMon} from "../models/main.js"
import { mons } from "../models/main.js"


const form = document.querySelector("#frmAddMon")

form.addEventListener("submit", function(event){
    const txtName = document.querySelector("#txtName").value
    const sltCountry = document.querySelector("#sltCountry").value
    const txtDescription = document.querySelector("#txtDescription").value
    const txtPhoto = document.querySelector("#txtPhoto").value
    const txtVideo = document.querySelector("#txtVideo").value
    
    console.log("random")
    event.preventDefault()
    //addBand(txtName, sltGenre, txtDescription, txtPhoto, txtVideo)
    addMon(getLastId() + 1, txtName,sltCountry,txtDescription, txtPhoto, txtVideo)
    console.log("random")
   
})

function getLastId() {
    
    let lastId = 0
    if (mons.length > 0) {
        lastId = mons[mons.length-1].idMon
    }        
    return lastId
}