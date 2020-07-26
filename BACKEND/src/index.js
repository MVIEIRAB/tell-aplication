const express = require('express')
const app = express()
app.use(express.json())

const TellRoutes = require('./routes/TellRoutes')

app.use('/telzir', TellRoutes)

app.listen(3000, () => {
    console.log('to aqui, eba')
})