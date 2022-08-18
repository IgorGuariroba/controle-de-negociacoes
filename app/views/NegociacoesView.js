class NegociacoesView {
    constructor(element) {
        this._element = element
    }

    _template() {
        return `
              <table class="table table-hover table-striped table-bordered tab-acao">
                   <thead class="thead-dark">
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                    </thead>

                    <tbody>
                    </tbody>

                    <tfoot>
                    </tfoot>
              </table>
        `
    }

    update() {
        this._element.innerHTML = this._template()
    }


}