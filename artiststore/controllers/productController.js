const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')
const User = require('../models/User')
const Product = require('../models/Product')
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

exports.getProducts = (req, res) => {
  Product.find({ _owner: req.user._id }, function(err, products) {
    if (err) return err
    res.render('products', { products })
  })
}

exports.upload = multer(multerOptions).single('productHero')

exports.resize = async (req, res, next) => {
  // check if there is no new file to resize
  if (!req.file) {
    next() // skip to the next middleware
    return
  }
  const extension = req.file.mimetype.split('/')[1]
  req.body.productHero = `${uuid.v4()}.${extension}`
  // now we resize
  const productHero = await jimp.read(req.file.buffer)
  await productHero.resize(800, jimp.AUTO)
  await productHero.write(`./public/uploads/${req.body.productHero}`)
  // once we have written the photo to our filesystem, keep going!
  next()
}
