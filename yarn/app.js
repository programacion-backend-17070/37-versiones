const express = require('express')
const calc = require('coder17070')
const app = express()

app.get("/", (req, res) => res.send('fui creado por yarn y esta es la suma: ' + calc.suma(2, 2)))

app.listen(8080, () => console.log('listening'))