
const exemplosBase64 = require('./mocks/poc-base64-xml/exemplos.json')

class PocBase64ToXml {

	async Testes() {

		const retorno = {
			NM_MASTER: "CH001          ",
			ID_EXTERNO: "CH001          ",
			Z8_NOME: "CHIPA TRADICIONAL 900G                  ",
			FLAG_EXCLUSAO: "False"
		}

		const teste =  retorno.FLAG_EXCLUSAO === 'True' ? true : false
		const x = 10;

		var a = retorno.FLAG_EXCLUSAO === 'True' ? true : false;
		var a2 = x === 2 ? "Yes" : "No";



		// var decodedStringAtoB = atob(data[0].xml);

		// console.log(decodedStringAtoB);

		// const base64 = exemplosBase64[0].xml;
		// const buff = Buffer.from(base64, 'base64');
		// const str = buff.toString('utf-8');	
		 console.log(a);



	}
}

module.exports = new PocBase64ToXml();