
const RetiraAssentos = require('./retira-assentos')

const data = {

	TaxationGroupForDestination__r: {
		attributes: {
			type: "SX5__c",
			url: "/services/data/v54.0/sobjects/SX5__c/a0I5e000008EAtyEAG"
		},
		ExternalID__c: "21|4GR"
	}
}

const string = data.TaxationGroupForDestination__r === null ? null : (data.TaxationGroupForDestination__r.ExternalID__c).split('|') ;

// const resultado = string.split('|')


class dividirStringPoc {

	async Testes() {

		console.log(`aaa dividir -> ${string[1]} `)
	}




}


module.exports = new dividirStringPoc();