const mongoose = require('mongoose')

mongoose.connect(
  `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`,
  { useNewUrlParser: true }
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => console.log('DATABASE CONNECTED SUCCESSFULLY'))

module.exports = db
