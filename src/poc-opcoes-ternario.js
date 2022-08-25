
class OpcaoTernario {

	async Testes(text) {

		const user = {

			name: "Guilherme",
			age: 39,
			address: {
				street: "Minha rua",
				number: 45,
				// zip: {
				// 	code: 9239292,
				// 	city: "Pinhal"
				// }
			}
		}
		// a expresso chama OPTIONAL CHAINING, consiste em coloca o ' ? ' no parametro
		// que não naõ existe e depois colocar o ' ?? ' que chama nullish operator
		// funciona como um parametro || para valores nulos

		const teste = user.address?.zip?.code ?? 'Não informado'

		console.log(teste)
	}
}

module.exports = new OpcaoTernario();


