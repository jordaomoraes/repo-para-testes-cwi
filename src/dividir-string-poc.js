
const RetiraAssentos = require('./retira-assentos')

const data = {

	TaxationGroupForDestination__r: null
	

  // return status === 0
  //   ? 'default'
  //   : status === 1
  //     ? 'icon-1'
  //     : 'icon-2';

	// TaxationGroupForDestination__r: {
	// 	attributes: {
	// 		type: "SX5__c",
	// 		url: "/services/data/v54.0/sobjects/SX5__c/a0I5e000008EAtyEAG"
	// 	},
	// 	ExternalID__c: "21|4GR"
	// }
}
const string = data.TaxationGroupForDestination__r === null ? null : 
(data.TaxationGroupForDestination__r.ExternalID__c).split('|');

// const taxationGroup = dadosCadastrais.TaxationGroup__r === null ? null : (dadosCadastrais.TaxationGroup__r.ExternalID__c).split('|'); 
const teste =  string === null ? null : (string[1])
class dividirStringPoc {

	async Testes() {

		console.log(` dividir -> ${teste} `)
	}




}


module.exports = new dividirStringPoc();