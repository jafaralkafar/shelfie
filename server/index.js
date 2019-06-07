const express = require('express')
require('dotenv').config()
const massive = require('massive')
const ProdCTRL = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is online')
})

app.get('/api/products', ProdCTRL.getAll)
app.post('/api/products', ProdCTRL.createProduct)
app.put('/api/products/:id', ProdCTRL.updateProduct)
app.delete('/api/products/:id', ProdCTRL.deleteProduct)


app.listen(SERVER_PORT, () => console.log('listening ', SERVER_PORT))