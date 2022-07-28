
class AutomationClienteCws {

	async Testes() {
		const data1 = 'DAHNE DE ABREU, 865'
		const data2 = 'Rua sem saida,  786 '

		// genre: data.A1_PESSOA !== 'F' ? '' : data.A1_CLIGENE === 'F' ? 'FEMALE' : 'MALE', // eslint-disable-line
	
		console.log("teste -> " + 'teste' > '0');
		
		if(data1.includes(',')){
			const street = data1.substring(0, data1.indexOf(','));
			const number = data1.substring(data1.indexOf(',') + 1).trim();
			console.log(`Caso 1 : Street -> ${street}   number -> ${number}`)
		}else{
			const street = data1;
			const number = 's/n'
			console.log(`Caso 1 : Street -> ${street}   number -> ${number}`)			
		}
	}
}

module.exports = new AutomationClienteCws();