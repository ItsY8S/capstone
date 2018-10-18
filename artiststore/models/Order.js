const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({
  items: String,
  customer: {
    name: String,
    billingAddress: String,
    shippingAddress: String
  },
  dateOrdered: { type: Date, default: Date.now },
  _owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

let Order = mongoose.model('Order', orderSchema)

module.exports = Order
