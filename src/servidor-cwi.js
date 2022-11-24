const express = require('express')
const AutomationClientesCws = require('./automation-clientes-cws-testes');
const PocSubstituirCaracteres = require('./poc-substituir-caracteres')
const PocBuscarFrase = require('./poc-buscar-frase')
const PocBase64ToXml = require('./poc-base64-to-xml')
const PocArquivoCsv = require('./poc-arquivo-csv')
const DividirString = require('./dividir-string-poc')
const similars = require('./mocks/poc-arquivos-csv/exemplos.json')
const opcoesTernario = require('./poc-opcoes-ternario')
const mapDecimais = require('./poc-map-casas-decimais')
const stocks = require ('./mocks/poc-map-decimais/exemplos.json')
const PocTernario = require('./poc-ternarios')
const PocDividirJsonEmArray = require('./poc-divivir-json-em-array-pedido-compra')

const app = express();

// AutomationClientesCws.Testes();
// PocSubstituirCaracteres.Testes();
// PocBuscarFrase.Testes();
// PocBase64ToXml.Testes();
// DividirString.Testes();
// PocBuscarFrase.Testes();
// mapDecimais.transform(stocks);
// PocArquivoCsv.transform(similars);

// PocTernario.Testes();
PocDividirJsonEmArray.Testes();



app.listen(2333)