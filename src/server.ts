import express from 'express'
import cors from 'cors';
import routes from './routes';
import moment from 'moment'
import Cwi from './cwi'

const app = express();
app.use(cors())
app.use(express.json())
app.use(routes);

const TestesCwi = new (Cwi as any)();
TestesCwi.testesJs();


// const diaMais30 = moment().add(30, 'days').format("YYYYMMDD");

// // const momentFormatado = momentHoje.format("MM");

//  const diahoje = momentHoje.format("YYYYMMDD");
//  const diahojeMais30 = momentHoje.add(30, 'days').format("YYYYMMDD");
// // const diateste = moment().startOf("month")
// // console.log( "Mes ->" + momentFormatado + "Dia ->" + diateste);

// const mesAtual = moment(momentHoje).format("MM");
// // const momentDataInicio = moment(mesAtual).startOf("month").toDate();
// const momentDataFim = moment( momentHoje).hours(23).minutes(59).toDate();

// const momentDataInicio = moment(momentHoje).startOf("month").hours(0).minutes(0).toDate();


// console.log( "Mes   -> " +diahoje );
// console.log( "MDia hoje + 30  -> " +diaMais30 );

// 

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('Servidor Rodando na porta ' + port + '...')
})