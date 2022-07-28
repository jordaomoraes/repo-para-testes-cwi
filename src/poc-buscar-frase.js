
const RetiraAssentos = require('./retira-assentos')

class PocBuscarFrase {

	async Testes() {

		const fraseErro = '"Atendimento recebido com erro na estrutura dos dados\r\n(1) : argument #0 error, expected D->U,  function dtos | U_RTTABCLI(3259) | INCPED(337) | U_F02GRV01(29) | U_F02REST2(68) | POST(69) | CALLMETHOD(497) | RESTCALLWS(1192) | HTTPCALLWSRESTFUL(1165) | HTTPCALL(1111) | HANDLE(810) | TLPP.REST.HANDLEREST(117) | "'
		
		if(fraseErro.includes('Atendimento recebido com erro na estrutura dos dados')){
			
			console.log(true)
			
		}else {

			console.log(false)
		}	

	}
}

module.exports = new PocBuscarFrase();