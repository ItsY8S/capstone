const mongoose = require('mongoose')
const Schema = mongoose.Schema

let productSchema = new Schema({
  title: String,
  price: String,
  description: String,
  image: String,
  created: { type: Date, default: Date.now },
  _owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

let Product = mongoose.model('Product', productSchema)

module.exports = Product
