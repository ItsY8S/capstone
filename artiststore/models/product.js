const mongoose = require('mongoose')
const Schema = mongoose.Schema

let productSchema = new Schema({
  title: String,
  price: String,
  description: String
})
