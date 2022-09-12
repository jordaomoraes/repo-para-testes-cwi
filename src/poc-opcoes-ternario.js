
class OpcaoTernario {

	async Testes(text) {

		// const user = {

		// 	name: "Guilherme",
		// 	age: 39,
		// 	address: {
		// 		street: "Minha rua",
		// 		number: 45,
		// 		// zip: {
		// 		// 	code: 9239292,
		// 		// 	city: "Pinhal"
		// 		// }
		// 	}
		// }
		// // a expresso chama OPTIONAL CHAINING, consiste em coloca o ' ? ' no parametro
		// // que não naõ existe e depois colocar o ' ?? ' que chama nullish operator
		// // funciona como um parametro || para valores nulos

		// const teste = user.address?.zip?.code ?? 'Não informado'

		// console.log(teste)

		const array = [1, 2, 3, 4, 5, 6]

		//MAP sempre retorna o mesmo numeros de items do array, podendo modificalos
		const novoArray = array.map(item => {
			if (item % 2 === 0) {
				return item * 10
			}
			return item
		})
		console.log(novoArray)


		//exemplo filter - filtra os itens, mas não altera o valor
		const novoArray2 = array.filter(item => item % 2 === 0).
		map(item => item * 20)
		console.log(novoArray2)
	}
}

module.exports = new OpcaoTernario();


