const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username:{
    Type: String,
    required: true
}
})

module.exports = mongoose.model('User', Schema)