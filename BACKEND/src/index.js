const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const route = require('./routes/TellRoutes')

app.use('/telzir', route)

app.listen(3001, () => {
    console.log('to aqui, eba')
})