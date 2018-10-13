const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')
const passportLocal = require('../auth/local')
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

exports.getProducts = (req, res, next) => {
  Product.find({ _owner: req.user._id }, function(err, products) {
    if (err) return err
    console.log(products)
    res.render('products', { products })
  })
}

exports.upload = multer(multerOptions).single('image')

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

exports.addProduct = (req, res, next) => {
  User.findOne(req.user._id, function(err, user) {
    console.log('BODY HERE', req.body)
    const product = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      _owner: req.user._id
    })
    product.save((err, product) => {
      if (err) return err
      passportLocal.authenticate('local', { failureRedirect: '/' })(
        req,
        res,
        () => {
          res.redirect('/products')
        }
      )
    })
  })
}
