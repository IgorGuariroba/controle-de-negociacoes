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
                               <td>${DateHelper.dataParaFormatStringBr(n.data)}<i class="bi bi-calendar3 ms-3"></i></td>
                               <td><span class="badge bg-secondary">${n.quantidade}</span></td>
                               <td>${parseInt(n.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                               <td>${n.volume.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                               </tr>
                            
                            `).join('')
                         }
                    </tbody>
                    <tfoot>
                        <td colspan="3">Total</td>
                        <td class="text-center">${model.negociacoes.reduce((total,n) => total + n.volume,0.0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                    </tfoot>
              </table>
        `
    }

    update(model) {
        this._element.innerHTML = this._template(model)
    }


}