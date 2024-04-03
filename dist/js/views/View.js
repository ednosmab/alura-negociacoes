export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return ``;
    }
    update(model) {
        throw Error('Classe filha precisa implementar o método template');
    }
}
