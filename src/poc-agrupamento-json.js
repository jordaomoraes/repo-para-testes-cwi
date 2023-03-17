
const exemplosAgrupamento = require('./mocks/poc-agrupamento/exemplos.json')

class PocAgrupamentoJSON {
  async Testes() {

    const dados = exemplosAgrupamento.response.body.records;
    const chaves = [];
    let chaveMap ='';
    // for (let i = 0; i < dados.length; i += 1) {

    //   const codigoProduto = dados[i].Fornecedor__c === null ? null : dados[i].Fornecedor__c
    //   const codigoFilial = dados[i].Case__r.Oportunidade__r === null ? null : dados[i].Case__r.Oportunidade__r.BaseBranch__r.SubsidiaryCode__c
    //   const nomeVendedor = dados[i].Case__r.Oportunidade__r === null ? null : dados[i].Case__r.Oportunidade__r.Seller__r.Name

    //   const chave = `${codigoProduto}${codigoFilial}${nomeVendedor}`

    //   if (!chaves.includes(chave)) {
    //     chaves.push(chave)
    //   }
    // }

    // const dadosFiltrados = dados.map((record) => {

    //   const codigoProduto = record.Fornecedor__c === null ? null : record.Fornecedor__c
    //   const codigoFilial = record.Case__r.Oportunidade__r === null ? null : record.Case__r.Oportunidade__r.BaseBranch__r.SubsidiaryCode__c
    //   const nomeVendedor = record.Case__r.Oportunidade__r === null ? null : record.Case__r.Oportunidade__r.Seller__r.Name

    //   chaveMap = `${codigoProduto}${codigoFilial}${nomeVendedor}`
    //   return {
    //     record, chaveMap
    //   }
    // })

  //  const teste = dadosFiltrados.filter(p => p.chaveMap === 'null00601005JEAN VILMAR SGUISSARDI' )

    //  console.log(teste)

    //  const groupByCategory = dadosFiltrados.reduce((group, product) => {

    //   const { chaveMap } = product;

    //   group[chaveMap] = group[chaveMap] ?? [];

    //   group[chaveMap].push(product);

    //   return group;

    // }, {});

    console.log(groupByCategory)

  }


}

module.exports = new PocAgrupamentoJSON();