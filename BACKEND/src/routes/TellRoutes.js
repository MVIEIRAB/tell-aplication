const express = require('express')
const router = express.Router()

const TellController = require('../controller/TellController')

router.post('/', TellController.calc)

module.exports = router