
const RetiraAssentos = require('./retira-assentos')

class PocSubstituirCaracteres {

	async Testes() {
		 const stringText = "SEGUE 'PáàRé CORRENTE'< NO PIAúÍ ÇLIEêTE RETIRA NA AGÊNCIA";
		// console.log( `Com replace simples || string ${stringText} || Tratada -> ${testReplace(stringText)}`);
		// console.log( `Com Regex || string  ${stringText} || Tratada -> ${removeAcento(stringText)}`);
		 console.log( `Com Normalize || string  ${stringText} || Tratada -> ${testeNormalize(stringText)}`);
	//	testReplace();
	}
}

function testeNormalize(text){
	//return text.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
	return text.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
}

function removeAcento(text) {
	text = text.toLowerCase();
	text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'A');
	text = text.replace(new RegExp('[áàâã]', 'gi'), 'a');
	text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
	text = text.replace(new RegExp('[éèê]', 'gi'), 'e');
	text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
	text = text.replace(new RegExp('[íìî]', 'gi'), 'i');
	text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
	text = text.replace(new RegExp('[òóôõ]', 'gi'), 'o');
	text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
	text = text.replace(new RegExp('[úùû]', 'gi'), 'u');
	text = text.replace(new RegExp('[Ç]', 'gi'), 'C');
	text = text.replace(new RegExp('[ç]', 'gi'), 'c');
	return text;
}


function testReplace(text) {

  text = text
	.replace('Á','A')
	.replace('Â','A')
	.replace('À','A')
	.replace('À','A')
	.replace('á','a')
	.replace('à','a')
	.replace('â','a')
	.replace('ã','a')
	.replace('Ç','C')
	.replace('Ç','C')
	.replace('&','')
	.replace('>','')
	.replace('ñ','n')
	.replace('ç','c');
	return text;
}



module.exports = new PocSubstituirCaracteres();