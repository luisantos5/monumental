import {addMon} from "../models/main.js"

const form = document.querySelector("#frmAddMon")

form.addEventListener("submit", function(event){
    const txtName = document.querySelector("#txtName").value
    const sltCountry = document.querySelector("#sltCountry").value
    const txtDescription = document.querySelector("#txtDescription").value
    const txtPhoto = document.querySelector("#txtPhoto").value
    const txtVideo = document.querySelector("#txtVideo").value
    

    //addBand(txtName, sltGenre, txtDescription, txtPhoto, txtVideo)
    addMon(txtName,sltCountry,txtDescription, txtPhoto, txtVideo)

    event.preventDefault()
})