export default class AutomationCws {

	async AutomaionClientesCws() {

		const data1 = 'DAHNE DE ABREU 865'
		const data2 = 'Rua sem saida,  786 '

		console.log(data1.includes(','));

		if(data1.includes(',')){

			const street = data1.substring(0, data1.indexOf(','));
			const number = data1.substring(data1.indexOf(',') + 1).trim();
			console.log(`Caso 1 : Street -> ${street}   number -> ${number}`)

		}else{
			const street = data1;
			const number = 's/n'
			console.log(`Caso 1 : Street -> ${street}   number -> ${number}`)
			
		}


		// const street2 = data2.substring(0, data2.indexOf(','));
		// const number2 = data2.substring(data2.indexOf(',') + 1).trim();


	
		// console.log(`Caso 2 : Street -> ${street2}   number -> ${number2}`)

	}


}
