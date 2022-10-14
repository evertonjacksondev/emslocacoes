const express = require('express')
const { resolve } = require('path')

const app = express();

app.use('/',
  express.static(resolve(
    __dirname,
    '../build'
  ))
)
const port = 3001;

app.listen(process.env.PORT || port, (err) => {

  if (err) { return console.log(err) }
})

console.log('Servidor rodando na porta: ', port)