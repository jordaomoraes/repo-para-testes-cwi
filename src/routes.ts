import express from 'express';

const routes = express.Router();

routes.get('/',(req, res)=>{
  res.json({"Servidor " : "Online"});
})

export default routes;