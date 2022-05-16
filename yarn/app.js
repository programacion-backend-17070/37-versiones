const express = require('express')
const calculadora = require('coder17070')
const app = express()

app.get('*', (req, res) => res.send(`La multiplicacion de dos mas dos es ${calculadora.multiplicar(2, 2)}`))

app.listen(8080, () => console.log('listening'))


// yarn set version latest && yarn init -y