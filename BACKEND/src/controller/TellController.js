const codigoregiao = require('../model/TellModel.js')

class TellController {

    async calc(req, res) {
        try {

            const plans = await codigoregiao.create(req.body)
            return res.send({ plans })

        } catch (err) {

            return res.status(400).send({ error: "FALHA NA INSERÇÃO DOS DADOS!" })

        }
    }

    async list(req, res) {
        try {
            const data = await codigoregiao.find()
            return res.send({ data })
        } catch (error) {
            console.log(error)
        }

    }

}

module.exports = new TellController()