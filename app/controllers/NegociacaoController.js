class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._quantidade = $('[data-quantidade]')
        this._valor = $('[data-valor]')
        this._data = $('[data-data]')
        this._listaNegociacoes = new ListaNegociacoes()
        Object.freeze(this)
    }

    adiciona(event) {
        event.preventDefault()
        this._listaNegociacoes.adiciona(this._criaNegociacao())

        this._limpaFormulario()
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        )
    }

    _limpaFormulario() {
        this._data.value = ''
        this._valor.value = 0.0
        this._quantidade.value = 1
        this._data.focus()
    }
}