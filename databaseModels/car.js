const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    mark: String,
    model: String,
    year: Number,
    price: Number
})

module.exports = mongoose.model('Car', carSchema)