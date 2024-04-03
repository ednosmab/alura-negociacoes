import { View } from "./view.js"

export class MensagemView extends View<string>{

    protected template(model: string, alerta: string ): string {
        return `
            <p class="alert ${alerta}">${model}</p>
        `
    }

    public update(model: string, alerta: string): void {
        const template = this.template(model, alerta)
        this.elemento.innerHTML = template
    }
}