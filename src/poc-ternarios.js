
const exemplosItenPedidoVenda = require('./mocks/poc-ternario/exemplos.json')
class PocTernario {

    async Testes() {

        // const string = '2022-03-03 23:98:03'

        // const similarValue = exemplosItenPedidoVenda.Similar__c ?  exemplosItenPedidoVenda.Similar__c : ' - '

        // const teste = exemplosItenPedidoVenda.ProductCodeClient__c ?
        //               exemplosItenPedidoVenda.ProductCodeClient__c :
        //               exemplosItenPedidoVenda.Similar__c || 'zero'

        // console.log(teste)

        // const valorstr = "2022-03-03 23:98:03";
        // const sempontoevirgula = valorstr.replace(/-/g, "").replace(/\:/g, "").replace(/\s/g, "");

        // const teste = sempontoevirgula.slice(0, sempontoevirgula.length - 2);
        // console.log(sempontoevirgula)
        // console.log(teste)
        const valor1 = 202208310941;
        const valor2 = 202203060606;

        if (valor1 < valor2) {

            console.log(`Valor1 ${valor1} é maior`)

        } else {
            console.log(`Valor2 ${valor2} é maior`)
        }

    }
}

module.exports = new PocTernario();


