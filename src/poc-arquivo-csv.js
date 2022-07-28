
const exemplosASeremCovertidos = require('./mocks/poc-arquivos-csv/exemplos.json')
const similars = exemplosASeremCovertidos;

class PocArquivoCsv {	

	transform(similars) {
    const csvString = [
      [
        'Code__c',
        'Master__c',
        'SimilarCode__c',
        'Name',
        'Line__r.ExternalID__c',
        'PricePercentage__c',
        'Deleted__c',
        'FullNameLessCharacters__c',
        'LongDescription__c',
        'ObjectMaster__r.ExternalID__c'
      ],
      ...similars.map(({
        ZY_MASTER,
        ZY_PROD,
        ZY_DESC,
        ZY_LINHA,
        ZY_PERPRC,
        FLAG_EXCLUSAO,
        ZY_CODSIM,
        ZY_DESCLG
        
      }) => [
        ZY_PROD,
        ZY_MASTER,
        ZY_PROD,
        ZY_DESC,
        ZY_LINHA,
        ZY_PERPRC,
        FLAG_EXCLUSAO === 'True',
        ZY_CODSIM,
        ZY_DESCLG,
        ZY_MASTER
      ])
    ];

    const result = (csvString.map((column) => column.join(';'))).join('\n');

		console.log(result)

    return result;
  }
}

module.exports = new PocArquivoCsv();