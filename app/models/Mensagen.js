class Mensagen {
    constructor() {
        throw new Error('Mensagen não pode ser instanciada')
    }

   static  printMensagem(mensagen,sucesso =  true) {
        if (sucesso) {
            Swal.fire(
                mensagen,
                'Click em ok!',
                'success'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: mensagen,
                footer: '<a href="">Caso tenha algum problema com esse projeto mande sua opnião no github?</a>'
            })
        }
    }

    _mensagem(texto, sucesso) {

        this._texto = texto
        this._sucesso = sucesso
    }
}