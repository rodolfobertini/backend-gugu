import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = {
 origin: '*',
 optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/', cors(corsOptions), (req, res, next) => {
 const json = JSON.stringify({
      nome: req.query.nome,
      idade: req.query.idade
 });
 res.send(json);
});

app.listen(port, () => {
 console.log(`Backend rodando no local e porta ${port}`);
});
