var express = require('express')
var router = express.Router()
const User = require('../models/User')
const Product = require('../models/Product')
const passportLocal = require('../auth/local')
const protect = require('connect-ensure-login').ensureLoggedIn
const { check, validationResult } = require('express-validator/check')
const authController = require('../controllers/authController')
const productController = require('../controllers/productController')

// Authentication Routes
router.get('/login', authController.loginRender)
router.post('/login', authController.login)
router.get('/signup', authController.signupRender)
router.post('/signup', authController.checkLength, authController.signup)
router.get('/logout', authController.logout)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' })
})

router.get('/products', (req, res) => {
  res.render('products', { title: 'Products' })
})

router.get('/products/add', (req, res) => {
  res.render('product-edit', { title: 'Add Product' })
})

router.post(
  '/products/add',
  productController.upload,
  productController.resize,
  productController.addProduct
)

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
