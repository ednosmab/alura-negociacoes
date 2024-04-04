import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { NegociacoesView } from "../views/negociacoes-view.js"
import { MensagemView } from "../views/mensagem-view.js"
import { DiasDaSemana } from "../enumarations/dias-da-semana.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView("#mensagemView")

    constructor(){
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.negociacoesView.update(this.negociacoes)
    }

    public adiciona (): void {
        const negociacaoTemp = new Negociacao(null, 0, 0)
        const negociacao = negociacaoTemp.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis serão aceitas', 'alert-warning')
            return
        }
        this.negociacoes.adicionar(negociacao)
        this.limparFomulario()
        this.atualizaView()
        
    }
    

    private limparFomulario (): void {
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação adicionada com sucesso", "alert-success")
    }

    private ehDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }
}