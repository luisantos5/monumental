import Mon from "./mon.js"
import User from "./user.js"

// Array para guardar os objetos Band
export let mons = []


if (localStorage.getItem("mons")) {
    mons = JSON.parse(localStorage.getItem("mons"))  //IMPORTANTE 
    /* 
        FAZ COM QUE O MEU ARRAY BANDS NAO SEJA SEMPRE LIMPO QUANO FEHCAR O bROWSER
    */
}
else {
    const mon1 = new Mon("Torre dos Clérigos", "Portugal", "A Igreja e Torre dos Clérigos (século XVIII) é um notável conjunto arquitetónico situado na cidade do PortoPortugal, sendo considerado o ex-libris dessa cidade.", "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg")
    const mon2 = new Mon("Torre de Pisa", "Itália", "A torre inclinada de Pisa (em italiano Torre pendente di Pisa), ou simplesmente Torre de Pisa, é um campanário (campanile ou campanário autônomo) da catedral da cidade italiana de Pisa. Está situada atrás da catedral, e é a terceira mais antiga estrutura na praça da Catedral de Pisa (Campo dei Miracoli), depois da catedral e do baptistério. Embora destinada a ficar na vertical, a torre começou a inclinar-se para sudeste logo após o início da construção, em 1173, devido a uma fundação mal construída e a um solo de fundação mal consolidado, que permitiu à fundação ficar com assentamentos diferenciais. A torre atualmente se inclina para o sudoeste. A altura do solo ao topo da torre é de 55,86 metros no lado mais baixo e de 56,70 metros na parte mais alta. A espessura das paredes na base é de 4,09 metros e 2,48 metros no topo. Seu peso é estimado em 14 500 toneladas. A torre tem 296 ou 294 degraus: o sétimo andar da face norte das escadas tem dois degraus a menos. Antes do trabalho de restauração realizado entre 1990 e 2001 a torre estava inclinada com um ângulo de 5,5 graus, estando agora a torre inclinada em cerca de 3,99 graus", "http://tripnet.com.br/wp-content/uploads/pisa.jpg")

    mons.push(mon1, mon2)
    localStorage.setItem("mons", JSON.stringify(mons))
}

export function addMon(txtName, sltCountry, txtDescription, txtPhoto, txtVideo) {
    let existMon = false

    for (const mon of mons) {
        if (mon.name === txtName) {
            existMon = true
            break
        }
    }

    if (existMon === false) {
        mons.push(new Mon(txtName, sltCountry, txtDescription, txtPhoto, txtVideo))
        localStorage.setItem("mons", JSON.stringify(mons))
        alert(`Graças a ti, o monumento ${txtName} agora é Monumental!`)
        location.href = "../index.html"

    }
    else {
        alert(`O Monumento ${txtName} já existe!`)
    }
}

// Array para guardar os objetos User
export const users = []

const user1 = new User("admin", "12345")
const user2 = new User("luis", "54321")
const user3 = new User("joao", "54321")

users.push(user1, user2, user3)


/**
 * Função que recebe o nome de um monumento e elimina o monumento respetiva
 * COPIADO E NÃO CONLUIDO
 * alterar is butoes no catalogo com ids e class
 * 
 * @param {string} txtName Nome do monumento
 */
export function removeMon(txtName) {
    let removeMon = confirm(`Deseja mesmo remover o monumento ${txtName}?`)
    if (removeMon) {
        for (let i = 0; i < mons.length; i++) {
            if (mons[i].name === txtName) {
                mons.splice(i, 1)
            }
        }
        localStorage.setItem("mons", JSON.stringify(mons))
        location.reload()
    }
}