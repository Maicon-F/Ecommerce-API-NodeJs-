const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }],

    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
},

    address: {
            type: String,
            required: true
        },

    payment: {
            card: {
                number: {
                    type: String
                },
                cvc: {
                    type: String
                }

            }

        }


})

module.exports = mongoose.model('Cart', Schema)
