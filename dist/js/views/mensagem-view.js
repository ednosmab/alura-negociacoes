import { View } from "./view.js";
export class MensagemView extends View {
    template(model, alerta) {
        return `
            <p class="alert ${alerta}">${model}</p>
        `;
    }
    update(model, alerta) {
        const template = this.template(model, alerta);
        this.elemento.innerHTML = template;
    }
}
