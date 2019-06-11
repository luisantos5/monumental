import {
    addMon, removeMon
} from "../models/main"




/* // Chamada da função responsável pela exibição do catálogo
// Por emissão, não passa qualquer filtro, ou seja, são exibidas todos os monumentos
renderCatalog()

/**
 * Função que exibe o catálogo mediante um conjunto de filtros opcionais
 * @param {string} filterName Filtro para o nome do monumento
 * @param {string} filterGenre Filtro para o género do monumento
 */
function renderCatalog(filterName = "", filterGenre = "") {
    const myCatalog = document.querySelector("#myCatalog")
    let result = ""
    let i = 0
    for (const mon of mons) {
        // Aplicação do filtro
        if ((filterName !== "" && !mon.name.startsWith(filterName)) ||
            (filterGenre !== "" && mon.genre !== filterGenre)
        ) {
            continue;
        }
        // Criação de linha
        if (i % 3 === 0) {
            result += `<div class="row">`
        }
        // Geração do card
        result += `
        <div class="col-sm-4">
            <div class="card">
                <img src="${mon.photo}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${mon.name}</h5>
                    <p class="card-text">${mon.genre}</p>
                    <button id="${mon.name}" class="btn btn-primary view">Ver mais</button>
        `
        // Só adiciona botão de "Remover" a um utilizador autenticado
        if (sessionStorage.getItem("loggedUser")) {
            result += `<button id="${mon.name}" class="btn btn-danger remove">Remover</button>`
        }
        result += ` 
                </div>
            </div>
        </div>
    `
        i++
        // Criação do fecho da linha
        if (i % 3 === 0) {
            result += `</div>`
        }
    }
    // Atribuição de todos os cards gerados ao elemento com id myCatalog
    myCatalog.innerHTML = result

    // Programar todos os botões ver mais
    const btnsSeeMore = document.getElementsByClassName("view")
    for (const elem of btnsSeeMore) {
        elem.addEventListener("click", function () {
            setCurrentMon(this.id)
        })
    }

    // Programar todos os botões remover
    const btnsRemove = document.getElementsByClassName("remove")
    for (const elem of btnsRemove) {
        elem.addEventListener("click", function () {
            console.log("Remover")
            // O this.id é o valor do atributo id de cada elemento button
            removeMon(this.id)
        })
    }
}

// Clique no botão de filtro
document.querySelector("#btnFilter").addEventListener("click", function () {
    const txtMon = document.querySelector("#txtMon").value
    const sltGenre = document.querySelector("#sltGenre").value
    // Chama a função responsável pela exibição do catálogo com os filtros respetivos
   // renderCatalog(txtBand, sltGenre)
})

// Clique no botão de ordenação
document.querySelector("#btnSort").addEventListener("click", function () {
    sortMons()
    renderCatalog()
}) 