const mongoose = require('mongoose')
const User = require('../models/User')
const Product = require('../models/Product')
const Cart = require('../models/Cart')
const Concert = require('../models/Concert')

exports.getStore = (req, res, next) => {
  User.findOne({ slug: req.params.storeName }, function(err, user) {
    Product.find({ _owner: user._id }, function(err, products) {
      res.render('store', { user, products, title: 'Products' })
    })
  })
}

exports.getProductDetails = (req, res, next) => {
  User.findOne({ slug: req.params.storeName }, function(err, user) {
    console.log(user)
    Product.findById(req.params.productId, function(err, product) {
      console.log('here wowowowowo', product)
      res.render('product-details', {
        user,
        product,
        title: `Product Details`
      })
    })
  })
}

exports.getConcerts = (req, res, next) => {
  User.findOne({ slug: req.params.storeName }, function(err, user) {
    Concert.find({ _owner: user._id }, function(err, concerts) {
      res.render('storeConcerts', { user, concerts, title: 'Concerts' })
    })
  })
}

exports.getContact = (req, res, next) => {
  User.findOne({ slug: req.params.storeName }, function(err, user) {
    res.render('contact', { user, title: 'Contact' })
  })
}

exports.getCart = (req, res, next) => {
  User.findOne({ slug: req.params.storeName }, function(err, user) {
    Cart.findOne({ _owner: user._id }, function(err, cart) {
      var products2 = []
      cart.products.forEach(function(product) {
        products2.push(product)
      })
      res.render('cart', { user, cart, products2, title: 'Cart' })
    })
  })
}

exports.addToCart = (req, res, next) => {
  User.findOne({ slug: req.params.storeName }, function(err, user) {
    Product.findById(req.params.productId, function(err, product) {
      Cart.findOne({ _owner: user._id }, function(err, cart) {
        if (cart) {
          let newProduct = {
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image,
            _owner: user._id
          }
          cart.products.push(newProduct)
          cart.save(function(err, products) {
            var products2 = []
            cart.products.forEach(function(product) {
              products2.push(product)
            })

            res.redirect(`/store/${user.slug}/cart`)
          })
        } else {
          const cart = new Cart({
            products: [
              {
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image
              }
            ],
            _owner: user._id
          })
          cart.save((err, cart) => {
            if (err) return err
            console.log('cart here', cart)

            var products = []
            cart.products.forEach(function(product) {
              products.push(product)
            })

            res.render('cart', { user, cart, products, title: 'My Cart' })
          })
        }
      })

      // res.render('cart', { user, product, title: 'Cart' })
    })
  })
}

exports.removeFromCart = (req, res, next) => {
  User.findOne({ slug: req.params.storeName }, function(err, user) {
    // Cart.update(
    //   { _owner: user._id },
    //   { $pull: { products: { _id: req.params.productId } } },
    //   { multi: true }
    // )

    Cart.update(
      { _owner: user._id },
      { $pull: { products: { _id: req.params.productId } } },
      { safe: true, multi: true },
      function(err, obj) {
        if (err) throw err
        res.redirect(`/store/${user.slug}/cart`)
      }
    )

    // Cart.update(
    //   { _id: '5bcb69ea544b967937428c0a' },
    //   { $pull: { products: { _id: '5bcb69ea544b967937428c0a' } } },
    //   { upsert: true },
    //   function(err) {
    //     if (err) throw err
    //     res.redirect(`/store/${user.slug}/cart`)
    //   }
    // )

    // Cart.findOneAndUpdate(
    //   { _owner: user._id },
    //   { $pull: { products: req.params.productId } },
    //   { safe: true, upsert: true },
    //   function(err, doc) {
    //     if (err) {
    //       console.log(err)
    //       res.redirect(`/store/${user.slug}/cart`)
    //     } else {
    //       //do stuff
    //     }
    //   }
    // )

    // Cart.updateOne(
    //   { _owner: user._id },
    //   { $pull: { products: req.params.productId } }
    // )

    // res.redirect(`/store/${user.slug}/cart`)
  })
}
