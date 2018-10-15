const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  storeName: String,
  storeBio: String
})

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
