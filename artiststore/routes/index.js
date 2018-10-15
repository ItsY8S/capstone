var express = require('express')
var router = express.Router()
const User = require('../models/User')
const Product = require('../models/Product')
const passportLocal = require('../auth/local')
const protect = require('connect-ensure-login').ensureLoggedIn
const { check, validationResult } = require('express-validator/check')
const authController = require('../controllers/authController')
const dashController = require('../controllers/dashController')
const productController = require('../controllers/productController')
const orderController = require('../controllers/orderController')
const concertController = require('../controllers/concertController')
const manageController = require('../controllers/manageController')

// Authentication Routes
router.get('/login', authController.loginRender)
router.post('/login', authController.login)
router.get('/signup', authController.signupRender)
router.post('/signup', authController.checkLength, authController.signup)
router.get('/logout', authController.logout)

// GET Navigation Routes
router.get('/', dashController.getDashboard)
router.get('/products', productController.getProducts)
router.get('/orders', orderController.getOrders)
router.get('/concerts', concertController.getConcerts)
router.get('/manage', manageController.getManage)

// CRUD Routes
router.get('/products/add', productController.getProductAdd)
router.get('/products/:id', productController.getProductById)
router.post(
  '/products/edit/:id',
  protect(),
  productController.upload,
  productController.resize,
  productController.editProductById
)
router.post('/concerts/add', concertController.addConcert)
router.get('/concerts/:id', concertController.getConcertById)

router.post(
  '/products/add',
  productController.upload,
  productController.resize,
  productController.addProduct
)

module.exports = router
