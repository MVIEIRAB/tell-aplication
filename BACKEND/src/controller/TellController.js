const TellSchema = require('../model/TellModel.js')

class TellController {

    async calc(req, res) {
        const tell = new TellSchema(req.body)
        await tell
            .save()
            .then(res => {
                return res.status(200).json(res)
            })
            .catch(error => {
                return res.status(500).json({error: "algo deu errado"})
            })
    }

}

module.exports = new TellController()