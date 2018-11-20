const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')
const passportLocal = require('../auth/local')
const mongoose = require('mongoose')
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

exports.getProducts = (req, res, next) => {
  console.log('URL HERE', req.route.path)
  User.findById(req.user._id, function(err, user) {
    console.log(user)
    Product.find({ _owner: req.user._id }, (err, products) => {
      console.log(req.user)
      // if (err) return err
      console.log(products)
      res.render('products', { user, products, title: 'Products' })
    })
  })
}

exports.getProductAdd = (req, res, next) => {
  res.render('product-add', { title: 'Add a Product' })
}

exports.getProductById = (req, res, next) => {
  console.log(req.params)
  Product.findById(req.params.id, function(err, product) {
    console.log('Product found')
    res.render('product-edit', { product, title: `Edit ${product.title}` })
  })
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
      res.redirect('/products')
    })
  })
}

exports.editProductById = (req, res, next) => {
  Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    // {
    //   title: req.body.title,
    //   price: req.body.price,
    //   description: req.body.description,
    //   image: req.body.image,
    //   _owner: req.user._id
    // },
    { new: true, upsert: true },
    function(err, product) {
      if (err) throw err

      res.redirect(`/products`)
    }
  )
}

exports.deleteProductById = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if (err) throw err
    console.log('Product Deleted')
    res.redirect('/products')
  })
}
