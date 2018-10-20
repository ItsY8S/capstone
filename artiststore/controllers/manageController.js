const User = require('../models/User')
const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')

exports.getManage = (req, res, next) => {
  User.findOne(req.user_id, function(err, user) {
    console.log(user)
    res.render('manage', { user, title: 'Manage Store' })
  })
}

exports.updateStore = (req, res, next) => {
  User.findOneAndUpdate(req.user._id, req.body, function(err, user) {
    console.log(user)
    res.redirect('/manage')
  })
}

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/')
    if (isPhoto) {
      next(null, true)
    } else {
      next({ message: `That filetype isn't allowed!` }, false)
    }
  }
}

exports.upload = multer(multerOptions).single('storeImage')

exports.resize = async (req, res, next) => {
  // check if there is no new file to resize
  if (!req.file) {
    next() // skip to the next middleware
    return
  }
  const extension = req.file.mimetype.split('/')[1]
  req.body.image = `${uuid.v4()}.${extension}`
  // now we resize
  const image = await jimp.read(req.file.buffer)
  await image.resize(800, jimp.AUTO)
  await image.write(`./public/uploads/${req.body.image}`)
  // once we have written the photo to our filesystem, keep going!
  next()
}
