const express = require('express')
const AutomationClientesCws = require('./automation-clientes-cws-testes');
const PocSubstituirCaracteres = require('./poc-substituir-caracteres')
const PocBuscarFrase = require('./poc-buscar-frase')
const PocBase64ToXml = require('./poc-base64-to-xml')
const PocArquivoCsv = require('./poc-arquivo-csv')
const DividirString = require('./dividir-string-poc')
const similars = require('./mocks/poc-arquivos-csv/exemplos.json')

const app = express();

// AutomationClientesCws.Testes();

// PocSubstituirCaracteres.Testes();
// PocBuscarFrase.Testes();

// PocBase64ToXml.Testes();
DividirString.Testes();

// PocArquivoCsv.transform(similars);



app.listen(2333)