export abstract class View <T>{

    protected elemento: HTMLElement
    private escapar = false

    constructor(seletor: string, escapar?: boolean) {

        const elemento = document.querySelector(seletor)

        if(elemento) {
            this.elemento = elemento as HTMLElement
        }else {
            throw Error(`Seletor ${seletor} não existe no DOM. Por favor verifique`)
        }

        if(escapar) {
            this.escapar = escapar
        }
    }

    public update(model: T, alerta?: T): void {
        let template = this.template(model)
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '')
        }
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T, alerta?: T): string;
}