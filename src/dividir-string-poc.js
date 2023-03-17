
const RetiraAssentos = require('./retira-assentos')



const dadosCadastrais = {

	TaxationGroupForDestination__r: null,

	TaxationGroupForResale__r: {
		attributes: {
		  type: "SX5__c",
		  url: "/services/data/v52.0/sobjects/SX5__c/a0I5e000008EAvhEAG"
		},
		ExternalID__c: "21|2SN"
	  },

	  TaxationGroup__r: null,
	  ClientType__c: "L"

	}

    const taxationGroupResale = dadosCadastrais.TaxationGroupForResale__r === null ? null : (dadosCadastrais.TaxationGroupForResale__r.ExternalID__c).split('|');
    const taxationGroup = dadosCadastrais.TaxationGroup__r === null ? null : (dadosCadastrais.TaxationGroup__r.ExternalID__c).split('|');
    const taxationGroupResaleValue = dadosCadastrais.TaxationGroupForResale__r === null ? null : dadosCadastrais.TaxationGroupForResale__r.ExternalID__c;
    const taxationGroupValue = taxationGroup === null ? " " : taxationGroup[1];

	const A1_GRPTRIB = dadosCadastrais.ClientType__c === 'R' && taxationGroupResaleValue != null
	? taxationGroupResale[1]
	: taxationGroupValue


class dividirStringPoc {


	async Testes() {

		console.log("taxationGroupResale " + taxationGroupResale)
		console.log("taxationGroup " + taxationGroup)
		console.log("taxationGroupResaleValue " + taxationGroupResaleValue)
		console.log("taxationGroupValue " + taxationGroupValue)
		console.log("A1_GRPTRIB " + A1_GRPTRIB)
	}
}


module.exports = new dividirStringPoc();