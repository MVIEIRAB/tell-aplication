const express = require('express')
const route = express.Router()

const TellController = require('../controller/TellController')

route.post('/', TellController.calc)
route.get('/list', TellController.list)


module.exports = route