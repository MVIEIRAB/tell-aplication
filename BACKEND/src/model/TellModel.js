const mongoose = require('../config/database')
const Schema = mongoose.Schema

const TellSchema = new Schema({
    origin: {
        type: Number, 
        required: true
    },
    destiny: {
        type: Number, 
        required: true
    },
    minutes: {
        type: Number, 
        required: true
    },
    createdat: {
        type: Date, 
        default: Date.now()
    }
})

module.exports = mongoose.model('Tell', TellSchema)