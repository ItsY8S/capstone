const mongoose = require('mongoose')
const Schema = mongoose.Schema

let concertSchema = new Schema({
  title: String,
  date: String,
  location: String,
  venue: String,
  price: String,
  description: String,
  image: String,
  created: { type: Date, default: Date.now },
  _owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

let Concert = mongoose.model('Concert', concertSchema)

module.exports = Concert
