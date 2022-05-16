const express = require('express')
const app = express()

app.get("/", (req, res) => res.send('fui creado por pnpm'))

app.listen(8080, () => console.log('listening'))