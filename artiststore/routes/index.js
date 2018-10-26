var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' })
})

router.get('/products', (req, res) => {
  res.render('products', { title: 'Products' })
})

router.get('/products/add', (req, res) => {
  res.render('product-add', { title: 'Add Product' })
})

router.get('/products/:id', (req, res) => {
  res.render('product-edit', { title: 'Edit PRODUCT NAME HERE' })
})

router.get('/orders', (req, res) => {
  res.render('orders', { title: 'Orders' })
})

router.get('/concerts', (req, res) => {
  res.render('concerts', { title: 'Concerts' })
})

router.get('/manage', (req, res) => {
  res.render('manage', { title: 'Manage Store' })
})

module.exports = router
