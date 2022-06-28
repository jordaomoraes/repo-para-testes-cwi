const express =require ('express')
const AutomationClientesCws = require('./automation-clientes-cws-testes');

const app = express();

AutomationClientesCws.Testes();



app.listen(2333)