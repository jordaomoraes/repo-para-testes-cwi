
const exemplosItenPedidoVenda = require('./mocks/poc-dividir-json-array/exemplo-retorno.json')
class PocDividirJsonEmArray {



    async Testes() {
        const dados = exemplosItenPedidoVenda.response.body.response.body.PedCompra;

       // console.log(dados)
        // const teste = dados.entries();
        // console.log(teste)

        for (var i = 1; i < dados.length; i++) {
            console.log(dados[i]);
          }

        // for (let e of teste) {
        //     console.log(e);
        //   }
    }
}

module.exports = new PocDividirJsonEmArray();


