const mongoose = require('mongoose')
const Schema = mongoose.Schema

let cartSchema = new Schema({
  products: [
    {
      title: String,
      price: String,
      description: String,
      image: String,
      _owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ],
  total: String,
  _owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

let Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart
