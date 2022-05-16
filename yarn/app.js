const express = require('express')
const app = express()

app.get("/", (req, res) => res.send('fui creado por yarn'))

app.listen(8080, () => console.log('listening'))