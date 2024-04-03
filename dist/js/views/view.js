export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model, alerta) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
