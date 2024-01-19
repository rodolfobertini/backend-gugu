var express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.get('/', cors(corsOptions), (req, res, next) => {
    const json = JSON.stringify({
        nome: req.query.nome,
        idade: req.query.idade
    })
  res.send(json)
})

app.listen(port, () => {
  console.log(`Backend rodando no local e porta ${port}`)
})

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

