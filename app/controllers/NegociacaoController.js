class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._quantidade = $('[data-quantidade]')
        this._valor = $('[data-valor]')
        this._data = $('[data-data]')

        Object.freeze(this)
    }

    adiciona(event) {
        event.preventDefault()

        let helper = new DateHelper()
        let negotiation = new Negociacao(
            helper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value,
        )

        console.log(negotiation);
    }
}