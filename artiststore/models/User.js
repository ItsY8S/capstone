var mongoose = require('mongoose')
var slug = require('mongoose-slug-generator')
// mongoose.plugin(slug);
let Schema = mongoose.Schema

mongoose.plugin(slug),
  (Schema = mongoose.Schema),
  (userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: String,
    email: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    storeName: String,
    // storeSlug: String,
    slug: { type: String, slug: 'storeName' },
    storeBio: String,
    image: String
  }))

// const mongoose = require('mongoose')

// let userSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   password: String,
//   products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
//   storeName: String,
//   storeSlug: String,
//   storeBio: String,
//   image: String
// })

userSchema.statics.findOneOrCreate = function findOneOrCreate(
  condition,
  doc,
  callback
) {
  const self = this
  self.findOne(condition, (err, result) => {
    return result
      ? callback(err, result)
      : self.create(doc, (err, result) => {
          return callback(err, result)
        })
  })
}

module.exports = mongoose.model('User', userSchema)
