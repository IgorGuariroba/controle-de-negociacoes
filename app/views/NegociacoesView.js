class NegociacoesView {
    constructor(element) {
        this._element = element
    }

    _template(model) {

        return `
              <table class="table table-hover table-striped table-bordered tab-acao">
                   <thead class="thead-dark text-center">
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                    </thead>
                    <tbody class="text-center">
                        ${model.negociacoes.map(n => `
                               <tr>
                               <td>${DateHelper.dataParaFormatStringBr(n.data)}</td>
                               <td>${n.quantidade}</td>
                               <td>${n.valor}</td>
                               <td>${n.volume}</td>
                               </tr>
                            
                            `).join('')
                         }
                    </tbody>
                    <tfoot>
                    </tfoot>
              </table>
        `
    }

    update(model) {
        this._element.innerHTML = this._template(model)
    }


}