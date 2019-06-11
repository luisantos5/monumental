/**
 * Classe para modelar um monumento
 */
export default class Mon {
    constructor(idMon, name, country, description, photo, video) {
        this.idMon = idMon
        this.name = name
        this.country = country
        this.description = description
        this.photo = photo
        this.video = video
    }

    // ordenação
    //Compara duas monas pelo seu nome. Faz uma ordenação alfabética crescente
    static compare(monA, monB) {
        if (monA.name < monB.name)
            return -1;
        if (monA.name > monB.name)
            return 1;
        return 0;
    }
}  


