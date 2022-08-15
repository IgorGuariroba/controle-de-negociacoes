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

        let negociacao = new Negociacao(
            new Date(this._data.value.split(/-/g)),
            this._quantidade.value,
            this._valor.value,
        )

        console.log(negociacao);
    }
}