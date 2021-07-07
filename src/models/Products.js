const mongoose = require('mongoose')


const Schema = new mongoose.Schema({
    productName:{
    Type: String,
    required: true
},
    productDescription:{
    Type: String
},
   productPrice:{
    Type: Number,
    required: true
},
    productQuantity:{
    Type: Number,
    required: true
},
    productImage:{
    Type: String,
},
    username:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}

})

module.exports = mongoose.model('User', Schema)